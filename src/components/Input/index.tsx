import CodeMirror from "@uiw/react-codemirror"
import {tokyoNight} from "@uiw/codemirror-theme-tokyo-night"
import {html} from "@codemirror/lang-html"
import { useContext} from "react"
import { MappingContext } from "@/context/Mapping/MappingContext"
import { BlockCodeSC } from "./style"
export const Input = () => {
  const {dispatch, body}= useContext(MappingContext)

  const handleChange = (codeHTML : string) => {
    setTimeout(() => {
      dispatch({type: "SET_BODY", payload: codeHTML})
    }, 500)
  }

  return (
    <BlockCodeSC>
      <h1>Input</h1>
      <CodeMirror
        theme={tokyoNight}
        value={body}
        height="350px"
        extensions={[html({ autoCloseTags: true, selfClosingTags: true, })]}
        onChange={(value) => handleChange(value)}
      />
    </BlockCodeSC>
  )
}
