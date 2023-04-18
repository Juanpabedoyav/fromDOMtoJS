import { MappingContext } from "@/context/Mapping/MappingContext"
import { SectionGenerateSC } from "@/screens/main/styles"
import { askGpt } from "@/utils/askGpt"
import { useContext, useEffect, useState } from "react"


export const Generate = () => {
  const [text, setText] =  useState("Happy Scrapping!!")
  const {dispatch, body}  =useContext(MappingContext)
  const prompt = `Act as a Senior Javascript Developre with deep knowledge in DOM manipulation, keep in mind this HTML structure ${body} and generate the code to scrap the data.`

  useEffect(() => {
    const time = setTimeout(() => {
      setText("Happy Scrapping!!")
    }, 1500)

    return () => clearTimeout(time)
  }, [text])
    

  const handleClick =() => {
    console.log("click")
    setText("Generate Code ...")
    const info = askGpt(prompt)
    console.log(info)
    dispatch({type: "SET_MAPPING", payload: body})
  }
  return (
    <SectionGenerateSC>
      <h2>AI Scrapping Generator </h2>
      <button onClick={handleClick} id="generate">{text}</button>
    </SectionGenerateSC>
  )
}
