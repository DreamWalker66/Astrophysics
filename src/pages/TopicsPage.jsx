import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

import universeImg from '../assets/universe.jpg';
import starsImg from '../assets/stars.jpg';
import planetsImg from '../assets/planets.jpg';
import blackholeImg from '../assets/blackhole.jpg';
import exoplanetsImg from '../assets/exoplanets.jpg';
import timeImg from '../assets/time.jpg';

const topics = [
  {
    id: 'universe',
    title: 'Структура Вселенной',
    description: 'Галактики, кластеры, тёмная материя и крупномасштабная структура.',
    image: universeImg
  },
  {
    id: 'stars',
    title: 'Жизненный цикл звёзд',
    description: 'Как рождаются, живут и умирают звёзды: от протозвёзд до сверхновых.',
    image: starsImg
  },
  {
    id: 'planets',
    title: 'Планеты и экзопланеты',
    description: 'Планеты Солнечной системы и их аналоги в других звёздных системах.',
    image: planetsImg
  },
  {
    id: 'blackholes',
    title: 'Чёрные дыры',
    description: 'Сверхмассивные объекты с гравитацией, из которой ничто не может вырваться.',
    image: blackholeImg
  },
  {
    id: 'exoplanets',
    title: 'Поиск жизни',
    description: 'Методы поиска экзопланет и признаки возможной жизни вне Земли.',
    image: exoplanetsImg
  },
  {
    id: 'time',
    title: 'Пространство и время',
    description: 'Идеи Эйнштейна, искривление времени и пространство-время в астрофизике.',
    image: timeImg
  }
];

const TopicsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <div className="topics-page">
        <h1 className="topics-header">🌟Темы для изучения</h1>
        <div className="topics-grid">
          {topics.map((topic) => (
            <div key={topic.id} className="topic-card">
              <img src={topic.image} alt={topic.title} className="topic-image" />
              <h2>{topic.title}</h2>
              <p>{topic.description}</p>
              <button
                className="navigate-button"
                onClick={() => navigate(`/topics/${topic.id}`)}
              >
                Изучать тему
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TopicsPage;
