import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';

import Posts from './components/Posts';

const App = () => {
  return (
    <div className={styles.App}>
      <Posts />
    </div>
  );
}

export default App;
