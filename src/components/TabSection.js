import * as React from "react"

import metaSvg from "../assets/svg-icons/cat_meta.svg";
import amazonSvg from "../assets/svg-icons/cat_amazon.svg";
import steamSvg from "../assets/svg-icons/cat_steam.svg";
import stripeSvg from "../assets/svg-icons/cat_stripe.svg";
import opelSvg from "../assets/svg-icons/cat_opel.svg";
import googlePlaySvg from "../assets/svg-icons/cat_google_play.svg";
import envatoSvg from "../assets/svg-icons/cat_envato.svg";
import googleSvg from "../assets/svg-icons/cat_google.svg";
import appStoreSvg from "../assets/svg-icons/cat_app_store.svg";
import dellSvg from "../assets/svg-icons/cat_dell.svg";

const items = [
    { icon: metaSvg, name: "Meta" },
    { icon: amazonSvg, name: "Amazon" },
    { icon: steamSvg, name: "Steam" },
    { icon: stripeSvg, name: "Stripe" },
    { icon: opelSvg, name: "Opel" },
    { icon: metaSvg, name: "Meta" },
    { icon: googlePlaySvg, name: "Google Play" },
    { icon: envatoSvg, name: "Envato" },
    { icon: metaSvg, name: "Meta" },
    { icon: googleSvg, name: "Google" },
    { icon: appStoreSvg, name: "App Store" },
    { icon: dellSvg, name: "Dell" },
]

const Tab1 = () => {
    return (
        <div className="integration-wrapper-2">
            <div className="integration-inner-wrapper">
                {
                    items.map((item, i) => {
                        return <a href="#" className="integration-logo-item w-inline-block" key={i}>
                            <img width="80" loading="lazy" alt="" src={item.icon} />
                            <div className="integration-name-wrapper">
                                <div className="integration-name">
                                    <div>{item.name}</div>
                                </div>
                            </div>
                        </a>
                    })
                }
            </div>
        </div>
    )
}

const TabSection = () => {
    const [tab, setTab] = React.useState(0);

    const tabClass = (index) => {
        if (index === tab)
            return "tab-link w-inline-block w-tab-link w--current";
        return "tab-link w-inline-block w-tab-link";
    }

    const tabPaneClass = (index) => {
        if (index === tab)
            return "fade-in";
        return "fade-out";
    }

    return (
        <div className="tab-section">
            <div className="heading-wrapper">
                <div className="heading-detail-section">INTEGRATIONS</div>
                <h1 className="heading-content--tw1">Your Favorite Brands, One Crypto Platform</h1>
            </div>
            <div className="tabs-container">
                <div className="w-tabs">
                    <div className="tabs-menu w-tab-menu">
                        <a className={tabClass(0)} onClick={() => setTab(0)}>
                            <div>Category 1</div>
                        </a>
                        <a className={tabClass(1)} onClick={() => setTab(1)}>
                            <div>Category 2</div>
                        </a>
                        <a className={tabClass(2)} onClick={() => setTab(2)}>
                            <div>Category 3</div>
                        </a>
                        <a className={tabClass(3)} onClick={() => setTab(3)}>
                            <div>Category 4</div>
                        </a>
                        <a className={tabClass(4)} onClick={() => setTab(4)}>
                            <div>Category 5</div>
                        </a>
                    </div>
                    <div className="tabs-content w-tab-content">
                        <div className={tabPaneClass(0)}>
                            <Tab1 />
                        </div>
                        <div className={tabPaneClass(1)}>
                            <Tab1 />
                        </div>
                        <div className={tabPaneClass(2)}>
                            <Tab1 />
                        </div>
                        <div className={tabPaneClass(3)}>
                            <Tab1 />
                        </div>
                        <div className={tabPaneClass(4)}>
                            <Tab1 />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabSection;