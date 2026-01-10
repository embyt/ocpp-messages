// Import types for use in type unions
import { AuthorizeRequest } from "./AuthorizeRequest";
import { AuthorizeResponse } from "./AuthorizeResponse";
import { BootNotificationRequest } from "./BootNotificationRequest";
import { BootNotificationResponse } from "./BootNotificationResponse";
import { CancelReservationRequest } from "./CancelReservationRequest";
import { CancelReservationResponse } from "./CancelReservationResponse";
import { CertificateSignedRequest } from "./CertificateSignedRequest";
import { CertificateSignedResponse } from "./CertificateSignedResponse";
import { ChangeAvailabilityRequest } from "./ChangeAvailabilityRequest";
import { ChangeAvailabilityResponse } from "./ChangeAvailabilityResponse";
import { ClearCacheRequest } from "./ClearCacheRequest";
import { ClearCacheResponse } from "./ClearCacheResponse";
import { ClearChargingProfileRequest } from "./ClearChargingProfileRequest";
import { ClearChargingProfileResponse } from "./ClearChargingProfileResponse";
import { ClearDisplayMessageRequest } from "./ClearDisplayMessageRequest";
import { ClearDisplayMessageResponse } from "./ClearDisplayMessageResponse";
import { ClearedChargingLimitRequest } from "./ClearedChargingLimitRequest";
import { ClearedChargingLimitResponse } from "./ClearedChargingLimitResponse";
import { ClearVariableMonitoringRequest } from "./ClearVariableMonitoringRequest";
import { ClearVariableMonitoringResponse } from "./ClearVariableMonitoringResponse";
import { CostUpdatedRequest } from "./CostUpdatedRequest";
import { CostUpdatedResponse } from "./CostUpdatedResponse";
import { CustomerInformationRequest } from "./CustomerInformationRequest";
import { CustomerInformationResponse } from "./CustomerInformationResponse";
import { DataTransferRequest } from "./DataTransferRequest";
import { DataTransferResponse } from "./DataTransferResponse";
import { DeleteCertificateRequest } from "./DeleteCertificateRequest";
import { DeleteCertificateResponse } from "./DeleteCertificateResponse";
import { FirmwareStatusNotificationRequest } from "./FirmwareStatusNotificationRequest";
import { FirmwareStatusNotificationResponse } from "./FirmwareStatusNotificationResponse";
import { Get15118EVCertificateRequest } from "./Get15118EVCertificateRequest";
import { Get15118EVCertificateResponse } from "./Get15118EVCertificateResponse";
import { GetBaseReportRequest } from "./GetBaseReportRequest";
import { GetBaseReportResponse } from "./GetBaseReportResponse";
import { GetCertificateStatusRequest } from "./GetCertificateStatusRequest";
import { GetCertificateStatusResponse } from "./GetCertificateStatusResponse";
import { GetChargingProfilesRequest } from "./GetChargingProfilesRequest";
import { GetChargingProfilesResponse } from "./GetChargingProfilesResponse";
import { GetCompositeScheduleRequest } from "./GetCompositeScheduleRequest";
import { GetCompositeScheduleResponse } from "./GetCompositeScheduleResponse";
import { GetDisplayMessagesRequest } from "./GetDisplayMessagesRequest";
import { GetDisplayMessagesResponse } from "./GetDisplayMessagesResponse";
import { GetInstalledCertificateIdsRequest } from "./GetInstalledCertificateIdsRequest";
import { GetInstalledCertificateIdsResponse } from "./GetInstalledCertificateIdsResponse";
import { GetLocalListVersionRequest } from "./GetLocalListVersionRequest";
import { GetLocalListVersionResponse } from "./GetLocalListVersionResponse";
import { GetLogRequest } from "./GetLogRequest";
import { GetLogResponse } from "./GetLogResponse";
import { GetMonitoringReportRequest } from "./GetMonitoringReportRequest";
import { GetMonitoringReportResponse } from "./GetMonitoringReportResponse";
import { GetReportRequest } from "./GetReportRequest";
import { GetReportResponse } from "./GetReportResponse";
import { GetTransactionStatusRequest } from "./GetTransactionStatusRequest";
import { GetTransactionStatusResponse } from "./GetTransactionStatusResponse";
import { GetVariablesRequest } from "./GetVariablesRequest";
import { GetVariablesResponse } from "./GetVariablesResponse";
import { HeartbeatRequest } from "./HeartbeatRequest";
import { HeartbeatResponse } from "./HeartbeatResponse";
import { InstallCertificateRequest } from "./InstallCertificateRequest";
import { InstallCertificateResponse } from "./InstallCertificateResponse";
import { LogStatusNotificationRequest } from "./LogStatusNotificationRequest";
import { LogStatusNotificationResponse } from "./LogStatusNotificationResponse";
import { MeterValuesRequest } from "./MeterValuesRequest";
import { MeterValuesResponse } from "./MeterValuesResponse";
import { NotifyChargingLimitRequest } from "./NotifyChargingLimitRequest";
import { NotifyChargingLimitResponse } from "./NotifyChargingLimitResponse";
import { NotifyCustomerInformationRequest } from "./NotifyCustomerInformationRequest";
import { NotifyCustomerInformationResponse } from "./NotifyCustomerInformationResponse";
import { NotifyDisplayMessagesRequest } from "./NotifyDisplayMessagesRequest";
import { NotifyDisplayMessagesResponse } from "./NotifyDisplayMessagesResponse";
import { NotifyEVChargingNeedsRequest } from "./NotifyEVChargingNeedsRequest";
import { NotifyEVChargingNeedsResponse } from "./NotifyEVChargingNeedsResponse";
import { NotifyEVChargingScheduleRequest } from "./NotifyEVChargingScheduleRequest";
import { NotifyEVChargingScheduleResponse } from "./NotifyEVChargingScheduleResponse";
import { NotifyEventRequest } from "./NotifyEventRequest";
import { NotifyEventResponse } from "./NotifyEventResponse";
import { NotifyMonitoringReportRequest } from "./NotifyMonitoringReportRequest";
import { NotifyMonitoringReportResponse } from "./NotifyMonitoringReportResponse";
import { NotifyReportRequest } from "./NotifyReportRequest";
import { NotifyReportResponse } from "./NotifyReportResponse";
import { PublishFirmwareRequest } from "./PublishFirmwareRequest";
import { PublishFirmwareResponse } from "./PublishFirmwareResponse";
import { PublishFirmwareStatusNotificationRequest } from "./PublishFirmwareStatusNotificationRequest";
import { PublishFirmwareStatusNotificationResponse } from "./PublishFirmwareStatusNotificationResponse";
import { ReportChargingProfilesRequest } from "./ReportChargingProfilesRequest";
import { ReportChargingProfilesResponse } from "./ReportChargingProfilesResponse";
import { RequestStartTransactionRequest } from "./RequestStartTransactionRequest";
import { RequestStartTransactionResponse } from "./RequestStartTransactionResponse";
import { RequestStopTransactionRequest } from "./RequestStopTransactionRequest";
import { RequestStopTransactionResponse } from "./RequestStopTransactionResponse";
import { ReservationStatusUpdateRequest } from "./ReservationStatusUpdateRequest";
import { ReservationStatusUpdateResponse } from "./ReservationStatusUpdateResponse";
import { ReserveNowRequest } from "./ReserveNowRequest";
import { ReserveNowResponse } from "./ReserveNowResponse";
import { ResetRequest } from "./ResetRequest";
import { ResetResponse } from "./ResetResponse";
import { SecurityEventNotificationRequest } from "./SecurityEventNotificationRequest";
import { SecurityEventNotificationResponse } from "./SecurityEventNotificationResponse";
import { SendLocalListRequest } from "./SendLocalListRequest";
import { SendLocalListResponse } from "./SendLocalListResponse";
import { SetChargingProfileRequest } from "./SetChargingProfileRequest";
import { SetChargingProfileResponse } from "./SetChargingProfileResponse";
import { SetDisplayMessageRequest } from "./SetDisplayMessageRequest";
import { SetDisplayMessageResponse } from "./SetDisplayMessageResponse";
import { SetMonitoringBaseRequest } from "./SetMonitoringBaseRequest";
import { SetMonitoringBaseResponse } from "./SetMonitoringBaseResponse";
import { SetMonitoringLevelRequest } from "./SetMonitoringLevelRequest";
import { SetMonitoringLevelResponse } from "./SetMonitoringLevelResponse";
import { SetNetworkProfileRequest } from "./SetNetworkProfileRequest";
import { SetNetworkProfileResponse } from "./SetNetworkProfileResponse";
import { SetVariableMonitoringRequest } from "./SetVariableMonitoringRequest";
import { SetVariableMonitoringResponse } from "./SetVariableMonitoringResponse";
import { SetVariablesRequest } from "./SetVariablesRequest";
import { SetVariablesResponse } from "./SetVariablesResponse";
import { SignCertificateRequest } from "./SignCertificateRequest";
import { SignCertificateResponse } from "./SignCertificateResponse";
import { StatusNotificationRequest } from "./StatusNotificationRequest";
import { StatusNotificationResponse } from "./StatusNotificationResponse";
import { TransactionEventRequest } from "./TransactionEventRequest";
import { TransactionEventResponse } from "./TransactionEventResponse";
import { TriggerMessageRequest } from "./TriggerMessageRequest";
import { TriggerMessageResponse } from "./TriggerMessageResponse";
import { UnlockConnectorRequest } from "./UnlockConnectorRequest";
import { UnlockConnectorResponse } from "./UnlockConnectorResponse";
import { UnpublishFirmwareRequest } from "./UnpublishFirmwareRequest";
import { UnpublishFirmwareResponse } from "./UnpublishFirmwareResponse";
import { UpdateFirmwareRequest } from "./UpdateFirmwareRequest";
import { UpdateFirmwareResponse } from "./UpdateFirmwareResponse";

