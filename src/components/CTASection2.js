import * as React from "react"
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';

const CTASection2 = () => {
    const [email, setEmail] = React.useState();

    const onSubscribe = async () => {
        try {
            await axios.post("http://localhost:1337/api/emails", { data: { address: email, description: 'Email Address for Subscription', status: 'registered' }});
            toast.success("Subscription was successful!");
        } catch (err) {
            console.log(err);
            toast.warning("Subscription was failed!");
        }    
    }

    return (
        <section className="section-cta">
            <div className="cta-block">
                <div className="container-small">
                    <div className="title-wrapper-xs">
                        <div className="wrap-v-x-small-2 align-c">
                            <div className="overline-5">call to action</div>
                            <h2 className="heading-content--tw1">Ready to get started?</h2>
                        </div>
                        <p className="f-paragraph-large--tw1">Start Using Crypto for Payments, choose your payment category or retailer, submit your payment request and earn</p>
                    </div>
                    <div className="wrap-v-x-large align-c">
                        <div className="cta-form-block w-form">
                            <form className="form-h">
                                <input type="email" className="text-field-round w-input" maxLength="256" placeholder="Enter Your Email" required="" onChange={(e) => setEmail(e.target.value)} />
                                <input type="button" value="Subscribe now" className="button-primary-l-3 w-button" onClick={onSubscribe}/>
                            </form>
                            <div className="w-form-done">
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail">
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    )
}

export default CTASection2;