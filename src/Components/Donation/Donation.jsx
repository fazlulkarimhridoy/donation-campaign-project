import { useEffect, useState } from "react";
import DonationCard from "../../DonationCard/DonationCard";

const Donation = () => {
    const [donated, setDonated] = useState([]);

    useEffect(()=>{
        const storageData =JSON.parse(localStorage.getItem("donations"));
        setDonated(storageData);
    },[])




    return (
        <div className="pt-20 pb-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[1320px] mx-auto gap-6">
            {
                donated.map(data => <DonationCard key={data.id} data={data}></DonationCard>)
            }
        </div>
    );
};

export default Donation;