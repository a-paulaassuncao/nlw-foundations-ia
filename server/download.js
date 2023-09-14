import ytdl from "ytdl-core"
import fs from "fs"

export const download = (videoId) => {
  const videoURL = "https://www.youtube.com/shorts/" + videoId
  console.log("Realizando o download do vídeo:", videoId)

  ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly" })
    .on("info", (info) => {
      const seconds = info.formats[0].approxDurationMs / 1000

      if (seconds > 120) {
        console.error("A duração desse vídeo é maior do que 120 segundos")
      } else {
        console.log("Duração do vídeo:", seconds, "segundos")
      }
    })
    .on("end", () => {
      console.log("Download do vídeo finalizado.")
    })
    .on("error", (error) => {
      console.error(
        "Não foi possível fazer o download do vídeo. Detalhes do erro:",
        error
      )
    })
    .pipe(fs.createWriteStream("./tmp/audio.mp4"))
}
