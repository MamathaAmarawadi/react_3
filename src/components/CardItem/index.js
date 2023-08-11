// Write your code here.
import './index.css'

const CardItem = props => {
  const {cards} = props
  const {title, imgUrl, description, className} = cards
  return (
    <li className={className}>
      <di className="design">
        <h1 alt={title}>{title}</h1>
        <p className="para1">{description}</p>
        <div className="image" alt={imgUrl}>
          <img src={imgUrl} alt={title} />
        </div>
      </di>
    </li>
  )
}
export default CardItem
