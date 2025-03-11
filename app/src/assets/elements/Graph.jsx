import React from "react";
import Plot from "react-plotly.js";

const Graph = ({ data }) => {
  const dataCurr = [[], []];
  const dataPrev = [...data.prev];

  data.curr.map((activity) => {
    dataCurr[0].push(activity.dailyCompleted);
    dataCurr[1].push(activity.name);
  });

  return (
    <Plot
      data={[
        {
          x: [...dataCurr[0]],
          y: [...dataCurr[1]],
          type: "bar",
          marker: { color: "#003dc5" },
          orientation: "h",
          name: "current month",
        },
        {
          x: [...dataPrev[0]],
          y: [...dataPrev[1]],
          type: "bar",
          marker: { color: "#8b7700" },
          orientation: "h",
          name: "previous month",
        },
      ]}
      layout={{
        title: { text: "Comparison" },
        bgcolor: "#007dc3",
        paper_bgcolor: "#007dc3",
        showlegend: false,
        font: {
          family: "Courier New, monospace",
          size: 11,
          color: "white",
        },
      }}
      config={{ displayModeBar: false }}
      style={{ width: "100%", height: "100%" }}
      useResizeHandler={true}
    />
  );
};

export default Graph;
