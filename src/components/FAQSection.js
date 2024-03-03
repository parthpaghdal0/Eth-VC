import * as React from "react"

import faqSvg from "../assets/svg-icons/faq.svg";

const items = [
    { question: "Add commonly asked questions here", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." },
    { question: "Add commonly asked questions here", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." },
    { question: "Add commonly asked questions here", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." },
    { question: "Add commonly asked questions here", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." },
]

const Collapse = ({ item, isOpened, open }) => {
    const contentRef = React.useRef();
    return (
        <div className="faq-item-plain w-dropdown">
            <div className="faq-toggle w-dropdown-toggle" onClick={open}>
                <div className="faq-title-wrapper-plain">
                    <div className="paragraph-regular-bold">{item.question}</div>
                    <div className="faq-arrow w-embed my-animation" style={{ transform: isOpened ? "rotateZ(180deg)" : "rotateZ(0deg)" }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9998 15L7.75684 10.757L9.17184 9.34302L11.9998 12.172L14.8278 9.34302L16.2428 10.757L11.9998 15Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <nav className="faq-content w-dropdown-list my-animation" style={{ maxHeight: isOpened ? contentRef.current?.scrollHeight : 0 }} ref={contentRef}>
                <div className="faq-content-wrapper">
                    <p className="feature-paragraph">
                        {item.answer}
                    </p>
                </div>
            </nav>
        </div>
    )
}

const FAQSection = () => {
    const [active, setActive] = React.useState(-1);

    const collapse = (index) => {
        if (index === active)
            setActive(-1);
        else
            setActive(index);
    }

    return (
        <div className="section-faq">
            <div className="container-large-2">
                <div className="faq-heading-wrapper">
                    <div className="heading-detail-section">Have any questions?</div>
                    <h3 className="heading-content--tw1">Frequently Asked Questions</h3>
                </div>
                <div className="w-layout-grid grid-one-column">
                    <div id="w-node-f6768afd-abbe-959d-7911-cf3654b77666-02cc0be2" className="more-help">
                        <div className="more_help_wrapper">
                            <div className="icon_wrapper">
                                <img src={faqSvg} loading="lazy" alt="" className="image" />
                                <h4 className="h4-heading smaller">Still have questions?</h4>
                            </div>
                            <p className="feature-paragraph">If you need more help you can contact Customer Service or refer to the Help Center.example</p>
                            <a href="#" className="button-secondary-l w-button">Сontact Us</a>
                        </div>
                    </div>
                    {
                        items.map((item, i) => {
                            return <Collapse
                                key={i}
                                item={item}
                                isOpened={active === i}
                                open={() => collapse(i)}
                            />
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default FAQSection;