import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/PostForm';
import store from "../src/store/store";
const App = () => {
  return (
    <Provider store={store}>
      <div className={styles.App}>
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
