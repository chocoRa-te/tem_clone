"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { Bell, Edit, Link as LinkIcon, Menu, MessageSquare, MoreHorizontal, Search, Share2, Upload, User, Users } from "lucide-react"

// PinCardコンポーネント
function PinCard({ imageUrl, title, username, height }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative mb-4 overflow-hidden rounded-lg"
      style={{ height: `${height}px` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-200 ease-in-out"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            filter: isHovered ? "brightness(0.9)" : "brightness(1)",
          }}
        />

        {isHovered && (
          <>
            <div className="absolute top-2 right-2 z-10">
              <button className="px-3 py-1 text-xs font-medium bg-gray-200 hover:bg-gray-300 rounded-full">
                保存
              </button>
            </div>

            <div className="absolute bottom-2 left-2 right-2 z-10 flex justify-between">
              <div className="flex space-x-1">
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>

              <div className="flex space-x-1">
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-2 bg-white/80 backdrop-blur-sm">
        <h3 className="font-medium text-sm line-clamp-1">{title}</h3>
        <p className="text-xs text-gray-600">@{username}</p>
      </div>
    </div>
  )
}

// コレクションカードコンポーネント
function CollectionCard({ title, coverImage, pinCount }) {
  return (
    <div className="rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-200">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={coverImage} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500">{pinCount}ピン</p>
      </div>
    </div>
  );
}

// ナビゲーションバーコンポーネント
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-white shadow-sm">
      {/* ロゴ */}
      <div className="flex items-center">
        <Link href="/" className="text-red-600 font-bold text-2xl mr-6">P</Link>
        <button className="px-4 py-2 text-black hover:bg-gray-100 rounded-full text-sm font-medium mr-2">ホーム</button>
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
        <Link href="/profile" className="p-2 rounded-full hover:bg-gray-100 bg-gray-200">
          <User className="h-6 w-6 text-gray-700" />
        </Link>
        <button className="p-1 rounded-full hover:bg-gray-100">
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </div>
    </nav>
  )
}

