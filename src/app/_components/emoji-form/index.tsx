"use client"

import { useRef } from "react"
import { SubmitButton } from "./submit-button"

interface EmojiFormProps {
  initialPrompt?: string
}

export function EmojiForm({ initialPrompt }: EmojiFormProps) {
  const submitRef = useRef<React.ElementRef<"button">>(null)

  return (
    <form className="bg-black rounded-xl shadow-lg h-fit flex flex-row px-1 items-center w-full">
      <input
        defaultValue={initialPrompt}
        type="text"
        name="prompt"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault()
            submitRef.current?.click()
          }
        }}
        placeholder="cat"
        className="bg-transparent text-white placeholder:text-gray-400 ring-0 outline-none resize-none py-2.5 px-2 font-mono text-sm h-10 w-full transition-all duration-300"
      />
      <SubmitButton ref={submitRef} />
    </form>
  )
}
