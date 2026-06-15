import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentSection from "./CommentSection";
import LiveChart from "./LiveChart";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  // console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
     <div className="flex flex-col p-4">
    
    {/* Video + Chat Row */}
    <div className="flex gap-4">
      
      {/* Left Side */}
      <div className="flex-1">
        <iframe
          width="100%"
          height="600"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        ></iframe>

        {/* Comments */}
        <CommentSection />
      </div>

      {/* Right Side Live Chat */}
      <LiveChart />

    </div>

  </div>
  );
};

export default WatchPage;
