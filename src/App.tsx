import React, { useState } from "react";
import "./App.css";
import "./index.css";
import PageHeader from "./layouts/PageHeader";
import CategoryPills from "./components/CategoryPills";
import { categories, videos } from "./data/home";
import VideoGridItem from "./components/VideoGridItem";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <div>sideBar</div>
        <div className="overflow-x-hidden px-8 pb-4">
          <div className="top-0 sticky bg-white z-10 pb-4">
            <CategoryPills
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
              {videos.map(video => (
                <VideoGridItem key={video.id} {...video} />
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
