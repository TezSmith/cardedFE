import MYAPI from '../connectAPI.js'
import $ from 'jquery'

export function registerUser(values) {
  return dispatch => {

    fetch("http://localhost:3000/api/v1/signup", {
       method: 'POST',
       body: JSON.stringify(values),
       headers: {"Content-Type": "application/json"}
     }).then(res => res.json()).then(res => {
         dispatch({type: "UPDATE_USER", payload: {id: res.data.id, username: res.data.attributes.username, bizcards: res.data.attributes.bizcards, collections: res.data.attributes.collections } })
       }
     )

  }
}

export function getUser(values) {
  return dispatch => {

    fetch("http://localhost:3000/api/v1/login", {
       method: 'POST',
       body: JSON.stringify(values),
       headers: {"Content-Type": "application/json"}
     }).then(res => res.json()).then(res => {
       console.log(res);
       dispatch({type: "UPDATE_USER", payload: {id: res.data.id, username: res.data.attributes.username, bizcards: res.data.attributes.bizcards, collections: res.data.attributes.collections } })
       // dispatch({type: "UPDATE_USERNAME", payload: res.data.attributes.username })
       }
     )

  }
}

export function handleLogout() {
  return {
    type: "CLEAR_STATE"
  }
}

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
        let lineD = [];
        let lineE = [];

        for (i = 0; i < words.length; i++) {
          if (i < 5) {
            lineA.push(words[i])
          } else if (i > 5 && i <= 10) {
            lineB.push(words[i])
          } else if (i > 10 && i <= 15){
            lineC.push(words[i])
          } else if (i > 15 && i <= 20){
            lineD.push(words[i])
          } else {
            lineE.push(words[i])
          }
        }

        let line1 = lineA.join(" ")
        let line2 = lineB.join(" ")
        let line3 = lineC.join(" ")
        let line4 = lineD.join(" ")
        let line5 = lineE.join(" ")

       dispatch({type: "CHANGE_LINE1", payload: line1})
       dispatch({type: "CHANGE_LINE2", payload: line2})
       dispatch({type: "CHANGE_LINE3", payload: line3})
       dispatch({type: "CHANGE_LINE4", payload: line4})
       dispatch({type: "CHANGE_LINE5", payload: line5})
     })
   }
 }

 export function retakePhoto() {
   return {
     type: "CLEAR_IMGDATA"
   }
 }

 export function createCard(values) {
   return dispatch => {

   fetch("http://localhost:3000/api/v1/bizcards", {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {"Content-Type": "application/json"}
    }).then(res => res.json()).then(console.log)

  }

 }
