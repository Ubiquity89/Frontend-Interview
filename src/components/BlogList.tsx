import { useBlogs } from '@/hooks/useBlogs';
import type { Blog } from '@/types/blog';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface BlogListProps {
  onBlogSelect: (blog: Blog) => void;
}

export const BlogList = ({ onBlogSelect }: BlogListProps) => {
  const { data: blogs, isLoading, error } = useBlogs();

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-full"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 p-4">
        Error loading blogs: {error.message}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
      {blogs?.map((blog) => (
        <Card 
          key={blog.id} 
          className="cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => onBlogSelect(blog)}
        >
          <CardHeader>
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
            <CardTitle className="text-lg">{blog.title}</CardTitle>
            <CardDescription>{blog.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">
              {new Date(blog.date).toLocaleDateString()}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
