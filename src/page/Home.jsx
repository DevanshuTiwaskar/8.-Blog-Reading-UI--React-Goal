import BlogCard from "../components/BlogCard";
import { posts } from "../data/post";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-2">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
