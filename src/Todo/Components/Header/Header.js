
import { ButtonPopup } from '../Popup/Popup.js'
import './Header.css'

export default function Header({ changeFilter, markDoneAll, deleteAll, filterMode }) {
  return (
    <div className="header">
      <h1>Todo</h1>

      <ButtonPopup width={250} buttonTitle="Options">
        <div className="function-filter">
          <select 
            defaultValue={ filterMode.sortType } 
            name="filter" 
            onChange={(event) => changeFilter(prev => 
              ({ ...prev, sortType: event.target.value })
            )}
          >
            <option value="" disabled={false} >Default</option>
            <option value="name">Sort by name</option>
            <option value="time">Sort by time</option>
          </select>
        </div>

        <hr />

        <label className="checkbox">
          <input 
            checked={ filterMode.filterType === 'incompleted-only' ? true : false} 
            type="checkbox" 
            onChange={(event) => 
              changeFilter(prev => ({ 
                ...prev, 
                filterType: ((event.target.checked && 'incompleted-only') || 'all')
              })
            )} 
          />
          Incomplete tasks only
        </label>

        <hr />

        <button onClick={() => { markDoneAll() }} className="btn" >
          Mark done all
        </button>
        <button onClick={() => { deleteAll() }} className="btn warning" >
          Delete all
        </button>
      </ButtonPopup>
    </div>
  )
}
