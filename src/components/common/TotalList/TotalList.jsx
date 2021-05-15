import './TotalList.scss';

const Total = (props) => {
  const { rowsData, price, button } = props;

  return (
    <div className="total">
      <h4 className="total__title">Ваш заказ</h4>
      <div className="total__order">

        {rowsData.map((d, i) => {
          if (!d.isFullfilled) return null;
          return (
            <p className="total__item">
              <span className="total__item-title">{d.title}</span>
              <span className="total__item-dots" />
              <span className="total__item-value_container">
                {d.value.map((v) => <span className="total__item-value">{v}</span>)}
              </span>
            </p>
          );
        })}

      </div>
      {price.isShowing && (
        <div className="total__price">
          <span className="total__price-title">Цена: </span>
          <span className="total__price-number">{price.text}</span>
        </div>
      )}
      {button}
    </div>
  );
};

export default Total;
