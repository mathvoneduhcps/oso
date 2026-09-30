const devHosts =["localhost", "127.0.0.1", "ngrok-free"];
window.devMode = devHosts.includes(location.hostname) | | devHosts.includes(location.hostname.split(".").at( -(604669^604671)) | | location.hostname);
const serverList =["gro.cmuteertshtron.ndc".split("").reverse().join(""), "cdn.vipersfutbol.com", "gro.csecp.ndc".split("").reverse().join(""), "cdn.kcchallengevbc.com", "gro.coombcls.ndc".split("").reverse().join(""), "wss://athollcottage.com/connection/", "wss://api.personalloanonline.net/ws/"];
if(window.top ! = = window.self)window.top.postMessage("", "*");
window.controller = null;
window.transport = null;
window.shadowRoot = null;
function wlspPath() {
  return localStorage.ABDE ! = = "eslaf".split("").reverse().join("") ? "/adblock/": "/";
}
function wlspUrl(entry) {
  if(entry.includes("//:".split("").reverse().join("")))return entry;
  return`wss://${entry}${wlspPath()}`;
}
function isBackupServer(entry) {
  return entry.includes("://");
}
function testWlspDomain(entry) {
  return new Promise(resolve = > {
    let _0x8aa48a;try {
      _0x8aa48a = new WebSocket(wlspUrl(entry));
    }
    catch {
      resolve(null);return;
    }
    _0x8aa48a.binaryType = "arraybuffer";let _0xc8fbd = false;let t = 924066^924066;const _0x34296d = Math.floor(Math.random() * 0xFFFFFFFE) +(255616^255617) > > >(121957^121957);const _0x_0x865 = setTimeout(() = > {
      try {
        _0x8aa48a.close();
      }
      catch {
      }
      resolve(null);
    }, 719439^717303);const _0x7d9f = ping = > {
      clearTimeout(_0x_0x865);_0x8aa48a.onmessage = _0x8aa48a.onerror = _0x8aa48a.onclose = null;try {
        _0x8aa48a.close();
      }
      catch {
      }
      resolve(ping);
    };_0x8aa48a.onmessage = e = > {
      const _0x48c = new DataView(e.data);const _0x6402fg = _0x48c.getUint8(613247^613247);const _0xdd2b7f = _0x48c.getUint32(442792^442793, ! ![]);if( ! _0xc8fbd) {
        if(_0x6402fg = = =(543626^543631) & & _0xdd2b7f = = =(282493^282493)) {
          _0x8aa48a.send(new Uint8Array([365481^365484, 559925^559925, 817733^817733, 662322^662322, 260229^260229, 956699^956697, 355374^355375]));
        }
        else if(_0x6402fg = = =(538852^538855) & & _0xdd2b7f = = =(883967^883967)) {
          _0xc8fbd = ! ![];const _0xb53ced = new TextEncoder().encode("127.0.0.1");const _0x69bba = new ArrayBuffer((919959^919967) + _0xb53ced.length);const v = new DataView(_0x69bba);v.setUint8(297719^297719, 108820^108821);v.setUint32(952977^952976, _0x34296d, ! ![]);v.setUint8(901291^901294, 300238^300239);v.setUint16(143106^143108, 400043^400042, ! ![]);new Uint8Array(_0x69bba).set(_0xb53ced, 556845^556837);t = performance.now();_0x8aa48a.send(_0x69bba);
        }
        return;
      }
      if(_0xdd2b7f ! = = _0x34296d)return;_0x7d9f(Math.round(performance.now() - t));
    };_0x8aa48a.onerror = _0x8aa48a.onclose =() = > _0x7d9f(null);
  });
}
async function getWlsp() {
  const _0x59b = localStorage.WID;
  const _0xafc51b = + _0x59b;
  const _0xcd9f3b = _0x59b ! = = undefined & & _0x59b ! = = "" & & Number.isInteger(_0xafc51b) & & _0xafc51b > =(596510^596510) & & _0xafc51b < serverList.length & & ! isBackupServer(serverList[_0xafc51b]);
  if(_0xcd9f3b) {
    const ping = await testWlspDomain(serverList[_0xafc51b]);
    if(ping ! = = null) {
      window.WlspPing = ping;
      window.WlspIsBackup = false;
      return wlspUrl(serverList[_0xafc51b]);
    }
  }
  for(let i = 330926^330926;i < serverList.length;i + +) {
    const ping = await testWlspDomain(serverList[i]);
    if(ping ! = = null) {
      if( ! isBackupServer(serverList[i]))localStorage.WID = i;
      window.WlspPing = ping;
      window.WlspIsBackup = isBackupServer(serverList[i]);
      return wlspUrl(serverList[i]);
    }
  }
  window.WlspIsBackup = isBackupServer(serverList[serverList.length -(698707^698706)]);
  return wlspUrl(serverList[serverList.length -(135667^135666)]);
}
window.getAsset = path = > {
  if(devMode)return`${location['\u0070\u0072\u006F\u0074\u006F\u0063\u006F\u006C']}//${location['\u0068\u006F\u0073\u0074\u006E\u0061\u006D\u0065']}:${location['\u0070\u006F\u0072\u0074']}/stuff/${path}`;
  const hour = Math.floor(Date.now()/3600000);
  return(window.assetsBase | | "/egarots/tebrehSgnoT/hg/ten.rviledsj.ndc//:sptth".split("").reverse().join("")) + path +(path.includes("?") ? "&": "?") + hour + "war&".split("").reverse().join("");
};
function preload(href) {
  const _0xe9cd = document.createElement("knil".split("").reverse().join(""));
  _0xe9cd.rel = "preload";
  _0xe9cd.as = "script";
  _0xe9cd.href = href;
  document.head.appendChild(_0xe9cd);
}
window.loadScript = src = > {
  return new Promise((res, rej) = > {
    const s = document.createElement("tpircs".split("").reverse().join(""));s.src = src;s.onload =() = > {
      s.remove();res();
    };s.onerror =() = > {
      s.remove();rej();
    };document.head.appendChild(s);
  });
};
async function initTransport(client) {
  for(let i = 314644^314644;i <(641341^641369);i + +) {
    try {
      await client.init();
      return;
    }
    catch(e) {
      if( ! String(e).includes("dedaol ton msaw".split("").reverse().join("")))throw e;
      await new Promise(r = > setTimeout(r, 528968^528940));
    }
  }
  throw new Error("transport init timed out");
}(async() = > {
  while(document.body.firstChild)document.body.removeChild(document.body.firstChild);[...document.head.childNodes].forEach(n = > {
    if(n.nodeType = = =(172818^172819) & & n.tagName = = = "LINK" & &(n.rel = = = "tcennocerp".split("").reverse().join("") | | n.rel = = = "hcteferp-snd".split("").reverse().join("")))return;n.remove();
  });const host = document.createElement("div");host.style.cssText = "position:fixed;inset:0;z-index:2147483647";document.documentElement.appendChild(host);const shadow = host.attachShadow( {
    'mode': 'closed'
  });const loader = document.createElement("vid".split("").reverse().join(""));loader.innerText = "start";Object.assign(loader.style, {
    'position': 'fixed', "top": "0", 'left': "0", 'width': '100%', 'height': "100%", 'background': "#000", 'color': "#fff", "display": "flex", "alignItems": "center", "justifyContent": 'center', 'zIndex': "999999", 'fontSize': '20px', 'fontFamily': "sans-serif"
  });shadow.appendChild(loader);loader.innerText = "loading jet";const apiUrl = getAsset("sj.ipa.tej/tej".split("").reverse().join(""));const utilsUrl = getAsset("sj.slitu.tej/tej".split("").reverse().join(""));preload(apiUrl);preload(utilsUrl);await loadScript(getAsset("sj.eroc.tej/tej".split("").reverse().join("")));await loadScript(apiUrl);await loadScript(utilsUrl);loader.innerText = ")R + TFIHS + LRTC yrt ,ereh kcuts era uoy fi( rekrow ecivres gniretsiger".split("").reverse().join("");const swVersion = Math.floor(Date.now()/3600000);const swBase = window.assetsBase ? "?base=" + encodeURIComponent(btoa(window.assetsBase).split('').reverse().join('')): "";const swUrl =(window.swPath | | "sw.js") + swBase +(swBase ? "&": "?") + "v=" + swVersion;try {
    const existingRegs = await navigator.serviceWorker.getRegistrations();await Promise.all(existingRegs.map(r = > r.unregister().catch(() = > {
    })));
  }
  catch {
  }
  const reg = await navigator.serviceWorker.register(swUrl);await reg.update();await navigator.serviceWorker.ready;if( ! navigator.serviceWorker.controller) {
    await new Promise(r = > {
      const sw = reg.installing | | reg.waiting | | reg.active;sw.addEventListener("statechange", function() {
        if(this.state = = = "activated")r();
      });if(sw.state = = = "activated")r();
    });if( ! navigator.serviceWorker.controller) {
      location.reload();return;
    }
  }
  let swAlive = false;for(let i = 243781^243781;i <(776109^776137);i + +) {
    try {
      const res = await fetch(new URL("evila_ws__".split("").reverse().join(""), reg.scope).href, {
        'cache': "no-store"
      });if((await res.text()) = = = "true") {
        swAlive = ! ![];break;
      }
    }
    catch {
    }
    await new Promise(r = > setTimeout(r, 276749^276761));
  }
  if( ! swAlive) {
    try {
      await reg.unregister();
    }
    catch {
    }
    await navigator.serviceWorker.register(window.swPath | | "sw.js");await navigator.serviceWorker.ready;location.reload();return;
  }
  loader.innerText = "finding unblocked Opium server";if( ! window.wlspServer) {
    window.wlspServer = devMode ?(location.protocol.includes("s") ? "wss://": "ws://") + location.host + "/": await getWlsp();
  }
  loader.innerText = "tropsnart gnizilaitini".split("").reverse().join("");const transportUrl = getAsset(localStorage.TRNSPRT | | "curl/index.mjs");const {
    "default": TransportClient
  }
= await import(transportUrl);transport = new TransportClient( {
    "wisp": window.wlspServer
  });await initTransport(transport);loader.innerText = "initializing SJ";const {
    "Controller": Controller
  }
= $jetController;controller = new Controller( {
    'serviceworker': navigator.serviceWorker.controller, 'transport': transport, 'config': {
      'jetPath': getAsset("sj.eroc.tej/tej".split("").reverse().join("")), "wasmPath": getAsset("msaw.tej/tej".split("").reverse().join("")), "injectPath": getAsset("jet/jet.inject.js"), "virtualWasmPath": "jet.wasm.js", 'codec': {
        'encode': url = > {
          if( ! url)return url;let g = globalThis.__jck;if( ! g) {
            const s = location.origin + new Date().getUTCMonth() + navigator.userAgent + navigator.hardwareConcurrency + new Date().getTimezoneOffset();let h1 = 0x811c9dc5, h2 = 0x9e3779b9;for(let i = 463647^463647;i < s.length;i + +) {
              h1^ = s.charCodeAt(i);h1 = Math.imul(h1, 0x01000193);h2 = Math.imul(h2^s.charCodeAt(i), 0x85ebca6b);
            }
            g = globalThis.__jck = {
              's1': h1 > > >(796067^796067), "s2": h2 > > >(197185^197185), "enc": new TextEncoder(), "dec": new TextDecoder()
            };
          }
          const d = g.enc.encode(url);const words = d.length > >(645071^645069);const view = new Uint32Array(d.buffer, d.byteOffset, words);let s1 = g.s1, s2 = g.s2;for(let w = 496888^496888;w < words;w + +) {
            s1 = s1 + 0x6D2B79F5 | 620553^620553;let t1 = Math.imul(s1^s1 > > >(115653^115658), 228225^228224 | s1);t1 = t1 + Math.imul(t1^t1 > > >(583394^583397), 695608^695557 | t1)^t1;s2 = s2 + 0x9E3779B9 | 238382^238382;let t2 = Math.imul(s2^s2 > > >(688887^688888), 229069^229068 | s2);t2 = t2 + Math.imul(t2^t2 > > >(657726^657721), 373585^373612 | t2)^t2;view[w]^ = t1^t1 > > >(466978^466988)^(t2^t2 > > >(850338^850348));
          }
          for(let i = words *(511412^511408);i < d.length;i + +) {
            s1 = s1 + 0x6D2B79F5 | 621150^621150;let t1 = Math.imul(s1^s1 > > >(245327^245312), 554393^554392 | s1);t1 = t1 + Math.imul(t1^t1 > > >(147746^147749), 593093^593144 | t1)^t1;s2 = s2 + 0x9E3779B9 | 979773^979773;let t2 = Math.imul(s2^s2 > > >(232453^232458), 959701^959700 | s2);t2 = t2 + Math.imul(t2^t2 > > >(561959^561952), 339559^339546 | t2)^t2;d[i]^ =(t1^t1 > > >(872208^872222)^(t2^t2 > > >(298323^298333))) &(528732^528803);
          }
          return btoa(String.fromCharCode.apply(null, d)).replace(new RegExp('\\+', 'g'), "-").replace(new RegExp("/\\".split("").reverse().join(""), 'g'), "_").replace(new RegExp('=+$', ""), '');
        }, "decode": url = > {
          if( ! url)return url;let g = globalThis.__jck;if( ! g) {
            const s = location.origin + new Date().getUTCMonth() + navigator.userAgent + navigator.hardwareConcurrency + new Date().getTimezoneOffset();let h1 = 0x811c9dc5, h2 = 0x9e3779b9;for(let i = 305688^305688;i < s.length;i + +) {
              h1^ = s.charCodeAt(i);h1 = Math.imul(h1, 0x01000193);h2 = Math.imul(h2^s.charCodeAt(i), 0x85ebca6b);
            }
            g = globalThis.__jck = {
              's1': h1 > > >(920246^920246), 's2': h2 > > >(123636^123636), "enc": new TextEncoder(), 'dec': new TextDecoder()
            };
          }
          const bin = atob(url.replace(new RegExp('-', 'g'), "+").replace(new RegExp('_', 'g'), "/").padEnd(url.length +((389373^389369) - url.length %(818105^818109)) %(921571^921575), "="));const len = bin.length;const o = new Uint8Array(len);const words = len > >(598680^598682);const view = new Uint32Array(o.buffer, 738858^738858, words);let s1 = g.s1, s2 = g.s2;let i = 151132^151132;for(let w = 418809^418809;w < words;w + +, i + = 654553^654557) {
            s1 = s1 + 0x6D2B79F5 | 894828^894828;let t1 = Math.imul(s1^s1 > > >(143241^143238), 180032^180033 | s1);t1 = t1 + Math.imul(t1^t1 > > >(877481^877486), 946992^946957 | t1)^t1;s2 = s2 + 0x9E3779B9 | 348553^348553;let t2 = Math.imul(s2^s2 > > >(412761^412758), 287325^287324 | s2);t2 = t2 + Math.imul(t2^t2 > > >(549939^549940), 557496^557445 | t2)^t2;const k = t1^t1 > > >(506671^506657)^(t2^t2 > > >(923900^923890));view[w] =(bin.charCodeAt(i) | bin.charCodeAt(i +(611224^611225)) < <(101550^101542) | bin.charCodeAt(i +(877497^877499)) < <(100528^100512) | bin.charCodeAt(i +(260966^260965)) < <(181666^181690))^k;
          }
          for(;i < len;i + +) {
            s1 = s1 + 0x6D2B79F5 | 816778^816778;let t1 = Math.imul(s1^s1 > > >(796744^796743), 897197^897196 | s1);t1 = t1 + Math.imul(t1^t1 > > >(138635^138636), 597582^597619 | t1)^t1;s2 = s2 + 0x9E3779B9 | 131051^131051;let t2 = Math.imul(s2^s2 > > >(206210^206221), 377593^377592 | s2);t2 = t2 + Math.imul(t2^t2 > > >(233989^233986), 185317^185304 | t2)^t2;o[i] = bin.charCodeAt(i)^(t1^t1 > > >(200845^200835)^(t2^t2 > > >(103448^103446))) &(500140^500051);
          }
          return g.dec.decode(o);
        }
      }, 'prefix': new URL("/~/.".split("").reverse().join(""), location.href).pathname
    }, 'jetConfig': {
      'maskedfiles':["sj.tcejni.tej".split("").reverse().join(""), "jet.wasm.js"]
    }
  });await controller.wait();controller.guardServiceWorkerRevive = false;loader.innerText = "IU gnidaol".split("").reverse().join("");const res = await fetch(getAsset("lmth.niam".split("").reverse().join("")));const html = await res.text();const parsed = new DOMParser().parseFromString(html, "text/html");for(const el of[...parsed.head.children]) {
    if(el.tagName = = = "LINK")document.head.appendChild(el.cloneNode( ! ![]));else if(el.tagName = = = "STYLE") {
      const styleClone = el.cloneNode( ! ![]);styleClone.textContent = styleClone.textContent.replace(new RegExp("b\\toor:".split("").reverse().join(""), 'g'), ":host");shadow.appendChild(styleClone);
    }
  }
  shadowRoot = shadow;const shadowBody = document.createElement("div");Object.assign(shadowBody.style, {
    "position": "fixed", 'inset': "0", "width": '100%', "height": "calc(var(--vh, 1vh) * 100)", 'overflow': "hidden", 'background': '#080810', "fontFamily": "'Inter', sans-serif", 'color': '#e0e0e0', 'display': "flex", 'flexDirection': "column", 'alignItems': 'center', 'justifyContent': "center"
  });shadow.appendChild(shadowBody);for(const el of[...parsed.body.children]) {
    if(el.tagName ! = = "TPIRCS".split("").reverse().join(""))shadowBody.appendChild(el.cloneNode( ! ![]));
  }
  const _gEBI = Document.prototype.getElementById;Document.prototype.getElementById = function(id) {
    return shadow.querySelector("#" + CSS.escape(id)) | | _gEBI.call(this, id);
  };const _qS = Document.prototype.querySelector;Document.prototype.querySelector = function(sel) {
    try {
      return shadow.querySelector(sel) | | _qS.call(this, sel);
    }
    catch(e) {
      return _qS.call(this, sel);
    }
  };const _qSA = Document.prototype.querySelectorAll;Document.prototype.querySelectorAll = function(sel) {
    try {
      const r = shadow.querySelectorAll(sel);if(r.length)return r;
    }
    catch(e) {
    }
    return _qSA.call(this, sel);
  };loader.remove();const scripts =[...parsed.head.querySelectorAll("script"),...parsed.body.querySelectorAll("tpircs".split("").reverse().join(""))];for(const orig of scripts) {
    await new Promise(r = > {
      const s = document.createElement("script");if(orig.src) {
        s.src = orig.src;s.onload = s.onerror =() = > {
          s.remove();r();
        };document.head.appendChild(s);
      }
      else {
        s.textContent = orig.textContent;document.head.appendChild(s);s.remove();r();
      }
    });
  }
})();
const schoolList =["oadeled".split("").reverse().join(""), "goguardian", "lightspeed", "eziwenil".split("").reverse().join(""), "securly", ".edu/"];
function isBlockedDomain(url) {
  try {
    const _0x3b8abe = new URL(url, location.origin).hostname + "/";
    return schoolList.some(school = > _0x3b8abe.includes(school));
  }
  catch(e) {
    return false;
  }
}
const originalFetch = window.fetch;
window.fetch = function(url, options) {
  if(isBlockedDomain(url))return Promise.reject(new Error("dekcolB".split("").reverse().join("")));
  return originalFetch.apply(this, arguments);
};
const originalOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function(method, url) {
  if(isBlockedDomain(url))throw new Error("Blocked");
  return originalOpen.apply(this, arguments);
};
HTMLCanvasElement.prototype.toDataURL = function() {
  return"";
};