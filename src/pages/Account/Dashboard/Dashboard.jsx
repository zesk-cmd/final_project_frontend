import React, { useState } from 'react'
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend } from 'chart.js';
import './Dashboard.css'
import Card from '../../../components/Card/Card'

Chart.register(
    LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend
);

const Dashboard = () => {
    const [graph_title, setGraphTitle] = useState('WEEKLY VISITOR GRAPH')
    const [graph_labels, setGraphLables] = useState(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'])
    const [commandant_data_graph, setCommandant_data_graph] = useState([22, 23, 24, 23, 125, 64, 23])
    const [adjutant_data_graph, setAdjutant_data_graph] = useState([12, 23, 24, 23, 13, 64, 3])
    const [hospital_data_graph, setHospital_data_graph] = useState([12, 23, 4, 23, 125, 64, 23])
    const [militaryPolice_data_graph, setMilitaryPolice_data_graph] = useState([12, 23, 54, 23, 125, 64, 23])
    const [intelligenceOffice_data_graph, setIntelligenceOffice_data_graph] = useState([12, 23, 24, 23, 15, 64, 23])
    const [quarterMaster_data_graph, setQuarterMaster_data_graph] = useState([12, 23, 2, 23, 12, 64, 23])
    const [payOffice_data_graph, setPayOffice_data_graph] = useState([12, 23, 24, 2, 15, 64, 23])
    const [COM_data_graph, setCOM_data_graph] = useState([12, 23, 44, 23, 15, 64, 23])
    const [nactvet_data_graph, setNactvet_data_graph] = useState([12, 0, 3, 23, 1, 64, 23])

    const chart_data = {
        labels: graph_labels,
        datasets: [
            {
                label: 'Commandant',
                data: commandant_data_graph,
                borderColor: '#0000ff',
                borderWidth: 2,
            },
            {
                label: 'Adjutant',
                data: adjutant_data_graph,
                borderColor: '#0dd9d9',
                borderWidth: 2,
            },
            {
                label: 'Hospital',
                data: hospital_data_graph,
                borderColor: '#00ff00',
                borderWidth: 2,
            },
            {
                label: 'MP',
                data: militaryPolice_data_graph,
                borderColor: '#ff0000',
                borderWidth: 2,
            },
            {
                label: 'Intelligence',
                data: intelligenceOffice_data_graph,
                borderColor: '#d404db',
                borderWidth: 2,
            },
            {
                label: 'Quarter Master',
                data: quarterMaster_data_graph,
                borderColor: '#7b06cf',
                borderWidth: 2,
            },
            {
                label: 'PayOffice',
                data: payOffice_data_graph,
                borderColor: '#cfad06',
                borderWidth: 2,
            },
            {
                label: 'COM',
                data: COM_data_graph,
                borderColor: '#04a6db',
                borderWidth: 2,
            },
            {
                label: 'Nactvet',
                data: nactvet_data_graph,
                borderColor: '#125e29',
                borderWidth: 2,
            }
        ]
    }

    const graph_options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: graph_title
            },
            tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false,
            }
        }
    };


    // Function for the system operation in dashboard
    const changeGraph = (graph_kind) => {
        if(graph_kind == 'today'){
            setGraphTitle("TODAY VISITORS GRAPH");
            setGraphLables(["00:00", "02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"]);
            setCommandant_data_graph([23, 342, 3253, 532, 34, 234, 234,  2334, 234, 234, 2342, 563]);
            setAdjutant_data_graph([64, 345, 345, 83, 56, 56,856, 234, 864, 234, 85,334]);
            setHospital_data_graph([45, 345,74 ,345, 745,85, 345, 856, 456, 856, 456, 865]);
            setMilitaryPolice_data_graph([45, 565,865, 865,345 ,85, 345,85, 3453, 84,8, 435, 74]);
            setIntelligenceOffice_data_graph([54, 463,745, 456,7845, 845, 34563, 754, 745, 84, 3465, 745]);
            setQuarterMaster_data_graph([564, 345, 34, 53, 8745, 34, 734, 34, 74, 34, 735, 344]);
            setPayOffice_data_graph([453, 4536, 7543, 54,34 ,563,745, 456, 457,45, 453, 45]);
            setCOM_data_graph([45, 453, 463, 563, 434, 75, 45745, 456, 56,456,4576 ,456]);
            setNactvet_data_graph([56, 45, 456, 456, 574, 3456, 475, 74, 34, 74, 43, 7]);
        }else if(graph_kind == 'week'){
            setGraphTitle("WEEKLY VISITORS GRAPH");
            setGraphLables(['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.'])
            setCommandant_data_graph([23, 342, 3253, 532, 34, 2342, 563]);
            setAdjutant_data_graph([64, 345, 345, 83, 56, 85,334]);
            setHospital_data_graph([45, 345,74 ,345, 745, 456, 865]);
            setMilitaryPolice_data_graph([45, 565,865, 865, 84,8, 435, 74]);
            setIntelligenceOffice_data_graph([54, 463, 754, 745, 84, 3465, 745]);
            setQuarterMaster_data_graph([564, 345, 34, 74, 34, 735, 344]);
            setPayOffice_data_graph([453, 4536, 7543, 54, 45, 453, 45]);
            setCOM_data_graph([45, 453, 463, 563, 434, 75, 456]);
            setNactvet_data_graph([56, 45, 74, 34, 74, 43, 7]);

        }else if(graph_kind == 'month'){
            setGraphTitle("MONTHLY VISITORS GRAPH");
            setGraphLables(["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."]);
            setCommandant_data_graph([23, 342, 3253, 532, 34, 234, 234,  2334, 234, 234, 2342, 563]);
            setAdjutant_data_graph([64, 345, 345, 83, 56, 56,856, 234, 864, 234, 85,334]);
            setHospital_data_graph([45, 345,74 ,345, 745,85, 345, 856, 456, 856, 456, 865]);
            setMilitaryPolice_data_graph([45, 565,865, 865,345 ,85, 345,85, 3453, 84,8, 435, 74]);
            setIntelligenceOffice_data_graph([54, 463,745, 456,7845, 845, 34563, 754, 745, 84, 3465, 745]);
            setQuarterMaster_data_graph([564, 345, 34, 53, 8745, 34, 734, 34, 74, 34, 735, 344]);
            setPayOffice_data_graph([453, 4536, 7543, 54,34 ,563,745, 456, 457,45, 453, 45]);
            setCOM_data_graph([45, 453, 463, 563, 434, 75, 45745, 456, 56,456,4576 ,456]);
            setNactvet_data_graph([56, 45, 456, 456, 574, 3456, 475, 74, 34, 74, 43, 7]);
        }
    }

    return (
        <div className='dashboard-container'>
            <div className='cards-container'>
                <Card card_icon='bi-geo' card_detail='Today Visitors' card_value='5' />
                <Card card_icon='bi-graph-up' card_detail='Weekly Visitors' card_value='56' />
                <Card card_icon='bi-graph-up-arrow' card_detail='Monthly Visitors' card_value='123' />
            </div>

            <div className='buttons'>
                <button onClick={() => changeGraph('today')}>Daily</button>
                <button onClick={() => changeGraph('week')}>Weekly</button>
                <button onClick={() => changeGraph('month')}>Monthly</button>
            </div>

            <div className='graph-container'>
                <Line data={chart_data} options={graph_options} />
            </div>

        </div>
    )
}

export default Dashboard