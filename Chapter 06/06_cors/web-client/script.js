const out = document.getElementById("out");

function show(obj) {
  out.textContent = typeof obj === "string" ? obj : JSON.stringify(obj, null, 2);
}

document.getElementById("btnQuote").addEventListener("click", async () => {
  try {
    const res = await fetch("http://localhost:3005/api/quote", { credentials: "include" });
    const data = await res.json();
    show(data);
  } catch (e) {
    show({ error: e.message });
  }
});

document.getElementById("btnEcho").addEventListener("click", async () => {
  try {
    const res = await fetch("http://localhost:3005/api/echo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ from: "web-client", time: new Date().toISOString() }),
      credentials: "include"
    });
    const data = await res.json();
    show(data);
  } catch (e) {
    show({ error: e.message });
  }
});
