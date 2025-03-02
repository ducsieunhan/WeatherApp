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
import { useEffect, useRef } from "react";

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

  const chartRef = useRef(null);

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
        text: "Average Precipitation & Temperature",
        font: {
          size: window.innerWidth < 768 ? 14 : 16,
        }
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
          size: window.innerWidth < 768 ? 10 : 12,
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
        ticks: {
          font: {
            size: window.innerWidth < 768 ? 10 : 12,
          }
        }
      },
      y: {
        min: -20,
        max: 120,
        ticks: {
          font: {
            size: window.innerWidth < 768 ? 10 : 12,
          }
        }
      },
    },
  };

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        chartRef.current.resize();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full p-1 bg-white">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChartData;