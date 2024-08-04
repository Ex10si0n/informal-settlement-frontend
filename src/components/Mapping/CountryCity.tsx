import React, {useEffect} from 'react';
import {Label, Select, TextInput} from "flowbite-react";
import country from 'country-list-js';
import substituteDict from "../../utils/RegionSubstitute.ts";

const countryNames = country.names().map((country) => {
  return substituteDict[country] || country;
}).sort();

interface MappingCountryCityProps {
  onChange: (selectedCountry: string, city: string) => void
}

const CountryCity: React.FC<MappingCountryCityProps> = ({onChange}) => {

  const [selectedCountry, setSelectedCountry] = React.useState<string>('');
  const [city, setCity] = React.useState<string>('');

  useEffect(() => {
    onChange(selectedCountry, city)
  }, [selectedCountry, city, onChange])

  return (
    <div className="grid grid-cols-1 gap-2">
      <div className="max-w-md">

        <div className="space-y-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="countries" value="Selected Country/Region"/>
            </div>
            <Select
              id="countries"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              required
              className="w-full"
            >
              <option value=''>Choose</option>
              {countryNames.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </Select>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="input-city" color="gray" value="City"/>
            </div>
            <TextInput
              id="input-city"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              color="gray"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>

  )
}

export default CountryCity;
