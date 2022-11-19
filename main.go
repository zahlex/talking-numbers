package main

import (
	"log"
	"net/http"
	"talking-numbers/api"
)

func main() {

	// Instantiates a client.
	api.InitSynthesize()
	defer api.CloseSynthesize()

	// Instantiates a HTTP server
	http.HandleFunc("/synthesize", api.Synthesize)

	fileServer := http.FileServer(http.Dir("./dist"))
	http.Handle("/", fileServer)

	log.Fatal(http.ListenAndServe(":8080", nil))
}
