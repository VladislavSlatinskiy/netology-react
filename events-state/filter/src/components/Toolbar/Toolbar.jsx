import './Toolbar.css'

export function Toolbar({ filterTypes, activeFilterType, onFilterChange }) {
  return (
      <div className="filter-group" id="filterGroup">
        <button
            className={`filter-btn ${ activeFilterType === null ? 'is-active' : '' }`}
            onClick={ () => onFilterChange(null) }
        >All</button>

        {filterTypes.map((filter, index) => (
            <button
                className={`filter-btn ${ activeFilterType === filter ? 'is-active' : '' }`}
                key={ index }
                onClick={ () => onFilterChange(filter) }
            >{ filter }</button>
        ))}
      </div>
  )
}
