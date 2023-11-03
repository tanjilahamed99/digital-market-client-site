const Add = () => {
    return (
        <div className=" h-[300px] container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center ">
                {/* card 1 */}
                <div className="card bg-base-100 shadow-xl shadow-gray-400 p-5">
                    <h2 className="font-bold text-xl">Beat Gaming Products</h2>
                    <img className="w-1/2 h-[200px] mx-auto" src="https://i.ibb.co/cXyw73t/pngwing-com-10.png" alt="Shoes" />
                    <div className=" space-y-2">
                        <h2 className="card-title">Price: 200$</h2>
                        <div className="card-actions">
                            <button className="btn btn-outline">See More</button>
                        </div>
                    </div>
                </div>
                {/* card 1 */}
                <div className="card bg-base-100 shadow-xl shadow-gray-400 p-5">
                    <h2 className="font-bold text-xl">Beat Gaming Products</h2>
                    <img className="w-1/2 h-[200px] mx-auto" src="https://i.ibb.co/cXyw73t/pngwing-com-10.png" alt="Shoes" />
                    <div className=" space-y-2">
                        <h2 className="card-title">Price: 200$</h2>
                        <div className="card-actions">
                            <button className="btn btn-outline">See More</button>
                        </div>
                    </div>
                </div>
                {/* card 1 */}
                <div className="card bg-base-100 shadow-xl shadow-gray-400 p-5">
                    <h2 className="font-bold text-xl">Beat Gaming Products</h2>
                    <img className="w-1/2 h-[200px] mx-auto" src="https://i.ibb.co/cXyw73t/pngwing-com-10.png" alt="Shoes" />
                    <div className=" space-y-2">
                        <h2 className="card-title">Price: 200$</h2>
                        <div className="card-actions">
                            <button className="btn btn-outline">See More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Add;