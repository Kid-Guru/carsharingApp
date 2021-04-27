import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';
import './ModelStep.scss';

const ModelStep = (props) => {
  const { getCarsRequest } = props;
  useEffect(() => {
    getCarsRequest();
  }, [getCarsRequest]);
  return (
    <div className="modelStep">
      <div className="modelStep__filter">
        <label className="radioInput" htmlFor="all">
          <input
            className="radioInput__input"
            id="all"
            type="radio"
            name="modelFilter"
          // value="allModeles"
          // checked={formikModels.values.modelFilter === 'allModeles'}
          // onChange={formikModels.handleChange}
          />
          <span className="radioInput__text">Все модели</span>
        </label>

        <label className="radioInput" htmlFor="cheap">
          <input
            className="radioInput__input"
            id="cheap"
            type="radio"
            name="modelFilter"
          // value="allModeles"
          // checked={formikModels.values.modelFilter === 'allModeles'}
          // onChange={formikModels.handleChange}
          />
          <span className="radioInput__text">Эконом</span>
        </label>
        <label className="radioInput" htmlFor="premium">
          <input
            className="radioInput__input"
            id="premium"
            type="radio"
            name="modelFilter"
          // value="allModeles"
          // checked={formikModels.values.modelFilter === 'allModeles'}
          // onChange={formikModels.handleChange}
          />
          <span className="radioInput__text">Премиум</span>
        </label>
      </div>
      <div className="modelStep__cars">
        <div className="carCard">
          <h5 className="carCard__title">ELANTRA</h5>
          <p className="carCard__price">10 000 - 32 000 ₽</p>
          <img src="" alt="" className="card__pic" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = () => ({

});

const actionsCreators = {
  getCarsRequest: actions.getCarsRequest,
};

export default connect(mapStateToProps, actionsCreators)(ModelStep);
