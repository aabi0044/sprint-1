import React, { useState } from 'react';
import TabsNavigator from '../../tabs-navigator';
import { Row, Col, Button } from 'reactstrap';
import UnProcessed from './unprocessed';
import ShortListed from './shortlisted';
import Rejected from './rejected';

const ACTIVE_JOBS_TABS = [
    'Unprocessed',
    'Shortlisted',
    'Rejected']
const ActiveJobs = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const switchTabHandler = (index: number) => {
        setSelectedTab(index);
    }
    return (
        <React.Fragment>
            <div className="container">
                <div className="post-jobs-inner-div">
                    {selectedTab === 0 &&
                        <UnProcessed>
                            <TabsNavigator
                                onTabSwitch={(index) => switchTabHandler(index)}
                                tabs={ACTIVE_JOBS_TABS}
                                currentTab={selectedTab}
                            />
                        </UnProcessed>}
                    {selectedTab === 1 &&
                        <ShortListed>
                            <TabsNavigator
                                onTabSwitch={(index) => switchTabHandler(index)}
                                tabs={ACTIVE_JOBS_TABS}
                                currentTab={selectedTab}
                            />
                        </ShortListed>}
                    {selectedTab === 2 &&
                        <Rejected>
                            <TabsNavigator
                                onTabSwitch={(index) => switchTabHandler(index)}
                                tabs={ACTIVE_JOBS_TABS}
                                currentTab={selectedTab}
                            />
                        </Rejected>}
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

export default ActiveJobs;