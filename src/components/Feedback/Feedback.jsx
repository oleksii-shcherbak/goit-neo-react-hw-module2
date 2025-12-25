import style from './Feedback.module.css'

export default function Feedback({ feedback, totalFeedback, positiveFeedback }) {
  return (
    <ul className={style.feedback}>
      {Object.keys(feedback).map((rating, i) => {
        return (
          <li key={i}>
            <p>
              {rating}: {feedback[rating]}
            </p>
          </li>
        )
      })}
      <li>
        <p>Total: {totalFeedback}</p>
      </li>
      <li>
        <p>Positive: {positiveFeedback}%</p>
      </li>
    </ul>
  )
}
