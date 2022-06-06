function App() {
  return (
    <div className="wrapper clear" id="Home">
      <header className="d-flex justify-between align-center p-30">
        <a href="#Home">
          <div className="logo d-flex">
            <img height={60} src="/img/logo_text.svg" alt="Logotype" />
            <p className="opacity-7">Магазин лялькового одягу</p>
          </div>
        </a>
        <ul className="d-flex mr-40">
          <li><a href="#About">Про мене</a></li>
          <li><a href="#Ware">Товари</a></li>
          <li><a href="#Response">Відгуки</a></li>
          <li>Контакти</li>
        </ul>
      </header>
      <hr></hr>
      <div className="content p-30">
        <div className="about d-flex mb-40" id="About">
          <div className="d-flex flex-column justify-center">
            <h2>Про мене</h2>
            <p>Lorem Ipsum - це текст-"риба", що використовується в друкарстві та дизайні. Lorem Ipsum є, фактично, стандартною "рибою" аж з XVI сторіччя, коли невідомий друкар взяв шрифтову гранку та склав на ній підбірку зразків шрифтів. "Риба" не тільки успішно пережила п'ять століть, але й прижилася в електронному верстуванні, залишаючись по суті незмінною.</p>
          </div>
          <img height={700} src="/img/about.png" alt="" />
        </div>
        <hr></hr>
        <div className="ware mt-40 mb-40" id="Ware">
          <h2>Мої товари</h2>
          <div className="ware_cards d-flex">
            <div className="ware_card d-flex flex-column">
              <img src="/img/ware/1.jpg" alt=""></img>
              <p className="opacity-7 fw-bold">Кофта з люрексу</p>
            </div>
            <div className="ware_card d-flex flex-column ">
              <img src="/img/ware/2.jpg" alt=""></img>
              <p className="opacity-7 fw-bold">Кофта з люрексу</p>
            </div>
            <div className="ware_card d-flex flex-column ">
              <img src="/img/ware/3.jpg" alt=""></img>
              <p className="opacity-7 fw-bold">Кофта з люрексу</p>
            </div>
            <div className="ware_card d-flex flex-column ">
              <img src="/img/ware/4.jpg" alt=""></img>
              <p className="opacity-7 fw-bold">Кофта з люрексу</p>
            </div>
            <div className="ware_card d-flex flex-column ">
              <img src="/img/ware/5.jpg" alt=""></img>
              <p className="opacity-7 fw-bold">Кофта з люрексу</p>
            </div>
            <div className="ware_card d-flex flex-column ">
              <img src="/img/ware/6.jpg" alt=""></img>
              <p className="opacity-7 fw-bold">Кофта з люрексу</p>
            </div>
          </div>
        </div>
        <hr></hr>
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
      </div>
      <div className="arrow-up">
        <a href="#Home">
          <img src="/img/arrow-up.svg" alt="up"></img>
        </a>
      </div>
    </div>
  );
}

export default App;
