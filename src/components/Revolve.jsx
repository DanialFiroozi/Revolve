import { Route, Routes } from "react-router-dom";

import { SkeletonTheme } from "react-loading-skeleton";

import ArticlesProvider from "../context/ArticlesContext";
import Layout from "../layout/Layout";
import Home from "../page/Home";
import About from "../page/About";
import Contact from "../page/Contact";

function Revolve() {
  return (
    <>
      <ArticlesProvider>
        <SkeletonTheme baseColor="#dfdfdf">
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-me" element={<About />} />
              <Route path="/contact-me" element={<Contact />} />
            </Routes>
          </Layout>
        </SkeletonTheme>
      </ArticlesProvider>
    </>
  );
}

export default Revolve;
