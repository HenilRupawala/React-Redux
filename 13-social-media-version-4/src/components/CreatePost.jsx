import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postDescriptionElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postDescription = postDescriptionElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    // userIdElement.current.value = "";
    // postTitleElement.current.value = "";
    // postDescriptionElement.current.value = "";
    // reactionsElement.current.value = "";
    // tagsElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postDescription,
        reactions: { likes: reactions },
        tags: tags,
        userId: userId,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        console.log(post);
        addPost(post);
      });
    navigate("/");
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Enter Your User Id Here"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="Enter Your Post Title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Post Description
        </label>
        <textarea
          type="text"
          ref={postDescriptionElement}
          rows="4"
          className="form-control"
          id="description"
          placeholder="Enter Your Post Description"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Post Reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="Reactions You Get"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Hashtags
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Please Space Between Each Tag"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
