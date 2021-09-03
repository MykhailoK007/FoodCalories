import React, { useState } from 'react';
import Calendar from 'react-calendar';

import styles from './TopBar.module.scss';

const TopBar = () => {
  const [currentDay, setCurrentDay] = useState<Date>();
  return (
    <div>
      <div className={styles.wrapper}>
        <span>{currentDay?.getDay()}</span>
        <Calendar onClickDay={value => setCurrentDay(value)} />
      </div>
    </div>
  );
};
export default TopBar;
