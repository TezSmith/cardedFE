import MYAPI from '../connectAPI.js'
import $ from 'jquery'

export function convertImg(imageSrc) {
  return dispatch => {

    dispatch({type: "CHANGE_IMGDATA", payload: imageSrc})

    let form = new FormData()
    form.append('base64Image', imageSrc)

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.ocr.space/parse/image",
      "method": "POST",
      "headers": {
        "apiKey": MYAPI,
        "Cache-Control": "no-cache",
      },
      "processData": false,
      "contentType": false,
      "mimeType": "multipart/form-data",
      "data": form
    }

       $.ajax(settings).done((response) => {
       let resData = JSON.parse(response)
       let text = resData.ParsedResults[0].ParsedText
       let words = text.split(" ")

        let i;
        let lineA = [];
        let lineB = [];
        let lineC = [];

        let objA = {};

        for (i = 0; i < words.length; i++) {
          if (i < 5) {
            lineA.push(words[i])
          } else if (i > 5 && i <= 10) {
            lineB.push(words[i])
          } else {
            lineC.push(words[i])
          }
        }

        objA["wordsA"] = lineA.join(" ")
        objA["wordsB"] = lineB.join(" ")
        objA["wordsC"] = lineC.join(" ")

        let parsedText = objA

       dispatch({type: "CHANGE_PARSEDTEXT", payload: parsedText})
     })
   }
 }

 export function retakePhoto() {
   return {
     type: "CLEAR_IMGDATA"
   }
 }

  // const headers = { apikey: MYAPI, 'Content-Type': 'multipart/form-data' }
  // const body = JSON.stringify({base64Image: imageSrc})
  // fetch('https://api.ocr.space/parse/image', {
  //   method: 'POST',
  //   headers: headers,
  //   body: JSON.stringify({body})
  // }).then(res => res.json())
  // .then(console.log)
