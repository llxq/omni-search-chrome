var Fc = { exports: {} }, re = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fv;
function N1() {
  if (Fv) return re;
  Fv = 1;
  var O = Symbol.for("react.transitional.element"), cl = Symbol.for("react.fragment");
  function $(r, il, ol) {
    var sl = null;
    if (ol !== void 0 && (sl = "" + ol), il.key !== void 0 && (sl = "" + il.key), "key" in il) {
      ol = {};
      for (var Al in il)
        Al !== "key" && (ol[Al] = il[Al]);
    } else ol = il;
    return il = ol.ref, {
      $$typeof: O,
      type: r,
      key: sl,
      ref: il !== void 0 ? il : null,
      props: ol
    };
  }
  return re.Fragment = cl, re.jsx = $, re.jsxs = $, re;
}
var Iv;
function q1() {
  return Iv || (Iv = 1, Fc.exports = N1()), Fc.exports;
}
var jt = q1(), Ic = { exports: {} }, X = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pv;
function B1() {
  if (Pv) return X;
  Pv = 1;
  var O = Symbol.for("react.transitional.element"), cl = Symbol.for("react.portal"), $ = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), il = Symbol.for("react.profiler"), ol = Symbol.for("react.consumer"), sl = Symbol.for("react.context"), Al = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), E = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), k = Symbol.iterator;
  function P(s) {
    return s === null || typeof s != "object" ? null : (s = k && s[k] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var zl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, x = Object.assign, al = {};
  function K(s, A, M) {
    this.props = s, this.context = A, this.refs = al, this.updater = M || zl;
  }
  K.prototype.isReactComponent = {}, K.prototype.setState = function(s, A) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, s, A, "setState");
  }, K.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function rl() {
  }
  rl.prototype = K.prototype;
  function ht(s, A, M) {
    this.props = s, this.context = A, this.refs = al, this.updater = M || zl;
  }
  var Sl = ht.prototype = new rl();
  Sl.constructor = ht, x(Sl, K.prototype), Sl.isPureReactComponent = !0;
  var Zl = Array.isArray, V = { H: null, A: null, T: null, S: null, V: null }, Bl = Object.prototype.hasOwnProperty;
  function Jl(s, A, M, z, N, J) {
    return M = J.ref, {
      $$typeof: O,
      type: s,
      key: A,
      ref: M !== void 0 ? M : null,
      props: J
    };
  }
  function wl(s, A) {
    return Jl(
      s.type,
      A,
      void 0,
      void 0,
      void 0,
      s.props
    );
  }
  function gt(s) {
    return typeof s == "object" && s !== null && s.$$typeof === O;
  }
  function Bu(s) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(M) {
      return A[M];
    });
  }
  var Ot = /\/+/g;
  function Yl(s, A) {
    return typeof s == "object" && s !== null && s.key != null ? Bu("" + s.key) : A.toString(36);
  }
  function ou() {
  }
  function hu(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(ou, ou) : (s.status = "pending", s.then(
          function(A) {
            s.status === "pending" && (s.status = "fulfilled", s.value = A);
          },
          function(A) {
            s.status === "pending" && (s.status = "rejected", s.reason = A);
          }
        )), s.status) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function pl(s, A, M, z, N) {
    var J = typeof s;
    (J === "undefined" || J === "boolean") && (s = null);
    var G = !1;
    if (s === null) G = !0;
    else
      switch (J) {
        case "bigint":
        case "string":
        case "number":
          G = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case O:
            case cl:
              G = !0;
              break;
            case H:
              return G = s._init, pl(
                G(s._payload),
                A,
                M,
                z,
                N
              );
          }
      }
    if (G)
      return N = N(s), G = z === "" ? "." + Yl(s, 0) : z, Zl(N) ? (M = "", G != null && (M = G.replace(Ot, "$&/") + "/"), pl(N, A, M, "", function(Ct) {
        return Ct;
      })) : N != null && (gt(N) && (N = wl(
        N,
        M + (N.key == null || s && s.key === N.key ? "" : ("" + N.key).replace(
          Ot,
          "$&/"
        ) + "/") + G
      )), A.push(N)), 1;
    G = 0;
    var kl = z === "" ? "." : z + ":";
    if (Zl(s))
      for (var vl = 0; vl < s.length; vl++)
        z = s[vl], J = kl + Yl(z, vl), G += pl(
          z,
          A,
          M,
          J,
          N
        );
    else if (vl = P(s), typeof vl == "function")
      for (s = vl.call(s), vl = 0; !(z = s.next()).done; )
        z = z.value, J = kl + Yl(z, vl++), G += pl(
          z,
          A,
          M,
          J,
          N
        );
    else if (J === "object") {
      if (typeof s.then == "function")
        return pl(
          hu(s),
          A,
          M,
          z,
          N
        );
      throw A = String(s), Error(
        "Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return G;
  }
  function g(s, A, M) {
    if (s == null) return s;
    var z = [], N = 0;
    return pl(s, z, "", "", function(J) {
      return A.call(M, J, N++);
    }), z;
  }
  function _(s) {
    if (s._status === -1) {
      var A = s._result;
      A = A(), A.then(
        function(M) {
          (s._status === 0 || s._status === -1) && (s._status = 1, s._result = M);
        },
        function(M) {
          (s._status === 0 || s._status === -1) && (s._status = 2, s._result = M);
        }
      ), s._status === -1 && (s._status = 0, s._result = A);
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var Y = typeof reportError == "function" ? reportError : function(s) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var A = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
        error: s
      });
      if (!window.dispatchEvent(A)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", s);
      return;
    }
    console.error(s);
  };
  function el() {
  }
  return X.Children = {
    map: g,
    forEach: function(s, A, M) {
      g(
        s,
        function() {
          A.apply(this, arguments);
        },
        M
      );
    },
    count: function(s) {
      var A = 0;
      return g(s, function() {
        A++;
      }), A;
    },
    toArray: function(s) {
      return g(s, function(A) {
        return A;
      }) || [];
    },
    only: function(s) {
      if (!gt(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  }, X.Component = K, X.Fragment = $, X.Profiler = il, X.PureComponent = ht, X.StrictMode = r, X.Suspense = U, X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V, X.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(s) {
      return V.H.useMemoCache(s);
    }
  }, X.cache = function(s) {
    return function() {
      return s.apply(null, arguments);
    };
  }, X.cloneElement = function(s, A, M) {
    if (s == null)
      throw Error(
        "The argument must be a React element, but you passed " + s + "."
      );
    var z = x({}, s.props), N = s.key, J = void 0;
    if (A != null)
      for (G in A.ref !== void 0 && (J = void 0), A.key !== void 0 && (N = "" + A.key), A)
        !Bl.call(A, G) || G === "key" || G === "__self" || G === "__source" || G === "ref" && A.ref === void 0 || (z[G] = A[G]);
    var G = arguments.length - 2;
    if (G === 1) z.children = M;
    else if (1 < G) {
      for (var kl = Array(G), vl = 0; vl < G; vl++)
        kl[vl] = arguments[vl + 2];
      z.children = kl;
    }
    return Jl(s.type, N, void 0, void 0, J, z);
  }, X.createContext = function(s) {
    return s = {
      $$typeof: sl,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: ol,
      _context: s
    }, s;
  }, X.createElement = function(s, A, M) {
    var z, N = {}, J = null;
    if (A != null)
      for (z in A.key !== void 0 && (J = "" + A.key), A)
        Bl.call(A, z) && z !== "key" && z !== "__self" && z !== "__source" && (N[z] = A[z]);
    var G = arguments.length - 2;
    if (G === 1) N.children = M;
    else if (1 < G) {
      for (var kl = Array(G), vl = 0; vl < G; vl++)
        kl[vl] = arguments[vl + 2];
      N.children = kl;
    }
    if (s && s.defaultProps)
      for (z in G = s.defaultProps, G)
        N[z] === void 0 && (N[z] = G[z]);
    return Jl(s, J, void 0, void 0, null, N);
  }, X.createRef = function() {
    return { current: null };
  }, X.forwardRef = function(s) {
    return { $$typeof: Al, render: s };
  }, X.isValidElement = gt, X.lazy = function(s) {
    return {
      $$typeof: H,
      _payload: { _status: -1, _result: s },
      _init: _
    };
  }, X.memo = function(s, A) {
    return {
      $$typeof: E,
      type: s,
      compare: A === void 0 ? null : A
    };
  }, X.startTransition = function(s) {
    var A = V.T, M = {};
    V.T = M;
    try {
      var z = s(), N = V.S;
      N !== null && N(M, z), typeof z == "object" && z !== null && typeof z.then == "function" && z.then(el, Y);
    } catch (J) {
      Y(J);
    } finally {
      V.T = A;
    }
  }, X.unstable_useCacheRefresh = function() {
    return V.H.useCacheRefresh();
  }, X.use = function(s) {
    return V.H.use(s);
  }, X.useActionState = function(s, A, M) {
    return V.H.useActionState(s, A, M);
  }, X.useCallback = function(s, A) {
    return V.H.useCallback(s, A);
  }, X.useContext = function(s) {
    return V.H.useContext(s);
  }, X.useDebugValue = function() {
  }, X.useDeferredValue = function(s, A) {
    return V.H.useDeferredValue(s, A);
  }, X.useEffect = function(s, A, M) {
    var z = V.H;
    if (typeof M == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return z.useEffect(s, A);
  }, X.useId = function() {
    return V.H.useId();
  }, X.useImperativeHandle = function(s, A, M) {
    return V.H.useImperativeHandle(s, A, M);
  }, X.useInsertionEffect = function(s, A) {
    return V.H.useInsertionEffect(s, A);
  }, X.useLayoutEffect = function(s, A) {
    return V.H.useLayoutEffect(s, A);
  }, X.useMemo = function(s, A) {
    return V.H.useMemo(s, A);
  }, X.useOptimistic = function(s, A) {
    return V.H.useOptimistic(s, A);
  }, X.useReducer = function(s, A, M) {
    return V.H.useReducer(s, A, M);
  }, X.useRef = function(s) {
    return V.H.useRef(s);
  }, X.useState = function(s) {
    return V.H.useState(s);
  }, X.useSyncExternalStore = function(s, A, M) {
    return V.H.useSyncExternalStore(
      s,
      A,
      M
    );
  }, X.useTransition = function() {
    return V.H.useTransition();
  }, X.version = "19.1.1", X;
}
var ly;
function ei() {
  return ly || (ly = 1, Ic.exports = B1()), Ic.exports;
}
var et = ei(), Pc = { exports: {} }, Se = {}, li = { exports: {} }, ti = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ty;
function Y1() {
  return ty || (ty = 1, (function(O) {
    function cl(g, _) {
      var Y = g.length;
      g.push(_);
      l: for (; 0 < Y; ) {
        var el = Y - 1 >>> 1, s = g[el];
        if (0 < il(s, _))
          g[el] = _, g[Y] = s, Y = el;
        else break l;
      }
    }
    function $(g) {
      return g.length === 0 ? null : g[0];
    }
    function r(g) {
      if (g.length === 0) return null;
      var _ = g[0], Y = g.pop();
      if (Y !== _) {
        g[0] = Y;
        l: for (var el = 0, s = g.length, A = s >>> 1; el < A; ) {
          var M = 2 * (el + 1) - 1, z = g[M], N = M + 1, J = g[N];
          if (0 > il(z, Y))
            N < s && 0 > il(J, z) ? (g[el] = J, g[N] = Y, el = N) : (g[el] = z, g[M] = Y, el = M);
          else if (N < s && 0 > il(J, Y))
            g[el] = J, g[N] = Y, el = N;
          else break l;
        }
      }
      return _;
    }
    function il(g, _) {
      var Y = g.sortIndex - _.sortIndex;
      return Y !== 0 ? Y : g.id - _.id;
    }
    if (O.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var ol = performance;
      O.unstable_now = function() {
        return ol.now();
      };
    } else {
      var sl = Date, Al = sl.now();
      O.unstable_now = function() {
        return sl.now() - Al;
      };
    }
    var U = [], E = [], H = 1, k = null, P = 3, zl = !1, x = !1, al = !1, K = !1, rl = typeof setTimeout == "function" ? setTimeout : null, ht = typeof clearTimeout == "function" ? clearTimeout : null, Sl = typeof setImmediate < "u" ? setImmediate : null;
    function Zl(g) {
      for (var _ = $(E); _ !== null; ) {
        if (_.callback === null) r(E);
        else if (_.startTime <= g)
          r(E), _.sortIndex = _.expirationTime, cl(U, _);
        else break;
        _ = $(E);
      }
    }
    function V(g) {
      if (al = !1, Zl(g), !x)
        if ($(U) !== null)
          x = !0, Bl || (Bl = !0, Yl());
        else {
          var _ = $(E);
          _ !== null && pl(V, _.startTime - g);
        }
    }
    var Bl = !1, Jl = -1, wl = 5, gt = -1;
    function Bu() {
      return K ? !0 : !(O.unstable_now() - gt < wl);
    }
    function Ot() {
      if (K = !1, Bl) {
        var g = O.unstable_now();
        gt = g;
        var _ = !0;
        try {
          l: {
            x = !1, al && (al = !1, ht(Jl), Jl = -1), zl = !0;
            var Y = P;
            try {
              t: {
                for (Zl(g), k = $(U); k !== null && !(k.expirationTime > g && Bu()); ) {
                  var el = k.callback;
                  if (typeof el == "function") {
                    k.callback = null, P = k.priorityLevel;
                    var s = el(
                      k.expirationTime <= g
                    );
                    if (g = O.unstable_now(), typeof s == "function") {
                      k.callback = s, Zl(g), _ = !0;
                      break t;
                    }
                    k === $(U) && r(U), Zl(g);
                  } else r(U);
                  k = $(U);
                }
                if (k !== null) _ = !0;
                else {
                  var A = $(E);
                  A !== null && pl(
                    V,
                    A.startTime - g
                  ), _ = !1;
                }
              }
              break l;
            } finally {
              k = null, P = Y, zl = !1;
            }
            _ = void 0;
          }
        } finally {
          _ ? Yl() : Bl = !1;
        }
      }
    }
    var Yl;
    if (typeof Sl == "function")
      Yl = function() {
        Sl(Ot);
      };
    else if (typeof MessageChannel < "u") {
      var ou = new MessageChannel(), hu = ou.port2;
      ou.port1.onmessage = Ot, Yl = function() {
        hu.postMessage(null);
      };
    } else
      Yl = function() {
        rl(Ot, 0);
      };
    function pl(g, _) {
      Jl = rl(function() {
        g(O.unstable_now());
      }, _);
    }
    O.unstable_IdlePriority = 5, O.unstable_ImmediatePriority = 1, O.unstable_LowPriority = 4, O.unstable_NormalPriority = 3, O.unstable_Profiling = null, O.unstable_UserBlockingPriority = 2, O.unstable_cancelCallback = function(g) {
      g.callback = null;
    }, O.unstable_forceFrameRate = function(g) {
      0 > g || 125 < g ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : wl = 0 < g ? Math.floor(1e3 / g) : 5;
    }, O.unstable_getCurrentPriorityLevel = function() {
      return P;
    }, O.unstable_next = function(g) {
      switch (P) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = P;
      }
      var Y = P;
      P = _;
      try {
        return g();
      } finally {
        P = Y;
      }
    }, O.unstable_requestPaint = function() {
      K = !0;
    }, O.unstable_runWithPriority = function(g, _) {
      switch (g) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          g = 3;
      }
      var Y = P;
      P = g;
      try {
        return _();
      } finally {
        P = Y;
      }
    }, O.unstable_scheduleCallback = function(g, _, Y) {
      var el = O.unstable_now();
      switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? el + Y : el) : Y = el, g) {
        case 1:
          var s = -1;
          break;
        case 2:
          s = 250;
          break;
        case 5:
          s = 1073741823;
          break;
        case 4:
          s = 1e4;
          break;
        default:
          s = 5e3;
      }
      return s = Y + s, g = {
        id: H++,
        callback: _,
        priorityLevel: g,
        startTime: Y,
        expirationTime: s,
        sortIndex: -1
      }, Y > el ? (g.sortIndex = Y, cl(E, g), $(U) === null && g === $(E) && (al ? (ht(Jl), Jl = -1) : al = !0, pl(V, Y - el))) : (g.sortIndex = s, cl(U, g), x || zl || (x = !0, Bl || (Bl = !0, Yl()))), g;
    }, O.unstable_shouldYield = Bu, O.unstable_wrapCallback = function(g) {
      var _ = P;
      return function() {
        var Y = P;
        P = _;
        try {
          return g.apply(this, arguments);
        } finally {
          P = Y;
        }
      };
    };
  })(ti)), ti;
}
var uy;
function p1() {
  return uy || (uy = 1, li.exports = Y1()), li.exports;
}
var ui = { exports: {} }, Ql = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ay;
function G1() {
  if (ay) return Ql;
  ay = 1;
  var O = ei();
  function cl(U) {
    var E = "https://react.dev/errors/" + U;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var H = 2; H < arguments.length; H++)
        E += "&args[]=" + encodeURIComponent(arguments[H]);
    }
    return "Minified React error #" + U + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function $() {
  }
  var r = {
    d: {
      f: $,
      r: function() {
        throw Error(cl(522));
      },
      D: $,
      C: $,
      L: $,
      m: $,
      X: $,
      S: $,
      M: $
    },
    p: 0,
    findDOMNode: null
  }, il = Symbol.for("react.portal");
  function ol(U, E, H) {
    var k = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: il,
      key: k == null ? null : "" + k,
      children: U,
      containerInfo: E,
      implementation: H
    };
  }
  var sl = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Al(U, E) {
    if (U === "font") return "";
    if (typeof E == "string")
      return E === "use-credentials" ? E : "";
  }
  return Ql.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Ql.createPortal = function(U, E) {
    var H = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
      throw Error(cl(299));
    return ol(U, E, null, H);
  }, Ql.flushSync = function(U) {
    var E = sl.T, H = r.p;
    try {
      if (sl.T = null, r.p = 2, U) return U();
    } finally {
      sl.T = E, r.p = H, r.d.f();
    }
  }, Ql.preconnect = function(U, E) {
    typeof U == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, r.d.C(U, E));
  }, Ql.prefetchDNS = function(U) {
    typeof U == "string" && r.d.D(U);
  }, Ql.preinit = function(U, E) {
    if (typeof U == "string" && E && typeof E.as == "string") {
      var H = E.as, k = Al(H, E.crossOrigin), P = typeof E.integrity == "string" ? E.integrity : void 0, zl = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      H === "style" ? r.d.S(
        U,
        typeof E.precedence == "string" ? E.precedence : void 0,
        {
          crossOrigin: k,
          integrity: P,
          fetchPriority: zl
        }
      ) : H === "script" && r.d.X(U, {
        crossOrigin: k,
        integrity: P,
        fetchPriority: zl,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0
      });
    }
  }, Ql.preinitModule = function(U, E) {
    if (typeof U == "string")
      if (typeof E == "object" && E !== null) {
        if (E.as == null || E.as === "script") {
          var H = Al(
            E.as,
            E.crossOrigin
          );
          r.d.M(U, {
            crossOrigin: H,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
            nonce: typeof E.nonce == "string" ? E.nonce : void 0
          });
        }
      } else E == null && r.d.M(U);
  }, Ql.preload = function(U, E) {
    if (typeof U == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var H = E.as, k = Al(H, E.crossOrigin);
      r.d.L(U, H, {
        crossOrigin: k,
        integrity: typeof E.integrity == "string" ? E.integrity : void 0,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0,
        type: typeof E.type == "string" ? E.type : void 0,
        fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
        referrerPolicy: typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
        imageSrcSet: typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
        imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
        media: typeof E.media == "string" ? E.media : void 0
      });
    }
  }, Ql.preloadModule = function(U, E) {
    if (typeof U == "string")
      if (E) {
        var H = Al(E.as, E.crossOrigin);
        r.d.m(U, {
          as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
          crossOrigin: H,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0
        });
      } else r.d.m(U);
  }, Ql.requestFormReset = function(U) {
    r.d.r(U);
  }, Ql.unstable_batchedUpdates = function(U, E) {
    return U(E);
  }, Ql.useFormState = function(U, E, H) {
    return sl.H.useFormState(U, E, H);
  }, Ql.useFormStatus = function() {
    return sl.H.useHostTransitionStatus();
  }, Ql.version = "19.1.1", Ql;
}
var ey;
function X1() {
  if (ey) return ui.exports;
  ey = 1;
  function O() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O);
      } catch (cl) {
        console.error(cl);
      }
  }
  return O(), ui.exports = G1(), ui.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ny;
