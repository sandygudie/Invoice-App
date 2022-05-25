import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Tab.css";
import { BiStoreAlt } from "react-icons/bi";

const BasketTabs = () => {
  return (
      <Tabs>
        <TabList className="text-gray-100 text-sm border-b border-b-gray-300">
          <Tab>Paid</Tab>
          <Tab>Pending</Tab>
          <Tab>Completed</Tab>
        </TabList>

        <TabPanel>
          <div className="flex flex-col justify-center items-center h-80">
            <p className="p-3 bg-primary/10 text-3xl text-primary rounded-full">
              <BiStoreAlt />
            </p>
            <p className="text-gray-100 text-sm mt-1">No Paid Baskets,yet!</p>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>pending</h2>
        </TabPanel>
        <TabPanel>
          <h2>Completed</h2>
        </TabPanel>
      </Tabs>

  );
};
export default BasketTabs;
