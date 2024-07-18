import {Component} from 'react'
import FaqsItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    this.state = {items: props.faqsList}
  }

  onchangestatus = id => {
    const {items} = this.state
    const latest = items.map(each => {
      if (each.id === id) {
        return {...each, isActive: !each.isActive}
      }
      return {...each}
    })
    console.log(latest)
    this.setState({items: latest})
  }

  render() {
    const {items} = this.state
    return (
      <div className="background-container">
        <ul className="inner-container">
          <h1 className="faqsheading">FAQs</h1>
          {items.map(each => (
            <FaqsItem
              eachitem={each}
              key={each.id}
              onchangestatus={this.onchangestatus}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Faqs
