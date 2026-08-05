"use client";

import { useEffect, useRef, useState } from "react";
import { ExampleHeader } from "../../components/ExampleHeader";

type Remaining = { hours: number; minutes: number; seconds: number };

export default function CountdownExample() {
  const deadline = useRef<number>(0);
  const [remaining, setRemaining] = useState<Remaining>({ hours: 2, minutes: 59, seconds: 59 });
  useEffect(() => {
    deadline.current = Date.now() + 3 * 60 * 60 * 1000;
    const update = () => {
      const diff = Math.max(0, deadline.current - Date.now());
      setRemaining({ hours: Math.floor(diff / 3_600_000), minutes: Math.floor((diff % 3_600_000) / 60_000), seconds: Math.floor((diff % 60_000) / 1000) });
    };
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);
  const units = [["HOURS", remaining.hours], ["MINUTES", remaining.minutes], ["SECONDS", remaining.seconds]] as const;
  return (
    <main className="example-page">
      <ExampleHeader number="03" title="카운트다운 타이머" />
      <section className="demo-intro"><p>마감 시각과 현재 시각의 차이를 1초마다 다시 계산합니다.</p></section>
      <section className="countdown-panel">
        <span className="flash-badge">FLASH SALE</span><h1>썸머세일 종료까지</h1>
        <div className="time-grid">
          {units.map(([label, value], index) => (
            <div className="time-unit" key={label}><strong>{String(value).padStart(2, "0")}</strong><span>{label}</span>{index < units.length - 1 && <i>:</i>}</div>
          ))}
        </div>
        <p>예제 페이지를 연 시점부터 3시간으로 설정됩니다.</p><button className="light-button">세일 상품 확인하기</button>
      </section>
      <aside className="warning-note"><strong>주의</strong>실제 종료 후 다시 시작되는 가짜 타이머는 신뢰를 해치는 다크패턴이 될 수 있습니다.</aside>
    </main>
  );
}
