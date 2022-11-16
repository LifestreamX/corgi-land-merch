import React from 'react';
// import '../styles/SignUp.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


const SignUp = () => {
  // Yup Schema
  const formSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required')
      .min(4, 'Username must be atleast 4 characters'),
    password: Yup.string()
      .required('Password is required')
      .min(4, 'Password length should be at least 4 characters'),
    passwordConfirm: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password')], 'Passwords must and should match'),
  });

  const validationOpt = { resolver: yupResolver(formSchema) };

  const { register, handleSubmit, reset, formState } = useForm(validationOpt);
  const { errors } = formState;

  function onFormSubmit(data) {
    console.log(JSON.stringify(data, null, 4));
    reset();

    return false;
  }

  return (
    <div className='signup-wrapper'>
      <form className='form-wrapper' onSubmit={handleSubmit(onFormSubmit)}>
        {/* Username input  */}
        <label htmlFor='username' name='username'>
          Username:
        </label>
        <input
          name='username'
          type='text'
          placeholder='Enter Username...'
          {...register('username', {
            required: 'Username is required',
            minLength: {
              value: 6,
              message: 'Username must be atleast 6 characters long.',
            },
          })}
        />
        <p className='error-messages'>{errors.username?.message}</p>
        {/* First password input  */}
        <label htmlFor='password1'>Password:</label>
        <input
          name='password'
          type='password'
          {...register('password')}
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          placeholder='Enter Password...'
        />
        <p className='error-messages'> {errors.password?.message}</p>

        {/* Second password input */}
        <label htmlFor='password2'>Password:</label>
        <input
          name='passwordConfirm'
          type='password'
          {...register('passwordConfirm')}
          className={`form-control ${
            errors.passwordConfirm ? 'is-invalid' : ''
          }`}
          placeholder='Confirm Password...'
        />

        <p className='error-messages'>{errors.passwordConfirm?.message} </p>

        {/* Signup button */}
        <div className='button-wrapper'>
          <button className='signup-button'>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
