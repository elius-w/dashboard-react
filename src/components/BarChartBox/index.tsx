/* eslint-disable react/function-component-definition */
import React from 'react';
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts';

import formatCurrency from '../../utils/formatCurrency';

import {
  Container,
  SideLeft,
  SideRight,
  LegendContainer,
  Legend
} from './style';

interface IBarChartProps {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[];
}

export const BarChartBox: React.FC<IBarChartProps> = ({ title, data }) => {
  return (
    <Container>
      <SideLeft>
        <h2>{title}</h2>

        <LegendContainer>
          {data.map((indicator) => (
            <Legend key={indicator.name} color={indicator.color}>
              <div>{indicator.percent}%</div>
              <span>{indicator.name}</span>
            </Legend>
          ))}
        </LegendContainer>
      </SideLeft>

      <SideRight>
        <ResponsiveContainer>
          <BarChart data={data}>
            <Bar dataKey="amount" name="Valor">
              {data.map((indicator: { name: any; color: any }) => (
                <Cell
                  key={indicator.name}
                  fill={indicator.color}
                  cursor="pointer"
                />
              ))}
            </Bar>
            <Tooltip
              cursor={{ fill: 'none' }}
              formatter={(value: any) => formatCurrency(Number(value))}
            />
            {/* <Tooltip formatter={(value: number) => formatCurrency(Number(value))}/> */}
          </BarChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
  );
};

export default BarChartBox;
