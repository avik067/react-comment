// Write your code here
import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

let decorColorIndex = 0
let decorColor

class Comments extends Component {
  state = {userList: [], nkey: '', ckey: '', count: 0}

  likeIt = idpass => {
    console.log(idpass)

    this.setState(pre => ({
      userList: pre.userList.map(each => {
        if (each.id === idpass) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  deleteIt = idpass => {
    console.log(idpass)
    this.setState(pre => ({
      userList: pre.userList.filter(each => each.id !== idpass),
      count: pre.count - 1,
    }))
  }

  decideClassName = () => {
    if (decorColorIndex < initialContainerBackgroundClassNames.length) {
      console.log(decorColorIndex)
      decorColor = initialContainerBackgroundClassNames[decorColorIndex]
    } else {
      decorColorIndex = 0
      decorColor = initialContainerBackgroundClassNames[decorColorIndex]
    }
    decorColorIndex += 1

    return decorColor
  }

  addCommentToState = event => {
    event.preventDefault()

    console.log('h')
    const {nkey} = this.state
    const {ckey} = this.state

    if (nkey === '' || ckey === '') {
      alert('Please enter non empty valid info to all those input fields')
      return
    }

    const newObject = {
      id: uuidv4(),
      name: nkey,
      comment: ckey,
      cls: this.decideClassName(),
      isLiked: false,
    }

    this.setState(pre => ({
      userList: [...pre.userList, newObject],
      nkey: '',
      ckey: '',
      count: pre.count + 1,
    }))
  }

  changeName = event => {
    const name = event.target.value

    this.setState({nkey: name})
  }

  changeComment = event => {
    const co = event.target.value

    this.setState({ckey: co})
  }

  render() {
    const {nkey, ckey, count, userList, cls} = this.state

    return (
      <div className="main">
        <div className="main-upper">
          <form className="input-card">
            <h1>Comments</h1>
            <p>Say Something about 4.0 Technologies</p>
            <div>
              <input
                type="text"
                value={nkey}
                placeholder="Your Name"
                onChange={this.changeName}
              />
            </div>
            <div>
              <textarea
                value={ckey}
                placeholder="Your Comment"
                onChange={this.changeComment}
              >
                {ckey}
              </textarea>
            </div>
            <div>
              <button
                type="submit"
                className="add-button"
                onClick={this.addCommentToState}
              >
                Add Comment
              </button>
            </div>
          </form>
          <div className="static-image">
            <img
              className="img"
              alt="comments"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            />
          </div>
        </div>
        <hr />
        <div className="comment-lower">
          <p>
            <span className="span-count">{count}</span> Comments
          </p>
          <ul>
            {userList.map(each => (
              <CommentItem
                details={each}
                decorColorClass={each.cls}
                isLiked={each.isLiked}
                triggerLike={this.likeIt}
                triggerDelete={this.deleteIt}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
