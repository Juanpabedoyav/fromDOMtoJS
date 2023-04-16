import { javascript } from "@codemirror/lang-javascript"
import CodeMirror from "@uiw/react-codemirror"

export const Output = () => {

  
  return (
    <>
      <h1>Output</h1>
      <CodeMirror
        theme={"dark"}
        value="console.log('hello world!');"
        height="200px"
        // editable={false}
        extensions={[javascript({ jsx: true })]}
        onChange={(value) => console.log(value)}
      />
    </>
  )
}
  