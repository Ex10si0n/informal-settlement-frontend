# Informal Settlement Mapping Frontend

To develop, please run the follow command under Node 18 or higher:

```bash
yarn dev
```

Project configuration file located at: `./ism.config.js`

The configuration JSON structure shows as follows:

| Key                  | Value                                        | Instructions                                        | Type             |
|----------------------|----------------------------------------------|-----------------------------------------------------|------------------|
| version              | v0.1                                         | Model version displayed at Home page.               | String           |
| models               | - Random Forest Classifier <br> - V-Net      | List of models.                                     | Array of Strings |
| modes                | - cluster_1 <br> - cluster_2 <br> - Medellin | List of modes (random forest classifier exclusive). | Array of Strings |
| defaultMappingModeBy | city_name                                    | Mapping page default mode.                          | String           |

Example `ism.config.js`: 

```json
{
  "version": "v0.1",
  "models": [
    "Random Forest Classifier",
    "V-Net"
  ],
  "modes": [
    "cluster_1",
    "cluster_2",
    "Medellin"
  ],
  "defaultMappingModeBy": "city_name"
}
```
