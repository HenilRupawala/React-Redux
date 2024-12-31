import { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text description">{post.body}</p>
        <div className="reactions">
          <FaHeart className="heart" /> <span>{post.reactions.likes}</span>
        </div>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary tags">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Post;
