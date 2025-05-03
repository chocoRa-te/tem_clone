import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Loader2 className="h-12 w-12 animate-spin text-red-600 mb-4" />
      <p className="text-xl">コンテンツを読み込んでいます...</p>
    </div>
  )
}