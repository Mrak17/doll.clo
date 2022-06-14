import React from "react"

const About = () => {
    return (
        <div className="about d-flex mb-40" id="About">
            <div className="d-flex flex-column justify-center">
                <h2>Про мене</h2>
                <p>Lorem Ipsum - це текст-"риба", що використовується в друкарстві та дизайні. Lorem Ipsum є, фактично, стандартною "рибою" аж з XVI сторіччя, коли невідомий друкар взяв шрифтову гранку та склав на ній підбірку зразків шрифтів. "Риба" не тільки успішно пережила п'ять століть, але й прижилася в електронному верстуванні, залишаючись по суті незмінною.</p>
            </div>
            <img height={700} src="/img/about.png" alt="" />
        </div>
    );
}

export default About;