import React, { useState } from 'react';
import { VictoryChart, VictoryAxis, VictoryBar, VictoryTooltip } from 'victory';

interface ChartProps {
  data: { day: number; value: number }[];
  daysOfWeek: string[];
}
const Chart: React.FC<ChartProps> = ({ data, daysOfWeek }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <VictoryChart domainPadding={{ x: 20 }}>
      <VictoryAxis
        tickValues={[1, 2, 3, 4, 5, 6, 7]}
        tickFormat={daysOfWeek}
        style={{
          tickLabels: {
            fontSize: 10,
            fill: '#000',
            fontWeight: 'lighter',
          },
        }}
      />
      <VictoryAxis
        dependentAxis
        tickFormat={(t) => `${t / 1000}k`}
        style={{
          tickLabels: {
            fontSize: 8,
            fill: '#000',
            fontWeight: 'lighter',
          },
          grid: { stroke: '#ddd', strokeDasharray: '4,4' },
        }}
      />

      <VictoryBar
        data={data}
        x='day'
        y='value'
        labels={({ datum }) => datum.value}
        labelComponent={
          <VictoryTooltip
            flyoutStyle={{
              fill: '#222',
              stroke: 'none',
              borderRadius: 5,
            }}
            style={{ fill: '#fff', fontSize: 8 }}
          />
        }
        cornerRadius={5}
        style={{
          data: {
            fill: ({ index }) =>
              index === activeIndex ? '#1E40AF' : '#93C5FD',
            width: 25,
            cursor: 'pointer',
            borderRadius: 5,
          },
        }}
        events={[
          {
            target: 'data',
            eventHandlers: {
              onMouseEnter: () => [
                {
                  target: 'data',
                  mutation: (props) => {
                    setActiveIndex(props.index);
                  },
                },
              ],
              onMouseLeave: () => [
                {
                  target: 'data',
                  mutation: () => {
                    setActiveIndex(null);
                  },
                },
              ],
            },
          },
        ]}
      />
    </VictoryChart>
  );
};

export default Chart;
