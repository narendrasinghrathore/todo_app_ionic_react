import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp,
  IonContent,
} from '@ionic/react';
import TodoList from './components/stateful/todo-list/TodoList';
import { TodoListItemModel } from './models/TodoListItem';

class App extends Component {
  list: TodoListItemModel[] = [
    {name:'Mon', id:1},
    {name:'Tue', id:2},
    {name:'Wed', id:3},
    {name:'Thu', id:4},
    {name:'Fri', id:5},
    {name:'Sat', id:6},
    {name:'Sun', id:7},
  ];
  render() {
    return (
      <IonApp>
        <IonContent>
          <TodoList list={this.list}/>
        </IonContent>
      </IonApp>
    );
  }
}

export default App;
