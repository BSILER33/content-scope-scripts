"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ../node_modules/classnames/index.js
  var require_classnames = __commonJS({
    "../node_modules/classnames/index.js"(exports, module) {
      (function() {
        "use strict";
        var hasOwn = {}.hasOwnProperty;
        function classNames6() {
          var classes = "";
          for (var i3 = 0; i3 < arguments.length; i3++) {
            var arg = arguments[i3];
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
            return classNames6.apply(null, arg);
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
          classNames6.default = classNames6;
          module.exports = classNames6;
        } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
          define("classnames", [], function() {
            return classNames6;
          });
        } else {
          window.classNames = classNames6;
        }
      })();
    }
  });

  // ../node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var t;
  var i;
  var o;
  var r;
  var f;
  var e;
  var c;
  var s;
  var a;
  var h = {};
  var v = [];
  var p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var y = Array.isArray;
  function d(n2, l3) {
    for (var u3 in l3) n2[u3] = l3[u3];
    return n2;
  }
  function w(n2) {
    n2 && n2.parentNode && n2.parentNode.removeChild(n2);
  }
  function _(l3, u3, t3) {
    var i3, o3, r3, f3 = {};
    for (r3 in u3) "key" == r3 ? i3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps) for (r3 in l3.defaultProps) void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
    return g(l3, f3, i3, o3, null);
  }
  function g(n2, t3, i3, o3, r3) {
    var f3 = { type: n2, props: t3, key: i3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r3 ? ++u : r3, __i: -1, __u: 0 };
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
  function P(n2, l3, u3, t3, i3, o3, r3, f3, e3, c3, s3) {
    var a3, p3, y3, d3, w3, _2 = t3 && t3.__k || v, g2 = l3.length;
    for (u3.__d = e3, $(u3, l3, _2), e3 = u3.__d, a3 = 0; a3 < g2; a3++) null != (y3 = u3.__k[a3]) && (p3 = -1 === y3.__i ? h : _2[y3.__i] || h, y3.__i = a3, O(n2, y3, p3, i3, o3, r3, f3, e3, c3, s3), d3 = y3.__e, y3.ref && p3.ref != y3.ref && (p3.ref && N(p3.ref, null, y3), s3.push(y3.ref, y3.__c || d3, y3)), null == w3 && null != d3 && (w3 = d3), 65536 & y3.__u || p3.__k === y3.__k ? e3 = I(y3, e3, n2) : "function" == typeof y3.type && void 0 !== y3.__d ? e3 = y3.__d : d3 && (e3 = d3.nextSibling), y3.__d = void 0, y3.__u &= -196609);
    u3.__d = e3, u3.__e = w3;
  }
  function $(n2, l3, u3) {
    var t3, i3, o3, r3, f3, e3 = l3.length, c3 = u3.length, s3 = c3, a3 = 0;
    for (n2.__k = [], t3 = 0; t3 < e3; t3++) null != (i3 = l3[t3]) && "boolean" != typeof i3 && "function" != typeof i3 ? (r3 = t3 + a3, (i3 = n2.__k[t3] = "string" == typeof i3 || "number" == typeof i3 || "bigint" == typeof i3 || i3.constructor == String ? g(null, i3, null, null, null) : y(i3) ? g(b, { children: i3 }, null, null, null) : void 0 === i3.constructor && i3.__b > 0 ? g(i3.type, i3.props, i3.key, i3.ref ? i3.ref : null, i3.__v) : i3).__ = n2, i3.__b = n2.__b + 1, o3 = null, -1 !== (f3 = i3.__i = L(i3, u3, r3, s3)) && (s3--, (o3 = u3[f3]) && (o3.__u |= 131072)), null == o3 || null === o3.__v ? (-1 == f3 && a3--, "function" != typeof i3.type && (i3.__u |= 65536)) : f3 !== r3 && (f3 == r3 - 1 ? a3-- : f3 == r3 + 1 ? a3++ : (f3 > r3 ? a3-- : a3++, i3.__u |= 65536))) : i3 = n2.__k[t3] = null;
    if (s3) for (t3 = 0; t3 < c3; t3++) null != (o3 = u3[t3]) && 0 == (131072 & o3.__u) && (o3.__e == n2.__d && (n2.__d = x(o3)), V(o3, o3));
  }
  function I(n2, l3, u3) {
    var t3, i3;
    if ("function" == typeof n2.type) {
      for (t3 = n2.__k, i3 = 0; t3 && i3 < t3.length; i3++) t3[i3] && (t3[i3].__ = n2, l3 = I(t3[i3], l3, u3));
      return l3;
    }
    n2.__e != l3 && (l3 && n2.type && !u3.contains(l3) && (l3 = x(n2)), u3.insertBefore(n2.__e, l3 || null), l3 = n2.__e);
    do {
      l3 = l3 && l3.nextSibling;
    } while (null != l3 && 8 === l3.nodeType);
    return l3;
  }
  function L(n2, l3, u3, t3) {
    var i3 = n2.key, o3 = n2.type, r3 = u3 - 1, f3 = u3 + 1, e3 = l3[u3];
    if (null === e3 || e3 && i3 == e3.key && o3 === e3.type && 0 == (131072 & e3.__u)) return u3;
    if (t3 > (null != e3 && 0 == (131072 & e3.__u) ? 1 : 0)) for (; r3 >= 0 || f3 < l3.length; ) {
      if (r3 >= 0) {
        if ((e3 = l3[r3]) && 0 == (131072 & e3.__u) && i3 == e3.key && o3 === e3.type) return r3;
        r3--;
      }
      if (f3 < l3.length) {
        if ((e3 = l3[f3]) && 0 == (131072 & e3.__u) && i3 == e3.key && o3 === e3.type) return f3;
        f3++;
      }
    }
    return -1;
  }
  function T(n2, l3, u3) {
    "-" === l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || p.test(l3) ? u3 : u3 + "px";
  }
  function A(n2, l3, u3, t3, i3) {
    var o3;
    n: if ("style" === l3) if ("string" == typeof u3) n2.style.cssText = u3;
    else {
      if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3) for (l3 in t3) u3 && l3 in u3 || T(n2.style, l3, "");
      if (u3) for (l3 in u3) t3 && u3[l3] === t3[l3] || T(n2.style, l3, u3[l3]);
    }
    else if ("o" === l3[0] && "n" === l3[1]) o3 = l3 !== (l3 = l3.replace(/(PointerCapture)$|Capture$/i, "$1")), l3 = l3.toLowerCase() in n2 || "onFocusOut" === l3 || "onFocusIn" === l3 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? t3 ? u3.u = t3.u : (u3.u = e, n2.addEventListener(l3, o3 ? s : c, o3)) : n2.removeEventListener(l3, o3 ? s : c, o3);
    else {
      if ("http://www.w3.org/2000/svg" == i3) l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
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
  function O(n2, u3, t3, i3, o3, r3, f3, e3, c3, s3) {
    var a3, h3, v3, p3, w3, _2, g2, m2, x3, C3, S2, M2, $2, I2, H, L2, T2 = u3.type;
    if (void 0 !== u3.constructor) return null;
    128 & t3.__u && (c3 = !!(32 & t3.__u), r3 = [e3 = u3.__e = t3.__e]), (a3 = l.__b) && a3(u3);
    n: if ("function" == typeof T2) try {
      if (m2 = u3.props, x3 = "prototype" in T2 && T2.prototype.render, C3 = (a3 = T2.contextType) && i3[a3.__c], S2 = a3 ? C3 ? C3.props.value : a3.__ : i3, t3.__c ? g2 = (h3 = u3.__c = t3.__c).__ = h3.__E : (x3 ? u3.__c = h3 = new T2(m2, S2) : (u3.__c = h3 = new k(m2, S2), h3.constructor = T2, h3.render = q), C3 && C3.sub(h3), h3.props = m2, h3.state || (h3.state = {}), h3.context = S2, h3.__n = i3, v3 = h3.__d = true, h3.__h = [], h3._sb = []), x3 && null == h3.__s && (h3.__s = h3.state), x3 && null != T2.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = d({}, h3.__s)), d(h3.__s, T2.getDerivedStateFromProps(m2, h3.__s))), p3 = h3.props, w3 = h3.state, h3.__v = u3, v3) x3 && null == T2.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), x3 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
      else {
        if (x3 && null == T2.getDerivedStateFromProps && m2 !== p3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(m2, S2), !h3.__e && (null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(m2, h3.__s, S2) || u3.__v === t3.__v)) {
          for (u3.__v !== t3.__v && (h3.props = m2, h3.state = h3.__s, h3.__d = false), u3.__e = t3.__e, u3.__k = t3.__k, u3.__k.some(function(n3) {
            n3 && (n3.__ = u3);
          }), M2 = 0; M2 < h3._sb.length; M2++) h3.__h.push(h3._sb[M2]);
          h3._sb = [], h3.__h.length && f3.push(h3);
          break n;
        }
        null != h3.componentWillUpdate && h3.componentWillUpdate(m2, h3.__s, S2), x3 && null != h3.componentDidUpdate && h3.__h.push(function() {
          h3.componentDidUpdate(p3, w3, _2);
        });
      }
      if (h3.context = S2, h3.props = m2, h3.__P = n2, h3.__e = false, $2 = l.__r, I2 = 0, x3) {
        for (h3.state = h3.__s, h3.__d = false, $2 && $2(u3), a3 = h3.render(h3.props, h3.state, h3.context), H = 0; H < h3._sb.length; H++) h3.__h.push(h3._sb[H]);
        h3._sb = [];
      } else do {
        h3.__d = false, $2 && $2(u3), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
      } while (h3.__d && ++I2 < 25);
      h3.state = h3.__s, null != h3.getChildContext && (i3 = d(d({}, i3), h3.getChildContext())), x3 && !v3 && null != h3.getSnapshotBeforeUpdate && (_2 = h3.getSnapshotBeforeUpdate(p3, w3)), P(n2, y(L2 = null != a3 && a3.type === b && null == a3.key ? a3.props.children : a3) ? L2 : [L2], u3, t3, i3, o3, r3, f3, e3, c3, s3), h3.base = u3.__e, u3.__u &= -161, h3.__h.length && f3.push(h3), g2 && (h3.__E = h3.__ = null);
    } catch (n3) {
      if (u3.__v = null, c3 || null != r3) {
        for (u3.__u |= c3 ? 160 : 128; e3 && 8 === e3.nodeType && e3.nextSibling; ) e3 = e3.nextSibling;
        r3[r3.indexOf(e3)] = null, u3.__e = e3;
      } else u3.__e = t3.__e, u3.__k = t3.__k;
      l.__e(n3, u3, t3);
    }
    else null == r3 && u3.__v === t3.__v ? (u3.__k = t3.__k, u3.__e = t3.__e) : u3.__e = z(t3.__e, u3, t3, i3, o3, r3, f3, c3, s3);
    (a3 = l.diffed) && a3(u3);
  }
  function j(n2, u3, t3) {
    u3.__d = void 0;
    for (var i3 = 0; i3 < t3.length; i3++) N(t3[i3], t3[++i3], t3[++i3]);
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
  function z(u3, t3, i3, o3, r3, f3, e3, c3, s3) {
    var a3, v3, p3, d3, _2, g2, m2, b2 = i3.props, k3 = t3.props, C3 = t3.type;
    if ("svg" === C3 ? r3 = "http://www.w3.org/2000/svg" : "math" === C3 ? r3 = "http://www.w3.org/1998/Math/MathML" : r3 || (r3 = "http://www.w3.org/1999/xhtml"), null != f3) {
      for (a3 = 0; a3 < f3.length; a3++) if ((_2 = f3[a3]) && "setAttribute" in _2 == !!C3 && (C3 ? _2.localName === C3 : 3 === _2.nodeType)) {
        u3 = _2, f3[a3] = null;
        break;
      }
    }
    if (null == u3) {
      if (null === C3) return document.createTextNode(k3);
      u3 = document.createElementNS(r3, C3, k3.is && k3), c3 && (l.__m && l.__m(t3, f3), c3 = false), f3 = null;
    }
    if (null === C3) b2 === k3 || c3 && u3.data === k3 || (u3.data = k3);
    else {
      if (f3 = f3 && n.call(u3.childNodes), b2 = i3.props || h, !c3 && null != f3) for (b2 = {}, a3 = 0; a3 < u3.attributes.length; a3++) b2[(_2 = u3.attributes[a3]).name] = _2.value;
      for (a3 in b2) if (_2 = b2[a3], "children" == a3) ;
      else if ("dangerouslySetInnerHTML" == a3) p3 = _2;
      else if (!(a3 in k3)) {
        if ("value" == a3 && "defaultValue" in k3 || "checked" == a3 && "defaultChecked" in k3) continue;
        A(u3, a3, null, _2, r3);
      }
      for (a3 in k3) _2 = k3[a3], "children" == a3 ? d3 = _2 : "dangerouslySetInnerHTML" == a3 ? v3 = _2 : "value" == a3 ? g2 = _2 : "checked" == a3 ? m2 = _2 : c3 && "function" != typeof _2 || b2[a3] === _2 || A(u3, a3, _2, b2[a3], r3);
      if (v3) c3 || p3 && (v3.__html === p3.__html || v3.__html === u3.innerHTML) || (u3.innerHTML = v3.__html), t3.__k = [];
      else if (p3 && (u3.innerHTML = ""), P(u3, y(d3) ? d3 : [d3], t3, i3, o3, "foreignObject" === C3 ? "http://www.w3.org/1999/xhtml" : r3, f3, e3, f3 ? f3[0] : i3.__k && x(i3, 0), c3, s3), null != f3) for (a3 = f3.length; a3--; ) w(f3[a3]);
      c3 || (a3 = "value", "progress" === C3 && null == g2 ? u3.removeAttribute("value") : void 0 !== g2 && (g2 !== u3[a3] || "progress" === C3 && !g2 || "option" === C3 && g2 !== b2[a3]) && A(u3, a3, g2, b2[a3], r3), a3 = "checked", void 0 !== m2 && m2 !== u3[a3] && A(u3, a3, m2, b2[a3], r3));
    }
    return u3;
  }
  function N(n2, u3, t3) {
    try {
      if ("function" == typeof n2) {
        var i3 = "function" == typeof n2.__u;
        i3 && n2.__u(), i3 && null == u3 || (n2.__u = n2(u3));
      } else n2.current = u3;
    } catch (n3) {
      l.__e(n3, t3);
    }
  }
  function V(n2, u3, t3) {
    var i3, o3;
    if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current !== n2.__e || N(i3, null, u3)), null != (i3 = n2.__c)) {
      if (i3.componentWillUnmount) try {
        i3.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u3);
      }
      i3.base = i3.__P = null;
    }
    if (i3 = n2.__k) for (o3 = 0; o3 < i3.length; o3++) i3[o3] && V(i3[o3], u3, t3 || "function" != typeof n2.type);
    t3 || w(n2.__e), n2.__c = n2.__ = n2.__e = n2.__d = void 0;
  }
  function q(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function B(u3, t3, i3) {
    var o3, r3, f3, e3;
    l.__ && l.__(u3, t3), r3 = (o3 = "function" == typeof i3) ? null : i3 && i3.__k || t3.__k, f3 = [], e3 = [], O(t3, u3 = (!o3 && i3 || t3).__k = _(b, null, [u3]), r3 || h, h, t3.namespaceURI, !o3 && i3 ? [i3] : r3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, f3, !o3 && i3 ? i3 : r3 ? r3.__e : t3.firstChild, o3, e3), j(f3, u3, e3);
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
  n = v.slice, l = { __e: function(n2, l3, u3, t3) {
    for (var i3, o3, r3; l3 = l3.__; ) if ((i3 = l3.__c) && !i3.__) try {
      if ((o3 = i3.constructor) && null != o3.getDerivedStateFromError && (i3.setState(o3.getDerivedStateFromError(n2)), r3 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t3 || {}), r3 = i3.__d), r3) return i3.__E = i3;
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

  // ../node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u2;
  var i2;
  var o2 = 0;
  var f2 = [];
  var c2 = l;
  var e2 = c2.__b;
  var a2 = c2.__r;
  var v2 = c2.diffed;
  var l2 = c2.__c;
  var m = c2.unmount;
  var s2 = c2.__;
  function d2(n2, t3) {
    c2.__h && c2.__h(r2, n2, o2 || t3), o2 = 0;
    var u3 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n2 >= u3.__.length && u3.__.push({}), u3.__[n2];
  }
  function h2(n2) {
    return o2 = 1, p2(D, n2);
  }
  function p2(n2, u3, i3) {
    var o3 = d2(t2++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u3) : D(void 0, u3), function(n3) {
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
        var i4 = false;
        return u4.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
          }
        }), !(!i4 && o3.__c.props === n3) && (!c3 || c3.call(this, n3, t3, r3));
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
    var i3 = d2(t2++, 3);
    !c2.__s && C2(i3.__H, u3) && (i3.__ = n2, i3.i = u3, r2.__H.__h.push(i3));
  }
  function x2(n2) {
    var u3 = r2.context[n2.__c], i3 = d2(t2++, 9);
    return i3.c = n2, u3 ? (null == i3.__ && (i3.__ = true, u3.sub(r2)), u3.props.value) : n2.__;
  }
  function j2() {
    for (var n2; n2 = f2.shift(); ) if (n2.__P && n2.__H) try {
      n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
    } catch (t3) {
      n2.__H.__h = [], c2.__e(t3, n2.__v);
    }
  }
  c2.__b = function(n2) {
    r2 = null, e2 && e2(n2);
  }, c2.__ = function(n2, t3) {
    n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), s2 && s2(n2, t3);
  }, c2.__r = function(n2) {
    a2 && a2(n2), t2 = 0;
    var i3 = (r2 = n2.__c).__H;
    i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.i = n3.__N = void 0;
    })) : (i3.__h.forEach(z2), i3.__h.forEach(B2), i3.__h = [], t2 = 0)), u2 = r2;
  }, c2.diffed = function(n2) {
    v2 && v2(n2);
    var t3 = n2.__c;
    t3 && t3.__H && (t3.__H.__h.length && (1 !== f2.push(t3) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t3.__H.__.forEach(function(n3) {
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
  var k2 = "function" == typeof requestAnimationFrame;
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

  // shared/components/DuckDuckGoLogo/DuckDuckGoLogo.js
  var import_classnames = __toESM(require_classnames(), 1);

  // shared/components/DuckDuckGoLogo/DuckDuckGoLogo.module.css
  var DuckDuckGoLogo_default = {
    logo: "DuckDuckGoLogo_logo"
  };

  // shared/components/DuckDuckGoLogo/DuckDuckGoLogo.js
  function DuckDuckGoLogo() {
    return /* @__PURE__ */ _("span", { className: DuckDuckGoLogo_default.logo }, /* @__PURE__ */ _("span", { className: (0, import_classnames.default)(DuckDuckGoLogo_default.logo, "offscreen") }, "DuckDuckGo"));
  }

  // shared/components/EnvironmentProvider.js
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
  function useEnv() {
    return x2(EnvironmentContext);
  }

  // shared/components/ErrorBoundary.js
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

  // pages/release-notes/app/components/App.module.css
  var App_default = {
    main: "App_main",
    header: "App_header",
    core: "App_core"
  };

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
      const target = Math.ceil(textLength);
      const combined = out.repeat(target);
      return combined.slice(0, targetLen);
    }
    return out;
  }

  // shared/components/TranslationsProvider.js
  var TranslationContext = G({
    /** @type {LocalTranslationFn} */
    t: () => {
      throw new Error("must implement");
    }
  });
  function TranslationProvider({ children, translationObject, fallback, textLength = 1 }) {
    function t3(inputKey, replacements) {
      const subject = translationObject?.[inputKey]?.title || fallback?.[inputKey]?.title;
      return apply(subject, replacements, textLength);
    }
    return /* @__PURE__ */ _(TranslationContext.Provider, { value: { t: t3 } }, children);
  }

  // pages/release-notes/app/types.js
  function useTypedTranslation() {
    return {
      t: x2(TranslationContext).t
    };
  }

  // pages/release-notes/app/components/ErrorFallback.js
  function ErrorFallback() {
    const { t: t3 } = useTypedTranslation();
    return /* @__PURE__ */ _("h1", null, t3("somethingWentWrong"));
  }

  // pages/release-notes/app/components/ReleaseNotes.js
  var import_classnames5 = __toESM(require_classnames(), 1);

  // shared/components/Text/Text.js
  var import_classnames2 = __toESM(require_classnames(), 1);

  // shared/components/Text/Text.module.css
  var Text_default = {
    "title-1": "Text_title-1",
    strictSpacing: "Text_strictSpacing",
    "title-2": "Text_title-2",
    "title-2-emphasis": "Text_title-2-emphasis",
    headline: "Text_headline",
    subheadline: "Text_subheadline",
    body: "Text_body",
    "body-emphasis": "Text_body-emphasis",
    "label-small": "Text_label-small",
    "label-default": "Text_label-default",
    "label-medium": "Text_label-medium",
    "caption-2-emphasis": "Text_caption-2-emphasis"
  };

  // shared/components/Text/Text.js
  function Text({ as: Comp = "p", variant, strictSpacing = true, className, children }) {
    return /* @__PURE__ */ _(Comp, { className: (0, import_classnames2.default)({ [Text_default[`${variant}`]]: variant, [Text_default.strictSpacing]: strictSpacing }, className) }, children);
  }

  // shared/components/Card/Card.js
  var import_classnames3 = __toESM(require_classnames(), 1);

  // shared/components/Card/Card.module.css
  var Card_default = {
    card: "Card_card"
  };

  // shared/components/Card/Card.js
  function Card({ className, children }) {
    return /* @__PURE__ */ _("section", { className: (0, import_classnames3.default)(Card_default.card, className) }, children);
  }

  // shared/components/Button/Button.js
  var import_classnames4 = __toESM(require_classnames(), 1);

  // shared/components/Button/Button.module.css
  var Button_default = {
    button: "Button_button",
    standard: "Button_standard",
    accent: "Button_accent",
    accentBrand: "Button_accentBrand",
    primary: "Button_primary",
    ghost: "Button_ghost"
  };

  // shared/components/Button/Button.js
  function Button({ variant, className, children, onClick, type = "button" }) {
    return /* @__PURE__ */ _(
      "button",
      {
        className: (0, import_classnames4.default)(Button_default.button, { [Button_default[`${variant}`]]: !!variant }, className),
        type,
        onClick: (
          /**
           * @param {import("preact").JSX.TargetedMouseEvent<EventTarget>} event
           */
          (event) => {
            if (onClick) {
              onClick(event);
            }
          }
        )
      },
      children
    );
  }

  // pages/release-notes/app/components/ContentPlaceholder.module.css
  var ContentPlaceholder_default = {
    contentPlaceholder: "ContentPlaceholder_contentPlaceholder"
  };

  // pages/release-notes/app/components/ContentPlaceholder.js
  function ContentPlaceholder() {
    return /* @__PURE__ */ _("div", { className: ContentPlaceholder_default.contentPlaceholder, "aria-hidden": "true", "data-testid": "placeholder" }, /* @__PURE__ */ _("h2", null), /* @__PURE__ */ _("p", null), /* @__PURE__ */ _("ul", null, /* @__PURE__ */ _("li", null, /* @__PURE__ */ _("p", null), /* @__PURE__ */ _("p", null)), /* @__PURE__ */ _("li", null, /* @__PURE__ */ _("p", null), /* @__PURE__ */ _("p", null))));
  }

  // pages/release-notes/app/components/ReleaseNotes.module.css
  var ReleaseNotes_default = {
    article: "ReleaseNotes_article",
    heading: "ReleaseNotes_heading",
    card: "ReleaseNotes_card",
    title: "ReleaseNotes_title",
    statusContainer: "ReleaseNotes_statusContainer",
    gridIcon: "ReleaseNotes_gridIcon",
    statusIcon: "ReleaseNotes_statusIcon",
    checkIcon: "ReleaseNotes_checkIcon",
    alertIcon: "ReleaseNotes_alertIcon",
    warningIcon: "ReleaseNotes_warningIcon",
    spinnerIcon: "ReleaseNotes_spinnerIcon",
    spinner: "ReleaseNotes_spinner",
    statusText: "ReleaseNotes_statusText",
    statusTimestamp: "ReleaseNotes_statusTimestamp",
    buttonContainer: "ReleaseNotes_buttonContainer",
    notesHeading: "ReleaseNotes_notesHeading",
    notesSubheading: "ReleaseNotes_notesSubheading",
    notesIcon: "ReleaseNotes_notesIcon",
    notesIconPrivacyPro: "ReleaseNotes_notesIconPrivacyPro",
    releaseTitle: "ReleaseNotes_releaseTitle",
    releaseVersion: "ReleaseNotes_releaseVersion",
    listContainer: "ReleaseNotes_listContainer",
    listGrid: "ReleaseNotes_listGrid",
    list: "ReleaseNotes_list",
    listItem: "ReleaseNotes_listItem",
    newTag: "ReleaseNotes_newTag"
  };

  // pages/release-notes/app/components/ReleaseNotes.js
  function PageTitle({ title }) {
    return /* @__PURE__ */ _("h1", { className: ReleaseNotes_default.title }, title);
  }
  function StatusText({ status, version, progress = 0 }) {
    const { t: t3 } = useTypedTranslation();
    const progressPercentage = (progress * 100).toFixed(0);
    const statusTexts = {
      loaded: t3("browserUpToDate"),
      loading: t3("checkingForUpdate"),
      updateReady: t3("newVersionAvailable"),
      updateError: t3("updateError"),
      criticalUpdateReady: t3("criticallyOutOfDate"),
      updateDownloading: t3("updateDownloading", { progress: progressPercentage }),
      updatePreparing: t3("updatePreparing")
    };
    return /* @__PURE__ */ _(Text, { variant: "title-2", className: ReleaseNotes_default.statusText }, t3("versionNumber", { version: `${version}` }), " \u2014 ", statusTexts[status]);
  }
  function StatusIcon({ status, className }) {
    const iconClasses = {
      loaded: ReleaseNotes_default.checkIcon,
      loading: ReleaseNotes_default.spinnerIcon,
      updateReady: ReleaseNotes_default.alertIcon,
      criticalUpdateReady: ReleaseNotes_default.warningIcon,
      updateError: ReleaseNotes_default.warningIcon,
      updatePreparing: ReleaseNotes_default.spinnerIcon,
      updateDownloading: ReleaseNotes_default.spinnerIcon
    };
    return /* @__PURE__ */ _("div", { className: (0, import_classnames5.default)(ReleaseNotes_default.statusIcon, iconClasses[status], className) });
  }
  function StatusTimestamp({ timestamp }) {
    const { t: t3 } = useTypedTranslation();
    const date = new Date(timestamp);
    const today = /* @__PURE__ */ new Date();
    const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1e3);
    const timeString = date.toLocaleTimeString("en", { timeStyle: "short" });
    let dateString = `${date.toLocaleDateString("en", { dateStyle: "full" })} ${timeString}`;
    if (date.getDate() === yesterday.getDate() && date.getMonth() === yesterday.getMonth() && date.getFullYear() === yesterday.getFullYear()) {
      dateString = t3("yesterdayAt", { time: timeString });
    }
    if (date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) {
      dateString = t3("todayAt", { time: timeString });
    }
    return /* @__PURE__ */ _(Text, { variant: "body", className: ReleaseNotes_default.statusTimestamp }, t3("lastChecked", { date: dateString }));
  }
  function UpdateStatus({ status, timestamp, version, progress }) {
    return /* @__PURE__ */ _("div", { className: ReleaseNotes_default.statusContainer }, /* @__PURE__ */ _(StatusIcon, { status, className: ReleaseNotes_default.gridIcon }), /* @__PURE__ */ _(StatusText, { status, version, progress }), /* @__PURE__ */ _(StatusTimestamp, { timestamp }));
  }
  function ReleaseNotesHeading({ title, version, showNewTag = false }) {
    const { t: t3 } = useTypedTranslation();
    return /* @__PURE__ */ _("header", { className: ReleaseNotes_default.notesHeading }, /* @__PURE__ */ _("h2", { className: ReleaseNotes_default.releaseTitle }, title, showNewTag && /* @__PURE__ */ _("span", { className: ReleaseNotes_default.newTag }, t3("new"))), /* @__PURE__ */ _(Text, { variant: "title-2", className: ReleaseNotes_default.releaseVersion }, t3("versionNumber", { version: `${version}` })));
  }
  function ReleaseNotesSubheading({ icon, title }) {
    return /* @__PURE__ */ _("div", { className: ReleaseNotes_default.notesSubheading }, icon && /* @__PURE__ */ _("span", { className: (0, import_classnames5.default)(ReleaseNotes_default.notesIcon, ReleaseNotes_default[`notesIcon${icon}`]) }), /* @__PURE__ */ _(Text, { as: "h3", variant: "headline" }, title));
  }
  function ReleaseNotesList({ notes }) {
    return /* @__PURE__ */ _("ul", { className: ReleaseNotes_default.list }, notes.map((note) => /* @__PURE__ */ _(Text, { as: "li", variant: "body", className: ReleaseNotes_default.listItem }, note)));
  }
  function ReleaseNotesContent({ title: releaseTitle, currentVersion, latestVersion, notes: releaseNotes }) {
    if (!releaseTitle || !releaseNotes.length) return null;
    const version = latestVersion || currentVersion;
    const showNewTag = !!latestVersion && currentVersion !== latestVersion;
    return /* @__PURE__ */ _(b, null, /* @__PURE__ */ _(ReleaseNotesHeading, { title: releaseTitle, version, showNewTag }), /* @__PURE__ */ _("div", { className: ReleaseNotes_default.listGrid }, releaseNotes.map(({ icon, title, notes }) => /* @__PURE__ */ _("div", { class: ReleaseNotes_default.listContainer }, title && /* @__PURE__ */ _(ReleaseNotesSubheading, { title, icon }), /* @__PURE__ */ _(ReleaseNotesList, { notes })))));
  }
  function CardContents({ releaseData }) {
    const { t: t3 } = useTypedTranslation();
    const { status } = releaseData;
    const isLoading = status === "loading" || status === "updateDownloading" || status === "updatePreparing";
    if (isLoading) {
      return /* @__PURE__ */ _(ContentPlaceholder, null);
    }
    const notes = [];
    const { currentVersion, latestVersion, releaseTitle, releaseNotes, releaseNotesPrivacyPro } = releaseData;
    if (releaseNotes?.length) {
      notes.push({ notes: releaseNotes });
    }
    if (releaseNotesPrivacyPro?.length) {
      notes.push({
        icon: "PrivacyPro",
        title: t3("forPrivacyProSubscribers"),
        notes: [
          ...releaseNotesPrivacyPro,
          /* The following should only get translated when the contents of the Release Notes update message are localized */
          /* @__PURE__ */ _("span", null, "Not subscribed? Find out more at", " ", /* @__PURE__ */ _("a", { href: "https://duckduckgo.com/pro", target: "_blank" }, "duckduckgo.com/pro"))
        ]
      });
    }
    return /* @__PURE__ */ _(ReleaseNotesContent, { title: releaseTitle, currentVersion, latestVersion, notes });
  }
  function UpdateButton({ releaseData }) {
    const { t: t3 } = useTypedTranslation();
    const { messages } = useMessaging();
    const { status } = releaseData;
    let button;
    if (status === "updateError") {
      button = /* @__PURE__ */ _(Button, { onClick: () => messages?.retryUpdate() }, t3("retryUpdate"));
    }
    if (status === "updateReady" || status === "criticalUpdateReady") {
      const { automaticUpdate } = releaseData;
      const buttonText = automaticUpdate ? t3("restartToUpdate") : t3("updateBrowser");
      button = /* @__PURE__ */ _(Button, { onClick: () => messages?.browserRestart() }, buttonText);
    }
    if (!button) return null;
    return /* @__PURE__ */ _("div", { className: ReleaseNotes_default.buttonContainer }, button);
  }
  function ReleaseNotes({ releaseData }) {
    const { t: t3 } = useTypedTranslation();
    const { status, currentVersion, lastUpdate } = releaseData;
    const timestampInMilliseconds = lastUpdate * 1e3;
    let progress = 0;
    if (status === "updateDownloading") {
      const { downloadProgress } = releaseData;
      if (downloadProgress && !Number.isNaN(downloadProgress)) {
        progress = downloadProgress;
      } else {
        console.warn("Invalid download progress value in data");
      }
    }
    const shouldShowButton = status === "updateReady" || status === "criticalUpdateReady" || status === "updateError";
    return /* @__PURE__ */ _("article", { className: ReleaseNotes_default.article }, /* @__PURE__ */ _("header", { className: ReleaseNotes_default.heading }, /* @__PURE__ */ _(PageTitle, { title: t3("browserReleaseNotes") }), /* @__PURE__ */ _(UpdateStatus, { status, timestamp: timestampInMilliseconds, version: currentVersion, progress }), shouldShowButton && /* @__PURE__ */ _(UpdateButton, { releaseData })), /* @__PURE__ */ _(Card, { className: ReleaseNotes_default.card }, /* @__PURE__ */ _(CardContents, { releaseData })));
  }

  // pages/release-notes/app/components/App.js
  function App({ children }) {
    const { messages } = useMessaging();
    const { isDarkMode } = useEnv();
    const [releaseData, setReleaseData] = h2();
    y2(() => {
      return messages?.onUpdate((data) => {
        console.log("DATA RECEIVED", data);
        setReleaseData(data);
      });
    }, []);
    function didCatch(error) {
      const message = error?.message || "unknown";
      console.error("ErrorBoundary", message);
      messages?.reportPageException({ message });
    }
    return /* @__PURE__ */ _("main", { className: App_default.main, "data-theme": isDarkMode ? "dark" : "light" }, /* @__PURE__ */ _(ErrorBoundary, { didCatch, fallback: /* @__PURE__ */ _(ErrorFallback, null) }, /* @__PURE__ */ _("header", { className: App_default.header }, /* @__PURE__ */ _(DuckDuckGoLogo, null)), /* @__PURE__ */ _("div", { class: App_default.core }, releaseData && /* @__PURE__ */ _(ReleaseNotes, { releaseData })), /* @__PURE__ */ _(WillThrow, null), children));
  }
  function WillThrow() {
    const env = useEnv();
    if (env.willThrow) {
      throw new Error("Simulated Exception");
    }
    return null;
  }

  // pages/release-notes/app/Components.module.css
  var Components_default = {
    main: "Components_main",
    card: "Components_card"
  };

  // pages/release-notes/app/sampleData.js
  var timestampInSeconds = Date.now() / 1e3;
  var sampleData = {
    loading: {
      status: "loading",
      currentVersion: "1.0.1",
      lastUpdate: timestampInSeconds - 24 * 60 * 60
    },
    loaded: {
      currentVersion: "1.0.1",
      latestVersion: "1.0.1",
      lastUpdate: timestampInSeconds,
      status: "loaded",
      releaseTitle: "May 20 2024",
      releaseNotes: [
        "Startup Boost Enabled! DuckDuckGo will now run a background task whenever you startup your computer to help it launch faster.",
        "Fixed an issue where Microsoft Teams links wouldn't open the Teams app.",
        "Improved credential autofill on websites in Dutch, French, German, Italian, Spanish, and Swedish."
      ],
      releaseNotesPrivacyPro: [
        "Personal Information Removal update! The list of data broker sites we can scan and remove your info from is growing.",
        "Privacy Pro is currently available to U.S. residents only"
      ]
    },
    updateReady: {
      currentVersion: "1.0.1",
      latestVersion: "1.2.0",
      lastUpdate: timestampInSeconds,
      status: "updateReady",
      automaticUpdate: true,
      releaseTitle: "June 20 2024",
      releaseNotes: [
        "Startup Boost Enabled! DuckDuckGo will now run a background task whenever you startup your computer to help it launch faster.",
        "Fixed an issue where Microsoft Teams links wouldn't open the Teams app.",
        "Improved credential autofill on websites in Dutch, French, German, Italian, Spanish, and Swedish."
      ],
      releaseNotesPrivacyPro: [
        "Personal Information Removal update! The list of data broker sites we can scan and remove your info from is growing.",
        "Privacy Pro is currently available to U.S. residents only"
      ]
    },
    criticalUpdateReady: {
      currentVersion: "1.0.1",
      latestVersion: "1.2.0",
      lastUpdate: timestampInSeconds,
      status: "criticalUpdateReady",
      automaticUpdate: true,
      releaseTitle: "June 20 2024",
      releaseNotes: [
        "Startup Boost Enabled! DuckDuckGo will now run a background task whenever you startup your computer to help it launch faster.",
        "Fixed an issue where Microsoft Teams links wouldn't open the Teams app.",
        "Improved credential autofill on websites in Dutch, French, German, Italian, Spanish, and Swedish."
      ],
      releaseNotesPrivacyPro: [
        "Personal Information Removal update! The list of data broker sites we can scan and remove your info from is growing.",
        "Privacy Pro is currently available to U.S. residents only"
      ]
    },
    updateError: {
      currentVersion: "1.0.1",
      latestVersion: "1.2.0",
      lastUpdate: timestampInSeconds,
      status: "updateError",
      releaseTitle: "June 20 2024",
      releaseNotes: [
        "Startup Boost Enabled! DuckDuckGo will now run a background task whenever you startup your computer to help it launch faster.",
        "Fixed an issue where Microsoft Teams links wouldn't open the Teams app.",
        "Improved credential autofill on websites in Dutch, French, German, Italian, Spanish, and Swedish."
      ],
      releaseNotesPrivacyPro: [
        "Personal Information Removal update! The list of data broker sites we can scan and remove your info from is growing.",
        "Privacy Pro is currently available to U.S. residents only"
      ]
    },
    updateDownloading: {
      currentVersion: "1.0.1",
      latestVersion: "1.2.0",
      lastUpdate: timestampInSeconds,
      status: "updateDownloading",
      downloadProgress: 0.74
    },
    updatePreparing: {
      currentVersion: "1.0.1",
      latestVersion: "1.2.0",
      lastUpdate: timestampInSeconds,
      status: "updatePreparing"
    }
  };

  // pages/release-notes/app/Components.js
  function Components() {
    const { t: t3 } = useTypedTranslation();
    const { isDarkMode } = useEnv();
    const todayInMilliseconds = Date.now();
    const yesterdayInMilliseconds = new Date(todayInMilliseconds - 24 * 60 * 60 * 1e3).getTime();
    const sampleNotesData = [
      {
        notes: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel viverra est. Ut non nisi lacus. Ut sodales leo sed ex condimentum tincidunt.",
          "Sed eget risus luctus, convallis sapien nec, tincidunt orci.",
          "Sed et lobortis enim. Curabitur sit amet placerat felis."
        ]
      },
      {
        icon: "PrivacyPro",
        title: t3("forPrivacyProSubscribers"),
        notes: [
          "Cras egestas, dui eu sodales congue, ex augue vehicula ipsum, sed egestas est justo in enim.",
          "Duis varius in ex at vestibulum. Morbi finibus fringilla urna, ac varius quam vestibulum sit amet.",
          "Morbi a ligula vel metus ultrices sodales quis vel velit."
        ]
      }
    ];
    return /* @__PURE__ */ _("main", { className: Components_default.main, "data-theme": isDarkMode ? "dark" : "light" }, /* @__PURE__ */ _("h1", null, "Release Notes Components"), /* @__PURE__ */ _("h2", null, "DuckDuckGo Logo"), /* @__PURE__ */ _(DuckDuckGoLogo, null), /* @__PURE__ */ _("hr", null), /* @__PURE__ */ _("h2", null, "Page Title"), /* @__PURE__ */ _(PageTitle, { title: t3("browserReleaseNotes") }), /* @__PURE__ */ _("hr", null), /* @__PURE__ */ _("h2", null, "Update Status"), /* @__PURE__ */ _(UpdateStatus, { status: "loading", version: "1.0.1", timestamp: yesterdayInMilliseconds }), /* @__PURE__ */ _(UpdateStatus, { status: "loaded", version: "1.0.1", timestamp: todayInMilliseconds }), /* @__PURE__ */ _(UpdateStatus, { status: "updateReady", version: "1.2.0", timestamp: todayInMilliseconds }), /* @__PURE__ */ _(UpdateStatus, { status: "criticalUpdateReady", version: "1.2.0", timestamp: todayInMilliseconds }), /* @__PURE__ */ _(UpdateStatus, { status: "updateError", version: "1.2.0", timestamp: todayInMilliseconds }), /* @__PURE__ */ _(UpdateStatus, { status: "updateDownloading", version: "1.2.0", timestamp: todayInMilliseconds, progress: 0.35 }), /* @__PURE__ */ _(UpdateStatus, { status: "updatePreparing", version: "1.2.0", timestamp: todayInMilliseconds }), /* @__PURE__ */ _("hr", null), /* @__PURE__ */ _("h2", null, "Update Buttons"), /* @__PURE__ */ _("div", null, /* @__PURE__ */ _(Button, null, t3("restartToUpdate"))), /* @__PURE__ */ _("div", null, /* @__PURE__ */ _(Button, null, t3("updateBrowser"))), /* @__PURE__ */ _("div", null, /* @__PURE__ */ _(Button, null, t3("retryUpdate"))), /* @__PURE__ */ _("hr", null), /* @__PURE__ */ _("h2", null, "Content Placeholder"), /* @__PURE__ */ _(ContentPlaceholder, null), /* @__PURE__ */ _("hr", null), /* @__PURE__ */ _("h2", null, "Release Notes Heading"), /* @__PURE__ */ _(ReleaseNotesHeading, { title: "May 10 2023", version: "1.0.0", showNewTag: false }), /* @__PURE__ */ _(ReleaseNotesHeading, { title: "May 10 2024", version: "1.2.0", showNewTag: true }), /* @__PURE__ */ _("hr", null), /* @__PURE__ */ _("h2", null, "Release Notes Subheading"), /* @__PURE__ */ _(ReleaseNotesSubheading, { title: "Release Notes Subheading without Icon" }), /* @__PURE__ */ _(ReleaseNotesSubheading, { icon: "PrivacyPro", title: "Release Notes Subheading with Privacy Pro Icon" }), /* @__PURE__ */ _("hr", null), /* @__PURE__ */ _("h2", null, "Release Notes List"), /* @__PURE__ */ _(ReleaseNotesList, { notes: sampleNotesData[0].notes }), /* @__PURE__ */ _("hr", null), /* @__PURE__ */ _("h2", null, "Content Placeholder Inside a Card"), /* @__PURE__ */ _(Card, { className: Components_default.card }, /* @__PURE__ */ _(ContentPlaceholder, null)), /* @__PURE__ */ _("hr", null), /* @__PURE__ */ _("h2", null, "Release Notes Inside a Card"), /* @__PURE__ */ _(Card, { className: Components_default.card }, /* @__PURE__ */ _(ReleaseNotesContent, { title: "May 10 2024", currentVersion: "1.0.1", latestVersion: "1.2.0", notes: sampleNotesData })), /* @__PURE__ */ _(ReleaseNotes, { releaseData: sampleData.loading }), /* @__PURE__ */ _(LoadingThen, null, /* @__PURE__ */ _(ReleaseNotes, { releaseData: sampleData.loaded })), /* @__PURE__ */ _(LoadingThen, null, /* @__PURE__ */ _(ReleaseNotes, { releaseData: sampleData.updateDownloading })), /* @__PURE__ */ _(LoadingThen, null, /* @__PURE__ */ _(ReleaseNotes, { releaseData: sampleData.updatePreparing })), /* @__PURE__ */ _(LoadingThen, null, /* @__PURE__ */ _(ReleaseNotes, { releaseData: sampleData.updateError })), /* @__PURE__ */ _(LoadingThen, null, /* @__PURE__ */ _(ReleaseNotes, { releaseData: sampleData.updateReady })), /* @__PURE__ */ _(LoadingThen, null, /* @__PURE__ */ _(ReleaseNotes, { releaseData: sampleData.criticalUpdateReady })), /* @__PURE__ */ _(LoadingThen, null, /* @__PURE__ */ _(
      ReleaseNotes,
      {
        releaseData: (
          /** @type {import('../types/release-notes.js').UpdateMessage} */
          {
            ...sampleData.updateReady,
            automaticUpdate: false
          }
        )
      }
    )));
  }
  function LoadingThen({ children }) {
    const [ready, setReady] = h2(false);
    y2(() => {
      setTimeout(() => setReady(true), 1e3);
    }, []);
    if (ready) return children;
    return /* @__PURE__ */ _(ReleaseNotes, { releaseData: sampleData.loading });
  }

  // shared/call-with-retry.js
  async function callWithRetry(fn, params = {}) {
    const { maxAttempts = 10, intervalMs = 300 } = params;
    let attempt = 1;
    while (attempt <= maxAttempts) {
      try {
        return { value: await fn(), attempt };
      } catch (error) {
        if (attempt === maxAttempts) {
          return { error: `Max attempts reached: ${error}` };
        }
        await new Promise((resolve) => setTimeout(resolve, intervalMs));
        attempt++;
      }
    }
    return { error: "Unreachable: value not retrieved" };
  }

  // pages/release-notes/public/locales/en/release-notes.json
  var release_notes_default = {
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
    browserReleaseNotes: {
      title: "What\u2019s New",
      note: "Page title for the Browser Release Notes page showing what's new in the current release"
    },
    versionNumber: {
      title: "Version {version}",
      note: "Text that contains the version number for the current release"
    },
    lastChecked: {
      title: "Last checked: {date}",
      note: "Text that contains the date and time of the last check for version updates"
    },
    todayAt: {
      title: "Today at {time}",
      note: "Text that marks an event as having happened today at a set time (ex: Today at 7:34pm)"
    },
    yesterdayAt: {
      title: "Yesterday at {time}",
      note: "Text that marks an event as having happened yesterday at a set time (ex: Yesterday at 7:34pm)"
    },
    browserUpToDate: {
      title: "DuckDuckGo is up to date",
      note: "Status text for when the browser is already up to date"
    },
    newVersionAvailable: {
      title: "A newer version of the browser is available",
      note: "Status text for when a new browser version is available"
    },
    criticallyOutOfDate: {
      title: "Critical update needed",
      note: "Status text for when a new browser version is available and the current version is very out of date"
    },
    checkingForUpdate: {
      title: "Checking for update",
      note: "Status text for when the browser is checking for a newer version"
    },
    updateError: {
      title: "Update failed",
      note: "Status text for when an error has occurred during the update process"
    },
    updateDownloading: {
      title: "Downloading update {progress}%",
      note: "Status text for when the browser is downloading a new update. {progress} is a placeholder for a number from 0 to 100 - the word {progress} should not be translated, but it should be placed in the appropriate position within the text. The percentage sign should also be placed correctly according to the locale (example: Downloading Update 74%)"
    },
    updatePreparing: {
      title: "Preparing update",
      note: "Status text for when the browser has finished downloading the update but is still installing it"
    },
    restartToUpdate: {
      title: "Restart To Update",
      note: "Label for a button that triggers a browser restart after a version update"
    },
    updateBrowser: {
      title: "Update DuckDuckGo",
      note: "Label for a button that triggers a manual browser update"
    },
    retryUpdate: {
      title: "Retry Update",
      note: "Label for a button that retries applying the failed update"
    },
    forPrivacyProSubscribers: {
      title: "For Privacy Pro Subscribers",
      note: "Heading label for release notes specific to Privacy Pro Subscribers (do not translate Privacy Pro)"
    },
    new: {
      title: "New",
      note: "Text for tag that appears next to version number to indicate it is newly released"
    },
    somethingWentWrong: {
      title: "Something went wrong",
      note: "A message shown when the application experienced a crash"
    }
  };

  // pages/release-notes/app/index.js
  var MessagingContext = G({
    messages: (
      /** @type {import('../src/index.js').ReleaseNotesPage | null} */
      null
    )
  });
  var useMessaging = () => x2(MessagingContext);
  async function init(messages, baseEnvironment2) {
    const result = await callWithRetry(() => messages.initialSetup());
    if ("error" in result) {
      throw new Error(result.error);
    }
    const init2 = result.value;
    const environment = baseEnvironment2.withEnv(init2.env).withLocale(init2.locale).withLocale(baseEnvironment2.urlParams.get("locale")).withTextLength(baseEnvironment2.urlParams.get("textLength")).withDisplay(baseEnvironment2.urlParams.get("display"));
    const strings = environment.locale === "en" ? release_notes_default : await fetch(`./locales/${environment.locale}/release-notes.json`).then((x3) => x3.json()).catch((e3) => {
      console.error("Could not load locale", environment.locale, e3);
      return release_notes_default;
    });
    const root = document.querySelector("#app");
    if (!root) throw new Error("could not render, root element missing");
    if (environment.display === "app") {
      B(
        /* @__PURE__ */ _(EnvironmentProvider, { debugState: environment.debugState, injectName: environment.injectName, willThrow: environment.willThrow }, /* @__PURE__ */ _(TranslationProvider, { translationObject: strings, fallback: release_notes_default, textLength: environment.textLength }, /* @__PURE__ */ _(MessagingContext.Provider, { value: { messages } }, /* @__PURE__ */ _(App, null)))),
        root
      );
    }
    if (environment.display === "components") {
      B(
        /* @__PURE__ */ _(EnvironmentProvider, { debugState: environment.debugState, injectName: environment.injectName, willThrow: environment.willThrow }, /* @__PURE__ */ _(TranslationProvider, { translationObject: strings, fallback: release_notes_default, textLength: environment.textLength }, /* @__PURE__ */ _(MessagingContext.Provider, { value: { messages } }, /* @__PURE__ */ _(Components, null)))),
        root
      );
    }
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
    _subscribe(comparator, options, callback) {
      if (options?.signal?.aborted) {
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
      options?.signal?.addEventListener("abort", abortHandler);
      teardown = () => {
        this.config.methods.removeEventListener("message", idHandler);
        options?.signal?.removeEventListener("abort", abortHandler);
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
      const { target, javascriptInterface } = this;
      if (Object.prototype.hasOwnProperty.call(target, javascriptInterface)) {
        this._capturedHandler = target[javascriptInterface].process.bind(target[javascriptInterface]);
        delete target[javascriptInterface];
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
            postMessage: globalThis.windowsInteropPostMessage,
            // @ts-expect-error - not in @types/chrome
            addEventListener: globalThis.windowsInteropAddEventListener,
            // @ts-expect-error - not in @types/chrome
            removeEventListener: globalThis.windowsInteropRemoveEventListener
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

  // pages/release-notes/src/mock-transport.js
  function mockTransport() {
    const dataOverrides = {
      manualUpdate: {
        automaticUpdate: false
      },
      noPrivacyPro: {
        releaseNotesPrivacyPro: void 0
      }
    };
    return new TestTransportConfig({
      notify(_msg) {
      },
      request(_msg) {
        window.__playwright_01?.mocks?.outgoing?.push?.({ payload: structuredClone(_msg) });
        const msg = (
          /** @type {any} */
          _msg
        );
        switch (msg.method) {
          case "initialSetup": {
            return Promise.resolve({
              env: "development",
              locale: "en"
            });
          }
          default:
            return Promise.resolve(null);
        }
      },
      subscribe(_msg, callback) {
        window.__playwright_01?.mocks?.outgoing?.push?.({ payload: structuredClone(_msg) });
        const subscription = (
          /** @type {any} */
          _msg.subscriptionName
        );
        switch (subscription) {
          case "onUpdate": {
            const searchParams = new URLSearchParams(window.location.search);
            let stateId = searchParams.get("stateId");
            if (!stateId || !sampleData[stateId]) {
              stateId = "loading";
            }
            let updateData = sampleData[stateId];
            Object.entries(dataOverrides).forEach(([key, value]) => {
              if (searchParams.has(key)) {
                updateData = { ...updateData, ...value };
              }
            });
            callback(sampleData.loading);
            const timer = setTimeout(() => {
              callback(updateData);
            }, 1e3);
            return () => {
              clearTimeout(timer);
            };
          }
        }
        return () => {
        };
      }
    });
  }

  // pages/release-notes/src/index.js
  var ReleaseNotesPage = class {
    /**
     * @param {import("@duckduckgo/messaging").Messaging} messaging
     * @internal
     */
    constructor(messaging2) {
      this.messaging = createTypedMessages(this, messaging2);
    }
    /**
     * Sends an initial message to the native layer. This is the opportunity for the native layer
     * to provide the initial state of the application or any configuration, for example:
     *
     * ```json
     * {
     *   "env": "development",
     *   "locale": "en"
     * }
     * ```
     *
     * @returns {Promise<InitResponse>}
     */
    async initialSetup() {
      return await this.messaging.request("initialSetup");
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
     * This will be sent if the application fails to load.
     * @param {{message: string}} params
     */
    reportInitException(params) {
      this.messaging.notify("reportInitException", params);
    }
    /**
     * Forwards a click on restart button to browser
     */
    browserRestart() {
      this.messaging.notify("browserRestart", {});
    }
    /**
     * Forwards a click on retry update button to browser
     */
    retryUpdate() {
      this.messaging.notify("retryUpdate", {});
    }
    /**
     * Subscribes to release info updates from browser
     * @param {(value: import('../types/release-notes.ts').UpdateMessage) => void} callback
     */
    onUpdate(callback) {
      return this.messaging.subscribe("onUpdate", callback);
    }
  };
  var baseEnvironment = new Environment().withInjectName(document.documentElement.dataset.platform).withEnv("production");
  var messaging = createSpecialPageMessaging({
    injectName: baseEnvironment.injectName,
    env: "production",
    pageName: "release-notes",
    mockTransport: () => {
      if (baseEnvironment.injectName !== "integration") return null;
      let mock = null;
      $INTEGRATION: mock = mockTransport();
      return mock;
    }
  });
  var releaseNotesPage = new ReleaseNotesPage(messaging);
  init(releaseNotesPage, baseEnvironment).catch((e3) => {
    console.error(e3);
    const msg = typeof e3?.message === "string" ? e3.message : "unknown init error";
    releaseNotesPage.reportInitException({ message: msg });
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
