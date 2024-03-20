import { useContext, useState } from "react";

import { ArticlesContext } from "../context/ArticlesContext";
import Post from "./Post";
import PostSkeleton from "./SkeletonLoader/PostSkeleton";
import Pagination from "./Pagination";

function ArticlesSection() {
  const { articles } = useContext(ArticlesContext);
  const [page, setPage] = useState(1);
  const sliceArticles = articles.slice(0, 9 * page);

  let skeletonAmount = [];
  for (let i = 1; i <= 9; i++) skeletonAmount.push(<PostSkeleton />);

  const paginationHandler = (e) => {
    e.preventDefault();
    setPage((prev) => prev + 1);
  };

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">{!sliceArticles.length && skeletonAmount}</div>
        <div className="row">
          {sliceArticles.map((article, index) => {
            return (
              <Post
                key={index}
                url={article.url}
                image={article.urlToImage}
                author={article.author}
                title={article.title}
                publishedAt={new Date(
                  article.publishedAt.split("T")[0]
                ).toDateString()}
              />
            );
          })}

          <Pagination action={paginationHandler} />
        </div>
      </div>
    </section>
  );
}

export default ArticlesSection;
