import JSConfetti from 'js-confetti'

const playback: HTMLElement = document.getElementById("playback")
const skip: HTMLElement = document.getElementById("skip")
const heart: HTMLElement = document.getElementById("heart")
const label: HTMLElement = document.getElementById("label")

const input: HTMLInputElement = <HTMLInputElement>document.getElementById("input")
const range: HTMLInputElement = <HTMLInputElement>document.getElementById("range")
const voice: HTMLInputElement = <HTMLInputElement>document.getElementById("voice")

const audio: HTMLAudioElement = <HTMLAudioElement>document.getElementById("audio")

let startTime: number
let number: number
let streak: number = 0
let love: boolean = false

let largest: number
let voiceLanguage: string

setVoice()
setLargest()
setStyle()
changeStats()
newNumber()

const jsConfetti = new JSConfetti()

// ### Core ###

// @ts-ignore
async function newNumber() {
    number = Math.round(Math.random() * largest)
    console.log("Fetching audio for number:", number)
    await fetchSynthesis()
    startTime = new Date().getTime()
}

// @ts-ignore
async function fetchSynthesis() {
    const endpoint: string = window.location.host === "localhost:1234" ? "http://localhost:8080" : ""

    const response = await fetch(endpoint + "/synthesize", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'omit', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({text: number.toString(), languageCode: voiceLanguage}) // body data type must match "Content-Type" header
    })

    const blob = await response.blob()
    const objectUrl = URL.createObjectURL(blob)
    audio.src = objectUrl
    // Release resource when it's loaded
    audio.onload = function () {
        URL.revokeObjectURL(objectUrl)
    }
}

// ### Helper ###

function playNumber(): void {
    audio.play()
}

function setStyle(): void {
    const min = Number(range.min)
    const max = Number(range.max)
    const val = Number(range.value)

    range.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

function runConfetti(): void {
    if (love) {
        jsConfetti.addConfetti({
            emojis: ['❤️'],
            emojiSize: 100,
            //confettiRadius: 100,
            confettiNumber: 50,
        })
    } else {
        jsConfetti.addConfetti()
    }
}

// ### Settings ###

function setLargest(): void {
    switch (range.value) {
        case "0":
            largest = 10
            break
        case "1":
            largest = 100
            break
        case "2":
            largest = 1000
            break
        case "3":
            largest = 1000000
            break
    }
}

function setVoice(): void {
    voiceLanguage = voice.value
}

// ### Stats ###

function getKey(name: string): string {
    return voiceLanguage + "." + name
}

function getStorage(name: string): string {
    return localStorage.getItem(getKey(name))
}

function changeStats(): void {
    const statsTitle: HTMLAudioElement = <HTMLAudioElement>document.querySelector("section.stats p")
    statsTitle.setAttribute("data-dict", "stats.title."+ voiceLanguage)

    document.querySelectorAll('[data-stats]').forEach((element: HTMLElement) => {
        const value: string = getStorage(element.getAttribute("data-stats"))
        element.innerHTML = value ? value : "-"
    })
}

function updateStat(name: string, value: string): void {
    localStorage.setItem(getKey(name), value)
    document.querySelector('[data-stats="' + name + '"]').innerHTML = value
}

function incrementStat(name: string) {
    let number = parseInt(getStorage(name))
    number = number ? number + 1 : 1
    updateStat(name, number.toString())
}

function lowerStat(name: string, value: number) {
    let number = parseInt(getStorage(name))
    if (isNaN(number) || value < number) {
        updateStat(name, value.toString())
    }
}

function riseStat(name: string, value: number) {
    let number = parseInt(getStorage(name))
    if (isNaN(number) || value > number) {
        updateStat(name, value.toString())
    }
}

// ### Events ###

playback.onclick = () => {
    playNumber()
}

skip.onclick = () => {
    streak = 0
    newNumber().then(() => {
        playNumber()
    })
}

input.oninput = () => {
    if (isNaN(+input.value)) {
        return
    }
    if (Number(input.value) === number) {
        const duration = (new Date().getTime() - startTime) / 1000
        input.value = ""
        streak += 1

        riseStat("solved.streak", streak)
        riseStat("solved.highest", number)
        lowerStat("solved.quickest", duration)
        incrementStat("solved.total")
        if (number <= 10) {
            incrementStat("solved.10")
        } else if (number <= 100) {
            incrementStat("solved.100")
        } else if (number <= 1000) {
            incrementStat("solved.1000")
        } else if (number <= 1000000) {
            incrementStat("solved.1000000")
        }

        if (streak % 5 === 0) {
            runConfetti()
        }

        newNumber().then(() => {
            playNumber()
        })
    }
}

input.onfocus = () => {
    label.style.opacity = "0"
}

input.onblur = () => {
    if (input.value != "") {
        return
    }
    label.style.opacity = "1"
}

range.oninput = () => {
    setStyle()
    setLargest()
    newNumber().then(() => {
        playNumber()
    })
}

voice.oninput = () => {
    setVoice()
    changeStats()
    newNumber().then(() => {
        playNumber()
    })
}

heart.onclick = () => {
    love = true
    runConfetti()
}
