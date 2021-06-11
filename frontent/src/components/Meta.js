import React from 'react'
import { Helmet } from "react-helmet"

const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title> {title} </title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps = {
    title: "Welcome to 46Shops",
    keywords: "MP46, Sanket Bagad, SB, Online Shopping, Khetia, Shahada, khetia, shahada, khetia shopping, 46Shops",
    description: "We Sell Best Products At Cheap Price In Khetia Shahada And Nearby Areas In MP46 and MH39"
}

export default Meta
