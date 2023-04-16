import { MappingContext } from "./MappingContext"

interface MappingProviderProps {
    children: JSX.Element | JSX.Element[]
}
const INITIAL_STATE = {
  body: "",
  mapping: ""
}


export const MappingProvider = ({children}: MappingProviderProps) => {
  return (
    <MappingContext.Provider value={INITIAL_STATE}>
      {children}
    </MappingContext.Provider>
  )
}
