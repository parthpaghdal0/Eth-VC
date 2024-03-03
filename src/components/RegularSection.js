import * as React from "react"
import Lottie from 'lottie-react';

import reg0Svg from "../assets/svg-icons/reg_0.svg"
import reg1Svg from "../assets/svg-icons/reg_1.svg"
import reg2Svg from "../assets/svg-icons/reg_2.svg"
import reg3Svg from "../assets/svg-icons/reg_3.svg"
import reg4Svg from "../assets/svg-icons/reg_4.webp"
import reg5Svg from "../assets/svg-icons/reg_5.svg"
import reg6Svg from "../assets/svg-icons/reg_6.webp"
import reg7Svg from "../assets/svg-icons/reg_7.svg"
import reg8Svg from "../assets/svg-icons/reg_8.svg"

import regB1Svg from "../assets/svg-icons/reg_blockchain1.svg"
import regB2Svg from "../assets/svg-icons/reg_blockchain2.svg"
import regB3Svg from "../assets/svg-icons/reg_blockchain3.svg"
import regB4Svg from "../assets/svg-icons/reg_blockchain4.svg"
import regB5Svg from "../assets/svg-icons/reg_blockchain5.svg"

import regC1Svg from "../assets/svg-icons/reg_cur1.svg"
import regC2Svg from "../assets/svg-icons/reg_cur2.svg"
import regC3Svg from "../assets/svg-icons/reg_cur3.svg"
import regC4Svg from "../assets/svg-icons/reg_cur4.svg"
import regC5Svg from "../assets/svg-icons/reg_cur5.svg"

import animData from "../assets/json/regular.json"

