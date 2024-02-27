// charge point requests
import { AuthorizeRequest } from "./Authorize";
import { AuthorizeResponse } from "./AuthorizeResponse";
import { BootNotificationRequest } from "./BootNotification";
import { BootNotificationResponse } from "./BootNotificationResponse";
import { CancelReservationRequest } from "./CancelReservation";
import { CancelReservationResponse } from "./CancelReservationResponse";
import { ChangeAvailabilityRequest } from "./ChangeAvailability";
import { ChangeAvailabilityResponse } from "./ChangeAvailabilityResponse";
import { ChangeConfigurationRequest } from "./ChangeConfiguration";
import { ChangeConfigurationResponse } from "./ChangeConfigurationResponse";
import { ClearCacheRequest } from "./ClearCache";
import { ClearCacheResponse } from "./ClearCacheResponse";
import { ClearChargingProfileRequest } from "./ClearChargingProfile";
import { ClearChargingProfileResponse } from "./ClearChargingProfileResponse";
import { DataTransferRequest } from "./DataTransfer";
import { DataTransferResponse } from "./DataTransferResponse";
import { DiagnosticsStatusNotificationRequest } from "./DiagnosticsStatusNotification";
import { DiagnosticsStatusNotificationResponse } from "./DiagnosticsStatusNotificationResponse";
import { FirmwareStatusNotificationRequest } from "./FirmwareStatusNotification";
import { FirmwareStatusNotificationResponse } from "./FirmwareStatusNotificationResponse";
import { GetCompositeScheduleRequest } from "./GetCompositeSchedule";
import { GetCompositeScheduleResponse } from "./GetCompositeScheduleResponse";
import { GetConfigurationRequest } from "./GetConfiguration";
import { GetConfigurationResponse } from "./GetConfigurationResponse";
import { GetDiagnosticsRequest } from "./GetDiagnostics";
import { GetDiagnosticsResponse } from "./GetDiagnosticsResponse";
import { GetLocalListVersionRequest } from "./GetLocalListVersion";
import { GetLocalListVersionResponse } from "./GetLocalListVersionResponse";
import { HeartbeatRequest } from "./Heartbeat";
import { HeartbeatResponse } from "./HeartbeatResponse";
import { MeterValuesRequest } from "./MeterValues";
import { MeterValuesResponse } from "./MeterValuesResponse";
import { RemoteStartTransactionRequest } from "./RemoteStartTransaction";
import { RemoteStartTransactionResponse } from "./RemoteStartTransactionResponse";
import { RemoteStopTransactionRequest } from "./RemoteStopTransaction";
import { RemoteStopTransactionResponse } from "./RemoteStopTransactionResponse";
import { ReserveNowRequest } from "./ReserveNow";
import { ReserveNowResponse } from "./ReserveNowResponse";
import { ResetRequest } from "./Reset";
import { ResetResponse } from "./ResetResponse";
import { SendLocalListRequest } from "./SendLocalList";
import { SendLocalListResponse } from "./SendLocalListResponse";
import { SetChargingProfileRequest } from "./SetChargingProfile";
import { SetChargingProfileResponse } from "./SetChargingProfileResponse";
import { StartTransactionRequest } from "./StartTransaction";
import { StartTransactionResponse } from "./StartTransactionResponse";
import { StatusNotificationRequest } from "./StatusNotification";
import { StatusNotificationResponse } from "./StatusNotificationResponse";
import { StopTransactionRequest } from "./StopTransaction";
import { StopTransactionResponse } from "./StopTransactionResponse";
import { TriggerMessageRequest } from "./TriggerMessage";
import { TriggerMessageResponse } from "./TriggerMessageResponse";
import { UnlockConnectorRequest } from "./UnlockConnector";
import { UnlockConnectorResponse } from "./UnlockConnectorResponse";
import { UpdateFirmwareRequest } from "./UpdateFirmware";
import { UpdateFirmwareResponse } from "./UpdateFirmwareResponse";

