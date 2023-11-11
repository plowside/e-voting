function B1(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n];
		if (typeof r != "string" && !Array.isArray(r)) {
			for (const i in r)
				if (i !== "default" && !(i in e)) {
					const l = Object.getOwnPropertyDescriptor(r, i);
					l && Object.defineProperty(e, i, l.get ? l : {
						enumerable: !0,
						get: () => r[i]
					})
				}
		}
	}
	return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
		value: "Module"
	}))
}(function() {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
	new MutationObserver(i => {
		for (const l of i)
			if (l.type === "childList")
				for (const o of l.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
	}).observe(document, {
		childList: !0,
		subtree: !0
	});

	function n(i) {
		const l = {};
		return i.integrity && (l.integrity = i.integrity), i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? l.credentials = "include" : i.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l
	}

	function r(i) {
		if (i.ep) return;
		i.ep = !0;
		const l = n(i);
		fetch(i.href, l)
	}
})();

function nc(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var jp = {
		exports: {}
	},
	as = {},
	Pp = {
		exports: {}
	},
	Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fl = Symbol.for("react.element"),
	U1 = Symbol.for("react.portal"),
	V1 = Symbol.for("react.fragment"),
	$1 = Symbol.for("react.strict_mode"),
	H1 = Symbol.for("react.profiler"),
	W1 = Symbol.for("react.provider"),
	q1 = Symbol.for("react.context"),
	Z1 = Symbol.for("react.forward_ref"),
	Q1 = Symbol.for("react.suspense"),
	G1 = Symbol.for("react.memo"),
	Y1 = Symbol.for("react.lazy"),
	Rf = Symbol.iterator;

function X1(e) {
	return e === null || typeof e != "object" ? null : (e = Rf && e[Rf] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Ip = {
		isMounted: function() {
			return !1
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	},
	Lp = Object.assign,
	Mp = {};

function ri(e, t, n) {
	this.props = e, this.context = t, this.refs = Mp, this.updater = n || Ip
}
ri.prototype.isReactComponent = {};
ri.prototype.setState = function(e, t) {
	if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
	this.updater.enqueueSetState(this, e, t, "setState")
};
ri.prototype.forceUpdate = function(e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Dp() {}
Dp.prototype = ri.prototype;

function rc(e, t, n) {
	this.props = e, this.context = t, this.refs = Mp, this.updater = n || Ip
}
var ic = rc.prototype = new Dp;
ic.constructor = rc;
Lp(ic, ri.prototype);
ic.isPureReactComponent = !0;
var zf = Array.isArray,
	Rp = Object.prototype.hasOwnProperty,
	lc = {
		current: null
	},
	zp = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};

function Fp(e, t, n) {
	var r, i = {},
		l = null,
		o = null;
	if (t != null)
		for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (l = "" + t.key), t) Rp.call(t, r) && !zp.hasOwnProperty(r) && (i[r] = t[r]);
	var s = arguments.length - 2;
	if (s === 1) i.children = n;
	else if (1 < s) {
		for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
		i.children = a
	}
	if (e && e.defaultProps)
		for (r in s = e.defaultProps, s) i[r] === void 0 && (i[r] = s[r]);
	return {
		$$typeof: fl,
		type: e,
		key: l,
		ref: o,
		props: i,
		_owner: lc.current
	}
}

function J1(e, t) {
	return {
		$$typeof: fl,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner
	}
}

function oc(e) {
	return typeof e == "object" && e !== null && e.$$typeof === fl
}

function K1(e) {
	var t = {
		"=": "=0",
		":": "=2"
	};
	return "$" + e.replace(/[=:]/g, function(n) {
		return t[n]
	})
}
var Ff = /\/+/g;

function Us(e, t) {
	return typeof e == "object" && e !== null && e.key != null ? K1("" + e.key) : t.toString(36)
}

function no(e, t, n, r, i) {
	var l = typeof e;
	(l === "undefined" || l === "boolean") && (e = null);
	var o = !1;
	if (e === null) o = !0;
	else switch (l) {
		case "string":
		case "number":
			o = !0;
			break;
		case "object":
			switch (e.$$typeof) {
				case fl:
				case U1:
					o = !0
			}
	}
	if (o) return o = e, i = i(o), e = r === "" ? "." + Us(o, 0) : r, zf(i) ? (n = "", e != null && (n = e.replace(Ff, "$&/") + "/"), no(i, t, n, "", function(u) {
		return u
	})) : i != null && (oc(i) && (i = J1(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(Ff, "$&/") + "/") + e)), t.push(i)), 1;
	if (o = 0, r = r === "" ? "." : r + ":", zf(e))
		for (var s = 0; s < e.length; s++) {
			l = e[s];
			var a = r + Us(l, s);
			o += no(l, t, n, a, i)
		} else if (a = X1(e), typeof a == "function")
			for (e = a.call(e), s = 0; !(l = e.next()).done;) l = l.value, a = r + Us(l, s++), o += no(l, t, n, a, i);
		else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
	return o
}

function Ol(e, t, n) {
	if (e == null) return e;
	var r = [],
		i = 0;
	return no(e, r, "", "", function(l) {
		return t.call(n, l, i++)
	}), r
}

function ex(e) {
	if (e._status === -1) {
		var t = e._result;
		t = t(), t.then(function(n) {
			(e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
		}, function(n) {
			(e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
		}), e._status === -1 && (e._status = 0, e._result = t)
	}
	if (e._status === 1) return e._result.default;
	throw e._result
}
var Xe = {
		current: null
	},
	ro = {
		transition: null
	},
	tx = {
		ReactCurrentDispatcher: Xe,
		ReactCurrentBatchConfig: ro,
		ReactCurrentOwner: lc
	};
Q.Children = {
	map: Ol,
	forEach: function(e, t, n) {
		Ol(e, function() {
			t.apply(this, arguments)
		}, n)
	},
	count: function(e) {
		var t = 0;
		return Ol(e, function() {
			t++
		}), t
	},
	toArray: function(e) {
		return Ol(e, function(t) {
			return t
		}) || []
	},
	only: function(e) {
		if (!oc(e)) throw Error("React.Children.only expected to receive a single React element child.");
		return e
	}
};
Q.Component = ri;
Q.Fragment = V1;
Q.Profiler = H1;
Q.PureComponent = rc;
Q.StrictMode = $1;
Q.Suspense = Q1;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tx;
Q.cloneElement = function(e, t, n) {
	if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
	var r = Lp({}, e.props),
		i = e.key,
		l = e.ref,
		o = e._owner;
	if (t != null) {
		if (t.ref !== void 0 && (l = t.ref, o = lc.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
		for (a in t) Rp.call(t, a) && !zp.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a])
	}
	var a = arguments.length - 2;
	if (a === 1) r.children = n;
	else if (1 < a) {
		s = Array(a);
		for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
		r.children = s
	}
	return {
		$$typeof: fl,
		type: e.type,
		key: i,
		ref: l,
		props: r,
		_owner: o
	}
};
Q.createContext = function(e) {
	return e = {
		$$typeof: q1,
		_currentValue: e,
		_currentValue2: e,
		_threadCount: 0,
		Provider: null,
		Consumer: null,
		_defaultValue: null,
		_globalName: null
	}, e.Provider = {
		$$typeof: W1,
		_context: e
	}, e.Consumer = e
};
Q.createElement = Fp;
Q.createFactory = function(e) {
	var t = Fp.bind(null, e);
	return t.type = e, t
};
Q.createRef = function() {
	return {
		current: null
	}
};
Q.forwardRef = function(e) {
	return {
		$$typeof: Z1,
		render: e
	}
};
Q.isValidElement = oc;
Q.lazy = function(e) {
	return {
		$$typeof: Y1,
		_payload: {
			_status: -1,
			_result: e
		},
		_init: ex
	}
};
Q.memo = function(e, t) {
	return {
		$$typeof: G1,
		type: e,
		compare: t === void 0 ? null : t
	}
};
Q.startTransition = function(e) {
	var t = ro.transition;
	ro.transition = {};
	try {
		e()
	} finally {
		ro.transition = t
	}
};
Q.unstable_act = function() {
	throw Error("act(...) is not supported in production builds of React.")
};
Q.useCallback = function(e, t) {
	return Xe.current.useCallback(e, t)
};
Q.useContext = function(e) {
	return Xe.current.useContext(e)
};
Q.useDebugValue = function() {};
Q.useDeferredValue = function(e) {
	return Xe.current.useDeferredValue(e)
};
Q.useEffect = function(e, t) {
	return Xe.current.useEffect(e, t)
};
Q.useId = function() {
	return Xe.current.useId()
};
Q.useImperativeHandle = function(e, t, n) {
	return Xe.current.useImperativeHandle(e, t, n)
};
Q.useInsertionEffect = function(e, t) {
	return Xe.current.useInsertionEffect(e, t)
};
Q.useLayoutEffect = function(e, t) {
	return Xe.current.useLayoutEffect(e, t)
};
Q.useMemo = function(e, t) {
	return Xe.current.useMemo(e, t)
};
Q.useReducer = function(e, t, n) {
	return Xe.current.useReducer(e, t, n)
};
Q.useRef = function(e) {
	return Xe.current.useRef(e)
};
Q.useState = function(e) {
	return Xe.current.useState(e)
};
Q.useSyncExternalStore = function(e, t, n) {
	return Xe.current.useSyncExternalStore(e, t, n)
};
Q.useTransition = function() {
	return Xe.current.useTransition()
};
Q.version = "18.2.0";
Pp.exports = Q;
var T = Pp.exports;
const An = nc(T),
	nx = B1({
		__proto__: null,
		default: An
	}, [T]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rx = T,
	ix = Symbol.for("react.element"),
	lx = Symbol.for("react.fragment"),
	ox = Object.prototype.hasOwnProperty,
	sx = rx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	ax = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};

function _p(e, t, n) {
	var r, i = {},
		l = null,
		o = null;
	n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (o = t.ref);
	for (r in t) ox.call(t, r) && !ax.hasOwnProperty(r) && (i[r] = t[r]);
	if (e && e.defaultProps)
		for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
	return {
		$$typeof: ix,
		type: e,
		key: l,
		ref: o,
		props: i,
		_owner: sx.current
	}
}
as.Fragment = lx;
as.jsx = _p;
as.jsxs = _p;
jp.exports = as;
var g = jp.exports,
	Ba = {},
	Bp = {
		exports: {}
	},
	mt = {},
	Up = {
		exports: {}
	},
	Vp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
	function t(M, U) {
		var v = M.length;
		M.push(U);
		e: for (; 0 < v;) {
			var Y = v - 1 >>> 1,
				ie = M[Y];
			if (0 < i(ie, U)) M[Y] = U, M[v] = ie, v = Y;
			else break e
		}
	}

	function n(M) {
		return M.length === 0 ? null : M[0]
	}

	function r(M) {
		if (M.length === 0) return null;
		var U = M[0],
			v = M.pop();
		if (v !== U) {
			M[0] = v;
			e: for (var Y = 0, ie = M.length, k = ie >>> 1; Y < k;) {
				var be = 2 * (Y + 1) - 1,
					ot = M[be],
					ce = be + 1,
					ae = M[ce];
				if (0 > i(ot, v)) ce < ie && 0 > i(ae, ot) ? (M[Y] = ae, M[ce] = v, Y = ce) : (M[Y] = ot, M[be] = v, Y = be);
				else if (ce < ie && 0 > i(ae, v)) M[Y] = ae, M[ce] = v, Y = ce;
				else break e
			}
		}
		return U
	}

	function i(M, U) {
		var v = M.sortIndex - U.sortIndex;
		return v !== 0 ? v : M.id - U.id
	}
	if (typeof performance == "object" && typeof performance.now == "function") {
		var l = performance;
		e.unstable_now = function() {
			return l.now()
		}
	} else {
		var o = Date,
			s = o.now();
		e.unstable_now = function() {
			return o.now() - s
		}
	}
	var a = [],
		u = [],
		c = 1,
		f = null,
		h = 3,
		d = !1,
		p = !1,
		x = !1,
		S = typeof setTimeout == "function" ? setTimeout : null,
		m = typeof clearTimeout == "function" ? clearTimeout : null,
		y = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

	function w(M) {
		for (var U = n(u); U !== null;) {
			if (U.callback === null) r(u);
			else if (U.startTime <= M) r(u), U.sortIndex = U.expirationTime, t(a, U);
			else break;
			U = n(u)
		}
	}

	function N(M) {
		if (x = !1, w(M), !p)
			if (n(a) !== null) p = !0, Se(b);
			else {
				var U = n(u);
				U !== null && xe(N, U.startTime - M)
			}
	}

	function b(M, U) {
		p = !1, x && (x = !1, m(L), L = -1), d = !0;
		var v = h;
		try {
			for (w(U), f = n(a); f !== null && (!(f.expirationTime > U) || M && !z());) {
				var Y = f.callback;
				if (typeof Y == "function") {
					f.callback = null, h = f.priorityLevel;
					var ie = Y(f.expirationTime <= U);
					U = e.unstable_now(), typeof ie == "function" ? f.callback = ie : f === n(a) && r(a), w(U)
				} else r(a);
				f = n(a)
			}
			if (f !== null) var k = !0;
			else {
				var be = n(u);
				be !== null && xe(N, be.startTime - U), k = !1
			}
			return k
		} finally {
			f = null, h = v, d = !1
		}
	}
	var E = !1,
		j = null,
		L = -1,
		B = 5,
		C = -1;

	function z() {
		return !(e.unstable_now() - C < B)
	}

	function F() {
		if (j !== null) {
			var M = e.unstable_now();
			C = M;
			var U = !0;
			try {
				U = j(!0, M)
			} finally {
				U ? G() : (E = !1, j = null)
			}
		} else E = !1
	}
	var G;
	if (typeof y == "function") G = function() {
		y(F)
	};
	else if (typeof MessageChannel < "u") {
		var se = new MessageChannel,
			q = se.port2;
		se.port1.onmessage = F, G = function() {
			q.postMessage(null)
		}
	} else G = function() {
		S(F, 0)
	};

	function Se(M) {
		j = M, E || (E = !0, G())
	}

	function xe(M, U) {
		L = S(function() {
			M(e.unstable_now())
		}, U)
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
		M.callback = null
	}, e.unstable_continueExecution = function() {
		p || d || (p = !0, Se(b))
	}, e.unstable_forceFrameRate = function(M) {
		0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < M ? Math.floor(1e3 / M) : 5
	}, e.unstable_getCurrentPriorityLevel = function() {
		return h
	}, e.unstable_getFirstCallbackNode = function() {
		return n(a)
	}, e.unstable_next = function(M) {
		switch (h) {
			case 1:
			case 2:
			case 3:
				var U = 3;
				break;
			default:
				U = h
		}
		var v = h;
		h = U;
		try {
			return M()
		} finally {
			h = v
		}
	}, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(M, U) {
		switch (M) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				break;
			default:
				M = 3
		}
		var v = h;
		h = M;
		try {
			return U()
		} finally {
			h = v
		}
	}, e.unstable_scheduleCallback = function(M, U, v) {
		var Y = e.unstable_now();
		switch (typeof v == "object" && v !== null ? (v = v.delay, v = typeof v == "number" && 0 < v ? Y + v : Y) : v = Y, M) {
			case 1:
				var ie = -1;
				break;
			case 2:
				ie = 250;
				break;
			case 5:
				ie = 1073741823;
				break;
			case 4:
				ie = 1e4;
				break;
			default:
				ie = 5e3
		}
		return ie = v + ie, M = {
			id: c++,
			callback: U,
			priorityLevel: M,
			startTime: v,
			expirationTime: ie,
			sortIndex: -1
		}, v > Y ? (M.sortIndex = v, t(u, M), n(a) === null && M === n(u) && (x ? (m(L), L = -1) : x = !0, xe(N, v - Y))) : (M.sortIndex = ie, t(a, M), p || d || (p = !0, Se(b))), M
	}, e.unstable_shouldYield = z, e.unstable_wrapCallback = function(M) {
		var U = h;
		return function() {
			var v = h;
			h = U;
			try {
				return M.apply(this, arguments)
			} finally {
				h = v
			}
		}
	}
})(Vp);
Up.exports = Vp;
var ux = Up.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $p = T,
	pt = ux;

function P(e) {
	for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
	return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Hp = new Set,
	qi = {};

function pr(e, t) {
	Qr(e, t), Qr(e + "Capture", t)
}

function Qr(e, t) {
	for (qi[e] = t, e = 0; e < t.length; e++) Hp.add(t[e])
}
var sn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
	Ua = Object.prototype.hasOwnProperty,
	cx = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	_f = {},
	Bf = {};

function fx(e) {
	return Ua.call(Bf, e) ? !0 : Ua.call(_f, e) ? !1 : cx.test(e) ? Bf[e] = !0 : (_f[e] = !0, !1)
}

function dx(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case "function":
		case "symbol":
			return !0;
		case "boolean":
			return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
		default:
			return !1
	}
}

function hx(e, t, n, r) {
	if (t === null || typeof t > "u" || dx(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null) switch (n.type) {
		case 3:
			return !t;
		case 4:
			return t === !1;
		case 5:
			return isNaN(t);
		case 6:
			return isNaN(t) || 1 > t
	}
	return !1
}

function Je(e, t, n, r, i, l, o) {
	this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = o
}
var _e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
	_e[e] = new Je(e, 0, !1, e, null, !1, !1)
});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"]
].forEach(function(e) {
	var t = e[0];
	_e[t] = new Je(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
	_e[e] = new Je(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
	_e[e] = new Je(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
	_e[e] = new Je(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
	_e[e] = new Je(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
	_e[e] = new Je(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
	_e[e] = new Je(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
	_e[e] = new Je(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var sc = /[\-:]([a-z])/g;

function ac(e) {
	return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
	var t = e.replace(sc, ac);
	_e[t] = new Je(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
	var t = e.replace(sc, ac);
	_e[t] = new Je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
	var t = e.replace(sc, ac);
	_e[t] = new Je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
	_e[e] = new Je(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
_e.xlinkHref = new Je("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
	_e[e] = new Je(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function uc(e, t, n, r) {
	var i = _e.hasOwnProperty(t) ? _e[t] : null;
	(i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (hx(t, n, i, r) && (n = null), r || i === null ? fx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var dn = $p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	Al = Symbol.for("react.element"),
	Or = Symbol.for("react.portal"),
	Ar = Symbol.for("react.fragment"),
	cc = Symbol.for("react.strict_mode"),
	Va = Symbol.for("react.profiler"),
	Wp = Symbol.for("react.provider"),
	qp = Symbol.for("react.context"),
	fc = Symbol.for("react.forward_ref"),
	$a = Symbol.for("react.suspense"),
	Ha = Symbol.for("react.suspense_list"),
	dc = Symbol.for("react.memo"),
	vn = Symbol.for("react.lazy"),
	Zp = Symbol.for("react.offscreen"),
	Uf = Symbol.iterator;

function mi(e) {
	return e === null || typeof e != "object" ? null : (e = Uf && e[Uf] || e["@@iterator"], typeof e == "function" ? e : null)
}
var ke = Object.assign,
	Vs;

function Ti(e) {
	if (Vs === void 0) try {
		throw Error()
	} catch (n) {
		var t = n.stack.trim().match(/\n( *(at )?)/);
		Vs = t && t[1] || ""
	}
	return `
` + Vs + e
}
var $s = !1;

function Hs(e, t) {
	if (!e || $s) return "";
	$s = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (t = function() {
					throw Error()
				}, Object.defineProperty(t.prototype, "props", {
					set: function() {
						throw Error()
					}
				}), typeof Reflect == "object" && Reflect.construct) {
				try {
					Reflect.construct(t, [])
				} catch (u) {
					var r = u
				}
				Reflect.construct(e, [], t)
			} else {
				try {
					t.call()
				} catch (u) {
					r = u
				}
				e.call(t.prototype)
			}
		else {
			try {
				throw Error()
			} catch (u) {
				r = u
			}
			e()
		}
	} catch (u) {
		if (u && r && typeof u.stack == "string") {
			for (var i = u.stack.split(`
`), l = r.stack.split(`
`), o = i.length - 1, s = l.length - 1; 1 <= o && 0 <= s && i[o] !== l[s];) s--;
			for (; 1 <= o && 0 <= s; o--, s--)
				if (i[o] !== l[s]) {
					if (o !== 1 || s !== 1)
						do
							if (o--, s--, 0 > s || i[o] !== l[s]) {
								var a = `
` + i[o].replace(" at new ", " at ");
								return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a
							} while (1 <= o && 0 <= s);
					break
				}
		}
	} finally {
		$s = !1, Error.prepareStackTrace = n
	}
	return (e = e ? e.displayName || e.name : "") ? Ti(e) : ""
}

function px(e) {
	switch (e.tag) {
		case 5:
			return Ti(e.type);
		case 16:
			return Ti("Lazy");
		case 13:
			return Ti("Suspense");
		case 19:
			return Ti("SuspenseList");
		case 0:
		case 2:
		case 15:
			return e = Hs(e.type, !1), e;
		case 11:
			return e = Hs(e.type.render, !1), e;
		case 1:
			return e = Hs(e.type, !0), e;
		default:
			return ""
	}
}

function Wa(e) {
	if (e == null) return null;
	if (typeof e == "function") return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case Ar:
			return "Fragment";
		case Or:
			return "Portal";
		case Va:
			return "Profiler";
		case cc:
			return "StrictMode";
		case $a:
			return "Suspense";
		case Ha:
			return "SuspenseList"
	}
	if (typeof e == "object") switch (e.$$typeof) {
		case qp:
			return (e.displayName || "Context") + ".Consumer";
		case Wp:
			return (e._context.displayName || "Context") + ".Provider";
		case fc:
			var t = e.render;
			return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
		case dc:
			return t = e.displayName || null, t !== null ? t : Wa(e.type) || "Memo";
		case vn:
			t = e._payload, e = e._init;
			try {
				return Wa(e(t))
			} catch {}
	}
	return null
}

function mx(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return "Cache";
		case 9:
			return (t.displayName || "Context") + ".Consumer";
		case 10:
			return (t._context.displayName || "Context") + ".Provider";
		case 18:
			return "DehydratedFragment";
		case 11:
			return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
		case 7:
			return "Fragment";
		case 5:
			return t;
		case 4:
			return "Portal";
		case 3:
			return "Root";
		case 6:
			return "Text";
		case 16:
			return Wa(t);
		case 8:
			return t === cc ? "StrictMode" : "Mode";
		case 22:
			return "Offscreen";
		case 12:
			return "Profiler";
		case 21:
			return "Scope";
		case 13:
			return "Suspense";
		case 19:
			return "SuspenseList";
		case 25:
			return "TracingMarker";
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == "function") return t.displayName || t.name || null;
			if (typeof t == "string") return t
	}
	return null
}

function Bn(e) {
	switch (typeof e) {
		case "boolean":
		case "number":
		case "string":
		case "undefined":
			return e;
		case "object":
			return e;
		default:
			return ""
	}
}

function Qp(e) {
	var t = e.type;
	return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function gx(e) {
	var t = Qp(e) ? "checked" : "value",
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = "" + e[t];
	if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
		var i = n.get,
			l = n.set;
		return Object.defineProperty(e, t, {
			configurable: !0,
			get: function() {
				return i.call(this)
			},
			set: function(o) {
				r = "" + o, l.call(this, o)
			}
		}), Object.defineProperty(e, t, {
			enumerable: n.enumerable
		}), {
			getValue: function() {
				return r
			},
			setValue: function(o) {
				r = "" + o
			},
			stopTracking: function() {
				e._valueTracker = null, delete e[t]
			}
		}
	}
}

function jl(e) {
	e._valueTracker || (e._valueTracker = gx(e))
}

function Gp(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = "";
	return e && (r = Qp(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Eo(e) {
	if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
	try {
		return e.activeElement || e.body
	} catch {
		return e.body
	}
}

function qa(e, t) {
	var n = t.checked;
	return ke({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked
	})
}

function Vf(e, t) {
	var n = t.defaultValue == null ? "" : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	n = Bn(t.value != null ? t.value : n), e._wrapperState = {
		initialChecked: r,
		initialValue: n,
		controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
	}
}

function Yp(e, t) {
	t = t.checked, t != null && uc(e, "checked", t, !1)
}

function Za(e, t) {
	Yp(e, t);
	var n = Bn(t.value),
		r = t.type;
	if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
	else if (r === "submit" || r === "reset") {
		e.removeAttribute("value");
		return
	}
	t.hasOwnProperty("value") ? Qa(e, t.type, n) : t.hasOwnProperty("defaultValue") && Qa(e, t.type, Bn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function $f(e, t, n) {
	if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
		var r = t.type;
		if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
		t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
	}
	n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Qa(e, t, n) {
	(t !== "number" || Eo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Oi = Array.isArray;

function Br(e, t, n, r) {
	if (e = e.options, t) {
		t = {};
		for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
		for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
	} else {
		for (n = "" + Bn(n), t = null, i = 0; i < e.length; i++) {
			if (e[i].value === n) {
				e[i].selected = !0, r && (e[i].defaultSelected = !0);
				return
			}
			t !== null || e[i].disabled || (t = e[i])
		}
		t !== null && (t.selected = !0)
	}
}

function Ga(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
	return ke({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue
	})
}

function Hf(e, t) {
	var n = t.value;
	if (n == null) {
		if (n = t.children, t = t.defaultValue, n != null) {
			if (t != null) throw Error(P(92));
			if (Oi(n)) {
				if (1 < n.length) throw Error(P(93));
				n = n[0]
			}
			t = n
		}
		t == null && (t = ""), n = t
	}
	e._wrapperState = {
		initialValue: Bn(n)
	}
}

function Xp(e, t) {
	var n = Bn(t.value),
		r = Bn(t.defaultValue);
	n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Wf(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Jp(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml"
	}
}

function Ya(e, t) {
	return e == null || e === "http://www.w3.org/1999/xhtml" ? Jp(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Pl, Kp = function(e) {
	return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
		MSApp.execUnsafeLocalFunction(function() {
			return e(t, n, r, i)
		})
	} : e
}(function(e, t) {
	if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
	else {
		for (Pl = Pl || document.createElement("div"), Pl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Pl.firstChild; e.firstChild;) e.removeChild(e.firstChild);
		for (; t.firstChild;) e.appendChild(t.firstChild)
	}
});

function Zi(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return
		}
	}
	e.textContent = t
}
var Li = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0
	},
	yx = ["Webkit", "ms", "Moz", "O"];
Object.keys(Li).forEach(function(e) {
	yx.forEach(function(t) {
		t = t + e.charAt(0).toUpperCase() + e.substring(1), Li[t] = Li[e]
	})
});

function em(e, t, n) {
	return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Li.hasOwnProperty(e) && Li[e] ? ("" + t).trim() : t + "px"
}

function tm(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0,
				i = em(n, t[n], r);
			n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
		}
}
var xx = ke({
	menuitem: !0
}, {
	area: !0,
	base: !0,
	br: !0,
	col: !0,
	embed: !0,
	hr: !0,
	img: !0,
	input: !0,
	keygen: !0,
	link: !0,
	meta: !0,
	param: !0,
	source: !0,
	track: !0,
	wbr: !0
});

function Xa(e, t) {
	if (t) {
		if (xx[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(P(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(P(60));
			if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(P(61))
		}
		if (t.style != null && typeof t.style != "object") throw Error(P(62))
	}
}

function Ja(e, t) {
	if (e.indexOf("-") === -1) return typeof t.is == "string";
	switch (e) {
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
			return !0
	}
}
var Ka = null;

function hc(e) {
	return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var eu = null,
	Ur = null,
	Vr = null;

function qf(e) {
	if (e = pl(e)) {
		if (typeof eu != "function") throw Error(P(280));
		var t = e.stateNode;
		t && (t = hs(t), eu(e.stateNode, e.type, t))
	}
}

function nm(e) {
	Ur ? Vr ? Vr.push(e) : Vr = [e] : Ur = e
}

function rm() {
	if (Ur) {
		var e = Ur,
			t = Vr;
		if (Vr = Ur = null, qf(e), t)
			for (e = 0; e < t.length; e++) qf(t[e])
	}
}

function im(e, t) {
	return e(t)
}

function lm() {}
var Ws = !1;

function om(e, t, n) {
	if (Ws) return e(t, n);
	Ws = !0;
	try {
		return im(e, t, n)
	} finally {
		Ws = !1, (Ur !== null || Vr !== null) && (lm(), rm())
	}
}

function Qi(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = hs(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
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
			(r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
			break e;
		default:
			e = !1
	}
	if (e) return null;
	if (n && typeof n != "function") throw Error(P(231, t, typeof n));
	return n
}
var tu = !1;
if (sn) try {
	var gi = {};
	Object.defineProperty(gi, "passive", {
		get: function() {
			tu = !0
		}
	}), window.addEventListener("test", gi, gi), window.removeEventListener("test", gi, gi)
} catch {
	tu = !1
}

function wx(e, t, n, r, i, l, o, s, a) {
	var u = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, u)
	} catch (c) {
		this.onError(c)
	}
}
var Mi = !1,
	Co = null,
	No = !1,
	nu = null,
	vx = {
		onError: function(e) {
			Mi = !0, Co = e
		}
	};

function kx(e, t, n, r, i, l, o, s, a) {
	Mi = !1, Co = null, wx.apply(vx, arguments)
}

function Sx(e, t, n, r, i, l, o, s, a) {
	if (kx.apply(this, arguments), Mi) {
		if (Mi) {
			var u = Co;
			Mi = !1, Co = null
		} else throw Error(P(198));
		No || (No = !0, nu = u)
	}
}

function mr(e) {
	var t = e,
		n = e;
	if (e.alternate)
		for (; t.return;) t = t.return;
	else {
		e = t;
		do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
	}
	return t.tag === 3 ? n : null
}

function sm(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
	}
	return null
}

function Zf(e) {
	if (mr(e) !== e) throw Error(P(188))
}

function Ex(e) {
	var t = e.alternate;
	if (!t) {
		if (t = mr(e), t === null) throw Error(P(188));
		return t !== e ? null : e
	}
	for (var n = e, r = t;;) {
		var i = n.return;
		if (i === null) break;
		var l = i.alternate;
		if (l === null) {
			if (r = i.return, r !== null) {
				n = r;
				continue
			}
			break
		}
		if (i.child === l.child) {
			for (l = i.child; l;) {
				if (l === n) return Zf(i), e;
				if (l === r) return Zf(i), t;
				l = l.sibling
			}
			throw Error(P(188))
		}
		if (n.return !== r.return) n = i, r = l;
		else {
			for (var o = !1, s = i.child; s;) {
				if (s === n) {
					o = !0, n = i, r = l;
					break
				}
				if (s === r) {
					o = !0, r = i, n = l;
					break
				}
				s = s.sibling
			}
			if (!o) {
				for (s = l.child; s;) {
					if (s === n) {
						o = !0, n = l, r = i;
						break
					}
					if (s === r) {
						o = !0, r = l, n = i;
						break
					}
					s = s.sibling
				}
				if (!o) throw Error(P(189))
			}
		}
		if (n.alternate !== r) throw Error(P(190))
	}
	if (n.tag !== 3) throw Error(P(188));
	return n.stateNode.current === n ? e : t
}

function am(e) {
	return e = Ex(e), e !== null ? um(e) : null
}

function um(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null;) {
		var t = um(e);
		if (t !== null) return t;
		e = e.sibling
	}
	return null
}
var cm = pt.unstable_scheduleCallback,
	Qf = pt.unstable_cancelCallback,
	Cx = pt.unstable_shouldYield,
	Nx = pt.unstable_requestPaint,
	Te = pt.unstable_now,
	bx = pt.unstable_getCurrentPriorityLevel,
	pc = pt.unstable_ImmediatePriority,
	fm = pt.unstable_UserBlockingPriority,
	bo = pt.unstable_NormalPriority,
	Tx = pt.unstable_LowPriority,
	dm = pt.unstable_IdlePriority,
	us = null,
	Zt = null;

function Ox(e) {
	if (Zt && typeof Zt.onCommitFiberRoot == "function") try {
		Zt.onCommitFiberRoot(us, e, void 0, (e.current.flags & 128) === 128)
	} catch {}
}
var Ft = Math.clz32 ? Math.clz32 : Px,
	Ax = Math.log,
	jx = Math.LN2;

function Px(e) {
	return e >>>= 0, e === 0 ? 32 : 31 - (Ax(e) / jx | 0) | 0
}
var Il = 64,
	Ll = 4194304;

function Ai(e) {
	switch (e & -e) {
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
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e
	}
}

function To(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		i = e.suspendedLanes,
		l = e.pingedLanes,
		o = n & 268435455;
	if (o !== 0) {
		var s = o & ~i;
		s !== 0 ? r = Ai(s) : (l &= o, l !== 0 && (r = Ai(l)))
	} else o = n & ~i, o !== 0 ? r = Ai(o) : l !== 0 && (r = Ai(l));
	if (r === 0) return 0;
	if (t !== 0 && t !== r && !(t & i) && (i = r & -r, l = t & -t, i >= l || i === 16 && (l & 4194240) !== 0)) return t;
	if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
		for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Ft(t), i = 1 << n, r |= e[n], t &= ~i;
	return r
}

function Ix(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
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
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1
	}
}

function Lx(e, t) {
	for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, l = e.pendingLanes; 0 < l;) {
		var o = 31 - Ft(l),
			s = 1 << o,
			a = i[o];
		a === -1 ? (!(s & n) || s & r) && (i[o] = Ix(s, t)) : a <= t && (e.expiredLanes |= s), l &= ~s
	}
}

function ru(e) {
	return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function hm() {
	var e = Il;
	return Il <<= 1, !(Il & 4194240) && (Il = 64), e
}

function qs(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t
}

function dl(e, t, n) {
	e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ft(t), e[t] = n
}

function Mx(e, t) {
	var n = e.pendingLanes & ~t;
	e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n;) {
		var i = 31 - Ft(n),
			l = 1 << i;
		t[i] = 0, r[i] = -1, e[i] = -1, n &= ~l
	}
}

function mc(e, t) {
	var n = e.entangledLanes |= t;
	for (e = e.entanglements; n;) {
		var r = 31 - Ft(n),
			i = 1 << r;
		i & t | e[r] & t && (e[r] |= t), n &= ~i
	}
}
var oe = 0;

function pm(e) {
	return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var mm, gc, gm, ym, xm, iu = !1,
	Ml = [],
	jn = null,
	Pn = null,
	In = null,
	Gi = new Map,
	Yi = new Map,
	En = [],
	Dx = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Gf(e, t) {
	switch (e) {
		case "focusin":
		case "focusout":
			jn = null;
			break;
		case "dragenter":
		case "dragleave":
			Pn = null;
			break;
		case "mouseover":
		case "mouseout":
			In = null;
			break;
		case "pointerover":
		case "pointerout":
			Gi.delete(t.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			Yi.delete(t.pointerId)
	}
}

function yi(e, t, n, r, i, l) {
	return e === null || e.nativeEvent !== l ? (e = {
		blockedOn: t,
		domEventName: n,
		eventSystemFlags: r,
		nativeEvent: l,
		targetContainers: [i]
	}, t !== null && (t = pl(t), t !== null && gc(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function Rx(e, t, n, r, i) {
	switch (t) {
		case "focusin":
			return jn = yi(jn, e, t, n, r, i), !0;
		case "dragenter":
			return Pn = yi(Pn, e, t, n, r, i), !0;
		case "mouseover":
			return In = yi(In, e, t, n, r, i), !0;
		case "pointerover":
			var l = i.pointerId;
			return Gi.set(l, yi(Gi.get(l) || null, e, t, n, r, i)), !0;
		case "gotpointercapture":
			return l = i.pointerId, Yi.set(l, yi(Yi.get(l) || null, e, t, n, r, i)), !0
	}
	return !1
}

function wm(e) {
	var t = tr(e.target);
	if (t !== null) {
		var n = mr(t);
		if (n !== null) {
			if (t = n.tag, t === 13) {
				if (t = sm(n), t !== null) {
					e.blockedOn = t, xm(e.priority, function() {
						gm(n)
					});
					return
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return
			}
		}
	}
	e.blockedOn = null
}

function io(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length;) {
		var n = lu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			Ka = r, n.target.dispatchEvent(r), Ka = null
		} else return t = pl(n), t !== null && gc(t), e.blockedOn = n, !1;
		t.shift()
	}
	return !0
}

function Yf(e, t, n) {
	io(e) && n.delete(t)
}

function zx() {
	iu = !1, jn !== null && io(jn) && (jn = null), Pn !== null && io(Pn) && (Pn = null), In !== null && io(In) && (In = null), Gi.forEach(Yf), Yi.forEach(Yf)
}

function xi(e, t) {
	e.blockedOn === t && (e.blockedOn = null, iu || (iu = !0, pt.unstable_scheduleCallback(pt.unstable_NormalPriority, zx)))
}

function Xi(e) {
	function t(i) {
		return xi(i, e)
	}
	if (0 < Ml.length) {
		xi(Ml[0], e);
		for (var n = 1; n < Ml.length; n++) {
			var r = Ml[n];
			r.blockedOn === e && (r.blockedOn = null)
		}
	}
	for (jn !== null && xi(jn, e), Pn !== null && xi(Pn, e), In !== null && xi(In, e), Gi.forEach(t), Yi.forEach(t), n = 0; n < En.length; n++) r = En[n], r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < En.length && (n = En[0], n.blockedOn === null);) wm(n), n.blockedOn === null && En.shift()
}
var $r = dn.ReactCurrentBatchConfig,
	Oo = !0;

function Fx(e, t, n, r) {
	var i = oe,
		l = $r.transition;
	$r.transition = null;
	try {
		oe = 1, yc(e, t, n, r)
	} finally {
		oe = i, $r.transition = l
	}
}

function _x(e, t, n, r) {
	var i = oe,
		l = $r.transition;
	$r.transition = null;
	try {
		oe = 4, yc(e, t, n, r)
	} finally {
		oe = i, $r.transition = l
	}
}

function yc(e, t, n, r) {
	if (Oo) {
		var i = lu(e, t, n, r);
		if (i === null) na(e, t, r, Ao, n), Gf(e, r);
		else if (Rx(i, e, t, n, r)) r.stopPropagation();
		else if (Gf(e, r), t & 4 && -1 < Dx.indexOf(e)) {
			for (; i !== null;) {
				var l = pl(i);
				if (l !== null && mm(l), l = lu(e, t, n, r), l === null && na(e, t, r, Ao, n), l === i) break;
				i = l
			}
			i !== null && r.stopPropagation()
		} else na(e, t, r, null, n)
	}
}
var Ao = null;

function lu(e, t, n, r) {
	if (Ao = null, e = hc(r), e = tr(e), e !== null)
		if (t = mr(e), t === null) e = null;
		else if (n = t.tag, n === 13) {
		if (e = sm(t), e !== null) return e;
		e = null
	} else if (n === 3) {
		if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
		e = null
	} else t !== e && (e = null);
	return Ao = e, null
}

function vm(e) {
	switch (e) {
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
			return 1;
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
		case "toggle":
		case "touchmove":
		case "wheel":
		case "mouseenter":
		case "mouseleave":
		case "pointerenter":
		case "pointerleave":
			return 4;
		case "message":
			switch (bx()) {
				case pc:
					return 1;
				case fm:
					return 4;
				case bo:
				case Tx:
					return 16;
				case dm:
					return 536870912;
				default:
					return 16
			}
		default:
			return 16
	}
}
var bn = null,
	xc = null,
	lo = null;

function km() {
	if (lo) return lo;
	var e, t = xc,
		n = t.length,
		r, i = "value" in bn ? bn.value : bn.textContent,
		l = i.length;
	for (e = 0; e < n && t[e] === i[e]; e++);
	var o = n - e;
	for (r = 1; r <= o && t[n - r] === i[l - r]; r++);
	return lo = i.slice(e, 1 < r ? 1 - r : void 0)
}

function oo(e) {
	var t = e.keyCode;
	return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Dl() {
	return !0
}

function Xf() {
	return !1
}

function gt(e) {
	function t(n, r, i, l, o) {
		this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = l, this.target = o, this.currentTarget = null;
		for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(l) : l[s]);
		return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Dl : Xf, this.isPropagationStopped = Xf, this
	}
	return ke(t.prototype, {
		preventDefault: function() {
			this.defaultPrevented = !0;
			var n = this.nativeEvent;
			n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Dl)
		},
		stopPropagation: function() {
			var n = this.nativeEvent;
			n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Dl)
		},
		persist: function() {},
		isPersistent: Dl
	}), t
}
var ii = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now()
		},
		defaultPrevented: 0,
		isTrusted: 0
	},
	wc = gt(ii),
	hl = ke({}, ii, {
		view: 0,
		detail: 0
	}),
	Bx = gt(hl),
	Zs, Qs, wi, cs = ke({}, hl, {
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
		getModifierState: vc,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== wi && (wi && e.type === "mousemove" ? (Zs = e.screenX - wi.screenX, Qs = e.screenY - wi.screenY) : Qs = Zs = 0, wi = e), Zs)
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : Qs
		}
	}),
	Jf = gt(cs),
	Ux = ke({}, cs, {
		dataTransfer: 0
	}),
	Vx = gt(Ux),
	$x = ke({}, hl, {
		relatedTarget: 0
	}),
	Gs = gt($x),
	Hx = ke({}, ii, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	}),
	Wx = gt(Hx),
	qx = ke({}, ii, {
		clipboardData: function(e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData
		}
	}),
	Zx = gt(qx),
	Qx = ke({}, ii, {
		data: 0
	}),
	Kf = gt(Qx),
	Gx = {
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
	},
	Yx = {
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
	},
	Xx = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};

function Jx(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = Xx[e]) ? !!t[e] : !1
}

function vc() {
	return Jx
}
var Kx = ke({}, hl, {
		key: function(e) {
			if (e.key) {
				var t = Gx[e.key] || e.key;
				if (t !== "Unidentified") return t
			}
			return e.type === "keypress" ? (e = oo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Yx[e.keyCode] || "Unidentified" : ""
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: vc,
		charCode: function(e) {
			return e.type === "keypress" ? oo(e) : 0
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
		},
		which: function(e) {
			return e.type === "keypress" ? oo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
		}
	}),
	ew = gt(Kx),
	tw = ke({}, cs, {
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
	}),
	ed = gt(tw),
	nw = ke({}, hl, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: vc
	}),
	rw = gt(nw),
	iw = ke({}, ii, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	}),
	lw = gt(iw),
	ow = ke({}, cs, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
		},
		deltaZ: 0,
		deltaMode: 0
	}),
	sw = gt(ow),
	aw = [9, 13, 27, 32],
	kc = sn && "CompositionEvent" in window,
	Di = null;
sn && "documentMode" in document && (Di = document.documentMode);
var uw = sn && "TextEvent" in window && !Di,
	Sm = sn && (!kc || Di && 8 < Di && 11 >= Di),
	td = String.fromCharCode(32),
	nd = !1;

function Em(e, t) {
	switch (e) {
		case "keyup":
			return aw.indexOf(t.keyCode) !== -1;
		case "keydown":
			return t.keyCode !== 229;
		case "keypress":
		case "mousedown":
		case "focusout":
			return !0;
		default:
			return !1
	}
}

function Cm(e) {
	return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var jr = !1;

function cw(e, t) {
	switch (e) {
		case "compositionend":
			return Cm(t);
		case "keypress":
			return t.which !== 32 ? null : (nd = !0, td);
		case "textInput":
			return e = t.data, e === td && nd ? null : e;
		default:
			return null
	}
}

function fw(e, t) {
	if (jr) return e === "compositionend" || !kc && Em(e, t) ? (e = km(), lo = xc = bn = null, jr = !1, e) : null;
	switch (e) {
		case "paste":
			return null;
		case "keypress":
			if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which)
			}
			return null;
		case "compositionend":
			return Sm && t.locale !== "ko" ? null : t.data;
		default:
			return null
	}
}
var dw = {
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

function rd(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === "input" ? !!dw[e.type] : t === "textarea"
}

function Nm(e, t, n, r) {
	nm(r), t = jo(t, "onChange"), 0 < t.length && (n = new wc("onChange", "change", null, n, r), e.push({
		event: n,
		listeners: t
	}))
}
var Ri = null,
	Ji = null;

function hw(e) {
	Rm(e, 0)
}

function fs(e) {
	var t = Lr(e);
	if (Gp(t)) return e
}

function pw(e, t) {
	if (e === "change") return t
}
var bm = !1;
if (sn) {
	var Ys;
	if (sn) {
		var Xs = "oninput" in document;
		if (!Xs) {
			var id = document.createElement("div");
			id.setAttribute("oninput", "return;"), Xs = typeof id.oninput == "function"
		}
		Ys = Xs
	} else Ys = !1;
	bm = Ys && (!document.documentMode || 9 < document.documentMode)
}

function ld() {
	Ri && (Ri.detachEvent("onpropertychange", Tm), Ji = Ri = null)
}

function Tm(e) {
	if (e.propertyName === "value" && fs(Ji)) {
		var t = [];
		Nm(t, Ji, e, hc(e)), om(hw, t)
	}
}

function mw(e, t, n) {
	e === "focusin" ? (ld(), Ri = t, Ji = n, Ri.attachEvent("onpropertychange", Tm)) : e === "focusout" && ld()
}

function gw(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown") return fs(Ji)
}

function yw(e, t) {
	if (e === "click") return fs(t)
}

function xw(e, t) {
	if (e === "input" || e === "change") return fs(t)
}

function ww(e, t) {
	return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ut = typeof Object.is == "function" ? Object.is : ww;

function Ki(e, t) {
	if (Ut(e, t)) return !0;
	if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var i = n[r];
		if (!Ua.call(t, i) || !Ut(e[i], t[i])) return !1
	}
	return !0
}

function od(e) {
	for (; e && e.firstChild;) e = e.firstChild;
	return e
}

function sd(e, t) {
	var n = od(e);
	e = 0;
	for (var r; n;) {
		if (n.nodeType === 3) {
			if (r = e + n.textContent.length, e <= t && r >= t) return {
				node: n,
				offset: t - e
			};
			e = r
		}
		e: {
			for (; n;) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e
				}
				n = n.parentNode
			}
			n = void 0
		}
		n = od(n)
	}
}

function Om(e, t) {
	return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Om(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Am() {
	for (var e = window, t = Eo(); t instanceof e.HTMLIFrameElement;) {
		try {
			var n = typeof t.contentWindow.location.href == "string"
		} catch {
			n = !1
		}
		if (n) e = t.contentWindow;
		else break;
		t = Eo(e.document)
	}
	return t
}

function Sc(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function vw(e) {
	var t = Am(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (t !== n && n && n.ownerDocument && Om(n.ownerDocument.documentElement, n)) {
		if (r !== null && Sc(n)) {
			if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
			else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
				e = e.getSelection();
				var i = n.textContent.length,
					l = Math.min(r.start, i);
				r = r.end === void 0 ? l : Math.min(r.end, i), !e.extend && l > r && (i = r, r = l, l = i), i = sd(n, l);
				var o = sd(n, r);
				i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
			}
		}
		for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
			element: e,
			left: e.scrollLeft,
			top: e.scrollTop
		});
		for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
	}
}
var kw = sn && "documentMode" in document && 11 >= document.documentMode,
	Pr = null,
	ou = null,
	zi = null,
	su = !1;

function ad(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	su || Pr == null || Pr !== Eo(r) || (r = Pr, "selectionStart" in r && Sc(r) ? r = {
		start: r.selectionStart,
		end: r.selectionEnd
	} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
		anchorNode: r.anchorNode,
		anchorOffset: r.anchorOffset,
		focusNode: r.focusNode,
		focusOffset: r.focusOffset
	}), zi && Ki(zi, r) || (zi = r, r = jo(ou, "onSelect"), 0 < r.length && (t = new wc("onSelect", "select", null, t, n), e.push({
		event: t,
		listeners: r
	}), t.target = Pr)))
}

function Rl(e, t) {
	var n = {};
	return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Ir = {
		animationend: Rl("Animation", "AnimationEnd"),
		animationiteration: Rl("Animation", "AnimationIteration"),
		animationstart: Rl("Animation", "AnimationStart"),
		transitionend: Rl("Transition", "TransitionEnd")
	},
	Js = {},
	jm = {};
sn && (jm = document.createElement("div").style, "AnimationEvent" in window || (delete Ir.animationend.animation, delete Ir.animationiteration.animation, delete Ir.animationstart.animation), "TransitionEvent" in window || delete Ir.transitionend.transition);

function ds(e) {
	if (Js[e]) return Js[e];
	if (!Ir[e]) return e;
	var t = Ir[e],
		n;
	for (n in t)
		if (t.hasOwnProperty(n) && n in jm) return Js[e] = t[n];
	return e
}
var Pm = ds("animationend"),
	Im = ds("animationiteration"),
	Lm = ds("animationstart"),
	Mm = ds("transitionend"),
	Dm = new Map,
	ud = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Vn(e, t) {
	Dm.set(e, t), pr(t, [e])
}
for (var Ks = 0; Ks < ud.length; Ks++) {
	var ea = ud[Ks],
		Sw = ea.toLowerCase(),
		Ew = ea[0].toUpperCase() + ea.slice(1);
	Vn(Sw, "on" + Ew)
}
Vn(Pm, "onAnimationEnd");
Vn(Im, "onAnimationIteration");
Vn(Lm, "onAnimationStart");
Vn("dblclick", "onDoubleClick");
Vn("focusin", "onFocus");
Vn("focusout", "onBlur");
Vn(Mm, "onTransitionEnd");
Qr("onMouseEnter", ["mouseout", "mouseover"]);
Qr("onMouseLeave", ["mouseout", "mouseover"]);
Qr("onPointerEnter", ["pointerout", "pointerover"]);
Qr("onPointerLeave", ["pointerout", "pointerover"]);
pr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
pr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
pr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
pr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
pr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
pr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ji = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
	Cw = new Set("cancel close invalid load scroll toggle".split(" ").concat(ji));

function cd(e, t, n) {
	var r = e.type || "unknown-event";
	e.currentTarget = n, Sx(r, t, void 0, e), e.currentTarget = null
}

function Rm(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			i = r.event;
		r = r.listeners;
		e: {
			var l = void 0;
			if (t)
				for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o],
						a = s.instance,
						u = s.currentTarget;
					if (s = s.listener, a !== l && i.isPropagationStopped()) break e;
					cd(i, s, u), l = a
				} else
					for (o = 0; o < r.length; o++) {
						if (s = r[o], a = s.instance, u = s.currentTarget, s = s.listener, a !== l && i.isPropagationStopped()) break e;
						cd(i, s, u), l = a
					}
		}
	}
	if (No) throw e = nu, No = !1, nu = null, e
}

function pe(e, t) {
	var n = t[du];
	n === void 0 && (n = t[du] = new Set);
	var r = e + "__bubble";
	n.has(r) || (zm(t, e, 2, !1), n.add(r))
}

function ta(e, t, n) {
	var r = 0;
	t && (r |= 4), zm(n, e, r, t)
}
var zl = "_reactListening" + Math.random().toString(36).slice(2);

function el(e) {
	if (!e[zl]) {
		e[zl] = !0, Hp.forEach(function(n) {
			n !== "selectionchange" && (Cw.has(n) || ta(n, !1, e), ta(n, !0, e))
		});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[zl] || (t[zl] = !0, ta("selectionchange", !1, t))
	}
}

function zm(e, t, n, r) {
	switch (vm(t)) {
		case 1:
			var i = Fx;
			break;
		case 4:
			i = _x;
			break;
		default:
			i = yc
	}
	n = i.bind(null, t, n, e), i = void 0, !tu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
		capture: !0,
		passive: i
	}) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
		passive: i
	}) : e.addEventListener(t, n, !1)
}

function na(e, t, n, r, i) {
	var l = r;
	if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
		if (r === null) return;
		var o = r.tag;
		if (o === 3 || o === 4) {
			var s = r.stateNode.containerInfo;
			if (s === i || s.nodeType === 8 && s.parentNode === i) break;
			if (o === 4)
				for (o = r.return; o !== null;) {
					var a = o.tag;
					if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo, a === i || a.nodeType === 8 && a.parentNode === i)) return;
					o = o.return
				}
			for (; s !== null;) {
				if (o = tr(s), o === null) return;
				if (a = o.tag, a === 5 || a === 6) {
					r = l = o;
					continue e
				}
				s = s.parentNode
			}
		}
		r = r.return
	}
	om(function() {
		var u = l,
			c = hc(n),
			f = [];
		e: {
			var h = Dm.get(e);
			if (h !== void 0) {
				var d = wc,
					p = e;
				switch (e) {
					case "keypress":
						if (oo(n) === 0) break e;
					case "keydown":
					case "keyup":
						d = ew;
						break;
					case "focusin":
						p = "focus", d = Gs;
						break;
					case "focusout":
						p = "blur", d = Gs;
						break;
					case "beforeblur":
					case "afterblur":
						d = Gs;
						break;
					case "click":
						if (n.button === 2) break e;
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						d = Jf;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						d = Vx;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						d = rw;
						break;
					case Pm:
					case Im:
					case Lm:
						d = Wx;
						break;
					case Mm:
						d = lw;
						break;
					case "scroll":
						d = Bx;
						break;
					case "wheel":
						d = sw;
						break;
					case "copy":
					case "cut":
					case "paste":
						d = Zx;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						d = ed
				}
				var x = (t & 4) !== 0,
					S = !x && e === "scroll",
					m = x ? h !== null ? h + "Capture" : null : h;
				x = [];
				for (var y = u, w; y !== null;) {
					w = y;
					var N = w.stateNode;
					if (w.tag === 5 && N !== null && (w = N, m !== null && (N = Qi(y, m), N != null && x.push(tl(y, N, w)))), S) break;
					y = y.return
				}
				0 < x.length && (h = new d(h, p, null, n, c), f.push({
					event: h,
					listeners: x
				}))
			}
		}
		if (!(t & 7)) {
			e: {
				if (h = e === "mouseover" || e === "pointerover", d = e === "mouseout" || e === "pointerout", h && n !== Ka && (p = n.relatedTarget || n.fromElement) && (tr(p) || p[an])) break e;
				if ((d || h) && (h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window, d ? (p = n.relatedTarget || n.toElement, d = u, p = p ? tr(p) : null, p !== null && (S = mr(p), p !== S || p.tag !== 5 && p.tag !== 6) && (p = null)) : (d = null, p = u), d !== p)) {
					if (x = Jf, N = "onMouseLeave", m = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (x = ed, N = "onPointerLeave", m = "onPointerEnter", y = "pointer"), S = d == null ? h : Lr(d), w = p == null ? h : Lr(p), h = new x(N, y + "leave", d, n, c), h.target = S, h.relatedTarget = w, N = null, tr(c) === u && (x = new x(m, y + "enter", p, n, c), x.target = w, x.relatedTarget = S, N = x), S = N, d && p) t: {
						for (x = d, m = p, y = 0, w = x; w; w = Er(w)) y++;
						for (w = 0, N = m; N; N = Er(N)) w++;
						for (; 0 < y - w;) x = Er(x),
						y--;
						for (; 0 < w - y;) m = Er(m),
						w--;
						for (; y--;) {
							if (x === m || m !== null && x === m.alternate) break t;
							x = Er(x), m = Er(m)
						}
						x = null
					}
					else x = null;
					d !== null && fd(f, h, d, x, !1), p !== null && S !== null && fd(f, S, p, x, !0)
				}
			}
			e: {
				if (h = u ? Lr(u) : window, d = h.nodeName && h.nodeName.toLowerCase(), d === "select" || d === "input" && h.type === "file") var b = pw;
				else if (rd(h))
					if (bm) b = xw;
					else {
						b = gw;
						var E = mw
					}
				else(d = h.nodeName) && d.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (b = yw);
				if (b && (b = b(e, u))) {
					Nm(f, b, n, c);
					break e
				}
				E && E(e, h, u),
				e === "focusout" && (E = h._wrapperState) && E.controlled && h.type === "number" && Qa(h, "number", h.value)
			}
			switch (E = u ? Lr(u) : window, e) {
				case "focusin":
					(rd(E) || E.contentEditable === "true") && (Pr = E, ou = u, zi = null);
					break;
				case "focusout":
					zi = ou = Pr = null;
					break;
				case "mousedown":
					su = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					su = !1, ad(f, n, c);
					break;
				case "selectionchange":
					if (kw) break;
				case "keydown":
				case "keyup":
					ad(f, n, c)
			}
			var j;
			if (kc) e: {
				switch (e) {
					case "compositionstart":
						var L = "onCompositionStart";
						break e;
					case "compositionend":
						L = "onCompositionEnd";
						break e;
					case "compositionupdate":
						L = "onCompositionUpdate";
						break e
				}
				L = void 0
			}
			else jr ? Em(e, n) && (L = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");L && (Sm && n.locale !== "ko" && (jr || L !== "onCompositionStart" ? L === "onCompositionEnd" && jr && (j = km()) : (bn = c, xc = "value" in bn ? bn.value : bn.textContent, jr = !0)), E = jo(u, L), 0 < E.length && (L = new Kf(L, e, null, n, c), f.push({
				event: L,
				listeners: E
			}), j ? L.data = j : (j = Cm(n), j !== null && (L.data = j)))),
			(j = uw ? cw(e, n) : fw(e, n)) && (u = jo(u, "onBeforeInput"), 0 < u.length && (c = new Kf("onBeforeInput", "beforeinput", null, n, c), f.push({
				event: c,
				listeners: u
			}), c.data = j))
		}
		Rm(f, t)
	})
}

function tl(e, t, n) {
	return {
		instance: e,
		listener: t,
		currentTarget: n
	}
}

function jo(e, t) {
	for (var n = t + "Capture", r = []; e !== null;) {
		var i = e,
			l = i.stateNode;
		i.tag === 5 && l !== null && (i = l, l = Qi(e, n), l != null && r.unshift(tl(e, l, i)), l = Qi(e, t), l != null && r.push(tl(e, l, i))), e = e.return
	}
	return r
}

function Er(e) {
	if (e === null) return null;
	do e = e.return; while (e && e.tag !== 5);
	return e || null
}

function fd(e, t, n, r, i) {
	for (var l = t._reactName, o = []; n !== null && n !== r;) {
		var s = n,
			a = s.alternate,
			u = s.stateNode;
		if (a !== null && a === r) break;
		s.tag === 5 && u !== null && (s = u, i ? (a = Qi(n, l), a != null && o.unshift(tl(n, a, s))) : i || (a = Qi(n, l), a != null && o.push(tl(n, a, s)))), n = n.return
	}
	o.length !== 0 && e.push({
		event: t,
		listeners: o
	})
}
var Nw = /\r\n?/g,
	bw = /\u0000|\uFFFD/g;

function dd(e) {
	return (typeof e == "string" ? e : "" + e).replace(Nw, `
`).replace(bw, "")
}

function Fl(e, t, n) {
	if (t = dd(t), dd(e) !== t && n) throw Error(P(425))
}

function Po() {}
var au = null,
	uu = null;

function cu(e, t) {
	return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var fu = typeof setTimeout == "function" ? setTimeout : void 0,
	Tw = typeof clearTimeout == "function" ? clearTimeout : void 0,
	hd = typeof Promise == "function" ? Promise : void 0,
	Ow = typeof queueMicrotask == "function" ? queueMicrotask : typeof hd < "u" ? function(e) {
		return hd.resolve(null).then(e).catch(Aw)
	} : fu;

function Aw(e) {
	setTimeout(function() {
		throw e
	})
}

function ra(e, t) {
	var n = t,
		r = 0;
	do {
		var i = n.nextSibling;
		if (e.removeChild(n), i && i.nodeType === 8)
			if (n = i.data, n === "/$") {
				if (r === 0) {
					e.removeChild(i), Xi(t);
					return
				}
				r--
			} else n !== "$" && n !== "$?" && n !== "$!" || r++;
		n = i
	} while (n);
	Xi(t)
}

function Ln(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
			if (t === "/$") return null
		}
	}
	return e
}

function pd(e) {
	e = e.previousSibling;
	for (var t = 0; e;) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === "$" || n === "$!" || n === "$?") {
				if (t === 0) return e;
				t--
			} else n === "/$" && t++
		}
		e = e.previousSibling
	}
	return null
}
var li = Math.random().toString(36).slice(2),
	qt = "__reactFiber$" + li,
	nl = "__reactProps$" + li,
	an = "__reactContainer$" + li,
	du = "__reactEvents$" + li,
	jw = "__reactListeners$" + li,
	Pw = "__reactHandles$" + li;

function tr(e) {
	var t = e[qt];
	if (t) return t;
	for (var n = e.parentNode; n;) {
		if (t = n[an] || n[qt]) {
			if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
				for (e = pd(e); e !== null;) {
					if (n = e[qt]) return n;
					e = pd(e)
				}
			return t
		}
		e = n, n = e.parentNode
	}
	return null
}

function pl(e) {
	return e = e[qt] || e[an], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Lr(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(P(33))
}

function hs(e) {
	return e[nl] || null
}
var hu = [],
	Mr = -1;

function $n(e) {
	return {
		current: e
	}
}

function ge(e) {
	0 > Mr || (e.current = hu[Mr], hu[Mr] = null, Mr--)
}

function he(e, t) {
	Mr++, hu[Mr] = e.current, e.current = t
}
var Un = {},
	qe = $n(Un),
	rt = $n(!1),
	ar = Un;

function Gr(e, t) {
	var n = e.type.contextTypes;
	if (!n) return Un;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
	var i = {},
		l;
	for (l in n) i[l] = t[l];
	return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function it(e) {
	return e = e.childContextTypes, e != null
}

function Io() {
	ge(rt), ge(qe)
}

function md(e, t, n) {
	if (qe.current !== Un) throw Error(P(168));
	he(qe, t), he(rt, n)
}

function Fm(e, t, n) {
	var r = e.stateNode;
	if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
	r = r.getChildContext();
	for (var i in r)
		if (!(i in t)) throw Error(P(108, mx(e) || "Unknown", i));
	return ke({}, n, r)
}

function Lo(e) {
	return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Un, ar = qe.current, he(qe, e), he(rt, rt.current), !0
}

function gd(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(P(169));
	n ? (e = Fm(e, t, ar), r.__reactInternalMemoizedMergedChildContext = e, ge(rt), ge(qe), he(qe, e)) : ge(rt), he(rt, n)
}
var en = null,
	ps = !1,
	ia = !1;

function _m(e) {
	en === null ? en = [e] : en.push(e)
}

function Iw(e) {
	ps = !0, _m(e)
}

function Hn() {
	if (!ia && en !== null) {
		ia = !0;
		var e = 0,
			t = oe;
		try {
			var n = en;
			for (oe = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0); while (r !== null)
			}
			en = null, ps = !1
		} catch (i) {
			throw en !== null && (en = en.slice(e + 1)), cm(pc, Hn), i
		} finally {
			oe = t, ia = !1
		}
	}
	return null
}
var Dr = [],
	Rr = 0,
	Mo = null,
	Do = 0,
	xt = [],
	wt = 0,
	ur = null,
	tn = 1,
	nn = "";

function Jn(e, t) {
	Dr[Rr++] = Do, Dr[Rr++] = Mo, Mo = e, Do = t
}

function Bm(e, t, n) {
	xt[wt++] = tn, xt[wt++] = nn, xt[wt++] = ur, ur = e;
	var r = tn;
	e = nn;
	var i = 32 - Ft(r) - 1;
	r &= ~(1 << i), n += 1;
	var l = 32 - Ft(t) + i;
	if (30 < l) {
		var o = i - i % 5;
		l = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, tn = 1 << 32 - Ft(t) + i | n << i | r, nn = l + e
	} else tn = 1 << l | n << i | r, nn = e
}

function Ec(e) {
	e.return !== null && (Jn(e, 1), Bm(e, 1, 0))
}

function Cc(e) {
	for (; e === Mo;) Mo = Dr[--Rr], Dr[Rr] = null, Do = Dr[--Rr], Dr[Rr] = null;
	for (; e === ur;) ur = xt[--wt], xt[wt] = null, nn = xt[--wt], xt[wt] = null, tn = xt[--wt], xt[wt] = null
}
var ft = null,
	ct = null,
	ye = !1,
	Dt = null;

function Um(e, t) {
	var n = St(5, null, null, 0);
	n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function yd(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ft = e, ct = Ln(t.firstChild), !0) : !1;
		case 6:
			return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ft = e, ct = null, !0) : !1;
		case 13:
			return t = t.nodeType !== 8 ? null : t, t !== null ? (n = ur !== null ? {
				id: tn,
				overflow: nn
			} : null, e.memoizedState = {
				dehydrated: t,
				treeContext: n,
				retryLane: 1073741824
			}, n = St(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ft = e, ct = null, !0) : !1;
		default:
			return !1
	}
}

function pu(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function mu(e) {
	if (ye) {
		var t = ct;
		if (t) {
			var n = t;
			if (!yd(e, t)) {
				if (pu(e)) throw Error(P(418));
				t = Ln(n.nextSibling);
				var r = ft;
				t && yd(e, t) ? Um(r, n) : (e.flags = e.flags & -4097 | 2, ye = !1, ft = e)
			}
		} else {
			if (pu(e)) throw Error(P(418));
			e.flags = e.flags & -4097 | 2, ye = !1, ft = e
		}
	}
}

function xd(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
	ft = e
}

function _l(e) {
	if (e !== ft) return !1;
	if (!ye) return xd(e), ye = !0, !1;
	var t;
	if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !cu(e.type, e.memoizedProps)), t && (t = ct)) {
		if (pu(e)) throw Vm(), Error(P(418));
		for (; t;) Um(e, t), t = Ln(t.nextSibling)
	}
	if (xd(e), e.tag === 13) {
		if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(P(317));
		e: {
			for (e = e.nextSibling, t = 0; e;) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === "/$") {
						if (t === 0) {
							ct = Ln(e.nextSibling);
							break e
						}
						t--
					} else n !== "$" && n !== "$!" && n !== "$?" || t++
				}
				e = e.nextSibling
			}
			ct = null
		}
	} else ct = ft ? Ln(e.stateNode.nextSibling) : null;
	return !0
}

function Vm() {
	for (var e = ct; e;) e = Ln(e.nextSibling)
}

function Yr() {
	ct = ft = null, ye = !1
}

function Nc(e) {
	Dt === null ? Dt = [e] : Dt.push(e)
}
var Lw = dn.ReactCurrentBatchConfig;

function Lt(e, t) {
	if (e && e.defaultProps) {
		t = ke({}, t), e = e.defaultProps;
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t
	}
	return t
}
var Ro = $n(null),
	zo = null,
	zr = null,
	bc = null;

function Tc() {
	bc = zr = zo = null
}

function Oc(e) {
	var t = Ro.current;
	ge(Ro), e._currentValue = t
}

function gu(e, t, n) {
	for (; e !== null;) {
		var r = e.alternate;
		if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
		e = e.return
	}
}

function Hr(e, t) {
	zo = e, bc = zr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (nt = !0), e.firstContext = null)
}

function bt(e) {
	var t = e._currentValue;
	if (bc !== e)
		if (e = {
				context: e,
				memoizedValue: t,
				next: null
			}, zr === null) {
			if (zo === null) throw Error(P(308));
			zr = e, zo.dependencies = {
				lanes: 0,
				firstContext: e
			}
		} else zr = zr.next = e;
	return t
}
var nr = null;

function Ac(e) {
	nr === null ? nr = [e] : nr.push(e)
}

function $m(e, t, n, r) {
	var i = t.interleaved;
	return i === null ? (n.next = n, Ac(t)) : (n.next = i.next, i.next = n), t.interleaved = n, un(e, r)
}

function un(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
	return n.tag === 3 ? n.stateNode : null
}
var kn = !1;

function jc(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: {
			pending: null,
			interleaved: null,
			lanes: 0
		},
		effects: null
	}
}

function Hm(e, t) {
	e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
		baseState: e.baseState,
		firstBaseUpdate: e.firstBaseUpdate,
		lastBaseUpdate: e.lastBaseUpdate,
		shared: e.shared,
		effects: e.effects
	})
}

function ln(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null
	}
}

function Mn(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (r = r.shared, ne & 2) {
		var i = r.pending;
		return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, un(e, n)
	}
	return i = r.interleaved, i === null ? (t.next = t, Ac(r)) : (t.next = i.next, i.next = t), r.interleaved = t, un(e, n)
}

function so(e, t, n) {
	if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
		var r = t.lanes;
		r &= e.pendingLanes, n |= r, t.lanes = n, mc(e, n)
	}
}

function wd(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && (r = r.updateQueue, n === r)) {
		var i = null,
			l = null;
		if (n = n.firstBaseUpdate, n !== null) {
			do {
				var o = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null
				};
				l === null ? i = l = o : l = l.next = o, n = n.next
			} while (n !== null);
			l === null ? i = l = t : l = l.next = t
		} else i = l = t;
		n = {
			baseState: r.baseState,
			firstBaseUpdate: i,
			lastBaseUpdate: l,
			shared: r.shared,
			effects: r.effects
		}, e.updateQueue = n;
		return
	}
	e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Fo(e, t, n, r) {
	var i = e.updateQueue;
	kn = !1;
	var l = i.firstBaseUpdate,
		o = i.lastBaseUpdate,
		s = i.shared.pending;
	if (s !== null) {
		i.shared.pending = null;
		var a = s,
			u = a.next;
		a.next = null, o === null ? l = u : o.next = u, o = a;
		var c = e.alternate;
		c !== null && (c = c.updateQueue, s = c.lastBaseUpdate, s !== o && (s === null ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = a))
	}
	if (l !== null) {
		var f = i.baseState;
		o = 0, c = u = a = null, s = l;
		do {
			var h = s.lane,
				d = s.eventTime;
			if ((r & h) === h) {
				c !== null && (c = c.next = {
					eventTime: d,
					lane: 0,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null
				});
				e: {
					var p = e,
						x = s;
					switch (h = t, d = n, x.tag) {
						case 1:
							if (p = x.payload, typeof p == "function") {
								f = p.call(d, f, h);
								break e
							}
							f = p;
							break e;
						case 3:
							p.flags = p.flags & -65537 | 128;
						case 0:
							if (p = x.payload, h = typeof p == "function" ? p.call(d, f, h) : p, h == null) break e;
							f = ke({}, f, h);
							break e;
						case 2:
							kn = !0
					}
				}
				s.callback !== null && s.lane !== 0 && (e.flags |= 64, h = i.effects, h === null ? i.effects = [s] : h.push(s))
			} else d = {
				eventTime: d,
				lane: h,
				tag: s.tag,
				payload: s.payload,
				callback: s.callback,
				next: null
			}, c === null ? (u = c = d, a = f) : c = c.next = d, o |= h;
			if (s = s.next, s === null) {
				if (s = i.shared.pending, s === null) break;
				h = s, s = h.next, h.next = null, i.lastBaseUpdate = h, i.shared.pending = null
			}
		} while (1);
		if (c === null && (a = f), i.baseState = a, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
			i = t;
			do o |= i.lane, i = i.next; while (i !== t)
		} else l === null && (i.shared.lanes = 0);
		fr |= o, e.lanes = o, e.memoizedState = f
	}
}

function vd(e, t, n) {
	if (e = t.effects, t.effects = null, e !== null)
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				i = r.callback;
			if (i !== null) {
				if (r.callback = null, r = n, typeof i != "function") throw Error(P(191, i));
				i.call(r)
			}
		}
}
var Wm = new $p.Component().refs;

function yu(e, t, n, r) {
	t = e.memoizedState, n = n(r, t), n = n == null ? t : ke({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var ms = {
	isMounted: function(e) {
		return (e = e._reactInternals) ? mr(e) === e : !1
	},
	enqueueSetState: function(e, t, n) {
		e = e._reactInternals;
		var r = Ye(),
			i = Rn(e),
			l = ln(r, i);
		l.payload = t, n != null && (l.callback = n), t = Mn(e, l, i), t !== null && (_t(t, e, i, r), so(t, e, i))
	},
	enqueueReplaceState: function(e, t, n) {
		e = e._reactInternals;
		var r = Ye(),
			i = Rn(e),
			l = ln(r, i);
		l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Mn(e, l, i), t !== null && (_t(t, e, i, r), so(t, e, i))
	},
	enqueueForceUpdate: function(e, t) {
		e = e._reactInternals;
		var n = Ye(),
			r = Rn(e),
			i = ln(n, r);
		i.tag = 2, t != null && (i.callback = t), t = Mn(e, i, r), t !== null && (_t(t, e, r, n), so(t, e, r))
	}
};

function kd(e, t, n, r, i, l, o) {
	return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, o) : t.prototype && t.prototype.isPureReactComponent ? !Ki(n, r) || !Ki(i, l) : !0
}

function qm(e, t, n) {
	var r = !1,
		i = Un,
		l = t.contextType;
	return typeof l == "object" && l !== null ? l = bt(l) : (i = it(t) ? ar : qe.current, r = t.contextTypes, l = (r = r != null) ? Gr(e, i) : Un), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ms, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = l), t
}

function Sd(e, t, n, r) {
	e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ms.enqueueReplaceState(t, t.state, null)
}

function xu(e, t, n, r) {
	var i = e.stateNode;
	i.props = n, i.state = e.memoizedState, i.refs = Wm, jc(e);
	var l = t.contextType;
	typeof l == "object" && l !== null ? i.context = bt(l) : (l = it(t) ? ar : qe.current, i.context = Gr(e, l)), i.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (yu(e, t, l, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && ms.enqueueReplaceState(i, i.state, null), Fo(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function vi(e, t, n) {
	if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
		if (n._owner) {
			if (n = n._owner, n) {
				if (n.tag !== 1) throw Error(P(309));
				var r = n.stateNode
			}
			if (!r) throw Error(P(147, e));
			var i = r,
				l = "" + e;
			return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(o) {
				var s = i.refs;
				s === Wm && (s = i.refs = {}), o === null ? delete s[l] : s[l] = o
			}, t._stringRef = l, t)
		}
		if (typeof e != "string") throw Error(P(284));
		if (!n._owner) throw Error(P(290, e))
	}
	return e
}

function Bl(e, t) {
	throw e = Object.prototype.toString.call(t), Error(P(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Ed(e) {
	var t = e._init;
	return t(e._payload)
}

function Zm(e) {
	function t(m, y) {
		if (e) {
			var w = m.deletions;
			w === null ? (m.deletions = [y], m.flags |= 16) : w.push(y)
		}
	}

	function n(m, y) {
		if (!e) return null;
		for (; y !== null;) t(m, y), y = y.sibling;
		return null
	}

	function r(m, y) {
		for (m = new Map; y !== null;) y.key !== null ? m.set(y.key, y) : m.set(y.index, y), y = y.sibling;
		return m
	}

	function i(m, y) {
		return m = zn(m, y), m.index = 0, m.sibling = null, m
	}

	function l(m, y, w) {
		return m.index = w, e ? (w = m.alternate, w !== null ? (w = w.index, w < y ? (m.flags |= 2, y) : w) : (m.flags |= 2, y)) : (m.flags |= 1048576, y)
	}

	function o(m) {
		return e && m.alternate === null && (m.flags |= 2), m
	}

	function s(m, y, w, N) {
		return y === null || y.tag !== 6 ? (y = fa(w, m.mode, N), y.return = m, y) : (y = i(y, w), y.return = m, y)
	}

	function a(m, y, w, N) {
		var b = w.type;
		return b === Ar ? c(m, y, w.props.children, N, w.key) : y !== null && (y.elementType === b || typeof b == "object" && b !== null && b.$$typeof === vn && Ed(b) === y.type) ? (N = i(y, w.props), N.ref = vi(m, y, w), N.return = m, N) : (N = po(w.type, w.key, w.props, null, m.mode, N), N.ref = vi(m, y, w), N.return = m, N)
	}

	function u(m, y, w, N) {
		return y === null || y.tag !== 4 || y.stateNode.containerInfo !== w.containerInfo || y.stateNode.implementation !== w.implementation ? (y = da(w, m.mode, N), y.return = m, y) : (y = i(y, w.children || []), y.return = m, y)
	}

	function c(m, y, w, N, b) {
		return y === null || y.tag !== 7 ? (y = or(w, m.mode, N, b), y.return = m, y) : (y = i(y, w), y.return = m, y)
	}

	function f(m, y, w) {
		if (typeof y == "string" && y !== "" || typeof y == "number") return y = fa("" + y, m.mode, w), y.return = m, y;
		if (typeof y == "object" && y !== null) {
			switch (y.$$typeof) {
				case Al:
					return w = po(y.type, y.key, y.props, null, m.mode, w), w.ref = vi(m, null, y), w.return = m, w;
				case Or:
					return y = da(y, m.mode, w), y.return = m, y;
				case vn:
					var N = y._init;
					return f(m, N(y._payload), w)
			}
			if (Oi(y) || mi(y)) return y = or(y, m.mode, w, null), y.return = m, y;
			Bl(m, y)
		}
		return null
	}

	function h(m, y, w, N) {
		var b = y !== null ? y.key : null;
		if (typeof w == "string" && w !== "" || typeof w == "number") return b !== null ? null : s(m, y, "" + w, N);
		if (typeof w == "object" && w !== null) {
			switch (w.$$typeof) {
				case Al:
					return w.key === b ? a(m, y, w, N) : null;
				case Or:
					return w.key === b ? u(m, y, w, N) : null;
				case vn:
					return b = w._init, h(m, y, b(w._payload), N)
			}
			if (Oi(w) || mi(w)) return b !== null ? null : c(m, y, w, N, null);
			Bl(m, w)
		}
		return null
	}

	function d(m, y, w, N, b) {
		if (typeof N == "string" && N !== "" || typeof N == "number") return m = m.get(w) || null, s(y, m, "" + N, b);
		if (typeof N == "object" && N !== null) {
			switch (N.$$typeof) {
				case Al:
					return m = m.get(N.key === null ? w : N.key) || null, a(y, m, N, b);
				case Or:
					return m = m.get(N.key === null ? w : N.key) || null, u(y, m, N, b);
				case vn:
					var E = N._init;
					return d(m, y, w, E(N._payload), b)
			}
			if (Oi(N) || mi(N)) return m = m.get(w) || null, c(y, m, N, b, null);
			Bl(y, N)
		}
		return null
	}

	function p(m, y, w, N) {
		for (var b = null, E = null, j = y, L = y = 0, B = null; j !== null && L < w.length; L++) {
			j.index > L ? (B = j, j = null) : B = j.sibling;
			var C = h(m, j, w[L], N);
			if (C === null) {
				j === null && (j = B);
				break
			}
			e && j && C.alternate === null && t(m, j), y = l(C, y, L), E === null ? b = C : E.sibling = C, E = C, j = B
		}
		if (L === w.length) return n(m, j), ye && Jn(m, L), b;
		if (j === null) {
			for (; L < w.length; L++) j = f(m, w[L], N), j !== null && (y = l(j, y, L), E === null ? b = j : E.sibling = j, E = j);
			return ye && Jn(m, L), b
		}
		for (j = r(m, j); L < w.length; L++) B = d(j, m, L, w[L], N), B !== null && (e && B.alternate !== null && j.delete(B.key === null ? L : B.key), y = l(B, y, L), E === null ? b = B : E.sibling = B, E = B);
		return e && j.forEach(function(z) {
			return t(m, z)
		}), ye && Jn(m, L), b
	}

	function x(m, y, w, N) {
		var b = mi(w);
		if (typeof b != "function") throw Error(P(150));
		if (w = b.call(w), w == null) throw Error(P(151));
		for (var E = b = null, j = y, L = y = 0, B = null, C = w.next(); j !== null && !C.done; L++, C = w.next()) {
			j.index > L ? (B = j, j = null) : B = j.sibling;
			var z = h(m, j, C.value, N);
			if (z === null) {
				j === null && (j = B);
				break
			}
			e && j && z.alternate === null && t(m, j), y = l(z, y, L), E === null ? b = z : E.sibling = z, E = z, j = B
		}
		if (C.done) return n(m, j), ye && Jn(m, L), b;
		if (j === null) {
			for (; !C.done; L++, C = w.next()) C = f(m, C.value, N), C !== null && (y = l(C, y, L), E === null ? b = C : E.sibling = C, E = C);
			return ye && Jn(m, L), b
		}
		for (j = r(m, j); !C.done; L++, C = w.next()) C = d(j, m, L, C.value, N), C !== null && (e && C.alternate !== null && j.delete(C.key === null ? L : C.key), y = l(C, y, L), E === null ? b = C : E.sibling = C, E = C);
		return e && j.forEach(function(F) {
			return t(m, F)
		}), ye && Jn(m, L), b
	}

	function S(m, y, w, N) {
		if (typeof w == "object" && w !== null && w.type === Ar && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
			switch (w.$$typeof) {
				case Al:
					e: {
						for (var b = w.key, E = y; E !== null;) {
							if (E.key === b) {
								if (b = w.type, b === Ar) {
									if (E.tag === 7) {
										n(m, E.sibling), y = i(E, w.props.children), y.return = m, m = y;
										break e
									}
								} else if (E.elementType === b || typeof b == "object" && b !== null && b.$$typeof === vn && Ed(b) === E.type) {
									n(m, E.sibling), y = i(E, w.props), y.ref = vi(m, E, w), y.return = m, m = y;
									break e
								}
								n(m, E);
								break
							} else t(m, E);
							E = E.sibling
						}
						w.type === Ar ? (y = or(w.props.children, m.mode, N, w.key), y.return = m, m = y) : (N = po(w.type, w.key, w.props, null, m.mode, N), N.ref = vi(m, y, w), N.return = m, m = N)
					}
					return o(m);
				case Or:
					e: {
						for (E = w.key; y !== null;) {
							if (y.key === E)
								if (y.tag === 4 && y.stateNode.containerInfo === w.containerInfo && y.stateNode.implementation === w.implementation) {
									n(m, y.sibling), y = i(y, w.children || []), y.return = m, m = y;
									break e
								} else {
									n(m, y);
									break
								}
							else t(m, y);
							y = y.sibling
						}
						y = da(w, m.mode, N),
						y.return = m,
						m = y
					}
					return o(m);
				case vn:
					return E = w._init, S(m, y, E(w._payload), N)
			}
			if (Oi(w)) return p(m, y, w, N);
			if (mi(w)) return x(m, y, w, N);
			Bl(m, w)
		}
		return typeof w == "string" && w !== "" || typeof w == "number" ? (w = "" + w, y !== null && y.tag === 6 ? (n(m, y.sibling), y = i(y, w), y.return = m, m = y) : (n(m, y), y = fa(w, m.mode, N), y.return = m, m = y), o(m)) : n(m, y)
	}
	return S
}
var Xr = Zm(!0),
	Qm = Zm(!1),
	ml = {},
	Qt = $n(ml),
	rl = $n(ml),
	il = $n(ml);

function rr(e) {
	if (e === ml) throw Error(P(174));
	return e
}

function Pc(e, t) {
	switch (he(il, t), he(rl, e), he(Qt, ml), e = t.nodeType, e) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : Ya(null, "");
			break;
		default:
			e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ya(t, e)
	}
	ge(Qt), he(Qt, t)
}

function Jr() {
	ge(Qt), ge(rl), ge(il)
}

function Gm(e) {
	rr(il.current);
	var t = rr(Qt.current),
		n = Ya(t, e.type);
	t !== n && (he(rl, e), he(Qt, n))
}

function Ic(e) {
	rl.current === e && (ge(Qt), ge(rl))
}
var we = $n(0);

function _o(e) {
	for (var t = e; t !== null;) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t
		} else if (t.child !== null) {
			t.child.return = t, t = t.child;
			continue
		}
		if (t === e) break;
		for (; t.sibling === null;) {
			if (t.return === null || t.return === e) return null;
			t = t.return
		}
		t.sibling.return = t.return, t = t.sibling
	}
	return null
}
var la = [];

function Lc() {
	for (var e = 0; e < la.length; e++) la[e]._workInProgressVersionPrimary = null;
	la.length = 0
}
var ao = dn.ReactCurrentDispatcher,
	oa = dn.ReactCurrentBatchConfig,
	cr = 0,
	ve = null,
	Le = null,
	De = null,
	Bo = !1,
	Fi = !1,
	ll = 0,
	Mw = 0;

function Ue() {
	throw Error(P(321))
}

function Mc(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!Ut(e[n], t[n])) return !1;
	return !0
}

function Dc(e, t, n, r, i, l) {
	if (cr = l, ve = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ao.current = e === null || e.memoizedState === null ? Fw : _w, e = n(r, i), Fi) {
		l = 0;
		do {
			if (Fi = !1, ll = 0, 25 <= l) throw Error(P(301));
			l += 1, De = Le = null, t.updateQueue = null, ao.current = Bw, e = n(r, i)
		} while (Fi)
	}
	if (ao.current = Uo, t = Le !== null && Le.next !== null, cr = 0, De = Le = ve = null, Bo = !1, t) throw Error(P(300));
	return e
}

function Rc() {
	var e = ll !== 0;
	return ll = 0, e
}

function Ht() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null
	};
	return De === null ? ve.memoizedState = De = e : De = De.next = e, De
}

function Tt() {
	if (Le === null) {
		var e = ve.alternate;
		e = e !== null ? e.memoizedState : null
	} else e = Le.next;
	var t = De === null ? ve.memoizedState : De.next;
	if (t !== null) De = t, Le = e;
	else {
		if (e === null) throw Error(P(310));
		Le = e, e = {
			memoizedState: Le.memoizedState,
			baseState: Le.baseState,
			baseQueue: Le.baseQueue,
			queue: Le.queue,
			next: null
		}, De === null ? ve.memoizedState = De = e : De = De.next = e
	}
	return De
}

function ol(e, t) {
	return typeof t == "function" ? t(e) : t
}

function sa(e) {
	var t = Tt(),
		n = t.queue;
	if (n === null) throw Error(P(311));
	n.lastRenderedReducer = e;
	var r = Le,
		i = r.baseQueue,
		l = n.pending;
	if (l !== null) {
		if (i !== null) {
			var o = i.next;
			i.next = l.next, l.next = o
		}
		r.baseQueue = i = l, n.pending = null
	}
	if (i !== null) {
		l = i.next, r = r.baseState;
		var s = o = null,
			a = null,
			u = l;
		do {
			var c = u.lane;
			if ((cr & c) === c) a !== null && (a = a.next = {
				lane: 0,
				action: u.action,
				hasEagerState: u.hasEagerState,
				eagerState: u.eagerState,
				next: null
			}), r = u.hasEagerState ? u.eagerState : e(r, u.action);
			else {
				var f = {
					lane: c,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				};
				a === null ? (s = a = f, o = r) : a = a.next = f, ve.lanes |= c, fr |= c
			}
			u = u.next
		} while (u !== null && u !== l);
		a === null ? o = r : a.next = s, Ut(r, t.memoizedState) || (nt = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = a, n.lastRenderedState = r
	}
	if (e = n.interleaved, e !== null) {
		i = e;
		do l = i.lane, ve.lanes |= l, fr |= l, i = i.next; while (i !== e)
	} else i === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch]
}

function aa(e) {
	var t = Tt(),
		n = t.queue;
	if (n === null) throw Error(P(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		i = n.pending,
		l = t.memoizedState;
	if (i !== null) {
		n.pending = null;
		var o = i = i.next;
		do l = e(l, o.action), o = o.next; while (o !== i);
		Ut(l, t.memoizedState) || (nt = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l
	}
	return [l, r]
}

function Ym() {}

function Xm(e, t) {
	var n = ve,
		r = Tt(),
		i = t(),
		l = !Ut(r.memoizedState, i);
	if (l && (r.memoizedState = i, nt = !0), r = r.queue, zc(eg.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || De !== null && De.memoizedState.tag & 1) {
		if (n.flags |= 2048, sl(9, Km.bind(null, n, r, i, t), void 0, null), Re === null) throw Error(P(349));
		cr & 30 || Jm(n, t, i)
	}
	return i
}

function Jm(e, t, n) {
	e.flags |= 16384, e = {
		getSnapshot: t,
		value: n
	}, t = ve.updateQueue, t === null ? (t = {
		lastEffect: null,
		stores: null
	}, ve.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Km(e, t, n, r) {
	t.value = n, t.getSnapshot = r, tg(t) && ng(e)
}

function eg(e, t, n) {
	return n(function() {
		tg(t) && ng(e)
	})
}

function tg(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !Ut(e, n)
	} catch {
		return !0
	}
}

function ng(e) {
	var t = un(e, 1);
	t !== null && _t(t, e, 1, -1)
}

function Cd(e) {
	var t = Ht();
	return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
		pending: null,
		interleaved: null,
		lanes: 0,
		dispatch: null,
		lastRenderedReducer: ol,
		lastRenderedState: e
	}, t.queue = e, e = e.dispatch = zw.bind(null, ve, e), [t.memoizedState, e]
}

function sl(e, t, n, r) {
	return e = {
		tag: e,
		create: t,
		destroy: n,
		deps: r,
		next: null
	}, t = ve.updateQueue, t === null ? (t = {
		lastEffect: null,
		stores: null
	}, ve.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function rg() {
	return Tt().memoizedState
}

function uo(e, t, n, r) {
	var i = Ht();
	ve.flags |= e, i.memoizedState = sl(1 | t, n, void 0, r === void 0 ? null : r)
}

function gs(e, t, n, r) {
	var i = Tt();
	r = r === void 0 ? null : r;
	var l = void 0;
	if (Le !== null) {
		var o = Le.memoizedState;
		if (l = o.destroy, r !== null && Mc(r, o.deps)) {
			i.memoizedState = sl(t, n, l, r);
			return
		}
	}
	ve.flags |= e, i.memoizedState = sl(1 | t, n, l, r)
}

function Nd(e, t) {
	return uo(8390656, 8, e, t)
}

function zc(e, t) {
	return gs(2048, 8, e, t)
}

function ig(e, t) {
	return gs(4, 2, e, t)
}

function lg(e, t) {
	return gs(4, 4, e, t)
}

function og(e, t) {
	if (typeof t == "function") return e = e(), t(e),
		function() {
			t(null)
		};
	if (t != null) return e = e(), t.current = e,
		function() {
			t.current = null
		}
}

function sg(e, t, n) {
	return n = n != null ? n.concat([e]) : null, gs(4, 4, og.bind(null, t, e), n)
}

function Fc() {}

function ag(e, t) {
	var n = Tt();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Mc(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function ug(e, t) {
	var n = Tt();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Mc(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function cg(e, t, n) {
	return cr & 21 ? (Ut(n, t) || (n = hm(), ve.lanes |= n, fr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, nt = !0), e.memoizedState = n)
}

function Dw(e, t) {
	var n = oe;
	oe = n !== 0 && 4 > n ? n : 4, e(!0);
	var r = oa.transition;
	oa.transition = {};
	try {
		e(!1), t()
	} finally {
		oe = n, oa.transition = r
	}
}

function fg() {
	return Tt().memoizedState
}

function Rw(e, t, n) {
	var r = Rn(e);
	if (n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, dg(e)) hg(t, n);
	else if (n = $m(e, t, n, r), n !== null) {
		var i = Ye();
		_t(n, e, r, i), pg(n, t, r)
	}
}

function zw(e, t, n) {
	var r = Rn(e),
		i = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
	if (dg(e)) hg(t, i);
	else {
		var l = e.alternate;
		if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
			var o = t.lastRenderedState,
				s = l(o, n);
			if (i.hasEagerState = !0, i.eagerState = s, Ut(s, o)) {
				var a = t.interleaved;
				a === null ? (i.next = i, Ac(t)) : (i.next = a.next, a.next = i), t.interleaved = i;
				return
			}
		} catch {} finally {}
		n = $m(e, t, i, r), n !== null && (i = Ye(), _t(n, e, r, i), pg(n, t, r))
	}
}

function dg(e) {
	var t = e.alternate;
	return e === ve || t !== null && t === ve
}

function hg(e, t) {
	Fi = Bo = !0;
	var n = e.pending;
	n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function pg(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		r &= e.pendingLanes, n |= r, t.lanes = n, mc(e, n)
	}
}
var Uo = {
		readContext: bt,
		useCallback: Ue,
		useContext: Ue,
		useEffect: Ue,
		useImperativeHandle: Ue,
		useInsertionEffect: Ue,
		useLayoutEffect: Ue,
		useMemo: Ue,
		useReducer: Ue,
		useRef: Ue,
		useState: Ue,
		useDebugValue: Ue,
		useDeferredValue: Ue,
		useTransition: Ue,
		useMutableSource: Ue,
		useSyncExternalStore: Ue,
		useId: Ue,
		unstable_isNewReconciler: !1
	},
	Fw = {
		readContext: bt,
		useCallback: function(e, t) {
			return Ht().memoizedState = [e, t === void 0 ? null : t], e
		},
		useContext: bt,
		useEffect: Nd,
		useImperativeHandle: function(e, t, n) {
			return n = n != null ? n.concat([e]) : null, uo(4194308, 4, og.bind(null, t, e), n)
		},
		useLayoutEffect: function(e, t) {
			return uo(4194308, 4, e, t)
		},
		useInsertionEffect: function(e, t) {
			return uo(4, 2, e, t)
		},
		useMemo: function(e, t) {
			var n = Ht();
			return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
		},
		useReducer: function(e, t, n) {
			var r = Ht();
			return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: t
			}, r.queue = e, e = e.dispatch = Rw.bind(null, ve, e), [r.memoizedState, e]
		},
		useRef: function(e) {
			var t = Ht();
			return e = {
				current: e
			}, t.memoizedState = e
		},
		useState: Cd,
		useDebugValue: Fc,
		useDeferredValue: function(e) {
			return Ht().memoizedState = e
		},
		useTransition: function() {
			var e = Cd(!1),
				t = e[0];
			return e = Dw.bind(null, e[1]), Ht().memoizedState = e, [t, e]
		},
		useMutableSource: function() {},
		useSyncExternalStore: function(e, t, n) {
			var r = ve,
				i = Ht();
			if (ye) {
				if (n === void 0) throw Error(P(407));
				n = n()
			} else {
				if (n = t(), Re === null) throw Error(P(349));
				cr & 30 || Jm(r, t, n)
			}
			i.memoizedState = n;
			var l = {
				value: n,
				getSnapshot: t
			};
			return i.queue = l, Nd(eg.bind(null, r, l, e), [e]), r.flags |= 2048, sl(9, Km.bind(null, r, l, n, t), void 0, null), n
		},
		useId: function() {
			var e = Ht(),
				t = Re.identifierPrefix;
			if (ye) {
				var n = nn,
					r = tn;
				n = (r & ~(1 << 32 - Ft(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ll++, 0 < n && (t += "H" + n.toString(32)), t += ":"
			} else n = Mw++, t = ":" + t + "r" + n.toString(32) + ":";
			return e.memoizedState = t
		},
		unstable_isNewReconciler: !1
	},
	_w = {
		readContext: bt,
		useCallback: ag,
		useContext: bt,
		useEffect: zc,
		useImperativeHandle: sg,
		useInsertionEffect: ig,
		useLayoutEffect: lg,
		useMemo: ug,
		useReducer: sa,
		useRef: rg,
		useState: function() {
			return sa(ol)
		},
		useDebugValue: Fc,
		useDeferredValue: function(e) {
			var t = Tt();
			return cg(t, Le.memoizedState, e)
		},
		useTransition: function() {
			var e = sa(ol)[0],
				t = Tt().memoizedState;
			return [e, t]
		},
		useMutableSource: Ym,
		useSyncExternalStore: Xm,
		useId: fg,
		unstable_isNewReconciler: !1
	},
	Bw = {
		readContext: bt,
		useCallback: ag,
		useContext: bt,
		useEffect: zc,
		useImperativeHandle: sg,
		useInsertionEffect: ig,
		useLayoutEffect: lg,
		useMemo: ug,
		useReducer: aa,
		useRef: rg,
		useState: function() {
			return aa(ol)
		},
		useDebugValue: Fc,
		useDeferredValue: function(e) {
			var t = Tt();
			return Le === null ? t.memoizedState = e : cg(t, Le.memoizedState, e)
		},
		useTransition: function() {
			var e = aa(ol)[0],
				t = Tt().memoizedState;
			return [e, t]
		},
		useMutableSource: Ym,
		useSyncExternalStore: Xm,
		useId: fg,
		unstable_isNewReconciler: !1
	};

function Kr(e, t) {
	try {
		var n = "",
			r = t;
		do n += px(r), r = r.return; while (r);
		var i = n
	} catch (l) {
		i = `
Error generating stack: ` + l.message + `
` + l.stack
	}
	return {
		value: e,
		source: t,
		stack: i,
		digest: null
	}
}

function ua(e, t, n) {
	return {
		value: e,
		source: null,
		stack: n ?? null,
		digest: t ?? null
	}
}

function wu(e, t) {
	try {
		console.error(t.value)
	} catch (n) {
		setTimeout(function() {
			throw n
		})
	}
}
var Uw = typeof WeakMap == "function" ? WeakMap : Map;

function mg(e, t, n) {
	n = ln(-1, n), n.tag = 3, n.payload = {
		element: null
	};
	var r = t.value;
	return n.callback = function() {
		$o || ($o = !0, Au = r), wu(e, t)
	}, n
}

function gg(e, t, n) {
	n = ln(-1, n), n.tag = 3;
	var r = e.type.getDerivedStateFromError;
	if (typeof r == "function") {
		var i = t.value;
		n.payload = function() {
			return r(i)
		}, n.callback = function() {
			wu(e, t)
		}
	}
	var l = e.stateNode;
	return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
		wu(e, t), typeof r != "function" && (Dn === null ? Dn = new Set([this]) : Dn.add(this));
		var o = t.stack;
		this.componentDidCatch(t.value, {
			componentStack: o !== null ? o : ""
		})
	}), n
}

function bd(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new Uw;
		var i = new Set;
		r.set(t, i)
	} else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
	i.has(n) || (i.add(n), e = tv.bind(null, e, t, n), t.then(e, e))
}

function Td(e) {
	do {
		var t;
		if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
		e = e.return
	} while (e !== null);
	return null
}

function Od(e, t, n, r, i) {
	return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ln(-1, 1), t.tag = 2, Mn(n, t, 1))), n.lanes |= 1), e)
}
var Vw = dn.ReactCurrentOwner,
	nt = !1;

function Ze(e, t, n, r) {
	t.child = e === null ? Qm(t, null, n, r) : Xr(t, e.child, n, r)
}

function Ad(e, t, n, r, i) {
	n = n.render;
	var l = t.ref;
	return Hr(t, i), r = Dc(e, t, n, r, l, i), n = Rc(), e !== null && !nt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, cn(e, t, i)) : (ye && n && Ec(t), t.flags |= 1, Ze(e, t, r, i), t.child)
}

function jd(e, t, n, r, i) {
	if (e === null) {
		var l = n.type;
		return typeof l == "function" && !qc(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, yg(e, t, l, r, i)) : (e = po(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
	}
	if (l = e.child, !(e.lanes & i)) {
		var o = l.memoizedProps;
		if (n = n.compare, n = n !== null ? n : Ki, n(o, r) && e.ref === t.ref) return cn(e, t, i)
	}
	return t.flags |= 1, e = zn(l, r), e.ref = t.ref, e.return = t, t.child = e
}

function yg(e, t, n, r, i) {
	if (e !== null) {
		var l = e.memoizedProps;
		if (Ki(l, r) && e.ref === t.ref)
			if (nt = !1, t.pendingProps = r = l, (e.lanes & i) !== 0) e.flags & 131072 && (nt = !0);
			else return t.lanes = e.lanes, cn(e, t, i)
	}
	return vu(e, t, n, r, i)
}

function xg(e, t, n) {
	var r = t.pendingProps,
		i = r.children,
		l = e !== null ? e.memoizedState : null;
	if (r.mode === "hidden")
		if (!(t.mode & 1)) t.memoizedState = {
			baseLanes: 0,
			cachePool: null,
			transitions: null
		}, he(_r, ut), ut |= n;
		else {
			if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
				baseLanes: e,
				cachePool: null,
				transitions: null
			}, t.updateQueue = null, he(_r, ut), ut |= e, null;
			t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			}, r = l !== null ? l.baseLanes : n, he(_r, ut), ut |= r
		}
	else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, he(_r, ut), ut |= r;
	return Ze(e, t, i, n), t.child
}

function wg(e, t) {
	var n = t.ref;
	(e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function vu(e, t, n, r, i) {
	var l = it(n) ? ar : qe.current;
	return l = Gr(t, l), Hr(t, i), n = Dc(e, t, n, r, l, i), r = Rc(), e !== null && !nt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, cn(e, t, i)) : (ye && r && Ec(t), t.flags |= 1, Ze(e, t, n, i), t.child)
}

function Pd(e, t, n, r, i) {
	if (it(n)) {
		var l = !0;
		Lo(t)
	} else l = !1;
	if (Hr(t, i), t.stateNode === null) co(e, t), qm(t, n, r), xu(t, n, r, i), r = !0;
	else if (e === null) {
		var o = t.stateNode,
			s = t.memoizedProps;
		o.props = s;
		var a = o.context,
			u = n.contextType;
		typeof u == "object" && u !== null ? u = bt(u) : (u = it(n) ? ar : qe.current, u = Gr(t, u));
		var c = n.getDerivedStateFromProps,
			f = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
		f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || a !== u) && Sd(t, o, r, u), kn = !1;
		var h = t.memoizedState;
		o.state = h, Fo(t, r, o, i), a = t.memoizedState, s !== r || h !== a || rt.current || kn ? (typeof c == "function" && (yu(t, n, c, r), a = t.memoizedState), (s = kn || kd(t, n, s, r, h, a, u)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), o.props = r, o.state = a, o.context = u, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
	} else {
		o = t.stateNode, Hm(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : Lt(t.type, s), o.props = u, f = t.pendingProps, h = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = bt(a) : (a = it(n) ? ar : qe.current, a = Gr(t, a));
		var d = n.getDerivedStateFromProps;
		(c = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== f || h !== a) && Sd(t, o, r, a), kn = !1, h = t.memoizedState, o.state = h, Fo(t, r, o, i);
		var p = t.memoizedState;
		s !== f || h !== p || rt.current || kn ? (typeof d == "function" && (yu(t, n, d, r), p = t.memoizedState), (u = kn || kd(t, n, u, r, h, p, a) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, p, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, p, a)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), o.props = r, o.state = p, o.context = a, r = u) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1)
	}
	return ku(e, t, n, r, l, i)
}

function ku(e, t, n, r, i, l) {
	wg(e, t);
	var o = (t.flags & 128) !== 0;
	if (!r && !o) return i && gd(t, n, !1), cn(e, t, l);
	r = t.stateNode, Vw.current = t;
	var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
	return t.flags |= 1, e !== null && o ? (t.child = Xr(t, e.child, null, l), t.child = Xr(t, null, s, l)) : Ze(e, t, s, l), t.memoizedState = r.state, i && gd(t, n, !0), t.child
}

function vg(e) {
	var t = e.stateNode;
	t.pendingContext ? md(e, t.pendingContext, t.pendingContext !== t.context) : t.context && md(e, t.context, !1), Pc(e, t.containerInfo)
}

function Id(e, t, n, r, i) {
	return Yr(), Nc(i), t.flags |= 256, Ze(e, t, n, r), t.child
}
var Su = {
	dehydrated: null,
	treeContext: null,
	retryLane: 0
};

function Eu(e) {
	return {
		baseLanes: e,
		cachePool: null,
		transitions: null
	}
}

function kg(e, t, n) {
	var r = t.pendingProps,
		i = we.current,
		l = !1,
		o = (t.flags & 128) !== 0,
		s;
	if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), s ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), he(we, i & 1), e === null) return mu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, o = {
		mode: "hidden",
		children: o
	}, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = o) : l = ws(o, r, 0, null), e = or(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Eu(n), t.memoizedState = Su, e) : _c(t, o));
	if (i = e.memoizedState, i !== null && (s = i.dehydrated, s !== null)) return $w(e, t, o, r, s, i, n);
	if (l) {
		l = r.fallback, o = t.mode, i = e.child, s = i.sibling;
		var a = {
			mode: "hidden",
			children: r.children
		};
		return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = zn(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), s !== null ? l = zn(s, l) : (l = or(l, o, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, o = e.child.memoizedState, o = o === null ? Eu(n) : {
			baseLanes: o.baseLanes | n,
			cachePool: null,
			transitions: o.transitions
		}, l.memoizedState = o, l.childLanes = e.childLanes & ~n, t.memoizedState = Su, r
	}
	return l = e.child, e = l.sibling, r = zn(l, {
		mode: "visible",
		children: r.children
	}), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function _c(e, t) {
	return t = ws({
		mode: "visible",
		children: t
	}, e.mode, 0, null), t.return = e, e.child = t
}

function Ul(e, t, n, r) {
	return r !== null && Nc(r), Xr(t, e.child, null, n), e = _c(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function $w(e, t, n, r, i, l, o) {
	if (n) return t.flags & 256 ? (t.flags &= -257, r = ua(Error(P(422))), Ul(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, i = t.mode, r = ws({
		mode: "visible",
		children: r.children
	}, i, 0, null), l = or(l, i, o, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && Xr(t, e.child, null, o), t.child.memoizedState = Eu(o), t.memoizedState = Su, l);
	if (!(t.mode & 1)) return Ul(e, t, o, null);
	if (i.data === "$!") {
		if (r = i.nextSibling && i.nextSibling.dataset, r) var s = r.dgst;
		return r = s, l = Error(P(419)), r = ua(l, r, void 0), Ul(e, t, o, r)
	}
	if (s = (o & e.childLanes) !== 0, nt || s) {
		if (r = Re, r !== null) {
			switch (o & -o) {
				case 4:
					i = 2;
					break;
				case 16:
					i = 8;
					break;
				case 64:
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
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					i = 32;
					break;
				case 536870912:
					i = 268435456;
					break;
				default:
					i = 0
			}
			i = i & (r.suspendedLanes | o) ? 0 : i, i !== 0 && i !== l.retryLane && (l.retryLane = i, un(e, i), _t(r, e, i, -1))
		}
		return Wc(), r = ua(Error(P(421))), Ul(e, t, o, r)
	}
	return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = nv.bind(null, e), i._reactRetry = t, null) : (e = l.treeContext, ct = Ln(i.nextSibling), ft = t, ye = !0, Dt = null, e !== null && (xt[wt++] = tn, xt[wt++] = nn, xt[wt++] = ur, tn = e.id, nn = e.overflow, ur = t), t = _c(t, r.children), t.flags |= 4096, t)
}

function Ld(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), gu(e.return, t, n)
}

function ca(e, t, n, r, i) {
	var l = e.memoizedState;
	l === null ? e.memoizedState = {
		isBackwards: t,
		rendering: null,
		renderingStartTime: 0,
		last: r,
		tail: n,
		tailMode: i
	} : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = i)
}

function Sg(e, t, n) {
	var r = t.pendingProps,
		i = r.revealOrder,
		l = r.tail;
	if (Ze(e, t, r.children, n), r = we.current, r & 2) r = r & 1 | 2, t.flags |= 128;
	else {
		if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && Ld(e, n, t);
			else if (e.tag === 19) Ld(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue
			}
			if (e === t) break e;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break e;
				e = e.return
			}
			e.sibling.return = e.return, e = e.sibling
		}
		r &= 1
	}
	if (he(we, r), !(t.mode & 1)) t.memoizedState = null;
	else switch (i) {
		case "forwards":
			for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && _o(e) === null && (i = n), n = n.sibling;
			n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), ca(t, !1, i, n, l);
			break;
		case "backwards":
			for (n = null, i = t.child, t.child = null; i !== null;) {
				if (e = i.alternate, e !== null && _o(e) === null) {
					t.child = i;
					break
				}
				e = i.sibling, i.sibling = n, n = i, i = e
			}
			ca(t, !0, n, null, l);
			break;
		case "together":
			ca(t, !1, null, null, void 0);
			break;
		default:
			t.memoizedState = null
	}
	return t.child
}

function co(e, t) {
	!(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function cn(e, t, n) {
	if (e !== null && (t.dependencies = e.dependencies), fr |= t.lanes, !(n & t.childLanes)) return null;
	if (e !== null && t.child !== e.child) throw Error(P(153));
	if (t.child !== null) {
		for (e = t.child, n = zn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = zn(e, e.pendingProps), n.return = t;
		n.sibling = null
	}
	return t.child
}

function Hw(e, t, n) {
	switch (t.tag) {
		case 3:
			vg(t), Yr();
			break;
		case 5:
			Gm(t);
			break;
		case 1:
			it(t.type) && Lo(t);
			break;
		case 4:
			Pc(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				i = t.memoizedProps.value;
			he(Ro, r._currentValue), r._currentValue = i;
			break;
		case 13:
			if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (he(we, we.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? kg(e, t, n) : (he(we, we.current & 1), e = cn(e, t, n), e !== null ? e.sibling : null);
			he(we, we.current & 1);
			break;
		case 19:
			if (r = (n & t.childLanes) !== 0, e.flags & 128) {
				if (r) return Sg(e, t, n);
				t.flags |= 128
			}
			if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), he(we, we.current), r) break;
			return null;
		case 22:
		case 23:
			return t.lanes = 0, xg(e, t, n)
	}
	return cn(e, t, n)
}
var Eg, Cu, Cg, Ng;
Eg = function(e, t) {
	for (var n = t.child; n !== null;) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			n.child.return = n, n = n.child;
			continue
		}
		if (n === t) break;
		for (; n.sibling === null;) {
			if (n.return === null || n.return === t) return;
			n = n.return
		}
		n.sibling.return = n.return, n = n.sibling
	}
};
Cu = function() {};
Cg = function(e, t, n, r) {
	var i = e.memoizedProps;
	if (i !== r) {
		e = t.stateNode, rr(Qt.current);
		var l = null;
		switch (n) {
			case "input":
				i = qa(e, i), r = qa(e, r), l = [];
				break;
			case "select":
				i = ke({}, i, {
					value: void 0
				}), r = ke({}, r, {
					value: void 0
				}), l = [];
				break;
			case "textarea":
				i = Ga(e, i), r = Ga(e, r), l = [];
				break;
			default:
				typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Po)
		}
		Xa(n, r);
		var o;
		n = null;
		for (u in i)
			if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
				if (u === "style") {
					var s = i[u];
					for (o in s) s.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
				} else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (qi.hasOwnProperty(u) ? l || (l = []) : (l = l || []).push(u, null));
		for (u in r) {
			var a = r[u];
			if (s = i != null ? i[u] : void 0, r.hasOwnProperty(u) && a !== s && (a != null || s != null))
				if (u === "style")
					if (s) {
						for (o in s) !s.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
						for (o in a) a.hasOwnProperty(o) && s[o] !== a[o] && (n || (n = {}), n[o] = a[o])
					} else n || (l || (l = []), l.push(u, n)), n = a;
			else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (l = l || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (l = l || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (qi.hasOwnProperty(u) ? (a != null && u === "onScroll" && pe("scroll", e), l || s === a || (l = [])) : (l = l || []).push(u, a))
		}
		n && (l = l || []).push("style", n);
		var u = l;
		(t.updateQueue = u) && (t.flags |= 4)
	}
};
Ng = function(e, t, n, r) {
	n !== r && (t.flags |= 4)
};

function ki(e, t) {
	if (!ye) switch (e.tailMode) {
		case "hidden":
			t = e.tail;
			for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
			n === null ? e.tail = null : n.sibling = null;
			break;
		case "collapsed":
			n = e.tail;
			for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
			r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
	}
}

function Ve(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
	else
		for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
	return e.subtreeFlags |= r, e.childLanes = n, t
}

function Ww(e, t, n) {
	var r = t.pendingProps;
	switch (Cc(t), t.tag) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return Ve(t), null;
		case 1:
			return it(t.type) && Io(), Ve(t), null;
		case 3:
			return r = t.stateNode, Jr(), ge(rt), ge(qe), Lc(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (_l(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Dt !== null && (Iu(Dt), Dt = null))), Cu(e, t), Ve(t), null;
		case 5:
			Ic(t);
			var i = rr(il.current);
			if (n = t.type, e !== null && t.stateNode != null) Cg(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(P(166));
					return Ve(t), null
				}
				if (e = rr(Qt.current), _l(t)) {
					r = t.stateNode, n = t.type;
					var l = t.memoizedProps;
					switch (r[qt] = t, r[nl] = l, e = (t.mode & 1) !== 0, n) {
						case "dialog":
							pe("cancel", r), pe("close", r);
							break;
						case "iframe":
						case "object":
						case "embed":
							pe("load", r);
							break;
						case "video":
						case "audio":
							for (i = 0; i < ji.length; i++) pe(ji[i], r);
							break;
						case "source":
							pe("error", r);
							break;
						case "img":
						case "image":
						case "link":
							pe("error", r), pe("load", r);
							break;
						case "details":
							pe("toggle", r);
							break;
						case "input":
							Vf(r, l), pe("invalid", r);
							break;
						case "select":
							r._wrapperState = {
								wasMultiple: !!l.multiple
							}, pe("invalid", r);
							break;
						case "textarea":
							Hf(r, l), pe("invalid", r)
					}
					Xa(n, l), i = null;
					for (var o in l)
						if (l.hasOwnProperty(o)) {
							var s = l[o];
							o === "children" ? typeof s == "string" ? r.textContent !== s && (l.suppressHydrationWarning !== !0 && Fl(r.textContent, s, e), i = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (l.suppressHydrationWarning !== !0 && Fl(r.textContent, s, e), i = ["children", "" + s]) : qi.hasOwnProperty(o) && s != null && o === "onScroll" && pe("scroll", r)
						} switch (n) {
						case "input":
							jl(r), $f(r, l, !0);
							break;
						case "textarea":
							jl(r), Wf(r);
							break;
						case "select":
						case "option":
							break;
						default:
							typeof l.onClick == "function" && (r.onclick = Po)
					}
					r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
				} else {
					o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Jp(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
						is: r.is
					}) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[qt] = t, e[nl] = r, Eg(e, t, !1, !1), t.stateNode = e;
					e: {
						switch (o = Ja(n, r), n) {
							case "dialog":
								pe("cancel", e), pe("close", e), i = r;
								break;
							case "iframe":
							case "object":
							case "embed":
								pe("load", e), i = r;
								break;
							case "video":
							case "audio":
								for (i = 0; i < ji.length; i++) pe(ji[i], e);
								i = r;
								break;
							case "source":
								pe("error", e), i = r;
								break;
							case "img":
							case "image":
							case "link":
								pe("error", e), pe("load", e), i = r;
								break;
							case "details":
								pe("toggle", e), i = r;
								break;
							case "input":
								Vf(e, r), i = qa(e, r), pe("invalid", e);
								break;
							case "option":
								i = r;
								break;
							case "select":
								e._wrapperState = {
									wasMultiple: !!r.multiple
								}, i = ke({}, r, {
									value: void 0
								}), pe("invalid", e);
								break;
							case "textarea":
								Hf(e, r), i = Ga(e, r), pe("invalid", e);
								break;
							default:
								i = r
						}
						Xa(n, i),
						s = i;
						for (l in s)
							if (s.hasOwnProperty(l)) {
								var a = s[l];
								l === "style" ? tm(e, a) : l === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Kp(e, a)) : l === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Zi(e, a) : typeof a == "number" && Zi(e, "" + a) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (qi.hasOwnProperty(l) ? a != null && l === "onScroll" && pe("scroll", e) : a != null && uc(e, l, a, o))
							} switch (n) {
							case "input":
								jl(e), $f(e, r, !1);
								break;
							case "textarea":
								jl(e), Wf(e);
								break;
							case "option":
								r.value != null && e.setAttribute("value", "" + Bn(r.value));
								break;
							case "select":
								e.multiple = !!r.multiple, l = r.value, l != null ? Br(e, !!r.multiple, l, !1) : r.defaultValue != null && Br(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof i.onClick == "function" && (e.onclick = Po)
						}
						switch (n) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break e;
							case "img":
								r = !0;
								break e;
							default:
								r = !1
						}
					}
					r && (t.flags |= 4)
				}
				t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
			}
			return Ve(t), null;
		case 6:
			if (e && t.stateNode != null) Ng(e, t, e.memoizedProps, r);
			else {
				if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
				if (n = rr(il.current), rr(Qt.current), _l(t)) {
					if (r = t.stateNode, n = t.memoizedProps, r[qt] = t, (l = r.nodeValue !== n) && (e = ft, e !== null)) switch (e.tag) {
						case 3:
							Fl(r.nodeValue, n, (e.mode & 1) !== 0);
							break;
						case 5:
							e.memoizedProps.suppressHydrationWarning !== !0 && Fl(r.nodeValue, n, (e.mode & 1) !== 0)
					}
					l && (t.flags |= 4)
				} else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[qt] = t, t.stateNode = r
			}
			return Ve(t), null;
		case 13:
			if (ge(we), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
				if (ye && ct !== null && t.mode & 1 && !(t.flags & 128)) Vm(), Yr(), t.flags |= 98560, l = !1;
				else if (l = _l(t), r !== null && r.dehydrated !== null) {
					if (e === null) {
						if (!l) throw Error(P(318));
						if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(P(317));
						l[qt] = t
					} else Yr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
					Ve(t), l = !1
				} else Dt !== null && (Iu(Dt), Dt = null), l = !0;
				if (!l) return t.flags & 65536 ? t : null
			}
			return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || we.current & 1 ? Me === 0 && (Me = 3) : Wc())), t.updateQueue !== null && (t.flags |= 4), Ve(t), null);
		case 4:
			return Jr(), Cu(e, t), e === null && el(t.stateNode.containerInfo), Ve(t), null;
		case 10:
			return Oc(t.type._context), Ve(t), null;
		case 17:
			return it(t.type) && Io(), Ve(t), null;
		case 19:
			if (ge(we), l = t.memoizedState, l === null) return Ve(t), null;
			if (r = (t.flags & 128) !== 0, o = l.rendering, o === null)
				if (r) ki(l, !1);
				else {
					if (Me !== 0 || e !== null && e.flags & 128)
						for (e = t.child; e !== null;) {
							if (o = _o(e), o !== null) {
								for (t.flags |= 128, ki(l, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) l = n, e = r, l.flags &= 14680066, o = l.alternate, o === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = o.childLanes, l.lanes = o.lanes, l.child = o.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = o.memoizedProps, l.memoizedState = o.memoizedState, l.updateQueue = o.updateQueue, l.type = o.type, e = o.dependencies, l.dependencies = e === null ? null : {
									lanes: e.lanes,
									firstContext: e.firstContext
								}), n = n.sibling;
								return he(we, we.current & 1 | 2), t.child
							}
							e = e.sibling
						}
					l.tail !== null && Te() > ei && (t.flags |= 128, r = !0, ki(l, !1), t.lanes = 4194304)
				}
			else {
				if (!r)
					if (e = _o(o), e !== null) {
						if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ki(l, !0), l.tail === null && l.tailMode === "hidden" && !o.alternate && !ye) return Ve(t), null
					} else 2 * Te() - l.renderingStartTime > ei && n !== 1073741824 && (t.flags |= 128, r = !0, ki(l, !1), t.lanes = 4194304);
				l.isBackwards ? (o.sibling = t.child, t.child = o) : (n = l.last, n !== null ? n.sibling = o : t.child = o, l.last = o)
			}
			return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = Te(), t.sibling = null, n = we.current, he(we, r ? n & 1 | 2 : n & 1), t) : (Ve(t), null);
		case 22:
		case 23:
			return Hc(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ut & 1073741824 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ve(t), null;
		case 24:
			return null;
		case 25:
			return null
	}
	throw Error(P(156, t.tag))
}

function qw(e, t) {
	switch (Cc(t), t.tag) {
		case 1:
			return it(t.type) && Io(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
		case 3:
			return Jr(), ge(rt), ge(qe), Lc(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
		case 5:
			return Ic(t), null;
		case 13:
			if (ge(we), e = t.memoizedState, e !== null && e.dehydrated !== null) {
				if (t.alternate === null) throw Error(P(340));
				Yr()
			}
			return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
		case 19:
			return ge(we), null;
		case 4:
			return Jr(), null;
		case 10:
			return Oc(t.type._context), null;
		case 22:
		case 23:
			return Hc(), null;
		case 24:
			return null;
		default:
			return null
	}
}
var Vl = !1,
	$e = !1,
	Zw = typeof WeakSet == "function" ? WeakSet : Set,
	_ = null;

function Fr(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == "function") try {
			n(null)
		} catch (r) {
			Ne(e, t, r)
		} else n.current = null
}

function Nu(e, t, n) {
	try {
		n()
	} catch (r) {
		Ne(e, t, r)
	}
}
var Md = !1;

function Qw(e, t) {
	if (au = Oo, e = Am(), Sc(e)) {
		if ("selectionStart" in e) var n = {
			start: e.selectionStart,
			end: e.selectionEnd
		};
		else e: {
			n = (n = e.ownerDocument) && n.defaultView || window;
			var r = n.getSelection && n.getSelection();
			if (r && r.rangeCount !== 0) {
				n = r.anchorNode;
				var i = r.anchorOffset,
					l = r.focusNode;
				r = r.focusOffset;
				try {
					n.nodeType, l.nodeType
				} catch {
					n = null;
					break e
				}
				var o = 0,
					s = -1,
					a = -1,
					u = 0,
					c = 0,
					f = e,
					h = null;
				t: for (;;) {
					for (var d; f !== n || i !== 0 && f.nodeType !== 3 || (s = o + i), f !== l || r !== 0 && f.nodeType !== 3 || (a = o + r), f.nodeType === 3 && (o += f.nodeValue.length), (d = f.firstChild) !== null;) h = f, f = d;
					for (;;) {
						if (f === e) break t;
						if (h === n && ++u === i && (s = o), h === l && ++c === r && (a = o), (d = f.nextSibling) !== null) break;
						f = h, h = f.parentNode
					}
					f = d
				}
				n = s === -1 || a === -1 ? null : {
					start: s,
					end: a
				}
			} else n = null
		}
		n = n || {
			start: 0,
			end: 0
		}
	} else n = null;
	for (uu = {
			focusedElem: e,
			selectionRange: n
		}, Oo = !1, _ = t; _ !== null;)
		if (t = _, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, _ = e;
		else
			for (; _ !== null;) {
				t = _;
				try {
					var p = t.alternate;
					if (t.flags & 1024) switch (t.tag) {
						case 0:
						case 11:
						case 15:
							break;
						case 1:
							if (p !== null) {
								var x = p.memoizedProps,
									S = p.memoizedState,
									m = t.stateNode,
									y = m.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Lt(t.type, x), S);
								m.__reactInternalSnapshotBeforeUpdate = y
							}
							break;
						case 3:
							var w = t.stateNode.containerInfo;
							w.nodeType === 1 ? w.textContent = "" : w.nodeType === 9 && w.documentElement && w.removeChild(w.documentElement);
							break;
						case 5:
						case 6:
						case 4:
						case 17:
							break;
						default:
							throw Error(P(163))
					}
				} catch (N) {
					Ne(t, t.return, N)
				}
				if (e = t.sibling, e !== null) {
					e.return = t.return, _ = e;
					break
				}
				_ = t.return
			}
	return p = Md, Md = !1, p
}

function _i(e, t, n) {
	var r = t.updateQueue;
	if (r = r !== null ? r.lastEffect : null, r !== null) {
		var i = r = r.next;
		do {
			if ((i.tag & e) === e) {
				var l = i.destroy;
				i.destroy = void 0, l !== void 0 && Nu(t, n, l)
			}
			i = i.next
		} while (i !== r)
	}
}

function ys(e, t) {
	if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
		var n = t = t.next;
		do {
			if ((n.tag & e) === e) {
				var r = n.create;
				n.destroy = r()
			}
			n = n.next
		} while (n !== t)
	}
}

function bu(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n
		}
		typeof t == "function" ? t(e) : t.current = e
	}
}

function bg(e) {
	var t = e.alternate;
	t !== null && (e.alternate = null, bg(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[qt], delete t[nl], delete t[du], delete t[jw], delete t[Pw])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Tg(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Dd(e) {
	e: for (;;) {
		for (; e.sibling === null;) {
			if (e.return === null || Tg(e.return)) return null;
			e = e.return
		}
		for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			e.child.return = e, e = e.child
		}
		if (!(e.flags & 2)) return e.stateNode
	}
}

function Tu(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Po));
	else if (r !== 4 && (e = e.child, e !== null))
		for (Tu(e, t, n), e = e.sibling; e !== null;) Tu(e, t, n), e = e.sibling
}

function Ou(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && (e = e.child, e !== null))
		for (Ou(e, t, n), e = e.sibling; e !== null;) Ou(e, t, n), e = e.sibling
}
var ze = null,
	Mt = !1;

function mn(e, t, n) {
	for (n = n.child; n !== null;) Og(e, t, n), n = n.sibling
}

function Og(e, t, n) {
	if (Zt && typeof Zt.onCommitFiberUnmount == "function") try {
		Zt.onCommitFiberUnmount(us, n)
	} catch {}
	switch (n.tag) {
		case 5:
			$e || Fr(n, t);
		case 6:
			var r = ze,
				i = Mt;
			ze = null, mn(e, t, n), ze = r, Mt = i, ze !== null && (Mt ? (e = ze, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ze.removeChild(n.stateNode));
			break;
		case 18:
			ze !== null && (Mt ? (e = ze, n = n.stateNode, e.nodeType === 8 ? ra(e.parentNode, n) : e.nodeType === 1 && ra(e, n), Xi(e)) : ra(ze, n.stateNode));
			break;
		case 4:
			r = ze, i = Mt, ze = n.stateNode.containerInfo, Mt = !0, mn(e, t, n), ze = r, Mt = i;
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (!$e && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
				i = r = r.next;
				do {
					var l = i,
						o = l.destroy;
					l = l.tag, o !== void 0 && (l & 2 || l & 4) && Nu(n, t, o), i = i.next
				} while (i !== r)
			}
			mn(e, t, n);
			break;
		case 1:
			if (!$e && (Fr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
				r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
			} catch (s) {
				Ne(n, t, s)
			}
			mn(e, t, n);
			break;
		case 21:
			mn(e, t, n);
			break;
		case 22:
			n.mode & 1 ? ($e = (r = $e) || n.memoizedState !== null, mn(e, t, n), $e = r) : mn(e, t, n);
			break;
		default:
			mn(e, t, n)
	}
}

function Rd(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new Zw), t.forEach(function(r) {
			var i = rv.bind(null, e, r);
			n.has(r) || (n.add(r), r.then(i, i))
		})
	}
}

function jt(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var i = n[r];
			try {
				var l = e,
					o = t,
					s = o;
				e: for (; s !== null;) {
					switch (s.tag) {
						case 5:
							ze = s.stateNode, Mt = !1;
							break e;
						case 3:
							ze = s.stateNode.containerInfo, Mt = !0;
							break e;
						case 4:
							ze = s.stateNode.containerInfo, Mt = !0;
							break e
					}
					s = s.return
				}
				if (ze === null) throw Error(P(160));
				Og(l, o, i), ze = null, Mt = !1;
				var a = i.alternate;
				a !== null && (a.return = null), i.return = null
			} catch (u) {
				Ne(i, t, u)
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null;) Ag(t, e), t = t.sibling
}

function Ag(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if (jt(t, e), $t(e), r & 4) {
				try {
					_i(3, e, e.return), ys(3, e)
				} catch (x) {
					Ne(e, e.return, x)
				}
				try {
					_i(5, e, e.return)
				} catch (x) {
					Ne(e, e.return, x)
				}
			}
			break;
		case 1:
			jt(t, e), $t(e), r & 512 && n !== null && Fr(n, n.return);
			break;
		case 5:
			if (jt(t, e), $t(e), r & 512 && n !== null && Fr(n, n.return), e.flags & 32) {
				var i = e.stateNode;
				try {
					Zi(i, "")
				} catch (x) {
					Ne(e, e.return, x)
				}
			}
			if (r & 4 && (i = e.stateNode, i != null)) {
				var l = e.memoizedProps,
					o = n !== null ? n.memoizedProps : l,
					s = e.type,
					a = e.updateQueue;
				if (e.updateQueue = null, a !== null) try {
					s === "input" && l.type === "radio" && l.name != null && Yp(i, l), Ja(s, o);
					var u = Ja(s, l);
					for (o = 0; o < a.length; o += 2) {
						var c = a[o],
							f = a[o + 1];
						c === "style" ? tm(i, f) : c === "dangerouslySetInnerHTML" ? Kp(i, f) : c === "children" ? Zi(i, f) : uc(i, c, f, u)
					}
					switch (s) {
						case "input":
							Za(i, l);
							break;
						case "textarea":
							Xp(i, l);
							break;
						case "select":
							var h = i._wrapperState.wasMultiple;
							i._wrapperState.wasMultiple = !!l.multiple;
							var d = l.value;
							d != null ? Br(i, !!l.multiple, d, !1) : h !== !!l.multiple && (l.defaultValue != null ? Br(i, !!l.multiple, l.defaultValue, !0) : Br(i, !!l.multiple, l.multiple ? [] : "", !1))
					}
					i[nl] = l
				} catch (x) {
					Ne(e, e.return, x)
				}
			}
			break;
		case 6:
			if (jt(t, e), $t(e), r & 4) {
				if (e.stateNode === null) throw Error(P(162));
				i = e.stateNode, l = e.memoizedProps;
				try {
					i.nodeValue = l
				} catch (x) {
					Ne(e, e.return, x)
				}
			}
			break;
		case 3:
			if (jt(t, e), $t(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
				Xi(t.containerInfo)
			} catch (x) {
				Ne(e, e.return, x)
			}
			break;
		case 4:
			jt(t, e), $t(e);
			break;
		case 13:
			jt(t, e), $t(e), i = e.child, i.flags & 8192 && (l = i.memoizedState !== null, i.stateNode.isHidden = l, !l || i.alternate !== null && i.alternate.memoizedState !== null || (Vc = Te())), r & 4 && Rd(e);
			break;
		case 22:
			if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? ($e = (u = $e) || c, jt(t, e), $e = u) : jt(t, e), $t(e), r & 8192) {
				if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
					for (_ = e, c = e.child; c !== null;) {
						for (f = _ = c; _ !== null;) {
							switch (h = _, d = h.child, h.tag) {
								case 0:
								case 11:
								case 14:
								case 15:
									_i(4, h, h.return);
									break;
								case 1:
									Fr(h, h.return);
									var p = h.stateNode;
									if (typeof p.componentWillUnmount == "function") {
										r = h, n = h.return;
										try {
											t = r, p.props = t.memoizedProps, p.state = t.memoizedState, p.componentWillUnmount()
										} catch (x) {
											Ne(r, n, x)
										}
									}
									break;
								case 5:
									Fr(h, h.return);
									break;
								case 22:
									if (h.memoizedState !== null) {
										Fd(f);
										continue
									}
							}
							d !== null ? (d.return = h, _ = d) : Fd(f)
						}
						c = c.sibling
					}
				e: for (c = null, f = e;;) {
					if (f.tag === 5) {
						if (c === null) {
							c = f;
							try {
								i = f.stateNode, u ? (l = i.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (s = f.stateNode, a = f.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = em("display", o))
							} catch (x) {
								Ne(e, e.return, x)
							}
						}
					} else if (f.tag === 6) {
						if (c === null) try {
							f.stateNode.nodeValue = u ? "" : f.memoizedProps
						} catch (x) {
							Ne(e, e.return, x)
						}
					} else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
						f.child.return = f, f = f.child;
						continue
					}
					if (f === e) break e;
					for (; f.sibling === null;) {
						if (f.return === null || f.return === e) break e;
						c === f && (c = null), f = f.return
					}
					c === f && (c = null), f.sibling.return = f.return, f = f.sibling
				}
			}
			break;
		case 19:
			jt(t, e), $t(e), r & 4 && Rd(e);
			break;
		case 21:
			break;
		default:
			jt(t, e), $t(e)
	}
}

function $t(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null;) {
					if (Tg(n)) {
						var r = n;
						break e
					}
					n = n.return
				}
				throw Error(P(160))
			}
			switch (r.tag) {
				case 5:
					var i = r.stateNode;
					r.flags & 32 && (Zi(i, ""), r.flags &= -33);
					var l = Dd(e);
					Ou(e, l, i);
					break;
				case 3:
				case 4:
					var o = r.stateNode.containerInfo,
						s = Dd(e);
					Tu(e, s, o);
					break;
				default:
					throw Error(P(161))
			}
		}
		catch (a) {
			Ne(e, e.return, a)
		}
		e.flags &= -3
	}
	t & 4096 && (e.flags &= -4097)
}

function Gw(e, t, n) {
	_ = e, jg(e)
}

function jg(e, t, n) {
	for (var r = (e.mode & 1) !== 0; _ !== null;) {
		var i = _,
			l = i.child;
		if (i.tag === 22 && r) {
			var o = i.memoizedState !== null || Vl;
			if (!o) {
				var s = i.alternate,
					a = s !== null && s.memoizedState !== null || $e;
				s = Vl;
				var u = $e;
				if (Vl = o, ($e = a) && !u)
					for (_ = i; _ !== null;) o = _, a = o.child, o.tag === 22 && o.memoizedState !== null ? _d(i) : a !== null ? (a.return = o, _ = a) : _d(i);
				for (; l !== null;) _ = l, jg(l), l = l.sibling;
				_ = i, Vl = s, $e = u
			}
			zd(e)
		} else i.subtreeFlags & 8772 && l !== null ? (l.return = i, _ = l) : zd(e)
	}
}

function zd(e) {
	for (; _ !== null;) {
		var t = _;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772) switch (t.tag) {
					case 0:
					case 11:
					case 15:
						$e || ys(5, t);
						break;
					case 1:
						var r = t.stateNode;
						if (t.flags & 4 && !$e)
							if (n === null) r.componentDidMount();
							else {
								var i = t.elementType === t.type ? n.memoizedProps : Lt(t.type, n.memoizedProps);
								r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
							} var l = t.updateQueue;
						l !== null && vd(t, l, r);
						break;
					case 3:
						var o = t.updateQueue;
						if (o !== null) {
							if (n = null, t.child !== null) switch (t.child.tag) {
								case 5:
									n = t.child.stateNode;
									break;
								case 1:
									n = t.child.stateNode
							}
							vd(t, o, n)
						}
						break;
					case 5:
						var s = t.stateNode;
						if (n === null && t.flags & 4) {
							n = s;
							var a = t.memoizedProps;
							switch (t.type) {
								case "button":
								case "input":
								case "select":
								case "textarea":
									a.autoFocus && n.focus();
									break;
								case "img":
									a.src && (n.src = a.src)
							}
						}
						break;
					case 6:
						break;
					case 4:
						break;
					case 12:
						break;
					case 13:
						if (t.memoizedState === null) {
							var u = t.alternate;
							if (u !== null) {
								var c = u.memoizedState;
								if (c !== null) {
									var f = c.dehydrated;
									f !== null && Xi(f)
								}
							}
						}
						break;
					case 19:
					case 17:
					case 21:
					case 22:
					case 23:
					case 25:
						break;
					default:
						throw Error(P(163))
				}
				$e || t.flags & 512 && bu(t)
			} catch (h) {
				Ne(t, t.return, h)
			}
		}
		if (t === e) {
			_ = null;
			break
		}
		if (n = t.sibling, n !== null) {
			n.return = t.return, _ = n;
			break
		}
		_ = t.return
	}
}

function Fd(e) {
	for (; _ !== null;) {
		var t = _;
		if (t === e) {
			_ = null;
			break
		}
		var n = t.sibling;
		if (n !== null) {
			n.return = t.return, _ = n;
			break
		}
		_ = t.return
	}
}

function _d(e) {
	for (; _ !== null;) {
		var t = _;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						ys(4, t)
					} catch (a) {
						Ne(t, n, a)
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == "function") {
						var i = t.return;
						try {
							r.componentDidMount()
						} catch (a) {
							Ne(t, i, a)
						}
					}
					var l = t.return;
					try {
						bu(t)
					} catch (a) {
						Ne(t, l, a)
					}
					break;
				case 5:
					var o = t.return;
					try {
						bu(t)
					} catch (a) {
						Ne(t, o, a)
					}
			}
		} catch (a) {
			Ne(t, t.return, a)
		}
		if (t === e) {
			_ = null;
			break
		}
		var s = t.sibling;
		if (s !== null) {
			s.return = t.return, _ = s;
			break
		}
		_ = t.return
	}
}
var Yw = Math.ceil,
	Vo = dn.ReactCurrentDispatcher,
	Bc = dn.ReactCurrentOwner,
	Ct = dn.ReactCurrentBatchConfig,
	ne = 0,
	Re = null,
	je = null,
	Fe = 0,
	ut = 0,
	_r = $n(0),
	Me = 0,
	al = null,
	fr = 0,
	xs = 0,
	Uc = 0,
	Bi = null,
	tt = null,
	Vc = 0,
	ei = 1 / 0,
	Kt = null,
	$o = !1,
	Au = null,
	Dn = null,
	$l = !1,
	Tn = null,
	Ho = 0,
	Ui = 0,
	ju = null,
	fo = -1,
	ho = 0;

function Ye() {
	return ne & 6 ? Te() : fo !== -1 ? fo : fo = Te()
}

function Rn(e) {
	return e.mode & 1 ? ne & 2 && Fe !== 0 ? Fe & -Fe : Lw.transition !== null ? (ho === 0 && (ho = hm()), ho) : (e = oe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : vm(e.type)), e) : 1
}

function _t(e, t, n, r) {
	if (50 < Ui) throw Ui = 0, ju = null, Error(P(185));
	dl(e, n, r), (!(ne & 2) || e !== Re) && (e === Re && (!(ne & 2) && (xs |= n), Me === 4 && Cn(e, Fe)), lt(e, r), n === 1 && ne === 0 && !(t.mode & 1) && (ei = Te() + 500, ps && Hn()))
}

function lt(e, t) {
	var n = e.callbackNode;
	Lx(e, t);
	var r = To(e, e === Re ? Fe : 0);
	if (r === 0) n !== null && Qf(n), e.callbackNode = null, e.callbackPriority = 0;
	else if (t = r & -r, e.callbackPriority !== t) {
		if (n != null && Qf(n), t === 1) e.tag === 0 ? Iw(Bd.bind(null, e)) : _m(Bd.bind(null, e)), Ow(function() {
			!(ne & 6) && Hn()
		}), n = null;
		else {
			switch (pm(r)) {
				case 1:
					n = pc;
					break;
				case 4:
					n = fm;
					break;
				case 16:
					n = bo;
					break;
				case 536870912:
					n = dm;
					break;
				default:
					n = bo
			}
			n = Fg(n, Pg.bind(null, e))
		}
		e.callbackPriority = t, e.callbackNode = n
	}
}

function Pg(e, t) {
	if (fo = -1, ho = 0, ne & 6) throw Error(P(327));
	var n = e.callbackNode;
	if (Wr() && e.callbackNode !== n) return null;
	var r = To(e, e === Re ? Fe : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = Wo(e, r);
	else {
		t = r;
		var i = ne;
		ne |= 2;
		var l = Lg();
		(Re !== e || Fe !== t) && (Kt = null, ei = Te() + 500, lr(e, t));
		do try {
			Kw();
			break
		} catch (s) {
			Ig(e, s)
		}
		while (1);
		Tc(), Vo.current = l, ne = i, je !== null ? t = 0 : (Re = null, Fe = 0, t = Me)
	}
	if (t !== 0) {
		if (t === 2 && (i = ru(e), i !== 0 && (r = i, t = Pu(e, i))), t === 1) throw n = al, lr(e, 0), Cn(e, r), lt(e, Te()), n;
		if (t === 6) Cn(e, r);
		else {
			if (i = e.current.alternate, !(r & 30) && !Xw(i) && (t = Wo(e, r), t === 2 && (l = ru(e), l !== 0 && (r = l, t = Pu(e, l))), t === 1)) throw n = al, lr(e, 0), Cn(e, r), lt(e, Te()), n;
			switch (e.finishedWork = i, e.finishedLanes = r, t) {
				case 0:
				case 1:
					throw Error(P(345));
				case 2:
					Kn(e, tt, Kt);
					break;
				case 3:
					if (Cn(e, r), (r & 130023424) === r && (t = Vc + 500 - Te(), 10 < t)) {
						if (To(e, 0) !== 0) break;
						if (i = e.suspendedLanes, (i & r) !== r) {
							Ye(), e.pingedLanes |= e.suspendedLanes & i;
							break
						}
						e.timeoutHandle = fu(Kn.bind(null, e, tt, Kt), t);
						break
					}
					Kn(e, tt, Kt);
					break;
				case 4:
					if (Cn(e, r), (r & 4194240) === r) break;
					for (t = e.eventTimes, i = -1; 0 < r;) {
						var o = 31 - Ft(r);
						l = 1 << o, o = t[o], o > i && (i = o), r &= ~l
					}
					if (r = i, r = Te() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Yw(r / 1960)) - r, 10 < r) {
						e.timeoutHandle = fu(Kn.bind(null, e, tt, Kt), r);
						break
					}
					Kn(e, tt, Kt);
					break;
				case 5:
					Kn(e, tt, Kt);
					break;
				default:
					throw Error(P(329))
			}
		}
	}
	return lt(e, Te()), e.callbackNode === n ? Pg.bind(null, e) : null
}

function Pu(e, t) {
	var n = Bi;
	return e.current.memoizedState.isDehydrated && (lr(e, t).flags |= 256), e = Wo(e, t), e !== 2 && (t = tt, tt = n, t !== null && Iu(t)), e
}

function Iu(e) {
	tt === null ? tt = e : tt.push.apply(tt, e)
}

function Xw(e) {
	for (var t = e;;) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && (n = n.stores, n !== null))
				for (var r = 0; r < n.length; r++) {
					var i = n[r],
						l = i.getSnapshot;
					i = i.value;
					try {
						if (!Ut(l(), i)) return !1
					} catch {
						return !1
					}
				}
		}
		if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
		else {
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return !0;
				t = t.return
			}
			t.sibling.return = t.return, t = t.sibling
		}
	}
	return !0
}

function Cn(e, t) {
	for (t &= ~Uc, t &= ~xs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
		var n = 31 - Ft(t),
			r = 1 << n;
		e[n] = -1, t &= ~r
	}
}

function Bd(e) {
	if (ne & 6) throw Error(P(327));
	Wr();
	var t = To(e, 0);
	if (!(t & 1)) return lt(e, Te()), null;
	var n = Wo(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = ru(e);
		r !== 0 && (t = r, n = Pu(e, r))
	}
	if (n === 1) throw n = al, lr(e, 0), Cn(e, t), lt(e, Te()), n;
	if (n === 6) throw Error(P(345));
	return e.finishedWork = e.current.alternate, e.finishedLanes = t, Kn(e, tt, Kt), lt(e, Te()), null
}

function $c(e, t) {
	var n = ne;
	ne |= 1;
	try {
		return e(t)
	} finally {
		ne = n, ne === 0 && (ei = Te() + 500, ps && Hn())
	}
}

function dr(e) {
	Tn !== null && Tn.tag === 0 && !(ne & 6) && Wr();
	var t = ne;
	ne |= 1;
	var n = Ct.transition,
		r = oe;
	try {
		if (Ct.transition = null, oe = 1, e) return e()
	} finally {
		oe = r, Ct.transition = n, ne = t, !(ne & 6) && Hn()
	}
}

function Hc() {
	ut = _r.current, ge(_r)
}

function lr(e, t) {
	e.finishedWork = null, e.finishedLanes = 0;
	var n = e.timeoutHandle;
	if (n !== -1 && (e.timeoutHandle = -1, Tw(n)), je !== null)
		for (n = je.return; n !== null;) {
			var r = n;
			switch (Cc(r), r.tag) {
				case 1:
					r = r.type.childContextTypes, r != null && Io();
					break;
				case 3:
					Jr(), ge(rt), ge(qe), Lc();
					break;
				case 5:
					Ic(r);
					break;
				case 4:
					Jr();
					break;
				case 13:
					ge(we);
					break;
				case 19:
					ge(we);
					break;
				case 10:
					Oc(r.type._context);
					break;
				case 22:
				case 23:
					Hc()
			}
			n = n.return
		}
	if (Re = e, je = e = zn(e.current, null), Fe = ut = t, Me = 0, al = null, Uc = xs = fr = 0, tt = Bi = null, nr !== null) {
		for (t = 0; t < nr.length; t++)
			if (n = nr[t], r = n.interleaved, r !== null) {
				n.interleaved = null;
				var i = r.next,
					l = n.pending;
				if (l !== null) {
					var o = l.next;
					l.next = i, r.next = o
				}
				n.pending = r
			} nr = null
	}
	return e
}

function Ig(e, t) {
	do {
		var n = je;
		try {
			if (Tc(), ao.current = Uo, Bo) {
				for (var r = ve.memoizedState; r !== null;) {
					var i = r.queue;
					i !== null && (i.pending = null), r = r.next
				}
				Bo = !1
			}
			if (cr = 0, De = Le = ve = null, Fi = !1, ll = 0, Bc.current = null, n === null || n.return === null) {
				Me = 1, al = t, je = null;
				break
			}
			e: {
				var l = e,
					o = n.return,
					s = n,
					a = t;
				if (t = Fe, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
					var u = a,
						c = s,
						f = c.tag;
					if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
						var h = c.alternate;
						h ? (c.updateQueue = h.updateQueue, c.memoizedState = h.memoizedState, c.lanes = h.lanes) : (c.updateQueue = null, c.memoizedState = null)
					}
					var d = Td(o);
					if (d !== null) {
						d.flags &= -257, Od(d, o, s, l, t), d.mode & 1 && bd(l, u, t), t = d, a = u;
						var p = t.updateQueue;
						if (p === null) {
							var x = new Set;
							x.add(a), t.updateQueue = x
						} else p.add(a);
						break e
					} else {
						if (!(t & 1)) {
							bd(l, u, t), Wc();
							break e
						}
						a = Error(P(426))
					}
				} else if (ye && s.mode & 1) {
					var S = Td(o);
					if (S !== null) {
						!(S.flags & 65536) && (S.flags |= 256), Od(S, o, s, l, t), Nc(Kr(a, s));
						break e
					}
				}
				l = a = Kr(a, s),
				Me !== 4 && (Me = 2),
				Bi === null ? Bi = [l] : Bi.push(l),
				l = o;do {
					switch (l.tag) {
						case 3:
							l.flags |= 65536, t &= -t, l.lanes |= t;
							var m = mg(l, a, t);
							wd(l, m);
							break e;
						case 1:
							s = a;
							var y = l.type,
								w = l.stateNode;
							if (!(l.flags & 128) && (typeof y.getDerivedStateFromError == "function" || w !== null && typeof w.componentDidCatch == "function" && (Dn === null || !Dn.has(w)))) {
								l.flags |= 65536, t &= -t, l.lanes |= t;
								var N = gg(l, s, t);
								wd(l, N);
								break e
							}
					}
					l = l.return
				} while (l !== null)
			}
			Dg(n)
		} catch (b) {
			t = b, je === n && n !== null && (je = n = n.return);
			continue
		}
		break
	} while (1)
}

function Lg() {
	var e = Vo.current;
	return Vo.current = Uo, e === null ? Uo : e
}

function Wc() {
	(Me === 0 || Me === 3 || Me === 2) && (Me = 4), Re === null || !(fr & 268435455) && !(xs & 268435455) || Cn(Re, Fe)
}

function Wo(e, t) {
	var n = ne;
	ne |= 2;
	var r = Lg();
	(Re !== e || Fe !== t) && (Kt = null, lr(e, t));
	do try {
		Jw();
		break
	} catch (i) {
		Ig(e, i)
	}
	while (1);
	if (Tc(), ne = n, Vo.current = r, je !== null) throw Error(P(261));
	return Re = null, Fe = 0, Me
}

function Jw() {
	for (; je !== null;) Mg(je)
}

function Kw() {
	for (; je !== null && !Cx();) Mg(je)
}

function Mg(e) {
	var t = zg(e.alternate, e, ut);
	e.memoizedProps = e.pendingProps, t === null ? Dg(e) : je = t, Bc.current = null
}

function Dg(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (e = t.return, t.flags & 32768) {
			if (n = qw(n, t), n !== null) {
				n.flags &= 32767, je = n;
				return
			}
			if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
			else {
				Me = 6, je = null;
				return
			}
		} else if (n = Ww(n, t, ut), n !== null) {
			je = n;
			return
		}
		if (t = t.sibling, t !== null) {
			je = t;
			return
		}
		je = t = e
	} while (t !== null);
	Me === 0 && (Me = 5)
}

function Kn(e, t, n) {
	var r = oe,
		i = Ct.transition;
	try {
		Ct.transition = null, oe = 1, ev(e, t, n, r)
	} finally {
		Ct.transition = i, oe = r
	}
	return null
}

function ev(e, t, n, r) {
	do Wr(); while (Tn !== null);
	if (ne & 6) throw Error(P(327));
	n = e.finishedWork;
	var i = e.finishedLanes;
	if (n === null) return null;
	if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(P(177));
	e.callbackNode = null, e.callbackPriority = 0;
	var l = n.lanes | n.childLanes;
	if (Mx(e, l), e === Re && (je = Re = null, Fe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || $l || ($l = !0, Fg(bo, function() {
			return Wr(), null
		})), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
		l = Ct.transition, Ct.transition = null;
		var o = oe;
		oe = 1;
		var s = ne;
		ne |= 4, Bc.current = null, Qw(e, n), Ag(n, e), vw(uu), Oo = !!au, uu = au = null, e.current = n, Gw(n), Nx(), ne = s, oe = o, Ct.transition = l
	} else e.current = n;
	if ($l && ($l = !1, Tn = e, Ho = i), l = e.pendingLanes, l === 0 && (Dn = null), Ox(n.stateNode), lt(e, Te()), t !== null)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
			componentStack: i.stack,
			digest: i.digest
		});
	if ($o) throw $o = !1, e = Au, Au = null, e;
	return Ho & 1 && e.tag !== 0 && Wr(), l = e.pendingLanes, l & 1 ? e === ju ? Ui++ : (Ui = 0, ju = e) : Ui = 0, Hn(), null
}

function Wr() {
	if (Tn !== null) {
		var e = pm(Ho),
			t = Ct.transition,
			n = oe;
		try {
			if (Ct.transition = null, oe = 16 > e ? 16 : e, Tn === null) var r = !1;
			else {
				if (e = Tn, Tn = null, Ho = 0, ne & 6) throw Error(P(331));
				var i = ne;
				for (ne |= 4, _ = e.current; _ !== null;) {
					var l = _,
						o = l.child;
					if (_.flags & 16) {
						var s = l.deletions;
						if (s !== null) {
							for (var a = 0; a < s.length; a++) {
								var u = s[a];
								for (_ = u; _ !== null;) {
									var c = _;
									switch (c.tag) {
										case 0:
										case 11:
										case 15:
											_i(8, c, l)
									}
									var f = c.child;
									if (f !== null) f.return = c, _ = f;
									else
										for (; _ !== null;) {
											c = _;
											var h = c.sibling,
												d = c.return;
											if (bg(c), c === u) {
												_ = null;
												break
											}
											if (h !== null) {
												h.return = d, _ = h;
												break
											}
											_ = d
										}
								}
							}
							var p = l.alternate;
							if (p !== null) {
								var x = p.child;
								if (x !== null) {
									p.child = null;
									do {
										var S = x.sibling;
										x.sibling = null, x = S
									} while (x !== null)
								}
							}
							_ = l
						}
					}
					if (l.subtreeFlags & 2064 && o !== null) o.return = l, _ = o;
					else e: for (; _ !== null;) {
						if (l = _, l.flags & 2048) switch (l.tag) {
							case 0:
							case 11:
							case 15:
								_i(9, l, l.return)
						}
						var m = l.sibling;
						if (m !== null) {
							m.return = l.return, _ = m;
							break e
						}
						_ = l.return
					}
				}
				var y = e.current;
				for (_ = y; _ !== null;) {
					o = _;
					var w = o.child;
					if (o.subtreeFlags & 2064 && w !== null) w.return = o, _ = w;
					else e: for (o = y; _ !== null;) {
						if (s = _, s.flags & 2048) try {
							switch (s.tag) {
								case 0:
								case 11:
								case 15:
									ys(9, s)
							}
						} catch (b) {
							Ne(s, s.return, b)
						}
						if (s === o) {
							_ = null;
							break e
						}
						var N = s.sibling;
						if (N !== null) {
							N.return = s.return, _ = N;
							break e
						}
						_ = s.return
					}
				}
				if (ne = i, Hn(), Zt && typeof Zt.onPostCommitFiberRoot == "function") try {
					Zt.onPostCommitFiberRoot(us, e)
				} catch {}
				r = !0
			}
			return r
		} finally {
			oe = n, Ct.transition = t
		}
	}
	return !1
}

function Ud(e, t, n) {
	t = Kr(n, t), t = mg(e, t, 1), e = Mn(e, t, 1), t = Ye(), e !== null && (dl(e, 1, t), lt(e, t))
}

function Ne(e, t, n) {
	if (e.tag === 3) Ud(e, e, n);
	else
		for (; t !== null;) {
			if (t.tag === 3) {
				Ud(t, e, n);
				break
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Dn === null || !Dn.has(r))) {
					e = Kr(n, e), e = gg(t, e, 1), t = Mn(t, e, 1), e = Ye(), t !== null && (dl(t, 1, e), lt(t, e));
					break
				}
			}
			t = t.return
		}
}

function tv(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t), t = Ye(), e.pingedLanes |= e.suspendedLanes & n, Re === e && (Fe & n) === n && (Me === 4 || Me === 3 && (Fe & 130023424) === Fe && 500 > Te() - Vc ? lr(e, 0) : Uc |= n), lt(e, t)
}

function Rg(e, t) {
	t === 0 && (e.mode & 1 ? (t = Ll, Ll <<= 1, !(Ll & 130023424) && (Ll = 4194304)) : t = 1);
	var n = Ye();
	e = un(e, t), e !== null && (dl(e, t, n), lt(e, n))
}

function nv(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), Rg(e, n)
}

function rv(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				i = e.memoizedState;
			i !== null && (n = i.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(P(314))
	}
	r !== null && r.delete(t), Rg(e, n)
}
var zg;
zg = function(e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || rt.current) nt = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return nt = !1, Hw(e, t, n);
			nt = !!(e.flags & 131072)
		}
	else nt = !1, ye && t.flags & 1048576 && Bm(t, Do, t.index);
	switch (t.lanes = 0, t.tag) {
		case 2:
			var r = t.type;
			co(e, t), e = t.pendingProps;
			var i = Gr(t, qe.current);
			Hr(t, n), i = Dc(null, t, r, e, i, n);
			var l = Rc();
			return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, it(r) ? (l = !0, Lo(t)) : l = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, jc(t), i.updater = ms, t.stateNode = i, i._reactInternals = t, xu(t, r, e, n), t = ku(null, t, r, !0, l, n)) : (t.tag = 0, ye && l && Ec(t), Ze(null, t, i, n), t = t.child), t;
		case 16:
			r = t.elementType;
			e: {
				switch (co(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = lv(r), e = Lt(r, e), i) {
					case 0:
						t = vu(null, t, r, e, n);
						break e;
					case 1:
						t = Pd(null, t, r, e, n);
						break e;
					case 11:
						t = Ad(null, t, r, e, n);
						break e;
					case 14:
						t = jd(null, t, r, Lt(r.type, e), n);
						break e
				}
				throw Error(P(306, r, ""))
			}
			return t;
		case 0:
			return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Lt(r, i), vu(e, t, r, i, n);
		case 1:
			return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Lt(r, i), Pd(e, t, r, i, n);
		case 3:
			e: {
				if (vg(t), e === null) throw Error(P(387));r = t.pendingProps,
				l = t.memoizedState,
				i = l.element,
				Hm(e, t),
				Fo(t, r, null, n);
				var o = t.memoizedState;
				if (r = o.element, l.isDehydrated)
					if (l = {
							element: r,
							isDehydrated: !1,
							cache: o.cache,
							pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
							transitions: o.transitions
						}, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
						i = Kr(Error(P(423)), t), t = Id(e, t, r, n, i);
						break e
					} else if (r !== i) {
					i = Kr(Error(P(424)), t), t = Id(e, t, r, n, i);
					break e
				} else
					for (ct = Ln(t.stateNode.containerInfo.firstChild), ft = t, ye = !0, Dt = null, n = Qm(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
				else {
					if (Yr(), r === i) {
						t = cn(e, t, n);
						break e
					}
					Ze(e, t, r, n)
				}
				t = t.child
			}
			return t;
		case 5:
			return Gm(t), e === null && mu(t), r = t.type, i = t.pendingProps, l = e !== null ? e.memoizedProps : null, o = i.children, cu(r, i) ? o = null : l !== null && cu(r, l) && (t.flags |= 32), wg(e, t), Ze(e, t, o, n), t.child;
		case 6:
			return e === null && mu(t), null;
		case 13:
			return kg(e, t, n);
		case 4:
			return Pc(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Xr(t, null, r, n) : Ze(e, t, r, n), t.child;
		case 11:
			return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Lt(r, i), Ad(e, t, r, i, n);
		case 7:
			return Ze(e, t, t.pendingProps, n), t.child;
		case 8:
			return Ze(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return Ze(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (r = t.type._context, i = t.pendingProps, l = t.memoizedProps, o = i.value, he(Ro, r._currentValue), r._currentValue = o, l !== null)
					if (Ut(l.value, o)) {
						if (l.children === i.children && !rt.current) {
							t = cn(e, t, n);
							break e
						}
					} else
						for (l = t.child, l !== null && (l.return = t); l !== null;) {
							var s = l.dependencies;
							if (s !== null) {
								o = l.child;
								for (var a = s.firstContext; a !== null;) {
									if (a.context === r) {
										if (l.tag === 1) {
											a = ln(-1, n & -n), a.tag = 2;
											var u = l.updateQueue;
											if (u !== null) {
												u = u.shared;
												var c = u.pending;
												c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a
											}
										}
										l.lanes |= n, a = l.alternate, a !== null && (a.lanes |= n), gu(l.return, n, t), s.lanes |= n;
										break
									}
									a = a.next
								}
							} else if (l.tag === 10) o = l.type === t.type ? null : l.child;
							else if (l.tag === 18) {
								if (o = l.return, o === null) throw Error(P(341));
								o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), gu(o, n, t), o = l.sibling
							} else o = l.child;
							if (o !== null) o.return = l;
							else
								for (o = l; o !== null;) {
									if (o === t) {
										o = null;
										break
									}
									if (l = o.sibling, l !== null) {
										l.return = o.return, o = l;
										break
									}
									o = o.return
								}
							l = o
						}
				Ze(e, t, i.children, n),
				t = t.child
			}
			return t;
		case 9:
			return i = t.type, r = t.pendingProps.children, Hr(t, n), i = bt(i), r = r(i), t.flags |= 1, Ze(e, t, r, n), t.child;
		case 14:
			return r = t.type, i = Lt(r, t.pendingProps), i = Lt(r.type, i), jd(e, t, r, i, n);
		case 15:
			return yg(e, t, t.type, t.pendingProps, n);
		case 17:
			return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Lt(r, i), co(e, t), t.tag = 1, it(r) ? (e = !0, Lo(t)) : e = !1, Hr(t, n), qm(t, r, i), xu(t, r, i, n), ku(null, t, r, !0, e, n);
		case 19:
			return Sg(e, t, n);
		case 22:
			return xg(e, t, n)
	}
	throw Error(P(156, t.tag))
};

function Fg(e, t) {
	return cm(e, t)
}

function iv(e, t, n, r) {
	this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function St(e, t, n, r) {
	return new iv(e, t, n, r)
}

function qc(e) {
	return e = e.prototype, !(!e || !e.isReactComponent)
}

function lv(e) {
	if (typeof e == "function") return qc(e) ? 1 : 0;
	if (e != null) {
		if (e = e.$$typeof, e === fc) return 11;
		if (e === dc) return 14
	}
	return 2
}

function zn(e, t) {
	var n = e.alternate;
	return n === null ? (n = St(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
		lanes: t.lanes,
		firstContext: t.firstContext
	}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function po(e, t, n, r, i, l) {
	var o = 2;
	if (r = e, typeof e == "function") qc(e) && (o = 1);
	else if (typeof e == "string") o = 5;
	else e: switch (e) {
		case Ar:
			return or(n.children, i, l, t);
		case cc:
			o = 8, i |= 8;
			break;
		case Va:
			return e = St(12, n, t, i | 2), e.elementType = Va, e.lanes = l, e;
		case $a:
			return e = St(13, n, t, i), e.elementType = $a, e.lanes = l, e;
		case Ha:
			return e = St(19, n, t, i), e.elementType = Ha, e.lanes = l, e;
		case Zp:
			return ws(n, i, l, t);
		default:
			if (typeof e == "object" && e !== null) switch (e.$$typeof) {
				case Wp:
					o = 10;
					break e;
				case qp:
					o = 9;
					break e;
				case fc:
					o = 11;
					break e;
				case dc:
					o = 14;
					break e;
				case vn:
					o = 16, r = null;
					break e
			}
			throw Error(P(130, e == null ? e : typeof e, ""))
	}
	return t = St(o, n, t, i), t.elementType = e, t.type = r, t.lanes = l, t
}

function or(e, t, n, r) {
	return e = St(7, e, r, t), e.lanes = n, e
}

function ws(e, t, n, r) {
	return e = St(22, e, r, t), e.elementType = Zp, e.lanes = n, e.stateNode = {
		isHidden: !1
	}, e
}

function fa(e, t, n) {
	return e = St(6, e, null, t), e.lanes = n, e
}

function da(e, t, n) {
	return t = St(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
		containerInfo: e.containerInfo,
		pendingChildren: null,
		implementation: e.implementation
	}, t
}

function ov(e, t, n, r, i) {
	this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = qs(0), this.expirationTimes = qs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = qs(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function Zc(e, t, n, r, i, l, o, s, a) {
	return e = new ov(e, t, n, s, a), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = St(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = {
		element: r,
		isDehydrated: n,
		cache: null,
		transitions: null,
		pendingSuspenseBoundaries: null
	}, jc(l), e
}

function sv(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: Or,
		key: r == null ? null : "" + r,
		children: e,
		containerInfo: t,
		implementation: n
	}
}

function _g(e) {
	if (!e) return Un;
	e = e._reactInternals;
	e: {
		if (mr(e) !== e || e.tag !== 1) throw Error(P(170));
		var t = e;do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (it(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e
					}
			}
			t = t.return
		} while (t !== null);
		throw Error(P(171))
	}
	if (e.tag === 1) {
		var n = e.type;
		if (it(n)) return Fm(e, n, t)
	}
	return t
}

function Bg(e, t, n, r, i, l, o, s, a) {
	return e = Zc(n, r, !0, e, i, l, o, s, a), e.context = _g(null), n = e.current, r = Ye(), i = Rn(n), l = ln(r, i), l.callback = t ?? null, Mn(n, l, i), e.current.lanes = i, dl(e, i, r), lt(e, r), e
}

function vs(e, t, n, r) {
	var i = t.current,
		l = Ye(),
		o = Rn(i);
	return n = _g(n), t.context === null ? t.context = n : t.pendingContext = n, t = ln(l, o), t.payload = {
		element: e
	}, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Mn(i, t, o), e !== null && (_t(e, i, o, l), so(e, i, o)), o
}

function qo(e) {
	if (e = e.current, !e.child) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode
	}
}

function Vd(e, t) {
	if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t
	}
}

function Qc(e, t) {
	Vd(e, t), (e = e.alternate) && Vd(e, t)
}

function av() {
	return null
}
var Ug = typeof reportError == "function" ? reportError : function(e) {
	console.error(e)
};

function Gc(e) {
	this._internalRoot = e
}
ks.prototype.render = Gc.prototype.render = function(e) {
	var t = this._internalRoot;
	if (t === null) throw Error(P(409));
	vs(e, t, null, null)
};
ks.prototype.unmount = Gc.prototype.unmount = function() {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		dr(function() {
			vs(null, e, null, null)
		}), t[an] = null
	}
};

function ks(e) {
	this._internalRoot = e
}
ks.prototype.unstable_scheduleHydration = function(e) {
	if (e) {
		var t = ym();
		e = {
			blockedOn: null,
			target: e,
			priority: t
		};
		for (var n = 0; n < En.length && t !== 0 && t < En[n].priority; n++);
		En.splice(n, 0, e), n === 0 && wm(e)
	}
};

function Yc(e) {
	return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Ss(e) {
	return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function $d() {}

function uv(e, t, n, r, i) {
	if (i) {
		if (typeof r == "function") {
			var l = r;
			r = function() {
				var u = qo(o);
				l.call(u)
			}
		}
		var o = Bg(t, r, e, 0, null, !1, !1, "", $d);
		return e._reactRootContainer = o, e[an] = o.current, el(e.nodeType === 8 ? e.parentNode : e), dr(), o
	}
	for (; i = e.lastChild;) e.removeChild(i);
	if (typeof r == "function") {
		var s = r;
		r = function() {
			var u = qo(a);
			s.call(u)
		}
	}
	var a = Zc(e, 0, !1, null, null, !1, !1, "", $d);
	return e._reactRootContainer = a, e[an] = a.current, el(e.nodeType === 8 ? e.parentNode : e), dr(function() {
		vs(t, a, n, r)
	}), a
}

function Es(e, t, n, r, i) {
	var l = n._reactRootContainer;
	if (l) {
		var o = l;
		if (typeof i == "function") {
			var s = i;
			i = function() {
				var a = qo(o);
				s.call(a)
			}
		}
		vs(t, o, e, i)
	} else o = uv(n, t, e, i, r);
	return qo(o)
}
mm = function(e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = Ai(t.pendingLanes);
				n !== 0 && (mc(t, n | 1), lt(t, Te()), !(ne & 6) && (ei = Te() + 500, Hn()))
			}
			break;
		case 13:
			dr(function() {
				var r = un(e, 1);
				if (r !== null) {
					var i = Ye();
					_t(r, e, 1, i)
				}
			}), Qc(e, 1)
	}
};
gc = function(e) {
	if (e.tag === 13) {
		var t = un(e, 134217728);
		if (t !== null) {
			var n = Ye();
			_t(t, e, 134217728, n)
		}
		Qc(e, 134217728)
	}
};
gm = function(e) {
	if (e.tag === 13) {
		var t = Rn(e),
			n = un(e, t);
		if (n !== null) {
			var r = Ye();
			_t(n, e, t, r)
		}
		Qc(e, t)
	}
};
ym = function() {
	return oe
};
xm = function(e, t) {
	var n = oe;
	try {
		return oe = e, t()
	} finally {
		oe = n
	}
};
eu = function(e, t, n) {
	switch (t) {
		case "input":
			if (Za(e, n), t = n.name, n.type === "radio" && t != null) {
				for (n = e; n.parentNode;) n = n.parentNode;
				for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var i = hs(r);
						if (!i) throw Error(P(90));
						Gp(r), Za(r, i)
					}
				}
			}
			break;
		case "textarea":
			Xp(e, n);
			break;
		case "select":
			t = n.value, t != null && Br(e, !!n.multiple, t, !1)
	}
};
im = $c;
lm = dr;
var cv = {
		usingClientEntryPoint: !1,
		Events: [pl, Lr, hs, nm, rm, $c]
	},
	Si = {
		findFiberByHostInstance: tr,
		bundleType: 0,
		version: "18.2.0",
		rendererPackageName: "react-dom"
	},
	fv = {
		bundleType: Si.bundleType,
		version: Si.version,
		rendererPackageName: Si.rendererPackageName,
		rendererConfig: Si.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: dn.ReactCurrentDispatcher,
		findHostInstanceByFiber: function(e) {
			return e = am(e), e === null ? null : e.stateNode
		},
		findFiberByHostInstance: Si.findFiberByHostInstance || av,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var Hl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!Hl.isDisabled && Hl.supportsFiber) try {
		us = Hl.inject(fv), Zt = Hl
	} catch {}
}
mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cv;
mt.createPortal = function(e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!Yc(t)) throw Error(P(200));
	return sv(e, t, null, n)
};
mt.createRoot = function(e, t) {
	if (!Yc(e)) throw Error(P(299));
	var n = !1,
		r = "",
		i = Ug;
	return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Zc(e, 1, !1, null, null, n, !1, r, i), e[an] = t.current, el(e.nodeType === 8 ? e.parentNode : e), new Gc(t)
};
mt.findDOMNode = function(e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0) throw typeof e.render == "function" ? Error(P(188)) : (e = Object.keys(e).join(","), Error(P(268, e)));
	return e = am(t), e = e === null ? null : e.stateNode, e
};
mt.flushSync = function(e) {
	return dr(e)
};
mt.hydrate = function(e, t, n) {
	if (!Ss(t)) throw Error(P(200));
	return Es(null, e, t, !0, n)
};
mt.hydrateRoot = function(e, t, n) {
	if (!Yc(e)) throw Error(P(405));
	var r = n != null && n.hydratedSources || null,
		i = !1,
		l = "",
		o = Ug;
	if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Bg(t, null, e, 1, n ?? null, i, !1, l, o), e[an] = t.current, el(e), r)
		for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
	return new ks(t)
};
mt.render = function(e, t, n) {
	if (!Ss(t)) throw Error(P(200));
	return Es(null, e, t, !1, n)
};
mt.unmountComponentAtNode = function(e) {
	if (!Ss(e)) throw Error(P(40));
	return e._reactRootContainer ? (dr(function() {
		Es(null, null, e, !1, function() {
			e._reactRootContainer = null, e[an] = null
		})
	}), !0) : !1
};
mt.unstable_batchedUpdates = $c;
mt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
	if (!Ss(n)) throw Error(P(200));
	if (e == null || e._reactInternals === void 0) throw Error(P(38));
	return Es(e, t, n, !1, r)
};
mt.version = "18.2.0-next-9e3b772b8-20220608";

function Vg() {
	if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
		__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vg)
	} catch (e) {
		console.error(e)
	}
}
Vg(), Bp.exports = mt;
var dv = Bp.exports,
	Hd = dv;
Ba.createRoot = Hd.createRoot, Ba.hydrateRoot = Hd.hydrateRoot;
/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ul() {
	return ul = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, ul.apply(this, arguments)
}
var On;
(function(e) {
	e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(On || (On = {}));
const Wd = "popstate";

function hv(e) {
	e === void 0 && (e = {});

	function t(r, i) {
		let {
			pathname: l,
			search: o,
			hash: s
		} = r.location;
		return Lu("", {
			pathname: l,
			search: o,
			hash: s
		}, i.state && i.state.usr || null, i.state && i.state.key || "default")
	}

	function n(r, i) {
		return typeof i == "string" ? i : Zo(i)
	}
	return mv(t, n, null, e)
}

function Pe(e, t) {
	if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function Xc(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw new Error(t)
		} catch {}
	}
}

function pv() {
	return Math.random().toString(36).substr(2, 8)
}

function qd(e, t) {
	return {
		usr: e.state,
		key: e.key,
		idx: t
	}
}

function Lu(e, t, n, r) {
	return n === void 0 && (n = null), ul({
		pathname: typeof e == "string" ? e : e.pathname,
		search: "",
		hash: ""
	}, typeof t == "string" ? oi(t) : t, {
		state: n,
		key: t && t.key || r || pv()
	})
}

function Zo(e) {
	let {
		pathname: t = "/",
		search: n = "",
		hash: r = ""
	} = e;
	return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function oi(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
		let r = e.indexOf("?");
		r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
	}
	return t
}

function mv(e, t, n, r) {
	r === void 0 && (r = {});
	let {
		window: i = document.defaultView,
		v5Compat: l = !1
	} = r, o = i.history, s = On.Pop, a = null, u = c();
	u == null && (u = 0, o.replaceState(ul({}, o.state, {
		idx: u
	}), ""));

	function c() {
		return (o.state || {
			idx: null
		}).idx
	}

	function f() {
		s = On.Pop;
		let S = c(),
			m = S == null ? null : S - u;
		u = S, a && a({
			action: s,
			location: x.location,
			delta: m
		})
	}

	function h(S, m) {
		s = On.Push;
		let y = Lu(x.location, S, m);
		n && n(y, S), u = c() + 1;
		let w = qd(y, u),
			N = x.createHref(y);
		try {
			o.pushState(w, "", N)
		} catch (b) {
			if (b instanceof DOMException && b.name === "DataCloneError") throw b;
			i.location.assign(N)
		}
		l && a && a({
			action: s,
			location: x.location,
			delta: 1
		})
	}

	function d(S, m) {
		s = On.Replace;
		let y = Lu(x.location, S, m);
		n && n(y, S), u = c();
		let w = qd(y, u),
			N = x.createHref(y);
		o.replaceState(w, "", N), l && a && a({
			action: s,
			location: x.location,
			delta: 0
		})
	}

	function p(S) {
		let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
			y = typeof S == "string" ? S : Zo(S);
		return Pe(m, "No window.location.(origin|href) available to create URL for href: " + y), new URL(y, m)
	}
	let x = {
		get action() {
			return s
		},
		get location() {
			return e(i, o)
		},
		listen(S) {
			if (a) throw new Error("A history only accepts one active listener");
			return i.addEventListener(Wd, f), a = S, () => {
				i.removeEventListener(Wd, f), a = null
			}
		},
		createHref(S) {
			return t(i, S)
		},
		createURL: p,
		encodeLocation(S) {
			let m = p(S);
			return {
				pathname: m.pathname,
				search: m.search,
				hash: m.hash
			}
		},
		push: h,
		replace: d,
		go(S) {
			return o.go(S)
		}
	};
	return x
}
var Zd;
(function(e) {
	e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(Zd || (Zd = {}));

function gv(e, t, n) {
	n === void 0 && (n = "/");
	let r = typeof t == "string" ? oi(t) : t,
		i = Jc(r.pathname || "/", n);
	if (i == null) return null;
	let l = $g(e);
	yv(l);
	let o = null;
	for (let s = 0; o == null && s < l.length; ++s) o = bv(l[s], Av(i));
	return o
}

function $g(e, t, n, r) {
	t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
	let i = (l, o, s) => {
		let a = {
			relativePath: s === void 0 ? l.path || "" : s,
			caseSensitive: l.caseSensitive === !0,
			childrenIndex: o,
			route: l
		};
		a.relativePath.startsWith("/") && (Pe(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), a.relativePath = a.relativePath.slice(r.length));
		let u = Fn([r, a.relativePath]),
			c = n.concat(a);
		l.children && l.children.length > 0 && (Pe(l.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), $g(l.children, t, c, u)), !(l.path == null && !l.index) && t.push({
			path: u,
			score: Cv(u, l.index),
			routesMeta: c
		})
	};
	return e.forEach((l, o) => {
		var s;
		if (l.path === "" || !((s = l.path) != null && s.includes("?"))) i(l, o);
		else
			for (let a of Hg(l.path)) i(l, o, a)
	}), t
}

function Hg(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t, i = n.endsWith("?"), l = n.replace(/\?$/, "");
	if (r.length === 0) return i ? [l, ""] : [l];
	let o = Hg(r.join("/")),
		s = [];
	return s.push(...o.map(a => a === "" ? l : [l, a].join("/"))), i && s.push(...o), s.map(a => e.startsWith("/") && a === "" ? "/" : a)
}

function yv(e) {
	e.sort((t, n) => t.score !== n.score ? n.score - t.score : Nv(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const xv = /^:\w+$/,
	wv = 3,
	vv = 2,
	kv = 1,
	Sv = 10,
	Ev = -2,
	Qd = e => e === "*";

function Cv(e, t) {
	let n = e.split("/"),
		r = n.length;
	return n.some(Qd) && (r += Ev), t && (r += vv), n.filter(i => !Qd(i)).reduce((i, l) => i + (xv.test(l) ? wv : l === "" ? kv : Sv), r)
}

function Nv(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function bv(e, t) {
	let {
		routesMeta: n
	} = e, r = {}, i = "/", l = [];
	for (let o = 0; o < n.length; ++o) {
		let s = n[o],
			a = o === n.length - 1,
			u = i === "/" ? t : t.slice(i.length) || "/",
			c = Tv({
				path: s.relativePath,
				caseSensitive: s.caseSensitive,
				end: a
			}, u);
		if (!c) return null;
		Object.assign(r, c.params);
		let f = s.route;
		l.push({
			params: r,
			pathname: Fn([i, c.pathname]),
			pathnameBase: Lv(Fn([i, c.pathnameBase])),
			route: f
		}), c.pathnameBase !== "/" && (i = Fn([i, c.pathnameBase]))
	}
	return l
}

function Tv(e, t) {
	typeof e == "string" && (e = {
		path: e,
		caseSensitive: !1,
		end: !0
	});
	let [n, r] = Ov(e.path, e.caseSensitive, e.end), i = t.match(n);
	if (!i) return null;
	let l = i[0],
		o = l.replace(/(.)\/+$/, "$1"),
		s = i.slice(1);
	return {
		params: r.reduce((u, c, f) => {
			if (c === "*") {
				let h = s[f] || "";
				o = l.slice(0, l.length - h.length).replace(/(.)\/+$/, "$1")
			}
			return u[c] = jv(s[f] || "", c), u
		}, {}),
		pathname: l,
		pathnameBase: o,
		pattern: e
	}
}

function Ov(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !0), Xc(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
	let r = [],
		i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (o, s) => (r.push(s), "/([^\\/]+)"));
	return e.endsWith("*") ? (r.push("*"), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r]
}

function Av(e) {
	try {
		return decodeURI(e)
	} catch (t) {
		return Xc(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
	}
}

function jv(e, t) {
	try {
		return decodeURIComponent(e)
	} catch (n) {
		return Xc(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), e
	}
}

function Jc(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/"
}

function Pv(e, t) {
	t === void 0 && (t = "/");
	let {
		pathname: n,
		search: r = "",
		hash: i = ""
	} = typeof e == "string" ? oi(e) : e;
	return {
		pathname: n ? n.startsWith("/") ? n : Iv(n, t) : t,
		search: Mv(r),
		hash: Dv(i)
	}
}

function Iv(e, t) {
	let n = t.replace(/\/+$/, "").split("/");
	return e.split("/").forEach(i => {
		i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
	}), n.length > 1 ? n.join("/") : "/"
}

function ha(e, t, n, r) {
	return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function Wg(e) {
	return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function qg(e, t, n, r) {
	r === void 0 && (r = !1);
	let i;
	typeof e == "string" ? i = oi(e) : (i = ul({}, e), Pe(!i.pathname || !i.pathname.includes("?"), ha("?", "pathname", "search", i)), Pe(!i.pathname || !i.pathname.includes("#"), ha("#", "pathname", "hash", i)), Pe(!i.search || !i.search.includes("#"), ha("#", "search", "hash", i)));
	let l = e === "" || i.pathname === "",
		o = l ? "/" : i.pathname,
		s;
	if (r || o == null) s = n;
	else {
		let f = t.length - 1;
		if (o.startsWith("..")) {
			let h = o.split("/");
			for (; h[0] === "..";) h.shift(), f -= 1;
			i.pathname = h.join("/")
		}
		s = f >= 0 ? t[f] : "/"
	}
	let a = Pv(i, s),
		u = o && o !== "/" && o.endsWith("/"),
		c = (l || o === ".") && n.endsWith("/");
	return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a
}
const Fn = e => e.join("/").replace(/\/\/+/g, "/"),
	Lv = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
	Mv = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
	Dv = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

function Rv(e) {
	return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const Zg = ["post", "put", "patch", "delete"];
new Set(Zg);
const zv = ["get", ...Zg];
new Set(zv);
/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Qo() {
	return Qo = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, Qo.apply(this, arguments)
}
const Kc = T.createContext(null),
	Qg = T.createContext(null),
	gr = T.createContext(null),
	Cs = T.createContext(null),
	yr = T.createContext({
		outlet: null,
		matches: [],
		isDataRoute: !1
	}),
	Gg = T.createContext(null);

function Fv(e, t) {
	let {
		relative: n
	} = t === void 0 ? {} : t;
	gl() || Pe(!1);
	let {
		basename: r,
		navigator: i
	} = T.useContext(gr), {
		hash: l,
		pathname: o,
		search: s
	} = ef(e, {
		relative: n
	}), a = o;
	return r !== "/" && (a = o === "/" ? r : Fn([r, o])), i.createHref({
		pathname: a,
		search: s,
		hash: l
	})
}

function gl() {
	return T.useContext(Cs) != null
}

function yl() {
	return gl() || Pe(!1), T.useContext(Cs).location
}

function Yg(e) {
	T.useContext(gr).static || T.useLayoutEffect(e)
}

function _v() {
	let {
		isDataRoute: e
	} = T.useContext(yr);
	return e ? Jv() : Bv()
}

function Bv() {
	gl() || Pe(!1);
	let e = T.useContext(Kc),
		{
			basename: t,
			navigator: n
		} = T.useContext(gr),
		{
			matches: r
		} = T.useContext(yr),
		{
			pathname: i
		} = yl(),
		l = JSON.stringify(Wg(r).map(a => a.pathnameBase)),
		o = T.useRef(!1);
	return Yg(() => {
		o.current = !0
	}), T.useCallback(function(a, u) {
		if (u === void 0 && (u = {}), !o.current) return;
		if (typeof a == "number") {
			n.go(a);
			return
		}
		let c = qg(a, JSON.parse(l), i, u.relative === "path");
		e == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : Fn([t, c.pathname])), (u.replace ? n.replace : n.push)(c, u.state, u)
	}, [t, n, l, i, e])
}

function ef(e, t) {
	let {
		relative: n
	} = t === void 0 ? {} : t, {
		matches: r
	} = T.useContext(yr), {
		pathname: i
	} = yl(), l = JSON.stringify(Wg(r).map(o => o.pathnameBase));
	return T.useMemo(() => qg(e, JSON.parse(l), i, n === "path"), [e, l, i, n])
}

function Uv(e, t) {
	return Vv(e, t)
}

function Vv(e, t, n) {
	gl() || Pe(!1);
	let {
		navigator: r
	} = T.useContext(gr), {
		matches: i
	} = T.useContext(yr), l = i[i.length - 1], o = l ? l.params : {};
	l && l.pathname;
	let s = l ? l.pathnameBase : "/";
	l && l.route;
	let a = yl(),
		u;
	if (t) {
		var c;
		let x = typeof t == "string" ? oi(t) : t;
		s === "/" || (c = x.pathname) != null && c.startsWith(s) || Pe(!1), u = x
	} else u = a;
	let f = u.pathname || "/",
		h = s === "/" ? f : f.slice(s.length) || "/",
		d = gv(e, {
			pathname: h
		}),
		p = Zv(d && d.map(x => Object.assign({}, x, {
			params: Object.assign({}, o, x.params),
			pathname: Fn([s, r.encodeLocation ? r.encodeLocation(x.pathname).pathname : x.pathname]),
			pathnameBase: x.pathnameBase === "/" ? s : Fn([s, r.encodeLocation ? r.encodeLocation(x.pathnameBase).pathname : x.pathnameBase])
		})), i, n);
	return t && p ? T.createElement(Cs.Provider, {
		value: {
			location: Qo({
				pathname: "/",
				search: "",
				hash: "",
				state: null,
				key: "default"
			}, u),
			navigationType: On.Pop
		}
	}, p) : p
}

function $v() {
	let e = Xv(),
		t = Rv(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		i = {
			padding: "0.5rem",
			backgroundColor: "rgba(200,200,200, 0.5)"
		},
		l = null;
	return T.createElement(T.Fragment, null, T.createElement("h2", null, "Unexpected Application Error!"), T.createElement("h3", {
		style: {
			fontStyle: "italic"
		}
	}, t), n ? T.createElement("pre", {
		style: i
	}, n) : null, l)
}
const Hv = T.createElement($v, null);
class Wv extends T.Component {
	constructor(t) {
		super(t), this.state = {
			location: t.location,
			revalidation: t.revalidation,
			error: t.error
		}
	}
	static getDerivedStateFromError(t) {
		return {
			error: t
		}
	}
	static getDerivedStateFromProps(t, n) {
		return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
			error: t.error,
			location: t.location,
			revalidation: t.revalidation
		} : {
			error: t.error || n.error,
			location: n.location,
			revalidation: t.revalidation || n.revalidation
		}
	}
	componentDidCatch(t, n) {
		console.error("React Router caught the following error during render", t, n)
	}
	render() {
		return this.state.error ? T.createElement(yr.Provider, {
			value: this.props.routeContext
		}, T.createElement(Gg.Provider, {
			value: this.state.error,
			children: this.props.component
		})) : this.props.children
	}
}

function qv(e) {
	let {
		routeContext: t,
		match: n,
		children: r
	} = e, i = T.useContext(Kc);
	return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), T.createElement(yr.Provider, {
		value: t
	}, r)
}

function Zv(e, t, n) {
	var r;
	if (t === void 0 && (t = []), n === void 0 && (n = null), e == null) {
		var i;
		if ((i = n) != null && i.errors) e = n.matches;
		else return null
	}
	let l = e,
		o = (r = n) == null ? void 0 : r.errors;
	if (o != null) {
		let s = l.findIndex(a => a.route.id && (o == null ? void 0 : o[a.route.id]));
		s >= 0 || Pe(!1), l = l.slice(0, Math.min(l.length, s + 1))
	}
	return l.reduceRight((s, a, u) => {
		let c = a.route.id ? o == null ? void 0 : o[a.route.id] : null,
			f = null;
		n && (f = a.route.errorElement || Hv);
		let h = t.concat(l.slice(0, u + 1)),
			d = () => {
				let p;
				return c ? p = f : a.route.Component ? p = T.createElement(a.route.Component, null) : a.route.element ? p = a.route.element : p = s, T.createElement(qv, {
					match: a,
					routeContext: {
						outlet: s,
						matches: h,
						isDataRoute: n != null
					},
					children: p
				})
			};
		return n && (a.route.ErrorBoundary || a.route.errorElement || u === 0) ? T.createElement(Wv, {
			location: n.location,
			revalidation: n.revalidation,
			component: f,
			error: c,
			children: d(),
			routeContext: {
				outlet: null,
				matches: h,
				isDataRoute: !0
			}
		}) : d()
	}, null)
}
var Xg = function(e) {
		return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
	}(Xg || {}),
	Go = function(e) {
		return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
	}(Go || {});

function Qv(e) {
	let t = T.useContext(Kc);
	return t || Pe(!1), t
}

function Gv(e) {
	let t = T.useContext(Qg);
	return t || Pe(!1), t
}

function Yv(e) {
	let t = T.useContext(yr);
	return t || Pe(!1), t
}

function Jg(e) {
	let t = Yv(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || Pe(!1), n.route.id
}

function Xv() {
	var e;
	let t = T.useContext(Gg),
		n = Gv(Go.UseRouteError),
		r = Jg(Go.UseRouteError);
	return t || ((e = n.errors) == null ? void 0 : e[r])
}

function Jv() {
	let {
		router: e
	} = Qv(Xg.UseNavigateStable), t = Jg(Go.UseNavigateStable), n = T.useRef(!1);
	return Yg(() => {
		n.current = !0
	}), T.useCallback(function(i, l) {
		l === void 0 && (l = {}), n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, Qo({
			fromRouteId: t
		}, l)))
	}, [e, t])
}

function Mu(e) {
	Pe(!1)
}

function Kv(e) {
	let {
		basename: t = "/",
		children: n = null,
		location: r,
		navigationType: i = On.Pop,
		navigator: l,
		static: o = !1
	} = e;
	gl() && Pe(!1);
	let s = t.replace(/^\/*/, "/"),
		a = T.useMemo(() => ({
			basename: s,
			navigator: l,
			static: o
		}), [s, l, o]);
	typeof r == "string" && (r = oi(r));
	let {
		pathname: u = "/",
		search: c = "",
		hash: f = "",
		state: h = null,
		key: d = "default"
	} = r, p = T.useMemo(() => {
		let x = Jc(u, s);
		return x == null ? null : {
			location: {
				pathname: x,
				search: c,
				hash: f,
				state: h,
				key: d
			},
			navigationType: i
		}
	}, [s, u, c, f, h, d, i]);
	return p == null ? null : T.createElement(gr.Provider, {
		value: a
	}, T.createElement(Cs.Provider, {
		children: n,
		value: p
	}))
}

function ek(e) {
	let {
		children: t,
		location: n
	} = e;
	return Uv(Du(t), n)
}
new Promise(() => {});

function Du(e, t) {
	t === void 0 && (t = []);
	let n = [];
	return T.Children.forEach(e, (r, i) => {
		if (!T.isValidElement(r)) return;
		let l = [...t, i];
		if (r.type === T.Fragment) {
			n.push.apply(n, Du(r.props.children, l));
			return
		}
		r.type !== Mu && Pe(!1), !r.props.index || !r.props.children || Pe(!1);
		let o = {
			id: r.props.id || l.join("-"),
			caseSensitive: r.props.caseSensitive,
			element: r.props.element,
			Component: r.props.Component,
			index: r.props.index,
			path: r.props.path,
			loader: r.props.loader,
			action: r.props.action,
			errorElement: r.props.errorElement,
			ErrorBoundary: r.props.ErrorBoundary,
			hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
			shouldRevalidate: r.props.shouldRevalidate,
			handle: r.props.handle,
			lazy: r.props.lazy
		};
		r.props.children && (o.children = Du(r.props.children, l)), n.push(o)
	}), n
}
/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Yo() {
	return Yo = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, Yo.apply(this, arguments)
}

function Kg(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i, l;
	for (l = 0; l < r.length; l++) i = r[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n
}

function tk(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}

function nk(e, t) {
	return e.button === 0 && (!t || t === "_self") && !tk(e)
}
const rk = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"],
	ik = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"],
	lk = "startTransition",
	Gd = nx[lk];

function ok(e) {
	let {
		basename: t,
		children: n,
		future: r,
		window: i
	} = e, l = T.useRef();
	l.current == null && (l.current = hv({
		window: i,
		v5Compat: !0
	}));
	let o = l.current,
		[s, a] = T.useState({
			action: o.action,
			location: o.location
		}),
		{
			v7_startTransition: u
		} = r || {},
		c = T.useCallback(f => {
			u && Gd ? Gd(() => a(f)) : a(f)
		}, [a, u]);
	return T.useLayoutEffect(() => o.listen(c), [o, c]), T.createElement(Kv, {
		basename: t,
		children: n,
		location: s.location,
		navigationType: s.action,
		navigator: o
	})
}
const sk = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
	ak = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	uk = T.forwardRef(function(t, n) {
		let {
			onClick: r,
			relative: i,
			reloadDocument: l,
			replace: o,
			state: s,
			target: a,
			to: u,
			preventScrollReset: c
		} = t, f = Kg(t, rk), {
			basename: h
		} = T.useContext(gr), d, p = !1;
		if (typeof u == "string" && ak.test(u) && (d = u, sk)) try {
			let y = new URL(window.location.href),
				w = u.startsWith("//") ? new URL(y.protocol + u) : new URL(u),
				N = Jc(w.pathname, h);
			w.origin === y.origin && N != null ? u = N + w.search + w.hash : p = !0
		} catch {}
		let x = Fv(u, {
				relative: i
			}),
			S = ck(u, {
				replace: o,
				state: s,
				target: a,
				preventScrollReset: c,
				relative: i
			});

		function m(y) {
			r && r(y), y.defaultPrevented || S(y)
		}
		return T.createElement("a", Yo({}, f, {
			href: d || x,
			onClick: p || l ? r : m,
			ref: n,
			target: a
		}))
	}),
	Xo = T.forwardRef(function(t, n) {
		let {
			"aria-current": r = "page",
			caseSensitive: i = !1,
			className: l = "",
			end: o = !1,
			style: s,
			to: a,
			children: u
		} = t, c = Kg(t, ik), f = ef(a, {
			relative: c.relative
		}), h = yl(), d = T.useContext(Qg), {
			navigator: p
		} = T.useContext(gr), x = p.encodeLocation ? p.encodeLocation(f).pathname : f.pathname, S = h.pathname, m = d && d.navigation && d.navigation.location ? d.navigation.location.pathname : null;
		i || (S = S.toLowerCase(), m = m ? m.toLowerCase() : null, x = x.toLowerCase());
		let y = S === x || !o && S.startsWith(x) && S.charAt(x.length) === "/",
			w = m != null && (m === x || !o && m.startsWith(x) && m.charAt(x.length) === "/"),
			N = y ? r : void 0,
			b;
		typeof l == "function" ? b = l({
			isActive: y,
			isPending: w
		}) : b = [l, y ? "active" : null, w ? "pending" : null].filter(Boolean).join(" ");
		let E = typeof s == "function" ? s({
			isActive: y,
			isPending: w
		}) : s;
		return T.createElement(uk, Yo({}, c, {
			"aria-current": N,
			className: b,
			ref: n,
			style: E,
			to: a
		}), typeof u == "function" ? u({
			isActive: y,
			isPending: w
		}) : u)
	});
var Yd;
(function(e) {
	e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher"
})(Yd || (Yd = {}));
var Xd;
(function(e) {
	e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(Xd || (Xd = {}));

function ck(e, t) {
	let {
		target: n,
		replace: r,
		state: i,
		preventScrollReset: l,
		relative: o
	} = t === void 0 ? {} : t, s = _v(), a = yl(), u = ef(e, {
		relative: o
	});
	return T.useCallback(c => {
		if (nk(c, n)) {
			c.preventDefault();
			let f = r !== void 0 ? r : Zo(a) === Zo(u);
			s(e, {
				replace: f,
				state: i,
				preventScrollReset: l,
				relative: o
			})
		}
	}, [a, s, u, r, i, n, e, l, o])
}

function ey(e, t) {
	return function() {
		return e.apply(t, arguments)
	}
}
const {
	toString: fk
} = Object.prototype, {
	getPrototypeOf: tf
} = Object, Ns = (e => t => {
	const n = fk.call(t);
	return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
})(Object.create(null)), Gt = e => (e = e.toLowerCase(), t => Ns(t) === e), bs = e => t => typeof t === e, {
	isArray: si
} = Array, cl = bs("undefined");

function dk(e) {
	return e !== null && !cl(e) && e.constructor !== null && !cl(e.constructor) && Nt(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const ty = Gt("ArrayBuffer");

function hk(e) {
	let t;
	return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ty(e.buffer), t
}
const pk = bs("string"),
	Nt = bs("function"),
	ny = bs("number"),
	Ts = e => e !== null && typeof e == "object",
	mk = e => e === !0 || e === !1,
	mo = e => {
		if (Ns(e) !== "object") return !1;
		const t = tf(e);
		return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
	},
	gk = Gt("Date"),
	yk = Gt("File"),
	xk = Gt("Blob"),
	wk = Gt("FileList"),
	vk = e => Ts(e) && Nt(e.pipe),
	kk = e => {
		let t;
		return e && (typeof FormData == "function" && e instanceof FormData || Nt(e.append) && ((t = Ns(e)) === "formdata" || t === "object" && Nt(e.toString) && e.toString() === "[object FormData]"))
	},
	Sk = Gt("URLSearchParams"),
	Ek = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function xl(e, t, {
	allOwnKeys: n = !1
} = {}) {
	if (e === null || typeof e > "u") return;
	let r, i;
	if (typeof e != "object" && (e = [e]), si(e))
		for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
	else {
		const l = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
			o = l.length;
		let s;
		for (r = 0; r < o; r++) s = l[r], t.call(null, e[s], s, e)
	}
}

function ry(e, t) {
	t = t.toLowerCase();
	const n = Object.keys(e);
	let r = n.length,
		i;
	for (; r-- > 0;)
		if (i = n[r], t === i.toLowerCase()) return i;
	return null
}
const iy = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(),
	ly = e => !cl(e) && e !== iy;

function Ru() {
	const {
		caseless: e
	} = ly(this) && this || {}, t = {}, n = (r, i) => {
		const l = e && ry(t, i) || i;
		mo(t[l]) && mo(r) ? t[l] = Ru(t[l], r) : mo(r) ? t[l] = Ru({}, r) : si(r) ? t[l] = r.slice() : t[l] = r
	};
	for (let r = 0, i = arguments.length; r < i; r++) arguments[r] && xl(arguments[r], n);
	return t
}
const Ck = (e, t, n, {
		allOwnKeys: r
	} = {}) => (xl(t, (i, l) => {
		n && Nt(i) ? e[l] = ey(i, n) : e[l] = i
	}, {
		allOwnKeys: r
	}), e),
	Nk = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
	bk = (e, t, n, r) => {
		e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
			value: t.prototype
		}), n && Object.assign(e.prototype, n)
	},
	Tk = (e, t, n, r) => {
		let i, l, o;
		const s = {};
		if (t = t || {}, e == null) return t;
		do {
			for (i = Object.getOwnPropertyNames(e), l = i.length; l-- > 0;) o = i[l], (!r || r(o, e, t)) && !s[o] && (t[o] = e[o], s[o] = !0);
			e = n !== !1 && tf(e)
		} while (e && (!n || n(e, t)) && e !== Object.prototype);
		return t
	},
	Ok = (e, t, n) => {
		e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
		const r = e.indexOf(t, n);
		return r !== -1 && r === n
	},
	Ak = e => {
		if (!e) return null;
		if (si(e)) return e;
		let t = e.length;
		if (!ny(t)) return null;
		const n = new Array(t);
		for (; t-- > 0;) n[t] = e[t];
		return n
	},
	jk = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && tf(Uint8Array)),
	Pk = (e, t) => {
		const r = (e && e[Symbol.iterator]).call(e);
		let i;
		for (;
			(i = r.next()) && !i.done;) {
			const l = i.value;
			t.call(e, l[0], l[1])
		}
	},
	Ik = (e, t) => {
		let n;
		const r = [];
		for (;
			(n = e.exec(t)) !== null;) r.push(n);
		return r
	},
	Lk = Gt("HTMLFormElement"),
	Mk = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, i) {
		return r.toUpperCase() + i
	}),
	Jd = (({
		hasOwnProperty: e
	}) => (t, n) => e.call(t, n))(Object.prototype),
	Dk = Gt("RegExp"),
	oy = (e, t) => {
		const n = Object.getOwnPropertyDescriptors(e),
			r = {};
		xl(n, (i, l) => {
			let o;
			(o = t(i, l, e)) !== !1 && (r[l] = o || i)
		}), Object.defineProperties(e, r)
	},
	Rk = e => {
		oy(e, (t, n) => {
			if (Nt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
			const r = e[n];
			if (Nt(r)) {
				if (t.enumerable = !1, "writable" in t) {
					t.writable = !1;
					return
				}
				t.set || (t.set = () => {
					throw Error("Can not rewrite read-only method '" + n + "'")
				})
			}
		})
	},
	zk = (e, t) => {
		const n = {},
			r = i => {
				i.forEach(l => {
					n[l] = !0
				})
			};
		return si(e) ? r(e) : r(String(e).split(t)), n
	},
	Fk = () => {},
	_k = (e, t) => (e = +e, Number.isFinite(e) ? e : t),
	pa = "abcdefghijklmnopqrstuvwxyz",
	Kd = "0123456789",
	sy = {
		DIGIT: Kd,
		ALPHA: pa,
		ALPHA_DIGIT: pa + pa.toUpperCase() + Kd
	},
	Bk = (e = 16, t = sy.ALPHA_DIGIT) => {
		let n = "";
		const {
			length: r
		} = t;
		for (; e--;) n += t[Math.random() * r | 0];
		return n
	};

function Uk(e) {
	return !!(e && Nt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const Vk = e => {
		const t = new Array(10),
			n = (r, i) => {
				if (Ts(r)) {
					if (t.indexOf(r) >= 0) return;
					if (!("toJSON" in r)) {
						t[i] = r;
						const l = si(r) ? [] : {};
						return xl(r, (o, s) => {
							const a = n(o, i + 1);
							!cl(a) && (l[s] = a)
						}), t[i] = void 0, l
					}
				}
				return r
			};
		return n(e, 0)
	},
	$k = Gt("AsyncFunction"),
	Hk = e => e && (Ts(e) || Nt(e)) && Nt(e.then) && Nt(e.catch),
	A = {
		isArray: si,
		isArrayBuffer: ty,
		isBuffer: dk,
		isFormData: kk,
		isArrayBufferView: hk,
		isString: pk,
		isNumber: ny,
		isBoolean: mk,
		isObject: Ts,
		isPlainObject: mo,
		isUndefined: cl,
		isDate: gk,
		isFile: yk,
		isBlob: xk,
		isRegExp: Dk,
		isFunction: Nt,
		isStream: vk,
		isURLSearchParams: Sk,
		isTypedArray: jk,
		isFileList: wk,
		forEach: xl,
		merge: Ru,
		extend: Ck,
		trim: Ek,
		stripBOM: Nk,
		inherits: bk,
		toFlatObject: Tk,
		kindOf: Ns,
		kindOfTest: Gt,
		endsWith: Ok,
		toArray: Ak,
		forEachEntry: Pk,
		matchAll: Ik,
		isHTMLForm: Lk,
		hasOwnProperty: Jd,
		hasOwnProp: Jd,
		reduceDescriptors: oy,
		freezeMethods: Rk,
		toObjectSet: zk,
		toCamelCase: Mk,
		noop: Fk,
		toFiniteNumber: _k,
		findKey: ry,
		global: iy,
		isContextDefined: ly,
		ALPHABET: sy,
		generateString: Bk,
		isSpecCompliantForm: Uk,
		toJSONObject: Vk,
		isAsyncFn: $k,
		isThenable: Hk
	};

function te(e, t, n, r, i) {
	Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i)
}
A.inherits(te, Error, {
	toJSON: function() {
		return {
			message: this.message,
			name: this.name,
			description: this.description,
			number: this.number,
			fileName: this.fileName,
			lineNumber: this.lineNumber,
			columnNumber: this.columnNumber,
			stack: this.stack,
			config: A.toJSONObject(this.config),
			code: this.code,
			status: this.response && this.response.status ? this.response.status : null
		}
	}
});
const ay = te.prototype,
	uy = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
	uy[e] = {
		value: e
	}
});
Object.defineProperties(te, uy);
Object.defineProperty(ay, "isAxiosError", {
	value: !0
});
te.from = (e, t, n, r, i, l) => {
	const o = Object.create(ay);
	return A.toFlatObject(e, o, function(a) {
		return a !== Error.prototype
	}, s => s !== "isAxiosError"), te.call(o, e.message, t, n, r, i), o.cause = e, o.name = e.name, l && Object.assign(o, l), o
};
const Wk = null;

function zu(e) {
	return A.isPlainObject(e) || A.isArray(e)
}

function cy(e) {
	return A.endsWith(e, "[]") ? e.slice(0, -2) : e
}

function eh(e, t, n) {
	return e ? e.concat(t).map(function(i, l) {
		return i = cy(i), !n && l ? "[" + i + "]" : i
	}).join(n ? "." : "") : t
}

function qk(e) {
	return A.isArray(e) && !e.some(zu)
}
const Zk = A.toFlatObject(A, {}, null, function(t) {
	return /^is[A-Z]/.test(t)
});

function Os(e, t, n) {
	if (!A.isObject(e)) throw new TypeError("target must be an object");
	t = t || new FormData, n = A.toFlatObject(n, {
		metaTokens: !0,
		dots: !1,
		indexes: !1
	}, !1, function(x, S) {
		return !A.isUndefined(S[x])
	});
	const r = n.metaTokens,
		i = n.visitor || c,
		l = n.dots,
		o = n.indexes,
		a = (n.Blob || typeof Blob < "u" && Blob) && A.isSpecCompliantForm(t);
	if (!A.isFunction(i)) throw new TypeError("visitor must be a function");

	function u(p) {
		if (p === null) return "";
		if (A.isDate(p)) return p.toISOString();
		if (!a && A.isBlob(p)) throw new te("Blob is not supported. Use a Buffer instead.");
		return A.isArrayBuffer(p) || A.isTypedArray(p) ? a && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p
	}

	function c(p, x, S) {
		let m = p;
		if (p && !S && typeof p == "object") {
			if (A.endsWith(x, "{}")) x = r ? x : x.slice(0, -2), p = JSON.stringify(p);
			else if (A.isArray(p) && qk(p) || (A.isFileList(p) || A.endsWith(x, "[]")) && (m = A.toArray(p))) return x = cy(x), m.forEach(function(w, N) {
				!(A.isUndefined(w) || w === null) && t.append(o === !0 ? eh([x], N, l) : o === null ? x : x + "[]", u(w))
			}), !1
		}
		return zu(p) ? !0 : (t.append(eh(S, x, l), u(p)), !1)
	}
	const f = [],
		h = Object.assign(Zk, {
			defaultVisitor: c,
			convertValue: u,
			isVisitable: zu
		});

	function d(p, x) {
		if (!A.isUndefined(p)) {
			if (f.indexOf(p) !== -1) throw Error("Circular reference detected in " + x.join("."));
			f.push(p), A.forEach(p, function(m, y) {
				(!(A.isUndefined(m) || m === null) && i.call(t, m, A.isString(y) ? y.trim() : y, x, h)) === !0 && d(m, x ? x.concat(y) : [y])
			}), f.pop()
		}
	}
	if (!A.isObject(e)) throw new TypeError("data must be an object");
	return d(e), t
}

function th(e) {
	const t = {
		"!": "%21",
		"'": "%27",
		"(": "%28",
		")": "%29",
		"~": "%7E",
		"%20": "+",
		"%00": "\0"
	};
	return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
		return t[r]
	})
}

function nf(e, t) {
	this._pairs = [], e && Os(e, this, t)
}
const fy = nf.prototype;
fy.append = function(t, n) {
	this._pairs.push([t, n])
};
fy.toString = function(t) {
	const n = t ? function(r) {
		return t.call(this, r, th)
	} : th;
	return this._pairs.map(function(i) {
		return n(i[0]) + "=" + n(i[1])
	}, "").join("&")
};

function Qk(e) {
	return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function dy(e, t, n) {
	if (!t) return e;
	const r = n && n.encode || Qk,
		i = n && n.serialize;
	let l;
	if (i ? l = i(t, n) : l = A.isURLSearchParams(t) ? t.toString() : new nf(t, n).toString(r), l) {
		const o = e.indexOf("#");
		o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + l
	}
	return e
}
class Gk {
	constructor() {
		this.handlers = []
	}
	use(t, n, r) {
		return this.handlers.push({
			fulfilled: t,
			rejected: n,
			synchronous: r ? r.synchronous : !1,
			runWhen: r ? r.runWhen : null
		}), this.handlers.length - 1
	}
	eject(t) {
		this.handlers[t] && (this.handlers[t] = null)
	}
	clear() {
		this.handlers && (this.handlers = [])
	}
	forEach(t) {
		A.forEach(this.handlers, function(r) {
			r !== null && t(r)
		})
	}
}
const nh = Gk,
	hy = {
		silentJSONParsing: !0,
		forcedJSONParsing: !0,
		clarifyTimeoutError: !1
	},
	Yk = typeof URLSearchParams < "u" ? URLSearchParams : nf,
	Xk = typeof FormData < "u" ? FormData : null,
	Jk = typeof Blob < "u" ? Blob : null,
	Kk = (() => {
		let e;
		return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u"
	})(),
	e2 = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(),
	Rt = {
		isBrowser: !0,
		classes: {
			URLSearchParams: Yk,
			FormData: Xk,
			Blob: Jk
		},
		isStandardBrowserEnv: Kk,
		isStandardBrowserWebWorkerEnv: e2,
		protocols: ["http", "https", "file", "blob", "url", "data"]
	};

function t2(e, t) {
	return Os(e, new Rt.classes.URLSearchParams, Object.assign({
		visitor: function(n, r, i, l) {
			return Rt.isNode && A.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : l.defaultVisitor.apply(this, arguments)
		}
	}, t))
}

function n2(e) {
	return A.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}

function r2(e) {
	const t = {},
		n = Object.keys(e);
	let r;
	const i = n.length;
	let l;
	for (r = 0; r < i; r++) l = n[r], t[l] = e[l];
	return t
}

function py(e) {
	function t(n, r, i, l) {
		let o = n[l++];
		const s = Number.isFinite(+o),
			a = l >= n.length;
		return o = !o && A.isArray(i) ? i.length : o, a ? (A.hasOwnProp(i, o) ? i[o] = [i[o], r] : i[o] = r, !s) : ((!i[o] || !A.isObject(i[o])) && (i[o] = []), t(n, r, i[o], l) && A.isArray(i[o]) && (i[o] = r2(i[o])), !s)
	}
	if (A.isFormData(e) && A.isFunction(e.entries)) {
		const n = {};
		return A.forEachEntry(e, (r, i) => {
			t(n2(r), i, n, 0)
		}), n
	}
	return null
}

function i2(e, t, n) {
	if (A.isString(e)) try {
		return (t || JSON.parse)(e), A.trim(e)
	} catch (r) {
		if (r.name !== "SyntaxError") throw r
	}
	return (n || JSON.stringify)(e)
}
const rf = {
	transitional: hy,
	adapter: Rt.isNode ? "http" : "xhr",
	transformRequest: [function(t, n) {
		const r = n.getContentType() || "",
			i = r.indexOf("application/json") > -1,
			l = A.isObject(t);
		if (l && A.isHTMLForm(t) && (t = new FormData(t)), A.isFormData(t)) return i && i ? JSON.stringify(py(t)) : t;
		if (A.isArrayBuffer(t) || A.isBuffer(t) || A.isStream(t) || A.isFile(t) || A.isBlob(t)) return t;
		if (A.isArrayBufferView(t)) return t.buffer;
		if (A.isURLSearchParams(t)) return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
		let s;
		if (l) {
			if (r.indexOf("application/x-www-form-urlencoded") > -1) return t2(t, this.formSerializer).toString();
			if ((s = A.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
				const a = this.env && this.env.FormData;
				return Os(s ? {
					"files[]": t
				} : t, a && new a, this.formSerializer)
			}
		}
		return l || i ? (n.setContentType("application/json", !1), i2(t)) : t
	}],
	transformResponse: [function(t) {
		const n = this.transitional || rf.transitional,
			r = n && n.forcedJSONParsing,
			i = this.responseType === "json";
		if (t && A.isString(t) && (r && !this.responseType || i)) {
			const o = !(n && n.silentJSONParsing) && i;
			try {
				return JSON.parse(t)
			} catch (s) {
				if (o) throw s.name === "SyntaxError" ? te.from(s, te.ERR_BAD_RESPONSE, this, null, this.response) : s
			}
		}
		return t
	}],
	timeout: 0,
	xsrfCookieName: "XSRF-TOKEN",
	xsrfHeaderName: "X-XSRF-TOKEN",
	maxContentLength: -1,
	maxBodyLength: -1,
	env: {
		FormData: Rt.classes.FormData,
		Blob: Rt.classes.Blob
	},
	validateStatus: function(t) {
		return t >= 200 && t < 300
	},
	headers: {
		common: {
			Accept: "application/json, text/plain, */*",
			"Content-Type": void 0
		}
	}
};
A.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
	rf.headers[e] = {}
});
const lf = rf,
	l2 = A.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
	o2 = e => {
		const t = {};
		let n, r, i;
		return e && e.split(`
`).forEach(function(o) {
			i = o.indexOf(":"), n = o.substring(0, i).trim().toLowerCase(), r = o.substring(i + 1).trim(), !(!n || t[n] && l2[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
		}), t
	},
	rh = Symbol("internals");

function Ei(e) {
	return e && String(e).trim().toLowerCase()
}

function go(e) {
	return e === !1 || e == null ? e : A.isArray(e) ? e.map(go) : String(e)
}

function s2(e) {
	const t = Object.create(null),
		n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
	let r;
	for (; r = n.exec(e);) t[r[1]] = r[2];
	return t
}
const a2 = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

function ma(e, t, n, r, i) {
	if (A.isFunction(r)) return r.call(this, t, n);
	if (i && (t = n), !!A.isString(t)) {
		if (A.isString(r)) return t.indexOf(r) !== -1;
		if (A.isRegExp(r)) return r.test(t)
	}
}

function u2(e) {
	return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}

function c2(e, t) {
	const n = A.toCamelCase(" " + t);
	["get", "set", "has"].forEach(r => {
		Object.defineProperty(e, r + n, {
			value: function(i, l, o) {
				return this[r].call(this, t, i, l, o)
			},
			configurable: !0
		})
	})
}
class As {
	constructor(t) {
		t && this.set(t)
	}
	set(t, n, r) {
		const i = this;

		function l(s, a, u) {
			const c = Ei(a);
			if (!c) throw new Error("header name must be a non-empty string");
			const f = A.findKey(i, c);
			(!f || i[f] === void 0 || u === !0 || u === void 0 && i[f] !== !1) && (i[f || a] = go(s))
		}
		const o = (s, a) => A.forEach(s, (u, c) => l(u, c, a));
		return A.isPlainObject(t) || t instanceof this.constructor ? o(t, n) : A.isString(t) && (t = t.trim()) && !a2(t) ? o(o2(t), n) : t != null && l(n, t, r), this
	}
	get(t, n) {
		if (t = Ei(t), t) {
			const r = A.findKey(this, t);
			if (r) {
				const i = this[r];
				if (!n) return i;
				if (n === !0) return s2(i);
				if (A.isFunction(n)) return n.call(this, i, r);
				if (A.isRegExp(n)) return n.exec(i);
				throw new TypeError("parser must be boolean|regexp|function")
			}
		}
	}
	has(t, n) {
		if (t = Ei(t), t) {
			const r = A.findKey(this, t);
			return !!(r && this[r] !== void 0 && (!n || ma(this, this[r], r, n)))
		}
		return !1
	}
	delete(t, n) {
		const r = this;
		let i = !1;

		function l(o) {
			if (o = Ei(o), o) {
				const s = A.findKey(r, o);
				s && (!n || ma(r, r[s], s, n)) && (delete r[s], i = !0)
			}
		}
		return A.isArray(t) ? t.forEach(l) : l(t), i
	}
	clear(t) {
		const n = Object.keys(this);
		let r = n.length,
			i = !1;
		for (; r--;) {
			const l = n[r];
			(!t || ma(this, this[l], l, t, !0)) && (delete this[l], i = !0)
		}
		return i
	}
	normalize(t) {
		const n = this,
			r = {};
		return A.forEach(this, (i, l) => {
			const o = A.findKey(r, l);
			if (o) {
				n[o] = go(i), delete n[l];
				return
			}
			const s = t ? u2(l) : String(l).trim();
			s !== l && delete n[l], n[s] = go(i), r[s] = !0
		}), this
	}
	concat(...t) {
		return this.constructor.concat(this, ...t)
	}
	toJSON(t) {
		const n = Object.create(null);
		return A.forEach(this, (r, i) => {
			r != null && r !== !1 && (n[i] = t && A.isArray(r) ? r.join(", ") : r)
		}), n
	} [Symbol.iterator]() {
		return Object.entries(this.toJSON())[Symbol.iterator]()
	}
	toString() {
		return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`)
	}
	get[Symbol.toStringTag]() {
		return "AxiosHeaders"
	}
	static from(t) {
		return t instanceof this ? t : new this(t)
	}
	static concat(t, ...n) {
		const r = new this(t);
		return n.forEach(i => r.set(i)), r
	}
	static accessor(t) {
		const r = (this[rh] = this[rh] = {
				accessors: {}
			}).accessors,
			i = this.prototype;

		function l(o) {
			const s = Ei(o);
			r[s] || (c2(i, o), r[s] = !0)
		}
		return A.isArray(t) ? t.forEach(l) : l(t), this
	}
}
As.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
A.reduceDescriptors(As.prototype, ({
	value: e
}, t) => {
	let n = t[0].toUpperCase() + t.slice(1);
	return {
		get: () => e,
		set(r) {
			this[n] = r
		}
	}
});
A.freezeMethods(As);
const on = As;

function ga(e, t) {
	const n = this || lf,
		r = t || n,
		i = on.from(r.headers);
	let l = r.data;
	return A.forEach(e, function(s) {
		l = s.call(n, l, i.normalize(), t ? t.status : void 0)
	}), i.normalize(), l
}

function my(e) {
	return !!(e && e.__CANCEL__)
}

function wl(e, t, n) {
	te.call(this, e ?? "canceled", te.ERR_CANCELED, t, n), this.name = "CanceledError"
}
A.inherits(wl, te, {
	__CANCEL__: !0
});

function f2(e, t, n) {
	const r = n.config.validateStatus;
	!n.status || !r || r(n.status) ? e(n) : t(new te("Request failed with status code " + n.status, [te.ERR_BAD_REQUEST, te.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n))
}
const d2 = Rt.isStandardBrowserEnv ? function() {
	return {
		write: function(n, r, i, l, o, s) {
			const a = [];
			a.push(n + "=" + encodeURIComponent(r)), A.isNumber(i) && a.push("expires=" + new Date(i).toGMTString()), A.isString(l) && a.push("path=" + l), A.isString(o) && a.push("domain=" + o), s === !0 && a.push("secure"), document.cookie = a.join("; ")
		},
		read: function(n) {
			const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
			return r ? decodeURIComponent(r[3]) : null
		},
		remove: function(n) {
			this.write(n, "", Date.now() - 864e5)
		}
	}
}() : function() {
	return {
		write: function() {},
		read: function() {
			return null
		},
		remove: function() {}
	}
}();

function h2(e) {
	return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}

function p2(e, t) {
	return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
}

function gy(e, t) {
	return e && !h2(t) ? p2(e, t) : t
}
const m2 = Rt.isStandardBrowserEnv ? function() {
	const t = /(msie|trident)/i.test(navigator.userAgent),
		n = document.createElement("a");
	let r;

	function i(l) {
		let o = l;
		return t && (n.setAttribute("href", o), o = n.href), n.setAttribute("href", o), {
			href: n.href,
			protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
			host: n.host,
			search: n.search ? n.search.replace(/^\?/, "") : "",
			hash: n.hash ? n.hash.replace(/^#/, "") : "",
			hostname: n.hostname,
			port: n.port,
			pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
		}
	}
	return r = i(window.location.href),
		function(o) {
			const s = A.isString(o) ? i(o) : o;
			return s.protocol === r.protocol && s.host === r.host
		}
}() : function() {
	return function() {
		return !0
	}
}();

function g2(e) {
	const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
	return t && t[1] || ""
}

function y2(e, t) {
	e = e || 10;
	const n = new Array(e),
		r = new Array(e);
	let i = 0,
		l = 0,
		o;
	return t = t !== void 0 ? t : 1e3,
		function(a) {
			const u = Date.now(),
				c = r[l];
			o || (o = u), n[i] = a, r[i] = u;
			let f = l,
				h = 0;
			for (; f !== i;) h += n[f++], f = f % e;
			if (i = (i + 1) % e, i === l && (l = (l + 1) % e), u - o < t) return;
			const d = c && u - c;
			return d ? Math.round(h * 1e3 / d) : void 0
		}
}

function ih(e, t) {
	let n = 0;
	const r = y2(50, 250);
	return i => {
		const l = i.loaded,
			o = i.lengthComputable ? i.total : void 0,
			s = l - n,
			a = r(s),
			u = l <= o;
		n = l;
		const c = {
			loaded: l,
			total: o,
			progress: o ? l / o : void 0,
			bytes: s,
			rate: a || void 0,
			estimated: a && o && u ? (o - l) / a : void 0,
			event: i
		};
		c[t ? "download" : "upload"] = !0, e(c)
	}
}
const x2 = typeof XMLHttpRequest < "u",
	w2 = x2 && function(e) {
		return new Promise(function(n, r) {
			let i = e.data;
			const l = on.from(e.headers).normalize(),
				o = e.responseType;
			let s;

			function a() {
				e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener("abort", s)
			}
			A.isFormData(i) && (Rt.isStandardBrowserEnv || Rt.isStandardBrowserWebWorkerEnv ? l.setContentType(!1) : l.setContentType("multipart/form-data;", !1));
			let u = new XMLHttpRequest;
			if (e.auth) {
				const d = e.auth.username || "",
					p = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
				l.set("Authorization", "Basic " + btoa(d + ":" + p))
			}
			const c = gy(e.baseURL, e.url);
			u.open(e.method.toUpperCase(), dy(c, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;

			function f() {
				if (!u) return;
				const d = on.from("getAllResponseHeaders" in u && u.getAllResponseHeaders()),
					x = {
						data: !o || o === "text" || o === "json" ? u.responseText : u.response,
						status: u.status,
						statusText: u.statusText,
						headers: d,
						config: e,
						request: u
					};
				f2(function(m) {
					n(m), a()
				}, function(m) {
					r(m), a()
				}, x), u = null
			}
			if ("onloadend" in u ? u.onloadend = f : u.onreadystatechange = function() {
					!u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(f)
				}, u.onabort = function() {
					u && (r(new te("Request aborted", te.ECONNABORTED, e, u)), u = null)
				}, u.onerror = function() {
					r(new te("Network Error", te.ERR_NETWORK, e, u)), u = null
				}, u.ontimeout = function() {
					let p = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
					const x = e.transitional || hy;
					e.timeoutErrorMessage && (p = e.timeoutErrorMessage), r(new te(p, x.clarifyTimeoutError ? te.ETIMEDOUT : te.ECONNABORTED, e, u)), u = null
				}, Rt.isStandardBrowserEnv) {
				const d = (e.withCredentials || m2(c)) && e.xsrfCookieName && d2.read(e.xsrfCookieName);
				d && l.set(e.xsrfHeaderName, d)
			}
			i === void 0 && l.setContentType(null), "setRequestHeader" in u && A.forEach(l.toJSON(), function(p, x) {
				u.setRequestHeader(x, p)
			}), A.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), o && o !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", ih(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", ih(e.onUploadProgress)), (e.cancelToken || e.signal) && (s = d => {
				u && (r(!d || d.type ? new wl(null, e, u) : d), u.abort(), u = null)
			}, e.cancelToken && e.cancelToken.subscribe(s), e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
			const h = g2(c);
			if (h && Rt.protocols.indexOf(h) === -1) {
				r(new te("Unsupported protocol " + h + ":", te.ERR_BAD_REQUEST, e));
				return
			}
			u.send(i || null)
		})
	},
	yo = {
		http: Wk,
		xhr: w2
	};
A.forEach(yo, (e, t) => {
	if (e) {
		try {
			Object.defineProperty(e, "name", {
				value: t
			})
		} catch {}
		Object.defineProperty(e, "adapterName", {
			value: t
		})
	}
});
const yy = {
	getAdapter: e => {
		e = A.isArray(e) ? e : [e];
		const {
			length: t
		} = e;
		let n, r;
		for (let i = 0; i < t && (n = e[i], !(r = A.isString(n) ? yo[n.toLowerCase()] : n)); i++);
		if (!r) throw r === !1 ? new te(`Adapter ${n} is not supported by the environment`, "ERR_NOT_SUPPORT") : new Error(A.hasOwnProp(yo, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`);
		if (!A.isFunction(r)) throw new TypeError("adapter is not a function");
		return r
	},
	adapters: yo
};

function ya(e) {
	if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new wl(null, e)
}

function lh(e) {
	return ya(e), e.headers = on.from(e.headers), e.data = ga.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), yy.getAdapter(e.adapter || lf.adapter)(e).then(function(r) {
		return ya(e), r.data = ga.call(e, e.transformResponse, r), r.headers = on.from(r.headers), r
	}, function(r) {
		return my(r) || (ya(e), r && r.response && (r.response.data = ga.call(e, e.transformResponse, r.response), r.response.headers = on.from(r.response.headers))), Promise.reject(r)
	})
}
const oh = e => e instanceof on ? e.toJSON() : e;

function ti(e, t) {
	t = t || {};
	const n = {};

	function r(u, c, f) {
		return A.isPlainObject(u) && A.isPlainObject(c) ? A.merge.call({
			caseless: f
		}, u, c) : A.isPlainObject(c) ? A.merge({}, c) : A.isArray(c) ? c.slice() : c
	}

	function i(u, c, f) {
		if (A.isUndefined(c)) {
			if (!A.isUndefined(u)) return r(void 0, u, f)
		} else return r(u, c, f)
	}

	function l(u, c) {
		if (!A.isUndefined(c)) return r(void 0, c)
	}

	function o(u, c) {
		if (A.isUndefined(c)) {
			if (!A.isUndefined(u)) return r(void 0, u)
		} else return r(void 0, c)
	}

	function s(u, c, f) {
		if (f in t) return r(u, c);
		if (f in e) return r(void 0, u)
	}
	const a = {
		url: l,
		method: l,
		data: l,
		baseURL: o,
		transformRequest: o,
		transformResponse: o,
		paramsSerializer: o,
		timeout: o,
		timeoutMessage: o,
		withCredentials: o,
		adapter: o,
		responseType: o,
		xsrfCookieName: o,
		xsrfHeaderName: o,
		onUploadProgress: o,
		onDownloadProgress: o,
		decompress: o,
		maxContentLength: o,
		maxBodyLength: o,
		beforeRedirect: o,
		transport: o,
		httpAgent: o,
		httpsAgent: o,
		cancelToken: o,
		socketPath: o,
		responseEncoding: o,
		validateStatus: s,
		headers: (u, c) => i(oh(u), oh(c), !0)
	};
	return A.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
		const f = a[c] || i,
			h = f(e[c], t[c], c);
		A.isUndefined(h) && f !== s || (n[c] = h)
	}), n
}
const xy = "1.5.0",
	of = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
	of [e] = function(r) {
		return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
	}
});
const sh = {};
of.transitional = function(t, n, r) {
	function i(l, o) {
		return "[Axios v" + xy + "] Transitional option '" + l + "'" + o + (r ? ". " + r : "")
	}
	return (l, o, s) => {
		if (t === !1) throw new te(i(o, " has been removed" + (n ? " in " + n : "")), te.ERR_DEPRECATED);
		return n && !sh[o] && (sh[o] = !0, console.warn(i(o, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(l, o, s) : !0
	}
};

function v2(e, t, n) {
	if (typeof e != "object") throw new te("options must be an object", te.ERR_BAD_OPTION_VALUE);
	const r = Object.keys(e);
	let i = r.length;
	for (; i-- > 0;) {
		const l = r[i],
			o = t[l];
		if (o) {
			const s = e[l],
				a = s === void 0 || o(s, l, e);
			if (a !== !0) throw new te("option " + l + " must be " + a, te.ERR_BAD_OPTION_VALUE);
			continue
		}
		if (n !== !0) throw new te("Unknown option " + l, te.ERR_BAD_OPTION)
	}
}
const Fu = {
		assertOptions: v2,
		validators: of
	},
	gn = Fu.validators;
class Jo {
	constructor(t) {
		this.defaults = t, this.interceptors = {
			request: new nh,
			response: new nh
		}
	}
	request(t, n) {
		typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = ti(this.defaults, n);
		const {
			transitional: r,
			paramsSerializer: i,
			headers: l
		} = n;
		r !== void 0 && Fu.assertOptions(r, {
			silentJSONParsing: gn.transitional(gn.boolean),
			forcedJSONParsing: gn.transitional(gn.boolean),
			clarifyTimeoutError: gn.transitional(gn.boolean)
		}, !1), i != null && (A.isFunction(i) ? n.paramsSerializer = {
			serialize: i
		} : Fu.assertOptions(i, {
			encode: gn.function,
			serialize: gn.function
		}, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
		let o = l && A.merge(l.common, l[n.method]);
		l && A.forEach(["delete", "get", "head", "post", "put", "patch", "common"], p => {
			delete l[p]
		}), n.headers = on.concat(o, l);
		const s = [];
		let a = !0;
		this.interceptors.request.forEach(function(x) {
			typeof x.runWhen == "function" && x.runWhen(n) === !1 || (a = a && x.synchronous, s.unshift(x.fulfilled, x.rejected))
		});
		const u = [];
		this.interceptors.response.forEach(function(x) {
			u.push(x.fulfilled, x.rejected)
		});
		let c, f = 0,
			h;
		if (!a) {
			const p = [lh.bind(this), void 0];
			for (p.unshift.apply(p, s), p.push.apply(p, u), h = p.length, c = Promise.resolve(n); f < h;) c = c.then(p[f++], p[f++]);
			return c
		}
		h = s.length;
		let d = n;
		for (f = 0; f < h;) {
			const p = s[f++],
				x = s[f++];
			try {
				d = p(d)
			} catch (S) {
				x.call(this, S);
				break
			}
		}
		try {
			c = lh.call(this, d)
		} catch (p) {
			return Promise.reject(p)
		}
		for (f = 0, h = u.length; f < h;) c = c.then(u[f++], u[f++]);
		return c
	}
	getUri(t) {
		t = ti(this.defaults, t);
		const n = gy(t.baseURL, t.url);
		return dy(n, t.params, t.paramsSerializer)
	}
}
A.forEach(["delete", "get", "head", "options"], function(t) {
	Jo.prototype[t] = function(n, r) {
		return this.request(ti(r || {}, {
			method: t,
			url: n,
			data: (r || {}).data
		}))
	}
});
A.forEach(["post", "put", "patch"], function(t) {
	function n(r) {
		return function(l, o, s) {
			return this.request(ti(s || {}, {
				method: t,
				headers: r ? {
					"Content-Type": "multipart/form-data"
				} : {},
				url: l,
				data: o
			}))
		}
	}
	Jo.prototype[t] = n(), Jo.prototype[t + "Form"] = n(!0)
});
const xo = Jo;
class sf {
	constructor(t) {
		if (typeof t != "function") throw new TypeError("executor must be a function.");
		let n;
		this.promise = new Promise(function(l) {
			n = l
		});
		const r = this;
		this.promise.then(i => {
			if (!r._listeners) return;
			let l = r._listeners.length;
			for (; l-- > 0;) r._listeners[l](i);
			r._listeners = null
		}), this.promise.then = i => {
			let l;
			const o = new Promise(s => {
				r.subscribe(s), l = s
			}).then(i);
			return o.cancel = function() {
				r.unsubscribe(l)
			}, o
		}, t(function(l, o, s) {
			r.reason || (r.reason = new wl(l, o, s), n(r.reason))
		})
	}
	throwIfRequested() {
		if (this.reason) throw this.reason
	}
	subscribe(t) {
		if (this.reason) {
			t(this.reason);
			return
		}
		this._listeners ? this._listeners.push(t) : this._listeners = [t]
	}
	unsubscribe(t) {
		if (!this._listeners) return;
		const n = this._listeners.indexOf(t);
		n !== -1 && this._listeners.splice(n, 1)
	}
	static source() {
		let t;
		return {
			token: new sf(function(i) {
				t = i
			}),
			cancel: t
		}
	}
}
const k2 = sf;

function S2(e) {
	return function(n) {
		return e.apply(null, n)
	}
}

function E2(e) {
	return A.isObject(e) && e.isAxiosError === !0
}
const _u = {
	Continue: 100,
	SwitchingProtocols: 101,
	Processing: 102,
	EarlyHints: 103,
	Ok: 200,
	Created: 201,
	Accepted: 202,
	NonAuthoritativeInformation: 203,
	NoContent: 204,
	ResetContent: 205,
	PartialContent: 206,
	MultiStatus: 207,
	AlreadyReported: 208,
	ImUsed: 226,
	MultipleChoices: 300,
	MovedPermanently: 301,
	Found: 302,
	SeeOther: 303,
	NotModified: 304,
	UseProxy: 305,
	Unused: 306,
	TemporaryRedirect: 307,
	PermanentRedirect: 308,
	BadRequest: 400,
	Unauthorized: 401,
	PaymentRequired: 402,
	Forbidden: 403,
	NotFound: 404,
	MethodNotAllowed: 405,
	NotAcceptable: 406,
	ProxyAuthenticationRequired: 407,
	RequestTimeout: 408,
	Conflict: 409,
	Gone: 410,
	LengthRequired: 411,
	PreconditionFailed: 412,
	PayloadTooLarge: 413,
	UriTooLong: 414,
	UnsupportedMediaType: 415,
	RangeNotSatisfiable: 416,
	ExpectationFailed: 417,
	ImATeapot: 418,
	MisdirectedRequest: 421,
	UnprocessableEntity: 422,
	Locked: 423,
	FailedDependency: 424,
	TooEarly: 425,
	UpgradeRequired: 426,
	PreconditionRequired: 428,
	TooManyRequests: 429,
	RequestHeaderFieldsTooLarge: 431,
	UnavailableForLegalReasons: 451,
	InternalServerError: 500,
	NotImplemented: 501,
	BadGateway: 502,
	ServiceUnavailable: 503,
	GatewayTimeout: 504,
	HttpVersionNotSupported: 505,
	VariantAlsoNegotiates: 506,
	InsufficientStorage: 507,
	LoopDetected: 508,
	NotExtended: 510,
	NetworkAuthenticationRequired: 511
};
Object.entries(_u).forEach(([e, t]) => {
	_u[t] = e
});
const C2 = _u;

function wy(e) {
	const t = new xo(e),
		n = ey(xo.prototype.request, t);
	return A.extend(n, xo.prototype, t, {
		allOwnKeys: !0
	}), A.extend(n, t, null, {
		allOwnKeys: !0
	}), n.create = function(i) {
		return wy(ti(e, i))
	}, n
}
const Ie = wy(lf);
Ie.Axios = xo;
Ie.CanceledError = wl;
Ie.CancelToken = k2;
Ie.isCancel = my;
Ie.VERSION = xy;
Ie.toFormData = Os;
Ie.AxiosError = te;
Ie.Cancel = Ie.CanceledError;
Ie.all = function(t) {
	return Promise.all(t)
};
Ie.spread = S2;
Ie.isAxiosError = E2;
Ie.mergeConfig = ti;
Ie.AxiosHeaders = on;
Ie.formToJSON = e => py(A.isHTMLForm(e) ? new FormData(e) : e);
Ie.getAdapter = yy.getAdapter;
Ie.HttpStatusCode = C2;
Ie.default = Ie;
const le = Ie;

function N2(e, t) {
	const n = t || {};
	return (e[e.length - 1] === "" ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")).trim()
}
const b2 = /[ \t\n\f\r]/g;

function T2(e) {
	return typeof e == "object" ? e.type === "text" ? ah(e.value) : !1 : ah(e)
}

function ah(e) {
	return e.replace(b2, "") === ""
}
class vl {
	constructor(t, n, r) {
		this.property = t, this.normal = n, r && (this.space = r)
	}
}
vl.prototype.property = {};
vl.prototype.normal = {};
vl.prototype.space = null;

function vy(e, t) {
	const n = {},
		r = {};
	let i = -1;
	for (; ++i < e.length;) Object.assign(n, e[i].property), Object.assign(r, e[i].normal);
	return new vl(n, r, t)
}

function Bu(e) {
	return e.toLowerCase()
}
let Ot = class {
	constructor(t, n) {
		this.property = t, this.attribute = n
	}
};
Ot.prototype.space = null;
Ot.prototype.boolean = !1;
Ot.prototype.booleanish = !1;
Ot.prototype.overloadedBoolean = !1;
Ot.prototype.number = !1;
Ot.prototype.commaSeparated = !1;
Ot.prototype.spaceSeparated = !1;
Ot.prototype.commaOrSpaceSeparated = !1;
Ot.prototype.mustUseProperty = !1;
Ot.prototype.defined = !1;
let O2 = 0;
const W = xr(),
	Oe = xr(),
	ky = xr(),
	I = xr(),
	de = xr(),
	qr = xr(),
	at = xr();

function xr() {
	return 2 ** ++O2
}
const Uu = Object.freeze(Object.defineProperty({
		__proto__: null,
		boolean: W,
		booleanish: Oe,
		commaOrSpaceSeparated: at,
		commaSeparated: qr,
		number: I,
		overloadedBoolean: ky,
		spaceSeparated: de
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	xa = Object.keys(Uu);
class af extends Ot {
	constructor(t, n, r, i) {
		let l = -1;
		if (super(t, n), uh(this, "space", i), typeof r == "number")
			for (; ++l < xa.length;) {
				const o = xa[l];
				uh(this, xa[l], (r & Uu[o]) === Uu[o])
			}
	}
}
af.prototype.defined = !0;

function uh(e, t, n) {
	n && (e[t] = n)
}
const A2 = {}.hasOwnProperty;

function ai(e) {
	const t = {},
		n = {};
	let r;
	for (r in e.properties)
		if (A2.call(e.properties, r)) {
			const i = e.properties[r],
				l = new af(r, e.transform(e.attributes || {}, r), i, e.space);
			e.mustUseProperty && e.mustUseProperty.includes(r) && (l.mustUseProperty = !0), t[r] = l, n[Bu(r)] = r, n[Bu(l.attribute)] = r
		} return new vl(t, n, e.space)
}
const Sy = ai({
		space: "xlink",
		transform(e, t) {
			return "xlink:" + t.slice(5).toLowerCase()
		},
		properties: {
			xLinkActuate: null,
			xLinkArcRole: null,
			xLinkHref: null,
			xLinkRole: null,
			xLinkShow: null,
			xLinkTitle: null,
			xLinkType: null
		}
	}),
	Ey = ai({
		space: "xml",
		transform(e, t) {
			return "xml:" + t.slice(3).toLowerCase()
		},
		properties: {
			xmlLang: null,
			xmlBase: null,
			xmlSpace: null
		}
	});

function Cy(e, t) {
	return t in e ? e[t] : t
}

function Ny(e, t) {
	return Cy(e, t.toLowerCase())
}
const by = ai({
		space: "xmlns",
		attributes: {
			xmlnsxlink: "xmlns:xlink"
		},
		transform: Ny,
		properties: {
			xmlns: null,
			xmlnsXLink: null
		}
	}),
	Ty = ai({
		transform(e, t) {
			return t === "role" ? t : "aria-" + t.slice(4).toLowerCase()
		},
		properties: {
			ariaActiveDescendant: null,
			ariaAtomic: Oe,
			ariaAutoComplete: null,
			ariaBusy: Oe,
			ariaChecked: Oe,
			ariaColCount: I,
			ariaColIndex: I,
			ariaColSpan: I,
			ariaControls: de,
			ariaCurrent: null,
			ariaDescribedBy: de,
			ariaDetails: null,
			ariaDisabled: Oe,
			ariaDropEffect: de,
			ariaErrorMessage: null,
			ariaExpanded: Oe,
			ariaFlowTo: de,
			ariaGrabbed: Oe,
			ariaHasPopup: null,
			ariaHidden: Oe,
			ariaInvalid: null,
			ariaKeyShortcuts: null,
			ariaLabel: null,
			ariaLabelledBy: de,
			ariaLevel: I,
			ariaLive: null,
			ariaModal: Oe,
			ariaMultiLine: Oe,
			ariaMultiSelectable: Oe,
			ariaOrientation: null,
			ariaOwns: de,
			ariaPlaceholder: null,
			ariaPosInSet: I,
			ariaPressed: Oe,
			ariaReadOnly: Oe,
			ariaRelevant: null,
			ariaRequired: Oe,
			ariaRoleDescription: de,
			ariaRowCount: I,
			ariaRowIndex: I,
			ariaRowSpan: I,
			ariaSelected: Oe,
			ariaSetSize: I,
			ariaSort: null,
			ariaValueMax: I,
			ariaValueMin: I,
			ariaValueNow: I,
			ariaValueText: null,
			role: null
		}
	}),
	j2 = ai({
		space: "html",
		attributes: {
			acceptcharset: "accept-charset",
			classname: "class",
			htmlfor: "for",
			httpequiv: "http-equiv"
		},
		transform: Ny,
		mustUseProperty: ["checked", "multiple", "muted", "selected"],
		properties: {
			abbr: null,
			accept: qr,
			acceptCharset: de,
			accessKey: de,
			action: null,
			allow: null,
			allowFullScreen: W,
			allowPaymentRequest: W,
			allowUserMedia: W,
			alt: null,
			as: null,
			async: W,
			autoCapitalize: null,
			autoComplete: de,
			autoFocus: W,
			autoPlay: W,
			blocking: de,
			capture: W,
			charSet: null,
			checked: W,
			cite: null,
			className: de,
			cols: I,
			colSpan: null,
			content: null,
			contentEditable: Oe,
			controls: W,
			controlsList: de,
			coords: I | qr,
			crossOrigin: null,
			data: null,
			dateTime: null,
			decoding: null,
			default: W,
			defer: W,
			dir: null,
			dirName: null,
			disabled: W,
			download: ky,
			draggable: Oe,
			encType: null,
			enterKeyHint: null,
			fetchPriority: null,
			form: null,
			formAction: null,
			formEncType: null,
			formMethod: null,
			formNoValidate: W,
			formTarget: null,
			headers: de,
			height: I,
			hidden: W,
			high: I,
			href: null,
			hrefLang: null,
			htmlFor: de,
			httpEquiv: de,
			id: null,
			imageSizes: null,
			imageSrcSet: null,
			inert: W,
			inputMode: null,
			integrity: null,
			is: null,
			isMap: W,
			itemId: null,
			itemProp: de,
			itemRef: de,
			itemScope: W,
			itemType: de,
			kind: null,
			label: null,
			lang: null,
			language: null,
			list: null,
			loading: null,
			loop: W,
			low: I,
			manifest: null,
			max: null,
			maxLength: I,
			media: null,
			method: null,
			min: null,
			minLength: I,
			multiple: W,
			muted: W,
			name: null,
			nonce: null,
			noModule: W,
			noValidate: W,
			onAbort: null,
			onAfterPrint: null,
			onAuxClick: null,
			onBeforeMatch: null,
			onBeforePrint: null,
			onBeforeUnload: null,
			onBlur: null,
			onCancel: null,
			onCanPlay: null,
			onCanPlayThrough: null,
			onChange: null,
			onClick: null,
			onClose: null,
			onContextLost: null,
			onContextMenu: null,
			onContextRestored: null,
			onCopy: null,
			onCueChange: null,
			onCut: null,
			onDblClick: null,
			onDrag: null,
			onDragEnd: null,
			onDragEnter: null,
			onDragExit: null,
			onDragLeave: null,
			onDragOver: null,
			onDragStart: null,
			onDrop: null,
			onDurationChange: null,
			onEmptied: null,
			onEnded: null,
			onError: null,
			onFocus: null,
			onFormData: null,
			onHashChange: null,
			onInput: null,
			onInvalid: null,
			onKeyDown: null,
			onKeyPress: null,
			onKeyUp: null,
			onLanguageChange: null,
			onLoad: null,
			onLoadedData: null,
			onLoadedMetadata: null,
			onLoadEnd: null,
			onLoadStart: null,
			onMessage: null,
			onMessageError: null,
			onMouseDown: null,
			onMouseEnter: null,
			onMouseLeave: null,
			onMouseMove: null,
			onMouseOut: null,
			onMouseOver: null,
			onMouseUp: null,
			onOffline: null,
			onOnline: null,
			onPageHide: null,
			onPageShow: null,
			onPaste: null,
			onPause: null,
			onPlay: null,
			onPlaying: null,
			onPopState: null,
			onProgress: null,
			onRateChange: null,
			onRejectionHandled: null,
			onReset: null,
			onResize: null,
			onScroll: null,
			onScrollEnd: null,
			onSecurityPolicyViolation: null,
			onSeeked: null,
			onSeeking: null,
			onSelect: null,
			onSlotChange: null,
			onStalled: null,
			onStorage: null,
			onSubmit: null,
			onSuspend: null,
			onTimeUpdate: null,
			onToggle: null,
			onUnhandledRejection: null,
			onUnload: null,
			onVolumeChange: null,
			onWaiting: null,
			onWheel: null,
			open: W,
			optimum: I,
			pattern: null,
			ping: de,
			placeholder: null,
			playsInline: W,
			popover: null,
			popoverTarget: null,
			popoverTargetAction: null,
			poster: null,
			preload: null,
			readOnly: W,
			referrerPolicy: null,
			rel: de,
			required: W,
			reversed: W,
			rows: I,
			rowSpan: I,
			sandbox: de,
			scope: null,
			scoped: W,
			seamless: W,
			selected: W,
			shape: null,
			size: I,
			sizes: null,
			slot: null,
			span: I,
			spellCheck: Oe,
			src: null,
			srcDoc: null,
			srcLang: null,
			srcSet: null,
			start: I,
			step: null,
			style: null,
			tabIndex: I,
			target: null,
			title: null,
			translate: null,
			type: null,
			typeMustMatch: W,
			useMap: null,
			value: Oe,
			width: I,
			wrap: null,
			align: null,
			aLink: null,
			archive: de,
			axis: null,
			background: null,
			bgColor: null,
			border: I,
			borderColor: null,
			bottomMargin: I,
			cellPadding: null,
			cellSpacing: null,
			char: null,
			charOff: null,
			classId: null,
			clear: null,
			code: null,
			codeBase: null,
			codeType: null,
			color: null,
			compact: W,
			declare: W,
			event: null,
			face: null,
			frame: null,
			frameBorder: null,
			hSpace: I,
			leftMargin: I,
			link: null,
			longDesc: null,
			lowSrc: null,
			marginHeight: I,
			marginWidth: I,
			noResize: W,
			noHref: W,
			noShade: W,
			noWrap: W,
			object: null,
			profile: null,
			prompt: null,
			rev: null,
			rightMargin: I,
			rules: null,
			scheme: null,
			scrolling: Oe,
			standby: null,
			summary: null,
			text: null,
			topMargin: I,
			valueType: null,
			version: null,
			vAlign: null,
			vLink: null,
			vSpace: I,
			allowTransparency: null,
			autoCorrect: null,
			autoSave: null,
			disablePictureInPicture: W,
			disableRemotePlayback: W,
			prefix: null,
			property: null,
			results: I,
			security: null,
			unselectable: null
		}
	}),
	P2 = ai({
		space: "svg",
		attributes: {
			accentHeight: "accent-height",
			alignmentBaseline: "alignment-baseline",
			arabicForm: "arabic-form",
			baselineShift: "baseline-shift",
			capHeight: "cap-height",
			className: "class",
			clipPath: "clip-path",
			clipRule: "clip-rule",
			colorInterpolation: "color-interpolation",
			colorInterpolationFilters: "color-interpolation-filters",
			colorProfile: "color-profile",
			colorRendering: "color-rendering",
			crossOrigin: "crossorigin",
			dataType: "datatype",
			dominantBaseline: "dominant-baseline",
			enableBackground: "enable-background",
			fillOpacity: "fill-opacity",
			fillRule: "fill-rule",
			floodColor: "flood-color",
			floodOpacity: "flood-opacity",
			fontFamily: "font-family",
			fontSize: "font-size",
			fontSizeAdjust: "font-size-adjust",
			fontStretch: "font-stretch",
			fontStyle: "font-style",
			fontVariant: "font-variant",
			fontWeight: "font-weight",
			glyphName: "glyph-name",
			glyphOrientationHorizontal: "glyph-orientation-horizontal",
			glyphOrientationVertical: "glyph-orientation-vertical",
			hrefLang: "hreflang",
			horizAdvX: "horiz-adv-x",
			horizOriginX: "horiz-origin-x",
			horizOriginY: "horiz-origin-y",
			imageRendering: "image-rendering",
			letterSpacing: "letter-spacing",
			lightingColor: "lighting-color",
			markerEnd: "marker-end",
			markerMid: "marker-mid",
			markerStart: "marker-start",
			navDown: "nav-down",
			navDownLeft: "nav-down-left",
			navDownRight: "nav-down-right",
			navLeft: "nav-left",
			navNext: "nav-next",
			navPrev: "nav-prev",
			navRight: "nav-right",
			navUp: "nav-up",
			navUpLeft: "nav-up-left",
			navUpRight: "nav-up-right",
			onAbort: "onabort",
			onActivate: "onactivate",
			onAfterPrint: "onafterprint",
			onBeforePrint: "onbeforeprint",
			onBegin: "onbegin",
			onCancel: "oncancel",
			onCanPlay: "oncanplay",
			onCanPlayThrough: "oncanplaythrough",
			onChange: "onchange",
			onClick: "onclick",
			onClose: "onclose",
			onCopy: "oncopy",
			onCueChange: "oncuechange",
			onCut: "oncut",
			onDblClick: "ondblclick",
			onDrag: "ondrag",
			onDragEnd: "ondragend",
			onDragEnter: "ondragenter",
			onDragExit: "ondragexit",
			onDragLeave: "ondragleave",
			onDragOver: "ondragover",
			onDragStart: "ondragstart",
			onDrop: "ondrop",
			onDurationChange: "ondurationchange",
			onEmptied: "onemptied",
			onEnd: "onend",
			onEnded: "onended",
			onError: "onerror",
			onFocus: "onfocus",
			onFocusIn: "onfocusin",
			onFocusOut: "onfocusout",
			onHashChange: "onhashchange",
			onInput: "oninput",
			onInvalid: "oninvalid",
			onKeyDown: "onkeydown",
			onKeyPress: "onkeypress",
			onKeyUp: "onkeyup",
			onLoad: "onload",
			onLoadedData: "onloadeddata",
			onLoadedMetadata: "onloadedmetadata",
			onLoadStart: "onloadstart",
			onMessage: "onmessage",
			onMouseDown: "onmousedown",
			onMouseEnter: "onmouseenter",
			onMouseLeave: "onmouseleave",
			onMouseMove: "onmousemove",
			onMouseOut: "onmouseout",
			onMouseOver: "onmouseover",
			onMouseUp: "onmouseup",
			onMouseWheel: "onmousewheel",
			onOffline: "onoffline",
			onOnline: "ononline",
			onPageHide: "onpagehide",
			onPageShow: "onpageshow",
			onPaste: "onpaste",
			onPause: "onpause",
			onPlay: "onplay",
			onPlaying: "onplaying",
			onPopState: "onpopstate",
			onProgress: "onprogress",
			onRateChange: "onratechange",
			onRepeat: "onrepeat",
			onReset: "onreset",
			onResize: "onresize",
			onScroll: "onscroll",
			onSeeked: "onseeked",
			onSeeking: "onseeking",
			onSelect: "onselect",
			onShow: "onshow",
			onStalled: "onstalled",
			onStorage: "onstorage",
			onSubmit: "onsubmit",
			onSuspend: "onsuspend",
			onTimeUpdate: "ontimeupdate",
			onToggle: "ontoggle",
			onUnload: "onunload",
			onVolumeChange: "onvolumechange",
			onWaiting: "onwaiting",
			onZoom: "onzoom",
			overlinePosition: "overline-position",
			overlineThickness: "overline-thickness",
			paintOrder: "paint-order",
			panose1: "panose-1",
			pointerEvents: "pointer-events",
			referrerPolicy: "referrerpolicy",
			renderingIntent: "rendering-intent",
			shapeRendering: "shape-rendering",
			stopColor: "stop-color",
			stopOpacity: "stop-opacity",
			strikethroughPosition: "strikethrough-position",
			strikethroughThickness: "strikethrough-thickness",
			strokeDashArray: "stroke-dasharray",
			strokeDashOffset: "stroke-dashoffset",
			strokeLineCap: "stroke-linecap",
			strokeLineJoin: "stroke-linejoin",
			strokeMiterLimit: "stroke-miterlimit",
			strokeOpacity: "stroke-opacity",
			strokeWidth: "stroke-width",
			tabIndex: "tabindex",
			textAnchor: "text-anchor",
			textDecoration: "text-decoration",
			textRendering: "text-rendering",
			transformOrigin: "transform-origin",
			typeOf: "typeof",
			underlinePosition: "underline-position",
			underlineThickness: "underline-thickness",
			unicodeBidi: "unicode-bidi",
			unicodeRange: "unicode-range",
			unitsPerEm: "units-per-em",
			vAlphabetic: "v-alphabetic",
			vHanging: "v-hanging",
			vIdeographic: "v-ideographic",
			vMathematical: "v-mathematical",
			vectorEffect: "vector-effect",
			vertAdvY: "vert-adv-y",
			vertOriginX: "vert-origin-x",
			vertOriginY: "vert-origin-y",
			wordSpacing: "word-spacing",
			writingMode: "writing-mode",
			xHeight: "x-height",
			playbackOrder: "playbackorder",
			timelineBegin: "timelinebegin"
		},
		transform: Cy,
		properties: {
			about: at,
			accentHeight: I,
			accumulate: null,
			additive: null,
			alignmentBaseline: null,
			alphabetic: I,
			amplitude: I,
			arabicForm: null,
			ascent: I,
			attributeName: null,
			attributeType: null,
			azimuth: I,
			bandwidth: null,
			baselineShift: null,
			baseFrequency: null,
			baseProfile: null,
			bbox: null,
			begin: null,
			bias: I,
			by: null,
			calcMode: null,
			capHeight: I,
			className: de,
			clip: null,
			clipPath: null,
			clipPathUnits: null,
			clipRule: null,
			color: null,
			colorInterpolation: null,
			colorInterpolationFilters: null,
			colorProfile: null,
			colorRendering: null,
			content: null,
			contentScriptType: null,
			contentStyleType: null,
			crossOrigin: null,
			cursor: null,
			cx: null,
			cy: null,
			d: null,
			dataType: null,
			defaultAction: null,
			descent: I,
			diffuseConstant: I,
			direction: null,
			display: null,
			dur: null,
			divisor: I,
			dominantBaseline: null,
			download: W,
			dx: null,
			dy: null,
			edgeMode: null,
			editable: null,
			elevation: I,
			enableBackground: null,
			end: null,
			event: null,
			exponent: I,
			externalResourcesRequired: null,
			fill: null,
			fillOpacity: I,
			fillRule: null,
			filter: null,
			filterRes: null,
			filterUnits: null,
			floodColor: null,
			floodOpacity: null,
			focusable: null,
			focusHighlight: null,
			fontFamily: null,
			fontSize: null,
			fontSizeAdjust: null,
			fontStretch: null,
			fontStyle: null,
			fontVariant: null,
			fontWeight: null,
			format: null,
			fr: null,
			from: null,
			fx: null,
			fy: null,
			g1: qr,
			g2: qr,
			glyphName: qr,
			glyphOrientationHorizontal: null,
			glyphOrientationVertical: null,
			glyphRef: null,
			gradientTransform: null,
			gradientUnits: null,
			handler: null,
			hanging: I,
			hatchContentUnits: null,
			hatchUnits: null,
			height: null,
			href: null,
			hrefLang: null,
			horizAdvX: I,
			horizOriginX: I,
			horizOriginY: I,
			id: null,
			ideographic: I,
			imageRendering: null,
			initialVisibility: null,
			in: null,
			in2: null,
			intercept: I,
			k: I,
			k1: I,
			k2: I,
			k3: I,
			k4: I,
			kernelMatrix: at,
			kernelUnitLength: null,
			keyPoints: null,
			keySplines: null,
			keyTimes: null,
			kerning: null,
			lang: null,
			lengthAdjust: null,
			letterSpacing: null,
			lightingColor: null,
			limitingConeAngle: I,
			local: null,
			markerEnd: null,
			markerMid: null,
			markerStart: null,
			markerHeight: null,
			markerUnits: null,
			markerWidth: null,
			mask: null,
			maskContentUnits: null,
			maskUnits: null,
			mathematical: null,
			max: null,
			media: null,
			mediaCharacterEncoding: null,
			mediaContentEncodings: null,
			mediaSize: I,
			mediaTime: null,
			method: null,
			min: null,
			mode: null,
			name: null,
			navDown: null,
			navDownLeft: null,
			navDownRight: null,
			navLeft: null,
			navNext: null,
			navPrev: null,
			navRight: null,
			navUp: null,
			navUpLeft: null,
			navUpRight: null,
			numOctaves: null,
			observer: null,
			offset: null,
			onAbort: null,
			onActivate: null,
			onAfterPrint: null,
			onBeforePrint: null,
			onBegin: null,
			onCancel: null,
			onCanPlay: null,
			onCanPlayThrough: null,
			onChange: null,
			onClick: null,
			onClose: null,
			onCopy: null,
			onCueChange: null,
			onCut: null,
			onDblClick: null,
			onDrag: null,
			onDragEnd: null,
			onDragEnter: null,
			onDragExit: null,
			onDragLeave: null,
			onDragOver: null,
			onDragStart: null,
			onDrop: null,
			onDurationChange: null,
			onEmptied: null,
			onEnd: null,
			onEnded: null,
			onError: null,
			onFocus: null,
			onFocusIn: null,
			onFocusOut: null,
			onHashChange: null,
			onInput: null,
			onInvalid: null,
			onKeyDown: null,
			onKeyPress: null,
			onKeyUp: null,
			onLoad: null,
			onLoadedData: null,
			onLoadedMetadata: null,
			onLoadStart: null,
			onMessage: null,
			onMouseDown: null,
			onMouseEnter: null,
			onMouseLeave: null,
			onMouseMove: null,
			onMouseOut: null,
			onMouseOver: null,
			onMouseUp: null,
			onMouseWheel: null,
			onOffline: null,
			onOnline: null,
			onPageHide: null,
			onPageShow: null,
			onPaste: null,
			onPause: null,
			onPlay: null,
			onPlaying: null,
			onPopState: null,
			onProgress: null,
			onRateChange: null,
			onRepeat: null,
			onReset: null,
			onResize: null,
			onScroll: null,
			onSeeked: null,
			onSeeking: null,
			onSelect: null,
			onShow: null,
			onStalled: null,
			onStorage: null,
			onSubmit: null,
			onSuspend: null,
			onTimeUpdate: null,
			onToggle: null,
			onUnload: null,
			onVolumeChange: null,
			onWaiting: null,
			onZoom: null,
			opacity: null,
			operator: null,
			order: null,
			orient: null,
			orientation: null,
			origin: null,
			overflow: null,
			overlay: null,
			overlinePosition: I,
			overlineThickness: I,
			paintOrder: null,
			panose1: null,
			path: null,
			pathLength: I,
			patternContentUnits: null,
			patternTransform: null,
			patternUnits: null,
			phase: null,
			ping: de,
			pitch: null,
			playbackOrder: null,
			pointerEvents: null,
			points: null,
			pointsAtX: I,
			pointsAtY: I,
			pointsAtZ: I,
			preserveAlpha: null,
			preserveAspectRatio: null,
			primitiveUnits: null,
			propagate: null,
			property: at,
			r: null,
			radius: null,
			referrerPolicy: null,
			refX: null,
			refY: null,
			rel: at,
			rev: at,
			renderingIntent: null,
			repeatCount: null,
			repeatDur: null,
			requiredExtensions: at,
			requiredFeatures: at,
			requiredFonts: at,
			requiredFormats: at,
			resource: null,
			restart: null,
			result: null,
			rotate: null,
			rx: null,
			ry: null,
			scale: null,
			seed: null,
			shapeRendering: null,
			side: null,
			slope: null,
			snapshotTime: null,
			specularConstant: I,
			specularExponent: I,
			spreadMethod: null,
			spacing: null,
			startOffset: null,
			stdDeviation: null,
			stemh: null,
			stemv: null,
			stitchTiles: null,
			stopColor: null,
			stopOpacity: null,
			strikethroughPosition: I,
			strikethroughThickness: I,
			string: null,
			stroke: null,
			strokeDashArray: at,
			strokeDashOffset: null,
			strokeLineCap: null,
			strokeLineJoin: null,
			strokeMiterLimit: I,
			strokeOpacity: I,
			strokeWidth: null,
			style: null,
			surfaceScale: I,
			syncBehavior: null,
			syncBehaviorDefault: null,
			syncMaster: null,
			syncTolerance: null,
			syncToleranceDefault: null,
			systemLanguage: at,
			tabIndex: I,
			tableValues: null,
			target: null,
			targetX: I,
			targetY: I,
			textAnchor: null,
			textDecoration: null,
			textRendering: null,
			textLength: null,
			timelineBegin: null,
			title: null,
			transformBehavior: null,
			type: null,
			typeOf: at,
			to: null,
			transform: null,
			transformOrigin: null,
			u1: null,
			u2: null,
			underlinePosition: I,
			underlineThickness: I,
			unicode: null,
			unicodeBidi: null,
			unicodeRange: null,
			unitsPerEm: I,
			values: null,
			vAlphabetic: I,
			vMathematical: I,
			vectorEffect: null,
			vHanging: I,
			vIdeographic: I,
			version: null,
			vertAdvY: I,
			vertOriginX: I,
			vertOriginY: I,
			viewBox: null,
			viewTarget: null,
			visibility: null,
			width: null,
			widths: null,
			wordSpacing: null,
			writingMode: null,
			x: null,
			x1: null,
			x2: null,
			xChannelSelector: null,
			xHeight: I,
			y: null,
			y1: null,
			y2: null,
			yChannelSelector: null,
			z: null,
			zoomAndPan: null
		}
	}),
	I2 = /^data[-\w.:]+$/i,
	ch = /-[a-z]/g,
	L2 = /[A-Z]/g;

function M2(e, t) {
	const n = Bu(t);
	let r = t,
		i = Ot;
	if (n in e.normal) return e.property[e.normal[n]];
	if (n.length > 4 && n.slice(0, 4) === "data" && I2.test(t)) {
		if (t.charAt(4) === "-") {
			const l = t.slice(5).replace(ch, R2);
			r = "data" + l.charAt(0).toUpperCase() + l.slice(1)
		} else {
			const l = t.slice(4);
			if (!ch.test(l)) {
				let o = l.replace(L2, D2);
				o.charAt(0) !== "-" && (o = "-" + o), t = "data" + o
			}
		}
		i = af
	}
	return new i(r, t)
}

function D2(e) {
	return "-" + e.toLowerCase()
}

function R2(e) {
	return e.charAt(1).toUpperCase()
}
const z2 = {
		classId: "classID",
		dataType: "datatype",
		itemId: "itemID",
		strokeDashArray: "strokeDasharray",
		strokeDashOffset: "strokeDashoffset",
		strokeLineCap: "strokeLinecap",
		strokeLineJoin: "strokeLinejoin",
		strokeMiterLimit: "strokeMiterlimit",
		typeOf: "typeof",
		xLinkActuate: "xlinkActuate",
		xLinkArcRole: "xlinkArcrole",
		xLinkHref: "xlinkHref",
		xLinkRole: "xlinkRole",
		xLinkShow: "xlinkShow",
		xLinkTitle: "xlinkTitle",
		xLinkType: "xlinkType",
		xmlnsXLink: "xmlnsXlink"
	},
	F2 = vy([Ey, Sy, by, Ty, j2], "html"),
	Oy = vy([Ey, Sy, by, Ty, P2], "svg");

function _2(e) {
	return e.join(" ").trim()
}
var uf = {
		exports: {}
	},
	fh = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
	B2 = /\n/g,
	U2 = /^\s*/,
	V2 = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
	$2 = /^:\s*/,
	H2 = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
	W2 = /^[;\s]*/,
	q2 = /^\s+|\s+$/g,
	Z2 = `
`,
	dh = "/",
	hh = "*",
	er = "",
	Q2 = "comment",
	G2 = "declaration",
	Y2 = function(e, t) {
		if (typeof e != "string") throw new TypeError("First argument must be a string");
		if (!e) return [];
		t = t || {};
		var n = 1,
			r = 1;

		function i(p) {
			var x = p.match(B2);
			x && (n += x.length);
			var S = p.lastIndexOf(Z2);
			r = ~S ? p.length - S : r + p.length
		}

		function l() {
			var p = {
				line: n,
				column: r
			};
			return function(x) {
				return x.position = new o(p), u(), x
			}
		}

		function o(p) {
			this.start = p, this.end = {
				line: n,
				column: r
			}, this.source = t.source
		}
		o.prototype.content = e;

		function s(p) {
			var x = new Error(t.source + ":" + n + ":" + r + ": " + p);
			if (x.reason = p, x.filename = t.source, x.line = n, x.column = r, x.source = e, !t.silent) throw x
		}

		function a(p) {
			var x = p.exec(e);
			if (x) {
				var S = x[0];
				return i(S), e = e.slice(S.length), x
			}
		}

		function u() {
			a(U2)
		}

		function c(p) {
			var x;
			for (p = p || []; x = f();) x !== !1 && p.push(x);
			return p
		}

		function f() {
			var p = l();
			if (!(dh != e.charAt(0) || hh != e.charAt(1))) {
				for (var x = 2; er != e.charAt(x) && (hh != e.charAt(x) || dh != e.charAt(x + 1));) ++x;
				if (x += 2, er === e.charAt(x - 1)) return s("End of comment missing");
				var S = e.slice(2, x - 2);
				return r += 2, i(S), e = e.slice(x), r += 2, p({
					type: Q2,
					comment: S
				})
			}
		}

		function h() {
			var p = l(),
				x = a(V2);
			if (x) {
				if (f(), !a($2)) return s("property missing ':'");
				var S = a(H2),
					m = p({
						type: G2,
						property: ph(x[0].replace(fh, er)),
						value: S ? ph(S[0].replace(fh, er)) : er
					});
				return a(W2), m
			}
		}

		function d() {
			var p = [];
			c(p);
			for (var x; x = h();) x !== !1 && (p.push(x), c(p));
			return p
		}
		return u(), d()
	};

function ph(e) {
	return e ? e.replace(q2, er) : er
}
var X2 = Y2;

function Ay(e, t) {
	var n = null;
	if (!e || typeof e != "string") return n;
	for (var r, i = X2(e), l = typeof t == "function", o, s, a = 0, u = i.length; a < u; a++) r = i[a], o = r.property, s = r.value, l ? t(o, s, r) : s && (n || (n = {}), n[o] = s);
	return n
}
uf.exports = Ay;
uf.exports.default = Ay;
var J2 = uf.exports;
const K2 = nc(J2),
	jy = Py("end"),
	cf = Py("start");

function Py(e) {
	return t;

	function t(n) {
		const r = n && n.position && n.position[e] || {};
		if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0) return {
			line: r.line,
			column: r.column,
			offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
		}
	}
}

function eS(e) {
	const t = cf(e),
		n = jy(e);
	if (t && n) return {
		start: t,
		end: n
	}
}

function Vi(e) {
	return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? mh(e.position) : "start" in e || "end" in e ? mh(e) : "line" in e || "column" in e ? Vu(e) : ""
}

function Vu(e) {
	return gh(e && e.line) + ":" + gh(e && e.column)
}

function mh(e) {
	return Vu(e && e.start) + "-" + Vu(e && e.end)
}

function gh(e) {
	return e && typeof e == "number" ? e : 1
}
class Ke extends Error {
	constructor(t, n, r) {
		super(), typeof n == "string" && (r = n, n = void 0);
		let i = "",
			l = {},
			o = !1;
		if (n && ("line" in n && "column" in n ? l = {
				place: n
			} : "start" in n && "end" in n ? l = {
				place: n
			} : "type" in n ? l = {
				ancestors: [n],
				place: n.position
			} : l = {
				...n
			}), typeof t == "string" ? i = t : !l.cause && t && (o = !0, i = t.message, l.cause = t), !l.ruleId && !l.source && typeof r == "string") {
			const a = r.indexOf(":");
			a === -1 ? l.ruleId = r : (l.source = r.slice(0, a), l.ruleId = r.slice(a + 1))
		}
		if (!l.place && l.ancestors && l.ancestors) {
			const a = l.ancestors[l.ancestors.length - 1];
			a && (l.place = a.position)
		}
		const s = l.place && "start" in l.place ? l.place.start : l.place;
		this.ancestors = l.ancestors || void 0, this.cause = l.cause || void 0, this.column = s ? s.column : void 0, this.fatal = void 0, this.file, this.message = i, this.line = s ? s.line : void 0, this.name = Vi(l.place) || "1:1", this.place = l.place || void 0, this.reason = this.message, this.ruleId = l.ruleId || void 0, this.source = l.source || void 0, this.stack = o && l.cause && typeof l.cause.stack == "string" ? l.cause.stack : "", this.actual, this.expected, this.note, this.url
	}
}
Ke.prototype.file = "";
Ke.prototype.name = "";
Ke.prototype.reason = "";
Ke.prototype.message = "";
Ke.prototype.stack = "";
Ke.prototype.column = void 0;
Ke.prototype.line = void 0;
Ke.prototype.ancestors = void 0;
Ke.prototype.cause = void 0;
Ke.prototype.fatal = void 0;
Ke.prototype.place = void 0;
Ke.prototype.ruleId = void 0;
Ke.prototype.source = void 0;
const ff = {}.hasOwnProperty,
	tS = new Map,
	nS = /[A-Z]/g,
	rS = /-([a-z])/g,
	iS = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
	lS = new Set(["td", "th"]);

function oS(e, t) {
	if (!t || t.Fragment === void 0) throw new TypeError("Expected `Fragment` in options");
	const n = t.filePath || void 0;
	let r;
	if (t.development) {
		if (typeof t.jsxDEV != "function") throw new TypeError("Expected `jsxDEV` in options when `development: true`");
		r = aS(n, t.jsxDEV)
	} else {
		if (typeof t.jsx != "function") throw new TypeError("Expected `jsx` in production options");
		if (typeof t.jsxs != "function") throw new TypeError("Expected `jsxs` in production options");
		r = sS(n, t.jsx, t.jsxs)
	}
	const i = {
			Fragment: t.Fragment,
			ancestors: [],
			components: t.components || {},
			create: r,
			elementAttributeNameCase: t.elementAttributeNameCase || "react",
			filePath: n,
			ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
			passKeys: t.passKeys !== !1,
			passNode: t.passNode || !1,
			schema: t.space === "svg" ? Oy : F2,
			stylePropertyNameCase: t.stylePropertyNameCase || "dom",
			tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
		},
		l = Iy(i, e, void 0);
	return l && typeof l != "string" ? l : i.create(e, i.Fragment, {
		children: l || void 0
	}, void 0)
}

function Iy(e, t, n) {
	if (t.type === "element" || t.type === "root") {
		const r = e.schema;
		let i = r;
		t.type === "element" && t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = Oy, e.schema = i), e.ancestors.push(t);
		let l = uS(e, t);
		const o = cS(e, e.ancestors);
		let s = e.Fragment;
		if (e.ancestors.pop(), t.type === "element")
			if (l && iS.has(t.tagName) && (l = l.filter(function(a) {
					return typeof a == "string" ? !T2(a) : !0
				})), ff.call(e.components, t.tagName)) {
				const a = t.tagName;
				s = e.components[a], typeof s != "string" && s !== e.Fragment && e.passNode && (o.node = t)
			} else s = t.tagName;
		if (l.length > 0) {
			const a = l.length > 1 ? l : l[0];
			a && (o.children = a)
		}
		return e.schema = r, e.create(t, s, o, n)
	}
	if (t.type === "text") return t.value
}

function sS(e, t, n) {
	return r;

	function r(i, l, o, s) {
		const u = Array.isArray(o.children) ? n : t;
		return s ? u(l, o, s) : u(l, o)
	}
}

function aS(e, t) {
	return n;

	function n(r, i, l, o) {
		const s = Array.isArray(l.children),
			a = cf(r);
		return t(i, l, o, s, {
			columnNumber: a ? a.column - 1 : void 0,
			fileName: e,
			lineNumber: a ? a.line : void 0
		}, void 0)
	}
}

function uS(e, t) {
	const n = [];
	let r = -1;
	const i = e.passKeys ? new Map : tS;
	for (; ++r < t.children.length;) {
		const l = t.children[r];
		let o;
		if (e.passKeys && l.type === "element") {
			const a = i.get(l.tagName) || 0;
			o = l.tagName + "-" + a, i.set(l.tagName, a + 1)
		}
		const s = Iy(e, l, o);
		s !== void 0 && n.push(s)
	}
	return n
}

function cS(e, t) {
	const n = t[t.length - 1],
		r = {};
	let i;
	if ("properties" in n && n.properties) {
		let l;
		for (i in n.properties)
			if (i !== "children" && ff.call(n.properties, i)) {
				const o = fS(e, t, i, n.properties[i]);
				if (o) {
					const [s, a] = o;
					e.tableCellAlignToStyle && s === "align" && typeof a == "string" && lS.has(n.tagName) ? l = a : r[s] = a
				}
			} if (l) {
			const o = r.style || (r.style = {});
			o[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = l
		}
	}
	return r
}

function fS(e, t, n, r) {
	const i = M2(e.schema, n);
	if (!(r == null || typeof r == "number" && Number.isNaN(r))) {
		if (Array.isArray(r) && (r = i.commaSeparated ? N2(r) : _2(r)), i.property === "style") {
			let l = typeof r == "object" ? r : dS(e, t, String(r));
			return e.stylePropertyNameCase === "css" && (l = hS(l)), ["style", l]
		}
		return [e.elementAttributeNameCase === "react" && i.space ? z2[i.property] || i.property : i.attribute, r]
	}
}

function dS(e, t, n) {
	const r = {};
	try {
		K2(n, i)
	} catch (l) {
		if (!e.ignoreInvalidStyle) {
			const o = l,
				s = new Ke("Cannot parse `style` attribute", {
					ancestors: t,
					cause: o,
					source: "hast-util-to-jsx-runtime",
					ruleId: "style"
				});
			throw s.file = e.filePath || void 0, s.url = "https://github.com/syntax-tree/hast-util-to-jsx-runtime#cannot-parse-style-attribute", s
		}
	}
	return r;

	function i(l, o) {
		let s = l;
		s.slice(0, 2) !== "--" && (s.slice(0, 4) === "-ms-" && (s = "ms-" + s.slice(4)), s = s.replace(rS, mS)), r[s] = o
	}
}

function hS(e) {
	const t = {};
	let n;
	for (n in e) ff.call(e, n) && (t[pS(n)] = e[n]);
	return t
}

function pS(e) {
	let t = e.replace(nS, gS);
	return t.slice(0, 3) === "ms-" && (t = "-" + t), t
}

function mS(e, t) {
	return t.toUpperCase()
}

function gS(e) {
	return "-" + e.toLowerCase()
}
const wa = {
		action: ["form"],
		cite: ["blockquote", "del", "ins", "q"],
		data: ["object"],
		formAction: ["button", "input"],
		href: ["a", "area", "base", "link"],
		icon: ["menuitem"],
		itemId: null,
		manifest: ["html"],
		ping: ["a", "area"],
		poster: ["video"],
		src: ["audio", "embed", "iframe", "img", "input", "script", "source", "track", "video"]
	},
	yS = Wn(/\p{P}/u),
	Qe = Wn(/[A-Za-z]/),
	We = Wn(/[\dA-Za-z]/),
	xS = Wn(/[#-'*+\--9=?A-Z^-~]/);

function Ko(e) {
	return e !== null && (e < 32 || e === 127)
}
const $u = Wn(/\d/),
	wS = Wn(/[\dA-Fa-f]/),
	Ly = Wn(/[!-/:-@[-`{-~]/);

function $(e) {
	return e !== null && e < -2
}

function fe(e) {
	return e !== null && (e < 0 || e === 32)
}

function Z(e) {
	return e === -2 || e === -1 || e === 32
}

function js(e) {
	return Ly(e) || yS(e)
}
const hr = Wn(/\s/);

function Wn(e) {
	return t;

	function t(n) {
		return n !== null && n > -1 && e.test(String.fromCharCode(n))
	}
}
const vS = {
	'"': "quot",
	"&": "amp",
	"<": "lt",
	">": "gt"
};

function kS(e) {
	return e.replace(/["&<>]/g, t);

	function t(n) {
		return "&" + vS[n] + ";"
	}
}

function SS(e, t) {
	const n = kS(wr(e || ""));
	if (!t) return n;
	const r = n.indexOf(":"),
		i = n.indexOf("?"),
		l = n.indexOf("#"),
		o = n.indexOf("/");
	return r < 0 || o > -1 && r > o || i > -1 && r > i || l > -1 && r > l || t.test(n.slice(0, r)) ? n : ""
}

function wr(e) {
	const t = [];
	let n = -1,
		r = 0,
		i = 0;
	for (; ++n < e.length;) {
		const l = e.charCodeAt(n);
		let o = "";
		if (l === 37 && We(e.charCodeAt(n + 1)) && We(e.charCodeAt(n + 2))) i = 2;
		else if (l < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l)) || (o = String.fromCharCode(l));
		else if (l > 55295 && l < 57344) {
			const s = e.charCodeAt(n + 1);
			l < 56320 && s > 56319 && s < 57344 ? (o = String.fromCharCode(l, s), i = 1) : o = "�"
		} else o = String.fromCharCode(l);
		o && (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, o = ""), i && (n += i, i = 0)
	}
	return t.join("") + e.slice(r)
}
const ES = {};

function df(e, t) {
	const n = t || ES,
		r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0,
		i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
	return My(e, r, i)
}

function My(e, t, n) {
	if (CS(e)) {
		if ("value" in e) return e.type === "html" && !n ? "" : e.value;
		if (t && "alt" in e && e.alt) return e.alt;
		if ("children" in e) return yh(e.children, t, n)
	}
	return Array.isArray(e) ? yh(e, t, n) : ""
}

function yh(e, t, n) {
	const r = [];
	let i = -1;
	for (; ++i < e.length;) r[i] = My(e[i], t, n);
	return r.join("")
}

function CS(e) {
	return !!(e && typeof e == "object")
}
const xh = document.createElement("i");

function hf(e) {
	const t = "&" + e + ";";
	xh.innerHTML = t;
	const n = xh.textContent;
	return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n
}

function dt(e, t, n, r) {
	const i = e.length;
	let l = 0,
		o;
	if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) o = Array.from(r), o.unshift(t, n), e.splice(...o);
	else
		for (n && e.splice(t, n); l < r.length;) o = r.slice(l, l + 1e4), o.unshift(t, 0), e.splice(...o), l += 1e4, t += 1e4
}

function vt(e, t) {
	return e.length > 0 ? (dt(e, e.length, 0, t), e) : t
}
const wh = {}.hasOwnProperty;

function Dy(e) {
	const t = {};
	let n = -1;
	for (; ++n < e.length;) NS(t, e[n]);
	return t
}

function NS(e, t) {
	let n;
	for (n in t) {
		const i = (wh.call(e, n) ? e[n] : void 0) || (e[n] = {}),
			l = t[n];
		let o;
		if (l)
			for (o in l) {
				wh.call(i, o) || (i[o] = []);
				const s = l[o];
				bS(i[o], Array.isArray(s) ? s : s ? [s] : [])
			}
	}
}

function bS(e, t) {
	let n = -1;
	const r = [];
	for (; ++n < t.length;)(t[n].add === "after" ? e : r).push(t[n]);
	dt(e, 0, 0, r)
}

function Ry(e, t) {
	const n = Number.parseInt(e, t);
	return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) === 65535 || (n & 65535) === 65534 || n > 1114111 ? "�" : String.fromCharCode(n)
}

function Bt(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
}

function K(e, t, n, r) {
	const i = r ? r - 1 : Number.POSITIVE_INFINITY;
	let l = 0;
	return o;

	function o(a) {
		return Z(a) ? (e.enter(n), s(a)) : t(a)
	}

	function s(a) {
		return Z(a) && l++ < i ? (e.consume(a), s) : (e.exit(n), t(a))
	}
}
const TS = {
	tokenize: OS
};

function OS(e) {
	const t = e.attempt(this.parser.constructs.contentInitial, r, i);
	let n;
	return t;

	function r(s) {
		if (s === null) {
			e.consume(s);
			return
		}
		return e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), K(e, t, "linePrefix")
	}

	function i(s) {
		return e.enter("paragraph"), l(s)
	}

	function l(s) {
		const a = e.enter("chunkText", {
			contentType: "text",
			previous: n
		});
		return n && (n.next = a), n = a, o(s)
	}

	function o(s) {
		if (s === null) {
			e.exit("chunkText"), e.exit("paragraph"), e.consume(s);
			return
		}
		return $(s) ? (e.consume(s), e.exit("chunkText"), l) : (e.consume(s), o)
	}
}
const AS = {
		tokenize: jS
	},
	vh = {
		tokenize: PS
	};

function jS(e) {
	const t = this,
		n = [];
	let r = 0,
		i, l, o;
	return s;

	function s(w) {
		if (r < n.length) {
			const N = n[r];
			return t.containerState = N[1], e.attempt(N[0].continuation, a, u)(w)
		}
		return u(w)
	}

	function a(w) {
		if (r++, t.containerState._closeFlow) {
			t.containerState._closeFlow = void 0, i && y();
			const N = t.events.length;
			let b = N,
				E;
			for (; b--;)
				if (t.events[b][0] === "exit" && t.events[b][1].type === "chunkFlow") {
					E = t.events[b][1].end;
					break
				} m(r);
			let j = N;
			for (; j < t.events.length;) t.events[j][1].end = Object.assign({}, E), j++;
			return dt(t.events, b + 1, 0, t.events.slice(N)), t.events.length = j, u(w)
		}
		return s(w)
	}

	function u(w) {
		if (r === n.length) {
			if (!i) return h(w);
			if (i.currentConstruct && i.currentConstruct.concrete) return p(w);
			t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack)
		}
		return t.containerState = {}, e.check(vh, c, f)(w)
	}

	function c(w) {
		return i && y(), m(r), h(w)
	}

	function f(w) {
		return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, p(w)
	}

	function h(w) {
		return t.containerState = {}, e.attempt(vh, d, p)(w)
	}

	function d(w) {
		return r++, n.push([t.currentConstruct, t.containerState]), h(w)
	}

	function p(w) {
		if (w === null) {
			i && y(), m(0), e.consume(w);
			return
		}
		return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
			contentType: "flow",
			previous: l,
			_tokenizer: i
		}), x(w)
	}

	function x(w) {
		if (w === null) {
			S(e.exit("chunkFlow"), !0), m(0), e.consume(w);
			return
		}
		return $(w) ? (e.consume(w), S(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(w), x)
	}

	function S(w, N) {
		const b = t.sliceStream(w);
		if (N && b.push(null), w.previous = l, l && (l.next = w), l = w, i.defineSkip(w.start), i.write(b), t.parser.lazy[w.start.line]) {
			let E = i.events.length;
			for (; E--;)
				if (i.events[E][1].start.offset < o && (!i.events[E][1].end || i.events[E][1].end.offset > o)) return;
			const j = t.events.length;
			let L = j,
				B, C;
			for (; L--;)
				if (t.events[L][0] === "exit" && t.events[L][1].type === "chunkFlow") {
					if (B) {
						C = t.events[L][1].end;
						break
					}
					B = !0
				} for (m(r), E = j; E < t.events.length;) t.events[E][1].end = Object.assign({}, C), E++;
			dt(t.events, L + 1, 0, t.events.slice(j)), t.events.length = E
		}
	}

	function m(w) {
		let N = n.length;
		for (; N-- > w;) {
			const b = n[N];
			t.containerState = b[1], b[0].exit.call(t, e)
		}
		n.length = w
	}

	function y() {
		i.write([null]), l = void 0, i = void 0, t.containerState._closeFlow = void 0
	}
}

function PS(e, t, n) {
	return K(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
}

function es(e) {
	if (e === null || fe(e) || hr(e)) return 1;
	if (js(e)) return 2
}

function Ps(e, t, n) {
	const r = [];
	let i = -1;
	for (; ++i < e.length;) {
		const l = e[i].resolveAll;
		l && !r.includes(l) && (t = l(t, n), r.push(l))
	}
	return t
}
const Hu = {
	name: "attention",
	tokenize: LS,
	resolveAll: IS
};

function IS(e, t) {
	let n = -1,
		r, i, l, o, s, a, u, c;
	for (; ++n < e.length;)
		if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
			for (r = n; r--;)
				if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
					if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
					a = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
					const f = Object.assign({}, e[r][1].end),
						h = Object.assign({}, e[n][1].start);
					kh(f, -a), kh(h, a), o = {
						type: a > 1 ? "strongSequence" : "emphasisSequence",
						start: f,
						end: Object.assign({}, e[r][1].end)
					}, s = {
						type: a > 1 ? "strongSequence" : "emphasisSequence",
						start: Object.assign({}, e[n][1].start),
						end: h
					}, l = {
						type: a > 1 ? "strongText" : "emphasisText",
						start: Object.assign({}, e[r][1].end),
						end: Object.assign({}, e[n][1].start)
					}, i = {
						type: a > 1 ? "strong" : "emphasis",
						start: Object.assign({}, o.start),
						end: Object.assign({}, s.end)
					}, e[r][1].end = Object.assign({}, o.start), e[n][1].start = Object.assign({}, s.end), u = [], e[r][1].end.offset - e[r][1].start.offset && (u = vt(u, [
						["enter", e[r][1], t],
						["exit", e[r][1], t]
					])), u = vt(u, [
						["enter", i, t],
						["enter", o, t],
						["exit", o, t],
						["enter", l, t]
					]), u = vt(u, Ps(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), u = vt(u, [
						["exit", l, t],
						["enter", s, t],
						["exit", s, t],
						["exit", i, t]
					]), e[n][1].end.offset - e[n][1].start.offset ? (c = 2, u = vt(u, [
						["enter", e[n][1], t],
						["exit", e[n][1], t]
					])) : c = 0, dt(e, r - 1, n - r + 3, u), n = r + u.length - c - 2;
					break
				}
		} for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
	return e
}

function LS(e, t) {
	const n = this.parser.constructs.attentionMarkers.null,
		r = this.previous,
		i = es(r);
	let l;
	return o;

	function o(a) {
		return l = a, e.enter("attentionSequence"), s(a)
	}

	function s(a) {
		if (a === l) return e.consume(a), s;
		const u = e.exit("attentionSequence"),
			c = es(a),
			f = !c || c === 2 && i || n.includes(a),
			h = !i || i === 2 && c || n.includes(r);
		return u._open = !!(l === 42 ? f : f && (i || !h)), u._close = !!(l === 42 ? h : h && (c || !f)), t(a)
	}
}

function kh(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t
}
const MS = {
	name: "autolink",
	tokenize: DS
};

function DS(e, t, n) {
	let r = 0;
	return i;

	function i(d) {
		return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), l
	}

	function l(d) {
		return Qe(d) ? (e.consume(d), o) : u(d)
	}

	function o(d) {
		return d === 43 || d === 45 || d === 46 || We(d) ? (r = 1, s(d)) : u(d)
	}

	function s(d) {
		return d === 58 ? (e.consume(d), r = 0, a) : (d === 43 || d === 45 || d === 46 || We(d)) && r++ < 32 ? (e.consume(d), s) : (r = 0, u(d))
	}

	function a(d) {
		return d === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.exit("autolink"), t) : d === null || d === 32 || d === 60 || Ko(d) ? n(d) : (e.consume(d), a)
	}

	function u(d) {
		return d === 64 ? (e.consume(d), c) : xS(d) ? (e.consume(d), u) : n(d)
	}

	function c(d) {
		return We(d) ? f(d) : n(d)
	}

	function f(d) {
		return d === 46 ? (e.consume(d), r = 0, c) : d === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.exit("autolink"), t) : h(d)
	}

	function h(d) {
		if ((d === 45 || We(d)) && r++ < 63) {
			const p = d === 45 ? h : f;
			return e.consume(d), p
		}
		return n(d)
	}
}
const kl = {
	tokenize: RS,
	partial: !0
};

function RS(e, t, n) {
	return r;

	function r(l) {
		return Z(l) ? K(e, i, "linePrefix")(l) : i(l)
	}

	function i(l) {
		return l === null || $(l) ? t(l) : n(l)
	}
}
const zy = {
	name: "blockQuote",
	tokenize: zS,
	continuation: {
		tokenize: FS
	},
	exit: _S
};

function zS(e, t, n) {
	const r = this;
	return i;

	function i(o) {
		if (o === 62) {
			const s = r.containerState;
			return s.open || (e.enter("blockQuote", {
				_container: !0
			}), s.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(o), e.exit("blockQuoteMarker"), l
		}
		return n(o)
	}

	function l(o) {
		return Z(o) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(o), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(o))
	}
}

function FS(e, t, n) {
	const r = this;
	return i;

	function i(o) {
		return Z(o) ? K(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o) : l(o)
	}

	function l(o) {
		return e.attempt(zy, t, n)(o)
	}
}

function _S(e) {
	e.exit("blockQuote")
}
const Fy = {
	name: "characterEscape",
	tokenize: BS
};

function BS(e, t, n) {
	return r;

	function r(l) {
		return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(l), e.exit("escapeMarker"), i
	}

	function i(l) {
		return Ly(l) ? (e.enter("characterEscapeValue"), e.consume(l), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(l)
	}
}
const _y = {
	name: "characterReference",
	tokenize: US
};

function US(e, t, n) {
	const r = this;
	let i = 0,
		l, o;
	return s;

	function s(f) {
		return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), a
	}

	function a(f) {
		return f === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(f), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), l = 31, o = We, c(f))
	}

	function u(f) {
		return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), l = 6, o = wS, c) : (e.enter("characterReferenceValue"), l = 7, o = $u, c(f))
	}

	function c(f) {
		if (f === 59 && i) {
			const h = e.exit("characterReferenceValue");
			return o === We && !hf(r.sliceSerialize(h)) ? n(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), t)
		}
		return o(f) && i++ < l ? (e.consume(f), c) : n(f)
	}
}
const Sh = {
		tokenize: $S,
		partial: !0
	},
	Eh = {
		name: "codeFenced",
		tokenize: VS,
		concrete: !0
	};

function VS(e, t, n) {
	const r = this,
		i = {
			tokenize: b,
			partial: !0
		};
	let l = 0,
		o = 0,
		s;
	return a;

	function a(E) {
		return u(E)
	}

	function u(E) {
		const j = r.events[r.events.length - 1];
		return l = j && j[1].type === "linePrefix" ? j[2].sliceSerialize(j[1], !0).length : 0, s = E, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), c(E)
	}

	function c(E) {
		return E === s ? (o++, e.consume(E), c) : o < 3 ? n(E) : (e.exit("codeFencedFenceSequence"), Z(E) ? K(e, f, "whitespace")(E) : f(E))
	}

	function f(E) {
		return E === null || $(E) ? (e.exit("codeFencedFence"), r.interrupt ? t(E) : e.check(Sh, x, N)(E)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
			contentType: "string"
		}), h(E))
	}

	function h(E) {
		return E === null || $(E) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), f(E)) : Z(E) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), K(e, d, "whitespace")(E)) : E === 96 && E === s ? n(E) : (e.consume(E), h)
	}

	function d(E) {
		return E === null || $(E) ? f(E) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
			contentType: "string"
		}), p(E))
	}

	function p(E) {
		return E === null || $(E) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), f(E)) : E === 96 && E === s ? n(E) : (e.consume(E), p)
	}

	function x(E) {
		return e.attempt(i, N, S)(E)
	}

	function S(E) {
		return e.enter("lineEnding"), e.consume(E), e.exit("lineEnding"), m
	}

	function m(E) {
		return l > 0 && Z(E) ? K(e, y, "linePrefix", l + 1)(E) : y(E)
	}

	function y(E) {
		return E === null || $(E) ? e.check(Sh, x, N)(E) : (e.enter("codeFlowValue"), w(E))
	}

	function w(E) {
		return E === null || $(E) ? (e.exit("codeFlowValue"), y(E)) : (e.consume(E), w)
	}

	function N(E) {
		return e.exit("codeFenced"), t(E)
	}

	function b(E, j, L) {
		let B = 0;
		return C;

		function C(q) {
			return E.enter("lineEnding"), E.consume(q), E.exit("lineEnding"), z
		}

		function z(q) {
			return E.enter("codeFencedFence"), Z(q) ? K(E, F, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(q) : F(q)
		}

		function F(q) {
			return q === s ? (E.enter("codeFencedFenceSequence"), G(q)) : L(q)
		}

		function G(q) {
			return q === s ? (B++, E.consume(q), G) : B >= o ? (E.exit("codeFencedFenceSequence"), Z(q) ? K(E, se, "whitespace")(q) : se(q)) : L(q)
		}

		function se(q) {
			return q === null || $(q) ? (E.exit("codeFencedFence"), j(q)) : L(q)
		}
	}
}

function $S(e, t, n) {
	const r = this;
	return i;

	function i(o) {
		return o === null ? n(o) : (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l)
	}

	function l(o) {
		return r.parser.lazy[r.now().line] ? n(o) : t(o)
	}
}
const va = {
		name: "codeIndented",
		tokenize: WS
	},
	HS = {
		tokenize: qS,
		partial: !0
	};

function WS(e, t, n) {
	const r = this;
	return i;

	function i(u) {
		return e.enter("codeIndented"), K(e, l, "linePrefix", 4 + 1)(u)
	}

	function l(u) {
		const c = r.events[r.events.length - 1];
		return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? o(u) : n(u)
	}

	function o(u) {
		return u === null ? a(u) : $(u) ? e.attempt(HS, o, a)(u) : (e.enter("codeFlowValue"), s(u))
	}

	function s(u) {
		return u === null || $(u) ? (e.exit("codeFlowValue"), o(u)) : (e.consume(u), s)
	}

	function a(u) {
		return e.exit("codeIndented"), t(u)
	}
}

function qS(e, t, n) {
	const r = this;
	return i;

	function i(o) {
		return r.parser.lazy[r.now().line] ? n(o) : $(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), i) : K(e, l, "linePrefix", 4 + 1)(o)
	}

	function l(o) {
		const s = r.events[r.events.length - 1];
		return s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? t(o) : $(o) ? i(o) : n(o)
	}
}
const ZS = {
	name: "codeText",
	tokenize: YS,
	resolve: QS,
	previous: GS
};

function QS(e) {
	let t = e.length - 4,
		n = 3,
		r, i;
	if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
		for (r = n; ++r < t;)
			if (e[r][1].type === "codeTextData") {
				e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
				break
			}
	}
	for (r = n - 1, t++; ++r <= t;) i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
	return e
}

function GS(e) {
	return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape"
}

function YS(e, t, n) {
	let r = 0,
		i, l;
	return o;

	function o(f) {
		return e.enter("codeText"), e.enter("codeTextSequence"), s(f)
	}

	function s(f) {
		return f === 96 ? (e.consume(f), r++, s) : (e.exit("codeTextSequence"), a(f))
	}

	function a(f) {
		return f === null ? n(f) : f === 32 ? (e.enter("space"), e.consume(f), e.exit("space"), a) : f === 96 ? (l = e.enter("codeTextSequence"), i = 0, c(f)) : $(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), a) : (e.enter("codeTextData"), u(f))
	}

	function u(f) {
		return f === null || f === 32 || f === 96 || $(f) ? (e.exit("codeTextData"), a(f)) : (e.consume(f), u)
	}

	function c(f) {
		return f === 96 ? (e.consume(f), i++, c) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(f)) : (l.type = "codeTextData", u(f))
	}
}

function By(e) {
	const t = {};
	let n = -1,
		r, i, l, o, s, a, u;
	for (; ++n < e.length;) {
		for (; n in t;) n = t[n];
		if (r = e[n], n && r[1].type === "chunkFlow" && e[n - 1][1].type === "listItemPrefix" && (a = r[1]._tokenizer.events, l = 0, l < a.length && a[l][1].type === "lineEndingBlank" && (l += 2), l < a.length && a[l][1].type === "content"))
			for (; ++l < a.length && a[l][1].type !== "content";) a[l][1].type === "chunkText" && (a[l][1]._isInFirstContentOfListItem = !0, l++);
		if (r[0] === "enter") r[1].contentType && (Object.assign(t, XS(e, n)), n = t[n], u = !0);
		else if (r[1]._container) {
			for (l = n, i = void 0; l-- && (o = e[l], o[1].type === "lineEnding" || o[1].type === "lineEndingBlank");) o[0] === "enter" && (i && (e[i][1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = l);
			i && (r[1].end = Object.assign({}, e[i][1].start), s = e.slice(i, n), s.unshift(r), dt(e, i, n - i + 1, s))
		}
	}
	return !u
}

function XS(e, t) {
	const n = e[t][1],
		r = e[t][2];
	let i = t - 1;
	const l = [],
		o = n._tokenizer || r.parser[n.contentType](n.start),
		s = o.events,
		a = [],
		u = {};
	let c, f, h = -1,
		d = n,
		p = 0,
		x = 0;
	const S = [x];
	for (; d;) {
		for (; e[++i][1] !== d;);
		l.push(i), d._tokenizer || (c = r.sliceStream(d), d.next || c.push(null), f && o.defineSkip(d.start), d._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(c), d._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), f = d, d = d.next
	}
	for (d = n; ++h < s.length;) s[h][0] === "exit" && s[h - 1][0] === "enter" && s[h][1].type === s[h - 1][1].type && s[h][1].start.line !== s[h][1].end.line && (x = h + 1, S.push(x), d._tokenizer = void 0, d.previous = void 0, d = d.next);
	for (o.events = [], d ? (d._tokenizer = void 0, d.previous = void 0) : S.pop(), h = S.length; h--;) {
		const m = s.slice(S[h], S[h + 1]),
			y = l.pop();
		a.unshift([y, y + m.length - 1]), dt(e, y, 2, m)
	}
	for (h = -1; ++h < a.length;) u[p + a[h][0]] = p + a[h][1], p += a[h][1] - a[h][0] - 1;
	return u
}
const JS = {
		tokenize: tE,
		resolve: eE
	},
	KS = {
		tokenize: nE,
		partial: !0
	};

function eE(e) {
	return By(e), e
}

function tE(e, t) {
	let n;
	return r;

	function r(s) {
		return e.enter("content"), n = e.enter("chunkContent", {
			contentType: "content"
		}), i(s)
	}

	function i(s) {
		return s === null ? l(s) : $(s) ? e.check(KS, o, l)(s) : (e.consume(s), i)
	}

	function l(s) {
		return e.exit("chunkContent"), e.exit("content"), t(s)
	}

	function o(s) {
		return e.consume(s), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
			contentType: "content",
			previous: n
		}), n = n.next, i
	}
}

function nE(e, t, n) {
	const r = this;
	return i;

	function i(o) {
		return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), K(e, l, "linePrefix")
	}

	function l(o) {
		if (o === null || $(o)) return n(o);
		const s = r.events[r.events.length - 1];
		return !r.parser.constructs.disable.null.includes("codeIndented") && s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? t(o) : e.interrupt(r.parser.constructs.flow, n, t)(o)
	}
}

function Uy(e, t, n, r, i, l, o, s, a) {
	const u = a || Number.POSITIVE_INFINITY;
	let c = 0;
	return f;

	function f(m) {
		return m === 60 ? (e.enter(r), e.enter(i), e.enter(l), e.consume(m), e.exit(l), h) : m === null || m === 32 || m === 41 || Ko(m) ? n(m) : (e.enter(r), e.enter(o), e.enter(s), e.enter("chunkString", {
			contentType: "string"
		}), x(m))
	}

	function h(m) {
		return m === 62 ? (e.enter(l), e.consume(m), e.exit(l), e.exit(i), e.exit(r), t) : (e.enter(s), e.enter("chunkString", {
			contentType: "string"
		}), d(m))
	}

	function d(m) {
		return m === 62 ? (e.exit("chunkString"), e.exit(s), h(m)) : m === null || m === 60 || $(m) ? n(m) : (e.consume(m), m === 92 ? p : d)
	}

	function p(m) {
		return m === 60 || m === 62 || m === 92 ? (e.consume(m), d) : d(m)
	}

	function x(m) {
		return !c && (m === null || m === 41 || fe(m)) ? (e.exit("chunkString"), e.exit(s), e.exit(o), e.exit(r), t(m)) : c < u && m === 40 ? (e.consume(m), c++, x) : m === 41 ? (e.consume(m), c--, x) : m === null || m === 32 || m === 40 || Ko(m) ? n(m) : (e.consume(m), m === 92 ? S : x)
	}

	function S(m) {
		return m === 40 || m === 41 || m === 92 ? (e.consume(m), x) : x(m)
	}
}

function Vy(e, t, n, r, i, l) {
	const o = this;
	let s = 0,
		a;
	return u;

	function u(d) {
		return e.enter(r), e.enter(i), e.consume(d), e.exit(i), e.enter(l), c
	}

	function c(d) {
		return s > 999 || d === null || d === 91 || d === 93 && !a || d === 94 && !s && "_hiddenFootnoteSupport" in o.parser.constructs ? n(d) : d === 93 ? (e.exit(l), e.enter(i), e.consume(d), e.exit(i), e.exit(r), t) : $(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), c) : (e.enter("chunkString", {
			contentType: "string"
		}), f(d))
	}

	function f(d) {
		return d === null || d === 91 || d === 93 || $(d) || s++ > 999 ? (e.exit("chunkString"), c(d)) : (e.consume(d), a || (a = !Z(d)), d === 92 ? h : f)
	}

	function h(d) {
		return d === 91 || d === 92 || d === 93 ? (e.consume(d), s++, f) : f(d)
	}
}

function $y(e, t, n, r, i, l) {
	let o;
	return s;

	function s(h) {
		return h === 34 || h === 39 || h === 40 ? (e.enter(r), e.enter(i), e.consume(h), e.exit(i), o = h === 40 ? 41 : h, a) : n(h)
	}

	function a(h) {
		return h === o ? (e.enter(i), e.consume(h), e.exit(i), e.exit(r), t) : (e.enter(l), u(h))
	}

	function u(h) {
		return h === o ? (e.exit(l), a(o)) : h === null ? n(h) : $(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), K(e, u, "linePrefix")) : (e.enter("chunkString", {
			contentType: "string"
		}), c(h))
	}

	function c(h) {
		return h === o || h === null || $(h) ? (e.exit("chunkString"), u(h)) : (e.consume(h), h === 92 ? f : c)
	}

	function f(h) {
		return h === o || h === 92 ? (e.consume(h), c) : c(h)
	}
}

function $i(e, t) {
	let n;
	return r;

	function r(i) {
		return $(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : Z(i) ? K(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i)
	}
}
const rE = {
		name: "definition",
		tokenize: lE
	},
	iE = {
		tokenize: oE,
		partial: !0
	};

function lE(e, t, n) {
	const r = this;
	let i;
	return l;

	function l(d) {
		return e.enter("definition"), o(d)
	}

	function o(d) {
		return Vy.call(r, e, s, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(d)
	}

	function s(d) {
		return i = Bt(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), d === 58 ? (e.enter("definitionMarker"), e.consume(d), e.exit("definitionMarker"), a) : n(d)
	}

	function a(d) {
		return fe(d) ? $i(e, u)(d) : u(d)
	}

	function u(d) {
		return Uy(e, c, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(d)
	}

	function c(d) {
		return e.attempt(iE, f, f)(d)
	}

	function f(d) {
		return Z(d) ? K(e, h, "whitespace")(d) : h(d)
	}

	function h(d) {
		return d === null || $(d) ? (e.exit("definition"), r.parser.defined.push(i), t(d)) : n(d)
	}
}

function oE(e, t, n) {
	return r;

	function r(s) {
		return fe(s) ? $i(e, i)(s) : n(s)
	}

	function i(s) {
		return $y(e, l, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(s)
	}

	function l(s) {
		return Z(s) ? K(e, o, "whitespace")(s) : o(s)
	}

	function o(s) {
		return s === null || $(s) ? t(s) : n(s)
	}
}
const sE = {
	name: "hardBreakEscape",
	tokenize: aE
};

function aE(e, t, n) {
	return r;

	function r(l) {
		return e.enter("hardBreakEscape"), e.consume(l), i
	}

	function i(l) {
		return $(l) ? (e.exit("hardBreakEscape"), t(l)) : n(l)
	}
}
const uE = {
	name: "headingAtx",
	tokenize: fE,
	resolve: cE
};

function cE(e, t) {
	let n = e.length - 2,
		r = 3,
		i, l;
	return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
		type: "atxHeadingText",
		start: e[r][1].start,
		end: e[n][1].end
	}, l = {
		type: "chunkText",
		start: e[r][1].start,
		end: e[n][1].end,
		contentType: "text"
	}, dt(e, r, n - r + 1, [
		["enter", i, t],
		["enter", l, t],
		["exit", l, t],
		["exit", i, t]
	])), e
}

function fE(e, t, n) {
	let r = 0;
	return i;

	function i(c) {
		return e.enter("atxHeading"), l(c)
	}

	function l(c) {
		return e.enter("atxHeadingSequence"), o(c)
	}

	function o(c) {
		return c === 35 && r++ < 6 ? (e.consume(c), o) : c === null || fe(c) ? (e.exit("atxHeadingSequence"), s(c)) : n(c)
	}

	function s(c) {
		return c === 35 ? (e.enter("atxHeadingSequence"), a(c)) : c === null || $(c) ? (e.exit("atxHeading"), t(c)) : Z(c) ? K(e, s, "whitespace")(c) : (e.enter("atxHeadingText"), u(c))
	}

	function a(c) {
		return c === 35 ? (e.consume(c), a) : (e.exit("atxHeadingSequence"), s(c))
	}

	function u(c) {
		return c === null || c === 35 || fe(c) ? (e.exit("atxHeadingText"), s(c)) : (e.consume(c), u)
	}
}
const dE = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"],
	Ch = ["pre", "script", "style", "textarea"],
	hE = {
		name: "htmlFlow",
		tokenize: yE,
		resolveTo: gE,
		concrete: !0
	},
	pE = {
		tokenize: wE,
		partial: !0
	},
	mE = {
		tokenize: xE,
		partial: !0
	};

function gE(e) {
	let t = e.length;
	for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"););
	return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e
}

function yE(e, t, n) {
	const r = this;
	let i, l, o, s, a;
	return u;

	function u(k) {
		return c(k)
	}

	function c(k) {
		return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(k), f
	}

	function f(k) {
		return k === 33 ? (e.consume(k), h) : k === 47 ? (e.consume(k), l = !0, x) : k === 63 ? (e.consume(k), i = 3, r.interrupt ? t : v) : Qe(k) ? (e.consume(k), o = String.fromCharCode(k), S) : n(k)
	}

	function h(k) {
		return k === 45 ? (e.consume(k), i = 2, d) : k === 91 ? (e.consume(k), i = 5, s = 0, p) : Qe(k) ? (e.consume(k), i = 4, r.interrupt ? t : v) : n(k)
	}

	function d(k) {
		return k === 45 ? (e.consume(k), r.interrupt ? t : v) : n(k)
	}

	function p(k) {
		const be = "CDATA[";
		return k === be.charCodeAt(s++) ? (e.consume(k), s === be.length ? r.interrupt ? t : F : p) : n(k)
	}

	function x(k) {
		return Qe(k) ? (e.consume(k), o = String.fromCharCode(k), S) : n(k)
	}

	function S(k) {
		if (k === null || k === 47 || k === 62 || fe(k)) {
			const be = k === 47,
				ot = o.toLowerCase();
			return !be && !l && Ch.includes(ot) ? (i = 1, r.interrupt ? t(k) : F(k)) : dE.includes(o.toLowerCase()) ? (i = 6, be ? (e.consume(k), m) : r.interrupt ? t(k) : F(k)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(k) : l ? y(k) : w(k))
		}
		return k === 45 || We(k) ? (e.consume(k), o += String.fromCharCode(k), S) : n(k)
	}

	function m(k) {
		return k === 62 ? (e.consume(k), r.interrupt ? t : F) : n(k)
	}

	function y(k) {
		return Z(k) ? (e.consume(k), y) : C(k)
	}

	function w(k) {
		return k === 47 ? (e.consume(k), C) : k === 58 || k === 95 || Qe(k) ? (e.consume(k), N) : Z(k) ? (e.consume(k), w) : C(k)
	}

	function N(k) {
		return k === 45 || k === 46 || k === 58 || k === 95 || We(k) ? (e.consume(k), N) : b(k)
	}

	function b(k) {
		return k === 61 ? (e.consume(k), E) : Z(k) ? (e.consume(k), b) : w(k)
	}

	function E(k) {
		return k === null || k === 60 || k === 61 || k === 62 || k === 96 ? n(k) : k === 34 || k === 39 ? (e.consume(k), a = k, j) : Z(k) ? (e.consume(k), E) : L(k)
	}

	function j(k) {
		return k === a ? (e.consume(k), a = null, B) : k === null || $(k) ? n(k) : (e.consume(k), j)
	}

	function L(k) {
		return k === null || k === 34 || k === 39 || k === 47 || k === 60 || k === 61 || k === 62 || k === 96 || fe(k) ? b(k) : (e.consume(k), L)
	}

	function B(k) {
		return k === 47 || k === 62 || Z(k) ? w(k) : n(k)
	}

	function C(k) {
		return k === 62 ? (e.consume(k), z) : n(k)
	}

	function z(k) {
		return k === null || $(k) ? F(k) : Z(k) ? (e.consume(k), z) : n(k)
	}

	function F(k) {
		return k === 45 && i === 2 ? (e.consume(k), Se) : k === 60 && i === 1 ? (e.consume(k), xe) : k === 62 && i === 4 ? (e.consume(k), Y) : k === 63 && i === 3 ? (e.consume(k), v) : k === 93 && i === 5 ? (e.consume(k), U) : $(k) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(pE, ie, G)(k)) : k === null || $(k) ? (e.exit("htmlFlowData"), G(k)) : (e.consume(k), F)
	}

	function G(k) {
		return e.check(mE, se, ie)(k)
	}

	function se(k) {
		return e.enter("lineEnding"), e.consume(k), e.exit("lineEnding"), q
	}

	function q(k) {
		return k === null || $(k) ? G(k) : (e.enter("htmlFlowData"), F(k))
	}

	function Se(k) {
		return k === 45 ? (e.consume(k), v) : F(k)
	}

	function xe(k) {
		return k === 47 ? (e.consume(k), o = "", M) : F(k)
	}

	function M(k) {
		if (k === 62) {
			const be = o.toLowerCase();
			return Ch.includes(be) ? (e.consume(k), Y) : F(k)
		}
		return Qe(k) && o.length < 8 ? (e.consume(k), o += String.fromCharCode(k), M) : F(k)
	}

	function U(k) {
		return k === 93 ? (e.consume(k), v) : F(k)
	}

	function v(k) {
		return k === 62 ? (e.consume(k), Y) : k === 45 && i === 2 ? (e.consume(k), v) : F(k)
	}

	function Y(k) {
		return k === null || $(k) ? (e.exit("htmlFlowData"), ie(k)) : (e.consume(k), Y)
	}

	function ie(k) {
		return e.exit("htmlFlow"), t(k)
	}
}

function xE(e, t, n) {
	const r = this;
	return i;

	function i(o) {
		return $(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l) : n(o)
	}

	function l(o) {
		return r.parser.lazy[r.now().line] ? n(o) : t(o)
	}
}

function wE(e, t, n) {
	return r;

	function r(i) {
		return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(kl, t, n)
	}
}
const vE = {
	name: "htmlText",
	tokenize: kE
};

function kE(e, t, n) {
	const r = this;
	let i, l, o;
	return s;

	function s(v) {
		return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(v), a
	}

	function a(v) {
		return v === 33 ? (e.consume(v), u) : v === 47 ? (e.consume(v), b) : v === 63 ? (e.consume(v), w) : Qe(v) ? (e.consume(v), L) : n(v)
	}

	function u(v) {
		return v === 45 ? (e.consume(v), c) : v === 91 ? (e.consume(v), l = 0, p) : Qe(v) ? (e.consume(v), y) : n(v)
	}

	function c(v) {
		return v === 45 ? (e.consume(v), d) : n(v)
	}

	function f(v) {
		return v === null ? n(v) : v === 45 ? (e.consume(v), h) : $(v) ? (o = f, xe(v)) : (e.consume(v), f)
	}

	function h(v) {
		return v === 45 ? (e.consume(v), d) : f(v)
	}

	function d(v) {
		return v === 62 ? Se(v) : v === 45 ? h(v) : f(v)
	}

	function p(v) {
		const Y = "CDATA[";
		return v === Y.charCodeAt(l++) ? (e.consume(v), l === Y.length ? x : p) : n(v)
	}

	function x(v) {
		return v === null ? n(v) : v === 93 ? (e.consume(v), S) : $(v) ? (o = x, xe(v)) : (e.consume(v), x)
	}

	function S(v) {
		return v === 93 ? (e.consume(v), m) : x(v)
	}

	function m(v) {
		return v === 62 ? Se(v) : v === 93 ? (e.consume(v), m) : x(v)
	}

	function y(v) {
		return v === null || v === 62 ? Se(v) : $(v) ? (o = y, xe(v)) : (e.consume(v), y)
	}

	function w(v) {
		return v === null ? n(v) : v === 63 ? (e.consume(v), N) : $(v) ? (o = w, xe(v)) : (e.consume(v), w)
	}

	function N(v) {
		return v === 62 ? Se(v) : w(v)
	}

	function b(v) {
		return Qe(v) ? (e.consume(v), E) : n(v)
	}

	function E(v) {
		return v === 45 || We(v) ? (e.consume(v), E) : j(v)
	}

	function j(v) {
		return $(v) ? (o = j, xe(v)) : Z(v) ? (e.consume(v), j) : Se(v)
	}

	function L(v) {
		return v === 45 || We(v) ? (e.consume(v), L) : v === 47 || v === 62 || fe(v) ? B(v) : n(v)
	}

	function B(v) {
		return v === 47 ? (e.consume(v), Se) : v === 58 || v === 95 || Qe(v) ? (e.consume(v), C) : $(v) ? (o = B, xe(v)) : Z(v) ? (e.consume(v), B) : Se(v)
	}

	function C(v) {
		return v === 45 || v === 46 || v === 58 || v === 95 || We(v) ? (e.consume(v), C) : z(v)
	}

	function z(v) {
		return v === 61 ? (e.consume(v), F) : $(v) ? (o = z, xe(v)) : Z(v) ? (e.consume(v), z) : B(v)
	}

	function F(v) {
		return v === null || v === 60 || v === 61 || v === 62 || v === 96 ? n(v) : v === 34 || v === 39 ? (e.consume(v), i = v, G) : $(v) ? (o = F, xe(v)) : Z(v) ? (e.consume(v), F) : (e.consume(v), se)
	}

	function G(v) {
		return v === i ? (e.consume(v), i = void 0, q) : v === null ? n(v) : $(v) ? (o = G, xe(v)) : (e.consume(v), G)
	}

	function se(v) {
		return v === null || v === 34 || v === 39 || v === 60 || v === 61 || v === 96 ? n(v) : v === 47 || v === 62 || fe(v) ? B(v) : (e.consume(v), se)
	}

	function q(v) {
		return v === 47 || v === 62 || fe(v) ? B(v) : n(v)
	}

	function Se(v) {
		return v === 62 ? (e.consume(v), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(v)
	}

	function xe(v) {
		return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(v), e.exit("lineEnding"), M
	}

	function M(v) {
		return Z(v) ? K(e, U, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(v) : U(v)
	}

	function U(v) {
		return e.enter("htmlTextData"), o(v)
	}
}
const pf = {
		name: "labelEnd",
		tokenize: TE,
		resolveTo: bE,
		resolveAll: NE
	},
	SE = {
		tokenize: OE
	},
	EE = {
		tokenize: AE
	},
	CE = {
		tokenize: jE
	};

function NE(e) {
	let t = -1;
	for (; ++t < e.length;) {
		const n = e[t][1];
		(n.type === "labelImage" || n.type === "labelLink" || n.type === "labelEnd") && (e.splice(t + 1, n.type === "labelImage" ? 4 : 2), n.type = "data", t++)
	}
	return e
}

function bE(e, t) {
	let n = e.length,
		r = 0,
		i, l, o, s;
	for (; n--;)
		if (i = e[n][1], l) {
			if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
			e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0)
		} else if (o) {
		if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (l = n, i.type !== "labelLink")) {
			r = 2;
			break
		}
	} else i.type === "labelEnd" && (o = n);
	const a = {
			type: e[l][1].type === "labelLink" ? "link" : "image",
			start: Object.assign({}, e[l][1].start),
			end: Object.assign({}, e[e.length - 1][1].end)
		},
		u = {
			type: "label",
			start: Object.assign({}, e[l][1].start),
			end: Object.assign({}, e[o][1].end)
		},
		c = {
			type: "labelText",
			start: Object.assign({}, e[l + r + 2][1].end),
			end: Object.assign({}, e[o - 2][1].start)
		};
	return s = [
		["enter", a, t],
		["enter", u, t]
	], s = vt(s, e.slice(l + 1, l + r + 3)), s = vt(s, [
		["enter", c, t]
	]), s = vt(s, Ps(t.parser.constructs.insideSpan.null, e.slice(l + r + 4, o - 3), t)), s = vt(s, [
		["exit", c, t], e[o - 2], e[o - 1],
		["exit", u, t]
	]), s = vt(s, e.slice(o + 1)), s = vt(s, [
		["exit", a, t]
	]), dt(e, l, e.length, s), e
}

function TE(e, t, n) {
	const r = this;
	let i = r.events.length,
		l, o;
	for (; i--;)
		if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
			l = r.events[i][1];
			break
		} return s;

	function s(h) {
		return l ? l._inactive ? f(h) : (o = r.parser.defined.includes(Bt(r.sliceSerialize({
			start: l.end,
			end: r.now()
		}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(h), e.exit("labelMarker"), e.exit("labelEnd"), a) : n(h)
	}

	function a(h) {
		return h === 40 ? e.attempt(SE, c, o ? c : f)(h) : h === 91 ? e.attempt(EE, c, o ? u : f)(h) : o ? c(h) : f(h)
	}

	function u(h) {
		return e.attempt(CE, c, f)(h)
	}

	function c(h) {
		return t(h)
	}

	function f(h) {
		return l._balanced = !0, n(h)
	}
}

function OE(e, t, n) {
	return r;

	function r(f) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), i
	}

	function i(f) {
		return fe(f) ? $i(e, l)(f) : l(f)
	}

	function l(f) {
		return f === 41 ? c(f) : Uy(e, o, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(f)
	}

	function o(f) {
		return fe(f) ? $i(e, a)(f) : c(f)
	}

	function s(f) {
		return n(f)
	}

	function a(f) {
		return f === 34 || f === 39 || f === 40 ? $y(e, u, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(f) : c(f)
	}

	function u(f) {
		return fe(f) ? $i(e, c)(f) : c(f)
	}

	function c(f) {
		return f === 41 ? (e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), e.exit("resource"), t) : n(f)
	}
}

function AE(e, t, n) {
	const r = this;
	return i;

	function i(s) {
		return Vy.call(r, e, l, o, "reference", "referenceMarker", "referenceString")(s)
	}

	function l(s) {
		return r.parser.defined.includes(Bt(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(s) : n(s)
	}

	function o(s) {
		return n(s)
	}
}

function jE(e, t, n) {
	return r;

	function r(l) {
		return e.enter("reference"), e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), i
	}

	function i(l) {
		return l === 93 ? (e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), e.exit("reference"), t) : n(l)
	}
}
const PE = {
	name: "labelStartImage",
	tokenize: IE,
	resolveAll: pf.resolveAll
};

function IE(e, t, n) {
	const r = this;
	return i;

	function i(s) {
		return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(s), e.exit("labelImageMarker"), l
	}

	function l(s) {
		return s === 91 ? (e.enter("labelMarker"), e.consume(s), e.exit("labelMarker"), e.exit("labelImage"), o) : n(s)
	}

	function o(s) {
		return s === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(s) : t(s)
	}
}
const LE = {
	name: "labelStartLink",
	tokenize: ME,
	resolveAll: pf.resolveAll
};

function ME(e, t, n) {
	const r = this;
	return i;

	function i(o) {
		return e.enter("labelLink"), e.enter("labelMarker"), e.consume(o), e.exit("labelMarker"), e.exit("labelLink"), l
	}

	function l(o) {
		return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(o) : t(o)
	}
}
const ka = {
	name: "lineEnding",
	tokenize: DE
};

function DE(e, t) {
	return n;

	function n(r) {
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), K(e, t, "linePrefix")
	}
}
const wo = {
	name: "thematicBreak",
	tokenize: RE
};

function RE(e, t, n) {
	let r = 0,
		i;
	return l;

	function l(u) {
		return e.enter("thematicBreak"), o(u)
	}

	function o(u) {
		return i = u, s(u)
	}

	function s(u) {
		return u === i ? (e.enter("thematicBreakSequence"), a(u)) : r >= 3 && (u === null || $(u)) ? (e.exit("thematicBreak"), t(u)) : n(u)
	}

	function a(u) {
		return u === i ? (e.consume(u), r++, a) : (e.exit("thematicBreakSequence"), Z(u) ? K(e, s, "whitespace")(u) : s(u))
	}
}
const et = {
		name: "list",
		tokenize: _E,
		continuation: {
			tokenize: BE
		},
		exit: VE
	},
	zE = {
		tokenize: $E,
		partial: !0
	},
	FE = {
		tokenize: UE,
		partial: !0
	};

function _E(e, t, n) {
	const r = this,
		i = r.events[r.events.length - 1];
	let l = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0,
		o = 0;
	return s;

	function s(d) {
		const p = r.containerState.type || (d === 42 || d === 43 || d === 45 ? "listUnordered" : "listOrdered");
		if (p === "listUnordered" ? !r.containerState.marker || d === r.containerState.marker : $u(d)) {
			if (r.containerState.type || (r.containerState.type = p, e.enter(p, {
					_container: !0
				})), p === "listUnordered") return e.enter("listItemPrefix"), d === 42 || d === 45 ? e.check(wo, n, u)(d) : u(d);
			if (!r.interrupt || d === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), a(d)
		}
		return n(d)
	}

	function a(d) {
		return $u(d) && ++o < 10 ? (e.consume(d), a) : (!r.interrupt || o < 2) && (r.containerState.marker ? d === r.containerState.marker : d === 41 || d === 46) ? (e.exit("listItemValue"), u(d)) : n(d)
	}

	function u(d) {
		return e.enter("listItemMarker"), e.consume(d), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || d, e.check(kl, r.interrupt ? n : c, e.attempt(zE, h, f))
	}

	function c(d) {
		return r.containerState.initialBlankLine = !0, l++, h(d)
	}

	function f(d) {
		return Z(d) ? (e.enter("listItemPrefixWhitespace"), e.consume(d), e.exit("listItemPrefixWhitespace"), h) : n(d)
	}

	function h(d) {
		return r.containerState.size = l + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(d)
	}
}

function BE(e, t, n) {
	const r = this;
	return r.containerState._closeFlow = void 0, e.check(kl, i, l);

	function i(s) {
		return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, K(e, t, "listItemIndent", r.containerState.size + 1)(s)
	}

	function l(s) {
		return r.containerState.furtherBlankLines || !Z(s) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(s)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(FE, t, o)(s))
	}

	function o(s) {
		return r.containerState._closeFlow = !0, r.interrupt = void 0, K(e, e.attempt(et, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(s)
	}
}

function UE(e, t, n) {
	const r = this;
	return K(e, i, "listItemIndent", r.containerState.size + 1);

	function i(l) {
		const o = r.events[r.events.length - 1];
		return o && o[1].type === "listItemIndent" && o[2].sliceSerialize(o[1], !0).length === r.containerState.size ? t(l) : n(l)
	}
}

function VE(e) {
	e.exit(this.containerState.type)
}

function $E(e, t, n) {
	const r = this;
	return K(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1);

	function i(l) {
		const o = r.events[r.events.length - 1];
		return !Z(l) && o && o[1].type === "listItemPrefixWhitespace" ? t(l) : n(l)
	}
}
const Nh = {
	name: "setextUnderline",
	tokenize: WE,
	resolveTo: HE
};

function HE(e, t) {
	let n = e.length,
		r, i, l;
	for (; n--;)
		if (e[n][0] === "enter") {
			if (e[n][1].type === "content") {
				r = n;
				break
			}
			e[n][1].type === "paragraph" && (i = n)
		} else e[n][1].type === "content" && e.splice(n, 1), !l && e[n][1].type === "definition" && (l = n);
	const o = {
		type: "setextHeading",
		start: Object.assign({}, e[i][1].start),
		end: Object.assign({}, e[e.length - 1][1].end)
	};
	return e[i][1].type = "setextHeadingText", l ? (e.splice(i, 0, ["enter", o, t]), e.splice(l + 1, 0, ["exit", e[r][1], t]), e[r][1].end = Object.assign({}, e[l][1].end)) : e[r][1] = o, e.push(["exit", o, t]), e
}

function WE(e, t, n) {
	const r = this;
	let i;
	return l;

	function l(u) {
		let c = r.events.length,
			f;
		for (; c--;)
			if (r.events[c][1].type !== "lineEnding" && r.events[c][1].type !== "linePrefix" && r.events[c][1].type !== "content") {
				f = r.events[c][1].type === "paragraph";
				break
			} return !r.parser.lazy[r.now().line] && (r.interrupt || f) ? (e.enter("setextHeadingLine"), i = u, o(u)) : n(u)
	}

	function o(u) {
		return e.enter("setextHeadingLineSequence"), s(u)
	}

	function s(u) {
		return u === i ? (e.consume(u), s) : (e.exit("setextHeadingLineSequence"), Z(u) ? K(e, a, "lineSuffix")(u) : a(u))
	}

	function a(u) {
		return u === null || $(u) ? (e.exit("setextHeadingLine"), t(u)) : n(u)
	}
}
const qE = {
	tokenize: ZE
};

function ZE(e) {
	const t = this,
		n = e.attempt(kl, r, e.attempt(this.parser.constructs.flowInitial, i, K(e, e.attempt(this.parser.constructs.flow, i, e.attempt(JS, i)), "linePrefix")));
	return n;

	function r(l) {
		if (l === null) {
			e.consume(l);
			return
		}
		return e.enter("lineEndingBlank"), e.consume(l), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n
	}

	function i(l) {
		if (l === null) {
			e.consume(l);
			return
		}
		return e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), t.currentConstruct = void 0, n
	}
}
const QE = {
		resolveAll: Wy()
	},
	GE = Hy("string"),
	YE = Hy("text");

function Hy(e) {
	return {
		tokenize: t,
		resolveAll: Wy(e === "text" ? XE : void 0)
	};

	function t(n) {
		const r = this,
			i = this.parser.constructs[e],
			l = n.attempt(i, o, s);
		return o;

		function o(c) {
			return u(c) ? l(c) : s(c)
		}

		function s(c) {
			if (c === null) {
				n.consume(c);
				return
			}
			return n.enter("data"), n.consume(c), a
		}

		function a(c) {
			return u(c) ? (n.exit("data"), l(c)) : (n.consume(c), a)
		}

		function u(c) {
			if (c === null) return !0;
			const f = i[c];
			let h = -1;
			if (f)
				for (; ++h < f.length;) {
					const d = f[h];
					if (!d.previous || d.previous.call(r, r.previous)) return !0
				}
			return !1
		}
	}
}

function Wy(e) {
	return t;

	function t(n, r) {
		let i = -1,
			l;
		for (; ++i <= n.length;) l === void 0 ? n[i] && n[i][1].type === "data" && (l = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== l + 2 && (n[l][1].end = n[i - 1][1].end, n.splice(l + 2, i - l - 2), i = l + 2), l = void 0);
		return e ? e(n, r) : n
	}
}

function XE(e, t) {
	let n = 0;
	for (; ++n <= e.length;)
		if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
			const r = e[n - 1][1],
				i = t.sliceStream(r);
			let l = i.length,
				o = -1,
				s = 0,
				a;
			for (; l--;) {
				const u = i[l];
				if (typeof u == "string") {
					for (o = u.length; u.charCodeAt(o - 1) === 32;) s++, o--;
					if (o) break;
					o = -1
				} else if (u === -2) a = !0, s++;
				else if (u !== -1) {
					l++;
					break
				}
			}
			if (s) {
				const u = {
					type: n === e.length || a || s < 2 ? "lineSuffix" : "hardBreakTrailing",
					start: {
						line: r.end.line,
						column: r.end.column - s,
						offset: r.end.offset - s,
						_index: r.start._index + l,
						_bufferIndex: l ? o : r.start._bufferIndex + o
					},
					end: Object.assign({}, r.end)
				};
				r.end = Object.assign({}, u.start), r.start.offset === r.end.offset ? Object.assign(r, u) : (e.splice(n, 0, ["enter", u, t], ["exit", u, t]), n += 2)
			}
			n++
		} return e
}

function JE(e, t, n) {
	let r = Object.assign(n ? Object.assign({}, n) : {
		line: 1,
		column: 1,
		offset: 0
	}, {
		_index: 0,
		_bufferIndex: -1
	});
	const i = {},
		l = [];
	let o = [],
		s = [];
	const a = {
			consume: y,
			enter: w,
			exit: N,
			attempt: j(b),
			check: j(E),
			interrupt: j(E, {
				interrupt: !0
			})
		},
		u = {
			previous: null,
			code: null,
			containerState: {},
			events: [],
			parser: e,
			sliceStream: d,
			sliceSerialize: h,
			now: p,
			defineSkip: x,
			write: f
		};
	let c = t.tokenize.call(u, a);
	return t.resolveAll && l.push(t), u;

	function f(z) {
		return o = vt(o, z), S(), o[o.length - 1] !== null ? [] : (L(t, 0), u.events = Ps(l, u.events, u), u.events)
	}

	function h(z, F) {
		return eC(d(z), F)
	}

	function d(z) {
		return KE(o, z)
	}

	function p() {
		const {
			line: z,
			column: F,
			offset: G,
			_index: se,
			_bufferIndex: q
		} = r;
		return {
			line: z,
			column: F,
			offset: G,
			_index: se,
			_bufferIndex: q
		}
	}

	function x(z) {
		i[z.line] = z.column, C()
	}

	function S() {
		let z;
		for (; r._index < o.length;) {
			const F = o[r._index];
			if (typeof F == "string")
				for (z = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === z && r._bufferIndex < F.length;) m(F.charCodeAt(r._bufferIndex));
			else m(F)
		}
	}

	function m(z) {
		c = c(z)
	}

	function y(z) {
		$(z) ? (r.line++, r.column = 1, r.offset += z === -3 ? 2 : 1, C()) : z !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = z
	}

	function w(z, F) {
		const G = F || {};
		return G.type = z, G.start = p(), u.events.push(["enter", G, u]), s.push(G), G
	}

	function N(z) {
		const F = s.pop();
		return F.end = p(), u.events.push(["exit", F, u]), F
	}

	function b(z, F) {
		L(z, F.from)
	}

	function E(z, F) {
		F.restore()
	}

	function j(z, F) {
		return G;

		function G(se, q, Se) {
			let xe, M, U, v;
			return Array.isArray(se) ? ie(se) : "tokenize" in se ? ie([se]) : Y(se);

			function Y(ce) {
				return ae;

				function ae(Be) {
					const kr = Be !== null && ce[Be],
						Zn = Be !== null && ce.null,
						Bs = [...Array.isArray(kr) ? kr : kr ? [kr] : [], ...Array.isArray(Zn) ? Zn : Zn ? [Zn] : []];
					return ie(Bs)(Be)
				}
			}

			function ie(ce) {
				return xe = ce, M = 0, ce.length === 0 ? Se : k(ce[M])
			}

			function k(ce) {
				return ae;

				function ae(Be) {
					return v = B(), U = ce, ce.partial || (u.currentConstruct = ce), ce.name && u.parser.constructs.disable.null.includes(ce.name) ? ot() : ce.tokenize.call(F ? Object.assign(Object.create(u), F) : u, a, be, ot)(Be)
				}
			}

			function be(ce) {
				return z(U, v), q
			}

			function ot(ce) {
				return v.restore(), ++M < xe.length ? k(xe[M]) : Se
			}
		}
	}

	function L(z, F) {
		z.resolveAll && !l.includes(z) && l.push(z), z.resolve && dt(u.events, F, u.events.length - F, z.resolve(u.events.slice(F), u)), z.resolveTo && (u.events = z.resolveTo(u.events, u))
	}

	function B() {
		const z = p(),
			F = u.previous,
			G = u.currentConstruct,
			se = u.events.length,
			q = Array.from(s);
		return {
			restore: Se,
			from: se
		};

		function Se() {
			r = z, u.previous = F, u.currentConstruct = G, u.events.length = se, s = q, C()
		}
	}

	function C() {
		r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1)
	}
}

function KE(e, t) {
	const n = t.start._index,
		r = t.start._bufferIndex,
		i = t.end._index,
		l = t.end._bufferIndex;
	let o;
	if (n === i) o = [e[n].slice(r, l)];
	else {
		if (o = e.slice(n, i), r > -1) {
			const s = o[0];
			typeof s == "string" ? o[0] = s.slice(r) : o.shift()
		}
		l > 0 && o.push(e[i].slice(0, l))
	}
	return o
}

function eC(e, t) {
	let n = -1;
	const r = [];
	let i;
	for (; ++n < e.length;) {
		const l = e[n];
		let o;
		if (typeof l == "string") o = l;
		else switch (l) {
			case -5: {
				o = "\r";
				break
			}
			case -4: {
				o = `
`;
				break
			}
			case -3: {
				o = `\r
`;
				break
			}
			case -2: {
				o = t ? " " : "	";
				break
			}
			case -1: {
				if (!t && i) continue;
				o = " ";
				break
			}
			default:
				o = String.fromCharCode(l)
		}
		i = l === -2, r.push(o)
	}
	return r.join("")
}
const tC = {
		42: et,
		43: et,
		45: et,
		48: et,
		49: et,
		50: et,
		51: et,
		52: et,
		53: et,
		54: et,
		55: et,
		56: et,
		57: et,
		62: zy
	},
	nC = {
		91: rE
	},
	rC = {
		[-2]: va,
		[-1]: va,
		32: va
	},
	iC = {
		35: uE,
		42: wo,
		45: [Nh, wo],
		60: hE,
		61: Nh,
		95: wo,
		96: Eh,
		126: Eh
	},
	lC = {
		38: _y,
		92: Fy
	},
	oC = {
		[-5]: ka,
		[-4]: ka,
		[-3]: ka,
		33: PE,
		38: _y,
		42: Hu,
		60: [MS, vE],
		91: LE,
		92: [sE, Fy],
		93: pf,
		95: Hu,
		96: ZS
	},
	sC = {
		null: [Hu, QE]
	},
	aC = {
		null: [42, 95]
	},
	uC = {
		null: []
	},
	cC = Object.freeze(Object.defineProperty({
		__proto__: null,
		attentionMarkers: aC,
		contentInitial: nC,
		disable: uC,
		document: tC,
		flow: iC,
		flowInitial: rC,
		insideSpan: sC,
		string: lC,
		text: oC
	}, Symbol.toStringTag, {
		value: "Module"
	}));

function fC(e) {
	const n = Dy([cC, ...(e || {}).extensions || []]),
		r = {
			defined: [],
			lazy: {},
			constructs: n,
			content: i(TS),
			document: i(AS),
			flow: i(qE),
			string: i(GE),
			text: i(YE)
		};
	return r;

	function i(l) {
		return o;

		function o(s) {
			return JE(r, l, s)
		}
	}
}

function dC(e) {
	for (; !By(e););
	return e
}
const bh = /[\0\t\n\r]/g;

function hC() {
	let e = 1,
		t = "",
		n = !0,
		r;
	return i;

	function i(l, o, s) {
		const a = [];
		let u, c, f, h, d;
		for (l = t + (typeof l == "string" ? l.toString() : new TextDecoder(o || void 0).decode(l)), f = 0, t = "", n && (l.charCodeAt(0) === 65279 && f++, n = void 0); f < l.length;) {
			if (bh.lastIndex = f, u = bh.exec(l), h = u && u.index !== void 0 ? u.index : l.length, d = l.charCodeAt(h), !u) {
				t = l.slice(f);
				break
			}
			if (d === 10 && f === h && r) a.push(-3), r = void 0;
			else switch (r && (a.push(-5), r = void 0), f < h && (a.push(l.slice(f, h)), e += h - f), d) {
				case 0: {
					a.push(65533), e++;
					break
				}
				case 9: {
					for (c = Math.ceil(e / 4) * 4, a.push(-2); e++ < c;) a.push(-1);
					break
				}
				case 10: {
					a.push(-4), e = 1;
					break
				}
				default:
					r = !0, e = 1
			}
			f = h + 1
		}
		return s && (r && a.push(-5), t && a.push(t), a.push(null)), a
	}
}
const pC = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;

function mC(e) {
	return e.replace(pC, gC)
}

function gC(e, t, n) {
	if (t) return t;
	if (n.charCodeAt(0) === 35) {
		const i = n.charCodeAt(1),
			l = i === 120 || i === 88;
		return Ry(n.slice(l ? 2 : 1), l ? 16 : 10)
	}
	return hf(n) || e
}
const qy = {}.hasOwnProperty;

function yC(e, t, n) {
	return typeof t != "string" && (n = t, t = void 0), xC(n)(dC(fC(n).document().write(hC()(e, t, !0))))
}

function xC(e) {
	const t = {
		transforms: [],
		canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
		enter: {
			autolink: l(Mf),
			autolinkProtocol: B,
			autolinkEmail: B,
			atxHeading: l(Pf),
			blockQuote: l(kr),
			characterEscape: B,
			characterReference: B,
			codeFenced: l(Zn),
			codeFencedFenceInfo: o,
			codeFencedFenceMeta: o,
			codeIndented: l(Zn, o),
			codeText: l(Bs, o),
			codeTextData: B,
			data: B,
			codeFlowValue: B,
			definition: l(I1),
			definitionDestinationString: o,
			definitionLabelString: o,
			definitionTitleString: o,
			emphasis: l(L1),
			hardBreakEscape: l(If),
			hardBreakTrailing: l(If),
			htmlFlow: l(Lf, o),
			htmlFlowData: B,
			htmlText: l(Lf, o),
			htmlTextData: B,
			image: l(M1),
			label: o,
			link: l(Mf),
			listItem: l(D1),
			listItemValue: h,
			listOrdered: l(Df, f),
			listUnordered: l(Df),
			paragraph: l(R1),
			reference: k,
			referenceString: o,
			resourceDestinationString: o,
			resourceTitleString: o,
			setextHeading: l(Pf),
			strong: l(z1),
			thematicBreak: l(_1)
		},
		exit: {
			atxHeading: a(),
			atxHeadingSequence: b,
			autolink: a(),
			autolinkEmail: Be,
			autolinkProtocol: ae,
			blockQuote: a(),
			characterEscapeValue: C,
			characterReferenceMarkerHexadecimal: ot,
			characterReferenceMarkerNumeric: ot,
			characterReferenceValue: ce,
			codeFenced: a(S),
			codeFencedFence: x,
			codeFencedFenceInfo: d,
			codeFencedFenceMeta: p,
			codeFlowValue: C,
			codeIndented: a(m),
			codeText: a(q),
			codeTextData: C,
			data: C,
			definition: a(),
			definitionDestinationString: N,
			definitionLabelString: y,
			definitionTitleString: w,
			emphasis: a(),
			hardBreakEscape: a(F),
			hardBreakTrailing: a(F),
			htmlFlow: a(G),
			htmlFlowData: C,
			htmlText: a(se),
			htmlTextData: C,
			image: a(xe),
			label: U,
			labelText: M,
			lineEnding: z,
			link: a(Se),
			listItem: a(),
			listOrdered: a(),
			listUnordered: a(),
			paragraph: a(),
			referenceString: be,
			resourceDestinationString: v,
			resourceTitleString: Y,
			resource: ie,
			setextHeading: a(L),
			setextHeadingLineSequence: j,
			setextHeadingText: E,
			strong: a(),
			thematicBreak: a()
		}
	};
	Zy(t, (e || {}).mdastExtensions || []);
	const n = {};
	return r;

	function r(O) {
		let D = {
			type: "root",
			children: []
		};
		const H = {
				stack: [D],
				tokenStack: [],
				config: t,
				enter: s,
				exit: u,
				buffer: o,
				resume: c,
				data: n
			},
			X = [];
		let ue = -1;
		for (; ++ue < O.length;)
			if (O[ue][1].type === "listOrdered" || O[ue][1].type === "listUnordered")
				if (O[ue][0] === "enter") X.push(ue);
				else {
					const At = X.pop();
					ue = i(O, At, ue)
				} for (ue = -1; ++ue < O.length;) {
			const At = t[O[ue][0]];
			qy.call(At, O[ue][1].type) && At[O[ue][1].type].call(Object.assign({
				sliceSerialize: O[ue][2].sliceSerialize
			}, H), O[ue][1])
		}
		if (H.tokenStack.length > 0) {
			const At = H.tokenStack[H.tokenStack.length - 1];
			(At[1] || Th).call(H, void 0, At[0])
		}
		for (D.position = {
				start: yn(O.length > 0 ? O[0][1].start : {
					line: 1,
					column: 1,
					offset: 0
				}),
				end: yn(O.length > 0 ? O[O.length - 2][1].end : {
					line: 1,
					column: 1,
					offset: 0
				})
			}, ue = -1; ++ue < t.transforms.length;) D = t.transforms[ue](D) || D;
		return D
	}

	function i(O, D, H) {
		let X = D - 1,
			ue = -1,
			At = !1,
			Qn, Xt, hi, pi;
		for (; ++X <= H;) {
			const st = O[X];
			switch (st[1].type) {
				case "listUnordered":
				case "listOrdered":
				case "blockQuote": {
					st[0] === "enter" ? ue++ : ue--, pi = void 0;
					break
				}
				case "lineEndingBlank": {
					st[0] === "enter" && (Qn && !pi && !ue && !hi && (hi = X), pi = void 0);
					break
				}
				case "linePrefix":
				case "listItemValue":
				case "listItemMarker":
				case "listItemPrefix":
				case "listItemPrefixWhitespace":
					break;
				default:
					pi = void 0
			}
			if (!ue && st[0] === "enter" && st[1].type === "listItemPrefix" || ue === -1 && st[0] === "exit" && (st[1].type === "listUnordered" || st[1].type === "listOrdered")) {
				if (Qn) {
					let Sr = X;
					for (Xt = void 0; Sr--;) {
						const Jt = O[Sr];
						if (Jt[1].type === "lineEnding" || Jt[1].type === "lineEndingBlank") {
							if (Jt[0] === "exit") continue;
							Xt && (O[Xt][1].type = "lineEndingBlank", At = !0), Jt[1].type = "lineEnding", Xt = Sr
						} else if (!(Jt[1].type === "linePrefix" || Jt[1].type === "blockQuotePrefix" || Jt[1].type === "blockQuotePrefixWhitespace" || Jt[1].type === "blockQuoteMarker" || Jt[1].type === "listItemIndent")) break
					}
					hi && (!Xt || hi < Xt) && (Qn._spread = !0), Qn.end = Object.assign({}, Xt ? O[Xt][1].start : st[1].end), O.splice(Xt || X, 0, ["exit", Qn, st[2]]), X++, H++
				}
				if (st[1].type === "listItemPrefix") {
					const Sr = {
						type: "listItem",
						_spread: !1,
						start: Object.assign({}, st[1].start),
						end: void 0
					};
					Qn = Sr, O.splice(X, 0, ["enter", Sr, st[2]]), X++, H++, hi = void 0, pi = !0
				}
			}
		}
		return O[D][1]._spread = At, H
	}

	function l(O, D) {
		return H;

		function H(X) {
			s.call(this, O(X), X), D && D.call(this, X)
		}
	}

	function o() {
		this.stack.push({
			type: "fragment",
			children: []
		})
	}

	function s(O, D, H) {
		this.stack[this.stack.length - 1].children.push(O), this.stack.push(O), this.tokenStack.push([D, H]), O.position = {
			start: yn(D.start),
			end: void 0
		}
	}

	function a(O) {
		return D;

		function D(H) {
			O && O.call(this, H), u.call(this, H)
		}
	}

	function u(O, D) {
		const H = this.stack.pop(),
			X = this.tokenStack.pop();
		if (X) X[0].type !== O.type && (D ? D.call(this, O, X[0]) : (X[1] || Th).call(this, O, X[0]));
		else throw new Error("Cannot close `" + O.type + "` (" + Vi({
			start: O.start,
			end: O.end
		}) + "): it’s not open");
		H.position.end = yn(O.end)
	}

	function c() {
		return df(this.stack.pop())
	}

	function f() {
		this.data.expectingFirstListItemValue = !0
	}

	function h(O) {
		if (this.data.expectingFirstListItemValue) {
			const D = this.stack[this.stack.length - 2];
			D.start = Number.parseInt(this.sliceSerialize(O), 10), this.data.expectingFirstListItemValue = void 0
		}
	}

	function d() {
		const O = this.resume(),
			D = this.stack[this.stack.length - 1];
		D.lang = O
	}

	function p() {
		const O = this.resume(),
			D = this.stack[this.stack.length - 1];
		D.meta = O
	}

	function x() {
		this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0)
	}

	function S() {
		const O = this.resume(),
			D = this.stack[this.stack.length - 1];
		D.value = O.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0
	}

	function m() {
		const O = this.resume(),
			D = this.stack[this.stack.length - 1];
		D.value = O.replace(/(\r?\n|\r)$/g, "")
	}

	function y(O) {
		const D = this.resume(),
			H = this.stack[this.stack.length - 1];
		H.label = D, H.identifier = Bt(this.sliceSerialize(O)).toLowerCase()
	}

	function w() {
		const O = this.resume(),
			D = this.stack[this.stack.length - 1];
		D.title = O
	}

	function N() {
		const O = this.resume(),
			D = this.stack[this.stack.length - 1];
		D.url = O
	}

	function b(O) {
		const D = this.stack[this.stack.length - 1];
		if (!D.depth) {
			const H = this.sliceSerialize(O).length;
			D.depth = H
		}
	}

	function E() {
		this.data.setextHeadingSlurpLineEnding = !0
	}

	function j(O) {
		const D = this.stack[this.stack.length - 1];
		D.depth = this.sliceSerialize(O).codePointAt(0) === 61 ? 1 : 2
	}

	function L() {
		this.data.setextHeadingSlurpLineEnding = void 0
	}

	function B(O) {
		const H = this.stack[this.stack.length - 1].children;
		let X = H[H.length - 1];
		(!X || X.type !== "text") && (X = F1(), X.position = {
			start: yn(O.start),
			end: void 0
		}, H.push(X)), this.stack.push(X)
	}

	function C(O) {
		const D = this.stack.pop();
		D.value += this.sliceSerialize(O), D.position.end = yn(O.end)
	}

	function z(O) {
		const D = this.stack[this.stack.length - 1];
		if (this.data.atHardBreak) {
			const H = D.children[D.children.length - 1];
			H.position.end = yn(O.end), this.data.atHardBreak = void 0;
			return
		}!this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(D.type) && (B.call(this, O), C.call(this, O))
	}

	function F() {
		this.data.atHardBreak = !0
	}

	function G() {
		const O = this.resume(),
			D = this.stack[this.stack.length - 1];
		D.value = O
	}

	function se() {
		const O = this.resume(),
			D = this.stack[this.stack.length - 1];
		D.value = O
	}

	function q() {
		const O = this.resume(),
			D = this.stack[this.stack.length - 1];
		D.value = O
	}

	function Se() {
		const O = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			const D = this.data.referenceType || "shortcut";
			O.type += "Reference", O.referenceType = D, delete O.url, delete O.title
		} else delete O.identifier, delete O.label;
		this.data.referenceType = void 0
	}

	function xe() {
		const O = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			const D = this.data.referenceType || "shortcut";
			O.type += "Reference", O.referenceType = D, delete O.url, delete O.title
		} else delete O.identifier, delete O.label;
		this.data.referenceType = void 0
	}

	function M(O) {
		const D = this.sliceSerialize(O),
			H = this.stack[this.stack.length - 2];
		H.label = mC(D), H.identifier = Bt(D).toLowerCase()
	}

	function U() {
		const O = this.stack[this.stack.length - 1],
			D = this.resume(),
			H = this.stack[this.stack.length - 1];
		if (this.data.inReference = !0, H.type === "link") {
			const X = O.children;
			H.children = X
		} else H.alt = D
	}

	function v() {
		const O = this.resume(),
			D = this.stack[this.stack.length - 1];
		D.url = O
	}

	function Y() {
		const O = this.resume(),
			D = this.stack[this.stack.length - 1];
		D.title = O
	}

	function ie() {
		this.data.inReference = void 0
	}

	function k() {
		this.data.referenceType = "collapsed"
	}

	function be(O) {
		const D = this.resume(),
			H = this.stack[this.stack.length - 1];
		H.label = D, H.identifier = Bt(this.sliceSerialize(O)).toLowerCase(), this.data.referenceType = "full"
	}

	function ot(O) {
		this.data.characterReferenceType = O.type
	}

	function ce(O) {
		const D = this.sliceSerialize(O),
			H = this.data.characterReferenceType;
		let X;
		H ? (X = Ry(D, H === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : X = hf(D);
		const ue = this.stack.pop();
		ue.value += X, ue.position.end = yn(O.end)
	}

	function ae(O) {
		C.call(this, O);
		const D = this.stack[this.stack.length - 1];
		D.url = this.sliceSerialize(O)
	}

	function Be(O) {
		C.call(this, O);
		const D = this.stack[this.stack.length - 1];
		D.url = "mailto:" + this.sliceSerialize(O)
	}

	function kr() {
		return {
			type: "blockquote",
			children: []
		}
	}

	function Zn() {
		return {
			type: "code",
			lang: null,
			meta: null,
			value: ""
		}
	}

	function Bs() {
		return {
			type: "inlineCode",
			value: ""
		}
	}

	function I1() {
		return {
			type: "definition",
			identifier: "",
			label: null,
			title: null,
			url: ""
		}
	}

	function L1() {
		return {
			type: "emphasis",
			children: []
		}
	}

	function Pf() {
		return {
			type: "heading",
			depth: 0,
			children: []
		}
	}

	function If() {
		return {
			type: "break"
		}
	}

	function Lf() {
		return {
			type: "html",
			value: ""
		}
	}

	function M1() {
		return {
			type: "image",
			title: null,
			url: "",
			alt: null
		}
	}

	function Mf() {
		return {
			type: "link",
			title: null,
			url: "",
			children: []
		}
	}

	function Df(O) {
		return {
			type: "list",
			ordered: O.type === "listOrdered",
			start: null,
			spread: O._spread,
			children: []
		}
	}

	function D1(O) {
		return {
			type: "listItem",
			spread: O._spread,
			checked: null,
			children: []
		}
	}

	function R1() {
		return {
			type: "paragraph",
			children: []
		}
	}

	function z1() {
		return {
			type: "strong",
			children: []
		}
	}

	function F1() {
		return {
			type: "text",
			value: ""
		}
	}

	function _1() {
		return {
			type: "thematicBreak"
		}
	}
}

function yn(e) {
	return {
		line: e.line,
		column: e.column,
		offset: e.offset
	}
}

function Zy(e, t) {
	let n = -1;
	for (; ++n < t.length;) {
		const r = t[n];
		Array.isArray(r) ? Zy(e, r) : wC(e, r)
	}
}

function wC(e, t) {
	let n;
	for (n in t)
		if (qy.call(t, n)) switch (n) {
			case "canContainEols": {
				const r = t[n];
				r && e[n].push(...r);
				break
			}
			case "transforms": {
				const r = t[n];
				r && e[n].push(...r);
				break
			}
			case "enter":
			case "exit": {
				const r = t[n];
				r && Object.assign(e[n], r);
				break
			}
		}
}

function Th(e, t) {
	throw e ? new Error("Cannot close `" + e.type + "` (" + Vi({
		start: e.start,
		end: e.end
	}) + "): a different token (`" + t.type + "`, " + Vi({
		start: t.start,
		end: t.end
	}) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + Vi({
		start: t.start,
		end: t.end
	}) + ") is still open")
}

function vC(e) {
	const t = this;
	t.parser = n;

	function n(r) {
		return yC(r, {
			...t.data("settings"),
			...e,
			extensions: t.data("micromarkExtensions") || [],
			mdastExtensions: t.data("fromMarkdownExtensions") || []
		})
	}
}

function kC(e, t) {
	const n = {
		type: "element",
		tagName: "blockquote",
		properties: {},
		children: e.wrap(e.all(t), !0)
	};
	return e.patch(t, n), e.applyData(t, n)
}

function SC(e, t) {
	const n = {
		type: "element",
		tagName: "br",
		properties: {},
		children: []
	};
	return e.patch(t, n), [e.applyData(t, n), {
		type: "text",
		value: `
`
	}]
}

function EC(e, t) {
	const n = t.value ? t.value + `
` : "",
		r = {};
	t.lang && (r.className = ["language-" + t.lang]);
	let i = {
		type: "element",
		tagName: "code",
		properties: r,
		children: [{
			type: "text",
			value: n
		}]
	};
	return t.meta && (i.data = {
		meta: t.meta
	}), e.patch(t, i), i = e.applyData(t, i), i = {
		type: "element",
		tagName: "pre",
		properties: {},
		children: [i]
	}, e.patch(t, i), i
}

function CC(e, t) {
	const n = {
		type: "element",
		tagName: "del",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n)
}

function NC(e, t) {
	const n = {
		type: "element",
		tagName: "em",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n)
}

function bC(e, t) {
	const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-",
		r = String(t.identifier).toUpperCase(),
		i = wr(r.toLowerCase()),
		l = e.footnoteOrder.indexOf(r);
	let o, s = e.footnoteCounts.get(r);
	s === void 0 ? (s = 0, e.footnoteOrder.push(r), o = e.footnoteOrder.length) : o = l + 1, s += 1, e.footnoteCounts.set(r, s);
	const a = {
		type: "element",
		tagName: "a",
		properties: {
			href: "#" + n + "fn-" + i,
			id: n + "fnref-" + i + (s > 1 ? "-" + s : ""),
			dataFootnoteRef: !0,
			ariaDescribedBy: ["footnote-label"]
		},
		children: [{
			type: "text",
			value: String(o)
		}]
	};
	e.patch(t, a);
	const u = {
		type: "element",
		tagName: "sup",
		properties: {},
		children: [a]
	};
	return e.patch(t, u), e.applyData(t, u)
}

function TC(e, t) {
	const n = {
		type: "element",
		tagName: "h" + t.depth,
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n)
}

function OC(e, t) {
	if (e.options.allowDangerousHtml) {
		const n = {
			type: "raw",
			value: t.value
		};
		return e.patch(t, n), e.applyData(t, n)
	}
}

function Qy(e, t) {
	const n = t.referenceType;
	let r = "]";
	if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference") return [{
		type: "text",
		value: "![" + t.alt + r
	}];
	const i = e.all(t),
		l = i[0];
	l && l.type === "text" ? l.value = "[" + l.value : i.unshift({
		type: "text",
		value: "["
	});
	const o = i[i.length - 1];
	return o && o.type === "text" ? o.value += r : i.push({
		type: "text",
		value: r
	}), i
}

function AC(e, t) {
	const n = String(t.identifier).toUpperCase(),
		r = e.definitionById.get(n);
	if (!r) return Qy(e, t);
	const i = {
		src: wr(r.url || ""),
		alt: t.alt
	};
	r.title !== null && r.title !== void 0 && (i.title = r.title);
	const l = {
		type: "element",
		tagName: "img",
		properties: i,
		children: []
	};
	return e.patch(t, l), e.applyData(t, l)
}

function jC(e, t) {
	const n = {
		src: wr(t.url)
	};
	t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
	const r = {
		type: "element",
		tagName: "img",
		properties: n,
		children: []
	};
	return e.patch(t, r), e.applyData(t, r)
}

function PC(e, t) {
	const n = {
		type: "text",
		value: t.value.replace(/\r?\n|\r/g, " ")
	};
	e.patch(t, n);
	const r = {
		type: "element",
		tagName: "code",
		properties: {},
		children: [n]
	};
	return e.patch(t, r), e.applyData(t, r)
}

function IC(e, t) {
	const n = String(t.identifier).toUpperCase(),
		r = e.definitionById.get(n);
	if (!r) return Qy(e, t);
	const i = {
		href: wr(r.url || "")
	};
	r.title !== null && r.title !== void 0 && (i.title = r.title);
	const l = {
		type: "element",
		tagName: "a",
		properties: i,
		children: e.all(t)
	};
	return e.patch(t, l), e.applyData(t, l)
}

function LC(e, t) {
	const n = {
		href: wr(t.url)
	};
	t.title !== null && t.title !== void 0 && (n.title = t.title);
	const r = {
		type: "element",
		tagName: "a",
		properties: n,
		children: e.all(t)
	};
	return e.patch(t, r), e.applyData(t, r)
}

function MC(e, t, n) {
	const r = e.all(t),
		i = n ? DC(n) : Gy(t),
		l = {},
		o = [];
	if (typeof t.checked == "boolean") {
		const c = r[0];
		let f;
		c && c.type === "element" && c.tagName === "p" ? f = c : (f = {
			type: "element",
			tagName: "p",
			properties: {},
			children: []
		}, r.unshift(f)), f.children.length > 0 && f.children.unshift({
			type: "text",
			value: " "
		}), f.children.unshift({
			type: "element",
			tagName: "input",
			properties: {
				type: "checkbox",
				checked: t.checked,
				disabled: !0
			},
			children: []
		}), l.className = ["task-list-item"]
	}
	let s = -1;
	for (; ++s < r.length;) {
		const c = r[s];
		(i || s !== 0 || c.type !== "element" || c.tagName !== "p") && o.push({
			type: "text",
			value: `
`
		}), c.type === "element" && c.tagName === "p" && !i ? o.push(...c.children) : o.push(c)
	}
	const a = r[r.length - 1];
	a && (i || a.type !== "element" || a.tagName !== "p") && o.push({
		type: "text",
		value: `
`
	});
	const u = {
		type: "element",
		tagName: "li",
		properties: l,
		children: o
	};
	return e.patch(t, u), e.applyData(t, u)
}

function DC(e) {
	let t = !1;
	if (e.type === "list") {
		t = e.spread || !1;
		const n = e.children;
		let r = -1;
		for (; !t && ++r < n.length;) t = Gy(n[r])
	}
	return t
}

function Gy(e) {
	const t = e.spread;
	return t ?? e.children.length > 1
}

function RC(e, t) {
	const n = {},
		r = e.all(t);
	let i = -1;
	for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length;) {
		const o = r[i];
		if (o.type === "element" && o.tagName === "li" && o.properties && Array.isArray(o.properties.className) && o.properties.className.includes("task-list-item")) {
			n.className = ["contains-task-list"];
			break
		}
	}
	const l = {
		type: "element",
		tagName: t.ordered ? "ol" : "ul",
		properties: n,
		children: e.wrap(r, !0)
	};
	return e.patch(t, l), e.applyData(t, l)
}

function zC(e, t) {
	const n = {
		type: "element",
		tagName: "p",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n)
}

function FC(e, t) {
	const n = {
		type: "root",
		children: e.wrap(e.all(t))
	};
	return e.patch(t, n), e.applyData(t, n)
}

function _C(e, t) {
	const n = {
		type: "element",
		tagName: "strong",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n)
}

function BC(e, t) {
	const n = e.all(t),
		r = n.shift(),
		i = [];
	if (r) {
		const o = {
			type: "element",
			tagName: "thead",
			properties: {},
			children: e.wrap([r], !0)
		};
		e.patch(t.children[0], o), i.push(o)
	}
	if (n.length > 0) {
		const o = {
				type: "element",
				tagName: "tbody",
				properties: {},
				children: e.wrap(n, !0)
			},
			s = cf(t.children[1]),
			a = jy(t.children[t.children.length - 1]);
		s && a && (o.position = {
			start: s,
			end: a
		}), i.push(o)
	}
	const l = {
		type: "element",
		tagName: "table",
		properties: {},
		children: e.wrap(i, !0)
	};
	return e.patch(t, l), e.applyData(t, l)
}

function UC(e, t, n) {
	const r = n ? n.children : void 0,
		l = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td",
		o = n && n.type === "table" ? n.align : void 0,
		s = o ? o.length : t.children.length;
	let a = -1;
	const u = [];
	for (; ++a < s;) {
		const f = t.children[a],
			h = {},
			d = o ? o[a] : void 0;
		d && (h.align = d);
		let p = {
			type: "element",
			tagName: l,
			properties: h,
			children: []
		};
		f && (p.children = e.all(f), e.patch(f, p), p = e.applyData(f, p)), u.push(p)
	}
	const c = {
		type: "element",
		tagName: "tr",
		properties: {},
		children: e.wrap(u, !0)
	};
	return e.patch(t, c), e.applyData(t, c)
}

function VC(e, t) {
	const n = {
		type: "element",
		tagName: "td",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n)
}
const Oh = 9,
	Ah = 32;

function $C(e) {
	const t = String(e),
		n = /\r?\n|\r/g;
	let r = n.exec(t),
		i = 0;
	const l = [];
	for (; r;) l.push(jh(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
	return l.push(jh(t.slice(i), i > 0, !1)), l.join("")
}

function jh(e, t, n) {
	let r = 0,
		i = e.length;
	if (t) {
		let l = e.codePointAt(r);
		for (; l === Oh || l === Ah;) r++, l = e.codePointAt(r)
	}
	if (n) {
		let l = e.codePointAt(i - 1);
		for (; l === Oh || l === Ah;) i--, l = e.codePointAt(i - 1)
	}
	return i > r ? e.slice(r, i) : ""
}

function HC(e, t) {
	const n = {
		type: "text",
		value: $C(String(t.value))
	};
	return e.patch(t, n), e.applyData(t, n)
}

function WC(e, t) {
	const n = {
		type: "element",
		tagName: "hr",
		properties: {},
		children: []
	};
	return e.patch(t, n), e.applyData(t, n)
}
const qC = {
	blockquote: kC,
	break: SC,
	code: EC,
	delete: CC,
	emphasis: NC,
	footnoteReference: bC,
	heading: TC,
	html: OC,
	imageReference: AC,
	image: jC,
	inlineCode: PC,
	linkReference: IC,
	link: LC,
	listItem: MC,
	list: RC,
	paragraph: zC,
	root: FC,
	strong: _C,
	table: BC,
	tableCell: VC,
	tableRow: UC,
	text: HC,
	thematicBreak: WC,
	toml: Wl,
	yaml: Wl,
	definition: Wl,
	footnoteDefinition: Wl
};

function Wl() {}
const Yy = -1,
	Is = 0,
	ts = 1,
	ns = 2,
	mf = 3,
	gf = 4,
	yf = 5,
	xf = 6,
	Xy = 7,
	Jy = 8,
	Ph = typeof self == "object" ? self : globalThis,
	ZC = (e, t) => {
		const n = (i, l) => (e.set(l, i), i),
			r = i => {
				if (e.has(i)) return e.get(i);
				const [l, o] = t[i];
				switch (l) {
					case Is:
					case Yy:
						return n(o, i);
					case ts: {
						const s = n([], i);
						for (const a of o) s.push(r(a));
						return s
					}
					case ns: {
						const s = n({}, i);
						for (const [a, u] of o) s[r(a)] = r(u);
						return s
					}
					case mf:
						return n(new Date(o), i);
					case gf: {
						const {
							source: s,
							flags: a
						} = o;
						return n(new RegExp(s, a), i)
					}
					case yf: {
						const s = n(new Map, i);
						for (const [a, u] of o) s.set(r(a), r(u));
						return s
					}
					case xf: {
						const s = n(new Set, i);
						for (const a of o) s.add(r(a));
						return s
					}
					case Xy: {
						const {
							name: s,
							message: a
						} = o;
						return n(new Ph[s](a), i)
					}
					case Jy:
						return n(BigInt(o), i);
					case "BigInt":
						return n(Object(BigInt(o)), i)
				}
				return n(new Ph[l](o), i)
			};
		return r
	},
	Ih = e => ZC(new Map, e)(0),
	Cr = "",
	{
		toString: QC
	} = {},
	{
		keys: GC
	} = Object,
	Ci = e => {
		const t = typeof e;
		if (t !== "object" || !e) return [Is, t];
		const n = QC.call(e).slice(8, -1);
		switch (n) {
			case "Array":
				return [ts, Cr];
			case "Object":
				return [ns, Cr];
			case "Date":
				return [mf, Cr];
			case "RegExp":
				return [gf, Cr];
			case "Map":
				return [yf, Cr];
			case "Set":
				return [xf, Cr]
		}
		return n.includes("Array") ? [ts, n] : n.includes("Error") ? [Xy, n] : [ns, n]
	},
	ql = ([e, t]) => e === Is && (t === "function" || t === "symbol"),
	YC = (e, t, n, r) => {
		const i = (o, s) => {
				const a = r.push(o) - 1;
				return n.set(s, a), a
			},
			l = o => {
				if (n.has(o)) return n.get(o);
				let [s, a] = Ci(o);
				switch (s) {
					case Is: {
						let c = o;
						switch (a) {
							case "bigint":
								s = Jy, c = o.toString();
								break;
							case "function":
							case "symbol":
								if (e) throw new TypeError("unable to serialize " + a);
								c = null;
								break;
							case "undefined":
								return i([Yy], o)
						}
						return i([s, c], o)
					}
					case ts: {
						if (a) return i([a, [...o]], o);
						const c = [],
							f = i([s, c], o);
						for (const h of o) c.push(l(h));
						return f
					}
					case ns: {
						if (a) switch (a) {
							case "BigInt":
								return i([a, o.toString()], o);
							case "Boolean":
							case "Number":
							case "String":
								return i([a, o.valueOf()], o)
						}
						if (t && "toJSON" in o) return l(o.toJSON());
						const c = [],
							f = i([s, c], o);
						for (const h of GC(o))(e || !ql(Ci(o[h]))) && c.push([l(h), l(o[h])]);
						return f
					}
					case mf:
						return i([s, o.toISOString()], o);
					case gf: {
						const {
							source: c,
							flags: f
						} = o;
						return i([s, {
							source: c,
							flags: f
						}], o)
					}
					case yf: {
						const c = [],
							f = i([s, c], o);
						for (const [h, d] of o)(e || !(ql(Ci(h)) || ql(Ci(d)))) && c.push([l(h), l(d)]);
						return f
					}
					case xf: {
						const c = [],
							f = i([s, c], o);
						for (const h of o)(e || !ql(Ci(h))) && c.push(l(h));
						return f
					}
				}
				const {
					message: u
				} = o;
				return i([s, {
					name: a,
					message: u
				}], o)
			};
		return l
	},
	Lh = (e, {
		json: t,
		lossy: n
	} = {}) => {
		const r = [];
		return YC(!(t || n), !!t, new Map, r)(e), r
	},
	rs = typeof structuredClone == "function" ? (e, t) => t && ("json" in t || "lossy" in t) ? Ih(Lh(e, t)) : structuredClone(e) : (e, t) => Ih(Lh(e, t));

function XC(e, t) {
	const n = [{
		type: "text",
		value: "↩"
	}];
	return t > 1 && n.push({
		type: "element",
		tagName: "sup",
		properties: {},
		children: [{
			type: "text",
			value: String(t)
		}]
	}), n
}

function JC(e, t) {
	return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "")
}

function KC(e) {
	const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-",
		n = e.options.footnoteBackContent || XC,
		r = e.options.footnoteBackLabel || JC,
		i = e.options.footnoteLabel || "Footnotes",
		l = e.options.footnoteLabelTagName || "h2",
		o = e.options.footnoteLabelProperties || {
			className: ["sr-only"]
		},
		s = [];
	let a = -1;
	for (; ++a < e.footnoteOrder.length;) {
		const u = e.footnoteById.get(e.footnoteOrder[a]);
		if (!u) continue;
		const c = e.all(u),
			f = String(u.identifier).toUpperCase(),
			h = wr(f.toLowerCase());
		let d = 0;
		const p = [],
			x = e.footnoteCounts.get(f);
		for (; x !== void 0 && ++d <= x;) {
			p.length > 0 && p.push({
				type: "text",
				value: " "
			});
			let y = typeof n == "string" ? n : n(a, d);
			typeof y == "string" && (y = {
				type: "text",
				value: y
			}), p.push({
				type: "element",
				tagName: "a",
				properties: {
					href: "#" + t + "fnref-" + h + (d > 1 ? "-" + d : ""),
					dataFootnoteBackref: "",
					ariaLabel: typeof r == "string" ? r : r(a, d),
					className: ["data-footnote-backref"]
				},
				children: Array.isArray(y) ? y : [y]
			})
		}
		const S = c[c.length - 1];
		if (S && S.type === "element" && S.tagName === "p") {
			const y = S.children[S.children.length - 1];
			y && y.type === "text" ? y.value += " " : S.children.push({
				type: "text",
				value: " "
			}), S.children.push(...p)
		} else c.push(...p);
		const m = {
			type: "element",
			tagName: "li",
			properties: {
				id: t + "fn-" + h
			},
			children: e.wrap(c, !0)
		};
		e.patch(u, m), s.push(m)
	}
	if (s.length !== 0) return {
		type: "element",
		tagName: "section",
		properties: {
			dataFootnotes: !0,
			className: ["footnotes"]
		},
		children: [{
			type: "element",
			tagName: l,
			properties: {
				...rs(o),
				id: "footnote-label"
			},
			children: [{
				type: "text",
				value: i
			}]
		}, {
			type: "text",
			value: `
`
		}, {
			type: "element",
			tagName: "ol",
			properties: {},
			children: e.wrap(s, !0)
		}, {
			type: "text",
			value: `
`
		}]
	}
}
const Ls = function(e) {
	if (e == null) return rN;
	if (typeof e == "function") return Ms(e);
	if (typeof e == "object") return Array.isArray(e) ? eN(e) : tN(e);
	if (typeof e == "string") return nN(e);
	throw new Error("Expected function, string, or object as test")
};

function eN(e) {
	const t = [];
	let n = -1;
	for (; ++n < e.length;) t[n] = Ls(e[n]);
	return Ms(r);

	function r(...i) {
		let l = -1;
		for (; ++l < t.length;)
			if (t[l].apply(this, i)) return !0;
		return !1
	}
}

function tN(e) {
	const t = e;
	return Ms(n);

	function n(r) {
		const i = r;
		let l;
		for (l in e)
			if (i[l] !== t[l]) return !1;
		return !0
	}
}

function nN(e) {
	return Ms(t);

	function t(n) {
		return n && n.type === e
	}
}

function Ms(e) {
	return t;

	function t(n, r, i) {
		return !!(iN(n) && e.call(this, n, typeof r == "number" ? r : void 0, i || void 0))
	}
}

function rN() {
	return !0
}

function iN(e) {
	return e !== null && typeof e == "object" && "type" in e
}
const Ky = [],
	lN = !0,
	Wu = !1,
	oN = "skip";

function e0(e, t, n, r) {
	let i;
	typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
	const l = Ls(i),
		o = r ? -1 : 1;
	s(e, void 0, [])();

	function s(a, u, c) {
		const f = a && typeof a == "object" ? a : {};
		if (typeof f.type == "string") {
			const d = typeof f.tagName == "string" ? f.tagName : typeof f.name == "string" ? f.name : void 0;
			Object.defineProperty(h, "name", {
				value: "node (" + (a.type + (d ? "<" + d + ">" : "")) + ")"
			})
		}
		return h;

		function h() {
			let d = Ky,
				p, x, S;
			if ((!t || l(a, u, c[c.length - 1] || void 0)) && (d = sN(n(a, c)), d[0] === Wu)) return d;
			if ("children" in a && a.children) {
				const m = a;
				if (m.children && d[0] !== oN)
					for (x = (r ? m.children.length : -1) + o, S = c.concat(m); x > -1 && x < m.children.length;) {
						const y = m.children[x];
						if (p = s(y, x, S)(), p[0] === Wu) return p;
						x = typeof p[1] == "number" ? p[1] : x + o
					}
			}
			return d
		}
	}
}

function sN(e) {
	return Array.isArray(e) ? e : typeof e == "number" ? [lN, e] : e == null ? Ky : [e]
}

function wf(e, t, n, r) {
	let i, l, o;
	typeof t == "function" && typeof n != "function" ? (l = void 0, o = t, i = n) : (l = t, o = n, i = r), e0(e, l, s, i);

	function s(a, u) {
		const c = u[u.length - 1],
			f = c ? c.children.indexOf(a) : void 0;
		return o(a, f, c)
	}
}
const qu = {}.hasOwnProperty,
	aN = {};

function uN(e, t) {
	const n = t || aN,
		r = new Map,
		i = new Map,
		l = new Map,
		o = {
			...qC,
			...n.handlers
		},
		s = {
			all: u,
			applyData: fN,
			definitionById: r,
			footnoteById: i,
			footnoteCounts: l,
			footnoteOrder: [],
			handlers: o,
			one: a,
			options: n,
			patch: cN,
			wrap: hN
		};
	return wf(e, function(c) {
		if (c.type === "definition" || c.type === "footnoteDefinition") {
			const f = c.type === "definition" ? r : i,
				h = String(c.identifier).toUpperCase();
			f.has(h) || f.set(h, c)
		}
	}), s;

	function a(c, f) {
		const h = c.type,
			d = s.handlers[h];
		if (qu.call(s.handlers, h) && d) return d(s, c, f);
		if (s.options.passThrough && s.options.passThrough.includes(h)) {
			if ("children" in c) {
				const {
					children: x,
					...S
				} = c, m = rs(S);
				return m.children = s.all(c), m
			}
			return rs(c)
		}
		return (s.options.unknownHandler || dN)(s, c, f)
	}

	function u(c) {
		const f = [];
		if ("children" in c) {
			const h = c.children;
			let d = -1;
			for (; ++d < h.length;) {
				const p = s.one(h[d], c);
				if (p) {
					if (d && h[d - 1].type === "break" && (!Array.isArray(p) && p.type === "text" && (p.value = Mh(p.value)), !Array.isArray(p) && p.type === "element")) {
						const x = p.children[0];
						x && x.type === "text" && (x.value = Mh(x.value))
					}
					Array.isArray(p) ? f.push(...p) : f.push(p)
				}
			}
		}
		return f
	}
}

function cN(e, t) {
	e.position && (t.position = eS(e))
}

function fN(e, t) {
	let n = t;
	if (e && e.data) {
		const r = e.data.hName,
			i = e.data.hChildren,
			l = e.data.hProperties;
		if (typeof r == "string")
			if (n.type === "element") n.tagName = r;
			else {
				const o = "children" in n ? n.children : [n];
				n = {
					type: "element",
					tagName: r,
					properties: {},
					children: o
				}
			} n.type === "element" && l && Object.assign(n.properties, rs(l)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i)
	}
	return n
}

function dN(e, t) {
	const n = t.data || {},
		r = "value" in t && !(qu.call(n, "hProperties") || qu.call(n, "hChildren")) ? {
			type: "text",
			value: t.value
		} : {
			type: "element",
			tagName: "div",
			properties: {},
			children: e.all(t)
		};
	return e.patch(t, r), e.applyData(t, r)
}

function hN(e, t) {
	const n = [];
	let r = -1;
	for (t && n.push({
			type: "text",
			value: `
`
		}); ++r < e.length;) r && n.push({
		type: "text",
		value: `
`
	}), n.push(e[r]);
	return t && e.length > 0 && n.push({
		type: "text",
		value: `
`
	}), n
}

function Mh(e) {
	let t = 0,
		n = e.charCodeAt(t);
	for (; n === 9 || n === 32;) t++, n = e.charCodeAt(t);
	return e.slice(t)
}

function Dh(e, t) {
	const n = uN(e, t),
		r = n.one(e, void 0),
		i = KC(n),
		l = Array.isArray(r) ? {
			type: "root",
			children: r
		} : r || {
			type: "root",
			children: []
		};
	return i && l.children.push({
		type: "text",
		value: `
`
	}, i), l
}

function pN(e, t) {
	return e && "run" in e ? async function(n, r) {
		const i = Dh(n, t);
		await e.run(i, r)
	}: function(n) {
		return Dh(n, t || e)
	}
}

function Rh(e) {
	if (e) throw e
}
var vo = Object.prototype.hasOwnProperty,
	t0 = Object.prototype.toString,
	zh = Object.defineProperty,
	Fh = Object.getOwnPropertyDescriptor,
	_h = function(t) {
		return typeof Array.isArray == "function" ? Array.isArray(t) : t0.call(t) === "[object Array]"
	},
	Bh = function(t) {
		if (!t || t0.call(t) !== "[object Object]") return !1;
		var n = vo.call(t, "constructor"),
			r = t.constructor && t.constructor.prototype && vo.call(t.constructor.prototype, "isPrototypeOf");
		if (t.constructor && !n && !r) return !1;
		var i;
		for (i in t);
		return typeof i > "u" || vo.call(t, i)
	},
	Uh = function(t, n) {
		zh && n.name === "__proto__" ? zh(t, n.name, {
			enumerable: !0,
			configurable: !0,
			value: n.newValue,
			writable: !0
		}) : t[n.name] = n.newValue
	},
	Vh = function(t, n) {
		if (n === "__proto__")
			if (vo.call(t, n)) {
				if (Fh) return Fh(t, n).value
			} else return;
		return t[n]
	},
	mN = function e() {
		var t, n, r, i, l, o, s = arguments[0],
			a = 1,
			u = arguments.length,
			c = !1;
		for (typeof s == "boolean" && (c = s, s = arguments[1] || {}, a = 2), (s == null || typeof s != "object" && typeof s != "function") && (s = {}); a < u; ++a)
			if (t = arguments[a], t != null)
				for (n in t) r = Vh(s, n), i = Vh(t, n), s !== i && (c && i && (Bh(i) || (l = _h(i))) ? (l ? (l = !1, o = r && _h(r) ? r : []) : o = r && Bh(r) ? r : {}, Uh(s, {
					name: n,
					newValue: e(c, o, i)
				})) : typeof i < "u" && Uh(s, {
					name: n,
					newValue: i
				}));
		return s
	};
const Sa = nc(mN);

function Zu(e) {
	if (typeof e != "object" || e === null) return !1;
	const t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}

function gN() {
	const e = [],
		t = {
			run: n,
			use: r
		};
	return t;

	function n(...i) {
		let l = -1;
		const o = i.pop();
		if (typeof o != "function") throw new TypeError("Expected function as last argument, not " + o);
		s(null, ...i);

		function s(a, ...u) {
			const c = e[++l];
			let f = -1;
			if (a) {
				o(a);
				return
			}
			for (; ++f < i.length;)(u[f] === null || u[f] === void 0) && (u[f] = i[f]);
			i = u, c ? yN(c, s)(...u) : o(null, ...u)
		}
	}

	function r(i) {
		if (typeof i != "function") throw new TypeError("Expected `middelware` to be a function, not " + i);
		return e.push(i), t
	}
}

function yN(e, t) {
	let n;
	return r;

	function r(...o) {
		const s = e.length > o.length;
		let a;
		s && o.push(i);
		try {
			a = e.apply(this, o)
		} catch (u) {
			const c = u;
			if (s && n) throw c;
			return i(c)
		}
		s || (a instanceof Promise ? a.then(l, i) : a instanceof Error ? i(a) : l(a))
	}

	function i(o, ...s) {
		n || (n = !0, t(o, ...s))
	}

	function l(o) {
		i(null, o)
	}
}
const Wt = {
	basename: xN,
	dirname: wN,
	extname: vN,
	join: kN,
	sep: "/"
};

function xN(e, t) {
	if (t !== void 0 && typeof t != "string") throw new TypeError('"ext" argument must be a string');
	Sl(e);
	let n = 0,
		r = -1,
		i = e.length,
		l;
	if (t === void 0 || t.length === 0 || t.length > e.length) {
		for (; i--;)
			if (e.codePointAt(i) === 47) {
				if (l) {
					n = i + 1;
					break
				}
			} else r < 0 && (l = !0, r = i + 1);
		return r < 0 ? "" : e.slice(n, r)
	}
	if (t === e) return "";
	let o = -1,
		s = t.length - 1;
	for (; i--;)
		if (e.codePointAt(i) === 47) {
			if (l) {
				n = i + 1;
				break
			}
		} else o < 0 && (l = !0, o = i + 1), s > -1 && (e.codePointAt(i) === t.codePointAt(s--) ? s < 0 && (r = i) : (s = -1, r = o));
	return n === r ? r = o : r < 0 && (r = e.length), e.slice(n, r)
}

function wN(e) {
	if (Sl(e), e.length === 0) return ".";
	let t = -1,
		n = e.length,
		r;
	for (; --n;)
		if (e.codePointAt(n) === 47) {
			if (r) {
				t = n;
				break
			}
		} else r || (r = !0);
	return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t)
}

function vN(e) {
	Sl(e);
	let t = e.length,
		n = -1,
		r = 0,
		i = -1,
		l = 0,
		o;
	for (; t--;) {
		const s = e.codePointAt(t);
		if (s === 47) {
			if (o) {
				r = t + 1;
				break
			}
			continue
		}
		n < 0 && (o = !0, n = t + 1), s === 46 ? i < 0 ? i = t : l !== 1 && (l = 1) : i > -1 && (l = -1)
	}
	return i < 0 || n < 0 || l === 0 || l === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n)
}

function kN(...e) {
	let t = -1,
		n;
	for (; ++t < e.length;) Sl(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
	return n === void 0 ? "." : SN(n)
}

function SN(e) {
	Sl(e);
	const t = e.codePointAt(0) === 47;
	let n = EN(e, !t);
	return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n
}

function EN(e, t) {
	let n = "",
		r = 0,
		i = -1,
		l = 0,
		o = -1,
		s, a;
	for (; ++o <= e.length;) {
		if (o < e.length) s = e.codePointAt(o);
		else {
			if (s === 47) break;
			s = 47
		}
		if (s === 47) {
			if (!(i === o - 1 || l === 1))
				if (i !== o - 1 && l === 2) {
					if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
						if (n.length > 2) {
							if (a = n.lastIndexOf("/"), a !== n.length - 1) {
								a < 0 ? (n = "", r = 0) : (n = n.slice(0, a), r = n.length - 1 - n.lastIndexOf("/")), i = o, l = 0;
								continue
							}
						} else if (n.length > 0) {
							n = "", r = 0, i = o, l = 0;
							continue
						}
					}
					t && (n = n.length > 0 ? n + "/.." : "..", r = 2)
				} else n.length > 0 ? n += "/" + e.slice(i + 1, o) : n = e.slice(i + 1, o), r = o - i - 1;
			i = o, l = 0
		} else s === 46 && l > -1 ? l++ : l = -1
	}
	return n
}

function Sl(e) {
	if (typeof e != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
}
const CN = {
	cwd: NN
};

function NN() {
	return "/"
}

function Qu(e) {
	return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === void 0)
}

function bN(e) {
	if (typeof e == "string") e = new URL(e);
	else if (!Qu(e)) {
		const t = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
		throw t.code = "ERR_INVALID_ARG_TYPE", t
	}
	if (e.protocol !== "file:") {
		const t = new TypeError("The URL must be of scheme file");
		throw t.code = "ERR_INVALID_URL_SCHEME", t
	}
	return TN(e)
}

function TN(e) {
	if (e.hostname !== "") {
		const r = new TypeError('File URL host must be "localhost" or empty on darwin');
		throw r.code = "ERR_INVALID_FILE_URL_HOST", r
	}
	const t = e.pathname;
	let n = -1;
	for (; ++n < t.length;)
		if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
			const r = t.codePointAt(n + 2);
			if (r === 70 || r === 102) {
				const i = new TypeError("File URL path must not include encoded / characters");
				throw i.code = "ERR_INVALID_FILE_URL_PATH", i
			}
		} return decodeURIComponent(t)
}
const Ea = ["history", "path", "basename", "stem", "extname", "dirname"];
class n0 {
	constructor(t) {
		let n;
		t ? Qu(t) ? n = {
			path: t
		} : typeof t == "string" || ON(t) ? n = {
			value: t
		} : n = t : n = {}, this.cwd = CN.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
		let r = -1;
		for (; ++r < Ea.length;) {
			const l = Ea[r];
			l in n && n[l] !== void 0 && n[l] !== null && (this[l] = l === "history" ? [...n[l]] : n[l])
		}
		let i;
		for (i in n) Ea.includes(i) || (this[i] = n[i])
	}
	get basename() {
		return typeof this.path == "string" ? Wt.basename(this.path) : void 0
	}
	set basename(t) {
		Na(t, "basename"), Ca(t, "basename"), this.path = Wt.join(this.dirname || "", t)
	}
	get dirname() {
		return typeof this.path == "string" ? Wt.dirname(this.path) : void 0
	}
	set dirname(t) {
		$h(this.basename, "dirname"), this.path = Wt.join(t || "", this.basename)
	}
	get extname() {
		return typeof this.path == "string" ? Wt.extname(this.path) : void 0
	}
	set extname(t) {
		if (Ca(t, "extname"), $h(this.dirname, "extname"), t) {
			if (t.codePointAt(0) !== 46) throw new Error("`extname` must start with `.`");
			if (t.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots")
		}
		this.path = Wt.join(this.dirname, this.stem + (t || ""))
	}
	get path() {
		return this.history[this.history.length - 1]
	}
	set path(t) {
		Qu(t) && (t = bN(t)), Na(t, "path"), this.path !== t && this.history.push(t)
	}
	get stem() {
		return typeof this.path == "string" ? Wt.basename(this.path, this.extname) : void 0
	}
	set stem(t) {
		Na(t, "stem"), Ca(t, "stem"), this.path = Wt.join(this.dirname || "", t + (this.extname || ""))
	}
	fail(t, n, r) {
		const i = this.message(t, n, r);
		throw i.fatal = !0, i
	}
	info(t, n, r) {
		const i = this.message(t, n, r);
		return i.fatal = void 0, i
	}
	message(t, n, r) {
		const i = new Ke(t, n, r);
		return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i
	}
	toString(t) {
		return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value)
	}
}

function Ca(e, t) {
	if (e && e.includes(Wt.sep)) throw new Error("`" + t + "` cannot be a path: did not expect `" + Wt.sep + "`")
}

function Na(e, t) {
	if (!e) throw new Error("`" + t + "` cannot be empty")
}

function $h(e, t) {
	if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too")
}

function ON(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e)
}
const AN = function(e) {
		const r = this.constructor.prototype,
			i = r[e],
			l = function() {
				return i.apply(l, arguments)
			};
		Object.setPrototypeOf(l, r);
		const o = Object.getOwnPropertyNames(i);
		for (const s of o) {
			const a = Object.getOwnPropertyDescriptor(i, s);
			a && Object.defineProperty(l, s, a)
		}
		return l
	},
	jN = {}.hasOwnProperty;
class vf extends AN {
	constructor() {
		super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = gN()
	}
	copy() {
		const t = new vf;
		let n = -1;
		for (; ++n < this.attachers.length;) {
			const r = this.attachers[n];
			t.use(...r)
		}
		return t.data(Sa(!0, {}, this.namespace)), t
	}
	data(t, n) {
		return typeof t == "string" ? arguments.length === 2 ? (Oa("data", this.frozen), this.namespace[t] = n, this) : jN.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (Oa("data", this.frozen), this.namespace = t, this) : this.namespace
	}
	freeze() {
		if (this.frozen) return this;
		const t = this;
		for (; ++this.freezeIndex < this.attachers.length;) {
			const [n, ...r] = this.attachers[this.freezeIndex];
			if (r[0] === !1) continue;
			r[0] === !0 && (r[0] = void 0);
			const i = n.call(t, ...r);
			typeof i == "function" && this.transformers.use(i)
		}
		return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this
	}
	parse(t) {
		this.freeze();
		const n = Zl(t),
			r = this.parser || this.Parser;
		return ba("parse", r), r(String(n), n)
	}
	process(t, n) {
		const r = this;
		return this.freeze(), ba("process", this.parser || this.Parser), Ta("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);

		function i(l, o) {
			const s = Zl(t),
				a = r.parse(s);
			r.run(a, s, function(c, f, h) {
				if (c || !f || !h) return u(c);
				const d = f,
					p = r.stringify(d, h);
				LN(p) ? h.value = p : h.result = p, u(c, h)
			});

			function u(c, f) {
				c || !f ? o(c) : l ? l(f) : n(void 0, f)
			}
		}
	}
	processSync(t) {
		let n = !1,
			r;
		return this.freeze(), ba("processSync", this.parser || this.Parser), Ta("processSync", this.compiler || this.Compiler), this.process(t, i), Wh("processSync", "process", n), r;

		function i(l, o) {
			n = !0, Rh(l), r = o
		}
	}
	run(t, n, r) {
		Hh(t), this.freeze();
		const i = this.transformers;
		return !r && typeof n == "function" && (r = n, n = void 0), r ? l(void 0, r) : new Promise(l);

		function l(o, s) {
			const a = Zl(n);
			i.run(t, a, u);

			function u(c, f, h) {
				const d = f || t;
				c ? s(c) : o ? o(d) : r(void 0, d, h)
			}
		}
	}
	runSync(t, n) {
		let r = !1,
			i;
		return this.run(t, n, l), Wh("runSync", "run", r), i;

		function l(o, s) {
			Rh(o), i = s, r = !0
		}
	}
	stringify(t, n) {
		this.freeze();
		const r = Zl(n),
			i = this.compiler || this.Compiler;
		return Ta("stringify", i), Hh(t), i(t, r)
	}
	use(t, ...n) {
		const r = this.attachers,
			i = this.namespace;
		if (Oa("use", this.frozen), t != null)
			if (typeof t == "function") a(t, n);
			else if (typeof t == "object") Array.isArray(t) ? s(t) : o(t);
		else throw new TypeError("Expected usable value, not `" + t + "`");
		return this;

		function l(u) {
			if (typeof u == "function") a(u, []);
			else if (typeof u == "object")
				if (Array.isArray(u)) {
					const [c, ...f] = u;
					a(c, f)
				} else o(u);
			else throw new TypeError("Expected usable value, not `" + u + "`")
		}

		function o(u) {
			if (!("plugins" in u) && !("settings" in u)) throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
			s(u.plugins), u.settings && (i.settings = Sa(!0, i.settings, u.settings))
		}

		function s(u) {
			let c = -1;
			if (u != null)
				if (Array.isArray(u))
					for (; ++c < u.length;) {
						const f = u[c];
						l(f)
					} else throw new TypeError("Expected a list of plugins, not `" + u + "`")
		}

		function a(u, c) {
			let f = -1,
				h = -1;
			for (; ++f < r.length;)
				if (r[f][0] === u) {
					h = f;
					break
				} if (h === -1) r.push([u, ...c]);
			else if (c.length > 0) {
				let [d, ...p] = c;
				const x = r[h][1];
				Zu(x) && Zu(d) && (d = Sa(!0, x, d)), r[h] = [u, d, ...p]
			}
		}
	}
}
const PN = new vf().freeze();

function ba(e, t) {
	if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `parser`")
}

function Ta(e, t) {
	if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `compiler`")
}

function Oa(e, t) {
	if (t) throw new Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
}

function Hh(e) {
	if (!Zu(e) || typeof e.type != "string") throw new TypeError("Expected node, got `" + e + "`")
}

function Wh(e, t, n) {
	if (!n) throw new Error("`" + e + "` finished async. Use `" + t + "` instead")
}

function Zl(e) {
	return IN(e) ? e : new n0(e)
}

function IN(e) {
	return !!(e && typeof e == "object" && "message" in e && "messages" in e)
}

function LN(e) {
	return typeof e == "string" || MN(e)
}

function MN(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e)
}
const qh = {}.hasOwnProperty,
	DN = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
	Zh = [],
	Qh = {
		allowDangerousHtml: !0
	},
	RN = /^(https?|ircs?|mailto|xmpp)$/i,
	zN = [{
		from: "astPlugins",
		id: "remove-buggy-html-in-markdown-parser"
	}, {
		from: "allowDangerousHtml",
		id: "remove-buggy-html-in-markdown-parser"
	}, {
		from: "allowNode",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "allowElement"
	}, {
		from: "allowedTypes",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "allowedElements"
	}, {
		from: "disallowedTypes",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "disallowedElements"
	}, {
		from: "escapeHtml",
		id: "remove-buggy-html-in-markdown-parser"
	}, {
		from: "includeElementIndex",
		id: "#remove-includeelementindex"
	}, {
		from: "includeNodeIndex",
		id: "change-includenodeindex-to-includeelementindex"
	}, {
		from: "linkTarget",
		id: "remove-linktarget"
	}, {
		from: "plugins",
		id: "change-plugins-to-remarkplugins",
		to: "remarkPlugins"
	}, {
		from: "rawSourcePos",
		id: "#remove-rawsourcepos"
	}, {
		from: "renderers",
		id: "change-renderers-to-components",
		to: "components"
	}, {
		from: "source",
		id: "change-source-to-children",
		to: "children"
	}, {
		from: "sourcePos",
		id: "#remove-sourcepos"
	}, {
		from: "transformImageUri",
		id: "#add-urltransform",
		to: "urlTransform"
	}, {
		from: "transformLinkUri",
		id: "#add-urltransform",
		to: "urlTransform"
	}];

function r0(e) {
	const t = e.allowedElements,
		n = e.allowElement,
		r = e.children || "",
		i = e.className,
		l = e.components,
		o = e.disallowedElements,
		s = e.rehypePlugins || Zh,
		a = e.remarkPlugins || Zh,
		u = e.remarkRehypeOptions ? {
			...e.remarkRehypeOptions,
			...Qh
		} : Qh,
		c = e.skipHtml,
		f = e.unwrapDisallowed,
		h = e.urlTransform || FN,
		d = PN().use(vC).use(a).use(pN, u).use(s),
		p = new n0;
	typeof r == "string" && (p.value = r);
	for (const y of zN) Object.hasOwn(e, y.from) && ("" + y.from + (y.to ? "use `" + y.to + "` instead" : "remove it") + DN + y.id, void 0);
	const x = d.parse(p);
	let S = d.runSync(x, p);
	return i && (S = {
		type: "element",
		tagName: "div",
		properties: {
			className: i
		},
		children: S.type === "root" ? S.children : [S]
	}), wf(S, m), oS(S, {
		Fragment: g.Fragment,
		components: l,
		ignoreInvalidStyle: !0,
		jsx: g.jsx,
		jsxs: g.jsxs,
		passKeys: !0,
		passNode: !0
	});

	function m(y, w, N) {
		if (y.type === "raw" && N && typeof w == "number") return c ? N.children.splice(w, 1) : N.children[w] = {
			type: "text",
			value: y.value
		}, w;
		if (y.type === "element") {
			let b;
			for (b in wa)
				if (qh.call(wa, b) && qh.call(y.properties, b)) {
					const E = y.properties[b],
						j = wa[b];
					(j === null || j.includes(y.tagName)) && (y.properties[b] = h(String(E || ""), b, y))
				}
		}
		if (y.type === "element") {
			let b = t ? !t.includes(y.tagName) : o ? o.includes(y.tagName) : !1;
			if (!b && n && typeof w == "number" && (b = !n(y, w, N)), b && N && typeof w == "number") return f && y.children ? N.children.splice(w, 1, ...y.children) : N.children.splice(w, 1), w
		}
	}
}

function FN(e) {
	return SS(e, RN)
}
var i0 = {
		color: void 0,
		size: void 0,
		className: void 0,
		style: void 0,
		attr: void 0
	},
	Gh = An.createContext && An.createContext(i0),
	_n = globalThis && globalThis.__assign || function() {
		return _n = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++) {
				t = arguments[n];
				for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
			}
			return e
		}, _n.apply(this, arguments)
	},
	_N = globalThis && globalThis.__rest || function(e, t) {
		var n = {};
		for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
		if (e != null && typeof Object.getOwnPropertySymbols == "function")
			for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
		return n
	};

function l0(e) {
	return e && e.map(function(t, n) {
		return An.createElement(t.tag, _n({
			key: n
		}, t.attr), l0(t.child))
	})
}

function hn(e) {
	return function(t) {
		return An.createElement(BN, _n({
			attr: _n({}, e.attr)
		}, t), l0(e.child))
	}
}

function BN(e) {
	var t = function(n) {
		var r = e.attr,
			i = e.size,
			l = e.title,
			o = _N(e, ["attr", "size", "title"]),
			s = i || n.size || "1em",
			a;
		return n.className && (a = n.className), e.className && (a = (a ? a + " " : "") + e.className), An.createElement("svg", _n({
			stroke: "currentColor",
			fill: "currentColor",
			strokeWidth: "0"
		}, n.attr, r, o, {
			className: a,
			style: _n(_n({
				color: e.color || n.color
			}, n.style), e.style),
			height: s,
			width: s,
			xmlns: "http://www.w3.org/2000/svg"
		}), l && An.createElement("title", null, l), e.children)
	};
	return Gh !== void 0 ? An.createElement(Gh.Consumer, null, function(n) {
		return t(n)
	}) : t(i0)
}

function qn(e) {
	return hn({
		tag: "svg",
		attr: {
			version: "1.2",
			baseProfile: "tiny",
			viewBox: "0 0 24 24"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8 8-3.582 8-8-3.581-8-8-8zm3.707 10.293c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293 2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l2.293 2.293 2.293-2.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-2.293 2.293 2.293 2.293z"
			}
		}]
	})(e)
}

function Yh(e, t) {
	const n = String(e);
	if (typeof t != "string") throw new TypeError("Expected character");
	let r = 0,
		i = n.indexOf(t);
	for (; i !== -1;) r++, i = n.indexOf(t, i + t.length);
	return r
}

function UN(e) {
	if (typeof e != "string") throw new TypeError("Expected a string");
	return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
}

function VN(e, t, n) {
	const i = Ls((n || {}).ignore || []),
		l = $N(t);
	let o = -1;
	for (; ++o < l.length;) e0(e, "text", s);

	function s(u, c) {
		let f = -1,
			h;
		for (; ++f < c.length;) {
			const d = c[f],
				p = h ? h.children : void 0;
			if (i(d, p ? p.indexOf(d) : void 0, h)) return;
			h = d
		}
		if (h) return a(u, c)
	}

	function a(u, c) {
		const f = c[c.length - 1],
			h = l[o][0],
			d = l[o][1];
		let p = 0;
		const S = f.children.indexOf(u);
		let m = !1,
			y = [];
		h.lastIndex = 0;
		let w = h.exec(u.value);
		for (; w;) {
			const N = w.index,
				b = {
					index: w.index,
					input: w.input,
					stack: [...c, u]
				};
			let E = d(...w, b);
			if (typeof E == "string" && (E = E.length > 0 ? {
					type: "text",
					value: E
				} : void 0), E === !1 ? h.lastIndex = N + 1 : (p !== N && y.push({
					type: "text",
					value: u.value.slice(p, N)
				}), Array.isArray(E) ? y.push(...E) : E && y.push(E), p = N + w[0].length, m = !0), !h.global) break;
			w = h.exec(u.value)
		}
		return m ? (p < u.value.length && y.push({
			type: "text",
			value: u.value.slice(p)
		}), f.children.splice(S, 1, ...y)) : y = [u], S + y.length
	}
}

function $N(e) {
	const t = [];
	if (!Array.isArray(e)) throw new TypeError("Expected find and replace tuple or list of tuples");
	const n = !e[0] || Array.isArray(e[0]) ? e : [e];
	let r = -1;
	for (; ++r < n.length;) {
		const i = n[r];
		t.push([HN(i[0]), WN(i[1])])
	}
	return t
}

function HN(e) {
	return typeof e == "string" ? new RegExp(UN(e), "g") : e
}

function WN(e) {
	return typeof e == "function" ? e : function() {
		return e
	}
}
const Aa = "phrasing",
	ja = ["autolink", "link", "image", "label"];

function qN() {
	return {
		transforms: [KN],
		enter: {
			literalAutolink: QN,
			literalAutolinkEmail: Pa,
			literalAutolinkHttp: Pa,
			literalAutolinkWww: Pa
		},
		exit: {
			literalAutolink: JN,
			literalAutolinkEmail: XN,
			literalAutolinkHttp: GN,
			literalAutolinkWww: YN
		}
	}
}

function ZN() {
	return {
		unsafe: [{
			character: "@",
			before: "[+\\-.\\w]",
			after: "[\\-.\\w]",
			inConstruct: Aa,
			notInConstruct: ja
		}, {
			character: ".",
			before: "[Ww]",
			after: "[\\-.\\w]",
			inConstruct: Aa,
			notInConstruct: ja
		}, {
			character: ":",
			before: "[ps]",
			after: "\\/",
			inConstruct: Aa,
			notInConstruct: ja
		}]
	}
}

function QN(e) {
	this.enter({
		type: "link",
		title: null,
		url: "",
		children: []
	}, e)
}

function Pa(e) {
	this.config.enter.autolinkProtocol.call(this, e)
}

function GN(e) {
	this.config.exit.autolinkProtocol.call(this, e)
}

function YN(e) {
	this.config.exit.data.call(this, e);
	const t = this.stack[this.stack.length - 1];
	t.type, t.url = "http://" + this.sliceSerialize(e)
}

function XN(e) {
	this.config.exit.autolinkEmail.call(this, e)
}

function JN(e) {
	this.exit(e)
}

function KN(e) {
	VN(e, [
		[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, e4],
		[/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, t4]
	], {
		ignore: ["link", "linkReference"]
	})
}

function e4(e, t, n, r, i) {
	let l = "";
	if (!o0(i) || (/^w/i.test(t) && (n = t + n, t = "", l = "http://"), !n4(n))) return !1;
	const o = r4(n + r);
	if (!o[0]) return !1;
	const s = {
		type: "link",
		title: null,
		url: l + t + o[0],
		children: [{
			type: "text",
			value: t + o[0]
		}]
	};
	return o[1] ? [s, {
		type: "text",
		value: o[1]
	}] : s
}

function t4(e, t, n, r) {
	return !o0(r, !0) || /[-\d_]$/.test(n) ? !1 : {
		type: "link",
		title: null,
		url: "mailto:" + t + "@" + n,
		children: [{
			type: "text",
			value: t + "@" + n
		}]
	}
}

function n4(e) {
	const t = e.split(".");
	return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])))
}

function r4(e) {
	const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
	if (!t) return [e, void 0];
	e = e.slice(0, t.index);
	let n = t[0],
		r = n.indexOf(")");
	const i = Yh(e, "(");
	let l = Yh(e, ")");
	for (; r !== -1 && i > l;) e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), l++;
	return [e, n]
}

function o0(e, t) {
	const n = e.input.charCodeAt(e.index - 1);
	return (e.index === 0 || hr(n) || js(n)) && (!t || n !== 47)
}
s0.peek = p4;

function i4() {
	return {
		enter: {
			gfmFootnoteDefinition: o4,
			gfmFootnoteDefinitionLabelString: s4,
			gfmFootnoteCall: c4,
			gfmFootnoteCallString: f4
		},
		exit: {
			gfmFootnoteDefinition: u4,
			gfmFootnoteDefinitionLabelString: a4,
			gfmFootnoteCall: h4,
			gfmFootnoteCallString: d4
		}
	}
}

function l4() {
	return {
		unsafe: [{
			character: "[",
			inConstruct: ["phrasing", "label", "reference"]
		}],
		handlers: {
			footnoteDefinition: m4,
			footnoteReference: s0
		}
	}
}

function o4(e) {
	this.enter({
		type: "footnoteDefinition",
		identifier: "",
		label: "",
		children: []
	}, e)
}

function s4() {
	this.buffer()
}

function a4(e) {
	const t = this.resume(),
		n = this.stack[this.stack.length - 1];
	n.type, n.label = t, n.identifier = Bt(this.sliceSerialize(e)).toLowerCase()
}

function u4(e) {
	this.exit(e)
}

function c4(e) {
	this.enter({
		type: "footnoteReference",
		identifier: "",
		label: ""
	}, e)
}

function f4() {
	this.buffer()
}

function d4(e) {
	const t = this.resume(),
		n = this.stack[this.stack.length - 1];
	n.type, n.label = t, n.identifier = Bt(this.sliceSerialize(e)).toLowerCase()
}

function h4(e) {
	this.exit(e)
}

function s0(e, t, n, r) {
	const i = n.createTracker(r);
	let l = i.move("[^");
	const o = n.enter("footnoteReference"),
		s = n.enter("reference");
	return l += i.move(n.safe(n.associationId(e), {
		...i.current(),
		before: l,
		after: "]"
	})), s(), o(), l += i.move("]"), l
}

function p4() {
	return "["
}

function m4(e, t, n, r) {
	const i = n.createTracker(r);
	let l = i.move("[^");
	const o = n.enter("footnoteDefinition"),
		s = n.enter("label");
	return l += i.move(n.safe(n.associationId(e), {
		...i.current(),
		before: l,
		after: "]"
	})), s(), l += i.move("]:" + (e.children && e.children.length > 0 ? " " : "")), i.shift(4), l += i.move(n.indentLines(n.containerFlow(e, i.current()), g4)), o(), l
}

function g4(e, t, n) {
	return t === 0 ? e : (n ? "" : "    ") + e
}
const y4 = ["autolink", "destinationLiteral", "destinationRaw", "reference", "titleQuote", "titleApostrophe"];
a0.peek = S4;

function x4() {
	return {
		canContainEols: ["delete"],
		enter: {
			strikethrough: v4
		},
		exit: {
			strikethrough: k4
		}
	}
}

function w4() {
	return {
		unsafe: [{
			character: "~",
			inConstruct: "phrasing",
			notInConstruct: y4
		}],
		handlers: {
			delete: a0
		}
	}
}

function v4(e) {
	this.enter({
		type: "delete",
		children: []
	}, e)
}

function k4(e) {
	this.exit(e)
}

function a0(e, t, n, r) {
	const i = n.createTracker(r),
		l = n.enter("strikethrough");
	let o = i.move("~~");
	return o += n.containerPhrasing(e, {
		...i.current(),
		before: o,
		after: "~"
	}), o += i.move("~~"), l(), o
}

function S4() {
	return "~"
}

function E4(e, t = {}) {
	const n = (t.align || []).concat(),
		r = t.stringLength || N4,
		i = [],
		l = [],
		o = [],
		s = [];
	let a = 0,
		u = -1;
	for (; ++u < e.length;) {
		const p = [],
			x = [];
		let S = -1;
		for (e[u].length > a && (a = e[u].length); ++S < e[u].length;) {
			const m = C4(e[u][S]);
			if (t.alignDelimiters !== !1) {
				const y = r(m);
				x[S] = y, (s[S] === void 0 || y > s[S]) && (s[S] = y)
			}
			p.push(m)
		}
		l[u] = p, o[u] = x
	}
	let c = -1;
	if (typeof n == "object" && "length" in n)
		for (; ++c < a;) i[c] = Xh(n[c]);
	else {
		const p = Xh(n);
		for (; ++c < a;) i[c] = p
	}
	c = -1;
	const f = [],
		h = [];
	for (; ++c < a;) {
		const p = i[c];
		let x = "",
			S = "";
		p === 99 ? (x = ":", S = ":") : p === 108 ? x = ":" : p === 114 && (S = ":");
		let m = t.alignDelimiters === !1 ? 1 : Math.max(1, s[c] - x.length - S.length);
		const y = x + "-".repeat(m) + S;
		t.alignDelimiters !== !1 && (m = x.length + m + S.length, m > s[c] && (s[c] = m), h[c] = m), f[c] = y
	}
	l.splice(1, 0, f), o.splice(1, 0, h), u = -1;
	const d = [];
	for (; ++u < l.length;) {
		const p = l[u],
			x = o[u];
		c = -1;
		const S = [];
		for (; ++c < a;) {
			const m = p[c] || "";
			let y = "",
				w = "";
			if (t.alignDelimiters !== !1) {
				const N = s[c] - (x[c] || 0),
					b = i[c];
				b === 114 ? y = " ".repeat(N) : b === 99 ? N % 2 ? (y = " ".repeat(N / 2 + .5), w = " ".repeat(N / 2 - .5)) : (y = " ".repeat(N / 2), w = y) : w = " ".repeat(N)
			}
			t.delimiterStart !== !1 && !c && S.push("|"), t.padding !== !1 && !(t.alignDelimiters === !1 && m === "") && (t.delimiterStart !== !1 || c) && S.push(" "), t.alignDelimiters !== !1 && S.push(y), S.push(m), t.alignDelimiters !== !1 && S.push(w), t.padding !== !1 && S.push(" "), (t.delimiterEnd !== !1 || c !== a - 1) && S.push("|")
		}
		d.push(t.delimiterEnd === !1 ? S.join("").replace(/ +$/, "") : S.join(""))
	}
	return d.join(`
`)
}

function C4(e) {
	return e == null ? "" : String(e)
}

function N4(e) {
	return e.length
}

function Xh(e) {
	const t = typeof e == "string" ? e.codePointAt(0) : 0;
	return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0
}

function b4(e, t, n, r) {
	const i = n.enter("blockquote"),
		l = n.createTracker(r);
	l.move("> "), l.shift(2);
	const o = n.indentLines(n.containerFlow(e, l.current()), T4);
	return i(), o
}

function T4(e, t, n) {
	return ">" + (n ? "" : " ") + e
}

function O4(e, t) {
	return Jh(e, t.inConstruct, !0) && !Jh(e, t.notInConstruct, !1)
}

function Jh(e, t, n) {
	if (typeof t == "string" && (t = [t]), !t || t.length === 0) return n;
	let r = -1;
	for (; ++r < t.length;)
		if (e.includes(t[r])) return !0;
	return !1
}

function Kh(e, t, n, r) {
	let i = -1;
	for (; ++i < n.unsafe.length;)
		if (n.unsafe[i].character === `
` && O4(n.stack, n.unsafe[i])) return /[ \t]/.test(r.before) ? "" : " ";
	return `\\
`
}

function A4(e, t) {
	const n = String(e);
	let r = n.indexOf(t),
		i = r,
		l = 0,
		o = 0;
	if (typeof t != "string") throw new TypeError("Expected substring");
	for (; r !== -1;) r === i ? ++l > o && (o = l) : l = 1, i = r + t.length, r = n.indexOf(t, i);
	return o
}

function j4(e, t) {
	return !!(t.options.fences === !1 && e.value && !e.lang && /[^ \r\n]/.test(e.value) && !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))
}

function P4(e) {
	const t = e.options.fence || "`";
	if (t !== "`" && t !== "~") throw new Error("Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`");
	return t
}

function I4(e, t, n, r) {
	const i = P4(n),
		l = e.value || "",
		o = i === "`" ? "GraveAccent" : "Tilde";
	if (j4(e, n)) {
		const f = n.enter("codeIndented"),
			h = n.indentLines(l, L4);
		return f(), h
	}
	const s = n.createTracker(r),
		a = i.repeat(Math.max(A4(l, i) + 1, 3)),
		u = n.enter("codeFenced");
	let c = s.move(a);
	if (e.lang) {
		const f = n.enter(`codeFencedLang${o}`);
		c += s.move(n.safe(e.lang, {
			before: c,
			after: " ",
			encode: ["`"],
			...s.current()
		})), f()
	}
	if (e.lang && e.meta) {
		const f = n.enter(`codeFencedMeta${o}`);
		c += s.move(" "), c += s.move(n.safe(e.meta, {
			before: c,
			after: `
`,
			encode: ["`"],
			...s.current()
		})), f()
	}
	return c += s.move(`
`), l && (c += s.move(l + `
`)), c += s.move(a), u(), c
}

function L4(e, t, n) {
	return (n ? "" : "    ") + e
}

function kf(e) {
	const t = e.options.quote || '"';
	if (t !== '"' && t !== "'") throw new Error("Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`");
	return t
}

function M4(e, t, n, r) {
	const i = kf(n),
		l = i === '"' ? "Quote" : "Apostrophe",
		o = n.enter("definition");
	let s = n.enter("label");
	const a = n.createTracker(r);
	let u = a.move("[");
	return u += a.move(n.safe(n.associationId(e), {
		before: u,
		after: "]",
		...a.current()
	})), u += a.move("]: "), s(), !e.url || /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), u += a.move("<"), u += a.move(n.safe(e.url, {
		before: u,
		after: ">",
		...a.current()
	})), u += a.move(">")) : (s = n.enter("destinationRaw"), u += a.move(n.safe(e.url, {
		before: u,
		after: e.title ? " " : `
`,
		...a.current()
	}))), s(), e.title && (s = n.enter(`title${l}`), u += a.move(" " + i), u += a.move(n.safe(e.title, {
		before: u,
		after: i,
		...a.current()
	})), u += a.move(i), s()), o(), u
}

function D4(e) {
	const t = e.options.emphasis || "*";
	if (t !== "*" && t !== "_") throw new Error("Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`");
	return t
}
u0.peek = R4;

function u0(e, t, n, r) {
	const i = D4(n),
		l = n.enter("emphasis"),
		o = n.createTracker(r);
	let s = o.move(i);
	return s += o.move(n.containerPhrasing(e, {
		before: s,
		after: i,
		...o.current()
	})), s += o.move(i), l(), s
}

function R4(e, t, n) {
	return n.options.emphasis || "*"
}

function z4(e, t) {
	let n = !1;
	return wf(e, function(r) {
		if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break") return n = !0, Wu
	}), !!((!e.depth || e.depth < 3) && df(e) && (t.options.setext || n))
}

function F4(e, t, n, r) {
	const i = Math.max(Math.min(6, e.depth || 1), 1),
		l = n.createTracker(r);
	if (z4(e, n)) {
		const c = n.enter("headingSetext"),
			f = n.enter("phrasing"),
			h = n.containerPhrasing(e, {
				...l.current(),
				before: `
`,
				after: `
`
			});
		return f(), c(), h + `
` + (i === 1 ? "=" : "-").repeat(h.length - (Math.max(h.lastIndexOf("\r"), h.lastIndexOf(`
`)) + 1))
	}
	const o = "#".repeat(i),
		s = n.enter("headingAtx"),
		a = n.enter("phrasing");
	l.move(o + " ");
	let u = n.containerPhrasing(e, {
		before: "# ",
		after: `
`,
		...l.current()
	});
	return /^[\t ]/.test(u) && (u = "&#x" + u.charCodeAt(0).toString(16).toUpperCase() + ";" + u.slice(1)), u = u ? o + " " + u : o, n.options.closeAtx && (u += " " + o), a(), s(), u
}
c0.peek = _4;

function c0(e) {
	return e.value || ""
}

function _4() {
	return "<"
}
f0.peek = B4;

function f0(e, t, n, r) {
	const i = kf(n),
		l = i === '"' ? "Quote" : "Apostrophe",
		o = n.enter("image");
	let s = n.enter("label");
	const a = n.createTracker(r);
	let u = a.move("![");
	return u += a.move(n.safe(e.alt, {
		before: u,
		after: "]",
		...a.current()
	})), u += a.move("]("), s(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), u += a.move("<"), u += a.move(n.safe(e.url, {
		before: u,
		after: ">",
		...a.current()
	})), u += a.move(">")) : (s = n.enter("destinationRaw"), u += a.move(n.safe(e.url, {
		before: u,
		after: e.title ? " " : ")",
		...a.current()
	}))), s(), e.title && (s = n.enter(`title${l}`), u += a.move(" " + i), u += a.move(n.safe(e.title, {
		before: u,
		after: i,
		...a.current()
	})), u += a.move(i), s()), u += a.move(")"), o(), u
}

function B4() {
	return "!"
}
d0.peek = U4;

function d0(e, t, n, r) {
	const i = e.referenceType,
		l = n.enter("imageReference");
	let o = n.enter("label");
	const s = n.createTracker(r);
	let a = s.move("![");
	const u = n.safe(e.alt, {
		before: a,
		after: "]",
		...s.current()
	});
	a += s.move(u + "]["), o();
	const c = n.stack;
	n.stack = [], o = n.enter("reference");
	const f = n.safe(n.associationId(e), {
		before: a,
		after: "]",
		...s.current()
	});
	return o(), n.stack = c, l(), i === "full" || !u || u !== f ? a += s.move(f + "]") : i === "shortcut" ? a = a.slice(0, -1) : a += s.move("]"), a
}

function U4() {
	return "!"
}
h0.peek = V4;

function h0(e, t, n) {
	let r = e.value || "",
		i = "`",
		l = -1;
	for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r);) i += "`";
	for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++l < n.unsafe.length;) {
		const o = n.unsafe[l],
			s = n.compilePattern(o);
		let a;
		if (o.atBreak)
			for (; a = s.exec(r);) {
				let u = a.index;
				r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13 && u--, r = r.slice(0, u) + " " + r.slice(a.index + 1)
			}
	}
	return i + r + i
}

function V4() {
	return "`"
}

function p0(e, t) {
	const n = df(e);
	return !!(!t.options.resourceLink && e.url && !e.title && e.children && e.children.length === 1 && e.children[0].type === "text" && (n === e.url || "mailto:" + n === e.url) && /^[a-z][a-z+.-]+:/i.test(e.url) && !/[\0- <>\u007F]/.test(e.url))
}
m0.peek = $4;

function m0(e, t, n, r) {
	const i = kf(n),
		l = i === '"' ? "Quote" : "Apostrophe",
		o = n.createTracker(r);
	let s, a;
	if (p0(e, n)) {
		const c = n.stack;
		n.stack = [], s = n.enter("autolink");
		let f = o.move("<");
		return f += o.move(n.containerPhrasing(e, {
			before: f,
			after: ">",
			...o.current()
		})), f += o.move(">"), s(), n.stack = c, f
	}
	s = n.enter("link"), a = n.enter("label");
	let u = o.move("[");
	return u += o.move(n.containerPhrasing(e, {
		before: u,
		after: "](",
		...o.current()
	})), u += o.move("]("), a(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (a = n.enter("destinationLiteral"), u += o.move("<"), u += o.move(n.safe(e.url, {
		before: u,
		after: ">",
		...o.current()
	})), u += o.move(">")) : (a = n.enter("destinationRaw"), u += o.move(n.safe(e.url, {
		before: u,
		after: e.title ? " " : ")",
		...o.current()
	}))), a(), e.title && (a = n.enter(`title${l}`), u += o.move(" " + i), u += o.move(n.safe(e.title, {
		before: u,
		after: i,
		...o.current()
	})), u += o.move(i), a()), u += o.move(")"), s(), u
}

function $4(e, t, n) {
	return p0(e, n) ? "<" : "["
}
g0.peek = H4;

function g0(e, t, n, r) {
	const i = e.referenceType,
		l = n.enter("linkReference");
	let o = n.enter("label");
	const s = n.createTracker(r);
	let a = s.move("[");
	const u = n.containerPhrasing(e, {
		before: a,
		after: "]",
		...s.current()
	});
	a += s.move(u + "]["), o();
	const c = n.stack;
	n.stack = [], o = n.enter("reference");
	const f = n.safe(n.associationId(e), {
		before: a,
		after: "]",
		...s.current()
	});
	return o(), n.stack = c, l(), i === "full" || !u || u !== f ? a += s.move(f + "]") : i === "shortcut" ? a = a.slice(0, -1) : a += s.move("]"), a
}

function H4() {
	return "["
}

function Sf(e) {
	const t = e.options.bullet || "*";
	if (t !== "*" && t !== "+" && t !== "-") throw new Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
	return t
}

function W4(e) {
	const t = Sf(e),
		n = e.options.bulletOther;
	if (!n) return t === "*" ? "-" : "*";
	if (n !== "*" && n !== "+" && n !== "-") throw new Error("Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
	if (n === t) throw new Error("Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different");
	return n
}

function q4(e) {
	const t = e.options.bulletOrdered || ".";
	if (t !== "." && t !== ")") throw new Error("Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`");
	return t
}

function y0(e) {
	const t = e.options.rule || "*";
	if (t !== "*" && t !== "-" && t !== "_") throw new Error("Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`");
	return t
}

function Z4(e, t, n, r) {
	const i = n.enter("list"),
		l = n.bulletCurrent;
	let o = e.ordered ? q4(n) : Sf(n);
	const s = e.ordered ? o === "." ? ")" : "." : W4(n);
	let a = t && n.bulletLastUsed ? o === n.bulletLastUsed : !1;
	if (!e.ordered) {
		const c = e.children ? e.children[0] : void 0;
		if ((o === "*" || o === "-") && c && (!c.children || !c.children[0]) && n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (a = !0), y0(n) === o && c) {
			let f = -1;
			for (; ++f < e.children.length;) {
				const h = e.children[f];
				if (h && h.type === "listItem" && h.children && h.children[0] && h.children[0].type === "thematicBreak") {
					a = !0;
					break
				}
			}
		}
	}
	a && (o = s), n.bulletCurrent = o;
	const u = n.containerFlow(e, r);
	return n.bulletLastUsed = o, n.bulletCurrent = l, i(), u
}

function Q4(e) {
	const t = e.options.listItemIndent || "one";
	if (t !== "tab" && t !== "one" && t !== "mixed") throw new Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
	return t
}

function G4(e, t, n, r) {
	const i = Q4(n);
	let l = n.bulletCurrent || Sf(n);
	t && t.type === "list" && t.ordered && (l = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + l);
	let o = l.length + 1;
	(i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (o = Math.ceil(o / 4) * 4);
	const s = n.createTracker(r);
	s.move(l + " ".repeat(o - l.length)), s.shift(o);
	const a = n.enter("listItem"),
		u = n.indentLines(n.containerFlow(e, s.current()), c);
	return a(), u;

	function c(f, h, d) {
		return h ? (d ? "" : " ".repeat(o)) + f : (d ? l : l + " ".repeat(o - l.length)) + f
	}
}

function Y4(e, t, n, r) {
	const i = n.enter("paragraph"),
		l = n.enter("phrasing"),
		o = n.containerPhrasing(e, r);
	return l(), i(), o
}
const X4 = Ls(["break", "delete", "emphasis", "footnote", "footnoteReference", "image", "imageReference", "inlineCode", "link", "linkReference", "strong", "text"]);

function J4(e, t, n, r) {
	return (e.children.some(function(o) {
		return X4(o)
	}) ? n.containerPhrasing : n.containerFlow).call(n, e, r)
}

function K4(e) {
	const t = e.options.strong || "*";
	if (t !== "*" && t !== "_") throw new Error("Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`");
	return t
}
x0.peek = eb;

function x0(e, t, n, r) {
	const i = K4(n),
		l = n.enter("strong"),
		o = n.createTracker(r);
	let s = o.move(i + i);
	return s += o.move(n.containerPhrasing(e, {
		before: s,
		after: i,
		...o.current()
	})), s += o.move(i + i), l(), s
}

function eb(e, t, n) {
	return n.options.strong || "*"
}

function tb(e, t, n, r) {
	return n.safe(e.value, r)
}

function nb(e) {
	const t = e.options.ruleRepetition || 3;
	if (t < 3) throw new Error("Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more");
	return t
}

function rb(e, t, n) {
	const r = (y0(n) + (n.options.ruleSpaces ? " " : "")).repeat(nb(n));
	return n.options.ruleSpaces ? r.slice(0, -1) : r
}
const w0 = {
	blockquote: b4,
	break: Kh,
	code: I4,
	definition: M4,
	emphasis: u0,
	hardBreak: Kh,
	heading: F4,
	html: c0,
	image: f0,
	imageReference: d0,
	inlineCode: h0,
	link: m0,
	linkReference: g0,
	list: Z4,
	listItem: G4,
	paragraph: Y4,
	root: J4,
	strong: x0,
	text: tb,
	thematicBreak: rb
};

function ib() {
	return {
		enter: {
			table: lb,
			tableData: ep,
			tableHeader: ep,
			tableRow: sb
		},
		exit: {
			codeText: ab,
			table: ob,
			tableData: Ia,
			tableHeader: Ia,
			tableRow: Ia
		}
	}
}

function lb(e) {
	const t = e._align;
	this.enter({
		type: "table",
		align: t.map(function(n) {
			return n === "none" ? null : n
		}),
		children: []
	}, e), this.data.inTable = !0
}

function ob(e) {
	this.exit(e), this.data.inTable = void 0
}

function sb(e) {
	this.enter({
		type: "tableRow",
		children: []
	}, e)
}

function Ia(e) {
	this.exit(e)
}

function ep(e) {
	this.enter({
		type: "tableCell",
		children: []
	}, e)
}

function ab(e) {
	let t = this.resume();
	this.data.inTable && (t = t.replace(/\\([\\|])/g, ub));
	const n = this.stack[this.stack.length - 1];
	n.type, n.value = t, this.exit(e)
}

function ub(e, t) {
	return t === "|" ? t : e
}

function cb(e) {
	const t = e || {},
		n = t.tableCellPadding,
		r = t.tablePipeAlign,
		i = t.stringLength,
		l = n ? " " : "|";
	return {
		unsafe: [{
			character: "\r",
			inConstruct: "tableCell"
		}, {
			character: `
`,
			inConstruct: "tableCell"
		}, {
			atBreak: !0,
			character: "|",
			after: "[	 :-]"
		}, {
			character: "|",
			inConstruct: "tableCell"
		}, {
			atBreak: !0,
			character: ":",
			after: "-"
		}, {
			atBreak: !0,
			character: "-",
			after: "[:|-]"
		}],
		handlers: {
			inlineCode: h,
			table: o,
			tableCell: a,
			tableRow: s
		}
	};

	function o(d, p, x, S) {
		return u(c(d, x, S), d.align)
	}

	function s(d, p, x, S) {
		const m = f(d, x, S),
			y = u([m]);
		return y.slice(0, y.indexOf(`
`))
	}

	function a(d, p, x, S) {
		const m = x.enter("tableCell"),
			y = x.enter("phrasing"),
			w = x.containerPhrasing(d, {
				...S,
				before: l,
				after: l
			});
		return y(), m(), w
	}

	function u(d, p) {
		return E4(d, {
			align: p,
			alignDelimiters: r,
			padding: n,
			stringLength: i
		})
	}

	function c(d, p, x) {
		const S = d.children;
		let m = -1;
		const y = [],
			w = p.enter("table");
		for (; ++m < S.length;) y[m] = f(S[m], p, x);
		return w(), y
	}

	function f(d, p, x) {
		const S = d.children;
		let m = -1;
		const y = [],
			w = p.enter("tableRow");
		for (; ++m < S.length;) y[m] = a(S[m], d, p, x);
		return w(), y
	}

	function h(d, p, x) {
		let S = w0.inlineCode(d, p, x);
		return x.stack.includes("tableCell") && (S = S.replace(/\|/g, "\\$&")), S
	}
}

function fb() {
	return {
		exit: {
			taskListCheckValueChecked: tp,
			taskListCheckValueUnchecked: tp,
			paragraph: hb
		}
	}
}

function db() {
	return {
		unsafe: [{
			atBreak: !0,
			character: "-",
			after: "[:|-]"
		}],
		handlers: {
			listItem: pb
		}
	}
}

function tp(e) {
	const t = this.stack[this.stack.length - 2];
	t.type, t.checked = e.type === "taskListCheckValueChecked"
}

function hb(e) {
	const t = this.stack[this.stack.length - 2];
	if (t && t.type === "listItem" && typeof t.checked == "boolean") {
		const n = this.stack[this.stack.length - 1];
		n.type;
		const r = n.children[0];
		if (r && r.type === "text") {
			const i = t.children;
			let l = -1,
				o;
			for (; ++l < i.length;) {
				const s = i[l];
				if (s.type === "paragraph") {
					o = s;
					break
				}
			}
			o === n && (r.value = r.value.slice(1), r.value.length === 0 ? n.children.shift() : n.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, n.position.start = Object.assign({}, r.position.start)))
		}
	}
	this.exit(e)
}

function pb(e, t, n, r) {
	const i = e.children[0],
		l = typeof e.checked == "boolean" && i && i.type === "paragraph",
		o = "[" + (e.checked ? "x" : " ") + "] ",
		s = n.createTracker(r);
	l && s.move(o);
	let a = w0.listItem(e, t, n, {
		...r,
		...s.current()
	});
	return l && (a = a.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), a;

	function u(c) {
		return c + o
	}
}

function mb() {
	return [qN(), i4(), x4(), ib(), fb()]
}

function gb(e) {
	return {
		extensions: [ZN(), l4(), w4(), cb(e), db()]
	}
}
const yb = {
		tokenize: Eb,
		partial: !0
	},
	v0 = {
		tokenize: Cb,
		partial: !0
	},
	k0 = {
		tokenize: Nb,
		partial: !0
	},
	S0 = {
		tokenize: bb,
		partial: !0
	},
	xb = {
		tokenize: Tb,
		partial: !0
	},
	E0 = {
		tokenize: kb,
		previous: N0
	},
	C0 = {
		tokenize: Sb,
		previous: b0
	},
	pn = {
		tokenize: vb,
		previous: T0
	},
	Yt = {};

function wb() {
	return {
		text: Yt
	}
}
let Gn = 48;
for (; Gn < 123;) Yt[Gn] = pn, Gn++, Gn === 58 ? Gn = 65 : Gn === 91 && (Gn = 97);
Yt[43] = pn;
Yt[45] = pn;
Yt[46] = pn;
Yt[95] = pn;
Yt[72] = [pn, C0];
Yt[104] = [pn, C0];
Yt[87] = [pn, E0];
Yt[119] = [pn, E0];

function vb(e, t, n) {
	const r = this;
	let i, l;
	return o;

	function o(f) {
		return !Gu(f) || !T0.call(r, r.previous) || Ef(r.events) ? n(f) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), s(f))
	}

	function s(f) {
		return Gu(f) ? (e.consume(f), s) : f === 64 ? (e.consume(f), a) : n(f)
	}

	function a(f) {
		return f === 46 ? e.check(xb, c, u)(f) : f === 45 || f === 95 || We(f) ? (l = !0, e.consume(f), a) : c(f)
	}

	function u(f) {
		return e.consume(f), i = !0, a
	}

	function c(f) {
		return l && i && Qe(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(f)) : n(f)
	}
}

function kb(e, t, n) {
	const r = this;
	return i;

	function i(o) {
		return o !== 87 && o !== 119 || !N0.call(r, r.previous) || Ef(r.events) ? n(o) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(yb, e.attempt(v0, e.attempt(k0, l), n), n)(o))
	}

	function l(o) {
		return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(o)
	}
}

function Sb(e, t, n) {
	const r = this;
	let i = "",
		l = !1;
	return o;

	function o(f) {
		return (f === 72 || f === 104) && b0.call(r, r.previous) && !Ef(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(f), e.consume(f), s) : n(f)
	}

	function s(f) {
		if (Qe(f) && i.length < 5) return i += String.fromCodePoint(f), e.consume(f), s;
		if (f === 58) {
			const h = i.toLowerCase();
			if (h === "http" || h === "https") return e.consume(f), a
		}
		return n(f)
	}

	function a(f) {
		return f === 47 ? (e.consume(f), l ? u : (l = !0, a)) : n(f)
	}

	function u(f) {
		return f === null || Ko(f) || fe(f) || hr(f) || js(f) ? n(f) : e.attempt(v0, e.attempt(k0, c), n)(f)
	}

	function c(f) {
		return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(f)
	}
}

function Eb(e, t, n) {
	let r = 0;
	return i;

	function i(o) {
		return (o === 87 || o === 119) && r < 3 ? (r++, e.consume(o), i) : o === 46 && r === 3 ? (e.consume(o), l) : n(o)
	}

	function l(o) {
		return o === null ? n(o) : t(o)
	}
}

function Cb(e, t, n) {
	let r, i, l;
	return o;

	function o(u) {
		return u === 46 || u === 95 ? e.check(S0, a, s)(u) : u === null || fe(u) || hr(u) || u !== 45 && js(u) ? a(u) : (l = !0, e.consume(u), o)
	}

	function s(u) {
		return u === 95 ? r = !0 : (i = r, r = void 0), e.consume(u), o
	}

	function a(u) {
		return i || r || !l ? n(u) : t(u)
	}
}

function Nb(e, t) {
	let n = 0,
		r = 0;
	return i;

	function i(o) {
		return o === 40 ? (n++, e.consume(o), i) : o === 41 && r < n ? l(o) : o === 33 || o === 34 || o === 38 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 60 || o === 63 || o === 93 || o === 95 || o === 126 ? e.check(S0, t, l)(o) : o === null || fe(o) || hr(o) ? t(o) : (e.consume(o), i)
	}

	function l(o) {
		return o === 41 && r++, e.consume(o), i
	}
}

function bb(e, t, n) {
	return r;

	function r(s) {
		return s === 33 || s === 34 || s === 39 || s === 41 || s === 42 || s === 44 || s === 46 || s === 58 || s === 59 || s === 63 || s === 95 || s === 126 ? (e.consume(s), r) : s === 38 ? (e.consume(s), l) : s === 93 ? (e.consume(s), i) : s === 60 || s === null || fe(s) || hr(s) ? t(s) : n(s)
	}

	function i(s) {
		return s === null || s === 40 || s === 91 || fe(s) || hr(s) ? t(s) : r(s)
	}

	function l(s) {
		return Qe(s) ? o(s) : n(s)
	}

	function o(s) {
		return s === 59 ? (e.consume(s), r) : Qe(s) ? (e.consume(s), o) : n(s)
	}
}

function Tb(e, t, n) {
	return r;

	function r(l) {
		return e.consume(l), i
	}

	function i(l) {
		return We(l) ? n(l) : t(l)
	}
}

function N0(e) {
	return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || fe(e)
}

function b0(e) {
	return !Qe(e)
}

function T0(e) {
	return !(e === 47 || Gu(e))
}

function Gu(e) {
	return e === 43 || e === 45 || e === 46 || e === 95 || We(e)
}

function Ef(e) {
	let t = e.length,
		n = !1;
	for (; t--;) {
		const r = e[t][1];
		if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
			n = !0;
			break
		}
		if (r._gfmAutolinkLiteralWalkedInto) {
			n = !1;
			break
		}
	}
	return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n
}
const Ob = {
	tokenize: Rb,
	partial: !0
};

function Ab() {
	return {
		document: {
			91: {
				tokenize: Lb,
				continuation: {
					tokenize: Mb
				},
				exit: Db
			}
		},
		text: {
			91: {
				tokenize: Ib
			},
			93: {
				add: "after",
				tokenize: jb,
				resolveTo: Pb
			}
		}
	}
}

function jb(e, t, n) {
	const r = this;
	let i = r.events.length;
	const l = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
	let o;
	for (; i--;) {
		const a = r.events[i][1];
		if (a.type === "labelImage") {
			o = a;
			break
		}
		if (a.type === "gfmFootnoteCall" || a.type === "labelLink" || a.type === "label" || a.type === "image" || a.type === "link") break
	}
	return s;

	function s(a) {
		if (!o || !o._balanced) return n(a);
		const u = Bt(r.sliceSerialize({
			start: o.end,
			end: r.now()
		}));
		return u.codePointAt(0) !== 94 || !l.includes(u.slice(1)) ? n(a) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(a), e.exit("gfmFootnoteCallLabelMarker"), t(a))
	}
}

function Pb(e, t) {
	let n = e.length;
	for (; n--;)
		if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
			e[n][1];
			break
		} e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
	const r = {
			type: "gfmFootnoteCall",
			start: Object.assign({}, e[n + 3][1].start),
			end: Object.assign({}, e[e.length - 1][1].end)
		},
		i = {
			type: "gfmFootnoteCallMarker",
			start: Object.assign({}, e[n + 3][1].end),
			end: Object.assign({}, e[n + 3][1].end)
		};
	i.end.column++, i.end.offset++, i.end._bufferIndex++;
	const l = {
			type: "gfmFootnoteCallString",
			start: Object.assign({}, i.end),
			end: Object.assign({}, e[e.length - 1][1].start)
		},
		o = {
			type: "chunkString",
			contentType: "string",
			start: Object.assign({}, l.start),
			end: Object.assign({}, l.end)
		},
		s = [e[n + 1], e[n + 2],
			["enter", r, t], e[n + 3], e[n + 4],
			["enter", i, t],
			["exit", i, t],
			["enter", l, t],
			["enter", o, t],
			["exit", o, t],
			["exit", l, t], e[e.length - 2], e[e.length - 1],
			["exit", r, t]
		];
	return e.splice(n, e.length - n + 1, ...s), e
}

function Ib(e, t, n) {
	const r = this,
		i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
	let l = 0,
		o;
	return s;

	function s(f) {
		return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(f), e.exit("gfmFootnoteCallLabelMarker"), a
	}

	function a(f) {
		return f !== 94 ? n(f) : (e.enter("gfmFootnoteCallMarker"), e.consume(f), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", u)
	}

	function u(f) {
		if (l > 999 || f === 93 && !o || f === null || f === 91 || fe(f)) return n(f);
		if (f === 93) {
			e.exit("chunkString");
			const h = e.exit("gfmFootnoteCallString");
			return i.includes(Bt(r.sliceSerialize(h))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(f), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(f)
		}
		return fe(f) || (o = !0), l++, e.consume(f), f === 92 ? c : u
	}

	function c(f) {
		return f === 91 || f === 92 || f === 93 ? (e.consume(f), l++, u) : u(f)
	}
}

function Lb(e, t, n) {
	const r = this,
		i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
	let l, o = 0,
		s;
	return a;

	function a(p) {
		return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(p), e.exit("gfmFootnoteDefinitionLabelMarker"), u
	}

	function u(p) {
		return p === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(p), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", c) : n(p)
	}

	function c(p) {
		if (o > 999 || p === 93 && !s || p === null || p === 91 || fe(p)) return n(p);
		if (p === 93) {
			e.exit("chunkString");
			const x = e.exit("gfmFootnoteDefinitionLabelString");
			return l = Bt(r.sliceSerialize(x)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(p), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), h
		}
		return fe(p) || (s = !0), o++, e.consume(p), p === 92 ? f : c
	}

	function f(p) {
		return p === 91 || p === 92 || p === 93 ? (e.consume(p), o++, c) : c(p)
	}

	function h(p) {
		return p === 58 ? (e.enter("definitionMarker"), e.consume(p), e.exit("definitionMarker"), i.includes(l) || i.push(l), K(e, d, "gfmFootnoteDefinitionWhitespace")) : n(p)
	}

	function d(p) {
		return t(p)
	}
}

function Mb(e, t, n) {
	return e.check(kl, t, e.attempt(Ob, t, n))
}

function Db(e) {
	e.exit("gfmFootnoteDefinition")
}

function Rb(e, t, n) {
	const r = this;
	return K(e, i, "gfmFootnoteDefinitionIndent", 4 + 1);

	function i(l) {
		const o = r.events[r.events.length - 1];
		return o && o[1].type === "gfmFootnoteDefinitionIndent" && o[2].sliceSerialize(o[1], !0).length === 4 ? t(l) : n(l)
	}
}

function zb(e) {
	let n = (e || {}).singleTilde;
	const r = {
		tokenize: l,
		resolveAll: i
	};
	return n == null && (n = !0), {
		text: {
			126: r
		},
		insideSpan: {
			null: [r]
		},
		attentionMarkers: {
			null: [126]
		}
	};

	function i(o, s) {
		let a = -1;
		for (; ++a < o.length;)
			if (o[a][0] === "enter" && o[a][1].type === "strikethroughSequenceTemporary" && o[a][1]._close) {
				let u = a;
				for (; u--;)
					if (o[u][0] === "exit" && o[u][1].type === "strikethroughSequenceTemporary" && o[u][1]._open && o[a][1].end.offset - o[a][1].start.offset === o[u][1].end.offset - o[u][1].start.offset) {
						o[a][1].type = "strikethroughSequence", o[u][1].type = "strikethroughSequence";
						const c = {
								type: "strikethrough",
								start: Object.assign({}, o[u][1].start),
								end: Object.assign({}, o[a][1].end)
							},
							f = {
								type: "strikethroughText",
								start: Object.assign({}, o[u][1].end),
								end: Object.assign({}, o[a][1].start)
							},
							h = [
								["enter", c, s],
								["enter", o[u][1], s],
								["exit", o[u][1], s],
								["enter", f, s]
							],
							d = s.parser.constructs.insideSpan.null;
						d && dt(h, h.length, 0, Ps(d, o.slice(u + 1, a), s)), dt(h, h.length, 0, [
							["exit", f, s],
							["enter", o[a][1], s],
							["exit", o[a][1], s],
							["exit", c, s]
						]), dt(o, u - 1, a - u + 3, h), a = u + h.length - 2;
						break
					}
			} for (a = -1; ++a < o.length;) o[a][1].type === "strikethroughSequenceTemporary" && (o[a][1].type = "data");
		return o
	}

	function l(o, s, a) {
		const u = this.previous,
			c = this.events;
		let f = 0;
		return h;

		function h(p) {
			return u === 126 && c[c.length - 1][1].type !== "characterEscape" ? a(p) : (o.enter("strikethroughSequenceTemporary"), d(p))
		}

		function d(p) {
			const x = es(u);
			if (p === 126) return f > 1 ? a(p) : (o.consume(p), f++, d);
			if (f < 2 && !n) return a(p);
			const S = o.exit("strikethroughSequenceTemporary"),
				m = es(p);
			return S._open = !m || m === 2 && !!x, S._close = !x || x === 2 && !!m, s(p)
		}
	}
}
class Fb {
	constructor() {
		this.map = []
	}
	add(t, n, r) {
		_b(this, t, n, r)
	}
	consume(t) {
		if (this.map.sort(function(l, o) {
				return l[0] - o[0]
			}), this.map.length === 0) return;
		let n = this.map.length;
		const r = [];
		for (; n > 0;) n -= 1, r.push(t.slice(this.map[n][0] + this.map[n][1]), this.map[n][2]), t.length = this.map[n][0];
		r.push([...t]), t.length = 0;
		let i = r.pop();
		for (; i;) t.push(...i), i = r.pop();
		this.map.length = 0
	}
}

function _b(e, t, n, r) {
	let i = 0;
	if (!(n === 0 && r.length === 0)) {
		for (; i < e.map.length;) {
			if (e.map[i][0] === t) {
				e.map[i][1] += n, e.map[i][2].push(...r);
				return
			}
			i += 1
		}
		e.map.push([t, n, r])
	}
}

function Bb(e, t) {
	let n = !1;
	const r = [];
	for (; t < e.length;) {
		const i = e[t];
		if (n) {
			if (i[0] === "enter") i[1].type === "tableContent" && r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
			else if (i[1].type === "tableContent") {
				if (e[t - 1][1].type === "tableDelimiterMarker") {
					const l = r.length - 1;
					r[l] = r[l] === "left" ? "center" : "right"
				}
			} else if (i[1].type === "tableDelimiterRow") break
		} else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
		t += 1
	}
	return r
}

function Ub() {
	return {
		flow: {
			null: {
				tokenize: Vb,
				resolveAll: $b
			}
		}
	}
}

function Vb(e, t, n) {
	const r = this;
	let i = 0,
		l = 0,
		o;
	return s;

	function s(C) {
		let z = r.events.length - 1;
		for (; z > -1;) {
			const se = r.events[z][1].type;
			if (se === "lineEnding" || se === "linePrefix") z--;
			else break
		}
		const F = z > -1 ? r.events[z][1].type : null,
			G = F === "tableHead" || F === "tableRow" ? E : a;
		return G === E && r.parser.lazy[r.now().line] ? n(C) : G(C)
	}

	function a(C) {
		return e.enter("tableHead"), e.enter("tableRow"), u(C)
	}

	function u(C) {
		return C === 124 || (o = !0, l += 1), c(C)
	}

	function c(C) {
		return C === null ? n(C) : $(C) ? l > 1 ? (l = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(C), e.exit("lineEnding"), d) : n(C) : Z(C) ? K(e, c, "whitespace")(C) : (l += 1, o && (o = !1, i += 1), C === 124 ? (e.enter("tableCellDivider"), e.consume(C), e.exit("tableCellDivider"), o = !0, c) : (e.enter("data"), f(C)))
	}

	function f(C) {
		return C === null || C === 124 || fe(C) ? (e.exit("data"), c(C)) : (e.consume(C), C === 92 ? h : f)
	}

	function h(C) {
		return C === 92 || C === 124 ? (e.consume(C), f) : f(C)
	}

	function d(C) {
		return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(C) : (e.enter("tableDelimiterRow"), o = !1, Z(C) ? K(e, p, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(C) : p(C))
	}

	function p(C) {
		return C === 45 || C === 58 ? S(C) : C === 124 ? (o = !0, e.enter("tableCellDivider"), e.consume(C), e.exit("tableCellDivider"), x) : b(C)
	}

	function x(C) {
		return Z(C) ? K(e, S, "whitespace")(C) : S(C)
	}

	function S(C) {
		return C === 58 ? (l += 1, o = !0, e.enter("tableDelimiterMarker"), e.consume(C), e.exit("tableDelimiterMarker"), m) : C === 45 ? (l += 1, m(C)) : C === null || $(C) ? N(C) : b(C)
	}

	function m(C) {
		return C === 45 ? (e.enter("tableDelimiterFiller"), y(C)) : b(C)
	}

	function y(C) {
		return C === 45 ? (e.consume(C), y) : C === 58 ? (o = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(C), e.exit("tableDelimiterMarker"), w) : (e.exit("tableDelimiterFiller"), w(C))
	}

	function w(C) {
		return Z(C) ? K(e, N, "whitespace")(C) : N(C)
	}

	function N(C) {
		return C === 124 ? p(C) : C === null || $(C) ? !o || i !== l ? b(C) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(C)) : b(C)
	}

	function b(C) {
		return n(C)
	}

	function E(C) {
		return e.enter("tableRow"), j(C)
	}

	function j(C) {
		return C === 124 ? (e.enter("tableCellDivider"), e.consume(C), e.exit("tableCellDivider"), j) : C === null || $(C) ? (e.exit("tableRow"), t(C)) : Z(C) ? K(e, j, "whitespace")(C) : (e.enter("data"), L(C))
	}

	function L(C) {
		return C === null || C === 124 || fe(C) ? (e.exit("data"), j(C)) : (e.consume(C), C === 92 ? B : L)
	}

	function B(C) {
		return C === 92 || C === 124 ? (e.consume(C), L) : L(C)
	}
}

function $b(e, t) {
	let n = -1,
		r = !0,
		i = 0,
		l = [0, 0, 0, 0],
		o = [0, 0, 0, 0],
		s = !1,
		a = 0,
		u, c, f;
	const h = new Fb;
	for (; ++n < e.length;) {
		const d = e[n],
			p = d[1];
		d[0] === "enter" ? p.type === "tableHead" ? (s = !1, a !== 0 && (np(h, t, a, u, c), c = void 0, a = 0), u = {
			type: "table",
			start: Object.assign({}, p.start),
			end: Object.assign({}, p.end)
		}, h.add(n, 0, [
			["enter", u, t]
		])) : p.type === "tableRow" || p.type === "tableDelimiterRow" ? (r = !0, f = void 0, l = [0, 0, 0, 0], o = [0, n + 1, 0, 0], s && (s = !1, c = {
			type: "tableBody",
			start: Object.assign({}, p.start),
			end: Object.assign({}, p.end)
		}, h.add(n, 0, [
			["enter", c, t]
		])), i = p.type === "tableDelimiterRow" ? 2 : c ? 3 : 1) : i && (p.type === "data" || p.type === "tableDelimiterMarker" || p.type === "tableDelimiterFiller") ? (r = !1, o[2] === 0 && (l[1] !== 0 && (o[0] = o[1], f = Ql(h, t, l, i, void 0, f), l = [0, 0, 0, 0]), o[2] = n)) : p.type === "tableCellDivider" && (r ? r = !1 : (l[1] !== 0 && (o[0] = o[1], f = Ql(h, t, l, i, void 0, f)), l = o, o = [l[1], n, 0, 0])) : p.type === "tableHead" ? (s = !0, a = n) : p.type === "tableRow" || p.type === "tableDelimiterRow" ? (a = n, l[1] !== 0 ? (o[0] = o[1], f = Ql(h, t, l, i, n, f)) : o[1] !== 0 && (f = Ql(h, t, o, i, n, f)), i = 0) : i && (p.type === "data" || p.type === "tableDelimiterMarker" || p.type === "tableDelimiterFiller") && (o[3] = n)
	}
	for (a !== 0 && np(h, t, a, u, c), h.consume(t.events), n = -1; ++n < t.events.length;) {
		const d = t.events[n];
		d[0] === "enter" && d[1].type === "table" && (d[1]._align = Bb(t.events, n))
	}
	return e
}

function Ql(e, t, n, r, i, l) {
	const o = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData",
		s = "tableContent";
	n[0] !== 0 && (l.end = Object.assign({}, Tr(t.events, n[0])), e.add(n[0], 0, [
		["exit", l, t]
	]));
	const a = Tr(t.events, n[1]);
	if (l = {
			type: o,
			start: Object.assign({}, a),
			end: Object.assign({}, a)
		}, e.add(n[1], 0, [
			["enter", l, t]
		]), n[2] !== 0) {
		const u = Tr(t.events, n[2]),
			c = Tr(t.events, n[3]),
			f = {
				type: s,
				start: Object.assign({}, u),
				end: Object.assign({}, c)
			};
		if (e.add(n[2], 0, [
				["enter", f, t]
			]), r !== 2) {
			const h = t.events[n[2]],
				d = t.events[n[3]];
			if (h[1].end = Object.assign({}, d[1].end), h[1].type = "chunkText", h[1].contentType = "text", n[3] > n[2] + 1) {
				const p = n[2] + 1,
					x = n[3] - n[2] - 1;
				e.add(p, x, [])
			}
		}
		e.add(n[3] + 1, 0, [
			["exit", f, t]
		])
	}
	return i !== void 0 && (l.end = Object.assign({}, Tr(t.events, i)), e.add(i, 0, [
		["exit", l, t]
	]), l = void 0), l
}

function np(e, t, n, r, i) {
	const l = [],
		o = Tr(t.events, n);
	i && (i.end = Object.assign({}, o), l.push(["exit", i, t])), r.end = Object.assign({}, o), l.push(["exit", r, t]), e.add(n + 1, 0, l)
}

function Tr(e, t) {
	const n = e[t],
		r = n[0] === "enter" ? "start" : "end";
	return n[1][r]
}
const Hb = {
	tokenize: qb
};

function Wb() {
	return {
		text: {
			91: Hb
		}
	}
}

function qb(e, t, n) {
	const r = this;
	return i;

	function i(a) {
		return r.previous !== null || !r._gfmTasklistFirstContentOfListItem ? n(a) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(a), e.exit("taskListCheckMarker"), l)
	}

	function l(a) {
		return fe(a) ? (e.enter("taskListCheckValueUnchecked"), e.consume(a), e.exit("taskListCheckValueUnchecked"), o) : a === 88 || a === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(a), e.exit("taskListCheckValueChecked"), o) : n(a)
	}

	function o(a) {
		return a === 93 ? (e.enter("taskListCheckMarker"), e.consume(a), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), s) : n(a)
	}

	function s(a) {
		return $(a) ? t(a) : Z(a) ? e.check({
			tokenize: Zb
		}, t, n)(a) : n(a)
	}
}

function Zb(e, t, n) {
	return K(e, r, "whitespace");

	function r(i) {
		return i === null ? n(i) : t(i)
	}
}

function Qb(e) {
	return Dy([wb(), Ab(), zb(e), Ub(), Wb()])
}
const Gb = {};

function O0(e) {
	const t = this,
		n = e || Gb,
		r = t.data(),
		i = r.micromarkExtensions || (r.micromarkExtensions = []),
		l = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []),
		o = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
	i.push(Qb(n)), l.push(mb()), o.push(gb(n))
}

function A0(e) {
	return hn({
		tag: "svg",
		attr: {
			viewBox: "0 0 512 512"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
			}
		}]
	})(e)
}
class vr extends Error {}
class Yb extends vr {
	constructor(t) {
		super(`Invalid DateTime: ${t.toMessage()}`)
	}
}
class Xb extends vr {
	constructor(t) {
		super(`Invalid Interval: ${t.toMessage()}`)
	}
}
class Jb extends vr {
	constructor(t) {
		super(`Invalid Duration: ${t.toMessage()}`)
	}
}
class Pi extends vr {}
class j0 extends vr {
	constructor(t) {
		super(`Invalid unit ${t}`)
	}
}
class kt extends vr {}
class xn extends vr {
	constructor() {
		super("Zone is an abstract class")
	}
}
const R = "numeric",
	Vt = "short",
	ht = "long",
	is = {
		year: R,
		month: R,
		day: R
	},
	P0 = {
		year: R,
		month: Vt,
		day: R
	},
	Kb = {
		year: R,
		month: Vt,
		day: R,
		weekday: Vt
	},
	I0 = {
		year: R,
		month: ht,
		day: R
	},
	L0 = {
		year: R,
		month: ht,
		day: R,
		weekday: ht
	},
	M0 = {
		hour: R,
		minute: R
	},
	D0 = {
		hour: R,
		minute: R,
		second: R
	},
	R0 = {
		hour: R,
		minute: R,
		second: R,
		timeZoneName: Vt
	},
	z0 = {
		hour: R,
		minute: R,
		second: R,
		timeZoneName: ht
	},
	F0 = {
		hour: R,
		minute: R,
		hourCycle: "h23"
	},
	_0 = {
		hour: R,
		minute: R,
		second: R,
		hourCycle: "h23"
	},
	B0 = {
		hour: R,
		minute: R,
		second: R,
		hourCycle: "h23",
		timeZoneName: Vt
	},
	U0 = {
		hour: R,
		minute: R,
		second: R,
		hourCycle: "h23",
		timeZoneName: ht
	},
	V0 = {
		year: R,
		month: R,
		day: R,
		hour: R,
		minute: R
	},
	$0 = {
		year: R,
		month: R,
		day: R,
		hour: R,
		minute: R,
		second: R
	},
	H0 = {
		year: R,
		month: Vt,
		day: R,
		hour: R,
		minute: R
	},
	W0 = {
		year: R,
		month: Vt,
		day: R,
		hour: R,
		minute: R,
		second: R
	},
	e3 = {
		year: R,
		month: Vt,
		day: R,
		weekday: Vt,
		hour: R,
		minute: R
	},
	q0 = {
		year: R,
		month: ht,
		day: R,
		hour: R,
		minute: R,
		timeZoneName: Vt
	},
	Z0 = {
		year: R,
		month: ht,
		day: R,
		hour: R,
		minute: R,
		second: R,
		timeZoneName: Vt
	},
	Q0 = {
		year: R,
		month: ht,
		day: R,
		weekday: ht,
		hour: R,
		minute: R,
		timeZoneName: ht
	},
	G0 = {
		year: R,
		month: ht,
		day: R,
		weekday: ht,
		hour: R,
		minute: R,
		second: R,
		timeZoneName: ht
	};
class El {
	get type() {
		throw new xn
	}
	get name() {
		throw new xn
	}
	get ianaName() {
		return this.name
	}
	get isUniversal() {
		throw new xn
	}
	offsetName(t, n) {
		throw new xn
	}
	formatOffset(t, n) {
		throw new xn
	}
	offset(t) {
		throw new xn
	}
	equals(t) {
		throw new xn
	}
	get isValid() {
		throw new xn
	}
}
let La = null;
class Ds extends El {
	static get instance() {
		return La === null && (La = new Ds), La
	}
	get type() {
		return "system"
	}
	get name() {
		return new Intl.DateTimeFormat().resolvedOptions().timeZone
	}
	get isUniversal() {
		return !1
	}
	offsetName(t, {
		format: n,
		locale: r
	}) {
		return X0(t, n, r)
	}
	formatOffset(t, n) {
		return Wi(this.offset(t), n)
	}
	offset(t) {
		return -new Date(t).getTimezoneOffset()
	}
	equals(t) {
		return t.type === "system"
	}
	get isValid() {
		return !0
	}
}
let ko = {};

function t3(e) {
	return ko[e] || (ko[e] = new Intl.DateTimeFormat("en-US", {
		hour12: !1,
		timeZone: e,
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		era: "short"
	})), ko[e]
}
const n3 = {
	year: 0,
	month: 1,
	day: 2,
	era: 3,
	hour: 4,
	minute: 5,
	second: 6
};

function r3(e, t) {
	const n = e.format(t).replace(/\u200E/g, ""),
		r = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),
		[, i, l, o, s, a, u, c] = r;
	return [o, i, l, s, a, u, c]
}

function i3(e, t) {
	const n = e.formatToParts(t),
		r = [];
	for (let i = 0; i < n.length; i++) {
		const {
			type: l,
			value: o
		} = n[i], s = n3[l];
		l === "era" ? r[s] = o : J(s) || (r[s] = parseInt(o, 10))
	}
	return r
}
let Gl = {};
class fn extends El {
	static create(t) {
		return Gl[t] || (Gl[t] = new fn(t)), Gl[t]
	}
	static resetCache() {
		Gl = {}, ko = {}
	}
	static isValidSpecifier(t) {
		return this.isValidZone(t)
	}
	static isValidZone(t) {
		if (!t) return !1;
		try {
			return new Intl.DateTimeFormat("en-US", {
				timeZone: t
			}).format(), !0
		} catch {
			return !1
		}
	}
	constructor(t) {
		super(), this.zoneName = t, this.valid = fn.isValidZone(t)
	}
	get type() {
		return "iana"
	}
	get name() {
		return this.zoneName
	}
	get isUniversal() {
		return !1
	}
	offsetName(t, {
		format: n,
		locale: r
	}) {
		return X0(t, n, r, this.name)
	}
	formatOffset(t, n) {
		return Wi(this.offset(t), n)
	}
	offset(t) {
		const n = new Date(t);
		if (isNaN(n)) return NaN;
		const r = t3(this.name);
		let [i, l, o, s, a, u, c] = r.formatToParts ? i3(r, n) : r3(r, n);
		s === "BC" && (i = -Math.abs(i) + 1);
		const h = zs({
			year: i,
			month: l,
			day: o,
			hour: a === 24 ? 0 : a,
			minute: u,
			second: c,
			millisecond: 0
		});
		let d = +n;
		const p = d % 1e3;
		return d -= p >= 0 ? p : 1e3 + p, (h - d) / (60 * 1e3)
	}
	equals(t) {
		return t.type === "iana" && t.name === this.name
	}
	get isValid() {
		return this.valid
	}
}
let rp = {};

function l3(e, t = {}) {
	const n = JSON.stringify([e, t]);
	let r = rp[n];
	return r || (r = new Intl.ListFormat(e, t), rp[n] = r), r
}
let Yu = {};

function Xu(e, t = {}) {
	const n = JSON.stringify([e, t]);
	let r = Yu[n];
	return r || (r = new Intl.DateTimeFormat(e, t), Yu[n] = r), r
}
let Ju = {};

function o3(e, t = {}) {
	const n = JSON.stringify([e, t]);
	let r = Ju[n];
	return r || (r = new Intl.NumberFormat(e, t), Ju[n] = r), r
}
let Ku = {};

function s3(e, t = {}) {
	const {
		base: n,
		...r
	} = t, i = JSON.stringify([e, r]);
	let l = Ku[i];
	return l || (l = new Intl.RelativeTimeFormat(e, t), Ku[i] = l), l
}
let Ii = null;

function a3() {
	return Ii || (Ii = new Intl.DateTimeFormat().resolvedOptions().locale, Ii)
}

function u3(e) {
	const t = e.indexOf("-x-");
	t !== -1 && (e = e.substring(0, t));
	const n = e.indexOf("-u-");
	if (n === -1) return [e];
	{
		let r, i;
		try {
			r = Xu(e).resolvedOptions(), i = e
		} catch {
			const a = e.substring(0, n);
			r = Xu(a).resolvedOptions(), i = a
		}
		const {
			numberingSystem: l,
			calendar: o
		} = r;
		return [i, l, o]
	}
}

function c3(e, t, n) {
	return (n || t) && (e.includes("-u-") || (e += "-u"), n && (e += `-ca-${n}`), t && (e += `-nu-${t}`)), e
}

function f3(e) {
	const t = [];
	for (let n = 1; n <= 12; n++) {
		const r = V.utc(2009, n, 1);
		t.push(e(r))
	}
	return t
}

function d3(e) {
	const t = [];
	for (let n = 1; n <= 7; n++) {
		const r = V.utc(2016, 11, 13 + n);
		t.push(e(r))
	}
	return t
}

function Yl(e, t, n, r) {
	const i = e.listingMode();
	return i === "error" ? null : i === "en" ? n(t) : r(t)
}

function h3(e) {
	return e.numberingSystem && e.numberingSystem !== "latn" ? !1 : e.numberingSystem === "latn" || !e.locale || e.locale.startsWith("en") || new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem === "latn"
}
class p3 {
	constructor(t, n, r) {
		this.padTo = r.padTo || 0, this.floor = r.floor || !1;
		const {
			padTo: i,
			floor: l,
			...o
		} = r;
		if (!n || Object.keys(o).length > 0) {
			const s = {
				useGrouping: !1,
				...r
			};
			r.padTo > 0 && (s.minimumIntegerDigits = r.padTo), this.inf = o3(t, s)
		}
	}
	format(t) {
		if (this.inf) {
			const n = this.floor ? Math.floor(t) : t;
			return this.inf.format(n)
		} else {
			const n = this.floor ? Math.floor(t) : Nf(t, 3);
			return Ae(n, this.padTo)
		}
	}
}
class m3 {
	constructor(t, n, r) {
		this.opts = r, this.originalZone = void 0;
		let i;
		if (this.opts.timeZone) this.dt = t;
		else if (t.zone.type === "fixed") {
			const o = -1 * (t.offset / 60),
				s = o >= 0 ? `Etc/GMT+${o}` : `Etc/GMT${o}`;
			t.offset !== 0 && fn.create(s).valid ? (i = s, this.dt = t) : (i = "UTC", this.dt = t.offset === 0 ? t : t.setZone("UTC").plus({
				minutes: t.offset
			}), this.originalZone = t.zone)
		} else t.zone.type === "system" ? this.dt = t : t.zone.type === "iana" ? (this.dt = t, i = t.zone.name) : (i = "UTC", this.dt = t.setZone("UTC").plus({
			minutes: t.offset
		}), this.originalZone = t.zone);
		const l = {
			...this.opts
		};
		l.timeZone = l.timeZone || i, this.dtf = Xu(n, l)
	}
	format() {
		return this.originalZone ? this.formatToParts().map(({
			value: t
		}) => t).join("") : this.dtf.format(this.dt.toJSDate())
	}
	formatToParts() {
		const t = this.dtf.formatToParts(this.dt.toJSDate());
		return this.originalZone ? t.map(n => {
			if (n.type === "timeZoneName") {
				const r = this.originalZone.offsetName(this.dt.ts, {
					locale: this.dt.locale,
					format: this.opts.timeZoneName
				});
				return {
					...n,
					value: r
				}
			} else return n
		}) : t
	}
	resolvedOptions() {
		return this.dtf.resolvedOptions()
	}
}
class g3 {
	constructor(t, n, r) {
		this.opts = {
			style: "long",
			...r
		}, !n && Y0() && (this.rtf = s3(t, r))
	}
	format(t, n) {
		return this.rtf ? this.rtf.format(t, n) : L3(n, t, this.opts.numeric, this.opts.style !== "long")
	}
	formatToParts(t, n) {
		return this.rtf ? this.rtf.formatToParts(t, n) : []
	}
}
class me {
	static fromOpts(t) {
		return me.create(t.locale, t.numberingSystem, t.outputCalendar, t.defaultToEN)
	}
	static create(t, n, r, i = !1) {
		const l = t || Ce.defaultLocale,
			o = l || (i ? "en-US" : a3()),
			s = n || Ce.defaultNumberingSystem,
			a = r || Ce.defaultOutputCalendar;
		return new me(o, s, a, l)
	}
	static resetCache() {
		Ii = null, Yu = {}, Ju = {}, Ku = {}
	}
	static fromObject({
		locale: t,
		numberingSystem: n,
		outputCalendar: r
	} = {}) {
		return me.create(t, n, r)
	}
	constructor(t, n, r, i) {
		const [l, o, s] = u3(t);
		this.locale = l, this.numberingSystem = n || o || null, this.outputCalendar = r || s || null, this.intl = c3(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = {
			format: {},
			standalone: {}
		}, this.monthsCache = {
			format: {},
			standalone: {}
		}, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = i, this.fastNumbersCached = null
	}
	get fastNumbers() {
		return this.fastNumbersCached == null && (this.fastNumbersCached = h3(this)), this.fastNumbersCached
	}
	listingMode() {
		const t = this.isEnglish(),
			n = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
		return t && n ? "en" : "intl"
	}
	clone(t) {
		return !t || Object.getOwnPropertyNames(t).length === 0 ? this : me.create(t.locale || this.specifiedLocale, t.numberingSystem || this.numberingSystem, t.outputCalendar || this.outputCalendar, t.defaultToEN || !1)
	}
	redefaultToEN(t = {}) {
		return this.clone({
			...t,
			defaultToEN: !0
		})
	}
	redefaultToSystem(t = {}) {
		return this.clone({
			...t,
			defaultToEN: !1
		})
	}
	months(t, n = !1) {
		return Yl(this, t, e1, () => {
			const r = n ? {
					month: t,
					day: "numeric"
				} : {
					month: t
				},
				i = n ? "format" : "standalone";
			return this.monthsCache[i][t] || (this.monthsCache[i][t] = f3(l => this.extract(l, r, "month"))), this.monthsCache[i][t]
		})
	}
	weekdays(t, n = !1) {
		return Yl(this, t, r1, () => {
			const r = n ? {
					weekday: t,
					year: "numeric",
					month: "long",
					day: "numeric"
				} : {
					weekday: t
				},
				i = n ? "format" : "standalone";
			return this.weekdaysCache[i][t] || (this.weekdaysCache[i][t] = d3(l => this.extract(l, r, "weekday"))), this.weekdaysCache[i][t]
		})
	}
	meridiems() {
		return Yl(this, void 0, () => i1, () => {
			if (!this.meridiemCache) {
				const t = {
					hour: "numeric",
					hourCycle: "h12"
				};
				this.meridiemCache = [V.utc(2016, 11, 13, 9), V.utc(2016, 11, 13, 19)].map(n => this.extract(n, t, "dayperiod"))
			}
			return this.meridiemCache
		})
	}
	eras(t) {
		return Yl(this, t, l1, () => {
			const n = {
				era: t
			};
			return this.eraCache[t] || (this.eraCache[t] = [V.utc(-40, 1, 1), V.utc(2017, 1, 1)].map(r => this.extract(r, n, "era"))), this.eraCache[t]
		})
	}
	extract(t, n, r) {
		const i = this.dtFormatter(t, n),
			l = i.formatToParts(),
			o = l.find(s => s.type.toLowerCase() === r);
		return o ? o.value : null
	}
	numberFormatter(t = {}) {
		return new p3(this.intl, t.forceSimple || this.fastNumbers, t)
	}
	dtFormatter(t, n = {}) {
		return new m3(t, this.intl, n)
	}
	relFormatter(t = {}) {
		return new g3(this.intl, this.isEnglish(), t)
	}
	listFormatter(t = {}) {
		return l3(this.intl, t)
	}
	isEnglish() {
		return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")
	}
	equals(t) {
		return this.locale === t.locale && this.numberingSystem === t.numberingSystem && this.outputCalendar === t.outputCalendar
	}
}
let Ma = null;
class Ge extends El {
	static get utcInstance() {
		return Ma === null && (Ma = new Ge(0)), Ma
	}
	static instance(t) {
		return t === 0 ? Ge.utcInstance : new Ge(t)
	}
	static parseSpecifier(t) {
		if (t) {
			const n = t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
			if (n) return new Ge(Fs(n[1], n[2]))
		}
		return null
	}
	constructor(t) {
		super(), this.fixed = t
	}
	get type() {
		return "fixed"
	}
	get name() {
		return this.fixed === 0 ? "UTC" : `UTC${Wi(this.fixed,"narrow")}`
	}
	get ianaName() {
		return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${Wi(-this.fixed,"narrow")}`
	}
	offsetName() {
		return this.name
	}
	formatOffset(t, n) {
		return Wi(this.fixed, n)
	}
	get isUniversal() {
		return !0
	}
	offset() {
		return this.fixed
	}
	equals(t) {
		return t.type === "fixed" && t.fixed === this.fixed
	}
	get isValid() {
		return !0
	}
}
class y3 extends El {
	constructor(t) {
		super(), this.zoneName = t
	}
	get type() {
		return "invalid"
	}
	get name() {
		return this.zoneName
	}
	get isUniversal() {
		return !1
	}
	offsetName() {
		return null
	}
	formatOffset() {
		return ""
	}
	offset() {
		return NaN
	}
	equals() {
		return !1
	}
	get isValid() {
		return !1
	}
}

function Nn(e, t) {
	if (J(e) || e === null) return t;
	if (e instanceof El) return e;
	if (x3(e)) {
		const n = e.toLowerCase();
		return n === "default" ? t : n === "local" || n === "system" ? Ds.instance : n === "utc" || n === "gmt" ? Ge.utcInstance : Ge.parseSpecifier(n) || fn.create(e)
	} else return sr(e) ? Ge.instance(e) : typeof e == "object" && "offset" in e && typeof e.offset == "function" ? e : new y3(e)
}
let ip = () => Date.now(),
	lp = "system",
	op = null,
	sp = null,
	ap = null,
	up = 60,
	cp;
class Ce {
	static get now() {
		return ip
	}
	static set now(t) {
		ip = t
	}
	static set defaultZone(t) {
		lp = t
	}
	static get defaultZone() {
		return Nn(lp, Ds.instance)
	}
	static get defaultLocale() {
		return op
	}
	static set defaultLocale(t) {
		op = t
	}
	static get defaultNumberingSystem() {
		return sp
	}
	static set defaultNumberingSystem(t) {
		sp = t
	}
	static get defaultOutputCalendar() {
		return ap
	}
	static set defaultOutputCalendar(t) {
		ap = t
	}
	static get twoDigitCutoffYear() {
		return up
	}
	static set twoDigitCutoffYear(t) {
		up = t % 100
	}
	static get throwOnInvalid() {
		return cp
	}
	static set throwOnInvalid(t) {
		cp = t
	}
	static resetCaches() {
		me.resetCache(), fn.resetCache()
	}
}

function J(e) {
	return typeof e > "u"
}

function sr(e) {
	return typeof e == "number"
}

function Rs(e) {
	return typeof e == "number" && e % 1 === 0
}

function x3(e) {
	return typeof e == "string"
}

function w3(e) {
	return Object.prototype.toString.call(e) === "[object Date]"
}

function Y0() {
	try {
		return typeof Intl < "u" && !!Intl.RelativeTimeFormat
	} catch {
		return !1
	}
}

function v3(e) {
	return Array.isArray(e) ? e : [e]
}

function fp(e, t, n) {
	if (e.length !== 0) return e.reduce((r, i) => {
		const l = [t(i), i];
		return r && n(r[0], l[0]) === r[0] ? r : l
	}, null)[1]
}

function k3(e, t) {
	return t.reduce((n, r) => (n[r] = e[r], n), {})
}

function ni(e, t) {
	return Object.prototype.hasOwnProperty.call(e, t)
}

function rn(e, t, n) {
	return Rs(e) && e >= t && e <= n
}

function S3(e, t) {
	return e - t * Math.floor(e / t)
}

function Ae(e, t = 2) {
	const n = e < 0;
	let r;
	return n ? r = "-" + ("" + -e).padStart(t, "0") : r = ("" + e).padStart(t, "0"), r
}

function Sn(e) {
	if (!(J(e) || e === null || e === "")) return parseInt(e, 10)
}

function Yn(e) {
	if (!(J(e) || e === null || e === "")) return parseFloat(e)
}

function Cf(e) {
	if (!(J(e) || e === null || e === "")) {
		const t = parseFloat("0." + e) * 1e3;
		return Math.floor(t)
	}
}

function Nf(e, t, n = !1) {
	const r = 10 ** t;
	return (n ? Math.trunc : Math.round)(e * r) / r
}

function Cl(e) {
	return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0)
}

function Hi(e) {
	return Cl(e) ? 366 : 365
}

function ls(e, t) {
	const n = S3(t - 1, 12) + 1,
		r = e + (t - n) / 12;
	return n === 2 ? Cl(r) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1]
}

function zs(e) {
	let t = Date.UTC(e.year, e.month - 1, e.day, e.hour, e.minute, e.second, e.millisecond);
	return e.year < 100 && e.year >= 0 && (t = new Date(t), t.setUTCFullYear(e.year, e.month - 1, e.day)), +t
}

function os(e) {
	const t = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7,
		n = e - 1,
		r = (n + Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400)) % 7;
	return t === 4 || r === 3 ? 53 : 52
}

function ec(e) {
	return e > 99 ? e : e > Ce.twoDigitCutoffYear ? 1900 + e : 2e3 + e
}

function X0(e, t, n, r = null) {
	const i = new Date(e),
		l = {
			hourCycle: "h23",
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
			hour: "2-digit",
			minute: "2-digit"
		};
	r && (l.timeZone = r);
	const o = {
			timeZoneName: t,
			...l
		},
		s = new Intl.DateTimeFormat(n, o).formatToParts(i).find(a => a.type.toLowerCase() === "timezonename");
	return s ? s.value : null
}

function Fs(e, t) {
	let n = parseInt(e, 10);
	Number.isNaN(n) && (n = 0);
	const r = parseInt(t, 10) || 0,
		i = n < 0 || Object.is(n, -0) ? -r : r;
	return n * 60 + i
}

function J0(e) {
	const t = Number(e);
	if (typeof e == "boolean" || e === "" || Number.isNaN(t)) throw new kt(`Invalid unit value ${e}`);
	return t
}

function ss(e, t) {
	const n = {};
	for (const r in e)
		if (ni(e, r)) {
			const i = e[r];
			if (i == null) continue;
			n[t(r)] = J0(i)
		} return n
}

function Wi(e, t) {
	const n = Math.trunc(Math.abs(e / 60)),
		r = Math.trunc(Math.abs(e % 60)),
		i = e >= 0 ? "+" : "-";
	switch (t) {
		case "short":
			return `${i}${Ae(n,2)}:${Ae(r,2)}`;
		case "narrow":
			return `${i}${n}${r>0?`:${r}`:""}`;
		case "techie":
			return `${i}${Ae(n,2)}${Ae(r,2)}`;
		default:
			throw new RangeError(`Value format ${t} is out of range for property format`)
	}
}

function _s(e) {
	return k3(e, ["hour", "minute", "second", "millisecond"])
}
const E3 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	K0 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	C3 = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

function e1(e) {
	switch (e) {
		case "narrow":
			return [...C3];
		case "short":
			return [...K0];
		case "long":
			return [...E3];
		case "numeric":
			return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
		case "2-digit":
			return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
		default:
			return null
	}
}
const t1 = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
	n1 = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
	N3 = ["M", "T", "W", "T", "F", "S", "S"];

function r1(e) {
	switch (e) {
		case "narrow":
			return [...N3];
		case "short":
			return [...n1];
		case "long":
			return [...t1];
		case "numeric":
			return ["1", "2", "3", "4", "5", "6", "7"];
		default:
			return null
	}
}
const i1 = ["AM", "PM"],
	b3 = ["Before Christ", "Anno Domini"],
	T3 = ["BC", "AD"],
	O3 = ["B", "A"];

function l1(e) {
	switch (e) {
		case "narrow":
			return [...O3];
		case "short":
			return [...T3];
		case "long":
			return [...b3];
		default:
			return null
	}
}

function A3(e) {
	return i1[e.hour < 12 ? 0 : 1]
}

function j3(e, t) {
	return r1(t)[e.weekday - 1]
}

function P3(e, t) {
	return e1(t)[e.month - 1]
}

function I3(e, t) {
	return l1(t)[e.year < 0 ? 0 : 1]
}

function L3(e, t, n = "always", r = !1) {
	const i = {
			years: ["year", "yr."],
			quarters: ["quarter", "qtr."],
			months: ["month", "mo."],
			weeks: ["week", "wk."],
			days: ["day", "day", "days"],
			hours: ["hour", "hr."],
			minutes: ["minute", "min."],
			seconds: ["second", "sec."]
		},
		l = ["hours", "minutes", "seconds"].indexOf(e) === -1;
	if (n === "auto" && l) {
		const f = e === "days";
		switch (t) {
			case 1:
				return f ? "tomorrow" : `next ${i[e][0]}`;
			case -1:
				return f ? "yesterday" : `last ${i[e][0]}`;
			case 0:
				return f ? "today" : `this ${i[e][0]}`
		}
	}
	const o = Object.is(t, -0) || t < 0,
		s = Math.abs(t),
		a = s === 1,
		u = i[e],
		c = r ? a ? u[1] : u[2] || u[1] : a ? i[e][0] : e;
	return o ? `${s} ${c} ago` : `in ${s} ${c}`
}

function dp(e, t) {
	let n = "";
	for (const r of e) r.literal ? n += r.val : n += t(r.val);
	return n
}
const M3 = {
	D: is,
	DD: P0,
	DDD: I0,
	DDDD: L0,
	t: M0,
	tt: D0,
	ttt: R0,
	tttt: z0,
	T: F0,
	TT: _0,
	TTT: B0,
	TTTT: U0,
	f: V0,
	ff: H0,
	fff: q0,
	ffff: Q0,
	F: $0,
	FF: W0,
	FFF: Z0,
	FFFF: G0
};
class He {
	static create(t, n = {}) {
		return new He(t, n)
	}
	static parseFormat(t) {
		let n = null,
			r = "",
			i = !1;
		const l = [];
		for (let o = 0; o < t.length; o++) {
			const s = t.charAt(o);
			s === "'" ? (r.length > 0 && l.push({
				literal: i || /^\s+$/.test(r),
				val: r
			}), n = null, r = "", i = !i) : i || s === n ? r += s : (r.length > 0 && l.push({
				literal: /^\s+$/.test(r),
				val: r
			}), r = s, n = s)
		}
		return r.length > 0 && l.push({
			literal: i || /^\s+$/.test(r),
			val: r
		}), l
	}
	static macroTokenToFormatOpts(t) {
		return M3[t]
	}
	constructor(t, n) {
		this.opts = n, this.loc = t, this.systemLoc = null
	}
	formatWithSystemDefault(t, n) {
		return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(t, {
			...this.opts,
			...n
		}).format()
	}
	dtFormatter(t, n = {}) {
		return this.loc.dtFormatter(t, {
			...this.opts,
			...n
		})
	}
	formatDateTime(t, n) {
		return this.dtFormatter(t, n).format()
	}
	formatDateTimeParts(t, n) {
		return this.dtFormatter(t, n).formatToParts()
	}
	formatInterval(t, n) {
		return this.dtFormatter(t.start, n).dtf.formatRange(t.start.toJSDate(), t.end.toJSDate())
	}
	resolvedOptions(t, n) {
		return this.dtFormatter(t, n).resolvedOptions()
	}
	num(t, n = 0) {
		if (this.opts.forceSimple) return Ae(t, n);
		const r = {
			...this.opts
		};
		return n > 0 && (r.padTo = n), this.loc.numberFormatter(r).format(t)
	}
	formatDateTimeFromString(t, n) {
		const r = this.loc.listingMode() === "en",
			i = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory",
			l = (d, p) => this.loc.extract(t, d, p),
			o = d => t.isOffsetFixed && t.offset === 0 && d.allowZ ? "Z" : t.isValid ? t.zone.formatOffset(t.ts, d.format) : "",
			s = () => r ? A3(t) : l({
				hour: "numeric",
				hourCycle: "h12"
			}, "dayperiod"),
			a = (d, p) => r ? P3(t, d) : l(p ? {
				month: d
			} : {
				month: d,
				day: "numeric"
			}, "month"),
			u = (d, p) => r ? j3(t, d) : l(p ? {
				weekday: d
			} : {
				weekday: d,
				month: "long",
				day: "numeric"
			}, "weekday"),
			c = d => {
				const p = He.macroTokenToFormatOpts(d);
				return p ? this.formatWithSystemDefault(t, p) : d
			},
			f = d => r ? I3(t, d) : l({
				era: d
			}, "era"),
			h = d => {
				switch (d) {
					case "S":
						return this.num(t.millisecond);
					case "u":
					case "SSS":
						return this.num(t.millisecond, 3);
					case "s":
						return this.num(t.second);
					case "ss":
						return this.num(t.second, 2);
					case "uu":
						return this.num(Math.floor(t.millisecond / 10), 2);
					case "uuu":
						return this.num(Math.floor(t.millisecond / 100));
					case "m":
						return this.num(t.minute);
					case "mm":
						return this.num(t.minute, 2);
					case "h":
						return this.num(t.hour % 12 === 0 ? 12 : t.hour % 12);
					case "hh":
						return this.num(t.hour % 12 === 0 ? 12 : t.hour % 12, 2);
					case "H":
						return this.num(t.hour);
					case "HH":
						return this.num(t.hour, 2);
					case "Z":
						return o({
							format: "narrow",
							allowZ: this.opts.allowZ
						});
					case "ZZ":
						return o({
							format: "short",
							allowZ: this.opts.allowZ
						});
					case "ZZZ":
						return o({
							format: "techie",
							allowZ: this.opts.allowZ
						});
					case "ZZZZ":
						return t.zone.offsetName(t.ts, {
							format: "short",
							locale: this.loc.locale
						});
					case "ZZZZZ":
						return t.zone.offsetName(t.ts, {
							format: "long",
							locale: this.loc.locale
						});
					case "z":
						return t.zoneName;
					case "a":
						return s();
					case "d":
						return i ? l({
							day: "numeric"
						}, "day") : this.num(t.day);
					case "dd":
						return i ? l({
							day: "2-digit"
						}, "day") : this.num(t.day, 2);
					case "c":
						return this.num(t.weekday);
					case "ccc":
						return u("short", !0);
					case "cccc":
						return u("long", !0);
					case "ccccc":
						return u("narrow", !0);
					case "E":
						return this.num(t.weekday);
					case "EEE":
						return u("short", !1);
					case "EEEE":
						return u("long", !1);
					case "EEEEE":
						return u("narrow", !1);
					case "L":
						return i ? l({
							month: "numeric",
							day: "numeric"
						}, "month") : this.num(t.month);
					case "LL":
						return i ? l({
							month: "2-digit",
							day: "numeric"
						}, "month") : this.num(t.month, 2);
					case "LLL":
						return a("short", !0);
					case "LLLL":
						return a("long", !0);
					case "LLLLL":
						return a("narrow", !0);
					case "M":
						return i ? l({
							month: "numeric"
						}, "month") : this.num(t.month);
					case "MM":
						return i ? l({
							month: "2-digit"
						}, "month") : this.num(t.month, 2);
					case "MMM":
						return a("short", !1);
					case "MMMM":
						return a("long", !1);
					case "MMMMM":
						return a("narrow", !1);
					case "y":
						return i ? l({
							year: "numeric"
						}, "year") : this.num(t.year);
					case "yy":
						return i ? l({
							year: "2-digit"
						}, "year") : this.num(t.year.toString().slice(-2), 2);
					case "yyyy":
						return i ? l({
							year: "numeric"
						}, "year") : this.num(t.year, 4);
					case "yyyyyy":
						return i ? l({
							year: "numeric"
						}, "year") : this.num(t.year, 6);
					case "G":
						return f("short");
					case "GG":
						return f("long");
					case "GGGGG":
						return f("narrow");
					case "kk":
						return this.num(t.weekYear.toString().slice(-2), 2);
					case "kkkk":
						return this.num(t.weekYear, 4);
					case "W":
						return this.num(t.weekNumber);
					case "WW":
						return this.num(t.weekNumber, 2);
					case "o":
						return this.num(t.ordinal);
					case "ooo":
						return this.num(t.ordinal, 3);
					case "q":
						return this.num(t.quarter);
					case "qq":
						return this.num(t.quarter, 2);
					case "X":
						return this.num(Math.floor(t.ts / 1e3));
					case "x":
						return this.num(t.ts);
					default:
						return c(d)
				}
			};
		return dp(He.parseFormat(n), h)
	}
	formatDurationFromString(t, n) {
		const r = a => {
				switch (a[0]) {
					case "S":
						return "millisecond";
					case "s":
						return "second";
					case "m":
						return "minute";
					case "h":
						return "hour";
					case "d":
						return "day";
					case "w":
						return "week";
					case "M":
						return "month";
					case "y":
						return "year";
					default:
						return null
				}
			},
			i = a => u => {
				const c = r(u);
				return c ? this.num(a.get(c), u.length) : u
			},
			l = He.parseFormat(n),
			o = l.reduce((a, {
				literal: u,
				val: c
			}) => u ? a : a.concat(c), []),
			s = t.shiftTo(...o.map(r).filter(a => a));
		return dp(l, i(s))
	}
}
class zt {
	constructor(t, n) {
		this.reason = t, this.explanation = n
	}
	toMessage() {
		return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason
	}
}
const o1 = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;

function ui(...e) {
	const t = e.reduce((n, r) => n + r.source, "");
	return RegExp(`^${t}$`)
}

function ci(...e) {
	return t => e.reduce(([n, r, i], l) => {
		const [o, s, a] = l(t, i);
		return [{
			...n,
			...o
		}, s || r, a]
	}, [{}, null, 1]).slice(0, 2)
}

function fi(e, ...t) {
	if (e == null) return [null, null];
	for (const [n, r] of t) {
		const i = n.exec(e);
		if (i) return r(i)
	}
	return [null, null]
}

function s1(...e) {
	return (t, n) => {
		const r = {};
		let i;
		for (i = 0; i < e.length; i++) r[e[i]] = Sn(t[n + i]);
		return [r, null, n + i]
	}
}
const a1 = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
	D3 = `(?:${a1.source}?(?:\\[(${o1.source})\\])?)?`,
	bf = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
	u1 = RegExp(`${bf.source}${D3}`),
	Tf = RegExp(`(?:T${u1.source})?`),
	R3 = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
	z3 = /(\d{4})-?W(\d\d)(?:-?(\d))?/,
	F3 = /(\d{4})-?(\d{3})/,
	_3 = s1("weekYear", "weekNumber", "weekDay"),
	B3 = s1("year", "ordinal"),
	U3 = /(\d{4})-(\d\d)-(\d\d)/,
	c1 = RegExp(`${bf.source} ?(?:${a1.source}|(${o1.source}))?`),
	V3 = RegExp(`(?: ${c1.source})?`);

function Zr(e, t, n) {
	const r = e[t];
	return J(r) ? n : Sn(r)
}

function $3(e, t) {
	return [{
		year: Zr(e, t),
		month: Zr(e, t + 1, 1),
		day: Zr(e, t + 2, 1)
	}, null, t + 3]
}

function di(e, t) {
	return [{
		hours: Zr(e, t, 0),
		minutes: Zr(e, t + 1, 0),
		seconds: Zr(e, t + 2, 0),
		milliseconds: Cf(e[t + 3])
	}, null, t + 4]
}

function Nl(e, t) {
	const n = !e[t] && !e[t + 1],
		r = Fs(e[t + 1], e[t + 2]),
		i = n ? null : Ge.instance(r);
	return [{}, i, t + 3]
}

function bl(e, t) {
	const n = e[t] ? fn.create(e[t]) : null;
	return [{}, n, t + 1]
}
const H3 = RegExp(`^T?${bf.source}$`),
	W3 = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;

function q3(e) {
	const [t, n, r, i, l, o, s, a, u] = e, c = t[0] === "-", f = a && a[0] === "-", h = (d, p = !1) => d !== void 0 && (p || d && c) ? -d : d;
	return [{
		years: h(Yn(n)),
		months: h(Yn(r)),
		weeks: h(Yn(i)),
		days: h(Yn(l)),
		hours: h(Yn(o)),
		minutes: h(Yn(s)),
		seconds: h(Yn(a), a === "-0"),
		milliseconds: h(Cf(u), f)
	}]
}
const Z3 = {
	GMT: 0,
	EDT: -4 * 60,
	EST: -5 * 60,
	CDT: -5 * 60,
	CST: -6 * 60,
	MDT: -6 * 60,
	MST: -7 * 60,
	PDT: -7 * 60,
	PST: -8 * 60
};

function Of(e, t, n, r, i, l, o) {
	const s = {
		year: t.length === 2 ? ec(Sn(t)) : Sn(t),
		month: K0.indexOf(n) + 1,
		day: Sn(r),
		hour: Sn(i),
		minute: Sn(l)
	};
	return o && (s.second = Sn(o)), e && (s.weekday = e.length > 3 ? t1.indexOf(e) + 1 : n1.indexOf(e) + 1), s
}
const Q3 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function G3(e) {
	const [, t, n, r, i, l, o, s, a, u, c, f] = e, h = Of(t, i, r, n, l, o, s);
	let d;
	return a ? d = Z3[a] : u ? d = 0 : d = Fs(c, f), [h, new Ge(d)]
}

function Y3(e) {
	return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim()
}
const X3 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
	J3 = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
	K3 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function hp(e) {
	const [, t, n, r, i, l, o, s] = e;
	return [Of(t, i, r, n, l, o, s), Ge.utcInstance]
}

function eT(e) {
	const [, t, n, r, i, l, o, s] = e;
	return [Of(t, s, n, r, i, l, o), Ge.utcInstance]
}
const tT = ui(R3, Tf),
	nT = ui(z3, Tf),
	rT = ui(F3, Tf),
	iT = ui(u1),
	f1 = ci($3, di, Nl, bl),
	lT = ci(_3, di, Nl, bl),
	oT = ci(B3, di, Nl, bl),
	sT = ci(di, Nl, bl);

function aT(e) {
	return fi(e, [tT, f1], [nT, lT], [rT, oT], [iT, sT])
}

function uT(e) {
	return fi(Y3(e), [Q3, G3])
}

function cT(e) {
	return fi(e, [X3, hp], [J3, hp], [K3, eT])
}

function fT(e) {
	return fi(e, [W3, q3])
}
const dT = ci(di);

function hT(e) {
	return fi(e, [H3, dT])
}
const pT = ui(U3, V3),
	mT = ui(c1),
	gT = ci(di, Nl, bl);

function yT(e) {
	return fi(e, [pT, f1], [mT, gT])
}
const pp = "Invalid Duration",
	d1 = {
		weeks: {
			days: 7,
			hours: 7 * 24,
			minutes: 7 * 24 * 60,
			seconds: 7 * 24 * 60 * 60,
			milliseconds: 7 * 24 * 60 * 60 * 1e3
		},
		days: {
			hours: 24,
			minutes: 24 * 60,
			seconds: 24 * 60 * 60,
			milliseconds: 24 * 60 * 60 * 1e3
		},
		hours: {
			minutes: 60,
			seconds: 60 * 60,
			milliseconds: 60 * 60 * 1e3
		},
		minutes: {
			seconds: 60,
			milliseconds: 60 * 1e3
		},
		seconds: {
			milliseconds: 1e3
		}
	},
	xT = {
		years: {
			quarters: 4,
			months: 12,
			weeks: 52,
			days: 365,
			hours: 365 * 24,
			minutes: 365 * 24 * 60,
			seconds: 365 * 24 * 60 * 60,
			milliseconds: 365 * 24 * 60 * 60 * 1e3
		},
		quarters: {
			months: 3,
			weeks: 13,
			days: 91,
			hours: 91 * 24,
			minutes: 91 * 24 * 60,
			seconds: 91 * 24 * 60 * 60,
			milliseconds: 91 * 24 * 60 * 60 * 1e3
		},
		months: {
			weeks: 4,
			days: 30,
			hours: 30 * 24,
			minutes: 30 * 24 * 60,
			seconds: 30 * 24 * 60 * 60,
			milliseconds: 30 * 24 * 60 * 60 * 1e3
		},
		...d1
	},
	yt = 146097 / 400,
	Nr = 146097 / 4800,
	wT = {
		years: {
			quarters: 4,
			months: 12,
			weeks: yt / 7,
			days: yt,
			hours: yt * 24,
			minutes: yt * 24 * 60,
			seconds: yt * 24 * 60 * 60,
			milliseconds: yt * 24 * 60 * 60 * 1e3
		},
		quarters: {
			months: 3,
			weeks: yt / 28,
			days: yt / 4,
			hours: yt * 24 / 4,
			minutes: yt * 24 * 60 / 4,
			seconds: yt * 24 * 60 * 60 / 4,
			milliseconds: yt * 24 * 60 * 60 * 1e3 / 4
		},
		months: {
			weeks: Nr / 7,
			days: Nr,
			hours: Nr * 24,
			minutes: Nr * 24 * 60,
			seconds: Nr * 24 * 60 * 60,
			milliseconds: Nr * 24 * 60 * 60 * 1e3
		},
		...d1
	},
	ir = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"],
	vT = ir.slice(0).reverse();

function wn(e, t, n = !1) {
	const r = {
		values: n ? t.values : {
			...e.values,
			...t.values || {}
		},
		loc: e.loc.clone(t.loc),
		conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy,
		matrix: t.matrix || e.matrix
	};
	return new ee(r)
}

function h1(e, t) {
	let n = t.milliseconds ?? 0;
	for (const r of vT.slice(1)) t[r] && (n += t[r] * e[r].milliseconds);
	return n
}

function mp(e, t) {
	const n = h1(e, t) < 0 ? -1 : 1;
	ir.reduceRight((r, i) => {
		if (J(t[i])) return r;
		if (r) {
			const l = t[r] * n,
				o = e[i][r],
				s = Math.floor(l / o);
			t[i] += s * n, t[r] -= s * o * n
		}
		return i
	}, null), ir.reduce((r, i) => {
		if (J(t[i])) return r;
		if (r) {
			const l = t[r] % 1;
			t[r] -= l, t[i] += l * e[r][i]
		}
		return i
	}, null)
}

function kT(e) {
	const t = {};
	for (const [n, r] of Object.entries(e)) r !== 0 && (t[n] = r);
	return t
}
class ee {
	constructor(t) {
		const n = t.conversionAccuracy === "longterm" || !1;
		let r = n ? wT : xT;
		t.matrix && (r = t.matrix), this.values = t.values, this.loc = t.loc || me.create(), this.conversionAccuracy = n ? "longterm" : "casual", this.invalid = t.invalid || null, this.matrix = r, this.isLuxonDuration = !0
	}
	static fromMillis(t, n) {
		return ee.fromObject({
			milliseconds: t
		}, n)
	}
	static fromObject(t, n = {}) {
		if (t == null || typeof t != "object") throw new kt(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);
		return new ee({
			values: ss(t, ee.normalizeUnit),
			loc: me.fromObject(n),
			conversionAccuracy: n.conversionAccuracy,
			matrix: n.matrix
		})
	}
	static fromDurationLike(t) {
		if (sr(t)) return ee.fromMillis(t);
		if (ee.isDuration(t)) return t;
		if (typeof t == "object") return ee.fromObject(t);
		throw new kt(`Unknown duration argument ${t} of type ${typeof t}`)
	}
	static fromISO(t, n) {
		const [r] = fT(t);
		return r ? ee.fromObject(r, n) : ee.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`)
	}
	static fromISOTime(t, n) {
		const [r] = hT(t);
		return r ? ee.fromObject(r, n) : ee.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`)
	}
	static invalid(t, n = null) {
		if (!t) throw new kt("need to specify a reason the Duration is invalid");
		const r = t instanceof zt ? t : new zt(t, n);
		if (Ce.throwOnInvalid) throw new Jb(r);
		return new ee({
			invalid: r
		})
	}
	static normalizeUnit(t) {
		const n = {
			year: "years",
			years: "years",
			quarter: "quarters",
			quarters: "quarters",
			month: "months",
			months: "months",
			week: "weeks",
			weeks: "weeks",
			day: "days",
			days: "days",
			hour: "hours",
			hours: "hours",
			minute: "minutes",
			minutes: "minutes",
			second: "seconds",
			seconds: "seconds",
			millisecond: "milliseconds",
			milliseconds: "milliseconds"
		} [t && t.toLowerCase()];
		if (!n) throw new j0(t);
		return n
	}
	static isDuration(t) {
		return t && t.isLuxonDuration || !1
	}
	get locale() {
		return this.isValid ? this.loc.locale : null
	}
	get numberingSystem() {
		return this.isValid ? this.loc.numberingSystem : null
	}
	toFormat(t, n = {}) {
		const r = {
			...n,
			floor: n.round !== !1 && n.floor !== !1
		};
		return this.isValid ? He.create(this.loc, r).formatDurationFromString(this, t) : pp
	}
	toHuman(t = {}) {
		if (!this.isValid) return pp;
		const n = ir.map(r => {
			const i = this.values[r];
			return J(i) ? null : this.loc.numberFormatter({
				style: "unit",
				unitDisplay: "long",
				...t,
				unit: r.slice(0, -1)
			}).format(i)
		}).filter(r => r);
		return this.loc.listFormatter({
			type: "conjunction",
			style: t.listStyle || "narrow",
			...t
		}).format(n)
	}
	toObject() {
		return this.isValid ? {
			...this.values
		} : {}
	}
	toISO() {
		if (!this.isValid) return null;
		let t = "P";
		return this.years !== 0 && (t += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (t += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (t += this.weeks + "W"), this.days !== 0 && (t += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (t += "T"), this.hours !== 0 && (t += this.hours + "H"), this.minutes !== 0 && (t += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (t += Nf(this.seconds + this.milliseconds / 1e3, 3) + "S"), t === "P" && (t += "T0S"), t
	}
	toISOTime(t = {}) {
		if (!this.isValid) return null;
		const n = this.toMillis();
		return n < 0 || n >= 864e5 ? null : (t = {
			suppressMilliseconds: !1,
			suppressSeconds: !1,
			includePrefix: !1,
			format: "extended",
			...t,
			includeOffset: !1
		}, V.fromMillis(n, {
			zone: "UTC"
		}).toISOTime(t))
	}
	toJSON() {
		return this.toISO()
	}
	toString() {
		return this.toISO()
	}
	toMillis() {
		return this.isValid ? h1(this.matrix, this.values) : NaN
	}
	valueOf() {
		return this.toMillis()
	}
	plus(t) {
		if (!this.isValid) return this;
		const n = ee.fromDurationLike(t),
			r = {};
		for (const i of ir)(ni(n.values, i) || ni(this.values, i)) && (r[i] = n.get(i) + this.get(i));
		return wn(this, {
			values: r
		}, !0)
	}
	minus(t) {
		if (!this.isValid) return this;
		const n = ee.fromDurationLike(t);
		return this.plus(n.negate())
	}
	mapUnits(t) {
		if (!this.isValid) return this;
		const n = {};
		for (const r of Object.keys(this.values)) n[r] = J0(t(this.values[r], r));
		return wn(this, {
			values: n
		}, !0)
	}
	get(t) {
		return this[ee.normalizeUnit(t)]
	}
	set(t) {
		if (!this.isValid) return this;
		const n = {
			...this.values,
			...ss(t, ee.normalizeUnit)
		};
		return wn(this, {
			values: n
		})
	}
	reconfigure({
		locale: t,
		numberingSystem: n,
		conversionAccuracy: r,
		matrix: i
	} = {}) {
		const o = {
			loc: this.loc.clone({
				locale: t,
				numberingSystem: n
			}),
			matrix: i,
			conversionAccuracy: r
		};
		return wn(this, o)
	}
	as(t) {
		return this.isValid ? this.shiftTo(t).get(t) : NaN
	}
	normalize() {
		if (!this.isValid) return this;
		const t = this.toObject();
		return mp(this.matrix, t), wn(this, {
			values: t
		}, !0)
	}
	rescale() {
		if (!this.isValid) return this;
		const t = kT(this.normalize().shiftToAll().toObject());
		return wn(this, {
			values: t
		}, !0)
	}
	shiftTo(...t) {
		if (!this.isValid) return this;
		if (t.length === 0) return this;
		t = t.map(o => ee.normalizeUnit(o));
		const n = {},
			r = {},
			i = this.toObject();
		let l;
		for (const o of ir)
			if (t.indexOf(o) >= 0) {
				l = o;
				let s = 0;
				for (const u in r) s += this.matrix[u][o] * r[u], r[u] = 0;
				sr(i[o]) && (s += i[o]);
				const a = Math.trunc(s);
				n[o] = a, r[o] = (s * 1e3 - a * 1e3) / 1e3
			} else sr(i[o]) && (r[o] = i[o]);
		for (const o in r) r[o] !== 0 && (n[l] += o === l ? r[o] : r[o] / this.matrix[l][o]);
		return mp(this.matrix, n), wn(this, {
			values: n
		}, !0)
	}
	shiftToAll() {
		return this.isValid ? this.shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds") : this
	}
	negate() {
		if (!this.isValid) return this;
		const t = {};
		for (const n of Object.keys(this.values)) t[n] = this.values[n] === 0 ? 0 : -this.values[n];
		return wn(this, {
			values: t
		}, !0)
	}
	get years() {
		return this.isValid ? this.values.years || 0 : NaN
	}
	get quarters() {
		return this.isValid ? this.values.quarters || 0 : NaN
	}
	get months() {
		return this.isValid ? this.values.months || 0 : NaN
	}
	get weeks() {
		return this.isValid ? this.values.weeks || 0 : NaN
	}
	get days() {
		return this.isValid ? this.values.days || 0 : NaN
	}
	get hours() {
		return this.isValid ? this.values.hours || 0 : NaN
	}
	get minutes() {
		return this.isValid ? this.values.minutes || 0 : NaN
	}
	get seconds() {
		return this.isValid ? this.values.seconds || 0 : NaN
	}
	get milliseconds() {
		return this.isValid ? this.values.milliseconds || 0 : NaN
	}
	get isValid() {
		return this.invalid === null
	}
	get invalidReason() {
		return this.invalid ? this.invalid.reason : null
	}
	get invalidExplanation() {
		return this.invalid ? this.invalid.explanation : null
	}
	equals(t) {
		if (!this.isValid || !t.isValid || !this.loc.equals(t.loc)) return !1;

		function n(r, i) {
			return r === void 0 || r === 0 ? i === void 0 || i === 0 : r === i
		}
		for (const r of ir)
			if (!n(this.values[r], t.values[r])) return !1;
		return !0
	}
}
const br = "Invalid Interval";

function ST(e, t) {
	return !e || !e.isValid ? Ee.invalid("missing or invalid start") : !t || !t.isValid ? Ee.invalid("missing or invalid end") : t < e ? Ee.invalid("end before start", `The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`) : null
}
class Ee {
	constructor(t) {
		this.s = t.start, this.e = t.end, this.invalid = t.invalid || null, this.isLuxonInterval = !0
	}
	static invalid(t, n = null) {
		if (!t) throw new kt("need to specify a reason the Interval is invalid");
		const r = t instanceof zt ? t : new zt(t, n);
		if (Ce.throwOnInvalid) throw new Xb(r);
		return new Ee({
			invalid: r
		})
	}
	static fromDateTimes(t, n) {
		const r = bi(t),
			i = bi(n),
			l = ST(r, i);
		return l ?? new Ee({
			start: r,
			end: i
		})
	}
	static after(t, n) {
		const r = ee.fromDurationLike(n),
			i = bi(t);
		return Ee.fromDateTimes(i, i.plus(r))
	}
	static before(t, n) {
		const r = ee.fromDurationLike(n),
			i = bi(t);
		return Ee.fromDateTimes(i.minus(r), i)
	}
	static fromISO(t, n) {
		const [r, i] = (t || "").split("/", 2);
		if (r && i) {
			let l, o;
			try {
				l = V.fromISO(r, n), o = l.isValid
			} catch {
				o = !1
			}
			let s, a;
			try {
				s = V.fromISO(i, n), a = s.isValid
			} catch {
				a = !1
			}
			if (o && a) return Ee.fromDateTimes(l, s);
			if (o) {
				const u = ee.fromISO(i, n);
				if (u.isValid) return Ee.after(l, u)
			} else if (a) {
				const u = ee.fromISO(r, n);
				if (u.isValid) return Ee.before(s, u)
			}
		}
		return Ee.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`)
	}
	static isInterval(t) {
		return t && t.isLuxonInterval || !1
	}
	get start() {
		return this.isValid ? this.s : null
	}
	get end() {
		return this.isValid ? this.e : null
	}
	get isValid() {
		return this.invalidReason === null
	}
	get invalidReason() {
		return this.invalid ? this.invalid.reason : null
	}
	get invalidExplanation() {
		return this.invalid ? this.invalid.explanation : null
	}
	length(t = "milliseconds") {
		return this.isValid ? this.toDuration(t).get(t) : NaN
	}
	count(t = "milliseconds") {
		if (!this.isValid) return NaN;
		const n = this.start.startOf(t),
			r = this.end.startOf(t);
		return Math.floor(r.diff(n, t).get(t)) + (r.valueOf() !== this.end.valueOf())
	}
	hasSame(t) {
		return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, t) : !1
	}
	isEmpty() {
		return this.s.valueOf() === this.e.valueOf()
	}
	isAfter(t) {
		return this.isValid ? this.s > t : !1
	}
	isBefore(t) {
		return this.isValid ? this.e <= t : !1
	}
	contains(t) {
		return this.isValid ? this.s <= t && this.e > t : !1
	}
	set({
		start: t,
		end: n
	} = {}) {
		return this.isValid ? Ee.fromDateTimes(t || this.s, n || this.e) : this
	}
	splitAt(...t) {
		if (!this.isValid) return [];
		const n = t.map(bi).filter(o => this.contains(o)).sort(),
			r = [];
		let {
			s: i
		} = this, l = 0;
		for (; i < this.e;) {
			const o = n[l] || this.e,
				s = +o > +this.e ? this.e : o;
			r.push(Ee.fromDateTimes(i, s)), i = s, l += 1
		}
		return r
	}
	splitBy(t) {
		const n = ee.fromDurationLike(t);
		if (!this.isValid || !n.isValid || n.as("milliseconds") === 0) return [];
		let {
			s: r
		} = this, i = 1, l;
		const o = [];
		for (; r < this.e;) {
			const s = this.start.plus(n.mapUnits(a => a * i));
			l = +s > +this.e ? this.e : s, o.push(Ee.fromDateTimes(r, l)), r = l, i += 1
		}
		return o
	}
	divideEqually(t) {
		return this.isValid ? this.splitBy(this.length() / t).slice(0, t) : []
	}
	overlaps(t) {
		return this.e > t.s && this.s < t.e
	}
	abutsStart(t) {
		return this.isValid ? +this.e == +t.s : !1
	}
	abutsEnd(t) {
		return this.isValid ? +t.e == +this.s : !1
	}
	engulfs(t) {
		return this.isValid ? this.s <= t.s && this.e >= t.e : !1
	}
	equals(t) {
		return !this.isValid || !t.isValid ? !1 : this.s.equals(t.s) && this.e.equals(t.e)
	}
	intersection(t) {
		if (!this.isValid) return this;
		const n = this.s > t.s ? this.s : t.s,
			r = this.e < t.e ? this.e : t.e;
		return n >= r ? null : Ee.fromDateTimes(n, r)
	}
	union(t) {
		if (!this.isValid) return this;
		const n = this.s < t.s ? this.s : t.s,
			r = this.e > t.e ? this.e : t.e;
		return Ee.fromDateTimes(n, r)
	}
	static merge(t) {
		const [n, r] = t.sort((i, l) => i.s - l.s).reduce(([i, l], o) => l ? l.overlaps(o) || l.abutsStart(o) ? [i, l.union(o)] : [i.concat([l]), o] : [i, o], [
			[], null
		]);
		return r && n.push(r), n
	}
	static xor(t) {
		let n = null,
			r = 0;
		const i = [],
			l = t.map(a => [{
				time: a.s,
				type: "s"
			}, {
				time: a.e,
				type: "e"
			}]),
			o = Array.prototype.concat(...l),
			s = o.sort((a, u) => a.time - u.time);
		for (const a of s) r += a.type === "s" ? 1 : -1, r === 1 ? n = a.time : (n && +n != +a.time && i.push(Ee.fromDateTimes(n, a.time)), n = null);
		return Ee.merge(i)
	}
	difference(...t) {
		return Ee.xor([this].concat(t)).map(n => this.intersection(n)).filter(n => n && !n.isEmpty())
	}
	toString() {
		return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : br
	}
	toLocaleString(t = is, n = {}) {
		return this.isValid ? He.create(this.s.loc.clone(n), t).formatInterval(this) : br
	}
	toISO(t) {
		return this.isValid ? `${this.s.toISO(t)}/${this.e.toISO(t)}` : br
	}
	toISODate() {
		return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : br
	}
	toISOTime(t) {
		return this.isValid ? `${this.s.toISOTime(t)}/${this.e.toISOTime(t)}` : br
	}
	toFormat(t, {
		separator: n = " – "
	} = {}) {
		return this.isValid ? `${this.s.toFormat(t)}${n}${this.e.toFormat(t)}` : br
	}
	toDuration(t, n) {
		return this.isValid ? this.e.diff(this.s, t, n) : ee.invalid(this.invalidReason)
	}
	mapEndpoints(t) {
		return Ee.fromDateTimes(t(this.s), t(this.e))
	}
}
class Xl {
	static hasDST(t = Ce.defaultZone) {
		const n = V.now().setZone(t).set({
			month: 12
		});
		return !t.isUniversal && n.offset !== n.set({
			month: 6
		}).offset
	}
	static isValidIANAZone(t) {
		return fn.isValidZone(t)
	}
	static normalizeZone(t) {
		return Nn(t, Ce.defaultZone)
	}
	static months(t = "long", {
		locale: n = null,
		numberingSystem: r = null,
		locObj: i = null,
		outputCalendar: l = "gregory"
	} = {}) {
		return (i || me.create(n, r, l)).months(t)
	}
	static monthsFormat(t = "long", {
		locale: n = null,
		numberingSystem: r = null,
		locObj: i = null,
		outputCalendar: l = "gregory"
	} = {}) {
		return (i || me.create(n, r, l)).months(t, !0)
	}
	static weekdays(t = "long", {
		locale: n = null,
		numberingSystem: r = null,
		locObj: i = null
	} = {}) {
		return (i || me.create(n, r, null)).weekdays(t)
	}
	static weekdaysFormat(t = "long", {
		locale: n = null,
		numberingSystem: r = null,
		locObj: i = null
	} = {}) {
		return (i || me.create(n, r, null)).weekdays(t, !0)
	}
	static meridiems({
		locale: t = null
	} = {}) {
		return me.create(t).meridiems()
	}
	static eras(t = "short", {
		locale: n = null
	} = {}) {
		return me.create(n, null, "gregory").eras(t)
	}
	static features() {
		return {
			relative: Y0()
		}
	}
}

function gp(e, t) {
	const n = i => i.toUTC(0, {
			keepLocalTime: !0
		}).startOf("day").valueOf(),
		r = n(t) - n(e);
	return Math.floor(ee.fromMillis(r).as("days"))
}

function ET(e, t, n) {
	const r = [
			["years", (a, u) => u.year - a.year],
			["quarters", (a, u) => u.quarter - a.quarter + (u.year - a.year) * 4],
			["months", (a, u) => u.month - a.month + (u.year - a.year) * 12],
			["weeks", (a, u) => {
				const c = gp(a, u);
				return (c - c % 7) / 7
			}],
			["days", gp]
		],
		i = {},
		l = e;
	let o, s;
	for (const [a, u] of r) n.indexOf(a) >= 0 && (o = a, i[a] = u(e, t), s = l.plus(i), s > t ? (i[a]--, e = l.plus(i), e > t && (s = e, i[a]--, e = l.plus(i))) : e = s);
	return [e, i, s, o]
}

function CT(e, t, n, r) {
	let [i, l, o, s] = ET(e, t, n);
	const a = t - i,
		u = n.filter(f => ["hours", "minutes", "seconds", "milliseconds"].indexOf(f) >= 0);
	u.length === 0 && (o < t && (o = i.plus({
		[s]: 1
	})), o !== i && (l[s] = (l[s] || 0) + a / (o - i)));
	const c = ee.fromObject(l, r);
	return u.length > 0 ? ee.fromMillis(a, r).shiftTo(...u).plus(c) : c
}
const Af = {
		arab: "[٠-٩]",
		arabext: "[۰-۹]",
		bali: "[᭐-᭙]",
		beng: "[০-৯]",
		deva: "[०-९]",
		fullwide: "[０-９]",
		gujr: "[૦-૯]",
		hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
		khmr: "[០-៩]",
		knda: "[೦-೯]",
		laoo: "[໐-໙]",
		limb: "[᥆-᥏]",
		mlym: "[൦-൯]",
		mong: "[᠐-᠙]",
		mymr: "[၀-၉]",
		orya: "[୦-୯]",
		tamldec: "[௦-௯]",
		telu: "[౦-౯]",
		thai: "[๐-๙]",
		tibt: "[༠-༩]",
		latn: "\\d"
	},
	yp = {
		arab: [1632, 1641],
		arabext: [1776, 1785],
		bali: [6992, 7001],
		beng: [2534, 2543],
		deva: [2406, 2415],
		fullwide: [65296, 65303],
		gujr: [2790, 2799],
		khmr: [6112, 6121],
		knda: [3302, 3311],
		laoo: [3792, 3801],
		limb: [6470, 6479],
		mlym: [3430, 3439],
		mong: [6160, 6169],
		mymr: [4160, 4169],
		orya: [2918, 2927],
		tamldec: [3046, 3055],
		telu: [3174, 3183],
		thai: [3664, 3673],
		tibt: [3872, 3881]
	},
	NT = Af.hanidec.replace(/[\[|\]]/g, "").split("");

function bT(e) {
	let t = parseInt(e, 10);
	if (isNaN(t)) {
		t = "";
		for (let n = 0; n < e.length; n++) {
			const r = e.charCodeAt(n);
			if (e[n].search(Af.hanidec) !== -1) t += NT.indexOf(e[n]);
			else
				for (const i in yp) {
					const [l, o] = yp[i];
					r >= l && r <= o && (t += r - l)
				}
		}
		return parseInt(t, 10)
	} else return t
}

function Pt({
	numberingSystem: e
}, t = "") {
	return new RegExp(`${Af[e||"latn"]}${t}`)
}
const TT = "missing Intl.DateTimeFormat.formatToParts support";

function re(e, t = n => n) {
	return {
		regex: e,
		deser: ([n]) => t(bT(n))
	}
}
const OT = String.fromCharCode(160),
	p1 = `[ ${OT}]`,
	m1 = new RegExp(p1, "g");

function AT(e) {
	return e.replace(/\./g, "\\.?").replace(m1, p1)
}

function xp(e) {
	return e.replace(/\./g, "").replace(m1, " ").toLowerCase()
}

function It(e, t) {
	return e === null ? null : {
		regex: RegExp(e.map(AT).join("|")),
		deser: ([n]) => e.findIndex(r => xp(n) === xp(r)) + t
	}
}

function wp(e, t) {
	return {
		regex: e,
		deser: ([, n, r]) => Fs(n, r),
		groups: t
	}
}

function Jl(e) {
	return {
		regex: e,
		deser: ([t]) => t
	}
}

function jT(e) {
	return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
}

function PT(e, t) {
	const n = Pt(t),
		r = Pt(t, "{2}"),
		i = Pt(t, "{3}"),
		l = Pt(t, "{4}"),
		o = Pt(t, "{6}"),
		s = Pt(t, "{1,2}"),
		a = Pt(t, "{1,3}"),
		u = Pt(t, "{1,6}"),
		c = Pt(t, "{1,9}"),
		f = Pt(t, "{2,4}"),
		h = Pt(t, "{4,6}"),
		d = S => ({
			regex: RegExp(jT(S.val)),
			deser: ([m]) => m,
			literal: !0
		}),
		x = (S => {
			if (e.literal) return d(S);
			switch (S.val) {
				case "G":
					return It(t.eras("short"), 0);
				case "GG":
					return It(t.eras("long"), 0);
				case "y":
					return re(u);
				case "yy":
					return re(f, ec);
				case "yyyy":
					return re(l);
				case "yyyyy":
					return re(h);
				case "yyyyyy":
					return re(o);
				case "M":
					return re(s);
				case "MM":
					return re(r);
				case "MMM":
					return It(t.months("short", !0), 1);
				case "MMMM":
					return It(t.months("long", !0), 1);
				case "L":
					return re(s);
				case "LL":
					return re(r);
				case "LLL":
					return It(t.months("short", !1), 1);
				case "LLLL":
					return It(t.months("long", !1), 1);
				case "d":
					return re(s);
				case "dd":
					return re(r);
				case "o":
					return re(a);
				case "ooo":
					return re(i);
				case "HH":
					return re(r);
				case "H":
					return re(s);
				case "hh":
					return re(r);
				case "h":
					return re(s);
				case "mm":
					return re(r);
				case "m":
					return re(s);
				case "q":
					return re(s);
				case "qq":
					return re(r);
				case "s":
					return re(s);
				case "ss":
					return re(r);
				case "S":
					return re(a);
				case "SSS":
					return re(i);
				case "u":
					return Jl(c);
				case "uu":
					return Jl(s);
				case "uuu":
					return re(n);
				case "a":
					return It(t.meridiems(), 0);
				case "kkkk":
					return re(l);
				case "kk":
					return re(f, ec);
				case "W":
					return re(s);
				case "WW":
					return re(r);
				case "E":
				case "c":
					return re(n);
				case "EEE":
					return It(t.weekdays("short", !1), 1);
				case "EEEE":
					return It(t.weekdays("long", !1), 1);
				case "ccc":
					return It(t.weekdays("short", !0), 1);
				case "cccc":
					return It(t.weekdays("long", !0), 1);
				case "Z":
				case "ZZ":
					return wp(new RegExp(`([+-]${s.source})(?::(${r.source}))?`), 2);
				case "ZZZ":
					return wp(new RegExp(`([+-]${s.source})(${r.source})?`), 2);
				case "z":
					return Jl(/[a-z_+-/]{1,256}?/i);
				case " ":
					return Jl(/[^\S\n\r]/);
				default:
					return d(S)
			}
		})(e) || {
			invalidReason: TT
		};
	return x.token = e, x
}
const IT = {
	year: {
		"2-digit": "yy",
		numeric: "yyyyy"
	},
	month: {
		numeric: "M",
		"2-digit": "MM",
		short: "MMM",
		long: "MMMM"
	},
	day: {
		numeric: "d",
		"2-digit": "dd"
	},
	weekday: {
		short: "EEE",
		long: "EEEE"
	},
	dayperiod: "a",
	dayPeriod: "a",
	hour12: {
		numeric: "h",
		"2-digit": "hh"
	},
	hour24: {
		numeric: "H",
		"2-digit": "HH"
	},
	minute: {
		numeric: "m",
		"2-digit": "mm"
	},
	second: {
		numeric: "s",
		"2-digit": "ss"
	},
	timeZoneName: {
		long: "ZZZZZ",
		short: "ZZZ"
	}
};

function LT(e, t, n) {
	const {
		type: r,
		value: i
	} = e;
	if (r === "literal") {
		const a = /^\s+$/.test(i);
		return {
			literal: !a,
			val: a ? " " : i
		}
	}
	const l = t[r];
	let o = r;
	r === "hour" && (t.hour12 != null ? o = t.hour12 ? "hour12" : "hour24" : t.hourCycle != null ? t.hourCycle === "h11" || t.hourCycle === "h12" ? o = "hour12" : o = "hour24" : o = n.hour12 ? "hour12" : "hour24");
	let s = IT[o];
	if (typeof s == "object" && (s = s[l]), s) return {
		literal: !1,
		val: s
	}
}

function MT(e) {
	return [`^${e.map(n=>n.regex).reduce((n,r)=>`${n}(${r.source})`,"")}$`, e]
}

function DT(e, t, n) {
	const r = e.match(t);
	if (r) {
		const i = {};
		let l = 1;
		for (const o in n)
			if (ni(n, o)) {
				const s = n[o],
					a = s.groups ? s.groups + 1 : 1;
				!s.literal && s.token && (i[s.token.val[0]] = s.deser(r.slice(l, l + a))), l += a
			} return [r, i]
	} else return [r, {}]
}

function RT(e) {
	const t = l => {
		switch (l) {
			case "S":
				return "millisecond";
			case "s":
				return "second";
			case "m":
				return "minute";
			case "h":
			case "H":
				return "hour";
			case "d":
				return "day";
			case "o":
				return "ordinal";
			case "L":
			case "M":
				return "month";
			case "y":
				return "year";
			case "E":
			case "c":
				return "weekday";
			case "W":
				return "weekNumber";
			case "k":
				return "weekYear";
			case "q":
				return "quarter";
			default:
				return null
		}
	};
	let n = null,
		r;
	return J(e.z) || (n = fn.create(e.z)), J(e.Z) || (n || (n = new Ge(e.Z)), r = e.Z), J(e.q) || (e.M = (e.q - 1) * 3 + 1), J(e.h) || (e.h < 12 && e.a === 1 ? e.h += 12 : e.h === 12 && e.a === 0 && (e.h = 0)), e.G === 0 && e.y && (e.y = -e.y), J(e.u) || (e.S = Cf(e.u)), [Object.keys(e).reduce((l, o) => {
		const s = t(o);
		return s && (l[s] = e[o]), l
	}, {}), n, r]
}
let Da = null;

function zT() {
	return Da || (Da = V.fromMillis(1555555555555)), Da
}

function FT(e, t) {
	if (e.literal) return e;
	const n = He.macroTokenToFormatOpts(e.val),
		r = x1(n, t);
	return r == null || r.includes(void 0) ? e : r
}

function g1(e, t) {
	return Array.prototype.concat(...e.map(n => FT(n, t)))
}

function y1(e, t, n) {
	const r = g1(He.parseFormat(n), e),
		i = r.map(o => PT(o, e)),
		l = i.find(o => o.invalidReason);
	if (l) return {
		input: t,
		tokens: r,
		invalidReason: l.invalidReason
	};
	{
		const [o, s] = MT(i), a = RegExp(o, "i"), [u, c] = DT(t, a, s), [f, h, d] = c ? RT(c) : [null, null, void 0];
		if (ni(c, "a") && ni(c, "H")) throw new Pi("Can't include meridiem when specifying 24-hour format");
		return {
			input: t,
			tokens: r,
			regex: a,
			rawMatches: u,
			matches: c,
			result: f,
			zone: h,
			specificOffset: d
		}
	}
}

function _T(e, t, n) {
	const {
		result: r,
		zone: i,
		specificOffset: l,
		invalidReason: o
	} = y1(e, t, n);
	return [r, i, l, o]
}

function x1(e, t) {
	if (!e) return null;
	const r = He.create(t, e).dtFormatter(zT()),
		i = r.formatToParts(),
		l = r.resolvedOptions();
	return i.map(o => LT(o, e, l))
}
const w1 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
	v1 = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function Et(e, t) {
	return new zt("unit out of range", `you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)
}

function k1(e, t, n) {
	const r = new Date(Date.UTC(e, t - 1, n));
	e < 100 && e >= 0 && r.setUTCFullYear(r.getUTCFullYear() - 1900);
	const i = r.getUTCDay();
	return i === 0 ? 7 : i
}

function S1(e, t, n) {
	return n + (Cl(e) ? v1 : w1)[t - 1]
}

function E1(e, t) {
	const n = Cl(e) ? v1 : w1,
		r = n.findIndex(l => l < t),
		i = t - n[r];
	return {
		month: r + 1,
		day: i
	}
}

function tc(e) {
	const {
		year: t,
		month: n,
		day: r
	} = e, i = S1(t, n, r), l = k1(t, n, r);
	let o = Math.floor((i - l + 10) / 7),
		s;
	return o < 1 ? (s = t - 1, o = os(s)) : o > os(t) ? (s = t + 1, o = 1) : s = t, {
		weekYear: s,
		weekNumber: o,
		weekday: l,
		..._s(e)
	}
}

function vp(e) {
	const {
		weekYear: t,
		weekNumber: n,
		weekday: r
	} = e, i = k1(t, 1, 4), l = Hi(t);
	let o = n * 7 + r - i - 3,
		s;
	o < 1 ? (s = t - 1, o += Hi(s)) : o > l ? (s = t + 1, o -= Hi(t)) : s = t;
	const {
		month: a,
		day: u
	} = E1(s, o);
	return {
		year: s,
		month: a,
		day: u,
		..._s(e)
	}
}

function Ra(e) {
	const {
		year: t,
		month: n,
		day: r
	} = e, i = S1(t, n, r);
	return {
		year: t,
		ordinal: i,
		..._s(e)
	}
}

function kp(e) {
	const {
		year: t,
		ordinal: n
	} = e, {
		month: r,
		day: i
	} = E1(t, n);
	return {
		year: t,
		month: r,
		day: i,
		..._s(e)
	}
}

function BT(e) {
	const t = Rs(e.weekYear),
		n = rn(e.weekNumber, 1, os(e.weekYear)),
		r = rn(e.weekday, 1, 7);
	return t ? n ? r ? !1 : Et("weekday", e.weekday) : Et("week", e.week) : Et("weekYear", e.weekYear)
}

function UT(e) {
	const t = Rs(e.year),
		n = rn(e.ordinal, 1, Hi(e.year));
	return t ? n ? !1 : Et("ordinal", e.ordinal) : Et("year", e.year)
}

function C1(e) {
	const t = Rs(e.year),
		n = rn(e.month, 1, 12),
		r = rn(e.day, 1, ls(e.year, e.month));
	return t ? n ? r ? !1 : Et("day", e.day) : Et("month", e.month) : Et("year", e.year)
}

function N1(e) {
	const {
		hour: t,
		minute: n,
		second: r,
		millisecond: i
	} = e, l = rn(t, 0, 23) || t === 24 && n === 0 && r === 0 && i === 0, o = rn(n, 0, 59), s = rn(r, 0, 59), a = rn(i, 0, 999);
	return l ? o ? s ? a ? !1 : Et("millisecond", i) : Et("second", r) : Et("minute", n) : Et("hour", t)
}
const za = "Invalid DateTime",
	Sp = 864e13;

function Kl(e) {
	return new zt("unsupported zone", `the zone "${e.name}" is not supported`)
}

function Fa(e) {
	return e.weekData === null && (e.weekData = tc(e.c)), e.weekData
}

function Xn(e, t) {
	const n = {
		ts: e.ts,
		zone: e.zone,
		c: e.c,
		o: e.o,
		loc: e.loc,
		invalid: e.invalid
	};
	return new V({
		...n,
		...t,
		old: n
	})
}

function b1(e, t, n) {
	let r = e - t * 60 * 1e3;
	const i = n.offset(r);
	if (t === i) return [r, t];
	r -= (i - t) * 60 * 1e3;
	const l = n.offset(r);
	return i === l ? [r, i] : [e - Math.min(i, l) * 60 * 1e3, Math.max(i, l)]
}

function eo(e, t) {
	e += t * 60 * 1e3;
	const n = new Date(e);
	return {
		year: n.getUTCFullYear(),
		month: n.getUTCMonth() + 1,
		day: n.getUTCDate(),
		hour: n.getUTCHours(),
		minute: n.getUTCMinutes(),
		second: n.getUTCSeconds(),
		millisecond: n.getUTCMilliseconds()
	}
}

function So(e, t, n) {
	return b1(zs(e), t, n)
}

function Ep(e, t) {
	const n = e.o,
		r = e.c.year + Math.trunc(t.years),
		i = e.c.month + Math.trunc(t.months) + Math.trunc(t.quarters) * 3,
		l = {
			...e.c,
			year: r,
			month: i,
			day: Math.min(e.c.day, ls(r, i)) + Math.trunc(t.days) + Math.trunc(t.weeks) * 7
		},
		o = ee.fromObject({
			years: t.years - Math.trunc(t.years),
			quarters: t.quarters - Math.trunc(t.quarters),
			months: t.months - Math.trunc(t.months),
			weeks: t.weeks - Math.trunc(t.weeks),
			days: t.days - Math.trunc(t.days),
			hours: t.hours,
			minutes: t.minutes,
			seconds: t.seconds,
			milliseconds: t.milliseconds
		}).as("milliseconds"),
		s = zs(l);
	let [a, u] = b1(s, n, e.zone);
	return o !== 0 && (a += o, u = e.zone.offset(a)), {
		ts: a,
		o: u
	}
}

function Ni(e, t, n, r, i, l) {
	const {
		setZone: o,
		zone: s
	} = n;
	if (e && Object.keys(e).length !== 0 || t) {
		const a = t || s,
			u = V.fromObject(e, {
				...n,
				zone: a,
				specificOffset: l
			});
		return o ? u : u.setZone(s)
	} else return V.invalid(new zt("unparsable", `the input "${i}" can't be parsed as ${r}`))
}

function to(e, t, n = !0) {
	return e.isValid ? He.create(me.create("en-US"), {
		allowZ: n,
		forceSimple: !0
	}).formatDateTimeFromString(e, t) : null
}

function _a(e, t) {
	const n = e.c.year > 9999 || e.c.year < 0;
	let r = "";
	return n && e.c.year >= 0 && (r += "+"), r += Ae(e.c.year, n ? 6 : 4), t ? (r += "-", r += Ae(e.c.month), r += "-", r += Ae(e.c.day)) : (r += Ae(e.c.month), r += Ae(e.c.day)), r
}

function Cp(e, t, n, r, i, l) {
	let o = Ae(e.c.hour);
	return t ? (o += ":", o += Ae(e.c.minute), (e.c.millisecond !== 0 || e.c.second !== 0 || !n) && (o += ":")) : o += Ae(e.c.minute), (e.c.millisecond !== 0 || e.c.second !== 0 || !n) && (o += Ae(e.c.second), (e.c.millisecond !== 0 || !r) && (o += ".", o += Ae(e.c.millisecond, 3))), i && (e.isOffsetFixed && e.offset === 0 && !l ? o += "Z" : e.o < 0 ? (o += "-", o += Ae(Math.trunc(-e.o / 60)), o += ":", o += Ae(Math.trunc(-e.o % 60))) : (o += "+", o += Ae(Math.trunc(e.o / 60)), o += ":", o += Ae(Math.trunc(e.o % 60)))), l && (o += "[" + e.zone.ianaName + "]"), o
}
const T1 = {
		month: 1,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	},
	VT = {
		weekNumber: 1,
		weekday: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	},
	$T = {
		ordinal: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	},
	O1 = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
	HT = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"],
	WT = ["year", "ordinal", "hour", "minute", "second", "millisecond"];

function Np(e) {
	const t = {
		year: "year",
		years: "year",
		month: "month",
		months: "month",
		day: "day",
		days: "day",
		hour: "hour",
		hours: "hour",
		minute: "minute",
		minutes: "minute",
		quarter: "quarter",
		quarters: "quarter",
		second: "second",
		seconds: "second",
		millisecond: "millisecond",
		milliseconds: "millisecond",
		weekday: "weekday",
		weekdays: "weekday",
		weeknumber: "weekNumber",
		weeksnumber: "weekNumber",
		weeknumbers: "weekNumber",
		weekyear: "weekYear",
		weekyears: "weekYear",
		ordinal: "ordinal"
	} [e.toLowerCase()];
	if (!t) throw new j0(e);
	return t
}

function bp(e, t) {
	const n = Nn(t.zone, Ce.defaultZone),
		r = me.fromObject(t),
		i = Ce.now();
	let l, o;
	if (J(e.year)) l = i;
	else {
		for (const u of O1) J(e[u]) && (e[u] = T1[u]);
		const s = C1(e) || N1(e);
		if (s) return V.invalid(s);
		const a = n.offset(i);
		[l, o] = So(e, a, n)
	}
	return new V({
		ts: l,
		zone: n,
		loc: r,
		o
	})
}

function Tp(e, t, n) {
	const r = J(n.round) ? !0 : n.round,
		i = (o, s) => (o = Nf(o, r || n.calendary ? 0 : 2, !0), t.loc.clone(n).relFormatter(n).format(o, s)),
		l = o => n.calendary ? t.hasSame(e, o) ? 0 : t.startOf(o).diff(e.startOf(o), o).get(o) : t.diff(e, o).get(o);
	if (n.unit) return i(l(n.unit), n.unit);
	for (const o of n.units) {
		const s = l(o);
		if (Math.abs(s) >= 1) return i(s, o)
	}
	return i(e > t ? -0 : 0, n.units[n.units.length - 1])
}

function Op(e) {
	let t = {},
		n;
	return e.length > 0 && typeof e[e.length - 1] == "object" ? (t = e[e.length - 1], n = Array.from(e).slice(0, e.length - 1)) : n = Array.from(e), [t, n]
}
class V {
	constructor(t) {
		const n = t.zone || Ce.defaultZone;
		let r = t.invalid || (Number.isNaN(t.ts) ? new zt("invalid input") : null) || (n.isValid ? null : Kl(n));
		this.ts = J(t.ts) ? Ce.now() : t.ts;
		let i = null,
			l = null;
		if (!r)
			if (t.old && t.old.ts === this.ts && t.old.zone.equals(n))[i, l] = [t.old.c, t.old.o];
			else {
				const s = n.offset(this.ts);
				i = eo(this.ts, s), r = Number.isNaN(i.year) ? new zt("invalid input") : null, i = r ? null : i, l = r ? null : s
			} this._zone = n, this.loc = t.loc || me.create(), this.invalid = r, this.weekData = null, this.c = i, this.o = l, this.isLuxonDateTime = !0
	}
	static now() {
		return new V({})
	}
	static local() {
		const [t, n] = Op(arguments), [r, i, l, o, s, a, u] = n;
		return bp({
			year: r,
			month: i,
			day: l,
			hour: o,
			minute: s,
			second: a,
			millisecond: u
		}, t)
	}
	static utc() {
		const [t, n] = Op(arguments), [r, i, l, o, s, a, u] = n;
		return t.zone = Ge.utcInstance, bp({
			year: r,
			month: i,
			day: l,
			hour: o,
			minute: s,
			second: a,
			millisecond: u
		}, t)
	}
	static fromJSDate(t, n = {}) {
		const r = w3(t) ? t.valueOf() : NaN;
		if (Number.isNaN(r)) return V.invalid("invalid input");
		const i = Nn(n.zone, Ce.defaultZone);
		return i.isValid ? new V({
			ts: r,
			zone: i,
			loc: me.fromObject(n)
		}) : V.invalid(Kl(i))
	}
	static fromMillis(t, n = {}) {
		if (sr(t)) return t < -Sp || t > Sp ? V.invalid("Timestamp out of range") : new V({
			ts: t,
			zone: Nn(n.zone, Ce.defaultZone),
			loc: me.fromObject(n)
		});
		throw new kt(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)
	}
	static fromSeconds(t, n = {}) {
		if (sr(t)) return new V({
			ts: t * 1e3,
			zone: Nn(n.zone, Ce.defaultZone),
			loc: me.fromObject(n)
		});
		throw new kt("fromSeconds requires a numerical input")
	}
	static fromObject(t, n = {}) {
		t = t || {};
		const r = Nn(n.zone, Ce.defaultZone);
		if (!r.isValid) return V.invalid(Kl(r));
		const i = Ce.now(),
			l = J(n.specificOffset) ? r.offset(i) : n.specificOffset,
			o = ss(t, Np),
			s = !J(o.ordinal),
			a = !J(o.year),
			u = !J(o.month) || !J(o.day),
			c = a || u,
			f = o.weekYear || o.weekNumber,
			h = me.fromObject(n);
		if ((c || s) && f) throw new Pi("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
		if (u && s) throw new Pi("Can't mix ordinal dates with month/day");
		const d = f || o.weekday && !c;
		let p, x, S = eo(i, l);
		d ? (p = HT, x = VT, S = tc(S)) : s ? (p = WT, x = $T, S = Ra(S)) : (p = O1, x = T1);
		let m = !1;
		for (const L of p) {
			const B = o[L];
			J(B) ? m ? o[L] = x[L] : o[L] = S[L] : m = !0
		}
		const y = d ? BT(o) : s ? UT(o) : C1(o),
			w = y || N1(o);
		if (w) return V.invalid(w);
		const N = d ? vp(o) : s ? kp(o) : o,
			[b, E] = So(N, l, r),
			j = new V({
				ts: b,
				zone: r,
				o: E,
				loc: h
			});
		return o.weekday && c && t.weekday !== j.weekday ? V.invalid("mismatched weekday", `you can't specify both a weekday of ${o.weekday} and a date of ${j.toISO()}`) : j
	}
	static fromISO(t, n = {}) {
		const [r, i] = aT(t);
		return Ni(r, i, n, "ISO 8601", t)
	}
	static fromRFC2822(t, n = {}) {
		const [r, i] = uT(t);
		return Ni(r, i, n, "RFC 2822", t)
	}
	static fromHTTP(t, n = {}) {
		const [r, i] = cT(t);
		return Ni(r, i, n, "HTTP", n)
	}
	static fromFormat(t, n, r = {}) {
		if (J(t) || J(n)) throw new kt("fromFormat requires an input string and a format");
		const {
			locale: i = null,
			numberingSystem: l = null
		} = r, o = me.fromOpts({
			locale: i,
			numberingSystem: l,
			defaultToEN: !0
		}), [s, a, u, c] = _T(o, t, n);
		return c ? V.invalid(c) : Ni(s, a, r, `format ${n}`, t, u)
	}
	static fromString(t, n, r = {}) {
		return V.fromFormat(t, n, r)
	}
	static fromSQL(t, n = {}) {
		const [r, i] = yT(t);
		return Ni(r, i, n, "SQL", t)
	}
	static invalid(t, n = null) {
		if (!t) throw new kt("need to specify a reason the DateTime is invalid");
		const r = t instanceof zt ? t : new zt(t, n);
		if (Ce.throwOnInvalid) throw new Yb(r);
		return new V({
			invalid: r
		})
	}
	static isDateTime(t) {
		return t && t.isLuxonDateTime || !1
	}
	static parseFormatForOpts(t, n = {}) {
		const r = x1(t, me.fromObject(n));
		return r ? r.map(i => i ? i.val : null).join("") : null
	}
	static expandFormat(t, n = {}) {
		return g1(He.parseFormat(t), me.fromObject(n)).map(i => i.val).join("")
	}
	get(t) {
		return this[t]
	}
	get isValid() {
		return this.invalid === null
	}
	get invalidReason() {
		return this.invalid ? this.invalid.reason : null
	}
	get invalidExplanation() {
		return this.invalid ? this.invalid.explanation : null
	}
	get locale() {
		return this.isValid ? this.loc.locale : null
	}
	get numberingSystem() {
		return this.isValid ? this.loc.numberingSystem : null
	}
	get outputCalendar() {
		return this.isValid ? this.loc.outputCalendar : null
	}
	get zone() {
		return this._zone
	}
	get zoneName() {
		return this.isValid ? this.zone.name : null
	}
	get year() {
		return this.isValid ? this.c.year : NaN
	}
	get quarter() {
		return this.isValid ? Math.ceil(this.c.month / 3) : NaN
	}
	get month() {
		return this.isValid ? this.c.month : NaN
	}
	get day() {
		return this.isValid ? this.c.day : NaN
	}
	get hour() {
		return this.isValid ? this.c.hour : NaN
	}
	get minute() {
		return this.isValid ? this.c.minute : NaN
	}
	get second() {
		return this.isValid ? this.c.second : NaN
	}
	get millisecond() {
		return this.isValid ? this.c.millisecond : NaN
	}
	get weekYear() {
		return this.isValid ? Fa(this).weekYear : NaN
	}
	get weekNumber() {
		return this.isValid ? Fa(this).weekNumber : NaN
	}
	get weekday() {
		return this.isValid ? Fa(this).weekday : NaN
	}
	get ordinal() {
		return this.isValid ? Ra(this.c).ordinal : NaN
	}
	get monthShort() {
		return this.isValid ? Xl.months("short", {
			locObj: this.loc
		})[this.month - 1] : null
	}
	get monthLong() {
		return this.isValid ? Xl.months("long", {
			locObj: this.loc
		})[this.month - 1] : null
	}
	get weekdayShort() {
		return this.isValid ? Xl.weekdays("short", {
			locObj: this.loc
		})[this.weekday - 1] : null
	}
	get weekdayLong() {
		return this.isValid ? Xl.weekdays("long", {
			locObj: this.loc
		})[this.weekday - 1] : null
	}
	get offset() {
		return this.isValid ? +this.o : NaN
	}
	get offsetNameShort() {
		return this.isValid ? this.zone.offsetName(this.ts, {
			format: "short",
			locale: this.locale
		}) : null
	}
	get offsetNameLong() {
		return this.isValid ? this.zone.offsetName(this.ts, {
			format: "long",
			locale: this.locale
		}) : null
	}
	get isOffsetFixed() {
		return this.isValid ? this.zone.isUniversal : null
	}
	get isInDST() {
		return this.isOffsetFixed ? !1 : this.offset > this.set({
			month: 1,
			day: 1
		}).offset || this.offset > this.set({
			month: 5
		}).offset
	}
	getPossibleOffsets() {
		if (!this.isValid || this.isOffsetFixed) return [this];
		const t = 864e5,
			n = 6e4,
			r = zs(this.c),
			i = this.zone.offset(r - t),
			l = this.zone.offset(r + t),
			o = this.zone.offset(r - i * n),
			s = this.zone.offset(r - l * n);
		if (o === s) return [this];
		const a = r - o * n,
			u = r - s * n,
			c = eo(a, o),
			f = eo(u, s);
		return c.hour === f.hour && c.minute === f.minute && c.second === f.second && c.millisecond === f.millisecond ? [Xn(this, {
			ts: a
		}), Xn(this, {
			ts: u
		})] : [this]
	}
	get isInLeapYear() {
		return Cl(this.year)
	}
	get daysInMonth() {
		return ls(this.year, this.month)
	}
	get daysInYear() {
		return this.isValid ? Hi(this.year) : NaN
	}
	get weeksInWeekYear() {
		return this.isValid ? os(this.weekYear) : NaN
	}
	resolvedLocaleOptions(t = {}) {
		const {
			locale: n,
			numberingSystem: r,
			calendar: i
		} = He.create(this.loc.clone(t), t).resolvedOptions(this);
		return {
			locale: n,
			numberingSystem: r,
			outputCalendar: i
		}
	}
	toUTC(t = 0, n = {}) {
		return this.setZone(Ge.instance(t), n)
	}
	toLocal() {
		return this.setZone(Ce.defaultZone)
	}
	setZone(t, {
		keepLocalTime: n = !1,
		keepCalendarTime: r = !1
	} = {}) {
		if (t = Nn(t, Ce.defaultZone), t.equals(this.zone)) return this;
		if (t.isValid) {
			let i = this.ts;
			if (n || r) {
				const l = t.offset(this.ts),
					o = this.toObject();
				[i] = So(o, l, t)
			}
			return Xn(this, {
				ts: i,
				zone: t
			})
		} else return V.invalid(Kl(t))
	}
	reconfigure({
		locale: t,
		numberingSystem: n,
		outputCalendar: r
	} = {}) {
		const i = this.loc.clone({
			locale: t,
			numberingSystem: n,
			outputCalendar: r
		});
		return Xn(this, {
			loc: i
		})
	}
	setLocale(t) {
		return this.reconfigure({
			locale: t
		})
	}
	set(t) {
		if (!this.isValid) return this;
		const n = ss(t, Np),
			r = !J(n.weekYear) || !J(n.weekNumber) || !J(n.weekday),
			i = !J(n.ordinal),
			l = !J(n.year),
			o = !J(n.month) || !J(n.day),
			s = l || o,
			a = n.weekYear || n.weekNumber;
		if ((s || i) && a) throw new Pi("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
		if (o && i) throw new Pi("Can't mix ordinal dates with month/day");
		let u;
		r ? u = vp({
			...tc(this.c),
			...n
		}) : J(n.ordinal) ? (u = {
			...this.toObject(),
			...n
		}, J(n.day) && (u.day = Math.min(ls(u.year, u.month), u.day))) : u = kp({
			...Ra(this.c),
			...n
		});
		const [c, f] = So(u, this.o, this.zone);
		return Xn(this, {
			ts: c,
			o: f
		})
	}
	plus(t) {
		if (!this.isValid) return this;
		const n = ee.fromDurationLike(t);
		return Xn(this, Ep(this, n))
	}
	minus(t) {
		if (!this.isValid) return this;
		const n = ee.fromDurationLike(t).negate();
		return Xn(this, Ep(this, n))
	}
	startOf(t) {
		if (!this.isValid) return this;
		const n = {},
			r = ee.normalizeUnit(t);
		switch (r) {
			case "years":
				n.month = 1;
			case "quarters":
			case "months":
				n.day = 1;
			case "weeks":
			case "days":
				n.hour = 0;
			case "hours":
				n.minute = 0;
			case "minutes":
				n.second = 0;
			case "seconds":
				n.millisecond = 0;
				break
		}
		if (r === "weeks" && (n.weekday = 1), r === "quarters") {
			const i = Math.ceil(this.month / 3);
			n.month = (i - 1) * 3 + 1
		}
		return this.set(n)
	}
	endOf(t) {
		return this.isValid ? this.plus({
			[t]: 1
		}).startOf(t).minus(1) : this
	}
	toFormat(t, n = {}) {
		return this.isValid ? He.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this, t) : za
	}
	toLocaleString(t = is, n = {}) {
		return this.isValid ? He.create(this.loc.clone(n), t).formatDateTime(this) : za
	}
	toLocaleParts(t = {}) {
		return this.isValid ? He.create(this.loc.clone(t), t).formatDateTimeParts(this) : []
	}
	toISO({
		format: t = "extended",
		suppressSeconds: n = !1,
		suppressMilliseconds: r = !1,
		includeOffset: i = !0,
		extendedZone: l = !1
	} = {}) {
		if (!this.isValid) return null;
		const o = t === "extended";
		let s = _a(this, o);
		return s += "T", s += Cp(this, o, n, r, i, l), s
	}
	toISODate({
		format: t = "extended"
	} = {}) {
		return this.isValid ? _a(this, t === "extended") : null
	}
	toISOWeekDate() {
		return to(this, "kkkk-'W'WW-c")
	}
	toISOTime({
		suppressMilliseconds: t = !1,
		suppressSeconds: n = !1,
		includeOffset: r = !0,
		includePrefix: i = !1,
		extendedZone: l = !1,
		format: o = "extended"
	} = {}) {
		return this.isValid ? (i ? "T" : "") + Cp(this, o === "extended", n, t, r, l) : null
	}
	toRFC2822() {
		return to(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1)
	}
	toHTTP() {
		return to(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'")
	}
	toSQLDate() {
		return this.isValid ? _a(this, !0) : null
	}
	toSQLTime({
		includeOffset: t = !0,
		includeZone: n = !1,
		includeOffsetSpace: r = !0
	} = {}) {
		let i = "HH:mm:ss.SSS";
		return (n || t) && (r && (i += " "), n ? i += "z" : t && (i += "ZZ")), to(this, i, !0)
	}
	toSQL(t = {}) {
		return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(t)}` : null
	}
	toString() {
		return this.isValid ? this.toISO() : za
	}
	valueOf() {
		return this.toMillis()
	}
	toMillis() {
		return this.isValid ? this.ts : NaN
	}
	toSeconds() {
		return this.isValid ? this.ts / 1e3 : NaN
	}
	toUnixInteger() {
		return this.isValid ? Math.floor(this.ts / 1e3) : NaN
	}
	toJSON() {
		return this.toISO()
	}
	toBSON() {
		return this.toJSDate()
	}
	toObject(t = {}) {
		if (!this.isValid) return {};
		const n = {
			...this.c
		};
		return t.includeConfig && (n.outputCalendar = this.outputCalendar, n.numberingSystem = this.loc.numberingSystem, n.locale = this.loc.locale), n
	}
	toJSDate() {
		return new Date(this.isValid ? this.ts : NaN)
	}
	diff(t, n = "milliseconds", r = {}) {
		if (!this.isValid || !t.isValid) return ee.invalid("created by diffing an invalid DateTime");
		const i = {
				locale: this.locale,
				numberingSystem: this.numberingSystem,
				...r
			},
			l = v3(n).map(ee.normalizeUnit),
			o = t.valueOf() > this.valueOf(),
			s = o ? this : t,
			a = o ? t : this,
			u = CT(s, a, l, i);
		return o ? u.negate() : u
	}
	diffNow(t = "milliseconds", n = {}) {
		return this.diff(V.now(), t, n)
	}
	until(t) {
		return this.isValid ? Ee.fromDateTimes(this, t) : this
	}
	hasSame(t, n) {
		if (!this.isValid) return !1;
		const r = t.valueOf(),
			i = this.setZone(t.zone, {
				keepLocalTime: !0
			});
		return i.startOf(n) <= r && r <= i.endOf(n)
	}
	equals(t) {
		return this.isValid && t.isValid && this.valueOf() === t.valueOf() && this.zone.equals(t.zone) && this.loc.equals(t.loc)
	}
	toRelative(t = {}) {
		if (!this.isValid) return null;
		const n = t.base || V.fromObject({}, {
				zone: this.zone
			}),
			r = t.padding ? this < n ? -t.padding : t.padding : 0;
		let i = ["years", "months", "days", "hours", "minutes", "seconds"],
			l = t.unit;
		return Array.isArray(t.unit) && (i = t.unit, l = void 0), Tp(n, this.plus(r), {
			...t,
			numeric: "always",
			units: i,
			unit: l
		})
	}
	toRelativeCalendar(t = {}) {
		return this.isValid ? Tp(t.base || V.fromObject({}, {
			zone: this.zone
		}), this, {
			...t,
			numeric: "auto",
			units: ["years", "months", "days"],
			calendary: !0
		}) : null
	}
	static min(...t) {
		if (!t.every(V.isDateTime)) throw new kt("min requires all arguments be DateTimes");
		return fp(t, n => n.valueOf(), Math.min)
	}
	static max(...t) {
		if (!t.every(V.isDateTime)) throw new kt("max requires all arguments be DateTimes");
		return fp(t, n => n.valueOf(), Math.max)
	}
	static fromFormatExplain(t, n, r = {}) {
		const {
			locale: i = null,
			numberingSystem: l = null
		} = r, o = me.fromOpts({
			locale: i,
			numberingSystem: l,
			defaultToEN: !0
		});
		return y1(o, t, n)
	}
	static fromStringExplain(t, n, r = {}) {
		return V.fromFormatExplain(t, n, r)
	}
	static get DATE_SHORT() {
		return is
	}
	static get DATE_MED() {
		return P0
	}
	static get DATE_MED_WITH_WEEKDAY() {
		return Kb
	}
	static get DATE_FULL() {
		return I0
	}
	static get DATE_HUGE() {
		return L0
	}
	static get TIME_SIMPLE() {
		return M0
	}
	static get TIME_WITH_SECONDS() {
		return D0
	}
	static get TIME_WITH_SHORT_OFFSET() {
		return R0
	}
	static get TIME_WITH_LONG_OFFSET() {
		return z0
	}
	static get TIME_24_SIMPLE() {
		return F0
	}
	static get TIME_24_WITH_SECONDS() {
		return _0
	}
	static get TIME_24_WITH_SHORT_OFFSET() {
		return B0
	}
	static get TIME_24_WITH_LONG_OFFSET() {
		return U0
	}
	static get DATETIME_SHORT() {
		return V0
	}
	static get DATETIME_SHORT_WITH_SECONDS() {
		return $0
	}
	static get DATETIME_MED() {
		return H0
	}
	static get DATETIME_MED_WITH_SECONDS() {
		return W0
	}
	static get DATETIME_MED_WITH_WEEKDAY() {
		return e3
	}
	static get DATETIME_FULL() {
		return q0
	}
	static get DATETIME_FULL_WITH_SECONDS() {
		return Z0
	}
	static get DATETIME_HUGE() {
		return Q0
	}
	static get DATETIME_HUGE_WITH_SECONDS() {
		return G0
	}
}

function bi(e) {
	if (V.isDateTime(e)) return e;
	if (e && e.valueOf && sr(e.valueOf())) return V.fromJSDate(e);
	if (e && typeof e == "object") return V.fromObject(e);
	throw new kt(`Unknown datetime argument: ${e}, of type ${typeof e}`)
}

function qT(e) {
	return hn({
		tag: "svg",
		attr: {
			viewBox: "0 0 1024 1024"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M885.9 490.3c3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-51.6-30.7-98.1-78.3-118.4a66.1 66.1 0 0 0-26.5-5.4H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h129.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4 20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3 40.4-23.5 65.5-66.1 65.5-111 0-28.3-9.3-55.5-26.1-77.7zM184 456V172h81v284h-81zm627.2 160.4H496.8l9.6 198.4c.6 11.9-4.7 23.1-14.6 30.5-6.1 4.5-13.6 6.8-21.1 6.7a44.28 44.28 0 0 1-42.2-32.3L329 459.2V172h415.4a56.85 56.85 0 0 1 33.6 51.8c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-14 25.5 21.9 19a56.76 56.76 0 0 1 19.6 43c0 19.1-11 37.5-28.8 48.4z"
			}
		}]
	})(e)
}

function ZT(e) {
	return hn({
		tag: "svg",
		attr: {
			viewBox: "0 0 1024 1024"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"
			}
		}]
	})(e)
}
const QT = ({
	likes: e,
	dislikes: t,
	id: n,
	userData: r
}) => {
	const [i, l] = T.useState(e - t), [o, s] = T.useState("");
	T.useEffect(() => {
		n != -1 && le.get(`http://127.0.0.1:8000/api/news/marked/${n}`).then(({
			data: c
		}) => s(c))
	}, [i]);

	function a() {
		le.get(`http://127.0.0.1:8000/api/news/emotion/${n}/like`).then(({
			data: c
		}) => {
			c && le.get(`http://127.0.0.1:8000/api/news/statistics/${n}`).then(({
				data: f
			}) => l(f))
		})
	}

	function u() {
		le.get(`http://127.0.0.1:8000/api/news/emotion/${n}/dislike`).then(({
			data: c
		}) => {
			c && le.get(`http://127.0.0.1:8000/api/news/statistics/${n}`).then(({
				data: f
			}) => l(f))
		})
	}
	return g.jsxs("div", {
		className: "flex flex-row w-full px-4 bg-gray gap-2 items-center mb-4",
		children: [g.jsx(ZT, {
			size: 30,
			className: "text-green-500 border rounded-lg p-1 hover:bg-gray-200 duration-500 " + (o == "liked" ? "bg-gray-200" : ""),
			title: "Поставить лайк",
			onClick: () => a()
		}), g.jsx("h1", {
			className: "font-semibold text-lg border rounded-lg min-w-[30px] px-1 text-center " + (i > 0 ? "text-green-500" : i == 0 ? "text-black" : "text-red-500"),
			children: i < 0 ? i * -1 : i
		}), g.jsx(qT, {
			size: 30,
			className: "text-red-500 border rounded-lg p-1 hover:bg-gray-200 duration-500 " + (o == "disliked" ? "bg-gray-200" : ""),
			title: "Поставить дизлайк",
			onClick: () => u()
		})]
	})
};
Ce.defaultLocale = "ru";
Ce.defaultZone = "UTC+7";
const GT = ({
		grup: e,
		header: t,
		content: n,
		image: r,
		createdAt: i,
		userData: l,
		id: o,
		getCounter: s,
		setShowModalUpdate: a,
		getNews: u,
		likes: c,
		dislikes: f
	}) => {
		function h() {
			const S = V.fromMillis(+V.now() - i * 1e3);
			return +S <= 864e5 ? "Сегодня в " + V.fromMillis(i * 1e3).toFormat("HH:mm ") : +S < 1728e5 ? "Вчера в " + V.fromMillis(i * 1e3).toFormat("HH:mm ") : V.fromMillis(i * 1e3).toFormat("dd' 'LLL' в 'HH':'mm")
		}
		const [d, p] = T.useState(!1);

		function x() {
			le.delete(`http://127.0.0.1:8000/api/news/main/${o}`).then(() => s())
		}
		return g.jsxs("div", {
			className: " my-2 w-screen sm:w-[800px] h-auto border border-2 rounded-lg bg-white flex flex-col",
			children: [d ? g.jsx("div", {
				className: "fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10 ",
				children: g.jsxs("div", {
					className: "bg-white rounded-b-lg w-screen sm:w-max h-max flex flex-col items-center justify-center",
					children: [g.jsx("div", {
						className: "w-full h-1 bg-red-500"
					}), g.jsx("div", {
						className: "p-4 w-full",
						children: g.jsxs("div", {
							className: "flex flex-col gap-4",
							children: [g.jsx("div", {
								className: "text-xl font-semibold",
								children: "Удаление новости"
							}), g.jsx("div", {
								className: "font text-xl",
								children: "Хотите удалить новость?"
							}), g.jsxs("div", {
								className: "flex flex-row justify-between gap-4 w-full",
								children: [g.jsx("button", {
									className: "w-[250px] p-2 bg-black/80 text-white rounded-lg hover:bg-red-500 duration-500",
									onClick: () => x(),
									children: "Да, удалить"
								}), g.jsx("button", {
									className: "w-[250px] p-2 bg-black/80 rounded-lg text-white hover:bg-blue-500 duration-500",
									onClick: () => p(!1),
									children: "Нет,отменить"
								})]
							})]
						})
					})]
				})
			}) : "", g.jsxs("div", {
				className: "border-b p-4 flex flex-row items-center h-full w-full ",
				children: [g.jsx("div", {
					children: g.jsx("div", {
						className: " w-12 h-12 rounded-full select-none flex items-center justify-center bg-gradient-to-br from-indigo-500 via-sky-500 via-30% to-emerald-500 text-white font-bold",
						children: e
					})
				}), g.jsxs("div", {
					className: "flex flex-row justify-between items-center w-full",
					children: [g.jsxs("div", {
						className: "font-medium text-xl ml-2 flex flex-col text-sans",
						children: [e, g.jsxs("div", {
							className: "text-xs text-gray-700 text-sans ",
							children: [" ", h()]
						})]
					}), l.roles && l.roles.find(S => S === "Editor") ? g.jsxs("div", {
						className: "flex flex-row items-center gap-2",
						children: [g.jsx(A0, {
							size: 17,
							className: "hover:opacity-100 opacity-50 duration-500 cursor-pointer",
							onClick: () => {
								a(!0), u({
									id: o,
									grup: e,
									createdAt: i,
									content: n,
									header: t,
									photos: r
								})
							}
						}), g.jsx(qn, {
							size: 25,
							className: "hover:opacity-100 opacity-50 duration-500 cursor-pointer",
							onClick: () => p(!0)
						})]
					}) : g.jsx(g.Fragment, {})]
				})]
			}), g.jsx("div", {
				className: "text-sans font-medium px-4",
				children: g.jsxs("div", {
					className: "mt-4 prose max-w-full text-sans prose-lg w-full",
					children: [g.jsx("h1", {
						className: "text-start w-full leading-tight text-2xl",
						children: t
					}), g.jsx("div", {
						className: "whitespace-pre-line not-prose max-w-full",
						children: g.jsx(r0, {
							remarkPlugins: [O0],
							children: n && JSON.parse(n.toString())
						})
					})]
				})
			}), typeof r < "u" && r.length > 0 ? g.jsx("div", {
				className: "p-4 flex justify-center flex-col items-center",
				children: g.jsx("img", {
					className: "w-min object-cover h-max rounded-2xl pointer-events-none ",
					src: `http://127.0.0.1:8000/files/getNewsPicture/${r}`
				})
			}) : g.jsx("div", {
				className: "py-4"
			}), g.jsx(QT, {
				likes: c,
				dislikes: f,
				id: o,
				userData: l
			})]
		})
	},
	YT = ({
		userData: e,
		setShowModalUpdate: t,
		getNew: n
	}) => {
		const [r, i] = T.useState([]), [l, o] = T.useState(0);

		function s(u) {
			n(u)
		}

		function a() {
			o(u => u + 1)
		}
		return T.useEffect(() => {
			le.get("http://127.0.0.1:8000/api/news", {
				headers: {
					Accept: "application/json",
					"Access-Control-Allow-Origin": "GET",
					"X-Requested-With": "XMLHttpRequest",
					"Access-Control-Allow-Methods": "GET"
				}
			}).then(u => {
				i(u.data.reverse())
			})
		}, [l]), g.jsx("div", {
			className: "w-screen min-h-screen bg-gray-200 flex items-start flex-col z-10",
			children: g.jsx("div", {
				className: "w-screen min-h-full max-h-max bg-gray-200 flex items-center flex-col",
				children: r.length ? r.map(u => g.jsx(GT, {
					grup: u.grup,
					createdAt: u.createdAt,
					header: u.header,
					content: u.content,
					id: u.id,
					image: u.photos,
					userData: e,
					getCounter: a,
					setShowModalUpdate: t,
					getNews: s,
					likes: u.likes,
					dislikes: u.dislikes
				}, u.id)) : g.jsx("div", {
					className: "flex justify-center items-center flex-col my-4",
					children: g.jsx("div", {
						className: "font-light text-xl",
						children: "Новостей еще нет... "
					})
				})
			})
		})
	};
var jf = (e => (e.Editor = "Редактор", e.User = "Пользователь", e.Student = "Студент", e.Starosta = "Староста", e))(jf || {});
const XT = ({
		isVisable: e,
		setShowVoteProfile: t,
		userData: n
	}) => {
		if (!e) return null;
		const r = i => {
			i.target.id === "exit" && t(!1)
		};
		return g.jsx("div", {
			className: "fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10",
			id: "exit",
			onDoubleClick: r,
			children: g.jsx("div", {
				className: "w-[500px] h-[70%] flex justify-center",
				children: g.jsxs("div", {
					className: "shadow w-full h-max my-8 flex flex-col gap-4 p-4 bg-white rounded-lg",
					children: [g.jsx("div", {
						className: "w-full flex items-end justify-end",
						children: g.jsx(qn, {
							size: 25,
							className: "hover:opacity-100 opacity-50 duration-500 cursor-pointer ",
							onClick: () => t(!1)
						})
					}), g.jsxs("div", {
						className: "flex flex-col gap-4 items-center",
						children: [g.jsx("div", {
							className: "w-64 h-64 rounded-full flex relative duration-500 justify-center items-center",
							children: n.profile_picture ? g.jsx("img", {
								src: `http://127.0.0.1:8000/files/getProfilePicture/${n.profile_picture}`,
								className: "w-64 h-64 rounded-full pointer-events-none object-cover"
							}) : g.jsx("img", {
								src: "http://127.0.0.1:8000/files/getProfilePicture/stockPicture.png",
								className: "w-64 h-64 rounded-full pointer-events-none object-cover"
							})
						}), g.jsxs("div", {
							className: "flex flex-col w-full gap-2",
							children: [g.jsxs("div", {
								children: [g.jsxs("div", {
									className: "text-2xl rounded-lg duration-500 text-start",
									children: [n.firstName + " ", n.secondName + " ", n.thirdName + " "]
								}), g.jsx("div", {
									className: "text-lg opacity-50 font-light rounded-lg duration-500 text-start",
									children: `Группа: ${n.grup}`
								}), g.jsx("div", {
									className: "text-lg opacity-50 font-light rounded-lg duration-500 text-start",
									children: `Роль: ${n.roles.map(i=>jf[i]).join(" ")}`
								})]
							}), g.jsx("div", {
								className: "min-h-32 max-h-72 overflow-y-auto border my-2 overflow-x-hidden w-full",
								children: g.jsx("div", {
									className: "p-2 whitespace-normal prose max-w-full break-words",
									children: g.jsx(r0, {
										remarkPlugins: [O0],
										children: n.bio
									})
								})
							})]
						})]
					})]
				})
			})
		})
	},
	JT = "/assets/Error-572223d0.png",
	Tl = ({
		dateError: e,
		setErrorModal: t,
		autherror: n,
		inputerror: r
	}) => g.jsx("div", {
		children: g.jsx("div", {
			className: "fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10 ",
			children: g.jsx("div", {
				className: "bg-white rounded-xl w-max h-max flex flex-col items-center justify-center p-8",
				children: g.jsxs("div", {
					className: "flex items-center justify-center flex-col w-auto h-full gap-8",
					children: [g.jsxs("div", {
						className: "flex flex-col items-center gap-2 w-auto h-auto",
						children: [g.jsx("img", {
							src: JT,
							className: "w-24 h-24"
						}), g.jsx("div", {
							className: "font-semibold text-[#e04f5f] text-xl",
							children: "Ошибка!"
						}), n && g.jsx("div", {
							className: "font-base text-lg opacity-50",
							children: "Неверный логин или пароль!"
						}), e && g.jsx("div", {
							className: "font-base text-lg text-center sm:text-start opacity-50",
							children: "Дата окончания не может быть раньше даты начала."
						}), r && g.jsx("div", {
							className: "font-base text-lg opacity-50",
							children: "Заполните все поля!"
						})]
					}), g.jsx("button", {
						className: "bg-black/80 rounded-xl w-full h-10 text-white font-semibold hover:bg-[#e04f5f] duration-500",
						onClick: () => t(!1),
						children: "Ок"
					})]
				})
			})
		})
	}),
	A1 = "/assets/add-e36c2bd2.png",
	j1 = "/assets/remove-b388bdc8.png",
	KT = ({
		isVisable: e,
		id: t,
		setModalUpdateVote: n,
		header: r,
		endedAt: i,
		elected: l,
		grup: o
	}) => {
		const [s, a] = T.useState([]), [u, c] = T.useState(!1), [f, h] = T.useState(!1), [d, p] = T.useState(!1), [x, S] = T.useState({
			header: "",
			grup: "",
			elected: [""],
			endedAt: "",
			electCount: [""]
		});
		if (T.useEffect(() => {
				a([...s, ...l]), S({
					...x,
					header: r,
					elected: [...x.elected, ...l],
					endedAt: i,
					grup: o
				})
			}, [1]), !e) return null;
		const m = N => {
				N.target.id === "exit" && n(!1)
			},
			y = [];

		function w() {
			y.push(...s.map((N, b) => document.getElementById(b.toString()).value)), y.includes("") ? (y.splice(0, -1), c(!0), p(!0)) : le.put(`http://127.0.0.1:8000/api/vote/${t}`, {
				header: x.header,
				grup: x.grup,
				elected: y,
				endedAt: x.endedAt
			}, {}).then(() => window.location.href = "/vote")
		}
		return g.jsx("div", {
			className: "fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10",
			id: "exit",
			onDoubleClick: m,
			children: g.jsx("div", {
				className: "w-full sm:w-1/2 min-h-1/2 max-h-auto flex justify-center",
				children: g.jsxs("div", {
					className: "shadow w-full h-1/2 sm:h-auto flex p-4 flex-col bg-white rounded-lg",
					children: [g.jsxs("div", {
						className: "w-full h-auto flex flex-col gap-4 p-2 bg-white rounded-lg ",
						children: [g.jsxs("div", {
							className: "flex justify-between items-center",
							children: [g.jsx("div", {
								className: "text-xl font-semibold opacity-70",
								children: "Редактирование голосования"
							}), g.jsx("div", {
								children: g.jsx(qn, {
									size: 30,
									className: "hover:opacity-100 opacity-50 duration-500 cursor-pointer",
									onClick: () => n(!1)
								})
							})]
						}), g.jsx("div", {
							className: "flex flex-row justify-between",
							children: g.jsxs("div", {
								className: "flex flex-row items-center w-full gap-4",
								children: [g.jsx("div", {
									className: "flex border-black/20 border rounded-lg w-1/2 h-12 focus-within:border-blue-600 duration-500",
									children: g.jsx("textarea", {
										className: "w-full h-auto p-2 text-xl resize-none rounded-lg outline-none",
										placeholder: "Группа",
										value: x.grup,
										maxLength: 4,
										onChange: N => S({
											...x,
											grup: N.target.value
										})
									})
								}), g.jsx("div", {
									className: "w-1/2 h-full border-black/20 border focus-within:border-blue-600 duration-500 rounded-lg flex items-center p-2",
									children: g.jsx("input", {
										type: "date",
										className: "w-full h-full text-xl outline-none",
										title: "Дата окончания",
										value: V.fromMillis(+x.endedAt * 1e3).toFormat("yyyy-MM-dd"),
										onChange: async N => {
											const b = new Date(N.target.value).getTime() / 1e3;
											S({
												...x,
												endedAt: b.toString()
											})
										}
									})
								})]
							})
						}), g.jsx("div", {
							className: "flex border-black/20 border rounded-lg w-full h-12 focus-within:border-blue-600 duration-500",
							children: g.jsx("textarea", {
								className: "h-full w-full p-2 text-xl resize-none rounded-lg outline-none",
								placeholder: "Заголовок",
								maxLength: 255,
								value: x.header,
								onChange: N => S({
									...x,
									header: N.target.value
								})
							})
						}), g.jsx("div", {
							className: "h-auto max-h-64  gap-4 flex flex-col overflow-y-auto",
							children: s.map((N, b) => g.jsx("div", {
								className: "flex border border-black/20 rounded-lg w-full h-min focus-within:border-blue-600 duration-500",
								children: g.jsxs("div", {
									className: "flex flex-between w-full p-2 items-center h-auto py-2.5 gap-2",
									children: [g.jsx("input", {
										className: "w-full text-xl resize-none rounded-lg focus:outline-none",
										id: b.toString(),
										placeholder: "Ответ / Почта кандидата",
										defaultValue: N
									}), b ? "" : g.jsx("img", {
										src: `${A1}`,
										className: "w-6 cursor-pointer opacity-30 hover:opacity-100 duration-500",
										onClick: () => a([...s, ""]),
										title: "Добавить"
									}), b ? g.jsx("img", {
										src: `${j1}`,
										className: "w-6 cursor-pointer opacity-30 hover:opacity-100 duration-500",
										title: "Удалить",
										onClick: () => a(s.slice(0, -1))
									}) : ""]
								})
							}, b))
						}), g.jsx("button", {
							className: "w-full py-2 rounded-lg bg-black/80 border-transparent text-base font-medium text-white font-sans hover:bg-blue-600 duration-500 text-center cursor-pointer",
							onClick: () => {
								if (+x.endedAt < +V.now() / 1e3) {
									h(!0), c(!0), p(!1);
									return
								}
								if (x.endedAt && x.header && x.grup && s.length > 1) w();
								else {
									c(!0), h(!1), p(!0);
									return
								}
							},
							children: "Подтвердить"
						})]
					}), u ? g.jsx(Tl, {
						dateError: f,
						inputerror: d,
						setErrorModal: c,
						autherror: !1
					}) : ""]
				})
			})
		})
	};

function eO(e) {
	return hn({
		tag: "svg",
		attr: {
			viewBox: "0 0 24 24",
			strokeWidth: "2",
			stroke: "currentColor",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		},
		child: [{
			tag: "path",
			attr: {
				stroke: "none",
				d: "M0 0h24v24H0z",
				fill: "none"
			}
		}, {
			tag: "path",
			attr: {
				d: "M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5"
			}
		}, {
			tag: "path",
			attr: {
				d: "M11 11.5v-2a1.5 1.5 0 1 1 3 0v2.5"
			}
		}, {
			tag: "path",
			attr: {
				d: "M14 10.5a1.5 1.5 0 0 1 3 0v1.5"
			}
		}, {
			tag: "path",
			attr: {
				d: "M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"
			}
		}]
	})(e)
}
const tO = "/assets/Selected-de5b3a9f.png",
	nO = ({
		item: e,
		setShowVoteProfile: t,
		setChecked: n,
		checked: r,
		id: i,
		getElect: l,
		voteFinish: o,
		giveElectedDataToFather: s,
		votePerm: a
	}) => {
		const [u, c] = T.useState(0), [f, h] = T.useState("");

		function d() {
			le.get(`http://127.0.0.1:8000/users/emailWithoutPass/${e}`).then(({
				data: p
			}) => {
				p && (s(p), t(!0))
			})
		}
		return T.useEffect(() => {
			le.get(`http://127.0.0.1:8000/users/getNameByEmail/${e}`).then(p => {
				h(p.data)
			}).then(() => {
				le.get(`http://127.0.0.1:8000/api/vote/getVotesCountByEmail/${i}/${e}`).then(({
					data: p
				}) => c(p))
			})
		}, [1]), g.jsxs("div", {
			className: a ? "flex flex-col gap-2 w-full sm:w-auto" : "flex flex-col gap-2 w-full sm:w-auto opacity-60",
			children: [g.jsx("input", {
				type: "radio",
				id: `${e+i.toString()}`,
				name: `${i.toString()+e}`,
				className: "hidden peer",
				required: !0,
				onClick: () => {
					typeof n == "function" && (n(e), l(e))
				}
			}), g.jsx("div", {}), g.jsx("label", {
				htmlFor: `${e+i.toString()}`,
				className: r == e ? " w-full h-full flex py-4 rounded-xl peer-checked:bg-gray-200 peer-checked:shadow duration-500 hover:bg-stone-100 peer-checked:text-[#2196f3]" : " w-full h-full flex py-4 rounded-xl duration-500 hover:bg-stone-100",
				children: g.jsxs("div", {
					className: "flex flex-row justify-between items-center rounded-xl px-4 h-16 w-full",
					children: [g.jsxs("div", {
						className: "flex flex-row gap-4 items-center ",
						children: [g.jsxs("div", {
							className: "relative flex duration-500 hover:brightness-[60%] ",
							children: [g.jsxs("div", {
								className: "absolute w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 duration-700 z-4 ",
								children: [g.jsx(eO, {
									className: "w-8 h-8 text-white "
								}), g.jsx("button", {
									className: "absolute w-full h-full rounded-full cursor-pointer z-10 ",
									onClick: () => {
										d()
									}
								})]
							}), g.jsx("div", {
								className: "h-max w-max",
								children: e === "Да" || e === "да" || e === "Нет" || e === "нет" ? "" : g.jsx("img", {
									className: "w-16 h-16 rounded-full object-cover z-4",
									src: `http://127.0.0.1:8000/users/getPhotoByEmail/${e}`
								})
							})]
						}), g.jsx("div", {
							className: "h-min sm:text-xl",
							children: f || e
						})]
					}), g.jsx("div", {
						children: o ? g.jsx("div", {
							className: "flex flex-row items-center gap-4 w-[135px] h-[24px] justify-between ",
							children: g.jsxs("div", {
								className: "w-full bg-blue-300 relative rounded-sm flex items-center",
								children: [g.jsx("div", {
									className: "absolute text-sm w-full text-center pointer-events-none text-black/80 font-semibold",
									children: Number(u) ? u + "%" : "0%"
								}), g.jsx("div", {
									style: Number(u) ? {
										width: `${u}%`
									} : {
										width: "0%"
									},
									className: "h-4 rounded-sm bg-blue-500"
								})]
							})
						}) : ""
					}), g.jsx("img", {
						src: tO,
						className: o ? "hidden" : r == e ? "h-6 w-6 opacity-70 duration-500 pointer-events-none" : "opacity-0 duration-100 h-2 w-2"
					})]
				})
			})]
		})
	},
	rO = ({
		header: e,
		votedPersonsId: t,
		voteCount: n,
		createdAt: r,
		endedAt: i,
		elected: l,
		id: o,
		getCounter: s,
		userData: a,
		grup: u,
		counter: c,
		extended: f
	}) => {
		const [h, d] = T.useState(!1), [p, x] = T.useState(!1), [S, m] = T.useState(!1), [y, w] = T.useState(!1), [N, b] = T.useState(!1), [E, j] = T.useState(""), [L, B] = T.useState(""), [C, z] = T.useState(!0), [F, G] = T.useState(!1), [se, q] = T.useState({}), [Se, xe] = T.useState(!0), [M, U] = T.useState(!1);

		function v() {
			t != null && t.find(ae => ae == a.id) && z(!1)
		}

		function Y(ae) {
			le.get(`http://127.0.0.1:8000/api/vote/getWinner/${ae}`).then(({
				data: Be
			}) => {
				xe(Be), G(!!Be), Be ? le.delete(`http://127.0.0.1:8000/api/vote/delForHour/${ae}`) : le.put(`http://127.0.0.1:8000/api/vote/${ae}`, {
					endedAt: String(+i + 86400),
					extended: !0
				}).then(() => s())
			})
		}

		function ie(ae) {
			B(ae)
		}

		function k(ae) {
			le.get(`http://127.0.0.1:8000/users/getNameByEmail/${ae}`).then(Be => {
				j(Be.data)
			})
		}

		function be(ae) {
			le.delete(`http://127.0.0.1:8000/api/vote/${ae}`).then(() => s())
		}

		function ot() {
			le.get(`http://127.0.0.1:8000/api/vote/toVote/${o}/${L}`).then(() => s())
		}

		function ce(ae) {
			q(ae)
		}
		return T.useEffect(() => {
			v(), +i * 1e3 <= +Object.values(V.now())[0] && Y(o)
		}, [c, s]), g.jsxs("div", {
			children: [N && g.jsx(KT, {
				id: o,
				header: e,
				endedAt: i,
				elected: l,
				grup: u,
				isVisable: N,
				setModalUpdateVote: b
			}, o), g.jsxs("div", {
				className: F ? "my-2 sm:w-[700px] w-screen h-max border-2 rounded-lg bg-white flex flex-col p-2 sm:p-6" : C ? "my-2 sm:w-[700px] w-screen h-max border-2 rounded-lg bg-white flex flex-col  p-2 sm:p-6" : "my-2 sm:w-[700px] w-screen h-max border-2 rounded-lg bg-white flex flex-col p-2 sm:p-6 ",
				children: [g.jsx("div", {
					className: "w-full flex justify-end items-center  "
				}), g.jsxs("div", {
					className: C ? "flex flex-row justify-between" : "flex flex-row justify-between opacity-60 ",
					children: [g.jsxs("div", {
						className: "flex flex-col items-start ",
						children: [g.jsxs("div", {
							className: "text-xl sm:text-2xl font-semibold ",
							children: [" ", e]
						}), g.jsxs("div", {
							className: "font-light opacity-30",
							children: ["Голосов » ", n]
						})]
					}), g.jsxs("div", {
						className: "flex flex-row gap-4 items-center",
						children: [f && !F ? g.jsx("div", {
							className: "font-light opacity-50 w-max",
							children: "Продлено"
						}) : "", F ? g.jsx("div", {
							className: "font-light opacity-50 w-max",
							children: "Завершено"
						}) : g.jsxs("div", {
							className: "font-light opacity-50 w-max",
							children: [V.fromMillis(r * 1e3).toFormat("dd.MM.yy"), " -", V.fromMillis(+i * 1e3).toFormat(" dd.MM.yy")]
						}), a.roles.find(ae => ae === "Editor") ? g.jsxs("div", {
							className: "flex flex-row items-center gap-2 ",
							children: [g.jsx(A0, {
								size: 15,
								className: "hover:opacity-100 opacity-50 duration-500 cursor-pointer",
								onClick: () => b(!0)
							}), g.jsx(qn, {
								size: 23,
								className: "hover:opacity-100 opacity-50 duration-500 cursor-pointer",
								onClick: () => U(!0)
							})]
						}) : g.jsx(g.Fragment, {})]
					})]
				}), g.jsx("hr", {
					className: "my-2"
				}), y && g.jsx(XT, {
					isVisable: y,
					setShowVoteProfile: w,
					userData: se
				}, o), l.map((ae, Be) => g.jsx(nO, {
					voteFinish: F,
					votePerm: C,
					setShowVoteProfile: w,
					setChecked: C ? m : !1,
					id: o,
					item: ae,
					checked: C ? S : !1,
					getElect: ie,
					giveElectedDataToFather: ce
				}, Be)), g.jsx("hr", {
					className: "my-4"
				}), F ? g.jsxs("div", {
					className: "font-semilight opacity-80 text-blue-500 text-center",
					children: ["В голосовании победил: ", Se]
				}) : C ? g.jsx("div", {
					className: "flex flex-col items-center",
					children: g.jsx("button", {
						disabled: !S,
						className: S ? "rounded-lg bg-black/80 border-transparent p-2 sm:w-64 text-base font-medium text-white font-sans hover:bg-blue-600 duration-500" : "rounded-lg bg-black/60 border-transparent p-2 sm:w-64 text-base font-medium text-white font-sans duration-500",
						onClick: async () => {
							await ot(), d(!0), s(), k(L)
						},
						children: "Проголосовать"
					})
				}) : g.jsx("div", {
					className: "font-light opacity-50 text-center",
					children: "Вы уже участвуете в этом голосовании."
				})]
			}), h ? g.jsx("div", {
				className: "fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10 ",
				children: g.jsx("div", {
					className: "bg-white rounded-xl w-max h-max flex flex-col items-center justify-center p-8",
					children: g.jsxs("div", {
						className: "flex items-center justify-center flex-col w-auto h-full gap-8",
						children: [g.jsxs("div", {
							className: "flex flex-col items-center gap-2 w-auto h-auto",
							children: [g.jsx("img", {
								src: "https://cdn-icons-png.flaticon.com/512/1828/1828640.png",
								className: "w-24 h-24"
							}), g.jsx("div", {
								className: "font-semibold text-[#2196f3] text-xl",
								children: "Успешно!"
							}), g.jsxs("div", {
								className: "font-base text-lg opacity-50 text-center",
								children: ["Вы проголосовали за ", g.jsxs("div", {
									className: "font-bold",
									children: [E, "!"]
								})]
							})]
						}), g.jsx("button", {
							className: "bg-black/80 rounded-xl w-full h-10 text-white font-semibold hover:bg-[#2196f3] duration-500",
							onClick: () => d(!1),
							children: "Ок"
						})]
					})
				})
			}) : "", p ? g.jsx("div", {
				className: "fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10 ",
				children: g.jsx("div", {
					className: "bg-white rounded-xl w-max h-max flex flex-col items-center justify-center p-8",
					children: g.jsxs("div", {
						className: "flex items-center justify-center flex-col w-auto h-full gap-8",
						children: [g.jsxs("div", {
							className: "flex flex-col items-center gap-2 w-auto h-auto",
							children: [g.jsx("img", {
								src: "https://cdn-icons-png.flaticon.com/512/463/463612.png",
								className: "w-24 h-24"
							}), g.jsx("div", {
								className: "font-semibold text-[#e04f5f] text-xl",
								children: "Ошибка!"
							}), g.jsx("div", {
								className: "font-base text-lg opacity-50",
								children: "Что-то пошло не так, попробуйте еще раз."
							})]
						}), g.jsx("button", {
							className: "bg-black/80 rounded-xl w-full h-10 text-white font-semibold hover:bg-[#e04f5f] duration-500",
							onClick: () => x(!1),
							children: "Ок"
						})]
					})
				})
			}) : "", M ? g.jsx("div", {
				className: "fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10 ",
				children: g.jsxs("div", {
					className: "bg-white rounded-b-lg w-screen sm:w-max h-max flex flex-col items-center justify-center",
					children: [g.jsx("div", {
						className: "w-full h-1 bg-red-500"
					}), g.jsx("div", {
						className: "p-4 w-full",
						children: g.jsxs("div", {
							className: "flex flex-col gap-4",
							children: [g.jsx("div", {
								className: "text-xl font-semibold",
								children: "Удаление голосования"
							}), g.jsx("div", {
								className: "font text-xl",
								children: "Хотите удалить голосование?"
							}), g.jsxs("div", {
								className: "flex flex-row justify-between gap-4 w-full",
								children: [g.jsx("button", {
									className: "w-[250px] p-2 bg-black/80 text-white rounded-lg hover:bg-red-500 duration-500",
									onClick: () => be(o),
									children: "Да, удалить"
								}), g.jsx("button", {
									className: "w-[250px] p-2 bg-black/80 rounded-lg text-white hover:bg-blue-500 duration-500",
									onClick: () => U(!1),
									children: "Нет,отменить"
								})]
							})]
						})
					})]
				})
			}) : ""]
		})
	},
	iO = ({
		userData: e
	}) => {
		const [t, n] = T.useState([]), [r, i] = T.useState(0);

		function l() {
			i(o => o + 1)
		}
		return T.useEffect(() => {
			e.roles.find(o => o === "Editor") ? le.get("http://127.0.0.1:8000/api/vote", {
				headers: {
					Accept: "application/json",
					"Access-Control-Allow-Origin": "GET",
					"X-Requested-With": "XMLHttpRequest",
					"Access-Control-Allow-Methods": "GET"
				}
			}).then(o => {
				n(o.data.reverse())
			}) : le.get(`http://127.0.0.1:8000/vote/getAllByGrup/${e.grup}`, {
				headers: {
					Accept: "application/json",
					"Access-Control-Allow-Origin": "GET",
					"X-Requested-With": "XMLHttpRequest",
					"Access-Control-Allow-Methods": "GET"
				}
			}).then(o => {
				n(o.data.reverse())
			})
		}, [r]), g.jsx("div", {
			className: "w-screen min-h-full bg-gray-200 flex flex-col items-center",
			children: g.jsx("div", {
				children: t.length < 1 ? g.jsx("div", {
					className: "flex justify-center items-center flex-col my-4",
					children: g.jsx("div", {
						className: "font-light text-xl",
						children: "Голосований еще нет..."
					})
				}) : t.map(o => g.jsx(rO, {
					id: o.id,
					votedPersonsId: o.votedPersonsId,
					header: o.header,
					voteCount: o.voteCount,
					createdAt: o.createdAt,
					endedAt: o.endedAt,
					elected: o.elected,
					getCounter: l,
					counter: r,
					userData: e,
					grup: o.grup,
					extended: o.extended
				}, o.id))
			})
		})
	},
	lO = (e, t) => {
		const n = r => {
			e.current && !e.current.contains(r.target) && t()
		};
		T.useEffect(() => (document.addEventListener("mousedown", n), () => {
			document.removeEventListener("mousedown", n)
		}))
	};

function oO(e) {
	return hn({
		tag: "svg",
		attr: {
			version: "1.1",
			viewBox: "0 0 16 16"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M12 10v-2h-5v-2h5v-2l3 3zM11 9v4h-5v3l-6-3v-13h11v5h-1v-4h-8l4 2v9h4v-3z"
			}
		}]
	})(e)
}

function sO(e) {
	return hn({
		tag: "svg",
		attr: {
			viewBox: "0 0 24 24",
			fill: "none"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M12 6C12.5523 6 13 6.44772 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44772 11.4477 6 12 6Z",
				fill: "currentColor"
			}
		}, {
			tag: "path",
			attr: {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M5 22C3.34315 22 2 20.6569 2 19V5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5ZM4 19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4H5C4.44772 4 4 4.44772 4 5V19Z",
				fill: "currentColor"
			}
		}]
	})(e)
}

function aO(e) {
	return hn({
		tag: "svg",
		attr: {
			viewBox: "0 0 24 24",
			fill: "none"
		},
		child: [{
			tag: "path",
			attr: {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z",
				fill: "currentColor"
			}
		}, {
			tag: "path",
			attr: {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z",
				fill: "currentColor"
			}
		}]
	})(e)
}

function uO(e) {
	return hn({
		tag: "svg",
		attr: {
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		},
		child: [{
			tag: "path",
			attr: {
				d: "m9 12 2 2 4-4"
			}
		}, {
			tag: "path",
			attr: {
				d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"
			}
		}, {
			tag: "path",
			attr: {
				d: "M22 19H2"
			}
		}]
	})(e)
}
const cO = ({
		setShowModal: e,
		userData: t,
		setShowModalProfile: n,
		setShowModalVote: r
	}) => {
		const [i, l] = T.useState(!1), o = T.useRef(null);
		return lO(o, () => l(!1)), g.jsxs("div", {
			className: "flex justify-center sm:justify-end flex-row duration-700 lg:w-[321px] w-full absolute top-[-20px] md:w-[289px] md:px-10 left-[35px] sm:static ",
			children: [g.jsx("div", {
				className: "relative flex flex-col items-center",
				children: g.jsx("button", {
					onClick: () => l(s => !s),
					children: g.jsxs("div", {
						className: "flex items-center text-center place-items-center gap-2 hover:cursor-pointer",
						children: [g.jsx("div", {
							className: "w-10",
							children: g.jsx("img", {
								src: `http://127.0.0.1:8000/files/getProfilePicture/${(t.profile_picture&&t.profile_picture)??"stockPicture.png"}`,
								className: "rounded-full object-cover h-10 w-10"
							})
						}), g.jsx("div", {
							className: "flex flex-row gap-2 whitespace-nowrap items-center hidden sm:block ",
							children: g.jsxs("div", {
								children: [t.secondName + " ", t.firstName[0] + ".", t.thirdName[0] + "."]
							})
						})]
					})
				})
			}), g.jsx("div", {
				className: i ? "w-56 mr-36 sm:mr-0 flex opacity-100 bg-gray-300 absolute mt-14 rounded-lg transition-all duration-500 whitespace-nowrap z-20" : "w-48 mr-0 sm:mr-0 opacity-0 bg-gray-300 absolute mt-14 rounded-lg transition-all duration-500 whitespace-nowrap z-20",
				ref: o,
				children: i ? g.jsxs("div", {
					className: "flex flex-col w-full  ",
					children: [g.jsxs("button", {
						className: "text-start w-full font-sans p-2 hover:bg-blue-400 transition-all duration-500 rounded-lg flex row items-center ",
						onClick: () => {
							n(!0), l(!1)
						},
						children: [g.jsx(aO, {
							size: 16
						}), g.jsx("p", {
							className: "px-2",
							children: "Профиль "
						})]
					}), t.roles && t.roles.find(s => s === "Editor") ? g.jsxs(Xo, {
						to: "",
						children: [g.jsx("div", {
							className: "w-full hover:bg-green-500 transition-all duration-500 rounded-lg",
							children: g.jsxs("button", {
								className: "text-start p-2 flex row items-center",
								onClick: () => {
									r(!0), l(!1)
								},
								children: [g.jsx(uO, {
									size: 16
								}), g.jsx("p", {
									className: "px-2",
									children: "Добавить голосование "
								})]
							})
						}), g.jsx("div", {
							className: "w-full hover:bg-orange-400 transition-all duration-500 rounded-lg",
							children: g.jsxs("button", {
								className: "text-start p-2 flex row items-center",
								onClick: () => {
									e(!0), l(!1)
								},
								children: [g.jsx(sO, {
									size: 16
								}), g.jsx("p", {
									className: "px-2",
									children: "Добавить новость "
								})]
							})
						})]
					}) : "", g.jsx("button", {
						className: "text-start p-2 hover:bg-red-600 transition-all duration-500 rounded-lg",
						onClick: () => {
							document.cookie = "token=; path=/; max-age=0;", window.location.reload()
						},
						children: g.jsxs(Xo, {
							to: "/",
							className: "flex row items-center",
							children: [g.jsx(oO, {
								size: 16
							}), g.jsx("p", {
								className: "px-2",
								children: "Выйти "
							})]
						})
					})]
				}) : ""
			})]
		})
	},
	Ap = ({
		setShowModal: e,
		toggle: t,
		userData: n,
		setShowModalProfile: r,
		setShowModalVote: i
	}) => {
		const [l, o] = T.useState(t);
		return g.jsx("header", {
			children: g.jsxs("div", {
				className: "2xl:px-56 md:px-8 flex-row items-center flex justify-center sm:justify-between py-2",
				children: [g.jsxs("div", {
					className: "flex items-center gap-2 whitespace-nowrap ",
					children: [g.jsx("img", {
						src: "http://127.0.0.1:8000/files/getProfilePicture/header.jpg",
						className: "h-10 w-10 rounded-3xl hidden sm:block"
					}), g.jsx("div", {
						className: "font-semibold md:w-[273px] xl:text-lg sm:block hidden",
						children: "Голосование » НКЭиВТ"
					})]
				}), g.jsx("div", {
					className: "flex justify-center items-center flex-row gap-4 w-max lg:w-auto",
					children: g.jsxs("div", {
						className: "lg:py-1 flex items-center justify-center w-auto sm:w-auto",
						children: [g.jsx(Xo, {
							className: "outline-none",
							to: "/",
							children: g.jsx("button", {
								onClick: () => o("News"),
								className: l === "News" ? "py-2 w-[130px] md:w-[136.5px] xl:w-[175px] rounded-l-lg px-5 bg-gray-800 text-white duration-700" : "py-2 w-[130px] md:w-[136.5px] xl:w-[175px] rounded-l-lg px-5 bg-gray-500 text-white duration-700",
								children: "Новости"
							})
						}), g.jsx(Xo, {
							className: "outline-none",
							to: "/vote",
							children: g.jsx("button", {
								onClick: () => o("Vote"),
								className: l === "Vote" ? "py-2 w-[130px] xl:w-[175px] md:w-[136.5px]  text-center rounded-r-lg bg-gray-800 text-white duration-700" : "py-2 w-[130px] xl:w-[175px] md:w-[136.5px] text-center rounded-r-lg bg-gray-500 text-white duration-700",
								children: "Голосование"
							})
						})]
					})
				}), g.jsx("div", {
					className: "relative inline-block my-2 sm:my-0",
					"data-headlessui-state": "",
					children: g.jsx(cO, {
						userData: n,
						setShowModal: e,
						setShowModalProfile: r,
						setShowModalVote: i
					})
				})]
			})
		})
	},
	fO = "/assets/logo-414601c0.png",
	dO = "/assets/closed-da346e1e.png",
	hO = "/assets/opened-88b14f0b.png",
	pO = ({
		toAuth: e
	}) => {
		const [t, n] = T.useState(!1), [r, i] = T.useState(!0), [l, o] = T.useState(""), [s, a] = T.useState("");
		async function u() {
			await le.post("http://127.0.0.1:8000/auth", {
				email: l,
				password: s
			}, {
				headers: {
					Accept: "application/json",
					"Access-Control-Allow-Origin": "POST",
					"X-Requested-With": "XMLHttpRequest",
					"Access-Control-Allow-Methods": "POST",
					"Access-Control-Allow-Headers": "Authorization"
				}
			}).then(({
				data: c
			}) => {
				document.cookie = `Authorization=${c.token}; max-age=86400; path=/`, le.get("http://127.0.0.1:8000/api/me",
					{
					headers: {
						Accept: "application/json",
						"Access-Control-Allow-Origin": "GET",
						"X-Requested-With": "XMLHttpRequest",
						"Access-Control-Allow-Methods": "GET",
						"Access-Control-Allow-Headers": "Authorization"
					}
				}).then(({
					data: f
				}) => {
					e(f)
				})
			}).catch(() => {
				n(!0)
			})
		}
		return g.jsx("div", {
			className: "w-screen h-screen flex justify-center bg-gray-100",
			children: g.jsxs("div", {
				className: "p-6 sm:my-48 my-auto border shadow w-96 h-[33rem] rounded-lg bg-white flex items-center flex-col",
				children: [g.jsx("img", {
					src: fO,
					className: "w-16 h-16 rounded-lg my-4"
				}), g.jsx("h1", {
					className: "text-center font-bold font-sans text-3xl my-6 text-black/80",
					children: "Авторизация"
				}), g.jsxs("div", {
					className: "my-8",
					children: [g.jsx("div", {
						className: "my-5",
						children: g.jsx("div", {
							className: "mt-1 border-b border-gray-300 focus-within:border-blue-600 flex flex-row items-center duration-500",
							children: g.jsx("input", {
								required: !0,
								value: l,
								onChange: c => o(c.target.value),
								type: "email",
								className: "w-full mr-4 border-0 border-b border-transparent focus:ring-0 outline-none sm:text-xl ",
								placeholder: "Email"
							})
						})
					}), g.jsx("div", {
						className: "my-10",
						children: g.jsxs("div", {
							className: "mt-1 border-b border-gray-300 focus-within:border-blue-600 flex duration-500",
							children: [g.jsx("input", {
								required: !0,
								value: s,
								onChange: c => a(c.target.value),
								type: r ? "password" : "text",
								className: "w-full border-0 border-b border-transparent focus:ring-0 outline-none sm:text-xl",
								placeholder: "Password"
							}), g.jsx("button", {
								onClick: () => i(c => !c),
								children: g.jsx("img", {
									src: r ? `${dO}` : `${hO}`,
									className: "h-6 w-6 outline-none opacity-50"
								})
							})]
						})
					})]
				}), g.jsxs("div", {
					className: "text-center",
					children: [g.jsx("button", {
						onClick: () => u(),
						type: "button",
						className: "rounded-lg w-226 bg-black/80 border-transparent h-14 text-base font-medium text-white font-sans hover:bg-blue-600 duration-500",
						children: "Войти"
					}), t ? g.jsx(Tl, {
						setErrorModal: n,
						autherror: t,
						dateError: !1,
						inputerror: !1
					}) : g.jsx(g.Fragment, {})]
				})]
			})
		})
	},
	P1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAI5ElEQVR4nO2deaxfQxTHhyJRS1NU0kVrbUtV6x9bbJHYglJLiYglal8aO4nEVhVbREkQtLVTRCK2P4QQEWtrTSsUrX1XrbXe+8h4U9qnfnPunbl35s6dT/L+e7lzzvec39y5ZzalMplMJpPJZBIFWA/YFTgBuAi4EXgAmGn+7gFuAC4GjgN2AdYPbXemJMAw4HjgPuBzyrMAuBc4ERicAxIxwADgTOAloBv/dAOvAJOAdUL7mzEAY4DpwK/Ux6/AncCoHIhAACPN+7uKX7uULuAhYEROhPoCvyZwHbCEePgduAZYOydCtcHfE5hPvMwHdstJ4D/wqwJXBu7upXSb3mCVnAj+RvcvOAZkDjANOAPYDxgLbKxH88CGwFbAjsA+wAXAwx56mme07TkJ3IK/GfB+ycHZ06bwM9Ch/UHms09//pXhA51oOQnKiT8K+Kqg4IuAq4BNfIsOjACuBX4paJMuRG2Zk6CY2JsDXxYQ+Q/z3q28ywUGA7eYNqVoXzar2rYkMN3upwXEfQ7YIoCdw4EXC9j5cS4n20VdHXhZKOgSM3nTJ6C9qxgb/hTaPEv7GMre6DHlVQnf6dk9FQn0zB5+I7R9emh7owQ4XCjgRzG+T+kZtH4h9OHw0PZGBTAU+FH4Ht1QRQo94wI9hWzj+zweWF44XXix8S2wqYocegpM2lYbD4e2NQqA3YWTLTuphgDsYYpRNto9bwCsBLwpEOps1TCACwV+vaE1UG0FGC8QSZd0V1YNA1gZeErg3wGqrZjv4k78FuOIXwqwEfCzxcdXVBsBdhD8Oi5XDQe4RODn9qptmOnZTiwE+qs0VjB9ZfH1dtUWzKyaXrK92CLKZBUB1MNio8lwlSLmV3A28I5QEF1b30BFAPXzNnAWsIZKJPDnF6iTL+UxFQmE42vgXK2haiLAtsCHJZ0/SkUC4dGl5R1Vw4o7kwoumFiWrpj25REHwae+iwT/VkdnH1URQVzMiLYo5in4P4RY3dMJ4uPmKMvHwBQHp340M4IjVWQQJ1F8IvdeESOZ/Vp2YHOFmTUbFmVG19NjDjMaTBGuI1hKVzSzo3o/nFmlIw38hGjfY+Enjw4FPhFqOQ9YKwbD9ZYtCXcnUdyop3aiD6WQMCW0sf1Mzd7G1W3s5h1fD3oTimTQHG5Hsqny2XgkB790EujzD+JdLCOo9H3Y2FJmPOMrvRC2E++H3Lhp48ggxiUEcKxA5/o3oAInC379cZcuG4DZfWTrBU4IYdiDFqOuq92oRAGmWrS+P4RRb1mM2qN2oxIF2Nui9ewQRun9eZ3wvke/rWAfb30TwijbdG8u+vgtDnXit7q/T3fGTr/ajEocoK9A72rnBvSIHjgFmIuMrSs1qEXQs99Qgo7NSd6/vnQwgdcoxulejWgxwMEFtX9Vn4Tmq/FxJQ5G0szwYkBGAZeW0F/vSNrXNfiHORzJOsPTuQGnmT12cwV7CWJgsbFV23yqj+XtJRMAE7tDyjY6WrCvrRNHODg8RO+WKXD2Tsz8CdzmciCEcNDdKSGLHVMHrFZgsLcini07ENG7Zc15f6nxk36dltHE6HKXQ9v6pNRVizSmR/tljmSdb5Z69S3p5KSCS8uaRlfZwbGZEzjPnJxapmc8scivX3LNit66fb3ZAOJc9DG//JSDv5Qul56g15F6+rKMyaZ3sfGZqBcA9hI8TB/kOMbViV7v/BS7/f9DB2yQ53MI3sWOfX7GHINq++V7C75pUw/42satnjUcKpifuUnyIH1uTSeur8DwFEb7RdE+D/Gs5TmWNmdJHmJb5LmNZ6P1d75kOflBUSyDtqBtNOMZyVfUKcr/Ocud+MF11gnfa/yAJwXBb9w1bUB/wWaPxytoVx9C2Ym+tk+N7poT4D1LewephgIcYvFtbs0J0G3dlCMot/p+Bdg+YaLv9i2rejvxk6r3FbBI8pDZlodM9Wx0R1TDoUb/fA0Cpwo+A/1MNeYEoObPQPsXHLC/sBDkJQlsDamGQw3+FSgE7edrHfrSA5z1levbuQwMcwI4LRPTC3UuF1ZR5fs0zC3cUaAaDvEwqehNnUWXgFWCajjEgR7Yr1bU8DFmwBcU1XAIj77qfnRZ4/d3OO7NC94j8q9vY82r7izfk1u92gnJ76KBn8WBAx2XhjnhLRLLL2/XJ231rpDdVMVmVsKhC3rjfTkxEng9hBdeHFg++J2WVs30fes3YXjb+3W1ZmB4jKB27xXPwdfnFNm422dPQL3oGcijC63/KynkzmYp0vPmtKrKlmt7tLnIosq7fCVBVboYzeeZGFymt4Y18vQ1m5eegi+9kXRZHvDxOsCCajtVCmSCfwflud81CXICBBLIHLzoEnwvSYAF1XaqEMgEX5+s7Yv7HDa6ePcvKXwLVEHwnZIAC6rt+BTIHF7Ru8jjk+lFR9o+/UsSXwLVEPxSSYAF1XZ8CGSCr0u5dTFNmgS2B6m24ypQgOAXSgIsqLbjKhAwETnSUrCUiVX7lzyuAhWo9P1d2RP8X58iz6vav+TxIZAgaP8ES9IeBZ5Xh39J40ugDkFbLljS9hA+ry7/ksWnQCsI2n+CVaQ9BM+r078k8S3QMkFbYbCKtofleXX7lxxVCGSC1sdXe3R4nsCWnAAxCZR6e40j9YCQEyAugVJvr3GkHhByAsQlUOrtNY7UA0JOgLgESr29xpF6QMgJEJdAqbfXOFIPCDkB4hIo9fYaR+oBISdAXAKZSxf+90/5by/3AG0WiMT9cyZ1gUjcP2dSF4jE/XMmdYFI3D9nUheIxP1zJnWBSNw/Z1IXiMT9cybxCyP61XlhRCMRHDt3gGoowIS6r4xpHIJLo/TZd/1VwwDWBT6p+9KoxmGuWLexwFzAtLZqxj1BEwTB15ys2g6wQUsvjlzi++LIxgLcRvu4ObTu0QAMFt6AnQoLgYGhdY8KYO+WvAq6nM/wTxXgdCNQqnTpu5JD6xw1wLhEXwcLgX1D69sIgAH6kkMzUk7hV39nfueXS4Qh+op14AlgjvB+vNAsMrY+rr/z86deJpPJZDKZGPkLpGh5D6GAzZcAAAAASUVORK5CYII=",
	mO = ({
		isVisable: e,
		setShowModal: t
	}) => {
		const [n, r] = T.useState({
			grup: "",
			header: "",
			content: "",
			photos: []
		}), [i, l] = T.useState(!1), [o, s] = T.useState(), [a, u] = T.useState("");

		function c(d) {
			s(d.target.files[0]), u(URL.createObjectURL(d.target.files[0]))
		}

		function f() {
			le.post("http://127.0.0.1:8000/api/news", {
				image: o,
				grup: n.grup,
				header: n.header,
				content: n.content
			}, {
				headers: {
					accept: "application/json",
					"Content-Type": "multipart/form-data"
				}
			}).then(() => window.location.href = "/")
		}
		if (!e) return null;
		const h = d => {
			d.target.id === "exit" && t(!1)
		};
		return g.jsx("div", {
			className: "fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10",
			id: "exit1",
			onClick: h,
			children: g.jsx("div", {
				className: "w-full sm:w-1/2 h-1/8 inset-0 flex justify-center",
				children: g.jsxs("div", {
					className: "shadow w-full 2xl:h-auto sm:h-[400px] sm:max-h-[900px] my-8 flex flex-col gap-4 p-4 bg-white rounded-lg xl:overflow-none overflow-y-auto",
					children: [g.jsxs("div", {
						className: "flex items-center justify-between",
						children: [g.jsx("div", {
							className: "text-xl font-semibold opacity-70",
							children: "Создание новости"
						}), g.jsx("div", {
							children: g.jsx(qn, {
								size: 30,
								className: "hover:opacity-100 opacity-50 duration-500 cursor-pointer",
								onClick: () => t(!1)
							})
						})]
					}), g.jsx("div", {
						className: "flex flex-row justify-between",
						children: g.jsx("div", {
							className: "flex border border-black/20 rounded-lg w-1/3 sm:w-max h-12 focus-within:border-blue-600 duration-500",
							children: g.jsx("textarea", {
								className: "w-full h-auto p-2 text-xl resize-none rounded-lg outline-none",
								placeholder: "Группа",
								maxLength: 4,
								onChange: d => r({
									...n,
									grup: d.target.value
								})
							})
						})
					}), g.jsx("div", {
						className: "flex border border-black/20 rounded-lg w-full h-12 focus-within:border-blue-600 duration-500",
						children: g.jsx("textarea", {
							className: "h-full w-full p-2 text-xl resize-none rounded-lg outline-none",
							placeholder: "Заголовок",
							maxLength: 255,
							onChange: d => r({
								...n,
								header: d.target.value
							})
						})
					}), g.jsx("div", {
						className: "flex border border-black/20 rounded-lg w-auto h-[400px] focus-within:border-blue-600 duration-500",
						children: g.jsx("textarea", {
							className: "w-full h-full p-2 text-xl resize-none rounded-lg outline-none",
							placeholder: "Содержание новости",
							maxLength: 2e3,
							onChange: d => {
								r({
									...n,
									content: d.target.value ? JSON.stringify(d.target.value) : ""
								})
							}
						})
					}), a ? g.jsx("div", {
						children: g.jsx("img", {
							src: a,
							className: "w-32 h-32 rounded-xl object-cover"
						})
					}) : "", g.jsxs("div", {
						className: "flex justify-between items-center flex-row gap-8 sm:gap-0",
						children: [g.jsxs("div", {
							className: "w-1/8 relative bg-black/80 text-white rounded-lg  duration-500 ",
							children: [g.jsx("input", {
								title: "Добавить фотографию",
								type: "file",
								multiple: !1,
								onChange: d => c(d),
								className: "w-full h-full absolute duration-500 cursor-pointer rounded-lg hover:bg-green-500 opacity-20"
							}), g.jsxs("div", {
								className: "w-max sm:w-full flex flex-row p-2 items-center justify-center text-center gap-2 font-semibold",
								children: [g.jsx("img", {
									src: `${P1}`,
									className: "w-6 h-6  "
								}), "Загрузить фото"]
							})]
						}), i ? g.jsx(Tl, {
							setErrorModal: l,
							inputerror: i,
							dateError: !1,
							autherror: !1
						}) : "", g.jsx("button", {
							onClick: async () => {
								n.grup && n.header && n.content ? await f() : l(!0)
							},
							className: "w-[191px] sm:w-1/8 py-2 rounded-lg bg-black/80 border-transparent text-base font-medium text-white font-sans hover:bg-blue-600 duration-500 text-center cursor-pointer",
							children: "Подтвердить"
						})]
					})]
				})
			})
		})
	},
	gO = ({
		isVisable: e,
		setShowModalUpdate: t,
		newsData: n
	}) => {
		const [r, i] = T.useState({
			grup: "",
			header: "",
			content: ""
		}), [l, o] = T.useState(!1), [s, a] = T.useState(!0), [u, c] = T.useState(), [f, h] = T.useState("");
		T.useEffect(() => {
			i({
				...n
			})
		}, [n]);

		function d() {
			le.delete(`http://127.0.0.1:8000/api/news/image/${n.id}`), a(!1)
		}

		function p(m) {
			c(m.target.files[0]), h(URL.createObjectURL(m.target.files[0]))
		}

		function x() {
			le.put(`http://127.0.0.1:8000/api/news/${n.id}`, {
				image: u ?? n.photos,
				grup: r.grup,
				header: r.header,
				content: r.content
			}, {
				headers: {
					accept: "application/json",
					"Content-Type": "multipart/form-data"
				}
			}).then(() => window.location.href = "/")
		}
		if (!e) return null;
		const S = m => {
			m.target.id === "exit" && t(!1)
		};
		return g.jsx("div", {
			className: "fixed inset-0 w-screen h-screen bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10",
			id: "exit",
			onDoubleClick: S,
			children: g.jsx("div", {
				className: "w-screen 2xl:w-1/2 h-1/8 inset-0 flex justify-center",
				children: g.jsxs("div", {
					className: "shadow w-full 2xl:h-auto sm:h-[400px] sm:max-h-[900px] my-8 flex flex-col gap-4 p-4 bg-white rounded-lg xl:overflow-none overflow-y-auto",
					children: [g.jsxs("div", {
						className: "flex items-center justify-between",
						children: [g.jsx("div", {
							className: "text-xl font-semibold opacity-70",
							children: "Редактирование новости"
						}), g.jsx("div", {
							children: g.jsx(qn, {
								size: 30,
								className: "hover:opacity-100 opacity-50 duration-500 cursor-pointer",
								onClick: () => t(!1)
							})
						})]
					}), g.jsx("div", {
						className: "flex flex-row justify-between",
						children: g.jsx("div", {
							className: "flex border border-black/20 rounded-lg w-1/4 h-12 focus-within:border-blue-600 duration-500",
							children: g.jsx("textarea", {
								className: "w-full h-auto p-2 text-xl resize-none rounded-lg outline-none",
								placeholder: "Группа",
								maxLength: 4,
								value: r.grup,
								onChange: m => i({
									...r,
									grup: m.target.value
								})
							})
						})
					}), g.jsx("div", {
						className: "flex border border-black/20 rounded-lg w-full outline-1 h-12 focus-within:border-blue-600 duration-500",
						children: g.jsx("textarea", {
							className: "h-full w-full p-2 text-xl resize-none rounded-lg focus:outline-none",
							placeholder: "Заголовок",
							maxLength: 255,
							value: r.header,
							onChange: m => i({
								...r,
								header: m.target.value
							})
						})
					}), g.jsx("div", {
						className: "flex border border-black/20 rounded-lg w-auto h-[400px] focus-within:border-blue-600 duration-500",
						children: g.jsx("textarea", {
							className: "w-full h-full p-2 text-xl resize-none rounded-lg outline-none",
							placeholder: "Содержание новости",
							maxLength: 2e3,
							value: r.content ? JSON.parse(r.content) : r.content,
							onChange: m => i({
								...r,
								content: m.target.value ? JSON.stringify(m.target.value) : ""
							})
						})
					}), f ? g.jsx("img", {
						src: f,
						className: "w-32 h-32 rounded-xl object-cover pointer-events-none"
					}) : n.photos.length ? g.jsx("div", {
						className: "flex gap-8 flex-col",
						children: s ? g.jsx("div", {
							className: "w-full flex justify-start",
							children: g.jsxs("div", {
								className: "flex flex-row items-center justify-center relative",
								children: [g.jsx("img", {
									src: `http://127.0.0.1:8000/files/getNewsPicture/${n.photos}`,
									className: "w-32 h-32 rounded-xl object-cover"
								}), g.jsx("button", {
									"data-size": 50,
									className: "absolute bg-black/90 w-10 h-10 rounded-full opacity-50 hover:opacity-100 duration-500 text-white",
									onClick: () => d(),
									children: "X"
								})]
							})
						}) : ""
					}) : "", g.jsxs("div", {
						className: "flex justify-between items-center flex-row gap-8 sm:gap-0",
						children: [g.jsxs("div", {
							className: "w-1/8 relative bg-black/80 text-white rounded-lg  duration-500",
							children: [g.jsx("input", {
								title: "Обновить фотографию",
								type: "file",
								multiple: !1,
								onChange: m => p(m),
								className: "w-full h-full absolute duration-500 cursor-pointer rounded-lg hover:bg-green-500 opacity-20"
							}), g.jsxs("div", {
								className: "w-max sm:w-full flex flex-row p-2 items-center justify-center text-center gap-2 font-semibold",
								children: [g.jsx("img", {
									src: `${P1}`,
									className: "w-6 h-6"
								}), "Загрузить фото"]
							})]
						}), l ? g.jsx(Tl, {
							setErrorModal: o,
							inputerror: l,
							autherror: !1,
							dateError: !1
						}) : "", g.jsx("button", {
							onClick: () => {
								r.grup && r.header && r.content ? x() : o(!0)
							},
							className: "w-[191px] sm:w-1/8 py-2 rounded-lg bg-black/80 border-transparent text-base font-medium text-white font-sans hover:bg-blue-600 duration-500 text-center cursor-pointer",
							children: "Подтвердить"
						})]
					})]
				})
			})
		})
	},
	yO = ({
		isVisable: e,
		setShowModalVote: t
	}) => {
		const [n, r] = T.useState(["Участник"]), [i, l] = T.useState(!1), [o, s] = T.useState(!1), [a, u] = T.useState(!1), [c, f] = T.useState({
			header: "",
			grup: "",
			elected: [""],
			endedAt: ""
		});
		if (!e) return null;
		const h = p => {
			p.target.id === "exit" && t(!1)
		};
		async function d() {
			const p = [];
			p.push(...n.map((x, S) => document.getElementById(S.toString()).value)), p.includes("") ? (p.splice(0, -1), l(!0), u(!0), s(!1)) : le.post("http://127.0.0.1:8000/api/vote", {
				header: c.header,
				grup: c.grup,
				elected: p,
				endedAt: c.endedAt
			}, {}).then(() => window.location.href = "/vote")
		}
		return g.jsx("div", {
			className: "fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10",
			id: "exit",
			onDoubleClick: h,
			children: g.jsx("div", {
				className: "w-full sm:w-1/2 min-h-1/2 max-h-auto  inset-0 flex justify-center",
				children: g.jsxs("div", {
					className: "shadow w-full h-auto flex p-4 flex-col bg-white rounded-lg",
					children: [g.jsxs("div", {
						className: "w-full h-auto flex flex-col gap-4 p-2 bg-white rounded-lg ",
						children: [g.jsxs("div", {
							className: "flex justify-between items-center",
							children: [g.jsx("div", {
								className: "text-xl font-semibold opacity-70",
								children: "Создание голосования"
							}), g.jsx("div", {
								children: g.jsx(qn, {
									size: 30,
									className: "hover:opacity-100 opacity-50 duration-500 cursor-pointer",
									onClick: () => t(!1)
								})
							})]
						}), g.jsx("div", {
							className: "flex flex-row justify-between",
							children: g.jsxs("div", {
								className: "flex flex-row items-center w-full gap-4",
								children: [g.jsx("div", {
									className: "flex border border-black/20 rounded-lg w-1/2 sm:w-1/4 h-12 outline-1 focus-within:border-blue-600 duration-500",
									children: g.jsx("textarea", {
										className: "w-full h-auto p-2 text-xl resize-none rounded-lg outline-none",
										placeholder: "Группа",
										maxLength: 4,
										onChange: p => f({
											...c,
											grup: p.target.value
										})
									})
								}), g.jsx("div", {
									className: "w-1/2 sm:w-1/4 h-full border border-black/20 rounded-lg flex items-center p-2 focus-within:border-blue-600 duration-500",
									children: g.jsx("input", {
										type: "date",
										className: "w-full h-full text-xl outline-none",
										title: "Дата окончания",
										onChange: async p => {
											const x = new Date(p.target.value).getTime() / 1e3;
											f({
												...c,
												endedAt: x.toString()
											})
										}
									})
								})]
							})
						}), g.jsx("div", {
							className: "flex border border-black/20 rounded-lg w-full h-12 focus-within:border-blue-600 duration-500",
							children: g.jsx("textarea", {
								className: "h-full w-full p-2 text-xl resize-none rounded-lg outline-none",
								placeholder: "Заголовок",
								maxLength: 255,
								onChange: p => f({
									...c,
									header: p.target.value
								})
							})
						}), g.jsx("div", {
							className: "h-auto max-h-64  gap-4 flex flex-col overflow-y-auto",
							children: n.map((p, x) => g.jsx("div", {
								className: "flex border border-black/20 rounded-lg w-full h-min focus-within:border-blue-600 duration-500",
								children: g.jsxs("div", {
									className: "flex flex-between w-full p-2 items-center h-auto py-2.5 gap-2",
									children: [g.jsx("input", {
										className: "w-full text-xl resize-none rounded-lg focus:outline-none",
										id: x.toString(),
										placeholder: "Ответ / Почта кандидата"
									}), x ? "" : g.jsx("img", {
										src: `${A1}`,
										className: "w-6 cursor-pointer opacity-30 hover:opacity-100 duration-500",
										onClick: () => r([...n, "Участник"]),
										title: "Добавить"
									}), x ? g.jsx("img", {
										src: `${j1}`,
										className: "w-6 cursor-pointer opacity-30 hover:opacity-100 duration-500",
										title: "Удалить",
										onClick: () => r(n.slice(0, -1))
									}) : ""]
								})
							}, x))
						}), g.jsx("button", {
							className: "w-full py-2 rounded-lg bg-black/80 border-transparent text-base font-medium text-white font-sans hover:bg-blue-600 duration-500 text-center cursor-pointer",
							onClick: () => {
								if (+c.endedAt < +V.now() / 1e3) {
									s(!0), l(!0), u(!1);
									return
								}
								if (c.endedAt && c.header && c.grup && n.length > 1) d();
								else {
									l(!0), s(!1), u(!0);
									return
								}
							},
							children: "Подтвердить"
						})]
					}), i ? g.jsx(Tl, {
						dateError: o,
						setErrorModal: l,
						inputerror: a,
						autherror: !1
					}) : ""]
				})
			})
		})
	},
	xO = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAJGUlEQVR4nO3db8heZR3A8Wtbaa2yv1pNiByF1rKgf9CLCEwm+aKi0KK0PxAtJuQwR6/qRVYrMNaYFlIGWs0/UJA1nRIlvegPViiStiQksrQ/9maWbrp942LXfXbO9jyP9/2cc+7rPtf5fuABwXHvOb9zfXfu+9znPncIkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRpecCbgauA+4D/AgeAPwC7gTc6O40S8DxgD3CE5cX/9734Z3P/vtLcABuAe5le/LMb3EUqHvDS9BRqVn8CTs/9+0uLGIeRqGwdxGEkKlOHcRiJytJDHEaiMvQYh5Fo2OYQh5FomOYYh5FoWDLEYSQahoxxGIkW2wLEYSRaTAsUx4SXpWgxLGAcE0aivBY4jgkjUR4DiGPCSDRfA4pjwkg0HwOMY8JI1K8BxzFhJOpHAXFMGIm6VVAcE0aibhQYx4SRqJ2C45gwEq3OCOKYMBLNZkRxTBiJZorjj4xP3ObTXCdaFvBM4Dc9L8JFeIzl/Ap4hktESwK29rj4vg1c2MHjXJgeqy9bXB46AbAGuL+nRXctsBa4oIPHuiD9rt+gH/vj47tE1AC8oacFF/+1X5v+jk4CSY+1tscjydkuDzV09PRnySNH7e/oLJD0eH0dSd7v8lADcGlfR46+AunxSLLV5aEG4KN9xtFXID1F8h6XhxqA1/cZR5+B9BDJJpeHGtLz+Qf6iqPvQDqMZL9LQ0sCPt5XHPMIpKNIPuLy0LKA77Y9W5UzkJZnt250aWiab5+9Y4ZFtXuaOOYZSO1IEr9eelq3A891eWjaxfV54H8rLKgHgYtmGec8A6n9nRen33U58bvZPzdt5FIlXt0KXALcANwJ7AV2Au8F1s06qhyBpL93Xfqdd6ZtuDNtU9w2r+DVYsgViDQIBiKtwEA0V8B64GXARuBNx/2cET8AtUi7pMRAOPohszOWmP/G9OnM9bl/xzHFcB7wVeCnwENTLKbD6bPlnwFetADbUEQgwIuBy4H70oyfzl/TPvsKsNloutsR8Q2vdwLXA4+1XFgPA+dk3p7BBwKcCzzSchvivrwu9/4YehjvA35Pt56Kn/vIuF2DDgT44JRHjFn8Np2C9lOMU+6ETcAv6M8B4LWZtm2wgXB0v8TZ9eXnwGtybNuQjhrbgUP072eZtnHIgfyE/h0ELvNocuLwT5nTDqg7K8MiG2QgHD0j1fVTq5X8KF4TN+/tXEjpVODvmL9PZNjWoQayhfmLr03GfRkMcGrGuxjuyLC9Qw1kB3nE08gvCSO+rPwu8tmVYZuHGsgu8vk18JwwNsD3yWtbhm0eaiCXkddNYUzSZda5zf1NqgEH8g7yG8ctUYFXpg/p5PSX1XyeY8SBrEmvB3KK776/IpQOuIX8PpZp2wcZSA/3DVutH4aSAW/PPWFgT8btH3Iga+JrAfJ7WygVsC/zcOMNFk7KuP2DDSQCTgauJq+9oUTxOpuMQ/0l8O4FmMGgA5mItyZNX7aTwxHgzFCa9FmArj2UThd/LT1+/Wd7umN7lgsTSw5kIs4W+ECa9fHzj/tkD/A3uvelUJp05qjLN4/OGdpFbaUFMsNrl3M7/mq7B0NJ4iGxw+FcmeMUbRfGGMhxtx6KR5WuvCqUAvhUR0PZHQZszIFMzHi3x5V8MpQCuKaDgdw/9G9gNZAwuclD/B7Etr4ZSpHu5NfWh8LAGchR8ZatQ/3Q26K+QH+8hBsrG0jjSu4nWq6Jcl6oA/9pOYy7QgEM5Jj0gag2Hg2lAJ5sOYwfhwIYyDFxn7ZcE4dCKWjv5lAAAzkm7tO2iyKUwkCqOYz+NO+EgdQYSDUHA0kMpMZAqjkYSGIgNQZSzcFAEgOpMZBqDgaSGEiNgVRzMJDEQGoMpJqDgSQGUmMg1RwMJDGQGgOp5mAgiYHUGEg1BwNJDKTGQKo5GEhiIDUGUs3BQBIDqTGQag4GkhhIjYFUczCQxEBqDKSag4EkBlJjINUcDCQxkBoDqeZgIImB1BhINQcDSQykxkCqORhIYiA1BlLNwUASA6kxkGoOBpIYSI2BVHMwkMRAagykmoOBJAZSYyDVHAwkMZAaA6nmYCCJgdQYSDUHA0kMpMZAqjkYSGIgNQZSzcFAEgOpMZBqDgaSGEiNgVRzMJDEQGoMpJqDgSQGUmMg1RwMJDGQGgOp5nB+B7M4PxQAv0CnMYy2SvmGqbM7mMWmUAAMpDEMAzk6h/XAYy2GcQB4digABtIYhoEcm8W1LYbxrVAIDKQxDAM5NovXrfI7wh8v5elVZCA1BtIEXLKKmWwJBcEjSGMYHkFOXCBfBI5MMZj4Z74QCoOBNIZhIEsvks3APSsMJ/6/zaFAGEhjGAay8mJ5K7AVuDL9xP9+SygYBtIYhoGowUCawzAQNRhIcxgGogYDaQ7DQNRgIM1hGIgaDKQ5DANRg4E0h2EgajCQ5jAMRA0G0hyGgajBQJrDMBA1GEhzGAaiBgNpDsNA1GAgzWEcbFnIrc3xauiAfS3XxBOhFMC/Ww7jntzboG4B97ZcE/8KpQD+3HIYTwGn5t4OdQM4DTjcck08EEoB3E57n869HeoGsK2D9XBbKAWwq4OBPAI8P/e2qB3ghcA/O1gPO0MpgIvpxq3Autzbo9WJ+y7+y9/RWvhwKAVwOt3Z65FksEeO2zpaA/FGFi8PJengrEXdP4BLfeE+mBfk2zp6WjVxdygN8Fm6dziFF48qN/uzUDPYm/ZN27NVS7k8lCY9zXqyh2FpXA4V9/RqArgu93Q1eN8JpQLOSm/6SasR186rQ8mAq1c1Ggm+HkoHvCC96SfN4u/AKWEMgHf1dHZDZToMnBfGBNiRe+oajCvC2ABrgZtyT14L74a4VsIYAScDd+TeA1pY+4CTwpjFAQA35t4TWjg/AJ6Ve30u0tOtL0/5jUsq/wX5FaN9WjXF2a2Hc+8hZT2Vuzn3OhzC+yRX+Y776N4h3+XHGGYLZSNwTbo4TWU6BFwPnNnfP7mFAzYA25/myy41LHfHS9aLvSo3lzhQ4KJ4TU46BbgfeLSD+26pewfT7Z72p321M35M1igkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSaFL/weDRy67CEJy1AAAAABJRU5ErkJggg==",
	wO = ({
		isVisable: e,
		setShowProfileUpdate: t,
		userData: n
	}) => {
		const [r, i] = T.useState({
			id: -1,
			firstName: "",
			secondName: "",
			thirdName: "",
			bio: "",
			email: "",
			password: "",
			profile_picture: "",
			grup: [""],
			roles: [""]
		}), [l, o] = T.useState({
			data: "",
			isActive: !1
		}), [s, a] = T.useState();
		T.useEffect(() => {
			i(n), a(void 0), c(""), o({
				data: n.bio,
				isActive: !1
			})
		}, [e, r]);
		const [u, c] = T.useState("");
		if (!e) return null;
		const f = p => {
			p.target.id === "exit" && t(!1)
		};

		function h(p) {
			a(p.target.files[0]), c(URL.createObjectURL(p.target.files[0]))
		}

		function d() {
			le.put(`http://127.0.0.1:8000/users/setProfilePicture`, {
				picture: s,
				bio: l.data ?? ""
			}, {
				headers: {
					accept: "application/json",
					"Content-Type": "multipart/form-data"
				}
			})
		}
		return g.jsx("div", {
			className: "fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10",
			id: "exit",
			onDoubleClick: f,
			children: g.jsx("div", {
				className: "w-[500px] sm:h-[70%] flex justify-center",
				children: g.jsxs("div", {
					className: "shadow w-full sm:h-max my-8 flex flex-col gap-4 p-4 bg-white rounded-xl",
					children: [g.jsx("div", {
						className: "w-full flex items-end justify-end",
						children: g.jsx(qn, {
							size: 25,
							className: "hover:opacity-100 opacity-50 duration-500 cursor-pointer ",
							onClick: () => t(!1)
						})
					}), g.jsxs("div", {
						className: "flex flex-col gap-4 items-center",
						children: [g.jsxs("div", {
							className: "w-64 h-64 rounded-full flex relative hover:brightness-[70%] duration-500 justify-center items-center",
							children: [u ? g.jsx("img", {
								src: u,
								className: "w-64 h-64 rounded-full pointer-events-none object-cover"
							}) : r.profile_picture ? g.jsx("img", {
								src: `http://127.0.0.1:8000/files/getProfilePicture/${r.profile_picture}`,
								className: "w-64 h-64 rounded-full pointer-events-none object-cover"
							}) : g.jsx("img", {
								src: "http://127.0.0.1:8000/files/getProfilePicture/stockPicture.png",
								className: "w-64 h-64 rounded-full pointer-events-none object-cover"
							}), g.jsxs("div", {
								className: "absolute w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 duration-700",
								children: [g.jsx("img", {
									src: `${xO}`,
									className: "w-24 h-24 bg-black/40 p-2 rounded-full"
								}), g.jsx("input", {
									type: "file",
									className: "absolute w-full h-full hover:opacity-80 duration-500 cursor-pointer",
									title: "Изменить фото профиля",
									multiple: !1,
									onChange: p => h(p)
								})]
							})]
						}), g.jsxs("div", {
							className: "flex flex-col w-full gap-4",
							children: [g.jsxs("div", {
								children: [g.jsxs("div", {
									className: "text-2xl rounded-lg duration-500",
									children: [r.secondName + " ", r.firstName + " ", r.thirdName + " "]
								}), g.jsx("div", {
									className: "text-lg opacity-50 font-light rounded-lg duration-500 text-start",
									children: `Группа: ${r.grup}`
								}), g.jsx("div", {
									className: "text-lg opacity-50 font-light rounded-lg duration-500 text-start",
									children: `Роль: ${n.roles.map(p=>jf[p]).join(" ")}`
								})]
							}), g.jsx("div", {
								className: "text-2xl border h-36 rounded-lg duration-500",
								children: g.jsx("textarea", {
									className: "h-full w-full p-2 text-lg resize-none rounded-lg focus:outline-none",
									placeholder: "Ваша речь",
									onChange: p => o({
										isActive: !0,
										data: p.target.value
									}),
									value: l.data ?? ""
								})
							})]
						})]
					}), g.jsx("button", {
						disabled: !(s || l.isActive),
						className: s || l.isActive ? "w-full flex justify-center p-2 rounded-lg bg-black/80 hover:bg-green-800 duration-500 font-sans text-white" : "w-full flex justify-center p-2 rounded-lg bg-black/80 font-sans text-white",
						onClick: () => d(),
						children: "Применить"
					})]
				})
			})
		})
	};
const vO = () => {
	const e = {
			id: -1,
			firstName: "",
			secondName: "",
			thirdName: "",
			email: "",
			password: "",
			profile_picture: "",
			grup: [""],
			roles: [""],
			bio: ""
		},
		[t, n] = T.useState(),
		[r, i] = T.useState(!1),
		[l, o] = T.useState(!1),
		[s, a] = T.useState(!1),
		[u, c] = T.useState(!1);

	function f(x) {
		n(x)
	}
	const [h, d] = T.useState({
		photos: "",
		id: -1,
		content: "",
		header: "",
		grup: ""
	});

	function p(x) {
		d(x)
	}
	return T.useEffect(() => {
		le.get("http://127.0.0.1:8000/api/me", {
			headers: {
				Accept: "application/json",
				"Access-Control-Allow-Origin": "GET",
				"X-Requested-With": "XMLHttpRequest",
				"Access-Control-Allow-Methods": "GET",
				"Access-Control-Allow-Headers": "Authorization"
			}
		}).then(({
			data: x
		}) => {
			f(typeof x == "boolean" ? e : x)
		})
	}, [r, l, s]), g.jsx("div", {
		className: "h-full overflow-x-hidden overflow-y-scroll",
		children: t ? g.jsxs(ok, {
			children: [g.jsx(mO, {
				isVisable: r,
				setShowModal: i
			}, 3), g.jsx(yO, {
				isVisable: u,
				setShowModalVote: c
			}, 6), g.jsx(gO, {
				isVisable: l,
				setShowModalUpdate: o,
				newsData: h
			}, 4), g.jsx(wO, {
				userData: t,
				isVisable: s,
				setShowProfileUpdate: a
			}, 5), g.jsxs(ek, {
				children: [g.jsx(Mu, {
					path: "/",
					element: [g.jsx(Ap, {
						toggle: "News",
						userData: t,
						setShowModal: i,
						setShowModalProfile: a,
						setShowModalVote: c
					}, 1), g.jsx(YT, {
						userData: t,
						setShowModalUpdate: o,
						getNew: p
					}, 2)]
				}), g.jsx(Mu, {
					path: "/vote",
					element: [g.jsx(Ap, {
						toggle: "Vote",
						userData: t,
						setShowModal: i,
						setShowModalProfile: a,
						setShowModalVote: c
					}, 7), g.jsx(iO, {
						userData: t
					}, 8)]
				})]
			})]
		}) : g.jsx(pO, {
			toAuth: f
		})
	})
};
Ba.createRoot(document.getElementById("root")).render(g.jsx(vO, {}));