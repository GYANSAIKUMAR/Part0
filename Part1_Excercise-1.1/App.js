import React from 'react'
const Header = (props) => {

  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  ) 
}

const Content = (props) => {
  return (
    <div>
    <p>
        Part1={props.part1} 
    </p>
    <p>
    Exercises1={props.exercises1}
    </p>
      <p>
        Part2={props.part2} Exercises2={props.exercises2}
      </p>
      <p>
    Exercises2={props.exercises2}
    </p>
      <p>
        Part3={props.part3} Exercises3={props.exercises3}
      </p>
      <p>
    Exercises3={props.exercises3}
    </p>
      </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>
      *Total Number of exercises = {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  )
}

const App = (props) => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1}  part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

export default App