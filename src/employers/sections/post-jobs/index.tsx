import React, { useState } from 'react';
import TabsNavigator from '../../tabs-navigator';
import JobDetails from './job-details';
import JobLocation from './job-location';
import SalaryDetails from './salary-details';
import JobSettings from './job-settings';
import { Row, Col, Button } from 'reactstrap';

const POST_JOBS_TABS = ['Job Details',
    'Job Location',
    'Salary Details',
    'Job Settings']
const PostJobsSection = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const switchTabHandler = (index: number) => {
        setSelectedTab(index);
    }
    return (
        <React.Fragment>
            <div className="container">
                <div className="post-jobs-inner-div">
                    {selectedTab === 0 &&
                        <JobDetails>
                            <TabsNavigator
                                onTabSwitch={(index) => switchTabHandler(index)}
                                tabs={POST_JOBS_TABS}
                                currentTab={selectedTab}
                            />
                        </JobDetails>}
                    {selectedTab === 1 &&
                        <JobLocation>
                            <TabsNavigator
                                onTabSwitch={(index) => switchTabHandler(index)}
                                tabs={POST_JOBS_TABS}
                                currentTab={selectedTab}
                            />
                        </JobLocation>}
                    {selectedTab === 2 &&
                        <SalaryDetails>
                            <TabsNavigator
                                onTabSwitch={(index) => switchTabHandler(index)}
                                tabs={POST_JOBS_TABS}
                                currentTab={selectedTab}
                            />
                        </SalaryDetails>}
                    {selectedTab === 3 &&
                        <JobSettings>
                            <TabsNavigator
                                onTabSwitch={(index) => switchTabHandler(index)}
                                tabs={POST_JOBS_TABS}
                                currentTab={selectedTab}
                            />
                        </JobSettings>}
                </div>



                {/* {selectedTab === 1 && <JobLocation />}
                {selectedTab === 2 && <SalaryDetails />}
                {selectedTab === 3 && <JobSettings />} */}
                {/* <JobDetails /> */}
                {/* <Row>
                    <Col md="6" sm="12" xs="12" >
                        <span className="text-danger">Error</span>
                    </Col>
                    <Col md="6" sm="12" xs="12" >
                        <div className="d-flex justify-content-between">
                            <Button className="text-primary" >Save & Preview</Button>
                            <Button className="text-white btn btn-primary" >Post</Button>
                        </div>
                    </Col>
                </Row> */}
            </div>
        </React.Fragment>
    );
}

export default PostJobsSection;