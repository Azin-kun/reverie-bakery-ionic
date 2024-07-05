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
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react'; // Import IonCardContent only once

import { useHistory } from 'react-router-dom';
import { lockClosedOutline, mailOutline } from 'ionicons/icons';
import axios from 'axios';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
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
        setError('Token is undefined');
      }
    } catch (error) {
      setError('Login error');
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonGrid className="ion-text-center">
          <IonRow>
            <IonCol size="12">
              <IonImg className="login-logo" src="/assets/logo.png" alt="Logo" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonCard className="login-card">
                <IonCardHeader>
                  <IonCardTitle>Login</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <form onSubmit={handleLogin}>
                    <IonItem>
                      <IonLabel position="floating">Email</IonLabel>
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
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
