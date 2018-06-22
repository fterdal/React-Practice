import React from 'react'
import { render } from 'react-dom'

/**
 * Remember:
 * - You do not need to configure webpack or babel,
 * - you do not need to install any node packages
 * - you do not need to create any new files or directories
 *
 * Just write code. 🙂
*/

const Emoji = (props) => {
  const { name, pic, country, rating } = props.emoji
  return (
    <tr>
      <td>{name}</td>
      <td>{pic}</td>
      <td>{country}</td>
      <td>{rating}</td>
    </tr>
  )
}

const EmojiTable = (props) => {
  const { emojis } = props
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Picture</th>
          <th>Country</th>
          <th>Rating</th>
        </tr>
          {emojis.map(emoji => (
            <Emoji key={emoji.name} emoji={emoji} />
          ))}
      </tbody>
    </table>
  )
}

const emojiContestants = [
  {
    name: 'Smiley',
    pic: '😀',
    country: '🇺🇸',
    rating: 7,
  },
  {
    name: 'Burger',
    pic: '🍔',
    country: '🇩🇪',
    rating: 8,
  },
]

const App = () => (
  <div>
    <h1>World "Emoji" Cup</h1>
    <h2>Which Emoji will reign supreme?</h2>
    <EmojiTable emojis={emojiContestants} />
  </div>
)

render(
  <App />,
  document.getElementById('app')
)
