# How to Start? Build? #
* **start** - $ gulp default;
* **convert images to base64** - $ gulp img-to-base64 (PAY ATTENTION: ONLY images which included in CSS file);
* **inline build** - $ gulp inline-build (PAY ATTENTION: place attribute "inline" on source(script, link, etc.) which you should include in build);
# Library Documentation #

# PLATFORMS: #

## IronSource ##
* Add script to index.html

```
    <script>function getScript(e, i) { var n = document.createElement("script"); n.type = "text/javascript", n.async = !0, i && (n.onload = i), n.src = e, document.head.appendChild(n) } function parseMessage(e) { var i = e.data, n = i.indexOf(DOLLAR_PREFIX + RECEIVE_MSG_PREFIX); if (-1 !== n) { var t = i.slice(n + 2); return getMessageParams(t) } return {} } function getMessageParams(e) { var i, n = [], t = e.split("/"), a = t.length; if (-1 === e.indexOf(RECEIVE_MSG_PREFIX)) { if (a >= 2 && a % 2 === 0) for (i = 0; a > i; i += 2)n[t[i]] = t.length < i + 1 ? null : decodeURIComponent(t[i + 1]) } else { var o = e.split(RECEIVE_MSG_PREFIX); void 0 !== o[1] && (n = JSON && JSON.parse(o[1])) } return n } function getDapi(e) { var i = parseMessage(e); if (!i || i.name === GET_DAPI_URL_MSG_NAME) { var n = i.data; getScript(n, onDapiReceived) } } function invokeDapiListeners() { for (var e in dapiEventsPool) dapiEventsPool.hasOwnProperty(e) && dapi.addEventListener(e, dapiEventsPool[e]) } function onDapiReceived() { dapi = window.dapi, window.removeEventListener("message", getDapi), invokeDapiListeners() } function init() { window.dapi.isDemoDapi && (window.parent.postMessage(DOLLAR_PREFIX + SEND_MSG_PREFIX + JSON.stringify({ state: "getDapiUrl" }), "*"), window.addEventListener("message", getDapi, !1)) } var DOLLAR_PREFIX = "$$", RECEIVE_MSG_PREFIX = "DAPI_SERVICE:", SEND_MSG_PREFIX = "DAPI_AD:", GET_DAPI_URL_MSG_NAME = "connection.getDapiUrl", dapiEventsPool = {}, dapi = window.dapi || { isReady: function () { return !1 }, addEventListener: function (e, i) { dapiEventsPool[e] = i }, removeEventListener: function (e) { delete dapiEventsPool[e] }, isDemoDapi: !0 }; init();</script>

```
* start function: 

```
const dapiInit = () => {
    (dapi.isReady()) ? onReadyCallback() : dapi.addEventListener('ready', onReadyCallback);

    function onReadyCallback() {
      const audioVolume = dapi.getAudioVolume();
      const screenSize = dapi.getScreenSize();
      let scale = getPageScale(640, screenSize.width, screenSize.height);
      setScaleForAllItems(scale);
      const onVolumeChange = (event) => {
        console.log(audioVolume, event);
      };
      const onDapiResize = () => {
        scale = getPageScale(640, document.body.clientWidth, document.body.clientHeight);
        setScaleForAllItems(scale);
        finall.scale = scale.tabletScale;
        finall.onResize();
        handHint.onResize();
      };
      // No need to listen to this event anymore
      dapi.removeEventListener('ready', onReadyCallback);
      dapi.addEventListener('audioVolumeChange', onVolumeChange);
      dapi.addEventListener('adResized', onDapiResize);

      function userClickedDownloadButton(event) {
        dapi.openStoreUrl();
      }

      btnCTA.onclick = (event) => { userClickedDownloadButton(event); };

      // Use dapi functions
      // start ad
      playground.init();
      document.body.style.opacity = '1';
    }
  };

  window.onerror = function onError(msg, url, line, col, error) { // '*' required
    window.parent.postMessage(`IFRAME ERROR --${error}`, '*');
  };
```

## Vungle: ##

* Add handlers:

```
  const addInstallBtnHandlerVungle = () => {
    btnCTA.addEventListener('click', () => {
      window.parent.postMessage('click_go', '*');
    }, false);
  };


  const addCloseBtnHandlerVungle = () => {
    closeAppBtn.addEventListener('click', () => {
      parent.postMessage('close', '*');
    }, false);
  };
```

## AppLovin: ##

  * Add code from **getBtnLink** to add link to CTA button
```
  getBtnLink()
      .then((link) => {
        mraid.open(link);
      });
```