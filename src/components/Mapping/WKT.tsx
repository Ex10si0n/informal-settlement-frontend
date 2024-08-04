import React from 'react';
import {Label, TextInput} from "flowbite-react";

interface MappingWKTProps {
  onChange: (wkt: string) => void
}

const WKT: React.FC<MappingWKTProps> = ({ onChange }) => {

  const [wkt, setWKT] = React.useState<string>('');
  React.useEffect(() => {
    onChange(wkt)
  }, [wkt, onChange])

  return (
    <div className="grid grid-cols-2 gap-2">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="input-lat-br" color="gray" value="Well Known Text (WKT)"/>
        </div>
        <TextInput id="input-lat-br" placeholder="Text" onChange={(e) => {
          setWKT(e.target.value)
        }} required color="gray"/>
      </div>
    </div>
  )
}

export default WKT;
