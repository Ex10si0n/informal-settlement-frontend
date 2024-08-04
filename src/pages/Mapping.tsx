import {useState} from 'react';
import CountryCity from '../components/Mapping/CountryCity.tsx';
import Coordinates from '../components/Mapping/Coordinates.tsx';
import BoundingBox from '../components/Mapping/BoundingBox.tsx';
import WKT from '../components/Mapping/WKT.tsx';
import Map from '../components/Mapping/Map.tsx';
import Year from "../components/Mapping/Year.tsx";
import ModelMode from "../components/Mapping/ModelMode.tsx";
import MappingClusterPlot from "../components/Mapping/ClusterPlot.tsx";
import {defaultMappingModeBy} from "../config.ts";

const Mapping = () => {

  const styleSubtitle = 'text-sm text-gray-600 dark:text-white mt-4 mb-1';
  const styleButtonL = 'px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white';
  const styleButtonM = 'px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white';
  const styleButtonR = 'px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white';
  const styleButtonLSelected = 'px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 dark:ring-blue-500 dark:text-white z-10 ring-2 ring-blue-700'
  const styleButtonMSelected = 'px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:ring-blue-500 dark:text-white z-10 ring-2 ring-blue-700'
  const styleButtonRSelected = 'px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-blue-700 dark:ring-blue-500 dark:text-white z-10 ring-2 ring-blue-700'

  const [visibleComponent, setVisibleComponent] = useState<string>(defaultMappingModeBy);
  const [model, setModel] = useState<string>('');
  const [mode, setMode] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [longitude, setLongitude] = useState<number>(0);
  const [latitude, setLatitude] = useState<number>(0);
  const [boxTLLng, setBoxTLLng] = useState<number>(0);
  const [boxTLLat, setBoxTLLat] = useState<number>(0);
  const [boxBRLng, setBoxBRLng] = useState<number>(0);
  const [boxBRLat, setBoxBRLat] = useState<number>(0);
  const [wkt, setWKT] = useState<string>('');
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [download, setDownload] = useState<boolean>(false);


  const updateCountryCity = (country: string, city: string) => {
    setCountry(country);
    setCity(city);
  }

  const updateModelMode = (model: string, mode: string) => {
    setModel(model);
    setMode(mode);
  }

  const updateCoordinates = (longitude: number, latitude: number) => {
    setLongitude(longitude);
    setLatitude(latitude);
  }

  const updateBoxCoordinates = (boxTLLng: number, boxTLLat: number, boxBRLng: number, boxBRLat: number) => {
    setBoxTLLng(boxTLLng);
    setBoxTLLat(boxTLLat);
    setBoxBRLng(boxBRLng);
    setBoxBRLat(boxBRLat);
  }

  const updateWKT = (wkt: string) => setWKT(wkt);

  const updateYear = (year: number) => setYear(year);

  const requestContent = {
    search_by: visibleComponent,
    queries: {
      country,
      city,
      longitude,
      latitude,
      boxTLLng,
      boxTLLat,
      boxBRLng,
      boxBRLat,
      wkt
    },
    model: {
      model,
      mode
    },
    image: {
      year,
      download
    }
  };

  return (
    <>
      <div className="p-4 md:ml-64">
        <div className="p-4">
          <div className="text-2xl font-bold py-2">Mapping</div>
          <div className={styleSubtitle}>SEARCH BY</div>

          <div className="inline-flex rounded-md shadow-sm mt-2" role="group">
            <button
              type="button"
              className={visibleComponent === 'city_name' ? styleButtonLSelected : styleButtonL}
              onClick={() => setVisibleComponent('city_name')}
            >
              City Name
            </button>
            <button
              type="button"
              className={visibleComponent === 'coordinates' ? styleButtonMSelected : styleButtonM}
              onClick={() => setVisibleComponent('coordinates')}
            >
              Coordinates
            </button>
            <button
              type="button"
              className={visibleComponent === 'bounding_box' ? styleButtonMSelected : styleButtonM}
              onClick={() => setVisibleComponent('bounding_box')}
            >
              Bounding Box
            </button>
            <button
              type="button"
              className={visibleComponent === 'wkt' ? styleButtonRSelected : styleButtonR}
              onClick={() => setVisibleComponent('wkt')}
            >
              Well Known Text (WKT)
            </button>
          </div>

          {/*TODO: request API to return bounding box satellite image based on user input types*/}

          <form className="max-w-xl">
            <div className={styleSubtitle}>QUERY</div>
            {visibleComponent === 'city_name' && <CountryCity onChange={updateCountryCity}/>}
            {visibleComponent === 'coordinates' && <Coordinates onChange={updateCoordinates}/>}
            {visibleComponent === 'bounding_box' && <BoundingBox onChange={updateBoxCoordinates}/>}
            {visibleComponent === 'wkt' && <WKT onChange={updateWKT}/>}
          </form>


          <div className={styleSubtitle}>MAPPING SELECTION PREVIEW</div>
          <Map/>

          <div className={styleSubtitle}>TIME</div>
          <form className="w-1/6">
            <Year onSelectionChange={updateYear}/>
          </form>

          <div className={styleSubtitle}>MODEL</div>
          <form className="max-w-md">
            <ModelMode onSelectionChange={updateModelMode}/>
          </form>

          <MappingClusterPlot/>

          <div className={styleSubtitle}>DOWNLOAD</div>

          <label className="inline-flex items-center cursor-pointer mt-2">
            <input type="checkbox" onChange={(e) => setDownload(e.target.checked)} className="sr-only peer"/>
            <div
              className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Download Satellite Image</span>
          </label>

          <pre className="mt-4 bg-slate-50 p-4">
            {JSON.stringify(requestContent, null, 2)}
          </pre>

        </div>
      </div>
    </>
  );
}

export default Mapping;
