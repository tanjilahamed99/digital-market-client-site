import DisplayCloth from "./DisplayCloth";
import { useEffect, useState } from "react";
import axios from "axios";

const Clothes = () => {
    const [cloths, setCloth] = useState([])
    const limit = 10
    const [data, setData] = useState(0)
    const [pageNUm, setPageNum] = useState(0)
    const page = Math.ceil(data / limit)

    useEffect(() => {
        axios('http://localhost:5000/clothData')
            .then(res => setData(res.data.count))
    }, [])

    useEffect(() => {
        axios(`http://localhost:5000/cloth?page=${pageNUm}&limit=${limit}`)
            .then(res => setCloth(res.data))
    }, [pageNUm, limit,setCloth])

    let pageCount = []

    for (let index = 0; index < page; index++) {
        pageCount.push(index)
    }



    const handlePageChange = (i) => {
        setPageNum(i)
    }


    return (
        <div className="my-40">
            <div className="grid grid-cols-3 gap-10 items-center container mx-auto">
                {
                    cloths.map(cloth => <DisplayCloth key={cloth._id} cloth={cloth}></DisplayCloth>)
                }
            </div>
            <div className="mx-auto flex justify-center my-10">
                {
                    pageCount.map(i => <button
                        onClick={() => handlePageChange(i)}
                        className="mx-2 btn text-center" key={i}>{i}</button>)
                }
            </div>
        </div>
    );
};

export default Clothes;