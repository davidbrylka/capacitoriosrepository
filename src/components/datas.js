 import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp, accessibilityOutline } from 'ionicons/icons';
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
      iosIcon: mailOutline,
      mdIcon: mailSharp
    },
    {
      title: 'Mon CV',
      url: '/cv',
      component : <MonCV></MonCV>,
      iosIcon: paperPlaneOutline,
      mdIcon: paperPlaneSharp
    },
    {
      title: 'Mes groupes',
      url: '/groupes',
      component : <MesGroupes></MesGroupes>,
      iosIcon: heartOutline,
      mdIcon: heartSharp
    },
    {
      title: 'Mon portfolio',
      url: '/portfolio',
      component : <MonPortfolio></MonPortfolio>,
      iosIcon: archiveOutline,
      mdIcon: archiveSharp
    },
    {
      title: 'Mes candidatures',
      url: '/candidatures',
      component : <MesCandidatures></MesCandidatures>,
      iosIcon: trashOutline,
      mdIcon: trashSharp
    },
    {
      title: 'Mes CV Request',                  // Todo voir pour une traduction correcte
      url: '/cv-request',
      component : <MesCVRequest></MesCVRequest>,
      iosIcon: warningOutline,
      mdIcon: warningSharp
    },
    {
      title: 'Deconnexion',
      url: '/logout',
      component : <LogOut></LogOut>,
      iosIcon: accessibilityOutline,
      mdIcon: accessibilityOutline
    }
  ];