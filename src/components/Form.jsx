import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error('Please enter a grocery item');
    }
    addItem(newItemName);
    setNewItemName('');
  };

  const handleChange = (e) => {
    setNewItemName(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery</h4>
      <div className='form-control'>
        <input
          type='text'
          onChange={handleChange}
          className='form-input'
          value={newItemName}
        />
        <button type='submit' className='btn'>
          add item
        </button>
      </div>
    </form>
  );
};
export default Form;
