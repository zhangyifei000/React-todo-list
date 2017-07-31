import React from 'react';
import TodoList from './TodoList';
import AddTodoItem from './AddTodoItem'
import {Button, Icon, Row, Col} from 'antd';

export default class TodoBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [
        {
          "id": "1",
          "task": "做一个TodoList Demo",
          "complete": "false"
        }, {
          "id": "2",
          "task": "学习ES6",
          "complete": "false"
        }, {
          "id": "3",
          "task": "Hello React",
          "complete": "true"
        }, {
          "id": "4",
          "task": "找工作",
          "complete": "false"
        }
      ],
      allComplete: false
  }

  let data = this.getLocalItem()
  if (!data) {
    this.storeItem(this.state.data)
  }
  this.handleComplete = this.handleComplete.bind(this)
  this.handleTaskDelete = this.handleTaskDelete.bind(this)
  this.handEditTask = this.handEditTask.bind(this)
  this.handleAddItem = this.handleAddItem.bind(this)
}

handleComplete(taskId) {
  let data = this.getLocalItem()
  for (var item of data) {
    if (item.id === taskId) {
      item.complete = item.complete === "true" ? "false" : "true"
    }
  }
  this.setState({data})
  this.storeItem(data)
}

handleAddItem(task) {
  let data = this.getLocalItem()
  let newItem = {
    id: this.generateGUID(), //这里要使用一个随机数不能有重复值
    task: task,
    complete: "false"
  }
  let newData = data.concat([newItem])
  this.setState({data: newData})
  this.storeItem(newData)
}

handEditTask(taskId, task) {
  debugger
  let data = this.getLocalItem()
  for (var item of data) {
    if (item.id === taskId) {
      item.task = "我变了"
    }
  }
  this.setState({data})
  this.storeItem(data)
}

handleTaskDelete(taskId) {
  let data = this.getLocalItem()
  let newData = data.filter(function(item) {
    return item.id !== taskId
  })
  this.setState({data: newData})// if you input {filterData} will change {filterData: filterData}
  this.storeItem(newData)
}

generateGUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

storeItem(obj) {
  localStorage.setItem("itemData", JSON.stringify(obj))
}

getLocalItem() {
   return JSON.parse(localStorage.getItem("itemData"))
}

  render(){
    return(
      <div className="well">
        <h1 className="text-center"> ToDo Tist </h1>
        <TodoList data={this.getLocalItem()} toggleComplete={this.handleComplete} editTask={this.handEditTask} deleteTask={this.handleTaskDelete}></TodoList>
        <AddTodoItem saveNewItem={this.handleAddItem}></AddTodoItem>
    </div>
    )
  }
}
