import { createContext } from "react"

export interface MappingContextProps {
    body: string,
    mapping:string,
    dispatch?: any
}
export const MappingContext = createContext({} as MappingContextProps)