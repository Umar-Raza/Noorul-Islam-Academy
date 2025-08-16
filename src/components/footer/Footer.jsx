import { Facebook, Instagram, Twitter, Plus, Youtube } from "lucide-react"
import { Link } from "react-router"
export const Footer = () => {
    return (
        <footer className=" text-dark py-4">
            <div className="container">
                {/* Social Media Icons */}
                <div className="row justify-content-center mb-3">
                    <div className="col-auto">
                        <div className="d-flex gap-3">
                            <a href="https://www.facebook.com/profile.php?id=100064226463710&mibextid=ZbWKwL" target="_blank" className="text-decoration-none">
                                <div
                                    className="socialIconBg rounded-circle d-flex align-items-center justify-content-center"
                                >
                                    <Facebook className="socialIcon" size={20} />
                                </div>
                            </a>
                            <a href="https://www.instagram.com/noor_ul_islam_academy" target="_blank" className="text-decoration-none">
                                <div
                                    className="socialIconBg rounded-circle d-flex align-items-center justify-content-center"

                                >
                                    <Instagram className="socialIcon" size={20} />
                                </div>
                            </a>

                            <a href="https://www.tiktok.com/@noor.ul.islam.academy?_t=ZS-8yDW2Al8m1J&_r=1" target="_blank" className="text-decoration-none">
                                <div
                                    className="socialIconBg rounded-circle d-flex align-items-center justify-content-center"

                                >
                                    <i className="bi bi-tiktok socialIcon" size={20}></i>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="row justify-content-center mb-3">
                    <div className="col-auto">
                        <nav>
                            <ul className="list-unstyled d-flex gap-4 mb-0">
                                <li>
                                    <a href="/" className="footerNav text-decoration-none">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#about" className="footerNav text-decoration-none">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#courses" className="footerNav text-decoration-none">
                                        Courses
                                    </a>
                                </li>
                                <li>
                                    <Link to="/registration" className="footerNav text-decoration-none">
                                        Register
                                    </Link>



                                </li>
                                <li>
                                    <a href="#contact" className="footerNav text-decoration-none">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* Copyright */}
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p className="mb-0 text-center small">
                            Copyright {new Date().getFullYear()}, Developed by <strong><a href="https://mu-portfolio.web.app" className="muhammadUmar" target="_blank" rel="noopener noreferrer">Muhammad Umar</a></strong>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

