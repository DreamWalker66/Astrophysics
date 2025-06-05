import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles.css';

const ContactPage = () => {
    return (
        <>
            <Header />
            <div className="page-container">
                <h1>Связаться с нами</h1>
                <p>Если у вас есть вопросы, предложения или замечания, не стесняйтесь связаться с нами.</p>

                <div className="contact-info">
                    <p><strong>Email:</strong> astrophysics.study@example.com</p>
                    <p><strong>Телефон:</strong> +996 (703) 6**-*59</p>
                    <p><strong>Адрес:</strong> Галактика Млечный Путь, Земля, Континент Евразия</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;
