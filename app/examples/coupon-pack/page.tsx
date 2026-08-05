"use client";

import { useState } from "react";
import { ExampleHeader } from "../../components/ExampleHeader";

const coupons = [
  { amount: "3,000원", condition: "3만원 이상 구매 시" },
  { amount: "7,000원", condition: "7만원 이상 구매 시" },
  { amount: "12,000원", condition: "12만원 이상 구매 시" },
  { amount: "무료배송", condition: "전 상품 1회 사용" },
];

export default function CouponPackExample() {
  const [issued, setIssued] = useState(false);
  return (
    <main className="example-page">
      <ExampleHeader number="02" title="쿠폰팩 한 번에 받기" />
      <section className="demo-intro"><p>여러 쿠폰을 하나씩 누르는 대신 한 번의 행동으로 모두 발급하는 흐름입니다.</p></section>
      <section className="coupon-panel">
        <p className="eyebrow">SUMMER COUPON PACK</p><h1>최대 22,000원 혜택</h1>
        <div className="coupon-list">
          {coupons.map((coupon) => (
            <article className={issued ? "coupon issued" : "coupon"} key={coupon.amount}>
              <div><strong>{coupon.amount}</strong><span>{coupon.condition}</span></div><b>{issued ? "발급 완료" : "COUPON"}</b>
            </article>
          ))}
        </div>
        <button className="primary-button" disabled={issued} onClick={() => setIssued(true)}>{issued ? "쿠폰팩을 받았습니다" : "쿠폰 4장 한 번에 받기"}</button>
        {issued && <p className="success-message" role="status">✓ 실제 서비스에서는 로그인한 회원의 쿠폰함에 저장합니다.</p>}
      </section>
      <aside className="code-note"><strong>핵심 원리</strong><code>한 번의 요청 → 여러 쿠폰 ID를 일괄 발급</code></aside>
    </main>
  );
}
