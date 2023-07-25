import './QAContainer.css'
import './QAItem.css'
import React from "react";

interface QaContainerProps {
    QA : {question: string, answer: string}
}

function QaContainer({QA} : QaContainerProps) {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    return (
    <section className={`QAItem_container ${isOpen && 'open'}`}>
        <div className={'QAI_wrapper'}>
            <h3>{QA.question}</h3>
            <button onClick={()=> setIsOpen(!isOpen)}>
                <i className={`fa-solid fa-chevron-down ${isOpen && 'btn_open'}`}></i>
            </button>
        </div>

        <p className={'QAAnswer'}>{QA.answer}</p>
    </section>
    );
}

export default QaContainer;