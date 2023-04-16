
export const Input = () => {

  const handleSubmit =(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("submit")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button>Generate</button>
      </form>
    </>
  )
}
