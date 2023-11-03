import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import DisplayProducts from "./DisplayProducts";
import Swal from "sweetalert2";


const CustomerProducts = () => {
    const { user } = useContext(AuthContext)
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/myproducts/?email=${user.email}`, { withCredentials: true })
            .then(res => setProducts(res.data))
    }, [user])


    const handleDelete = _id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/myproducts/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Good job!',
                                'shirt delete dane',
                                'delete'
                            )
                            const reaming = products.filter(item => item._id !== _id)
                            setProducts(reaming)
                        }
                    })
            }
        })
    }




    return (
        <div>
            <h2 className="text-center text-2xl font-semibold mt-10">My Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 my-10">
                {
                    products.map(product => <DisplayProducts key={product._id} product={product} handleDelete={handleDelete}></DisplayProducts>)
                }
            </div>
        </div>
    );
};

export default CustomerProducts;