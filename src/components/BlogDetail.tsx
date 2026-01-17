import { useBlog } from '@/hooks/useBlogs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface BlogDetailProps {
  blogId: string;
  onBack: () => void;
}

export const BlogDetail = ({ blogId, onBack }: BlogDetailProps) => {
  const { data: blog, isLoading, error } = useBlog(blogId);

  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-48 bg-gray-200 rounded mb-4"></div>
        <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 p-4">
        Error loading blog: {error.message}
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-gray-500 p-4">
        Blog not found
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <button
        onClick={onBack}
        className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
      >
        ← Back to Blogs
      </button>
      
      <Card>
        <CardHeader>
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <div className="flex flex-wrap gap-2 mb-2">
            {blog.category.map((cat) => (
              <span
                key={cat}
                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>
          <CardTitle className="text-2xl">{blog.title}</CardTitle>
          <p className="text-sm text-gray-500">
            {new Date(blog.date).toLocaleDateString()}
          </p>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {blog.content}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
