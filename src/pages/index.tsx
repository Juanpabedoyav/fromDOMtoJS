import Head from "next/head"
import { Inter } from "next/font/google"
import { Input } from "@/components/Input"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Input/>
    </>
  )
}
