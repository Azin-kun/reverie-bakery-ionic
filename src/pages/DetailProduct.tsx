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
    IonButton,
} from '@ionic/react';
import { useLocation } from 'react-router-dom';
import './DetailProduct.css';

interface Product {
    product_id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    rating: number;
    stock: number;
    category_id: number;
}

const DetailProduct: React.FC = () => {
    const location = useLocation<{ product: Product }>();
    const product = location.state?.product;

    if (!product) {
        return <p>Product not found</p>;
    }

    const handleAddToCart = () => {
        try {
            const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
            const updatedCart = [...existingCart, {
                product_id: product.product_id,
                name: product.name,
                price: product.price,
                quantity: 1, // Example: add one product
            }];
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            console.log('Product added to cart:', product.name);
            alert('Product added to cart successfully');
        } catch (error) {
            console.error('Error adding to cart:', error);
            alert('Failed to add product to cart');
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Product Detail</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard>
                    <img
                        src={`http://localhost:5000/image/${product.image}`}
                        alt={product.name}
                    />
                    <IonCardHeader>
                        <IonCardTitle>{product.name}</IonCardTitle>
                        <IonCardSubtitle>{product.description}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <p>Price: ${product.price}</p>
                        <p>Rating: {product.rating}</p>
                        <p>Stock: {product.stock}</p>
                        <p>Category ID: {product.category_id}</p>
                        <IonButton onClick={handleAddToCart}>Add to Cart</IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default DetailProduct;
