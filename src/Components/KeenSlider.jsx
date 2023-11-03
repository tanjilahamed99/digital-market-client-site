import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { FaPlus } from "react-icons/fa";
import { BsTriangle } from "react-icons/bs";

const KeenSlider = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <>
            <div ref={sliderRef} className="keen-slider">
                {/* slider-1 */}
                <div className=" pt-16 keen-slider__slide number-slide1 h-[100vh]  bg-cover bg-center bg-gradient-to-r from-white to-gray-500">
                    <div className="hero-content  flex gap-10">
                        <div className="w-2/3">
                            <h1 className="mb-5 text-5xl text-center text-black font-bold">Cool Gaming Essentials</h1>
                        </div>
                        <div className="w-1/3 relative">
                            <img className="w-full" src="https://i.ibb.co/vcxLxHF/pngwing-com-6.png" alt="" />
                            <FaPlus className="absolute text-5xl text-white  top-16  -left-16" ></FaPlus>
                            <BsTriangle className="absolute text-2xl text-white  -top-10 left-5" ></BsTriangle>
                            <BsTriangle className="absolute text-3xl text-white  top-5 -right-5" ></BsTriangle>
                        </div>
                    </div>
                </div>
                {/* slider-2 */}
                <div className=" pt-16 keen-slider__slide number-slide2 h-[100vh]  bg-cover bg-center bg-gradient-to-r from-pink-200 to-pink-500">
                    <div className="hero-content  flex gap-10">
                        <div className="w-2/3 border-r-2">
                            <h1 className="mb-5 text-5xl text-center text-black font-bold">Beauty Products</h1>
                            <p className="text-lg my-2 text-center">Explore Top sellers</p>
                        </div>
                        <div className="w-1/3 relative">
                            <img className="w-full" src="https://i.ibb.co/Dz1qyBg/pngwing-com-7.png" alt="" />
                        </div>
                    </div>
                </div>
                {/* slider-3 */}
                <div className=" pt-16 keen-slider__slide number-slide3 h-[100vh]  bg-cover bg-center bg-gradient-to-r from-white to-gray-500">
                    <div className="hero-content  flex gap-10">
                        <div className="w-2/3">
                            <h1 className="mb-5 text-5xl text-center text-black font-bold">Best clothes</h1>
                        </div>
                        <div className="w-1/3 relative ">
                            <img className="w-[90%]" src="https://i.ibb.co/N2JfbTM/pngwing-com-8.png" alt="" />
                        </div>
                    </div>
                </div>
                {/* slider-4 */}
                {/* https://i.ibb.co/7gg5Qcs/chris-hardy-H5-Ffv4-I5-ZMI-unsplash.jpg */}
                <div className="hero keen-slider__slide number-slide3 h-[100vh]  bg-cover bg-center" style={{ backgroundImage: 'url( https://i.ibb.co/7gg5Qcs/chris-hardy-H5-Ffv4-I5-ZMI-unsplash.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className=" text-center ">
                        <div className=" text-white space-y-2">
                            <h2 className="font-bold text-3xl">New Toys Arrivals</h2>
                            <p>Fixed Price</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default KeenSlider