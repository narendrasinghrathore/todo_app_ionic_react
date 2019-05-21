import React, { Component } from 'react';
import {
    IonList,
} from '@ionic/react';
import { TodoListItemModel } from '../../../models/TodoListItem';
import TodoListItem from '../../stateless/todo-item/TodoListItem';

interface ITodoList {
    list: TodoListItemModel[]
}

class TodoList extends Component<ITodoList, ITodoList> {

    constructor(props: any) {
        super(props);
        this.state = {
            list: props.list
        };
    }

    /**
     * Will return a list of TodoListItem(s)
     */
    buildList = () => {
        return this.state.list.map(
            (data: TodoListItemModel) =>
                <TodoListItem
                    key={data.id}
                    item={data}
                    onFavorite={this.toggleFavoriteState} />);
    }

    /**
     * Toggle the favorite property
     */
    toggleFavoriteState = (item: TodoListItemModel) => {
        const list = this.state.list.map(item_ => item_.id === item.id ? (() => {
            return { ...item_, isFavorite: !item_.isFavorite };

        })() : item_);
        this.setState({
            list
        });
    }
    /**
     * Render List
     */
    render() {
        return (
            <IonList>
                {this.buildList()}
            </IonList>
        );
    }

}
export default TodoList;