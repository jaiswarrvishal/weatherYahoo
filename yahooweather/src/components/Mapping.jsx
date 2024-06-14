import React from 'react'

// const Mapping = (props) => {
    // console.log(props.students, "props")
    const Mapping = ({students}) => {
        console.log(students)
  return (
    <div>
        <h1>Mapping</h1>
        <ul>
            {/* <li>Virat</li>
            <li>Vira</li>
            <li>Vir</li>
            <li>Veer</li> */} 
            {/* instead of writing multiple times in <li>virat</li> manually will use below method*/}

            {students.map((student) => (
                <li>{student}</li>
            ))}
        </ul>
    </div>
  )
}

export default Mapping;