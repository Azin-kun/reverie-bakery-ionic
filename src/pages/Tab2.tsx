import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonChip,
  IonList,
  IonItem,
  IonLabel,
  useIonViewWillEnter
} from '@ionic/react';
import debounce from 'lodash.debounce';
import axios from 'axios';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [category, setCategory] = useState<{ category_id: number, category_name: string }[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const history = useHistory();

  interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    rating: number;
  }

  useIonViewWillEnter(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/login');
    }
  });

  useEffect(() => {
    const fetchCategory = async () => {
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

    fetchCategory();
  }, [history]);

  const handleSearch = useCallback(debounce(async (query: string) => {
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.get(`http://localhost:5000/reverie/product/search?q=${query}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSearchResults(response.data);
      }
    } catch (error) {
      console.error('Error performing search:', error);
    }
  }, 300), []);

  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery, handleSearch]);

  const handleSearchSubmit = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.get(`http://localhost:5000/reverie/product/search?q=${searchQuery}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        history.push('/searchPage', { results: response.data });
      }
    } catch (error) {
      console.error('Error performing search:', error);
    }
  };

  const handleItemClick = async (product: Product) => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.get(`http://localhost:5000/reverie/product/search?q=${product.name}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        history.push('/searchPage', { results: response.data });
      }
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

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
        
        <IonSearchbar
          className='search'
          value={searchQuery}
          onIonChange={e => setSearchQuery(e.detail.value!)}
          onIonClear={() => setSearchQuery('')}
          onIonInput={(e) => setSearchQuery(e.detail.value!)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearchSubmit();
            }
          }}
        ></IonSearchbar>

        <IonList>
          {searchResults.map((product, index) => (
            <IonItem key={index} onClick={() => handleItemClick(product)}>
              <IonLabel>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>

        <IonContent className='ion-padding'>
          <h4>Pernah kamu cari dan tidak pernah kau dapatkan</h4>
          {category.map(cat => (
            <IonChip key={cat.category_id}>{cat.category_name}</IonChip>
          ))}
          <h4>Yang populer nih, gak kyk kamu</h4>
          {category.map(cat => (
            <IonChip key={cat.category_id}>{cat.category_name}</IonChip>
          ))}
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
