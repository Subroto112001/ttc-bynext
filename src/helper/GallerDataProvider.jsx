


export const galleryVideos = [
  { id: "yNyrfoqcfZI", title: "Loading..." }, // Example ID: Replace with yours
  { id: "HTnl9c7zwbM", title: "Loading..." },
  { id: "27ee3LhccCA", title: "Loading..." },
  { id: "fYlXXXxohTA", title: "Loading..." },
];






// Helper function to get YouTube thumbnail
export const getYouTubeThumbnail = (url) => {
  const videoId = url.split("/").pop().split("?")[0];
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};