import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {

    const detail = useLoaderData()
    const { _id, name, brand, price, quality, photo } = detail


    const handleCreateShirt = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const brand = form.brand.value
        const price = form.price.value
        const quality = form.quality.value
        const photo = form.photo.value
        const updateProduct = { name, brand, price, quality, photo }
        // 


        fetch(`http://localhost:5000/shirt/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'update successful',
                        'success'
                    )
                }
            })


    }

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/X84YXBK/clark-street-mercantile-qn-Kh-ZJPKFD8-unsplash.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content">
                    <div className=" w-[100%] p-10 mx-auto  text-neutral-content">
                        <Link className="flex items-center font-semibold gap-2" to={'/'}><FaArrowAltCircleLeft></FaArrowAltCircleLeft> Go Beck</Link>
                        <h2 className="text-center text-3xl font-bold mt-10 text-white">Update Your Information</h2>
                        <form onSubmit={handleCreateShirt} className="grid gap-5 justify-center grid-cols-2 mx-auto  mt-10">
                            <div>
                                <h2 className="mb-1">Shirt name</h2>
                                <input required defaultValue={name} name="name" type="text" placeholder=" Ex: denim" className="input text-black input-bordered w-full " />
                            </div>
                            <div>
                                <h2 className="mb-1">Shirt Brand</h2>
                                <input defaultValue={brand} required name="brand" type="text" placeholder="Ex: easy" className="input text-black input-bordered w-full " />
                            </div>
                            <div>
                                <h2 className="mb-1">Shirt price</h2>
                                <input defaultValue={price} required type="text" name="price" placeholder="Ex: 2000" className="input text-black input-bordered w-full " />
                            </div>
                            <div>
                                <h2 className="mb-1">Shirt quality</h2>
                                <input defaultValue={quality} required name="quality" type="text" placeholder="Ex: premium" className="input text-black input-bordered w-full " />
                            </div>
                            <div className="col-span-2">
                                <h2 className="mb-1">Shirt image</h2>
                                <input defaultValue={photo} required name="photo" type="text" placeholder="https://" className="input text-black input-bordered w-full " />
                            </div>
                            <button className="btn col-span-2 btn-accent">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;