// this should also work| but does not: export * from '.';
export * from "./Authorize";
export * from "./AuthorizeResponse";
export * from "./BootNotification";
export * from "./BootNotificationResponse";
export * from "./CancelReservation";
export * from "./CancelReservationResponse";
export * from "./ChangeAvailability";
export * from "./ChangeAvailabilityResponse";
export * from "./ChangeConfiguration";
export * from "./ChangeConfigurationResponse";
export * from "./ClearCache";
export * from "./ClearCacheResponse";
export * from "./ClearChargingProfile";
export * from "./ClearChargingProfileResponse";
export * from "./DataTransfer";
export * from "./DataTransferResponse";
export * from "./DiagnosticsStatusNotification";
export * from "./DiagnosticsStatusNotificationResponse";
export * from "./FirmwareStatusNotification";
export * from "./FirmwareStatusNotificationResponse";
export * from "./GetCompositeSchedule";
export * from "./GetCompositeScheduleResponse";
export * from "./GetConfiguration";
export * from "./GetConfigurationResponse";
export * from "./GetDiagnostics";
export * from "./GetDiagnosticsResponse";
export * from "./GetLocalListVersion";
export * from "./GetLocalListVersionResponse";
export * from "./Heartbeat";
export * from "./HeartbeatResponse";
export * from "./MeterValues";
export * from "./MeterValuesResponse";
export * from "./RemoteStartTransaction";
export * from "./RemoteStartTransactionResponse";
export * from "./RemoteStopTransaction";
export * from "./RemoteStopTransactionResponse";
export * from "./ReserveNow";
export * from "./ReserveNowResponse";
export * from "./Reset";
export * from "./ResetResponse";
export * from "./SendLocalList";
export * from "./SendLocalListResponse";
export * from "./SetChargingProfile";
export * from "./SetChargingProfileResponse";
export * from "./StartTransaction";
export * from "./StartTransactionResponse";
export * from "./StatusNotification";
export * from "./StatusNotificationResponse";
export * from "./StopTransaction";
export * from "./StopTransactionResponse";
export * from "./TriggerMessage";
export * from "./TriggerMessageResponse";
export * from "./UnlockConnector";
export * from "./UnlockConnectorResponse";
export * from "./UpdateFirmware";
export * from "./UpdateFirmwareResponse";

export type ChargePointAction =
  | "Authorize"
  | "BootNotification"
  | "DataTransfer"
  | "DiagnosticsStatusNotification"
  | "FirmwareStatusNotification"
  | "Heartbeat"
  | "MeterValues"
  | "StartTransaction"
  | "StatusNotification"
  | "StopTransaction";

export type ChargePointRequest =
  | AuthorizeRequest
  | BootNotificationRequest
  | DataTransferRequest
  | DiagnosticsStatusNotificationRequest
  | FirmwareStatusNotificationRequest
  | HeartbeatRequest
  | MeterValuesRequest
  | StartTransactionRequest
  | StatusNotificationRequest
  | StopTransactionRequest;

export type ChargePointResponse =
  | AuthorizeResponse
  | BootNotificationResponse
  | DataTransferResponse
  | DiagnosticsStatusNotificationResponse
  | FirmwareStatusNotificationResponse
  | HeartbeatResponse
  | MeterValuesResponse
  | StartTransactionResponse
  | StatusNotificationResponse
  | StopTransactionResponse;

export type CentralSystemAction =
  | "CancelReservation"
  | "ChangeAvailability"
  | "ChangeConfiguration"
  | "ClearCache"
  | "ClearChargingProfile"
  | "DataTransfer"
  | "GetCompositeSchedule"
  | "GetConfiguration"
  | "GetDiagnostics"
  | "GetLocalListVersion"
  | "RemoteStartTransaction"
  | "RemoteStopTransaction"
  | "ReserveNow"
  | "Reset"
  | "SendLocalList"
  | "SetChargingProfile"
  | "TriggerMessage"
  | "UnlockConnector"
  | "UpdateFirmware";

export type CentralSystemRequest =
  | CancelReservationRequest
  | ChangeAvailabilityRequest
  | ChangeConfigurationRequest
  | ClearCacheRequest
  | ClearChargingProfileRequest
  | DataTransferRequest
  | GetCompositeScheduleRequest
  | GetConfigurationRequest
  | GetDiagnosticsRequest
  | GetLocalListVersionRequest
  | RemoteStartTransactionRequest
  | RemoteStopTransactionRequest
  | ReserveNowRequest
  | ResetRequest
  | SendLocalListRequest
  | TriggerMessageRequest
  | UnlockConnectorRequest
  | UpdateFirmwareRequest
  | SetChargingProfileRequest;

export type CentralSystemResponse =
  | CancelReservationResponse
  | ChangeAvailabilityResponse
  | ChangeConfigurationResponse
  | ClearCacheResponse
  | ClearChargingProfileResponse
  | DataTransferResponse
  | GetCompositeScheduleResponse
  | GetConfigurationResponse
  | GetDiagnosticsResponse
  | GetLocalListVersionResponse
  | RemoteStartTransactionResponse
  | RemoteStopTransactionResponse
  | ReserveNowResponse
  | ResetResponse
  | SendLocalListResponse
  | TriggerMessageResponse
  | UnlockConnectorResponse
  | UpdateFirmwareResponse
  | SetChargingProfileResponse;
