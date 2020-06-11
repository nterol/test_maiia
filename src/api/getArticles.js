import axios from "axios";

async function getArticles(key, page) {
  console.log("KEY", key);
  console.log("PAGE", page);
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_ARTICLE_API}/article?_page=${page}&_limit=15`,
    );
    return response.data;
  } catch (e) {
    throw new Error("Could not fetch articles", e);
  }
}

export default getArticles;
