import * as React from "react"

import heroSvg from "../assets/svg-icons/hero.svg";

const HeroSection = () => {
    return (
        <div className="f-section-small hero">
            <div className="f-container-regular">
                <div className="w-layout-grid f-grid-two-column">
                    <div>
                        <div className="f-margin-bottom-12">
                            <h3 className="f-h3-heading smaller">Regardless of acceptance</h3>
                            <h3 className="f-h3-heading">Pay any bills with crypto</h3>
                            <div className="f-margin-bottom-16">
                                <h3 className="f-h3-heading smaller">Development &amp; Design</h3>
                            </div>
                        </div>
                        <div className="f-margin-bottom-40">
                            <p className="f-paragraph-large--tw1">Use crypto for any purchase or bill and get 10% back</p>
                        </div>
                        <div className="f-header-form-block w-form">
                            <form className="f-header-form-wrapper">
                                <input type="email" className="input_form w-input" maxLength="256" placeholder="Enter your email" required="" />
                                <input type="submit" value="Get Started" className="f-button-neutral w-button" />
                            </form>
                            <div className="f-success-message w-form-done">
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail">
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                        </div>
                    </div>
                    <div className="f-header-imag-square visible">
                        <img src={heroSvg} loading="lazy" alt="" className="f-image-cover contain hero_image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;