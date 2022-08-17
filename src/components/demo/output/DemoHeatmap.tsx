import { Box } from "@mui/material";
import { HeatMapGrid } from "react-grid-heatmap";

interface Props {
  xLabels: string[];
  yLabels: string[];
  data: number[][];
}

function DemoHeatmap(props: Props): JSX.Element {
  const { xLabels, yLabels, data } = props;

  return (
    <Box overflow="auto">
      <HeatMapGrid
        data={data}
        xLabels={xLabels}
        yLabels={yLabels}
        cellRender={(x, y, value) => (
          <div title={`Dist(${xLabels[x]}, ${yLabels[y]}) = ${value}`}>
            {value}
          </div>
        )}
        xLabelsStyle={() => ({
          color: "#777",
          fontSize: ".8rem",
          overflow: "auto",
          whiteSpace: "nowrap",
        })}
        yLabelsStyle={() => ({
          fontSize: ".7rem",
          color: "#777",
          overflow: "auto",
          whiteSpace: "nowrap",
        })}
        cellStyle={(_x, _y, ratio) => ({
          background: `rgb(12, 160, 44, ${ratio})`,
          fontSize: ".8rem",
          color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`,
        })}
        cellHeight="2rem"
        xLabelsPos="top"
        yLabelsPos="left"
      />
    </Box>
  );
}

export default DemoHeatmap;
