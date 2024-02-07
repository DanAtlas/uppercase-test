import React, { type FC } from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';
import type { HeaderProps } from './Header.types';

const Header: FC<HeaderProps> = ({
  onSubmit,
  onSearch
}) => {
  return (
    <div className={styles['header']}>
      <div>
        <Image src="/uppersetup-logo.jpg" alt="Uppersetup Logo" width={208} height={53} />
      </div>
      <form className={styles['header__search']} onSubmit={onSubmit}>
        <input type="search" placeholder="Search.." onChange={onSearch} />
      </form>
      <div className={styles['header__user']}>
        <Image src="/user-icon.png" alt="User icon" width={25} height={25} />
        <span className={styles['header__user-copy']}>Your name</span>
      </div>
    </div>
  );
}

export default Header;
