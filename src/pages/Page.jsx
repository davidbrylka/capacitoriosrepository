import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonText } from '@ionic/react';
// import { useParams } from 'react-router';
// import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import { appPages } from '../components/datas';
import { useParams } from 'react-router';
import { Header } from './header';
import { Accueil } from '../components/Accueil';
import { MonCV } from '../components/MonCV';

const Page = () => {

  const { name } = useParams()

  const objetPage = appPages.find(page => page.url.substring(1) === name)

  console.log(objetPage.url);
  console.log("************************");

  const content = () => {
    return objetPage.component
  }

  // console.log("Name :",name);

  return (
    <IonPage>
      <Header title={objetPage.title} />

      <IonContent>
        {content()}
        {/* <IonText> Hello Eric Everybody dance now \o/ !!
          Ceci est la page {name}
      </IonText> */}
      </IonContent>
    </IonPage>
  );
};

export default Page;
