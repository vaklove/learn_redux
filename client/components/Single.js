import React from "react";
import Photo from "./Photo";
import Comments from "./Comments";
//import comments
const Single = React.createClass({
  render() {
    const { postId } = this.props.params;
    //index of the post
    const i = this.props.posts.findIndex(
      post => post.code === this.props.params.postId
    );
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];

    //get us the post
    //console.log(postComments);
    console.log(post);
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    );
  }
});

export default Single;
