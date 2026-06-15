const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

export const YOUTUBE_VIDEOS_API = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=60&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YouTube_Search_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const LIVE_CHAT_COUNT = 10