import style from './Options.module.css'

export default function Options({
  options,
  totalFeedback,
  updateFeedback,
  resetFeedback,
}) {
  return (
    <ul className={style.options}>
      {Object.keys(options).map((option, i) => {
        return (
          <li key={i}>
            <button
              className={style.optionsButton}
              onClick={() => {
                updateFeedback(option)
              }}
            >
              {option}
            </button>
          </li>
        )
      })}
      {totalFeedback ? (
        <li>
          <button className={style.resetBtn} onClick={() => resetFeedback()}>
            Reset
          </button>
        </li>
      ) : (
        ''
      )}
    </ul>
  )
}
