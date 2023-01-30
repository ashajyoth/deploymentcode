import React from 'react';
import { Formik, Form, useField, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} style= {{color: 'blue', border: "1px solid yellow"}} />
      {meta.touched && meta.error ? (
        <div className="error"style={{color: "red"}}>{meta.error}</div>
      ) : null}
       {/* <ErrorMessage component="div" name="email" /> */}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  console.log("children", children);
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error" style={{color: "red"}}>{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
   console.log("props", props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
     
      {meta.touched && meta.error ? (
        <div className="error" style={{color: "red"}}>{meta.error}</div>
      ) : null}
    </div>
  );
};

// And now we can use these
const SignupForm = () => {
  return (
    <>
     
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          userName: "",
          email: '',
          acceptedTerms: false, // added for our checkbox
          jobType: '', // added for our select
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string()
            
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
            userName: Yup.string()
            .matches(/^[a-zA-Z0-9]+$/, 'Username can only contain alphanumeric characters')
    .required('Username is required'),
          email: Yup.string()
            .email('Invalid email address')
            .required(' Email is Required'),
    //         password: yup.string()
    // .required("Please enter your password")
    // .matches(
    //   /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    //   "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    // ),
  
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
          jobType: Yup.string()
            .oneOf(
              ['designer', 'development', 'product', 'other'],
              'Invalid Job Type'
            )
            .required('Required'),
        })}
        onSubmit={(values) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          
          }, 400);
        }}
      >
        <Form>
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Name"
          />

          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Last Name"
          />
          <MyTextInput
            label="User Name"
            name="userName"
            type="text"
            placeholder="User Name"
          />
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="EMail"
          />

          <MySelect label="Job Type" name="jobType">
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </MySelect>

          <MyCheckbox name="acceptedTerms">
           I accept the terms and conditions
          </MyCheckbox>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};
export default SignupForm;