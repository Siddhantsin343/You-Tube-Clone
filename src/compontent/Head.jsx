import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { useEffect, useState } from "react";
import { YouTube_Search_API } from "./utils/constent";

import { useSelector } from "react-redux";
import { cacheResults } from "./utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggleMenu());
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);

  console.log(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        console.log("CACHE HIT");

        setSuggestion(searchCache[searchQuery]);
      } else {
        console.log("API CALL");

        getSearchSugeestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSugeestion = async () => {
    const data = await fetch(YouTube_Search_API + searchQuery);

    const json = await data.json();

    setSuggestion(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      }),
    );
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 shadow-md">
      <div className="flex items-center gap-4">
        <img
          className="w-6 h-6 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png"
          alt="menu"
          onClick={() => toggleHandler()}
        />

        <img
          className="h-6 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
          alt="youtube-logo"
        />
      </div>

      <div className="flex items-center">
        <div className="relative">
          <input
            className="border border-gray-300 px-4 py-2 rounded-l-full w-96 outline-none"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border border-gray-300 px-6 py-2 rounded-r-full bg-gray-100 hover:bg-gray-200">
            🔍
          </button>

          {showSuggestion && (
            <div className="absolute bg-white w-full shadow-lg rounded-xl mt-1 border border-gray-200">
              <ul>
                {suggestions.map((s) => (
                  <li
                    key={s}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    🔍 {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div>
        <img
          className="w-8 h-8 rounded-full"
          src="https://www.pngfind.com/pngs/m/93-938050_png-file-transparent-white-user-icon-png-download.png"
          alt="userIcon"
        />
      </div>
    </div>
  );
};
export default Head;
