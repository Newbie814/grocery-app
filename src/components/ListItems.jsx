import SingleItem from './SingleItem';

const ListItems = ({ items, handleRemoveItem, handleEditItem }) => {
  return (
    <div className='items'>
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            handleRemoveItem={handleRemoveItem}
            handleEditItem={handleEditItem}
          />
        );
      })}
    </div>
  );
};
export default ListItems;
