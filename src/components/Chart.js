import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'




function ChartPlot() {
    return (
        <div>
            <Line 
            data={{
                labels: ['hi', '2'],
                datasets: [
                    {

                        Label: 'Weights',
                        data: [82, 43, 102, 67, 99],
                        backgroundColor: ['red']
                    }


                ]
            }}

            height = {480}
            width = {1000}

            options={{
                maintainAspectRatio : false,
            }}


            />
        </div>
    )
}

export default ChartPlot
