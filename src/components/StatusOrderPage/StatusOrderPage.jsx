import Header from '../Header/Header';

const StatusOrderPage = () => {
  const currentStep = useSelector((state) => state.order.steps.currentStep);
  // const isCartVisible = useSelector((state) => state.stateUI.cartIsVisible);

  return (
    <div className="page">
      <div className="container container-header">
        <Header />
      </div>
      <div className="orderNumber">
        <div className="orderNumber__container">
          Заказ номер RU58491823
        </div>
      </div>
      <div className="container container-order">
        <div className="order">
          <div className="order__step order__col">
            <div className="scroll">
              <div className="totalInfo">
                <div className="totalInfo__col">
                  <p className="totalInfo__line">
                    <span className="totalInfo__status">Ваш заказ подтвержден</span>
                  </p>
                  <p className="totalInfo__line">
                    <span className="totalInfo__car">{selectedCar.name}</span>
                  </p>
                  <p className="totalInfo__line">
                    <span className="totalInfo__carNum">
                      {selectedCar.number}
                    </span>
                  </p>
                  <p className="totalInfo__line totalInfo__fuel">
                    <span className="totalInfo__fuel_title">Топливо</span>
                    {selectedCar.tank}
          %
        </p>
                  <p className="totalInfo__line totalInfo__timeStart">
                    <span className="totalInfo__timeStart_title">Доступна с</span>
                    {availableFrom}
                  </p>
                </div>
                <div className="totalInfo__col">
                  <div className="totalInfo__img" style={{ backgroundImage: `url(${selectedCar.picPath})` }} />
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
            <ToggleCardBtn />
            <NextStepBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusOrderPage;
