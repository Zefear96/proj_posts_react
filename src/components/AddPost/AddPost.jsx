import React, { useState } from "react";
import { Button, Modal, FormControl } from "react-bootstrap";

const AddPost = ({ show, handleClose, addPost }) => {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");

  function createPost() {
    let newPost = {
      body,
      author,
      image,
      id: Date.now(),
      isLike: false,
    };

    for (let i in newPost) {
      if (newPost[i] === "") {
        alert("Some inputs are empty!");
        return;
      }
    }

    addPost(newPost);

    setBody("");
    setAuthor("");
    setImage("");

    handleClose();
  }

  return (
    <>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add New Post
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="form">
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />

            <FormControl
              size="lg"
              className="my-3"
              placeholder="Body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={createPost}>
            Add Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddPost;
