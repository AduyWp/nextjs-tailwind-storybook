// components/forms/LoginForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email required'),
    password: Yup.string().required('Password required'),
  });

  const onSubmit = (values) => {
    // Handle form submission here
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
          <ErrorMessage name="email" className="text-red-600 mt-1" component="div" />
        </div>

        <div className="mt-3">
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
          <ErrorMessage name="password" className="text-red-600 mt-1" component="div" />
        </div>

        <button type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
        >Submit</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
