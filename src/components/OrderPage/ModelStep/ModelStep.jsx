import { useEffect } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import * as actions from '../../../redux/actions';
import { getCars } from '../../../redux/selectors';
import './ModelStep.scss';

const ModelStep = (props) => {
  const {
    cars,
    categories,
    selectedCategory,
    selectedCar,
    getCarsRequest,
    getCategoriesRequest,
    selectCategory,
    selectCar,
  } = props;
  useEffect(() => {
    getCarsRequest();
    getCategoriesRequest();
  }, [getCarsRequest, getCategoriesRequest]);
  return (
    <div className="modelStep">
      <div className="modelStep__filter">
        <label className="radioInput" htmlFor="all">
          <input
            className="radioInput__input"
            id="all"
            type="radio"
            name="modelFilter"
            checked={selectedCategory === null}
            onChange={() => selectCategory({ selectedCategory: null })}
          />
          <span className="radioInput__text">Все модели</span>
        </label>

        {categories.map((c) => (
          <label className="radioInput" htmlFor={c.name} key={c.id}>
            <input
              className="radioInput__input"
              id={c.name}
              type="radio"
              name="modelFilter"
              checked={selectedCategory === c.id}
              onChange={() => selectCategory({ selectedCategory: c.id })}
            />
            <span className="radioInput__text">{c.name}</span>
          </label>
        ))}
      </div>
      <div className="modelStep__cars">
        <ul className="cars__list">
          {cars.map((car) => (
            <li
              className={cn('cars__card', { cars__card_selected: car.id === selectedCar.id })}
              key={car.id}
              onClick={() => selectCar({ id: car.id })}
              role="presentation"
            >
              <h5 className="cars__cardTitle">{car.model}</h5>
              <p className="cars__cardPrice">{car.price}</p>
              <div className="cars__cardPic" style={{ backgroundImage: `url(${car.picPath})` }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cars: getCars(state),
  categories: state.order.carsCategories.categories,
  selectedCategory: state.order.carsCategories.selectedCategory,
  selectedCar: state.order.carOrder,
});

const actionsCreators = {
  getCarsRequest: actions.getCarsRequest,
  getCategoriesRequest: actions.getCategoriesRequest,
  selectCategory: actions.setCategoryFilter,
  selectCar: actions.setOrderCar,
};

export default connect(mapStateToProps, actionsCreators)(ModelStep);
