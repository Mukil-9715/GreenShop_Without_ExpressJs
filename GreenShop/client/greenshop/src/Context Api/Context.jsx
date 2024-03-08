import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const Greenshop = createContext();

export function Contexts({ children }) {
  const [data, setdata] = useState([]);
  const [uniquedata, setuniquedata] = useState();
  const [productdata, setproductdata] = useState([]);
  const [userdata, setuserdata] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [plant_Id, setplant_Id] = useState("");
  const [cartdata, setcartdata] = useState([]);
  const [qty, setQty] = useState(1);

  // const handleDelete = (id) => {
  //   axios
  //     .delete("http://localhost:8000/api/task/" + id)
  //     .then((res) => {
  //       console.log(res.data);
  //       setRenderdata(!renderdata);
  //     })
  //     .catch((err) => console.log(err));
  // };
  useEffect(() => {
    const getuniData = async () => {
      let got = await axios.get("http://localhost:8000/cards/" + plant_Id);
      console.log(plant_Id);
      console.log(got.data);
      const unData = JSON.parse(JSON.stringify(got.data));
      setuniquedata(unData);
      // setuniquedata(got.data);
    };
    getuniData();
  }, [plant_Id]);
  useEffect(() => {
    const getData = async () => {
      let got = await axios.get("http://localhost:8000/cards");
      setdata(await got.data);
    };
    getData();
  }, []);
  console.log(data);

  useEffect(() => {
    const getData = async () => {
      let usersdata = await axios.get("http://localhost:8000/user");
      setuserdata(await usersdata.data);
    };
    getData();
  }, []);
  console.log(userdata);

  return (
    <Greenshop.Provider
      value={{
        data,
        setdata,
        productdata,
        setproductdata,
        userdata,
        isModalOpen,
        setIsModalOpen,
        uniquedata,
        setuniquedata,
        plant_Id,
        setplant_Id,
        cartdata,
        setcartdata,
        qty,
        setQty,
      }}
    >
      {children}
    </Greenshop.Provider>
  );
}

export default Greenshop;
