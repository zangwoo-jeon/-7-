import styled from "styled-components";
import React, { useState } from "react";

const HeadDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: white;
`;

const H1 = styled.h1`
  color: #0048ff;
  margin: 0;
  cursor: pointer;
`;

const UL = styled.ul`
  /* margin: 0 10px; */
  display: flex;
`;

const LI = styled.li`
  position: relative;
  list-style: none;
  padding: 0 50px;
  cursor: pointer;
`;

const SubMenu = styled.ul`
  padding: 0;
  background-color: white;
  border-radius: 5px;
  position: absolute;
  width: 120px;
  top: 40px;
  left: 5px;
  list-style: none;
  border: 1px solid #eee;
  text-align: center;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const SubLi = styled.li`
  padding: 5px;
  border: 1px solid #eee;

  &:hover {
    background-color: lightblue;
  }
`;

function Header() {
  const [selectedMenu, setSelectedMenu] = useState(null); // 선택된 메뉴 인덱스 상태

  const toggleMenu = (menuIndex) => {
    setSelectedMenu((prevSelectedMenu) =>
      menuIndex === prevSelectedMenu ? null : menuIndex
    );
  };

  return (
    <>
      <HeadDiv>
        <H1>TechStore</H1>
        <UL>
          <LI onClick={() => toggleMenu(0)}>
            {" "}
            {/* 제품 메뉴 */}
            제품
            <SubMenu isOpen={selectedMenu === 0}>
              <SubLi>전자기기</SubLi>
              <SubLi>의류</SubLi>
              <SubLi>도서</SubLi>
              <SubLi>액세사리</SubLi>
            </SubMenu>
          </LI>

          <LI onClick={() => toggleMenu(1)}>
            {" "}
            {/* 서비스 메뉴 */}
            서비스
            <SubMenu isOpen={selectedMenu === 1}>
              <SubLi>컨설팅</SubLi>
              <SubLi>교육</SubLi>
              <SubLi>고객지원</SubLi>
              <SubLi>유지보수</SubLi>
            </SubMenu>
          </LI>
          <LI onClick={() => toggleMenu(2)}>
            {" "}
            {/* 회사소개 메뉴 */}
            회사소개
            <SubMenu isOpen={selectedMenu === 2}>
              <SubLi>회사정보</SubLi>
              <SubLi>팀 소개</SubLi>
              <SubLi>채용정보</SubLi>
              <SubLi>연락처</SubLi>
            </SubMenu>
          </LI>
        </UL>
      </HeadDiv>
    </>
  );
}

export default Header;
