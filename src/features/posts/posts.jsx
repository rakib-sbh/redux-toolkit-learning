import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "./postsSlice";
import "../../styles/post.css";

const Posts = () => {
  const { posts, isLoading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      <section>
        {posts.map((post) => {
          const { id, title, body } = post;
          return (
            <article key={id} className="post">
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Posts;
