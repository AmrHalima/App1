import Underline from "../Underline/Underline";
import Footer from "../Footer/Footer";
export default function About() {
    return (
        <>
            <div className="mt-5 py-4 bgc-secondary">
                <div className="container py-5 mt-3 mb-4">
                    <div className="row gy-3 w-75 m-auto">
                        <div className="col-12">
                            <Underline heading="ABOUT COMPONENT" color='-light' />
                        </div>
                        <div className="col-md-6 px-4">
                            <p>
                                Freelancer is a free bootstrap theme created by
                                Route. The download includes the complete source
                                files including HTML, CSS, and JavaScript as
                                well as optional SASS stylesheets for easy
                                customization.
                            </p>
                        </div>
                        <div className="col-md-6 px-4">
                            <p>
                                Freelancer is a free bootstrap theme created by
                                Route. The download includes the complete source
                                files including HTML, CSS, and JavaScript as
                                well as optional SASS stylesheets for easy
                                customization.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
