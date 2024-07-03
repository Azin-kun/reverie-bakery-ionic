// src/pages/Tab1.tsx
import React, { useEffect, useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  useIonViewWillEnter
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Tab1.css';
import axios from 'axios';

const Tab1: React.FC = () => {
  const [products, setProducts] = useState([]);
  const history = useHistory();

  useIonViewWillEnter(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/login');
    }
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await axios.get('http://localhost:5000/reverie/product', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setProducts(response.data);
        }
      } catch (error: any) {
        console.error('Error fetching products:', error);
        if (axios.isAxiosError(error) && error.response && error.response.status === 401) {
          history.push('/login');
        }
      }
    };

    fetchProducts();
  }, [history]);

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
          <IonLabel className="ion-text-center">Reverie Bakery</IonLabel>
        </IonItem>

        <IonCard>
          <img
            alt="Silhouette of mountains"
            src="https://ionicframework.com/docs/img/demos/card-media.png"
          />
          <IonCardHeader>
            <IonCardTitle>Produk baru nichhhhh</IonCardTitle>
            <IonCardSubtitle>awas aja ga beli klean, enak banget sumpahh, cobain deh</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>

        <h4 className="ion-text-center">produk kami menarik ni, ga kyk kamu</h4>
        <Swiper slidesPerView={1} navigation={true} modules={[Navigation]}>
          {products.map((product: any, index: number) => (
            <SwiperSlide key={index} className="offer">
              <IonCard className="card-container">
                <div className="card-text">
                  <IonCardHeader>
                    <IonCardTitle>{product.name}</IonCardTitle>
                    <IonCardSubtitle>{product.description}</IonCardSubtitle>
                  </IonCardHeader>
                </div>
                <div>
                  <img src={`http://localhost:5000/image/${product.image}`} alt={product.name}  className="card-image"/>
                </div>
              </IonCard>
            </SwiperSlide>
          ))}
        </Swiper>

        <h4 className="ion-text-center">si paling pemes</h4>
        <Swiper slidesPerView={3} spaceBetween={2} pagination={{ clickable: true }} className="mySwiper">
          {products.map((product: any, index: number) => (
            <SwiperSlide key={index}>
              <IonCard>
                <IonCardHeader>
                  <span className="badge">{product.rating}</span>
                  <img src={`http://localhost:5000/image/${product.image}`} alt={product.name} />
                  <IonCardTitle>{product.name}</IonCardTitle>
                  <IonCardSubtitle>{product.description}</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </SwiperSlide>
          ))}
        </Swiper>

        <h4 className="ion-text-center">si paling murce</h4>
        <Swiper slidesPerView={3} spaceBetween={2} pagination={{ clickable: true }} className="mySwiper">
          {products.map((product: any, index: number) => (
            <SwiperSlide key={index}>
              <IonCard>
                <IonCardHeader>
                  <span className="badge">{product.rating}</span>
                  <img src={`http://localhost:5000/image/${product.image}`} alt={product.name} />
                  <IonCardTitle>{product.name}</IonCardTitle>
                  <IonCardSubtitle>{product.description}</IonCardSubtitle>
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
