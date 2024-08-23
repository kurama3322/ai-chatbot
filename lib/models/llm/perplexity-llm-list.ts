import { LLM, PerplexityLLMID } from "@/types"

function createLLM(id: PerplexityLLMID, modelName: string): LLM {
  return {
    modelId: id,
    modelName,
    provider: "perplexity",
    hostedId: id,
    platformLink: "https://docs.perplexity.ai/docs/getting-started",
    imageInput: false
  }
}

export const PERPLEXITY_LLM_LIST: LLM[] = [
  createLLM("mixtral-8x7b-instruct", "Mixtral 8x7B Instruct"),
  createLLM("mistral-7b-instruct", "Mistral 7B Instruct"),
  createLLM("codellama-70b-instruct", "CodeLlama 70B Instruct"),
  createLLM("sonar-small-chat", "Sonar Small Chat"),
  createLLM("sonar-small-online", "Sonar Small Online"),
  createLLM("sonar-medium-chat", "Sonar Medium Chat"),
  createLLM("sonar-medium-online", "Sonar Medium Online")
]
