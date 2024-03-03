import * as React from "react"

import logoSvg from "../assets/svg-icons/logo.svg";

const FooterSection = () => {
    return (
        <div className="f-footer-regular">
            <div className="f-container-regular">
                <div className="w-layout-grid f-footer-large-link-grid">
                    <div className="f-footer-content">
                        <div className="f-margin-bottom-24">
                            <a href="#" className="f-footer-logo w-inline-block">
                                <img src={logoSvg} loading="lazy" width={124} alt="" />
                            </a>
                        </div>
                        <div className="f-margin-bottom-32">
                            <p className="f-paragraph-small">ETH.VC. All right reserved. © 2023</p>
                        </div>
                    </div>
                    <div className="f-footer-wrapper">
                        <div className="w-layout-grid f-footer-regular-grid">
                            <div className="f-footer-block">
                                <div className="f-footer-title">Products</div>
                                <a href="#" className="f-footer-link w-inline-block">
                                    <div>Product 1</div>
                                </a>
                            </div>
                            <div className="f-footer-block">
                                <div className="f-footer-title">Categories</div>
                                <a href="#" className="f-footer-link w-inline-block">
                                    <div>Travel</div>
                                </a>
                                <a href="#" className="f-footer-link w-inline-block">
                                    <div>Hosting &amp; Domain</div>
                                </a>
                                <a href="#" className="f-footer-link w-inline-block">
                                    <div>Shopping</div>
                                </a>
                                <a href="#" className="f-footer-link w-inline-block">
                                    <div>Rent</div>
                                </a>
                            </div>
                            <div className="f-footer-block">
                                <div className="f-footer-title">Company</div>
                                <a href="#" className="f-footer-link w-inline-block">
                                    <div>About</div>
                                </a>
                                <a href="#" className="f-footer-link w-inline-block">
                                    <div>News</div>
                                </a>
                                <a href="#" className="f-footer-link w-inline-block">
                                    <div>Blog</div>
                                </a>
                            </div>
                            <div className="f-footer-block">
                                <div className="f-footer-title">Info</div>
                                <a href="#" className="f-footer-link w-inline-block">
                                    <div>Cookies</div>
                                </a>
                                <a href="#" className="f-footer-link w-inline-block">
                                    <div>Terms of use</div>
                                </a>
                                <a href="#" className="f-footer-link w-inline-block">
                                    <div>Privacy</div>
                                </a>
                                <a href="#" className="f-footer-link w-inline-block">
                                    <div>F.A.Q.</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FooterSection;