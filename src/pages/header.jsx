import React from "react";
import { useState } from "react";
import { IonItem,  IonIcon, IonButton, IonInput, IonTextarea, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonText } from '@ionic/react';
import { heart, search } from "ionicons/icons";

export const Header = ({ title }) => {

    const [keyword, setKeyword] = useState();

    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>

                <IonItem>
                    <IonInput value={keyword} placeholder="Mot clé" onIonChange={e => setKeyword()} ></IonInput>
                    <IonInput value={keyword} placeholder="Localisation" onIonChange={e => setKeyword()} ></IonInput>
                    {/* <IonButtons> */}
                    <IonButton color="meriam" >
                         <IonIcon icon={search}> </IonIcon>
                          </IonButton>

                    {/* </IonButtons> */}

                </IonItem>

            </IonToolbar>
        </IonHeader>


    )

}