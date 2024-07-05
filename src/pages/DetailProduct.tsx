import React from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
} from '@ionic/react';
import { useLocation, useHistory } from 'react-router-dom';
import './DetailProduct.css';

interface Product {
    product_id: number;
    name: string;
    description: string;
    image: string;
    price: number | string;
    rating: number;
    stock: number;
    category_id: number;
}

const DetailProduct: React.FC = () => {
    const location = useLocation<{ product: Product }>();
    const history = useHistory();
    const product = location.state?.product;

    if (!product) {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Product Not Found</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <p>Product not found. Please go back and select a product.</p>
                    <IonButton onClick={() => history.goBack()}>Go Back</IonButton>
                </IonContent>
            </IonPage>
        );
    }

    const handleAddToCart = () => {
        try {
            const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
            const updatedCart = [...existingCart, {
                product_id: product.product_id,
                name: product.name,
                price: Number(product.price),
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
            <IonContent fullscreen>
                <div className="page-content">
                    <div className="image-container">
                        <img
                            src={`http://localhost:5000/image/${product.image}`}
                            alt={product.name}
                            className="product-image"
                        />
                    </div>
                    <div className="details-container">
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${Number(product.price).toFixed(2)}</p>
                        <p>Rating: {product.rating}</p>
                        <p>Stock: {product.stock}</p>
                        <p>Category ID: {product.category_id}</p>
                    </div>
                    <div className="button-container">
                        <IonButton className="full-width-button" expand="block" onClick={handleAddToCart}>
                            Add to Cart
                        </IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default DetailProduct;
