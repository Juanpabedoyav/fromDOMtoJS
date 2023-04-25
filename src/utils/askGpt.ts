const { Configuration, OpenAIApi } = require("openai")

export const askGpt = async (prompt : string) => {

  const configuration = new Configuration({
    apiKey: "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",
  })
  const openai = new OpenAIApi(configuration)
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo-0301",
    messages: [{role: "user", content: prompt}],
    temperature: 0.9,
  })

  return completion.data.choices[0].message.content
}
