import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Post } from "../types";

export default function PostDetail() {
	const [post, setPost] = useState<Post | null>(null);
	const { id } = useParams<{ id: string }>();

	useEffect(() => {
		// ここで実際のAPIからデータを取得する代わりに、ダミーデータを使用します
		const dummyPost: Post = {
			id: parseInt(id || "0"),
			title: `Post ${id}`,
			content: `This is the content of post ${id}.`,
		};
		setPost(dummyPost);
	}, [id]);

	if (!post) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1 className="text-2xl font-bold mb-4">{post.title}</h1>
			<p>{post.content}</p>
		</div>
	);
}
