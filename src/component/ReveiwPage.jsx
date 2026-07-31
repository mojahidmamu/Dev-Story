"use client";
import React, { useEffect, useState } from 'react';

const ReveiwPage = () => {
    const [reviews, setReviews] = useState();
    useEffect( () => {
        fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
        .then(res => res.json())
        .then(data =>  setReviews(data))
    }, [])

    return (
        <div>
            <h1>All Reviews here: {setReviews.length}</h1>
        </div>
    );
};

export default ReveiwPage;