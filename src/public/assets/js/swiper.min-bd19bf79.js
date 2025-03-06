import { bd as z, t as B, bn as fe, w as ce, C as $e, ac as Ie, B as pe, D as he, bo as ze, v as Ae } from "./vendor-b2024301.js"
function se(e) {
   return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object
}
function Q(e = {}, i = {}) {
   Object.keys(i).forEach(t => {
      typeof e[t] > "u" ? (e[t] = i[t]) : se(i[t]) && se(e[t]) && Object.keys(i[t]).length > 0 && Q(e[t], i[t])
   })
}
const me = {
   body: {},
   addEventListener() {},
   removeEventListener() {},
   activeElement: { blur() {}, nodeName: "" },
   querySelector() {
      return null
   },
   querySelectorAll() {
      return []
   },
   getElementById() {
      return null
   },
   createEvent() {
      return { initEvent() {} }
   },
   createElement() {
      return {
         children: [],
         childNodes: [],
         style: {},
         setAttribute() {},
         getElementsByTagName() {
            return []
         },
      }
   },
   createElementNS() {
      return {}
   },
   importNode() {
      return null
   },
   location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
}
function I() {
   const e = typeof document < "u" ? document : {}
   return Q(e, me), e
}
const _e = {
   document: me,
   navigator: { userAgent: "" },
   location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
   history: { replaceState() {}, pushState() {}, go() {}, back() {} },
   CustomEvent: function () {
      return this
   },
   addEventListener() {},
   removeEventListener() {},
   getComputedStyle() {
      return {
         getPropertyValue() {
            return ""
         },
      }
   },
   Image() {},
   Date() {},
   screen: {},
   setTimeout() {},
   clearTimeout() {},
   matchMedia() {
      return {}
   },
   requestAnimationFrame(e) {
      return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0)
   },
   cancelAnimationFrame(e) {
      typeof setTimeout > "u" || clearTimeout(e)
   },
}
function P() {
   const e = typeof window < "u" ? window : {}
   return Q(e, _e), e
}
function ke(e) {
   const i = e.__proto__
   Object.defineProperty(e, "__proto__", {
      get() {
         return i
      },
      set(t) {
         i.__proto__ = t
      },
   })
}
class _ extends Array {
   constructor(i) {
      typeof i == "number" ? super(i) : (super(...(i || [])), ke(this))
   }
}
function V(e = []) {
   const i = []
   return (
      e.forEach(t => {
         Array.isArray(t) ? i.push(...V(t)) : i.push(t)
      }),
      i
   )
}
function ge(e, i) {
   return Array.prototype.filter.call(e, i)
}
function De(e) {
   const i = []
   for (let t = 0; t < e.length; t += 1) i.indexOf(e[t]) === -1 && i.push(e[t])
   return i
}
function Ne(e, i) {
   if (typeof e != "string") return [e]
   const t = [],
      n = i.querySelectorAll(e)
   for (let s = 0; s < n.length; s += 1) t.push(n[s])
   return t
}
function h(e, i) {
   const t = P(),
      n = I()
   let s = []
   if (!i && e instanceof _) return e
   if (!e) return new _(s)
   if (typeof e == "string") {
      const r = e.trim()
      if (r.indexOf("<") >= 0 && r.indexOf(">") >= 0) {
         let a = "div"
         r.indexOf("<li") === 0 && (a = "ul"), r.indexOf("<tr") === 0 && (a = "tbody"), (r.indexOf("<td") === 0 || r.indexOf("<th") === 0) && (a = "tr"), r.indexOf("<tbody") === 0 && (a = "table"), r.indexOf("<option") === 0 && (a = "select")
         const d = n.createElement(a)
         d.innerHTML = r
         for (let l = 0; l < d.childNodes.length; l += 1) s.push(d.childNodes[l])
      } else s = Ne(e.trim(), i || n)
   } else if (e.nodeType || e === t || e === n) s.push(e)
   else if (Array.isArray(e)) {
      if (e instanceof _) return e
      s = e
   }
   return new _(De(s))
}
h.fn = _.prototype
function Ge(...e) {
   const i = V(e.map(t => t.split(" ")))
   return (
      this.forEach(t => {
         t.classList.add(...i)
      }),
      this
   )
}
function je(...e) {
   const i = V(e.map(t => t.split(" ")))
   return (
      this.forEach(t => {
         t.classList.remove(...i)
      }),
      this
   )
}
function Re(...e) {
   const i = V(e.map(t => t.split(" ")))
   this.forEach(t => {
      i.forEach(n => {
         t.classList.toggle(n)
      })
   })
}
function Ve(...e) {
   const i = V(e.map(t => t.split(" ")))
   return ge(this, t => i.filter(n => t.classList.contains(n)).length > 0).length > 0
}
function He(e, i) {
   if (arguments.length === 1 && typeof e == "string") return this[0] ? this[0].getAttribute(e) : void 0
   for (let t = 0; t < this.length; t += 1)
      if (arguments.length === 2) this[t].setAttribute(e, i)
      else for (const n in e) (this[t][n] = e[n]), this[t].setAttribute(n, e[n])
   return this
}
function Fe(e) {
   for (let i = 0; i < this.length; i += 1) this[i].removeAttribute(e)
   return this
}
function We(e) {
   for (let i = 0; i < this.length; i += 1) this[i].style.transform = e
   return this
}
function qe(e) {
   for (let i = 0; i < this.length; i += 1) this[i].style.transitionDuration = typeof e != "string" ? `${e}ms` : e
   return this
}
function Xe(...e) {
   let [i, t, n, s] = e
   typeof e[1] == "function" && (([i, n, s] = e), (t = void 0)), s || (s = !1)
   function r(o) {
      const u = o.target
      if (!u) return
      const f = o.target.dom7EventData || []
      if ((f.indexOf(o) < 0 && f.unshift(o), h(u).is(t))) n.apply(u, f)
      else {
         const c = h(u).parents()
         for (let p = 0; p < c.length; p += 1) h(c[p]).is(t) && n.apply(c[p], f)
      }
   }
   function a(o) {
      const u = o && o.target ? o.target.dom7EventData || [] : []
      u.indexOf(o) < 0 && u.unshift(o), n.apply(this, u)
   }
   const d = i.split(" ")
   let l
   for (let o = 0; o < this.length; o += 1) {
      const u = this[o]
      if (t)
         for (l = 0; l < d.length; l += 1) {
            const f = d[l]
            u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[f] || (u.dom7LiveListeners[f] = []), u.dom7LiveListeners[f].push({ listener: n, proxyListener: r }), u.addEventListener(f, r, s)
         }
      else
         for (l = 0; l < d.length; l += 1) {
            const f = d[l]
            u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[f] || (u.dom7Listeners[f] = []), u.dom7Listeners[f].push({ listener: n, proxyListener: a }), u.addEventListener(f, a, s)
         }
   }
   return this
}
function Ye(...e) {
   let [i, t, n, s] = e
   typeof e[1] == "function" && (([i, n, s] = e), (t = void 0)), s || (s = !1)
   const r = i.split(" ")
   for (let a = 0; a < r.length; a += 1) {
      const d = r[a]
      for (let l = 0; l < this.length; l += 1) {
         const o = this[l]
         let u
         if ((!t && o.dom7Listeners ? (u = o.dom7Listeners[d]) : t && o.dom7LiveListeners && (u = o.dom7LiveListeners[d]), u && u.length))
            for (let f = u.length - 1; f >= 0; f -= 1) {
               const c = u[f]
               ;(n && c.listener === n) || (n && c.listener && c.listener.dom7proxy && c.listener.dom7proxy === n) ? (o.removeEventListener(d, c.proxyListener, s), u.splice(f, 1)) : n || (o.removeEventListener(d, c.proxyListener, s), u.splice(f, 1))
            }
      }
   }
   return this
}
function Ue(...e) {
   const i = P(),
      t = e[0].split(" "),
      n = e[1]
   for (let s = 0; s < t.length; s += 1) {
      const r = t[s]
      for (let a = 0; a < this.length; a += 1) {
         const d = this[a]
         if (i.CustomEvent) {
            const l = new i.CustomEvent(r, { detail: n, bubbles: !0, cancelable: !0 })
            ;(d.dom7EventData = e.filter((o, u) => u > 0)), d.dispatchEvent(l), (d.dom7EventData = []), delete d.dom7EventData
         }
      }
   }
   return this
}
function Ke(e) {
   const i = this
   function t(n) {
      n.target === this && (e.call(this, n), i.off("transitionend", t))
   }
   return e && i.on("transitionend", t), this
}
function Ze(e) {
   if (this.length > 0) {
      if (e) {
         const i = this.styles()
         return this[0].offsetWidth + parseFloat(i.getPropertyValue("margin-right")) + parseFloat(i.getPropertyValue("margin-left"))
      }
      return this[0].offsetWidth
   }
   return null
}
function Je(e) {
   if (this.length > 0) {
      if (e) {
         const i = this.styles()
         return this[0].offsetHeight + parseFloat(i.getPropertyValue("margin-top")) + parseFloat(i.getPropertyValue("margin-bottom"))
      }
      return this[0].offsetHeight
   }
   return null
}
function Qe() {
   if (this.length > 0) {
      const e = P(),
         i = I(),
         t = this[0],
         n = t.getBoundingClientRect(),
         s = i.body,
         r = t.clientTop || s.clientTop || 0,
         a = t.clientLeft || s.clientLeft || 0,
         d = t === e ? e.scrollY : t.scrollTop,
         l = t === e ? e.scrollX : t.scrollLeft
      return { top: n.top + d - r, left: n.left + l - a }
   }
   return null
}
function et() {
   const e = P()
   return this[0] ? e.getComputedStyle(this[0], null) : {}
}
function tt(e, i) {
   const t = P()
   let n
   if (arguments.length === 1)
      if (typeof e == "string") {
         if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e)
      } else {
         for (n = 0; n < this.length; n += 1) for (const s in e) this[n].style[s] = e[s]
         return this
      }
   if (arguments.length === 2 && typeof e == "string") {
      for (n = 0; n < this.length; n += 1) this[n].style[e] = i
      return this
   }
   return this
}
function it(e) {
   return e
      ? (this.forEach((i, t) => {
           e.apply(i, [i, t])
        }),
        this)
      : this
}
function nt(e) {
   const i = ge(this, e)
   return h(i)
}
function st(e) {
   if (typeof e > "u") return this[0] ? this[0].innerHTML : null
   for (let i = 0; i < this.length; i += 1) this[i].innerHTML = e
   return this
}
function rt(e) {
   if (typeof e > "u") return this[0] ? this[0].textContent.trim() : null
   for (let i = 0; i < this.length; i += 1) this[i].textContent = e
   return this
}
function lt(e) {
   const i = P(),
      t = I(),
      n = this[0]
   let s, r
   if (!n || typeof e > "u") return !1
   if (typeof e == "string") {
      if (n.matches) return n.matches(e)
      if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e)
      if (n.msMatchesSelector) return n.msMatchesSelector(e)
      for (s = h(e), r = 0; r < s.length; r += 1) if (s[r] === n) return !0
      return !1
   }
   if (e === t) return n === t
   if (e === i) return n === i
   if (e.nodeType || e instanceof _) {
      for (s = e.nodeType ? [e] : e, r = 0; r < s.length; r += 1) if (s[r] === n) return !0
      return !1
   }
   return !1
}
function at() {
   let e = this[0],
      i
   if (e) {
      for (i = 0; (e = e.previousSibling) !== null; ) e.nodeType === 1 && (i += 1)
      return i
   }
}
function ot(e) {
   if (typeof e > "u") return this
   const i = this.length
   if (e > i - 1) return h([])
   if (e < 0) {
      const t = i + e
      return t < 0 ? h([]) : h([this[t]])
   }
   return h([this[e]])
}
function dt(...e) {
   let i
   const t = I()
   for (let n = 0; n < e.length; n += 1) {
      i = e[n]
      for (let s = 0; s < this.length; s += 1)
         if (typeof i == "string") {
            const r = t.createElement("div")
            for (r.innerHTML = i; r.firstChild; ) this[s].appendChild(r.firstChild)
         } else if (i instanceof _) for (let r = 0; r < i.length; r += 1) this[s].appendChild(i[r])
         else this[s].appendChild(i)
   }
   return this
}
function ut(e) {
   const i = I()
   let t, n
   for (t = 0; t < this.length; t += 1)
      if (typeof e == "string") {
         const s = i.createElement("div")
         for (s.innerHTML = e, n = s.childNodes.length - 1; n >= 0; n -= 1) this[t].insertBefore(s.childNodes[n], this[t].childNodes[0])
      } else if (e instanceof _) for (n = 0; n < e.length; n += 1) this[t].insertBefore(e[n], this[t].childNodes[0])
      else this[t].insertBefore(e, this[t].childNodes[0])
   return this
}
function ft(e) {
   return this.length > 0 ? (e ? (this[0].nextElementSibling && h(this[0].nextElementSibling).is(e) ? h([this[0].nextElementSibling]) : h([])) : this[0].nextElementSibling ? h([this[0].nextElementSibling]) : h([])) : h([])
}
function ct(e) {
   const i = []
   let t = this[0]
   if (!t) return h([])
   for (; t.nextElementSibling; ) {
      const n = t.nextElementSibling
      e ? h(n).is(e) && i.push(n) : i.push(n), (t = n)
   }
   return h(i)
}
function pt(e) {
   if (this.length > 0) {
      const i = this[0]
      return e ? (i.previousElementSibling && h(i.previousElementSibling).is(e) ? h([i.previousElementSibling]) : h([])) : i.previousElementSibling ? h([i.previousElementSibling]) : h([])
   }
   return h([])
}
function ht(e) {
   const i = []
   let t = this[0]
   if (!t) return h([])
   for (; t.previousElementSibling; ) {
      const n = t.previousElementSibling
      e ? h(n).is(e) && i.push(n) : i.push(n), (t = n)
   }
   return h(i)
}
function mt(e) {
   const i = []
   for (let t = 0; t < this.length; t += 1) this[t].parentNode !== null && (e ? h(this[t].parentNode).is(e) && i.push(this[t].parentNode) : i.push(this[t].parentNode))
   return h(i)
}
function gt(e) {
   const i = []
   for (let t = 0; t < this.length; t += 1) {
      let n = this[t].parentNode
      for (; n; ) e ? h(n).is(e) && i.push(n) : i.push(n), (n = n.parentNode)
   }
   return h(i)
}
function vt(e) {
   let i = this
   return typeof e > "u" ? h([]) : (i.is(e) || (i = i.parents(e).eq(0)), i)
}
function St(e) {
   const i = []
   for (let t = 0; t < this.length; t += 1) {
      const n = this[t].querySelectorAll(e)
      for (let s = 0; s < n.length; s += 1) i.push(n[s])
   }
   return h(i)
}
function wt(e) {
   const i = []
   for (let t = 0; t < this.length; t += 1) {
      const n = this[t].children
      for (let s = 0; s < n.length; s += 1) (!e || h(n[s]).is(e)) && i.push(n[s])
   }
   return h(i)
}
function bt() {
   for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e])
   return this
}
const re = { addClass: Ge, removeClass: je, hasClass: Ve, toggleClass: Re, attr: He, removeAttr: Fe, transform: We, transition: qe, on: Xe, off: Ye, trigger: Ue, transitionEnd: Ke, outerWidth: Ze, outerHeight: Je, styles: et, offset: Qe, css: tt, each: it, html: st, text: rt, is: lt, index: at, eq: ot, append: dt, prepend: ut, next: ft, nextAll: ct, prev: pt, prevAll: ht, parent: mt, parents: gt, closest: vt, find: St, children: wt, filter: nt, remove: bt }
Object.keys(re).forEach(e => {
   Object.defineProperty(h.fn, e, { value: re[e], writable: !0 })
})
function yt(e) {
   const i = e
   Object.keys(i).forEach(t => {
      try {
         i[t] = null
      } catch {}
      try {
         delete i[t]
      } catch {}
   })
}
function J(e, i = 0) {
   return setTimeout(e, i)
}
function R() {
   return Date.now()
}
function Tt(e) {
   const i = P()
   let t
   return i.getComputedStyle && (t = i.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t
}
function xt(e, i = "x") {
   const t = P()
   let n, s, r
   const a = Tt(e)
   return (
      t.WebKitCSSMatrix
         ? ((s = a.transform || a.webkitTransform),
           s.split(",").length > 6 &&
              (s = s
                 .split(", ")
                 .map(d => d.replace(",", "."))
                 .join(", ")),
           (r = new t.WebKitCSSMatrix(s === "none" ? "" : s)))
         : ((r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")), (n = r.toString().split(","))),
      i === "x" && (t.WebKitCSSMatrix ? (s = r.m41) : n.length === 16 ? (s = parseFloat(n[12])) : (s = parseFloat(n[4]))),
      i === "y" && (t.WebKitCSSMatrix ? (s = r.m42) : n.length === 16 ? (s = parseFloat(n[13])) : (s = parseFloat(n[5]))),
      s || 0
   )
}
function H(e) {
   return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object"
}
function Ct(e) {
   return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11)
}
function $(...e) {
   const i = Object(e[0]),
      t = ["__proto__", "constructor", "prototype"]
   for (let n = 1; n < e.length; n += 1) {
      const s = e[n]
      if (s != null && !Ct(s)) {
         const r = Object.keys(Object(s)).filter(a => t.indexOf(a) < 0)
         for (let a = 0, d = r.length; a < d; a += 1) {
            const l = r[a],
               o = Object.getOwnPropertyDescriptor(s, l)
            o !== void 0 && o.enumerable && (H(i[l]) && H(s[l]) ? (s[l].__swiper__ ? (i[l] = s[l]) : $(i[l], s[l])) : !H(i[l]) && H(s[l]) ? ((i[l] = {}), s[l].__swiper__ ? (i[l] = s[l]) : $(i[l], s[l])) : (i[l] = s[l]))
         }
      }
   }
   return i
}
function F(e, i, t) {
   e.style.setProperty(i, t)
}
function ve({ swiper: e, targetPosition: i, side: t }) {
   const n = P(),
      s = -e.translate
   let r = null,
      a
   const d = e.params.speed
   ;(e.wrapperEl.style.scrollSnapType = "none"), n.cancelAnimationFrame(e.cssModeFrameID)
   const l = i > s ? "next" : "prev",
      o = (f, c) => (l === "next" && f >= c) || (l === "prev" && f <= c),
      u = () => {
         ;(a = new Date().getTime()), r === null && (r = a)
         const f = Math.max(Math.min((a - r) / d, 1), 0),
            c = 0.5 - Math.cos(f * Math.PI) / 2
         let p = s + c * (i - s)
         if ((o(p, i) && (p = i), e.wrapperEl.scrollTo({ [t]: p }), o(p, i))) {
            ;(e.wrapperEl.style.overflow = "hidden"),
               (e.wrapperEl.style.scrollSnapType = ""),
               setTimeout(() => {
                  ;(e.wrapperEl.style.overflow = ""), e.wrapperEl.scrollTo({ [t]: p })
               }),
               n.cancelAnimationFrame(e.cssModeFrameID)
            return
         }
         e.cssModeFrameID = n.requestAnimationFrame(u)
      }
   u()
}
let q
function Et() {
   const e = P(),
      i = I()
   return {
      smoothScroll: i.documentElement && "scrollBehavior" in i.documentElement.style,
      touch: !!("ontouchstart" in e || (e.DocumentTouch && i instanceof e.DocumentTouch)),
      passiveListener: (function () {
         let n = !1
         try {
            const s = Object.defineProperty({}, "passive", {
               get() {
                  n = !0
               },
            })
            e.addEventListener("testPassiveListener", null, s)
         } catch {}
         return n
      })(),
      gestures: (function () {
         return "ongesturestart" in e
      })(),
   }
}
function Se() {
   return q || (q = Et()), q
}
let X
function Mt({ userAgent: e } = {}) {
   const i = Se(),
      t = P(),
      n = t.navigator.platform,
      s = e || t.navigator.userAgent,
      r = { ios: !1, android: !1 },
      a = t.screen.width,
      d = t.screen.height,
      l = s.match(/(Android);?[\s\/]+([\d.]+)?/)
   let o = s.match(/(iPad).*OS\s([\d_]+)/)
   const u = s.match(/(iPod)(.*OS\s([\d_]+))?/),
      f = !o && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
      c = n === "Win32"
   let p = n === "MacIntel"
   const m = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"]
   return !o && p && i.touch && m.indexOf(`${a}x${d}`) >= 0 && ((o = s.match(/(Version)\/([\d.]+)/)), o || (o = [0, 1, "13_0_0"]), (p = !1)), l && !c && ((r.os = "android"), (r.android = !0)), (o || f || u) && ((r.os = "ios"), (r.ios = !0)), r
}
function Ot(e = {}) {
   return X || (X = Mt(e)), X
}
let Y
function Pt() {
   const e = P()
   function i() {
      const t = e.navigator.userAgent.toLowerCase()
      return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
   }
   return { isSafari: i(), isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent) }
}
function Lt() {
   return Y || (Y = Pt()), Y
}
function Bt({ swiper: e, on: i, emit: t }) {
   const n = P()
   let s = null,
      r = null
   const a = () => {
         !e || e.destroyed || !e.initialized || (t("beforeResize"), t("resize"))
      },
      d = () => {
         !e ||
            e.destroyed ||
            !e.initialized ||
            ((s = new ResizeObserver(u => {
               r = n.requestAnimationFrame(() => {
                  const { width: f, height: c } = e
                  let p = f,
                     m = c
                  u.forEach(({ contentBoxSize: S, contentRect: g, target: y }) => {
                     ;(y && y !== e.el) || ((p = g ? g.width : (S[0] || S).inlineSize), (m = g ? g.height : (S[0] || S).blockSize))
                  }),
                     (p !== f || m !== c) && a()
               })
            })),
            s.observe(e.el))
      },
      l = () => {
         r && n.cancelAnimationFrame(r), s && s.unobserve && e.el && (s.unobserve(e.el), (s = null))
      },
      o = () => {
         !e || e.destroyed || !e.initialized || t("orientationchange")
      }
   i("init", () => {
      if (e.params.resizeObserver && typeof n.ResizeObserver < "u") {
         d()
         return
      }
      n.addEventListener("resize", a), n.addEventListener("orientationchange", o)
   }),
      i("destroy", () => {
         l(), n.removeEventListener("resize", a), n.removeEventListener("orientationchange", o)
      })
}
function $t({ swiper: e, extendParams: i, on: t, emit: n }) {
   const s = [],
      r = P(),
      a = (o, u = {}) => {
         const f = r.MutationObserver || r.WebkitMutationObserver,
            c = new f(p => {
               if (p.length === 1) {
                  n("observerUpdate", p[0])
                  return
               }
               const m = function () {
                  n("observerUpdate", p[0])
               }
               r.requestAnimationFrame ? r.requestAnimationFrame(m) : r.setTimeout(m, 0)
            })
         c.observe(o, { attributes: typeof u.attributes > "u" ? !0 : u.attributes, childList: typeof u.childList > "u" ? !0 : u.childList, characterData: typeof u.characterData > "u" ? !0 : u.characterData }), s.push(c)
      },
      d = () => {
         if (e.params.observer) {
            if (e.params.observeParents) {
               const o = e.$el.parents()
               for (let u = 0; u < o.length; u += 1) a(o[u])
            }
            a(e.$el[0], { childList: e.params.observeSlideChildren }), a(e.$wrapperEl[0], { attributes: !1 })
         }
      },
      l = () => {
         s.forEach(o => {
            o.disconnect()
         }),
            s.splice(0, s.length)
      }
   i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }), t("init", d), t("destroy", l)
}
const It = {
   on(e, i, t) {
      const n = this
      if (!n.eventsListeners || n.destroyed || typeof i != "function") return n
      const s = t ? "unshift" : "push"
      return (
         e.split(" ").forEach(r => {
            n.eventsListeners[r] || (n.eventsListeners[r] = []), n.eventsListeners[r][s](i)
         }),
         n
      )
   },
   once(e, i, t) {
      const n = this
      if (!n.eventsListeners || n.destroyed || typeof i != "function") return n
      function s(...r) {
         n.off(e, s), s.__emitterProxy && delete s.__emitterProxy, i.apply(n, r)
      }
      return (s.__emitterProxy = i), n.on(e, s, t)
   },
   onAny(e, i) {
      const t = this
      if (!t.eventsListeners || t.destroyed || typeof e != "function") return t
      const n = i ? "unshift" : "push"
      return t.eventsAnyListeners.indexOf(e) < 0 && t.eventsAnyListeners[n](e), t
   },
   offAny(e) {
      const i = this
      if (!i.eventsListeners || i.destroyed || !i.eventsAnyListeners) return i
      const t = i.eventsAnyListeners.indexOf(e)
      return t >= 0 && i.eventsAnyListeners.splice(t, 1), i
   },
   off(e, i) {
      const t = this
      return (
         !t.eventsListeners ||
            t.destroyed ||
            !t.eventsListeners ||
            e.split(" ").forEach(n => {
               typeof i > "u"
                  ? (t.eventsListeners[n] = [])
                  : t.eventsListeners[n] &&
                    t.eventsListeners[n].forEach((s, r) => {
                       ;(s === i || (s.__emitterProxy && s.__emitterProxy === i)) && t.eventsListeners[n].splice(r, 1)
                    })
            }),
         t
      )
   },
   emit(...e) {
      const i = this
      if (!i.eventsListeners || i.destroyed || !i.eventsListeners) return i
      let t, n, s
      return (
         typeof e[0] == "string" || Array.isArray(e[0]) ? ((t = e[0]), (n = e.slice(1, e.length)), (s = i)) : ((t = e[0].events), (n = e[0].data), (s = e[0].context || i)),
         n.unshift(s),
         (Array.isArray(t) ? t : t.split(" ")).forEach(a => {
            i.eventsAnyListeners &&
               i.eventsAnyListeners.length &&
               i.eventsAnyListeners.forEach(d => {
                  d.apply(s, [a, ...n])
               }),
               i.eventsListeners &&
                  i.eventsListeners[a] &&
                  i.eventsListeners[a].forEach(d => {
                     d.apply(s, n)
                  })
         }),
         i
      )
   },
}
function zt() {
   const e = this
   let i, t
   const n = e.$el
   typeof e.params.width < "u" && e.params.width !== null ? (i = e.params.width) : (i = n[0].clientWidth), typeof e.params.height < "u" && e.params.height !== null ? (t = e.params.height) : (t = n[0].clientHeight), !((i === 0 && e.isHorizontal()) || (t === 0 && e.isVertical())) && ((i = i - parseInt(n.css("padding-left") || 0, 10) - parseInt(n.css("padding-right") || 0, 10)), (t = t - parseInt(n.css("padding-top") || 0, 10) - parseInt(n.css("padding-bottom") || 0, 10)), Number.isNaN(i) && (i = 0), Number.isNaN(t) && (t = 0), Object.assign(e, { width: i, height: t, size: e.isHorizontal() ? i : t }))
}
function At() {
   const e = this
   function i(b) {
      return e.isHorizontal() ? b : { width: "height", "margin-top": "margin-left", "margin-bottom ": "margin-right", "margin-left": "margin-top", "margin-right": "margin-bottom", "padding-left": "padding-top", "padding-right": "padding-bottom", marginRight: "marginBottom" }[b]
   }
   function t(b, E) {
      return parseFloat(b.getPropertyValue(i(E)) || 0)
   }
   const n = e.params,
      { $wrapperEl: s, size: r, rtlTranslate: a, wrongRTL: d } = e,
      l = e.virtual && n.virtual.enabled,
      o = l ? e.virtual.slides.length : e.slides.length,
      u = s.children(`.${e.params.slideClass}`),
      f = l ? e.virtual.slides.length : u.length
   let c = []
   const p = [],
      m = []
   let S = n.slidesOffsetBefore
   typeof S == "function" && (S = n.slidesOffsetBefore.call(e))
   let g = n.slidesOffsetAfter
   typeof g == "function" && (g = n.slidesOffsetAfter.call(e))
   const y = e.snapGrid.length,
      w = e.slidesGrid.length
   let v = n.spaceBetween,
      C = -S,
      T = 0,
      L = 0
   if (typeof r > "u") return
   typeof v == "string" && v.indexOf("%") >= 0 && (v = (parseFloat(v.replace("%", "")) / 100) * r), (e.virtualSize = -v), a ? u.css({ marginLeft: "", marginBottom: "", marginTop: "" }) : u.css({ marginRight: "", marginBottom: "", marginTop: "" }), n.centeredSlides && n.cssMode && (F(e.wrapperEl, "--swiper-centered-offset-before", ""), F(e.wrapperEl, "--swiper-centered-offset-after", ""))
   const O = n.grid && n.grid.rows > 1 && e.grid
   O && e.grid.initSlides(f)
   let x
   const D = n.slidesPerView === "auto" && n.breakpoints && Object.keys(n.breakpoints).filter(b => typeof n.breakpoints[b].slidesPerView < "u").length > 0
   for (let b = 0; b < f; b += 1) {
      x = 0
      const E = u.eq(b)
      if ((O && e.grid.updateSlide(b, E, f, i), E.css("display") !== "none")) {
         if (n.slidesPerView === "auto") {
            D && (u[b].style[i("width")] = "")
            const M = getComputedStyle(E[0]),
               N = E[0].style.transform,
               W = E[0].style.webkitTransform
            if ((N && (E[0].style.transform = "none"), W && (E[0].style.webkitTransform = "none"), n.roundLengths)) x = e.isHorizontal() ? E.outerWidth(!0) : E.outerHeight(!0)
            else {
               const ee = t(M, "width"),
                  Oe = t(M, "padding-left"),
                  Pe = t(M, "padding-right"),
                  te = t(M, "margin-left"),
                  ie = t(M, "margin-right"),
                  ne = M.getPropertyValue("box-sizing")
               if (ne && ne === "border-box") x = ee + te + ie
               else {
                  const { clientWidth: Le, offsetWidth: Be } = E[0]
                  x = ee + Oe + Pe + te + ie + (Be - Le)
               }
            }
            N && (E[0].style.transform = N), W && (E[0].style.webkitTransform = W), n.roundLengths && (x = Math.floor(x))
         } else (x = (r - (n.slidesPerView - 1) * v) / n.slidesPerView), n.roundLengths && (x = Math.floor(x)), u[b] && (u[b].style[i("width")] = `${x}px`)
         u[b] && (u[b].swiperSlideSize = x), m.push(x), n.centeredSlides ? ((C = C + x / 2 + T / 2 + v), T === 0 && b !== 0 && (C = C - r / 2 - v), b === 0 && (C = C - r / 2 - v), Math.abs(C) < 1 / 1e3 && (C = 0), n.roundLengths && (C = Math.floor(C)), L % n.slidesPerGroup === 0 && c.push(C), p.push(C)) : (n.roundLengths && (C = Math.floor(C)), (L - Math.min(e.params.slidesPerGroupSkip, L)) % e.params.slidesPerGroup === 0 && c.push(C), p.push(C), (C = C + x + v)), (e.virtualSize += x + v), (T = x), (L += 1)
      }
   }
   if (((e.virtualSize = Math.max(e.virtualSize, r) + g), a && d && (n.effect === "slide" || n.effect === "coverflow") && s.css({ width: `${e.virtualSize + n.spaceBetween}px` }), n.setWrapperSize && s.css({ [i("width")]: `${e.virtualSize + n.spaceBetween}px` }), O && e.grid.updateWrapperSize(x, c, i), !n.centeredSlides)) {
      const b = []
      for (let E = 0; E < c.length; E += 1) {
         let M = c[E]
         n.roundLengths && (M = Math.floor(M)), c[E] <= e.virtualSize - r && b.push(M)
      }
      ;(c = b), Math.floor(e.virtualSize - r) - Math.floor(c[c.length - 1]) > 1 && c.push(e.virtualSize - r)
   }
   if ((c.length === 0 && (c = [0]), n.spaceBetween !== 0)) {
      const b = e.isHorizontal() && a ? "marginLeft" : i("marginRight")
      u.filter((E, M) => (n.cssMode ? M !== u.length - 1 : !0)).css({ [b]: `${v}px` })
   }
   if (n.centeredSlides && n.centeredSlidesBounds) {
      let b = 0
      m.forEach(M => {
         b += M + (n.spaceBetween ? n.spaceBetween : 0)
      }),
         (b -= n.spaceBetween)
      const E = b - r
      c = c.map(M => (M < 0 ? -S : M > E ? E + g : M))
   }
   if (n.centerInsufficientSlides) {
      let b = 0
      if (
         (m.forEach(E => {
            b += E + (n.spaceBetween ? n.spaceBetween : 0)
         }),
         (b -= n.spaceBetween),
         b < r)
      ) {
         const E = (r - b) / 2
         c.forEach((M, N) => {
            c[N] = M - E
         }),
            p.forEach((M, N) => {
               p[N] = M + E
            })
      }
   }
   if ((Object.assign(e, { slides: u, snapGrid: c, slidesGrid: p, slidesSizesGrid: m }), n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)) {
      F(e.wrapperEl, "--swiper-centered-offset-before", `${-c[0]}px`), F(e.wrapperEl, "--swiper-centered-offset-after", `${e.size / 2 - m[m.length - 1] / 2}px`)
      const b = -e.snapGrid[0],
         E = -e.slidesGrid[0]
      ;(e.snapGrid = e.snapGrid.map(M => M + b)), (e.slidesGrid = e.slidesGrid.map(M => M + E))
   }
   if ((f !== o && e.emit("slidesLengthChange"), c.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), p.length !== w && e.emit("slidesGridLengthChange"), n.watchSlidesProgress && e.updateSlidesOffset(), !l && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))) {
      const b = `${n.containerModifierClass}backface-hidden`,
         E = e.$el.hasClass(b)
      f <= n.maxBackfaceHiddenSlides ? E || e.$el.addClass(b) : E && e.$el.removeClass(b)
   }
}
function _t(e) {
   const i = this,
      t = [],
      n = i.virtual && i.params.virtual.enabled
   let s = 0,
      r
   typeof e == "number" ? i.setTransition(e) : e === !0 && i.setTransition(i.params.speed)
   const a = d => (n ? i.slides.filter(l => parseInt(l.getAttribute("data-swiper-slide-index"), 10) === d)[0] : i.slides.eq(d)[0])
   if (i.params.slidesPerView !== "auto" && i.params.slidesPerView > 1)
      if (i.params.centeredSlides)
         (i.visibleSlides || h([])).each(d => {
            t.push(d)
         })
      else
         for (r = 0; r < Math.ceil(i.params.slidesPerView); r += 1) {
            const d = i.activeIndex + r
            if (d > i.slides.length && !n) break
            t.push(a(d))
         }
   else t.push(a(i.activeIndex))
   for (r = 0; r < t.length; r += 1)
      if (typeof t[r] < "u") {
         const d = t[r].offsetHeight
         s = d > s ? d : s
      }
   ;(s || s === 0) && i.$wrapperEl.css("height", `${s}px`)
}
function kt() {
   const e = this,
      i = e.slides
   for (let t = 0; t < i.length; t += 1) i[t].swiperSlideOffset = e.isHorizontal() ? i[t].offsetLeft : i[t].offsetTop
}
function Dt(e = (this && this.translate) || 0) {
   const i = this,
      t = i.params,
      { slides: n, rtlTranslate: s, snapGrid: r } = i
   if (n.length === 0) return
   typeof n[0].swiperSlideOffset > "u" && i.updateSlidesOffset()
   let a = -e
   s && (a = e), n.removeClass(t.slideVisibleClass), (i.visibleSlidesIndexes = []), (i.visibleSlides = [])
   for (let d = 0; d < n.length; d += 1) {
      const l = n[d]
      let o = l.swiperSlideOffset
      t.cssMode && t.centeredSlides && (o -= n[0].swiperSlideOffset)
      const u = (a + (t.centeredSlides ? i.minTranslate() : 0) - o) / (l.swiperSlideSize + t.spaceBetween),
         f = (a - r[0] + (t.centeredSlides ? i.minTranslate() : 0) - o) / (l.swiperSlideSize + t.spaceBetween),
         c = -(a - o),
         p = c + i.slidesSizesGrid[d]
      ;((c >= 0 && c < i.size - 1) || (p > 1 && p <= i.size) || (c <= 0 && p >= i.size)) && (i.visibleSlides.push(l), i.visibleSlidesIndexes.push(d), n.eq(d).addClass(t.slideVisibleClass)), (l.progress = s ? -u : u), (l.originalProgress = s ? -f : f)
   }
   i.visibleSlides = h(i.visibleSlides)
}
function Nt(e) {
   const i = this
   if (typeof e > "u") {
      const o = i.rtlTranslate ? -1 : 1
      e = (i && i.translate && i.translate * o) || 0
   }
   const t = i.params,
      n = i.maxTranslate() - i.minTranslate()
   let { progress: s, isBeginning: r, isEnd: a } = i
   const d = r,
      l = a
   n === 0 ? ((s = 0), (r = !0), (a = !0)) : ((s = (e - i.minTranslate()) / n), (r = s <= 0), (a = s >= 1)), Object.assign(i, { progress: s, isBeginning: r, isEnd: a }), (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) && i.updateSlidesProgress(e), r && !d && i.emit("reachBeginning toEdge"), a && !l && i.emit("reachEnd toEdge"), ((d && !r) || (l && !a)) && i.emit("fromEdge"), i.emit("progress", s)
}
function Gt() {
   const e = this,
      { slides: i, params: t, $wrapperEl: n, activeIndex: s, realIndex: r } = e,
      a = e.virtual && t.virtual.enabled
   i.removeClass(`${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ${t.slideDuplicatePrevClass}`)
   let d
   a ? (d = e.$wrapperEl.find(`.${t.slideClass}[data-swiper-slide-index="${s}"]`)) : (d = i.eq(s)), d.addClass(t.slideActiveClass), t.loop && (d.hasClass(t.slideDuplicateClass) ? n.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(t.slideDuplicateActiveClass) : n.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(t.slideDuplicateActiveClass))
   let l = d.nextAll(`.${t.slideClass}`).eq(0).addClass(t.slideNextClass)
   t.loop && l.length === 0 && ((l = i.eq(0)), l.addClass(t.slideNextClass))
   let o = d.prevAll(`.${t.slideClass}`).eq(0).addClass(t.slidePrevClass)
   t.loop && o.length === 0 && ((o = i.eq(-1)), o.addClass(t.slidePrevClass)), t.loop && (l.hasClass(t.slideDuplicateClass) ? n.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicateNextClass) : n.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicateNextClass), o.hasClass(t.slideDuplicateClass) ? n.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicatePrevClass) : n.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicatePrevClass)), e.emitSlidesClasses()
}
function jt(e) {
   const i = this,
      t = i.rtlTranslate ? i.translate : -i.translate,
      { slidesGrid: n, snapGrid: s, params: r, activeIndex: a, realIndex: d, snapIndex: l } = i
   let o = e,
      u
   if (typeof o > "u") {
      for (let c = 0; c < n.length; c += 1) typeof n[c + 1] < "u" ? (t >= n[c] && t < n[c + 1] - (n[c + 1] - n[c]) / 2 ? (o = c) : t >= n[c] && t < n[c + 1] && (o = c + 1)) : t >= n[c] && (o = c)
      r.normalizeSlideIndex && (o < 0 || typeof o > "u") && (o = 0)
   }
   if (s.indexOf(t) >= 0) u = s.indexOf(t)
   else {
      const c = Math.min(r.slidesPerGroupSkip, o)
      u = c + Math.floor((o - c) / r.slidesPerGroup)
   }
   if ((u >= s.length && (u = s.length - 1), o === a)) {
      u !== l && ((i.snapIndex = u), i.emit("snapIndexChange"))
      return
   }
   const f = parseInt(i.slides.eq(o).attr("data-swiper-slide-index") || o, 10)
   Object.assign(i, { snapIndex: u, realIndex: f, previousIndex: a, activeIndex: o }), i.emit("activeIndexChange"), i.emit("snapIndexChange"), d !== f && i.emit("realIndexChange"), (i.initialized || i.params.runCallbacksOnInit) && i.emit("slideChange")
}
function Rt(e) {
   const i = this,
      t = i.params,
      n = h(e).closest(`.${t.slideClass}`)[0]
   let s = !1,
      r
   if (n) {
      for (let a = 0; a < i.slides.length; a += 1)
         if (i.slides[a] === n) {
            ;(s = !0), (r = a)
            break
         }
   }
   if (n && s) (i.clickedSlide = n), i.virtual && i.params.virtual.enabled ? (i.clickedIndex = parseInt(h(n).attr("data-swiper-slide-index"), 10)) : (i.clickedIndex = r)
   else {
      ;(i.clickedSlide = void 0), (i.clickedIndex = void 0)
      return
   }
   t.slideToClickedSlide && i.clickedIndex !== void 0 && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide()
}
const Vt = { updateSize: zt, updateSlides: At, updateAutoHeight: _t, updateSlidesOffset: kt, updateSlidesProgress: Dt, updateProgress: Nt, updateSlidesClasses: Gt, updateActiveIndex: jt, updateClickedSlide: Rt }
function Ht(e = this.isHorizontal() ? "x" : "y") {
   const i = this,
      { params: t, rtlTranslate: n, translate: s, $wrapperEl: r } = i
   if (t.virtualTranslate) return n ? -s : s
   if (t.cssMode) return s
   let a = xt(r[0], e)
   return n && (a = -a), a || 0
}
function Ft(e, i) {
   const t = this,
      { rtlTranslate: n, params: s, $wrapperEl: r, wrapperEl: a, progress: d } = t
   let l = 0,
      o = 0
   const u = 0
   t.isHorizontal() ? (l = n ? -e : e) : (o = e), s.roundLengths && ((l = Math.floor(l)), (o = Math.floor(o))), s.cssMode ? (a[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -l : -o) : s.virtualTranslate || r.transform(`translate3d(${l}px, ${o}px, ${u}px)`), (t.previousTranslate = t.translate), (t.translate = t.isHorizontal() ? l : o)
   let f
   const c = t.maxTranslate() - t.minTranslate()
   c === 0 ? (f = 0) : (f = (e - t.minTranslate()) / c), f !== d && t.updateProgress(e), t.emit("setTranslate", t.translate, i)
}
function Wt() {
   return -this.snapGrid[0]
}
function qt() {
   return -this.snapGrid[this.snapGrid.length - 1]
}
function Xt(e = 0, i = this.params.speed, t = !0, n = !0, s) {
   const r = this,
      { params: a, wrapperEl: d } = r
   if (r.animating && a.preventInteractionOnTransition) return !1
   const l = r.minTranslate(),
      o = r.maxTranslate()
   let u
   if ((n && e > l ? (u = l) : n && e < o ? (u = o) : (u = e), r.updateProgress(u), a.cssMode)) {
      const f = r.isHorizontal()
      if (i === 0) d[f ? "scrollLeft" : "scrollTop"] = -u
      else {
         if (!r.support.smoothScroll) return ve({ swiper: r, targetPosition: -u, side: f ? "left" : "top" }), !0
         d.scrollTo({ [f ? "left" : "top"]: -u, behavior: "smooth" })
      }
      return !0
   }
   return (
      i === 0
         ? (r.setTransition(0), r.setTranslate(u), t && (r.emit("beforeTransitionStart", i, s), r.emit("transitionEnd")))
         : (r.setTransition(i),
           r.setTranslate(u),
           t && (r.emit("beforeTransitionStart", i, s), r.emit("transitionStart")),
           r.animating ||
              ((r.animating = !0),
              r.onTranslateToWrapperTransitionEnd ||
                 (r.onTranslateToWrapperTransitionEnd = function (c) {
                    !r || r.destroyed || (c.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), (r.onTranslateToWrapperTransitionEnd = null), delete r.onTranslateToWrapperTransitionEnd, t && r.emit("transitionEnd")))
                 }),
              r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
              r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))),
      !0
   )
}
const Yt = { getTranslate: Ht, setTranslate: Ft, minTranslate: Wt, maxTranslate: qt, translateTo: Xt }
function Ut(e, i) {
   const t = this
   t.params.cssMode || t.$wrapperEl.transition(e), t.emit("setTransition", e, i)
}
function we({ swiper: e, runCallbacks: i, direction: t, step: n }) {
   const { activeIndex: s, previousIndex: r } = e
   let a = t
   if ((a || (s > r ? (a = "next") : s < r ? (a = "prev") : (a = "reset")), e.emit(`transition${n}`), i && s !== r)) {
      if (a === "reset") {
         e.emit(`slideResetTransition${n}`)
         return
      }
      e.emit(`slideChangeTransition${n}`), a === "next" ? e.emit(`slideNextTransition${n}`) : e.emit(`slidePrevTransition${n}`)
   }
}
function Kt(e = !0, i) {
   const t = this,
      { params: n } = t
   n.cssMode || (n.autoHeight && t.updateAutoHeight(), we({ swiper: t, runCallbacks: e, direction: i, step: "Start" }))
}
function Zt(e = !0, i) {
   const t = this,
      { params: n } = t
   ;(t.animating = !1), !n.cssMode && (t.setTransition(0), we({ swiper: t, runCallbacks: e, direction: i, step: "End" }))
}
const Jt = { setTransition: Ut, transitionStart: Kt, transitionEnd: Zt }
function Qt(e = 0, i = this.params.speed, t = !0, n, s) {
   if (typeof e != "number" && typeof e != "string") throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`)
   if (typeof e == "string") {
      const v = parseInt(e, 10)
      if (!isFinite(v)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`)
      e = v
   }
   const r = this
   let a = e
   a < 0 && (a = 0)
   const { params: d, snapGrid: l, slidesGrid: o, previousIndex: u, activeIndex: f, rtlTranslate: c, wrapperEl: p, enabled: m } = r
   if ((r.animating && d.preventInteractionOnTransition) || (!m && !n && !s)) return !1
   const S = Math.min(r.params.slidesPerGroupSkip, a)
   let g = S + Math.floor((a - S) / r.params.slidesPerGroup)
   g >= l.length && (g = l.length - 1)
   const y = -l[g]
   if (d.normalizeSlideIndex)
      for (let v = 0; v < o.length; v += 1) {
         const C = -Math.floor(y * 100),
            T = Math.floor(o[v] * 100),
            L = Math.floor(o[v + 1] * 100)
         typeof o[v + 1] < "u" ? (C >= T && C < L - (L - T) / 2 ? (a = v) : C >= T && C < L && (a = v + 1)) : C >= T && (a = v)
      }
   if (r.initialized && a !== f && ((!r.allowSlideNext && y < r.translate && y < r.minTranslate()) || (!r.allowSlidePrev && y > r.translate && y > r.maxTranslate() && (f || 0) !== a))) return !1
   a !== (u || 0) && t && r.emit("beforeSlideChangeStart"), r.updateProgress(y)
   let w
   if ((a > f ? (w = "next") : a < f ? (w = "prev") : (w = "reset"), (c && -y === r.translate) || (!c && y === r.translate))) return r.updateActiveIndex(a), d.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), d.effect !== "slide" && r.setTranslate(y), w !== "reset" && (r.transitionStart(t, w), r.transitionEnd(t, w)), !1
   if (d.cssMode) {
      const v = r.isHorizontal(),
         C = c ? y : -y
      if (i === 0) {
         const T = r.virtual && r.params.virtual.enabled
         T && ((r.wrapperEl.style.scrollSnapType = "none"), (r._immediateVirtual = !0)),
            (p[v ? "scrollLeft" : "scrollTop"] = C),
            T &&
               requestAnimationFrame(() => {
                  ;(r.wrapperEl.style.scrollSnapType = ""), (r._swiperImmediateVirtual = !1)
               })
      } else {
         if (!r.support.smoothScroll) return ve({ swiper: r, targetPosition: C, side: v ? "left" : "top" }), !0
         p.scrollTo({ [v ? "left" : "top"]: C, behavior: "smooth" })
      }
      return !0
   }
   return (
      r.setTransition(i),
      r.setTranslate(y),
      r.updateActiveIndex(a),
      r.updateSlidesClasses(),
      r.emit("beforeTransitionStart", i, n),
      r.transitionStart(t, w),
      i === 0
         ? r.transitionEnd(t, w)
         : r.animating ||
           ((r.animating = !0),
           r.onSlideToWrapperTransitionEnd ||
              (r.onSlideToWrapperTransitionEnd = function (C) {
                 !r || r.destroyed || (C.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), (r.onSlideToWrapperTransitionEnd = null), delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(t, w)))
              }),
           r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
           r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)),
      !0
   )
}
function ei(e = 0, i = this.params.speed, t = !0, n) {
   if (typeof e == "string") {
      const a = parseInt(e, 10)
      if (!isFinite(a)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`)
      e = a
   }
   const s = this
   let r = e
   return s.params.loop && (r += s.loopedSlides), s.slideTo(r, i, t, n)
}
function ti(e = this.params.speed, i = !0, t) {
   const n = this,
      { animating: s, enabled: r, params: a } = n
   if (!r) return n
   let d = a.slidesPerGroup
   a.slidesPerView === "auto" && a.slidesPerGroup === 1 && a.slidesPerGroupAuto && (d = Math.max(n.slidesPerViewDynamic("current", !0), 1))
   const l = n.activeIndex < a.slidesPerGroupSkip ? 1 : d
   if (a.loop) {
      if (s && a.loopPreventsSlide) return !1
      n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft)
   }
   return a.rewind && n.isEnd ? n.slideTo(0, e, i, t) : n.slideTo(n.activeIndex + l, e, i, t)
}
function ii(e = this.params.speed, i = !0, t) {
   const n = this,
      { params: s, animating: r, snapGrid: a, slidesGrid: d, rtlTranslate: l, enabled: o } = n
   if (!o) return n
   if (s.loop) {
      if (r && s.loopPreventsSlide) return !1
      n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft)
   }
   const u = l ? n.translate : -n.translate
   function f(g) {
      return g < 0 ? -Math.floor(Math.abs(g)) : Math.floor(g)
   }
   const c = f(u),
      p = a.map(g => f(g))
   let m = a[p.indexOf(c) - 1]
   if (typeof m > "u" && s.cssMode) {
      let g
      a.forEach((y, w) => {
         c >= y && (g = w)
      }),
         typeof g < "u" && (m = a[g > 0 ? g - 1 : g])
   }
   let S = 0
   if ((typeof m < "u" && ((S = d.indexOf(m)), S < 0 && (S = n.activeIndex - 1), s.slidesPerView === "auto" && s.slidesPerGroup === 1 && s.slidesPerGroupAuto && ((S = S - n.slidesPerViewDynamic("previous", !0) + 1), (S = Math.max(S, 0)))), s.rewind && n.isBeginning)) {
      const g = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1
      return n.slideTo(g, e, i, t)
   }
   return n.slideTo(S, e, i, t)
}
function ni(e = this.params.speed, i = !0, t) {
   const n = this
   return n.slideTo(n.activeIndex, e, i, t)
}
function si(e = this.params.speed, i = !0, t, n = 0.5) {
   const s = this
   let r = s.activeIndex
   const a = Math.min(s.params.slidesPerGroupSkip, r),
      d = a + Math.floor((r - a) / s.params.slidesPerGroup),
      l = s.rtlTranslate ? s.translate : -s.translate
   if (l >= s.snapGrid[d]) {
      const o = s.snapGrid[d],
         u = s.snapGrid[d + 1]
      l - o > (u - o) * n && (r += s.params.slidesPerGroup)
   } else {
      const o = s.snapGrid[d - 1],
         u = s.snapGrid[d]
      l - o <= (u - o) * n && (r -= s.params.slidesPerGroup)
   }
   return (r = Math.max(r, 0)), (r = Math.min(r, s.slidesGrid.length - 1)), s.slideTo(r, e, i, t)
}
function ri() {
   const e = this,
      { params: i, $wrapperEl: t } = e,
      n = i.slidesPerView === "auto" ? e.slidesPerViewDynamic() : i.slidesPerView
   let s = e.clickedIndex,
      r
   if (i.loop) {
      if (e.animating) return
      ;(r = parseInt(h(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
         i.centeredSlides
            ? s < e.loopedSlides - n / 2 || s > e.slides.length - e.loopedSlides + n / 2
               ? (e.loopFix(),
                 (s = t.children(`.${i.slideClass}[data-swiper-slide-index="${r}"]:not(.${i.slideDuplicateClass})`).eq(0).index()),
                 J(() => {
                    e.slideTo(s)
                 }))
               : e.slideTo(s)
            : s > e.slides.length - n
              ? (e.loopFix(),
                (s = t.children(`.${i.slideClass}[data-swiper-slide-index="${r}"]:not(.${i.slideDuplicateClass})`).eq(0).index()),
                J(() => {
                   e.slideTo(s)
                }))
              : e.slideTo(s)
   } else e.slideTo(s)
}
const li = { slideTo: Qt, slideToLoop: ei, slideNext: ti, slidePrev: ii, slideReset: ni, slideToClosest: si, slideToClickedSlide: ri }
function ai() {
   const e = this,
      i = I(),
      { params: t, $wrapperEl: n } = e,
      s = n.children().length > 0 ? h(n.children()[0].parentNode) : n
   s.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove()
   let r = s.children(`.${t.slideClass}`)
   if (t.loopFillGroupWithBlank) {
      const l = t.slidesPerGroup - (r.length % t.slidesPerGroup)
      if (l !== t.slidesPerGroup) {
         for (let o = 0; o < l; o += 1) {
            const u = h(i.createElement("div")).addClass(`${t.slideClass} ${t.slideBlankClass}`)
            s.append(u)
         }
         r = s.children(`.${t.slideClass}`)
      }
   }
   t.slidesPerView === "auto" && !t.loopedSlides && (t.loopedSlides = r.length), (e.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10))), (e.loopedSlides += t.loopAdditionalSlides), e.loopedSlides > r.length && e.params.loopedSlidesLimit && (e.loopedSlides = r.length)
   const a = [],
      d = []
   r.each((l, o) => {
      h(l).attr("data-swiper-slide-index", o)
   })
   for (let l = 0; l < e.loopedSlides; l += 1) {
      const o = l - Math.floor(l / r.length) * r.length
      d.push(r.eq(o)[0]), a.unshift(r.eq(r.length - o - 1)[0])
   }
   for (let l = 0; l < d.length; l += 1) s.append(h(d[l].cloneNode(!0)).addClass(t.slideDuplicateClass))
   for (let l = a.length - 1; l >= 0; l -= 1) s.prepend(h(a[l].cloneNode(!0)).addClass(t.slideDuplicateClass))
}
function oi() {
   const e = this
   e.emit("beforeLoopFix")
   const { activeIndex: i, slides: t, loopedSlides: n, allowSlidePrev: s, allowSlideNext: r, snapGrid: a, rtlTranslate: d } = e
   let l
   ;(e.allowSlidePrev = !0), (e.allowSlideNext = !0)
   const u = -a[i] - e.getTranslate()
   i < n ? ((l = t.length - n * 3 + i), (l += n), e.slideTo(l, 0, !1, !0) && u !== 0 && e.setTranslate((d ? -e.translate : e.translate) - u)) : i >= t.length - n && ((l = -t.length + i + n), (l += n), e.slideTo(l, 0, !1, !0) && u !== 0 && e.setTranslate((d ? -e.translate : e.translate) - u)), (e.allowSlidePrev = s), (e.allowSlideNext = r), e.emit("loopFix")
}
function di() {
   const e = this,
      { $wrapperEl: i, params: t, slides: n } = e
   i.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), n.removeAttr("data-swiper-slide-index")
}
const ui = { loopCreate: ai, loopFix: oi, loopDestroy: di }
function fi(e) {
   const i = this
   if (i.support.touch || !i.params.simulateTouch || (i.params.watchOverflow && i.isLocked) || i.params.cssMode) return
   const t = i.params.touchEventsTarget === "container" ? i.el : i.wrapperEl
   ;(t.style.cursor = "move"), (t.style.cursor = e ? "grabbing" : "grab")
}
function ci() {
   const e = this
   e.support.touch || (e.params.watchOverflow && e.isLocked) || e.params.cssMode || (e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "")
}
const pi = { setGrabCursor: fi, unsetGrabCursor: ci }
function hi(e, i = this) {
   function t(n) {
      if (!n || n === I() || n === P()) return null
      n.assignedSlot && (n = n.assignedSlot)
      const s = n.closest(e)
      return !s && !n.getRootNode ? null : s || t(n.getRootNode().host)
   }
   return t(i)
}
function mi(e) {
   const i = this,
      t = I(),
      n = P(),
      s = i.touchEventsData,
      { params: r, touches: a, enabled: d } = i
   if (!d || (i.animating && r.preventInteractionOnTransition)) return
   !i.animating && r.cssMode && r.loop && i.loopFix()
   let l = e
   l.originalEvent && (l = l.originalEvent)
   let o = h(l.target)
   if ((r.touchEventsTarget === "wrapper" && !o.closest(i.wrapperEl).length) || ((s.isTouchEvent = l.type === "touchstart"), !s.isTouchEvent && "which" in l && l.which === 3) || (!s.isTouchEvent && "button" in l && l.button > 0) || (s.isTouched && s.isMoved)) return
   const u = !!r.noSwipingClass && r.noSwipingClass !== "",
      f = e.composedPath ? e.composedPath() : e.path
   u && l.target && l.target.shadowRoot && f && (o = h(f[0]))
   const c = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
      p = !!(l.target && l.target.shadowRoot)
   if (r.noSwiping && (p ? hi(c, o[0]) : o.closest(c)[0])) {
      i.allowClick = !0
      return
   }
   if (r.swipeHandler && !o.closest(r.swipeHandler)[0]) return
   ;(a.currentX = l.type === "touchstart" ? l.targetTouches[0].pageX : l.pageX), (a.currentY = l.type === "touchstart" ? l.targetTouches[0].pageY : l.pageY)
   const m = a.currentX,
      S = a.currentY,
      g = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
      y = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold
   if (g && (m <= y || m >= n.innerWidth - y))
      if (g === "prevent") e.preventDefault()
      else return
   if ((Object.assign(s, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }), (a.startX = m), (a.startY = S), (s.touchStartTime = R()), (i.allowClick = !0), i.updateSize(), (i.swipeDirection = void 0), r.threshold > 0 && (s.allowThresholdMove = !1), l.type !== "touchstart")) {
      let w = !0
      o.is(s.focusableElements) && ((w = !1), o[0].nodeName === "SELECT" && (s.isTouched = !1)), t.activeElement && h(t.activeElement).is(s.focusableElements) && t.activeElement !== o[0] && t.activeElement.blur()
      const v = w && i.allowTouchMove && r.touchStartPreventDefault
      ;(r.touchStartForcePreventDefault || v) && !o[0].isContentEditable && l.preventDefault()
   }
   i.params.freeMode && i.params.freeMode.enabled && i.freeMode && i.animating && !r.cssMode && i.freeMode.onTouchStart(), i.emit("touchStart", l)
}
function gi(e) {
   const i = I(),
      t = this,
      n = t.touchEventsData,
      { params: s, touches: r, rtlTranslate: a, enabled: d } = t
   if (!d) return
   let l = e
   if ((l.originalEvent && (l = l.originalEvent), !n.isTouched)) {
      n.startMoving && n.isScrolling && t.emit("touchMoveOpposite", l)
      return
   }
   if (n.isTouchEvent && l.type !== "touchmove") return
   const o = l.type === "touchmove" && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
      u = l.type === "touchmove" ? o.pageX : l.pageX,
      f = l.type === "touchmove" ? o.pageY : l.pageY
   if (l.preventedByNestedSwiper) {
      ;(r.startX = u), (r.startY = f)
      return
   }
   if (!t.allowTouchMove) {
      h(l.target).is(n.focusableElements) || (t.allowClick = !1), n.isTouched && (Object.assign(r, { startX: u, startY: f, currentX: u, currentY: f }), (n.touchStartTime = R()))
      return
   }
   if (n.isTouchEvent && s.touchReleaseOnEdges && !s.loop) {
      if (t.isVertical()) {
         if ((f < r.startY && t.translate <= t.maxTranslate()) || (f > r.startY && t.translate >= t.minTranslate())) {
            ;(n.isTouched = !1), (n.isMoved = !1)
            return
         }
      } else if ((u < r.startX && t.translate <= t.maxTranslate()) || (u > r.startX && t.translate >= t.minTranslate())) return
   }
   if (n.isTouchEvent && i.activeElement && l.target === i.activeElement && h(l.target).is(n.focusableElements)) {
      ;(n.isMoved = !0), (t.allowClick = !1)
      return
   }
   if ((n.allowTouchCallbacks && t.emit("touchMove", l), l.targetTouches && l.targetTouches.length > 1)) return
   ;(r.currentX = u), (r.currentY = f)
   const c = r.currentX - r.startX,
      p = r.currentY - r.startY
   if (t.params.threshold && Math.sqrt(c ** 2 + p ** 2) < t.params.threshold) return
   if (typeof n.isScrolling > "u") {
      let y
      ;(t.isHorizontal() && r.currentY === r.startY) || (t.isVertical() && r.currentX === r.startX) ? (n.isScrolling = !1) : c * c + p * p >= 25 && ((y = (Math.atan2(Math.abs(p), Math.abs(c)) * 180) / Math.PI), (n.isScrolling = t.isHorizontal() ? y > s.touchAngle : 90 - y > s.touchAngle))
   }
   if ((n.isScrolling && t.emit("touchMoveOpposite", l), typeof n.startMoving > "u" && (r.currentX !== r.startX || r.currentY !== r.startY) && (n.startMoving = !0), n.isScrolling)) {
      n.isTouched = !1
      return
   }
   if (!n.startMoving) return
   ;(t.allowClick = !1), !s.cssMode && l.cancelable && l.preventDefault(), s.touchMoveStopPropagation && !s.nested && l.stopPropagation(), n.isMoved || (s.loop && !s.cssMode && t.loopFix(), (n.startTranslate = t.getTranslate()), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), (n.allowMomentumBounce = !1), s.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit("sliderFirstMove", l)), t.emit("sliderMove", l), (n.isMoved = !0)
   let m = t.isHorizontal() ? c : p
   ;(r.diff = m), (m *= s.touchRatio), a && (m = -m), (t.swipeDirection = m > 0 ? "prev" : "next"), (n.currentTranslate = m + n.startTranslate)
   let S = !0,
      g = s.resistanceRatio
   if ((s.touchReleaseOnEdges && (g = 0), m > 0 && n.currentTranslate > t.minTranslate() ? ((S = !1), s.resistance && (n.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + n.startTranslate + m) ** g)) : m < 0 && n.currentTranslate < t.maxTranslate() && ((S = !1), s.resistance && (n.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - n.startTranslate - m) ** g)), S && (l.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !t.allowSlidePrev && t.swipeDirection === "prev" && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), !t.allowSlidePrev && !t.allowSlideNext && (n.currentTranslate = n.startTranslate), s.threshold > 0))
      if (Math.abs(m) > s.threshold || n.allowThresholdMove) {
         if (!n.allowThresholdMove) {
            ;(n.allowThresholdMove = !0), (r.startX = r.currentX), (r.startY = r.currentY), (n.currentTranslate = n.startTranslate), (r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
            return
         }
      } else {
         n.currentTranslate = n.startTranslate
         return
      }
   !s.followFinger || s.cssMode || (((s.freeMode && s.freeMode.enabled && t.freeMode) || s.watchSlidesProgress) && (t.updateActiveIndex(), t.updateSlidesClasses()), t.params.freeMode && s.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(), t.updateProgress(n.currentTranslate), t.setTranslate(n.currentTranslate))
}
function vi(e) {
   const i = this,
      t = i.touchEventsData,
      { params: n, touches: s, rtlTranslate: r, slidesGrid: a, enabled: d } = i
   if (!d) return
   let l = e
   if ((l.originalEvent && (l = l.originalEvent), t.allowTouchCallbacks && i.emit("touchEnd", l), (t.allowTouchCallbacks = !1), !t.isTouched)) {
      t.isMoved && n.grabCursor && i.setGrabCursor(!1), (t.isMoved = !1), (t.startMoving = !1)
      return
   }
   n.grabCursor && t.isMoved && t.isTouched && (i.allowSlideNext === !0 || i.allowSlidePrev === !0) && i.setGrabCursor(!1)
   const o = R(),
      u = o - t.touchStartTime
   if (i.allowClick) {
      const w = l.path || (l.composedPath && l.composedPath())
      i.updateClickedSlide((w && w[0]) || l.target), i.emit("tap click", l), u < 300 && o - t.lastClickTime < 300 && i.emit("doubleTap doubleClick", l)
   }
   if (
      ((t.lastClickTime = R()),
      J(() => {
         i.destroyed || (i.allowClick = !0)
      }),
      !t.isTouched || !t.isMoved || !i.swipeDirection || s.diff === 0 || t.currentTranslate === t.startTranslate)
   ) {
      ;(t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1)
      return
   }
   ;(t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1)
   let f
   if ((n.followFinger ? (f = r ? i.translate : -i.translate) : (f = -t.currentTranslate), n.cssMode)) return
   if (i.params.freeMode && n.freeMode.enabled) {
      i.freeMode.onTouchEnd({ currentPos: f })
      return
   }
   let c = 0,
      p = i.slidesSizesGrid[0]
   for (let w = 0; w < a.length; w += w < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
      const v = w < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup
      typeof a[w + v] < "u" ? f >= a[w] && f < a[w + v] && ((c = w), (p = a[w + v] - a[w])) : f >= a[w] && ((c = w), (p = a[a.length - 1] - a[a.length - 2]))
   }
   let m = null,
      S = null
   n.rewind && (i.isBeginning ? (S = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1) : i.isEnd && (m = 0))
   const g = (f - a[c]) / p,
      y = c < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup
   if (u > n.longSwipesMs) {
      if (!n.longSwipes) {
         i.slideTo(i.activeIndex)
         return
      }
      i.swipeDirection === "next" && (g >= n.longSwipesRatio ? i.slideTo(n.rewind && i.isEnd ? m : c + y) : i.slideTo(c)), i.swipeDirection === "prev" && (g > 1 - n.longSwipesRatio ? i.slideTo(c + y) : S !== null && g < 0 && Math.abs(g) > n.longSwipesRatio ? i.slideTo(S) : i.slideTo(c))
   } else {
      if (!n.shortSwipes) {
         i.slideTo(i.activeIndex)
         return
      }
      i.navigation && (l.target === i.navigation.nextEl || l.target === i.navigation.prevEl) ? (l.target === i.navigation.nextEl ? i.slideTo(c + y) : i.slideTo(c)) : (i.swipeDirection === "next" && i.slideTo(m !== null ? m : c + y), i.swipeDirection === "prev" && i.slideTo(S !== null ? S : c))
   }
}
function le() {
   const e = this,
      { params: i, el: t } = e
   if (t && t.offsetWidth === 0) return
   i.breakpoints && e.setBreakpoint()
   const { allowSlideNext: n, allowSlidePrev: s, snapGrid: r } = e
   ;(e.allowSlideNext = !0), (e.allowSlidePrev = !0), e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), (i.slidesPerView === "auto" || i.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), (e.allowSlidePrev = s), (e.allowSlideNext = n), e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
}
function Si(e) {
   const i = this
   i.enabled && (i.allowClick || (i.params.preventClicks && e.preventDefault(), i.params.preventClicksPropagation && i.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
}
function wi() {
   const e = this,
      { wrapperEl: i, rtlTranslate: t, enabled: n } = e
   if (!n) return
   ;(e.previousTranslate = e.translate), e.isHorizontal() ? (e.translate = -i.scrollLeft) : (e.translate = -i.scrollTop), e.translate === 0 && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses()
   let s
   const r = e.maxTranslate() - e.minTranslate()
   r === 0 ? (s = 0) : (s = (e.translate - e.minTranslate()) / r), s !== e.progress && e.updateProgress(t ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
}
let ae = !1
function bi() {}
const be = (e, i) => {
   const t = I(),
      { params: n, touchEvents: s, el: r, wrapperEl: a, device: d, support: l } = e,
      o = !!n.nested,
      u = i === "on" ? "addEventListener" : "removeEventListener",
      f = i
   if (!l.touch) r[u](s.start, e.onTouchStart, !1), t[u](s.move, e.onTouchMove, o), t[u](s.end, e.onTouchEnd, !1)
   else {
      const c = s.start === "touchstart" && l.passiveListener && n.passiveListeners ? { passive: !0, capture: !1 } : !1
      r[u](s.start, e.onTouchStart, c), r[u](s.move, e.onTouchMove, l.passiveListener ? { passive: !1, capture: o } : o), r[u](s.end, e.onTouchEnd, c), s.cancel && r[u](s.cancel, e.onTouchEnd, c)
   }
   ;(n.preventClicks || n.preventClicksPropagation) && r[u]("click", e.onClick, !0), n.cssMode && a[u]("scroll", e.onScroll), n.updateOnWindowResize ? e[f](d.ios || d.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", le, !0) : e[f]("observerUpdate", le, !0)
}
function yi() {
   const e = this,
      i = I(),
      { params: t, support: n } = e
   ;(e.onTouchStart = mi.bind(e)), (e.onTouchMove = gi.bind(e)), (e.onTouchEnd = vi.bind(e)), t.cssMode && (e.onScroll = wi.bind(e)), (e.onClick = Si.bind(e)), n.touch && !ae && (i.addEventListener("touchstart", bi), (ae = !0)), be(e, "on")
}
function Ti() {
   be(this, "off")
}
const xi = { attachEvents: yi, detachEvents: Ti },
   oe = (e, i) => e.grid && i.grid && i.grid.rows > 1
function Ci() {
   const e = this,
      { activeIndex: i, initialized: t, loopedSlides: n = 0, params: s, $el: r } = e,
      a = s.breakpoints
   if (!a || (a && Object.keys(a).length === 0)) return
   const d = e.getBreakpoint(a, e.params.breakpointsBase, e.el)
   if (!d || e.currentBreakpoint === d) return
   const o = (d in a ? a[d] : void 0) || e.originalParams,
      u = oe(e, s),
      f = oe(e, o),
      c = s.enabled
   u && !f ? (r.removeClass(`${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`), e.emitContainerClasses()) : !u && f && (r.addClass(`${s.containerModifierClass}grid`), ((o.grid.fill && o.grid.fill === "column") || (!o.grid.fill && s.grid.fill === "column")) && r.addClass(`${s.containerModifierClass}grid-column`), e.emitContainerClasses()),
      ["navigation", "pagination", "scrollbar"].forEach(g => {
         const y = s[g] && s[g].enabled,
            w = o[g] && o[g].enabled
         y && !w && e[g].disable(), !y && w && e[g].enable()
      })
   const p = o.direction && o.direction !== s.direction,
      m = s.loop && (o.slidesPerView !== s.slidesPerView || p)
   p && t && e.changeDirection(), $(e.params, o)
   const S = e.params.enabled
   Object.assign(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }), c && !S ? e.disable() : !c && S && e.enable(), (e.currentBreakpoint = d), e.emit("_beforeBreakpoint", o), m && t && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(i - n + e.loopedSlides, 0, !1)), e.emit("breakpoint", o)
}
function Ei(e, i = "window", t) {
   if (!e || (i === "container" && !t)) return
   let n = !1
   const s = P(),
      r = i === "window" ? s.innerHeight : t.clientHeight,
      a = Object.keys(e).map(d => {
         if (typeof d == "string" && d.indexOf("@") === 0) {
            const l = parseFloat(d.substr(1))
            return { value: r * l, point: d }
         }
         return { value: d, point: d }
      })
   a.sort((d, l) => parseInt(d.value, 10) - parseInt(l.value, 10))
   for (let d = 0; d < a.length; d += 1) {
      const { point: l, value: o } = a[d]
      i === "window" ? s.matchMedia(`(min-width: ${o}px)`).matches && (n = l) : o <= t.clientWidth && (n = l)
   }
   return n || "max"
}
const Mi = { setBreakpoint: Ci, getBreakpoint: Ei }
function Oi(e, i) {
   const t = []
   return (
      e.forEach(n => {
         typeof n == "object"
            ? Object.keys(n).forEach(s => {
                 n[s] && t.push(i + s)
              })
            : typeof n == "string" && t.push(i + n)
      }),
      t
   )
}
function Pi() {
   const e = this,
      { classNames: i, params: t, rtl: n, $el: s, device: r, support: a } = e,
      d = Oi(["initialized", t.direction, { "pointer-events": !a.touch }, { "free-mode": e.params.freeMode && t.freeMode.enabled }, { autoheight: t.autoHeight }, { rtl: n }, { grid: t.grid && t.grid.rows > 1 }, { "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column" }, { android: r.android }, { ios: r.ios }, { "css-mode": t.cssMode }, { centered: t.cssMode && t.centeredSlides }, { "watch-progress": t.watchSlidesProgress }], t.containerModifierClass)
   i.push(...d), s.addClass([...i].join(" ")), e.emitContainerClasses()
}
function Li() {
   const e = this,
      { $el: i, classNames: t } = e
   i.removeClass(t.join(" ")), e.emitContainerClasses()
}
const Bi = { addClasses: Pi, removeClasses: Li }
function $i(e, i, t, n, s, r) {
   const a = P()
   let d
   function l() {
      r && r()
   }
   !h(e).parent("picture")[0] && (!e.complete || !s) && i ? ((d = new a.Image()), (d.onload = l), (d.onerror = l), n && (d.sizes = n), t && (d.srcset = t), i && (d.src = i)) : l()
}
function Ii() {
   const e = this
   e.imagesToLoad = e.$el.find("img")
   function i() {
      typeof e > "u" || e === null || !e || e.destroyed || (e.imagesLoaded !== void 0 && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
   }
   for (let t = 0; t < e.imagesToLoad.length; t += 1) {
      const n = e.imagesToLoad[t]
      e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, i)
   }
}
const zi = { loadImage: $i, preloadImages: Ii }
function Ai() {
   const e = this,
      { isLocked: i, params: t } = e,
      { slidesOffsetBefore: n } = t
   if (n) {
      const s = e.slides.length - 1,
         r = e.slidesGrid[s] + e.slidesSizesGrid[s] + n * 2
      e.isLocked = e.size > r
   } else e.isLocked = e.snapGrid.length === 1
   t.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked), t.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked), i && i !== e.isLocked && (e.isEnd = !1), i !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
}
const _i = { checkOverflow: Ai },
   de = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements: "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopedSlidesLimit: !0,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
   }
function ki(e, i) {
   return function (n = {}) {
      const s = Object.keys(n)[0],
         r = n[s]
      if (typeof r != "object" || r === null) {
         $(i, n)
         return
      }
      if ((["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 && e[s] === !0 && (e[s] = { auto: !0 }), !(s in e && "enabled" in r))) {
         $(i, n)
         return
      }
      e[s] === !0 && (e[s] = { enabled: !0 }), typeof e[s] == "object" && !("enabled" in e[s]) && (e[s].enabled = !0), e[s] || (e[s] = { enabled: !1 }), $(i, n)
   }
}
const U = { eventsEmitter: It, update: Vt, translate: Yt, transition: Jt, slide: li, loop: ui, grabCursor: pi, events: xi, breakpoints: Mi, checkOverflow: _i, classes: Bi, images: zi },
   K = {}
let j = class A {
   constructor(...i) {
      let t, n
      if ((i.length === 1 && i[0].constructor && Object.prototype.toString.call(i[0]).slice(8, -1) === "Object" ? (n = i[0]) : ([t, n] = i), n || (n = {}), (n = $({}, n)), t && !n.el && (n.el = t), n.el && h(n.el).length > 1)) {
         const d = []
         return (
            h(n.el).each(l => {
               const o = $({}, n, { el: l })
               d.push(new A(o))
            }),
            d
         )
      }
      const s = this
      ;(s.__swiper__ = !0), (s.support = Se()), (s.device = Ot({ userAgent: n.userAgent })), (s.browser = Lt()), (s.eventsListeners = {}), (s.eventsAnyListeners = []), (s.modules = [...s.__modules__]), n.modules && Array.isArray(n.modules) && s.modules.push(...n.modules)
      const r = {}
      s.modules.forEach(d => {
         d({ swiper: s, extendParams: ki(n, r), on: s.on.bind(s), once: s.once.bind(s), off: s.off.bind(s), emit: s.emit.bind(s) })
      })
      const a = $({}, de, r)
      return (
         (s.params = $({}, a, K, n)),
         (s.originalParams = $({}, s.params)),
         (s.passedParams = $({}, n)),
         s.params &&
            s.params.on &&
            Object.keys(s.params.on).forEach(d => {
               s.on(d, s.params.on[d])
            }),
         s.params && s.params.onAny && s.onAny(s.params.onAny),
         (s.$ = h),
         Object.assign(s, {
            enabled: s.params.enabled,
            el: t,
            classNames: [],
            slides: h(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
               return s.params.direction === "horizontal"
            },
            isVertical() {
               return s.params.direction === "vertical"
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: s.params.allowSlideNext,
            allowSlidePrev: s.params.allowSlidePrev,
            touchEvents: (function () {
               const l = ["touchstart", "touchmove", "touchend", "touchcancel"],
                  o = ["pointerdown", "pointermove", "pointerup"]
               return (s.touchEventsTouch = { start: l[0], move: l[1], end: l[2], cancel: l[3] }), (s.touchEventsDesktop = { start: o[0], move: o[1], end: o[2] }), s.support.touch || !s.params.simulateTouch ? s.touchEventsTouch : s.touchEventsDesktop
            })(),
            touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, focusableElements: s.params.focusableElements, lastClickTime: R(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 },
            allowClick: !0,
            allowTouchMove: s.params.allowTouchMove,
            touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
            imagesToLoad: [],
            imagesLoaded: 0,
         }),
         s.emit("_swiper"),
         s.params.init && s.init(),
         s
      )
   }
   enable() {
      const i = this
      i.enabled || ((i.enabled = !0), i.params.grabCursor && i.setGrabCursor(), i.emit("enable"))
   }
   disable() {
      const i = this
      i.enabled && ((i.enabled = !1), i.params.grabCursor && i.unsetGrabCursor(), i.emit("disable"))
   }
   setProgress(i, t) {
      const n = this
      i = Math.min(Math.max(i, 0), 1)
      const s = n.minTranslate(),
         a = (n.maxTranslate() - s) * i + s
      n.translateTo(a, typeof t > "u" ? 0 : t), n.updateActiveIndex(), n.updateSlidesClasses()
   }
   emitContainerClasses() {
      const i = this
      if (!i.params._emitClasses || !i.el) return
      const t = i.el.className.split(" ").filter(n => n.indexOf("swiper") === 0 || n.indexOf(i.params.containerModifierClass) === 0)
      i.emit("_containerClasses", t.join(" "))
   }
   getSlideClasses(i) {
      const t = this
      return t.destroyed
         ? ""
         : i.className
              .split(" ")
              .filter(n => n.indexOf("swiper-slide") === 0 || n.indexOf(t.params.slideClass) === 0)
              .join(" ")
   }
   emitSlidesClasses() {
      const i = this
      if (!i.params._emitClasses || !i.el) return
      const t = []
      i.slides.each(n => {
         const s = i.getSlideClasses(n)
         t.push({ slideEl: n, classNames: s }), i.emit("_slideClass", n, s)
      }),
         i.emit("_slideClasses", t)
   }
   slidesPerViewDynamic(i = "current", t = !1) {
      const n = this,
         { params: s, slides: r, slidesGrid: a, slidesSizesGrid: d, size: l, activeIndex: o } = n
      let u = 1
      if (s.centeredSlides) {
         let f = r[o].swiperSlideSize,
            c
         for (let p = o + 1; p < r.length; p += 1) r[p] && !c && ((f += r[p].swiperSlideSize), (u += 1), f > l && (c = !0))
         for (let p = o - 1; p >= 0; p -= 1) r[p] && !c && ((f += r[p].swiperSlideSize), (u += 1), f > l && (c = !0))
      } else if (i === "current") for (let f = o + 1; f < r.length; f += 1) (t ? a[f] + d[f] - a[o] < l : a[f] - a[o] < l) && (u += 1)
      else for (let f = o - 1; f >= 0; f -= 1) a[o] - a[f] < l && (u += 1)
      return u
   }
   update() {
      const i = this
      if (!i || i.destroyed) return
      const { snapGrid: t, params: n } = i
      n.breakpoints && i.setBreakpoint(), i.updateSize(), i.updateSlides(), i.updateProgress(), i.updateSlidesClasses()
      function s() {
         const a = i.rtlTranslate ? i.translate * -1 : i.translate,
            d = Math.min(Math.max(a, i.maxTranslate()), i.minTranslate())
         i.setTranslate(d), i.updateActiveIndex(), i.updateSlidesClasses()
      }
      let r
      i.params.freeMode && i.params.freeMode.enabled ? (s(), i.params.autoHeight && i.updateAutoHeight()) : ((i.params.slidesPerView === "auto" || i.params.slidesPerView > 1) && i.isEnd && !i.params.centeredSlides ? (r = i.slideTo(i.slides.length - 1, 0, !1, !0)) : (r = i.slideTo(i.activeIndex, 0, !1, !0)), r || s()), n.watchOverflow && t !== i.snapGrid && i.checkOverflow(), i.emit("update")
   }
   changeDirection(i, t = !0) {
      const n = this,
         s = n.params.direction
      return (
         i || (i = s === "horizontal" ? "vertical" : "horizontal"),
         i === s ||
            (i !== "horizontal" && i !== "vertical") ||
            (n.$el.removeClass(`${n.params.containerModifierClass}${s}`).addClass(`${n.params.containerModifierClass}${i}`),
            n.emitContainerClasses(),
            (n.params.direction = i),
            n.slides.each(r => {
               i === "vertical" ? (r.style.width = "") : (r.style.height = "")
            }),
            n.emit("changeDirection"),
            t && n.update()),
         n
      )
   }
   changeLanguageDirection(i) {
      const t = this
      ;(t.rtl && i === "rtl") || (!t.rtl && i === "ltr") || ((t.rtl = i === "rtl"), (t.rtlTranslate = t.params.direction === "horizontal" && t.rtl), t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), (t.el.dir = "rtl")) : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), (t.el.dir = "ltr")), t.update())
   }
   mount(i) {
      const t = this
      if (t.mounted) return !0
      const n = h(i || t.params.el)
      if (((i = n[0]), !i)) return !1
      i.swiper = t
      const s = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`
      let a = (() => {
         if (i && i.shadowRoot && i.shadowRoot.querySelector) {
            const d = h(i.shadowRoot.querySelector(s()))
            return (d.children = l => n.children(l)), d
         }
         return n.children ? n.children(s()) : h(n).children(s())
      })()
      if (a.length === 0 && t.params.createElements) {
         const l = I().createElement("div")
         ;(a = h(l)),
            (l.className = t.params.wrapperClass),
            n.append(l),
            n.children(`.${t.params.slideClass}`).each(o => {
               a.append(o)
            })
      }
      return Object.assign(t, { $el: n, el: i, $wrapperEl: a, wrapperEl: a[0], mounted: !0, rtl: i.dir.toLowerCase() === "rtl" || n.css("direction") === "rtl", rtlTranslate: t.params.direction === "horizontal" && (i.dir.toLowerCase() === "rtl" || n.css("direction") === "rtl"), wrongRTL: a.css("display") === "-webkit-box" }), !0
   }
   init(i) {
      const t = this
      return t.initialized || t.mount(i) === !1 || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), (t.initialized = !0), t.emit("init"), t.emit("afterInit")), t
   }
   destroy(i = !0, t = !0) {
      const n = this,
         { params: s, $el: r, $wrapperEl: a, slides: d } = n
      return (
         typeof n.params > "u" ||
            n.destroyed ||
            (n.emit("beforeDestroy"),
            (n.initialized = !1),
            n.detachEvents(),
            s.loop && n.loopDestroy(),
            t && (n.removeClasses(), r.removeAttr("style"), a.removeAttr("style"), d && d.length && d.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
            n.emit("destroy"),
            Object.keys(n.eventsListeners).forEach(l => {
               n.off(l)
            }),
            i !== !1 && ((n.$el[0].swiper = null), yt(n)),
            (n.destroyed = !0)),
         null
      )
   }
   static extendDefaults(i) {
      $(K, i)
   }
   static get extendedDefaults() {
      return K
   }
   static get defaults() {
      return de
   }
   static installModule(i) {
      A.prototype.__modules__ || (A.prototype.__modules__ = [])
      const t = A.prototype.__modules__
      typeof i == "function" && t.indexOf(i) < 0 && t.push(i)
   }
   static use(i) {
      return Array.isArray(i) ? (i.forEach(t => A.installModule(t)), A) : (A.installModule(i), A)
   }
}
Object.keys(U).forEach(e => {
   Object.keys(U[e]).forEach(i => {
      j.prototype[i] = U[e][i]
   })
})
j.use([Bt, $t])
function G(e) {
   return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object"
}
function k(e, i) {
   const t = ["__proto__", "constructor", "prototype"]
   Object.keys(i)
      .filter(n => t.indexOf(n) < 0)
      .forEach(n => {
         typeof e[n] > "u" ? (e[n] = i[n]) : G(i[n]) && G(e[n]) && Object.keys(i[n]).length > 0 ? (i[n].__swiper__ ? (e[n] = i[n]) : k(e[n], i[n])) : (e[n] = i[n])
      })
}
function ye(e = {}) {
   return e.navigation && typeof e.navigation.nextEl > "u" && typeof e.navigation.prevEl > "u"
}
function Te(e = {}) {
   return e.pagination && typeof e.pagination.el > "u"
}
function xe(e = {}) {
   return e.scrollbar && typeof e.scrollbar.el > "u"
}
function Ce(e = "") {
   const i = e
         .split(" ")
         .map(n => n.trim())
         .filter(n => !!n),
      t = []
   return (
      i.forEach(n => {
         t.indexOf(n) < 0 && t.push(n)
      }),
      t.join(" ")
   )
}
const Ee = [
   "modules",
   "init",
   "_direction",
   "touchEventsTarget",
   "initialSlide",
   "_speed",
   "cssMode",
   "updateOnWindowResize",
   "resizeObserver",
   "nested",
   "focusableElements",
   "_enabled",
   "_width",
   "_height",
   "preventInteractionOnTransition",
   "userAgent",
   "url",
   "_edgeSwipeDetection",
   "_edgeSwipeThreshold",
   "_freeMode",
   "_autoHeight",
   "setWrapperSize",
   "virtualTranslate",
   "_effect",
   "breakpoints",
   "_spaceBetween",
   "_slidesPerView",
   "maxBackfaceHiddenSlides",
   "_grid",
   "_slidesPerGroup",
   "_slidesPerGroupSkip",
   "_slidesPerGroupAuto",
   "_centeredSlides",
   "_centeredSlidesBounds",
   "_slidesOffsetBefore",
   "_slidesOffsetAfter",
   "normalizeSlideIndex",
   "_centerInsufficientSlides",
   "_watchOverflow",
   "roundLengths",
   "touchRatio",
   "touchAngle",
   "simulateTouch",
   "_shortSwipes",
   "_longSwipes",
   "longSwipesRatio",
   "longSwipesMs",
   "_followFinger",
   "allowTouchMove",
   "_threshold",
   "touchMoveStopPropagation",
   "touchStartPreventDefault",
   "touchStartForcePreventDefault",
   "touchReleaseOnEdges",
   "uniqueNavElements",
   "_resistance",
   "_resistanceRatio",
   "_watchSlidesProgress",
   "_grabCursor",
   "preventClicks",
   "preventClicksPropagation",
   "_slideToClickedSlide",
   "_preloadImages",
   "updateOnImagesReady",
   "_loop",
   "_loopAdditionalSlides",
   "_loopedSlides",
   "_loopedSlidesLimit",
   "_loopFillGroupWithBlank",
   "loopPreventsSlide",
   "_rewind",
   "_allowSlidePrev",
   "_allowSlideNext",
   "_swipeHandler",
   "_noSwiping",
   "noSwipingClass",
   "noSwipingSelector",
   "passiveListeners",
   "containerModifierClass",
   "slideClass",
   "slideBlankClass",
   "slideActiveClass",
   "slideDuplicateActiveClass",
   "slideVisibleClass",
   "slideDuplicateClass",
   "slideNextClass",
   "slideDuplicateNextClass",
   "slidePrevClass",
   "slideDuplicatePrevClass",
   "wrapperClass",
   "runCallbacksOnInit",
   "observer",
   "observeParents",
   "observeSlideChildren",
   "a11y",
   "_autoplay",
   "_controller",
   "coverflowEffect",
   "cubeEffect",
   "fadeEffect",
   "flipEffect",
   "creativeEffect",
   "cardsEffect",
   "hashNavigation",
   "history",
   "keyboard",
   "lazy",
   "mousewheel",
   "_navigation",
   "_pagination",
   "parallax",
   "_scrollbar",
   "_thumbs",
   "virtual",
   "zoom",
]
function ue(e = {}, i = !0) {
   const t = { on: {} },
      n = {},
      s = {}
   k(t, j.defaults), k(t, j.extendedDefaults), (t._emitClasses = !0), (t.init = !1)
   const r = {},
      a = Ee.map(l => l.replace(/_/, "")),
      d = Object.assign({}, e)
   return (
      Object.keys(d).forEach(l => {
         typeof e[l] > "u" || (a.indexOf(l) >= 0 ? (G(e[l]) ? ((t[l] = {}), (s[l] = {}), k(t[l], e[l]), k(s[l], e[l])) : ((t[l] = e[l]), (s[l] = e[l]))) : l.search(/on[A-Z]/) === 0 && typeof e[l] == "function" ? (i ? (n[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l]) : (t.on[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])) : (r[l] = e[l]))
      }),
      ["navigation", "pagination", "scrollbar"].forEach(l => {
         t[l] === !0 && (t[l] = {}), t[l] === !1 && delete t[l]
      }),
      { params: t, passedParams: s, rest: r, events: n }
   )
}
function Di({ el: e, nextEl: i, prevEl: t, paginationEl: n, scrollbarEl: s, swiper: r }, a) {
   ye(a) && i && t && ((r.params.navigation.nextEl = i), (r.originalParams.navigation.nextEl = i), (r.params.navigation.prevEl = t), (r.originalParams.navigation.prevEl = t)), Te(a) && n && ((r.params.pagination.el = n), (r.originalParams.pagination.el = n)), xe(a) && s && ((r.params.scrollbar.el = s), (r.originalParams.scrollbar.el = s)), r.init(e)
}
const Me = (e, i) => {
   let t = i.slidesPerView
   if (i.breakpoints) {
      const s = j.prototype.getBreakpoint(i.breakpoints),
         r = s in i.breakpoints ? i.breakpoints[s] : void 0
      r && r.slidesPerView && (t = r.slidesPerView)
   }
   let n = Math.ceil(parseFloat(i.loopedSlides || t, 10))
   return (n += i.loopAdditionalSlides), n > e.length && i.loopedSlidesLimit && (n = e.length), n
}
function Ni(e, i, t) {
   const n = i.map((l, o) => (l.props || (l.props = {}), (l.props.swiperRef = e), (l.props["data-swiper-slide-index"] = o), l))
   function s(l, o, u) {
      return l.props || (l.props = {}), z(l.type, { ...l.props, key: `${l.key}-duplicate-${o}-${u}`, class: `${l.props.className || ""} ${t.slideDuplicateClass} ${l.props.class || ""}` }, l.children)
   }
   if (t.loopFillGroupWithBlank) {
      const l = t.slidesPerGroup - (n.length % t.slidesPerGroup)
      if (l !== t.slidesPerGroup)
         for (let o = 0; o < l; o += 1) {
            const u = z("div", { class: `${t.slideClass} ${t.slideBlankClass}` })
            n.push(u)
         }
   }
   t.slidesPerView === "auto" && !t.loopedSlides && (t.loopedSlides = n.length)
   const r = Me(n, t),
      a = [],
      d = []
   for (let l = 0; l < r; l += 1) {
      const o = l - Math.floor(l / n.length) * n.length
      d.push(s(n[o], l, "append")), a.unshift(s(n[n.length - o - 1], l, "prepend"))
   }
   return e.value && (e.value.loopedSlides = r), [...a, ...n, ...d]
}
function Gi(e, i, t, n, s) {
   const r = []
   if (!i) return r
   const a = l => {
      r.indexOf(l) < 0 && r.push(l)
   }
   if (t && n) {
      const l = n.map(s),
         o = t.map(s)
      l.join("") !== o.join("") && a("children"), n.length !== t.length && a("children")
   }
   return (
      Ee.filter(l => l[0] === "_")
         .map(l => l.replace(/_/, ""))
         .forEach(l => {
            if (l in e && l in i)
               if (G(e[l]) && G(i[l])) {
                  const o = Object.keys(e[l]),
                     u = Object.keys(i[l])
                  o.length !== u.length
                     ? a(l)
                     : (o.forEach(f => {
                          e[l][f] !== i[l][f] && a(l)
                       }),
                       u.forEach(f => {
                          e[l][f] !== i[l][f] && a(l)
                       }))
               } else e[l] !== i[l] && a(l)
         }),
      r
   )
}
function Z(e, i, t) {
   e === void 0 && (e = {})
   const n = [],
      s = { "container-start": [], "container-end": [], "wrapper-start": [], "wrapper-end": [] },
      r = (a, d) => {
         Array.isArray(a) &&
            a.forEach(l => {
               const o = typeof l.type == "symbol"
               d === "default" && (d = "container-end"), o && l.children ? r(l.children, "default") : l.type && (l.type.name === "SwiperSlide" || l.type.name === "AsyncComponentWrapper") ? n.push(l) : s[d] && s[d].push(l)
            })
      }
   return (
      Object.keys(e).forEach(a => {
         if (typeof e[a] != "function") return
         const d = e[a]()
         r(d, a)
      }),
      (t.value = i.value),
      (i.value = n),
      { slides: n, slots: s }
   )
}
function ji({ swiper: e, slides: i, passedParams: t, changedParams: n, nextEl: s, prevEl: r, scrollbarEl: a, paginationEl: d }) {
   const l = n.filter(T => T !== "children" && T !== "direction"),
      { params: o, pagination: u, navigation: f, scrollbar: c, virtual: p, thumbs: m } = e
   let S, g, y, w, v
   n.includes("thumbs") && t.thumbs && t.thumbs.swiper && o.thumbs && !o.thumbs.swiper && (S = !0), n.includes("controller") && t.controller && t.controller.control && o.controller && !o.controller.control && (g = !0), n.includes("pagination") && t.pagination && (t.pagination.el || d) && (o.pagination || o.pagination === !1) && u && !u.el && (y = !0), n.includes("scrollbar") && t.scrollbar && (t.scrollbar.el || a) && (o.scrollbar || o.scrollbar === !1) && c && !c.el && (w = !0), n.includes("navigation") && t.navigation && (t.navigation.prevEl || r) && (t.navigation.nextEl || s) && (o.navigation || o.navigation === !1) && f && !f.prevEl && !f.nextEl && (v = !0)
   const C = T => {
      e[T] && (e[T].destroy(), T === "navigation" ? ((o[T].prevEl = void 0), (o[T].nextEl = void 0), (e[T].prevEl = void 0), (e[T].nextEl = void 0)) : ((o[T].el = void 0), (e[T].el = void 0)))
   }
   l.forEach(T => {
      if (G(o[T]) && G(t[T])) k(o[T], t[T])
      else {
         const L = t[T]
         ;(L === !0 || L === !1) && (T === "navigation" || T === "pagination" || T === "scrollbar") ? L === !1 && C(T) : (o[T] = t[T])
      }
   }),
      l.includes("controller") && !g && e.controller && e.controller.control && o.controller && o.controller.control && (e.controller.control = o.controller.control),
      n.includes("children") && i && p && o.virtual.enabled ? ((p.slides = i), p.update(!0)) : n.includes("children") && e.lazy && e.params.lazy.enabled && e.lazy.load(),
      S && m.init() && m.update(!0),
      g && (e.controller.control = o.controller.control),
      y && (d && (o.pagination.el = d), u.init(), u.render(), u.update()),
      w && (a && (o.scrollbar.el = a), c.init(), c.updateSize(), c.setTranslate()),
      v && (s && (o.navigation.nextEl = s), r && (o.navigation.prevEl = r), f.init(), f.update()),
      n.includes("allowSlideNext") && (e.allowSlideNext = t.allowSlideNext),
      n.includes("allowSlidePrev") && (e.allowSlidePrev = t.allowSlidePrev),
      n.includes("direction") && e.changeDirection(t.direction, !1),
      e.update()
}
function Ri(e, i, t) {
   if (!t) return null
   const n = e.value.isHorizontal() ? { [e.value.rtlTranslate ? "right" : "left"]: `${t.offset}px` } : { top: `${t.offset}px` }
   return i.filter((s, r) => r >= t.from && r <= t.to).map(s => (s.props || (s.props = {}), s.props.style || (s.props.style = {}), (s.props.swiperRef = e), (s.props.style = n), z(s.type, { ...s.props }, s.children)))
}
const Vi = e => {
      !e || e.destroyed || !e.params.virtual || (e.params.virtual && !e.params.virtual.enabled) || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
   },
   Fi = {
      name: "Swiper",
      props: {
         tag: { type: String, default: "div" },
         wrapperTag: { type: String, default: "div" },
         modules: { type: Array, default: void 0 },
         init: { type: Boolean, default: void 0 },
         direction: { type: String, default: void 0 },
         touchEventsTarget: { type: String, default: void 0 },
         initialSlide: { type: Number, default: void 0 },
         speed: { type: Number, default: void 0 },
         cssMode: { type: Boolean, default: void 0 },
         updateOnWindowResize: { type: Boolean, default: void 0 },
         resizeObserver: { type: Boolean, default: void 0 },
         nested: { type: Boolean, default: void 0 },
         focusableElements: { type: String, default: void 0 },
         width: { type: Number, default: void 0 },
         height: { type: Number, default: void 0 },
         preventInteractionOnTransition: { type: Boolean, default: void 0 },
         userAgent: { type: String, default: void 0 },
         url: { type: String, default: void 0 },
         edgeSwipeDetection: { type: [Boolean, String], default: void 0 },
         edgeSwipeThreshold: { type: Number, default: void 0 },
         autoHeight: { type: Boolean, default: void 0 },
         setWrapperSize: { type: Boolean, default: void 0 },
         virtualTranslate: { type: Boolean, default: void 0 },
         effect: { type: String, default: void 0 },
         breakpoints: { type: Object, default: void 0 },
         spaceBetween: { type: Number, default: void 0 },
         slidesPerView: { type: [Number, String], default: void 0 },
         maxBackfaceHiddenSlides: { type: Number, default: void 0 },
         slidesPerGroup: { type: Number, default: void 0 },
         slidesPerGroupSkip: { type: Number, default: void 0 },
         slidesPerGroupAuto: { type: Boolean, default: void 0 },
         centeredSlides: { type: Boolean, default: void 0 },
         centeredSlidesBounds: { type: Boolean, default: void 0 },
         slidesOffsetBefore: { type: Number, default: void 0 },
         slidesOffsetAfter: { type: Number, default: void 0 },
         normalizeSlideIndex: { type: Boolean, default: void 0 },
         centerInsufficientSlides: { type: Boolean, default: void 0 },
         watchOverflow: { type: Boolean, default: void 0 },
         roundLengths: { type: Boolean, default: void 0 },
         touchRatio: { type: Number, default: void 0 },
         touchAngle: { type: Number, default: void 0 },
         simulateTouch: { type: Boolean, default: void 0 },
         shortSwipes: { type: Boolean, default: void 0 },
         longSwipes: { type: Boolean, default: void 0 },
         longSwipesRatio: { type: Number, default: void 0 },
         longSwipesMs: { type: Number, default: void 0 },
         followFinger: { type: Boolean, default: void 0 },
         allowTouchMove: { type: Boolean, default: void 0 },
         threshold: { type: Number, default: void 0 },
         touchMoveStopPropagation: { type: Boolean, default: void 0 },
         touchStartPreventDefault: { type: Boolean, default: void 0 },
         touchStartForcePreventDefault: { type: Boolean, default: void 0 },
         touchReleaseOnEdges: { type: Boolean, default: void 0 },
         uniqueNavElements: { type: Boolean, default: void 0 },
         resistance: { type: Boolean, default: void 0 },
         resistanceRatio: { type: Number, default: void 0 },
         watchSlidesProgress: { type: Boolean, default: void 0 },
         grabCursor: { type: Boolean, default: void 0 },
         preventClicks: { type: Boolean, default: void 0 },
         preventClicksPropagation: { type: Boolean, default: void 0 },
         slideToClickedSlide: { type: Boolean, default: void 0 },
         preloadImages: { type: Boolean, default: void 0 },
         updateOnImagesReady: { type: Boolean, default: void 0 },
         loop: { type: Boolean, default: void 0 },
         loopAdditionalSlides: { type: Number, default: void 0 },
         loopedSlides: { type: Number, default: void 0 },
         loopedSlidesLimit: { type: Boolean, default: !0 },
         loopFillGroupWithBlank: { type: Boolean, default: void 0 },
         loopPreventsSlide: { type: Boolean, default: void 0 },
         rewind: { type: Boolean, default: void 0 },
         allowSlidePrev: { type: Boolean, default: void 0 },
         allowSlideNext: { type: Boolean, default: void 0 },
         swipeHandler: { type: Boolean, default: void 0 },
         noSwiping: { type: Boolean, default: void 0 },
         noSwipingClass: { type: String, default: void 0 },
         noSwipingSelector: { type: String, default: void 0 },
         passiveListeners: { type: Boolean, default: void 0 },
         containerModifierClass: { type: String, default: void 0 },
         slideClass: { type: String, default: void 0 },
         slideBlankClass: { type: String, default: void 0 },
         slideActiveClass: { type: String, default: void 0 },
         slideDuplicateActiveClass: { type: String, default: void 0 },
         slideVisibleClass: { type: String, default: void 0 },
         slideDuplicateClass: { type: String, default: void 0 },
         slideNextClass: { type: String, default: void 0 },
         slideDuplicateNextClass: { type: String, default: void 0 },
         slidePrevClass: { type: String, default: void 0 },
         slideDuplicatePrevClass: { type: String, default: void 0 },
         wrapperClass: { type: String, default: void 0 },
         runCallbacksOnInit: { type: Boolean, default: void 0 },
         observer: { type: Boolean, default: void 0 },
         observeParents: { type: Boolean, default: void 0 },
         observeSlideChildren: { type: Boolean, default: void 0 },
         a11y: { type: [Boolean, Object], default: void 0 },
         autoplay: { type: [Boolean, Object], default: void 0 },
         controller: { type: Object, default: void 0 },
         coverflowEffect: { type: Object, default: void 0 },
         cubeEffect: { type: Object, default: void 0 },
         fadeEffect: { type: Object, default: void 0 },
         flipEffect: { type: Object, default: void 0 },
         creativeEffect: { type: Object, default: void 0 },
         cardsEffect: { type: Object, default: void 0 },
         hashNavigation: { type: [Boolean, Object], default: void 0 },
         history: { type: [Boolean, Object], default: void 0 },
         keyboard: { type: [Boolean, Object], default: void 0 },
         lazy: { type: [Boolean, Object], default: void 0 },
         mousewheel: { type: [Boolean, Object], default: void 0 },
         navigation: { type: [Boolean, Object], default: void 0 },
         pagination: { type: [Boolean, Object], default: void 0 },
         parallax: { type: [Boolean, Object], default: void 0 },
         scrollbar: { type: [Boolean, Object], default: void 0 },
         thumbs: { type: Object, default: void 0 },
         virtual: { type: [Boolean, Object], default: void 0 },
         zoom: { type: [Boolean, Object], default: void 0 },
         grid: { type: [Object], default: void 0 },
         freeMode: { type: [Boolean, Object], default: void 0 },
         enabled: { type: Boolean, default: void 0 },
      },
      emits: [
         "_beforeBreakpoint",
         "_containerClasses",
         "_slideClass",
         "_slideClasses",
         "_swiper",
         "_freeModeNoMomentumRelease",
         "activeIndexChange",
         "afterInit",
         "autoplay",
         "autoplayStart",
         "autoplayStop",
         "autoplayPause",
         "autoplayResume",
         "beforeDestroy",
         "beforeInit",
         "beforeLoopFix",
         "beforeResize",
         "beforeSlideChangeStart",
         "beforeTransitionStart",
         "breakpoint",
         "changeDirection",
         "click",
         "disable",
         "doubleTap",
         "doubleClick",
         "destroy",
         "enable",
         "fromEdge",
         "hashChange",
         "hashSet",
         "imagesReady",
         "init",
         "keyPress",
         "lazyImageLoad",
         "lazyImageReady",
         "lock",
         "loopFix",
         "momentumBounce",
         "navigationHide",
         "navigationShow",
         "navigationPrev",
         "navigationNext",
         "observerUpdate",
         "orientationchange",
         "paginationHide",
         "paginationRender",
         "paginationShow",
         "paginationUpdate",
         "progress",
         "reachBeginning",
         "reachEnd",
         "realIndexChange",
         "resize",
         "scroll",
         "scrollbarDragEnd",
         "scrollbarDragMove",
         "scrollbarDragStart",
         "setTransition",
         "setTranslate",
         "slideChange",
         "slideChangeTransitionEnd",
         "slideChangeTransitionStart",
         "slideNextTransitionEnd",
         "slideNextTransitionStart",
         "slidePrevTransitionEnd",
         "slidePrevTransitionStart",
         "slideResetTransitionStart",
         "slideResetTransitionEnd",
         "sliderMove",
         "sliderFirstMove",
         "slidesLengthChange",
         "slidesGridLengthChange",
         "snapGridLengthChange",
         "snapIndexChange",
         "swiper",
         "tap",
         "toEdge",
         "touchEnd",
         "touchMove",
         "touchMoveOpposite",
         "touchStart",
         "transitionEnd",
         "transitionStart",
         "unlock",
         "update",
         "virtualUpdate",
         "zoomChange",
      ],
      setup(e, i) {
         let { slots: t, emit: n } = i
         const { tag: s, wrapperTag: r } = e,
            a = B("swiper"),
            d = B(null),
            l = B(!1),
            o = B(!1),
            u = B(null),
            f = B(null),
            c = B(null),
            p = { value: [] },
            m = { value: [] },
            S = B(null),
            g = B(null),
            y = B(null),
            w = B(null),
            { params: v, passedParams: C } = ue(e, !1)
         Z(t, p, m), (c.value = C), (m.value = p.value)
         const T = () => {
            Z(t, p, m), (l.value = !0)
         }
         if (
            ((v.onAny = function (O) {
               for (var x = arguments.length, D = new Array(x > 1 ? x - 1 : 0), b = 1; b < x; b++) D[b - 1] = arguments[b]
               n(O, ...D)
            }),
            Object.assign(v.on, {
               _beforeBreakpoint: T,
               _containerClasses(O, x) {
                  a.value = x
               },
            }),
            (f.value = new j(v)),
            (f.value.loopCreate = () => {}),
            (f.value.loopDestroy = () => {}),
            v.loop && (f.value.loopedSlides = Me(p.value, v)),
            f.value.virtual && f.value.params.virtual.enabled)
         ) {
            f.value.virtual.slides = p.value
            const O = {
               cache: !1,
               slides: p.value,
               renderExternal: x => {
                  d.value = x
               },
               renderExternalUpdate: !1,
            }
            k(f.value.params.virtual, O), k(f.value.originalParams.virtual, O)
         }
         fe(() => {
            !o.value && f.value && (f.value.emitSlidesClasses(), (o.value = !0))
            const { passedParams: O } = ue(e, !1),
               x = Gi(O, c.value, p.value, m.value, D => D.props && D.props.key)
            ;(c.value = O), (x.length || l.value) && f.value && !f.value.destroyed && ji({ swiper: f.value, slides: p.value, passedParams: O, changedParams: x, nextEl: S.value, prevEl: g.value, scrollbarEl: w.value, paginationEl: y.value }), (l.value = !1)
         }),
            ce("swiper", f),
            $e(d, () => {
               Ie(() => {
                  Vi(f.value)
               })
            }),
            pe(() => {
               u.value && (Di({ el: u.value, nextEl: S.value, prevEl: g.value, paginationEl: y.value, scrollbarEl: w.value, swiper: f.value }, v), n("swiper", f.value))
            }),
            he(() => {
               f.value && !f.value.destroyed && f.value.destroy(!0, !1)
            })
         function L(O) {
            return v.virtual
               ? Ri(f, O, d.value)
               : !v.loop || (f.value && f.value.destroyed)
                 ? (O.forEach(x => {
                      x.props || (x.props = {}), (x.props.swiperRef = f)
                   }),
                   O)
                 : Ni(f, O, v)
         }
         return () => {
            const { slides: O, slots: x } = Z(t, p, m)
            return z(s, { ref: u, class: Ce(a.value) }, [x["container-start"], z(r, { class: "swiper-wrapper" }, [x["wrapper-start"], L(O), x["wrapper-end"]]), ye(e) && [z("div", { ref: g, class: "swiper-button-prev" }), z("div", { ref: S, class: "swiper-button-next" })], xe(e) && z("div", { ref: w, class: "swiper-scrollbar" }), Te(e) && z("div", { ref: y, class: "swiper-pagination" }), x["container-end"]])
         }
      },
   },
   Wi = {
      name: "SwiperSlide",
      props: { tag: { type: String, default: "div" }, swiperRef: { type: Object, required: !1 }, zoom: { type: Boolean, default: void 0 }, virtualIndex: { type: [String, Number], default: void 0 } },
      setup(e, i) {
         let { slots: t } = i,
            n = !1
         const { swiperRef: s } = e,
            r = B(null),
            a = B("swiper-slide")
         function d(o, u, f) {
            u === r.value && (a.value = f)
         }
         pe(() => {
            !s || !s.value || (s.value.on("_slideClass", d), (n = !0))
         }),
            ze(() => {
               n || !s || !s.value || (s.value.on("_slideClass", d), (n = !0))
            }),
            fe(() => {
               !r.value || !s || !s.value || (s.value.destroyed && a.value !== "swiper-slide" && (a.value = "swiper-slide"))
            }),
            he(() => {
               !s || !s.value || s.value.off("_slideClass", d)
            })
         const l = Ae(() => ({ isActive: a.value.indexOf("swiper-slide-active") >= 0 || a.value.indexOf("swiper-slide-duplicate-active") >= 0, isVisible: a.value.indexOf("swiper-slide-visible") >= 0, isDuplicate: a.value.indexOf("swiper-slide-duplicate") >= 0, isPrev: a.value.indexOf("swiper-slide-prev") >= 0 || a.value.indexOf("swiper-slide-duplicate-prev") >= 0, isNext: a.value.indexOf("swiper-slide-next") >= 0 || a.value.indexOf("swiper-slide-duplicate-next") >= 0 }))
         return ce("swiperSlide", l), () => z(e.tag, { class: Ce(`${a.value}`), ref: r, "data-swiper-slide-index": e.virtualIndex }, e.zoom ? z("div", { class: "swiper-zoom-container", "data-swiper-zoom": typeof e.zoom == "number" ? e.zoom : void 0 }, t.default && t.default(l.value)) : t.default && t.default(l.value))
      },
   }
export { Wi as S, Fi as a, I as g, J as n }
