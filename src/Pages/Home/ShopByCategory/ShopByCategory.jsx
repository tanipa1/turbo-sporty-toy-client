import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Cricket from "./Cricket/Cricket";
import Football from "./Football/Football";
import Badminton from "./Badminton/Badminton";


const ShopByCategory = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('https://turbo-sporty-toy-server.vercel.app/toys')
            .then((response) => response.json())
            .then((data) => setToys(data));
    }, []);

    return (
        <div className="mx-auto lg:px-24 my-20">
            <div className="text-center">
                <p><small className="font-serif text-[#ff1276] tracking-widest">TRENDING PRODUCTS</small></p>
                <h1 className="mb-6 text-2xl lg:text-3xl font-bold">SHOP BY CATEGORY</h1>
            </div>
            <Tabs>
                <TabList className='lg:flex justify-around lg:mx-0 mx-20 mb-8'>
                    <Tab><button className="btn arrow rounded-3xl tracking-widest">Cricket Toy</button></Tab>
                    <Tab><button className="btn arrow rounded-3xl tracking-wider">Football Toy</button></Tab>
                    <Tab><button className="btn arrow rounded-3xl">Badminton Toy</button></Tab>
                </TabList>
                <TabPanel>
                    <div className="grid lg:grid-cols-3 gap-3 mx-12">
                        {
                            toys.filter(filteredToy => filteredToy.category === "cricket").map(toy => <Cricket
                                key={toy._id}
                                toy={toy}
                            ></Cricket>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid lg:grid-cols-3 gap-3 mx-12">
                        {
                            toys.filter(filteredToy => filteredToy.category === "football").map(toy => <Football
                                key={toy._id}
                                toy={toy}
                            ></Football>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid lg:grid-cols-3 gap-3 mx-12">
                        {
                            toys.filter(filteredToy => filteredToy.category === "badminton").map(toy => <Badminton
                                key={toy._id}
                                toy={toy}
                            ></Badminton>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;