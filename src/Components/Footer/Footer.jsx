import React from "react";

export default function Footer() {
    return (
        <div className="footer bgc-primary">
            <div className="container-sm py-5">
                <div className="d-flex gap-md-5 gap-sm-5 flex-column flex-lg-row text-center justify-content-evenly py-5">
                    <div>
                        <h3>LOCATION</h3>
                        <p>
                            2215 John Daniel Drive <br /> Clark, MO 65243
                        </p>
                    </div>
                    <div>
                        <h3>AROUND THE WEB</h3>
                        <div className="d-flex gap-1 justify-content-center text-light">
                            <i className="fa-brands fa-facebook icon"></i>
                            <i className="fa-brands fa-twitter icon"></i>
                            <i className="fa-brands fa-linkedin-in icon"></i>
                            <i className="fa fa-globe icon"></i>
                        </div>
                    </div>
                    <div>
                        <h3>ABOUT FREELANCER</h3>
                        <p>
                            Freelance is a free to use,
                            <br /> licensed Bootstrap theme
                            <br /> created by Route
                        </p>
                    </div>
                </div>
            </div>
            <p className="px-5 py-4 text-center bgc-footer m-0">
                Copyright © Your Website 2025
            </p>
        </div>
    );
}
