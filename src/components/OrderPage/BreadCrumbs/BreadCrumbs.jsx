import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { handleCurrentStepOrder } from '../../../redux/order/actions';
import { getCurrentStep } from '../../../redux/selectors';
import './BreadCrumbs.scss';

const BreadCrumbs = () => {
  const steps = useSelector((state) => state.order.steps);
  const currentStep = useSelector(getCurrentStep);
  const dispatch = useDispatch();
  const setNewStepOrder = (newStep) => dispatch(handleCurrentStepOrder(newStep));
  const getItemClass = (stepOrder) => cn({
    breadcrumbs__item: true,
    breadcrumbs__item_available: steps[stepOrder] === 'available',
    breadcrumbs__item_active: stepOrder === currentStep,
    breadcrumbs__item_disable: steps[stepOrder] === 'blocked',
  });

  return (
    <ul className="breadcrumbs__list">
      <li className={getItemClass('location')}>
        <button onClick={() => setNewStepOrder(0)} className="breadcrumbs__btn" type="button">Местоположение</button>
      </li>
      <li className={getItemClass('model')}>
        <button onClick={() => setNewStepOrder(1)} className="breadcrumbs__btn" type="button">Модель</button>
      </li>
      <li className={getItemClass('params')}>
        <button onClick={() => setNewStepOrder(2)} className="breadcrumbs__btn" type="button">Дополнительно</button>
      </li>
      <li className={getItemClass('total')}>
        <button onClick={() => setNewStepOrder(3)} className="breadcrumbs__btn" type="button">Итого</button>
      </li>
    </ul>
  );
};

export default (BreadCrumbs);
