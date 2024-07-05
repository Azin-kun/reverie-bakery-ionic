import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol, IonAvatar } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Tab4.css';

const Tab4: React.FC = () => {
  const [userData, setUserData] = useState<any>(null); // State to hold user data
  const history = useHistory();

  // Function to fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await axios.get('http://localhost:5000/reverie/user', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUserData(response.data);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle error (e.g., redirect to login if unauthorized)
      }
    };

    fetchUserData();
  }, []); // Empty dependency array ensures this runs only once on component mount

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token from local storage
    history.push('/login'); // Redirect to login page
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid className="ion-text-center ion-padding">
          <IonRow>
            <IonCol>
              <IonAvatar>
                <img src={userData?.avatarUrl ?? 'https://via.placeholder.com/150'} alt="User Avatar" />
              </IonAvatar>
            </IonCol>
          </IonRow>
          {userData && (
            <>
              <IonRow>
                <IonCol>
                  <h2>{userData.name}</h2>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <p>Email: {userData.email}</p>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <p>Phone: {userData.phone}</p>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <p>Address: {userData.address}</p>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <p>Member Since: {new Date(userData.createdAt).toLocaleDateString()}</p>
                </IonCol>
              </IonRow>
              {/* Add more user details as needed */}
              <IonRow>
                <IonCol>
                  <IonButton expand="block" onClick={handleLogout}>
                    Logout
                  </IonButton>
                </IonCol>
              </IonRow>
            </>
          )}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
