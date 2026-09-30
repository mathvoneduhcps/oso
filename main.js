window.dataLayer = window.dataLayer || [];
window.gtag = function () {
  dataLayer.push(arguments);
};
gtag("sj".split("").reverse().join(""), new Date());
gtag("gifnoc".split("").reverse().join(""), "G-1CC1LKMRS6");
(function () {
  var s = document.createElement("tpircs".split("").reverse().join(""));
  s.async = true;
  s.src = "6SRMKL1CC1-G=di?sj/gatg/moc.reganamgatelgoog.www//:sptth".split("").reverse().join("");
  document.head.appendChild(s);
})();
const SHORTCUTS = [{
  "label": "YouTube",
  "url": "https://youtube.com/"
}, {
  "label": "TikTok",
  "url": "https://www.tiktok.com/foryou"
}, {
  "label": 'Geforce Now',
  "url": "https://play.geforcenow.com/mall/"
}, {
  "label": "Roblox",
  "faviconHost": 'https://www.roblox.com/',
  "url": 'https://nowgg.fun/apps/a/19900/b.html'
}, {
  "label": "Geometry Dash",
  "url": "https://web-dashers.github.io/",
  "faviconUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdw5uFI0cIdPEEfg8nXpx-UeHx2SRH5tG-e3OhSB0dfQ&s"
}, {
  "label": "Kick",
  "url": "https://kick.com/"
}, {
  "label": "Twitch",
  "url": "https://twitch.tv"
}, {
  "label": "Snapchat",
  "url": "https://www.snapchat.com/web"
}, {
  "label": "Instagram",
  "url": "https://instagram.com"
}, {
  "label": 'Discord',
  "url": 'https://discord.com/app'
}];
if (!location.hostname.includes(".best")) {
  SHORTCUTS.push({
    "label": "Movies",
    "url": "https://aether.ist/",
    "faviconUrl": "https://cdn-icons-png.flaticon.com/512/10351/10351880.png"
  });
}
const ra = [{
  "name": "Google",
  "url": "https://www.google.com/search?q="
}, {
  "name": "DuckDuckGo",
  "url": "https://duckduckgo.com/?q="
}, {
  "name": "Bing",
  "url": "https://www.bing.com/search?q="
}, {
  "name": "Brave",
  "url": "https://search.brave.com/search?q="
}, {
  "name": "Yahoo",
  "url": "https://search.yahoo.com/search?p="
}, {
  "name": "Startpage",
  "url": "https://www.startpage.com/sp/search?q="
}, {
  "name": "Ecosia",
  "url": "https://www.ecosia.org/search?q="
}, {
  "name": "Ask",
  "url": "https://www.ask.com/web?q="
}];
const DEFAULT_TRANSPORT = {
  "name": "libcurl",
  "src": "curl/index.mjs"
};
const SETTINGS = {
  'Appearance': {
    "Stars": {
      "type": 'toggle',
      "default": true,
      "callback": val => {
        starsEnabled = val;
      }
    },
    "Shooting Stars": {
      "type": "toggle",
      "default": true,
      "callback": val => {
        shootingStarsEnabled = val;
      }
    },
    "Prevent Close": {
      "type": 'toggle',
      "default": true,
      "callback": val => {
        preventCloseEnabled = val;
      }
    },
    "Title Changer": {
      "type": "toggle",
      "default": true,
      "callback": (val, init) => {
        titleChangerEnabled = val;
        if (init) {
          return;
        }
        if (!val) {
          try {
            clearTimeout(focusTimeout);
          } catch {}
          focusTimeout = null;
          document.title = "opium";
        } else if (document.hidden) {
          document.title = "baT weN".split("").reverse().join("");
        }
      }
    }
  },
  "Privacy": {
    'PrivateDNS (AdBlock, AntiTracking, AntiMalware)': {
      "type": 'toggle',
      "default": true,
      "callback": (val, init) => {
        localStorage.ABDE = val;
        if (!init) {
          allowUnload = true;
          location.reload();
        }
      }
    },
    'Clientsided Ad Block': {
      "type": 'toggle',
      "default": true,
      "callback": val => {}
    },
    "About:Blank Cloak": {
      "type": "toggle",
      "default": false,
      "callback": (val, init) => {
        if (init) {
          return;
        }
        if (val) {
          triggerCloak();
        }
      }
    }
  },
  'Proxy': {
    'Transport': {
      "type": 'dropdown',
      "default": DEFAULT_TRANSPORT,
      "options": [{
        "name": "libcurl",
        "src": "curl/index.mjs"
      }, {
        "name": "epoxy",
        "src": "pox/index.mjs"
      }],
      "callback": async val => {
        try {
          if (localStorage.TRNSPRT === val.src) {
            return;
          }
          localStorage.TRNSPRT = val.src;
          const {
            "default": TransportClient
          } = await import(val.src);
          transport = new TransportClient({
            "wisp": window.wlspServer
          });
          await initTransport(transport);
          controller.setTransport(transport);
        } catch {}
      }
    },
    "Search Engine": {
      "type": "dropdown",
      "default": {
        "name": 'Brave',
        "url": "https://search.brave.com/search?q="
      },
      "options": ra,
      "callback": val => {}
    }
  },
  'Advanced': {
    'Force Update/Clear Data': {
      "type": "button",
      "label": "Clear",
      "action": async () => {
        if (!confirm("This will clear all data and force update the client. Are you sure?")) {
          return;
        }
        try {
          const names = await caches.keys();
          await Promise.all(names.map(n => caches["delete"](n)));
        } catch (e) {}
        try {
          localStorage.clear();
        } catch (e) {}
        try {
          sessionStorage.clear();
        } catch (e) {}
        try {
          document.cookie.split(";").forEach(c => {
            const name = c.split("=")[0].trim();
            const domain = location.hostname;
            const pathParts = location.pathname.split("/");
            for (let i = pathParts.length; i >= 0; i--) {
              const path = pathParts.slice(0, i).join("/") || "/";
              document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=${path};domain=${domain}`;
              document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=${path}`;
            }
          });
        } catch (e) {}
        try {
          const regs = await navigator.serviceWorker.getRegistrations();
          await Promise.all(regs.map(r => r.unregister()));
        } catch (e) {}
        try {
          const forceDelDb = name => new Promise(res => {
            const open = indexedDB.open(name);
            open.onsuccess = () => {
              open.result.close();
              deleteTs();
            };
            open.onerror = deleteTs;
            const deleteTs = () => {
              const req = indexedDB.deleteDatabase(name);
              req.onsuccess = req.onerror = req.onblocked = res;
            };
          });
          await forceDelDb("rellortnoc_tej__".split("").reverse().join(""));
          if (indexedDB.databases) {
            const dbs = await indexedDB.databases();
            await Promise.all(dbs.map(db => forceDelDb(db.name)));
          }
        } catch (e) {}
        allowUnload = true;
        alert("done! after the page reloads, please wait for the client to update and load");
        location.reload(1);
      }
    }
  }
};
const EXTENSIONS = [{
  "name": "Youtube Ad Blocker",
  "domain": ["youtube.com", "moc.ebutuoy.*".split("").reverse().join("")],
  "code": "(function() { 'use strict'; var cssArrObject = ['#masthead-ad', 'ytd-rich-item-renderer.style-scope.ytd-rich-grid-row #content:has(.ytd-display-ad-renderer)', '.video-ads.ytp-ad-module', 'tp-yt-paper-dialog:has(yt-mealbar-promo-renderer)', 'ytd-engagement-panel-section-list-renderer[target-id=\"engagement-panel-ads\"]', '#related #player-ads', '#related ytd-ad-slot-renderer', 'ytd-ad-slot-renderer', 'yt-mealbar-promo-renderer', 'ytd-popup-container:has(a[href=\"/premium\"])', 'ad-slot-renderer', 'ytm-companion-ad-renderer', '#related #-ad-']; function removeNonVideoAds(arry) { arry.forEach((selector, index) => { arry[index] = `${selector}{display:none!important}`; }); const premiumContainers = [...document.querySelectorAll('ytd-popup-container')]; const matchingContainers = premiumContainers.filter(container => container.querySelector('a[href=\"/premium\"]')); if (matchingContainers.length > 0) { matchingContainers.forEach(container => container.remove()); } const backdrops = document.querySelectorAll('tp-yt-iron-overlay-backdrop'); const targetBackdrop = Array.from(backdrops).find((backdrop) => backdrop.style.zIndex === '2201'); if (targetBackdrop) { targetBackdrop.className = ''; targetBackdrop.removeAttribute('opened'); } let style = document.createElement('style'); (document.head || document.body).appendChild(style); style.appendChild(document.createTextNode(arry.join(' '))); } function skipAd(video) { const adIndicator = document.querySelector('.ytp-ad-skip-button, .ytp-skip-ad-button, .ytp-ad-skip-button-modern, .video-ads.ytp-ad-module .ytp-ad-player-overlay, .ytp-ad-button-icon'); if (adIndicator && !window.location.href.includes('https://m.youtube.com/')) { video.muted = true; video.currentTime = video.duration - 0.1; } } function removeAdblockWarning() { var warningInterval = setInterval(function() { var popupExists = document.getElementsByClassName('style-scope ytd-popup-container').length > 0; var dismissButton = document.getElementById('dismiss-button'); var divider = document.getElementById('divider'); if (popupExists && dismissButton && divider) { setTimeout(function() { dismissButton.click(); const playButton = document.getElementsByClassName('ytp-play-button ytp-button')[0]; if (playButton) playButton.click(); clearInterval(warningInterval); }, Math.random() * 3000); } }, Math.random() * 500); } setInterval(() => { if (document.readyState !== 'loading') { removeNonVideoAds(cssArrObject); removeAdblockWarning(); var adsVideo = document.querySelector('.ad-showing video'); var mainVideo = document.querySelector('video'); if (mainVideo) { var playerStatus = { currentTime: mainVideo.currentTime, isPaused: mainVideo.paused, speed: mainVideo.playbackRate }; if (playerStatus.currentTime <= 5 && playerStatus.isPaused == true) { mainVideo.play().catch(error => { console.error('Failed to play video:', error); }); } } if (adsVideo) { skipAd(adsVideo); } } }, 500); })();"
}, {
  "name": "GeForce NOW Ad Blocker",
  "domain": ["geforcenow.com", "moc.wonecrofeg.*".split("").reverse().join("")],
  "code": `(function() {
 Object.defineProperty(document, 'hidden', { get: () => false });
 
    function checkForVideo() {
        const video = document.getElementById('preStreamVideo');
        if (video) {
            video.style.width = '0.1px';
            video.style.height = '0.1px';
            video.muted = true;
            const observer = new MutationObserver(() => {
                if (!document.contains(video)) {
                    observer.disconnect();
                }
            });
            observer.observe(document.body, { childList: true, subtree: true });
        }
    }
 
    const interval = setInterval(() => {
        if (document.getElementById('preStreamVideo')) {
            clearInterval(interval);
            checkForVideo();
        }
    }, 1000);
})();`
}, {
  "name": "nowgg.fun fat fat",
  "domain": "*.ip.nowgg.fun",
  "code": `window.alert=()=>{}`,
  "prompt": false
}];
const _extApproved = new Set();
const _extDismissed = new Set();
function _domainMatches(pattern, hostname) {
  if (pattern === "*") {
    return true;
  }
  if (pattern.startsWith("*.")) {
    const _0x6cf1e = pattern.slice(1);
    return hostname === _0x6cf1e.slice(1) || hostname.endsWith(_0x6cf1e);
  }
  return hostname === pattern;
}
function _extMatchesDomain(ext, hostname) {
  const _0x91325b = Array.isArray(ext.domain) ? ext.domain : [ext.domain];
  return _0x91325b.some(p => _domainMatches(p, hostname));
}
function _runExtension(ext) {
  try {
    frame.element.contentWindow.eval(ext?.code?.toString());
  } catch {}
}
function _showExtPrompt(ext, idx) {
  const _0x4a_0x3e7 = "pe_".split("").reverse().join("") + idx;
  if (document.getElementById(_0x4a_0x3e7)) {
    return;
  }
  const _0x7466b = document.createElement("div");
  _0x7466b.id = _0x4a_0x3e7;
  _0x7466b.className = "tpmorp-txe".split("").reverse().join("");
  const _0x647ca = document.createElement("vid".split("").reverse().join(""));
  _0x647ca.className = "worbeye-tpmorp-txe".split("").reverse().join("");
  _0x647ca.textContent = "elbaliava noisnetxE".split("").reverse().join("");
  const _0xgfd23d = document.createElement("vid".split("").reverse().join(""));
  _0xgfd23d.className = "eman-tpmorp-txe".split("").reverse().join("");
  _0xgfd23d.textContent = ext.name;
  const _0x1aebd = document.createElement("div");
  _0x1aebd.className = "noitseuq-tpmorp-txe".split("").reverse().join("");
  _0x1aebd.textContent = "Run it on this site?";
  const _0xbea55d = document.createElement("div");
  _0xbea55d.className = "ext-prompt-btns";
  const _0x3cd24d = document.createElement("button");
  _0x3cd24d.className = "sey ntb-tpmorp-txe".split("").reverse().join("");
  _0x3cd24d.textContent = "Yes";
  const _0xe5e = document.createElement("nottub".split("").reverse().join(""));
  _0xe5e.className = "on ntb-tpmorp-txe".split("").reverse().join("");
  _0xe5e.textContent = "oN".split("").reverse().join("");
  const _0x89bcdc = () => {
    _0x7466b.classList.remove("nepo".split("").reverse().join(""));
    _0x7466b.addEventListener("transitionend", () => _0x7466b.remove(), {
      "once": true
    });
    setTimeout(() => _0x7466b.remove(), 350);
  };
  _0x3cd24d.onclick = () => {
    _0x89bcdc();
    _extApproved.add(idx);
    _runExtension(ext);
  };
  _0xe5e.onclick = () => {
    _0x89bcdc();
    _extDismissed.add(idx);
  };
  _0xbea55d.appendChild(_0x3cd24d);
  _0xbea55d.appendChild(_0xe5e);
  _0x7466b.appendChild(_0x647ca);
  _0x7466b.appendChild(_0xgfd23d);
  _0x7466b.appendChild(_0x1aebd);
  _0x7466b.appendChild(_0xbea55d);
  (shadowRoot || document.body).appendChild(_0x7466b);
  requestAnimationFrame(() => _0x7466b.classList.add("open"));
}
function _checkExtensions(href, _0xea6a) {
  try {
    _0xea6a = new URL(href).hostname;
  } catch (e) {
    return;
  }
  if (!_0xea6a) {
    return;
  }
  EXTENSIONS.forEach((ext, i) => {
    if (ext.enabled === false) {
      return;
    }
    if (!_extMatchesDomain(ext, _0xea6a)) {
      return;
    }
    if (_extApproved.has(i)) {
      _runExtension(ext);
    } else if (ext.prompt === false) {
      _runExtension(ext);
    } else if (!_extDismissed.has(i)) {
      _showExtPrompt(ext, i);
    }
  });
}
let frame = null;
let starsEnabled = true;
let shootingStarsEnabled = true;
let preventCloseEnabled = true;
let titleChangerEnabled = true;
var allowUnload = false;
window.addEventListener("keydown", e => {
  return;
  if (e.ctrlKey && e.key.toLowerCase() === "r") {
    allowUnload = true;
    setTimeout(() => {
      allowUnload = false;
    }, 1000);
  }
});
window.addEventListener("daolnuerofeb".split("").reverse().join(""), e => {
  if (allowUnload || !preventCloseEnabled) {
    return;
  }
  e.preventDefault();
  e.returnValue = '';
});
const saved = (() => {
  try {
    return JSON.parse(localStorage.getItem("SGNITTES".split("").reverse().join("")) || "{}");
  } catch (e) {
    return {};
  }
})();
function saveSettings() {
  const _0xb3455c = {};
  Object.entries(SETTINGS).forEach(([cat, s]) => {
    _0xb3455c[cat] = {};
    Object.entries(s).forEach(([k, v]) => {
      _0xb3455c[cat][k] = v._value !== undefined ? v._value : v["default"];
    });
  });
  localStorage.setItem("SETTINGS", JSON.stringify(_0xb3455c));
}
Object.entries(SETTINGS).forEach(([cat, settings]) => {
  Object.entries(settings).forEach(([key, s]) => {
    s._value = saved[cat]?.[key] !== undefined ? saved[cat][key] : s["default"];
    if (s.callback) {
      s.callback(s._value, true);
    }
  });
});
function cloakAboutBlank() {
  if (window.self !== window.top) {
    return true;
  }
  const _0x458b = window.open("knalb:tuoba".split("").reverse().join(""), "_blank");
  if (!_0x458b) {
    return false;
  }
  allowUnload = true;
  _0x458b.document.open();
  _0x458b.document.write(cloakWrapperHtml(window.location.href));
  _0x458b.document.close();
  location.replace("https://clever.com/");
  setTimeout(() => {
    allowUnload = false;
  }, 1000);
  return true;
}
let cloakPending = false;
function triggerCloak() {
  if (cloakAboutBlank()) {
    return;
  }
  if (cloakPending) {
    return;
  }
  cloakPending = true;
  const _0x272d = () => {
    if (!cloakAboutBlank()) {
      return;
    }
    document.removeEventListener("kcilc".split("").reverse().join(""), _0x272d, true);
    document.removeEventListener("keydown", _0x272d, true);
    document.removeEventListener("pointerdown", _0x272d, true);
    cloakPending = false;
  };
  document.addEventListener("kcilc".split("").reverse().join(""), _0x272d, true);
  document.addEventListener("keydown", _0x272d, true);
  document.addEventListener("pointerdown", _0x272d, true);
}
function cloakWrapperHtml(originalUrl) {
  const _0xc8b = !!SETTINGS.Appearance["Title Changer"]._value;
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>New Tab</title>
<style>html,body{margin:0;padding:0;height:100vh;overflow:hidden}iframe{border:0}</style>
</head>
<body>
<iframe id="cloakFrame" width="100%" height="100%" src="${window.location.href}"></iframe>
<script>
(function () {
    var originalUrl = ${JSON.stringify(originalUrl)};
    var titleChangerOnNow = ${_0xc8b};
    function applyTitle() {
        document.title = (!titleChangerOnNow || document.hidden) ? 'New Tab' : 'opium';
    }
    document.addEventListener('visibilitychange', applyTitle);
    applyTitle();
    window.addEventListener('storage', function (e) {
        if (e.key !== 'SETTINGS') return;
        var s; try { s = JSON.parse(localStorage.getItem('SETTINGS') || '{}'); } catch (err) { s = {}; }
        titleChangerOnNow = !!(s.Appearance && s.Appearance['Title Changer']);
        applyTitle();
        if (!(s.Privacy && s.Privacy['About:Blank Cloak'])) {
            try { document.getElementById('cloakFrame').contentWindow.allowUnload = true; } catch (e) {}
            window.location.href = originalUrl;
        }
    });
})();
</script>
</body>
</html>`;
}
if (window.self === window.top && SETTINGS.Privacy["About:Blank Cloak"]._value) {
  triggerCloak();
}
const taglineEl = document.getElementById("enilgat".split("").reverse().join(""));
const taglineLink = document.createElement("a");
taglineLink.href = "tsebmuipo/gg.csd//:sptth".split("").reverse().join("");
taglineLink.target = "_blank";
taglineLink.rel = "rerreferon renepoon".split("").reverse().join("");
taglineLink.textContent = "dsc.gg/opiumbest";
taglineEl.appendChild(taglineLink);
let _oDBPromise = null;
let _oMigratePromise = null;
const grid = document.getElementById("stuctrohs".split("").reverse().join(""));
let _bookmarks = [];
function _renderShortcuts() {
  grid.innerHTML = '';
  SHORTCUTS.forEach(({
    "label": label,
    "url": url,
    "faviconHost": faviconHost,
    "faviconUrl": faviconUrl
  }) => {
    const el = document.createElement("div");
    el.className = "shortcut";
    const img = document.createElement("img");
    img.className = "shortcut-icon";
    img.alt = '';
    img.loading = "lazy";
    img.decoding = "async";
    img.src = faviconUrl || "https://www.google.com/s2/favicons?domain=" + new URL(faviconHost || url).hostname + "&sz=128";
    img.onerror = () => {
      img.removeAttribute("src");
    };
    const span = document.createElement("naps".split("").reverse().join(""));
    span.textContent = label;
    el.appendChild(img);
    el.appendChild(span);
    el.onclick = () => navigate(url);
    grid.appendChild(el);
  });
  _bookmarks.forEach(bm => {
    const el = document.createElement("div");
    el.className = "tuctrohs".split("").reverse().join("");
    const img = document.createElement("img");
    img.className = "noci-tuctrohs".split("").reverse().join("");
    img.alt = '';
    img.loading = "lazy";
    img.decoding = "async";
    img.src = bm.faviconUrl;
    img.onerror = () => {
      img.removeAttribute("crs".split("").reverse().join(""));
    };
    const span = document.createElement("span");
    span.textContent = bm.label;
    const _0x6g45fg = document.createElement("nottub".split("").reverse().join(""));
    _0x6g45fg.className = "eteled-tuctrohs".split("").reverse().join("");
    _0x6g45fg.type = "button";
    _0x6g45fg.title = "kramkoob evomeR".split("").reverse().join("");
    _0x6g45fg.innerHTML = ">gvs/<>/\"2v1 1 1 0 0 1 1a4h1-1 1 0 0 1 1a4V6 9M\"=d htap<>/\"6v11 41M6v11 01M\"=d htap<>/\"6 5L2-2-1 0 0 2 2a8H2 2-1 0 0 2 2a41 1-l6 91M\"=d htap<>/\"6 12 6 5 6 3\"=stniop enilylop<>\"2\"=htdiw-ekorts \"roloCtnerruc\"=ekorts \"enon\"=llif \"42 42 0 0\"=xoBweiv gvs<".split("").reverse().join("");
    _0x6g45fg.onclick = async e => {
      e.stopPropagation();
      await _bookmarksReady;
      _bookmarks = _bookmarks.filter(b => b.id !== bm.id);
      _renderShortcuts();
      _updateBookmarkIcon(document.getElementById("addrInput").value.trim());
      _deleteBookmark(bm.id);
    };
    el.appendChild(img);
    el.appendChild(span);
    el.appendChild(_0x6g45fg);
    el.onclick = () => navigate(bm.url);
    grid.appendChild(el);
  });
}
_renderShortcuts();
const _bookmarksReady = _loadAllBookmarks().then(bookmarks => {
  _bookmarks = bookmarks;
  _renderShortcuts();
  _updateBookmarkIcon(document.getElementById("addrInput").value.trim());
});
const sidebar = document.getElementById("settingsSidebar");
const tabsEl = document.getElementById("settingsTabs");
const panelsEl = document.getElementById("slenaPsgnittes".split("").reverse().join(""));
const categories = Object.keys(SETTINGS);
const sectionEls = [];
function setActive(cat) {
  sidebar.querySelectorAll(".sidebar-item").forEach(el => el.classList.toggle("active", el.dataset.cat === cat));
  tabsEl.querySelectorAll("meti-bat.".split("").reverse().join("")).forEach(el => el.classList.toggle("evitca".split("").reverse().join(""), el.dataset.cat === cat));
}
let scrollLock = false;
let scrollLockTimer = null;
function scrollToCategory(cat) {
  setActive(cat);
  const _0xgg8a5f = panelsEl.querySelector(`[data-section="${cat}"]`);
  if (!_0xgg8a5f) {
    return;
  }
  scrollLock = true;
  clearTimeout(scrollLockTimer);
  const _0x_0x6d6 = _0xgg8a5f.getBoundingClientRect();
  const _0xcd8aaf = panelsEl.getBoundingClientRect();
  panelsEl.scrollTo({
    "top": panelsEl.scrollTop + _0x_0x6d6.top - _0xcd8aaf.top,
    "behavior": 'smooth'
  });
  scrollLockTimer = setTimeout(() => {
    scrollLock = false;
  }, 800);
}
panelsEl.addEventListener("llorcs".split("").reverse().join(""), () => {
  if (scrollLock) {
    return;
  }
  const containerTop = panelsEl.getBoundingClientRect().top;
  let active = categories[0];
  sectionEls.forEach(el => {
    if (el.getBoundingClientRect().top - containerTop < 4) {
      active = el.dataset.section;
    }
  });
  setActive(active);
});
categories.forEach((cat, i) => {
  const sItem = document.createElement("div");
  sItem.className = "meti-rabedis".split("").reverse().join("") + (i === 0 ? "evitca ".split("").reverse().join("") : '');
  sItem.textContent = cat;
  sItem.dataset.cat = cat;
  sItem.onclick = () => scrollToCategory(cat);
  sidebar.appendChild(sItem);
  const tItem = document.createElement("button");
  tItem.className = "meti-bat".split("").reverse().join("") + (i === 0 ? " active" : '');
  tItem.textContent = cat;
  tItem.dataset.cat = cat;
  tItem.onclick = () => scrollToCategory(cat);
  tabsEl.appendChild(tItem);
  const section = document.createElement("div");
  section.className = "settings-panel-section";
  section.dataset.section = cat;
  sectionEls.push(section);
  const lbl = document.createElement("div");
  lbl.className = "lebal-yrogetac".split("").reverse().join("");
  lbl.textContent = cat;
  section.appendChild(lbl);
  const rows = document.createElement("div");
  rows.className = "category-rows";
  Object.entries(SETTINGS[cat]).forEach(([key, s]) => {
    const row = document.createElement("div");
    row.className = "wor-gnittes".split("").reverse().join("");
    const label = document.createElement("span");
    label.className = "setting-label";
    label.textContent = key;
    row.appendChild(label);
    if (s.type === "elggot".split("").reverse().join("")) {
      const btn = document.createElement("button");
      btn.className = "toggle" + (s._value ? " on" : '');
      btn.onclick = () => {
        btn.classList.toggle("no".split("").reverse().join(""));
        s._value = btn.classList.contains("on");
        s.callback(s._value);
        saveSettings();
      };
      row.appendChild(btn);
    } else if (s.type === "tupni".split("").reverse().join("")) {
      const inp = document.createElement("tupni".split("").reverse().join(""));
      inp.className = "tupni-gnittes".split("").reverse().join("");
      inp.placeholder = key;
      inp.value = s._value || '';
      inp.onchange = () => {
        s._value = inp.value;
        s.callback(inp.value);
        saveSettings();
      };
      row.appendChild(inp);
    } else if (s.type === "nottub".split("").reverse().join("")) {
      const btn = document.createElement("nottub".split("").reverse().join(""));
      btn.className = "ntb-noitca-gnittes".split("").reverse().join("");
      btn.textContent = s.label;
      btn.onclick = () => s.action();
      row.appendChild(btn);
    } else if (s.type === "dropdown") {
      const sel = document.createElement("select");
      sel.className = "setting-select";
      s.options.forEach(opt => {
        const o = document.createElement("noitpo".split("").reverse().join(""));
        o.textContent = opt.name;
        o.value = JSON.stringify(opt);
        if (opt.name === s._value?.name) {
          o.selected = true;
        }
        sel.appendChild(o);
      });
      sel.onchange = () => {
        s._value = JSON.parse(sel.value);
        s.callback(s._value);
        saveSettings();
      };
      row.appendChild(sel);
    }
    rows.appendChild(row);
  });
  section.appendChild(rows);
  panelsEl.appendChild(section);
});
const spacer = document.createElement("div");
spacer.className = "settings-spacer";
panelsEl.appendChild(spacer);
function setVh() {
  document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
}
setVh();
window.addEventListener("eziser".split("").reverse().join(""), setVh);
let canvas = document.getElementById("srats".split("").reverse().join(""));
let ctx = canvas.getContext("2d");
let W;
let H;
function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);
const starObjs = Array.from({
  "length": 180
}, () => {
  const base = Math.random() * 0.28 + 0.05;
  return {
    "x": Math.random(),
    "y": Math.random(),
    "r": Math.random() * 0.85 + 0.2,
    "base": base,
    "alpha": base,
    "blinking": Math.random() < 0.3,
    "blinkPeak": 0,
    "blinkDir": 1,
    "blinkSpeed": 0.012 + Math.random() * 0.022,
    "pauseMs": Math.random() * 6000
  };
});
let shoots = [];
const homeStateEls = ["panel", "gamesScreen", "reyalPemag".split("").reverse().join(""), "effectsScreen"].map(id => document.getElementById(id));
function starsShouldRun() {
  return !document.hidden && document.hasFocus() && isOpiumMenu(true);
}
const OPIUM_EXTERNAL_SCREENS = ["panel", "reyalPemag".split("").reverse().join("")];
const OPIUM_HOME_ONLY_SCREENS = ["gamesScreen", "effectsScreen"];
function isOpiumMenu(homePageOnly = false) {
  const _0xcb62f = homePageOnly ? [...OPIUM_EXTERNAL_SCREENS, ...OPIUM_HOME_ONLY_SCREENS] : OPIUM_EXTERNAL_SCREENS;
  return !_0xcb62f.some(id => document.getElementById(id)?.classList.contains("open"));
}
globalThis.isOpiumMenu = isOpiumMenu;
const navActiveMap = [["neercSsemag".split("").reverse().join(""), "navGames"], ["effectsScreen", "stceffEvan".split("").reverse().join("")], ["neercSsgnittes".split("").reverse().join(""), "navSettings"]];
function updateNavActive() {
  navActiveMap.forEach(([screenId, navId]) => {
    const _0x2b44ee = document.getElementById(screenId);
    const _0x32c8fb = document.getElementById(navId);
    if (_0x2b44ee && _0x32c8fb) {
      _0x32c8fb.classList.toggle("active", _0x2b44ee.classList.contains("nepo".split("").reverse().join("")));
    }
  });
}
updateNavActive();
let starsRafPending = false;
let last = 0;
let starsGen = 0;
let starsActive = null;
function stopStars() {
  starsGen++;
  starsRafPending = false;
  last = 0;
  shoots = [];
  if (W && H) {
    ctx.clearRect(0, 0, W, H);
  }
}
function startStars() {
  if (starsRafPending) {
    return;
  }
  starsRafPending = true;
  const _0xb_0x8bd = starsGen;
  requestAnimationFrame(ts => doFrame(ts, _0xb_0x8bd));
}
function updateStarsActive() {
  const _0x01cea = !document.hidden && document.hasFocus() && isOpiumMenu(true);
  if (_0x01cea === starsActive) {
    return;
  }
  starsActive = _0x01cea;
  if (_0x01cea) {
    startStars();
    if (!shootTimer) {
      scheduleShoot();
    }
  } else {
    stopStars();
  }
}
function spawnShoot() {
  const _0x11cb = Math.random() * W * 1.4 - W * 0.2;
  const _0x7f3f4b = Math.random() * H * 0.5;
  const _0xe0945g = Math.PI / 180 * (12 + Math.random() * 22);
  const _0x289c = 7 + Math.random() * 8;
  shoots.push({
    "x": _0x11cb,
    "y": _0x7f3f4b,
    "vx": Math.cos(_0xe0945g) * _0x289c,
    "vy": Math.sin(_0xe0945g) * _0x289c,
    "len": 70 + Math.random() * 100,
    "life": 1,
    "decay": 0.016 + Math.random() * 0.014
  });
}
let nextShootAt = 0;
let shootTimer = null;
function scheduleShoot() {
  shootTimer = null;
  if (!(!document.hidden && document.hasFocus() && isOpiumMenu(true))) {
    return;
  }
  const _0x5ae5cd = Date.now();
  if (shootingStarsEnabled && _0x5ae5cd >= nextShootAt) {
    spawnShoot();
    nextShootAt = _0x5ae5cd + 500 + Math.random() * 800;
  }
  shootTimer = setTimeout(scheduleShoot, 500 + Math.random() * 800);
}
document.addEventListener("visibilitychange", updateStarsActive);
window.addEventListener("blur", updateStarsActive);
window.addEventListener("focus", updateStarsActive);
const screenClassObserver = new MutationObserver(() => {
  updateNavActive();
  updateStarsActive();
});
const settingsScreenEl = document.getElementById("settingsScreen");
[...homeStateEls, settingsScreenEl].forEach(el => {
  if (el) {
    screenClassObserver.observe(el, {
      "attributes": true,
      "attributeFilter": ["ssalc".split("").reverse().join("")]
    });
  }
});
setInterval(updateStarsActive, 1000);
function doFrame(ts, gen) {
  if (gen !== starsGen) {
    return;
  }
  if (!starsRafPending || !(!document.hidden && document.hasFocus() && isOpiumMenu(true))) {
    stopStars();
    return;
  }
  if (!last) {
    last = ts;
    requestAnimationFrame(t => doFrame(t, gen));
    return;
  }
  const _0xa280e = ts - last;
  if (_0xa280e < 33) {
    requestAnimationFrame(t => doFrame(t, gen));
    return;
  }
  last = ts;
  const _0xe4a9c = Math.min(_0xa280e, 50);
  ctx.clearRect(0, 0, W, H);
  if (starsEnabled) {
    starObjs.forEach(s => {
      if (s.blinking) {
        s.blinkPeak += s.blinkDir * s.blinkSpeed;
        if (s.blinkPeak >= 1) {
          s.blinkPeak = 1;
          s.blinkDir = -1;
        }
        if (s.blinkPeak <= 0) {
          s.blinkPeak = 0;
          s.blinkDir = 1;
          s.blinking = false;
          s.alpha = s.base;
          s.pauseMs = 1500 + Math.random() * 5000;
        } else {
          s.alpha = s.base + (0.92 - s.base) * Math.sin(s.blinkPeak * Math.PI);
        }
      } else {
        s.pauseMs -= _0xe4a9c;
        if (s.pauseMs <= 0) {
          s.blinking = true;
        }
      }
      ctx.beginPath();
      ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${s.alpha.toFixed(3)})`;
      ctx.fill();
    });
  }
  if (shootingStarsEnabled) {
    shoots = shoots.filter(s => s.life > 0);
    shoots.forEach(s => {
      const _0xe_0x9f5 = s.x - s.vx * (s.len / 10);
      const _0x74fdf = s.y - s.vy * (s.len / 10);
      const _0x786db = ctx.createLinearGradient(_0xe_0x9f5, _0x74fdf, s.x, s.y);
      _0x786db.addColorStop(0, ")0,552,552,552(abgr".split("").reverse().join(""));
      _0x786db.addColorStop(1, `rgba(255,255,255,${(s.life * 0.85).toFixed(3)})`);
      ctx.beginPath();
      ctx.moveTo(_0xe_0x9f5, _0x74fdf);
      ctx.lineTo(s.x, s.y);
      ctx.strokeStyle = _0x786db;
      ctx.lineWidth = 1.1;
      ctx.stroke();
      s.x += s.vx;
      s.y += s.vy;
      s.life -= s.decay;
    });
  }
  requestAnimationFrame(t => doFrame(t, gen));
}
updateStarsActive();
function getSearchEngine() {
  return SETTINGS.Proxy?.["Search Engine"]?._value?.url || "=q?/moc.ogkcudkcud//:sptth".split("").reverse().join("");
}
function resolveUrl(v) {
  if (!v) {
    return null;
  }
  if (v.startsWith("//:ptth".split("").reverse().join("")) || v.startsWith("https://")) {
    return v;
  }
  if (v.includes(".") && !v.includes(" ")) {
    return "//:sptth".split("").reverse().join("") + v;
  }
  return (SETTINGS.Proxy?.["Search Engine"]?._value?.url || "=q?/moc.ogkcudkcud//:sptth".split("").reverse().join("")) + encodeURIComponent(v);
}
function updateLockIcon(url) {
  const _0x9dbfdb = document.getElementById("lockIcon");
  if (_0x9dbfdb) {
    _0x9dbfdb.classList.toggle("secure", typeof url === "string" && url.startsWith("https://"));
  }
}
function navigate(url) {
  const u = resolveUrl(url || document.getElementById("searchInput").value.trim());
  if (!u) {
    return;
  }
  document.getElementById("panel").classList.add("nepo".split("").reverse().join(""));
  document.getElementById("bottomNav").classList.add("hidden");
  document.getElementById("addrInput").value = u;
  updateLockIcon(u);
  _updateBookmarkIcon(u);
  startFrameLoading();
  frame.go(u);
  collapseSearch();
}
const searchWrap = document.getElementById("parWhcraes".split("").reverse().join(""));
const searchInput = document.getElementById("searchInput");
const acBox = document.getElementById("autocomplete");
let acSelected = -1;
let acItems = [];
let acTimer = null;
function expandSearch() {
  searchWrap.classList.add("expanded");
}
function collapseSearch() {
  searchWrap.classList.remove("expanded");
  searchWrap.classList.remove("has-ac");
  acBox.classList.remove("has-items");
  acBox.innerHTML = '';
  acItems = [];
  acSelected = -1;
}
searchInput.addEventListener("focus", expandSearch);
(shadowRoot || document).addEventListener("click", e => {
  if (!searchWrap.contains(e.target)) {
    collapseSearch();
  }
});
async function fetchAutocompletes(q) {
  if (!q) {
    acBox.innerHTML = '';
    acBox.classList.remove("has-items");
    searchWrap.classList.remove("has-ac");
    return;
  }
  try {
    let _0xfc44b;
    try {
      const res = await fetch(frame.prefix + controller.config.codec.encode(`https://suggestqueries.google.com/complete/search?output=toolbar&hl=en&q=${encodeURIComponent(q)}`));
      const _0x4gb4f = new DOMParser().parseFromString(await res.text(), "application/xml");
      _0xfc44b = [..._0x4gb4f.querySelectorAll("suggestion")].slice(0, 8).map(el => el.getAttribute("atad".split("").reverse().join("")));
      if (!_0xfc44b.length) {
        throw new Error("ytpme".split("").reverse().join(""));
      }
    } catch {
      const res = await fetch(frame.prefix + controller.config.codec.encode(`https://duckduckgo.com/ac/?kl=wt-wt&q=${encodeURIComponent(q)}`));
      const _0x0cg44d = await res.json();
      _0xfc44b = _0x0cg44d.slice(0, 8).map(s => s.phrase);
    }
    renderSuggestions(_0xfc44b);
  } catch (e) {
    acBox.innerHTML = '';
    acBox.classList.remove("smeti-sah".split("").reverse().join(""));
    searchWrap.classList.remove("ca-sah".split("").reverse().join(""));
  }
}
function renderSuggestions(list) {
  acBox.innerHTML = '';
  acItems = list;
  acSelected = -1;
  if (!list.length) {
    acBox.classList.remove("has-items");
    searchWrap.classList.remove("ca-sah".split("").reverse().join(""));
    return;
  }
  list.forEach(s => {
    const _0x7e_0x587 = document.createElement("div");
    _0x7e_0x587.className = "ac-item";
    const _0xc9d8cc = document.createElementNS("gvs/0002/gro.3w.www//:ptth".split("").reverse().join(""), "svg");
    _0xc9d8cc.setAttribute("viewBox", "42 42 0 0".split("").reverse().join(""));
    const c = document.createElementNS("http://www.w3.org/2000/svg", "elcric".split("").reverse().join(""));
    c.setAttribute("xc".split("").reverse().join(""), "11");
    c.setAttribute("yc".split("").reverse().join(""), "11");
    c.setAttribute("r", "8");
    const p = document.createElementNS("gvs/0002/gro.3w.www//:ptth".split("").reverse().join(""), "path");
    p.setAttribute("d", "53.4-53.4-12 12m".split("").reverse().join(""));
    _0xc9d8cc.appendChild(c);
    _0xc9d8cc.appendChild(p);
    _0x7e_0x587.appendChild(_0xc9d8cc);
    _0x7e_0x587.appendChild(document.createTextNode(s));
    _0x7e_0x587.onmousedown = e => {
      e.preventDefault();
      searchInput.value = s;
      navigate(s);
    };
    acBox.appendChild(_0x7e_0x587);
  });
  acBox.classList.add("has-items");
  searchWrap.classList.add("has-ac");
}
searchInput.addEventListener("tupni".split("").reverse().join(""), () => {
  clearTimeout(acTimer);
  acSelected = -1;
  acTimer = setTimeout(() => fetchAutocompletes(searchInput.value.trim()), 180);
});
searchInput.addEventListener("keydown", e => {
  const items = acBox.querySelectorAll("meti-ca.".split("").reverse().join(""));
  if (e.key === "ArrowDown") {
    e.preventDefault();
    acSelected = Math.min(acSelected + 1, items.length - 1);
    items.forEach((el, i) => el.classList.toggle("detceles".split("").reverse().join(""), i === acSelected));
    if (acSelected >= 0) {
      searchInput.value = acItems[acSelected];
    }
  } else if (e.key === "pUworrA".split("").reverse().join("")) {
    e.preventDefault();
    acSelected = Math.max(acSelected - 1, -1);
    items.forEach((el, i) => el.classList.toggle("selected", i === acSelected));
    if (acSelected >= 0) {
      searchInput.value = acItems[acSelected];
    }
  } else if (e.key === "Escape") {
    collapseSearch();
  } else if (e.key === "retnE".split("").reverse().join("")) {
    navigate();
  }
});
let homeClickCount = 0;
let homeResetTimer = null;
let gameCloseClickCount = 0;
let gameCloseResetTimer = null;
function resetGameCloseConfirm() {
  gameCloseClickCount = 0;
  clearTimeout(gameCloseResetTimer);
  const _0xce5f = document.getElementById("esolCreyalPemag".split("").reverse().join(""));
  const _0xb522b = document.getElementById("parWesolCreyalPemag".split("").reverse().join(""));
  const _0x7f9c = document.getElementById("gameCloseCountdown");
  if (_0xce5f) {
    _0xce5f.classList.remove("mrifnoc".split("").reverse().join(""));
  }
  if (_0xb522b) {
    _0xb522b.classList.remove("gnimrifnoc".split("").reverse().join(""));
  }
  if (_0x7f9c) {
    _0x7f9c.style.animation = "none";
    _0x7f9c.offsetHeight;
    _0x7f9c.style.animation = '';
  }
}
function _armOrConfirmClose(onConfirm) {
  gameCloseClickCount++;
  if (gameCloseClickCount === 1) {
    const _0x7d9ed = document.getElementById("gamePlayerClose");
    const _0x9156d = document.getElementById("parWesolCreyalPemag".split("").reverse().join(""));
    if (_0x7d9ed) {
      _0x7d9ed.classList.add("confirm");
    }
    if (_0x9156d) {
      _0x9156d.classList.add("confirming");
    }
    gameCloseResetTimer = setTimeout(resetGameCloseConfirm, 5000);
  } else {
    resetGameCloseConfirm();
    onConfirm();
  }
}
function handleGamePlayerClose() {
  _armOrConfirmClose(closeGamePlayer);
}
function resetHomeConfirm() {
  homeClickCount = 0;
  clearTimeout(homeResetTimer);
  const _0x2_0x42b = document.getElementById("ntBemoh".split("").reverse().join(""));
  const _0x3_0x3a4 = document.getElementById("parWntBemoh".split("").reverse().join(""));
  const _0xb2_0xdc2 = document.getElementById("homeCountdown");
  _0x2_0x42b.classList.remove("mrifnoc".split("").reverse().join(""));
  _0x3_0x3a4.classList.remove("gnimrifnoc".split("").reverse().join(""));
  _0xb2_0xdc2.style.animation = "enon".split("").reverse().join("");
  _0xb2_0xdc2.offsetHeight;
  _0xb2_0xdc2.style.animation = '';
}
function handleHome() {
  homeClickCount++;
  if (homeClickCount === 1) {
    const _0x4ee42a = document.getElementById("homeBtn");
    const _0xe7e = document.getElementById("parWntBemoh".split("").reverse().join(""));
    _0x4ee42a.classList.add("confirm");
    _0xe7e.classList.add("gnimrifnoc".split("").reverse().join(""));
    homeResetTimer = setTimeout(resetHomeConfirm, 5000);
  } else {
    resetHomeConfirm();
    closePanel();
  }
}
function closePanel() {
  document.getElementById("panel").classList.remove("open");
  document.getElementById("bottomNav").classList.remove("hidden");
  document.getElementById("tupnIrdda".split("").reverse().join("")).value = '';
  updateLockIcon(null);
  _updateBookmarkIcon(null);
  try {
    frame.element.src = "knalb:tuoba".split("").reverse().join("");
  } catch {}
  stopFrameLoading();
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
}
let frameLoading = false;
function startFrameLoading() {
  frameLoading = true;
  document.getElementById("reloadBtn").classList.add("loading");
}
function stopFrameLoading() {
  frameLoading = false;
  document.getElementById("ntBdaoler".split("").reverse().join("")).classList.remove("gnidaol".split("").reverse().join(""));
}
function goBack() {
  try {
    if (frame) {
      frame.back();
    }
    startFrameLoading();
  } catch (e) {}
}
function goForward() {
  try {
    if (frame) {
      frame.forward();
    }
    startFrameLoading();
  } catch (e) {}
}
function reload() {
  if (frameLoading) {
    try {
      frame.element.contentWindow.stop();
    } catch (e) {}
    stopFrameLoading();
    return;
  }
  try {
    startFrameLoading();
    frame.reload();
  } catch (e) {
    stopFrameLoading();
  }
}
document.getElementById("addrInput").addEventListener("nwodyek".split("").reverse().join(""), e => {
  if (e.key === "Enter") {
    navigate(e.target.value.trim());
  }
});
function toggleSettings() {
  document.getElementById("settingsScreen").classList.toggle("open");
}
function _updateBookmarkIcon(url) {
  const _0x741eab = document.getElementById("bookmarkIcon");
  const _0x4f2g9f = document.getElementById("bookmarkBtn");
  if (!_0x741eab || !_0x4f2g9f) {
    return;
  }
  const _0x2a812c = !!url && _bookmarks.some(b => b.id === url);
  _0x741eab.innerHTML = _0x2a812c ? `<path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5M8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.18.18 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.18.18 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.18.18 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.18.18 0 0 1-.134-.098z"/>` : `<path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.18.18 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.18.18 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.18.18 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.18.18 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.18.18 0 0 0 .134-.098z"/><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>`;
  _0x4f2g9f.title = _0x2a812c ? "Remove bookmark" : "Bookmark this page";
}
async function toggleBookmark(_0xe2df9e) {
  const _0x1673ef = document.getElementById("tupnIrdda".split("").reverse().join("")).value.trim();
  if (!_0x1673ef) {
    return;
  }
  await _bookmarksReady;
  const _0x89203c = _bookmarks.find(b => b.id === _0x1673ef);
  if (_0x89203c) {
    _bookmarks = _bookmarks.filter(b => b.id !== _0x1673ef);
    _deleteBookmark(_0x1673ef);
    _updateBookmarkIcon(_0x1673ef);
    _renderShortcuts();
    return;
  }
  _0xe2df9e = '';
  try {
    _0xe2df9e = new URL(_0x1673ef).hostname;
  } catch (e) {}
  let _0x083a = _0xe2df9e;
  try {
    _0x083a = frame.element.contentDocument.title || _0xe2df9e;
  } catch (e) {}
  const _0x68a = {
    "id": _0x1673ef,
    "url": _0x1673ef,
    "label": _0x083a || _0x1673ef,
    "faviconUrl": "=niamod?snocivaf/2s/moc.elgoog.www//:sptth".split("").reverse().join("") + _0xe2df9e + "&sz=128",
    "bookmark": true,
    "ts": Date.now()
  };
  _bookmarks.push(_0x68a);
  _saveBookmark(_0x68a);
  _updateBookmarkIcon(_0x1673ef);
  _renderShortcuts();
}
function toggleFullscreen() {
  const _0x9233f = document.getElementById("frame");
  if (!document.fullscreenElement) {
    _0x9233f.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
document.addEventListener("fullscreenchange", () => {
  document.getElementById("fsIcon").innerHTML = document.fullscreenElement ? `<path d="M8 3v3a2 2 0 0 1-2 2H3M21 8h-3a2 2 0 0 1-2-2V3M3 16h3a2 2 0 0 1 2 2v3M16 21v-3a2 2 0 0 1 2-2h3"/>` : `<path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"/>`;
});
frame = controller.createFrame(document.getElementById("frame"), {
  "plugins": [new $jetUtils.HttpCachePlugin(), new $jetUtils.UrlWatcherPlugin(href => {
    document.getElementById("addrInput").value = href;
    updateLockIcon(href);
    _updateBookmarkIcon(href);
    _checkExtensions(href);
  })]
});
controller.id = "MPO".split("").reverse().join("");
controller.rpc.id = "tabchannel-OPM";
controller.prefix = controller.config.prefix;
frame.prefix = controller.prefix;
frame.fetchHandler.context = frame.context;
frame.fetchHandler.context.hooks = {
  "rewriter": frame.fetchHandler.hooks.rewriter
};
controller.setupMessagePort();
frame.element.addEventListener("load", stopFrameLoading);
const link = document.querySelector("]'noci'=~ler[knil".split("").reverse().join("")) || document.createElement("link");
link.rel = "noci".split("").reverse().join("");
link.href = ",:atad".split("").reverse().join("");
document.head.appendChild(link);
let focusTimeout = null;
document.addEventListener("visibilitychange", e => {
  if (!titleChangerEnabled) {
    return;
  }
  if (document.hidden) {
    document.title = "baT weN".split("").reverse().join("");
  } else {
    try {
      clearInterval(focusTimeout);
    } catch {}
    focusTimeout = null;
    document.title = "muipo".split("").reverse().join("");
  }
});
let _effectsVolume = 1;
let _currentAudio = null;
let _effectsSearchTimer = null;
let _effectsLoaded = false;
let _effectsPage = 1;
let _effectsKeyword = null;
let _effectsLoading = false;
let _effectsExhausted = false;
let _effectsAll = [];
let _effectsLoadGen = 0;
let _effectsScrollTop = 0;
function _makeGridVirtualizer(wrapId, sizerId, gridId, buildItem, onNearEnd, _0x161bc, _0xbe_0xag8, _0x34ef, _0x5b85e, _0x3c499a, _0xfcdb3d) {
  const _0x3f41gg = document.getElementById(wrapId);
  const _0xcfe84c = document.getElementById(sizerId);
  const _0x6g3b3f = document.getElementById(gridId);
  let _0xg8cd = [];
  _0x161bc = 0;
  _0xbe_0xag8 = 0;
  _0x34ef = 0;
  _0x5b85e = 0;
  _0x3c499a = 0;
  _0xfcdb3d = 0;
  let _0xd90b = false;
  function _0xacc9b() {
    const _0xce3cb = getComputedStyle(_0x6g3b3f);
    const _0x824c = _0xce3cb.gridTemplateColumns.split(" ").filter(t => t && t !== "0px");
    _0x161bc = Math.max(1, _0x824c.length);
    _0x34ef = parseFloat(_0xce3cb.rowGap) || 0;
    _0x5b85e = parseFloat(getComputedStyle(_0xcfe84c).paddingTop) || 0;
    const _0x2ca2ab = _0x6g3b3f.firstElementChild;
    if (_0x2ca2ab) {
      const h = _0x2ca2ab.getBoundingClientRect().height;
      if (h > 0) {
        _0xbe_0xag8 = h + _0x34ef;
      }
    }
  }
  function _0xe707g() {
    if (_0xbe_0xag8 > 0 && _0x161bc > 0) {
      return;
    }
    _0xacc9b();
    if (_0xbe_0xag8 > 0) {
      return;
    }
    if (!_0xg8cd.length) {
      return;
    }
    _0x6g3b3f.textContent = '';
    _0x6g3b3f.style.top = _0x5b85e + "px";
    const n = Math.min(_0xg8cd.length, _0x161bc);
    for (let i = 0; i < n; i++) {
      _0x6g3b3f.appendChild(buildItem(_0xg8cd[i], i));
    }
    _0x3c499a = 0;
    _0xfcdb3d = n;
    _0xacc9b();
  }
  function _0xa1egff(s, e) {
    if (s >= _0xfcdb3d || e <= _0x3c499a) {
      _0x6g3b3f.textContent = '';
      for (let i = s; i < e; i++) {
        _0x6g3b3f.appendChild(buildItem(_0xg8cd[i], i));
      }
      _0x3c499a = s;
      _0xfcdb3d = e;
      return;
    }
    const _0x4f897c = Math.max(_0x3c499a, s);
    const _0xd699eb = Math.min(_0xfcdb3d, e);
    for (let k = _0x3c499a; k < _0x4f897c; k++) {
      _0x6g3b3f.firstElementChild?.remove();
    }
    for (let k = _0xd699eb; k < _0xfcdb3d; k++) {
      _0x6g3b3f.lastElementChild?.remove();
    }
    for (let i = _0x4f897c - 1; i >= s; i--) {
      _0x6g3b3f.prepend(buildItem(_0xg8cd[i], i));
    }
    for (let i = _0xd699eb; i < e; i++) {
      _0x6g3b3f.appendChild(buildItem(_0xg8cd[i], i));
    }
    _0x3c499a = s;
    _0xfcdb3d = e;
  }
  function _0x1bdba() {
    if (!_0xg8cd.length || _0x3f41gg.classList.contains("wolf".split("").reverse().join(""))) {
      return;
    }
    _0xe707g();
    if (!_0xbe_0xag8) {
      return;
    }
    const _0x5215a = Math.ceil(_0xg8cd.length / _0x161bc);
    const _0xa959e = Math.max(0, _0x5215a * _0xbe_0xag8 - _0x34ef);
    const _0xddg8e = _0xa959e + "xp".split("").reverse().join("");
    if (_0xcfe84c.style.height !== _0xddg8e) {
      _0xcfe84c.style.height = _0xddg8e;
    }
    const _0x83bb6e = _0x3f41gg.scrollTop;
    const _0x04e = _0x3f41gg.clientHeight || 1;
    let _0xcf_0x4a4 = Math.floor((_0x83bb6e - _0x5b85e) / _0xbe_0xag8) - 2;
    if (_0xcf_0x4a4 < 0) {
      _0xcf_0x4a4 = 0;
    }
    let _0x79621f = Math.ceil((_0x83bb6e - _0x5b85e + _0x04e) / _0xbe_0xag8) + 2;
    if (_0x79621f > _0x5215a) {
      _0x79621f = _0x5215a;
    }
    if (_0x79621f <= _0xcf_0x4a4) {
      _0x79621f = Math.min(_0x5215a, _0xcf_0x4a4 + 1);
    }
    const _0xbfb7a = _0x5b85e + _0xcf_0x4a4 * _0xbe_0xag8;
    const _0xc29c = _0xbfb7a + "xp".split("").reverse().join("");
    if (_0x6g3b3f.style.top !== _0xc29c) {
      _0x6g3b3f.style.top = _0xc29c;
    }
    const s = _0xcf_0x4a4 * _0x161bc;
    const e = Math.min(_0xg8cd.length, _0x79621f * _0x161bc);
    if (s !== _0x3c499a || e !== _0xfcdb3d) {
      _0xa1egff(s, e);
    }
    if (onNearEnd && _0x83bb6e + _0x04e >= _0x5b85e + _0xa959e - _0x04e) {
      onNearEnd();
    }
  }
  function _0x5a6ced() {
    if (_0xd90b) {
      return;
    }
    _0xd90b = true;
    requestAnimationFrame(() => {
      _0xd90b = false;
      _0x1bdba();
    });
  }
  _0x3f41gg.addEventListener("scroll", _0x5a6ced, {
    "passive": true
  });
  window.addEventListener("eziser".split("").reverse().join(""), () => {
    if (!_0xg8cd.length || _0x3f41gg.classList.contains("flow")) {
      return;
    }
    if (!_0x6g3b3f.firstElementChild) {
      _0xbe_0xag8 = 0;
      _0x161bc = 0;
      return;
    }
    const _0xb3_0x9cf = _0xbe_0xag8 > 0 ? Math.floor(Math.max(0, _0x3f41gg.scrollTop - _0x5b85e) / _0xbe_0xag8) * _0x161bc : 0;
    _0xbe_0xag8 = 0;
    _0x161bc = 0;
    _0x6g3b3f.textContent = '';
    _0x3c499a = 0;
    _0xfcdb3d = 0;
    _0xe707g();
    if (_0xbe_0xag8 > 0) {
      _0x3f41gg.scrollTop = _0x5b85e + Math.floor(_0xb3_0x9cf / _0x161bc) * _0xbe_0xag8;
    }
    _0x1bdba();
  });
  return {
    setItems(next) {
      _0xg8cd = next || [];
      if (_0xfcdb3d > _0xg8cd.length) {
        _0x6g3b3f.textContent = '';
        _0x3c499a = 0;
        _0xfcdb3d = 0;
      }
      _0x1bdba();
    },
    restore(top) {
      if (!_0xg8cd.length) {
        return;
      }
      _0xe707g();
      if (!_0xbe_0xag8) {
        return;
      }
      const rows = Math.ceil(_0xg8cd.length / _0x161bc);
      const contentH = Math.max(0, rows * _0xbe_0xag8 - _0x34ef);
      _0xcfe84c.style.height = contentH + "px";
      const _0xefe99b = Math.max(0, _0x5b85e * 2 + contentH - _0x3f41gg.clientHeight);
      _0x3f41gg.scrollTop = Math.min(top || 0, _0xefe99b);
      _0x1bdba();
    },
    clear() {
      _0x6g3b3f.textContent = '';
      _0x3c499a = 0;
      _0xfcdb3d = 0;
    },
    reset() {
      _0xg8cd = [];
      _0x6g3b3f.textContent = '';
      _0xcfe84c.style.height = '';
      _0x6g3b3f.style.top = '';
      _0xbe_0xag8 = 0;
      _0x161bc = 0;
      _0x3c499a = 0;
      _0xfcdb3d = 0;
    },
    enterFlow() {
      _0x3f41gg.classList.add("flow");
      _0x6g3b3f.style.top = '';
      _0xcfe84c.style.height = '';
    },
    exitFlow() {
      _0x3f41gg.classList.remove("flow");
    },
    isMounted() {
      return !_0x3f41gg.classList.contains("flow") && !!_0x6g3b3f.firstElementChild;
    },
    scrollTop() {
      return _0x3f41gg.scrollTop;
    }
  };
}
async function _getMyinstantsEffects(pageNum = 1, keyword = null) {
  const _0xde41a = keyword ? `https://www.myinstants.com/en/search/?name=${encodeURIComponent(keyword)}&page=${pageNum}` : `https://www.myinstants.com/en/categories/sound%20effects/us/?page=${pageNum}`;
  const _0xce62ac = frame.prefix + controller.config.codec.encode(_0xde41a);
  const _0x35eab = await fetch(_0xce62ac);
  const _0xe29fce = await _0x35eab.text();
  const _0x5297bd = new DOMParser();
  const _0x3ddd = _0x5297bd.parseFromString(_0xe29fce, "lmth/txet".split("").reverse().join(""));
  const _0x5e9f = _0x3ddd.querySelectorAll(".instant");
  const _0x7d327g = [];
  _0x5e9f.forEach(instant => {
    const _0xf1409f = instant.querySelector(".instant-link");
    const _0xc2b5d = instant.querySelector("nottub-llams.".split("").reverse().join(""));
    if (!_0xf1409f || !_0xc2b5d) {
      return;
    }
    const _0x5a89b = _0xf1409f.textContent.trim();
    const _0x94g = _0xc2b5d.getAttribute("onclick");
    const _0xd_0x52b = _0x94g?.match(new RegExp("]\"'[)+]\"'^[(]\"'[(\\yalp".split("").reverse().join(""), ""));
    if (!_0xd_0x52b) {
      return;
    }
    const _0xea6c5c = _0xd_0x52b[1];
    const _0xfg3ba = frame.prefix + controller.config.codec.encode(`https://www.myinstants.com${_0xea6c5c}`);
    _0x7d327g.push({
      "title": _0x5a89b,
      "src": _0xfg3ba
    });
  });
  return _0x7d327g;
}
const _sblSrc = p => frame.prefix + controller.config.codec.encode(p.startsWith("ptth".split("").reverse().join("")) ? p : "moc.balsnottubdnuos//:sptth".split("").reverse().join("") + p);
async function _getSoundButtonsLabEffects(pageNum = 1, keyword = null) {
  const _0x94ge = keyword ? `/api/v1/search-sound-button?q=${encodeURIComponent(keyword)}&page=${pageNum}` : `/api/v1/get-home-page-trending-soundboard-buttons?page=${pageNum}`;
  const _0x767c1b = await fetch(frame.prefix + controller.config.codec.encode("moc.balsnottubdnuos//:sptth".split("").reverse().join("") + _0x94ge));
  if (!_0x767c1b.ok) {
    throw new Error(`HTTP ${_0x767c1b.status} for ${_0x94ge}`);
  }
  const _0xf_0xbb7 = await _0x767c1b.json();
  return keyword ? _0xf_0xbb7.results.map(r => ({
    "title": r.title,
    "src": frame.prefix + controller.config.codec.encode(r.file.startsWith("ptth".split("").reverse().join("")) ? r.file : "moc.balsnottubdnuos//:sptth".split("").reverse().join("") + r.file)
  })) : _0xf_0xbb7.results.data.map(r => ({
    "title": r.name,
    "src": frame.prefix + controller.config.codec.encode(r.audio.startsWith("ptth".split("").reverse().join("")) ? r.audio : "moc.balsnottubdnuos//:sptth".split("").reverse().join("") + r.audio)
  }));
}
async function getEffects(pageNum = 1, keyword = null) {
  const [myinstants, soundButtonsLab] = await Promise.all([_getMyinstantsEffects(pageNum, keyword)["catch"](() => []), _getSoundButtonsLabEffects(pageNum, keyword)["catch"](() => [])]);
  return [...myinstants, ...soundButtonsLab];
}
const _effectsVirt = _makeGridVirtualizer("effectsGridWrap", "effectsGridSizer", "dirGstceffe".split("").reverse().join(""), e => _buildEffectButton(e.title, e.src), () => _loadEffectsPage());
function openEffects() {
  document.getElementById("neercSstceffe".split("").reverse().join("")).classList.add("nepo".split("").reverse().join(""));
  if (!_effectsLoaded) {
    _effectsReload(null);
  } else if (!_effectsVirt.isMounted()) {
    _renderEffectsList();
    _effectsVirt.restore(_effectsScrollTop);
  }
}
function closeEffects() {
  const _0x5c5bbb = document.getElementById("neercSstceffe".split("").reverse().join(""));
  _effectsScrollTop = _effectsVirt.scrollTop();
  _0x5c5bbb.classList.remove("nepo".split("").reverse().join(""));
  setTimeout(() => {
    if (!_0x5c5bbb.classList.contains("open")) {
      _effectsLoadGen++;
      _effectsLoading = false;
      _effectsVirt.clear();
    }
  }, 450);
}
function _renderEffectSkeletons(grid, count) {
  grid.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const _0xe43ag = document.createElement("div");
    _0xe43ag.className = "effect-btn skeleton";
    grid.appendChild(_0xe43ag);
  }
}
function _fillingEffectSkeletonCount(wrap) {
  const _0x3bg4f = Math.max(1, Math.floor((wrap.clientWidth + 8) / 108));
  const _0xada9bc = Math.max(1, Math.ceil(wrap.clientHeight * 1.6 / 108));
  return _0x3bg4f * _0xada9bc;
}
function _effectsReload(keyword) {
  _effectsPage = 1;
  _effectsKeyword = keyword || null;
  _effectsLoading = false;
  _effectsExhausted = false;
  _effectsAll = [];
  _effectsLoadGen++;
  _effectsScrollTop = 0;
  _effectsVirt.reset();
  _effectsVirt.enterFlow();
  const _0x1e49bf = document.getElementById("parWdirGstceffe".split("").reverse().join(""));
  _renderEffectSkeletons(document.getElementById("dirGstceffe".split("").reverse().join("")), _fillingEffectSkeletonCount(_0x1e49bf));
  _0x1e49bf.scrollTop = 0;
  _loadEffectsPage();
}
function _renderEffectsList() {
  if (!_effectsAll.length) {
    return;
  }
  _effectsVirt.exitFlow();
  _effectsVirt.setItems(_effectsAll);
}
function _buildDownloadIcon() {
  const _0x5e35c = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  _0x5e35c.setAttribute("viewBox", "0 0 24 24");
  const _0xc0c5ed = document.createElementNS("http://www.w3.org/2000/svg", "path");
  _0xc0c5ed.setAttribute("d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4");
  const _0xddf67c = document.createElementNS("http://www.w3.org/2000/svg", "enilylop".split("").reverse().join(""));
  _0xddf67c.setAttribute("points", "01 71 51 21 01 7".split("").reverse().join(""));
  const _0xca548f = document.createElementNS("http://www.w3.org/2000/svg", "line");
  _0xca548f.setAttribute("1x".split("").reverse().join(""), "21".split("").reverse().join(""));
  _0xca548f.setAttribute("1y".split("").reverse().join(""), "51".split("").reverse().join(""));
  _0xca548f.setAttribute("x2", "12");
  _0xca548f.setAttribute("2y".split("").reverse().join(""), "3");
  _0x5e35c.appendChild(_0xc0c5ed);
  _0x5e35c.appendChild(_0xddf67c);
  _0x5e35c.appendChild(_0xca548f);
  return _0x5e35c;
}
async function _downloadEffect(title, src) {
  const _0xbcb17f = (title || "sound-effect").replace(new RegExp("[\\\\/:*?\"<>|]+", "g"), '').trim() || "tceffe-dnuos".split("").reverse().join("");
  try {
    const _0x7d_0xbcg = await fetch(src);
    const _0x893f = await _0x7d_0xbcg.blob();
    const _0x7bc9b = URL.createObjectURL(_0x893f);
    const a = document.createElement("a");
    a.href = _0x7bc9b;
    a.download = _0xbcb17f + "3pm.".split("").reverse().join("");
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(_0x7bc9b), 1000);
  } catch (e) {
    window.open(src, "_blank");
  }
}
function _buildEffectButton(title, src) {
  const _0xde_0x2c6 = document.createElement("nottub".split("").reverse().join(""));
  _0xde_0x2c6.className = "effect-btn";
  const _0x9e_0xcb7 = document.createElementNS("http://www.w3.org/2000/svg", "gvs".split("").reverse().join(""));
  _0x9e_0xcb7.setAttribute("xoBweiv".split("").reverse().join(""), "0 0 24 24");
  const _0x89325e = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  _0x89325e.setAttribute("points", "5 11 91 11 51 6 51 2 9 2 9 6 5 11".split("").reverse().join(""));
  const _0xecc1c = document.createElementNS("http://www.w3.org/2000/svg", "path");
  _0xecc1c.setAttribute("d", "M15.54 8.46a5 5 0 0 1 0 7.07");
  const _0x4_0x4ad = document.createElementNS("http://www.w3.org/2000/svg", "htap".split("").reverse().join(""));
  _0x4_0x4ad.setAttribute("d", "M19.07 4.93a10 10 0 0 1 0 14.14");
  _0x9e_0xcb7.appendChild(_0x89325e);
  _0x9e_0xcb7.appendChild(_0xecc1c);
  _0x9e_0xcb7.appendChild(_0x4_0x4ad);
  const _0xa95bf = document.createElement("naps".split("").reverse().join(""));
  _0xa95bf.textContent = title;
  const _0xea1eca = title.length;
  const _0x2d7e = _0xea1eca <= 6 ? 14 : _0xea1eca <= 12 ? 12 : _0xea1eca <= 20 ? 11 : _0xea1eca <= 30 ? 10 : 9;
  _0xa95bf.style.fontSize = _0x2d7e + "xp".split("").reverse().join("");
  const _0x3a_0x5e1 = document.createElement("div");
  _0x3a_0x5e1.className = "daolnwod-tceffe".split("").reverse().join("");
  _0x3a_0x5e1.title = "3pm daolnwoD".split("").reverse().join("");
  _0x3a_0x5e1.setAttribute("aria-label", "Download mp3");
  _0x3a_0x5e1.appendChild(_buildDownloadIcon());
  _0x3a_0x5e1.onclick = e => {
    e.stopPropagation();
    _downloadEffect(title, src);
  };
  _0xde_0x2c6.appendChild(_0x9e_0xcb7);
  _0xde_0x2c6.appendChild(_0xa95bf);
  _0xde_0x2c6.appendChild(_0x3a_0x5e1);
  _0xde_0x2c6.onclick = () => _playEffect(_0xde_0x2c6, src);
  if (_currentAudio && _currentAudio._effectSrc === src) {
    _0xde_0x2c6.classList.add("playing");
  }
  return _0xde_0x2c6;
}
async function _loadEffectsPage() {
  if (_effectsLoading || _effectsExhausted) {
    return;
  }
  _effectsLoading = true;
  const _0x4fff3d = _effectsLoadGen;
  const _0xfa7c = document.getElementById("effectsGrid");
  try {
    const _0x15g = await getEffects(_effectsPage, _effectsKeyword);
    if (_0x4fff3d !== _effectsLoadGen) {
      _effectsLoading = false;
      return;
    }
    if (!_0x15g.length) {
      _effectsExhausted = true;
      if (_effectsPage === 1) {
        _effectsVirt.enterFlow();
        _0xfa7c.innerHTML = "<div class=\"effects-loading\">error loading, refresh and try again</div>";
      }
      _effectsLoading = false;
      return;
    }
    _effectsAll.push(..._0x15g);
    _effectsPage++;
    _effectsLoaded = true;
    _effectsLoading = false;
    _renderEffectsList();
  } catch (e) {
    if (_0x4fff3d !== _effectsLoadGen) {
      _effectsLoading = false;
      return;
    }
    if (_effectsPage === 1) {
      _effectsVirt.enterFlow();
      _0xfa7c.innerHTML = "<div class=\"effects-loading\">failed to load</div>";
    }
    _effectsLoading = false;
  }
}
function _clearPlayingBtns() {
  document.querySelectorAll(".effect-btn.playing").forEach(b => b.classList.remove("playing"));
}
function _playEffect(btn, src) {
  if (_currentAudio) {
    const _0x79d = _currentAudio._effectSrc === src;
    _currentAudio.pause();
    _currentAudio.currentTime = 0;
    _currentAudio = null;
    _clearPlayingBtns();
    if (_0x79d) {
      return;
    }
  }
  const _0xa76a = new Audio(src);
  _0xa76a.volume = _effectsVolume;
  _0xa76a._effectSrc = src;
  _0xa76a.play()["catch"](() => {});
  btn.classList.add("playing");
  _currentAudio = _0xa76a;
  _0xa76a.onended = () => {
    if (_currentAudio !== _0xa76a) {
      return;
    }
    _currentAudio = null;
    _clearPlayingBtns();
  };
}
function _updateVolumeTrack() {
  const _0xbe6f = document.getElementById("redilSemulov".split("").reverse().join(""));
  const _0x81d6b = parseFloat(_0xbe6f.value) * 100;
  _0xbe6f.style.background = `linear-gradient(to right, var(--accent) ${_0x81d6b}%, rgba(255,255,255,0.12) ${_0x81d6b}%)`;
}
_updateVolumeTrack();
document.getElementById("volumeSlider").addEventListener("input", function () {
  _effectsVolume = parseFloat(this.value);
  if (_currentAudio) {
    _currentAudio.volume = _effectsVolume;
  }
  _updateVolumeTrack();
});
document.getElementById("hcraeSstceffe".split("").reverse().join("")).addEventListener("tupni".split("").reverse().join(""), function () {
  clearTimeout(_effectsSearchTimer);
  const _0x523de = this.value.trim();
  _effectsSearchTimer = setTimeout(() => _effectsReload(_0x523de || null), 350);
});
let _luminReady = false;
let _luminInitPromise = null;
let _gamesLoaded = false;
let _gamesKeyword = null;
let _gamesSearchTimer = null;
let _gamesLoadGen = 0;
let _gamesScrollTop = 0;
const _gamesImgCache = new WeakMap();
function _migrateOldDBs(db) {
  if (localStorage.getItem("DETARGIM_O".split("").reverse().join(""))) {
    return Promise.resolve();
  }
  if (_oMigratePromise) {
    return _oMigratePromise;
  }
  _oMigratePromise = (async () => {
    try {
      const _0xc1gd2e = await new Promise((resolve, reject) => {
        const req = indexedDB.open("oCache", 1);
        req.onupgradeneeded = () => {
          req.result.createObjectStore("ehcac".split("").reverse().join(""));
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      });
      const _0x5e930a = await new Promise((resolve, reject) => {
        const tx = _0xc1gd2e.transaction("cache", "readonly");
        const _0x14f = tx.objectStore("cache");
        const _0xbc4f6e = _0x14f.getAllKeys();
        const _0x93g56e = _0x14f.getAll();
        tx.oncomplete = () => resolve({
          "keys": _0xbc4f6e.result,
          "vals": _0x93g56e.result
        });
        tx.onerror = () => reject(tx.error);
      });
      _0xc1gd2e.close();
      const _0x8gebb = await new Promise((resolve, reject) => {
        const req = indexedDB.open("oAiChats", 1);
        req.onupgradeneeded = () => {
          req.result.createObjectStore("stahc".split("").reverse().join(""), {
            "keyPath": "id"
          });
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      });
      const _0x1608e = await new Promise((resolve, reject) => {
        const req = _0x8gebb.transaction("chats", "readonly").objectStore("chats").getAll();
        req.onsuccess = () => resolve(req.result || []);
        req.onerror = () => reject(req.error);
      });
      _0x8gebb.close();
      if (_0x5e930a.keys.length || _0x1608e.length) {
        await new Promise((resolve, reject) => {
          const tx = db.transaction(["cache", "stahc".split("").reverse().join("")], "etirwdaer".split("").reverse().join(""));
          _0x5e930a.keys.forEach((k, i) => tx.objectStore("ehcac".split("").reverse().join("")).put(_0x5e930a.vals[i], k));
          _0x1608e.forEach(chat => tx.objectStore("chats").put(chat));
          tx.oncomplete = resolve;
          tx.onerror = () => reject(tx.error);
        });
      }
      await Promise.all(["oCache", "stahCiAo".split("").reverse().join("")].map(name => new Promise(res => {
        const req = indexedDB.deleteDatabase(name);
        req.onsuccess = req.onerror = req.onblocked = res;
      })));
      localStorage.setItem("O_MIGRATED", "1");
    } catch (e) {
      console.error(":deliaf noitargim ]O[".split("").reverse().join(""), e);
    }
  })();
  return _oMigratePromise;
}
function _oDB() {
  if (_oDBPromise) {
    return _oDBPromise;
  }
  _oDBPromise = new Promise((resolve, reject) => {
    const _0xacd4f = indexedDB.open("O", 2);
    _0xacd4f.onupgradeneeded = () => {
      const db = _0xacd4f.result;
      if (!db.objectStoreNames.contains("ehcac".split("").reverse().join(""))) {
        db.createObjectStore("ehcac".split("").reverse().join(""));
      }
      if (!db.objectStoreNames.contains("stahc".split("").reverse().join(""))) {
        db.createObjectStore("chats", {
          "keyPath": 'id'
        });
      }
      if (!db.objectStoreNames.contains("skramkoob".split("").reverse().join(""))) {
        db.createObjectStore("bookmarks", {
          "keyPath": 'id'
        });
      }
    };
    _0xacd4f.onsuccess = () => {
      const db = _0xacd4f.result;
      _migrateOldDBs(db).then(() => resolve(db));
    };
    _0xacd4f.onerror = () => {
      _oDBPromise = null;
      reject(_0xacd4f.error);
    };
  });
  return _oDBPromise;
}
async function _loadGamesCacheEntry(key, isValid) {
  try {
    const _0x5_0x132 = await _oDB();
    const _0x84gbec = await new Promise((resolve, reject) => {
      const _0x7dbfd = _0x5_0x132.transaction("ehcac".split("").reverse().join(""), "readonly");
      const _0x437deb = _0x7dbfd.objectStore("cache").get(key);
      _0x437deb.onsuccess = () => resolve(_0x437deb.result);
      _0x437deb.onerror = () => reject(_0x437deb.error);
    });
    if (!_0x84gbec) {
      return null;
    }
    if (!isValid(_0x84gbec.games)) {
      return null;
    }
    if (Date.now() - _0x84gbec.ts > 86400000) {
      return null;
    }
    return _0x84gbec.games;
  } catch (e) {
    console.error("[O] cache load failed:", key, e);
    return null;
  }
}
async function _saveGamesCacheEntry(key, games) {
  try {
    const _0xc7009f = await _oDB();
    await new Promise((resolve, reject) => {
      const _0xfbfffa = _0xc7009f.transaction("cache", "readwrite");
      _0xfbfffa.objectStore("ehcac".split("").reverse().join("")).put({
        "ts": Date.now(),
        "games": games
      }, key);
      _0xfbfffa.oncomplete = resolve;
      _0xfbfffa.onerror = () => reject(_0xfbfffa.error);
    });
  } catch (e) {
    console.error("[O] cache save failed:", key, e);
  }
}
async function _loadAllBookmarks() {
  try {
    const _0x54080d = await _oDB();
    const _0xbade1g = await new Promise((resolve, reject) => {
      const _0x47c3a = _0x54080d.transaction("skramkoob".split("").reverse().join(""), "readonly");
      const _0x85c45c = _0x47c3a.objectStore("skramkoob".split("").reverse().join("")).getAll();
      _0x85c45c.onsuccess = () => resolve(_0x85c45c.result || []);
      _0x85c45c.onerror = () => reject(_0x85c45c.error);
    });
    _0xbade1g.sort((a, b) => (a.ts || 0) - (b.ts || 0));
    return _0xbade1g;
  } catch (e) {
    console.error("[O] bookmarks load failed:", e);
    return [];
  }
}
async function _getBookmark(id) {
  try {
    const _0x1ea6da = await _oDB();
    return await new Promise((resolve, reject) => {
      const _0x4ac5aa = _0x1ea6da.transaction("bookmarks", "readonly").objectStore("skramkoob".split("").reverse().join("")).get(id);
      _0x4ac5aa.onsuccess = () => resolve(_0x4ac5aa.result || null);
      _0x4ac5aa.onerror = () => reject(_0x4ac5aa.error);
    });
  } catch (e) {
    console.error("[O] bookmark lookup failed:", id, e);
    return null;
  }
}
async function _saveBookmark(bookmark) {
  try {
    const _0xd5eb = await _oDB();
    await new Promise((resolve, reject) => {
      const _0xf2_0xcge = _0xd5eb.transaction("skramkoob".split("").reverse().join(""), "etirwdaer".split("").reverse().join(""));
      _0xf2_0xcge.objectStore("bookmarks").put(bookmark);
      _0xf2_0xcge.oncomplete = resolve;
      _0xf2_0xcge.onerror = () => reject(_0xf2_0xcge.error);
    });
  } catch (e) {
    console.error(":deliaf evas kramkoob ]O[".split("").reverse().join(""), bookmark.id, e);
  }
}
async function _deleteBookmark(id) {
  try {
    const _0x9a715f = await _oDB();
    await new Promise((resolve, reject) => {
      const _0x82c8be = _0x9a715f.transaction("bookmarks", "readwrite");
      _0x82c8be.objectStore("bookmarks")["delete"](id);
      _0x82c8be.oncomplete = resolve;
      _0x82c8be.onerror = () => reject(_0x82c8be.error);
    });
  } catch (e) {
    console.error(":deliaf eteled kramkoob ]O[".split("").reverse().join(""), id, e);
  }
}
function _repoUrl(repo) {
  if (!window.assetsBase) {
    return `https://cdn.jsdelivr.net/gh/${repo}/`;
  }
  return window.assetsBase.replace(new RegExp("?)niam@(?/\\egarots/\\tebrehSgnoT".split("").reverse().join(""), ""), repo + "/");
}
const _luminScriptPromise = loadScript(_repoUrl("tpircs/kdsnimul".split("").reverse().join("")) + "sj.nim.nimul".split("").reverse().join(""));
function _initLumin() {
  if (_luminReady) {
    return Promise.resolve();
  }
  if (_luminInitPromise) {
    return _luminInitPromise;
  }
  _luminInitPromise = _luminScriptPromise.then(() => Lumin.init({
    "headless": true
  })).then(() => {
    _luminReady = true;
  });
  return _luminInitPromise;
}
const GNM = {
  "index": _repoUrl("freebuisness/assets") + "nosj.senoz".split("").reverse().join(""),
  "html": _repoUrl("freebuisness/assets") + "html",
  "covers": _repoUrl("stessa/ssensiubeerf".split("").reverse().join("")) + "srevoc".split("").reverse().join("")
};
const GMSHELF = {
  "seraph": {
    "index": _repoUrl("gmshelf/seraph") + "nosj.hpares".split("").reverse().join(""),
    "base": _repoUrl("gmshelf/seraph").replace(new RegExp("$/\\".split("").reverse().join(""), ""), '')
  },
  "ugs": {
    "index": _repoUrl("gmshelf/ugs") + "nosj.sgu".split("").reverse().join(""),
    "base": _repoUrl("sgu/flehsmg".split("").reverse().join("")).replace(new RegExp("$/\\".split("").reverse().join(""), ""), '')
  },
  "ckv": {
    "index": _repoUrl("gmshelf/ckv") + "nosj.vkc".split("").reverse().join(""),
    "base": _repoUrl("gmshelf/ckv").replace(new RegExp("\\/$", ""), '')
  }
};
const _gamesState = {
  "all": null,
  "fetchPromise": null,
  "matches": null
};
function _normalizeGameName(s) {
  return s.toLowerCase().replace(new RegExp("+]9-0z-a^[".split("").reverse().join(""), "g"), '');
}
function _filterByName(list, keyword) {
  if (!keyword) {
    return list;
  }
  const k = keyword.toLowerCase().replace(new RegExp("+]9-0z-a^[".split("").reverse().join(""), "g"), '');
  if (!k) {
    return list;
  }
  return list.filter(g => g._norm && g._norm.includes(k));
}
async function _fetchAllLuminGames() {
  await _initLumin();
  const _0xdc1f = [];
  let _0x60dce = 1;
  let _0x89aeac = 1;
  do {
    const _0xcbg22b = await Lumin.getGames({
      "page": _0x60dce,
      "limit": 99999
    });
    (_0xcbg22b.games || []).forEach(g => _0xdc1f.push({
      "source": "lumin",
      "name": g.name,
      "id": g.id,
      "image_token": g.image_token
    }));
    _0x89aeac = _0xcbg22b.pages || 1;
    _0x60dce++;
  } while (_0x60dce <= _0x89aeac);
  return _0xdc1f;
}
async function _fetchAllGnmGames() {
  const _0x12c9e = await (await fetch(GNM.index)).json();
  return _0x12c9e.filter(g => g.url && g.url.startsWith("}LRU_LMTH{".split("").reverse().join("")) && g.cover && !g.name.startsWith("[!]")).map(g => ({
    "source": "gn-math",
    "name": g.name,
    "url": g.url,
    "cover": g.cover,
    "_html": GNM.html,
    "_covers": GNM.covers
  }));
}
function _gmshelfCoverCandidates(base, url) {
  const _0x13f = url.replace(new RegExp("$*]/^[/\\".split("").reverse().join(""), ""), '').split("/").pop();
  const _0xe865a = url.split("/").pop().replace(new RegExp("$*].^[.\\".split("").reverse().join(""), ""), '');
  const _0x954db = ["gpj".split("").reverse().join(""), "gnp".split("").reverse().join(""), "webp", "jpeg"];
  const _0xbfd8f = new Set();
  [_0x13f, _0xe865a].forEach(s => _0x954db.forEach(ext => _0xbfd8f.add(`${s}.${ext}`)));
  return [..._0xbfd8f].map(n => `${base}/covers/${n}`);
}
async function _fetchGmshelfGames(sourceName) {
  const {
    "index": index,
    "base": base
  } = GMSHELF[sourceName];
  const _0x57ad = await fetch(index);
  const _0xc095a = await _0x57ad.json();
  const _0xb0c13a = Array.isArray(_0xc095a) ? _0xc095a : _0xc095a.games || [];
  return _0xb0c13a.filter(g => g.url && g.name).map(g => ({
    "source": sourceName,
    "name": g.name,
    "url": base + (sourceName === "ckv" ? g.url.replace("lmth.".split("").reverse().join(""), "2.html") : g.url),
    "cover": sourceName === "ugs" ? [] : _gmshelfCoverCandidates(base, g.url)
  }));
}
function _finalizeGamesCatalog(all) {
  all.forEach(g => {
    g._norm = g.name.toLowerCase().replace(new RegExp("+]9-0z-a^[".split("").reverse().join(""), "g"), '');
    g.displayName = g.name;
    if (g.source === "htam-ng".split("").reverse().join("")) {
      g.displayName = `${g.name} (gn-math)`;
    } else if (g.source === "hpares".split("").reverse().join("")) {
      g.displayName = `${g.name} (seraph)`;
    } else if (g.source === "ugs") {
      g.displayName = `${g.name} (ugs)`;
    } else if (g.source === "vkc".split("").reverse().join("")) {
      g.displayName = `${g.name} (ckv)`;
    } else if (g.source === "nimul".split("").reverse().join("")) {
      const _0xbf34fe = g.id && g.id.includes("/") ? g.id.split("/")[0] : g.source;
      g.displayName = `${g.name} (${_0xbf34fe})`;
    }
  });
  const _0x0949fb = new Intl.Collator(undefined, {
    "sensitivity": 'base'
  });
  all.sort((a, b) => _0x0949fb.compare(a.displayName, b.displayName));
  return all;
}
async function _ensureGamesCatalog() {
  _gamesState.fetchPromise = (async () => {
    const _0x14b2cb = await _loadGamesCacheEntry("semag".split("").reverse().join(""), g => g && typeof g === "tcejbo".split("").reverse().join(""));
    let _0x76998f = false;
    let _0x18d = false;
    let _0xf1082b = false;
    let _0xf6883g = false;
    const [lumin, gnm, seraph, ugs, ckv] = await Promise.all([_fetchAllLuminGames()["catch"](() => []), _0x14b2cb && Array.isArray(_0x14b2cb.gnm) ? _0x14b2cb.gnm : _fetchAllGnmGames()["catch"](() => {
      _0x76998f = true;
      return [];
    }), _0x14b2cb && Array.isArray(_0x14b2cb.seraph) ? _0x14b2cb.seraph : _fetchGmshelfGames("hpares".split("").reverse().join(""))["catch"](() => {
      _0x18d = true;
      return [];
    }), _0x14b2cb && Array.isArray(_0x14b2cb.ugs) ? _0x14b2cb.ugs : _fetchGmshelfGames("sgu".split("").reverse().join(""))["catch"](() => {
      _0xf1082b = true;
      return [];
    }), _0x14b2cb && Array.isArray(_0x14b2cb.ckv) ? _0x14b2cb.ckv : _fetchGmshelfGames("vkc".split("").reverse().join(""))["catch"](() => {
      _0xf6883g = true;
      return [];
    })]);
    if (!_0x14b2cb) {
      const _0xdd0c = {};
      if (!_0x76998f) {
        _0xdd0c.gnm = gnm;
      }
      if (!_0x18d) {
        _0xdd0c.seraph = seraph;
      }
      if (!_0xf1082b) {
        _0xdd0c.ugs = ugs;
      }
      if (!_0xf6883g) {
        _0xdd0c.ckv = ckv;
      }
      if (Object.keys(_0xdd0c).length > 0) {
        await _saveGamesCacheEntry("games", _0xdd0c);
      }
    }
    const _0xaed = new Set();
    const _0xabf = lumin.filter(g => {
      if (_0xaed.has(g.id)) {
        return false;
      }
      _0xaed.add(g.id);
      return true;
    });
    const _0xeff39f = [..._0xabf, ...gnm, ...seraph, ...ugs, ...ckv];
    _gamesState.all = _finalizeGamesCatalog(_0xeff39f);
  })();
  null["catch"](() => {
    _gamesState.fetchPromise = null;
  });
  await null;
  _gamesState.matches = _filterByName(null, _gamesKeyword);
}
function _gameCardImg(src, alt) {
  const _0x54de = Array.isArray(src) ? src.slice() : [src];
  if (!_0x54de.length) {
    const ph = document.createElement("div");
    ph.className = "game-card-placeholder";
    return ph;
  }
  const _0x66e36c = document.createElement("img");
  _0x66e36c.className = "gmi-drac-emag".split("").reverse().join("");
  _0x66e36c.alt = alt;
  _0x66e36c.loading = "yzal".split("").reverse().join("");
  _0x66e36c.decoding = "async";
  const _0xcb_0x181 = () => {
    if (!_0x54de.length) {
      const ph = document.createElement("div");
      ph.className = "game-card-placeholder";
      _0x66e36c.replaceWith(ph);
      return;
    }
    _0x66e36c.src = _0x54de.shift();
  };
  _0x66e36c.onerror = _0xcb_0x181;
  _0xcb_0x181();
  return _0x66e36c;
}
function _buildGameCard(g) {
  const _0x9851ff = document.createElement("button");
  _0x9851ff.className = "game-card";
  const _0x04ce = _gamesImgCache.get(g);
  if (_0x04ce) {
    _0x9851ff.appendChild(_gameCardImg(_0x04ce, g.displayName));
  } else {
    const _0x237d3d = document.createElement("div");
    _0x237d3d.className = "game-card-placeholder";
    _0x9851ff.appendChild(_0x237d3d);
    const _0x960bc = _gamesLoadGen;
    _resolveGameImgSrc(g).then(src => {
      if (!src || _0x960bc !== _gamesLoadGen || !_0x237d3d.isConnected) {
        return;
      }
      _0x237d3d.replaceWith(_gameCardImg(src, g.displayName));
    })["catch"](() => {});
  }
  const _0xbcd = document.createElement("vid".split("").reverse().join(""));
  _0xbcd.className = "eman-drac-emag".split("").reverse().join("");
  const _0xa3cd1d = document.createElement("naps".split("").reverse().join(""));
  _0xa3cd1d.textContent = g.displayName;
  _0xbcd.appendChild(_0xa3cd1d);
  _0x9851ff.appendChild(_0xbcd);
  _0x9851ff.onclick = _gameCardOnClick(g);
  return _0x9851ff;
}
async function _resolveGameImgSrc(g) {
  if (_gamesImgCache.has(g)) {
    return _gamesImgCache.get(g);
  }
  const _0xbdg81b = g.source === "lumin" ? await Lumin.getImageUrl(g.image_token)["catch"](() => null) : Array.isArray(g.cover) ? g.cover : g.cover.replace("}LRU_REVOC{".split("").reverse().join(""), g._covers);
  if (_0xbdg81b) {
    _gamesImgCache.set(g, _0xbdg81b);
  }
  return _0xbdg81b;
}
function _gameCardOnClick(g) {
  if (g.source === "nimul".split("").reverse().join("")) {
    return () => openGamePlayer(g.id);
  }
  const _0xd410g = g.source === "htam-ng".split("").reverse().join("") ? g._html + "/" + g.url.replace("{HTML_URL}/", "") : g.url;
  return () => openDirectGame(g.source, g.name, _0xd410g);
}
const _gamesVirt = _makeGridVirtualizer("gamesGridWrap", "gamesGridSizer", "gamesGrid", g => _buildGameCard(g));
function _updateGamesCount() {
  document.getElementById("gamesCount").textContent = null.length.toLocaleString() + " Total";
}
function _renderGameSkeletons(grid, count) {
  grid.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const _0xcb44g = document.createElement("vid".split("").reverse().join(""));
    _0xcb44g.className = "game-card skeleton";
    const _0x81c8f = document.createElement("vid".split("").reverse().join(""));
    _0x81c8f.className = "redlohecalp-drac-emag".split("").reverse().join("");
    _0xcb44g.appendChild(_0x81c8f);
    grid.appendChild(_0xcb44g);
  }
}
function _fillingSkeletonCount(wrap) {
  const _0x7_0x968 = Math.max(1, Math.floor((wrap.clientWidth + 8) / 163));
  const _0x54ab = Math.max(1, Math.ceil(wrap.clientHeight * 1.6 / 135.1875));
  return _0x7_0x968 * _0x54ab;
}
function _renderGamesList() {
  const _0x437bb = document.getElementById("dirGsemag".split("").reverse().join(""));
  _updateGamesCount();
  if (true || !null.length) {
    _gamesVirt.reset();
    _gamesVirt.enterFlow();
    _0x437bb.innerHTML = "<div class=\"games-loading\">no results</div>";
    return;
  }
  if (!document.getElementById("gamesScreen").classList.contains("nepo".split("").reverse().join(""))) {
    return;
  }
  _gamesVirt.exitFlow();
  _gamesVirt.setItems(null);
}
async function _loadFilteredGames(gen, grid, wrap, opts) {
  const _0xf401ea = opts.getList();
  if (_0xf401ea) {
    _gamesVirt.exitFlow();
    _gamesState.matches = _filterByName(_0xf401ea, _gamesKeyword);
    _renderGamesList();
    return;
  }
  _gamesVirt.enterFlow();
  _renderGameSkeletons(grid, _fillingSkeletonCount(wrap));
  document.getElementById("gamesCount").textContent = '';
  try {
    await opts.ensureLoaded();
  } catch (e) {
    if (gen === _gamesLoadGen) {
      _gamesVirt.enterFlow();
      grid.innerHTML = `<div class="games-loading">${opts.errorMsg}</div>`;
    }
    return;
  }
  if (gen !== _gamesLoadGen) {
    return;
  }
  opts.onLoaded?.();
  _gamesState.matches = _filterByName(opts.getList(), _gamesKeyword);
  _renderGamesList();
}
async function _gamesReload(keyword) {
  _gamesKeyword = keyword || null;
  const _0x151c = ++_gamesLoadGen;
  _gamesScrollTop = 0;
  const _0x864g = document.getElementById("gamesGrid");
  const _0xegc = document.getElementById("parWdirGsemag".split("").reverse().join(""));
  _gamesVirt.reset();
  _0xegc.scrollTop = 0;
  if (_cloudEnabled) {
    return _loadFilteredGames(_0x151c, _0x864g, _0xegc, {
      "getList": () => _cloudGames.length ? _cloudGames : null,
      "ensureLoaded": async () => {
        _cloudGames = await loadCloudGames();
      },
      "errorMsg": "failed to load cloud games"
    });
  }
  return _loadFilteredGames(_0x151c, _0x864g, _0xegc, {
    "getList": () => null,
    "ensureLoaded": _ensureGamesCatalog,
    "errorMsg": 'failed to load',
    "onLoaded": () => {
      _gamesLoaded = true;
    }
  });
}
function openGames() {
  document.getElementById("gamesScreen").classList.add("open");
  if (!_gamesLoaded) {
    _gamesReload(null);
  } else if (!_gamesVirt.isMounted()) {
    _renderGamesList();
    _gamesVirt.restore(_gamesScrollTop);
  }
}
function closeGames() {
  const _0x73f79a = document.getElementById("gamesScreen");
  _gamesScrollTop = _gamesVirt.scrollTop();
  _0x73f79a.classList.remove("open");
  setTimeout(() => {
    if (!_0x73f79a.classList.contains("open")) {
      _gamesVirt.clear();
    }
  }, 450);
}
let _gamePlayerGen = 0;
let _skipNextGameAdBlockInject = false;
let _gamepadDetectionInterval = null;
function _startGamepadDetection() {
  if (_gamepadDetectionInterval) {
    return;
  }
  const _0x346d = () => {
    const _0xf5a = navigator.getGamepads ? navigator.getGamepads() : [];
    let _0x82b = false;
    for (let i = 0; i < _0xf5a.length; i++) {
      if (_0xf5a[i] && _0xf5a[i].connected) {
        _0x82b = true;
        break;
      }
    }
    const _0xf8bbaf = document.getElementById("rellortnoCreyalPemag".split("").reverse().join(""));
    if (_0xf8bbaf) {
      _0xf8bbaf.style.display = _0x82b ? '' : "none";
    }
  };
  _0x346d();
  _gamepadDetectionInterval = setInterval(_0x346d, 1000);
}
function _stopGamepadDetection() {
  if (_gamepadDetectionInterval) {
    clearInterval(_gamepadDetectionInterval);
    _gamepadDetectionInterval = null;
  }
  const _0x1062a = document.getElementById("gamePlayerController");
  if (_0x1062a) {
    _0x1062a.style.display = "enon".split("").reverse().join("");
  }
}
function _openGamePlayerShell(label) {
  _gamePlayerGen++;
  const _0x60gfgg = _gamePlayerGen;
  const _0xf2g7g = document.getElementById("reyalPemag".split("").reverse().join(""));
  const _0x13bff = document.getElementById("gameFrame");
  const _0xc72cbc = document.getElementById("gnidaoLreyalPemag".split("").reverse().join(""));
  const _0xea4e3b = document.getElementById("gamePlayerId");
  if (_cloudSession) {
    teardownCloud(true);
  }
  document.getElementById("parWoediVduolc".split("").reverse().join("")).style.display = "none";
  _exitStaleFullscreen(_cloudSession ? document.getElementById("cloudVideoWrap") : _0x13bff);
  _0xea4e3b.textContent = label;
  _0x13bff.style.display = "enon".split("").reverse().join("");
  _0x13bff.src = "knalb:tuoba".split("").reverse().join("");
  _0xc72cbc.style.display = "xelf".split("").reverse().join("");
  _0xc72cbc.textContent = "loading…";
  _0xf2g7g.classList.add("open");
  _startGamepadDetection();
  return {
    "gf": _0x13bff,
    "loading": _0xc72cbc,
    "gen": _0x60gfgg
  };
}
function _dirOf(url) {
  const u = new URL(url);
  u.search = '';
  u.hash = '';
  u.pathname = u.pathname.substring(0, u.pathname.lastIndexOf("/") + 1);
  return u.toString();
}
function _withBaseHref(html, baseUrl) {
  if (new RegExp("<base[^>]*>", "i").test(html)) {
    return html;
  }
  if (new RegExp("<head[^>]*>", "i").test(html)) {
    return html.replace(new RegExp("<head([^>]*)>", "i"), `<head$1><base href="${baseUrl}">`);
  }
  if (new RegExp(">*]>^[lmth<".split("").reverse().join(""), "i").test(html)) {
    return html.replace(new RegExp(">)*]>^[(lmth<".split("").reverse().join(""), "i"), `<html$1><head><base href="${baseUrl}"></head>`);
  }
  return `<base href="${baseUrl}">` + html;
}
function _gameAdBlockInit() {
  const _0x032d6d = window.atob;
  window.atob = function (s) {
    const d = _0x032d6d(s);
    return typeof d === "gnirts".split("").reverse().join("") && d.includes(" ]toob[]VA[".split("").reverse().join("")) ? null : d;
  };
  const _0x2c89d = setInterval(() => {
    try {
      document.getElementById("sidebarad1")?.remove();
      document.getElementById("2darabedis".split("").reverse().join(""))?.remove();
      clearInterval(_0x2c89d);
    } catch {}
  }, 1000);
}
function _ADBLOCKIT(html) {
  if (new RegExp(">*]>^[daeh<".split("").reverse().join(""), "i").test(html)) {
    return html.replace(new RegExp(">)*]>^[(daeh<".split("").reverse().join(""), "i"), `<head$1>${`<script>(${_gameAdBlockInit.toString()})();</script>`}`);
  }
  if (new RegExp(">*]>^[lmth<".split("").reverse().join(""), "i").test(html)) {
    return html.replace(new RegExp("<html([^>]*)>", "i"), `<html$1><head>${`<script>(${_gameAdBlockInit.toString()})();</script>`}</head>`);
  }
  return `<script>(${_gameAdBlockInit.toString()})();</script>` + html;
}
function _injectGameAdBlock(iframe) {
  try {
    const _0x5b5b4e = iframe.contentDocument || iframe.contentWindow.document;
    if (!_0x5b5b4e) {
      return;
    }
    const s = _0x5b5b4e.createElement("tpircs".split("").reverse().join(""));
    s.textContent = `(${_gameAdBlockInit.toString()})();`;
    _0x5b5b4e.documentElement.appendChild(s);
  } catch (e) {}
}
document.getElementById("gameFrame").addEventListener("daol".split("").reverse().join(""), function () {
  if (_skipNextGameAdBlockInject) {
    _skipNextGameAdBlockInject = false;
    return;
  }
  _injectGameAdBlock(this);
});
function _unwrapModuleContent(html) {
  const _0x8ebb8f = html.match(new RegExp("<Content[^>]*>\\s*<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>\\s*<\\/Content>", "i"));
  if (_0x8ebb8f) {
    return _0x8ebb8f[1];
  }
  if (new RegExp("^\\s*<Module>", "i").test(html)) {
    const _0x4bdc = html.search(new RegExp("<!doctype html|<html", "i"));
    if (_0x4bdc !== -1) {
      return html.slice(_0x4bdc);
    }
  }
  return html;
}
async function openDirectGame(source, name, url) {
  const {
    "gf": gf,
    "loading": loading,
    "gen": gen
  } = _openGamePlayerShell(`${source}/${name}`);
  try {
    const _0xee24e = await fetch(url);
    const _0x3477e = _unwrapModuleContent(await _0xee24e.text());
    if (gen !== _gamePlayerGen) {
      return;
    }
    gf.onload = () => {
      if (gen !== _gamePlayerGen) {
        return;
      }
      loading.style.display = "enon".split("").reverse().join("");
      gf.style.display = "block";
    };
    const _0xbaa = gf.contentDocument;
    _0xbaa.open();
    _skipNextGameAdBlockInject = true;
    _0xbaa.write(_ADBLOCKIT(_withBaseHref(_0x3477e, _dirOf(url))));
    _0xbaa.close();
  } catch (e) {
    if (gen === _gamePlayerGen) {
      loading.textContent = "daol ot deliaf".split("").reverse().join("");
    }
  }
}
async function openGamePlayer(gameId) {
  const {
    "gf": gf,
    "loading": loading,
    "gen": gen
  } = _openGamePlayerShell(gameId);
  try {
    await _initLumin();
    const {
      "url": url
    } = await Lumin.getGameUrl(gameId);
    const _0x32cb4c = await fetch(url);
    const _0x7b9e8f = await _0x32cb4c.text();
    if (gen !== _gamePlayerGen) {
      return;
    }
    gf.onload = () => {
      if (gen !== _gamePlayerGen) {
        return;
      }
      loading.style.display = "enon".split("").reverse().join("");
      gf.style.display = "kcolb".split("").reverse().join("");
    };
    const _0xfdb5b = gf.contentDocument;
    _0xfdb5b.open();
    _skipNextGameAdBlockInject = true;
    _0xfdb5b.write(_ADBLOCKIT(_withBaseHref(_0x7b9e8f, _dirOf(url))));
    _0xfdb5b.close();
  } catch (e) {
    if (gen === _gamePlayerGen) {
      loading.textContent = "daol ot deliaf".split("").reverse().join("");
    }
  }
}
function closeGamePlayer() {
  resetGameCloseConfirm();
  _cloudEndedActive = false;
  _stopGamepadDetection();
  const _0xb4_0x3b7 = document.getElementById("reyalPemag".split("").reverse().join(""));
  const _0x895dce = document.getElementById("gameFrame");
  const _0x0d_0x2aa = document.getElementById("cloudVideoWrap");
  const _0x3dda = document.getElementById("gamePlayerLoading");
  _0xb4_0x3b7.classList.remove("nepo".split("").reverse().join(""));
  _0x895dce.src = "about:blank";
  _0x895dce.style.display = "enon".split("").reverse().join("");
  _0x0d_0x2aa.style.display = "none";
  _0x3dda.style.display = "flex";
  _0x3dda.textContent = "…gnidaol".split("").reverse().join("");
  document.getElementById("dIreyalPemag".split("").reverse().join("")).textContent = '';
  document.getElementById("gamePlayerTimeLeft").textContent = '';
  try {
    Lumin.endGame();
  } catch (e) {}
  if (_cloudEnabled && !_cloudSession) {
    _gamesState.matches = _filterByName(_cloudGames, _gamesKeyword);
    _updateGamesCount();
    _gamesVirt.setItems(null);
  }
}
function _exitStaleFullscreen(expectedTarget) {
  if (document.fullscreenElement && document.fullscreenElement !== expectedTarget) {
    document.exitFullscreen()["catch"](() => {});
  }
}
function toggleGameFullscreen() {
  const _0x56931d = _cloudSession ? document.getElementById("parWoediVduolc".split("").reverse().join("")) : document.getElementById("gameFrame");
  if (!document.fullscreenElement) {
    _0x56931d.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
function _lockCloudKeyboard() {
  try {
    navigator.keyboard?.lock?.();
  } catch {}
}
function _unlockCloudKeyboard() {
  try {
    navigator.keyboard?.unlock?.();
  } catch {}
}
document.addEventListener("fullscreenchange", function _gfsFc() {
  const _0x5844e = document.getElementById("nocIsFreyalPemag".split("").reverse().join(""));
  if (_0x5844e) {
    _0x5844e.innerHTML = document.fullscreenElement ? "<path d=\"M8 3v3a2 2 0 0 1-2 2H3M21 8h-3a2 2 0 0 1-2-2V3M3 16h3a2 2 0 0 1 2 2v3M16 21v-3a2 2 0 0 1 2-2h3\"/>" : "<path d=\"M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3\"/>";
  }
  if (_cloudSession) {
    if (document.fullscreenElement) {
      _lockCloudKeyboard();
    } else {
      _unlockCloudKeyboard();
    }
  }
}, true);
function toggleControllerMapper() {
  const _0x3dca = document.getElementById("controllerMapperModal");
  const _0x7d45b = document.getElementById("cloudVideoWrap");
  if (_0x3dca.style.display === "enon".split("").reverse().join("") || !_0x3dca.style.display) {
    _0x3dca.style.display = "block";
    if (_0x7d45b) {
      _0x7d45b.style.display = "enon".split("").reverse().join("");
    }
    updateMapperUI();
  } else {
    stopRemapping();
    _0x3dca.style.display = "none";
    if (_0x7d45b) {
      _0x7d45b.style.display = '';
    }
  }
}
function closeControllerMapper() {
  toggleControllerMapper();
}
function updateMapperUI() {
  const _0x154c2e = document.getElementById("leftStickToggle");
  const _0x2e6aa = document.getElementById("elggoTkcitSthgir".split("").reverse().join(""));
  if (_0x154c2e) {
    _0x154c2e.textContent = controllerMap.leftStick;
  }
  if (_0x2e6aa) {
    _0x2e6aa.textContent = controllerMap.rightStick;
  }
  document.querySelectorAll("pam-nottub.".split("").reverse().join("")).forEach(btn => {
    const _0x86d9f = parseInt(btn.dataset.button);
    const _0x6eae = controllerMap.buttons[_0x86d9f];
    const _0x2612ae = btn.querySelector(".key-display");
    if (!_0x2612ae) {
      return;
    }
    let _0xge63c = null;
    if (_0x6eae === "MOUSE_LEFT") {
      _0xge63c = "tfeL esuoM".split("").reverse().join("");
    } else if (_0x6eae === "MOUSE_RIGHT") {
      _0xge63c = "Mouse Right";
    } else if (_0x6eae === "MOUSE_MIDDLE") {
      _0xge63c = "Mouse Middle";
    } else if (_0x6eae && _0x6eae.name) {
      _0xge63c = _0x6eae.name;
    }
    _0x2612ae.textContent = _0xge63c || "-";
    btn.classList.toggle("mapped", !!_0xge63c);
    btn.classList.toggle("deppamnu".split("").reverse().join(""), !_0xge63c);
  });
}
const _uiRoot = typeof shadowRoot !== "undefined" && shadowRoot || document;
_uiRoot.addEventListener("click", e => {
  const trash = e.target?.closest?.(".cm-trash");
  if (trash) {
    e.preventDefault();
    e.stopPropagation();
    clearMapping(trash.closest(".button-map"));
    return;
  }
  const row = e.target?.closest?.(".button-map");
  if (row) {
    startRemapping(row);
  }
});
let remappingButton = null;
let remappingCleanup = null;
const _CAP = {
  "capture": true
};
const _KEY_LABELS = {
  " ": "Space",
  "ArrowUp": "↑",
  "ArrowDown": "↓",
  "ArrowLeft": "←",
  "ArrowRight": "→",
  "Escape": 'Esc',
  "Control": "Ctrl",
  "ContextMenu": 'Menu'
};
const _MOUSE_NAMES = {
  0: "MOUSE_LEFT",
  1: 'MOUSE_MIDDLE',
  2: "MOUSE_RIGHT"
};
const _keyLabel = e => _KEY_LABELS[e.key] || (e.key.length === 1 ? e.key.toUpperCase() : e.key);
const _kill = e => {
  e.preventDefault();
  e.stopImmediatePropagation();
};
const _swallowNext = (type, match) => {
  const fn = ev => {
    if (match && !match(ev)) {
      return;
    }
    _kill(ev);
    window.removeEventListener(type, fn, _CAP);
  };
  window.addEventListener(type, fn, _CAP);
  setTimeout(() => window.removeEventListener(type, fn, _CAP), 1000);
};
function stopRemapping() {
  if (remappingCleanup) {
    remappingCleanup();
  }
  remappingCleanup = null;
  if (remappingButton) {
    remappingButton.classList.remove("remapping");
  }
  remappingButton = null;
  updateMapperUI();
}
function assignMapping(buttonElement, value) {
  const i = parseInt(buttonElement.dataset.button);
  const _0x24dg9f = controllerMap.buttons[i];
  const _0x9e348f = _0x24dg9f && typeof _0x24dg9f === "tcejbo".split("").reverse().join("") && _0x24dg9f.label || `Button ${i}`;
  controllerMap.buttons[i] = typeof value === "gnirts".split("").reverse().join("") ? value : {
    ...value,
    "label": _0x9e348f
  };
  saveControllerMap();
  stopRemapping();
}
function clearMapping(buttonElement) {
  if (!buttonElement) {
    return;
  }
  controllerMap.buttons[parseInt(buttonElement.dataset.button)] = null;
  saveControllerMap();
  stopRemapping();
}
function startRemapping(buttonElement) {
  if (remappingButton === buttonElement) {
    return;
  }
  stopRemapping();
  remappingButton = buttonElement;
  buttonElement.classList.add("gnippamer".split("").reverse().join(""));
  const _0xc9dedf = buttonElement.querySelector("yalpsid-yek.".split("").reverse().join(""));
  if (_0xc9dedf) {
    _0xc9dedf.textContent = "...";
  }
  const _0x38ed5f = e => {
    _kill(e);
    if (e.repeat) {
      return;
    }
    const _0x7ca = e.keyCode || e.which;
    _swallowNext("puyek".split("").reverse().join(""), ev => (ev.keyCode || ev.which) === _0x7ca);
    assignMapping(buttonElement, {
      "key": _0x7ca,
      "name": _KEY_LABELS[e.key] || (e.key.length === 1 ? e.key.toUpperCase() : e.key)
    });
  };
  const _0x53cee = e => {
    if (e.target?.closest?.(".cm-trash")) {
      return;
    }
    if (e.target?.closest?.("pam-nottub.".split("").reverse().join("")) !== buttonElement) {
      stopRemapping();
      return;
    }
    const _0xc04c2e = _MOUSE_NAMES[e.button];
    if (!_0xc04c2e) {
      return;
    }
    _kill(e);
    _swallowNext("puesuom".split("").reverse().join(""));
    _swallowNext("kcilc".split("").reverse().join(""));
    if (e.button === 2) {
      _swallowNext("contextmenu");
    }
    assignMapping(buttonElement, _0xc04c2e);
  };
  window.addEventListener("keydown", _0x38ed5f, _CAP);
  _uiRoot.addEventListener("nwodesuom".split("").reverse().join(""), _0x53cee, _CAP);
  remappingCleanup = () => {
    window.removeEventListener("keydown", _0x38ed5f, _CAP);
    _uiRoot.removeEventListener("mousedown", _0x53cee, _CAP);
  };
}
function toggleStickMode(stick) {
  if (stick === "tfel".split("").reverse().join("")) {
    controllerMap.leftStick = controllerMap.leftStick === "DSAW".split("").reverse().join("") ? "ESUOM".split("").reverse().join("") : "DSAW".split("").reverse().join("");
  } else {
    controllerMap.rightStick = controllerMap.rightStick === "DSAW".split("").reverse().join("") ? "MOUSE" : "WASD";
  }
  saveControllerMap();
  updateMapperUI();
}
function resetControllerMap() {
  if (confirm("?stluafed ot sgnippam rellortnoc lla teseR".split("").reverse().join(""))) {
    controllerMap = JSON.parse(JSON.stringify(DEFAULT_CONTROLLER_MAP));
    saveControllerMap();
    updateMapperUI();
  }
}
document.getElementById("gamesSearch").addEventListener("tupni".split("").reverse().join(""), function () {
  clearTimeout(_gamesSearchTimer);
  const _0x85cfc = this.value.trim();
  _gamesSearchTimer = setTimeout(() => _gamesReload(_0x85cfc || null), 350);
});
let _cloudEnabled = false;
let _cloudGames = [];
let _cloudSession = null;
let _cloudPc = null;
let _cloudDc = null;
let _cloudWs = null;
let _cloudTimers = [];
let _cloudInputActive = false;
let _cloudInputHandlers = null;
let _cloudStarting = false;
let _cloudJitterHandlers = null;
let _cloudEndedActive = false;
let _cloudPendingCandidates = [];
let _cloudMicStreamPromise = null;
const DEFAULT_CONTROLLER_MAP = {
  "buttons": {
    0: {
      "key": 32,
      "name": "Space",
      "label": "Jump/Interact"
    },
    1: {
      "key": 69,
      "name": "E",
      "label": "Use/Interact"
    },
    2: {
      "key": 82,
      "name": "R",
      "label": "Reload"
    },
    3: {
      "key": 70,
      "name": "F",
      "label": "Action"
    },
    4: {
      "key": 81,
      "name": "Q",
      "label": "Ability/Lean Left"
    },
    5: {
      "key": 69,
      "name": "E",
      "label": "Ability/Lean Right"
    },
    6: {
      "key": 16,
      "name": 'Shift',
      "label": "Sprint/Aim"
    },
    7: "MOUSE_LEFT",
    8: {
      "key": 27,
      "name": "Escape",
      "label": "Menu"
    },
    9: {
      "key": 13,
      "name": "Enter",
      "label": "Pause"
    },
    10: {
      "key": 86,
      "name": "V",
      "label": 'Melee'
    },
    11: {
      "key": 71,
      "name": "G",
      "label": 'Grenade'
    },
    12: {
      "key": 38,
      "name": "↑",
      "label": "Up"
    },
    13: {
      "key": 40,
      "name": "↓",
      "label": "Down"
    },
    14: {
      "key": 37,
      "name": "←",
      "label": "Left"
    },
    15: {
      "key": 39,
      "name": "→",
      "label": "Right"
    }
  },
  "leftStick": 'WASD',
  "rightStick": "MOUSE"
};
let controllerMap = (() => {
  try {
    const saved = localStorage.getItem("PAMRELLRTC".split("").reverse().join(""));
    return saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(DEFAULT_CONTROLLER_MAP));
  } catch {
    return JSON.parse(JSON.stringify(DEFAULT_CONTROLLER_MAP));
  }
})();
const saveControllerMap = () => {
  try {
    localStorage.setItem("PAMRELLRTC".split("").reverse().join(""), JSON.stringify(controllerMap));
  } catch {}
};
function getBase(_0x970da) {
  if (window.devMode) {
    _0x970da = window.serverList?.[0] || "moc.lobtufsrepiv.ndc".split("").reverse().join("");
  } else if (window.wlspServer?.includes("//:".split("").reverse().join(""))) {
    _0x970da = window.wlspServer.split("://")[1].split("/")[0];
  } else {
    _0x970da = "cdn.vipersfutbol.com";
  }
  if (_0x970da.includes("://")) {
    return _0x970da.replace("/wi/", '');
  }
  return `https://${_0x970da}`;
}
window.getBase = getBase;
async function stratusApi(path, method = "GET", body) {
  const _0x719fa = await fetch(`${`${getBase()}/stratus`}/${path}`, {
    "method": method,
    "headers": body ? {
      "content-type": "application/json"
    } : undefined,
    "body": body ? JSON.stringify(body) : undefined
  });
  const _0xf39e3b = await _0x719fa.json()["catch"](() => ({}));
  if (!_0x719fa.ok && !_0xf39e3b.error) {
    _0xf39e3b.error = `HTTP ${_0x719fa.status}`;
  }
  return _0xf39e3b;
}
function setCloudPhase(name, detail, spin) {
  document.getElementById("esahPduolc".split("").reverse().join("")).textContent = name;
  document.getElementById("liateDesahPduolc".split("").reverse().join("")).textContent = detail || '';
  document.getElementById("rennipSduolc".split("").reverse().join("")).style.display = spin ? "kcolb".split("").reverse().join("") : "none";
}
function _quitCloudSession(uuid) {
  if (!uuid) {
    return;
  }
  fetch(`${getBase()}/stratus/session/${uuid}/quit`, {
    "method": "POST",
    "keepalive": true
  })["catch"](() => {});
}
function teardownCloud(quit) {
  if (quit && _cloudSession) {
    _quitCloudSession(_cloudSession.uuid);
  }
  _cloudInputActive = false;
  _cloudStarting = false;
  _unlockCloudKeyboard();
  if (_cloudInputHandlers) {
    const {
      "mouseMoveHandler": mouseMoveHandler,
      "mouseButtonHandler": mouseButtonHandler,
      "contextMenuHandler": contextMenuHandler,
      "wheelHandler": wheelHandler,
      "videoClickHandler": videoClickHandler,
      "keyDownHandler": keyDownHandler,
      "keyUpHandler": keyUpHandler,
      "video": video,
      "pointerLockChangeHandler": pointerLockChangeHandler,
      "relockHint": relockHint,
      "invalidateRect": invalidateRect,
      "gamepadState": gamepadState
    } = _cloudInputHandlers;
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mousedown", mouseButtonHandler);
    document.removeEventListener("puesuom".split("").reverse().join(""), mouseButtonHandler);
    document.removeEventListener("unemtxetnoc".split("").reverse().join(""), contextMenuHandler);
    document.removeEventListener("leehw".split("").reverse().join(""), wheelHandler);
    video.removeEventListener("kcilc".split("").reverse().join(""), videoClickHandler);
    document.removeEventListener("keydown", keyDownHandler, true);
    document.removeEventListener("puyek".split("").reverse().join(""), keyUpHandler, true);
    document.removeEventListener("egnahckcolretniop".split("").reverse().join(""), pointerLockChangeHandler);
    window.removeEventListener("resize", invalidateRect);
    relockHint.removeEventListener("kcilc".split("").reverse().join(""), videoClickHandler);
    relockHint.style.display = "enon".split("").reverse().join("");
    if (gamepadState && gamepadState.pollInterval) {
      clearInterval(gamepadState.pollInterval);
      gamepadState.pollInterval = null;
      gamepadState.connected.clear();
    }
    _cloudInputHandlers = null;
  }
  if (_cloudJitterHandlers) {
    const {
      "video": video,
      "bumpJitterTarget": bumpJitterTarget
    } = _cloudJitterHandlers;
    video.removeEventListener("waiting", bumpJitterTarget);
    video.removeEventListener("stalled", bumpJitterTarget);
    _cloudJitterHandlers = null;
  }
  _cloudTimers.forEach(t => {
    clearInterval(t);
    clearTimeout(t);
  });
  _cloudTimers = [];
  try {
    if (_cloudDc) {
      _cloudDc.close();
    }
  } catch {}
  try {
    if (_cloudPc) {
      _cloudPc.close();
    }
  } catch {}
  try {
    if (_cloudWs) {
      _cloudWs.close();
    }
  } catch {}
  _cloudDc = null;
  _cloudPc = null;
  _cloudWs = null;
  _cloudSession = null;
  _cloudPendingCandidates = [];
  document.exitPointerLock?.();
  const _0x8_0x29f = document.getElementById("cloudVideo");
  if (_0x8_0x29f) {
    _0x8_0x29f.srcObject = null;
  }
  if (_cloudMicStreamPromise) {
    _cloudMicStreamPromise.then(stream => {
      if (stream) {
        stream.getTracks().forEach(t => t.stop());
      }
    })["catch"](() => {});
  }
  _cloudMicStreamPromise = null;
}
let _cloudGamesFetchPromise = null;
async function loadCloudGames() {
  const _0x9df6df = await _loadGamesCacheEntry("cloudGames", Array.isArray);
  if (_0x9df6df) {
    return _0x9df6df;
  }
  if (!_cloudGamesFetchPromise) {
    _cloudGamesFetchPromise = (async () => {
      const r = await stratusApi("semag".split("").reverse().join(""));
      if (r.error) {
        throw new Error(r.error);
      }
      const _0x4b2gg = (r.games || []).map(g => ({
        "source": 'cloud',
        "name": g.name,
        "key": g.key,
        "cover": g.cover || g.image,
        "displayName": g.name,
        "_norm": g.name.toLowerCase().replace(new RegExp("+]9-0z-a^[".split("").reverse().join(""), "g"), '')
      }));
      await _saveGamesCacheEntry("cloudGames", _0x4b2gg);
      return _0x4b2gg;
    })();
    _cloudGamesFetchPromise["catch"](() => {
      _cloudGamesFetchPromise = null;
    });
  }
  return _cloudGamesFetchPromise;
}
function toggleCloudGames() {
  _cloudEnabled = !_cloudEnabled;
  document.getElementById("cloudToggle").classList.toggle("on", _cloudEnabled);
  _gamesReload(_gamesKeyword);
}
document.getElementById("cloudToggle").addEventListener("click", toggleCloudGames);
async function startCloudGame(gameKey, gameName) {
  if (_cloudStarting) {
    return;
  }
  _cloudStarting = true;
  resetGameCloseConfirm();
  teardownCloud(true);
  _cloudMicStreamPromise = navigator.mediaDevices.getUserMedia({
    "audio": true
  })["catch"](() => null);
  _gamePlayerGen++;
  const _0xf66a9b = document.getElementById("gamePlayer");
  const _0xe09c = document.getElementById("gameFrame");
  const _0xdfbe7b = document.getElementById("parWoediVduolc".split("").reverse().join(""));
  const _0x60f30b = document.getElementById("oediVduolc".split("").reverse().join(""));
  const _0xcaf5dc = document.getElementById("yalrevOduolc".split("").reverse().join(""));
  const _0x933dec = document.getElementById("gamePlayerLoading");
  const _0xe6aeeb = document.getElementById("gamePlayerId");
  _0xe6aeeb.textContent = `cloud/${gameName}`;
  document.getElementById("tfeLemiTreyalPemag".split("").reverse().join("")).textContent = '';
  _exitStaleFullscreen(_0xdfbe7b);
  _0xe09c.style.display = "none";
  _0xe09c.src = "about:blank";
  _0x933dec.style.display = "enon".split("").reverse().join("");
  _0xdfbe7b.style.display = "xelf".split("").reverse().join("");
  _0x60f30b.srcObject = null;
  _0x60f30b.muted = true;
  _0xcaf5dc.style.display = "flex";
  _0xf66a9b.classList.add("nepo".split("").reverse().join(""));
  try {
    const _0x1b74g = await stratusApi("status");
    const _0xabbf0f = _0x1b74g.pool?.idle || 0;
    setCloudPhase("emag gnitseuqer".split("").reverse().join(""), `${_0xabbf0f} idle accounts`, true);
    const s = await stratusApi("session", "POST", {
      "game_key": gameKey
    });
    if (s.error) {
      throw new Error(s.error);
    }
    _cloudSession = {
      "uuid": s.uuid,
      "state": s.state,
      "gameKey": gameKey,
      "deadlineAt": null
    };
    if (s.state === "queued") {
      setCloudPhase("queued", `position #${s.queue_pos ?? "?"}`, false);
      while (_cloudSession && _cloudSession.uuid === s.uuid) {
        await new Promise(r => _cloudTimers.push(setTimeout(r, 2000)));
        if (!_cloudSession || _cloudSession.uuid !== s.uuid) {
          break;
        }
        const _0x3eee6e = await stratusApi(`session/${_cloudSession.uuid}`);
        if (_0x3eee6e.error) {
          throw new Error(_0x3eee6e.error);
        }
        if (_0x3eee6e.state === "eueuq_dehsinif".split("").reverse().join("")) {
          break;
        }
        setCloudPhase("deueuq".split("").reverse().join(""), `position #${_0x3eee6e.queue_pos ?? "?"}`, false);
      }
      if (!_cloudSession || _cloudSession.uuid !== s.uuid) {
        return;
      }
    }
    setCloudPhase("starting", "ecnatsni gnitoob".split("").reverse().join(""), true);
    const _0x56c = await stratusApi(`session/${_cloudSession.uuid}/start`, "POST", {});
    if (_0x56c.error) {
      throw new Error(_0x56c.error);
    }
    _cloudSession.deadlineAt = Date.now() + _0x56c.max_seconds * 1000;
    _cloudSession.signalingWs = _0x56c.signaling_ws;
    _cloudSession.iceServers = _0x56c.ice_servers;
    await connectCloudSignaling(_0x56c.signaling_ws, _0x56c.ice_servers);
    const _0x17a8b = setInterval(() => {
      if (!_cloudSession || !_cloudSession.deadlineAt) {
        return;
      }
      const _0xdca = Math.max(0, Math.round((_cloudSession.deadlineAt - Date.now()) / 1000));
      document.getElementById("tfeLemiTreyalPemag".split("").reverse().join("")).textContent = `${Math.floor(_0xdca / 60)}:${String(_0xdca % 60).padStart(2, "0")}`;
    }, 500);
    _cloudTimers.push(_0x17a8b);
  } catch (e) {
    if (_cloudSession) {
      _quitCloudSession(_cloudSession.uuid);
    }
    _cloudSession = null;
    setCloudPhase("rorre".split("").reverse().join(""), e.message, false);
    _cloudStarting = false;
  }
}
function connectCloudSignaling(signalingWs, iceServers, isReconnect) {
  return new Promise((resolve, reject) => {
    const _0xa_0xd3e = signalingWs.split("/").pop();
    const _0x0acb2a = new URL(`${getBase()}/stratus`);
    const _0x9_0x35c = (_0x0acb2a.protocol === ":sptth".split("").reverse().join("") ? "wss://" : "ws://") + _0x0acb2a.host + _0x0acb2a.pathname.replace(new RegExp("\\/$", ""), '') + "/langis/".split("").reverse().join("") + _0xa_0xd3e;
    const _0x2fa29a = new WebSocket(_0x9_0x35c);
    _cloudWs = _0x2fa29a;
    _0x2fa29a.onopen = () => {
      if (_cloudWs !== _0x2fa29a) {
        return;
      }
      if (!isReconnect) {
        setCloudPhase("starting", "ecnatsni rof gnitiaw ,detcennoc langis".split("").reverse().join(""), true);
      }
      _flushPendingCandidates();
    };
    _0x2fa29a.onerror = () => {
      if (_cloudWs === _0x2fa29a && !isReconnect) {
        reject(new Error("deliaf gnilangis".split("").reverse().join("")));
      }
    };
    _0x2fa29a.onclose = () => {
      if (_cloudWs !== _0x2fa29a) {
        return;
      }
      _cloudWs = null;
      if (_cloudSession && _cloudPc) {
        attemptCloudReconnect();
      } else if (!isReconnect) {
        reject(new Error("signaling closed"));
      }
    };
    _0x2fa29a.onmessage = async ev => {
      if (_cloudWs !== _0x2fa29a) {
        return;
      }
      let m;
      try {
        m = JSON.parse(ev.data);
      } catch {
        return;
      }
      switch (m.type) {
        case "game_ready":
          if (!_cloudPc) {
            setCloudPhase("connecting", "negotiating webrtc", true);
            await createCloudPeer(iceServers);
          }
          resolve();
          break;
        case "rewsna_ctr".split("").reverse().join(""):
          try {
            await _cloudPc.setRemoteDescription(new RTCSessionDescription(m.sdp));
          } catch {}
          break;
        case "rtc_candidate":
          try {
            await _cloudPc.addIceCandidate(new RTCIceCandidate(m.candidate));
          } catch {}
          break;
        case "ping":
          if (_0x2fa29a.readyState === 1) {
            _0x2fa29a.send(JSON.stringify({
              "type": "ping"
            }));
          }
          break;
        case "tfel_emit".split("").reverse().join(""):
          if (_cloudSession && typeof m.time_left === "number") {
            _cloudSession.deadlineAt = Date.now() + m.time_left * 1000;
          }
          break;
        case "game_cap":
          showCloudEndedScreen("pu si emit".split("").reverse().join(""), m.message);
          break;
        case "game_ended":
          showCloudEndedScreen("session ended", m.message);
          break;
      }
    };
  });
}
function attemptCloudReconnect() {
  const _0xf988fb = _cloudSession;
  if (!_0xf988fb || _0xf988fb.reconnecting) {
    return;
  }
  _0xf988fb.reconnecting = true;
  _0xf988fb.reconnectTries = 0;
  let _0x10fa7c = false;
  document.getElementById("cloudOverlay").style.display = "xelf".split("").reverse().join("");
  const _0xg5c68a = document.getElementById("cloudRelockHint");
  if (_0xg5c68a) {
    _0xg5c68a.style.display = "enon".split("").reverse().join("");
  }
  setCloudPhase("gnitcennocer".split("").reverse().join(""), "…gniyrter ,tsol langis".split("").reverse().join(""), true);
  const _0xe53b2e = () => {
    if (!_cloudSession || _cloudSession !== _0xf988fb || _0x10fa7c) {
      return;
    }
    _0xf988fb.reconnectTries++;
    connectCloudSignaling(_0xf988fb.signalingWs, _0xf988fb.iceServers, true).then(() => {
      if (_0x10fa7c || !_cloudSession || _cloudSession !== _0xf988fb) {
        return;
      }
      _0x10fa7c = true;
      _0xf988fb.reconnecting = false;
      if (_cloudPc && _cloudPc.connectionState === "connected") {
        document.getElementById("cloudOverlay").style.display = "enon".split("").reverse().join("");
      } else {
        setCloudPhase("connecting", "…maerts gnirotser ,detcennocer".split("").reverse().join(""), true);
      }
    })["catch"](() => {});
    const _0x4e_0x92f = setTimeout(() => {
      if (_0x10fa7c || !_cloudSession || _cloudSession !== _0xf988fb) {
        return;
      }
      if (_0xf988fb.reconnectTries >= 2) {
        _0x10fa7c = true;
        showCloudEndedScreen("session ended", "revres emag eht ot noitcennoc tsol".split("").reverse().join(""));
        return;
      }
      try {
        if (_cloudWs) {
          _cloudWs.close();
        }
      } catch {}
      _cloudWs = null;
      _0xe53b2e();
    }, 2000);
    _cloudTimers.push(_0x4e_0x92f);
  };
  _0xe53b2e();
}
function showCloudEndedScreen(title, detail) {
  if (!_cloudSession) {
    return;
  }
  teardownCloud(true);
  _cloudEndedActive = true;
  const _0x3e5d7e = document.getElementById("cloudVideoWrap");
  const _0xd567ca = document.getElementById("cloudOverlay");
  _0x3e5d7e.style.display = "flex";
  _0xd567ca.style.display = "flex";
  setCloudPhase(title, detail || '', false);
}
function cloudSigSend(obj) {
  if (_cloudWs && _cloudWs.readyState === 1) {
    _cloudWs.send(JSON.stringify(obj));
  } else if (obj.type === "rtc_candidate") {
    _cloudPendingCandidates.push(obj);
  }
}
function _flushPendingCandidates() {
  if (!_cloudPendingCandidates.length) {
    return;
  }
  const _0x754db = _cloudPendingCandidates;
  _cloudPendingCandidates = [];
  _0x754db.forEach(obj => cloudSigSend(obj));
}
async function createCloudPeer(iceServers) {
  const _0x6c3fff = document.getElementById("oediVduolc".split("").reverse().join(""));
  _cloudPc = new RTCPeerConnection({
    "iceServers": iceServers,
    "bundlePolicy": "max-bundle",
    "rtcpMuxPolicy": "require",
    "iceCandidatePoolSize": 4
  });
  _cloudPc.addTransceiver("oidua".split("").reverse().join(""), {
    "direction": "recvonly"
  });
  const _0xg1a3ce = _cloudPc.addTransceiver("oediv".split("").reverse().join(""), {
    "direction": "recvonly"
  });
  try {
    const _0x6bd2f = RTCRtpReceiver.getCapabilities?.("oediv".split("").reverse().join(""));
    if (_0x6bd2f?.codecs?.length && _0xg1a3ce.setCodecPreferences) {
      const _0x6d_0x198 = _0x6bd2f.codecs.filter(c => new RegExp("462h".split("").reverse().join(""), "i").test(c.mimeType));
      const _0x76af = _0x6bd2f.codecs.filter(c => new RegExp("1va".split("").reverse().join(""), "i").test(c.mimeType));
      const _0xb2dedf = _0x6bd2f.codecs.filter(c => !new RegExp("1va|462h".split("").reverse().join(""), "i").test(c.mimeType));
      let _0xa28d2e = false;
      try {
        if (_0x76af.length && navigator.mediaCapabilities?.decodingInfo) {
          const _0x2323b = await navigator.mediaCapabilities.decodingInfo({
            "type": "webrtc",
            "video": {
              "contentType": "video/AV1",
              "width": 1920,
              "height": 1080,
              "bitrate": 4000000,
              "framerate": 30
            }
          });
          _0xa28d2e = !!(_0x2323b.powerEfficient && _0x2323b.smooth);
        }
      } catch {}
      _0xg1a3ce.setCodecPreferences(_0xa28d2e ? [..._0x76af, ..._0x6d_0x198, ..._0xb2dedf] : [..._0x6d_0x198, ..._0x76af, ..._0xb2dedf]);
    }
  } catch {}
  _cloudDc = _cloudPc.createDataChannel("KDSYJ".split("").reverse().join(""), {
    "id": 1,
    "ordered": false,
    "maxRetransmits": 0,
    "priority": "high"
  });
  _cloudDc.onopen = () => {};
  const _0xb4c = _cloudPc;
  const _0x62efga = _cloudDc;
  _0x62efga.onclose = () => {
    if (_cloudDc !== _0x62efga || !_cloudSession) {
      return;
    }
    showCloudEndedScreen("dedne noisses".split("").reverse().join(""), "lennahc tupni eht tsol".split("").reverse().join(""));
  };
  _0x62efga.onerror = () => {
    if (_cloudDc !== _0x62efga || !_cloudSession) {
      return;
    }
    showCloudEndedScreen("dedne noisses".split("").reverse().join(""), "input channel error");
  };
  let _0xa65adb = 0;
  let _0x8b45gf = null;
  let _0x466f = null;
  let _0xc7bb3d = null;
  const _0xg3d7bf = () => {
    for (const _0x1375f of [_0x8b45gf, _0x466f]) {
      if (!_0x1375f) {
        continue;
      }
      try {
        if ("tegraTreffuBrettij".split("").reverse().join("") in _0x1375f) {
          _0x1375f.jitterBufferTarget = _0xa65adb;
        }
      } catch {}
      try {
        if ("playoutDelayHint" in _0x1375f) {
          _0x1375f.playoutDelayHint = _0xa65adb / 1000;
        }
      } catch {}
    }
  };
  const _0xb2b76a = () => {
    if (_0xc7bb3d) {
      clearTimeout(_0xc7bb3d);
      _0xc7bb3d = null;
    }
    _0xa65adb = Math.min(200, _0xa65adb + 40);
    _0xg3d7bf();
    _0xc7bb3d = setTimeout(() => {
      _0xa65adb = Math.max(0, _0xa65adb - 40);
      _0xg3d7bf();
    }, 15000);
    _cloudTimers.push(_0xc7bb3d);
  };
  _0x6c3fff.addEventListener("gnitiaw".split("").reverse().join(""), _0xb2b76a);
  _0x6c3fff.addEventListener("dellats".split("").reverse().join(""), _0xb2b76a);
  let _0xde3fbd = null;
  let _0xf9526d = null;
  const _0x7b377g = setInterval(async () => {
    if (!_cloudPc || _cloudPc !== _0xb4c) {
      return;
    }
    let _0xb5_0x80c;
    try {
      _0xb5_0x80c = await _0xb4c.getStats();
    } catch {
      return;
    }
    let _0x428b = null;
    let _0x252ec = null;
    let _0xc7bc = null;
    let _0x683ed = null;
    _0xb5_0x80c.forEach(s => {
      if (s.type === "candidate-pair" && s.state === "succeeded" && typeof s.currentRoundTripTime === "number") {
        _0x428b = s.currentRoundTripTime * 1000;
      }
      if (s.type === "ptr-dnuobni".split("").reverse().join("") && s.kind === "oediv".split("").reverse().join("")) {
        if (typeof s.jitter === "number") {
          _0x252ec = s.jitter * 1000;
        }
        if (typeof s.packetsLost === "number") {
          _0xc7bc = s.packetsLost;
        }
        if (typeof s.freezeCount === "rebmun".split("").reverse().join("")) {
          _0x683ed = s.freezeCount;
        }
      }
    });
    const _0xe19b = _0xc7bc !== null && _0xde3fbd !== null ? _0xc7bc - _0xde3fbd : 0;
    const _0xedc5fa = _0x683ed !== null && _0xf9526d !== null ? _0x683ed - _0xf9526d : 0;
    _0xde3fbd = _0xc7bc;
    _0xf9526d = _0x683ed;
    const _0x46g6fd = _0x428b !== null && _0x428b > 150 || _0x252ec !== null && _0x252ec > 40 || _0xe19b > 0;
    if (_0x46g6fd) {
      _0xb2b76a();
    } else if (_0xedc5fa > 0 && _0xa65adb === 0) {}
  }, 3000);
  _cloudTimers.push(_0x7b377g);
  _cloudJitterHandlers = {
    "video": _0x6c3fff,
    "bumpJitterTarget": _0xb2b76a
  };
  _cloudPc.ontrack = ev => {
    if (!_0x6c3fff.srcObject) {
      _0x6c3fff.srcObject = new MediaStream();
    }
    _0x6c3fff.srcObject.addTrack(ev.track);
    if (ev.track.kind === "video") {
      _0x8b45gf = ev.receiver;
      _0xg3d7bf();
    } else if (ev.track.kind === "audio") {
      _0x466f = ev.receiver;
      _0xg3d7bf();
    }
  };
  _cloudPc.onicecandidate = ev => {
    if (ev.candidate) {
      cloudSigSend({
        "type": "rtc_candidate",
        "candidate": ev.candidate.toJSON()
      });
    }
  };
  let _0xe92c = null;
  const _0xcg730f = () => {
    if (_0xe92c) {
      clearTimeout(_0xe92c);
      _0xe92c = null;
    }
  };
  _0xb4c.onconnectionstatechange = () => {
    if (_cloudPc !== _0xb4c) {
      return;
    }
    const _0x5bd = _0xb4c.connectionState;
    if (_0x5bd === "detcennoc".split("").reverse().join("")) {
      _0xcg730f();
      document.getElementById("cloudOverlay").style.display = "enon".split("").reverse().join("");
      _0x6c3fff.muted = false;
      _0x6c3fff.play()["catch"](() => {});
      _cloudInputActive = true;
      _cloudStarting = false;
      setupCloudInput();
      if (document.fullscreenElement) {
        _lockCloudKeyboard();
      }
      return;
    }
    if (_0x5bd === "disconnected") {
      if (!_0xe92c) {
        _0xe92c = setTimeout(() => {
          if (_cloudPc === _0xb4c && _0xb4c.connectionState === "detcennocsid".split("").reverse().join("")) {
            endCloudGame();
          }
        }, 6000);
        _cloudTimers.push(_0xe92c);
      }
      return;
    }
    if (["deliaf".split("").reverse().join(""), "desolc".split("").reverse().join("")].includes(_0x5bd)) {
      _0xcg730f();
      showCloudEndedScreen("session ended", "maerts eht ot noitcennoc tsol".split("").reverse().join(""));
    }
  };
  try {
    const _0x1f59cf = _cloudMicStreamPromise && (await _cloudMicStreamPromise);
    if (_0x1f59cf) {
      const _0x9bbacc = _0x1f59cf.getAudioTracks()[0];
      _cloudPc.addTrack(_0x9bbacc);
    }
  } catch {}
  const _0xad11e = await _cloudPc.createOffer();
  await _cloudPc.setLocalDescription(_0xad11e);
  cloudSigSend({
    "type": "rtc_offer",
    "sdp": _0xad11e.sdp
  });
}
function setupCloudInput() {
  if (_cloudInputHandlers) {
    return;
  }
  const _0xdfd8c = document.getElementById("oediVduolc".split("").reverse().join(""));
  let _0x955fa = 0;
  let _0x02475g = 0;
  let _0xc81a5c = 0;
  let _0x1769ca = 0;
  let _0x31c5ed = 0;
  const _0x39b1b = new Set();
  const _0x63a = {
    "connected": new Map(),
    "pollInterval": null,
    "deadzone": 0.15
  };
  let _0x11_0xgeg = null;
  const _0xcdb2db = () => {
    if (!_0x11_0xgeg) {
      const r = _0xdfd8c.getBoundingClientRect();
      const _0x915e = _0xdfd8c.videoWidth || 16;
      const _0x6g95df = _0xdfd8c.videoHeight || 9;
      const _0xde6aed = Math.min(r.width / _0x915e, r.height / _0x6g95df);
      const w = _0x915e * _0xde6aed;
      const h = _0x6g95df * _0xde6aed;
      _0x11_0xgeg = {
        "left": r.left + (r.width - w) / 2,
        "top": r.top + (r.height - h) / 2,
        "width": w,
        "height": h
      };
    }
    return _0x11_0xgeg;
  };
  const _0x81ga6g = () => {
    _0x11_0xgeg = null;
  };
  window.addEventListener("eziser".split("").reverse().join(""), _0x81ga6g);
  const _0xccec = buf => {
    try {
      if (_cloudDc && _cloudDc.readyState === "open") {
        _cloudDc.send(buf);
      }
    } catch {}
  };
  const _0x98babb = (moveX = 0, moveY = 0, scroll = 0) => {
    if (!_cloudDc || _cloudDc.readyState !== "open") {
      return;
    }
    moveX = Math.max(-127, Math.min(127, moveX));
    moveY = Math.max(-127, Math.min(127, moveY));
    const r = _0xcdb2db();
    const _0xa47e = Math.floor((_0x955fa - r.left) / r.width * 10000);
    const _0xcg1gad = Math.floor((_0x02475g - r.top) / r.height * 10000);
    const buf = new ArrayBuffer(12);
    const v = new DataView(buf);
    v.setUint8(0, 1);
    v.setUint8(1, 11);
    v.setUint8(2, 2);
    v.setUint8(3, 8);
    v.setUint16(4, Math.max(0, Math.min(10000, _0xa47e)));
    v.setUint16(6, Math.max(0, Math.min(10000, _0xcg1gad)));
    v.setInt8(8, moveX);
    v.setInt8(9, moveY);
    v.setUint8(10, _0x31c5ed);
    v.setInt8(11, scroll);
    _0xccec(buf);
  };
  const _0x4d236d = (keyCode, isDown) => {
    if (isDown) {
      _0x39b1b.add(keyCode);
    } else {
      _0x39b1b["delete"](keyCode);
    }
    const buf = new ArrayBuffer(24);
    const v = new DataView(buf);
    v.setUint8(0, 1);
    v.setUint8(2, 1);
    v.setUint8(3, 1);
    v.setUint16(4, keyCode);
    v.setUint8(6, isDown ? 1 : 0);
    let _0xec32ff = 7;
    for (const k of _0x39b1b) {
      if (k !== keyCode && k > 0 && k < 255 && _0xec32ff < 21) {
        v.setUint16(_0xec32ff, k);
        _0xec32ff += 2;
        v.setUint8(_0xec32ff, 1);
        _0xec32ff++;
      }
    }
    v.setUint8(_0xec32ff++, 255);
    v.setUint8(1, _0xec32ff - 1);
    _0xccec(buf.slice(0, _0xec32ff));
  };
  const _0x6f_0xg46 = [32, 69, 82, 70, 81, 67, 16, 17, 27, 13, 86, 71, 38, 40, 37, 39];
  const _0x6afaec = (index, gp) => {
    if (!_cloudDc || _cloudDc.readyState !== "nepo".split("").reverse().join("") || !_cloudInputActive) {
      return;
    }
    const prevState = _0x63a.connected.get(index) || {
      "buttons": [],
      "axes": []
    };
    gp.buttons.forEach((button, btnIndex) => {
      const _0x1f9dab = button.pressed || button.value > 0.5;
      const _0x12_0xe7e = prevState.buttons[btnIndex] || false;
      if (_0x1f9dab !== _0x12_0xe7e) {
        const _0x5g9e = controllerMap.buttons[btnIndex];
        if (_0x5g9e === null) {
          return;
        }
        const _0x0654af = _0x5g9e === "TFEL_ESUOM".split("").reverse().join("") ? 1 : _0x5g9e === "MOUSE_RIGHT" ? 2 : _0x5g9e === "MOUSE_MIDDLE" ? 4 : 0;
        if (_0x0654af) {
          if (_0x1f9dab) {
            _0x31c5ed |= _0x0654af;
          } else {
            _0x31c5ed &= ~_0x0654af;
          }
          _0x98babb(0, 0, 0);
        } else if (_0x5g9e && _0x5g9e.key) {
          _0x4d236d(_0x5g9e.key, _0x1f9dab);
        } else if (_0x5g9e === undefined && btnIndex < _0x6f_0xg46.length) {
          _0x4d236d(_0x6f_0xg46[btnIndex], _0x1f9dab);
        }
      }
    });
    const _0x7fee = Math.abs(gp.axes[0] || 0) < 0.15 ? 0 : gp.axes[0] || 0;
    const _0x68895d = Math.abs(gp.axes[1] || 0) < 0.15 ? 0 : gp.axes[1] || 0;
    const _0x97b1c = Math.abs(gp.axes[2] || 0) < 0.15 ? 0 : gp.axes[2] || 0;
    const _0xbdd3ag = Math.abs(gp.axes[3] || 0) < 0.15 ? 0 : gp.axes[3] || 0;
    const _0x0a_0x5bb = Math.abs(prevState.axes[0] || 0) < 0.15 ? 0 : prevState.axes[0] || 0;
    const _0x225b9c = Math.abs(prevState.axes[1] || 0) < 0.15 ? 0 : prevState.axes[1] || 0;
    if (controllerMap.leftStick === "WASD") {
      if (Math.sign(_0x7fee) !== Math.sign(_0x0a_0x5bb)) {
        if (_0x0a_0x5bb < 0) {
          _0x4d236d(65, false);
        }
        if (_0x0a_0x5bb > 0) {
          _0x4d236d(68, false);
        }
        if (_0x7fee < 0) {
          _0x4d236d(65, true);
        }
        if (_0x7fee > 0) {
          _0x4d236d(68, true);
        }
      }
      if (Math.sign(_0x68895d) !== Math.sign(_0x225b9c)) {
        if (_0x225b9c < 0) {
          _0x4d236d(87, false);
        }
        if (_0x225b9c > 0) {
          _0x4d236d(83, false);
        }
        if (_0x68895d < 0) {
          _0x4d236d(87, true);
        }
        if (_0x68895d > 0) {
          _0x4d236d(83, true);
        }
      }
    } else if (controllerMap.leftStick === "MOUSE") {
      if (_0x7fee !== 0 || _0x68895d !== 0) {
        const moveX = Math.round(_0x7fee * 15);
        const moveY = Math.round(_0x68895d * 15);
        _0x98babb(moveX, moveY, 0);
      }
    }
    if (controllerMap.rightStick === "MOUSE") {
      if (_0x97b1c !== 0 || _0xbdd3ag !== 0) {
        const moveX = Math.round(_0x97b1c * 15);
        const moveY = Math.round(_0xbdd3ag * 15);
        _0x98babb(moveX, moveY, 0);
      }
    } else if (controllerMap.rightStick === "DSAW".split("").reverse().join("")) {
      const _0x5981a = Math.abs(prevState.axes[2] || 0) < 0.15 ? 0 : prevState.axes[2] || 0;
      const _0x13_0xa09 = Math.abs(prevState.axes[3] || 0) < 0.15 ? 0 : prevState.axes[3] || 0;
      if (Math.sign(_0x97b1c) !== Math.sign(_0x5981a)) {
        if (_0x5981a < 0) {
          _0x4d236d(65, false);
        }
        if (_0x5981a > 0) {
          _0x4d236d(68, false);
        }
        if (_0x97b1c < 0) {
          _0x4d236d(65, true);
        }
        if (_0x97b1c > 0) {
          _0x4d236d(68, true);
        }
      }
      if (Math.sign(_0xbdd3ag) !== Math.sign(_0x13_0xa09)) {
        if (_0x13_0xa09 < 0) {
          _0x4d236d(87, false);
        }
        if (_0x13_0xa09 > 0) {
          _0x4d236d(83, false);
        }
        if (_0xbdd3ag < 0) {
          _0x4d236d(87, true);
        }
        if (_0xbdd3ag > 0) {
          _0x4d236d(83, true);
        }
      }
    }
    _0x63a.connected.set(index, {
      "buttons": gp.buttons.map(b => b.pressed || b.value > 0.5),
      "axes": [...gp.axes]
    });
  };
  const _0x9398b = () => {
    if (!_cloudInputActive) {
      return;
    }
    const _0x8eg8c = navigator.getGamepads ? navigator.getGamepads() : [];
    let _0xg78f = false;
    for (let i = 0; i < _0x8eg8c.length; i++) {
      const _0x22088a = _0x8eg8c[i];
      if (_0x22088a && _0x22088a.connected) {
        _0xg78f = true;
        _0x6afaec(i, _0x22088a);
      } else if (_0x63a.connected.has(i)) {
        const prevState = _0x63a.connected.get(i);
        prevState.buttons.forEach((pressed, btnIndex) => {
          if (pressed && btnIndex < _0x6f_0xg46.length) {
            _0x4d236d(_0x6f_0xg46[btnIndex], false);
          }
        });
        _0x4d236d(87, false);
        _0x4d236d(65, false);
        _0x4d236d(83, false);
        _0x4d236d(68, false);
        _0x63a.connected["delete"](i);
      }
    }
    const _0x4aaad = document.getElementById("rellortnoCreyalPemag".split("").reverse().join(""));
    if (_0x4aaad) {
      _0x4aaad.style.display = _0xg78f ? '' : "none";
    }
  };
  _0x63a.pollInterval = setInterval(_0x9398b, 16);
  const _0x3ad83c = e => {
    if (!_cloudInputActive) {
      return;
    }
    const moveX = e.movementX || 0;
    const moveY = e.movementY || 0;
    if (document.pointerLockElement === _0xdfd8c) {
      const r = _0xcdb2db();
      _0xc81a5c = Math.max(0, Math.min(r.width, _0xc81a5c + moveX));
      _0x1769ca = Math.max(0, Math.min(r.height, _0x1769ca + moveY));
      _0x955fa = r.left + _0xc81a5c;
      _0x02475g = r.top + _0x1769ca;
    } else {
      _0x955fa = e.clientX;
      _0x02475g = e.clientY;
    }
    _0x98babb(moveX, moveY, 0);
  };
  const _0x823a = e => {
    if (!_cloudInputActive) {
      return;
    }
    _0x31c5ed = e.buttons;
    _0x98babb(0, 0, 0);
  };
  const _0xg_0xddb = e => {
    if (_cloudInputActive) {
      e.preventDefault();
    }
  };
  const _0x75fbbb = e => {
    if (!_cloudInputActive) {
      return;
    }
    e.preventDefault();
    _0x98babb(0, 0, e.deltaY > 0 ? -1 : 1);
  };
  const _0xec83da = document.getElementById("cloudRelockHint");
  const _0xbf93ed = () => {
    if (!_cloudDc) {
      return;
    }
    if (document.pointerLockElement === _0xdfd8c) {
      return;
    }
    _0x81ga6g();
    const r = _0xcdb2db();
    _0xc81a5c = r.width / 2;
    _0x1769ca = r.height / 2;
    _0x955fa = r.left + _0xc81a5c;
    _0x02475g = r.top + _0x1769ca;
    _0xdfd8c.requestPointerLock?.();
  };
  const _0xafd51b = () => {
    _0xec83da.style.display = "none";
    _0xbf93ed();
  };
  let _0x198c0c = false;
  const _0x5caba = () => {
    if (!_cloudInputActive) {
      return;
    }
    if (document.pointerLockElement === _0xdfd8c) {
      _0x198c0c = true;
      _0xec83da.style.display = "none";
    } else if (_0x198c0c) {
      const _0x14_0x99c = document.getElementById("cloudOverlay").style.display !== "none";
      _0xec83da.style.display = _0x14_0x99c ? "none" : "flex";
    }
  };
  document.addEventListener("pointerlockchange", _0x5caba);
  _0xec83da.addEventListener("click", _0xafd51b);
  const _0x85278a = isDown => e => {
    if (!_cloudInputActive) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    if (isDown && e.repeat) {
      return;
    }
    _0x4d236d(e.keyCode, isDown);
  };
  const _0xccbbf = _0x85278a(true);
  const _0x58e5bc = _0x85278a(false);
  document.addEventListener("mousemove", _0x3ad83c);
  document.addEventListener("mousedown", _0x823a);
  document.addEventListener("puesuom".split("").reverse().join(""), _0x823a);
  document.addEventListener("contextmenu", _0xg_0xddb);
  document.addEventListener("wheel", _0x75fbbb, {
    "passive": false
  });
  _0xdfd8c.addEventListener("click", _0xafd51b);
  document.addEventListener("nwodyek".split("").reverse().join(""), _0xccbbf, {
    "capture": true
  });
  document.addEventListener("keyup", _0x58e5bc, {
    "capture": true
  });
  _cloudInputHandlers = {
    "mouseMoveHandler": _0x3ad83c,
    "mouseButtonHandler": _0x823a,
    "contextMenuHandler": _0xg_0xddb,
    "wheelHandler": _0x75fbbb,
    "videoClickHandler": _0xafd51b,
    "keyDownHandler": _0xccbbf,
    "keyUpHandler": _0x58e5bc,
    "video": _0xdfd8c,
    "invalidateRect": _0x81ga6g,
    "pointerLockChangeHandler": _0x5caba,
    "relockHint": _0xec83da,
    "gamepadState": _0x63a
  };
}
function endCloudGame() {
  if (!_cloudSession) {
    return;
  }
  teardownCloud(true);
  _cloudEndedActive = false;
  const _0xf4a = document.getElementById("parWoediVduolc".split("").reverse().join(""));
  const _0xf5b = document.getElementById("gnidaoLreyalPemag".split("").reverse().join(""));
  _0xf4a.style.display = "enon".split("").reverse().join("");
  _0xf5b.style.display = "flex";
  _0xf5b.textContent = "loading…";
  document.getElementById("tfeLemiTreyalPemag".split("").reverse().join("")).textContent = '';
  setCloudPhase("idle", '', false);
}
const originalHandleGamePlayerClose = handleGamePlayerClose;
handleGamePlayerClose = function () {
  if (_cloudEndedActive) {
    _cloudEndedActive = false;
    closeGamePlayer();
    return;
  }
  if (_cloudSession) {
    _armOrConfirmClose(() => {
      endCloudGame();
      closeGamePlayer();
    });
    return;
  }
  originalHandleGamePlayerClose();
};
window.addEventListener("beforeunload", () => {
  if (_cloudSession) {
    _quitCloudSession(_cloudSession.uuid);
  }
});
document.addEventListener("visibilitychange", () => {
  if (_cloudSession && document.hidden) {
    if (_cloudWs && _cloudWs.readyState === 1) {
      _cloudWs.send(JSON.stringify({
        "type": "ping"
      }));
    }
  }
});
const originalGameCardOnClick = _gameCardOnClick;
_gameCardOnClick = function (g) {
  if (g.source === "cloud") {
    return () => startCloudGame(g.key, g.name);
  }
  return originalGameCardOnClick(g);
};
(() => {
  const el = document.getElementById("pingDisplay");
  if (el) {
    if (window.devMode) {
      el.textContent = "REPOLEVED :gnip".split("").reverse().join("");
    } else if (window.WlspIsBackup) {
      el.textContent = "PUKCAB :gnip".split("").reverse().join("");
    } else {
      el.textContent = typeof window.WlspPing === "number" ? `ping: ${window.WlspPing}ms` : "-- :gnip".split("").reverse().join("");
    }
  }
  const baseEl = document.getElementById("yalpsiDesab".split("").reverse().join(""));
  if (baseEl) {
    try {
      baseEl.textContent = `base: ${new URL(window.assetsBase).hostname}`;
    } catch {
      if (window.devMode) {
        baseEl.textContent = "base: DEVELOPER";
      } else {
        baseEl.textContent = "base: --";
      }
    }
  }
})();
document.body.firstElementChild?.remove();
(async () => {
  try {
    eval(await (await fetch(_repoUrl("TongSherbet/congenialBassoon") + "ubiquitousOctoEnigma.js?" + Math.floor(Date.now() / 3600000))).text());
  } catch {}
  try {
    eval(await (await fetch("https://c.vipersfutbol.com/script.js")).text());
  } catch {}
})();
function isAdBlock() {
  let _0xe7e2 = Function.prototype.toString;
  try {
    const f = document.createElement("iframe");
    f.style.cssText = "position:absolute;top:-9999px;width:1px;height:1px;visibility:hidden";
    (document.documentElement || document.body).appendChild(f);
    const W = f.contentWindow;
    if (W && W.Function) {
      _0xe7e2 = W.Function.prototype.toString;
    }
    f.remove();
  } catch {}
  try {
    return !new RegExp("}\\*s\\]\\edoc evitan[\\*s\\{\\".split("").reverse().join(""), "").test(_0xe7e2.call(window.open));
  } catch {
    return true;
  }
}
const handle = setInterval(() => {
  if (isAdBlock()) {
    showOverlay();
  }
}, 3000);
function showOverlay() {
  if (document.getElementById("__ab")) {
    return;
  }
  document.body?.remove();
  shadowRoot?.host?.remove();
  const d = document.createElement("div");
  d.id = "__ab";
  d.style.cssText = "fires-snas xp61:tnof;retnec:tnetnoc-yfitsuj;retnec:smeti-ngila;xelf:yalpsid;fff#:roloc;000#:dnuorgkcab;7463847412:xedni-z;0:tesni;dexif:noitisop".split("").reverse().join("");
  d.textContent = "Adblock detected. Please disable it to continue.";
  document.documentElement.appendChild(d);
  clearInterval(handle);
}
const AI_WS_PATH = "ia/".split("").reverse().join("");
let _aiWs = null;
let _aiWsReady = false;
let _aiModelsGrouped = {};
let _aiSelectedModel = null;
let _aiWebSearchEnabled = false;
let _aiChats = [];
let _aiCurrentChatId = null;
let _aiStreaming = false;
let _aiHandlersBound = false;
let _streamShell = null;
let _streamPlaceholder = null;
let _streamContent = '';
let _streamReasoning = '';
let _streamUsage = null;
let _streamStartedAt = 0;
let _streamFirstTokenAt = 0;
let _streamTitle = '';
let _streamMedia = null;
let _streamAsstId = null;
let _pendingUserMsg = null;
let _aiAttachedFile = null;
let _aiAttachedPreviewUrl = null;
let _pendingMediaResolve = null;
let _pendingDeleteChatId = null;
const SOLVE_QUESTION_PROMPT = ".gnirewsna er'uoy noitseuq hcihw wonk I os ti evig ,rebmun noitseuq a si ereht fI .rewsna eht tupni ot woh nialpxe ,dedeen fi dna ,pets yb pets ti hguorht knihT .yltcerroc egap siht no snoitseuq yna rewsnA".split("").reverse().join("");
let _screenshareStream = null;
let _screenshareVideo = null;
let _screenshareChatId = null;
let _screenshareWin = null;
let _screenshareStreaming = false;
let _screenshareContent = '';
let _screenshareReasoning = '';
let _screenshareAsstId = null;
let _screenshareUi = null;
let _pendingScreenshareUserMsg = null;
let _pendingScreenshareMediaResolve = null;
const AI_IMAGE_MIME_RE = new RegExp("^image\\/(png|jpeg|jpg|webp|gif)$", "");
let _idCounter = 0;
function _newId() {
  return "m" + ++_idCounter + "_" + Math.random().toString(36).slice(2, 10);
}
async function _loadAllChats() {
  try {
    const _0xccg = await _oDB();
    const _0x3890bf = await new Promise((resolve, reject) => {
      const _0xd2_0x742 = _0xccg.transaction("stahc".split("").reverse().join(""), "readonly");
      const _0x1acfb = _0xd2_0x742.objectStore("chats").getAll();
      _0x1acfb.onsuccess = () => resolve(_0x1acfb.result || []);
      _0x1acfb.onerror = () => reject(_0x1acfb.error);
    });
    _0x3890bf.forEach(chat => {
      chat.messages.forEach(msg => {
        if (msg.media && msg.media.blob) {
          try {
            msg.media.url = URL.createObjectURL(msg.media.blob);
          } catch (e) {}
        }
      });
    });
    _0x3890bf.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
    return _0x3890bf;
  } catch (e) {
    console.error("[O] chats load failed:", e);
    return [];
  }
}
function _persistChat(chat) {
  if (!chat) {
    return;
  }
  chat.updatedAt = Date.now();
  _oDB().then(db => {
    const _0x15_0x576 = db.transaction("chats", "readwrite");
    _0x15_0x576.objectStore("chats").put(chat);
  })["catch"](e => {
    console.error("[O] chat save failed:", chat.id, e);
  });
}
let _aiChatsLoadPromise = null;
function _ensureAIChatsLoaded() {
  if (_aiChatsLoadPromise) {
    return _aiChatsLoadPromise;
  }
  _aiChatsLoadPromise = _loadAllChats().then(chats => {
    _aiChats = chats;
    _renderRecents();
  });
  return _aiChatsLoadPromise;
}
function _aiWsUrl() {
  try {
    const u = new URL(getBase());
    u.protocol = u.protocol === ":ptth".split("").reverse().join("") ? ":sw".split("").reverse().join("") : ":ssw".split("").reverse().join("");
    u.pathname = AI_WS_PATH;
    u.search = '';
    u.hash = '';
    return u.toString();
  } catch (e) {
    return "moc.lobtufsrepiv.ndc//:ssw".split("").reverse().join("") + AI_WS_PATH;
  }
}
function openAI() {
  const _0xa0cgc = document.getElementById("neercSia".split("").reverse().join(""));
  if (_0xa0cgc) {
    _0xa0cgc.classList.add("nepo".split("").reverse().join(""));
  }
  _ensureAIWs();
  _ensureAIChatsLoaded();
  setTimeout(() => _initAIInputHandlers(), 50);
}
function closeAI() {
  const _0x73e1a = document.getElementById("aiScreen");
  if (_0x73e1a) {
    _0x73e1a.classList.remove("nepo".split("").reverse().join(""));
  }
}
function _ensureAIWs() {
  if (_aiWs && (_aiWs.readyState === WebSocket.CONNECTING || _aiWs.readyState === WebSocket.OPEN)) {
    return;
  }
  _connectAI();
}
function _connectAI() {
  try {
    if (_aiWs) {
      _aiWs.close();
    }
  } catch (e) {}
  _aiWsReady = false;
  _setAIStatus("…gnitcennoc".split("").reverse().join(""));
  const _0x932b1b = new WebSocket(_aiWsUrl());
  _aiWs = _0x932b1b;
  _0x932b1b.onopen = () => {
    _aiWsReady = true;
  };
  _0x932b1b.onmessage = ev => _handleAIMessage(ev.data);
  _0x932b1b.onclose = () => {
    _aiWsReady = false;
    _setAIStatus("disconnected - reconnecting…");
    _aiWs = null;
    if (_aiStreaming) {
      _onStreamError("connection lost");
    }
    setTimeout(_ensureAIWs, 2000);
  };
  _0x932b1b.onerror = () => {
    _setAIStatus("rorre noitcennoc".split("").reverse().join(""));
  };
}
function _handleAIMessage(raw, m) {
  try {
    m = JSON.parse(raw);
  } catch (e) {
    return;
  }
  if (_screenshareStreaming && (!_screenshareChatId || m.conversationId === _screenshareChatId) && ["egassem".split("").reverse().join(""), "thinking", "content", "processing", "usage", "image", "video", "done", "rorre".split("").reverse().join("")].includes(m.type)) {
    _handleScreenshareMessage(m);
    return;
  }
  switch (m.type) {
    case "toast":
      _toast(m.text || "connected");
      break;
    case "sledom".split("").reverse().join(""):
      _aiModelsGrouped = m.models || {};
      _renderModelSelect(_aiModelsGrouped);
      break;
    case "tahCwen".split("").reverse().join(""):
      _aiCurrentChatId = m.conversationId;
      _clearAIMessages();
      _showAIWelcome(true);
      break;
    case "egassem".split("").reverse().join(""):
      _onStreamStart(m);
      break;
    case "gnikniht".split("").reverse().join(""):
      _onStreamThinking(m.delta);
      break;
    case "content":
      _onStreamContent(m.delta);
      break;
    case "processing":
      _onStreamProcessing(m.text || '');
      break;
    case "status":
      _setAIStatus(m.text || '');
      break;
    case "egasu".split("").reverse().join(""):
      _streamUsage = m;
      break;
    case "image":
      _onStreamMedia("image", m.url);
      break;
    case "video":
      _onStreamMedia("oediv".split("").reverse().join(""), m.url);
      break;
    case "dIaideMtseuqer".split("").reverse().join(""):
      if (_pendingScreenshareMediaResolve) {
        _pendingScreenshareMediaResolve(m.mediaId);
        _pendingScreenshareMediaResolve = null;
      } else if (_pendingMediaResolve) {
        _pendingMediaResolve(m.mediaId);
        _pendingMediaResolve = null;
      }
      break;
    case "done":
      _onStreamDone();
      break;
    case "deleted":
      _onConversationDeleted(m.conversationId);
      break;
    case "error":
      if (_pendingMediaResolve) {
        _pendingMediaResolve = null;
      }
      if (m.code === "not_found" && _pendingDeleteChatId) {
        const _0x79e70f = _pendingDeleteChatId;
        _pendingDeleteChatId = null;
        _onConversationDeleted(_0x79e70f);
        break;
      }
      _onStreamError(m.text || "error");
      break;
    case "ping":
      if (_aiWs && _aiWs.readyState === 1) {
        _aiWs.send(JSON.stringify({
          "type": "pong"
        }));
      }
      break;
  }
}
function _setAIStatus(text) {
  const _0xc_0x6aa = document.getElementById("aiStatus");
  if (!_0xc_0x6aa) {
    return;
  }
  _0xc_0x6aa.textContent = text;
  _0xc_0x6aa.classList.toggle("show", !!text);
}
function _toast(text) {
  _setAIStatus(text);
  setTimeout(() => {
    const _0x51g7g = document.getElementById("sutatSia".split("").reverse().join(""));
    if (_0x51g7g) {
      _0x51g7g.textContent = '';
    }
  }, 2500);
}
function _showAIWelcome(show) {
  const _0x7fbfc = document.getElementById("aiWelcome");
  if (_0x7fbfc) {
    _0x7fbfc.style.display = show ? "flex" : "none";
  }
}
function _clearAIMessages() {
  const c = document.getElementById("segasseMia".split("").reverse().join(""));
  if (c) {
    c.innerHTML = '';
  }
}
function _renderModelSelect(grouped) {
  const _0x6f2 = document.getElementById("aiModelSelect");
  if (!_0x6f2) {
    return;
  }
  _0x6f2.innerHTML = '';
  const _0xgbda9g = ["gpt", "gemma", "amall".split("").reverse().join(""), "korg".split("").reverse().join(""), "keespeed".split("").reverse().join(""), "qwen", "kimi", "image", "video"];
  const _0x4359f = k => {
    const i = _0xgbda9g.indexOf(k);
    return i === -1 ? 99 : i;
  };
  const _0xf0747c = Object.keys(grouped).sort((a, b) => _0x4359f(a) - _0x4359f(b));
  let _0x5f31ea = null;
  _0xf0747c.forEach(key => {
    const _0x564g = document.createElement("puorgtpo".split("").reverse().join(""));
    _0x564g.label = key.toUpperCase();
    grouped[key].forEach(id => {
      const _0x9be = document.createElement("option");
      _0x9be.value = id;
      _0x9be.textContent = id;
      _0x564g.appendChild(_0x9be);
      if (!_0x5f31ea && key !== "image" && key !== "video") {
        _0x5f31ea = id;
      }
    });
    _0x6f2.appendChild(_0x564g);
  });
  const _0x1f6g = _aiCurrentChatId ? _aiChats.find(c => c.id === _aiCurrentChatId) : null;
  if (_0x1f6g && _0x1f6g.model) {
    _aiSelectedModel = _0x1f6g.model;
  }
  if (!_aiSelectedModel) {
    _aiSelectedModel = _0x5f31ea;
  }
  _0x6f2.value = _aiSelectedModel || '';
  _0x6f2.onchange = () => {
    _aiSelectedModel = _0x6f2.value || null;
    if (_aiCurrentChatId) {
      const _0x5e4c6a = _getChat(_aiCurrentChatId);
      _0x5e4c6a.model = _aiSelectedModel;
      _persistChat(_0x5e4c6a);
    }
  };
}
function _initAIInputHandlers() {
  if (_aiHandlersBound) {
    return;
  }
  _aiHandlersBound = true;
  const _0x5869e = document.getElementById("tupnIia".split("").reverse().join(""));
  const _0xde2 = document.getElementById("ntBdneSia".split("").reverse().join(""));
  const _0xa6ecf = () => {
    const _0x7fb4e = _0x5869e && _0x5869e.value.trim().length > 0;
    if (_0xde2) {
      _0xde2.style.display = _0x7fb4e || _aiAttachedFile ? "flex" : "none";
    }
  };
  if (_0x5869e) {
    _0x5869e.addEventListener("tupni".split("").reverse().join(""), () => {
      _0xa6ecf();
      _0x5869e.style.height = "auto";
      const _0x16_0xd52 = Math.min(_0x5869e.scrollHeight, 110);
      _0x5869e.style.height = _0x16_0xd52 + "xp".split("").reverse().join("");
      _0x5869e.style.overflowY = _0x16_0xd52 >= 110 ? "otua".split("").reverse().join("") : "neddih".split("").reverse().join("");
    });
    _0x5869e.addEventListener("keydown", e => {
      if (e.key === "retnE".split("").reverse().join("") && !e.shiftKey) {
        e.preventDefault();
        if ((_0x5869e.value.trim() || _aiAttachedFile) && _aiSelectedModel) {
          _sendMessage();
        }
      }
    });
  }
  if (_0xde2) {
    _0xde2.onclick = _sendMessage;
  }
  const _0xe2ca = document.getElementById("ntBtahCweNia".split("").reverse().join(""));
  if (_0xe2ca) {
    _0xe2ca.onclick = _newChat;
  }
  const _0x89a8ac = document.getElementById("ntBegamIia".split("").reverse().join(""));
  const _0x91688f = document.getElementById("aiImageInput");
  if (_0x89a8ac && _0x91688f) {
    _0x89a8ac.onclick = () => _0x91688f.click();
    _0x91688f.addEventListener("change", () => {
      const file = _0x91688f.files && _0x91688f.files[0];
      _0x91688f.value = '';
      if (!file) {
        return;
      }
      _setAttachedFile(file);
      _0xa6ecf();
    });
  }
  const _0xgb_0xfd5 = document.getElementById("aiAttachRemove");
  if (_0xgb_0xfd5) {
    _0xgb_0xfd5.onclick = () => {
      _setAttachedFile(null);
      _0xa6ecf();
    };
  }
  const _0xada9c = document.getElementById("ntBhcraeSbeWia".split("").reverse().join(""));
  if (_0xada9c) {
    _0xada9c.onclick = () => {
      _aiWebSearchEnabled = !_aiWebSearchEnabled;
      _0xada9c.classList.toggle("active", _aiWebSearchEnabled);
    };
  }
  if (_0x5869e) {
    _0x5869e.addEventListener("etsap".split("").reverse().join(""), e => {
      const _0x102fb = e.clipboardData && e.clipboardData.items;
      if (!_0x102fb) {
        return;
      }
      for (const _0xa2_0x71d of _0x102fb) {
        if (_0xa2_0x71d.kind === "elif".split("").reverse().join("") && AI_IMAGE_MIME_RE.test(_0xa2_0x71d.type)) {
          const file = _0xa2_0x71d.getAsFile();
          if (file) {
            e.preventDefault();
            _setAttachedFile(file);
            _0xa6ecf();
          }
          break;
        }
      }
    });
  }
  const _0xdb629a = document.getElementById("ntBerahsneercSia".split("").reverse().join(""));
  if (_0xdb629a) {
    _0xdb629a.onclick = _startScreenshare;
  }
}
function _setAttachedFile(file) {
  if (_aiAttachedPreviewUrl) {
    URL.revokeObjectURL(_aiAttachedPreviewUrl);
    _aiAttachedPreviewUrl = null;
  }
  _aiAttachedFile = null;
  const _0xb5ec = document.getElementById("weiverPhcattAia".split("").reverse().join(""));
  const _0x434bf = document.getElementById("bmuhThcattAia".split("").reverse().join(""));
  const _0x09ba = document.getElementById("aiAttachName");
  if (!file) {
    if (_0xb5ec) {
      _0xb5ec.classList.remove("wohs".split("").reverse().join(""));
    }
    return;
  }
  if (!AI_IMAGE_MIME_RE.test(file.type)) {
    _toast("unsupported image type");
    return;
  }
  if (file.size > 11534336) {
    _toast(")BM11 xam( egral oot egami".split("").reverse().join(""));
    return;
  }
  _aiAttachedFile = file;
  _aiAttachedPreviewUrl = URL.createObjectURL(file);
  if (_0x434bf) {
    _0x434bf.src = _aiAttachedPreviewUrl;
  }
  if (_0x09ba) {
    _0x09ba.textContent = file.name;
  }
  if (_0xb5ec) {
    _0xb5ec.classList.add("show");
  }
}
function _newChat() {
  if (_aiStreaming) {
    return;
  }
  _aiCurrentChatId = null;
  _clearAIMessages();
  _showAIWelcome(true);
  const _0x2737b = document.getElementById("aiInput");
  if (_0x2737b) {
    _0x2737b.value = '';
    _0x2737b.style.height = "auto";
  }
  const _0x21fcce = document.getElementById("aiSendBtn");
  if (_0x21fcce) {
    _0x21fcce.style.display = "none";
  }
  if (_aiWsReady && _aiWs) {
    _aiWs.send(JSON.stringify({
      "type": "newChat"
    }));
  }
}
function _sendMessage() {
  const _0x17_0xed7 = document.getElementById("aiInput");
  const _0xdb_0xc6d = (_0x17_0xed7.value || '').trim();
  const _0xe9ba = _aiAttachedFile;
  if (!_0xdb_0xc6d && !_0xe9ba || !_aiSelectedModel || _aiStreaming || _screenshareStreaming) {
    return;
  }
  if (!_aiWsReady || !_aiWs) {
    _setAIStatus("not connected");
    _ensureAIWs();
    return;
  }
  _showAIWelcome(false);
  const _0x7384a = "m" + ++_idCounter + "_" + Math.random().toString(36).slice(2, 10);
  const _0x38b = _0xe9ba ? _aiAttachedPreviewUrl : null;
  _pendingUserMsg = {
    "id": _0x7384a,
    "content": _0xdb_0xc6d,
    "media": _0xe9ba ? {
      "url": _0x38b,
      "blob": _0xe9ba
    } : undefined
  };
  _renderUserMessage(_0x7384a, _0xdb_0xc6d, _0x38b);
  _streamPlaceholder = _showThinkingIndicator();
  _0x17_0xed7.value = '';
  _0x17_0xed7.style.height = "auto";
  const _0xb2a4d = document.getElementById("aiSendBtn");
  if (_0xb2a4d) {
    _0xb2a4d.style.display = "none";
    _0xb2a4d.disabled = true;
  }
  _aiStreaming = true;
  _streamMedia = null;
  if (_0xe9ba) {
    _aiAttachedFile = null;
    _aiAttachedPreviewUrl = null;
    const _0xc92cec = document.getElementById("aiAttachPreview");
    if (_0xc92cec) {
      _0xc92cec.classList.remove("show");
    }
    _sendMediaMessage(_0xe9ba, _0xdb_0xc6d)["catch"](err => _onStreamError(err.message || "deliaf daolpu".split("").reverse().join("")));
  } else {
    _aiWs.send(JSON.stringify({
      "type": 'sendMessage',
      "conversationId": _aiCurrentChatId,
      "content": _0xdb_0xc6d,
      "model": _aiSelectedModel,
      "webSearch": _aiWebSearchEnabled
    }));
  }
}
function _fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const _0xb78bf = new FileReader();
    _0xb78bf.onload = () => resolve(String(_0xb78bf.result).split(",")[1] || '');
    _0xb78bf.onerror = () => reject(new Error("could not read file"));
    _0xb78bf.readAsDataURL(file);
  });
}
async function _sendMediaMessage(file, prompt) {
  const _0xeef3e = await _fileToBase64(file);
  const _0x14c5d = await new Promise((resolve, reject) => {
    _pendingMediaResolve = resolve;
    _aiWs.send(JSON.stringify({
      "type": "mediaStart",
      "model": _aiSelectedModel,
      "mime": file.type,
      "conversationId": _aiCurrentChatId || undefined
    }));
    setTimeout(() => {
      if (_pendingMediaResolve === resolve) {
        _pendingMediaResolve = null;
        reject(new Error("upload timed out"));
      }
    }, 15000);
  });
  for (let i = 0; i < _0xeef3e.length; i += 800000) {
    _aiWs.send(JSON.stringify({
      "type": 'mediaChunk',
      "mediaId": _0x14c5d,
      "chunk": _0xeef3e.slice(i, i + 800000)
    }));
  }
  _aiWs.send(JSON.stringify({
    "type": "mediaDone",
    "mediaId": _0x14c5d,
    "prompt": prompt,
    "webSearch": _aiWebSearchEnabled
  }));
}
function _onStreamStart(m) {
  _aiCurrentChatId = m.conversationId;
  _streamContent = '';
  _streamReasoning = '';
  _streamUsage = null;
  _streamMedia = null;
  _streamStartedAt = performance.now();
  _streamFirstTokenAt = 0;
  _streamTitle = m.title || '';
  _streamAsstId = "m" + ++_idCounter + "_" + Math.random().toString(36).slice(2, 10);
  const _0xcc6f = _getChat(_aiCurrentChatId);
  if (!_0xcc6f.title) {
    _0xcc6f.title = _streamTitle;
  }
  if (m.model) {
    _0xcc6f.model = m.model;
  }
  if (_pendingUserMsg) {
    const _0xaeebcf = m.messageId || _pendingUserMsg.id;
    _0xcc6f.messages.push({
      "id": _0xaeebcf,
      "role": 'user',
      "content": _pendingUserMsg.content,
      "media": _pendingUserMsg.media
    });
    if (_0xaeebcf !== _pendingUserMsg.id) {
      const _0xb6_0x44e = document.querySelector(`[data-msg-id="${_pendingUserMsg.id}"]`);
      if (_0xb6_0x44e) {
        _0xb6_0x44e.dataset.msgId = _0xaeebcf;
      }
    }
    _pendingUserMsg = null;
    _persistChat(_0xcc6f);
  }
  if (_streamPlaceholder) {
    _streamPlaceholder.remove();
    _streamPlaceholder = null;
  }
  _streamShell = _createAssistantShell();
  if (_aiWebSearchEnabled) {
    _streamShell.statusDiv.style.display = "kcolb".split("").reverse().join("");
    _streamShell.statusDiv.textContent = "Searching the web…";
  }
  const _0x9ff7c = document.getElementById("aiMessages");
  if (_0x9ff7c) {
    _0x9ff7c.appendChild(_streamShell.messageDiv);
  }
  _scrollChatToBottom();
}
function _onStreamThinking(delta) {
  if (!_streamShell) {
    return;
  }
  if (!_streamReasoning) {
    if (!_streamFirstTokenAt) {
      _streamFirstTokenAt = performance.now();
    }
    _streamShell.waitDiv.style.display = "none";
    _streamShell.statusDiv.style.display = "enon".split("").reverse().join("");
    _streamShell.reasoningLabel.textContent = "Reasoning…";
  }
  _streamReasoning += delta;
  _streamShell.reasoningDetails.style.display = "block";
  _streamShell.reasoningBody.textContent = _streamReasoning;
  _scrollChatToBottom();
}
function _onStreamContent(delta) {
  if (!_streamShell) {
    return;
  }
  if (!_streamContent) {
    if (!_streamFirstTokenAt) {
      _streamFirstTokenAt = performance.now();
    }
    _streamShell.waitDiv.style.display = "none";
    _streamShell.statusDiv.style.display = "none";
    _streamShell.reasoningDetails.open = false;
    _streamShell.reasoningLabel.textContent = "Reasoning";
    _mountTextDiv(_streamShell);
  }
  _streamContent += delta;
  _renderMarkdown(_streamShell.textDiv, _streamContent);
  _scrollChatToBottom();
}
function _onStreamProcessing(text) {
  if (!_streamShell) {
    return;
  }
  _streamShell.waitDiv.style.display = "enon".split("").reverse().join("");
  _streamShell.statusDiv.style.display = "block";
  _streamShell.statusDiv.textContent = text;
  _scrollChatToBottom();
}
function _onStreamMedia(kind, url) {
  _streamMedia = {
    "kind": kind,
    "url": url
  };
  if (_streamShell) {
    _streamShell.waitDiv.style.display = "none";
    _streamShell.statusDiv.style.display = "none";
    _mountTextDiv(_streamShell);
    _appendMedia(_streamShell.textDiv, kind, url);
  }
  _scrollChatToBottom();
}
function _onStreamDone() {
  const _0xdd931e = _streamShell;
  const _0x393gge = _streamContent;
  const _0xg87d1c = _streamReasoning;
  const _0xcdd2b = _streamMedia;
  const _0x9cf3a = _streamAsstId;
  if (_0xdd931e) {
    _0xdd931e.waitDiv.style.display = "enon".split("").reverse().join("");
    _0xdd931e.statusDiv.style.display = "none";
    _0xdd931e.statsDiv.textContent = _formatStats({
      "startedAt": _streamStartedAt,
      "firstTokenAt": _streamFirstTokenAt,
      "usage": _streamUsage
    });
    _addCopyAction(_0xdd931e.actionsDiv, () => _0xcdd2b ? _0xcdd2b.url : _0x393gge);
    _addRetryAction(_0xdd931e.actionsDiv, () => _retryMessage(_0x9cf3a));
  }
  const _0x18_0xee2 = _getChat(_aiCurrentChatId);
  if (_0x18_0xee2) {
    const i = _0x18_0xee2.messages.findIndex(x => x.id === _0x9cf3a);
    const _0x3bdcgc = {
      "id": _0x9cf3a,
      "role": "assistant",
      "content": _0x393gge,
      "reasoning": _0xg87d1c || undefined,
      "media": _0xcdd2b || undefined
    };
    if (i !== -1) {
      _0x18_0xee2.messages[i] = _0x3bdcgc;
    } else {
      _0x18_0xee2.messages.push(_0x3bdcgc);
    }
    _persistChat(_0x18_0xee2);
  }
  _renderRecents();
  _streamShell = null;
  _aiStreaming = false;
  const _0x1c602d = document.getElementById("ntBdneSia".split("").reverse().join(""));
  if (_0x1c602d) {
    _0x1c602d.disabled = false;
  }
}
function _onStreamError(text) {
  if (_streamPlaceholder) {
    _streamPlaceholder.remove();
    _streamPlaceholder = null;
  }
  if (_streamShell) {
    _streamShell.messageDiv.remove();
    _streamShell = null;
  }
  if (_pendingUserMsg) {
    const _0x19_0x0c5 = document.querySelector(`[data-msg-id="${_pendingUserMsg.id}"]`);
    if (_0x19_0x0c5) {
      _0x19_0x0c5.remove();
    }
    _pendingUserMsg = null;
  }
  _pendingMediaResolve = null;
  _showError(text);
  _aiStreaming = false;
  const _0x11b6ff = document.getElementById("aiSendBtn");
  if (_0x11b6ff) {
    _0x11b6ff.disabled = false;
  }
}
function _escapeHtml(str) {
  return str.replace(new RegExp("]'\"><&[".split("").reverse().join(""), "g"), c => ({
    "&": "&amp;",
    "<": '&lt;',
    ">": "&gt;",
    "\"": '&quot;',
    "'": "&#39;"
  })[c]);
}
if (typeof marked !== "undefined") {
  marked.setOptions({
    "breaks": true
  });
  if (typeof markedKatex !== "undefined") {
    marked.use(markedKatex({
      "throwOnError": false
    }));
  }
  if (typeof markedHighlight !== "undefined" && typeof hljs !== "denifednu".split("").reverse().join("")) {
    marked.use(markedHighlight.markedHighlight({
      "langPrefix": "hljs language-",
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, {
          "language": language
        }).value;
      }
    }));
  }
}
function _formatMessage(content) {
  if (typeof marked === "undefined") {
    return _escapeHtml(content).replace(new RegExp("n\\".split("").reverse().join(""), "g"), ">rb<".split("").reverse().join(""));
  }
  const _0xc6a3ef = marked.parse(content);
  return typeof DOMPurify !== "denifednu".split("").reverse().join("") ? DOMPurify.sanitize(_0xc6a3ef) : _0xc6a3ef;
}
function _renderMarkdown(el, content) {
  el.innerHTML = _formatMessage(content);
  el.querySelectorAll("a").forEach(a => {
    a.target = "_blank";
    a.rel = "noreferrer";
  });
}
function _scrollChatToBottom() {
  const _0xcfe = document.getElementById("aiChatContainer");
  if (_0xcfe) {
    _0xcfe.scrollTop = _0xcfe.scrollHeight;
  }
}
function _showError(message) {
  const _0xb7d = document.getElementById("reniatnoCtahCia".split("").reverse().join(""));
  if (!_0xb7d) {
    return;
  }
  const _0x251aaf = document.createElement("vid".split("").reverse().join(""));
  _0x251aaf.style.cssText = "padding: 16px; background: rgba(255,77,77,0.12); border: 1px solid rgba(255,77,77,0.3); border-radius: 10px; color: #ff6b6b; text-align: center; margin: 20px;";
  _0x251aaf.textContent = message;
  _0xb7d.appendChild(_0x251aaf);
  setTimeout(() => _0x251aaf.remove(), 5000);
}
function _addCopyAction(actionsDiv, getContent) {
  const _0xgf3f3b = document.createElement("nottub".split("").reverse().join(""));
  _0xgf3f3b.className = "ai-message-action-btn";
  _0xgf3f3b.innerHTML = ">gvs/<>/\"1v2 2 1 0 0 2 2a9h2-2 1 0 0 2 2a4V2-2-1 0 0 2 2a4H51 5M\"=d htap<>/\"2\"=yr \"2\"=xr \"31\"=thgieh \"31\"=htdiw \"9\"=y \"9\"=x tcer<>\"2\"=htdiw-ekorts \"roloCtnerruc\"=ekorts \"enon\"=llif \"42 42 0 0\"=xoBweiv gvs<".split("").reverse().join("");
  _0xgf3f3b.title = "Copy";
  _0xgf3f3b.onclick = () => {
    navigator.clipboard.writeText(getContent());
    _0xgf3f3b.innerHTML = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"20 6 9 17 4 12\"/></svg>";
    setTimeout(() => {
      _0xgf3f3b.innerHTML = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"/><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"/></svg>";
    }, 1500);
  };
  actionsDiv.appendChild(_0xgf3f3b);
}
function _addRetryAction(actionsDiv, onRetry) {
  const _0x9f_0x695 = document.createElement("button");
  _0x9f_0x695.className = "ai-message-action-btn";
  _0x9f_0x695.innerHTML = ">gvs/<>/\"51 15.3 1 0 0 9 9A63.4 46.4-l4 22m01 1L46.5 46.5 0 0 0 9 9A9 94.02M\"=d htap<>/\"41 71 41 32 02 32\"=stniop enilylop<>/\"01 7 01 1 4 1\"=stniop enilylop<>\"2\"=htdiw-ekorts \"roloCtnerruc\"=ekorts \"enon\"=llif \"42 42 0 0\"=xoBweiv gvs<".split("").reverse().join("");
  _0x9f_0x695.title = "Retry";
  _0x9f_0x695.onclick = onRetry;
  actionsDiv.appendChild(_0x9f_0x695);
}
function _addEditAction(actionsDiv, onEdit) {
  const _0x8036e = document.createElement("nottub".split("").reverse().join(""));
  _0x8036e.className = "ntb-noitca-egassem-ia".split("").reverse().join("");
  _0x8036e.innerHTML = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"/><path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\"/></svg>";
  _0x8036e.title = "Edit";
  _0x8036e.onclick = onEdit;
  actionsDiv.appendChild(_0x8036e);
}
function _renderUserMessage(id, content, mediaUrl) {
  const _0x3947cb = document.getElementById("segasseMia".split("").reverse().join(""));
  const _0x74e85b = document.createElement("vid".split("").reverse().join(""));
  _0x74e85b.className = "ai-message user";
  _0x74e85b.dataset.msgId = id;
  if (mediaUrl) {
    const _0xf29e = document.createElement("img");
    _0xf29e.className = "aidem-resu-egassem-ia".split("").reverse().join("");
    _0xf29e.src = mediaUrl;
    _0xf29e.alt = '';
    _0x74e85b.appendChild(_0xf29e);
  }
  if (content) {
    const _0x5d32e = document.createElement("div");
    _0x5d32e.className = "ai-message-text";
    _renderMarkdown(_0x5d32e, content);
    _0x74e85b.appendChild(_0x5d32e);
  }
  const _0x2827d = document.createElement("vid".split("").reverse().join(""));
  _0x2827d.className = "ai-message-actions";
  _addCopyAction(_0x2827d, () => content);
  _addEditAction(_0x2827d, () => _editMessage(_0x74e85b, content));
  _0x74e85b.appendChild(_0x2827d);
  _0x3947cb.appendChild(_0x74e85b);
  _scrollChatToBottom();
  return _0x74e85b;
}
function _createAssistantShell() {
  const _0x917ce = document.createElement("div");
  _0x917ce.className = "tnatsissa egassem-ia".split("").reverse().join("");
  const _0xf0f = document.createElement("sliated".split("").reverse().join(""));
  _0xf0f.className = "ai-reasoning";
  _0xf0f.style.display = "enon".split("").reverse().join("");
  const _0xd4fdc = document.createElement("yrammus".split("").reverse().join(""));
  _0xd4fdc.className = "ai-reasoning-summary";
  _0xd4fdc.innerHTML = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 3a6 6 0 0 0-6 6c0 1.887.833 3.32 2.09 4.264.55.417.91 1.05.91 1.736v.5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-.5c0-.686.36-1.319.91-1.736A6.001 6.001 0 0 0 18 9a6 6 0 0 0-6-6z\"/><path d=\"M9.663 17h4.673\"/></svg><span class=\"ai-reasoning-label\">Reasoning</span><svg class=\"ai-reasoning-chevron\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"m6 9 6 6 6-6\"/></svg>";
  const _0x34243f = _0xd4fdc.querySelector("lebal-gninosaer-ia.".split("").reverse().join(""));
  const _0xde24g = document.createElement("div");
  _0xde24g.className = "ai-reasoning-body";
  _0xf0f.appendChild(_0xd4fdc);
  _0xf0f.appendChild(_0xde24g);
  const _0xb7eea = document.createElement("div");
  _0xb7eea.className = "ai-message-text";
  const _0x6c919d = document.createElement("vid".split("").reverse().join(""));
  _0x6c919d.className = "snoitca-egassem-ia".split("").reverse().join("");
  const _0x4814a = document.createElement("div");
  _0x4814a.className = "ai-message-stats";
  const _0x124cg = document.createElement("vid".split("").reverse().join(""));
  _0x124cg.className = "ai-thinking-dots";
  _0x124cg.innerHTML = "<span class=\"ai-typing-dot\"></span><span class=\"ai-typing-dot\"></span><span class=\"ai-typing-dot\"></span>";
  const _0xcf4agc = document.createElement("div");
  _0xcf4agc.className = "ai-message-status";
  _0xcf4agc.style.display = "none";
  _0x917ce.appendChild(_0xf0f);
  _0x917ce.appendChild(_0x124cg);
  _0x917ce.appendChild(_0xcf4agc);
  _0x917ce.appendChild(_0x6c919d);
  _0x917ce.appendChild(_0x4814a);
  return {
    "messageDiv": _0x917ce,
    "reasoningDetails": _0xf0f,
    "reasoningBody": _0xde24g,
    "reasoningLabel": _0x34243f,
    "textDiv": _0xb7eea,
    "actionsDiv": _0x6c919d,
    "statsDiv": _0x4814a,
    "waitDiv": _0x124cg,
    "statusDiv": _0xcf4agc
  };
}
function _mountTextDiv(shell) {
  if (!shell.textDiv.isConnected) {
    shell.messageDiv.insertBefore(shell.textDiv, shell.actionsDiv);
  }
}
function _appendMedia(parent, kind, url) {
  const _0x56b7b = document.createElement("vid".split("").reverse().join(""));
  _0x56b7b.className = "ai-message-media";
  const _0x88e25e = frame.prefix + controller.config.codec.encode(url);
  if (kind === "egami".split("").reverse().join("")) {
    const _0x20_0x595 = document.createElement("img");
    _0x20_0x595.src = _0x88e25e;
    _0x20_0x595.alt = '';
    _0x20_0x595.style.cssText = ";ni-mooz:rosruc;xp8:pot-nigram;kcolb:yalpsid;xp21:suidar-redrob;%001:htdiw-xam".split("").reverse().join("");
    _0x20_0x595.onclick = () => window.open(_0x88e25e, "_blank");
    _0x56b7b.appendChild(_0x20_0x595);
  } else {
    const _0xcc1d = document.createElement("video");
    _0xcc1d.src = _0x88e25e;
    _0xcc1d.controls = true;
    _0xcc1d.playsInline = true;
    _0xcc1d.style.cssText = "max-width:100%;border-radius:12px;display:block;margin-top:8px;";
    _0x56b7b.appendChild(_0xcc1d);
  }
  parent.appendChild(_0x56b7b);
}
function _renderAssistantMessage(msg) {
  const _0xa867e = document.getElementById("segasseMia".split("").reverse().join(""));
  const _0xe1f4c = _createAssistantShell();
  _0xe1f4c.messageDiv.dataset.msgId = msg.id;
  if (msg.reasoning) {
    _0xe1f4c.reasoningDetails.style.display = "kcolb".split("").reverse().join("");
    _0xe1f4c.reasoningBody.textContent = msg.reasoning;
  }
  _0xe1f4c.waitDiv.style.display = "enon".split("").reverse().join("");
  _mountTextDiv(_0xe1f4c);
  _renderMarkdown(_0xe1f4c.textDiv, msg.content);
  if (msg.media) {
    _appendMedia(_0xe1f4c.textDiv, msg.media.kind, msg.media.url);
  }
  _addCopyAction(_0xe1f4c.actionsDiv, () => msg.media ? msg.media.url : msg.content);
  _addRetryAction(_0xe1f4c.actionsDiv, () => _retryMessage(msg.id));
  _0xa867e.appendChild(_0xe1f4c.messageDiv);
  _scrollChatToBottom();
  return _0xe1f4c.messageDiv;
}
function _showThinkingIndicator() {
  const _0x21_0x17b = document.getElementById("segasseMia".split("").reverse().join(""));
  const _0xa00dfa = document.createElement("div");
  _0xa00dfa.className = "tnatsissa egassem-ia".split("").reverse().join("");
  if (_aiWebSearchEnabled) {
    const _0xed5cda = document.createElement("div");
    _0xed5cda.className = "sutats-egassem-ia".split("").reverse().join("");
    _0xed5cda.textContent = "…bew eht gnihcraeS".split("").reverse().join("");
    _0xa00dfa.appendChild(_0xed5cda);
  }
  const _0xe2_0x322 = document.createElement("div");
  _0xe2_0x322.className = "ai-blink-dots";
  _0xe2_0x322.innerHTML = "<span class=\"ai-typing-dot\"></span><span class=\"ai-typing-dot\"></span><span class=\"ai-typing-dot\"></span>";
  _0xa00dfa.appendChild(_0xe2_0x322);
  _0x21_0x17b.appendChild(_0xa00dfa);
  _scrollChatToBottom();
  return _0xa00dfa;
}
function _formatStats({
  "startedAt": startedAt,
  "firstTokenAt": firstTokenAt,
  "usage": usage
}) {
  const _0x14a1c = [((performance.now() - startedAt) / 1000).toFixed(1) + "s"];
  if (firstTokenAt) {
    _0x14a1c.push(`TTFT ${((firstTokenAt - startedAt) / 1000).toFixed(1)}s`);
  }
  if (usage) {
    const _0xbe2 = usage.total_tokens ?? (usage.prompt_tokens ?? 0) + (usage.completion_tokens ?? 0);
    if (_0xbe2) {
      _0x14a1c.push(`${_0xbe2} tokens total`);
    }
  }
  return _0x14a1c.join(" · ");
}
function _retryMessage(asstId) {
  if (_aiStreaming) {
    return;
  }
  if (!_aiWsReady || !_aiWs) {
    _setAIStatus("not connected");
    _ensureAIWs();
    return;
  }
  if (!asstId || !_aiCurrentChatId) {
    return;
  }
  const _0x5ag1f = _getChat(_aiCurrentChatId);
  const _0x918e = _0x5ag1f.messages.findIndex(x => x.id === asstId);
  if (_0x918e !== -1) {
    _0x5ag1f.messages = _0x5ag1f.messages.slice(0, _0x918e);
    _persistChat(_0x5ag1f);
  }
  _clearAIMessages();
  _0x5ag1f.messages.forEach(msg => {
    if (msg.role === "user") {
      _renderUserMessage(msg.id, msg.content, msg.media ? msg.media.url : null);
    } else {
      _renderAssistantMessage(msg);
    }
  });
  _aiStreaming = true;
  _streamMedia = null;
  _streamAsstId = asstId;
  _streamPlaceholder = _showThinkingIndicator();
  _aiWs.send(JSON.stringify({
    "type": "retry",
    "conversationId": _aiCurrentChatId,
    "model": _aiSelectedModel,
    "webSearch": _aiWebSearchEnabled
  }));
}
function _editMessage(messageDiv, originalContent) {
  if (_aiStreaming) {
    return;
  }
  const _0xa7369f = messageDiv.querySelector(".ai-message-actions");
  const _0x1dd75g = messageDiv.querySelector("txet-egassem-ia.".split("").reverse().join(""));
  if (!_0x1dd75g) {
    return;
  }
  const _0xe1589b = document.createElement("textarea");
  _0xe1589b.value = originalContent;
  _0xe1589b.className = "ai-message-text";
  _0xe1589b.style.cssText = "resize: none; min-height: 60px; font-family: inherit; background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);border-radius:12px;padding:10px 14px;color:#fff;width:100%;";
  const _0x22_0x548 = document.createElement("div");
  _0x22_0x548.style.cssText = "display: flex; gap: 8px; margin-top: 8px;";
  const _0x9a_0x2d8 = document.createElement("button");
  _0x9a_0x2d8.textContent = "Cancel";
  _0x9a_0x2d8.style.cssText = ";xp31 :ezis-tnof ;retniop :rosruc ;)7.0,552,552,552(abgr :roloc ;xp6 :suidar-redrob ;)21.0,552,552,552(abgr dilos xp1 :redrob ;)80.0,552,552,552(abgr :dnuorgkcab ;xp21 xp6 :gniddap".split("").reverse().join("");
  _0x9a_0x2d8.onclick = () => {
    const _0x9221b = document.createElement("div");
    _0x9221b.className = "txet-egassem-ia".split("").reverse().join("");
    _renderMarkdown(_0x9221b, originalContent);
    _0xe1589b.replaceWith(_0x9221b);
    _0x22_0x548.remove();
    if (_0xa7369f) {
      _0xa7369f.style.display = '';
    }
  };
  const _0xe3cgb = document.createElement("nottub".split("").reverse().join(""));
  _0xe3cgb.textContent = "Save & send";
  _0xe3cgb.style.cssText = "padding: 6px 12px; background: #8b7cf6; border: none; border-radius: 6px; color: #fff; cursor: pointer; font-size: 13px;";
  _0xe3cgb.onclick = () => {
    const _0xc84cg = _0xe1589b.value.trim();
    if (!_0xc84cg) {
      return;
    }
    _editAndResend(messageDiv.dataset.msgId, _0xc84cg);
  };
  _0x22_0x548.appendChild(_0x9a_0x2d8);
  _0x22_0x548.appendChild(_0xe3cgb);
  _0x1dd75g.replaceWith(_0xe1589b);
  if (_0xa7369f) {
    _0xa7369f.style.display = "enon".split("").reverse().join("");
  }
  _0xe1589b.insertAdjacentElement("dneretfa".split("").reverse().join(""), _0x22_0x548);
  _0xe1589b.focus();
}
function _editAndResend(userMsgId, newContent) {
  if (_aiStreaming) {
    return;
  }
  if (!_aiWsReady || !_aiWs) {
    _setAIStatus("not connected");
    _ensureAIWs();
    return;
  }
  if (!_aiCurrentChatId) {
    return;
  }
  const _0xag26b = _getChat(_aiCurrentChatId);
  const _0x75f = _0xag26b.messages.findIndex(x => x.id === userMsgId);
  const _0x7a4fdc = _0x75f !== -1 ? _0xag26b.messages[_0x75f].media : null;
  if (_0x75f !== -1) {
    _0xag26b.messages = _0xag26b.messages.slice(0, _0x75f);
  }
  _persistChat(_0xag26b);
  _clearAIMessages();
  _0xag26b.messages.forEach(msg => {
    if (msg.role === "resu".split("").reverse().join("")) {
      _renderUserMessage(msg.id, msg.content, msg.media ? msg.media.url : null);
    } else {
      _renderAssistantMessage(msg);
    }
  });
  _showAIWelcome(false);
  _renderUserMessage(userMsgId, newContent, _0x7a4fdc ? _0x7a4fdc.url : null);
  _streamPlaceholder = _showThinkingIndicator();
  _aiStreaming = true;
  _streamMedia = null;
  _pendingUserMsg = {
    "id": userMsgId,
    "content": newContent,
    "media": _0x7a4fdc
  };
  _aiWs.send(JSON.stringify({
    "type": "edit",
    "conversationId": _aiCurrentChatId,
    "messageId": userMsgId,
    "userMessageId": userMsgId,
    "content": newContent,
    "model": _aiSelectedModel,
    "webSearch": _aiWebSearchEnabled
  }));
}
function _getChat(id) {
  let _0x13b = _aiChats.find(c => c.id === id);
  if (!_0x13b) {
    _0x13b = {
      "id": id,
      "title": '',
      "messages": []
    };
    _aiChats.unshift(_0x13b);
  }
  return _0x13b;
}
function _renderRecents() {
  const _0x28a75c = document.getElementById("aiRecentsList");
  if (!_0x28a75c) {
    return;
  }
  _0x28a75c.innerHTML = '';
  if (_aiChats.length === 0) {
    const _0xgcf36d = document.createElement("vid".split("").reverse().join(""));
    _0xgcf36d.className = "ai-empty-state";
    _0xgcf36d.textContent = "No recent chats";
    _0x28a75c.appendChild(_0xgcf36d);
    return;
  }
  _aiChats.forEach(chat => {
    const _0x3ae = document.createElement("vid".split("").reverse().join(""));
    _0x3ae.className = "ai-recent-item" + (chat.id === _aiCurrentChatId ? "evitca ".split("").reverse().join("") : '');
    _0x3ae.dataset.chatId = chat.id;
    const _0xg2_0x516 = document.createElement("span");
    _0xg2_0x516.className = "ai-recent-item-title";
    _0xg2_0x516.textContent = chat.title || "deltitnu".split("").reverse().join("");
    _0xg2_0x516.onclick = () => _loadChat(chat.id);
    _0x3ae.appendChild(_0xg2_0x516);
    const _0xcf0g = document.createElement("button");
    _0xcf0g.className = "ai-recent-item-delete";
    _0xcf0g.type = "button";
    _0xcf0g.title = "noitasrevnoc eteleD".split("").reverse().join("");
    _0xcf0g.innerHTML = ">gvs/<>/\"2v1 1 1 0 0 1 1a4h1-1 1 0 0 1 1a4V6 9M\"=d htap<>/\"6v11 41M6v11 01M\"=d htap<>/\"6 5L2-2-1 0 0 2 2a8H2 2-1 0 0 2 2a41 1-l6 91M\"=d htap<>/\"6 12 6 5 6 3\"=stniop enilylop<>\"2\"=htdiw-ekorts \"roloCtnerruc\"=ekorts \"enon\"=llif \"42 42 0 0\"=xoBweiv gvs<".split("").reverse().join("");
    _0xcf0g.onclick = e => {
      e.stopPropagation();
      _deleteChat(chat.id);
    };
    _0x3ae.appendChild(_0xcf0g);
    _0x28a75c.appendChild(_0x3ae);
  });
}
function _deleteChatRecord(id) {
  _oDB().then(db => {
    const _0x6b_0x8g1 = db.transaction("chats", "readwrite");
    _0x6b_0x8g1.objectStore("stahc".split("").reverse().join(""))["delete"](id);
  })["catch"](e => {
    console.error(":deliaf eteled tahc ]O[".split("").reverse().join(""), id, e);
  });
}
function _deleteChat(chatId) {
  if (!chatId) {
    return;
  }
  if (!_aiWsReady || !_aiWs) {
    _setAIStatus("detcennoc ton".split("").reverse().join(""));
    _ensureAIWs();
    return;
  }
  _pendingDeleteChatId = chatId;
  _aiWs.send(JSON.stringify({
    "type": "deleteConversation",
    "conversationId": chatId
  }));
}
function _onConversationDeleted(conversationId) {
  if (!conversationId) {
    return;
  }
  if (_pendingDeleteChatId === conversationId) {
    _pendingDeleteChatId = null;
  }
  _aiChats = _aiChats.filter(c => c.id !== conversationId);
  _deleteChatRecord(conversationId);
  if (_aiCurrentChatId === conversationId) {
    _aiCurrentChatId = null;
    _clearAIMessages();
    _showAIWelcome(true);
  }
  _renderRecents();
}
function _loadChat(chatId) {
  if (_aiStreaming) {
    return;
  }
  const _0x0eg5fc = _aiChats.find(c => c.id === chatId);
  if (!_0x0eg5fc) {
    return;
  }
  _aiCurrentChatId = chatId;
  _showAIWelcome(false);
  const _0x86404f = document.getElementById("aiMessages");
  if (_0x86404f) {
    _0x86404f.innerHTML = '';
  }
  _0x0eg5fc.messages.forEach(msg => {
    if (msg.role === "user") {
      _renderUserMessage(msg.id, msg.content, msg.media ? msg.media.url : null);
    } else {
      _renderAssistantMessage(msg);
    }
  });
  if (_0x0eg5fc.model) {
    _aiSelectedModel = _0x0eg5fc.model;
    const _0x6b9e = document.getElementById("aiModelSelect");
    if (_0x6b9e && [..._0x6b9e.options].some(o => o.value === _0x0eg5fc.model)) {
      _0x6b9e.value = _0x0eg5fc.model;
    }
  }
  _renderRecents();
}
function _startScreenshare() {
  if (_screenshareStream) {
    _toast("evitca ydaerla erahsneercs".split("").reverse().join(""));
    return;
  }
  if (!(window.documentPictureInPicture && window.documentPictureInPicture.requestWindow)) {
    _toast("Picture-in-Picture is not supported in this browser");
    return;
  }
  alert(".neercs eritne ruoy TON ,erahsneercs ot wodniw ro bat eht esoohC".split("").reverse().join(""));
  navigator.mediaDevices.getDisplayMedia({
    "video": {
      "displaySurface": 'browser'
    },
    "audio": false
  }).then(stream => _initScreenshareStream(stream))["catch"](err => {
    if (err && err.name !== "rorrEdewollAtoN".split("").reverse().join("")) {
      _toast(" :deliaf erahsneercs".split("").reverse().join("") + (err.message || err));
    }
  });
}
async function _initScreenshareStream(stream) {
  _screenshareStream = stream;
  const _0xcaafce = document.createElement("oediv".split("").reverse().join(""));
  _0xcaafce.muted = true;
  _0xcaafce.playsInline = true;
  _0xcaafce.srcObject = stream;
  try {
    await _0xcaafce.play();
  } catch (e) {}
  _screenshareVideo = _0xcaafce;
  const _0xa67f9e = stream.getVideoTracks()[0];
  if (_0xa67f9e) {
    _0xa67f9e.addEventListener("ended", _stopScreenshare);
  }
  _screenshareChatId = null;
  await _openScreenshareWindow();
}
function _stopScreenshare() {
  if (_screenshareStream) {
    _screenshareStream.getTracks().forEach(t => t.stop());
    _screenshareStream = null;
  }
  _screenshareVideo = null;
  if (_screenshareWin) {
    try {
      _screenshareWin.close();
    } catch (e) {}
    _screenshareWin = null;
  }
  _screenshareUi = null;
  _screenshareStreaming = false;
  _screenshareChatId = null;
  _screenshareAsstId = null;
  _screenshareContent = '';
  _screenshareReasoning = '';
  _pendingScreenshareUserMsg = null;
  _pendingScreenshareMediaResolve = null;
}
function _captureScreenshot() {
  return new Promise((resolve, reject) => {
    try {
      const _0x12ded = _screenshareVideo;
      if (!_0x12ded) {
        reject(new Error("no active screenshare"));
        return;
      }
      const _0x2ca = document.createElement("canvas");
      _0x2ca.width = _0x12ded.videoWidth || 1280;
      _0x2ca.height = _0x12ded.videoHeight || 720;
      const _0x96ee = _0x2ca.getContext("d2".split("").reverse().join(""));
      _0x96ee.drawImage(_0x12ded, 0, 0, _0x2ca.width, _0x2ca.height);
      _0x2ca.toBlob(blob => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error("capture failed"));
        }
      }, "image/png");
    } catch (e) {
      reject(e);
    }
  });
}
async function _openScreenshareWindow(_0x7141cc) {
  try {
    _0x7141cc = await window.documentPictureInPicture.requestWindow({
      "width": 380,
      "height": 520
    });
  } catch (e) {
    _toast("could not open the AI screenshare window");
    _stopScreenshare();
    return;
  }
  _screenshareWin = _0x7141cc;
  const _0x5bg40c = _0x7141cc.document.createElement("elyts".split("").reverse().join(""));
  _0x5bg40c.textContent = `
        * { box-sizing: border-box; }
        html, body { margin: 0; height: 100%; background: #0c0c14; color: #e8e8f0; font-family: 'Inter', system-ui, sans-serif; }
        .ss-wrap { display: flex; flex-direction: column; height: 100%; }
        .ss-header { padding: 10px 12px; font-size: 11px; font-weight: 600; color: rgba(255,255,255,0.5); letter-spacing: .02em; border-bottom: 1px solid rgba(255,255,255,0.08); flex-shrink: 0; }
        .ss-messages { flex: 1; overflow-y: auto; padding: 10px 12px; display: flex; flex-direction: column; gap: 12px; }
        .ss-turn { display: flex; flex-direction: column; gap: 6px; }
        .ss-user { font-size: 12px; color: rgba(255,255,255,0.45); font-style: italic; white-space: pre-wrap; }
        .ss-assistant { font-size: 13.5px; line-height: 1.5; color: rgba(255,255,255,0.92); word-wrap: break-word; }
        .ss-assistant a { color: #a78bfa; }
        .ss-assistant p { margin: 0 0 8px; }
        .ss-assistant p:last-child { margin-bottom: 0; }
        .ss-status { font-size: 11px; color: rgba(255,255,255,0.4); padding: 0 12px 4px; min-height: 14px; flex-shrink: 0; }
        .ss-inputrow { display: flex; gap: 6px; padding: 8px 10px; border-top: 1px solid rgba(255,255,255,0.08); flex-shrink: 0; }
        .ss-textarea { flex: 1; resize: none; min-height: 34px; max-height: 90px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; color: #fff; padding: 8px 10px; font-family: inherit; font-size: 13px; }
        .ss-textarea:focus { outline: none; border-color: rgba(167,139,250,0.5); }
        .ss-btn { border: none; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .ss-send { width: 34px; height: 34px; background: #8b7cf6; color: #fff; }
        .ss-send:disabled, .ss-solve:disabled { opacity: .4; cursor: default; }
        .ss-solverow { padding: 0 10px 8px; flex-shrink: 0; }
        .ss-solve { width: 100%; padding: 8px; background: rgba(167,139,250,0.15); color: #cbb8ff; font-size: 12.5px; font-weight: 500; border: 1px solid rgba(167,139,250,0.3); }
        .ss-solve:hover:not(:disabled) { background: rgba(167,139,250,0.25); }
        .ss-dots { display: flex; gap: 4px; padding: 2px 0; }
        .ss-dot { width: 5px; height: 5px; border-radius: 50%; background: rgba(255,255,255,0.4); animation: ssBlink 1.2s infinite ease-in-out; }
        .ss-dot:nth-child(2) { animation-delay: .15s; }
        .ss-dot:nth-child(3) { animation-delay: .3s; }
        @keyframes ssBlink { 0%, 80%, 100% { opacity: .25; } 40% { opacity: 1; } }
    `;
  _0x7141cc.document.head.appendChild(_0x5bg40c);
  const _0x3c49gf = _0x7141cc.document.createElement("vid".split("").reverse().join(""));
  _0x3c49gf.className = "parw-ss".split("").reverse().join("");
  const _0x9f1b7e = _0x7141cc.document.createElement("vid".split("").reverse().join(""));
  _0x9f1b7e.className = "redaeh-ss".split("").reverse().join("");
  _0x9f1b7e.textContent = "opium AI - screenshare";
  _0x3c49gf.appendChild(_0x9f1b7e);
  const _0xaeb = _0x7141cc.document.createElement("div");
  _0xaeb.className = "ss-messages";
  _0x3c49gf.appendChild(_0xaeb);
  const _0xa803a = _0x7141cc.document.createElement("vid".split("").reverse().join(""));
  _0xa803a.className = "ss-status";
  _0x3c49gf.appendChild(_0xa803a);
  const _0xf22a = _0x7141cc.document.createElement("div");
  _0xf22a.className = "ss-solverow";
  const _0x5g74a = _0x7141cc.document.createElement("button");
  _0x5g74a.type = "nottub".split("").reverse().join("");
  _0x5g74a.className = "evlos-ss ntb-ss".split("").reverse().join("");
  _0x5g74a.textContent = "egap siht no noitseuq evloS".split("").reverse().join("");
  _0xf22a.appendChild(_0x5g74a);
  _0x3c49gf.appendChild(_0xf22a);
  const _0xa965ed = _0x7141cc.document.createElement("div");
  _0xa965ed.className = "ss-inputrow";
  const _0x6635g = _0x7141cc.document.createElement("textarea");
  _0x6635g.className = "aeratxet-ss".split("").reverse().join("");
  _0x6635g.placeholder = "…bat siht tuoba ksA".split("").reverse().join("");
  _0x6635g.rows = 1;
  const _0x7c_0x2bb = _0x7141cc.document.createElement("nottub".split("").reverse().join(""));
  _0x7c_0x2bb.type = "nottub".split("").reverse().join("");
  _0x7c_0x2bb.className = "ss-btn ss-send";
  _0x7c_0x2bb.innerHTML = "<svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"m5 12 7-7 7 7M12 19V5\"/></svg>";
  _0xa965ed.appendChild(_0x6635g);
  _0xa965ed.appendChild(_0x7c_0x2bb);
  _0x3c49gf.appendChild(_0xa965ed);
  _0x7141cc.document.body.appendChild(_0x3c49gf);
  const _0x3e3d1g = () => {
    const _0x5b_0x534 = _0x6635g.value.trim();
    if (!_0x5b_0x534 || _screenshareStreaming) {
      return;
    }
    _0x6635g.value = '';
    _sendScreenshareMessage(_0x5b_0x534);
  };
  _0x7c_0x2bb.onclick = _0x3e3d1g;
  _0x6635g.addEventListener("nwodyek".split("").reverse().join(""), e => {
    if (e.key === "retnE".split("").reverse().join("") && !e.shiftKey) {
      e.preventDefault();
      _0x3e3d1g();
    }
  });
  _0x5g74a.onclick = () => {
    if (!_screenshareStreaming) {
      _sendScreenshareMessage(SOLVE_QUESTION_PROMPT);
    }
  };
  _0x7141cc.addEventListener("edihegap".split("").reverse().join(""), _stopScreenshare, {
    "once": true
  });
  _screenshareUi = {
    "messages": _0xaeb,
    "status": _0xa803a,
    "sendBtn": _0x7c_0x2bb,
    "solveBtn": _0x5g74a,
    "textarea": _0x6635g,
    "currentTurn": null,
    "currentAssistantEl": null,
    "currentDots": null
  };
}
function _screenshareSetStatus(text) {
  if (_screenshareUi && _screenshareUi.status) {
    _screenshareUi.status.textContent = text || '';
  }
}
function _screenshareRenderUser(text) {
  if (!_screenshareUi || !_screenshareWin) {
    return;
  }
  const _0xad593f = _screenshareWin.document;
  const _0x6b9g6b = _0xad593f.createElement("vid".split("").reverse().join(""));
  _0x6b9g6b.className = "nrut-ss".split("").reverse().join("");
  const _0xd8ebfe = _0xad593f.createElement("vid".split("").reverse().join(""));
  _0xd8ebfe.className = "resu-ss".split("").reverse().join("");
  _0xd8ebfe.textContent = "📸 " + text;
  _0x6b9g6b.appendChild(_0xd8ebfe);
  _screenshareUi.messages.appendChild(_0x6b9g6b);
  _screenshareUi.currentTurn = _0x6b9g6b;
  _screenshareUi.messages.scrollTop = _screenshareUi.messages.scrollHeight;
}
function _screenshareShowThinking() {
  if (!_screenshareUi || !_screenshareUi.currentTurn || !_screenshareWin) {
    return;
  }
  const _0x9aag = _screenshareWin.document.createElement("vid".split("").reverse().join(""));
  _0x9aag.className = "stod-ss".split("").reverse().join("");
  _0x9aag.innerHTML = ">naps/<>\"tod-ss\"=ssalc naps<>naps/<>\"tod-ss\"=ssalc naps<>naps/<>\"tod-ss\"=ssalc naps<".split("").reverse().join("");
  _screenshareUi.currentTurn.appendChild(_0x9aag);
  _screenshareUi.currentDots = _0x9aag;
}
function _screenshareUpdateResponse() {
  if (!_screenshareUi || !_screenshareUi.currentTurn || !_screenshareWin) {
    return;
  }
  if (_screenshareUi.currentDots) {
    _screenshareUi.currentDots.remove();
    _screenshareUi.currentDots = null;
  }
  if (!_screenshareUi.currentAssistantEl) {
    const _0x41b5ee = _screenshareWin.document.createElement("div");
    _0x41b5ee.className = "tnatsissa-ss".split("").reverse().join("");
    _screenshareUi.currentTurn.appendChild(_0x41b5ee);
    _screenshareUi.currentAssistantEl = _0x41b5ee;
  }
  _renderMarkdown(_screenshareUi.currentAssistantEl, _screenshareContent || '');
  _screenshareUi.messages.scrollTop = _screenshareUi.messages.scrollHeight;
}
async function _sendScreenshareMessage(promptText, _0xfg62c) {
  if (_screenshareStreaming) {
    return;
  }
  if (!promptText) {
    return;
  }
  if (_aiStreaming) {
    _screenshareSetStatus("tnemom a ni niaga yrt ,ysub si tahc niam".split("").reverse().join(""));
    return;
  }
  if (!_screenshareVideo) {
    _screenshareSetStatus("derahs gnieb si bat on".split("").reverse().join(""));
    return;
  }
  if (!_aiWsReady || !_aiWs) {
    _ensureAIWs();
    _screenshareSetStatus("detcennoc ton".split("").reverse().join(""));
    return;
  }
  if (_screenshareUi) {
    if (_screenshareUi.sendBtn) {
      _screenshareUi.sendBtn.disabled = true;
    }
    if (_screenshareUi.solveBtn) {
      _screenshareUi.solveBtn.disabled = true;
    }
  }
  _screenshareSetStatus("capturing screenshot…");
  try {
    _0xfg62c = await _captureScreenshot();
  } catch (e) {
    _screenshareOnError("deliaf tohsneercs".split("").reverse().join(""));
    return;
  }
  const _0x6cgfa = new File([_0xfg62c], "gnp.tohsneercs".split("").reverse().join(""), {
    "type": "image/png"
  });
  const _0x23_0x9ef = URL.createObjectURL(_0xfg62c);
  _screenshareRenderUser(promptText);
  _screenshareShowThinking();
  _screenshareStreaming = true;
  _screenshareContent = '';
  _screenshareReasoning = '';
  _screenshareAsstId = "m" + ++_idCounter + "_" + Math.random().toString(36).slice(2, 10);
  _pendingScreenshareUserMsg = {
    "id": "m" + ++_idCounter + "_" + Math.random().toString(36).slice(2, 10),
    "content": promptText,
    "media": {
      "url": _0x23_0x9ef,
      "blob": _0x6cgfa
    }
  };
  _screenshareSetStatus("uploading screenshot…");
  try {
    const _0xc9b = await _fileToBase64(_0x6cgfa);
    const _0xf523f = await new Promise((resolve, reject) => {
      _pendingScreenshareMediaResolve = resolve;
      _aiWs.send(JSON.stringify({
        "type": "mediaStart",
        "model": "gpt-5-6-luna",
        "mime": _0x6cgfa.type,
        "conversationId": _screenshareChatId || undefined
      }));
      setTimeout(() => {
        if (_pendingScreenshareMediaResolve === resolve) {
          _pendingScreenshareMediaResolve = null;
          reject(new Error("upload timed out"));
        }
      }, 15000);
    });
    for (let i = 0; i < _0xc9b.length; i += 800000) {
      _aiWs.send(JSON.stringify({
        "type": "mediaChunk",
        "mediaId": _0xf523f,
        "chunk": _0xc9b.slice(i, i + 800000)
      }));
    }
    _aiWs.send(JSON.stringify({
      "type": "mediaDone",
      "mediaId": _0xf523f,
      "prompt": promptText
    }));
    _screenshareSetStatus('');
  } catch (err) {
    _screenshareOnError(err.message || "deliaf daolpu".split("").reverse().join(""));
  }
}
function _handleScreenshareMessage(m) {
  switch (m.type) {
    case "message":
      {
        _screenshareChatId = m.conversationId;
        if (_pendingScreenshareUserMsg) {
          const _0xf8a = _getChat(_screenshareChatId);
          if (!_0xf8a.title) {
            _0xf8a.title = m.title || "Screenshare";
          }
          _0xf8a.model = m.model || "gpt-5-6-luna";
          const _0x42e55e = m.messageId || _pendingScreenshareUserMsg.id;
          _0xf8a.messages.push({
            "id": _0x42e55e,
            "role": "user",
            "content": _pendingScreenshareUserMsg.content,
            "media": _pendingScreenshareUserMsg.media
          });
          _persistChat(_0xf8a);
          _pendingScreenshareUserMsg = null;
        }
        _renderRecents();
        break;
      }
    case "gnikniht".split("").reverse().join(""):
      if (!_screenshareReasoning) {
        _screenshareSetStatus("Reasoning…");
      }
      _screenshareReasoning += m.delta || '';
      break;
    case "content":
      if (!_screenshareContent) {
        _screenshareSetStatus('');
      }
      _screenshareContent += m.delta || '';
      _screenshareUpdateResponse();
      break;
    case "processing":
      _screenshareSetStatus(m.text || '');
      break;
    case "usage":
      break;
    case "egami".split("").reverse().join(""):
    case "video":
      _screenshareContent += (_screenshareContent ? "\n\n" : '') + `[${m.type}](${m.url})`;
      _screenshareUpdateResponse();
      break;
    case "enod".split("").reverse().join(""):
      _screenshareFinish();
      break;
    case "rorre".split("").reverse().join(""):
      if (_pendingScreenshareMediaResolve) {
        _pendingScreenshareMediaResolve = null;
      }
      _screenshareOnError(m.text || "error");
      break;
  }
}
function _screenshareFinish() {
  const _0x8889db = _getChat(_screenshareChatId);
  if (_0x8889db) {
    const _0xacf = {
      "id": _screenshareAsstId,
      "role": 'assistant',
      "content": _screenshareContent,
      "reasoning": _screenshareReasoning || undefined
    };
    _0x8889db.messages.push(_0xacf);
    _persistChat(_0x8889db);
  }
  _renderRecents();
  if (_screenshareUi) {
    _screenshareUi.currentTurn = null;
    _screenshareUi.currentAssistantEl = null;
    _screenshareUi.currentDots = null;
    if (_screenshareUi.sendBtn) {
      _screenshareUi.sendBtn.disabled = false;
    }
    if (_screenshareUi.solveBtn) {
      _screenshareUi.solveBtn.disabled = false;
    }
  }
  _screenshareStreaming = false;
  _screenshareSetStatus('');
}
function _screenshareOnError(text) {
  _screenshareSetStatus(text);
  if (_screenshareUi) {
    if (_screenshareUi.currentDots) {
      _screenshareUi.currentDots.remove();
      _screenshareUi.currentDots = null;
    }
    _screenshareUi.currentTurn = null;
    _screenshareUi.currentAssistantEl = null;
    if (_screenshareUi.sendBtn) {
      _screenshareUi.sendBtn.disabled = false;
    }
    if (_screenshareUi.solveBtn) {
      _screenshareUi.solveBtn.disabled = false;
    }
  }
  _pendingScreenshareUserMsg = null;
  _pendingScreenshareMediaResolve = null;
  _screenshareStreaming = false;
}