const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/X84YXBK/clark-street-mercantile-qn-Kh-ZJPKFD8-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Our digital shop website offers a seamless shopping experience with features like a
                   user-friendly interface, secure payments, diverse product categories,
                    personalized recommendations,
                    real-time customer support, easy order tracking, and fast delivery.</p>
                   
                </div>
            </div>
        </div>

    );
};

export default Banner;