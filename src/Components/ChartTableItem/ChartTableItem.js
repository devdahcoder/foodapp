import React from 'react'
import "./charttableitem.css"

const ChartTableItem = ({item}) => {
    return (
        <div>
            <div className="chart-table-header">
                <div className="chart-header chart-customer-container">
                    <div className="chart-header-text chart-customer-text">
                        <img src={item.image} alt="" />
                    </div>

                    <div>
                        {item.name}
                    </div>
                </div>
                <div className="chart-header chart-menu-container">
                    <div className="chart-header-text chart-menu-text">
                        {item.message}
                    </div>
                </div>
                <div className="chart-header chart-total-payment-container">
                    <div className="chart-header-text chart-total-payment-text">
                        {item.amount}
                    </div>
                </div>
                <div className="chart-header chart-status-container">
                    <div className="chart-header-text chart-status-text">
                        {item.status}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChartTableItem
