import { useReducer } from "react"
import { MappingContext } from "./MappingContext"
import { MappingReducer } from "./MappingReducer"

interface MappingProviderProps {
    children: JSX.Element | JSX.Element[]
}

export interface MappingState{
    body: string,
    mapping: string,
}
const INITIAL_STATE: MappingState = {
  body: "",
  mapping: "",
}


export const MappingProvider = ({children}: MappingProviderProps) => {
  const [state, dispatch] = useReducer(MappingReducer, INITIAL_STATE)
  return (
    <MappingContext.Provider value={{
      ...state, 
      dispatch
    }
    }>
      {children}
    </MappingContext.Provider>
  )
}
