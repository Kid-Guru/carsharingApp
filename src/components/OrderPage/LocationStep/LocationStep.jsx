import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import InputField from '../../common/InputField/InputField';
import * as actions from '../../../redux/actions';
import './LocationStep.scss';

const LocationStep = (props) => {
  const {
    getCitiesRequest,
    getPointsRequest,
    cities,
    points,
  } = props;

  const citiesNames = cities.map((c) => c.name);
  const pointsNames = points.map(p => p.address);

  useEffect(() => {
    getCitiesRequest();
    getPointsRequest();
  }, [getCitiesRequest, getPointsRequest]);

  const formik = useFormik({
    initialValues: {
      cityOrder: '',
      pointOrder: '',
    },
    validate: (values) => {
      const errors = {};
      if (!values.cityOrder) {
        errors.cityOrder = 'Введите город';
      } else if (!citiesNames.includes(values.cityOrder)) {
        errors.cityOrder = 'В данном городе нет точек выдачи';
      }
      if (!values.pointOrder) {
        errors.pointOrder = 'Введите пункт выдачи';
      } else if (!pointsNames.includes(values.pointOrder)) {
        errors.pointOrder = 'В данном городе нет точек выдачи';
      }
      return errors;
    },
  });
  console.log(formik.touched)

  return (
    <div className="locationStep">
      <form action=" " className="locationStep__form form">
        <InputField
          id="citi"
          labelText="Город"
          placeholder="Начните вводить город"
          autocompleteData={citiesNames}
          name="cityOrder"
          value={formik.values.cityOrder}
          onChange={formik.handleChange}
          errors={formik.errors.cityOrder}
          touched={formik.touched.cityOrder}
        />
        <InputField
          id="place"
          labelText="Пункт выдачи"
          placeholder="Начните вводить пункт ..."
          autocompleteData={pointsNames}
          name="pointOrder"
          value={formik.values.pointOrder}
          onChange={formik.handleChange}
          errors={formik.errors.pointOrder}
          touched={formik.touched.pointOrder}
        />
      </form>
      <div className="locationStep__map">карта</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cities: state.order.cities,
  points: state.order.points,
});

const actionCreators = {
  getCitiesRequest: actions.getCitiesRequest,
  getPointsRequest: actions.getPointsRequest,
};

export default connect(mapStateToProps, actionCreators)(LocationStep);
