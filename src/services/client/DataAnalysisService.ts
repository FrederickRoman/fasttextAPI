const getZeroMatrix = (n: number, m: number): number[][] =>
  new Array(n).fill(0).map(() => new Array(m).fill(0));

const dot = (vectorA: number[], vectorB: number[]): number =>
  vectorA
    .map((vectorA_i, i) => vectorA_i * vectorB[i])
    .reduce((acc, cur) => acc + cur);

const magnitude = (vector: number[]): number => Math.sqrt(dot(vector, vector));

const calcCosineSimilarity = (vectorA: number[], vectorB: number[]): number =>
  dot(vectorA, vectorB) / (magnitude(vectorA) * magnitude(vectorB));

class DataAnalysisService {
  static getHeatMap(embeddings: number[][]): number[][] {
    const numOfEmbs = embeddings.length;
    const heatMap = Object.seal(getZeroMatrix(numOfEmbs, numOfEmbs));
    for (let i = 0; i < numOfEmbs; i++) {
      for (let j = i; j < numOfEmbs; j++) {
        const [vectorA, vectorB] = [embeddings[i], embeddings[j]];
        const cosSim = calcCosineSimilarity(vectorA, vectorB);
        heatMap[i][j] = heatMap[j][i] = Math.round(100 * cosSim) / 100;
      }
    }
    return heatMap;
  }
}

export default DataAnalysisService;
