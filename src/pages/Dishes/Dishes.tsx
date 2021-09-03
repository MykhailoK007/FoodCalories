import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { Pagination } from '@material-ui/lab';
import { HeaderWrapper } from '../../components/pageWrappers';
import { BodyWrapper } from '../../components/pageWrappers/bodyWrapper';
import { Dish } from './components/dish';
import { Filter } from './components/filter';
import css from './Dishes.module.scss';
import './Dishes.css';
import { Ingredients } from '../../router/routes';

export const Dishes = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const handleChangeCurrentPage = (e: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };
  const total = useRef(10);
  return (
    <div>
      <HeaderWrapper>
        <span>Dishes</span>
        <Link to={Ingredients} className={css.headerBtn}>
          Add own dish
        </Link>
      </HeaderWrapper>
      <BodyWrapper>
        <header className={css.header}>
          <div className={css.title}>Showing result for " "</div>
          <div className={css.searchWrapper}>
            <span className={css.icon}>
              <AiOutlineSearch />
            </span>
            <input type='text' />
          </div>
        </header>
        <Filter fields={['Popularity', 'My dishes', 'Callories']} />
        <div className={css.bodyWrapper}>
          <Dish caloryPerHundred={200} image='' title='dish 1' description='description 1' />
          <Dish caloryPerHundred={200} image='' title='dish 1' description='description 1' />
          <Dish caloryPerHundred={200} image='' title='dish 1' description='description 1' />
        </div>
        <footer className={css.footer}>
          <div className={css.footerPageInfo}>
            {' '}
            {currentPage} of {total.current}
          </div>
          <div className='dishes--pagination-wrapper'>
            <Pagination page={currentPage} count={100} onChange={handleChangeCurrentPage} />
          </div>
        </footer>
      </BodyWrapper>
    </div>
  );
};
