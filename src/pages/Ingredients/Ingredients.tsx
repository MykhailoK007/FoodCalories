import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
// import IngredientItem from './components/IngredientsItem/IngredientsItem';
import css from './Ingredients.module.scss';
// import Modal from '../../components/modal/Modal';
// import ViewMode from './components/viewMode/ViewMode';
// import EditMode from './components/editMode/EditMode';
// import { InputProps } from '../../models/formik';
// import { NewDish } from './components/newDish';
import { getIngredients } from '../../store/actions/ingredient.actions';

const tableHeadData = ['', 'Name', 'Description', 'Calories/100g', 'Actions'];
// const inputFields: InputProps[] = [
//   { name: 'name', label: 'Name' },
//   { name: 'calories', label: 'Calories/1g' },
//   { name: 'image', label: 'Image url' },
//   { name: 'description', label: 'Description', type: 'text' }
// ];
// new comment
// sssss

const Ingredient = () => {
  // const [showModal, setShowModal] = useState(false);
  // const [isViewMode, setIsViewMode] = useState(false);
  // const [isCreateMode, setCreateMode] = useState(false);
  // const [isCreateDishMode, setCreateDishMode] = useState(false);
  const dispatch = useDispatch();
  // const toggleShowModal = useCallback(() => {
  //   setShowModal(prev => !prev);
  // }, [setShowModal]);
  // const isShowViewModal = useCallback(
  //   value => {
  //     setShowModal(true);
  //     setIsViewMode(value);
  //     setCreateMode(false);
  //   },
  //   [setShowModal, setIsViewMode]
  // );
  useEffect(() => {
    dispatch(getIngredients.request());
  }, []);
  // const activateCreateMode = useCallback(() => {
  //   setShowModal(true);
  //   setIsViewMode(false);
  //   setCreateMode(true);
  // }, [setCreateMode, setIsViewMode, setShowModal]);
  // const toggleCreateNewDishMode = useCallback(() => {
  //   setCreateDishMode(prev => !prev);
  // }, [setCreateDishMode]);
  return (
    <div>
      <header className={css.headerContent}>Ingredients</header>
      <div className={css.contentBody}>
        <header>
          {/* <button className={css.btnGreen} onClick={activateCreateMode}>
            + Add new
          </button> */}
          {/* <button className={css.btnPurple} onClick={toggleCreateNewDishMode}>
            + Add new Dish
          </button> */}
        </header>
        <div className={css.table}>
          <div className={cn(css.tableRow, css.tableHeadRow)}>
            {tableHeadData.map(el => (
              <div className={css.tableRowData}>{el}</div>
            ))}
          </div>
          {/* <IngredientItem handleClickField={isShowViewModal} /> */}
        </div>
      </div>
      {/* <Modal
        condition={showModal}
        handleClick={toggleShowModal}
        isViewMode={isViewMode}
        isCreateMode={isCreateMode}
      >
        {isViewMode ? (
          <ViewMode />
        ) : (
          <EditMode inputFields={inputFields} isCreateNewIngredient={isCreateMode} />
        )}
      </Modal>
      <Modal condition={isCreateDishMode} header={false}>
        <NewDish hideModal={toggleCreateNewDishMode} />
      </Modal> */}
    </div>
  );
};
export default Ingredient;
