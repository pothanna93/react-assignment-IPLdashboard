import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class TeamCard extends Component {
  render() {
    const {teamDetails} = this.props
    const {name, teamImageUrl, id} = teamDetails

    return (
      <Link to={`/team-matches/${id}`} className="link-items">
        <li className="team-list-item">
          <img src={teamImageUrl} alt={`${name}`} className="team-image" />
          <p className="team-name">{name}</p>
        </li>
      </Link>
    )
  }
}
export default TeamCard
