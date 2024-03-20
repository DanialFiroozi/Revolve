import { Link } from "react-router-dom";

function Post({ title, publishedAt, author, image, url }) {
  return (
    <div className="col-xl-4 col-md-6 col-12">
      <article className="post-grid mb-5">
        <Link className="post-thumb mb-4 d-block" to={url} target="_blank">
          <img src={image} alt="" className="img-fluid w-100" />
        </Link>
        <span className="cat-name text-color font-extra text-sm text-uppercase letter-spacing-1">
          {author}
        </span>
        <h3 className="post-title mt-1">
          <Link to={url} target="_blank">{title}</Link>
        </h3>

        <span className="text-muted letter-spacing text-uppercase font-sm">
          {publishedAt}
        </span>
      </article>
    </div>
  );
}

export default Post;
