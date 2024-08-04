import React, {useEffect} from 'react';
import {Label, TextInput} from "flowbite-react";

interface MappingCoordinatesProps {
  onChange: (longitude: number, latitude: number) => void
}

const Coordinates: React.FC<MappingCoordinatesProps> = ({onChange}) => {

  const [longitude, setLongitude] = React.useState<number>(0);
  const [latitude, setLatitude] = React.useState<number>(0);

  useEffect(() => {
    onChange(longitude, latitude)
  }, [longitude, latitude, onChange])

  return (
    <div className="grid grid-cols-2 gap-2">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="input-lng" color="gray" value="Longtitude"/>
        </div>
        <TextInput id="input-lng" placeholder="Longtitude" onChange={(e) => {
          setLongitude(parseFloat(e.target.value))
        }} required color="gray"/>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="input-lat" color="gray" value="Latitude"/>
        </div>
        <TextInput id="input-lat" placeholder="Latitude" onChange={(e) => {
          setLatitude(parseFloat(e.target.value))
        }} required color="gray"/>
      </div>
    </div>
  )
}

export default Coordinates;
