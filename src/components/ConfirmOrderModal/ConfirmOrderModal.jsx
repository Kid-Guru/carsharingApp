import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../redux/actions';
import { hideConfirmModalOrder } from '../../redux/UI/actions';
import Button from '../common/Button/Button';
import './ConfirmOrderModal.scss';

const ConfirmModal = () => {
  const modalIsVisible = useSelector((state) => state.stateUI.confirmModalOrderIsVisible);
  const idViewOrder = useSelector((state) => state.viewOrder.data?.id);
  const statusViewOrderData = useSelector((state) => state.viewOrder.status);
  const dispatch = useDispatch();
  const confirm = () => dispatch(actions.sendOrder());
  const undo = () => dispatch(hideConfirmModalOrder());
  if (!modalIsVisible) return null;
  if (statusViewOrderData === 'received') {
    return <Redirect to={`/order/${idViewOrder}`} />;
  }
  return (
    <div className="modal">
      <div className="modal__container">
        <p className="modal__text">Подтвердить заказ</p>
        <span className="modal__button">
          <Button onClickHandle={confirm} text="Подтвердить" />
        </span>
        <span className="modal__button">
          <Button
            onClickHandle={undo}
            text="Вернуться"
            red
          />
        </span>
      </div>
    </div>
  );
};

export default ConfirmModal;
