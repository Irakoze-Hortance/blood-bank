export enum EGender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export enum ERole {
  ADMIN = "ADMIN",
  USER = "USER",
}

export enum EBloodGroup {
  A_POSITIVE = "A_POSITIVE",
  A_NEGATIVE = "A_NEGATIVE",
  B_POSITIVE = "B_POSITIVE",
  B_NEGATIVE = "B_NEGATIVE",
  AB_POSITIVE = "AB_POSITIVE",
  AB_NEGATIVE = "AB_NEGATIVE",
  O_POSITIVE = "O_POSITIVE",
  O_NEGATIVE = "O_NEGATIVE",
}

// APIErrorResponse

export interface IApiErrorResponse {
  message: string;
}
