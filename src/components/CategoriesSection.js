import * as React from "react"

const CategoriesSection = () => {
    const [catY1, setCatY1] = React.useState(0);
    const [catY2, setCatY2] = React.useState(0);
    React.useEffect(() => {
        const handleScroll = (event) => {
            let cat1 = document.getElementById("categories1").getBoundingClientRect().y;
            let cat2 = document.getElementById("categories2").getBoundingClientRect().y;
            const hei = window.innerHeight;

            if (cat1 < 0) cat1 = 0;
            if (cat2 < 0) cat2 = 0;
            if (cat1 > hei) cat1 = hei;
            if (cat2 > hei) cat2 = hei;
            cat1 = cat1 * (-60) / hei;
            cat2 = cat2 * 40 / hei - 40;

            setCatY1(cat1);
            setCatY2(cat2);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="section_categories">
            <div className="padding-global">
                <div className="container-large-2 static">
                    <div data-w-id="32750f96-9846-52f3-8f7b-763e74d27e60" className="categories_component">
                        <div className="heading_components">
                            <div className="heading-detail-section">Some of the Categories</div>
                        </div>
                        <div className="categories_wrap">
                            <div className="categories_track" id="categories1">
                                <div className="categories_list list-1 my-animation2" style={{ transform: `translate3d(${catY1}%, 0, 0)` }}>
                                    <div className="categories_tag">
                                        <div>🏦 &nbsp;&nbsp;Loans</div>
                                    </div>
                                    <div className="categories_tag">
                                        <div>💻 &nbsp;&nbsp;Hosting &amp; Domain</div>
                                    </div>
                                    <div className="categories_tag">
                                        <div>🛍 &nbsp;&nbsp;Shopping</div>
                                    </div>
                                    <div className="categories_tag">
                                        <div>🎨 &nbsp;&nbsp;Development &amp; Design</div>
                                    </div>
                                    <div className="categories_tag">
                                        <div>🔔 &nbsp;&nbsp;Subscribe</div>
                                    </div>
                                </div>
                                <div className="categories_list list-1 my-animation2" style={{ transform: `translate3d(${catY1}%, 0, 0)` }}>
                                    <div className="categories_tag">
                                        <div>🏦 &nbsp;&nbsp;Loans</div>
                                    </div>
                                    <div className="categories_tag">
                                        <div>💻 &nbsp;&nbsp;Hosting &amp; Domain</div>
                                    </div>
                                    <div className="categories_tag">
                                        <div>🛍 &nbsp;&nbsp;Shopping</div>
                                    </div>
                                    <div className="categories_tag">
                                        <div>🎨 &nbsp;&nbsp;Development &amp; Design</div>
                                    </div>
                                    <div className="categories_tag">
                                        <div>🔔 &nbsp;&nbsp;Subscribe</div>
                                    </div>
                                </div>
                            </div>
                            <div className="categories_track" id="categories2">
                                <div className="categories_list list-2 my-animation2" style={{ transform: `translate3d(${catY2}%, 0, 0)` }}>
                                    <div className="categories_tag">
                                        <div>💼 &nbsp;&nbsp;Corporate Expenses</div>
                                    </div>
                                    <div className="categories_tag">
                                        <div>🎓 &nbsp;&nbsp;Tuition</div>
                                    </div>
                                    <div className="categories_tag">
                                        <div>🏠 &nbsp;&nbsp;Rent</div>
                                    </div>
                                    <div className="categories_tag">
                                        <div>✈️ &nbsp;&nbsp;Flights &amp; Hotels</div>
                                    </div>
                                    <div className="categories_tag">
                                        <div>🏛️ &nbsp;&nbsp;Government &amp; Taxes</div>
                                    </div>
                                </div>
                                <div className="categories_list list-2 my-animation2" style={{ transform: `translate3d(${catY2}%, 0, 0)` }}>
                                    <div className="categories_tag">
                                        <div>💼 &nbsp;&nbsp;Corporate Expenses</div>
                                    </div>
                                    <div className="categories_tag">
                                        <div>🎓 &nbsp;&nbsp;Tuition</div>
                                    </div>
                                    <div className="categories_tag">
                                        <div>🏠 &nbsp;&nbsp;Rent</div>
                                    </div>
                                    <div className="categories_tag">
                                        <div>✈️ &nbsp;&nbsp;Flights &amp; Hotels</div>
                                    </div>
                                    <div className="categories_tag">
                                        <div>🏛️ &nbsp;&nbsp;Government &amp; Taxes</div>
                                    </div>
                                </div>
                            </div>
                            <div className="categories_overlay">
                                <div className="capabilities_overlay_right"></div>
                                <div className="capabilities_overlay_left"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CategoriesSection;