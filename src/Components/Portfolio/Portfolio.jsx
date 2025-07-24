import Underline from "../Underline/Underline.jsx";
import Footer from "../Footer/Footer.jsx";
import img1 from "../../assets/port1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";
import { useEffect, useState } from "react";
export default function Portfolio() {
    const data = [
        { id: 1, img: img1 },
        { id: 5, img: img2 },
        { id: 92, img: img3 },
        { id: 3, img: img1 },
        { id: 57, img: img2 },
        { id: 44, img: img3 },
    ];
    let [modalVisiablity, setModalVisiablity] = useState(false);
    let [index, setIndex] = useState(null);
    function showModal(i) {
        setIndex(i);
        setModalVisiablity(true);
    }
    function hideModal(e) {
        e.stopPropagation();
        setModalVisiablity(false);
    }

    return (
        <>
            <div className="mt-5 pt-5">
                <Underline heading="PORTFOLIO COMPONENT" color="c-primary" />
                <div className="container">
                    <div className="row g-5 pb-5">
                        {data.map((obj, i) => (
                            <div key={obj.id} className="col col-md-6 col-lg-4">
                                <img
                                    className="img-fluid rounded-3"
                                    src={obj.img}
                                    onClick={() => {
                                        showModal(i);
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                    {modalVisiablity && (
                        <div
                            onClick={hideModal}
                            className="d-flex justify-content-center align-items-center position-fixed top-0 bottom-0 start-0 end-0 bg-black z-2 bg-opacity-25"
                        >
                            <img
                                className="img-fluid rounded-3 w-50"
                                src={data[index].img}
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}
