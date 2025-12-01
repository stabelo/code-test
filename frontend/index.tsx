// eslint-disable-next-line import/no-unassigned-import
import './index.scss';
import { Header } from './src/components/header/Header';
import { AboutPage } from './src/pages/about/AboutPage';
import { ImplementationPage } from './src/pages/implementation/ImplementationPage';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const root = document.querySelector('#app');

if (!root) {
  throw new Error('Could not find app root element.');
}

createRoot(root).render(
  <BrowserRouter>
    <>
      <Header />
      <main>
        <Routes>
          <Route
            element={<Navigate to="/about" />}
            path="/"
          />
          <Route
            element={<AboutPage />}
            path="/about"
          />
          <Route
            element={<ImplementationPage />}
            path="/implementation"
          />
        </Routes>
      </main>
    </>
  </BrowserRouter>,
);
