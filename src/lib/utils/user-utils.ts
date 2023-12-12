import type { User } from "@supabase/supabase-js";

export const getAName = (user: User | null): string => {
  if (!user) return "Anonymous";

  if (user.user_metadata.full_name) return user.user_metadata.full_name;
  if (user.user_metadata.name) return user.user_metadata.name;
  if (user.user_metadata.user_name) return user.user_metadata.user_name;
  if (user.user_metadata.preferred_username) return user.user_metadata.preferred_username;
  if (user.user_metadata.email) return user.user_metadata.email;
  return "Anonymous";
};

export const getAvatarUrl = (user: User | null): string => {
  if (!user) return "_static/images/avatar.png";

  if (user.user_metadata.avatar_url) return user.user_metadata.avatar_url;
  return "_static/images/avatar.png";
};