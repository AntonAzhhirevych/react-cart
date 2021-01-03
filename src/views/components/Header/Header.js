import React from 'react';
import { Link } from 'react-router-dom';
import TotalPrice from '../TotalPrice/TotalPriceContainer';
import TotalItemsCart from '../TotalItemsCart/TotalItemsCartContainer';
import styles from './Header.module.css';
import Cart from '../../pages/Cart/components/Cart/Cart';

const Header = () => (
  <header className={styles.headerFixed}>
    <div className={styles.headerLimiter}>
      <div className={styles.headerInner}>
        <nav>
          <ul className={styles.list}>
            <li className={styles.item}>
              <TotalPrice />
            </li>
            <li className={styles.item}>
              <Link to="/cart">
                <Cart />
                <TotalItemsCart />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
