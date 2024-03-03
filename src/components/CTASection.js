import * as React from "react"

import CTA1_01 from "../assets/svg-icons/cta1_01.svg";
import CTA1_02 from "../assets/svg-icons/cta1_02.svg";

const CTASection = () => {
    return (
        <div className="a-cta-section-blue">
            <div className="a-cta-container-xl">
                <div className="a-margin-bottom-16">
                    <div className="a-detail-regular">see for yourself</div>
                </div>
                <div>
                    <h2 className="heading-content--tw1 colorwhite">Enter your webstie</h2>
                </div>
                <div className="a-margin-bottom-48">
                    <div className="a-max-width-medium">
                        <p className="a-paragraph-regular a-text-color-white">See it for yourself, enter a website URL and get started</p>
                    </div>
                </div>
                <div className="f-header-form-block w-form">
                    <form id="email-form" name="email-form" className="f-header-form-wrapper" >
                        <input type="email" className="input_form w-input" maxLength="256" placeholder="Header Website link" required="" />
                        <input type="submit" value="Get Started" className="f-button-neutral w-button" />
                    </form>
                    <div className="f-success-message w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                </div>
                <img src={CTA1_01} loading="lazy" alt="" className="a-cta-image-left" />
                <img src={CTA1_02} loading="lazy" alt="" className="a-cta-image-right" />
            </div>
        </div>
    )
}

export default CTASection;