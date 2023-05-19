import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";


const ShopByCategory = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then((response) => response.json())
            .then((data) => setToys(data));
    }, []);

    return (
        <div className="mx-24 my-20">
            <div className="text-center">
                <p><small className="font-serif text-[#ff1276] tracking-widest">TRENDING PRODUCTS</small></p>
                <h1 className="mb-6">SHOP BY CATEGORY</h1>
                <p>Product: {toys.length}</p>
            </div>
            <Tabs>
                <TabList className='flex justify-around'>
                    <Tab><button className="btn arrow rounded-3xl tracking-widest">Cricket Toy</button></Tab>
                    <Tab><button className="btn arrow rounded-3xl tracking-wider">Football Toy</button></Tab>
                    <Tab><button className="btn arrow rounded-3xl">Badminton Toy</button></Tab>
                </TabList>
                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;