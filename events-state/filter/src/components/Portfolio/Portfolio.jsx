import './Portfolio.css'
import {useState} from "react";
import {data} from "../../constants/data.js";
import {Toolbar} from "../Toolbar/Toolbar.jsx";
import {PortfolioList} from "../ProjectList/PortfolioList.jsx";

export function Portfolio() {
  const [filterType, setFilterType] = useState(null);
  const filterTypes = [...new Set(data.map(({ category }) => category))];
  const filteredPortfolios = data.filter(({ category }) => filterType === null || category === filterType);

  const handleFilterChange = (value) => setFilterType(value);


  return (
    <>
      <Toolbar
          filterTypes={filterTypes}
          activeFilterType={filterType}
          onFilterChange={ handleFilterChange }
      />
      <PortfolioList portfolioList={filteredPortfolios} />
    </>
  )
}
