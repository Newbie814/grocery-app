import { useState } from 'react';
import Form from './components/Form';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListItems from './components/ListItems';

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const id = nanoid();
    const newItem = {
      name: itemName,
      completed: false,
      id: id,
    };
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    toast.success('Item removed', {
      autoClose: 1250,
    });
  };

  return (
    <section className='section-center'>
      <Form addItem={addItem} />
      <ListItems items={items} handleRemoveItem={handleRemoveItem} />
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </section>
  );
};

export default App;
