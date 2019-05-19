import React, { Component } from 'react';
import {
    IonList,
} from '@ionic/react';
import { TodoListItemModel } from '../../../models/TodoListItem';
import TodoListItem from '../../stateless/todo-item/TodoListItem';

interface ITodoList {
    list: TodoListItemModel[]
}

class TodoList extends Component<ITodoList> {

    list: TodoListItemModel[];

    constructor(props: any) {
        super(props);
        this.list = props.list.map((data: TodoListItemModel) => <TodoListItem key={data.id} item={data} />);

    }
    render() {
        return (
            <IonList>
                {this.list}
            </IonList>
        );
    }

}
export default TodoList;