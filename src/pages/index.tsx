import Head from "next/head"
import { Inter } from "next/font/google"
import { Input } from "@/components/Input"
import { Output } from "@/components/Output"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Input/>
      <Output/>
    </>
  )
}
