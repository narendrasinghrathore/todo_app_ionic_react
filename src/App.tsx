import React from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonIcon,
  IonButtons,
} from '@ionic/react';
import TodoList from './components/stateful/todo-list/TodoList';
import { TodoListItemModel } from './models/TodoListItem';
import AddNew from './components/stateless/add-new/AddNew';
import { iosAddCircleOutline } from 'ionicons/icons';

export default function App() {

  const [showModal, setShowModal] = React.useState(false);

  const [list, setList] = React.useState<TodoListItemModel[]>([
    { name: 'Mon', id: 1, isFavorite: false },
    { name: 'Tue', id: 2, isFavorite: false },
    { name: 'Wed', id: 3, isFavorite: false },
    { name: 'Thu', id: 4, isFavorite: false },
    { name: 'Fri', id: 5, isFavorite: false },
    { name: 'Sat', id: 6, isFavorite: false },
    { name: 'Sun', id: 7, isFavorite: false },
  ]);

  const onModalClosed = (e: Promise<any>) => {

  }

  const addNewItem = (value: string) => {
    console.log(value);
    setList(list => [{ name: value, isFavorite: false, id: list.length + 1 }, ...list,]);
  }

  const updateList = (list: TodoListItemModel[]) => {
    setList([...list]);
  }



  const titleHeader = 'Todo Items';


  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{titleHeader}</IonTitle>
          <IonButtons slot="end">
            <IonButton slot="icon-only" onClick={() => setShowModal(true)}>
              <IonIcon icon={iosAddCircleOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <AddNew addNew={(e: string) => addNewItem(e)} modalClosed={(e: Promise<any>) => onModalClosed(e)} setShowModal={(e: boolean) => setShowModal(e)} showModal={showModal} />
        <TodoList updateList={(e: TodoListItemModel[]) => updateList(e)} list={list} />
      </IonContent>
    </IonApp>
  );

}