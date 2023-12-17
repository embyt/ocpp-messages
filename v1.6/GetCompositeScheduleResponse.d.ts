/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface GetCompositeScheduleResponse {
  status: "Accepted" | "Rejected";
  connectorId?: number;
  scheduleStart?: string;
  chargingSchedule?: {
    duration?: number;
    startSchedule?: string;
    chargingRateUnit: "A" | "W";
    chargingSchedulePeriod: {
      startPeriod: number;
      limit: number;
      numberPhases?: number;
      [k: string]: unknown;
    }[];
    minChargingRate?: number;
    [k: string]: unknown;
  };
}
