import './index.css'

const BrowserHistoryItems = props => {
  const {historyDetails, onDeleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const onClickDeleteButton = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="history-list">
      <p className="time-access-description"> {timeAccessed}</p>
      <div className="history-items">
        <div className="domain-container">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <div className="domain-text-container">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <button
          type="button"
          className="delete-button"
          onClick={onClickDeleteButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            data-testid="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistoryItems
