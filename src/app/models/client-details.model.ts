export interface Clientdetails {
  title: string;
  subtitle: string;
  logoImageUrl: string;   // NOT image
  description: string;
  videoPath?: string ;      // mp4 or stream URL
  youtubeVideoPath?: string | null;
  videoText?: string | null;
}