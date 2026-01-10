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

// Export only the Request and Response types to avoid duplicate enum exports
export { AuthorizeRequest } from "./AuthorizeRequest";
export { AuthorizeResponse } from "./AuthorizeResponse";
export { BootNotificationRequest } from "./BootNotificationRequest";
export { BootNotificationResponse } from "./BootNotificationResponse";
export { CancelReservationRequest } from "./CancelReservationRequest";
export { CancelReservationResponse } from "./CancelReservationResponse";
export { CertificateSignedRequest } from "./CertificateSignedRequest";
export { CertificateSignedResponse } from "./CertificateSignedResponse";
export { ChangeAvailabilityRequest } from "./ChangeAvailabilityRequest";
export { ChangeAvailabilityResponse } from "./ChangeAvailabilityResponse";
export { ClearCacheRequest } from "./ClearCacheRequest";
export { ClearCacheResponse } from "./ClearCacheResponse";
export { ClearChargingProfileRequest } from "./ClearChargingProfileRequest";
export { ClearChargingProfileResponse } from "./ClearChargingProfileResponse";
export { ClearDisplayMessageRequest } from "./ClearDisplayMessageRequest";
export { ClearDisplayMessageResponse } from "./ClearDisplayMessageResponse";
export { ClearedChargingLimitRequest } from "./ClearedChargingLimitRequest";
export { ClearedChargingLimitResponse } from "./ClearedChargingLimitResponse";
export { ClearVariableMonitoringRequest } from "./ClearVariableMonitoringRequest";
export { ClearVariableMonitoringResponse } from "./ClearVariableMonitoringResponse";
export { CostUpdatedRequest } from "./CostUpdatedRequest";
export { CostUpdatedResponse } from "./CostUpdatedResponse";
export { CustomerInformationRequest } from "./CustomerInformationRequest";
export { CustomerInformationResponse } from "./CustomerInformationResponse";
export { DataTransferRequest } from "./DataTransferRequest";
export { DataTransferResponse } from "./DataTransferResponse";
export { DeleteCertificateRequest } from "./DeleteCertificateRequest";
export { DeleteCertificateResponse } from "./DeleteCertificateResponse";
export { FirmwareStatusNotificationRequest } from "./FirmwareStatusNotificationRequest";
export { FirmwareStatusNotificationResponse } from "./FirmwareStatusNotificationResponse";
export { Get15118EVCertificateRequest } from "./Get15118EVCertificateRequest";
export { Get15118EVCertificateResponse } from "./Get15118EVCertificateResponse";
export { GetBaseReportRequest } from "./GetBaseReportRequest";
export { GetBaseReportResponse } from "./GetBaseReportResponse";
export { GetCertificateStatusRequest } from "./GetCertificateStatusRequest";
export { GetCertificateStatusResponse } from "./GetCertificateStatusResponse";
export { GetChargingProfilesRequest } from "./GetChargingProfilesRequest";
export { GetChargingProfilesResponse } from "./GetChargingProfilesResponse";
export { GetCompositeScheduleRequest } from "./GetCompositeScheduleRequest";
export { GetCompositeScheduleResponse } from "./GetCompositeScheduleResponse";
export { GetDisplayMessagesRequest } from "./GetDisplayMessagesRequest";
export { GetDisplayMessagesResponse } from "./GetDisplayMessagesResponse";
export { GetInstalledCertificateIdsRequest } from "./GetInstalledCertificateIdsRequest";
export { GetInstalledCertificateIdsResponse } from "./GetInstalledCertificateIdsResponse";
export { GetLocalListVersionRequest } from "./GetLocalListVersionRequest";
export { GetLocalListVersionResponse } from "./GetLocalListVersionResponse";
export { GetLogRequest } from "./GetLogRequest";
export { GetLogResponse } from "./GetLogResponse";
export { GetMonitoringReportRequest } from "./GetMonitoringReportRequest";
export { GetMonitoringReportResponse } from "./GetMonitoringReportResponse";
export { GetReportRequest } from "./GetReportRequest";
export { GetReportResponse } from "./GetReportResponse";
export { GetTransactionStatusRequest } from "./GetTransactionStatusRequest";
export { GetTransactionStatusResponse } from "./GetTransactionStatusResponse";
export { GetVariablesRequest } from "./GetVariablesRequest";
export { GetVariablesResponse } from "./GetVariablesResponse";
export { HeartbeatRequest } from "./HeartbeatRequest";
export { HeartbeatResponse } from "./HeartbeatResponse";
export { InstallCertificateRequest } from "./InstallCertificateRequest";
export { InstallCertificateResponse } from "./InstallCertificateResponse";
export { LogStatusNotificationRequest } from "./LogStatusNotificationRequest";
export { LogStatusNotificationResponse } from "./LogStatusNotificationResponse";
export { MeterValuesRequest } from "./MeterValuesRequest";
export { MeterValuesResponse } from "./MeterValuesResponse";
export { NotifyChargingLimitRequest } from "./NotifyChargingLimitRequest";
export { NotifyChargingLimitResponse } from "./NotifyChargingLimitResponse";
export { NotifyCustomerInformationRequest } from "./NotifyCustomerInformationRequest";
export { NotifyCustomerInformationResponse } from "./NotifyCustomerInformationResponse";
export { NotifyDisplayMessagesRequest } from "./NotifyDisplayMessagesRequest";
export { NotifyDisplayMessagesResponse } from "./NotifyDisplayMessagesResponse";
export { NotifyEVChargingNeedsRequest } from "./NotifyEVChargingNeedsRequest";
export { NotifyEVChargingNeedsResponse } from "./NotifyEVChargingNeedsResponse";
export { NotifyEVChargingScheduleRequest } from "./NotifyEVChargingScheduleRequest";
export { NotifyEVChargingScheduleResponse } from "./NotifyEVChargingScheduleResponse";
export { NotifyEventRequest } from "./NotifyEventRequest";
export { NotifyEventResponse } from "./NotifyEventResponse";
export { NotifyMonitoringReportRequest } from "./NotifyMonitoringReportRequest";
export { NotifyMonitoringReportResponse } from "./NotifyMonitoringReportResponse";
export { NotifyReportRequest } from "./NotifyReportRequest";
export { NotifyReportResponse } from "./NotifyReportResponse";
export { PublishFirmwareRequest } from "./PublishFirmwareRequest";
export { PublishFirmwareResponse } from "./PublishFirmwareResponse";
export { PublishFirmwareStatusNotificationRequest } from "./PublishFirmwareStatusNotificationRequest";
export { PublishFirmwareStatusNotificationResponse } from "./PublishFirmwareStatusNotificationResponse";
export { ReportChargingProfilesRequest } from "./ReportChargingProfilesRequest";
export { ReportChargingProfilesResponse } from "./ReportChargingProfilesResponse";
export { RequestStartTransactionRequest } from "./RequestStartTransactionRequest";
export { RequestStartTransactionResponse } from "./RequestStartTransactionResponse";
export { RequestStopTransactionRequest } from "./RequestStopTransactionRequest";
export { RequestStopTransactionResponse } from "./RequestStopTransactionResponse";
export { ReservationStatusUpdateRequest } from "./ReservationStatusUpdateRequest";
export { ReservationStatusUpdateResponse } from "./ReservationStatusUpdateResponse";
export { ReserveNowRequest } from "./ReserveNowRequest";
export { ReserveNowResponse } from "./ReserveNowResponse";
export { ResetRequest } from "./ResetRequest";
export { ResetResponse } from "./ResetResponse";
export { SecurityEventNotificationRequest } from "./SecurityEventNotificationRequest";
export { SecurityEventNotificationResponse } from "./SecurityEventNotificationResponse";
export { SendLocalListRequest } from "./SendLocalListRequest";
export { SendLocalListResponse } from "./SendLocalListResponse";
export { SetChargingProfileRequest } from "./SetChargingProfileRequest";
export { SetChargingProfileResponse } from "./SetChargingProfileResponse";
export { SetDisplayMessageRequest } from "./SetDisplayMessageRequest";
export { SetDisplayMessageResponse } from "./SetDisplayMessageResponse";
export { SetMonitoringBaseRequest } from "./SetMonitoringBaseRequest";
export { SetMonitoringBaseResponse } from "./SetMonitoringBaseResponse";
export { SetMonitoringLevelRequest } from "./SetMonitoringLevelRequest";
export { SetMonitoringLevelResponse } from "./SetMonitoringLevelResponse";
export { SetNetworkProfileRequest } from "./SetNetworkProfileRequest";
export { SetNetworkProfileResponse } from "./SetNetworkProfileResponse";
export { SetVariableMonitoringRequest } from "./SetVariableMonitoringRequest";
export { SetVariableMonitoringResponse } from "./SetVariableMonitoringResponse";
export { SetVariablesRequest } from "./SetVariablesRequest";
export { SetVariablesResponse } from "./SetVariablesResponse";
export { SignCertificateRequest } from "./SignCertificateRequest";
export { SignCertificateResponse } from "./SignCertificateResponse";
export { StatusNotificationRequest } from "./StatusNotificationRequest";
export { StatusNotificationResponse } from "./StatusNotificationResponse";
export { TransactionEventRequest } from "./TransactionEventRequest";
export { TransactionEventResponse } from "./TransactionEventResponse";
export { TriggerMessageRequest } from "./TriggerMessageRequest";
export { TriggerMessageResponse } from "./TriggerMessageResponse";
export { UnlockConnectorRequest } from "./UnlockConnectorRequest";
export { UnlockConnectorResponse } from "./UnlockConnectorResponse";
export { UnpublishFirmwareRequest } from "./UnpublishFirmwareRequest";
export { UnpublishFirmwareResponse } from "./UnpublishFirmwareResponse";
export { UpdateFirmwareRequest } from "./UpdateFirmwareRequest";
export { UpdateFirmwareResponse } from "./UpdateFirmwareResponse";

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
