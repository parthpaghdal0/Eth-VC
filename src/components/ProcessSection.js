import * as React from "react"

import processSvg from "../assets/svg-icons/process.svg";

const ProcessSection = () => {
    return (
        <div className="process-section">
            <div className="process-container">
                <div className="process-title-wrap">
                    <div className="heading-detail-section">how it works</div>
                </div>
                <div className="w-layout-grid process-grid">
                    <div className="process-card-primary">
                        <div className="feature-icon-square">
                            <div className="process_number">1</div>
                        </div>
                        <h3 className="feature-title">Submit the Order</h3>
                        <p className="feature-paragraph">Start by entering your order details and the website - it's your first step towards seamless crypto payments</p>
                        <img src={processSvg} loading="lazy" alt="" className="process-arrow-01" />
                    </div>
                    <div className="process-card-primary">
                        <div className="feature-icon-square feature-icon">
                            <div className="process_number">2</div>
                        </div>
                        <h3 className="feature-title">Supplier Fulfills Order</h3>
                        <p className="feature-paragraph">Our trusted suppliers fulfill your order, ensuring a smooth and reliable transaction process</p>
                        <img src={processSvg} loading="lazy" alt="" className="process-arrow-01" />
                    </div>
                    <div className="process-card-primary">
                        <div className="feature-icon-square">
                            <div className="process_number">3</div>
                        </div>
                        <h3 className="feature-title">Review for Rebates</h3>
                        <p className="feature-paragraph">Review your completed order to receive your earned crypto rebates - a rewarding finish to your transaction.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProcessSection;