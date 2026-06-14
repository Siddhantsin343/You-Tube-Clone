const VideoCart = ({ info }) => {
  if (!info) return null;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="cursor-pointer">
      <img
        className="w-full rounded-xl"
        src={thumbnails.medium.url}
        alt={title}
      />

      <div className="mt-2">
        <h3 className="font-semibold text-sm">
          {title}
        </h3>

        <p className="text-gray-600 text-sm">
          {channelTitle}
        </p>

        <p className="text-gray-600 text-sm">
          {Number(statistics.viewCount).toLocaleString()} views
        </p>
      </div>
    </div>
  );
};

export default VideoCart;