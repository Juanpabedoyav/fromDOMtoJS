import { createContext } from "react"

export interface MappingContextProps {
    body:string,
    mapping: string
}
export const MappingContext = createContext({} as MappingContextProps)