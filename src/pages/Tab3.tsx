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
    IonListHeader,
    IonFooter,
    IonInput,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonIcon,
} from '@ionic/react';
import { trashOutline } from 'ionicons/icons';

const CartPage: React.FC = () => {
    const [cartItems, setCartItems] = useState<any[]>(JSON.parse(localStorage.getItem('cart') || '[]'));

    const handleCheckout = () => {
        localStorage.removeItem('cart');
        setCartItems([]);
        alert('Checkout completed!');
    };

    const handleRemoveItem = (index: number) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
        localStorage.setItem('cart', JSON.stringify(newCartItems));
    };

    const handleDecreaseQuantity = (index: number) => {
        const newCartItems = [...cartItems];
        if (newCartItems[index].quantity > 1) {
            newCartItems[index].quantity--;
            setCartItems(newCartItems);
            localStorage.setItem('cart', JSON.stringify(newCartItems));
        }
    };

    const handleIncreaseQuantity = (index: number) => {
        const newCartItems = [...cartItems];
        newCartItems[index].quantity++;
        setCartItems(newCartItems);
        localStorage.setItem('cart', JSON.stringify(newCartItems));
    };

    // CSS styling
    useEffect(() => {
        const styleElement = document.createElement('style');
        styleElement.innerText = `
            .cart-list {
                padding: 0 16px;
            }
            
            .list-header {
                font-size: 1.2em;
                font-weight: bold;
                margin-bottom: 10px;
            }
            
            .cart-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 16px;
                border-bottom: 1px solid #ddd;
            }
            
            .cart-item:last-child {
                border-bottom: none;
            }
            
            .cart-card {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: start;
                padding: 16px;
                background-color: #f9f9f9;
                border-radius: 10px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            
            .item-actions {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-top: 10px;
            }
            
            .summary {
                padding: 0 16px;
                margin-top: 20px;
            }
            
            .checkout-button {
                margin: 16px;
               
                color: #fff;
                font-size: 1.2em;
            }
        `;
        document.head.appendChild(styleElement);
        return () => {
            document.head.removeChild(styleElement);
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
                <IonList className="cart-list">
                    <IonListHeader className="list-header">Ongoing orders</IonListHeader>
                    {cartItems.length === 0 ? (
                        <IonItem>
                            <IonLabel>No items in cart</IonLabel>
                        </IonItem>
                    ) : (
                        cartItems.map((item: any, index: number) => (
                            <IonItem key={index} className="cart-item">
                                <IonCard className="cart-card">
                                    <IonCardHeader>
                                        <IonCardTitle>{item.name}</IonCardTitle>
                                        <IonCardSubtitle>Rp. {item.price}</IonCardSubtitle>
                                    </IonCardHeader>
                                    <div className="item-actions">
                                        <IonButton fill="outline" size="small" onClick={() => handleDecreaseQuantity(index)}>
                                            -
                                        </IonButton>
                                        <IonLabel>{item.quantity}</IonLabel>
                                        <IonButton fill="outline" size="small" onClick={() => handleIncreaseQuantity(index)}>
                                            +
                                        </IonButton>
                                        <IonButton fill="clear" onClick={() => handleRemoveItem(index)}>
                                            <IonIcon icon={trashOutline} />
                                        </IonButton>
                                    </div>
                                </IonCard>
                            </IonItem>
                        ))
                    )}
                </IonList>
                <div className="summary">
                    <IonItem>
                        <IonLabel>Total Harga</IonLabel>
                        <IonLabel slot="end">Rp. {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</IonLabel>
                    </IonItem>
                </div>
            </IonContent>
            {cartItems.length > 0 && (
                <IonFooter>
                    <IonButton expand="block" onClick={handleCheckout} className="checkout-button">
                        Checkout
                    </IonButton>
                </IonFooter>
            )}
        </IonPage>
    );
};

export default CartPage;
