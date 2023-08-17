/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import { Chart, LineElement } from "chart.js/auto";
import { Line } from "react-chartjs-2";

Chart.register(LineElement);

interface DataMonth {
    day: string;
    amount: string;
}

interface DataSets {
    label: string;
    data: string[];
    tension: number;
    borderColor: string;
    pointBorderColor: string;
    backgroundColor: CanvasGradient;
    fill: boolean;
    spanGaps: boolean;
}

interface ChartData {
    labels: string[];
    datasets: DataSets[];
}

const dataList1: DataMonth[] = [
    { day: "01", amount: "186.0" },
    { day: "02", amount: "150.0" },
    { day: "03", amount: "248.0" },
    { day: "04", amount: "210.0" },
    { day: "05", amount: "230.0" },
    { day: "06", amount: "170.0" },
    { day: "07", amount: "180.0" },
    { day: "08", amount: "215.0" },
    { day: "09", amount: "220.0" },
    { day: "10", amount: "210.0" },
];

function LineChartComponent() {
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
            labels: dataList1.map((month) => month.day),
            datasets: [
                {
                    label: "",
                    data: dataList1.map((month) => month.amount),
                    tension: 0.5,
                    borderColor: "#5185F7",
                    pointBorderColor: "transparent",
                    backgroundColor: createLinearGradient(),
                    fill: true,
                    spanGaps: true,
                },
            ],
        });
    }, []);

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
                    stepSize: 40,
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