// Messages sent from Charging Station to CSMS
export type ChargingStationAction =
  | "Authorize"
  | "BootNotification"
  | "ClearedChargingLimit"
  | "DataTransfer"
  | "FirmwareStatusNotification"
  | "Get15118EVCertificate"
  | "GetCertificateStatus"
  | "Heartbeat"
  | "LogStatusNotification"
  | "MeterValues"
  | "NotifyChargingLimit"
  | "NotifyCustomerInformation"
  | "NotifyDisplayMessages"
  | "NotifyEVChargingNeeds"
  | "NotifyEVChargingSchedule"
  | "NotifyEvent"
  | "NotifyMonitoringReport"
  | "NotifyReport"
  | "PublishFirmwareStatusNotification"
  | "ReportChargingProfiles"
  | "ReservationStatusUpdate"
  | "SecurityEventNotification"
  | "SignCertificate"
  | "StatusNotification"
  | "TransactionEvent";

export type ChargingStationRequest =
  | AuthorizeRequest
  | BootNotificationRequest
  | ClearedChargingLimitRequest
  | DataTransferRequest
  | FirmwareStatusNotificationRequest
  | Get15118EVCertificateRequest
  | GetCertificateStatusRequest
  | HeartbeatRequest
  | LogStatusNotificationRequest
  | MeterValuesRequest
  | NotifyChargingLimitRequest
  | NotifyCustomerInformationRequest
  | NotifyDisplayMessagesRequest
  | NotifyEVChargingNeedsRequest
  | NotifyEVChargingScheduleRequest
  | NotifyEventRequest
  | NotifyMonitoringReportRequest
  | NotifyReportRequest
  | PublishFirmwareStatusNotificationRequest
  | ReportChargingProfilesRequest
  | ReservationStatusUpdateRequest
  | SecurityEventNotificationRequest
  | SignCertificateRequest
  | StatusNotificationRequest
  | TransactionEventRequest;

