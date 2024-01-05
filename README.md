# Garmin .tcx parser
Get activity metrics from Garmin .tcx files to use on your projects.

Available Metrics: 
- Heart Rate
- Maximum Heart Rate Bpm
- Average Heart Rate Bpm
- Position
- Total Time in seconds
- Distance in meters
- Altitude in meters
- Calories
- Maximum Speed


## Install
`npm i garmin-tcx-parser`

## How to use 
Place your .tcx file inside the Public folder of your project.

<img width="289" alt="Captura de Tela 2023-12-13 às 15 00 29" src="https://github.com/JMarques1196/garmin-tcx-parser/assets/64154960/35380216-5411-4630-aef7-a999bc3dea91">
<br>
<br>
Import metrics:
<br>
<br>

```
 import { 
    
    MaximumHeartRateBpm,
    
    HeartRateBpm,
    
    AverageHeartRateBpm,
    
    Position,
    
    TotalTimeSeconds,
    
    DistanceMeters,
    
    AltitudeMeters,

    Calories,

    Maximum Speed
    
  } from "garmin-tcx-parser/src/index";
```
