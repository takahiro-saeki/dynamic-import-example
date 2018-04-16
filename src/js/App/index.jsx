import React, { Component } from 'react';

export default class App extends Component {
  state = {
    isLoaded: false,
    comp: null
  }
  
  handleChange = async () => {
    const { isLoaded } = this.state;
    if(isLoaded) {
      const { add, subtract } = await import('../module/baseMethod');
      console.log('add', add(10, 3))
      console.log('subtract', subtract(30, 13))
    } else {
      const { divide, multiply } = await import('../module/extraMethod');
      console.log('divide', divide(10, 2))
      console.log('multiply', multiply(2, 9))
    }
    this.setState(state => ({isLoaded: !state.isLoaded}))
  }
  
  componentDidMount() {
    this.addComponent()
  }
  
  addComponent = async () => {
    import('../Sample/index.jsx').then(comp => this.setState({comp: comp.default}))
  }
  
  generateMockData = () => {
    for(let i = 1; i < 4; i++) {
      const path = `module/mock1.js`
      console.log(path)
      import(`../module/mock${i}.js`).then(item => console.log(item.default))
      import(`../${path}`).then(item => console.log('test', item.default))
    }
  }
  
  render() {
    const { isLoaded } = this.state;
    const { comp } = this.state;
    const Item = comp;
    return (
      <div>
        <h2>App</h2>
        <div onClick={this.generateMockData}>list generate</div>
        <button onClick={this.handleChange}>change state</button>
        {isLoaded ? <Item title="loaded" /> : <div>hidden</div>}
      </div>
    )
  }
}