import { Student } from './student.model';

export interface Payment {
  id: number;
  code: string | null;
  date: string;
  type: string;
  status: string;
  file: string;
  student: any;
}
