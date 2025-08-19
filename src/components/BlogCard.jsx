import { Link } from "react-router";

export default function BlogCard({ post }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition bg-white dark:bg-gray-800">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{post.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{post.excerpt}</p>
        <Link 
          to={`/post/${post.id}`} 
          className="inline-block mt-4 text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
