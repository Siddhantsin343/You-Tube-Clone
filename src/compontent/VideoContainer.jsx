import { YOUTUBE_VIDEOS_API } from "./utils/constent";
import { useEffect, useState } from "react";
import VideoCart from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);

    // console.log(json.items);
  };

  return (
    <div className="grid grid-cols-3 gap-6 mt-4">
      {videos.map((video) => ( 
        <Link key={video.id} to={"/watch?v=" + video.id}>
          {/* {video[0] && <AdVideoCard info={video[0]}/>} */}
          <VideoCart info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;


// Higher Order Compontent

// const AdVideoCard = ({info})=>{
//   return(
//     <div className="p-1 m-1 border border-red-900">
//       <VideoCart/>
//     </div>
//   )
// }