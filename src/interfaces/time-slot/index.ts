import { AppointmentInterface } from 'interfaces/appointment';
import { GetQueryInterface } from 'interfaces';

export interface TimeSlotInterface {
  id?: string;
  start_time: any;
  end_time: any;
  appointment_id: string;
  created_at?: any;
  updated_at?: any;

  appointment?: AppointmentInterface;
  _count?: {};
}

export interface TimeSlotGetQueryInterface extends GetQueryInterface {
  id?: string;
  appointment_id?: string;
}
