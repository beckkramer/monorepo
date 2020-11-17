import React from "react";
import { VictoryChart, VictoryBar, VictoryTheme } from "victory";
import brutalityByStateMockData from "data/brutalityByStateMockData";

import { COLORS } from "styles/constants";

const mockData = [
  brutalityByStateMockData
];

function transformData(data) {
  return data
    .map(function (d) {
      return { x: d.name, y: d.value };
    })
    .sort(function (a, b) {
      return a.y - b.y;
    });
}

function BrutalityByState() {
  return (
    <div style={{ width: 500 }}>
      <h2>Police Brutality By State</h2>
      <VictoryChart
        height={800}
        theme={VictoryTheme.material}
        domainPadding={{ x: 10 }}
      >
        <VictoryBar
          barRatio={0.8}
          style={{
            data: { fill: COLORS.primary },
          }}
          horizontal
          data={transformData(mockData)}
        />
      </VictoryChart>
    </div>
  );
}

export default BrutalityByState;
