import './index.css'

const FaqsItem = props => {
  const {eachitem, onchangestatus} = props
  const {id, questionText, answerText, isActive} = eachitem
  const img = isActive
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const altsval = !isActive ? 'plus' : 'minus'
  const borders = isActive ? 'imageandtext-container' : 'imgstatus'
  const changelement = () => {
    onchangestatus(id)
  }
  return (
    <li className="list-items">
      <div className={borders}>
        <h1 className="heading">{questionText}</h1>
        <button type="button" className="button" onClick={changelement}>
          <img src={img} alt={altsval} />
        </button>
      </div>
      {isActive && <p className="paragraph">{answerText}</p>}
    </li>
  )
}
export default FaqsItem
