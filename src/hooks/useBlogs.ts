import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/services/api';

export const useBlogs = () => {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: api.getBlogs,
  });
};

export const useBlog = (id: string) => {
  return useQuery({
    queryKey: ['blog', id],
    queryFn: () => api.getBlogById(id),
    enabled: !!id,
  });
};

export const useCreateBlog = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: api.createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    },
  });
};
