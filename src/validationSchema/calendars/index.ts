import * as yup from 'yup';

export const calendarValidationSchema = yup.object().shape({
  date: yup.date().required(),
  company_id: yup.string().nullable().required(),
});
