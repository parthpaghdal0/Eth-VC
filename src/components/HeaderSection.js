import * as React from "react"

import logoSvg from "../assets/svg-icons/logo.svg"
import enSvg from "../assets/svg-icons/lang_en.svg"
import deSvg from "../assets/svg-icons/lang_de.svg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from "react-i18next"

import {
    faBars
} from '@fortawesome/free-solid-svg-icons'

const HeaderSection = ({ props }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [currentLanguage, setCurrentLanguage] = React.useState(false);
    const [isEntered, setEntered] = React.useState(false);
    const { t, i18n } = useTranslation()

    const menuRef = React.useRef(null);

    const onChangeLanguage = () => {
        i18n.changeLanguage(!currentLanguage? 'de' : 'en');
        setCurrentLanguage(!currentLanguage);
    }

    const onMouseEnter = (e) => {
        setEntered(true);
    }

    const onMouseLeave = (e) => {
        setEntered(false);
    }

    React.useEffect(() => {
        const handleOutsideClick = (event) => {
          // Check if the clicked element is inside the menu
          if (menuRef.current && !menuRef.current.contains(event.target) && !document.querySelector('.menu-button').contains(event.target)) {
            setIsMenuOpen(false);
          }
        };
    
        // Attach click event listener to the document
        document.addEventListener('click', handleOutsideClick);
    
        // Clean up the event listener on component unmount
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
      }, []);

    return (
        <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navigation w-nav">
            <div className="navigation-container">
                <a href="#" className="logo-link w-inline-block">
                    <img src={logoSvg} loading="lazy" width="180" alt="" className="logo" />
                </a>
                <div className="navigation-wrapper">
                    <nav role="navigation" className="navigation-menu w-nav-menu">
                        <a href="#" className="navigation-link w-nav-link">{t('header.Categories')}</a>
                        <a href="#" className="navigation-link w-nav-link">{t('header.Services')}</a>
                        <a href="#" className="navigation-link w-nav-link">{t('header.Pricing')}</a>
                        <a href="#" className="navigation-link w-nav-link">{t('header.ContactUs')}</a>
                    </nav>
                    <div className="menu-button w-nav-button my-text" onClick={() => setIsMenuOpen(!isMenuOpen)} style={isMenuOpen ? { color: 'white', backgroundColor: '#393b6a' } : {}}>
                        <div className="my-nav-icon">
                            <FontAwesomeIcon icon={faBars} size="2xs" />
                        </div>
                    </div>
                    <div className="wg-element">
                        <div className="wg-element-wrapper sw12">
                            <a data-w-id="99d82336-5868-6718-2104-915d49db5096" href="#" className="wg-button-1 w-inline-block">
                                <div className="wg-button-1-lang-wrapper my-wg-button my-animation" style={{ transform: `${!isEntered? 'translate3d(0px, 0%, 0px)' : 'translate3d(0px, 100%, 0px)'} scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`, transformStyle: 'preserve-3d'}} onClick={onChangeLanguage} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                    <div lang="de" className={`${currentLanguage == true? 'wg-button-1-text-lang1 front-link' : 'wg-button-1-text-lang2 back-link'}`}>
                                        <div className="wg-flag v2">
                                            <img src={deSvg} alt="" className="wg-flag-ico" />
                                        </div>
                                        <div>De</div>
                                    </div>
                                    <div lang="en" className={`${currentLanguage == false? 'wg-button-1-text-lang1 front-link' : 'wg-button-1-text-lang2 back-link'}`}>
                                        <div className="wg-flag v2">
                                            <img src={enSvg} alt="" className="wg-flag-ico" />
                                        </div>
                                        <div>En</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <a href="#" className="navigation-button w-inline-block">
                        <div>Get Started</div>
                    </a>
                </div>
            </div>
            <div className="w-nav-overlay my-block" style={{ height: isMenuOpen? 400 : 0, transition: 'height 0.3s ease-in-out', overflow: 'hidden' }}>
                <nav role="navigation" className="navigation-menu my-animation" data-nav-menu-open ref={menuRef}>
                    <a href="#" className="navigation-link w-nav-link w--nav-link-open" onClick={() => setIsMenuOpen(false)}>Categories</a>
                    <a href="#" className="navigation-link w-nav-link w--nav-link-open" onClick={() => setIsMenuOpen(false)}>Services</a>
                    <a href="#" className="navigation-link w-nav-link w--nav-link-open" onClick={() => setIsMenuOpen(false)}>Pricing</a>
                    <a href="#" className="navigation-link w-nav-link w--nav-link-open" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
                </nav>
            </div>
        </div >
    )
}

export default HeaderSection;