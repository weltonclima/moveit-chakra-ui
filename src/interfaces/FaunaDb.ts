import { User } from "./User";

export interface FaunaDb {
  ref: string;
  ts: number;
  data: User[]
}