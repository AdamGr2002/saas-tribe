
interface Comment {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
  }
  
  export default async function CommentsPage() {
    const getComments = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/comments', {
        next: { revalidate: 3600 } // Cache for 1 hour
      });
      if (!res.ok) throw new Error('Failed to fetch comments');
      return res.json();
    }
  
    const comments = await getComments();
  
    return (
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Comments</h1>
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Comment</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {comments.map((comment: Comment) => (
                <tr key={comment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{comment.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{comment.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{comment.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{comment.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }