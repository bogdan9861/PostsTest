import { useHttp } from "../hooks/useRequest";

const Service = () => {
  const { request, loading, error, clearError } = useHttp();
  const BASE_URL = process.env.REACT_APP_API_BASE;

  const getPosts = async (id) => {
    return request(`${BASE_URL}/posts/${id || ""}`);
  };

  const getCommentsByPostId = async (id) => {
    return request(`${BASE_URL}/posts/${id}/comments`);
  };

  const addComment = async (body) => {
    return request(`${BASE_URL}/comments`, "POST", body);
  };

  return {
    getPosts,
    getCommentsByPostId,
    loading,
    error,
    clearError,
    addComment,
  };
};

export default Service;
