// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
// import dummyData from "../../dummy-data";
// import PostsPage from "./PostsContainer/PostsPage";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments)

  return (
    <div>
     
    {comments.map(commentMeow => <Comment comment ={commentMeow}/>)};
      <CommentInput />
    </div>
  );
};

export default CommentSection;
