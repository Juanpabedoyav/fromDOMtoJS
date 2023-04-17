import { javascript } from "@codemirror/lang-javascript"
import CodeMirror from "@uiw/react-codemirror"
import { useEffect, useState } from "react"


interface OutputProps {
  code: string
}

export const Output = ({code}: OutputProps) => {
  const [copyText, setCopyText] = useState<string>("copy")

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopyText("copy")
    }, 1500)

    return () => clearTimeout(timer)
  }, [copyText])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopyText("copied!")
  }
  return (
    <div style={{position:"relative", bottom: "10px", display:"flex", flexDirection:"column", margin:"0.5rem"}}>
      <h1>Output</h1>
      <CodeMirror
        theme={"dark"}
        value={code}      
        height="350px"
        editable={false}
        extensions={[javascript({ jsx: true })]}
        onChange={(value) => console.log(value)}
      />
      <button className="copy" onClick={copyToClipboard}>{copyText}</button>
    </div>
  )
}
  