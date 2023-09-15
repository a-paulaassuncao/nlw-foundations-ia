const form = document.querySelector("#form")
const input = document.querySelector("#url")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const videoURL = input.value
  console.log("URL DO VÍDEO", videoURL)
})
