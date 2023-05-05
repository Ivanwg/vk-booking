import React from 'react';
import 'normalize.css';
import './assets/styles/main.scss';
import Layout from './components/Layout';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <Layout>
        <Form />
      </Layout>
    </div>
  );
}

export default App;
