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
// const cache = new InMemoryCache ({
//   typePolicies:{
//     User{
//       monthlyMoods
//     }
//   }
// })

// type EChartsOption = echarts.ComposeOption<
//   | TitleComponentOption
//   | TooltipComponentOption
//   | GridComponentOption
//   | LegendComponentOption
//   | ScatterSeriesOption
// >;

const Graph = () => {
  const chartRef = useRef();
  let myChart = null;

  const [monthlyMoods, setMonthlyMoods] = useState([]);
  const [monthlyHabits, setMonthlyHabits] = useState([]);
  // const [options, setOptions] = useState({});
  // const [entries, setEntries] = useState([]);
  const {habitMap} = useContext(AppContext)



  const moodEmojis = ["😭", "🙁", "😐", "🙂", "😁", "No Mood"]

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
          if (mood.mood) {
            tempMonthlyMoods.push(mood.mood)
          } else {
            tempMonthlyMoods.push(5)
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

      console.log('tempDates',tempDates);
      console.log("tempMonthlyMoods",tempMonthlyMoods);
      console.log("tempCompletedHabits",tempCompletedHabits);
      console.log("tempEntries",tempEntries);

      // setDates([...tempDates])
      setMonthlyHabits([...tempCompletedHabits])
      setMonthlyMoods([...tempMonthlyMoods])
      // setEntries([...tempEntries])
      console.log('im on complete');

      const tempOptions = createGraph(tempDates, tempEntries)
      renderChart(tempOptions)
  }})

  useEffect(() => {
    if (!loading && data){
      // const tempMonthlyDates = []
      // const tempMonthlyMoods = []
      // const tempCompletedHabits = []
      // const tempEntries = []

      // const userInfo = data.fetchUser

      // userInfo.monthlyMoods.slice()
      //   .sort((a, b) => {
      //     return parseInt(a.createdAt.slice(3, 5)) - parseInt(b.createdAt.slice(3, 5))
      //   })
      //   .forEach((mood) => {
      //     tempMonthlyDates.push(mood.createdAt.slice(0,5))

      //     if (mood.mood) {
      //       tempMonthlyMoods.push(mood.mood)
      //     } else {
      //       tempMonthlyMoods.push(5)
      //     }
      //   }
      // )

      // tempMonthlyDates.forEach((date)=>{
      //     const habitsByDay = userInfo.monthlyHabits.slice().filter(habit => habit.date.slice(0, 5) == date)

      //     tempCompletedHabits.push(habitsByDay)
      //   })
    
      // for (let i = 0; i < tempMonthlyDates.length; i++) {
      //   const compHabits = tempCompletedHabits[i]
      //   tempEntries.push([tempMonthlyMoods[i], i, compHabits.length])
      // }

      // console.log('tempMonthlyDates',tempMonthlyDates);
      // console.log("tempCompletedHabits",tempCompletedHabits);
      // console.log("tempMonthlyMoods",tempMonthlyMoods);
      // console.log("tempEntries",tempEntries);

      // setDates([...tempMonthlyDates])
      // setMonthlyHabits([...tempCompletedHabits])
      // setMonthlyMoods([...tempMonthlyMoods])
      // setEntries([...tempEntries])
      console.log('im use effect');

      // const options = createGraph()
    }
    
    return () => {
      myChart && myChart.dispose();
    };
  }, [loading, data])

  const createGraph = (dates, entries) => {
    const options = {
      title: {
        text: "Monthly Habits"
      },
      legend: {
        data: ["Punch Card"],
        left: "right"
      },
      tooltip: {
        position: "top",
        formatter: function (params) {
          const habitsOnThatDay = monthlyHabits[params.value[0]].reduce((acc,ele)=>{
            acc.push(ele.habitId)
            return acc},[])
          .map(id => habitMap[id])
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
          name: "Punch Card",
          type: "scatter",
          symbolSize: function (val) {
            return val[2] * 3;
          },
          data: entries,
          animationDelay: function (idx) {
            return idx * 5;
          }
        }
      ]
    };
    return (options)
    // renderChart();
  }

  const renderChart = (options) => {
    console.log(options)
    const chart = echarts.getInstanceByDom(chartRef.current);
    if (chart) {
      myChart = chart;
    } else {
      myChart = echarts.init(chartRef.current);
    }
    myChart.setOption(options);
  };
  console.log(options)
  return (
    <>
      <div style={{ width: "1000px",height:"400px" }} ref={chartRef} />
    </>
  );
};

export default Graph;
