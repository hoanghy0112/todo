
import more from '../more.svg'
import { PopupDefault, popupResources } from './Components/Popup/Popup.js'
import React, { useContext, useState } from 'react'

function ListItemPopup({ visible, children }) {
  const { popupAppear, popupDisappear } = useContext(popupResources)
  if (visible==='enter') popupAppear()
  else if (visible==='leave') popupDisappear()

  return (
      <React.Fragment>{ children }</React.Fragment>
  )
}

export default function TaskArea({ editTask, deleteTask, markDone, taskList }) {
  const [ popupItem,  setPopupItem ] = useState(null)
  console.log(popupItem);
  return (
    <div className="task-area">
      <ul className="task-list">
        { taskList.map(task => (
          <li 
            key={ task.id } 
            onClick={() => markDone(task.id)}
            className={`task-list-item ${task.isDone ? 'disable' : 'active'}`}
            onMouseEnter={() => {
              setPopupItem({ id: task.id, state: 'enter' })
            }}
            onMouseLeave={() => {
              setPopupItem({ id: task.id, state: 'leave' })
            }}
          >
              <span>
                { task.title }  
                <span className="task-date">-- {task.date}</span>
              </span>

              {
                task.description &&
                <PopupDefault>
                  <ListItemPopup visible={ task.id === popupItem?.id ? popupItem.state : null}>
                    <div class="task-popup">
                      <div className="task-description">{ task.description }</div>
                      <div className="task-time">{ task.date }</div>
                    </div>
                  </ListItemPopup>
                </PopupDefault>
              }
              
              <div className="more-icon">
                {/* <svg height="16px" id="Layer_1" version="1.1" viewBox="0 0 16 16" width="16px" ><path d="M2,6C0.896,6,0,6.896,0,8s0.896,2,2,2s2-0.896,2-2S3.104,6,2,6z M8,6C6.896,6,6,6.896,6,8s0.896,2,2,2s2-0.896,2-2  S9.104,6,8,6z M14,6c-1.104,0-2,0.896-2,2s0.896,2,2,2s2-0.896,2-2S15.104,6,14,6z"/></svg> */}
                {/* <i class="far fa-times-circle"></i> */}
                {
                  task.isStar ?
                    <i onClick={(event) => {
                      event.stopPropagation()
                      editTask( task.id, { isStar: !task.isStar })
                    }} class="fas fa-star"></i> :
                    <i onClick={(event) => {
                      event.stopPropagation()
                      editTask( task.id, { isStar: !task.isStar })
                    }} class="far fa-star"></i> 
                    // <i  onClick={() => editTask( task.id, { isStar: !task.isStar })} class="far fa-star"></i>
                }
                <i class="fas fa-pencil-alt"></i>

                <i onClick={() => deleteTask(task.id)} class="fas fa-trash"></i>
              </div>
          </li>
        )) }
      </ul>
    </div>
  )
}