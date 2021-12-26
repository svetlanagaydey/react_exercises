import React, { useState } from 'react';
import './Style.css'

const todoArray = [
    {name: 'SCC', completed: true},
    {name: 'JavaScript', completed: true},
    {name: 'Learn React', completed: false},
    {name: 'Learn mongoDB', completed: false},
    {name: 'Learn Node JS', completed: false},
]
    const Todo = () => {
        const [arr, setArr] = useState(todoArray);
        console.log(arr[0].name)
        const printList = (arr) => {
            return arr.map((todoItem, index) => {
                return (
                    <div className='todo_item' key={index}>
                        <div className={`text-${todoItem.completed}`}>{todoItem.name}</div>
                        <div className={`icon-${todoItem.completed}`} onClick={() => changeStatus(index)}></div>
                    </div>
                )
            })
        }

        const changeStatus = (currentIndex) => {
            console.log(currentIndex);
            const tempArray = [...arr];
            tempArray[currentIndex].completed ===true ? tempArray[currentIndex].completed=false : tempArray[currentIndex].completed=true;
            console.log(tempArray);
            setArr(tempArray);
        }

        return (
            <div>
                {printList(arr)}
            </div>
        )
    }
export default Todo