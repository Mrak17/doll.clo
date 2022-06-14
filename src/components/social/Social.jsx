import React from "react";

const Social = () => {
    return (
        <div className="social mt-40" id="Social">
            <h2>Я в соцмережах</h2>
            <div className="socials d-flex justify-center mt-10">
                <a href="https://www.instagram.com/my_little_princess_dolls" target="_blank" rel="noreferrer">
                    <img src="/img/social/instagram.png" alt="instagram"></img>
                </a>
                <a href="https://t.me/dollclo" target="_blank" rel="noreferrer">
                    <img src="/img/social/telegram.png" alt="telegram"></img>
                </a>
                <a href="https://invite.viber.com/?g2=AQBYc4yMPZO2b0zmsEjT%2F6VCKu%2BGtbup19Beb3R6WjPO%2Bw5nzri0Qi6jZPq%2FRBLF" target="_blank" rel="noreferrer">
                    <img src="/img/social/viber.png" alt="viber"></img>
                </a>
            </div>
        </div>
    );
}

export default Social;