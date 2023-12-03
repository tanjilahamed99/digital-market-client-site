import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
// import { FaPlus } from "react-icons/fa";
// import { BsTriangle } from "react-icons/bs";

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
                <div className=" pt-16 keen-slider__slide number-slide1 h-[100vh]  bg-cover bg-center "
                    style={{ backgroundImage: 'url(https://i.ibb.co/2n7dHW0/clem-onojeghuo-c4pbb7y-NM2c-unsplash.jpg)' }}>
                    <div className="hero-content  flex gap-10">
                        <div className="w-2/3">
                            {/* <h1 className="mb-5 text-5xl text-center text-black font-bold">Cool Gaming Essentials</h1> */}
                        </div>
                    </div>
                </div>
                <div className=" pt-16 keen-slider__slide number-slide1 h-[100vh]  bg-cover bg-center "
                    style={{ backgroundImage: 'url(https://i.ibb.co/0c1QLG0/marc-a-sporys-NO8-Sj4d-KE8k-unsplash.jpg)' }}>
                    <div className="hero-content  flex gap-10">
                        <div className="w-2/3">
                            {/* <h1 className="mb-5 text-5xl text-center text-black font-bold">Cool Gaming Essentials</h1> */}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default KeenSlider