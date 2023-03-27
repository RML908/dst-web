// export interface User
// {
//     id: string;
//     name: string;
//     email: string;
//     avatar?: string;
//     status?: string;
// }

// export type User = User2[]

export interface User {
  id: number;
  user_id: string;
  passport: string;
  social_number: string;
  name: string;
  surname: string;
  middlename: string;
  birth_date: string;
  gender: string;
  phone: string;
  mail: string;
  division: string;
  cabinet: string;
  divisions: string;
  profession: string;
  position: string;
  login: string;
  rating?: number;
  dislike: number;
  branch: string;
  licanse_date: any;
  licanse_id: any;
  all_patients: number;
  image: string;
}

