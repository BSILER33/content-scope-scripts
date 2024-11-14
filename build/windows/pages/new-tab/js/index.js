"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __glob = (map) => (path) => {
    var fn = map[path];
    if (fn) return fn();
    throw new Error("Module not found in bundle: " + path);
  };
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target2, all) => {
    for (var name in all)
      __defProp(target2, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target2) => (target2 = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target2, "default", { value: mod, enumerable: true }) : target2,
    mod
  ));

  // ../node_modules/preact/dist/preact.module.js
  function d(n2, l3) {
    for (var u3 in l3) n2[u3] = l3[u3];
    return n2;
  }
  function w(n2) {
    n2 && n2.parentNode && n2.parentNode.removeChild(n2);
  }
  function _(l3, u3, t3) {
    var i4, o3, r3, f3 = {};
    for (r3 in u3) "key" == r3 ? i4 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps) for (r3 in l3.defaultProps) void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
    return g(l3, f3, i4, o3, null);
  }
  function g(n2, t3, i4, o3, r3) {
    var f3 = { type: n2, props: t3, key: i4, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r3 ? ++u : r3, __i: -1, __u: 0 };
    return null == r3 && null != l.vnode && l.vnode(f3), f3;
  }
  function b(n2) {
    return n2.children;
  }
  function k(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function x(n2, l3) {
    if (null == l3) return n2.__ ? x(n2.__, n2.__i + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++) if (null != (u3 = n2.__k[l3]) && null != u3.__e) return u3.__e;
    return "function" == typeof n2.type ? x(n2) : null;
  }
  function C(n2) {
    var l3, u3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++) if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
        n2.__e = n2.__c.base = u3.__e;
        break;
      }
      return C(n2);
    }
  }
  function S(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !M.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(M);
  }
  function M() {
    var n2, u3, t3, o3, r3, e3, c3, s3;
    for (i.sort(f); n2 = i.shift(); ) n2.__d && (u3 = i.length, o3 = void 0, e3 = (r3 = (t3 = n2).__v).__e, c3 = [], s3 = [], t3.__P && ((o3 = d({}, r3)).__v = r3.__v + 1, l.vnode && l.vnode(o3), O(t3.__P, o3, r3, t3.__n, t3.__P.namespaceURI, 32 & r3.__u ? [e3] : null, c3, null == e3 ? x(r3) : e3, !!(32 & r3.__u), s3), o3.__v = r3.__v, o3.__.__k[o3.__i] = o3, j(c3, o3, s3), o3.__e != e3 && C(o3)), i.length > u3 && i.sort(f));
    M.__r = 0;
  }
  function P(n2, l3, u3, t3, i4, o3, r3, f3, e3, c3, s3) {
    var a3, p3, y3, d3, w3, _3 = t3 && t3.__k || v, g4 = l3.length;
    for (u3.__d = e3, $(u3, l3, _3), e3 = u3.__d, a3 = 0; a3 < g4; a3++) null != (y3 = u3.__k[a3]) && (p3 = -1 === y3.__i ? h : _3[y3.__i] || h, y3.__i = a3, O(n2, y3, p3, i4, o3, r3, f3, e3, c3, s3), d3 = y3.__e, y3.ref && p3.ref != y3.ref && (p3.ref && N(p3.ref, null, y3), s3.push(y3.ref, y3.__c || d3, y3)), null == w3 && null != d3 && (w3 = d3), 65536 & y3.__u || p3.__k === y3.__k ? e3 = I(y3, e3, n2) : "function" == typeof y3.type && void 0 !== y3.__d ? e3 = y3.__d : d3 && (e3 = d3.nextSibling), y3.__d = void 0, y3.__u &= -196609);
    u3.__d = e3, u3.__e = w3;
  }
  function $(n2, l3, u3) {
    var t3, i4, o3, r3, f3, e3 = l3.length, c3 = u3.length, s3 = c3, a3 = 0;
    for (n2.__k = [], t3 = 0; t3 < e3; t3++) null != (i4 = l3[t3]) && "boolean" != typeof i4 && "function" != typeof i4 ? (r3 = t3 + a3, (i4 = n2.__k[t3] = "string" == typeof i4 || "number" == typeof i4 || "bigint" == typeof i4 || i4.constructor == String ? g(null, i4, null, null, null) : y(i4) ? g(b, { children: i4 }, null, null, null) : void 0 === i4.constructor && i4.__b > 0 ? g(i4.type, i4.props, i4.key, i4.ref ? i4.ref : null, i4.__v) : i4).__ = n2, i4.__b = n2.__b + 1, o3 = null, -1 !== (f3 = i4.__i = L(i4, u3, r3, s3)) && (s3--, (o3 = u3[f3]) && (o3.__u |= 131072)), null == o3 || null === o3.__v ? (-1 == f3 && a3--, "function" != typeof i4.type && (i4.__u |= 65536)) : f3 !== r3 && (f3 == r3 - 1 ? a3-- : f3 == r3 + 1 ? a3++ : (f3 > r3 ? a3-- : a3++, i4.__u |= 65536))) : i4 = n2.__k[t3] = null;
    if (s3) for (t3 = 0; t3 < c3; t3++) null != (o3 = u3[t3]) && 0 == (131072 & o3.__u) && (o3.__e == n2.__d && (n2.__d = x(o3)), V(o3, o3));
  }
  function I(n2, l3, u3) {
    var t3, i4;
    if ("function" == typeof n2.type) {
      for (t3 = n2.__k, i4 = 0; t3 && i4 < t3.length; i4++) t3[i4] && (t3[i4].__ = n2, l3 = I(t3[i4], l3, u3));
      return l3;
    }
    n2.__e != l3 && (l3 && n2.type && !u3.contains(l3) && (l3 = x(n2)), u3.insertBefore(n2.__e, l3 || null), l3 = n2.__e);
    do {
      l3 = l3 && l3.nextSibling;
    } while (null != l3 && 8 === l3.nodeType);
    return l3;
  }
  function H(n2, l3) {
    return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (y(n2) ? n2.some(function(n3) {
      H(n3, l3);
    }) : l3.push(n2)), l3;
  }
  function L(n2, l3, u3, t3) {
    var i4 = n2.key, o3 = n2.type, r3 = u3 - 1, f3 = u3 + 1, e3 = l3[u3];
    if (null === e3 || e3 && i4 == e3.key && o3 === e3.type && 0 == (131072 & e3.__u)) return u3;
    if (t3 > (null != e3 && 0 == (131072 & e3.__u) ? 1 : 0)) for (; r3 >= 0 || f3 < l3.length; ) {
      if (r3 >= 0) {
        if ((e3 = l3[r3]) && 0 == (131072 & e3.__u) && i4 == e3.key && o3 === e3.type) return r3;
        r3--;
      }
      if (f3 < l3.length) {
        if ((e3 = l3[f3]) && 0 == (131072 & e3.__u) && i4 == e3.key && o3 === e3.type) return f3;
        f3++;
      }
    }
    return -1;
  }
  function T(n2, l3, u3) {
    "-" === l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || p.test(l3) ? u3 : u3 + "px";
  }
  function A(n2, l3, u3, t3, i4) {
    var o3;
    n: if ("style" === l3) if ("string" == typeof u3) n2.style.cssText = u3;
    else {
      if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3) for (l3 in t3) u3 && l3 in u3 || T(n2.style, l3, "");
      if (u3) for (l3 in u3) t3 && u3[l3] === t3[l3] || T(n2.style, l3, u3[l3]);
    }
    else if ("o" === l3[0] && "n" === l3[1]) o3 = l3 !== (l3 = l3.replace(/(PointerCapture)$|Capture$/i, "$1")), l3 = l3.toLowerCase() in n2 || "onFocusOut" === l3 || "onFocusIn" === l3 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? t3 ? u3.u = t3.u : (u3.u = e, n2.addEventListener(l3, o3 ? s : c, o3)) : n2.removeEventListener(l3, o3 ? s : c, o3);
    else {
      if ("http://www.w3.org/2000/svg" == i4) l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && "popover" != l3 && l3 in n2) try {
        n2[l3] = null == u3 ? "" : u3;
        break n;
      } catch (n3) {
      }
      "function" == typeof u3 || (null == u3 || false === u3 && "-" !== l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, "popover" == l3 && 1 == u3 ? "" : u3));
    }
  }
  function F(n2) {
    return function(u3) {
      if (this.l) {
        var t3 = this.l[u3.type + n2];
        if (null == u3.t) u3.t = e++;
        else if (u3.t < t3.u) return;
        return t3(l.event ? l.event(u3) : u3);
      }
    };
  }
  function O(n2, u3, t3, i4, o3, r3, f3, e3, c3, s3) {
    var a3, h3, v3, p3, w3, _3, g4, m3, x4, C4, S2, M3, $2, I2, H3, L3, T4 = u3.type;
    if (void 0 !== u3.constructor) return null;
    128 & t3.__u && (c3 = !!(32 & t3.__u), r3 = [e3 = u3.__e = t3.__e]), (a3 = l.__b) && a3(u3);
    n: if ("function" == typeof T4) try {
      if (m3 = u3.props, x4 = "prototype" in T4 && T4.prototype.render, C4 = (a3 = T4.contextType) && i4[a3.__c], S2 = a3 ? C4 ? C4.props.value : a3.__ : i4, t3.__c ? g4 = (h3 = u3.__c = t3.__c).__ = h3.__E : (x4 ? u3.__c = h3 = new T4(m3, S2) : (u3.__c = h3 = new k(m3, S2), h3.constructor = T4, h3.render = q), C4 && C4.sub(h3), h3.props = m3, h3.state || (h3.state = {}), h3.context = S2, h3.__n = i4, v3 = h3.__d = true, h3.__h = [], h3._sb = []), x4 && null == h3.__s && (h3.__s = h3.state), x4 && null != T4.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = d({}, h3.__s)), d(h3.__s, T4.getDerivedStateFromProps(m3, h3.__s))), p3 = h3.props, w3 = h3.state, h3.__v = u3, v3) x4 && null == T4.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), x4 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
      else {
        if (x4 && null == T4.getDerivedStateFromProps && m3 !== p3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(m3, S2), !h3.__e && (null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(m3, h3.__s, S2) || u3.__v === t3.__v)) {
          for (u3.__v !== t3.__v && (h3.props = m3, h3.state = h3.__s, h3.__d = false), u3.__e = t3.__e, u3.__k = t3.__k, u3.__k.some(function(n3) {
            n3 && (n3.__ = u3);
          }), M3 = 0; M3 < h3._sb.length; M3++) h3.__h.push(h3._sb[M3]);
          h3._sb = [], h3.__h.length && f3.push(h3);
          break n;
        }
        null != h3.componentWillUpdate && h3.componentWillUpdate(m3, h3.__s, S2), x4 && null != h3.componentDidUpdate && h3.__h.push(function() {
          h3.componentDidUpdate(p3, w3, _3);
        });
      }
      if (h3.context = S2, h3.props = m3, h3.__P = n2, h3.__e = false, $2 = l.__r, I2 = 0, x4) {
        for (h3.state = h3.__s, h3.__d = false, $2 && $2(u3), a3 = h3.render(h3.props, h3.state, h3.context), H3 = 0; H3 < h3._sb.length; H3++) h3.__h.push(h3._sb[H3]);
        h3._sb = [];
      } else do {
        h3.__d = false, $2 && $2(u3), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
      } while (h3.__d && ++I2 < 25);
      h3.state = h3.__s, null != h3.getChildContext && (i4 = d(d({}, i4), h3.getChildContext())), x4 && !v3 && null != h3.getSnapshotBeforeUpdate && (_3 = h3.getSnapshotBeforeUpdate(p3, w3)), P(n2, y(L3 = null != a3 && a3.type === b && null == a3.key ? a3.props.children : a3) ? L3 : [L3], u3, t3, i4, o3, r3, f3, e3, c3, s3), h3.base = u3.__e, u3.__u &= -161, h3.__h.length && f3.push(h3), g4 && (h3.__E = h3.__ = null);
    } catch (n3) {
      if (u3.__v = null, c3 || null != r3) {
        for (u3.__u |= c3 ? 160 : 128; e3 && 8 === e3.nodeType && e3.nextSibling; ) e3 = e3.nextSibling;
        r3[r3.indexOf(e3)] = null, u3.__e = e3;
      } else u3.__e = t3.__e, u3.__k = t3.__k;
      l.__e(n3, u3, t3);
    }
    else null == r3 && u3.__v === t3.__v ? (u3.__k = t3.__k, u3.__e = t3.__e) : u3.__e = z(t3.__e, u3, t3, i4, o3, r3, f3, c3, s3);
    (a3 = l.diffed) && a3(u3);
  }
  function j(n2, u3, t3) {
    u3.__d = void 0;
    for (var i4 = 0; i4 < t3.length; i4++) N(t3[i4], t3[++i4], t3[++i4]);
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function z(u3, t3, i4, o3, r3, f3, e3, c3, s3) {
    var a3, v3, p3, d3, _3, g4, m3, b2 = i4.props, k3 = t3.props, C4 = t3.type;
    if ("svg" === C4 ? r3 = "http://www.w3.org/2000/svg" : "math" === C4 ? r3 = "http://www.w3.org/1998/Math/MathML" : r3 || (r3 = "http://www.w3.org/1999/xhtml"), null != f3) {
      for (a3 = 0; a3 < f3.length; a3++) if ((_3 = f3[a3]) && "setAttribute" in _3 == !!C4 && (C4 ? _3.localName === C4 : 3 === _3.nodeType)) {
        u3 = _3, f3[a3] = null;
        break;
      }
    }
    if (null == u3) {
      if (null === C4) return document.createTextNode(k3);
      u3 = document.createElementNS(r3, C4, k3.is && k3), c3 && (l.__m && l.__m(t3, f3), c3 = false), f3 = null;
    }
    if (null === C4) b2 === k3 || c3 && u3.data === k3 || (u3.data = k3);
    else {
      if (f3 = f3 && n.call(u3.childNodes), b2 = i4.props || h, !c3 && null != f3) for (b2 = {}, a3 = 0; a3 < u3.attributes.length; a3++) b2[(_3 = u3.attributes[a3]).name] = _3.value;
      for (a3 in b2) if (_3 = b2[a3], "children" == a3) ;
      else if ("dangerouslySetInnerHTML" == a3) p3 = _3;
      else if (!(a3 in k3)) {
        if ("value" == a3 && "defaultValue" in k3 || "checked" == a3 && "defaultChecked" in k3) continue;
        A(u3, a3, null, _3, r3);
      }
      for (a3 in k3) _3 = k3[a3], "children" == a3 ? d3 = _3 : "dangerouslySetInnerHTML" == a3 ? v3 = _3 : "value" == a3 ? g4 = _3 : "checked" == a3 ? m3 = _3 : c3 && "function" != typeof _3 || b2[a3] === _3 || A(u3, a3, _3, b2[a3], r3);
      if (v3) c3 || p3 && (v3.__html === p3.__html || v3.__html === u3.innerHTML) || (u3.innerHTML = v3.__html), t3.__k = [];
      else if (p3 && (u3.innerHTML = ""), P(u3, y(d3) ? d3 : [d3], t3, i4, o3, "foreignObject" === C4 ? "http://www.w3.org/1999/xhtml" : r3, f3, e3, f3 ? f3[0] : i4.__k && x(i4, 0), c3, s3), null != f3) for (a3 = f3.length; a3--; ) w(f3[a3]);
      c3 || (a3 = "value", "progress" === C4 && null == g4 ? u3.removeAttribute("value") : void 0 !== g4 && (g4 !== u3[a3] || "progress" === C4 && !g4 || "option" === C4 && g4 !== b2[a3]) && A(u3, a3, g4, b2[a3], r3), a3 = "checked", void 0 !== m3 && m3 !== u3[a3] && A(u3, a3, m3, b2[a3], r3));
    }
    return u3;
  }
  function N(n2, u3, t3) {
    try {
      if ("function" == typeof n2) {
        var i4 = "function" == typeof n2.__u;
        i4 && n2.__u(), i4 && null == u3 || (n2.__u = n2(u3));
      } else n2.current = u3;
    } catch (n3) {
      l.__e(n3, t3);
    }
  }
  function V(n2, u3, t3) {
    var i4, o3;
    if (l.unmount && l.unmount(n2), (i4 = n2.ref) && (i4.current && i4.current !== n2.__e || N(i4, null, u3)), null != (i4 = n2.__c)) {
      if (i4.componentWillUnmount) try {
        i4.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u3);
      }
      i4.base = i4.__P = null;
    }
    if (i4 = n2.__k) for (o3 = 0; o3 < i4.length; o3++) i4[o3] && V(i4[o3], u3, t3 || "function" != typeof n2.type);
    t3 || w(n2.__e), n2.__c = n2.__ = n2.__e = n2.__d = void 0;
  }
  function q(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function B(u3, t3, i4) {
    var o3, r3, f3, e3;
    l.__ && l.__(u3, t3), r3 = (o3 = "function" == typeof i4) ? null : i4 && i4.__k || t3.__k, f3 = [], e3 = [], O(t3, u3 = (!o3 && i4 || t3).__k = _(b, null, [u3]), r3 || h, h, t3.namespaceURI, !o3 && i4 ? [i4] : r3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, f3, !o3 && i4 ? i4 : r3 ? r3.__e : t3.firstChild, o3, e3), j(f3, u3, e3);
  }
  function G(n2, l3) {
    var u3 = { __c: l3 = "__cC" + a++, __: n2, Consumer: function(n3, l4) {
      return n3.children(l4);
    }, Provider: function(n3) {
      var u4, t3;
      return this.getChildContext || (u4 = /* @__PURE__ */ new Set(), (t3 = {})[l3] = this, this.getChildContext = function() {
        return t3;
      }, this.componentWillUnmount = function() {
        u4 = null;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value !== n4.value && u4.forEach(function(n5) {
          n5.__e = true, S(n5);
        });
      }, this.sub = function(n4) {
        u4.add(n4);
        var l4 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          u4 && u4.delete(n4), l4 && l4.call(n4);
        };
      }), n3.children;
    } };
    return u3.Provider.__ = u3.Consumer.contextType = u3;
  }
  var n, l, u, t, i, o, r, f, e, c, s, a, h, v, p, y;
  var init_preact_module = __esm({
    "../node_modules/preact/dist/preact.module.js"() {
      h = {};
      v = [];
      p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      y = Array.isArray;
      n = v.slice, l = { __e: function(n2, l3, u3, t3) {
        for (var i4, o3, r3; l3 = l3.__; ) if ((i4 = l3.__c) && !i4.__) try {
          if ((o3 = i4.constructor) && null != o3.getDerivedStateFromError && (i4.setState(o3.getDerivedStateFromError(n2)), r3 = i4.__d), null != i4.componentDidCatch && (i4.componentDidCatch(n2, t3 || {}), r3 = i4.__d), r3) return i4.__E = i4;
        } catch (l4) {
          n2 = l4;
        }
        throw n2;
      } }, u = 0, t = function(n2) {
        return null != n2 && null == n2.constructor;
      }, k.prototype.setState = function(n2, l3) {
        var u3;
        u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n2 && (n2 = n2(d({}, u3), this.props)), n2 && d(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), S(this));
      }, k.prototype.forceUpdate = function(n2) {
        this.__v && (this.__e = true, n2 && this.__h.push(n2), S(this));
      }, k.prototype.render = b, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l3) {
        return n2.__v.__b - l3.__v.__b;
      }, M.__r = 0, e = 0, c = F(false), s = F(true), a = 0;
    }
  });

  // ../node_modules/preact/hooks/dist/hooks.module.js
  function d2(n2, t3) {
    c2.__h && c2.__h(r2, n2, o2 || t3), o2 = 0;
    var u3 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n2 >= u3.__.length && u3.__.push({}), u3.__[n2];
  }
  function h2(n2) {
    return o2 = 1, p2(D, n2);
  }
  function p2(n2, u3, i4) {
    var o3 = d2(t2++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i4 ? i4(u3) : D(void 0, u3), function(n3) {
      var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
      t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = r2, !r2.u)) {
      var f3 = function(n3, t3, r3) {
        if (!o3.__c.__H) return true;
        var u4 = o3.__c.__H.__.filter(function(n4) {
          return !!n4.__c;
        });
        if (u4.every(function(n4) {
          return !n4.__N;
        })) return !c3 || c3.call(this, n3, t3, r3);
        var i5 = false;
        return u4.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i5 = true);
          }
        }), !(!i5 && o3.__c.props === n3) && (!c3 || c3.call(this, n3, t3, r3));
      };
      r2.u = true;
      var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t3, r3) {
        if (this.__e) {
          var u4 = c3;
          c3 = void 0, f3(n3, t3, r3), c3 = u4;
        }
        e3 && e3.call(this, n3, t3, r3);
      }, r2.shouldComponentUpdate = f3;
    }
    return o3.__N || o3.__;
  }
  function y2(n2, u3) {
    var i4 = d2(t2++, 3);
    !c2.__s && C2(i4.__H, u3) && (i4.__ = n2, i4.i = u3, r2.__H.__h.push(i4));
  }
  function A2(n2) {
    return o2 = 5, T2(function() {
      return { current: n2 };
    }, []);
  }
  function T2(n2, r3) {
    var u3 = d2(t2++, 7);
    return C2(u3.__H, r3) && (u3.__ = n2(), u3.__H = r3, u3.__h = n2), u3.__;
  }
  function q2(n2, t3) {
    return o2 = 8, T2(function() {
      return n2;
    }, t3);
  }
  function x2(n2) {
    var u3 = r2.context[n2.__c], i4 = d2(t2++, 9);
    return i4.c = n2, u3 ? (null == i4.__ && (i4.__ = true, u3.sub(r2)), u3.props.value) : n2.__;
  }
  function g2() {
    var n2 = d2(t2++, 11);
    if (!n2.__) {
      for (var u3 = r2.__v; null !== u3 && !u3.__m && null !== u3.__; ) u3 = u3.__;
      var i4 = u3.__m || (u3.__m = [0, 0]);
      n2.__ = "P" + i4[0] + "-" + i4[1]++;
    }
    return n2.__;
  }
  function j2() {
    for (var n2; n2 = f2.shift(); ) if (n2.__P && n2.__H) try {
      n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
    } catch (t3) {
      n2.__H.__h = [], c2.__e(t3, n2.__v);
    }
  }
  function w2(n2) {
    var t3, r3 = function() {
      clearTimeout(u3), k2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u3 = setTimeout(r3, 100);
    k2 && (t3 = requestAnimationFrame(r3));
  }
  function z2(n2) {
    var t3 = r2, u3 = n2.__c;
    "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
  }
  function B2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function C2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  function D(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }
  var t2, r2, u2, i3, o2, f2, c2, e2, a2, v2, l2, m, s2, k2;
  var init_hooks_module = __esm({
    "../node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o2 = 0;
      f2 = [];
      c2 = l;
      e2 = c2.__b;
      a2 = c2.__r;
      v2 = c2.diffed;
      l2 = c2.__c;
      m = c2.unmount;
      s2 = c2.__;
      c2.__b = function(n2) {
        r2 = null, e2 && e2(n2);
      }, c2.__ = function(n2, t3) {
        n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), s2 && s2(n2, t3);
      }, c2.__r = function(n2) {
        a2 && a2(n2), t2 = 0;
        var i4 = (r2 = n2.__c).__H;
        i4 && (u2 === r2 ? (i4.__h = [], r2.__h = [], i4.__.forEach(function(n3) {
          n3.__N && (n3.__ = n3.__N), n3.i = n3.__N = void 0;
        })) : (i4.__h.forEach(z2), i4.__h.forEach(B2), i4.__h = [], t2 = 0)), u2 = r2;
      }, c2.diffed = function(n2) {
        v2 && v2(n2);
        var t3 = n2.__c;
        t3 && t3.__H && (t3.__H.__h.length && (1 !== f2.push(t3) && i3 === c2.requestAnimationFrame || ((i3 = c2.requestAnimationFrame) || w2)(j2)), t3.__H.__.forEach(function(n3) {
          n3.i && (n3.__H = n3.i), n3.i = void 0;
        })), u2 = r2 = null;
      }, c2.__c = function(n2, t3) {
        t3.some(function(n3) {
          try {
            n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
              return !n4.__ || B2(n4);
            });
          } catch (r3) {
            t3.some(function(n4) {
              n4.__h && (n4.__h = []);
            }), t3 = [], c2.__e(r3, n3.__v);
          }
        }), l2 && l2(n2, t3);
      }, c2.unmount = function(n2) {
        m && m(n2);
        var t3, r3 = n2.__c;
        r3 && r3.__H && (r3.__H.__.forEach(function(n3) {
          try {
            z2(n3);
          } catch (n4) {
            t3 = n4;
          }
        }), r3.__H = void 0, t3 && c2.__e(t3, r3.__v));
      };
      k2 = "function" == typeof requestAnimationFrame;
    }
  });

  // pages/new-tab/app/settings.provider.js
  function SettingsProvider({ settings, children }) {
    return /* @__PURE__ */ _(SettingsContext.Provider, { value: { settings } }, children);
  }
  function usePlatformName() {
    return x2(SettingsContext).settings.platform.name;
  }
  var SettingsContext;
  var init_settings_provider = __esm({
    "pages/new-tab/app/settings.provider.js"() {
      "use strict";
      init_preact_module();
      init_hooks_module();
      SettingsContext = G(
        /** @type {{settings: import("./settings.js").Settings}} */
        {}
      );
    }
  });

  // pages/new-tab/app/widget-list/widget-config.provider.js
  function WidgetConfigProvider(props) {
    const [data, setData] = h2(props.widgetConfigs);
    y2(() => {
      const unsub = props.api.onData((widgetConfig) => {
        setData(widgetConfig.data);
      });
      return () => unsub();
    }, [props.api]);
    function toggle(id) {
      props.api.toggleVisibility(id);
    }
    return /* @__PURE__ */ _(
      WidgetConfigContext.Provider,
      {
        value: {
          // this field is static for the lifespan of the page
          widgets: props.widgets,
          entryPoints: props.entryPoints,
          // this will be updated via subscriptions
          widgetConfigItems: data || [],
          toggle
        }
      },
      props.children
    );
  }
  function useVisibility() {
    return x2(WidgetVisibilityContext);
  }
  function WidgetVisibilityProvider(props) {
    const { toggle } = x2(WidgetConfigContext);
    return /* @__PURE__ */ _(
      WidgetVisibilityContext.Provider,
      {
        value: {
          visibility: props.visibility,
          id: props.id,
          toggle,
          index: props.index
        }
      },
      props.children
    );
  }
  var WidgetConfigContext, WidgetConfigDispatchContext, WidgetVisibilityContext;
  var init_widget_config_provider = __esm({
    "pages/new-tab/app/widget-list/widget-config.provider.js"() {
      "use strict";
      init_preact_module();
      init_hooks_module();
      WidgetConfigContext = G({
        /** @type {Widgets} */
        widgets: [],
        /** @type {Record<string, {factory: () => import("preact").ComponentChild}>} */
        entryPoints: {},
        /** @type {WidgetConfigItem[]} */
        widgetConfigItems: [],
        /** @type {(id:string) => void} */
        toggle: (_id) => {
        }
      });
      WidgetConfigDispatchContext = G({
        dispatch: null
      });
      WidgetVisibilityContext = G({
        visibility: (
          /** @type {WidgetConfigItem['visibility']} */
          "visible"
        ),
        id: (
          /** @type {WidgetConfigItem['id']} */
          ""
        ),
        /** @type {(id: string) => void} */
        toggle: (_id) => {
        },
        /** @type {number} */
        index: -1
      });
    }
  });

  // pages/new-tab/app/customizer/Customizer.module.css
  var Customizer_default;
  var init_Customizer = __esm({
    "pages/new-tab/app/customizer/Customizer.module.css"() {
      Customizer_default = {
        root: "Customizer_root",
        lowerRightFixed: "Customizer_lowerRightFixed",
        dropdownMenu: "Customizer_dropdownMenu",
        show: "Customizer_show",
        customizeButton: "Customizer_customizeButton"
      };
    }
  });

  // pages/new-tab/app/components/Icons.module.css
  var Icons_default;
  var init_Icons = __esm({
    "pages/new-tab/app/components/Icons.module.css"() {
      Icons_default = {
        chevron: "Icons_chevron",
        chevronCircle: "Icons_chevronCircle",
        chevronArrow: "Icons_chevronArrow",
        customize: "Icons_customize"
      };
    }
  });

  // pages/new-tab/app/components/Icons.js
  function ChevronButton() {
    return /* @__PURE__ */ _("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", class: Icons_default.chevron }, /* @__PURE__ */ _("rect", { fill: "black", "fill-opacity": "0.06", width: "24", height: "24", rx: "12", class: Icons_default.chevronCircle }), /* @__PURE__ */ _(
      "path",
      {
        fill: "black",
        "fill-opacity": "0.6",
        class: Icons_default.chevronArrow,
        d: "M6.90039 10.191C6.91514 9.99804 7.00489 9.81855 7.15039 9.69098C7.2879 9.56799 7.46591 9.5 7.65039 9.5C7.83487 9.5 8.01289 9.56799 8.15039 9.69098L12.1504 13.691L16.1504 9.69098C16.2903 9.62414 16.4476 9.60233 16.6004 9.62856C16.7533 9.65479 16.8943 9.72776 17.0039 9.83743C17.1136 9.9471 17.1866 10.0881 17.2128 10.2409C17.239 10.3938 17.2172 10.551 17.1504 10.691L12.6504 15.191C12.5098 15.3314 12.3191 15.4103 12.1204 15.4103C11.9216 15.4103 11.731 15.3314 11.5904 15.191L7.15039 10.691C7.00489 10.5634 6.91514 10.3839 6.90039 10.191Z"
      }
    ));
  }
  function Chevron({ className }) {
    return /* @__PURE__ */ _("svg", { fill: "none", width: "16", height: "16", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", class: className }, /* @__PURE__ */ _(
      "path",
      {
        fill: "currentColor",
        "fill-rule": "evenodd",
        d: "M3.293 7.793a1 1 0 0 0 0 1.414l8 8a1 1 0 0 0 1.414 0l8-8a1 1 0 0 0-1.414-1.414L12 15.086 4.707 7.793a1 1 0 0 0-1.414 0Z",
        "clip-rule": "evenodd"
      }
    ));
  }
  function CustomizeIcon() {
    return /* @__PURE__ */ _("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", class: Icons_default.customize }, /* @__PURE__ */ _(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M4.5 1C2.567 1 1 2.567 1 4.5C1 6.433 2.567 8 4.5 8C6.17556 8 7.57612 6.82259 7.91946 5.25H14.375C14.7202 5.25 15 4.97018 15 4.625C15 4.27982 14.7202 4 14.375 4H7.96456C7.72194 2.30385 6.26324 1 4.5 1ZM2.25 4.5C2.25 3.25736 3.25736 2.25 4.5 2.25C5.74264 2.25 6.75 3.25736 6.75 4.5C6.75 5.74264 5.74264 6.75 4.5 6.75C3.25736 6.75 2.25 5.74264 2.25 4.5Z",
        fill: "currentColor"
      }
    ), /* @__PURE__ */ _(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M8.03544 12H1.625C1.27982 12 1 11.7202 1 11.375C1 11.0298 1.27982 10.75 1.625 10.75H8.08054C8.42388 9.17741 9.82444 8 11.5 8C13.433 8 15 9.567 15 11.5C15 13.433 13.433 15 11.5 15C9.73676 15 8.27806 13.6961 8.03544 12ZM9.25 11.5C9.25 10.2574 10.2574 9.25 11.5 9.25C12.7426 9.25 13.75 10.2574 13.75 11.5C13.75 12.7426 12.7426 13.75 11.5 13.75C10.2574 13.75 9.25 12.7426 9.25 11.5Z",
        fill: "currentColor"
      }
    ));
  }
  function DuckFoot() {
    return /* @__PURE__ */ _("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16" }, /* @__PURE__ */ _(
      "path",
      {
        "clip-rule": "evenodd",
        fill: "currentColor",
        d: "M6.483.612A2.13 2.13 0 0 1 7.998 0c.56.001 1.115.215 1.512.62.673.685 1.26 1.045 1.852 1.228.594.185 1.31.228 2.311.1a2.175 2.175 0 0 1 1.575.406c.452.34.746.862.75 1.445.033 3.782-.518 6.251-1.714 8.04-1.259 1.882-3.132 2.831-5.045 3.8l-.123.063-.003.001-.125.063a2.206 2.206 0 0 1-1.976 0l-.124-.063-.003-.001-.124-.063c-1.913-.969-3.786-1.918-5.045-3.8C.52 10.05-.031 7.58 0 3.798a1.83 1.83 0 0 1 .75-1.444 2.175 2.175 0 0 1 1.573-.407c1.007.127 1.725.076 2.32-.114.59-.189 1.172-.551 1.839-1.222Zm2.267 1.36v12.233c1.872-.952 3.311-1.741 4.287-3.2.949-1.42 1.493-3.529 1.462-7.194 0-.072-.037-.17-.152-.257a.677.677 0 0 0-.484-.118c-1.126.144-2.075.115-2.945-.155-.77-.239-1.47-.664-2.168-1.309Zm-1.5 12.233V1.955c-.69.635-1.383 1.063-2.15 1.308-.87.278-1.823.317-2.963.174a.677.677 0 0 0-.484.117c-.115.087-.151.186-.152.258-.03 3.664.513 5.774 1.462 7.192.976 1.46 2.415 2.249 4.287 3.201Z"
      }
    ));
  }
  function Shield() {
    return /* @__PURE__ */ _("svg", { width: "16", height: "16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ _(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M6.341 1.367c.679-1.375 2.64-1.375 3.318 0l1.366 2.767a.35.35 0 0 0 .264.192l3.054.444c1.517.22 2.123 2.085 1.025 3.155l-2.21 2.155a.35.35 0 0 0-.1.31l.521 3.041c.26 1.512-1.327 2.664-2.684 1.95l-2.732-1.436a.35.35 0 0 0-.326 0l-2.732 1.437c-1.357.713-2.943-.44-2.684-1.95l.522-3.043a.35.35 0 0 0-.1-.31L.631 7.926C-.466 6.855.14 4.99 1.657 4.77l3.055-.444a.35.35 0 0 0 .263-.192l1.366-2.767Zm1.973.664a.35.35 0 0 0-.628 0L6.32 4.798A1.85 1.85 0 0 1 4.927 5.81l-3.054.444a.35.35 0 0 0-.194.597l2.21 2.154a1.85 1.85 0 0 1 .532 1.638L3.9 13.685a.35.35 0 0 0 .508.369l2.732-1.436a1.85 1.85 0 0 1 1.722 0l2.732 1.436a.35.35 0 0 0 .508-.369l-.522-3.042a1.85 1.85 0 0 1 .532-1.638l2.21-2.154a.35.35 0 0 0-.194-.597l-3.054-.444A1.85 1.85 0 0 1 9.68 4.798L8.314 2.031Z",
        fill: "currentColor"
      }
    ));
  }
  function Cross() {
    return /* @__PURE__ */ _("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ _(
      "path",
      {
        d: "M11.4419 5.44194C11.686 5.19786 11.686 4.80214 11.4419 4.55806C11.1979 4.31398 10.8021 4.31398 10.5581 4.55806L8 7.11612L5.44194 4.55806C5.19786 4.31398 4.80214 4.31398 4.55806 4.55806C4.31398 4.80214 4.31398 5.19786 4.55806 5.44194L7.11612 8L4.55806 10.5581C4.31398 10.8021 4.31398 11.1979 4.55806 11.4419C4.80214 11.686 5.19786 11.686 5.44194 11.4419L8 8.88388L10.5581 11.4419C10.8021 11.686 11.1979 11.686 11.4419 11.4419C11.686 11.1979 11.686 10.8021 11.4419 10.5581L8.88388 8L11.4419 5.44194Z",
        fill: "currentColor"
      }
    ));
  }
  var init_Icons2 = __esm({
    "pages/new-tab/app/components/Icons.js"() {
      "use strict";
      init_preact_module();
      init_Icons();
    }
  });

  // pages/new-tab/app/customizer/VisibilityMenu.module.css
  var VisibilityMenu_default;
  var init_VisibilityMenu = __esm({
    "pages/new-tab/app/customizer/VisibilityMenu.module.css"() {
      VisibilityMenu_default = {
        dropdownInner: "VisibilityMenu_dropdownInner",
        list: "VisibilityMenu_list",
        menuItemLabel: "VisibilityMenu_menuItemLabel",
        svg: "VisibilityMenu_svg",
        checkbox: "VisibilityMenu_checkbox",
        checkboxIcon: "VisibilityMenu_checkboxIcon"
      };
    }
  });

  // shared/translations.js
  function apply(subject, replacements, textLength = 1) {
    if (typeof subject !== "string" || subject.length === 0) return "";
    let out = subject;
    if (replacements) {
      for (let [name, value] of Object.entries(replacements)) {
        if (typeof value !== "string") value = "";
        out = out.replaceAll(`{${name}}`, value);
      }
    }
    if (textLength !== 1 && textLength > 0 && textLength <= 2) {
      const targetLen = Math.ceil(out.length * textLength);
      const target2 = Math.ceil(textLength);
      const combined = out.repeat(target2);
      return combined.slice(0, targetLen);
    }
    return out;
  }
  var init_translations = __esm({
    "shared/translations.js"() {
      "use strict";
    }
  });

  // shared/components/TranslationsProvider.js
  function TranslationProvider({ children, translationObject, fallback, textLength = 1 }) {
    function t3(inputKey, replacements) {
      const subject = translationObject?.[inputKey]?.title || fallback?.[inputKey]?.title;
      return apply(subject, replacements, textLength);
    }
    return /* @__PURE__ */ _(TranslationContext.Provider, { value: { t: t3 } }, children);
  }
  function Trans({ str, values }) {
    const ref = A2(null);
    const cleanups = A2([]);
    y2(() => {
      if (!ref.current) return;
      const curr = ref.current;
      const cleanupsCurr = cleanups.current;
      Object.entries(values).forEach(([tag, attributes]) => {
        curr.querySelectorAll(tag).forEach((el) => {
          Object.entries(attributes).forEach(([key, value]) => {
            if (typeof value === "function") {
              el.addEventListener(key, value);
              cleanupsCurr.push(() => el.removeEventListener(key, value));
            } else {
              el.setAttribute(key, value);
            }
          });
        });
      });
      return () => {
        cleanupsCurr.forEach((fn) => fn());
      };
    }, [values, str]);
    return /* @__PURE__ */ _("span", { ref, dangerouslySetInnerHTML: { __html: str } });
  }
  var TranslationContext;
  var init_TranslationsProvider = __esm({
    "shared/components/TranslationsProvider.js"() {
      "use strict";
      init_preact_module();
      init_hooks_module();
      init_translations();
      TranslationContext = G({
        /** @type {LocalTranslationFn} */
        t: () => {
          throw new Error("must implement");
        }
      });
    }
  });

  // pages/new-tab/src/locales/en/newtab.json
  var newtab_default;
  var init_newtab = __esm({
    "pages/new-tab/src/locales/en/newtab.json"() {
      newtab_default = {
        smartling: {
          string_format: "icu",
          translate_paths: [
            {
              path: "*/title",
              key: "{*}/title",
              instruction: "*/note"
            }
          ]
        },
        ntp_show_less: {
          title: "Show less",
          note: "Text for the Expansion of a section on NTP"
        },
        ntp_show_more: {
          title: "Show more",
          note: "Text for the Expansion of a section on NTP"
        },
        ntp_dismiss: {
          title: "Dismiss",
          note: "Text for all dismiss buttons on NTP"
        },
        widgets_visibility_menu_title: {
          title: "Customize New Tab Page",
          note: "Heading text describing that there's a list of toggles for customizing the page layout."
        },
        trackerStatsMenuTitle: {
          title: "Privacy Stats",
          note: "Used as a toggle label in a page customization menu"
        },
        trackerStatsNoActivity: {
          title: "Tracking attempts blocked by DuckDuckGo appear here. Keep browsing to see how many we block.",
          note: "Placeholder for when we cannot report any blocked trackers yet"
        },
        trackerStatsNoRecent: {
          title: "No recent tracking activity",
          note: "Placeholder to indicate that nothing was blocked in the last 24 hours"
        },
        trackerStatsCountBlockedSingular: {
          title: "1 tracking attempt blocked",
          note: "The main headline indicating that 1 tracker was blocked"
        },
        trackerStatsCountBlockedPlural: {
          title: "{count} tracking attempts blocked",
          note: "The main headline indicating that more than 1 attempt has been blocked. Eg: '2 tracking attempts blocked'"
        },
        trackerStatsFeedCountBlockedSingular: {
          title: "1 attempt blocked by DuckDuckGo in the last 24 hours",
          note: "A summary description of how many tracking attempts where blocked, when only one exists."
        },
        trackerStatsFeedCountBlockedPlural: {
          title: "{count} attempts blocked by DuckDuckGo in the last 24 hours",
          note: "A summary description of how many tracking attempts where blocked, when there was more than 1. Eg: '1,028 attempts blocked by DuckDuckGo in the last 24 hours'"
        },
        trackerStatsToggleLabel: {
          title: "Show recent activity",
          note: "The aria-label text for a toggle button that shows the detailed activity feed"
        },
        trackerStatsHideLabel: {
          title: "Hide recent activity",
          note: "The aria-label text for a toggle button that hides the detailed activity feed"
        },
        favorites_show_less: {
          title: "Show less",
          note: ""
        },
        favorites_show_more: {
          title: "Show more ({count} remaining)",
          note: ""
        },
        favorites_menu_title: {
          title: "Favorites",
          note: "Used as a toggle label in a page customization menu"
        },
        updateNotification_updated_version: {
          title: "Browser Updated to version {version}.",
          note: "Text to indicate which new version was updated. `version` will be formatted like `1.22.0`"
        },
        updateNotification_whats_new: {
          title: "See <a>what's new</a> in this release.",
          note: "The `<a>` tag represents a toggle"
        },
        updateNotification_dismiss_btn: {
          title: "Dismiss",
          note: "Button label text for an action that removes the widget from the screen."
        },
        nextSteps_sectionTitle: {
          title: "Next Steps",
          note: "Text that goes in the Next Steps bubble above the first card"
        },
        nextSteps_bringStuff_title: {
          title: "Bring Your Stuff",
          note: "Title of the Next Steps card for importing bookmarks and favorites"
        },
        nextSteps_bringStuff_summary: {
          title: "Import bookmarks, favorites, and passwords for a smooth transition from your old browser.",
          note: "Summary of the Next Steps card for importing bookmarks and favorites"
        },
        nextSteps_bringStuff_actionText: {
          title: "Import Now",
          note: "Button text of the Next Steps card for importing bookmarks and favorites"
        },
        nextSteps_defaultApp_title: {
          title: "Set as Default Browser",
          note: "Title of the Next Steps card for making DDG the user's default browser"
        },
        nextSteps_defaultApp_summary: {
          title: "We automatically block trackers as you browse. It\u2019s privacy, simplified.",
          note: "Summary of the Next Steps card for making DDG the user's default browser"
        },
        nextSteps_defaultApp_actionText: {
          title: "Make Default Browser",
          note: "Button text of the Next Steps card for making DDG the user's default browser"
        },
        nextSteps_blockCookies_title: {
          title: "Block Cookie Pop-ups",
          note: "Title of the Next Steps card for blocking cookie pop-ups"
        },
        nextSteps_blockCookies_summary: {
          title: "We need your permission to say no to cookies on your behalf. Easy choice.",
          note: "Summary of the Next Steps card for blocking cookie pop-ups"
        },
        nextSteps_blockCookies_actionText: {
          title: "Block Cookie Pop-ups",
          note: "Button text of the Next Steps card for blocking cookie pop-ups"
        },
        nextSteps_emailProtection_title: {
          title: "Protect Your Inbox",
          note: "Title of the Next Steps card for email protection"
        },
        nextSteps_emailProtection_summary: {
          title: "Generate @duck.com addresses that remove trackers from email and forwards to your inbox.",
          note: "Summary of the Next Steps card for email protection"
        },
        nextSteps_emailProtection_actionText: {
          title: "Get Email Protection",
          note: "Button text of the Next Steps card for email protection"
        },
        nextSteps_duckPlayer_title: {
          title: "YouTube Without Creepy Ads",
          note: "Title of the Next Steps card for adopting DuckPlayer"
        },
        nextSteps_duckPlayer_summary: {
          title: "Enjoy a clean viewing experience without personalized ads.",
          note: "Summary of the Next Steps card for adopting DuckPlayer"
        },
        nextSteps_duckPlayer_actionText: {
          title: "Try DuckPlayer",
          note: "Button text of the Next Steps card for adopting DuckPlayer"
        },
        nextSteps_addAppDockMac_title: {
          title: "Add App to the Dock",
          note: "Title of the Next Steps card for adding DDG app to OS dock"
        },
        nextSteps_addAppDockMac_summary: {
          title: "Access DuckDuckGo faster by adding it to the Dock.",
          note: "Summary of the Next Steps card for adding DDG app to OS dock"
        },
        nextSteps_addAppDockMac_actionText: {
          title: "Add to Dock",
          note: "Initial button text of the Next Steps card for adding DDG app to OS dock"
        },
        nextSteps_addAppDockMac_confirmationText: {
          title: "Added to Dock!",
          note: "Button text after clicking on the Next Steps card for adding DDG app to OS dock"
        },
        nextSteps_pinAppToTaskbarWindows_title: {
          title: "Pin App to the Taskbar",
          note: "Title of the Next Steps card for adding DDG app to OS dock"
        },
        nextSteps_pinAppToTaskbarWindows_summary: {
          title: "Access DuckDuckGo faster by pinning it to the Taskbar.",
          note: "Summary of the Next Steps card for adding DDG app to OS dock"
        },
        nextSteps_pinAppToTaskbarWindows_actionText: {
          title: "Pin to Taskbar",
          note: "Initial button text of the Next Steps card for adding DDG app to OS dock"
        },
        nextSteps_pinAppToTaskbarWindows_confirmationText: {
          title: "Pinned to Taskbar!",
          note: "Button text after clicking on the Next Steps card for adding DDG app to OS dock"
        }
      };
    }
  });

  // pages/new-tab/app/types.js
  function useTypedTranslation() {
    return {
      t: x2(TranslationContext).t
    };
  }
  var MessagingContext, useMessaging, InitialSetupContext, useInitialSetupData;
  var init_types = __esm({
    "pages/new-tab/app/types.js"() {
      "use strict";
      init_hooks_module();
      init_TranslationsProvider();
      init_preact_module();
      MessagingContext = G(
        /** @type {import("../src/js/index.js").NewTabPage} */
        {}
      );
      useMessaging = () => x2(MessagingContext);
      InitialSetupContext = G(
        /** @type {InitialSetupResponse} */
        {}
      );
      useInitialSetupData = () => x2(InitialSetupContext);
    }
  });

  // pages/new-tab/app/customizer/VisibilityMenu.js
  function VisibilityMenu({ rows }) {
    const { t: t3 } = useTypedTranslation();
    const MENU_ID = g2();
    return /* @__PURE__ */ _("div", { className: VisibilityMenu_default.dropdownInner }, /* @__PURE__ */ _("h2", { className: "sr-only" }, t3("widgets_visibility_menu_title")), /* @__PURE__ */ _("ul", { className: VisibilityMenu_default.list }, rows.map((row) => {
      return /* @__PURE__ */ _("li", { key: row.id }, /* @__PURE__ */ _("label", { className: VisibilityMenu_default.menuItemLabel, htmlFor: MENU_ID + row.id }, /* @__PURE__ */ _(
        "input",
        {
          type: "checkbox",
          checked: row.visibility === "visible",
          onChange: () => row.toggle?.(row.id),
          id: MENU_ID + row.id,
          class: VisibilityMenu_default.checkbox
        }
      ), /* @__PURE__ */ _("span", { "aria-hidden": true, className: VisibilityMenu_default.checkboxIcon }, row.visibility === "visible" && /* @__PURE__ */ _("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ _(
        "path",
        {
          d: "M3.5 9L6 11.5L12.5 5",
          stroke: "white",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ))), /* @__PURE__ */ _("span", { className: VisibilityMenu_default.svg }, row.icon === "shield" && /* @__PURE__ */ _(DuckFoot, null), row.icon === "star" && /* @__PURE__ */ _(Shield, null)), /* @__PURE__ */ _("span", null, row.title ?? row.id)));
    })));
  }
  var init_VisibilityMenu2 = __esm({
    "pages/new-tab/app/customizer/VisibilityMenu.js"() {
      "use strict";
      init_preact_module();
      init_hooks_module();
      init_Icons2();
      init_VisibilityMenu();
      init_types();
    }
  });

  // ../node_modules/classnames/index.js
  var require_classnames = __commonJS({
    "../node_modules/classnames/index.js"(exports, module) {
      (function() {
        "use strict";
        var hasOwn = {}.hasOwnProperty;
        function classNames() {
          var classes = "";
          for (var i4 = 0; i4 < arguments.length; i4++) {
            var arg = arguments[i4];
            if (arg) {
              classes = appendClass(classes, parseValue(arg));
            }
          }
          return classes;
        }
        function parseValue(arg) {
          if (typeof arg === "string" || typeof arg === "number") {
            return arg;
          }
          if (typeof arg !== "object") {
            return "";
          }
          if (Array.isArray(arg)) {
            return classNames.apply(null, arg);
          }
          if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
            return arg.toString();
          }
          var classes = "";
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes = appendClass(classes, key);
            }
          }
          return classes;
        }
        function appendClass(value, newClass) {
          if (!newClass) {
            return value;
          }
          if (value) {
            return value + " " + newClass;
          }
          return value + newClass;
        }
        if (typeof module !== "undefined" && module.exports) {
          classNames.default = classNames;
          module.exports = classNames;
        } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
          define("classnames", [], function() {
            return classNames;
          });
        } else {
          window.classNames = classNames;
        }
      })();
    }
  });

  // pages/new-tab/app/customizer/Customizer.js
  function Customizer() {
    const { setIsOpen, buttonRef, dropdownRef, isOpen } = useDropdown();
    const [rowData, setRowData] = h2(
      /** @type {VisibilityRowData[]} */
      []
    );
    useContextMenu();
    const toggleMenu = q2(() => {
      if (isOpen) return setIsOpen(false);
      setRowData(getItems());
      setIsOpen(true);
    }, [isOpen]);
    y2(() => {
      if (!isOpen) return;
      function handler() {
        setRowData(getItems());
      }
      window.addEventListener(Customizer.UPDATE_EVENT, handler);
      return () => {
        window.removeEventListener(Customizer.UPDATE_EVENT, handler);
      };
    }, [isOpen]);
    const MENU_ID = g2();
    const BUTTON_ID = g2();
    return /* @__PURE__ */ _("div", { class: Customizer_default.root, ref: dropdownRef }, /* @__PURE__ */ _(CustomizerButton, { buttonId: BUTTON_ID, menuId: MENU_ID, toggleMenu, buttonRef, isOpen }), /* @__PURE__ */ _("div", { id: MENU_ID, class: (0, import_classnames.default)(Customizer_default.dropdownMenu, { [Customizer_default.show]: isOpen }), "aria-labelledby": BUTTON_ID }, /* @__PURE__ */ _(VisibilityMenu, { rows: rowData })));
  }
  function getItems() {
    const next = [];
    const detail = {
      register: (incoming) => {
        next.push(incoming);
      }
    };
    const event = new CustomEvent(Customizer.OPEN_EVENT, { detail });
    window.dispatchEvent(event);
    next.sort((a3, b2) => a3.index - b2.index);
    return next;
  }
  function useContextMenu() {
    const messaging2 = useMessaging();
    y2(() => {
      function handler(e3) {
        e3.preventDefault();
        e3.stopImmediatePropagation();
        const items = getItems();
        const simplified = items.filter((x4) => x4.id !== "debug").map((item) => {
          return {
            id: item.id,
            title: item.title
          };
        });
        messaging2.contextMenu({ visibilityMenuItems: simplified });
      }
      document.body.addEventListener("contextmenu", handler);
      return () => {
        document.body.removeEventListener("contextmenu", handler);
      };
    }, [messaging2]);
  }
  function CustomizerButton({ menuId, buttonId, isOpen, toggleMenu, buttonRef }) {
    return /* @__PURE__ */ _(
      "button",
      {
        ref: buttonRef,
        className: Customizer_default.customizeButton,
        onClick: toggleMenu,
        "aria-haspopup": "true",
        "aria-expanded": isOpen,
        "aria-controls": menuId,
        id: buttonId
      },
      /* @__PURE__ */ _(CustomizeIcon, null),
      /* @__PURE__ */ _("span", null, "Customize")
    );
  }
  function CustomizerMenuPositionedFixed({ children }) {
    return /* @__PURE__ */ _("div", { class: Customizer_default.lowerRightFixed }, children);
  }
  function useDropdown() {
    const dropdownRef = A2(null);
    const buttonRef = A2(null);
    const [isOpen, setIsOpen] = h2(false);
    y2(() => {
      if (!isOpen) return;
      const handleFocusOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !buttonRef.current?.contains(event.target)) {
          setIsOpen(false);
        }
      };
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains?.(event.target)) {
          setIsOpen(false);
        }
      };
      const handleKeyDown = (event) => {
        if (event.key === "Escape") {
          setIsOpen(false);
          buttonRef.current?.focus?.();
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("focusin", handleFocusOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("focusin", handleFocusOutside);
      };
    }, [isOpen]);
    return { dropdownRef, buttonRef, isOpen, setIsOpen };
  }
  function useCustomizer({ title, id, icon, toggle, visibility, index }) {
    y2(() => {
      const handler = (e3) => {
        e3.detail.register({ title, id, icon, toggle, visibility, index });
      };
      window.addEventListener(Customizer.OPEN_EVENT, handler);
      return () => window.removeEventListener(Customizer.OPEN_EVENT, handler);
    }, [title, id, icon, toggle, visibility, index]);
    y2(() => {
      window.dispatchEvent(new Event(Customizer.UPDATE_EVENT));
    }, [visibility]);
  }
  var import_classnames;
  var init_Customizer2 = __esm({
    "pages/new-tab/app/customizer/Customizer.js"() {
      "use strict";
      init_preact_module();
      init_hooks_module();
      init_Customizer();
      init_VisibilityMenu2();
      init_Icons2();
      import_classnames = __toESM(require_classnames(), 1);
      init_types();
      Customizer.OPEN_EVENT = "ntp-customizer-open";
      Customizer.UPDATE_EVENT = "ntp-customizer-update";
    }
  });

  // pages/new-tab/app/components/Layout.js
  function Centered({ children }) {
    return /* @__PURE__ */ _("div", { class: "layout-centered" }, children);
  }
  var init_Layout = __esm({
    "pages/new-tab/app/components/Layout.js"() {
      "use strict";
      init_preact_module();
    }
  });

  // pages/new-tab/app/service.js
  var Service;
  var init_service = __esm({
    "pages/new-tab/app/service.js"() {
      "use strict";
      Service = class {
        eventTarget = new EventTarget();
        DEBOUNCE_TIME_MS = 200;
        /**
         * @param {object} props
         * @param {() => Promise<Data>} [props.initial]
         * @param {(fn: (t: Data) => void) => () => void} [props.subscribe] - optional subscribe
         * @param {(t: Data) => void} [props.persist] - optional persist method
         * @param {(old: Data) => Data} [props.update] - optional updater
         * @param {Data|null} [initial] - optional initial data
         */
        constructor(props, initial) {
          this.impl = props;
          if (initial) {
            this.data = initial;
          } else {
            this.data = null;
          }
        }
        /**
         * @return {Promise<Data>}
         */
        async fetchInitial() {
          if (!this.impl.initial) throw new Error("unreachable");
          const initial = await this.impl.initial();
          this._accept(initial, "initial");
          return (
            /** @type {Data} */
            this.data
          );
        }
        /**
         * This is convenience to prevent the boilerplate of dealing with the
         * eventTarget directly.
         *
         * Consumers pass a callback, which will be invoked with Data and the Source.
         *
         * A function is returned, which can be used to remove the event listener
         *
         * @param {(evt: {data: Data, source: 'manual' | 'subscription'}) => void} cb
         */
        onData(cb) {
          this._setupSubscription();
          const controller = new AbortController();
          this.eventTarget.addEventListener(
            "data",
            (evt) => {
              cb(evt.detail);
            },
            { signal: controller.signal }
          );
          return () => controller.abort();
        }
        /**
         * Remove data subscriptions
         */
        destroy() {
          this.sub?.();
        }
        /**
         * Setup the subscription if one doesn't already exist
         * @private
         */
        _setupSubscription() {
          if (this.sub) return;
          this.sub = this.impl.subscribe?.((data) => {
            this._accept(data, "subscription");
          });
        }
        /**
         * Apply a function over the current state.
         *
         * The change will be broadcast to observers immediately,
         * and then persists after a debounced period.
         *
         * @param {(prev: Data) => Data} updaterFn - the function that returns the next state
         */
        update(updaterFn) {
          if (this.data === null) return;
          const next = updaterFn(this.data);
          if (next) {
            this._accept(next, "manual");
          } else {
            console.warn("could not update");
          }
        }
        /**
         * @param {Data} data
         * @param {'initial' | 'subscription' | 'manual'} source
         * @private
         */
        _accept(data, source) {
          this.data = /** @type {NonNullable<Data>} */
          data;
          if (source === "initial") return;
          this.clearDebounceTimer();
          const dataEvent = new CustomEvent("data", {
            detail: {
              data: this.data,
              source
            }
          });
          this.eventTarget.dispatchEvent(dataEvent);
          if (source === "manual") {
            const time = window.location.search.includes("p2") ? this.DEBOUNCE_TIME_MS * 20.5 : this.DEBOUNCE_TIME_MS;
            this.debounceTimer = setTimeout(() => {
              this.persist();
            }, time);
          }
        }
        /**
         * Clears the debounce timer if it exists, simulating the switchMap behavior.
         */
        clearDebounceTimer() {
          if (this.debounceTimer) {
            clearTimeout(this.debounceTimer);
            this.debounceTimer = null;
          }
        }
        /**
         * Persists the current in-memory widget configuration state to the internal data feed.
         */
        persist() {
          if (!this.impl.persist) return;
          if (this.data === null) return;
          this.impl.persist(this.data);
        }
      };
    }
  });

  // pages/new-tab/app/favorites/favorites.service.js
  var FavoritesService;
  var init_favorites_service = __esm({
    "pages/new-tab/app/favorites/favorites.service.js"() {
      "use strict";
      init_service();
      FavoritesService = class {
        /**
         * @param {import("../../src/js/index.js").NewTabPage} ntp - The internal data feed, expected to have a `subscribe` method.
         * @internal
         */
        constructor(ntp) {
          this.ntp = ntp;
          this.dataService = new Service({
            initial: () => ntp.messaging.request("favorites_getData"),
            subscribe: (cb) => ntp.messaging.subscribe("favorites_onDataUpdate", cb)
          });
          this.configService = new Service({
            initial: () => ntp.messaging.request("favorites_getConfig"),
            subscribe: (cb) => ntp.messaging.subscribe("favorites_onConfigUpdate", cb),
            persist: (data) => ntp.messaging.notify("favorites_setConfig", data)
          });
        }
        /**
         * @returns {Promise<{data: FavoritesData; config: FavoritesConfig}>}
         * @internal
         */
        async getInitial() {
          const p1 = this.configService.fetchInitial();
          const p22 = this.dataService.fetchInitial();
          const [config, data] = await Promise.all([p1, p22]);
          return { config, data };
        }
        /**
         * @internal
         */
        destroy() {
          this.configService.destroy();
          this.dataService.destroy();
        }
        /**
         * @param {(evt: {data: FavoritesData, source: 'manual' | 'subscription'}) => void} cb
         * @internal
         */
        onData(cb) {
          return this.dataService.onData(cb);
        }
        /**
         * @param {(evt: {data: FavoritesConfig, source: 'manual' | 'subscription'}) => void} cb
         * @internal
         */
        onConfig(cb) {
          return this.configService.onData(cb);
        }
        /**
         * Update the in-memory data immediate and persist.
         * Any state changes will be broadcast to consumers synchronously
         * @internal
         */
        toggleExpansion() {
          this.configService.update((old) => {
            if (old.expansion === "expanded") {
              return { ...old, expansion: (
                /** @type {const} */
                "collapsed"
              ) };
            } else {
              return { ...old, expansion: (
                /** @type {const} */
                "expanded"
              ) };
            }
          });
        }
        /**
         * @param {FavoritesData} data
         * @param {string} id - entity id to move
         * @param {number} targetIndex - target index
         * @internal
         */
        setFavoritesOrder(data, id, targetIndex) {
          this.dataService.update((_old) => {
            return data;
          });
          this.ntp.messaging.notify("favorites_move", {
            id,
            targetIndex
          });
        }
        /**
         * @param {string} id - entity id
         * @internal
         */
        openContextMenu(id) {
          this.ntp.messaging.notify("favorites_openContextMenu", { id });
        }
        /**
         * @param {string} id - entity id
         * @param {FavoritesOpenAction['target']} target
         * @internal
         */
        openFavorite(id, target2) {
          this.ntp.messaging.notify("favorites_open", { id, target: target2 });
        }
        /**
         * @internal
         */
        add() {
          this.ntp.messaging.notify("favorites_add");
        }
      };
    }
  });

  // pages/new-tab/app/service.hooks.js
  function reducer(state, event) {
    switch (state.status) {
      case "idle": {
        switch (event.kind) {
          case "load-initial": {
            return { ...state, status: (
              /** @type {const} */
              "pending-initial"
            ) };
          }
          default:
            return state;
        }
      }
      case "pending-initial": {
        switch (event.kind) {
          case "initial-data": {
            return {
              ...state,
              status: (
                /** @type {const} */
                "ready"
              ),
              data: event.data,
              config: event.config
            };
          }
          case "error": {
            console.error("error with initial data", event.error);
            return state;
          }
          default:
            return state;
        }
      }
      case "ready": {
        switch (event.kind) {
          case "config": {
            return { ...state, config: event.config };
          }
          case "data": {
            return { ...state, data: event.data };
          }
          case "clear": {
            return { ...state, effect: null };
          }
          default:
            return state;
        }
      }
      default:
        return state;
    }
  }
  function useInitialDataAndConfig({ dispatch, service }) {
    y2(() => {
      if (!service.current) return console.warn("missing service");
      const stats2 = service.current;
      async function init2() {
        const { config, data } = await stats2.getInitial();
        if (data) {
          dispatch({ kind: "initial-data", data, config });
        } else {
          dispatch({ kind: "error", error: "missing data from getInitial" });
        }
      }
      dispatch({ kind: "load-initial" });
      init2().catch((e3) => {
        console.error("uncaught error", e3);
        dispatch({ kind: "error", error: e3 });
      });
      return () => {
        stats2.destroy();
      };
    }, []);
  }
  function useInitialData({ dispatch, service }) {
    y2(() => {
      if (!service.current) return console.warn("missing service");
      const stats2 = service.current;
      async function init2() {
        const data = await stats2.getInitial();
        if (data) {
          dispatch({ kind: "initial-data", data });
        } else {
          dispatch({ kind: "error", error: "missing data from getInitial" });
        }
      }
      dispatch({ kind: "load-initial" });
      init2().catch((e3) => {
        console.error("uncaught error", e3);
        dispatch({ kind: "error", error: e3 });
      });
      return () => {
        stats2.destroy();
      };
    }, []);
  }
  function useDataSubscription({ dispatch, service }) {
    y2(() => {
      if (!service.current) return console.warn("could not access service");
      const unsub = service.current.onData((evt) => {
        dispatch({ kind: "data", data: evt.data });
      });
      return () => {
        unsub();
      };
    }, [service, dispatch]);
  }
  function useConfigSubscription({ dispatch, service }) {
    const toggle = q2(() => {
      service.current?.toggleExpansion();
    }, [service, dispatch]);
    y2(() => {
      if (!service.current) return console.warn("could not access service");
      const unsub2 = service.current.onConfig((data) => {
        dispatch({ kind: "config", config: data.data });
      });
      return () => {
        unsub2();
      };
    }, [service]);
    return { toggle };
  }
  var init_service_hooks = __esm({
    "pages/new-tab/app/service.hooks.js"() {
      "use strict";
      init_hooks_module();
    }
  });

  // pages/new-tab/app/favorites/components/FavoritesProvider.js
  function FavoritesProvider({ children }) {
    const initial = (
      /** @type {State} */
      {
        status: (
          /** @type {const} */
          "idle"
        ),
        data: null,
        config: null
      }
    );
    const [state, dispatch] = p2(reducer, initial);
    const service = useService();
    useInitialDataAndConfig({ dispatch, service });
    useDataSubscription({ dispatch, service });
    const { toggle } = useConfigSubscription({ dispatch, service });
    const favoritesDidReOrder = q2(
      (favorites2, id, targetIndex) => {
        if (!service.current) return;
        service.current.setFavoritesOrder({ favorites: favorites2 }, id, targetIndex);
      },
      [service]
    );
    const openContextMenu = q2(
      (id) => {
        if (!service.current) return;
        service.current.openContextMenu(id);
      },
      [service]
    );
    const openFavorite = q2(
      (id, target2) => {
        if (!service.current) return;
        service.current.openFavorite(id, target2);
      },
      [service]
    );
    const add2 = q2(() => {
      if (!service.current) return;
      service.current.add();
    }, [service]);
    return /* @__PURE__ */ _(FavoritesContext.Provider, { value: { state, toggle, favoritesDidReOrder, openFavorite, openContextMenu, add: add2 } }, /* @__PURE__ */ _(FavoritesDispatchContext.Provider, { value: dispatch }, children));
  }
  function useService() {
    const service = A2(
      /** @type {FavoritesService | null} */
      null
    );
    const ntp = useMessaging();
    y2(() => {
      const stats2 = new FavoritesService(ntp);
      service.current = stats2;
      return () => {
        stats2.destroy();
      };
    }, [ntp]);
    return service;
  }
  var FavoritesContext, FavoritesDispatchContext;
  var init_FavoritesProvider = __esm({
    "pages/new-tab/app/favorites/components/FavoritesProvider.js"() {
      "use strict";
      init_preact_module();
      init_hooks_module();
      init_favorites_service();
      init_types();
      init_service_hooks();
      FavoritesContext = G({
        /** @type {import('../../service.hooks.js').State<FavoritesData, FavoritesConfig>} */
        state: { status: "idle", data: null, config: null },
        /** @type {() => void} */
        toggle: () => {
          throw new Error("must implement");
        },
        /** @type {(list: Favorite[], id: string, targetIndex: number) => void} */
        favoritesDidReOrder: (list2, id, targetIndex) => {
          throw new Error("must implement");
        },
        /** @type {(id: string) => void} */
        openContextMenu: (id) => {
          throw new Error("must implement");
        },
        /** @type {(id: string, target: OpenTarget) => void} */
        openFavorite: (id, target2) => {
          throw new Error("must implement");
        },
        /** @type {() => void} */
        add: () => {
          throw new Error("must implement add");
        }
      });
      FavoritesDispatchContext = G(
        /** @type {import("preact/hooks").Dispatch<Events>} */
        {}
      );
    }
  });

  // ../node_modules/preact/compat/dist/compat.module.js
  function g3(n2, t3) {
    for (var e3 in n2) if ("__source" !== e3 && !(e3 in t3)) return true;
    for (var r3 in t3) if ("__source" !== r3 && n2[r3] !== t3[r3]) return true;
    return false;
  }
  function E2(n2, t3) {
    this.props = n2, this.context = t3;
  }
  function C3(n2, e3) {
    function r3(n3) {
      var t3 = this.props.ref, r4 = t3 == n3.ref;
      return !r4 && t3 && (t3.call ? t3(null) : t3.current = null), e3 ? !e3(this.props, n3) || !r4 : g3(this.props, n3);
    }
    function u3(e4) {
      return this.shouldComponentUpdate = r3, _(n2, e4);
    }
    return u3.displayName = "Memo(" + (n2.displayName || n2.name) + ")", u3.prototype.isReactComponent = true, u3.__f = true, u3;
  }
  function T3(n2, t3, e3) {
    return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
      "function" == typeof n3.__c && n3.__c();
    }), n2.__c.__H = null), null != (n2 = function(n3, t4) {
      for (var e4 in t4) n3[e4] = t4[e4];
      return n3;
    }({}, n2)).__c && (n2.__c.__P === e3 && (n2.__c.__P = t3), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
      return T3(n3, t3, e3);
    })), n2;
  }
  function A3(n2, t3, e3) {
    return n2 && e3 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
      return A3(n3, t3, e3);
    }), n2.__c && n2.__c.__P === t3 && (n2.__e && e3.appendChild(n2.__e), n2.__c.__e = true, n2.__c.__P = e3)), n2;
  }
  function D3() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function L2(n2) {
    var t3 = n2.__.__c;
    return t3 && t3.__a && t3.__a(n2);
  }
  function F3() {
    this.u = null, this.o = null;
  }
  function J() {
  }
  function K() {
    return this.cancelBubble;
  }
  function Q() {
    return this.defaultPrevented;
  }
  var x3, R, N2, M2, U, j3, z3, B3, H2, Z, Y, G2, X, nn, tn, en, rn, pn;
  var init_compat_module = __esm({
    "../node_modules/preact/compat/dist/compat.module.js"() {
      init_preact_module();
      init_preact_module();
      init_hooks_module();
      init_hooks_module();
      (E2.prototype = new k()).isPureReactComponent = true, E2.prototype.shouldComponentUpdate = function(n2, t3) {
        return g3(this.props, n2) || g3(this.state, t3);
      };
      x3 = l.__b;
      l.__b = function(n2) {
        n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), x3 && x3(n2);
      };
      R = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
      N2 = l.__e;
      l.__e = function(n2, t3, e3, r3) {
        if (n2.then) {
          for (var u3, o3 = t3; o3 = o3.__; ) if ((u3 = o3.__c) && u3.__c) return null == t3.__e && (t3.__e = e3.__e, t3.__k = e3.__k), u3.__c(n2, t3);
        }
        N2(n2, t3, e3, r3);
      };
      M2 = l.unmount;
      l.unmount = function(n2) {
        var t3 = n2.__c;
        t3 && t3.__R && t3.__R(), t3 && 32 & n2.__u && (n2.type = null), M2 && M2(n2);
      }, (D3.prototype = new k()).__c = function(n2, t3) {
        var e3 = t3.__c, r3 = this;
        null == r3.t && (r3.t = []), r3.t.push(e3);
        var u3 = L2(r3.__v), o3 = false, i4 = function() {
          o3 || (o3 = true, e3.__R = null, u3 ? u3(c3) : c3());
        };
        e3.__R = i4;
        var c3 = function() {
          if (!--r3.__u) {
            if (r3.state.__a) {
              var n3 = r3.state.__a;
              r3.__v.__k[0] = A3(n3, n3.__c.__P, n3.__c.__O);
            }
            var t4;
            for (r3.setState({ __a: r3.__b = null }); t4 = r3.t.pop(); ) t4.forceUpdate();
          }
        };
        r3.__u++ || 32 & t3.__u || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), n2.then(i4, i4);
      }, D3.prototype.componentWillUnmount = function() {
        this.t = [];
      }, D3.prototype.render = function(n2, e3) {
        if (this.__b) {
          if (this.__v.__k) {
            var r3 = document.createElement("div"), o3 = this.__v.__k[0].__c;
            this.__v.__k[0] = T3(this.__b, r3, o3.__O = o3.__P);
          }
          this.__b = null;
        }
        var i4 = e3.__a && _(b, null, n2.fallback);
        return i4 && (i4.__u &= -33), [_(b, null, e3.__a ? null : n2.children), i4];
      };
      U = function(n2, t3, e3) {
        if (++e3[1] === e3[0] && n2.o.delete(t3), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size)) for (e3 = n2.u; e3; ) {
          for (; e3.length > 3; ) e3.pop()();
          if (e3[1] < e3[0]) break;
          n2.u = e3 = e3[2];
        }
      };
      (F3.prototype = new k()).__a = function(n2) {
        var t3 = this, e3 = L2(t3.__v), r3 = t3.o.get(n2);
        return r3[0]++, function(u3) {
          var o3 = function() {
            t3.props.revealOrder ? (r3.push(u3), U(t3, n2, r3)) : u3();
          };
          e3 ? e3(o3) : o3();
        };
      }, F3.prototype.render = function(n2) {
        this.u = null, this.o = /* @__PURE__ */ new Map();
        var t3 = H(n2.children);
        n2.revealOrder && "b" === n2.revealOrder[0] && t3.reverse();
        for (var e3 = t3.length; e3--; ) this.o.set(t3[e3], this.u = [1, 0, this.u]);
        return n2.children;
      }, F3.prototype.componentDidUpdate = F3.prototype.componentDidMount = function() {
        var n2 = this;
        this.o.forEach(function(t3, e3) {
          U(n2, e3, t3);
        });
      };
      j3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
      z3 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
      B3 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
      H2 = /[A-Z0-9]/g;
      Z = "undefined" != typeof document;
      Y = function(n2) {
        return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
      };
      k.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t3) {
        Object.defineProperty(k.prototype, t3, { configurable: true, get: function() {
          return this["UNSAFE_" + t3];
        }, set: function(n2) {
          Object.defineProperty(this, t3, { configurable: true, writable: true, value: n2 });
        } });
      });
      G2 = l.event;
      l.event = function(n2) {
        return G2 && (n2 = G2(n2)), n2.persist = J, n2.isPropagationStopped = K, n2.isDefaultPrevented = Q, n2.nativeEvent = n2;
      };
      nn = { enumerable: false, configurable: true, get: function() {
        return this.class;
      } };
      tn = l.vnode;
      l.vnode = function(n2) {
        "string" == typeof n2.type && function(n3) {
          var t3 = n3.props, e3 = n3.type, u3 = {}, o3 = -1 === e3.indexOf("-");
          for (var i4 in t3) {
            var c3 = t3[i4];
            if (!("value" === i4 && "defaultValue" in t3 && null == c3 || Z && "children" === i4 && "noscript" === e3 || "class" === i4 || "className" === i4)) {
              var f3 = i4.toLowerCase();
              "defaultValue" === i4 && "value" in t3 && null == t3.value ? i4 = "value" : "download" === i4 && true === c3 ? c3 = "" : "translate" === f3 && "no" === c3 ? c3 = false : "o" === f3[0] && "n" === f3[1] ? "ondoubleclick" === f3 ? i4 = "ondblclick" : "onchange" !== f3 || "input" !== e3 && "textarea" !== e3 || Y(t3.type) ? "onfocus" === f3 ? i4 = "onfocusin" : "onblur" === f3 ? i4 = "onfocusout" : B3.test(i4) && (i4 = f3) : f3 = i4 = "oninput" : o3 && z3.test(i4) ? i4 = i4.replace(H2, "-$&").toLowerCase() : null === c3 && (c3 = void 0), "oninput" === f3 && u3[i4 = f3] && (i4 = "oninputCapture"), u3[i4] = c3;
            }
          }
          "select" == e3 && u3.multiple && Array.isArray(u3.value) && (u3.value = H(t3.children).forEach(function(n4) {
            n4.props.selected = -1 != u3.value.indexOf(n4.props.value);
          })), "select" == e3 && null != u3.defaultValue && (u3.value = H(t3.children).forEach(function(n4) {
            n4.props.selected = u3.multiple ? -1 != u3.defaultValue.indexOf(n4.props.value) : u3.defaultValue == n4.props.value;
          })), t3.class && !t3.className ? (u3.class = t3.class, Object.defineProperty(u3, "className", nn)) : (t3.className && !t3.class || t3.class && t3.className) && (u3.class = u3.className = t3.className), n3.props = u3;
        }(n2), n2.$$typeof = j3, tn && tn(n2);
      };
      en = l.__r;
      l.__r = function(n2) {
        en && en(n2), X = n2.__c;
      };
      rn = l.diffed;
      l.diffed = function(n2) {
        rn && rn(n2);
        var t3 = n2.props, e3 = n2.__e;
        null != e3 && "textarea" === n2.type && "value" in t3 && t3.value !== e3.value && (e3.value = null == t3.value ? "" : t3.value), X = null;
      };
      pn = function(n2, t3) {
        return n2(t3);
      };
    }
  });

  // ../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
  function _arrayWithHoles(r3) {
    if (Array.isArray(r3)) return r3;
  }
  var init_arrayWithHoles = __esm({
    "../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js"() {
    }
  });

  // ../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
  function _iterableToArrayLimit(r3, l3) {
    var t3 = null == r3 ? null : "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
    if (null != t3) {
      var e3, n2, i4, u3, a3 = [], f3 = true, o3 = false;
      try {
        if (i4 = (t3 = t3.call(r3)).next, 0 === l3) {
          if (Object(t3) !== t3) return;
          f3 = false;
        } else for (; !(f3 = (e3 = i4.call(t3)).done) && (a3.push(e3.value), a3.length !== l3); f3 = true) ;
      } catch (r4) {
        o3 = true, n2 = r4;
      } finally {
        try {
          if (!f3 && null != t3["return"] && (u3 = t3["return"](), Object(u3) !== u3)) return;
        } finally {
          if (o3) throw n2;
        }
      }
      return a3;
    }
  }
  var init_iterableToArrayLimit = __esm({
    "../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js"() {
    }
  });

  // ../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
  function _arrayLikeToArray(r3, a3) {
    (null == a3 || a3 > r3.length) && (a3 = r3.length);
    for (var e3 = 0, n2 = Array(a3); e3 < a3; e3++) n2[e3] = r3[e3];
    return n2;
  }
  var init_arrayLikeToArray = __esm({
    "../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js"() {
    }
  });

  // ../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
  function _unsupportedIterableToArray(r3, a3) {
    if (r3) {
      if ("string" == typeof r3) return _arrayLikeToArray(r3, a3);
      var t3 = {}.toString.call(r3).slice(8, -1);
      return "Object" === t3 && r3.constructor && (t3 = r3.constructor.name), "Map" === t3 || "Set" === t3 ? Array.from(r3) : "Arguments" === t3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t3) ? _arrayLikeToArray(r3, a3) : void 0;
    }
  }
  var init_unsupportedIterableToArray = __esm({
    "../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js"() {
      init_arrayLikeToArray();
    }
  });

  // ../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var init_nonIterableRest = __esm({
    "../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js"() {
    }
  });

  // ../node_modules/@babel/runtime/helpers/esm/slicedToArray.js
  function _slicedToArray(r3, e3) {
    return _arrayWithHoles(r3) || _iterableToArrayLimit(r3, e3) || _unsupportedIterableToArray(r3, e3) || _nonIterableRest();
  }
  var init_slicedToArray = __esm({
    "../node_modules/@babel/runtime/helpers/esm/slicedToArray.js"() {
      init_arrayWithHoles();
      init_iterableToArrayLimit();
      init_unsupportedIterableToArray();
      init_nonIterableRest();
    }
  });

  // ../node_modules/bind-event-listener/dist/bind.js
  var require_bind = __commonJS({
    "../node_modules/bind-event-listener/dist/bind.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.bind = void 0;
      function bind4(target2, _a) {
        var type = _a.type, listener = _a.listener, options2 = _a.options;
        target2.addEventListener(type, listener, options2);
        return function unbind() {
          target2.removeEventListener(type, listener, options2);
        };
      }
      exports.bind = bind4;
    }
  });

  // ../node_modules/bind-event-listener/dist/bind-all.js
  var require_bind_all = __commonJS({
    "../node_modules/bind-event-listener/dist/bind-all.js"(exports) {
      "use strict";
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t3) {
          for (var s3, i4 = 1, n2 = arguments.length; i4 < n2; i4++) {
            s3 = arguments[i4];
            for (var p3 in s3) if (Object.prototype.hasOwnProperty.call(s3, p3))
              t3[p3] = s3[p3];
          }
          return t3;
        };
        return __assign.apply(this, arguments);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.bindAll = void 0;
      var bind_1 = require_bind();
      function toOptions(value) {
        if (typeof value === "undefined") {
          return void 0;
        }
        if (typeof value === "boolean") {
          return {
            capture: value
          };
        }
        return value;
      }
      function getBinding(original, sharedOptions) {
        if (sharedOptions == null) {
          return original;
        }
        var binding = __assign(__assign({}, original), { options: __assign(__assign({}, toOptions(sharedOptions)), toOptions(original.options)) });
        return binding;
      }
      function bindAll5(target2, bindings, sharedOptions) {
        var unbinds = bindings.map(function(original) {
          var binding = getBinding(original, sharedOptions);
          return (0, bind_1.bind)(target2, binding);
        });
        return function unbindAll() {
          unbinds.forEach(function(unbind) {
            return unbind();
          });
        };
      }
      exports.bindAll = bindAll5;
    }
  });

  // ../node_modules/bind-event-listener/dist/index.js
  var require_dist = __commonJS({
    "../node_modules/bind-event-listener/dist/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.bindAll = exports.bind = void 0;
      var bind_1 = require_bind();
      Object.defineProperty(exports, "bind", { enumerable: true, get: function() {
        return bind_1.bind;
      } });
      var bind_all_1 = require_bind_all();
      Object.defineProperty(exports, "bindAll", { enumerable: true, get: function() {
        return bind_all_1.bindAll;
      } });
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/honey-pot-fix/honey-pot-data-attribute.js
  var honeyPotDataAttribute;
  var init_honey_pot_data_attribute = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/honey-pot-fix/honey-pot-data-attribute.js"() {
      honeyPotDataAttribute = "data-pdnd-honey-pot";
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/honey-pot-fix/is-honey-pot-element.js
  function isHoneyPotElement(target2) {
    return target2 instanceof Element && target2.hasAttribute(honeyPotDataAttribute);
  }
  var init_is_honey_pot_element = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/honey-pot-fix/is-honey-pot-element.js"() {
      init_honey_pot_data_attribute();
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/honey-pot-fix/get-element-from-point-without-honey-pot.js
  function getElementFromPointWithoutHoneypot(client) {
    var _document$elementsFro = document.elementsFromPoint(client.x, client.y), _document$elementsFro2 = _slicedToArray(_document$elementsFro, 2), top2 = _document$elementsFro2[0], second = _document$elementsFro2[1];
    if (!top2) {
      return null;
    }
    if (isHoneyPotElement(top2)) {
      return second !== null && second !== void 0 ? second : null;
    }
    return top2;
  }
  var init_get_element_from_point_without_honey_pot = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/honey-pot-fix/get-element-from-point-without-honey-pot.js"() {
      init_slicedToArray();
      init_is_honey_pot_element();
    }
  });

  // ../node_modules/@babel/runtime/helpers/esm/typeof.js
  function _typeof(o3) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o4) {
      return typeof o4;
    } : function(o4) {
      return o4 && "function" == typeof Symbol && o4.constructor === Symbol && o4 !== Symbol.prototype ? "symbol" : typeof o4;
    }, _typeof(o3);
  }
  var init_typeof = __esm({
    "../node_modules/@babel/runtime/helpers/esm/typeof.js"() {
    }
  });

  // ../node_modules/@babel/runtime/helpers/esm/toPrimitive.js
  function toPrimitive(t3, r3) {
    if ("object" != _typeof(t3) || !t3) return t3;
    var e3 = t3[Symbol.toPrimitive];
    if (void 0 !== e3) {
      var i4 = e3.call(t3, r3 || "default");
      if ("object" != _typeof(i4)) return i4;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r3 ? String : Number)(t3);
  }
  var init_toPrimitive = __esm({
    "../node_modules/@babel/runtime/helpers/esm/toPrimitive.js"() {
      init_typeof();
    }
  });

  // ../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
  function toPropertyKey(t3) {
    var i4 = toPrimitive(t3, "string");
    return "symbol" == _typeof(i4) ? i4 : i4 + "";
  }
  var init_toPropertyKey = __esm({
    "../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js"() {
      init_typeof();
      init_toPrimitive();
    }
  });

  // ../node_modules/@babel/runtime/helpers/esm/defineProperty.js
  function _defineProperty(e3, r3, t3) {
    return (r3 = toPropertyKey(r3)) in e3 ? Object.defineProperty(e3, r3, {
      value: t3,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e3[r3] = t3, e3;
  }
  var init_defineProperty = __esm({
    "../node_modules/@babel/runtime/helpers/esm/defineProperty.js"() {
      init_toPropertyKey();
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/max-z-index.js
  var maxZIndex;
  var init_max_z_index = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/max-z-index.js"() {
      maxZIndex = 2147483647;
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/honey-pot-fix/make-honey-pot-fix.js
  function ownKeys(e3, r3) {
    var t3 = Object.keys(e3);
    if (Object.getOwnPropertySymbols) {
      var o3 = Object.getOwnPropertySymbols(e3);
      r3 && (o3 = o3.filter(function(r4) {
        return Object.getOwnPropertyDescriptor(e3, r4).enumerable;
      })), t3.push.apply(t3, o3);
    }
    return t3;
  }
  function _objectSpread(e3) {
    for (var r3 = 1; r3 < arguments.length; r3++) {
      var t3 = null != arguments[r3] ? arguments[r3] : {};
      r3 % 2 ? ownKeys(Object(t3), true).forEach(function(r4) {
        _defineProperty(e3, r4, t3[r4]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(t3)) : ownKeys(Object(t3)).forEach(function(r4) {
        Object.defineProperty(e3, r4, Object.getOwnPropertyDescriptor(t3, r4));
      });
    }
    return e3;
  }
  function floorToClosestPixel(point) {
    return {
      x: Math.floor(point.x),
      y: Math.floor(point.y)
    };
  }
  function pullBackByHalfHoneyPotSize(point) {
    return {
      x: point.x - halfHoneyPotSize,
      y: point.y - halfHoneyPotSize
    };
  }
  function preventGoingBackwardsOffScreen(point) {
    return {
      x: Math.max(point.x, 0),
      y: Math.max(point.y, 0)
    };
  }
  function preventGoingForwardsOffScreen(point) {
    return {
      x: Math.min(point.x, window.innerWidth - honeyPotSize),
      y: Math.min(point.y, window.innerHeight - honeyPotSize)
    };
  }
  function getHoneyPotRectFor(_ref) {
    var client = _ref.client;
    var point = preventGoingForwardsOffScreen(preventGoingBackwardsOffScreen(pullBackByHalfHoneyPotSize(floorToClosestPixel(client))));
    return DOMRect.fromRect({
      x: point.x,
      y: point.y,
      width: honeyPotSize,
      height: honeyPotSize
    });
  }
  function getRectStyles(_ref2) {
    var clientRect = _ref2.clientRect;
    return {
      left: "".concat(clientRect.left, "px"),
      top: "".concat(clientRect.top, "px"),
      width: "".concat(clientRect.width, "px"),
      height: "".concat(clientRect.height, "px")
    };
  }
  function isWithin(_ref3) {
    var client = _ref3.client, clientRect = _ref3.clientRect;
    return (
      // is within horizontal bounds
      client.x >= clientRect.x && client.x <= clientRect.x + clientRect.width && // is within vertical bounds
      client.y >= clientRect.y && client.y <= clientRect.y + clientRect.height
    );
  }
  function mountHoneyPot(_ref4) {
    var initial = _ref4.initial;
    var element = document.createElement("div");
    element.setAttribute(honeyPotDataAttribute, "true");
    var clientRect = getHoneyPotRectFor({
      client: initial
    });
    Object.assign(element.style, _objectSpread(_objectSpread({
      // Setting a background color explicitly to avoid any inherited styles.
      // Looks like this could be `opacity: 0`, but worried that _might_
      // cause the element to be ignored on some platforms.
      // When debugging, set backgroundColor to something like "red".
      backgroundColor: "transparent",
      position: "fixed",
      // Being explicit to avoid inheriting styles
      padding: 0,
      margin: 0,
      boxSizing: "border-box"
    }, getRectStyles({
      clientRect
    })), {}, {
      // We want this element to absorb pointer events,
      // it's kind of the whole point 😉
      pointerEvents: "auto",
      // Want to make sure the honey pot is top of everything else.
      // Don't need to worry about native drag previews, as they will
      // have been rendered (and removed) before the honey pot is rendered
      zIndex: maxZIndex
    }));
    document.body.appendChild(element);
    var unbindPointerMove = (0, import_bind_event_listener.bind)(window, {
      type: "pointermove",
      listener: function listener(event) {
        var client = {
          x: event.clientX,
          y: event.clientY
        };
        clientRect = getHoneyPotRectFor({
          client
        });
        Object.assign(element.style, getRectStyles({
          clientRect
        }));
      },
      // using capture so we are less likely to be impacted by event stopping
      options: {
        capture: true
      }
    });
    return function finish(_ref5) {
      var current = _ref5.current;
      unbindPointerMove();
      if (isWithin({
        client: current,
        clientRect
      })) {
        element.remove();
        return;
      }
      function cleanup() {
        unbindPostDragEvents();
        element.remove();
      }
      var unbindPostDragEvents = (0, import_bind_event_listener.bindAll)(window, [
        {
          type: "pointerdown",
          listener: cleanup
        },
        {
          type: "pointermove",
          listener: cleanup
        },
        {
          type: "focusin",
          listener: cleanup
        },
        {
          type: "focusout",
          listener: cleanup
        },
        // a 'pointerdown' should happen before 'dragstart', but just being super safe
        {
          type: "dragstart",
          listener: cleanup
        },
        // if the user has dragged something out of the window
        // and then is dragging something back into the window
        // the first events we will see are "dragenter" (and then "dragover").
        // So if we see any of these we need to clear the post drag fix.
        {
          type: "dragenter",
          listener: cleanup
        },
        {
          type: "dragover",
          listener: cleanup
        }
        // Not adding a "wheel" event listener, as "wheel" by itself does not
        // resolve the bug.
      ], {
        // Using `capture` so less likely to be impacted by other code stopping events
        capture: true
      });
    };
  }
  function makeHoneyPotFix() {
    var latestPointerMove = null;
    function bindEvents() {
      latestPointerMove = null;
      return (0, import_bind_event_listener.bind)(window, {
        type: "pointermove",
        listener: function listener(event) {
          latestPointerMove = {
            x: event.clientX,
            y: event.clientY
          };
        },
        // listening for pointer move in capture phase
        // so we are less likely to be impacted by events being stopped.
        options: {
          capture: true
        }
      });
    }
    function getOnPostDispatch() {
      var finish = null;
      return function onPostEvent(_ref6) {
        var eventName = _ref6.eventName, payload = _ref6.payload;
        if (eventName === "onDragStart") {
          var _latestPointerMove;
          var input = payload.location.initial.input;
          var initial = (_latestPointerMove = latestPointerMove) !== null && _latestPointerMove !== void 0 ? _latestPointerMove : {
            x: input.clientX,
            y: input.clientY
          };
          finish = mountHoneyPot({
            initial
          });
        }
        if (eventName === "onDrop") {
          var _finish;
          var _input = payload.location.current.input;
          (_finish = finish) === null || _finish === void 0 || _finish({
            current: {
              x: _input.clientX,
              y: _input.clientY
            }
          });
          finish = null;
          latestPointerMove = null;
        }
      };
    }
    return {
      bindEvents,
      getOnPostDispatch
    };
  }
  var import_bind_event_listener, honeyPotSize, halfHoneyPotSize;
  var init_make_honey_pot_fix = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/honey-pot-fix/make-honey-pot-fix.js"() {
      init_defineProperty();
      import_bind_event_listener = __toESM(require_dist());
      init_max_z_index();
      init_honey_pot_data_attribute();
      honeyPotSize = 2;
      halfHoneyPotSize = honeyPotSize / 2;
    }
  });

  // ../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
  function _arrayWithoutHoles(r3) {
    if (Array.isArray(r3)) return _arrayLikeToArray(r3);
  }
  var init_arrayWithoutHoles = __esm({
    "../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js"() {
      init_arrayLikeToArray();
    }
  });

  // ../node_modules/@babel/runtime/helpers/esm/iterableToArray.js
  function _iterableToArray(r3) {
    if ("undefined" != typeof Symbol && null != r3[Symbol.iterator] || null != r3["@@iterator"]) return Array.from(r3);
  }
  var init_iterableToArray = __esm({
    "../node_modules/@babel/runtime/helpers/esm/iterableToArray.js"() {
    }
  });

  // ../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var init_nonIterableSpread = __esm({
    "../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js"() {
    }
  });

  // ../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
  function _toConsumableArray(r3) {
    return _arrayWithoutHoles(r3) || _iterableToArray(r3) || _unsupportedIterableToArray(r3) || _nonIterableSpread();
  }
  var init_toConsumableArray = __esm({
    "../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"() {
      init_arrayWithoutHoles();
      init_iterableToArray();
      init_unsupportedIterableToArray();
      init_nonIterableSpread();
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/public-utils/once.js
  function once(fn) {
    var cache = null;
    return function wrapped() {
      if (!cache) {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        var result = fn.apply(this, args);
        cache = {
          result
        };
      }
      return cache.result;
    };
  }
  var init_once = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/public-utils/once.js"() {
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/is-firefox.js
  var isFirefox;
  var init_is_firefox = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/is-firefox.js"() {
      init_once();
      isFirefox = once(function isFirefox2() {
        if (false) {
          return false;
        }
        return navigator.userAgent.includes("Firefox");
      });
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/is-safari.js
  var isSafari;
  var init_is_safari = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/is-safari.js"() {
      init_once();
      isSafari = once(function isSafari2() {
        if (false) {
          return false;
        }
        var _navigator = navigator, userAgent = _navigator.userAgent;
        return userAgent.includes("AppleWebKit") && !userAgent.includes("Chrome");
      });
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/changing-window/count-events-for-safari.js
  function isEnteringWindowInSafari(_ref) {
    var dragEnter = _ref.dragEnter;
    if (!isSafari()) {
      return false;
    }
    return dragEnter.hasOwnProperty(symbols.isEnteringWindow);
  }
  function isLeavingWindowInSafari(_ref2) {
    var dragLeave = _ref2.dragLeave;
    if (!isSafari()) {
      return false;
    }
    return dragLeave.hasOwnProperty(symbols.isLeavingWindow);
  }
  var import_bind_event_listener2, symbols;
  var init_count_events_for_safari = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/changing-window/count-events-for-safari.js"() {
      import_bind_event_listener2 = __toESM(require_dist());
      init_is_safari();
      symbols = {
        isLeavingWindow: Symbol("leaving"),
        isEnteringWindow: Symbol("entering")
      };
      (function fixSafari() {
        if (typeof window === "undefined") {
          return;
        }
        if (false) {
          return;
        }
        if (!isSafari()) {
          return;
        }
        function getInitialState() {
          return {
            enterCount: 0,
            isOverWindow: false
          };
        }
        var state = getInitialState();
        function resetState() {
          state = getInitialState();
        }
        (0, import_bind_event_listener2.bindAll)(
          window,
          [{
            type: "dragstart",
            listener: function listener() {
              state.enterCount = 0;
              state.isOverWindow = true;
            }
          }, {
            type: "drop",
            listener: resetState
          }, {
            type: "dragend",
            listener: resetState
          }, {
            type: "dragenter",
            listener: function listener(event) {
              if (!state.isOverWindow && state.enterCount === 0) {
                event[symbols.isEnteringWindow] = true;
              }
              state.isOverWindow = true;
              state.enterCount++;
            }
          }, {
            type: "dragleave",
            listener: function listener(event) {
              state.enterCount--;
              if (state.isOverWindow && state.enterCount === 0) {
                event[symbols.isLeavingWindow] = true;
                state.isOverWindow = false;
              }
            }
          }],
          // using `capture: true` so that adding event listeners
          // in bubble phase will have the correct symbols
          {
            capture: true
          }
        );
      })();
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/changing-window/is-from-another-window.js
  function isNodeLike(target2) {
    return "nodeName" in target2;
  }
  function isFromAnotherWindow(eventTarget) {
    return isNodeLike(eventTarget) && eventTarget.ownerDocument !== document;
  }
  var init_is_from_another_window = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/changing-window/is-from-another-window.js"() {
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/changing-window/is-leaving-window.js
  function isLeavingWindow(_ref) {
    var dragLeave = _ref.dragLeave;
    var type = dragLeave.type, relatedTarget = dragLeave.relatedTarget;
    if (type !== "dragleave") {
      return false;
    }
    if (isSafari()) {
      return isLeavingWindowInSafari({
        dragLeave
      });
    }
    if (relatedTarget == null) {
      return true;
    }
    if (isFirefox()) {
      return isFromAnotherWindow(relatedTarget);
    }
    return relatedTarget instanceof HTMLIFrameElement;
  }
  var init_is_leaving_window = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/changing-window/is-leaving-window.js"() {
      init_is_firefox();
      init_is_safari();
      init_count_events_for_safari();
      init_is_from_another_window();
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/detect-broken-drag.js
  function getBindingsForBrokenDrags(_ref) {
    var onDragEnd = _ref.onDragEnd;
    return [
      // ## Detecting drag ending for removed draggables
      //
      // If a draggable element is removed during a drag and the user drops:
      // 1. if over a valid drop target: we get a "drop" event to know the drag is finished
      // 2. if not over a valid drop target (or cancelled): we get nothing
      // The "dragend" event will not fire on the source draggable if it has been
      // removed from the DOM.
      // So we need to figure out if a drag operation has finished by looking at other events
      // We can do this by looking at other events
      // ### First detection: "pointermove" events
      // 1. "pointermove" events cannot fire during a drag and drop operation
      // according to the spec. So if we get a "pointermove" it means that
      // the drag and drop operations has finished. So if we get a "pointermove"
      // we know that the drag is over
      // 2. 🦊😤 Drag and drop operations are _supposed_ to suppress
      // other pointer events. However, firefox will allow a few
      // pointer event to get through after a drag starts.
      // The most I've seen is 3
      {
        type: "pointermove",
        listener: /* @__PURE__ */ function() {
          var callCount = 0;
          return function listener() {
            if (callCount < 20) {
              callCount++;
              return;
            }
            onDragEnd();
          };
        }()
      },
      // ### Second detection: "pointerdown" events
      // If we receive this event then we know that a drag operation has finished
      // and potentially another one is about to start.
      // Note: `pointerdown` fires on all browsers / platforms before "dragstart"
      {
        type: "pointerdown",
        listener: onDragEnd
      }
    ];
  }
  var init_detect_broken_drag = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/detect-broken-drag.js"() {
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/get-input.js
  function getInput(event) {
    return {
      altKey: event.altKey,
      button: event.button,
      buttons: event.buttons,
      ctrlKey: event.ctrlKey,
      metaKey: event.metaKey,
      shiftKey: event.shiftKey,
      clientX: event.clientX,
      clientY: event.clientY,
      pageX: event.pageX,
      pageY: event.pageY
    };
  }
  var init_get_input = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/get-input.js"() {
    }
  });

  // ../node_modules/raf-schd/dist/raf-schd.esm.js
  var rafSchd, raf_schd_esm_default;
  var init_raf_schd_esm = __esm({
    "../node_modules/raf-schd/dist/raf-schd.esm.js"() {
      rafSchd = function rafSchd2(fn) {
        var lastArgs = [];
        var frameId = null;
        var wrapperFn = function wrapperFn2() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          lastArgs = args;
          if (frameId) {
            return;
          }
          frameId = requestAnimationFrame(function() {
            frameId = null;
            fn.apply(void 0, lastArgs);
          });
        };
        wrapperFn.cancel = function() {
          if (!frameId) {
            return;
          }
          cancelAnimationFrame(frameId);
          frameId = null;
        };
        return wrapperFn;
      };
      raf_schd_esm_default = rafSchd;
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/ledger/dispatch-consumer-event.js
  function makeDispatch(_ref) {
    var source = _ref.source, initial = _ref.initial, dispatchEvent = _ref.dispatchEvent;
    var previous = {
      dropTargets: []
    };
    function safeDispatch(args) {
      dispatchEvent(args);
      previous = {
        dropTargets: args.payload.location.current.dropTargets
      };
    }
    var dispatch = {
      start: function start2(_ref2) {
        var nativeSetDragImage = _ref2.nativeSetDragImage;
        var location2 = {
          current: initial,
          previous,
          initial
        };
        safeDispatch({
          eventName: "onGenerateDragPreview",
          payload: {
            source,
            location: location2,
            nativeSetDragImage
          }
        });
        dragStart.schedule(function() {
          safeDispatch({
            eventName: "onDragStart",
            payload: {
              source,
              location: location2
            }
          });
        });
      },
      dragUpdate: function dragUpdate(_ref3) {
        var current = _ref3.current;
        dragStart.flush();
        scheduleOnDrag.cancel();
        safeDispatch({
          eventName: "onDropTargetChange",
          payload: {
            source,
            location: {
              initial,
              previous,
              current
            }
          }
        });
      },
      drag: function drag(_ref4) {
        var current = _ref4.current;
        scheduleOnDrag(function() {
          dragStart.flush();
          var location2 = {
            initial,
            previous,
            current
          };
          safeDispatch({
            eventName: "onDrag",
            payload: {
              source,
              location: location2
            }
          });
        });
      },
      drop: function drop(_ref5) {
        var current = _ref5.current, updatedSourcePayload = _ref5.updatedSourcePayload;
        dragStart.flush();
        scheduleOnDrag.cancel();
        safeDispatch({
          eventName: "onDrop",
          payload: {
            source: updatedSourcePayload !== null && updatedSourcePayload !== void 0 ? updatedSourcePayload : source,
            location: {
              current,
              previous,
              initial
            }
          }
        });
      }
    };
    return dispatch;
  }
  var scheduleOnDrag, dragStart;
  var init_dispatch_consumer_event = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/ledger/dispatch-consumer-event.js"() {
      init_raf_schd_esm();
      scheduleOnDrag = raf_schd_esm_default(function(fn) {
        return fn();
      });
      dragStart = /* @__PURE__ */ function() {
        var scheduled = null;
        function schedule(fn) {
          var frameId = requestAnimationFrame(function() {
            scheduled = null;
            fn();
          });
          scheduled = {
            frameId,
            fn
          };
        }
        function flush() {
          if (scheduled) {
            cancelAnimationFrame(scheduled.frameId);
            scheduled.fn();
            scheduled = null;
          }
        }
        return {
          schedule,
          flush
        };
      }();
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/ledger/lifecycle-manager.js
  function canStart() {
    return !globalState.isActive;
  }
  function getNativeSetDragImage(event) {
    if (event.dataTransfer) {
      return event.dataTransfer.setDragImage.bind(event.dataTransfer);
    }
    return null;
  }
  function hasHierarchyChanged(_ref) {
    var current = _ref.current, next = _ref.next;
    if (current.length !== next.length) {
      return true;
    }
    for (var i4 = 0; i4 < current.length; i4++) {
      if (current[i4].element !== next[i4].element) {
        return true;
      }
    }
    return false;
  }
  function start(_ref2) {
    var event = _ref2.event, dragType = _ref2.dragType, getDropTargetsOver = _ref2.getDropTargetsOver, dispatchEvent = _ref2.dispatchEvent;
    if (!canStart()) {
      return;
    }
    var initial = getStartLocation({
      event,
      dragType,
      getDropTargetsOver
    });
    globalState.isActive = true;
    var state = {
      current: initial
    };
    setDropEffectOnEvent({
      event,
      current: initial.dropTargets
    });
    var dispatch = makeDispatch({
      source: dragType.payload,
      dispatchEvent,
      initial
    });
    function updateState(next) {
      var hasChanged = hasHierarchyChanged({
        current: state.current.dropTargets,
        next: next.dropTargets
      });
      state.current = next;
      if (hasChanged) {
        dispatch.dragUpdate({
          current: state.current
        });
      }
    }
    function onUpdateEvent(event2) {
      var input = getInput(event2);
      var target2 = isHoneyPotElement(event2.target) ? getElementFromPointWithoutHoneypot({
        x: input.clientX,
        y: input.clientY
      }) : event2.target;
      var nextDropTargets = getDropTargetsOver({
        target: target2,
        input,
        source: dragType.payload,
        current: state.current.dropTargets
      });
      if (nextDropTargets.length) {
        event2.preventDefault();
        setDropEffectOnEvent({
          event: event2,
          current: nextDropTargets
        });
      }
      updateState({
        dropTargets: nextDropTargets,
        input
      });
    }
    function cancel() {
      if (state.current.dropTargets.length) {
        updateState({
          dropTargets: [],
          input: state.current.input
        });
      }
      dispatch.drop({
        current: state.current,
        updatedSourcePayload: null
      });
      finish();
    }
    function finish() {
      globalState.isActive = false;
      unbindEvents();
    }
    var unbindEvents = (0, import_bind_event_listener3.bindAll)(
      window,
      [{
        // 👋 Note: we are repurposing the `dragover` event as our `drag` event
        // this is because firefox does not publish pointer coordinates during
        // a `drag` event, but does for every other type of drag event
        // `dragover` fires on all elements that are being dragged over
        // Because we are binding to `window` - our `dragover` is effectively the same as a `drag`
        // 🦊😤
        type: "dragover",
        listener: function listener(event2) {
          onUpdateEvent(event2);
          dispatch.drag({
            current: state.current
          });
        }
      }, {
        type: "dragenter",
        listener: onUpdateEvent
      }, {
        type: "dragleave",
        listener: function listener(event2) {
          if (!isLeavingWindow({
            dragLeave: event2
          })) {
            return;
          }
          updateState({
            input: state.current.input,
            dropTargets: []
          });
          if (dragType.startedFrom === "external") {
            cancel();
          }
        }
      }, {
        // A "drop" can only happen if the browser allowed the drop
        type: "drop",
        listener: function listener(event2) {
          state.current = {
            dropTargets: state.current.dropTargets,
            input: getInput(event2)
          };
          if (!state.current.dropTargets.length) {
            cancel();
            return;
          }
          event2.preventDefault();
          setDropEffectOnEvent({
            event: event2,
            current: state.current.dropTargets
          });
          dispatch.drop({
            current: state.current,
            // When dropping something native, we need to extract the latest
            // `.items` from the "drop" event as it is now accessible
            updatedSourcePayload: dragType.type === "external" ? dragType.getDropPayload(event2) : null
          });
          finish();
        }
      }, {
        // "dragend" fires when on the drag source (eg a draggable element)
        // when the drag is finished.
        // "dragend" will fire after "drop" (if there was a successful drop)
        // "dragend" does not fire if the draggable source has been removed during the drag
        // or for external drag sources (eg files)
        // This "dragend" listener will not fire if there was a successful drop
        // as we will have already removed the event listener
        type: "dragend",
        listener: function listener(event2) {
          state.current = {
            dropTargets: state.current.dropTargets,
            input: getInput(event2)
          };
          cancel();
        }
      }].concat(_toConsumableArray(getBindingsForBrokenDrags({
        onDragEnd: cancel
      }))),
      // Once we have started a managed drag operation it is important that we see / own all drag events
      // We got one adoption bug pop up where some code was stopping (`event.stopPropagation()`)
      // all "drop" events in the bubble phase on the `document.body`.
      // This meant that we never saw the "drop" event.
      {
        capture: true
      }
    );
    dispatch.start({
      nativeSetDragImage: getNativeSetDragImage(event)
    });
  }
  function setDropEffectOnEvent(_ref3) {
    var _current$;
    var event = _ref3.event, current = _ref3.current;
    var innerMost = (_current$ = current[0]) === null || _current$ === void 0 ? void 0 : _current$.dropEffect;
    if (innerMost != null && event.dataTransfer) {
      event.dataTransfer.dropEffect = innerMost;
    }
  }
  function getStartLocation(_ref4) {
    var event = _ref4.event, dragType = _ref4.dragType, getDropTargetsOver = _ref4.getDropTargetsOver;
    var input = getInput(event);
    if (dragType.startedFrom === "external") {
      return {
        input,
        dropTargets: []
      };
    }
    var dropTargets = getDropTargetsOver({
      input,
      source: dragType.payload,
      target: event.target,
      current: []
    });
    return {
      input,
      dropTargets
    };
  }
  var import_bind_event_listener3, globalState, lifecycle;
  var init_lifecycle_manager = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/ledger/lifecycle-manager.js"() {
      init_toConsumableArray();
      import_bind_event_listener3 = __toESM(require_dist());
      init_get_element_from_point_without_honey_pot();
      init_is_honey_pot_element();
      init_is_leaving_window();
      init_detect_broken_drag();
      init_get_input();
      init_dispatch_consumer_event();
      globalState = {
        isActive: false
      };
      lifecycle = {
        canStart,
        start
      };
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/ledger/usage-ledger.js
  function registerUsage(_ref) {
    var typeKey = _ref.typeKey, mount3 = _ref.mount;
    var entry = ledger.get(typeKey);
    if (entry) {
      entry.usageCount++;
      return entry;
    }
    var initial = {
      typeKey,
      unmount: mount3(),
      usageCount: 1
    };
    ledger.set(typeKey, initial);
    return initial;
  }
  function register(args) {
    var entry = registerUsage(args);
    return function unregister() {
      entry.usageCount--;
      if (entry.usageCount > 0) {
        return;
      }
      entry.unmount();
      ledger.delete(args.typeKey);
    };
  }
  var ledger;
  var init_usage_ledger = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/ledger/usage-ledger.js"() {
      ledger = /* @__PURE__ */ new Map();
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/public-utils/combine.js
  function combine() {
    for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }
    return function cleanup() {
      fns.forEach(function(fn) {
        return fn();
      });
    };
  }
  var init_combine = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/public-utils/combine.js"() {
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/add-attribute.js
  function addAttribute(element, _ref) {
    var attribute = _ref.attribute, value = _ref.value;
    element.setAttribute(attribute, value);
    return function() {
      return element.removeAttribute(attribute);
    };
  }
  var init_add_attribute = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/add-attribute.js"() {
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/make-adapter/make-drop-target.js
  function ownKeys2(e3, r3) {
    var t3 = Object.keys(e3);
    if (Object.getOwnPropertySymbols) {
      var o3 = Object.getOwnPropertySymbols(e3);
      r3 && (o3 = o3.filter(function(r4) {
        return Object.getOwnPropertyDescriptor(e3, r4).enumerable;
      })), t3.push.apply(t3, o3);
    }
    return t3;
  }
  function _objectSpread2(e3) {
    for (var r3 = 1; r3 < arguments.length; r3++) {
      var t3 = null != arguments[r3] ? arguments[r3] : {};
      r3 % 2 ? ownKeys2(Object(t3), true).forEach(function(r4) {
        _defineProperty(e3, r4, t3[r4]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(t3)) : ownKeys2(Object(t3)).forEach(function(r4) {
        Object.defineProperty(e3, r4, Object.getOwnPropertyDescriptor(t3, r4));
      });
    }
    return e3;
  }
  function _createForOfIteratorHelper(r3, e3) {
    var t3 = "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
    if (!t3) {
      if (Array.isArray(r3) || (t3 = _unsupportedIterableToArray2(r3)) || e3 && r3 && "number" == typeof r3.length) {
        t3 && (r3 = t3);
        var _n = 0, F4 = function F5() {
        };
        return { s: F4, n: function n2() {
          return _n >= r3.length ? { done: true } : { done: false, value: r3[_n++] };
        }, e: function e4(r4) {
          throw r4;
        }, f: F4 };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o3, a3 = true, u3 = false;
    return { s: function s3() {
      t3 = t3.call(r3);
    }, n: function n2() {
      var r4 = t3.next();
      return a3 = r4.done, r4;
    }, e: function e4(r4) {
      u3 = true, o3 = r4;
    }, f: function f3() {
      try {
        a3 || null == t3.return || t3.return();
      } finally {
        if (u3) throw o3;
      }
    } };
  }
  function _unsupportedIterableToArray2(r3, a3) {
    if (r3) {
      if ("string" == typeof r3) return _arrayLikeToArray2(r3, a3);
      var t3 = {}.toString.call(r3).slice(8, -1);
      return "Object" === t3 && r3.constructor && (t3 = r3.constructor.name), "Map" === t3 || "Set" === t3 ? Array.from(r3) : "Arguments" === t3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t3) ? _arrayLikeToArray2(r3, a3) : void 0;
    }
  }
  function _arrayLikeToArray2(r3, a3) {
    (null == a3 || a3 > r3.length) && (a3 = r3.length);
    for (var e3 = 0, n2 = Array(a3); e3 < a3; e3++) n2[e3] = r3[e3];
    return n2;
  }
  function copyReverse(array) {
    return array.slice(0).reverse();
  }
  function makeDropTarget(_ref) {
    var typeKey = _ref.typeKey, defaultDropEffect = _ref.defaultDropEffect;
    var registry = /* @__PURE__ */ new WeakMap();
    var dropTargetDataAtt = "data-drop-target-for-".concat(typeKey);
    var dropTargetSelector = "[".concat(dropTargetDataAtt, "]");
    function addToRegistry2(args) {
      registry.set(args.element, args);
      return function() {
        return registry.delete(args.element);
      };
    }
    function dropTargetForConsumers(args) {
      if (true) {
        var existing = registry.get(args.element);
        if (existing) {
          console.warn("You have already registered a [".concat(typeKey, "] dropTarget on the same element"), {
            existing,
            proposed: args
          });
        }
        if (args.element instanceof HTMLIFrameElement) {
          console.warn("\n            We recommend not registering <iframe> elements as drop targets\n            as it can result in some strange browser event ordering.\n          ".replace(/\s{2,}/g, " ").trim());
        }
      }
      return combine(addAttribute(args.element, {
        attribute: dropTargetDataAtt,
        value: "true"
      }), addToRegistry2(args));
    }
    function getActualDropTargets(_ref2) {
      var _args$getData, _args$getData2, _args$getDropEffect, _args$getDropEffect2;
      var source = _ref2.source, target2 = _ref2.target, input = _ref2.input, _ref2$result = _ref2.result, result = _ref2$result === void 0 ? [] : _ref2$result;
      if (target2 == null) {
        return result;
      }
      if (!(target2 instanceof Element)) {
        if (target2 instanceof Node) {
          return getActualDropTargets({
            source,
            target: target2.parentElement,
            input,
            result
          });
        }
        return result;
      }
      var closest = target2.closest(dropTargetSelector);
      if (closest == null) {
        return result;
      }
      var args = registry.get(closest);
      if (args == null) {
        return result;
      }
      var feedback = {
        input,
        source,
        element: args.element
      };
      if (args.canDrop && !args.canDrop(feedback)) {
        return getActualDropTargets({
          source,
          target: args.element.parentElement,
          input,
          result
        });
      }
      var data = (_args$getData = (_args$getData2 = args.getData) === null || _args$getData2 === void 0 ? void 0 : _args$getData2.call(args, feedback)) !== null && _args$getData !== void 0 ? _args$getData : {};
      var dropEffect = (_args$getDropEffect = (_args$getDropEffect2 = args.getDropEffect) === null || _args$getDropEffect2 === void 0 ? void 0 : _args$getDropEffect2.call(args, feedback)) !== null && _args$getDropEffect !== void 0 ? _args$getDropEffect : defaultDropEffect;
      var record = {
        data,
        element: args.element,
        dropEffect,
        // we are collecting _actual_ drop targets, so these are
        // being applied _not_ due to stickiness
        isActiveDueToStickiness: false
      };
      return getActualDropTargets({
        source,
        target: args.element.parentElement,
        input,
        // Using bubble ordering. Same ordering as `event.getPath()`
        result: [].concat(_toConsumableArray(result), [record])
      });
    }
    function notifyCurrent(_ref3) {
      var eventName = _ref3.eventName, payload = _ref3.payload;
      var _iterator = _createForOfIteratorHelper(payload.location.current.dropTargets), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _entry$eventName;
          var record = _step.value;
          var entry = registry.get(record.element);
          var args = _objectSpread2(_objectSpread2({}, payload), {}, {
            self: record
          });
          entry === null || entry === void 0 || (_entry$eventName = entry[eventName]) === null || _entry$eventName === void 0 || _entry$eventName.call(
            entry,
            // I cannot seem to get the types right here.
            // TS doesn't seem to like that one event can need `nativeSetDragImage`
            // @ts-expect-error
            args
          );
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    var actions = {
      onGenerateDragPreview: notifyCurrent,
      onDrag: notifyCurrent,
      onDragStart: notifyCurrent,
      onDrop: notifyCurrent,
      onDropTargetChange: function onDropTargetChange(_ref4) {
        var payload = _ref4.payload;
        var isCurrent = new Set(payload.location.current.dropTargets.map(function(record2) {
          return record2.element;
        }));
        var visited = /* @__PURE__ */ new Set();
        var _iterator2 = _createForOfIteratorHelper(payload.location.previous.dropTargets), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var _entry$onDropTargetCh;
            var record = _step2.value;
            visited.add(record.element);
            var entry = registry.get(record.element);
            var isOver = isCurrent.has(record.element);
            var args = _objectSpread2(_objectSpread2({}, payload), {}, {
              self: record
            });
            entry === null || entry === void 0 || (_entry$onDropTargetCh = entry.onDropTargetChange) === null || _entry$onDropTargetCh === void 0 || _entry$onDropTargetCh.call(entry, args);
            if (!isOver) {
              var _entry$onDragLeave;
              entry === null || entry === void 0 || (_entry$onDragLeave = entry.onDragLeave) === null || _entry$onDragLeave === void 0 || _entry$onDragLeave.call(entry, args);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        var _iterator3 = _createForOfIteratorHelper(payload.location.current.dropTargets), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var _entry$onDropTargetCh2, _entry$onDragEnter;
            var _record = _step3.value;
            if (visited.has(_record.element)) {
              continue;
            }
            var _args = _objectSpread2(_objectSpread2({}, payload), {}, {
              self: _record
            });
            var _entry = registry.get(_record.element);
            _entry === null || _entry === void 0 || (_entry$onDropTargetCh2 = _entry.onDropTargetChange) === null || _entry$onDropTargetCh2 === void 0 || _entry$onDropTargetCh2.call(_entry, _args);
            _entry === null || _entry === void 0 || (_entry$onDragEnter = _entry.onDragEnter) === null || _entry$onDragEnter === void 0 || _entry$onDragEnter.call(_entry, _args);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    };
    function dispatchEvent(args) {
      actions[args.eventName](args);
    }
    function getIsOver(_ref5) {
      var source = _ref5.source, target2 = _ref5.target, input = _ref5.input, current = _ref5.current;
      var actual = getActualDropTargets({
        source,
        target: target2,
        input
      });
      if (actual.length >= current.length) {
        return actual;
      }
      var lastCaptureOrdered = copyReverse(current);
      var actualCaptureOrdered = copyReverse(actual);
      var resultCaptureOrdered = [];
      for (var index = 0; index < lastCaptureOrdered.length; index++) {
        var _argsForLast$getIsSti;
        var last = lastCaptureOrdered[index];
        var fresh = actualCaptureOrdered[index];
        if (fresh != null) {
          resultCaptureOrdered.push(fresh);
          continue;
        }
        var parent = resultCaptureOrdered[index - 1];
        var lastParent = lastCaptureOrdered[index - 1];
        if ((parent === null || parent === void 0 ? void 0 : parent.element) !== (lastParent === null || lastParent === void 0 ? void 0 : lastParent.element)) {
          break;
        }
        var argsForLast = registry.get(last.element);
        if (!argsForLast) {
          break;
        }
        var feedback = {
          input,
          source,
          element: argsForLast.element
        };
        if (argsForLast.canDrop && !argsForLast.canDrop(feedback)) {
          break;
        }
        if (!((_argsForLast$getIsSti = argsForLast.getIsSticky) !== null && _argsForLast$getIsSti !== void 0 && _argsForLast$getIsSti.call(argsForLast, feedback))) {
          break;
        }
        resultCaptureOrdered.push(_objectSpread2(_objectSpread2({}, last), {}, {
          // making it clear to consumers this drop target is active due to stickiness
          isActiveDueToStickiness: true
        }));
      }
      return copyReverse(resultCaptureOrdered);
    }
    return {
      dropTargetForConsumers,
      getIsOver,
      dispatchEvent
    };
  }
  var init_make_drop_target = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/make-adapter/make-drop-target.js"() {
      init_defineProperty();
      init_toConsumableArray();
      init_combine();
      init_add_attribute();
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/make-adapter/make-monitor.js
  function _createForOfIteratorHelper2(r3, e3) {
    var t3 = "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
    if (!t3) {
      if (Array.isArray(r3) || (t3 = _unsupportedIterableToArray3(r3)) || e3 && r3 && "number" == typeof r3.length) {
        t3 && (r3 = t3);
        var _n = 0, F4 = function F5() {
        };
        return { s: F4, n: function n2() {
          return _n >= r3.length ? { done: true } : { done: false, value: r3[_n++] };
        }, e: function e4(r4) {
          throw r4;
        }, f: F4 };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o3, a3 = true, u3 = false;
    return { s: function s3() {
      t3 = t3.call(r3);
    }, n: function n2() {
      var r4 = t3.next();
      return a3 = r4.done, r4;
    }, e: function e4(r4) {
      u3 = true, o3 = r4;
    }, f: function f3() {
      try {
        a3 || null == t3.return || t3.return();
      } finally {
        if (u3) throw o3;
      }
    } };
  }
  function _unsupportedIterableToArray3(r3, a3) {
    if (r3) {
      if ("string" == typeof r3) return _arrayLikeToArray3(r3, a3);
      var t3 = {}.toString.call(r3).slice(8, -1);
      return "Object" === t3 && r3.constructor && (t3 = r3.constructor.name), "Map" === t3 || "Set" === t3 ? Array.from(r3) : "Arguments" === t3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t3) ? _arrayLikeToArray3(r3, a3) : void 0;
    }
  }
  function _arrayLikeToArray3(r3, a3) {
    (null == a3 || a3 > r3.length) && (a3 = r3.length);
    for (var e3 = 0, n2 = Array(a3); e3 < a3; e3++) n2[e3] = r3[e3];
    return n2;
  }
  function ownKeys3(e3, r3) {
    var t3 = Object.keys(e3);
    if (Object.getOwnPropertySymbols) {
      var o3 = Object.getOwnPropertySymbols(e3);
      r3 && (o3 = o3.filter(function(r4) {
        return Object.getOwnPropertyDescriptor(e3, r4).enumerable;
      })), t3.push.apply(t3, o3);
    }
    return t3;
  }
  function _objectSpread3(e3) {
    for (var r3 = 1; r3 < arguments.length; r3++) {
      var t3 = null != arguments[r3] ? arguments[r3] : {};
      r3 % 2 ? ownKeys3(Object(t3), true).forEach(function(r4) {
        _defineProperty(e3, r4, t3[r4]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(t3)) : ownKeys3(Object(t3)).forEach(function(r4) {
        Object.defineProperty(e3, r4, Object.getOwnPropertyDescriptor(t3, r4));
      });
    }
    return e3;
  }
  function makeMonitor() {
    var registry = /* @__PURE__ */ new Set();
    var dragging = null;
    function tryAddToActive(monitor) {
      if (!dragging) {
        return;
      }
      if (!monitor.canMonitor || monitor.canMonitor(dragging.canMonitorArgs)) {
        dragging.active.add(monitor);
      }
    }
    function monitorForConsumers(args) {
      var entry = _objectSpread3({}, args);
      registry.add(entry);
      tryAddToActive(entry);
      return function cleanup() {
        registry.delete(entry);
        if (dragging) {
          dragging.active.delete(entry);
        }
      };
    }
    function dispatchEvent(_ref) {
      var eventName = _ref.eventName, payload = _ref.payload;
      if (eventName === "onGenerateDragPreview") {
        dragging = {
          canMonitorArgs: {
            initial: payload.location.initial,
            source: payload.source
          },
          active: /* @__PURE__ */ new Set()
        };
        var _iterator = _createForOfIteratorHelper2(registry), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var monitor = _step.value;
            tryAddToActive(monitor);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      if (!dragging) {
        return;
      }
      var active = Array.from(dragging.active);
      for (var _i = 0, _active = active; _i < _active.length; _i++) {
        var _monitor = _active[_i];
        if (dragging.active.has(_monitor)) {
          var _monitor$eventName;
          (_monitor$eventName = _monitor[eventName]) === null || _monitor$eventName === void 0 || _monitor$eventName.call(_monitor, payload);
        }
      }
      if (eventName === "onDrop") {
        dragging.active.clear();
        dragging = null;
      }
    }
    return {
      dispatchEvent,
      monitorForConsumers
    };
  }
  var init_make_monitor = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/make-adapter/make-monitor.js"() {
      init_defineProperty();
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/make-adapter/make-adapter.js
  function makeAdapter(_ref) {
    var typeKey = _ref.typeKey, mount3 = _ref.mount, dispatchEventToSource2 = _ref.dispatchEventToSource, onPostDispatch = _ref.onPostDispatch, defaultDropEffect = _ref.defaultDropEffect;
    var monitorAPI = makeMonitor();
    var dropTargetAPI = makeDropTarget({
      typeKey,
      defaultDropEffect
    });
    function dispatchEvent(args) {
      dispatchEventToSource2 === null || dispatchEventToSource2 === void 0 || dispatchEventToSource2(args);
      dropTargetAPI.dispatchEvent(args);
      monitorAPI.dispatchEvent(args);
      onPostDispatch === null || onPostDispatch === void 0 || onPostDispatch(args);
    }
    function start2(_ref2) {
      var event = _ref2.event, dragType = _ref2.dragType;
      lifecycle.start({
        event,
        dragType,
        getDropTargetsOver: dropTargetAPI.getIsOver,
        dispatchEvent
      });
    }
    function registerUsage2() {
      function mountAdapter() {
        var api = {
          canStart: lifecycle.canStart,
          start: start2
        };
        return mount3(api);
      }
      return register({
        typeKey,
        mount: mountAdapter
      });
    }
    return {
      registerUsage: registerUsage2,
      dropTarget: dropTargetAPI.dropTargetForConsumers,
      monitor: monitorAPI.monitorForConsumers
    };
  }
  var init_make_adapter = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/make-adapter/make-adapter.js"() {
      init_lifecycle_manager();
      init_usage_ledger();
      init_make_drop_target();
      init_make_monitor();
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/android.js
  var isAndroid, androidFallbackText;
  var init_android = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/android.js"() {
      init_once();
      isAndroid = once(function isAndroid2() {
        return navigator.userAgent.toLocaleLowerCase().includes("android");
      });
      androidFallbackText = "pdnd:android-fallback";
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/media-types/text-media-type.js
  var textMediaType;
  var init_text_media_type = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/media-types/text-media-type.js"() {
      textMediaType = "text/plain";
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/media-types/url-media-type.js
  var URLMediaType;
  var init_url_media_type = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/media-types/url-media-type.js"() {
      URLMediaType = "text/uri-list";
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/adapter/element-adapter-native-data-key.js
  var elementAdapterNativeDataKey;
  var init_element_adapter_native_data_key = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/adapter/element-adapter-native-data-key.js"() {
      elementAdapterNativeDataKey = "application/vnd.pdnd";
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/adapter/element-adapter.js
  function addToRegistry(args) {
    draggableRegistry.set(args.element, args);
    return function cleanup() {
      draggableRegistry.delete(args.element);
    };
  }
  function draggable(args) {
    if (true) {
      if (args.dragHandle && !args.element.contains(args.dragHandle)) {
        console.warn("Drag handle element must be contained in draggable element", {
          element: args.element,
          dragHandle: args.dragHandle
        });
      }
    }
    if (true) {
      var existing = draggableRegistry.get(args.element);
      if (existing) {
        console.warn("You have already registered a `draggable` on the same element", {
          existing,
          proposed: args
        });
      }
    }
    return combine(
      // making the draggable register the adapter rather than drop targets
      // this is because you *must* have a draggable element to start a drag
      // but you _might_ not have any drop targets immediately
      // (You might create drop targets async)
      adapter.registerUsage(),
      addToRegistry(args),
      addAttribute(args.element, {
        attribute: "draggable",
        value: "true"
      })
    );
  }
  var import_bind_event_listener4, draggableRegistry, honeyPotFix, adapter, dropTargetForElements, monitorForElements;
  var init_element_adapter = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/adapter/element-adapter.js"() {
      init_slicedToArray();
      import_bind_event_listener4 = __toESM(require_dist());
      init_get_element_from_point_without_honey_pot();
      init_make_honey_pot_fix();
      init_make_adapter();
      init_combine();
      init_add_attribute();
      init_android();
      init_get_input();
      init_text_media_type();
      init_url_media_type();
      init_element_adapter_native_data_key();
      draggableRegistry = /* @__PURE__ */ new WeakMap();
      honeyPotFix = makeHoneyPotFix();
      adapter = makeAdapter({
        typeKey: "element",
        defaultDropEffect: "move",
        mount: function mount(api) {
          return combine(honeyPotFix.bindEvents(), (0, import_bind_event_listener4.bind)(document, {
            type: "dragstart",
            listener: function listener(event) {
              var _entry$dragHandle, _entry$getInitialData, _entry$getInitialData2, _entry$dragHandle2, _entry$getInitialData3, _entry$getInitialData4;
              if (!api.canStart(event)) {
                return;
              }
              if (event.defaultPrevented) {
                return;
              }
              if (!event.dataTransfer) {
                if (true) {
                  console.warn("\n              It appears as though you have are not testing DragEvents correctly.\n\n              - If you are unit testing, ensure you have polyfilled DragEvent.\n              - If you are browser testing, ensure you are dispatching drag events correctly.\n\n              Please see our testing guides for more information:\n              https://atlassian.design/components/pragmatic-drag-and-drop/core-package/testing\n            ".replace(/ {2}/g, ""));
                }
                return;
              }
              var target2 = event.target;
              if (!(target2 instanceof HTMLElement)) {
                return null;
              }
              var entry = draggableRegistry.get(target2);
              if (!entry) {
                return null;
              }
              var input = getInput(event);
              var feedback = {
                element: entry.element,
                dragHandle: (_entry$dragHandle = entry.dragHandle) !== null && _entry$dragHandle !== void 0 ? _entry$dragHandle : null,
                input
              };
              if (entry.canDrag && !entry.canDrag(feedback)) {
                event.preventDefault();
                return null;
              }
              if (entry.dragHandle) {
                var over = getElementFromPointWithoutHoneypot({
                  x: input.clientX,
                  y: input.clientY
                });
                if (!entry.dragHandle.contains(over)) {
                  event.preventDefault();
                  return null;
                }
              }
              var nativeData = (_entry$getInitialData = (_entry$getInitialData2 = entry.getInitialDataForExternal) === null || _entry$getInitialData2 === void 0 ? void 0 : _entry$getInitialData2.call(entry, feedback)) !== null && _entry$getInitialData !== void 0 ? _entry$getInitialData : null;
              if (nativeData) {
                for (var _i = 0, _Object$entries = Object.entries(nativeData); _i < _Object$entries.length; _i++) {
                  var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), key = _Object$entries$_i[0], data = _Object$entries$_i[1];
                  event.dataTransfer.setData(key, data !== null && data !== void 0 ? data : "");
                }
              }
              if (isAndroid() && !event.dataTransfer.types.includes(textMediaType) && !event.dataTransfer.types.includes(URLMediaType)) {
                event.dataTransfer.setData(textMediaType, androidFallbackText);
              }
              event.dataTransfer.setData(elementAdapterNativeDataKey, "");
              var payload = {
                element: entry.element,
                dragHandle: (_entry$dragHandle2 = entry.dragHandle) !== null && _entry$dragHandle2 !== void 0 ? _entry$dragHandle2 : null,
                data: (_entry$getInitialData3 = (_entry$getInitialData4 = entry.getInitialData) === null || _entry$getInitialData4 === void 0 ? void 0 : _entry$getInitialData4.call(entry, feedback)) !== null && _entry$getInitialData3 !== void 0 ? _entry$getInitialData3 : {}
              };
              var dragType = {
                type: "element",
                payload,
                startedFrom: "internal"
              };
              api.start({
                event,
                dragType
              });
            }
          }));
        },
        dispatchEventToSource: function dispatchEventToSource(_ref) {
          var _draggableRegistry$ge, _draggableRegistry$ge2;
          var eventName = _ref.eventName, payload = _ref.payload;
          (_draggableRegistry$ge = draggableRegistry.get(payload.source.element)) === null || _draggableRegistry$ge === void 0 || (_draggableRegistry$ge2 = _draggableRegistry$ge[eventName]) === null || _draggableRegistry$ge2 === void 0 || _draggableRegistry$ge2.call(
            _draggableRegistry$ge,
            // I cannot seem to get the types right here.
            // TS doesn't seem to like that one event can need `nativeSetDragImage`
            // @ts-expect-error
            payload
          );
        },
        onPostDispatch: honeyPotFix.getOnPostDispatch()
      });
      dropTargetForElements = adapter.dropTarget;
      monitorForElements = adapter.monitor;
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/entry-point/element/adapter.js
  var init_adapter = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/entry-point/element/adapter.js"() {
      init_element_adapter();
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop-hitbox/dist/esm/closest-edge.js
  function ownKeys4(e3, r3) {
    var t3 = Object.keys(e3);
    if (Object.getOwnPropertySymbols) {
      var o3 = Object.getOwnPropertySymbols(e3);
      r3 && (o3 = o3.filter(function(r4) {
        return Object.getOwnPropertyDescriptor(e3, r4).enumerable;
      })), t3.push.apply(t3, o3);
    }
    return t3;
  }
  function _objectSpread4(e3) {
    for (var r3 = 1; r3 < arguments.length; r3++) {
      var t3 = null != arguments[r3] ? arguments[r3] : {};
      r3 % 2 ? ownKeys4(Object(t3), true).forEach(function(r4) {
        _defineProperty(e3, r4, t3[r4]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(t3)) : ownKeys4(Object(t3)).forEach(function(r4) {
        Object.defineProperty(e3, r4, Object.getOwnPropertyDescriptor(t3, r4));
      });
    }
    return e3;
  }
  function attachClosestEdge(userData, _ref) {
    var _entries$sort$0$edge, _entries$sort$;
    var element = _ref.element, input = _ref.input, allowedEdges = _ref.allowedEdges;
    var client = {
      x: input.clientX,
      y: input.clientY
    };
    var rect = element.getBoundingClientRect();
    var entries2 = allowedEdges.map(function(edge) {
      return {
        edge,
        value: getDistanceToEdge[edge](rect, client)
      };
    });
    var addClosestEdge = (_entries$sort$0$edge = (_entries$sort$ = entries2.sort(function(a3, b2) {
      return a3.value - b2.value;
    })[0]) === null || _entries$sort$ === void 0 ? void 0 : _entries$sort$.edge) !== null && _entries$sort$0$edge !== void 0 ? _entries$sort$0$edge : null;
    return _objectSpread4(_objectSpread4({}, userData), {}, _defineProperty({}, uniqueKey, addClosestEdge));
  }
  function extractClosestEdge(userData) {
    var _ref2;
    return (_ref2 = userData[uniqueKey]) !== null && _ref2 !== void 0 ? _ref2 : null;
  }
  var getDistanceToEdge, uniqueKey;
  var init_closest_edge = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop-hitbox/dist/esm/closest-edge.js"() {
      init_defineProperty();
      getDistanceToEdge = {
        top: function top(rect, client) {
          return Math.abs(client.y - rect.top);
        },
        right: function right(rect, client) {
          return Math.abs(rect.right - client.x);
        },
        bottom: function bottom(rect, client) {
          return Math.abs(rect.bottom - client.y);
        },
        left: function left(rect, client) {
          return Math.abs(client.x - rect.left);
        }
      };
      uniqueKey = Symbol("closestEdge");
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/public-utils/reorder.js
  function reorder(_ref) {
    var list2 = _ref.list, startIndex = _ref.startIndex, finishIndex = _ref.finishIndex;
    if (startIndex === -1 || finishIndex === -1) {
      return list2;
    }
    var result = Array.from(list2);
    var _result$splice = result.splice(startIndex, 1), _result$splice2 = _slicedToArray(_result$splice, 1), removed = _result$splice2[0];
    result.splice(finishIndex, 0, removed);
    return result;
  }
  var init_reorder = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/public-utils/reorder.js"() {
      init_slicedToArray();
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/entry-point/reorder.js
  var init_reorder2 = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/entry-point/reorder.js"() {
      init_reorder();
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop-hitbox/dist/esm/get-reorder-destination-index.js
  function getReorderDestinationIndex(_ref) {
    var startIndex = _ref.startIndex, closestEdgeOfTarget = _ref.closestEdgeOfTarget, indexOfTarget = _ref.indexOfTarget, axis = _ref.axis;
    if (startIndex === -1 || indexOfTarget === -1) {
      return startIndex;
    }
    if (startIndex === indexOfTarget) {
      return startIndex;
    }
    if (closestEdgeOfTarget == null) {
      return indexOfTarget;
    }
    var isGoingAfter = axis === "vertical" && closestEdgeOfTarget === "bottom" || axis === "horizontal" && closestEdgeOfTarget === "right";
    var isMovingForward = startIndex < indexOfTarget;
    if (isMovingForward) {
      return isGoingAfter ? indexOfTarget : indexOfTarget - 1;
    }
    return isGoingAfter ? indexOfTarget + 1 : indexOfTarget;
  }
  var init_get_reorder_destination_index = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop-hitbox/dist/esm/get-reorder-destination-index.js"() {
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop-hitbox/dist/esm/reorder-with-edge.js
  function reorderWithEdge(_ref) {
    var list2 = _ref.list, startIndex = _ref.startIndex, closestEdgeOfTarget = _ref.closestEdgeOfTarget, indexOfTarget = _ref.indexOfTarget, axis = _ref.axis;
    return reorder({
      list: list2,
      startIndex,
      finishIndex: getReorderDestinationIndex({
        closestEdgeOfTarget,
        startIndex,
        indexOfTarget,
        axis
      })
    });
  }
  var init_reorder_with_edge = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop-hitbox/dist/esm/reorder-with-edge.js"() {
      init_reorder2();
      init_get_reorder_destination_index();
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/changing-window/is-entering-window.js
  function isEnteringWindow(_ref) {
    var dragEnter = _ref.dragEnter;
    var type = dragEnter.type, relatedTarget = dragEnter.relatedTarget;
    if (type !== "dragenter") {
      return false;
    }
    if (isSafari()) {
      return isEnteringWindowInSafari({
        dragEnter
      });
    }
    if (relatedTarget == null) {
      return true;
    }
    if (isFirefox()) {
      return isFromAnotherWindow(relatedTarget);
    }
    return relatedTarget instanceof HTMLIFrameElement;
  }
  var init_is_entering_window = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/changing-window/is-entering-window.js"() {
      init_is_firefox();
      init_is_safari();
      init_count_events_for_safari();
      init_is_from_another_window();
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/adapter/external-adapter.js
  function isAnAvailableType(_ref) {
    var type = _ref.type, value = _ref.value;
    if (type === elementAdapterNativeDataKey) {
      return false;
    }
    if (type === textMediaType && value === androidFallbackText) {
      return false;
    }
    return true;
  }
  function getAvailableTypes(transfer) {
    return Array.from(transfer.types).filter(function(type) {
      return isAnAvailableType({
        type,
        value: transfer.getData(type)
      });
    });
  }
  function getAvailableItems(dataTransfer) {
    return Array.from(dataTransfer.items).filter(function(item) {
      return item.kind === "file" || isAnAvailableType({
        type: item.type,
        value: dataTransfer.getData(item.type)
      });
    });
  }
  function dropTargetForExternal(args) {
    return adapter2.dropTarget(args);
  }
  function monitorForExternal(args) {
    return adapter2.monitor(args);
  }
  var import_bind_event_listener5, didDragStartLocally, adapter2;
  var init_external_adapter = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/adapter/external-adapter.js"() {
      init_toConsumableArray();
      import_bind_event_listener5 = __toESM(require_dist());
      init_make_adapter();
      init_android();
      init_is_entering_window();
      init_detect_broken_drag();
      init_text_media_type();
      init_element_adapter_native_data_key();
      didDragStartLocally = false;
      adapter2 = makeAdapter({
        typeKey: "external",
        // for external drags, we are generally making a copy of something that is being dragged
        defaultDropEffect: "copy",
        mount: function mount2(api) {
          return (0, import_bind_event_listener5.bind)(window, {
            type: "dragenter",
            listener: function listener(event) {
              if (didDragStartLocally) {
                return;
              }
              if (!event.dataTransfer) {
                if (true) {
                  console.warn("\n              It appears as though you have are not testing DragEvents correctly.\n\n              - If you are unit testing, ensure you have polyfilled DragEvent.\n              - If you are browser testing, ensure you are dispatching drag events correctly.\n\n              Please see our testing guides for more information:\n              https://atlassian.design/components/pragmatic-drag-and-drop/core-package/testing\n            ".replace(/ {2}/g, ""));
                }
                return;
              }
              if (!api.canStart(event)) {
                return;
              }
              if (!isEnteringWindow({
                dragEnter: event
              })) {
                return;
              }
              var types = getAvailableTypes(event.dataTransfer);
              if (!types.length) {
                return;
              }
              var locked = {
                types,
                items: [],
                getStringData: function getStringData() {
                  return null;
                }
              };
              api.start({
                event,
                dragType: {
                  type: "external",
                  startedFrom: "external",
                  payload: locked,
                  getDropPayload: function getDropPayload(event2) {
                    if (!event2.dataTransfer) {
                      return locked;
                    }
                    var items = getAvailableItems(event2.dataTransfer);
                    var nativeGetData = event2.dataTransfer.getData.bind(event2.dataTransfer);
                    return {
                      types,
                      items,
                      // return `null` if there is no result, otherwise string
                      getStringData: function getStringData(mediaType) {
                        if (!types.includes(mediaType)) {
                          return null;
                        }
                        var value = nativeGetData(mediaType);
                        if (!isAnAvailableType({
                          type: mediaType,
                          value
                        })) {
                          return null;
                        }
                        return value;
                      }
                    };
                  }
                }
              });
            }
          });
        }
      });
      (function startup() {
        if (typeof window === "undefined") {
          return;
        }
        adapter2.registerUsage();
        var idle = {
          type: "idle"
        };
        var state = idle;
        function clear() {
          if (state.type !== "dragging") {
            return;
          }
          didDragStartLocally = false;
          state.cleanup();
          state = idle;
        }
        function bindEndEvents() {
          return (0, import_bind_event_listener5.bindAll)(
            window,
            [{
              type: "dragend",
              listener: clear
            }].concat(_toConsumableArray(getBindingsForBrokenDrags({
              onDragEnd: clear
            }))),
            // we want to make sure we get all the events,
            // and this helps avoid not seeing events when folks stop
            // them later on the event path
            {
              capture: true
            }
          );
        }
        (0, import_bind_event_listener5.bind)(window, {
          type: "dragstart",
          listener: function listener() {
            if (state.type !== "idle") {
              return;
            }
            didDragStartLocally = true;
            state = {
              type: "dragging",
              cleanup: bindEndEvents()
            };
          },
          // binding in the capture phase so these listeners are called
          // before our listeners in the adapters `mount` function
          options: {
            capture: true
          }
        });
      })();
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/entry-point/external/adapter.js
  var init_adapter2 = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/entry-point/external/adapter.js"() {
      init_external_adapter();
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/entry-point/combine.js
  var init_combine2 = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/entry-point/combine.js"() {
      init_combine();
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/media-types/html-media-type.js
  var HTMLMediaType;
  var init_html_media_type = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/media-types/html-media-type.js"() {
      HTMLMediaType = "text/html";
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/public-utils/external/html.js
  function getHTML(_ref2) {
    var source = _ref2.source;
    return source.getStringData(HTMLMediaType);
  }
  var init_html = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/public-utils/external/html.js"() {
      init_html_media_type();
    }
  });

  // ../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/entry-point/external/html.js
  var init_html2 = __esm({
    "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/entry-point/external/html.js"() {
      init_html();
    }
  });

  // pages/new-tab/app/favorites/constants.js
  var DDG_MIME_TYPE, DDG_FALLBACK_ICON, DDG_DEFAULT_ICON_SIZE;
  var init_constants = __esm({
    "pages/new-tab/app/favorites/constants.js"() {
      "use strict";
      DDG_MIME_TYPE = "application/vnd.duckduckgo.bookmark-by-id";
      DDG_FALLBACK_ICON = "./company-icons/other.svg";
      DDG_DEFAULT_ICON_SIZE = 64;
    }
  });

  // pages/new-tab/app/favorites/components/PragmaticDND.js
  function PragmaticDND({ children, items, itemsDidReOrder }) {
    const [instanceId] = h2(getInstanceId);
    useGridState(items, itemsDidReOrder, instanceId);
    return /* @__PURE__ */ _(InstanceIdContext.Provider, { value: instanceId }, children);
  }
  function useGridState(favorites2, itemsDidReOrder, instanceId) {
    y2(() => {
      return combine(
        monitorForExternal({
          onDrop(payload) {
            const data = getHTML(payload);
            if (!data) return console.warn("missing text/html payload");
            const fragment = document.createRange().createContextualFragment(data);
            const node = fragment.firstElementChild;
            if (!node) return console.warn("missing first element");
            if (node.getAttribute("name") !== DDG_MIME_TYPE) return console.warn(`attribute name was not ${DDG_MIME_TYPE}`);
            const id = node.getAttribute("content");
            if (!id) return console.warn("id missing from `content` attribute");
            const location2 = payload.location;
            const target2 = location2.current.dropTargets[0];
            if (!target2 || !target2.data || typeof target2.data.url !== "string") {
              return console.warn("missing data from target");
            }
            const closestEdgeOfTarget = extractClosestEdge(target2.data);
            const destinationSrc = target2.data.url;
            let indexOfTarget = favorites2.findIndex((item) => item.url === destinationSrc);
            if (indexOfTarget === -1 && destinationSrc.includes("PLACEHOLDER-URL")) {
              indexOfTarget = favorites2.length;
            }
            const targetIndex = getReorderDestinationIndex({
              closestEdgeOfTarget,
              startIndex: favorites2.length,
              indexOfTarget,
              axis: "horizontal"
            });
            itemsDidReOrder(favorites2, id, targetIndex);
          }
        }),
        monitorForElements({
          canMonitor({ source }) {
            return source.data.instanceId === instanceId;
          },
          onDrop({ source, location: location2 }) {
            const target2 = location2.current.dropTargets[0];
            if (!target2) {
              return;
            }
            const destinationSrc = target2.data.url;
            const startSrc = source.data.url;
            const startId = source.data.id;
            if (typeof startId !== "string") {
              return console.warn("could not access the id");
            }
            if (typeof destinationSrc !== "string") {
              return console.warn("could not access the destinationSrc");
            }
            if (typeof startSrc !== "string") {
              return console.warn("could not access the startSrc");
            }
            const startIndex = favorites2.findIndex((item) => item.url === startSrc);
            let indexOfTarget = favorites2.findIndex((item) => item.url === destinationSrc);
            if (indexOfTarget === -1 && destinationSrc.includes("PLACEHOLDER-URL")) {
              indexOfTarget = favorites2.length;
            }
            const closestEdgeOfTarget = extractClosestEdge(target2.data);
            const targetIndex = getReorderDestinationIndex({
              closestEdgeOfTarget,
              startIndex,
              indexOfTarget,
              axis: "horizontal"
            });
            const reorderedList = reorderWithEdge({
              list: favorites2,
              startIndex,
              indexOfTarget,
              closestEdgeOfTarget,
              axis: "horizontal"
            });
            pn(() => {
              try {
                itemsDidReOrder(reorderedList, startId, targetIndex);
              } catch (e3) {
                console.error("did catch", e3);
              }
            });
            const htmlElem = source.element;
            const pulseAnimation = htmlElem.animate(
              [{ transform: "scale(1)" }, { transform: "scale(1.1)" }, { transform: "scale(1)" }],
              {
                duration: 500,
                // duration in milliseconds
                iterations: 1,
                // run the animation once
                easing: "ease-in-out"
                // easing function
              }
            );
            pulseAnimation.onfinish = () => {
            };
          }
        })
      );
    }, [instanceId, favorites2]);
  }
  function useItemState(url3, id) {
    const instanceId = x2(InstanceIdContext);
    const ref = A2(null);
    const [state, setState] = h2(
      /** @type {DNDState} */
      { type: "idle" }
    );
    y2(() => {
      const el = ref.current;
      if (!el) throw new Error("unreachable");
      return combine(
        draggable({
          element: el,
          getInitialData: () => ({ type: "grid-item", url: url3, id, instanceId }),
          getInitialDataForExternal: () => ({
            "text/plain": url3,
            [DDG_MIME_TYPE]: id
          }),
          onDragStart: () => setState({ type: "dragging" }),
          onDrop: () => setState({ type: "idle" })
        }),
        dropTargetForExternal({
          element: el,
          canDrop: ({ source }) => {
            return source.types.some((type) => type === "text/html");
          },
          getData: ({ input }) => {
            return attachClosestEdge(
              { url: url3, id },
              {
                element: el,
                input,
                allowedEdges: ["left", "right"]
              }
            );
          },
          onDrop: () => {
            setState({ type: "idle" });
          },
          onDragLeave: () => setState({ type: "idle" }),
          onDrag: ({ self }) => {
            const closestEdge = extractClosestEdge(self.data);
            setState((current) => {
              if (current.type === "is-dragging-over" && current.closestEdge === closestEdge) {
                return current;
              }
              return { type: "is-dragging-over", closestEdge };
            });
          }
        }),
        dropTargetForElements({
          element: el,
          getData: ({ input }) => {
            return attachClosestEdge(
              { url: url3, id },
              {
                element: el,
                input,
                allowedEdges: ["left", "right"]
              }
            );
          },
          getIsSticky: () => true,
          canDrop: ({ source }) => {
            return source.data.instanceId === instanceId && source.data.type === "grid-item" && source.data.id !== id;
          },
          onDragEnter: ({ self }) => {
            const closestEdge = extractClosestEdge(self.data);
            setState({ type: "is-dragging-over", closestEdge });
          },
          onDrag({ self }) {
            const closestEdge = extractClosestEdge(self.data);
            setState((current) => {
              if (current.type === "is-dragging-over" && current.closestEdge === closestEdge) {
                return current;
              }
              return { type: "is-dragging-over", closestEdge };
            });
          },
          onDragLeave: () => setState({ type: "idle" }),
          onDrop: () => setState({ type: "idle" })
        })
      );
    }, [instanceId, url3, id]);
    return { ref, state };
  }
  function getInstanceId() {
    return Symbol("instance-id");
  }
  var InstanceIdContext;
  var init_PragmaticDND = __esm({
    "pages/new-tab/app/favorites/components/PragmaticDND.js"() {
      "use strict";
      init_preact_module();
      init_hooks_module();
      init_compat_module();
      init_adapter();
      init_closest_edge();
      init_reorder_with_edge();
      init_get_reorder_destination_index();
      init_adapter2();
      init_combine2();
      init_html2();
      init_constants();
      InstanceIdContext = G(getInstanceId());
    }
  });

  // pages/new-tab/app/favorites/components/Favorites.module.css
  var Favorites_default;
  var init_Favorites = __esm({
    "pages/new-tab/app/favorites/components/Favorites.module.css"() {
      Favorites_default = {
        root: "Favorites_root",
        showhide: "Favorites_showhide",
        showhideVisible: "Favorites_showhideVisible",
        hr: "Favorites_hr",
        grid: "Favorites_grid"
      };
    }
  });

  // pages/new-tab/app/favorites/components/Tile.module.css
  var Tile_default;
  var init_Tile = __esm({
    "pages/new-tab/app/favorites/components/Tile.module.css"() {
      Tile_default = {
        item: "Tile_item",
        icon: "Tile_icon",
        draggable: "Tile_draggable",
        favicon: "Tile_favicon",
        text: "Tile_text",
        preview: "Tile_preview",
        placeholder: "Tile_placeholder",
        plus: "Tile_plus",
        dropper: "Tile_dropper"
      };
    }
  });

  // pages/new-tab/app/favorites/color.js
  function urlToColor(url3) {
    const host = getHost(url3);
    const index = Math.abs(getDJBHash(host) % EMPTY_FAVICON_TEXT_BACKGROUND_COLOR_BRUSHES.length);
    return EMPTY_FAVICON_TEXT_BACKGROUND_COLOR_BRUSHES[index];
  }
  function getDJBHash(str) {
    let hash = 5381;
    for (let i4 = 0; i4 < str.length; i4++) {
      hash = (hash << 5) + hash + str.charCodeAt(i4);
    }
    return hash;
  }
  function getHost(url3) {
    try {
      const urlObj = new URL(url3);
      return urlObj.hostname.replace(/^www\./, "");
    } catch (e3) {
      return "?";
    }
  }
  var EMPTY_FAVICON_TEXT_BACKGROUND_COLOR_BRUSHES;
  var init_color = __esm({
    "pages/new-tab/app/favorites/color.js"() {
      "use strict";
      EMPTY_FAVICON_TEXT_BACKGROUND_COLOR_BRUSHES = [
        "#94B3AF",
        "#727998",
        "#645468",
        "#4D5F7F",
        "#855DB6",
        "#5E5ADB",
        "#678FFF",
        "#6BB4EF",
        "#4A9BAE",
        "#66C4C6",
        "#55D388",
        "#99DB7A",
        "#ECCC7B",
        "#E7A538",
        "#DD6B4C",
        "#D65D62"
      ];
    }
  });

  // pages/new-tab/app/favorites/components/Tile.js
  function Tile({ url: url3, faviconSrc, faviconMax, index, title, id }) {
    const { state, ref } = useItemState(url3, id);
    const [visible, setVisible] = h2(true);
    y2(() => {
      if (!ref) return;
      if (state.type !== "idle") return;
      let elem = ref.current;
      if (!elem) return;
      let o3 = new IntersectionObserver(
        (entries2) => {
          const last = entries2[entries2.length - 1];
          requestAnimationFrame(() => {
            setVisible(last.isIntersecting);
          });
        },
        { threshold: [0] }
      );
      o3.observe(elem);
      return () => {
        if (elem) {
          o3?.unobserve(elem);
        }
        o3 = null;
        elem = null;
      };
    }, [id, state.type]);
    return /* @__PURE__ */ _(
      "a",
      {
        class: Tile_default.item,
        tabindex: 0,
        role: "button",
        href: url3,
        "data-id": id,
        "data-index": index,
        "data-edge": "closestEdge" in state && state.closestEdge,
        ref
      },
      /* @__PURE__ */ _("div", { class: (0, import_classnames2.default)(Tile_default.icon, Tile_default.draggable) }, visible && /* @__PURE__ */ _(
        ImageLoader,
        {
          faviconSrc: faviconSrc || "n/a",
          faviconMax: faviconMax || DDG_DEFAULT_ICON_SIZE,
          title,
          url: url3
        }
      )),
      /* @__PURE__ */ _("div", { class: Tile_default.text }, title),
      state.type === "is-dragging-over" && state.closestEdge ? /* @__PURE__ */ _("div", { class: Tile_default.dropper, "data-edge": state.closestEdge }) : null
    );
  }
  function ImageLoader({ faviconSrc, faviconMax, title, url: url3 }) {
    const imgError = (e3) => {
      if (!e3.target) return;
      if (!(e3.target instanceof HTMLImageElement)) return;
      if (e3.target.src === e3.target.dataset.fallback) return console.warn("refusing to load same fallback");
      if (e3.target.dataset.didTryFallback) {
        e3.target.dataset.errored = String(true);
        return;
      }
      e3.target.dataset.didTryFallback = String(true);
      e3.target.src = e3.target.dataset.fallback;
    };
    const imgLoaded = (e3) => {
      if (!e3.target) return;
      if (!(e3.target instanceof HTMLImageElement)) return;
      e3.target.dataset.loaded = String(true);
      if (e3.target.src.endsWith("other.svg")) {
        return;
      }
      if (e3.target.dataset.didTryFallback) {
        e3.target.style.background = urlToColor(url3);
      }
    };
    const size = Math.min(faviconMax, DDG_DEFAULT_ICON_SIZE);
    const src = faviconSrc + "?preferredSize=" + size;
    return /* @__PURE__ */ _(
      "img",
      {
        src,
        loading: "lazy",
        className: Tile_default.favicon,
        alt: `favicon for ${title}`,
        onLoad: imgLoaded,
        onError: imgError,
        "data-src": faviconSrc,
        "data-fallback": fallbackSrcFor(url3) || DDG_FALLBACK_ICON,
        style: size !== DDG_DEFAULT_ICON_SIZE ? { width: size, height: size } : void 0
      }
    );
  }
  function fallbackSrcFor(url3) {
    if (!url3) return null;
    try {
      const parsed = new URL(url3);
      const char1 = parsed.hostname.match(/[a-z]/i)?.[0];
      if (char1) {
        return `./letters/${char1}.svg`;
      }
    } catch (e3) {
    }
    return null;
  }
  function Placeholder() {
    const id = g2();
    const { state, ref } = useItemState(`PLACEHOLDER-URL-${id}`, `PLACEHOLDER-ID-${id}`);
    return /* @__PURE__ */ _("div", { className: Tile_default.item, ref, "data-edge": "closestEdge" in state && state.closestEdge }, /* @__PURE__ */ _("div", { className: (0, import_classnames2.default)(Tile_default.icon, Tile_default.placeholder) }), state.type === "is-dragging-over" && state.closestEdge ? /* @__PURE__ */ _("div", { class: Tile_default.dropper, "data-edge": state.closestEdge }) : null);
  }
  function PlusIcon({ onClick }) {
    const id = g2();
    const { state, ref } = useItemState(`PLACEHOLDER-URL-${id}`, `PLACEHOLDER-ID-${id}`);
    return /* @__PURE__ */ _("div", { class: Tile_default.item, ref, "data-edge": "closestEdge" in state && state.closestEdge }, /* @__PURE__ */ _("button", { class: (0, import_classnames2.default)(Tile_default.icon, Tile_default.placeholder, Tile_default.plus), "aria-labelledby": id, onClick }, /* @__PURE__ */ _("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ _(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M8.25 0.5C8.66421 0.5 9 0.835786 9 1.25V7H14.75C15.1642 7 15.5 7.33579 15.5 7.75C15.5 8.16421 15.1642 8.5 14.75 8.5H9V14.25C9 14.6642 8.66421 15 8.25 15C7.83579 15 7.5 14.6642 7.5 14.25V8.5H1.75C1.33579 8.5 1 8.16421 1 7.75C1 7.33579 1.33579 7 1.75 7H7.5V1.25C7.5 0.835786 7.83579 0.5 8.25 0.5Z",
        fill: "currentColor"
      }
    ))), /* @__PURE__ */ _("div", { class: Tile_default.text, id }, "Add Favorite"), state.type === "is-dragging-over" && state.closestEdge ? /* @__PURE__ */ _("div", { class: Tile_default.dropper, "data-edge": state.closestEdge }) : null);
  }
  var import_classnames2, TileMemo, PlusIconMemo;
  var init_Tile2 = __esm({
    "pages/new-tab/app/favorites/components/Tile.js"() {
      "use strict";
      init_preact_module();
      import_classnames2 = __toESM(require_classnames(), 1);
      init_hooks_module();
      init_compat_module();
      init_Tile();
      init_color();
      init_constants();
      init_PragmaticDND();
      TileMemo = C3(Tile);
      PlusIconMemo = C3(PlusIcon);
    }
  });

  // pages/new-tab/app/components/ShowHide.module.css
  var ShowHide_default;
  var init_ShowHide = __esm({
    "pages/new-tab/app/components/ShowHide.module.css"() {
      ShowHide_default = {
        button: "ShowHide_button"
      };
    }
  });

  // pages/new-tab/app/components/ShowHideButton.jsx
  function ShowHideButton({ text, onClick, buttonAttrs = {} }) {
    return /* @__PURE__ */ _("button", { ...buttonAttrs, class: ShowHide_default.button, "aria-label": text, onClick }, /* @__PURE__ */ _(ChevronButton, null));
  }
  var init_ShowHideButton = __esm({
    "pages/new-tab/app/components/ShowHideButton.jsx"() {
      "use strict";
      init_ShowHide();
      init_Icons2();
      init_preact_module();
    }
  });

  // pages/new-tab/app/favorites/components/Favorites.js
  function Favorites({ gridRef, favorites: favorites2, expansion, toggle, openContextMenu, openFavorite, add: add2 }) {
    const platformName = usePlatformName();
    const { t: t3 } = useTypedTranslation();
    const ROW_CAPACITY = 6;
    const WIDGET_ID = g2();
    const TOGGLE_ID = g2();
    const ITEM_PREFIX = g2();
    const placeholders = calculatePlaceholders(favorites2.length, ROW_CAPACITY);
    const hiddenCount = expansion === "collapsed" ? favorites2.length - ROW_CAPACITY : 0;
    const items = T2(() => {
      return favorites2.map((item, index) => {
        return /* @__PURE__ */ _(
          TileMemo,
          {
            url: item.url,
            faviconSrc: item.favicon?.src,
            faviconMax: item.favicon?.maxAvailableSize,
            title: item.title,
            key: item.id + item.favicon?.src + item.favicon?.maxAvailableSize,
            id: item.id,
            index
          }
        );
      }).concat(
        Array.from({ length: placeholders }).map((_3, index) => {
          if (index === 0) {
            return /* @__PURE__ */ _(PlusIconMemo, { key: "placeholder-plus", onClick: add2 });
          }
          return /* @__PURE__ */ _(Placeholder, { key: `placeholder-${index}` });
        })
      );
    }, [favorites2, placeholders, ITEM_PREFIX, add2]);
    function onContextMenu(event) {
      let target2 = (
        /** @type {HTMLElement|null} */
        event.target
      );
      while (target2 && target2 !== event.currentTarget) {
        if (typeof target2.dataset.id === "string") {
          event.preventDefault();
          event.stopImmediatePropagation();
          return openContextMenu(target2.dataset.id);
        } else {
          target2 = target2.parentElement;
        }
      }
    }
    function onClick(event) {
      let target2 = (
        /** @type {HTMLElement|null} */
        event.target
      );
      while (target2 && target2 !== event.currentTarget) {
        if (typeof target2.dataset.id === "string") {
          event.preventDefault();
          event.stopImmediatePropagation();
          const isControlClick = platformName === "macos" ? event.metaKey : event.ctrlKey;
          if (isControlClick) {
            return openFavorite(target2.dataset.id, "new-tab");
          } else if (event.shiftKey) {
            return openFavorite(target2.dataset.id, "new-window");
          }
          return openFavorite(target2.dataset.id, "same-tab");
        } else {
          target2 = target2.parentElement;
        }
      }
    }
    const canToggleExpansion = items.length > ROW_CAPACITY;
    return /* @__PURE__ */ _("div", { class: Favorites_default.root, "data-testid": "FavoritesConfigured" }, /* @__PURE__ */ _("div", { class: Favorites_default.grid, id: WIDGET_ID, ref: gridRef, onContextMenu, onClick }, items.slice(0, expansion === "expanded" ? void 0 : ROW_CAPACITY)), /* @__PURE__ */ _(
      "div",
      {
        className: (0, import_classnames3.default)({
          [Favorites_default.showhide]: true,
          [Favorites_default.showhideVisible]: canToggleExpansion
        })
      },
      canToggleExpansion && /* @__PURE__ */ _(
        ShowHideButton,
        {
          buttonAttrs: {
            "aria-expanded": expansion === "expanded",
            "aria-pressed": expansion === "expanded",
            "aria-controls": WIDGET_ID,
            id: TOGGLE_ID
          },
          text: expansion === "expanded" ? t3("favorites_show_less") : t3("favorites_show_more", { count: String(hiddenCount) }),
          onClick: toggle
        }
      )
    ));
  }
  function calculatePlaceholders(totalItems, itemsPerRow) {
    if (totalItems === 0) return itemsPerRow;
    if (totalItems === itemsPerRow) return 1;
    const itemsInLastRow = totalItems % itemsPerRow;
    const placeholders = itemsInLastRow > 0 ? itemsPerRow - itemsInLastRow : 1;
    return placeholders;
  }
  var import_classnames3, FavoritesMemo;
  var init_Favorites2 = __esm({
    "pages/new-tab/app/favorites/components/Favorites.js"() {
      "use strict";
      init_preact_module();
      init_hooks_module();
      init_compat_module();
      import_classnames3 = __toESM(require_classnames(), 1);
      init_Favorites();
      init_Tile2();
      init_ShowHideButton();
      init_types();
      init_settings_provider();
      FavoritesMemo = C3(Favorites);
    }
  });

  // pages/new-tab/app/favorites/components/FavoritesCustomized.js
  function FavoritesConsumer() {
    const { state, toggle, favoritesDidReOrder, openContextMenu, openFavorite, add: add2 } = x2(FavoritesContext);
    if (state.status === "ready") {
      return /* @__PURE__ */ _(PragmaticDND, { items: state.data.favorites, itemsDidReOrder: favoritesDidReOrder }, /* @__PURE__ */ _(
        FavoritesMemo,
        {
          favorites: state.data.favorites,
          expansion: state.config.expansion,
          openContextMenu,
          openFavorite,
          add: add2,
          toggle
        }
      ));
    }
    return null;
  }
  function FavoritesCustomized() {
    const { t: t3 } = useTypedTranslation();
    const { id, visibility, toggle, index } = useVisibility();
    const title = t3("favorites_menu_title");
    useCustomizer({ title, id, icon: "star", toggle, visibility, index });
    if (visibility === "hidden") {
      return null;
    }
    return /* @__PURE__ */ _(FavoritesProvider, null, /* @__PURE__ */ _(FavoritesConsumer, null));
  }
  var init_FavoritesCustomized = __esm({
    "pages/new-tab/app/favorites/components/FavoritesCustomized.js"() {
      "use strict";
      init_preact_module();
      init_hooks_module();
      init_types();
      init_widget_config_provider();
      init_Customizer2();
      init_FavoritesProvider();
      init_PragmaticDND();
      init_Favorites2();
    }
  });

  // pages/new-tab/app/entry-points/favorites.js
  var favorites_exports = {};
  __export(favorites_exports, {
    factory: () => factory
  });
  function factory() {
    return /* @__PURE__ */ _(Centered, null, /* @__PURE__ */ _(FavoritesCustomized, null));
  }
  var init_favorites = __esm({
    "pages/new-tab/app/entry-points/favorites.js"() {
      "use strict";
      init_preact_module();
      init_Layout();
      init_FavoritesCustomized();
    }
  });

  // pages/new-tab/app/next-steps/next-steps.service.js
  var NextStepsService;
  var init_next_steps_service = __esm({
    "pages/new-tab/app/next-steps/next-steps.service.js"() {
      "use strict";
      init_service();
      NextStepsService = class {
        /**
         * @param {import("../../src/js/index.js").NewTabPage} ntp - The internal data feed, expected to have a `subscribe` method.
         * @internal
         */
        constructor(ntp) {
          this.ntp = ntp;
          this.dataService = new Service({
            initial: () => ntp.messaging.request("nextSteps_getData"),
            subscribe: (cb) => ntp.messaging.subscribe("nextSteps_onDataUpdate", cb)
          });
          this.configService = new Service({
            initial: () => ntp.messaging.request("nextSteps_getConfig"),
            subscribe: (cb) => ntp.messaging.subscribe("nextSteps_onConfigUpdate", cb),
            persist: (data) => ntp.messaging.notify("nextSteps_setConfig", data)
          });
        }
        /**
         * @returns {Promise<{data: NextStepsData; config: NextStepsConfig}>}
         * @internal
         */
        async getInitial() {
          const p1 = this.configService.fetchInitial();
          const p22 = this.dataService.fetchInitial();
          const [config, data] = await Promise.all([p1, p22]);
          return { config, data };
        }
        /**
         * @internal
         */
        destroy() {
          this.configService.destroy();
          this.dataService.destroy();
        }
        /**
         * @param {(evt: {data: NextStepsData, source: 'manual' | 'subscription'}) => void} cb
         * @internal
         */
        onData(cb) {
          return this.dataService.onData(cb);
        }
        /**
         * @param {(evt: {data: NextStepsConfig, source: 'manual' | 'subscription'}) => void} cb
         * @internal
         */
        onConfig(cb) {
          return this.configService.onData(cb);
        }
        /**
         * Update the in-memory data immediate and persist.
         * Any state changes will be broadcast to consumers synchronously
         * @internal
         */
        toggleExpansion() {
          this.configService.update((old) => {
            if (old.expansion === "expanded") {
              return { ...old, expansion: (
                /** @type {const} */
                "collapsed"
              ) };
            } else {
              return { ...old, expansion: (
                /** @type {const} */
                "expanded"
              ) };
            }
          });
        }
        /**
         * Dismiss a particular card
         * @param {string} id
         */
        dismiss(id) {
          this.ntp.messaging.notify("nextSteps_dismiss", { id });
        }
        /**
         * Perform a primary action on a card
         * @param {string} id
         */
        action(id) {
          this.ntp.messaging.notify("nextSteps_action", { id });
        }
      };
    }
  });

  // pages/new-tab/app/next-steps/NextStepsProvider.js
  function NextStepsProvider(props) {
    const initial = (
      /** @type {State} */
      {
        status: "idle",
        data: null,
        config: null
      }
    );
    const [state, dispatch] = p2(reducer, initial);
    const service = useService2();
    useInitialDataAndConfig({ dispatch, service });
    useDataSubscription({ dispatch, service });
    const { toggle } = useConfigSubscription({ dispatch, service });
    const action = q2(
      (id) => {
        service.current?.action(id);
      },
      [service]
    );
    const dismiss = q2(
      (id) => {
        service.current?.dismiss(id);
      },
      [service]
    );
    return /* @__PURE__ */ _(NextStepsContext.Provider, { value: { state, toggle, action, dismiss } }, /* @__PURE__ */ _(NextStepsDispatchContext.Provider, { value: dispatch }, props.children));
  }
  function useService2() {
    const service = A2(
      /** @type {NextStepsService|null} */
      null
    );
    const ntp = useMessaging();
    y2(() => {
      const stats2 = new NextStepsService(ntp);
      service.current = stats2;
      return () => {
        stats2.destroy();
      };
    }, [ntp]);
    return service;
  }
  var NextStepsContext, NextStepsDispatchContext;
  var init_NextStepsProvider = __esm({
    "pages/new-tab/app/next-steps/NextStepsProvider.js"() {
      "use strict";
      init_preact_module();
      init_hooks_module();
      init_types();
      init_next_steps_service();
      init_service_hooks();
      NextStepsContext = G({
        /** @type {State} */
        state: { status: "idle", data: null, config: null },
        /** @type {() => void} */
        toggle: () => {
          throw new Error("must implement");
        },
        /** @type {(id: string) => void} */
        dismiss: (_id) => {
          throw new Error("must implement");
        },
        /** @type {(id: string) => void} */
        action: (_id) => {
          throw new Error("must implement");
        }
      });
      NextStepsDispatchContext = G(
        /** @type {import("preact/hooks").Dispatch<Events>} */
        {}
      );
    }
  });

  // pages/new-tab/app/next-steps/components/NextSteps.module.css
  var NextSteps_default;
  var init_NextSteps = __esm({
    "pages/new-tab/app/next-steps/components/NextSteps.module.css"() {
      NextSteps_default = {
        card: "NextSteps_card",
        icon: "NextSteps_icon",
        title: "NextSteps_title",
        description: "NextSteps_description",
        btn: "NextSteps_btn",
        showhideVisible: "NextSteps_showhideVisible",
        dismissBtn: "NextSteps_dismissBtn",
        cardGroup: "NextSteps_cardGroup",
        cardGrid: "NextSteps_cardGrid",
        bubble: "NextSteps_bubble",
        showhide: "NextSteps_showhide",
        nextStepsCard: "NextSteps_nextStepsCard"
      };
    }
  });

  // pages/new-tab/app/components/DismissButton.module.css
  var DismissButton_default;
  var init_DismissButton = __esm({
    "pages/new-tab/app/components/DismissButton.module.css"() {
      DismissButton_default = {
        btn: "DismissButton_btn"
      };
    }
  });

  // pages/new-tab/app/components/DismissButton.jsx
  function DismissButton({ className, onClick }) {
    const { t: t3 } = useTypedTranslation();
    return /* @__PURE__ */ _("button", { class: (0, import_classnames4.default)(DismissButton_default.btn, className), onClick, "aria-label": t3("ntp_dismiss"), "data-testid": "dismissBtn" }, /* @__PURE__ */ _(Cross, null));
  }
  var import_classnames4;
  var init_DismissButton2 = __esm({
    "pages/new-tab/app/components/DismissButton.jsx"() {
      "use strict";
      init_preact_module();
      import_classnames4 = __toESM(require_classnames(), 1);
      init_Icons2();
      init_types();
      init_DismissButton();
    }
  });

  // pages/new-tab/app/next-steps/nextsteps.data.js
  var variants, otherText;
  var init_nextsteps_data = __esm({
    "pages/new-tab/app/next-steps/nextsteps.data.js"() {
      "use strict";
      variants = {
        /** @param {(translationId: string) => string} t */
        bringStuff: (t3) => ({
          id: "bringStuff",
          icon: "Bring-Stuff",
          title: t3("nextSteps_bringStuff_title"),
          summary: t3("nextSteps_bringStuff_summary"),
          actionText: t3("nextSteps_bringStuff_actionText")
        }),
        /** @param {(translationId: string) => string} t */
        defaultApp: (t3) => ({
          id: "defaultApp",
          icon: "Default-App",
          title: t3("nextSteps_defaultApp_title"),
          summary: t3("nextSteps_defaultApp_summary"),
          actionText: t3("nextSteps_defaultApp_actionText")
        }),
        /** @param {(translationId: string) => string} t */
        blockCookies: (t3) => ({
          id: "blockCookies",
          icon: "Cookie-Pops",
          title: t3("nextSteps_blockCookies_title"),
          summary: t3("nextSteps_blockCookies_summary"),
          actionText: t3("nextSteps_blockCookies_actionText")
        }),
        /** @param {(translationId: string) => string} t */
        emailProtection: (t3) => ({
          id: "emailProtection",
          icon: "Email-Protection",
          title: t3("nextSteps_emailProtection_title"),
          summary: t3("nextSteps_emailProtection_summary"),
          actionText: t3("nextSteps_emailProtection_actionText")
        }),
        /** @param {(translationId: string) => string} t */
        duckplayer: (t3) => ({
          id: "duckplayer",
          icon: "Tube-Clean",
          title: t3("nextSteps_duckPlayer_title"),
          summary: t3("nextSteps_duckPlayer_summary"),
          actionText: t3("nextSteps_duckPlayer_actionText")
        }),
        /** @param {(translationId: string) => string} t */
        addAppDockMac: (t3) => ({
          id: "addAppToDockMac",
          icon: "Dock-Add-Mac",
          title: t3("nextSteps_addAppDockMac_title"),
          summary: t3("nextSteps_addAppDockMac_summary"),
          actionText: t3("nextSteps_addAppDockMac_actionText")
        }),
        /** @param {(translationId: string) => string} t */
        pinAppToTaskbarWindows: (t3) => ({
          id: "pinAppToTaskbarWindows",
          icon: "Dock-Add-Windows",
          title: t3("nextSteps_pinAppToTaskbarWindows_title"),
          summary: t3("nextSteps_pinAppToTaskbarWindows_summary"),
          actionText: t3("nextSteps_pinAppToTaskbarWindows_actionText")
        })
      };
      otherText = {
        /** @param {(translationId: string) => string} t */
        showMore: (t3) => t3("ntp_show_more"),
        /** @param {(translationId: string) => string} t */
        showLess: (t3) => t3("ntp_show_less"),
        /** @param {(translationId: string) => string} t */
        nextSteps_sectionTitle: (t3) => t3("nextSteps_sectionTitle")
      };
    }
  });

  // pages/new-tab/app/next-steps/components/NextStepsCard.js
  function NextStepsCard({ type, dismiss, action }) {
    const { t: t3 } = useTypedTranslation();
    const message = variants[type]?.(t3);
    return /* @__PURE__ */ _("div", { class: NextSteps_default.card }, /* @__PURE__ */ _("img", { src: `./icons/${message.icon}-128.svg`, alt: "", class: NextSteps_default.icon }), /* @__PURE__ */ _("p", { class: NextSteps_default.title }, message.title), /* @__PURE__ */ _("p", { class: NextSteps_default.description }, message.summary), /* @__PURE__ */ _("button", { class: NextSteps_default.btn, onClick: () => action(message.id) }, message.actionText), /* @__PURE__ */ _(DismissButton, { className: NextSteps_default.dismissBtn, onClick: () => dismiss(message.id) }));
  }
  var init_NextStepsCard = __esm({
    "pages/new-tab/app/next-steps/components/NextStepsCard.js"() {
      "use strict";
      init_preact_module();
      init_NextSteps();
      init_DismissButton2();
      init_nextsteps_data();
      init_types();
    }
  });

  // pages/new-tab/app/next-steps/components/ShowHide.module.css
  var ShowHide_default2;
  var init_ShowHide2 = __esm({
    "pages/new-tab/app/next-steps/components/ShowHide.module.css"() {
      ShowHide_default2 = {
        button: "ShowHide_button2",
        icon: "ShowHide_icon"
      };
    }
  });

  // pages/new-tab/app/next-steps/components/ShowHideButtonWithText.jsx
  function ShowHideButtonWithText({ text, onClick, buttonAttrs = {} }) {
    return /* @__PURE__ */ _("button", { ...buttonAttrs, class: ShowHide_default2.button, "aria-label": text, onClick }, /* @__PURE__ */ _("span", null), text, /* @__PURE__ */ _(Chevron, { className: ShowHide_default2.icon }), /* @__PURE__ */ _("span", null));
  }
  var init_ShowHideButtonWithText = __esm({
    "pages/new-tab/app/next-steps/components/ShowHideButtonWithText.jsx"() {
      "use strict";
      init_ShowHide2();
      init_Icons2();
      init_preact_module();
    }
  });

  // pages/new-tab/app/next-steps/components/NextStepsGroup.js
  function NextStepsCardGroup({ types, expansion, toggle, action, dismiss }) {
    const { t: t3 } = useTypedTranslation();
    const WIDGET_ID = g2();
    const TOGGLE_ID = g2();
    const shownCards = expansion === "expanded" ? types : types.slice(0, 2);
    return /* @__PURE__ */ _("div", { class: (0, import_classnames5.default)(NextSteps_default.cardGroup), id: WIDGET_ID }, /* @__PURE__ */ _(NextStepsBubbleHeader, null), /* @__PURE__ */ _("div", { class: NextSteps_default.cardGrid }, shownCards.map((type) => /* @__PURE__ */ _(NextStepsCard, { key: type, type, dismiss, action }))), /* @__PURE__ */ _(
      "div",
      {
        className: (0, import_classnames5.default)({
          [NextSteps_default.showhide]: true,
          [NextSteps_default.showhideVisible]: types.length > 2
        })
      },
      types.length > 2 && /* @__PURE__ */ _(
        ShowHideButtonWithText,
        {
          buttonAttrs: {
            "aria-expanded": expansion === "expanded",
            "aria-pressed": expansion === "expanded",
            "aria-controls": WIDGET_ID,
            id: TOGGLE_ID
          },
          text: expansion === "expanded" ? otherText.showLess(t3) : otherText.showMore(t3),
          onClick: toggle
        }
      )
    ));
  }
  function NextStepsBubbleHeader() {
    const { t: t3 } = useTypedTranslation();
    const text = otherText.nextSteps_sectionTitle(t3);
    return /* @__PURE__ */ _("div", { class: NextSteps_default.bubble }, /* @__PURE__ */ _("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "26", viewBox: "0 0 12 26", fill: "none" }, /* @__PURE__ */ _(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M12 0C5.37258 0 0 5.37258 0 12V25.3388C2.56367 22.0873 6.53807 20 11 20H12V0Z",
        fill: "#3969EF"
      }
    )), /* @__PURE__ */ _("div", null, /* @__PURE__ */ _("p", null, text)), /* @__PURE__ */ _("svg", { xmlns: "http://www.w3.org/2000/svg", width: "10", height: "20", viewBox: "0 0 10 20", fill: "none" }, /* @__PURE__ */ _(
      "path",
      {
        d: "M3.8147e-06 0C1.31322 1.566e-08 2.61358 0.258658 3.82684 0.761205C5.04009 1.26375 6.14249 2.00035 7.07107 2.92893C7.99966 3.85752 8.73625 4.95991 9.2388 6.17317C9.74135 7.38642 10 8.68678 10 10C10 11.3132 9.74135 12.6136 9.2388 13.8268C8.73625 15.0401 7.99966 16.1425 7.07107 17.0711C6.14248 17.9997 5.04009 18.7362 3.82684 19.2388C2.61358 19.7413 1.31322 20 0 20L3.8147e-06 10V0Z",
        fill: "#3969EF"
      }
    )));
  }
  var import_classnames5;
  var init_NextStepsGroup = __esm({
    "pages/new-tab/app/next-steps/components/NextStepsGroup.js"() {
      "use strict";
      init_preact_module();
      import_classnames5 = __toESM(require_classnames(), 1);
      init_NextSteps();
      init_types();
      init_NextStepsCard();
      init_nextsteps_data();
      init_ShowHideButtonWithText();
      init_hooks_module();
    }
  });

  // pages/new-tab/app/next-steps/NextSteps.js
  function NextStepsCustomized() {
    return /* @__PURE__ */ _(NextStepsProvider, null, /* @__PURE__ */ _(NextStepsConsumer, null));
  }
  function NextStepsConsumer() {
    const { state, toggle } = x2(NextStepsContext);
    if (state.status === "ready" && state.data.content) {
      const ids = state.data.content.map((x4) => x4.id);
      const { action, dismiss } = x2(NextStepsContext);
      return /* @__PURE__ */ _(NextStepsCardGroup, { types: ids, toggle, expansion: state.config.expansion, action, dismiss });
    }
    return null;
  }
  var init_NextSteps2 = __esm({
    "pages/new-tab/app/next-steps/NextSteps.js"() {
      "use strict";
      init_preact_module();
      init_NextStepsProvider();
      init_hooks_module();
      init_NextStepsGroup();
    }
  });

  // pages/new-tab/app/entry-points/nextSteps.js
  var nextSteps_exports = {};
  __export(nextSteps_exports, {
    factory: () => factory2
  });
  function factory2() {
    return /* @__PURE__ */ _(Centered, null, /* @__PURE__ */ _(NextStepsCustomized, null));
  }
  var init_nextSteps = __esm({
    "pages/new-tab/app/entry-points/nextSteps.js"() {
      "use strict";
      init_preact_module();
      init_Layout();
      init_NextSteps2();
    }
  });

  // pages/new-tab/app/privacy-stats/PrivacyStats.module.css
  var PrivacyStats_default;
  var init_PrivacyStats = __esm({
    "pages/new-tab/app/privacy-stats/PrivacyStats.module.css"() {
      PrivacyStats_default = {
        root: "PrivacyStats_root",
        collapsed: "PrivacyStats_collapsed",
        expanded: "PrivacyStats_expanded",
        heading: "PrivacyStats_heading",
        headingIcon: "PrivacyStats_headingIcon",
        title: "PrivacyStats_title",
        expander: "PrivacyStats_expander",
        subtitle: "PrivacyStats_subtitle",
        list: "PrivacyStats_list",
        entering: "PrivacyStats_entering",
        "fade-in": "PrivacyStats_fade-in",
        entered: "PrivacyStats_entered",
        exiting: "PrivacyStats_exiting",
        "fade-out": "PrivacyStats_fade-out",
        row: "PrivacyStats_row",
        company: "PrivacyStats_company",
        icon: "PrivacyStats_icon",
        companyImgIcon: "PrivacyStats_companyImgIcon",
        other: "PrivacyStats_other",
        name: "PrivacyStats_name",
        bar: "PrivacyStats_bar",
        fill: "PrivacyStats_fill",
        count: "PrivacyStats_count"
      };
    }
  });

  // pages/new-tab/app/privacy-stats/privacy-stats.service.js
  var PrivacyStatsService;
  var init_privacy_stats_service = __esm({
    "pages/new-tab/app/privacy-stats/privacy-stats.service.js"() {
      "use strict";
      init_service();
      PrivacyStatsService = class {
        /**
         * @param {import("../../src/js/index.js").NewTabPage} ntp - The internal data feed, expected to have a `subscribe` method.
         * @internal
         */
        constructor(ntp) {
          this.dataService = new Service({
            initial: () => ntp.messaging.request("stats_getData"),
            subscribe: (cb) => ntp.messaging.subscribe("stats_onDataUpdate", cb)
          });
          this.configService = new Service({
            initial: () => ntp.messaging.request("stats_getConfig"),
            subscribe: (cb) => ntp.messaging.subscribe("stats_onConfigUpdate", cb),
            persist: (data) => ntp.messaging.notify("stats_setConfig", data)
          });
        }
        /**
         * @returns {Promise<{data: PrivacyStatsData; config: StatsConfig}>}
         * @internal
         */
        async getInitial() {
          const p1 = this.configService.fetchInitial();
          const p22 = this.dataService.fetchInitial();
          const [config, data] = await Promise.all([p1, p22]);
          return { config, data };
        }
        /**
         * @internal
         */
        destroy() {
          this.configService.destroy();
          this.dataService.destroy();
        }
        /**
         * @param {(evt: {data: PrivacyStatsData, source: 'manual' | 'subscription'}) => void} cb
         * @internal
         */
        onData(cb) {
          return this.dataService.onData(cb);
        }
        /**
         * @param {(evt: {data: StatsConfig, source: 'manual' | 'subscription'}) => void} cb
         * @internal
         */
        onConfig(cb) {
          return this.configService.onData(cb);
        }
        /**
         * Update the in-memory data immediate and persist.
         * Any state changes will be broadcast to consumers synchronously
         * @internal
         */
        toggleExpansion() {
          this.configService.update((old) => {
            if (old.expansion === "expanded") {
              return { ...old, expansion: (
                /** @type {const} */
                "collapsed"
              ) };
            } else {
              return { ...old, expansion: (
                /** @type {const} */
                "expanded"
              ) };
            }
          });
        }
      };
    }
  });

  // pages/new-tab/app/privacy-stats/PrivacyStatsProvider.js
  function PrivacyStatsProvider(props) {
    const initial = (
      /** @type {State} */
      {
        status: "idle",
        data: null,
        config: null
      }
    );
    const [state, dispatch] = p2(reducer, initial);
    const service = useService3();
    useInitialDataAndConfig({ dispatch, service });
    useDataSubscription({ dispatch, service });
    const { toggle } = useConfigSubscription({ dispatch, service });
    return /* @__PURE__ */ _(PrivacyStatsContext.Provider, { value: { state, toggle } }, /* @__PURE__ */ _(PrivacyStatsDispatchContext.Provider, { value: dispatch }, props.children));
  }
  function useService3() {
    const service = A2(
      /** @type {PrivacyStatsService|null} */
      null
    );
    const ntp = useMessaging();
    y2(() => {
      const stats2 = new PrivacyStatsService(ntp);
      service.current = stats2;
      return () => {
        stats2.destroy();
      };
    }, [ntp]);
    return service;
  }
  var PrivacyStatsContext, PrivacyStatsDispatchContext;
  var init_PrivacyStatsProvider = __esm({
    "pages/new-tab/app/privacy-stats/PrivacyStatsProvider.js"() {
      "use strict";
      init_preact_module();
      init_hooks_module();
      init_types();
      init_privacy_stats_service();
      init_service_hooks();
      PrivacyStatsContext = G({
        /** @type {State} */
        state: { status: "idle", data: null, config: null },
        /** @type {() => void} */
        toggle: () => {
          throw new Error("must implement");
        }
      });
      PrivacyStatsDispatchContext = G(
        /** @type {import("preact/hooks").Dispatch<Events>} */
        {}
      );
    }
  });

  // pages/new-tab/app/utils.js
  function viewTransition(fn) {
    if ("startViewTransition" in document && typeof document.startViewTransition === "function") {
      return document.startViewTransition(fn);
    }
    return fn();
  }
  function noop(named) {
    return () => {
      console.log(named, "noop");
    };
  }
  var init_utils = __esm({
    "pages/new-tab/app/utils.js"() {
      "use strict";
    }
  });

  // pages/new-tab/app/privacy-stats/PrivacyStats.js
  function PrivacyStats({ expansion, data, toggle, animation = "auto-animate" }) {
    if (animation === "view-transitions") {
      return /* @__PURE__ */ _(WithViewTransitions, { data, expansion, toggle });
    }
    return /* @__PURE__ */ _(PrivacyStatsConfigured, { expansion, data, toggle });
  }
  function WithViewTransitions({ expansion, data, toggle }) {
    const willToggle = q2(() => {
      viewTransition(toggle);
    }, [toggle]);
    return /* @__PURE__ */ _(PrivacyStatsConfigured, { expansion, data, toggle: willToggle });
  }
  function PrivacyStatsConfigured({ parentRef, expansion, data, toggle }) {
    const expanded = expansion === "expanded";
    const someCompanies = data.trackerCompanies.length > 0;
    const WIDGET_ID = g2();
    const TOGGLE_ID = g2();
    return /* @__PURE__ */ _("div", { class: PrivacyStats_default.root, ref: parentRef }, /* @__PURE__ */ _(
      Heading,
      {
        totalCount: data.totalCount,
        trackerCompanies: data.trackerCompanies,
        onToggle: toggle,
        expansion,
        buttonAttrs: {
          "aria-controls": WIDGET_ID,
          id: TOGGLE_ID
        }
      }
    ), expanded && someCompanies && /* @__PURE__ */ _(Body, { trackerCompanies: data.trackerCompanies, listAttrs: { id: WIDGET_ID } }));
  }
  function Heading({ expansion, trackerCompanies, totalCount, onToggle, buttonAttrs = {} }) {
    const { t: t3 } = useTypedTranslation();
    const [formatter] = h2(() => new Intl.NumberFormat());
    const recent = trackerCompanies.reduce((sum, item) => sum + item.count, 0);
    const recentTitle = recent === 1 ? t3("trackerStatsFeedCountBlockedSingular") : t3("trackerStatsFeedCountBlockedPlural", { count: formatter.format(recent) });
    const none = totalCount === 0;
    const some = totalCount > 0;
    const alltime = formatter.format(totalCount);
    const alltimeTitle = totalCount === 1 ? t3("trackerStatsCountBlockedSingular") : t3("trackerStatsCountBlockedPlural", { count: alltime });
    return /* @__PURE__ */ _("div", { className: PrivacyStats_default.heading }, /* @__PURE__ */ _("span", { className: PrivacyStats_default.headingIcon }, /* @__PURE__ */ _("img", { src: "./icons/shield.svg", alt: "" })), none && /* @__PURE__ */ _("p", { className: PrivacyStats_default.title }, t3("trackerStatsNoRecent")), some && /* @__PURE__ */ _("p", { className: PrivacyStats_default.title }, alltimeTitle), /* @__PURE__ */ _("span", { className: PrivacyStats_default.expander }, /* @__PURE__ */ _(
      ShowHideButton,
      {
        buttonAttrs: {
          ...buttonAttrs,
          hidden: trackerCompanies.length === 0,
          "aria-expanded": expansion === "expanded",
          "aria-pressed": expansion === "expanded"
        },
        onClick: onToggle,
        text: expansion === "expanded" ? t3("trackerStatsHideLabel") : t3("trackerStatsToggleLabel")
      }
    )), /* @__PURE__ */ _("p", { className: PrivacyStats_default.subtitle }, recent === 0 && t3("trackerStatsNoActivity"), recent > 0 && recentTitle));
  }
  function Body({ trackerCompanies, listAttrs = {} }) {
    const max = trackerCompanies[0]?.count ?? 0;
    const [formatter] = h2(() => new Intl.NumberFormat());
    return /* @__PURE__ */ _("ul", { ...listAttrs, class: PrivacyStats_default.list }, trackerCompanies.map((company) => {
      const percentage = Math.min(company.count * 100 / max, 100);
      const valueOrMin = Math.max(percentage, 10);
      const inlineStyles = {
        width: `${valueOrMin}%`
      };
      const countText = formatter.format(company.count);
      return /* @__PURE__ */ _("li", { key: company.displayName }, /* @__PURE__ */ _("div", { class: PrivacyStats_default.row }, /* @__PURE__ */ _("div", { class: PrivacyStats_default.company }, /* @__PURE__ */ _(CompanyIcon, { company }), /* @__PURE__ */ _("span", { class: PrivacyStats_default.name }, company.displayName)), /* @__PURE__ */ _("span", { class: PrivacyStats_default.count }, countText), /* @__PURE__ */ _("span", { class: PrivacyStats_default.bar }), /* @__PURE__ */ _("span", { class: PrivacyStats_default.fill, style: inlineStyles })));
    }));
  }
  function PrivacyStatsCustomized() {
    const { t: t3 } = useTypedTranslation();
    const { visibility, id, toggle, index } = useVisibility();
    const title = t3("trackerStatsMenuTitle");
    useCustomizer({ title, id, icon: "shield", toggle, visibility, index });
    if (visibility === "hidden") {
      return null;
    }
    return /* @__PURE__ */ _(PrivacyStatsProvider, null, /* @__PURE__ */ _(PrivacyStatsConsumer, null));
  }
  function PrivacyStatsConsumer() {
    const { state, toggle } = x2(PrivacyStatsContext);
    if (state.status === "ready") {
      return /* @__PURE__ */ _(PrivacyStats, { expansion: state.config.expansion, animation: state.config.animation?.kind, data: state.data, toggle });
    }
    return null;
  }
  function CompanyIcon({ company }) {
    const icon = company.displayName.toLowerCase().split(".")[0];
    const cleaned = icon.replace(/ /g, "-");
    const firstChar = icon[0];
    return /* @__PURE__ */ _("span", { className: PrivacyStats_default.icon }, icon === "other" && /* @__PURE__ */ _(Other, null), icon !== "other" && /* @__PURE__ */ _(
      "img",
      {
        src: `./company-icons/${cleaned}.svg`,
        alt: icon + " icon",
        className: PrivacyStats_default.companyImgIcon,
        onLoad: (e3) => {
          if (!e3.target) return;
          if (!(e3.target instanceof HTMLImageElement)) return;
          e3.target.dataset.loaded = String(true);
        },
        onError: (e3) => {
          if (!e3.target) return;
          if (!(e3.target instanceof HTMLImageElement)) return;
          if (e3.target.dataset.loadingFallback) {
            e3.target.dataset.errored = String(true);
            return;
          }
          e3.target.dataset.loadingFallback = String(true);
          e3.target.src = `./company-icons/${firstChar}.svg`;
        }
      }
    ));
  }
  function Other() {
    return /* @__PURE__ */ _("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", class: PrivacyStats_default.other }, /* @__PURE__ */ _(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16C31 16.0648 30.9996 16.1295 30.9988 16.1941C30.9996 16.2126 31 16.2313 31 16.25C31 16.284 30.9986 16.3177 30.996 16.3511C30.8094 24.4732 24.1669 31 16 31C7.83308 31 1.19057 24.4732 1.00403 16.3511C1.00136 16.3177 1 16.284 1 16.25C1 16.2313 1.00041 16.2126 1.00123 16.1941C1.00041 16.1295 1 16.0648 1 16ZM3.58907 17.5C4.12835 22.0093 7.06824 25.781 11.0941 27.5006C10.8572 27.0971 10.6399 26.674 10.4426 26.24C9.37903 23.9001 8.69388 20.8489 8.53532 17.5H3.58907ZM8.51564 15H3.53942C3.91376 10.2707 6.92031 6.28219 11.0941 4.49944C10.8572 4.90292 10.6399 5.326 10.4426 5.76003C9.32633 8.21588 8.62691 11.4552 8.51564 15ZM11.0383 17.5C11.1951 20.5456 11.8216 23.2322 12.7185 25.2055C13.8114 27.6098 15.0657 28.5 16 28.5C16.9343 28.5 18.1886 27.6098 19.2815 25.2055C20.1784 23.2322 20.8049 20.5456 20.9617 17.5H11.0383ZM20.983 15H11.017C11.1277 11.7487 11.7728 8.87511 12.7185 6.79454C13.8114 4.39021 15.0657 3.5 16 3.5C16.9343 3.5 18.1886 4.39021 19.2815 6.79454C20.2272 8.87511 20.8723 11.7487 20.983 15ZM23.4647 17.5C23.3061 20.8489 22.621 23.9001 21.5574 26.24C21.3601 26.674 21.1428 27.0971 20.9059 27.5006C24.9318 25.781 27.8717 22.0093 28.4109 17.5H23.4647ZM28.4606 15H23.4844C23.3731 11.4552 22.6737 8.21588 21.5574 5.76003C21.3601 5.326 21.1428 4.90291 20.9059 4.49944C25.0797 6.28219 28.0862 10.2707 28.4606 15Z",
        fill: "currentColor"
      }
    ));
  }
  var init_PrivacyStats2 = __esm({
    "pages/new-tab/app/privacy-stats/PrivacyStats.js"() {
      "use strict";
      init_preact_module();
      init_PrivacyStats();
      init_types();
      init_hooks_module();
      init_PrivacyStatsProvider();
      init_widget_config_provider();
      init_utils();
      init_ShowHideButton();
      init_Customizer2();
    }
  });

  // pages/new-tab/app/entry-points/privacyStats.js
  var privacyStats_exports = {};
  __export(privacyStats_exports, {
    factory: () => factory3
  });
  function factory3() {
    return /* @__PURE__ */ _(Centered, null, /* @__PURE__ */ _(PrivacyStatsCustomized, null));
  }
  var init_privacyStats = __esm({
    "pages/new-tab/app/entry-points/privacyStats.js"() {
      "use strict";
      init_preact_module();
      init_PrivacyStats2();
      init_Layout();
    }
  });

  // pages/new-tab/app/remote-messaging-framework/RemoteMessagingFramework.module.css
  var RemoteMessagingFramework_default;
  var init_RemoteMessagingFramework = __esm({
    "pages/new-tab/app/remote-messaging-framework/RemoteMessagingFramework.module.css"() {
      RemoteMessagingFramework_default = {
        root: "RemoteMessagingFramework_root",
        icon: "RemoteMessagingFramework_icon",
        iconBlock: "RemoteMessagingFramework_iconBlock",
        content: "RemoteMessagingFramework_content",
        title: "RemoteMessagingFramework_title",
        description: "RemoteMessagingFramework_description",
        btnBlock: "RemoteMessagingFramework_btnBlock",
        btnRow: "RemoteMessagingFramework_btnRow",
        btn: "RemoteMessagingFramework_btn",
        primary: "RemoteMessagingFramework_primary",
        dismissBtn: "RemoteMessagingFramework_dismissBtn"
      };
    }
  });

  // pages/new-tab/app/remote-messaging-framework/rmf.service.js
  var RMFService;
  var init_rmf_service = __esm({
    "pages/new-tab/app/remote-messaging-framework/rmf.service.js"() {
      "use strict";
      init_service();
      RMFService = class {
        /**
         * @param {import("../../src/js/index.js").NewTabPage} ntp - The internal data feed, expected to have a `subscribe` method.
         * @internal
         */
        constructor(ntp) {
          this.ntp = ntp;
          this.dataService = new Service({
            initial: () => ntp.messaging.request("rmf_getData"),
            subscribe: (cb) => ntp.messaging.subscribe("rmf_onDataUpdate", cb)
          });
        }
        /**
         * @returns {Promise<RMFData>}
         * @internal
         */
        async getInitial() {
          return await this.dataService.fetchInitial();
        }
        /**
         * @internal
         */
        destroy() {
          this.dataService.destroy();
        }
        /**
         * @param {(evt: {data: RMFData, source: 'manual' | 'subscription'}) => void} cb
         * @internal
         */
        onData(cb) {
          return this.dataService.onData(cb);
        }
        /**
         * @param {string} id
         * @internal
         */
        dismiss(id) {
          return this.ntp.messaging.notify("rmf_dismiss", { id });
        }
        /**
         * @param {string} id
         */
        primaryAction(id) {
          this.ntp.messaging.notify("rmf_primaryAction", { id });
        }
        /**
         * @param {string} id
         */
        secondaryAction(id) {
          this.ntp.messaging.notify("rmf_secondaryAction", { id });
        }
      };
    }
  });

  // pages/new-tab/app/remote-messaging-framework/RMFProvider.js
  function RMFProvider(props) {
    const initial = (
      /** @type {State} */
      {
        status: "idle",
        data: null,
        config: null
      }
    );
    const [state, dispatch] = p2(reducer, initial);
    const service = useService4();
    useInitialData({ dispatch, service });
    useDataSubscription({ dispatch, service });
    const dismiss = q2(
      (id) => {
        console.log("onDismiss");
        service.current?.dismiss(id);
      },
      [service]
    );
    const primaryAction = q2(
      (id) => {
        service.current?.primaryAction(id);
      },
      [service]
    );
    const secondaryAction = q2(
      (id) => {
        console.log("secondaryAction");
        service.current?.secondaryAction(id);
      },
      [service]
    );
    return /* @__PURE__ */ _(RMFContext.Provider, { value: { state, dismiss, primaryAction, secondaryAction } }, /* @__PURE__ */ _(RMFDispatchContext.Provider, { value: dispatch }, props.children));
  }
  function useService4() {
    const service = A2(
      /** @type {RMFService|null} */
      null
    );
    const ntp = useMessaging();
    y2(() => {
      const stats2 = new RMFService(ntp);
      service.current = stats2;
      return () => {
        stats2.destroy();
      };
    }, [ntp]);
    return service;
  }
  var RMFContext, RMFDispatchContext;
  var init_RMFProvider = __esm({
    "pages/new-tab/app/remote-messaging-framework/RMFProvider.js"() {
      "use strict";
      init_preact_module();
      init_hooks_module();
      init_types();
      init_rmf_service();
      init_service_hooks();
      RMFContext = G({
        /** @type {State} */
        state: { status: "idle", data: null, config: null },
        /** @type {(id: string) => void} */
        dismiss: (id) => {
          throw new Error("must implement dismiss" + id);
        },
        /** @type {(id: string) => void} */
        primaryAction: (id) => {
          throw new Error("must implement primaryAction" + id);
        },
        /** @type {(id: string) => void} */
        secondaryAction: (id) => {
          throw new Error("must implement secondaryAction" + id);
        }
      });
      RMFDispatchContext = G(
        /** @type {import("preact/hooks").Dispatch<Events>} */
        {}
      );
    }
  });

  // pages/new-tab/app/remote-messaging-framework/RemoteMessagingFramework.js
  function RemoteMessagingFramework({ message, primaryAction, secondaryAction, dismiss }) {
    const { id, messageType, titleText, descriptionText } = message;
    return /* @__PURE__ */ _("div", { id, class: (0, import_classnames6.default)(RemoteMessagingFramework_default.root, messageType !== "small" && message.icon && RemoteMessagingFramework_default.icon) }, messageType !== "small" && message.icon && /* @__PURE__ */ _("span", { class: RemoteMessagingFramework_default.iconBlock }, /* @__PURE__ */ _("img", { src: `./icons/${message.icon}.svg`, alt: "" })), /* @__PURE__ */ _("div", { class: RemoteMessagingFramework_default.content }, /* @__PURE__ */ _("p", { class: RemoteMessagingFramework_default.title }, titleText), /* @__PURE__ */ _("p", { class: RemoteMessagingFramework_default.description }, descriptionText), messageType === "big_two_action" && /* @__PURE__ */ _("div", { class: RemoteMessagingFramework_default.btnRow }, primaryAction && message.primaryActionText.length > 0 && /* @__PURE__ */ _("button", { class: (0, import_classnames6.default)(RemoteMessagingFramework_default.btn, RemoteMessagingFramework_default.primary), onClick: () => primaryAction(id) }, message.primaryActionText), secondaryAction && message.secondaryActionText.length > 0 && /* @__PURE__ */ _("button", { class: (0, import_classnames6.default)(RemoteMessagingFramework_default.btn, RemoteMessagingFramework_default.secondary), onClick: () => secondaryAction(id) }, message.secondaryActionText))), messageType === "big_single_action" && message.primaryActionText && primaryAction && /* @__PURE__ */ _("div", { class: RemoteMessagingFramework_default.btnBlock }, /* @__PURE__ */ _("button", { class: (0, import_classnames6.default)(RemoteMessagingFramework_default.btn), onClick: () => primaryAction(id) }, message.primaryActionText)), /* @__PURE__ */ _(DismissButton, { className: RemoteMessagingFramework_default.dismissBtn, onClick: () => dismiss(id) }));
  }
  function RMFConsumer() {
    const { state, primaryAction, secondaryAction, dismiss } = x2(RMFContext);
    if (state.status === "ready" && state.data.content) {
      return /* @__PURE__ */ _(
        RemoteMessagingFramework,
        {
          message: state.data.content,
          primaryAction,
          secondaryAction,
          dismiss
        }
      );
    }
    return null;
  }
  var import_classnames6;
  var init_RemoteMessagingFramework2 = __esm({
    "pages/new-tab/app/remote-messaging-framework/RemoteMessagingFramework.js"() {
      "use strict";
      init_preact_module();
      import_classnames6 = __toESM(require_classnames(), 1);
      init_RemoteMessagingFramework();
      init_hooks_module();
      init_RMFProvider();
      init_DismissButton2();
    }
  });

  // pages/new-tab/app/entry-points/rmf.js
  var rmf_exports = {};
  __export(rmf_exports, {
    factory: () => factory4
  });
  function factory4() {
    return /* @__PURE__ */ _(Centered, null, /* @__PURE__ */ _(RMFProvider, null, /* @__PURE__ */ _(RMFConsumer, null)));
  }
  var init_rmf = __esm({
    "pages/new-tab/app/entry-points/rmf.js"() {
      "use strict";
      init_preact_module();
      init_Layout();
      init_RemoteMessagingFramework2();
      init_RMFProvider();
    }
  });

  // pages/new-tab/app/update-notification/UpdateNotification.module.css
  var UpdateNotification_default;
  var init_UpdateNotification = __esm({
    "pages/new-tab/app/update-notification/UpdateNotification.module.css"() {
      UpdateNotification_default = {
        pulled: "UpdateNotification_pulled",
        root: "UpdateNotification_root",
        body: "UpdateNotification_body",
        details: "UpdateNotification_details",
        inlineLink: "UpdateNotification_inlineLink",
        summary: "UpdateNotification_summary",
        detailsContent: "UpdateNotification_detailsContent",
        list: "UpdateNotification_list",
        dismiss: "UpdateNotification_dismiss",
        dismissBtn: "UpdateNotification_dismissBtn"
      };
    }
  });

  // pages/new-tab/app/update-notification/update-notification.service.js
  var UpdateNotificationService;
  var init_update_notification_service = __esm({
    "pages/new-tab/app/update-notification/update-notification.service.js"() {
      "use strict";
      init_service();
      UpdateNotificationService = class {
        /**
         * @param {import("../../src/js/index.js").NewTabPage} ntp - The internal data feed, expected to have a `subscribe` method.
         * @param {UpdateNotificationData} initial
         * @internal
         */
        constructor(ntp, initial) {
          this.ntp = ntp;
          this.dataService = new Service(
            {
              subscribe: (cb) => ntp.messaging.subscribe("updateNotification_onDataUpdate", cb)
            },
            initial
          );
        }
        /**
         * @internal
         */
        destroy() {
          this.dataService.destroy();
        }
        /**
         * @param {(evt: {data: UpdateNotificationData, source: 'manual' | 'subscription'}) => void} cb
         * @internal
         */
        onData(cb) {
          return this.dataService.onData(cb);
        }
        /**
         * @internal
         */
        dismiss() {
          this.ntp.messaging.notify("updateNotification_dismiss");
          this.dataService.update((_old) => {
            return { content: null };
          });
        }
      };
    }
  });

  // pages/new-tab/app/update-notification/UpdateNotificationProvider.js
  function UpdateNotificationProvider(props) {
    const { updateNotification } = useInitialSetupData();
    if (updateNotification === null) {
      return null;
    }
    return /* @__PURE__ */ _(UpdateNotificationWithInitial, { updateNotification }, props.children);
  }
  function UpdateNotificationWithInitial({ updateNotification, children }) {
    const initial = (
      /** @type {State} */
      {
        status: "ready",
        data: updateNotification,
        config: void 0
      }
    );
    const [state, dispatch] = p2(reducer, initial);
    const service = useService5(updateNotification);
    useDataSubscription({ dispatch, service });
    const dismiss = q2(() => {
      service.current?.dismiss();
    }, [service]);
    return /* @__PURE__ */ _(UpdateNotificationContext.Provider, { value: { state, dismiss } }, /* @__PURE__ */ _(UpdateNotificationDispatchContext.Provider, { value: dispatch }, children));
  }
  function useService5(initial) {
    const service = A2(
      /** @type {UpdateNotificationService|null} */
      null
    );
    const ntp = useMessaging();
    y2(() => {
      const stats2 = new UpdateNotificationService(ntp, initial);
      service.current = stats2;
      return () => {
        stats2.destroy();
      };
    }, [ntp, initial]);
    return service;
  }
  var UpdateNotificationContext, UpdateNotificationDispatchContext;
  var init_UpdateNotificationProvider = __esm({
    "pages/new-tab/app/update-notification/UpdateNotificationProvider.js"() {
      "use strict";
      init_preact_module();
      init_hooks_module();
      init_types();
      init_update_notification_service();
      init_service_hooks();
      UpdateNotificationContext = G({
        /** @type {State} */
        state: { status: "idle", data: null, config: null },
        /** @type {() => void} */
        dismiss: () => {
          throw new Error("must implement dismiss");
        }
      });
      UpdateNotificationDispatchContext = G(
        /** @type {import("preact/hooks").Dispatch<Events>} */
        {}
      );
    }
  });

  // pages/new-tab/app/update-notification/UpdateNotification.js
  function UpdateNotification({ notes, dismiss, version }) {
    const { t: t3 } = useTypedTranslation();
    return /* @__PURE__ */ _("div", { class: UpdateNotification_default.root, "data-reset-layout": "true" }, /* @__PURE__ */ _("div", { class: (0, import_classnames7.default)("layout-centered", UpdateNotification_default.body) }, notes.length > 0 && /* @__PURE__ */ _(WithNotes, { notes, version }), notes.length === 0 && /* @__PURE__ */ _(WithoutNotes, { version })), /* @__PURE__ */ _("div", { class: UpdateNotification_default.dismiss }, /* @__PURE__ */ _("button", { onClick: dismiss, class: UpdateNotification_default.dismissBtn }, /* @__PURE__ */ _("span", { class: "sr-only" }, t3("updateNotification_dismiss_btn")), /* @__PURE__ */ _(Cross, null))));
  }
  function WithNotes({ notes, version }) {
    const id = g2();
    const ref = A2(
      /** @type {HTMLDetailsElement|null} */
      null
    );
    const { t: t3 } = useTypedTranslation();
    const inlineLink = /* @__PURE__ */ _(
      Trans,
      {
        str: t3("updateNotification_whats_new"),
        values: {
          a: {
            href: `#${id}`,
            class: UpdateNotification_default.inlineLink,
            click: (e3) => {
              e3.preventDefault();
              if (!ref.current) return;
              ref.current.open = !ref.current.open;
            }
          }
        }
      }
    );
    return /* @__PURE__ */ _("details", { ref }, /* @__PURE__ */ _("summary", { tabIndex: -1, className: UpdateNotification_default.summary }, t3("updateNotification_updated_version", { version }), " ", inlineLink), /* @__PURE__ */ _("div", { id, class: UpdateNotification_default.detailsContent }, /* @__PURE__ */ _("ul", { class: UpdateNotification_default.list }, notes.map((note, index) => {
      return /* @__PURE__ */ _("li", { key: note + index }, note);
    }))));
  }
  function WithoutNotes({ version }) {
    const { t: t3 } = useTypedTranslation();
    return /* @__PURE__ */ _("p", null, t3("updateNotification_updated_version", { version }));
  }
  function UpdateNotificationConsumer() {
    const { state, dismiss } = x2(UpdateNotificationContext);
    if (state.status === "ready" && state.data.content) {
      return /* @__PURE__ */ _(UpdateNotification, { notes: state.data.content.notes, version: state.data.content.version, dismiss });
    }
    return null;
  }
  var import_classnames7;
  var init_UpdateNotification2 = __esm({
    "pages/new-tab/app/update-notification/UpdateNotification.js"() {
      "use strict";
      init_preact_module();
      import_classnames7 = __toESM(require_classnames(), 1);
      init_UpdateNotification();
      init_hooks_module();
      init_UpdateNotificationProvider();
      init_types();
      init_TranslationsProvider();
      init_Icons2();
    }
  });

  // pages/new-tab/app/entry-points/updateNotification.js
  var updateNotification_exports = {};
  __export(updateNotification_exports, {
    factory: () => factory5
  });
  function factory5() {
    return /* @__PURE__ */ _(UpdateNotificationProvider, null, /* @__PURE__ */ _(UpdateNotificationConsumer, null));
  }
  var init_updateNotification = __esm({
    "pages/new-tab/app/entry-points/updateNotification.js"() {
      "use strict";
      init_preact_module();
      init_UpdateNotification2();
      init_UpdateNotificationProvider();
    }
  });

  // ../node_modules/preact/devtools/dist/devtools.module.js
  init_preact_module();
  var i2;
  null != (i2 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0) && i2.__PREACT_DEVTOOLS__ && i2.__PREACT_DEVTOOLS__.attachPreact("10.24.3", l, { Fragment: b, Component: k });

  // pages/new-tab/app/index.js
  init_preact_module();

  // pages/new-tab/app/components/App.js
  init_preact_module();

  // pages/new-tab/app/components/App.module.css
  var App_default = {
    layout: "App_layout"
  };

  // pages/new-tab/app/components/App.js
  init_settings_provider();

  // pages/new-tab/app/widget-list/WidgetList.js
  init_preact_module();
  init_widget_config_provider();
  init_hooks_module();

  // pages/onboarding/app/components/Stack.js
  init_preact_module();

  // pages/onboarding/app/components/Stack.module.css
  var Stack_default = {
    stack: "Stack_stack"
  };

  // ../node_modules/@formkit/auto-animate/preact/index.mjs
  init_hooks_module();

  // ../node_modules/@formkit/auto-animate/index.mjs
  var parents = /* @__PURE__ */ new Set();
  var coords = /* @__PURE__ */ new WeakMap();
  var siblings = /* @__PURE__ */ new WeakMap();
  var animations = /* @__PURE__ */ new WeakMap();
  var intersections = /* @__PURE__ */ new WeakMap();
  var intervals = /* @__PURE__ */ new WeakMap();
  var options = /* @__PURE__ */ new WeakMap();
  var debounces = /* @__PURE__ */ new WeakMap();
  var enabled = /* @__PURE__ */ new WeakSet();
  var root;
  var scrollX = 0;
  var scrollY = 0;
  var TGT = "__aa_tgt";
  var DEL = "__aa_del";
  var NEW = "__aa_new";
  var handleMutations = (mutations2) => {
    const elements = getElements(mutations2);
    if (elements) {
      elements.forEach((el) => animate(el));
    }
  };
  var handleResizes = (entries2) => {
    entries2.forEach((entry) => {
      if (entry.target === root)
        updateAllPos();
      if (coords.has(entry.target))
        updatePos(entry.target);
    });
  };
  function observePosition(el) {
    const oldObserver = intersections.get(el);
    oldObserver === null || oldObserver === void 0 ? void 0 : oldObserver.disconnect();
    let rect = coords.get(el);
    let invocations = 0;
    const buffer = 5;
    if (!rect) {
      rect = getCoords(el);
      coords.set(el, rect);
    }
    const { offsetWidth, offsetHeight } = root;
    const rootMargins = [
      rect.top - buffer,
      offsetWidth - (rect.left + buffer + rect.width),
      offsetHeight - (rect.top + buffer + rect.height),
      rect.left - buffer
    ];
    const rootMargin = rootMargins.map((px) => `${-1 * Math.floor(px)}px`).join(" ");
    const observer = new IntersectionObserver(() => {
      ++invocations > 1 && updatePos(el);
    }, {
      root,
      threshold: 1,
      rootMargin
    });
    observer.observe(el);
    intersections.set(el, observer);
  }
  function updatePos(el) {
    clearTimeout(debounces.get(el));
    const optionsOrPlugin = getOptions(el);
    const delay = isPlugin(optionsOrPlugin) ? 500 : optionsOrPlugin.duration;
    debounces.set(el, setTimeout(async () => {
      const currentAnimation = animations.get(el);
      try {
        await (currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.finished);
        coords.set(el, getCoords(el));
        observePosition(el);
      } catch {
      }
    }, delay));
  }
  function updateAllPos() {
    clearTimeout(debounces.get(root));
    debounces.set(root, setTimeout(() => {
      parents.forEach((parent) => forEach(parent, (el) => lowPriority(() => updatePos(el))));
    }, 100));
  }
  function poll(el) {
    setTimeout(() => {
      intervals.set(el, setInterval(() => lowPriority(updatePos.bind(null, el)), 2e3));
    }, Math.round(2e3 * Math.random()));
  }
  function lowPriority(callback) {
    if (typeof requestIdleCallback === "function") {
      requestIdleCallback(() => callback());
    } else {
      requestAnimationFrame(() => callback());
    }
  }
  var mutations;
  var resize;
  var supportedBrowser = typeof window !== "undefined" && "ResizeObserver" in window;
  if (supportedBrowser) {
    root = document.documentElement;
    mutations = new MutationObserver(handleMutations);
    resize = new ResizeObserver(handleResizes);
    window.addEventListener("scroll", () => {
      scrollY = window.scrollY;
      scrollX = window.scrollX;
    });
    resize.observe(root);
  }
  function getElements(mutations2) {
    const observedNodes = mutations2.reduce((nodes, mutation) => {
      return [
        ...nodes,
        ...Array.from(mutation.addedNodes),
        ...Array.from(mutation.removedNodes)
      ];
    }, []);
    const onlyCommentNodesObserved = observedNodes.every((node) => node.nodeName === "#comment");
    if (onlyCommentNodesObserved)
      return false;
    return mutations2.reduce((elements, mutation) => {
      if (elements === false)
        return false;
      if (mutation.target instanceof Element) {
        target(mutation.target);
        if (!elements.has(mutation.target)) {
          elements.add(mutation.target);
          for (let i4 = 0; i4 < mutation.target.children.length; i4++) {
            const child = mutation.target.children.item(i4);
            if (!child)
              continue;
            if (DEL in child) {
              return false;
            }
            target(mutation.target, child);
            elements.add(child);
          }
        }
        if (mutation.removedNodes.length) {
          for (let i4 = 0; i4 < mutation.removedNodes.length; i4++) {
            const child = mutation.removedNodes[i4];
            if (DEL in child) {
              return false;
            }
            if (child instanceof Element) {
              elements.add(child);
              target(mutation.target, child);
              siblings.set(child, [
                mutation.previousSibling,
                mutation.nextSibling
              ]);
            }
          }
        }
      }
      return elements;
    }, /* @__PURE__ */ new Set());
  }
  function target(el, child) {
    if (!child && !(TGT in el))
      Object.defineProperty(el, TGT, { value: el });
    else if (child && !(TGT in child))
      Object.defineProperty(child, TGT, { value: el });
  }
  function animate(el) {
    var _a;
    const isMounted = el.isConnected;
    const preExisting = coords.has(el);
    if (isMounted && siblings.has(el))
      siblings.delete(el);
    if (animations.has(el)) {
      (_a = animations.get(el)) === null || _a === void 0 ? void 0 : _a.cancel();
    }
    if (NEW in el) {
      add(el);
    } else if (preExisting && isMounted) {
      remain(el);
    } else if (preExisting && !isMounted) {
      remove(el);
    } else {
      add(el);
    }
  }
  function raw(str) {
    return Number(str.replace(/[^0-9.\-]/g, ""));
  }
  function getScrollOffset(el) {
    let p3 = el.parentElement;
    while (p3) {
      if (p3.scrollLeft || p3.scrollTop) {
        return { x: p3.scrollLeft, y: p3.scrollTop };
      }
      p3 = p3.parentElement;
    }
    return { x: 0, y: 0 };
  }
  function getCoords(el) {
    const rect = el.getBoundingClientRect();
    const { x: x4, y: y3 } = getScrollOffset(el);
    return {
      top: rect.top + y3,
      left: rect.left + x4,
      width: rect.width,
      height: rect.height
    };
  }
  function getTransitionSizes(el, oldCoords, newCoords) {
    let widthFrom = oldCoords.width;
    let heightFrom = oldCoords.height;
    let widthTo = newCoords.width;
    let heightTo = newCoords.height;
    const styles = getComputedStyle(el);
    const sizing = styles.getPropertyValue("box-sizing");
    if (sizing === "content-box") {
      const paddingY = raw(styles.paddingTop) + raw(styles.paddingBottom) + raw(styles.borderTopWidth) + raw(styles.borderBottomWidth);
      const paddingX = raw(styles.paddingLeft) + raw(styles.paddingRight) + raw(styles.borderRightWidth) + raw(styles.borderLeftWidth);
      widthFrom -= paddingX;
      widthTo -= paddingX;
      heightFrom -= paddingY;
      heightTo -= paddingY;
    }
    return [widthFrom, widthTo, heightFrom, heightTo].map(Math.round);
  }
  function getOptions(el) {
    return TGT in el && options.has(el[TGT]) ? options.get(el[TGT]) : { duration: 250, easing: "ease-in-out" };
  }
  function getTarget(el) {
    if (TGT in el)
      return el[TGT];
    return void 0;
  }
  function isEnabled(el) {
    const target2 = getTarget(el);
    return target2 ? enabled.has(target2) : false;
  }
  function forEach(parent, ...callbacks) {
    callbacks.forEach((callback) => callback(parent, options.has(parent)));
    for (let i4 = 0; i4 < parent.children.length; i4++) {
      const child = parent.children.item(i4);
      if (child) {
        callbacks.forEach((callback) => callback(child, options.has(child)));
      }
    }
  }
  function getPluginTuple(pluginReturn) {
    if (Array.isArray(pluginReturn))
      return pluginReturn;
    return [pluginReturn];
  }
  function isPlugin(config) {
    return typeof config === "function";
  }
  function remain(el) {
    const oldCoords = coords.get(el);
    const newCoords = getCoords(el);
    if (!isEnabled(el))
      return coords.set(el, newCoords);
    let animation;
    if (!oldCoords)
      return;
    const pluginOrOptions = getOptions(el);
    if (typeof pluginOrOptions !== "function") {
      const deltaX = oldCoords.left - newCoords.left;
      const deltaY = oldCoords.top - newCoords.top;
      const [widthFrom, widthTo, heightFrom, heightTo] = getTransitionSizes(el, oldCoords, newCoords);
      const start2 = {
        transform: `translate(${deltaX}px, ${deltaY}px)`
      };
      const end = {
        transform: `translate(0, 0)`
      };
      if (widthFrom !== widthTo) {
        start2.width = `${widthFrom}px`;
        end.width = `${widthTo}px`;
      }
      if (heightFrom !== heightTo) {
        start2.height = `${heightFrom}px`;
        end.height = `${heightTo}px`;
      }
      animation = el.animate([start2, end], {
        duration: pluginOrOptions.duration,
        easing: pluginOrOptions.easing
      });
    } else {
      const [keyframes] = getPluginTuple(pluginOrOptions(el, "remain", oldCoords, newCoords));
      animation = new Animation(keyframes);
      animation.play();
    }
    animations.set(el, animation);
    coords.set(el, newCoords);
    animation.addEventListener("finish", updatePos.bind(null, el));
  }
  function add(el) {
    if (NEW in el)
      delete el[NEW];
    const newCoords = getCoords(el);
    coords.set(el, newCoords);
    const pluginOrOptions = getOptions(el);
    if (!isEnabled(el))
      return;
    let animation;
    if (typeof pluginOrOptions !== "function") {
      animation = el.animate([
        { transform: "scale(.98)", opacity: 0 },
        { transform: "scale(0.98)", opacity: 0, offset: 0.5 },
        { transform: "scale(1)", opacity: 1 }
      ], {
        duration: pluginOrOptions.duration * 1.5,
        easing: "ease-in"
      });
    } else {
      const [keyframes] = getPluginTuple(pluginOrOptions(el, "add", newCoords));
      animation = new Animation(keyframes);
      animation.play();
    }
    animations.set(el, animation);
    animation.addEventListener("finish", updatePos.bind(null, el));
  }
  function cleanUp(el, styles) {
    var _a;
    el.remove();
    coords.delete(el);
    siblings.delete(el);
    animations.delete(el);
    (_a = intersections.get(el)) === null || _a === void 0 ? void 0 : _a.disconnect();
    setTimeout(() => {
      if (DEL in el)
        delete el[DEL];
      Object.defineProperty(el, NEW, { value: true, configurable: true });
      if (styles && el instanceof HTMLElement) {
        for (const style in styles) {
          el.style[style] = "";
        }
      }
    }, 0);
  }
  function remove(el) {
    var _a;
    if (!siblings.has(el) || !coords.has(el))
      return;
    const [prev, next] = siblings.get(el);
    Object.defineProperty(el, DEL, { value: true, configurable: true });
    const finalX = window.scrollX;
    const finalY = window.scrollY;
    if (next && next.parentNode && next.parentNode instanceof Element) {
      next.parentNode.insertBefore(el, next);
    } else if (prev && prev.parentNode) {
      prev.parentNode.appendChild(el);
    } else {
      (_a = getTarget(el)) === null || _a === void 0 ? void 0 : _a.appendChild(el);
    }
    if (!isEnabled(el))
      return cleanUp(el);
    const [top2, left2, width, height] = deletePosition(el);
    const optionsOrPlugin = getOptions(el);
    const oldCoords = coords.get(el);
    if (finalX !== scrollX || finalY !== scrollY) {
      adjustScroll(el, finalX, finalY, optionsOrPlugin);
    }
    let animation;
    let styleReset = {
      position: "absolute",
      top: `${top2}px`,
      left: `${left2}px`,
      width: `${width}px`,
      height: `${height}px`,
      margin: "0",
      pointerEvents: "none",
      transformOrigin: "center",
      zIndex: "100"
    };
    if (!isPlugin(optionsOrPlugin)) {
      Object.assign(el.style, styleReset);
      animation = el.animate([
        {
          transform: "scale(1)",
          opacity: 1
        },
        {
          transform: "scale(.98)",
          opacity: 0
        }
      ], { duration: optionsOrPlugin.duration, easing: "ease-out" });
    } else {
      const [keyframes, options2] = getPluginTuple(optionsOrPlugin(el, "remove", oldCoords));
      if ((options2 === null || options2 === void 0 ? void 0 : options2.styleReset) !== false) {
        styleReset = (options2 === null || options2 === void 0 ? void 0 : options2.styleReset) || styleReset;
        Object.assign(el.style, styleReset);
      }
      animation = new Animation(keyframes);
      animation.play();
    }
    animations.set(el, animation);
    animation.addEventListener("finish", cleanUp.bind(null, el, styleReset));
  }
  function adjustScroll(el, finalX, finalY, optionsOrPlugin) {
    const scrollDeltaX = scrollX - finalX;
    const scrollDeltaY = scrollY - finalY;
    const scrollBefore = document.documentElement.style.scrollBehavior;
    const scrollBehavior = getComputedStyle(root).scrollBehavior;
    if (scrollBehavior === "smooth") {
      document.documentElement.style.scrollBehavior = "auto";
    }
    window.scrollTo(window.scrollX + scrollDeltaX, window.scrollY + scrollDeltaY);
    if (!el.parentElement)
      return;
    const parent = el.parentElement;
    let lastHeight = parent.clientHeight;
    let lastWidth = parent.clientWidth;
    const startScroll = performance.now();
    function smoothScroll() {
      requestAnimationFrame(() => {
        if (!isPlugin(optionsOrPlugin)) {
          const deltaY = lastHeight - parent.clientHeight;
          const deltaX = lastWidth - parent.clientWidth;
          if (startScroll + optionsOrPlugin.duration > performance.now()) {
            window.scrollTo({
              left: window.scrollX - deltaX,
              top: window.scrollY - deltaY
            });
            lastHeight = parent.clientHeight;
            lastWidth = parent.clientWidth;
            smoothScroll();
          } else {
            document.documentElement.style.scrollBehavior = scrollBefore;
          }
        }
      });
    }
    smoothScroll();
  }
  function deletePosition(el) {
    const oldCoords = coords.get(el);
    const [width, , height] = getTransitionSizes(el, oldCoords, getCoords(el));
    let offsetParent = el.parentElement;
    while (offsetParent && (getComputedStyle(offsetParent).position === "static" || offsetParent instanceof HTMLBodyElement)) {
      offsetParent = offsetParent.parentElement;
    }
    if (!offsetParent)
      offsetParent = document.body;
    const parentStyles = getComputedStyle(offsetParent);
    const parentCoords = coords.get(offsetParent) || getCoords(offsetParent);
    const top2 = Math.round(oldCoords.top - parentCoords.top) - raw(parentStyles.borderTopWidth);
    const left2 = Math.round(oldCoords.left - parentCoords.left) - raw(parentStyles.borderLeftWidth);
    return [top2, left2, width, height];
  }
  function autoAnimate(el, config = {}) {
    if (mutations && resize) {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      const isDisabledDueToReduceMotion = mediaQuery.matches && !isPlugin(config) && !config.disrespectUserMotionPreference;
      if (!isDisabledDueToReduceMotion) {
        enabled.add(el);
        if (getComputedStyle(el).position === "static") {
          Object.assign(el.style, { position: "relative" });
        }
        forEach(el, updatePos, poll, (element) => resize === null || resize === void 0 ? void 0 : resize.observe(element));
        if (isPlugin(config)) {
          options.set(el, config);
        } else {
          options.set(el, { duration: 250, easing: "ease-in-out", ...config });
        }
        mutations.observe(el, { childList: true });
        parents.add(el);
      }
    }
    return Object.freeze({
      parent: el,
      enable: () => {
        enabled.add(el);
      },
      disable: () => {
        enabled.delete(el);
      },
      isEnabled: () => enabled.has(el)
    });
  }

  // ../node_modules/@formkit/auto-animate/preact/index.mjs
  function useAutoAnimate(options2) {
    const element = A2(null);
    const [controller, setController] = h2();
    const setEnabled = (enabled2) => {
      if (controller) {
        enabled2 ? controller.enable() : controller.disable();
      }
    };
    y2(() => {
      if (element.current instanceof HTMLElement)
        setController(autoAnimate(element.current, options2 || {}));
    }, []);
    return [element, setEnabled];
  }

  // shared/components/EnvironmentProvider.js
  init_preact_module();
  init_hooks_module();
  var EnvironmentContext = G({
    isReducedMotion: false,
    isDarkMode: false,
    debugState: false,
    injectName: (
      /** @type {import('../environment').Environment['injectName']} */
      "windows"
    ),
    willThrow: false,
    /** @type {import('../environment').Environment['env']} */
    env: "production"
  });
  var THEME_QUERY = "(prefers-color-scheme: dark)";
  var REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
  function EnvironmentProvider({ children, debugState, env = "production", willThrow = false, injectName = "windows" }) {
    const [theme, setTheme] = h2(window.matchMedia(THEME_QUERY).matches ? "dark" : "light");
    const [isReducedMotion, setReducedMotion] = h2(window.matchMedia(REDUCED_MOTION_QUERY).matches);
    y2(() => {
      const mediaQueryList = window.matchMedia(THEME_QUERY);
      const listener = (e3) => setTheme(e3.matches ? "dark" : "light");
      mediaQueryList.addEventListener("change", listener);
      return () => mediaQueryList.removeEventListener("change", listener);
    }, []);
    y2(() => {
      const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);
      const listener = (e3) => setter(e3.matches);
      mediaQueryList.addEventListener("change", listener);
      setter(mediaQueryList.matches);
      function setter(value) {
        document.documentElement.dataset.reducedMotion = String(value);
        setReducedMotion(value);
      }
      window.addEventListener("toggle-reduced-motion", () => {
        setter(true);
      });
      return () => mediaQueryList.removeEventListener("change", listener);
    }, []);
    return /* @__PURE__ */ _(
      EnvironmentContext.Provider,
      {
        value: {
          isReducedMotion,
          debugState,
          isDarkMode: theme === "dark",
          injectName,
          willThrow,
          env
        }
      },
      children
    );
  }
  function UpdateEnvironment({ search }) {
    y2(() => {
      const params = new URLSearchParams(search);
      if (params.has("reduced-motion")) {
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent("toggle-reduced-motion"));
        }, 0);
      }
    }, [search]);
    return null;
  }
  function useEnv() {
    return x2(EnvironmentContext);
  }

  // pages/onboarding/app/components/Stack.js
  function Stack({ children, gap = "var(--sp-6)", animate: animate2 = false, debug = false }) {
    const { isReducedMotion } = useEnv();
    const [parent] = useAutoAnimate({ duration: isReducedMotion ? 0 : 300 });
    return /* @__PURE__ */ _("div", { class: Stack_default.stack, ref: animate2 ? parent : null, "data-debug": String(debug), style: { gap } }, children);
  }
  Stack.gaps = {
    6: "var(--sp-6)",
    4: "var(--sp-4)",
    3: "var(--sp-3)"
  };

  // pages/new-tab/app/widget-list/WidgetList.js
  init_Customizer2();

  // import("../entry-points/**/*.js") in pages/new-tab/app/widget-list/WidgetList.js
  var globImport_entry_points_js = __glob({
    "../entry-points/favorites.js": () => Promise.resolve().then(() => (init_favorites(), favorites_exports)),
    "../entry-points/nextSteps.js": () => Promise.resolve().then(() => (init_nextSteps(), nextSteps_exports)),
    "../entry-points/privacyStats.js": () => Promise.resolve().then(() => (init_privacyStats(), privacyStats_exports)),
    "../entry-points/rmf.js": () => Promise.resolve().then(() => (init_rmf(), rmf_exports)),
    "../entry-points/updateNotification.js": () => Promise.resolve().then(() => (init_updateNotification(), updateNotification_exports))
  });

  // pages/new-tab/app/widget-list/WidgetList.js
  function placeholderWidget(id) {
    return {
      factory: () => {
        return /* @__PURE__ */ _("p", null, "Entry point for ", id, " was not found. This is a bug.");
      }
    };
  }
  async function widgetEntryPoint(id) {
    try {
      const mod = await globImport_entry_points_js(`../entry-points/${id}.js`);
      if (typeof mod.factory !== "function") {
        console.error(`module found for ${id}, but missing 'factory' export`);
        return placeholderWidget(id);
      }
      return mod;
    } catch (e3) {
      console.error(e3);
      return placeholderWidget(id);
    }
  }
  function WidgetList() {
    const { widgets, widgetConfigItems, entryPoints } = x2(WidgetConfigContext);
    return /* @__PURE__ */ _(Stack, { gap: "var(--sp-8)" }, widgets.map((widget, index) => {
      const matchingConfig = widgetConfigItems.find((item) => item.id === widget.id);
      const matchingEntryPoint = entryPoints[widget.id];
      if (!matchingConfig) {
        return /* @__PURE__ */ _(b, { key: widget.id }, matchingEntryPoint.factory?.());
      }
      return /* @__PURE__ */ _(b, { key: widget.id }, /* @__PURE__ */ _(WidgetVisibilityProvider, { visibility: matchingConfig.visibility, id: matchingConfig.id, index }, matchingEntryPoint.factory?.()));
    }), /* @__PURE__ */ _(CustomizerMenuPositionedFixed, null, /* @__PURE__ */ _(Customizer, null)));
  }

  // pages/new-tab/app/components/App.js
  function App({ children }) {
    const platformName = usePlatformName();
    return /* @__PURE__ */ _("div", { className: App_default.layout, "data-platform": platformName }, /* @__PURE__ */ _(WidgetList, null), children);
  }

  // shared/components/Fallback/Fallback.jsx
  init_preact_module();

  // shared/components/Fallback/Fallback.module.css
  var Fallback_default = {
    fallback: "Fallback_fallback"
  };

  // shared/components/Fallback/Fallback.jsx
  function Fallback({ showDetails }) {
    return /* @__PURE__ */ _("div", { class: Fallback_default.fallback }, /* @__PURE__ */ _("div", null, /* @__PURE__ */ _("p", null, "Something went wrong!"), showDetails && /* @__PURE__ */ _("p", null, "Please check logs for a message called ", /* @__PURE__ */ _("code", null, "reportPageException"))));
  }

  // shared/components/ErrorBoundary.js
  init_preact_module();
  var ErrorBoundary = class extends k {
    /**
     * @param {{didCatch: (params: {error: Error; info: any}) => void}} props
     */
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
      return { hasError: true };
    }
    componentDidCatch(error, info) {
      console.error(error);
      console.log(info);
      this.props.didCatch({ error, info });
    }
    render() {
      if (this.state.hasError) {
        return this.props.fallback;
      }
      return this.props.children;
    }
  };

  // pages/new-tab/app/index.js
  init_settings_provider();
  init_types();
  init_TranslationsProvider();

  // pages/new-tab/app/widget-list/widget-config.service.js
  init_service();
  var WidgetConfigService = class {
    /**
     * @param {import("../../src/js/index.js").NewTabPage} ntp - The internal data feed
     * @param {WidgetConfigs} initialConfig
     * @internal
     */
    constructor(ntp, initialConfig) {
      this.service = new Service(
        {
          subscribe: (cb) => ntp.messaging.subscribe("widgets_onConfigUpdated", cb),
          persist: (data) => ntp.messaging.notify("widgets_setConfig", data)
        },
        initialConfig
      );
    }
    /**
     * @param {(evt: {data: WidgetConfigs, source: 'manual' | 'subscription'}) => void} cb
     * @internal
     */
    onData(cb) {
      return this.service.onData(cb);
    }
    /**
     * Set the visibility of a widget.
     *
     * Note: This will persist
     *
     * @param {string} id - the widget ID to toggle.
     * @internal
     */
    toggleVisibility(id) {
      this.service.update((old) => {
        return old.map((widgetConfigItem) => {
          if (widgetConfigItem.id === id) {
            const alt = widgetConfigItem.visibility === "visible" ? (
              /** @type {const} */
              "hidden"
            ) : (
              /** @type {const} */
              "visible"
            );
            return { ...widgetConfigItem, visibility: alt };
          }
          return widgetConfigItem;
        });
      });
    }
  };

  // pages/new-tab/app/index.js
  init_newtab();
  init_widget_config_provider();

  // pages/new-tab/app/settings.js
  var Settings = class _Settings {
    /**
     * @param {object} params
     * @param {{name: ImportMeta['platform']}} [params.platform]
     */
    constructor({ platform = { name: "macos" } }) {
      this.platform = platform;
    }
    withPlatformName(name) {
      const valid = ["windows", "macos"];
      if (valid.includes(
        /** @type {any} */
        name
      )) {
        return new _Settings({
          ...this,
          platform: { name }
        });
      }
      return this;
    }
  };

  // pages/new-tab/app/components/Components.jsx
  init_preact_module();

  // pages/new-tab/app/components/Components.module.css
  var Components_default = {
    componentList: "Components_componentList",
    itemInfo: "Components_itemInfo",
    itemLinks: "Components_itemLinks",
    itemLink: "Components_itemLink",
    debugBar: "Components_debugBar",
    buttonRow: "Components_buttonRow",
    "grid-container": "Components_grid-container",
    selectItem: "Components_selectItem",
    item: "Components_item"
  };

  // pages/new-tab/app/components/Examples.jsx
  init_preact_module();

  // pages/new-tab/app/privacy-stats/mocks/PrivacyStatsMockProvider.js
  init_hooks_module();
  init_preact_module();
  init_PrivacyStatsProvider();

  // pages/new-tab/app/privacy-stats/mocks/stats.js
  var stats = {
    few: {
      totalCount: 481113,
      trackerCompanies: [
        {
          displayName: "Facebook",
          count: 310
        },
        {
          displayName: "Google",
          count: 279
        },
        {
          displayName: "Amazon",
          count: 67
        },
        {
          displayName: "Google Ads",
          count: 2
        },
        {
          displayName: "Other",
          count: 210
        }
      ],
      trackerCompaniesPeriod: "last-day"
    },
    single: {
      totalCount: 481113,
      trackerCompanies: [
        {
          displayName: "Google",
          count: 1
        }
      ],
      trackerCompaniesPeriod: "last-day"
    },
    norecent: {
      totalCount: 481113,
      trackerCompanies: [],
      trackerCompaniesPeriod: "last-day"
    },
    none: {
      totalCount: 0,
      trackerCompanies: [],
      trackerCompaniesPeriod: "last-day"
    }
  };

  // pages/new-tab/app/privacy-stats/mocks/PrivacyStatsMockProvider.js
  init_service_hooks();
  function PrivacyStatsMockProvider({
    data = stats.few,
    config = { expansion: "expanded", animation: { kind: "auto-animate" } },
    ticker = false,
    children
  }) {
    const initial = (
      /** @type {import('../PrivacyStatsProvider.js').State} */
      {
        status: "ready",
        data,
        config
      }
    );
    const [state, send] = p2(reducer, initial);
    y2(() => {
      if (!ticker) return;
      if (state.status === "ready") {
        const next = {
          totalCount: state.data.totalCount + 1,
          trackerCompanies: state.data.trackerCompanies.map((company, index) => {
            if (index === 0) return { ...company, count: company.count + 1 };
            return company;
          })
        };
        const time = setTimeout(() => {
          send({ kind: "data", data: next });
        }, 1e3);
        return () => clearTimeout(time);
      }
      return () => {
      };
    }, [state.data?.totalCount, ticker]);
    const toggle = q2(() => {
      if (state.status !== "ready") return console.warn("was not ready");
      if (state.config?.expansion === "expanded") {
        send({ kind: "config", config: { ...state.config, expansion: "collapsed" } });
      } else {
        send({ kind: "config", config: { ...state.config, expansion: "expanded" } });
      }
    }, [state.config?.expansion]);
    return /* @__PURE__ */ _(PrivacyStatsContext.Provider, { value: { state, toggle } }, /* @__PURE__ */ _(PrivacyStatsDispatchContext.Provider, { value: send }, children));
  }

  // pages/new-tab/app/components/Examples.jsx
  init_PrivacyStats2();
  init_RemoteMessagingFramework2();

  // pages/new-tab/app/next-steps/components/NextStepsExamples.js
  init_preact_module();
  init_utils();
  init_NextStepsCard();
  init_NextStepsGroup();
  var nextStepsExamples = {
    "next-steps.cardGroup.all": {
      factory: () => /* @__PURE__ */ _(
        NextStepsCardGroup,
        {
          types: [
            "bringStuff",
            "defaultApp",
            "blockCookies",
            "emailProtection",
            "duckplayer",
            "addAppDockMac",
            "pinAppToTaskbarWindows"
          ],
          expansion: "collapsed",
          toggle: noop("toggle"),
          dismiss: noop("dismiss"),
          action: noop("action")
        }
      )
    },
    "next-steps.cardGroup.all-expanded": {
      factory: () => /* @__PURE__ */ _(
        NextStepsCardGroup,
        {
          types: [
            "bringStuff",
            "defaultApp",
            "blockCookies",
            "emailProtection",
            "duckplayer",
            "addAppDockMac",
            "pinAppToTaskbarWindows"
          ],
          expansion: "expanded",
          toggle: noop("toggle"),
          dismiss: noop("dismiss"),
          action: noop("action")
        }
      )
    },
    "next-steps.cardGroup.two": {
      factory: () => /* @__PURE__ */ _(
        NextStepsCardGroup,
        {
          types: ["bringStuff", "defaultApp"],
          expansion: "collapsed",
          toggle: noop("toggle"),
          dismiss: noop("dismiss"),
          action: noop("action")
        }
      )
    },
    "next-steps.cardGroup.one": {
      factory: () => /* @__PURE__ */ _(
        NextStepsCardGroup,
        {
          types: ["bringStuff"],
          expansion: "collapsed",
          toggle: noop("toggle"),
          dismiss: noop("dismiss"),
          action: noop("action")
        }
      )
    }
  };
  var otherNextStepsExamples = {
    "next-steps.bringStuff": {
      factory: () => /* @__PURE__ */ _(NextStepsCard, { type: "bringStuff", dismiss: noop("dismiss"), action: noop("action") })
    },
    "next-steps.duckplayer": {
      factory: () => /* @__PURE__ */ _(NextStepsCard, { type: "duckplayer", dismiss: noop("dismiss"), action: noop("action") })
    },
    "next-steps.defaultApp": {
      factory: () => /* @__PURE__ */ _(NextStepsCard, { type: "defaultApp", dismiss: noop("dismiss"), action: noop("action") })
    },
    "next-steps.emailProtection": {
      factory: () => /* @__PURE__ */ _(NextStepsCard, { type: "emailProtection", dismiss: noop("dismiss"), action: noop("action") })
    },
    "next-steps.blockCookies": {
      factory: () => /* @__PURE__ */ _(NextStepsCard, { type: "blockCookies", dismiss: noop("dismiss"), action: noop("action") })
    },
    "next-steps.addAppDockMac": {
      factory: () => /* @__PURE__ */ _(NextStepsCard, { type: "addAppDockMac", dismiss: noop("dismiss"), action: noop("action") })
    },
    "next-steps.pinToTaskbarWindows": {
      factory: () => /* @__PURE__ */ _(NextStepsCard, { type: "pinAppToTaskbarWindows", dismiss: noop("dismiss"), action: noop("action") })
    },
    "next-steps.bubble": {
      factory: () => /* @__PURE__ */ _(NextStepsBubbleHeader, null)
    }
  };

  // pages/new-tab/app/components/Examples.jsx
  init_utils();
  init_VisibilityMenu2();
  init_Customizer2();

  // pages/new-tab/app/remote-messaging-framework/mocks/rmf.data.js
  var rmfDataExamples = {
    small: {
      content: {
        messageType: "small",
        id: "id-small",
        titleText: "Search services limited",
        descriptionText: "Search services are impacted by a Bing outage, results may not be what you expect"
      }
    },
    medium: {
      content: {
        messageType: "medium",
        id: "id-2",
        icon: "DDGAnnounce",
        titleText: "New Search Feature!",
        descriptionText: "DuckDuckGo now offers Instant Answers for quicker access to the information you need."
      }
    },
    big_single_action: {
      content: {
        messageType: "big_single_action",
        id: "id-big-single",
        titleText: "Tell Us Your Thoughts on Privacy Pro",
        descriptionText: "Take our short anonymous survey and share your feedback.",
        icon: "PrivacyPro",
        primaryActionText: "Take Survey"
      }
    },
    big_two_action: {
      content: {
        messageType: "big_two_action",
        id: "id-big-two",
        titleText: "Tell Us Your Thoughts on Privacy Pro",
        descriptionText: "Take our short anonymous survey and share your feedback.",
        icon: "Announce",
        primaryActionText: "Take Survey",
        secondaryActionText: "Remind me"
      }
    },
    big_two_action_overflow: {
      content: {
        id: "big-two-overflow",
        messageType: "big_two_action",
        icon: "CriticalUpdate",
        titleText: "Windows Update Recommended",
        descriptionText: "Support for Windows 10 is ending soon. Update to Windows 11 or newer before July 8, 2024, to keep getting the latest browser updates and improvements.",
        primaryActionText: "How to update Windows",
        secondaryActionText: "Remind me later, but only if I\u2019m actually going to update soon"
      }
    }
  };

  // pages/new-tab/app/favorites/components/FavoritesExamples.js
  init_preact_module();
  init_utils();

  // pages/new-tab/app/favorites/mocks/favorites.data.js
  var favorites = {
    many: {
      // prettier-ignore
      /** @type {Favorite[]} */
      favorites: [
        { id: "id-many-1", url: "https://example.com?id=id-many-1", title: "Amazon", favicon: { src: "./company-icons/amazon.svg", maxAvailableSize: 64 } },
        { id: "id-many-2", url: "https://example.com?id=id-many-2", title: "Adform", favicon: null },
        { id: "id-many-3", url: "https://a.example.com?id=id-many-3", title: "Adobe", favicon: { src: "./this-does-note-exist", maxAvailableSize: 64 } },
        { id: "id-many-4", url: "https://b.example.com?id=id-many-3", title: "Adobe", favicon: { src: "./this-does-note-exist", maxAvailableSize: 64 } },
        { id: "id-many-5", url: "https://222?id=id-many-3", title: "Gmail", favicon: null },
        { id: "id-many-6", url: "https://example.com?id=id-many-5", title: "TikTok", favicon: { src: "./company-icons/bytedance.svg", maxAvailableSize: 64 } },
        { id: "id-many-7", url: "https://example.com?id=id-many-6", title: "DoorDash", favicon: { src: "./company-icons/d.svg", maxAvailableSize: 64 } },
        { id: "id-many-8", url: "https://example.com?id=id-many-7", title: "Facebook", favicon: { src: "./company-icons/facebook.svg", maxAvailableSize: 64 } },
        { id: "id-many-9", url: "https://example.com?id=id-many-8", title: "Beeswax", favicon: { src: "./company-icons/beeswax.svg", maxAvailableSize: 64 } },
        { id: "id-many-10", url: "https://example.com?id=id-many-9", title: "Adobe", favicon: { src: "./company-icons/adobe.svg", maxAvailableSize: 64 } },
        { id: "id-many-11", url: "https://example.com?id=id-many-10", title: "Beeswax", favicon: { src: "./company-icons/beeswax.svg", maxAvailableSize: 64 } },
        { id: "id-many-12", url: "https://example.com?id=id-many-11", title: "Facebook", favicon: { src: "./company-icons/facebook.svg", maxAvailableSize: 64 } },
        { id: "id-many-13", url: "https://example.com?id=id-many-12", title: "Gmail", favicon: { src: "./company-icons/google.svg", maxAvailableSize: 64 } },
        { id: "id-many-14", url: "https://example.com?id=id-many-13", title: "TikTok", favicon: { src: "./company-icons/bytedance.svg", maxAvailableSize: 64 } },
        { id: "id-many-15", url: "https://example.com?id=id-many-14", title: "yeti", favicon: { src: "./company-icons/d.svg", maxAvailableSize: 64 } }
      ]
    },
    two: {
      // prettier-ignore
      /** @type {Favorite[]} */
      favorites: [
        { id: "id-two-1", url: "https://example.com?id=id-two-1", title: "Amazon", favicon: { src: "./company-icons/amazon.svg", maxAvailableSize: 32 } },
        { id: "id-two-2", url: "https://example.com?id=id-two-2", title: "Adform", favicon: { src: "./company-icons/adform.svg", maxAvailableSize: 32 } }
      ]
    },
    single: {
      /** @type {Favorite[]} */
      favorites: [
        {
          id: "id-single-1",
          url: "https://example.com?id=id-single-1",
          title: "Amazon",
          favicon: { src: "./company-icons/amazon.svg", maxAvailableSize: 32 }
        }
      ]
    },
    none: {
      /** @type {Favorite[]} */
      favorites: []
    },
    "small-icon": {
      /** @type {Favorite[]} */
      favorites: [
        {
          id: "id-small-icon-1",
          url: "https://duckduckgo.com",
          title: "DuckDuckGo",
          favicon: { src: "./icons/favicon@2x.png", maxAvailableSize: 16 }
        }
      ]
    },
    fallbacks: {
      /** @type {Favorite[]} */
      favorites: [
        {
          id: "id-fallbacks-1",
          url: "https://example.com?id=id-many-1",
          title: "Amazon",
          favicon: { src: "./company-icons/amazon.svg", maxAvailableSize: 64 }
        },
        { id: "id-fallbacks-2", url: "https://example.com?id=id-many-2", title: "Adform", favicon: null },
        {
          id: "id-fallbacks-3",
          url: "https://a.example.com?id=id-many-3",
          title: "Adobe",
          favicon: { src: "./this-does-note-exist", maxAvailableSize: 16 }
        }
      ]
    }
  };

  // pages/new-tab/app/favorites/mocks/MockFavoritesProvider.js
  init_preact_module();
  init_FavoritesProvider();
  init_hooks_module();
  init_service_hooks();
  var DEFAULT_CONFIG = {
    expansion: "expanded"
  };
  function MockFavoritesProvider({ data = favorites.many, config = DEFAULT_CONFIG, children }) {
    const { isReducedMotion } = useEnv();
    const initial = (
      /** @type {State} */
      {
        status: "ready",
        data,
        config
      }
    );
    const [state, dispatch] = p2(reducer, initial);
    const toggle = q2(() => {
      if (state.status !== "ready") return;
      if (state.config.expansion === "expanded") {
        dispatch({ kind: "config", config: { ...state.config, expansion: "collapsed" } });
      } else {
        dispatch({ kind: "config", config: { ...state.config, expansion: "expanded" } });
      }
    }, [state.status, state.config?.expansion, isReducedMotion]);
    const favoritesDidReOrder = q2((newList) => {
      dispatch({ kind: "data", data: { favorites: newList } });
    }, []);
    const openContextMenu = (...args) => {
      console.log("noop openContextMenu", ...args);
    };
    const openFavorite = (...args) => {
      console.log("noop openFavorite", ...args);
    };
    const add2 = (...args) => {
      console.log("noop add", ...args);
    };
    return /* @__PURE__ */ _(FavoritesContext.Provider, { value: { state, toggle, favoritesDidReOrder, openContextMenu, openFavorite, add: add2 } }, /* @__PURE__ */ _(FavoritesDispatchContext.Provider, { value: dispatch }, children));
  }

  // pages/new-tab/app/favorites/components/FavoritesExamples.js
  init_Favorites2();
  init_FavoritesCustomized();
  var favoritesExamples = {
    "favorites.no-dnd": {
      factory: () => /* @__PURE__ */ _(
        FavoritesMemo,
        {
          favorites: favorites.many.favorites,
          expansion: "expanded",
          toggle: noop("toggle"),
          add: noop("add"),
          openFavorite: noop("openFavorite"),
          openContextMenu: noop("openContextMenu")
        }
      )
    },
    "favorites.dnd": {
      factory: () => /* @__PURE__ */ _(MockFavoritesProvider, { data: favorites.many }, /* @__PURE__ */ _(FavoritesConsumer, null))
    },
    "favorites.few.7": {
      factory: () => /* @__PURE__ */ _(MockFavoritesProvider, { data: { favorites: favorites.many.favorites.slice(0, 7) } }, /* @__PURE__ */ _(FavoritesConsumer, null))
    },
    "favorites.few.7.no-animation": {
      factory: () => /* @__PURE__ */ _(
        MockFavoritesProvider,
        {
          data: { favorites: favorites.many.favorites.slice(0, 7) },
          config: { expansion: "expanded", animation: { kind: "none" } }
        },
        /* @__PURE__ */ _(FavoritesConsumer, null)
      )
    },
    "favorites.few.6": {
      factory: () => /* @__PURE__ */ _(MockFavoritesProvider, { data: { favorites: favorites.many.favorites.slice(0, 6) } }, /* @__PURE__ */ _(FavoritesConsumer, null))
    },
    "favorites.few.12": {
      factory: () => /* @__PURE__ */ _(MockFavoritesProvider, { data: { favorites: favorites.many.favorites.slice(0, 12) } }, /* @__PURE__ */ _(FavoritesConsumer, null))
    },
    "favorites.multi": {
      factory: () => /* @__PURE__ */ _("div", null, /* @__PURE__ */ _(MockFavoritesProvider, { data: favorites.many }, /* @__PURE__ */ _(FavoritesConsumer, null)), /* @__PURE__ */ _("br", null), /* @__PURE__ */ _(MockFavoritesProvider, { data: favorites.two }, /* @__PURE__ */ _(FavoritesConsumer, null)), /* @__PURE__ */ _("br", null), /* @__PURE__ */ _(MockFavoritesProvider, { data: favorites.single }, /* @__PURE__ */ _(FavoritesConsumer, null)), /* @__PURE__ */ _("br", null), /* @__PURE__ */ _(MockFavoritesProvider, { data: favorites.none }, /* @__PURE__ */ _(FavoritesConsumer, null)))
    },
    "favorites.single": {
      factory: () => /* @__PURE__ */ _(MockFavoritesProvider, { data: favorites.single }, /* @__PURE__ */ _(FavoritesConsumer, null))
    },
    "favorites.none": {
      factory: () => /* @__PURE__ */ _(MockFavoritesProvider, { data: favorites.none }, /* @__PURE__ */ _(FavoritesConsumer, null))
    }
  };

  // pages/new-tab/app/components/Examples.jsx
  var mainExamples = {
    "stats.few": {
      factory: () => /* @__PURE__ */ _(PrivacyStatsMockProvider, { ticker: true }, /* @__PURE__ */ _(PrivacyStatsConsumer, null))
    },
    "stats.few.collapsed": {
      factory: () => /* @__PURE__ */ _(PrivacyStatsMockProvider, { config: { expansion: "collapsed" } }, /* @__PURE__ */ _(PrivacyStatsConsumer, null))
    },
    "stats.single": {
      factory: () => /* @__PURE__ */ _(PrivacyStatsMockProvider, { data: stats.single }, /* @__PURE__ */ _(PrivacyStatsConsumer, null))
    },
    "stats.none": {
      factory: () => /* @__PURE__ */ _(PrivacyStatsMockProvider, { data: stats.none }, /* @__PURE__ */ _(PrivacyStatsConsumer, null))
    },
    "stats.norecent": {
      factory: () => /* @__PURE__ */ _(PrivacyStatsMockProvider, { data: stats.norecent }, /* @__PURE__ */ _(PrivacyStatsConsumer, null))
    },
    "stats.list": {
      factory: () => /* @__PURE__ */ _(Body, { trackerCompanies: stats.few.trackerCompanies, listAttrs: { id: "example-stats.list" } })
    },
    "stats.heading": {
      factory: () => /* @__PURE__ */ _(
        Heading,
        {
          trackerCompanies: stats.few.trackerCompanies,
          totalCount: stats.few.totalCount,
          expansion: "expanded",
          onToggle: noop("stats.heading onToggle")
        }
      )
    },
    "stats.heading.none": {
      factory: () => /* @__PURE__ */ _(
        Heading,
        {
          trackerCompanies: stats.none.trackerCompanies,
          totalCount: stats.none.totalCount,
          expansion: "expanded",
          onToggle: noop("stats.heading onToggle")
        }
      )
    },
    "rmf.small": {
      factory: () => /* @__PURE__ */ _(RemoteMessagingFramework, { message: rmfDataExamples.small.content, dismiss: () => {
      } })
    },
    "rmf.medium": {
      factory: () => /* @__PURE__ */ _(RemoteMessagingFramework, { message: rmfDataExamples.medium.content, dismiss: () => {
      } })
    },
    "rmf.big-single-action": {
      factory: () => /* @__PURE__ */ _(RemoteMessagingFramework, { message: rmfDataExamples.big_single_action.content, primaryAction: () => {
      }, dismiss: () => {
      } })
    },
    "rmf.big-two-action": {
      factory: () => /* @__PURE__ */ _(
        RemoteMessagingFramework,
        {
          message: rmfDataExamples.big_two_action.content,
          primaryAction: () => {
          },
          secondaryAction: () => {
          },
          dismiss: () => {
          }
        }
      )
    },
    ...favoritesExamples,
    ...nextStepsExamples
  };
  var otherExamples = {
    "stats.without-animation": {
      factory: () => /* @__PURE__ */ _(
        PrivacyStatsMockProvider,
        {
          ticker: true,
          config: {
            expansion: "expanded",
            animation: { kind: "none" }
          }
        },
        /* @__PURE__ */ _(PrivacyStatsConsumer, null)
      )
    },
    "stats.with-view-transitions": {
      factory: () => /* @__PURE__ */ _(
        PrivacyStatsMockProvider,
        {
          ticker: true,
          config: {
            expansion: "expanded",
            animation: { kind: "view-transitions" }
          }
        },
        /* @__PURE__ */ _(PrivacyStatsConsumer, null)
      )
    },
    "rmf.big-two-action-overflow": {
      factory: () => /* @__PURE__ */ _(
        RemoteMessagingFramework,
        {
          message: rmfDataExamples.big_two_action_overflow.content,
          primaryAction: () => {
          },
          secondaryAction: () => {
          },
          dismiss: () => {
          }
        }
      )
    },
    ...otherNextStepsExamples,
    "customizer-menu": {
      factory: () => /* @__PURE__ */ _(b, null, /* @__PURE__ */ _("div", null, /* @__PURE__ */ _(CustomizerButton, { isOpen: true })), /* @__PURE__ */ _("br", null), /* @__PURE__ */ _(MaxContent, null, /* @__PURE__ */ _(
        VisibilityMenu,
        {
          rows: [
            {
              id: "favorites",
              title: "Favorites",
              icon: "star",
              toggle: noop("toggle favorites"),
              visibility: "hidden",
              index: 0
            },
            {
              id: "privacyStats",
              title: "Privacy Stats",
              icon: "shield",
              toggle: noop("toggle favorites"),
              visibility: "visible",
              index: 1
            }
          ]
        }
      )))
    }
  };
  function MaxContent({ children }) {
    return /* @__PURE__ */ _("div", { style: { display: "grid", gridTemplateColumns: "max-content" } }, children);
  }

  // pages/new-tab/app/update-notification/UpdateNotification.examples.js
  init_preact_module();
  init_UpdateNotification2();
  init_utils();
  var updateNotificationExamples = {
    empty: {
      factory: () => {
        return /* @__PURE__ */ _(UpdateNotification, { notes: [], version: "1.2.3", dismiss: noop("dismiss!") });
      }
    },
    populated: {
      factory: () => {
        return /* @__PURE__ */ _(UpdateNotification, { notes: ["Bug Fixed and Updates"], version: "1.2.3", dismiss: noop("dismiss!") });
      }
    }
  };

  // pages/new-tab/app/components/Components.jsx
  var url = new URL(window.location.href);
  var list = {
    ...mainExamples,
    ...otherExamples,
    ...updateNotificationExamples
  };
  var entries = Object.entries(list);
  function Components() {
    const ids = url.searchParams.getAll("id");
    const isolated = url.searchParams.has("isolate");
    const e2e = url.searchParams.has("e2e");
    const entryIds = entries.map(([id]) => id);
    const validIds = ids.filter((id) => entryIds.includes(id));
    const filtered = validIds.length ? validIds.map((id) => (
      /** @type {const} */
      [id, list[id]]
    )) : entries;
    if (isolated) {
      return /* @__PURE__ */ _(Isolated, { entries: filtered, e2e });
    }
    return /* @__PURE__ */ _("div", null, /* @__PURE__ */ _(DebugBar, { id: ids[0], ids, entries }), /* @__PURE__ */ _(Stage, { entries: (
      /** @type {any} */
      filtered
    ) }));
  }
  function Stage({ entries: entries2 }) {
    return /* @__PURE__ */ _("div", { class: Components_default.componentList, "data-testid": "stage" }, entries2.map(([id, item]) => {
      const next = new URL(url);
      next.searchParams.set("isolate", "true");
      next.searchParams.set("id", id);
      const selected = new URL(url);
      selected.searchParams.set("id", id);
      const e2e = new URL(url);
      e2e.searchParams.set("isolate", "true");
      e2e.searchParams.set("id", id);
      e2e.searchParams.set("e2e", "true");
      const without = new URL(url);
      const current = without.searchParams.getAll("id");
      const others = current.filter((x4) => x4 !== id);
      const matching = current.filter((x4) => x4 === id);
      const matchingMinus1 = matching.length === 1 ? [] : matching.slice(0, -1);
      without.searchParams.delete("id");
      for (let string of [...others, ...matchingMinus1]) {
        without.searchParams.append("id", string);
      }
      return /* @__PURE__ */ _(b, null, /* @__PURE__ */ _("div", { class: Components_default.itemInfo }, /* @__PURE__ */ _("div", { class: Components_default.itemLinks }, /* @__PURE__ */ _("code", null, id), /* @__PURE__ */ _("a", { href: next.toString(), target: "_blank", title: "open in new tab" }, "Open \u{1F517}"), " ", /* @__PURE__ */ _("a", { href: without.toString(), hidden: current.length === 0 }, "Remove")), /* @__PURE__ */ _("div", { class: Components_default.itemLinks }, /* @__PURE__ */ _("a", { href: selected.toString(), class: Components_default.itemLink, title: "show this component only" }, "select"), " ", /* @__PURE__ */ _("a", { href: next.toString(), target: "_blank", class: Components_default.itemLink, title: "isolate this component" }, "isolate"), " ", /* @__PURE__ */ _("a", { href: e2e.toString(), target: "_blank", class: Components_default.itemLink, title: "isolate this component" }, "edge-to-edge"))), /* @__PURE__ */ _("div", { className: Components_default.item, key: id }, item.factory()));
    }));
  }
  function Isolated({ entries: entries2, e2e }) {
    if (e2e) {
      return /* @__PURE__ */ _("div", null, entries2.map(([id, item]) => {
        return /* @__PURE__ */ _(b, { key: id }, item.factory());
      }));
    }
    return /* @__PURE__ */ _("div", { class: Components_default.componentList, "data-testid": "stage" }, entries2.map(([id, item], index) => {
      return /* @__PURE__ */ _("div", { key: id + index }, item.factory());
    }));
  }
  function DebugBar({ entries: entries2, id, ids }) {
    return /* @__PURE__ */ _("div", { class: Components_default.debugBar, "data-testid": "selector" }, /* @__PURE__ */ _(ExampleSelector, { entries: entries2, id }), ids.length > 0 && /* @__PURE__ */ _(Append, { entries: entries2, id }), /* @__PURE__ */ _(TextLength, null), /* @__PURE__ */ _(Isolate, null));
  }
  function TextLength() {
    function onClick() {
      url.searchParams.set("textLength", "1.5");
      window.location.href = url.toString();
    }
    function onReset() {
      url.searchParams.delete("textLength");
      window.location.href = url.toString();
    }
    return /* @__PURE__ */ _("div", { class: Components_default.buttonRow }, /* @__PURE__ */ _("button", { onClick: onReset, type: "button" }, "Text Length 1x"), /* @__PURE__ */ _("button", { onClick, type: "button" }, "Text Length 1.5x"));
  }
  function Isolate() {
    const next = new URL(url);
    next.searchParams.set("isolate", "true");
    return /* @__PURE__ */ _("div", { class: Components_default.buttonRow }, /* @__PURE__ */ _("a", { href: next.toString(), target: "_blank" }, "Isolate (open in a new tab)"));
  }
  function ExampleSelector({ entries: entries2, id }) {
    function onReset() {
      const url3 = new URL(window.location.href);
      url3.searchParams.delete("id");
      window.location.href = url3.toString();
    }
    function onChange(event) {
      if (!event.target) return;
      if (!(event.target instanceof HTMLSelectElement)) return;
      const selectedId = event.target.value;
      if (selectedId) {
        if (selectedId === "none") return onReset();
        const url3 = new URL(window.location.href);
        url3.searchParams.set("id", selectedId);
        window.location.href = url3.toString();
      }
    }
    return /* @__PURE__ */ _(b, null, /* @__PURE__ */ _("div", { class: Components_default.buttonRow }, /* @__PURE__ */ _("label", null, "Single:", " ", /* @__PURE__ */ _("select", { value: id || "none", onChange }, /* @__PURE__ */ _("option", { value: "none" }, "Select an example"), entries2.map(([id2]) => /* @__PURE__ */ _("option", { key: id2, value: id2 }, id2)))), /* @__PURE__ */ _("button", { onClick: onReset }, "RESET \u{1F501}")));
  }
  function Append({ entries: entries2, id }) {
    function onReset() {
      const url3 = new URL(window.location.href);
      url3.searchParams.delete("id");
      window.location.href = url3.toString();
    }
    function onSubmit(event) {
      if (!event.target) return;
      event.preventDefault();
      const form = event.target;
      const data = new FormData(form);
      const value = data.get("add-id");
      if (typeof value !== "string") return;
      const url3 = new URL(window.location.href);
      url3.searchParams.append("id", value);
      window.location.href = url3.toString();
    }
    return /* @__PURE__ */ _(b, null, /* @__PURE__ */ _("form", { class: Components_default.buttonRow, onSubmit }, /* @__PURE__ */ _("label", null, "Append:", " ", /* @__PURE__ */ _("select", { value: "none", name: "add-id" }, /* @__PURE__ */ _("option", { value: "none" }, "Select an example"), entries2.map(([id2]) => /* @__PURE__ */ _("option", { key: id2, value: id2 }, id2)))), /* @__PURE__ */ _("button", null, "Confirm")));
  }

  // pages/new-tab/app/index.js
  async function init(messaging2, baseEnvironment2) {
    const init2 = await messaging2.init();
    if (!Array.isArray(init2.widgets)) {
      throw new Error("missing critical initialSetup.widgets array");
    }
    if (!Array.isArray(init2.widgetConfigs)) {
      throw new Error("missing critical initialSetup.widgetConfig array");
    }
    const widgetConfigAPI = new WidgetConfigService(messaging2, init2.widgetConfigs);
    const environment = baseEnvironment2.withEnv(init2.env).withLocale(init2.locale).withLocale(baseEnvironment2.urlParams.get("locale")).withTextLength(baseEnvironment2.urlParams.get("textLength")).withDisplay(baseEnvironment2.urlParams.get("display"));
    const strings = environment.locale === "en" ? newtab_default : await fetch(`./locales/${environment.locale}/new-tab.json`).then((x4) => x4.json()).catch((e3) => {
      console.error("Could not load locale", environment.locale, e3);
      return newtab_default;
    });
    const settings = new Settings({}).withPlatformName(baseEnvironment2.injectName).withPlatformName(init2.platform?.name).withPlatformName(baseEnvironment2.urlParams.get("platform"));
    console.log("environment:", environment);
    console.log("settings:", settings);
    console.log("locale:", environment.locale);
    const didCatch = (error) => {
      const message = error?.message || error?.error || "unknown";
      messaging2.reportPageException({ message });
    };
    const root2 = document.querySelector("#app");
    if (!root2) throw new Error("could not render, root element missing");
    document.body.dataset.platformName = settings.platform.name;
    if (environment.display === "components") {
      document.body.dataset.display = "components";
      return B(
        /* @__PURE__ */ _(EnvironmentProvider, { debugState: environment.debugState, injectName: environment.injectName, willThrow: environment.willThrow }, /* @__PURE__ */ _(SettingsProvider, { settings }, /* @__PURE__ */ _(TranslationProvider, { translationObject: strings, fallback: strings, textLength: environment.textLength }, /* @__PURE__ */ _(Components, null)))),
        root2
      );
    }
    const entryPoints = await (async () => {
      try {
        const loaders = init2.widgets.map((widget) => {
          return widgetEntryPoint(widget.id).then((mod) => [widget.id, mod]);
        });
        const entryPoints2 = await Promise.all(loaders);
        return Object.fromEntries(entryPoints2);
      } catch (e3) {
        const error = new Error("Error loading widget entry points:" + e3.message);
        didCatch(error);
        console.error(error);
        return {};
      }
    })();
    B(
      /* @__PURE__ */ _(
        EnvironmentProvider,
        {
          debugState: environment.debugState,
          injectName: environment.injectName,
          willThrow: environment.willThrow,
          env: environment.env
        },
        /* @__PURE__ */ _(ErrorBoundary, { didCatch, fallback: /* @__PURE__ */ _(Fallback, { showDetails: environment.env === "development" }) }, /* @__PURE__ */ _(UpdateEnvironment, { search: window.location.search }), /* @__PURE__ */ _(MessagingContext.Provider, { value: messaging2 }, /* @__PURE__ */ _(InitialSetupContext.Provider, { value: init2 }, /* @__PURE__ */ _(SettingsProvider, { settings }, /* @__PURE__ */ _(TranslationProvider, { translationObject: strings, fallback: strings, textLength: environment.textLength }, /* @__PURE__ */ _(
          WidgetConfigProvider,
          {
            api: widgetConfigAPI,
            widgetConfigs: init2.widgetConfigs,
            widgets: init2.widgets,
            entryPoints
          },
          /* @__PURE__ */ _(App, null)
        ))))))
      ),
      root2
    );
  }

  // ../messaging/lib/windows.js
  var WindowsMessagingTransport = class {
    /**
     * @param {WindowsMessagingConfig} config
     * @param {import('../index.js').MessagingContext} messagingContext
     * @internal
     */
    constructor(config, messagingContext) {
      this.messagingContext = messagingContext;
      this.config = config;
      this.globals = {
        window,
        JSONparse: window.JSON.parse,
        JSONstringify: window.JSON.stringify,
        Promise: window.Promise,
        Error: window.Error,
        String: window.String
      };
      for (const [methodName, fn] of Object.entries(this.config.methods)) {
        if (typeof fn !== "function") {
          throw new Error("cannot create WindowsMessagingTransport, missing the method: " + methodName);
        }
      }
    }
    /**
     * @param {import('../index.js').NotificationMessage} msg
     */
    notify(msg) {
      const data = this.globals.JSONparse(this.globals.JSONstringify(msg.params || {}));
      const notification = WindowsNotification.fromNotification(msg, data);
      this.config.methods.postMessage(notification);
    }
    /**
     * @param {import('../index.js').RequestMessage} msg
     * @param {{signal?: AbortSignal}} opts
     * @return {Promise<any>}
     */
    request(msg, opts = {}) {
      const data = this.globals.JSONparse(this.globals.JSONstringify(msg.params || {}));
      const outgoing = WindowsRequestMessage.fromRequest(msg, data);
      this.config.methods.postMessage(outgoing);
      const comparator = (eventData) => {
        return eventData.featureName === msg.featureName && eventData.context === msg.context && eventData.id === msg.id;
      };
      function isMessageResponse(data2) {
        if ("result" in data2) return true;
        if ("error" in data2) return true;
        return false;
      }
      return new this.globals.Promise((resolve, reject) => {
        try {
          this._subscribe(comparator, opts, (value, unsubscribe) => {
            unsubscribe();
            if (!isMessageResponse(value)) {
              console.warn("unknown response type", value);
              return reject(new this.globals.Error("unknown response"));
            }
            if (value.result) {
              return resolve(value.result);
            }
            const message = this.globals.String(value.error?.message || "unknown error");
            reject(new this.globals.Error(message));
          });
        } catch (e3) {
          reject(e3);
        }
      });
    }
    /**
     * @param {import('../index.js').Subscription} msg
     * @param {(value: unknown | undefined) => void} callback
     */
    subscribe(msg, callback) {
      const comparator = (eventData) => {
        return eventData.featureName === msg.featureName && eventData.context === msg.context && eventData.subscriptionName === msg.subscriptionName;
      };
      const cb = (eventData) => {
        return callback(eventData.params);
      };
      return this._subscribe(comparator, {}, cb);
    }
    /**
     * @typedef {import('../index.js').MessageResponse | import('../index.js').SubscriptionEvent} Incoming
     */
    /**
     * @param {(eventData: any) => boolean} comparator
     * @param {{signal?: AbortSignal}} options
     * @param {(value: Incoming, unsubscribe: (()=>void)) => void} callback
     * @internal
     */
    _subscribe(comparator, options2, callback) {
      if (options2?.signal?.aborted) {
        throw new DOMException("Aborted", "AbortError");
      }
      let teardown;
      const idHandler = (event) => {
        if (this.messagingContext.env === "production") {
          if (event.origin !== null && event.origin !== void 0) {
            console.warn("ignoring because evt.origin is not `null` or `undefined`");
            return;
          }
        }
        if (!event.data) {
          console.warn("data absent from message");
          return;
        }
        if (comparator(event.data)) {
          if (!teardown) throw new Error("unreachable");
          callback(event.data, teardown);
        }
      };
      const abortHandler = () => {
        teardown?.();
        throw new DOMException("Aborted", "AbortError");
      };
      this.config.methods.addEventListener("message", idHandler);
      options2?.signal?.addEventListener("abort", abortHandler);
      teardown = () => {
        this.config.methods.removeEventListener("message", idHandler);
        options2?.signal?.removeEventListener("abort", abortHandler);
      };
      return () => {
        teardown?.();
      };
    }
  };
  var WindowsMessagingConfig = class {
    /**
     * @param {object} params
     * @param {WindowsInteropMethods} params.methods
     * @internal
     */
    constructor(params) {
      this.methods = params.methods;
      this.platform = "windows";
    }
  };
  var WindowsNotification = class {
    /**
     * @param {object} params
     * @param {string} params.Feature
     * @param {string} params.SubFeatureName
     * @param {string} params.Name
     * @param {Record<string, any>} [params.Data]
     * @internal
     */
    constructor(params) {
      this.Feature = params.Feature;
      this.SubFeatureName = params.SubFeatureName;
      this.Name = params.Name;
      this.Data = params.Data;
    }
    /**
     * Helper to convert a {@link NotificationMessage} to a format that Windows can support
     * @param {NotificationMessage} notification
     * @returns {WindowsNotification}
     */
    static fromNotification(notification, data) {
      const output = {
        Data: data,
        Feature: notification.context,
        SubFeatureName: notification.featureName,
        Name: notification.method
      };
      return output;
    }
  };
  var WindowsRequestMessage = class {
    /**
     * @param {object} params
     * @param {string} params.Feature
     * @param {string} params.SubFeatureName
     * @param {string} params.Name
     * @param {Record<string, any>} [params.Data]
     * @param {string} [params.Id]
     * @internal
     */
    constructor(params) {
      this.Feature = params.Feature;
      this.SubFeatureName = params.SubFeatureName;
      this.Name = params.Name;
      this.Data = params.Data;
      this.Id = params.Id;
    }
    /**
     * Helper to convert a {@link RequestMessage} to a format that Windows can support
     * @param {RequestMessage} msg
     * @param {Record<string, any>} data
     * @returns {WindowsRequestMessage}
     */
    static fromRequest(msg, data) {
      const output = {
        Data: data,
        Feature: msg.context,
        SubFeatureName: msg.featureName,
        Name: msg.method,
        Id: msg.id
      };
      return output;
    }
  };

  // ../messaging/schema.js
  var RequestMessage = class {
    /**
     * @param {object} params
     * @param {string} params.context
     * @param {string} params.featureName
     * @param {string} params.method
     * @param {string} params.id
     * @param {Record<string, any>} [params.params]
     * @internal
     */
    constructor(params) {
      this.context = params.context;
      this.featureName = params.featureName;
      this.method = params.method;
      this.id = params.id;
      this.params = params.params;
    }
  };
  var NotificationMessage = class {
    /**
     * @param {object} params
     * @param {string} params.context
     * @param {string} params.featureName
     * @param {string} params.method
     * @param {Record<string, any>} [params.params]
     * @internal
     */
    constructor(params) {
      this.context = params.context;
      this.featureName = params.featureName;
      this.method = params.method;
      this.params = params.params;
    }
  };
  var Subscription = class {
    /**
     * @param {object} params
     * @param {string} params.context
     * @param {string} params.featureName
     * @param {string} params.subscriptionName
     * @internal
     */
    constructor(params) {
      this.context = params.context;
      this.featureName = params.featureName;
      this.subscriptionName = params.subscriptionName;
    }
  };
  function isResponseFor(request, data) {
    if ("result" in data) {
      return data.featureName === request.featureName && data.context === request.context && data.id === request.id;
    }
    if ("error" in data) {
      if ("message" in data.error) {
        return true;
      }
    }
    return false;
  }
  function isSubscriptionEventFor(sub, data) {
    if ("subscriptionName" in data) {
      return data.featureName === sub.featureName && data.context === sub.context && data.subscriptionName === sub.subscriptionName;
    }
    return false;
  }

  // ../messaging/lib/webkit.js
  var WebkitMessagingTransport = class {
    /**
     * @param {WebkitMessagingConfig} config
     * @param {import('../index.js').MessagingContext} messagingContext
     */
    constructor(config, messagingContext) {
      this.messagingContext = messagingContext;
      this.config = config;
      this.globals = captureGlobals();
      if (!this.config.hasModernWebkitAPI) {
        this.captureWebkitHandlers(this.config.webkitMessageHandlerNames);
      }
    }
    /**
     * Sends message to the webkit layer (fire and forget)
     * @param {String} handler
     * @param {*} data
     * @internal
     */
    wkSend(handler, data = {}) {
      if (!(handler in this.globals.window.webkit.messageHandlers)) {
        throw new MissingHandler(`Missing webkit handler: '${handler}'`, handler);
      }
      if (!this.config.hasModernWebkitAPI) {
        const outgoing = {
          ...data,
          messageHandling: {
            ...data.messageHandling,
            secret: this.config.secret
          }
        };
        if (!(handler in this.globals.capturedWebkitHandlers)) {
          throw new MissingHandler(`cannot continue, method ${handler} not captured on macos < 11`, handler);
        } else {
          return this.globals.capturedWebkitHandlers[handler](outgoing);
        }
      }
      return this.globals.window.webkit.messageHandlers[handler].postMessage?.(data);
    }
    /**
     * Sends message to the webkit layer and waits for the specified response
     * @param {String} handler
     * @param {import('../index.js').RequestMessage} data
     * @returns {Promise<*>}
     * @internal
     */
    async wkSendAndWait(handler, data) {
      if (this.config.hasModernWebkitAPI) {
        const response = await this.wkSend(handler, data);
        return this.globals.JSONparse(response || "{}");
      }
      try {
        const randMethodName = this.createRandMethodName();
        const key = await this.createRandKey();
        const iv = this.createRandIv();
        const { ciphertext, tag } = await new this.globals.Promise((resolve) => {
          this.generateRandomMethod(randMethodName, resolve);
          data.messageHandling = new SecureMessagingParams({
            methodName: randMethodName,
            secret: this.config.secret,
            key: this.globals.Arrayfrom(key),
            iv: this.globals.Arrayfrom(iv)
          });
          this.wkSend(handler, data);
        });
        const cipher = new this.globals.Uint8Array([...ciphertext, ...tag]);
        const decrypted = await this.decrypt(cipher, key, iv);
        return this.globals.JSONparse(decrypted || "{}");
      } catch (e3) {
        if (e3 instanceof MissingHandler) {
          throw e3;
        } else {
          console.error("decryption failed", e3);
          console.error(e3);
          return { error: e3 };
        }
      }
    }
    /**
     * @param {import('../index.js').NotificationMessage} msg
     */
    notify(msg) {
      this.wkSend(msg.context, msg);
    }
    /**
     * @param {import('../index.js').RequestMessage} msg
     */
    async request(msg) {
      const data = await this.wkSendAndWait(msg.context, msg);
      if (isResponseFor(msg, data)) {
        if (data.result) {
          return data.result || {};
        }
        if (data.error) {
          throw new Error(data.error.message);
        }
      }
      throw new Error("an unknown error occurred");
    }
    /**
     * Generate a random method name and adds it to the global scope
     * The native layer will use this method to send the response
     * @param {string | number} randomMethodName
     * @param {Function} callback
     * @internal
     */
    generateRandomMethod(randomMethodName, callback) {
      this.globals.ObjectDefineProperty(this.globals.window, randomMethodName, {
        enumerable: false,
        // configurable, To allow for deletion later
        configurable: true,
        writable: false,
        /**
         * @param {any[]} args
         */
        value: (...args) => {
          callback(...args);
          delete this.globals.window[randomMethodName];
        }
      });
    }
    /**
     * @internal
     * @return {string}
     */
    randomString() {
      return "" + this.globals.getRandomValues(new this.globals.Uint32Array(1))[0];
    }
    /**
     * @internal
     * @return {string}
     */
    createRandMethodName() {
      return "_" + this.randomString();
    }
    /**
     * @type {{name: string, length: number}}
     * @internal
     */
    algoObj = {
      name: "AES-GCM",
      length: 256
    };
    /**
     * @returns {Promise<Uint8Array>}
     * @internal
     */
    async createRandKey() {
      const key = await this.globals.generateKey(this.algoObj, true, ["encrypt", "decrypt"]);
      const exportedKey = await this.globals.exportKey("raw", key);
      return new this.globals.Uint8Array(exportedKey);
    }
    /**
     * @returns {Uint8Array}
     * @internal
     */
    createRandIv() {
      return this.globals.getRandomValues(new this.globals.Uint8Array(12));
    }
    /**
     * @param {BufferSource} ciphertext
     * @param {BufferSource} key
     * @param {Uint8Array} iv
     * @returns {Promise<string>}
     * @internal
     */
    async decrypt(ciphertext, key, iv) {
      const cryptoKey = await this.globals.importKey("raw", key, "AES-GCM", false, ["decrypt"]);
      const algo = {
        name: "AES-GCM",
        iv
      };
      const decrypted = await this.globals.decrypt(algo, cryptoKey, ciphertext);
      const dec = new this.globals.TextDecoder();
      return dec.decode(decrypted);
    }
    /**
     * When required (such as on macos 10.x), capture the `postMessage` method on
     * each webkit messageHandler
     *
     * @param {string[]} handlerNames
     */
    captureWebkitHandlers(handlerNames) {
      const handlers = window.webkit.messageHandlers;
      if (!handlers) throw new MissingHandler("window.webkit.messageHandlers was absent", "all");
      for (const webkitMessageHandlerName of handlerNames) {
        if (typeof handlers[webkitMessageHandlerName]?.postMessage === "function") {
          const original = handlers[webkitMessageHandlerName];
          const bound = handlers[webkitMessageHandlerName].postMessage?.bind(original);
          this.globals.capturedWebkitHandlers[webkitMessageHandlerName] = bound;
          delete handlers[webkitMessageHandlerName].postMessage;
        }
      }
    }
    /**
     * @param {import('../index.js').Subscription} msg
     * @param {(value: unknown) => void} callback
     */
    subscribe(msg, callback) {
      if (msg.subscriptionName in this.globals.window) {
        throw new this.globals.Error(`A subscription with the name ${msg.subscriptionName} already exists`);
      }
      this.globals.ObjectDefineProperty(this.globals.window, msg.subscriptionName, {
        enumerable: false,
        configurable: true,
        writable: false,
        value: (data) => {
          if (data && isSubscriptionEventFor(msg, data)) {
            callback(data.params);
          } else {
            console.warn("Received a message that did not match the subscription", data);
          }
        }
      });
      return () => {
        this.globals.ReflectDeleteProperty(this.globals.window, msg.subscriptionName);
      };
    }
  };
  var WebkitMessagingConfig = class {
    /**
     * @param {object} params
     * @param {boolean} params.hasModernWebkitAPI
     * @param {string[]} params.webkitMessageHandlerNames
     * @param {string} params.secret
     * @internal
     */
    constructor(params) {
      this.hasModernWebkitAPI = params.hasModernWebkitAPI;
      this.webkitMessageHandlerNames = params.webkitMessageHandlerNames;
      this.secret = params.secret;
    }
  };
  var SecureMessagingParams = class {
    /**
     * @param {object} params
     * @param {string} params.methodName
     * @param {string} params.secret
     * @param {number[]} params.key
     * @param {number[]} params.iv
     */
    constructor(params) {
      this.methodName = params.methodName;
      this.secret = params.secret;
      this.key = params.key;
      this.iv = params.iv;
    }
  };
  function captureGlobals() {
    const globals = {
      window,
      getRandomValues: window.crypto.getRandomValues.bind(window.crypto),
      TextEncoder,
      TextDecoder,
      Uint8Array,
      Uint16Array,
      Uint32Array,
      JSONstringify: window.JSON.stringify,
      JSONparse: window.JSON.parse,
      Arrayfrom: window.Array.from,
      Promise: window.Promise,
      Error: window.Error,
      ReflectDeleteProperty: window.Reflect.deleteProperty.bind(window.Reflect),
      ObjectDefineProperty: window.Object.defineProperty,
      addEventListener: window.addEventListener.bind(window),
      /** @type {Record<string, any>} */
      capturedWebkitHandlers: {}
    };
    if (isSecureContext) {
      globals.generateKey = window.crypto.subtle.generateKey.bind(window.crypto.subtle);
      globals.exportKey = window.crypto.subtle.exportKey.bind(window.crypto.subtle);
      globals.importKey = window.crypto.subtle.importKey.bind(window.crypto.subtle);
      globals.encrypt = window.crypto.subtle.encrypt.bind(window.crypto.subtle);
      globals.decrypt = window.crypto.subtle.decrypt.bind(window.crypto.subtle);
    }
    return globals;
  }

  // ../messaging/lib/android.js
  var AndroidMessagingTransport = class {
    /**
     * @param {AndroidMessagingConfig} config
     * @param {MessagingContext} messagingContext
     * @internal
     */
    constructor(config, messagingContext) {
      this.messagingContext = messagingContext;
      this.config = config;
    }
    /**
     * @param {NotificationMessage} msg
     */
    notify(msg) {
      try {
        this.config.sendMessageThrows?.(JSON.stringify(msg));
      } catch (e3) {
        console.error(".notify failed", e3);
      }
    }
    /**
     * @param {RequestMessage} msg
     * @return {Promise<any>}
     */
    request(msg) {
      return new Promise((resolve, reject) => {
        const unsub = this.config.subscribe(msg.id, handler);
        try {
          this.config.sendMessageThrows?.(JSON.stringify(msg));
        } catch (e3) {
          unsub();
          reject(new Error("request failed to send: " + e3.message || "unknown error"));
        }
        function handler(data) {
          if (isResponseFor(msg, data)) {
            if (data.result) {
              resolve(data.result || {});
              return unsub();
            }
            if (data.error) {
              reject(new Error(data.error.message));
              return unsub();
            }
            unsub();
            throw new Error("unreachable: must have `result` or `error` key by this point");
          }
        }
      });
    }
    /**
     * @param {Subscription} msg
     * @param {(value: unknown | undefined) => void} callback
     */
    subscribe(msg, callback) {
      const unsub = this.config.subscribe(msg.subscriptionName, (data) => {
        if (isSubscriptionEventFor(msg, data)) {
          callback(data.params || {});
        }
      });
      return () => {
        unsub();
      };
    }
  };
  var AndroidMessagingConfig = class {
    /** @type {(json: string, secret: string) => void} */
    _capturedHandler;
    /**
     * @param {object} params
     * @param {Record<string, any>} params.target
     * @param {boolean} params.debug
     * @param {string} params.messageSecret - a secret to ensure that messages are only
     * processed by the correct handler
     * @param {string} params.javascriptInterface - the name of the javascript interface
     * registered on the native side
     * @param {string} params.messageCallback - the name of the callback that the native
     * side will use to send messages back to the javascript side
     */
    constructor(params) {
      this.target = params.target;
      this.debug = params.debug;
      this.javascriptInterface = params.javascriptInterface;
      this.messageSecret = params.messageSecret;
      this.messageCallback = params.messageCallback;
      this.listeners = new globalThis.Map();
      this._captureGlobalHandler();
      this._assignHandlerMethod();
    }
    /**
     * The transport can call this to transmit a JSON payload along with a secret
     * to the native Android handler.
     *
     * Note: This can throw - it's up to the transport to handle the error.
     *
     * @type {(json: string) => void}
     * @throws
     * @internal
     */
    sendMessageThrows(json) {
      this._capturedHandler(json, this.messageSecret);
    }
    /**
     * A subscription on Android is just a named listener. All messages from
     * android -> are delivered through a single function, and this mapping is used
     * to route the messages to the correct listener.
     *
     * Note: Use this to implement request->response by unsubscribing after the first
     * response.
     *
     * @param {string} id
     * @param {(msg: MessageResponse | SubscriptionEvent) => void} callback
     * @returns {() => void}
     * @internal
     */
    subscribe(id, callback) {
      this.listeners.set(id, callback);
      return () => {
        this.listeners.delete(id);
      };
    }
    /**
     * Accept incoming messages and try to deliver it to a registered listener.
     *
     * This code is defensive to prevent any single handler from affecting another if
     * it throws (producer interference).
     *
     * @param {MessageResponse | SubscriptionEvent} payload
     * @internal
     */
    _dispatch(payload) {
      if (!payload) return this._log("no response");
      if ("id" in payload) {
        if (this.listeners.has(payload.id)) {
          this._tryCatch(() => this.listeners.get(payload.id)?.(payload));
        } else {
          this._log("no listeners for ", payload);
        }
      }
      if ("subscriptionName" in payload) {
        if (this.listeners.has(payload.subscriptionName)) {
          this._tryCatch(() => this.listeners.get(payload.subscriptionName)?.(payload));
        } else {
          this._log("no subscription listeners for ", payload);
        }
      }
    }
    /**
     *
     * @param {(...args: any[]) => any} fn
     * @param {string} [context]
     */
    _tryCatch(fn, context = "none") {
      try {
        return fn();
      } catch (e3) {
        if (this.debug) {
          console.error("AndroidMessagingConfig error:", context);
          console.error(e3);
        }
      }
    }
    /**
     * @param {...any} args
     */
    _log(...args) {
      if (this.debug) {
        console.log("AndroidMessagingConfig", ...args);
      }
    }
    /**
     * Capture the global handler and remove it from the global object.
     */
    _captureGlobalHandler() {
      const { target: target2, javascriptInterface } = this;
      if (Object.prototype.hasOwnProperty.call(target2, javascriptInterface)) {
        this._capturedHandler = target2[javascriptInterface].process.bind(target2[javascriptInterface]);
        delete target2[javascriptInterface];
      } else {
        this._capturedHandler = () => {
          this._log("Android messaging interface not available", javascriptInterface);
        };
      }
    }
    /**
     * Assign the incoming handler method to the global object.
     * This is the method that Android will call to deliver messages.
     */
    _assignHandlerMethod() {
      const responseHandler = (providedSecret, response) => {
        if (providedSecret === this.messageSecret) {
          this._dispatch(response);
        }
      };
      Object.defineProperty(this.target, this.messageCallback, {
        value: responseHandler
      });
    }
  };

  // ../messaging/lib/typed-messages.js
  function createTypedMessages(base, messaging2) {
    const asAny = (
      /** @type {any} */
      messaging2
    );
    return (
      /** @type {BaseClass} */
      asAny
    );
  }

  // ../messaging/index.js
  var MessagingContext2 = class {
    /**
     * @param {object} params
     * @param {string} params.context
     * @param {string} params.featureName
     * @param {"production" | "development"} params.env
     * @internal
     */
    constructor(params) {
      this.context = params.context;
      this.featureName = params.featureName;
      this.env = params.env;
    }
  };
  var Messaging = class {
    /**
     * @param {MessagingContext} messagingContext
     * @param {MessagingConfig} config
     */
    constructor(messagingContext, config) {
      this.messagingContext = messagingContext;
      this.transport = getTransport(config, this.messagingContext);
    }
    /**
     * Send a 'fire-and-forget' message.
     * @throws {MissingHandler}
     *
     * @example
     *
     * ```ts
     * const messaging = new Messaging(config)
     * messaging.notify("foo", {bar: "baz"})
     * ```
     * @param {string} name
     * @param {Record<string, any>} [data]
     */
    notify(name, data = {}) {
      const message = new NotificationMessage({
        context: this.messagingContext.context,
        featureName: this.messagingContext.featureName,
        method: name,
        params: data
      });
      this.transport.notify(message);
    }
    /**
     * Send a request, and wait for a response
     * @throws {MissingHandler}
     *
     * @example
     * ```
     * const messaging = new Messaging(config)
     * const response = await messaging.request("foo", {bar: "baz"})
     * ```
     *
     * @param {string} name
     * @param {Record<string, any>} [data]
     * @return {Promise<any>}
     */
    request(name, data = {}) {
      const id = globalThis?.crypto?.randomUUID?.() || name + ".response";
      const message = new RequestMessage({
        context: this.messagingContext.context,
        featureName: this.messagingContext.featureName,
        method: name,
        params: data,
        id
      });
      return this.transport.request(message);
    }
    /**
     * @param {string} name
     * @param {(value: unknown) => void} callback
     * @return {() => void}
     */
    subscribe(name, callback) {
      const msg = new Subscription({
        context: this.messagingContext.context,
        featureName: this.messagingContext.featureName,
        subscriptionName: name
      });
      return this.transport.subscribe(msg, callback);
    }
  };
  var TestTransportConfig = class {
    /**
     * @param {MessagingTransport} impl
     */
    constructor(impl) {
      this.impl = impl;
    }
  };
  var TestTransport = class {
    /**
     * @param {TestTransportConfig} config
     * @param {MessagingContext} messagingContext
     */
    constructor(config, messagingContext) {
      this.config = config;
      this.messagingContext = messagingContext;
    }
    notify(msg) {
      return this.config.impl.notify(msg);
    }
    request(msg) {
      return this.config.impl.request(msg);
    }
    subscribe(msg, callback) {
      return this.config.impl.subscribe(msg, callback);
    }
  };
  function getTransport(config, messagingContext) {
    if (config instanceof WebkitMessagingConfig) {
      return new WebkitMessagingTransport(config, messagingContext);
    }
    if (config instanceof WindowsMessagingConfig) {
      return new WindowsMessagingTransport(config, messagingContext);
    }
    if (config instanceof AndroidMessagingConfig) {
      return new AndroidMessagingTransport(config, messagingContext);
    }
    if (config instanceof TestTransportConfig) {
      return new TestTransport(config, messagingContext);
    }
    throw new Error("unreachable");
  }
  var MissingHandler = class extends Error {
    /**
     * @param {string} message
     * @param {string} handlerName
     */
    constructor(message, handlerName) {
      super(message);
      this.handlerName = handlerName;
    }
  };

  // shared/create-special-page-messaging.js
  function createSpecialPageMessaging(opts) {
    const messageContext = new MessagingContext2({
      context: "specialPages",
      featureName: opts.pageName,
      env: opts.env
    });
    try {
      if (opts.injectName === "windows") {
        const opts2 = new WindowsMessagingConfig({
          methods: {
            // @ts-expect-error - not in @types/chrome
            postMessage: window.chrome.webview.postMessage,
            // @ts-expect-error - not in @types/chrome
            addEventListener: window.chrome.webview.addEventListener,
            // @ts-expect-error - not in @types/chrome
            removeEventListener: window.chrome.webview.removeEventListener
          }
        });
        return new Messaging(messageContext, opts2);
      } else if (opts.injectName === "apple") {
        const opts2 = new WebkitMessagingConfig({
          hasModernWebkitAPI: true,
          secret: "",
          webkitMessageHandlerNames: ["specialPages"]
        });
        return new Messaging(messageContext, opts2);
      } else if (opts.injectName === "android") {
        const opts2 = new AndroidMessagingConfig({
          messageSecret: "duckduckgo-android-messaging-secret",
          messageCallback: "messageCallback",
          javascriptInterface: messageContext.context,
          target: globalThis,
          debug: true
        });
        return new Messaging(messageContext, opts2);
      }
    } catch (e3) {
      console.error("could not access handlers for %s, falling back to mock interface", opts.injectName);
    }
    const fallback = opts.mockTransport?.() || new TestTransportConfig({
      /**
       * @param {import('@duckduckgo/messaging').NotificationMessage} msg
       */
      notify(msg) {
        console.log(msg);
      },
      /**
       * @param {import('@duckduckgo/messaging').RequestMessage} msg
       */
      request: (msg) => {
        console.log(msg);
        if (msg.method === "initialSetup") {
          return Promise.resolve({
            locale: "en",
            env: opts.env
          });
        }
        return Promise.resolve(null);
      },
      /**
       * @param {import('@duckduckgo/messaging').SubscriptionEvent} msg
       */
      subscribe(msg) {
        console.log(msg);
        return () => {
          console.log("teardown");
        };
      }
    });
    return new Messaging(messageContext, fallback);
  }

  // shared/environment.js
  var Environment = class _Environment {
    /**
     * @param {object} params
     * @param {'app' | 'components'} [params.display] - whether to show the application or component list
     * @param {'production' | 'development'} [params.env] - application environment
     * @param {URLSearchParams} [params.urlParams] - URL params passed into the page
     * @param {ImportMeta['injectName']} [params.injectName] - application platform
     * @param {boolean} [params.willThrow] - whether the application will simulate an error
     * @param {boolean} [params.debugState] - whether to show debugging UI
     * @param {string} [params.locale] - for applications strings
     * @param {number} [params.textLength] - what ratio of text should be used. Set a number higher than 1 to have longer strings for testing
     */
    constructor({
      env = "production",
      urlParams = new URLSearchParams(location.search),
      injectName = "windows",
      willThrow = urlParams.get("willThrow") === "true",
      debugState = urlParams.has("debugState"),
      display = "app",
      locale = "en",
      textLength = 1
    } = {}) {
      this.display = display;
      this.urlParams = urlParams;
      this.injectName = injectName;
      this.willThrow = willThrow;
      this.debugState = debugState;
      this.env = env;
      this.locale = locale;
      this.textLength = textLength;
    }
    /**
     * @param {string|null|undefined} injectName
     * @returns {Environment}
     */
    withInjectName(injectName) {
      if (!injectName) return this;
      if (!isInjectName(injectName)) return this;
      return new _Environment({
        ...this,
        injectName
      });
    }
    /**
     * @param {string|null|undefined} env
     * @returns {Environment}
     */
    withEnv(env) {
      if (!env) return this;
      if (env !== "production" && env !== "development") return this;
      return new _Environment({
        ...this,
        env
      });
    }
    /**
     * @param {string|null|undefined} display
     * @returns {Environment}
     */
    withDisplay(display) {
      if (!display) return this;
      if (display !== "app" && display !== "components") return this;
      return new _Environment({
        ...this,
        display
      });
    }
    /**
     * @param {string|null|undefined} locale
     * @returns {Environment}
     */
    withLocale(locale) {
      if (!locale) return this;
      if (typeof locale !== "string") return this;
      if (locale.length !== 2) return this;
      return new _Environment({
        ...this,
        locale
      });
    }
    /**
     * @param {string|number|null|undefined} length
     * @returns {Environment}
     */
    withTextLength(length) {
      if (!length) return this;
      const num = Number(length);
      if (num >= 1 && num <= 2) {
        return new _Environment({
          ...this,
          textLength: num
        });
      }
      return this;
    }
  };
  function isInjectName(input) {
    const allowed = ["windows", "apple", "integration", "android"];
    return allowed.includes(input);
  }

  // pages/new-tab/src/js/mock-transport.js
  init_nextsteps_data();
  var url2 = new URL(window.location.href);

  // pages/new-tab/src/js/index.js
  var NewTabPage = class {
    /**
     * @param {import("@duckduckgo/messaging").Messaging} messaging
     * @param {ImportMeta['injectName']} injectName
     */
    constructor(messaging2, injectName) {
      this.messaging = createTypedMessages(this, messaging2);
      this.injectName = injectName;
    }
    /**
     * @return {Promise<import('../../../../types/new-tab.js').InitialSetupResponse>}
     */
    init() {
      return this.messaging.request("initialSetup");
    }
    /**
     * @param {string} message
     */
    reportInitException(message) {
      this.messaging.notify("reportInitException", { message });
    }
    /**
     * This will be sent if the application has loaded, but a client-side error
     * has occurred that cannot be recovered from
     * @param {{message: string}} params
     */
    reportPageException(params) {
      this.messaging.notify("reportPageException", params);
    }
    /**
     * Sent when a right-click occurs, and wasn't intercepted by another widget
     * @param {import('../../../../types/new-tab.js').ContextMenuNotify} params
     */
    contextMenu(params) {
      this.messaging.notify("contextMenu", params);
    }
  };
  var baseEnvironment = new Environment().withInjectName("windows").withEnv("production");
  var messaging = createSpecialPageMessaging({
    injectName: "windows",
    env: "production",
    pageName: "newTabPage",
    mockTransport: () => {
      if (baseEnvironment.injectName !== "integration") return null;
      let mock = null;
      return mock;
    }
  });
  var newTabMessaging = new NewTabPage(messaging, "windows");
  init(newTabMessaging, baseEnvironment).catch((e3) => {
    console.error(e3);
    const msg = typeof e3?.message === "string" ? e3.message : "unknown init error";
    newTabMessaging.reportInitException(msg);
  });
})();
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
