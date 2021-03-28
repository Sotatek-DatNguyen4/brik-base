import React from 'react';
import Header from './header';
import './style.scss';

export const DefaultLayout = props => {
  const { children } = props;
  return (
    <div className="default-layout">
      <Header />
      <div className="content">
        {children}
      </div>
    </div>
  );
};
