import { askGpt } from "@/utils/askGpt"
import CodeMirror from "@uiw/react-codemirror"
import { javascript } from "@codemirror/lang-javascript"
export const Input = () => {

  const handleSubmit =(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("submit")
    askGpt()
  }
  return (
    <>
      <h1>Input</h1>
      <form onSubmit={handleSubmit}>
        <CodeMirror
          theme={"dark"}
          value="console.log('hello world!');"
          height="350px"
          extensions={[javascript({ jsx: true })]}
          onChange={(value) => console.log(value)}
        />
        <button>Generate</button>
      </form>
    </>
  )
}