export default function UserProfile() {
  // 状態変数
  const [isFollowing, setIsFollowing] = useState(false)
  const [activeTab, setActiveTab] = useState('created')
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [profileImage, setProfileImage] = useState("/api/placeholder/200/200")
  
  // フォーム要素へのrefを作成
  const displayNameRef = useRef(null);
  const bioRef = useRef(null);
  const websiteRef = useRef(null);
  const fileInputRef = useRef(null);
  
  // プロフィール用の状態管理
  const [profileData, setProfileData] = useState({
    username: "hikaru_design",
    displayName: "ヒカル",
    bio: "UIデザイナー・クリエイター | 東京 | 美しいインターフェースの作成とデザインインスピレーションの共有",
    followers: "15.2k",
    following: "342",
    website: "hikarudesign.com",
  });
  
  // プロフィール変更を保存する関数
  const saveProfileChanges = () => {
    // refから値を取得して更新
    const updatedProfile = {
      ...profileData,
      displayName: displayNameRef.current?.value || profileData.displayName,
      bio: bioRef.current?.value || profileData.bio,
      website: websiteRef.current?.value || profileData.website
    };
    
    setProfileData(updatedProfile);
    setIsEditModalOpen(false);
  };
  
  // 画像アップロード処理
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // 実際のアプリではサーバーにアップロードする処理が必要
      // ここではブラウザでプレビューだけ表示
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  // 画像アップロードボタンのクリックハンドラ
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
  
  // ピン用のモックデータ
  const pins = [
    {
      id: 1,
      imageUrl: "/mountain.jpg",
      title: "ミニマルなホームオフィスデザイン",
      username: profileData.username,
      height: 320
    },
    {
      id: 2,
      imageUrl: "/food.jpg",
      title: "春のインテリアコレクション 2025",
      username: profileData.username,
      height: 240
    },
    {
      id: 3,
      imageUrl: "/interior.jpg",
      title: "モダンキッチンのアイデア集",
      username: profileData.username,
      height: 300
    },
    {
      id: 4,
      imageUrl: "/travel.jpg",
      title: "自然光を活かした北欧スタイル",
      username: profileData.username,
      height: 280
    },
    {
      id: 5,
      imageUrl: "/art.jpg",
      title: "ワークスペースのレイアウト提案",
      username: profileData.username,
      height: 260
    },
    {
      id: 6,
      imageUrl: "/fashion.jpg",
      title: "和モダンインテリアの作り方",
      username: profileData.username,
      height: 290
    }
  ];
  
  // 保存したピン用のモックデータ
  const savedPins = [
    {
      id: 7,
      imageUrl: "/garden.jpg",
      title: "コンパクトキッチンの収納アイデア",
      username: "storage_ideas",
      height: 300
    },
    {
      id: 8,
      imageUrl: "/craft.jpg",
      title: "観葉植物のある暮らし",
      username: "plant_life",
      height: 340
    },
    {
      id: 9,
      imageUrl: "/food.jpg",
      title: "小さな空間を広く見せるテクニック",
      username: "small_space_expert",
      height: 280
    }
  ];

  // コレクション用のモックデータ
  const collections = [
    {
      id: 1,
      title: "インテリアアイデア",
      coverImage: "/interior.jpg",
      pinCount: 24
    },
    {
      id: 2,
      title: "ミニマルデザイン",
      coverImage: "/mountain.jpg",
      pinCount: 18
    },
    {
      id: 3,
      title: "カラースキーム",
      coverImage: "/art.jpg",
      pinCount: 9
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* プロフィールヘッダー */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
              <img 
                src={profileImage} 
                alt={profileData.displayName}
                className="object-cover w-full h-full"
              />
            </div>
            <button 
              className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-white shadow hover:bg-gray-100 flex items-center justify-center"
              onClick={() => setIsEditModalOpen(true)}
            >
              <Edit className="w-4 h-4" />
            </button>
          </div>
          
          <h1 className="text-2xl font-bold mb-1">{profileData.displayName}</h1>
          <p className="text-sm text-gray-600 mb-2">@{profileData.username}</p>
          
          <p className="text-sm text-center max-w-md mb-4">{profileData.bio}</p>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">{profileData.followers} フォロワー</span>
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">{profileData.following} フォロー中</span>
            </div>
            {profileData.website && (
              <div className="flex items-center">
                <LinkIcon className="w-4 h-4 mr-1" />
                <a href={`https://${profileData.website}`} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-600 hover:underline">
                  {profileData.website}
                </a>
              </div>
            )}
          </div>
          
          <div className="flex gap-2">
            <button 
              className={`px-4 py-2 rounded-full ${isFollowing ? 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100' : 'bg-red-600 text-white hover:bg-red-700'}`}
              onClick={() => setIsFollowing(!isFollowing)}
            >
              {isFollowing ? "フォロー中" : "フォローする"}
            </button>
            <button className="p-2 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100">
              <Bell className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* タブナビゲーション */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                className={`px-4 py-2 border-b-2 ${
                  activeTab === 'created' 
                    ? 'border-red-500 text-red-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } font-medium`}
                onClick={() => setActiveTab('created')}
              >
                作成済み
              </button>
              <button
                className={`px-4 py-2 border-b-2 ${
                  activeTab === 'saved' 
                    ? 'border-red-500 text-red-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } font-medium`}
                onClick={() => setActiveTab('saved')}
              >
                保存済み
              </button>
              <button
                className={`px-4 py-2 border-b-2 ${
                  activeTab === 'collections' 
                    ? 'border-red-500 text-red-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } font-medium`}
                onClick={() => setActiveTab('collections')}
              >
                コレクション
              </button>
            </nav>
          </div>
          
          {/* タブコンテンツ */}
          <div className="pt-6">
            {activeTab === 'created' && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
            )}
            
            {activeTab === 'saved' && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {savedPins.map((pin) => (
                  <PinCard
                    key={pin.id}
                    imageUrl={pin.imageUrl}
                    title={pin.title}
                    username={pin.username}
                    height={pin.height}
                  />
                ))}
              </div>
            )}
            
            {activeTab === 'collections' && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-6">
                {collections.map((collection) => (
                  <CollectionCard
                    key={collection.id}
                    title={collection.title}
                    coverImage={collection.coverImage}
                    pinCount={collection.pinCount}
                  />
                ))}
                
                {/* 新規コレクション作成ボタン */}
                <div className="rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center aspect-square hover:bg-gray-50 cursor-pointer">
                  <div className="text-center p-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                    <p className="text-sm font-medium">新規コレクション</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* 編集モーダル */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">プロフィールを編集</h2>
            
            {/* プロフィール画像アップロード */}
            <div className="mb-6 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 mb-2">
                <img 
                  src={profileImage} 
                  alt="プロフィール画像"
                  className="object-cover w-full h-full"
                />
              </div>
              <button 
                className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                onClick={triggerFileInput}
              >
                <Upload className="w-4 h-4" />
                画像を変更
              </button>
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
            
            {/* 表示名入力フォーム */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">表示名</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                defaultValue={profileData.displayName}
                ref={displayNameRef}
              />
            </div>
            
            {/* 自己紹介入力フォーム */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">自己紹介</label>
              <textarea 
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows={3}
                defaultValue={profileData.bio}
                ref={bioRef}
              />
            </div>
            
            {/* ウェブサイト入力フォーム */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">ウェブサイト</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                defaultValue={profileData.website}
                ref={websiteRef}
              />
            </div>
            
            {/* モーダルのアクションボタン */}
            <div className="flex justify-end space-x-2">
              <button 
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setIsEditModalOpen(false)}
              >
                キャンセル
              </button>
              <button 
                className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-md"
                onClick={saveProfileChanges}
              >
                保存
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}