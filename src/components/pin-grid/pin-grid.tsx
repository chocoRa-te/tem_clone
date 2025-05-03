"use client"

import { useState, useEffect } from "react"
import { PinCard } from "@/components/pin-card"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

// ピンの型定義
interface Pin {
  id: number;
  imageUrl: string;
  title: string;
  username: string;
  height: number;
}

// 安全なURL生成のためのヘルパー関数
const getSafeImageUrl = (id: number) => {
  // ランダムな画像URLを生成するとエラーが発生する可能性があるため、静的な画像に置き換える
  return `/placeholder.svg`;
}

// ピンデータを生成する関数
const generatePins = (page: number, pinsPerPage: number): Pin[] => {
  return Array.from({ length: pinsPerPage }, (_, index) => {
    const id = page * pinsPerPage + index + 1;
    return {
      id,
      imageUrl: getSafeImageUrl(id),
      title: `ピンのタイトル ${id}`,
      username: `user${id}`,
      height: 250 + (id % 5) * 30, // 250px～370pxのランダムな高さ
    };
  });
};

// 合計ページ数
const TOTAL_PAGES = 5;
// 1ページあたりのピン数
const PINS_PER_PAGE = 12;

export function PinGrid() {
  const [currentPage, setCurrentPage] = useState(0);
  const [pins, setPins] = useState<Pin[]>([]);
  const [loading, setLoading] = useState(true);

  // ページが変更されたときにピンを更新
  useEffect(() => {
    const loadPins = async () => {
      setLoading(true);
      
      // ページ読み込みをシミュレート（実際のAPIであれば、ここでfetchを行う）
      await new Promise(resolve => setTimeout(resolve, 500));
      
      try {
        // 指定ページのピンデータを生成
        const newPins = generatePins(currentPage, PINS_PER_PAGE);
        setPins(newPins);
      } catch (error) {
        console.error("ピンデータの生成中にエラーが発生しました:", error);
        // エラー時は空の配列をセット
        setPins([]);
      } finally {
        setLoading(false);
      }
    };
    
    loadPins();
  }, [currentPage]);

  // 次のページに進む
  const nextPage = () => {
    if (currentPage < TOTAL_PAGES - 1) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // 前のページに戻る
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // 特定のページに移動
  const goToPage = (page: number) => {
    if (page >= 0 && page < TOTAL_PAGES) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {loading ? (
        <div className="flex flex-col items-center justify-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-red-600 mb-4" />
          <p className="text-xl">コンテンツを読み込んでいます...</p>
        </div>
      ) : (
        <>
          {pins.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
          ) : (
            <div className="flex justify-center items-center h-64">
              <p className="text-xl">表示するピンがありません。</p>
            </div>
          )}
          
          <div className="flex flex-wrap justify-center mt-8 gap-2">
            <Button
              variant="outline"
              onClick={prevPage}
              disabled={currentPage === 0}
              className="flex items-center"
            >
              前へ
            </Button>
            
            {/* ページ番号ボタン */}
            <div className="flex space-x-1">
              {Array.from({ length: TOTAL_PAGES }, (_, i) => (
                <Button
                  key={i}
                  variant={currentPage === i ? "default" : "outline"}
                  onClick={() => goToPage(i)}
                  className="w-10 h-10"
                >
                  {i + 1}
                </Button>
              ))}
            </div>
            
            <Button
              variant="outline"
              onClick={nextPage}
              disabled={currentPage === TOTAL_PAGES - 1}
              className="flex items-center"
            >
              次へ
            </Button>
          </div>
        </>
      )}
    </div>
  );
}