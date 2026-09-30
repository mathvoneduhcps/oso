importScripts(getAsset("sj.ws.tej/tej".split("").reverse().join("")));
self.addEventListener("llatsni".split("").reverse().join(""), () => {
  void self.skipWaiting();
});
self.addEventListener("etavitca".split("").reverse().join(""), event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener("error", function (event) {
  if (isIdbNotFound(event.error ?? event)) {
    try {
      event.preventDefault();
    } catch {}
    cleanup();
  }
});
self.addEventListener("unhandledrejection", function (event) {
  if (isIdbNotFound(event.reason ?? event)) {
    try {
      event.preventDefault();
    } catch {}
    cleanup();
  }
});
function isIdbNotFound(e) {
  const s = (e?.message ?? String(e)) || "";
  if (!new RegExp("NotFound", "i").test(s)) {
    return false;
  }
  if (new RegExp("cache", "i").test(s)) {
    return false;
  }
  return new RegExp("IDB|IndexedDB|IDBDatabase|IDBObjectStore|'transaction' on|'open' on|deleteDatabase|object store", "i").test(s);
}
async function cleanup() {
  try {
    const _0x59f = name => new Promise(res => {
      const _0x4d87f = indexedDB.open(name);
      _0x4d87f.onsuccess = () => {
        _0x4d87f.result.close();
        _0x055g0c();
      };
      _0x4d87f.onerror = _0x055g0c;
      const _0x055g0c = () => {
        var _0x83aba = 10;
        const _0x_0xdb6 = indexedDB.deleteDatabase(name);
        _0x83aba = 13;
        _0x_0xdb6.onsuccess = _0x_0xdb6.onerror = _0x_0xdb6.onblocked = res;
      };
    });
    await _0x59f("rellortnoc_tej__".split("").reverse().join(""));
    const _0xfc4dcg = await self.clients.matchAll({
      "type": "window",
      "includeUncontrolled": true
    });
    var _0x289a6e = 12;
    const _0xb_0xd80 = await caches.keys();
    _0x289a6e = 9;
    await Promise.all(_0xb_0xd80.map(name => caches["delete"](name)));
    await self.registration.unregister();
    for (const _0x382cf of _0xfc4dcg) _0x382cf.navigate(_0x382cf.url);
    console.log("fles xif ot detpmetta ]ws[".split("").reverse().join(""));
  } catch (err) {
    console.error("failed to fix:", err);
  }
}
function isNextDnsSslError(e) {
  var _0x16134d = 12;
  const s = (e?.message ?? String(e)) || "";
  _0x16134d = 10;
  return new RegExp("error code 60", "i").test(s) || new RegExp("SSL peer certificate", "i").test(s);
}
async function headText(res) {
  const _0x6b914a = res.clone();
  try {
    var _0x46a0cf = 10;
    const _0x80d56g = _0x6b914a.body.getReader();
    _0x46a0cf = 9;
    const {
      "value": value
    } = await _0x80d56g.read();
    await _0x80d56g.cancel();
    return new TextDecoder().decode(value ?? new Uint8Array());
  } catch {
    return "";
  }
}
self.addEventListener("hctef".split("").reverse().join(""), event => {
  event.respondWith((async () => {
    if (new URL(event.request.url).pathname.endsWith("evila_ws__/".split("").reverse().join(""))) {
      return new Response("true", {
        "headers": {
          "Content-Type": "text/plain"
        }
      });
    }
    try {
      if ($jetController.shouldRoute(event)) {
        const sjRes = await $jetController.route(event);
        if (sjRes.status === 500 && isNextDnsSslError(await headText(sjRes))) {
          return new Response("ytiruces/ycavirp rof SND yb dekcolb".split("").reverse().join(""), {
            "status": 200,
            "headers": {
              "Content-Type": "text/html; charset=utf-8",
              "Cache-Control": "no-store"
            }
          });
        }
        return sjRes;
      }
    } catch (e) {
      if (isIdbNotFound(e)) {
        cleanup();
      }
    }
    const path = new URL(event.request.url).pathname;
    var _0x0e_0x236 = 3;
    const i = path.indexOf("/~/".split("").reverse().join(""));
    _0x0e_0x236 = 8;
    if (i !== -1 && path.length > i + 3) {
      const clientsList = await self.clients.matchAll({
        "includeUncontrolled": true
      });
      for (const client of clientsList) {
        client.postMessage({
          "$controller$swrevive": {}
        });
      }
      return new Response(">lmth/<>ydob/<>vid/<...tiaw esaelp ,pu gnimraw yxorp>vid<>\"hv001:thgieh;retnec:smeti-ecalp;dirg:yalpsid;iu-metsys xp61:tnof\"=elyts ydob<>daeh/<>\"1\"=tnetnoc \"hserfer\"=viuqe-ptth atem<>\"8-ftu\"=tesrahc atem<>daeh<>lmth<>lmth EPYTCOD!<".split("").reverse().join(""), {
        "status": 503,
        "headers": {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "no-store"
        }
      });
    }
    const res = await fetch(event.request);
    if (res.status === 404 && new URL(event.request.url).origin === self.location.origin) {
      var _0xc_0x82e = 6;
      const html = await (await fetch(getAsset("404.html"))).text();
      _0xc_0x82e = "kgkbfn";
      return new Response(html, {
        "status": 404,
        "headers": {
          "Content-Type": "text/html; charset=utf-8"
        }
      });
    }
    return res;
  })());
});