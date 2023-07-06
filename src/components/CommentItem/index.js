// Write your code here
import './index.css'

const CommentItem = props => {
  const {details, decorColorClass, isLiked, triggerLike, triggerDelete} = props
  const {id, name, comment} = details
  //   console.log(decorColorClass)

  const onLike = () => {
    triggerLike(id)
  }
  const onD = () => {
    triggerDelete(id)
  }

  const src = !isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  const liketext = isLiked ? 'blue' : 'shade'

  return (
    <li className="comment-container">
      <div className="comment">
        <div className={`user-pic ${decorColorClass}`}>{name[0]}</div>
        <div>
          <h4>
            {name} <span className="time"> less than a minute ago </span>
          </h4>
          <p>{comment}</p>
        </div>
      </div>
      <div className="button-apart">
        <div>
          <button type="button" className=" like " onClick={onLike}>
            <img alt="like" className="icon" src={src} />
            <span className={`${liketext}`}>Like</span>
          </button>
        </div>
        <div>
          <button
            type="button"
            className=" like "
            data-testid="delete"
            onClick={onD}
          >
            <img
              alt="delete"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            />
          </button>
        </div>
      </div>
      <hr className="hr-comment" />
    </li>
  )
}

export default CommentItem
