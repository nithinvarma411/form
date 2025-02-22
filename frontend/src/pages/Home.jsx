import { useState } from 'react';
import axios from 'axios';

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    quantity: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://form-74pf.onrender.com/api/v1/add', formData);
      console.log('Saved:', response.data);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div>
      <h2>Save User Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        /><br />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        /><br />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        /><br />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
        /><br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Home;
