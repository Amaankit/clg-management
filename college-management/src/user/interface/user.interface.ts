export interface User {
  readonly username: string;
  readonly id: number;
  readonly fullname: string;
  readonly email?: string;
  readonly is_active: boolean;
  readonly phonenumber: string;
  readonly usergroup: string;
}
