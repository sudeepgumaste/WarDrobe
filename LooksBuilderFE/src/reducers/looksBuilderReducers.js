import shirtPlaceholder from "../assets/placeholders/shirtPlaceholder.svg"
import pantsPlaceholder from "../assets/placeholders/pantsPlaceholder.svg"
import footwearPlaceholder from "../assets/placeholders/footwearPlaceholder.svg"
import leftAccessoryPlaceholder from "../assets/placeholders/leftAccessoryPlaceholder.svg"


const looksBuilderDefaultState={
  popUpState: false,
  selectedWear: 'topWear',
  urls:{
    topWear: [],
    bottomWear : [],
    leftWristWear: [],
    rightWristWear:[],
    footWear: [],
    headWear:[]
  },
  selected:{
    topWear: shirtPlaceholder,
    bottomWear : pantsPlaceholder,
    leftWristWear: leftAccessoryPlaceholder,
    rightWristWear:"",
    footWear: footwearPlaceholder,
    headWear:""
  }
}

export const looksBuilderReducer = (state=looksBuilderDefaultState, action) => {
  switch(action.type){
    case "TOGGLE_POP_UP_STATE":
      return{
        ...state,
        popUpState: !state.popUpState
      }
    
    case "ADD_URL_TO_CATALOGUE":
      return{
        ...state,
        urls:{
          ...state.urls,
          [state.selectedWear]: [action.url, ...state.urls[state.selectedWear]]
        }
      }

    case "SET_SELECTED_ITEM":
      return{
        ...state,
        selected:{
          ...state.selected,
          [state.selectedWear] : action.item
        }
      }

    case "SET_SELECTED_WEAR":
      return{
        ...state,
        selectedWear : action.selectedWear
      }
  
    case "REMOVE_ITEM":
      console.log("Remove");
      
      return{
        ...state,
        urls : {
          ...state.urls,
          [state.selectedWear] : state.urls[state.selectedWear].filter((item, index) => index !== action.id)
        }
      }

    default: return state
  }
} 