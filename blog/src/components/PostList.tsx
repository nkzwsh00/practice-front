import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Post } from "../types";

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // ここで実際のAPIからデータを取得する代わりに、ダミーデータを使用します
    const dummyPosts: Post[] = [
      {
        id: 1,
        title: "First Post",
        content: "This is the first post content.",
      },
      {
        id: 2,
        title: "Second Post",
        content: "This is the second post content.",
      },
    ];
    setPosts(dummyPosts);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border p-4 rounded-md">
            <Link
              to={`/post/${post.id}`}
              className="text-xl text-blue-500 hover:text-blue-700"
            >
              {post.title}
            </Link>
            <p className="mt-2">{post.content.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
