import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Form, Input, Button, notifaction} from 'antd'

export default class AddTodoItem extends React.Component {
  constructor(props){
    super(props)

    this.saveNewItem = this.saveNewItem.bind(this)
  }

saveNewItem(e) {
  e.preventDefault()

  let element = ReactDOM.findDOMNode(this.refs.newItem)
  let task = element.value
  if (!task) {
    notifaction.open({
      description: '不能输入空'
    })
  } else {
    this.props.saveNewItem(task) //回调出去
    element.value = ""
  }
}

  render() {
    return(
      <div className="addtodoitem">
        <Form.Item>
          <label htmlFor="newItem"></label>
          <Input type="text" id="newItem" ref="newItem" placeholder="添加一个新的代办项目"></Input>
          <Button type="primary" className="pull-right" onClick={this.saveNewItem}>保存</Button>
        </Form.Item>
      </div>
    )
  }
}
