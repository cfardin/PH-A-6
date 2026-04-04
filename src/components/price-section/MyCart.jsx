import MyItems from './MyItems';

const MyCart = ({ selected, setSelected }) => {

    let total = 0;
    for (const item of selected) {
        total += parseFloat(item.price);
    }
    const handleRemove = (toRemove) => {
        setSelected(selected.filter((_, i) => i !== toRemove));
    };

    return (
        <div className="w-full border border-gray-200 rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Your Cart</h3>

            <div className="space-y-3">
                {selected.map((items, i) => (
                    <MyItems key={i} items={items} onRemove={() => handleRemove(i)} />
                ))}
            </div>

            <div className="flex justify-between items-center pt-2">
                <span className="text-gray-400">Total:</span>
                <span className="text-2xl font-bold text-gray-900">${total}</span>
            </div>

            <button className="w-full py-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors">
                Proceed To Checkout
            </button>
        </div>
    );
};

export default MyCart;