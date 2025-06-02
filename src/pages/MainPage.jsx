import React from 'react';
import InfoSection from '../components/InfoSection';
import Card from '../components/Card';
import Button from '../components/Button';
import '../styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SolarSystem from '../components/SolarSystem';

import starImg from '../assets/star.jpg';
import planetImg from '../assets/planet.jpg';
import galaxyImg from '../assets/galaxy.jpg';

const MainPage = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        {/* Визуализация космоса */}
        <section className="space-visualization">
          <SolarSystem />
        </section>

        {/* Общая информация */}
        <InfoSection />

        {/* Карточки */}
        <section className="cards-section">
          <Card
            title="Звёзды"
            description="Массивные светящиеся шары из газа, излучающие свет и тепло."
            image={starImg}
          />
          <Card
            title="Планеты"
            description="Небесные тела, вращающиеся вокруг звёзд, потенциально пригодные для жизни."
            image={planetImg}
          />
          <Card
            title="Млечный Путь"
            description="Наша галактика — дом для Солнца и миллиардов звёзд."
            image={galaxyImg}
          />
        </section>

        {/* Кнопка перехода */}
        <section className="button-section">
          <Button text="Перейти к темам для изучения" to="/topics" />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
