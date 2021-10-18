import './Todo.css'
import React from 'react'
import Header from './Header.js'
import InputArea from './InputArea.js'
import TaskArea from './TaskArea.js'
import { ExamplePopup } from './Components/Popup/Popup.js'
import { useState, useEffect, useContext, useRef } from 'react'


export default function Todo() {
  let [ taskList, setTaskListState ] = useState(() => {
    return JSON.parse(localStorage.getItem('taskList')) || []
  })
  const setTaskList = (arg) => {
    setTaskListState(prev => {
      const newTaskList = arg instanceof Function ? arg(prev) : arg
      localStorage.setItem('taskList', JSON.stringify(newTaskList))
      return newTaskList
    })
  }

  const [ filterMode, setFilterMode ] = useState({
    sortType: 'default',
    filterType: 'default'
  })

  const handleAddTask = task => {
    setTaskList(prev => [ 
        ...prev,
        {
          id: Number.parseInt(prev[prev.length - 1]?.id || 0) + 1,
          isDone: false,
          title: task.title, 
          description: task.description || '',
          date: task.date || '00:00',
          isStar: false,
        }
      ])
  }

  const handleMarkdone = ( targetId, state ) => {
    setTaskList(prev => prev.map(task => {
        if (task.id === targetId) return ({
          ...task,
          isDone: state ?? !task.isDone,
        })
        else return task
      }))
  }

  const handleEditTask = ( targetId, state ) => {
    setTaskList(prev => prev.map(task => {
      if (task.id === targetId) return ({
        ...task,
        ...state
      })
      else return task
    }))
  }

  const handleDelete = targetId => {
    setTaskList(prev => prev.filter(task => task.id !== targetId))
  }

  const handleFilter = ({ sortType, filterType }) => {
    return (() => {
      let displayList = taskList
      displayList = displayList.reduce((acc, task) => {
        console.log(acc)
        if (task.isStar) acc.unshift(task)
        else acc.push(task)
        return acc
      }, [])
      console.log(filterType);
      switch (filterType) {
        case 'incompleted-only': 
          displayList = displayList.filter(task => !task.isDone)
          break
      }
      switch (sortType) {
        case 'name': 
          displayList.sort((a, b) => b.title[0] > a.title[0] ? -1 : 1)
          break
        case 'time':
          displayList.sort((a, b) => a.date > b.date ? 1 : -1)
      }
      console.log(displayList);
      return displayList
    })()
  }

  console.log(taskList);
  return (
    <div className="todo">
      <ExamplePopup>
        <p>Hello world</p>
      </ExamplePopup>
      <Header 
        changeFilter={setFilterMode} 
        markDoneAll={() => taskList.map(task => handleMarkdone(task.id, true))} 
        deleteAll={() => setTaskList([])} 
      />
      <InputArea addTask={handleAddTask}/>
      <TaskArea 
        editTask={handleEditTask} 
        deleteTask={handleDelete}
        markDone={handleMarkdone} 
        taskList={handleFilter(filterMode)} 
      />

    </div>
  )
}