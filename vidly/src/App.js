import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './components/home';
import Products from './components/products';
import Dashboard from './components/admin/dashboard';
import Posts from './components/posts';
import ProductDetails from './components/productDetails';
import NotFound from './components/notFound';

import Movies from './components/movies';

//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className='container position-absolute'>
        <div
          className='row-sm mb-2'
          style={{
            height: '50px',
            backgroundColor: 'aqua',
            border: '3px solid green',
            fontSize: '20px',
            textAlign: 'center',
          }}
        >
          <p style={{ marginTop: '5px' }}>
            <strong>
              <i>Vidly </i>
            </strong>
            Application (Modified by:{' '}
            <strong>
              <a
                target='_blank'
                href='https://github.com/TA2LSM'
              >
                TA2LSM
              </a>
            </strong>
            )
          </p>
        </div>

        <Navbar />
        <div>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/products/:id'
              element={<ProductDetails />}
            />
            <Route
              path='/products'
              element={<Products sortBy='newest' />}
            />
            <Route
              // path='/posts/:year?/:month?'
              //react router dom v6'da yukardaki gibi optional parametre yazmaya gerek yok. (regular expression)
              // yıl ya da ay'dan birisi bile yoksa artık hiçbir şey render edilmiyor.
              // optional parameter kullanmak yerine query string kullanmak daha doğru ve kabul
              // gören bir yöntem. ...2018/06?sortBy=newest&approved=true gibi bir url ile gelinirse:
              path='/posts/:year/:month'
              element={<Posts />}
            />
            <Route
              path='/admin'
              element={<Dashboard />}
            />
            <Route
              path='/movies'
              element={<Movies />}
            />
          </Routes>
        </div>
      </main>
    );
  }
}

export default App;
