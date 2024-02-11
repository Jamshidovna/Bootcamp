import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicArea() {
    const Data = [0, 1800, 1000, 2880, 1090, 2390, 290, 2490];
    const xLabels = [
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
        "Воскресенье",
        "",
      ];
  return (
    <LineChart
      xAxis={[{ scaleType: "point", data: xLabels }]}
      series={[
        {
            data: Data, area: true, showMark: false, color: "rgba(64, 148, 247, 1)"
           
        },
      ]}
      width={700}
      height={400}
      
    />
  );
}

