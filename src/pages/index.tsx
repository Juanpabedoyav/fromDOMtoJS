import { MappingProvider } from "@/context/Mapping/MappingProvider"
import { Main } from "@/screens/main"


export default function Home() {
  return (
    <>
      <MappingProvider>
        <Main/>  
      </MappingProvider>
    </>
  )
}
