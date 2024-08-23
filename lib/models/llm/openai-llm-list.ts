import { LLM, OpenAILLMID } from "@/types"

function createLLM(id: OpenAILLMID, modelName: string, imageInput: boolean, inputCost: number, outputCost?: number): LLM {
  return {
    modelId: id,
    modelName,
    provider: "openai",
    hostedId: id,
    platformLink: "https://platform.openai.com/docs/overview",
    imageInput,
    pricing: {
      currency: "USD",
      unit: "1M tokens",
      inputCost,
      outputCost
    }
  }
}

export const OPENAI_LLM_LIST: LLM[] = [
 createLLM("gpt-4o", "GPT-4o", true, 5, 15),
 createLLM("gpt-4o-mini", "GPT-4o Mini", true, 0.15, 0.6),
 createLLM("gpt-4-turbo-preview", "GPT-4 Turbo", true, 10, 30),
 createLLM("gpt-4-vision-preview", "GPT-4 Vision", true, 10),
 createLLM("gpt-4", "GPT-4", false, 30, 60),
 createLLM("gpt-3.5-turbo", "GPT-3.5 Turbo", false, 0.5, 1.5)
]
