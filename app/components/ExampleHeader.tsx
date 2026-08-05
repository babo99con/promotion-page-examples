import Link from "next/link";

export function ExampleHeader({ number, title }: { number: string; title: string }) {
  return (
    <header className="example-header">
      <Link href="/" className="back-link">← 예제 목록</Link>
      <div><span>{number}</span><strong>{title}</strong></div>
    </header>
  );
}
