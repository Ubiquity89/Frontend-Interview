export const BlogCard = ({ blog, onClick, isActive }) => {
  return (
    <div 
      className={`
        rounded-lg border p-4 cursor-pointer transition-colors hover:bg-muted
        ${isActive ? 'border-l-4 border-l-primary bg-muted/50' : ''}
      `}
      onClick={onClick}
    >
      {/* Top row: Category and Date */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-medium uppercase text-primary">
          {blog.category[0]}
        </span>
        <span className="text-xs text-muted-foreground">
          {new Date(blog.date).toLocaleDateString()}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold leading-tight mb-2">
        {blog.title}
      </h3>

      {/* Description */}
      <p className="text-xs text-muted-foreground line-clamp-2">
        {blog.description}
      </p>
    </div>
  );
};
