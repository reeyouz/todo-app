import {
  DEVELOPMENT,
  TESTING,
  PRODUCTION,
  LOCAL,
} from "../constants/environments";

export type EnvironmentType =
  | typeof DEVELOPMENT
  | typeof TESTING
  | typeof PRODUCTION
  | typeof LOCAL;
