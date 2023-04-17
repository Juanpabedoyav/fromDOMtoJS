import { Input } from "@/components/Input"
import { Output } from "@/components/Output"
import {  MainScreenSC } from "./styles"
import { Generate } from "@/components/Generate"
import { useContext } from "react"
import { MappingContext } from "@/context/Mapping/MappingContext"

export const Main = () => {
  const {mapping} = useContext(MappingContext)
  return (
    <>
      <Generate/>
      <MainScreenSC>
        <Input/>
        <Output code={mapping}/>
      </MainScreenSC>
    </>
  )
}
