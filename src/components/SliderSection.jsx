import { useContext } from "react";

import PostSlider from "../components/PostSlider";
import PostSliderSkeleton from "../components/SkeletonLoader/PostSliderSkeleton";

import { ArticlesContext } from "../context/ArticlesContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function SliderSection() {
  const { articles } = useContext(ArticlesContext);
  const sliceArticles = articles.slice(20, 26);

  let skeletonAmount = [];

  for (let i = 0; i <= 2; i++) {
    skeletonAmount.push(
      <SwiperSlide key={i}>
        <PostSliderSkeleton />
      </SwiperSlide>
    );
  }

  return (
    <section className="slider mt-4">
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-12 col-sm-12 col-md-12 slider-wrap">
            <Swiper
              loop
              autoplay
              modules={[Pagination, Autoplay]}
              spaceBetween={8}
              slidesPerView={3}
              pagination={{ clickable: true }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                680: {
                  slidesPerView: 2,
                },
                999: {
                  slidesPerView: 3,
                },
              }}
            >
              {!sliceArticles.length && skeletonAmount}
              {sliceArticles.map((article, index) => {
                return (
                  <SwiperSlide key={index}>
                    <PostSlider
                      url={article.url}
                      image={article.urlToImage}
                      author={article.author}
                      title={article.title}
                      publishedAt={new Date(
                        article.publishedAt.split("T")[0]
                      ).toDateString()}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SliderSection;
