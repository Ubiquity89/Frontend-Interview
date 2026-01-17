import type { Blog, CreateBlogRequest } from '@/types/blog';

const API_BASE_URL = 'http://localhost:3002';

export const api = {
  // Get all blogs
  async getBlogs(): Promise<Blog[]> {
    const response = await fetch(`${API_BASE_URL}/blogs`);
    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }
    return response.json();
  },

  // Get blog by ID
  async getBlogById(id: string): Promise<Blog> {
    const response = await fetch(`${API_BASE_URL}/blogs/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch blog');
    }
    return response.json();
  },

  // Create new blog
  async createBlog(blog: CreateBlogRequest): Promise<Blog> {
    const response = await fetch(`${API_BASE_URL}/blogs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...blog,
        date: new Date().toISOString(),
        id: Date.now().toString(),
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to create blog');
    }
    return response.json();
  },
};
