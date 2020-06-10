import axios from 'axios';

async function getArticles(page) {
    try {
        const response = await axios.get(`${process.env.REACT_APP_ARTICLE_API}/article?_page=${page}&_limit=15`);
        return response;
    } catch (e) {
        throw new Error("Could not fetch articles", e)
    }
}

export default getArticles