import { useDispatch, useSelector } from 'react-redux';
import Button from '../../common/Button/Button';
import TotalList from '../../common/TotalList/TotalList';
import * as actions from '../../../redux/actions';
import {
  // getIsNextStepAvailable,
  // getIsFinalStep,
  // getPriceTotalData,
  // getTotalRowsData,
  priceOrderSelector,
  orderListRowsSelector,
} from '../../../redux/selectors';
// import './Total.scss';

// const BUTTON_TEXT = ['Выбрать модель', 'Дополнительно', 'Итого', 'Заказать'];
// const TOTAL_ROW_TEXT = ['Пункт выдачи', 'Модель', 'Длительность аренды', 'Тариф', 'Полный бак', 'Детское кресло', 'Правый руль'];
const ButtonProps = () => {
  // const dispatch = useDispatch();

  const handleClickNewStep = () => {
    // if (!isFinalStep) {
    //   dispatch(actions.handleCurrentStepOrder(currentStepOrder + 1));
    // } else {
    //   dispatch(actions.showConfirmModalOrder());
    // }
  };

  return (
    <Button
      text="Отменить"
      isFullWidth
      // isDisabled={!(isNextStepAvailable || isFinalStep)}
      red
      onClickHandle={handleClickNewStep}
    />
  );
};

const Total = () => {
  const totalRowsData = useSelector(orderListRowsSelector);
  const price = useSelector(priceOrderSelector);

  return (
    <TotalList rowsData={totalRowsData} price={price} button={<ButtonProps />} />
  );
};

export default Total;
