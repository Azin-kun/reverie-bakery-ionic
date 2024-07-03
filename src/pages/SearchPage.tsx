import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonThumbnail, IonList } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './SearchPage.css';

const SearchPage: React.FC = () => {
  const data = [
    {
      title: "koasong",
      description: "namanya juga koasong",
      image: "https://ionicframework.com/docs/img/demos/card-media.png"
    },
    {
      title: "kek",
      description: "enak pas di mam di ultah",
      image: "https://ionicframework.com/docs/img/demos/card-media.png"
    },
    {
      title: "pasutri",
      description: "ini impian kalean kan sama si dia",
      image: "https://ionicframework.com/docs/img/demos/card-media.png"
    },
    {
      title: "kronologi",
      description: "pokok enak bet dah",
      image: "https://ionicframework.com/docs/img/demos/card-media.png"
    },
    {
      title: "name",
      description: "description",
      image: "https://ionicframework.com/docs/img/demos/card-media.png"
    },
    {
      title: "name",
      description: "description",
      image: "https://ionicframework.com/docs/img/demos/card-media.png"
    },
  ]
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Account</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <h2>hasil dari pencarian kamu</h2>

        {data.map(item => {
          return (
            <IonCard>
            <div className='search-card'> 
                <img 
                    src={item.image} 
                    alt={item.title}
                />
                <div>
                    <IonCardHeader>
                        <IonCardTitle>{item.title}</IonCardTitle>
                        <IonCardSubtitle>{item.title}</IonCardSubtitle> 
                    </IonCardHeader>
                    <IonCardContent>
                        <p>Price: {item.title}</p>
                        <p>Rating: 5</p> 
                    </IonCardContent>
                </div>
            </div>
        </IonCard>
          )
        })}

      </IonContent>
    </IonPage>
  );
};

export default SearchPage;
