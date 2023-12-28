import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncreament = () => {
    this.setState(preVal => ({count: preVal.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked{' '}
          <span className="span-class">{count}</span> times
        </h1>
        <p className="para ">Click the button to increase the count</p>
        <button className="btn" type="button" onClick={this.onIncreament}>
          Click me
        </button>
      </div>
    )
  }
}

export default ClickCounter
