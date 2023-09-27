import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';



const CardDetails = () => {

    const detailData = useLoaderData();
    const { cardId } = useParams();
    const idInt = parseInt(cardId);
    const detail = detailData.find(data => data.id === idInt);
    const { id, image, title, details, text_color, amount } = detail;


    const handleDonation = () => {
        const addedDonatedCards = [];
        const donatedCards = JSON.parse(localStorage.getItem("donations"));
        if (!donatedCards) {
            addedDonatedCards.push(detail);
            localStorage.setItem("donations", JSON.stringify(addedDonatedCards));
            swal("Good job!", "Your donation is received!", "success");

        }
        else {
            const isExist = donatedCards.find(cards => cards.id === id);
            if (!isExist) {
                addedDonatedCards.push(...donatedCards, detail);
                localStorage.setItem("donations", JSON.stringify(addedDonatedCards));
                swal("Good job!", "Your donation is received!", "success");
            }
            else {
                swal("Oops!", "Your have already donated!", "error");
            }
        }
    }


    return (
        <div className="w-[1320px] mx-auto mt-20">
            <div>
                <img className="w-[1320px] h-[700px]" src={image} alt="" />
            </div>
            <div className="pt-6 h-[100px] bg-black pl-5 opacity-50 -mt-[100px]">
                <button onClick={handleDonation} className="text-white px-6 py-3 rounded-md" style={{ backgroundColor: text_color }}>Donate ${amount}</button>
            </div>
            <div className="pb-40">
                <h3 className="text-black text-4xl font-bold mt-14 mb-6">{title}</h3>
                <p className="font-normal text-base">{details}</p>
            </div>
        </div>
    );
};

export default CardDetails;