import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import * as actions from '../../../redux/actions';
import { getCars } from '../../../redux/selectors';
import './ModelStep.scss';
import RadioInput from '../../common/RadioInput/RadioInput';

const ModelStep = () => {
  const dispatch = useDispatch();
  const selectCategory = (categoryId) => dispatch(actions.setCategoryFilter(categoryId));
  const selectCar = (carId) => dispatch(actions.handleModelOrder(carId));

  const cars = useSelector(getCars);
  const categories = useSelector((state) => state.order.carsCategories.categories);
  const selectedCategory = useSelector((state) => state.order.carsCategories.selectedCategory);
  const selectedCar = useSelector((state) => state.order.carOrder);

  useEffect(() => {
    const getCarsRequest = () => dispatch(actions.getCarsRequest());
    const getCategoriesRequest = () => dispatch(actions.getCategoriesRequest());
    getCarsRequest();
    getCategoriesRequest();
  }, [dispatch]);
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
            key={c.id}
            name="modelFilter"
            htmlFor={c.name}
            text={c.name}
            checked={selectedCategory === c.id}
            onChange={() => selectCategory({ selectedCategory: c.id })}
          />
        ))}
      </div>
      <div className="modelStep__cars cars">
        <div className="scroll">
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
    </div>
  );
};

export default (ModelStep);
