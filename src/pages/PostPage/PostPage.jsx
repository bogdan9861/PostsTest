import React, { useEffect, useState } from "react";
import Service from "../../service";
import { Link, useParams } from "react-router-dom";
import { reduceString } from "../../utils/reduceString";
import {
  Breadcrumbs,
  CardContent,
  CircularProgress,
  Fab,
  Typography,
} from "@mui/material";

import "./PostPage.css";
import AddComment from "../../components/Modals/AddComment/AddComment";
import Comments from "../../components/Comments/Comments";

const PostPage = () => {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentModalOpen, setCommentModalOpen] = useState(false);

  const { id } = useParams();
  const { getPosts, getCommentsByPostId, loading, error } = Service();

  const getPost = () => {
    getPosts(id)
      .then((res) => {
        setPost(res);
      })
      .catch((e) => console.error(e));
  };

  const getComments = () => {
    getCommentsByPostId(id).then((res) => {
      setComments([...res]);
    });
  };

  useEffect(() => {
    getPost();
    getComments();
  }, []);

  if (loading) {
    return <CircularProgress />;
  } else if (error) {
    return (
      <Typography variant="h5" component="h5" lineHeight={"27px"}>
        Произошла ошибка
      </Typography>
    );
  }

  return (
    <>
      <div className="container">
        <div className="header">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" to="/">
              Главная
            </Link>
            <Typography color="inherit">
              {reduceString(post?.title, 30)}
            </Typography>
          </Breadcrumbs>
        </div>
        <CardContent>
          <Typography variant="h5" component="h5" lineHeight={"27px"}>
            {post?.title}
          </Typography>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14, mt: "15px" }}
          >
            {post?.body}
          </Typography>
        </CardContent>

        <Comments comments={comments} />
        <Fab
          onClick={() => setCommentModalOpen(true)}
          color="primary"
          aria-label="add"
          sx={{ position: "fixed", right: 50, bottom: 50, fontSize: 30 }}
        >
          +
        </Fab>
      </div>
      <AddComment
        open={commentModalOpen}
        setOpen={setCommentModalOpen}
        setComments={setComments}
      />
    </>
  );
};

export default PostPage;
