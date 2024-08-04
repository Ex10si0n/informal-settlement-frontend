import React, {useEffect} from 'react';
import {Label, Select } from "flowbite-react";
import {models, modes} from "../../config.ts";


interface MappingModelModeProps {
  onSelectionChange: (model: string, mode: string) => void
}

const ModelMode: React.FC<MappingModelModeProps> = ({ onSelectionChange }) => {

  const [selectedModel, setSelectedModel] = React.useState(models[0]);
  const [selectedMode, setSelectedMode] = React.useState(modes[0]);

  useEffect(() => {
    onSelectionChange(selectedModel, selectedMode)
  }, [selectedModel, selectedMode, onSelectionChange])

  return (
    <div className="flex space-x-4">
      <div className="flex-1">
        <div className="mb-2 block">
          <Label htmlFor="model" value="Choose Model"/>
        </div>
        <Select id="model" value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)} required>
          {models.map((model, index) => (
            <option key={index} value={model}>{model}</option>
          ))}
        </Select>
      </div>

      <div className="flex-1">
        <div className="mb-2 block">
          <Label htmlFor="mode" value="Choose Mode"/>
        </div>
        <Select id="mode" value={selectedMode}
                onChange={(e) => setSelectedMode(e.target.value)} required>
          {modes.map((mode, index) => (
            <option key={index} value={mode}>{mode}</option>
          ))}
        </Select>
      </div>
    </div>

  )
}

export default ModelMode;
