import React, { useState } from 'react';

type EmployerHeaderProps = {
    headers: string[],
    headerChange: (index: number) => void
}
const EmployerHeader = ({headers, headerChange}:EmployerHeaderProps) => {
    
    const [selectedMainTab, setSelectedMainTab] = useState(0);
    const headerClickHanlder = (index: number) => {
        setSelectedMainTab(index);
        headerChange(index);
    }
    return (
        <React.Fragment>
            <div className="container pt-4 d-flex justify-content-start">
                <h1>Post Job</h1>
            </div>
            <div className="emplye-header bg-primary">
                <div className="container">
                    {
                        headers.map((head, i) => {
                            return(
                                <span key={i} onClick={(event) => headerClickHanlder(i)} style={{cursor: "pointer"}} className={selectedMainTab !== i ?`text-white`: 'bg-light text-primary'}>{head}</span>
                            );
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default EmployerHeader;