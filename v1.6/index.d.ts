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

// Export only the Request and Response types to avoid duplicate enum exports
export { AuthorizeRequest } from "./Authorize";
export { AuthorizeResponse } from "./AuthorizeResponse";
export { BootNotificationRequest } from "./BootNotification";
export { BootNotificationResponse } from "./BootNotificationResponse";
export { CancelReservationRequest } from "./CancelReservation";
export { CancelReservationResponse } from "./CancelReservationResponse";
export { ChangeAvailabilityRequest } from "./ChangeAvailability";
export { ChangeAvailabilityResponse } from "./ChangeAvailabilityResponse";
export { ChangeConfigurationRequest } from "./ChangeConfiguration";
export { ChangeConfigurationResponse } from "./ChangeConfigurationResponse";
export { ClearCacheRequest } from "./ClearCache";
export { ClearCacheResponse } from "./ClearCacheResponse";
export { ClearChargingProfileRequest } from "./ClearChargingProfile";
export { ClearChargingProfileResponse } from "./ClearChargingProfileResponse";
export { DataTransferRequest } from "./DataTransfer";
export { DataTransferResponse } from "./DataTransferResponse";
export { DiagnosticsStatusNotificationRequest } from "./DiagnosticsStatusNotification";
export { DiagnosticsStatusNotificationResponse } from "./DiagnosticsStatusNotificationResponse";
export { FirmwareStatusNotificationRequest } from "./FirmwareStatusNotification";
export { FirmwareStatusNotificationResponse } from "./FirmwareStatusNotificationResponse";
export { GetCompositeScheduleRequest } from "./GetCompositeSchedule";
export { GetCompositeScheduleResponse } from "./GetCompositeScheduleResponse";
export { GetConfigurationRequest } from "./GetConfiguration";
export { GetConfigurationResponse } from "./GetConfigurationResponse";
export { GetDiagnosticsRequest } from "./GetDiagnostics";
export { GetDiagnosticsResponse } from "./GetDiagnosticsResponse";
export { GetLocalListVersionRequest } from "./GetLocalListVersion";
export { GetLocalListVersionResponse } from "./GetLocalListVersionResponse";
export { HeartbeatRequest } from "./Heartbeat";
export { HeartbeatResponse } from "./HeartbeatResponse";
export { MeterValuesRequest } from "./MeterValues";
export { MeterValuesResponse } from "./MeterValuesResponse";
export { RemoteStartTransactionRequest } from "./RemoteStartTransaction";
export { RemoteStartTransactionResponse } from "./RemoteStartTransactionResponse";
export { RemoteStopTransactionRequest } from "./RemoteStopTransaction";
export { RemoteStopTransactionResponse } from "./RemoteStopTransactionResponse";
export { ReserveNowRequest } from "./ReserveNow";
export { ReserveNowResponse } from "./ReserveNowResponse";
export { ResetRequest } from "./Reset";
export { ResetResponse } from "./ResetResponse";
export { SendLocalListRequest } from "./SendLocalList";
export { SendLocalListResponse } from "./SendLocalListResponse";
export { SetChargingProfileRequest } from "./SetChargingProfile";
export { SetChargingProfileResponse } from "./SetChargingProfileResponse";
export { StartTransactionRequest } from "./StartTransaction";
export { StartTransactionResponse } from "./StartTransactionResponse";
export { StatusNotificationRequest } from "./StatusNotification";
export { StatusNotificationResponse } from "./StatusNotificationResponse";
export { StopTransactionRequest } from "./StopTransaction";
export { StopTransactionResponse } from "./StopTransactionResponse";
export { TriggerMessageRequest } from "./TriggerMessage";
export { TriggerMessageResponse } from "./TriggerMessageResponse";
export { UnlockConnectorRequest } from "./UnlockConnector";
export { UnlockConnectorResponse } from "./UnlockConnectorResponse";
export { UpdateFirmwareRequest } from "./UpdateFirmware";
export { UpdateFirmwareResponse } from "./UpdateFirmwareResponse";

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
