import React from 'react'


class Test4 extends React.Component {

  render() {
    return (  <div>
      <div>test4</div>
      <button onClick="alert(this.innerHTML)">Click me</button>
      </div>
    )
  }
}

export default Test4;