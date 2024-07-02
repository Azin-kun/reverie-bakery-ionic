import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonList, IonItem, IonChip, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  const category=[
    { id: 1, category_name: 'koasong'},
    { id: 2, category_name: 'kek'},
    { id: 3, category_name: 'pastri'},
    { id: 4, category_name: 'bret'},
    { id: 5, category_name: 'milek'},
    { id: 6, category_name: 'swit'},
  ]
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonSearchbar className='search'></IonSearchbar>

        <IonContent className='ion-padding'>
        <h4>Pernah kamu cari dan tidak pernah kau dapatkan</h4>
          {category.map(cat => (
              <IonChip>{cat.category_name}</IonChip>
            ))}
        <h4>Yang populer nih, gak kyk kamu</h4>
          {category.map(cat => (
              <IonChip>{cat.category_name}</IonChip>
            ))}
        </IonContent>


      </IonContent>
    </IonPage>
  );
};

export default Tab2;
