import { useEffect } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import * as actions from '../../../redux/actions';
import { getCars } from '../../../redux/selectors';
import './ModelStep.scss';
import RadioInput from '../../common/RadioInput/RadioInput';

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
        <RadioInput
          name="modelFilter"
          htmlFor="all"
          text="Все модели"
          checked={selectedCategory === null}
          onChange={() => selectCategory({ selectedCategory: null })}
        />

        {categories.map((c) => (
          <RadioInput
            name="modelFilter"
            htmlFor={c.name}
            text={c.name}
            checked={selectedCategory === c.id}
            onChange={() => selectCategory({ selectedCategory: c.id })}
          />
        ))}
      </div>
      <div className="modelStep__cars cars">
        <ul className="cars__list">
          {cars.map((car) => (
            <li
              className={cn('cars__card', { cars__card_selected: car.id === selectedCar.id })}
              key={car.id}
              onClick={() => selectCar(car.id)}
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
  selectCar: actions.handleModelOrder,
};

export default connect(mapStateToProps, actionsCreators)(ModelStep);
