import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function PostSliderSkeleton() {
  const skelBreakpoint =
    window.innerWidth > 568 ? (
      <Skeleton height={688} />
    ) : (
      <Skeleton height={456} />
    );

  return (
    <div className="slider-item">
      <div className="slider-item-content">
        <div className="post-thumb mb-4">{skelBreakpoint}</div>

        <div className="slider-post-content">
          <span className="cat-name text-color font-sm font-extra text-uppercase letter-spacing">
            <Skeleton width={150} />
          </span>
          <h3 className="post-title mt-1">
            <Skeleton count={2} />
          </h3>
          <span className=" text-muted text-capitalize">
            <Skeleton width={150} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default PostSliderSkeleton;
