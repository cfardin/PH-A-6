import React from 'react';

const MyItems = ({ items, handleRemove }) => {
    const { image, title, price } = items;
    return (
        <div className="flex items-center justify-between bg-gray-50 rounded-2xl px-5 py-4">
            <div className="flex items-center gap-4">
                <img src={image} alt={title} className="w-10 h-10 object-contain" />
                <div className="text-left">
                    <h3 className="font-semibold text-gray-800">{title}</h3>
                    <p className="text-sm text-gray-400">{price}</p>
                </div>
            </div>
            <button onClick={handleRemove} className="text-red-400 font-medium text-sm hover:text-red-600 transition-colors">
                Remove
            </button>
        </div>
    );
};

export default MyItems;