import React, { useState } from 'react';
import { get } from 'lodash';
import { HeaderUserProps } from '@brik-base/interfaces';
import './style.scss';

const HeaderUser = (props: HeaderUserProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const { user = {}, className = '' } = props;
  const fullName = get(user, 'full_name', '');

  return (
    <div className={`header-user ${className}`}>
      <div className={`header-user__username`} onClick={toggleMenu}>
        {fullName}
      </div>
      {showMenu && (
        <div className="header-user__menu">
          <div className="header-user__menu-item">
            logout
          </div>
        </div>
      )}
    </div>
  );
};
export default HeaderUser;
