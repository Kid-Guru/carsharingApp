import Button from '../../common/Button/Button';
import './Total.scss';

const Total = () => (
  <div className="total">
    <h4 className="total__title">Ваш заказ</h4>
    <div className="total__order">
      <p className="total__item">
        <span className="total__item-title">Пункт выдачи</span>
        <span className="total__item-value">Ульяновск, Нариманова 42</span>
      </p>
      <p className="total__item">
        <span className="total__item-title">Пункт выдачи</span>
        <span className="total__item-value">Ульяновск, Нариманова 42</span>
      </p>
      <p className="total__item">
        <span className="total__item-title">Длительность аренды</span>
        <span className="total__item-value">Ульяновск, Нариманова 42</span>
      </p>
      <div className="total__price">Цена</div>
      <Button text="Слеудющий шаг" />
    </div>
  </div>
);

export default Total;
