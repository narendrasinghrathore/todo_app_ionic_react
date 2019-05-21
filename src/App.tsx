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
    {name:'Mon', id:1, isFavorite: false},
    {name:'Tue', id:2, isFavorite: false},
    {name:'Wed', id:3, isFavorite: false},
    {name:'Thu', id:4, isFavorite: false},
    {name:'Fri', id:5, isFavorite: false},
    {name:'Sat', id:6, isFavorite: false},
    {name:'Sun', id:7, isFavorite: false},
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
