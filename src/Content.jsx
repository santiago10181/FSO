
const Part1 = (props) => {
    return(
        <div>
            <p>
                {props.value1} {props.exercises1}
            </p>
        </div>
    )
}
const Part2 = (props) => {
    return(
        <div>
            <p>
                {props.value2} {props.exercises2}
            </p>
        </div>
    )
}
const Part3 = (props) => {
    return(
        <div>
            <p>
                {props.value3} {props.exercises3}
            </p>
        </div>
    )
}
const Content = (props) => {
    return(
      <div>

        <Part1  value1={props.value1} exercises1={props.exercises1} />
        <Part2  value2={props.value2} exercises2={props.exercises2} />
        <Part3  value3={props.value3} exercises3={props.exercises3}/>
        
      </div>
    )
  }

  export default Content