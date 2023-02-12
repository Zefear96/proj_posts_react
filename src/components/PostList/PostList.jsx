import React from "react";
import PostCard from "../PostCard/PostCard";

const PostList = ({ posts, getOnePost, deletePost, likeOnPost }) => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap w-75 my-5 mx-auto">
        {posts?.map((item) => (
          <PostCard
            key={item.id}
            item={item}
            getOnePost={getOnePost}
            deletePost={deletePost}
            posts={posts}
            likeOnPost={likeOnPost}
          />
        ))}
      </div>
    </>
  );
};

export default PostList;
