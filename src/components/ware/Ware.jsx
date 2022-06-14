import React from "react"

const Ware = () => {
    return (
        <div className="ware mt-40 mb-40" id="Ware">
            <h2>Мої товари</h2>
            <div className="ware_cards d-flex">
                <div className="ware_card d-flex flex-column">
                    <img src="/img/ware/1.jpg" alt=""></img>
                    <p className="opacity-7 fw-bold">Кофта з люрексу</p>
                </div>
                <div className="ware_card d-flex flex-column ">
                    <img src="/img/ware/2.jpg" alt=""></img>
                    <p className="opacity-7 fw-bold">Пальто осіннє</p>
                </div>
                <div className="ware_card d-flex flex-column ">
                    <img src="/img/ware/3.jpg" alt=""></img>
                    <p className="opacity-7 fw-bold">Костюм кольорів хакі</p>
                </div>
                <div className="ware_card d-flex flex-column ">
                    <img src="/img/ware/4.jpg" alt=""></img>
                    <p className="opacity-7 fw-bold">Костюм з латексу</p>
                </div>
                <div className="ware_card d-flex flex-column ">
                    <img src="/img/ware/5.jpg" alt=""></img>
                    <p className="opacity-7 fw-bold">Сукня з атласу</p>
                </div>
                <div className="ware_card d-flex flex-column ">
                    <img src="/img/ware/6.jpg" alt=""></img>
                    <p className="opacity-7 fw-bold">Літній костюм (червоний)</p>
                </div>
                <div className="ware_card d-flex flex-column ">
                    <img src="/img/ware/7.jpg" alt=""></img>
                    <p className="opacity-7 fw-bold">Куртка з шкірозамінника</p>
                </div>
                <div className="ware_card d-flex flex-column ">
                    <img src="/img/ware/8.jpg" alt=""></img>
                    <p className="opacity-7 fw-bold">Літній костюм (салатовий)</p>
                </div>
            </div>
        </div>
    );
}

export default Ware;