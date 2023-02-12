import React from "react";
import AddLikeToPost from "../AddLikeToPost/AddLikeToPost";
import { Card, Button } from "react-bootstrap";

const PostCard = ({ item, getOnePost, deletePost }) => {
  return (
    <>
      <Card style={{ width: "18rem" }} className="w-25 mx-5 mb-5">
        <div
          className="d-flex"
          style={{
            backgroundColor: "#1dc0ec",
          }}
        >
          <Card.Title className="my-3 ms-3">Author: {item.author}</Card.Title>
        </div>
        <Card.Img
          variant="top"
          src={item.image}
          style={{
            maxHeight: "250px",
            minHeight: "200px",
          }}
        />
        <Card.Body
          style={{
            backgroundColor: "#1dc0ec",
          }}
        >
          <Card.Text>
            {item.body} <br />
          </Card.Text>
          <Button
            variant="danger"
            className="mx-1"
            onClick={() => deletePost(item.id)}
          >
            Delete
          </Button>
          <Button variant="warning" onClick={() => getOnePost(item.id)}>
            Edit
          </Button>
          <AddLikeToPost item={item} />
        </Card.Body>
      </Card>
    </>
  );
};

export default PostCard;
