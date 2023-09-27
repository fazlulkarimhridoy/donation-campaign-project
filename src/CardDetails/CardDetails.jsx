import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
    
const detailData = useLoaderData();
const {id} = useParams();
const idInt = parseInt(id);
const detail = detailData.find(data => data.id === idInt);
const {image, title, details } = detail;


    return (
        <div>
            <h3>Details of cards : {id}</h3>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{details}</p>
            
        </div>
    );
};

export default CardDetails;