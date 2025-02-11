import {
  getProfileByUsername,
  getUserLikedPosts,
  getUserPosts,
  isFollowing,
} from "@/actions/profile.action";
import { notFound } from "next/navigation";
import ProfilePageClient from "./ProfilePageClient";
import Image from "next/image"; // Import the Image component

export async function generateMetadata({ params }: { params?: { username?: string } }) {
  if (!params?.username) return; // ✅ Ensure params exist

  const user = await getProfileByUsername(params.username);
  if (!user) return;

  return {
    title: `${user.name ?? user.username}`,
    description: user.bio || `Check out ${user.username}'s profile.`,
  };
}

async function ProfilePageServer({ params }: { params?: { username?: string } }) {
  if (!params?.username) notFound(); // ✅ Ensure params exist before using

  const user = await getProfileByUsername(params.username);
  if (!user) notFound();

  // ✅ Use Promise.all to fetch data efficiently
  const [posts, likedPosts, isCurrentUserFollowing] = await Promise.all([
    getUserPosts(user.id),
    getUserLikedPosts(user.id),
    isFollowing(user.id),
  ]);

  return (
    <ProfilePageClient
      user={user}
      posts={posts}
      likedPosts={likedPosts}
      isFollowing={isCurrentUserFollowing}
    />
  );
}

export default ProfilePageServer;
