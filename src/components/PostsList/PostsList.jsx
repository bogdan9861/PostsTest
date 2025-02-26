import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

import Post from "../Post/Post";

import { reduceString } from "../../utils/reduceString";

import "./PostsList.css";

const PostsList = ({ posts, loading, error }) => {
  if (loading) {
    return <CircularProgress />;
  } else if (error) {
    return <h1>Произошла ошибка</h1>;
  }

  return (
    <ul className="postsList">
      {posts.map((post) => (
        <Link
          className="postsList__item"
          to={`/post/${post?.id}`}
          key={post.id}
        >
          <Post title={post?.title} body={reduceString(post?.body, 100)} />
        </Link>
      ))}

      {posts?.length === 0 && <h1>Нет результатов поиска</h1>}
    </ul>
  );
};

export default PostsList;
