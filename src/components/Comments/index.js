import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'

import CommentItem from '../CommentItem'

import './index.css'

// eslint-disable-next-line no-unused-vars
const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
// eslint-disable-next-line no-unused-vars
class Comments extends Component {
  // eslint-disable-next-line react/no-unused-state
  state = {name: '', comment: '', commentsList: []}

  onNameChange = event => {
    this.setState({name: event.target.value})
  }

  onCommentChange = event => {
    this.setState({comment: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      time: formatDistanceToNow(new Date()),
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  updateLikeButton = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(each => each.id !== id),
    }))
  }

  render() {
    const {name, comment, commentsList} = this.state

    return (
      <div className="mainContainer">
        <div className="container">
          <h1 className="mainHeading">Comments</h1>
          <div className="contentContainer">
            <div className="imgContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
                className="img"
              />
            </div>
            <form className="inputsContainer" onSubmit={this.addComment}>
              <p className="mainPara">Say something 4.0 Technologies</p>
              <input
                className="nameInput"
                placeholder="Your Name"
                onChange={this.onNameChange}
                value={name}
              />
              <textarea
                rows="8"
                cols="22"
                placeholder="Your Comment"
                onChange={this.onCommentChange}
                value={comment}
              />
              <button type="submit" className="btn">
                Add Comments
              </button>
            </form>
          </div>
          <hr />
          <span className="totalComments">{commentsList.length}</span>
          <p>Comments</p>
          <ul className="commentsContainer">
            {commentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                details={eachComment}
                updateLikeButton={this.updateLikeButton}
                deleteComment={this.deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
