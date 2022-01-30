import * as echarts from "echarts/core";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import { ScatterChart,} from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { useEffect, useRef, useContext,useState } from "react";
import { AppContext } from "../../utils/context"
import { useCookies } from "react-cookie";
import { useQuery ,InMemoryCache} from "@apollo/client"
import { QUERY_MONTHLY_ENTRIES } from "../../utils/graph_queries"
// import { on } from "events";

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  ScatterChart,
  CanvasRenderer,
  UniversalTransition
]);

const Graph = () => {
  const chartRef = useRef();
  let myChart = null;

  const [monthlyMoods, setMonthlyMoods] = useState([]);
  const [monthlyHabits, setMonthlyHabits] = useState([]);
  const {habitMap} = useContext(AppContext)

  const moodEmojis = ["❓", "😭", "🙁", "😐", "🙂", "😁"]

  const {habitList} = useContext(AppContext)
  const habitNames = habitList.map(habit => habit.name)

  const [cookie]= useCookies(['userToken'])
  const { loading, data, error } = useQuery(QUERY_MONTHLY_ENTRIES,{variables:{token:cookie.userToken},
    fetchPolicy:"no-cache",
    nextFetchPolicy:"network-only",
  onCompleted:(data)=>{
    const tempMonthlyMoods = []
    const tempCompletedHabits = []
    const tempDates = []
    const tempEntries = []

    const userInfo = data.fetchUser

    userInfo.monthlyMoods.slice()
        .sort((a, b) => {
          return parseInt(a.createdAt.slice(3, 5)) - parseInt(b.createdAt.slice(3, 5))
        })
        .forEach((mood) => {
          tempDates.push(mood.createdAt.slice(0,5))
          if (mood.mood == 0 || mood.mood) {
            tempMonthlyMoods.push(mood.mood + 1)
          } else {
            tempMonthlyMoods.push(0)
          }
        })

      tempDates.forEach((date)=>{
        const habitsByDay = userInfo.monthlyHabits.slice().filter(habit => habit.date.slice(0, 5) === date)

        tempCompletedHabits.push(habitsByDay)
      })
    
      for (let i = 0; i < tempDates.length; i++) {
        const compHabits = tempCompletedHabits[i]
        tempEntries.push([ i, tempMonthlyMoods[i],compHabits.length])
      }

      setMonthlyHabits([...tempCompletedHabits])
      setMonthlyMoods([...tempMonthlyMoods])

      const tempOptions = createGraph(tempDates, tempEntries, tempCompletedHabits)
      renderChart(tempOptions)
  }})

  useEffect(() => {
    return () => {
      myChart && myChart.dispose();
    };
  }, [loading, data])

  const createGraph = (dates, entries, monthlyHabits) => {
    const options = {
      title: {
        text: "Monthly Habits"
      },
      legend: {
        data: ["Mood and Habits Completed"],
        left: "right"
      },
      tooltip: {
        position: "top",
        formatter: function (params) {
          const habitsOnThatDay = monthlyHabits[params.value[0]].reduce((acc,ele)=>{
            acc.push(ele.habitId)
            return acc},[])
          .map(id => ' ' + habitMap[id])
          .toString()

          return (
            "You completed "+
            params.value[2] +
            " habits on " +
            dates[params.value[0]] +
            ": "+
            habitsOnThatDay
          
          );
        }
      },
      grid: {
        left: 2,
        bottom: 10,
        right: 10,
        containLabel: true
      },
      xAxis: {
        type: "category",
        data: dates,
        boundaryGap: true,
        splitLine: {
          show: true,
          interval:0
        },
        axisLine: {
          show: true
        },
        axisTick:{
          interval:0
        },
        axisLabel:{
          fontSize:10,
          interval:0
        },
        scale: true
      
      },
      yAxis: {
        type: "category",
        data: moodEmojis,
        axisLine: {
          show: false
        }
      },
      series: [
        {
          name: "Mood and Habits Completed",
          type: "scatter",
          symbolSize: function (val) {
            return ( val[2] == 0 ? 8 : 10 + val[2] * 3);
          },
          data: entries,
          animationDelay: function (idx) {
            return idx * 5;
          }
        }
      ]
    };
    return (options)
  }

  const renderChart = (options) => {
    const chart = echarts.getInstanceByDom(chartRef.current);
    if (chart) {
      myChart = chart;
    } else {
      myChart = echarts.init(chartRef.current);
    }
    myChart.setOption(options);
  };
  return (
    <>
      <div style={{ width: "100%",height:"50vh", paddingLeft: "20px" }} ref={chartRef} />
    </>
  );
};

export default Graph;
