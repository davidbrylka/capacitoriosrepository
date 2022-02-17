import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './Page.css';
import { appPages } from '../components/datas';
import { useParams } from 'react-router';
import { Header } from './header';


const Page = () => {

  const { name } = useParams()

  const objetPage = appPages.find(page => page.url.substring(1) === name)

  const content = () => {
    return objetPage.component
  }

  return (
    <IonPage>
      <Header title={objetPage.title} />

      <IonContent>
        {content()}
      </IonContent>
    </IonPage>
  );
};

export default Page;
