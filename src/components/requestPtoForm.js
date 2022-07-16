import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { requestTimeOff } from "../app/features/userSlice"

const RequestPtoForm = props => {
  const [hours, setHours] = useState(0)
  const [beginDate, setBeginDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const dispatch = useDispatch()

  const handleRequest = () => {
    console.log("Something happened!")
    dispatch(
      requestTimeOff({
        id: props.id,
        request: {
          begin: beginDate,
          end: endDate,
          hours: hours,
        },
      })
    )
  }

  return (
    <RequestFormContainer>
      <h2>Request Time Off</h2>
      <div className="dates">
        <div>
          <input
            type="date"
            value={beginDate}
            onChange={e => setBeginDate(e.target.value)}
          />
        </div>
        <p>to</p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="date"
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
          />
          <span>(optional)</span>
        </div>
      </div>
      <div className="hours">
        <p>
          {hours}
          {hours > 1 ? " hours" : hours > 0 && " hour"}
        </p>
        <div className="buttons">
          <button onClick={() => setHours(hours - 1)}>-</button>
          <button onClick={() => setHours(hours + 1)}>+</button>
        </div>
      </div>
      <input type="button" value="Submit Request" onClick={handleRequest} />
    </RequestFormContainer>
  )
}

export default RequestPtoForm

const RequestFormContainer = styled.section`
  width: 100%;
  max-width: fit-content;
  margin: 0 auto;

  h2 {
    margin-bottom: 10px;
  }

  .dates {
    display: flex;
    gap: 10px;
  }

  .hours {
    p {
      font-size: 22pt;
      margin: 15px auto 10px;
    }

    .buttons {
      display: flex;
      gap: 8px;

      button {
        cursor: pointer;
        font-size: 18pt;
        min-width: 60px;
      }
    }
  }
  input[type="button"] {
    padding: 10px;
    margin-top: 20px;
  }
`
