import React from 'react'
import "./chartdatatable.css"

import DropDown from "../DropDown/DropDown";
import ChartTable from '../ChartTable/ChartTable';
const ChatDataTable = () => {
    return (
        <div className="chart-data-table-container">
            <div className="chart-data-table-display">
                <div className="chart-data-table-header-container">
                    <div className="chart-data-table-header">
                        <div className="chart-data-table-header-text">
                            Order Report
                        </div>

                        <div className="chart-data-table-filter-container">
                            <div className="chart-data-table-filter-display">
                                <DropDown />
                            </div>
                        </div>
                    </div>

                    <div className="chart-table-header">
                        <div className="chart-header chart-customer-container">
                            <div className="chart-header-text chart-customer-text">
                                Customer
                            </div>
                        </div>
                        <div className="chart-header chart-menu-container">
                            <div className="chart-header-text chart-menu-text">
                                Menu
                            </div>
                        </div>
                        <div className="chart-header chart-total-payment-container">
                            <div className="chart-header-text chart-total-payment-text">
                                Total Payment
                            </div>
                        </div>
                        <div className="chart-header chart-status-container">
                            <div className="chart-header-text chart-status-text">
                                Status
                            </div>
                        </div>
                    </div>
                </div>

                <ChartTable />

            </div>
        </div>
    )
}

export default ChatDataTable
