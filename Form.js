// src/Form.js
//npm create vite@latest
import React from 'react';
import { useForm } from 'react-hook-form';
import './form.css';

const Form = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('Form submitted successfully!');
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input {...register("name", { required: "Name is required" })} />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input type="email" {...register("email", { 
            required: "Email is required", 
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
          })} />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div>
          <label>Phone Number:</label>
          <input type="tel" {...register("phone", { 
            required: "Phone number is required", 
            pattern: { value: /^[0-9]{10}$/, message: "Must be 10 digits" }
          })} />
          {errors.phone && <p className="error">{errors.phone.message}</p>}
        </div>

        <div>
          <label>Gender:</label>
          <select {...register("gender", { required: "Gender is required" })}>
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="error">{errors.gender.message}</p>}
        </div>

        <div>
          <label>Department:</label>
          <input {...register("department", { required: "Department is required" })} />
          {errors.department && <p className="error">{errors.department.message}</p>}
        </div>

        <div>
          <label>Course:</label>
          <input {...register("course", { required: "Course is required" })} />
          {errors.course && <p className="error">{errors.course.message}</p>}
        </div>

        <div>
          <label>Roll No.:</label>
          <input {...register("rollNo", { required: "Roll number is required" })} />
          {errors.rollNo && <p className="error">{errors.rollNo.message}</p>}
        </div>

        <div>
          <label>Birthdate:</label>
          <input type="date" {...register("birthdate", { required: "Birthdate is required" })} />
          {errors.birthdate && <p className="error">{errors.birthdate.message}</p>}
        </div>

        <div>
          <label>
            <input type="checkbox" {...register("terms", { required: "You must accept the terms" })} />
            I accept the terms and conditions
          </label>
          {errors.terms && <p className="error">{errors.terms.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
