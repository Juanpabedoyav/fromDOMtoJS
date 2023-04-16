import { Input } from "@/components/Input"
import { Output } from "@/components/Output"
import { MappingProvider } from "@/context/Mapping/MappingProvider"


export default function Home() {
  return (
    <>
      <MappingProvider>
        <Input/>
        <Output code="(() => {
        let out={};
        return out;
      })()"/>
      </MappingProvider>
    </>
  )
}
