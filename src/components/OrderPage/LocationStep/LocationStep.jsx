import { useEffect } from 'react';
import { connect } from 'react-redux';
import InputField from '../../common/InputField/InputField';
import * as actions from '../../../redux/actions';
import './LocationStep.scss';

const LocationStep = (props) => {
  const { getCitiesRequest } = props;
  useEffect(() => {
    getCitiesRequest();
  }, [getCitiesRequest]);
  return (
    <div className="locationStep">
      <form action="" className="locationStep__form form">
        <InputField id="citi" labelText="Город" placeholder="Начните вводить город" autocompleteData={['Город1', 'Город2']} />
        <InputField id="place" labelText="Пункт выдачи" placeholder="Начните вводить пункт ..." autocompleteData={['улица1', 'улица2']} />
      </form>
      <div className="locationStep__map">карта</div>
    </div>
  );
};

const mapStateToProps = (state) => ({

});

const actionCreators = {
  getCitiesRequest: actions.getCitiesRequest,
};

export default connect(mapStateToProps, actionCreators)(LocationStep);
