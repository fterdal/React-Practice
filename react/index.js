import React from 'react'
import { render } from 'react-dom'
import contestants from './contestants'

/**
 * Reminders for Pillars Checkpoint:
 * - You do not need to configure webpack or babel,
 * - you do not need to install any node packages
 * - you do not need to create any new files or directories
 *
*/

class Emoji extends React.Component {
  constructor() {
    super()
    this.state = {
      active: true
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(prevState => ({ active: !prevState.active }))
  }

  render() {
    const { name, pic, country, rating} = this.props
    let greeting = null
    if (this.state.active) {
      greeting = <h1>Hello!</h1>
    } else {
      greeting = <h1>Bye Bye!</h1>
    }
    return (
        <tr
            onClick={this.handleClick}
            className={this.state.active ? 'funky' : 'fresh'}
            style={{ textDecoration: this.state.active ? "none" : "line-through" }}
        >
          <td>{name}</td>
          <td>{pic}</td>
          <td>{country}</td>
          <td>{rating}</td>
          {greeting}
        </tr>
    )
  }
}

const EmojiTable = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Picture</th>
          <th>Country</th>
          <th>Rating</th>
        </tr>
        {props.contestants.map(contestant => (
          <Emoji key={contestant.name} {...contestant} />
        ))}
      </tbody>
    </table>
  )
}

const App = () => (
  <div>
    <h1>Emoji World Cup</h1>
    <h2>Which Emoji Will Reign Supreme?</h2>
    <EmojiTable contestants={contestants} />
  </div>
)

render(
  <App />,
  document.getElementById('app')
)
