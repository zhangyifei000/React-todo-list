import React from 'React';
import {Row, Col, Checkbox, Button} from 'antd';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props)

    this.toggleComplete = this.toggleComplete.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.editTask = this.editTask.bind(this)
  }

toggleComplete() {
  this.props.toggleComplete(this.props.taskId)
}

editTask() {
  this.props.editTask(this.props.taskId, this.props.task)
}

deleteTask() {
  this.props.deleteTask(this.props.taskId)
}

  render() {
    let task = this.props.task
    let itemChecked
    if (this.props.complete === "true") {
      itemChecked = true
      task = <del>{task}</del>
    } else {
        itemChecked = false
    }
    return(
      <li className="list-group-item">
        <Row>
          <Col span={12}>
            <Checkbox checked={itemChecked} onChange={this.toggleComplete}/>
            {task}
          </Col>
          <Col span={12}>
            <Button span= {12} type='Default' className='pull-right' onClick={this.editTask}>编辑</Button>
            <Button span={12} type='danger' className='pull-right' onClick={this.deleteTask}>删除</Button>
          </Col>
        </Row>
      </li>
    )
  }
}
