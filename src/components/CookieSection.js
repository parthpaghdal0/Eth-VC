import React, { useState, useEffect } from 'react';
import Fade from "react-reveal/Fade"
import { useCookies } from 'react-cookie';

import { GOOGLE_ANALYTICS_COOKIE_NAME } from '../constants';

const CookieSection = () => {
    const [cookies, setCookie] = useCookies([
        GOOGLE_ANALYTICS_COOKIE_NAME,
    ])

    const [didMount, setDidMount] = useState(false);

    useEffect(() => {
        setDidMount(true);
    }, []);

    const setCookieValue = (value) => {
        setCookie(GOOGLE_ANALYTICS_COOKIE_NAME, value);
        console.log(value);
    }

    const needToShowBanner =
        cookies[GOOGLE_ANALYTICS_COOKIE_NAME] !== "ga_true" &&
        cookies[GOOGLE_ANALYTICS_COOKIE_NAME] !== "ga_false"

    return (
        <Fade bottom when={didMount && needToShowBanner} delay={ needToShowBanner ? 600 : 0} duration={1000}>
            <div className="cookie-container">
                <div className="cookie-wrapper">
                    <span className="cookie-content">
                        We use cookies to track the count of visits to this site,
                        but that's it. ♥️
                    </span>
                    <button className="cookie-btn-allow" onClick={() => setCookieValue("ga_true")}>Allow</button>
                    <button className="cookie-btn-disable" onClick={() => setCookieValue("ga_false")}>Disable</button>
                </div>
            </div>
        </Fade>
    )
}

export default CookieSection;