import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { QUERY_MONTHLY_ENTRIES } from "../../utils/graph_queries"
import "./MonthlyGraphs.css"
import { Mood } from "../../utils/Models"
import {
  Chart as ChartJS,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

import { Chart } from "react-chartjs-2"
import { useCookies } from "react-cookie";

ChartJS.register(LineController, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const yLabels = {
  0: "😭",
  1: "🙁",
  2: "😐",
  3: "🙂",
  4: "😁",
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Monthly Moods",
    },
  },
  scales: {
    yAxis: {
      ticks: {
        callback: function (value: string | number): string | undefined {
          return yLabels[value as keyof typeof yLabels]
        },
      },
    },
  },
}

const MonthlyGraphs = () => {
  const [cookie, setCookie]= useCookies(['userToken'])
  const today = new Date()
  const monthString = today.toLocaleString("default", { month: "long" })

  const [labels, setLabels] = useState<string[]>([])
  const [monthlyMoods, setMonthlyMoods] = useState<Mood[]>([])

  const { loading, data, error } = useQuery(QUERY_MONTHLY_ENTRIES,{variables:{token:cookie.userToken}})

  useEffect(() => {
    if (!loading && data) {
      const dayLabels = data.fetchUser.monthlyMoods
        .slice()
        .sort((a: Mood, b: Mood) => {
          return parseInt(a.createdAt!.slice(8, 10)) - parseInt(b.createdAt!.slice(8, 10))
        })
        .map((mood: Mood) => {
          const date = new Date(mood.createdAt!)
          return new Intl.DateTimeFormat("en-US").format(date)
        })

      const monthlyMoods = data.fetchUser.monthlyMoods
        .slice()
        .reverse()
        .map((mood: Mood) => mood.mood)

      setLabels(dayLabels)
      setMonthlyMoods(monthlyMoods)
    }
  }, [data, loading])

  const dataset = {
    labels,
    datasets: [
      {
        type: "line" as const,
        label: "Moods",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        fill: false,
        data: monthlyMoods,
      },
    ],
  }

  return (
    <section className="graph-section">
      <div className="graph-container">
        <h3 className="month-title">{monthString}</h3>
        {!!monthlyMoods.length && <Chart type="line" data={dataset} options={options} />}
        {!monthlyMoods.length && !error && <h2>There aren't any mood entries for this month yet!</h2>}
        {error && <h2>Sorry, something went wrong!</h2>}
      </div>
    </section>
  )
}

export default MonthlyGraphs
