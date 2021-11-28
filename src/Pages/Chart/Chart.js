import React from 'react'
import "./chart.css";


//imported components
import ChartDataNumber from "../../Components/ChartDataNumber/ChartDataNumber";

const Chart = () => {
    return (
        <div className="chart-page-container">
            <div className="chart-page-display">
                
                <div className="main-chart">
                    <div className="chart-header-container">
                        <div className="chart-header-display">
                            <div className="chart-header-text">
                                <p>Dashboard</p>
                            </div>

                            <div className="chart-header-text-padding">

                            </div>

                            <div className="chart-header-date">
                                <p>Tuesday, 2 Feb 2021</p>
                            </div>
                        </div>
                    </div>

                    <ChartDataNumber />
                </div>

                <div className="side-chart">

                </div>

            </div>
        </div>
    )
}

export default Chart
