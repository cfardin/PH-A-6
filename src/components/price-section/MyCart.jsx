import { toast } from "react-toastify";
import MyItems from "./MyItems";
import { CiShoppingCart } from "react-icons/ci";

const MyCart = ({ selected, setSelected }) => {
  let money = 0;
  for (const item of selected) {
    money += parseFloat(item.price);
  }

  const handleRemove = (i) => {
    toast(`Item remove from cart`);
    setSelected(selected.filter((_, index) => index !== i));
  };

  return (
    <div className="w-full border border-gray-200 rounded-2xl p-6 space-y-4">
      <h3 className="text-xl font-bold text-gray-800">Your Cart</h3>

      {/* <div className='flex flex-col justify-center items-center'>
                <CiShoppingCart className='text-9xl text-center'></CiShoppingCart>
                <h3>Your cart is empty</h3>
            </div>

            <div className="space-y-3">
                {selected.map((items, i) => (
                    <MyItems key={i} items={items} handleRemove ={() => handleRemove(i)} />
                ))}
            </div> */}
      <div>
        {selected.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10">
            <CiShoppingCart className="text-9xl" />
            <h3 className="text-xl font-semibold">Your cart is empty</h3>
          </div>
        ) : (
          <div className="space-y-3">
            {selected.map((items, i) => (
              <MyItems
                key={i}
                items={items}
                handleRemove={() => handleRemove(i)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-between items-center pt-2">
        <span className="text-gray-400">Total:</span>
        <span className="text-2xl font-bold text-gray-900">${money}</span>
      </div>

      <button className="w-full py-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors">
        Proceed To Checkout
      </button>
    </div>
  );
};

export default MyCart;
