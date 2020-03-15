import React, { useState } from 'react';

const EmployerHeader = () => {
    const HEADERS = [
        'POST JOBS',
        'ACTIVE JOBS',
        'MY PROFILE',
        'PRODUCTS',
        'REPORTS',
        'TEMPLATES',
        'SUB-USERS'
    ];

    const [selectedMainTab, setSelectedMainTab] = useState(0);
    const headerClickHanlder = (index: number) => {
        setSelectedMainTab(index);
    }
    return (
        <React.Fragment>
            <div className="container pt-4 d-flex justify-content-start">
                <h1>Post Job</h1>
            </div>
            <div className="container-fluid bg-primary py-2">
                {
                    HEADERS.map((head, i) => {
                        return(
                            <span key={i} onClick={(event) => headerClickHanlder(i)} style={{cursor: "pointer"}} className={selectedMainTab !== i ?`text-white px-5 py-2`: 'bg-light text-primary px-5 py-2'}>{head}</span>
                        );
                    })
                }
            </div>
        </React.Fragment>
    );
}

export default EmployerHeader;