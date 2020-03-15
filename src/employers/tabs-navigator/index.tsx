import React, { useState } from 'react';
import '../employers.styles.css';

type TabsProps = {
    tabs: string[],
    currentTab: number,
    onTabSwitch: (index: number) => void
}
const TabsNavigator = ({tabs,currentTab, onTabSwitch}: TabsProps) => {

    const [selectedTab, setSelectedTab] = useState(currentTab);
    const headerClickHanlder = (index: number) => {
        setSelectedTab(index);
        onTabSwitch(index);
    }
    return (
        <React.Fragment>
            <div className="container mt-3 py-2">
                {
                    tabs.map((tab, i) => {
                        return(
                            <span key={i} onClick={(event) => headerClickHanlder(i)} style={{cursor: "pointer"}} className={selectedTab !== i ?` non-active-tab`: 'active-tab text-primary  '}>{tab}</span>
                        );
                    })
                }
            </div>
        </React.Fragment>
    );
}

export default TabsNavigator;