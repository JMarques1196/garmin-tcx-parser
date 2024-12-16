import { returnMetric } from "../parser/xml-parser";

export const MaximumHeartRateBpm = await returnMetric("MaximumHeartRateBpm");
export const HeartRateBpm = await returnMetric("HeartRateBpm");
export const AverageHeartRateBpm = await returnMetric("AverageHeartRateBpm");
export const LatitudeDegrees = await returnMetric("LatitudeDegrees");
export const LongitudeDegrees = await returnMetric("LongitudeDegrees");
export const Cadence = await returnMetric("Cadence");
export const TotalTimeSeconds = await returnMetric("TotalTimeSeconds");
export const DistanceMeters = await returnMetric("DistanceMeters");
export const AltitudeMeters = await returnMetric("AltitudeMeters");
export const Calories = await returnMetric("Calories");
export const MaximumSpeed = await returnMetric("MaximumSpeed");
export const Date = await returnMetric("Id");
