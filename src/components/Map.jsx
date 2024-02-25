import styles from './Map.module.css';
import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet';
import DateSlider from './DateSlider';
import { useData } from '../Contexts/DataContext';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';


function Map(){

  const {data} = useData();

  const images = ["amaravathi","amaravathi1"].map((number) => ({
    src: `/${number}.jpg`
  }));

    return(
        <div className={styles.mapContainer}>
          <DateSlider/>

<MapContainer 
center={[ 16.513494544336695, 80.51625036169007]} 
zoom={11} 
scrollWheelZoom={false}
className={styles.map}
>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {data.map((place)=>
  <Marker position={[place.position.lat, place.position.lng]}>
    <Popup>
      
    {place.city}
      <Carousel images={images} style={{ height: 250, width: 250 }} />
      
    </Popup>
  </Marker>)}
</MapContainer>
        </div>
    )
}

export default Map;