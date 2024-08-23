import { LLM, MistralLLMID } from "@/types"

function createLLM(id: MistralLLMID, modelName: string, inputCost?: number, outputCost?: number): LLM {
  return {
    modelId: id,
    modelName,
    provider: "mistral",
    hostedId: id,
    platformLink: "https://docs.mistral.ai/",
    imageInput: false,
    pricing: inputCost && outputCost ? {
      currency: "USD",
      unit: "1M tokens",
      inputCost,
      outputCost
    } : undefined
  }
}

export const MISTRAL_LLM_LIST: LLM[] = [
  createLLM("mistral-tiny", "Mistral Tiny"),
  createLLM("mistral-small-latest", "Mistral Small", 2, 6),
  createLLM("mistral-medium-latest", "Mistral Medium", 2.7, 8.1),
  createLLM("mistral-large-latest", "Mistral Large", 8, 24)
]
