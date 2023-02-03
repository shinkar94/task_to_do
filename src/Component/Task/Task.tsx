
type TaskType = {
    data1:DataType
    data2:DataType
}

type DataType = {
    title: string
    tasks: TaskArrType[]
    students: Array<string>

}
type TaskArrType = {
    taskId: number
    title: string
    isDone: boolean
}


export const Task= (props:TaskType) =>{
    return (
        <>
            <div className='boxStudent'>
                <h3>{props.data1.title}</h3>
                {props.data1.tasks.map((item)=>{
                    return(
                        <div key={item.taskId}><input type="checkbox"/><span>{item.title}</span></div>
                    )
                })}
                <ul>
                    {props.data1.students.map((st, index) => {
                        return(
                            <li key={index}>{st}</li>
                        )
                    })}
                </ul>
            </div>
            <div className='boxStudent'>
                <h3>{props.data2.title}</h3>
                {props.data2.tasks.map((item)=>{
                    return(
                        <div key={item.taskId}><input type="checkbox"/><span>{item.title}</span></div>
                    )
                })}
                <ul>
                    {props.data2.students.map((st, index) => {
                        return(
                            <li key={index}>{st}</li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}