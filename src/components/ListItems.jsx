import SingleItem from './SingleItem';

const ListItems = ({ items, handleRemoveItem }) => {
  return (
    <div className='items'>
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            handleRemoveItem={handleRemoveItem}
          />
        );
      })}
    </div>
  );
};
export default ListItems;
