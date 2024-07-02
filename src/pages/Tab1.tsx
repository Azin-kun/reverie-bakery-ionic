import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './Tab1.css';

const Tab1: React.FC = () => {
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

        <IonCard>
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
          <IonCardHeader>
            <IonCardTitle>Produk baru nichhhhh</IonCardTitle>
            <IonCardSubtitle>awas aja ga beli klean, enak banget sumpahh, cobain deh</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>


        <h4 className='ion-text-center'>produk kami menarik ni, ga kyk kamu</h4>
        <Swiper
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}>
          <SwiperSlide className='offer'>
            <IonCard className="card-container">
              <div className="card-text">
                <IonCardHeader>
                  <IonCardTitle>aaaaaaaaaaaaa</IonCardTitle>
                  <IonCardSubtitle>sdfsdfsdfsdfsdfsdfsdfsdfsdf</IonCardSubtitle>
                </IonCardHeader>
              </div>
              <div>
                <img src='https://ionicframework.com/docs/img/demos/card-media.png' className="card-image" />
              </div>
            </IonCard>
          </SwiperSlide>
          <SwiperSlide>
            <IonCard className="card-container">
              <div className="card-text">
                <IonCardHeader>
                  <IonCardTitle>aaaaaaaaaaaaa</IonCardTitle>
                  <IonCardSubtitle>sdfsdfsdfsdfsdfsdfsdfsdfsdf</IonCardSubtitle>
                </IonCardHeader>
              </div>
              <div>
                <img src='https://ionicframework.com/docs/img/demos/card-media.png' className="card-image" />
              </div>
            </IonCard>
          </SwiperSlide>

        </Swiper>

        <h4 className='ion-text-center'>si paling pemes</h4>
        <Swiper
          slidesPerView={3}
          spaceBetween={2}
          pagination={{ clickable: true, }}
          className="mySwiper"
        >
          {data.map(item => (
            <SwiperSlide>
              <IonCard>
                <IonCardHeader>
                  <span className="badge">5,0</span>
                  <img src="https://ionicframework.com/docs/img/demos/card-media.png" alt="GoRide" />
                  <IonCardTitle>{item.title}</IonCardTitle>
                  <IonCardSubtitle>{item.description}</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </SwiperSlide>

          ))}
        </Swiper>


        <h4 className='ion-text-center'>si paling murce</h4>
        <Swiper
          slidesPerView={3}
          spaceBetween={2}
          pagination={{ clickable: true, }}
          className="mySwiper"
        >
          {data.map(item => (
            <SwiperSlide>
              <IonCard>
                <IonCardHeader>
                  <span className="badge">5,0</span>
                  <img src="https://ionicframework.com/docs/img/demos/card-media.png" alt="GoRide" />
                  <IonCardTitle>{item.title}</IonCardTitle>
                  <IonCardSubtitle>{item.description}</IonCardSubtitle>
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
