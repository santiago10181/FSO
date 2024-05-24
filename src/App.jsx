import Content from "./Content"
const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )

}

const Total = (props) => {
  console.log(props);
  return(
    <div>
      <p>Number of exercises {props.part1 + props.part2 + props.part3}</p>
    </div>
  )
  
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content  value1={course.parts[0].name} exercises1={course.parts[0].exercises}
                value2={course.parts[1].name} exercises2={course.parts[1].exercises}
                value3={course.parts[2].name} exercises3={course.parts[2].exercises}/>
      <Total part1={course.parts[0].exercises} part2={course.parts[1].exercises} part3={course.parts[2].exercises} />
    </div>
  )
} 

export default App
