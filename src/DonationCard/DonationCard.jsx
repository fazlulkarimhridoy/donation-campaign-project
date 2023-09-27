/* eslint-disable react/prop-types */
const DonationCard = ({ data }) => {
    const { image, title, category, amount, button_background_color, text_color, background_color } = data;
    return (
        <div>
            <div style={{ backgroundColor: `${background_color}` }} className="h-[200px] card lg:card-side">
                <figure><img className="w-[220px] h-[200px]" src={image} alt="Album" /></figure>
                <div className="card-body">
                    <div className="rounded">
                        <h4 className="w-1/3 text-sm font-medium rounded-lg text-center p-2" style={{ backgroundColor: `${button_background_color}`}}>{category}</h4>
                    </div>
                    <p className="text-2xl font-semibold text-black">{title}</p>
                    <h3 style={{color: `${text_color}`}} className="font-semibold">${amount}</h3>
                    <div className="card-actions">
                        <button style={{backgroundColor: `${text_color}`}} className="text-white btn px-6 py-3">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;