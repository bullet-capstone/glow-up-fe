import {useQuery} from '@apollo/client'
import {useEffect, useState} from 'react'
import { QUERY_MONTHLY_ENTRIES } from '../../utils/graph_queries'
import './MonthlyGraphs.css'
import { Mood } from '../../utils/Models';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Chart } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface yLabels {
  0: string
  1: string
  2: string
  3: string
  4: string
}

const yLabels: yLabels = {
	 0: '😭',
   1: '🙁',
   2: '😐',
   3: '🙂',
   4: '😁'
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Monthly Moods',
    },
  },
  scales: {
   yAxis: {
     ticks: {
         callback: function(value:string | number):string | undefined {
             return yLabels[value as keyof typeof yLabels];
         }
     }
   }
   }
};

interface Dataset {
  labels: string[]
  datasets: Object[]
}

const MonthlyGraphs = () => {
  const { loading, data } = useQuery(QUERY_MONTHLY_ENTRIES)
  const [ labels, setLabels ] = useState<number[]>([]);
  const [ monthlyMoods, setMonthlyMoods ] = useState<Mood[]>([]);

  useEffect(() => {
    if (!loading && data) {
      const dayLabels = data.fetchUser.monthlyMoods
      .map((mood: Mood) => {
        return parseInt(mood.createdAt!.slice(8,10))
      })
      .sort((a: number, b :number) => a - b)

      const monthlyMoods = data.fetchUser.monthlyMoods.slice().reverse()
        .map((mood :Mood) => mood.mood)

      setLabels(dayLabels)
      setMonthlyMoods(monthlyMoods)
    }
  }, [ data, loading ])


   const dataset = {
      labels,
      datasets: [
        {
          type: 'line' as const,
          label: 'Moods',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 2,
          fill: false,
          data: monthlyMoods
        }
      ]
    };

    const today = new Date()
    const month = today.toLocaleString('default', { month: 'long' });

  return (
    <section className="graph-container">
      <h3 className="month-title">{month}</h3>
      { monthlyMoods.length && <Chart type='line' data={dataset}  options={options}/>}
    </section>
  )
}

export default MonthlyGraphs;
