function _wrapNativeSuper(e) {
    var t = "function" == typeof Map ? new Map : void 0;
    return (_wrapNativeSuper = function(e) {
        if (null === e || !_isNativeFunction(e)) return e;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, n)
        }

        function n() {
            return _construct(e, arguments, _getPrototypeOf(this).constructor)
        }
        return n.prototype = Object.create(e.prototype, {
            constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), _setPrototypeOf(n, e)
    })(e)
}

function _isNativeFunction(e) {
    return -1 !== Function.toString.call(e).indexOf("[native code]")
}

function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _slicedToArray(e, t) {
    return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _unsupportedIterableToArray(e, t) || _nonIterableRest()
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _iterableToArrayLimit(e, t) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
        var n = [],
            r = !0,
            i = !1,
            a = void 0;
        try {
            for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
        } catch (u) {
            i = !0, a = u
        } finally {
            try {
                r || null == s.return || s.return()
            } finally {
                if (i) throw a
            }
        }
        return n
    }
}

function _arrayWithHoles(e) {
    if (Array.isArray(e)) return e
}

function _createForOfIteratorHelper(e, t) {
    var n;
    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (n = _unsupportedIterableToArray(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var r = 0,
                i = function() {};
            return {
                s: i,
                n: function() {
                    return r >= e.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e[r++]
                    }
                },
                e: function(e) {
                    throw e
                },
                f: i
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var a, o = !0,
        s = !1;
    return {
        s: function() {
            n = e[Symbol.iterator]()
        },
        n: function() {
            var e = n.next();
            return o = e.done, e
        },
        e: function(e) {
            s = !0, a = e
        },
        f: function() {
            try {
                o || null == n.return || n.return()
            } finally {
                if (s) throw a
            }
        }
    }
}

function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread()
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _unsupportedIterableToArray(e, t) {
    if (e) {
        if ("string" == typeof e) return _arrayLikeToArray(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0
    }
}

function _iterableToArray(e) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
}

function _arrayWithoutHoles(e) {
    if (Array.isArray(e)) return _arrayLikeToArray(e)
}

function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r
}

function _construct(e, t, n) {
    return (_construct = _isNativeReflectConstruct() ? Reflect.construct : function(e, t, n) {
        var r = [null];
        r.push.apply(r, t);
        var i = new(Function.bind.apply(e, r));
        return n && _setPrototypeOf(i, n.prototype), i
    }).apply(null, arguments)
}

function _get(e, t, n) {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
        var r = _superPropBase(e, t);
        if (r) {
            var i = Object.getOwnPropertyDescriptor(r, t);
            return i.get ? i.get.call(n) : i.value
        }
    })(e, t, n || e)
}

function _superPropBase(e, t) {
    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _getPrototypeOf(e)););
    return e
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && _setPrototypeOf(e, t)
}

function _setPrototypeOf(e, t) {
    return (_setPrototypeOf = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
    })(e, t)
}

function _createSuper(e) {
    var t = _isNativeReflectConstruct();
    return function() {
        var n, r = _getPrototypeOf(e);
        if (t) {
            var i = _getPrototypeOf(this).constructor;
            n = Reflect.construct(r, arguments, i)
        } else n = r.apply(this, arguments);
        return _possibleConstructorReturn(this, n)
    }
}

function _possibleConstructorReturn(e, t) {
    return !t || "object" != typeof t && "function" != typeof t ? _assertThisInitialized(e) : t
}

function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function _isNativeReflectConstruct() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
    } catch (e) {
        return !1
    }
}

function _getPrototypeOf(e) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(r, i, (function(t) {
                return e[t]
            }).bind(null, i));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}({
    0: function(e, t, n) {
        e.exports = n("zUnb")
    },
    zUnb: function(e, t, n) {
        "use strict";

        function r(e) {
            return "function" == typeof e
        }
        n.r(t);
        var i = !1,
            a = {
                Promise: void 0,
                set useDeprecatedSynchronousErrorHandling(e) {
                    if (e) {
                        var t = new Error;
                        console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + t.stack)
                    } else i && console.log("RxJS: Back to a better error behavior. Thank you. <3");
                    i = e
                },
                get useDeprecatedSynchronousErrorHandling() {
                    return i
                }
            };

        function o(e) {
            setTimeout((function() {
                throw e
            }), 0)
        }
        var s = {
                closed: !0,
                next: function(e) {},
                error: function(e) {
                    if (a.useDeprecatedSynchronousErrorHandling) throw e;
                    o(e)
                },
                complete: function() {}
            },
            u = Array.isArray || function(e) {
                return e && "number" == typeof e.length
            };

        function l(e) {
            return null !== e && "object" == typeof e
        }
        var c, h = function() {
                function e(e) {
                    return Error.call(this), this.message = e ? "".concat(e.length, " errors occurred during unsubscription:\n").concat(e.map((function(e, t) {
                        return "".concat(t + 1, ") ").concat(e.toString())
                    })).join("\n  ")) : "", this.name = "UnsubscriptionError", this.errors = e, this
                }
                return e.prototype = Object.create(Error.prototype), e
            }(),
            f = ((c = function() {
                function e(t) {
                    _classCallCheck(this, e), this.closed = !1, this._parentOrParents = null, this._subscriptions = null, t && (this._unsubscribe = t)
                }
                return _createClass(e, [{
                    key: "unsubscribe",
                    value: function() {
                        var t;
                        if (!this.closed) {
                            var n = this._parentOrParents,
                                i = this._unsubscribe,
                                a = this._subscriptions;
                            if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof e) n.remove(this);
                            else if (null !== n)
                                for (var o = 0; o < n.length; ++o) n[o].remove(this);
                            if (r(i)) try {
                                i.call(this)
                            } catch (v) {
                                t = v instanceof h ? d(v.errors) : [v]
                            }
                            if (u(a))
                                for (var s = -1, c = a.length; ++s < c;) {
                                    var f = a[s];
                                    if (l(f)) try {
                                        f.unsubscribe()
                                    } catch (v) {
                                        t = t || [], v instanceof h ? t = t.concat(d(v.errors)) : t.push(v)
                                    }
                                }
                            if (t) throw new h(t)
                        }
                    }
                }, {
                    key: "add",
                    value: function(t) {
                        var n = t;
                        if (!t) return e.EMPTY;
                        switch (typeof t) {
                            case "function":
                                n = new e(t);
                            case "object":
                                if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
                                if (this.closed) return n.unsubscribe(), n;
                                if (!(n instanceof e)) {
                                    var r = n;
                                    (n = new e)._subscriptions = [r]
                                }
                                break;
                            default:
                                throw new Error("unrecognized teardown " + t + " added to Subscription.")
                        }
                        var i = n._parentOrParents;
                        if (null === i) n._parentOrParents = this;
                        else if (i instanceof e) {
                            if (i === this) return n;
                            n._parentOrParents = [i, this]
                        } else {
                            if (-1 !== i.indexOf(this)) return n;
                            i.push(this)
                        }
                        var a = this._subscriptions;
                        return null === a ? this._subscriptions = [n] : a.push(n), n
                    }
                }, {
                    key: "remove",
                    value: function(e) {
                        var t = this._subscriptions;
                        if (t) {
                            var n = t.indexOf(e); - 1 !== n && t.splice(n, 1)
                        }
                    }
                }]), e
            }()).EMPTY = function(e) {
                return e.closed = !0, e
            }(new c), c);

        function d(e) {
            return e.reduce((function(e, t) {
                return e.concat(t instanceof h ? t.errors : t)
            }), [])
        }
        var v = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random(),
            p = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r, i) {
                    var a;
                    switch (_classCallCheck(this, n), (a = t.call(this)).syncErrorValue = null, a.syncErrorThrown = !1, a.syncErrorThrowable = !1, a.isStopped = !1, arguments.length) {
                        case 0:
                            a.destination = s;
                            break;
                        case 1:
                            if (!e) {
                                a.destination = s;
                                break
                            }
                            if ("object" == typeof e) {
                                e instanceof n ? (a.syncErrorThrowable = e.syncErrorThrowable, a.destination = e, e.add(_assertThisInitialized(a))) : (a.syncErrorThrowable = !0, a.destination = new y(_assertThisInitialized(a), e));
                                break
                            }
                            default:
                                a.syncErrorThrowable = !0, a.destination = new y(_assertThisInitialized(a), e, r, i)
                    }
                    return a
                }
                return _createClass(n, [{
                    key: v,
                    value: function() {
                        return this
                    }
                }, {
                    key: "next",
                    value: function(e) {
                        this.isStopped || this._next(e)
                    }
                }, {
                    key: "error",
                    value: function(e) {
                        this.isStopped || (this.isStopped = !0, this._error(e))
                    }
                }, {
                    key: "complete",
                    value: function() {
                        this.isStopped || (this.isStopped = !0, this._complete())
                    }
                }, {
                    key: "unsubscribe",
                    value: function() {
                        this.closed || (this.isStopped = !0, _get(_getPrototypeOf(n.prototype), "unsubscribe", this).call(this))
                    }
                }, {
                    key: "_next",
                    value: function(e) {
                        this.destination.next(e)
                    }
                }, {
                    key: "_error",
                    value: function(e) {
                        this.destination.error(e), this.unsubscribe()
                    }
                }, {
                    key: "_complete",
                    value: function() {
                        this.destination.complete(), this.unsubscribe()
                    }
                }, {
                    key: "_unsubscribeAndRecycle",
                    value: function() {
                        var e = this._parentOrParents;
                        return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = e, this
                    }
                }], [{
                    key: "create",
                    value: function(e, t, r) {
                        var i = new n(e, t, r);
                        return i.syncErrorThrowable = !1, i
                    }
                }]), n
            }(f),
            y = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, i, a, o) {
                    var u, l;
                    _classCallCheck(this, n), (u = t.call(this))._parentSubscriber = e;
                    var c = _assertThisInitialized(u);
                    return r(i) ? l = i : i && (l = i.next, a = i.error, o = i.complete, i !== s && (r((c = Object.create(i)).unsubscribe) && u.add(c.unsubscribe.bind(c)), c.unsubscribe = u.unsubscribe.bind(_assertThisInitialized(u)))), u._context = c, u._next = l, u._error = a, u._complete = o, u
                }
                return _createClass(n, [{
                    key: "next",
                    value: function(e) {
                        if (!this.isStopped && this._next) {
                            var t = this._parentSubscriber;
                            a.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe() : this.__tryOrUnsub(this._next, e)
                        }
                    }
                }, {
                    key: "error",
                    value: function(e) {
                        if (!this.isStopped) {
                            var t = this._parentSubscriber,
                                n = a.useDeprecatedSynchronousErrorHandling;
                            if (this._error) n && t.syncErrorThrowable ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe()) : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
                            else if (t.syncErrorThrowable) n ? (t.syncErrorValue = e, t.syncErrorThrown = !0) : o(e), this.unsubscribe();
                            else {
                                if (this.unsubscribe(), n) throw e;
                                o(e)
                            }
                        }
                    }
                }, {
                    key: "complete",
                    value: function() {
                        var e = this;
                        if (!this.isStopped) {
                            var t = this._parentSubscriber;
                            if (this._complete) {
                                var n = function() {
                                    return e._complete.call(e._context)
                                };
                                a.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? (this.__tryOrSetError(t, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
                            } else this.unsubscribe()
                        }
                    }
                }, {
                    key: "__tryOrUnsub",
                    value: function(e, t) {
                        try {
                            e.call(this._context, t)
                        } catch (n) {
                            if (this.unsubscribe(), a.useDeprecatedSynchronousErrorHandling) throw n;
                            o(n)
                        }
                    }
                }, {
                    key: "__tryOrSetError",
                    value: function(e, t, n) {
                        if (!a.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                        try {
                            t.call(this._context, n)
                        } catch (r) {
                            return a.useDeprecatedSynchronousErrorHandling ? (e.syncErrorValue = r, e.syncErrorThrown = !0, !0) : (o(r), !0)
                        }
                        return !1
                    }
                }, {
                    key: "_unsubscribe",
                    value: function() {
                        var e = this._parentSubscriber;
                        this._context = null, this._parentSubscriber = null, e.unsubscribe()
                    }
                }]), n
            }(p),
            m = "function" == typeof Symbol && Symbol.observable || "@@observable";

        function g(e) {
            return e
        }

        function _() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return k(t)
        }

        function k(e) {
            return 0 === e.length ? g : 1 === e.length ? e[0] : function(t) {
                return e.reduce((function(e, t) {
                    return t(e)
                }), t)
            }
        }
        var b, C = ((b = function() {
            function e(t) {
                _classCallCheck(this, e), this._isScalar = !1, t && (this._subscribe = t)
            }
            return _createClass(e, [{
                key: "lift",
                value: function(t) {
                    var n = new e;
                    return n.source = this, n.operator = t, n
                }
            }, {
                key: "subscribe",
                value: function(e, t, n) {
                    var r = this.operator,
                        i = function(e, t, n) {
                            if (e) {
                                if (e instanceof p) return e;
                                if (e[v]) return e[v]()
                            }
                            return e || t || n ? new p(e, t, n) : new p(s)
                        }(e, t, n);
                    if (i.add(r ? r.call(i, this.source) : this.source || a.useDeprecatedSynchronousErrorHandling && !i.syncErrorThrowable ? this._subscribe(i) : this._trySubscribe(i)), a.useDeprecatedSynchronousErrorHandling && i.syncErrorThrowable && (i.syncErrorThrowable = !1, i.syncErrorThrown)) throw i.syncErrorValue;
                    return i
                }
            }, {
                key: "_trySubscribe",
                value: function(e) {
                    try {
                        return this._subscribe(e)
                    } catch (t) {
                        a.useDeprecatedSynchronousErrorHandling && (e.syncErrorThrown = !0, e.syncErrorValue = t),
                            function(e) {
                                for (; e;) {
                                    var t = e,
                                        n = t.closed,
                                        r = t.destination,
                                        i = t.isStopped;
                                    if (n || i) return !1;
                                    e = r && r instanceof p ? r : null
                                }
                                return !0
                            }(e) ? e.error(t) : console.warn(t)
                    }
                }
            }, {
                key: "forEach",
                value: function(e, t) {
                    var n = this;
                    return new(t = w(t))((function(t, r) {
                        var i;
                        i = n.subscribe((function(t) {
                            try {
                                e(t)
                            } catch (n) {
                                r(n), i && i.unsubscribe()
                            }
                        }), r, t)
                    }))
                }
            }, {
                key: "_subscribe",
                value: function(e) {
                    var t = this.source;
                    return t && t.subscribe(e)
                }
            }, {
                key: m,
                value: function() {
                    return this
                }
            }, {
                key: "pipe",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return 0 === t.length ? this : k(t)(this)
                }
            }, {
                key: "toPromise",
                value: function(e) {
                    var t = this;
                    return new(e = w(e))((function(e, n) {
                        var r;
                        t.subscribe((function(e) {
                            return r = e
                        }), (function(e) {
                            return n(e)
                        }), (function() {
                            return e(r)
                        }))
                    }))
                }
            }]), e
        }()).create = function(e) {
            return new b(e)
        }, b);

        function w(e) {
            if (e || (e = a.Promise || Promise), !e) throw new Error("no Promise impl found");
            return e
        }
        var S, E = function() {
                function e() {
                    return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
                }
                return e.prototype = Object.create(Error.prototype), e
            }(),
            T = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r) {
                    var i;
                    return _classCallCheck(this, n), (i = t.call(this)).subject = e, i.subscriber = r, i.closed = !1, i
                }
                return _createClass(n, [{
                    key: "unsubscribe",
                    value: function() {
                        if (!this.closed) {
                            this.closed = !0;
                            var e = this.subject,
                                t = e.observers;
                            if (this.subject = null, t && 0 !== t.length && !e.isStopped && !e.closed) {
                                var n = t.indexOf(this.subscriber); - 1 !== n && t.splice(n, 1)
                            }
                        }
                    }
                }]), n
            }(f),
            x = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e) {
                    var r;
                    return _classCallCheck(this, n), (r = t.call(this, e)).destination = e, r
                }
                return n
            }(p),
            A = ((S = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n() {
                    var e;
                    return _classCallCheck(this, n), (e = t.call(this)).observers = [], e.closed = !1, e.isStopped = !1, e.hasError = !1, e.thrownError = null, e
                }
                return _createClass(n, [{
                    key: v,
                    value: function() {
                        return new x(this)
                    }
                }, {
                    key: "lift",
                    value: function(e) {
                        var t = new O(this, this);
                        return t.operator = e, t
                    }
                }, {
                    key: "next",
                    value: function(e) {
                        if (this.closed) throw new E;
                        if (!this.isStopped)
                            for (var t = this.observers, n = t.length, r = t.slice(), i = 0; i < n; i++) r[i].next(e)
                    }
                }, {
                    key: "error",
                    value: function(e) {
                        if (this.closed) throw new E;
                        this.hasError = !0, this.thrownError = e, this.isStopped = !0;
                        for (var t = this.observers, n = t.length, r = t.slice(), i = 0; i < n; i++) r[i].error(e);
                        this.observers.length = 0
                    }
                }, {
                    key: "complete",
                    value: function() {
                        if (this.closed) throw new E;
                        this.isStopped = !0;
                        for (var e = this.observers, t = e.length, n = e.slice(), r = 0; r < t; r++) n[r].complete();
                        this.observers.length = 0
                    }
                }, {
                    key: "unsubscribe",
                    value: function() {
                        this.isStopped = !0, this.closed = !0, this.observers = null
                    }
                }, {
                    key: "_trySubscribe",
                    value: function(e) {
                        if (this.closed) throw new E;
                        return _get(_getPrototypeOf(n.prototype), "_trySubscribe", this).call(this, e)
                    }
                }, {
                    key: "_subscribe",
                    value: function(e) {
                        if (this.closed) throw new E;
                        return this.hasError ? (e.error(this.thrownError), f.EMPTY) : this.isStopped ? (e.complete(), f.EMPTY) : (this.observers.push(e), new T(this, e))
                    }
                }, {
                    key: "asObservable",
                    value: function() {
                        var e = new C;
                        return e.source = this, e
                    }
                }]), n
            }(C)).create = function(e, t) {
                return new O(e, t)
            }, S),
            O = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r) {
                    var i;
                    return _classCallCheck(this, n), (i = t.call(this)).destination = e, i.source = r, i
                }
                return _createClass(n, [{
                    key: "next",
                    value: function(e) {
                        var t = this.destination;
                        t && t.next && t.next(e)
                    }
                }, {
                    key: "error",
                    value: function(e) {
                        var t = this.destination;
                        t && t.error && this.destination.error(e)
                    }
                }, {
                    key: "complete",
                    value: function() {
                        var e = this.destination;
                        e && e.complete && this.destination.complete()
                    }
                }, {
                    key: "_subscribe",
                    value: function(e) {
                        return this.source ? this.source.subscribe(e) : f.EMPTY
                    }
                }]), n
            }(A);

        function I(e) {
            return e && "function" == typeof e.schedule
        }
        var R = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r, i) {
                    var a;
                    return _classCallCheck(this, n), (a = t.call(this)).parent = e, a.outerValue = r, a.outerIndex = i, a.index = 0, a
                }
                return _createClass(n, [{
                    key: "_next",
                    value: function(e) {
                        this.parent.notifyNext(this.outerValue, e, this.outerIndex, this.index++, this)
                    }
                }, {
                    key: "_error",
                    value: function(e) {
                        this.parent.notifyError(e, this), this.unsubscribe()
                    }
                }, {
                    key: "_complete",
                    value: function() {
                        this.parent.notifyComplete(this), this.unsubscribe()
                    }
                }]), n
            }(p),
            P = function(e) {
                return function(t) {
                    for (var n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
                    t.complete()
                }
            };
        var N = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator",
            D = function(e) {
                return e && "number" == typeof e.length && "function" != typeof e
            };

        function j(e) {
            return !!e && "function" != typeof e.subscribe && "function" == typeof e.then
        }
        var F = function(e) {
            if (e && "function" == typeof e[m]) return r = e,
                function(e) {
                    var t = r[m]();
                    if ("function" != typeof t.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                    return t.subscribe(e)
                };
            if (D(e)) return P(e);
            if (j(e)) return n = e,
                function(e) {
                    return n.then((function(t) {
                        e.closed || (e.next(t), e.complete())
                    }), (function(t) {
                        return e.error(t)
                    })).then(null, o), e
                };
            if (e && "function" == typeof e[N]) return t = e,
                function(e) {
                    for (var n = t[N]();;) {
                        var r = n.next();
                        if (r.done) {
                            e.complete();
                            break
                        }
                        if (e.next(r.value), e.closed) break
                    }
                    return "function" == typeof n.return && e.add((function() {
                        n.return && n.return()
                    })), e
                };
            var t, n, r, i = l(e) ? "an invalid object" : "'".concat(e, "'");
            throw new TypeError("You provided ".concat(i, " where a stream was expected.") + " You can provide an Observable, Promise, Array, or Iterable.")
        };

        function M(e, t, n, r) {
            var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new R(e, n, r);
            if (!i.closed) return t instanceof C ? t.subscribe(i) : F(t)(i)
        }
        var L = function(e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n() {
                return _classCallCheck(this, n), t.apply(this, arguments)
            }
            return _createClass(n, [{
                key: "notifyNext",
                value: function(e, t, n, r, i) {
                    this.destination.next(t)
                }
            }, {
                key: "notifyError",
                value: function(e, t) {
                    this.destination.error(e)
                }
            }, {
                key: "notifyComplete",
                value: function(e) {
                    this.destination.complete()
                }
            }]), n
        }(p);

        function U(e, t) {
            return function(n) {
                if ("function" != typeof e) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                return n.lift(new H(e, t))
            }
        }
        var H = function() {
                function e(t, n) {
                    _classCallCheck(this, e), this.project = t, this.thisArg = n
                }
                return _createClass(e, [{
                    key: "call",
                    value: function(e, t) {
                        return t.subscribe(new V(e, this.project, this.thisArg))
                    }
                }]), e
            }(),
            V = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r, i) {
                    var a;
                    return _classCallCheck(this, n), (a = t.call(this, e)).project = r, a.count = 0, a.thisArg = i || _assertThisInitialized(a), a
                }
                return _createClass(n, [{
                    key: "_next",
                    value: function(e) {
                        var t;
                        try {
                            t = this.project.call(this.thisArg, e, this.count++)
                        } catch (n) {
                            return void this.destination.error(n)
                        }
                        this.destination.next(t)
                    }
                }]), n
            }(p);

        function z(e, t) {
            return new C((function(n) {
                var r = new f,
                    i = 0;
                return r.add(t.schedule((function() {
                    i !== e.length ? (n.next(e[i++]), n.closed || r.add(this.schedule())) : n.complete()
                }))), r
            }))
        }

        function B(e, t) {
            return t ? function(e, t) {
                if (null != e) {
                    if (function(e) {
                            return e && "function" == typeof e[m]
                        }(e)) return function(e, t) {
                        return new C((function(n) {
                            var r = new f;
                            return r.add(t.schedule((function() {
                                var i = e[m]();
                                r.add(i.subscribe({
                                    next: function(e) {
                                        r.add(t.schedule((function() {
                                            return n.next(e)
                                        })))
                                    },
                                    error: function(e) {
                                        r.add(t.schedule((function() {
                                            return n.error(e)
                                        })))
                                    },
                                    complete: function() {
                                        r.add(t.schedule((function() {
                                            return n.complete()
                                        })))
                                    }
                                }))
                            }))), r
                        }))
                    }(e, t);
                    if (j(e)) return function(e, t) {
                        return new C((function(n) {
                            var r = new f;
                            return r.add(t.schedule((function() {
                                return e.then((function(e) {
                                    r.add(t.schedule((function() {
                                        n.next(e), r.add(t.schedule((function() {
                                            return n.complete()
                                        })))
                                    })))
                                }), (function(e) {
                                    r.add(t.schedule((function() {
                                        return n.error(e)
                                    })))
                                }))
                            }))), r
                        }))
                    }(e, t);
                    if (D(e)) return z(e, t);
                    if (function(e) {
                            return e && "function" == typeof e[N]
                        }(e) || "string" == typeof e) return function(e, t) {
                        if (!e) throw new Error("Iterable cannot be null");
                        return new C((function(n) {
                            var r, i = new f;
                            return i.add((function() {
                                r && "function" == typeof r.return && r.return()
                            })), i.add(t.schedule((function() {
                                r = e[N](), i.add(t.schedule((function() {
                                    if (!n.closed) {
                                        var e, t;
                                        try {
                                            var i = r.next();
                                            e = i.value, t = i.done
                                        } catch (a) {
                                            return void n.error(a)
                                        }
                                        t ? n.complete() : (n.next(e), this.schedule())
                                    }
                                })))
                            }))), i
                        }))
                    }(e, t)
                }
                throw new TypeError((null !== e && typeof e || e) + " is not observable")
            }(e, t) : e instanceof C ? e : new C(F(e))
        }

        function q(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.POSITIVE_INFINITY;
            return "function" == typeof t ? function(r) {
                return r.pipe(q((function(n, r) {
                    return B(e(n, r)).pipe(U((function(e, i) {
                        return t(n, e, r, i)
                    })))
                }), n))
            } : ("number" == typeof t && (n = t), function(t) {
                return t.lift(new Q(e, n))
            })
        }
        var Q = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.POSITIVE_INFINITY;
                    _classCallCheck(this, e), this.project = t, this.concurrent = n
                }
                return _createClass(e, [{
                    key: "call",
                    value: function(e, t) {
                        return t.subscribe(new W(e, this.project, this.concurrent))
                    }
                }]), e
            }(),
            W = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r) {
                    var i, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.POSITIVE_INFINITY;
                    return _classCallCheck(this, n), (i = t.call(this, e)).project = r, i.concurrent = a, i.hasCompleted = !1, i.buffer = [], i.active = 0, i.index = 0, i
                }
                return _createClass(n, [{
                    key: "_next",
                    value: function(e) {
                        this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e)
                    }
                }, {
                    key: "_tryNext",
                    value: function(e) {
                        var t, n = this.index++;
                        try {
                            t = this.project(e, n)
                        } catch (r) {
                            return void this.destination.error(r)
                        }
                        this.active++, this._innerSub(t, e, n)
                    }
                }, {
                    key: "_innerSub",
                    value: function(e, t, n) {
                        var r = new R(this, t, n),
                            i = this.destination;
                        i.add(r);
                        var a = M(this, e, void 0, void 0, r);
                        a !== r && i.add(a)
                    }
                }, {
                    key: "_complete",
                    value: function() {
                        this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
                    }
                }, {
                    key: "notifyNext",
                    value: function(e, t, n, r, i) {
                        this.destination.next(t)
                    }
                }, {
                    key: "notifyComplete",
                    value: function(e) {
                        var t = this.buffer;
                        this.remove(e), this.active--, t.length > 0 ? this._next(t.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
                    }
                }]), n
            }(L);

        function K() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Number.POSITIVE_INFINITY;
            return q(g, e)
        }

        function Z(e, t) {
            return t ? z(e, t) : new C(P(e))
        }

        function G() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var r = Number.POSITIVE_INFINITY,
                i = null,
                a = t[t.length - 1];
            return I(a) ? (i = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (r = t.pop())) : "number" == typeof a && (r = t.pop()), null === i && 1 === t.length && t[0] instanceof C ? t[0] : K(r)(Z(t, i))
        }

        function J() {
            return function(e) {
                return e.lift(new X(e))
            }
        }
        var $, X = function() {
                function e(t) {
                    _classCallCheck(this, e), this.connectable = t
                }
                return _createClass(e, [{
                    key: "call",
                    value: function(e, t) {
                        var n = this.connectable;
                        n._refCount++;
                        var r = new Y(e, n),
                            i = t.subscribe(r);
                        return r.closed || (r.connection = n.connect()), i
                    }
                }]), e
            }(),
            Y = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r) {
                    var i;
                    return _classCallCheck(this, n), (i = t.call(this, e)).connectable = r, i
                }
                return _createClass(n, [{
                    key: "_unsubscribe",
                    value: function() {
                        var e = this.connectable;
                        if (e) {
                            this.connectable = null;
                            var t = e._refCount;
                            if (t <= 0) this.connection = null;
                            else if (e._refCount = t - 1, t > 1) this.connection = null;
                            else {
                                var n = this.connection,
                                    r = e._connection;
                                this.connection = null, !r || n && r !== n || r.unsubscribe()
                            }
                        } else this.connection = null
                    }
                }]), n
            }(p),
            ee = {
                operator: {
                    value: null
                },
                _refCount: {
                    value: 0,
                    writable: !0
                },
                _subject: {
                    value: null,
                    writable: !0
                },
                _connection: {
                    value: null,
                    writable: !0
                },
                _subscribe: {
                    value: ($ = function(e) {
                        _inherits(n, e);
                        var t = _createSuper(n);

                        function n(e, r) {
                            var i;
                            return _classCallCheck(this, n), (i = t.call(this)).source = e, i.subjectFactory = r, i._refCount = 0, i._isComplete = !1, i
                        }
                        return _createClass(n, [{
                            key: "_subscribe",
                            value: function(e) {
                                return this.getSubject().subscribe(e)
                            }
                        }, {
                            key: "getSubject",
                            value: function() {
                                var e = this._subject;
                                return e && !e.isStopped || (this._subject = this.subjectFactory()), this._subject
                            }
                        }, {
                            key: "connect",
                            value: function() {
                                var e = this._connection;
                                return e || (this._isComplete = !1, (e = this._connection = new f).add(this.source.subscribe(new te(this.getSubject(), this))), e.closed && (this._connection = null, e = f.EMPTY)), e
                            }
                        }, {
                            key: "refCount",
                            value: function() {
                                return J()(this)
                            }
                        }]), n
                    }(C).prototype)._subscribe
                },
                _isComplete: {
                    value: $._isComplete,
                    writable: !0
                },
                getSubject: {
                    value: $.getSubject
                },
                connect: {
                    value: $.connect
                },
                refCount: {
                    value: $.refCount
                }
            },
            te = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r) {
                    var i;
                    return _classCallCheck(this, n), (i = t.call(this, e)).connectable = r, i
                }
                return _createClass(n, [{
                    key: "_error",
                    value: function(e) {
                        this._unsubscribe(), _get(_getPrototypeOf(n.prototype), "_error", this).call(this, e)
                    }
                }, {
                    key: "_complete",
                    value: function() {
                        this.connectable._isComplete = !0, this._unsubscribe(), _get(_getPrototypeOf(n.prototype), "_complete", this).call(this)
                    }
                }, {
                    key: "_unsubscribe",
                    value: function() {
                        var e = this.connectable;
                        if (e) {
                            this.connectable = null;
                            var t = e._connection;
                            e._refCount = 0, e._subject = null, e._connection = null, t && t.unsubscribe()
                        }
                    }
                }]), n
            }(x);

        function ne() {
            return new A
        }

        function re(e) {
            return {
                toString: e
            }.toString()
        }

        function ie(e, t, n) {
            return re((function() {
                var r = function(e) {
                    return function() {
                        if (e) {
                            var t = e.apply(void 0, arguments);
                            for (var n in t) this[n] = t[n]
                        }
                    }
                }(t);

                function i() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    if (this instanceof i) return r.apply(this, t), this;
                    var a = _construct(i, t);
                    return o.annotation = a, o;

                    function o(e, t, n) {
                        for (var r = e.hasOwnProperty("__parameters__") ? e.__parameters__ : Object.defineProperty(e, "__parameters__", {
                                value: []
                            }).__parameters__; r.length <= n;) r.push(null);
                        return (r[n] = r[n] || []).push(a), e
                    }
                }
                return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i
            }))
        }
        var ae = ie("Inject", (function(e) {
                return {
                    token: e
                }
            })),
            oe = ie("Optional"),
            se = ie("Self"),
            ue = ie("SkipSelf"),
            le = function(e) {
                return e[e.Default = 0] = "Default", e[e.Host = 1] = "Host", e[e.Self = 2] = "Self", e[e.SkipSelf = 4] = "SkipSelf", e[e.Optional = 8] = "Optional", e
            }({});

        function ce(e) {
            for (var t in e)
                if (e[t] === ce) return t;
            throw Error("Could not find renamed property on target object.")
        }

        function he(e, t) {
            for (var n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n])
        }

        function fe(e) {
            return {
                token: e.token,
                providedIn: e.providedIn || null,
                factory: e.factory,
                value: void 0
            }
        }

        function de(e) {
            return {
                factory: e.factory,
                providers: e.providers || [],
                imports: e.imports || []
            }
        }

        function ve(e) {
            return pe(e, e[me]) || pe(e, e[ke])
        }

        function pe(e, t) {
            return t && t.token === e ? t : null
        }

        function ye(e) {
            return e && (e.hasOwnProperty(ge) || e.hasOwnProperty(be)) ? e[ge] : null
        }
        var me = ce({
                "\u0275prov": ce
            }),
            ge = ce({
                "\u0275inj": ce
            }),
            _e = ce({
                "\u0275provFallback": ce
            }),
            ke = ce({
                ngInjectableDef: ce
            }),
            be = ce({
                ngInjectorDef: ce
            });

        function Ce(e) {
            if ("string" == typeof e) return e;
            if (Array.isArray(e)) return "[" + e.map(Ce).join(", ") + "]";
            if (null == e) return "" + e;
            if (e.overriddenName) return "".concat(e.overriddenName);
            if (e.name) return "".concat(e.name);
            var t = e.toString();
            if (null == t) return "" + t;
            var n = t.indexOf("\n");
            return -1 === n ? t : t.substring(0, n)
        }

        function we(e, t) {
            return null == e || "" === e ? null === t ? "" : t : null == t || "" === t ? e : e + " " + t
        }
        var Se = ce({
            __forward_ref__: ce
        });

        function Ee(e) {
            return e.__forward_ref__ = Ee, e.toString = function() {
                return Ce(this())
            }, e
        }

        function Te(e) {
            return "function" == typeof(t = e) && t.hasOwnProperty(Se) && t.__forward_ref__ === Ee ? e() : e;
            var t
        }
        var xe, Ae = "undefined" != typeof globalThis && globalThis,
            Oe = "undefined" != typeof window && window,
            Ie = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
            Re = "undefined" != typeof global && global,
            Pe = Ae || Re || Oe || Ie,
            Ne = ce({
                "\u0275cmp": ce
            }),
            De = ce({
                "\u0275dir": ce
            }),
            je = ce({
                "\u0275pipe": ce
            }),
            Fe = ce({
                "\u0275mod": ce
            }),
            Me = ce({
                "\u0275loc": ce
            }),
            Le = ce({
                "\u0275fac": ce
            }),
            Ue = ce({
                __NG_ELEMENT_ID__: ce
            }),
            He = function() {
                function e(t, n) {
                    _classCallCheck(this, e), this._desc = t, this.ngMetadataName = "InjectionToken", this.\u0275prov = void 0, "number" == typeof n ? this.__NG_ELEMENT_ID__ = n : void 0 !== n && (this.\u0275prov = fe({
                        token: this,
                        providedIn: n.providedIn || "root",
                        factory: n.factory
                    }))
                }
                return _createClass(e, [{
                    key: "toString",
                    value: function() {
                        return "InjectionToken ".concat(this._desc)
                    }
                }]), e
            }(),
            Ve = new He("INJECTOR", -1),
            ze = {},
            Be = /\n/gm,
            qe = ce({
                provide: String,
                useValue: ce
            }),
            Qe = void 0;

        function We(e) {
            var t = Qe;
            return Qe = e, t
        }

        function Ke(e) {
            var t = xe;
            return xe = e, t
        }

        function Ze(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : le.Default;
            if (void 0 === Qe) throw new Error("inject() must be called from an injection context");
            return null === Qe ? Je(e, void 0, t) : Qe.get(e, t & le.Optional ? null : void 0, t)
        }

        function Ge(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : le.Default;
            return (xe || Ze)(Te(e), t)
        }

        function Je(e, t, n) {
            var r = ve(e);
            if (r && "root" == r.providedIn) return void 0 === r.value ? r.value = r.factory() : r.value;
            if (n & le.Optional) return null;
            if (void 0 !== t) return t;
            throw new Error("Injector: NOT_FOUND [".concat(Ce(e), "]"))
        }

        function $e(e) {
            for (var t = [], n = 0; n < e.length; n++) {
                var r = Te(e[n]);
                if (Array.isArray(r)) {
                    if (0 === r.length) throw new Error("Arguments array must have arguments.");
                    for (var i = void 0, a = le.Default, o = 0; o < r.length; o++) {
                        var s = r[o];
                        s instanceof oe || "Optional" === s.ngMetadataName || s === oe ? a |= le.Optional : s instanceof ue || "SkipSelf" === s.ngMetadataName || s === ue ? a |= le.SkipSelf : s instanceof se || "Self" === s.ngMetadataName || s === se ? a |= le.Self : i = s instanceof ae || s === ae ? s.token : s
                    }
                    t.push(Ge(i, a))
                } else t.push(Ge(r))
            }
            return t
        }
        var Xe = function() {
                function e() {
                    _classCallCheck(this, e)
                }
                return _createClass(e, [{
                    key: "get",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ze;
                        if (t === ze) {
                            var n = new Error("NullInjectorError: No provider for ".concat(Ce(e), "!"));
                            throw n.name = "NullInjectorError", n
                        }
                        return t
                    }
                }]), e
            }(),
            Ye = function e() {
                _classCallCheck(this, e)
            },
            et = function e() {
                _classCallCheck(this, e)
            };

        function tt(e, t) {
            e.forEach((function(e) {
                return Array.isArray(e) ? tt(e, t) : t(e)
            }))
        }

        function nt(e, t, n) {
            t >= e.length ? e.push(n) : e.splice(t, 0, n)
        }

        function rt(e, t) {
            return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0]
        }

        function it(e, t) {
            for (var n = [], r = 0; r < e; r++) n.push(t);
            return n
        }

        function at(e, t) {
            var n = ot(e, t);
            if (n >= 0) return e[1 | n]
        }

        function ot(e, t) {
            return function(e, t, n) {
                for (var r = 0, i = e.length >> 1; i !== r;) {
                    var a = r + (i - r >> 1),
                        o = e[a << 1];
                    if (t === o) return a << 1;
                    o > t ? i = a : r = a + 1
                }
                return ~(i << 1)
            }(e, t)
        }
        var st = function() {
                var e = {
                    OnPush: 0,
                    Default: 1
                };
                return e[e.OnPush] = "OnPush", e[e.Default] = "Default", e
            }(),
            ut = function() {
                var e = {
                    Emulated: 0,
                    Native: 1,
                    None: 2,
                    ShadowDom: 3
                };
                return e[e.Emulated] = "Emulated", e[e.Native] = "Native", e[e.None] = "None", e[e.ShadowDom] = "ShadowDom", e
            }(),
            lt = {},
            ct = [],
            ht = 0;

        function ft(e) {
            return re((function() {
                var t = e.type,
                    n = t.prototype,
                    r = {},
                    i = {
                        type: t,
                        providersResolver: null,
                        decls: e.decls,
                        vars: e.vars,
                        factory: null,
                        template: e.template || null,
                        consts: e.consts || null,
                        ngContentSelectors: e.ngContentSelectors,
                        hostBindings: e.hostBindings || null,
                        hostVars: e.hostVars || 0,
                        hostAttrs: e.hostAttrs || null,
                        contentQueries: e.contentQueries || null,
                        declaredInputs: r,
                        inputs: null,
                        outputs: null,
                        exportAs: e.exportAs || null,
                        onChanges: null,
                        onInit: n.ngOnInit || null,
                        doCheck: n.ngDoCheck || null,
                        afterContentInit: n.ngAfterContentInit || null,
                        afterContentChecked: n.ngAfterContentChecked || null,
                        afterViewInit: n.ngAfterViewInit || null,
                        afterViewChecked: n.ngAfterViewChecked || null,
                        onDestroy: n.ngOnDestroy || null,
                        onPush: e.changeDetection === st.OnPush,
                        directiveDefs: null,
                        pipeDefs: null,
                        selectors: e.selectors || ct,
                        viewQuery: e.viewQuery || null,
                        features: e.features || null,
                        data: e.data || {},
                        encapsulation: e.encapsulation || ut.Emulated,
                        id: "c",
                        styles: e.styles || ct,
                        _: null,
                        setInput: null,
                        schemas: e.schemas || null,
                        tView: null
                    },
                    a = e.directives,
                    o = e.features,
                    s = e.pipes;
                return i.id += ht++, i.inputs = mt(e.inputs, r), i.outputs = mt(e.outputs), o && o.forEach((function(e) {
                    return e(i)
                })), i.directiveDefs = a ? function() {
                    return ("function" == typeof a ? a() : a).map(dt)
                } : null, i.pipeDefs = s ? function() {
                    return ("function" == typeof s ? s() : s).map(vt)
                } : null, i
            }))
        }

        function dt(e) {
            return _t(e) || function(e) {
                return e[De] || null
            }(e)
        }

        function vt(e) {
            return function(e) {
                return e[je] || null
            }(e)
        }
        var pt = {};

        function yt(e) {
            var t = {
                type: e.type,
                bootstrap: e.bootstrap || ct,
                declarations: e.declarations || ct,
                imports: e.imports || ct,
                exports: e.exports || ct,
                transitiveCompileScopes: null,
                schemas: e.schemas || null,
                id: e.id || null
            };
            return null != e.id && re((function() {
                pt[e.id] = e.type
            })), t
        }

        function mt(e, t) {
            if (null == e) return lt;
            var n = {};
            for (var r in e)
                if (e.hasOwnProperty(r)) {
                    var i = e[r],
                        a = i;
                    Array.isArray(i) && (a = i[1], i = i[0]), n[i] = r, t && (t[i] = a)
                } return n
        }
        var gt = ft;

        function _t(e) {
            return e[Ne] || null
        }

        function kt(e, t) {
            return e.hasOwnProperty(Le) ? e[Le] : null
        }

        function bt(e, t) {
            var n = e[Fe] || null;
            if (!n && !0 === t) throw new Error("Type ".concat(Ce(e), " does not have '\u0275mod' property."));
            return n
        }

        function Ct(e) {
            return Array.isArray(e) && "object" == typeof e[1]
        }

        function wt(e) {
            return Array.isArray(e) && !0 === e[1]
        }

        function St(e) {
            return 0 != (8 & e.flags)
        }

        function Et(e) {
            return 2 == (2 & e.flags)
        }

        function Tt(e) {
            return 1 == (1 & e.flags)
        }

        function xt(e) {
            return null !== e.template
        }

        function At(e) {
            return 0 != (512 & e[2])
        }
        var Ot = void 0;

        function It(e) {
            return !!e.listen
        }
        var Rt = {
            createRenderer: function(e, t) {
                return void 0 !== Ot ? Ot : "undefined" != typeof document ? document : void 0
            }
        };

        function Pt(e) {
            for (; Array.isArray(e);) e = e[0];
            return e
        }

        function Nt(e, t) {
            return Pt(t[e + 19])
        }

        function Dt(e, t) {
            return Pt(t[e.index])
        }

        function jt(e, t) {
            return e.data[t + 19]
        }

        function Ft(e, t) {
            var n = t[e];
            return Ct(n) ? n : n[0]
        }

        function Mt(e) {
            var t = function(e) {
                return e.__ngContext__ || null
            }(e);
            return t ? Array.isArray(t) ? t : t.lView : null
        }

        function Lt(e) {
            return 4 == (4 & e[2])
        }

        function Ut(e) {
            return 128 == (128 & e[2])
        }

        function Ht(e, t) {
            return null === e || null == t ? null : e[t]
        }

        function Vt(e) {
            e[18] = 0
        }
        var zt = {
            lFrame: on(null),
            bindingsEnabled: !0,
            checkNoChangesMode: !1
        };

        function Bt() {
            return zt.bindingsEnabled
        }

        function qt() {
            return zt.lFrame.lView
        }

        function Qt() {
            return zt.lFrame.tView
        }

        function Wt() {
            return zt.lFrame.previousOrParentTNode
        }

        function Kt(e, t) {
            zt.lFrame.previousOrParentTNode = e, zt.lFrame.isParent = t
        }

        function Zt() {
            return zt.lFrame.isParent
        }

        function Gt() {
            zt.lFrame.isParent = !1
        }

        function Jt() {
            return zt.checkNoChangesMode
        }

        function $t(e) {
            zt.checkNoChangesMode = e
        }

        function Xt() {
            return zt.lFrame.bindingIndex++
        }

        function Yt(e, t) {
            var n = zt.lFrame;
            n.bindingIndex = n.bindingRootIndex = e, n.currentDirectiveIndex = t
        }

        function en() {
            return zt.lFrame.currentQueryIndex
        }

        function tn(e) {
            zt.lFrame.currentQueryIndex = e
        }

        function nn(e, t) {
            var n = an();
            zt.lFrame = n, n.previousOrParentTNode = t, n.lView = e
        }

        function rn(e, t) {
            var n = an(),
                r = e[1];
            zt.lFrame = n, n.previousOrParentTNode = t, n.lView = e, n.tView = r, n.contextLView = e, n.bindingIndex = r.bindingStartIndex
        }

        function an() {
            var e = zt.lFrame,
                t = null === e ? null : e.child;
            return null === t ? on(e) : t
        }

        function on(e) {
            var t = {
                previousOrParentTNode: null,
                isParent: !0,
                lView: null,
                tView: null,
                selectedIndex: 0,
                contextLView: null,
                elementDepthCount: 0,
                currentNamespace: null,
                currentSanitizer: null,
                currentDirectiveIndex: -1,
                bindingRootIndex: -1,
                bindingIndex: -1,
                currentQueryIndex: 0,
                parent: e,
                child: null
            };
            return null !== e && (e.child = t), t
        }

        function sn() {
            var e = zt.lFrame;
            return zt.lFrame = e.parent, e.previousOrParentTNode = null, e.lView = null, e
        }
        var un = sn;

        function ln() {
            var e = sn();
            e.isParent = !0, e.tView = null, e.selectedIndex = 0, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.currentSanitizer = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0
        }

        function cn() {
            return zt.lFrame.selectedIndex
        }

        function hn(e) {
            zt.lFrame.selectedIndex = e
        }

        function fn() {
            var e = zt.lFrame;
            return jt(e.tView, e.selectedIndex)
        }

        function dn(e, t) {
            for (var n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
                var i = e.data[n];
                i.afterContentInit && (e.contentHooks || (e.contentHooks = [])).push(-n, i.afterContentInit), i.afterContentChecked && ((e.contentHooks || (e.contentHooks = [])).push(n, i.afterContentChecked), (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, i.afterContentChecked)), i.afterViewInit && (e.viewHooks || (e.viewHooks = [])).push(-n, i.afterViewInit), i.afterViewChecked && ((e.viewHooks || (e.viewHooks = [])).push(n, i.afterViewChecked), (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, i.afterViewChecked)), null != i.onDestroy && (e.destroyHooks || (e.destroyHooks = [])).push(n, i.onDestroy)
            }
        }

        function vn(e, t, n) {
            mn(e, t, 3, n)
        }

        function pn(e, t, n, r) {
            (3 & e[2]) === n && mn(e, t, n, r)
        }

        function yn(e, t) {
            var n = e[2];
            (3 & n) === t && (n &= 1023, n += 1, e[2] = n)
        }

        function mn(e, t, n, r) {
            for (var i = null != r ? r : -1, a = 0, o = void 0 !== r ? 65535 & e[18] : 0; o < t.length; o++)
                if ("number" == typeof t[o + 1]) {
                    if (a = t[o], null != r && a >= r) break
                } else t[o] < 0 && (e[18] += 65536), (a < i || -1 == i) && (gn(e, n, t, o), e[18] = (4294901760 & e[18]) + o + 2), o++
        }

        function gn(e, t, n, r) {
            var i = n[r] < 0,
                a = n[r + 1],
                o = e[i ? -n[r] : n[r]];
            i ? e[2] >> 10 < e[18] >> 16 && (3 & e[2]) === t && (e[2] += 1024, a.call(o)) : a.call(o)
        }
        var _n = function e(t, n, r) {
            _classCallCheck(this, e), this.factory = t, this.resolving = !1, this.canSeeViewProviders = n, this.injectImpl = r
        };

        function kn(e, t, n) {
            for (var r = It(e), i = 0; i < n.length;) {
                var a = n[i];
                if ("number" == typeof a) {
                    if (0 !== a) break;
                    i++;
                    var o = n[i++],
                        s = n[i++],
                        u = n[i++];
                    r ? e.setAttribute(t, s, u, o) : t.setAttributeNS(o, s, u)
                } else {
                    var l = a,
                        c = n[++i];
                    Cn(l) ? r && e.setProperty(t, l, c) : r ? e.setAttribute(t, l, c) : t.setAttribute(l, c), i++
                }
            }
            return i
        }

        function bn(e) {
            return 3 === e || 4 === e || 6 === e
        }

        function Cn(e) {
            return 64 === e.charCodeAt(0)
        }

        function wn(e, t) {
            if (null === t || 0 === t.length);
            else if (null === e || 0 === e.length) e = t.slice();
            else
                for (var n = -1, r = 0; r < t.length; r++) {
                    var i = t[r];
                    "number" == typeof i ? n = i : 0 === n || Sn(e, n, i, null, -1 === n || 2 === n ? t[++r] : null)
                }
            return e
        }

        function Sn(e, t, n, r, i) {
            var a = 0,
                o = e.length;
            if (-1 === t) o = -1;
            else
                for (; a < e.length;) {
                    var s = e[a++];
                    if ("number" == typeof s) {
                        if (s === t) {
                            o = -1;
                            break
                        }
                        if (s > t) {
                            o = a - 1;
                            break
                        }
                    }
                }
            for (; a < e.length;) {
                var u = e[a];
                if ("number" == typeof u) break;
                if (u === n) {
                    if (null === r) return void(null !== i && (e[a + 1] = i));
                    if (r === e[a + 1]) return void(e[a + 2] = i)
                }
                a++, null !== r && a++, null !== i && a++
            } - 1 !== o && (e.splice(o, 0, t), a = o + 1), e.splice(a++, 0, n), null !== r && e.splice(a++, 0, r), null !== i && e.splice(a++, 0, i)
        }

        function En(e) {
            return -1 !== e
        }

        function Tn(e) {
            return 32767 & e
        }

        function xn(e) {
            return e >> 16
        }

        function An(e, t) {
            for (var n = xn(e), r = t; n > 0;) r = r[15], n--;
            return r
        }

        function On(e) {
            return "string" == typeof e ? e : null == e ? "" : "" + e
        }

        function In(e) {
            return "function" == typeof e ? e.name || e.toString() : "object" == typeof e && null != e && "function" == typeof e.type ? e.type.name || e.type.toString() : On(e)
        }
        var Rn = ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(Pe);

        function Pn(e) {
            return e instanceof Function ? e() : e
        }
        var Nn = !0;

        function Dn(e) {
            var t = Nn;
            return Nn = e, t
        }
        var jn = 0;

        function Fn(e, t) {
            var n = Ln(e, t);
            if (-1 !== n) return n;
            var r = t[1];
            r.firstCreatePass && (e.injectorIndex = t.length, Mn(r.data, e), Mn(t, null), Mn(r.blueprint, null));
            var i = Un(e, t),
                a = e.injectorIndex;
            if (En(i))
                for (var o = Tn(i), s = An(i, t), u = s[1].data, l = 0; l < 8; l++) t[a + l] = s[o + l] | u[o + l];
            return t[a + 8] = i, a
        }

        function Mn(e, t) {
            e.push(0, 0, 0, 0, 0, 0, 0, 0, t)
        }

        function Ln(e, t) {
            return -1 === e.injectorIndex || e.parent && e.parent.injectorIndex === e.injectorIndex || null == t[e.injectorIndex + 8] ? -1 : e.injectorIndex
        }

        function Un(e, t) {
            if (e.parent && -1 !== e.parent.injectorIndex) return e.parent.injectorIndex;
            for (var n = t[6], r = 1; n && -1 === n.injectorIndex;) n = (t = t[15]) ? t[6] : null, r++;
            return n ? n.injectorIndex | r << 16 : -1
        }

        function Hn(e, t, n) {
            ! function(e, t, n) {
                var r = "string" != typeof n ? n[Ue] : n.charCodeAt(0) || 0;
                null == r && (r = n[Ue] = jn++);
                var i = 255 & r,
                    a = 1 << i,
                    o = 64 & i,
                    s = 32 & i,
                    u = t.data;
                128 & i ? o ? s ? u[e + 7] |= a : u[e + 6] |= a : s ? u[e + 5] |= a : u[e + 4] |= a : o ? s ? u[e + 3] |= a : u[e + 2] |= a : s ? u[e + 1] |= a : u[e] |= a
            }(e, t, n)
        }

        function Vn(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : le.Default,
                i = arguments.length > 4 ? arguments[4] : void 0;
            if (null !== e) {
                var a = function(e) {
                    if ("string" == typeof e) return e.charCodeAt(0) || 0;
                    var t = e[Ue];
                    return "number" == typeof t && t > 0 ? 255 & t : t
                }(n);
                if ("function" == typeof a) {
                    nn(t, e);
                    try {
                        var o = a();
                        if (null != o || r & le.Optional) return o;
                        throw new Error("No provider for ".concat(In(n), "!"))
                    } finally {
                        un()
                    }
                } else if ("number" == typeof a) {
                    if (-1 === a) return new Zn(e, t);
                    var s = null,
                        u = Ln(e, t),
                        l = -1,
                        c = r & le.Host ? t[16][6] : null;
                    for ((-1 === u || r & le.SkipSelf) && (l = -1 === u ? Un(e, t) : t[u + 8], Kn(r, !1) ? (s = t[1], u = Tn(l), t = An(l, t)) : u = -1); - 1 !== u;) {
                        l = t[u + 8];
                        var h = t[1];
                        if (Wn(a, u, h.data)) {
                            var f = Bn(u, t, n, s, r, c);
                            if (f !== zn) return f
                        }
                        Kn(r, t[1].data[u + 8] === c) && Wn(a, u, t) ? (s = h, u = Tn(l), t = An(l, t)) : u = -1
                    }
                }
            }
            if (r & le.Optional && void 0 === i && (i = null), 0 == (r & (le.Self | le.Host))) {
                var d = t[9],
                    v = Ke(void 0);
                try {
                    return d ? d.get(n, i, r & le.Optional) : Je(n, i, r & le.Optional)
                } finally {
                    Ke(v)
                }
            }
            if (r & le.Optional) return i;
            throw new Error("NodeInjector: NOT_FOUND [".concat(In(n), "]"))
        }
        var zn = {};

        function Bn(e, t, n, r, i, a) {
            var o = t[1],
                s = o.data[e + 8],
                u = qn(s, o, n, null == r ? Et(s) && Nn : r != o && 3 === s.type, i & le.Host && a === s);
            return null !== u ? Qn(t, o, u, s) : zn
        }

        function qn(e, t, n, r, i) {
            for (var a = e.providerIndexes, o = t.data, s = 65535 & a, u = e.directiveStart, l = a >> 16, c = i ? s + l : e.directiveEnd, h = r ? s : s + l; h < c; h++) {
                var f = o[h];
                if (h < u && n === f || h >= u && f.type === n) return h
            }
            if (i) {
                var d = o[u];
                if (d && xt(d) && d.type === n) return u
            }
            return null
        }

        function Qn(e, t, n, r) {
            var i = e[n],
                a = t.data;
            if (i instanceof _n) {
                var o = i;
                if (o.resolving) throw new Error("Circular dep for ".concat(In(a[n])));
                var s, u = Dn(o.canSeeViewProviders);
                o.resolving = !0, o.injectImpl && (s = Ke(o.injectImpl)), nn(e, r);
                try {
                    i = e[n] = o.factory(void 0, a, e, r), t.firstCreatePass && n >= r.directiveStart && function(e, t, n) {
                        var r = t.onChanges,
                            i = t.onInit,
                            a = t.doCheck;
                        r && ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, r), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, r)), i && (n.preOrderHooks || (n.preOrderHooks = [])).push(-e, i), a && ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, a), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, a))
                    }(n, a[n], t)
                } finally {
                    o.injectImpl && Ke(s), Dn(u), o.resolving = !1, un()
                }
            }
            return i
        }

        function Wn(e, t, n) {
            var r = 64 & e,
                i = 32 & e;
            return !!((128 & e ? r ? i ? n[t + 7] : n[t + 6] : i ? n[t + 5] : n[t + 4] : r ? i ? n[t + 3] : n[t + 2] : i ? n[t + 1] : n[t]) & 1 << e)
        }

        function Kn(e, t) {
            return !(e & le.Self || e & le.Host && t)
        }
        var Zn = function() {
            function e(t, n) {
                _classCallCheck(this, e), this._tNode = t, this._lView = n
            }
            return _createClass(e, [{
                key: "get",
                value: function(e, t) {
                    return Vn(this._tNode, this._lView, e, void 0, t)
                }
            }]), e
        }();

        function Gn(e) {
            return e.ngDebugContext
        }

        function Jn(e) {
            return e.ngOriginalError
        }

        function $n(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            e.error.apply(e, n)
        }
        var Xn = function() {
            function e() {
                _classCallCheck(this, e), this._console = console
            }
            return _createClass(e, [{
                key: "handleError",
                value: function(e) {
                    var t = this._findOriginalError(e),
                        n = this._findContext(e),
                        r = function(e) {
                            return e.ngErrorLogger || $n
                        }(e);
                    r(this._console, "ERROR", e), t && r(this._console, "ORIGINAL ERROR", t), n && r(this._console, "ERROR CONTEXT", n)
                }
            }, {
                key: "_findContext",
                value: function(e) {
                    return e ? Gn(e) ? Gn(e) : this._findContext(Jn(e)) : null
                }
            }, {
                key: "_findOriginalError",
                value: function(e) {
                    for (var t = Jn(e); t && Jn(t);) t = Jn(t);
                    return t
                }
            }]), e
        }();

        function Yn() {
            return !0, !0
        }

        function er(e, t) {
            e.__ngContext__ = t
        }

        function tr(e) {
            throw new Error("Multiple components match node with tagname ".concat(e.tagName))
        }

        function nr() {
            throw new Error("Cannot mix multi providers and regular providers")
        }

        function rr(e, t, n) {
            for (var r = e.length;;) {
                var i = e.indexOf(t, n);
                if (-1 === i) return i;
                if (0 === i || e.charCodeAt(i - 1) <= 32) {
                    var a = t.length;
                    if (i + a === r || e.charCodeAt(i + a) <= 32) return i
                }
                n = i + 1
            }
        }

        function ir(e, t, n) {
            for (var r = 0; r < e.length;) {
                var i = e[r++];
                if (n && "class" === i) {
                    if (-1 !== rr((i = e[r]).toLowerCase(), t, 0)) return !0
                } else if (1 === i) {
                    for (; r < e.length && "string" == typeof(i = e[r++]);)
                        if (i.toLowerCase() === t) return !0;
                    return !1
                }
            }
            return !1
        }

        function ar(e, t, n) {
            return t === (0 !== e.type || n ? e.tagName : "ng-template")
        }

        function or(e, t, n) {
            for (var r = 4, i = e.attrs || [], a = function(e) {
                    for (var t = 0; t < e.length; t++)
                        if (bn(e[t])) return t;
                    return e.length
                }(i), o = !1, s = 0; s < t.length; s++) {
                var u = t[s];
                if ("number" != typeof u) {
                    if (!o)
                        if (4 & r) {
                            if (r = 2 | 1 & r, "" !== u && !ar(e, u, n) || "" === u && 1 === t.length) {
                                if (sr(r)) return !1;
                                o = !0
                            }
                        } else {
                            var l = 8 & r ? u : t[++s];
                            if (8 & r && null !== e.attrs) {
                                if (!ir(e.attrs, l, n)) {
                                    if (sr(r)) return !1;
                                    o = !0
                                }
                                continue
                            }
                            var c = ur(8 & r ? "class" : u, i, 0 == e.type && "ng-template" !== e.tagName, n);
                            if (-1 === c) {
                                if (sr(r)) return !1;
                                o = !0;
                                continue
                            }
                            if ("" !== l) {
                                var h;
                                h = c > a ? "" : i[c + 1].toLowerCase();
                                var f = 8 & r ? h : null;
                                if (f && -1 !== rr(f, l, 0) || 2 & r && l !== h) {
                                    if (sr(r)) return !1;
                                    o = !0
                                }
                            }
                        }
                } else {
                    if (!o && !sr(r) && !sr(u)) return !1;
                    if (o && sr(u)) continue;
                    o = !1, r = u | 1 & r
                }
            }
            return sr(r) || o
        }

        function sr(e) {
            return 0 == (1 & e)
        }

        function ur(e, t, n, r) {
            if (null === t) return -1;
            var i = 0;
            if (r || !n) {
                for (var a = !1; i < t.length;) {
                    var o = t[i];
                    if (o === e) return i;
                    if (3 === o || 6 === o) a = !0;
                    else {
                        if (1 === o || 2 === o) {
                            for (var s = t[++i];
                                "string" == typeof s;) s = t[++i];
                            continue
                        }
                        if (4 === o) break;
                        if (0 === o) {
                            i += 4;
                            continue
                        }
                    }
                    i += a ? 1 : 2
                }
                return -1
            }
            return function(e, t) {
                var n = e.indexOf(4);
                if (n > -1)
                    for (n++; n < e.length;) {
                        if (e[n] === t) return n;
                        n++
                    }
                return -1
            }(t, e)
        }

        function lr(e, t) {
            for (var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = 0; r < t.length; r++)
                if (or(e, t[r], n)) return !0;
            return !1
        }

        function cr(e, t) {
            e: for (var n = 0; n < t.length; n++) {
                var r = t[n];
                if (e.length === r.length) {
                    for (var i = 0; i < e.length; i++)
                        if (e[i] !== r[i]) continue e;
                    return !0
                }
            }
            return !1
        }

        function hr(e, t) {
            return e ? ":not(" + t.trim() + ")" : t
        }

        function fr(e) {
            for (var t = e[0], n = 1, r = 2, i = "", a = !1; n < e.length;) {
                var o = e[n];
                if ("string" == typeof o)
                    if (2 & r) {
                        var s = e[++n];
                        i += "[" + o + (s.length > 0 ? '="' + s + '"' : "") + "]"
                    } else 8 & r ? i += "." + o : 4 & r && (i += " " + o);
                else "" === i || sr(o) || (t += hr(a, i), i = ""), r = o, a = a || !sr(r);
                n++
            }
            return "" !== i && (t += hr(a, i)), t
        }
        var dr = {};

        function vr(e) {
            var t = e[3];
            return wt(t) ? t[3] : t
        }

        function pr(e) {
            yr(Qt(), qt(), cn() + e, Jt())
        }

        function yr(e, t, n, r) {
            if (!r)
                if (3 == (3 & t[2])) {
                    var i = e.preOrderCheckHooks;
                    null !== i && vn(t, i, n)
                } else {
                    var a = e.preOrderHooks;
                    null !== a && pn(t, a, 0, n)
                } hn(n)
        }

        function mr(e, t) {
            return e << 17 | t << 2
        }

        function gr(e) {
            return e >> 17 & 32767
        }

        function _r(e) {
            return 2 | e
        }

        function kr(e) {
            return (131068 & e) >> 2
        }

        function br(e, t) {
            return -131069 & e | t << 2
        }

        function Cr(e) {
            return 1 | e
        }

        function wr(e, t) {
            var n = e.contentQueries;
            if (null !== n)
                for (var r = 0; r < n.length; r += 2) {
                    var i = n[r],
                        a = n[r + 1];
                    if (-1 !== a) {
                        var o = e.data[a];
                        tn(i), o.contentQueries(2, t[a], a)
                    }
                }
        }

        function Sr(e, t, n) {
            return It(t) ? t.createElement(e, n) : null === n ? t.createElement(e) : t.createElementNS(n, e)
        }

        function Er(e, t, n, r, i, a, o, s, u, l) {
            var c = t.blueprint.slice();
            return c[0] = i, c[2] = 140 | r, Vt(c), c[3] = c[15] = e, c[8] = n, c[10] = o || e && e[10], c[11] = s || e && e[11], c[12] = u || e && e[12] || null, c[9] = l || e && e[9] || null, c[6] = a, c[16] = 2 == t.type ? e[16] : c, c
        }

        function Tr(e, t, n, r, i, a) {
            var o = n + 19,
                s = e.data[o] || function(e, t, n, r, i, a) {
                    var o = Wt(),
                        s = Zt(),
                        u = s ? o : o && o.parent,
                        l = e.data[n] = Dr(0, u && u !== t ? u : null, r, n, i, a);
                    return null === e.firstChild && (e.firstChild = l), o && (!s || null != o.child || null === l.parent && 2 !== o.type ? s || (o.next = l) : o.child = l), l
                }(e, t, o, r, i, a);
            return Kt(s, !0), s
        }

        function xr(e, t, n) {
            rn(t, t[6]);
            try {
                var r = e.viewQuery;
                null !== r && ni(1, r, n);
                var i = e.template;
                null !== i && Ir(e, t, i, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), e.staticContentQueries && wr(e, t), e.staticViewQueries && ni(2, e.viewQuery, n);
                var a = e.components;
                null !== a && function(e, t) {
                    for (var n = 0; n < t.length; n++) $r(e, t[n])
                }(t, a)
            } finally {
                t[2] &= -5, ln()
            }
        }

        function Ar(e, t, n, r) {
            var i = t[2];
            if (256 != (256 & i)) {
                rn(t, t[6]);
                var a = Jt();
                try {
                    Vt(t), zt.lFrame.bindingIndex = e.bindingStartIndex, null !== n && Ir(e, t, n, 2, r);
                    var o = 3 == (3 & i);
                    if (!a)
                        if (o) {
                            var s = e.preOrderCheckHooks;
                            null !== s && vn(t, s, null)
                        } else {
                            var u = e.preOrderHooks;
                            null !== u && pn(t, u, 0, null), yn(t, 0)
                        } if (function(e) {
                            for (var t = e[13]; null !== t;) {
                                var n = void 0;
                                if (wt(t) && (n = t[2]) >> 1 == -1) {
                                    for (var r = 9; r < t.length; r++) {
                                        var i = t[r],
                                            a = i[1];
                                        Ut(i) && Ar(a, i, a.template, i[8])
                                    }
                                    0 != (1 & n) && Gr(t, e[16])
                                }
                                t = t[4]
                            }
                        }(t), null !== e.contentQueries && wr(e, t), !a)
                        if (o) {
                            var l = e.contentCheckHooks;
                            null !== l && vn(t, l)
                        } else {
                            var c = e.contentHooks;
                            null !== c && pn(t, c, 1), yn(t, 1)
                        }!
                    function(e, t) {
                        try {
                            var n = e.expandoInstructions;
                            if (null !== n)
                                for (var r = e.expandoStartIndex, i = -1, a = 0; a < n.length; a++) {
                                    var o = n[a];
                                    "number" == typeof o ? o <= 0 ? (hn(0 - o), i = r += 9 + n[++a]) : r += o : (null !== o && (Yt(r, i), o(2, t[i])), i++)
                                }
                        } finally {
                            hn(-1)
                        }
                    }(e, t);
                    var h = e.components;
                    null !== h && function(e, t) {
                        for (var n = 0; n < t.length; n++) Jr(e, t[n])
                    }(t, h);
                    var f = e.viewQuery;
                    if (null !== f && ni(2, f, r), !a)
                        if (o) {
                            var d = e.viewCheckHooks;
                            null !== d && vn(t, d)
                        } else {
                            var v = e.viewHooks;
                            null !== v && pn(t, v, 2), yn(t, 2)
                        }! 0 === e.firstUpdatePass && (e.firstUpdatePass = !1), a || (t[2] &= -73)
                } finally {
                    ln()
                }
            }
        }

        function Or(e, t, n, r) {
            var i = t[10],
                a = !Jt(),
                o = Lt(t);
            try {
                a && !o && i.begin && i.begin(), o && xr(e, t, r), Ar(e, t, n, r)
            } finally {
                a && !o && i.end && i.end()
            }
        }

        function Ir(e, t, n, r, i) {
            var a = cn();
            try {
                hn(-1), 2 & r && t.length > 19 && yr(e, t, 0, Jt()), n(r, i)
            } finally {
                hn(a)
            }
        }

        function Rr(e, t, n) {
            Bt() && (function(e, t, n, r) {
                var i = n.directiveStart,
                    a = n.directiveEnd;
                e.firstCreatePass || Fn(n, t), er(r, t);
                for (var o = n.initialInputs, s = i; s < a; s++) {
                    var u = e.data[s],
                        l = xt(u);
                    l && Qr(t, n, u);
                    var c = Qn(t, e, s, n);
                    er(c, t), null !== o && Wr(0, s - i, c, u, 0, o), l && (Ft(n.index, t)[8] = c)
                }
            }(e, t, n, Dt(n, t)), 128 == (128 & n.flags) && function(e, t, n) {
                var r = n.directiveStart,
                    i = n.directiveEnd,
                    a = e.expandoInstructions,
                    o = e.firstCreatePass,
                    s = n.index - 19;
                try {
                    hn(s);
                    for (var u = r; u < i; u++) {
                        var l = e.data[u],
                            c = t[u];
                        null !== l.hostBindings || 0 !== l.hostVars || null !== l.hostAttrs ? Ur(l, c) : o && a.push(null)
                    }
                } finally {
                    hn(-1)
                }
            }(e, t, n))
        }

        function Pr(e) {
            return e.tView || (e.tView = Nr(1, -1, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts))
        }

        function Nr(e, t, n, r, i, a, o, s, u, l) {
            var c = 19 + r,
                h = c + i,
                f = function(e, t) {
                    for (var n = [], r = 0; r < t; r++) n.push(r < e ? null : dr);
                    return n
                }(c, h);
            return f[1] = {
                type: e,
                id: t,
                blueprint: f,
                template: n,
                queries: null,
                viewQuery: s,
                node: null,
                data: f.slice().fill(null, c),
                bindingStartIndex: c,
                expandoStartIndex: h,
                expandoInstructions: null,
                firstCreatePass: !0,
                firstUpdatePass: !0,
                staticViewQueries: !1,
                staticContentQueries: !1,
                preOrderHooks: null,
                preOrderCheckHooks: null,
                contentHooks: null,
                contentCheckHooks: null,
                viewHooks: null,
                viewCheckHooks: null,
                destroyHooks: null,
                cleanup: null,
                contentQueries: null,
                components: null,
                directiveRegistry: "function" == typeof a ? a() : a,
                pipeRegistry: "function" == typeof o ? o() : o,
                firstChild: null,
                schemas: u,
                consts: l
            }
        }

        function Dr(e, t, n, r, i, a) {
            return {
                type: n,
                index: r,
                injectorIndex: t ? t.injectorIndex : -1,
                directiveStart: -1,
                directiveEnd: -1,
                directiveStylingLast: -1,
                propertyBindings: null,
                flags: 0,
                providerIndexes: 0,
                tagName: i,
                attrs: a,
                mergedAttrs: null,
                localNames: null,
                initialInputs: void 0,
                inputs: null,
                outputs: null,
                tViews: null,
                next: null,
                projectionNext: null,
                child: null,
                parent: t,
                projection: null,
                styles: null,
                residualStyles: void 0,
                classes: null,
                residualClasses: void 0,
                classBindings: 0,
                styleBindings: 0
            }
        }

        function jr(e, t, n) {
            for (var r in e)
                if (e.hasOwnProperty(r)) {
                    var i = e[r];
                    (n = null === n ? {} : n).hasOwnProperty(r) ? n[r].push(t, i) : n[r] = [t, i]
                } return n
        }

        function Fr(e, t, n, r) {
            var i = !1;
            if (Bt()) {
                var a = function(e, t, n) {
                        var r = e.directiveRegistry,
                            i = null;
                        if (r)
                            for (var a = 0; a < r.length; a++) {
                                var o = r[a];
                                lr(n, o.selectors, !1) && (i || (i = []), Hn(Fn(n, t), e, o.type), xt(o) ? (2 & n.flags && tr(n), Vr(e, n), i.unshift(o)) : i.push(o))
                            }
                        return i
                    }(e, t, n),
                    o = null === r ? null : {
                        "": -1
                    };
                if (null !== a) {
                    var s = 0;
                    i = !0, Br(n, e.data.length, a.length);
                    for (var u = 0; u < a.length; u++) {
                        var l = a[u];
                        l.providersResolver && l.providersResolver(l)
                    }
                    Hr(e, n, a.length);
                    for (var c = !1, h = !1, f = 0; f < a.length; f++) {
                        var d = a[f];
                        n.mergedAttrs = wn(n.mergedAttrs, d.hostAttrs), qr(e, t, d), zr(e.data.length - 1, d, o), null !== d.contentQueries && (n.flags |= 8), null === d.hostBindings && null === d.hostAttrs && 0 === d.hostVars || (n.flags |= 128), !c && (d.onChanges || d.onInit || d.doCheck) && ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index - 19), c = !0), h || !d.onChanges && !d.doCheck || ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(n.index - 19), h = !0), Mr(e, d), s += d.hostVars
                    }! function(e, t) {
                        for (var n = t.directiveEnd, r = e.data, i = t.attrs, a = [], o = null, s = null, u = t.directiveStart; u < n; u++) {
                            var l = r[u],
                                c = l.inputs;
                            a.push(null !== i ? Kr(c, i) : null), o = jr(c, u, o), s = jr(l.outputs, u, s)
                        }
                        null !== o && (o.hasOwnProperty("class") && (t.flags |= 16), o.hasOwnProperty("style") && (t.flags |= 32)), t.initialInputs = a, t.inputs = o, t.outputs = s
                    }(e, n), Lr(e, t, s)
                }
                o && function(e, t, n) {
                    if (t)
                        for (var r = e.localNames = [], i = 0; i < t.length; i += 2) {
                            var a = n[t[i + 1]];
                            if (null == a) throw new Error("Export of name '".concat(t[i + 1], "' not found!"));
                            r.push(t[i], a)
                        }
                }(n, r, o)
            }
            return n.mergedAttrs = wn(n.mergedAttrs, n.attrs), i
        }

        function Mr(e, t) {
            var n = e.expandoInstructions;
            n.push(t.hostBindings), 0 !== t.hostVars && n.push(t.hostVars)
        }

        function Lr(e, t, n) {
            for (var r = 0; r < n; r++) t.push(dr), e.blueprint.push(dr), e.data.push(null)
        }

        function Ur(e, t) {
            null !== e.hostBindings && e.hostBindings(1, t)
        }

        function Hr(e, t, n) {
            var r = 19 - t.index,
                i = e.data.length - (65535 & t.providerIndexes);
            (e.expandoInstructions || (e.expandoInstructions = [])).push(r, i, n)
        }

        function Vr(e, t) {
            t.flags |= 2, (e.components || (e.components = [])).push(t.index)
        }

        function zr(e, t, n) {
            if (n) {
                if (t.exportAs)
                    for (var r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
                xt(t) && (n[""] = e)
            }
        }

        function Br(e, t, n) {
            e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t
        }

        function qr(e, t, n) {
            e.data.push(n);
            var r = n.factory || (n.factory = kt(n.type)),
                i = new _n(r, xt(n), null);
            e.blueprint.push(i), t.push(i)
        }

        function Qr(e, t, n) {
            var r = Dt(t, e),
                i = Pr(n),
                a = e[10],
                o = Xr(e, Er(e, i, null, n.onPush ? 64 : 16, r, t, a, a.createRenderer(r, n)));
            e[t.index] = o
        }

        function Wr(e, t, n, r, i, a) {
            var o = a[t];
            if (null !== o)
                for (var s = r.setInput, u = 0; u < o.length;) {
                    var l = o[u++],
                        c = o[u++],
                        h = o[u++];
                    null !== s ? r.setInput(n, h, l, c) : n[c] = h
                }
        }

        function Kr(e, t) {
            for (var n = null, r = 0; r < t.length;) {
                var i = t[r];
                if (0 !== i)
                    if (5 !== i) {
                        if ("number" == typeof i) break;
                        e.hasOwnProperty(i) && (null === n && (n = []), n.push(i, e[i], t[r + 1])), r += 2
                    } else r += 2;
                else r += 4
            }
            return n
        }

        function Zr(e, t, n, r) {
            return new Array(e, !0, -2, t, null, null, r, n, null)
        }

        function Gr(e, t) {
            for (var n = e[5], r = 0; r < n.length; r++) {
                var i = n[r],
                    a = i[3][3][16];
                if (a !== t && 0 == (16 & a[2])) {
                    var o = i[1];
                    Ar(o, i, o.template, i[8])
                }
            }
        }

        function Jr(e, t) {
            var n = Ft(t, e);
            if (Ut(n) && 80 & n[2]) {
                var r = n[1];
                Ar(r, n, r.template, n[8])
            }
        }

        function $r(e, t) {
            var n = Ft(t, e),
                r = n[1];
            ! function(e, t) {
                for (var n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n])
            }(r, n), xr(r, n, n[8])
        }

        function Xr(e, t) {
            return e[13] ? e[14][4] = t : e[13] = t, e[14] = t, t
        }

        function Yr(e) {
            for (; e;) {
                e[2] |= 64;
                var t = vr(e);
                if (At(e) && !t) return e;
                e = t
            }
            return null
        }

        function ei(e, t, n) {
            var r = t[10];
            r.begin && r.begin();
            try {
                Ar(e, t, e.template, n)
            } catch (i) {
                throw oi(t, i), i
            } finally {
                r.end && r.end()
            }
        }

        function ti(e) {
            ! function(e) {
                for (var t = 0; t < e.components.length; t++) {
                    var n = e.components[t],
                        r = Mt(n),
                        i = r[1];
                    Or(i, r, i.template, n)
                }
            }(e[8])
        }

        function ni(e, t, n) {
            tn(0), t(e, n)
        }
        var ri = Promise.resolve(null);

        function ii(e) {
            return e[7] || (e[7] = [])
        }

        function ai(e) {
            return e.cleanup || (e.cleanup = [])
        }

        function oi(e, t) {
            var n = e[9],
                r = n ? n.get(Xn, null) : null;
            r && r.handleError(t)
        }

        function si(e, t, n, r, i) {
            for (var a = 0; a < n.length;) {
                var o = n[a++],
                    s = n[a++],
                    u = t[o],
                    l = e.data[o];
                null !== l.setInput ? l.setInput(u, i, r, s) : u[s] = i
            }
        }

        function ui(e, t) {
            var n = t[3];
            return -1 === e.index ? wt(n) ? n : null : n
        }

        function li(e, t) {
            var n = ui(e, t);
            return n ? bi(t[11], n[7]) : null
        }

        function ci(e, t, n, r, i) {
            if (null != r) {
                var a, o = !1;
                wt(r) ? a = r : Ct(r) && (o = !0, r = r[0]);
                var s = Pt(r);
                0 === e && null !== n ? null == i ? _i(t, n, s) : gi(t, n, s, i || null) : 1 === e && null !== n ? gi(t, n, s, i || null) : 2 === e ? function(e, t, n) {
                    var r = bi(e, t);
                    r && function(e, t, n, r) {
                        It(e) ? e.removeChild(t, n, r) : t.removeChild(n)
                    }(e, r, t, n)
                }(t, s, o) : 3 === e && t.destroyNode(s), null != a && function(e, t, n, r, i) {
                    var a = n[7];
                    a !== Pt(n) && ci(t, e, r, a, i);
                    for (var o = 9; o < n.length; o++) {
                        var s = n[o];
                        Ti(s[1], s, e, t, r, a)
                    }
                }(t, e, a, n, i)
            }
        }

        function hi(e, t, n, r) {
            var i = li(e.node, t);
            i && Ti(e, t, t[11], n ? 1 : 2, i, r)
        }

        function fi(e, t) {
            var n = e[5],
                r = n.indexOf(t);
            n.splice(r, 1)
        }

        function di(e, t) {
            if (!(e.length <= 9)) {
                var n = 9 + t,
                    r = e[n];
                if (r) {
                    var i = r[17];
                    null !== i && i !== e && fi(i, r), t > 0 && (e[n - 1][4] = r[4]);
                    var a = rt(e, 9 + t);
                    hi(r[1], r, !1, null);
                    var o = a[5];
                    null !== o && o.detachView(a[1]), r[3] = null, r[4] = null, r[2] &= -129
                }
                return r
            }
        }

        function vi(e, t) {
            if (!(256 & t[2])) {
                var n = t[11];
                It(n) && n.destroyNode && Ti(e, t, n, 3, null, null),
                    function(e) {
                        var t = e[13];
                        if (!t) return yi(e[1], e);
                        for (; t;) {
                            var n = null;
                            if (Ct(t)) n = t[13];
                            else {
                                var r = t[9];
                                r && (n = r)
                            }
                            if (!n) {
                                for (; t && !t[4] && t !== e;) Ct(t) && yi(t[1], t), t = pi(t, e);
                                null === t && (t = e), Ct(t) && yi(t[1], t), n = t && t[4]
                            }
                            t = n
                        }
                    }(t)
            }
        }

        function pi(e, t) {
            var n;
            return Ct(e) && (n = e[6]) && 2 === n.type ? ui(n, e) : e[3] === t ? null : e[3]
        }

        function yi(e, t) {
            if (!(256 & t[2])) {
                t[2] &= -129, t[2] |= 256,
                    function(e, t) {
                        var n;
                        if (null != e && null != (n = e.destroyHooks))
                            for (var r = 0; r < n.length; r += 2) {
                                var i = t[n[r]];
                                i instanceof _n || n[r + 1].call(i)
                            }
                    }(e, t),
                    function(e, t) {
                        var n = e.cleanup;
                        if (null !== n) {
                            for (var r = t[7], i = 0; i < n.length - 1; i += 2)
                                if ("string" == typeof n[i]) {
                                    var a = n[i + 1],
                                        o = "function" == typeof a ? a(t) : Pt(t[a]),
                                        s = r[n[i + 2]],
                                        u = n[i + 3];
                                    "boolean" == typeof u ? o.removeEventListener(n[i], s, u) : u >= 0 ? r[u]() : r[-u].unsubscribe(), i += 2
                                } else n[i].call(r[n[i + 1]]);
                            t[7] = null
                        }
                    }(e, t);
                var n = t[6];
                n && 3 === n.type && It(t[11]) && t[11].destroy();
                var r = t[17];
                if (null !== r && wt(t[3])) {
                    r !== t[3] && fi(r, t);
                    var i = t[5];
                    null !== i && i.detachView(e)
                }
            }
        }

        function mi(e, t, n) {
            for (var r = t.parent; null != r && (4 === r.type || 5 === r.type);) r = (t = r).parent;
            if (null == r) {
                var i = n[6];
                return 2 === i.type ? li(i, n) : n[0]
            }
            if (t && 5 === t.type && 4 & t.flags) return Dt(t, n).parentNode;
            if (2 & r.flags) {
                var a = e.data,
                    o = a[a[r.index].directiveStart].encapsulation;
                if (o !== ut.ShadowDom && o !== ut.Native) return null
            }
            return Dt(r, n)
        }

        function gi(e, t, n, r) {
            It(e) ? e.insertBefore(t, n, r) : t.insertBefore(n, r, !0)
        }

        function _i(e, t, n) {
            It(e) ? e.appendChild(t, n) : t.appendChild(n)
        }

        function ki(e, t, n, r) {
            null !== r ? gi(e, t, n, r) : _i(e, t, n)
        }

        function bi(e, t) {
            return It(e) ? e.parentNode(t) : t.parentNode
        }

        function Ci(e, t) {
            if (2 === e.type) {
                var n = ui(e, t);
                return null === n ? null : Si(n.indexOf(t, 9) - 9, n)
            }
            return 4 === e.type || 5 === e.type ? Dt(e, t) : null
        }

        function wi(e, t, n, r) {
            var i = mi(e, r, t);
            if (null != i) {
                var a = t[11],
                    o = Ci(r.parent || t[6], t);
                if (Array.isArray(n))
                    for (var s = 0; s < n.length; s++) ki(a, i, n[s], o);
                else ki(a, i, n, o)
            }
        }

        function Si(e, t) {
            var n = 9 + e + 1;
            if (n < t.length) {
                var r = t[n],
                    i = r[1].firstChild;
                if (null !== i) return function e(t, n) {
                    if (null !== n) {
                        var r = n.type;
                        if (3 === r) return Dt(n, t);
                        if (0 === r) return Si(-1, t[n.index]);
                        if (4 === r || 5 === r) {
                            var i = n.child;
                            if (null !== i) return e(t, i);
                            var a = t[n.index];
                            return wt(a) ? Si(-1, a) : Pt(a)
                        }
                        var o = t[16],
                            s = o[6],
                            u = vr(o),
                            l = s.projection[n.projection];
                        return null != l ? e(u, l) : e(t, n.next)
                    }
                    return null
                }(r, i)
            }
            return t[7]
        }

        function Ei(e, t, n, r, i, a, o) {
            for (; null != n;) {
                var s = r[n.index],
                    u = n.type;
                o && 0 === t && (s && er(Pt(s), r), n.flags |= 4), 64 != (64 & n.flags) && (4 === u || 5 === u ? (Ei(e, t, n.child, r, i, a, !1), ci(t, e, i, s, a)) : 1 === u ? xi(e, t, r, n, i, a) : ci(t, e, i, s, a)), n = o ? n.projectionNext : n.next
            }
        }

        function Ti(e, t, n, r, i, a) {
            Ei(n, r, e.node.child, t, i, a, !1)
        }

        function xi(e, t, n, r, i, a) {
            var o = n[16],
                s = o[6].projection[r.projection];
            if (Array.isArray(s))
                for (var u = 0; u < s.length; u++) ci(t, e, i, s[u], a);
            else Ei(e, t, s, o[3], i, a, !0)
        }

        function Ai(e, t, n) {
            It(e) ? e.setAttribute(t, "style", n) : t.style.cssText = n
        }

        function Oi(e, t, n) {
            It(e) ? "" === n ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n) : t.className = n
        }
        var Ii, Ri, Pi, Ni = function() {
                function e(t, n) {
                    _classCallCheck(this, e), this._lView = t, this._cdRefInjectingView = n, this._appRef = null, this._viewContainerRef = null, this._tViewNode = null
                }
                return _createClass(e, [{
                    key: "rootNodes",
                    get: function() {
                        var e = this._lView;
                        return null == e[0] ? function e(t, n, r, i) {
                            for (var a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]; null !== r;) {
                                var o = n[r.index];
                                if (null !== o && i.push(Pt(o)), wt(o))
                                    for (var s = 9; s < o.length; s++) {
                                        var u = o[s],
                                            l = u[1].firstChild;
                                        null !== l && e(u[1], u, l, i)
                                    }
                                var c = r.type;
                                if (4 === c || 5 === c) e(t, n, r.child, i);
                                else if (1 === c) {
                                    var h = n[16],
                                        f = h[6],
                                        d = vr(h),
                                        v = f.projection[r.projection];
                                    null !== v && null !== d && e(d[1], d, v, i, !0)
                                }
                                r = a ? r.projectionNext : r.next
                            }
                            return i
                        }(e[1], e, e[6].child, []) : []
                    }
                }, {
                    key: "context",
                    get: function() {
                        return this._lView[8]
                    }
                }, {
                    key: "destroyed",
                    get: function() {
                        return 256 == (256 & this._lView[2])
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        if (this._appRef) this._appRef.detachView(this);
                        else if (this._viewContainerRef) {
                            var e = this._viewContainerRef.indexOf(this);
                            e > -1 && this._viewContainerRef.detach(e), this._viewContainerRef = null
                        }
                        vi(this._lView[1], this._lView)
                    }
                }, {
                    key: "onDestroy",
                    value: function(e) {
                        var t, n, r;
                        t = this._lView[1], r = e, ii(n = this._lView).push(r), t.firstCreatePass && ai(t).push(n[7].length - 1, null)
                    }
                }, {
                    key: "markForCheck",
                    value: function() {
                        Yr(this._cdRefInjectingView || this._lView)
                    }
                }, {
                    key: "detach",
                    value: function() {
                        this._lView[2] &= -129
                    }
                }, {
                    key: "reattach",
                    value: function() {
                        this._lView[2] |= 128
                    }
                }, {
                    key: "detectChanges",
                    value: function() {
                        ei(this._lView[1], this._lView, this.context)
                    }
                }, {
                    key: "checkNoChanges",
                    value: function() {
                        ! function(e, t, n) {
                            $t(!0);
                            try {
                                ei(e, t, n)
                            } finally {
                                $t(!1)
                            }
                        }(this._lView[1], this._lView, this.context)
                    }
                }, {
                    key: "attachToViewContainerRef",
                    value: function(e) {
                        if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
                        this._viewContainerRef = e
                    }
                }, {
                    key: "detachFromAppRef",
                    value: function() {
                        var e;
                        this._appRef = null, Ti(this._lView[1], e = this._lView, e[11], 2, null, null)
                    }
                }, {
                    key: "attachToAppRef",
                    value: function(e) {
                        if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
                        this._appRef = e
                    }
                }]), e
            }(),
            Di = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e) {
                    var r;
                    return _classCallCheck(this, n), (r = t.call(this, e))._view = e, r
                }
                return _createClass(n, [{
                    key: "detectChanges",
                    value: function() {
                        ti(this._view)
                    }
                }, {
                    key: "checkNoChanges",
                    value: function() {
                        ! function(e) {
                            $t(!0);
                            try {
                                ti(e)
                            } finally {
                                $t(!1)
                            }
                        }(this._view)
                    }
                }, {
                    key: "context",
                    get: function() {
                        return null
                    }
                }]), n
            }(Ni);

        function ji(e, t, n) {
            return Ii || (Ii = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n() {
                    return _classCallCheck(this, n), t.apply(this, arguments)
                }
                return n
            }(e)), new Ii(Dt(t, n))
        }

        function Fi(e, t, n, r) {
            return Ri || (Ri = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r, i) {
                    var a;
                    return _classCallCheck(this, n), (a = t.call(this))._declarationView = e, a._declarationTContainer = r, a.elementRef = i, a
                }
                return _createClass(n, [{
                    key: "createEmbeddedView",
                    value: function(e) {
                        var t = this._declarationTContainer.tViews,
                            n = Er(this._declarationView, t, e, 16, null, t.node);
                        n[17] = this._declarationView[this._declarationTContainer.index];
                        var r = this._declarationView[5];
                        null !== r && (n[5] = r.createEmbeddedView(t)), xr(t, n, e);
                        var i = new Ni(n);
                        return i._tViewNode = n[6], i
                    }
                }]), n
            }(e)), 0 === n.type ? new Ri(r, n, ji(t, n, r)) : null
        }

        function Mi(e, t, n, r) {
            var i;
            Pi || (Pi = function(e) {
                _inherits(r, e);
                var n = _createSuper(r);

                function r(e, t, i) {
                    var a;
                    return _classCallCheck(this, r), (a = n.call(this))._lContainer = e, a._hostTNode = t, a._hostView = i, a
                }
                return _createClass(r, [{
                    key: "element",
                    get: function() {
                        return ji(t, this._hostTNode, this._hostView)
                    }
                }, {
                    key: "injector",
                    get: function() {
                        return new Zn(this._hostTNode, this._hostView)
                    }
                }, {
                    key: "parentInjector",
                    get: function() {
                        var e = Un(this._hostTNode, this._hostView),
                            t = An(e, this._hostView),
                            n = function(e, t, n) {
                                if (n.parent && -1 !== n.parent.injectorIndex) {
                                    for (var r = n.parent.injectorIndex, i = n.parent; null != i.parent && r == i.parent.injectorIndex;) i = i.parent;
                                    return i
                                }
                                for (var a = xn(e), o = t, s = t[6]; a > 1;) s = (o = o[15])[6], a--;
                                return s
                            }(e, this._hostView, this._hostTNode);
                        return En(e) && null != n ? new Zn(n, t) : new Zn(null, this._hostView)
                    }
                }, {
                    key: "clear",
                    value: function() {
                        for (; this.length > 0;) this.remove(this.length - 1)
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        return null !== this._lContainer[8] && this._lContainer[8][e] || null
                    }
                }, {
                    key: "length",
                    get: function() {
                        return this._lContainer.length - 9
                    }
                }, {
                    key: "createEmbeddedView",
                    value: function(e, t, n) {
                        var r = e.createEmbeddedView(t || {});
                        return this.insert(r, n), r
                    }
                }, {
                    key: "createComponent",
                    value: function(e, t, n, r, i) {
                        var a = n || this.parentInjector;
                        if (!i && null == e.ngModule && a) {
                            var o = a.get(Ye, null);
                            o && (i = o)
                        }
                        var s = e.create(a, r, void 0, i);
                        return this.insert(s.hostView, t), s
                    }
                }, {
                    key: "insert",
                    value: function(e, t) {
                        var n = e._lView,
                            r = n[1];
                        if (e.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!");
                        if (this.allocateContainerIfNeeded(), wt(n[3])) {
                            var i = this.indexOf(e);
                            if (-1 !== i) this.detach(i);
                            else {
                                var a = n[3],
                                    o = new Pi(a, a[6], a[3]);
                                o.detach(o.indexOf(e))
                            }
                        }
                        var s = this._adjustIndex(t);
                        return function(e, t, n, r) {
                            var i = 9 + r,
                                a = n.length;
                            r > 0 && (n[i - 1][4] = t), r < a - 9 ? (t[4] = n[i], nt(n, 9 + r, t)) : (n.push(t), t[4] = null), t[3] = n;
                            var o = t[17];
                            null !== o && n !== o && function(e, t) {
                                var n = e[5],
                                    r = t[3][3][16];
                                16 != (16 & r[2]) && t[16] !== r && (e[2] |= 1), null === n ? e[5] = [t] : n.push(t)
                            }(o, t);
                            var s = t[5];
                            null !== s && s.insertView(e), t[2] |= 128
                        }(r, n, this._lContainer, s), hi(r, n, !0, Si(s, this._lContainer)), e.attachToViewContainerRef(this), nt(this._lContainer[8], s, e), e
                    }
                }, {
                    key: "move",
                    value: function(e, t) {
                        if (e.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!");
                        return this.insert(e, t)
                    }
                }, {
                    key: "indexOf",
                    value: function(e) {
                        var t = this._lContainer[8];
                        return null !== t ? t.indexOf(e) : -1
                    }
                }, {
                    key: "remove",
                    value: function(e) {
                        this.allocateContainerIfNeeded();
                        var t = this._adjustIndex(e, -1);
                        (function(e, t) {
                            var n = di(e, t);
                            n && vi(n[1], n)
                        })(this._lContainer, t), rt(this._lContainer[8], t)
                    }
                }, {
                    key: "detach",
                    value: function(e) {
                        this.allocateContainerIfNeeded();
                        var t = this._adjustIndex(e, -1),
                            n = di(this._lContainer, t);
                        return n && null != rt(this._lContainer[8], t) ? new Ni(n) : null
                    }
                }, {
                    key: "_adjustIndex",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        return null == e ? this.length + t : e
                    }
                }, {
                    key: "allocateContainerIfNeeded",
                    value: function() {
                        null === this._lContainer[8] && (this._lContainer[8] = [])
                    }
                }]), r
            }(e));
            var a = r[n.index];
            if (wt(a))(function(e, t) {
                e[2] = -2
            })(i = a);
            else {
                var o;
                if (4 === n.type) o = Pt(a);
                else if (o = r[11].createComment(""), At(r)) {
                    var s = r[11],
                        u = Dt(n, r);
                    gi(s, bi(s, u), o, function(e, t) {
                        return It(e) ? e.nextSibling(t) : t.nextSibling
                    }(s, u))
                } else wi(r[1], r, o, n);
                r[n.index] = i = Zr(a, r, o, n), Xr(r, i)
            }
            return new Pi(i, n, r)
        }

        function Li() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return function(e, t, n) {
                if (!n && Et(e)) {
                    var r = Ft(e.index, t);
                    return new Ni(r, r)
                }
                return 3 === e.type || 0 === e.type || 4 === e.type || 5 === e.type ? new Ni(t[16], t) : null
            }(Wt(), qt(), e)
        }
        var Ui = function() {
                var e = function e() {
                    _classCallCheck(this, e)
                };
                return e.__NG_ELEMENT_ID__ = function() {
                    return Hi()
                }, e
            }(),
            Hi = Li,
            Vi = new He("Set Injector scope."),
            zi = {},
            Bi = {},
            qi = [],
            Qi = void 0;

        function Wi() {
            return void 0 === Qi && (Qi = new Xe), Qi
        }

        function Ki(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                r = arguments.length > 3 ? arguments[3] : void 0;
            return new Zi(e, n, t || Wi(), r)
        }
        var Zi = function() {
            function e(t, n, r) {
                var i = this,
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                _classCallCheck(this, e), this.parent = r, this.records = new Map, this.injectorDefTypes = new Set, this.onDestroy = new Set, this._destroyed = !1;
                var o = [];
                n && tt(n, (function(e) {
                    return i.processProvider(e, t, n)
                })), tt([t], (function(e) {
                    return i.processInjectorType(e, [], o)
                })), this.records.set(Ve, $i(void 0, this));
                var s = this.records.get(Vi);
                this.scope = null != s ? s.value : null, this.source = a || ("object" == typeof t ? null : Ce(t))
            }
            return _createClass(e, [{
                key: "destroyed",
                get: function() {
                    return this._destroyed
                }
            }, {
                key: "destroy",
                value: function() {
                    this.assertNotDestroyed(), this._destroyed = !0;
                    try {
                        this.onDestroy.forEach((function(e) {
                            return e.ngOnDestroy()
                        }))
                    } finally {
                        this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear()
                    }
                }
            }, {
                key: "get",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ze,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : le.Default;
                    this.assertNotDestroyed();
                    var r, i = We(this);
                    try {
                        if (!(n & le.SkipSelf)) {
                            var a = this.records.get(e);
                            if (void 0 === a) {
                                var o = ("function" == typeof(r = e) || "object" == typeof r && r instanceof He) && ve(e);
                                a = o && this.injectableDefInScope(o) ? $i(Gi(e), zi) : null, this.records.set(e, a)
                            }
                            if (null != a) return this.hydrate(e, a)
                        }
                        return (n & le.Self ? Wi() : this.parent).get(e, t = n & le.Optional && t === ze ? null : t)
                    } catch (s) {
                        if ("NullInjectorError" === s.name) {
                            if ((s.ngTempTokenPath = s.ngTempTokenPath || []).unshift(Ce(e)), i) throw s;
                            return function(e, t, n, r) {
                                var i = e.ngTempTokenPath;
                                throw t.__source && i.unshift(t.__source), e.message = function(e, t, n) {
                                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                                    e = e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1) ? e.substr(2) : e;
                                    var i = Ce(t);
                                    if (Array.isArray(t)) i = t.map(Ce).join(" -> ");
                                    else if ("object" == typeof t) {
                                        var a = [];
                                        for (var o in t)
                                            if (t.hasOwnProperty(o)) {
                                                var s = t[o];
                                                a.push(o + ":" + ("string" == typeof s ? JSON.stringify(s) : Ce(s)))
                                            } i = "{".concat(a.join(", "), "}")
                                    }
                                    return "".concat(n).concat(r ? "(" + r + ")" : "", "[").concat(i, "]: ").concat(e.replace(Be, "\n  "))
                                }("\n" + e.message, i, "R3InjectorError", r), e.ngTokenPath = i, e.ngTempTokenPath = null, e
                            }(s, e, 0, this.source)
                        }
                        throw s
                    } finally {
                        We(i)
                    }
                }
            }, {
                key: "_resolveInjectorDefTypes",
                value: function() {
                    var e = this;
                    this.injectorDefTypes.forEach((function(t) {
                        return e.get(t)
                    }))
                }
            }, {
                key: "toString",
                value: function() {
                    var e = [];
                    return this.records.forEach((function(t, n) {
                        return e.push(Ce(n))
                    })), "R3Injector[".concat(e.join(", "), "]")
                }
            }, {
                key: "assertNotDestroyed",
                value: function() {
                    if (this._destroyed) throw new Error("Injector has already been destroyed.")
                }
            }, {
                key: "processInjectorType",
                value: function(e, t, n) {
                    var r = this;
                    if (!(e = Te(e))) return !1;
                    var i = ye(e),
                        a = null == i && e.ngModule || void 0,
                        o = void 0 === a ? e : a,
                        s = -1 !== n.indexOf(o);
                    if (void 0 !== a && (i = ye(a)), null == i) return !1;
                    if (null != i.imports && !s) {
                        var u;
                        n.push(o);
                        try {
                            tt(i.imports, (function(e) {
                                r.processInjectorType(e, t, n) && (void 0 === u && (u = []), u.push(e))
                            }))
                        } finally {}
                        if (void 0 !== u)
                            for (var l = function(e) {
                                    var t = u[e],
                                        n = t.ngModule,
                                        i = t.providers;
                                    tt(i, (function(e) {
                                        return r.processProvider(e, n, i || qi)
                                    }))
                                }, c = 0; c < u.length; c++) l(c)
                    }
                    this.injectorDefTypes.add(o), this.records.set(o, $i(i.factory, zi));
                    var h = i.providers;
                    if (null != h && !s) {
                        var f = e;
                        tt(h, (function(e) {
                            return r.processProvider(e, f, h)
                        }))
                    }
                    return void 0 !== a && void 0 !== e.providers
                }
            }, {
                key: "processProvider",
                value: function(e, t, n) {
                    var r = Yi(e = Te(e)) ? e : Te(e && e.provide),
                        i = function(e, t, n) {
                            return Xi(e) ? $i(void 0, e.useValue) : $i(Ji(e, t, n), zi)
                        }(e, t, n);
                    if (Yi(e) || !0 !== e.multi) {
                        var a = this.records.get(r);
                        a && void 0 !== a.multi && nr()
                    } else {
                        var o = this.records.get(r);
                        o ? void 0 === o.multi && nr() : ((o = $i(void 0, zi, !0)).factory = function() {
                            return $e(o.multi)
                        }, this.records.set(r, o)), r = e, o.multi.push(e)
                    }
                    this.records.set(r, i)
                }
            }, {
                key: "hydrate",
                value: function(e, t) {
                    var n;
                    return t.value === Bi ? function(e) {
                        throw new Error("Cannot instantiate cyclic dependency! ".concat(e))
                    }(Ce(e)) : t.value === zi && (t.value = Bi, t.value = t.factory()), "object" == typeof t.value && t.value && null !== (n = t.value) && "object" == typeof n && "function" == typeof n.ngOnDestroy && this.onDestroy.add(t.value), t.value
                }
            }, {
                key: "injectableDefInScope",
                value: function(e) {
                    return !!e.providedIn && ("string" == typeof e.providedIn ? "any" === e.providedIn || e.providedIn === this.scope : this.injectorDefTypes.has(e.providedIn))
                }
            }]), e
        }();

        function Gi(e) {
            var t = ve(e),
                n = null !== t ? t.factory : kt(e);
            if (null !== n) return n;
            var r = ye(e);
            if (null !== r) return r.factory;
            if (e instanceof He) throw new Error("Token ".concat(Ce(e), " is missing a \u0275prov definition."));
            if (e instanceof Function) return function(e) {
                var t = e.length;
                if (t > 0) {
                    var n = it(t, "?");
                    throw new Error("Can't resolve all parameters for ".concat(Ce(e), ": (").concat(n.join(", "), ")."))
                }
                var r = function(e) {
                    var t = e && (e[me] || e[ke] || e[_e] && e[_e]());
                    if (t) {
                        var n = function(e) {
                            if (e.hasOwnProperty("name")) return e.name;
                            var t = ("" + e).match(/^function\s*([^\s(]+)/);
                            return null === t ? "" : t[1]
                        }(e);
                        return console.warn('DEPRECATED: DI is instantiating a token "'.concat(n, '" that inherits its @Injectable decorator but does not provide one itself.\n') + 'This will become an error in v10. Please add @Injectable() to the "'.concat(n, '" class.')), t
                    }
                    return null
                }(e);
                return null !== r ? function() {
                    return r.factory(e)
                } : function() {
                    return new e
                }
            }(e);
            throw new Error("unreachable")
        }

        function Ji(e, t, n) {
            var r, i = void 0;
            if (Yi(e)) {
                var a = Te(e);
                return kt(a) || Gi(a)
            }
            if (Xi(e)) i = function() {
                return Te(e.useValue)
            };
            else if ((r = e) && r.useFactory) i = function() {
                return e.useFactory.apply(e, _toConsumableArray($e(e.deps || [])))
            };
            else if (function(e) {
                    return !(!e || !e.useExisting)
                }(e)) i = function() {
                return Ge(Te(e.useExisting))
            };
            else {
                var o = Te(e && (e.useClass || e.provide));
                if (o || function(e, t, n) {
                        var r = "";
                        throw e && t && (r = " - only instances of Provider and Type are allowed, got: [".concat(t.map((function(e) {
                            return e == n ? "?" + n + "?" : "..."
                        })).join(", "), "]")), new Error("Invalid provider for the NgModule '".concat(Ce(e), "'") + r)
                    }(t, n, e), ! function(e) {
                        return !!e.deps
                    }(e)) return kt(o) || Gi(o);
                i = function() {
                    return _construct(o, _toConsumableArray($e(e.deps)))
                }
            }
            return i
        }

        function $i(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return {
                factory: e,
                value: t,
                multi: n ? [] : void 0
            }
        }

        function Xi(e) {
            return null !== e && "object" == typeof e && qe in e
        }

        function Yi(e) {
            return "function" == typeof e
        }
        var ea = function(e, t, n) {
                return function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        i = Ki(e, t, n, r);
                    return i._resolveInjectorDefTypes(), i
                }({
                    name: n
                }, t, e, n)
            },
            ta = function() {
                var e = function() {
                    function e() {
                        _classCallCheck(this, e)
                    }
                    return _createClass(e, null, [{
                        key: "create",
                        value: function(e, t) {
                            return Array.isArray(e) ? ea(e, t, "") : ea(e.providers, e.parent, e.name || "")
                        }
                    }]), e
                }();
                return e.THROW_IF_NOT_FOUND = ze, e.NULL = new Xe, e.\u0275prov = fe({
                    token: e,
                    providedIn: "any",
                    factory: function() {
                        return Ge(Ve)
                    }
                }), e.__NG_ELEMENT_ID__ = -1, e
            }(),
            na = new He("AnalyzeForEntryComponents"),
            ra = new Map,
            ia = new Set;

        function aa(e) {
            return "string" == typeof e ? e : e.text()
        }

        function oa(e, t) {
            for (var n = e.styles, r = e.classes, i = 0, a = 0; a < t.length; a++) {
                var o = t[a];
                "number" == typeof o ? i = o : 1 == i ? r = we(r, o) : 2 == i && (n = we(n, o + ": " + t[++a] + ";"))
            }
            null !== n && (e.styles = n), null !== r && (e.classes = r)
        }
        var sa = null;

        function ua() {
            if (!sa) {
                var e = Pe.Symbol;
                if (e && e.iterator) sa = e.iterator;
                else
                    for (var t = Object.getOwnPropertyNames(Map.prototype), n = 0; n < t.length; ++n) {
                        var r = t[n];
                        "entries" !== r && "size" !== r && Map.prototype[r] === Map.prototype.entries && (sa = r)
                    }
            }
            return sa
        }

        function la(e, t) {
            return e === t || "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t)
        }
        var ca = function() {
            function e(t) {
                _classCallCheck(this, e), this.wrapped = t
            }
            return _createClass(e, null, [{
                key: "wrap",
                value: function(t) {
                    return new e(t)
                }
            }, {
                key: "unwrap",
                value: function(t) {
                    return e.isWrapped(t) ? t.wrapped : t
                }
            }, {
                key: "isWrapped",
                value: function(t) {
                    return t instanceof e
                }
            }]), e
        }();

        function ha(e) {
            return !!fa(e) && (Array.isArray(e) || !(e instanceof Map) && ua() in e)
        }

        function fa(e) {
            return null !== e && ("function" == typeof e || "object" == typeof e)
        }

        function da(e, t, n) {
            return !Object.is(e[t], n) && (e[t] = n, !0)
        }

        function va(e, t, n, r) {
            var i = qt();
            return da(i, Xt(), t) && (Qt(), function(e, t, n, r, i, a) {
                var o = Dt(e, t),
                    s = t[11];
                if (null == r) It(s) ? s.removeAttribute(o, n, a) : o.removeAttribute(n);
                else {
                    var u = null == i ? On(r) : i(r, e.tagName || "", n);
                    It(s) ? s.setAttribute(o, n, u, a) : a ? o.setAttributeNS(a, n, u) : o.setAttribute(n, u)
                }
            }(fn(), i, e, t, n, r)), va
        }

        function pa(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : le.Default,
                n = qt();
            return null == n ? Ge(e, t) : Vn(Wt(), n, Te(e), t)
        }

        function ya() {
            throw new Error("invalid")
        }

        function ma(e, t, n) {
            var r = qt();
            return da(r, Xt(), t) && function(e, t, n, r, i, a, o, s) {
                var u, l, c = Dt(t, n),
                    h = t.inputs;
                null != h && (u = h[r]) ? (si(e, n, u, r, i), Et(t) && function(e, t) {
                    var n = Ft(t, e);
                    16 & n[2] || (n[2] |= 64)
                }(n, t.index)) : 3 === t.type && (r = "class" === (l = r) ? "className" : "for" === l ? "htmlFor" : "formaction" === l ? "formAction" : "innerHtml" === l ? "innerHTML" : "readonly" === l ? "readOnly" : "tabindex" === l ? "tabIndex" : l, i = null != o ? o(i, t.tagName || "", r) : i, It(a) ? a.setProperty(c, r, i) : Cn(r) || (c.setProperty ? c.setProperty(r, i) : c[r] = i))
            }(Qt(), fn(), r, e, t, r[11], n), ma
        }

        function ga(e, t, n, r, i) {
            var a = i ? "class" : "style";
            si(e, n, t.inputs[a], a, r)
        }

        function _a(e, t, n, r) {
            var i = qt(),
                a = Qt(),
                o = 19 + e,
                s = i[11],
                u = i[o] = Sr(t, s, zt.lFrame.currentNamespace),
                l = a.firstCreatePass ? function(e, t, n, r, i, a, o) {
                    var s = t.consts,
                        u = Ht(s, a),
                        l = Tr(t, n[6], e, 3, i, u);
                    return Fr(t, n, l, Ht(s, o)), null !== l.mergedAttrs && oa(l, l.mergedAttrs), null !== t.queries && t.queries.elementStart(t, l), l
                }(e, a, i, 0, t, n, r) : a.data[o];
            Kt(l, !0);
            var c = l.mergedAttrs;
            null !== c && kn(s, u, c);
            var h = l.classes;
            null !== h && Oi(s, u, h);
            var f = l.styles;
            null !== f && Ai(s, u, f), wi(a, i, u, l), 0 === zt.lFrame.elementDepthCount && er(u, i), zt.lFrame.elementDepthCount++, Tt(l) && (Rr(a, i, l), function(e, t, n) {
                if (St(t))
                    for (var r = t.directiveEnd, i = t.directiveStart; i < r; i++) {
                        var a = e.data[i];
                        a.contentQueries && a.contentQueries(1, n[i], i)
                    }
            }(a, l, i)), null !== r && function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Dt,
                    r = t.localNames;
                if (null !== r)
                    for (var i = t.index + 1, a = 0; a < r.length; a += 2) {
                        var o = r[a + 1],
                            s = -1 === o ? n(t, e) : e[o];
                        e[i++] = s
                    }
            }(i, l)
        }

        function ka() {
            var e = Wt();
            Zt() ? Gt() : Kt(e = e.parent, !1);
            var t = e;
            zt.lFrame.elementDepthCount--;
            var n = Qt();
            n.firstCreatePass && (dn(n, e), St(e) && n.queries.elementEnd(e)), null !== t.classes && function(e) {
                return 0 != (16 & e.flags)
            }(t) && ga(n, t, qt(), t.classes, !0), null !== t.styles && function(e) {
                return 0 != (32 & e.flags)
            }(t) && ga(n, t, qt(), t.styles, !1)
        }

        function ba(e, t, n, r) {
            _a(e, t, n, r), ka()
        }

        function Ca(e) {
            return !!e && "function" == typeof e.then
        }

        function wa(e) {
            return !!e && "function" == typeof e.subscribe
        }

        function Sa(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = arguments.length > 3 ? arguments[3] : void 0,
                i = qt(),
                a = Qt(),
                o = Wt();
            return function(e, t, n, r, i, a) {
                var o = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
                    s = arguments.length > 7 ? arguments[7] : void 0,
                    u = Tt(r),
                    l = e.firstCreatePass && (e.cleanup || (e.cleanup = [])),
                    c = ii(t),
                    h = !0;
                if (3 === r.type) {
                    var f = Dt(r, t),
                        d = s ? s(f) : lt,
                        v = d.target || f,
                        p = c.length,
                        y = s ? function(e) {
                            return s(Pt(e[r.index])).target
                        } : r.index;
                    if (It(n)) {
                        var m = null;
                        if (!s && u && (m = function(e, t, n, r) {
                                var i = e.cleanup;
                                if (null != i)
                                    for (var a = 0; a < i.length - 1; a += 2) {
                                        var o = i[a];
                                        if (o === n && i[a + 1] === r) {
                                            var s = t[7],
                                                u = i[a + 2];
                                            return s.length > u ? s[u] : null
                                        }
                                        "string" == typeof o && (a += 2)
                                    }
                                return null
                            }(e, t, i, r.index)), null !== m)(m.__ngLastListenerFn__ || m).__ngNextListenerFn__ = a, m.__ngLastListenerFn__ = a, h = !1;
                        else {
                            a = Ta(r, t, a, !1);
                            var g = n.listen(d.name || v, i, a);
                            c.push(a, g), l && l.push(i, y, p, p + 1)
                        }
                    } else a = Ta(r, t, a, !0), v.addEventListener(i, a, o), c.push(a), l && l.push(i, y, p, o)
                }
                var _, k = r.outputs;
                if (h && null !== k && (_ = k[i])) {
                    var b = _.length;
                    if (b)
                        for (var C = 0; C < b; C += 2) {
                            var w = t[_[C]][_[C + 1]].subscribe(a),
                                S = c.length;
                            c.push(a, w), l && l.push(i, r.index, S, -(S + 1))
                        }
                }
            }(a, i, i[11], o, e, t, n, r), Sa
        }

        function Ea(e, t, n) {
            try {
                return !1 !== t(n)
            } catch (r) {
                return oi(e, r), !1
            }
        }

        function Ta(e, t, n, r) {
            return function i(a) {
                if (a === Function) return n;
                var o = 2 & e.flags ? Ft(e.index, t) : t;
                0 == (32 & t[2]) && Yr(o);
                for (var s = Ea(t, n, a), u = i.__ngNextListenerFn__; u;) s = Ea(t, u, a) && s, u = u.__ngNextListenerFn__;
                return r && !1 === s && (a.preventDefault(), a.returnValue = !1), s
            }
        }

        function xa(e, t) {
            for (var n = null, r = function(e) {
                    var t = e.attrs;
                    if (null != t) {
                        var n = t.indexOf(5);
                        if (0 == (1 & n)) return t[n + 1]
                    }
                    return null
                }(e), i = 0; i < t.length; i++) {
                var a = t[i];
                if ("*" !== a) {
                    if (null === r ? lr(e, a, !0) : cr(r, a)) return i
                } else n = i
            }
            return n
        }

        function Aa(e) {
            var t = qt()[16][6];
            if (!t.projection)
                for (var n = t.projection = it(e ? e.length : 1, null), r = n.slice(), i = t.child; null !== i;) {
                    var a = e ? xa(i, e) : 0;
                    null !== a && (r[a] ? r[a].projectionNext = i : n[a] = i, r[a] = i), i = i.next
                }
        }

        function Oa(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = arguments.length > 2 ? arguments[2] : void 0,
                r = qt(),
                i = Qt(),
                a = Tr(i, r[6], e, 1, null, n || null);
            null === a.projection && (a.projection = t), Gt(),
                function(e, t, n) {
                    xi(t[11], 0, t, n, mi(e, n, t), Ci(n.parent || t[6], t))
                }(i, r, a)
        }
        var Ia = [];

        function Ra(e, t, n, r, i) {
            for (var a = e[n + 1], o = null === t, s = r ? gr(a) : kr(a), u = !1; 0 !== s && (!1 === u || o);) {
                var l = e[s + 1];
                Pa(e[s], t) && (u = !0, e[s + 1] = r ? Cr(l) : _r(l)), s = r ? gr(l) : kr(l)
            }
            u && (e[n + 1] = r ? _r(a) : Cr(a))
        }

        function Pa(e, t) {
            return null === e || null == t || (Array.isArray(e) ? e[1] : e) === t || !(!Array.isArray(e) || "string" != typeof t) && ot(e, t) >= 0
        }

        function Na(e, t) {
            return function(e, t, n, r) {
                var i, a, o, s = qt(),
                    u = Qt(),
                    l = (i = zt.lFrame, a = i.bindingIndex, i.bindingIndex = i.bindingIndex + 2, a);
                (u.firstUpdatePass && function(e, t, n, r) {
                    var i = e.data;
                    if (null === i[n + 1]) {
                        var a = i[cn() + 19],
                            o = function(e, t) {
                                return t >= e.expandoStartIndex
                            }(e, n);
                        (function(e, t) {
                            return 0 != (16 & e.flags)
                        })(a) && null === t && !o && (t = !1), t = function(e, t, n, r) {
                                var i = function(e) {
                                        var t = zt.lFrame.currentDirectiveIndex;
                                        return -1 === t ? null : e[t]
                                    }(e),
                                    a = t.residualClasses;
                                if (null === i) 0 === t.classBindings && (n = ja(n = Da(null, e, t, n, !0), t.attrs, !0), a = null);
                                else {
                                    var o = t.directiveStylingLast;
                                    if (-1 === o || e[o] !== i)
                                        if (n = Da(i, e, t, n, !0), null === a) {
                                            var s = function(e, t, n) {
                                                var r = t.classBindings;
                                                if (0 !== kr(r)) return e[gr(r)]
                                            }(e, t);
                                            void 0 !== s && Array.isArray(s) && function(e, t, n, r) {
                                                e[gr(t.classBindings)] = r
                                            }(e, t, 0, s = ja(s = Da(null, e, t, s[1], !0), t.attrs, !0))
                                        } else a = function(e, t, n) {
                                            for (var r = void 0, i = t.directiveEnd, a = 1 + t.directiveStylingLast; a < i; a++) r = ja(r, e[a].hostAttrs, !0);
                                            return ja(r, t.attrs, !0)
                                        }(e, t)
                                }
                                return void 0 !== a && (t.residualClasses = a), n
                            }(i, a, t),
                            function(e, t, n, r, i, a) {
                                var o = t.classBindings,
                                    s = gr(o),
                                    u = kr(o);
                                e[r] = n;
                                var l, c = !1;
                                if (Array.isArray(n)) {
                                    var h = n;
                                    (null === (l = h[1]) || ot(h, l) > 0) && (c = !0)
                                } else l = n;
                                if (i)
                                    if (0 !== u) {
                                        var f = gr(e[s + 1]);
                                        e[r + 1] = mr(f, s), 0 !== f && (e[f + 1] = br(e[f + 1], r)), e[s + 1] = 131071 & e[s + 1] | r << 17
                                    } else e[r + 1] = mr(s, 0), 0 !== s && (e[s + 1] = br(e[s + 1], r)), s = r;
                                else e[r + 1] = mr(u, 0), 0 === s ? s = r : e[u + 1] = br(e[u + 1], r), u = r;
                                c && (e[r + 1] = _r(e[r + 1])), Ra(e, l, r, !0), Ra(e, l, r, !1),
                                    function(e, t, n, r, i) {
                                        var a = e.residualClasses;
                                        null != a && "string" == typeof t && ot(a, t) >= 0 && (n[r + 1] = Cr(n[r + 1]))
                                    }(t, l, e, r), o = mr(s, u), t.classBindings = o
                            }(i, a, t, n, o)
                    }
                }(u, e, l), t !== dr && da(s, l, t)) && (null == n && (o = function() {
                    var e = zt.lFrame;
                    return null === e ? null : e.currentSanitizer
                }()) && (n = o), function(e, t, n, r, i, a, o, s) {
                    if (3 === t.type) {
                        var u = e.data,
                            l = u[s + 1];
                        Ma(1 == (1 & l) ? Fa(u, t, n, i, kr(l), !0) : void 0) || (Ma(a) || 2 == (2 & l) && (a = Fa(u, null, n, i, s, !0)), function(e, t, n, r, i) {
                            var a = It(e);
                            i ? a ? e.addClass(n, r) : n.classList.add(r) : a ? e.removeClass(n, r) : n.classList.remove(r)
                        }(r, 0, Nt(cn(), n), i, a))
                    }
                }(u, u.data[cn() + 19], s, s[11], e, s[l + 1] = function(e, t) {
                    return null == e || ("function" == typeof t ? e = t(e) : "string" == typeof t ? e += t : "object" == typeof e && (e = Ce(function(e) {
                        return e instanceof
                        function() {
                            function e(t) {
                                _classCallCheck(this, e), this.changingThisBreaksApplicationSecurity = t
                            }
                            return _createClass(e, [{
                                key: "toString",
                                value: function() {
                                    return "SafeValue must use [property]=binding: ".concat(this.changingThisBreaksApplicationSecurity) + " (see http://g.co/ng/security#xss)"
                                }
                            }]), e
                        }() ? e.changingThisBreaksApplicationSecurity: e
                    }(e)))), e
                }(t, n), 0, l))
            }(e, t, null), Na
        }

        function Da(e, t, n, r, i) {
            var a = null,
                o = n.directiveEnd,
                s = n.directiveStylingLast;
            for (-1 === s ? s = n.directiveStart : s++; s < o && (r = ja(r, (a = t[s]).hostAttrs, i), a !== e);) s++;
            return null !== e && (n.directiveStylingLast = s), r
        }

        function ja(e, t, n) {
            var r, i, a, o, s = n ? 1 : 2,
                u = -1;
            if (null !== t)
                for (var l = 0; l < t.length; l++) {
                    var c = t[l];
                    "number" == typeof c ? u = c : u === s && (Array.isArray(e) || (e = void 0 === e ? [] : ["", e]), r = e, i = c, a = !!n || t[++l], o = void 0, (o = ot(r, i)) >= 0 ? r[1 | o] = a : function(e, t, n, r) {
                        var i = e.length;
                        if (i == t) e.push(n, r);
                        else if (1 === i) e.push(r, e[0]), e[0] = n;
                        else {
                            for (i--, e.push(e[i - 1], e[i]); i > t;) e[i] = e[i - 2], i--;
                            e[t] = n, e[t + 1] = r
                        }
                    }(r, o = ~o, i, a))
                }
            return void 0 === e ? null : e
        }

        function Fa(e, t, n, r, i, a) {
            for (var o = null === t, s = void 0; i > 0;) {
                var u = e[i],
                    l = Array.isArray(u),
                    c = l ? u[1] : u,
                    h = null === c,
                    f = n[i + 1];
                f === dr && (f = h ? Ia : void 0);
                var d = h ? at(f, r) : c === r ? f : void 0;
                if (l && !Ma(d) && (d = at(u, r)), Ma(d) && (s = d, o)) return s;
                var v = e[i + 1];
                i = o ? gr(v) : kr(v)
            }
            if (null !== t) {
                var p = a ? t.residualClasses : t.residualStyles;
                null != p && (s = at(p, r))
            }
            return s
        }

        function Ma(e) {
            return void 0 !== e
        }

        function La(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = qt(),
                r = Qt(),
                i = e + 19,
                a = r.firstCreatePass ? Tr(r, n[6], e, 3, null, null) : r.data[i],
                o = n[i] = function(e, t) {
                    return It(t) ? t.createText(e) : t.createTextNode(e)
                }(t, n[11]);
            wi(r, n, o, a), Kt(a, !1)
        }

        function Ua(e) {
            return Ha("", e, ""), Ua
        }

        function Ha(e, t, n) {
            var r = qt(),
                i = function(e, t, n, r) {
                    return da(e, Xt(), n) ? t + On(n) + r : dr
                }(r, e, t, n);
            return i !== dr && function(e, t, n) {
                var r = Nt(t, e),
                    i = e[11];
                It(i) ? i.setValue(r, n) : r.textContent = n
            }(r, cn(), i), Ha
        }

        function Va(e, t) {
            var n = Mt(e)[1],
                r = n.data.length - 1;
            dn(n, {
                directiveStart: r,
                directiveEnd: r + 1
            })
        }

        function za(e) {
            for (var t = Object.getPrototypeOf(e.type.prototype).constructor, n = !0, r = [e]; t;) {
                var i = void 0;
                if (xt(e)) i = t.\u0275cmp || t.\u0275dir;
                else {
                    if (t.\u0275cmp) throw new Error("Directives cannot inherit Components");
                    i = t.\u0275dir
                }
                if (i) {
                    if (n) {
                        r.push(i);
                        var a = e;
                        a.inputs = Ba(e.inputs), a.declaredInputs = Ba(e.declaredInputs), a.outputs = Ba(e.outputs);
                        var o = i.hostBindings;
                        o && Wa(e, o);
                        var s = i.viewQuery,
                            u = i.contentQueries;
                        if (s && qa(e, s), u && Qa(e, u), he(e.inputs, i.inputs), he(e.declaredInputs, i.declaredInputs), he(e.outputs, i.outputs), xt(i) && i.data.animation) {
                            var l = e.data;
                            l.animation = (l.animation || []).concat(i.data.animation)
                        }
                        a.afterContentChecked = a.afterContentChecked || i.afterContentChecked, a.afterContentInit = e.afterContentInit || i.afterContentInit, a.afterViewChecked = e.afterViewChecked || i.afterViewChecked, a.afterViewInit = e.afterViewInit || i.afterViewInit, a.doCheck = e.doCheck || i.doCheck, a.onDestroy = e.onDestroy || i.onDestroy, a.onInit = e.onInit || i.onInit
                    }
                    var c = i.features;
                    if (c)
                        for (var h = 0; h < c.length; h++) {
                            var f = c[h];
                            f && f.ngInherit && f(e), f === za && (n = !1)
                        }
                }
                t = Object.getPrototypeOf(t)
            }! function(e) {
                for (var t = 0, n = null, r = e.length - 1; r >= 0; r--) {
                    var i = e[r];
                    i.hostVars = t += i.hostVars, i.hostAttrs = wn(i.hostAttrs, n = wn(n, i.hostAttrs))
                }
            }(r)
        }

        function Ba(e) {
            return e === lt ? {} : e === ct ? [] : e
        }

        function qa(e, t) {
            var n = e.viewQuery;
            e.viewQuery = n ? function(e, r) {
                t(e, r), n(e, r)
            } : t
        }

        function Qa(e, t) {
            var n = e.contentQueries;
            e.contentQueries = n ? function(e, r, i) {
                t(e, r, i), n(e, r, i)
            } : t
        }

        function Wa(e, t) {
            var n = e.hostBindings;
            e.hostBindings = n ? function(e, r) {
                t(e, r), n(e, r)
            } : t
        }
        var Ka = function() {
            function e(t, n, r) {
                _classCallCheck(this, e), this.previousValue = t, this.currentValue = n, this.firstChange = r
            }
            return _createClass(e, [{
                key: "isFirstChange",
                value: function() {
                    return this.firstChange
                }
            }]), e
        }();

        function Za(e) {
            e.type.prototype.ngOnChanges && (e.setInput = Ga, e.onChanges = function() {
                var e = Ja(this),
                    t = e && e.current;
                if (t) {
                    var n = e.previous;
                    if (n === lt) e.previous = t;
                    else
                        for (var r in t) n[r] = t[r];
                    e.current = null, this.ngOnChanges(t)
                }
            })
        }

        function Ga(e, t, n, r) {
            var i = Ja(e) || function(e, t) {
                    return e.__ngSimpleChanges__ = t
                }(e, {
                    previous: lt,
                    current: null
                }),
                a = i.current || (i.current = {}),
                o = i.previous,
                s = this.declaredInputs[n],
                u = o[s];
            a[s] = new Ka(u && u.currentValue, t, o === lt), e[r] = t
        }

        function Ja(e) {
            return e.__ngSimpleChanges__ || null
        }

        function $a(e, t, n, r, i) {
            if (e = Te(e), Array.isArray(e))
                for (var a = 0; a < e.length; a++) $a(e[a], t, n, r, i);
            else {
                var o = Qt(),
                    s = qt(),
                    u = Yi(e) ? e : Te(e.provide),
                    l = Ji(e),
                    c = Wt(),
                    h = 65535 & c.providerIndexes,
                    f = c.directiveStart,
                    d = c.providerIndexes >> 16;
                if (Yi(e) || !e.multi) {
                    var v = new _n(l, i, pa),
                        p = eo(u, t, i ? h : h + d, f); - 1 === p ? (Hn(Fn(c, s), o, u), Xa(o, e, t.length), t.push(u), c.directiveStart++, c.directiveEnd++, i && (c.providerIndexes += 65536), n.push(v), s.push(v)) : (n[p] = v, s[p] = v)
                } else {
                    var y = eo(u, t, h + d, f),
                        m = eo(u, t, h, h + d),
                        g = y >= 0 && n[y],
                        _ = m >= 0 && n[m];
                    if (i && !_ || !i && !g) {
                        Hn(Fn(c, s), o, u);
                        var k = function(e, t, n, r, i) {
                            var a = new _n(e, n, pa);
                            return a.multi = [], a.index = t, a.componentProviders = 0, Ya(a, i, r && !n), a
                        }(i ? no : to, n.length, i, r, l);
                        !i && _ && (n[m].providerFactory = k), Xa(o, e, t.length), t.push(u), c.directiveStart++, c.directiveEnd++, i && (c.providerIndexes += 65536), n.push(k), s.push(k)
                    } else Xa(o, e, y > -1 ? y : m), Ya(n[i ? m : y], l, !i && r);
                    !i && r && _ && n[m].componentProviders++
                }
            }
        }

        function Xa(e, t, n) {
            if (Yi(t) || t.useClass) {
                var r = (t.useClass || t).prototype.ngOnDestroy;
                r && (e.destroyHooks || (e.destroyHooks = [])).push(n, r)
            }
        }

        function Ya(e, t, n) {
            e.multi.push(t), n && e.componentProviders++
        }

        function eo(e, t, n, r) {
            for (var i = n; i < r; i++)
                if (t[i] === e) return i;
            return -1
        }

        function to(e, t, n, r) {
            return ro(this.multi, [])
        }

        function no(e, t, n, r) {
            var i, a = this.multi;
            if (this.providerFactory) {
                var o = this.providerFactory.componentProviders,
                    s = Qn(n, n[1], this.providerFactory.index, r);
                ro(a, i = s.slice(0, o));
                for (var u = o; u < s.length; u++) i.push(s[u])
            } else ro(a, i = []);
            return i
        }

        function ro(e, t) {
            for (var n = 0; n < e.length; n++) t.push((0, e[n])());
            return t
        }

        function io(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return function(n) {
                n.providersResolver = function(n, r) {
                    return function(e, t, n) {
                        var r = Qt();
                        if (r.firstCreatePass) {
                            var i = xt(e);
                            $a(n, r.data, r.blueprint, i, !0), $a(t, r.data, r.blueprint, i, !1)
                        }
                    }(n, r ? r(e) : e, t)
                }
            }
        }
        Za.ngInherit = !0;
        var ao = function e() {
                _classCallCheck(this, e)
            },
            oo = function() {
                function e() {
                    _classCallCheck(this, e)
                }
                return _createClass(e, [{
                    key: "resolveComponentFactory",
                    value: function(e) {
                        throw function(e) {
                            var t = Error("No component factory found for ".concat(Ce(e), ". Did you add it to @NgModule.entryComponents?"));
                            return t.ngComponent = e, t
                        }(e)
                    }
                }]), e
            }(),
            so = function() {
                var e = function e() {
                    _classCallCheck(this, e)
                };
                return e.NULL = new oo, e
            }(),
            uo = function() {
                var e = function e(t) {
                    _classCallCheck(this, e), this.nativeElement = t
                };
                return e.__NG_ELEMENT_ID__ = function() {
                    return lo(e)
                }, e
            }(),
            lo = function(e) {
                return ji(e, Wt(), qt())
            },
            co = function e() {
                _classCallCheck(this, e)
            },
            ho = function() {
                var e = {
                    Important: 1,
                    DashCase: 2
                };
                return e[e.Important] = "Important", e[e.DashCase] = "DashCase", e
            }(),
            fo = function() {
                var e = function e() {
                    _classCallCheck(this, e)
                };
                return e.\u0275prov = fe({
                    token: e,
                    providedIn: "root",
                    factory: function() {
                        return null
                    }
                }), e
            }(),
            vo = function e(t) {
                _classCallCheck(this, e), this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join(".")
            },
            po = new vo("9.0.7"),
            yo = function() {
                function e() {
                    _classCallCheck(this, e)
                }
                return _createClass(e, [{
                    key: "supports",
                    value: function(e) {
                        return ha(e)
                    }
                }, {
                    key: "create",
                    value: function(e) {
                        return new go(e)
                    }
                }]), e
            }(),
            mo = function(e, t) {
                return t
            },
            go = function() {
                function e(t) {
                    _classCallCheck(this, e), this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || mo
                }
                return _createClass(e, [{
                    key: "forEachItem",
                    value: function(e) {
                        var t;
                        for (t = this._itHead; null !== t; t = t._next) e(t)
                    }
                }, {
                    key: "forEachOperation",
                    value: function(e) {
                        for (var t = this._itHead, n = this._removalsHead, r = 0, i = null; t || n;) {
                            var a = !n || t && t.currentIndex < Co(n, r, i) ? t : n,
                                o = Co(a, r, i),
                                s = a.currentIndex;
                            if (a === n) r--, n = n._nextRemoved;
                            else if (t = t._next, null == a.previousIndex) r++;
                            else {
                                i || (i = []);
                                var u = o - r,
                                    l = s - r;
                                if (u != l) {
                                    for (var c = 0; c < u; c++) {
                                        var h = c < i.length ? i[c] : i[c] = 0,
                                            f = h + c;
                                        l <= f && f < u && (i[c] = h + 1)
                                    }
                                    i[a.previousIndex] = l - u
                                }
                            }
                            o !== s && e(a, o, s)
                        }
                    }
                }, {
                    key: "forEachPreviousItem",
                    value: function(e) {
                        var t;
                        for (t = this._previousItHead; null !== t; t = t._nextPrevious) e(t)
                    }
                }, {
                    key: "forEachAddedItem",
                    value: function(e) {
                        var t;
                        for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t)
                    }
                }, {
                    key: "forEachMovedItem",
                    value: function(e) {
                        var t;
                        for (t = this._movesHead; null !== t; t = t._nextMoved) e(t)
                    }
                }, {
                    key: "forEachRemovedItem",
                    value: function(e) {
                        var t;
                        for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t)
                    }
                }, {
                    key: "forEachIdentityChange",
                    value: function(e) {
                        var t;
                        for (t = this._identityChangesHead; null !== t; t = t._nextIdentityChange) e(t)
                    }
                }, {
                    key: "diff",
                    value: function(e) {
                        if (null == e && (e = []), !ha(e)) throw new Error("Error trying to diff '".concat(Ce(e), "'. Only arrays and iterables are allowed"));
                        return this.check(e) ? this : null
                    }
                }, {
                    key: "onDestroy",
                    value: function() {}
                }, {
                    key: "check",
                    value: function(e) {
                        var t = this;
                        this._reset();
                        var n, r, i, a = this._itHead,
                            o = !1;
                        if (Array.isArray(e)) {
                            this.length = e.length;
                            for (var s = 0; s < this.length; s++) r = e[s], i = this._trackByFn(s, r), null !== a && la(a.trackById, i) ? (o && (a = this._verifyReinsertion(a, r, i, s)), la(a.item, r) || this._addIdentityChange(a, r)) : (a = this._mismatch(a, r, i, s), o = !0), a = a._next
                        } else n = 0,
                            function(e, t) {
                                if (Array.isArray(e))
                                    for (var n = 0; n < e.length; n++) t(e[n]);
                                else
                                    for (var r, i = e[ua()](); !(r = i.next()).done;) t(r.value)
                            }(e, (function(e) {
                                i = t._trackByFn(n, e), null !== a && la(a.trackById, i) ? (o && (a = t._verifyReinsertion(a, e, i, n)), la(a.item, e) || t._addIdentityChange(a, e)) : (a = t._mismatch(a, e, i, n), o = !0), a = a._next, n++
                            })), this.length = n;
                        return this._truncate(a), this.collection = e, this.isDirty
                    }
                }, {
                    key: "isDirty",
                    get: function() {
                        return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
                    }
                }, {
                    key: "_reset",
                    value: function() {
                        if (this.isDirty) {
                            var e, t;
                            for (e = this._previousItHead = this._itHead; null !== e; e = e._next) e._nextPrevious = e._next;
                            for (e = this._additionsHead; null !== e; e = e._nextAdded) e.previousIndex = e.currentIndex;
                            for (this._additionsHead = this._additionsTail = null, e = this._movesHead; null !== e; e = t) e.previousIndex = e.currentIndex, t = e._nextMoved;
                            this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
                        }
                    }
                }, {
                    key: "_mismatch",
                    value: function(e, t, n, r) {
                        var i;
                        return null === e ? i = this._itTail : (i = e._prev, this._remove(e)), null !== (e = null === this._linkedRecords ? null : this._linkedRecords.get(n, r)) ? (la(e.item, t) || this._addIdentityChange(e, t), this._moveAfter(e, i, r)) : null !== (e = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (la(e.item, t) || this._addIdentityChange(e, t), this._reinsertAfter(e, i, r)) : e = this._addAfter(new _o(t, n), i, r), e
                    }
                }, {
                    key: "_verifyReinsertion",
                    value: function(e, t, n, r) {
                        var i = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
                        return null !== i ? e = this._reinsertAfter(i, e._prev, r) : e.currentIndex != r && (e.currentIndex = r, this._addToMoves(e, r)), e
                    }
                }, {
                    key: "_truncate",
                    value: function(e) {
                        for (; null !== e;) {
                            var t = e._next;
                            this._addToRemovals(this._unlink(e)), e = t
                        }
                        null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
                    }
                }, {
                    key: "_reinsertAfter",
                    value: function(e, t, n) {
                        null !== this._unlinkedRecords && this._unlinkedRecords.remove(e);
                        var r = e._prevRemoved,
                            i = e._nextRemoved;
                        return null === r ? this._removalsHead = i : r._nextRemoved = i, null === i ? this._removalsTail = r : i._prevRemoved = r, this._insertAfter(e, t, n), this._addToMoves(e, n), e
                    }
                }, {
                    key: "_moveAfter",
                    value: function(e, t, n) {
                        return this._unlink(e), this._insertAfter(e, t, n), this._addToMoves(e, n), e
                    }
                }, {
                    key: "_addAfter",
                    value: function(e, t, n) {
                        return this._insertAfter(e, t, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = e : this._additionsTail._nextAdded = e, e
                    }
                }, {
                    key: "_insertAfter",
                    value: function(e, t, n) {
                        var r = null === t ? this._itHead : t._next;
                        return e._next = r, e._prev = t, null === r ? this._itTail = e : r._prev = e, null === t ? this._itHead = e : t._next = e, null === this._linkedRecords && (this._linkedRecords = new bo), this._linkedRecords.put(e), e.currentIndex = n, e
                    }
                }, {
                    key: "_remove",
                    value: function(e) {
                        return this._addToRemovals(this._unlink(e))
                    }
                }, {
                    key: "_unlink",
                    value: function(e) {
                        null !== this._linkedRecords && this._linkedRecords.remove(e);
                        var t = e._prev,
                            n = e._next;
                        return null === t ? this._itHead = n : t._next = n, null === n ? this._itTail = t : n._prev = t, e
                    }
                }, {
                    key: "_addToMoves",
                    value: function(e, t) {
                        return e.previousIndex === t ? e : (this._movesTail = null === this._movesTail ? this._movesHead = e : this._movesTail._nextMoved = e, e)
                    }
                }, {
                    key: "_addToRemovals",
                    value: function(e) {
                        return null === this._unlinkedRecords && (this._unlinkedRecords = new bo), this._unlinkedRecords.put(e), e.currentIndex = null, e._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = e, e._prevRemoved = null) : (e._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = e), e
                    }
                }, {
                    key: "_addIdentityChange",
                    value: function(e, t) {
                        return e.item = t, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = e : this._identityChangesTail._nextIdentityChange = e, e
                    }
                }]), e
            }(),
            _o = function e(t, n) {
                _classCallCheck(this, e), this.item = t, this.trackById = n, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
            },
            ko = function() {
                function e() {
                    _classCallCheck(this, e), this._head = null, this._tail = null
                }
                return _createClass(e, [{
                    key: "add",
                    value: function(e) {
                        null === this._head ? (this._head = this._tail = e, e._nextDup = null, e._prevDup = null) : (this._tail._nextDup = e, e._prevDup = this._tail, e._nextDup = null, this._tail = e)
                    }
                }, {
                    key: "get",
                    value: function(e, t) {
                        var n;
                        for (n = this._head; null !== n; n = n._nextDup)
                            if ((null === t || t <= n.currentIndex) && la(n.trackById, e)) return n;
                        return null
                    }
                }, {
                    key: "remove",
                    value: function(e) {
                        var t = e._prevDup,
                            n = e._nextDup;
                        return null === t ? this._head = n : t._nextDup = n, null === n ? this._tail = t : n._prevDup = t, null === this._head
                    }
                }]), e
            }(),
            bo = function() {
                function e() {
                    _classCallCheck(this, e), this.map = new Map
                }
                return _createClass(e, [{
                    key: "put",
                    value: function(e) {
                        var t = e.trackById,
                            n = this.map.get(t);
                        n || (n = new ko, this.map.set(t, n)), n.add(e)
                    }
                }, {
                    key: "get",
                    value: function(e, t) {
                        var n = this.map.get(e);
                        return n ? n.get(e, t) : null
                    }
                }, {
                    key: "remove",
                    value: function(e) {
                        var t = e.trackById;
                        return this.map.get(t).remove(e) && this.map.delete(t), e
                    }
                }, {
                    key: "isEmpty",
                    get: function() {
                        return 0 === this.map.size
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.map.clear()
                    }
                }]), e
            }();

        function Co(e, t, n) {
            var r = e.previousIndex;
            if (null === r) return r;
            var i = 0;
            return n && r < n.length && (i = n[r]), r + t + i
        }
        var wo = function() {
                function e() {
                    _classCallCheck(this, e)
                }
                return _createClass(e, [{
                    key: "supports",
                    value: function(e) {
                        return e instanceof Map || fa(e)
                    }
                }, {
                    key: "create",
                    value: function() {
                        return new So
                    }
                }]), e
            }(),
            So = function() {
                function e() {
                    _classCallCheck(this, e), this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
                }
                return _createClass(e, [{
                    key: "isDirty",
                    get: function() {
                        return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
                    }
                }, {
                    key: "forEachItem",
                    value: function(e) {
                        var t;
                        for (t = this._mapHead; null !== t; t = t._next) e(t)
                    }
                }, {
                    key: "forEachPreviousItem",
                    value: function(e) {
                        var t;
                        for (t = this._previousMapHead; null !== t; t = t._nextPrevious) e(t)
                    }
                }, {
                    key: "forEachChangedItem",
                    value: function(e) {
                        var t;
                        for (t = this._changesHead; null !== t; t = t._nextChanged) e(t)
                    }
                }, {
                    key: "forEachAddedItem",
                    value: function(e) {
                        var t;
                        for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t)
                    }
                }, {
                    key: "forEachRemovedItem",
                    value: function(e) {
                        var t;
                        for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t)
                    }
                }, {
                    key: "diff",
                    value: function(e) {
                        if (e) {
                            if (!(e instanceof Map || fa(e))) throw new Error("Error trying to diff '".concat(Ce(e), "'. Only maps and objects are allowed"))
                        } else e = new Map;
                        return this.check(e) ? this : null
                    }
                }, {
                    key: "onDestroy",
                    value: function() {}
                }, {
                    key: "check",
                    value: function(e) {
                        var t = this;
                        this._reset();
                        var n = this._mapHead;
                        if (this._appendAfter = null, this._forEach(e, (function(e, r) {
                                if (n && n.key === r) t._maybeAddToChanges(n, e), t._appendAfter = n, n = n._next;
                                else {
                                    var i = t._getOrCreateRecordForKey(r, e);
                                    n = t._insertBeforeOrAppend(n, i)
                                }
                            })), n) {
                            n._prev && (n._prev._next = null), this._removalsHead = n;
                            for (var r = n; null !== r; r = r._nextRemoved) r === this._mapHead && (this._mapHead = null), this._records.delete(r.key), r._nextRemoved = r._next, r.previousValue = r.currentValue, r.currentValue = null, r._prev = null, r._next = null
                        }
                        return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
                    }
                }, {
                    key: "_insertBeforeOrAppend",
                    value: function(e, t) {
                        if (e) {
                            var n = e._prev;
                            return t._next = e, t._prev = n, e._prev = t, n && (n._next = t), e === this._mapHead && (this._mapHead = t), this._appendAfter = e, e
                        }
                        return this._appendAfter ? (this._appendAfter._next = t, t._prev = this._appendAfter) : this._mapHead = t, this._appendAfter = t, null
                    }
                }, {
                    key: "_getOrCreateRecordForKey",
                    value: function(e, t) {
                        if (this._records.has(e)) {
                            var n = this._records.get(e);
                            this._maybeAddToChanges(n, t);
                            var r = n._prev,
                                i = n._next;
                            return r && (r._next = i), i && (i._prev = r), n._next = null, n._prev = null, n
                        }
                        var a = new Eo(e);
                        return this._records.set(e, a), a.currentValue = t, this._addToAdditions(a), a
                    }
                }, {
                    key: "_reset",
                    value: function() {
                        if (this.isDirty) {
                            var e;
                            for (this._previousMapHead = this._mapHead, e = this._previousMapHead; null !== e; e = e._next) e._nextPrevious = e._next;
                            for (e = this._changesHead; null !== e; e = e._nextChanged) e.previousValue = e.currentValue;
                            for (e = this._additionsHead; null != e; e = e._nextAdded) e.previousValue = e.currentValue;
                            this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
                        }
                    }
                }, {
                    key: "_maybeAddToChanges",
                    value: function(e, t) {
                        la(t, e.currentValue) || (e.previousValue = e.currentValue, e.currentValue = t, this._addToChanges(e))
                    }
                }, {
                    key: "_addToAdditions",
                    value: function(e) {
                        null === this._additionsHead ? this._additionsHead = this._additionsTail = e : (this._additionsTail._nextAdded = e, this._additionsTail = e)
                    }
                }, {
                    key: "_addToChanges",
                    value: function(e) {
                        null === this._changesHead ? this._changesHead = this._changesTail = e : (this._changesTail._nextChanged = e, this._changesTail = e)
                    }
                }, {
                    key: "_forEach",
                    value: function(e, t) {
                        e instanceof Map ? e.forEach(t) : Object.keys(e).forEach((function(n) {
                            return t(e[n], n)
                        }))
                    }
                }]), e
            }(),
            Eo = function e(t) {
                _classCallCheck(this, e), this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
            },
            To = function() {
                var e = function() {
                    function e(t) {
                        _classCallCheck(this, e), this.factories = t
                    }
                    return _createClass(e, [{
                        key: "find",
                        value: function(e) {
                            var t, n = this.factories.find((function(t) {
                                return t.supports(e)
                            }));
                            if (null != n) return n;
                            throw new Error("Cannot find a differ supporting object '".concat(e, "' of type '").concat((t = e).name || typeof t, "'"))
                        }
                    }], [{
                        key: "create",
                        value: function(t, n) {
                            if (null != n) {
                                var r = n.factories.slice();
                                t = t.concat(r)
                            }
                            return new e(t)
                        }
                    }, {
                        key: "extend",
                        value: function(t) {
                            return {
                                provide: e,
                                useFactory: function(n) {
                                    if (!n) throw new Error("Cannot extend IterableDiffers without a parent injector");
                                    return e.create(t, n)
                                },
                                deps: [
                                    [e, new ue, new oe]
                                ]
                            }
                        }
                    }]), e
                }();
                return e.\u0275prov = fe({
                    token: e,
                    providedIn: "root",
                    factory: function() {
                        return new e([new yo])
                    }
                }), e
            }(),
            xo = function() {
                var e = function() {
                    function e(t) {
                        _classCallCheck(this, e), this.factories = t
                    }
                    return _createClass(e, [{
                        key: "find",
                        value: function(e) {
                            var t = this.factories.find((function(t) {
                                return t.supports(e)
                            }));
                            if (t) return t;
                            throw new Error("Cannot find a differ supporting object '".concat(e, "'"))
                        }
                    }], [{
                        key: "create",
                        value: function(t, n) {
                            if (n) {
                                var r = n.factories.slice();
                                t = t.concat(r)
                            }
                            return new e(t)
                        }
                    }, {
                        key: "extend",
                        value: function(t) {
                            return {
                                provide: e,
                                useFactory: function(n) {
                                    if (!n) throw new Error("Cannot extend KeyValueDiffers without a parent injector");
                                    return e.create(t, n)
                                },
                                deps: [
                                    [e, new ue, new oe]
                                ]
                            }
                        }
                    }]), e
                }();
                return e.\u0275prov = fe({
                    token: e,
                    providedIn: "root",
                    factory: function() {
                        return new e([new wo])
                    }
                }), e
            }(),
            Ao = [new wo],
            Oo = new To([new yo]),
            Io = new xo(Ao),
            Ro = function() {
                var e = function e() {
                    _classCallCheck(this, e)
                };
                return e.__NG_ELEMENT_ID__ = function() {
                    return Po(e, uo)
                }, e
            }(),
            Po = function(e, t) {
                return Fi(e, t, Wt(), qt())
            },
            No = function() {
                var e = function e() {
                    _classCallCheck(this, e)
                };
                return e.__NG_ELEMENT_ID__ = function() {
                    return Do(e, uo)
                }, e
            }(),
            Do = function(e, t) {
                return Mi(e, t, Wt(), qt())
            },
            jo = {},
            Fo = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e) {
                    var r;
                    return _classCallCheck(this, n), (r = t.call(this)).ngModule = e, r
                }
                return _createClass(n, [{
                    key: "resolveComponentFactory",
                    value: function(e) {
                        var t = _t(e);
                        return new Uo(t, this.ngModule)
                    }
                }]), n
            }(so);

        function Mo(e) {
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push({
                propName: e[n],
                templateName: n
            });
            return t
        }
        var Lo = new He("SCHEDULER_TOKEN", {
                providedIn: "root",
                factory: function() {
                    return Rn
                }
            }),
            Uo = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r) {
                    var i;
                    return _classCallCheck(this, n), (i = t.call(this)).componentDef = e, i.ngModule = r, i.componentType = e.type, i.selector = e.selectors.map(fr).join(","), i.ngContentSelectors = e.ngContentSelectors ? e.ngContentSelectors : [], i.isBoundToModule = !!r, i
                }
                return _createClass(n, [{
                    key: "inputs",
                    get: function() {
                        return Mo(this.componentDef.inputs)
                    }
                }, {
                    key: "outputs",
                    get: function() {
                        return Mo(this.componentDef.outputs)
                    }
                }, {
                    key: "create",
                    value: function(e, t, n, r) {
                        var i, a, o = (r = r || this.ngModule) ? function(e, t) {
                                return {
                                    get: function(n, r, i) {
                                        var a = e.get(n, jo, i);
                                        return a !== jo || r === jo ? a : t.get(n, r, i)
                                    }
                                }
                            }(e, r.injector) : e,
                            s = o.get(co, Rt),
                            u = o.get(fo, null),
                            l = s.createRenderer(null, this.componentDef),
                            c = this.componentDef.selectors[0][0] || "div",
                            h = n ? function(e, t, n) {
                                if (It(e)) return e.selectRootElement(t, n === ut.ShadowDom);
                                var r = "string" == typeof t ? e.querySelector(t) : t;
                                return r.textContent = "", r
                            }(l, n, this.componentDef.encapsulation) : Sr(c, s.createRenderer(null, this.componentDef), function(e) {
                                var t = e.toLowerCase();
                                return "svg" === t ? "http://www.w3.org/2000/svg" : "math" === t ? "http://www.w3.org/1998/MathML/" : null
                            }(c)),
                            f = this.componentDef.onPush ? 576 : 528,
                            d = "string" == typeof n && /^#root-ng-internal-isolated-\d+/.test(n),
                            v = {
                                components: [],
                                scheduler: Rn,
                                clean: ri,
                                playerHandler: null,
                                flags: 0
                            },
                            p = Nr(0, -1, null, 1, 0, null, null, null, null, null),
                            y = Er(null, p, v, f, null, null, s, l, u, o);
                        rn(y, null);
                        try {
                            var m = function(e, t, n, r, i, a) {
                                var o = n[1];
                                n[19] = e;
                                var s = Tr(o, null, 0, 3, null, null),
                                    u = s.mergedAttrs = t.hostAttrs;
                                null !== u && (oa(s, u), null !== e && (kn(i, e, u), null !== s.classes && Oi(i, e, s.classes), null !== s.styles && Ai(i, e, s.styles)));
                                var l = r.createRenderer(e, t),
                                    c = Er(n, Pr(t), null, t.onPush ? 64 : 16, n[19], s, r, l, void 0);
                                return o.firstCreatePass && (Hn(Fn(s, n), o, t.type), Vr(o, s), Br(s, n.length, 1)), Xr(n, c), n[19] = c
                            }(h, this.componentDef, y, s, l);
                            if (h)
                                if (n) kn(l, h, ["ng-version", po.full]);
                                else {
                                    var g = function(e) {
                                            for (var t = [], n = [], r = 1, i = 2; r < e.length;) {
                                                var a = e[r];
                                                if ("string" == typeof a) 2 === i ? "" !== a && t.push(a, e[++r]) : 8 === i && n.push(a);
                                                else {
                                                    if (!sr(i)) break;
                                                    i = a
                                                }
                                                r++
                                            }
                                            return {
                                                attrs: t,
                                                classes: n
                                            }
                                        }(this.componentDef.selectors[0]),
                                        _ = g.attrs,
                                        k = g.classes;
                                    _ && kn(l, h, _), k && k.length > 0 && Oi(l, h, k.join(" "))
                                } a = jt(y[1], 0), t && (a.projection = t.map((function(e) {
                                return Array.from(e)
                            }))), i = function(e, t, n, r, i) {
                                var a = n[1],
                                    o = function(e, t, n) {
                                        var r = Wt();
                                        e.firstCreatePass && (n.providersResolver && n.providersResolver(n), Hr(e, r, 1), qr(e, t, n));
                                        var i = Qn(t, e, t.length - 1, r);
                                        er(i, t);
                                        var a = Dt(r, t);
                                        return a && er(a, t), i
                                    }(a, n, t);
                                r.components.push(o), e[8] = o, i && i.forEach((function(e) {
                                    return e(o, t)
                                })), t.contentQueries && t.contentQueries(1, o, n.length - 1);
                                var s = Wt();
                                if (a.firstCreatePass && (null !== t.hostBindings || null !== t.hostAttrs)) {
                                    hn(s.index - 19);
                                    var u = n[1];
                                    Mr(u, t), Lr(u, n, t.hostVars), Ur(t, o)
                                }
                                return o
                            }(m, this.componentDef, y, v, [Va]), xr(p, y, null)
                        } finally {
                            ln()
                        }
                        var b = new Ho(this.componentType, i, ji(uo, a, y), y, a);
                        return n && !d || (b.hostView._tViewNode.child = a), b
                    }
                }]), n
            }(ao),
            Ho = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r, i, a, o) {
                    var s, u, l, c;
                    return _classCallCheck(this, n), (s = t.call(this)).location = i, s._rootLView = a, s._tNode = o, s.destroyCbs = [], s.instance = r, s.hostView = s.changeDetectorRef = new Di(a), s.hostView._tViewNode = (u = a[1], l = a, null == (c = u.node) && (u.node = c = Dr(0, null, 2, -1, null, null)), l[6] = c), s.componentType = e, s
                }
                return _createClass(n, [{
                    key: "injector",
                    get: function() {
                        return new Zn(this._tNode, this._rootLView)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.destroyCbs && (this.destroyCbs.forEach((function(e) {
                            return e()
                        })), this.destroyCbs = null, !this.hostView.destroyed && this.hostView.destroy())
                    }
                }, {
                    key: "onDestroy",
                    value: function(e) {
                        this.destroyCbs && this.destroyCbs.push(e)
                    }
                }]), n
            }(function() {
                return function e() {
                    _classCallCheck(this, e)
                }
            }()),
            Vo = void 0,
            zo = ["en", [
                    ["a", "p"],
                    ["AM", "PM"], Vo
                ],
                [
                    ["AM", "PM"], Vo, Vo
                ],
                [
                    ["S", "M", "T", "W", "T", "F", "S"],
                    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                ], Vo, [
                    ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                ], Vo, [
                    ["B", "A"],
                    ["BC", "AD"],
                    ["Before Christ", "Anno Domini"]
                ], 0, [6, 0],
                ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
                ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
                ["{1}, {0}", Vo, "{1} 'at' {0}", Vo],
                [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
                ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {},
                function(e) {
                    var t = Math.floor(Math.abs(e)),
                        n = e.toString().replace(/^[^.]*\.?/, "").length;
                    return 1 === t && 0 === n ? 1 : 5
                }
            ],
            Bo = {};

        function qo(e) {
            return e in Bo || (Bo[e] = Pe.ng && Pe.ng.common && Pe.ng.common.locales && Pe.ng.common.locales[e]), Bo[e]
        }
        var Qo = function() {
            var e = {
                LocaleId: 0,
                DayPeriodsFormat: 1,
                DayPeriodsStandalone: 2,
                DaysFormat: 3,
                DaysStandalone: 4,
                MonthsFormat: 5,
                MonthsStandalone: 6,
                Eras: 7,
                FirstDayOfWeek: 8,
                WeekendRange: 9,
                DateFormat: 10,
                TimeFormat: 11,
                DateTimeFormat: 12,
                NumberSymbols: 13,
                NumberFormats: 14,
                CurrencyCode: 15,
                CurrencySymbol: 16,
                CurrencyName: 17,
                Currencies: 18,
                PluralCase: 19,
                ExtraData: 20
            };
            return e[e.LocaleId] = "LocaleId", e[e.DayPeriodsFormat] = "DayPeriodsFormat", e[e.DayPeriodsStandalone] = "DayPeriodsStandalone", e[e.DaysFormat] = "DaysFormat", e[e.DaysStandalone] = "DaysStandalone", e[e.MonthsFormat] = "MonthsFormat", e[e.MonthsStandalone] = "MonthsStandalone", e[e.Eras] = "Eras", e[e.FirstDayOfWeek] = "FirstDayOfWeek", e[e.WeekendRange] = "WeekendRange", e[e.DateFormat] = "DateFormat", e[e.TimeFormat] = "TimeFormat", e[e.DateTimeFormat] = "DateTimeFormat", e[e.NumberSymbols] = "NumberSymbols", e[e.NumberFormats] = "NumberFormats", e[e.CurrencyCode] = "CurrencyCode", e[e.CurrencySymbol] = "CurrencySymbol", e[e.CurrencyName] = "CurrencyName", e[e.Currencies] = "Currencies", e[e.PluralCase] = "PluralCase", e[e.ExtraData] = "ExtraData", e
        }();

        function Wo(e) {
            var t;
            null == (t = e) && function(e, t, n, r) {
                throw new Error("ASSERTION ERROR: ".concat("Expected localeId to be defined") + " [Expected=> null != ".concat(t, " <=Actual]"))
            }(0, t), "string" == typeof e && e.toLowerCase().replace(/_/g, "-")
        }
        var Ko = new Map,
            Zo = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r) {
                    var i;
                    _classCallCheck(this, n), (i = t.call(this))._parent = r, i._bootstrapComponents = [], i.injector = _assertThisInitialized(i), i.destroyCbs = [], i.componentFactoryResolver = new Fo(_assertThisInitialized(i));
                    var a = bt(e),
                        o = e[Me] || null;
                    return o && Wo(o), i._bootstrapComponents = Pn(a.bootstrap), i._r3Injector = Ki(e, r, [{
                        provide: Ye,
                        useValue: _assertThisInitialized(i)
                    }, {
                        provide: so,
                        useValue: i.componentFactoryResolver
                    }], Ce(e)), i._r3Injector._resolveInjectorDefTypes(), i.instance = i.get(e), i
                }
                return _createClass(n, [{
                    key: "get",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ta.THROW_IF_NOT_FOUND,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : le.Default;
                        return e === ta || e === Ye || e === Ve ? this : this._r3Injector.get(e, t, n)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var e = this._r3Injector;
                        !e.destroyed && e.destroy(), this.destroyCbs.forEach((function(e) {
                            return e()
                        })), this.destroyCbs = null
                    }
                }, {
                    key: "onDestroy",
                    value: function(e) {
                        this.destroyCbs.push(e)
                    }
                }]), n
            }(Ye),
            Go = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e) {
                    var r;
                    return _classCallCheck(this, n), (r = t.call(this)).moduleType = e, null !== bt(e) && function e(t) {
                        if (null !== t.\u0275mod.id) {
                            var n = t.\u0275mod.id;
                            (function(e, t, n) {
                                if (t && t !== n) throw new Error("Duplicate module registered for ".concat(e, " - ").concat(Ce(t), " vs ").concat(Ce(t.name)))
                            })(n, Ko.get(n), t), Ko.set(n, t)
                        }
                        var r = t.\u0275mod.imports;
                        r instanceof Function && (r = r()), r && r.forEach((function(t) {
                            return e(t)
                        }))
                    }(e), r
                }
                return _createClass(n, [{
                    key: "create",
                    value: function(e) {
                        return new Zo(this.moduleType, e)
                    }
                }]), n
            }(et);
        var Jo = function(e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n() {
                var e, r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return _classCallCheck(this, n), (e = t.call(this)).__isAsync = r, e
            }
            return _createClass(n, [{
                key: "emit",
                value: function(e) {
                    _get(_getPrototypeOf(n.prototype), "next", this).call(this, e)
                }
            }, {
                key: "subscribe",
                value: function(e, t, r) {
                    var i, a = function(e) {
                            return null
                        },
                        o = function() {
                            return null
                        };
                    e && "object" == typeof e ? (i = this.__isAsync ? function(t) {
                        setTimeout((function() {
                            return e.next(t)
                        }))
                    } : function(t) {
                        e.next(t)
                    }, e.error && (a = this.__isAsync ? function(t) {
                        setTimeout((function() {
                            return e.error(t)
                        }))
                    } : function(t) {
                        e.error(t)
                    }), e.complete && (o = this.__isAsync ? function() {
                        setTimeout((function() {
                            return e.complete()
                        }))
                    } : function() {
                        e.complete()
                    })) : (i = this.__isAsync ? function(t) {
                        setTimeout((function() {
                            return e(t)
                        }))
                    } : function(t) {
                        e(t)
                    }, t && (a = this.__isAsync ? function(e) {
                        setTimeout((function() {
                            return t(e)
                        }))
                    } : function(e) {
                        t(e)
                    }), r && (o = this.__isAsync ? function() {
                        setTimeout((function() {
                            return r()
                        }))
                    } : function() {
                        r()
                    }));
                    var s = _get(_getPrototypeOf(n.prototype), "subscribe", this).call(this, i, a, o);
                    return e instanceof f && e.add(s), s
                }
            }]), n
        }(A);

        function $o() {
            return this._results[ua()]()
        }
        var Xo = function() {
                function e() {
                    _classCallCheck(this, e), this.dirty = !0, this._results = [], this.changes = new Jo, this.length = 0;
                    var t = ua(),
                        n = e.prototype;
                    n[t] || (n[t] = $o)
                }
                return _createClass(e, [{
                    key: "map",
                    value: function(e) {
                        return this._results.map(e)
                    }
                }, {
                    key: "filter",
                    value: function(e) {
                        return this._results.filter(e)
                    }
                }, {
                    key: "find",
                    value: function(e) {
                        return this._results.find(e)
                    }
                }, {
                    key: "reduce",
                    value: function(e, t) {
                        return this._results.reduce(e, t)
                    }
                }, {
                    key: "forEach",
                    value: function(e) {
                        this._results.forEach(e)
                    }
                }, {
                    key: "some",
                    value: function(e) {
                        return this._results.some(e)
                    }
                }, {
                    key: "toArray",
                    value: function() {
                        return this._results.slice()
                    }
                }, {
                    key: "toString",
                    value: function() {
                        return this._results.toString()
                    }
                }, {
                    key: "reset",
                    value: function(e) {
                        this._results = function e(t, n) {
                            void 0 === n && (n = t);
                            for (var r = 0; r < t.length; r++) {
                                var i = t[r];
                                Array.isArray(i) ? (n === t && (n = t.slice(0, r)), e(i, n)) : n !== t && n.push(i)
                            }
                            return n
                        }(e), this.dirty = !1, this.length = this._results.length, this.last = this._results[this.length - 1], this.first = this._results[0]
                    }
                }, {
                    key: "notifyOnChanges",
                    value: function() {
                        this.changes.emit(this)
                    }
                }, {
                    key: "setDirty",
                    value: function() {
                        this.dirty = !0
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.changes.complete(), this.changes.unsubscribe()
                    }
                }]), e
            }(),
            Yo = function() {
                function e(t) {
                    _classCallCheck(this, e), this.queryList = t, this.matches = null
                }
                return _createClass(e, [{
                    key: "clone",
                    value: function() {
                        return new e(this.queryList)
                    }
                }, {
                    key: "setDirty",
                    value: function() {
                        this.queryList.setDirty()
                    }
                }]), e
            }(),
            es = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    _classCallCheck(this, e), this.queries = t
                }
                return _createClass(e, [{
                    key: "createEmbeddedView",
                    value: function(t) {
                        var n = t.queries;
                        if (null !== n) {
                            for (var r = null !== t.contentQueries ? t.contentQueries[0] : n.length, i = [], a = 0; a < r; a++) {
                                var o = n.getByIndex(a);
                                i.push(this.queries[o.indexInDeclarationView].clone())
                            }
                            return new e(i)
                        }
                        return null
                    }
                }, {
                    key: "insertView",
                    value: function(e) {
                        this.dirtyQueriesWithMatches(e)
                    }
                }, {
                    key: "detachView",
                    value: function(e) {
                        this.dirtyQueriesWithMatches(e)
                    }
                }, {
                    key: "dirtyQueriesWithMatches",
                    value: function(e) {
                        for (var t = 0; t < this.queries.length; t++) null !== ss(e, t).matches && this.queries[t].setDirty()
                    }
                }]), e
            }(),
            ts = function e(t, n, r) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                _classCallCheck(this, e), this.predicate = t, this.descendants = n, this.isStatic = r, this.read = i
            },
            ns = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    _classCallCheck(this, e), this.queries = t
                }
                return _createClass(e, [{
                    key: "elementStart",
                    value: function(e, t) {
                        for (var n = 0; n < this.queries.length; n++) this.queries[n].elementStart(e, t)
                    }
                }, {
                    key: "elementEnd",
                    value: function(e) {
                        for (var t = 0; t < this.queries.length; t++) this.queries[t].elementEnd(e)
                    }
                }, {
                    key: "embeddedTView",
                    value: function(t) {
                        for (var n = null, r = 0; r < this.length; r++) {
                            var i = null !== n ? n.length : 0,
                                a = this.getByIndex(r).embeddedTView(t, i);
                            a && (a.indexInDeclarationView = r, null !== n ? n.push(a) : n = [a])
                        }
                        return null !== n ? new e(n) : null
                    }
                }, {
                    key: "template",
                    value: function(e, t) {
                        for (var n = 0; n < this.queries.length; n++) this.queries[n].template(e, t)
                    }
                }, {
                    key: "getByIndex",
                    value: function(e) {
                        return this.queries[e]
                    }
                }, {
                    key: "length",
                    get: function() {
                        return this.queries.length
                    }
                }, {
                    key: "track",
                    value: function(e) {
                        this.queries.push(e)
                    }
                }]), e
            }(),
            rs = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                    _classCallCheck(this, e), this.metadata = t, this.matches = null, this.indexInDeclarationView = -1, this.crossesNgTemplate = !1, this._appliesToNextNode = !0, this._declarationNodeIndex = n
                }
                return _createClass(e, [{
                    key: "elementStart",
                    value: function(e, t) {
                        this.isApplyingToNode(t) && this.matchTNode(e, t)
                    }
                }, {
                    key: "elementEnd",
                    value: function(e) {
                        this._declarationNodeIndex === e.index && (this._appliesToNextNode = !1)
                    }
                }, {
                    key: "template",
                    value: function(e, t) {
                        this.elementStart(e, t)
                    }
                }, {
                    key: "embeddedTView",
                    value: function(t, n) {
                        return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, n), new e(this.metadata)) : null
                    }
                }, {
                    key: "isApplyingToNode",
                    value: function(e) {
                        if (this._appliesToNextNode && !1 === this.metadata.descendants) {
                            for (var t = this._declarationNodeIndex, n = e.parent; null !== n && 4 === n.type && n.index !== t;) n = n.parent;
                            return t === (null !== n ? n.index : -1)
                        }
                        return this._appliesToNextNode
                    }
                }, {
                    key: "matchTNode",
                    value: function(e, t) {
                        if (Array.isArray(this.metadata.predicate))
                            for (var n = this.metadata.predicate, r = 0; r < n.length; r++) this.matchTNodeWithReadOption(e, t, is(t, n[r]));
                        else {
                            var i = this.metadata.predicate;
                            i === Ro ? 0 === t.type && this.matchTNodeWithReadOption(e, t, -1) : this.matchTNodeWithReadOption(e, t, qn(t, e, i, !1, !1))
                        }
                    }
                }, {
                    key: "matchTNodeWithReadOption",
                    value: function(e, t, n) {
                        if (null !== n) {
                            var r = this.metadata.read;
                            if (null !== r)
                                if (r === uo || r === No || r === Ro && 0 === t.type) this.addMatch(t.index, -2);
                                else {
                                    var i = qn(t, e, r, !1, !1);
                                    null !== i && this.addMatch(t.index, i)
                                }
                            else this.addMatch(t.index, n)
                        }
                    }
                }, {
                    key: "addMatch",
                    value: function(e, t) {
                        null === this.matches ? this.matches = [e, t] : this.matches.push(e, t)
                    }
                }]), e
            }();

        function is(e, t) {
            var n = e.localNames;
            if (null !== n)
                for (var r = 0; r < n.length; r += 2)
                    if (n[r] === t) return n[r + 1];
            return null
        }

        function as(e, t, n, r) {
            return -1 === n ? function(e, t) {
                return 3 === e.type || 4 === e.type ? ji(uo, e, t) : 0 === e.type ? Fi(Ro, uo, e, t) : null
            }(t, e) : -2 === n ? function(e, t, n) {
                return n === uo ? ji(uo, t, e) : n === Ro ? Fi(Ro, uo, t, e) : n === No ? Mi(No, uo, t, e) : void 0
            }(e, t, r) : Qn(e, e[1], n, t)
        }

        function os(e, t, n, r) {
            var i = t[5].queries[r];
            if (null === i.matches) {
                for (var a = e.data, o = n.matches, s = [], u = 0; u < o.length; u += 2) {
                    var l = o[u];
                    s.push(l < 0 ? null : as(t, a[l], o[u + 1], n.metadata.read))
                }
                i.matches = s
            }
            return i.matches
        }

        function ss(e, t) {
            return e.queries.getByIndex(t)
        }
        var us = new He("Application Initializer"),
            ls = function() {
                var e = function() {
                    function e(t) {
                        var n = this;
                        _classCallCheck(this, e), this.appInits = t, this.initialized = !1, this.done = !1, this.donePromise = new Promise((function(e, t) {
                            n.resolve = e, n.reject = t
                        }))
                    }
                    return _createClass(e, [{
                        key: "runInitializers",
                        value: function() {
                            var e = this;
                            if (!this.initialized) {
                                var t = [],
                                    n = function() {
                                        e.done = !0, e.resolve()
                                    };
                                if (this.appInits)
                                    for (var r = 0; r < this.appInits.length; r++) {
                                        var i = this.appInits[r]();
                                        Ca(i) && t.push(i)
                                    }
                                Promise.all(t).then((function() {
                                    n()
                                })).catch((function(t) {
                                    e.reject(t)
                                })), 0 === t.length && n(), this.initialized = !0
                            }
                        }
                    }]), e
                }();
                return e.\u0275fac = function(t) {
                    return new(t || e)(Ge(us, 8))
                }, e.\u0275prov = fe({
                    token: e,
                    factory: e.\u0275fac
                }), e
            }(),
            cs = new He("AppId"),
            hs = {
                provide: cs,
                useFactory: function() {
                    return "".concat(fs()).concat(fs()).concat(fs())
                },
                deps: []
            };

        function fs() {
            return String.fromCharCode(97 + Math.floor(25 * Math.random()))
        }
        var ds = new He("Platform Initializer"),
            vs = new He("Platform ID"),
            ps = new He("appBootstrapListener"),
            ys = function() {
                var e = function() {
                    function e() {
                        _classCallCheck(this, e)
                    }
                    return _createClass(e, [{
                        key: "log",
                        value: function(e) {
                            console.log(e)
                        }
                    }, {
                        key: "warn",
                        value: function(e) {
                            console.warn(e)
                        }
                    }]), e
                }();
                return e.\u0275fac = function(t) {
                    return new(t || e)
                }, e.\u0275prov = fe({
                    token: e,
                    factory: e.\u0275fac
                }), e
            }(),
            ms = new He("LocaleId"),
            gs = new He("DefaultCurrencyCode"),
            _s = function e(t, n) {
                _classCallCheck(this, e), this.ngModuleFactory = t, this.componentFactories = n
            },
            ks = function(e) {
                return new Go(e)
            },
            bs = ks,
            Cs = function(e) {
                return Promise.resolve(ks(e))
            },
            ws = function(e) {
                var t = ks(e),
                    n = Pn(bt(e).declarations).reduce((function(e, t) {
                        var n = _t(t);
                        return n && e.push(new Uo(n)), e
                    }), []);
                return new _s(t, n)
            },
            Ss = ws,
            Es = function(e) {
                return Promise.resolve(ws(e))
            },
            Ts = function() {
                var e = function() {
                    function e() {
                        _classCallCheck(this, e), this.compileModuleSync = bs, this.compileModuleAsync = Cs, this.compileModuleAndAllComponentsSync = Ss, this.compileModuleAndAllComponentsAsync = Es
                    }
                    return _createClass(e, [{
                        key: "clearCache",
                        value: function() {}
                    }, {
                        key: "clearCacheFor",
                        value: function(e) {}
                    }, {
                        key: "getModuleId",
                        value: function(e) {}
                    }]), e
                }();
                return e.\u0275fac = function(t) {
                    return new(t || e)
                }, e.\u0275prov = fe({
                    token: e,
                    factory: e.\u0275fac
                }), e
            }(),
            xs = new He("compilerOptions"),
            As = Promise.resolve(0);

        function Os(e) {
            "undefined" == typeof Zone ? As.then((function() {
                e && e.apply(null, null)
            })) : Zone.current.scheduleMicroTask("scheduleMicrotask", e)
        }
        var Is = function() {
            function e(t) {
                var n, r, i = t.enableLongStackTrace,
                    a = void 0 !== i && i,
                    o = t.shouldCoalesceEventChangeDetection,
                    s = void 0 !== o && o;
                if (_classCallCheck(this, e), this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new Jo(!1), this.onMicrotaskEmpty = new Jo(!1), this.onStable = new Jo(!1), this.onError = new Jo(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
                Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec)), a && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), this.shouldCoalesceEventChangeDetection = s, this.lastRequestAnimationFrameId = -1, this.nativeRequestAnimationFrame = function() {
                    var e = Pe.requestAnimationFrame,
                        t = Pe.cancelAnimationFrame;
                    if ("undefined" != typeof Zone && e && t) {
                        var n = e[Zone.__symbol__("OriginalDelegate")];
                        n && (e = n);
                        var r = t[Zone.__symbol__("OriginalDelegate")];
                        r && (t = r)
                    }
                    return {
                        nativeRequestAnimationFrame: e,
                        nativeCancelAnimationFrame: t
                    }
                }().nativeRequestAnimationFrame, r = !!(n = this).shouldCoalesceEventChangeDetection && n.nativeRequestAnimationFrame && function() {
                    ! function(e) {
                        -1 === e.lastRequestAnimationFrameId && (e.lastRequestAnimationFrameId = e.nativeRequestAnimationFrame.call(Pe, (function() {
                            e.lastRequestAnimationFrameId = -1, Ds(e), Ns(e)
                        })), Ds(e))
                    }(n)
                }, n._inner = n._inner.fork({
                    name: "angular",
                    properties: {
                        isAngularZone: !0,
                        maybeDelayChangeDetection: r
                    },
                    onInvokeTask: function(e, t, i, a, o, s) {
                        try {
                            return js(n), e.invokeTask(i, a, o, s)
                        } finally {
                            r && "eventTask" === a.type && r(), Fs(n)
                        }
                    },
                    onInvoke: function(e, t, r, i, a, o, s) {
                        try {
                            return js(n), e.invoke(r, i, a, o, s)
                        } finally {
                            Fs(n)
                        }
                    },
                    onHasTask: function(e, t, r, i) {
                        e.hasTask(r, i), t === r && ("microTask" == i.change ? (n._hasPendingMicrotasks = i.microTask, Ds(n), Ns(n)) : "macroTask" == i.change && (n.hasPendingMacrotasks = i.macroTask))
                    },
                    onHandleError: function(e, t, r, i) {
                        return e.handleError(r, i), n.runOutsideAngular((function() {
                            return n.onError.emit(i)
                        })), !1
                    }
                })
            }
            return _createClass(e, [{
                key: "run",
                value: function(e, t, n) {
                    return this._inner.run(e, t, n)
                }
            }, {
                key: "runTask",
                value: function(e, t, n, r) {
                    var i = this._inner,
                        a = i.scheduleEventTask("NgZoneEvent: " + r, e, Ps, Rs, Rs);
                    try {
                        return i.runTask(a, t, n)
                    } finally {
                        i.cancelTask(a)
                    }
                }
            }, {
                key: "runGuarded",
                value: function(e, t, n) {
                    return this._inner.runGuarded(e, t, n)
                }
            }, {
                key: "runOutsideAngular",
                value: function(e) {
                    return this._outer.run(e)
                }
            }], [{
                key: "isInAngularZone",
                value: function() {
                    return !0 === Zone.current.get("isAngularZone")
                }
            }, {
                key: "assertInAngularZone",
                value: function() {
                    if (!e.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!")
                }
            }, {
                key: "assertNotInAngularZone",
                value: function() {
                    if (e.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!")
                }
            }]), e
        }();

        function Rs() {}
        var Ps = {};

        function Ns(e) {
            if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable) try {
                e._nesting++, e.onMicrotaskEmpty.emit(null)
            } finally {
                if (e._nesting--, !e.hasPendingMicrotasks) try {
                    e.runOutsideAngular((function() {
                        return e.onStable.emit(null)
                    }))
                } finally {
                    e.isStable = !0
                }
            }
        }

        function Ds(e) {
            e.hasPendingMicrotasks = !!(e._hasPendingMicrotasks || e.shouldCoalesceEventChangeDetection && -1 !== e.lastRequestAnimationFrameId)
        }

        function js(e) {
            e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null))
        }

        function Fs(e) {
            e._nesting--, Ns(e)
        }
        var Ms, Ls = function() {
                function e() {
                    _classCallCheck(this, e), this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new Jo, this.onMicrotaskEmpty = new Jo, this.onStable = new Jo, this.onError = new Jo
                }
                return _createClass(e, [{
                    key: "run",
                    value: function(e, t, n) {
                        return e.apply(t, n)
                    }
                }, {
                    key: "runGuarded",
                    value: function(e, t, n) {
                        return e.apply(t, n)
                    }
                }, {
                    key: "runOutsideAngular",
                    value: function(e) {
                        return e()
                    }
                }, {
                    key: "runTask",
                    value: function(e, t, n, r) {
                        return e.apply(t, n)
                    }
                }]), e
            }(),
            Us = function() {
                var e = function() {
                    function e(t) {
                        var n = this;
                        _classCallCheck(this, e), this._ngZone = t, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), t.run((function() {
                            n.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone")
                        }))
                    }
                    return _createClass(e, [{
                        key: "_watchAngularEvents",
                        value: function() {
                            var e = this;
                            this._ngZone.onUnstable.subscribe({
                                next: function() {
                                    e._didWork = !0, e._isZoneStable = !1
                                }
                            }), this._ngZone.runOutsideAngular((function() {
                                e._ngZone.onStable.subscribe({
                                    next: function() {
                                        Is.assertNotInAngularZone(), Os((function() {
                                            e._isZoneStable = !0, e._runCallbacksIfReady()
                                        }))
                                    }
                                })
                            }))
                        }
                    }, {
                        key: "increasePendingRequestCount",
                        value: function() {
                            return this._pendingCount += 1, this._didWork = !0, this._pendingCount
                        }
                    }, {
                        key: "decreasePendingRequestCount",
                        value: function() {
                            if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
                            return this._runCallbacksIfReady(), this._pendingCount
                        }
                    }, {
                        key: "isStable",
                        value: function() {
                            return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
                        }
                    }, {
                        key: "_runCallbacksIfReady",
                        value: function() {
                            var e = this;
                            if (this.isStable()) Os((function() {
                                for (; 0 !== e._callbacks.length;) {
                                    var t = e._callbacks.pop();
                                    clearTimeout(t.timeoutId), t.doneCb(e._didWork)
                                }
                                e._didWork = !1
                            }));
                            else {
                                var t = this.getPendingTasks();
                                this._callbacks = this._callbacks.filter((function(e) {
                                    return !e.updateCb || !e.updateCb(t) || (clearTimeout(e.timeoutId), !1)
                                })), this._didWork = !0
                            }
                        }
                    }, {
                        key: "getPendingTasks",
                        value: function() {
                            return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map((function(e) {
                                return {
                                    source: e.source,
                                    creationLocation: e.creationLocation,
                                    data: e.data
                                }
                            })) : []
                        }
                    }, {
                        key: "addCallback",
                        value: function(e, t, n) {
                            var r = this,
                                i = -1;
                            t && t > 0 && (i = setTimeout((function() {
                                r._callbacks = r._callbacks.filter((function(e) {
                                    return e.timeoutId !== i
                                })), e(r._didWork, r.getPendingTasks())
                            }), t)), this._callbacks.push({
                                doneCb: e,
                                timeoutId: i,
                                updateCb: n
                            })
                        }
                    }, {
                        key: "whenStable",
                        value: function(e, t, n) {
                            if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
                            this.addCallback(e, t, n), this._runCallbacksIfReady()
                        }
                    }, {
                        key: "getPendingRequestCount",
                        value: function() {
                            return this._pendingCount
                        }
                    }, {
                        key: "findProviders",
                        value: function(e, t, n) {
                            return []
                        }
                    }]), e
                }();
                return e.\u0275fac = function(t) {
                    return new(t || e)(Ge(Is))
                }, e.\u0275prov = fe({
                    token: e,
                    factory: e.\u0275fac
                }), e
            }(),
            Hs = function() {
                var e = function() {
                    function e() {
                        _classCallCheck(this, e), this._applications = new Map, Vs.addToWindow(this)
                    }
                    return _createClass(e, [{
                        key: "registerApplication",
                        value: function(e, t) {
                            this._applications.set(e, t)
                        }
                    }, {
                        key: "unregisterApplication",
                        value: function(e) {
                            this._applications.delete(e)
                        }
                    }, {
                        key: "unregisterAllApplications",
                        value: function() {
                            this._applications.clear()
                        }
                    }, {
                        key: "getTestability",
                        value: function(e) {
                            return this._applications.get(e) || null
                        }
                    }, {
                        key: "getAllTestabilities",
                        value: function() {
                            return Array.from(this._applications.values())
                        }
                    }, {
                        key: "getAllRootElements",
                        value: function() {
                            return Array.from(this._applications.keys())
                        }
                    }, {
                        key: "findTestabilityInTree",
                        value: function(e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            return Vs.findTestabilityInTree(this, e, t)
                        }
                    }]), e
                }();
                return e.\u0275fac = function(t) {
                    return new(t || e)
                }, e.\u0275prov = fe({
                    token: e,
                    factory: e.\u0275fac
                }), e
            }(),
            Vs = new(function() {
                function e() {
                    _classCallCheck(this, e)
                }
                return _createClass(e, [{
                    key: "addToWindow",
                    value: function(e) {}
                }, {
                    key: "findTestabilityInTree",
                    value: function(e, t, n) {
                        return null
                    }
                }]), e
            }()),
            zs = function(e, t, n) {
                var r = new Go(n);
                if (0 === ra.size) return Promise.resolve(r);
                var i, a, o = (i = e.get(xs, []).concat(t).map((function(e) {
                    return e.providers
                })), a = [], i.forEach((function(e) {
                    return e && a.push.apply(a, _toConsumableArray(e))
                })), a);
                if (0 === o.length) return Promise.resolve(r);
                var s = function() {
                        var e = Pe.ng;
                        if (!e || !e.\u0275compilerFacade) throw new Error("Angular JIT compilation failed: '@angular/compiler' not loaded!\n  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.\n  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?\n  - Alternatively provide the compiler with 'import \"@angular/compiler\";' before bootstrapping.");
                        return e.\u0275compilerFacade
                    }(),
                    u = ta.create({
                        providers: o
                    }).get(s.ResourceLoader);
                return function(e) {
                    var t = [],
                        n = new Map;

                    function r(e) {
                        var t = n.get(e);
                        if (!t) {
                            var r = function(e) {
                                return Promise.resolve(u.get(e))
                            }(e);
                            n.set(e, t = r.then(aa))
                        }
                        return t
                    }
                    return ra.forEach((function(e, n) {
                        var i = [];
                        e.templateUrl && i.push(r(e.templateUrl).then((function(t) {
                            e.template = t
                        })));
                        var a = e.styleUrls,
                            o = e.styles || (e.styles = []),
                            s = e.styles.length;
                        a && a.forEach((function(t, n) {
                            o.push(""), i.push(r(t).then((function(r) {
                                o[s + n] = r, a.splice(a.indexOf(t), 1), 0 == a.length && (e.styleUrls = void 0)
                            })))
                        }));
                        var u = Promise.all(i).then((function() {
                            return function(e) {
                                ia.delete(e)
                            }(n)
                        }));
                        t.push(u)
                    })), ra = new Map, Promise.all(t).then((function() {}))
                }().then((function() {
                    return r
                }))
            },
            Bs = new He("AllowMultipleToken"),
            qs = function e(t, n) {
                _classCallCheck(this, e), this.name = t, this.token = n
            };

        function Qs(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                r = "Platform: ".concat(t),
                i = new He(r);
            return function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    a = Ws();
                if (!a || a.injector.get(Bs, !1))
                    if (e) e(n.concat(t).concat({
                        provide: i,
                        useValue: !0
                    }));
                    else {
                        var o = n.concat(t).concat({
                            provide: i,
                            useValue: !0
                        }, {
                            provide: Vi,
                            useValue: "platform"
                        });
                        ! function(e) {
                            if (Ms && !Ms.destroyed && !Ms.injector.get(Bs, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                            Ms = e.get(Ks);
                            var t = e.get(ds, null);
                            t && t.forEach((function(e) {
                                return e()
                            }))
                        }(ta.create({
                            providers: o,
                            name: r
                        }))
                    } return function(e) {
                    var t = Ws();
                    if (!t) throw new Error("No platform exists!");
                    if (!t.injector.get(e, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
                    return t
                }(i)
            }
        }

        function Ws() {
            return Ms && !Ms.destroyed ? Ms : null
        }
        var Ks = function() {
            var e = function() {
                function e(t) {
                    _classCallCheck(this, e), this._injector = t, this._modules = [], this._destroyListeners = [], this._destroyed = !1
                }
                return _createClass(e, [{
                    key: "bootstrapModuleFactory",
                    value: function(e, t) {
                        var n, r, i = this,
                            a = (n = t ? t.ngZone : void 0, r = t && t.ngZoneEventCoalescing || !1, "noop" === n ? new Ls : ("zone.js" === n ? void 0 : n) || new Is({
                                enableLongStackTrace: Yn(),
                                shouldCoalesceEventChangeDetection: r
                            })),
                            o = [{
                                provide: Is,
                                useValue: a
                            }];
                        return a.run((function() {
                            var t = ta.create({
                                    providers: o,
                                    parent: i.injector,
                                    name: e.moduleType.name
                                }),
                                n = e.create(t),
                                r = n.injector.get(Xn, null);
                            if (!r) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                            return n.onDestroy((function() {
                                    return $s(i._modules, n)
                                })), a.runOutsideAngular((function() {
                                    return a.onError.subscribe({
                                        next: function(e) {
                                            r.handleError(e)
                                        }
                                    })
                                })),
                                function(e, t, r) {
                                    try {
                                        var a = ((o = n.injector.get(ls)).runInitializers(), o.donePromise.then((function() {
                                            return Wo(n.injector.get(ms, "en-US") || "en-US"), i._moduleDoBootstrap(n), n
                                        })));
                                        return Ca(a) ? a.catch((function(n) {
                                            throw t.runOutsideAngular((function() {
                                                return e.handleError(n)
                                            })), n
                                        })) : a
                                    } catch (s) {
                                        throw t.runOutsideAngular((function() {
                                            return e.handleError(s)
                                        })), s
                                    }
                                    var o
                                }(r, a)
                        }))
                    }
                }, {
                    key: "bootstrapModule",
                    value: function(e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            r = Zs({}, n);
                        return zs(this.injector, r, e).then((function(e) {
                            return t.bootstrapModuleFactory(e, r)
                        }))
                    }
                }, {
                    key: "_moduleDoBootstrap",
                    value: function(e) {
                        var t = e.injector.get(Js);
                        if (e._bootstrapComponents.length > 0) e._bootstrapComponents.forEach((function(e) {
                            return t.bootstrap(e)
                        }));
                        else {
                            if (!e.instance.ngDoBootstrap) throw new Error("The module ".concat(Ce(e.instance.constructor), ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. ') + "Please define one of these.");
                            e.instance.ngDoBootstrap(t)
                        }
                        this._modules.push(e)
                    }
                }, {
                    key: "onDestroy",
                    value: function(e) {
                        this._destroyListeners.push(e)
                    }
                }, {
                    key: "injector",
                    get: function() {
                        return this._injector
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        if (this._destroyed) throw new Error("The platform has already been destroyed!");
                        this._modules.slice().forEach((function(e) {
                            return e.destroy()
                        })), this._destroyListeners.forEach((function(e) {
                            return e()
                        })), this._destroyed = !0
                    }
                }, {
                    key: "destroyed",
                    get: function() {
                        return this._destroyed
                    }
                }]), e
            }();
            return e.\u0275fac = function(t) {
                return new(t || e)(Ge(ta))
            }, e.\u0275prov = fe({
                token: e,
                factory: e.\u0275fac
            }), e
        }();

        function Zs(e, t) {
            return Array.isArray(t) ? t.reduce(Zs, e) : Object.assign(Object.assign({}, e), t)
        }
        var Gs, Js = ((Gs = function() {
            function e(t, n, r, i, a, o) {
                var s = this;
                _classCallCheck(this, e), this._zone = t, this._console = n, this._injector = r, this._exceptionHandler = i, this._componentFactoryResolver = a, this._initStatus = o, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = Yn(), this._zone.onMicrotaskEmpty.subscribe({
                    next: function() {
                        s._zone.run((function() {
                            s.tick()
                        }))
                    }
                });
                var u = new C((function(e) {
                        s._stable = s._zone.isStable && !s._zone.hasPendingMacrotasks && !s._zone.hasPendingMicrotasks, s._zone.runOutsideAngular((function() {
                            e.next(s._stable), e.complete()
                        }))
                    })),
                    l = new C((function(e) {
                        var t;
                        s._zone.runOutsideAngular((function() {
                            t = s._zone.onStable.subscribe((function() {
                                Is.assertNotInAngularZone(), Os((function() {
                                    s._stable || s._zone.hasPendingMacrotasks || s._zone.hasPendingMicrotasks || (s._stable = !0, e.next(!0))
                                }))
                            }))
                        }));
                        var n = s._zone.onUnstable.subscribe((function() {
                            Is.assertInAngularZone(), s._stable && (s._stable = !1, s._zone.runOutsideAngular((function() {
                                e.next(!1)
                            })))
                        }));
                        return function() {
                            t.unsubscribe(), n.unsubscribe()
                        }
                    }));
                this.isStable = G(u, l.pipe((function(e) {
                    return J()((t = ne, function(e) {
                        var n;
                        n = "function" == typeof t ? t : function() {
                            return t
                        };
                        var r = Object.create(e, ee);
                        return r.source = e, r.subjectFactory = n, r
                    })(e));
                    var t
                })))
            }
            return _createClass(e, [{
                key: "bootstrap",
                value: function(e, t) {
                    var n, r = this;
                    if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
                    n = e instanceof ao ? e : this._componentFactoryResolver.resolveComponentFactory(e), this.componentTypes.push(n.componentType);
                    var i = n.isBoundToModule ? void 0 : this._injector.get(Ye),
                        a = n.create(ta.NULL, [], t || n.selector, i);
                    a.onDestroy((function() {
                        r._unloadComponent(a)
                    }));
                    var o = a.injector.get(Us, null);
                    return o && a.injector.get(Hs).registerApplication(a.location.nativeElement, o), this._loadComponent(a), Yn() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."), a
                }
            }, {
                key: "tick",
                value: function() {
                    var e = this;
                    if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");
                    try {
                        this._runningTick = !0;
                        var t, n = _createForOfIteratorHelper(this._views);
                        try {
                            for (n.s(); !(t = n.n()).done;) t.value.detectChanges()
                        } catch (a) {
                            n.e(a)
                        } finally {
                            n.f()
                        }
                        if (this._enforceNoNewChanges) {
                            var r, i = _createForOfIteratorHelper(this._views);
                            try {
                                for (i.s(); !(r = i.n()).done;) r.value.checkNoChanges()
                            } catch (a) {
                                i.e(a)
                            } finally {
                                i.f()
                            }
                        }
                    } catch (o) {
                        this._zone.runOutsideAngular((function() {
                            return e._exceptionHandler.handleError(o)
                        }))
                    } finally {
                        this._runningTick = !1
                    }
                }
            }, {
                key: "attachView",
                value: function(e) {
                    var t = e;
                    this._views.push(t), t.attachToAppRef(this)
                }
            }, {
                key: "detachView",
                value: function(e) {
                    var t = e;
                    $s(this._views, t), t.detachFromAppRef()
                }
            }, {
                key: "_loadComponent",
                value: function(e) {
                    this.attachView(e.hostView), this.tick(), this.components.push(e), this._injector.get(ps, []).concat(this._bootstrapListeners).forEach((function(t) {
                        return t(e)
                    }))
                }
            }, {
                key: "_unloadComponent",
                value: function(e) {
                    this.detachView(e.hostView), $s(this.components, e)
                }
            }, {
                key: "ngOnDestroy",
                value: function() {
                    this._views.slice().forEach((function(e) {
                        return e.destroy()
                    }))
                }
            }, {
                key: "viewCount",
                get: function() {
                    return this._views.length
                }
            }]), e
        }()).\u0275fac = function(e) {
            return new(e || Gs)(Ge(Is), Ge(ys), Ge(ta), Ge(Xn), Ge(so), Ge(ls))
        }, Gs.\u0275prov = fe({
            token: Gs,
            factory: Gs.\u0275fac
        }), Gs);

        function $s(e, t) {
            var n = e.indexOf(t);
            n > -1 && e.splice(n, 1)
        }
        var Xs = function e() {
                _classCallCheck(this, e)
            },
            Ys = function e() {
                _classCallCheck(this, e)
            },
            eu = {
                factoryPathPrefix: "",
                factoryPathSuffix: ".ngfactory"
            },
            tu = function() {
                var e = function() {
                    function e(t, n) {
                        _classCallCheck(this, e), this._compiler = t, this._config = n || eu
                    }
                    return _createClass(e, [{
                        key: "load",
                        value: function(e) {
                            return this.loadAndCompile(e)
                        }
                    }, {
                        key: "loadAndCompile",
                        value: function(e) {
                            var t = this,
                                r = _slicedToArray(e.split("#"), 2),
                                i = r[0],
                                a = r[1];
                            return void 0 === a && (a = "default"), n("zn8P")(i).then((function(e) {
                                return e[a]
                            })).then((function(e) {
                                return nu(e, i, a)
                            })).then((function(e) {
                                return t._compiler.compileModuleAsync(e)
                            }))
                        }
                    }, {
                        key: "loadFactory",
                        value: function(e) {
                            var t = _slicedToArray(e.split("#"), 2),
                                r = t[0],
                                i = t[1],
                                a = "NgFactory";
                            return void 0 === i && (i = "default", a = ""), n("zn8P")(this._config.factoryPathPrefix + r + this._config.factoryPathSuffix).then((function(e) {
                                return e[i + a]
                            })).then((function(e) {
                                return nu(e, r, i)
                            }))
                        }
                    }]), e
                }();
                return e.\u0275fac = function(t) {
                    return new(t || e)(Ge(Ts), Ge(Ys, 8))
                }, e.\u0275prov = fe({
                    token: e,
                    factory: e.\u0275fac
                }), e
            }();

        function nu(e, t, n) {
            if (!e) throw new Error("Cannot find '".concat(n, "' in '").concat(t, "'"));
            return e
        }
        var ru = Qs(null, "core", [{
                provide: vs,
                useValue: "unknown"
            }, {
                provide: Ks,
                deps: [ta]
            }, {
                provide: Hs,
                deps: []
            }, {
                provide: ys,
                deps: []
            }]),
            iu = [{
                provide: Js,
                useClass: Js,
                deps: [Is, ys, ta, Xn, so, ls]
            }, {
                provide: Lo,
                deps: [Is],
                useFactory: function(e) {
                    var t = [];
                    return e.onStable.subscribe((function() {
                            for (; t.length;) t.pop()()
                        })),
                        function(e) {
                            t.push(e)
                        }
                }
            }, {
                provide: ls,
                useClass: ls,
                deps: [
                    [new oe, us]
                ]
            }, {
                provide: Ts,
                useClass: Ts,
                deps: []
            }, hs, {
                provide: To,
                useFactory: function() {
                    return Oo
                },
                deps: []
            }, {
                provide: xo,
                useFactory: function() {
                    return Io
                },
                deps: []
            }, {
                provide: ms,
                useFactory: function(e) {
                    return Wo(e = e || "undefined" != typeof $localize && $localize.locale || "en-US"), e
                },
                deps: [
                    [new ae(ms), new oe, new ue]
                ]
            }, {
                provide: gs,
                useValue: "USD"
            }],
            au = function() {
                var e = function e(t) {
                    _classCallCheck(this, e)
                };
                return e.\u0275mod = yt({
                    type: e
                }), e.\u0275inj = de({
                    factory: function(t) {
                        return new(t || e)(Ge(Js))
                    },
                    providers: iu
                }), e
            }(),
            ou = null;

        function su() {
            return ou
        }
        var uu, lu = new He("DocumentToken"),
            cu = ((uu = function e() {
                _classCallCheck(this, e)
            }).\u0275fac = function(e) {
                return new(e || uu)
            }, uu.\u0275prov = fe({
                factory: hu,
                token: uu,
                providedIn: "platform"
            }), uu);

        function hu() {
            return Ge(vu)
        }
        var fu, du = new He("Location Initialized"),
            vu = ((fu = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e) {
                    var r;
                    return _classCallCheck(this, n), (r = t.call(this))._doc = e, r._init(), r
                }
                return _createClass(n, [{
                    key: "_init",
                    value: function() {
                        this.location = su().getLocation(), this._history = su().getHistory()
                    }
                }, {
                    key: "getBaseHrefFromDOM",
                    value: function() {
                        return su().getBaseHref(this._doc)
                    }
                }, {
                    key: "onPopState",
                    value: function(e) {
                        su().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", e, !1)
                    }
                }, {
                    key: "onHashChange",
                    value: function(e) {
                        su().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", e, !1)
                    }
                }, {
                    key: "href",
                    get: function() {
                        return this.location.href
                    }
                }, {
                    key: "protocol",
                    get: function() {
                        return this.location.protocol
                    }
                }, {
                    key: "hostname",
                    get: function() {
                        return this.location.hostname
                    }
                }, {
                    key: "port",
                    get: function() {
                        return this.location.port
                    }
                }, {
                    key: "pathname",
                    get: function() {
                        return this.location.pathname
                    },
                    set: function(e) {
                        this.location.pathname = e
                    }
                }, {
                    key: "search",
                    get: function() {
                        return this.location.search
                    }
                }, {
                    key: "hash",
                    get: function() {
                        return this.location.hash
                    }
                }, {
                    key: "pushState",
                    value: function(e, t, n) {
                        pu() ? this._history.pushState(e, t, n) : this.location.hash = n
                    }
                }, {
                    key: "replaceState",
                    value: function(e, t, n) {
                        pu() ? this._history.replaceState(e, t, n) : this.location.hash = n
                    }
                }, {
                    key: "forward",
                    value: function() {
                        this._history.forward()
                    }
                }, {
                    key: "back",
                    value: function() {
                        this._history.back()
                    }
                }, {
                    key: "getState",
                    value: function() {
                        return this._history.state
                    }
                }]), n
            }(cu)).\u0275fac = function(e) {
                return new(e || fu)(Ge(lu))
            }, fu.\u0275prov = fe({
                factory: yu,
                token: fu,
                providedIn: "platform"
            }), fu);

        function pu() {
            return !!window.history.pushState
        }

        function yu() {
            return new vu(Ge(lu))
        }

        function mu(e, t) {
            if (0 == e.length) return t;
            if (0 == t.length) return e;
            var n = 0;
            return e.endsWith("/") && n++, t.startsWith("/") && n++, 2 == n ? e + t.substring(1) : 1 == n ? e + t : e + "/" + t
        }

        function gu(e) {
            var t = e.match(/#|\?|$/),
                n = t && t.index || e.length;
            return e.slice(0, n - ("/" === e[n - 1] ? 1 : 0)) + e.slice(n)
        }

        function _u(e) {
            return e && "?" !== e[0] ? "?" + e : e
        }
        var ku, bu = ((ku = function e() {
            _classCallCheck(this, e)
        }).\u0275fac = function(e) {
            return new(e || ku)
        }, ku.\u0275prov = fe({
            factory: Cu,
            token: ku,
            providedIn: "root"
        }), ku);

        function Cu(e) {
            var t = Ge(lu).location;
            return new xu(Ge(cu), t && t.origin || "")
        }
        var wu, Su, Eu, Tu = new He("appBaseHref"),
            xu = ((Eu = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r) {
                    var i;
                    if (_classCallCheck(this, n), (i = t.call(this))._platformLocation = e, null == r && (r = i._platformLocation.getBaseHrefFromDOM()), null == r) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
                    return i._baseHref = r, _possibleConstructorReturn(i)
                }
                return _createClass(n, [{
                    key: "onPopState",
                    value: function(e) {
                        this._platformLocation.onPopState(e), this._platformLocation.onHashChange(e)
                    }
                }, {
                    key: "getBaseHref",
                    value: function() {
                        return this._baseHref
                    }
                }, {
                    key: "prepareExternalUrl",
                    value: function(e) {
                        return mu(this._baseHref, e)
                    }
                }, {
                    key: "path",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = this._platformLocation.pathname + _u(this._platformLocation.search),
                            n = this._platformLocation.hash;
                        return n && e ? "".concat(t).concat(n) : t
                    }
                }, {
                    key: "pushState",
                    value: function(e, t, n, r) {
                        var i = this.prepareExternalUrl(n + _u(r));
                        this._platformLocation.pushState(e, t, i)
                    }
                }, {
                    key: "replaceState",
                    value: function(e, t, n, r) {
                        var i = this.prepareExternalUrl(n + _u(r));
                        this._platformLocation.replaceState(e, t, i)
                    }
                }, {
                    key: "forward",
                    value: function() {
                        this._platformLocation.forward()
                    }
                }, {
                    key: "back",
                    value: function() {
                        this._platformLocation.back()
                    }
                }]), n
            }(bu)).\u0275fac = function(e) {
                return new(e || Eu)(Ge(cu), Ge(Tu, 8))
            }, Eu.\u0275prov = fe({
                token: Eu,
                factory: Eu.\u0275fac
            }), Eu),
            Au = ((Su = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r) {
                    var i;
                    return _classCallCheck(this, n), (i = t.call(this))._platformLocation = e, i._baseHref = "", null != r && (i._baseHref = r), i
                }
                return _createClass(n, [{
                    key: "onPopState",
                    value: function(e) {
                        this._platformLocation.onPopState(e), this._platformLocation.onHashChange(e)
                    }
                }, {
                    key: "getBaseHref",
                    value: function() {
                        return this._baseHref
                    }
                }, {
                    key: "path",
                    value: function() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        var e = this._platformLocation.hash;
                        return null == e && (e = "#"), e.length > 0 ? e.substring(1) : e
                    }
                }, {
                    key: "prepareExternalUrl",
                    value: function(e) {
                        var t = mu(this._baseHref, e);
                        return t.length > 0 ? "#" + t : t
                    }
                }, {
                    key: "pushState",
                    value: function(e, t, n, r) {
                        var i = this.prepareExternalUrl(n + _u(r));
                        0 == i.length && (i = this._platformLocation.pathname), this._platformLocation.pushState(e, t, i)
                    }
                }, {
                    key: "replaceState",
                    value: function(e, t, n, r) {
                        var i = this.prepareExternalUrl(n + _u(r));
                        0 == i.length && (i = this._platformLocation.pathname), this._platformLocation.replaceState(e, t, i)
                    }
                }, {
                    key: "forward",
                    value: function() {
                        this._platformLocation.forward()
                    }
                }, {
                    key: "back",
                    value: function() {
                        this._platformLocation.back()
                    }
                }]), n
            }(bu)).\u0275fac = function(e) {
                return new(e || Su)(Ge(cu), Ge(Tu, 8))
            }, Su.\u0275prov = fe({
                token: Su,
                factory: Su.\u0275fac
            }), Su),
            Ou = ((wu = function() {
                function e(t, n) {
                    var r = this;
                    _classCallCheck(this, e), this._subject = new Jo, this._urlChangeListeners = [], this._platformStrategy = t;
                    var i = this._platformStrategy.getBaseHref();
                    this._platformLocation = n, this._baseHref = gu(Ru(i)), this._platformStrategy.onPopState((function(e) {
                        r._subject.emit({
                            url: r.path(!0),
                            pop: !0,
                            state: e.state,
                            type: e.type
                        })
                    }))
                }
                return _createClass(e, [{
                    key: "path",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return this.normalize(this._platformStrategy.path(e))
                    }
                }, {
                    key: "getState",
                    value: function() {
                        return this._platformLocation.getState()
                    }
                }, {
                    key: "isCurrentPathEqualTo",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        return this.path() == this.normalize(e + _u(t))
                    }
                }, {
                    key: "normalize",
                    value: function(t) {
                        return e.stripTrailingSlash(function(e, t) {
                            return e && t.startsWith(e) ? t.substring(e.length) : t
                        }(this._baseHref, Ru(t)))
                    }
                }, {
                    key: "prepareExternalUrl",
                    value: function(e) {
                        return e && "/" !== e[0] && (e = "/" + e), this._platformStrategy.prepareExternalUrl(e)
                    }
                }, {
                    key: "go",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                        this._platformStrategy.pushState(n, "", e, t), this._notifyUrlChangeListeners(this.prepareExternalUrl(e + _u(t)), n)
                    }
                }, {
                    key: "replaceState",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                        this._platformStrategy.replaceState(n, "", e, t), this._notifyUrlChangeListeners(this.prepareExternalUrl(e + _u(t)), n)
                    }
                }, {
                    key: "forward",
                    value: function() {
                        this._platformStrategy.forward()
                    }
                }, {
                    key: "back",
                    value: function() {
                        this._platformStrategy.back()
                    }
                }, {
                    key: "onUrlChange",
                    value: function(e) {
                        var t = this;
                        this._urlChangeListeners.push(e), this.subscribe((function(e) {
                            t._notifyUrlChangeListeners(e.url, e.state)
                        }))
                    }
                }, {
                    key: "_notifyUrlChangeListeners",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        this._urlChangeListeners.forEach((function(n) {
                            return n(e, t)
                        }))
                    }
                }, {
                    key: "subscribe",
                    value: function(e, t, n) {
                        return this._subject.subscribe({
                            next: e,
                            error: t,
                            complete: n
                        })
                    }
                }]), e
            }()).\u0275fac = function(e) {
                return new(e || wu)(Ge(bu), Ge(cu))
            }, wu.normalizeQueryParams = _u, wu.joinWithSlash = mu, wu.stripTrailingSlash = gu, wu.\u0275prov = fe({
                factory: Iu,
                token: wu,
                providedIn: "root"
            }), wu);

        function Iu() {
            return new Ou(Ge(bu), Ge(cu))
        }

        function Ru(e) {
            return e.replace(/\/index.html$/, "")
        }
        var Pu, Nu = function() {
                var e = {
                    Zero: 0,
                    One: 1,
                    Two: 2,
                    Few: 3,
                    Many: 4,
                    Other: 5
                };
                return e[e.Zero] = "Zero", e[e.One] = "One", e[e.Two] = "Two", e[e.Few] = "Few", e[e.Many] = "Many", e[e.Other] = "Other", e
            }(),
            Du = function e() {
                _classCallCheck(this, e)
            },
            ju = ((Pu = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e) {
                    var r;
                    return _classCallCheck(this, n), (r = t.call(this)).locale = e, r
                }
                return _createClass(n, [{
                    key: "getPluralCategory",
                    value: function(e, t) {
                        switch (function(e) {
                                return function(e) {
                                    var t = function(e) {
                                            return e.toLowerCase().replace(/_/g, "-")
                                        }(e),
                                        n = qo(t);
                                    if (n) return n;
                                    var r = t.split("-")[0];
                                    if (n = qo(r)) return n;
                                    if ("en" === r) return zo;
                                    throw new Error('Missing locale data for the locale "'.concat(e, '".'))
                                }(e)[Qo.PluralCase]
                            }(t || this.locale)(e)) {
                            case Nu.Zero:
                                return "zero";
                            case Nu.One:
                                return "one";
                            case Nu.Two:
                                return "two";
                            case Nu.Few:
                                return "few";
                            case Nu.Many:
                                return "many";
                            default:
                                return "other"
                        }
                    }
                }]), n
            }(Du)).\u0275fac = function(e) {
                return new(e || Pu)(Ge(ms))
            }, Pu.\u0275prov = fe({
                token: Pu,
                factory: Pu.\u0275fac
            }), Pu);

        function Fu(e, t) {
            t = encodeURIComponent(t);
            var n, r = _createForOfIteratorHelper(e.split(";"));
            try {
                for (r.s(); !(n = r.n()).done;) {
                    var i = n.value,
                        a = i.indexOf("="),
                        o = _slicedToArray(-1 == a ? [i, ""] : [i.slice(0, a), i.slice(a + 1)], 2),
                        s = o[0],
                        u = o[1];
                    if (s.trim() === t) return decodeURIComponent(u)
                }
            } catch (l) {
                r.e(l)
            } finally {
                r.f()
            }
            return null
        }
        var Mu, Lu, Uu, Hu, Vu, zu, Bu, qu, Qu, Wu = function() {
                function e(t, n, r, i) {
                    _classCallCheck(this, e), this.$implicit = t, this.ngForOf = n, this.index = r, this.count = i
                }
                return _createClass(e, [{
                    key: "first",
                    get: function() {
                        return 0 === this.index
                    }
                }, {
                    key: "last",
                    get: function() {
                        return this.index === this.count - 1
                    }
                }, {
                    key: "even",
                    get: function() {
                        return this.index % 2 == 0
                    }
                }, {
                    key: "odd",
                    get: function() {
                        return !this.even
                    }
                }]), e
            }(),
            Ku = ((Mu = function() {
                function e(t, n, r) {
                    _classCallCheck(this, e), this._viewContainer = t, this._template = n, this._differs = r, this._ngForOf = null, this._ngForOfDirty = !0, this._differ = null
                }
                return _createClass(e, [{
                    key: "ngForOf",
                    set: function(e) {
                        this._ngForOf = e, this._ngForOfDirty = !0
                    }
                }, {
                    key: "ngForTrackBy",
                    get: function() {
                        return this._trackByFn
                    },
                    set: function(e) {
                        Yn() && null != e && "function" != typeof e && console && console.warn && console.warn("trackBy must be a function, but received ".concat(JSON.stringify(e), ". ") + "See https://angular.io/api/common/NgForOf#change-propagation for more information."), this._trackByFn = e
                    }
                }, {
                    key: "ngForTemplate",
                    set: function(e) {
                        e && (this._template = e)
                    }
                }, {
                    key: "ngDoCheck",
                    value: function() {
                        if (this._ngForOfDirty) {
                            this._ngForOfDirty = !1;
                            var e = this._ngForOf;
                            if (!this._differ && e) try {
                                this._differ = this._differs.find(e).create(this.ngForTrackBy)
                            } catch (r) {
                                throw new Error("Cannot find a differ supporting object '".concat(e, "' of type '").concat((t = e).name || typeof t, "'. NgFor only supports binding to Iterables such as Arrays."))
                            }
                        }
                        var t;
                        if (this._differ) {
                            var n = this._differ.diff(this._ngForOf);
                            n && this._applyChanges(n)
                        }
                    }
                }, {
                    key: "_applyChanges",
                    value: function(e) {
                        var t = this,
                            n = [];
                        e.forEachOperation((function(e, r, i) {
                            if (null == e.previousIndex) {
                                var a = t._viewContainer.createEmbeddedView(t._template, new Wu(null, t._ngForOf, -1, -1), null === i ? void 0 : i),
                                    o = new Zu(e, a);
                                n.push(o)
                            } else if (null == i) t._viewContainer.remove(null === r ? void 0 : r);
                            else if (null !== r) {
                                var s = t._viewContainer.get(r);
                                t._viewContainer.move(s, i);
                                var u = new Zu(e, s);
                                n.push(u)
                            }
                        }));
                        for (var r = 0; r < n.length; r++) this._perViewChange(n[r].view, n[r].record);
                        for (var i = 0, a = this._viewContainer.length; i < a; i++) {
                            var o = this._viewContainer.get(i);
                            o.context.index = i, o.context.count = a, o.context.ngForOf = this._ngForOf
                        }
                        e.forEachIdentityChange((function(e) {
                            t._viewContainer.get(e.currentIndex).context.$implicit = e.item
                        }))
                    }
                }, {
                    key: "_perViewChange",
                    value: function(e, t) {
                        e.context.$implicit = t.item
                    }
                }], [{
                    key: "ngTemplateContextGuard",
                    value: function(e, t) {
                        return !0
                    }
                }]), e
            }()).\u0275fac = function(e) {
                return new(e || Mu)(pa(No), pa(Ro), pa(To))
            }, Mu.\u0275dir = gt({
                type: Mu,
                selectors: [
                    ["", "ngFor", "", "ngForOf", ""]
                ],
                inputs: {
                    ngForOf: "ngForOf",
                    ngForTrackBy: "ngForTrackBy",
                    ngForTemplate: "ngForTemplate"
                }
            }), Mu),
            Zu = function e(t, n) {
                _classCallCheck(this, e), this.record = t, this.view = n
            },
            Gu = function() {
                function e() {
                    _classCallCheck(this, e)
                }
                return _createClass(e, [{
                    key: "createSubscription",
                    value: function(e, t) {
                        return e.subscribe({
                            next: t,
                            error: function(e) {
                                throw e
                            }
                        })
                    }
                }, {
                    key: "dispose",
                    value: function(e) {
                        e.unsubscribe()
                    }
                }, {
                    key: "onDestroy",
                    value: function(e) {
                        e.unsubscribe()
                    }
                }]), e
            }(),
            Ju = new(function() {
                function e() {
                    _classCallCheck(this, e)
                }
                return _createClass(e, [{
                    key: "createSubscription",
                    value: function(e, t) {
                        return e.then(t, (function(e) {
                            throw e
                        }))
                    }
                }, {
                    key: "dispose",
                    value: function(e) {}
                }, {
                    key: "onDestroy",
                    value: function(e) {}
                }]), e
            }()),
            $u = new Gu,
            Xu = ((Vu = function() {
                function e(t) {
                    _classCallCheck(this, e), this._ref = t, this._latestValue = null, this._latestReturnedValue = null, this._subscription = null, this._obj = null, this._strategy = null
                }
                return _createClass(e, [{
                    key: "ngOnDestroy",
                    value: function() {
                        this._subscription && this._dispose()
                    }
                }, {
                    key: "transform",
                    value: function(e) {
                        return this._obj ? e !== this._obj ? (this._dispose(), this.transform(e)) : la(this._latestValue, this._latestReturnedValue) ? this._latestReturnedValue : (this._latestReturnedValue = this._latestValue, ca.wrap(this._latestValue)) : (e && this._subscribe(e), this._latestReturnedValue = this._latestValue, this._latestValue)
                    }
                }, {
                    key: "_subscribe",
                    value: function(e) {
                        var t = this;
                        this._obj = e, this._strategy = this._selectStrategy(e), this._subscription = this._strategy.createSubscription(e, (function(n) {
                            return t._updateLatestValue(e, n)
                        }))
                    }
                }, {
                    key: "_selectStrategy",
                    value: function(t) {
                        if (Ca(t)) return Ju;
                        if (wa(t)) return $u;
                        throw Error("InvalidPipeArgument: '".concat(t, "' for pipe '").concat(Ce(e), "'"))
                    }
                }, {
                    key: "_dispose",
                    value: function() {
                        this._strategy.dispose(this._subscription), this._latestValue = null, this._latestReturnedValue = null, this._subscription = null, this._obj = null
                    }
                }, {
                    key: "_updateLatestValue",
                    value: function(e, t) {
                        e === this._obj && (this._latestValue = t, this._ref.markForCheck())
                    }
                }]), e
            }()).\u0275fac = function(e) {
                return new(e || Vu)(function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : le.Default,
                        t = Li(!0);
                    if (null != t || e & le.Optional) return t;
                    throw new Error("No provider for ChangeDetectorRef!")
                }())
            }, Vu.\u0275pipe = {
                type: (Hu = {
                    name: "async",
                    type: Vu,
                    pure: !1
                }).type,
                name: Hu.name,
                factory: null,
                pure: !1 !== Hu.pure,
                onDestroy: Hu.type.prototype.ngOnDestroy || null
            }, Vu),
            Yu = ((Uu = function e() {
                _classCallCheck(this, e)
            }).\u0275mod = yt({
                type: Uu
            }), Uu.\u0275inj = de({
                factory: function(e) {
                    return new(e || Uu)
                },
                providers: [{
                    provide: Du,
                    useClass: ju
                }]
            }), Uu),
            el = ((Lu = function e() {
                _classCallCheck(this, e)
            }).\u0275prov = fe({
                token: Lu,
                providedIn: "root",
                factory: function() {
                    return new tl(Ge(lu), window, Ge(Xn))
                }
            }), Lu),
            tl = function() {
                function e(t, n, r) {
                    _classCallCheck(this, e), this.document = t, this.window = n, this.errorHandler = r, this.offset = function() {
                        return [0, 0]
                    }
                }
                return _createClass(e, [{
                    key: "setOffset",
                    value: function(e) {
                        this.offset = Array.isArray(e) ? function() {
                            return e
                        } : e
                    }
                }, {
                    key: "getScrollPosition",
                    value: function() {
                        return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0]
                    }
                }, {
                    key: "scrollToPosition",
                    value: function(e) {
                        this.supportScrollRestoration() && this.window.scrollTo(e[0], e[1])
                    }
                }, {
                    key: "scrollToAnchor",
                    value: function(e) {
                        if (this.supportScrollRestoration()) {
                            e = this.window.CSS && this.window.CSS.escape ? this.window.CSS.escape(e) : e.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, "\\$1");
                            try {
                                var t = this.document.querySelector("#".concat(e));
                                if (t) return void this.scrollToElement(t);
                                var n = this.document.querySelector("[name='".concat(e, "']"));
                                if (n) return void this.scrollToElement(n)
                            } catch (r) {
                                this.errorHandler.handleError(r)
                            }
                        }
                    }
                }, {
                    key: "setHistoryScrollRestoration",
                    value: function(e) {
                        if (this.supportScrollRestoration()) {
                            var t = this.window.history;
                            t && t.scrollRestoration && (t.scrollRestoration = e)
                        }
                    }
                }, {
                    key: "scrollToElement",
                    value: function(e) {
                        var t = e.getBoundingClientRect(),
                            n = t.left + this.window.pageXOffset,
                            r = t.top + this.window.pageYOffset,
                            i = this.offset();
                        this.window.scrollTo(n - i[0], r - i[1])
                    }
                }, {
                    key: "supportScrollRestoration",
                    value: function() {
                        try {
                            return !!this.window && !!this.window.scrollTo
                        } catch (e) {
                            return !1
                        }
                    }
                }]), e
            }(),
            nl = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n() {
                    return _classCallCheck(this, n), t.apply(this, arguments)
                }
                return _createClass(n, [{
                    key: "getProperty",
                    value: function(e, t) {
                        return e[t]
                    }
                }, {
                    key: "log",
                    value: function(e) {
                        window.console && window.console.log && window.console.log(e)
                    }
                }, {
                    key: "logGroup",
                    value: function(e) {
                        window.console && window.console.group && window.console.group(e)
                    }
                }, {
                    key: "logGroupEnd",
                    value: function() {
                        window.console && window.console.groupEnd && window.console.groupEnd()
                    }
                }, {
                    key: "onAndCancel",
                    value: function(e, t, n) {
                        return e.addEventListener(t, n, !1),
                            function() {
                                e.removeEventListener(t, n, !1)
                            }
                    }
                }, {
                    key: "dispatchEvent",
                    value: function(e, t) {
                        e.dispatchEvent(t)
                    }
                }, {
                    key: "remove",
                    value: function(e) {
                        return e.parentNode && e.parentNode.removeChild(e), e
                    }
                }, {
                    key: "getValue",
                    value: function(e) {
                        return e.value
                    }
                }, {
                    key: "createElement",
                    value: function(e, t) {
                        return (t = t || this.getDefaultDocument()).createElement(e)
                    }
                }, {
                    key: "createHtmlDocument",
                    value: function() {
                        return document.implementation.createHTMLDocument("fakeTitle")
                    }
                }, {
                    key: "getDefaultDocument",
                    value: function() {
                        return document
                    }
                }, {
                    key: "isElementNode",
                    value: function(e) {
                        return e.nodeType === Node.ELEMENT_NODE
                    }
                }, {
                    key: "isShadowRoot",
                    value: function(e) {
                        return e instanceof DocumentFragment
                    }
                }, {
                    key: "getGlobalEventTarget",
                    value: function(e, t) {
                        return "window" === t ? window : "document" === t ? e : "body" === t ? e.body : null
                    }
                }, {
                    key: "getHistory",
                    value: function() {
                        return window.history
                    }
                }, {
                    key: "getLocation",
                    value: function() {
                        return window.location
                    }
                }, {
                    key: "getBaseHref",
                    value: function(e) {
                        var t, n = rl || (rl = document.querySelector("base")) ? rl.getAttribute("href") : null;
                        return null == n ? null : (t = n, zu || (zu = document.createElement("a")), zu.setAttribute("href", t), "/" === zu.pathname.charAt(0) ? zu.pathname : "/" + zu.pathname)
                    }
                }, {
                    key: "resetBaseElement",
                    value: function() {
                        rl = null
                    }
                }, {
                    key: "getUserAgent",
                    value: function() {
                        return window.navigator.userAgent
                    }
                }, {
                    key: "performanceNow",
                    value: function() {
                        return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime()
                    }
                }, {
                    key: "supportsCookies",
                    value: function() {
                        return !0
                    }
                }, {
                    key: "getCookie",
                    value: function(e) {
                        return Fu(document.cookie, e)
                    }
                }], [{
                    key: "makeCurrent",
                    value: function() {
                        var e;
                        e = new n, ou || (ou = e)
                    }
                }]), n
            }(function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n() {
                    return _classCallCheck(this, n), t.call(this)
                }
                return _createClass(n, [{
                    key: "supportsDOMEvents",
                    value: function() {
                        return !0
                    }
                }]), n
            }(function() {
                return function e() {
                    _classCallCheck(this, e)
                }
            }())),
            rl = null,
            il = new He("TRANSITION_ID"),
            al = [{
                provide: us,
                useFactory: function(e, t, n) {
                    return function() {
                        n.get(ls).donePromise.then((function() {
                            var n = su();
                            Array.prototype.slice.apply(t.querySelectorAll("style[ng-transition]")).filter((function(t) {
                                return t.getAttribute("ng-transition") === e
                            })).forEach((function(e) {
                                return n.remove(e)
                            }))
                        }))
                    }
                },
                deps: [il, lu, ta],
                multi: !0
            }],
            ol = function() {
                function e() {
                    _classCallCheck(this, e)
                }
                return _createClass(e, [{
                    key: "addToWindow",
                    value: function(e) {
                        Pe.getAngularTestability = function(t) {
                            var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                r = e.findTestabilityInTree(t, n);
                            if (null == r) throw new Error("Could not find testability for element.");
                            return r
                        }, Pe.getAllAngularTestabilities = function() {
                            return e.getAllTestabilities()
                        }, Pe.getAllAngularRootElements = function() {
                            return e.getAllRootElements()
                        }, Pe.frameworkStabilizers || (Pe.frameworkStabilizers = []), Pe.frameworkStabilizers.push((function(e) {
                            var t = Pe.getAllAngularTestabilities(),
                                n = t.length,
                                r = !1,
                                i = function(t) {
                                    r = r || t, 0 == --n && e(r)
                                };
                            t.forEach((function(e) {
                                e.whenStable(i)
                            }))
                        }))
                    }
                }, {
                    key: "findTestabilityInTree",
                    value: function(e, t, n) {
                        if (null == t) return null;
                        var r = e.getTestability(t);
                        return null != r ? r : n ? su().isShadowRoot(t) ? this.findTestabilityInTree(e, t.host, !0) : this.findTestabilityInTree(e, t.parentElement, !0) : null
                    }
                }], [{
                    key: "init",
                    value: function() {
                        var t;
                        t = new e, Vs = t
                    }
                }]), e
            }(),
            sl = new He("EventManagerPlugins"),
            ul = ((Bu = function() {
                function e(t, n) {
                    var r = this;
                    _classCallCheck(this, e), this._zone = n, this._eventNameToPlugin = new Map, t.forEach((function(e) {
                        return e.manager = r
                    })), this._plugins = t.slice().reverse()
                }
                return _createClass(e, [{
                    key: "addEventListener",
                    value: function(e, t, n) {
                        return this._findPluginFor(t).addEventListener(e, t, n)
                    }
                }, {
                    key: "addGlobalEventListener",
                    value: function(e, t, n) {
                        return this._findPluginFor(t).addGlobalEventListener(e, t, n)
                    }
                }, {
                    key: "getZone",
                    value: function() {
                        return this._zone
                    }
                }, {
                    key: "_findPluginFor",
                    value: function(e) {
                        var t = this._eventNameToPlugin.get(e);
                        if (t) return t;
                        for (var n = this._plugins, r = 0; r < n.length; r++) {
                            var i = n[r];
                            if (i.supports(e)) return this._eventNameToPlugin.set(e, i), i
                        }
                        throw new Error("No event manager plugin found for event ".concat(e))
                    }
                }]), e
            }()).\u0275fac = function(e) {
                return new(e || Bu)(Ge(sl), Ge(Is))
            }, Bu.\u0275prov = fe({
                token: Bu,
                factory: Bu.\u0275fac
            }), Bu),
            ll = function() {
                function e(t) {
                    _classCallCheck(this, e), this._doc = t
                }
                return _createClass(e, [{
                    key: "addGlobalEventListener",
                    value: function(e, t, n) {
                        var r = su().getGlobalEventTarget(this._doc, e);
                        if (!r) throw new Error("Unsupported event target ".concat(r, " for event ").concat(t));
                        return this.addEventListener(r, t, n)
                    }
                }]), e
            }(),
            cl = ((Qu = function() {
                function e() {
                    _classCallCheck(this, e), this._stylesSet = new Set
                }
                return _createClass(e, [{
                    key: "addStyles",
                    value: function(e) {
                        var t = this,
                            n = new Set;
                        e.forEach((function(e) {
                            t._stylesSet.has(e) || (t._stylesSet.add(e), n.add(e))
                        })), this.onStylesAdded(n)
                    }
                }, {
                    key: "onStylesAdded",
                    value: function(e) {}
                }, {
                    key: "getAllStyles",
                    value: function() {
                        return Array.from(this._stylesSet)
                    }
                }]), e
            }()).\u0275fac = function(e) {
                return new(e || Qu)
            }, Qu.\u0275prov = fe({
                token: Qu,
                factory: Qu.\u0275fac
            }), Qu),
            hl = ((qu = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e) {
                    var r;
                    return _classCallCheck(this, n), (r = t.call(this))._doc = e, r._hostNodes = new Set, r._styleNodes = new Set, r._hostNodes.add(e.head), r
                }
                return _createClass(n, [{
                    key: "_addStylesToHost",
                    value: function(e, t) {
                        var n = this;
                        e.forEach((function(e) {
                            var r = n._doc.createElement("style");
                            r.textContent = e, n._styleNodes.add(t.appendChild(r))
                        }))
                    }
                }, {
                    key: "addHost",
                    value: function(e) {
                        this._addStylesToHost(this._stylesSet, e), this._hostNodes.add(e)
                    }
                }, {
                    key: "removeHost",
                    value: function(e) {
                        this._hostNodes.delete(e)
                    }
                }, {
                    key: "onStylesAdded",
                    value: function(e) {
                        var t = this;
                        this._hostNodes.forEach((function(n) {
                            return t._addStylesToHost(e, n)
                        }))
                    }
                }, {
                    key: "ngOnDestroy",
                    value: function() {
                        this._styleNodes.forEach((function(e) {
                            return su().remove(e)
                        }))
                    }
                }]), n
            }(cl)).\u0275fac = function(e) {
                return new(e || qu)(Ge(lu))
            }, qu.\u0275prov = fe({
                token: qu,
                factory: qu.\u0275fac
            }), qu),
            fl = {
                svg: "http://www.w3.org/2000/svg",
                xhtml: "http://www.w3.org/1999/xhtml",
                xlink: "http://www.w3.org/1999/xlink",
                xml: "http://www.w3.org/XML/1998/namespace",
                xmlns: "http://www.w3.org/2000/xmlns/"
            },
            dl = /%COMP%/g;

        function vl(e, t, n) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                Array.isArray(i) ? vl(e, i, n) : (i = i.replace(dl, e), n.push(i))
            }
            return n
        }

        function pl(e) {
            return function(t) {
                if ("__ngUnwrap__" === t) return e;
                !1 === e(t) && (t.preventDefault(), t.returnValue = !1)
            }
        }
        var yl, ml, gl, _l, kl = ((yl = function() {
                function e(t, n, r) {
                    _classCallCheck(this, e), this.eventManager = t, this.sharedStylesHost = n, this.appId = r, this.rendererByCompId = new Map, this.defaultRenderer = new bl(t)
                }
                return _createClass(e, [{
                    key: "createRenderer",
                    value: function(e, t) {
                        if (!e || !t) return this.defaultRenderer;
                        switch (t.encapsulation) {
                            case ut.Emulated:
                                var n = this.rendererByCompId.get(t.id);
                                return n || (n = new Cl(this.eventManager, this.sharedStylesHost, t, this.appId), this.rendererByCompId.set(t.id, n)), n.applyToHost(e), n;
                            case ut.Native:
                            case ut.ShadowDom:
                                return new wl(this.eventManager, this.sharedStylesHost, e, t);
                            default:
                                if (!this.rendererByCompId.has(t.id)) {
                                    var r = vl(t.id, t.styles, []);
                                    this.sharedStylesHost.addStyles(r), this.rendererByCompId.set(t.id, this.defaultRenderer)
                                }
                                return this.defaultRenderer
                        }
                    }
                }, {
                    key: "begin",
                    value: function() {}
                }, {
                    key: "end",
                    value: function() {}
                }]), e
            }()).\u0275fac = function(e) {
                return new(e || yl)(Ge(ul), Ge(hl), Ge(cs))
            }, yl.\u0275prov = fe({
                token: yl,
                factory: yl.\u0275fac
            }), yl),
            bl = function() {
                function e(t) {
                    _classCallCheck(this, e), this.eventManager = t, this.data = Object.create(null)
                }
                return _createClass(e, [{
                    key: "destroy",
                    value: function() {}
                }, {
                    key: "createElement",
                    value: function(e, t) {
                        return t ? document.createElementNS(fl[t] || t, e) : document.createElement(e)
                    }
                }, {
                    key: "createComment",
                    value: function(e) {
                        return document.createComment(e)
                    }
                }, {
                    key: "createText",
                    value: function(e) {
                        return document.createTextNode(e)
                    }
                }, {
                    key: "appendChild",
                    value: function(e, t) {
                        e.appendChild(t)
                    }
                }, {
                    key: "insertBefore",
                    value: function(e, t, n) {
                        e && e.insertBefore(t, n)
                    }
                }, {
                    key: "removeChild",
                    value: function(e, t) {
                        e && e.removeChild(t)
                    }
                }, {
                    key: "selectRootElement",
                    value: function(e, t) {
                        var n = "string" == typeof e ? document.querySelector(e) : e;
                        if (!n) throw new Error('The selector "'.concat(e, '" did not match any elements'));
                        return t || (n.textContent = ""), n
                    }
                }, {
                    key: "parentNode",
                    value: function(e) {
                        return e.parentNode
                    }
                }, {
                    key: "nextSibling",
                    value: function(e) {
                        return e.nextSibling
                    }
                }, {
                    key: "setAttribute",
                    value: function(e, t, n, r) {
                        if (r) {
                            t = r + ":" + t;
                            var i = fl[r];
                            i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n)
                        } else e.setAttribute(t, n)
                    }
                }, {
                    key: "removeAttribute",
                    value: function(e, t, n) {
                        if (n) {
                            var r = fl[n];
                            r ? e.removeAttributeNS(r, t) : e.removeAttribute("".concat(n, ":").concat(t))
                        } else e.removeAttribute(t)
                    }
                }, {
                    key: "addClass",
                    value: function(e, t) {
                        e.classList.add(t)
                    }
                }, {
                    key: "removeClass",
                    value: function(e, t) {
                        e.classList.remove(t)
                    }
                }, {
                    key: "setStyle",
                    value: function(e, t, n, r) {
                        r & ho.DashCase ? e.style.setProperty(t, n, r & ho.Important ? "important" : "") : e.style[t] = n
                    }
                }, {
                    key: "removeStyle",
                    value: function(e, t, n) {
                        n & ho.DashCase ? e.style.removeProperty(t) : e.style[t] = ""
                    }
                }, {
                    key: "setProperty",
                    value: function(e, t, n) {
                        e[t] = n
                    }
                }, {
                    key: "setValue",
                    value: function(e, t) {
                        e.nodeValue = t
                    }
                }, {
                    key: "listen",
                    value: function(e, t, n) {
                        return "string" == typeof e ? this.eventManager.addGlobalEventListener(e, t, pl(n)) : this.eventManager.addEventListener(e, t, pl(n))
                    }
                }]), e
            }(),
            Cl = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r, i, a) {
                    var o;
                    _classCallCheck(this, n), (o = t.call(this, e)).component = i;
                    var s, u = vl(a + "-" + i.id, i.styles, []);
                    return r.addStyles(u), o.contentAttr = "_ngcontent-%COMP%".replace(dl, a + "-" + i.id), o.hostAttr = (s = a + "-" + i.id, "_nghost-%COMP%".replace(dl, s)), o
                }
                return _createClass(n, [{
                    key: "applyToHost",
                    value: function(e) {
                        _get(_getPrototypeOf(n.prototype), "setAttribute", this).call(this, e, this.hostAttr, "")
                    }
                }, {
                    key: "createElement",
                    value: function(e, t) {
                        var r = _get(_getPrototypeOf(n.prototype), "createElement", this).call(this, e, t);
                        return _get(_getPrototypeOf(n.prototype), "setAttribute", this).call(this, r, this.contentAttr, ""), r
                    }
                }]), n
            }(bl),
            wl = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r, i, a) {
                    var o;
                    _classCallCheck(this, n), (o = t.call(this, e)).sharedStylesHost = r, o.hostEl = i, o.component = a, o.shadowRoot = a.encapsulation === ut.ShadowDom ? i.attachShadow({
                        mode: "open"
                    }) : i.createShadowRoot(), o.sharedStylesHost.addHost(o.shadowRoot);
                    for (var s = vl(a.id, a.styles, []), u = 0; u < s.length; u++) {
                        var l = document.createElement("style");
                        l.textContent = s[u], o.shadowRoot.appendChild(l)
                    }
                    return o
                }
                return _createClass(n, [{
                    key: "nodeOrShadowRoot",
                    value: function(e) {
                        return e === this.hostEl ? this.shadowRoot : e
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.sharedStylesHost.removeHost(this.shadowRoot)
                    }
                }, {
                    key: "appendChild",
                    value: function(e, t) {
                        return _get(_getPrototypeOf(n.prototype), "appendChild", this).call(this, this.nodeOrShadowRoot(e), t)
                    }
                }, {
                    key: "insertBefore",
                    value: function(e, t, r) {
                        return _get(_getPrototypeOf(n.prototype), "insertBefore", this).call(this, this.nodeOrShadowRoot(e), t, r)
                    }
                }, {
                    key: "removeChild",
                    value: function(e, t) {
                        return _get(_getPrototypeOf(n.prototype), "removeChild", this).call(this, this.nodeOrShadowRoot(e), t)
                    }
                }, {
                    key: "parentNode",
                    value: function(e) {
                        return this.nodeOrShadowRoot(_get(_getPrototypeOf(n.prototype), "parentNode", this).call(this, this.nodeOrShadowRoot(e)))
                    }
                }]), n
            }(bl),
            Sl = ((ml = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e) {
                    return _classCallCheck(this, n), t.call(this, e)
                }
                return _createClass(n, [{
                    key: "supports",
                    value: function(e) {
                        return !0
                    }
                }, {
                    key: "addEventListener",
                    value: function(e, t, n) {
                        var r = this;
                        return e.addEventListener(t, n, !1),
                            function() {
                                return r.removeEventListener(e, t, n)
                            }
                    }
                }, {
                    key: "removeEventListener",
                    value: function(e, t, n) {
                        return e.removeEventListener(t, n)
                    }
                }]), n
            }(ll)).\u0275fac = function(e) {
                return new(e || ml)(Ge(lu))
            }, ml.\u0275prov = fe({
                token: ml,
                factory: ml.\u0275fac
            }), ml),
            El = ["alt", "control", "meta", "shift"],
            Tl = {
                "\b": "Backspace",
                "\t": "Tab",
                "\x7f": "Delete",
                "\x1b": "Escape",
                Del: "Delete",
                Esc: "Escape",
                Left: "ArrowLeft",
                Right: "ArrowRight",
                Up: "ArrowUp",
                Down: "ArrowDown",
                Menu: "ContextMenu",
                Scroll: "ScrollLock",
                Win: "OS"
            },
            xl = {
                A: "1",
                B: "2",
                C: "3",
                D: "4",
                E: "5",
                F: "6",
                G: "7",
                H: "8",
                I: "9",
                J: "*",
                K: "+",
                M: "-",
                N: ".",
                O: "/",
                "`": "0",
                "\x90": "NumLock"
            },
            Al = {
                alt: function(e) {
                    return e.altKey
                },
                control: function(e) {
                    return e.ctrlKey
                },
                meta: function(e) {
                    return e.metaKey
                },
                shift: function(e) {
                    return e.shiftKey
                }
            },
            Ol = ((gl = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e) {
                    return _classCallCheck(this, n), t.call(this, e)
                }
                return _createClass(n, [{
                    key: "supports",
                    value: function(e) {
                        return null != n.parseEventName(e)
                    }
                }, {
                    key: "addEventListener",
                    value: function(e, t, r) {
                        var i = n.parseEventName(t),
                            a = n.eventCallback(i.fullKey, r, this.manager.getZone());
                        return this.manager.getZone().runOutsideAngular((function() {
                            return su().onAndCancel(e, i.domEventName, a)
                        }))
                    }
                }], [{
                    key: "parseEventName",
                    value: function(e) {
                        var t = e.toLowerCase().split("."),
                            r = t.shift();
                        if (0 === t.length || "keydown" !== r && "keyup" !== r) return null;
                        var i = n._normalizeKey(t.pop()),
                            a = "";
                        if (El.forEach((function(e) {
                                var n = t.indexOf(e);
                                n > -1 && (t.splice(n, 1), a += e + ".")
                            })), a += i, 0 != t.length || 0 === i.length) return null;
                        var o = {};
                        return o.domEventName = r, o.fullKey = a, o
                    }
                }, {
                    key: "getEventFullKey",
                    value: function(e) {
                        var t = "",
                            n = function(e) {
                                var t = e.key;
                                if (null == t) {
                                    if (null == (t = e.keyIdentifier)) return "Unidentified";
                                    t.startsWith("U+") && (t = String.fromCharCode(parseInt(t.substring(2), 16)), 3 === e.location && xl.hasOwnProperty(t) && (t = xl[t]))
                                }
                                return Tl[t] || t
                            }(e);
                        return " " === (n = n.toLowerCase()) ? n = "space" : "." === n && (n = "dot"), El.forEach((function(r) {
                            r != n && (0, Al[r])(e) && (t += r + ".")
                        })), t += n
                    }
                }, {
                    key: "eventCallback",
                    value: function(e, t, r) {
                        return function(i) {
                            n.getEventFullKey(i) === e && r.runGuarded((function() {
                                return t(i)
                            }))
                        }
                    }
                }, {
                    key: "_normalizeKey",
                    value: function(e) {
                        switch (e) {
                            case "esc":
                                return "escape";
                            default:
                                return e
                        }
                    }
                }]), n
            }(ll)).\u0275fac = function(e) {
                return new(e || gl)(Ge(lu))
            }, gl.\u0275prov = fe({
                token: gl,
                factory: gl.\u0275fac
            }), gl),
            Il = Qs(ru, "browser", [{
                provide: vs,
                useValue: "browser"
            }, {
                provide: ds,
                useValue: function() {
                    nl.makeCurrent(), ol.init()
                },
                multi: !0
            }, {
                provide: lu,
                useFactory: function() {
                    return function(e) {
                        Ot = e
                    }(document), document
                },
                deps: []
            }]),
            Rl = [
                [], {
                    provide: Vi,
                    useValue: "root"
                }, {
                    provide: Xn,
                    useFactory: function() {
                        return new Xn
                    },
                    deps: []
                }, {
                    provide: sl,
                    useClass: Sl,
                    multi: !0,
                    deps: [lu, Is, vs]
                }, {
                    provide: sl,
                    useClass: Ol,
                    multi: !0,
                    deps: [lu]
                },
                [], {
                    provide: kl,
                    useClass: kl,
                    deps: [ul, hl, cs]
                }, {
                    provide: co,
                    useExisting: kl
                }, {
                    provide: cl,
                    useExisting: hl
                }, {
                    provide: hl,
                    useClass: hl,
                    deps: [lu]
                }, {
                    provide: Us,
                    useClass: Us,
                    deps: [Is]
                }, {
                    provide: ul,
                    useClass: ul,
                    deps: [sl, Is]
                },
                []
            ],
            Pl = ((_l = function() {
                function e(t) {
                    if (_classCallCheck(this, e), t) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")
                }
                return _createClass(e, null, [{
                    key: "withServerTransition",
                    value: function(t) {
                        return {
                            ngModule: e,
                            providers: [{
                                provide: cs,
                                useValue: t.appId
                            }, {
                                provide: il,
                                useExisting: cs
                            }, al]
                        }
                    }
                }]), e
            }()).\u0275mod = yt({
                type: _l
            }), _l.\u0275inj = de({
                factory: function(e) {
                    return new(e || _l)(Ge(_l, 12))
                },
                providers: Rl,
                imports: [Yu, au]
            }), _l);
        "undefined" != typeof window && window;
        var Nl = function e() {
            _classCallCheck(this, e)
        };

        function Dl(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return {
                type: 2,
                steps: e,
                options: t
            }
        }

        function jl(e) {
            return {
                type: 6,
                styles: e,
                offset: null
            }
        }

        function Fl(e) {
            Promise.resolve(null).then(e)
        }
        var Ml = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    _classCallCheck(this, e), this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._started = !1, this._destroyed = !1, this._finished = !1, this.parentPlayer = null, this.totalTime = t + n
                }
                return _createClass(e, [{
                    key: "_onFinish",
                    value: function() {
                        this._finished || (this._finished = !0, this._onDoneFns.forEach((function(e) {
                            return e()
                        })), this._onDoneFns = [])
                    }
                }, {
                    key: "onStart",
                    value: function(e) {
                        this._onStartFns.push(e)
                    }
                }, {
                    key: "onDone",
                    value: function(e) {
                        this._onDoneFns.push(e)
                    }
                }, {
                    key: "onDestroy",
                    value: function(e) {
                        this._onDestroyFns.push(e)
                    }
                }, {
                    key: "hasStarted",
                    value: function() {
                        return this._started
                    }
                }, {
                    key: "init",
                    value: function() {}
                }, {
                    key: "play",
                    value: function() {
                        this.hasStarted() || (this._onStart(), this.triggerMicrotask()), this._started = !0
                    }
                }, {
                    key: "triggerMicrotask",
                    value: function() {
                        var e = this;
                        Fl((function() {
                            return e._onFinish()
                        }))
                    }
                }, {
                    key: "_onStart",
                    value: function() {
                        this._onStartFns.forEach((function(e) {
                            return e()
                        })), this._onStartFns = []
                    }
                }, {
                    key: "pause",
                    value: function() {}
                }, {
                    key: "restart",
                    value: function() {}
                }, {
                    key: "finish",
                    value: function() {
                        this._onFinish()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this._destroyed || (this._destroyed = !0, this.hasStarted() || this._onStart(), this.finish(), this._onDestroyFns.forEach((function(e) {
                            return e()
                        })), this._onDestroyFns = [])
                    }
                }, {
                    key: "reset",
                    value: function() {}
                }, {
                    key: "setPosition",
                    value: function(e) {}
                }, {
                    key: "getPosition",
                    value: function() {
                        return 0
                    }
                }, {
                    key: "triggerCallback",
                    value: function(e) {
                        var t = "start" == e ? this._onStartFns : this._onDoneFns;
                        t.forEach((function(e) {
                            return e()
                        })), t.length = 0
                    }
                }]), e
            }(),
            Ll = function() {
                function e(t) {
                    var n = this;
                    _classCallCheck(this, e), this._onDoneFns = [], this._onStartFns = [], this._finished = !1, this._started = !1, this._destroyed = !1, this._onDestroyFns = [], this.parentPlayer = null, this.totalTime = 0, this.players = t;
                    var r = 0,
                        i = 0,
                        a = 0,
                        o = this.players.length;
                    0 == o ? Fl((function() {
                        return n._onFinish()
                    })) : this.players.forEach((function(e) {
                        e.onDone((function() {
                            ++r == o && n._onFinish()
                        })), e.onDestroy((function() {
                            ++i == o && n._onDestroy()
                        })), e.onStart((function() {
                            ++a == o && n._onStart()
                        }))
                    })), this.totalTime = this.players.reduce((function(e, t) {
                        return Math.max(e, t.totalTime)
                    }), 0)
                }
                return _createClass(e, [{
                    key: "_onFinish",
                    value: function() {
                        this._finished || (this._finished = !0, this._onDoneFns.forEach((function(e) {
                            return e()
                        })), this._onDoneFns = [])
                    }
                }, {
                    key: "init",
                    value: function() {
                        this.players.forEach((function(e) {
                            return e.init()
                        }))
                    }
                }, {
                    key: "onStart",
                    value: function(e) {
                        this._onStartFns.push(e)
                    }
                }, {
                    key: "_onStart",
                    value: function() {
                        this.hasStarted() || (this._started = !0, this._onStartFns.forEach((function(e) {
                            return e()
                        })), this._onStartFns = [])
                    }
                }, {
                    key: "onDone",
                    value: function(e) {
                        this._onDoneFns.push(e)
                    }
                }, {
                    key: "onDestroy",
                    value: function(e) {
                        this._onDestroyFns.push(e)
                    }
                }, {
                    key: "hasStarted",
                    value: function() {
                        return this._started
                    }
                }, {
                    key: "play",
                    value: function() {
                        this.parentPlayer || this.init(), this._onStart(), this.players.forEach((function(e) {
                            return e.play()
                        }))
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.players.forEach((function(e) {
                            return e.pause()
                        }))
                    }
                }, {
                    key: "restart",
                    value: function() {
                        this.players.forEach((function(e) {
                            return e.restart()
                        }))
                    }
                }, {
                    key: "finish",
                    value: function() {
                        this._onFinish(), this.players.forEach((function(e) {
                            return e.finish()
                        }))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this._onDestroy()
                    }
                }, {
                    key: "_onDestroy",
                    value: function() {
                        this._destroyed || (this._destroyed = !0, this._onFinish(), this.players.forEach((function(e) {
                            return e.destroy()
                        })), this._onDestroyFns.forEach((function(e) {
                            return e()
                        })), this._onDestroyFns = [])
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.players.forEach((function(e) {
                            return e.reset()
                        })), this._destroyed = !1, this._finished = !1, this._started = !1
                    }
                }, {
                    key: "setPosition",
                    value: function(e) {
                        var t = e * this.totalTime;
                        this.players.forEach((function(e) {
                            var n = e.totalTime ? Math.min(1, t / e.totalTime) : 1;
                            e.setPosition(n)
                        }))
                    }
                }, {
                    key: "getPosition",
                    value: function() {
                        var e = 0;
                        return this.players.forEach((function(t) {
                            var n = t.getPosition();
                            e = Math.min(n, e)
                        })), e
                    }
                }, {
                    key: "beforeDestroy",
                    value: function() {
                        this.players.forEach((function(e) {
                            e.beforeDestroy && e.beforeDestroy()
                        }))
                    }
                }, {
                    key: "triggerCallback",
                    value: function(e) {
                        var t = "start" == e ? this._onStartFns : this._onDoneFns;
                        t.forEach((function(e) {
                            return e()
                        })), t.length = 0
                    }
                }]), e
            }();

        function Ul() {
            return "undefined" != typeof process && "[object process]" === {}.toString.call(process)
        }

        function Hl(e) {
            switch (e.length) {
                case 0:
                    return new Ml;
                case 1:
                    return e[0];
                default:
                    return new Ll(e)
            }
        }

        function Vl(e, t, n, r) {
            var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                o = [],
                s = [],
                u = -1,
                l = null;
            if (r.forEach((function(e) {
                    var n = e.offset,
                        r = n == u,
                        c = r && l || {};
                    Object.keys(e).forEach((function(n) {
                        var r = n,
                            s = e[n];
                        if ("offset" !== n) switch (r = t.normalizePropertyName(r, o), s) {
                            case "!":
                                s = i[n];
                                break;
                            case "*":
                                s = a[n];
                                break;
                            default:
                                s = t.normalizeStyleValue(n, r, s, o)
                        }
                        c[r] = s
                    })), r || s.push(c), l = c, u = n
                })), o.length) {
                var c = "\n - ";
                throw new Error("Unable to animate due to the following errors:".concat(c).concat(o.join(c)))
            }
            return s
        }

        function zl(e, t, n, r) {
            switch (t) {
                case "start":
                    e.onStart((function() {
                        return r(n && Bl(n, "start", e))
                    }));
                    break;
                case "done":
                    e.onDone((function() {
                        return r(n && Bl(n, "done", e))
                    }));
                    break;
                case "destroy":
                    e.onDestroy((function() {
                        return r(n && Bl(n, "destroy", e))
                    }))
            }
        }

        function Bl(e, t, n) {
            var r = n.totalTime,
                i = ql(e.element, e.triggerName, e.fromState, e.toState, t || e.phaseName, null == r ? e.totalTime : r, !!n.disabled),
                a = e._data;
            return null != a && (i._data = a), i
        }

        function ql(e, t, n, r) {
            var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
                a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                o = arguments.length > 6 ? arguments[6] : void 0;
            return {
                element: e,
                triggerName: t,
                fromState: n,
                toState: r,
                phaseName: i,
                totalTime: a,
                disabled: !!o
            }
        }

        function Ql(e, t, n) {
            var r;
            return e instanceof Map ? (r = e.get(t)) || e.set(t, r = n) : (r = e[t]) || (r = e[t] = n), r
        }

        function Wl(e) {
            var t = e.indexOf(":");
            return [e.substring(1, t), e.substr(t + 1)]
        }
        var Kl = function(e, t) {
                return !1
            },
            Zl = function(e, t) {
                return !1
            },
            Gl = function(e, t, n) {
                return []
            },
            Jl = Ul();
        (Jl || "undefined" != typeof Element) && (Kl = function(e, t) {
            return e.contains(t)
        }, Zl = function() {
            if (Jl || Element.prototype.matches) return function(e, t) {
                return e.matches(t)
            };
            var e = Element.prototype,
                t = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector;
            return t ? function(e, n) {
                return t.apply(e, [n])
            } : Zl
        }(), Gl = function(e, t, n) {
            var r = [];
            if (n) r.push.apply(r, _toConsumableArray(e.querySelectorAll(t)));
            else {
                var i = e.querySelector(t);
                i && r.push(i)
            }
            return r
        });
        var $l = null,
            Xl = !1;

        function Yl(e) {
            $l || ($l = ("undefined" != typeof document ? document.body : null) || {}, Xl = !!$l.style && "WebkitAppearance" in $l.style);
            var t = !0;
            return $l.style && ! function(e) {
                return "ebkit" == e.substring(1, 6)
            }(e) && (!(t = e in $l.style) && Xl) && (t = "Webkit" + e.charAt(0).toUpperCase() + e.substr(1) in $l.style), t
        }
        var ec = Zl,
            tc = Kl,
            nc = Gl;

        function rc(e) {
            var t = {};
            return Object.keys(e).forEach((function(n) {
                var r = n.replace(/([a-z])([A-Z])/g, "$1-$2");
                t[r] = e[n]
            })), t
        }
        var ic, ac = ((ic = function() {
                function e() {
                    _classCallCheck(this, e)
                }
                return _createClass(e, [{
                    key: "validateStyleProperty",
                    value: function(e) {
                        return Yl(e)
                    }
                }, {
                    key: "matchesElement",
                    value: function(e, t) {
                        return ec(e, t)
                    }
                }, {
                    key: "containsElement",
                    value: function(e, t) {
                        return tc(e, t)
                    }
                }, {
                    key: "query",
                    value: function(e, t, n) {
                        return nc(e, t, n)
                    }
                }, {
                    key: "computeStyle",
                    value: function(e, t, n) {
                        return n || ""
                    }
                }, {
                    key: "animate",
                    value: function(e, t, n, r, i) {
                        return arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && arguments[6], new Ml(n, r)
                    }
                }]), e
            }()).\u0275fac = function(e) {
                return new(e || ic)
            }, ic.\u0275prov = fe({
                token: ic,
                factory: ic.\u0275fac
            }), ic),
            oc = function() {
                var e = function e() {
                    _classCallCheck(this, e)
                };
                return e.NOOP = new ac, e
            }();

        function sc(e) {
            if ("number" == typeof e) return e;
            var t = e.match(/^(-?[\.\d]+)(m?s)/);
            return !t || t.length < 2 ? 0 : uc(parseFloat(t[1]), t[2])
        }

        function uc(e, t) {
            switch (t) {
                case "s":
                    return 1e3 * e;
                default:
                    return e
            }
        }

        function lc(e, t, n) {
            return e.hasOwnProperty("duration") ? e : function(e, t, n) {
                var r, i = 0,
                    a = "";
                if ("string" == typeof e) {
                    var o = e.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);
                    if (null === o) return t.push('The provided timing value "'.concat(e, '" is invalid.')), {
                        duration: 0,
                        delay: 0,
                        easing: ""
                    };
                    r = uc(parseFloat(o[1]), o[2]);
                    var s = o[3];
                    null != s && (i = uc(parseFloat(s), o[4]));
                    var u = o[5];
                    u && (a = u)
                } else r = e;
                if (!n) {
                    var l = !1,
                        c = t.length;
                    r < 0 && (t.push("Duration values below 0 are not allowed for this animation step."), l = !0), i < 0 && (t.push("Delay values below 0 are not allowed for this animation step."), l = !0), l && t.splice(c, 0, 'The provided timing value "'.concat(e, '" is invalid.'))
                }
                return {
                    duration: r,
                    delay: i,
                    easing: a
                }
            }(e, t, n)
        }

        function cc(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return Object.keys(e).forEach((function(n) {
                t[n] = e[n]
            })), t
        }

        function hc(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (t)
                for (var r in e) n[r] = e[r];
            else cc(e, n);
            return n
        }

        function fc(e, t, n) {
            return n ? t + ":" + n + ";" : ""
        }

        function dc(e) {
            for (var t = "", n = 0; n < e.style.length; n++) {
                var r = e.style.item(n);
                t += fc(0, r, e.style.getPropertyValue(r))
            }
            for (var i in e.style) e.style.hasOwnProperty(i) && !i.startsWith("_") && (t += fc(0, i.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), e.style[i]));
            e.setAttribute("style", t)
        }

        function vc(e, t, n) {
            e.style && (Object.keys(t).forEach((function(r) {
                var i = Cc(r);
                n && !n.hasOwnProperty(r) && (n[r] = e.style[i]), e.style[i] = t[r]
            })), Ul() && dc(e))
        }

        function pc(e, t) {
            e.style && (Object.keys(t).forEach((function(t) {
                var n = Cc(t);
                e.style[n] = ""
            })), Ul() && dc(e))
        }

        function yc(e) {
            return Array.isArray(e) ? 1 == e.length ? e[0] : Dl(e) : e
        }
        var mc = new RegExp("{{\\s*(.+?)\\s*}}", "g");

        function gc(e) {
            var t = [];
            if ("string" == typeof e) {
                for (var n; n = mc.exec(e);) t.push(n[1]);
                mc.lastIndex = 0
            }
            return t
        }

        function _c(e, t, n) {
            var r = e.toString(),
                i = r.replace(mc, (function(e, r) {
                    var i = t[r];
                    return t.hasOwnProperty(r) || (n.push("Please provide a value for the animation param ".concat(r)), i = ""), i.toString()
                }));
            return i == r ? e : i
        }

        function kc(e) {
            for (var t = [], n = e.next(); !n.done;) t.push(n.value), n = e.next();
            return t
        }
        var bc = /-+([a-z0-9])/g;

        function Cc(e) {
            return e.replace(bc, (function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return t[1].toUpperCase()
            }))
        }

        function wc(e, t) {
            return 0 === e || 0 === t
        }

        function Sc(e, t, n) {
            var r = Object.keys(n);
            if (r.length && t.length) {
                var i = t[0],
                    a = [];
                if (r.forEach((function(e) {
                        i.hasOwnProperty(e) || a.push(e), i[e] = n[e]
                    })), a.length)
                    for (var o = function() {
                            var n = t[s];
                            a.forEach((function(t) {
                                n[t] = Tc(e, t)
                            }))
                        }, s = 1; s < t.length; s++) o()
            }
            return t
        }

        function Ec(e, t, n) {
            switch (t.type) {
                case 7:
                    return e.visitTrigger(t, n);
                case 0:
                    return e.visitState(t, n);
                case 1:
                    return e.visitTransition(t, n);
                case 2:
                    return e.visitSequence(t, n);
                case 3:
                    return e.visitGroup(t, n);
                case 4:
                    return e.visitAnimate(t, n);
                case 5:
                    return e.visitKeyframes(t, n);
                case 6:
                    return e.visitStyle(t, n);
                case 8:
                    return e.visitReference(t, n);
                case 9:
                    return e.visitAnimateChild(t, n);
                case 10:
                    return e.visitAnimateRef(t, n);
                case 11:
                    return e.visitQuery(t, n);
                case 12:
                    return e.visitStagger(t, n);
                default:
                    throw new Error("Unable to resolve animation metadata node #".concat(t.type))
            }
        }

        function Tc(e, t) {
            return window.getComputedStyle(e)[t]
        }
        var xc = new Set(["true", "1"]),
            Ac = new Set(["false", "0"]);

        function Oc(e, t) {
            var n = xc.has(e) || Ac.has(e),
                r = xc.has(t) || Ac.has(t);
            return function(i, a) {
                var o = "*" == e || e == i,
                    s = "*" == t || t == a;
                return !o && n && "boolean" == typeof i && (o = i ? xc.has(e) : Ac.has(e)), !s && r && "boolean" == typeof a && (s = a ? xc.has(t) : Ac.has(t)), o && s
            }
        }
        var Ic = new RegExp("s*:selfs*,?", "g");

        function Rc(e, t, n) {
            return new Pc(e).build(t, n)
        }
        var Pc = function() {
                function e(t) {
                    _classCallCheck(this, e), this._driver = t
                }
                return _createClass(e, [{
                    key: "build",
                    value: function(e, t) {
                        var n = new Nc(t);
                        return this._resetContextStyleTimingState(n), Ec(this, yc(e), n)
                    }
                }, {
                    key: "_resetContextStyleTimingState",
                    value: function(e) {
                        e.currentQuerySelector = "", e.collectedStyles = {}, e.collectedStyles[""] = {}, e.currentTime = 0
                    }
                }, {
                    key: "visitTrigger",
                    value: function(e, t) {
                        var n = this,
                            r = t.queryCount = 0,
                            i = t.depCount = 0,
                            a = [],
                            o = [];
                        return "@" == e.name.charAt(0) && t.errors.push("animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"), e.definitions.forEach((function(e) {
                            if (n._resetContextStyleTimingState(t), 0 == e.type) {
                                var s = e,
                                    u = s.name;
                                u.toString().split(/\s*,\s*/).forEach((function(e) {
                                    s.name = e, a.push(n.visitState(s, t))
                                })), s.name = u
                            } else if (1 == e.type) {
                                var l = n.visitTransition(e, t);
                                r += l.queryCount, i += l.depCount, o.push(l)
                            } else t.errors.push("only state() and transition() definitions can sit inside of a trigger()")
                        })), {
                            type: 7,
                            name: e.name,
                            states: a,
                            transitions: o,
                            queryCount: r,
                            depCount: i,
                            options: null
                        }
                    }
                }, {
                    key: "visitState",
                    value: function(e, t) {
                        var n = this.visitStyle(e.styles, t),
                            r = e.options && e.options.params || null;
                        if (n.containsDynamicStyles) {
                            var i = new Set,
                                a = r || {};
                            if (n.styles.forEach((function(e) {
                                    if (Dc(e)) {
                                        var t = e;
                                        Object.keys(t).forEach((function(e) {
                                            gc(t[e]).forEach((function(e) {
                                                a.hasOwnProperty(e) || i.add(e)
                                            }))
                                        }))
                                    }
                                })), i.size) {
                                var o = kc(i.values());
                                t.errors.push('state("'.concat(e.name, '", ...) must define default values for all the following style substitutions: ').concat(o.join(", ")))
                            }
                        }
                        return {
                            type: 0,
                            name: e.name,
                            style: n,
                            options: r ? {
                                params: r
                            } : null
                        }
                    }
                }, {
                    key: "visitTransition",
                    value: function(e, t) {
                        t.queryCount = 0, t.depCount = 0;
                        var n, r, i, a = Ec(this, yc(e.animation), t);
                        return {
                            type: 1,
                            matchers: (n = e.expr, r = t.errors, i = [], "string" == typeof n ? n.split(/\s*,\s*/).forEach((function(e) {
                                return function(e, t, n) {
                                    if (":" == e[0]) {
                                        var r = function(e, t) {
                                            switch (e) {
                                                case ":enter":
                                                    return "void => *";
                                                case ":leave":
                                                    return "* => void";
                                                case ":increment":
                                                    return function(e, t) {
                                                        return parseFloat(t) > parseFloat(e)
                                                    };
                                                case ":decrement":
                                                    return function(e, t) {
                                                        return parseFloat(t) < parseFloat(e)
                                                    };
                                                default:
                                                    return t.push('The transition alias value "'.concat(e, '" is not supported')), "* => *"
                                            }
                                        }(e, n);
                                        if ("function" == typeof r) return void t.push(r);
                                        e = r
                                    }
                                    var i = e.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                                    if (null == i || i.length < 4) return n.push('The provided transition expression "'.concat(e, '" is not supported')), t;
                                    var a = i[1],
                                        o = i[2],
                                        s = i[3];
                                    t.push(Oc(a, s)), "<" != o[0] || "*" == a && "*" == s || t.push(Oc(s, a))
                                }(e, i, r)
                            })) : i.push(n), i),
                            animation: a,
                            queryCount: t.queryCount,
                            depCount: t.depCount,
                            options: jc(e.options)
                        }
                    }
                }, {
                    key: "visitSequence",
                    value: function(e, t) {
                        var n = this;
                        return {
                            type: 2,
                            steps: e.steps.map((function(e) {
                                return Ec(n, e, t)
                            })),
                            options: jc(e.options)
                        }
                    }
                }, {
                    key: "visitGroup",
                    value: function(e, t) {
                        var n = this,
                            r = t.currentTime,
                            i = 0,
                            a = e.steps.map((function(e) {
                                t.currentTime = r;
                                var a = Ec(n, e, t);
                                return i = Math.max(i, t.currentTime), a
                            }));
                        return t.currentTime = i, {
                            type: 3,
                            steps: a,
                            options: jc(e.options)
                        }
                    }
                }, {
                    key: "visitAnimate",
                    value: function(e, t) {
                        var n, r = function(e, t) {
                            var n = null;
                            if (e.hasOwnProperty("duration")) n = e;
                            else if ("number" == typeof e) return Fc(lc(e, t).duration, 0, "");
                            var r = e;
                            if (r.split(/\s+/).some((function(e) {
                                    return "{" == e.charAt(0) && "{" == e.charAt(1)
                                }))) {
                                var i = Fc(0, 0, "");
                                return i.dynamic = !0, i.strValue = r, i
                            }
                            return Fc((n = n || lc(r, t)).duration, n.delay, n.easing)
                        }(e.timings, t.errors);
                        t.currentAnimateTimings = r;
                        var i = e.styles ? e.styles : jl({});
                        if (5 == i.type) n = this.visitKeyframes(i, t);
                        else {
                            var a = e.styles,
                                o = !1;
                            if (!a) {
                                o = !0;
                                var s = {};
                                r.easing && (s.easing = r.easing), a = jl(s)
                            }
                            t.currentTime += r.duration + r.delay;
                            var u = this.visitStyle(a, t);
                            u.isEmptyStep = o, n = u
                        }
                        return t.currentAnimateTimings = null, {
                            type: 4,
                            timings: r,
                            style: n,
                            options: null
                        }
                    }
                }, {
                    key: "visitStyle",
                    value: function(e, t) {
                        var n = this._makeStyleAst(e, t);
                        return this._validateStyleAst(n, t), n
                    }
                }, {
                    key: "_makeStyleAst",
                    value: function(e, t) {
                        var n = [];
                        Array.isArray(e.styles) ? e.styles.forEach((function(e) {
                            "string" == typeof e ? "*" == e ? n.push(e) : t.errors.push("The provided style string value ".concat(e, " is not allowed.")) : n.push(e)
                        })) : n.push(e.styles);
                        var r = !1,
                            i = null;
                        return n.forEach((function(e) {
                            if (Dc(e)) {
                                var t = e,
                                    n = t.easing;
                                if (n && (i = n, delete t.easing), !r)
                                    for (var a in t)
                                        if (t[a].toString().indexOf("{{") >= 0) {
                                            r = !0;
                                            break
                                        }
                            }
                        })), {
                            type: 6,
                            styles: n,
                            easing: i,
                            offset: e.offset,
                            containsDynamicStyles: r,
                            options: null
                        }
                    }
                }, {
                    key: "_validateStyleAst",
                    value: function(e, t) {
                        var n = this,
                            r = t.currentAnimateTimings,
                            i = t.currentTime,
                            a = t.currentTime;
                        r && a > 0 && (a -= r.duration + r.delay), e.styles.forEach((function(e) {
                            "string" != typeof e && Object.keys(e).forEach((function(r) {
                                if (n._driver.validateStyleProperty(r)) {
                                    var o, s, u, l, c, h = t.collectedStyles[t.currentQuerySelector],
                                        f = h[r],
                                        d = !0;
                                    f && (a != i && a >= f.startTime && i <= f.endTime && (t.errors.push('The CSS property "'.concat(r, '" that exists between the times of "').concat(f.startTime, 'ms" and "').concat(f.endTime, 'ms" is also being animated in a parallel animation between the times of "').concat(a, 'ms" and "').concat(i, 'ms"')), d = !1), a = f.startTime), d && (h[r] = {
                                        startTime: a,
                                        endTime: i
                                    }), t.options && (o = e[r], s = t.options, u = t.errors, l = s.params || {}, (c = gc(o)).length && c.forEach((function(e) {
                                        l.hasOwnProperty(e) || u.push("Unable to resolve the local animation param ".concat(e, " in the given list of values"))
                                    })))
                                } else t.errors.push('The provided animation property "'.concat(r, '" is not a supported CSS property for animations'))
                            }))
                        }))
                    }
                }, {
                    key: "visitKeyframes",
                    value: function(e, t) {
                        var n = this,
                            r = {
                                type: 5,
                                styles: [],
                                options: null
                            };
                        if (!t.currentAnimateTimings) return t.errors.push("keyframes() must be placed inside of a call to animate()"), r;
                        var i = 0,
                            a = [],
                            o = !1,
                            s = !1,
                            u = 0,
                            l = e.steps.map((function(e) {
                                var r = n._makeStyleAst(e, t),
                                    l = null != r.offset ? r.offset : function(e) {
                                        if ("string" == typeof e) return null;
                                        var t = null;
                                        if (Array.isArray(e)) e.forEach((function(e) {
                                            if (Dc(e) && e.hasOwnProperty("offset")) {
                                                var n = e;
                                                t = parseFloat(n.offset), delete n.offset
                                            }
                                        }));
                                        else if (Dc(e) && e.hasOwnProperty("offset")) {
                                            var n = e;
                                            t = parseFloat(n.offset), delete n.offset
                                        }
                                        return t
                                    }(r.styles),
                                    c = 0;
                                return null != l && (i++, c = r.offset = l), s = s || c < 0 || c > 1, o = o || c < u, u = c, a.push(c), r
                            }));
                        s && t.errors.push("Please ensure that all keyframe offsets are between 0 and 1"), o && t.errors.push("Please ensure that all keyframe offsets are in order");
                        var c = e.steps.length,
                            h = 0;
                        i > 0 && i < c ? t.errors.push("Not all style() steps within the declared keyframes() contain offsets") : 0 == i && (h = 1 / (c - 1));
                        var f = c - 1,
                            d = t.currentTime,
                            v = t.currentAnimateTimings,
                            p = v.duration;
                        return l.forEach((function(e, i) {
                            var o = h > 0 ? i == f ? 1 : h * i : a[i],
                                s = o * p;
                            t.currentTime = d + v.delay + s, v.duration = s, n._validateStyleAst(e, t), e.offset = o, r.styles.push(e)
                        })), r
                    }
                }, {
                    key: "visitReference",
                    value: function(e, t) {
                        return {
                            type: 8,
                            animation: Ec(this, yc(e.animation), t),
                            options: jc(e.options)
                        }
                    }
                }, {
                    key: "visitAnimateChild",
                    value: function(e, t) {
                        return t.depCount++, {
                            type: 9,
                            options: jc(e.options)
                        }
                    }
                }, {
                    key: "visitAnimateRef",
                    value: function(e, t) {
                        return {
                            type: 10,
                            animation: this.visitReference(e.animation, t),
                            options: jc(e.options)
                        }
                    }
                }, {
                    key: "visitQuery",
                    value: function(e, t) {
                        var n = t.currentQuerySelector,
                            r = e.options || {};
                        t.queryCount++, t.currentQuery = e;
                        var i = _slicedToArray(function(e) {
                                var t = !!e.split(/\s*,\s*/).find((function(e) {
                                    return ":self" == e
                                }));
                                return t && (e = e.replace(Ic, "")), [e = e.replace(/@\*/g, ".ng-trigger").replace(/@\w+/g, (function(e) {
                                    return ".ng-trigger-" + e.substr(1)
                                })).replace(/:animating/g, ".ng-animating"), t]
                            }(e.selector), 2),
                            a = i[0],
                            o = i[1];
                        t.currentQuerySelector = n.length ? n + " " + a : a, Ql(t.collectedStyles, t.currentQuerySelector, {});
                        var s = Ec(this, yc(e.animation), t);
                        return t.currentQuery = null, t.currentQuerySelector = n, {
                            type: 11,
                            selector: a,
                            limit: r.limit || 0,
                            optional: !!r.optional,
                            includeSelf: o,
                            animation: s,
                            originalSelector: e.selector,
                            options: jc(e.options)
                        }
                    }
                }, {
                    key: "visitStagger",
                    value: function(e, t) {
                        t.currentQuery || t.errors.push("stagger() can only be used inside of query()");
                        var n = "full" === e.timings ? {
                            duration: 0,
                            delay: 0,
                            easing: "full"
                        } : lc(e.timings, t.errors, !0);
                        return {
                            type: 12,
                            animation: Ec(this, yc(e.animation), t),
                            timings: n,
                            options: null
                        }
                    }
                }]), e
            }(),
            Nc = function e(t) {
                _classCallCheck(this, e), this.errors = t, this.queryCount = 0, this.depCount = 0, this.currentTransition = null, this.currentQuery = null, this.currentQuerySelector = null, this.currentAnimateTimings = null, this.currentTime = 0, this.collectedStyles = {}, this.options = null
            };

        function Dc(e) {
            return !Array.isArray(e) && "object" == typeof e
        }

        function jc(e) {
            var t;
            return e ? (e = cc(e)).params && (e.params = (t = e.params) ? cc(t) : null) : e = {}, e
        }

        function Fc(e, t, n) {
            return {
                duration: e,
                delay: t,
                easing: n
            }
        }

        function Mc(e, t, n, r, i, a) {
            var o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                s = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
            return {
                type: 1,
                element: e,
                keyframes: t,
                preStyleProps: n,
                postStyleProps: r,
                duration: i,
                delay: a,
                totalTime: i + a,
                easing: o,
                subTimeline: s
            }
        }
        var Lc = function() {
                function e() {
                    _classCallCheck(this, e), this._map = new Map
                }
                return _createClass(e, [{
                    key: "consume",
                    value: function(e) {
                        var t = this._map.get(e);
                        return t ? this._map.delete(e) : t = [], t
                    }
                }, {
                    key: "append",
                    value: function(e, t) {
                        var n, r = this._map.get(e);
                        r || this._map.set(e, r = []), (n = r).push.apply(n, _toConsumableArray(t))
                    }
                }, {
                    key: "has",
                    value: function(e) {
                        return this._map.has(e)
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this._map.clear()
                    }
                }]), e
            }(),
            Uc = new RegExp(":enter", "g"),
            Hc = new RegExp(":leave", "g");

        function Vc(e, t, n, r, i) {
            var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {},
                s = arguments.length > 7 ? arguments[7] : void 0,
                u = arguments.length > 8 ? arguments[8] : void 0,
                l = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : [];
            return (new zc).buildKeyframes(e, t, n, r, i, a, o, s, u, l)
        }
        var zc = function() {
                function e() {
                    _classCallCheck(this, e)
                }
                return _createClass(e, [{
                    key: "buildKeyframes",
                    value: function(e, t, n, r, i, a, o, s, u) {
                        var l = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : [];
                        u = u || new Lc;
                        var c = new qc(e, t, u, r, i, l, []);
                        c.options = s, c.currentTimeline.setStyles([a], null, c.errors, s), Ec(this, n, c);
                        var h = c.timelines.filter((function(e) {
                            return e.containsAnimation()
                        }));
                        if (h.length && Object.keys(o).length) {
                            var f = h[h.length - 1];
                            f.allowOnlyTimelineStyles() || f.setStyles([o], null, c.errors, s)
                        }
                        return h.length ? h.map((function(e) {
                            return e.buildKeyframes()
                        })) : [Mc(t, [], [], [], 0, 0, "", !1)]
                    }
                }, {
                    key: "visitTrigger",
                    value: function(e, t) {}
                }, {
                    key: "visitState",
                    value: function(e, t) {}
                }, {
                    key: "visitTransition",
                    value: function(e, t) {}
                }, {
                    key: "visitAnimateChild",
                    value: function(e, t) {
                        var n = t.subInstructions.consume(t.element);
                        if (n) {
                            var r = t.createSubContext(e.options),
                                i = t.currentTimeline.currentTime,
                                a = this._visitSubInstructions(n, r, r.options);
                            i != a && t.transformIntoNewTimeline(a)
                        }
                        t.previousNode = e
                    }
                }, {
                    key: "visitAnimateRef",
                    value: function(e, t) {
                        var n = t.createSubContext(e.options);
                        n.transformIntoNewTimeline(), this.visitReference(e.animation, n), t.transformIntoNewTimeline(n.currentTimeline.currentTime), t.previousNode = e
                    }
                }, {
                    key: "_visitSubInstructions",
                    value: function(e, t, n) {
                        var r = t.currentTimeline.currentTime,
                            i = null != n.duration ? sc(n.duration) : null,
                            a = null != n.delay ? sc(n.delay) : null;
                        return 0 !== i && e.forEach((function(e) {
                            var n = t.appendInstructionToTimeline(e, i, a);
                            r = Math.max(r, n.duration + n.delay)
                        })), r
                    }
                }, {
                    key: "visitReference",
                    value: function(e, t) {
                        t.updateOptions(e.options, !0), Ec(this, e.animation, t), t.previousNode = e
                    }
                }, {
                    key: "visitSequence",
                    value: function(e, t) {
                        var n = this,
                            r = t.subContextCount,
                            i = t,
                            a = e.options;
                        if (a && (a.params || a.delay) && ((i = t.createSubContext(a)).transformIntoNewTimeline(), null != a.delay)) {
                            6 == i.previousNode.type && (i.currentTimeline.snapshotCurrentStyles(), i.previousNode = Bc);
                            var o = sc(a.delay);
                            i.delayNextStep(o)
                        }
                        e.steps.length && (e.steps.forEach((function(e) {
                            return Ec(n, e, i)
                        })), i.currentTimeline.applyStylesToKeyframe(), i.subContextCount > r && i.transformIntoNewTimeline()), t.previousNode = e
                    }
                }, {
                    key: "visitGroup",
                    value: function(e, t) {
                        var n = this,
                            r = [],
                            i = t.currentTimeline.currentTime,
                            a = e.options && e.options.delay ? sc(e.options.delay) : 0;
                        e.steps.forEach((function(o) {
                            var s = t.createSubContext(e.options);
                            a && s.delayNextStep(a), Ec(n, o, s), i = Math.max(i, s.currentTimeline.currentTime), r.push(s.currentTimeline)
                        })), r.forEach((function(e) {
                            return t.currentTimeline.mergeTimelineCollectedStyles(e)
                        })), t.transformIntoNewTimeline(i), t.previousNode = e
                    }
                }, {
                    key: "_visitTiming",
                    value: function(e, t) {
                        if (e.dynamic) {
                            var n = e.strValue;
                            return lc(t.params ? _c(n, t.params, t.errors) : n, t.errors)
                        }
                        return {
                            duration: e.duration,
                            delay: e.delay,
                            easing: e.easing
                        }
                    }
                }, {
                    key: "visitAnimate",
                    value: function(e, t) {
                        var n = t.currentAnimateTimings = this._visitTiming(e.timings, t),
                            r = t.currentTimeline;
                        n.delay && (t.incrementTime(n.delay), r.snapshotCurrentStyles());
                        var i = e.style;
                        5 == i.type ? this.visitKeyframes(i, t) : (t.incrementTime(n.duration), this.visitStyle(i, t), r.applyStylesToKeyframe()), t.currentAnimateTimings = null, t.previousNode = e
                    }
                }, {
                    key: "visitStyle",
                    value: function(e, t) {
                        var n = t.currentTimeline,
                            r = t.currentAnimateTimings;
                        !r && n.getCurrentStyleProperties().length && n.forwardFrame();
                        var i = r && r.easing || e.easing;
                        e.isEmptyStep ? n.applyEmptyStep(i) : n.setStyles(e.styles, i, t.errors, t.options), t.previousNode = e
                    }
                }, {
                    key: "visitKeyframes",
                    value: function(e, t) {
                        var n = t.currentAnimateTimings,
                            r = t.currentTimeline.duration,
                            i = n.duration,
                            a = t.createSubContext().currentTimeline;
                        a.easing = n.easing, e.styles.forEach((function(e) {
                            a.forwardTime((e.offset || 0) * i), a.setStyles(e.styles, e.easing, t.errors, t.options), a.applyStylesToKeyframe()
                        })), t.currentTimeline.mergeTimelineCollectedStyles(a), t.transformIntoNewTimeline(r + i), t.previousNode = e
                    }
                }, {
                    key: "visitQuery",
                    value: function(e, t) {
                        var n = this,
                            r = t.currentTimeline.currentTime,
                            i = e.options || {},
                            a = i.delay ? sc(i.delay) : 0;
                        a && (6 === t.previousNode.type || 0 == r && t.currentTimeline.getCurrentStyleProperties().length) && (t.currentTimeline.snapshotCurrentStyles(), t.previousNode = Bc);
                        var o = r,
                            s = t.invokeQuery(e.selector, e.originalSelector, e.limit, e.includeSelf, !!i.optional, t.errors);
                        t.currentQueryTotal = s.length;
                        var u = null;
                        s.forEach((function(r, i) {
                            t.currentQueryIndex = i;
                            var s = t.createSubContext(e.options, r);
                            a && s.delayNextStep(a), r === t.element && (u = s.currentTimeline), Ec(n, e.animation, s), s.currentTimeline.applyStylesToKeyframe(), o = Math.max(o, s.currentTimeline.currentTime)
                        })), t.currentQueryIndex = 0, t.currentQueryTotal = 0, t.transformIntoNewTimeline(o), u && (t.currentTimeline.mergeTimelineCollectedStyles(u), t.currentTimeline.snapshotCurrentStyles()), t.previousNode = e
                    }
                }, {
                    key: "visitStagger",
                    value: function(e, t) {
                        var n = t.parentContext,
                            r = t.currentTimeline,
                            i = e.timings,
                            a = Math.abs(i.duration),
                            o = a * (t.currentQueryTotal - 1),
                            s = a * t.currentQueryIndex;
                        switch (i.duration < 0 ? "reverse" : i.easing) {
                            case "reverse":
                                s = o - s;
                                break;
                            case "full":
                                s = n.currentStaggerTime
                        }
                        var u = t.currentTimeline;
                        s && u.delayNextStep(s);
                        var l = u.currentTime;
                        Ec(this, e.animation, t), t.previousNode = e, n.currentStaggerTime = r.currentTime - l + (r.startTime - n.currentTimeline.startTime)
                    }
                }]), e
            }(),
            Bc = {},
            qc = function() {
                function e(t, n, r, i, a, o, s, u) {
                    _classCallCheck(this, e), this._driver = t, this.element = n, this.subInstructions = r, this._enterClassName = i, this._leaveClassName = a, this.errors = o, this.timelines = s, this.parentContext = null, this.currentAnimateTimings = null, this.previousNode = Bc, this.subContextCount = 0, this.options = {}, this.currentQueryIndex = 0, this.currentQueryTotal = 0, this.currentStaggerTime = 0, this.currentTimeline = u || new Qc(this._driver, n, 0), s.push(this.currentTimeline)
                }
                return _createClass(e, [{
                    key: "params",
                    get: function() {
                        return this.options.params
                    }
                }, {
                    key: "updateOptions",
                    value: function(e, t) {
                        var n = this;
                        if (e) {
                            var r = e,
                                i = this.options;
                            null != r.duration && (i.duration = sc(r.duration)), null != r.delay && (i.delay = sc(r.delay));
                            var a = r.params;
                            if (a) {
                                var o = i.params;
                                o || (o = this.options.params = {}), Object.keys(a).forEach((function(e) {
                                    t && o.hasOwnProperty(e) || (o[e] = _c(a[e], o, n.errors))
                                }))
                            }
                        }
                    }
                }, {
                    key: "_copyOptions",
                    value: function() {
                        var e = {};
                        if (this.options) {
                            var t = this.options.params;
                            if (t) {
                                var n = e.params = {};
                                Object.keys(t).forEach((function(e) {
                                    n[e] = t[e]
                                }))
                            }
                        }
                        return e
                    }
                }, {
                    key: "createSubContext",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            n = arguments.length > 1 ? arguments[1] : void 0,
                            r = arguments.length > 2 ? arguments[2] : void 0,
                            i = n || this.element,
                            a = new e(this._driver, i, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(i, r || 0));
                        return a.previousNode = this.previousNode, a.currentAnimateTimings = this.currentAnimateTimings, a.options = this._copyOptions(), a.updateOptions(t), a.currentQueryIndex = this.currentQueryIndex, a.currentQueryTotal = this.currentQueryTotal, a.parentContext = this, this.subContextCount++, a
                    }
                }, {
                    key: "transformIntoNewTimeline",
                    value: function(e) {
                        return this.previousNode = Bc, this.currentTimeline = this.currentTimeline.fork(this.element, e), this.timelines.push(this.currentTimeline), this.currentTimeline
                    }
                }, {
                    key: "appendInstructionToTimeline",
                    value: function(e, t, n) {
                        var r = {
                                duration: null != t ? t : e.duration,
                                delay: this.currentTimeline.currentTime + (null != n ? n : 0) + e.delay,
                                easing: ""
                            },
                            i = new Wc(this._driver, e.element, e.keyframes, e.preStyleProps, e.postStyleProps, r, e.stretchStartingKeyframe);
                        return this.timelines.push(i), r
                    }
                }, {
                    key: "incrementTime",
                    value: function(e) {
                        this.currentTimeline.forwardTime(this.currentTimeline.duration + e)
                    }
                }, {
                    key: "delayNextStep",
                    value: function(e) {
                        e > 0 && this.currentTimeline.delayNextStep(e)
                    }
                }, {
                    key: "invokeQuery",
                    value: function(e, t, n, r, i, a) {
                        var o = [];
                        if (r && o.push(this.element), e.length > 0) {
                            e = (e = e.replace(Uc, "." + this._enterClassName)).replace(Hc, "." + this._leaveClassName);
                            var s = this._driver.query(this.element, e, 1 != n);
                            0 !== n && (s = n < 0 ? s.slice(s.length + n, s.length) : s.slice(0, n)), o.push.apply(o, _toConsumableArray(s))
                        }
                        return i || 0 != o.length || a.push('`query("'.concat(t, '")` returned zero elements. (Use `query("').concat(t, '", { optional: true })` if you wish to allow this.)')), o
                    }
                }]), e
            }(),
            Qc = function() {
                function e(t, n, r, i) {
                    _classCallCheck(this, e), this._driver = t, this.element = n, this.startTime = r, this._elementTimelineStylesLookup = i, this.duration = 0, this._previousKeyframe = {}, this._currentKeyframe = {}, this._keyframes = new Map, this._styleSummary = {}, this._pendingStyles = {}, this._backFill = {}, this._currentEmptyStepKeyframe = null, this._elementTimelineStylesLookup || (this._elementTimelineStylesLookup = new Map), this._localTimelineStyles = Object.create(this._backFill, {}), this._globalTimelineStyles = this._elementTimelineStylesLookup.get(n), this._globalTimelineStyles || (this._globalTimelineStyles = this._localTimelineStyles, this._elementTimelineStylesLookup.set(n, this._localTimelineStyles)), this._loadKeyframe()
                }
                return _createClass(e, [{
                    key: "containsAnimation",
                    value: function() {
                        switch (this._keyframes.size) {
                            case 0:
                                return !1;
                            case 1:
                                return this.getCurrentStyleProperties().length > 0;
                            default:
                                return !0
                        }
                    }
                }, {
                    key: "getCurrentStyleProperties",
                    value: function() {
                        return Object.keys(this._currentKeyframe)
                    }
                }, {
                    key: "currentTime",
                    get: function() {
                        return this.startTime + this.duration
                    }
                }, {
                    key: "delayNextStep",
                    value: function(e) {
                        var t = 1 == this._keyframes.size && Object.keys(this._pendingStyles).length;
                        this.duration || t ? (this.forwardTime(this.currentTime + e), t && this.snapshotCurrentStyles()) : this.startTime += e
                    }
                }, {
                    key: "fork",
                    value: function(t, n) {
                        return this.applyStylesToKeyframe(), new e(this._driver, t, n || this.currentTime, this._elementTimelineStylesLookup)
                    }
                }, {
                    key: "_loadKeyframe",
                    value: function() {
                        this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe), this._currentKeyframe = this._keyframes.get(this.duration), this._currentKeyframe || (this._currentKeyframe = Object.create(this._backFill, {}), this._keyframes.set(this.duration, this._currentKeyframe))
                    }
                }, {
                    key: "forwardFrame",
                    value: function() {
                        this.duration += 1, this._loadKeyframe()
                    }
                }, {
                    key: "forwardTime",
                    value: function(e) {
                        this.applyStylesToKeyframe(), this.duration = e, this._loadKeyframe()
                    }
                }, {
                    key: "_updateStyle",
                    value: function(e, t) {
                        this._localTimelineStyles[e] = t, this._globalTimelineStyles[e] = t, this._styleSummary[e] = {
                            time: this.currentTime,
                            value: t
                        }
                    }
                }, {
                    key: "allowOnlyTimelineStyles",
                    value: function() {
                        return this._currentEmptyStepKeyframe !== this._currentKeyframe
                    }
                }, {
                    key: "applyEmptyStep",
                    value: function(e) {
                        var t = this;
                        e && (this._previousKeyframe.easing = e), Object.keys(this._globalTimelineStyles).forEach((function(e) {
                            t._backFill[e] = t._globalTimelineStyles[e] || "*", t._currentKeyframe[e] = "*"
                        })), this._currentEmptyStepKeyframe = this._currentKeyframe
                    }
                }, {
                    key: "setStyles",
                    value: function(e, t, n, r) {
                        var i = this;
                        t && (this._previousKeyframe.easing = t);
                        var a = r && r.params || {},
                            o = function(e, t) {
                                var n, r = {};
                                return e.forEach((function(e) {
                                    "*" === e ? (n = n || Object.keys(t)).forEach((function(e) {
                                        r[e] = "*"
                                    })) : hc(e, !1, r)
                                })), r
                            }(e, this._globalTimelineStyles);
                        Object.keys(o).forEach((function(e) {
                            var t = _c(o[e], a, n);
                            i._pendingStyles[e] = t, i._localTimelineStyles.hasOwnProperty(e) || (i._backFill[e] = i._globalTimelineStyles.hasOwnProperty(e) ? i._globalTimelineStyles[e] : "*"), i._updateStyle(e, t)
                        }))
                    }
                }, {
                    key: "applyStylesToKeyframe",
                    value: function() {
                        var e = this,
                            t = this._pendingStyles,
                            n = Object.keys(t);
                        0 != n.length && (this._pendingStyles = {}, n.forEach((function(n) {
                            e._currentKeyframe[n] = t[n]
                        })), Object.keys(this._localTimelineStyles).forEach((function(t) {
                            e._currentKeyframe.hasOwnProperty(t) || (e._currentKeyframe[t] = e._localTimelineStyles[t])
                        })))
                    }
                }, {
                    key: "snapshotCurrentStyles",
                    value: function() {
                        var e = this;
                        Object.keys(this._localTimelineStyles).forEach((function(t) {
                            var n = e._localTimelineStyles[t];
                            e._pendingStyles[t] = n, e._updateStyle(t, n)
                        }))
                    }
                }, {
                    key: "getFinalKeyframe",
                    value: function() {
                        return this._keyframes.get(this.duration)
                    }
                }, {
                    key: "properties",
                    get: function() {
                        var e = [];
                        for (var t in this._currentKeyframe) e.push(t);
                        return e
                    }
                }, {
                    key: "mergeTimelineCollectedStyles",
                    value: function(e) {
                        var t = this;
                        Object.keys(e._styleSummary).forEach((function(n) {
                            var r = t._styleSummary[n],
                                i = e._styleSummary[n];
                            (!r || i.time > r.time) && t._updateStyle(n, i.value)
                        }))
                    }
                }, {
                    key: "buildKeyframes",
                    value: function() {
                        var e = this;
                        this.applyStylesToKeyframe();
                        var t = new Set,
                            n = new Set,
                            r = 1 === this._keyframes.size && 0 === this.duration,
                            i = [];
                        this._keyframes.forEach((function(a, o) {
                            var s = hc(a, !0);
                            Object.keys(s).forEach((function(e) {
                                var r = s[e];
                                "!" == r ? t.add(e) : "*" == r && n.add(e)
                            })), r || (s.offset = o / e.duration), i.push(s)
                        }));
                        var a = t.size ? kc(t.values()) : [],
                            o = n.size ? kc(n.values()) : [];
                        if (r) {
                            var s = i[0],
                                u = cc(s);
                            s.offset = 0, u.offset = 1, i = [s, u]
                        }
                        return Mc(this.element, i, a, o, this.duration, this.startTime, this.easing, !1)
                    }
                }]), e
            }(),
            Wc = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r, i, a, o, s) {
                    var u, l = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
                    return _classCallCheck(this, n), (u = t.call(this, e, r, s.delay)).element = r, u.keyframes = i, u.preStyleProps = a, u.postStyleProps = o, u._stretchStartingKeyframe = l, u.timings = {
                        duration: s.duration,
                        delay: s.delay,
                        easing: s.easing
                    }, u
                }
                return _createClass(n, [{
                    key: "containsAnimation",
                    value: function() {
                        return this.keyframes.length > 1
                    }
                }, {
                    key: "buildKeyframes",
                    value: function() {
                        var e = this.keyframes,
                            t = this.timings,
                            n = t.delay,
                            r = t.duration,
                            i = t.easing;
                        if (this._stretchStartingKeyframe && n) {
                            var a = [],
                                o = r + n,
                                s = n / o,
                                u = hc(e[0], !1);
                            u.offset = 0, a.push(u);
                            var l = hc(e[0], !1);
                            l.offset = Kc(s), a.push(l);
                            for (var c = e.length - 1, h = 1; h <= c; h++) {
                                var f = hc(e[h], !1);
                                f.offset = Kc((n + f.offset * r) / o), a.push(f)
                            }
                            r = o, n = 0, i = "", e = a
                        }
                        return Mc(this.element, e, this.preStyleProps, this.postStyleProps, r, n, i, !0)
                    }
                }]), n
            }(Qc);

        function Kc(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
                n = Math.pow(10, t - 1);
            return Math.round(e * n) / n
        }
        var Zc = function e() {
                _classCallCheck(this, e)
            },
            Gc = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n() {
                    return _classCallCheck(this, n), t.apply(this, arguments)
                }
                return _createClass(n, [{
                    key: "normalizePropertyName",
                    value: function(e, t) {
                        return Cc(e)
                    }
                }, {
                    key: "normalizeStyleValue",
                    value: function(e, t, n, r) {
                        var i = "",
                            a = n.toString().trim();
                        if (Jc[t] && 0 !== n && "0" !== n)
                            if ("number" == typeof n) i = "px";
                            else {
                                var o = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
                                o && 0 == o[1].length && r.push("Please provide a CSS unit value for ".concat(e, ":").concat(n))
                            } return a + i
                    }
                }]), n
            }(Zc),
            Jc = function(e) {
                var t = {};
                return e.forEach((function(e) {
                    return t[e] = !0
                })), t
            }("width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(","));

        function $c(e, t, n, r, i, a, o, s, u, l, c, h, f) {
            return {
                type: 0,
                element: e,
                triggerName: t,
                isRemovalTransition: i,
                fromState: n,
                fromStyles: a,
                toState: r,
                toStyles: o,
                timelines: s,
                queriedElements: u,
                preStyleProps: l,
                postStyleProps: c,
                totalTime: h,
                errors: f
            }
        }
        var Xc = {},
            Yc = function() {
                function e(t, n, r) {
                    _classCallCheck(this, e), this._triggerName = t, this.ast = n, this._stateStyles = r
                }
                return _createClass(e, [{
                    key: "match",
                    value: function(e, t, n, r) {
                        return function(e, t, n, r, i) {
                            return e.some((function(e) {
                                return e(t, n, r, i)
                            }))
                        }(this.ast.matchers, e, t, n, r)
                    }
                }, {
                    key: "buildStyles",
                    value: function(e, t, n) {
                        var r = this._stateStyles["*"],
                            i = this._stateStyles[e],
                            a = r ? r.buildStyles(t, n) : {};
                        return i ? i.buildStyles(t, n) : a
                    }
                }, {
                    key: "build",
                    value: function(e, t, n, r, i, a, o, s, u, l) {
                        var c = [],
                            h = this.ast.options && this.ast.options.params || Xc,
                            f = this.buildStyles(n, o && o.params || Xc, c),
                            d = s && s.params || Xc,
                            v = this.buildStyles(r, d, c),
                            p = new Set,
                            y = new Map,
                            m = new Map,
                            g = "void" === r,
                            _ = {
                                params: Object.assign(Object.assign({}, h), d)
                            },
                            k = l ? [] : Vc(e, t, this.ast.animation, i, a, f, v, _, u, c),
                            b = 0;
                        if (k.forEach((function(e) {
                                b = Math.max(e.duration + e.delay, b)
                            })), c.length) return $c(t, this._triggerName, n, r, g, f, v, [], [], y, m, b, c);
                        k.forEach((function(e) {
                            var n = e.element,
                                r = Ql(y, n, {});
                            e.preStyleProps.forEach((function(e) {
                                return r[e] = !0
                            }));
                            var i = Ql(m, n, {});
                            e.postStyleProps.forEach((function(e) {
                                return i[e] = !0
                            })), n !== t && p.add(n)
                        }));
                        var C = kc(p.values());
                        return $c(t, this._triggerName, n, r, g, f, v, k, C, y, m, b)
                    }
                }]), e
            }(),
            eh = function() {
                function e(t, n) {
                    _classCallCheck(this, e), this.styles = t, this.defaultParams = n
                }
                return _createClass(e, [{
                    key: "buildStyles",
                    value: function(e, t) {
                        var n = {},
                            r = cc(this.defaultParams);
                        return Object.keys(e).forEach((function(t) {
                            var n = e[t];
                            null != n && (r[t] = n)
                        })), this.styles.styles.forEach((function(e) {
                            if ("string" != typeof e) {
                                var i = e;
                                Object.keys(i).forEach((function(e) {
                                    var a = i[e];
                                    a.length > 1 && (a = _c(a, r, t)), n[e] = a
                                }))
                            }
                        })), n
                    }
                }]), e
            }(),
            th = function() {
                function e(t, n) {
                    var r = this;
                    _classCallCheck(this, e), this.name = t, this.ast = n, this.transitionFactories = [], this.states = {}, n.states.forEach((function(e) {
                        r.states[e.name] = new eh(e.style, e.options && e.options.params || {})
                    })), nh(this.states, "true", "1"), nh(this.states, "false", "0"), n.transitions.forEach((function(e) {
                        r.transitionFactories.push(new Yc(t, e, r.states))
                    })), this.fallbackTransition = new Yc(t, {
                        type: 1,
                        animation: {
                            type: 2,
                            steps: [],
                            options: null
                        },
                        matchers: [function(e, t) {
                            return !0
                        }],
                        options: null,
                        queryCount: 0,
                        depCount: 0
                    }, this.states)
                }
                return _createClass(e, [{
                    key: "containsQueries",
                    get: function() {
                        return this.ast.queryCount > 0
                    }
                }, {
                    key: "matchTransition",
                    value: function(e, t, n, r) {
                        return this.transitionFactories.find((function(i) {
                            return i.match(e, t, n, r)
                        })) || null
                    }
                }, {
                    key: "matchStyles",
                    value: function(e, t, n) {
                        return this.fallbackTransition.buildStyles(e, t, n)
                    }
                }]), e
            }();

        function nh(e, t, n) {
            e.hasOwnProperty(t) ? e.hasOwnProperty(n) || (e[n] = e[t]) : e.hasOwnProperty(n) && (e[t] = e[n])
        }
        var rh = new Lc,
            ih = function() {
                function e(t, n, r) {
                    _classCallCheck(this, e), this.bodyNode = t, this._driver = n, this._normalizer = r, this._animations = {}, this._playersById = {}, this.players = []
                }
                return _createClass(e, [{
                    key: "register",
                    value: function(e, t) {
                        var n = [],
                            r = Rc(this._driver, t, n);
                        if (n.length) throw new Error("Unable to build the animation due to the following errors: ".concat(n.join("\n")));
                        this._animations[e] = r
                    }
                }, {
                    key: "_buildPlayer",
                    value: function(e, t, n) {
                        var r = e.element,
                            i = Vl(0, this._normalizer, 0, e.keyframes, t, n);
                        return this._driver.animate(r, i, e.duration, e.delay, e.easing, [], !0)
                    }
                }, {
                    key: "create",
                    value: function(e, t) {
                        var n, r = this,
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            a = [],
                            o = this._animations[e],
                            s = new Map;
                        if (o ? (n = Vc(this._driver, t, o, "ng-enter", "ng-leave", {}, {}, i, rh, a)).forEach((function(e) {
                                var t = Ql(s, e.element, {});
                                e.postStyleProps.forEach((function(e) {
                                    return t[e] = null
                                }))
                            })) : (a.push("The requested animation doesn't exist or has already been destroyed"), n = []), a.length) throw new Error("Unable to create the animation due to the following errors: ".concat(a.join("\n")));
                        s.forEach((function(e, t) {
                            Object.keys(e).forEach((function(n) {
                                e[n] = r._driver.computeStyle(t, n, "*")
                            }))
                        }));
                        var u = Hl(n.map((function(e) {
                            var t = s.get(e.element);
                            return r._buildPlayer(e, {}, t)
                        })));
                        return this._playersById[e] = u, u.onDestroy((function() {
                            return r.destroy(e)
                        })), this.players.push(u), u
                    }
                }, {
                    key: "destroy",
                    value: function(e) {
                        var t = this._getPlayer(e);
                        t.destroy(), delete this._playersById[e];
                        var n = this.players.indexOf(t);
                        n >= 0 && this.players.splice(n, 1)
                    }
                }, {
                    key: "_getPlayer",
                    value: function(e) {
                        var t = this._playersById[e];
                        if (!t) throw new Error("Unable to find the timeline player referenced by ".concat(e));
                        return t
                    }
                }, {
                    key: "listen",
                    value: function(e, t, n, r) {
                        var i = ql(t, "", "", "");
                        return zl(this._getPlayer(e), n, i, r),
                            function() {}
                    }
                }, {
                    key: "command",
                    value: function(e, t, n, r) {
                        if ("register" != n)
                            if ("create" != n) {
                                var i = this._getPlayer(e);
                                switch (n) {
                                    case "play":
                                        i.play();
                                        break;
                                    case "pause":
                                        i.pause();
                                        break;
                                    case "reset":
                                        i.reset();
                                        break;
                                    case "restart":
                                        i.restart();
                                        break;
                                    case "finish":
                                        i.finish();
                                        break;
                                    case "init":
                                        i.init();
                                        break;
                                    case "setPosition":
                                        i.setPosition(parseFloat(r[0]));
                                        break;
                                    case "destroy":
                                        this.destroy(e)
                                }
                            } else this.create(e, t, r[0] || {});
                        else this.register(e, r[0])
                    }
                }]), e
            }(),
            ah = [],
            oh = {
                namespaceId: "",
                setForRemoval: !1,
                setForMove: !1,
                hasAnimation: !1,
                removedBeforeQueried: !1
            },
            sh = {
                namespaceId: "",
                setForMove: !1,
                setForRemoval: !1,
                hasAnimation: !1,
                removedBeforeQueried: !0
            },
            uh = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    _classCallCheck(this, e), this.namespaceId = n;
                    var r, i = t && t.hasOwnProperty("value");
                    if (this.value = null != (r = i ? t.value : t) ? r : null, i) {
                        var a = cc(t);
                        delete a.value, this.options = a
                    } else this.options = {};
                    this.options.params || (this.options.params = {})
                }
                return _createClass(e, [{
                    key: "params",
                    get: function() {
                        return this.options.params
                    }
                }, {
                    key: "absorbOptions",
                    value: function(e) {
                        var t = e.params;
                        if (t) {
                            var n = this.options.params;
                            Object.keys(t).forEach((function(e) {
                                null == n[e] && (n[e] = t[e])
                            }))
                        }
                    }
                }]), e
            }(),
            lh = new uh("void"),
            ch = function() {
                function e(t, n, r) {
                    _classCallCheck(this, e), this.id = t, this.hostElement = n, this._engine = r, this.players = [], this._triggers = {}, this._queue = [], this._elementListeners = new Map, this._hostClassName = "ng-tns-" + t, mh(n, this._hostClassName)
                }
                return _createClass(e, [{
                    key: "listen",
                    value: function(e, t, n, r) {
                        var i, a = this;
                        if (!this._triggers.hasOwnProperty(t)) throw new Error('Unable to listen on the animation trigger event "'.concat(n, '" because the animation trigger "').concat(t, "\" doesn't exist!"));
                        if (null == n || 0 == n.length) throw new Error('Unable to listen on the animation trigger "'.concat(t, '" because the provided event is undefined!'));
                        if ("start" != (i = n) && "done" != i) throw new Error('The provided animation trigger event "'.concat(n, '" for the animation trigger "').concat(t, '" is not supported!'));
                        var o = Ql(this._elementListeners, e, []),
                            s = {
                                name: t,
                                phase: n,
                                callback: r
                            };
                        o.push(s);
                        var u = Ql(this._engine.statesByElement, e, {});
                        return u.hasOwnProperty(t) || (mh(e, "ng-trigger"), mh(e, "ng-trigger-" + t), u[t] = lh),
                            function() {
                                a._engine.afterFlush((function() {
                                    var e = o.indexOf(s);
                                    e >= 0 && o.splice(e, 1), a._triggers[t] || delete u[t]
                                }))
                            }
                    }
                }, {
                    key: "register",
                    value: function(e, t) {
                        return !this._triggers[e] && (this._triggers[e] = t, !0)
                    }
                }, {
                    key: "_getTrigger",
                    value: function(e) {
                        var t = this._triggers[e];
                        if (!t) throw new Error('The provided animation trigger "'.concat(e, '" has not been registered!'));
                        return t
                    }
                }, {
                    key: "trigger",
                    value: function(e, t, n) {
                        var r = this,
                            i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                            a = this._getTrigger(t),
                            o = new fh(this.id, t, e),
                            s = this._engine.statesByElement.get(e);
                        s || (mh(e, "ng-trigger"), mh(e, "ng-trigger-" + t), this._engine.statesByElement.set(e, s = {}));
                        var u = s[t],
                            l = new uh(n, this.id);
                        if (!(n && n.hasOwnProperty("value")) && u && l.absorbOptions(u.options), s[t] = l, u || (u = lh), "void" === l.value || u.value !== l.value) {
                            var c = Ql(this._engine.playersByElement, e, []);
                            c.forEach((function(e) {
                                e.namespaceId == r.id && e.triggerName == t && e.queued && e.destroy()
                            }));
                            var h = a.matchTransition(u.value, l.value, e, l.params),
                                f = !1;
                            if (!h) {
                                if (!i) return;
                                h = a.fallbackTransition, f = !0
                            }
                            return this._engine.totalQueuedPlayers++, this._queue.push({
                                element: e,
                                triggerName: t,
                                transition: h,
                                fromState: u,
                                toState: l,
                                player: o,
                                isFallbackTransition: f
                            }), f || (mh(e, "ng-animate-queued"), o.onStart((function() {
                                gh(e, "ng-animate-queued")
                            }))), o.onDone((function() {
                                var t = r.players.indexOf(o);
                                t >= 0 && r.players.splice(t, 1);
                                var n = r._engine.playersByElement.get(e);
                                if (n) {
                                    var i = n.indexOf(o);
                                    i >= 0 && n.splice(i, 1)
                                }
                            })), this.players.push(o), c.push(o), o
                        }
                        if (! function(e, t) {
                                var n = Object.keys(e),
                                    r = Object.keys(t);
                                if (n.length != r.length) return !1;
                                for (var i = 0; i < n.length; i++) {
                                    var a = n[i];
                                    if (!t.hasOwnProperty(a) || e[a] !== t[a]) return !1
                                }
                                return !0
                            }(u.params, l.params)) {
                            var d = [],
                                v = a.matchStyles(u.value, u.params, d),
                                p = a.matchStyles(l.value, l.params, d);
                            d.length ? this._engine.reportError(d) : this._engine.afterFlush((function() {
                                pc(e, v), vc(e, p)
                            }))
                        }
                    }
                }, {
                    key: "deregister",
                    value: function(e) {
                        var t = this;
                        delete this._triggers[e], this._engine.statesByElement.forEach((function(t, n) {
                            delete t[e]
                        })), this._elementListeners.forEach((function(n, r) {
                            t._elementListeners.set(r, n.filter((function(t) {
                                return t.name != e
                            })))
                        }))
                    }
                }, {
                    key: "clearElementCache",
                    value: function(e) {
                        this._engine.statesByElement.delete(e), this._elementListeners.delete(e);
                        var t = this._engine.playersByElement.get(e);
                        t && (t.forEach((function(e) {
                            return e.destroy()
                        })), this._engine.playersByElement.delete(e))
                    }
                }, {
                    key: "_signalRemovalForInnerTriggers",
                    value: function(e, t) {
                        var n = this,
                            r = this._engine.driver.query(e, ".ng-trigger", !0);
                        r.forEach((function(e) {
                            if (!e.__ng_removed) {
                                var r = n._engine.fetchNamespacesByElement(e);
                                r.size ? r.forEach((function(n) {
                                    return n.triggerLeaveAnimation(e, t, !1, !0)
                                })) : n.clearElementCache(e)
                            }
                        })), this._engine.afterFlushAnimationsDone((function() {
                            return r.forEach((function(e) {
                                return n.clearElementCache(e)
                            }))
                        }))
                    }
                }, {
                    key: "triggerLeaveAnimation",
                    value: function(e, t, n, r) {
                        var i = this,
                            a = this._engine.statesByElement.get(e);
                        if (a) {
                            var o = [];
                            if (Object.keys(a).forEach((function(t) {
                                    if (i._triggers[t]) {
                                        var n = i.trigger(e, t, "void", r);
                                        n && o.push(n)
                                    }
                                })), o.length) return this._engine.markElementAsRemoved(this.id, e, !0, t), n && Hl(o).onDone((function() {
                                return i._engine.processLeaveNode(e)
                            })), !0
                        }
                        return !1
                    }
                }, {
                    key: "prepareLeaveAnimationListeners",
                    value: function(e) {
                        var t = this,
                            n = this._elementListeners.get(e);
                        if (n) {
                            var r = new Set;
                            n.forEach((function(n) {
                                var i = n.name;
                                if (!r.has(i)) {
                                    r.add(i);
                                    var a = t._triggers[i].fallbackTransition,
                                        o = t._engine.statesByElement.get(e)[i] || lh,
                                        s = new uh("void"),
                                        u = new fh(t.id, i, e);
                                    t._engine.totalQueuedPlayers++, t._queue.push({
                                        element: e,
                                        triggerName: i,
                                        transition: a,
                                        fromState: o,
                                        toState: s,
                                        player: u,
                                        isFallbackTransition: !0
                                    })
                                }
                            }))
                        }
                    }
                }, {
                    key: "removeNode",
                    value: function(e, t) {
                        var n = this,
                            r = this._engine;
                        if (e.childElementCount && this._signalRemovalForInnerTriggers(e, t), !this.triggerLeaveAnimation(e, t, !0)) {
                            var i = !1;
                            if (r.totalAnimations) {
                                var a = r.players.length ? r.playersByQueriedElement.get(e) : [];
                                if (a && a.length) i = !0;
                                else
                                    for (var o = e; o = o.parentNode;)
                                        if (r.statesByElement.get(o)) {
                                            i = !0;
                                            break
                                        }
                            }
                            if (this.prepareLeaveAnimationListeners(e), i) r.markElementAsRemoved(this.id, e, !1, t);
                            else {
                                var s = e.__ng_removed;
                                s && s !== oh || (r.afterFlush((function() {
                                    return n.clearElementCache(e)
                                })), r.destroyInnerAnimations(e), r._onRemovalComplete(e, t))
                            }
                        }
                    }
                }, {
                    key: "insertNode",
                    value: function(e, t) {
                        mh(e, this._hostClassName)
                    }
                }, {
                    key: "drainQueuedTransitions",
                    value: function(e) {
                        var t = this,
                            n = [];
                        return this._queue.forEach((function(r) {
                            var i = r.player;
                            if (!i.destroyed) {
                                var a = r.element,
                                    o = t._elementListeners.get(a);
                                o && o.forEach((function(t) {
                                    if (t.name == r.triggerName) {
                                        var n = ql(a, r.triggerName, r.fromState.value, r.toState.value);
                                        n._data = e, zl(r.player, t.phase, n, t.callback)
                                    }
                                })), i.markedForDestroy ? t._engine.afterFlush((function() {
                                    i.destroy()
                                })) : n.push(r)
                            }
                        })), this._queue = [], n.sort((function(e, n) {
                            var r = e.transition.ast.depCount,
                                i = n.transition.ast.depCount;
                            return 0 == r || 0 == i ? r - i : t._engine.driver.containsElement(e.element, n.element) ? 1 : -1
                        }))
                    }
                }, {
                    key: "destroy",
                    value: function(e) {
                        this.players.forEach((function(e) {
                            return e.destroy()
                        })), this._signalRemovalForInnerTriggers(this.hostElement, e)
                    }
                }, {
                    key: "elementContainsData",
                    value: function(e) {
                        var t = !1;
                        return this._elementListeners.has(e) && (t = !0), t = !!this._queue.find((function(t) {
                            return t.element === e
                        })) || t
                    }
                }]), e
            }(),
            hh = function() {
                function e(t, n, r) {
                    _classCallCheck(this, e), this.bodyNode = t, this.driver = n, this._normalizer = r, this.players = [], this.newHostElements = new Map, this.playersByElement = new Map, this.playersByQueriedElement = new Map, this.statesByElement = new Map, this.disabledNodes = new Set, this.totalAnimations = 0, this.totalQueuedPlayers = 0, this._namespaceLookup = {}, this._namespaceList = [], this._flushFns = [], this._whenQuietFns = [], this.namespacesByHostElement = new Map, this.collectedEnterElements = [], this.collectedLeaveElements = [], this.onRemovalComplete = function(e, t) {}
                }
                return _createClass(e, [{
                    key: "_onRemovalComplete",
                    value: function(e, t) {
                        this.onRemovalComplete(e, t)
                    }
                }, {
                    key: "queuedPlayers",
                    get: function() {
                        var e = [];
                        return this._namespaceList.forEach((function(t) {
                            t.players.forEach((function(t) {
                                t.queued && e.push(t)
                            }))
                        })), e
                    }
                }, {
                    key: "createNamespace",
                    value: function(e, t) {
                        var n = new ch(e, t, this);
                        return t.parentNode ? this._balanceNamespaceList(n, t) : (this.newHostElements.set(t, n), this.collectEnterElement(t)), this._namespaceLookup[e] = n
                    }
                }, {
                    key: "_balanceNamespaceList",
                    value: function(e, t) {
                        var n = this._namespaceList.length - 1;
                        if (n >= 0) {
                            for (var r = !1, i = n; i >= 0; i--)
                                if (this.driver.containsElement(this._namespaceList[i].hostElement, t)) {
                                    this._namespaceList.splice(i + 1, 0, e), r = !0;
                                    break
                                } r || this._namespaceList.splice(0, 0, e)
                        } else this._namespaceList.push(e);
                        return this.namespacesByHostElement.set(t, e), e
                    }
                }, {
                    key: "register",
                    value: function(e, t) {
                        var n = this._namespaceLookup[e];
                        return n || (n = this.createNamespace(e, t)), n
                    }
                }, {
                    key: "registerTrigger",
                    value: function(e, t, n) {
                        var r = this._namespaceLookup[e];
                        r && r.register(t, n) && this.totalAnimations++
                    }
                }, {
                    key: "destroy",
                    value: function(e, t) {
                        var n = this;
                        if (e) {
                            var r = this._fetchNamespace(e);
                            this.afterFlush((function() {
                                n.namespacesByHostElement.delete(r.hostElement), delete n._namespaceLookup[e];
                                var t = n._namespaceList.indexOf(r);
                                t >= 0 && n._namespaceList.splice(t, 1)
                            })), this.afterFlushAnimationsDone((function() {
                                return r.destroy(t)
                            }))
                        }
                    }
                }, {
                    key: "_fetchNamespace",
                    value: function(e) {
                        return this._namespaceLookup[e]
                    }
                }, {
                    key: "fetchNamespacesByElement",
                    value: function(e) {
                        var t = new Set,
                            n = this.statesByElement.get(e);
                        if (n)
                            for (var r = Object.keys(n), i = 0; i < r.length; i++) {
                                var a = n[r[i]].namespaceId;
                                if (a) {
                                    var o = this._fetchNamespace(a);
                                    o && t.add(o)
                                }
                            }
                        return t
                    }
                }, {
                    key: "trigger",
                    value: function(e, t, n, r) {
                        if (dh(t)) {
                            var i = this._fetchNamespace(e);
                            if (i) return i.trigger(t, n, r), !0
                        }
                        return !1
                    }
                }, {
                    key: "insertNode",
                    value: function(e, t, n, r) {
                        if (dh(t)) {
                            var i = t.__ng_removed;
                            if (i && i.setForRemoval) {
                                i.setForRemoval = !1, i.setForMove = !0;
                                var a = this.collectedLeaveElements.indexOf(t);
                                a >= 0 && this.collectedLeaveElements.splice(a, 1)
                            }
                            if (e) {
                                var o = this._fetchNamespace(e);
                                o && o.insertNode(t, n)
                            }
                            r && this.collectEnterElement(t)
                        }
                    }
                }, {
                    key: "collectEnterElement",
                    value: function(e) {
                        this.collectedEnterElements.push(e)
                    }
                }, {
                    key: "markElementAsDisabled",
                    value: function(e, t) {
                        t ? this.disabledNodes.has(e) || (this.disabledNodes.add(e), mh(e, "ng-animate-disabled")) : this.disabledNodes.has(e) && (this.disabledNodes.delete(e), gh(e, "ng-animate-disabled"))
                    }
                }, {
                    key: "removeNode",
                    value: function(e, t, n, r) {
                        if (dh(t)) {
                            var i = e ? this._fetchNamespace(e) : null;
                            if (i ? i.removeNode(t, r) : this.markElementAsRemoved(e, t, !1, r), n) {
                                var a = this.namespacesByHostElement.get(t);
                                a && a.id !== e && a.removeNode(t, r)
                            }
                        } else this._onRemovalComplete(t, r)
                    }
                }, {
                    key: "markElementAsRemoved",
                    value: function(e, t, n, r) {
                        this.collectedLeaveElements.push(t), t.__ng_removed = {
                            namespaceId: e,
                            setForRemoval: r,
                            hasAnimation: n,
                            removedBeforeQueried: !1
                        }
                    }
                }, {
                    key: "listen",
                    value: function(e, t, n, r, i) {
                        return dh(t) ? this._fetchNamespace(e).listen(t, n, r, i) : function() {}
                    }
                }, {
                    key: "_buildInstruction",
                    value: function(e, t, n, r, i) {
                        return e.transition.build(this.driver, e.element, e.fromState.value, e.toState.value, n, r, e.fromState.options, e.toState.options, t, i)
                    }
                }, {
                    key: "destroyInnerAnimations",
                    value: function(e) {
                        var t = this,
                            n = this.driver.query(e, ".ng-trigger", !0);
                        n.forEach((function(e) {
                            return t.destroyActiveAnimationsForElement(e)
                        })), 0 != this.playersByQueriedElement.size && (n = this.driver.query(e, ".ng-animating", !0)).forEach((function(e) {
                            return t.finishActiveQueriedAnimationOnElement(e)
                        }))
                    }
                }, {
                    key: "destroyActiveAnimationsForElement",
                    value: function(e) {
                        var t = this.playersByElement.get(e);
                        t && t.forEach((function(e) {
                            e.queued ? e.markedForDestroy = !0 : e.destroy()
                        }))
                    }
                }, {
                    key: "finishActiveQueriedAnimationOnElement",
                    value: function(e) {
                        var t = this.playersByQueriedElement.get(e);
                        t && t.forEach((function(e) {
                            return e.finish()
                        }))
                    }
                }, {
                    key: "whenRenderingDone",
                    value: function() {
                        var e = this;
                        return new Promise((function(t) {
                            if (e.players.length) return Hl(e.players).onDone((function() {
                                return t()
                            }));
                            t()
                        }))
                    }
                }, {
                    key: "processLeaveNode",
                    value: function(e) {
                        var t = this,
                            n = e.__ng_removed;
                        if (n && n.setForRemoval) {
                            if (e.__ng_removed = oh, n.namespaceId) {
                                this.destroyInnerAnimations(e);
                                var r = this._fetchNamespace(n.namespaceId);
                                r && r.clearElementCache(e)
                            }
                            this._onRemovalComplete(e, n.setForRemoval)
                        }
                        this.driver.matchesElement(e, ".ng-animate-disabled") && this.markElementAsDisabled(e, !1), this.driver.query(e, ".ng-animate-disabled", !0).forEach((function(e) {
                            t.markElementAsDisabled(e, !1)
                        }))
                    }
                }, {
                    key: "flush",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
                            n = [];
                        if (this.newHostElements.size && (this.newHostElements.forEach((function(t, n) {
                                return e._balanceNamespaceList(t, n)
                            })), this.newHostElements.clear()), this.totalAnimations && this.collectedEnterElements.length)
                            for (var r = 0; r < this.collectedEnterElements.length; r++) mh(this.collectedEnterElements[r], "ng-star-inserted");
                        if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
                            var i = [];
                            try {
                                n = this._flushAnimations(i, t)
                            } finally {
                                for (var a = 0; a < i.length; a++) i[a]()
                            }
                        } else
                            for (var o = 0; o < this.collectedLeaveElements.length; o++) this.processLeaveNode(this.collectedLeaveElements[o]);
                        if (this.totalQueuedPlayers = 0, this.collectedEnterElements.length = 0, this.collectedLeaveElements.length = 0, this._flushFns.forEach((function(e) {
                                return e()
                            })), this._flushFns = [], this._whenQuietFns.length) {
                            var s = this._whenQuietFns;
                            this._whenQuietFns = [], n.length ? Hl(n).onDone((function() {
                                s.forEach((function(e) {
                                    return e()
                                }))
                            })) : s.forEach((function(e) {
                                return e()
                            }))
                        }
                    }
                }, {
                    key: "reportError",
                    value: function(e) {
                        throw new Error("Unable to process animations due to the following failed trigger transitions\n ".concat(e.join("\n")))
                    }
                }, {
                    key: "_flushAnimations",
                    value: function(e, t) {
                        var n = this,
                            r = new Lc,
                            i = [],
                            a = new Map,
                            o = [],
                            s = new Map,
                            u = new Map,
                            l = new Map,
                            c = new Set;
                        this.disabledNodes.forEach((function(e) {
                            c.add(e);
                            for (var t = n.driver.query(e, ".ng-animate-queued", !0), r = 0; r < t.length; r++) c.add(t[r])
                        }));
                        var h = this.bodyNode,
                            f = Array.from(this.statesByElement.keys()),
                            d = yh(f, this.collectedEnterElements),
                            v = new Map,
                            p = 0;
                        d.forEach((function(e, t) {
                            var n = "ng-enter" + p++;
                            v.set(t, n), e.forEach((function(e) {
                                return mh(e, n)
                            }))
                        }));
                        for (var y = [], m = new Set, g = new Set, _ = 0; _ < this.collectedLeaveElements.length; _++) {
                            var k = this.collectedLeaveElements[_],
                                b = k.__ng_removed;
                            b && b.setForRemoval && (y.push(k), m.add(k), b.hasAnimation ? this.driver.query(k, ".ng-star-inserted", !0).forEach((function(e) {
                                return m.add(e)
                            })) : g.add(k))
                        }
                        var C = new Map,
                            w = yh(f, Array.from(m));
                        w.forEach((function(e, t) {
                            var n = "ng-leave" + p++;
                            C.set(t, n), e.forEach((function(e) {
                                return mh(e, n)
                            }))
                        })), e.push((function() {
                            d.forEach((function(e, t) {
                                var n = v.get(t);
                                e.forEach((function(e) {
                                    return gh(e, n)
                                }))
                            })), w.forEach((function(e, t) {
                                var n = C.get(t);
                                e.forEach((function(e) {
                                    return gh(e, n)
                                }))
                            })), y.forEach((function(e) {
                                n.processLeaveNode(e)
                            }))
                        }));
                        for (var S = [], E = [], T = this._namespaceList.length - 1; T >= 0; T--) this._namespaceList[T].drainQueuedTransitions(t).forEach((function(e) {
                            var t = e.player,
                                a = e.element;
                            if (S.push(t), n.collectedEnterElements.length) {
                                var c = a.__ng_removed;
                                if (c && c.setForMove) return void t.destroy()
                            }
                            var f = !h || !n.driver.containsElement(h, a),
                                d = C.get(a),
                                p = v.get(a),
                                y = n._buildInstruction(e, r, p, d, f);
                            if (!y.errors || !y.errors.length) return f ? (t.onStart((function() {
                                return pc(a, y.fromStyles)
                            })), t.onDestroy((function() {
                                return vc(a, y.toStyles)
                            })), void i.push(t)) : e.isFallbackTransition ? (t.onStart((function() {
                                return pc(a, y.fromStyles)
                            })), t.onDestroy((function() {
                                return vc(a, y.toStyles)
                            })), void i.push(t)) : (y.timelines.forEach((function(e) {
                                return e.stretchStartingKeyframe = !0
                            })), r.append(a, y.timelines), o.push({
                                instruction: y,
                                player: t,
                                element: a
                            }), y.queriedElements.forEach((function(e) {
                                return Ql(s, e, []).push(t)
                            })), y.preStyleProps.forEach((function(e, t) {
                                var n = Object.keys(e);
                                if (n.length) {
                                    var r = u.get(t);
                                    r || u.set(t, r = new Set), n.forEach((function(e) {
                                        return r.add(e)
                                    }))
                                }
                            })), void y.postStyleProps.forEach((function(e, t) {
                                var n = Object.keys(e),
                                    r = l.get(t);
                                r || l.set(t, r = new Set), n.forEach((function(e) {
                                    return r.add(e)
                                }))
                            })));
                            E.push(y)
                        }));
                        if (E.length) {
                            var x = [];
                            E.forEach((function(e) {
                                x.push("@".concat(e.triggerName, " has failed due to:\n")), e.errors.forEach((function(e) {
                                    return x.push("- ".concat(e, "\n"))
                                }))
                            })), S.forEach((function(e) {
                                return e.destroy()
                            })), this.reportError(x)
                        }
                        var A = new Map,
                            O = new Map;
                        o.forEach((function(e) {
                            var t = e.element;
                            r.has(t) && (O.set(t, t), n._beforeAnimationBuild(e.player.namespaceId, e.instruction, A))
                        })), i.forEach((function(e) {
                            var t = e.element;
                            n._getPreviousPlayers(t, !1, e.namespaceId, e.triggerName, null).forEach((function(e) {
                                Ql(A, t, []).push(e), e.destroy()
                            }))
                        }));
                        var I = y.filter((function(e) {
                                return kh(e, u, l)
                            })),
                            R = new Map;
                        ph(R, this.driver, g, l, "*").forEach((function(e) {
                            kh(e, u, l) && I.push(e)
                        }));
                        var P = new Map;
                        d.forEach((function(e, t) {
                            ph(P, n.driver, new Set(e), u, "!")
                        })), I.forEach((function(e) {
                            var t = R.get(e),
                                n = P.get(e);
                            R.set(e, Object.assign(Object.assign({}, t), n))
                        }));
                        var N = [],
                            D = [],
                            j = {};
                        o.forEach((function(e) {
                            var t = e.element,
                                o = e.player,
                                s = e.instruction;
                            if (r.has(t)) {
                                if (c.has(t)) return o.onDestroy((function() {
                                    return vc(t, s.toStyles)
                                })), o.disabled = !0, o.overrideTotalTime(s.totalTime), void i.push(o);
                                var u = j;
                                if (O.size > 1) {
                                    for (var l = t, h = []; l = l.parentNode;) {
                                        var f = O.get(l);
                                        if (f) {
                                            u = f;
                                            break
                                        }
                                        h.push(l)
                                    }
                                    h.forEach((function(e) {
                                        return O.set(e, u)
                                    }))
                                }
                                var d = n._buildAnimation(o.namespaceId, s, A, a, P, R);
                                if (o.setRealPlayer(d), u === j) N.push(o);
                                else {
                                    var v = n.playersByElement.get(u);
                                    v && v.length && (o.parentPlayer = Hl(v)), i.push(o)
                                }
                            } else pc(t, s.fromStyles), o.onDestroy((function() {
                                return vc(t, s.toStyles)
                            })), D.push(o), c.has(t) && i.push(o)
                        })), D.forEach((function(e) {
                            var t = a.get(e.element);
                            if (t && t.length) {
                                var n = Hl(t);
                                e.setRealPlayer(n)
                            }
                        })), i.forEach((function(e) {
                            e.parentPlayer ? e.syncPlayerEvents(e.parentPlayer) : e.destroy()
                        }));
                        for (var F = 0; F < y.length; F++) {
                            var M = y[F],
                                L = M.__ng_removed;
                            if (gh(M, "ng-leave"), !L || !L.hasAnimation) {
                                var U = [];
                                if (s.size) {
                                    var H = s.get(M);
                                    H && H.length && U.push.apply(U, _toConsumableArray(H));
                                    for (var V = this.driver.query(M, ".ng-animating", !0), z = 0; z < V.length; z++) {
                                        var B = s.get(V[z]);
                                        B && B.length && U.push.apply(U, _toConsumableArray(B))
                                    }
                                }
                                var q = U.filter((function(e) {
                                    return !e.destroyed
                                }));
                                q.length ? _h(this, M, q) : this.processLeaveNode(M)
                            }
                        }
                        return y.length = 0, N.forEach((function(e) {
                            n.players.push(e), e.onDone((function() {
                                e.destroy();
                                var t = n.players.indexOf(e);
                                n.players.splice(t, 1)
                            })), e.play()
                        })), N
                    }
                }, {
                    key: "elementContainsData",
                    value: function(e, t) {
                        var n = !1,
                            r = t.__ng_removed;
                        return r && r.setForRemoval && (n = !0), this.playersByElement.has(t) && (n = !0), this.playersByQueriedElement.has(t) && (n = !0), this.statesByElement.has(t) && (n = !0), this._fetchNamespace(e).elementContainsData(t) || n
                    }
                }, {
                    key: "afterFlush",
                    value: function(e) {
                        this._flushFns.push(e)
                    }
                }, {
                    key: "afterFlushAnimationsDone",
                    value: function(e) {
                        this._whenQuietFns.push(e)
                    }
                }, {
                    key: "_getPreviousPlayers",
                    value: function(e, t, n, r, i) {
                        var a = [];
                        if (t) {
                            var o = this.playersByQueriedElement.get(e);
                            o && (a = o)
                        } else {
                            var s = this.playersByElement.get(e);
                            if (s) {
                                var u = !i || "void" == i;
                                s.forEach((function(e) {
                                    e.queued || (u || e.triggerName == r) && a.push(e)
                                }))
                            }
                        }
                        return (n || r) && (a = a.filter((function(e) {
                            return !(n && n != e.namespaceId || r && r != e.triggerName)
                        }))), a
                    }
                }, {
                    key: "_beforeAnimationBuild",
                    value: function(e, t, n) {
                        var r, i = this,
                            a = t.element,
                            o = t.isRemovalTransition ? void 0 : e,
                            s = t.isRemovalTransition ? void 0 : t.triggerName,
                            u = _createForOfIteratorHelper(t.timelines);
                        try {
                            var l = function() {
                                var e = r.value.element,
                                    u = e !== a,
                                    l = Ql(n, e, []);
                                i._getPreviousPlayers(e, u, o, s, t.toState).forEach((function(e) {
                                    var t = e.getRealPlayer();
                                    t.beforeDestroy && t.beforeDestroy(), e.destroy(), l.push(e)
                                }))
                            };
                            for (u.s(); !(r = u.n()).done;) l()
                        } catch (c) {
                            u.e(c)
                        } finally {
                            u.f()
                        }
                        pc(a, t.fromStyles)
                    }
                }, {
                    key: "_buildAnimation",
                    value: function(e, t, n, r, i, a) {
                        var o = this,
                            s = t.triggerName,
                            u = t.element,
                            l = [],
                            c = new Set,
                            h = new Set,
                            f = t.timelines.map((function(t) {
                                var f = t.element;
                                c.add(f);
                                var d = f.__ng_removed;
                                if (d && d.removedBeforeQueried) return new Ml(t.duration, t.delay);
                                var v, p, y = f !== u,
                                    m = (v = (n.get(f) || ah).map((function(e) {
                                        return e.getRealPlayer()
                                    })), p = [], function e(t, n) {
                                        for (var r = 0; r < t.length; r++) {
                                            var i = t[r];
                                            i instanceof Ll ? e(i.players, n) : n.push(i)
                                        }
                                    }(v, p), p).filter((function(e) {
                                        return !!e.element && e.element === f
                                    })),
                                    g = i.get(f),
                                    _ = a.get(f),
                                    k = Vl(0, o._normalizer, 0, t.keyframes, g, _),
                                    b = o._buildPlayer(t, k, m);
                                if (t.subTimeline && r && h.add(f), y) {
                                    var C = new fh(e, s, f);
                                    C.setRealPlayer(b), l.push(C)
                                }
                                return b
                            }));
                        l.forEach((function(e) {
                            Ql(o.playersByQueriedElement, e.element, []).push(e), e.onDone((function() {
                                return function(e, t, n) {
                                    var r;
                                    if (e instanceof Map) {
                                        if (r = e.get(t)) {
                                            if (r.length) {
                                                var i = r.indexOf(n);
                                                r.splice(i, 1)
                                            }
                                            0 == r.length && e.delete(t)
                                        }
                                    } else if (r = e[t]) {
                                        if (r.length) {
                                            var a = r.indexOf(n);
                                            r.splice(a, 1)
                                        }
                                        0 == r.length && delete e[t]
                                    }
                                    return r
                                }(o.playersByQueriedElement, e.element, e)
                            }))
                        })), c.forEach((function(e) {
                            return mh(e, "ng-animating")
                        }));
                        var d = Hl(f);
                        return d.onDestroy((function() {
                            c.forEach((function(e) {
                                return gh(e, "ng-animating")
                            })), vc(u, t.toStyles)
                        })), h.forEach((function(e) {
                            Ql(r, e, []).push(d)
                        })), d
                    }
                }, {
                    key: "_buildPlayer",
                    value: function(e, t, n) {
                        return t.length > 0 ? this.driver.animate(e.element, t, e.duration, e.delay, e.easing, n) : new Ml(e.duration, e.delay)
                    }
                }]), e
            }(),
            fh = function() {
                function e(t, n, r) {
                    _classCallCheck(this, e), this.namespaceId = t, this.triggerName = n, this.element = r, this._player = new Ml, this._containsRealPlayer = !1, this._queuedCallbacks = {}, this.destroyed = !1, this.markedForDestroy = !1, this.disabled = !1, this.queued = !0, this.totalTime = 0
                }
                return _createClass(e, [{
                    key: "setRealPlayer",
                    value: function(e) {
                        var t = this;
                        this._containsRealPlayer || (this._player = e, Object.keys(this._queuedCallbacks).forEach((function(n) {
                            t._queuedCallbacks[n].forEach((function(t) {
                                return zl(e, n, void 0, t)
                            }))
                        })), this._queuedCallbacks = {}, this._containsRealPlayer = !0, this.overrideTotalTime(e.totalTime), this.queued = !1)
                    }
                }, {
                    key: "getRealPlayer",
                    value: function() {
                        return this._player
                    }
                }, {
                    key: "overrideTotalTime",
                    value: function(e) {
                        this.totalTime = e
                    }
                }, {
                    key: "syncPlayerEvents",
                    value: function(e) {
                        var t = this,
                            n = this._player;
                        n.triggerCallback && e.onStart((function() {
                            return n.triggerCallback("start")
                        })), e.onDone((function() {
                            return t.finish()
                        })), e.onDestroy((function() {
                            return t.destroy()
                        }))
                    }
                }, {
                    key: "_queueEvent",
                    value: function(e, t) {
                        Ql(this._queuedCallbacks, e, []).push(t)
                    }
                }, {
                    key: "onDone",
                    value: function(e) {
                        this.queued && this._queueEvent("done", e), this._player.onDone(e)
                    }
                }, {
                    key: "onStart",
                    value: function(e) {
                        this.queued && this._queueEvent("start", e), this._player.onStart(e)
                    }
                }, {
                    key: "onDestroy",
                    value: function(e) {
                        this.queued && this._queueEvent("destroy", e), this._player.onDestroy(e)
                    }
                }, {
                    key: "init",
                    value: function() {
                        this._player.init()
                    }
                }, {
                    key: "hasStarted",
                    value: function() {
                        return !this.queued && this._player.hasStarted()
                    }
                }, {
                    key: "play",
                    value: function() {
                        !this.queued && this._player.play()
                    }
                }, {
                    key: "pause",
                    value: function() {
                        !this.queued && this._player.pause()
                    }
                }, {
                    key: "restart",
                    value: function() {
                        !this.queued && this._player.restart()
                    }
                }, {
                    key: "finish",
                    value: function() {
                        this._player.finish()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.destroyed = !0, this._player.destroy()
                    }
                }, {
                    key: "reset",
                    value: function() {
                        !this.queued && this._player.reset()
                    }
                }, {
                    key: "setPosition",
                    value: function(e) {
                        this.queued || this._player.setPosition(e)
                    }
                }, {
                    key: "getPosition",
                    value: function() {
                        return this.queued ? 0 : this._player.getPosition()
                    }
                }, {
                    key: "triggerCallback",
                    value: function(e) {
                        var t = this._player;
                        t.triggerCallback && t.triggerCallback(e)
                    }
                }]), e
            }();

        function dh(e) {
            return e && 1 === e.nodeType
        }

        function vh(e, t) {
            var n = e.style.display;
            return e.style.display = null != t ? t : "none", n
        }

        function ph(e, t, n, r, i) {
            var a = [];
            n.forEach((function(e) {
                return a.push(vh(e))
            }));
            var o = [];
            r.forEach((function(n, r) {
                var a = {};
                n.forEach((function(e) {
                    var n = a[e] = t.computeStyle(r, e, i);
                    n && 0 != n.length || (r.__ng_removed = sh, o.push(r))
                })), e.set(r, a)
            }));
            var s = 0;
            return n.forEach((function(e) {
                return vh(e, a[s++])
            })), o
        }

        function yh(e, t) {
            var n = new Map;
            if (e.forEach((function(e) {
                    return n.set(e, [])
                })), 0 == t.length) return n;
            var r = new Set(t),
                i = new Map;
            return t.forEach((function(e) {
                var t = function e(t) {
                    if (!t) return 1;
                    var a = i.get(t);
                    if (a) return a;
                    var o = t.parentNode;
                    return a = n.has(o) ? o : r.has(o) ? 1 : e(o), i.set(t, a), a
                }(e);
                1 !== t && n.get(t).push(e)
            })), n
        }

        function mh(e, t) {
            if (e.classList) e.classList.add(t);
            else {
                var n = e.$$classes;
                n || (n = e.$$classes = {}), n[t] = !0
            }
        }

        function gh(e, t) {
            if (e.classList) e.classList.remove(t);
            else {
                var n = e.$$classes;
                n && delete n[t]
            }
        }

        function _h(e, t, n) {
            Hl(n).onDone((function() {
                return e.processLeaveNode(t)
            }))
        }

        function kh(e, t, n) {
            var r = n.get(e);
            if (!r) return !1;
            var i = t.get(e);
            return i ? r.forEach((function(e) {
                return i.add(e)
            })) : t.set(e, r), n.delete(e), !0
        }
        var bh = function() {
            function e(t, n, r) {
                var i = this;
                _classCallCheck(this, e), this.bodyNode = t, this._driver = n, this._triggerCache = {}, this.onRemovalComplete = function(e, t) {}, this._transitionEngine = new hh(t, n, r), this._timelineEngine = new ih(t, n, r), this._transitionEngine.onRemovalComplete = function(e, t) {
                    return i.onRemovalComplete(e, t)
                }
            }
            return _createClass(e, [{
                key: "registerTrigger",
                value: function(e, t, n, r, i) {
                    var a = e + "-" + r,
                        o = this._triggerCache[a];
                    if (!o) {
                        var s = [],
                            u = Rc(this._driver, i, s);
                        if (s.length) throw new Error('The animation trigger "'.concat(r, '" has failed to build due to the following errors:\n - ').concat(s.join("\n - ")));
                        o = function(e, t) {
                            return new th(e, t)
                        }(r, u), this._triggerCache[a] = o
                    }
                    this._transitionEngine.registerTrigger(t, r, o)
                }
            }, {
                key: "register",
                value: function(e, t) {
                    this._transitionEngine.register(e, t)
                }
            }, {
                key: "destroy",
                value: function(e, t) {
                    this._transitionEngine.destroy(e, t)
                }
            }, {
                key: "onInsert",
                value: function(e, t, n, r) {
                    this._transitionEngine.insertNode(e, t, n, r)
                }
            }, {
                key: "onRemove",
                value: function(e, t, n, r) {
                    this._transitionEngine.removeNode(e, t, r || !1, n)
                }
            }, {
                key: "disableAnimations",
                value: function(e, t) {
                    this._transitionEngine.markElementAsDisabled(e, t)
                }
            }, {
                key: "process",
                value: function(e, t, n, r) {
                    if ("@" == n.charAt(0)) {
                        var i = _slicedToArray(Wl(n), 2),
                            a = i[0],
                            o = i[1];
                        this._timelineEngine.command(a, t, o, r)
                    } else this._transitionEngine.trigger(e, t, n, r)
                }
            }, {
                key: "listen",
                value: function(e, t, n, r, i) {
                    if ("@" == n.charAt(0)) {
                        var a = _slicedToArray(Wl(n), 2),
                            o = a[0],
                            s = a[1];
                        return this._timelineEngine.listen(o, t, s, i)
                    }
                    return this._transitionEngine.listen(e, t, n, r, i)
                }
            }, {
                key: "flush",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                    this._transitionEngine.flush(e)
                }
            }, {
                key: "players",
                get: function() {
                    return this._transitionEngine.players.concat(this._timelineEngine.players)
                }
            }, {
                key: "whenRenderingDone",
                value: function() {
                    return this._transitionEngine.whenRenderingDone()
                }
            }]), e
        }();

        function Ch(e, t) {
            var n = null,
                r = null;
            return Array.isArray(t) && t.length ? (n = Sh(t[0]), t.length > 1 && (r = Sh(t[t.length - 1]))) : t && (n = Sh(t)), n || r ? new wh(e, n, r) : null
        }
        var wh = function() {
            var e = function() {
                function e(t, n, r) {
                    _classCallCheck(this, e), this._element = t, this._startStyles = n, this._endStyles = r, this._state = 0;
                    var i = e.initialStylesByElement.get(t);
                    i || e.initialStylesByElement.set(t, i = {}), this._initialStyles = i
                }
                return _createClass(e, [{
                    key: "start",
                    value: function() {
                        this._state < 1 && (this._startStyles && vc(this._element, this._startStyles, this._initialStyles), this._state = 1)
                    }
                }, {
                    key: "finish",
                    value: function() {
                        this.start(), this._state < 2 && (vc(this._element, this._initialStyles), this._endStyles && (vc(this._element, this._endStyles), this._endStyles = null), this._state = 1)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.finish(), this._state < 3 && (e.initialStylesByElement.delete(this._element), this._startStyles && (pc(this._element, this._startStyles), this._endStyles = null), this._endStyles && (pc(this._element, this._endStyles), this._endStyles = null), vc(this._element, this._initialStyles), this._state = 3)
                    }
                }]), e
            }();
            return e.initialStylesByElement = new WeakMap, e
        }();

        function Sh(e) {
            for (var t = null, n = Object.keys(e), r = 0; r < n.length; r++) {
                var i = n[r];
                Eh(i) && ((t = t || {})[i] = e[i])
            }
            return t
        }

        function Eh(e) {
            return "display" === e || "position" === e
        }
        var Th = function() {
            function e(t, n, r, i, a, o, s) {
                var u = this;
                _classCallCheck(this, e), this._element = t, this._name = n, this._duration = r, this._delay = i, this._easing = a, this._fillMode = o, this._onDoneFn = s, this._finished = !1, this._destroyed = !1, this._startTime = 0, this._position = 0, this._eventFn = function(e) {
                    return u._handleCallback(e)
                }
            }
            return _createClass(e, [{
                key: "apply",
                value: function() {
                    var e, t, n;
                    e = this._element, t = "".concat(this._duration, "ms ").concat(this._easing, " ").concat(this._delay, "ms 1 normal ").concat(this._fillMode, " ").concat(this._name), (n = Ph(e, "").trim()).length && (function(e, t) {
                        for (var n = 0; n < e.length; n++) e.charAt(n)
                    }(n), t = "".concat(n, ", ").concat(t)), Rh(e, "", t), Ih(this._element, this._eventFn, !1), this._startTime = Date.now()
                }
            }, {
                key: "pause",
                value: function() {
                    xh(this._element, this._name, "paused")
                }
            }, {
                key: "resume",
                value: function() {
                    xh(this._element, this._name, "running")
                }
            }, {
                key: "setPosition",
                value: function(e) {
                    var t = Ah(this._element, this._name);
                    this._position = e * this._duration, Rh(this._element, "Delay", "-".concat(this._position, "ms"), t)
                }
            }, {
                key: "getPosition",
                value: function() {
                    return this._position
                }
            }, {
                key: "_handleCallback",
                value: function(e) {
                    var t = e._ngTestManualTimestamp || Date.now(),
                        n = 1e3 * parseFloat(e.elapsedTime.toFixed(3));
                    e.animationName == this._name && Math.max(t - this._startTime, 0) >= this._delay && n >= this._duration && this.finish()
                }
            }, {
                key: "finish",
                value: function() {
                    this._finished || (this._finished = !0, this._onDoneFn(), Ih(this._element, this._eventFn, !0))
                }
            }, {
                key: "destroy",
                value: function() {
                    var e, t, n, r;
                    this._destroyed || (this._destroyed = !0, this.finish(), e = this._element, t = this._name, n = Ph(e, "").split(","), (r = Oh(n, t)) >= 0 && (n.splice(r, 1), Rh(e, "", n.join(","))))
                }
            }]), e
        }();

        function xh(e, t, n) {
            Rh(e, "PlayState", n, Ah(e, t))
        }

        function Ah(e, t) {
            var n = Ph(e, "");
            return n.indexOf(",") > 0 ? Oh(n.split(","), t) : Oh([n], t)
        }

        function Oh(e, t) {
            for (var n = 0; n < e.length; n++)
                if (e[n].indexOf(t) >= 0) return n;
            return -1
        }

        function Ih(e, t, n) {
            n ? e.removeEventListener("animationend", t) : e.addEventListener("animationend", t)
        }

        function Rh(e, t, n, r) {
            var i = "animation" + t;
            if (null != r) {
                var a = e.style[i];
                if (a.length) {
                    var o = a.split(",");
                    o[r] = n, n = o.join(",")
                }
            }
            e.style[i] = n
        }

        function Ph(e, t) {
            return e.style["animation" + t]
        }
        var Nh = function() {
                function e(t, n, r, i, a, o, s, u) {
                    _classCallCheck(this, e), this.element = t, this.keyframes = n, this.animationName = r, this._duration = i, this._delay = a, this._finalStyles = s, this._specialStyles = u, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._started = !1, this.currentSnapshot = {}, this._state = 0, this.easing = o || "linear", this.totalTime = i + a, this._buildStyler()
                }
                return _createClass(e, [{
                    key: "onStart",
                    value: function(e) {
                        this._onStartFns.push(e)
                    }
                }, {
                    key: "onDone",
                    value: function(e) {
                        this._onDoneFns.push(e)
                    }
                }, {
                    key: "onDestroy",
                    value: function(e) {
                        this._onDestroyFns.push(e)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.init(), this._state >= 4 || (this._state = 4, this._styler.destroy(), this._flushStartFns(), this._flushDoneFns(), this._specialStyles && this._specialStyles.destroy(), this._onDestroyFns.forEach((function(e) {
                            return e()
                        })), this._onDestroyFns = [])
                    }
                }, {
                    key: "_flushDoneFns",
                    value: function() {
                        this._onDoneFns.forEach((function(e) {
                            return e()
                        })), this._onDoneFns = []
                    }
                }, {
                    key: "_flushStartFns",
                    value: function() {
                        this._onStartFns.forEach((function(e) {
                            return e()
                        })), this._onStartFns = []
                    }
                }, {
                    key: "finish",
                    value: function() {
                        this.init(), this._state >= 3 || (this._state = 3, this._styler.finish(), this._flushStartFns(), this._specialStyles && this._specialStyles.finish(), this._flushDoneFns())
                    }
                }, {
                    key: "setPosition",
                    value: function(e) {
                        this._styler.setPosition(e)
                    }
                }, {
                    key: "getPosition",
                    value: function() {
                        return this._styler.getPosition()
                    }
                }, {
                    key: "hasStarted",
                    value: function() {
                        return this._state >= 2
                    }
                }, {
                    key: "init",
                    value: function() {
                        this._state >= 1 || (this._state = 1, this._styler.apply(), this._delay && this._styler.pause())
                    }
                }, {
                    key: "play",
                    value: function() {
                        this.init(), this.hasStarted() || (this._flushStartFns(), this._state = 2, this._specialStyles && this._specialStyles.start()), this._styler.resume()
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.init(), this._styler.pause()
                    }
                }, {
                    key: "restart",
                    value: function() {
                        this.reset(), this.play()
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this._styler.destroy(), this._buildStyler(), this._styler.apply()
                    }
                }, {
                    key: "_buildStyler",
                    value: function() {
                        var e = this;
                        this._styler = new Th(this.element, this.animationName, this._duration, this._delay, this.easing, "forwards", (function() {
                            return e.finish()
                        }))
                    }
                }, {
                    key: "triggerCallback",
                    value: function(e) {
                        var t = "start" == e ? this._onStartFns : this._onDoneFns;
                        t.forEach((function(e) {
                            return e()
                        })), t.length = 0
                    }
                }, {
                    key: "beforeDestroy",
                    value: function() {
                        var e = this;
                        this.init();
                        var t = {};
                        if (this.hasStarted()) {
                            var n = this._state >= 3;
                            Object.keys(this._finalStyles).forEach((function(r) {
                                "offset" != r && (t[r] = n ? e._finalStyles[r] : Tc(e.element, r))
                            }))
                        }
                        this.currentSnapshot = t
                    }
                }]), e
            }(),
            Dh = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r) {
                    var i;
                    return _classCallCheck(this, n), (i = t.call(this)).element = e, i._startingStyles = {}, i.__initialized = !1, i._styles = rc(r), i
                }
                return _createClass(n, [{
                    key: "init",
                    value: function() {
                        var e = this;
                        !this.__initialized && this._startingStyles && (this.__initialized = !0, Object.keys(this._styles).forEach((function(t) {
                            e._startingStyles[t] = e.element.style[t]
                        })), _get(_getPrototypeOf(n.prototype), "init", this).call(this))
                    }
                }, {
                    key: "play",
                    value: function() {
                        var e = this;
                        this._startingStyles && (this.init(), Object.keys(this._styles).forEach((function(t) {
                            return e.element.style.setProperty(t, e._styles[t])
                        })), _get(_getPrototypeOf(n.prototype), "play", this).call(this))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var e = this;
                        this._startingStyles && (Object.keys(this._startingStyles).forEach((function(t) {
                            var n = e._startingStyles[t];
                            n ? e.element.style.setProperty(t, n) : e.element.style.removeProperty(t)
                        })), this._startingStyles = null, _get(_getPrototypeOf(n.prototype), "destroy", this).call(this))
                    }
                }]), n
            }(Ml),
            jh = function() {
                function e() {
                    _classCallCheck(this, e), this._count = 0, this._head = document.querySelector("head"), this._warningIssued = !1
                }
                return _createClass(e, [{
                    key: "validateStyleProperty",
                    value: function(e) {
                        return Yl(e)
                    }
                }, {
                    key: "matchesElement",
                    value: function(e, t) {
                        return ec(e, t)
                    }
                }, {
                    key: "containsElement",
                    value: function(e, t) {
                        return tc(e, t)
                    }
                }, {
                    key: "query",
                    value: function(e, t, n) {
                        return nc(e, t, n)
                    }
                }, {
                    key: "computeStyle",
                    value: function(e, t, n) {
                        return window.getComputedStyle(e)[t]
                    }
                }, {
                    key: "buildKeyframeElement",
                    value: function(e, t, n) {
                        n = n.map((function(e) {
                            return rc(e)
                        }));
                        var r = "@keyframes ".concat(t, " {\n"),
                            i = "";
                        n.forEach((function(e) {
                            i = " ";
                            var t = parseFloat(e.offset);
                            r += "".concat(i).concat(100 * t, "% {\n"), i += " ", Object.keys(e).forEach((function(t) {
                                var n = e[t];
                                switch (t) {
                                    case "offset":
                                        return;
                                    case "easing":
                                        return void(n && (r += "".concat(i, "animation-timing-function: ").concat(n, ";\n")));
                                    default:
                                        return void(r += "".concat(i).concat(t, ": ").concat(n, ";\n"))
                                }
                            })), r += "".concat(i, "}\n")
                        })), r += "}\n";
                        var a = document.createElement("style");
                        return a.innerHTML = r, a
                    }
                }, {
                    key: "animate",
                    value: function(e, t, n, r, i) {
                        var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [],
                            o = arguments.length > 6 ? arguments[6] : void 0;
                        o && this._notifyFaultyScrubber();
                        var s = a.filter((function(e) {
                                return e instanceof Nh
                            })),
                            u = {};
                        wc(n, r) && s.forEach((function(e) {
                            var t = e.currentSnapshot;
                            Object.keys(t).forEach((function(e) {
                                return u[e] = t[e]
                            }))
                        }));
                        var l = function(e) {
                            var t = {};
                            return e && (Array.isArray(e) ? e : [e]).forEach((function(e) {
                                Object.keys(e).forEach((function(n) {
                                    "offset" != n && "easing" != n && (t[n] = e[n])
                                }))
                            })), t
                        }(t = Sc(e, t, u));
                        if (0 == n) return new Dh(e, l);
                        var c = "gen_css_kf_".concat(this._count++),
                            h = this.buildKeyframeElement(e, c, t);
                        document.querySelector("head").appendChild(h);
                        var f = Ch(e, t),
                            d = new Nh(e, t, c, n, r, i, l, f);
                        return d.onDestroy((function() {
                            var e;
                            (e = h).parentNode.removeChild(e)
                        })), d
                    }
                }, {
                    key: "_notifyFaultyScrubber",
                    value: function() {
                        this._warningIssued || (console.warn("@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n", "  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill."), this._warningIssued = !0)
                    }
                }]), e
            }(),
            Fh = function() {
                function e(t, n, r, i) {
                    _classCallCheck(this, e), this.element = t, this.keyframes = n, this.options = r, this._specialStyles = i, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._initialized = !1, this._finished = !1, this._started = !1, this._destroyed = !1, this.time = 0, this.parentPlayer = null, this.currentSnapshot = {}, this._duration = r.duration, this._delay = r.delay || 0, this.time = this._duration + this._delay
                }
                return _createClass(e, [{
                    key: "_onFinish",
                    value: function() {
                        this._finished || (this._finished = !0, this._onDoneFns.forEach((function(e) {
                            return e()
                        })), this._onDoneFns = [])
                    }
                }, {
                    key: "init",
                    value: function() {
                        this._buildPlayer(), this._preparePlayerBeforeStart()
                    }
                }, {
                    key: "_buildPlayer",
                    value: function() {
                        var e = this;
                        if (!this._initialized) {
                            this._initialized = !0;
                            var t = this.keyframes;
                            this.domPlayer = this._triggerWebAnimation(this.element, t, this.options), this._finalKeyframe = t.length ? t[t.length - 1] : {}, this.domPlayer.addEventListener("finish", (function() {
                                return e._onFinish()
                            }))
                        }
                    }
                }, {
                    key: "_preparePlayerBeforeStart",
                    value: function() {
                        this._delay ? this._resetDomPlayerState() : this.domPlayer.pause()
                    }
                }, {
                    key: "_triggerWebAnimation",
                    value: function(e, t, n) {
                        return e.animate(t, n)
                    }
                }, {
                    key: "onStart",
                    value: function(e) {
                        this._onStartFns.push(e)
                    }
                }, {
                    key: "onDone",
                    value: function(e) {
                        this._onDoneFns.push(e)
                    }
                }, {
                    key: "onDestroy",
                    value: function(e) {
                        this._onDestroyFns.push(e)
                    }
                }, {
                    key: "play",
                    value: function() {
                        this._buildPlayer(), this.hasStarted() || (this._onStartFns.forEach((function(e) {
                            return e()
                        })), this._onStartFns = [], this._started = !0, this._specialStyles && this._specialStyles.start()), this.domPlayer.play()
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.init(), this.domPlayer.pause()
                    }
                }, {
                    key: "finish",
                    value: function() {
                        this.init(), this._specialStyles && this._specialStyles.finish(), this._onFinish(), this.domPlayer.finish()
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this._resetDomPlayerState(), this._destroyed = !1, this._finished = !1, this._started = !1
                    }
                }, {
                    key: "_resetDomPlayerState",
                    value: function() {
                        this.domPlayer && this.domPlayer.cancel()
                    }
                }, {
                    key: "restart",
                    value: function() {
                        this.reset(), this.play()
                    }
                }, {
                    key: "hasStarted",
                    value: function() {
                        return this._started
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this._destroyed || (this._destroyed = !0, this._resetDomPlayerState(), this._onFinish(), this._specialStyles && this._specialStyles.destroy(), this._onDestroyFns.forEach((function(e) {
                            return e()
                        })), this._onDestroyFns = [])
                    }
                }, {
                    key: "setPosition",
                    value: function(e) {
                        this.domPlayer.currentTime = e * this.time
                    }
                }, {
                    key: "getPosition",
                    value: function() {
                        return this.domPlayer.currentTime / this.time
                    }
                }, {
                    key: "totalTime",
                    get: function() {
                        return this._delay + this._duration
                    }
                }, {
                    key: "beforeDestroy",
                    value: function() {
                        var e = this,
                            t = {};
                        this.hasStarted() && Object.keys(this._finalKeyframe).forEach((function(n) {
                            "offset" != n && (t[n] = e._finished ? e._finalKeyframe[n] : Tc(e.element, n))
                        })), this.currentSnapshot = t
                    }
                }, {
                    key: "triggerCallback",
                    value: function(e) {
                        var t = "start" == e ? this._onStartFns : this._onDoneFns;
                        t.forEach((function(e) {
                            return e()
                        })), t.length = 0
                    }
                }]), e
            }(),
            Mh = function() {
                function e() {
                    _classCallCheck(this, e), this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(Lh().toString()), this._cssKeyframesDriver = new jh
                }
                return _createClass(e, [{
                    key: "validateStyleProperty",
                    value: function(e) {
                        return Yl(e)
                    }
                }, {
                    key: "matchesElement",
                    value: function(e, t) {
                        return ec(e, t)
                    }
                }, {
                    key: "containsElement",
                    value: function(e, t) {
                        return tc(e, t)
                    }
                }, {
                    key: "query",
                    value: function(e, t, n) {
                        return nc(e, t, n)
                    }
                }, {
                    key: "computeStyle",
                    value: function(e, t, n) {
                        return window.getComputedStyle(e)[t]
                    }
                }, {
                    key: "overrideWebAnimationsSupport",
                    value: function(e) {
                        this._isNativeImpl = e
                    }
                }, {
                    key: "animate",
                    value: function(e, t, n, r, i) {
                        var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [],
                            o = arguments.length > 6 ? arguments[6] : void 0;
                        if (!o && !this._isNativeImpl) return this._cssKeyframesDriver.animate(e, t, n, r, i, a);
                        var s = {
                            duration: n,
                            delay: r,
                            fill: 0 == r ? "both" : "forwards"
                        };
                        i && (s.easing = i);
                        var u = {},
                            l = a.filter((function(e) {
                                return e instanceof Fh
                            }));
                        wc(n, r) && l.forEach((function(e) {
                            var t = e.currentSnapshot;
                            Object.keys(t).forEach((function(e) {
                                return u[e] = t[e]
                            }))
                        }));
                        var c = Ch(e, t = Sc(e, t = t.map((function(e) {
                            return hc(e, !1)
                        })), u));
                        return new Fh(e, t, s, c)
                    }
                }]), e
            }();

        function Lh() {
            return "undefined" != typeof window && void 0 !== window.document && Element.prototype.animate || {}
        }
        var Uh, Hh = ((Uh = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r) {
                    var i;
                    return _classCallCheck(this, n), (i = t.call(this))._nextAnimationId = 0, i._renderer = e.createRenderer(r.body, {
                        id: "0",
                        encapsulation: ut.None,
                        styles: [],
                        data: {
                            animation: []
                        }
                    }), i
                }
                return _createClass(n, [{
                    key: "build",
                    value: function(e) {
                        var t = this._nextAnimationId.toString();
                        this._nextAnimationId++;
                        var n = Array.isArray(e) ? Dl(e) : e;
                        return Bh(this._renderer, null, t, "register", [n]), new Vh(t, this._renderer)
                    }
                }]), n
            }(Nl)).\u0275fac = function(e) {
                return new(e || Uh)(Ge(co), Ge(lu))
            }, Uh.\u0275prov = fe({
                token: Uh,
                factory: Uh.\u0275fac
            }), Uh),
            Vh = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r) {
                    var i;
                    return _classCallCheck(this, n), (i = t.call(this))._id = e, i._renderer = r, i
                }
                return _createClass(n, [{
                    key: "create",
                    value: function(e, t) {
                        return new zh(this._id, e, t || {}, this._renderer)
                    }
                }]), n
            }(function() {
                return function e() {
                    _classCallCheck(this, e)
                }
            }()),
            zh = function() {
                function e(t, n, r, i) {
                    _classCallCheck(this, e), this.id = t, this.element = n, this._renderer = i, this.parentPlayer = null, this._started = !1, this.totalTime = 0, this._command("create", r)
                }
                return _createClass(e, [{
                    key: "_listen",
                    value: function(e, t) {
                        return this._renderer.listen(this.element, "@@".concat(this.id, ":").concat(e), t)
                    }
                }, {
                    key: "_command",
                    value: function(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        return Bh(this._renderer, this.element, this.id, e, n)
                    }
                }, {
                    key: "onDone",
                    value: function(e) {
                        this._listen("done", e)
                    }
                }, {
                    key: "onStart",
                    value: function(e) {
                        this._listen("start", e)
                    }
                }, {
                    key: "onDestroy",
                    value: function(e) {
                        this._listen("destroy", e)
                    }
                }, {
                    key: "init",
                    value: function() {
                        this._command("init")
                    }
                }, {
                    key: "hasStarted",
                    value: function() {
                        return this._started
                    }
                }, {
                    key: "play",
                    value: function() {
                        this._command("play"), this._started = !0
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this._command("pause")
                    }
                }, {
                    key: "restart",
                    value: function() {
                        this._command("restart")
                    }
                }, {
                    key: "finish",
                    value: function() {
                        this._command("finish")
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this._command("destroy")
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this._command("reset")
                    }
                }, {
                    key: "setPosition",
                    value: function(e) {
                        this._command("setPosition", e)
                    }
                }, {
                    key: "getPosition",
                    value: function() {
                        return 0
                    }
                }]), e
            }();

        function Bh(e, t, n, r, i) {
            return e.setProperty(t, "@@".concat(n, ":").concat(r), i)
        }
        var qh, Qh, Wh, Kh = ((qh = function() {
                function e(t, n, r) {
                    _classCallCheck(this, e), this.delegate = t, this.engine = n, this._zone = r, this._currentId = 0, this._microtaskId = 1, this._animationCallbacksBuffer = [], this._rendererCache = new Map, this._cdRecurDepth = 0, this.promise = Promise.resolve(0), n.onRemovalComplete = function(e, t) {
                        t && t.parentNode(e) && t.removeChild(e.parentNode, e)
                    }
                }
                return _createClass(e, [{
                    key: "createRenderer",
                    value: function(e, t) {
                        var n = this,
                            r = this.delegate.createRenderer(e, t);
                        if (!(e && t && t.data && t.data.animation)) {
                            var i = this._rendererCache.get(r);
                            return i || (i = new Zh("", r, this.engine), this._rendererCache.set(r, i)), i
                        }
                        var a = t.id,
                            o = t.id + "-" + this._currentId;
                        return this._currentId++, this.engine.register(o, e), t.data.animation.forEach((function t(r) {
                            Array.isArray(r) ? r.forEach(t) : n.engine.registerTrigger(a, o, e, r.name, r)
                        })), new Gh(this, o, r, this.engine)
                    }
                }, {
                    key: "begin",
                    value: function() {
                        this._cdRecurDepth++, this.delegate.begin && this.delegate.begin()
                    }
                }, {
                    key: "_scheduleCountTask",
                    value: function() {
                        var e = this;
                        this.promise.then((function() {
                            e._microtaskId++
                        }))
                    }
                }, {
                    key: "scheduleListenerCallback",
                    value: function(e, t, n) {
                        var r = this;
                        e >= 0 && e < this._microtaskId ? this._zone.run((function() {
                            return t(n)
                        })) : (0 == this._animationCallbacksBuffer.length && Promise.resolve(null).then((function() {
                            r._zone.run((function() {
                                r._animationCallbacksBuffer.forEach((function(e) {
                                    var t = _slicedToArray(e, 2);
                                    (0, t[0])(t[1])
                                })), r._animationCallbacksBuffer = []
                            }))
                        })), this._animationCallbacksBuffer.push([t, n]))
                    }
                }, {
                    key: "end",
                    value: function() {
                        var e = this;
                        this._cdRecurDepth--, 0 == this._cdRecurDepth && this._zone.runOutsideAngular((function() {
                            e._scheduleCountTask(), e.engine.flush(e._microtaskId)
                        })), this.delegate.end && this.delegate.end()
                    }
                }, {
                    key: "whenRenderingDone",
                    value: function() {
                        return this.engine.whenRenderingDone()
                    }
                }]), e
            }()).\u0275fac = function(e) {
                return new(e || qh)(Ge(co), Ge(bh), Ge(Is))
            }, qh.\u0275prov = fe({
                token: qh,
                factory: qh.\u0275fac
            }), qh),
            Zh = function() {
                function e(t, n, r) {
                    _classCallCheck(this, e), this.namespaceId = t, this.delegate = n, this.engine = r, this.destroyNode = this.delegate.destroyNode ? function(e) {
                        return n.destroyNode(e)
                    } : null
                }
                return _createClass(e, [{
                    key: "data",
                    get: function() {
                        return this.delegate.data
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.engine.destroy(this.namespaceId, this.delegate), this.delegate.destroy()
                    }
                }, {
                    key: "createElement",
                    value: function(e, t) {
                        return this.delegate.createElement(e, t)
                    }
                }, {
                    key: "createComment",
                    value: function(e) {
                        return this.delegate.createComment(e)
                    }
                }, {
                    key: "createText",
                    value: function(e) {
                        return this.delegate.createText(e)
                    }
                }, {
                    key: "appendChild",
                    value: function(e, t) {
                        this.delegate.appendChild(e, t), this.engine.onInsert(this.namespaceId, t, e, !1)
                    }
                }, {
                    key: "insertBefore",
                    value: function(e, t, n) {
                        this.delegate.insertBefore(e, t, n), this.engine.onInsert(this.namespaceId, t, e, !0)
                    }
                }, {
                    key: "removeChild",
                    value: function(e, t, n) {
                        this.engine.onRemove(this.namespaceId, t, this.delegate, n)
                    }
                }, {
                    key: "selectRootElement",
                    value: function(e, t) {
                        return this.delegate.selectRootElement(e, t)
                    }
                }, {
                    key: "parentNode",
                    value: function(e) {
                        return this.delegate.parentNode(e)
                    }
                }, {
                    key: "nextSibling",
                    value: function(e) {
                        return this.delegate.nextSibling(e)
                    }
                }, {
                    key: "setAttribute",
                    value: function(e, t, n, r) {
                        this.delegate.setAttribute(e, t, n, r)
                    }
                }, {
                    key: "removeAttribute",
                    value: function(e, t, n) {
                        this.delegate.removeAttribute(e, t, n)
                    }
                }, {
                    key: "addClass",
                    value: function(e, t) {
                        this.delegate.addClass(e, t)
                    }
                }, {
                    key: "removeClass",
                    value: function(e, t) {
                        this.delegate.removeClass(e, t)
                    }
                }, {
                    key: "setStyle",
                    value: function(e, t, n, r) {
                        this.delegate.setStyle(e, t, n, r)
                    }
                }, {
                    key: "removeStyle",
                    value: function(e, t, n) {
                        this.delegate.removeStyle(e, t, n)
                    }
                }, {
                    key: "setProperty",
                    value: function(e, t, n) {
                        "@" == t.charAt(0) && "@.disabled" == t ? this.disableAnimations(e, !!n) : this.delegate.setProperty(e, t, n)
                    }
                }, {
                    key: "setValue",
                    value: function(e, t) {
                        this.delegate.setValue(e, t)
                    }
                }, {
                    key: "listen",
                    value: function(e, t, n) {
                        return this.delegate.listen(e, t, n)
                    }
                }, {
                    key: "disableAnimations",
                    value: function(e, t) {
                        this.engine.disableAnimations(e, t)
                    }
                }]), e
            }(),
            Gh = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r, i, a) {
                    var o;
                    return _classCallCheck(this, n), (o = t.call(this, r, i, a)).factory = e, o.namespaceId = r, o
                }
                return _createClass(n, [{
                    key: "setProperty",
                    value: function(e, t, n) {
                        "@" == t.charAt(0) ? "." == t.charAt(1) && "@.disabled" == t ? this.disableAnimations(e, n = void 0 === n || !!n) : this.engine.process(this.namespaceId, e, t.substr(1), n) : this.delegate.setProperty(e, t, n)
                    }
                }, {
                    key: "listen",
                    value: function(e, t, n) {
                        var r, i, a = this;
                        if ("@" == t.charAt(0)) {
                            var o, s = function(e) {
                                    switch (e) {
                                        case "body":
                                            return document.body;
                                        case "document":
                                            return document;
                                        case "window":
                                            return window;
                                        default:
                                            return e
                                    }
                                }(e),
                                u = t.substr(1),
                                l = "";
                            return "@" != u.charAt(0) && (i = (r = u).indexOf("."), u = (o = _slicedToArray([r.substring(0, i), r.substr(i + 1)], 2))[0], l = o[1]), this.engine.listen(this.namespaceId, s, u, l, (function(e) {
                                a.factory.scheduleListenerCallback(e._data || -1, n, e)
                            }))
                        }
                        return this.delegate.listen(e, t, n)
                    }
                }]), n
            }(Zh),
            Jh = ((Qh = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r, i) {
                    return _classCallCheck(this, n), t.call(this, e.body, r, i)
                }
                return n
            }(bh)).\u0275fac = function(e) {
                return new(e || Qh)(Ge(lu), Ge(oc), Ge(Zc))
            }, Qh.\u0275prov = fe({
                token: Qh,
                factory: Qh.\u0275fac
            }), Qh),
            $h = new He("AnimationModuleType"),
            Xh = [{
                provide: oc,
                useFactory: function() {
                    return "function" == typeof Lh() ? new Mh : new jh
                }
            }, {
                provide: $h,
                useValue: "BrowserAnimations"
            }, {
                provide: Nl,
                useClass: Hh
            }, {
                provide: Zc,
                useFactory: function() {
                    return new Gc
                }
            }, {
                provide: bh,
                useClass: Jh
            }, {
                provide: co,
                useFactory: function(e, t, n) {
                    return new Kh(e, t, n)
                },
                deps: [kl, bh, Is]
            }],
            Yh = ((Wh = function e() {
                _classCallCheck(this, e)
            }).\u0275mod = yt({
                type: Wh
            }), Wh.\u0275inj = de({
                factory: function(e) {
                    return new(e || Wh)
                },
                providers: Xh,
                imports: [Pl]
            }), Wh);

        function ef() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var r = t[t.length - 1];
            return I(r) ? (t.pop(), z(t, r)) : Z(t)
        }

        function tf() {}

        function nf(e, t, n) {
            return function(r) {
                return r.lift(new rf(e, t, n))
            }
        }
        var rf = function() {
                function e(t, n, r) {
                    _classCallCheck(this, e), this.nextOrObserver = t, this.error = n, this.complete = r
                }
                return _createClass(e, [{
                    key: "call",
                    value: function(e, t) {
                        return t.subscribe(new af(e, this.nextOrObserver, this.error, this.complete))
                    }
                }]), e
            }(),
            af = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, i, a, o) {
                    var s;
                    return _classCallCheck(this, n), (s = t.call(this, e))._tapNext = tf, s._tapError = tf, s._tapComplete = tf, s._tapError = a || tf, s._tapComplete = o || tf, r(i) ? (s._context = _assertThisInitialized(s), s._tapNext = i) : i && (s._context = i, s._tapNext = i.next || tf, s._tapError = i.error || tf, s._tapComplete = i.complete || tf), s
                }
                return _createClass(n, [{
                    key: "_next",
                    value: function(e) {
                        try {
                            this._tapNext.call(this._context, e)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        this.destination.next(e)
                    }
                }, {
                    key: "_error",
                    value: function(e) {
                        try {
                            this._tapError.call(this._context, e)
                        } catch (e) {
                            return void this.destination.error(e)
                        }
                        this.destination.error(e)
                    }
                }, {
                    key: "_complete",
                    value: function() {
                        try {
                            this._tapComplete.call(this._context)
                        } catch (e) {
                            return void this.destination.error(e)
                        }
                        return this.destination.complete()
                    }
                }]), n
            }(p);

        function of (e, t) {
            return function(n) {
                return n.lift(new sf(e, t))
            }
        }
        var sf = function() {
                function e(t, n) {
                    _classCallCheck(this, e), this.predicate = t, this.thisArg = n
                }
                return _createClass(e, [{
                    key: "call",
                    value: function(e, t) {
                        return t.subscribe(new uf(e, this.predicate, this.thisArg))
                    }
                }]), e
            }(),
            uf = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r, i) {
                    var a;
                    return _classCallCheck(this, n), (a = t.call(this, e)).predicate = r, a.thisArg = i, a.count = 0, a
                }
                return _createClass(n, [{
                    key: "_next",
                    value: function(e) {
                        var t;
                        try {
                            t = this.predicate.call(this.thisArg, e, this.count++)
                        } catch (n) {
                            return void this.destination.error(n)
                        }
                        t && this.destination.next(e)
                    }
                }]), n
            }(p),
            lf = function() {
                function e() {
                    return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
                }
                return e.prototype = Object.create(Error.prototype), e
            }(),
            cf = new C((function(e) {
                return e.complete()
            }));

        function hf(e) {
            return e ? function(e) {
                return new C((function(t) {
                    return e.schedule((function() {
                        return t.complete()
                    }))
                }))
            }(e) : cf
        }

        function ff(e) {
            return function(t) {
                return 0 === e ? hf() : t.lift(new vf(e))
            }
        }
        var df, vf = function() {
                function e(t) {
                    if (_classCallCheck(this, e), this.total = t, this.total < 0) throw new lf
                }
                return _createClass(e, [{
                    key: "call",
                    value: function(e, t) {
                        return t.subscribe(new pf(e, this.total))
                    }
                }]), e
            }(),
            pf = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r) {
                    var i;
                    return _classCallCheck(this, n), (i = t.call(this, e)).total = r, i.count = 0, i
                }
                return _createClass(n, [{
                    key: "_next",
                    value: function(e) {
                        var t = this.total,
                            n = ++this.count;
                        n <= t && (this.destination.next(e), n === t && (this.destination.complete(), this.unsubscribe()))
                    }
                }]), n
            }(p);

        function yf(e) {
            return null != e && "false" !== "".concat(e)
        }

        function mf(e) {
            return e instanceof uo ? e.nativeElement : e
        }
        try {
            df = "undefined" != typeof Intl && Intl.v8BreakIterator
        } catch (gg) {
            df = !1
        }
        var gf, _f, kf, bf, Cf = ((bf = function e(t) {
                _classCallCheck(this, e), this._platformId = t, this.isBrowser = this._platformId ? "browser" === this._platformId : "object" == typeof document && !!document, this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent), this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent), this.BLINK = this.isBrowser && !(!window.chrome && !df) && "undefined" != typeof CSS && !this.EDGE && !this.TRIDENT, this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT, this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window), this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent), this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT, this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT
            }).\u0275fac = function(e) {
                return new(e || bf)(Ge(vs, 8))
            }, bf.\u0275prov = fe({
                factory: function() {
                    return new bf(Ge(vs, 8))
                },
                token: bf,
                providedIn: "root"
            }), bf),
            wf = ((kf = function e() {
                _classCallCheck(this, e)
            }).\u0275mod = yt({
                type: kf
            }), kf.\u0275inj = de({
                factory: function(e) {
                    return new(e || kf)
                }
            }), kf);

        function Sf(e) {
            return function() {
                if (null == gf && "undefined" != typeof window) try {
                    window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                        get: function() {
                            return gf = !0
                        }
                    }))
                } finally {
                    gf = gf || !1
                }
                return gf
            }() ? e : !!e.capture
        }

        function Ef(e) {
            return 0 === e.buttons
        }
        "undefined" != typeof Element && Element;
        var Tf, xf = new He("cdk-focus-monitor-default-options"),
            Af = Sf({
                passive: !0,
                capture: !0
            }),
            Of = ((Tf = function() {
                function e(t, n, r, i) {
                    var a = this;
                    _classCallCheck(this, e), this._ngZone = t, this._platform = n, this._origin = null, this._windowFocused = !1, this._elementInfo = new Map, this._monitoredElementCount = 0, this._rootNodeFocusListenerCount = new Map, this._documentKeydownListener = function() {
                        a._lastTouchTarget = null, a._setOriginForCurrentEventQueue("keyboard")
                    }, this._documentMousedownListener = function(e) {
                        if (!a._lastTouchTarget) {
                            var t = Ef(e) ? "keyboard" : "mouse";
                            a._setOriginForCurrentEventQueue(t)
                        }
                    }, this._documentTouchstartListener = function(e) {
                        null != a._touchTimeoutId && clearTimeout(a._touchTimeoutId), a._lastTouchTarget = If(e), a._touchTimeoutId = setTimeout((function() {
                            return a._lastTouchTarget = null
                        }), 650)
                    }, this._windowFocusListener = function() {
                        a._windowFocused = !0, a._windowFocusTimeoutId = setTimeout((function() {
                            return a._windowFocused = !1
                        }))
                    }, this._rootNodeFocusAndBlurListener = function(e) {
                        for (var t = If(e), n = "focus" === e.type ? a._onFocus : a._onBlur, r = t; r; r = r.parentElement) n.call(a, e, r)
                    }, this._document = r, this._detectionMode = (null == i ? void 0 : i.detectionMode) || 0
                }
                return _createClass(e, [{
                    key: "monitor",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (!this._platform.isBrowser) return ef(null);
                        var n = mf(e),
                            r = function(e) {
                                if (function() {
                                        if (null == _f) {
                                            var e = "undefined" != typeof document ? document.head : null;
                                            _f = !(!e || !e.createShadowRoot && !e.attachShadow)
                                        }
                                        return _f
                                    }()) {
                                    var t = e.getRootNode ? e.getRootNode() : null;
                                    if ("undefined" != typeof ShadowRoot && ShadowRoot && t instanceof ShadowRoot) return t
                                }
                                return null
                            }(n) || this._getDocument(),
                            i = this._elementInfo.get(n);
                        if (i) return t && (i.checkChildren = !0), i.subject.asObservable();
                        var a = {
                            checkChildren: t,
                            subject: new A,
                            rootNode: r
                        };
                        return this._elementInfo.set(n, a), this._registerGlobalListeners(a), a.subject.asObservable()
                    }
                }, {
                    key: "stopMonitoring",
                    value: function(e) {
                        var t = mf(e),
                            n = this._elementInfo.get(t);
                        n && (n.subject.complete(), this._setClasses(t), this._elementInfo.delete(t), this._removeGlobalListeners(n))
                    }
                }, {
                    key: "focusVia",
                    value: function(e, t, n) {
                        var r = mf(e);
                        this._setOriginForCurrentEventQueue(t), "function" == typeof r.focus && r.focus(n)
                    }
                }, {
                    key: "ngOnDestroy",
                    value: function() {
                        var e = this;
                        this._elementInfo.forEach((function(t, n) {
                            return e.stopMonitoring(n)
                        }))
                    }
                }, {
                    key: "_getDocument",
                    value: function() {
                        return this._document || document
                    }
                }, {
                    key: "_getWindow",
                    value: function() {
                        return this._getDocument().defaultView || window
                    }
                }, {
                    key: "_toggleClass",
                    value: function(e, t, n) {
                        n ? e.classList.add(t) : e.classList.remove(t)
                    }
                }, {
                    key: "_getFocusOrigin",
                    value: function(e) {
                        return this._origin ? this._origin : this._windowFocused && this._lastFocusOrigin ? this._lastFocusOrigin : this._wasCausedByTouch(e) ? "touch" : "program"
                    }
                }, {
                    key: "_setClasses",
                    value: function(e, t) {
                        this._toggleClass(e, "cdk-focused", !!t), this._toggleClass(e, "cdk-touch-focused", "touch" === t), this._toggleClass(e, "cdk-keyboard-focused", "keyboard" === t), this._toggleClass(e, "cdk-mouse-focused", "mouse" === t), this._toggleClass(e, "cdk-program-focused", "program" === t)
                    }
                }, {
                    key: "_setOriginForCurrentEventQueue",
                    value: function(e) {
                        var t = this;
                        this._ngZone.runOutsideAngular((function() {
                            t._origin = e, 0 === t._detectionMode && (t._originTimeoutId = setTimeout((function() {
                                return t._origin = null
                            }), 1))
                        }))
                    }
                }, {
                    key: "_wasCausedByTouch",
                    value: function(e) {
                        var t = If(e);
                        return this._lastTouchTarget instanceof Node && t instanceof Node && (t === this._lastTouchTarget || t.contains(this._lastTouchTarget))
                    }
                }, {
                    key: "_onFocus",
                    value: function(e, t) {
                        var n = this._elementInfo.get(t);
                        if (n && (n.checkChildren || t === If(e))) {
                            var r = this._getFocusOrigin(e);
                            this._setClasses(t, r), this._emitOrigin(n.subject, r), this._lastFocusOrigin = r
                        }
                    }
                }, {
                    key: "_onBlur",
                    value: function(e, t) {
                        var n = this._elementInfo.get(t);
                        !n || n.checkChildren && e.relatedTarget instanceof Node && t.contains(e.relatedTarget) || (this._setClasses(t), this._emitOrigin(n.subject, null))
                    }
                }, {
                    key: "_emitOrigin",
                    value: function(e, t) {
                        this._ngZone.run((function() {
                            return e.next(t)
                        }))
                    }
                }, {
                    key: "_registerGlobalListeners",
                    value: function(e) {
                        var t = this;
                        if (this._platform.isBrowser) {
                            var n = e.rootNode,
                                r = this._rootNodeFocusListenerCount.get(n) || 0;
                            r || this._ngZone.runOutsideAngular((function() {
                                n.addEventListener("focus", t._rootNodeFocusAndBlurListener, Af), n.addEventListener("blur", t._rootNodeFocusAndBlurListener, Af)
                            })), this._rootNodeFocusListenerCount.set(n, r + 1), 1 == ++this._monitoredElementCount && this._ngZone.runOutsideAngular((function() {
                                var e = t._getDocument(),
                                    n = t._getWindow();
                                e.addEventListener("keydown", t._documentKeydownListener, Af), e.addEventListener("mousedown", t._documentMousedownListener, Af), e.addEventListener("touchstart", t._documentTouchstartListener, Af), n.addEventListener("focus", t._windowFocusListener)
                            }))
                        }
                    }
                }, {
                    key: "_removeGlobalListeners",
                    value: function(e) {
                        var t = e.rootNode;
                        if (this._rootNodeFocusListenerCount.has(t)) {
                            var n = this._rootNodeFocusListenerCount.get(t);
                            n > 1 ? this._rootNodeFocusListenerCount.set(t, n - 1) : (t.removeEventListener("focus", this._rootNodeFocusAndBlurListener, Af), t.removeEventListener("blur", this._rootNodeFocusAndBlurListener, Af), this._rootNodeFocusListenerCount.delete(t))
                        }
                        if (!--this._monitoredElementCount) {
                            var r = this._getDocument(),
                                i = this._getWindow();
                            r.removeEventListener("keydown", this._documentKeydownListener, Af), r.removeEventListener("mousedown", this._documentMousedownListener, Af), r.removeEventListener("touchstart", this._documentTouchstartListener, Af), i.removeEventListener("focus", this._windowFocusListener), clearTimeout(this._windowFocusTimeoutId), clearTimeout(this._touchTimeoutId), clearTimeout(this._originTimeoutId)
                        }
                    }
                }]), e
            }()).\u0275fac = function(e) {
                return new(e || Tf)(Ge(Is), Ge(Cf), Ge(lu, 8), Ge(xf, 8))
            }, Tf.\u0275prov = fe({
                factory: function() {
                    return new Tf(Ge(Is), Ge(Cf), Ge(lu, 8), Ge(xf, 8))
                },
                token: Tf,
                providedIn: "root"
            }), Tf);

        function If(e) {
            return e.composedPath ? e.composedPath()[0] : e.target
        }
        var Rf, Pf, Nf = ((Pf = function() {
                function e(t, n) {
                    _classCallCheck(this, e), this._platform = t, this._document = n
                }
                return _createClass(e, [{
                    key: "getHighContrastMode",
                    value: function() {
                        if (!this._platform.isBrowser) return 0;
                        var e = this._document.createElement("div");
                        e.style.backgroundColor = "rgb(1,2,3)", e.style.position = "absolute", this._document.body.appendChild(e);
                        var t = this._document.defaultView || window,
                            n = t && t.getComputedStyle ? t.getComputedStyle(e) : null,
                            r = (n && n.backgroundColor || "").replace(/ /g, "");
                        switch (this._document.body.removeChild(e), r) {
                            case "rgb(0,0,0)":
                                return 2;
                            case "rgb(255,255,255)":
                                return 1
                        }
                        return 0
                    }
                }, {
                    key: "_applyBodyHighContrastModeCssClasses",
                    value: function() {
                        if (this._platform.isBrowser && this._document.body) {
                            var e = this._document.body.classList;
                            e.remove("cdk-high-contrast-active"), e.remove("cdk-high-contrast-black-on-white"), e.remove("cdk-high-contrast-white-on-black");
                            var t = this.getHighContrastMode();
                            1 === t ? (e.add("cdk-high-contrast-active"), e.add("cdk-high-contrast-black-on-white")) : 2 === t && (e.add("cdk-high-contrast-active"), e.add("cdk-high-contrast-white-on-black"))
                        }
                    }
                }]), e
            }()).\u0275fac = function(e) {
                return new(e || Pf)(Ge(Cf), Ge(lu))
            }, Pf.\u0275prov = fe({
                factory: function() {
                    return new Pf(Ge(Cf), Ge(lu))
                },
                token: Pf,
                providedIn: "root"
            }), Pf),
            Df = ((Rf = function e() {
                _classCallCheck(this, e)
            }).\u0275mod = yt({
                type: Rf
            }), Rf.\u0275inj = de({
                factory: function(e) {
                    return new(e || Rf)
                }
            }), Rf),
            jf = new vo("9.2.4");

        function Ff() {
            return K(1)
        }

        function Mf() {
            return Ff()(ef.apply(void 0, arguments))
        }
        var Lf, Uf = new vo("9.2.4"),
            Hf = new He("mat-sanity-checks", {
                providedIn: "root",
                factory: function() {
                    return !0
                }
            }),
            Vf = ((Lf = function() {
                function e(t, n, r) {
                    _classCallCheck(this, e), this._hasDoneGlobalChecks = !1, this._document = r, t._applyBodyHighContrastModeCssClasses(), this._sanityChecks = n, this._hasDoneGlobalChecks || (this._checkDoctypeIsDefined(), this._checkThemeIsPresent(), this._checkCdkVersionMatch(), this._hasDoneGlobalChecks = !0)
                }
                return _createClass(e, [{
                    key: "_getDocument",
                    value: function() {
                        var e = this._document || document;
                        return "object" == typeof e && e ? e : null
                    }
                }, {
                    key: "_getWindow",
                    value: function() {
                        var e = this._getDocument(),
                            t = (null == e ? void 0 : e.defaultView) || window;
                        return "object" == typeof t && t ? t : null
                    }
                }, {
                    key: "_checksAreEnabled",
                    value: function() {
                        return Yn() && !this._isTestEnv()
                    }
                }, {
                    key: "_isTestEnv",
                    value: function() {
                        var e = this._getWindow();
                        return e && (e.__karma__ || e.jasmine)
                    }
                }, {
                    key: "_checkDoctypeIsDefined",
                    value: function() {
                        var e = this._checksAreEnabled() && (!0 === this._sanityChecks || this._sanityChecks.doctype),
                            t = this._getDocument();
                        e && t && !t.doctype && console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.")
                    }
                }, {
                    key: "_checkThemeIsPresent",
                    value: function() {
                        var e = !this._checksAreEnabled() || !1 === this._sanityChecks || !this._sanityChecks.theme,
                            t = this._getDocument();
                        if (!e && t && t.body && "function" == typeof getComputedStyle) {
                            var n = t.createElement("div");
                            n.classList.add("mat-theme-loaded-marker"), t.body.appendChild(n);
                            var r = getComputedStyle(n);
                            r && "none" !== r.display && console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming"), t.body.removeChild(n)
                        }
                    }
                }, {
                    key: "_checkCdkVersionMatch",
                    value: function() {
                        this._checksAreEnabled() && (!0 === this._sanityChecks || this._sanityChecks.version) && Uf.full !== jf.full && console.warn("The Angular Material version (" + Uf.full + ") does not match the Angular CDK version (" + jf.full + ").\nPlease ensure the versions of these two packages exactly match.")
                    }
                }]), e
            }()).\u0275mod = yt({
                type: Lf
            }), Lf.\u0275inj = de({
                factory: function(e) {
                    return new(e || Lf)(Ge(Nf), Ge(Hf, 8), Ge(lu, 8))
                },
                imports: [
                    [Df], Df
                ]
            }), Lf);
        try {
            "undefined" != typeof Intl
        } catch (gg) {
            !1
        }
        var zf, Bf, qf, Qf, Wf, Kf, Zf, Gf, Jf, $f, Xf, Yf, ed, td, nd = ((zf = function e() {
                _classCallCheck(this, e)
            }).\u0275mod = yt({
                type: zf
            }), zf.\u0275inj = de({
                factory: function(e) {
                    return new(e || zf)
                },
                imports: [
                    [Vf], Vf
                ]
            }), zf),
            rd = function() {
                function e(t, n, r) {
                    _classCallCheck(this, e), this._renderer = t, this.element = n, this.config = r, this.state = 3
                }
                return _createClass(e, [{
                    key: "fadeOut",
                    value: function() {
                        this._renderer.fadeOutRipple(this)
                    }
                }]), e
            }(),
            id = {
                enterDuration: 450,
                exitDuration: 400
            },
            ad = Sf({
                passive: !0
            }),
            od = ["mousedown", "touchstart"],
            sd = ["mouseup", "mouseleave", "touchend", "touchcancel"],
            ud = function() {
                function e(t, n, r, i) {
                    _classCallCheck(this, e), this._target = t, this._ngZone = n, this._isPointerDown = !1, this._activeRipples = new Set, this._pointerUpEventsRegistered = !1, i.isBrowser && (this._containerElement = mf(r))
                }
                return _createClass(e, [{
                    key: "fadeInRipple",
                    value: function(e, t) {
                        var n = this,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect(),
                            a = Object.assign(Object.assign({}, id), r.animation);
                        r.centered && (e = i.left + i.width / 2, t = i.top + i.height / 2);
                        var o = r.radius || function(e, t, n) {
                                var r = Math.max(Math.abs(e - n.left), Math.abs(e - n.right)),
                                    i = Math.max(Math.abs(t - n.top), Math.abs(t - n.bottom));
                                return Math.sqrt(r * r + i * i)
                            }(e, t, i),
                            s = e - i.left,
                            u = t - i.top,
                            l = a.enterDuration,
                            c = document.createElement("div");
                        c.classList.add("mat-ripple-element"), c.style.left = "".concat(s - o, "px"), c.style.top = "".concat(u - o, "px"), c.style.height = "".concat(2 * o, "px"), c.style.width = "".concat(2 * o, "px"), null != r.color && (c.style.backgroundColor = r.color), c.style.transitionDuration = "".concat(l, "ms"), this._containerElement.appendChild(c), window.getComputedStyle(c).getPropertyValue("opacity"), c.style.transform = "scale(1)";
                        var h = new rd(this, c, r);
                        return h.state = 0, this._activeRipples.add(h), r.persistent || (this._mostRecentTransientRipple = h), this._runTimeoutOutsideZone((function() {
                            var e = h === n._mostRecentTransientRipple;
                            h.state = 1, r.persistent || e && n._isPointerDown || h.fadeOut()
                        }), l), h
                    }
                }, {
                    key: "fadeOutRipple",
                    value: function(e) {
                        var t = this._activeRipples.delete(e);
                        if (e === this._mostRecentTransientRipple && (this._mostRecentTransientRipple = null), this._activeRipples.size || (this._containerRect = null), t) {
                            var n = e.element,
                                r = Object.assign(Object.assign({}, id), e.config.animation);
                            n.style.transitionDuration = "".concat(r.exitDuration, "ms"), n.style.opacity = "0", e.state = 2, this._runTimeoutOutsideZone((function() {
                                e.state = 3, n.parentNode.removeChild(n)
                            }), r.exitDuration)
                        }
                    }
                }, {
                    key: "fadeOutAll",
                    value: function() {
                        this._activeRipples.forEach((function(e) {
                            return e.fadeOut()
                        }))
                    }
                }, {
                    key: "setupTriggerEvents",
                    value: function(e) {
                        var t = mf(e);
                        t && t !== this._triggerElement && (this._removeTriggerEvents(), this._triggerElement = t, this._registerEvents(od))
                    }
                }, {
                    key: "handleEvent",
                    value: function(e) {
                        "mousedown" === e.type ? this._onMousedown(e) : "touchstart" === e.type ? this._onTouchStart(e) : this._onPointerUp(), this._pointerUpEventsRegistered || (this._registerEvents(sd), this._pointerUpEventsRegistered = !0)
                    }
                }, {
                    key: "_onMousedown",
                    value: function(e) {
                        var t = Ef(e),
                            n = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + 800;
                        this._target.rippleDisabled || t || n || (this._isPointerDown = !0, this.fadeInRipple(e.clientX, e.clientY, this._target.rippleConfig))
                    }
                }, {
                    key: "_onTouchStart",
                    value: function(e) {
                        if (!this._target.rippleDisabled) {
                            this._lastTouchStartEvent = Date.now(), this._isPointerDown = !0;
                            for (var t = e.changedTouches, n = 0; n < t.length; n++) this.fadeInRipple(t[n].clientX, t[n].clientY, this._target.rippleConfig)
                        }
                    }
                }, {
                    key: "_onPointerUp",
                    value: function() {
                        this._isPointerDown && (this._isPointerDown = !1, this._activeRipples.forEach((function(e) {
                            !e.config.persistent && (1 === e.state || e.config.terminateOnPointerUp && 0 === e.state) && e.fadeOut()
                        })))
                    }
                }, {
                    key: "_runTimeoutOutsideZone",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        this._ngZone.runOutsideAngular((function() {
                            return setTimeout(e, t)
                        }))
                    }
                }, {
                    key: "_registerEvents",
                    value: function(e) {
                        var t = this;
                        this._ngZone.runOutsideAngular((function() {
                            e.forEach((function(e) {
                                t._triggerElement.addEventListener(e, t, ad)
                            }))
                        }))
                    }
                }, {
                    key: "_removeTriggerEvents",
                    value: function() {
                        var e = this;
                        this._triggerElement && (od.forEach((function(t) {
                            e._triggerElement.removeEventListener(t, e, ad)
                        })), this._pointerUpEventsRegistered && sd.forEach((function(t) {
                            e._triggerElement.removeEventListener(t, e, ad)
                        })))
                    }
                }]), e
            }(),
            ld = new He("mat-ripple-global-options"),
            cd = ((Wf = function() {
                function e(t, n, r, i, a) {
                    _classCallCheck(this, e), this._elementRef = t, this._animationMode = a, this.radius = 0, this._disabled = !1, this._isInitialized = !1, this._globalOptions = i || {}, this._rippleRenderer = new ud(this, n, t, r)
                }
                return _createClass(e, [{
                    key: "disabled",
                    get: function() {
                        return this._disabled
                    },
                    set: function(e) {
                        this._disabled = e, this._setupTriggerEventsIfEnabled()
                    }
                }, {
                    key: "trigger",
                    get: function() {
                        return this._trigger || this._elementRef.nativeElement
                    },
                    set: function(e) {
                        this._trigger = e, this._setupTriggerEventsIfEnabled()
                    }
                }, {
                    key: "ngOnInit",
                    value: function() {
                        this._isInitialized = !0, this._setupTriggerEventsIfEnabled()
                    }
                }, {
                    key: "ngOnDestroy",
                    value: function() {
                        this._rippleRenderer._removeTriggerEvents()
                    }
                }, {
                    key: "fadeOutAll",
                    value: function() {
                        this._rippleRenderer.fadeOutAll()
                    }
                }, {
                    key: "rippleConfig",
                    get: function() {
                        return {
                            centered: this.centered,
                            radius: this.radius,
                            color: this.color,
                            animation: Object.assign(Object.assign(Object.assign({}, this._globalOptions.animation), "NoopAnimations" === this._animationMode ? {
                                enterDuration: 0,
                                exitDuration: 0
                            } : {}), this.animation),
                            terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
                        }
                    }
                }, {
                    key: "rippleDisabled",
                    get: function() {
                        return this.disabled || !!this._globalOptions.disabled
                    }
                }, {
                    key: "_setupTriggerEventsIfEnabled",
                    value: function() {
                        !this.disabled && this._isInitialized && this._rippleRenderer.setupTriggerEvents(this.trigger)
                    }
                }, {
                    key: "launch",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return "number" == typeof e ? this._rippleRenderer.fadeInRipple(e, t, Object.assign(Object.assign({}, this.rippleConfig), n)) : this._rippleRenderer.fadeInRipple(0, 0, Object.assign(Object.assign({}, this.rippleConfig), e))
                    }
                }]), e
            }()).\u0275fac = function(e) {
                return new(e || Wf)(pa(uo), pa(Is), pa(Cf), pa(ld, 8), pa($h, 8))
            }, Wf.\u0275dir = gt({
                type: Wf,
                selectors: [
                    ["", "mat-ripple", ""],
                    ["", "matRipple", ""]
                ],
                hostAttrs: [1, "mat-ripple"],
                hostVars: 2,
                hostBindings: function(e, t) {
                    2 & e && Na("mat-ripple-unbounded", t.unbounded)
                },
                inputs: {
                    radius: ["matRippleRadius", "radius"],
                    disabled: ["matRippleDisabled", "disabled"],
                    trigger: ["matRippleTrigger", "trigger"],
                    color: ["matRippleColor", "color"],
                    unbounded: ["matRippleUnbounded", "unbounded"],
                    centered: ["matRippleCentered", "centered"],
                    animation: ["matRippleAnimation", "animation"]
                },
                exportAs: ["matRipple"]
            }), Wf),
            hd = ((Qf = function e() {
                _classCallCheck(this, e)
            }).\u0275mod = yt({
                type: Qf
            }), Qf.\u0275inj = de({
                factory: function(e) {
                    return new(e || Qf)
                },
                imports: [
                    [Vf, wf], Vf
                ]
            }), Qf),
            fd = ((qf = function e() {
                _classCallCheck(this, e)
            }).\u0275mod = yt({
                type: qf
            }), qf.\u0275inj = de({
                factory: function(e) {
                    return new(e || qf)
                }
            }), qf),
            dd = ((Bf = function e() {
                _classCallCheck(this, e)
            }).\u0275mod = yt({
                type: Bf
            }), Bf.\u0275inj = de({
                factory: function(e) {
                    return new(e || Bf)
                },
                imports: [
                    [Yu, Vf], Vf
                ]
            }), Bf),
            vd = ["mat-button", ""],
            pd = ["*"],
            yd = ["mat-button", "mat-flat-button", "mat-icon-button", "mat-raised-button", "mat-stroked-button", "mat-mini-fab", "mat-fab"],
            md = function(e, t) {
                return function(e) {
                    _inherits(r, e);
                    var n = _createSuper(r);

                    function r() {
                        var e;
                        _classCallCheck(this, r);
                        for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
                        return (e = n.call.apply(n, [this].concat(a))).color = t, e
                    }
                    return _createClass(r, [{
                        key: "color",
                        get: function() {
                            return this._color
                        },
                        set: function(e) {
                            var n = e || t;
                            n !== this._color && (this._color && this._elementRef.nativeElement.classList.remove("mat-".concat(this._color)), n && this._elementRef.nativeElement.classList.add("mat-".concat(n)), this._color = n)
                        }
                    }]), r
                }(e)
            }(function(e) {
                return function(e) {
                    _inherits(n, e);
                    var t = _createSuper(n);

                    function n() {
                        var e;
                        _classCallCheck(this, n);
                        for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                        return (e = t.call.apply(t, [this].concat(i)))._disabled = !1, e
                    }
                    return _createClass(n, [{
                        key: "disabled",
                        get: function() {
                            return this._disabled
                        },
                        set: function(e) {
                            this._disabled = yf(e)
                        }
                    }]), n
                }(e)
            }(function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n() {
                    var e;
                    _classCallCheck(this, n);
                    for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                    return (e = t.call.apply(t, [this].concat(i)))._disableRipple = !1, e
                }
                return _createClass(n, [{
                    key: "disableRipple",
                    get: function() {
                        return this._disableRipple
                    },
                    set: function(e) {
                        this._disableRipple = yf(e)
                    }
                }]), n
            }((function e(t) {
                _classCallCheck(this, e), this._elementRef = t
            })))),
            gd = ((Jf = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r, i) {
                    var a;
                    _classCallCheck(this, n), (a = t.call(this, e))._focusMonitor = r, a._animationMode = i, a.isRoundButton = a._hasHostAttributes("mat-fab", "mat-mini-fab"), a.isIconButton = a._hasHostAttributes("mat-icon-button");
                    var o, s = _createForOfIteratorHelper(yd);
                    try {
                        for (s.s(); !(o = s.n()).done;) {
                            var u = o.value;
                            a._hasHostAttributes(u) && a._getHostElement().classList.add(u)
                        }
                    } catch (l) {
                        s.e(l)
                    } finally {
                        s.f()
                    }
                    return e.nativeElement.classList.add("mat-button-base"), a._focusMonitor.monitor(a._elementRef, !0), a.isRoundButton && (a.color = "accent"), a
                }
                return _createClass(n, [{
                    key: "ngOnDestroy",
                    value: function() {
                        this._focusMonitor.stopMonitoring(this._elementRef)
                    }
                }, {
                    key: "focus",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "program",
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        this._focusMonitor.focusVia(this._getHostElement(), e, t)
                    }
                }, {
                    key: "_getHostElement",
                    value: function() {
                        return this._elementRef.nativeElement
                    }
                }, {
                    key: "_isRippleDisabled",
                    value: function() {
                        return this.disableRipple || this.disabled
                    }
                }, {
                    key: "_hasHostAttributes",
                    value: function() {
                        for (var e = this, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return n.some((function(t) {
                            return e._getHostElement().hasAttribute(t)
                        }))
                    }
                }]), n
            }(md)).\u0275fac = function(e) {
                return new(e || Jf)(pa(uo), pa(Of), pa($h, 8))
            }, Jf.\u0275cmp = ft({
                type: Jf,
                selectors: [
                    ["button", "mat-button", ""],
                    ["button", "mat-raised-button", ""],
                    ["button", "mat-icon-button", ""],
                    ["button", "mat-fab", ""],
                    ["button", "mat-mini-fab", ""],
                    ["button", "mat-stroked-button", ""],
                    ["button", "mat-flat-button", ""]
                ],
                viewQuery: function(e, t) {
                    var n, r, i, a;
                    1 & e && (a = cd, function(e, t, n, r, i, a) {
                        e.firstCreatePass && function(e, t, n) {
                                null === e.queries && (e.queries = new ns), e.queries.track(new rs(t, -1))
                            }(e, new ts(n, !0, !1, void 0)),
                            function(e, t) {
                                var n = new Xo;
                                ! function(e, t, n, r) {
                                    var i = ii(t);
                                    i.push(n), e.firstCreatePass && ai(e).push(r, i.length - 1)
                                }(e, t, n, n.destroy), null === t[5] && (t[5] = new es), t[5].queries.push(new Yo(n))
                            }(e, t)
                    }(Qt(), qt(), a)), 2 & e && function(e) {
                        var t = qt(),
                            n = Qt(),
                            r = en();
                        tn(r + 1);
                        var i = ss(n, r);
                        if (e.dirty && Lt(t) === i.metadata.isStatic) {
                            if (null === i.matches) e.reset([]);
                            else {
                                var a = i.crossesNgTemplate ? function e(t, n, r, i) {
                                    var a = t.queries.getByIndex(r),
                                        o = a.matches;
                                    if (null !== o)
                                        for (var s = os(t, n, a, r), u = 0; u < o.length; u += 2) {
                                            var l = o[u];
                                            if (l > 0) i.push(s[u / 2]);
                                            else {
                                                for (var c = o[u + 1], h = n[-l], f = 9; f < h.length; f++) {
                                                    var d = h[f];
                                                    d[17] === d[3] && e(d[1], d, c, i)
                                                }
                                                if (null !== h[5])
                                                    for (var v = h[5], p = 0; p < v.length; p++) {
                                                        var y = v[p];
                                                        e(y[1], y, c, i)
                                                    }
                                            }
                                        }
                                    return i
                                }(n, t, r, []) : os(n, t, i, r);
                                e.reset(a), e.notifyOnChanges()
                            }
                            return !0
                        }
                        return !1
                    }((r = qt(), i = en(), n = r[5].queries[i].queryList)) && (t.ripple = n.first)
                },
                hostAttrs: [1, "mat-focus-indicator"],
                hostVars: 3,
                hostBindings: function(e, t) {
                    2 & e && (va("disabled", t.disabled || null), Na("_mat-animation-noopable", "NoopAnimations" === t._animationMode))
                },
                inputs: {
                    disabled: "disabled",
                    disableRipple: "disableRipple",
                    color: "color"
                },
                exportAs: ["matButton"],
                features: [za],
                attrs: vd,
                ngContentSelectors: pd,
                decls: 4,
                vars: 5,
                consts: [
                    [1, "mat-button-wrapper"],
                    ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"],
                    [1, "mat-button-focus-overlay"]
                ],
                template: function(e, t) {
                    1 & e && (Aa(), _a(0, "span", 0), Oa(1), ka(), ba(2, "div", 1), ba(3, "div", 2)), 2 & e && (pr(2), Na("mat-button-ripple-round", t.isRoundButton || t.isIconButton), ma("matRippleDisabled", t._isRippleDisabled())("matRippleCentered", t.isIconButton)("matRippleTrigger", t._getHostElement()))
                },
                directives: [cd],
                styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled],.mat-flat-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n"],
                encapsulation: 2,
                changeDetection: 0
            }), Jf),
            _d = ((Gf = function e() {
                _classCallCheck(this, e)
            }).\u0275mod = yt({
                type: Gf
            }), Gf.\u0275inj = de({
                factory: function(e) {
                    return new(e || Gf)
                },
                imports: [
                    [hd, Vf], Vf
                ]
            }), Gf),
            kd = ((Zf = function e() {
                _classCallCheck(this, e)
            }).\u0275mod = yt({
                type: Zf
            }), Zf.\u0275inj = de({
                factory: function(e) {
                    return new(e || Zf)
                },
                imports: [
                    [Vf], Vf
                ]
            }), Zf),
            bd = ((Kf = function e() {
                _classCallCheck(this, e)
            }).\u0275mod = yt({
                type: Kf
            }), Kf.\u0275inj = de({
                factory: function(e) {
                    return new(e || Kf)
                },
                imports: [
                    [nd, hd, Vf, fd, Yu], nd, Vf, fd, kd
                ]
            }), Kf),
            Cd = ["*", [
                ["mat-card-footer"]
            ]],
            wd = ["*", "mat-card-footer"],
            Sd = [
                [
                    ["", "mat-card-avatar", ""],
                    ["", "matCardAvatar", ""]
                ],
                [
                    ["mat-card-title"],
                    ["mat-card-subtitle"],
                    ["", "mat-card-title", ""],
                    ["", "mat-card-subtitle", ""],
                    ["", "matCardTitle", ""],
                    ["", "matCardSubtitle", ""]
                ], "*"
            ],
            Ed = ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"],
            Td = ((td = function e() {
                _classCallCheck(this, e)
            }).\u0275fac = function(e) {
                return new(e || td)
            }, td.\u0275dir = gt({
                type: td,
                selectors: [
                    ["mat-card-title"],
                    ["", "mat-card-title", ""],
                    ["", "matCardTitle", ""]
                ],
                hostAttrs: [1, "mat-card-title"]
            }), td),
            xd = ((ed = function e() {
                _classCallCheck(this, e)
            }).\u0275fac = function(e) {
                return new(e || ed)
            }, ed.\u0275dir = gt({
                type: ed,
                selectors: [
                    ["mat-card-subtitle"],
                    ["", "mat-card-subtitle", ""],
                    ["", "matCardSubtitle", ""]
                ],
                hostAttrs: [1, "mat-card-subtitle"]
            }), ed),
            Ad = ((Yf = function e(t) {
                _classCallCheck(this, e), this._animationMode = t
            }).\u0275fac = function(e) {
                return new(e || Yf)(pa($h, 8))
            }, Yf.\u0275cmp = ft({
                type: Yf,
                selectors: [
                    ["mat-card"]
                ],
                hostAttrs: [1, "mat-card", "mat-focus-indicator"],
                hostVars: 2,
                hostBindings: function(e, t) {
                    2 & e && Na("_mat-animation-noopable", "NoopAnimations" === t._animationMode)
                },
                exportAs: ["matCard"],
                ngContentSelectors: wd,
                decls: 2,
                vars: 0,
                template: function(e, t) {
                    1 & e && (Aa(Cd), Oa(0), Oa(1, 1))
                },
                styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],
                encapsulation: 2,
                changeDetection: 0
            }), Yf),
            Od = ((Xf = function e() {
                _classCallCheck(this, e)
            }).\u0275fac = function(e) {
                return new(e || Xf)
            }, Xf.\u0275cmp = ft({
                type: Xf,
                selectors: [
                    ["mat-card-header"]
                ],
                hostAttrs: [1, "mat-card-header"],
                ngContentSelectors: Ed,
                decls: 4,
                vars: 0,
                consts: [
                    [1, "mat-card-header-text"]
                ],
                template: function(e, t) {
                    1 & e && (Aa(Sd), Oa(0), _a(1, "div", 0), Oa(2, 1), ka(), Oa(3, 2))
                },
                encapsulation: 2,
                changeDetection: 0
            }), Xf),
            Id = (($f = function e() {
                _classCallCheck(this, e)
            }).\u0275mod = yt({
                type: $f
            }), $f.\u0275inj = de({
                factory: function(e) {
                    return new(e || $f)
                },
                imports: [
                    [Vf], Vf
                ]
            }), $f);

        function Rd(e) {
            return function(t) {
                var n = new Pd(e),
                    r = t.lift(n);
                return n.caught = r
            }
        }
        var Pd = function() {
                function e(t) {
                    _classCallCheck(this, e), this.selector = t
                }
                return _createClass(e, [{
                    key: "call",
                    value: function(e, t) {
                        return t.subscribe(new Nd(e, this.selector, this.caught))
                    }
                }]), e
            }(),
            Nd = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r, i) {
                    var a;
                    return _classCallCheck(this, n), (a = t.call(this, e)).selector = r, a.caught = i, a
                }
                return _createClass(n, [{
                    key: "error",
                    value: function(e) {
                        if (!this.isStopped) {
                            var t;
                            try {
                                t = this.selector(e, this.caught)
                            } catch (a) {
                                return void _get(_getPrototypeOf(n.prototype), "error", this).call(this, a)
                            }
                            this._unsubscribeAndRecycle();
                            var r = new R(this, void 0, void 0);
                            this.add(r);
                            var i = M(this, t, void 0, void 0, r);
                            i !== r && this.add(i)
                        }
                    }
                }]), n
            }(L),
            Dd = function() {
                function e(t) {
                    _classCallCheck(this, e), this.callback = t
                }
                return _createClass(e, [{
                    key: "call",
                    value: function(e, t) {
                        return t.subscribe(new jd(e, this.callback))
                    }
                }]), e
            }(),
            jd = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r) {
                    var i;
                    return _classCallCheck(this, n), (i = t.call(this, e)).add(new f(r)), i
                }
                return n
            }(p);

        function Fd(e, t) {
            return q(e, t, 1)
        }
        var Md = function e() {
                _classCallCheck(this, e)
            },
            Ld = function e() {
                _classCallCheck(this, e)
            },
            Ud = function() {
                function e(t) {
                    var n = this;
                    _classCallCheck(this, e), this.normalizedNames = new Map, this.lazyUpdate = null, t ? this.lazyInit = "string" == typeof t ? function() {
                        n.headers = new Map, t.split("\n").forEach((function(e) {
                            var t = e.indexOf(":");
                            if (t > 0) {
                                var r = e.slice(0, t),
                                    i = r.toLowerCase(),
                                    a = e.slice(t + 1).trim();
                                n.maybeSetNormalizedName(r, i), n.headers.has(i) ? n.headers.get(i).push(a) : n.headers.set(i, [a])
                            }
                        }))
                    } : function() {
                        n.headers = new Map, Object.keys(t).forEach((function(e) {
                            var r = t[e],
                                i = e.toLowerCase();
                            "string" == typeof r && (r = [r]), r.length > 0 && (n.headers.set(i, r), n.maybeSetNormalizedName(e, i))
                        }))
                    } : this.headers = new Map
                }
                return _createClass(e, [{
                    key: "has",
                    value: function(e) {
                        return this.init(), this.headers.has(e.toLowerCase())
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        this.init();
                        var t = this.headers.get(e.toLowerCase());
                        return t && t.length > 0 ? t[0] : null
                    }
                }, {
                    key: "keys",
                    value: function() {
                        return this.init(), Array.from(this.normalizedNames.values())
                    }
                }, {
                    key: "getAll",
                    value: function(e) {
                        return this.init(), this.headers.get(e.toLowerCase()) || null
                    }
                }, {
                    key: "append",
                    value: function(e, t) {
                        return this.clone({
                            name: e,
                            value: t,
                            op: "a"
                        })
                    }
                }, {
                    key: "set",
                    value: function(e, t) {
                        return this.clone({
                            name: e,
                            value: t,
                            op: "s"
                        })
                    }
                }, {
                    key: "delete",
                    value: function(e, t) {
                        return this.clone({
                            name: e,
                            value: t,
                            op: "d"
                        })
                    }
                }, {
                    key: "maybeSetNormalizedName",
                    value: function(e, t) {
                        this.normalizedNames.has(t) || this.normalizedNames.set(t, e)
                    }
                }, {
                    key: "init",
                    value: function() {
                        var t = this;
                        this.lazyInit && (this.lazyInit instanceof e ? this.copyFrom(this.lazyInit) : this.lazyInit(), this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach((function(e) {
                            return t.applyUpdate(e)
                        })), this.lazyUpdate = null))
                    }
                }, {
                    key: "copyFrom",
                    value: function(e) {
                        var t = this;
                        e.init(), Array.from(e.headers.keys()).forEach((function(n) {
                            t.headers.set(n, e.headers.get(n)), t.normalizedNames.set(n, e.normalizedNames.get(n))
                        }))
                    }
                }, {
                    key: "clone",
                    value: function(t) {
                        var n = new e;
                        return n.lazyInit = this.lazyInit && this.lazyInit instanceof e ? this.lazyInit : this, n.lazyUpdate = (this.lazyUpdate || []).concat([t]), n
                    }
                }, {
                    key: "applyUpdate",
                    value: function(e) {
                        var t = e.name.toLowerCase();
                        switch (e.op) {
                            case "a":
                            case "s":
                                var n = e.value;
                                if ("string" == typeof n && (n = [n]), 0 === n.length) return;
                                this.maybeSetNormalizedName(e.name, t);
                                var r = ("a" === e.op ? this.headers.get(t) : void 0) || [];
                                r.push.apply(r, _toConsumableArray(n)), this.headers.set(t, r);
                                break;
                            case "d":
                                var i = e.value;
                                if (i) {
                                    var a = this.headers.get(t);
                                    if (!a) return;
                                    0 === (a = a.filter((function(e) {
                                        return -1 === i.indexOf(e)
                                    }))).length ? (this.headers.delete(t), this.normalizedNames.delete(t)) : this.headers.set(t, a)
                                } else this.headers.delete(t), this.normalizedNames.delete(t)
                        }
                    }
                }, {
                    key: "forEach",
                    value: function(e) {
                        var t = this;
                        this.init(), Array.from(this.normalizedNames.keys()).forEach((function(n) {
                            return e(t.normalizedNames.get(n), t.headers.get(n))
                        }))
                    }
                }]), e
            }(),
            Hd = function() {
                function e() {
                    _classCallCheck(this, e)
                }
                return _createClass(e, [{
                    key: "encodeKey",
                    value: function(e) {
                        return Vd(e)
                    }
                }, {
                    key: "encodeValue",
                    value: function(e) {
                        return Vd(e)
                    }
                }, {
                    key: "decodeKey",
                    value: function(e) {
                        return decodeURIComponent(e)
                    }
                }, {
                    key: "decodeValue",
                    value: function(e) {
                        return decodeURIComponent(e)
                    }
                }]), e
            }();

        function Vd(e) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/gi, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%2B/gi, "+").replace(/%3D/gi, "=").replace(/%3F/gi, "?").replace(/%2F/gi, "/")
        }
        var zd = function() {
            function e() {
                var t = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (_classCallCheck(this, e), this.updates = null, this.cloneFrom = null, this.encoder = n.encoder || new Hd, n.fromString) {
                    if (n.fromObject) throw new Error("Cannot specify both fromString and fromObject.");
                    this.map = function(e, t) {
                        var n = new Map;
                        return e.length > 0 && e.split("&").forEach((function(e) {
                            var r = e.indexOf("="),
                                i = _slicedToArray(-1 == r ? [t.decodeKey(e), ""] : [t.decodeKey(e.slice(0, r)), t.decodeValue(e.slice(r + 1))], 2),
                                a = i[0],
                                o = i[1],
                                s = n.get(a) || [];
                            s.push(o), n.set(a, s)
                        })), n
                    }(n.fromString, this.encoder)
                } else n.fromObject ? (this.map = new Map, Object.keys(n.fromObject).forEach((function(e) {
                    var r = n.fromObject[e];
                    t.map.set(e, Array.isArray(r) ? r : [r])
                }))) : this.map = null
            }
            return _createClass(e, [{
                key: "has",
                value: function(e) {
                    return this.init(), this.map.has(e)
                }
            }, {
                key: "get",
                value: function(e) {
                    this.init();
                    var t = this.map.get(e);
                    return t ? t[0] : null
                }
            }, {
                key: "getAll",
                value: function(e) {
                    return this.init(), this.map.get(e) || null
                }
            }, {
                key: "keys",
                value: function() {
                    return this.init(), Array.from(this.map.keys())
                }
            }, {
                key: "append",
                value: function(e, t) {
                    return this.clone({
                        param: e,
                        value: t,
                        op: "a"
                    })
                }
            }, {
                key: "set",
                value: function(e, t) {
                    return this.clone({
                        param: e,
                        value: t,
                        op: "s"
                    })
                }
            }, {
                key: "delete",
                value: function(e, t) {
                    return this.clone({
                        param: e,
                        value: t,
                        op: "d"
                    })
                }
            }, {
                key: "toString",
                value: function() {
                    var e = this;
                    return this.init(), this.keys().map((function(t) {
                        var n = e.encoder.encodeKey(t);
                        return e.map.get(t).map((function(t) {
                            return n + "=" + e.encoder.encodeValue(t)
                        })).join("&")
                    })).filter((function(e) {
                        return "" !== e
                    })).join("&")
                }
            }, {
                key: "clone",
                value: function(t) {
                    var n = new e({
                        encoder: this.encoder
                    });
                    return n.cloneFrom = this.cloneFrom || this, n.updates = (this.updates || []).concat([t]), n
                }
            }, {
                key: "init",
                value: function() {
                    var e = this;
                    null === this.map && (this.map = new Map), null !== this.cloneFrom && (this.cloneFrom.init(), this.cloneFrom.keys().forEach((function(t) {
                        return e.map.set(t, e.cloneFrom.map.get(t))
                    })), this.updates.forEach((function(t) {
                        switch (t.op) {
                            case "a":
                            case "s":
                                var n = ("a" === t.op ? e.map.get(t.param) : void 0) || [];
                                n.push(t.value), e.map.set(t.param, n);
                                break;
                            case "d":
                                if (void 0 === t.value) {
                                    e.map.delete(t.param);
                                    break
                                }
                                var r = e.map.get(t.param) || [],
                                    i = r.indexOf(t.value); - 1 !== i && r.splice(i, 1), r.length > 0 ? e.map.set(t.param, r) : e.map.delete(t.param)
                        }
                    })), this.cloneFrom = this.updates = null)
                }
            }]), e
        }();

        function Bd(e) {
            return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
        }

        function qd(e) {
            return "undefined" != typeof Blob && e instanceof Blob
        }

        function Qd(e) {
            return "undefined" != typeof FormData && e instanceof FormData
        }
        var Wd = function() {
                function e(t, n, r, i) {
                    var a;
                    if (_classCallCheck(this, e), this.url = n, this.body = null, this.reportProgress = !1, this.withCredentials = !1, this.responseType = "json", this.method = t.toUpperCase(), function(e) {
                            switch (e) {
                                case "DELETE":
                                case "GET":
                                case "HEAD":
                                case "OPTIONS":
                                case "JSONP":
                                    return !1;
                                default:
                                    return !0
                            }
                        }(this.method) || i ? (this.body = void 0 !== r ? r : null, a = i) : a = r, a && (this.reportProgress = !!a.reportProgress, this.withCredentials = !!a.withCredentials, a.responseType && (this.responseType = a.responseType), a.headers && (this.headers = a.headers), a.params && (this.params = a.params)), this.headers || (this.headers = new Ud), this.params) {
                        var o = this.params.toString();
                        if (0 === o.length) this.urlWithParams = n;
                        else {
                            var s = n.indexOf("?");
                            this.urlWithParams = n + (-1 === s ? "?" : s < n.length - 1 ? "&" : "") + o
                        }
                    } else this.params = new zd, this.urlWithParams = n
                }
                return _createClass(e, [{
                    key: "serializeBody",
                    value: function() {
                        return null === this.body ? null : Bd(this.body) || qd(this.body) || Qd(this.body) || "string" == typeof this.body ? this.body : this.body instanceof zd ? this.body.toString() : "object" == typeof this.body || "boolean" == typeof this.body || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString()
                    }
                }, {
                    key: "detectContentTypeHeader",
                    value: function() {
                        return null === this.body ? null : Qd(this.body) ? null : qd(this.body) ? this.body.type || null : Bd(this.body) ? null : "string" == typeof this.body ? "text/plain" : this.body instanceof zd ? "application/x-www-form-urlencoded;charset=UTF-8" : "object" == typeof this.body || "number" == typeof this.body || Array.isArray(this.body) ? "application/json" : null
                    }
                }, {
                    key: "clone",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = t.method || this.method,
                            r = t.url || this.url,
                            i = t.responseType || this.responseType,
                            a = void 0 !== t.body ? t.body : this.body,
                            o = void 0 !== t.withCredentials ? t.withCredentials : this.withCredentials,
                            s = void 0 !== t.reportProgress ? t.reportProgress : this.reportProgress,
                            u = t.headers || this.headers,
                            l = t.params || this.params;
                        return void 0 !== t.setHeaders && (u = Object.keys(t.setHeaders).reduce((function(e, n) {
                            return e.set(n, t.setHeaders[n])
                        }), u)), t.setParams && (l = Object.keys(t.setParams).reduce((function(e, n) {
                            return e.set(n, t.setParams[n])
                        }), l)), new e(n, r, a, {
                            params: l,
                            headers: u,
                            reportProgress: s,
                            responseType: i,
                            withCredentials: o
                        })
                    }
                }]), e
            }(),
            Kd = function() {
                var e = {
                    Sent: 0,
                    UploadProgress: 1,
                    ResponseHeader: 2,
                    DownloadProgress: 3,
                    Response: 4,
                    User: 5
                };
                return e[e.Sent] = "Sent", e[e.UploadProgress] = "UploadProgress", e[e.ResponseHeader] = "ResponseHeader", e[e.DownloadProgress] = "DownloadProgress", e[e.Response] = "Response", e[e.User] = "User", e
            }(),
            Zd = function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "OK";
                _classCallCheck(this, e), this.headers = t.headers || new Ud, this.status = void 0 !== t.status ? t.status : n, this.statusText = t.statusText || r, this.url = t.url || null, this.ok = this.status >= 200 && this.status < 300
            },
            Gd = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n() {
                    var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return _classCallCheck(this, n), (e = t.call(this, r)).type = Kd.ResponseHeader, e
                }
                return _createClass(n, [{
                    key: "clone",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return new n({
                            headers: e.headers || this.headers,
                            status: void 0 !== e.status ? e.status : this.status,
                            statusText: e.statusText || this.statusText,
                            url: e.url || this.url || void 0
                        })
                    }
                }]), n
            }(Zd),
            Jd = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n() {
                    var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return _classCallCheck(this, n), (e = t.call(this, r)).type = Kd.Response, e.body = void 0 !== r.body ? r.body : null, e
                }
                return _createClass(n, [{
                    key: "clone",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return new n({
                            body: void 0 !== e.body ? e.body : this.body,
                            headers: e.headers || this.headers,
                            status: void 0 !== e.status ? e.status : this.status,
                            statusText: e.statusText || this.statusText,
                            url: e.url || this.url || void 0
                        })
                    }
                }]), n
            }(Zd),
            $d = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e) {
                    var r;
                    return _classCallCheck(this, n), (r = t.call(this, e, 0, "Unknown Error")).name = "HttpErrorResponse", r.ok = !1, r.message = r.status >= 200 && r.status < 300 ? "Http failure during parsing for ".concat(e.url || "(unknown url)") : "Http failure response for ".concat(e.url || "(unknown url)", ": ").concat(e.status, " ").concat(e.statusText), r.error = e.error || null, r
                }
                return n
            }(Zd);

        function Xd(e, t) {
            return {
                body: t,
                headers: e.headers,
                observe: e.observe,
                params: e.params,
                reportProgress: e.reportProgress,
                responseType: e.responseType,
                withCredentials: e.withCredentials
            }
        }
        var Yd, ev, tv, nv, rv, iv, av, ov, sv, uv, lv, cv, hv = ((Yd = function() {
                function e(t) {
                    _classCallCheck(this, e), this.handler = t
                }
                return _createClass(e, [{
                    key: "request",
                    value: function(e, t) {
                        var n, r = this,
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if (e instanceof Wd) n = e;
                        else {
                            var a = void 0;
                            a = i.headers instanceof Ud ? i.headers : new Ud(i.headers);
                            var o = void 0;
                            i.params && (o = i.params instanceof zd ? i.params : new zd({
                                fromObject: i.params
                            })), n = new Wd(e, t, void 0 !== i.body ? i.body : null, {
                                headers: a,
                                params: o,
                                reportProgress: i.reportProgress,
                                responseType: i.responseType || "json",
                                withCredentials: i.withCredentials
                            })
                        }
                        var s = ef(n).pipe(Fd((function(e) {
                            return r.handler.handle(e)
                        })));
                        if (e instanceof Wd || "events" === i.observe) return s;
                        var u = s.pipe( of ((function(e) {
                            return e instanceof Jd
                        })));
                        switch (i.observe || "body") {
                            case "body":
                                switch (n.responseType) {
                                    case "arraybuffer":
                                        return u.pipe(U((function(e) {
                                            if (null !== e.body && !(e.body instanceof ArrayBuffer)) throw new Error("Response is not an ArrayBuffer.");
                                            return e.body
                                        })));
                                    case "blob":
                                        return u.pipe(U((function(e) {
                                            if (null !== e.body && !(e.body instanceof Blob)) throw new Error("Response is not a Blob.");
                                            return e.body
                                        })));
                                    case "text":
                                        return u.pipe(U((function(e) {
                                            if (null !== e.body && "string" != typeof e.body) throw new Error("Response is not a string.");
                                            return e.body
                                        })));
                                    case "json":
                                    default:
                                        return u.pipe(U((function(e) {
                                            return e.body
                                        })))
                                }
                                case "response":
                                    return u;
                                default:
                                    throw new Error("Unreachable: unhandled observe type ".concat(i.observe, "}"))
                        }
                    }
                }, {
                    key: "delete",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.request("DELETE", e, t)
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.request("GET", e, t)
                    }
                }, {
                    key: "head",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.request("HEAD", e, t)
                    }
                }, {
                    key: "jsonp",
                    value: function(e, t) {
                        return this.request("JSONP", e, {
                            params: (new zd).append(t, "JSONP_CALLBACK"),
                            observe: "body",
                            responseType: "json"
                        })
                    }
                }, {
                    key: "options",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.request("OPTIONS", e, t)
                    }
                }, {
                    key: "patch",
                    value: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return this.request("PATCH", e, Xd(n, t))
                    }
                }, {
                    key: "post",
                    value: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return this.request("POST", e, Xd(n, t))
                    }
                }, {
                    key: "put",
                    value: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return this.request("PUT", e, Xd(n, t))
                    }
                }]), e
            }()).\u0275fac = function(e) {
                return new(e || Yd)(Ge(Md))
            }, Yd.\u0275prov = fe({
                token: Yd,
                factory: Yd.\u0275fac
            }), Yd),
            fv = function() {
                function e(t, n) {
                    _classCallCheck(this, e), this.next = t, this.interceptor = n
                }
                return _createClass(e, [{
                    key: "handle",
                    value: function(e) {
                        return this.interceptor.intercept(e, this.next)
                    }
                }]), e
            }(),
            dv = new He("HTTP_INTERCEPTORS"),
            vv = ((ev = function() {
                function e() {
                    _classCallCheck(this, e)
                }
                return _createClass(e, [{
                    key: "intercept",
                    value: function(e, t) {
                        return t.handle(e)
                    }
                }]), e
            }()).\u0275fac = function(e) {
                return new(e || ev)
            }, ev.\u0275prov = fe({
                token: ev,
                factory: ev.\u0275fac
            }), ev),
            pv = /^\)\]\}',?\n/,
            yv = function e() {
                _classCallCheck(this, e)
            },
            mv = ((nv = function() {
                function e() {
                    _classCallCheck(this, e)
                }
                return _createClass(e, [{
                    key: "build",
                    value: function() {
                        return new XMLHttpRequest
                    }
                }]), e
            }()).\u0275fac = function(e) {
                return new(e || nv)
            }, nv.\u0275prov = fe({
                token: nv,
                factory: nv.\u0275fac
            }), nv),
            gv = ((tv = function() {
                function e(t) {
                    _classCallCheck(this, e), this.xhrFactory = t
                }
                return _createClass(e, [{
                    key: "handle",
                    value: function(e) {
                        var t = this;
                        if ("JSONP" === e.method) throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
                        return new C((function(n) {
                            var r = t.xhrFactory.build();
                            if (r.open(e.method, e.urlWithParams), e.withCredentials && (r.withCredentials = !0), e.headers.forEach((function(e, t) {
                                    return r.setRequestHeader(e, t.join(","))
                                })), e.headers.has("Accept") || r.setRequestHeader("Accept", "application/json, text/plain, */*"), !e.headers.has("Content-Type")) {
                                var i = e.detectContentTypeHeader();
                                null !== i && r.setRequestHeader("Content-Type", i)
                            }
                            if (e.responseType) {
                                var a = e.responseType.toLowerCase();
                                r.responseType = "json" !== a ? a : "text"
                            }
                            var o = e.serializeBody(),
                                s = null,
                                u = function() {
                                    if (null !== s) return s;
                                    var t = 1223 === r.status ? 204 : r.status,
                                        n = r.statusText || "OK",
                                        i = new Ud(r.getAllResponseHeaders()),
                                        a = function(e) {
                                            return "responseURL" in e && e.responseURL ? e.responseURL : /^X-Request-URL:/m.test(e.getAllResponseHeaders()) ? e.getResponseHeader("X-Request-URL") : null
                                        }(r) || e.url;
                                    return s = new Gd({
                                        headers: i,
                                        status: t,
                                        statusText: n,
                                        url: a
                                    })
                                },
                                l = function() {
                                    var t = u(),
                                        i = t.headers,
                                        a = t.status,
                                        o = t.statusText,
                                        s = t.url,
                                        l = null;
                                    204 !== a && (l = void 0 === r.response ? r.responseText : r.response), 0 === a && (a = l ? 200 : 0);
                                    var c = a >= 200 && a < 300;
                                    if ("json" === e.responseType && "string" == typeof l) {
                                        var h = l;
                                        l = l.replace(pv, "");
                                        try {
                                            l = "" !== l ? JSON.parse(l) : null
                                        } catch (f) {
                                            l = h, c && (c = !1, l = {
                                                error: f,
                                                text: l
                                            })
                                        }
                                    }
                                    c ? (n.next(new Jd({
                                        body: l,
                                        headers: i,
                                        status: a,
                                        statusText: o,
                                        url: s || void 0
                                    })), n.complete()) : n.error(new $d({
                                        error: l,
                                        headers: i,
                                        status: a,
                                        statusText: o,
                                        url: s || void 0
                                    }))
                                },
                                c = function(e) {
                                    var t = u().url,
                                        i = new $d({
                                            error: e,
                                            status: r.status || 0,
                                            statusText: r.statusText || "Unknown Error",
                                            url: t || void 0
                                        });
                                    n.error(i)
                                },
                                h = !1,
                                f = function(t) {
                                    h || (n.next(u()), h = !0);
                                    var i = {
                                        type: Kd.DownloadProgress,
                                        loaded: t.loaded
                                    };
                                    t.lengthComputable && (i.total = t.total), "text" === e.responseType && r.responseText && (i.partialText = r.responseText), n.next(i)
                                },
                                d = function(e) {
                                    var t = {
                                        type: Kd.UploadProgress,
                                        loaded: e.loaded
                                    };
                                    e.lengthComputable && (t.total = e.total), n.next(t)
                                };
                            return r.addEventListener("load", l), r.addEventListener("error", c), e.reportProgress && (r.addEventListener("progress", f), null !== o && r.upload && r.upload.addEventListener("progress", d)), r.send(o), n.next({
                                    type: Kd.Sent
                                }),
                                function() {
                                    r.removeEventListener("error", c), r.removeEventListener("load", l), e.reportProgress && (r.removeEventListener("progress", f), null !== o && r.upload && r.upload.removeEventListener("progress", d)), r.abort()
                                }
                        }))
                    }
                }]), e
            }()).\u0275fac = function(e) {
                return new(e || tv)(Ge(yv))
            }, tv.\u0275prov = fe({
                token: tv,
                factory: tv.\u0275fac
            }), tv),
            _v = new He("XSRF_COOKIE_NAME"),
            kv = new He("XSRF_HEADER_NAME"),
            bv = function e() {
                _classCallCheck(this, e)
            },
            Cv = ((cv = function() {
                function e(t, n, r) {
                    _classCallCheck(this, e), this.doc = t, this.platform = n, this.cookieName = r, this.lastCookieString = "", this.lastToken = null, this.parseCount = 0
                }
                return _createClass(e, [{
                    key: "getToken",
                    value: function() {
                        if ("server" === this.platform) return null;
                        var e = this.doc.cookie || "";
                        return e !== this.lastCookieString && (this.parseCount++, this.lastToken = Fu(e, this.cookieName), this.lastCookieString = e), this.lastToken
                    }
                }]), e
            }()).\u0275fac = function(e) {
                return new(e || cv)(Ge(lu), Ge(vs), Ge(_v))
            }, cv.\u0275prov = fe({
                token: cv,
                factory: cv.\u0275fac
            }), cv),
            wv = ((lv = function() {
                function e(t, n) {
                    _classCallCheck(this, e), this.tokenService = t, this.headerName = n
                }
                return _createClass(e, [{
                    key: "intercept",
                    value: function(e, t) {
                        var n = e.url.toLowerCase();
                        if ("GET" === e.method || "HEAD" === e.method || n.startsWith("http://") || n.startsWith("https://")) return t.handle(e);
                        var r = this.tokenService.getToken();
                        return null === r || e.headers.has(this.headerName) || (e = e.clone({
                            headers: e.headers.set(this.headerName, r)
                        })), t.handle(e)
                    }
                }]), e
            }()).\u0275fac = function(e) {
                return new(e || lv)(Ge(bv), Ge(kv))
            }, lv.\u0275prov = fe({
                token: lv,
                factory: lv.\u0275fac
            }), lv),
            Sv = ((uv = function() {
                function e(t, n) {
                    _classCallCheck(this, e), this.backend = t, this.injector = n, this.chain = null
                }
                return _createClass(e, [{
                    key: "handle",
                    value: function(e) {
                        if (null === this.chain) {
                            var t = this.injector.get(dv, []);
                            this.chain = t.reduceRight((function(e, t) {
                                return new fv(e, t)
                            }), this.backend)
                        }
                        return this.chain.handle(e)
                    }
                }]), e
            }()).\u0275fac = function(e) {
                return new(e || uv)(Ge(Ld), Ge(ta))
            }, uv.\u0275prov = fe({
                token: uv,
                factory: uv.\u0275fac
            }), uv),
            Ev = ((sv = function() {
                function e() {
                    _classCallCheck(this, e)
                }
                return _createClass(e, null, [{
                    key: "disable",
                    value: function() {
                        return {
                            ngModule: e,
                            providers: [{
                                provide: wv,
                                useClass: vv
                            }]
                        }
                    }
                }, {
                    key: "withOptions",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return {
                            ngModule: e,
                            providers: [t.cookieName ? {
                                provide: _v,
                                useValue: t.cookieName
                            } : [], t.headerName ? {
                                provide: kv,
                                useValue: t.headerName
                            } : []]
                        }
                    }
                }]), e
            }()).\u0275mod = yt({
                type: sv
            }), sv.\u0275inj = de({
                factory: function(e) {
                    return new(e || sv)
                },
                providers: [wv, {
                    provide: dv,
                    useExisting: wv,
                    multi: !0
                }, {
                    provide: bv,
                    useClass: Cv
                }, {
                    provide: _v,
                    useValue: "XSRF-TOKEN"
                }, {
                    provide: kv,
                    useValue: "X-XSRF-TOKEN"
                }]
            }), sv),
            Tv = ((ov = function e() {
                _classCallCheck(this, e)
            }).\u0275mod = yt({
                type: ov
            }), ov.\u0275inj = de({
                factory: function(e) {
                    return new(e || ov)
                },
                providers: [hv, {
                    provide: Md,
                    useClass: Sv
                }, gv, {
                    provide: Ld,
                    useExisting: gv
                }, mv, {
                    provide: yv,
                    useExisting: mv
                }],
                imports: [
                    [Ev.withOptions({
                        cookieName: "XSRF-TOKEN",
                        headerName: "X-XSRF-TOKEN"
                    })]
                ]
            }), ov),
            xv = ((av = function e() {
                _classCallCheck(this, e)
            }).\u0275mod = yt({
                type: av
            }), av.\u0275inj = de({
                factory: function(e) {
                    return new(e || av)
                },
                imports: [
                    [Vf], Vf
                ]
            }), av),
            Av = ((iv = function e() {
                _classCallCheck(this, e)
            }).\u0275mod = yt({
                type: iv
            }), iv.\u0275inj = de({
                factory: function(e) {
                    return new(e || iv)
                },
                providers: [],
                imports: [
                    [dd, _d, bd, Id, kd, xv], dd, _d, bd, Id, kd, xv
                ]
            }), iv),
            Ov = ((rv = function e() {
                _classCallCheck(this, e)
            }).\u0275mod = yt({
                type: rv
            }), rv.\u0275inj = de({
                factory: function(e) {
                    return new(e || rv)
                },
                providers: [],
                imports: [
                    [Tv], Tv
                ]
            }), rv),
            Iv = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e) {
                    var r;
                    return _classCallCheck(this, n), (r = t.call(this))._value = e, r
                }
                return _createClass(n, [{
                    key: "value",
                    get: function() {
                        return this.getValue()
                    }
                }, {
                    key: "_subscribe",
                    value: function(e) {
                        var t = _get(_getPrototypeOf(n.prototype), "_subscribe", this).call(this, e);
                        return t && !t.closed && e.next(this._value), t
                    }
                }, {
                    key: "getValue",
                    value: function() {
                        if (this.hasError) throw this.thrownError;
                        if (this.closed) throw new E;
                        return this._value
                    }
                }, {
                    key: "next",
                    value: function(e) {
                        _get(_getPrototypeOf(n.prototype), "next", this).call(this, this._value = e)
                    }
                }]), n
            }(A),
            Rv = function() {
                function e() {
                    return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
                }
                return e.prototype = Object.create(Error.prototype), e
            }(),
            Pv = {},
            Nv = function() {
                function e(t) {
                    _classCallCheck(this, e), this.resultSelector = t
                }
                return _createClass(e, [{
                    key: "call",
                    value: function(e, t) {
                        return t.subscribe(new Dv(e, this.resultSelector))
                    }
                }]), e
            }(),
            Dv = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r) {
                    var i;
                    return _classCallCheck(this, n), (i = t.call(this, e)).resultSelector = r, i.active = 0, i.values = [], i.observables = [], i
                }
                return _createClass(n, [{
                    key: "_next",
                    value: function(e) {
                        this.values.push(Pv), this.observables.push(e)
                    }
                }, {
                    key: "_complete",
                    value: function() {
                        var e = this.observables,
                            t = e.length;
                        if (0 === t) this.destination.complete();
                        else {
                            this.active = t, this.toRespond = t;
                            for (var n = 0; n < t; n++) {
                                var r = e[n];
                                this.add(M(this, r, r, n))
                            }
                        }
                    }
                }, {
                    key: "notifyComplete",
                    value: function(e) {
                        0 == (this.active -= 1) && this.destination.complete()
                    }
                }, {
                    key: "notifyNext",
                    value: function(e, t, n, r, i) {
                        var a = this.values,
                            o = this.toRespond ? a[n] === Pv ? --this.toRespond : this.toRespond : 0;
                        a[n] = t, 0 === o && (this.resultSelector ? this._tryResultSelector(a) : this.destination.next(a.slice()))
                    }
                }, {
                    key: "_tryResultSelector",
                    value: function(e) {
                        var t;
                        try {
                            t = this.resultSelector.apply(this, e)
                        } catch (n) {
                            return void this.destination.error(n)
                        }
                        this.destination.next(t)
                    }
                }]), n
            }(L);

        function jv(e) {
            return new C((function(t) {
                var n;
                try {
                    n = e()
                } catch (r) {
                    return void t.error(r)
                }
                return (n ? B(n) : hf()).subscribe(t)
            }))
        }

        function Fv(e) {
            return function(t) {
                return 0 === e ? hf() : t.lift(new Mv(e))
            }
        }
        var Mv = function() {
                function e(t) {
                    if (_classCallCheck(this, e), this.total = t, this.total < 0) throw new lf
                }
                return _createClass(e, [{
                    key: "call",
                    value: function(e, t) {
                        return t.subscribe(new Lv(e, this.total))
                    }
                }]), e
            }(),
            Lv = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r) {
                    var i;
                    return _classCallCheck(this, n), (i = t.call(this, e)).total = r, i.ring = new Array, i.count = 0, i
                }
                return _createClass(n, [{
                    key: "_next",
                    value: function(e) {
                        var t = this.ring,
                            n = this.total,
                            r = this.count++;
                        t.length < n ? t.push(e) : t[r % n] = e
                    }
                }, {
                    key: "_complete",
                    value: function() {
                        var e = this.destination,
                            t = this.count;
                        if (t > 0)
                            for (var n = this.count >= this.total ? this.total : this.count, r = this.ring, i = 0; i < n; i++) {
                                var a = t++ % n;
                                e.next(r[a])
                            }
                        e.complete()
                    }
                }]), n
            }(p);

        function Uv() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zv;
            return function(t) {
                return t.lift(new Hv(e))
            }
        }
        var Hv = function() {
                function e(t) {
                    _classCallCheck(this, e), this.errorFactory = t
                }
                return _createClass(e, [{
                    key: "call",
                    value: function(e, t) {
                        return t.subscribe(new Vv(e, this.errorFactory))
                    }
                }]), e
            }(),
            Vv = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r) {
                    var i;
                    return _classCallCheck(this, n), (i = t.call(this, e)).errorFactory = r, i.hasValue = !1, i
                }
                return _createClass(n, [{
                    key: "_next",
                    value: function(e) {
                        this.hasValue = !0, this.destination.next(e)
                    }
                }, {
                    key: "_complete",
                    value: function() {
                        if (this.hasValue) return this.destination.complete();
                        var e;
                        try {
                            e = this.errorFactory()
                        } catch (t) {
                            e = t
                        }
                        this.destination.error(e)
                    }
                }]), n
            }(p);

        function zv() {
            return new Rv
        }

        function Bv() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            return function(t) {
                return t.lift(new qv(e))
            }
        }
        var qv = function() {
                function e(t) {
                    _classCallCheck(this, e), this.defaultValue = t
                }
                return _createClass(e, [{
                    key: "call",
                    value: function(e, t) {
                        return t.subscribe(new Qv(e, this.defaultValue))
                    }
                }]), e
            }(),
            Qv = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r) {
                    var i;
                    return _classCallCheck(this, n), (i = t.call(this, e)).defaultValue = r, i.isEmpty = !0, i
                }
                return _createClass(n, [{
                    key: "_next",
                    value: function(e) {
                        this.isEmpty = !1, this.destination.next(e)
                    }
                }, {
                    key: "_complete",
                    value: function() {
                        this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
                    }
                }]), n
            }(p);

        function Wv(e, t) {
            var n = arguments.length >= 2;
            return function(r) {
                return r.pipe(e ? of ((function(t, n) {
                    return e(t, n, r)
                })) : g, Fv(1), n ? Bv(t) : Uv((function() {
                    return new Rv
                })))
            }
        }

        function Kv(e, t) {
            var n = arguments.length >= 2;
            return function(r) {
                return r.pipe(e ? of ((function(t, n) {
                    return e(t, n, r)
                })) : g, ff(1), n ? Bv(t) : Uv((function() {
                    return new Rv
                })))
            }
        }
        var Zv = function() {
                function e(t, n, r) {
                    _classCallCheck(this, e), this.predicate = t, this.thisArg = n, this.source = r
                }
                return _createClass(e, [{
                    key: "call",
                    value: function(e, t) {
                        return t.subscribe(new Gv(e, this.predicate, this.thisArg, this.source))
                    }
                }]), e
            }(),
            Gv = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r, i, a) {
                    var o;
                    return _classCallCheck(this, n), (o = t.call(this, e)).predicate = r, o.thisArg = i, o.source = a, o.index = 0, o.thisArg = i || _assertThisInitialized(o), o
                }
                return _createClass(n, [{
                    key: "notifyComplete",
                    value: function(e) {
                        this.destination.next(e), this.destination.complete()
                    }
                }, {
                    key: "_next",
                    value: function(e) {
                        var t = !1;
                        try {
                            t = this.predicate.call(this.thisArg, e, this.index++, this.source)
                        } catch (n) {
                            return void this.destination.error(n)
                        }
                        t || this.notifyComplete(!1)
                    }
                }, {
                    key: "_complete",
                    value: function() {
                        this.notifyComplete(!0)
                    }
                }]), n
            }(p);

        function Jv(e, t) {
            return "function" == typeof t ? function(n) {
                return n.pipe(Jv((function(n, r) {
                    return B(e(n, r)).pipe(U((function(e, i) {
                        return t(n, e, r, i)
                    })))
                })))
            } : function(t) {
                return t.lift(new $v(e))
            }
        }
        var $v = function() {
                function e(t) {
                    _classCallCheck(this, e), this.project = t
                }
                return _createClass(e, [{
                    key: "call",
                    value: function(e, t) {
                        return t.subscribe(new Xv(e, this.project))
                    }
                }]), e
            }(),
            Xv = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r) {
                    var i;
                    return _classCallCheck(this, n), (i = t.call(this, e)).project = r, i.index = 0, i
                }
                return _createClass(n, [{
                    key: "_next",
                    value: function(e) {
                        var t, n = this.index++;
                        try {
                            t = this.project(e, n)
                        } catch (r) {
                            return void this.destination.error(r)
                        }
                        this._innerSub(t, e, n)
                    }
                }, {
                    key: "_innerSub",
                    value: function(e, t, n) {
                        var r = this.innerSubscription;
                        r && r.unsubscribe();
                        var i = new R(this, t, n),
                            a = this.destination;
                        a.add(i), this.innerSubscription = M(this, e, void 0, void 0, i), this.innerSubscription !== i && a.add(this.innerSubscription)
                    }
                }, {
                    key: "_complete",
                    value: function() {
                        var e = this.innerSubscription;
                        e && !e.closed || _get(_getPrototypeOf(n.prototype), "_complete", this).call(this), this.unsubscribe()
                    }
                }, {
                    key: "_unsubscribe",
                    value: function() {
                        this.innerSubscription = null
                    }
                }, {
                    key: "notifyComplete",
                    value: function(e) {
                        this.destination.remove(e), this.innerSubscription = null, this.isStopped && _get(_getPrototypeOf(n.prototype), "_complete", this).call(this)
                    }
                }, {
                    key: "notifyNext",
                    value: function(e, t, n, r, i) {
                        this.destination.next(t)
                    }
                }]), n
            }(L);

        function Yv(e, t) {
            var n = !1;
            return arguments.length >= 2 && (n = !0),
                function(r) {
                    return r.lift(new tp(e, t, n))
                }
        }
        var ep, tp = function() {
                function e(t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    _classCallCheck(this, e), this.accumulator = t, this.seed = n, this.hasSeed = r
                }
                return _createClass(e, [{
                    key: "call",
                    value: function(e, t) {
                        return t.subscribe(new np(e, this.accumulator, this.seed, this.hasSeed))
                    }
                }]), e
            }(),
            np = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r, i, a) {
                    var o;
                    return _classCallCheck(this, n), (o = t.call(this, e)).accumulator = r, o._seed = i, o.hasSeed = a, o.index = 0, o
                }
                return _createClass(n, [{
                    key: "seed",
                    get: function() {
                        return this._seed
                    },
                    set: function(e) {
                        this.hasSeed = !0, this._seed = e
                    }
                }, {
                    key: "_next",
                    value: function(e) {
                        if (this.hasSeed) return this._tryNext(e);
                        this.seed = e, this.destination.next(e)
                    }
                }, {
                    key: "_tryNext",
                    value: function(e) {
                        var t, n = this.index++;
                        try {
                            t = this.accumulator(this.seed, e, n)
                        } catch (r) {
                            this.destination.error(r)
                        }
                        this.seed = t, this.destination.next(t)
                    }
                }]), n
            }(p),
            rp = function e(t, n) {
                _classCallCheck(this, e), this.id = t, this.url = n
            },
            ip = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r) {
                    var i, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "imperative",
                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    return _classCallCheck(this, n), (i = t.call(this, e, r)).navigationTrigger = a, i.restoredState = o, i
                }
                return _createClass(n, [{
                    key: "toString",
                    value: function() {
                        return "NavigationStart(id: ".concat(this.id, ", url: '").concat(this.url, "')")
                    }
                }]), n
            }(rp),
            ap = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r, i) {
                    var a;
                    return _classCallCheck(this, n), (a = t.call(this, e, r)).urlAfterRedirects = i, a
                }
                return _createClass(n, [{
                    key: "toString",
                    value: function() {
                        return "NavigationEnd(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "')")
                    }
                }]), n
            }(rp),
            op = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r, i) {
                    var a;
                    return _classCallCheck(this, n), (a = t.call(this, e, r)).reason = i, a
                }
                return _createClass(n, [{
                    key: "toString",
                    value: function() {
                        return "NavigationCancel(id: ".concat(this.id, ", url: '").concat(this.url, "')")
                    }
                }]), n
            }(rp),
            sp = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r, i) {
                    var a;
                    return _classCallCheck(this, n), (a = t.call(this, e, r)).error = i, a
                }
                return _createClass(n, [{
                    key: "toString",
                    value: function() {
                        return "NavigationError(id: ".concat(this.id, ", url: '").concat(this.url, "', error: ").concat(this.error, ")")
                    }
                }]), n
            }(rp),
            up = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r, i, a) {
                    var o;
                    return _classCallCheck(this, n), (o = t.call(this, e, r)).urlAfterRedirects = i, o.state = a, o
                }
                return _createClass(n, [{
                    key: "toString",
                    value: function() {
                        return "RoutesRecognized(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ")")
                    }
                }]), n
            }(rp),
            lp = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r, i, a) {
                    var o;
                    return _classCallCheck(this, n), (o = t.call(this, e, r)).urlAfterRedirects = i, o.state = a, o
                }
                return _createClass(n, [{
                    key: "toString",
                    value: function() {
                        return "GuardsCheckStart(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ")")
                    }
                }]), n
            }(rp),
            cp = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r, i, a, o) {
                    var s;
                    return _classCallCheck(this, n), (s = t.call(this, e, r)).urlAfterRedirects = i, s.state = a, s.shouldActivate = o, s
                }
                return _createClass(n, [{
                    key: "toString",
                    value: function() {
                        return "GuardsCheckEnd(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ", shouldActivate: ").concat(this.shouldActivate, ")")
                    }
                }]), n
            }(rp),
            hp = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r, i, a) {
                    var o;
                    return _classCallCheck(this, n), (o = t.call(this, e, r)).urlAfterRedirects = i, o.state = a, o
                }
                return _createClass(n, [{
                    key: "toString",
                    value: function() {
                        return "ResolveStart(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ")")
                    }
                }]), n
            }(rp),
            fp = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r, i, a) {
                    var o;
                    return _classCallCheck(this, n), (o = t.call(this, e, r)).urlAfterRedirects = i, o.state = a, o
                }
                return _createClass(n, [{
                    key: "toString",
                    value: function() {
                        return "ResolveEnd(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ")")
                    }
                }]), n
            }(rp),
            dp = function() {
                function e(t) {
                    _classCallCheck(this, e), this.route = t
                }
                return _createClass(e, [{
                    key: "toString",
                    value: function() {
                        return "RouteConfigLoadStart(path: ".concat(this.route.path, ")")
                    }
                }]), e
            }(),
            vp = function() {
                function e(t) {
                    _classCallCheck(this, e), this.route = t
                }
                return _createClass(e, [{
                    key: "toString",
                    value: function() {
                        return "RouteConfigLoadEnd(path: ".concat(this.route.path, ")")
                    }
                }]), e
            }(),
            pp = function() {
                function e(t) {
                    _classCallCheck(this, e), this.snapshot = t
                }
                return _createClass(e, [{
                    key: "toString",
                    value: function() {
                        return "ChildActivationStart(path: '".concat(this.snapshot.routeConfig && this.snapshot.routeConfig.path || "", "')")
                    }
                }]), e
            }(),
            yp = function() {
                function e(t) {
                    _classCallCheck(this, e), this.snapshot = t
                }
                return _createClass(e, [{
                    key: "toString",
                    value: function() {
                        return "ChildActivationEnd(path: '".concat(this.snapshot.routeConfig && this.snapshot.routeConfig.path || "", "')")
                    }
                }]), e
            }(),
            mp = function() {
                function e(t) {
                    _classCallCheck(this, e), this.snapshot = t
                }
                return _createClass(e, [{
                    key: "toString",
                    value: function() {
                        return "ActivationStart(path: '".concat(this.snapshot.routeConfig && this.snapshot.routeConfig.path || "", "')")
                    }
                }]), e
            }(),
            gp = function() {
                function e(t) {
                    _classCallCheck(this, e), this.snapshot = t
                }
                return _createClass(e, [{
                    key: "toString",
                    value: function() {
                        return "ActivationEnd(path: '".concat(this.snapshot.routeConfig && this.snapshot.routeConfig.path || "", "')")
                    }
                }]), e
            }(),
            _p = function() {
                function e(t, n, r) {
                    _classCallCheck(this, e), this.routerEvent = t, this.position = n, this.anchor = r
                }
                return _createClass(e, [{
                    key: "toString",
                    value: function() {
                        return "Scroll(anchor: '".concat(this.anchor, "', position: '").concat(this.position ? "".concat(this.position[0], ", ").concat(this.position[1]) : null, "')")
                    }
                }]), e
            }(),
            kp = ((ep = function e() {
                _classCallCheck(this, e)
            }).\u0275fac = function(e) {
                return new(e || ep)
            }, ep.\u0275cmp = ft({
                type: ep,
                selectors: [
                    ["ng-component"]
                ],
                decls: 1,
                vars: 0,
                template: function(e, t) {
                    1 & e && ba(0, "router-outlet")
                },
                directives: function() {
                    return [Sm]
                },
                encapsulation: 2
            }), ep),
            bp = function() {
                function e(t) {
                    _classCallCheck(this, e), this.params = t || {}
                }
                return _createClass(e, [{
                    key: "has",
                    value: function(e) {
                        return this.params.hasOwnProperty(e)
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        if (this.has(e)) {
                            var t = this.params[e];
                            return Array.isArray(t) ? t[0] : t
                        }
                        return null
                    }
                }, {
                    key: "getAll",
                    value: function(e) {
                        if (this.has(e)) {
                            var t = this.params[e];
                            return Array.isArray(t) ? t : [t]
                        }
                        return []
                    }
                }, {
                    key: "keys",
                    get: function() {
                        return Object.keys(this.params)
                    }
                }]), e
            }();

        function Cp(e) {
            return new bp(e)
        }

        function wp(e) {
            var t = Error("NavigationCancelingError: " + e);
            return t.ngNavigationCancelingError = !0, t
        }

        function Sp(e, t, n) {
            var r = n.path.split("/");
            if (r.length > e.length) return null;
            if ("full" === n.pathMatch && (t.hasChildren() || r.length < e.length)) return null;
            for (var i = {}, a = 0; a < r.length; a++) {
                var o = r[a],
                    s = e[a];
                if (o.startsWith(":")) i[o.substring(1)] = s;
                else if (o !== s.path) return null
            }
            return {
                consumed: e.slice(0, r.length),
                posParams: i
            }
        }
        var Ep = function e(t, n) {
            _classCallCheck(this, e), this.routes = t, this.module = n
        };

        function Tp(e) {
            for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = 0; n < e.length; n++) {
                var r = e[n];
                xp(r, Ap(t, r))
            }
        }

        function xp(e, t) {
            if (!e) throw new Error("\n      Invalid configuration of route '".concat(t, "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    "));
            if (Array.isArray(e)) throw new Error("Invalid configuration of route '".concat(t, "': Array cannot be specified"));
            if (!e.component && !e.children && !e.loadChildren && e.outlet && "primary" !== e.outlet) throw new Error("Invalid configuration of route '".concat(t, "': a componentless route without children or loadChildren cannot have a named outlet set"));
            if (e.redirectTo && e.children) throw new Error("Invalid configuration of route '".concat(t, "': redirectTo and children cannot be used together"));
            if (e.redirectTo && e.loadChildren) throw new Error("Invalid configuration of route '".concat(t, "': redirectTo and loadChildren cannot be used together"));
            if (e.children && e.loadChildren) throw new Error("Invalid configuration of route '".concat(t, "': children and loadChildren cannot be used together"));
            if (e.redirectTo && e.component) throw new Error("Invalid configuration of route '".concat(t, "': redirectTo and component cannot be used together"));
            if (e.path && e.matcher) throw new Error("Invalid configuration of route '".concat(t, "': path and matcher cannot be used together"));
            if (void 0 === e.redirectTo && !e.component && !e.children && !e.loadChildren) throw new Error("Invalid configuration of route '".concat(t, "'. One of the following must be provided: component, redirectTo, children or loadChildren"));
            if (void 0 === e.path && void 0 === e.matcher) throw new Error("Invalid configuration of route '".concat(t, "': routes must have either a path or a matcher specified"));
            if ("string" == typeof e.path && "/" === e.path.charAt(0)) throw new Error("Invalid configuration of route '".concat(t, "': path cannot start with a slash"));
            if ("" === e.path && void 0 !== e.redirectTo && void 0 === e.pathMatch) throw new Error("Invalid configuration of route '{path: \"".concat(t, '", redirectTo: "').concat(e.redirectTo, "\"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'."));
            if (void 0 !== e.pathMatch && "full" !== e.pathMatch && "prefix" !== e.pathMatch) throw new Error("Invalid configuration of route '".concat(t, "': pathMatch can only be set to 'prefix' or 'full'"));
            e.children && Tp(e.children, t)
        }

        function Ap(e, t) {
            return t ? e || t.path ? e && !t.path ? "".concat(e, "/") : !e && t.path ? t.path : "".concat(e, "/").concat(t.path) : "" : e
        }

        function Op(e) {
            var t = e.children && e.children.map(Op),
                n = t ? Object.assign(Object.assign({}, e), {
                    children: t
                }) : Object.assign({}, e);
            return !n.component && (t || n.loadChildren) && n.outlet && "primary" !== n.outlet && (n.component = kp), n
        }

        function Ip(e, t) {
            var n, r = Object.keys(e),
                i = Object.keys(t);
            if (!r || !i || r.length != i.length) return !1;
            for (var a = 0; a < r.length; a++)
                if (!Rp(e[n = r[a]], t[n])) return !1;
            return !0
        }

        function Rp(e, t) {
            return Array.isArray(e) && Array.isArray(t) ? e.length == t.length && e.every((function(e) {
                return t.indexOf(e) > -1
            })) : e === t
        }

        function Pp(e) {
            return Array.prototype.concat.apply([], e)
        }

        function Np(e) {
            return e.length > 0 ? e[e.length - 1] : null
        }

        function Dp(e, t) {
            for (var n in e) e.hasOwnProperty(n) && t(e[n], n)
        }

        function jp(e) {
            return wa(e) ? e : Ca(e) ? B(Promise.resolve(e)) : ef(e)
        }

        function Fp(e, t, n) {
            return n ? function(e, t) {
                return Ip(e, t)
            }(e.queryParams, t.queryParams) && function e(t, n) {
                if (!Hp(t.segments, n.segments)) return !1;
                if (t.numberOfChildren !== n.numberOfChildren) return !1;
                for (var r in n.children) {
                    if (!t.children[r]) return !1;
                    if (!e(t.children[r], n.children[r])) return !1
                }
                return !0
            }(e.root, t.root) : function(e, t) {
                return Object.keys(t).length <= Object.keys(e).length && Object.keys(t).every((function(n) {
                    return Rp(e[n], t[n])
                }))
            }(e.queryParams, t.queryParams) && function e(t, n) {
                return function t(n, r, i) {
                    if (n.segments.length > i.length) return !!Hp(n.segments.slice(0, i.length), i) && !r.hasChildren();
                    if (n.segments.length === i.length) {
                        if (!Hp(n.segments, i)) return !1;
                        for (var a in r.children) {
                            if (!n.children[a]) return !1;
                            if (!e(n.children[a], r.children[a])) return !1
                        }
                        return !0
                    }
                    var o = i.slice(0, n.segments.length),
                        s = i.slice(n.segments.length);
                    return !!Hp(n.segments, o) && !!n.children.primary && t(n.children.primary, r, s)
                }(t, n, n.segments)
            }(e.root, t.root)
        }
        var Mp = function() {
                function e(t, n, r) {
                    _classCallCheck(this, e), this.root = t, this.queryParams = n, this.fragment = r
                }
                return _createClass(e, [{
                    key: "queryParamMap",
                    get: function() {
                        return this._queryParamMap || (this._queryParamMap = Cp(this.queryParams)), this._queryParamMap
                    }
                }, {
                    key: "toString",
                    value: function() {
                        return qp.serialize(this)
                    }
                }]), e
            }(),
            Lp = function() {
                function e(t, n) {
                    var r = this;
                    _classCallCheck(this, e), this.segments = t, this.children = n, this.parent = null, Dp(n, (function(e, t) {
                        return e.parent = r
                    }))
                }
                return _createClass(e, [{
                    key: "hasChildren",
                    value: function() {
                        return this.numberOfChildren > 0
                    }
                }, {
                    key: "numberOfChildren",
                    get: function() {
                        return Object.keys(this.children).length
                    }
                }, {
                    key: "toString",
                    value: function() {
                        return Qp(this)
                    }
                }]), e
            }(),
            Up = function() {
                function e(t, n) {
                    _classCallCheck(this, e), this.path = t, this.parameters = n
                }
                return _createClass(e, [{
                    key: "parameterMap",
                    get: function() {
                        return this._parameterMap || (this._parameterMap = Cp(this.parameters)), this._parameterMap
                    }
                }, {
                    key: "toString",
                    value: function() {
                        return $p(this)
                    }
                }]), e
            }();

        function Hp(e, t) {
            return e.length === t.length && e.every((function(e, n) {
                return e.path === t[n].path
            }))
        }

        function Vp(e, t) {
            var n = [];
            return Dp(e.children, (function(e, r) {
                "primary" === r && (n = n.concat(t(e, r)))
            })), Dp(e.children, (function(e, r) {
                "primary" !== r && (n = n.concat(t(e, r)))
            })), n
        }
        var zp = function e() {
                _classCallCheck(this, e)
            },
            Bp = function() {
                function e() {
                    _classCallCheck(this, e)
                }
                return _createClass(e, [{
                    key: "parse",
                    value: function(e) {
                        var t = new ny(e);
                        return new Mp(t.parseRootSegment(), t.parseQueryParams(), t.parseFragment())
                    }
                }, {
                    key: "serialize",
                    value: function(e) {
                        var t, n, r;
                        return "".concat("/".concat(function e(t, n) {
                            if (!t.hasChildren()) return Qp(t);
                            if (n) {
                                var r = t.children.primary ? e(t.children.primary, !1) : "",
                                    i = [];
                                return Dp(t.children, (function(t, n) {
                                    "primary" !== n && i.push("".concat(n, ":").concat(e(t, !1)))
                                })), i.length > 0 ? "".concat(r, "(").concat(i.join("//"), ")") : r
                            }
                            var a = Vp(t, (function(n, r) {
                                return "primary" === r ? [e(t.children.primary, !1)] : ["".concat(r, ":").concat(e(n, !1))]
                            }));
                            return "".concat(Qp(t), "/(").concat(a.join("//"), ")")
                        }(e.root, !0)), (n = e.queryParams, r = Object.keys(n).map((function(e) {
                            var t = n[e];
                            return Array.isArray(t) ? t.map((function(t) {
                                return "".concat(Kp(e), "=").concat(Kp(t))
                            })).join("&") : "".concat(Kp(e), "=").concat(Kp(t))
                        })), r.length ? "?".concat(r.join("&")) : "")).concat("string" == typeof e.fragment ? "#".concat((t = e.fragment, encodeURI(t))) : "")
                    }
                }]), e
            }(),
            qp = new Bp;

        function Qp(e) {
            return e.segments.map((function(e) {
                return $p(e)
            })).join("/")
        }

        function Wp(e) {
            return encodeURIComponent(e).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
        }

        function Kp(e) {
            return Wp(e).replace(/%3B/gi, ";")
        }

        function Zp(e) {
            return Wp(e).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
        }

        function Gp(e) {
            return decodeURIComponent(e)
        }

        function Jp(e) {
            return Gp(e.replace(/\+/g, "%20"))
        }

        function $p(e) {
            return "".concat(Zp(e.path)).concat((t = e.parameters, Object.keys(t).map((function(e) {
                return ";".concat(Zp(e), "=").concat(Zp(t[e]))
            })).join("")));
            var t
        }
        var Xp = /^[^\/()?;=#]+/;

        function Yp(e) {
            var t = e.match(Xp);
            return t ? t[0] : ""
        }
        var ey = /^[^=?&#]+/,
            ty = /^[^?&#]+/,
            ny = function() {
                function e(t) {
                    _classCallCheck(this, e), this.url = t, this.remaining = t
                }
                return _createClass(e, [{
                    key: "parseRootSegment",
                    value: function() {
                        return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new Lp([], {}) : new Lp([], this.parseChildren())
                    }
                }, {
                    key: "parseQueryParams",
                    value: function() {
                        var e = {};
                        if (this.consumeOptional("?"))
                            do {
                                this.parseQueryParam(e)
                            } while (this.consumeOptional("&"));
                        return e
                    }
                }, {
                    key: "parseFragment",
                    value: function() {
                        return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
                    }
                }, {
                    key: "parseChildren",
                    value: function() {
                        if ("" === this.remaining) return {};
                        this.consumeOptional("/");
                        var e = [];
                        for (this.peekStartsWith("(") || e.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), e.push(this.parseSegment());
                        var t = {};
                        this.peekStartsWith("/(") && (this.capture("/"), t = this.parseParens(!0));
                        var n = {};
                        return this.peekStartsWith("(") && (n = this.parseParens(!1)), (e.length > 0 || Object.keys(t).length > 0) && (n.primary = new Lp(e, t)), n
                    }
                }, {
                    key: "parseSegment",
                    value: function() {
                        var e = Yp(this.remaining);
                        if ("" === e && this.peekStartsWith(";")) throw new Error("Empty path url segment cannot have parameters: '".concat(this.remaining, "'."));
                        return this.capture(e), new Up(Gp(e), this.parseMatrixParams())
                    }
                }, {
                    key: "parseMatrixParams",
                    value: function() {
                        for (var e = {}; this.consumeOptional(";");) this.parseParam(e);
                        return e
                    }
                }, {
                    key: "parseParam",
                    value: function(e) {
                        var t = Yp(this.remaining);
                        if (t) {
                            this.capture(t);
                            var n = "";
                            if (this.consumeOptional("=")) {
                                var r = Yp(this.remaining);
                                r && (n = r, this.capture(n))
                            }
                            e[Gp(t)] = Gp(n)
                        }
                    }
                }, {
                    key: "parseQueryParam",
                    value: function(e) {
                        var t = function(e) {
                            var t = e.match(ey);
                            return t ? t[0] : ""
                        }(this.remaining);
                        if (t) {
                            this.capture(t);
                            var n = "";
                            if (this.consumeOptional("=")) {
                                var r = function(e) {
                                    var t = e.match(ty);
                                    return t ? t[0] : ""
                                }(this.remaining);
                                r && (n = r, this.capture(n))
                            }
                            var i = Jp(t),
                                a = Jp(n);
                            if (e.hasOwnProperty(i)) {
                                var o = e[i];
                                Array.isArray(o) || (o = [o], e[i] = o), o.push(a)
                            } else e[i] = a
                        }
                    }
                }, {
                    key: "parseParens",
                    value: function(e) {
                        var t = {};
                        for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
                            var n = Yp(this.remaining),
                                r = this.remaining[n.length];
                            if ("/" !== r && ")" !== r && ";" !== r) throw new Error("Cannot parse url '".concat(this.url, "'"));
                            var i = void 0;
                            n.indexOf(":") > -1 ? (i = n.substr(0, n.indexOf(":")), this.capture(i), this.capture(":")) : e && (i = "primary");
                            var a = this.parseChildren();
                            t[i] = 1 === Object.keys(a).length ? a.primary : new Lp([], a), this.consumeOptional("//")
                        }
                        return t
                    }
                }, {
                    key: "peekStartsWith",
                    value: function(e) {
                        return this.remaining.startsWith(e)
                    }
                }, {
                    key: "consumeOptional",
                    value: function(e) {
                        return !!this.peekStartsWith(e) && (this.remaining = this.remaining.substring(e.length), !0)
                    }
                }, {
                    key: "capture",
                    value: function(e) {
                        if (!this.consumeOptional(e)) throw new Error('Expected "'.concat(e, '".'))
                    }
                }]), e
            }(),
            ry = function() {
                function e(t) {
                    _classCallCheck(this, e), this._root = t
                }
                return _createClass(e, [{
                    key: "root",
                    get: function() {
                        return this._root.value
                    }
                }, {
                    key: "parent",
                    value: function(e) {
                        var t = this.pathFromRoot(e);
                        return t.length > 1 ? t[t.length - 2] : null
                    }
                }, {
                    key: "children",
                    value: function(e) {
                        var t = iy(e, this._root);
                        return t ? t.children.map((function(e) {
                            return e.value
                        })) : []
                    }
                }, {
                    key: "firstChild",
                    value: function(e) {
                        var t = iy(e, this._root);
                        return t && t.children.length > 0 ? t.children[0].value : null
                    }
                }, {
                    key: "siblings",
                    value: function(e) {
                        var t = ay(e, this._root);
                        return t.length < 2 ? [] : t[t.length - 2].children.map((function(e) {
                            return e.value
                        })).filter((function(t) {
                            return t !== e
                        }))
                    }
                }, {
                    key: "pathFromRoot",
                    value: function(e) {
                        return ay(e, this._root).map((function(e) {
                            return e.value
                        }))
                    }
                }]), e
            }();

        function iy(e, t) {
            if (e === t.value) return t;
            var n, r = _createForOfIteratorHelper(t.children);
            try {
                for (r.s(); !(n = r.n()).done;) {
                    var i = iy(e, n.value);
                    if (i) return i
                }
            } catch (a) {
                r.e(a)
            } finally {
                r.f()
            }
            return null
        }

        function ay(e, t) {
            if (e === t.value) return [t];
            var n, r = _createForOfIteratorHelper(t.children);
            try {
                for (r.s(); !(n = r.n()).done;) {
                    var i = ay(e, n.value);
                    if (i.length) return i.unshift(t), i
                }
            } catch (a) {
                r.e(a)
            } finally {
                r.f()
            }
            return []
        }
        var oy = function() {
            function e(t, n) {
                _classCallCheck(this, e), this.value = t, this.children = n
            }
            return _createClass(e, [{
                key: "toString",
                value: function() {
                    return "TreeNode(".concat(this.value, ")")
                }
            }]), e
        }();

        function sy(e) {
            var t = {};
            return e && e.children.forEach((function(e) {
                return t[e.value.outlet] = e
            })), t
        }
        var uy = function(e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r) {
                var i;
                return _classCallCheck(this, n), (i = t.call(this, e)).snapshot = r, vy(_assertThisInitialized(i), e), i
            }
            return _createClass(n, [{
                key: "toString",
                value: function() {
                    return this.snapshot.toString()
                }
            }]), n
        }(ry);

        function ly(e, t) {
            var n = function(e, t) {
                    var n = new fy([], {}, {}, "", {}, "primary", t, null, e.root, -1, {});
                    return new dy("", new oy(n, []))
                }(e, t),
                r = new Iv([new Up("", {})]),
                i = new Iv({}),
                a = new Iv({}),
                o = new Iv({}),
                s = new Iv(""),
                u = new cy(r, i, o, s, a, "primary", t, n.root);
            return u.snapshot = n.root, new uy(new oy(u, []), n)
        }
        var cy = function() {
            function e(t, n, r, i, a, o, s, u) {
                _classCallCheck(this, e), this.url = t, this.params = n, this.queryParams = r, this.fragment = i, this.data = a, this.outlet = o, this.component = s, this._futureSnapshot = u
            }
            return _createClass(e, [{
                key: "routeConfig",
                get: function() {
                    return this._futureSnapshot.routeConfig
                }
            }, {
                key: "root",
                get: function() {
                    return this._routerState.root
                }
            }, {
                key: "parent",
                get: function() {
                    return this._routerState.parent(this)
                }
            }, {
                key: "firstChild",
                get: function() {
                    return this._routerState.firstChild(this)
                }
            }, {
                key: "children",
                get: function() {
                    return this._routerState.children(this)
                }
            }, {
                key: "pathFromRoot",
                get: function() {
                    return this._routerState.pathFromRoot(this)
                }
            }, {
                key: "paramMap",
                get: function() {
                    return this._paramMap || (this._paramMap = this.params.pipe(U((function(e) {
                        return Cp(e)
                    })))), this._paramMap
                }
            }, {
                key: "queryParamMap",
                get: function() {
                    return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(U((function(e) {
                        return Cp(e)
                    })))), this._queryParamMap
                }
            }, {
                key: "toString",
                value: function() {
                    return this.snapshot ? this.snapshot.toString() : "Future(".concat(this._futureSnapshot, ")")
                }
            }]), e
        }();

        function hy(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "emptyOnly",
                n = e.pathFromRoot,
                r = 0;
            if ("always" !== t)
                for (r = n.length - 1; r >= 1;) {
                    var i = n[r],
                        a = n[r - 1];
                    if (i.routeConfig && "" === i.routeConfig.path) r--;
                    else {
                        if (a.component) break;
                        r--
                    }
                }
            return function(e) {
                return e.reduce((function(e, t) {
                    return {
                        params: Object.assign(Object.assign({}, e.params), t.params),
                        data: Object.assign(Object.assign({}, e.data), t.data),
                        resolve: Object.assign(Object.assign({}, e.resolve), t._resolvedData)
                    }
                }), {
                    params: {},
                    data: {},
                    resolve: {}
                })
            }(n.slice(r))
        }
        var fy = function() {
                function e(t, n, r, i, a, o, s, u, l, c, h) {
                    _classCallCheck(this, e), this.url = t, this.params = n, this.queryParams = r, this.fragment = i, this.data = a, this.outlet = o, this.component = s, this.routeConfig = u, this._urlSegment = l, this._lastPathIndex = c, this._resolve = h
                }
                return _createClass(e, [{
                    key: "root",
                    get: function() {
                        return this._routerState.root
                    }
                }, {
                    key: "parent",
                    get: function() {
                        return this._routerState.parent(this)
                    }
                }, {
                    key: "firstChild",
                    get: function() {
                        return this._routerState.firstChild(this)
                    }
                }, {
                    key: "children",
                    get: function() {
                        return this._routerState.children(this)
                    }
                }, {
                    key: "pathFromRoot",
                    get: function() {
                        return this._routerState.pathFromRoot(this)
                    }
                }, {
                    key: "paramMap",
                    get: function() {
                        return this._paramMap || (this._paramMap = Cp(this.params)), this._paramMap
                    }
                }, {
                    key: "queryParamMap",
                    get: function() {
                        return this._queryParamMap || (this._queryParamMap = Cp(this.queryParams)), this._queryParamMap
                    }
                }, {
                    key: "toString",
                    value: function() {
                        return "Route(url:'".concat(this.url.map((function(e) {
                            return e.toString()
                        })).join("/"), "', path:'").concat(this.routeConfig ? this.routeConfig.path : "", "')")
                    }
                }]), e
            }(),
            dy = function(e) {
                _inherits(n, e);
                var t = _createSuper(n);

                function n(e, r) {
                    var i;
                    return _classCallCheck(this, n), (i = t.call(this, r)).url = e, vy(_assertThisInitialized(i), r), i
                }
                return _createClass(n, [{
                    key: "toString",
                    value: function() {
                        return py(this._root)
                    }
                }]), n
            }(ry);

        function vy(e, t) {
            t.value._routerState = e, t.children.forEach((function(t) {
                return vy(e, t)
            }))
        }

        function py(e) {
            var t = e.children.length > 0 ? " { ".concat(e.children.map(py).join(", "), " } ") : "";
            return "".concat(e.value).concat(t)
        }

        function yy(e) {
            if (e.snapshot) {
                var t = e.snapshot,
                    n = e._futureSnapshot;
                e.snapshot = n, Ip(t.queryParams, n.queryParams) || e.queryParams.next(n.queryParams), t.fragment !== n.fragment && e.fragment.next(n.fragment), Ip(t.params, n.params) || e.params.next(n.params),
                    function(e, t) {
                        if (e.length !== t.length) return !1;
                        for (var n = 0; n < e.length; ++n)
                            if (!Ip(e[n], t[n])) return !1;
                        return !0
                    }(t.url, n.url) || e.url.next(n.url), Ip(t.data, n.data) || e.data.next(n.data)
            } else e.snapshot = e._futureSnapshot, e.data.next(e._futureSnapshot.data)
        }

        function my(e, t) {
            var n, r;
            return Ip(e.params, t.params) && Hp(n = e.url, r = t.url) && n.every((function(e, t) {
                return Ip(e.parameters, r[t].parameters)
            })) && !(!e.parent != !t.parent) && (!e.parent || my(e.parent, t.parent))
        }

        function gy(e) {
            return "object" == typeof e && null != e && !e.outlets && !e.segmentPath
        }

        function _y(e, t, n, r, i) {
            var a = {};
            return r && Dp(r, (function(e, t) {
                a[t] = Array.isArray(e) ? e.map((function(e) {
                    return "".concat(e)
                })) : "".concat(e)
            })), new Mp(n.root === e ? t : function e(t, n, r) {
                var i = {};
                return Dp(t.children, (function(t, a) {
                    i[a] = t === n ? r : e(t, n, r)
                })), new Lp(t.segments, i)
            }(n.root, e, t), a, i)
        }
        var ky = function() {
                function e(t, n, r) {
                    if (_classCallCheck(this, e), this.isAbsolute = t, this.numberOfDoubleDots = n, this.commands = r, t && r.length > 0 && gy(r[0])) throw new Error("Root segment cannot have matrix parameters");
                    var i = r.find((function(e) {
                        return "object" == typeof e && null != e && e.outlets
                    }));
                    if (i && i !== Np(r)) throw new Error("{outlets:{}} has to be the last command")
                }
                return _createClass(e, [{
                    key: "toRoot",
                    value: function() {
                        return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0]
                    }
                }]), e
            }(),
            by = function e(t, n, r) {
                _classCallCheck(this, e), this.segmentGroup = t, this.processChildren = n, this.index = r
            };

        function Cy(e) {
            return "object" == typeof e && null != e && e.outlets ? e.outlets.primary : "".concat(e)
        }

        function wy(e, t, n) {
            if (e || (e = new Lp([], {})), 0 === e.segments.length && e.hasChildren()) return Sy(e, t, n);
            var r = function(e, t, n) {
                    for (var r = 0, i = t, a = {
                            match: !1,
                            pathIndex: 0,
                            commandIndex: 0
                        }; i < e.segments.length;) {
                        if (r >= n.length) return a;
                        var o = e.segments[i],
                            s = Cy(n[r]),
                            u = r < n.length - 1 ? n[r + 1] : null;
                        if (i > 0 && void 0 === s) break;
                        if (s && u && "object" == typeof u && void 0 === u.outlets) {
                            if (!Ay(s, u, o)) return a;
                            r += 2
                        } else {
                            if (!Ay(s, {}, o)) return a;
                            r++
                        }
                        i++
                    }
                    return {
                        match: !0,
                        pathIndex: i,
                        commandIndex: r
                    }
                }(e, t, n),
                i = n.slice(r.commandIndex);
            if (r.match && r.pathIndex < e.segments.length) {
                var a = new Lp(e.segments.slice(0, r.pathIndex), {});
                return a.children.primary = new Lp(e.segments.slice(r.pathIndex), e.children), Sy(a, 0, i)
            }
            return r.match && 0 === i.length ? new Lp(e.segments, {}) : r.match && !e.hasChildren() ? Ey(e, t, n) : r.match ? Sy(e, 0, i) : Ey(e, t, n)
        }

        function Sy(e, t, n) {
            if (0 === n.length) return new Lp(e.segments, {});
            var r = function(e) {
                    return "object" != typeof e[0] ? {
                        primary: e
                    } : void 0 === e[0].outlets ? {
                        primary: e
                    } : e[0].outlets
                }(n),
                i = {};
            return Dp(r, (function(n, r) {
                null !== n && (i[r] = wy(e.children[r], t, n))
            })), Dp(e.children, (function(e, t) {
                void 0 === r[t] && (i[t] = e)
            })), new Lp(e.segments, i)
        }

        function Ey(e, t, n) {
            for (var r = e.segments.slice(0, t), i = 0; i < n.length;) {
                if ("object" == typeof n[i] && void 0 !== n[i].outlets) {
                    var a = Ty(n[i].outlets);
                    return new Lp(r, a)
                }
                if (0 === i && gy(n[0])) r.push(new Up(e.segments[t].path, n[0])), i++;
                else {
                    var o = Cy(n[i]),
                        s = i < n.length - 1 ? n[i + 1] : null;
                    o && s && gy(s) ? (r.push(new Up(o, xy(s))), i += 2) : (r.push(new Up(o, {})), i++)
                }
            }
            return new Lp(r, {})
        }

        function Ty(e) {
            var t = {};
            return Dp(e, (function(e, n) {
                null !== e && (t[n] = Ey(new Lp([], {}), 0, e))
            })), t
        }

        function xy(e) {
            var t = {};
            return Dp(e, (function(e, n) {
                return t[n] = "".concat(e)
            })), t
        }

        function Ay(e, t, n) {
            return e == n.path && Ip(t, n.parameters)
        }
        var Oy = function() {
            function e(t, n, r, i) {
                _classCallCheck(this, e), this.routeReuseStrategy = t, this.futureState = n, this.currState = r, this.forwardEvent = i
            }
            return _createClass(e, [{
                key: "activate",
                value: function(e) {
                    var t = this.futureState._root,
                        n = this.currState ? this.currState._root : null;
                    this.deactivateChildRoutes(t, n, e), yy(this.futureState.root), this.activateChildRoutes(t, n, e)
                }
            }, {
                key: "deactivateChildRoutes",
                value: function(e, t, n) {
                    var r = this,
                        i = sy(t);
                    e.children.forEach((function(e) {
                        var t = e.value.outlet;
                        r.deactivateRoutes(e, i[t], n), delete i[t]
                    })), Dp(i, (function(e, t) {
                        r.deactivateRouteAndItsChildren(e, n)
                    }))
                }
            }, {
                key: "deactivateRoutes",
                value: function(e, t, n) {
                    var r = e.value,
                        i = t ? t.value : null;
                    if (r === i)
                        if (r.component) {
                            var a = n.getContext(r.outlet);
                            a && this.deactivateChildRoutes(e, t, a.children)
                        } else this.deactivateChildRoutes(e, t, n);
                    else i && this.deactivateRouteAndItsChildren(t, n)
                }
            }, {
                key: "deactivateRouteAndItsChildren",
                value: function(e, t) {
                    this.routeReuseStrategy.shouldDetach(e.value.snapshot) ? this.detachAndStoreRouteSubtree(e, t) : this.deactivateRouteAndOutlet(e, t)
                }
            }, {
                key: "detachAndStoreRouteSubtree",
                value: function(e, t) {
                    var n = t.getContext(e.value.outlet);
                    if (n && n.outlet) {
                        var r = n.outlet.detach(),
                            i = n.children.onOutletDeactivated();
                        this.routeReuseStrategy.store(e.value.snapshot, {
                            componentRef: r,
                            route: e,
                            contexts: i
                        })
                    }
                }
            }, {
                key: "deactivateRouteAndOutlet",
                value: function(e, t) {
                    var n = this,
                        r = t.getContext(e.value.outlet);
                    if (r) {
                        var i = sy(e),
                            a = e.value.component ? r.children : t;
                        Dp(i, (function(e, t) {
                            return n.deactivateRouteAndItsChildren(e, a)
                        })), r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated())
                    }
                }
            }, {
                key: "activateChildRoutes",
                value: function(e, t, n) {
                    var r = this,
                        i = sy(t);
                    e.children.forEach((function(e) {
                        r.activateRoutes(e, i[e.value.outlet], n), r.forwardEvent(new gp(e.value.snapshot))
                    })), e.children.length && this.forwardEvent(new yp(e.value.snapshot))
                }
            }, {
                key: "activateRoutes",
                value: function(e, t, n) {
                    var r = e.value,
                        i = t ? t.value : null;
                    if (yy(r), r === i)
                        if (r.component) {
                            var a = n.getOrCreateContext(r.outlet);
                            this.activateChildRoutes(e, t, a.children)
                        } else this.activateChildRoutes(e, t, n);
                    else if (r.component) {
                        var o = n.getOrCreateContext(r.outlet);
                        if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
                            var s = this.routeReuseStrategy.retrieve(r.snapshot);
                            this.routeReuseStrategy.store(r.snapshot, null), o.children.onOutletReAttached(s.contexts), o.attachRef = s.componentRef, o.route = s.route.value, o.outlet && o.outlet.attach(s.componentRef, s.route.value), Iy(s.route)
                        } else {
                            var u = function(e) {
                                    for (var t = e.parent; t; t = t.parent) {
                                        var n = t.routeConfig;
                                        if (n && n._loadedConfig) return n._loadedConfig;
                                        if (n && n.component) return null
                                    }
                                    return null
                                }(r.snapshot),
                                l = u ? u.module.componentFactoryResolver : null;
                            o.attachRef = null, o.route = r, o.resolver = l, o.outlet && o.outlet.activateWith(r, l), this.activateChildRoutes(e, null, o.children)
                        }
                    } else this.activateChildRoutes(e, null, n)
                }
            }]), e
        }();

        function Iy(e) {
            yy(e.value), e.children.forEach(Iy)
        }

        function Ry(e) {
            return "function" == typeof e
        }

        function Py(e) {
            return e instanceof Mp
        }
        var Ny = function e(t) {
                _classCallCheck(this, e), this.segmentGroup = t || null
            },
            Dy = function e(t) {
                _classCallCheck(this, e), this.urlTree = t
            };

        function jy(e) {
            return new C((function(t) {
                return t.error(new Ny(e))
            }))
        }

        function Fy(e) {
            return new C((function(t) {
                return t.error(new Dy(e))
            }))
        }

        function My(e) {
            return new C((function(t) {
                return t.error(new Error("Only absolute redirects can have named outlets. redirectTo: '".concat(e, "'")))
            }))
        }
        var Ly = function() {
            function e(t, n, r, i, a) {
                _classCallCheck(this, e), this.configLoader = n, this.urlSerializer = r, this.urlTree = i, this.config = a, this.allowRedirects = !0, this.ngModule = t.get(Ye)
            }
            return _createClass(e, [{
                key: "apply",
                value: function() {
                    var e = this;
                    return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, "primary").pipe(U((function(t) {
                        return e.createUrlTree(t, e.urlTree.queryParams, e.urlTree.fragment)
                    }))).pipe(Rd((function(t) {
                        if (t instanceof Dy) return e.allowRedirects = !1, e.match(t.urlTree);
                        if (t instanceof Ny) throw e.noMatchError(t);
                        throw t
                    })))
                }
            }, {
                key: "match",
                value: function(e) {
                    var t = this;
                    return this.expandSegmentGroup(this.ngModule, this.config, e.root, "primary").pipe(U((function(n) {
                        return t.createUrlTree(n, e.queryParams, e.fragment)
                    }))).pipe(Rd((function(e) {
                        if (e instanceof Ny) throw t.noMatchError(e);
                        throw e
                    })))
                }
            }, {
                key: "noMatchError",
                value: function(e) {
                    return new Error("Cannot match any routes. URL Segment: '".concat(e.segmentGroup, "'"))
                }
            }, {
                key: "createUrlTree",
                value: function(e, t, n) {
                    var r = e.segments.length > 0 ? new Lp([], {
                        primary: e
                    }) : e;
                    return new Mp(r, t, n)
                }
            }, {
                key: "expandSegmentGroup",
                value: function(e, t, n, r) {
                    return 0 === n.segments.length && n.hasChildren() ? this.expandChildren(e, t, n).pipe(U((function(e) {
                        return new Lp([], e)
                    }))) : this.expandSegment(e, n, t, n.segments, r, !0)
                }
            }, {
                key: "expandChildren",
                value: function(e, t, n) {
                    var r = this;
                    return function(n, i) {
                        if (0 === Object.keys(n).length) return ef({});
                        var a = [],
                            o = [],
                            s = {};
                        return Dp(n, (function(n, i) {
                            var u, l, c = (u = i, l = n, r.expandSegmentGroup(e, t, l, u)).pipe(U((function(e) {
                                return s[i] = e
                            })));
                            "primary" === i ? a.push(c) : o.push(c)
                        })), ef.apply(null, a.concat(o)).pipe(Ff(), Wv(), U((function() {
                            return s
                        })))
                    }(n.children)
                }
            }, {
                key: "expandSegment",
                value: function(e, t, n, r, i, a) {
                    var o = this;
                    return ef.apply(void 0, _toConsumableArray(n)).pipe(U((function(s) {
                        return o.expandSegmentAgainstRoute(e, t, n, s, r, i, a).pipe(Rd((function(e) {
                            if (e instanceof Ny) return ef(null);
                            throw e
                        })))
                    })), Ff(), Kv((function(e) {
                        return !!e
                    })), Rd((function(e, n) {
                        if (e instanceof Rv || "EmptyError" === e.name) {
                            if (o.noLeftoversInUrl(t, r, i)) return ef(new Lp([], {}));
                            throw new Ny(t)
                        }
                        throw e
                    })))
                }
            }, {
                key: "noLeftoversInUrl",
                value: function(e, t, n) {
                    return 0 === t.length && !e.children[n]
                }
            }, {
                key: "expandSegmentAgainstRoute",
                value: function(e, t, n, r, i, a, o) {
                    return zy(r) !== a ? jy(t) : void 0 === r.redirectTo ? this.matchSegmentAgainstRoute(e, t, r, i) : o && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(e, t, n, r, i, a) : jy(t)
                }
            }, {
                key: "expandSegmentAgainstRouteUsingRedirect",
                value: function(e, t, n, r, i, a) {
                    return "**" === r.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(e, n, r, a) : this.expandRegularSegmentAgainstRouteUsingRedirect(e, t, n, r, i, a)
                }
            }, {
                key: "expandWildCardWithParamsAgainstRouteUsingRedirect",
                value: function(e, t, n, r) {
                    var i = this,
                        a = this.applyRedirectCommands([], n.redirectTo, {});
                    return n.redirectTo.startsWith("/") ? Fy(a) : this.lineralizeSegments(n, a).pipe(q((function(n) {
                        var a = new Lp(n, {});
                        return i.expandSegment(e, a, t, n, r, !1)
                    })))
                }
            }, {
                key: "expandRegularSegmentAgainstRouteUsingRedirect",
                value: function(e, t, n, r, i, a) {
                    var o = this,
                        s = Uy(t, r, i),
                        u = s.matched,
                        l = s.consumedSegments,
                        c = s.lastChild,
                        h = s.positionalParamSegments;
                    if (!u) return jy(t);
                    var f = this.applyRedirectCommands(l, r.redirectTo, h);
                    return r.redirectTo.startsWith("/") ? Fy(f) : this.lineralizeSegments(r, f).pipe(q((function(r) {
                        return o.expandSegment(e, t, n, r.concat(i.slice(c)), a, !1)
                    })))
                }
            }, {
                key: "matchSegmentAgainstRoute",
                value: function(e, t, n, r) {
                    var i = this;
                    if ("**" === n.path) return n.loadChildren ? this.configLoader.load(e.injector, n).pipe(U((function(e) {
                        return n._loadedConfig = e, new Lp(r, {})
                    }))) : ef(new Lp(r, {}));
                    var a = Uy(t, n, r),
                        o = a.matched,
                        s = a.consumedSegments,
                        u = a.lastChild;
                    if (!o) return jy(t);
                    var l = r.slice(u);
                    return this.getChildConfig(e, n, r).pipe(q((function(e) {
                        var n = e.module,
                            r = e.routes,
                            a = function(e, t, n, r) {
                                return n.length > 0 && function(e, t, n) {
                                    return n.some((function(n) {
                                        return Vy(e, t, n) && "primary" !== zy(n)
                                    }))
                                }(e, n, r) ? {
                                    segmentGroup: Hy(new Lp(t, function(e, t) {
                                        var n = {};
                                        n.primary = t;
                                        var r, i = _createForOfIteratorHelper(e);
                                        try {
                                            for (i.s(); !(r = i.n()).done;) {
                                                var a = r.value;
                                                "" === a.path && "primary" !== zy(a) && (n[zy(a)] = new Lp([], {}))
                                            }
                                        } catch (o) {
                                            i.e(o)
                                        } finally {
                                            i.f()
                                        }
                                        return n
                                    }(r, new Lp(n, e.children)))),
                                    slicedSegments: []
                                } : 0 === n.length && function(e, t, n) {
                                    return n.some((function(n) {
                                        return Vy(e, t, n)
                                    }))
                                }(e, n, r) ? {
                                    segmentGroup: Hy(new Lp(e.segments, function(e, t, n, r) {
                                        var i, a = {},
                                            o = _createForOfIteratorHelper(n);
                                        try {
                                            for (o.s(); !(i = o.n()).done;) {
                                                var s = i.value;
                                                Vy(e, t, s) && !r[zy(s)] && (a[zy(s)] = new Lp([], {}))
                                            }
                                        } catch (u) {
                                            o.e(u)
                                        } finally {
                                            o.f()
                                        }
                                        return Object.assign(Object.assign({}, r), a)
                                    }(e, n, r, e.children))),
                                    slicedSegments: n
                                } : {
                                    segmentGroup: e,
                                    slicedSegments: n
                                }
                            }(t, s, l, r),
                            o = a.segmentGroup,
                            u = a.slicedSegments;
                        return 0 === u.length && o.hasChildren() ? i.expandChildren(n, r, o).pipe(U((function(e) {
                            return new Lp(s, e)
                        }))) : 0 === r.length && 0 === u.length ? ef(new Lp(s, {})) : i.expandSegment(n, o, r, u, "primary", !0).pipe(U((function(e) {
                            return new Lp(s.concat(e.segments), e.children)
                        })))
                    })))
                }
            }, {
                key: "getChildConfig",
                value: function(e, t, n) {
                    var r = this;
                    return t.children ? ef(new Ep(t.children, e)) : t.loadChildren ? void 0 !== t._loadedConfig ? ef(t._loadedConfig) : function(e, t, n) {
                        var r, i = t.canLoad;
                        return i && 0 !== i.length ? B(i).pipe(U((function(r) {
                            var i, a = e.get(r);
                            if (function(e) {
                                    return e && Ry(e.canLoad)
                                }(a)) i = a.canLoad(t, n);
                            else {
                                if (!Ry(a)) throw new Error("Invalid CanLoad guard");
                                i = a(t, n)
                            }
                            return jp(i)
                        }))).pipe(Ff(), (r = function(e) {
                            return !0 === e
                        }, function(e) {
                            return e.lift(new Zv(r, void 0, e))
                        })) : ef(!0)
                    }(e.injector, t, n).pipe(q((function(n) {
                        return n ? r.configLoader.load(e.injector, t).pipe(U((function(e) {
                            return t._loadedConfig = e, e
                        }))) : function(e) {
                            return new C((function(t) {
                                return t.error(wp("Cannot load children because the guard of the route \"path: '".concat(e.path, "'\" returned false")))
                            }))
                        }(t)
                    }))) : ef(new Ep([], e))
                }
            }, {
                key: "lineralizeSegments",
                value: function(e, t) {
                    for (var n = [], r = t.root;;) {
                        if (n = n.concat(r.segments), 0 === r.numberOfChildren) return ef(n);
                        if (r.numberOfChildren > 1 || !r.children.primary) return My(e.redirectTo);
                        r = r.children.primary
                    }
                }
            }, {
                key: "applyRedirectCommands",
                value: function(e, t, n) {
                    return this.applyRedirectCreatreUrlTree(t, this.urlSerializer.parse(t), e, n)
                }
            }, {
                key: "applyRedirectCreatreUrlTree",
                value: function(e, t, n, r) {
                    var i = this.createSegmentGroup(e, t.root, n, r);
                    return new Mp(i, this.createQueryParams(t.queryParams, this.urlTree.queryParams), t.fragment)
                }
            }, {
                key: "createQueryParams",
                value: function(e, t) {
                    var n = {};
                    return Dp(e, (function(e, r) {
                        if ("string" == typeof e && e.startsWith(":")) {
                            var i = e.substring(1);
                            n[r] = t[i]
                        } else n[r] = e
                    })), n
                }
            }, {
                key: "createSegmentGroup",
                value: function(e, t, n, r) {
                    var i = this,
                        a = this.createSegments(e, t.segments, n, r),
                        o = {};
                    return Dp(t.children, (function(t, a) {
                        o[a] = i.createSegmentGroup(e, t, n, r)
                    })), new Lp(a, o)
                }
            }, {
                key: "createSegments",
                value: function(e, t, n, r) {
                    var i = this;
                    return t.map((function(t) {
                        return t.path.startsWith(":") ? i.findPosParam(e, t, r) : i.findOrReturn(t, n)
                    }))
                }
            }, {
                key: "findPosParam",
                value: function(e, t, n) {
                    var r = n[t.path.substring(1)];
                    if (!r) throw new Error("Cannot redirect to '".concat(e, "'. Cannot find '").concat(t.path, "'."));
                    return r
                }
            }, {
                key: "findOrReturn",
                value: function(e, t) {
                    var n, r = 0,
                        i = _createForOfIteratorHelper(t);
                    try {
                        for (i.s(); !(n = i.n()).done;) {
                            var a = n.value;
                            if (a.path === e.path) return t.splice(r), a;
                            r++
                        }
                    } catch (o) {
                        i.e(o)
                    } finally {
                        i.f()
                    }
                    return e
                }
            }]), e
        }();

        function Uy(e, t, n) {
            if ("" === t.path) return "full" === t.pathMatch && (e.hasChildren() || n.length > 0) ? {
                matched: !1,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {}
            } : {
                matched: !0,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {}
            };
            var r = (t.matcher || Sp)(n, e, t);
            return r ? {
                matched: !0,
                consumedSegments: r.consumed,
                lastChild: r.consumed.length,
                positionalParamSegments: r.posParams
            } : {
                matched: !1,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {}
            }
        }

        function Hy(e) {
            if (1 === e.numberOfChildren && e.children.primary) {
                var t = e.children.primary;
                return new Lp(e.segments.concat(t.segments), t.children)
            }
            return e
        }

        function Vy(e, t, n) {
            return (!(e.hasChildren() || t.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 !== n.redirectTo
        }

        function zy(e) {
            return e.outlet || "primary"
        }
        var By = function e(t) {
                _classCallCheck(this, e), this.path = t, this.route = this.path[this.path.length - 1]
            },
            qy = function e(t, n) {
                _classCallCheck(this, e), this.component = t, this.route = n
            };

        function Qy(e, t, n) {
            var r = function(e) {
                if (!e) return null;
                for (var t = e.parent; t; t = t.parent) {
                    var n = t.routeConfig;
                    if (n && n._loadedConfig) return n._loadedConfig
                }
                return null
            }(t);
            return (r ? r.module.injector : n).get(e)
        }

        function Wy(e, t, n) {
            var r = sy(e),
                i = e.value;
            Dp(r, (function(e, r) {
                Wy(e, i.component ? t ? t.children.getContext(r) : null : t, n)
            })), n.canDeactivateChecks.push(new qy(i.component && t && t.outlet && t.outlet.isActivated ? t.outlet.component : null, i))
        }
        var Ky = Symbol("INITIAL_VALUE");

        function Zy() {
            return Jv((function(e) {
                return (function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var r = null,
                        i = null;
                    return I(t[t.length - 1]) && (i = t.pop()), "function" == typeof t[t.length - 1] && (r = t.pop()), 1 === t.length && u(t[0]) && (t = t[0]), Z(t, i).lift(new Nv(r))
                }).apply(void 0, _toConsumableArray(e.map((function(e) {
                    return e.pipe(ff(1), function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        var r = t[t.length - 1];
                        return I(r) ? (t.pop(), function(e) {
                            return Mf(t, e, r)
                        }) : function(e) {
                            return Mf(t, e)
                        }
                    }(Ky))
                })))).pipe(Yv((function(e, t) {
                    var n = !1;
                    return t.reduce((function(e, r, i) {
                        if (e !== Ky) return e;
                        if (r === Ky && (n = !0), !n) {
                            if (!1 === r) return r;
                            if (i === t.length - 1 || Py(r)) return r
                        }
                        return e
                    }), e)
                }), Ky), of ((function(e) {
                    return e !== Ky
                })), U((function(e) {
                    return Py(e) ? e : !0 === e
                })), ff(1))
            }))
        }

        function Gy(e, t) {
            return null !== e && t && t(new mp(e)), ef(!0)
        }

        function Jy(e, t) {
            return null !== e && t && t(new pp(e)), ef(!0)
        }

        function $y(e, t, n) {
            var r = t.routeConfig ? t.routeConfig.canActivate : null;
            return r && 0 !== r.length ? ef(r.map((function(r) {
                return jv((function() {
                    var i, a = Qy(r, t, n);
                    if (function(e) {
                            return e && Ry(e.canActivate)
                        }(a)) i = jp(a.canActivate(t, e));
                    else {
                        if (!Ry(a)) throw new Error("Invalid CanActivate guard");
                        i = jp(a(t, e))
                    }
                    return i.pipe(Kv())
                }))
            }))).pipe(Zy()) : ef(!0)
        }

        function Xy(e, t, n) {
            var r = t[t.length - 1],
                i = t.slice(0, t.length - 1).reverse().map((function(e) {
                    return function(e) {
                        var t = e.routeConfig ? e.routeConfig.canActivateChild : null;
                        return t && 0 !== t.length ? {
                            node: e,
                            guards: t
                        } : null
                    }(e)
                })).filter((function(e) {
                    return null !== e
                })).map((function(t) {
                    return jv((function() {
                        return ef(t.guards.map((function(i) {
                            var a, o = Qy(i, t.node, n);
                            if (function(e) {
                                    return e && Ry(e.canActivateChild)
                                }(o)) a = jp(o.canActivateChild(r, e));
                            else {
                                if (!Ry(o)) throw new Error("Invalid CanActivateChild guard");
                                a = jp(o(r, e))
                            }
                            return a.pipe(Kv())
                        }))).pipe(Zy())
                    }))
                }));
            return ef(i).pipe(Zy())
        }
        var Yy = function e() {
                _classCallCheck(this, e)
            },
            em = function() {
                function e(t, n, r, i, a, o) {
                    _classCallCheck(this, e), this.rootComponentType = t, this.config = n, this.urlTree = r, this.url = i, this.paramsInheritanceStrategy = a, this.relativeLinkResolution = o
                }
                return _createClass(e, [{
                    key: "recognize",
                    value: function() {
                        try {
                            var e = rm(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
                                t = this.processSegmentGroup(this.config, e, "primary"),
                                n = new fy([], Object.freeze({}), Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, "primary", this.rootComponentType, null, this.urlTree.root, -1, {}),
                                r = new oy(n, t),
                                i = new dy(this.url, r);
                            return this.inheritParamsAndData(i._root), ef(i)
                        } catch (a) {
                            return new C((function(e) {
                                return e.error(a)
                            }))
                        }
                    }
                }, {
                    key: "inheritParamsAndData",
                    value: function(e) {
                        var t = this,
                            n = e.value,
                            r = hy(n, this.paramsInheritanceStrategy);
                        n.params = Object.freeze(r.params), n.data = Object.freeze(r.data), e.children.forEach((function(e) {
                            return t.inheritParamsAndData(e)
                        }))
                    }
                }, {
                    key: "processSegmentGroup",
                    value: function(e, t, n) {
                        return 0 === t.segments.length && t.hasChildren() ? this.processChildren(e, t) : this.processSegment(e, t, t.segments, n)
                    }
                }, {
                    key: "processChildren",
                    value: function(e, t) {
                        var n, r = this,
                            i = Vp(t, (function(t, n) {
                                return r.processSegmentGroup(e, t, n)
                            }));
                        return n = {}, i.forEach((function(e) {
                            var t = n[e.value.outlet];
                            if (t) {
                                var r = t.url.map((function(e) {
                                        return e.toString()
                                    })).join("/"),
                                    i = e.value.url.map((function(e) {
                                        return e.toString()
                                    })).join("/");
                                throw new Error("Two segments cannot have the same outlet name: '".concat(r, "' and '").concat(i, "'."))
                            }
                            n[e.value.outlet] = e.value
                        })), i.sort((function(e, t) {
                            return "primary" === e.value.outlet ? -1 : "primary" === t.value.outlet ? 1 : e.value.outlet.localeCompare(t.value.outlet)
                        })), i
                    }
                }, {
                    key: "processSegment",
                    value: function(e, t, n, r) {
                        var i, a = _createForOfIteratorHelper(e);
                        try {
                            for (a.s(); !(i = a.n()).done;) {
                                var o = i.value;
                                try {
                                    return this.processSegmentAgainstRoute(o, t, n, r)
                                } catch (s) {
                                    if (!(s instanceof Yy)) throw s
                                }
                            }
                        } catch (u) {
                            a.e(u)
                        } finally {
                            a.f()
                        }
                        if (this.noLeftoversInUrl(t, n, r)) return [];
                        throw new Yy
                    }
                }, {
                    key: "noLeftoversInUrl",
                    value: function(e, t, n) {
                        return 0 === t.length && !e.children[n]
                    }
                }, {
                    key: "processSegmentAgainstRoute",
                    value: function(e, t, n, r) {
                        if (e.redirectTo) throw new Yy;
                        if ((e.outlet || "primary") !== r) throw new Yy;
                        var i, a = [],
                            o = [];
                        if ("**" === e.path) {
                            var s = n.length > 0 ? Np(n).parameters : {};
                            i = new fy(n, s, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, om(e), r, e.component, e, tm(t), nm(t) + n.length, sm(e))
                        } else {
                            var u = function(e, t, n) {
                                if ("" === t.path) {
                                    if ("full" === t.pathMatch && (e.hasChildren() || n.length > 0)) throw new Yy;
                                    return {
                                        consumedSegments: [],
                                        lastChild: 0,
                                        parameters: {}
                                    }
                                }
                                var r = (t.matcher || Sp)(n, e, t);
                                if (!r) throw new Yy;
                                var i = {};
                                Dp(r.posParams, (function(e, t) {
                                    i[t] = e.path
                                }));
                                var a = r.consumed.length > 0 ? Object.assign(Object.assign({}, i), r.consumed[r.consumed.length - 1].parameters) : i;
                                return {
                                    consumedSegments: r.consumed,
                                    lastChild: r.consumed.length,
                                    parameters: a
                                }
                            }(t, e, n);
                            a = u.consumedSegments, o = n.slice(u.lastChild), i = new fy(a, u.parameters, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, om(e), r, e.component, e, tm(t), nm(t) + a.length, sm(e))
                        }
                        var l = function(e) {
                                return e.children ? e.children : e.loadChildren ? e._loadedConfig.routes : []
                            }(e),
                            c = rm(t, a, o, l, this.relativeLinkResolution),
                            h = c.segmentGroup,
                            f = c.slicedSegments;
                        if (0 === f.length && h.hasChildren()) {
                            var d = this.processChildren(l, h);
                            return [new oy(i, d)]
                        }
                        if (0 === l.length && 0 === f.length) return [new oy(i, [])];
                        var v = this.processSegment(l, h, f, "primary");
                        return [new oy(i, v)]
                    }
                }]), e
            }();

        function tm(e) {
            for (var t = e; t._sourceSegment;) t = t._sourceSegment;
            return t
        }

        function nm(e) {
            for (var t = e, n = t._segmentIndexShift ? t._segmentIndexShift : 0; t._sourceSegment;) n += (t = t._sourceSegment)._segmentIndexShift ? t._segmentIndexShift : 0;
            return n - 1
        }

        function rm(e, t, n, r, i) {
            if (n.length > 0 && function(e, t, n) {
                    return n.some((function(n) {
                        return im(e, t, n) && "primary" !== am(n)
                    }))
                }(e, n, r)) {
                var a = new Lp(t, function(e, t, n, r) {
                    var i = {};
                    i.primary = r, r._sourceSegment = e, r._segmentIndexShift = t.length;
                    var a, o = _createForOfIteratorHelper(n);
                    try {
                        for (o.s(); !(a = o.n()).done;) {
                            var s = a.value;
                            if ("" === s.path && "primary" !== am(s)) {
                                var u = new Lp([], {});
                                u._sourceSegment = e, u._segmentIndexShift = t.length, i[am(s)] = u
                            }
                        }
                    } catch (l) {
                        o.e(l)
                    } finally {
                        o.f()
                    }
                    return i
                }(e, t, r, new Lp(n, e.children)));
                return a._sourceSegment = e, a._segmentIndexShift = t.length, {
                    segmentGroup: a,
                    slicedSegments: []
                }
            }
            if (0 === n.length && function(e, t, n) {
                    return n.some((function(n) {
                        return im(e, t, n)
                    }))
                }(e, n, r)) {
                var o = new Lp(e.segments, function(e, t, n, r, i, a) {
                    var o, s = {},
                        u = _createForOfIteratorHelper(r);
                    try {
                        for (u.s(); !(o = u.n()).done;) {
                            var l = o.value;
                            if (im(e, n, l) && !i[am(l)]) {
                                var c = new Lp([], {});
                                c._sourceSegment = e, c._segmentIndexShift = "legacy" === a ? e.segments.length : t.length, s[am(l)] = c
                            }
                        }
                    } catch (h) {
                        u.e(h)
                    } finally {
                        u.f()
                    }
                    return Object.assign(Object.assign({}, i), s)
                }(e, t, n, r, e.children, i));
                return o._sourceSegment = e, o._segmentIndexShift = t.length, {
                    segmentGroup: o,
                    slicedSegments: n
                }
            }
            var s = new Lp(e.segments, e.children);
            return s._sourceSegment = e, s._segmentIndexShift = t.length, {
                segmentGroup: s,
                slicedSegments: n
            }
        }

        function im(e, t, n) {
            return (!(e.hasChildren() || t.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 === n.redirectTo
        }

        function am(e) {
            return e.outlet || "primary"
        }

        function om(e) {
            return e.data || {}
        }

        function sm(e) {
            return e.resolve || {}
        }

        function um(e, t, n, r) {
            var i = Qy(e, t, r);
            return jp(i.resolve ? i.resolve(t, n) : i(t, n))
        }

        function lm(e) {
            return function(t) {
                return t.pipe(Jv((function(t) {
                    var n = e(t);
                    return n ? B(n).pipe(U((function() {
                        return t
                    }))) : B([t])
                })))
            }
        }
        var cm = function() {
                function e() {
                    _classCallCheck(this, e)
                }
                return _createClass(e, [{
                    key: "shouldDetach",
                    value: function(e) {
                        return !1
                    }
                }, {
                    key: "store",
                    value: function(e, t) {}
                }, {
                    key: "shouldAttach",
                    value: function(e) {
                        return !1
                    }
                }, {
                    key: "retrieve",
                    value: function(e) {
                        return null
                    }
                }, {
                    key: "shouldReuseRoute",
                    value: function(e, t) {
                        return e.routeConfig === t.routeConfig
                    }
                }]), e
            }(),
            hm = new He("ROUTES"),
            fm = function() {
                function e(t, n, r, i) {
                    _classCallCheck(this, e), this.loader = t, this.compiler = n, this.onLoadStartListener = r, this.onLoadEndListener = i
                }
                return _createClass(e, [{
                    key: "load",
                    value: function(e, t) {
                        var n = this;
                        return this.onLoadStartListener && this.onLoadStartListener(t), this.loadModuleFactory(t.loadChildren).pipe(U((function(r) {
                            n.onLoadEndListener && n.onLoadEndListener(t);
                            var i = r.create(e);
                            return new Ep(Pp(i.injector.get(hm)).map(Op), i)
                        })))
                    }
                }, {
                    key: "loadModuleFactory",
                    value: function(e) {
                        var t = this;
                        return "string" == typeof e ? B(this.loader.load(e)) : jp(e()).pipe(q((function(e) {
                            return e instanceof et ? ef(e) : B(t.compiler.compileModuleAsync(e))
                        })))
                    }
                }]), e
            }(),
            dm = function() {
                function e() {
                    _classCallCheck(this, e)
                }
                return _createClass(e, [{
                    key: "shouldProcessUrl",
                    value: function(e) {
                        return !0
                    }
                }, {
                    key: "extract",
                    value: function(e) {
                        return e
                    }
                }, {
                    key: "merge",
                    value: function(e, t) {
                        return e
                    }
                }]), e
            }();

        function vm(e) {
            throw e
        }

        function pm(e, t, n) {
            return t.parse("/")
        }

        function ym(e, t) {
            return ef(null)
        }
        var mm, gm, _m, km, bm = ((mm = function() {
                function e(t, n, r, i, a, o, s, u) {
                    var l = this;
                    _classCallCheck(this, e), this.rootComponentType = t, this.urlSerializer = n, this.rootContexts = r, this.location = i, this.config = u, this.lastSuccessfulNavigation = null, this.currentNavigation = null, this.navigationId = 0, this.isNgZoneEnabled = !1, this.events = new A, this.errorHandler = vm, this.malformedUriErrorHandler = pm, this.navigated = !1, this.lastSuccessfulId = -1, this.hooks = {
                        beforePreactivation: ym,
                        afterPreactivation: ym
                    }, this.urlHandlingStrategy = new dm, this.routeReuseStrategy = new cm, this.onSameUrlNavigation = "ignore", this.paramsInheritanceStrategy = "emptyOnly", this.urlUpdateStrategy = "deferred", this.relativeLinkResolution = "legacy", this.ngModule = a.get(Ye), this.console = a.get(ys);
                    var c = a.get(Is);
                    this.isNgZoneEnabled = c instanceof Is, this.resetConfig(u), this.currentUrlTree = new Mp(new Lp([], {}), {}, null), this.rawUrlTree = this.currentUrlTree, this.browserUrlTree = this.currentUrlTree, this.configLoader = new fm(o, s, (function(e) {
                        return l.triggerEvent(new dp(e))
                    }), (function(e) {
                        return l.triggerEvent(new vp(e))
                    })), this.routerState = ly(this.currentUrlTree, this.rootComponentType), this.transitions = new Iv({
                        id: 0,
                        currentUrlTree: this.currentUrlTree,
                        currentRawUrl: this.currentUrlTree,
                        extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
                        urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
                        rawUrl: this.currentUrlTree,
                        extras: {},
                        resolve: null,
                        reject: null,
                        promise: Promise.resolve(!0),
                        source: "imperative",
                        restoredState: null,
                        currentSnapshot: this.routerState.snapshot,
                        targetSnapshot: null,
                        currentRouterState: this.routerState,
                        targetRouterState: null,
                        guards: {
                            canActivateChecks: [],
                            canDeactivateChecks: []
                        },
                        guardsResult: null
                    }), this.navigations = this.setupNavigations(this.transitions), this.processNavigations()
                }
                return _createClass(e, [{
                    key: "setupNavigations",
                    value: function(e) {
                        var t = this,
                            n = this.events;
                        return e.pipe( of ((function(e) {
                            return 0 !== e.id
                        })), U((function(e) {
                            return Object.assign(Object.assign({}, e), {
                                extractedUrl: t.urlHandlingStrategy.extract(e.rawUrl)
                            })
                        })), Jv((function(e) {
                            var r, i, a, o, s = !1,
                                u = !1;
                            return ef(e).pipe(nf((function(e) {
                                t.currentNavigation = {
                                    id: e.id,
                                    initialUrl: e.currentRawUrl,
                                    extractedUrl: e.extractedUrl,
                                    trigger: e.source,
                                    extras: e.extras,
                                    previousNavigation: t.lastSuccessfulNavigation ? Object.assign(Object.assign({}, t.lastSuccessfulNavigation), {
                                        previousNavigation: null
                                    }) : null
                                }
                            })), Jv((function(e) {
                                var r, i, a, o, s = !t.navigated || e.extractedUrl.toString() !== t.browserUrlTree.toString();
                                if (("reload" === t.onSameUrlNavigation || s) && t.urlHandlingStrategy.shouldProcessUrl(e.rawUrl)) return ef(e).pipe(Jv((function(e) {
                                    var r = t.transitions.getValue();
                                    return n.next(new ip(e.id, t.serializeUrl(e.extractedUrl), e.source, e.restoredState)), r !== t.transitions.getValue() ? cf : [e]
                                })), Jv((function(e) {
                                    return Promise.resolve(e)
                                })), (r = t.ngModule.injector, i = t.configLoader, a = t.urlSerializer, o = t.config, function(e) {
                                    return e.pipe(Jv((function(e) {
                                        return function(e, t, n, r, i) {
                                            return new Ly(e, t, n, r, i).apply()
                                        }(r, i, a, e.extractedUrl, o).pipe(U((function(t) {
                                            return Object.assign(Object.assign({}, e), {
                                                urlAfterRedirects: t
                                            })
                                        })))
                                    })))
                                }), nf((function(e) {
                                    t.currentNavigation = Object.assign(Object.assign({}, t.currentNavigation), {
                                        finalUrl: e.urlAfterRedirects
                                    })
                                })), function(e, n, r, i, a) {
                                    return function(r) {
                                        return r.pipe(q((function(r) {
                                            return function(e, t, n, r) {
                                                var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "emptyOnly",
                                                    a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "legacy";
                                                return new em(e, t, n, r, i, a).recognize()
                                            }(e, n, r.urlAfterRedirects, (o = r.urlAfterRedirects, t.serializeUrl(o)), i, a).pipe(U((function(e) {
                                                return Object.assign(Object.assign({}, r), {
                                                    targetSnapshot: e
                                                })
                                            })));
                                            var o
                                        })))
                                    }
                                }(t.rootComponentType, t.config, 0, t.paramsInheritanceStrategy, t.relativeLinkResolution), nf((function(e) {
                                    "eager" === t.urlUpdateStrategy && (e.extras.skipLocationChange || t.setBrowserUrl(e.urlAfterRedirects, !!e.extras.replaceUrl, e.id, e.extras.state), t.browserUrlTree = e.urlAfterRedirects)
                                })), nf((function(e) {
                                    var r = new up(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(e.urlAfterRedirects), e.targetSnapshot);
                                    n.next(r)
                                })));
                                if (s && t.rawUrlTree && t.urlHandlingStrategy.shouldProcessUrl(t.rawUrlTree)) {
                                    var u = e.id,
                                        l = e.extractedUrl,
                                        c = e.source,
                                        h = e.restoredState,
                                        f = e.extras,
                                        d = new ip(u, t.serializeUrl(l), c, h);
                                    n.next(d);
                                    var v = ly(l, t.rootComponentType).snapshot;
                                    return ef(Object.assign(Object.assign({}, e), {
                                        targetSnapshot: v,
                                        urlAfterRedirects: l,
                                        extras: Object.assign(Object.assign({}, f), {
                                            skipLocationChange: !1,
                                            replaceUrl: !1
                                        })
                                    }))
                                }
                                return t.rawUrlTree = e.rawUrl, t.browserUrlTree = e.urlAfterRedirects, e.resolve(null), cf
                            })), lm((function(e) {
                                var n = e.targetSnapshot,
                                    r = e.id,
                                    i = e.extractedUrl,
                                    a = e.rawUrl,
                                    o = e.extras,
                                    s = o.skipLocationChange,
                                    u = o.replaceUrl;
                                return t.hooks.beforePreactivation(n, {
                                    navigationId: r,
                                    appliedUrlTree: i,
                                    rawUrlTree: a,
                                    skipLocationChange: !!s,
                                    replaceUrl: !!u
                                })
                            })), nf((function(e) {
                                var n = new lp(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(e.urlAfterRedirects), e.targetSnapshot);
                                t.triggerEvent(n)
                            })), U((function(e) {
                                return Object.assign(Object.assign({}, e), {
                                    guards: (n = e.targetSnapshot, r = e.currentSnapshot, i = t.rootContexts, a = n._root, function e(t, n, r, i) {
                                        var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                                                canDeactivateChecks: [],
                                                canActivateChecks: []
                                            },
                                            o = sy(n);
                                        return t.children.forEach((function(t) {
                                            ! function(t, n, r, i) {
                                                var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                                                        canDeactivateChecks: [],
                                                        canActivateChecks: []
                                                    },
                                                    o = t.value,
                                                    s = n ? n.value : null,
                                                    u = r ? r.getContext(t.value.outlet) : null;
                                                if (s && o.routeConfig === s.routeConfig) {
                                                    var l = function(e, t, n) {
                                                        if ("function" == typeof n) return n(e, t);
                                                        switch (n) {
                                                            case "pathParamsChange":
                                                                return !Hp(e.url, t.url);
                                                            case "pathParamsOrQueryParamsChange":
                                                                return !Hp(e.url, t.url) || !Ip(e.queryParams, t.queryParams);
                                                            case "always":
                                                                return !0;
                                                            case "paramsOrQueryParamsChange":
                                                                return !my(e, t) || !Ip(e.queryParams, t.queryParams);
                                                            case "paramsChange":
                                                            default:
                                                                return !my(e, t)
                                                        }
                                                    }(s, o, o.routeConfig.runGuardsAndResolvers);
                                                    l ? a.canActivateChecks.push(new By(i)) : (o.data = s.data, o._resolvedData = s._resolvedData), e(t, n, o.component ? u ? u.children : null : r, i, a), l && a.canDeactivateChecks.push(new qy(u && u.outlet && u.outlet.component || null, s))
                                                } else s && Wy(n, u, a), a.canActivateChecks.push(new By(i)), e(t, null, o.component ? u ? u.children : null : r, i, a)
                                            }(t, o[t.value.outlet], r, i.concat([t.value]), a), delete o[t.value.outlet]
                                        })), Dp(o, (function(e, t) {
                                            return Wy(e, r.getContext(t), a)
                                        })), a
                                    }(a, r ? r._root : null, i, [a.value]))
                                });
                                var n, r, i, a
                            })), function(e, t) {
                                return function(n) {
                                    return n.pipe(q((function(n) {
                                        var r = n.targetSnapshot,
                                            i = n.currentSnapshot,
                                            a = n.guards,
                                            o = a.canActivateChecks,
                                            s = a.canDeactivateChecks;
                                        return 0 === s.length && 0 === o.length ? ef(Object.assign(Object.assign({}, n), {
                                            guardsResult: !0
                                        })) : function(e, t, n, r) {
                                            return B(e).pipe(q((function(e) {
                                                return function(e, t, n, r, i) {
                                                    var a = t && t.routeConfig ? t.routeConfig.canDeactivate : null;
                                                    return a && 0 !== a.length ? ef(a.map((function(a) {
                                                        var o, s = Qy(a, t, i);
                                                        if (function(e) {
                                                                return e && Ry(e.canDeactivate)
                                                            }(s)) o = jp(s.canDeactivate(e, t, n, r));
                                                        else {
                                                            if (!Ry(s)) throw new Error("Invalid CanDeactivate guard");
                                                            o = jp(s(e, t, n, r))
                                                        }
                                                        return o.pipe(Kv())
                                                    }))).pipe(Zy()) : ef(!0)
                                                }(e.component, e.route, n, t, r)
                                            })), Kv((function(e) {
                                                return !0 !== e
                                            }), !0))
                                        }(s, r, i, e).pipe(q((function(n) {
                                            return n && "boolean" == typeof n ? function(e, t, n, r) {
                                                return B(t).pipe(Fd((function(t) {
                                                    return B([Jy(t.route.parent, r), Gy(t.route, r), Xy(e, t.path, n), $y(e, t.route, n)]).pipe(Ff(), Kv((function(e) {
                                                        return !0 !== e
                                                    }), !0))
                                                })), Kv((function(e) {
                                                    return !0 !== e
                                                }), !0))
                                            }(r, o, e, t) : ef(n)
                                        })), U((function(e) {
                                            return Object.assign(Object.assign({}, n), {
                                                guardsResult: e
                                            })
                                        })))
                                    })))
                                }
                            }(t.ngModule.injector, (function(e) {
                                return t.triggerEvent(e)
                            })), nf((function(e) {
                                if (Py(e.guardsResult)) {
                                    var n = wp('Redirecting to "'.concat(t.serializeUrl(e.guardsResult), '"'));
                                    throw n.url = e.guardsResult, n
                                }
                            })), nf((function(e) {
                                var n = new cp(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(e.urlAfterRedirects), e.targetSnapshot, !!e.guardsResult);
                                t.triggerEvent(n)
                            })), of ((function(e) {
                                if (!e.guardsResult) {
                                    t.resetUrlToCurrentUrlTree();
                                    var r = new op(e.id, t.serializeUrl(e.extractedUrl), "");
                                    return n.next(r), e.resolve(!1), !1
                                }
                                return !0
                            })), lm((function(e) {
                                if (e.guards.canActivateChecks.length) return ef(e).pipe(nf((function(e) {
                                    var n = new hp(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(e.urlAfterRedirects), e.targetSnapshot);
                                    t.triggerEvent(n)
                                })), (n = t.paramsInheritanceStrategy, r = t.ngModule.injector, function(e) {
                                    return e.pipe(q((function(e) {
                                        var t = e.targetSnapshot,
                                            i = e.guards.canActivateChecks;
                                        return i.length ? B(i).pipe(Fd((function(e) {
                                            return function(e, t, n, r) {
                                                return function(e, t, n, r) {
                                                    var i = Object.keys(e);
                                                    if (0 === i.length) return ef({});
                                                    if (1 === i.length) {
                                                        var a = i[0];
                                                        return um(e[a], t, n, r).pipe(U((function(e) {
                                                            return _defineProperty({}, a, e)
                                                        })))
                                                    }
                                                    var o = {};
                                                    return B(i).pipe(q((function(i) {
                                                        return um(e[i], t, n, r).pipe(U((function(e) {
                                                            return o[i] = e, e
                                                        })))
                                                    }))).pipe(Wv(), U((function() {
                                                        return o
                                                    })))
                                                }(e._resolve, e, t, r).pipe(U((function(t) {
                                                    return e._resolvedData = t, e.data = Object.assign(Object.assign({}, e.data), hy(e, n).resolve), null
                                                })))
                                            }(e.route, t, n, r)
                                        })), function(e, t) {
                                            return arguments.length >= 2 ? function(n) {
                                                return _(Yv(e, t), Fv(1), Bv(t))(n)
                                            } : function(t) {
                                                return _(Yv((function(t, n, r) {
                                                    return e(t, n, r + 1)
                                                })), Fv(1))(t)
                                            }
                                        }((function(e, t) {
                                            return e
                                        })), U((function(t) {
                                            return e
                                        }))) : ef(e)
                                    })))
                                }), nf((function(e) {
                                    var n = new fp(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(e.urlAfterRedirects), e.targetSnapshot);
                                    t.triggerEvent(n)
                                })));
                                var n, r
                            })), lm((function(e) {
                                var n = e.targetSnapshot,
                                    r = e.id,
                                    i = e.extractedUrl,
                                    a = e.rawUrl,
                                    o = e.extras,
                                    s = o.skipLocationChange,
                                    u = o.replaceUrl;
                                return t.hooks.afterPreactivation(n, {
                                    navigationId: r,
                                    appliedUrlTree: i,
                                    rawUrlTree: a,
                                    skipLocationChange: !!s,
                                    replaceUrl: !!u
                                })
                            })), U((function(e) {
                                var n = function(e, t, n) {
                                    var r = function e(t, n, r) {
                                        if (r && t.shouldReuseRoute(n.value, r.value.snapshot)) {
                                            var i = r.value;
                                            i._futureSnapshot = n.value;
                                            var a = function(t, n, r) {
                                                return n.children.map((function(n) {
                                                    var i, a = _createForOfIteratorHelper(r.children);
                                                    try {
                                                        for (a.s(); !(i = a.n()).done;) {
                                                            var o = i.value;
                                                            if (t.shouldReuseRoute(o.value.snapshot, n.value)) return e(t, n, o)
                                                        }
                                                    } catch (s) {
                                                        a.e(s)
                                                    } finally {
                                                        a.f()
                                                    }
                                                    return e(t, n)
                                                }))
                                            }(t, n, r);
                                            return new oy(i, a)
                                        }
                                        var o = t.retrieve(n.value);
                                        if (o) {
                                            var s = o.route;
                                            return function e(t, n) {
                                                if (t.value.routeConfig !== n.value.routeConfig) throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");
                                                if (t.children.length !== n.children.length) throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");
                                                n.value._futureSnapshot = t.value;
                                                for (var r = 0; r < t.children.length; ++r) e(t.children[r], n.children[r])
                                            }(n, s), s
                                        }
                                        var u, l = new cy(new Iv((u = n.value).url), new Iv(u.params), new Iv(u.queryParams), new Iv(u.fragment), new Iv(u.data), u.outlet, u.component, u),
                                            c = n.children.map((function(n) {
                                                return e(t, n)
                                            }));
                                        return new oy(l, c)
                                    }(e, t._root, n ? n._root : void 0);
                                    return new uy(r, t)
                                }(t.routeReuseStrategy, e.targetSnapshot, e.currentRouterState);
                                return Object.assign(Object.assign({}, e), {
                                    targetRouterState: n
                                })
                            })), nf((function(e) {
                                t.currentUrlTree = e.urlAfterRedirects, t.rawUrlTree = t.urlHandlingStrategy.merge(t.currentUrlTree, e.rawUrl), t.routerState = e.targetRouterState, "deferred" === t.urlUpdateStrategy && (e.extras.skipLocationChange || t.setBrowserUrl(t.rawUrlTree, !!e.extras.replaceUrl, e.id, e.extras.state), t.browserUrlTree = e.urlAfterRedirects)
                            })), (i = t.rootContexts, a = t.routeReuseStrategy, o = function(e) {
                                return t.triggerEvent(e)
                            }, U((function(e) {
                                return new Oy(a, e.targetRouterState, e.currentRouterState, o).activate(i), e
                            }))), nf({
                                next: function() {
                                    s = !0
                                },
                                complete: function() {
                                    s = !0
                                }
                            }), (r = function() {
                                if (!s && !u) {
                                    t.resetUrlToCurrentUrlTree();
                                    var r = new op(e.id, t.serializeUrl(e.extractedUrl), "Navigation ID ".concat(e.id, " is not equal to the current navigation id ").concat(t.navigationId));
                                    n.next(r), e.resolve(!1)
                                }
                                t.currentNavigation = null
                            }, function(e) {
                                return e.lift(new Dd(r))
                            }), Rd((function(r) {
                                if (u = !0, (s = r) && s.ngNavigationCancelingError) {
                                    var i = Py(r.url);
                                    i || (t.navigated = !0, t.resetStateAndUrl(e.currentRouterState, e.currentUrlTree, e.rawUrl));
                                    var a = new op(e.id, t.serializeUrl(e.extractedUrl), r.message);
                                    n.next(a), i ? setTimeout((function() {
                                        var n = t.urlHandlingStrategy.merge(r.url, t.rawUrlTree);
                                        return t.scheduleNavigation(n, "imperative", null, {
                                            skipLocationChange: e.extras.skipLocationChange,
                                            replaceUrl: "eager" === t.urlUpdateStrategy
                                        }, {
                                            resolve: e.resolve,
                                            reject: e.reject,
                                            promise: e.promise
                                        })
                                    }), 0) : e.resolve(!1)
                                } else {
                                    t.resetStateAndUrl(e.currentRouterState, e.currentUrlTree, e.rawUrl);
                                    var o = new sp(e.id, t.serializeUrl(e.extractedUrl), r);
                                    n.next(o);
                                    try {
                                        e.resolve(t.errorHandler(r))
                                    } catch (l) {
                                        e.reject(l)
                                    }
                                }
                                var s;
                                return cf
                            })))
                        })))
                    }
                }, {
                    key: "resetRootComponentType",
                    value: function(e) {
                        this.rootComponentType = e, this.routerState.root.component = this.rootComponentType
                    }
                }, {
                    key: "getTransition",
                    value: function() {
                        var e = this.transitions.value;
                        return e.urlAfterRedirects = this.browserUrlTree, e
                    }
                }, {
                    key: "setTransition",
                    value: function(e) {
                        this.transitions.next(Object.assign(Object.assign({}, this.getTransition()), e))
                    }
                }, {
                    key: "initialNavigation",
                    value: function() {
                        this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), {
                            replaceUrl: !0
                        })
                    }
                }, {
                    key: "setUpLocationChangeListener",
                    value: function() {
                        var e = this;
                        this.locationSubscription || (this.locationSubscription = this.location.subscribe((function(t) {
                            var n = e.parseUrl(t.url),
                                r = "popstate" === t.type ? "popstate" : "hashchange",
                                i = t.state && t.state.navigationId ? t.state : null;
                            setTimeout((function() {
                                e.scheduleNavigation(n, r, i, {
                                    replaceUrl: !0
                                })
                            }), 0)
                        })))
                    }
                }, {
                    key: "url",
                    get: function() {
                        return this.serializeUrl(this.currentUrlTree)
                    }
                }, {
                    key: "getCurrentNavigation",
                    value: function() {
                        return this.currentNavigation
                    }
                }, {
                    key: "triggerEvent",
                    value: function(e) {
                        this.events.next(e)
                    }
                }, {
                    key: "resetConfig",
                    value: function(e) {
                        Tp(e), this.config = e.map(Op), this.navigated = !1, this.lastSuccessfulId = -1
                    }
                }, {
                    key: "ngOnDestroy",
                    value: function() {
                        this.dispose()
                    }
                }, {
                    key: "dispose",
                    value: function() {
                        this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = null)
                    }
                }, {
                    key: "createUrlTree",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.relativeTo,
                            r = t.queryParams,
                            i = t.fragment,
                            a = t.preserveQueryParams,
                            o = t.queryParamsHandling,
                            s = t.preserveFragment;
                        Yn() && a && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");
                        var u = n || this.routerState.root,
                            l = s ? this.currentUrlTree.fragment : i,
                            c = null;
                        if (o) switch (o) {
                            case "merge":
                                c = Object.assign(Object.assign({}, this.currentUrlTree.queryParams), r);
                                break;
                            case "preserve":
                                c = this.currentUrlTree.queryParams;
                                break;
                            default:
                                c = r || null
                        } else c = a ? this.currentUrlTree.queryParams : r || null;
                        return null !== c && (c = this.removeEmptyProps(c)),
                            function(e, t, n, r, i) {
                                if (0 === n.length) return _y(t.root, t.root, t, r, i);
                                var a = function(e) {
                                    if ("string" == typeof e[0] && 1 === e.length && "/" === e[0]) return new ky(!0, 0, e);
                                    var t = 0,
                                        n = !1,
                                        r = e.reduce((function(e, r, i) {
                                            if ("object" == typeof r && null != r) {
                                                if (r.outlets) {
                                                    var a = {};
                                                    return Dp(r.outlets, (function(e, t) {
                                                        a[t] = "string" == typeof e ? e.split("/") : e
                                                    })), [].concat(_toConsumableArray(e), [{
                                                        outlets: a
                                                    }])
                                                }
                                                if (r.segmentPath) return [].concat(_toConsumableArray(e), [r.segmentPath])
                                            }
                                            return "string" != typeof r ? [].concat(_toConsumableArray(e), [r]) : 0 === i ? (r.split("/").forEach((function(r, i) {
                                                0 == i && "." === r || (0 == i && "" === r ? n = !0 : ".." === r ? t++ : "" != r && e.push(r))
                                            })), e) : [].concat(_toConsumableArray(e), [r])
                                        }), []);
                                    return new ky(n, t, r)
                                }(n);
                                if (a.toRoot()) return _y(t.root, new Lp([], {}), t, r, i);
                                var o = function(e, t, n) {
                                        if (e.isAbsolute) return new by(t.root, !0, 0);
                                        if (-1 === n.snapshot._lastPathIndex) return new by(n.snapshot._urlSegment, !0, 0);
                                        var r = gy(e.commands[0]) ? 0 : 1;
                                        return function(e, t, n) {
                                            for (var r = e, i = t, a = n; a > i;) {
                                                if (a -= i, !(r = r.parent)) throw new Error("Invalid number of '../'");
                                                i = r.segments.length
                                            }
                                            return new by(r, !1, i - a)
                                        }(n.snapshot._urlSegment, n.snapshot._lastPathIndex + r, e.numberOfDoubleDots)
                                    }(a, t, e),
                                    s = o.processChildren ? Sy(o.segmentGroup, o.index, a.commands) : wy(o.segmentGroup, o.index, a.commands);
                                return _y(o.segmentGroup, s, t, r, i)
                            }(u, this.currentUrlTree, e, c, l)
                    }
                }, {
                    key: "navigateByUrl",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            skipLocationChange: !1
                        };
                        Yn() && this.isNgZoneEnabled && !Is.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
                        var n = Py(e) ? e : this.parseUrl(e),
                            r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
                        return this.scheduleNavigation(r, "imperative", null, t)
                    }
                }, {
                    key: "navigate",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            skipLocationChange: !1
                        };
                        return function(e) {
                            for (var t = 0; t < e.length; t++) {
                                var n = e[t];
                                if (null == n) throw new Error("The requested path contains ".concat(n, " segment at index ").concat(t))
                            }
                        }(e), this.navigateByUrl(this.createUrlTree(e, t), t)
                    }
                }, {
                    key: "serializeUrl",
                    value: function(e) {
                        return this.urlSerializer.serialize(e)
                    }
                }, {
                    key: "parseUrl",
                    value: function(e) {
                        var t;
                        try {
                            t = this.urlSerializer.parse(e)
                        } catch (n) {
                            t = this.malformedUriErrorHandler(n, this.urlSerializer, e)
                        }
                        return t
                    }
                }, {
                    key: "isActive",
                    value: function(e, t) {
                        if (Py(e)) return Fp(this.currentUrlTree, e, t);
                        var n = this.parseUrl(e);
                        return Fp(this.currentUrlTree, n, t)
                    }
                }, {
                    key: "removeEmptyProps",
                    value: function(e) {
                        return Object.keys(e).reduce((function(t, n) {
                            var r = e[n];
                            return null != r && (t[n] = r), t
                        }), {})
                    }
                }, {
                    key: "processNavigations",
                    value: function() {
                        var e = this;
                        this.navigations.subscribe((function(t) {
                            e.navigated = !0, e.lastSuccessfulId = t.id, e.events.next(new ap(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(e.currentUrlTree))), e.lastSuccessfulNavigation = e.currentNavigation, e.currentNavigation = null, t.resolve(!0)
                        }), (function(t) {
                            e.console.warn("Unhandled Navigation Error: ")
                        }))
                    }
                }, {
                    key: "scheduleNavigation",
                    value: function(e, t, n, r, i) {
                        var a, o, s, u = this.getTransition();
                        if (u && "imperative" !== t && "imperative" === u.source && u.rawUrl.toString() === e.toString()) return Promise.resolve(!0);
                        if (u && "hashchange" == t && "popstate" === u.source && u.rawUrl.toString() === e.toString()) return Promise.resolve(!0);
                        if (u && "popstate" == t && "hashchange" === u.source && u.rawUrl.toString() === e.toString()) return Promise.resolve(!0);
                        i ? (a = i.resolve, o = i.reject, s = i.promise) : s = new Promise((function(e, t) {
                            a = e, o = t
                        }));
                        var l = ++this.navigationId;
                        return this.setTransition({
                            id: l,
                            source: t,
                            restoredState: n,
                            currentUrlTree: this.currentUrlTree,
                            currentRawUrl: this.rawUrlTree,
                            rawUrl: e,
                            extras: r,
                            resolve: a,
                            reject: o,
                            promise: s,
                            currentSnapshot: this.routerState.snapshot,
                            currentRouterState: this.routerState
                        }), s.catch((function(e) {
                            return Promise.reject(e)
                        }))
                    }
                }, {
                    key: "setBrowserUrl",
                    value: function(e, t, n, r) {
                        var i = this.urlSerializer.serialize(e);
                        r = r || {}, this.location.isCurrentPathEqualTo(i) || t ? this.location.replaceState(i, "", Object.assign(Object.assign({}, r), {
                            navigationId: n
                        })) : this.location.go(i, "", Object.assign(Object.assign({}, r), {
                            navigationId: n
                        }))
                    }
                }, {
                    key: "resetStateAndUrl",
                    value: function(e, t, n) {
                        this.routerState = e, this.currentUrlTree = t, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n), this.resetUrlToCurrentUrlTree()
                    }
                }, {
                    key: "resetUrlToCurrentUrlTree",
                    value: function() {
                        this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", {
                            navigationId: this.lastSuccessfulId
                        })
                    }
                }]), e
            }()).\u0275fac = function(e) {
                ya()
            }, mm.\u0275dir = gt({
                type: mm
            }), mm),
            Cm = function e() {
                _classCallCheck(this, e), this.outlet = null, this.route = null, this.resolver = null, this.children = new wm, this.attachRef = null
            },
            wm = function() {
                function e() {
                    _classCallCheck(this, e), this.contexts = new Map
                }
                return _createClass(e, [{
                    key: "onChildOutletCreated",
                    value: function(e, t) {
                        var n = this.getOrCreateContext(e);
                        n.outlet = t, this.contexts.set(e, n)
                    }
                }, {
                    key: "onChildOutletDestroyed",
                    value: function(e) {
                        var t = this.getContext(e);
                        t && (t.outlet = null)
                    }
                }, {
                    key: "onOutletDeactivated",
                    value: function() {
                        var e = this.contexts;
                        return this.contexts = new Map, e
                    }
                }, {
                    key: "onOutletReAttached",
                    value: function(e) {
                        this.contexts = e
                    }
                }, {
                    key: "getOrCreateContext",
                    value: function(e) {
                        var t = this.getContext(e);
                        return t || (t = new Cm, this.contexts.set(e, t)), t
                    }
                }, {
                    key: "getContext",
                    value: function(e) {
                        return this.contexts.get(e) || null
                    }
                }]), e
            }(),
            Sm = ((gm = function() {
                function e(t, n, r, i, a) {
                    _classCallCheck(this, e), this.parentContexts = t, this.location = n, this.resolver = r, this.changeDetector = a, this.activated = null, this._activatedRoute = null, this.activateEvents = new Jo, this.deactivateEvents = new Jo, this.name = i || "primary", t.onChildOutletCreated(this.name, this)
                }
                return _createClass(e, [{
                    key: "ngOnDestroy",
                    value: function() {
                        this.parentContexts.onChildOutletDestroyed(this.name)
                    }
                }, {
                    key: "ngOnInit",
                    value: function() {
                        if (!this.activated) {
                            var e = this.parentContexts.getContext(this.name);
                            e && e.route && (e.attachRef ? this.attach(e.attachRef, e.route) : this.activateWith(e.route, e.resolver || null))
                        }
                    }
                }, {
                    key: "isActivated",
                    get: function() {
                        return !!this.activated
                    }
                }, {
                    key: "component",
                    get: function() {
                        if (!this.activated) throw new Error("Outlet is not activated");
                        return this.activated.instance
                    }
                }, {
                    key: "activatedRoute",
                    get: function() {
                        if (!this.activated) throw new Error("Outlet is not activated");
                        return this._activatedRoute
                    }
                }, {
                    key: "activatedRouteData",
                    get: function() {
                        return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
                    }
                }, {
                    key: "detach",
                    value: function() {
                        if (!this.activated) throw new Error("Outlet is not activated");
                        this.location.detach();
                        var e = this.activated;
                        return this.activated = null, this._activatedRoute = null, e
                    }
                }, {
                    key: "attach",
                    value: function(e, t) {
                        this.activated = e, this._activatedRoute = t, this.location.insert(e.hostView)
                    }
                }, {
                    key: "deactivate",
                    value: function() {
                        if (this.activated) {
                            var e = this.component;
                            this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(e)
                        }
                    }
                }, {
                    key: "activateWith",
                    value: function(e, t) {
                        if (this.isActivated) throw new Error("Cannot activate an already activated outlet");
                        this._activatedRoute = e;
                        var n = (t = t || this.resolver).resolveComponentFactory(e._futureSnapshot.routeConfig.component),
                            r = this.parentContexts.getOrCreateContext(this.name).children,
                            i = new Em(e, r, this.location.injector);
                        this.activated = this.location.createComponent(n, this.location.length, i), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance)
                    }
                }]), e
            }()).\u0275fac = function(e) {
                return new(e || gm)(pa(wm), pa(No), pa(so), function(e, t) {
                    var n = e.attrs;
                    if (n)
                        for (var r = n.length, i = 0; i < r;) {
                            var a = n[i];
                            if (bn(a)) break;
                            if (0 === a) i += 2;
                            else if ("number" == typeof a)
                                for (i++; i < r && "string" == typeof n[i];) i++;
                            else {
                                if ("name" === a) return n[i + 1];
                                i += 2
                            }
                        }
                    return null
                }(Wt()), pa(Ui))
            }, gm.\u0275dir = gt({
                type: gm,
                selectors: [
                    ["router-outlet"]
                ],
                outputs: {
                    activateEvents: "activate",
                    deactivateEvents: "deactivate"
                },
                exportAs: ["outlet"]
            }), gm),
            Em = function() {
                function e(t, n, r) {
                    _classCallCheck(this, e), this.route = t, this.childContexts = n, this.parent = r
                }
                return _createClass(e, [{
                    key: "get",
                    value: function(e, t) {
                        return e === cy ? this.route : e === wm ? this.childContexts : this.parent.get(e, t)
                    }
                }]), e
            }(),
            Tm = function e() {
                _classCallCheck(this, e)
            },
            xm = function() {
                function e() {
                    _classCallCheck(this, e)
                }
                return _createClass(e, [{
                    key: "preload",
                    value: function(e, t) {
                        return ef(null)
                    }
                }]), e
            }(),
            Am = ((km = function() {
                function e(t, n, r, i, a) {
                    _classCallCheck(this, e), this.router = t, this.injector = i, this.preloadingStrategy = a, this.loader = new fm(n, r, (function(e) {
                        return t.triggerEvent(new dp(e))
                    }), (function(e) {
                        return t.triggerEvent(new vp(e))
                    }))
                }
                return _createClass(e, [{
                    key: "setUpPreloading",
                    value: function() {
                        var e = this;
                        this.subscription = this.router.events.pipe( of ((function(e) {
                            return e instanceof ap
                        })), Fd((function() {
                            return e.preload()
                        }))).subscribe((function() {}))
                    }
                }, {
                    key: "preload",
                    value: function() {
                        var e = this.injector.get(Ye);
                        return this.processRoutes(e, this.router.config)
                    }
                }, {
                    key: "ngOnDestroy",
                    value: function() {
                        this.subscription.unsubscribe()
                    }
                }, {
                    key: "processRoutes",
                    value: function(e, t) {
                        var n, r = [],
                            i = _createForOfIteratorHelper(t);
                        try {
                            for (i.s(); !(n = i.n()).done;) {
                                var a = n.value;
                                if (a.loadChildren && !a.canLoad && a._loadedConfig) {
                                    var o = a._loadedConfig;
                                    r.push(this.processRoutes(o.module, o.routes))
                                } else a.loadChildren && !a.canLoad ? r.push(this.preloadConfig(e, a)) : a.children && r.push(this.processRoutes(e, a.children))
                            }
                        } catch (s) {
                            i.e(s)
                        } finally {
                            i.f()
                        }
                        return B(r).pipe(K(), U((function(e) {})))
                    }
                }, {
                    key: "preloadConfig",
                    value: function(e, t) {
                        var n = this;
                        return this.preloadingStrategy.preload(t, (function() {
                            return n.loader.load(e.injector, t).pipe(q((function(e) {
                                return t._loadedConfig = e, n.processRoutes(e.module, e.routes)
                            })))
                        }))
                    }
                }]), e
            }()).\u0275fac = function(e) {
                return new(e || km)(Ge(bm), Ge(Xs), Ge(Ts), Ge(ta), Ge(Tm))
            }, km.\u0275prov = fe({
                token: km,
                factory: km.\u0275fac
            }), km),
            Om = ((_m = function() {
                function e(t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    _classCallCheck(this, e), this.router = t, this.viewportScroller = n, this.options = r, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, this.store = {}, r.scrollPositionRestoration = r.scrollPositionRestoration || "disabled", r.anchorScrolling = r.anchorScrolling || "disabled"
                }
                return _createClass(e, [{
                    key: "init",
                    value: function() {
                        "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents()
                    }
                }, {
                    key: "createScrollEvents",
                    value: function() {
                        var e = this;
                        return this.router.events.subscribe((function(t) {
                            t instanceof ip ? (e.store[e.lastId] = e.viewportScroller.getScrollPosition(), e.lastSource = t.navigationTrigger, e.restoredId = t.restoredState ? t.restoredState.navigationId : 0) : t instanceof ap && (e.lastId = t.id, e.scheduleScrollEvent(t, e.router.parseUrl(t.urlAfterRedirects).fragment))
                        }))
                    }
                }, {
                    key: "consumeScrollEvents",
                    value: function() {
                        var e = this;
                        return this.router.events.subscribe((function(t) {
                            t instanceof _p && (t.position ? "top" === e.options.scrollPositionRestoration ? e.viewportScroller.scrollToPosition([0, 0]) : "enabled" === e.options.scrollPositionRestoration && e.viewportScroller.scrollToPosition(t.position) : t.anchor && "enabled" === e.options.anchorScrolling ? e.viewportScroller.scrollToAnchor(t.anchor) : "disabled" !== e.options.scrollPositionRestoration && e.viewportScroller.scrollToPosition([0, 0]))
                        }))
                    }
                }, {
                    key: "scheduleScrollEvent",
                    value: function(e, t) {
                        this.router.triggerEvent(new _p(e, "popstate" === this.lastSource ? this.store[this.restoredId] : null, t))
                    }
                }, {
                    key: "ngOnDestroy",
                    value: function() {
                        this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe()
                    }
                }]), e
            }()).\u0275fac = function(e) {
                ya()
            }, _m.\u0275dir = gt({
                type: _m
            }), _m),
            Im = new He("ROUTER_CONFIGURATION"),
            Rm = new He("ROUTER_FORROOT_GUARD"),
            Pm = [Ou, {
                provide: zp,
                useClass: Bp
            }, {
                provide: bm,
                useFactory: function(e, t, n, r, i, a, o) {
                    var s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : {},
                        u = arguments.length > 8 ? arguments[8] : void 0,
                        l = arguments.length > 9 ? arguments[9] : void 0,
                        c = new bm(null, e, t, n, r, i, a, Pp(o));
                    if (u && (c.urlHandlingStrategy = u), l && (c.routeReuseStrategy = l), s.errorHandler && (c.errorHandler = s.errorHandler), s.malformedUriErrorHandler && (c.malformedUriErrorHandler = s.malformedUriErrorHandler), s.enableTracing) {
                        var h = su();
                        c.events.subscribe((function(e) {
                            h.logGroup("Router Event: ".concat(e.constructor.name)), h.log(e.toString()), h.log(e), h.logGroupEnd()
                        }))
                    }
                    return s.onSameUrlNavigation && (c.onSameUrlNavigation = s.onSameUrlNavigation), s.paramsInheritanceStrategy && (c.paramsInheritanceStrategy = s.paramsInheritanceStrategy), s.urlUpdateStrategy && (c.urlUpdateStrategy = s.urlUpdateStrategy), s.relativeLinkResolution && (c.relativeLinkResolution = s.relativeLinkResolution), c
                },
                deps: [zp, wm, Ou, ta, Xs, Ts, hm, Im, [function() {
                        return function e() {
                            _classCallCheck(this, e)
                        }
                    }(), new oe],
                    [function() {
                        return function e() {
                            _classCallCheck(this, e)
                        }
                    }(), new oe]
                ]
            }, wm, {
                provide: cy,
                useFactory: function(e) {
                    return e.routerState.root
                },
                deps: [bm]
            }, {
                provide: Xs,
                useClass: tu
            }, Am, xm, function() {
                function e() {
                    _classCallCheck(this, e)
                }
                return _createClass(e, [{
                    key: "preload",
                    value: function(e, t) {
                        return t().pipe(Rd((function() {
                            return ef(null)
                        })))
                    }
                }]), e
            }(), {
                provide: Im,
                useValue: {
                    enableTracing: !1
                }
            }];

        function Nm() {
            return new qs("Router", bm)
        }
        var Dm, jm = ((Dm = function() {
            function e(t, n) {
                _classCallCheck(this, e)
            }
            return _createClass(e, null, [{
                key: "forRoot",
                value: function(t, n) {
                    return {
                        ngModule: e,
                        providers: [Pm, Um(t), {
                                provide: Rm,
                                useFactory: Lm,
                                deps: [
                                    [bm, new oe, new ue]
                                ]
                            }, {
                                provide: Im,
                                useValue: n || {}
                            }, {
                                provide: bu,
                                useFactory: Mm,
                                deps: [cu, [new ae(Tu), new oe], Im]
                            }, {
                                provide: Om,
                                useFactory: Fm,
                                deps: [bm, el, Im]
                            }, {
                                provide: Tm,
                                useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : xm
                            }, {
                                provide: qs,
                                multi: !0,
                                useFactory: Nm
                            },
                            [Vm, {
                                provide: us,
                                multi: !0,
                                useFactory: zm,
                                deps: [Vm]
                            }, {
                                provide: Zm,
                                useFactory: Bm,
                                deps: [Vm]
                            }, {
                                provide: ps,
                                multi: !0,
                                useExisting: Zm
                            }]
                        ]
                    }
                }
            }, {
                key: "forChild",
                value: function(t) {
                    return {
                        ngModule: e,
                        providers: [Um(t)]
                    }
                }
            }]), e
        }()).\u0275mod = yt({
            type: Dm
        }), Dm.\u0275inj = de({
            factory: function(e) {
                return new(e || Dm)(Ge(Rm, 8), Ge(bm, 8))
            }
        }), Dm);

        function Fm(e, t, n) {
            return n.scrollOffset && t.setOffset(n.scrollOffset), new Om(e, t, n)
        }

        function Mm(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return n.useHash ? new Au(e, t) : new xu(e, t)
        }

        function Lm(e) {
            if (e) throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");
            return "guarded"
        }

        function Um(e) {
            return [{
                provide: na,
                multi: !0,
                useValue: e
            }, {
                provide: hm,
                multi: !0,
                useValue: e
            }]
        }
        var Hm, Vm = ((Hm = function() {
            function e(t) {
                _classCallCheck(this, e), this.injector = t, this.initNavigation = !1, this.resultOfPreactivationDone = new A
            }
            return _createClass(e, [{
                key: "appInitializer",
                value: function() {
                    var e = this;
                    return this.injector.get(du, Promise.resolve(null)).then((function() {
                        var t = null,
                            n = new Promise((function(e) {
                                return t = e
                            })),
                            r = e.injector.get(bm),
                            i = e.injector.get(Im);
                        if (e.isLegacyDisabled(i) || e.isLegacyEnabled(i)) t(!0);
                        else if ("disabled" === i.initialNavigation) r.setUpLocationChangeListener(), t(!0);
                        else {
                            if ("enabled" !== i.initialNavigation) throw new Error("Invalid initialNavigation options: '".concat(i.initialNavigation, "'"));
                            r.hooks.afterPreactivation = function() {
                                return e.initNavigation ? ef(null) : (e.initNavigation = !0, t(!0), e.resultOfPreactivationDone)
                            }, r.initialNavigation()
                        }
                        return n
                    }))
                }
            }, {
                key: "bootstrapListener",
                value: function(e) {
                    var t = this.injector.get(Im),
                        n = this.injector.get(Am),
                        r = this.injector.get(Om),
                        i = this.injector.get(bm),
                        a = this.injector.get(Js);
                    e === a.components[0] && (this.isLegacyEnabled(t) ? i.initialNavigation() : this.isLegacyDisabled(t) && i.setUpLocationChangeListener(), n.setUpPreloading(), r.init(), i.resetRootComponentType(a.componentTypes[0]), this.resultOfPreactivationDone.next(null), this.resultOfPreactivationDone.complete())
                }
            }, {
                key: "isLegacyEnabled",
                value: function(e) {
                    return "legacy_enabled" === e.initialNavigation || !0 === e.initialNavigation || void 0 === e.initialNavigation
                }
            }, {
                key: "isLegacyDisabled",
                value: function(e) {
                    return "legacy_disabled" === e.initialNavigation || !1 === e.initialNavigation
                }
            }]), e
        }()).\u0275fac = function(e) {
            return new(e || Hm)(Ge(ta))
        }, Hm.\u0275prov = fe({
            token: Hm,
            factory: Hm.\u0275fac
        }), Hm);

        function zm(e) {
            return e.appInitializer.bind(e)
        }

        function Bm(e) {
            return e.bootstrapListener.bind(e)
        }
        var qm, Qm, Wm, Km, Zm = new He("Router Initializer"),
            Gm = [],
            Jm = ((Km = function e() {
                _classCallCheck(this, e)
            }).\u0275mod = yt({
                type: Km
            }), Km.\u0275inj = de({
                factory: function(e) {
                    return new(e || Km)
                },
                imports: [
                    [jm.forRoot(Gm)], jm
                ]
            }), Km),
            $m = ((Wm = function e() {
                _classCallCheck(this, e)
            }).\u0275mod = yt({
                type: Wm
            }), Wm.\u0275inj = de({
                factory: function(e) {
                    return new(e || Wm)
                },
                providers: [{
                    provide: Tu,
                    useValue: "/"
                }],
                imports: [
                    [Pl, Yh, Av, Ov, Jm]
                ]
            }), Wm),
            Xm = ((Qm = function e() {
                _classCallCheck(this, e), this.consultadoSource = new A, this.consultadoObserver = this.consultadoSource.asObservable()
            }).\u0275prov = fe({
                token: Qm,
                factory: Qm.\u0275fac = function(e) {
                    return new(e || Qm)
                }
            }), Qm),
            Ym = ((qm = function() {
                function e() {
                    _classCallCheck(this, e), this.state = new Map, this.stateSource = new A, this.stateObserver = this.stateSource.asObservable()
                }
                return _createClass(e, [{
                    key: "update",
                    value: function(e, t) {
                        this.state.set(e, t), this.stateSource.next(this.state)
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        return this.state.get(e)
                    }
                }, {
                    key: "updateProperties",
                    value: function(e) {
                        for (var t in e) this.update(t, e[t].currentValue)
                    }
                }]), e
            }()).\u0275fac = function(e) {
                return new(e || qm)
            }, qm.\u0275prov = fe({
                token: qm,
                factory: qm.\u0275fac
            }), qm),
            eg = "https://prod-08.eastus.logic.azure.com:443/workflows/d4e73b43c4104acfb6cb6917428419f7/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=P6wUjVjx1TuVdhZQMXL2l2MvDZrvL7uoI9BZJb7i2yQ";

        function tg(e, t, n, r) {
            return new(n || (n = Promise))((function(i, a) {
                function o(e) {
                    try {
                        u(r.next(e))
                    } catch (t) {
                        a(t)
                    }
                }

                function s(e) {
                    try {
                        u(r.throw(e))
                    } catch (t) {
                        a(t)
                    }
                }

                function u(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                        e(t)
                    }))).then(o, s)
                }
                u((r = r.apply(e, t || [])).next())
            }))
        }
        var ng, rg = ((ng = function(e) {
            _inherits(n, e);
            var t = _createSuper(n);

            function n(e, r) {
                var i;
                return _classCallCheck(this, n), (i = t.call(this, r)).http = e, i.stateService = r, i
            }
            return _createClass(n, [{
                key: "getCustomers",
                value: function() {
                    return tg(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (console.log(eg), this.http.post(eg, {}).toPromise()));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }]), n
        }(function() {
            function e(t) {
                var n = this;
                _classCallCheck(this, e), this.headers = new Ud, this.setHeaders(t.get("token"), t.get("tenant")), t.stateObserver.subscribe((function(e) {
                    n.setHeaders(t.get("token"), t.get("tenant"))
                }))
            }
            return _createClass(e, [{
                key: "setHeaders",
                value: function(e, t) {
                    e && this.addHeader("access_token", e), t && this.addHeader("X-Requested-With", t)
                }
            }, {
                key: "addHeader",
                value: function(e, t) {
                    this.headers = this.headers.set(e, t)
                }
            }, {
                key: "getHeaders",
                value: function() {
                    return this.headers
                }
            }]), e
        }())).\u0275fac = function(e) {
            return new(e || ng)(Ge(hv), Ge(Ym))
        }, ng.\u0275prov = fe({
            token: ng,
            factory: ng.\u0275fac
        }), ng);

        function ig(e, t) {
            if (1 & e && (_a(0, "div"), _a(1, "mat-card", 4), _a(2, "mat-card-header"), _a(3, "mat-card-title"), La(4), ka(), _a(5, "mat-card-subtitle"), La(6), ba(7, "br"), La(8), ba(9, "br"), La(10), ka(), ka(), ka(), ka()), 2 & e) {
                var n = t.$implicit;
                pr(4), Ua(n.email), pr(2), Ha(" phone: ", n.phone, " "), pr(2), Ha(" name: ", n.name, " "), pr(2), Ha(" lastName: ", n.lastName, " ")
            }
        }
        var ag, og, sg, ug = ((og = function() {
                function e(t, n) {
                    _classCallCheck(this, e), this.customerService = t, this.consultado = new Jo, this.stateService = n
                }
                return _createClass(e, [{
                    key: "getCustomers",
                    value: function() {
                        return tg(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        this.customers = this.customerService.getCustomers(), this.consultado.emit("Hemos realizado la consulta con exito!!");
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })))
                    }
                }, {
                    key: "ngOnInit",
                    value: function() {
                        this.getCustomers()
                    }
                }]), e
            }()).\u0275fac = function(e) {
                return new(e || og)(pa(rg), pa(Ym))
            }, og.\u0275cmp = ft({
                type: og,
                selectors: [
                    ["list-customers"]
                ],
                outputs: {
                    consultado: "consultado"
                },
                features: [io([rg])],
                decls: 6,
                vars: 3,
                consts: [
                    ["align", "right"],
                    ["mat-mini-fab", "", "color", "primary", "aria-label", "Example icon button with a filter list icon", 3, "click"],
                    [1, "material-icons"],
                    [4, "ngFor", "ngForOf"],
                    [2, "margin-bottom", "20px !important", "margin-top", "20px !important"]
                ],
                template: function(e, t) {
                    var n, r, i, a, o;
                    1 & e && (_a(0, "p", 0), _a(1, "button", 1), Sa("click", (function() {
                        return t.getCustomers()
                    })), _a(2, "span", 2), La(3, "refresh"), ka(), ka(), ka(), function(e, t, n, r, i, a, o, s) {
                        var u = qt(),
                            l = Qt(),
                            c = l.firstCreatePass ? function(e, t, n, r, i, a, o, s, u) {
                                var l = t.consts,
                                    c = Tr(t, n[6], 4, 0, "div", Ht(l, 3));
                                Fr(t, n, c, Ht(l, void 0)), dn(t, c);
                                var h = c.tViews = Nr(2, -1, r, 11, 4, t.directiveRegistry, t.pipeRegistry, null, t.schemas, l),
                                    f = Dr(0, null, 2, -1, null, null);
                                return f.injectorIndex = c.injectorIndex, h.node = f, null !== t.queries && (t.queries.template(t, c), h.queries = t.queries.embeddedTView(c)), c
                            }(0, l, u, t) : l.data[23];
                        Kt(c, !1);
                        var h = u[11].createComment("");
                        wi(l, u, h, c), er(h, u), Xr(u, u[23] = Zr(h, u, h, c)), Tt(c) && Rr(l, u, c)
                    }(0, ig), function(e, t) {
                        var n, r = Qt();
                        r.firstCreatePass ? (n = function(e, t) {
                            if (t)
                                for (var n = t.length - 1; n >= 0; n--) {
                                    var r = t[n];
                                    if ("async" === r.name) return r
                                }
                            throw new Error("The pipe 'async' could not be found!")
                        }(0, r.pipeRegistry), r.data[24] = n, n.onDestroy && (r.destroyHooks || (r.destroyHooks = [])).push(24, n.onDestroy)) : n = r.data[24];
                        var i = n.factory || (n.factory = kt(n.type)),
                            a = Ke(pa),
                            o = i();
                        Ke(a),
                            function(e, t, n, r) {
                                24 >= e.data.length && (e.data[24] = null, e.blueprint[24] = null), t[24] = r
                            }(r, qt(), 0, o)
                    }()), 2 & e && (pr(4), ma("ngForOf", (n = 5, r = 1, i = t.customers, a = qt(), o = function(e, t) {
                        return e[t + 19]
                    }(a, n), function(e, t) {
                        return ca.isWrapped(t) && (t = ca.unwrap(t), e[zt.lFrame.bindingIndex] = dr), t
                    }(a, function(e, t) {
                        return e[1].data[t + 19].pure
                    }(a, n) ? function(e, t, n, r, i, a) {
                        var o = t + n;
                        return da(e, o, i) ? function(e, t, n) {
                            return e[t] = n
                        }(e, o + 1, a ? r.call(a, i) : r(i)) : function(e, t) {
                            var n = e[t];
                            return n === dr ? void 0 : n
                        }(e, o + 1)
                    }(a, function() {
                        var e = zt.lFrame,
                            t = e.bindingRootIndex;
                        return -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
                    }(), r, o.transform, i, o) : o.transform(i)))))
                },
                directives: [gd, Ku, Ad, Od, Td, xd],
                pipes: [Xu],
                styles: [""]
            }), og.\u0275prov = fe({
                token: og,
                factory: og.\u0275fac
            }), og),
            lg = ((ag = function() {
                function e(t, n, r) {
                    var i = this;
                    _classCallCheck(this, e), this.eventService = t, this.stateService = n, this.router = r, this.consultado = new Jo, console.log("component environment: dev-app"), this.stateService = n, t.consultadoObserver.subscribe((function(e) {
                        i.consultado.emit(e)
                    }))
                }
                return _createClass(e, [{
                    key: "ngOnInit",
                    value: function() {
                        this.stateService.update("title", this.title), this.stateService.update("token", this.token), this.stateService.update("tenant", this.tenant), this.name ? this.stateService.update("name", this.name) : console.warn("The property name is mandatory for each webcomponent"), this.crearRutasDinamicas()
                    }
                }, {
                    key: "ngOnChanges",
                    value: function(e) {
                        this.stateService.updateProperties(e), this.stateService.update("token", this.token), this.stateService.update("tenant", this.tenant)
                    }
                }, {
                    key: "crearRutasDinamicas",
                    value: function() {
                        var e = this;
                        Gm.forEach((function(t) {
                            e.router.config.push({
                                outlet: e.name,
                                path: t.path,
                                component: t.component
                            })
                        }))
                    }
                }, {
                    key: "getRouterLink",
                    value: function(e, t) {
                        return {
                            outlets: _defineProperty({}, this.stateService.get("name"), e)
                        }
                    }
                }]), e
            }()).\u0275fac = function(e) {
                return new(e || ag)(pa(Xm), pa(Ym), pa(bm))
            }, ag.\u0275cmp = ft({
                type: ag,
                selectors: [
                    ["getcustomers-sura"]
                ],
                inputs: {
                    token: "token",
                    tenant: "tenant",
                    title: "title",
                    name: "name"
                },
                outputs: {
                    consultado: "consultado"
                },
                features: [io([Xm, Ym]), Za],
                decls: 6,
                vars: 1,
                consts: [
                    [2, "text-align", "center !important"],
                    ["src", "https://stpoccms.blob.core.windows.net/customer/Sura-Seguros-large.jpg", "width", "300"]
                ],
                template: function(e, t) {
                    1 & e && (_a(0, "div", 0), ba(1, "img", 1), ka(), _a(2, "div", 0), _a(3, "h3"), La(4), ka(), ka(), ba(5, "list-customers")), 2 & e && (pr(4), Ua(t.title))
                },
                directives: [ug],
                styles: [".border[_ngcontent-%COMP%]{border:#add8e6;border-style:dashed}.border-1[_ngcontent-%COMP%]{border:red;border-style:dashed}"]
            }), ag.\u0275prov = fe({
                token: ag,
                factory: ag.\u0275fac
            }), ag),
            cg = (sg = Element.prototype).matches || sg.matchesSelector || sg.mozMatchesSelector || sg.msMatchesSelector || sg.oMatchesSelector || sg.webkitMatchesSelector,
            hg = {
                schedule: function(e, t) {
                    var n = setTimeout(e, t);
                    return function() {
                        return clearTimeout(n)
                    }
                },
                scheduleBeforeRender: function(e) {
                    if ("undefined" == typeof window) return hg.schedule(e, 0);
                    if (void 0 === window.requestAnimationFrame) return hg.schedule(e, 16);
                    var t = window.requestAnimationFrame(e);
                    return function() {
                        return window.cancelAnimationFrame(t)
                    }
                }
            };

        function fg(e, t, n) {
            var r = n;
            return function(e) {
                return !!e && e.nodeType === Node.ELEMENT_NODE
            }(e) && t.some((function(t, n) {
                return !("*" === t || ! function(e, t) {
                    return cg.call(e, t)
                }(e, t) || (r = n, 0))
            })), r
        }
        var dg, vg = function() {
                function e(t, n) {
                    _classCallCheck(this, e), this.component = t, this.injector = n, this.componentFactory = n.get(so).resolveComponentFactory(t)
                }
                return _createClass(e, [{
                    key: "create",
                    value: function(e) {
                        return new pg(this.componentFactory, e)
                    }
                }]), e
            }(),
            pg = function() {
                function e(t, n) {
                    _classCallCheck(this, e), this.componentFactory = t, this.injector = n, this.inputChanges = null, this.implementsOnChanges = !1, this.scheduledChangeDetectionFn = null, this.scheduledDestroyFn = null, this.initialInputValues = new Map, this.uninitializedInputs = new Set
                }
                return _createClass(e, [{
                    key: "connect",
                    value: function(e) {
                        if (null !== this.scheduledDestroyFn) return this.scheduledDestroyFn(), void(this.scheduledDestroyFn = null);
                        this.componentRef || this.initializeComponent(e)
                    }
                }, {
                    key: "disconnect",
                    value: function() {
                        var e = this;
                        this.componentRef && null === this.scheduledDestroyFn && (this.scheduledDestroyFn = hg.schedule((function() {
                            e.componentRef && (e.componentRef.destroy(), e.componentRef = null)
                        }), 10))
                    }
                }, {
                    key: "getInputValue",
                    value: function(e) {
                        return this.componentRef ? this.componentRef.instance[e] : this.initialInputValues.get(e)
                    }
                }, {
                    key: "setInputValue",
                    value: function(e, t) {
                        var n, r;
                        this.componentRef ? (n = t) === (r = this.getInputValue(e)) || n != n && r != r || (this.recordInputChange(e, t), this.componentRef.instance[e] = t, this.scheduleDetectChanges()) : this.initialInputValues.set(e, t)
                    }
                }, {
                    key: "initializeComponent",
                    value: function(e) {
                        var t = ta.create({
                                providers: [],
                                parent: this.injector
                            }),
                            n = function(e, t) {
                                var n = e.childNodes,
                                    r = t.map((function() {
                                        return []
                                    })),
                                    i = -1;
                                t.some((function(e, t) {
                                    return "*" === e && (i = t, !0)
                                }));
                                for (var a = 0, o = n.length; a < o; ++a) {
                                    var s = n[a],
                                        u = fg(s, t, i); - 1 !== u && r[u].push(s)
                                }
                                return r
                            }(e, this.componentFactory.ngContentSelectors);
                        this.componentRef = this.componentFactory.create(t, n, e), this.implementsOnChanges = "function" == typeof this.componentRef.instance.ngOnChanges, this.initializeInputs(), this.initializeOutputs(), this.detectChanges(), this.injector.get(Js).attachView(this.componentRef.hostView)
                    }
                }, {
                    key: "initializeInputs",
                    value: function() {
                        var e = this;
                        this.componentFactory.inputs.forEach((function(t) {
                            var n = t.propName;
                            e.initialInputValues.has(n) ? e.setInputValue(n, e.initialInputValues.get(n)) : e.uninitializedInputs.add(n)
                        })), this.initialInputValues.clear()
                    }
                }, {
                    key: "initializeOutputs",
                    value: function() {
                        var e = this,
                            t = this.componentFactory.outputs.map((function(t) {
                                var n = t.propName,
                                    r = t.templateName;
                                return e.componentRef.instance[n].pipe(U((function(e) {
                                    return {
                                        name: r,
                                        value: e
                                    }
                                })))
                            }));
                        this.events = G.apply(void 0, _toConsumableArray(t))
                    }
                }, {
                    key: "callNgOnChanges",
                    value: function() {
                        if (this.implementsOnChanges && null !== this.inputChanges) {
                            var e = this.inputChanges;
                            this.inputChanges = null, this.componentRef.instance.ngOnChanges(e)
                        }
                    }
                }, {
                    key: "scheduleDetectChanges",
                    value: function() {
                        var e = this;
                        this.scheduledChangeDetectionFn || (this.scheduledChangeDetectionFn = hg.scheduleBeforeRender((function() {
                            e.scheduledChangeDetectionFn = null, e.detectChanges()
                        })))
                    }
                }, {
                    key: "recordInputChange",
                    value: function(e, t) {
                        if (!this.componentRef || this.implementsOnChanges) {
                            null === this.inputChanges && (this.inputChanges = {});
                            var n = this.inputChanges[e];
                            if (n) n.currentValue = t;
                            else {
                                var r = this.uninitializedInputs.has(e);
                                this.uninitializedInputs.delete(e);
                                var i = r ? void 0 : this.getInputValue(e);
                                this.inputChanges[e] = new Ka(i, t, r)
                            }
                        }
                    }
                }, {
                    key: "detectChanges",
                    value: function() {
                        this.componentRef && (this.callNgOnChanges(), this.componentRef.changeDetectorRef.detectChanges())
                    }
                }]), e
            }(),
            yg = function(e) {
                _inherits(n, _wrapNativeSuper(HTMLElement));
                var t = _createSuper(n);

                function n() {
                    var e;
                    return _classCallCheck(this, n), (e = t.apply(this, arguments)).ngElementEventsSubscription = null, e
                }
                return n
            }(),
            mg = ((dg = function() {
                function e(t) {
                    _classCallCheck(this, e), this.injector = t
                }
                return _createClass(e, [{
                    key: "ngDoBootstrap",
                    value: function() {
                        var e, t, n, r, i, a, o = (e = lg, t = {
                            injector: this.injector
                        }, n = function(e, t) {
                            return t.get(so).resolveComponentFactory(e).inputs
                        }(e, t.injector), r = t.strategyFactory || new vg(e, t.injector), i = function(e) {
                            var t = {};
                            return e.forEach((function(e) {
                                var n, r = e.propName,
                                    i = e.templateName;
                                t[(n = i, n.replace(/[A-Z]/g, (function(e) {
                                    return "-".concat(e.toLowerCase())
                                })))] = r
                            })), t
                        }(n), (a = function(e) {
                            _inherits(a, e);
                            var n = _createSuper(a);

                            function a(e) {
                                var i;
                                return _classCallCheck(this, a), (i = n.call(this)).ngElementStrategy = r.create(e || t.injector), i
                            }
                            return _createClass(a, [{
                                key: "attributeChangedCallback",
                                value: function(e, n, a, o) {
                                    this.ngElementStrategy || (this.ngElementStrategy = r.create(t.injector)), this.ngElementStrategy.setInputValue(i[e], a)
                                }
                            }, {
                                key: "connectedCallback",
                                value: function() {
                                    var e = this;
                                    this.ngElementStrategy || (this.ngElementStrategy = r.create(t.injector)), this.ngElementStrategy.connect(this), this.ngElementEventsSubscription = this.ngElementStrategy.events.subscribe((function(t) {
                                        var n = function(e, t, n) {
                                            if ("function" != typeof CustomEvent) {
                                                var r = e.createEvent("CustomEvent");
                                                return r.initCustomEvent(t, !1, !1, n), r
                                            }
                                            return new CustomEvent(t, {
                                                bubbles: !1,
                                                cancelable: !1,
                                                detail: n
                                            })
                                        }(e.ownerDocument, t.name, t.value);
                                        e.dispatchEvent(n)
                                    }))
                                }
                            }, {
                                key: "disconnectedCallback",
                                value: function() {
                                    this.ngElementStrategy && this.ngElementStrategy.disconnect(), this.ngElementEventsSubscription && (this.ngElementEventsSubscription.unsubscribe(), this.ngElementEventsSubscription = null)
                                }
                            }]), a
                        }(yg)).observedAttributes = Object.keys(i), n.map((function(e) {
                            return e.propName
                        })).forEach((function(e) {
                            Object.defineProperty(a.prototype, e, {
                                get: function() {
                                    return this.ngElementStrategy.getInputValue(e)
                                },
                                set: function(t) {
                                    this.ngElementStrategy.setInputValue(e, t)
                                },
                                configurable: !0,
                                enumerable: !0
                            })
                        })), a);
                        customElements.define("getcustomers-sura", o), console.log("web component ready: <getcustomers-sura>")
                    }
                }]), e
            }()).\u0275mod = yt({
                type: dg
            }), dg.\u0275inj = de({
                factory: function(e) {
                    return new(e || dg)(Ge(ta))
                },
                providers: [],
                imports: [
                    [Pl, $m]
                ]
            }), dg);
        Il().bootstrapModule(mg).catch((function(e) {
            return console.error(e)
        }))
    },
    zn8P: function(e, t) {
        function n(e) {
            return Promise.resolve().then((function() {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }))
        }
        n.keys = function() {
            return []
        }, n.resolve = n, e.exports = n, n.id = "zn8P"
    }
});