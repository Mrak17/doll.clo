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
        <ul className="d-flex">
          <li><a href="#Home">Головна</a></li>
          <li><a href="#About">Про мене</a></li>
          <li><a href="#">Товари</a></li>
          <li><a href="#">Відгуки</a></li>
          <li><a href="#">Контакти</a></li>
        </ul>
      </header>
      <div className="content p-30">
        <div className="about d-flex" id="About">
          <div className="d-flex flex-column justify-center">
            <h2>Про мене</h2>
            <p>Lorem Ipsum - це текст-"риба", що використовується в друкарстві та дизайні. Lorem Ipsum є, фактично, стандартною "рибою" аж з XVI сторіччя, коли невідомий друкар взяв шрифтову гранку та склав на ній підбірку зразків шрифтів. "Риба" не тільки успішно пережила п'ять століть, але й прижилася в електронному верстуванні, залишаючись по суті незмінною. Вона популяризувалась в 60-их роках минулого сторіччя завдяки виданню зразків шрифтів Letraset, які містили уривки з Lorem Ipsum, і вдруге - нещодавно завдяки програмам комп'ютерного верстування на кшталт Aldus Pagemaker, які використовували різні версії Lorem Ipsum.</p>
          </div>
          <img height={700} src="/img/about.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
