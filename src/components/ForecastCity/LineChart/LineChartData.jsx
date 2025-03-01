import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import DataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  DataLabels
);

const LineChartData = ({ labelX = ["0", "0", "0", "0", "0", "0", "0"], dataLine1 = [0, 0, 0, 0, 0, 0, 0], dataLine2 = [0, 0, 0, 0, 0, 0, 0] }) => {

  const data = {
    labels: labelX,
    datasets: [
      {
        label: "Precipitation",
        data: dataLine1,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0,
      },
      {
        label: "Temperature",
        data: dataLine2,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Average High & Low Temperature",
      },
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
      },
      datalabels: {
        display: true,
        color: '#000',
        align: 'top',
        font: {
          weight: 'bold'
        },
        offset: 5,
        formatter: (value, context) => {
          if (context.datasetIndex === 0) {
            return `${value}%`;
          } else if (context.datasetIndex === 1) {
            return `${value}°C`;
          }
          return value;
        }
      }
    },
    scales: {
      x: {
      },
      y: {

        min: -20,
        max: 120,
      },
    },
  };

  return (
    <div className="w-full p-1 bg-white">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChartData;