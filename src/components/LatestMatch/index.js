import {Component} from 'react'

import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      firstInnings,
      date,
      manOfTheMatch,
      result,
      secondInnings,
      umpires,
      venue,
    } = latestMatch
    return (
      <div className="latest-match-card-container">
        <h1 className="heading-match">Latest Matches</h1>
        <div className="latest-card-container">
          <div className="logo-and-date-container">
            <div className="match-info">
              <p className="competing-team">{competingTeam}</p>
              <p className="date">{date}</p>
              <p className="venue">{venue}</p>
              <p className="result">{result}</p>
            </div>
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className="team-logo"
            />
          </div>
          <hr className="hr-line" />
          <div className="latest-match-details">
            <div className="match-info-item">
              <p className="latest-match-label">First Innings</p>
              <p className="latest-match-value">{firstInnings}</p>
            </div>
            <div className="match-info-item">
              <p className="latest-match-label">Second Innings</p>
              <p className="latest-match-value">{secondInnings}</p>
            </div>
            <div className="match-info-item">
              <p className="latest-match-label">Man Of The Match</p>
              <p className="latest-match-value">{manOfTheMatch}</p>
            </div>
            <div className="match-info-item">
              <p className="latest-match-label">Umpires</p>
              <p className="latest-match-value">{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
