import cn from 'classnames';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsRequest } from '../../../redux/cars/actions';
import { getCategoriesRequest } from '../../../redux/categories/actions';
import { handleModelOrder, setCategoryFilter } from '../../../redux/order/actions';
import { getCars } from '../../../redux/selectors';
import RadioInput from '../../common/RadioInput/RadioInput';
import './ModelStep.scss';

const ModelStep = () => {
  const dispatch = useDispatch();
  const selectCategory = (categoryId) => dispatch(setCategoryFilter(categoryId));
  const selectCar = (carId) => dispatch(handleModelOrder(carId));

  const cars = useSelector(getCars);
  const categories = useSelector((state) => state.categories.data);
  const selectedCategory = useSelector((state) => state.order.selectedCategory);
  const selectedCar = useSelector((state) => state.order.carOrder);

  useEffect(() => {
    dispatch(getCarsRequest());
    dispatch(getCategoriesRequest());
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
