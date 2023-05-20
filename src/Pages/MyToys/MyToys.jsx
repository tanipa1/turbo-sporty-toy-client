import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import MyToy from "./MyToy";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const navigate = useNavigate();

    const url = `http://localhost:5000/toys?seller_email=${user.email}`;

    useEffect(() => {
        fetch(url,{
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setToys(data);
                }
                else{
                    navigate('/')
                }
            })
    }, [url, navigate])

    return (
        <div className="mx-28 my-12 shadow-2xl">
            {
                toys.map(toy=> <MyToy
                    key={toy._id}
                    toy={toy}
                ></MyToy>)
            }
        </div>
    );
};

export default MyToys;