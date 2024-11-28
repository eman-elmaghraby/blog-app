import fetchData from '@/utils/fetchData';
import { Post, Comment } from '@/types';
import '../../styles/globals.css';

export default function PostDetail({ post, comments }: { post: Post; comments: Comment[] }) {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 sm:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        {/* Post Title */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">{post.title}</h1>
        
        {/* Post Body */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8">{post.body}</p>
        
        {/* Comments Section */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Comments</h2>
        <ul className="space-y-6">
          {comments.map((comment) => (
            <li key={comment.id} className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <p className="font-semibold text-gray-800">{comment.name}</p>
              <p className="text-gray-600 mt-2">{comment.body}</p>
            </li>
          ))}
        </ul>

        {/* Back Button */}
        <div className="mt-8 flex justify-center">
          <button
            className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200 ease-in-out"
            onClick={() => window.history.back()}
          >
            Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
}

// Fetch data for the dynamic route
export async function getServerSideProps(context: { params: { id: string } }) {
  const { id } = context.params;

  try {
    const post: Post = await fetchData(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const comments: Comment[] = await fetchData(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    );

    return { props: { post, comments } };
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return { notFound: true };
  }
}
