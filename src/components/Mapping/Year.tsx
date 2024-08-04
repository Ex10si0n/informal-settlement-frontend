import React from "react";
import { Label, Select } from "flowbite-react";

const startYear = 1950;
const endYear = new Date().getFullYear();
const years = Array.from(new Array(endYear - startYear + 1), (_val, index) => endYear - index);

interface MappingYearProps {
  onSelectionChange: (selectedYear: number) => void;
}

const Year: React.FC<MappingYearProps> = ({ onSelectionChange }) => {
  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectionChange(Number(event.target.value));
  };

  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor="input-year" color="gray" value="Year" />
      </div>
      <Select id="input-year" required onChange={handleYearChange}>
        {years.map((year, index) => (
          <option key={index} value={year}>{year}</option>
        ))}
      </Select>
    </div>
  );
}

export default Year;
