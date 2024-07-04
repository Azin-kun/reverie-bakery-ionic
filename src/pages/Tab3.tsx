// Tab3.tsx
import React, { useState, useEffect } from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
} from '@ionic/react';

const Tab3: React.FC = () => {
    const [cartItems, setCartItems] = useState<any[]>(JSON.parse(localStorage.getItem('cart') || '[]'));

    const handleCheckout = () => {
        // Implement checkout logic here
        
        // Clear cart items from localStorage
        localStorage.removeItem('cart');
        
        // Clear cart items from state
        setCartItems([]);

        alert('Checkout completed! Cart cleared.');
    };

    // Use useEffect to update cartItems from localStorage changes
    useEffect(() => {
        const updateCartItems = () => {
            const updatedCartItems = JSON.parse(localStorage.getItem('cart') || '[]');
            setCartItems(updatedCartItems);
        };

        // Call updateCartItems initially and whenever localStorage changes
        updateCartItems();

        // Listen for changes to localStorage
        window.addEventListener('storage', updateCartItems);

        return () => {
            // Clean up the event listener when component unmounts
            window.removeEventListener('storage', updateCartItems);
        };
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Cart</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonList>
                    {cartItems.length === 0 ? (
                        <IonItem>
                            <IonLabel>No items in cart</IonLabel>
                        </IonItem>
                    ) : (
                        cartItems.map((item: any, index: number) => (
                            <IonItem key={index}>
                                <IonLabel>{item.name}</IonLabel>
                                <IonLabel slot="end">${item.price}</IonLabel>
                            </IonItem>
                        ))
                    )}
                </IonList>
                {cartItems.length > 0 && (
                    <IonButton expand="full" onClick={handleCheckout}>
                        Checkout
                    </IonButton>
                )}
            </IonContent>
        </IonPage>
    );
};

export default Tab3;
