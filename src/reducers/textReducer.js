const initialTextState = {
  current_user: {id: 0},
  imgData: null,
  line1: '',
  line2: '',
  line3: '',
  line4: '',
  line5: '',
  card_name: '',
  collection_name: ''
}

const textReducer = (state = initialTextState, action) => {
  switch(action.type) {

    case "CHANGE_IMGDATA":
    return {
      ...state,
      imgData: action.payload
    }

    case "CHANGE_LINE1":
    return {
      ...state,
      line1: action.payload
    }

    case "CHANGE_LINE2":
    return {
      ...state,
      line2: action.payload
    }

    case "CHANGE_LINE3":
    return {
      ...state,
      line3: action.payload
    }

    case "CHANGE_LINE4":
    return {
      ...state,
      line4: action.payload
    }

    case "CHANGE_LINE5":
    return {
      ...state,
      line5: action.payload
    }

    case "CLEAR_IMGDATA":
    return {
       ...state,
       imgData: null
    }

    default:
    return state
  }
}

export default textReducer
