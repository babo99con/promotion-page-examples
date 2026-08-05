"use client";

import { useEffect, useState } from "react";
import { ExampleHeader } from "../../components/ExampleHeader";

const STORAGE_KEY = "promotion-example-attendance";

export default function AttendanceExample() {
  const [days, setDays] = useState<number[]>([]);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try { setDays(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]")); } catch { setDays([]); }
    setReady(true);
  }, []);
  const checkIn = () => {
    const nextDay = days.length + 1;
    if (nextDay > 7) return;
    const next = [...days, nextDay]; setDays(next); localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };
  const reset = () => { setDays([]); localStorage.removeItem(STORAGE_KEY); };
  return (
    <main className="example-page">
      <ExampleHeader number="04" title="7일 출석 체크" />
      <section className="demo-intro"><p>버튼을 누를 때마다 참여 기록을 브라우저 localStorage에 저장합니다.</p></section>
      <section className="attendance-panel">
        <p className="eyebrow">7 DAYS CHECK-IN</p><h1>매일 출석하고 혜택 받기</h1><p>현재 <strong>{days.length}일</strong> 참여했어요.</p>
        <div className="attendance-grid">
          {Array.from({ length: 7 }, (_, index) => index + 1).map((day) => (
            <div className={days.includes(day) ? "day checked" : "day"} key={day}><span>DAY {day}</span><strong>{days.includes(day) ? "✓" : day === 7 ? "🎁" : "+"}</strong><small>{day === 7 ? "완주 선물" : "100P"}</small></div>
          ))}
        </div>
        <button className="primary-button" disabled={!ready || days.length >= 7} onClick={checkIn}>{days.length >= 7 ? "7일 출석 완료!" : "오늘 출석하기"}</button>
        <button className="text-button" onClick={reset}>예제 기록 초기화</button>
      </section>
      <aside className="code-note"><strong>실서비스 차이</strong><code>서버에서 회원 ID·날짜·중복 참여 여부를 검증해야 합니다.</code></aside>
    </main>
  );
}
