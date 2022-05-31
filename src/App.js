function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-30">
        <div className="logo d-flex">
          <img height={60} src="/img/logo_text.svg" alt="Logotype" />
          <p className="opacity-7">Магазин лялькового одягу</p>
        </div>
        <ul className="d-flex">
          <li>Головна</li>
          <li>Про мене</li>
          <li>Товари</li>
          <li>Відгуки</li>
          <li>Контакти</li>
        </ul>
      </header>
      <div className="content p-30">
        <h2>Про мене</h2>
        <p>Lorem Ipsum - це текст-"риба", що використовується в друкарстві та дизайні. Lorem Ipsum є, фактично, стандартною "рибою" аж з XVI сторіччя, коли невідомий друкар взяв шрифтову гранку та склав на ній підбірку зразків шрифтів. "Риба" не тільки успішно пережила п'ять століть, але й прижилася в електронному верстуванні, залишаючись по суті незмінною. Вона популяризувалась в 60-их роках минулого сторіччя завдяки виданню зразків шрифтів Letraset, які містили уривки з Lorem Ipsum, і вдруге - нещодавно завдяки програмам комп'ютерного верстування на кшталт Aldus Pagemaker, які використовували різні версії Lorem Ipsum.</p>
      </div>
    </div>
  );
}

export default App;
