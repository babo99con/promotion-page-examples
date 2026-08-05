import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the example index", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /프로모션 페이지 기능 예제/);
  assert.match(html, /다중 이미지 슬라이드/);
  assert.match(html, /쿠폰팩 한 번에 받기/);
  assert.match(html, /카운트다운 타이머/);
  assert.match(html, /7일 출석 체크/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});
