const { Configuration, OpenAIApi } = require("openai")

export const askGpt = async (prompt: string) => {

  const configuration = new Configuration({
    apiKey: "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",
  })
  const openai = new OpenAIApi(configuration)
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: prompt}],
    temperature: 0.9,
  })

  console.log(completion.data.choices[0].message)
}
