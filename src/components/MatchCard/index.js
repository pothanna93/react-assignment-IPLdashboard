import './index.css'

const MatchCard = props => {
  const {eachMatchData} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = eachMatchData
  return (
    <li className={`match-card ${matchStatus}`}>
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-logo"
      />
      <p className="competing-team-heading">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className="match-status">{matchStatus}</p>
    </li>
  )
}
export default MatchCard
