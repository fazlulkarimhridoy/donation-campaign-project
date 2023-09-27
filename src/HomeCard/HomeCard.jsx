/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const HomeCard = ({ data }) => {
    const { id, category, title, image, background_color, text_color, button_background_color } = data;



    return (
        <div>
            <Link to={`/cardDetails/${id}`}>
                <div style={{ backgroundColor: `${background_color}` }} className="w-[312px] h-[300px] flex flex-col rounded-lg">
                    <div className=" pb-2 m-0 overflow-hidden bg-transparent bg-clip-border">
                        <img className="w-[312px] h-[194px]"
                            src={image}
                            alt="ui/ux review check"
                        />
                    </div>
                    <div>
                        <div  className="p-2 rounded">
                            <h4 className="w-1/3 text-sm font-medium rounded-lg text-center p-2" style={{ backgroundColor: `${button_background_color}`, color: `${text_color}` }}>{category}</h4>
                        </div>
                        <div >
                        <h4 style={{ color: `${text_color}` }} className="pl-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                            {title}
                        </h4>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default HomeCard;