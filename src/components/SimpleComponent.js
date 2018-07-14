// Code SimpleComponentHere Here
import 'react' from React;

export default class SimpleComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mood: "happy"
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    (this.state.mood === 'happy') ? this.setState({mood: 'sad'}) : this.setState({mood:'happy'})
  }

  render() {
    return(
      <div class="mood" onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}
