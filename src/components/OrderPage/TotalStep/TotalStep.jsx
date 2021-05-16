import { useSelector } from 'react-redux';
import { getSelectedCarForTotalStep, getAvailableFrom } from '../../../redux/selectors';
import './TotalStep.scss';

const TotalStep = () => {
  const selectedCar = useSelector(getSelectedCarForTotalStep);
  const availableFrom = useSelector(getAvailableFrom);
  return (
    <div className="totalStep">
      <div className="totalStep__col">
        <p className="totalStep__line">
          <span className="totalStep__car">{selectedCar.name}</span>
        </p>
        <p className="totalStep__line">
          <span className="totalStep__carNum">
            {selectedCar.number}
          </span>
        </p>
        <p className="totalStep__line totalStep__fuel">
          <span className="totalStep__fuel_title">Топливо</span>
          {selectedCar.tank}
          %
        </p>
        <p className="totalStep__line totalStep__timeStart">
          <span className="totalStep__timeStart_title">Доступна с</span>
          {availableFrom}
        </p>
      </div>
      <div className="totalStep__col">
        <div className="totalStep__img" style={{ backgroundImage: `url(${selectedCar.picPath})` }} />
      </div>
    </div>
  );
};

export default TotalStep;
