import { LineChart } from "@mui/x-charts/LineChart";

const Redline = () => {
  return (
    <div>
      
        <LineChart
          xAxis={[
            { data: [0, 0.2, 1, 2, 2.8, 3.3, 3.8, 4.3, 5, 6, 7, 7.8, 8] },
          ]}
          series={[
            {
              area: true,
              showMark: false,
              data: [0, 1, 5, 1, 4, 2.5, 1, 4, 8, 3, 8, 10],
              color: "#F2271C",
            },
          ]}
          width={300}
          height={200}
        />
      
    </div>
  );
};

export default Redline;
