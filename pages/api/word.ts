import EmbeddingService from "@/services/server/EmbeddingService";
import type { NextApiHandler } from "next";

type Data = {
  embeddings: number[][];
};

class WordController {
  static word_detail: NextApiHandler<Data> = async (req, res) => {
    const { words } = req.body;
    const embeddings = await EmbeddingService.readList(words);
    res.status(200).json({ embeddings });
  };
  static word_init: NextApiHandler = async (_, res) => {
    const embeddings = await EmbeddingService.init();
    res.status(200).json({ embeddings });
  };
}

class WordRouter {
  static route: NextApiHandler = async (req, res) => {
    switch (req.method) {
      case "GET":
        WordController.word_init(req, res);
        break;
      case "POST":
        WordController.word_detail(req, res);
        break;
      default:
        break;
    }
  };
}

export default WordRouter.route;
