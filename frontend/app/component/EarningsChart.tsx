"use client"
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea
} from 'recharts';
import styles from '../styles/earningChart.module.css';
import { TooltipProps } from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';
const EarningsChart = () => {
  // Sample data - in a real app, this would come from props or an API
  const data = [
    { month: 'Jan', income: 450000, expense: 320000 },
    { month: 'Feb', income: 780000, expense: 350000 },
    { month: 'Mar', income: 650000, expense: 480000 },
    { month: 'Apr', income: 520000, expense: 380000 },
    { month: 'May', income: 600000, expense: 420000 },
    { month: 'Jun', income: 680000, expense: 350000 },
    { month: 'Jul', income: 720000, expense: 390000 },
    { month: 'Aug', income: 750000, expense: 480000 },
    { month: 'Sep', income: 837000, expense: 500000 },
    { month: 'Oct', income: 780000, expense: 460000 },
    { month: 'Nov', income: 830000, expense: 420000 },
    { month: 'Dec', income: 980000, expense: 580000 }
  ];

  // Find the September data for the tooltip
  // const septemberData = data.find(item => item.month === 'Sep');

  // Formatting for tooltip and Y-axis
  const formatCurrency = (value:number) => {
    return `${(value / 1000)}K`;
  };

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }:TooltipProps<ValueType, NameType>) => {
if (active && payload && payload.length >= 2) {
    return (
      <div className={styles.tooltip}>
        <p className={styles.tooltipLabel}>{`${label} 14, 2020`}</p>
        <p className={styles.tooltipIncome}>${payload[0].value?.toLocaleString()}</p>
        <p className={styles.tooltipExpense}>${payload[1].value?.toLocaleString()}</p>
      </div>
    );
  }
    return null;
  };

  return (
    <div className={styles.container}>


      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#f5f5f5" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#999', fontSize: 12 }}
            />
            <YAxis
              tickFormatter={formatCurrency}
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#999', fontSize: 12 }}
              domain={[0, 1000000]}
              ticks={[0, 250000, 500000, 750000, 1000000]}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={false}
              position={{ y: 0 }}
            />
            <ReferenceArea
              x1="Aug"
              x2="Sep"
              fill="#f8f9fe"
              fillOpacity={0.8}
            />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#86d0e8"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6, fill: '#86d0e8' }}
              name="Income"
            />
            <Line
              type="monotone"
              dataKey="expense"
              stroke="#c77dff"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6, fill: '#c77dff', stroke: '#fff', strokeWidth: 2 }}
              name="Expense"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <div className={styles.legendDotIncome}></div>
          <span>Income</span>
        </div>
        <div className={styles.legendItem}>
          <div className={styles.legendDotExpense}></div>
          <span>Expense</span>
        </div>
      </div>
    </div>
  );
};

export default EarningsChart;
