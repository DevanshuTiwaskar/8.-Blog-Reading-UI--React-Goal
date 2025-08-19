import { useParams, Link } from "react-router";
import { posts } from "../data/post";

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) return <h1 className="text-center mt-10 text-gray-600">Post not found</h1>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <img src={post.image} alt={post.title} className="rounded-xl mb-6" />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{post.title}</h1>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        By {post.author} • {post.date}
      </p>
      <div className="mt-3 space-x-2">
        {post.tags.map((tag, i) => (
          <span key={i} className="px-3 py-1 text-sm rounded-full bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200">
            #{tag}
          </span>
        ))}
      </div>
      <article className="mt-6 text-lg leading-relaxed text-gray-800 dark:text-gray-200 whitespace-pre-line">
        {post.content}
      </article>
      <Link to="/" className="block mt-8 text-indigo-600 dark:text-indigo-400 hover:underline">
        ← Back to Home
      </Link>
    </div>
  );
}
