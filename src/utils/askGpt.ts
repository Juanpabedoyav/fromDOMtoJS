const { Configuration, OpenAIApi } = require("openai")

export const askGpt = async () => {

  const configuration = new Configuration({
    apiKey: "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",
  })
  const openai = new OpenAIApi(configuration)
    
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: "Hello world"}],
    temperature: 0.9,
  })
  console.log(completion.data.choices[0].message)

}
