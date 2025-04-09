import FormWrapper from "./FormWrapper";

export default function Contact() {
    function onSumbit() {}
    return (
        <>
            <h1>Contact us</h1>
            <FormWrapper>
                <form className={"column form-card"} action={onSumbit}>
                    <div className="form-row-container">
                        <div className="form-row-left-container">
                            <div className="form-heading-line"></div>
                            <label htmlFor="name">Name</label>
                        </div>
                        <input className="form-input" type="text" name="name" />
                    </div>
                    <div className="form-row-container">
                        <div className="form-row-left-container">
                            <div className="form-heading-line"></div>
                            <label htmlFor="email">Email</label>
                        </div>
                        <input
                            className="form-input"
                            type="email"
                            name="email"
                        />
                    </div>
                    <div className="form-row-container">
                        <div className="form-row-left-container">
                            <div className="form-heading-line"></div>
                            <label htmlFor="message">Message</label>
                        </div>
                        <textarea
                            className="form-input contact-message"
                            name="message"
                        />
                    </div>
                    <button className="form-button" type="submit">
                        Submit
                    </button>
                </form>
            </FormWrapper>
        </>
    );
}
