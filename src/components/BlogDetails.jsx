export const BlogDetails = ({ blog }) => {
  if (!blog) {
    return (
      <div className="text-muted-foreground p-4">
        Blog not found
      </div>
    );
  }

  return (
    <article className="w-full max-w-none">
      {/* Cover Image */}
      <div className="aspect-video max-h-[380px] overflow-hidden rounded-xl mb-6">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold mt-6 mb-4">
          {blog.title}
        </h1>
        <button className="flex items-center gap-2 px-4 py-1 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" />
            <line x1="15.4" y1="6.5" x2="8.6" y2="10.5" />
          </svg>
          Share
        </button>
      </div>

      {/* Meta Row */}
      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
          {blog.category[0]}
        </span>
        <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
        <span>{new Date(blog.date).toLocaleDateString()}</span>
        <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
        <span>5 min read</span>
      </div>

      {/* Description Block */}
      <div className="bg-muted/40 rounded-lg p-4 mt-4 mb-6">
        <p className="text-base text-muted-foreground">
          {blog.description}
        </p>
      </div>

      {/* Blog Content */}
      <div className="space-y-6">
        <p className="text-base leading-7">
          {blog.content}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-8">
        {blog.category.map((cat) => (
          <span
            key={cat}
            className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
          >
            #{cat.toLowerCase()}
          </span>
        ))}
      </div>

      {/* Author Section */}
      <div className="mt-12 pt-8 border-t border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
              <span className="text-muted-foreground font-semibold text-sm">JD</span>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Written by: John Doe</h4>
              <p className="text-sm text-muted-foreground">Senior Finance Analyst</p>
            </div>
          </div>
          
          {/* Like and Comment Icons */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center justify-center w-10 h-10 border border-border rounded-lg hover:bg-muted transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-1.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/>
              </svg>
            </button>
            
            <button className="flex items-center justify-center w-10 h-10 border border-border rounded-lg hover:bg-muted transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
