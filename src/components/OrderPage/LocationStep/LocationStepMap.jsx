import { useEffect, useState } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const LocationStepMap = (props) => {
  const { city, points } = props;
  // const ymaps = React.createRef(null);
  // const [isYmapsAvailable, setTrue] = useState([]);
  const [API, saveAPI] = useState(null);
  const [centerCoords, setCenterCoords] = useState(['54.314192', '48.403123']);
  const [mapState, setMapState] = useState();
  const [coodrsPoints, setPointsCoords] = useState([null]);
  useEffect(() => {
    if (API) {
      API.geocode(city).then((result) => {
        const newCoordCity = result.geoObjects.get(0).geometry.getCoordinates();
        setCenterCoords(newCoordCity);
        // setMapState({center: newCoordCity, zoom: 12});
      });
      const requests = points.map((point) => API.geocode(`${city} ${point.item}`));
      Promise.all(requests)
        .then((responses) => responses.map((r) => r.geoObjects.get(0).geometry.getCoordinates()))
        .then((coordsPoints) => setPointsCoords(coordsPoints));
    };
  }, [city]);
  // const defaultCoors = ['54.314192', '48.403123'];
  // const showCoord = cityOrder.isValid ? coordsCities[cityOrder.id] : defaultCoors;
  return (
    <YMaps query={{ apikey: '2106c918-2fec-450a-b18f-d2a580f03f17' }}>
      <Map
        state={{ center: centerCoords, zoom: 12 }}
        // instanceRef={ymaps}
        onLoad={(instance) => saveAPI(instance)}
        modules={['geocode']}
        width="100%"
        height="100%"
      >
        {coodrsPoints.map(coodrsPoint => {
          return (<Placemark
            // key={`point_${mark.id}`}
            geometry={coodrsPoint}
            options={{
              preset: 'islands#circleIcon',
              iconColor: '#0EC261',
            }}
          />)
        }
        )}

      </Map>

    </YMaps>
  )
};

export default (LocationStepMap);


// import { YMaps, Map } from "react-yandex-maps";

// const mapState = {
//   center: [48.704272, 65.60203],
//   zoom: 4
// };

// function App() {
//   const mapRef = React.createRef(null);

//   return (
//     <div className="App">
//       <YMaps>
//         <Map
//           // Создаем ссылку на инстанс мапа, чтобы использовать его
//           instanceRef={mapRef}
//           state={mapState}
//           // Используем коллбэк функцию при загрузке карты
//           onLoad={ymaps => getRegions(ymaps)}
//           // Подключаем модули регионов и ObjectManager
//           modules={["borders", "ObjectManager"]}
//         />
//       </YMaps>
//     </div>
//   );
// }
