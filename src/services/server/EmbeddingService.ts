import axios from "axios";

const API_URL = `${process.env.FT_HOST}/api/word/`;

class EmbeddingService {
  static async readList(words: string[]): Promise<number[][]> {
    try {
      const body = { words };
      const res = await axios.post(API_URL, body);
      const { embeddings } = res.data;
      return embeddings;
    } catch (error) {
      throw "api error";
    }
  }
  static async init(): Promise<void> {
    await axios.get(API_URL);
  }
}

export default EmbeddingService;
