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
          <li>Відгуки</li>
          <li>Контакти</li>
        </ul>
      </header>
      <div className="content p-30">
        <div className="about d-flex mb-40" id="About">
          <div className="d-flex flex-column justify-center">
            <h2>Про мене</h2>
            <p>Lorem Ipsum - це текст-"риба", що використовується в друкарстві та дизайні. Lorem Ipsum є, фактично, стандартною "рибою" аж з XVI сторіччя, коли невідомий друкар взяв шрифтову гранку та склав на ній підбірку зразків шрифтів. "Риба" не тільки успішно пережила п'ять століть, але й прижилася в електронному верстуванні, залишаючись по суті незмінною.</p>
          </div>
          <img height={700} src="/img/about.png" alt="" />
        </div>
        <hr></hr>
        <div className="ware mt-40" id="Ware">
          <h2>Мої товари</h2>
          <div className="cards d-flex">
            <div className="card d-flex flex-column">
              <img width={250} src="/img/ware/1.jpg" alt=""></img>
              <p className="opacity-7 fw-bold">Кофта з люрексу</p>
            </div>
            <div className="card d-flex flex-column ">
              <img width={250} src="/img/ware/2.jpg" alt=""></img>
              <p className="opacity-7 fw-bold">Кофта з люрексу</p>
            </div>
            <div className="card d-flex flex-column ">
              <img width={250} src="/img/ware/3.jpg" alt=""></img>
              <p className="opacity-7 fw-bold">Кофта з люрексу</p>
            </div>
            <div className="card d-flex flex-column ">
              <img width={250} src="/img/ware/4.jpg" alt=""></img>
              <p className="opacity-7 fw-bold">Кофта з люрексу</p>
            </div>
            <div className="card d-flex flex-column ">
              <img width={250} src="/img/ware/5.jpg" alt=""></img>
              <p className="opacity-7 fw-bold">Кофта з люрексу</p>
            </div>
            <div className="card d-flex flex-column ">
              <img width={250} src="/img/ware/6.jpg" alt=""></img>
              <p className="opacity-7 fw-bold">Кофта з люрексу</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
