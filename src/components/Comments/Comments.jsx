import React from "react";

import "./Comments.css";
import { Box, Card, CardContent, Typography } from "@mui/material";

const Comments = ({ comments }) => {
  return (
    <div className="comments">
      <Typography
        gutterBottom
        sx={{ color: "text.primary", fontSize: 15, mt: "15px" }}
      >
        Комментарии:
      </Typography>
      <ul className="comments__list">
        {comments.map((comment) => (
          <Box
            sx={{
              maxWidth: 340,
              width: '100%'
            }}
          >
            <Card
              variant="outlined"
              sx={{
                minHeight: 310,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h5" lineHeight={"27px"}>
                  {comment.name}
                </Typography>
                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14, mt: "15px" }}
                >
                  {comment.body}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
