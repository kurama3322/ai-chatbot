import { LLM, GroqLLMID } from "@/types"

function createLLM(id: GroqLLMID, modelName: string, inputCost: number, outputCost: number): LLM {
  return {
    modelId: id,
    modelName,
    provider: "groq",
    hostedId: id,
    platformLink: "https://groq.com/",
    imageInput: false,
    pricing: {
      currency: "USD",
      unit: "1M tokens",
      inputCost,
      outputCost
    }
  }
}

export const GROQ_LLM_LIST: LLM[] = [
  createLLM("llama3-8b-8192", "LLaMA3-8b-chat", 0.05, 0.1),
  createLLM("llama3-70b-8192", "LLaMA3-70b-chat", 0.59, 0.79),
  createLLM("mixtral-8x7b-32768", "Mixtral-8x7b-Instruct-v0.1", 0.27, 0.27),
  createLLM("gemma-7b-it", "Gemma-7b-It", 0.15, 0.15)
]
