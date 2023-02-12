import React, {useState} from "react";
import Header from "./components/Header/Header";
import AddPost from "./components/AddPost/AddPost";
import PostList from "./components/PostList/PostList";
import EditPost from "./components/EditPost/EditPost";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [posts, setPosts] = useState([]);
  
  function addPost(newPost) {
    let newPosts = [...posts];
    newPosts.push(newPost);
    setPosts(newPosts);
    // console.log(newPosts);
  };

  const [showEditModal, setShowEditModal] = useState(false);
  const handleEditClose = () => setShowEditModal(false);
  const handleEditShow = () => setShowEditModal(true);

  const [editedPost, setEditedPost] = useState({});

  function getOnePost(id) {
    let obj = posts.find(item => item.id === id);
    setEditedPost(obj);
    setShowEditModal(true);
  };

  function saveChanges(newObj) {
    let newPosts = posts.map(item => {
      if (item.id === newObj.id) {
        return newObj;
      }
      return item;
    });
    setPosts(newPosts);
    setShowEditModal(false);
  };

  function deletePost(id) {
    let newPosts = posts.filter(item => item.id !== id);
    setPosts(newPosts);
  };

  // function likeOnPost(id) {
  //   let newObj = posts.map(item => {
  //     if (item.id === id) {
  //       item.isLike = !item.isLike
  //     }
  //     return item;
  //   });
  //   console.log(newObj)
  //   setPosts(newObj);
  // }

  return (
    <>
      <Header handleShow={ handleShow } />
      <AddPost show={show} handleClose={handleClose} addPost={addPost}/>
      <PostList posts={posts} getOnePost={getOnePost} deletePost={deletePost} />
      {showEditModal && <EditPost showEditModal={showEditModal} handleEditClose={handleEditClose} editedPost={editedPost} saveChanges={saveChanges} />}

    </>
  );
}

export default App;
