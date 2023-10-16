import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Shirt = () => {

    const handleCreateShirt = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const brand = form.brand.value
        const price = form.price.value
        const quality = form.quality.value
        const photo = form.photo.value
        const newProduct = { name, brand, price, quality, photo }
        form.reset()


        fetch('http://localhost:5000/shirt', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire(
                        'Good job!',
                        'You added a shirt',
                        'success'
                    )
                }
            })


    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/X84YXBK/clark-street-mercantile-qn-Kh-ZJPKFD8-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content">
            <div className=" w-[50%] p-10 mx-auto  text-neutral-content">
            <Link className="flex items-center font-semibold gap-2" to={'/'}><FaArrowAltCircleLeft></FaArrowAltCircleLeft> Go Beck</Link>
                <h2 className="text-center text-3xl font-bold mt-10 text-white">Add Shirts</h2>
                <p className="text-center px-[40px] mt-3 text-white">When you add any shirt to your cart on our digital shop website, you will experience a seamless shopping journey.</p>
                <form onSubmit={handleCreateShirt} className="grid gap-5 justify-center grid-cols-2 mx-auto  mt-10">
                    <div>
                        <h2>Shirt name</h2>
                        <input required name="name" type="text" placeholder=" Ex: denim" className="input text-black input-bordered w-full " />
                    </div>
                    <div>
                        <h2>Shirt Brand</h2>
                        <input required name="brand" type="text" placeholder="Ex: easy" className="input text-black input-bordered w-full " />
                    </div>
                    <div>
                        <h2>Shirt price</h2>
                        <input required type="text" name="price" placeholder="Ex: 2000" className="input text-black input-bordered w-full " />
                    </div>
                    <div>
                        <h2>Shirt quality</h2>
                        <input required name="quality" type="text" placeholder="Ex: premium" className="input text-black input-bordered w-full " />
                    </div>
                    <div className="col-span-2">
                        <h2>Shirt image</h2>
                        <input required name="photo" type="text" placeholder="https://" className="input text-black input-bordered w-full " />
                    </div>
                    <button className="btn col-span-2 btn-accent">Add</button>
                </form>
            </div>
            </div>
        </div>

    );
};

export default Shirt;