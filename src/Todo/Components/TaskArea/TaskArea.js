
import { ButtonPopup } from '../Popup/Popup'
import { EditFormBase } from '../InputArea/InputArea'

import './TaskArea.css'

import React, { useContext, useState, useRef } from 'react'


function TaskItem({ task, taskList, editTask, deleteTask, markDone, ...args }) {
  const titleRef = useRef()
  const changeStarState = ( event, task) => {
    event.stopPropagation()
    editTask( task.id, { isStar: !task.isStar })
  }
  return (
    <li 
      key={task.id}
      onClick={() => markDone(task.id)}
      className={`task-list-item ${task.isDone ? 'disable' : 'active'}`}
    >
      <div className="left-side">
        <span className="task-title">
          <span ref={titleRef} className="task-title-content">{ task.title }</span>
          <span className="task-date">{task.date && `-- ${task.date}`}</span>
        </span>
        {
          task.description &&
          <div style={{display: 'inline-block', marginLeft: 5}}>
            <ButtonPopup width={350} buttonTitle={<i style={{fontSize: 18}} className="far fa-comment-dots"></i>} >
              <span style={{"white-space": "pre-line"}}>{task.description}</span>
            </ButtonPopup>
          </div>
        }
      </div>

      <div className="more-icon">
        <ButtonPopup 
          width={350}
          buttonTitle={<i className="fas fa-pencil-alt"></i>}
        >
          <EditFormBase 
            defaultVal={task}              
            // outerRef={titleRef}
            onSubmit={(task) => editTask(task.id, task)}
          />
        </ButtonPopup>

        <div className="group">
          <div className="btn btn-curve-left star-icon" onClick={event => changeStarState(event, task)}>
            {
              task.isStar
                ? <i className="fas fa-star" ></i>
                : <i className="far fa-star" ></i>
            }
          </div>
          
          <div className="btn btn-curve-right trash-icon" onClick={() => deleteTask(task.id)}><i className="fas fa-trash"></i></div>
        </div>
      </div>
    </li>
  )
}

export default function TaskArea({ taskList, ...args }) {
  return (
    <div className="task-area">
      <ul className="task-list">
        { taskList.map(task => ( <TaskItem key={task.id} task={task} {...args} />)) }
      </ul>
    </div>
  )
}