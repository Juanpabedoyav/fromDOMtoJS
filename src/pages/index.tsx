import Head from "next/head"
import { Inter } from "next/font/google"
import { Input } from "@/components/Input"
import { Output } from "@/components/Output"
import { MappingProvider } from "@/context/Mapping/MappingProvider"

const inter = Inter({ subsets: ["latin"] })

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