export type ChargingStationResponse =
  | AuthorizeResponse
  | BootNotificationResponse
  | ClearedChargingLimitResponse
  | DataTransferResponse
  | FirmwareStatusNotificationResponse
  | Get15118EVCertificateResponse
  | GetCertificateStatusResponse
  | HeartbeatResponse
  | LogStatusNotificationResponse
  | MeterValuesResponse
  | NotifyChargingLimitResponse
  | NotifyCustomerInformationResponse
  | NotifyDisplayMessagesResponse
  | NotifyEVChargingNeedsResponse
  | NotifyEVChargingScheduleResponse
  | NotifyEventResponse
  | NotifyMonitoringReportResponse
  | NotifyReportResponse
  | PublishFirmwareStatusNotificationResponse
  | ReportChargingProfilesResponse
  | ReservationStatusUpdateResponse
  | SecurityEventNotificationResponse
  | SignCertificateResponse
  | StatusNotificationResponse
  | TransactionEventResponse;

// Messages sent from CSMS to Charging Station
export type CSMSAction =
  | "CancelReservation"
  | "CertificateSigned"
  | "ChangeAvailability"
  | "ClearCache"
  | "ClearChargingProfile"
  | "ClearDisplayMessage"
  | "ClearVariableMonitoring"
  | "CostUpdated"
  | "CustomerInformation"
  | "DataTransfer"
  | "DeleteCertificate"
  | "GetBaseReport"
  | "GetChargingProfiles"
  | "GetCompositeSchedule"
  | "GetDisplayMessages"
  | "GetInstalledCertificateIds"
  | "GetLocalListVersion"
  | "GetLog"
  | "GetMonitoringReport"
  | "GetReport"
  | "GetTransactionStatus"
  | "GetVariables"
  | "InstallCertificate"
  | "PublishFirmware"
  | "RequestStartTransaction"
  | "RequestStopTransaction"
  | "ReserveNow"
  | "Reset"
  | "SendLocalList"
  | "SetChargingProfile"
  | "SetDisplayMessage"
  | "SetMonitoringBase"
  | "SetMonitoringLevel"
  | "SetNetworkProfile"
  | "SetVariableMonitoring"
  | "SetVariables"
  | "TriggerMessage"
  | "UnlockConnector"
  | "UnpublishFirmware"
  | "UpdateFirmware";

