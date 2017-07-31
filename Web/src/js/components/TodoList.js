import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props)

  }

render(){
  let taskList = this.props.data.map(item=>
    <TodoItem taskId={item.id}
              key={item.id}
              task={item.task}
              complete={item.complete}
              toggleComplete={this.props.toggleComplete}
              editTask={this.props.editTask}
              deleteTask={this.props.deleteTask}
    />
  )
  return(
    <ul className="list-group">
      {taskList}
    </ul>
  )
}
}
