import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Login.css';

const Login: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <div className='Login-container'>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Login</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <form>
                        <IonItem>
                            <IonLabel position="floating">Username</IonLabel>
                            <IonInput type="text" name="username"></IonInput>
                        </IonItem>

                        <IonItem>
                            <IonLabel position="floating">Password</IonLabel>
                            <IonInput type="password" name="password"></IonInput>
                        </IonItem>

                        <IonButton type="submit" expand="block">Login</IonButton>
                    </form>
                </div>
            </IonContent>


        </IonPage>
    );
};

export default Login;
