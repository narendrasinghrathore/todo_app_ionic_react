import React from 'react';
import {
    IonList,
} from '@ionic/react';
import { TodoListItemModel } from '../../../models/TodoListItem';
import TodoListItem from '../../stateless/todo-item/TodoListItem';

interface ITodoList {
    list: TodoListItemModel[]
}

export default function TodoList(props: { list: TodoListItemModel[], updateList: Function }) {


    /**
     * Will return a list of TodoListItem(s)
     */
    const buildList = () => {
        return props.list.map((data: TodoListItemModel) =>
            <TodoListItem
                key={data.id}
                item={data}
                onFavorite={toggleFavoriteState} />);
    }

    /**
     * Toggle the favorite property
     */
    const toggleFavoriteState = (item: TodoListItemModel) => {
        const list = props.list.map(item_ => item_.id === item.id ? (() => {
            return { ...item_, isFavorite: !item_.isFavorite };

        })() : item_);

        props.updateList(list);
    }
    /**
     * Render List
     */

    return (
        <IonList>
            {buildList()}
        </IonList>
    );


}