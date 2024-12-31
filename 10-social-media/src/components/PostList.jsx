import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomMessage";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const handleGetPostsClicked = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(data => handleGetPostsClicked(data.posts));
  };

  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostClicked={handleGetPostsClicked} />
      )}
      {postList.map((post) => (
        <Post key={post.id} id={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
