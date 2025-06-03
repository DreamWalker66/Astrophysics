// Контроллер
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TopicsPage from './pages/TopicsPage';
import TopicDetailPage from './pages/TopicDetailPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Главная страница */}
        <Route path="/" element={<MainPage />} />
        {/* Страница с темами */}
        <Route path="/topics" element={<TopicsPage />} />
        {/* Выбранная тема */}
        <Route path="/topics/:id" element={<TopicDetailPage />} />
        {/* Контактная страница */}
        <Route path="/contact" element={<ContactPage />} />
        {/* Страница о нас */}
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
