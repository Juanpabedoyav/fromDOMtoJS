import { Input } from "@/components/Input"
import { Output } from "@/components/Output"
import { MainScreenSC } from "./styles"

export const Main = () => {
  return (
    <>
      <button>Generate</button>
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
