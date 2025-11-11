var Pf = { exports: {} }, me = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ad;
function Lv() {
  if (ad) return me;
  ad = 1;
  var g = Symbol.for("react.transitional.element"), O = Symbol.for("react.fragment");
  function D(r, M, B) {
    var R = null;
    if (B !== void 0 && (R = "" + B), M.key !== void 0 && (R = "" + M.key), "key" in M) {
      B = {};
      for (var j in M)
        j !== "key" && (B[j] = M[j]);
    } else B = M;
    return M = B.ref, {
      $$typeof: g,
      type: r,
      key: R,
      ref: M !== void 0 ? M : null,
      props: B
    };
  }
  return me.Fragment = O, me.jsx = D, me.jsxs = D, me;
}
var ud;
function Kv() {
  return ud || (ud = 1, Pf.exports = Lv()), Pf.exports;
}
var q = Kv(), li = { exports: {} }, J = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ed;
function Jv() {
  if (ed) return J;
  ed = 1;
  var g = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), B = Symbol.for("react.consumer"), R = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), S = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), w = Symbol.iterator;
  function P(s) {
    return s === null || typeof s != "object" ? null : (s = w && s[w] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var gl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Nl = Object.assign, Jl = {};
  function C(s, A, N) {
    this.props = s, this.context = A, this.refs = Jl, this.updater = N || gl;
  }
  C.prototype.isReactComponent = {}, C.prototype.setState = function(s, A) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, s, A, "setState");
  }, C.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function ml() {
  }
  ml.prototype = C.prototype;
  function vl(s, A, N) {
    this.props = s, this.context = A, this.refs = Jl, this.updater = N || gl;
  }
  var cl = vl.prototype = new ml();
  cl.constructor = vl, Nl(cl, C.prototype), cl.isPureReactComponent = !0;
  var Sl = Array.isArray, V = { H: null, A: null, T: null, S: null, V: null }, _l = Object.prototype.hasOwnProperty;
  function ol(s, A, N, U, G, tl) {
    return N = tl.ref, {
      $$typeof: g,
      type: s,
      key: A,
      ref: N !== void 0 ? N : null,
      props: tl
    };
  }
  function hl(s, A) {
    return ol(
      s.type,
      A,
      void 0,
      void 0,
      void 0,
      s.props
    );
  }
  function Hl(s) {
    return typeof s == "object" && s !== null && s.$$typeof === g;
  }
  function wl(s) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(N) {
      return A[N];
    });
  }
  var Ml = /\/+/g;
  function Rl(s, A) {
    return typeof s == "object" && s !== null && s.key != null ? wl("" + s.key) : A.toString(36);
  }
  function ha() {
  }
  function ya(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(ha, ha) : (s.status = "pending", s.then(
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
  function Zl(s, A, N, U, G) {
    var tl = typeof s;
    (tl === "undefined" || tl === "boolean") && (s = null);
    var K = !1;
    if (s === null) K = !0;
    else
      switch (tl) {
        case "bigint":
        case "string":
        case "number":
          K = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case g:
            case O:
              K = !0;
              break;
            case x:
              return K = s._init, Zl(
                K(s._payload),
                A,
                N,
                U,
                G
              );
          }
      }
    if (K)
      return G = G(s), K = U === "" ? "." + Rl(s, 0) : U, Sl(G) ? (N = "", K != null && (N = K.replace(Ml, "$&/") + "/"), Zl(G, A, N, "", function(Vt) {
        return Vt;
      })) : G != null && (Hl(G) && (G = hl(
        G,
        N + (G.key == null || s && s.key === G.key ? "" : ("" + G.key).replace(
          Ml,
          "$&/"
        ) + "/") + K
      )), A.push(G)), 1;
    K = 0;
    var lt = U === "" ? "." : U + ":";
    if (Sl(s))
      for (var bl = 0; bl < s.length; bl++)
        U = s[bl], tl = lt + Rl(U, bl), K += Zl(
          U,
          A,
          N,
          tl,
          G
        );
    else if (bl = P(s), typeof bl == "function")
      for (s = bl.call(s), bl = 0; !(U = s.next()).done; )
        U = U.value, tl = lt + Rl(U, bl++), K += Zl(
          U,
          A,
          N,
          tl,
          G
        );
    else if (tl === "object") {
      if (typeof s.then == "function")
        return Zl(
          ya(s),
          A,
          N,
          U,
          G
        );
      throw A = String(s), Error(
        "Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return K;
  }
  function T(s, A, N) {
    if (s == null) return s;
    var U = [], G = 0;
    return Zl(s, U, "", "", function(tl) {
      return A.call(N, tl, G++);
    }), U;
  }
  function p(s) {
    if (s._status === -1) {
      var A = s._result;
      A = A(), A.then(
        function(N) {
          (s._status === 0 || s._status === -1) && (s._status = 1, s._result = N);
        },
        function(N) {
          (s._status === 0 || s._status === -1) && (s._status = 2, s._result = N);
        }
      ), s._status === -1 && (s._status = 0, s._result = A);
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var Z = typeof reportError == "function" ? reportError : function(s) {
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
  function rl() {
  }
  return J.Children = {
    map: T,
    forEach: function(s, A, N) {
      T(
        s,
        function() {
          A.apply(this, arguments);
        },
        N
      );
    },
    count: function(s) {
      var A = 0;
      return T(s, function() {
        A++;
      }), A;
    },
    toArray: function(s) {
      return T(s, function(A) {
        return A;
      }) || [];
    },
    only: function(s) {
      if (!Hl(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  }, J.Component = C, J.Fragment = D, J.Profiler = M, J.PureComponent = vl, J.StrictMode = r, J.Suspense = z, J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V, J.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(s) {
      return V.H.useMemoCache(s);
    }
  }, J.cache = function(s) {
    return function() {
      return s.apply(null, arguments);
    };
  }, J.cloneElement = function(s, A, N) {
    if (s == null)
      throw Error(
        "The argument must be a React element, but you passed " + s + "."
      );
    var U = Nl({}, s.props), G = s.key, tl = void 0;
    if (A != null)
      for (K in A.ref !== void 0 && (tl = void 0), A.key !== void 0 && (G = "" + A.key), A)
        !_l.call(A, K) || K === "key" || K === "__self" || K === "__source" || K === "ref" && A.ref === void 0 || (U[K] = A[K]);
    var K = arguments.length - 2;
    if (K === 1) U.children = N;
    else if (1 < K) {
      for (var lt = Array(K), bl = 0; bl < K; bl++)
        lt[bl] = arguments[bl + 2];
      U.children = lt;
    }
    return ol(s.type, G, void 0, void 0, tl, U);
  }, J.createContext = function(s) {
    return s = {
      $$typeof: R,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: B,
      _context: s
    }, s;
  }, J.createElement = function(s, A, N) {
    var U, G = {}, tl = null;
    if (A != null)
      for (U in A.key !== void 0 && (tl = "" + A.key), A)
        _l.call(A, U) && U !== "key" && U !== "__self" && U !== "__source" && (G[U] = A[U]);
    var K = arguments.length - 2;
    if (K === 1) G.children = N;
    else if (1 < K) {
      for (var lt = Array(K), bl = 0; bl < K; bl++)
        lt[bl] = arguments[bl + 2];
      G.children = lt;
    }
    if (s && s.defaultProps)
      for (U in K = s.defaultProps, K)
        G[U] === void 0 && (G[U] = K[U]);
    return ol(s, tl, void 0, void 0, null, G);
  }, J.createRef = function() {
    return { current: null };
  }, J.forwardRef = function(s) {
    return { $$typeof: j, render: s };
  }, J.isValidElement = Hl, J.lazy = function(s) {
    return {
      $$typeof: x,
      _payload: { _status: -1, _result: s },
      _init: p
    };
  }, J.memo = function(s, A) {
    return {
      $$typeof: S,
      type: s,
      compare: A === void 0 ? null : A
    };
  }, J.startTransition = function(s) {
    var A = V.T, N = {};
    V.T = N;
    try {
      var U = s(), G = V.S;
      G !== null && G(N, U), typeof U == "object" && U !== null && typeof U.then == "function" && U.then(rl, Z);
    } catch (tl) {
      Z(tl);
    } finally {
      V.T = A;
    }
  }, J.unstable_useCacheRefresh = function() {
    return V.H.useCacheRefresh();
  }, J.use = function(s) {
    return V.H.use(s);
  }, J.useActionState = function(s, A, N) {
    return V.H.useActionState(s, A, N);
  }, J.useCallback = function(s, A) {
    return V.H.useCallback(s, A);
  }, J.useContext = function(s) {
    return V.H.useContext(s);
  }, J.useDebugValue = function() {
  }, J.useDeferredValue = function(s, A) {
    return V.H.useDeferredValue(s, A);
  }, J.useEffect = function(s, A, N) {
    var U = V.H;
    if (typeof N == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return U.useEffect(s, A);
  }, J.useId = function() {
    return V.H.useId();
  }, J.useImperativeHandle = function(s, A, N) {
    return V.H.useImperativeHandle(s, A, N);
  }, J.useInsertionEffect = function(s, A) {
    return V.H.useInsertionEffect(s, A);
  }, J.useLayoutEffect = function(s, A) {
    return V.H.useLayoutEffect(s, A);
  }, J.useMemo = function(s, A) {
    return V.H.useMemo(s, A);
  }, J.useOptimistic = function(s, A) {
    return V.H.useOptimistic(s, A);
  }, J.useReducer = function(s, A, N) {
    return V.H.useReducer(s, A, N);
  }, J.useRef = function(s) {
    return V.H.useRef(s);
  }, J.useState = function(s) {
    return V.H.useState(s);
  }, J.useSyncExternalStore = function(s, A, N) {
    return V.H.useSyncExternalStore(
      s,
      A,
      N
    );
  }, J.useTransition = function() {
    return V.H.useTransition();
  }, J.version = "19.1.1", J;
}
var nd;
function ii() {
  return nd || (nd = 1, li.exports = Jv()), li.exports;
}
var I = ii(), ti = { exports: {} }, ge = {}, ai = { exports: {} }, ui = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cd;
function wv() {
  return cd || (cd = 1, (function(g) {
    function O(T, p) {
      var Z = T.length;
      T.push(p);
      l: for (; 0 < Z; ) {
        var rl = Z - 1 >>> 1, s = T[rl];
        if (0 < M(s, p))
          T[rl] = p, T[Z] = s, Z = rl;
        else break l;
      }
    }
    function D(T) {
      return T.length === 0 ? null : T[0];
    }
    function r(T) {
      if (T.length === 0) return null;
      var p = T[0], Z = T.pop();
      if (Z !== p) {
        T[0] = Z;
        l: for (var rl = 0, s = T.length, A = s >>> 1; rl < A; ) {
          var N = 2 * (rl + 1) - 1, U = T[N], G = N + 1, tl = T[G];
          if (0 > M(U, Z))
            G < s && 0 > M(tl, U) ? (T[rl] = tl, T[G] = Z, rl = G) : (T[rl] = U, T[N] = Z, rl = N);
          else if (G < s && 0 > M(tl, Z))
            T[rl] = tl, T[G] = Z, rl = G;
          else break l;
        }
      }
      return p;
    }
    function M(T, p) {
      var Z = T.sortIndex - p.sortIndex;
      return Z !== 0 ? Z : T.id - p.id;
    }
    if (g.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var B = performance;
      g.unstable_now = function() {
        return B.now();
      };
    } else {
      var R = Date, j = R.now();
      g.unstable_now = function() {
        return R.now() - j;
      };
    }
    var z = [], S = [], x = 1, w = null, P = 3, gl = !1, Nl = !1, Jl = !1, C = !1, ml = typeof setTimeout == "function" ? setTimeout : null, vl = typeof clearTimeout == "function" ? clearTimeout : null, cl = typeof setImmediate < "u" ? setImmediate : null;
    function Sl(T) {
      for (var p = D(S); p !== null; ) {
        if (p.callback === null) r(S);
        else if (p.startTime <= T)
          r(S), p.sortIndex = p.expirationTime, O(z, p);
        else break;
        p = D(S);
      }
    }
    function V(T) {
      if (Jl = !1, Sl(T), !Nl)
        if (D(z) !== null)
          Nl = !0, _l || (_l = !0, Rl());
        else {
          var p = D(S);
          p !== null && Zl(V, p.startTime - T);
        }
    }
    var _l = !1, ol = -1, hl = 5, Hl = -1;
    function wl() {
      return C ? !0 : !(g.unstable_now() - Hl < hl);
    }
    function Ml() {
      if (C = !1, _l) {
        var T = g.unstable_now();
        Hl = T;
        var p = !0;
        try {
          l: {
            Nl = !1, Jl && (Jl = !1, vl(ol), ol = -1), gl = !0;
            var Z = P;
            try {
              t: {
                for (Sl(T), w = D(z); w !== null && !(w.expirationTime > T && wl()); ) {
                  var rl = w.callback;
                  if (typeof rl == "function") {
                    w.callback = null, P = w.priorityLevel;
                    var s = rl(
                      w.expirationTime <= T
                    );
                    if (T = g.unstable_now(), typeof s == "function") {
                      w.callback = s, Sl(T), p = !0;
                      break t;
                    }
                    w === D(z) && r(z), Sl(T);
                  } else r(z);
                  w = D(z);
                }
                if (w !== null) p = !0;
                else {
                  var A = D(S);
                  A !== null && Zl(
                    V,
                    A.startTime - T
                  ), p = !1;
                }
              }
              break l;
            } finally {
              w = null, P = Z, gl = !1;
            }
            p = void 0;
          }
        } finally {
          p ? Rl() : _l = !1;
        }
      }
    }
    var Rl;
    if (typeof cl == "function")
      Rl = function() {
        cl(Ml);
      };
    else if (typeof MessageChannel < "u") {
      var ha = new MessageChannel(), ya = ha.port2;
      ha.port1.onmessage = Ml, Rl = function() {
        ya.postMessage(null);
      };
    } else
      Rl = function() {
        ml(Ml, 0);
      };
    function Zl(T, p) {
      ol = ml(function() {
        T(g.unstable_now());
      }, p);
    }
    g.unstable_IdlePriority = 5, g.unstable_ImmediatePriority = 1, g.unstable_LowPriority = 4, g.unstable_NormalPriority = 3, g.unstable_Profiling = null, g.unstable_UserBlockingPriority = 2, g.unstable_cancelCallback = function(T) {
      T.callback = null;
    }, g.unstable_forceFrameRate = function(T) {
      0 > T || 125 < T ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : hl = 0 < T ? Math.floor(1e3 / T) : 5;
    }, g.unstable_getCurrentPriorityLevel = function() {
      return P;
    }, g.unstable_next = function(T) {
      switch (P) {
        case 1:
        case 2:
        case 3:
          var p = 3;
          break;
        default:
          p = P;
      }
      var Z = P;
      P = p;
      try {
        return T();
      } finally {
        P = Z;
      }
    }, g.unstable_requestPaint = function() {
      C = !0;
    }, g.unstable_runWithPriority = function(T, p) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var Z = P;
      P = T;
      try {
        return p();
      } finally {
        P = Z;
      }
    }, g.unstable_scheduleCallback = function(T, p, Z) {
      var rl = g.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? rl + Z : rl) : Z = rl, T) {
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
      return s = Z + s, T = {
        id: x++,
        callback: p,
        priorityLevel: T,
        startTime: Z,
        expirationTime: s,
        sortIndex: -1
      }, Z > rl ? (T.sortIndex = Z, O(S, T), D(z) === null && T === D(S) && (Jl ? (vl(ol), ol = -1) : Jl = !0, Zl(V, Z - rl))) : (T.sortIndex = s, O(z, T), Nl || gl || (Nl = !0, _l || (_l = !0, Rl()))), T;
    }, g.unstable_shouldYield = wl, g.unstable_wrapCallback = function(T) {
      var p = P;
      return function() {
        var Z = P;
        P = p;
        try {
          return T.apply(this, arguments);
        } finally {
          P = Z;
        }
      };
    };
  })(ui)), ui;
}
var fd;
function kv() {
  return fd || (fd = 1, ai.exports = wv()), ai.exports;
}
var ei = { exports: {} }, Kl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var id;
function Wv() {
  if (id) return Kl;
  id = 1;
  var g = ii();
  function O(z) {
    var S = "https://react.dev/errors/" + z;
    if (1 < arguments.length) {
      S += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var x = 2; x < arguments.length; x++)
        S += "&args[]=" + encodeURIComponent(arguments[x]);
    }
    return "Minified React error #" + z + "; visit " + S + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function D() {
  }
  var r = {
    d: {
      f: D,
      r: function() {
        throw Error(O(522));
      },
      D,
      C: D,
      L: D,
      m: D,
      X: D,
      S: D,
      M: D
    },
    p: 0,
    findDOMNode: null
  }, M = Symbol.for("react.portal");
  function B(z, S, x) {
    var w = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: M,
      key: w == null ? null : "" + w,
      children: z,
      containerInfo: S,
      implementation: x
    };
  }
  var R = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function j(z, S) {
    if (z === "font") return "";
    if (typeof S == "string")
      return S === "use-credentials" ? S : "";
  }
  return Kl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Kl.createPortal = function(z, S) {
    var x = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!S || S.nodeType !== 1 && S.nodeType !== 9 && S.nodeType !== 11)
      throw Error(O(299));
    return B(z, S, null, x);
  }, Kl.flushSync = function(z) {
    var S = R.T, x = r.p;
    try {
      if (R.T = null, r.p = 2, z) return z();
    } finally {
      R.T = S, r.p = x, r.d.f();
    }
  }, Kl.preconnect = function(z, S) {
    typeof z == "string" && (S ? (S = S.crossOrigin, S = typeof S == "string" ? S === "use-credentials" ? S : "" : void 0) : S = null, r.d.C(z, S));
  }, Kl.prefetchDNS = function(z) {
    typeof z == "string" && r.d.D(z);
  }, Kl.preinit = function(z, S) {
    if (typeof z == "string" && S && typeof S.as == "string") {
      var x = S.as, w = j(x, S.crossOrigin), P = typeof S.integrity == "string" ? S.integrity : void 0, gl = typeof S.fetchPriority == "string" ? S.fetchPriority : void 0;
      x === "style" ? r.d.S(
        z,
        typeof S.precedence == "string" ? S.precedence : void 0,
        {
          crossOrigin: w,
          integrity: P,
          fetchPriority: gl
        }
      ) : x === "script" && r.d.X(z, {
        crossOrigin: w,
        integrity: P,
        fetchPriority: gl,
        nonce: typeof S.nonce == "string" ? S.nonce : void 0
      });
    }
  }, Kl.preinitModule = function(z, S) {
    if (typeof z == "string")
      if (typeof S == "object" && S !== null) {
        if (S.as == null || S.as === "script") {
          var x = j(
            S.as,
            S.crossOrigin
          );
          r.d.M(z, {
            crossOrigin: x,
            integrity: typeof S.integrity == "string" ? S.integrity : void 0,
            nonce: typeof S.nonce == "string" ? S.nonce : void 0
          });
        }
      } else S == null && r.d.M(z);
  }, Kl.preload = function(z, S) {
    if (typeof z == "string" && typeof S == "object" && S !== null && typeof S.as == "string") {
      var x = S.as, w = j(x, S.crossOrigin);
      r.d.L(z, x, {
        crossOrigin: w,
        integrity: typeof S.integrity == "string" ? S.integrity : void 0,
        nonce: typeof S.nonce == "string" ? S.nonce : void 0,
        type: typeof S.type == "string" ? S.type : void 0,
        fetchPriority: typeof S.fetchPriority == "string" ? S.fetchPriority : void 0,
        referrerPolicy: typeof S.referrerPolicy == "string" ? S.referrerPolicy : void 0,
        imageSrcSet: typeof S.imageSrcSet == "string" ? S.imageSrcSet : void 0,
        imageSizes: typeof S.imageSizes == "string" ? S.imageSizes : void 0,
        media: typeof S.media == "string" ? S.media : void 0
      });
    }
  }, Kl.preloadModule = function(z, S) {
    if (typeof z == "string")
      if (S) {
        var x = j(S.as, S.crossOrigin);
        r.d.m(z, {
          as: typeof S.as == "string" && S.as !== "script" ? S.as : void 0,
          crossOrigin: x,
          integrity: typeof S.integrity == "string" ? S.integrity : void 0
        });
      } else r.d.m(z);
  }, Kl.requestFormReset = function(z) {
    r.d.r(z);
  }, Kl.unstable_batchedUpdates = function(z, S) {
    return z(S);
  }, Kl.useFormState = function(z, S, x) {
    return R.H.useFormState(z, S, x);
  }, Kl.useFormStatus = function() {
    return R.H.useHostTransitionStatus();
  }, Kl.version = "19.1.1", Kl;
}
var sd;
function $v() {
  if (sd) return ei.exports;
  sd = 1;
  function g() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
      } catch (O) {
        console.error(O);
      }
  }
  return g(), ei.exports = Wv(), ei.exports;
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
var od;
function Fv() {
  if (od) return ge;
  od = 1;
  var g = kv(), O = ii(), D = $v();
  function r(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function M(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function B(l) {
    var t = l, a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (a = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function R(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function j(l) {
    if (B(l) !== l)
      throw Error(r(188));
  }
  function z(l) {
    var t = l.alternate;
    if (!t) {
      if (t = B(l), t === null) throw Error(r(188));
      return t !== l ? null : l;
    }
    for (var a = l, u = t; ; ) {
      var e = a.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (u = e.return, u !== null) {
          a = u;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === a) return j(e), l;
          if (n === u) return j(e), t;
          n = n.sibling;
        }
        throw Error(r(188));
      }
      if (a.return !== u.return) a = e, u = n;
      else {
        for (var c = !1, f = e.child; f; ) {
          if (f === a) {
            c = !0, a = e, u = n;
            break;
          }
          if (f === u) {
            c = !0, u = e, a = n;
            break;
          }
          f = f.sibling;
        }
        if (!c) {
          for (f = n.child; f; ) {
            if (f === a) {
              c = !0, a = n, u = e;
              break;
            }
            if (f === u) {
              c = !0, u = n, a = e;
              break;
            }
            f = f.sibling;
          }
          if (!c) throw Error(r(189));
        }
      }
      if (a.alternate !== u) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? l : t;
  }
  function S(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = S(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var x = Object.assign, w = Symbol.for("react.element"), P = Symbol.for("react.transitional.element"), gl = Symbol.for("react.portal"), Nl = Symbol.for("react.fragment"), Jl = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), ml = Symbol.for("react.provider"), vl = Symbol.for("react.consumer"), cl = Symbol.for("react.context"), Sl = Symbol.for("react.forward_ref"), V = Symbol.for("react.suspense"), _l = Symbol.for("react.suspense_list"), ol = Symbol.for("react.memo"), hl = Symbol.for("react.lazy"), Hl = Symbol.for("react.activity"), wl = Symbol.for("react.memo_cache_sentinel"), Ml = Symbol.iterator;
  function Rl(l) {
    return l === null || typeof l != "object" ? null : (l = Ml && l[Ml] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var ha = Symbol.for("react.client.reference");
  function ya(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === ha ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Nl:
        return "Fragment";
      case C:
        return "Profiler";
      case Jl:
        return "StrictMode";
      case V:
        return "Suspense";
      case _l:
        return "SuspenseList";
      case Hl:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case gl:
          return "Portal";
        case cl:
          return (l.displayName || "Context") + ".Provider";
        case vl:
          return (l._context.displayName || "Context") + ".Consumer";
        case Sl:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case ol:
          return t = l.displayName || null, t !== null ? t : ya(l.type) || "Memo";
        case hl:
          t = l._payload, l = l._init;
          try {
            return ya(l(t));
          } catch {
          }
      }
    return null;
  }
  var Zl = Array.isArray, T = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, p = D.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, rl = [], s = -1;
  function A(l) {
    return { current: l };
  }
  function N(l) {
    0 > s || (l.current = rl[s], rl[s] = null, s--);
  }
  function U(l, t) {
    s++, rl[s] = l.current, l.current = t;
  }
  var G = A(null), tl = A(null), K = A(null), lt = A(null);
  function bl(l, t) {
    switch (U(K, t), U(tl, l), U(G, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? pr(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = pr(t), l = Nr(t, l);
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
    N(G), U(G, l);
  }
  function Vt() {
    N(G), N(tl), N(K);
  }
  function jn(l) {
    l.memoizedState !== null && U(lt, l);
    var t = G.current, a = Nr(t, l.type);
    t !== a && (U(tl, l), U(G, a));
  }
  function Se(l) {
    tl.current === l && (N(G), N(tl)), lt.current === l && (N(lt), re._currentValue = Z);
  }
  var Cn = Object.prototype.hasOwnProperty, Gn = g.unstable_scheduleCallback, Xn = g.unstable_cancelCallback, _d = g.unstable_shouldYield, Ad = g.unstable_requestPaint, _t = g.unstable_now, zd = g.unstable_getCurrentPriorityLevel, si = g.unstable_ImmediatePriority, oi = g.unstable_UserBlockingPriority, be = g.unstable_NormalPriority, Od = g.unstable_LowPriority, ri = g.unstable_IdlePriority, Dd = g.log, Md = g.unstable_setDisableYieldValue, bu = null, tt = null;
  function Lt(l) {
    if (typeof Dd == "function" && Md(l), tt && typeof tt.setStrictMode == "function")
      try {
        tt.setStrictMode(bu, l);
      } catch {
      }
  }
  var at = Math.clz32 ? Math.clz32 : pd, Rd = Math.log, Ud = Math.LN2;
  function pd(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Rd(l) / Ud | 0) | 0;
  }
  var Te = 256, Ee = 4194304;
  function ma(l) {
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
  function _e(l, t, a) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var e = 0, n = l.suspendedLanes, c = l.pingedLanes;
    l = l.warmLanes;
    var f = u & 134217727;
    return f !== 0 ? (u = f & ~n, u !== 0 ? e = ma(u) : (c &= f, c !== 0 ? e = ma(c) : a || (a = f & ~l, a !== 0 && (e = ma(a))))) : (f = u & ~n, f !== 0 ? e = ma(f) : c !== 0 ? e = ma(c) : a || (a = u & ~l, a !== 0 && (e = ma(a)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, a = t & -t, n >= a || n === 32 && (a & 4194048) !== 0) ? t : e;
  }
  function Tu(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Nd(l, t) {
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
  function di() {
    var l = Te;
    return Te <<= 1, (Te & 4194048) === 0 && (Te = 256), l;
  }
  function vi() {
    var l = Ee;
    return Ee <<= 1, (Ee & 62914560) === 0 && (Ee = 4194304), l;
  }
  function Qn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Eu(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Hd(l, t, a, u, e, n) {
    var c = l.pendingLanes;
    l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
    var f = l.entanglements, i = l.expirationTimes, h = l.hiddenUpdates;
    for (a = c & ~a; 0 < a; ) {
      var b = 31 - at(a), _ = 1 << b;
      f[b] = 0, i[b] = -1;
      var y = h[b];
      if (y !== null)
        for (h[b] = null, b = 0; b < y.length; b++) {
          var m = y[b];
          m !== null && (m.lane &= -536870913);
        }
      a &= ~_;
    }
    u !== 0 && hi(l, u, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t));
  }
  function hi(l, t, a) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var u = 31 - at(t);
    l.entangledLanes |= t, l.entanglements[u] = l.entanglements[u] | 1073741824 | a & 4194090;
  }
  function yi(l, t) {
    var a = l.entangledLanes |= t;
    for (l = l.entanglements; a; ) {
      var u = 31 - at(a), e = 1 << u;
      e & t | l[u] & t && (l[u] |= t), a &= ~e;
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
  function Vn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function mi() {
    var l = p.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : $r(l.type));
  }
  function qd(l, t) {
    var a = p.p;
    try {
      return p.p = l, t();
    } finally {
      p.p = a;
    }
  }
  var Kt = Math.random().toString(36).slice(2), Vl = "__reactFiber$" + Kt, Wl = "__reactProps$" + Kt, xa = "__reactContainer$" + Kt, Ln = "__reactEvents$" + Kt, xd = "__reactListeners$" + Kt, Bd = "__reactHandles$" + Kt, gi = "__reactResources$" + Kt, _u = "__reactMarker$" + Kt;
  function Kn(l) {
    delete l[Vl], delete l[Wl], delete l[Ln], delete l[xd], delete l[Bd];
  }
  function Ba(l) {
    var t = l[Vl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if (t = a[xa] || a[Vl]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (l = Br(l); l !== null; ) {
            if (a = l[Vl]) return a;
            l = Br(l);
          }
        return t;
      }
      l = a, a = l.parentNode;
    }
    return null;
  }
  function Ya(l) {
    if (l = l[Vl] || l[xa]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Au(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(r(33));
  }
  function ja(l) {
    var t = l[gi];
    return t || (t = l[gi] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Bl(l) {
    l[_u] = !0;
  }
  var Si = /* @__PURE__ */ new Set(), bi = {};
  function ga(l, t) {
    Ca(l, t), Ca(l + "Capture", t);
  }
  function Ca(l, t) {
    for (bi[l] = t, l = 0; l < t.length; l++)
      Si.add(t[l]);
  }
  var Yd = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ti = {}, Ei = {};
  function jd(l) {
    return Cn.call(Ei, l) ? !0 : Cn.call(Ti, l) ? !1 : Yd.test(l) ? Ei[l] = !0 : (Ti[l] = !0, !1);
  }
  function Ae(l, t, a) {
    if (jd(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var u = t.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function ze(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Rt(l, t, a, u) {
    if (u === null) l.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + u);
    }
  }
  var Jn, _i;
  function Ga(l) {
    if (Jn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Jn = t && t[1] || "", _i = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Jn + l + _i;
  }
  var wn = !1;
  function kn(l, t) {
    if (!l || wn) return "";
    wn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var _ = function() {
                throw Error();
              };
              if (Object.defineProperty(_.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(_, []);
                } catch (m) {
                  var y = m;
                }
                Reflect.construct(l, [], _);
              } else {
                try {
                  _.call();
                } catch (m) {
                  y = m;
                }
                l.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (m) {
                y = m;
              }
              (_ = l()) && typeof _.catch == "function" && _.catch(function() {
              });
            }
          } catch (m) {
            if (m && y && typeof m.stack == "string")
              return [m.stack, y.stack];
          }
          return [null, null];
        }
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        u.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = u.DetermineComponentFrameRoot(), c = n[0], f = n[1];
      if (c && f) {
        var i = c.split(`
`), h = f.split(`
`);
        for (e = u = 0; u < i.length && !i[u].includes("DetermineComponentFrameRoot"); )
          u++;
        for (; e < h.length && !h[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (u === i.length || e === h.length)
          for (u = i.length - 1, e = h.length - 1; 1 <= u && 0 <= e && i[u] !== h[e]; )
            e--;
        for (; 1 <= u && 0 <= e; u--, e--)
          if (i[u] !== h[e]) {
            if (u !== 1 || e !== 1)
              do
                if (u--, e--, 0 > e || i[u] !== h[e]) {
                  var b = `
` + i[u].replace(" at new ", " at ");
                  return l.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", l.displayName)), b;
                }
              while (1 <= u && 0 <= e);
            break;
          }
      }
    } finally {
      wn = !1, Error.prepareStackTrace = a;
    }
    return (a = l ? l.displayName || l.name : "") ? Ga(a) : "";
  }
  function Cd(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ga(l.type);
      case 16:
        return Ga("Lazy");
      case 13:
        return Ga("Suspense");
      case 19:
        return Ga("SuspenseList");
      case 0:
      case 15:
        return kn(l.type, !1);
      case 11:
        return kn(l.type.render, !1);
      case 1:
        return kn(l.type, !0);
      case 31:
        return Ga("Activity");
      default:
        return "";
    }
  }
  function Ai(l) {
    try {
      var t = "";
      do
        t += Cd(l), l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function ot(l) {
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
  function zi(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Gd(l) {
    var t = zi(l) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    ), u = "" + l[t];
    if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var e = a.get, n = a.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(c) {
          u = "" + c, n.call(this, c);
        }
      }), Object.defineProperty(l, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(c) {
          u = "" + c;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function Oe(l) {
    l._valueTracker || (l._valueTracker = Gd(l));
  }
  function Oi(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), u = "";
    return l && (u = zi(l) ? l.checked ? "true" : "false" : l.value), l = u, l !== a ? (t.setValue(l), !0) : !1;
  }
  function De(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Xd = /[\n"\\]/g;
  function rt(l) {
    return l.replace(
      Xd,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Wn(l, t, a, u, e, n, c, f) {
    l.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.type = c : l.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ot(t)) : l.value !== "" + ot(t) && (l.value = "" + ot(t)) : c !== "submit" && c !== "reset" || l.removeAttribute("value"), t != null ? $n(l, c, ot(t)) : a != null ? $n(l, c, ot(a)) : u != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.name = "" + ot(f) : l.removeAttribute("name");
  }
  function Di(l, t, a, u, e, n, c, f) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || a != null) {
      if (!(n !== "submit" && n !== "reset" || t != null))
        return;
      a = a != null ? "" + ot(a) : "", t = t != null ? "" + ot(t) : a, f || t === l.value || (l.value = t), l.defaultValue = t;
    }
    u = u ?? e, u = typeof u != "function" && typeof u != "symbol" && !!u, l.checked = f ? l.checked : !!u, l.defaultChecked = !!u, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (l.name = c);
  }
  function $n(l, t, a) {
    t === "number" && De(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a);
  }
  function Xa(l, t, a, u) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < a.length; e++)
        t["$" + a[e]] = !0;
      for (a = 0; a < l.length; a++)
        e = t.hasOwnProperty("$" + l[a].value), l[a].selected !== e && (l[a].selected = e), e && u && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + ot(a), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          l[e].selected = !0, u && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Mi(l, t, a) {
    if (t != null && (t = "" + ot(t), t !== l.value && (l.value = t), a == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + ot(a) : "";
  }
  function Ri(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(r(92));
        if (Zl(u)) {
          if (1 < u.length) throw Error(r(93));
          u = u[0];
        }
        a = u;
      }
      a == null && (a = ""), t = a;
    }
    a = ot(t), l.defaultValue = a, u = l.textContent, u === a && u !== "" && u !== null && (l.value = u);
  }
  function Qa(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Qd = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ui(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? u ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : u ? l.setProperty(t, a) : typeof a != "number" || a === 0 || Qd.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px";
  }
  function pi(l, t, a) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (l = l.style, a != null) {
      for (var u in a)
        !a.hasOwnProperty(u) || t != null && t.hasOwnProperty(u) || (u.indexOf("--") === 0 ? l.setProperty(u, "") : u === "float" ? l.cssFloat = "" : l[u] = "");
      for (var e in t)
        u = t[e], t.hasOwnProperty(e) && a[e] !== u && Ui(l, e, u);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && Ui(l, n, t[n]);
  }
  function Fn(l) {
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
  var Zd = /* @__PURE__ */ new Map([
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
  ]), Vd = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Me(l) {
    return Vd.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var In = null;
  function Pn(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Za = null, Va = null;
  function Ni(l) {
    var t = Ya(l);
    if (t && (l = t.stateNode)) {
      var a = l[Wl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (Wn(
            l,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), t = a.name, a.type === "radio" && t != null) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + rt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var e = u[Wl] || null;
                if (!e) throw Error(r(90));
                Wn(
                  u,
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
            for (t = 0; t < a.length; t++)
              u = a[t], u.form === l.form && Oi(u);
          }
          break l;
        case "textarea":
          Mi(l, a.value, a.defaultValue);
          break l;
        case "select":
          t = a.value, t != null && Xa(l, !!a.multiple, t, !1);
      }
    }
  }
  var lc = !1;
  function Hi(l, t, a) {
    if (lc) return l(t, a);
    lc = !0;
    try {
      var u = l(t);
      return u;
    } finally {
      if (lc = !1, (Za !== null || Va !== null) && (vn(), Za && (t = Za, l = Va, Va = Za = null, Ni(t), l)))
        for (t = 0; t < l.length; t++) Ni(l[t]);
    }
  }
  function zu(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var u = a[Wl] || null;
    if (u === null) return null;
    a = u[t];
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
        (u = !u.disabled) || (l = l.type, u = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !u;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function")
      throw Error(
        r(231, t, typeof a)
      );
    return a;
  }
  var Ut = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), tc = !1;
  if (Ut)
    try {
      var Ou = {};
      Object.defineProperty(Ou, "passive", {
        get: function() {
          tc = !0;
        }
      }), window.addEventListener("test", Ou, Ou), window.removeEventListener("test", Ou, Ou);
    } catch {
      tc = !1;
    }
  var Jt = null, ac = null, Re = null;
  function qi() {
    if (Re) return Re;
    var l, t = ac, a = t.length, u, e = "value" in Jt ? Jt.value : Jt.textContent, n = e.length;
    for (l = 0; l < a && t[l] === e[l]; l++) ;
    var c = a - l;
    for (u = 1; u <= c && t[a - u] === e[n - u]; u++) ;
    return Re = e.slice(l, 1 < u ? 1 - u : void 0);
  }
  function Ue(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function pe() {
    return !0;
  }
  function xi() {
    return !1;
  }
  function $l(l) {
    function t(a, u, e, n, c) {
      this._reactName = a, this._targetInst = e, this.type = u, this.nativeEvent = n, this.target = c, this.currentTarget = null;
      for (var f in l)
        l.hasOwnProperty(f) && (a = l[f], this[f] = a ? a(n) : n[f]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? pe : xi, this.isPropagationStopped = xi, this;
    }
    return x(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = pe);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = pe);
      },
      persist: function() {
      },
      isPersistent: pe
    }), t;
  }
  var Sa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ne = $l(Sa), Du = x({}, Sa, { view: 0, detail: 0 }), Ld = $l(Du), uc, ec, Mu, He = x({}, Du, {
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
    getModifierState: cc,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Mu && (Mu && l.type === "mousemove" ? (uc = l.screenX - Mu.screenX, ec = l.screenY - Mu.screenY) : ec = uc = 0, Mu = l), uc);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : ec;
    }
  }), Bi = $l(He), Kd = x({}, He, { dataTransfer: 0 }), Jd = $l(Kd), wd = x({}, Du, { relatedTarget: 0 }), nc = $l(wd), kd = x({}, Sa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Wd = $l(kd), $d = x({}, Sa, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Fd = $l($d), Id = x({}, Sa, { data: 0 }), Yi = $l(Id), Pd = {
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
  }, l0 = {
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
  }, t0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function a0(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = t0[l]) ? !!t[l] : !1;
  }
  function cc() {
    return a0;
  }
  var u0 = x({}, Du, {
    key: function(l) {
      if (l.key) {
        var t = Pd[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Ue(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? l0[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: cc,
    charCode: function(l) {
      return l.type === "keypress" ? Ue(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Ue(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), e0 = $l(u0), n0 = x({}, He, {
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
  }), ji = $l(n0), c0 = x({}, Du, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: cc
  }), f0 = $l(c0), i0 = x({}, Sa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), s0 = $l(i0), o0 = x({}, He, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), r0 = $l(o0), d0 = x({}, Sa, {
    newState: 0,
    oldState: 0
  }), v0 = $l(d0), h0 = [9, 13, 27, 32], fc = Ut && "CompositionEvent" in window, Ru = null;
  Ut && "documentMode" in document && (Ru = document.documentMode);
  var y0 = Ut && "TextEvent" in window && !Ru, Ci = Ut && (!fc || Ru && 8 < Ru && 11 >= Ru), Gi = " ", Xi = !1;
  function Qi(l, t) {
    switch (l) {
      case "keyup":
        return h0.indexOf(t.keyCode) !== -1;
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
  function Zi(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var La = !1;
  function m0(l, t) {
    switch (l) {
      case "compositionend":
        return Zi(t);
      case "keypress":
        return t.which !== 32 ? null : (Xi = !0, Gi);
      case "textInput":
        return l = t.data, l === Gi && Xi ? null : l;
      default:
        return null;
    }
  }
  function g0(l, t) {
    if (La)
      return l === "compositionend" || !fc && Qi(l, t) ? (l = qi(), Re = ac = Jt = null, La = !1, l) : null;
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
        return Ci && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var S0 = {
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
  function Vi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!S0[l.type] : t === "textarea";
  }
  function Li(l, t, a, u) {
    Za ? Va ? Va.push(u) : Va = [u] : Za = u, t = bn(t, "onChange"), 0 < t.length && (a = new Ne(
      "onChange",
      "change",
      null,
      a,
      u
    ), l.push({ event: a, listeners: t }));
  }
  var Uu = null, pu = null;
  function b0(l) {
    Or(l, 0);
  }
  function qe(l) {
    var t = Au(l);
    if (Oi(t)) return l;
  }
  function Ki(l, t) {
    if (l === "change") return t;
  }
  var Ji = !1;
  if (Ut) {
    var ic;
    if (Ut) {
      var sc = "oninput" in document;
      if (!sc) {
        var wi = document.createElement("div");
        wi.setAttribute("oninput", "return;"), sc = typeof wi.oninput == "function";
      }
      ic = sc;
    } else ic = !1;
    Ji = ic && (!document.documentMode || 9 < document.documentMode);
  }
  function ki() {
    Uu && (Uu.detachEvent("onpropertychange", Wi), pu = Uu = null);
  }
  function Wi(l) {
    if (l.propertyName === "value" && qe(pu)) {
      var t = [];
      Li(
        t,
        pu,
        l,
        Pn(l)
      ), Hi(b0, t);
    }
  }
  function T0(l, t, a) {
    l === "focusin" ? (ki(), Uu = t, pu = a, Uu.attachEvent("onpropertychange", Wi)) : l === "focusout" && ki();
  }
  function E0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return qe(pu);
  }
  function _0(l, t) {
    if (l === "click") return qe(t);
  }
  function A0(l, t) {
    if (l === "input" || l === "change")
      return qe(t);
  }
  function z0(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var ut = typeof Object.is == "function" ? Object.is : z0;
  function Nu(l, t) {
    if (ut(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(l), u = Object.keys(t);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var e = a[u];
      if (!Cn.call(t, e) || !ut(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function $i(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Fi(l, t) {
    var a = $i(l);
    l = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (u = l + a.textContent.length, l <= t && u >= t)
          return { node: a, offset: t - l };
        l = u;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = $i(a);
    }
  }
  function Ii(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ii(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Pi(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = De(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = De(l.document);
    }
    return t;
  }
  function oc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var O0 = Ut && "documentMode" in document && 11 >= document.documentMode, Ka = null, rc = null, Hu = null, dc = !1;
  function ls(l, t, a) {
    var u = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    dc || Ka == null || Ka !== De(u) || (u = Ka, "selectionStart" in u && oc(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
      anchorNode: u.anchorNode,
      anchorOffset: u.anchorOffset,
      focusNode: u.focusNode,
      focusOffset: u.focusOffset
    }), Hu && Nu(Hu, u) || (Hu = u, u = bn(rc, "onSelect"), 0 < u.length && (t = new Ne(
      "onSelect",
      "select",
      null,
      t,
      a
    ), l.push({ event: t, listeners: u }), t.target = Ka)));
  }
  function ba(l, t) {
    var a = {};
    return a[l.toLowerCase()] = t.toLowerCase(), a["Webkit" + l] = "webkit" + t, a["Moz" + l] = "moz" + t, a;
  }
  var Ja = {
    animationend: ba("Animation", "AnimationEnd"),
    animationiteration: ba("Animation", "AnimationIteration"),
    animationstart: ba("Animation", "AnimationStart"),
    transitionrun: ba("Transition", "TransitionRun"),
    transitionstart: ba("Transition", "TransitionStart"),
    transitioncancel: ba("Transition", "TransitionCancel"),
    transitionend: ba("Transition", "TransitionEnd")
  }, vc = {}, ts = {};
  Ut && (ts = document.createElement("div").style, "AnimationEvent" in window || (delete Ja.animationend.animation, delete Ja.animationiteration.animation, delete Ja.animationstart.animation), "TransitionEvent" in window || delete Ja.transitionend.transition);
  function Ta(l) {
    if (vc[l]) return vc[l];
    if (!Ja[l]) return l;
    var t = Ja[l], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in ts)
        return vc[l] = t[a];
    return l;
  }
  var as = Ta("animationend"), us = Ta("animationiteration"), es = Ta("animationstart"), D0 = Ta("transitionrun"), M0 = Ta("transitionstart"), R0 = Ta("transitioncancel"), ns = Ta("transitionend"), cs = /* @__PURE__ */ new Map(), hc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  hc.push("scrollEnd");
  function bt(l, t) {
    cs.set(l, t), ga(t, [l]);
  }
  var fs = /* @__PURE__ */ new WeakMap();
  function dt(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = fs.get(l);
      return a !== void 0 ? a : (t = {
        value: l,
        source: t,
        stack: Ai(t)
      }, fs.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: Ai(t)
    };
  }
  var vt = [], wa = 0, yc = 0;
  function xe() {
    for (var l = wa, t = yc = wa = 0; t < l; ) {
      var a = vt[t];
      vt[t++] = null;
      var u = vt[t];
      vt[t++] = null;
      var e = vt[t];
      vt[t++] = null;
      var n = vt[t];
      if (vt[t++] = null, u !== null && e !== null) {
        var c = u.pending;
        c === null ? e.next = e : (e.next = c.next, c.next = e), u.pending = e;
      }
      n !== 0 && is(a, e, n);
    }
  }
  function Be(l, t, a, u) {
    vt[wa++] = l, vt[wa++] = t, vt[wa++] = a, vt[wa++] = u, yc |= u, l.lanes |= u, l = l.alternate, l !== null && (l.lanes |= u);
  }
  function mc(l, t, a, u) {
    return Be(l, t, a, u), Ye(l);
  }
  function ka(l, t) {
    return Be(l, null, null, t), Ye(l);
  }
  function is(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= a, u = n.alternate, u !== null && (u.childLanes |= a), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - at(a), l = n.hiddenUpdates, u = l[e], u === null ? l[e] = [t] : u.push(t), t.lane = a | 536870912), n) : null;
  }
  function Ye(l) {
    if (50 < ue)
      throw ue = 0, Af = null, Error(r(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Wa = {};
  function U0(l, t, a, u) {
    this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function et(l, t, a, u) {
    return new U0(l, t, a, u);
  }
  function gc(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function pt(l, t) {
    var a = l.alternate;
    return a === null ? (a = et(
      l.tag,
      t,
      l.key,
      l.mode
    ), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = t, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 65011712, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, t = l.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a;
  }
  function ss(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function je(l, t, a, u, e, n) {
    var c = 0;
    if (u = l, typeof l == "function") gc(l) && (c = 1);
    else if (typeof l == "string")
      c = Nv(
        l,
        a,
        G.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case Hl:
          return l = et(31, a, t, e), l.elementType = Hl, l.lanes = n, l;
        case Nl:
          return Ea(a.children, e, n, t);
        case Jl:
          c = 8, e |= 24;
          break;
        case C:
          return l = et(12, a, t, e | 2), l.elementType = C, l.lanes = n, l;
        case V:
          return l = et(13, a, t, e), l.elementType = V, l.lanes = n, l;
        case _l:
          return l = et(19, a, t, e), l.elementType = _l, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case ml:
              case cl:
                c = 10;
                break l;
              case vl:
                c = 9;
                break l;
              case Sl:
                c = 11;
                break l;
              case ol:
                c = 14;
                break l;
              case hl:
                c = 16, u = null;
                break l;
            }
          c = 29, a = Error(
            r(130, l === null ? "null" : typeof l, "")
          ), u = null;
      }
    return t = et(c, a, t, e), t.elementType = l, t.type = u, t.lanes = n, t;
  }
  function Ea(l, t, a, u) {
    return l = et(7, l, u, t), l.lanes = a, l;
  }
  function Sc(l, t, a) {
    return l = et(6, l, null, t), l.lanes = a, l;
  }
  function bc(l, t, a) {
    return t = et(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = a, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var $a = [], Fa = 0, Ce = null, Ge = 0, ht = [], yt = 0, _a = null, Nt = 1, Ht = "";
  function Aa(l, t) {
    $a[Fa++] = Ge, $a[Fa++] = Ce, Ce = l, Ge = t;
  }
  function os(l, t, a) {
    ht[yt++] = Nt, ht[yt++] = Ht, ht[yt++] = _a, _a = l;
    var u = Nt;
    l = Ht;
    var e = 32 - at(u) - 1;
    u &= ~(1 << e), a += 1;
    var n = 32 - at(t) + e;
    if (30 < n) {
      var c = e - e % 5;
      n = (u & (1 << c) - 1).toString(32), u >>= c, e -= c, Nt = 1 << 32 - at(t) + e | a << e | u, Ht = n + l;
    } else
      Nt = 1 << n | a << e | u, Ht = l;
  }
  function Tc(l) {
    l.return !== null && (Aa(l, 1), os(l, 1, 0));
  }
  function Ec(l) {
    for (; l === Ce; )
      Ce = $a[--Fa], $a[Fa] = null, Ge = $a[--Fa], $a[Fa] = null;
    for (; l === _a; )
      _a = ht[--yt], ht[yt] = null, Ht = ht[--yt], ht[yt] = null, Nt = ht[--yt], ht[yt] = null;
  }
  var kl = null, Al = null, ul = !1, za = null, At = !1, _c = Error(r(519));
  function Oa(l) {
    var t = Error(r(418, ""));
    throw Bu(dt(t, l)), _c;
  }
  function rs(l) {
    var t = l.stateNode, a = l.type, u = l.memoizedProps;
    switch (t[Vl] = l, t[Wl] = u, a) {
      case "dialog":
        F("cancel", t), F("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        F("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ne.length; a++)
          F(ne[a], t);
        break;
      case "source":
        F("error", t);
        break;
      case "img":
      case "image":
      case "link":
        F("error", t), F("load", t);
        break;
      case "details":
        F("toggle", t);
        break;
      case "input":
        F("invalid", t), Di(
          t,
          u.value,
          u.defaultValue,
          u.checked,
          u.defaultChecked,
          u.type,
          u.name,
          !0
        ), Oe(t);
        break;
      case "select":
        F("invalid", t);
        break;
      case "textarea":
        F("invalid", t), Ri(t, u.value, u.defaultValue, u.children), Oe(t);
    }
    a = u.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || u.suppressHydrationWarning === !0 || Ur(t.textContent, a) ? (u.popover != null && (F("beforetoggle", t), F("toggle", t)), u.onScroll != null && F("scroll", t), u.onScrollEnd != null && F("scrollend", t), u.onClick != null && (t.onclick = Tn), t = !0) : t = !1, t || Oa(l);
  }
  function ds(l) {
    for (kl = l.return; kl; )
      switch (kl.tag) {
        case 5:
        case 13:
          At = !1;
          return;
        case 27:
        case 3:
          At = !0;
          return;
        default:
          kl = kl.return;
      }
  }
  function qu(l) {
    if (l !== kl) return !1;
    if (!ul) return ds(l), ul = !0, !1;
    var t = l.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || Gf(l.type, l.memoizedProps)), a = !a), a && Al && Oa(l), ds(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (a = l.data, a === "/$") {
              if (t === 0) {
                Al = Et(l.nextSibling);
                break l;
              }
              t--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || t++;
          l = l.nextSibling;
        }
        Al = null;
      }
    } else
      t === 27 ? (t = Al, ia(l.type) ? (l = Vf, Vf = null, Al = l) : Al = t) : Al = kl ? Et(l.stateNode.nextSibling) : null;
    return !0;
  }
  function xu() {
    Al = kl = null, ul = !1;
  }
  function vs() {
    var l = za;
    return l !== null && (Pl === null ? Pl = l : Pl.push.apply(
      Pl,
      l
    ), za = null), l;
  }
  function Bu(l) {
    za === null ? za = [l] : za.push(l);
  }
  var Ac = A(null), Da = null, qt = null;
  function wt(l, t, a) {
    U(Ac, t._currentValue), t._currentValue = a;
  }
  function xt(l) {
    l._currentValue = Ac.current, N(Ac);
  }
  function zc(l, t, a) {
    for (; l !== null; ) {
      var u = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, u !== null && (u.childLanes |= t)) : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t), l === a) break;
      l = l.return;
    }
  }
  function Oc(l, t, a, u) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var c = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var f = n;
          n = e;
          for (var i = 0; i < t.length; i++)
            if (f.context === t[i]) {
              n.lanes |= a, f = n.alternate, f !== null && (f.lanes |= a), zc(
                n.return,
                a,
                l
              ), u || (c = null);
              break l;
            }
          n = f.next;
        }
      } else if (e.tag === 18) {
        if (c = e.return, c === null) throw Error(r(341));
        c.lanes |= a, n = c.alternate, n !== null && (n.lanes |= a), zc(c, a, l), c = null;
      } else c = e.child;
      if (c !== null) c.return = e;
      else
        for (c = e; c !== null; ) {
          if (c === l) {
            c = null;
            break;
          }
          if (e = c.sibling, e !== null) {
            e.return = c.return, c = e;
            break;
          }
          c = c.return;
        }
      e = c;
    }
  }
  function Yu(l, t, a, u) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var c = e.alternate;
        if (c === null) throw Error(r(387));
        if (c = c.memoizedProps, c !== null) {
          var f = e.type;
          ut(e.pendingProps.value, c.value) || (l !== null ? l.push(f) : l = [f]);
        }
      } else if (e === lt.current) {
        if (c = e.alternate, c === null) throw Error(r(387));
        c.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(re) : l = [re]);
      }
      e = e.return;
    }
    l !== null && Oc(
      t,
      l,
      a,
      u
    ), t.flags |= 262144;
  }
  function Xe(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!ut(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Ma(l) {
    Da = l, qt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Ll(l) {
    return hs(Da, l);
  }
  function Qe(l, t) {
    return Da === null && Ma(l), hs(l, t);
  }
  function hs(l, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, qt === null) {
      if (l === null) throw Error(r(308));
      qt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else qt = qt.next = t;
    return a;
  }
  var p0 = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, u) {
        l.push(u);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(a) {
        return a();
      });
    };
  }, N0 = g.unstable_scheduleCallback, H0 = g.unstable_NormalPriority, ql = {
    $$typeof: cl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Dc() {
    return {
      controller: new p0(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ju(l) {
    l.refCount--, l.refCount === 0 && N0(H0, function() {
      l.controller.abort();
    });
  }
  var Cu = null, Mc = 0, Ia = 0, Pa = null;
  function q0(l, t) {
    if (Cu === null) {
      var a = Cu = [];
      Mc = 0, Ia = pf(), Pa = {
        status: "pending",
        value: void 0,
        then: function(u) {
          a.push(u);
        }
      };
    }
    return Mc++, t.then(ys, ys), t;
  }
  function ys() {
    if (--Mc === 0 && Cu !== null) {
      Pa !== null && (Pa.status = "fulfilled");
      var l = Cu;
      Cu = null, Ia = 0, Pa = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function x0(l, t) {
    var a = [], u = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        a.push(e);
      }
    };
    return l.then(
      function() {
        u.status = "fulfilled", u.value = t;
        for (var e = 0; e < a.length; e++) (0, a[e])(t);
      },
      function(e) {
        for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++)
          (0, a[e])(void 0);
      }
    ), u;
  }
  var ms = T.S;
  T.S = function(l, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && q0(l, t), ms !== null && ms(l, t);
  };
  var Ra = A(null);
  function Rc() {
    var l = Ra.current;
    return l !== null ? l : yl.pooledCache;
  }
  function Ze(l, t) {
    t === null ? U(Ra, Ra.current) : U(Ra, t.pool);
  }
  function gs() {
    var l = Rc();
    return l === null ? null : { parent: ql._currentValue, pool: l };
  }
  var Gu = Error(r(460)), Ss = Error(r(474)), Ve = Error(r(542)), Uc = { then: function() {
  } };
  function bs(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Le() {
  }
  function Ts(l, t, a) {
    switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(Le, Le), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, _s(l), l;
      default:
        if (typeof t.status == "string") t.then(Le, Le);
        else {
          if (l = yl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(r(482));
          l = t, l.status = "pending", l.then(
            function(u) {
              if (t.status === "pending") {
                var e = t;
                e.status = "fulfilled", e.value = u;
              }
            },
            function(u) {
              if (t.status === "pending") {
                var e = t;
                e.status = "rejected", e.reason = u;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, _s(l), l;
        }
        throw Xu = t, Gu;
    }
  }
  var Xu = null;
  function Es() {
    if (Xu === null) throw Error(r(459));
    var l = Xu;
    return Xu = null, l;
  }
  function _s(l) {
    if (l === Gu || l === Ve)
      throw Error(r(483));
  }
  var kt = !1;
  function pc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Nc(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Wt(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function $t(l, t, a) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (el & 2) !== 0) {
      var e = u.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), u.pending = t, t = Ye(l), is(l, null, a), t;
    }
    return Be(l, u, t, a), Ye(l);
  }
  function Qu(l, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, yi(l, a);
    }
  }
  function Hc(l, t) {
    var a = l.updateQueue, u = l.alternate;
    if (u !== null && (u = u.updateQueue, a === u)) {
      var e = null, n = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var c = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = c : n = n.next = c, a = a.next;
        } while (a !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      a = {
        baseState: u.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks
      }, l.updateQueue = a;
      return;
    }
    l = a.lastBaseUpdate, l === null ? a.firstBaseUpdate = t : l.next = t, a.lastBaseUpdate = t;
  }
  var qc = !1;
  function Zu() {
    if (qc) {
      var l = Pa;
      if (l !== null) throw l;
    }
  }
  function Vu(l, t, a, u) {
    qc = !1;
    var e = l.updateQueue;
    kt = !1;
    var n = e.firstBaseUpdate, c = e.lastBaseUpdate, f = e.shared.pending;
    if (f !== null) {
      e.shared.pending = null;
      var i = f, h = i.next;
      i.next = null, c === null ? n = h : c.next = h, c = i;
      var b = l.alternate;
      b !== null && (b = b.updateQueue, f = b.lastBaseUpdate, f !== c && (f === null ? b.firstBaseUpdate = h : f.next = h, b.lastBaseUpdate = i));
    }
    if (n !== null) {
      var _ = e.baseState;
      c = 0, b = h = i = null, f = n;
      do {
        var y = f.lane & -536870913, m = y !== f.lane;
        if (m ? (ll & y) === y : (u & y) === y) {
          y !== 0 && y === Ia && (qc = !0), b !== null && (b = b.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          l: {
            var L = l, X = f;
            y = t;
            var sl = a;
            switch (X.tag) {
              case 1:
                if (L = X.payload, typeof L == "function") {
                  _ = L.call(sl, _, y);
                  break l;
                }
                _ = L;
                break l;
              case 3:
                L.flags = L.flags & -65537 | 128;
              case 0:
                if (L = X.payload, y = typeof L == "function" ? L.call(sl, _, y) : L, y == null) break l;
                _ = x({}, _, y);
                break l;
              case 2:
                kt = !0;
            }
          }
          y = f.callback, y !== null && (l.flags |= 64, m && (l.flags |= 8192), m = e.callbacks, m === null ? e.callbacks = [y] : m.push(y));
        } else
          m = {
            lane: y,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, b === null ? (h = b = m, i = _) : b = b.next = m, c |= y;
        if (f = f.next, f === null) {
          if (f = e.shared.pending, f === null)
            break;
          m = f, f = m.next, m.next = null, e.lastBaseUpdate = m, e.shared.pending = null;
        }
      } while (!0);
      b === null && (i = _), e.baseState = i, e.firstBaseUpdate = h, e.lastBaseUpdate = b, n === null && (e.shared.lanes = 0), ea |= c, l.lanes = c, l.memoizedState = _;
    }
  }
  function As(l, t) {
    if (typeof l != "function")
      throw Error(r(191, l));
    l.call(t);
  }
  function zs(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++)
        As(a[l], t);
  }
  var lu = A(null), Ke = A(0);
  function Os(l, t) {
    l = Qt, U(Ke, l), U(lu, t), Qt = l | t.baseLanes;
  }
  function xc() {
    U(Ke, Qt), U(lu, lu.current);
  }
  function Bc() {
    Qt = Ke.current, N(lu), N(Ke);
  }
  var Ft = 0, k = null, fl = null, Ul = null, Je = !1, tu = !1, Ua = !1, we = 0, Lu = 0, au = null, B0 = 0;
  function Ol() {
    throw Error(r(321));
  }
  function Yc(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!ut(l[a], t[a])) return !1;
    return !0;
  }
  function jc(l, t, a, u, e, n) {
    return Ft = n, k = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, T.H = l === null || l.memoizedState === null ? io : so, Ua = !1, n = a(u, e), Ua = !1, tu && (n = Ms(
      t,
      a,
      u,
      e
    )), Ds(l), n;
  }
  function Ds(l) {
    T.H = Pe;
    var t = fl !== null && fl.next !== null;
    if (Ft = 0, Ul = fl = k = null, Je = !1, Lu = 0, au = null, t) throw Error(r(300));
    l === null || Yl || (l = l.dependencies, l !== null && Xe(l) && (Yl = !0));
  }
  function Ms(l, t, a, u) {
    k = l;
    var e = 0;
    do {
      if (tu && (au = null), Lu = 0, tu = !1, 25 <= e) throw Error(r(301));
      if (e += 1, Ul = fl = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      T.H = Z0, n = t(a, u);
    } while (tu);
    return n;
  }
  function Y0() {
    var l = T.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Ku(t) : t, l = l.useState()[0], (fl !== null ? fl.memoizedState : null) !== l && (k.flags |= 1024), t;
  }
  function Cc() {
    var l = we !== 0;
    return we = 0, l;
  }
  function Gc(l, t, a) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~a;
  }
  function Xc(l) {
    if (Je) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Je = !1;
    }
    Ft = 0, Ul = fl = k = null, tu = !1, Lu = we = 0, au = null;
  }
  function Fl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ul === null ? k.memoizedState = Ul = l : Ul = Ul.next = l, Ul;
  }
  function pl() {
    if (fl === null) {
      var l = k.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = fl.next;
    var t = Ul === null ? k.memoizedState : Ul.next;
    if (t !== null)
      Ul = t, fl = l;
    else {
      if (l === null)
        throw k.alternate === null ? Error(r(467)) : Error(r(310));
      fl = l, l = {
        memoizedState: fl.memoizedState,
        baseState: fl.baseState,
        baseQueue: fl.baseQueue,
        queue: fl.queue,
        next: null
      }, Ul === null ? k.memoizedState = Ul = l : Ul = Ul.next = l;
    }
    return Ul;
  }
  function Qc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ku(l) {
    var t = Lu;
    return Lu += 1, au === null && (au = []), l = Ts(au, l, t), t = k, (Ul === null ? t.memoizedState : Ul.next) === null && (t = t.alternate, T.H = t === null || t.memoizedState === null ? io : so), l;
  }
  function ke(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ku(l);
      if (l.$$typeof === cl) return Ll(l);
    }
    throw Error(r(438, String(l)));
  }
  function Zc(l) {
    var t = null, a = k.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var u = k.alternate;
      u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (t = {
        data: u.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = Qc(), k.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(l), u = 0; u < l; u++)
        a[u] = wl;
    return t.index++, a;
  }
  function Bt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function We(l) {
    var t = pl();
    return Vc(t, fl, l);
  }
  function Vc(l, t, a) {
    var u = l.queue;
    if (u === null) throw Error(r(311));
    u.lastRenderedReducer = a;
    var e = l.baseQueue, n = u.pending;
    if (n !== null) {
      if (e !== null) {
        var c = e.next;
        e.next = n.next, n.next = c;
      }
      t.baseQueue = e = n, u.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var f = c = null, i = null, h = t, b = !1;
      do {
        var _ = h.lane & -536870913;
        if (_ !== h.lane ? (ll & _) === _ : (Ft & _) === _) {
          var y = h.revertLane;
          if (y === 0)
            i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null
            }), _ === Ia && (b = !0);
          else if ((Ft & y) === y) {
            h = h.next, y === Ia && (b = !0);
            continue;
          } else
            _ = {
              lane: 0,
              revertLane: h.revertLane,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null
            }, i === null ? (f = i = _, c = n) : i = i.next = _, k.lanes |= y, ea |= y;
          _ = h.action, Ua && a(n, _), n = h.hasEagerState ? h.eagerState : a(n, _);
        } else
          y = {
            lane: _,
            revertLane: h.revertLane,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null
          }, i === null ? (f = i = y, c = n) : i = i.next = y, k.lanes |= _, ea |= _;
        h = h.next;
      } while (h !== null && h !== t);
      if (i === null ? c = n : i.next = f, !ut(n, l.memoizedState) && (Yl = !0, b && (a = Pa, a !== null)))
        throw a;
      l.memoizedState = n, l.baseState = c, l.baseQueue = i, u.lastRenderedState = n;
    }
    return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
  }
  function Lc(l) {
    var t = pl(), a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch, e = a.pending, n = t.memoizedState;
    if (e !== null) {
      a.pending = null;
      var c = e = e.next;
      do
        n = l(n, c.action), c = c.next;
      while (c !== e);
      ut(n, t.memoizedState) || (Yl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), a.lastRenderedState = n;
    }
    return [n, u];
  }
  function Rs(l, t, a) {
    var u = k, e = pl(), n = ul;
    if (n) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else a = t();
    var c = !ut(
      (fl || e).memoizedState,
      a
    );
    c && (e.memoizedState = a, Yl = !0), e = e.queue;
    var f = Ns.bind(null, u, e, l);
    if (Ju(2048, 8, f, [l]), e.getSnapshot !== t || c || Ul !== null && Ul.memoizedState.tag & 1) {
      if (u.flags |= 2048, uu(
        9,
        $e(),
        ps.bind(
          null,
          u,
          e,
          a,
          t
        ),
        null
      ), yl === null) throw Error(r(349));
      n || (Ft & 124) !== 0 || Us(u, t, a);
    }
    return a;
  }
  function Us(l, t, a) {
    l.flags |= 16384, l = { getSnapshot: t, value: a }, t = k.updateQueue, t === null ? (t = Qc(), k.updateQueue = t, t.stores = [l]) : (a = t.stores, a === null ? t.stores = [l] : a.push(l));
  }
  function ps(l, t, a, u) {
    t.value = a, t.getSnapshot = u, Hs(t) && qs(l);
  }
  function Ns(l, t, a) {
    return a(function() {
      Hs(t) && qs(l);
    });
  }
  function Hs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !ut(l, a);
    } catch {
      return !0;
    }
  }
  function qs(l) {
    var t = ka(l, 2);
    t !== null && st(t, l, 2);
  }
  function Kc(l) {
    var t = Fl();
    if (typeof l == "function") {
      var a = l;
      if (l = a(), Ua) {
        Lt(!0);
        try {
          a();
        } finally {
          Lt(!1);
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
  function xs(l, t, a, u) {
    return l.baseState = a, Vc(
      l,
      fl,
      typeof u == "function" ? u : Bt
    );
  }
  function j0(l, t, a, u, e) {
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
        then: function(c) {
          n.listeners.push(c);
        }
      };
      T.T !== null ? a(!0) : n.isTransition = !1, u(n), a = t.pending, a === null ? (n.next = t.pending = n, Bs(t, n)) : (n.next = a.next, t.pending = a.next = n);
    }
  }
  function Bs(l, t) {
    var a = t.action, u = t.payload, e = l.state;
    if (t.isTransition) {
      var n = T.T, c = {};
      T.T = c;
      try {
        var f = a(e, u), i = T.S;
        i !== null && i(c, f), Ys(l, t, f);
      } catch (h) {
        Jc(l, t, h);
      } finally {
        T.T = n;
      }
    } else
      try {
        n = a(e, u), Ys(l, t, n);
      } catch (h) {
        Jc(l, t, h);
      }
  }
  function Ys(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(u) {
        js(l, t, u);
      },
      function(u) {
        return Jc(l, t, u);
      }
    ) : js(l, t, a);
  }
  function js(l, t, a) {
    t.status = "fulfilled", t.value = a, Cs(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, Bs(l, a)));
  }
  function Jc(l, t, a) {
    var u = l.pending;
    if (l.pending = null, u !== null) {
      u = u.next;
      do
        t.status = "rejected", t.reason = a, Cs(t), t = t.next;
      while (t !== u);
    }
    l.action = null;
  }
  function Cs(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Gs(l, t) {
    return t;
  }
  function Xs(l, t) {
    if (ul) {
      var a = yl.formState;
      if (a !== null) {
        l: {
          var u = k;
          if (ul) {
            if (Al) {
              t: {
                for (var e = Al, n = At; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = Et(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                Al = Et(
                  e.nextSibling
                ), u = e.data === "F!";
                break l;
              }
            }
            Oa(u);
          }
          u = !1;
        }
        u && (t = a[0]);
      }
    }
    return a = Fl(), a.memoizedState = a.baseState = t, u = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gs,
      lastRenderedState: t
    }, a.queue = u, a = no.bind(
      null,
      k,
      u
    ), u.dispatch = a, u = Kc(!1), n = Fc.bind(
      null,
      k,
      !1,
      u.queue
    ), u = Fl(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, u.queue = e, a = j0.bind(
      null,
      k,
      e,
      n,
      a
    ), e.dispatch = a, u.memoizedState = l, [t, a, !1];
  }
  function Qs(l) {
    var t = pl();
    return Zs(t, fl, l);
  }
  function Zs(l, t, a) {
    if (t = Vc(
      l,
      t,
      Gs
    )[0], l = We(Bt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var u = Ku(t);
      } catch (c) {
        throw c === Gu ? Ve : c;
      }
    else u = t;
    t = pl();
    var e = t.queue, n = e.dispatch;
    return a !== t.memoizedState && (k.flags |= 2048, uu(
      9,
      $e(),
      C0.bind(null, e, a),
      null
    )), [u, n, l];
  }
  function C0(l, t) {
    l.action = t;
  }
  function Vs(l) {
    var t = pl(), a = fl;
    if (a !== null)
      return Zs(t, a, l);
    pl(), t = t.memoizedState, a = pl();
    var u = a.queue.dispatch;
    return a.memoizedState = l, [t, u, !1];
  }
  function uu(l, t, a, u) {
    return l = { tag: l, create: a, deps: u, inst: t, next: null }, t = k.updateQueue, t === null && (t = Qc(), k.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (u = a.next, a.next = l, l.next = u, t.lastEffect = l), l;
  }
  function $e() {
    return { destroy: void 0, resource: void 0 };
  }
  function Ls() {
    return pl().memoizedState;
  }
  function Fe(l, t, a, u) {
    var e = Fl();
    u = u === void 0 ? null : u, k.flags |= l, e.memoizedState = uu(
      1 | t,
      $e(),
      a,
      u
    );
  }
  function Ju(l, t, a, u) {
    var e = pl();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    fl !== null && u !== null && Yc(u, fl.memoizedState.deps) ? e.memoizedState = uu(t, n, a, u) : (k.flags |= l, e.memoizedState = uu(
      1 | t,
      n,
      a,
      u
    ));
  }
  function Ks(l, t) {
    Fe(8390656, 8, l, t);
  }
  function Js(l, t) {
    Ju(2048, 8, l, t);
  }
  function ws(l, t) {
    return Ju(4, 2, l, t);
  }
  function ks(l, t) {
    return Ju(4, 4, l, t);
  }
  function Ws(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function $s(l, t, a) {
    a = a != null ? a.concat([l]) : null, Ju(4, 4, Ws.bind(null, t, l), a);
  }
  function wc() {
  }
  function Fs(l, t) {
    var a = pl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && Yc(t, u[1]) ? u[0] : (a.memoizedState = [l, t], l);
  }
  function Is(l, t) {
    var a = pl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && Yc(t, u[1]))
      return u[0];
    if (u = l(), Ua) {
      Lt(!0);
      try {
        l();
      } finally {
        Lt(!1);
      }
    }
    return a.memoizedState = [u, t], u;
  }
  function kc(l, t, a) {
    return a === void 0 || (Ft & 1073741824) !== 0 ? l.memoizedState = t : (l.memoizedState = a, l = ar(), k.lanes |= l, ea |= l, a);
  }
  function Ps(l, t, a, u) {
    return ut(a, t) ? a : lu.current !== null ? (l = kc(l, a, u), ut(l, t) || (Yl = !0), l) : (Ft & 42) === 0 ? (Yl = !0, l.memoizedState = a) : (l = ar(), k.lanes |= l, ea |= l, t);
  }
  function lo(l, t, a, u, e) {
    var n = p.p;
    p.p = n !== 0 && 8 > n ? n : 8;
    var c = T.T, f = {};
    T.T = f, Fc(l, !1, t, a);
    try {
      var i = e(), h = T.S;
      if (h !== null && h(f, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var b = x0(
          i,
          u
        );
        wu(
          l,
          t,
          b,
          it(l)
        );
      } else
        wu(
          l,
          t,
          u,
          it(l)
        );
    } catch (_) {
      wu(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: _ },
        it()
      );
    } finally {
      p.p = n, T.T = c;
    }
  }
  function G0() {
  }
  function Wc(l, t, a, u) {
    if (l.tag !== 5) throw Error(r(476));
    var e = to(l).queue;
    lo(
      l,
      e,
      t,
      Z,
      a === null ? G0 : function() {
        return ao(l), a(u);
      }
    );
  }
  function to(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Z,
      baseState: Z,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bt,
        lastRenderedState: Z
      },
      next: null
    };
    var a = {};
    return t.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bt,
        lastRenderedState: a
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function ao(l) {
    var t = to(l).next.queue;
    wu(l, t, {}, it());
  }
  function $c() {
    return Ll(re);
  }
  function uo() {
    return pl().memoizedState;
  }
  function eo() {
    return pl().memoizedState;
  }
  function X0(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = it();
          l = Wt(a);
          var u = $t(t, l, a);
          u !== null && (st(u, t, a), Qu(u, t, a)), t = { cache: Dc() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Q0(l, t, a) {
    var u = it();
    a = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ie(l) ? co(t, a) : (a = mc(l, t, a, u), a !== null && (st(a, l, u), fo(a, t, u)));
  }
  function no(l, t, a) {
    var u = it();
    wu(l, t, a, u);
  }
  function wu(l, t, a, u) {
    var e = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ie(l)) co(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var c = t.lastRenderedState, f = n(c, a);
          if (e.hasEagerState = !0, e.eagerState = f, ut(f, c))
            return Be(l, t, e, 0), yl === null && xe(), !1;
        } catch {
        } finally {
        }
      if (a = mc(l, t, e, u), a !== null)
        return st(a, l, u), fo(a, t, u), !0;
    }
    return !1;
  }
  function Fc(l, t, a, u) {
    if (u = {
      lane: 2,
      revertLane: pf(),
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ie(l)) {
      if (t) throw Error(r(479));
    } else
      t = mc(
        l,
        a,
        u,
        2
      ), t !== null && st(t, l, 2);
  }
  function Ie(l) {
    var t = l.alternate;
    return l === k || t !== null && t === k;
  }
  function co(l, t) {
    tu = Je = !0;
    var a = l.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t;
  }
  function fo(l, t, a) {
    if ((a & 4194048) !== 0) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, yi(l, a);
    }
  }
  var Pe = {
    readContext: Ll,
    use: ke,
    useCallback: Ol,
    useContext: Ol,
    useEffect: Ol,
    useImperativeHandle: Ol,
    useLayoutEffect: Ol,
    useInsertionEffect: Ol,
    useMemo: Ol,
    useReducer: Ol,
    useRef: Ol,
    useState: Ol,
    useDebugValue: Ol,
    useDeferredValue: Ol,
    useTransition: Ol,
    useSyncExternalStore: Ol,
    useId: Ol,
    useHostTransitionStatus: Ol,
    useFormState: Ol,
    useActionState: Ol,
    useOptimistic: Ol,
    useMemoCache: Ol,
    useCacheRefresh: Ol
  }, io = {
    readContext: Ll,
    use: ke,
    useCallback: function(l, t) {
      return Fl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Ll,
    useEffect: Ks,
    useImperativeHandle: function(l, t, a) {
      a = a != null ? a.concat([l]) : null, Fe(
        4194308,
        4,
        Ws.bind(null, t, l),
        a
      );
    },
    useLayoutEffect: function(l, t) {
      return Fe(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      Fe(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var a = Fl();
      t = t === void 0 ? null : t;
      var u = l();
      if (Ua) {
        Lt(!0);
        try {
          l();
        } finally {
          Lt(!1);
        }
      }
      return a.memoizedState = [u, t], u;
    },
    useReducer: function(l, t, a) {
      var u = Fl();
      if (a !== void 0) {
        var e = a(t);
        if (Ua) {
          Lt(!0);
          try {
            a(t);
          } finally {
            Lt(!1);
          }
        }
      } else e = t;
      return u.memoizedState = u.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, u.queue = l, l = l.dispatch = Q0.bind(
        null,
        k,
        l
      ), [u.memoizedState, l];
    },
    useRef: function(l) {
      var t = Fl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Kc(l);
      var t = l.queue, a = no.bind(null, k, t);
      return t.dispatch = a, [l.memoizedState, a];
    },
    useDebugValue: wc,
    useDeferredValue: function(l, t) {
      var a = Fl();
      return kc(a, l, t);
    },
    useTransition: function() {
      var l = Kc(!1);
      return l = lo.bind(
        null,
        k,
        l.queue,
        !0,
        !1
      ), Fl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, a) {
      var u = k, e = Fl();
      if (ul) {
        if (a === void 0)
          throw Error(r(407));
        a = a();
      } else {
        if (a = t(), yl === null)
          throw Error(r(349));
        (ll & 124) !== 0 || Us(u, t, a);
      }
      e.memoizedState = a;
      var n = { value: a, getSnapshot: t };
      return e.queue = n, Ks(Ns.bind(null, u, n, l), [
        l
      ]), u.flags |= 2048, uu(
        9,
        $e(),
        ps.bind(
          null,
          u,
          n,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var l = Fl(), t = yl.identifierPrefix;
      if (ul) {
        var a = Ht, u = Nt;
        a = (u & ~(1 << 32 - at(u) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = we++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = B0++, t = "«" + t + "r" + a.toString(32) + "»";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: $c,
    useFormState: Xs,
    useActionState: Xs,
    useOptimistic: function(l) {
      var t = Fl();
      t.memoizedState = t.baseState = l;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Fc.bind(
        null,
        k,
        !0,
        a
      ), a.dispatch = t, [l, t];
    },
    useMemoCache: Zc,
    useCacheRefresh: function() {
      return Fl().memoizedState = X0.bind(
        null,
        k
      );
    }
  }, so = {
    readContext: Ll,
    use: ke,
    useCallback: Fs,
    useContext: Ll,
    useEffect: Js,
    useImperativeHandle: $s,
    useInsertionEffect: ws,
    useLayoutEffect: ks,
    useMemo: Is,
    useReducer: We,
    useRef: Ls,
    useState: function() {
      return We(Bt);
    },
    useDebugValue: wc,
    useDeferredValue: function(l, t) {
      var a = pl();
      return Ps(
        a,
        fl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = We(Bt)[0], t = pl().memoizedState;
      return [
        typeof l == "boolean" ? l : Ku(l),
        t
      ];
    },
    useSyncExternalStore: Rs,
    useId: uo,
    useHostTransitionStatus: $c,
    useFormState: Qs,
    useActionState: Qs,
    useOptimistic: function(l, t) {
      var a = pl();
      return xs(a, fl, l, t);
    },
    useMemoCache: Zc,
    useCacheRefresh: eo
  }, Z0 = {
    readContext: Ll,
    use: ke,
    useCallback: Fs,
    useContext: Ll,
    useEffect: Js,
    useImperativeHandle: $s,
    useInsertionEffect: ws,
    useLayoutEffect: ks,
    useMemo: Is,
    useReducer: Lc,
    useRef: Ls,
    useState: function() {
      return Lc(Bt);
    },
    useDebugValue: wc,
    useDeferredValue: function(l, t) {
      var a = pl();
      return fl === null ? kc(a, l, t) : Ps(
        a,
        fl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Lc(Bt)[0], t = pl().memoizedState;
      return [
        typeof l == "boolean" ? l : Ku(l),
        t
      ];
    },
    useSyncExternalStore: Rs,
    useId: uo,
    useHostTransitionStatus: $c,
    useFormState: Vs,
    useActionState: Vs,
    useOptimistic: function(l, t) {
      var a = pl();
      return fl !== null ? xs(a, fl, l, t) : (a.baseState = l, [l, a.queue.dispatch]);
    },
    useMemoCache: Zc,
    useCacheRefresh: eo
  }, eu = null, ku = 0;
  function ln(l) {
    var t = ku;
    return ku += 1, eu === null && (eu = []), Ts(eu, l, t);
  }
  function Wu(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function tn(l, t) {
    throw t.$$typeof === w ? Error(r(525)) : (l = Object.prototype.toString.call(t), Error(
      r(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function oo(l) {
    var t = l._init;
    return t(l._payload);
  }
  function ro(l) {
    function t(d, o) {
      if (l) {
        var v = d.deletions;
        v === null ? (d.deletions = [o], d.flags |= 16) : v.push(o);
      }
    }
    function a(d, o) {
      if (!l) return null;
      for (; o !== null; )
        t(d, o), o = o.sibling;
      return null;
    }
    function u(d) {
      for (var o = /* @__PURE__ */ new Map(); d !== null; )
        d.key !== null ? o.set(d.key, d) : o.set(d.index, d), d = d.sibling;
      return o;
    }
    function e(d, o) {
      return d = pt(d, o), d.index = 0, d.sibling = null, d;
    }
    function n(d, o, v) {
      return d.index = v, l ? (v = d.alternate, v !== null ? (v = v.index, v < o ? (d.flags |= 67108866, o) : v) : (d.flags |= 67108866, o)) : (d.flags |= 1048576, o);
    }
    function c(d) {
      return l && d.alternate === null && (d.flags |= 67108866), d;
    }
    function f(d, o, v, E) {
      return o === null || o.tag !== 6 ? (o = Sc(v, d.mode, E), o.return = d, o) : (o = e(o, v), o.return = d, o);
    }
    function i(d, o, v, E) {
      var H = v.type;
      return H === Nl ? b(
        d,
        o,
        v.props.children,
        E,
        v.key
      ) : o !== null && (o.elementType === H || typeof H == "object" && H !== null && H.$$typeof === hl && oo(H) === o.type) ? (o = e(o, v.props), Wu(o, v), o.return = d, o) : (o = je(
        v.type,
        v.key,
        v.props,
        null,
        d.mode,
        E
      ), Wu(o, v), o.return = d, o);
    }
    function h(d, o, v, E) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== v.containerInfo || o.stateNode.implementation !== v.implementation ? (o = bc(v, d.mode, E), o.return = d, o) : (o = e(o, v.children || []), o.return = d, o);
    }
    function b(d, o, v, E, H) {
      return o === null || o.tag !== 7 ? (o = Ea(
        v,
        d.mode,
        E,
        H
      ), o.return = d, o) : (o = e(o, v), o.return = d, o);
    }
    function _(d, o, v) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return o = Sc(
          "" + o,
          d.mode,
          v
        ), o.return = d, o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case P:
            return v = je(
              o.type,
              o.key,
              o.props,
              null,
              d.mode,
              v
            ), Wu(v, o), v.return = d, v;
          case gl:
            return o = bc(
              o,
              d.mode,
              v
            ), o.return = d, o;
          case hl:
            var E = o._init;
            return o = E(o._payload), _(d, o, v);
        }
        if (Zl(o) || Rl(o))
          return o = Ea(
            o,
            d.mode,
            v,
            null
          ), o.return = d, o;
        if (typeof o.then == "function")
          return _(d, ln(o), v);
        if (o.$$typeof === cl)
          return _(
            d,
            Qe(d, o),
            v
          );
        tn(d, o);
      }
      return null;
    }
    function y(d, o, v, E) {
      var H = o !== null ? o.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return H !== null ? null : f(d, o, "" + v, E);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case P:
            return v.key === H ? i(d, o, v, E) : null;
          case gl:
            return v.key === H ? h(d, o, v, E) : null;
          case hl:
            return H = v._init, v = H(v._payload), y(d, o, v, E);
        }
        if (Zl(v) || Rl(v))
          return H !== null ? null : b(d, o, v, E, null);
        if (typeof v.then == "function")
          return y(
            d,
            o,
            ln(v),
            E
          );
        if (v.$$typeof === cl)
          return y(
            d,
            o,
            Qe(d, v),
            E
          );
        tn(d, v);
      }
      return null;
    }
    function m(d, o, v, E, H) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return d = d.get(v) || null, f(o, d, "" + E, H);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case P:
            return d = d.get(
              E.key === null ? v : E.key
            ) || null, i(o, d, E, H);
          case gl:
            return d = d.get(
              E.key === null ? v : E.key
            ) || null, h(o, d, E, H);
          case hl:
            var W = E._init;
            return E = W(E._payload), m(
              d,
              o,
              v,
              E,
              H
            );
        }
        if (Zl(E) || Rl(E))
          return d = d.get(v) || null, b(o, d, E, H, null);
        if (typeof E.then == "function")
          return m(
            d,
            o,
            v,
            ln(E),
            H
          );
        if (E.$$typeof === cl)
          return m(
            d,
            o,
            v,
            Qe(o, E),
            H
          );
        tn(o, E);
      }
      return null;
    }
    function L(d, o, v, E) {
      for (var H = null, W = null, Y = o, Q = o = 0, Cl = null; Y !== null && Q < v.length; Q++) {
        Y.index > Q ? (Cl = Y, Y = null) : Cl = Y.sibling;
        var al = y(
          d,
          Y,
          v[Q],
          E
        );
        if (al === null) {
          Y === null && (Y = Cl);
          break;
        }
        l && Y && al.alternate === null && t(d, Y), o = n(al, o, Q), W === null ? H = al : W.sibling = al, W = al, Y = Cl;
      }
      if (Q === v.length)
        return a(d, Y), ul && Aa(d, Q), H;
      if (Y === null) {
        for (; Q < v.length; Q++)
          Y = _(d, v[Q], E), Y !== null && (o = n(
            Y,
            o,
            Q
          ), W === null ? H = Y : W.sibling = Y, W = Y);
        return ul && Aa(d, Q), H;
      }
      for (Y = u(Y); Q < v.length; Q++)
        Cl = m(
          Y,
          d,
          Q,
          v[Q],
          E
        ), Cl !== null && (l && Cl.alternate !== null && Y.delete(
          Cl.key === null ? Q : Cl.key
        ), o = n(
          Cl,
          o,
          Q
        ), W === null ? H = Cl : W.sibling = Cl, W = Cl);
      return l && Y.forEach(function(va) {
        return t(d, va);
      }), ul && Aa(d, Q), H;
    }
    function X(d, o, v, E) {
      if (v == null) throw Error(r(151));
      for (var H = null, W = null, Y = o, Q = o = 0, Cl = null, al = v.next(); Y !== null && !al.done; Q++, al = v.next()) {
        Y.index > Q ? (Cl = Y, Y = null) : Cl = Y.sibling;
        var va = y(d, Y, al.value, E);
        if (va === null) {
          Y === null && (Y = Cl);
          break;
        }
        l && Y && va.alternate === null && t(d, Y), o = n(va, o, Q), W === null ? H = va : W.sibling = va, W = va, Y = Cl;
      }
      if (al.done)
        return a(d, Y), ul && Aa(d, Q), H;
      if (Y === null) {
        for (; !al.done; Q++, al = v.next())
          al = _(d, al.value, E), al !== null && (o = n(al, o, Q), W === null ? H = al : W.sibling = al, W = al);
        return ul && Aa(d, Q), H;
      }
      for (Y = u(Y); !al.done; Q++, al = v.next())
        al = m(Y, d, Q, al.value, E), al !== null && (l && al.alternate !== null && Y.delete(al.key === null ? Q : al.key), o = n(al, o, Q), W === null ? H = al : W.sibling = al, W = al);
      return l && Y.forEach(function(Vv) {
        return t(d, Vv);
      }), ul && Aa(d, Q), H;
    }
    function sl(d, o, v, E) {
      if (typeof v == "object" && v !== null && v.type === Nl && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case P:
            l: {
              for (var H = v.key; o !== null; ) {
                if (o.key === H) {
                  if (H = v.type, H === Nl) {
                    if (o.tag === 7) {
                      a(
                        d,
                        o.sibling
                      ), E = e(
                        o,
                        v.props.children
                      ), E.return = d, d = E;
                      break l;
                    }
                  } else if (o.elementType === H || typeof H == "object" && H !== null && H.$$typeof === hl && oo(H) === o.type) {
                    a(
                      d,
                      o.sibling
                    ), E = e(o, v.props), Wu(E, v), E.return = d, d = E;
                    break l;
                  }
                  a(d, o);
                  break;
                } else t(d, o);
                o = o.sibling;
              }
              v.type === Nl ? (E = Ea(
                v.props.children,
                d.mode,
                E,
                v.key
              ), E.return = d, d = E) : (E = je(
                v.type,
                v.key,
                v.props,
                null,
                d.mode,
                E
              ), Wu(E, v), E.return = d, d = E);
            }
            return c(d);
          case gl:
            l: {
              for (H = v.key; o !== null; ) {
                if (o.key === H)
                  if (o.tag === 4 && o.stateNode.containerInfo === v.containerInfo && o.stateNode.implementation === v.implementation) {
                    a(
                      d,
                      o.sibling
                    ), E = e(o, v.children || []), E.return = d, d = E;
                    break l;
                  } else {
                    a(d, o);
                    break;
                  }
                else t(d, o);
                o = o.sibling;
              }
              E = bc(v, d.mode, E), E.return = d, d = E;
            }
            return c(d);
          case hl:
            return H = v._init, v = H(v._payload), sl(
              d,
              o,
              v,
              E
            );
        }
        if (Zl(v))
          return L(
            d,
            o,
            v,
            E
          );
        if (Rl(v)) {
          if (H = Rl(v), typeof H != "function") throw Error(r(150));
          return v = H.call(v), X(
            d,
            o,
            v,
            E
          );
        }
        if (typeof v.then == "function")
          return sl(
            d,
            o,
            ln(v),
            E
          );
        if (v.$$typeof === cl)
          return sl(
            d,
            o,
            Qe(d, v),
            E
          );
        tn(d, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, o !== null && o.tag === 6 ? (a(d, o.sibling), E = e(o, v), E.return = d, d = E) : (a(d, o), E = Sc(v, d.mode, E), E.return = d, d = E), c(d)) : a(d, o);
    }
    return function(d, o, v, E) {
      try {
        ku = 0;
        var H = sl(
          d,
          o,
          v,
          E
        );
        return eu = null, H;
      } catch (Y) {
        if (Y === Gu || Y === Ve) throw Y;
        var W = et(29, Y, null, d.mode);
        return W.lanes = E, W.return = d, W;
      } finally {
      }
    };
  }
  var nu = ro(!0), vo = ro(!1), mt = A(null), zt = null;
  function It(l) {
    var t = l.alternate;
    U(xl, xl.current & 1), U(mt, l), zt === null && (t === null || lu.current !== null || t.memoizedState !== null) && (zt = l);
  }
  function ho(l) {
    if (l.tag === 22) {
      if (U(xl, xl.current), U(mt, l), zt === null) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (zt = l);
      }
    } else Pt();
  }
  function Pt() {
    U(xl, xl.current), U(mt, mt.current);
  }
  function Yt(l) {
    N(mt), zt === l && (zt = null), N(xl);
  }
  var xl = A(0);
  function an(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || Zf(a)))
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
  function Ic(l, t, a, u) {
    t = l.memoizedState, a = a(u, t), a = a == null ? t : x({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var Pc = {
    enqueueSetState: function(l, t, a) {
      l = l._reactInternals;
      var u = it(), e = Wt(u);
      e.payload = t, a != null && (e.callback = a), t = $t(l, e, u), t !== null && (st(t, l, u), Qu(t, l, u));
    },
    enqueueReplaceState: function(l, t, a) {
      l = l._reactInternals;
      var u = it(), e = Wt(u);
      e.tag = 1, e.payload = t, a != null && (e.callback = a), t = $t(l, e, u), t !== null && (st(t, l, u), Qu(t, l, u));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var a = it(), u = Wt(a);
      u.tag = 2, t != null && (u.callback = t), t = $t(l, u, a), t !== null && (st(t, l, a), Qu(t, l, a));
    }
  };
  function yo(l, t, a, u, e, n, c) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(u, n, c) : t.prototype && t.prototype.isPureReactComponent ? !Nu(a, u) || !Nu(e, n) : !0;
  }
  function mo(l, t, a, u) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, u), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, u), t.state !== l && Pc.enqueueReplaceState(t, t.state, null);
  }
  function pa(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t)
        u !== "ref" && (a[u] = t[u]);
    }
    if (l = l.defaultProps) {
      a === t && (a = x({}, a));
      for (var e in l)
        a[e] === void 0 && (a[e] = l[e]);
    }
    return a;
  }
  var un = typeof reportError == "function" ? reportError : function(l) {
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
  function go(l) {
    un(l);
  }
  function So(l) {
    console.error(l);
  }
  function bo(l) {
    un(l);
  }
  function en(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function To(l, t, a) {
    try {
      var u = l.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function lf(l, t, a) {
    return a = Wt(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      en(l, t);
    }, a;
  }
  function Eo(l) {
    return l = Wt(l), l.tag = 3, l;
  }
  function _o(l, t, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        To(t, a, u);
      };
    }
    var c = a.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (l.callback = function() {
      To(t, a, u), typeof e != "function" && (na === null ? na = /* @__PURE__ */ new Set([this]) : na.add(this));
      var f = u.stack;
      this.componentDidCatch(u.value, {
        componentStack: f !== null ? f : ""
      });
    });
  }
  function V0(l, t, a, u, e) {
    if (a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
      if (t = a.alternate, t !== null && Yu(
        t,
        a,
        e,
        !0
      ), a = mt.current, a !== null) {
        switch (a.tag) {
          case 13:
            return zt === null ? Of() : a.alternate === null && zl === 0 && (zl = 3), a.flags &= -257, a.flags |= 65536, a.lanes = e, u === Uc ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([u]) : t.add(u), Mf(l, u, e)), !1;
          case 22:
            return a.flags |= 65536, u === Uc ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([u])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([u]) : a.add(u)), Mf(l, u, e)), !1;
        }
        throw Error(r(435, a.tag));
      }
      return Mf(l, u, e), Of(), !1;
    }
    if (ul)
      return t = mt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, u !== _c && (l = Error(r(422), { cause: u }), Bu(dt(l, a)))) : (u !== _c && (t = Error(r(423), {
        cause: u
      }), Bu(
        dt(t, a)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, u = dt(u, a), e = lf(
        l.stateNode,
        u,
        e
      ), Hc(l, e), zl !== 4 && (zl = 2)), !1;
    var n = Error(r(520), { cause: u });
    if (n = dt(n, a), ae === null ? ae = [n] : ae.push(n), zl !== 4 && (zl = 2), t === null) return !0;
    u = dt(u, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, l = e & -e, a.lanes |= l, l = lf(a.stateNode, u, l), Hc(a, l), !1;
        case 1:
          if (t = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (na === null || !na.has(n))))
            return a.flags |= 65536, e &= -e, a.lanes |= e, e = Eo(e), _o(
              e,
              l,
              a,
              u
            ), Hc(a, e), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Ao = Error(r(461)), Yl = !1;
  function Gl(l, t, a, u) {
    t.child = l === null ? vo(t, null, a, u) : nu(
      t,
      l.child,
      a,
      u
    );
  }
  function zo(l, t, a, u, e) {
    a = a.render;
    var n = t.ref;
    if ("ref" in u) {
      var c = {};
      for (var f in u)
        f !== "ref" && (c[f] = u[f]);
    } else c = u;
    return Ma(t), u = jc(
      l,
      t,
      a,
      c,
      n,
      e
    ), f = Cc(), l !== null && !Yl ? (Gc(l, t, e), jt(l, t, e)) : (ul && f && Tc(t), t.flags |= 1, Gl(l, t, u, e), t.child);
  }
  function Oo(l, t, a, u, e) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" && !gc(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = n, Do(
        l,
        t,
        n,
        u,
        e
      )) : (l = je(
        a.type,
        null,
        u,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !sf(l, e)) {
      var c = n.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Nu, a(c, u) && l.ref === t.ref)
        return jt(l, t, e);
    }
    return t.flags |= 1, l = pt(n, u), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Do(l, t, a, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Nu(n, u) && l.ref === t.ref)
        if (Yl = !1, t.pendingProps = u = n, sf(l, e))
          (l.flags & 131072) !== 0 && (Yl = !0);
        else
          return t.lanes = l.lanes, jt(l, t, e);
    }
    return tf(
      l,
      t,
      a,
      u,
      e
    );
  }
  function Mo(l, t, a) {
    var u = t.pendingProps, e = u.children, n = l !== null ? l.memoizedState : null;
    if (u.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = n !== null ? n.baseLanes | a : a, l !== null) {
          for (e = t.child = l.child, n = 0; e !== null; )
            n = n | e.lanes | e.childLanes, e = e.sibling;
          t.childLanes = n & ~u;
        } else t.childLanes = 0, t.child = null;
        return Ro(
          l,
          t,
          u,
          a
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ze(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? Os(t, n) : xc(), ho(t);
      else
        return t.lanes = t.childLanes = 536870912, Ro(
          l,
          t,
          n !== null ? n.baseLanes | a : a,
          a
        );
    } else
      n !== null ? (Ze(t, n.cachePool), Os(t, n), Pt(), t.memoizedState = null) : (l !== null && Ze(t, null), xc(), Pt());
    return Gl(l, t, e, a), t.child;
  }
  function Ro(l, t, a, u) {
    var e = Rc();
    return e = e === null ? null : { parent: ql._currentValue, pool: e }, t.memoizedState = {
      baseLanes: a,
      cachePool: e
    }, l !== null && Ze(t, null), xc(), ho(t), l !== null && Yu(l, t, u, !0), null;
  }
  function nn(l, t) {
    var a = t.ref;
    if (a === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(r(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function tf(l, t, a, u, e) {
    return Ma(t), a = jc(
      l,
      t,
      a,
      u,
      void 0,
      e
    ), u = Cc(), l !== null && !Yl ? (Gc(l, t, e), jt(l, t, e)) : (ul && u && Tc(t), t.flags |= 1, Gl(l, t, a, e), t.child);
  }
  function Uo(l, t, a, u, e, n) {
    return Ma(t), t.updateQueue = null, a = Ms(
      t,
      u,
      a,
      e
    ), Ds(l), u = Cc(), l !== null && !Yl ? (Gc(l, t, n), jt(l, t, n)) : (ul && u && Tc(t), t.flags |= 1, Gl(l, t, a, n), t.child);
  }
  function po(l, t, a, u, e) {
    if (Ma(t), t.stateNode === null) {
      var n = Wa, c = a.contextType;
      typeof c == "object" && c !== null && (n = Ll(c)), n = new a(u, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Pc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = u, n.state = t.memoizedState, n.refs = {}, pc(t), c = a.contextType, n.context = typeof c == "object" && c !== null ? Ll(c) : Wa, n.state = t.memoizedState, c = a.getDerivedStateFromProps, typeof c == "function" && (Ic(
        t,
        a,
        c,
        u
      ), n.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (c = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), c !== n.state && Pc.enqueueReplaceState(n, n.state, null), Vu(t, u, n, e), Zu(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !0;
    } else if (l === null) {
      n = t.stateNode;
      var f = t.memoizedProps, i = pa(a, f);
      n.props = i;
      var h = n.context, b = a.contextType;
      c = Wa, typeof b == "object" && b !== null && (c = Ll(b));
      var _ = a.getDerivedStateFromProps;
      b = typeof _ == "function" || typeof n.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, b || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f || h !== c) && mo(
        t,
        n,
        u,
        c
      ), kt = !1;
      var y = t.memoizedState;
      n.state = y, Vu(t, u, n, e), Zu(), h = t.memoizedState, f || y !== h || kt ? (typeof _ == "function" && (Ic(
        t,
        a,
        _,
        u
      ), h = t.memoizedState), (i = kt || yo(
        t,
        a,
        i,
        u,
        y,
        h,
        c
      )) ? (b || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = u, t.memoizedState = h), n.props = u, n.state = h, n.context = c, u = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !1);
    } else {
      n = t.stateNode, Nc(l, t), c = t.memoizedProps, b = pa(a, c), n.props = b, _ = t.pendingProps, y = n.context, h = a.contextType, i = Wa, typeof h == "object" && h !== null && (i = Ll(h)), f = a.getDerivedStateFromProps, (h = typeof f == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c !== _ || y !== i) && mo(
        t,
        n,
        u,
        i
      ), kt = !1, y = t.memoizedState, n.state = y, Vu(t, u, n, e), Zu();
      var m = t.memoizedState;
      c !== _ || y !== m || kt || l !== null && l.dependencies !== null && Xe(l.dependencies) ? (typeof f == "function" && (Ic(
        t,
        a,
        f,
        u
      ), m = t.memoizedState), (b = kt || yo(
        t,
        a,
        b,
        u,
        y,
        m,
        i
      ) || l !== null && l.dependencies !== null && Xe(l.dependencies)) ? (h || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, m, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        u,
        m,
        i
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && y === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && y === l.memoizedState || (t.flags |= 1024), t.memoizedProps = u, t.memoizedState = m), n.props = u, n.state = m, n.context = i, u = b) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && y === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && y === l.memoizedState || (t.flags |= 1024), u = !1);
    }
    return n = u, nn(l, t), u = (t.flags & 128) !== 0, n || u ? (n = t.stateNode, a = u && typeof a.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && u ? (t.child = nu(
      t,
      l.child,
      null,
      e
    ), t.child = nu(
      t,
      null,
      a,
      e
    )) : Gl(l, t, a, e), t.memoizedState = n.state, l = t.child) : l = jt(
      l,
      t,
      e
    ), l;
  }
  function No(l, t, a, u) {
    return xu(), t.flags |= 256, Gl(l, t, a, u), t.child;
  }
  var af = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function uf(l) {
    return { baseLanes: l, cachePool: gs() };
  }
  function ef(l, t, a) {
    return l = l !== null ? l.childLanes & ~a : 0, t && (l |= gt), l;
  }
  function Ho(l, t, a) {
    var u = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, c;
    if ((c = n) || (c = l !== null && l.memoizedState === null ? !1 : (xl.current & 2) !== 0), c && (e = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (ul) {
        if (e ? It(t) : Pt(), ul) {
          var f = Al, i;
          if (i = f) {
            l: {
              for (i = f, f = At; i.nodeType !== 8; ) {
                if (!f) {
                  f = null;
                  break l;
                }
                if (i = Et(
                  i.nextSibling
                ), i === null) {
                  f = null;
                  break l;
                }
              }
              f = i;
            }
            f !== null ? (t.memoizedState = {
              dehydrated: f,
              treeContext: _a !== null ? { id: Nt, overflow: Ht } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, i = et(
              18,
              null,
              null,
              0
            ), i.stateNode = f, i.return = t, t.child = i, kl = t, Al = null, i = !0) : i = !1;
          }
          i || Oa(t);
        }
        if (f = t.memoizedState, f !== null && (f = f.dehydrated, f !== null))
          return Zf(f) ? t.lanes = 32 : t.lanes = 536870912, null;
        Yt(t);
      }
      return f = u.children, u = u.fallback, e ? (Pt(), e = t.mode, f = cn(
        { mode: "hidden", children: f },
        e
      ), u = Ea(
        u,
        e,
        a,
        null
      ), f.return = t, u.return = t, f.sibling = u, t.child = f, e = t.child, e.memoizedState = uf(a), e.childLanes = ef(
        l,
        c,
        a
      ), t.memoizedState = af, u) : (It(t), nf(t, f));
    }
    if (i = l.memoizedState, i !== null && (f = i.dehydrated, f !== null)) {
      if (n)
        t.flags & 256 ? (It(t), t.flags &= -257, t = cf(
          l,
          t,
          a
        )) : t.memoizedState !== null ? (Pt(), t.child = l.child, t.flags |= 128, t = null) : (Pt(), e = u.fallback, f = t.mode, u = cn(
          { mode: "visible", children: u.children },
          f
        ), e = Ea(
          e,
          f,
          a,
          null
        ), e.flags |= 2, u.return = t, e.return = t, u.sibling = e, t.child = u, nu(
          t,
          l.child,
          null,
          a
        ), u = t.child, u.memoizedState = uf(a), u.childLanes = ef(
          l,
          c,
          a
        ), t.memoizedState = af, t = e);
      else if (It(t), Zf(f)) {
        if (c = f.nextSibling && f.nextSibling.dataset, c) var h = c.dgst;
        c = h, u = Error(r(419)), u.stack = "", u.digest = c, Bu({ value: u, source: null, stack: null }), t = cf(
          l,
          t,
          a
        );
      } else if (Yl || Yu(l, t, a, !1), c = (a & l.childLanes) !== 0, Yl || c) {
        if (c = yl, c !== null && (u = a & -a, u = (u & 42) !== 0 ? 1 : Zn(u), u = (u & (c.suspendedLanes | a)) !== 0 ? 0 : u, u !== 0 && u !== i.retryLane))
          throw i.retryLane = u, ka(l, u), st(c, l, u), Ao;
        f.data === "$?" || Of(), t = cf(
          l,
          t,
          a
        );
      } else
        f.data === "$?" ? (t.flags |= 192, t.child = l.child, t = null) : (l = i.treeContext, Al = Et(
          f.nextSibling
        ), kl = t, ul = !0, za = null, At = !1, l !== null && (ht[yt++] = Nt, ht[yt++] = Ht, ht[yt++] = _a, Nt = l.id, Ht = l.overflow, _a = t), t = nf(
          t,
          u.children
        ), t.flags |= 4096);
      return t;
    }
    return e ? (Pt(), e = u.fallback, f = t.mode, i = l.child, h = i.sibling, u = pt(i, {
      mode: "hidden",
      children: u.children
    }), u.subtreeFlags = i.subtreeFlags & 65011712, h !== null ? e = pt(h, e) : (e = Ea(
      e,
      f,
      a,
      null
    ), e.flags |= 2), e.return = t, u.return = t, u.sibling = e, t.child = u, u = e, e = t.child, f = l.child.memoizedState, f === null ? f = uf(a) : (i = f.cachePool, i !== null ? (h = ql._currentValue, i = i.parent !== h ? { parent: h, pool: h } : i) : i = gs(), f = {
      baseLanes: f.baseLanes | a,
      cachePool: i
    }), e.memoizedState = f, e.childLanes = ef(
      l,
      c,
      a
    ), t.memoizedState = af, u) : (It(t), a = l.child, l = a.sibling, a = pt(a, {
      mode: "visible",
      children: u.children
    }), a.return = t, a.sibling = null, l !== null && (c = t.deletions, c === null ? (t.deletions = [l], t.flags |= 16) : c.push(l)), t.child = a, t.memoizedState = null, a);
  }
  function nf(l, t) {
    return t = cn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function cn(l, t) {
    return l = et(22, l, null, t), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function cf(l, t, a) {
    return nu(t, l.child, null, a), l = nf(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function qo(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    u !== null && (u.lanes |= t), zc(l.return, t, a);
  }
  function ff(l, t, a, u, e) {
    var n = l.memoizedState;
    n === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: u,
      tail: a,
      tailMode: e
    } : (n.isBackwards = t, n.rendering = null, n.renderingStartTime = 0, n.last = u, n.tail = a, n.tailMode = e);
  }
  function xo(l, t, a) {
    var u = t.pendingProps, e = u.revealOrder, n = u.tail;
    if (Gl(l, t, u.children, a), u = xl.current, (u & 2) !== 0)
      u = u & 1 | 2, t.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && qo(l, a, t);
          else if (l.tag === 19)
            qo(l, a, t);
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
      u &= 1;
    }
    switch (U(xl, u), e) {
      case "forwards":
        for (a = t.child, e = null; a !== null; )
          l = a.alternate, l !== null && an(l) === null && (e = a), a = a.sibling;
        a = e, a === null ? (e = t.child, t.child = null) : (e = a.sibling, a.sibling = null), ff(
          t,
          !1,
          e,
          a,
          n
        );
        break;
      case "backwards":
        for (a = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && an(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = a, a = e, e = l;
        }
        ff(
          t,
          !0,
          a,
          null,
          n
        );
        break;
      case "together":
        ff(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function jt(l, t, a) {
    if (l !== null && (t.dependencies = l.dependencies), ea |= t.lanes, (a & t.childLanes) === 0)
      if (l !== null) {
        if (Yu(
          l,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(r(153));
    if (t.child !== null) {
      for (l = t.child, a = pt(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null; )
        l = l.sibling, a = a.sibling = pt(l, l.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function sf(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Xe(l)));
  }
  function L0(l, t, a) {
    switch (t.tag) {
      case 3:
        bl(t, t.stateNode.containerInfo), wt(t, ql, l.memoizedState.cache), xu();
        break;
      case 27:
      case 5:
        jn(t);
        break;
      case 4:
        bl(t, t.stateNode.containerInfo);
        break;
      case 10:
        wt(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null ? (It(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Ho(l, t, a) : (It(t), l = jt(
            l,
            t,
            a
          ), l !== null ? l.sibling : null);
        It(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (u = (a & t.childLanes) !== 0, u || (Yu(
          l,
          t,
          a,
          !1
        ), u = (a & t.childLanes) !== 0), e) {
          if (u)
            return xo(
              l,
              t,
              a
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), U(xl, xl.current), u) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Mo(l, t, a);
      case 24:
        wt(t, ql, l.memoizedState.cache);
    }
    return jt(l, t, a);
  }
  function Bo(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Yl = !0;
      else {
        if (!sf(l, a) && (t.flags & 128) === 0)
          return Yl = !1, L0(
            l,
            t,
            a
          );
        Yl = (l.flags & 131072) !== 0;
      }
    else
      Yl = !1, ul && (t.flags & 1048576) !== 0 && os(t, Ge, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          l = t.pendingProps;
          var u = t.elementType, e = u._init;
          if (u = e(u._payload), t.type = u, typeof u == "function")
            gc(u) ? (l = pa(u, l), t.tag = 1, t = po(
              null,
              t,
              u,
              l,
              a
            )) : (t.tag = 0, t = tf(
              null,
              t,
              u,
              l,
              a
            ));
          else {
            if (u != null) {
              if (e = u.$$typeof, e === Sl) {
                t.tag = 11, t = zo(
                  null,
                  t,
                  u,
                  l,
                  a
                );
                break l;
              } else if (e === ol) {
                t.tag = 14, t = Oo(
                  null,
                  t,
                  u,
                  l,
                  a
                );
                break l;
              }
            }
            throw t = ya(u) || u, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return tf(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return u = t.type, e = pa(
          u,
          t.pendingProps
        ), po(
          l,
          t,
          u,
          e,
          a
        );
      case 3:
        l: {
          if (bl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(r(387));
          u = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, Nc(l, t), Vu(t, u, null, a);
          var c = t.memoizedState;
          if (u = c.cache, wt(t, ql, u), u !== n.cache && Oc(
            t,
            [ql],
            a,
            !0
          ), Zu(), u = c.element, n.isDehydrated)
            if (n = {
              element: u,
              isDehydrated: !1,
              cache: c.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = No(
                l,
                t,
                u,
                a
              );
              break l;
            } else if (u !== e) {
              e = dt(
                Error(r(424)),
                t
              ), Bu(e), t = No(
                l,
                t,
                u,
                a
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
              for (Al = Et(l.firstChild), kl = t, ul = !0, za = null, At = !0, a = vo(
                t,
                null,
                u,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (xu(), u === e) {
              t = jt(
                l,
                t,
                a
              );
              break l;
            }
            Gl(
              l,
              t,
              u,
              a
            );
          }
          t = t.child;
        }
        return t;
      case 26:
        return nn(l, t), l === null ? (a = Gr(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : ul || (a = t.type, l = t.pendingProps, u = En(
          K.current
        ).createElement(a), u[Vl] = t, u[Wl] = l, Ql(u, a, l), Bl(u), t.stateNode = u) : t.memoizedState = Gr(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return jn(t), l === null && ul && (u = t.stateNode = Yr(
          t.type,
          t.pendingProps,
          K.current
        ), kl = t, At = !0, e = Al, ia(t.type) ? (Vf = e, Al = Et(
          u.firstChild
        )) : Al = e), Gl(
          l,
          t,
          t.pendingProps.children,
          a
        ), nn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && ul && ((e = u = Al) && (u = Sv(
          u,
          t.type,
          t.pendingProps,
          At
        ), u !== null ? (t.stateNode = u, kl = t, Al = Et(
          u.firstChild
        ), At = !1, e = !0) : e = !1), e || Oa(t)), jn(t), e = t.type, n = t.pendingProps, c = l !== null ? l.memoizedProps : null, u = n.children, Gf(e, n) ? u = null : c !== null && Gf(e, c) && (t.flags |= 32), t.memoizedState !== null && (e = jc(
          l,
          t,
          Y0,
          null,
          null,
          a
        ), re._currentValue = e), nn(l, t), Gl(l, t, u, a), t.child;
      case 6:
        return l === null && ul && ((l = a = Al) && (a = bv(
          a,
          t.pendingProps,
          At
        ), a !== null ? (t.stateNode = a, kl = t, Al = null, l = !0) : l = !1), l || Oa(t)), null;
      case 13:
        return Ho(l, t, a);
      case 4:
        return bl(
          t,
          t.stateNode.containerInfo
        ), u = t.pendingProps, l === null ? t.child = nu(
          t,
          null,
          u,
          a
        ) : Gl(
          l,
          t,
          u,
          a
        ), t.child;
      case 11:
        return zo(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return Gl(
          l,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return Gl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return Gl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return u = t.pendingProps, wt(t, t.type, u.value), Gl(
          l,
          t,
          u.children,
          a
        ), t.child;
      case 9:
        return e = t.type._context, u = t.pendingProps.children, Ma(t), e = Ll(e), u = u(e), t.flags |= 1, Gl(l, t, u, a), t.child;
      case 14:
        return Oo(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return Do(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return xo(l, t, a);
      case 31:
        return u = t.pendingProps, a = t.mode, u = {
          mode: u.mode,
          children: u.children
        }, l === null ? (a = cn(
          u,
          a
        ), a.ref = t.ref, t.child = a, a.return = t, t = a) : (a = pt(l.child, u), a.ref = t.ref, t.child = a, a.return = t, t = a), t;
      case 22:
        return Mo(l, t, a);
      case 24:
        return Ma(t), u = Ll(ql), l === null ? (e = Rc(), e === null && (e = yl, n = Dc(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= a), e = n), t.memoizedState = {
          parent: u,
          cache: e
        }, pc(t), wt(t, ql, e)) : ((l.lanes & a) !== 0 && (Nc(l, t), Vu(t, null, null, a), Zu()), e = l.memoizedState, n = t.memoizedState, e.parent !== u ? (e = { parent: u, cache: u }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), wt(t, ql, u)) : (u = n.cache, wt(t, ql, u), u !== e.cache && Oc(
          t,
          [ql],
          a,
          !0
        ))), Gl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function Ct(l) {
    l.flags |= 4;
  }
  function Yo(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Lr(t)) {
      if (t = mt.current, t !== null && ((ll & 4194048) === ll ? zt !== null : (ll & 62914560) !== ll && (ll & 536870912) === 0 || t !== zt))
        throw Xu = Uc, Ss;
      l.flags |= 8192;
    }
  }
  function fn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? vi() : 536870912, l.lanes |= t, su |= t);
  }
  function $u(l, t) {
    if (!ul)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? l.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = l.tail;
          for (var u = null; a !== null; )
            a.alternate !== null && (u = a), a = a.sibling;
          u === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : u.sibling = null;
      }
  }
  function El(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, a = 0, u = 0;
    if (t)
      for (var e = l.child; e !== null; )
        a |= e.lanes | e.childLanes, u |= e.subtreeFlags & 65011712, u |= e.flags & 65011712, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        a |= e.lanes | e.childLanes, u |= e.subtreeFlags, u |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= u, l.childLanes = a, t;
  }
  function K0(l, t, a) {
    var u = t.pendingProps;
    switch (Ec(t), t.tag) {
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
        return El(t), null;
      case 1:
        return El(t), null;
      case 3:
        return a = t.stateNode, u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), xt(ql), Vt(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (qu(t) ? Ct(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, vs())), El(t), null;
      case 26:
        return a = t.memoizedState, l === null ? (Ct(t), a !== null ? (El(t), Yo(t, a)) : (El(t), t.flags &= -16777217)) : a ? a !== l.memoizedState ? (Ct(t), El(t), Yo(t, a)) : (El(t), t.flags &= -16777217) : (l.memoizedProps !== u && Ct(t), El(t), t.flags &= -16777217), null;
      case 27:
        Se(t), a = K.current;
        var e = t.type;
        if (l !== null && t.stateNode != null)
          l.memoizedProps !== u && Ct(t);
        else {
          if (!u) {
            if (t.stateNode === null)
              throw Error(r(166));
            return El(t), null;
          }
          l = G.current, qu(t) ? rs(t) : (l = Yr(e, u, a), t.stateNode = l, Ct(t));
        }
        return El(t), null;
      case 5:
        if (Se(t), a = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== u && Ct(t);
        else {
          if (!u) {
            if (t.stateNode === null)
              throw Error(r(166));
            return El(t), null;
          }
          if (l = G.current, qu(t))
            rs(t);
          else {
            switch (e = En(
              K.current
            ), l) {
              case 1:
                l = e.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                l = e.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    l = e.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    l = e.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    l = e.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof u.is == "string" ? e.createElement("select", { is: u.is }) : e.createElement("select"), u.multiple ? l.multiple = !0 : u.size && (l.size = u.size);
                    break;
                  default:
                    l = typeof u.is == "string" ? e.createElement(a, { is: u.is }) : e.createElement(a);
                }
            }
            l[Vl] = t, l[Wl] = u;
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
            l: switch (Ql(l, a, u), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!u.autoFocus;
                break l;
              case "img":
                l = !0;
                break l;
              default:
                l = !1;
            }
            l && Ct(t);
          }
        }
        return El(t), t.flags &= -16777217, null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== u && Ct(t);
        else {
          if (typeof u != "string" && t.stateNode === null)
            throw Error(r(166));
          if (l = K.current, qu(t)) {
            if (l = t.stateNode, a = t.memoizedProps, u = null, e = kl, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            l[Vl] = t, l = !!(l.nodeValue === a || u !== null && u.suppressHydrationWarning === !0 || Ur(l.nodeValue, a)), l || Oa(t);
          } else
            l = En(l).createTextNode(
              u
            ), l[Vl] = t, t.stateNode = l;
        }
        return El(t), null;
      case 13:
        if (u = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = qu(t), u !== null && u.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
              e[Vl] = t;
            } else
              xu(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            El(t), e = !1;
          } else
            e = vs(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (Yt(t), t) : (Yt(t), null);
        }
        if (Yt(t), (t.flags & 128) !== 0)
          return t.lanes = a, t;
        if (a = u !== null, l = l !== null && l.memoizedState !== null, a) {
          u = t.child, e = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (e = u.alternate.memoizedState.cachePool.pool);
          var n = null;
          u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool), n !== e && (u.flags |= 2048);
        }
        return a !== l && a && (t.child.flags |= 8192), fn(t, t.updateQueue), El(t), null;
      case 4:
        return Vt(), l === null && xf(t.stateNode.containerInfo), El(t), null;
      case 10:
        return xt(t.type), El(t), null;
      case 19:
        if (N(xl), e = t.memoizedState, e === null) return El(t), null;
        if (u = (t.flags & 128) !== 0, n = e.rendering, n === null)
          if (u) $u(e, !1);
          else {
            if (zl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = an(l), n !== null) {
                  for (t.flags |= 128, $u(e, !1), l = n.updateQueue, t.updateQueue = l, fn(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null; )
                    ss(a, l), a = a.sibling;
                  return U(
                    xl,
                    xl.current & 1 | 2
                  ), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null && _t() > rn && (t.flags |= 128, u = !0, $u(e, !1), t.lanes = 4194304);
          }
        else {
          if (!u)
            if (l = an(n), l !== null) {
              if (t.flags |= 128, u = !0, l = l.updateQueue, t.updateQueue = l, fn(t, l), $u(e, !0), e.tail === null && e.tailMode === "hidden" && !n.alternate && !ul)
                return El(t), null;
            } else
              2 * _t() - e.renderingStartTime > rn && a !== 536870912 && (t.flags |= 128, u = !0, $u(e, !1), t.lanes = 4194304);
          e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n);
        }
        return e.tail !== null ? (t = e.tail, e.rendering = t, e.tail = t.sibling, e.renderingStartTime = _t(), t.sibling = null, l = xl.current, U(xl, u ? l & 1 | 2 : l & 1), t) : (El(t), null);
      case 22:
      case 23:
        return Yt(t), Bc(), u = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== u && (t.flags |= 8192) : u && (t.flags |= 8192), u ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (El(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : El(t), a = t.updateQueue, a !== null && fn(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), u = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool), u !== a && (t.flags |= 2048), l !== null && N(Ra), null;
      case 24:
        return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), xt(ql), El(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function J0(l, t) {
    switch (Ec(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return xt(ql), Vt(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Se(t), null;
      case 13:
        if (Yt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          xu();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return N(xl), null;
      case 4:
        return Vt(), null;
      case 10:
        return xt(t.type), null;
      case 22:
      case 23:
        return Yt(t), Bc(), l !== null && N(Ra), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return xt(ql), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function jo(l, t) {
    switch (Ec(t), t.tag) {
      case 3:
        xt(ql), Vt();
        break;
      case 26:
      case 27:
      case 5:
        Se(t);
        break;
      case 4:
        Vt();
        break;
      case 13:
        Yt(t);
        break;
      case 19:
        N(xl);
        break;
      case 10:
        xt(t.type);
        break;
      case 22:
      case 23:
        Yt(t), Bc(), l !== null && N(Ra);
        break;
      case 24:
        xt(ql);
    }
  }
  function Fu(l, t) {
    try {
      var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var e = u.next;
        a = e;
        do {
          if ((a.tag & l) === l) {
            u = void 0;
            var n = a.create, c = a.inst;
            u = n(), c.destroy = u;
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (f) {
      dl(t, t.return, f);
    }
  }
  function la(l, t, a) {
    try {
      var u = t.updateQueue, e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            var c = u.inst, f = c.destroy;
            if (f !== void 0) {
              c.destroy = void 0, e = t;
              var i = a, h = f;
              try {
                h();
              } catch (b) {
                dl(
                  e,
                  i,
                  b
                );
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (b) {
      dl(t, t.return, b);
    }
  }
  function Co(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        zs(t, a);
      } catch (u) {
        dl(l, l.return, u);
      }
    }
  }
  function Go(l, t, a) {
    a.props = pa(
      l.type,
      l.memoizedProps
    ), a.state = l.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (u) {
      dl(l, t, u);
    }
  }
  function Iu(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var u = l.stateNode;
            break;
          case 30:
            u = l.stateNode;
            break;
          default:
            u = l.stateNode;
        }
        typeof a == "function" ? l.refCleanup = a(u) : a.current = u;
      }
    } catch (e) {
      dl(l, t, e);
    }
  }
  function Ot(l, t) {
    var a = l.ref, u = l.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (e) {
          dl(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (e) {
          dl(l, t, e);
        }
      else a.current = null;
  }
  function Xo(l) {
    var t = l.type, a = l.memoizedProps, u = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break l;
        case "img":
          a.src ? u.src = a.src : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (e) {
      dl(l, l.return, e);
    }
  }
  function of(l, t, a) {
    try {
      var u = l.stateNode;
      vv(u, l.type, a, t), u[Wl] = t;
    } catch (e) {
      dl(l, l.return, e);
    }
  }
  function Qo(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && ia(l.type) || l.tag === 4;
  }
  function rf(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Qo(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && ia(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function df(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      l = l.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(l), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Tn));
    else if (u !== 4 && (u === 27 && ia(l.type) && (a = l.stateNode, t = null), l = l.child, l !== null))
      for (df(l, t, a), l = l.sibling; l !== null; )
        df(l, t, a), l = l.sibling;
  }
  function sn(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      l = l.stateNode, t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (u !== 4 && (u === 27 && ia(l.type) && (a = l.stateNode), l = l.child, l !== null))
      for (sn(l, t, a), l = l.sibling; l !== null; )
        sn(l, t, a), l = l.sibling;
  }
  function Zo(l) {
    var t = l.stateNode, a = l.memoizedProps;
    try {
      for (var u = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Ql(t, u, a), t[Vl] = l, t[Wl] = a;
    } catch (n) {
      dl(l, l.return, n);
    }
  }
  var Gt = !1, Dl = !1, vf = !1, Vo = typeof WeakSet == "function" ? WeakSet : Set, jl = null;
  function w0(l, t) {
    if (l = l.containerInfo, jf = Mn, l = Pi(l), oc(l)) {
      if ("selectionStart" in l)
        var a = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          a = (a = l.ownerDocument) && a.defaultView || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var e = u.anchorOffset, n = u.focusNode;
            u = u.focusOffset;
            try {
              a.nodeType, n.nodeType;
            } catch {
              a = null;
              break l;
            }
            var c = 0, f = -1, i = -1, h = 0, b = 0, _ = l, y = null;
            t: for (; ; ) {
              for (var m; _ !== a || e !== 0 && _.nodeType !== 3 || (f = c + e), _ !== n || u !== 0 && _.nodeType !== 3 || (i = c + u), _.nodeType === 3 && (c += _.nodeValue.length), (m = _.firstChild) !== null; )
                y = _, _ = m;
              for (; ; ) {
                if (_ === l) break t;
                if (y === a && ++h === e && (f = c), y === n && ++b === u && (i = c), (m = _.nextSibling) !== null) break;
                _ = y, y = _.parentNode;
              }
              _ = m;
            }
            a = f === -1 || i === -1 ? null : { start: f, end: i };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Cf = { focusedElem: l, selectionRange: a }, Mn = !1, jl = t; jl !== null; )
      if (t = jl, l = t.child, (t.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = t, jl = l;
      else
        for (; jl !== null; ) {
          switch (t = jl, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, a = t, e = n.memoizedProps, n = n.memoizedState, u = a.stateNode;
                try {
                  var L = pa(
                    a.type,
                    e,
                    a.elementType === a.type
                  );
                  l = u.getSnapshotBeforeUpdate(
                    L,
                    n
                  ), u.__reactInternalSnapshotBeforeUpdate = l;
                } catch (X) {
                  dl(
                    a,
                    a.return,
                    X
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, a = l.nodeType, a === 9)
                  Qf(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Qf(l);
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
            l.return = t.return, jl = l;
            break;
          }
          jl = t.return;
        }
  }
  function Lo(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        ta(l, a), u & 4 && Fu(5, a);
        break;
      case 1:
        if (ta(l, a), u & 4)
          if (l = a.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (c) {
              dl(a, a.return, c);
            }
          else {
            var e = pa(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                e,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (c) {
              dl(
                a,
                a.return,
                c
              );
            }
          }
        u & 64 && Co(a), u & 512 && Iu(a, a.return);
        break;
      case 3:
        if (ta(l, a), u & 64 && (l = a.updateQueue, l !== null)) {
          if (t = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            zs(l, t);
          } catch (c) {
            dl(a, a.return, c);
          }
        }
        break;
      case 27:
        t === null && u & 4 && Zo(a);
      case 26:
      case 5:
        ta(l, a), t === null && u & 4 && Xo(a), u & 512 && Iu(a, a.return);
        break;
      case 12:
        ta(l, a);
        break;
      case 13:
        ta(l, a), u & 4 && wo(l, a), u & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = av.bind(
          null,
          a
        ), Tv(l, a))));
        break;
      case 22:
        if (u = a.memoizedState !== null || Gt, !u) {
          t = t !== null && t.memoizedState !== null || Dl, e = Gt;
          var n = Dl;
          Gt = u, (Dl = t) && !n ? aa(
            l,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : ta(l, a), Gt = e, Dl = n;
        }
        break;
      case 30:
        break;
      default:
        ta(l, a);
    }
  }
  function Ko(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, Ko(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Kn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var Tl = null, Il = !1;
  function Xt(l, t, a) {
    for (a = a.child; a !== null; )
      Jo(l, t, a), a = a.sibling;
  }
  function Jo(l, t, a) {
    if (tt && typeof tt.onCommitFiberUnmount == "function")
      try {
        tt.onCommitFiberUnmount(bu, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        Dl || Ot(a, t), Xt(
          l,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Dl || Ot(a, t);
        var u = Tl, e = Il;
        ia(a.type) && (Tl = a.stateNode, Il = !1), Xt(
          l,
          t,
          a
        ), fe(a.stateNode), Tl = u, Il = e;
        break;
      case 5:
        Dl || Ot(a, t);
      case 6:
        if (u = Tl, e = Il, Tl = null, Xt(
          l,
          t,
          a
        ), Tl = u, Il = e, Tl !== null)
          if (Il)
            try {
              (Tl.nodeType === 9 ? Tl.body : Tl.nodeName === "HTML" ? Tl.ownerDocument.body : Tl).removeChild(a.stateNode);
            } catch (n) {
              dl(
                a,
                t,
                n
              );
            }
          else
            try {
              Tl.removeChild(a.stateNode);
            } catch (n) {
              dl(
                a,
                t,
                n
              );
            }
        break;
      case 18:
        Tl !== null && (Il ? (l = Tl, xr(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          a.stateNode
        ), ye(l)) : xr(Tl, a.stateNode));
        break;
      case 4:
        u = Tl, e = Il, Tl = a.stateNode.containerInfo, Il = !0, Xt(
          l,
          t,
          a
        ), Tl = u, Il = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Dl || la(2, a, t), Dl || la(4, a, t), Xt(
          l,
          t,
          a
        );
        break;
      case 1:
        Dl || (Ot(a, t), u = a.stateNode, typeof u.componentWillUnmount == "function" && Go(
          a,
          t,
          u
        )), Xt(
          l,
          t,
          a
        );
        break;
      case 21:
        Xt(
          l,
          t,
          a
        );
        break;
      case 22:
        Dl = (u = Dl) || a.memoizedState !== null, Xt(
          l,
          t,
          a
        ), Dl = u;
        break;
      default:
        Xt(
          l,
          t,
          a
        );
    }
  }
  function wo(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        ye(l);
      } catch (a) {
        dl(t, t.return, a);
      }
  }
  function k0(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Vo()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Vo()), t;
      default:
        throw Error(r(435, l.tag));
    }
  }
  function hf(l, t) {
    var a = k0(l);
    t.forEach(function(u) {
      var e = uv.bind(null, l, u);
      a.has(u) || (a.add(u), u.then(e, e));
    });
  }
  function nt(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var e = a[u], n = l, c = t, f = c;
        l: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (ia(f.type)) {
                Tl = f.stateNode, Il = !1;
                break l;
              }
              break;
            case 5:
              Tl = f.stateNode, Il = !1;
              break l;
            case 3:
            case 4:
              Tl = f.stateNode.containerInfo, Il = !0;
              break l;
          }
          f = f.return;
        }
        if (Tl === null) throw Error(r(160));
        Jo(n, c, e), Tl = null, Il = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        ko(t, l), t = t.sibling;
  }
  var Tt = null;
  function ko(l, t) {
    var a = l.alternate, u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        nt(t, l), ct(l), u & 4 && (la(3, l, l.return), Fu(3, l), la(5, l, l.return));
        break;
      case 1:
        nt(t, l), ct(l), u & 512 && (Dl || a === null || Ot(a, a.return)), u & 64 && Gt && (l = l.updateQueue, l !== null && (u = l.callbacks, u !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? u : a.concat(u))));
        break;
      case 26:
        var e = Tt;
        if (nt(t, l), ct(l), u & 512 && (Dl || a === null || Ot(a, a.return)), u & 4) {
          var n = a !== null ? a.memoizedState : null;
          if (u = l.memoizedState, a === null)
            if (u === null)
              if (l.stateNode === null) {
                l: {
                  u = l.type, a = l.memoizedProps, e = e.ownerDocument || e;
                  t: switch (u) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[_u] || n[Vl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(u), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), Ql(n, u, a), n[Vl] = l, Bl(n), u = n;
                      break l;
                    case "link":
                      var c = Zr(
                        "link",
                        "href",
                        e
                      ).get(u + (a.href || ""));
                      if (c) {
                        for (var f = 0; f < c.length; f++)
                          if (n = c[f], n.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            c.splice(f, 1);
                            break t;
                          }
                      }
                      n = e.createElement(u), Ql(n, u, a), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (c = Zr(
                        "meta",
                        "content",
                        e
                      ).get(u + (a.content || ""))) {
                        for (f = 0; f < c.length; f++)
                          if (n = c[f], n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            c.splice(f, 1);
                            break t;
                          }
                      }
                      n = e.createElement(u), Ql(n, u, a), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(r(468, u));
                  }
                  n[Vl] = l, Bl(n), u = n;
                }
                l.stateNode = u;
              } else
                Vr(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Qr(
                e,
                u,
                l.memoizedProps
              );
          else
            n !== u ? (n === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : n.count--, u === null ? Vr(
              e,
              l.type,
              l.stateNode
            ) : Qr(
              e,
              u,
              l.memoizedProps
            )) : u === null && l.stateNode !== null && of(
              l,
              l.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        nt(t, l), ct(l), u & 512 && (Dl || a === null || Ot(a, a.return)), a !== null && u & 4 && of(
          l,
          l.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (nt(t, l), ct(l), u & 512 && (Dl || a === null || Ot(a, a.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            Qa(e, "");
          } catch (m) {
            dl(l, l.return, m);
          }
        }
        u & 4 && l.stateNode != null && (e = l.memoizedProps, of(
          l,
          e,
          a !== null ? a.memoizedProps : e
        )), u & 1024 && (vf = !0);
        break;
      case 6:
        if (nt(t, l), ct(l), u & 4) {
          if (l.stateNode === null)
            throw Error(r(162));
          u = l.memoizedProps, a = l.stateNode;
          try {
            a.nodeValue = u;
          } catch (m) {
            dl(l, l.return, m);
          }
        }
        break;
      case 3:
        if (zn = null, e = Tt, Tt = _n(t.containerInfo), nt(t, l), Tt = e, ct(l), u & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            ye(t.containerInfo);
          } catch (m) {
            dl(l, l.return, m);
          }
        vf && (vf = !1, Wo(l));
        break;
      case 4:
        u = Tt, Tt = _n(
          l.stateNode.containerInfo
        ), nt(t, l), ct(l), Tt = u;
        break;
      case 12:
        nt(t, l), ct(l);
        break;
      case 13:
        nt(t, l), ct(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Tf = _t()), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, hf(l, u)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = a !== null && a.memoizedState !== null, h = Gt, b = Dl;
        if (Gt = h || e, Dl = b || i, nt(t, l), Dl = b, Gt = h, ct(l), u & 8192)
          l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (a === null || i || Gt || Dl || Na(l)), a = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                i = a = t;
                try {
                  if (n = i.stateNode, e)
                    c = n.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    f = i.stateNode;
                    var _ = i.memoizedProps.style, y = _ != null && _.hasOwnProperty("display") ? _.display : null;
                    f.style.display = y == null || typeof y == "boolean" ? "" : ("" + y).trim();
                  }
                } catch (m) {
                  dl(i, i.return, m);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (m) {
                  dl(i, i.return, m);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              a === t && (a = null), t = t.return;
            }
            a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
          }
        u & 4 && (u = l.updateQueue, u !== null && (a = u.retryQueue, a !== null && (u.retryQueue = null, hf(l, a))));
        break;
      case 19:
        nt(t, l), ct(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, hf(l, u)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        nt(t, l), ct(l);
    }
  }
  function ct(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, u = l.return; u !== null; ) {
          if (Qo(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(r(160));
        switch (a.tag) {
          case 27:
            var e = a.stateNode, n = rf(l);
            sn(l, n, e);
            break;
          case 5:
            var c = a.stateNode;
            a.flags & 32 && (Qa(c, ""), a.flags &= -33);
            var f = rf(l);
            sn(l, f, c);
            break;
          case 3:
          case 4:
            var i = a.stateNode.containerInfo, h = rf(l);
            df(
              l,
              h,
              i
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (b) {
        dl(l, l.return, b);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Wo(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Wo(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function ta(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Lo(l, t.alternate, t), t = t.sibling;
  }
  function Na(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          la(4, t, t.return), Na(t);
          break;
        case 1:
          Ot(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Go(
            t,
            t.return,
            a
          ), Na(t);
          break;
        case 27:
          fe(t.stateNode);
        case 26:
        case 5:
          Ot(t, t.return), Na(t);
          break;
        case 22:
          t.memoizedState === null && Na(t);
          break;
        case 30:
          Na(t);
          break;
        default:
          Na(t);
      }
      l = l.sibling;
    }
  }
  function aa(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate, e = l, n = t, c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          aa(
            e,
            n,
            a
          ), Fu(4, n);
          break;
        case 1:
          if (aa(
            e,
            n,
            a
          ), u = n, e = u.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (h) {
              dl(u, u.return, h);
            }
          if (u = n, e = u.updateQueue, e !== null) {
            var f = u.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  As(i[e], f);
            } catch (h) {
              dl(u, u.return, h);
            }
          }
          a && c & 64 && Co(n), Iu(n, n.return);
          break;
        case 27:
          Zo(n);
        case 26:
        case 5:
          aa(
            e,
            n,
            a
          ), a && u === null && c & 4 && Xo(n), Iu(n, n.return);
          break;
        case 12:
          aa(
            e,
            n,
            a
          );
          break;
        case 13:
          aa(
            e,
            n,
            a
          ), a && c & 4 && wo(e, n);
          break;
        case 22:
          n.memoizedState === null && aa(
            e,
            n,
            a
          ), Iu(n, n.return);
          break;
        case 30:
          break;
        default:
          aa(
            e,
            n,
            a
          );
      }
      t = t.sibling;
    }
  }
  function yf(l, t) {
    var a = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && ju(a));
  }
  function mf(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && ju(l));
  }
  function Dt(l, t, a, u) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        $o(
          l,
          t,
          a,
          u
        ), t = t.sibling;
  }
  function $o(l, t, a, u) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Dt(
          l,
          t,
          a,
          u
        ), e & 2048 && Fu(9, t);
        break;
      case 1:
        Dt(
          l,
          t,
          a,
          u
        );
        break;
      case 3:
        Dt(
          l,
          t,
          a,
          u
        ), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && ju(l)));
        break;
      case 12:
        if (e & 2048) {
          Dt(
            l,
            t,
            a,
            u
          ), l = t.stateNode;
          try {
            var n = t.memoizedProps, c = n.id, f = n.onPostCommit;
            typeof f == "function" && f(
              c,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (i) {
            dl(t, t.return, i);
          }
        } else
          Dt(
            l,
            t,
            a,
            u
          );
        break;
      case 13:
        Dt(
          l,
          t,
          a,
          u
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, c = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? Dt(
          l,
          t,
          a,
          u
        ) : Pu(l, t) : n._visibility & 2 ? Dt(
          l,
          t,
          a,
          u
        ) : (n._visibility |= 2, cu(
          l,
          t,
          a,
          u,
          (t.subtreeFlags & 10256) !== 0
        )), e & 2048 && yf(c, t);
        break;
      case 24:
        Dt(
          l,
          t,
          a,
          u
        ), e & 2048 && mf(t.alternate, t);
        break;
      default:
        Dt(
          l,
          t,
          a,
          u
        );
    }
  }
  function cu(l, t, a, u, e) {
    for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = l, c = t, f = a, i = u, h = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          cu(
            n,
            c,
            f,
            i,
            e
          ), Fu(8, c);
          break;
        case 23:
          break;
        case 22:
          var b = c.stateNode;
          c.memoizedState !== null ? b._visibility & 2 ? cu(
            n,
            c,
            f,
            i,
            e
          ) : Pu(
            n,
            c
          ) : (b._visibility |= 2, cu(
            n,
            c,
            f,
            i,
            e
          )), e && h & 2048 && yf(
            c.alternate,
            c
          );
          break;
        case 24:
          cu(
            n,
            c,
            f,
            i,
            e
          ), e && h & 2048 && mf(c.alternate, c);
          break;
        default:
          cu(
            n,
            c,
            f,
            i,
            e
          );
      }
      t = t.sibling;
    }
  }
  function Pu(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l, u = t, e = u.flags;
        switch (u.tag) {
          case 22:
            Pu(a, u), e & 2048 && yf(
              u.alternate,
              u
            );
            break;
          case 24:
            Pu(a, u), e & 2048 && mf(u.alternate, u);
            break;
          default:
            Pu(a, u);
        }
        t = t.sibling;
      }
  }
  var le = 8192;
  function fu(l) {
    if (l.subtreeFlags & le)
      for (l = l.child; l !== null; )
        Fo(l), l = l.sibling;
  }
  function Fo(l) {
    switch (l.tag) {
      case 26:
        fu(l), l.flags & le && l.memoizedState !== null && qv(
          Tt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        fu(l);
        break;
      case 3:
      case 4:
        var t = Tt;
        Tt = _n(l.stateNode.containerInfo), fu(l), Tt = t;
        break;
      case 22:
        l.memoizedState === null && (t = l.alternate, t !== null && t.memoizedState !== null ? (t = le, le = 16777216, fu(l), le = t) : fu(l));
        break;
      default:
        fu(l);
    }
  }
  function Io(l) {
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
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          jl = u, lr(
            u,
            l
          );
        }
      Io(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Po(l), l = l.sibling;
  }
  function Po(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        te(l), l.flags & 2048 && la(9, l, l.return);
        break;
      case 3:
        te(l);
        break;
      case 12:
        te(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, on(l)) : te(l);
        break;
      default:
        te(l);
    }
  }
  function on(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          jl = u, lr(
            u,
            l
          );
        }
      Io(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          la(8, t, t.return), on(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, on(t));
          break;
        default:
          on(t);
      }
      l = l.sibling;
    }
  }
  function lr(l, t) {
    for (; jl !== null; ) {
      var a = jl;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          la(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          ju(a.memoizedState.cache);
      }
      if (u = a.child, u !== null) u.return = a, jl = u;
      else
        l: for (a = l; jl !== null; ) {
          u = jl;
          var e = u.sibling, n = u.return;
          if (Ko(u), u === a) {
            jl = null;
            break l;
          }
          if (e !== null) {
            e.return = n, jl = e;
            break l;
          }
          jl = n;
        }
    }
  }
  var W0 = {
    getCacheForType: function(l) {
      var t = Ll(ql), a = t.data.get(l);
      return a === void 0 && (a = l(), t.data.set(l, a)), a;
    }
  }, $0 = typeof WeakMap == "function" ? WeakMap : Map, el = 0, yl = null, $ = null, ll = 0, nl = 0, ft = null, ua = !1, iu = !1, gf = !1, Qt = 0, zl = 0, ea = 0, Ha = 0, Sf = 0, gt = 0, su = 0, ae = null, Pl = null, bf = !1, Tf = 0, rn = 1 / 0, dn = null, na = null, Xl = 0, ca = null, ou = null, ru = 0, Ef = 0, _f = null, tr = null, ue = 0, Af = null;
  function it() {
    if ((el & 2) !== 0 && ll !== 0)
      return ll & -ll;
    if (T.T !== null) {
      var l = Ia;
      return l !== 0 ? l : pf();
    }
    return mi();
  }
  function ar() {
    gt === 0 && (gt = (ll & 536870912) === 0 || ul ? di() : 536870912);
    var l = mt.current;
    return l !== null && (l.flags |= 32), gt;
  }
  function st(l, t, a) {
    (l === yl && (nl === 2 || nl === 9) || l.cancelPendingCommit !== null) && (du(l, 0), fa(
      l,
      ll,
      gt,
      !1
    )), Eu(l, a), ((el & 2) === 0 || l !== yl) && (l === yl && ((el & 2) === 0 && (Ha |= a), zl === 4 && fa(
      l,
      ll,
      gt,
      !1
    )), Mt(l));
  }
  function ur(l, t, a) {
    if ((el & 6) !== 0) throw Error(r(327));
    var u = !a && (t & 124) === 0 && (t & l.expiredLanes) === 0 || Tu(l, t), e = u ? P0(l, t) : Df(l, t, !0), n = u;
    do {
      if (e === 0) {
        iu && !u && fa(l, t, 0, !1);
        break;
      } else {
        if (a = l.current.alternate, n && !F0(a)) {
          e = Df(l, t, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var c = 0;
          else
            c = l.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            t = c;
            l: {
              var f = l;
              e = ae;
              var i = f.current.memoizedState.isDehydrated;
              if (i && (du(f, c).flags |= 256), c = Df(
                f,
                c,
                !1
              ), c !== 2) {
                if (gf && !i) {
                  f.errorRecoveryDisabledLanes |= n, Ha |= n, e = 4;
                  break l;
                }
                n = Pl, Pl = e, n !== null && (Pl === null ? Pl = n : Pl.push.apply(
                  Pl,
                  n
                ));
              }
              e = c;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          du(l, 0), fa(l, t, 0, !0);
          break;
        }
        l: {
          switch (u = l, n = e, n) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              fa(
                u,
                t,
                gt,
                !ua
              );
              break l;
            case 2:
              Pl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && (e = Tf + 300 - _t(), 10 < e)) {
            if (fa(
              u,
              t,
              gt,
              !ua
            ), _e(u, 0, !0) !== 0) break l;
            u.timeoutHandle = Hr(
              er.bind(
                null,
                u,
                a,
                Pl,
                dn,
                bf,
                t,
                gt,
                Ha,
                su,
                ua,
                n,
                2,
                -0,
                0
              ),
              e
            );
            break l;
          }
          er(
            u,
            a,
            Pl,
            dn,
            bf,
            t,
            gt,
            Ha,
            su,
            ua,
            n,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Mt(l);
  }
  function er(l, t, a, u, e, n, c, f, i, h, b, _, y, m) {
    if (l.timeoutHandle = -1, _ = t.subtreeFlags, (_ & 8192 || (_ & 16785408) === 16785408) && (oe = { stylesheets: null, count: 0, unsuspend: Hv }, Fo(t), _ = xv(), _ !== null)) {
      l.cancelPendingCommit = _(
        rr.bind(
          null,
          l,
          t,
          n,
          a,
          u,
          e,
          c,
          f,
          i,
          b,
          1,
          y,
          m
        )
      ), fa(l, n, c, !h);
      return;
    }
    rr(
      l,
      t,
      n,
      a,
      u,
      e,
      c,
      f,
      i
    );
  }
  function F0(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var u = 0; u < a.length; u++) {
          var e = a[u], n = e.getSnapshot;
          e = e.value;
          try {
            if (!ut(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null)
        a.return = t, t = a;
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
  function fa(l, t, a, u) {
    t &= ~Sf, t &= ~Ha, l.suspendedLanes |= t, l.pingedLanes &= ~t, u && (l.warmLanes |= t), u = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - at(e), c = 1 << n;
      u[n] = -1, e &= ~c;
    }
    a !== 0 && hi(l, a, t);
  }
  function vn() {
    return (el & 6) === 0 ? (ee(0), !1) : !0;
  }
  function zf() {
    if ($ !== null) {
      if (nl === 0)
        var l = $.return;
      else
        l = $, qt = Da = null, Xc(l), eu = null, ku = 0, l = $;
      for (; l !== null; )
        jo(l.alternate, l), l = l.return;
      $ = null;
    }
  }
  function du(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && (l.timeoutHandle = -1, yv(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), zf(), yl = l, $ = a = pt(l.current, null), ll = t, nl = 0, ft = null, ua = !1, iu = Tu(l, t), gf = !1, su = gt = Sf = Ha = ea = zl = 0, Pl = ae = null, bf = !1, (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var e = 31 - at(u), n = 1 << e;
        t |= l[e], u &= ~n;
      }
    return Qt = t, xe(), a;
  }
  function nr(l, t) {
    k = null, T.H = Pe, t === Gu || t === Ve ? (t = Es(), nl = 3) : t === Ss ? (t = Es(), nl = 4) : nl = t === Ao ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ft = t, $ === null && (zl = 1, en(
      l,
      dt(t, l.current)
    ));
  }
  function cr() {
    var l = T.H;
    return T.H = Pe, l === null ? Pe : l;
  }
  function fr() {
    var l = T.A;
    return T.A = W0, l;
  }
  function Of() {
    zl = 4, ua || (ll & 4194048) !== ll && mt.current !== null || (iu = !0), (ea & 134217727) === 0 && (Ha & 134217727) === 0 || yl === null || fa(
      yl,
      ll,
      gt,
      !1
    );
  }
  function Df(l, t, a) {
    var u = el;
    el |= 2;
    var e = cr(), n = fr();
    (yl !== l || ll !== t) && (dn = null, du(l, t)), t = !1;
    var c = zl;
    l: do
      try {
        if (nl !== 0 && $ !== null) {
          var f = $, i = ft;
          switch (nl) {
            case 8:
              zf(), c = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              mt.current === null && (t = !0);
              var h = nl;
              if (nl = 0, ft = null, vu(l, f, i, h), a && iu) {
                c = 0;
                break l;
              }
              break;
            default:
              h = nl, nl = 0, ft = null, vu(l, f, i, h);
          }
        }
        I0(), c = zl;
        break;
      } catch (b) {
        nr(l, b);
      }
    while (!0);
    return t && l.shellSuspendCounter++, qt = Da = null, el = u, T.H = e, T.A = n, $ === null && (yl = null, ll = 0, xe()), c;
  }
  function I0() {
    for (; $ !== null; ) ir($);
  }
  function P0(l, t) {
    var a = el;
    el |= 2;
    var u = cr(), e = fr();
    yl !== l || ll !== t ? (dn = null, rn = _t() + 500, du(l, t)) : iu = Tu(
      l,
      t
    );
    l: do
      try {
        if (nl !== 0 && $ !== null) {
          t = $;
          var n = ft;
          t: switch (nl) {
            case 1:
              nl = 0, ft = null, vu(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (bs(n)) {
                nl = 0, ft = null, sr(t);
                break;
              }
              t = function() {
                nl !== 2 && nl !== 9 || yl !== l || (nl = 7), Mt(l);
              }, n.then(t, t);
              break l;
            case 3:
              nl = 7;
              break l;
            case 4:
              nl = 5;
              break l;
            case 7:
              bs(n) ? (nl = 0, ft = null, sr(t)) : (nl = 0, ft = null, vu(l, t, n, 7));
              break;
            case 5:
              var c = null;
              switch ($.tag) {
                case 26:
                  c = $.memoizedState;
                case 5:
                case 27:
                  var f = $;
                  if (!c || Lr(c)) {
                    nl = 0, ft = null;
                    var i = f.sibling;
                    if (i !== null) $ = i;
                    else {
                      var h = f.return;
                      h !== null ? ($ = h, hn(h)) : $ = null;
                    }
                    break t;
                  }
              }
              nl = 0, ft = null, vu(l, t, n, 5);
              break;
            case 6:
              nl = 0, ft = null, vu(l, t, n, 6);
              break;
            case 8:
              zf(), zl = 6;
              break l;
            default:
              throw Error(r(462));
          }
        }
        lv();
        break;
      } catch (b) {
        nr(l, b);
      }
    while (!0);
    return qt = Da = null, T.H = u, T.A = e, el = a, $ !== null ? 0 : (yl = null, ll = 0, xe(), zl);
  }
  function lv() {
    for (; $ !== null && !_d(); )
      ir($);
  }
  function ir(l) {
    var t = Bo(l.alternate, l, Qt);
    l.memoizedProps = l.pendingProps, t === null ? hn(l) : $ = t;
  }
  function sr(l) {
    var t = l, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Uo(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          ll
        );
        break;
      case 11:
        t = Uo(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ll
        );
        break;
      case 5:
        Xc(t);
      default:
        jo(a, t), t = $ = ss(t, Qt), t = Bo(a, t, Qt);
    }
    l.memoizedProps = l.pendingProps, t === null ? hn(l) : $ = t;
  }
  function vu(l, t, a, u) {
    qt = Da = null, Xc(t), eu = null, ku = 0;
    var e = t.return;
    try {
      if (V0(
        l,
        e,
        t,
        a,
        ll
      )) {
        zl = 1, en(
          l,
          dt(a, l.current)
        ), $ = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw $ = e, n;
      zl = 1, en(
        l,
        dt(a, l.current)
      ), $ = null;
      return;
    }
    t.flags & 32768 ? (ul || u === 1 ? l = !0 : iu || (ll & 536870912) !== 0 ? l = !1 : (ua = l = !0, (u === 2 || u === 9 || u === 3 || u === 6) && (u = mt.current, u !== null && u.tag === 13 && (u.flags |= 16384))), or(t, l)) : hn(t);
  }
  function hn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        or(
          t,
          ua
        );
        return;
      }
      l = t.return;
      var a = K0(
        t.alternate,
        t,
        Qt
      );
      if (a !== null) {
        $ = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        $ = t;
        return;
      }
      $ = t = l;
    } while (t !== null);
    zl === 0 && (zl = 5);
  }
  function or(l, t) {
    do {
      var a = J0(l.alternate, l);
      if (a !== null) {
        a.flags &= 32767, $ = a;
        return;
      }
      if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (l = l.sibling, l !== null)) {
        $ = l;
        return;
      }
      $ = l = a;
    } while (l !== null);
    zl = 6, $ = null;
  }
  function rr(l, t, a, u, e, n, c, f, i) {
    l.cancelPendingCommit = null;
    do
      yn();
    while (Xl !== 0);
    if ((el & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === l.current) throw Error(r(177));
      if (n = t.lanes | t.childLanes, n |= yc, Hd(
        l,
        a,
        n,
        c,
        f,
        i
      ), l === yl && ($ = yl = null, ll = 0), ou = t, ca = l, ru = a, Ef = n, _f = e, tr = u, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, ev(be, function() {
        return mr(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), u = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || u) {
        u = T.T, T.T = null, e = p.p, p.p = 2, c = el, el |= 4;
        try {
          w0(l, t, a);
        } finally {
          el = c, p.p = e, T.T = u;
        }
      }
      Xl = 1, dr(), vr(), hr();
    }
  }
  function dr() {
    if (Xl === 1) {
      Xl = 0;
      var l = ca, t = ou, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = T.T, T.T = null;
        var u = p.p;
        p.p = 2;
        var e = el;
        el |= 4;
        try {
          ko(t, l);
          var n = Cf, c = Pi(l.containerInfo), f = n.focusedElem, i = n.selectionRange;
          if (c !== f && f && f.ownerDocument && Ii(
            f.ownerDocument.documentElement,
            f
          )) {
            if (i !== null && oc(f)) {
              var h = i.start, b = i.end;
              if (b === void 0 && (b = h), "selectionStart" in f)
                f.selectionStart = h, f.selectionEnd = Math.min(
                  b,
                  f.value.length
                );
              else {
                var _ = f.ownerDocument || document, y = _ && _.defaultView || window;
                if (y.getSelection) {
                  var m = y.getSelection(), L = f.textContent.length, X = Math.min(i.start, L), sl = i.end === void 0 ? X : Math.min(i.end, L);
                  !m.extend && X > sl && (c = sl, sl = X, X = c);
                  var d = Fi(
                    f,
                    X
                  ), o = Fi(
                    f,
                    sl
                  );
                  if (d && o && (m.rangeCount !== 1 || m.anchorNode !== d.node || m.anchorOffset !== d.offset || m.focusNode !== o.node || m.focusOffset !== o.offset)) {
                    var v = _.createRange();
                    v.setStart(d.node, d.offset), m.removeAllRanges(), X > sl ? (m.addRange(v), m.extend(o.node, o.offset)) : (v.setEnd(o.node, o.offset), m.addRange(v));
                  }
                }
              }
            }
            for (_ = [], m = f; m = m.parentNode; )
              m.nodeType === 1 && _.push({
                element: m,
                left: m.scrollLeft,
                top: m.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < _.length; f++) {
              var E = _[f];
              E.element.scrollLeft = E.left, E.element.scrollTop = E.top;
            }
          }
          Mn = !!jf, Cf = jf = null;
        } finally {
          el = e, p.p = u, T.T = a;
        }
      }
      l.current = t, Xl = 2;
    }
  }
  function vr() {
    if (Xl === 2) {
      Xl = 0;
      var l = ca, t = ou, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = T.T, T.T = null;
        var u = p.p;
        p.p = 2;
        var e = el;
        el |= 4;
        try {
          Lo(l, t.alternate, t);
        } finally {
          el = e, p.p = u, T.T = a;
        }
      }
      Xl = 3;
    }
  }
  function hr() {
    if (Xl === 4 || Xl === 3) {
      Xl = 0, Ad();
      var l = ca, t = ou, a = ru, u = tr;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Xl = 5 : (Xl = 0, ou = ca = null, yr(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (na = null), Vn(a), t = t.stateNode, tt && typeof tt.onCommitFiberRoot == "function")
        try {
          tt.onCommitFiberRoot(
            bu,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (u !== null) {
        t = T.T, e = p.p, p.p = 2, T.T = null;
        try {
          for (var n = l.onRecoverableError, c = 0; c < u.length; c++) {
            var f = u[c];
            n(f.value, {
              componentStack: f.stack
            });
          }
        } finally {
          T.T = t, p.p = e;
        }
      }
      (ru & 3) !== 0 && yn(), Mt(l), e = l.pendingLanes, (a & 4194090) !== 0 && (e & 42) !== 0 ? l === Af ? ue++ : (ue = 0, Af = l) : ue = 0, ee(0);
    }
  }
  function yr(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, ju(t)));
  }
  function yn(l) {
    return dr(), vr(), hr(), mr();
  }
  function mr() {
    if (Xl !== 5) return !1;
    var l = ca, t = Ef;
    Ef = 0;
    var a = Vn(ru), u = T.T, e = p.p;
    try {
      p.p = 32 > a ? 32 : a, T.T = null, a = _f, _f = null;
      var n = ca, c = ru;
      if (Xl = 0, ou = ca = null, ru = 0, (el & 6) !== 0) throw Error(r(331));
      var f = el;
      if (el |= 4, Po(n.current), $o(
        n,
        n.current,
        c,
        a
      ), el = f, ee(0, !1), tt && typeof tt.onPostCommitFiberRoot == "function")
        try {
          tt.onPostCommitFiberRoot(bu, n);
        } catch {
        }
      return !0;
    } finally {
      p.p = e, T.T = u, yr(l, t);
    }
  }
  function gr(l, t, a) {
    t = dt(a, t), t = lf(l.stateNode, t, 2), l = $t(l, t, 2), l !== null && (Eu(l, 2), Mt(l));
  }
  function dl(l, t, a) {
    if (l.tag === 3)
      gr(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          gr(
            t,
            l,
            a
          );
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (na === null || !na.has(u))) {
            l = dt(a, l), a = Eo(2), u = $t(t, a, 2), u !== null && (_o(
              a,
              u,
              t,
              l
            ), Eu(u, 2), Mt(u));
            break;
          }
        }
        t = t.return;
      }
  }
  function Mf(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new $0();
      var e = /* @__PURE__ */ new Set();
      u.set(t, e);
    } else
      e = u.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), u.set(t, e));
    e.has(a) || (gf = !0, e.add(a), l = tv.bind(null, l, t, a), t.then(l, l));
  }
  function tv(l, t, a) {
    var u = l.pingCache;
    u !== null && u.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, yl === l && (ll & a) === a && (zl === 4 || zl === 3 && (ll & 62914560) === ll && 300 > _t() - Tf ? (el & 2) === 0 && du(l, 0) : Sf |= a, su === ll && (su = 0)), Mt(l);
  }
  function Sr(l, t) {
    t === 0 && (t = vi()), l = ka(l, t), l !== null && (Eu(l, t), Mt(l));
  }
  function av(l) {
    var t = l.memoizedState, a = 0;
    t !== null && (a = t.retryLane), Sr(l, a);
  }
  function uv(l, t) {
    var a = 0;
    switch (l.tag) {
      case 13:
        var u = l.stateNode, e = l.memoizedState;
        e !== null && (a = e.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    u !== null && u.delete(t), Sr(l, a);
  }
  function ev(l, t) {
    return Gn(l, t);
  }
  var mn = null, hu = null, Rf = !1, gn = !1, Uf = !1, qa = 0;
  function Mt(l) {
    l !== hu && l.next === null && (hu === null ? mn = hu = l : hu = hu.next = l), gn = !0, Rf || (Rf = !0, cv());
  }
  function ee(l, t) {
    if (!Uf && gn) {
      Uf = !0;
      do
        for (var a = !1, u = mn; u !== null; ) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var c = u.suspendedLanes, f = u.pingedLanes;
              n = (1 << 31 - at(42 | l) + 1) - 1, n &= e & ~(c & ~f), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (a = !0, _r(u, n));
          } else
            n = ll, n = _e(
              u,
              u === yl ? n : 0,
              u.cancelPendingCommit !== null || u.timeoutHandle !== -1
            ), (n & 3) === 0 || Tu(u, n) || (a = !0, _r(u, n));
          u = u.next;
        }
      while (a);
      Uf = !1;
    }
  }
  function nv() {
    br();
  }
  function br() {
    gn = Rf = !1;
    var l = 0;
    qa !== 0 && (hv() && (l = qa), qa = 0);
    for (var t = _t(), a = null, u = mn; u !== null; ) {
      var e = u.next, n = Tr(u, t);
      n === 0 ? (u.next = null, a === null ? mn = e : a.next = e, e === null && (hu = a)) : (a = u, (l !== 0 || (n & 3) !== 0) && (gn = !0)), u = e;
    }
    ee(l);
  }
  function Tr(l, t) {
    for (var a = l.suspendedLanes, u = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var c = 31 - at(n), f = 1 << c, i = e[c];
      i === -1 ? ((f & a) === 0 || (f & u) !== 0) && (e[c] = Nd(f, t)) : i <= t && (l.expiredLanes |= f), n &= ~f;
    }
    if (t = yl, a = ll, a = _e(
      l,
      l === t ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), u = l.callbackNode, a === 0 || l === t && (nl === 2 || nl === 9) || l.cancelPendingCommit !== null)
      return u !== null && u !== null && Xn(u), l.callbackNode = null, l.callbackPriority = 0;
    if ((a & 3) === 0 || Tu(l, a)) {
      if (t = a & -a, t === l.callbackPriority) return t;
      switch (u !== null && Xn(u), Vn(a)) {
        case 2:
        case 8:
          a = oi;
          break;
        case 32:
          a = be;
          break;
        case 268435456:
          a = ri;
          break;
        default:
          a = be;
      }
      return u = Er.bind(null, l), a = Gn(a, u), l.callbackPriority = t, l.callbackNode = a, t;
    }
    return u !== null && u !== null && Xn(u), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Er(l, t) {
    if (Xl !== 0 && Xl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var a = l.callbackNode;
    if (yn() && l.callbackNode !== a)
      return null;
    var u = ll;
    return u = _e(
      l,
      l === yl ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), u === 0 ? null : (ur(l, u, t), Tr(l, _t()), l.callbackNode != null && l.callbackNode === a ? Er.bind(null, l) : null);
  }
  function _r(l, t) {
    if (yn()) return null;
    ur(l, t, !0);
  }
  function cv() {
    mv(function() {
      (el & 6) !== 0 ? Gn(
        si,
        nv
      ) : br();
    });
  }
  function pf() {
    return qa === 0 && (qa = di()), qa;
  }
  function Ar(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Me("" + l);
  }
  function zr(l, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, l.id && a.setAttribute("form", l.id), t.parentNode.insertBefore(a, t), l = new FormData(l), a.parentNode.removeChild(a), l;
  }
  function fv(l, t, a, u, e) {
    if (t === "submit" && a && a.stateNode === e) {
      var n = Ar(
        (e[Wl] || null).action
      ), c = u.submitter;
      c && (t = (t = c[Wl] || null) ? Ar(t.formAction) : c.getAttribute("formAction"), t !== null && (n = t, c = null));
      var f = new Ne(
        "action",
        "action",
        null,
        u,
        e
      );
      l.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (u.defaultPrevented) {
                if (qa !== 0) {
                  var i = c ? zr(e, c) : new FormData(e);
                  Wc(
                    a,
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
                typeof n == "function" && (f.preventDefault(), i = c ? zr(e, c) : new FormData(e), Wc(
                  a,
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
  for (var Nf = 0; Nf < hc.length; Nf++) {
    var Hf = hc[Nf], iv = Hf.toLowerCase(), sv = Hf[0].toUpperCase() + Hf.slice(1);
    bt(
      iv,
      "on" + sv
    );
  }
  bt(as, "onAnimationEnd"), bt(us, "onAnimationIteration"), bt(es, "onAnimationStart"), bt("dblclick", "onDoubleClick"), bt("focusin", "onFocus"), bt("focusout", "onBlur"), bt(D0, "onTransitionRun"), bt(M0, "onTransitionStart"), bt(R0, "onTransitionCancel"), bt(ns, "onTransitionEnd"), Ca("onMouseEnter", ["mouseout", "mouseover"]), Ca("onMouseLeave", ["mouseout", "mouseover"]), Ca("onPointerEnter", ["pointerout", "pointerover"]), Ca("onPointerLeave", ["pointerout", "pointerover"]), ga(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ga(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ga("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ga(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ga(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ga(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ne = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), ov = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ne)
  );
  function Or(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a], e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var c = u.length - 1; 0 <= c; c--) {
            var f = u[c], i = f.instance, h = f.currentTarget;
            if (f = f.listener, i !== n && e.isPropagationStopped())
              break l;
            n = f, e.currentTarget = h;
            try {
              n(e);
            } catch (b) {
              un(b);
            }
            e.currentTarget = null, n = i;
          }
        else
          for (c = 0; c < u.length; c++) {
            if (f = u[c], i = f.instance, h = f.currentTarget, f = f.listener, i !== n && e.isPropagationStopped())
              break l;
            n = f, e.currentTarget = h;
            try {
              n(e);
            } catch (b) {
              un(b);
            }
            e.currentTarget = null, n = i;
          }
      }
    }
  }
  function F(l, t) {
    var a = t[Ln];
    a === void 0 && (a = t[Ln] = /* @__PURE__ */ new Set());
    var u = l + "__bubble";
    a.has(u) || (Dr(t, l, 2, !1), a.add(u));
  }
  function qf(l, t, a) {
    var u = 0;
    t && (u |= 4), Dr(
      a,
      l,
      u,
      t
    );
  }
  var Sn = "_reactListening" + Math.random().toString(36).slice(2);
  function xf(l) {
    if (!l[Sn]) {
      l[Sn] = !0, Si.forEach(function(a) {
        a !== "selectionchange" && (ov.has(a) || qf(a, !1, l), qf(a, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Sn] || (t[Sn] = !0, qf("selectionchange", !1, t));
    }
  }
  function Dr(l, t, a, u) {
    switch ($r(t)) {
      case 2:
        var e = jv;
        break;
      case 8:
        e = Cv;
        break;
      default:
        e = kf;
    }
    a = e.bind(
      null,
      t,
      a,
      l
    ), e = void 0, !tc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), u ? e !== void 0 ? l.addEventListener(t, a, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, a, !0) : e !== void 0 ? l.addEventListener(t, a, {
      passive: e
    }) : l.addEventListener(t, a, !1);
  }
  function Bf(l, t, a, u, e) {
    var n = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
      l: for (; ; ) {
        if (u === null) return;
        var c = u.tag;
        if (c === 3 || c === 4) {
          var f = u.stateNode.containerInfo;
          if (f === e) break;
          if (c === 4)
            for (c = u.return; c !== null; ) {
              var i = c.tag;
              if ((i === 3 || i === 4) && c.stateNode.containerInfo === e)
                return;
              c = c.return;
            }
          for (; f !== null; ) {
            if (c = Ba(f), c === null) return;
            if (i = c.tag, i === 5 || i === 6 || i === 26 || i === 27) {
              u = n = c;
              continue l;
            }
            f = f.parentNode;
          }
        }
        u = u.return;
      }
    Hi(function() {
      var h = n, b = Pn(a), _ = [];
      l: {
        var y = cs.get(l);
        if (y !== void 0) {
          var m = Ne, L = l;
          switch (l) {
            case "keypress":
              if (Ue(a) === 0) break l;
            case "keydown":
            case "keyup":
              m = e0;
              break;
            case "focusin":
              L = "focus", m = nc;
              break;
            case "focusout":
              L = "blur", m = nc;
              break;
            case "beforeblur":
            case "afterblur":
              m = nc;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              m = Bi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              m = Jd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              m = f0;
              break;
            case as:
            case us:
            case es:
              m = Wd;
              break;
            case ns:
              m = s0;
              break;
            case "scroll":
            case "scrollend":
              m = Ld;
              break;
            case "wheel":
              m = r0;
              break;
            case "copy":
            case "cut":
            case "paste":
              m = Fd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              m = ji;
              break;
            case "toggle":
            case "beforetoggle":
              m = v0;
          }
          var X = (t & 4) !== 0, sl = !X && (l === "scroll" || l === "scrollend"), d = X ? y !== null ? y + "Capture" : null : y;
          X = [];
          for (var o = h, v; o !== null; ) {
            var E = o;
            if (v = E.stateNode, E = E.tag, E !== 5 && E !== 26 && E !== 27 || v === null || d === null || (E = zu(o, d), E != null && X.push(
              ce(o, E, v)
            )), sl) break;
            o = o.return;
          }
          0 < X.length && (y = new m(
            y,
            L,
            null,
            a,
            b
          ), _.push({ event: y, listeners: X }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (y = l === "mouseover" || l === "pointerover", m = l === "mouseout" || l === "pointerout", y && a !== In && (L = a.relatedTarget || a.fromElement) && (Ba(L) || L[xa]))
            break l;
          if ((m || y) && (y = b.window === b ? b : (y = b.ownerDocument) ? y.defaultView || y.parentWindow : window, m ? (L = a.relatedTarget || a.toElement, m = h, L = L ? Ba(L) : null, L !== null && (sl = B(L), X = L.tag, L !== sl || X !== 5 && X !== 27 && X !== 6) && (L = null)) : (m = null, L = h), m !== L)) {
            if (X = Bi, E = "onMouseLeave", d = "onMouseEnter", o = "mouse", (l === "pointerout" || l === "pointerover") && (X = ji, E = "onPointerLeave", d = "onPointerEnter", o = "pointer"), sl = m == null ? y : Au(m), v = L == null ? y : Au(L), y = new X(
              E,
              o + "leave",
              m,
              a,
              b
            ), y.target = sl, y.relatedTarget = v, E = null, Ba(b) === h && (X = new X(
              d,
              o + "enter",
              L,
              a,
              b
            ), X.target = v, X.relatedTarget = sl, E = X), sl = E, m && L)
              t: {
                for (X = m, d = L, o = 0, v = X; v; v = yu(v))
                  o++;
                for (v = 0, E = d; E; E = yu(E))
                  v++;
                for (; 0 < o - v; )
                  X = yu(X), o--;
                for (; 0 < v - o; )
                  d = yu(d), v--;
                for (; o--; ) {
                  if (X === d || d !== null && X === d.alternate)
                    break t;
                  X = yu(X), d = yu(d);
                }
                X = null;
              }
            else X = null;
            m !== null && Mr(
              _,
              y,
              m,
              X,
              !1
            ), L !== null && sl !== null && Mr(
              _,
              sl,
              L,
              X,
              !0
            );
          }
        }
        l: {
          if (y = h ? Au(h) : window, m = y.nodeName && y.nodeName.toLowerCase(), m === "select" || m === "input" && y.type === "file")
            var H = Ki;
          else if (Vi(y))
            if (Ji)
              H = A0;
            else {
              H = E0;
              var W = T0;
            }
          else
            m = y.nodeName, !m || m.toLowerCase() !== "input" || y.type !== "checkbox" && y.type !== "radio" ? h && Fn(h.elementType) && (H = Ki) : H = _0;
          if (H && (H = H(l, h))) {
            Li(
              _,
              H,
              a,
              b
            );
            break l;
          }
          W && W(l, y, h), l === "focusout" && h && y.type === "number" && h.memoizedProps.value != null && $n(y, "number", y.value);
        }
        switch (W = h ? Au(h) : window, l) {
          case "focusin":
            (Vi(W) || W.contentEditable === "true") && (Ka = W, rc = h, Hu = null);
            break;
          case "focusout":
            Hu = rc = Ka = null;
            break;
          case "mousedown":
            dc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            dc = !1, ls(_, a, b);
            break;
          case "selectionchange":
            if (O0) break;
          case "keydown":
          case "keyup":
            ls(_, a, b);
        }
        var Y;
        if (fc)
          l: {
            switch (l) {
              case "compositionstart":
                var Q = "onCompositionStart";
                break l;
              case "compositionend":
                Q = "onCompositionEnd";
                break l;
              case "compositionupdate":
                Q = "onCompositionUpdate";
                break l;
            }
            Q = void 0;
          }
        else
          La ? Qi(l, a) && (Q = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (Q = "onCompositionStart");
        Q && (Ci && a.locale !== "ko" && (La || Q !== "onCompositionStart" ? Q === "onCompositionEnd" && La && (Y = qi()) : (Jt = b, ac = "value" in Jt ? Jt.value : Jt.textContent, La = !0)), W = bn(h, Q), 0 < W.length && (Q = new Yi(
          Q,
          l,
          null,
          a,
          b
        ), _.push({ event: Q, listeners: W }), Y ? Q.data = Y : (Y = Zi(a), Y !== null && (Q.data = Y)))), (Y = y0 ? m0(l, a) : g0(l, a)) && (Q = bn(h, "onBeforeInput"), 0 < Q.length && (W = new Yi(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          b
        ), _.push({
          event: W,
          listeners: Q
        }), W.data = Y)), fv(
          _,
          l,
          h,
          a,
          b
        );
      }
      Or(_, t);
    });
  }
  function ce(l, t, a) {
    return {
      instance: l,
      listener: t,
      currentTarget: a
    };
  }
  function bn(l, t) {
    for (var a = t + "Capture", u = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = zu(l, a), e != null && u.unshift(
        ce(l, e, n)
      ), e = zu(l, t), e != null && u.push(
        ce(l, e, n)
      )), l.tag === 3) return u;
      l = l.return;
    }
    return [];
  }
  function yu(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Mr(l, t, a, u, e) {
    for (var n = t._reactName, c = []; a !== null && a !== u; ) {
      var f = a, i = f.alternate, h = f.stateNode;
      if (f = f.tag, i !== null && i === u) break;
      f !== 5 && f !== 26 && f !== 27 || h === null || (i = h, e ? (h = zu(a, n), h != null && c.unshift(
        ce(a, h, i)
      )) : e || (h = zu(a, n), h != null && c.push(
        ce(a, h, i)
      ))), a = a.return;
    }
    c.length !== 0 && l.push({ event: t, listeners: c });
  }
  var rv = /\r\n?/g, dv = /\u0000|\uFFFD/g;
  function Rr(l) {
    return (typeof l == "string" ? l : "" + l).replace(rv, `
`).replace(dv, "");
  }
  function Ur(l, t) {
    return t = Rr(t), Rr(l) === t;
  }
  function Tn() {
  }
  function il(l, t, a, u, e, n) {
    switch (a) {
      case "children":
        typeof u == "string" ? t === "body" || t === "textarea" && u === "" || Qa(l, u) : (typeof u == "number" || typeof u == "bigint") && t !== "body" && Qa(l, "" + u);
        break;
      case "className":
        ze(l, "class", u);
        break;
      case "tabIndex":
        ze(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ze(l, a, u);
        break;
      case "style":
        pi(l, u, n);
        break;
      case "data":
        if (t !== "object") {
          ze(l, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        u = Me("" + u), l.setAttribute(a, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (a === "formAction" ? (t !== "input" && il(l, t, "name", e.name, e, null), il(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), il(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), il(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (il(l, t, "encType", e.encType, e, null), il(l, t, "method", e.method, e, null), il(l, t, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        u = Me("" + u), l.setAttribute(a, u);
        break;
      case "onClick":
        u != null && (l.onclick = Tn);
        break;
      case "onScroll":
        u != null && F("scroll", l);
        break;
      case "onScrollEnd":
        u != null && F("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(r(61));
          if (a = u.__html, a != null) {
            if (e.children != null) throw Error(r(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        l.muted = u && typeof u != "function" && typeof u != "symbol";
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
        if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        a = Me("" + u), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
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
        u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "" + u) : l.removeAttribute(a);
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
        u && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "") : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0 ? l.setAttribute(a, "") : u !== !1 && u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, u) : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? l.setAttribute(a, u) : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? l.removeAttribute(a) : l.setAttribute(a, u);
        break;
      case "popover":
        F("beforetoggle", l), F("toggle", l), Ae(l, "popover", u);
        break;
      case "xlinkActuate":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          u
        );
        break;
      case "xlinkArcrole":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          u
        );
        break;
      case "xlinkRole":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          u
        );
        break;
      case "xlinkShow":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          u
        );
        break;
      case "xlinkTitle":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          u
        );
        break;
      case "xlinkType":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          u
        );
        break;
      case "xmlBase":
        Rt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          u
        );
        break;
      case "xmlLang":
        Rt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          u
        );
        break;
      case "xmlSpace":
        Rt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          u
        );
        break;
      case "is":
        Ae(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Zd.get(a) || a, Ae(l, a, u));
    }
  }
  function Yf(l, t, a, u, e, n) {
    switch (a) {
      case "style":
        pi(l, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(r(61));
          if (a = u.__html, a != null) {
            if (e.children != null) throw Error(r(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string" ? Qa(l, u) : (typeof u == "number" || typeof u == "bigint") && Qa(l, "" + u);
        break;
      case "onScroll":
        u != null && F("scroll", l);
        break;
      case "onScrollEnd":
        u != null && F("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = Tn);
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
        if (!bi.hasOwnProperty(a))
          l: {
            if (a[0] === "o" && a[1] === "n" && (e = a.endsWith("Capture"), t = a.slice(2, e ? a.length - 7 : void 0), n = l[Wl] || null, n = n != null ? n[a] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof u == "function")) {
              typeof n != "function" && n !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(t, u, e);
              break l;
            }
            a in l ? l[a] = u : u === !0 ? l.setAttribute(a, "") : Ae(l, a, u);
          }
    }
  }
  function Ql(l, t, a) {
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
        F("error", l), F("load", l);
        var u = !1, e = !1, n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var c = a[n];
            if (c != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  il(l, t, n, c, a, null);
              }
          }
        e && il(l, t, "srcSet", a.srcSet, a, null), u && il(l, t, "src", a.src, a, null);
        return;
      case "input":
        F("invalid", l);
        var f = n = c = e = null, i = null, h = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var b = a[u];
            if (b != null)
              switch (u) {
                case "name":
                  e = b;
                  break;
                case "type":
                  c = b;
                  break;
                case "checked":
                  i = b;
                  break;
                case "defaultChecked":
                  h = b;
                  break;
                case "value":
                  n = b;
                  break;
                case "defaultValue":
                  f = b;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (b != null)
                    throw Error(r(137, t));
                  break;
                default:
                  il(l, t, u, b, a, null);
              }
          }
        Di(
          l,
          n,
          f,
          i,
          h,
          c,
          e,
          !1
        ), Oe(l);
        return;
      case "select":
        F("invalid", l), u = c = n = null;
        for (e in a)
          if (a.hasOwnProperty(e) && (f = a[e], f != null))
            switch (e) {
              case "value":
                n = f;
                break;
              case "defaultValue":
                c = f;
                break;
              case "multiple":
                u = f;
              default:
                il(l, t, e, f, a, null);
            }
        t = n, a = c, l.multiple = !!u, t != null ? Xa(l, !!u, t, !1) : a != null && Xa(l, !!u, a, !0);
        return;
      case "textarea":
        F("invalid", l), n = e = u = null;
        for (c in a)
          if (a.hasOwnProperty(c) && (f = a[c], f != null))
            switch (c) {
              case "value":
                u = f;
                break;
              case "defaultValue":
                e = f;
                break;
              case "children":
                n = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(r(91));
                break;
              default:
                il(l, t, c, f, a, null);
            }
        Ri(l, u, e, n), Oe(l);
        return;
      case "option":
        for (i in a)
          if (a.hasOwnProperty(i) && (u = a[i], u != null))
            switch (i) {
              case "selected":
                l.selected = u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                il(l, t, i, u, a, null);
            }
        return;
      case "dialog":
        F("beforetoggle", l), F("toggle", l), F("cancel", l), F("close", l);
        break;
      case "iframe":
      case "object":
        F("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ne.length; u++)
          F(ne[u], l);
        break;
      case "image":
        F("error", l), F("load", l);
        break;
      case "details":
        F("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        F("error", l), F("load", l);
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
        for (h in a)
          if (a.hasOwnProperty(h) && (u = a[h], u != null))
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                il(l, t, h, u, a, null);
            }
        return;
      default:
        if (Fn(t)) {
          for (b in a)
            a.hasOwnProperty(b) && (u = a[b], u !== void 0 && Yf(
              l,
              t,
              b,
              u,
              a,
              void 0
            ));
          return;
        }
    }
    for (f in a)
      a.hasOwnProperty(f) && (u = a[f], u != null && il(l, t, f, u, a, null));
  }
  function vv(l, t, a, u) {
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
        var e = null, n = null, c = null, f = null, i = null, h = null, b = null;
        for (m in a) {
          var _ = a[m];
          if (a.hasOwnProperty(m) && _ != null)
            switch (m) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = _;
              default:
                u.hasOwnProperty(m) || il(l, t, m, null, u, _);
            }
        }
        for (var y in u) {
          var m = u[y];
          if (_ = a[y], u.hasOwnProperty(y) && (m != null || _ != null))
            switch (y) {
              case "type":
                n = m;
                break;
              case "name":
                e = m;
                break;
              case "checked":
                h = m;
                break;
              case "defaultChecked":
                b = m;
                break;
              case "value":
                c = m;
                break;
              case "defaultValue":
                f = m;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (m != null)
                  throw Error(r(137, t));
                break;
              default:
                m !== _ && il(
                  l,
                  t,
                  y,
                  m,
                  u,
                  _
                );
            }
        }
        Wn(
          l,
          c,
          f,
          i,
          h,
          b,
          n,
          e
        );
        return;
      case "select":
        m = c = f = y = null;
        for (n in a)
          if (i = a[n], a.hasOwnProperty(n) && i != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                m = i;
              default:
                u.hasOwnProperty(n) || il(
                  l,
                  t,
                  n,
                  null,
                  u,
                  i
                );
            }
        for (e in u)
          if (n = u[e], i = a[e], u.hasOwnProperty(e) && (n != null || i != null))
            switch (e) {
              case "value":
                y = n;
                break;
              case "defaultValue":
                f = n;
                break;
              case "multiple":
                c = n;
              default:
                n !== i && il(
                  l,
                  t,
                  e,
                  n,
                  u,
                  i
                );
            }
        t = f, a = c, u = m, y != null ? Xa(l, !!a, y, !1) : !!u != !!a && (t != null ? Xa(l, !!a, t, !0) : Xa(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        m = y = null;
        for (f in a)
          if (e = a[f], a.hasOwnProperty(f) && e != null && !u.hasOwnProperty(f))
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                il(l, t, f, null, u, e);
            }
        for (c in u)
          if (e = u[c], n = a[c], u.hasOwnProperty(c) && (e != null || n != null))
            switch (c) {
              case "value":
                y = e;
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
                e !== n && il(l, t, c, e, u, n);
            }
        Mi(l, y, m);
        return;
      case "option":
        for (var L in a)
          if (y = a[L], a.hasOwnProperty(L) && y != null && !u.hasOwnProperty(L))
            switch (L) {
              case "selected":
                l.selected = !1;
                break;
              default:
                il(
                  l,
                  t,
                  L,
                  null,
                  u,
                  y
                );
            }
        for (i in u)
          if (y = u[i], m = a[i], u.hasOwnProperty(i) && y !== m && (y != null || m != null))
            switch (i) {
              case "selected":
                l.selected = y && typeof y != "function" && typeof y != "symbol";
                break;
              default:
                il(
                  l,
                  t,
                  i,
                  y,
                  u,
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
        for (var X in a)
          y = a[X], a.hasOwnProperty(X) && y != null && !u.hasOwnProperty(X) && il(l, t, X, null, u, y);
        for (h in u)
          if (y = u[h], m = a[h], u.hasOwnProperty(h) && y !== m && (y != null || m != null))
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null)
                  throw Error(r(137, t));
                break;
              default:
                il(
                  l,
                  t,
                  h,
                  y,
                  u,
                  m
                );
            }
        return;
      default:
        if (Fn(t)) {
          for (var sl in a)
            y = a[sl], a.hasOwnProperty(sl) && y !== void 0 && !u.hasOwnProperty(sl) && Yf(
              l,
              t,
              sl,
              void 0,
              u,
              y
            );
          for (b in u)
            y = u[b], m = a[b], !u.hasOwnProperty(b) || y === m || y === void 0 && m === void 0 || Yf(
              l,
              t,
              b,
              y,
              u,
              m
            );
          return;
        }
    }
    for (var d in a)
      y = a[d], a.hasOwnProperty(d) && y != null && !u.hasOwnProperty(d) && il(l, t, d, null, u, y);
    for (_ in u)
      y = u[_], m = a[_], !u.hasOwnProperty(_) || y === m || y == null && m == null || il(l, t, _, y, u, m);
  }
  var jf = null, Cf = null;
  function En(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function pr(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Nr(l, t) {
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
  function Gf(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Xf = null;
  function hv() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Xf ? !1 : (Xf = l, !0) : (Xf = null, !1);
  }
  var Hr = typeof setTimeout == "function" ? setTimeout : void 0, yv = typeof clearTimeout == "function" ? clearTimeout : void 0, qr = typeof Promise == "function" ? Promise : void 0, mv = typeof queueMicrotask == "function" ? queueMicrotask : typeof qr < "u" ? function(l) {
    return qr.resolve(null).then(l).catch(gv);
  } : Hr;
  function gv(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function ia(l) {
    return l === "head";
  }
  function xr(l, t) {
    var a = t, u = 0, e = 0;
    do {
      var n = a.nextSibling;
      if (l.removeChild(a), n && n.nodeType === 8)
        if (a = n.data, a === "/$") {
          if (0 < u && 8 > u) {
            a = u;
            var c = l.ownerDocument;
            if (a & 1 && fe(c.documentElement), a & 2 && fe(c.body), a & 4)
              for (a = c.head, fe(a), c = a.firstChild; c; ) {
                var f = c.nextSibling, i = c.nodeName;
                c[_u] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && c.rel.toLowerCase() === "stylesheet" || a.removeChild(c), c = f;
              }
          }
          if (e === 0) {
            l.removeChild(n), ye(t);
            return;
          }
          e--;
        } else
          a === "$" || a === "$?" || a === "$!" ? e++ : u = a.charCodeAt(0) - 48;
      else u = 0;
      a = n;
    } while (a);
    ye(t);
  }
  function Qf(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Qf(a), Kn(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function Sv(l, t, a, u) {
    for (; l.nodeType === 1; ) {
      var e = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (u) {
        if (!l[_u])
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
      if (l = Et(l.nextSibling), l === null) break;
    }
    return null;
  }
  function bv(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = Et(l.nextSibling), l === null)) return null;
    return l;
  }
  function Zf(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function Tv(l, t) {
    var a = l.ownerDocument;
    if (l.data !== "$?" || a.readyState === "complete")
      t();
    else {
      var u = function() {
        t(), a.removeEventListener("DOMContentLoaded", u);
      };
      a.addEventListener("DOMContentLoaded", u), l._reactRetry = u;
    }
  }
  function Et(l) {
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
  var Vf = null;
  function Br(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (t === 0) return l;
          t--;
        } else a === "/$" && t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Yr(l, t, a) {
    switch (t = En(a), l) {
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
  function fe(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    Kn(l);
  }
  var St = /* @__PURE__ */ new Map(), jr = /* @__PURE__ */ new Set();
  function _n(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Zt = p.d;
  p.d = {
    f: Ev,
    r: _v,
    D: Av,
    C: zv,
    L: Ov,
    m: Dv,
    X: Rv,
    S: Mv,
    M: Uv
  };
  function Ev() {
    var l = Zt.f(), t = vn();
    return l || t;
  }
  function _v(l) {
    var t = Ya(l);
    t !== null && t.tag === 5 && t.type === "form" ? ao(t) : Zt.r(l);
  }
  var mu = typeof document > "u" ? null : document;
  function Cr(l, t, a) {
    var u = mu;
    if (u && typeof t == "string" && t) {
      var e = rt(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof a == "string" && (e += '[crossorigin="' + a + '"]'), jr.has(e) || (jr.add(e), l = { rel: l, crossOrigin: a, href: t }, u.querySelector(e) === null && (t = u.createElement("link"), Ql(t, "link", l), Bl(t), u.head.appendChild(t)));
    }
  }
  function Av(l) {
    Zt.D(l), Cr("dns-prefetch", l, null);
  }
  function zv(l, t) {
    Zt.C(l, t), Cr("preconnect", l, t);
  }
  function Ov(l, t, a) {
    Zt.L(l, t, a);
    var u = mu;
    if (u && l && t) {
      var e = 'link[rel="preload"][as="' + rt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (e += '[imagesrcset="' + rt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (e += '[imagesizes="' + rt(
        a.imageSizes
      ) + '"]')) : e += '[href="' + rt(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = gu(l);
          break;
        case "script":
          n = Su(l);
      }
      St.has(n) || (l = x(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : l,
          as: t
        },
        a
      ), St.set(n, l), u.querySelector(e) !== null || t === "style" && u.querySelector(ie(n)) || t === "script" && u.querySelector(se(n)) || (t = u.createElement("link"), Ql(t, "link", l), Bl(t), u.head.appendChild(t)));
    }
  }
  function Dv(l, t) {
    Zt.m(l, t);
    var a = mu;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + rt(u) + '"][href="' + rt(l) + '"]', n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Su(l);
      }
      if (!St.has(n) && (l = x({ rel: "modulepreload", href: l }, t), St.set(n, l), a.querySelector(e) === null)) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(se(n)))
              return;
        }
        u = a.createElement("link"), Ql(u, "link", l), Bl(u), a.head.appendChild(u);
      }
    }
  }
  function Mv(l, t, a) {
    Zt.S(l, t, a);
    var u = mu;
    if (u && l) {
      var e = ja(u).hoistableStyles, n = gu(l);
      t = t || "default";
      var c = e.get(n);
      if (!c) {
        var f = { loading: 0, preload: null };
        if (c = u.querySelector(
          ie(n)
        ))
          f.loading = 5;
        else {
          l = x(
            { rel: "stylesheet", href: l, "data-precedence": t },
            a
          ), (a = St.get(n)) && Lf(l, a);
          var i = c = u.createElement("link");
          Bl(i), Ql(i, "link", l), i._p = new Promise(function(h, b) {
            i.onload = h, i.onerror = b;
          }), i.addEventListener("load", function() {
            f.loading |= 1;
          }), i.addEventListener("error", function() {
            f.loading |= 2;
          }), f.loading |= 4, An(c, t, u);
        }
        c = {
          type: "stylesheet",
          instance: c,
          count: 1,
          state: f
        }, e.set(n, c);
      }
    }
  }
  function Rv(l, t) {
    Zt.X(l, t);
    var a = mu;
    if (a && l) {
      var u = ja(a).hoistableScripts, e = Su(l), n = u.get(e);
      n || (n = a.querySelector(se(e)), n || (l = x({ src: l, async: !0 }, t), (t = St.get(e)) && Kf(l, t), n = a.createElement("script"), Bl(n), Ql(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function Uv(l, t) {
    Zt.M(l, t);
    var a = mu;
    if (a && l) {
      var u = ja(a).hoistableScripts, e = Su(l), n = u.get(e);
      n || (n = a.querySelector(se(e)), n || (l = x({ src: l, async: !0, type: "module" }, t), (t = St.get(e)) && Kf(l, t), n = a.createElement("script"), Bl(n), Ql(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function Gr(l, t, a, u) {
    var e = (e = K.current) ? _n(e) : null;
    if (!e) throw Error(r(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = gu(a.href), a = ja(
          e
        ).hoistableStyles, u = a.get(t), u || (u = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, u)), u) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          l = gu(a.href);
          var n = ja(
            e
          ).hoistableStyles, c = n.get(l);
          if (c || (e = e.ownerDocument || e, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, c), (n = e.querySelector(
            ie(l)
          )) && !n._p && (c.instance = n, c.state.loading = 5), St.has(l) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, St.set(l, a), n || pv(
            e,
            l,
            a,
            c.state
          ))), t && u === null)
            throw Error(r(528, ""));
          return c;
        }
        if (t && u !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Su(a), a = ja(
          e
        ).hoistableScripts, u = a.get(t), u || (u = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, u)), u) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, l));
    }
  }
  function gu(l) {
    return 'href="' + rt(l) + '"';
  }
  function ie(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Xr(l) {
    return x({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function pv(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? u.loading = 1 : (t = l.createElement("link"), u.preload = t, t.addEventListener("load", function() {
      return u.loading |= 1;
    }), t.addEventListener("error", function() {
      return u.loading |= 2;
    }), Ql(t, "link", a), Bl(t), l.head.appendChild(t));
  }
  function Su(l) {
    return '[src="' + rt(l) + '"]';
  }
  function se(l) {
    return "script[async]" + l;
  }
  function Qr(l, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var u = l.querySelector(
            'style[data-href~="' + rt(a.href) + '"]'
          );
          if (u)
            return t.instance = u, Bl(u), u;
          var e = x({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return u = (l.ownerDocument || l).createElement(
            "style"
          ), Bl(u), Ql(u, "style", e), An(u, a.precedence, l), t.instance = u;
        case "stylesheet":
          e = gu(a.href);
          var n = l.querySelector(
            ie(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Bl(n), n;
          u = Xr(a), (e = St.get(e)) && Lf(u, e), n = (l.ownerDocument || l).createElement("link"), Bl(n);
          var c = n;
          return c._p = new Promise(function(f, i) {
            c.onload = f, c.onerror = i;
          }), Ql(n, "link", u), t.state.loading |= 4, An(n, a.precedence, l), t.instance = n;
        case "script":
          return n = Su(a.src), (e = l.querySelector(
            se(n)
          )) ? (t.instance = e, Bl(e), e) : (u = a, (e = St.get(n)) && (u = x({}, a), Kf(u, e)), l = l.ownerDocument || l, e = l.createElement("script"), Bl(e), Ql(e, "link", u), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (u = t.instance, t.state.loading |= 4, An(u, a.precedence, l));
    return t.instance;
  }
  function An(l, t, a) {
    for (var u = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = u.length ? u[u.length - 1] : null, n = e, c = 0; c < u.length; c++) {
      var f = u[c];
      if (f.dataset.precedence === t) n = f;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild));
  }
  function Lf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Kf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var zn = null;
  function Zr(l, t, a) {
    if (zn === null) {
      var u = /* @__PURE__ */ new Map(), e = zn = /* @__PURE__ */ new Map();
      e.set(a, u);
    } else
      e = zn, u = e.get(a), u || (u = /* @__PURE__ */ new Map(), e.set(a, u));
    if (u.has(l)) return u;
    for (u.set(l, null), a = a.getElementsByTagName(l), e = 0; e < a.length; e++) {
      var n = a[e];
      if (!(n[_u] || n[Vl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = n.getAttribute(t) || "";
        c = l + c;
        var f = u.get(c);
        f ? f.push(n) : u.set(c, [n]);
      }
    }
    return u;
  }
  function Vr(l, t, a) {
    l = l.ownerDocument || l, l.head.insertBefore(
      a,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function Nv(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
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
  function Lr(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var oe = null;
  function Hv() {
  }
  function qv(l, t, a) {
    if (oe === null) throw Error(r(475));
    var u = oe;
    if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var e = gu(a.href), n = l.querySelector(
          ie(e)
        );
        if (n) {
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (u.count++, u = On.bind(u), l.then(u, u)), t.state.loading |= 4, t.instance = n, Bl(n);
          return;
        }
        n = l.ownerDocument || l, a = Xr(a), (e = St.get(e)) && Lf(a, e), n = n.createElement("link"), Bl(n);
        var c = n;
        c._p = new Promise(function(f, i) {
          c.onload = f, c.onerror = i;
        }), Ql(n, "link", a), t.instance = n;
      }
      u.stylesheets === null && (u.stylesheets = /* @__PURE__ */ new Map()), u.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (u.count++, t = On.bind(u), l.addEventListener("load", t), l.addEventListener("error", t));
    }
  }
  function xv() {
    if (oe === null) throw Error(r(475));
    var l = oe;
    return l.stylesheets && l.count === 0 && Jf(l, l.stylesheets), 0 < l.count ? function(t) {
      var a = setTimeout(function() {
        if (l.stylesheets && Jf(l, l.stylesheets), l.unsuspend) {
          var u = l.unsuspend;
          l.unsuspend = null, u();
        }
      }, 6e4);
      return l.unsuspend = t, function() {
        l.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function On() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Jf(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Dn = null;
  function Jf(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Dn = /* @__PURE__ */ new Map(), t.forEach(Bv, l), Dn = null, On.call(l));
  }
  function Bv(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Dn.get(l);
      if (a) var u = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Dn.set(l, a);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var c = e[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (a.set(c.dataset.precedence, c), u = c);
        }
        u && a.set(null, u);
      }
      e = t.instance, c = e.getAttribute("data-precedence"), n = a.get(c) || u, n === u && a.set(null, e), a.set(c, e), this.count++, u = On.bind(this), e.addEventListener("load", u), e.addEventListener("error", u), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var re = {
    $$typeof: cl,
    Provider: null,
    Consumer: null,
    _currentValue: Z,
    _currentValue2: Z,
    _threadCount: 0
  };
  function Yv(l, t, a, u, e, n, c, f) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Qn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Qn(0), this.hiddenUpdates = Qn(null), this.identifierPrefix = u, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Kr(l, t, a, u, e, n, c, f, i, h, b, _) {
    return l = new Yv(
      l,
      t,
      a,
      c,
      f,
      i,
      h,
      _
    ), t = 1, n === !0 && (t |= 24), n = et(3, null, null, t), l.current = n, n.stateNode = l, t = Dc(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: u,
      isDehydrated: a,
      cache: t
    }, pc(n), l;
  }
  function Jr(l) {
    return l ? (l = Wa, l) : Wa;
  }
  function wr(l, t, a, u, e, n) {
    e = Jr(e), u.context === null ? u.context = e : u.pendingContext = e, u = Wt(t), u.payload = { element: a }, n = n === void 0 ? null : n, n !== null && (u.callback = n), a = $t(l, u, t), a !== null && (st(a, l, t), Qu(a, l, t));
  }
  function kr(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function wf(l, t) {
    kr(l, t), (l = l.alternate) && kr(l, t);
  }
  function Wr(l) {
    if (l.tag === 13) {
      var t = ka(l, 67108864);
      t !== null && st(t, l, 67108864), wf(l, 67108864);
    }
  }
  var Mn = !0;
  function jv(l, t, a, u) {
    var e = T.T;
    T.T = null;
    var n = p.p;
    try {
      p.p = 2, kf(l, t, a, u);
    } finally {
      p.p = n, T.T = e;
    }
  }
  function Cv(l, t, a, u) {
    var e = T.T;
    T.T = null;
    var n = p.p;
    try {
      p.p = 8, kf(l, t, a, u);
    } finally {
      p.p = n, T.T = e;
    }
  }
  function kf(l, t, a, u) {
    if (Mn) {
      var e = Wf(u);
      if (e === null)
        Bf(
          l,
          t,
          u,
          Rn,
          a
        ), Fr(l, u);
      else if (Xv(
        e,
        l,
        t,
        a,
        u
      ))
        u.stopPropagation();
      else if (Fr(l, u), t & 4 && -1 < Gv.indexOf(l)) {
        for (; e !== null; ) {
          var n = Ya(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var c = ma(n.pendingLanes);
                  if (c !== 0) {
                    var f = n;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; c; ) {
                      var i = 1 << 31 - at(c);
                      f.entanglements[1] |= i, c &= ~i;
                    }
                    Mt(n), (el & 6) === 0 && (rn = _t() + 500, ee(0));
                  }
                }
                break;
              case 13:
                f = ka(n, 2), f !== null && st(f, n, 2), vn(), wf(n, 2);
            }
          if (n = Wf(u), n === null && Bf(
            l,
            t,
            u,
            Rn,
            a
          ), n === e) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else
        Bf(
          l,
          t,
          u,
          null,
          a
        );
    }
  }
  function Wf(l) {
    return l = Pn(l), $f(l);
  }
  var Rn = null;
  function $f(l) {
    if (Rn = null, l = Ba(l), l !== null) {
      var t = B(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (l = R(t), l !== null) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Rn = l, null;
  }
  function $r(l) {
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
        switch (zd()) {
          case si:
            return 2;
          case oi:
            return 8;
          case be:
          case Od:
            return 32;
          case ri:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ff = !1, sa = null, oa = null, ra = null, de = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), da = [], Gv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Fr(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        sa = null;
        break;
      case "dragenter":
      case "dragleave":
        oa = null;
        break;
      case "mouseover":
      case "mouseout":
        ra = null;
        break;
      case "pointerover":
      case "pointerout":
        de.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ve.delete(t.pointerId);
    }
  }
  function he(l, t, a, u, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: u,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = Ya(t), t !== null && Wr(t)), l) : (l.eventSystemFlags |= u, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function Xv(l, t, a, u, e) {
    switch (t) {
      case "focusin":
        return sa = he(
          sa,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "dragenter":
        return oa = he(
          oa,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "mouseover":
        return ra = he(
          ra,
          l,
          t,
          a,
          u,
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
            a,
            u,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, ve.set(
          n,
          he(
            ve.get(n) || null,
            l,
            t,
            a,
            u,
            e
          )
        ), !0;
    }
    return !1;
  }
  function Ir(l) {
    var t = Ba(l.target);
    if (t !== null) {
      var a = B(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = R(a), t !== null) {
            l.blockedOn = t, qd(l.priority, function() {
              if (a.tag === 13) {
                var u = it();
                u = Zn(u);
                var e = ka(a, u);
                e !== null && st(e, a, u), wf(a, u);
              }
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Un(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = Wf(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(
          a.type,
          a
        );
        In = u, a.target.dispatchEvent(u), In = null;
      } else
        return t = Ya(a), t !== null && Wr(t), l.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function Pr(l, t, a) {
    Un(l) && a.delete(t);
  }
  function Qv() {
    Ff = !1, sa !== null && Un(sa) && (sa = null), oa !== null && Un(oa) && (oa = null), ra !== null && Un(ra) && (ra = null), de.forEach(Pr), ve.forEach(Pr);
  }
  function pn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, Ff || (Ff = !0, g.unstable_scheduleCallback(
      g.unstable_NormalPriority,
      Qv
    )));
  }
  var Nn = null;
  function ld(l) {
    Nn !== l && (Nn = l, g.unstable_scheduleCallback(
      g.unstable_NormalPriority,
      function() {
        Nn === l && (Nn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t], u = l[t + 1], e = l[t + 2];
          if (typeof u != "function") {
            if ($f(u || a) === null)
              continue;
            break;
          }
          var n = Ya(a);
          n !== null && (l.splice(t, 3), t -= 3, Wc(
            n,
            {
              pending: !0,
              data: e,
              method: a.method,
              action: u
            },
            u,
            e
          ));
        }
      }
    ));
  }
  function ye(l) {
    function t(i) {
      return pn(i, l);
    }
    sa !== null && pn(sa, l), oa !== null && pn(oa, l), ra !== null && pn(ra, l), de.forEach(t), ve.forEach(t);
    for (var a = 0; a < da.length; a++) {
      var u = da[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < da.length && (a = da[0], a.blockedOn === null); )
      Ir(a), a.blockedOn === null && da.shift();
    if (a = (l.ownerDocument || l).$$reactFormReplay, a != null)
      for (u = 0; u < a.length; u += 3) {
        var e = a[u], n = a[u + 1], c = e[Wl] || null;
        if (typeof n == "function")
          c || ld(a);
        else if (c) {
          var f = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, c = n[Wl] || null)
              f = c.formAction;
            else if ($f(e) !== null) continue;
          } else f = c.action;
          typeof f == "function" ? a[u + 1] = f : (a.splice(u, 3), u -= 3), ld(a);
        }
      }
  }
  function If(l) {
    this._internalRoot = l;
  }
  Hn.prototype.render = If.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var a = t.current, u = it();
    wr(a, u, l, t, null, null);
  }, Hn.prototype.unmount = If.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      wr(l.current, 2, null, l, null, null), vn(), t[xa] = null;
    }
  };
  function Hn(l) {
    this._internalRoot = l;
  }
  Hn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = mi();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < da.length && t !== 0 && t < da[a].priority; a++) ;
      da.splice(a, 0, l), a === 0 && Ir(l);
    }
  };
  var td = O.version;
  if (td !== "19.1.1")
    throw Error(
      r(
        527,
        td,
        "19.1.1"
      )
    );
  p.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(r(188)) : (l = Object.keys(l).join(","), Error(r(268, l)));
    return l = z(t), l = l !== null ? S(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Zv = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: T,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var qn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!qn.isDisabled && qn.supportsFiber)
      try {
        bu = qn.inject(
          Zv
        ), tt = qn;
      } catch {
      }
  }
  return ge.createRoot = function(l, t) {
    if (!M(l)) throw Error(r(299));
    var a = !1, u = "", e = go, n = So, c = bo, f = null;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (f = t.unstable_transitionCallbacks)), t = Kr(
      l,
      1,
      !1,
      null,
      null,
      a,
      u,
      e,
      n,
      c,
      f,
      null
    ), l[xa] = t.current, xf(l), new If(t);
  }, ge.hydrateRoot = function(l, t, a) {
    if (!M(l)) throw Error(r(299));
    var u = !1, e = "", n = go, c = So, f = bo, i = null, h = null;
    return a != null && (a.unstable_strictMode === !0 && (u = !0), a.identifierPrefix !== void 0 && (e = a.identifierPrefix), a.onUncaughtError !== void 0 && (n = a.onUncaughtError), a.onCaughtError !== void 0 && (c = a.onCaughtError), a.onRecoverableError !== void 0 && (f = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (i = a.unstable_transitionCallbacks), a.formState !== void 0 && (h = a.formState)), t = Kr(
      l,
      1,
      !0,
      t,
      a ?? null,
      u,
      e,
      n,
      c,
      f,
      i,
      h
    ), t.context = Jr(null), a = t.current, u = it(), u = Zn(u), e = Wt(u), e.callback = null, $t(a, e, u), a = u, t.current.lanes = a, Eu(t, a), Mt(t), l[xa] = t.current, xf(l), new Hn(t);
  }, ge.version = "19.1.1", ge;
}
var rd;
function Iv() {
  if (rd) return ti.exports;
  rd = 1;
  function g() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
      } catch (O) {
        console.error(O);
      }
  }
  return g(), ti.exports = Fv(), ti.exports;
}
var Pv = Iv();
const lh = "bookmark-search_db", th = 1, xn = "bookmarks";
class ah {
  db;
  open() {
    return this.db ? Promise.resolve(this.db) : new Promise((O, D) => {
      const r = indexedDB.open(lh, th);
      r.onerror = (M) => {
        D(M.target.error);
      }, r.onsuccess = (M) => {
        this.db = M.target.result, O(this.db);
      }, r.onupgradeneeded = (M) => {
        const B = M.target.result;
        B.objectStoreNames.contains(xn) || B.createObjectStore(xn, { keyPath: "id" }).createIndex("id", "id", { unique: !0 });
      };
    });
  }
  close() {
    this.db && (this.db.close(), this.db = void 0);
  }
  async _getStore(O) {
    return (await this.open()).transaction(xn, O).objectStore(xn);
  }
  async add(O) {
    const D = await this._getStore("readwrite");
    return new Promise((r, M) => {
      const B = D.add({
        ...O,
        createdTime: Date.now()
      });
      B.onsuccess = (R) => r(R.target.result), B.onerror = (R) => M(R.target.error);
    });
  }
  async get(O) {
    const D = await this._getStore("readonly");
    return new Promise((r, M) => {
      const B = D.get(O);
      B.onsuccess = (R) => r(R.target.result), B.onerror = (R) => M(R.target.error);
    });
  }
  async getAll() {
    const O = await this._getStore("readonly");
    return new Promise((D, r) => {
      const M = O.getAll();
      M.onsuccess = (B) => D(B.target.result), M.onerror = (B) => r(B.target.error);
    });
  }
  async update(O) {
    const D = await this._getStore("readwrite");
    return new Promise((r, M) => {
      const B = D.put(O);
      B.onsuccess = (R) => r(R.target.result), B.onerror = (R) => M(R.target.error);
    });
  }
  async delete(O) {
    const D = await this._getStore("readwrite");
    return new Promise((r, M) => {
      const B = D.delete(O);
      B.onsuccess = () => r(!0), B.onerror = (R) => M(R.target.error);
    });
  }
}
const uh = new ah(), eh = (g, O = "提示") => {
  chrome.notifications.create({
    type: "basic",
    iconUrl: "icons/icon.png",
    title: O,
    message: g
  });
}, nh = "GET_USER_TEMPORARY_DATA", ch = 2e3, dd = "popup_type", md = async () => new Promise((g) => {
  let O;
  const D = () => {
    g([]), O && clearTimeout(O);
  };
  O = setTimeout(D, ch), chrome.runtime.sendMessage(
    { type: nh },
    (r) => {
      chrome.runtime.lastError ? (console.log(chrome.runtime.lastError.message), D()) : (clearTimeout(O), r && r.data ? g(r.data) : g([]));
    }
  );
}), fh = "SET_USER_TEMPORARY_DATA", ih = async (g, O) => {
  await chrome.storage.local.set({
    [g]: O
  });
}, Yn = async (g, O) => new Promise((D) => {
  chrome.storage.local.get(g, (r) => {
    D(r[g] || O);
  });
}), sh = async (g) => {
  await chrome.storage.local.remove(g);
}, oh = ({
  data: g,
  setTemporaryData: O
}) => {
  const [D, r] = I.useState(g.title || ""), [M, B] = I.useState(!1), R = () => {
    O(void 0);
  }, j = () => {
    chrome.runtime.sendMessage({
      type: fh,
      data: {
        ...g,
        title: D
      }
    }), window.close();
  };
  return /* @__PURE__ */ q.jsxs("div", { className: "add-temporary__container", children: [
    /* @__PURE__ */ q.jsxs("div", { className: "add-temporary__set-title", children: [
      /* @__PURE__ */ q.jsx("div", { className: "title", children: "设置标题" }),
      /* @__PURE__ */ q.jsx(
        "input",
        {
          placeholder: "请输入标题",
          type: "text",
          autoFocus: !0,
          autoComplete: "off",
          value: D,
          onChange: (z) => r(z.target.value),
          onCompositionStart: () => B(!0),
          onCompositionEnd: () => B(!1),
          className: "add-temporary__input",
          onKeyDown: (z) => {
            z.key === "Enter" && !M && j();
          }
        }
      )
    ] }),
    /* @__PURE__ */ q.jsxs("div", { className: "add-temporary__operation", children: [
      /* @__PURE__ */ q.jsx("div", { className: "is-button", onClick: R, children: "返回搜索页面" }),
      /* @__PURE__ */ q.jsx("div", { className: "is-button", onClick: j, children: "确定" })
    ] })
  ] });
};
function vd(g) {
  return g ? new URL(g).pathname : "";
}
const fi = (g) => g ? new URL(g).hostname : "", rh = (g, O) => {
  const D = fi(O), r = g.filter(
    (j) => fi(j.url) === D
  );
  if (r.length < 2)
    return r[0];
  const M = vd(O) || "";
  let B, R = -1;
  return r.forEach((j) => {
    const z = vd(j.url) || "";
    let S = 0;
    if (z === M)
      S = Number.MAX_VALUE;
    else {
      const x = M.split("/"), w = z.split("/"), P = Math.max(
        x.length,
        w.length
      );
      for (let gl = 0; gl < P && x[gl] === w[gl]; gl++)
        S++;
    }
    S > R && (R = S, B = j);
  }), B;
}, dh = ({
  name: g,
  value: O,
  onChange: D,
  options: r
}) => {
  const [M, B] = I.useState(O), R = (j) => {
    const z = M.includes(j) ? M.filter((S) => S !== j) : [...M, j];
    B(z), D?.(z);
  };
  return /* @__PURE__ */ q.jsx("div", { className: "checkbox__group", children: r?.map((j) => /* @__PURE__ */ q.jsx(q.Fragment, { children: /* @__PURE__ */ q.jsxs("label", { className: "checkbox", children: [
    /* @__PURE__ */ q.jsx(
      "input",
      {
        type: "checkbox",
        name: g,
        value: j.value,
        checked: M.includes(j.value),
        onChange: () => R(j.value)
      }
    ),
    /* @__PURE__ */ q.jsx("span", { children: j.name })
  ] }) })) });
}, ni = ({
  label: g,
  tips: O,
  children: D
}) => /* @__PURE__ */ q.jsxs("div", { className: "form-item", children: [
  /* @__PURE__ */ q.jsxs("div", { className: "form-item__label", children: [
    g,
    O && /* @__PURE__ */ q.jsx("span", { className: "form-item__tips", children: O })
  ] }),
  /* @__PURE__ */ q.jsx("div", { className: "form-item__content", children: D })
] }), gd = I.createContext({
  value: "0",
  name: "",
  onChange: (g) => {
  }
}), hd = ({
  children: g,
  name: O,
  value: D,
  onChange: r
}) => {
  const [M, B] = I.useState(D), R = (j) => {
    B(j), r?.(j);
  };
  return /* @__PURE__ */ q.jsx(
    gd.Provider,
    {
      value: { value: M, name: O, onChange: R },
      children: /* @__PURE__ */ q.jsx("div", { className: "radio-group", children: g })
    }
  );
}, Bn = ({
  value: g,
  children: O
}) => {
  const { value: D, name: r, onChange: M } = I.useContext(gd);
  return /* @__PURE__ */ q.jsxs("label", { className: "radio", children: [
    /* @__PURE__ */ q.jsx(
      "input",
      {
        type: "radio",
        name: r,
        value: g,
        checked: D === g,
        onChange: (B) => M(B.target.value)
      }
    ),
    /* @__PURE__ */ q.jsx("span", { children: O })
  ] });
}, Sd = "searchBookmarkSetting", vh = () => {
  const [g, O] = I.useState(!0), [D, r] = I.useState({
    openNewTab: "1",
    searchRule: ["url", "title", "parentTitle"],
    useDefaultSearch: "0"
  }), [M, B] = I.useState(!1), R = async () => {
    if (!M) {
      B(!0);
      try {
        await chrome.storage.local.set({ searchBookmarkSetting: D }), await chrome.notifications.create({
          type: "basic",
          iconUrl: "icons/icon.png",
          title: "提示",
          message: "设置已保存"
        });
      } finally {
        B(!1);
      }
    }
  }, j = (z) => {
    r({ ...D, ...z });
  };
  return I.useEffect(() => {
    Yn(Sd).then((z) => {
      z && r({ ...D, ...z }), O(!1);
    });
  }, []), !g && /* @__PURE__ */ q.jsxs("div", { className: "setting__container", children: [
    /* @__PURE__ */ q.jsxs("div", { className: "setting__content", children: [
      /* @__PURE__ */ q.jsx(
        ni,
        {
          label: "是否打开已存在匹配的标签页",
          tips: "按住 Ctrl/Command 键可以强制新窗口打开",
          children: /* @__PURE__ */ q.jsxs(
            hd,
            {
              name: "openNewTab",
              value: D.openNewTab,
              onChange: (z) => j({ openNewTab: z }),
              children: [
                /* @__PURE__ */ q.jsx(Bn, { value: "1", children: "是（通过匹配域名查找已打开页面）" }),
                /* @__PURE__ */ q.jsx(Bn, { value: "0", children: "否" })
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ q.jsx(ni, { label: "搜索规则", children: /* @__PURE__ */ q.jsx(
        dh,
        {
          name: "searchRule",
          value: D.searchRule,
          onChange: (z) => j({
            searchRule: z
          }),
          options: [
            { name: "标题", value: "title" },
            { name: "父文件夹标题", value: "parentTitle" },
            { name: "URL", value: "url" }
          ]
        }
      ) }),
      /* @__PURE__ */ q.jsx(ni, { label: "书签不存在时是否使用默认搜索引擎搜索关键字", children: /* @__PURE__ */ q.jsxs(
        hd,
        {
          name: "useDefaultSearch",
          value: D.useDefaultSearch,
          onChange: (z) => j({ useDefaultSearch: z }),
          children: [
            /* @__PURE__ */ q.jsx(Bn, { value: "0", children: "否" }),
            /* @__PURE__ */ q.jsx(Bn, { value: "1", children: "是" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ q.jsx("div", { className: "setting__footer", children: /* @__PURE__ */ q.jsx("div", { className: "submit-button", onClick: R, children: "保存设置" }) })
  ] });
}, hh = () => {
  const [g, O] = I.useState({
    openNewTab: "1",
    searchRule: ["url", "title", "parentTitle"],
    useDefaultSearch: "0"
  }), D = async () => {
    const r = await Yn(Sd);
    r && O({
      ...g,
      ...r
    });
  };
  return I.useEffect(() => {
    D();
  }, []), {
    setting: g
  };
}, bd = "bookMarkSearch", yh = 10, mh = (g) => {
  const O = new URL(chrome.runtime.getURL("/_favicon/"));
  return O.searchParams.set("pageUrl", g), O.searchParams.set("size", "24"), O.toString();
}, Td = (g, O = "") => {
  const D = [];
  for (const r of g) {
    const M = O ? `${O}/${r.title}` : r.title;
    r.url && r.title ? D.push({
      url: r.url,
      title: r.title,
      id: r.id,
      parentId: r.parentId,
      parentTitle: M,
      faviconURL: mh(r.url)
    }) : Array.isArray(r.children) && D.push(
      ...Td(r.children, M)
    );
  }
  return D;
}, gh = async () => {
  try {
    const [g, O] = await Promise.all([
      Td(await chrome.bookmarks.getTree()),
      md()
    ]);
    return [...g, ...O];
  } catch (g) {
    return console.error(g), [];
  }
}, Sh = () => Yn(bd, []), bh = (g, O) => g && O ? O.toLowerCase().includes(g.toLowerCase()) : !1, Ed = () => {
  window.close();
}, Th = () => {
  const [g, O] = I.useState([]), [D, r] = I.useState([]), [M, B] = I.useState(!1), [R, j] = I.useState(""), [z, S] = I.useState([]), [x, w] = I.useState(""), { setting: P } = hh();
  I.useEffect(() => {
    if (!R) {
      S(D), w(D[0]?.id || "");
      return;
    }
    const C = P.searchRule || ["url", "title", "parentTitle"], ml = Array.from({
      length: C.length
    }), vl = /* @__PURE__ */ new Set(), cl = (V) => g.filter((_l) => {
      if (vl.has(_l.id))
        return !1;
      const ol = bh(R, Reflect.get(_l, V));
      return ol && vl.add(_l.id), ol;
    }).sort((_l, ol) => {
      const hl = Reflect.get(_l, V) || "", Hl = Reflect.get(ol, V) || "", wl = R.toLowerCase();
      if (V === "title")
        return hl.length - Hl.length;
      if (V === "url") {
        const Ml = hl.toLowerCase().indexOf(wl), Rl = Hl.toLowerCase().indexOf(wl);
        return Ml - Rl;
      }
      return 0;
    }), Sl = ml.reduce(
      (V, _l, ol) => {
        const hl = C[ol], Hl = cl(hl);
        return Hl.length && V.push(...Hl), V;
      },
      []
    );
    S(Sl), w(Sl[0]?.id || "");
  }, [R, g, D, P.searchRule]), I.useEffect(() => {
    B(!0), Promise.all([gh(), Sh()]).then(
      ([C, ml]) => {
        O(C);
        const vl = new Map(C.map((Sl) => [Sl.id, Sl])), cl = (ml || []).reduce(
          (Sl, V) => (vl.has(V) && Sl.push(vl.get(V)), Sl),
          []
        );
        r(cl), cl.length && (w(cl[0].id), S(cl)), B(!1);
      }
    );
  }, []);
  const [gl, Nl] = I.useState(!1);
  return {
    loading: M,
    keyword: R,
    setKeyword: j,
    searchBookmarks: z,
    selectedId: x,
    setSelectedId: w,
    open: async (C, ml) => {
      const vl = await chrome.tabs.query({
        active: !0,
        currentWindow: !0
      }), cl = vl[0]?.url || "", Sl = ["about:blank", "chrome://newtab/"].includes(cl);
      try {
        if (gl)
          return;
        const { useDefaultSearch: V, openNewTab: _l } = P;
        if (!C && R && +V == 1)
          await chrome.search.query({
            disposition: "NEW_TAB",
            text: R
          });
        else {
          const ol = g.find((Ml) => Ml.id === C);
          if (!ol)
            return;
          const hl = [...D], Hl = hl.findIndex((Ml) => Ml.id === C);
          Hl > -1 && hl.splice(Hl, 1), hl.unshift(ol), hl.length > yh && hl.pop(), r(hl), await ih(
            bd,
            hl.map((Ml) => Ml.id)
          );
          let wl;
          if (!ml && +_l == 1) {
            const Ml = await chrome.tabs.query({}), Rl = fi(ol.url);
            Ml?.length && Rl && (wl = rh(Ml, ol.url));
          }
          wl ? await Promise.all([
            // 切换激活的tab
            chrome.tabs.update(wl.id, { active: !0 }),
            () => {
              wl.windowId && chrome.windows.update(wl.windowId, { focused: !0 });
            }
          ]) : Sl ? await chrome.tabs.update(vl[0].id, { url: ol.url }) : await chrome.tabs.create({ url: ol.url });
        }
        Ed(), Nl(!0);
      } catch (V) {
        console.error(V), alert(
          "出现未知错误,请刷新重试，或者提交issue至：https://github.com/llxq/bookmark-search/issues"
        );
      }
    }
  };
};
function ci(g) {
  const O = I.useRef(g);
  return I.useEffect(() => {
    O.current = g;
  }, [g]), O;
}
const Eh = () => {
  const g = I.useRef(null), [O, D] = I.useState(!1), r = ci(O), M = I.useRef(null), {
    keyword: B,
    setKeyword: R,
    searchBookmarks: j,
    open: z,
    selectedId: S,
    setSelectedId: x
  } = Th(), w = ci(j), P = ci(S), [gl, Nl] = I.useState({ top: 0, height: 0 }), Jl = I.useCallback((C) => {
    if (r.current)
      return;
    if (C.key === "Escape") {
      Ed();
      return;
    }
    const ml = w.current.findIndex(
      (vl) => vl.id === P.current
    );
    if (ml > -1) {
      if (C.key === "ArrowUp") {
        const vl = ml === 0 ? w.current.length - 1 : ml - 1;
        x(w.current[vl].id), C.preventDefault();
      }
      if (C.key === "ArrowDown") {
        const vl = ml === w.current.length - 1 ? 0 : ml + 1;
        x(w.current[vl].id), C.preventDefault();
      }
    }
  }, []);
  return I.useLayoutEffect(() => (window.addEventListener("keydown", Jl), Nl(
    M.current?.getBoundingClientRect() ?? {
      top: 0,
      height: 0
    }
  ), () => {
    window.removeEventListener("keydown", Jl);
  }), []), I.useEffect(() => {
    const C = document.querySelector(`[data-id="${S}"]`);
    if (C) {
      const { top: ml, height: vl } = C.getBoundingClientRect(), { top: cl, height: Sl } = gl;
      ml >= cl ? ml + vl <= cl + Sl || C.scrollIntoView({
        block: "end"
      }) : C.scrollIntoView({
        block: "start"
      });
    }
  }, [S, P]), /* @__PURE__ */ q.jsxs("div", { className: "search__container", children: [
    /* @__PURE__ */ q.jsxs("div", { className: "search__input-container", children: [
      /* @__PURE__ */ q.jsx("div", { className: "tips", children: "Enter 打开选中项、Esc 取消、↑ 或 ↓ 切换选中项" }),
      /* @__PURE__ */ q.jsx(
        "input",
        {
          placeholder: "请输入要搜索的关键字",
          type: "text",
          autoComplete: "off",
          className: "search__input",
          autoFocus: !0,
          ref: g,
          value: B,
          onChange: (C) => R(C.target.value),
          onCompositionStart: () => D(!0),
          onCompositionEnd: () => D(!1),
          onKeyDown: (C) => {
            !O && C.key === "Enter" && (z(S, C.metaKey || C.ctrlKey), C.preventDefault());
          }
        }
      )
    ] }),
    /* @__PURE__ */ q.jsx("div", { className: "search__result-container", children: /* @__PURE__ */ q.jsx("div", { className: "search__list", ref: M, children: j.map((C) => /* @__PURE__ */ q.jsxs(
      "div",
      {
        onClick: (ml) => z(C.id, ml.metaKey || ml.ctrlKey),
        className: `search__list-item ${S === C.id ? "search__list-item-active" : ""}`,
        "data-id": C.id,
        title: C.title,
        children: [
          C.faviconURL && /* @__PURE__ */ q.jsx(
            "img",
            {
              className: "search__list-item-favicon",
              src: C.faviconURL,
              alt: C.title
            }
          ),
          C.title
        ]
      },
      C.id
    )) }) })
  ] });
}, _h = ({
  setTemporaryData: g
}) => {
  const [O, D] = I.useState([]);
  I.useEffect(() => {
    md().then((R) => {
      D(R.sort((j, z) => z.createdTime - j.createdTime));
    });
  }, []);
  const r = (R) => {
    uh.delete(R.id).then(() => {
      eh("删除成功");
    }), D(O.filter((j) => j.id !== R.id));
  }, M = (R) => {
    if (!R)
      return "";
    const j = (S) => S < 10 ? `0${S}` : `${S}`, z = new Date(R);
    return `${z.getFullYear()}-${j(
      z.getMonth() + 1
    )}-${j(z.getDate())} ${j(z.getHours())}:${j(
      z.getMinutes()
    )}:${j(z.getSeconds())}`;
  }, B = (R) => {
    g(R);
  };
  return O.length ? /* @__PURE__ */ q.jsx("div", { className: "temporary-data__container", children: /* @__PURE__ */ q.jsx("div", { className: "temporary-data__list", children: O.map((R) => /* @__PURE__ */ q.jsxs("div", { className: "temporary-data__list-item-wrapper", children: [
    /* @__PURE__ */ q.jsxs(
      "div",
      {
        className: "temporary-data__list-item",
        title: R.title,
        onClick: () => {
          chrome.tabs.create({
            url: R.url
          });
        },
        children: [
          R.faviconURL && /* @__PURE__ */ q.jsx(
            "img",
            {
              className: "temporary-data__list-item-favicon",
              src: R.faviconURL,
              alt: R.title
            }
          ),
          R.title
        ]
      },
      R.id
    ),
    /* @__PURE__ */ q.jsx("div", { className: "create-time", children: M(R.createdTime) }),
    /* @__PURE__ */ q.jsxs("div", { className: "temporary-data__item-operation", children: [
      /* @__PURE__ */ q.jsx(
        "div",
        {
          className: "edit-btn is-button",
          onClick: () => B(R),
          children: "编辑"
        }
      ),
      /* @__PURE__ */ q.jsx(
        "div",
        {
          className: "delete-btn is-button",
          onClick: () => r(R),
          children: "删除"
        }
      )
    ] })
  ] })) }) }) : /* @__PURE__ */ q.jsx("div", { className: "temporary-data__is-empty", children: "暂无数据" });
}, yd = [
  {
    name: "搜索",
    key: "search",
    component: () => /* @__PURE__ */ q.jsx(Eh, {})
  },
  {
    name: "设置",
    key: "setting",
    component: () => /* @__PURE__ */ q.jsx(vh, {})
  },
  {
    name: "临时书签管理",
    key: "temporary",
    component: (g) => /* @__PURE__ */ q.jsx(_h, { setTemporaryData: g })
  }
], Ah = () => {
  const [g, O] = I.useState("search"), [D, r] = I.useState(void 0);
  return I.useEffect(() => {
    Yn(dd).then((M) => {
      M && (Date.now() - M._t > 2 * 1e3 ? sh(dd) : r(M));
    });
  }, []), D ? /* @__PURE__ */ q.jsx(oh, { data: D, setTemporaryData: r }) : /* @__PURE__ */ q.jsxs("div", { className: "layout__container", children: [
    /* @__PURE__ */ q.jsx("div", { className: "layout__header", children: yd.map((M) => /* @__PURE__ */ q.jsx(
      "div",
      {
        className: `layout__tab ${M.key === g ? "active" : ""}`,
        onClick: () => O(M.key),
        children: M.name
      },
      M.key
    )) }),
    /* @__PURE__ */ q.jsx("div", { className: "layout__content", children: yd.find((M) => M.key === g)?.component(r) })
  ] });
};
Pv.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ q.jsx(I.StrictMode, { children: /* @__PURE__ */ q.jsx(Ah, {}) })
);
