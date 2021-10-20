import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { id } = useParams();
    const [services, setServices] = useState([]);
    const [singleService, setSingleService] = useState({});
    console.log(singleService);

    useEffect(() => {
        const url = "https://raw.githubusercontent.com/ragibBarket317/jsonapi/gh-pages/services.json";
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    useEffect(() => {
        const result = services ? services.find(td => td.id == id) : []
        setSingleService(result);
    }, [services])
    return (
        <div className="container py-3">
            <div>
                <img class="w-100" src={singleService?.img} alt="" />
                <h1 className="text-center my-3">{singleService?.title}</h1>
                <p class="fs-5">{singleService?.details}</p>
            </div>
        </div>
    );
};

export default Details;