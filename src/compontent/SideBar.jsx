import { useSelector } from "react-redux";
import store from "./utils/store";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store)=> store.app.isMenuOpen);
  return !isMenuOpen ? null : (
    <div className="w-60 h-screen overflow-y-auto p-4 shadow-md">
      
      {/* Main */}
      <ul className="space-y-3">
        <li className="cursor-pointer font-medium"> <Link to="/">🏠 Home</Link></li>
        <li className="cursor-pointer font-medium">🎬 Shorts</li>
        <li className="cursor-pointer font-medium">📺 Subscriptions</li>
      </ul>

      <hr className="my-4" />

      {/* You */}
      <h2 className="font-bold mb-2">You</h2>
      <ul className="space-y-3">
        <li className="cursor-pointer">📚 Library</li>
        <li className="cursor-pointer">🕒 History</li>
        <li className="cursor-pointer">🎥 Your Videos</li>
        <li className="cursor-pointer">⏰ Watch Later</li>
        <li className="cursor-pointer">👍 Liked Videos</li>
        <li className="cursor-pointer">✂️ Your Clips</li>
      </ul>

      <hr className="my-4" />

      {/* Explore */}
      <h2 className="font-bold mb-2">Explore</h2>
      <ul className="space-y-3">
        <li className="cursor-pointer">🔥 Trending</li>
        <li className="cursor-pointer">🛍️ Shopping</li>
        <li className="cursor-pointer">🎵 Music</li>
        <li className="cursor-pointer">🎬 Movies</li>
        <li className="cursor-pointer">📡 Live</li>
        <li className="cursor-pointer">🎮 Gaming</li>
        <li className="cursor-pointer">📰 News</li>
        <li className="cursor-pointer">🏆 Sports</li>
        <li className="cursor-pointer">🎓 Courses</li>
      </ul>

      <hr className="my-4" />

      {/* More from YouTube */}
      <h2 className="font-bold mb-2">More from YouTube</h2>
      <ul className="space-y-3">
        <li className="cursor-pointer">▶️ YouTube Premium</li>
        <li className="cursor-pointer">🎵 YouTube Music</li>
        <li className="cursor-pointer">👶 YouTube Kids</li>
        <li className="cursor-pointer">🎬 YouTube Studio</li>
      </ul>

      <hr className="my-4" />

      {/* Settings */}
      <ul className="space-y-3">
        <li className="cursor-pointer">⚙️ Settings</li>
        <li className="cursor-pointer">🚩 Report History</li>
        <li className="cursor-pointer">❓ Help</li>
        <li className="cursor-pointer">💬 Send Feedback</li>
      </ul>

      <hr className="my-4" />

      <p className="text-xs text-gray-500">
        About Press Copyright Contact us Creators Advertise Developers
      </p>

      <p className="text-xs text-gray-500 mt-3">
        © 2026 YouTube Clone
      </p>
    </div>
  );
};

export default SideBar;