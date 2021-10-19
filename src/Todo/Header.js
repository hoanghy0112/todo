import { useRef } from 'react'

import { ButtonPopup } from './Components/Popup/Popup.js'

export default function Header({ changeFilter, markDoneAll, deleteAll, filterMode }) {
  const selectRef = useRef(null)
  const checkboxRef = useRef(null)
  return (
    <div className="header">
      <h1>Todo</h1>
      <ButtonPopup width={250} buttonTitle="Options">
        <div className="function-filter">
          <select defaultValue={ filterMode.sortType } ref={selectRef} name="filter" onChange={() => changeFilter(prev => ({ ...prev, sortType: selectRef.current.value }))}>
            <option value="" disabled={false} >Default</option>
            <option value="name">Sort by name</option>
            <option value="time">Sort by time</option>
          </select>
        </div>
        <hr />
        <label className="checkbox">
          <input ref={checkboxRef} checked={ filterMode.filterType === 'incompleted-only' ? true : false} type="checkbox" onChange={() => changeFilter(prev => ({ ...prev, filterType: ((checkboxRef.current.checked && 'incompleted-only') || 'all')}))} />
          Incomplete tasks only
        </label>
        <hr />
        <div className="function-button">
          <button onClick={() => { markDoneAll() }} className="btn" >
            Mark done all
          </button>
          <button onClick={() => { deleteAll() }} className="btn warning" >
            Delete all
          </button>
        </div>
      </ButtonPopup>
    </div>
  )
}
