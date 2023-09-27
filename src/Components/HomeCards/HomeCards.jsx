import { useEffect, useState } from "react";
import HomeCard from "../../HomeCard/HomeCard";

const HomeCards = () => {
    const [cardData,setCardData] = useState([]);


    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setCardData(data))
    },[])



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[1320px] mx-auto mt-10 mb-48 gap-6">
            {
                cardData?.map(data => <HomeCard key={data.id} data={data}></HomeCard>)
            }
            
        </div>
    );
};

export default HomeCards;