import { connect } from 'react-redux';
import cn from 'classnames';
import * as actions from '../../../redux/actions';
import { getCurrentStep } from '../../../redux/selectors';
import './BreadCrumbs.scss';

const BreadCrumbs = (props) => {
  const { steps, currentStep, setNewStepOrder } = props;
  const getItemClass = (stepOrder) => cn({
    breadcrumbs__item: true,
    breadcrumbs__item_available: steps[stepOrder] === 'available',
    breadcrumbs__item_active: stepOrder === currentStep,
    breadcrumbs__item_disable: steps[stepOrder] === 'blocked',
  });

  return (
    <div className="breadcrumbs">
      <div className="breadcrumbs__container">
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
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  steps: state.order.steps,
  currentStep: getCurrentStep(state),
});

const actionCreators = {
  setNewStepOrder: actions.handleCurrentStepOrder,
};

export default connect(mapStateToProps, actionCreators)(BreadCrumbs);
