// Write your code here
const CommentItem = props => {
  const {details, updateLikeButton, deleteComment} = props
  const {id, name, comment, time, isLiked} = details

  const onLikeButton = () => {
    updateLikeButton(id)
  }

  const onDeleteButton = () => {
    deleteComment(id)
  }

  const likeIcon = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="commentCard">
      <div className="nameAndCommentContainer">
        <div className="nameLogoContainer">
          <p className="nameLogo">{name.slice(0, 1)}</p>
        </div>
        <div className="commentContent">
          <p className="fullName">
            {name}
            <span className="time"> {time}</span>
          </p>
          <p className="commentText">{comment}</p>
        </div>
      </div>
      <div className="likeAndDeleteContainer">
        <button type="button" className="likeBtn">
          <img
            src={likeIcon}
            alt="like"
            className="likeIcon"
            onClick={onLikeButton}
          />
          Like
        </button>
        <button data-testid="delete" type="button" className="deleteBtn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="deleteIcon"
            onClick={onDeleteButton}
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
