import { useState } from 'react';
import Form from './components/Form';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListItems from './components/ListItems';

// const getLocalStorage = () => {
//   let list = localStorage.getItem('groceryList');
//   if (list) {
//     list = JSON.parse(localStorage.getItem('groceryList'));
//   } else {
//     list = [];
//   }
//   return list;
// };

const setLocalStorage = (items) => {
  localStorage.setItem('groceryList', JSON.stringify(items));
};

const defaultList = JSON.parse(localStorage.getItem('groceryList') || '[]');

const App = () => {
  const [items, setItems] = useState(defaultList);

  const addItem = (itemName) => {
    const id = nanoid();
    const newItem = {
      name: itemName,
      completed: false,
      id: id,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const handleRemoveItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Item removed', {
      autoClose: 1250,
    });
  };

  const handleEditItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className='section-center'>
      <Form addItem={addItem} />
      <ListItems
        items={items}
        handleRemoveItem={handleRemoveItem}
        handleEditItem={handleEditItem}
      />
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
