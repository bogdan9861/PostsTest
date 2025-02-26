import { Box, Button, extendTheme, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import Service from "../../../service";

import "./AddComment.css";

const AddComment = ({ open, setOpen, setComments }) => {
  const [fileds, setFields] = useState({
    name: "",
    email: "",
    body: "",
  });

  const { addComment } = Service();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #000",
    borderRadius: "10px",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  const handleChangeField = (e) => {
    if (!e) return;

    setFields({ ...fileds, [e.target.name]: e.target.value });
  };

  const sendNewComment = (e) => {
    if (e) e.preventDefault();

    // addComment(fileds)
    //   .then((res) => {
    //     setComments((prev) => [
    //       ...prev,
    //       { ...fileds, id: Math.floor(Math.random() * 1000) },
    //     ]);
    //   })
    //   .catch((e) => {
    //     alert("При отправке комментария произошла ошибка");
    //   });

    setComments((prev) => [
      ...prev,
      { ...fileds, id: Math.floor(Math.random() * 1000) },
    ]);
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h6" component="h3" sx={{ mb: "20px" }}>
          Создайте комментарий
        </Typography>
        <form className="addComment__form" onSubmit={sendNewComment}>
          <div className="addComment__form-inner">
            <input
              required
              className="addComment__form-input"
              placeholder="Введите имя"
              name="name"
              onChange={(e) => handleChangeField(e)}
            />
            <input
              required
              className="addComment__form-input"
              type="email"
              placeholder="Введите E-mail"
              name="email"
              onChange={(e) => handleChangeField(e)}
            />
            <input
              required
              className="addComment__form-input"
              placeholder="Введите комментарий"
              name="body"
              onChange={(e) => handleChangeField(e)}
            />
            <Button type="submit" variant="contained" sx={{ alignSelf: "end" }}>
              send
            </Button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default AddComment;
