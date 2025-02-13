function Main() {
  return (
    <div id="main">
      <p id="main-text">추천 제품</p>
      <div id="product">
        <div class="product-card">
          <div class="product-top">
            <p class="product-name">프리미엄 노트북</p>
            <p class="product-price">1,599,000원</p>
          </div>
          <p class="product-explanation">최신 사양의 고성능 노트북</p>
          <div class="product-top">
            <div class="hashtag">전자기기</div>
            <button type="button" className="cart">
              장바구니담기
            </button>
          </div>
        </div>
        <div class="product-card">
          <div class="product-top">
            <p class="product-name">무선 헤드폰</p>
            <p class="product-price">299,000원</p>
          </div>
          <p class="product-explanation">
            프리미엄 사운드의 노이즈 캔슬링 헤드폰
          </p>
          <div class="product-top">
            <div class="hashtag">전자기기</div>
            <button type="button" className="cart">
              장바구니담기
            </button>
          </div>
        </div>
        <div class="product-card">
          <div class="product-top">
            <p class="product-name">스마트 워치</p>
            <p class="product-price">399,000원</p>
          </div>
          <p class="product-explanation">피트니스 트래킹과 스마트 연결 가능</p>
          <div class="product-top">
            <div class="hashtag">액세서리</div>
            <button type="button" className="cart">
              장바구니담기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
