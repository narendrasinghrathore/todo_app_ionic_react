import React from 'react';
import { IonModal, IonButton, IonInput } from '@ionic/react';

export default function AddNew(props: { setShowModal: Function, showModal: boolean, modalClosed: Function, addNew: Function }) {

    const [value, setValue] = React.useState("");

    const modalClose = () => {
        props.addNew(value);
        setValue("");
        props.setShowModal(false);
    }
    return <>
        <IonModal onDidDismiss={(e) => props.modalClosed(e)} isOpen={props.showModal} cssClass='my-custom-class'>
            <IonInput value={value} placeholder="Enter Input" onIonChange={e => setValue(e.detail.value!)}></IonInput>
            <IonButton onClick={() => modalClose()}>Add New</IonButton>
        </IonModal>
    </>;
};