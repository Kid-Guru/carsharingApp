import React from 'react';
import './TotalStep.scss';

const TotalStep = () => (
  <div className="totalStep">
    <div className="totalStep__col">
      <p className="totalStep__line">
        <h3 className="totalStep__car">Hyndai, i30 N</h3>
      </p>
      <p className="totalStep__line">
        <span className="totalStep__carNum">K 761 HA 73</span>
      </p>
      <p className="totalStep__line totalStep__fuel">
        <span className="totalStep__fuel_title">Топливо</span>
        100%
      </p>
      <p className="totalStep__line totalStep__timeStart">
        <span className="totalStep__timeStart_title">Доступна с</span>
        12.06.2019 12:00
      </p>
    </div>
    <div className="totalStep__col">
      <div className="totalStep__img" />
    </div>
  </div>
);

export default TotalStep;
