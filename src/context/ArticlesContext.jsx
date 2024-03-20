import { createContext, useEffect, useState } from "react";

import { _getAllNews } from "../services/getNewsApi";

import axios from "axios";

export const ArticlesContext = createContext();

function ArticlesProvider({ children }) {
  const [articles, setArticles] = useState([]);
  const obj = { page: 1, size: 10 };

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios.get(_getAllNews(obj));
      const articles = await response.data.articles;

      setArticles(articles);
    };

    fetchArticles();
  }, []);

  return (
    <ArticlesContext.Provider value={{ articles, setArticles }}>
      {children}
    </ArticlesContext.Provider>
  );
}

export default ArticlesProvider;
