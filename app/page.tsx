import Link from "next/link";

const examples = [
  { number: "01", title: "다중 이미지 슬라이드", description: "많은 혜택을 한정된 공간에서 차례로 보여주는 예제", href: "/examples/slider", tone: "orange" },
  { number: "02", title: "쿠폰팩 한 번에 받기", description: "여러 쿠폰을 버튼 한 번으로 발급하는 예제", href: "/examples/coupon-pack", tone: "blue" },
  { number: "03", title: "카운트다운 타이머", description: "종료까지 남은 시간을 실시간으로 표시하는 예제", href: "/examples/countdown", tone: "pink" },
  { number: "04", title: "7일 출석 체크", description: "브라우저에 참여 기록을 저장하는 재방문 예제", href: "/examples/attendance", tone: "green" },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">PROMOTION UI LAB</p>
        <h1>세일 페이지에서 자주 쓰는<br />기능을 직접 눌러보세요.</h1>
        <p className="hero-copy">프레임워크의 복잡한 기능보다 동작 원리를 이해하는 데 집중한 작은 예제 모음입니다.</p>
      </section>
      <section className="example-grid" aria-label="프로모션 기능 예제 목록">
        {examples.map((example) => (
          <Link className={`example-card ${example.tone}`} href={example.href} key={example.href}>
            <span className="example-number">{example.number}</span>
            <div><h2>{example.title}</h2><p>{example.description}</p></div>
            <span className="arrow" aria-hidden="true">→</span>
          </Link>
        ))}
      </section>
      <footer>HTML · CSS · React 상태 관리로 만든 학습용 예제</footer>
    </main>
  );
}
