function Nav() {
  return (
    <div id="nav">
      <h1 id="store">TechStore</h1>
      <ul id="menu-bar">
        <li>
          <a href="#">제품</a>
          <ul>
            <li>
              <a href="#">전자기기</a>
            </li>
            <li>
              <a href="#">의류</a>
            </li>
            <li>
              <a href="#">도서</a>
            </li>
            <li>
              <a href="#">액세서리</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">서비스</a>
          <ul>
            <li>
              <a href="#">컨설팅</a>
            </li>
            <li>
              <a href="#">교육</a>
            </li>
            <li>
              <a href="#">고객지원</a>
            </li>
            <li>
              <a href="#">유지보수</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">회사소개</a>
          <ul>
            <li>
              <a href="#">회사정보</a>
            </li>
            <li>
              <a href="#">팀 소개</a>
            </li>
            <li>
              <a href="#">채용정보</a>
            </li>
            <li>
              <a href="#">연락처</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
