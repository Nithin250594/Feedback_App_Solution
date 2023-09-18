// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {click: false}

  happyClick = () => this.setState({click: true})

  render() {
    const {click} = this.state

    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="feedback-bg">
        <div className="feedback-container">
          {click === true && emojis[2].id === 2 ? (
            <>
              <img src={loveEmojiUrl} alt="love emoji" className="emoji-size" />
              <h1 className="thankyou-text">Thank you!</h1>
              <p className="thankyou-para">
                You will use your feedback to improve our customer support
                performance
              </p>
            </>
          ) : (
            <div>
              <h1 className="feedback-title">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="emojis-container">
                {emojis.map(eachemoji => (
                  <li key={eachemoji.id}>
                    <img
                      src={eachemoji.imageUrl}
                      alt={eachemoji.name}
                      className="emoji-size"
                      onClick={this.happyClick}
                    />
                    <p className="emoji-name">{eachemoji.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
