import "./HabitForm.css"
import { AppContext } from "../../utils/context"
import { QUERY_DAILY_ENTRIES } from "../../utils/graph_queries"
import { SUBMIT_HABIT } from "../../utils/graph_mutations"
import { useQuery, useMutation } from "@apollo/client"
import { useContext,useState,useEffect } from "react"
import HabitCard from "../HabitCard/HabitCard"
import "../../assets/icons/habit7-uncheck.png"
import { Habit } from "../../utils/Models"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const HabitForm = () => {
  const [cookie,]= useCookies(['userToken'])
  const {habitList} = useContext(AppContext)
  // const { checkedHabitIds } = useContext(AppContext)

  const [checkedHabitIds, setCheckedHabitIds] = useState<number[]>([]);
  const { loading, error, data } = useQuery(QUERY_DAILY_ENTRIES,{variables: {token: cookie.userToken}})
  const [createHabitEntry] = useMutation(SUBMIT_HABIT, {
    refetchQueries: [QUERY_DAILY_ENTRIES, "FetchDailyEntries"],
  })
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && data) {
      setCheckedHabitIds(data.fetchUser.dailyHabits.map((ele: Habit) => parseInt(ele.id)))
      
    } else if (error) {
      console.log('query error');
      
    }
  }, [loading, data, error])

  const createHabitEntries = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const entryParams = checkedHabitIds.map(ele => ({ id: ele }))
    if (!entryParams.length) {
      alert("No entry today? Tomorrow is another day!")
      createHabitEntry({ variables: { idArr: entryParams,userToken: cookie.userToken } })
      navigate('/glow-up-fe/dashboard')
    } else {
      createHabitEntry({ variables: { idArr: entryParams, userToken: cookie.userToken } })
      navigate('/glow-up-fe/dashboard')
    }
  }

  const updateHabits = (idArr:number[])=>{
    setCheckedHabitIds(idArr)


  }
  const displayHabits = () => {
    return habitList.map((habit: Habit) => (
      <HabitCard
        name={habit.name}
        id={habit.id}
        key={habit.id}
        checkedToday={checkedHabitIds.includes(parseInt(habit.id))}
        checkedIds={checkedHabitIds}
        updateHabits={updateHabits}
      />
    ))
  }

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error ? (
        <h2>{`Error! ${error.message}`}</h2>
      ) : (
        <section className="habit-form-container">
          {checkedHabitIds.length ? (
            <h2>Add more habits</h2>
          ) : (
            <h2 className="habit-form-question">No check in yet. Go complete some!</h2>
          )}
          <form className="habit-form" onSubmit={createHabitEntries}>
            {data && displayHabits()}
            <button className="habit-submit-button" type="submit">
              Submit
            </button>
          </form>
        </section>
      )}
    </>
  )
}

export default HabitForm
