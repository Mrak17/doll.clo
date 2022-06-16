import React from "react"

const Header = () => {
    return (
        <header className="d-flex justify-between align-center p-30">
            <a href="#Home">
                <div className="logo d-flex">
                    <img height={60} src="/img/logo_text.svg" alt="Logotype" />
                </div>
            </a>
            <div className="menu">
                <ul className="d-flex mr-40">
                    <li><a href="#About">Про мене</a></li>
                    <li><a href="#Ware">Товари</a></li>
                    <li><a href="#Response">Відгуки</a></li>
                    <li><a href="#Social">Контакти</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;