function Q1() {
  if (ny) return Se;
  ny = 1;
  var O = p1(), cl = ei(), $ = X1();
  function r(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function il(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function ol(l) {
    var t = l, u = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (u = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? u : null;
  }
  function sl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Al(l) {
    if (ol(l) !== l)
      throw Error(r(188));
  }
  function U(l) {
    var t = l.alternate;
    if (!t) {
      if (t = ol(l), t === null) throw Error(r(188));
      return t !== l ? null : l;
    }
    for (var u = l, a = t; ; ) {
      var e = u.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (a = e.return, a !== null) {
          u = a;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === u) return Al(e), l;
          if (n === a) return Al(e), t;
          n = n.sibling;
        }
        throw Error(r(188));
      }
      if (u.return !== a.return) u = e, a = n;
      else {
        for (var f = !1, c = e.child; c; ) {
          if (c === u) {
            f = !0, u = e, a = n;
            break;
          }
          if (c === a) {
            f = !0, a = e, u = n;
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === u) {
              f = !0, u = n, a = e;
              break;
            }
            if (c === a) {
              f = !0, a = n, u = e;
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(r(189));
        }
      }
      if (u.alternate !== a) throw Error(r(190));
    }
    if (u.tag !== 3) throw Error(r(188));
    return u.stateNode.current === u ? l : t;
  }
  function E(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = E(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var H = Object.assign, k = Symbol.for("react.element"), P = Symbol.for("react.transitional.element"), zl = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), al = Symbol.for("react.strict_mode"), K = Symbol.for("react.profiler"), rl = Symbol.for("react.provider"), ht = Symbol.for("react.consumer"), Sl = Symbol.for("react.context"), Zl = Symbol.for("react.forward_ref"), V = Symbol.for("react.suspense"), Bl = Symbol.for("react.suspense_list"), Jl = Symbol.for("react.memo"), wl = Symbol.for("react.lazy"), gt = Symbol.for("react.activity"), Bu = Symbol.for("react.memo_cache_sentinel"), Ot = Symbol.iterator;
  function Yl(l) {
    return l === null || typeof l != "object" ? null : (l = Ot && l[Ot] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var ou = Symbol.for("react.client.reference");
  function hu(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === ou ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case x:
        return "Fragment";
      case K:
        return "Profiler";
      case al:
        return "StrictMode";
      case V:
        return "Suspense";
      case Bl:
        return "SuspenseList";
      case gt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case zl:
          return "Portal";
        case Sl:
          return (l.displayName || "Context") + ".Provider";
        case ht:
          return (l._context.displayName || "Context") + ".Consumer";
        case Zl:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Jl:
          return t = l.displayName || null, t !== null ? t : hu(l.type) || "Memo";
        case wl:
          t = l._payload, l = l._init;
          try {
            return hu(l(t));
          } catch {
          }
      }
    return null;
  }
  var pl = Array.isArray, g = cl.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = $.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, el = [], s = -1;
  function A(l) {
    return { current: l };
  }
  function M(l) {
    0 > s || (l.current = el[s], el[s] = null, s--);
  }
  function z(l, t) {
    s++, el[s] = l.current, l.current = t;
  }
  var N = A(null), J = A(null), G = A(null), kl = A(null);
  function vl(l, t) {
    switch (z(G, t), z(J, l), z(N, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Ov(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = Ov(t), l = Mv(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    M(N), z(N, l);
  }
  function Ct() {
    M(N), M(J), M(G);
  }
  function pn(l) {
    l.memoizedState !== null && z(kl, l);
    var t = N.current, u = Mv(t, l.type);
    t !== u && (z(J, l), z(N, u));
  }
  function ge(l) {
    J.current === l && (M(N), M(J)), kl.current === l && (M(kl), ye._currentValue = Y);
  }
  var Gn = Object.prototype.hasOwnProperty, Xn = O.unstable_scheduleCallback, Qn = O.unstable_cancelCallback, sy = O.unstable_shouldYield, vy = O.unstable_requestPaint, bt = O.unstable_now, yy = O.unstable_getCurrentPriorityLevel, ni = O.unstable_ImmediatePriority, fi = O.unstable_UserBlockingPriority, be = O.unstable_NormalPriority, dy = O.unstable_LowPriority, ci = O.unstable_IdlePriority, oy = O.log, hy = O.unstable_setDisableYieldValue, ba = null, Wl = null;
  function Vt(l) {
    if (typeof oy == "function" && hy(l), Wl && typeof Wl.setStrictMode == "function")
      try {
        Wl.setStrictMode(ba, l);
      } catch {
      }
  }
  var $l = Math.clz32 ? Math.clz32 : Sy, my = Math.log, ry = Math.LN2;
  function Sy(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (my(l) / ry | 0) | 0;
  }
  var Te = 256, Ee = 4194304;
  function mu(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Ae(l, t, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~n, a !== 0 ? e = mu(a) : (f &= c, f !== 0 ? e = mu(f) : u || (u = c & ~l, u !== 0 && (e = mu(u))))) : (c = a & ~n, c !== 0 ? e = mu(c) : f !== 0 ? e = mu(f) : u || (u = a & ~l, u !== 0 && (e = mu(u)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, u = t & -t, n >= u || n === 32 && (u & 4194048) !== 0) ? t : e;
  }
  function Ta(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function gy(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ii() {
    var l = Te;
    return Te <<= 1, (Te & 4194048) === 0 && (Te = 256), l;
  }
  function si() {
    var l = Ee;
    return Ee <<= 1, (Ee & 62914560) === 0 && (Ee = 4194304), l;
  }
  function xn(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function Ea(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function by(l, t, u, a, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, o = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var S = 31 - $l(u), T = 1 << S;
      c[S] = 0, i[S] = -1;
      var h = o[S];
      if (h !== null)
        for (o[S] = null, S = 0; S < h.length; S++) {
          var m = h[S];
          m !== null && (m.lane &= -536870913);
        }
      u &= ~T;
    }
    a !== 0 && vi(l, a, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function vi(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - $l(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | u & 4194090;
  }
  function yi(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var a = 31 - $l(u), e = 1 << a;
      e & t | l[a] & t && (l[a] |= t), u &= ~e;
    }
  }
  function Zn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function jn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function di() {
    var l = _.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Kv(l.type));
  }
  function Ty(l, t) {
    var u = _.p;
    try {
      return _.p = l, t();
    } finally {
      _.p = u;
    }
  }
  var Lt = Math.random().toString(36).slice(2), Gl = "__reactFiber$" + Lt, jl = "__reactProps$" + Lt, Yu = "__reactContainer$" + Lt, Cn = "__reactEvents$" + Lt, Ey = "__reactListeners$" + Lt, Ay = "__reactHandles$" + Lt, oi = "__reactResources$" + Lt, Aa = "__reactMarker$" + Lt;
  function Vn(l) {
    delete l[Gl], delete l[jl], delete l[Cn], delete l[Ey], delete l[Ay];
  }
  function pu(l) {
    var t = l[Gl];
    if (t) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[Yu] || u[Gl]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null)
          for (l = Hv(l); l !== null; ) {
            if (u = l[Gl]) return u;
            l = Hv(l);
          }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Gu(l) {
    if (l = l[Gl] || l[Yu]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function za(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(r(33));
  }
  function Xu(l) {
    var t = l[oi];
    return t || (t = l[oi] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Ml(l) {
    l[Aa] = !0;
  }
  var hi = /* @__PURE__ */ new Set(), mi = {};
  function ru(l, t) {
    Qu(l, t), Qu(l + "Capture", t);
  }
  function Qu(l, t) {
    for (mi[l] = t, l = 0; l < t.length; l++)
      hi.add(t[l]);
  }
  var zy = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ri = {}, Si = {};
  function _y(l) {
    return Gn.call(Si, l) ? !0 : Gn.call(ri, l) ? !1 : zy.test(l) ? Si[l] = !0 : (ri[l] = !0, !1);
  }
  function ze(l, t, u) {
    if (_y(t))
      if (u === null) l.removeAttribute(t);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + u);
      }
  }
  function _e(l, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + u);
    }
  }
  function Mt(l, t, u, a) {
    if (a === null) l.removeAttribute(u);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(t, u, "" + a);
    }
  }
  var Ln, gi;
  function xu(l) {
    if (Ln === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        Ln = t && t[1] || "", gi = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ln + l + gi;
  }
  var Kn = !1;
  function Jn(l, t) {
    if (!l || Kn) return "";
    Kn = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var T = function() {
                throw Error();
              };
              if (Object.defineProperty(T.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(T, []);
                } catch (m) {
                  var h = m;
                }
                Reflect.construct(l, [], T);
              } else {
                try {
                  T.call();
                } catch (m) {
                  h = m;
                }
                l.call(T.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (m) {
                h = m;
              }
              (T = l()) && typeof T.catch == "function" && T.catch(function() {
              });
            }
          } catch (m) {
            if (m && h && typeof m.stack == "string")
              return [m.stack, h.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = a.DetermineComponentFrameRoot(), f = n[0], c = n[1];
      if (f && c) {
        var i = f.split(`
`), o = c.split(`
`);
        for (e = a = 0; a < i.length && !i[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; e < o.length && !o[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (a === i.length || e === o.length)
          for (a = i.length - 1, e = o.length - 1; 1 <= a && 0 <= e && i[a] !== o[e]; )
            e--;
        for (; 1 <= a && 0 <= e; a--, e--)
          if (i[a] !== o[e]) {
            if (a !== 1 || e !== 1)
              do
                if (a--, e--, 0 > e || i[a] !== o[e]) {
                  var S = `
` + i[a].replace(" at new ", " at ");
                  return l.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", l.displayName)), S;
                }
              while (1 <= a && 0 <= e);
            break;
          }
      }
    } finally {
      Kn = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? xu(u) : "";
  }
  function Oy(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return xu(l.type);
      case 16:
        return xu("Lazy");
      case 13:
        return xu("Suspense");
      case 19:
        return xu("SuspenseList");
      case 0:
      case 15:
        return Jn(l.type, !1);
      case 11:
        return Jn(l.type.render, !1);
      case 1:
        return Jn(l.type, !0);
      case 31:
        return xu("Activity");
      default:
        return "";
    }
  }
  function bi(l) {
    try {
      var t = "";
      do
        t += Oy(l), l = l.return;
      while (l);
      return t;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function nt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Ti(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function My(l) {
    var t = Ti(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    ), a = "" + l[t];
    if (!l.hasOwnProperty(t) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var e = u.get, n = u.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(f) {
          a = "" + f, n.call(this, f);
        }
      }), Object.defineProperty(l, t, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(f) {
          a = "" + f;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function Oe(l) {
    l._valueTracker || (l._valueTracker = My(l));
  }
  function Ei(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(), a = "";
    return l && (a = Ti(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== u ? (t.setValue(l), !0) : !1;
  }
  function Me(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Dy = /[\n"\\]/g;
  function ft(l) {
    return l.replace(
      Dy,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function wn(l, t, u, a, e, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + nt(t)) : l.value !== "" + nt(t) && (l.value = "" + nt(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? kn(l, f, nt(t)) : u != null ? kn(l, f, nt(u)) : a != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + nt(c) : l.removeAttribute("name");
  }
  function Ai(l, t, u, a, e, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null))
        return;
      u = u != null ? "" + nt(u) : "", t = t != null ? "" + nt(t) : u, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? e, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f);
  }
  function kn(l, t, u) {
    t === "number" && Me(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Zu(l, t, u, a) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < u.length; e++)
        t["$" + u[e]] = !0;
      for (u = 0; u < l.length; u++)
        e = t.hasOwnProperty("$" + l[u].value), l[u].selected !== e && (l[u].selected = e), e && a && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + nt(u), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === u) {
          l[e].selected = !0, a && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function zi(l, t, u) {
    if (t != null && (t = "" + nt(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + nt(u) : "";
  }
  function _i(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(r(92));
        if (pl(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), t = u;
    }
    u = nt(t), l.defaultValue = u, a = l.textContent, a === u && a !== "" && a !== null && (l.value = a);
  }
  function ju(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Uy = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Oi(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, u) : typeof u != "number" || u === 0 || Uy.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
  }
  function Mi(l, t, u) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (l = l.style, u != null) {
      for (var a in u)
        !u.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var e in t)
        a = t[e], t.hasOwnProperty(e) && u[e] !== a && Oi(l, e, a);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && Oi(l, n, t[n]);
  }
  function Wn(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ry = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Hy = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function De(l) {
    return Hy.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var $n = null;
  function Fn(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Cu = null, Vu = null;
  function Di(l) {
    var t = Gu(l);
    if (t && (l = t.stateNode)) {
      var u = l[jl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (wn(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), t = u.name, u.type === "radio" && t != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + ft(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < u.length; t++) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e = a[jl] || null;
                if (!e) throw Error(r(90));
                wn(
                  a,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < u.length; t++)
              a = u[t], a.form === l.form && Ei(a);
          }
          break l;
        case "textarea":
          zi(l, u.value, u.defaultValue);
          break l;
        case "select":
          t = u.value, t != null && Zu(l, !!u.multiple, t, !1);
      }
    }
  }
  var In = !1;
  function Ui(l, t, u) {
    if (In) return l(t, u);
    In = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (In = !1, (Cu !== null || Vu !== null) && (on(), Cu && (t = Cu, l = Vu, Vu = Cu = null, Di(t), l)))
        for (t = 0; t < l.length; t++) Di(l[t]);
    }
  }
  function _a(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[jl] || null;
    if (a === null) return null;
    u = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        r(231, t, typeof u)
      );
    return u;
  }
  var Dt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Pn = !1;
  if (Dt)
    try {
      var Oa = {};
      Object.defineProperty(Oa, "passive", {
        get: function() {
          Pn = !0;
        }
      }), window.addEventListener("test", Oa, Oa), window.removeEventListener("test", Oa, Oa);
    } catch {
      Pn = !1;
    }
  var Kt = null, lf = null, Ue = null;
  function Ri() {
    if (Ue) return Ue;
    var l, t = lf, u = t.length, a, e = "value" in Kt ? Kt.value : Kt.textContent, n = e.length;
    for (l = 0; l < u && t[l] === e[l]; l++) ;
    var f = u - l;
    for (a = 1; a <= f && t[u - a] === e[n - a]; a++) ;
    return Ue = e.slice(l, 1 < a ? 1 - a : void 0);
  }
  function Re(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function He() {
    return !0;
  }
  function Hi() {
    return !1;
  }
  function Cl(l) {
    function t(u, a, e, n, f) {
      this._reactName = u, this._targetInst = e, this.type = a, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (u = l[c], this[c] = u ? u(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? He : Hi, this.isPropagationStopped = Hi, this;
    }
    return H(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = He);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = He);
      },
      persist: function() {
      },
      isPersistent: He
    }), t;
  }
  var Su = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ne = Cl(Su), Ma = H({}, Su, { view: 0, detail: 0 }), Ny = Cl(Ma), tf, uf, Da, qe = H({}, Ma, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ef,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Da && (Da && l.type === "mousemove" ? (tf = l.screenX - Da.screenX, uf = l.screenY - Da.screenY) : uf = tf = 0, Da = l), tf);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : uf;
    }
  }), Ni = Cl(qe), qy = H({}, qe, { dataTransfer: 0 }), By = Cl(qy), Yy = H({}, Ma, { relatedTarget: 0 }), af = Cl(Yy), py = H({}, Su, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Gy = Cl(py), Xy = H({}, Su, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Qy = Cl(Xy), xy = H({}, Su, { data: 0 }), qi = Cl(xy), Zy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, jy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Cy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Vy(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = Cy[l]) ? !!t[l] : !1;
  }
  function ef() {
    return Vy;
  }
  var Ly = H({}, Ma, {
    key: function(l) {
      if (l.key) {
        var t = Zy[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Re(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? jy[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ef,
    charCode: function(l) {
      return l.type === "keypress" ? Re(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Re(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Ky = Cl(Ly), Jy = H({}, qe, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Bi = Cl(Jy), wy = H({}, Ma, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ef
  }), ky = Cl(wy), Wy = H({}, Su, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), $y = Cl(Wy), Fy = H({}, qe, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Iy = Cl(Fy), Py = H({}, Su, {
    newState: 0,
    oldState: 0
  }), ld = Cl(Py), td = [9, 13, 27, 32], nf = Dt && "CompositionEvent" in window, Ua = null;
  Dt && "documentMode" in document && (Ua = document.documentMode);
  var ud = Dt && "TextEvent" in window && !Ua, Yi = Dt && (!nf || Ua && 8 < Ua && 11 >= Ua), pi = " ", Gi = !1;
  function Xi(l, t) {
    switch (l) {
      case "keyup":
        return td.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Qi(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Lu = !1;
  function ad(l, t) {
    switch (l) {
      case "compositionend":
        return Qi(t);
      case "keypress":
        return t.which !== 32 ? null : (Gi = !0, pi);
      case "textInput":
        return l = t.data, l === pi && Gi ? null : l;
      default:
        return null;
    }
  }
  function ed(l, t) {
    if (Lu)
      return l === "compositionend" || !nf && Xi(l, t) ? (l = Ri(), Ue = lf = Kt = null, Lu = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Yi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var nd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function xi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!nd[l.type] : t === "textarea";
  }
  function Zi(l, t, u, a) {
    Cu ? Vu ? Vu.push(a) : Vu = [a] : Cu = a, t = bn(t, "onChange"), 0 < t.length && (u = new Ne(
      "onChange",
      "change",
      null,
      u,
      a
    ), l.push({ event: u, listeners: t }));
  }
  var Ra = null, Ha = null;
  function fd(l) {
    Tv(l, 0);
  }
  function Be(l) {
    var t = za(l);
    if (Ei(t)) return l;
  }
  function ji(l, t) {
    if (l === "change") return t;
  }
  var Ci = !1;
  if (Dt) {
    var ff;
    if (Dt) {
      var cf = "oninput" in document;
      if (!cf) {
        var Vi = document.createElement("div");
        Vi.setAttribute("oninput", "return;"), cf = typeof Vi.oninput == "function";
      }
      ff = cf;
    } else ff = !1;
    Ci = ff && (!document.documentMode || 9 < document.documentMode);
  }
  function Li() {
    Ra && (Ra.detachEvent("onpropertychange", Ki), Ha = Ra = null);
  }
  function Ki(l) {
    if (l.propertyName === "value" && Be(Ha)) {
      var t = [];
      Zi(
        t,
        Ha,
        l,
        Fn(l)
      ), Ui(fd, t);
    }
  }
  function cd(l, t, u) {
    l === "focusin" ? (Li(), Ra = t, Ha = u, Ra.attachEvent("onpropertychange", Ki)) : l === "focusout" && Li();
  }
  function id(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Be(Ha);
  }
  function sd(l, t) {
    if (l === "click") return Be(t);
  }
  function vd(l, t) {
    if (l === "input" || l === "change")
      return Be(t);
  }
  function yd(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var Fl = typeof Object.is == "function" ? Object.is : yd;
  function Na(l, t) {
    if (Fl(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var u = Object.keys(l), a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!Gn.call(t, e) || !Fl(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function Ji(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function wi(l, t) {
    var u = Ji(l);
    l = 0;
    for (var a; u; ) {
      if (u.nodeType === 3) {
        if (a = l + u.textContent.length, l <= t && a >= t)
          return { node: u, offset: t - l };
        l = a;
      }
      l: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break l;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Ji(u);
    }
  }
  function ki(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ki(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Wi(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Me(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = Me(l.document);
    }
    return t;
  }
  function sf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var dd = Dt && "documentMode" in document && 11 >= document.documentMode, Ku = null, vf = null, qa = null, yf = !1;
  function $i(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    yf || Ku == null || Ku !== Me(a) || (a = Ku, "selectionStart" in a && sf(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), qa && Na(qa, a) || (qa = a, a = bn(vf, "onSelect"), 0 < a.length && (t = new Ne(
      "onSelect",
      "select",
      null,
      t,
      u
    ), l.push({ event: t, listeners: a }), t.target = Ku)));
  }
  function gu(l, t) {
    var u = {};
    return u[l.toLowerCase()] = t.toLowerCase(), u["Webkit" + l] = "webkit" + t, u["Moz" + l] = "moz" + t, u;
  }
  var Ju = {
    animationend: gu("Animation", "AnimationEnd"),
    animationiteration: gu("Animation", "AnimationIteration"),
    animationstart: gu("Animation", "AnimationStart"),
    transitionrun: gu("Transition", "TransitionRun"),
    transitionstart: gu("Transition", "TransitionStart"),
    transitioncancel: gu("Transition", "TransitionCancel"),
    transitionend: gu("Transition", "TransitionEnd")
  }, df = {}, Fi = {};
  Dt && (Fi = document.createElement("div").style, "AnimationEvent" in window || (delete Ju.animationend.animation, delete Ju.animationiteration.animation, delete Ju.animationstart.animation), "TransitionEvent" in window || delete Ju.transitionend.transition);
  function bu(l) {
    if (df[l]) return df[l];
    if (!Ju[l]) return l;
    var t = Ju[l], u;
    for (u in t)
      if (t.hasOwnProperty(u) && u in Fi)
        return df[l] = t[u];
    return l;
  }
  var Ii = bu("animationend"), Pi = bu("animationiteration"), ls = bu("animationstart"), od = bu("transitionrun"), hd = bu("transitionstart"), md = bu("transitioncancel"), ts = bu("transitionend"), us = /* @__PURE__ */ new Map(), of = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  of.push("scrollEnd");
  function mt(l, t) {
    us.set(l, t), ru(t, [l]);
  }
  var as = /* @__PURE__ */ new WeakMap();
  function ct(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = as.get(l);
      return u !== void 0 ? u : (t = {
        value: l,
        source: t,
        stack: bi(t)
      }, as.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: bi(t)
    };
  }
  var it = [], wu = 0, hf = 0;
  function Ye() {
    for (var l = wu, t = hf = wu = 0; t < l; ) {
      var u = it[t];
      it[t++] = null;
      var a = it[t];
      it[t++] = null;
      var e = it[t];
      it[t++] = null;
      var n = it[t];
      if (it[t++] = null, a !== null && e !== null) {
        var f = a.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), a.pending = e;
      }
      n !== 0 && es(u, e, n);
    }
  }
  function pe(l, t, u, a) {
    it[wu++] = l, it[wu++] = t, it[wu++] = u, it[wu++] = a, hf |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function mf(l, t, u, a) {
    return pe(l, t, u, a), Ge(l);
  }
  function ku(l, t) {
    return pe(l, null, null, t), Ge(l);
  }
  function es(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= u, a = n.alternate, a !== null && (a.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - $l(u), l = n.hiddenUpdates, a = l[e], a === null ? l[e] = [t] : a.push(t), t.lane = u | 536870912), n) : null;
  }
  function Ge(l) {
    if (50 < ae)
      throw ae = 0, Ec = null, Error(r(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Wu = {};
  function rd(l, t, u, a) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Il(l, t, u, a) {
    return new rd(l, t, u, a);
  }
  function rf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Ut(l, t) {
    var u = l.alternate;
    return u === null ? (u = Il(
      l.tag,
      t,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = t, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, t = l.dependencies, u.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function ns(l, t) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, t = u.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Xe(l, t, u, a, e, n) {
    var f = 0;
    if (a = l, typeof l == "function") rf(l) && (f = 1);
    else if (typeof l == "string")
      f = g1(
        l,
        u,
        N.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case gt:
          return l = Il(31, u, t, e), l.elementType = gt, l.lanes = n, l;
        case x:
          return Tu(u.children, e, n, t);
        case al:
          f = 8, e |= 24;
          break;
        case K:
          return l = Il(12, u, t, e | 2), l.elementType = K, l.lanes = n, l;
        case V:
          return l = Il(13, u, t, e), l.elementType = V, l.lanes = n, l;
        case Bl:
          return l = Il(19, u, t, e), l.elementType = Bl, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case rl:
              case Sl:
                f = 10;
                break l;
              case ht:
                f = 9;
                break l;
              case Zl:
                f = 11;
                break l;
              case Jl:
                f = 14;
                break l;
              case wl:
                f = 16, a = null;
                break l;
            }
          f = 29, u = Error(
            r(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = Il(f, u, t, e), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function Tu(l, t, u, a) {
    return l = Il(7, l, a, t), l.lanes = u, l;
  }
  function Sf(l, t, u) {
    return l = Il(6, l, null, t), l.lanes = u, l;
  }
  function gf(l, t, u) {
    return t = Il(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = u, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var $u = [], Fu = 0, Qe = null, xe = 0, st = [], vt = 0, Eu = null, Rt = 1, Ht = "";
  function Au(l, t) {
    $u[Fu++] = xe, $u[Fu++] = Qe, Qe = l, xe = t;
  }
  function fs(l, t, u) {
    st[vt++] = Rt, st[vt++] = Ht, st[vt++] = Eu, Eu = l;
    var a = Rt;
    l = Ht;
    var e = 32 - $l(a) - 1;
    a &= ~(1 << e), u += 1;
    var n = 32 - $l(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (a & (1 << f) - 1).toString(32), a >>= f, e -= f, Rt = 1 << 32 - $l(t) + e | u << e | a, Ht = n + l;
    } else
      Rt = 1 << n | u << e | a, Ht = l;
  }
  function bf(l) {
    l.return !== null && (Au(l, 1), fs(l, 1, 0));
  }
  function Tf(l) {
    for (; l === Qe; )
      Qe = $u[--Fu], $u[Fu] = null, xe = $u[--Fu], $u[Fu] = null;
    for (; l === Eu; )
      Eu = st[--vt], st[vt] = null, Ht = st[--vt], st[vt] = null, Rt = st[--vt], st[vt] = null;
  }
  var xl = null, hl = null, W = !1, zu = null, Tt = !1, Ef = Error(r(519));
  function _u(l) {
    var t = Error(r(418, ""));
    throw pa(ct(t, l)), Ef;
  }
  function cs(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[Gl] = l, t[jl] = a, u) {
      case "dialog":
        C("cancel", t), C("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        C("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ne.length; u++)
          C(ne[u], t);
        break;
      case "source":
        C("error", t);
        break;
      case "img":
      case "image":
      case "link":
        C("error", t), C("load", t);
        break;
      case "details":
        C("toggle", t);
        break;
      case "input":
        C("invalid", t), Ai(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        ), Oe(t);
        break;
      case "select":
        C("invalid", t);
        break;
      case "textarea":
        C("invalid", t), _i(t, a.value, a.defaultValue, a.children), Oe(t);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === !0 || _v(t.textContent, u) ? (a.popover != null && (C("beforetoggle", t), C("toggle", t)), a.onScroll != null && C("scroll", t), a.onScrollEnd != null && C("scrollend", t), a.onClick != null && (t.onclick = Tn), t = !0) : t = !1, t || _u(l);
  }
  function is(l) {
    for (xl = l.return; xl; )
      switch (xl.tag) {
        case 5:
        case 13:
          Tt = !1;
          return;
        case 27:
        case 3:
          Tt = !0;
          return;
        default:
          xl = xl.return;
      }
  }
  function Ba(l) {
    if (l !== xl) return !1;
    if (!W) return is(l), W = !0, !1;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Xc(l.type, l.memoizedProps)), u = !u), u && hl && _u(l), is(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (t === 0) {
                hl = St(l.nextSibling);
                break l;
              }
              t--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || t++;
          l = l.nextSibling;
        }
        hl = null;
      }
    } else
      t === 27 ? (t = hl, cu(l.type) ? (l = jc, jc = null, hl = l) : hl = t) : hl = xl ? St(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ya() {
    hl = xl = null, W = !1;
  }
  function ss() {
    var l = zu;
    return l !== null && (Kl === null ? Kl = l : Kl.push.apply(
      Kl,
      l
    ), zu = null), l;
  }
  function pa(l) {
    zu === null ? zu = [l] : zu.push(l);
  }
  var Af = A(null), Ou = null, Nt = null;
  function Jt(l, t, u) {
    z(Af, t._currentValue), t._currentValue = u;
  }
  function qt(l) {
    l._currentValue = Af.current, M(Af);
  }
  function zf(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function _f(l, t, u, a) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var i = 0; i < t.length; i++)
            if (c.context === t[i]) {
              n.lanes |= u, c = n.alternate, c !== null && (c.lanes |= u), zf(
                n.return,
                u,
                l
              ), a || (f = null);
              break l;
            }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(r(341));
        f.lanes |= u, n = f.alternate, n !== null && (n.lanes |= u), zf(f, u, l), f = null;
      } else f = e.child;
      if (f !== null) f.return = e;
      else
        for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (e = f.sibling, e !== null) {
            e.return = f.return, f = e;
            break;
          }
          f = f.return;
        }
      e = f;
    }
  }
  function Ga(l, t, u, a) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(r(387));
        if (f = f.memoizedProps, f !== null) {
          var c = e.type;
          Fl(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === kl.current) {
        if (f = e.alternate, f === null) throw Error(r(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(ye) : l = [ye]);
      }
      e = e.return;
    }
    l !== null && _f(
      t,
      l,
      u,
      a
    ), t.flags |= 262144;
  }
  function Ze(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Fl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Mu(l) {
    Ou = l, Nt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Xl(l) {
    return vs(Ou, l);
  }
  function je(l, t) {
    return Ou === null && Mu(l), vs(l, t);
  }
  function vs(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, Nt === null) {
      if (l === null) throw Error(r(308));
      Nt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Nt = Nt.next = t;
    return u;
  }
  var Sd = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(u, a) {
        l.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, gd = O.unstable_scheduleCallback, bd = O.unstable_NormalPriority, _l = {
    $$typeof: Sl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Of() {
    return {
      controller: new Sd(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Xa(l) {
    l.refCount--, l.refCount === 0 && gd(bd, function() {
      l.controller.abort();
    });
  }
  var Qa = null, Mf = 0, Iu = 0, Pu = null;
  function Td(l, t) {
    if (Qa === null) {
      var u = Qa = [];
      Mf = 0, Iu = Uc(), Pu = {
        status: "pending",
        value: void 0,
        then: function(a) {
          u.push(a);
        }
      };
    }
    return Mf++, t.then(ys, ys), t;
  }
  function ys() {
    if (--Mf === 0 && Qa !== null) {
      Pu !== null && (Pu.status = "fulfilled");
      var l = Qa;
      Qa = null, Iu = 0, Pu = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Ed(l, t) {
    var u = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        u.push(e);
      }
    };
    return l.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var e = 0; e < u.length; e++) (0, u[e])(t);
      },
      function(e) {
        for (a.status = "rejected", a.reason = e, e = 0; e < u.length; e++)
          (0, u[e])(void 0);
      }
    ), a;
  }
  var ds = g.S;
  g.S = function(l, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && Td(l, t), ds !== null && ds(l, t);
  };
  var Du = A(null);
  function Df() {
    var l = Du.current;
    return l !== null ? l : fl.pooledCache;
  }
  function Ce(l, t) {
    t === null ? z(Du, Du.current) : z(Du, t.pool);
  }
  function os() {
    var l = Df();
    return l === null ? null : { parent: _l._currentValue, pool: l };
  }
  var xa = Error(r(460)), hs = Error(r(474)), Ve = Error(r(542)), Uf = { then: function() {
  } };
  function ms(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Le() {
  }
  function rs(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(Le, Le), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, gs(l), l;
      default:
        if (typeof t.status == "string") t.then(Le, Le);
        else {
          if (l = fl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(r(482));
          l = t, l.status = "pending", l.then(
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "fulfilled", e.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "rejected", e.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, gs(l), l;
        }
        throw Za = t, xa;
    }
  }
  var Za = null;
  function Ss() {
    if (Za === null) throw Error(r(459));
    var l = Za;
    return Za = null, l;
  }
  function gs(l) {
    if (l === xa || l === Ve)
      throw Error(r(483));
  }
  var wt = !1;
  function Rf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Hf(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function kt(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Wt(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (F & 2) !== 0) {
      var e = a.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), a.pending = t, t = Ge(l), es(l, null, u), t;
    }
    return pe(l, a, t, u), Ge(l);
  }
  function ja(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, yi(l, u);
    }
  }
  function Nf(l, t) {
    var u = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, u === a)) {
      var e = null, n = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var f = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = f : n = n.next = f, u = u.next;
        } while (u !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      u = {
        baseState: a.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = t : l.next = t, u.lastBaseUpdate = t;
  }
  var qf = !1;
  function Ca() {
    if (qf) {
      var l = Pu;
      if (l !== null) throw l;
    }
  }
  function Va(l, t, u, a) {
    qf = !1;
    var e = l.updateQueue;
    wt = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c, o = i.next;
      i.next = null, f === null ? n = o : f.next = o, f = i;
      var S = l.alternate;
      S !== null && (S = S.updateQueue, c = S.lastBaseUpdate, c !== f && (c === null ? S.firstBaseUpdate = o : c.next = o, S.lastBaseUpdate = i));
    }
    if (n !== null) {
      var T = e.baseState;
      f = 0, S = o = i = null, c = n;
      do {
        var h = c.lane & -536870913, m = h !== c.lane;
        if (m ? (L & h) === h : (a & h) === h) {
          h !== 0 && h === Iu && (qf = !0), S !== null && (S = S.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var p = l, q = c;
            h = t;
            var ul = u;
            switch (q.tag) {
              case 1:
                if (p = q.payload, typeof p == "function") {
                  T = p.call(ul, T, h);
                  break l;
                }
                T = p;
                break l;
              case 3:
                p.flags = p.flags & -65537 | 128;
              case 0:
                if (p = q.payload, h = typeof p == "function" ? p.call(ul, T, h) : p, h == null) break l;
                T = H({}, T, h);
                break l;
              case 2:
                wt = !0;
            }
          }
          h = c.callback, h !== null && (l.flags |= 64, m && (l.flags |= 8192), m = e.callbacks, m === null ? e.callbacks = [h] : m.push(h));
        } else
          m = {
            lane: h,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, S === null ? (o = S = m, i = T) : S = S.next = m, f |= h;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null)
            break;
          m = c, c = m.next, m.next = null, e.lastBaseUpdate = m, e.shared.pending = null;
        }
      } while (!0);
      S === null && (i = T), e.baseState = i, e.firstBaseUpdate = o, e.lastBaseUpdate = S, n === null && (e.shared.lanes = 0), au |= f, l.lanes = f, l.memoizedState = T;
    }
  }
  function bs(l, t) {
    if (typeof l != "function")
      throw Error(r(191, l));
    l.call(t);
  }
  function Ts(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        bs(u[l], t);
  }
  var la = A(null), Ke = A(0);
  function Es(l, t) {
    l = xt, z(Ke, l), z(la, t), xt = l | t.baseLanes;
  }
  function Bf() {
    z(Ke, xt), z(la, la.current);
  }
  function Yf() {
    xt = Ke.current, M(la), M(Ke);
  }
  var $t = 0, Q = null, ll = null, Tl = null, Je = !1, ta = !1, Uu = !1, we = 0, La = 0, ua = null, Ad = 0;
  function gl() {
    throw Error(r(321));
  }
  function pf(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!Fl(l[u], t[u])) return !1;
    return !0;
  }
  function Gf(l, t, u, a, e, n) {
    return $t = n, Q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, g.H = l === null || l.memoizedState === null ? e0 : n0, Uu = !1, n = u(a, e), Uu = !1, ta && (n = zs(
      t,
      u,
      a,
      e
    )), As(l), n;
  }
  function As(l) {
    g.H = Pe;
    var t = ll !== null && ll.next !== null;
    if ($t = 0, Tl = ll = Q = null, Je = !1, La = 0, ua = null, t) throw Error(r(300));
    l === null || Dl || (l = l.dependencies, l !== null && Ze(l) && (Dl = !0));
  }
  function zs(l, t, u, a) {
    Q = l;
    var e = 0;
    do {
      if (ta && (ua = null), La = 0, ta = !1, 25 <= e) throw Error(r(301));
      if (e += 1, Tl = ll = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      g.H = Rd, n = t(u, a);
    } while (ta);
    return n;
  }
  function zd() {
    var l = g.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Ka(t) : t, l = l.useState()[0], (ll !== null ? ll.memoizedState : null) !== l && (Q.flags |= 1024), t;
  }
  function Xf() {
    var l = we !== 0;
    return we = 0, l;
  }
  function Qf(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function xf(l) {
    if (Je) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Je = !1;
    }
    $t = 0, Tl = ll = Q = null, ta = !1, La = we = 0, ua = null;
  }
  function Vl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Tl === null ? Q.memoizedState = Tl = l : Tl = Tl.next = l, Tl;
  }
  function El() {
    if (ll === null) {
      var l = Q.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ll.next;
    var t = Tl === null ? Q.memoizedState : Tl.next;
    if (t !== null)
      Tl = t, ll = l;
    else {
      if (l === null)
        throw Q.alternate === null ? Error(r(467)) : Error(r(310));
      ll = l, l = {
        memoizedState: ll.memoizedState,
        baseState: ll.baseState,
        baseQueue: ll.baseQueue,
        queue: ll.queue,
        next: null
      }, Tl === null ? Q.memoizedState = Tl = l : Tl = Tl.next = l;
    }
    return Tl;
  }
  function Zf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ka(l) {
    var t = La;
    return La += 1, ua === null && (ua = []), l = rs(ua, l, t), t = Q, (Tl === null ? t.memoizedState : Tl.next) === null && (t = t.alternate, g.H = t === null || t.memoizedState === null ? e0 : n0), l;
  }
  function ke(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ka(l);
      if (l.$$typeof === Sl) return Xl(l);
    }
    throw Error(r(438, String(l)));
  }
  function jf(l) {
    var t = null, u = Q.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var a = Q.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = Zf(), Q.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0)
      for (u = t.data[t.index] = Array(l), a = 0; a < l; a++)
        u[a] = Bu;
    return t.index++, u;
  }
  function Bt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function We(l) {
    var t = El();
    return Cf(t, ll, l);
  }
  function Cf(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = u;
    var e = l.baseQueue, n = a.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      t.baseQueue = e = n, a.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var c = f = null, i = null, o = t, S = !1;
      do {
        var T = o.lane & -536870913;
        if (T !== o.lane ? (L & T) === T : ($t & T) === T) {
          var h = o.revertLane;
          if (h === 0)
            i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              action: o.action,
              hasEagerState: o.hasEagerState,
              eagerState: o.eagerState,
              next: null
            }), T === Iu && (S = !0);
          else if (($t & h) === h) {
            o = o.next, h === Iu && (S = !0);
            continue;
          } else
            T = {
              lane: 0,
              revertLane: o.revertLane,
              action: o.action,
              hasEagerState: o.hasEagerState,
              eagerState: o.eagerState,
              next: null
            }, i === null ? (c = i = T, f = n) : i = i.next = T, Q.lanes |= h, au |= h;
          T = o.action, Uu && u(n, T), n = o.hasEagerState ? o.eagerState : u(n, T);
        } else
          h = {
            lane: T,
            revertLane: o.revertLane,
            action: o.action,
            hasEagerState: o.hasEagerState,
            eagerState: o.eagerState,
            next: null
          }, i === null ? (c = i = h, f = n) : i = i.next = h, Q.lanes |= T, au |= T;
        o = o.next;
      } while (o !== null && o !== t);
      if (i === null ? f = n : i.next = c, !Fl(n, l.memoizedState) && (Dl = !0, S && (u = Pu, u !== null)))
        throw u;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, a.lastRenderedState = n;
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function Vf(l) {
    var t = El(), u = t.queue;
    if (u === null) throw Error(r(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch, e = u.pending, n = t.memoizedState;
    if (e !== null) {
      u.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      Fl(n, t.memoizedState) || (Dl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, a];
  }
  function _s(l, t, u) {
    var a = Q, e = El(), n = W;
    if (n) {
      if (u === void 0) throw Error(r(407));
      u = u();
    } else u = t();
    var f = !Fl(
      (ll || e).memoizedState,
      u
    );
    f && (e.memoizedState = u, Dl = !0), e = e.queue;
    var c = Ds.bind(null, a, e, l);
    if (Ja(2048, 8, c, [l]), e.getSnapshot !== t || f || Tl !== null && Tl.memoizedState.tag & 1) {
      if (a.flags |= 2048, aa(
        9,
        $e(),
        Ms.bind(
          null,
          a,
          e,
          u,
          t
        ),
        null
      ), fl === null) throw Error(r(349));
      n || ($t & 124) !== 0 || Os(a, t, u);
    }
    return u;
  }
  function Os(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = Q.updateQueue, t === null ? (t = Zf(), Q.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function Ms(l, t, u, a) {
    t.value = u, t.getSnapshot = a, Us(t) && Rs(l);
  }
  function Ds(l, t, u) {
    return u(function() {
      Us(t) && Rs(l);
    });
  }
  function Us(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !Fl(l, u);
    } catch {
      return !0;
    }
  }
  function Rs(l) {
    var t = ku(l, 2);
    t !== null && at(t, l, 2);
  }
  function Lf(l) {
    var t = Vl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Uu) {
        Vt(!0);
        try {
          u();
        } finally {
          Vt(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Bt,
      lastRenderedState: l
    }, t;
  }
  function Hs(l, t, u, a) {
    return l.baseState = u, Cf(
      l,
      ll,
      typeof a == "function" ? a : Bt
    );
  }
  function _d(l, t, u, a, e) {
    if (Ie(l)) throw Error(r(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          n.listeners.push(f);
        }
      };
      g.T !== null ? u(!0) : n.isTransition = !1, a(n), u = t.pending, u === null ? (n.next = t.pending = n, Ns(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function Ns(l, t) {
    var u = t.action, a = t.payload, e = l.state;
    if (t.isTransition) {
      var n = g.T, f = {};
      g.T = f;
      try {
        var c = u(e, a), i = g.S;
        i !== null && i(f, c), qs(l, t, c);
      } catch (o) {
        Kf(l, t, o);
      } finally {
        g.T = n;
      }
    } else
      try {
        n = u(e, a), qs(l, t, n);
      } catch (o) {
        Kf(l, t, o);
      }
  }
  function qs(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(a) {
        Bs(l, t, a);
      },
      function(a) {
        return Kf(l, t, a);
      }
    ) : Bs(l, t, u);
  }
  function Bs(l, t, u) {
    t.status = "fulfilled", t.value = u, Ys(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, Ns(l, u)));
  }
  function Kf(l, t, u) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = u, Ys(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function Ys(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function ps(l, t) {
    return t;
  }
  function Gs(l, t) {
    if (W) {
      var u = fl.formState;
      if (u !== null) {
        l: {
          var a = Q;
          if (W) {
            if (hl) {
              t: {
                for (var e = hl, n = Tt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = St(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                hl = St(
                  e.nextSibling
                ), a = e.data === "F!";
                break l;
              }
            }
            _u(a);
          }
          a = !1;
        }
        a && (t = u[0]);
      }
    }
    return u = Vl(), u.memoizedState = u.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ps,
      lastRenderedState: t
    }, u.queue = a, u = t0.bind(
      null,
      Q,
      a
    ), a.dispatch = u, a = Lf(!1), n = $f.bind(
      null,
      Q,
      !1,
      a.queue
    ), a = Vl(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = e, u = _d.bind(
      null,
      Q,
      e,
      n,
      u
    ), e.dispatch = u, a.memoizedState = l, [t, u, !1];
  }
  function Xs(l) {
    var t = El();
    return Qs(t, ll, l);
  }
  function Qs(l, t, u) {
    if (t = Cf(
      l,
      t,
      ps
    )[0], l = We(Bt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Ka(t);
      } catch (f) {
        throw f === xa ? Ve : f;
      }
    else a = t;
    t = El();
    var e = t.queue, n = e.dispatch;
    return u !== t.memoizedState && (Q.flags |= 2048, aa(
      9,
      $e(),
      Od.bind(null, e, u),
      null
    )), [a, n, l];
  }
  function Od(l, t) {
    l.action = t;
  }
  function xs(l) {
    var t = El(), u = ll;
    if (u !== null)
      return Qs(t, u, l);
    El(), t = t.memoizedState, u = El();
    var a = u.queue.dispatch;
    return u.memoizedState = l, [t, a, !1];
  }
  function aa(l, t, u, a) {
    return l = { tag: l, create: u, deps: a, inst: t, next: null }, t = Q.updateQueue, t === null && (t = Zf(), Q.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (a = u.next, u.next = l, l.next = a, t.lastEffect = l), l;
  }
  function $e() {
    return { destroy: void 0, resource: void 0 };
  }
  function Zs() {
    return El().memoizedState;
  }
  function Fe(l, t, u, a) {
    var e = Vl();
    a = a === void 0 ? null : a, Q.flags |= l, e.memoizedState = aa(
      1 | t,
      $e(),
      u,
      a
    );
  }
  function Ja(l, t, u, a) {
    var e = El();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    ll !== null && a !== null && pf(a, ll.memoizedState.deps) ? e.memoizedState = aa(t, n, u, a) : (Q.flags |= l, e.memoizedState = aa(
      1 | t,
      n,
      u,
      a
    ));
  }
  function js(l, t) {
    Fe(8390656, 8, l, t);
  }
  function Cs(l, t) {
    Ja(2048, 8, l, t);
  }
  function Vs(l, t) {
    return Ja(4, 2, l, t);
  }
  function Ls(l, t) {
    return Ja(4, 4, l, t);
  }
  function Ks(l, t) {
    if (typeof t == "function") {
      l = l();
      var u = t(l);
      return function() {
        typeof u == "function" ? u() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function Js(l, t, u) {
    u = u != null ? u.concat([l]) : null, Ja(4, 4, Ks.bind(null, t, l), u);
  }
  function Jf() {
  }
  function ws(l, t) {
    var u = El();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && pf(t, a[1]) ? a[0] : (u.memoizedState = [l, t], l);
  }
  function ks(l, t) {
    var u = El();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && pf(t, a[1]))
      return a[0];
    if (a = l(), Uu) {
      Vt(!0);
      try {
        l();
      } finally {
        Vt(!1);
      }
    }
    return u.memoizedState = [a, t], a;
  }
  function wf(l, t, u) {
    return u === void 0 || ($t & 1073741824) !== 0 ? l.memoizedState = t : (l.memoizedState = u, l = F0(), Q.lanes |= l, au |= l, u);
  }
  function Ws(l, t, u, a) {
    return Fl(u, t) ? u : la.current !== null ? (l = wf(l, u, a), Fl(l, t) || (Dl = !0), l) : ($t & 42) === 0 ? (Dl = !0, l.memoizedState = u) : (l = F0(), Q.lanes |= l, au |= l, t);
  }
  function $s(l, t, u, a, e) {
    var n = _.p;
    _.p = n !== 0 && 8 > n ? n : 8;
    var f = g.T, c = {};
    g.T = c, $f(l, !1, t, u);
    try {
      var i = e(), o = g.S;
      if (o !== null && o(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var S = Ed(
          i,
          a
        );
        wa(
          l,
          t,
          S,
          ut(l)
        );
      } else
        wa(
          l,
          t,
          a,
          ut(l)
        );
    } catch (T) {
      wa(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: T },
        ut()
      );
    } finally {
      _.p = n, g.T = f;
    }
  }
  function Md() {
  }
  function kf(l, t, u, a) {
    if (l.tag !== 5) throw Error(r(476));
    var e = Fs(l).queue;
    $s(
      l,
      e,
      t,
      Y,
      u === null ? Md : function() {
        return Is(l), u(a);
      }
    );
  }
  function Fs(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Y,
      baseState: Y,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bt,
        lastRenderedState: Y
      },
      next: null
    };
    var u = {};
    return t.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bt,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function Is(l) {
    var t = Fs(l).next.queue;
    wa(l, t, {}, ut());
  }
  function Wf() {
    return Xl(ye);
  }
  function Ps() {
    return El().memoizedState;
  }
  function l0() {
    return El().memoizedState;
  }
  function Dd(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = ut();
          l = kt(u);
          var a = Wt(t, l, u);
          a !== null && (at(a, t, u), ja(a, t, u)), t = { cache: Of() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Ud(l, t, u) {
    var a = ut();
    u = {
      lane: a,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ie(l) ? u0(t, u) : (u = mf(l, t, u, a), u !== null && (at(u, l, a), a0(u, t, a)));
  }
  function t0(l, t, u) {
    var a = ut();
    wa(l, t, u, a);
  }
  function wa(l, t, u, a) {
    var e = {
      lane: a,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ie(l)) u0(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, c = n(f, u);
          if (e.hasEagerState = !0, e.eagerState = c, Fl(c, f))
            return pe(l, t, e, 0), fl === null && Ye(), !1;
        } catch {
        } finally {
        }
      if (u = mf(l, t, e, a), u !== null)
        return at(u, l, a), a0(u, t, a), !0;
    }
    return !1;
  }
  function $f(l, t, u, a) {
    if (a = {
      lane: 2,
      revertLane: Uc(),
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ie(l)) {
      if (t) throw Error(r(479));
    } else
      t = mf(
        l,
        u,
        a,
        2
      ), t !== null && at(t, l, 2);
  }
  function Ie(l) {
    var t = l.alternate;
    return l === Q || t !== null && t === Q;
  }
  function u0(l, t) {
    ta = Je = !0;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function a0(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, yi(l, u);
    }
  }
  var Pe = {
    readContext: Xl,
    use: ke,
    useCallback: gl,
    useContext: gl,
    useEffect: gl,
    useImperativeHandle: gl,
    useLayoutEffect: gl,
    useInsertionEffect: gl,
    useMemo: gl,
    useReducer: gl,
    useRef: gl,
    useState: gl,
    useDebugValue: gl,
    useDeferredValue: gl,
    useTransition: gl,
    useSyncExternalStore: gl,
    useId: gl,
    useHostTransitionStatus: gl,
    useFormState: gl,
    useActionState: gl,
    useOptimistic: gl,
    useMemoCache: gl,
    useCacheRefresh: gl
  }, e0 = {
    readContext: Xl,
    use: ke,
    useCallback: function(l, t) {
      return Vl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Xl,
    useEffect: js,
    useImperativeHandle: function(l, t, u) {
      u = u != null ? u.concat([l]) : null, Fe(
        4194308,
        4,
        Ks.bind(null, t, l),
        u
      );
    },
    useLayoutEffect: function(l, t) {
      return Fe(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      Fe(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var u = Vl();
      t = t === void 0 ? null : t;
      var a = l();
      if (Uu) {
        Vt(!0);
        try {
          l();
        } finally {
          Vt(!1);
        }
      }
      return u.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, u) {
      var a = Vl();
      if (u !== void 0) {
        var e = u(t);
        if (Uu) {
          Vt(!0);
          try {
            u(t);
          } finally {
            Vt(!1);
          }
        }
      } else e = t;
      return a.memoizedState = a.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, a.queue = l, l = l.dispatch = Ud.bind(
        null,
        Q,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = Vl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Lf(l);
      var t = l.queue, u = t0.bind(null, Q, t);
      return t.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Jf,
    useDeferredValue: function(l, t) {
      var u = Vl();
      return wf(u, l, t);
    },
    useTransition: function() {
      var l = Lf(!1);
      return l = $s.bind(
        null,
        Q,
        l.queue,
        !0,
        !1
      ), Vl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, u) {
      var a = Q, e = Vl();
      if (W) {
        if (u === void 0)
          throw Error(r(407));
        u = u();
      } else {
        if (u = t(), fl === null)
          throw Error(r(349));
        (L & 124) !== 0 || Os(a, t, u);
      }
      e.memoizedState = u;
      var n = { value: u, getSnapshot: t };
      return e.queue = n, js(Ds.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, aa(
        9,
        $e(),
        Ms.bind(
          null,
          a,
          n,
          u,
          t
        ),
        null
      ), u;
    },
    useId: function() {
      var l = Vl(), t = fl.identifierPrefix;
      if (W) {
        var u = Ht, a = Rt;
        u = (a & ~(1 << 32 - $l(a) - 1)).toString(32) + u, t = "«" + t + "R" + u, u = we++, 0 < u && (t += "H" + u.toString(32)), t += "»";
      } else
        u = Ad++, t = "«" + t + "r" + u.toString(32) + "»";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: Wf,
    useFormState: Gs,
    useActionState: Gs,
    useOptimistic: function(l) {
      var t = Vl();
      t.memoizedState = t.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = u, t = $f.bind(
        null,
        Q,
        !0,
        u
      ), u.dispatch = t, [l, t];
    },
    useMemoCache: jf,
    useCacheRefresh: function() {
      return Vl().memoizedState = Dd.bind(
        null,
        Q
      );
    }
  }, n0 = {
    readContext: Xl,
    use: ke,
    useCallback: ws,
    useContext: Xl,
    useEffect: Cs,
    useImperativeHandle: Js,
    useInsertionEffect: Vs,
    useLayoutEffect: Ls,
    useMemo: ks,
    useReducer: We,
    useRef: Zs,
    useState: function() {
      return We(Bt);
    },
    useDebugValue: Jf,
    useDeferredValue: function(l, t) {
      var u = El();
      return Ws(
        u,
        ll.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = We(Bt)[0], t = El().memoizedState;
      return [
        typeof l == "boolean" ? l : Ka(l),
        t
      ];
    },
    useSyncExternalStore: _s,
    useId: Ps,
    useHostTransitionStatus: Wf,
    useFormState: Xs,
    useActionState: Xs,
    useOptimistic: function(l, t) {
      var u = El();
      return Hs(u, ll, l, t);
    },
    useMemoCache: jf,
    useCacheRefresh: l0
  }, Rd = {
    readContext: Xl,
    use: ke,
    useCallback: ws,
    useContext: Xl,
    useEffect: Cs,
    useImperativeHandle: Js,
    useInsertionEffect: Vs,
    useLayoutEffect: Ls,
    useMemo: ks,
    useReducer: Vf,
    useRef: Zs,
    useState: function() {
      return Vf(Bt);
    },
    useDebugValue: Jf,
    useDeferredValue: function(l, t) {
      var u = El();
      return ll === null ? wf(u, l, t) : Ws(
        u,
        ll.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Vf(Bt)[0], t = El().memoizedState;
      return [
        typeof l == "boolean" ? l : Ka(l),
        t
      ];
    },
    useSyncExternalStore: _s,
    useId: Ps,
    useHostTransitionStatus: Wf,
    useFormState: xs,
    useActionState: xs,
    useOptimistic: function(l, t) {
      var u = El();
      return ll !== null ? Hs(u, ll, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: jf,
    useCacheRefresh: l0
  }, ea = null, ka = 0;
  function ln(l) {
    var t = ka;
    return ka += 1, ea === null && (ea = []), rs(ea, l, t);
  }
  function Wa(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function tn(l, t) {
    throw t.$$typeof === k ? Error(r(525)) : (l = Object.prototype.toString.call(t), Error(
      r(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function f0(l) {
    var t = l._init;
    return t(l._payload);
  }
  function c0(l) {
    function t(y, v) {
      if (l) {
        var d = y.deletions;
        d === null ? (y.deletions = [v], y.flags |= 16) : d.push(v);
      }
    }
    function u(y, v) {
      if (!l) return null;
      for (; v !== null; )
        t(y, v), v = v.sibling;
      return null;
    }
    function a(y) {
      for (var v = /* @__PURE__ */ new Map(); y !== null; )
        y.key !== null ? v.set(y.key, y) : v.set(y.index, y), y = y.sibling;
      return v;
    }
    function e(y, v) {
      return y = Ut(y, v), y.index = 0, y.sibling = null, y;
    }
    function n(y, v, d) {
      return y.index = d, l ? (d = y.alternate, d !== null ? (d = d.index, d < v ? (y.flags |= 67108866, v) : d) : (y.flags |= 67108866, v)) : (y.flags |= 1048576, v);
    }
    function f(y) {
      return l && y.alternate === null && (y.flags |= 67108866), y;
    }
    function c(y, v, d, b) {
      return v === null || v.tag !== 6 ? (v = Sf(d, y.mode, b), v.return = y, v) : (v = e(v, d), v.return = y, v);
    }
    function i(y, v, d, b) {
      var D = d.type;
      return D === x ? S(
        y,
        v,
        d.props.children,
        b,
        d.key
      ) : v !== null && (v.elementType === D || typeof D == "object" && D !== null && D.$$typeof === wl && f0(D) === v.type) ? (v = e(v, d.props), Wa(v, d), v.return = y, v) : (v = Xe(
        d.type,
        d.key,
        d.props,
        null,
        y.mode,
        b
      ), Wa(v, d), v.return = y, v);
    }
    function o(y, v, d, b) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== d.containerInfo || v.stateNode.implementation !== d.implementation ? (v = gf(d, y.mode, b), v.return = y, v) : (v = e(v, d.children || []), v.return = y, v);
    }
    function S(y, v, d, b, D) {
      return v === null || v.tag !== 7 ? (v = Tu(
        d,
        y.mode,
        b,
        D
      ), v.return = y, v) : (v = e(v, d), v.return = y, v);
    }
    function T(y, v, d) {
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return v = Sf(
          "" + v,
          y.mode,
          d
        ), v.return = y, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case P:
            return d = Xe(
              v.type,
              v.key,
              v.props,
              null,
              y.mode,
              d
            ), Wa(d, v), d.return = y, d;
          case zl:
            return v = gf(
              v,
              y.mode,
              d
            ), v.return = y, v;
          case wl:
            var b = v._init;
            return v = b(v._payload), T(y, v, d);
        }
        if (pl(v) || Yl(v))
          return v = Tu(
            v,
            y.mode,
            d,
            null
          ), v.return = y, v;
        if (typeof v.then == "function")
          return T(y, ln(v), d);
        if (v.$$typeof === Sl)
          return T(
            y,
            je(y, v),
            d
          );
        tn(y, v);
      }
      return null;
    }
    function h(y, v, d, b) {
      var D = v !== null ? v.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint")
        return D !== null ? null : c(y, v, "" + d, b);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case P:
            return d.key === D ? i(y, v, d, b) : null;
          case zl:
            return d.key === D ? o(y, v, d, b) : null;
          case wl:
            return D = d._init, d = D(d._payload), h(y, v, d, b);
        }
        if (pl(d) || Yl(d))
          return D !== null ? null : S(y, v, d, b, null);
        if (typeof d.then == "function")
          return h(
            y,
            v,
            ln(d),
            b
          );
        if (d.$$typeof === Sl)
          return h(
            y,
            v,
            je(y, d),
            b
          );
        tn(y, d);
      }
      return null;
    }
    function m(y, v, d, b, D) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return y = y.get(d) || null, c(v, y, "" + b, D);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case P:
            return y = y.get(
              b.key === null ? d : b.key
            ) || null, i(v, y, b, D);
          case zl:
            return y = y.get(
              b.key === null ? d : b.key
            ) || null, o(v, y, b, D);
          case wl:
            var Z = b._init;
            return b = Z(b._payload), m(
              y,
              v,
              d,
              b,
              D
            );
        }
        if (pl(b) || Yl(b))
          return y = y.get(d) || null, S(v, y, b, D, null);
        if (typeof b.then == "function")
          return m(
            y,
            v,
            d,
            ln(b),
            D
          );
        if (b.$$typeof === Sl)
          return m(
            y,
            v,
            d,
            je(v, b),
            D
          );
        tn(v, b);
      }
      return null;
    }
    function p(y, v, d, b) {
      for (var D = null, Z = null, R = v, B = v = 0, Rl = null; R !== null && B < d.length; B++) {
        R.index > B ? (Rl = R, R = null) : Rl = R.sibling;
        var w = h(
          y,
          R,
          d[B],
          b
        );
        if (w === null) {
          R === null && (R = Rl);
          break;
        }
        l && R && w.alternate === null && t(y, R), v = n(w, v, B), Z === null ? D = w : Z.sibling = w, Z = w, R = Rl;
      }
      if (B === d.length)
        return u(y, R), W && Au(y, B), D;
      if (R === null) {
        for (; B < d.length; B++)
          R = T(y, d[B], b), R !== null && (v = n(
            R,
            v,
            B
          ), Z === null ? D = R : Z.sibling = R, Z = R);
        return W && Au(y, B), D;
      }
      for (R = a(R); B < d.length; B++)
        Rl = m(
          R,
          y,
          B,
          d[B],
          b
        ), Rl !== null && (l && Rl.alternate !== null && R.delete(
          Rl.key === null ? B : Rl.key
        ), v = n(
          Rl,
          v,
          B
        ), Z === null ? D = Rl : Z.sibling = Rl, Z = Rl);
      return l && R.forEach(function(du) {
        return t(y, du);
      }), W && Au(y, B), D;
    }
    function q(y, v, d, b) {
      if (d == null) throw Error(r(151));
      for (var D = null, Z = null, R = v, B = v = 0, Rl = null, w = d.next(); R !== null && !w.done; B++, w = d.next()) {
        R.index > B ? (Rl = R, R = null) : Rl = R.sibling;
        var du = h(y, R, w.value, b);
        if (du === null) {
          R === null && (R = Rl);
          break;
        }
        l && R && du.alternate === null && t(y, R), v = n(du, v, B), Z === null ? D = du : Z.sibling = du, Z = du, R = Rl;
      }
      if (w.done)
        return u(y, R), W && Au(y, B), D;
      if (R === null) {
        for (; !w.done; B++, w = d.next())
          w = T(y, w.value, b), w !== null && (v = n(w, v, B), Z === null ? D = w : Z.sibling = w, Z = w);
        return W && Au(y, B), D;
      }
      for (R = a(R); !w.done; B++, w = d.next())
        w = m(R, y, B, w.value, b), w !== null && (l && w.alternate !== null && R.delete(w.key === null ? B : w.key), v = n(w, v, B), Z === null ? D = w : Z.sibling = w, Z = w);
      return l && R.forEach(function(H1) {
        return t(y, H1);
      }), W && Au(y, B), D;
    }
    function ul(y, v, d, b) {
      if (typeof d == "object" && d !== null && d.type === x && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case P:
            l: {
              for (var D = d.key; v !== null; ) {
                if (v.key === D) {
                  if (D = d.type, D === x) {
                    if (v.tag === 7) {
                      u(
                        y,
                        v.sibling
                      ), b = e(
                        v,
                        d.props.children
                      ), b.return = y, y = b;
                      break l;
                    }
                  } else if (v.elementType === D || typeof D == "object" && D !== null && D.$$typeof === wl && f0(D) === v.type) {
                    u(
                      y,
                      v.sibling
                    ), b = e(v, d.props), Wa(b, d), b.return = y, y = b;
                    break l;
                  }
                  u(y, v);
                  break;
                } else t(y, v);
                v = v.sibling;
              }
              d.type === x ? (b = Tu(
                d.props.children,
                y.mode,
                b,
                d.key
              ), b.return = y, y = b) : (b = Xe(
                d.type,
                d.key,
                d.props,
                null,
                y.mode,
                b
              ), Wa(b, d), b.return = y, y = b);
            }
            return f(y);
          case zl:
            l: {
              for (D = d.key; v !== null; ) {
                if (v.key === D)
                  if (v.tag === 4 && v.stateNode.containerInfo === d.containerInfo && v.stateNode.implementation === d.implementation) {
                    u(
                      y,
                      v.sibling
                    ), b = e(v, d.children || []), b.return = y, y = b;
                    break l;
                  } else {
                    u(y, v);
                    break;
                  }
                else t(y, v);
                v = v.sibling;
              }
              b = gf(d, y.mode, b), b.return = y, y = b;
            }
            return f(y);
          case wl:
            return D = d._init, d = D(d._payload), ul(
              y,
              v,
              d,
              b
            );
        }
        if (pl(d))
          return p(
            y,
            v,
            d,
            b
          );
        if (Yl(d)) {
          if (D = Yl(d), typeof D != "function") throw Error(r(150));
          return d = D.call(d), q(
            y,
            v,
            d,
            b
          );
        }
        if (typeof d.then == "function")
          return ul(
            y,
            v,
            ln(d),
            b
          );
        if (d.$$typeof === Sl)
          return ul(
            y,
            v,
            je(y, d),
            b
          );
        tn(y, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint" ? (d = "" + d, v !== null && v.tag === 6 ? (u(y, v.sibling), b = e(v, d), b.return = y, y = b) : (u(y, v), b = Sf(d, y.mode, b), b.return = y, y = b), f(y)) : u(y, v);
    }
    return function(y, v, d, b) {
      try {
        ka = 0;
        var D = ul(
          y,
          v,
          d,
          b
        );
        return ea = null, D;
      } catch (R) {
        if (R === xa || R === Ve) throw R;
        var Z = Il(29, R, null, y.mode);
        return Z.lanes = b, Z.return = y, Z;
      } finally {
      }
    };
  }
  var na = c0(!0), i0 = c0(!1), yt = A(null), Et = null;
  function Ft(l) {
    var t = l.alternate;
    z(Ol, Ol.current & 1), z(yt, l), Et === null && (t === null || la.current !== null || t.memoizedState !== null) && (Et = l);
  }
  function s0(l) {
    if (l.tag === 22) {
      if (z(Ol, Ol.current), z(yt, l), Et === null) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (Et = l);
      }
    } else It();
  }
  function It() {
    z(Ol, Ol.current), z(yt, yt.current);
  }
  function Yt(l) {
    M(yt), Et === l && (Et = null), M(Ol);
  }
  var Ol = A(0);
  function un(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || Zc(u)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  function Ff(l, t, u, a) {
    t = l.memoizedState, u = u(a, t), u = u == null ? t : H({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var If = {
    enqueueSetState: function(l, t, u) {
      l = l._reactInternals;
      var a = ut(), e = kt(a);
      e.payload = t, u != null && (e.callback = u), t = Wt(l, e, a), t !== null && (at(t, l, a), ja(t, l, a));
    },
    enqueueReplaceState: function(l, t, u) {
      l = l._reactInternals;
      var a = ut(), e = kt(a);
      e.tag = 1, e.payload = t, u != null && (e.callback = u), t = Wt(l, e, a), t !== null && (at(t, l, a), ja(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var u = ut(), a = kt(u);
      a.tag = 2, t != null && (a.callback = t), t = Wt(l, a, u), t !== null && (at(t, l, u), ja(t, l, u));
    }
  };
  function v0(l, t, u, a, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, f) : t.prototype && t.prototype.isPureReactComponent ? !Na(u, a) || !Na(e, n) : !0;
  }
  function y0(l, t, u, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l && If.enqueueReplaceState(t, t.state, null);
  }
  function Ru(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t)
        a !== "ref" && (u[a] = t[a]);
    }
    if (l = l.defaultProps) {
      u === t && (u = H({}, u));
      for (var e in l)
        u[e] === void 0 && (u[e] = l[e]);
    }
    return u;
  }
  var an = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function d0(l) {
    an(l);
  }
  function o0(l) {
    console.error(l);
  }
  function h0(l) {
    an(l);
  }
  function en(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function m0(l, t, u) {
    try {
      var a = l.onCaughtError;
      a(u.value, {
        componentStack: u.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function Pf(l, t, u) {
    return u = kt(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      en(l, t);
    }, u;
  }
  function r0(l) {
    return l = kt(l), l.tag = 3, l;
  }
  function S0(l, t, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = a.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        m0(t, u, a);
      };
    }
    var f = u.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      m0(t, u, a), typeof e != "function" && (eu === null ? eu = /* @__PURE__ */ new Set([this]) : eu.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Hd(l, t, u, a, e) {
    if (u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = u.alternate, t !== null && Ga(
        t,
        u,
        e,
        !0
      ), u = yt.current, u !== null) {
        switch (u.tag) {
          case 13:
            return Et === null ? zc() : u.alternate === null && ml === 0 && (ml = 3), u.flags &= -257, u.flags |= 65536, u.lanes = e, a === Uf ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Oc(l, a, e)), !1;
          case 22:
            return u.flags |= 65536, a === Uf ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : u.add(a)), Oc(l, a, e)), !1;
        }
        throw Error(r(435, u.tag));
      }
      return Oc(l, a, e), zc(), !1;
    }
    if (W)
      return t = yt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, a !== Ef && (l = Error(r(422), { cause: a }), pa(ct(l, u)))) : (a !== Ef && (t = Error(r(423), {
        cause: a
      }), pa(
        ct(t, u)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, a = ct(a, u), e = Pf(
        l.stateNode,
        a,
        e
      ), Nf(l, e), ml !== 4 && (ml = 2)), !1;
    var n = Error(r(520), { cause: a });
    if (n = ct(n, u), ue === null ? ue = [n] : ue.push(n), ml !== 4 && (ml = 2), t === null) return !0;
    a = ct(a, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = e & -e, u.lanes |= l, l = Pf(u.stateNode, a, l), Nf(u, l), !1;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (eu === null || !eu.has(n))))
            return u.flags |= 65536, e &= -e, u.lanes |= e, e = r0(e), S0(
              e,
              l,
              u,
              a
            ), Nf(u, e), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var g0 = Error(r(461)), Dl = !1;
  function Hl(l, t, u, a) {
    t.child = l === null ? i0(t, null, u, a) : na(
      t,
      l.child,
      u,
      a
    );
  }
  function b0(l, t, u, a, e) {
    u = u.render;
    var n = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var c in a)
        c !== "ref" && (f[c] = a[c]);
    } else f = a;
    return Mu(t), a = Gf(
      l,
      t,
      u,
      f,
      n,
      e
    ), c = Xf(), l !== null && !Dl ? (Qf(l, t, e), pt(l, t, e)) : (W && c && bf(t), t.flags |= 1, Hl(l, t, a, e), t.child);
  }
  function T0(l, t, u, a, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" && !rf(n) && n.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = n, E0(
        l,
        t,
        n,
        a,
        e
      )) : (l = Xe(
        u.type,
        null,
        a,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !cc(l, e)) {
      var f = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Na, u(f, a) && l.ref === t.ref)
        return pt(l, t, e);
    }
    return t.flags |= 1, l = Ut(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function E0(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Na(n, a) && l.ref === t.ref)
        if (Dl = !1, t.pendingProps = a = n, cc(l, e))
          (l.flags & 131072) !== 0 && (Dl = !0);
        else
          return t.lanes = l.lanes, pt(l, t, e);
    }
    return lc(
      l,
      t,
      u,
      a,
      e
    );
  }
  function A0(l, t, u) {
    var a = t.pendingProps, e = a.children, n = l !== null ? l.memoizedState : null;
    if (a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (a = n !== null ? n.baseLanes | u : u, l !== null) {
          for (e = t.child = l.child, n = 0; e !== null; )
            n = n | e.lanes | e.childLanes, e = e.sibling;
          t.childLanes = n & ~a;
        } else t.childLanes = 0, t.child = null;
        return z0(
          l,
          t,
          a,
          u
        );
      }
      if ((u & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ce(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? Es(t, n) : Bf(), s0(t);
      else
        return t.lanes = t.childLanes = 536870912, z0(
          l,
          t,
          n !== null ? n.baseLanes | u : u,
          u
        );
    } else
      n !== null ? (Ce(t, n.cachePool), Es(t, n), It(), t.memoizedState = null) : (l !== null && Ce(t, null), Bf(), It());
    return Hl(l, t, e, u), t.child;
  }
  function z0(l, t, u, a) {
    var e = Df();
    return e = e === null ? null : { parent: _l._currentValue, pool: e }, t.memoizedState = {
      baseLanes: u,
      cachePool: e
    }, l !== null && Ce(t, null), Bf(), s0(t), l !== null && Ga(l, t, a, !0), null;
  }
  function nn(l, t) {
    var u = t.ref;
    if (u === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(r(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function lc(l, t, u, a, e) {
    return Mu(t), u = Gf(
      l,
      t,
      u,
      a,
      void 0,
      e
    ), a = Xf(), l !== null && !Dl ? (Qf(l, t, e), pt(l, t, e)) : (W && a && bf(t), t.flags |= 1, Hl(l, t, u, e), t.child);
  }
  function _0(l, t, u, a, e, n) {
    return Mu(t), t.updateQueue = null, u = zs(
      t,
      a,
      u,
      e
    ), As(l), a = Xf(), l !== null && !Dl ? (Qf(l, t, n), pt(l, t, n)) : (W && a && bf(t), t.flags |= 1, Hl(l, t, u, n), t.child);
  }
  function O0(l, t, u, a, e) {
    if (Mu(t), t.stateNode === null) {
      var n = Wu, f = u.contextType;
      typeof f == "object" && f !== null && (n = Xl(f)), n = new u(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = If, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Rf(t), f = u.contextType, n.context = typeof f == "object" && f !== null ? Xl(f) : Wu, n.state = t.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (Ff(
        t,
        u,
        f,
        a
      ), n.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && If.enqueueReplaceState(n, n.state, null), Va(t, a, n, e), Ca(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, i = Ru(u, c);
      n.props = i;
      var o = n.context, S = u.contextType;
      f = Wu, typeof S == "object" && S !== null && (f = Xl(S));
      var T = u.getDerivedStateFromProps;
      S = typeof T == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || o !== f) && y0(
        t,
        n,
        a,
        f
      ), wt = !1;
      var h = t.memoizedState;
      n.state = h, Va(t, a, n, e), Ca(), o = t.memoizedState, c || h !== o || wt ? (typeof T == "function" && (Ff(
        t,
        u,
        T,
        a
      ), o = t.memoizedState), (i = wt || v0(
        t,
        u,
        i,
        a,
        h,
        o,
        f
      )) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = o), n.props = a, n.state = o, n.context = f, a = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, Hf(l, t), f = t.memoizedProps, S = Ru(u, f), n.props = S, T = t.pendingProps, h = n.context, o = u.contextType, i = Wu, typeof o == "object" && o !== null && (i = Xl(o)), c = u.getDerivedStateFromProps, (o = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== T || h !== i) && y0(
        t,
        n,
        a,
        i
      ), wt = !1, h = t.memoizedState, n.state = h, Va(t, a, n, e), Ca();
      var m = t.memoizedState;
      f !== T || h !== m || wt || l !== null && l.dependencies !== null && Ze(l.dependencies) ? (typeof c == "function" && (Ff(
        t,
        u,
        c,
        a
      ), m = t.memoizedState), (S = wt || v0(
        t,
        u,
        S,
        a,
        h,
        m,
        i
      ) || l !== null && l.dependencies !== null && Ze(l.dependencies)) ? (o || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, m, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        m,
        i
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = m), n.props = a, n.state = m, n.context = i, a = S) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return n = a, nn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, u = a && typeof u.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = na(
      t,
      l.child,
      null,
      e
    ), t.child = na(
      t,
      null,
      u,
      e
    )) : Hl(l, t, u, e), t.memoizedState = n.state, l = t.child) : l = pt(
      l,
      t,
      e
    ), l;
  }
  function M0(l, t, u, a) {
    return Ya(), t.flags |= 256, Hl(l, t, u, a), t.child;
  }
  var tc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function uc(l) {
    return { baseLanes: l, cachePool: os() };
  }
  function ac(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= dt), l;
  }
  function D0(l, t, u) {
    var a = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (Ol.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (W) {
        if (e ? Ft(t) : It(), W) {
          var c = hl, i;
          if (i = c) {
            l: {
              for (i = c, c = Tt; i.nodeType !== 8; ) {
                if (!c) {
                  c = null;
                  break l;
                }
                if (i = St(
                  i.nextSibling
                ), i === null) {
                  c = null;
                  break l;
                }
              }
              c = i;
            }
            c !== null ? (t.memoizedState = {
              dehydrated: c,
              treeContext: Eu !== null ? { id: Rt, overflow: Ht } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, i = Il(
              18,
              null,
              null,
              0
            ), i.stateNode = c, i.return = t, t.child = i, xl = t, hl = null, i = !0) : i = !1;
          }
          i || _u(t);
        }
        if (c = t.memoizedState, c !== null && (c = c.dehydrated, c !== null))
          return Zc(c) ? t.lanes = 32 : t.lanes = 536870912, null;
        Yt(t);
      }
      return c = a.children, a = a.fallback, e ? (It(), e = t.mode, c = fn(
        { mode: "hidden", children: c },
        e
      ), a = Tu(
        a,
        e,
        u,
        null
      ), c.return = t, a.return = t, c.sibling = a, t.child = c, e = t.child, e.memoizedState = uc(u), e.childLanes = ac(
        l,
        f,
        u
      ), t.memoizedState = tc, a) : (Ft(t), ec(t, c));
    }
    if (i = l.memoizedState, i !== null && (c = i.dehydrated, c !== null)) {
      if (n)
        t.flags & 256 ? (Ft(t), t.flags &= -257, t = nc(
          l,
          t,
          u
        )) : t.memoizedState !== null ? (It(), t.child = l.child, t.flags |= 128, t = null) : (It(), e = a.fallback, c = t.mode, a = fn(
          { mode: "visible", children: a.children },
          c
        ), e = Tu(
          e,
          c,
          u,
          null
        ), e.flags |= 2, a.return = t, e.return = t, a.sibling = e, t.child = a, na(
          t,
          l.child,
          null,
          u
        ), a = t.child, a.memoizedState = uc(u), a.childLanes = ac(
          l,
          f,
          u
        ), t.memoizedState = tc, t = e);
      else if (Ft(t), Zc(c)) {
        if (f = c.nextSibling && c.nextSibling.dataset, f) var o = f.dgst;
        f = o, a = Error(r(419)), a.stack = "", a.digest = f, pa({ value: a, source: null, stack: null }), t = nc(
          l,
          t,
          u
        );
      } else if (Dl || Ga(l, t, u, !1), f = (u & l.childLanes) !== 0, Dl || f) {
        if (f = fl, f !== null && (a = u & -u, a = (a & 42) !== 0 ? 1 : Zn(a), a = (a & (f.suspendedLanes | u)) !== 0 ? 0 : a, a !== 0 && a !== i.retryLane))
          throw i.retryLane = a, ku(l, a), at(f, l, a), g0;
        c.data === "$?" || zc(), t = nc(
          l,
          t,
          u
        );
      } else
        c.data === "$?" ? (t.flags |= 192, t.child = l.child, t = null) : (l = i.treeContext, hl = St(
          c.nextSibling
        ), xl = t, W = !0, zu = null, Tt = !1, l !== null && (st[vt++] = Rt, st[vt++] = Ht, st[vt++] = Eu, Rt = l.id, Ht = l.overflow, Eu = t), t = ec(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return e ? (It(), e = a.fallback, c = t.mode, i = l.child, o = i.sibling, a = Ut(i, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = i.subtreeFlags & 65011712, o !== null ? e = Ut(o, e) : (e = Tu(
      e,
      c,
      u,
      null
    ), e.flags |= 2), e.return = t, a.return = t, a.sibling = e, t.child = a, a = e, e = t.child, c = l.child.memoizedState, c === null ? c = uc(u) : (i = c.cachePool, i !== null ? (o = _l._currentValue, i = i.parent !== o ? { parent: o, pool: o } : i) : i = os(), c = {
      baseLanes: c.baseLanes | u,
      cachePool: i
    }), e.memoizedState = c, e.childLanes = ac(
      l,
      f,
      u
    ), t.memoizedState = tc, a) : (Ft(t), u = l.child, l = u.sibling, u = Ut(u, {
      mode: "visible",
      children: a.children
    }), u.return = t, u.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function ec(l, t) {
    return t = fn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function fn(l, t) {
    return l = Il(22, l, null, t), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function nc(l, t, u) {
    return na(t, l.child, null, u), l = ec(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function U0(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), zf(l.return, t, u);
  }
  function fc(l, t, u, a, e) {
    var n = l.memoizedState;
    n === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: u,
      tailMode: e
    } : (n.isBackwards = t, n.rendering = null, n.renderingStartTime = 0, n.last = a, n.tail = u, n.tailMode = e);
  }
  function R0(l, t, u) {
    var a = t.pendingProps, e = a.revealOrder, n = a.tail;
    if (Hl(l, t, a.children, u), a = Ol.current, (a & 2) !== 0)
      a = a & 1 | 2, t.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && U0(l, u, t);
          else if (l.tag === 19)
            U0(l, u, t);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === t) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t)
              break l;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      a &= 1;
    }
    switch (z(Ol, a), e) {
      case "forwards":
        for (u = t.child, e = null; u !== null; )
          l = u.alternate, l !== null && un(l) === null && (e = u), u = u.sibling;
        u = e, u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null), fc(
          t,
          !1,
          e,
          u,
          n
        );
        break;
      case "backwards":
        for (u = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && un(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = u, u = e, e = l;
        }
        fc(
          t,
          !0,
          u,
          null,
          n
        );
        break;
      case "together":
        fc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function pt(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), au |= t.lanes, (u & t.childLanes) === 0)
      if (l !== null) {
        if (Ga(
          l,
          t,
          u,
          !1
        ), (u & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(r(153));
    if (t.child !== null) {
      for (l = t.child, u = Ut(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; )
        l = l.sibling, u = u.sibling = Ut(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function cc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ze(l)));
  }
  function Nd(l, t, u) {
    switch (t.tag) {
      case 3:
        vl(t, t.stateNode.containerInfo), Jt(t, _l, l.memoizedState.cache), Ya();
        break;
      case 27:
      case 5:
        pn(t);
        break;
      case 4:
        vl(t, t.stateNode.containerInfo);
        break;
      case 10:
        Jt(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Ft(t), t.flags |= 128, null) : (u & t.child.childLanes) !== 0 ? D0(l, t, u) : (Ft(t), l = pt(
            l,
            t,
            u
          ), l !== null ? l.sibling : null);
        Ft(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (a = (u & t.childLanes) !== 0, a || (Ga(
          l,
          t,
          u,
          !1
        ), a = (u & t.childLanes) !== 0), e) {
          if (a)
            return R0(
              l,
              t,
              u
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), z(Ol, Ol.current), a) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, A0(l, t, u);
      case 24:
        Jt(t, _l, l.memoizedState.cache);
    }
    return pt(l, t, u);
  }
  function H0(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Dl = !0;
      else {
        if (!cc(l, u) && (t.flags & 128) === 0)
          return Dl = !1, Nd(
            l,
            t,
            u
          );
        Dl = (l.flags & 131072) !== 0;
      }
    else
      Dl = !1, W && (t.flags & 1048576) !== 0 && fs(t, xe, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          l = t.pendingProps;
          var a = t.elementType, e = a._init;
          if (a = e(a._payload), t.type = a, typeof a == "function")
            rf(a) ? (l = Ru(a, l), t.tag = 1, t = O0(
              null,
              t,
              a,
              l,
              u
            )) : (t.tag = 0, t = lc(
              null,
              t,
              a,
              l,
              u
            ));
          else {
            if (a != null) {
              if (e = a.$$typeof, e === Zl) {
                t.tag = 11, t = b0(
                  null,
                  t,
                  a,
                  l,
                  u
                );
                break l;
              } else if (e === Jl) {
                t.tag = 14, t = T0(
                  null,
                  t,
                  a,
                  l,
                  u
                );
                break l;
              }
            }
            throw t = hu(a) || a, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return lc(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 1:
        return a = t.type, e = Ru(
          a,
          t.pendingProps
        ), O0(
          l,
          t,
          a,
          e,
          u
        );
      case 3:
        l: {
          if (vl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(r(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, Hf(l, t), Va(t, a, null, u);
          var f = t.memoizedState;
          if (a = f.cache, Jt(t, _l, a), a !== n.cache && _f(
            t,
            [_l],
            u,
            !0
          ), Ca(), a = f.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = M0(
                l,
                t,
                a,
                u
              );
              break l;
            } else if (a !== e) {
              e = ct(
                Error(r(424)),
                t
              ), pa(e), t = M0(
                l,
                t,
                a,
                u
              );
              break l;
            } else {
              switch (l = t.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (hl = St(l.firstChild), xl = t, W = !0, zu = null, Tt = !0, u = i0(
                t,
                null,
                a,
                u
              ), t.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (Ya(), a === e) {
              t = pt(
                l,
                t,
                u
              );
              break l;
            }
            Hl(
              l,
              t,
              a,
              u
            );
          }
          t = t.child;
        }
        return t;
      case 26:
        return nn(l, t), l === null ? (u = Yv(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = u : W || (u = t.type, l = t.pendingProps, a = En(
          G.current
        ).createElement(u), a[Gl] = t, a[jl] = l, ql(a, u, l), Ml(a), t.stateNode = a) : t.memoizedState = Yv(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return pn(t), l === null && W && (a = t.stateNode = Nv(
          t.type,
          t.pendingProps,
          G.current
        ), xl = t, Tt = !0, e = hl, cu(t.type) ? (jc = e, hl = St(
          a.firstChild
        )) : hl = e), Hl(
          l,
          t,
          t.pendingProps.children,
          u
        ), nn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && W && ((e = a = hl) && (a = n1(
          a,
          t.type,
          t.pendingProps,
          Tt
        ), a !== null ? (t.stateNode = a, xl = t, hl = St(
          a.firstChild
        ), Tt = !1, e = !0) : e = !1), e || _u(t)), pn(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, a = n.children, Xc(e, n) ? a = null : f !== null && Xc(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = Gf(
          l,
          t,
          zd,
          null,
          null,
          u
        ), ye._currentValue = e), nn(l, t), Hl(l, t, a, u), t.child;
      case 6:
        return l === null && W && ((l = u = hl) && (u = f1(
          u,
          t.pendingProps,
          Tt
        ), u !== null ? (t.stateNode = u, xl = t, hl = null, l = !0) : l = !1), l || _u(t)), null;
      case 13:
        return D0(l, t, u);
      case 4:
        return vl(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = na(
          t,
          null,
          a,
          u
        ) : Hl(
          l,
          t,
          a,
          u
        ), t.child;
      case 11:
        return b0(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 7:
        return Hl(
          l,
          t,
          t.pendingProps,
          u
        ), t.child;
      case 8:
        return Hl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 12:
        return Hl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 10:
        return a = t.pendingProps, Jt(t, t.type, a.value), Hl(
          l,
          t,
          a.children,
          u
        ), t.child;
      case 9:
        return e = t.type._context, a = t.pendingProps.children, Mu(t), e = Xl(e), a = a(e), t.flags |= 1, Hl(l, t, a, u), t.child;
      case 14:
        return T0(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 15:
        return E0(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 19:
        return R0(l, t, u);
      case 31:
        return a = t.pendingProps, u = t.mode, a = {
          mode: a.mode,
          children: a.children
        }, l === null ? (u = fn(
          a,
          u
        ), u.ref = t.ref, t.child = u, u.return = t, t = u) : (u = Ut(l.child, a), u.ref = t.ref, t.child = u, u.return = t, t = u), t;
      case 22:
        return A0(l, t, u);
      case 24:
        return Mu(t), a = Xl(_l), l === null ? (e = Df(), e === null && (e = fl, n = Of(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= u), e = n), t.memoizedState = {
          parent: a,
          cache: e
        }, Rf(t), Jt(t, _l, e)) : ((l.lanes & u) !== 0 && (Hf(l, t), Va(t, null, null, u), Ca()), e = l.memoizedState, n = t.memoizedState, e.parent !== a ? (e = { parent: a, cache: a }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), Jt(t, _l, a)) : (a = n.cache, Jt(t, _l, a), a !== e.cache && _f(
          t,
          [_l],
          u,
          !0
        ))), Hl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function Gt(l) {
    l.flags |= 4;
  }
  function N0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !xv(t)) {
      if (t = yt.current, t !== null && ((L & 4194048) === L ? Et !== null : (L & 62914560) !== L && (L & 536870912) === 0 || t !== Et))
        throw Za = Uf, hs;
      l.flags |= 8192;
    }
  }
  function cn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? si() : 536870912, l.lanes |= t, sa |= t);
  }
  function $a(l, t) {
    if (!W)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var u = null; t !== null; )
            t.alternate !== null && (u = t), t = t.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var a = null; u !== null; )
            u.alternate !== null && (a = u), u = u.sibling;
          a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
      }
  }
  function dl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, u = 0, a = 0;
    if (t)
      for (var e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags & 65011712, a |= e.flags & 65011712, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags, a |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= a, l.childLanes = u, t;
  }
  function qd(l, t, u) {
    var a = t.pendingProps;
    switch (Tf(t), t.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return dl(t), null;
      case 1:
        return dl(t), null;
      case 3:
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), qt(_l), Ct(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (Ba(t) ? Gt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ss())), dl(t), null;
      case 26:
        return u = t.memoizedState, l === null ? (Gt(t), u !== null ? (dl(t), N0(t, u)) : (dl(t), t.flags &= -16777217)) : u ? u !== l.memoizedState ? (Gt(t), dl(t), N0(t, u)) : (dl(t), t.flags &= -16777217) : (l.memoizedProps !== a && Gt(t), dl(t), t.flags &= -16777217), null;
      case 27:
        ge(t), u = G.current;
        var e = t.type;
        if (l !== null && t.stateNode != null)
          l.memoizedProps !== a && Gt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(r(166));
            return dl(t), null;
          }
          l = N.current, Ba(t) ? cs(t) : (l = Nv(e, a, u), t.stateNode = l, Gt(t));
        }
        return dl(t), null;
      case 5:
        if (ge(t), u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Gt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(r(166));
            return dl(t), null;
          }
          if (l = N.current, Ba(t))
            cs(t);
          else {
            switch (e = En(
              G.current
            ), l) {
              case 1:
                l = e.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                l = e.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    l = e.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    l = e.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    l = e.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof a.is == "string" ? e.createElement("select", { is: a.is }) : e.createElement("select"), a.multiple ? l.multiple = !0 : a.size && (l.size = a.size);
                    break;
                  default:
                    l = typeof a.is == "string" ? e.createElement(u, { is: a.is }) : e.createElement(u);
                }
            }
            l[Gl] = t, l[jl] = a;
            l: for (e = t.child; e !== null; ) {
              if (e.tag === 5 || e.tag === 6)
                l.appendChild(e.stateNode);
              else if (e.tag !== 4 && e.tag !== 27 && e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
              }
              if (e === t) break l;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                  break l;
                e = e.return;
              }
              e.sibling.return = e.return, e = e.sibling;
            }
            t.stateNode = l;
            l: switch (ql(l, u, a), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!a.autoFocus;
                break l;
              case "img":
                l = !0;
                break l;
              default:
                l = !1;
            }
            l && Gt(t);
          }
        }
        return dl(t), t.flags &= -16777217, null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && Gt(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(r(166));
          if (l = G.current, Ba(t)) {
            if (l = t.stateNode, u = t.memoizedProps, a = null, e = xl, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  a = e.memoizedProps;
              }
            l[Gl] = t, l = !!(l.nodeValue === u || a !== null && a.suppressHydrationWarning === !0 || _v(l.nodeValue, u)), l || _u(t);
          } else
            l = En(l).createTextNode(
              a
            ), l[Gl] = t, t.stateNode = l;
        }
        return dl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = Ba(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
              e[Gl] = t;
            } else
              Ya(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            dl(t), e = !1;
          } else
            e = ss(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (Yt(t), t) : (Yt(t), null);
        }
        if (Yt(t), (t.flags & 128) !== 0)
          return t.lanes = u, t;
        if (u = a !== null, l = l !== null && l.memoizedState !== null, u) {
          a = t.child, e = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (e = a.alternate.memoizedState.cachePool.pool);
          var n = null;
          a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== e && (a.flags |= 2048);
        }
        return u !== l && u && (t.child.flags |= 8192), cn(t, t.updateQueue), dl(t), null;
      case 4:
        return Ct(), l === null && qc(t.stateNode.containerInfo), dl(t), null;
      case 10:
        return qt(t.type), dl(t), null;
      case 19:
        if (M(Ol), e = t.memoizedState, e === null) return dl(t), null;
        if (a = (t.flags & 128) !== 0, n = e.rendering, n === null)
          if (a) $a(e, !1);
          else {
            if (ml !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = un(l), n !== null) {
                  for (t.flags |= 128, $a(e, !1), l = n.updateQueue, t.updateQueue = l, cn(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; )
                    ns(u, l), u = u.sibling;
                  return z(
                    Ol,
                    Ol.current & 1 | 2
                  ), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null && bt() > yn && (t.flags |= 128, a = !0, $a(e, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (l = un(n), l !== null) {
              if (t.flags |= 128, a = !0, l = l.updateQueue, t.updateQueue = l, cn(t, l), $a(e, !0), e.tail === null && e.tailMode === "hidden" && !n.alternate && !W)
                return dl(t), null;
            } else
              2 * bt() - e.renderingStartTime > yn && u !== 536870912 && (t.flags |= 128, a = !0, $a(e, !1), t.lanes = 4194304);
          e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n);
        }
        return e.tail !== null ? (t = e.tail, e.rendering = t, e.tail = t.sibling, e.renderingStartTime = bt(), t.sibling = null, l = Ol.current, z(Ol, a ? l & 1 | 2 : l & 1), t) : (dl(t), null);
      case 22:
      case 23:
        return Yt(t), Yf(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (dl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : dl(t), u = t.updateQueue, u !== null && cn(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && M(Du), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), qt(_l), dl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function Bd(l, t) {
    switch (Tf(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return qt(_l), Ct(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return ge(t), null;
      case 13:
        if (Yt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          Ya();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return M(Ol), null;
      case 4:
        return Ct(), null;
      case 10:
        return qt(t.type), null;
      case 22:
      case 23:
        return Yt(t), Yf(), l !== null && M(Du), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return qt(_l), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function q0(l, t) {
    switch (Tf(t), t.tag) {
      case 3:
        qt(_l), Ct();
        break;
      case 26:
      case 27:
      case 5:
        ge(t);
        break;
      case 4:
        Ct();
        break;
      case 13:
        Yt(t);
        break;
      case 19:
        M(Ol);
        break;
      case 10:
        qt(t.type);
        break;
      case 22:
      case 23:
        Yt(t), Yf(), l !== null && M(Du);
        break;
      case 24:
        qt(_l);
    }
  }
  function Fa(l, t) {
    try {
      var u = t.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var e = a.next;
        u = e;
        do {
          if ((u.tag & l) === l) {
            a = void 0;
            var n = u.create, f = u.inst;
            a = n(), f.destroy = a;
          }
          u = u.next;
        } while (u !== e);
      }
    } catch (c) {
      nl(t, t.return, c);
    }
  }
  function Pt(l, t, u) {
    try {
      var a = t.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var f = a.inst, c = f.destroy;
            if (c !== void 0) {
              f.destroy = void 0, e = t;
              var i = u, o = c;
              try {
                o();
              } catch (S) {
                nl(
                  e,
                  i,
                  S
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (S) {
      nl(t, t.return, S);
    }
  }
  function B0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        Ts(t, u);
      } catch (a) {
        nl(l, l.return, a);
      }
    }
  }
  function Y0(l, t, u) {
    u.props = Ru(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (a) {
      nl(l, t, a);
    }
  }
  function Ia(l, t) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(a) : u.current = a;
      }
    } catch (e) {
      nl(l, t, e);
    }
  }
  function At(l, t) {
    var u = l.ref, a = l.refCleanup;
    if (u !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (e) {
          nl(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (e) {
          nl(l, t, e);
        }
      else u.current = null;
  }
  function p0(l) {
    var t = l.type, u = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && a.focus();
          break l;
        case "img":
          u.src ? a.src = u.src : u.srcSet && (a.srcset = u.srcSet);
      }
    } catch (e) {
      nl(l, l.return, e);
    }
  }
  function ic(l, t, u) {
    try {
      var a = l.stateNode;
      l1(a, l.type, u, t), a[jl] = t;
    } catch (e) {
      nl(l, l.return, e);
    }
  }
  function G0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && cu(l.type) || l.tag === 4;
  }
  function sc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || G0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && cu(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function vc(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(l), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = Tn));
    else if (a !== 4 && (a === 27 && cu(l.type) && (u = l.stateNode, t = null), l = l.child, l !== null))
      for (vc(l, t, u), l = l.sibling; l !== null; )
        vc(l, t, u), l = l.sibling;
  }
  function sn(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? u.insertBefore(l, t) : u.appendChild(l);
    else if (a !== 4 && (a === 27 && cu(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (sn(l, t, u), l = l.sibling; l !== null; )
        sn(l, t, u), l = l.sibling;
  }
  function X0(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      ql(t, a, u), t[Gl] = l, t[jl] = u;
    } catch (n) {
      nl(l, l.return, n);
    }
  }
  var Xt = !1, bl = !1, yc = !1, Q0 = typeof WeakSet == "function" ? WeakSet : Set, Ul = null;
  function Yd(l, t) {
    if (l = l.containerInfo, pc = Dn, l = Wi(l), sf(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var a = u.getSelection && u.getSelection();
          if (a && a.rangeCount !== 0) {
            u = a.anchorNode;
            var e = a.anchorOffset, n = a.focusNode;
            a = a.focusOffset;
            try {
              u.nodeType, n.nodeType;
            } catch {
              u = null;
              break l;
            }
            var f = 0, c = -1, i = -1, o = 0, S = 0, T = l, h = null;
            t: for (; ; ) {
              for (var m; T !== u || e !== 0 && T.nodeType !== 3 || (c = f + e), T !== n || a !== 0 && T.nodeType !== 3 || (i = f + a), T.nodeType === 3 && (f += T.nodeValue.length), (m = T.firstChild) !== null; )
                h = T, T = m;
              for (; ; ) {
                if (T === l) break t;
                if (h === u && ++o === e && (c = f), h === n && ++S === a && (i = f), (m = T.nextSibling) !== null) break;
                T = h, h = T.parentNode;
              }
              T = m;
            }
            u = c === -1 || i === -1 ? null : { start: c, end: i };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Gc = { focusedElem: l, selectionRange: u }, Dn = !1, Ul = t; Ul !== null; )
      if (t = Ul, l = t.child, (t.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = t, Ul = l;
      else
        for (; Ul !== null; ) {
          switch (t = Ul, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, u = t, e = n.memoizedProps, n = n.memoizedState, a = u.stateNode;
                try {
                  var p = Ru(
                    u.type,
                    e,
                    u.elementType === u.type
                  );
                  l = a.getSnapshotBeforeUpdate(
                    p,
                    n
                  ), a.__reactInternalSnapshotBeforeUpdate = l;
                } catch (q) {
                  nl(
                    u,
                    u.return,
                    q
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, u = l.nodeType, u === 9)
                  xc(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      xc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(r(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Ul = l;
            break;
          }
          Ul = t.return;
        }
  }
  function x0(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        lu(l, u), a & 4 && Fa(5, u);
        break;
      case 1:
        if (lu(l, u), a & 4)
          if (l = u.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (f) {
              nl(u, u.return, f);
            }
          else {
            var e = Ru(
              u.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                e,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              nl(
                u,
                u.return,
                f
              );
            }
          }
        a & 64 && B0(u), a & 512 && Ia(u, u.return);
        break;
      case 3:
        if (lu(l, u), a & 64 && (l = u.updateQueue, l !== null)) {
          if (t = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                t = u.child.stateNode;
                break;
              case 1:
                t = u.child.stateNode;
            }
          try {
            Ts(l, t);
          } catch (f) {
            nl(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && X0(u);
      case 26:
      case 5:
        lu(l, u), t === null && a & 4 && p0(u), a & 512 && Ia(u, u.return);
        break;
      case 12:
        lu(l, u);
        break;
      case 13:
        lu(l, u), a & 4 && C0(l, u), a & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = Vd.bind(
          null,
          u
        ), c1(l, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || Xt, !a) {
          t = t !== null && t.memoizedState !== null || bl, e = Xt;
          var n = bl;
          Xt = a, (bl = t) && !n ? tu(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : lu(l, u), Xt = e, bl = n;
        }
        break;
      case 30:
        break;
      default:
        lu(l, u);
    }
  }
  function Z0(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, Z0(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Vn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var yl = null, Ll = !1;
  function Qt(l, t, u) {
    for (u = u.child; u !== null; )
      j0(l, t, u), u = u.sibling;
  }
  function j0(l, t, u) {
    if (Wl && typeof Wl.onCommitFiberUnmount == "function")
      try {
        Wl.onCommitFiberUnmount(ba, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        bl || At(u, t), Qt(
          l,
          t,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        bl || At(u, t);
        var a = yl, e = Ll;
        cu(u.type) && (yl = u.stateNode, Ll = !1), Qt(
          l,
          t,
          u
        ), ce(u.stateNode), yl = a, Ll = e;
        break;
      case 5:
        bl || At(u, t);
      case 6:
        if (a = yl, e = Ll, yl = null, Qt(
          l,
          t,
          u
        ), yl = a, Ll = e, yl !== null)
          if (Ll)
            try {
              (yl.nodeType === 9 ? yl.body : yl.nodeName === "HTML" ? yl.ownerDocument.body : yl).removeChild(u.stateNode);
            } catch (n) {
              nl(
                u,
                t,
                n
              );
            }
          else
            try {
              yl.removeChild(u.stateNode);
            } catch (n) {
              nl(
                u,
                t,
                n
              );
            }
        break;
      case 18:
        yl !== null && (Ll ? (l = yl, Rv(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), me(l)) : Rv(yl, u.stateNode));
        break;
      case 4:
        a = yl, e = Ll, yl = u.stateNode.containerInfo, Ll = !0, Qt(
          l,
          t,
          u
        ), yl = a, Ll = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        bl || Pt(2, u, t), bl || Pt(4, u, t), Qt(
          l,
          t,
          u
        );
        break;
      case 1:
        bl || (At(u, t), a = u.stateNode, typeof a.componentWillUnmount == "function" && Y0(
          u,
          t,
          a
        )), Qt(
          l,
          t,
          u
        );
        break;
      case 21:
        Qt(
          l,
          t,
          u
        );
        break;
      case 22:
        bl = (a = bl) || u.memoizedState !== null, Qt(
          l,
          t,
          u
        ), bl = a;
        break;
      default:
        Qt(
          l,
          t,
          u
        );
    }
  }
  function C0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        me(l);
      } catch (u) {
        nl(t, t.return, u);
      }
  }
  function pd(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Q0()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Q0()), t;
      default:
        throw Error(r(435, l.tag));
    }
  }
  function dc(l, t) {
    var u = pd(l);
    t.forEach(function(a) {
      var e = Ld.bind(null, l, a);
      u.has(a) || (u.add(a), a.then(e, e));
    });
  }
  function Pl(l, t) {
    var u = t.deletions;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a], n = l, f = t, c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (cu(c.type)) {
                yl = c.stateNode, Ll = !1;
                break l;
              }
              break;
            case 5:
              yl = c.stateNode, Ll = !1;
              break l;
            case 3:
            case 4:
              yl = c.stateNode.containerInfo, Ll = !0;
              break l;
          }
          c = c.return;
        }
        if (yl === null) throw Error(r(160));
        j0(n, f, e), yl = null, Ll = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        V0(t, l), t = t.sibling;
  }
  var rt = null;
  function V0(l, t) {
    var u = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Pl(t, l), lt(l), a & 4 && (Pt(3, l, l.return), Fa(3, l), Pt(5, l, l.return));
        break;
      case 1:
        Pl(t, l), lt(l), a & 512 && (bl || u === null || At(u, u.return)), a & 64 && Xt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? a : u.concat(a))));
        break;
      case 26:
        var e = rt;
        if (Pl(t, l), lt(l), a & 512 && (bl || u === null || At(u, u.return)), a & 4) {
          var n = u !== null ? u.memoizedState : null;
          if (a = l.memoizedState, u === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, u = l.memoizedProps, e = e.ownerDocument || e;
                  t: switch (a) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[Aa] || n[Gl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(a), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), ql(n, a, u), n[Gl] = l, Ml(n), a = n;
                      break l;
                    case "link":
                      var f = Xv(
                        "link",
                        "href",
                        e
                      ).get(a + (u.href || ""));
                      if (f) {
                        for (var c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && n.getAttribute("rel") === (u.rel == null ? null : u.rel) && n.getAttribute("title") === (u.title == null ? null : u.title) && n.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(a), ql(n, a, u), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (f = Xv(
                        "meta",
                        "content",
                        e
                      ).get(a + (u.content || ""))) {
                        for (c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("content") === (u.content == null ? null : "" + u.content) && n.getAttribute("name") === (u.name == null ? null : u.name) && n.getAttribute("property") === (u.property == null ? null : u.property) && n.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && n.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(a), ql(n, a, u), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  n[Gl] = l, Ml(n), a = n;
                }
                l.stateNode = a;
              } else
                Qv(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Gv(
                e,
                a,
                l.memoizedProps
              );
          else
            n !== a ? (n === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : n.count--, a === null ? Qv(
              e,
              l.type,
              l.stateNode
            ) : Gv(
              e,
              a,
              l.memoizedProps
            )) : a === null && l.stateNode !== null && ic(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Pl(t, l), lt(l), a & 512 && (bl || u === null || At(u, u.return)), u !== null && a & 4 && ic(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Pl(t, l), lt(l), a & 512 && (bl || u === null || At(u, u.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            ju(e, "");
          } catch (m) {
            nl(l, l.return, m);
          }
        }
        a & 4 && l.stateNode != null && (e = l.memoizedProps, ic(
          l,
          e,
          u !== null ? u.memoizedProps : e
        )), a & 1024 && (yc = !0);
        break;
      case 6:
        if (Pl(t, l), lt(l), a & 4) {
          if (l.stateNode === null)
            throw Error(r(162));
          a = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = a;
          } catch (m) {
            nl(l, l.return, m);
          }
        }
        break;
      case 3:
        if (_n = null, e = rt, rt = An(t.containerInfo), Pl(t, l), rt = e, lt(l), a & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            me(t.containerInfo);
          } catch (m) {
            nl(l, l.return, m);
          }
        yc && (yc = !1, L0(l));
        break;
      case 4:
        a = rt, rt = An(
          l.stateNode.containerInfo
        ), Pl(t, l), lt(l), rt = a;
        break;
      case 12:
        Pl(t, l), lt(l);
        break;
      case 13:
        Pl(t, l), lt(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (gc = bt()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, dc(l, a)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = u !== null && u.memoizedState !== null, o = Xt, S = bl;
        if (Xt = o || e, bl = S || i, Pl(t, l), bl = S, Xt = o, lt(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (u === null || i || Xt || bl || Hu(l)), u = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (u === null) {
                i = u = t;
                try {
                  if (n = i.stateNode, e)
                    f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    c = i.stateNode;
                    var T = i.memoizedProps.style, h = T != null && T.hasOwnProperty("display") ? T.display : null;
                    c.style.display = h == null || typeof h == "boolean" ? "" : ("" + h).trim();
                  }
                } catch (m) {
                  nl(i, i.return, m);
                }
              }
            } else if (t.tag === 6) {
              if (u === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (m) {
                  nl(i, i.return, m);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              u === t && (u = null), t = t.return;
            }
            u === t && (u = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = l.updateQueue, a !== null && (u = a.retryQueue, u !== null && (a.retryQueue = null, dc(l, u))));
        break;
      case 19:
        Pl(t, l), lt(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, dc(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Pl(t, l), lt(l);
    }
  }
  function lt(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, a = l.return; a !== null; ) {
          if (G0(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        if (u == null) throw Error(r(160));
        switch (u.tag) {
          case 27:
            var e = u.stateNode, n = sc(l);
            sn(l, n, e);
            break;
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (ju(f, ""), u.flags &= -33);
            var c = sc(l);
            sn(l, c, f);
            break;
          case 3:
          case 4:
            var i = u.stateNode.containerInfo, o = sc(l);
            vc(
              l,
              o,
              i
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (S) {
        nl(l, l.return, S);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function L0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        L0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function lu(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        x0(l, t.alternate, t), t = t.sibling;
  }
  function Hu(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Pt(4, t, t.return), Hu(t);
          break;
        case 1:
          At(t, t.return);
          var u = t.stateNode;
          typeof u.componentWillUnmount == "function" && Y0(
            t,
            t.return,
            u
          ), Hu(t);
          break;
        case 27:
          ce(t.stateNode);
        case 26:
        case 5:
          At(t, t.return), Hu(t);
          break;
        case 22:
          t.memoizedState === null && Hu(t);
          break;
        case 30:
          Hu(t);
          break;
        default:
          Hu(t);
      }
      l = l.sibling;
    }
  }
  function tu(l, t, u) {
    for (u = u && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, e = l, n = t, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          tu(
            e,
            n,
            u
          ), Fa(4, n);
          break;
        case 1:
          if (tu(
            e,
            n,
            u
          ), a = n, e = a.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (o) {
              nl(a, a.return, o);
            }
          if (a = n, e = a.updateQueue, e !== null) {
            var c = a.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  bs(i[e], c);
            } catch (o) {
              nl(a, a.return, o);
            }
          }
          u && f & 64 && B0(n), Ia(n, n.return);
          break;
        case 27:
          X0(n);
        case 26:
        case 5:
          tu(
            e,
            n,
            u
          ), u && a === null && f & 4 && p0(n), Ia(n, n.return);
          break;
        case 12:
          tu(
            e,
            n,
            u
          );
          break;
        case 13:
          tu(
            e,
            n,
            u
          ), u && f & 4 && C0(e, n);
          break;
        case 22:
          n.memoizedState === null && tu(
            e,
            n,
            u
          ), Ia(n, n.return);
          break;
        case 30:
          break;
        default:
          tu(
            e,
            n,
            u
          );
      }
      t = t.sibling;
    }
  }
  function oc(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Xa(u));
  }
  function hc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Xa(l));
  }
  function zt(l, t, u, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        K0(
          l,
          t,
          u,
          a
        ), t = t.sibling;
  }
  function K0(l, t, u, a) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        zt(
          l,
          t,
          u,
          a
        ), e & 2048 && Fa(9, t);
        break;
      case 1:
        zt(
          l,
          t,
          u,
          a
        );
        break;
      case 3:
        zt(
          l,
          t,
          u,
          a
        ), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Xa(l)));
        break;
      case 12:
        if (e & 2048) {
          zt(
            l,
            t,
            u,
            a
          ), l = t.stateNode;
          try {
            var n = t.memoizedProps, f = n.id, c = n.onPostCommit;
            typeof c == "function" && c(
              f,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (i) {
            nl(t, t.return, i);
          }
        } else
          zt(
            l,
            t,
            u,
            a
          );
        break;
      case 13:
        zt(
          l,
          t,
          u,
          a
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, f = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? zt(
          l,
          t,
          u,
          a
        ) : Pa(l, t) : n._visibility & 2 ? zt(
          l,
          t,
          u,
          a
        ) : (n._visibility |= 2, fa(
          l,
          t,
          u,
          a,
          (t.subtreeFlags & 10256) !== 0
        )), e & 2048 && oc(f, t);
        break;
      case 24:
        zt(
          l,
          t,
          u,
          a
        ), e & 2048 && hc(t.alternate, t);
        break;
      default:
        zt(
          l,
          t,
          u,
          a
        );
    }
  }
  function fa(l, t, u, a, e) {
    for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = l, f = t, c = u, i = a, o = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          fa(
            n,
            f,
            c,
            i,
            e
          ), Fa(8, f);
          break;
        case 23:
          break;
        case 22:
          var S = f.stateNode;
          f.memoizedState !== null ? S._visibility & 2 ? fa(
            n,
            f,
            c,
            i,
            e
          ) : Pa(
            n,
            f
          ) : (S._visibility |= 2, fa(
            n,
            f,
            c,
            i,
            e
          )), e && o & 2048 && oc(
            f.alternate,
            f
          );
          break;
        case 24:
          fa(
            n,
            f,
            c,
            i,
            e
          ), e && o & 2048 && hc(f.alternate, f);
          break;
        default:
          fa(
            n,
            f,
            c,
            i,
            e
          );
      }
      t = t.sibling;
    }
  }
  function Pa(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var u = l, a = t, e = a.flags;
        switch (a.tag) {
          case 22:
            Pa(u, a), e & 2048 && oc(
              a.alternate,
              a
            );
            break;
          case 24:
            Pa(u, a), e & 2048 && hc(a.alternate, a);
            break;
          default:
            Pa(u, a);
        }
        t = t.sibling;
      }
  }
  var le = 8192;
  function ca(l) {
    if (l.subtreeFlags & le)
      for (l = l.child; l !== null; )
        J0(l), l = l.sibling;
  }
  function J0(l) {
    switch (l.tag) {
      case 26:
        ca(l), l.flags & le && l.memoizedState !== null && T1(
          rt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        ca(l);
        break;
      case 3:
      case 4:
        var t = rt;
        rt = An(l.stateNode.containerInfo), ca(l), rt = t;
        break;
      case 22:
        l.memoizedState === null && (t = l.alternate, t !== null && t.memoizedState !== null ? (t = le, le = 16777216, ca(l), le = t) : ca(l));
        break;
      default:
        ca(l);
    }
  }
  function w0(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function te(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Ul = a, W0(
            a,
            l
          );
        }
      w0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        k0(l), l = l.sibling;
  }
  function k0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        te(l), l.flags & 2048 && Pt(9, l, l.return);
        break;
      case 3:
        te(l);
        break;
      case 12:
        te(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, vn(l)) : te(l);
        break;
      default:
        te(l);
    }
  }
  function vn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Ul = a, W0(
            a,
            l
          );
        }
      w0(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          Pt(8, t, t.return), vn(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, vn(t));
          break;
        default:
          vn(t);
      }
      l = l.sibling;
    }
  }
  function W0(l, t) {
    for (; Ul !== null; ) {
      var u = Ul;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Pt(8, u, t);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var a = u.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Xa(u.memoizedState.cache);
      }
      if (a = u.child, a !== null) a.return = u, Ul = a;
      else
        l: for (u = l; Ul !== null; ) {
          a = Ul;
          var e = a.sibling, n = a.return;
          if (Z0(a), a === u) {
            Ul = null;
            break l;
          }
          if (e !== null) {
            e.return = n, Ul = e;
            break l;
          }
          Ul = n;
        }
    }
  }
  var Gd = {
    getCacheForType: function(l) {
      var t = Xl(_l), u = t.data.get(l);
      return u === void 0 && (u = l(), t.data.set(l, u)), u;
    }
  }, Xd = typeof WeakMap == "function" ? WeakMap : Map, F = 0, fl = null, j = null, L = 0, I = 0, tt = null, uu = !1, ia = !1, mc = !1, xt = 0, ml = 0, au = 0, Nu = 0, rc = 0, dt = 0, sa = 0, ue = null, Kl = null, Sc = !1, gc = 0, yn = 1 / 0, dn = null, eu = null, Nl = 0, nu = null, va = null, ya = 0, bc = 0, Tc = null, $0 = null, ae = 0, Ec = null;
  function ut() {
    if ((F & 2) !== 0 && L !== 0)
      return L & -L;
    if (g.T !== null) {
      var l = Iu;
      return l !== 0 ? l : Uc();
    }
    return di();
  }
  function F0() {
    dt === 0 && (dt = (L & 536870912) === 0 || W ? ii() : 536870912);
    var l = yt.current;
    return l !== null && (l.flags |= 32), dt;
  }
  function at(l, t, u) {
    (l === fl && (I === 2 || I === 9) || l.cancelPendingCommit !== null) && (da(l, 0), fu(
      l,
      L,
      dt,
      !1
    )), Ea(l, u), ((F & 2) === 0 || l !== fl) && (l === fl && ((F & 2) === 0 && (Nu |= u), ml === 4 && fu(
      l,
      L,
      dt,
      !1
    )), _t(l));
  }
  function I0(l, t, u) {
    if ((F & 6) !== 0) throw Error(r(327));
    var a = !u && (t & 124) === 0 && (t & l.expiredLanes) === 0 || Ta(l, t), e = a ? Zd(l, t) : _c(l, t, !0), n = a;
    do {
      if (e === 0) {
        ia && !a && fu(l, t, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, n && !Qd(u)) {
          e = _c(l, t, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var f = 0;
          else
            f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            l: {
              var c = l;
              e = ue;
              var i = c.current.memoizedState.isDehydrated;
              if (i && (da(c, f).flags |= 256), f = _c(
                c,
                f,
                !1
              ), f !== 2) {
                if (mc && !i) {
                  c.errorRecoveryDisabledLanes |= n, Nu |= n, e = 4;
                  break l;
                }
                n = Kl, Kl = e, n !== null && (Kl === null ? Kl = n : Kl.push.apply(
                  Kl,
                  n
                ));
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          da(l, 0), fu(l, t, 0, !0);
          break;
        }
        l: {
          switch (a = l, n = e, n) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              fu(
                a,
                t,
                dt,
                !uu
              );
              break l;
            case 2:
              Kl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && (e = gc + 300 - bt(), 10 < e)) {
            if (fu(
              a,
              t,
              dt,
              !uu
            ), Ae(a, 0, !0) !== 0) break l;
            a.timeoutHandle = Dv(
              P0.bind(
                null,
                a,
                u,
                Kl,
                dn,
                Sc,
                t,
                dt,
                Nu,
                sa,
                uu,
                n,
                2,
                -0,
                0
              ),
              e
            );
            break l;
          }
          P0(
            a,
            u,
            Kl,
            dn,
            Sc,
            t,
            dt,
            Nu,
            sa,
            uu,
            n,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    _t(l);
  }
  function P0(l, t, u, a, e, n, f, c, i, o, S, T, h, m) {
    if (l.timeoutHandle = -1, T = t.subtreeFlags, (T & 8192 || (T & 16785408) === 16785408) && (ve = { stylesheets: null, count: 0, unsuspend: b1 }, J0(t), T = E1(), T !== null)) {
      l.cancelPendingCommit = T(
        fv.bind(
          null,
          l,
          t,
          n,
          u,
          a,
          e,
          f,
          c,
          i,
          S,
          1,
          h,
          m
        )
      ), fu(l, n, f, !o);
      return;
    }
    fv(
      l,
      t,
      n,
      u,
      a,
      e,
      f,
      c,
      i
    );
  }
  function Qd(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if ((u === 0 || u === 11 || u === 15) && t.flags & 16384 && (u = t.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var a = 0; a < u.length; a++) {
          var e = u[a], n = e.getSnapshot;
          e = e.value;
          try {
            if (!Fl(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = t.child, t.subtreeFlags & 16384 && u !== null)
        u.return = t, t = u;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function fu(l, t, u, a) {
    t &= ~rc, t &= ~Nu, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - $l(e), f = 1 << n;
      a[n] = -1, e &= ~f;
    }
    u !== 0 && vi(l, u, t);
  }
  function on() {
    return (F & 6) === 0 ? (ee(0), !1) : !0;
  }
  function Ac() {
    if (j !== null) {
      if (I === 0)
        var l = j.return;
      else
        l = j, Nt = Ou = null, xf(l), ea = null, ka = 0, l = j;
      for (; l !== null; )
        q0(l.alternate, l), l = l.return;
      j = null;
    }
  }
  function da(l, t) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, u1(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Ac(), fl = l, j = u = Ut(l.current, null), L = t, I = 0, tt = null, uu = !1, ia = Ta(l, t), mc = !1, sa = dt = rc = Nu = au = ml = 0, Kl = ue = null, Sc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var e = 31 - $l(a), n = 1 << e;
        t |= l[e], a &= ~n;
      }
    return xt = t, Ye(), u;
  }
  function lv(l, t) {
    Q = null, g.H = Pe, t === xa || t === Ve ? (t = Ss(), I = 3) : t === hs ? (t = Ss(), I = 4) : I = t === g0 ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, tt = t, j === null && (ml = 1, en(
      l,
      ct(t, l.current)
    ));
  }
  function tv() {
    var l = g.H;
    return g.H = Pe, l === null ? Pe : l;
  }
  function uv() {
    var l = g.A;
    return g.A = Gd, l;
  }
  function zc() {
    ml = 4, uu || (L & 4194048) !== L && yt.current !== null || (ia = !0), (au & 134217727) === 0 && (Nu & 134217727) === 0 || fl === null || fu(
      fl,
      L,
      dt,
      !1
    );
  }
  function _c(l, t, u) {
    var a = F;
    F |= 2;
    var e = tv(), n = uv();
    (fl !== l || L !== t) && (dn = null, da(l, t)), t = !1;
    var f = ml;
    l: do
      try {
        if (I !== 0 && j !== null) {
          var c = j, i = tt;
          switch (I) {
            case 8:
              Ac(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              yt.current === null && (t = !0);
              var o = I;
              if (I = 0, tt = null, oa(l, c, i, o), u && ia) {
                f = 0;
                break l;
              }
              break;
            default:
              o = I, I = 0, tt = null, oa(l, c, i, o);
          }
        }
        xd(), f = ml;
        break;
      } catch (S) {
        lv(l, S);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Nt = Ou = null, F = a, g.H = e, g.A = n, j === null && (fl = null, L = 0, Ye()), f;
  }
  function xd() {
    for (; j !== null; ) av(j);
  }
  function Zd(l, t) {
    var u = F;
    F |= 2;
    var a = tv(), e = uv();
    fl !== l || L !== t ? (dn = null, yn = bt() + 500, da(l, t)) : ia = Ta(
      l,
      t
    );
    l: do
      try {
        if (I !== 0 && j !== null) {
          t = j;
          var n = tt;
          t: switch (I) {
            case 1:
              I = 0, tt = null, oa(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (ms(n)) {
                I = 0, tt = null, ev(t);
                break;
              }
              t = function() {
                I !== 2 && I !== 9 || fl !== l || (I = 7), _t(l);
              }, n.then(t, t);
              break l;
            case 3:
              I = 7;
              break l;
            case 4:
              I = 5;
              break l;
            case 7:
              ms(n) ? (I = 0, tt = null, ev(t)) : (I = 0, tt = null, oa(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (j.tag) {
                case 26:
                  f = j.memoizedState;
                case 5:
                case 27:
                  var c = j;
                  if (!f || xv(f)) {
                    I = 0, tt = null;
                    var i = c.sibling;
                    if (i !== null) j = i;
                    else {
                      var o = c.return;
                      o !== null ? (j = o, hn(o)) : j = null;
                    }
                    break t;
                  }
              }
              I = 0, tt = null, oa(l, t, n, 5);
              break;
            case 6:
              I = 0, tt = null, oa(l, t, n, 6);
              break;
            case 8:
              Ac(), ml = 6;
              break l;
            default:
              throw Error(r(462));
          }
        }
        jd();
        break;
      } catch (S) {
        lv(l, S);
      }
    while (!0);
    return Nt = Ou = null, g.H = a, g.A = e, F = u, j !== null ? 0 : (fl = null, L = 0, Ye(), ml);
  }
  function jd() {
    for (; j !== null && !sy(); )
      av(j);
  }
  function av(l) {
    var t = H0(l.alternate, l, xt);
    l.memoizedProps = l.pendingProps, t === null ? hn(l) : j = t;
  }
  function ev(l) {
    var t = l, u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = _0(
          u,
          t,
          t.pendingProps,
          t.type,
          void 0,
          L
        );
        break;
      case 11:
        t = _0(
          u,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          L
        );
        break;
      case 5:
        xf(t);
      default:
        q0(u, t), t = j = ns(t, xt), t = H0(u, t, xt);
    }
    l.memoizedProps = l.pendingProps, t === null ? hn(l) : j = t;
  }
  function oa(l, t, u, a) {
    Nt = Ou = null, xf(t), ea = null, ka = 0;
    var e = t.return;
    try {
      if (Hd(
        l,
        e,
        t,
        u,
        L
      )) {
        ml = 1, en(
          l,
          ct(u, l.current)
        ), j = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw j = e, n;
      ml = 1, en(
        l,
        ct(u, l.current)
      ), j = null;
      return;
    }
    t.flags & 32768 ? (W || a === 1 ? l = !0 : ia || (L & 536870912) !== 0 ? l = !1 : (uu = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = yt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), nv(t, l)) : hn(t);
  }
  function hn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        nv(
          t,
          uu
        );
        return;
      }
      l = t.return;
      var u = qd(
        t.alternate,
        t,
        xt
      );
      if (u !== null) {
        j = u;
        return;
      }
      if (t = t.sibling, t !== null) {
        j = t;
        return;
      }
      j = t = l;
    } while (t !== null);
    ml === 0 && (ml = 5);
  }
  function nv(l, t) {
    do {
      var u = Bd(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, j = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !t && (l = l.sibling, l !== null)) {
        j = l;
        return;
      }
      j = l = u;
    } while (l !== null);
    ml = 6, j = null;
  }
  function fv(l, t, u, a, e, n, f, c, i) {
    l.cancelPendingCommit = null;
    do
      mn();
    while (Nl !== 0);
    if ((F & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === l.current) throw Error(r(177));
      if (n = t.lanes | t.childLanes, n |= hf, by(
        l,
        u,
        n,
        f,
        c,
        i
      ), l === fl && (j = fl = null, L = 0), va = t, nu = l, ya = u, bc = n, Tc = e, $0 = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Kd(be, function() {
        return yv(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = g.T, g.T = null, e = _.p, _.p = 2, f = F, F |= 4;
        try {
          Yd(l, t, u);
        } finally {
          F = f, _.p = e, g.T = a;
        }
      }
      Nl = 1, cv(), iv(), sv();
    }
  }
  function cv() {
    if (Nl === 1) {
      Nl = 0;
      var l = nu, t = va, u = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || u) {
        u = g.T, g.T = null;
        var a = _.p;
        _.p = 2;
        var e = F;
        F |= 4;
        try {
          V0(t, l);
          var n = Gc, f = Wi(l.containerInfo), c = n.focusedElem, i = n.selectionRange;
          if (f !== c && c && c.ownerDocument && ki(
            c.ownerDocument.documentElement,
            c
          )) {
            if (i !== null && sf(c)) {
              var o = i.start, S = i.end;
              if (S === void 0 && (S = o), "selectionStart" in c)
                c.selectionStart = o, c.selectionEnd = Math.min(
                  S,
                  c.value.length
                );
              else {
                var T = c.ownerDocument || document, h = T && T.defaultView || window;
                if (h.getSelection) {
                  var m = h.getSelection(), p = c.textContent.length, q = Math.min(i.start, p), ul = i.end === void 0 ? q : Math.min(i.end, p);
                  !m.extend && q > ul && (f = ul, ul = q, q = f);
                  var y = wi(
                    c,
                    q
                  ), v = wi(
                    c,
                    ul
                  );
                  if (y && v && (m.rangeCount !== 1 || m.anchorNode !== y.node || m.anchorOffset !== y.offset || m.focusNode !== v.node || m.focusOffset !== v.offset)) {
                    var d = T.createRange();
                    d.setStart(y.node, y.offset), m.removeAllRanges(), q > ul ? (m.addRange(d), m.extend(v.node, v.offset)) : (d.setEnd(v.node, v.offset), m.addRange(d));
                  }
                }
              }
            }
            for (T = [], m = c; m = m.parentNode; )
              m.nodeType === 1 && T.push({
                element: m,
                left: m.scrollLeft,
                top: m.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < T.length; c++) {
              var b = T[c];
              b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
            }
          }
          Dn = !!pc, Gc = pc = null;
        } finally {
          F = e, _.p = a, g.T = u;
        }
      }
      l.current = t, Nl = 2;
    }
  }
  function iv() {
    if (Nl === 2) {
      Nl = 0;
      var l = nu, t = va, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = g.T, g.T = null;
        var a = _.p;
        _.p = 2;
        var e = F;
        F |= 4;
        try {
          x0(l, t.alternate, t);
        } finally {
          F = e, _.p = a, g.T = u;
        }
      }
      Nl = 3;
    }
  }
  function sv() {
    if (Nl === 4 || Nl === 3) {
      Nl = 0, vy();
      var l = nu, t = va, u = ya, a = $0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Nl = 5 : (Nl = 0, va = nu = null, vv(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (eu = null), jn(u), t = t.stateNode, Wl && typeof Wl.onCommitFiberRoot == "function")
        try {
          Wl.onCommitFiberRoot(
            ba,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = g.T, e = _.p, _.p = 2, g.T = null;
        try {
          for (var n = l.onRecoverableError, f = 0; f < a.length; f++) {
            var c = a[f];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          g.T = t, _.p = e;
        }
      }
      (ya & 3) !== 0 && mn(), _t(l), e = l.pendingLanes, (u & 4194090) !== 0 && (e & 42) !== 0 ? l === Ec ? ae++ : (ae = 0, Ec = l) : ae = 0, ee(0);
    }
  }
  function vv(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Xa(t)));
  }
  function mn(l) {
    return cv(), iv(), sv(), yv();
  }
  function yv() {
    if (Nl !== 5) return !1;
    var l = nu, t = bc;
    bc = 0;
    var u = jn(ya), a = g.T, e = _.p;
    try {
      _.p = 32 > u ? 32 : u, g.T = null, u = Tc, Tc = null;
      var n = nu, f = ya;
      if (Nl = 0, va = nu = null, ya = 0, (F & 6) !== 0) throw Error(r(331));
      var c = F;
      if (F |= 4, k0(n.current), K0(
        n,
        n.current,
        f,
        u
      ), F = c, ee(0, !1), Wl && typeof Wl.onPostCommitFiberRoot == "function")
        try {
          Wl.onPostCommitFiberRoot(ba, n);
        } catch {
        }
      return !0;
    } finally {
      _.p = e, g.T = a, vv(l, t);
    }
  }
  function dv(l, t, u) {
    t = ct(u, t), t = Pf(l.stateNode, t, 2), l = Wt(l, t, 2), l !== null && (Ea(l, 2), _t(l));
  }
  function nl(l, t, u) {
    if (l.tag === 3)
      dv(l, l, u);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          dv(
            t,
            l,
            u
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (eu === null || !eu.has(a))) {
            l = ct(u, l), u = r0(2), a = Wt(t, u, 2), a !== null && (S0(
              u,
              a,
              t,
              l
            ), Ea(a, 2), _t(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Oc(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Xd();
      var e = /* @__PURE__ */ new Set();
      a.set(t, e);
    } else
      e = a.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), a.set(t, e));
    e.has(u) || (mc = !0, e.add(u), l = Cd.bind(null, l, t, u), t.then(l, l));
  }
  function Cd(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, fl === l && (L & u) === u && (ml === 4 || ml === 3 && (L & 62914560) === L && 300 > bt() - gc ? (F & 2) === 0 && da(l, 0) : rc |= u, sa === L && (sa = 0)), _t(l);
  }
  function ov(l, t) {
    t === 0 && (t = si()), l = ku(l, t), l !== null && (Ea(l, t), _t(l));
  }
  function Vd(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), ov(l, u);
  }
  function Ld(l, t) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var a = l.stateNode, e = l.memoizedState;
        e !== null && (u = e.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(t), ov(l, u);
  }
  function Kd(l, t) {
    return Xn(l, t);
  }
  var rn = null, ha = null, Mc = !1, Sn = !1, Dc = !1, qu = 0;
  function _t(l) {
    l !== ha && l.next === null && (ha === null ? rn = ha = l : ha = ha.next = l), Sn = !0, Mc || (Mc = !0, wd());
  }
  function ee(l, t) {
    if (!Dc && Sn) {
      Dc = !0;
      do
        for (var u = !1, a = rn; a !== null; ) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - $l(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = !0, Sv(a, n));
          } else
            n = L, n = Ae(
              a,
              a === fl ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || Ta(a, n) || (u = !0, Sv(a, n));
          a = a.next;
        }
      while (u);
      Dc = !1;
    }
  }
  function Jd() {
    hv();
  }
  function hv() {
    Sn = Mc = !1;
    var l = 0;
    qu !== 0 && (t1() && (l = qu), qu = 0);
    for (var t = bt(), u = null, a = rn; a !== null; ) {
      var e = a.next, n = mv(a, t);
      n === 0 ? (a.next = null, u === null ? rn = e : u.next = e, e === null && (ha = u)) : (u = a, (l !== 0 || (n & 3) !== 0) && (Sn = !0)), a = e;
    }
    ee(l);
  }
  function mv(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - $l(n), c = 1 << f, i = e[f];
      i === -1 ? ((c & u) === 0 || (c & a) !== 0) && (e[f] = gy(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = fl, u = L, u = Ae(
      l,
      l === t ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, u === 0 || l === t && (I === 2 || I === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && Qn(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || Ta(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (a !== null && Qn(a), jn(u)) {
        case 2:
        case 8:
          u = fi;
          break;
        case 32:
          u = be;
          break;
        case 268435456:
          u = ci;
          break;
        default:
          u = be;
      }
      return a = rv.bind(null, l), u = Xn(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && Qn(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function rv(l, t) {
    if (Nl !== 0 && Nl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (mn() && l.callbackNode !== u)
      return null;
    var a = L;
    return a = Ae(
      l,
      l === fl ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (I0(l, a, t), mv(l, bt()), l.callbackNode != null && l.callbackNode === u ? rv.bind(null, l) : null);
  }
  function Sv(l, t) {
    if (mn()) return null;
    I0(l, t, !0);
  }
  function wd() {
    a1(function() {
      (F & 6) !== 0 ? Xn(
        ni,
        Jd
      ) : hv();
    });
  }
  function Uc() {
    return qu === 0 && (qu = ii()), qu;
  }
  function gv(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : De("" + l);
  }
  function bv(l, t) {
    var u = t.ownerDocument.createElement("input");
    return u.name = t.name, u.value = t.value, l.id && u.setAttribute("form", l.id), t.parentNode.insertBefore(u, t), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function kd(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = gv(
        (e[jl] || null).action
      ), f = a.submitter;
      f && (t = (t = f[jl] || null) ? gv(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var c = new Ne(
        "action",
        "action",
        null,
        a,
        e
      );
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (qu !== 0) {
                  var i = f ? bv(e, f) : new FormData(e);
                  kf(
                    u,
                    {
                      pending: !0,
                      data: i,
                      method: e.method,
                      action: n
                    },
                    null,
                    i
                  );
                }
              } else
                typeof n == "function" && (c.preventDefault(), i = f ? bv(e, f) : new FormData(e), kf(
                  u,
                  {
                    pending: !0,
                    data: i,
                    method: e.method,
                    action: n
                  },
                  n,
                  i
                ));
            },
            currentTarget: e
          }
        ]
      });
    }
  }
  for (var Rc = 0; Rc < of.length; Rc++) {
    var Hc = of[Rc], Wd = Hc.toLowerCase(), $d = Hc[0].toUpperCase() + Hc.slice(1);
    mt(
      Wd,
      "on" + $d
    );
  }
  mt(Ii, "onAnimationEnd"), mt(Pi, "onAnimationIteration"), mt(ls, "onAnimationStart"), mt("dblclick", "onDoubleClick"), mt("focusin", "onFocus"), mt("focusout", "onBlur"), mt(od, "onTransitionRun"), mt(hd, "onTransitionStart"), mt(md, "onTransitionCancel"), mt(ts, "onTransitionEnd"), Qu("onMouseEnter", ["mouseout", "mouseover"]), Qu("onMouseLeave", ["mouseout", "mouseover"]), Qu("onPointerEnter", ["pointerout", "pointerover"]), Qu("onPointerLeave", ["pointerout", "pointerover"]), ru(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ru(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ru("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ru(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ru(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ru(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ne = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Fd = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ne)
  );
  function Tv(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var a = l[u], e = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var c = a[f], i = c.instance, o = c.currentTarget;
            if (c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = o;
            try {
              n(e);
            } catch (S) {
              an(S);
            }
            e.currentTarget = null, n = i;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (c = a[f], i = c.instance, o = c.currentTarget, c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = o;
            try {
              n(e);
            } catch (S) {
              an(S);
            }
            e.currentTarget = null, n = i;
          }
      }
    }
  }
  function C(l, t) {
    var u = t[Cn];
    u === void 0 && (u = t[Cn] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    u.has(a) || (Ev(t, l, 2, !1), u.add(a));
  }
  function Nc(l, t, u) {
    var a = 0;
    t && (a |= 4), Ev(
      u,
      l,
      a,
      t
    );
  }
  var gn = "_reactListening" + Math.random().toString(36).slice(2);
  function qc(l) {
    if (!l[gn]) {
      l[gn] = !0, hi.forEach(function(u) {
        u !== "selectionchange" && (Fd.has(u) || Nc(u, !1, l), Nc(u, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[gn] || (t[gn] = !0, Nc("selectionchange", !1, t));
    }
  }
  function Ev(l, t, u, a) {
    switch (Kv(t)) {
      case 2:
        var e = _1;
        break;
      case 8:
        e = O1;
        break;
      default:
        e = Jc;
    }
    u = e.bind(
      null,
      t,
      u,
      l
    ), e = void 0, !Pn || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), a ? e !== void 0 ? l.addEventListener(t, u, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, u, !0) : e !== void 0 ? l.addEventListener(t, u, {
      passive: e
    }) : l.addEventListener(t, u, !1);
  }
  function Bc(l, t, u, a, e) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var c = a.stateNode.containerInfo;
          if (c === e) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var i = f.tag;
              if ((i === 3 || i === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; c !== null; ) {
            if (f = pu(c), f === null) return;
            if (i = f.tag, i === 5 || i === 6 || i === 26 || i === 27) {
              a = n = f;
              continue l;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    Ui(function() {
      var o = n, S = Fn(u), T = [];
      l: {
        var h = us.get(l);
        if (h !== void 0) {
          var m = Ne, p = l;
          switch (l) {
            case "keypress":
              if (Re(u) === 0) break l;
            case "keydown":
            case "keyup":
              m = Ky;
              break;
            case "focusin":
              p = "focus", m = af;
              break;
            case "focusout":
              p = "blur", m = af;
              break;
            case "beforeblur":
            case "afterblur":
              m = af;
              break;
            case "click":
              if (u.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              m = Ni;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              m = By;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              m = ky;
              break;
            case Ii:
            case Pi:
            case ls:
              m = Gy;
              break;
            case ts:
              m = $y;
              break;
            case "scroll":
            case "scrollend":
              m = Ny;
              break;
            case "wheel":
              m = Iy;
              break;
            case "copy":
            case "cut":
            case "paste":
              m = Qy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              m = Bi;
              break;
            case "toggle":
            case "beforetoggle":
              m = ld;
          }
          var q = (t & 4) !== 0, ul = !q && (l === "scroll" || l === "scrollend"), y = q ? h !== null ? h + "Capture" : null : h;
          q = [];
          for (var v = o, d; v !== null; ) {
            var b = v;
            if (d = b.stateNode, b = b.tag, b !== 5 && b !== 26 && b !== 27 || d === null || y === null || (b = _a(v, y), b != null && q.push(
              fe(v, b, d)
            )), ul) break;
            v = v.return;
          }
          0 < q.length && (h = new m(
            h,
            p,
            null,
            u,
            S
          ), T.push({ event: h, listeners: q }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (h = l === "mouseover" || l === "pointerover", m = l === "mouseout" || l === "pointerout", h && u !== $n && (p = u.relatedTarget || u.fromElement) && (pu(p) || p[Yu]))
            break l;
          if ((m || h) && (h = S.window === S ? S : (h = S.ownerDocument) ? h.defaultView || h.parentWindow : window, m ? (p = u.relatedTarget || u.toElement, m = o, p = p ? pu(p) : null, p !== null && (ul = ol(p), q = p.tag, p !== ul || q !== 5 && q !== 27 && q !== 6) && (p = null)) : (m = null, p = o), m !== p)) {
            if (q = Ni, b = "onMouseLeave", y = "onMouseEnter", v = "mouse", (l === "pointerout" || l === "pointerover") && (q = Bi, b = "onPointerLeave", y = "onPointerEnter", v = "pointer"), ul = m == null ? h : za(m), d = p == null ? h : za(p), h = new q(
              b,
              v + "leave",
              m,
              u,
              S
            ), h.target = ul, h.relatedTarget = d, b = null, pu(S) === o && (q = new q(
              y,
              v + "enter",
              p,
              u,
              S
            ), q.target = d, q.relatedTarget = ul, b = q), ul = b, m && p)
              t: {
                for (q = m, y = p, v = 0, d = q; d; d = ma(d))
                  v++;
                for (d = 0, b = y; b; b = ma(b))
                  d++;
                for (; 0 < v - d; )
                  q = ma(q), v--;
                for (; 0 < d - v; )
                  y = ma(y), d--;
                for (; v--; ) {
                  if (q === y || y !== null && q === y.alternate)
                    break t;
                  q = ma(q), y = ma(y);
                }
                q = null;
              }
            else q = null;
            m !== null && Av(
              T,
              h,
              m,
              q,
              !1
            ), p !== null && ul !== null && Av(
              T,
              ul,
              p,
              q,
              !0
            );
          }
        }
        l: {
          if (h = o ? za(o) : window, m = h.nodeName && h.nodeName.toLowerCase(), m === "select" || m === "input" && h.type === "file")
            var D = ji;
          else if (xi(h))
            if (Ci)
              D = vd;
            else {
              D = id;
              var Z = cd;
            }
          else
            m = h.nodeName, !m || m.toLowerCase() !== "input" || h.type !== "checkbox" && h.type !== "radio" ? o && Wn(o.elementType) && (D = ji) : D = sd;
          if (D && (D = D(l, o))) {
            Zi(
              T,
              D,
              u,
              S
            );
            break l;
          }
          Z && Z(l, h, o), l === "focusout" && o && h.type === "number" && o.memoizedProps.value != null && kn(h, "number", h.value);
        }
        switch (Z = o ? za(o) : window, l) {
          case "focusin":
            (xi(Z) || Z.contentEditable === "true") && (Ku = Z, vf = o, qa = null);
            break;
          case "focusout":
            qa = vf = Ku = null;
            break;
          case "mousedown":
            yf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            yf = !1, $i(T, u, S);
            break;
          case "selectionchange":
            if (dd) break;
          case "keydown":
          case "keyup":
            $i(T, u, S);
        }
        var R;
        if (nf)
          l: {
            switch (l) {
              case "compositionstart":
                var B = "onCompositionStart";
                break l;
              case "compositionend":
                B = "onCompositionEnd";
                break l;
              case "compositionupdate":
                B = "onCompositionUpdate";
                break l;
            }
            B = void 0;
          }
        else
          Lu ? Xi(l, u) && (B = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (B = "onCompositionStart");
        B && (Yi && u.locale !== "ko" && (Lu || B !== "onCompositionStart" ? B === "onCompositionEnd" && Lu && (R = Ri()) : (Kt = S, lf = "value" in Kt ? Kt.value : Kt.textContent, Lu = !0)), Z = bn(o, B), 0 < Z.length && (B = new qi(
          B,
          l,
          null,
          u,
          S
        ), T.push({ event: B, listeners: Z }), R ? B.data = R : (R = Qi(u), R !== null && (B.data = R)))), (R = ud ? ad(l, u) : ed(l, u)) && (B = bn(o, "onBeforeInput"), 0 < B.length && (Z = new qi(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          S
        ), T.push({
          event: Z,
          listeners: B
        }), Z.data = R)), kd(
          T,
          l,
          o,
          u,
          S
        );
      }
      Tv(T, t);
    });
  }
  function fe(l, t, u) {
    return {
      instance: l,
      listener: t,
      currentTarget: u
    };
  }
  function bn(l, t) {
    for (var u = t + "Capture", a = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = _a(l, u), e != null && a.unshift(
        fe(l, e, n)
      ), e = _a(l, t), e != null && a.push(
        fe(l, e, n)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function ma(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Av(l, t, u, a, e) {
    for (var n = t._reactName, f = []; u !== null && u !== a; ) {
      var c = u, i = c.alternate, o = c.stateNode;
      if (c = c.tag, i !== null && i === a) break;
      c !== 5 && c !== 26 && c !== 27 || o === null || (i = o, e ? (o = _a(u, n), o != null && f.unshift(
        fe(u, o, i)
      )) : e || (o = _a(u, n), o != null && f.push(
        fe(u, o, i)
      ))), u = u.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var Id = /\r\n?/g, Pd = /\u0000|\uFFFD/g;
  function zv(l) {
    return (typeof l == "string" ? l : "" + l).replace(Id, `
`).replace(Pd, "");
  }
  function _v(l, t) {
    return t = zv(t), zv(l) === t;
  }
  function Tn() {
  }
  function tl(l, t, u, a, e, n) {
    switch (u) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || ju(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && ju(l, "" + a);
        break;
      case "className":
        _e(l, "class", a);
        break;
      case "tabIndex":
        _e(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        _e(l, u, a);
        break;
      case "style":
        Mi(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          _e(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = De("" + a), l.setAttribute(u, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (u === "formAction" ? (t !== "input" && tl(l, t, "name", e.name, e, null), tl(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), tl(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), tl(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (tl(l, t, "encType", e.encType, e, null), tl(l, t, "method", e.method, e, null), tl(l, t, "target", e.target, e, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = De("" + a), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = Tn);
        break;
      case "onScroll":
        a != null && C("scroll", l);
        break;
      case "onScrollEnd":
        a != null && C("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(r(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = De("" + a), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "" + a) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        a === !0 ? l.setAttribute(u, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(u) : l.setAttribute(u, a);
        break;
      case "popover":
        C("beforetoggle", l), C("toggle", l), ze(l, "popover", a);
        break;
      case "xlinkActuate":
        Mt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Mt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Mt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Mt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Mt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Mt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Mt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Mt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Mt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        ze(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Ry.get(u) || u, ze(l, u, a));
    }
  }
  function Yc(l, t, u, a, e, n) {
    switch (u) {
      case "style":
        Mi(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(r(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof a == "string" ? ju(l, a) : (typeof a == "number" || typeof a == "bigint") && ju(l, "" + a);
        break;
      case "onScroll":
        a != null && C("scroll", l);
        break;
      case "onScrollEnd":
        a != null && C("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Tn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!mi.hasOwnProperty(u))
          l: {
            if (u[0] === "o" && u[1] === "n" && (e = u.endsWith("Capture"), t = u.slice(2, e ? u.length - 7 : void 0), n = l[jl] || null, n = n != null ? n[u] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof a == "function")) {
              typeof n != "function" && n !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(t, a, e);
              break l;
            }
            u in l ? l[u] = a : a === !0 ? l.setAttribute(u, "") : ze(l, u, a);
          }
    }
  }
  function ql(l, t, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        C("error", l), C("load", l);
        var a = !1, e = !1, n;
        for (n in u)
          if (u.hasOwnProperty(n)) {
            var f = u[n];
            if (f != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  tl(l, t, n, f, u, null);
              }
          }
        e && tl(l, t, "srcSet", u.srcSet, u, null), a && tl(l, t, "src", u.src, u, null);
        return;
      case "input":
        C("invalid", l);
        var c = n = f = e = null, i = null, o = null;
        for (a in u)
          if (u.hasOwnProperty(a)) {
            var S = u[a];
            if (S != null)
              switch (a) {
                case "name":
                  e = S;
                  break;
                case "type":
                  f = S;
                  break;
                case "checked":
                  i = S;
                  break;
                case "defaultChecked":
                  o = S;
                  break;
                case "value":
                  n = S;
                  break;
                case "defaultValue":
                  c = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null)
                    throw Error(r(137, t));
                  break;
                default:
                  tl(l, t, a, S, u, null);
              }
          }
        Ai(
          l,
          n,
          c,
          i,
          o,
          f,
          e,
          !1
        ), Oe(l);
        return;
      case "select":
        C("invalid", l), a = f = n = null;
        for (e in u)
          if (u.hasOwnProperty(e) && (c = u[e], c != null))
            switch (e) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                f = c;
                break;
              case "multiple":
                a = c;
              default:
                tl(l, t, e, c, u, null);
            }
        t = n, u = f, l.multiple = !!a, t != null ? Zu(l, !!a, t, !1) : u != null && Zu(l, !!a, u, !0);
        return;
      case "textarea":
        C("invalid", l), n = e = a = null;
        for (f in u)
          if (u.hasOwnProperty(f) && (c = u[f], c != null))
            switch (f) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                e = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(r(91));
                break;
              default:
                tl(l, t, f, c, u, null);
            }
        _i(l, a, e, n), Oe(l);
        return;
      case "option":
        for (i in u)
          if (u.hasOwnProperty(i) && (a = u[i], a != null))
            switch (i) {
              case "selected":
                l.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                tl(l, t, i, a, u, null);
            }
        return;
      case "dialog":
        C("beforetoggle", l), C("toggle", l), C("cancel", l), C("close", l);
        break;
      case "iframe":
      case "object":
        C("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ne.length; a++)
          C(ne[a], l);
        break;
      case "image":
        C("error", l), C("load", l);
        break;
      case "details":
        C("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        C("error", l), C("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (o in u)
          if (u.hasOwnProperty(o) && (a = u[o], a != null))
            switch (o) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                tl(l, t, o, a, u, null);
            }
        return;
      default:
        if (Wn(t)) {
          for (S in u)
            u.hasOwnProperty(S) && (a = u[S], a !== void 0 && Yc(
              l,
              t,
              S,
              a,
              u,
              void 0
            ));
          return;
        }
    }
    for (c in u)
      u.hasOwnProperty(c) && (a = u[c], a != null && tl(l, t, c, a, u, null));
  }
  function l1(l, t, u, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null, n = null, f = null, c = null, i = null, o = null, S = null;
        for (m in u) {
          var T = u[m];
          if (u.hasOwnProperty(m) && T != null)
            switch (m) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = T;
              default:
                a.hasOwnProperty(m) || tl(l, t, m, null, a, T);
            }
        }
        for (var h in a) {
          var m = a[h];
          if (T = u[h], a.hasOwnProperty(h) && (m != null || T != null))
            switch (h) {
              case "type":
                n = m;
                break;
              case "name":
                e = m;
                break;
              case "checked":
                o = m;
                break;
              case "defaultChecked":
                S = m;
                break;
              case "value":
                f = m;
                break;
              case "defaultValue":
                c = m;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (m != null)
                  throw Error(r(137, t));
                break;
              default:
                m !== T && tl(
                  l,
                  t,
                  h,
                  m,
                  a,
                  T
                );
            }
        }
        wn(
          l,
          f,
          c,
          i,
          o,
          S,
          n,
          e
        );
        return;
      case "select":
        m = f = c = h = null;
        for (n in u)
          if (i = u[n], u.hasOwnProperty(n) && i != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                m = i;
              default:
                a.hasOwnProperty(n) || tl(
                  l,
                  t,
                  n,
                  null,
                  a,
                  i
                );
            }
        for (e in a)
          if (n = a[e], i = u[e], a.hasOwnProperty(e) && (n != null || i != null))
            switch (e) {
              case "value":
                h = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== i && tl(
                  l,
                  t,
                  e,
                  n,
                  a,
                  i
                );
            }
        t = c, u = f, a = m, h != null ? Zu(l, !!u, h, !1) : !!a != !!u && (t != null ? Zu(l, !!u, t, !0) : Zu(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        m = h = null;
        for (c in u)
          if (e = u[c], u.hasOwnProperty(c) && e != null && !a.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                tl(l, t, c, null, a, e);
            }
        for (f in a)
          if (e = a[f], n = u[f], a.hasOwnProperty(f) && (e != null || n != null))
            switch (f) {
              case "value":
                h = e;
                break;
              case "defaultValue":
                m = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(r(91));
                break;
              default:
                e !== n && tl(l, t, f, e, a, n);
            }
        zi(l, h, m);
        return;
      case "option":
        for (var p in u)
          if (h = u[p], u.hasOwnProperty(p) && h != null && !a.hasOwnProperty(p))
            switch (p) {
              case "selected":
                l.selected = !1;
                break;
              default:
                tl(
                  l,
                  t,
                  p,
                  null,
                  a,
                  h
                );
            }
        for (i in a)
          if (h = a[i], m = u[i], a.hasOwnProperty(i) && h !== m && (h != null || m != null))
            switch (i) {
              case "selected":
                l.selected = h && typeof h != "function" && typeof h != "symbol";
                break;
              default:
                tl(
                  l,
                  t,
                  i,
                  h,
                  a,
                  m
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var q in u)
          h = u[q], u.hasOwnProperty(q) && h != null && !a.hasOwnProperty(q) && tl(l, t, q, null, a, h);
        for (o in a)
          if (h = a[o], m = u[o], a.hasOwnProperty(o) && h !== m && (h != null || m != null))
            switch (o) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null)
                  throw Error(r(137, t));
                break;
              default:
                tl(
                  l,
                  t,
                  o,
                  h,
                  a,
                  m
                );
            }
        return;
      default:
        if (Wn(t)) {
          for (var ul in u)
            h = u[ul], u.hasOwnProperty(ul) && h !== void 0 && !a.hasOwnProperty(ul) && Yc(
              l,
              t,
              ul,
              void 0,
              a,
              h
            );
          for (S in a)
            h = a[S], m = u[S], !a.hasOwnProperty(S) || h === m || h === void 0 && m === void 0 || Yc(
              l,
              t,
              S,
              h,
              a,
              m
            );
          return;
        }
    }
    for (var y in u)
      h = u[y], u.hasOwnProperty(y) && h != null && !a.hasOwnProperty(y) && tl(l, t, y, null, a, h);
    for (T in a)
      h = a[T], m = u[T], !a.hasOwnProperty(T) || h === m || h == null && m == null || tl(l, t, T, h, a, m);
  }
  var pc = null, Gc = null;
  function En(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Ov(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Mv(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Xc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Qc = null;
  function t1() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Qc ? !1 : (Qc = l, !0) : (Qc = null, !1);
  }
  var Dv = typeof setTimeout == "function" ? setTimeout : void 0, u1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Uv = typeof Promise == "function" ? Promise : void 0, a1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Uv < "u" ? function(l) {
    return Uv.resolve(null).then(l).catch(e1);
  } : Dv;
  function e1(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function cu(l) {
    return l === "head";
  }
  function Rv(l, t) {
    var u = t, a = 0, e = 0;
    do {
      var n = u.nextSibling;
      if (l.removeChild(u), n && n.nodeType === 8)
        if (u = n.data, u === "/$") {
          if (0 < a && 8 > a) {
            u = a;
            var f = l.ownerDocument;
            if (u & 1 && ce(f.documentElement), u & 2 && ce(f.body), u & 4)
              for (u = f.head, ce(u), f = u.firstChild; f; ) {
                var c = f.nextSibling, i = f.nodeName;
                f[Aa] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && f.rel.toLowerCase() === "stylesheet" || u.removeChild(f), f = c;
              }
          }
          if (e === 0) {
            l.removeChild(n), me(t);
            return;
          }
          e--;
        } else
          u === "$" || u === "$?" || u === "$!" ? e++ : a = u.charCodeAt(0) - 48;
      else a = 0;
      u = n;
    } while (u);
    me(t);
  }
  function xc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          xc(u), Vn(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function n1(l, t, u, a) {
    for (; l.nodeType === 1; ) {
      var e = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[Aa])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = St(l.nextSibling), l === null) break;
    }
    return null;
  }
  function f1(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = St(l.nextSibling), l === null)) return null;
    return l;
  }
  function Zc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function c1(l, t) {
    var u = l.ownerDocument;
    if (l.data !== "$?" || u.readyState === "complete")
      t();
    else {
      var a = function() {
        t(), u.removeEventListener("DOMContentLoaded", a);
      };
      u.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function St(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
          break;
        if (t === "/$") return null;
      }
    }
    return l;
  }
  var jc = null;
  function Hv(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (t === 0) return l;
          t--;
        } else u === "/$" && t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Nv(l, t, u) {
    switch (t = En(u), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(r(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(r(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(r(454));
        return l;
      default:
        throw Error(r(451));
    }
  }
  function ce(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    Vn(l);
  }
  var ot = /* @__PURE__ */ new Map(), qv = /* @__PURE__ */ new Set();
  function An(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Zt = _.d;
  _.d = {
    f: i1,
    r: s1,
    D: v1,
    C: y1,
    L: d1,
    m: o1,
    X: m1,
    S: h1,
    M: r1
  };
  function i1() {
    var l = Zt.f(), t = on();
    return l || t;
  }
  function s1(l) {
    var t = Gu(l);
    t !== null && t.tag === 5 && t.type === "form" ? Is(t) : Zt.r(l);
  }
  var ra = typeof document > "u" ? null : document;
  function Bv(l, t, u) {
    var a = ra;
    if (a && typeof t == "string" && t) {
      var e = ft(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof u == "string" && (e += '[crossorigin="' + u + '"]'), qv.has(e) || (qv.add(e), l = { rel: l, crossOrigin: u, href: t }, a.querySelector(e) === null && (t = a.createElement("link"), ql(t, "link", l), Ml(t), a.head.appendChild(t)));
    }
  }
  function v1(l) {
    Zt.D(l), Bv("dns-prefetch", l, null);
  }
  function y1(l, t) {
    Zt.C(l, t), Bv("preconnect", l, t);
  }
  function d1(l, t, u) {
    Zt.L(l, t, u);
    var a = ra;
    if (a && l && t) {
      var e = 'link[rel="preload"][as="' + ft(t) + '"]';
      t === "image" && u && u.imageSrcSet ? (e += '[imagesrcset="' + ft(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (e += '[imagesizes="' + ft(
        u.imageSizes
      ) + '"]')) : e += '[href="' + ft(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = Sa(l);
          break;
        case "script":
          n = ga(l);
      }
      ot.has(n) || (l = H(
        {
          rel: "preload",
          href: t === "image" && u && u.imageSrcSet ? void 0 : l,
          as: t
        },
        u
      ), ot.set(n, l), a.querySelector(e) !== null || t === "style" && a.querySelector(ie(n)) || t === "script" && a.querySelector(se(n)) || (t = a.createElement("link"), ql(t, "link", l), Ml(t), a.head.appendChild(t)));
    }
  }
  function o1(l, t) {
    Zt.m(l, t);
    var u = ra;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + ft(a) + '"][href="' + ft(l) + '"]', n = e;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = ga(l);
      }
      if (!ot.has(n) && (l = H({ rel: "modulepreload", href: l }, t), ot.set(n, l), u.querySelector(e) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(se(n)))
              return;
        }
        a = u.createElement("link"), ql(a, "link", l), Ml(a), u.head.appendChild(a);
      }
    }
  }
  function h1(l, t, u) {
    Zt.S(l, t, u);
    var a = ra;
    if (a && l) {
      var e = Xu(a).hoistableStyles, n = Sa(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if (f = a.querySelector(
          ie(n)
        ))
          c.loading = 5;
        else {
          l = H(
            { rel: "stylesheet", href: l, "data-precedence": t },
            u
          ), (u = ot.get(n)) && Cc(l, u);
          var i = f = a.createElement("link");
          Ml(i), ql(i, "link", l), i._p = new Promise(function(o, S) {
            i.onload = o, i.onerror = S;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, zn(f, t, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: c
        }, e.set(n, f);
      }
    }
  }
  function m1(l, t) {
    Zt.X(l, t);
    var u = ra;
    if (u && l) {
      var a = Xu(u).hoistableScripts, e = ga(l), n = a.get(e);
      n || (n = u.querySelector(se(e)), n || (l = H({ src: l, async: !0 }, t), (t = ot.get(e)) && Vc(l, t), n = u.createElement("script"), Ml(n), ql(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function r1(l, t) {
    Zt.M(l, t);
    var u = ra;
    if (u && l) {
      var a = Xu(u).hoistableScripts, e = ga(l), n = a.get(e);
      n || (n = u.querySelector(se(e)), n || (l = H({ src: l, async: !0, type: "module" }, t), (t = ot.get(e)) && Vc(l, t), n = u.createElement("script"), Ml(n), ql(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function Yv(l, t, u, a) {
    var e = (e = G.current) ? An(e) : null;
    if (!e) throw Error(r(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (t = Sa(u.href), u = Xu(
          e
        ).hoistableStyles, a = u.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Sa(u.href);
          var n = Xu(
            e
          ).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, f), (n = e.querySelector(
            ie(l)
          )) && !n._p && (f.instance = n, f.state.loading = 5), ot.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, ot.set(l, u), n || S1(
            e,
            l,
            u,
            f.state
          ))), t && a === null)
            throw Error(r(528, ""));
          return f;
        }
        if (t && a !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return t = u.async, u = u.src, typeof u == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ga(u), u = Xu(
          e
        ).hoistableScripts, a = u.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, l));
    }
  }
  function Sa(l) {
    return 'href="' + ft(l) + '"';
  }
  function ie(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function pv(l) {
    return H({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function S1(l, t, u, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), ql(t, "link", u), Ml(t), l.head.appendChild(t));
  }
  function ga(l) {
    return '[src="' + ft(l) + '"]';
  }
  function se(l) {
    return "script[async]" + l;
  }
  function Gv(l, t, u) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + ft(u.href) + '"]'
          );
          if (a)
            return t.instance = a, Ml(a), a;
          var e = H({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), Ml(a), ql(a, "style", e), zn(a, u.precedence, l), t.instance = a;
        case "stylesheet":
          e = Sa(u.href);
          var n = l.querySelector(
            ie(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Ml(n), n;
          a = pv(u), (e = ot.get(e)) && Cc(a, e), n = (l.ownerDocument || l).createElement("link"), Ml(n);
          var f = n;
          return f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), ql(n, "link", a), t.state.loading |= 4, zn(n, u.precedence, l), t.instance = n;
        case "script":
          return n = ga(u.src), (e = l.querySelector(
            se(n)
          )) ? (t.instance = e, Ml(e), e) : (a = u, (e = ot.get(n)) && (a = H({}, u), Vc(a, e)), l = l.ownerDocument || l, e = l.createElement("script"), Ml(e), ql(e, "link", a), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, zn(a, u.precedence, l));
    return t.instance;
  }
  function zn(l, t, u) {
    for (var a = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = a.length ? a[a.length - 1] : null, n = e, f = 0; f < a.length; f++) {
      var c = a[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function Cc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Vc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var _n = null;
  function Xv(l, t, u) {
    if (_n === null) {
      var a = /* @__PURE__ */ new Map(), e = _n = /* @__PURE__ */ new Map();
      e.set(u, a);
    } else
      e = _n, a = e.get(u), a || (a = /* @__PURE__ */ new Map(), e.set(u, a));
    if (a.has(l)) return a;
    for (a.set(l, null), u = u.getElementsByTagName(l), e = 0; e < u.length; e++) {
      var n = u[e];
      if (!(n[Aa] || n[Gl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = a.get(f);
        c ? c.push(n) : a.set(f, [n]);
      }
    }
    return a;
  }
  function Qv(l, t, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function g1(l, t, u) {
    if (u === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return l = t.disabled, typeof t.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function xv(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var ve = null;
  function b1() {
  }
  function T1(l, t, u) {
    if (ve === null) throw Error(r(475));
    var a = ve;
    if (t.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var e = Sa(u.href), n = l.querySelector(
          ie(e)
        );
        if (n) {
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (a.count++, a = On.bind(a), l.then(a, a)), t.state.loading |= 4, t.instance = n, Ml(n);
          return;
        }
        n = l.ownerDocument || l, u = pv(u), (e = ot.get(e)) && Cc(u, e), n = n.createElement("link"), Ml(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), ql(n, "link", u), t.instance = n;
      }
      a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (a.count++, t = On.bind(a), l.addEventListener("load", t), l.addEventListener("error", t));
    }
  }
  function E1() {
    if (ve === null) throw Error(r(475));
    var l = ve;
    return l.stylesheets && l.count === 0 && Lc(l, l.stylesheets), 0 < l.count ? function(t) {
      var u = setTimeout(function() {
        if (l.stylesheets && Lc(l, l.stylesheets), l.unsuspend) {
          var a = l.unsuspend;
          l.unsuspend = null, a();
        }
      }, 6e4);
      return l.unsuspend = t, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function On() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Lc(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Mn = null;
  function Lc(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Mn = /* @__PURE__ */ new Map(), t.forEach(A1, l), Mn = null, On.call(l));
  }
  function A1(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Mn.get(l);
      if (u) var a = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Mn.set(l, u);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (u.set(f.dataset.precedence, f), a = f);
        }
        a && u.set(null, a);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = u.get(f) || a, n === a && u.set(null, e), u.set(f, e), this.count++, a = On.bind(this), e.addEventListener("load", a), e.addEventListener("error", a), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var ye = {
    $$typeof: Sl,
    Provider: null,
    Consumer: null,
    _currentValue: Y,
    _currentValue2: Y,
    _threadCount: 0
  };
  function z1(l, t, u, a, e, n, f, c) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = xn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xn(0), this.hiddenUpdates = xn(null), this.identifierPrefix = a, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Zv(l, t, u, a, e, n, f, c, i, o, S, T) {
    return l = new z1(
      l,
      t,
      u,
      f,
      c,
      i,
      o,
      T
    ), t = 1, n === !0 && (t |= 24), n = Il(3, null, null, t), l.current = n, n.stateNode = l, t = Of(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: u,
      cache: t
    }, Rf(n), l;
  }
  function jv(l) {
    return l ? (l = Wu, l) : Wu;
  }
  function Cv(l, t, u, a, e, n) {
    e = jv(e), a.context === null ? a.context = e : a.pendingContext = e, a = kt(t), a.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (a.callback = n), u = Wt(l, a, t), u !== null && (at(u, l, t), ja(u, l, t));
  }
  function Vv(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function Kc(l, t) {
    Vv(l, t), (l = l.alternate) && Vv(l, t);
  }
  function Lv(l) {
    if (l.tag === 13) {
      var t = ku(l, 67108864);
      t !== null && at(t, l, 67108864), Kc(l, 67108864);
    }
  }
  var Dn = !0;
  function _1(l, t, u, a) {
    var e = g.T;
    g.T = null;
    var n = _.p;
    try {
      _.p = 2, Jc(l, t, u, a);
    } finally {
      _.p = n, g.T = e;
    }
  }
  function O1(l, t, u, a) {
    var e = g.T;
    g.T = null;
    var n = _.p;
    try {
      _.p = 8, Jc(l, t, u, a);
    } finally {
      _.p = n, g.T = e;
    }
  }
  function Jc(l, t, u, a) {
    if (Dn) {
      var e = wc(a);
      if (e === null)
        Bc(
          l,
          t,
          a,
          Un,
          u
        ), Jv(l, a);
      else if (D1(
        e,
        l,
        t,
        u,
        a
      ))
        a.stopPropagation();
      else if (Jv(l, a), t & 4 && -1 < M1.indexOf(l)) {
        for (; e !== null; ) {
          var n = Gu(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = mu(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << 31 - $l(f);
                      c.entanglements[1] |= i, f &= ~i;
                    }
                    _t(n), (F & 6) === 0 && (yn = bt() + 500, ee(0));
                  }
                }
                break;
              case 13:
                c = ku(n, 2), c !== null && at(c, n, 2), on(), Kc(n, 2);
            }
          if (n = wc(a), n === null && Bc(
            l,
            t,
            a,
            Un,
            u
          ), n === e) break;
          e = n;
        }
        e !== null && a.stopPropagation();
      } else
        Bc(
          l,
          t,
          a,
          null,
          u
        );
    }
  }
  function wc(l) {
    return l = Fn(l), kc(l);
  }
  var Un = null;
  function kc(l) {
    if (Un = null, l = pu(l), l !== null) {
      var t = ol(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = sl(t), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Un = l, null;
  }
  function Kv(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (yy()) {
          case ni:
            return 2;
          case fi:
            return 8;
          case be:
          case dy:
            return 32;
          case ci:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Wc = !1, iu = null, su = null, vu = null, de = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), yu = [], M1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Jv(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        iu = null;
        break;
      case "dragenter":
      case "dragleave":
        su = null;
        break;
      case "mouseover":
      case "mouseout":
        vu = null;
        break;
      case "pointerover":
      case "pointerout":
        de.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        oe.delete(t.pointerId);
    }
  }
  function he(l, t, u, a, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: u,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = Gu(t), t !== null && Lv(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function D1(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return iu = he(
          iu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "dragenter":
        return su = he(
          su,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "mouseover":
        return vu = he(
          vu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return de.set(
          n,
          he(
            de.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, oe.set(
          n,
          he(
            oe.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
    }
    return !1;
  }
  function wv(l) {
    var t = pu(l.target);
    if (t !== null) {
      var u = ol(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = sl(u), t !== null) {
            l.blockedOn = t, Ty(l.priority, function() {
              if (u.tag === 13) {
                var a = ut();
                a = Zn(a);
                var e = ku(u, a);
                e !== null && at(e, u, a), Kc(u, a);
              }
            });
            return;
          }
        } else if (t === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Rn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = wc(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(
          u.type,
          u
        );
        $n = a, u.target.dispatchEvent(a), $n = null;
      } else
        return t = Gu(u), t !== null && Lv(t), l.blockedOn = u, !1;
      t.shift();
    }
    return !0;
  }
  function kv(l, t, u) {
    Rn(l) && u.delete(t);
  }
  function U1() {
    Wc = !1, iu !== null && Rn(iu) && (iu = null), su !== null && Rn(su) && (su = null), vu !== null && Rn(vu) && (vu = null), de.forEach(kv), oe.forEach(kv);
  }
  function Hn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, Wc || (Wc = !0, O.unstable_scheduleCallback(
      O.unstable_NormalPriority,
      U1
    )));
  }
  var Nn = null;
  function Wv(l) {
    Nn !== l && (Nn = l, O.unstable_scheduleCallback(
      O.unstable_NormalPriority,
      function() {
        Nn === l && (Nn = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t], a = l[t + 1], e = l[t + 2];
          if (typeof a != "function") {
            if (kc(a || u) === null)
              continue;
            break;
          }
          var n = Gu(u);
          n !== null && (l.splice(t, 3), t -= 3, kf(
            n,
            {
              pending: !0,
              data: e,
              method: u.method,
              action: a
            },
            a,
            e
          ));
        }
      }
    ));
  }
  function me(l) {
    function t(i) {
      return Hn(i, l);
    }
    iu !== null && Hn(iu, l), su !== null && Hn(su, l), vu !== null && Hn(vu, l), de.forEach(t), oe.forEach(t);
    for (var u = 0; u < yu.length; u++) {
      var a = yu[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < yu.length && (u = yu[0], u.blockedOn === null); )
      wv(u), u.blockedOn === null && yu.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (a = 0; a < u.length; a += 3) {
        var e = u[a], n = u[a + 1], f = e[jl] || null;
        if (typeof n == "function")
          f || Wv(u);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[jl] || null)
              c = f.formAction;
            else if (kc(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? u[a + 1] = c : (u.splice(a, 3), a -= 3), Wv(u);
        }
      }
  }
  function $c(l) {
    this._internalRoot = l;
  }
  qn.prototype.render = $c.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var u = t.current, a = ut();
    Cv(u, a, l, t, null, null);
  }, qn.prototype.unmount = $c.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Cv(l.current, 2, null, l, null, null), on(), t[Yu] = null;
    }
  };
  function qn(l) {
    this._internalRoot = l;
  }
  qn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = di();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < yu.length && t !== 0 && t < yu[u].priority; u++) ;
      yu.splice(u, 0, l), u === 0 && wv(l);
    }
  };
  var $v = cl.version;
  if ($v !== "19.1.1")
    throw Error(
      r(
        527,
        $v,
        "19.1.1"
      )
    );
  _.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(r(188)) : (l = Object.keys(l).join(","), Error(r(268, l)));
    return l = U(t), l = l !== null ? E(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var R1 = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: g,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Bn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Bn.isDisabled && Bn.supportsFiber)
      try {
        ba = Bn.inject(
          R1
        ), Wl = Bn;
      } catch {
      }
  }
  return Se.createRoot = function(l, t) {
    if (!il(l)) throw Error(r(299));
    var u = !1, a = "", e = d0, n = o0, f = h0, c = null;
    return t != null && (t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (c = t.unstable_transitionCallbacks)), t = Zv(
      l,
      1,
      !1,
      null,
      null,
      u,
      a,
      e,
      n,
      f,
      c,
      null
    ), l[Yu] = t.current, qc(l), new $c(t);
  }, Se.hydrateRoot = function(l, t, u) {
    if (!il(l)) throw Error(r(299));
    var a = !1, e = "", n = d0, f = o0, c = h0, i = null, o = null;
    return u != null && (u.unstable_strictMode === !0 && (a = !0), u.identifierPrefix !== void 0 && (e = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (c = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (i = u.unstable_transitionCallbacks), u.formState !== void 0 && (o = u.formState)), t = Zv(
      l,
      1,
      !0,
      t,
      u ?? null,
      a,
      e,
      n,
      f,
      c,
      i,
      o
    ), t.context = jv(null), u = t.current, a = ut(), a = Zn(a), e = kt(a), e.callback = null, Wt(u, e, a), u = a, t.current.lanes = u, Ea(t, u), _t(t), l[Yu] = t.current, qc(l), new qn(t);
  }, Se.version = "19.1.1", Se;
}
var fy;
function x1() {
  if (fy) return Pc.exports;
  fy = 1;
  function O() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O);
      } catch (cl) {
        console.error(cl);
      }
  }
  return O(), Pc.exports = Q1(), Pc.exports;
}
var Z1 = x1();
const ai = (O) => window.parent.postMessage(O, "*"), cy = () => ai({ action: "closePopup" }), j1 = (O, cl) => O && cl ? cl.toLowerCase().includes(O.toLowerCase()) : !1, Yn = ["title", "url", "parentTitle"];
function iy(O) {
  const cl = et.useRef(O);
  return et.useEffect(() => {
    cl.current = O;
  }, [O]), cl;
}
const C1 = () => {
  const [O, cl] = et.useState([]), [$, r] = et.useState([]), [il, ol] = et.useState([]), sl = iy(il), Al = et.useRef(null), [U, E] = et.useState(""), [H, k] = et.useState(""), P = iy(H);
  et.useEffect(() => {
    const x = (al) => {
      if (al.action === "updateBookMarks") {
        const { bookmarks: K = [], historyBookmarks: rl = [] } = al;
        cl(K), r(rl), Al.current?.focus();
      }
    };
    return chrome.runtime?.onMessage?.addListener(x), ai({ action: "initSuccess" }), () => {
      chrome.runtime?.onMessage?.removeListener(x);
    };
  }, [Al]), et.useEffect(() => {
    if (!U)
      ol($), k($[0]?.id || "");
    else {
      const x = Array.from(
        { length: Yn.length },
        () => []
      );
      for (let K = 0; K < Yn.length; K++)
        x[K] = O.filter(
          (rl) => j1(U, Reflect.get(rl, Yn[K]))
        ).sort((rl, ht) => {
          const Sl = Yn[K], Zl = Reflect.get(rl, Sl) || "", V = Reflect.get(ht, Sl) || "", Bl = U.toLowerCase();
          return Sl === "title" ? Zl.length - V.length : Sl === "url" ? Bl.indexOf(Zl) - Bl.indexOf(V) : 1;
        });
      const al = x.reduce(
        (K, rl) => [.../* @__PURE__ */ new Set([...K, ...rl])],
        []
      );
      ol(al), k(al[0]?.id || "");
    }
  }, [U, O, $]);
  const zl = et.useCallback(
    (x, al = !0, K = !1) => {
      k(x.id || ""), x.url && (ai({
        action: "goToBookmark",
        url: x.url,
        openNewTab: al,
        findOpenTab: K
      }), cy(), E(""));
    },
    []
  );
  return et.useEffect(() => {
    const x = (al) => {
      if (al.key === "Escape") {
        cy();
        return;
      }
      const K = sl.current.findIndex(
        (rl) => rl.id === P.current
      );
      if (K > -1) {
        if (al.key === "ArrowUp") {
          const rl = K === 0 ? sl.current.length - 1 : K - 1;
          k(sl.current[rl].id), al.preventDefault();
        }
        if (al.key === "ArrowDown") {
          const rl = K === sl.current.length - 1 ? 0 : K + 1;
          k(sl.current[rl].id), al.preventDefault();
        }
        al.key === "Enter" && (zl(sl.current[K]), al.preventDefault());
      }
    };
    return window.addEventListener("keydown", x), () => {
      window.removeEventListener("keydown", x);
    };
  }, [zl]), /* @__PURE__ */ jt.jsx("div", { className: "bookmarks-search__container", children: /* @__PURE__ */ jt.jsxs("div", { className: "bookmarks-search__content", children: [
    /* @__PURE__ */ jt.jsx("div", { className: "bookmarks-search__search", children: /* @__PURE__ */ jt.jsx(
      "input",
      {
        placeholder: "请输入要搜索的关键字",
        type: "text",
        autoComplete: "off",
        className: "bookmarks-search__search-input",
        autoFocus: !0,
        ref: Al,
        value: U,
        onChange: (x) => E(x.target.value)
      }
    ) }),
    /* @__PURE__ */ jt.jsx("div", { className: "bookmarks-search__list", children: il.map((x) => /* @__PURE__ */ jt.jsxs(
      "div",
      {
        onClick: () => zl(x),
        className: `bookmarks-search__list-item ${H === x.id ? "bookmarks-search__list-item-active" : ""}`,
        children: [
          x.faviconURL && /* @__PURE__ */ jt.jsx(
            "img",
            {
              className: "bookmarks-search__list-item-favicon",
              src: x.faviconURL,
              alt: x.title
            }
          ),
          x.title
        ]
      },
      x.id
    )) })
  ] }) });
};
Z1.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jt.jsx(et.StrictMode, { children: /* @__PURE__ */ jt.jsx(C1, {}) })
);
