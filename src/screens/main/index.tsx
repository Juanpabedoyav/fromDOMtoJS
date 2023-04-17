import { Input } from "@/components/Input"
import { Output } from "@/components/Output"
import { ButtonGenerateSC, MainScreenSC } from "./styles"

export const Main = () => {
  return (
    <>
      <ButtonGenerateSC>
        <button>Happy Scrapping!!</button>
      </ButtonGenerateSC>
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
