import './Footer.css';

function Footer() {

    return (
        <footer className="mt-5">
            <div id="footer-wrapper">
                <div className="row footer-row pb-2 mb-3 mr-0">
                    <div className="col-lg-8 col-md-12">
                        <p id="company-info-title" className="pt-3">Recognize Tools</p>
                        <div className="row-contact-content mt-2 mr-2">
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maxime nam expedita rem modi a sunt? Esse repellat doloribus impedit neque eveniet dolores nihil, aspernatur vitae! Similique facilis cum accusamus.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus amet unde quidem assumenda consequatur repudiandae at adipisci beatae mollitia officiis vero suscipit, ipsam
                            </div>
                            <div className="media-links media-links-footer mt-2">
                                <a href="#" className>
                                    <i className="fab fa-facebook" />
                                </a>
                                <a href="#" className>
                                    <i className="fab fa-instagram" />
                                </a>
                                <a href="#" className>
                                    <i className="fab fa-twitter" />
                                </a>
                                <a href="#" className>
                                    <i className="fab fa-linkedin" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <p id="contact-info-title" className="pt-3 mb-1">Contact info</p>
                        <div className="row row-contact-content mt-3">
                            <div className="col-1 p-0">
                                <i className="fas fa-map-marker-alt" />
                            </div>
                            <div className="col-11 pl-0">
                                <p>
                                    19 Nguyen Huu Tho Street, Tan Phong Ward, District 7, Ho Chi Minh City
                                </p>
                            </div>
                        </div>
                        <div className="row row-contact-content">
                            <div className="col-1 p-0">
                                <i className="fas fa-phone-alt" />
                            </div>
                            <div className="col-11 pl-0">
                                <p>
                                    +8497377212<br />
                                    +8497377221
                                </p>
                            </div>
                        </div>
                        <div className="row row-contact-content">
                            <div className="col-1 p-0">
                                <i className="far fa-envelope" />
                            </div>
                            <div className="col-11 pl-0">
                                <p>
                                    recognizetools@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="copyright" className="pb-3">
                    Recognize Tools © 2021 - All Rights Reserved
                </div>
            </div>
        </footer>
    );
}

export default Footer;