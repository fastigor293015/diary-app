import { emojis } from "@constants";

export type EmojiValue = (typeof emojis)[number] | null;

export interface NoteData {
  id: string;
  title: string;
  description: string;
  date: string | number;
  emoji: EmojiValue | null;
  image: string | null;
  tags: string[];
}

export type FormValues = Omit<NoteData, "id">;

export interface SplineImageType {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: false;
  description: string;
  user: {
    id: string;
    username: string;
    name: string;
    portfolio_url: string;
    bio: string;
    location: string;
    total_likes: number;
    total_photos: number;
    total_collections: number;
    instagram_username: string;
    twitter_username: string;
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
    };
  };
  current_user_collections: Array<{
    id: 206;
    title: string;
    published_at: string;
    last_collected_at: string;
    updated_at: string;
    cover_photo: null;
    user: null;
  }>;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
}

export type SplineApiResponse =
  | {
      results: SplineImageType[];
    }
  | SplineImageType[];