const RegularSection = () => {
    return (
        <div className="section-regular infographic">
            <div className="container-large-2">
                <div className="heading-wrapper">
                    <h1 className="heading-content--tw1 smaller">Support <strong>10K+</strong> Websites <br />
                        <strong>14+</strong> Different Blockchains <br />
                        <strong>140+ </strong>Crypto and Stablecoin
                    </h1>
                    <p className="f-paragraph-large--tw1">Built for the modern modern financial interactions</p>
                </div>
                <div className="lottie-wrapper">
                    <Lottie
                        animationData={animData}
                        loop={true}
                        autoplay
                    />
                    <div className="shadow_wrapper _5">
                        <img src={reg0Svg} loading="lazy" alt="" className="image_small" />
                    </div>
                    <div className="shadow_wrapper _4">
                        <img src={reg7Svg} loading="lazy" alt="" className="image_logos large" />
                    </div>
                    <div className="shadow_wrapper _3">
                        <img src={reg5Svg} loading="lazy" alt="" className="image_logos large" />
                    </div>
                    <div className="shadow_wrapper _2">
                        <img src={reg3Svg} loading="lazy" alt="" className="image_logos large" />
                    </div>
                    <div className="shadow_wrapper _7">
                        <img src={reg4Svg} loading="lazy" alt="" className="icon_apple" />
                    </div>
                    <div className="shadow_wrapper _9">
                        <img src={reg8Svg} loading="lazy" alt="" className="icon_apple" />
                    </div>
                    <div className="shadow_wrapper _8">
                        <img src={reg6Svg} loading="lazy" alt="" className="icon_apple" />
                    </div>
                    <div className="shadow_wrapper _6">
                        <img src={reg2Svg} loading="lazy" alt="" className="image_logos large" />
                    </div>
                    <div className="shadow_wrapper">
                        <img src={reg1Svg} loading="lazy" alt="" className="image_logos" />
                    </div>
                </div>
                <div className="w-layout-grid grid-two-column">
                    <div id="w-node-_32750f96-9846-52f3-8f7b-763e74d27e19-02cc0be2">
                        <div id="w-node-_32750f96-9846-52f3-8f7b-763e74d27e1a-02cc0be2" className="card-integration">
                            <div className="integration-title-wrapper">
                                <h6 className="h6-heading-2">Broad Blockchain Selection</h6>
                                <div className="integration-detail-wrapper">
                                    <div className="feature-paragraph">Choose any of 14 blockchains to suit your transaction need</div>
                                </div>
                            </div>
                            <div className="client-logo-carousel">
                                <div className="gradient-panel-left"></div>
                                <div className="gradient-panel-right"></div>
                                <div className="carousel-track">
                                    <div className="carousel-group">
                                        <a href="#" className="logo-carousel w-inline-block">
                                            <img src={regB1Svg} loading="lazy" width="80" alt="" />
                                        </a>
                                        <a href="#" className="logo-carousel w-inline-block">
                                            <img src={regB2Svg} loading="lazy" width="80" alt="" />
                                        </a>
                                        <a href="#" className="logo-carousel w-inline-block">
                                            <img src={regB3Svg} loading="lazy" width="80" alt="" />
                                        </a>
                                        <a href="#" className="logo-carousel w-inline-block">
                                            <img src={regB4Svg} loading="lazy" width="80" alt="" />
                                        </a>
                                        <a href="#" className="logo-carousel w-inline-block">
                                            <img src={regB5Svg} loading="lazy" width="80" alt="" />
                                        </a>
                                    </div>
                                    <div className="carousel-group">
                                        <a href="#" className="logo-carousel w-inline-block">
                                            <img src={regB1Svg} loading="lazy" width="80" alt="" />
                                        </a>
                                        <a href="#" className="logo-carousel w-inline-block">
                                            <img src={regB2Svg} loading="lazy" width="80" alt="" />
                                        </a>
                                        <a href="#" className="logo-carousel w-inline-block">
                                            <img src={regB3Svg} loading="lazy" width="80" alt="" />
                                        </a>
                                        <a href="#" className="logo-carousel w-inline-block">
                                            <img src={regB4Svg} loading="lazy" width="80" alt="" />
                                        </a>
                                        <a href="#" className="logo-carousel w-inline-block">
                                            <img src={regB5Svg} loading="lazy" width="80" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="w-node-_32750f96-9846-52f3-8f7b-763e74d27e3b-02cc0be2">
                        <div id="w-node-_32750f96-9846-52f3-8f7b-763e74d27e3c-02cc0be2" className="card-integration">
                            <div className="integration-title-wrapper">
                                <h6 className="h6-heading-2">Choose from 140+ Currencies</h6>
                                <div className="integration-detail-wrapper">
                                    <div className="feature-paragraph">Multiple Blockchains, Diverse Crypto and Fiat Choices</div>
                                </div>
                            </div>
                            <div className="client-logo-carousel">
                                <div className="gradient-panel-left"></div>
                                <div className="gradient-panel-right"></div>
                                <div className="carousel-track">
                                    <div className="carousel-group">
                                        <a href="#" className="logo-carousel w-inline-block">
                                            <img src={regC1Svg} loading="lazy" width="80" alt="" />
                                        </a>
                                        <a href="#" className="logo-carousel w-inline-block">
                                            <img src={regC2Svg} loading="lazy" width="80" alt="" />
                                        </a>
                                        <a href="#" className="logo-carousel w-inline-block">
                                            <img src={regC3Svg} loading="lazy" width="80" alt="" />
                                        </a>
                                        <a href="#" className="logo-carousel w-inline-block">
                                            <img src={regC4Svg} loading="lazy" width="80" alt="" />
                                        </a>
                                        <a href="#" className="logo-carousel w-inline-block">
                                            <img src={regC5Svg} loading="lazy" width="80" alt="" />
                                        </a>
                                    </div>
                                    <div className="carousel-group">
                                        <a href="#" className="logo-carousel w-inline-block">
                                            <img src={regC1Svg} loading="lazy" width="80" alt="" />
                                        </a>
                                        <a href="#" className="logo-carousel w-inline-block">
                                            <img src={regC2Svg} loading="lazy" width="80" alt="" />
                                        </a>
                                        <a href="#" className="logo-carousel w-inline-block">
                                            <img src={regC3Svg} loading="lazy" width="80" alt="" />
                                        </a>
                                        <a href="#" className="logo-carousel w-inline-block">
                                            <img src={regC4Svg} loading="lazy" width="80" alt="" />
                                        </a>
                                        <a href="#" className="logo-carousel w-inline-block">
                                            <img src={regC5Svg} loading="lazy" width="80" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegularSection;