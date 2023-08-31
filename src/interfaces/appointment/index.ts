import { TimeSlotInterface } from 'interfaces/time-slot';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  date: any;
  start_time: any;
  end_time: any;
  duration: number;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  time_slot?: TimeSlotInterface[];
  company?: CompanyInterface;
  _count?: {
    time_slot?: number;
  };
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  company_id?: string;
}
