import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import './BreadCrumbs.scss';

const BreadCrumbs = (props) => {
  const { stepStatus } = props;
  const getItemClass = (stepOrder) => cn({
    breadcrumbs__item: true,
    breadcrumbs__item_available: stepStatus[stepOrder] === 'fullfiled',
    breadcrumbs__item_active: stepStatus[stepOrder] === 'filling',
    breadcrumbs__item_disable: stepStatus[stepOrder] === 'blank',
  });

  return (
    <div className="breadcrumbs">
      <div className="breadcrumbs__container">
        <ul className="breadcrumbs__list">
          <li className={getItemClass('location')}>
            <Link to="gblabla" className="breadcrumbs__link">Местоположение</Link>
            {/* <a href="#" className="breadcrumbs__link">Местоположение</a> */}
          </li>
          <li className={getItemClass('model')}>
            <Link to="gblabla" className="breadcrumbs__link">Модель</Link>
            {/* <a href="#" className="breadcrumbs__link">Модель</a> */}
          </li>
          <li className={getItemClass('extra')}>
            <Link to="gblabla" className="breadcrumbs__link">Дополнительно</Link>
            {/* <a href="#" className="breadcrumbs__link">Дополнительно</a> */}
          </li>
          <li className={getItemClass('total')}>
            <Link to="gblabla" className="breadcrumbs__link">Итого</Link>
            {/* <a href="#" className="breadcrumbs__link">Итого</a> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  stepStatus: state.order.steps.status,
});

const actionCreators = {
  // getCityRequest: actions.getCityRequest,
};

export default connect(mapStateToProps, actionCreators)(BreadCrumbs);
