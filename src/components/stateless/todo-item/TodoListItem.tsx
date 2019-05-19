import React, { Component } from 'react';
import {
    IonItem,
    IonLabel
} from '@ionic/react';
import { TodoListItemModel } from '../../../models/TodoListItem';

interface ITodoListItemModel {
    item: TodoListItemModel
}

class TodoListItem extends Component<ITodoListItemModel> {

    item: TodoListItemModel;

    constructor(props: any) {
        super(props);
        this.item = props.item;
    }


    render() {
        return (
            <IonItem key={this.item.id}>
                <IonLabel>{this.item.name}</IonLabel>
            </IonItem>
        );
    }

}
export default TodoListItem;