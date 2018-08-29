import MYAPI from '../connectAPI.js'
import $ from 'jquery'

export function setImgData(imageSrc) {
  return {
    type: "CHANGE_IMGDATA",
    payload: imageSrc
  }
}

export function convertImg(imageSrc) {

  return dispatch => {

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
       let parsedText = resData.ParsedResults[0].ParsedText
       dispatch({type: "CHANGE_PARSEDTEXT", payload: parsedText})
     })
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
