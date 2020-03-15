import React, { useState } from 'react';
import EmployerHeader from './header';
import PostJobsSection from './sections/post-jobs';
import ActiveJobs from './sections/active-jobs';
import MyProfile from './sections/my-profile';
import Products from './sections/products';
import Reports from './sections/reports';
import Templates from './sections/templates';
import SubUsers from './sections/sub-users';

const employersHeaders = [
    'POST JOBS',
    'ACTIVE JOBS',
    'MY PROFILE',
    'PRODUCTS',
    'REPORTS',
    'TEMPLATES',
    'SUB-USERS'
]
const Employer = () => {
    const [selectedHeader, setSelectedHeader] = useState(0);

    const headerChangeHandler = (index: number) => {
        setSelectedHeader(index);
    }
    return (
        <div className="bg-light">
            <EmployerHeader headerChange={(index) => headerChangeHandler(index)} headers={employersHeaders}  />
            <div className="container-fluid pt-5 bg-light ">
                <div className="row position-relative post-jobs-useless-container">
                    <div className="container-fluid post-jobs-inner-container">
                        <div className="row">
                            <div className="col-md-12">
                                {selectedHeader === 0 && <PostJobsSection />}
                                {selectedHeader === 1    && <ActiveJobs />}
                                {selectedHeader === 2    && <MyProfile />}
                                {selectedHeader === 3    && <Products />}
                                {selectedHeader === 4    && <Reports />}
                                {selectedHeader === 5    && <Templates />}
                                {selectedHeader === 6    && <SubUsers />}
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Employer;