import { BlogCard } from './BlogCard';

export const BlogList = ({ blogs, onBlogSelect, selectedBlogId }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Latest Articles</h2>
      <div className="space-y-3">
        {blogs?.map((blog) => (
          <BlogCard 
            key={blog.id} 
            blog={blog}
            onClick={() => onBlogSelect(blog)}
            isActive={selectedBlogId === blog.id}
          />
        ))}
      </div>
    </div>
  );
};
