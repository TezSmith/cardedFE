const initialState = {
  imgData: null,
  parsedText: '',
  cards: {}
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {

    case "CHANGE_IMGDATA":
    return {
      imgData: action.payload
    }

    case "CHANGE_PARSEDTEXT":
    return {
      parsedText: action.payload
    }

    default:
    return state
  }
}

export default rootReducer
