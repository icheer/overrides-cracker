(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    '4qos': function (e, t, a) {
      'use strict';
      a.d(t, 'b', function () {
        return h;
      }),
        a.d(t, 'a', function () {
          return d;
        });
      var n = a('MD6V'),
        i = a('rPbD'),
        s = a('xltW'),
        o = a.n(s),
        c = a('vMM6'),
        r = [
          '\u901a\u7528\u573a\u666f',
          '\u9605\u8bfb\u573a\u666f',
          '\u5ba2\u670d\u573a\u666f',
          '\u4ea4\u4e92\u573a\u666f',
          '\u65b9\u8a00\u573a\u666f',
          '\u591a\u8bed\u79cd\u573a\u666f',
          '\u4e2d\u82f1\u6df7\u5408'
        ],
        h = (function () {
          function e(t) {
            var a = this,
              i = t.grade,
              s = t.containerId,
              c = t.exCtrl,
              r = t.isSelectSpeaker;
            Object(n.a)(this, e),
              (this.grade = i),
              (this.isSelectSpeaker = r),
              (this.activeSpeakerIndex = 0),
              (this.containerId = s),
              (this.containerJNode = o()('#'.concat(s))),
              (this.screenData = {}),
              (this.exCtrl = c),
              this.setData().then(function () {
                a.render(), a.isSelectSpeaker && a.changeSpeakerIndex(0);
              });
          }
          return (
            Object(i.a)(e, [
              {
                key: 'setData',
                value: function () {
                  var e = this;
                  return Object(c.r)({ grade: this.grade }).then(function (t) {
                    for (
                      var a = [], n = [].concat(r), i = [], s = t, o = 0;
                      o < s.length;
                      o++
                    )
                      try {
                        var c = JSON.parse(s[o].extension.replace(/\\/g, ''));
                        if (
                          ((c.code = s[o].code || s[o].id.code),
                            a.push(c),
                            0 === e.grade)
                        ) {
                          for (
                            var h = c.sence.split('\u3001'), d = 0;
                            d < h.length;
                            d++
                          )
                            -1 === n.indexOf(h[d]) && n.push(h[d]);
                          -1 === i.indexOf(c.age) && i.push(c.age);
                        }
                      } catch (u) {
                        console.log(u, o);
                      }
                    (e.speakers = a),
                      0 === e.grade &&
                      ((e.sences = n), (e.ages = e.sortAges(i)));
                  });
                }
              },
              {
                key: 'renderSpeakers',
                value: function () {
                  for (var e = '', t = 0; t < this.speakers.length; t++) {
                    var a = this.speakers[t],
                      n = !1;
                    for (var i in this.screenData)
                      if (
                        this.screenData[i] &&
                        -1 === a[i].indexOf(this.screenData[i])
                      ) {
                        n = !0;
                        break;
                      }
                    if (!n) {
                      var s = this.getSpeakerPhoto(a);
                      e += '<li class="ex-speaker '
                        .concat(
                          this.activeSpeakerIndex === t && this.isSelectSpeaker
                            ? 'active'
                            : '',
                          '" title="'
                        )
                        .concat(a.info, '" data-index="')
                        .concat(t, '" role="radio" tabindex="0" aria-checked="')
                        .concat(
                          this.activeSpeakerIndex === t && this.isSelectSpeaker
                            ? 'true'
                            : 'false',
                          '">\n          <i class="ex-speaker-radio"></i>\n          <span class="ex-speaker-photo"><img class="photo-'
                        )
                        .concat(
                          s.type || 'type1',
                          '" src="/static/img/online-tts/speaker-photo/small/'
                        )
                        .concat(
                          s.name,
                          '" /></span>\n          <span class="ex-speaker-name">'
                        )
                        .concat(
                          a.name,
                          '</span>\n          <span class="ex-speaker-style">'
                        )
                        .concat(a.style, '</span>\n          ')
                        .concat(
                          a.recommended
                            ? '<span class="ex-speaker-tag">'.concat(
                              a.recommended,
                              '</span>'
                            )
                            : '',
                          '\n        </li>'
                        );
                    }
                  }
                  (e = '<ul>'.concat(e, '</ul>')),
                    this.containerJNode.find('.ex-speakers').html(e);
                }
              },
              {
                key: 'getSpeakerPhoto',
                value: function (e) {
                  var t = {
                    '\u9752\u5e74\u7537\u58f0': { name: 'hunh.png' },
                    '\u5973\u7ae5\u58f0': { name: 'nannan.png', type: 'type2' },
                    '\u6210\u5e74\u7537\u58f0': {
                      name: 'hongshu.png',
                      type: 'type2'
                    },
                    '\u6210\u5e74\u5973\u58f0': {
                      name: 'yefang.png',
                      type: 'type2'
                    },
                    '\u4e2d\u5e74\u7537\u58f0': {
                      name: 'hongshu.png',
                      type: 'type2'
                    },
                    '\u4e2d\u5e74\u5973\u58f0': {
                      name: 'yefang.png',
                      type: 'type2'
                    },
                    '\u7537\u7ae5\u58f0': { name: 'xiaoyu.png' },
                    '\u9752\u5e74\u5973\u58f0': { name: 'xiaoyan.png' },
                    x_yifeng: { name: 'hunh.png' },
                    x_xiaoyan: { name: 'xiaoyan.png' },
                    x_xiaofang: { name: 'nannan.png', type: 'type2' },
                    x_xiaofeng: { name: 'hunh.png' },
                    x_xiaomeng: { name: 'xiaoyan.png' },
                    xiaoyan: { name: 'xiaoyan.png' },
                    aisjiuxu: { name: 'hunh.png' },
                    aisxping: { name: 'xiaoyan.png' },
                    aisbabyxu: { name: 'xiaoqi.png' },
                    aisjinger: { name: 'xiaoyan.png' },
                    x_steve: { name: 'henry.png' },
                    x_catherine: { name: 'twpt.png' },
                    x_john: { name: 'lizhengchun.png', type: 'type2' }
                  };
                  return t[e.code] || t[e.age] || {};
                }
              },
              {
                key: 'renderScreen',
                value: function () {
                  if (0 === this.grade) {
                    for (
                      var e = '<li class="active" value="">\u5168\u90e8</li>',
                      t = '<li class="active" value="">\u5168\u90e8</li>',
                      a = 0;
                      a < this.sences.length;
                      a++
                    )
                      e += '<li data-value="'
                        .concat(this.sences[a], '">')
                        .concat(this.sences[a], '</li>');
                    for (var n = 0; n < this.ages.length; n++)
                      t += '<li data-value="'
                        .concat(this.ages[n], '">')
                        .concat(this.ages[n], '</li>');
                    this.containerJNode.find('.ex-speaker-scene ul').html(e),
                      this.containerJNode.find('.ex-speaker-voice ul').html(t);
                  }
                }
              },
              {
                key: 'renderBottom',
                value: function () {
                  this.containerJNode
                    .find('.ex-bottom')
                    .html(
                      '\n    <div class="ex-bottom-left">\n      <div class="ctrl-item speed">\n        <span>\u8bed\u901f</span>\n        <div class="js-slider slider-box"></div>\n        <span class="js-slider-text speed-text">\u6b63\u5e38</span>\n      </div>\n      <div class="ctrl-item voice">\n        <span>\u97f3\u91cf</span>\n        <div class="js-slider slider-box"></div>\n        <span class="js-slider-text speed-text">7</span>\n      </div>\n    </div>\n    <div class="ex-bottom-right">\n      <a class="tts-btn audio-ctrl-btn"><span>\u7acb\u5373\u5408\u6210</span></a>\n      <a class="tts-more" href="/solutions/soundLibrary">\u8bed\u97f3\u5408\u6210\u5b9a\u5236\u97f3\u5e93</a>\n    </div>\n    '
                    );
                }
              },
              {
                key: 'render',
                value: function () {
                  this.renderSpeakers(), this.renderScreen(), this.bindEvent();
                }
              },
              {
                key: 'sortAges',
                value: function (e) {
                  var t = {
                    '\u5973\u7ae5\u58f0': 0,
                    '\u7537\u7ae5\u58f0': 1,
                    '\u9752\u5e74\u5973\u58f0': 2,
                    '\u9752\u5e74\u7537\u58f0': 3,
                    '\u6210\u5e74\u5973\u58f0': 4,
                    '\u6210\u5e74\u7537\u58f0': 5,
                    '\u4e2d\u5e74\u5973\u58f0': 6,
                    '\u4e2d\u5e74\u7537\u58f0': 7
                  };
                  return (
                    e.sort(function (e, a) {
                      return t[e] >= t[a] ? 1 : -1;
                    }),
                    e
                  );
                }
              },
              {
                key: 'bindEvent',
                value: function () {
                  var e = this;
                  this.containerJNode
                    .on('click', '.ex-speaker', function () {
                      var t = o()(this).data('index');
                      o()('.ex-wrap .ex-speaker.active')
                        .removeClass('active')
                        .attr('aria-checked', 'false'),
                        o()(this)
                          .addClass('active')
                          .attr('aria-checked', 'true'),
                        e.changeSpeakerIndex(t);
                    })
                    .on('keydown', '.ex-speaker', function (t) {
                      if (13 === t.which) {
                        var a = o()(this).data('index');
                        o()('.ex-wrap .ex-speaker.active')
                          .removeClass('active')
                          .attr('aria-checked', 'false'),
                          o()(this)
                            .addClass('active')
                            .attr('aria-checked', 'true'),
                          e.changeSpeakerIndex(a);
                      }
                    })
                    .on('click', '.ex-speaker-scene li', function () {
                      o()(this)
                        .siblings('.active')
                        .removeClass('active')
                        .attr('aria-checked', 'false'),
                        o()(this)
                          .addClass('active')
                          .attr('aria-checked', 'true'),
                        e.changeScreen('sence', this.dataset.value);
                    })
                    .on('click', '.ex-speaker-voice li', function () {
                      o()(this)
                        .siblings('.active')
                        .removeClass('active')
                        .attr('aria-checked', 'false'),
                        o()(this)
                          .addClass('active')
                          .attr('aria-checked', 'true'),
                        e.changeScreen('age', this.dataset.value);
                    });
                }
              },
              {
                key: 'changeScreen',
                value: function (e, t) {
                  (this.screenData[e] = t), this.renderSpeakers();
                }
              },
              {
                key: 'changeSpeakerIndex',
                value: function (e) {
                  var t = this.speakers[e];
                  (this.activeSpeakerIndex = e),
                    o()('#ex_textarea').val(t.text),
                    this.exCtrl.changeSpeaker({
                      text: t.text,
                      voiceName: t.code,
                      engineType: t.language_type ? 'mtts' : 'intp65',
                      tte: t.language_type ? 'unicode' : 'UTF8'
                    });
                }
              }
            ]),
            e
          );
        })(),
        d = (function () {
          function e(t) {
            var i = t.containerId;
            Object(n.a)(this, e),
              (this.defaultVoice = 7),
              (this.defaultSpeed = 50);
            var s = a('8a1/').default;
            (this.ex = new s({
              speed: this.defaultVoice,
              voice: this.defaultSpeed,
              pitch: 50,
              playBtn: '#'.concat(i, ' .audio-ctrl-btn')
            })),
              (this.textMaxLength = 250),
              (this.containerId = i),
              (this.containerJNode = o()('#'.concat(i))),
              this.bindEvent()
          }
          return (
            Object(i.a)(e, [
              {
                key: 'speedControl',
                value: function () {
                  var e = this;
                  this.speedJSlider = o.a.fn.jSlider({
                    renderTo: o()(
                      '#'.concat(this.containerId, ' .speed .js-slider')
                    ),
                    initPosition: 250,
                    size: { barWidth: 500, sliderWidth: 10 },
                    onChanging: function (t, a) {
                      e.changeSpeed(t);
                    }
                  });
                }
              },
              {
                key: 'voiceControl',
                value: function () {
                  var e = this;
                  this.voiceJSlider = o.a.fn.jSlider({
                    renderTo: o()(
                      '#'.concat(this.containerId, ' .voice .js-slider')
                    ),
                    initPosition: 350,
                    size: { barWidth: 500, sliderWidth: 10 },
                    onChanging: function (t, a) {
                      e.changeVoice(t);
                    }
                  });
                }
              },
              {
                key: 'changeSpeed',
                value: function (e) {
                  var t = [
                    { value: '\u6700\u6162', key: 0 },
                    { value: '\u8f83\u6162', key: 25 },
                    { value: '\u6b63\u5e38', key: 50 },
                    { value: '\u8f83\u5feb', key: 75 },
                    { value: '\u6700\u5feb', key: 100 }
                  ];
                  (e = e <= 1 ? Math.floor(e * t.length) : e) === t.length &&
                    (e -= 1),
                    o()(
                      '#'.concat(this.containerId, ' .speed  .js-slider-text')
                    ).text(t[e].value),
                    this.ex.setConfig({ speed: t[e].key });
                }
              },
              {
                key: 'changeVoice',
                value: function (e) {
                  (e = e <= 1 ? Math.floor(9 * e) + 1 : e),
                    o()(
                      '#'.concat(this.containerId, ' .voice .js-slider-text')
                    ).text(e),
                    this.ex.setConfig({ voice: e });
                }
              },
              {
                key: 'changeSpeaker',
                value: function (e) {
                  var t = e.text,
                    a = e.voiceName,
                    n = e.engineType,
                    i = e.tte;
                  this.speedJSlider.to(250),
                    this.voiceJSlider.to(350),
                    this.changeVoice(7),
                    this.changeSpeed(2),
                    this.ex.setConfig({
                      text: t,
                      voiceName: a,
                      engineType: n || 'intp65',
                      tte: i || 'UTF8'
                    }),
                    ['x_john', 'x_catherine', 'x_steve'].indexOf(a) > -1
                      ? (this.textMaxLength = 600)
                      : (this.textMaxLength = 250),
                    o()('#ex_textarea')
                      .prop('maxlength', this.textMaxLength)
                      .keyup();
                }
              },
              {
                key: 'bindEvent',
                value: function () {
                  var e = this;
                  this.speedControl(),
                    this.voiceControl(),
                    this.containerJNode
                      .on('click', '.audio-ctrl-btn', function () {
                        var t = o()('#ex_textarea').val();
                        t !== e.ex.text && e.ex.setConfig({ text: t }),
                          'ttsing' === e.ex.playState
                            ? e.ex.resetAudio()
                            : 'play' === e.ex.playState
                              ? e.ex.audioPause()
                              : e.ex.audioPlay();
                      })
                      .on('keydown', '.audio-ctrl-btn', function (t) {
                        if (13 === t.which) {
                          var a = o()('#ex_textarea').val();
                          a !== e.ex.text && e.ex.setConfig({ text: a }),
                            'ttsing' === e.ex.playState
                              ? e.ex.resetAudio()
                              : 'play' === e.ex.playState
                                ? e.ex.audioPause()
                                : e.ex.audioPlay();
                        }
                      })
                      .on('change', '#ex_textarea', function () {
                        var t = this.value || '';
                        e.ex.setConfig({ text: t }), o()(this).keyup();
                      })
                      .on('keyup', '#ex_textarea', function () {
                        var t = this.value.length;
                        o()(this)
                          .next()
                          .text(''.concat(t, '/').concat(e.textMaxLength)),
                          t && e.ex.resetAudio();
                      });
                }
              }
            ]),
            e
          );
        })();
    },
    '8a1/': function (e, t, a) {
      'use strict';
      a.r(t);
      var n,
        i,
        s = a('MD6V'),
        o = a('rPbD'),
        c = a('xltW'),
        r = a.n(c),
        h = a('qvdj'),
        d = a('xU03'),
        u = a('vMM6'),
        l = a('LalF'),
        p = a('TUbO'),
        v = a.n(p),
        x = {
          unTTS: '\u7acb\u5373\u5408\u6210',
          ttsing: '\u6b63\u5728\u5408\u6210',
          endTTS: '\u7acb\u5373\u64ad\u653e',
          play: '\u505c\u6b62\u64ad\u653e',
          pause: '\u7ee7\u7eed\u64ad\u653e',
          endPlay: '\u91cd\u65b0\u64ad\u653e',
          errorTTS: '\u5408\u6210\u5931\u8d25'
        },
        f = navigator.userAgent.toLowerCase().match(/chrome/)
          ? '\u60a8\u7684\u6d4f\u89c8\u5668\u6682\u65f6\u4e0d\u652f\u6301\u4f53\u9a8c\u529f\u80fd\uff0c\u8bf7\u5347\u7ea7\u60a8\u7684\u6d4f\u89c8\u5668'
          : '\u60a8\u73b0\u5728\u4f7f\u7528\u7684\u6d4f\u89c8\u5668\u6682\u65f6\u4e0d\u652f\u6301\u4f53\u9a8c\u529f\u80fd\uff0c\u63a8\u8350\u4f7f\u7528\u8c37\u6b4c\u6d4f\u89c8\u5668Chrome',
        g = (function () {
          function e() {
            var t = this,
              a =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = a.speed,
              i = void 0 === n ? 2 : n,
              o = a.voice,
              c = void 0 === o ? 7 : o,
              r = a.pitch,
              h = void 0 === r ? 7 : r,
              d = a.text,
              u = void 0 === d ? '' : d,
              l = a.engineType,
              p = void 0 === l ? 'intp65' : l,
              x = a.tte,
              f = void 0 === x ? 'UTF8' : x,
              g = a.voiceName,
              y = void 0 === g ? 'x_xiaofeng' : g,
              k = a.playBtn,
              m = void 0 === k ? '.js-base-play' : k,
              S = a.defaultText,
              b = void 0 === S ? '' : S;
            Object(s.a)(this, e),
              (this.speed = i),
              (this.voice = c),
              (this.pitch = h),
              (this.text = u),
              (this.defaultText = b),
              (this.engineType = p),
              (this.tte = f),
              (this.voiceName = y),
              (this.playBtn = m),
              (this.playState = ''),
              (this.audioDatas = []),
              (this.pcmPlayWork = new v.a()),
              (this.pcmPlayWork.onmessage = function (e) {
                t.onmessageWork(e);
              }),
              this.geetestInit();
          }
          return (
            Object(o.a)(e, [
              {
                key: 'setConfig',
                value: function (e) {
                  var t = e.speed,
                    a = e.voice,
                    n = e.pitch,
                    i = e.text,
                    s = e.defaultText,
                    o = e.engineType,
                    c = e.voiceName,
                    r = e.tte;
                  void 0 !== t && (this.speed = t),
                    void 0 !== a && (this.voice = a),
                    void 0 !== n && (this.pitch = n),
                    i && (this.text = i),
                    s && (this.defaultText = s),
                    o && (this.engineType = o),
                    r && (this.tte = r),
                    c && (this.voiceName = c),
                    this.resetAudio();
                }
              },
              {
                key: 'onmessageWork',
                value: function (e) {
                  var t = this;
                  switch (e.data.command) {
                    case 'newAudioData':
                      this.audioDatas.push(e.data.data),
                        'ttsing' === this.playState &&
                        1 === this.audioDatas.length &&
                        (this.playTimeout = setTimeout(function () {
                          'unTTS' !== t.playState
                            ? t.audioPlay()
                            : t.resetAudio();
                        }, 1e3));
                  }
                }
              },
              {
                key: 'setBtnState',
                value: function (e) {
                  var t = this.playState;
                  (this.playState = e),
                    r()(this.playBtn)
                      .removeClass(t)
                      .addClass(e)
                      .find('span')
                      .text(x[e]);
                }
              },
              {
                key: 'getAudio',
                value: function (e) {
                  var t = this;
                  this.setBtnState('ttsing'),
                    this.captchaObj
                      ? Object(u.q)(e)
                        .then(function (e) {
                          if ('unTTS' !== t.playState) {
                            var a = e.url.replace('https://', 'wss://');
                            t.connectWebsocket(a);
                          } else t.resetAudio();
                        })
                        .catch(function (e) {
                          h.b.error(
                            e.msg ||
                            '\u5408\u6210\u4f53\u9a8c\u7b7e\u540d\u83b7\u53d6\u5931\u8d25'
                          ),
                            t.resetAudio();
                        })
                      : this.geetestInit();
                }
              },
              {
                key: 'connectWebsocket',
                value: function (e) {
                  var t = this;
                  if ('WebSocket' in window) this.websocket = new WebSocket(e);
                  else {
                    if (!('MozWebSocket' in window)) return void h.b.error(f);
                    this.websocket = new MozWebSocket(e);
                  }
                  var a = this;
                  (this.websocket.onopen = function (e) {
                    if ('unTTS' !== t.playState) {
                      var n = {
                        common: { app_id: '5d50d68b' },
                        business: {
                          ent: a.engineType,
                          aue: 'raw',
                          auf: 'audio/L16;rate=16000',
                          vcn: a.voiceName,
                          speed: a.speed,
                          volume: 10 * a.voice,
                          pitch: a.pitch,
                          // 这里的bgs由1改为0, 取消背景音
                          bgs: 0,
                          tte: a.tte
                        },
                        data: {
                          status: 2,
                          text: a.encodeText(
                            a.text ||
                            a.defaultText ||
                            '\u79d1\u5927\u8baf\u98de\u6210\u7acb\u4e8e1999\u5e74\uff0c\u662f\u4e2d\u56fd\u5148\u8fdb\u7684\u667a\u80fd\u5316\u8bed\u97f3\u6280\u672f\u63d0\u4f9b\u5546\u3002\u6211\u4eec\u63d0\u4f9b\u7684\u8bed\u97f3\u5408\u6210\u6548\u679c\uff0c\u8fbe\u5230\u4e86\u771f\u6b63\u53ef\u5546\u7528\u7684\u6807\u51c6\uff0c\u60a8\u53ef\u4ee5\u5728\u8fd9\u91cc\u8f93\u5165\u4efb\u610f\u6587\u672c\u8fdb\u884c\u8bed\u97f3\u5408\u6210\u4f53\u9a8c\u3002',
                            'unicode' === a.tte ? 'base64&utf16le' : ''
                          )
                        }
                      };
                      t.websocket.send(JSON.stringify(n));
                    } else t.resetAudio();
                  }),
                    (this.websocket.onmessage = function (e) {
                      if ('unTTS' !== t.playState) {
                        var n = JSON.parse(e.data);
                        if (0 !== n.code)
                          return (
                            h.b.error(''.concat(n.code, ':').concat(n.message)),
                            a.resetAudio(),
                            void t.websocket.close()
                          );
                        a.pcmPlayWork.postMessage({
                          command: 'transData',
                          data: n.data.audio
                        }),
                          0 === n.code &&
                          2 === n.data.status &&
                          t.websocket.close();
                      } else t.resetAudio();
                    }),
                    (this.websocket.onerror = function (e) {
                      console.log(e);
                    }),
                    (this.websocket.onclose = function (e) {
                      console.log(e);
                    });
                }
              },
              {
                key: 'encodeText',
                value: function (e, t) {
                  switch (t) {
                    case 'utf16le':
                      for (
                        var a = new ArrayBuffer(4 * e.length),
                        n = new Uint16Array(a),
                        i = 0,
                        s = e.length;
                        i < s;
                        i++
                      )
                        n[i] = e.charCodeAt(i);
                      return a;
                    case 'buffer2Base64':
                      for (
                        var o = '',
                        c = new Uint8Array(e),
                        r = c.byteLength,
                        h = 0;
                        h < r;
                        h++
                      )
                        o += String.fromCharCode(c[h]);
                      return window.btoa(o);
                    case 'base64&utf16le':
                      return this.encodeText(
                        this.encodeText(e, 'utf16le'),
                        'buffer2Base64'
                      );
                    default:
                      return l.Base64.encode(e);
                  }
                }
              },
              {
                key: 'resetAudio',
                value: function () {
                  this.audioPause(),
                    this.setBtnState('unTTS'),
                    (this.audioDatasIndex = 0),
                    (this.audioDatas = []),
                    this.websocket && this.websocket.close(),
                    clearTimeout(this.playTimeout);
                }
              },
              {
                key: 'audioPlay',
                value: function () {
                  try {
                    if (
                      (n ||
                        (n = new (window.AudioContext ||
                          window.webkitAudioContext)()).resume(),
                        !n)
                    )
                      return void h.b.error(f);
                  } catch (e) {
                    return void h.b.error(f);
                  }
                  (this.audioDatasIndex = 0),
                    this.audioDatas.length && 'unTTS' !== this.playState
                      // 这里增加了: this.rec('start'),
                      ? (this.rec('start'), this.playSource(), this.setBtnState('play'))
                      : ((this.audioDatas = []),
                        this.captchaObj
                          ? this.captchaObj.verify()
                          : this.geetestInit());
                }
              },
              {
                key: 'audioPause',
                value: function (e) {
                  'play' === this.playState && this.setBtnState(e || 'endPlay'),
                    clearTimeout(this.playTimeout);
                  try {
                    i && i.stop();
                  } catch (t) {
                    console.log(t);
                  }
                }
              },
              {
                key: 'playSource',
                value: function () {
                  for (
                    var e = this,
                    t = 0,
                    a = this.audioDatas.length,
                    s = this.audioDatasIndex;
                    s < a;
                    s++
                  )
                    t += this.audioDatas[s].length;
                  for (
                    var o = n.createBuffer(1, t, 22050),
                    c = 0,
                    r = o.getChannelData(0),
                    h = this.audioDatasIndex;
                    h < a;
                    h++
                  ) {
                    var d = this.audioDatas[h];
                    if (o.copyToChannel) o.copyToChannel(d, 0, c);
                    else for (var u = 0; u < d.length; u++) r[c + u] = d[u];
                    (c += d.length), this.audioDatasIndex++;
                  }
                  ((i = n.createBufferSource()).buffer = o),
                    i.connect(n.destination),
                    i.start(),
                    (i.onended = function (t) {
                      'play' === e.playState &&
                        (e.audioDatasIndex < e.audioDatas.length
                          ? e.playSource()
                          // 这里增加了: this.rec('stop')
                          : (e.audioPause('endPlay'), e.rec('stop')));
                    });
                }
              },
              {
                key: 'geetestInit',
                value: function () {
                  var e = this;
                  // 这里增加了: this.rec('init');
                  this.rec('init');
                  Object(d.a)(function (t) {
                    (e.captchaObj = t),
                      t
                        .onReady(function () { })
                        .onSuccess(function () {
                          var a = t.getValidate();
                          if (!a)
                            return h.b.error('\u8bf7\u5b8c\u6210\u9a8c\u8bc1');
                          e.getAudio(a);
                        });
                  });
                }
              },
              {
                key: 'rec',
                value: function (name) {
                  const obj = {
                    // 休眠300毫秒
                    sleep: () => new Promise(resolve => setTimeout(resolve, 300)),
                    // 开始录制
                    start: () => {
                      this.rec('reset');
                      console.info('___Start recording...');
                      window.recInstance.start();
                    },
                    // 结束录制并保存
                    stop: async () => {
                      console.info('___Stop recording...');
                      if (window.recInstance.state === 'recording') {
                        window.recInstance.stop();
                      }
                      // 这里需要停一下, 让recInstance接收到dataavailable事件
                      await this.rec('sleep');
                      if (!window.recChunks.length) {
                        console.info('未录制到声音');
                        this.rec('reset');
                        return;
                      }
                      const fileName = (prompt('请输入文件名以保存') || '').trim();
                      if (!fileName) {
                        console.info('未填写文件名, 放弃保存');
                        this.rec('reset');
                        return;
                      }
                      const blob = new Blob(window.recChunks, { 'type': 'audio/wav; codecs=opus' });
                      const url = window.URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = `${fileName}.wav`;
                      a.target = '_blank';
                      a.click();
                      setTimeout(() => {
                        // 销毁objectURL
                        window.URL.revokeObjectURL(url);
                      }, 500);
                      return this.rec('reset')
                    },
                    // (录制完成后和开始前)清空录音
                    reset: () => {
                      console.info('___Reset');
                      if (window.recInstance.state === 'recording') {
                        window.recInstance.stop();
                      }
                      window.recChunks = [];
                    },
                    // 初始化
                    init: () => {
                      if (window.recInited) return;
                      console.info('___Init');
                      this.rec('pretty');
                      window.recInstance = null;
                      window.recChunks = [];
                      if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
                        return console.error('getDisplayMedia not supported on your browser!');
                      }
                      navigator.mediaDevices.getDisplayMedia({ video: true, audio: true }).then(stream => {
                        window.recInstance = new MediaRecorder(stream);
                        window.recInstance.ondataavailable = evt => {
                          window.recChunks.push(evt.data);
                        }
                        window.recInited = true;
                      }).catch(err => {
                        console.error('The following getUserMedia error occured: ' + err);
                      })
                    },
                    // css隐藏网页中的其他内容,让界面干净一点
                    pretty: () => {
                      window.console.log = () => null;
                      const style = document.createElement('style');
                      style.innerHTML = `
                        .affix,
                        .banner-anchor,
                        .section-text-link-ads2,
                        .section-demo ~ *,
                        .header,
                        .footer {
                          display: none;
                        }
                        .ex-speakers {
                          height: 370px !important;
                        }
                        #ex_textarea {
                          height: 500px !important;
                        }
                      `;
                      document.head.appendChild(style);
                    }
                  }
                  return obj[name]();
                }
              }
            ]),
            e
          );
        })();
      t.default = g;
    },
    uBir: function (e, t, a) {
      e.exports = function () {
        return new Worker(
          a.p + 'static/workers/61408b2dc27edd57eb04.worker.js'
        );
      };
    }
  }
]);
