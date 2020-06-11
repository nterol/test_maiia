import axios from "axios";

async function getArticles(key, query) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_ARTICLE_API}/article?${query}`,
    );
    return response.data;
  } catch (e) {
    throw new Error("Could not fetch shopping bag", e);
  }
}

export default getArticles;
