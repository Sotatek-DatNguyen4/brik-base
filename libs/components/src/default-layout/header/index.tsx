import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../../../../assets/images/logo.png';
import HeaderUser from './header-user';
import { UserState } from '@brik-base/interfaces';
import { get } from 'lodash';
import './style.scss';

const Header = props => {
  const { data = {} } = useSelector((state: UserState) => state.user);
  const user = get(data, 'user', {});
  return (
    <div className="header">
      <Link
        className="header__logo"
        to="/"
      >
        <img src={logo} alt="logo" />
      </Link>
      <HeaderUser user={user} className="header__user" />
    </div>
  );
};

export default Header;
