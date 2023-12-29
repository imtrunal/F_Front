
import React,{useRef,useEffect} from "react";

import 'chart.js/auto';
import { Chart, Line } from 'react-chartjs-2';
import moment from "moment";
import 'chartjs-adapter-moment'



//--------------------------------------------------------------------------------------------------------------
function SomeChart({ chartData, chartOptions }) {
    // const chartRef = useRef(null);
    // useEffect(() => {
    //     const chart = chartRef.current.chartInstance;
    //     const canvas = chart.canvas;
    //     const ctx = canvas.getContext('2d');
    
    //     const img = new Image();
    //     img.src = 'your-image-url-here';
    //     img.onload = () => {
    //       const x = chart.chartArea.right - 25;
    //       const y = chart.chartArea.bottom - 25;
    //       ctx.drawImage(img, x, y, 25, 25);
    //     };
    //   }, []);
    return (
        <>
            <div >
                <Chart type='line' data={chartData} options={chartOptions} />
            </div>

        </>
    )
}

export default SomeChart