import { useEffect, useState } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import KEY_YANDEX_MAP from '../../../api/geocode';

const DEFAULT_CITY = ['54.314192', '48.403123'];

const mapStyle = {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
};

const LocationStepMap = (props) => {
  const { center, points, selectPoint } = props;

  const [API, saveAPI] = useState(null);
  const [centerCoords, setCenterCoords] = useState(DEFAULT_CITY);
  const [coordsPoints, setPointsCoords] = useState([null]);

  useEffect(() => {
    if (API) {
      if (center) {
        API.geocode(center).then((result) => {
          const newCoordCenter = result.geoObjects.get(0).geometry.getCoordinates();
          setCenterCoords(newCoordCenter);
        });
      } else {
        setCenterCoords(DEFAULT_CITY);
      }
    }
  }, [center, API]);
  useEffect(() => {
    if (API) {
      const requests = points.map((point) => API.geocode(point.fullAdress));
      Promise.all(requests)
        .then((responses) => responses.map((r) => r.geoObjects.get(0).geometry.getCoordinates()))
        .then((newCoordsPoints) => setPointsCoords(newCoordsPoints));
    }
  }, [points, API]);
  return (
    <YMaps query={{ apikey: KEY_YANDEX_MAP }}>
      <Map
        state={{ center: centerCoords, zoom: 12 }}
        onLoad={saveAPI}
        modules={['geocode']}
        style={mapStyle}
      >
        {coordsPoints.map((coodrsPoint, i) => (
          <Placemark
            key={coodrsPoint}
            geometry={coodrsPoint}
            options={{
              preset: 'islands#circleIcon',
              iconColor: '#0EC261',
            }}
            onClick={() => selectPoint(points[i].adress)}
          />
        ))}
      </Map>
    </YMaps>
  );
};

export default (LocationStepMap);
