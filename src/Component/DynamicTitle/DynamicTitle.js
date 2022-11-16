import React from 'react';
import { Helmet } from 'react-helmet-async';

const DynamicTitle = ({title}) => {
    return (
        <div>
            <Helmet>
                <title>{title} - Website Important things</title>
            </Helmet>
        </div>
    );
};

export default DynamicTitle;