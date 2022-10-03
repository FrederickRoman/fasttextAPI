import axios from "axios";

const API_URL = "http://localhost:8080/api/word/";

class ApiCallService {
  static async getFastTextEmbeddings(words: string[]): Promise<number[][]> {
    try {
      const body = { words };
      const res = await axios.post(API_URL, body);
      const { embeddings } = res.data;
      return embeddings;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  static async awakeEmbeddingsServer(): Promise<void> {
    await axios.get(API_URL);
  }
}

export default ApiCallService;
