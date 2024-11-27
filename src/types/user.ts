// {
//     "id": "9d16e240-fbe4-4909-a59e-73b0bf475b5a",
//     "passwordHash": "$2b$10$fh3f1DYDBL3kbfcJ7BqxPuFJxX7NUW.dqqia.6BKZZ4zfFnx3vjjm",
//     "email": "izere@gmail.com",
//     "firstName": "kerie",
//     "lastName": "izere",
//     "role": "VOLUNTEER",
//     "bloodGroup": "A_plus",
//     "gender": "FEMALE",
//     "address": "GAKENKE",
//     "createdAt": "2024-11-27T09:57:49.620Z"
//   },

import { EGender, ERole, ITable } from "./shared";

export interface IUser extends ITable {
  email: string;
  firstName: string;
  lastName: string;
  role: ERole;
  bloodGroup: string;
  gender: EGender;
  address: string;
}
