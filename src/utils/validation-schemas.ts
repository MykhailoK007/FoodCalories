import * as Yup from 'yup';

export const EditProfileForm = Yup.object().shape({
  userName: Yup.string().min(5, 'Minimum 5 chars').max(15, 'Maximum 15 chars').optional(),
  firstName: Yup.string().min(2, 'Minimum 2 chars').max(20, 'Maximum 20 chars').optional(),
  lastName: Yup.string().min(2, 'Minimum 2 chars').max(20, 'Maximum 20 chars').optional(),
  email: Yup.string().email('Invalid email').optional(),
  avatar: Yup.string().optional(),
  telephone: Yup.string().min(10, 'Minimum 10 numbers').max(12, 'Maximum 12 numbers').optional()
});
