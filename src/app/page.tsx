// src/app/page.tsx の修正
"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/layout/Navbar"
import { PinCard } from "@/components/pins/PinCard"

// Pin型を定義
interface Pin {
  id: string;
  imageUrl: string;
  title: string;
  username: string;
  height: number;
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
    ];
    
    setPins(mockPins);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
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