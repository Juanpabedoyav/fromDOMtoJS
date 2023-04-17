import { MappingContext } from "@/context/Mapping/MappingContext"
import { SectionGenerateSC } from "@/screens/main/styles"
import { useContext, useEffect, useState } from "react"


export const Generate = () => {
  const [text, setText] =  useState("Happy Scrapping!!")
  const {dispatch, body}  =useContext(MappingContext)

  useEffect(() => {
    const time = setTimeout(() => {
      setText("Happy Scrapping!!")
    }, 1500)

    return () => clearTimeout(time)
  }, [text])
    

  const handleClick =() => {
    console.log("click")
    setText("Generate Code ...")
    dispatch({type: "SET_MAPPING", payload: body})
    // askGpt()
  }
  return (
    <SectionGenerateSC>
      <h2>AI Scrapping Generator </h2>
      <button onClick={handleClick} id="generate">{text}</button>
    </SectionGenerateSC>
  )
}
