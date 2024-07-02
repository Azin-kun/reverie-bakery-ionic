import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './Tab1.css';

const Tab1: React.FC = () => {
  const data = [
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
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonItem>
          <IonLabel className='ion-text-center'>
            Reverie Bakery
          </IonLabel>
        </IonItem>

        <Swiper
          slidesPerView={3}
          spaceBetween={2}
          pagination={{clickable: true,}}
          className="mySwiper"
        >
          {data.map(item => (
          <SwiperSlide>
            <IonCard>
              <IonCardHeader>
              <span className="badge">5,0</span> 
              <img src="https://ionicframework.com/docs/img/demos/card-media.png" alt="GoRide" />
              <IonCardTitle>item.title</IonCardTitle>
              <IonCardSubtitle>item.description</IonCardSubtitle>
              </IonCardHeader>
            </IonCard>
          </SwiperSlide>

        ))}
        </Swiper>



        

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
