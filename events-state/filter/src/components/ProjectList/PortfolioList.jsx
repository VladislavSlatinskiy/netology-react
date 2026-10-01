import './PortfolioList.css'

export function PortfolioList({ portfolioList }) {
  return (
      <div className="layout">
        { portfolioList.map(({ id, img }) => (
            <div className="card" key={ id }>
              <img src={ img } alt=""/>
            </div>
        )) }
      </div>
  )
}
