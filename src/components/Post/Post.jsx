import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Post = ({ title, body }) => {
  const card = (
    <>
      <CardContent>
        <Typography variant="h5" component="h5" lineHeight={"27px"}>
          {title}
        </Typography>
        <Typography
          gutterBottom
          sx={{ color: "text.secondary", fontSize: 14, mt: "15px" }}
        >
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </>
  );

  return (
    <Box
      sx={{
        minWidth: 275,
        maxWidth: 340,
      }}
    >
      <Card
        variant="outlined"
        sx={{ minHeight: 310, display: "flex", flexDirection: "column", justifyContent: 'space-between' }}
      >
        {card}
      </Card>
    </Box>
  );
};

export default Post;
