"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TotalTimeSeconds = exports.Position = exports.MaximumHeartRateBpm = exports.HeartRateBpm = exports.DistanceMeters = exports.AverageHeartRateBpm = exports.AltitudeMeters = void 0;
var _xmlParser = require("../parser/xml-parser");
const MaximumHeartRateBpm = exports.MaximumHeartRateBpm = await (0, _xmlParser.returnMetric)("MaximumHeartRateBpm");
const HeartRateBpm = exports.HeartRateBpm = await (0, _xmlParser.returnMetric)("HeartRateBpm");
const AverageHeartRateBpm = exports.AverageHeartRateBpm = await (0, _xmlParser.returnMetric)("AverageHeartRateBpm");
const Position = exports.Position = await (0, _xmlParser.returnMetric)("Position");
const TotalTimeSeconds = exports.TotalTimeSeconds = await (0, _xmlParser.returnMetric)("TotalTimeSeconds");
const DistanceMeters = exports.DistanceMeters = await (0, _xmlParser.returnMetric)("DistanceMeters");
const AltitudeMeters = exports.AltitudeMeters = await (0, _xmlParser.returnMetric)("AltitudeMeters");