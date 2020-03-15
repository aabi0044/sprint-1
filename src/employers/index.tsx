import React from 'react';
import EmployerHeader from './header';
import PostJobsSection from './sections/post-jobs';
const Employer = () => {
    return (
        <div className="bg-light">
            <EmployerHeader />
            <div className="container-fluid pt-5 bg-light ">
                <div className="row position-relative post-jobs-useless-container">
                    <div className="container-fluid post-jobs-inner-container">
                        <div className="row">
                            <div className="col-md-12">
                                <PostJobsSection />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Employer;