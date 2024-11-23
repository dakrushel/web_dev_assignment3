"use client";
import React, { useState, useEffect } from "react";
import AddPost from "../components/AddPost";
import PostList from "../components/PostList";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

// a component that when click will open a modal to add a post to my page
// another component to retrieve all posts from the database

<<<<<<< Updated upstream
 async function getData() {
  try {
    const res = await fetch("http://localhost:3000/api/posts", {cache: "no-store"});
    if(!res.ok) {
      console.error("API error: ", res.status, res.statusText);
      return [];
    }
      return res.json();
  } catch (error) {
    console.error("Fetch failed: ", error.message);
    return [];
  }
}
const page = async () => {
   let posts = [];

   try {
    posts = await getData();
   } catch (error) {
    console.error("Error fetching posts: ", error.message);
   }

  return (
    <main className='flex flex-col justify-between p-24'>
        <h1 className='p-5'>My Movies App</h1>
        <div>
            <AddPost />
            <PostList posts={posts} />
        </div>
=======
//  async function getData() {
//   try {
//     const res = await fetch("http://localhost:3000/api/posts", {cache: "no-store"});
//     if(!res.ok) {
//       console.error("API error: ", res.status, res.statusText);
//       return [];
//     }
//       return res.json();
//   } catch (error) {
//     console.error("Fetch failed: ", error.message);
//     return [];
//   }
// }
// const page = async () => {
//    let posts = [];

//    try {
//     posts = await getData();
//    } catch (error) {
//     console.error("Error fetching posts: ", error.message);
//    }

const Page = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts from the database
  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/posts", {
        cache: "no-store",
      });
      if (!res.ok) {
        console.error("API error: ", res.status, res.statusText);
        setPosts([]);
      } else {
        const data = await res.json();
        setPosts(data);
      }
    } catch (error) {
      console.error("Fetch failed: ", error.message);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) {
      router.push("/login"); // Redirect to login page if not logged in
    } else {
      fetchData(); // Fetch posts if authenticated
    }
  }, [user, router]);

  if (!user || loading) {
    return <p className="p-5">Loading...</p>; // Show loading message
  }

  return (
    <main className="flex flex-col justify-between p-24">
      <h1 className="pb-10 text-4xl font-bold text-yellow-500 ">My Movies Inventory</h1>
      <div>
        <AddPost />
        <PostList posts={posts} />
      </div>
>>>>>>> Stashed changes
    </main>
  );
};

export default Page;