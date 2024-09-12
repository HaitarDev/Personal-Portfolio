// pages/api/video-hls.js
import ffmpeg from "fluent-ffmpeg";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { videoUrl } = req.query; // URL from Sanity
  if (!videoUrl) {
    return res.status(400).json({ error: "Missing video URL." });
  }

  try {
    // Use ffmpeg to convert video URL to HLS
    ffmpeg(videoUrl)
      .outputOptions([
        "-preset fast",
        "-g 48",
        "-sc_threshold 0",
        "-map 0:0",
        "-map 0:1",
        "-map 0:0",
        "-map 0:1",
        "-c:v:0 libx264",
        "-b:v:0 800k",
        "-c:v:1 libx264",
        "-b:v:1 3000k",
        "-c:a aac",
        "-f hls",
        "-hls_time 10",
        "-hls_list_size 0",
        "-hls_segment_filename",
        "segment_%03d.ts",
        "-master_pl_name master.m3u8",
      ])
      .on("end", () => {
        console.log("Processing finished!");
      })
      .on("error", (err: any) => {
        console.error("Error processing video: ", err);
        res.status(500).json({ error: "Error processing video." });
      })
      .pipe(res, { end: true });
  } catch (error) {
    console.error("Error fetching or processing video:", error);
    res.status(500).json({ error: "Internal server error." });
  }
}
