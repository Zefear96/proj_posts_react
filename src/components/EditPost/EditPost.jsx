import React, { useState } from "react";
import { Button, Modal, FormControl } from "react-bootstrap";

const EditPost = ({
  showEditModal,
  handleEditClose,
  editedPost,
  saveChanges,
}) => {
  const [post, setPost] = useState(editedPost);

  const handleInput = (e) => {
    let newObj = {
      ...post,
      [e.target.name]: e.target.value,
    };
    console.log(newObj);
    setPost(newObj);
  };

  function saveEditedPost() {
    for (let i in post) {
      if (post[i] === "") {
        alert("Some inputs are empty!");
        return;
      }
    }
    // console.log(post);
    saveChanges(post);
  }

  return (
    <>
      <Modal show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="form">
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Author"
              value={post.author}
              name="author"
              onChange={handleInput}
            />

            <FormControl
              size="lg"
              className="my-3"
              placeholder="Body"
              value={post.body}
              name="body"
              onChange={handleInput}
            />

            <FormControl
              size="lg"
              className="my-3"
              placeholder="Image"
              value={post.image}
              name="image"
              onChange={handleInput}
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveEditedPost}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditPost;
