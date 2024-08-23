import { LLM, AnthropicLLMID } from "@/types"

function createLLM(id: AnthropicLLMID, modelName: string, imageInput: boolean, inputCost: number, outputCost: number): LLM {
  return {
    modelId: id,
    modelName,
    provider: "anthropic",
    hostedId: id,
    platformLink: "https://docs.anthropic.com/claude/reference/getting-started-with-the-api",
    imageInput,
    pricing: {
      currency: "USD",
      unit: "1M tokens",
      inputCost,
      outputCost
    }
  }
}

export const ANTHROPIC_LLM_LIST: LLM[] = [
  createLLM("claude-2.1", "Claude 2", false, 8, 24),
  createLLM("claude-instant-1.2", "Claude Instant", false, 0.8, 2.4),
  createLLM("claude-3-haiku-20240307", "Claude 3 Haiku", true, 0.25, 1.25),
  createLLM("claude-3-sonnet-20240229", "Claude 3 Sonnet", true, 3, 15),
  createLLM("claude-3-opus-20240229", "Claude 3 Opus", true, 15, 75),
  createLLM("claude-3-5-sonnet-20240620", "Claude 3.5 Sonnet", true, 3, 15)
]
