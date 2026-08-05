"use client";

import { useEffect, useState } from "react";
import { ExampleHeader } from "../../components/ExampleHeader";

const slides = [
  { badge: "ONLY TODAY", title: "오늘만 전 상품 20%", copy: "장바구니에 담아둔 상품을 가장 좋은 가격으로 만나보세요.", className: "slide-orange" },
  { badge: "FREE DELIVERY", title: "5만원 이상 무료배송", copy: "배송비 걱정 없이 필요한 상품을 한 번에 주문하세요.", className: "slide-blue" },
  { badge: "NEW MEMBER", title: "신규 회원 5천원", copy: "처음 방문했다면 가입 즉시 할인 쿠폰을 받을 수 있어요.", className: "slide-green" },
];

export default function SliderExample() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % slides.length), 4000);
    return () => window.clearInterval(timer);
  }, []);
  const move = (amount: number) => setIndex((index + amount + slides.length) % slides.length);
  const slide = slides[index];

  return (
    <main className="example-page">
      <ExampleHeader number="01" title="다중 이미지 슬라이드" />
      <section className="demo-intro"><p>한정된 영역에서 여러 혜택을 보여줍니다. 버튼, 점 표시, 자동 전환을 함께 확인해 보세요.</p></section>
      <section className={`slider-stage ${slide.className}`} aria-live="polite">
        <button className="slider-button" onClick={() => move(-1)} aria-label="이전 혜택">←</button>
        <article>
          <span>{slide.badge}</span><h1>{slide.title}</h1><p>{slide.copy}</p>
          <button className="dark-button">상품 보러 가기</button>
        </article>
        <button className="slider-button" onClick={() => move(1)} aria-label="다음 혜택">→</button>
      </section>
      <div className="slider-dots" aria-label="슬라이드 선택">
        {slides.map((item, itemIndex) => <button key={item.title} className={itemIndex === index ? "active" : ""} onClick={() => setIndex(itemIndex)} aria-label={`${itemIndex + 1}번째 혜택`} />)}
      </div>
      <aside className="code-note"><strong>핵심 원리</strong><code>index 상태 변경 → 해당 순서의 콘텐츠 렌더링</code></aside>
    </main>
  );
}
