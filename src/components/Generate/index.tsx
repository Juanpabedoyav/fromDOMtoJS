import { MappingContext } from "@/context/Mapping/MappingContext"
import { SectionGenerateSC } from "@/screens/main/styles"
import { askGpt } from "@/utils/askGpt"
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
  
  
  const handleClick =  async() => {
    const prompt = `Act as a Javascript developer with focus in DOM find the patterns ${body.slice(0,1000)} create a Javascript function with the pattern for extract info`
    setText("Generate Code ...")
    askGpt(prompt).then(e =>{
      dispatch({type: "SET_MAPPING", payload: e})

    })
  
  }
  return (
    <SectionGenerateSC>
      <h2>AI Scrapping Generator </h2>
      <button onClick={handleClick} id="generate">{text}</button>
    </SectionGenerateSC>
  )
}
