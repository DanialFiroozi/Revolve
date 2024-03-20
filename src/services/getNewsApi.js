const BASE_URL = "https://newsapi.org/v2";
const API_KEY = "1c2ad0ee52da4fd3ac0b5882fed82cad";

// get all articles from api
const _getAllNews = (page = 1, pageSize = 100) => {
  return `${BASE_URL}/everything?q=general&domains=techcrunch.com, engadget.com&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;
};

export { _getAllNews };