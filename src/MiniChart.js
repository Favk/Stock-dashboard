import { useEffect, useRef } from "react";

function MiniChart({ prices }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!prices || prices.length === 0) return;

    const ctx = canvasRef.current.getContext("2d");

    const chart = new window.Chart(ctx, {
      type: "line",
      data: {
        labels: prices.map((_, i) => i),
        datasets: [
          {
            data: prices,
            borderColor: "#2563eb",
            borderWidth: 2,
            pointRadius: 0,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: false,
        plugins: {
          legend: { display: false },
        },
        scales: {
          x: { display: false },
          y: { display: false },
        },
      },
    });

    return () => chart.destroy();
  }, [prices]);

  return <canvas ref={canvasRef} width={120} height={40}></canvas>;
}

export default MiniChart;
