// src/pages/Login.tsx
import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  useIonViewWillEnter
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const history = useHistory();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/reverie/login', {
        email,
        password,
      });
      const token = response.data.token;
      if (token) {
        localStorage.setItem('token', token);
        history.push('/tab1');
      } else {
        console.error('Token is undefined');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  useIonViewWillEnter(() => {
    const token = localStorage.getItem('token');
    if (token) {
      history.push('/tab1');
    }
  });

  return (
    <IonPage>
      <IonContent>
        <div className="Login-container">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Login</IonTitle>
            </IonToolbar>
          </IonHeader>
          <form onSubmit={handleLogin}>
            <IonItem>
              <IonLabel position="floating">email</IonLabel>
              <IonInput
                type="text"
                value={email}
                onIonChange={(e) => setEmail(e.detail.value!)}
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput
                type="password"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)}
              ></IonInput>
            </IonItem>

            <IonButton type="submit" expand="block">
              Login
            </IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
 