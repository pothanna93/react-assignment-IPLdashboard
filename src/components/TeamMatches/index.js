import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class TeamMatches extends Component {
  state = {
    teamMatchValue: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const matchesData = await response.json()

    const teamMatchData = {
      teamBannerUrl: matchesData.team_banner_url,
      latestMatchDetails: {
        competingTeam: matchesData.latest_match_details.competing_team,
        competingTeamLogo: matchesData.latest_match_details.competing_team_logo,
        date: matchesData.latest_match_details.date,
        firstInnings: matchesData.latest_match_details.first_innings,
        id: matchesData.latest_match_details.id,
        manOfTheMatch: matchesData.latest_match_details.man_of_the_match,
        matchStatus: matchesData.latest_match_details.match_status,
        result: matchesData.latest_match_details.result,
        secondInnings: matchesData.latest_match_details.second_innings,
        umpires: matchesData.latest_match_details.umpires,
        venue: matchesData.latest_match_details.venue,
      },
      recentMatches: matchesData.recent_matches.map(recentMatch => ({
        umpires: recentMatch.umpires,
        result: recentMatch.result,
        manOfTheMatch: recentMatch.man_of_the_match,
        id: recentMatch.id,
        date: recentMatch.date,
        venue: recentMatch.venue,
        competingTeam: recentMatch.competing_team,
        competingTeamLogo: recentMatch.competing_team_logo,
        firstInnings: recentMatch.first_innings,
        secondInnings: recentMatch.second_innings,
        matchStatus: recentMatch.match_status,
      })),
    }
    this.setState({teamMatchValue: teamMatchData, isLoading: false})
  }

  renderTeamMatches = () => {
    const {teamMatchValue} = this.state
    const {teamBannerUrl, latestMatchDetails} = teamMatchValue
    return (
      <div className="team-match-container">
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <LatestMatch latestMatch={latestMatchDetails} />
        {this.renderRecentMatch()}
      </div>
    )
  }

  renderRecentMatch = () => {
    const {teamMatchValue} = this.state
    const {recentMatches} = teamMatchValue

    return (
      <ul className="recent-match-list">
        {recentMatches.map(eachItem => (
          <MatchCard eachMatchData={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <div className={`app-team-match-container ${id}`}>
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}
export default TeamMatches
