import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
} from '@ionic/react';
import { useLocation, useHistory } from 'react-router-dom';
import './SearchPage.css';
import { IoStar } from "react-icons/io5";

interface Product {
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
}

const SearchPage: React.FC = () => {
  const history = useHistory();
  const location = useLocation<{ results: Product[] }>();
  const data = location.state?.results || [];

  const handleProductClick = (product: Product) => {
    history.push('/DetailProduct', { product });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hasil Pencarian</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Hasil Pencarian</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid className="ion-no-padding">
          <IonRow>
            <IonCol size="12" className="ion-text-center">
              <h2 className="search-header">Hasil dari pencarian kamu</h2>
            </IonCol>
          </IonRow>

          {data.length > 0 ? (
            data.map((item, index) => (
              <IonRow key={index} className="ion-margin-bottom">
                <IonCol size="12" size-md="8" offset-md="2">
                  <IonCard
                    onClick={() => handleProductClick(item)}
                    className="product-card"
                  >
                    <img
                      src={`http://localhost:5000/image/${item.image}`}
                      alt={item.name}
                    />
                    <div className="product-card-details">
                      <IonCardHeader>
                        <IonCardTitle className="product-card-title">
                          {item.name}
                        </IonCardTitle>
                        <IonCardSubtitle className="product-card-description">
                          {item.description}
                        </IonCardSubtitle>
                      </IonCardHeader>
                      <IonCardContent className="product-card-info">
                        <IonText className="product-card-price">
                          Price: {item.price}
                        </IonText>
                        <div className="product-card-rating">
                          <p>Rating: {item.rating} <IoStar /></p>
                        </div>
                      </IonCardContent>
                    </div>
                  </IonCard>
                </IonCol>
              </IonRow>
            ))
          ) : (
            <IonRow className="ion-text-center ion-margin-top">
              <IonCol>No results found</IonCol>
            </IonRow>
          )}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SearchPage;
