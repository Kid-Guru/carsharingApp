import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { requestOrder } from '../../redux/viewOrder/actions';
import { getOrderData } from '../../redux/selectors';
import Header from '../Header/Header';
import Total from './Total/Total';
import './StatusOrderPage.scss';

const orderStatusText = {
  new: 'Ваш заказ зарегестрирован',
  confirmed: 'Ваш заказ подтвержден',
  cancelled: 'Ваш заказ отменен',
};

const StatusOrderPage = () => {
  const { id } = useParams();
  const prevIdRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    prevIdRef.current = id;
  });
  const prevId = prevIdRef.current;
  useEffect(() => {
    if (id !== prevId) dispatch(requestOrder(id));
  }, [id]);

  const statusViewOrderData = useSelector((state) => state.viewOrder.status);
  const statusStatusesData = useSelector((state) => state.statuses.status);
  const viewOrderData = useSelector(getOrderData);
  const isCartVisible = useSelector((state) => state.stateUI.viewOrderCartIsVisible);

  if (statusViewOrderData === 'fetching' || statusStatusesData === 'fetching') return null;
  return (
    <div className="page">
      <div className="container container-header">
        <Header />
      </div>
      <div className="line">
        <div className="container line__container">
          {'Заказ номер '}
          {viewOrderData.id}
        </div>
      </div>
      <div className="container container-order">
        <div className="order">
          <div className="order__step order__col">
            <div className="scroll">
              <div className="totalInfo">
                <div className="totalInfo__col">
                  <p className="totalInfo__line">
                    <span className="totalInfo__status">{orderStatusText[viewOrderData.status]}</span>
                  </p>
                  <p className="totalInfo__line">
                    <span className="totalInfo__car">{viewOrderData.carName}</span>
                  </p>
                  <p className="totalInfo__line">
                    <span className="totalInfo__carNum">
                      {viewOrderData.carNumber}
                    </span>
                  </p>
                  <p className="totalInfo__line totalInfo__fuel">
                    <span className="totalInfo__fuel_title">Топливо</span>
                    {viewOrderData.carTank}
                    %
                  </p>
                  <p className="totalInfo__line totalInfo__timeStart">
                    <span className="totalInfo__timeStart_title">Доступна с</span>
                    {viewOrderData.availableFrom}
                  </p>
                </div>
                <div className="totalInfo__col">
                  <div className="totalInfo__img" style={{ backgroundImage: `url(${viewOrderData.picPath})` }} />
                </div>
              </div>
            </div>
          </div>
          <div className="order__delimetr order__col">
            <div className="order__delimetr_border" />
          </div>
          <div className={`order__total order__col ${isCartVisible ? 'order__total_active' : ''}`}>
            <Total />
          </div>
          <div className="order__mobileBtn">
            {/* <ToggleCardBtn /> */}
            {/* <NextStepBtn /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusOrderPage;
