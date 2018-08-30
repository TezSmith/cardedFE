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
       let parsedText = text.split(/((?:\w+ ){5})/g).filter(Boolean).join("\n");
       dispatch({type: "CHANGE_PARSEDTEXT", payload: parsedText})
     })
   }
 }

 export function retakePhoto() {
   return {
     type: "CLEAR_IMGDATA",
     payload: null
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
