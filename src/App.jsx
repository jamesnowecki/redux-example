import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';

import Posts from './components/Posts';
import PostForm from './components/PostForm';


const App = () => {
  return (
    <div className={styles.App}>
      <PostForm />
      <hr />
      <Posts />
    </div>
  );
}

export default App;
