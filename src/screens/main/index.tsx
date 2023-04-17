import { Input } from "@/components/Input"
import { Output } from "@/components/Output"
import { SectionGenerateSC, MainScreenSC } from "./styles"

export const Main = () => {
  return (
    <>
      <SectionGenerateSC>
        <h2>AI Scrapping Generator </h2>
        <button id="generate">Happy Scrapping!!</button>
      </SectionGenerateSC>
      <MainScreenSC>
        <Input/>
        <Output code="(() => {
        let out={};
        return out;
      })()"/>
      </MainScreenSC>
    </>
  )
}
