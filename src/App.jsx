// Контроллер
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TopicsPage from './pages/TopicsPage';
import TopicDetailPage from './pages/TopicDetailPage';

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
      </Routes>
    </Router>
  );
};

export default App;
