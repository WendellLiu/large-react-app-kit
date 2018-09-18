import React from 'react';
import incstr from 'incstr';
import cssTestStyles from './CssTest.m.css';
import cssTest2Styles from './CssTest2.m.css';

window.incstr = incstr;

const CssTest = () => (
  <React.Fragment>
    <div className={cssTestStyles.container}>
      <div className={cssTestStyles.card} />
    </div>
    <div className={cssTest2Styles.container}>
      <div className={cssTest2Styles.card} />
    </div>
  </React.Fragment>
);

export default CssTest;
