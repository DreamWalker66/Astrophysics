import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles.css';

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="page-container">
        <main className="content">
          <div className="info-container">
            <h2>О нас</h2>
            <p>
              Наш проект создан с целью помочь людям изучать астрофизику увлекательно и визуально.
              Мы используем передовые веб-технологии, включая 3D-визуализацию, чтобы сделать сложные космические явления доступными каждому.
            </p>
            <p>
              Веб-приложение разработано энтузиастами с любовью к космосу и науке. Мы стремимся
              вдохновить новых исследователей, учащихся и просто любопытных пользователей на познание Вселенной.
            </p>
            <p>
              P.S. В тексте "Мы" и подобное только для вида. На самом деле я работаю один, конечно.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
