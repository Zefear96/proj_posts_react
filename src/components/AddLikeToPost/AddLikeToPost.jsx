import React, { useState } from "react";
import { Button } from "react-bootstrap";

const AddLikeToPost = () => {
  const [like, setLike] = useState(false);

  return (
    <>
      <Button onClick={() => setLike(!like)} className="mx-1">
        Like{!like ? "🤍" : "❤️"}
      </Button>
    </>
  );
};

export default AddLikeToPost;
