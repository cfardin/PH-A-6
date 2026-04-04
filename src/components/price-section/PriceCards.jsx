import { FaCheck } from 'react-icons/fa6';
import { RiH4 } from 'react-icons/ri';
import { toast } from 'react-toastify';

const PriceCards = ({ cards, selected, setSelected}) => {
    // console.log(price);
    const {image, title, badge, description, price, billing_cycle, features } = cards;
    //  const [isSelected, setIsSelected] = useState(false);
    const isSelected = selected.some(item => item.title === title);

    const handleSelection = () =>{

        toast(`${title} added to cart`);
        if (!isSelected) {
            setSelected([...selected, cards]);
        }


    }



    const productTag = {
        "Best-Seller" : <div className="badge badge-soft badge-warning">Best Seller</div>,
        "Popular" : <div className="badge badge-soft badge-primary">Popular</div>,
        "New" : <div className="badge badge-soft badge-success">New</div>
    }
    return (
        <div className='w-full shadow-sm p-6 rounded-2xl space-y-4'>
            <div className='flex justify-between items-center'>
                <img src={image} alt={title} />
                {
                    productTag[badge]
                }
            </div>
            <div className='text-left'>
                <h3 className='text-2xl font-bold'>{title}</h3>
                <p className='text-[#627382] my-4'>{description}</p>
            </div>

            <div className='flex items-center mb-4'>
                <h3 className='text-2xl font-bold'>${price}</h3>
                <p className='text-[#627382]' >/{billing_cycle}</p>
            </div>

            <div className="text-left mb-4">
                {
                    features.map((f, i) => (<div key={i} className='flex items-center gap-1'>
                        <FaCheck className='text-green-500' ></FaCheck>
                        <h4>{f}</h4>
                    </div>))
                }
            </div>

            <div>
                <button onClick={() => handleSelection(price)} disabled ={isSelected ? true : false} className="btn w-full rounded-[25px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">{isSelected ? "In Cart" : "Buy Now"}</button>
            </div>

        </div>
    );
};

export default PriceCards;