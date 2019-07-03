import React, { Component } from 'react'


class Pics extends Component {
  

  addPic = () => {
    const newPics = [ ...this.state.pics ]
    newPics.push('new Pic')
    this.setState({
      pics: newPics
    })
  }

  render() {
    console.log('PICS ACTION FROM REDUX', this.props.addPicFromRedux)
    return (
      <div style={{ border: '5px dashed pink' }}>
        <p>these are the pics</p>
        <ul>
          {this.props.pics.map((pic, index) => {
            return (
              <li key={index}>{pic}</li>
            )
          })}
        </ul>
        <button onClick={this.props.addPicFromRedux}>Click me</button>
      </div>
    )
  }
}

export default Pics