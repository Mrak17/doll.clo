import React from "react";

const Response = () => {
    return (
        <div className="response mt-40 mb-40" id="Response">
            <h2>Відгуки</h2>
            <div className="response_cards d-flex">
                <div className="response_card">
                    <img src="/img/user_icon.png" alt="user"></img>
                    <p>Дякую за шикарні образи! Якість приголомшлива.</p>
                </div>
                <div className="response_card">
                    <img src="/img/user_icon.png" alt="user"></img>
                    <p>Нарешті доїхала до мене посилка, думала не дочекаюся. Оксана, дякую за джинсики та спідницю, дуже класні, дуже акуратно пошиті дякую.</p>
                </div>
                <div className="response_card">
                    <img src="/img/user_icon.png" alt="user"></img>
                    <p>Все пошито із любов'ю! Деталізовано і дуже акуратно!</p>
                </div>
                <div className="response_card">
                    <img src="/img/user_icon.png" alt="user"></img>
                    <p>Хочу подякувати Оксані за чудові обновки для наших лялечок! Наша парочка тепер стильна та модна! Щиро Дякую.</p>
                </div>
            </div>
        </div>
    );
}

export default Response;