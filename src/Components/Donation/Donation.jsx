import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";

const Donation = () => {
    const [donated, setDonated] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        const storageData = JSON.parse(localStorage.getItem("donations"));
        setDonated(storageData);
    }, [])


    return (
        <div className="pt-20 pb-40 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[1320px] mx-auto gap-6">
                {
                    donated.slice(0, dataLength).map(data => <DonationCard key={data.id} data={data}></DonationCard>)
                }

            </div>
            <div className={dataLength === donated.length && 'hidden'}>
                <div className="flex justify-center pt-10">
                    <button
                        onClick={() => setDataLength(donated.length)} className="bg-green-600 text-white px-6 py-3 rounded-lg">Show All</button>
                </div>
            </div>
            <div className={dataLength > 4 || 'hidden'}>
                <div className="flex justify-center pt-10">
                    <button
                        onClick={() => setDataLength(4)} className="bg-green-600 text-white px-6 py-3 rounded-lg">Show Less</button>
                </div>
            </div>
        </div>
    );
};

export default Donation;