import axios from "axios";

const API_URL = "https://fasttext-api.herokuapp.com/api/word/";

class ApiCallService {
  static async getFastTextEmbeddings(words: string[]): Promise<number[][]> {
    try {
      const body = { words };
      const res = await axios.post(API_URL, body);
      const { embeddings } = res.data;
      return embeddings;
    } catch (error) {
      throw "api error";
    }
  }
  static async awakeEmbeddingsServer(): Promise<void> {
    await axios.get(API_URL);
  }
}

export default ApiCallService;
