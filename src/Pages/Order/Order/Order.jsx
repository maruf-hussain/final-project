import { Helmet } from 'react-helmet-async';
import orderCoverImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
    const catagories = ['salad', 'pizza', 'dessert', 'soup', 'drinks'];
    const {category} = useParams();
    const initialIndex = catagories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <Helmet><title>Order</title></Helmet>
            <Cover img={orderCoverImg} title="order food"></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className=" my-8 text-yellow-500 text-center  p-2 rounded-lg">
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>DESSERT</Tab>
                    <Tab>SOUP</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>

                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;