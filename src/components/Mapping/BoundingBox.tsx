import React, {useEffect} from 'react';
import {Label, TextInput} from "flowbite-react";

interface MappingBoundingBoxProps {
  onChange: (longitudeTL: number, latitudeTL: number, longitudeBR: number, latitudeBR: number) => void
}

const BoundingBox: React.FC<MappingBoundingBoxProps> = ({onChange}) => {

  const [longitudeTL, setLongitudeTL] = React.useState<number>(0);
  const [latitudeTL, setLatitudeTL] = React.useState<number>(0);
  const [longitudeBR, setLongitudeBR] = React.useState<number>(0);
  const [latitudeBR, setLatitudeBR] = React.useState<number>(0);

  useEffect(() => {
    onChange(longitudeTL, latitudeTL, longitudeBR, latitudeBR)
  }, [longitudeTL, latitudeTL, longitudeBR, latitudeBR, onChange])

  return (
    <div className="grid grid-cols-2 gap-2">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="input-lng-tl" color="gray" value="Top-left Longtitude"/>
        </div>
        <TextInput id="input-lng-tl" placeholder="Longtitude" onChange={(e) => {
          setLongitudeTL(parseFloat(e.target.value))
        }} required color="gray"/>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="input-lat-tl" color="gray" value="Top-left Latitude"/>
        </div>
        <TextInput id="input-lat-tl" placeholder="Latitude" onChange={(e) => {
          setLatitudeTL(parseFloat(e.target.value))
        }} required color="gray"/>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="input-lng-br" color="gray" value="Bottom-right Longtitude"/>
        </div>
        <TextInput id="input-lng-br" placeholder="Longtitude" onChange={(e) => {
          setLongitudeBR(parseFloat(e.target.value))
        }} required color="gray"/>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="input-lat-br" color="gray" value="Bottom-right Latitude"/>
        </div>
        <TextInput id="input-lat-br" placeholder="Lattitude" onChange={(e) => {
          setLatitudeBR(parseFloat(e.target.value))
        }} required color="gray"/>
      </div>
    </div>
  )
}

export default BoundingBox;
