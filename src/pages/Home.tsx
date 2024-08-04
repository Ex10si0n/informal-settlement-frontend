import { NavLink } from "react-router-dom";
import { Button } from "flowbite-react";
import {version} from "../config.ts";

const Home = () => {

  const styleParagraph = 'text-gray-500 dark:text-gray-400';
  const styleVersion = 'text-sm text-gray-500 dark:text-gray-400';

  return (
    <>
      <div className="p-4 md:ml-64">
        <div className="p-4">
          <div className="text-2xl font-bold py-2">Home</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center md:h-auto h-64 rounded bg-gray-50 dark:bg-gray-800">
              Satellite Image
            </div>
            <div
              className="flex flex-col sm:col-span-2 items-start justify-start p-4 h-full rounded bg-gray-50 dark:bg-gray-800">
              <div className="text-xl">
                Informal Settlements Detection
              </div>
              <div className={styleVersion}>
                Version: {version}
              </div>
              <p className={styleParagraph}>
                This project is developed in the cooperation between Technical University of Munich and World Food
                Program (United Nations) as a part of the master's lab course. We exploit the low-resolution satellite
                images extracted from Copernicus Sentinel-2 to detect the informal settlements in any desired location
                around the globe. We have developed a kit of machine learning models to make the most accurate
                predictions.
              </p>
              <NavLink to='/mapping'>
                <Button color="blue" className="my-2">Go to Mapping</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
