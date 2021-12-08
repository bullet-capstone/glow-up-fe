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

const yLabels = {
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

const MonthlyGraphs = () => {
  const { loading, data, error } = useQuery(QUERY_MONTHLY_ENTRIES)
  const [ labels, setLabels ] = useState<string[]>([]);
  const [ monthlyMoods, setMonthlyMoods ] = useState<Mood[]>([]);

  useEffect(() => {
    if (!loading && data) {
      const dayLabels = data.fetchUser.monthlyMoods.slice()
      .sort((a: Mood, b: Mood) => {
        return parseInt(a.createdAt!.slice(8,10)) - parseInt(b.createdAt!.slice(8,10))
      })
      .map((mood: Mood) => {
          const date = new Date(mood.createdAt!)
          return new Intl.DateTimeFormat('en-US').format(date)
      })

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
  const monthString = today.toLocaleString('default', { month: 'long' });

  return (
    <section className="graph-container">
      <h3 className="month-title">{monthString}</h3>
      { !!monthlyMoods.length && (
        <Chart type='line' data={dataset}  options={options}/>
      )}
      { error && <h2>Sorry, something went wrong!</h2>}
    </section>
  )
}

export default MonthlyGraphs;
