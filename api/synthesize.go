package api

import (
	texttospeech "cloud.google.com/go/texttospeech/apiv1"
	"context"
	"encoding/json"
	texttospeechpb "google.golang.org/genproto/googleapis/cloud/texttospeech/v1"
	"io/ioutil"
	"log"
	"net/http"
)

var ctx context.Context
var client *texttospeech.Client

type synthesizeRequest struct {
	Text         string `json:"text"`
	LanguageCode string `json:"languageCode"`
}

func InitSynthesize() {
	ctx = context.Background()

	var err error
	client, err = texttospeech.NewClient(ctx)
	if err != nil {
		log.Fatal(err)
	}
}

func CloseSynthesize() {
	err := client.Close()
	if err != nil {
		log.Println(err)
	}
}

func Synthesize(w http.ResponseWriter, r *http.Request) {
	//Handle CORS preflight request
	if r.Method == "OPTIONS" {
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:1234")
		w.Header().Set("Access-Control-Allow-Methods", "POST")
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding")
		w.WriteHeader(http.StatusOK)
		return
	}

	// Only accept POST requests
	if r.Method != "POST" {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}

	// Only accept Content-Type: application/json
	if r.Header.Get("Content-Type") != "application/json" {
		w.WriteHeader(http.StatusUnsupportedMediaType)
		return
	}

	// Ony accept if body is intact
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		w.WriteHeader(http.StatusPartialContent)
		return
	}

	// Only accept if valid request object
	var synReq synthesizeRequest
	err = json.Unmarshal(body, &synReq)
	if err != nil || synReq.Text == "" || synReq.LanguageCode == "" {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	ip := r.RemoteAddr
	if r.Header.Get("X-Real-IP") != "" {
		ip = r.Header.Get("X-Real-IP")
	}
	log.Println("LanguageCode="+synReq.LanguageCode, "Text="+synReq.Text, "IP="+ip, "User-Agent="+r.UserAgent())

	var audio = fetchSynthesis(synReq)

	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:1234")
	w.Header().Set("Content-Type", "audio/mpeg")
	_, err = w.Write(audio)
	if err != nil {
		log.Println(err)
	}
}

func fetchSynthesis(data synthesizeRequest) []byte {
	req := texttospeechpb.SynthesizeSpeechRequest{
		// Set the text input to be synthesized.
		Input: &texttospeechpb.SynthesisInput{
			InputSource: &texttospeechpb.SynthesisInput_Text{Text: data.Text},
		},
		// Build the voice request, select the language code ("en-US") and the SSML
		// voice gender ("neutral").
		Voice: &texttospeechpb.VoiceSelectionParams{
			LanguageCode: data.LanguageCode,
			SsmlGender:   texttospeechpb.SsmlVoiceGender_NEUTRAL,
		},
		// Select the type of audio file you want returned.
		AudioConfig: &texttospeechpb.AudioConfig{
			AudioEncoding: texttospeechpb.AudioEncoding_MP3, // On change, also change Content-Type header
		},
	}

	resp, err := client.SynthesizeSpeech(ctx, &req)
	if err != nil {
		log.Fatal(err)
	}

	return resp.AudioContent
}
