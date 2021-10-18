import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { detailsId } = useParams();
    const [service, setService] = useState({})

    useEffect(() => {
        fetch("/services.json/1")
            .then(res => res.json())
            .then(data => console.log(data))

    }, [])
    return (
        <div>
            <h2>This is details{detailsId}</h2>
            <h1>{service.title}</h1>
        </div>
    );
};

export default Details;