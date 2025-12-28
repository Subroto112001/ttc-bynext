
import { NextResponse } from "next/server";

export async function GET() {

  /*
   * Configuration: YouTube Channel ID
   * Target: "Learning with Sumit" (or specific channel)
   */
  const CHANNEL_ID = "UCcUMyYL7RjoOHJPs3jeZI5A";

  try {

    /*
     * Construct the URL and fetch the channel page
     * We use a custom User-Agent to mimic a browser and avoid bot detection
     */

    const channelUrl = `https://www.youtube.com/channel/${CHANNEL_ID}/videos`;

    const response = await fetch(channelUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();

    /*
     * Extraction: Find the 'ytInitialData' JSON object within the script tags
     * This object contains all the video metadata rendered by YouTube
     */

    const ytInitialDataMatch = html.match(/var ytInitialData = ({.+?});/);

    if (!ytInitialDataMatch) {
      console.error("❌ ytInitialData not found");
      return NextResponse.json(
        { error: "Unable to parse YouTube data" },
        { status: 500 }
      );
    }

    const ytInitialData = JSON.parse(ytInitialDataMatch[1]);
    const videos = [];

    try {

      /*
       * Navigation: Drill down through the YouTube internal JSON structure
       * We target the 'Videos' tab and the rich grid renderer
       */

      const tabs =
        ytInitialData?.contents?.twoColumnBrowseResultsRenderer?.tabs || [];

      let videosTab = null;
      for (const tab of tabs) {
        if (
          tab?.tabRenderer?.title === "Videos" ||
          tab?.tabRenderer?.content?.richGridRenderer ||
          tab?.tabRenderer?.content?.sectionListRenderer
        ) {
          videosTab = tab;
          break;
        }
      }

      if (!videosTab) {
        console.error("❌ Videos tab not found");
      }

      const contents =
        videosTab?.tabRenderer?.content?.richGridRenderer?.contents ||
        videosTab?.tabRenderer?.content?.sectionListRenderer?.contents?.[0]
          ?.itemSectionRenderer?.contents ||
        [];

      /*
       * Loop: Iterate through each video item and extract relevant fields
       * ID, Title, Thumbnail, Views, and Duration
       */

      for (const item of contents) {
        const videoRenderer =
          item?.richItemRenderer?.content?.videoRenderer ||
          item?.gridVideoRenderer ||
          item?.videoRenderer;

        if (videoRenderer) {
          const videoId = videoRenderer.videoId;
          const title =
            videoRenderer.title?.runs?.[0]?.text ||
            videoRenderer.title?.simpleText ||
            "Untitled";

          const thumbnails = videoRenderer.thumbnail?.thumbnails || [];
          const thumbnail =
            thumbnails[thumbnails.length - 1]?.url || thumbnails[0]?.url || "";

          const publishedTime =
            videoRenderer.publishedTimeText?.simpleText || "";

          const viewCountText =
            videoRenderer.viewCountText?.simpleText ||
            videoRenderer.shortViewCountText?.simpleText ||
            "0";

          const duration =
            videoRenderer.lengthText?.simpleText ||
            videoRenderer.thumbnailOverlays?.find(
              (overlay) => overlay.thumbnailOverlayTimeStatusRenderer
            )?.thumbnailOverlayTimeStatusRenderer?.text?.simpleText ||
            "";

          /*
           * Push data: Ensure no duplicate video IDs are added
           */
          if (videoId && !videos.find((v) => v.id === videoId)) {
            videos.push({
              id: videoId,
              title: title,
              thumbnail: thumbnail.startsWith("//")
                ? `https:${thumbnail}`
                : thumbnail,
              url: `https://www.youtube.com/watch?v=${videoId}`,
              publishedTime: publishedTime,
              viewCount: viewCountText,
              duration: duration,
            });
          }
        }
      }

      console.log(`✅ ${videos.length} videos found via primary method`);
    } catch (parseError) {
      console.error("❌ Data parsing error:", parseError);
    }

    /*
     * Fallback: If primary JSON parsing fails, use Regex to find video IDs and titles
     * This ensures data is returned even if YouTube changes its JSON structure slightly
     */

    if (videos.length === 0) {
      console.log("🔄 Attempting fallback method...");

      const videoRegex =
        /"videoId":"([\w-]{11})".*?"title":\{"runs":\[\{"text":"([^"]+)"/g;
      const thumbnailRegex = /"videoId":"([\w-]{11})".*?"url":"([^"]+)"/g;

      const matches = [...html.matchAll(videoRegex)];
      const thumbnailMatches = [...html.matchAll(thumbnailRegex)];

      const thumbnailMap = {};
      for (const match of thumbnailMatches) {
        if (!thumbnailMap[match[1]]) {
          thumbnailMap[match[1]] = match[2].replace(/\\u0026/g, "&");
        }
      }

      for (const match of matches) {
        const id = match[1];
        const title = match[2];
        const thumbnail = thumbnailMap[id] || "";

        if (!videos.find((v) => v.id === id)) {
          videos.push({
            id,
            title,
            thumbnail: thumbnail.startsWith("//")
              ? `https:${thumbnail}`
              : thumbnail,
            url: `https://www.youtube.com/watch?v=${id}`,
            publishedTime: "",
            viewCount: "",
            duration: "",
          });
        }
      }

      console.log(`✅ Fallback: ${videos.length} videos found`);
    }

    /*
     * Response: Return the final list of videos as JSON
     */

    return NextResponse.json({
      channelId: CHANNEL_ID,
      totalVideos: videos.length,
      videos: videos,
    });
  } catch (error) {
    /*
     * Error Handling: Catch network or unexpected runtime errors
     */
    console.error("❌ Fetch Error:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch videos", details: error.message },
      { status: 500 }
    );
  }
}