export type CSMSRequest =
  | CancelReservationRequest
  | CertificateSignedRequest
  | ChangeAvailabilityRequest
  | ClearCacheRequest
  | ClearChargingProfileRequest
  | ClearDisplayMessageRequest
  | ClearVariableMonitoringRequest
  | CostUpdatedRequest
  | CustomerInformationRequest
  | DataTransferRequest
  | DeleteCertificateRequest
  | GetBaseReportRequest
  | GetChargingProfilesRequest
  | GetCompositeScheduleRequest
  | GetDisplayMessagesRequest
  | GetInstalledCertificateIdsRequest
  | GetLocalListVersionRequest
  | GetLogRequest
  | GetMonitoringReportRequest
  | GetReportRequest
  | GetTransactionStatusRequest
  | GetVariablesRequest
  | InstallCertificateRequest
  | PublishFirmwareRequest
  | RequestStartTransactionRequest
  | RequestStopTransactionRequest
  | ReserveNowRequest
  | ResetRequest
  | SendLocalListRequest
  | SetChargingProfileRequest
  | SetDisplayMessageRequest
  | SetMonitoringBaseRequest
  | SetMonitoringLevelRequest
  | SetNetworkProfileRequest
  | SetVariableMonitoringRequest
  | SetVariablesRequest
  | TriggerMessageRequest
  | UnlockConnectorRequest
  | UnpublishFirmwareRequest
  | UpdateFirmwareRequest;

export type CSMSResponse =
  | CancelReservationResponse
  | CertificateSignedResponse
  | ChangeAvailabilityResponse
  | ClearCacheResponse
  | ClearChargingProfileResponse
  | ClearDisplayMessageResponse
  | ClearVariableMonitoringResponse
  | CostUpdatedResponse
  | CustomerInformationResponse
  | DataTransferResponse
  | DeleteCertificateResponse
  | GetBaseReportResponse
  | GetChargingProfilesResponse
  | GetCompositeScheduleResponse
  | GetDisplayMessagesResponse
  | GetInstalledCertificateIdsResponse
  | GetLocalListVersionResponse
  | GetLogResponse
  | GetMonitoringReportResponse
  | GetReportResponse
  | GetTransactionStatusResponse
  | GetVariablesResponse
  | InstallCertificateResponse
  | PublishFirmwareResponse
  | RequestStartTransactionResponse
  | RequestStopTransactionResponse
  | ReserveNowResponse
  | ResetResponse
  | SendLocalListResponse
  | SetChargingProfileResponse
  | SetDisplayMessageResponse
  | SetMonitoringBaseResponse
  | SetMonitoringLevelResponse
  | SetNetworkProfileResponse
  | SetVariableMonitoringResponse
  | SetVariablesResponse
  | TriggerMessageResponse
  | UnlockConnectorResponse
  | UnpublishFirmwareResponse
  | UpdateFirmwareResponse;
