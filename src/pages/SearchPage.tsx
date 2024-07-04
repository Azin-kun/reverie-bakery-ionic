import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';
import { useLocation, useHistory } from 'react-router-dom'; 
import './SearchPage.css';

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

  console.log(data); 

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
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Hasil Pencarian</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <h2>Hasil dari pencarian kamu</h2>

        {data.length > 0 ? data.map((item, index) => (
          <IonCard key={index} onClick={() => handleProductClick(item)}>
            <div className='search-card'>
              <img
                src={`http://localhost:5000/image/${item.image}`}
                alt={item.name}
              />
              <div>
                <IonCardHeader>
                  <IonCardTitle>{item.name}</IonCardTitle>
                  <IonCardSubtitle>{item.description}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>Price: {item.price}</p>
                  <p>Rating: {item.rating}</p>
                </IonCardContent>
              </div>
            </div>
          </IonCard>
        )) : <p>No results found</p>}
      </IonContent>
    </IonPage>
  );
};

export default SearchPage;
