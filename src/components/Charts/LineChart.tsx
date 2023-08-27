/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import { Chart, LineElement } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { ChartData } from "../../types";

Chart.register(LineElement);

interface PropsData {
    dataChart: any
}

function LineChartComponent(props: PropsData) {
    const [chartData, setChartData] = useState<ChartData>({
        labels: [],
        datasets: [
            {
                label: "",
                data: [],
                tension: 0.5,
                borderColor: "",
                pointBorderColor: "",
                backgroundColor: {} as CanvasGradient,
                fill: true,
                spanGaps: true,
            },
        ],
    });

    useEffect(() => {
        setChartData({
            labels: props.dataChart.map((list: any) => list.data),
            datasets: [
                {
                    label: "",
                    data: props.dataChart.map((list: any) => list.amount),
                    tension: 0.5,
                    borderColor: "#5185F7",
                    pointBorderColor: "transparent",
                    backgroundColor: createLinearGradient(),
                    fill: true,
                    spanGaps: true,
                },
            ],
        });
    }, [props.dataChart]);

    const createLinearGradient = () => {
        const ctx = document.createElement("canvas").getContext("2d");
        if (ctx) {
            const gradient = ctx.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, "#CEDDFF");
            gradient.addColorStop(1, "#FFF");
            return gradient;
        }
        return {} as CanvasGradient;
    };

    const options = {
        scales: {
            y: {
                ticks: {
                    stepSize: 3,
                },
            },
            x: {
                grid: {
                    display: false,
                    drawOnChartArea: false,
                    drawTicks: false,
                    drawBorder: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return <Line width={400} data={chartData} height={157} options={options} />;
}

export default LineChartComponent;