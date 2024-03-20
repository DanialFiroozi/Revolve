import { Link } from "react-router-dom";

function PostSlider({ title, publishedAt, author, image, url }) {
  return (
    <div className="slider-item">
      <div className="slider-item-content">
        <div className="post-thumb mb-4">
          <Link to={url} target="_blank">
            <img src={image} alt="" className="img-fluid" />
          </Link>
        </div>

        <div className="slider-post-content">
          <span className="cat-name text-color font-sm font-extra text-uppercase letter-spacing">
            {author}
          </span>
          <h3 className="post-title mt-1">
            <Link to={url} target="_blank">{title}</Link>
          </h3>
          <span className=" text-muted text-capitalize">{publishedAt}</span>
        </div>
      </div>
    </div>
  );
}

export default PostSlider;
