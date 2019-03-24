const initialTextState = {
  user: {id: 0, username: '', bizcards: [], collections: []},
  imgData: null,
  line1: '',
  line2: '',
  line3: '',
  line4: '',
  line5: '',
  newCard: null
}


const textReducer = (state = initialTextState, action) => {


  switch(action.type) {

    case "UPDATE_USER":
    return {
      ...state,
      user: action.payload
    }

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

    case "ADD_CARD":
    return {
      ...state,
      newCard: action.payload
    }

    case "REMOVE_CARD":

    const cards = state.user.bizcards.filter(card => card.id !== parseInt(action.payload.data.id))

    return {
      ...state,
      user: {...state.user, bizcards: cards /*{...state.user.bizcards}*/}
    }

    case "CLEAR_STATE":
    return initialTextState

    default:
    return state
  }
}

export default textReducer
