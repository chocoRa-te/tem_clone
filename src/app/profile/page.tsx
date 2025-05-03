import { PinGrid } from "@/components/pin-grid"
import { ModeToggle } from "@/components/mode-toggle"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-red-600"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>
              <span className="hidden font-bold sm:inline-block">
                ピンテスト
              </span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="/explore"
              >
                探索
              </a>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="/notifications"
              >
                通知
              </a>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="/messages"
              >
                メッセージ
              </a>
            </nav>
          </div>
          <div className="flex-1 flex items-center space-x-2">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="検索..."
                  className="w-full rounded-full bg-muted pl-8 md:w-[300px] lg:w-[400px]"
                />
              </div>
            </div>
            <ModeToggle />
          </div>
        </div>
      </header>
      <main>
        <PinGrid />
      </main>
    </div>
  )
}