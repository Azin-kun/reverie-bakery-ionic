import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonList, IonItem, IonChip, IonLabel, useIonViewWillEnter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import axios from 'axios';

const Tab2: React.FC = () => {

  const [category, setCategory] = useState([]);
  const history = useHistory();

  useIonViewWillEnter(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/login');
    }
  });

  useEffect(() => {
    const fetchcategory = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await axios.get('http://localhost:5000/reverie/category', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setCategory(response.data);
        }
      } catch (error: any) {
        console.error('Error fetching category:', error);
        if (axios.isAxiosError(error) && error.response && error.response.status === 401) {
          history.push('/login');
        }
      }
    };

    fetchcategory();
  }, [history]);


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
