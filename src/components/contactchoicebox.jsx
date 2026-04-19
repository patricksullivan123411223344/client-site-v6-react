/*
Name: Patrick Sullivan
Date: 4/18/2026
File: contactchoicebox.jsx
Description: Renders the top contact page CTA buttons. 
*/
export default function ContactChoiceBox({ onQuestionClick, onBookingClick }) {
    return (
        <div className="contactBox">
            <h1 className="contactText">Ready to talk?</h1>

            <div className="contactButtonWrap">
                <button
                type="button"
                id="toEmailForm"
                className="contactButtons"
                onClick={onQuestionClick}
                >
                I have a question
                </button>

                <button
                type="button"
                id="toCalendlyBooker"
                className="contactButtons"
                onClick={onBookingClick}
                >
                I want to book a session
                </button>
            </div>
        </div> 
    );
}