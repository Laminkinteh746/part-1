import React from 'react'

 const Header = (props) => {
  
  return(
    <h2>{props.course}</h2>
  )
}


const Content = (props) => {
  
  return(
    <div>
      <p>{props.part}{props.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  
  return(
    <dv>
       <p>Number of exercises{props.parts}</p>

    </dv>
   
  )
}

const  App = () => {
  const course = 'Half stack application development'
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  const exercise1  = 10
  const exercise2  = 7
  const exercise3  = 14
  
  

  return (
    <div>
      <Header course = {course} />
      <Content part = {part1}/> {exercise1}
      <Content part = {part2}/> {exercise2}
      <Content part = {part3} /> {exercise3}
      <Total   parts = {exercise1 + exercise2 + exercise3} /> 
    </div>
  )
}

export default App
