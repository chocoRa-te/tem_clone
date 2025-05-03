"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Bell, Menu, MessageSquare, Search, User } from "lucide-react"
import { PinCard } from "@/components/pins/PinCard"

// Pin型を定義
interface Pin {
  id: string;
  imageUrl: string;
  title: string;
  username: string;
  height: number;
}

// Navbarコンポーネント
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-white shadow-sm">
      {/* ロゴ */}
      <div className="flex items-center">
        <Link href="/" className="text-red-600 font-bold text-2xl mr-6">P</Link>
        <button className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium mr-2">ホーム</button>
        <button className="px-4 py-2 text-black hover:bg-gray-100 rounded-full text-sm font-medium">作成</button>
      </div>

      {/* 検索バー */}
      <div className="flex-1 max-w-xl mx-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="検索"
            className="block w-full pl-10 pr-3 py-2 bg-gray-100 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
          />
        </div>
      </div>

      {/* 右側アイコン */}
      <div className="flex items-center space-x-2">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Bell className="h-6 w-6 text-gray-700" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <MessageSquare className="h-6 w-6 text-gray-700" />
        </button>
        <Link href="/profile" className="p-2 rounded-full hover:bg-gray-100">
          <User className="h-6 w-6 text-gray-700" />
        </Link>
        <button className="p-1 rounded-full hover:bg-gray-100">
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </div>
    </nav>
  )
}

export default function Home() {
  // 型引数を指定してuseStateを初期化
  const [pins, setPins] = useState<Pin[]>([]);

  useEffect(() => {
    // 最初のコミットと同じ画像を使用
    const mockPins = [
      {
        id: "1",
        // 相対パスの静的画像を使用
        imageUrl: "/mountain.jpg", // publicフォルダに画像を配置する必要あり
        title: "美しい山の風景",
        username: "nature_lover",
        height: 350,
      },
      {
        id: "2",
        imageUrl: "/food.jpg",
        title: "おいしい料理のレシピ",
        username: "food_master",
        height: 450,
      },
      {
        id: "3",
        imageUrl: "/interior.jpg",
        title: "インテリアのアイデア",
        username: "home_designer",
        height: 380,
      },
      {
        id: "4",
        imageUrl: "/travel.jpg",
        title: "旅行の思い出",
        username: "travel_addict",
        height: 420,
      },
      {
        id: "5",
        imageUrl: "/art.jpg",
        title: "現代アートコレクション",
        username: "art_lover",
        height: 380,
      },
      {
        id: "6",
        imageUrl: "/fashion.jpg",
        title: "トレンドファッション2025",
        username: "fashion_stylist",
        height: 400,
      },
      {
        id: "7",
        imageUrl: "/garden.jpg",
        title: "ガーデニングのヒント",
        username: "plant_enthusiast",
        height: 340,
      },
      {
        id: "8",
        imageUrl: "/craft.jpg",
        title: "DIYクラフトプロジェクト",
        username: "creative_maker",
        height: 370,
      },
    ];

    setPins(mockPins);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {pins.map((pin) => (
            <PinCard
              key={pin.id}
              imageUrl={pin.imageUrl}
              title={pin.title}
              username={pin.username}
              height={pin.height}
            />
          ))}
        </div>
      </main>
    </div>
  );
}