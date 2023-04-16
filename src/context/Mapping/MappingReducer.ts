import { MappingContextProps } from "./MappingContext"
type MappingAction = 
  { type: "SET_BODY", payload: string } 
| { type: "SET_MAPPING", payload: string }

export const MappingReducer = (state: MappingContextProps, action: MappingAction) => {
  switch (action.type) {
  case "SET_BODY":
    return {
      ...state,
      body: action.payload
    }
  case "SET_MAPPING":
    return {
      ...state,
      mapping: action.payload
    }
  default:
    return state
  }
}