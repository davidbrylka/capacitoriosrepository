 import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp, accessibilityOutline, documentTextOutline, documentTextSharp, peopleOutline, peopleSharp, receiptOutline, receiptSharp, documentLockOutline, documentLockSharp, exitOutline, exitSharp } from 'ionicons/icons';
import { Accueil } from './Accueil';
import { MonCV } from './MonCV';
import React from 'react';
import { MesGroupes } from './MesGroupes';
import { MonPortfolio } from './MonPortfolio';
import { MesCandidatures } from './MesCandidatures';
import { MesCVRequest } from './MesCVRequest';
import { LogOut } from './LogOut';

  export const appPages = [
    {
      title: 'Accueil',
      url: '/accueil',
      component : <Accueil></Accueil>,
      iosIcon: accessibilityOutline,
      mdIcon: accessibilityOutline
    },
    {
      title: 'Mon CV',
      url: '/cv',
      component : <MonCV></MonCV>,
      iosIcon: documentTextOutline,
      mdIcon: documentTextSharp
    },
    {
      title: 'Mes groupes',
      url: '/groupes',
      component : <MesGroupes></MesGroupes>,
      iosIcon: peopleOutline,
      mdIcon: peopleSharp
    },
    {
      title: 'Mon portfolio',
      url: '/portfolio',
      component : <MonPortfolio></MonPortfolio>,
      iosIcon: receiptOutline,
      mdIcon: receiptSharp
    },
    {
      title: 'Mes candidatures',
      url: '/candidatures',
      component : <MesCandidatures></MesCandidatures>,
      iosIcon: paperPlaneOutline,
      mdIcon: paperPlaneSharp
    },
    {
      title: 'Mes CV Request',                  // Todo voir pour une traduction correcte
      url: '/cv-request',
      component : <MesCVRequest></MesCVRequest>,
      iosIcon: documentLockOutline,
      mdIcon: documentLockSharp
    },
    {
      title: 'Deconnexion',
      url: '/logout',
      component : <LogOut></LogOut>,
      iosIcon: exitOutline,
      mdIcon: exitSharp
    }
  ];