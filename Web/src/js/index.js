var React = require('react');
var ReactDOM = require('react-dom');
import TodoBox from './components/TodoBox.js';
import './../css/index.css';

export default class Index extends React.Component {
  constructor(){
    super();
  };
  render() {
    return (
        <TodoBox />
    );
  }
}

ReactDOM.render(<Index/>,document.getElementById("example"))
