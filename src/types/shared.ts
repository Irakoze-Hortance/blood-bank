export enum EGender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}

export enum ERole {
  ADMIN = "ADMIN",
  DONOR = "DONOR",
  VOLUNTEER = "VOLUNTEER",
}

export enum EBloodGroup {
  A_POSITIVE = "A_plus",
  A_NEGATIVE = "minus",
  B_POSITIVE = "B_plus",
  B_NEGATIVE = "B_minus",
  AB_POSITIVE = "AB_plus",
  AB_NEGATIVE = "AB_minus",
  O_POSITIVE = "O_plus",
  O_NEGATIVE = "O_minus",
}

export enum EAppointmentStatus {
  PENDING = "PENDING",
  APPROVE = "APPROVE",
  REJECTED = "REJECTED",
}

// APIErrorResponse

export interface IApiErrorResponse {
  message: string;
}
