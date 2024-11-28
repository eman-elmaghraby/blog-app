import Link from 'next/link';
import { Post } from '@/types';

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-white p-6 m-3 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 hover:translate-y-3 m-5">
      <h2 className="text-3xl font-extrabold text-gray-800 hover:text-indigo-500 transition-colors">{post.title}</h2>
      <p className="mt-4 text-gray-700 text-base sm:text-lg">
        {post.body.split(' ').slice(0, 25).join(' ')}...
      </p>
      <Link
        href={`/post/${post.id}`}
        className="mt-6 inline-block py-2 px-4 bg-indigo-600 text-white font-semibold text-lg rounded-md shadow-md hover:bg-indigo-700 hover:shadow-lg transition duration-200 ease-in-out"
      >
        Read More
      </Link>
    </div>
  );
}
