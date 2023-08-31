import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  date: yup.date().required(),
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  duration: yup.number().integer().required(),
  company_id: yup.string().nullable().required(),
});
