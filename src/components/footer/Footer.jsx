import { Facebook, Instagram, Twitter, Plus, Youtube } from "lucide-react"
export const Footer = () => {
    return (
        <footer className="bg-light text-dark py-4">
            <div className="container">
                {/* Social Media Icons */}
                <div className="row justify-content-center mb-3">
                    <div className="col-auto">
                        <div className="d-flex gap-3">
                            <a href="#" className="text-decoration-none">
                                <div
                                    className="socialIconBg rounded-circle d-flex align-items-center justify-content-center"
                                >
                                    <Facebook className="socialIcon" size={20} />
                                </div>
                            </a>
                            <a href="#" className="text-decoration-none">
                                <div
                                    className="socialIconBg rounded-circle d-flex align-items-center justify-content-center"

                                >
                                    <Instagram className="socialIcon" size={20} />
                                </div>
                            </a>
                            <a href="#" className="text-decoration-none">
                                <div
                                    className="socialIconBg rounded-circle d-flex align-items-center justify-content-center"

                                >
                                    <Twitter className="socialIcon" size={20} />
                                </div>
                            </a>
                            <a href="#" className="text-decoration-none">
                                <div
                                    className="socialIconBg rounded-circle d-flex align-items-center justify-content-center"

                                >
                                    <Plus className="socialIcon" size={20} />
                                </div>
                            </a>
                            <a href="#" className="text-decoration-none">
                                <div
                                    className="socialIconBg rounded-circle d-flex align-items-center justify-content-center"

                                >
                                    <Youtube className="socialIcon" size={20} />
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
                                    <a href="#" className="footerNav text-decoration-none">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="footerNav text-decoration-none">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="footerNav text-decoration-none">
                                        Courses
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="footerNav text-decoration-none">
                                        Register
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="footerNav text-decoration-none">
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
                            Copyright {new Date().getFullYear()}, Designed & developed by <strong><a href="https://mu-portfolio.web.app" className="muhammadUmar" target="_blank" rel="noopener noreferrer">Muhammad Umar</a></strong>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

