import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function PostSliderSkeleton() {
  return (
    <div className="col-xl-4 col-md-6 col-12">
      <article className="post-grid mb-5">
        <a className="post-thumb mb-4 d-block">
          <Skeleton height={300} />
        </a>
        <span className="cat-name text-color font-extra text-sm text-uppercase letter-spacing-1">
          <Skeleton width={200} />
        </span>
        <h3 className="post-title mt-1">
          <Skeleton count={3} />
        </h3>

        <span className="text-muted letter-spacing text-uppercase font-sm">
          <Skeleton width={200} />
        </span>
      </article>
    </div>
  );
}

export default PostSliderSkeleton;
