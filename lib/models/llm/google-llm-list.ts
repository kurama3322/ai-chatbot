import { LLM, GoogleLLMID } from "@/types"

function createLLM(id: GoogleLLMID, modelName: string, imageInput: boolean): LLM {
  return {
    modelId: id,
    modelName,
    provider: "google",
    hostedId: id,
    platformLink: "https://ai.google.dev/",
    imageInput
  }
}

export const GOOGLE_LLM_LIST: LLM[] = [
  createLLM("gemini-pro", "Gemini Pro", false),
  createLLM("gemini-pro-vision", "Gemini Pro Vision", true),
  createLLM("gemini-1.5-pro-latest", "Gemini 1.5 Pro", true),
  createLLM("gemini-1.5-flash", "Gemini 1.5 Flash", true)
]
