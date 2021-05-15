import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../redux/actions';
import Button from '../common/Button/Button';
import './ConfirmOrderModal.scss';

const ConfirmModal = () => {
  const modalIsVisible = useSelector((state) => state.stateUI.confirmModalOrderIsVisible);
  const orderData = useSelector((state) => state.order.orderData);
  const dispatch = useDispatch();
  const confirm = () => dispatch(actions.sendOrder());
  const undo = () => dispatch(actions.hideConfirmModalOrder());
  if (!modalIsVisible) return null;
  if (orderData.id) {
    return <Redirect to={`/order/${orderData.id}`} />;
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
            style={{ background: 'linear-gradient(90deg, #493013 0%, #7B0C3B 100%)' }}
          />
        </span>
      </div>
    </div>
  );
};

export default ConfirmModal;
