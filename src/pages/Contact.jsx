
import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!message) newErrors.message = 'Message is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email address is invalid';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setSuccess('Thank you for your message!');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setSuccess('');
    }
    setErrors(formErrors);
  };

  return (
    <div className="p-8 bg-cyan-700">
      <h1 className="text-5xl mb-4 mt-10 text-center font-bold">Contact Us</h1>
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <form onSubmit={handleSubmit} className="space-y-4 mx-auto w-[500px]">
        <div>
          <label className="block mb-1 font-bold">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label className="block mb-1 font-bold">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label className="block mb-1 font-bold">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
      <div className="mt-8">
        <h2 className="text-2xl mb-2">Contact Information</h2>
        <p>Address: 123 Main St, Anytown, USA</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@company.com</p>
      </div>
    </div>
  );
};

export default Contact;

