import { useState } from 'react';

const SingleItem = ({ item, handleRemoveItem }) => {
  const [isChecked, setIsChecked] = useState(item.completed);
  return (
    <div className='single-item'>
      <input type='checkbox' />
      <p>{item.name}</p>
      <button
        type='button'
        className='btn remove-btn'
        onClick={() => handleRemoveItem(item.id)}
      >
        remove
      </button>
    </div>
  );
};
export default SingleItem;
// const id = nanoid();
//           return (
//             <div key={id}>
//               <li>{item}</li>
//               <button
//                 type='button'
//                 className='btn'
//                 onClick={() => handleRemoveItem(id)}
//               >
//                 remove item
//               </button>
//             </div>
