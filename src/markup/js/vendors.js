/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
	'use strict';
	'object' == typeof module && 'object' == typeof module.exports
		? (module.exports = e.document
				? t(e, !0)
				: function (e) {
						if (!e.document)
							throw new Error('jQuery requires a window with a document');
						return t(e);
					})
		: t(e);
})('undefined' != typeof window ? window : this, function (ie, e) {
	'use strict';
	var oe = [],
		r = Object.getPrototypeOf,
		ae = oe.slice,
		g = oe.flat
			? function (e) {
					return oe.flat.call(e);
				}
			: function (e) {
					return oe.concat.apply([], e);
				},
		s = oe.push,
		se = oe.indexOf,
		n = {},
		i = n.toString,
		ue = n.hasOwnProperty,
		o = ue.toString,
		a = o.call(Object),
		le = {},
		v = function (e) {
			return (
				'function' == typeof e &&
				'number' != typeof e.nodeType &&
				'function' != typeof e.item
			);
		},
		y = function (e) {
			return null != e && e === e.window;
		},
		C = ie.document,
		u = { type: !0, src: !0, nonce: !0, noModule: !0 };
	function m(e, t, n) {
		var r,
			i,
			o = (n = n || C).createElement('script');
		if (((o.text = e), t))
			for (r in u)
				(i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
					o.setAttribute(r, i);
		n.head.appendChild(o).parentNode.removeChild(o);
	}
	function x(e) {
		return null == e
			? e + ''
			: 'object' == typeof e || 'function' == typeof e
				? n[i.call(e)] || 'object'
				: typeof e;
	}
	var t = '3.7.1',
		l = /HTML$/i,
		ce = function (e, t) {
			return new ce.fn.init(e, t);
		};
	function c(e) {
		var t = !!e && 'length' in e && e.length,
			n = x(e);
		return (
			!v(e) &&
			!y(e) &&
			('array' === n ||
				0 === t ||
				('number' == typeof t && 0 < t && t - 1 in e))
		);
	}
	function fe(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
	}
	(ce.fn = ce.prototype =
		{
			jquery: t,
			constructor: ce,
			length: 0,
			toArray: function () {
				return ae.call(this);
			},
			get: function (e) {
				return null == e
					? ae.call(this)
					: e < 0
						? this[e + this.length]
						: this[e];
			},
			pushStack: function (e) {
				var t = ce.merge(this.constructor(), e);
				return (t.prevObject = this), t;
			},
			each: function (e) {
				return ce.each(this, e);
			},
			map: function (n) {
				return this.pushStack(
					ce.map(this, function (e, t) {
						return n.call(e, t, e);
					})
				);
			},
			slice: function () {
				return this.pushStack(ae.apply(this, arguments));
			},
			first: function () {
				return this.eq(0);
			},
			last: function () {
				return this.eq(-1);
			},
			even: function () {
				return this.pushStack(
					ce.grep(this, function (e, t) {
						return (t + 1) % 2;
					})
				);
			},
			odd: function () {
				return this.pushStack(
					ce.grep(this, function (e, t) {
						return t % 2;
					})
				);
			},
			eq: function (e) {
				var t = this.length,
					n = +e + (e < 0 ? t : 0);
				return this.pushStack(0 <= n && n < t ? [this[n]] : []);
			},
			end: function () {
				return this.prevObject || this.constructor();
			},
			push: s,
			sort: oe.sort,
			splice: oe.splice,
		}),
		(ce.extend = ce.fn.extend =
			function () {
				var e,
					t,
					n,
					r,
					i,
					o,
					a = arguments[0] || {},
					s = 1,
					u = arguments.length,
					l = !1;
				for (
					'boolean' == typeof a && ((l = a), (a = arguments[s] || {}), s++),
						'object' == typeof a || v(a) || (a = {}),
						s === u && ((a = this), s--);
					s < u;
					s++
				)
					if (null != (e = arguments[s]))
						for (t in e)
							(r = e[t]),
								'__proto__' !== t &&
									a !== r &&
									(l && r && (ce.isPlainObject(r) || (i = Array.isArray(r)))
										? ((n = a[t]),
											(o =
												i && !Array.isArray(n)
													? []
													: i || ce.isPlainObject(n)
														? n
														: {}),
											(i = !1),
											(a[t] = ce.extend(l, o, r)))
										: void 0 !== r && (a[t] = r));
				return a;
			}),
		ce.extend({
			expando: 'jQuery' + (t + Math.random()).replace(/\D/g, ''),
			isReady: !0,
			error: function (e) {
				throw new Error(e);
			},
			noop: function () {},
			isPlainObject: function (e) {
				var t, n;
				return (
					!(!e || '[object Object]' !== i.call(e)) &&
					(!(t = r(e)) ||
						('function' ==
							typeof (n = ue.call(t, 'constructor') && t.constructor) &&
							o.call(n) === a))
				);
			},
			isEmptyObject: function (e) {
				var t;
				for (t in e) return !1;
				return !0;
			},
			globalEval: function (e, t, n) {
				m(e, { nonce: t && t.nonce }, n);
			},
			each: function (e, t) {
				var n,
					r = 0;
				if (c(e)) {
					for (n = e.length; r < n; r++)
						if (!1 === t.call(e[r], r, e[r])) break;
				} else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
				return e;
			},
			text: function (e) {
				var t,
					n = '',
					r = 0,
					i = e.nodeType;
				if (!i) while ((t = e[r++])) n += ce.text(t);
				return 1 === i || 11 === i
					? e.textContent
					: 9 === i
						? e.documentElement.textContent
						: 3 === i || 4 === i
							? e.nodeValue
							: n;
			},
			makeArray: function (e, t) {
				var n = t || [];
				return (
					null != e &&
						(c(Object(e))
							? ce.merge(n, 'string' == typeof e ? [e] : e)
							: s.call(n, e)),
					n
				);
			},
			inArray: function (e, t, n) {
				return null == t ? -1 : se.call(t, e, n);
			},
			isXMLDoc: function (e) {
				var t = e && e.namespaceURI,
					n = e && (e.ownerDocument || e).documentElement;
				return !l.test(t || (n && n.nodeName) || 'HTML');
			},
			merge: function (e, t) {
				for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
				return (e.length = i), e;
			},
			grep: function (e, t, n) {
				for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
					!t(e[i], i) !== a && r.push(e[i]);
				return r;
			},
			map: function (e, t, n) {
				var r,
					i,
					o = 0,
					a = [];
				if (c(e))
					for (r = e.length; o < r; o++)
						null != (i = t(e[o], o, n)) && a.push(i);
				else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
				return g(a);
			},
			guid: 1,
			support: le,
		}),
		'function' == typeof Symbol &&
			(ce.fn[Symbol.iterator] = oe[Symbol.iterator]),
		ce.each(
			'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
				' '
			),
			function (e, t) {
				n['[object ' + t + ']'] = t.toLowerCase();
			}
		);
	var pe = oe.pop,
		de = oe.sort,
		he = oe.splice,
		ge = '[\\x20\\t\\r\\n\\f]',
		ve = new RegExp('^' + ge + '+|((?:^|[^\\\\])(?:\\\\.)*)' + ge + '+$', 'g');
	ce.contains = function (e, t) {
		var n = t && t.parentNode;
		return (
			e === n ||
			!(
				!n ||
				1 !== n.nodeType ||
				!(e.contains
					? e.contains(n)
					: e.compareDocumentPosition && 16 & e.compareDocumentPosition(n))
			)
		);
	};
	var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
	function p(e, t) {
		return t
			? '\0' === e
				? '\ufffd'
				: e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' '
			: '\\' + e;
	}
	ce.escapeSelector = function (e) {
		return (e + '').replace(f, p);
	};
	var ye = C,
		me = s;
	!(function () {
		var e,
			b,
			w,
			o,
			a,
			T,
			r,
			C,
			d,
			i,
			k = me,
			S = ce.expando,
			E = 0,
			n = 0,
			s = W(),
			c = W(),
			u = W(),
			h = W(),
			l = function (e, t) {
				return e === t && (a = !0), 0;
			},
			f =
				'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
			t =
				'(?:\\\\[\\da-fA-F]{1,6}' +
				ge +
				'?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
			p =
				'\\[' +
				ge +
				'*(' +
				t +
				')(?:' +
				ge +
				'*([*^$|!~]?=)' +
				ge +
				'*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
				t +
				'))|)' +
				ge +
				'*\\]',
			g =
				':(' +
				t +
				')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
				p +
				')*)|.*)\\)|)',
			v = new RegExp(ge + '+', 'g'),
			y = new RegExp('^' + ge + '*,' + ge + '*'),
			m = new RegExp('^' + ge + '*([>+~]|' + ge + ')' + ge + '*'),
			x = new RegExp(ge + '|>'),
			j = new RegExp(g),
			A = new RegExp('^' + t + '$'),
			D = {
				ID: new RegExp('^#(' + t + ')'),
				CLASS: new RegExp('^\\.(' + t + ')'),
				TAG: new RegExp('^(' + t + '|[*])'),
				ATTR: new RegExp('^' + p),
				PSEUDO: new RegExp('^' + g),
				CHILD: new RegExp(
					'^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
						ge +
						'*(even|odd|(([+-]|)(\\d*)n|)' +
						ge +
						'*(?:([+-]|)' +
						ge +
						'*(\\d+)|))' +
						ge +
						'*\\)|)',
					'i'
				),
				bool: new RegExp('^(?:' + f + ')$', 'i'),
				needsContext: new RegExp(
					'^' +
						ge +
						'*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
						ge +
						'*((?:-\\d)?\\d*)' +
						ge +
						'*\\)|)(?=[^-]|$)',
					'i'
				),
			},
			N = /^(?:input|select|textarea|button)$/i,
			q = /^h\d$/i,
			L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			H = /[+~]/,
			O = new RegExp('\\\\[\\da-fA-F]{1,6}' + ge + '?|\\\\([^\\r\\n\\f])', 'g'),
			P = function (e, t) {
				var n = '0x' + e.slice(1) - 65536;
				return (
					t ||
					(n < 0
						? String.fromCharCode(n + 65536)
						: String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
				);
			},
			M = function () {
				V();
			},
			R = J(
				function (e) {
					return !0 === e.disabled && fe(e, 'fieldset');
				},
				{ dir: 'parentNode', next: 'legend' }
			);
		try {
			k.apply((oe = ae.call(ye.childNodes)), ye.childNodes),
				oe[ye.childNodes.length].nodeType;
		} catch (e) {
			k = {
				apply: function (e, t) {
					me.apply(e, ae.call(t));
				},
				call: function (e) {
					me.apply(e, ae.call(arguments, 1));
				},
			};
		}
		function I(t, e, n, r) {
			var i,
				o,
				a,
				s,
				u,
				l,
				c,
				f = e && e.ownerDocument,
				p = e ? e.nodeType : 9;
			if (
				((n = n || []),
				'string' != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
			)
				return n;
			if (!r && (V(e), (e = e || T), C)) {
				if (11 !== p && (u = L.exec(t)))
					if ((i = u[1])) {
						if (9 === p) {
							if (!(a = e.getElementById(i))) return n;
							if (a.id === i) return k.call(n, a), n;
						} else if (
							f &&
							(a = f.getElementById(i)) &&
							I.contains(e, a) &&
							a.id === i
						)
							return k.call(n, a), n;
					} else {
						if (u[2]) return k.apply(n, e.getElementsByTagName(t)), n;
						if ((i = u[3]) && e.getElementsByClassName)
							return k.apply(n, e.getElementsByClassName(i)), n;
					}
				if (!(h[t + ' '] || (d && d.test(t)))) {
					if (((c = t), (f = e), 1 === p && (x.test(t) || m.test(t)))) {
						((f = (H.test(t) && U(e.parentNode)) || e) == e && le.scope) ||
							((s = e.getAttribute('id'))
								? (s = ce.escapeSelector(s))
								: e.setAttribute('id', (s = S))),
							(o = (l = Y(t)).length);
						while (o--) l[o] = (s ? '#' + s : ':scope') + ' ' + Q(l[o]);
						c = l.join(',');
					}
					try {
						return k.apply(n, f.querySelectorAll(c)), n;
					} catch (e) {
						h(t, !0);
					} finally {
						s === S && e.removeAttribute('id');
					}
				}
			}
			return re(t.replace(ve, '$1'), e, n, r);
		}
		function W() {
			var r = [];
			return function e(t, n) {
				return (
					r.push(t + ' ') > b.cacheLength && delete e[r.shift()],
					(e[t + ' '] = n)
				);
			};
		}
		function F(e) {
			return (e[S] = !0), e;
		}
		function $(e) {
			var t = T.createElement('fieldset');
			try {
				return !!e(t);
			} catch (e) {
				return !1;
			} finally {
				t.parentNode && t.parentNode.removeChild(t), (t = null);
			}
		}
		function B(t) {
			return function (e) {
				return fe(e, 'input') && e.type === t;
			};
		}
		function _(t) {
			return function (e) {
				return (fe(e, 'input') || fe(e, 'button')) && e.type === t;
			};
		}
		function z(t) {
			return function (e) {
				return 'form' in e
					? e.parentNode && !1 === e.disabled
						? 'label' in e
							? 'label' in e.parentNode
								? e.parentNode.disabled === t
								: e.disabled === t
							: e.isDisabled === t || (e.isDisabled !== !t && R(e) === t)
						: e.disabled === t
					: 'label' in e && e.disabled === t;
			};
		}
		function X(a) {
			return F(function (o) {
				return (
					(o = +o),
					F(function (e, t) {
						var n,
							r = a([], e.length, o),
							i = r.length;
						while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
					})
				);
			});
		}
		function U(e) {
			return e && 'undefined' != typeof e.getElementsByTagName && e;
		}
		function V(e) {
			var t,
				n = e ? e.ownerDocument || e : ye;
			return (
				n != T &&
					9 === n.nodeType &&
					n.documentElement &&
					((r = (T = n).documentElement),
					(C = !ce.isXMLDoc(T)),
					(i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector),
					r.msMatchesSelector &&
						ye != T &&
						(t = T.defaultView) &&
						t.top !== t &&
						t.addEventListener('unload', M),
					(le.getById = $(function (e) {
						return (
							(r.appendChild(e).id = ce.expando),
							!T.getElementsByName || !T.getElementsByName(ce.expando).length
						);
					})),
					(le.disconnectedMatch = $(function (e) {
						return i.call(e, '*');
					})),
					(le.scope = $(function () {
						return T.querySelectorAll(':scope');
					})),
					(le.cssHas = $(function () {
						try {
							return T.querySelector(':has(*,:jqfake)'), !1;
						} catch (e) {
							return !0;
						}
					})),
					le.getById
						? ((b.filter.ID = function (e) {
								var t = e.replace(O, P);
								return function (e) {
									return e.getAttribute('id') === t;
								};
							}),
							(b.find.ID = function (e, t) {
								if ('undefined' != typeof t.getElementById && C) {
									var n = t.getElementById(e);
									return n ? [n] : [];
								}
							}))
						: ((b.filter.ID = function (e) {
								var n = e.replace(O, P);
								return function (e) {
									var t =
										'undefined' != typeof e.getAttributeNode &&
										e.getAttributeNode('id');
									return t && t.value === n;
								};
							}),
							(b.find.ID = function (e, t) {
								if ('undefined' != typeof t.getElementById && C) {
									var n,
										r,
										i,
										o = t.getElementById(e);
									if (o) {
										if ((n = o.getAttributeNode('id')) && n.value === e)
											return [o];
										(i = t.getElementsByName(e)), (r = 0);
										while ((o = i[r++]))
											if ((n = o.getAttributeNode('id')) && n.value === e)
												return [o];
									}
									return [];
								}
							})),
					(b.find.TAG = function (e, t) {
						return 'undefined' != typeof t.getElementsByTagName
							? t.getElementsByTagName(e)
							: t.querySelectorAll(e);
					}),
					(b.find.CLASS = function (e, t) {
						if ('undefined' != typeof t.getElementsByClassName && C)
							return t.getElementsByClassName(e);
					}),
					(d = []),
					$(function (e) {
						var t;
						(r.appendChild(e).innerHTML =
							"<a id='" +
							S +
							"' href='' disabled='disabled'></a><select id='" +
							S +
							"-\r\\' disabled='disabled'><option selected=''></option></select>"),
							e.querySelectorAll('[selected]').length ||
								d.push('\\[' + ge + '*(?:value|' + f + ')'),
							e.querySelectorAll('[id~=' + S + '-]').length || d.push('~='),
							e.querySelectorAll('a#' + S + '+*').length || d.push('.#.+[+~]'),
							e.querySelectorAll(':checked').length || d.push(':checked'),
							(t = T.createElement('input')).setAttribute('type', 'hidden'),
							e.appendChild(t).setAttribute('name', 'D'),
							(r.appendChild(e).disabled = !0),
							2 !== e.querySelectorAll(':disabled').length &&
								d.push(':enabled', ':disabled'),
							(t = T.createElement('input')).setAttribute('name', ''),
							e.appendChild(t),
							e.querySelectorAll("[name='']").length ||
								d.push('\\[' + ge + '*name' + ge + '*=' + ge + '*(?:\'\'|"")');
					}),
					le.cssHas || d.push(':has'),
					(d = d.length && new RegExp(d.join('|'))),
					(l = function (e, t) {
						if (e === t) return (a = !0), 0;
						var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
						return (
							n ||
							(1 &
								(n =
									(e.ownerDocument || e) == (t.ownerDocument || t)
										? e.compareDocumentPosition(t)
										: 1) ||
							(!le.sortDetached && t.compareDocumentPosition(e) === n)
								? e === T || (e.ownerDocument == ye && I.contains(ye, e))
									? -1
									: t === T || (t.ownerDocument == ye && I.contains(ye, t))
										? 1
										: o
											? se.call(o, e) - se.call(o, t)
											: 0
								: 4 & n
									? -1
									: 1)
						);
					})),
				T
			);
		}
		for (e in ((I.matches = function (e, t) {
			return I(e, null, null, t);
		}),
		(I.matchesSelector = function (e, t) {
			if ((V(e), C && !h[t + ' '] && (!d || !d.test(t))))
				try {
					var n = i.call(e, t);
					if (
						n ||
						le.disconnectedMatch ||
						(e.document && 11 !== e.document.nodeType)
					)
						return n;
				} catch (e) {
					h(t, !0);
				}
			return 0 < I(t, T, null, [e]).length;
		}),
		(I.contains = function (e, t) {
			return (e.ownerDocument || e) != T && V(e), ce.contains(e, t);
		}),
		(I.attr = function (e, t) {
			(e.ownerDocument || e) != T && V(e);
			var n = b.attrHandle[t.toLowerCase()],
				r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
			return void 0 !== r ? r : e.getAttribute(t);
		}),
		(I.error = function (e) {
			throw new Error('Syntax error, unrecognized expression: ' + e);
		}),
		(ce.uniqueSort = function (e) {
			var t,
				n = [],
				r = 0,
				i = 0;
			if (
				((a = !le.sortStable),
				(o = !le.sortStable && ae.call(e, 0)),
				de.call(e, l),
				a)
			) {
				while ((t = e[i++])) t === e[i] && (r = n.push(i));
				while (r--) he.call(e, n[r], 1);
			}
			return (o = null), e;
		}),
		(ce.fn.uniqueSort = function () {
			return this.pushStack(ce.uniqueSort(ae.apply(this)));
		}),
		((b = ce.expr =
			{
				cacheLength: 50,
				createPseudo: F,
				match: D,
				attrHandle: {},
				find: {},
				relative: {
					'>': { dir: 'parentNode', first: !0 },
					' ': { dir: 'parentNode' },
					'+': { dir: 'previousSibling', first: !0 },
					'~': { dir: 'previousSibling' },
				},
				preFilter: {
					ATTR: function (e) {
						return (
							(e[1] = e[1].replace(O, P)),
							(e[3] = (e[3] || e[4] || e[5] || '').replace(O, P)),
							'~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
							e.slice(0, 4)
						);
					},
					CHILD: function (e) {
						return (
							(e[1] = e[1].toLowerCase()),
							'nth' === e[1].slice(0, 3)
								? (e[3] || I.error(e[0]),
									(e[4] = +(e[4]
										? e[5] + (e[6] || 1)
										: 2 * ('even' === e[3] || 'odd' === e[3]))),
									(e[5] = +(e[7] + e[8] || 'odd' === e[3])))
								: e[3] && I.error(e[0]),
							e
						);
					},
					PSEUDO: function (e) {
						var t,
							n = !e[6] && e[2];
						return D.CHILD.test(e[0])
							? null
							: (e[3]
									? (e[2] = e[4] || e[5] || '')
									: n &&
										j.test(n) &&
										(t = Y(n, !0)) &&
										(t = n.indexOf(')', n.length - t) - n.length) &&
										((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
								e.slice(0, 3));
					},
				},
				filter: {
					TAG: function (e) {
						var t = e.replace(O, P).toLowerCase();
						return '*' === e
							? function () {
									return !0;
								}
							: function (e) {
									return fe(e, t);
								};
					},
					CLASS: function (e) {
						var t = s[e + ' '];
						return (
							t ||
							((t = new RegExp('(^|' + ge + ')' + e + '(' + ge + '|$)')) &&
								s(e, function (e) {
									return t.test(
										('string' == typeof e.className && e.className) ||
											('undefined' != typeof e.getAttribute &&
												e.getAttribute('class')) ||
											''
									);
								}))
						);
					},
					ATTR: function (n, r, i) {
						return function (e) {
							var t = I.attr(e, n);
							return null == t
								? '!=' === r
								: !r ||
										((t += ''),
										'=' === r
											? t === i
											: '!=' === r
												? t !== i
												: '^=' === r
													? i && 0 === t.indexOf(i)
													: '*=' === r
														? i && -1 < t.indexOf(i)
														: '$=' === r
															? i && t.slice(-i.length) === i
															: '~=' === r
																? -1 <
																	(' ' + t.replace(v, ' ') + ' ').indexOf(i)
																: '|=' === r &&
																	(t === i ||
																		t.slice(0, i.length + 1) === i + '-'));
						};
					},
					CHILD: function (d, e, t, h, g) {
						var v = 'nth' !== d.slice(0, 3),
							y = 'last' !== d.slice(-4),
							m = 'of-type' === e;
						return 1 === h && 0 === g
							? function (e) {
									return !!e.parentNode;
								}
							: function (e, t, n) {
									var r,
										i,
										o,
										a,
										s,
										u = v !== y ? 'nextSibling' : 'previousSibling',
										l = e.parentNode,
										c = m && e.nodeName.toLowerCase(),
										f = !n && !m,
										p = !1;
									if (l) {
										if (v) {
											while (u) {
												o = e;
												while ((o = o[u]))
													if (m ? fe(o, c) : 1 === o.nodeType) return !1;
												s = u = 'only' === d && !s && 'nextSibling';
											}
											return !0;
										}
										if (((s = [y ? l.firstChild : l.lastChild]), y && f)) {
											(p =
												(a =
													(r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E &&
													r[1]) && r[2]),
												(o = a && l.childNodes[a]);
											while ((o = (++a && o && o[u]) || (p = a = 0) || s.pop()))
												if (1 === o.nodeType && ++p && o === e) {
													i[d] = [E, a, p];
													break;
												}
										} else if (
											(f &&
												(p = a =
													(r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E &&
													r[1]),
											!1 === p)
										)
											while ((o = (++a && o && o[u]) || (p = a = 0) || s.pop()))
												if (
													(m ? fe(o, c) : 1 === o.nodeType) &&
													++p &&
													(f && ((i = o[S] || (o[S] = {}))[d] = [E, p]),
													o === e)
												)
													break;
										return (p -= g) === h || (p % h == 0 && 0 <= p / h);
									}
								};
					},
					PSEUDO: function (e, o) {
						var t,
							a =
								b.pseudos[e] ||
								b.setFilters[e.toLowerCase()] ||
								I.error('unsupported pseudo: ' + e);
						return a[S]
							? a(o)
							: 1 < a.length
								? ((t = [e, e, '', o]),
									b.setFilters.hasOwnProperty(e.toLowerCase())
										? F(function (e, t) {
												var n,
													r = a(e, o),
													i = r.length;
												while (i--) e[(n = se.call(e, r[i]))] = !(t[n] = r[i]);
											})
										: function (e) {
												return a(e, 0, t);
											})
								: a;
					},
				},
				pseudos: {
					not: F(function (e) {
						var r = [],
							i = [],
							s = ne(e.replace(ve, '$1'));
						return s[S]
							? F(function (e, t, n, r) {
									var i,
										o = s(e, null, r, []),
										a = e.length;
									while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
								})
							: function (e, t, n) {
									return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
								};
					}),
					has: F(function (t) {
						return function (e) {
							return 0 < I(t, e).length;
						};
					}),
					contains: F(function (t) {
						return (
							(t = t.replace(O, P)),
							function (e) {
								return -1 < (e.textContent || ce.text(e)).indexOf(t);
							}
						);
					}),
					lang: F(function (n) {
						return (
							A.test(n || '') || I.error('unsupported lang: ' + n),
							(n = n.replace(O, P).toLowerCase()),
							function (e) {
								var t;
								do {
									if (
										(t = C
											? e.lang
											: e.getAttribute('xml:lang') || e.getAttribute('lang'))
									)
										return (
											(t = t.toLowerCase()) === n || 0 === t.indexOf(n + '-')
										);
								} while ((e = e.parentNode) && 1 === e.nodeType);
								return !1;
							}
						);
					}),
					target: function (e) {
						var t = ie.location && ie.location.hash;
						return t && t.slice(1) === e.id;
					},
					root: function (e) {
						return e === r;
					},
					focus: function (e) {
						return (
							e ===
								(function () {
									try {
										return T.activeElement;
									} catch (e) {}
								})() &&
							T.hasFocus() &&
							!!(e.type || e.href || ~e.tabIndex)
						);
					},
					enabled: z(!1),
					disabled: z(!0),
					checked: function (e) {
						return (
							(fe(e, 'input') && !!e.checked) ||
							(fe(e, 'option') && !!e.selected)
						);
					},
					selected: function (e) {
						return (
							e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
						);
					},
					empty: function (e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeType < 6) return !1;
						return !0;
					},
					parent: function (e) {
						return !b.pseudos.empty(e);
					},
					header: function (e) {
						return q.test(e.nodeName);
					},
					input: function (e) {
						return N.test(e.nodeName);
					},
					button: function (e) {
						return (fe(e, 'input') && 'button' === e.type) || fe(e, 'button');
					},
					text: function (e) {
						var t;
						return (
							fe(e, 'input') &&
							'text' === e.type &&
							(null == (t = e.getAttribute('type')) ||
								'text' === t.toLowerCase())
						);
					},
					first: X(function () {
						return [0];
					}),
					last: X(function (e, t) {
						return [t - 1];
					}),
					eq: X(function (e, t, n) {
						return [n < 0 ? n + t : n];
					}),
					even: X(function (e, t) {
						for (var n = 0; n < t; n += 2) e.push(n);
						return e;
					}),
					odd: X(function (e, t) {
						for (var n = 1; n < t; n += 2) e.push(n);
						return e;
					}),
					lt: X(function (e, t, n) {
						var r;
						for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
						return e;
					}),
					gt: X(function (e, t, n) {
						for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
						return e;
					}),
				},
			}).pseudos.nth = b.pseudos.eq),
		{ radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
			b.pseudos[e] = B(e);
		for (e in { submit: !0, reset: !0 }) b.pseudos[e] = _(e);
		function G() {}
		function Y(e, t) {
			var n,
				r,
				i,
				o,
				a,
				s,
				u,
				l = c[e + ' '];
			if (l) return t ? 0 : l.slice(0);
			(a = e), (s = []), (u = b.preFilter);
			while (a) {
				for (o in ((n && !(r = y.exec(a))) ||
					(r && (a = a.slice(r[0].length) || a), s.push((i = []))),
				(n = !1),
				(r = m.exec(a)) &&
					((n = r.shift()),
					i.push({ value: n, type: r[0].replace(ve, ' ') }),
					(a = a.slice(n.length))),
				b.filter))
					!(r = D[o].exec(a)) ||
						(u[o] && !(r = u[o](r))) ||
						((n = r.shift()),
						i.push({ value: n, type: o, matches: r }),
						(a = a.slice(n.length)));
				if (!n) break;
			}
			return t ? a.length : a ? I.error(e) : c(e, s).slice(0);
		}
		function Q(e) {
			for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
			return r;
		}
		function J(a, e, t) {
			var s = e.dir,
				u = e.next,
				l = u || s,
				c = t && 'parentNode' === l,
				f = n++;
			return e.first
				? function (e, t, n) {
						while ((e = e[s])) if (1 === e.nodeType || c) return a(e, t, n);
						return !1;
					}
				: function (e, t, n) {
						var r,
							i,
							o = [E, f];
						if (n) {
							while ((e = e[s]))
								if ((1 === e.nodeType || c) && a(e, t, n)) return !0;
						} else
							while ((e = e[s]))
								if (1 === e.nodeType || c)
									if (((i = e[S] || (e[S] = {})), u && fe(e, u))) e = e[s] || e;
									else {
										if ((r = i[l]) && r[0] === E && r[1] === f)
											return (o[2] = r[2]);
										if (((i[l] = o)[2] = a(e, t, n))) return !0;
									}
						return !1;
					};
		}
		function K(i) {
			return 1 < i.length
				? function (e, t, n) {
						var r = i.length;
						while (r--) if (!i[r](e, t, n)) return !1;
						return !0;
					}
				: i[0];
		}
		function Z(e, t, n, r, i) {
			for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
				(o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
			return a;
		}
		function ee(d, h, g, v, y, e) {
			return (
				v && !v[S] && (v = ee(v)),
				y && !y[S] && (y = ee(y, e)),
				F(function (e, t, n, r) {
					var i,
						o,
						a,
						s,
						u = [],
						l = [],
						c = t.length,
						f =
							e ||
							(function (e, t, n) {
								for (var r = 0, i = t.length; r < i; r++) I(e, t[r], n);
								return n;
							})(h || '*', n.nodeType ? [n] : n, []),
						p = !d || (!e && h) ? f : Z(f, u, d, n, r);
					if (
						(g ? g(p, (s = y || (e ? d : c || v) ? [] : t), n, r) : (s = p), v)
					) {
						(i = Z(s, l)), v(i, [], n, r), (o = i.length);
						while (o--) (a = i[o]) && (s[l[o]] = !(p[l[o]] = a));
					}
					if (e) {
						if (y || d) {
							if (y) {
								(i = []), (o = s.length);
								while (o--) (a = s[o]) && i.push((p[o] = a));
								y(null, (s = []), i, r);
							}
							o = s.length;
							while (o--)
								(a = s[o]) &&
									-1 < (i = y ? se.call(e, a) : u[o]) &&
									(e[i] = !(t[i] = a));
						}
					} else
						(s = Z(s === t ? s.splice(c, s.length) : s)),
							y ? y(null, t, s, r) : k.apply(t, s);
				})
			);
		}
		function te(e) {
			for (
				var i,
					t,
					n,
					r = e.length,
					o = b.relative[e[0].type],
					a = o || b.relative[' '],
					s = o ? 1 : 0,
					u = J(
						function (e) {
							return e === i;
						},
						a,
						!0
					),
					l = J(
						function (e) {
							return -1 < se.call(i, e);
						},
						a,
						!0
					),
					c = [
						function (e, t, n) {
							var r =
								(!o && (n || t != w)) ||
								((i = t).nodeType ? u(e, t, n) : l(e, t, n));
							return (i = null), r;
						},
					];
				s < r;
				s++
			)
				if ((t = b.relative[e[s].type])) c = [J(K(c), t)];
				else {
					if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
						for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
						return ee(
							1 < s && K(c),
							1 < s &&
								Q(
									e
										.slice(0, s - 1)
										.concat({ value: ' ' === e[s - 2].type ? '*' : '' })
								).replace(ve, '$1'),
							t,
							s < n && te(e.slice(s, n)),
							n < r && te((e = e.slice(n))),
							n < r && Q(e)
						);
					}
					c.push(t);
				}
			return K(c);
		}
		function ne(e, t) {
			var n,
				v,
				y,
				m,
				x,
				r,
				i = [],
				o = [],
				a = u[e + ' '];
			if (!a) {
				t || (t = Y(e)), (n = t.length);
				while (n--) (a = te(t[n]))[S] ? i.push(a) : o.push(a);
				(a = u(
					e,
					((v = o),
					(m = 0 < (y = i).length),
					(x = 0 < v.length),
					(r = function (e, t, n, r, i) {
						var o,
							a,
							s,
							u = 0,
							l = '0',
							c = e && [],
							f = [],
							p = w,
							d = e || (x && b.find.TAG('*', i)),
							h = (E += null == p ? 1 : Math.random() || 0.1),
							g = d.length;
						for (
							i && (w = t == T || t || i);
							l !== g && null != (o = d[l]);
							l++
						) {
							if (x && o) {
								(a = 0), t || o.ownerDocument == T || (V(o), (n = !C));
								while ((s = v[a++]))
									if (s(o, t || T, n)) {
										k.call(r, o);
										break;
									}
								i && (E = h);
							}
							m && ((o = !s && o) && u--, e && c.push(o));
						}
						if (((u += l), m && l !== u)) {
							a = 0;
							while ((s = y[a++])) s(c, f, t, n);
							if (e) {
								if (0 < u) while (l--) c[l] || f[l] || (f[l] = pe.call(r));
								f = Z(f);
							}
							k.apply(r, f),
								i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(r);
						}
						return i && ((E = h), (w = p)), c;
					}),
					m ? F(r) : r)
				)).selector = e;
			}
			return a;
		}
		function re(e, t, n, r) {
			var i,
				o,
				a,
				s,
				u,
				l = 'function' == typeof e && e,
				c = !r && Y((e = l.selector || e));
			if (((n = n || []), 1 === c.length)) {
				if (
					2 < (o = c[0] = c[0].slice(0)).length &&
					'ID' === (a = o[0]).type &&
					9 === t.nodeType &&
					C &&
					b.relative[o[1].type]
				) {
					if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0]))
						return n;
					l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
				}
				i = D.needsContext.test(e) ? 0 : o.length;
				while (i--) {
					if (((a = o[i]), b.relative[(s = a.type)])) break;
					if (
						(u = b.find[s]) &&
						(r = u(
							a.matches[0].replace(O, P),
							(H.test(o[0].type) && U(t.parentNode)) || t
						))
					) {
						if ((o.splice(i, 1), !(e = r.length && Q(o))))
							return k.apply(n, r), n;
						break;
					}
				}
			}
			return (
				(l || ne(e, c))(r, t, !C, n, !t || (H.test(e) && U(t.parentNode)) || t),
				n
			);
		}
		(G.prototype = b.filters = b.pseudos),
			(b.setFilters = new G()),
			(le.sortStable = S.split('').sort(l).join('') === S),
			V(),
			(le.sortDetached = $(function (e) {
				return 1 & e.compareDocumentPosition(T.createElement('fieldset'));
			})),
			(ce.find = I),
			(ce.expr[':'] = ce.expr.pseudos),
			(ce.unique = ce.uniqueSort),
			(I.compile = ne),
			(I.select = re),
			(I.setDocument = V),
			(I.tokenize = Y),
			(I.escape = ce.escapeSelector),
			(I.getText = ce.text),
			(I.isXML = ce.isXMLDoc),
			(I.selectors = ce.expr),
			(I.support = ce.support),
			(I.uniqueSort = ce.uniqueSort);
	})();
	var d = function (e, t, n) {
			var r = [],
				i = void 0 !== n;
			while ((e = e[t]) && 9 !== e.nodeType)
				if (1 === e.nodeType) {
					if (i && ce(e).is(n)) break;
					r.push(e);
				}
			return r;
		},
		h = function (e, t) {
			for (var n = []; e; e = e.nextSibling)
				1 === e.nodeType && e !== t && n.push(e);
			return n;
		},
		b = ce.expr.match.needsContext,
		w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
	function T(e, n, r) {
		return v(n)
			? ce.grep(e, function (e, t) {
					return !!n.call(e, t, e) !== r;
				})
			: n.nodeType
				? ce.grep(e, function (e) {
						return (e === n) !== r;
					})
				: 'string' != typeof n
					? ce.grep(e, function (e) {
							return -1 < se.call(n, e) !== r;
						})
					: ce.filter(n, e, r);
	}
	(ce.filter = function (e, t, n) {
		var r = t[0];
		return (
			n && (e = ':not(' + e + ')'),
			1 === t.length && 1 === r.nodeType
				? ce.find.matchesSelector(r, e)
					? [r]
					: []
				: ce.find.matches(
						e,
						ce.grep(t, function (e) {
							return 1 === e.nodeType;
						})
					)
		);
	}),
		ce.fn.extend({
			find: function (e) {
				var t,
					n,
					r = this.length,
					i = this;
				if ('string' != typeof e)
					return this.pushStack(
						ce(e).filter(function () {
							for (t = 0; t < r; t++) if (ce.contains(i[t], this)) return !0;
						})
					);
				for (n = this.pushStack([]), t = 0; t < r; t++) ce.find(e, i[t], n);
				return 1 < r ? ce.uniqueSort(n) : n;
			},
			filter: function (e) {
				return this.pushStack(T(this, e || [], !1));
			},
			not: function (e) {
				return this.pushStack(T(this, e || [], !0));
			},
			is: function (e) {
				return !!T(
					this,
					'string' == typeof e && b.test(e) ? ce(e) : e || [],
					!1
				).length;
			},
		});
	var k,
		S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	((ce.fn.init = function (e, t, n) {
		var r, i;
		if (!e) return this;
		if (((n = n || k), 'string' == typeof e)) {
			if (
				!(r =
					'<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length
						? [null, e, null]
						: S.exec(e)) ||
				(!r[1] && t)
			)
				return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
			if (r[1]) {
				if (
					((t = t instanceof ce ? t[0] : t),
					ce.merge(
						this,
						ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)
					),
					w.test(r[1]) && ce.isPlainObject(t))
				)
					for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
				return this;
			}
			return (
				(i = C.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
			);
		}
		return e.nodeType
			? ((this[0] = e), (this.length = 1), this)
			: v(e)
				? void 0 !== n.ready
					? n.ready(e)
					: e(ce)
				: ce.makeArray(e, this);
	}).prototype = ce.fn),
		(k = ce(C));
	var E = /^(?:parents|prev(?:Until|All))/,
		j = { children: !0, contents: !0, next: !0, prev: !0 };
	function A(e, t) {
		while ((e = e[t]) && 1 !== e.nodeType);
		return e;
	}
	ce.fn.extend({
		has: function (e) {
			var t = ce(e, this),
				n = t.length;
			return this.filter(function () {
				for (var e = 0; e < n; e++) if (ce.contains(this, t[e])) return !0;
			});
		},
		closest: function (e, t) {
			var n,
				r = 0,
				i = this.length,
				o = [],
				a = 'string' != typeof e && ce(e);
			if (!b.test(e))
				for (; r < i; r++)
					for (n = this[r]; n && n !== t; n = n.parentNode)
						if (
							n.nodeType < 11 &&
							(a
								? -1 < a.index(n)
								: 1 === n.nodeType && ce.find.matchesSelector(n, e))
						) {
							o.push(n);
							break;
						}
			return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o);
		},
		index: function (e) {
			return e
				? 'string' == typeof e
					? se.call(ce(e), this[0])
					: se.call(this, e.jquery ? e[0] : e)
				: this[0] && this[0].parentNode
					? this.first().prevAll().length
					: -1;
		},
		add: function (e, t) {
			return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))));
		},
		addBack: function (e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
		},
	}),
		ce.each(
			{
				parent: function (e) {
					var t = e.parentNode;
					return t && 11 !== t.nodeType ? t : null;
				},
				parents: function (e) {
					return d(e, 'parentNode');
				},
				parentsUntil: function (e, t, n) {
					return d(e, 'parentNode', n);
				},
				next: function (e) {
					return A(e, 'nextSibling');
				},
				prev: function (e) {
					return A(e, 'previousSibling');
				},
				nextAll: function (e) {
					return d(e, 'nextSibling');
				},
				prevAll: function (e) {
					return d(e, 'previousSibling');
				},
				nextUntil: function (e, t, n) {
					return d(e, 'nextSibling', n);
				},
				prevUntil: function (e, t, n) {
					return d(e, 'previousSibling', n);
				},
				siblings: function (e) {
					return h((e.parentNode || {}).firstChild, e);
				},
				children: function (e) {
					return h(e.firstChild);
				},
				contents: function (e) {
					return null != e.contentDocument && r(e.contentDocument)
						? e.contentDocument
						: (fe(e, 'template') && (e = e.content || e),
							ce.merge([], e.childNodes));
				},
			},
			function (r, i) {
				ce.fn[r] = function (e, t) {
					var n = ce.map(this, i, e);
					return (
						'Until' !== r.slice(-5) && (t = e),
						t && 'string' == typeof t && (n = ce.filter(t, n)),
						1 < this.length &&
							(j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()),
						this.pushStack(n)
					);
				};
			}
		);
	var D = /[^\x20\t\r\n\f]+/g;
	function N(e) {
		return e;
	}
	function q(e) {
		throw e;
	}
	function L(e, t, n, r) {
		var i;
		try {
			e && v((i = e.promise))
				? i.call(e).done(t).fail(n)
				: e && v((i = e.then))
					? i.call(e, t, n)
					: t.apply(void 0, [e].slice(r));
		} catch (e) {
			n.apply(void 0, [e]);
		}
	}
	(ce.Callbacks = function (r) {
		var e, n;
		r =
			'string' == typeof r
				? ((e = r),
					(n = {}),
					ce.each(e.match(D) || [], function (e, t) {
						n[t] = !0;
					}),
					n)
				: ce.extend({}, r);
		var i,
			t,
			o,
			a,
			s = [],
			u = [],
			l = -1,
			c = function () {
				for (a = a || r.once, o = i = !0; u.length; l = -1) {
					t = u.shift();
					while (++l < s.length)
						!1 === s[l].apply(t[0], t[1]) &&
							r.stopOnFalse &&
							((l = s.length), (t = !1));
				}
				r.memory || (t = !1), (i = !1), a && (s = t ? [] : '');
			},
			f = {
				add: function () {
					return (
						s &&
							(t && !i && ((l = s.length - 1), u.push(t)),
							(function n(e) {
								ce.each(e, function (e, t) {
									v(t)
										? (r.unique && f.has(t)) || s.push(t)
										: t && t.length && 'string' !== x(t) && n(t);
								});
							})(arguments),
							t && !i && c()),
						this
					);
				},
				remove: function () {
					return (
						ce.each(arguments, function (e, t) {
							var n;
							while (-1 < (n = ce.inArray(t, s, n)))
								s.splice(n, 1), n <= l && l--;
						}),
						this
					);
				},
				has: function (e) {
					return e ? -1 < ce.inArray(e, s) : 0 < s.length;
				},
				empty: function () {
					return s && (s = []), this;
				},
				disable: function () {
					return (a = u = []), (s = t = ''), this;
				},
				disabled: function () {
					return !s;
				},
				lock: function () {
					return (a = u = []), t || i || (s = t = ''), this;
				},
				locked: function () {
					return !!a;
				},
				fireWith: function (e, t) {
					return (
						a ||
							((t = [e, (t = t || []).slice ? t.slice() : t]),
							u.push(t),
							i || c()),
						this
					);
				},
				fire: function () {
					return f.fireWith(this, arguments), this;
				},
				fired: function () {
					return !!o;
				},
			};
		return f;
	}),
		ce.extend({
			Deferred: function (e) {
				var o = [
						[
							'notify',
							'progress',
							ce.Callbacks('memory'),
							ce.Callbacks('memory'),
							2,
						],
						[
							'resolve',
							'done',
							ce.Callbacks('once memory'),
							ce.Callbacks('once memory'),
							0,
							'resolved',
						],
						[
							'reject',
							'fail',
							ce.Callbacks('once memory'),
							ce.Callbacks('once memory'),
							1,
							'rejected',
						],
					],
					i = 'pending',
					a = {
						state: function () {
							return i;
						},
						always: function () {
							return s.done(arguments).fail(arguments), this;
						},
						catch: function (e) {
							return a.then(null, e);
						},
						pipe: function () {
							var i = arguments;
							return ce
								.Deferred(function (r) {
									ce.each(o, function (e, t) {
										var n = v(i[t[4]]) && i[t[4]];
										s[t[1]](function () {
											var e = n && n.apply(this, arguments);
											e && v(e.promise)
												? e
														.promise()
														.progress(r.notify)
														.done(r.resolve)
														.fail(r.reject)
												: r[t[0] + 'With'](this, n ? [e] : arguments);
										});
									}),
										(i = null);
								})
								.promise();
						},
						then: function (t, n, r) {
							var u = 0;
							function l(i, o, a, s) {
								return function () {
									var n = this,
										r = arguments,
										e = function () {
											var e, t;
											if (!(i < u)) {
												if ((e = a.apply(n, r)) === o.promise())
													throw new TypeError('Thenable self-resolution');
												(t =
													e &&
													('object' == typeof e || 'function' == typeof e) &&
													e.then),
													v(t)
														? s
															? t.call(e, l(u, o, N, s), l(u, o, q, s))
															: (u++,
																t.call(
																	e,
																	l(u, o, N, s),
																	l(u, o, q, s),
																	l(u, o, N, o.notifyWith)
																))
														: (a !== N && ((n = void 0), (r = [e])),
															(s || o.resolveWith)(n, r));
											}
										},
										t = s
											? e
											: function () {
													try {
														e();
													} catch (e) {
														ce.Deferred.exceptionHook &&
															ce.Deferred.exceptionHook(e, t.error),
															u <= i + 1 &&
																(a !== q && ((n = void 0), (r = [e])),
																o.rejectWith(n, r));
													}
												};
									i
										? t()
										: (ce.Deferred.getErrorHook
												? (t.error = ce.Deferred.getErrorHook())
												: ce.Deferred.getStackHook &&
													(t.error = ce.Deferred.getStackHook()),
											ie.setTimeout(t));
								};
							}
							return ce
								.Deferred(function (e) {
									o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)),
										o[1][3].add(l(0, e, v(t) ? t : N)),
										o[2][3].add(l(0, e, v(n) ? n : q));
								})
								.promise();
						},
						promise: function (e) {
							return null != e ? ce.extend(e, a) : a;
						},
					},
					s = {};
				return (
					ce.each(o, function (e, t) {
						var n = t[2],
							r = t[5];
						(a[t[1]] = n.add),
							r &&
								n.add(
									function () {
										i = r;
									},
									o[3 - e][2].disable,
									o[3 - e][3].disable,
									o[0][2].lock,
									o[0][3].lock
								),
							n.add(t[3].fire),
							(s[t[0]] = function () {
								return (
									s[t[0] + 'With'](this === s ? void 0 : this, arguments), this
								);
							}),
							(s[t[0] + 'With'] = n.fireWith);
					}),
					a.promise(s),
					e && e.call(s, s),
					s
				);
			},
			when: function (e) {
				var n = arguments.length,
					t = n,
					r = Array(t),
					i = ae.call(arguments),
					o = ce.Deferred(),
					a = function (t) {
						return function (e) {
							(r[t] = this),
								(i[t] = 1 < arguments.length ? ae.call(arguments) : e),
								--n || o.resolveWith(r, i);
						};
					};
				if (
					n <= 1 &&
					(L(e, o.done(a(t)).resolve, o.reject, !n),
					'pending' === o.state() || v(i[t] && i[t].then))
				)
					return o.then();
				while (t--) L(i[t], a(t), o.reject);
				return o.promise();
			},
		});
	var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	(ce.Deferred.exceptionHook = function (e, t) {
		ie.console &&
			ie.console.warn &&
			e &&
			H.test(e.name) &&
			ie.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t);
	}),
		(ce.readyException = function (e) {
			ie.setTimeout(function () {
				throw e;
			});
		});
	var O = ce.Deferred();
	function P() {
		C.removeEventListener('DOMContentLoaded', P),
			ie.removeEventListener('load', P),
			ce.ready();
	}
	(ce.fn.ready = function (e) {
		return (
			O.then(e)['catch'](function (e) {
				ce.readyException(e);
			}),
			this
		);
	}),
		ce.extend({
			isReady: !1,
			readyWait: 1,
			ready: function (e) {
				(!0 === e ? --ce.readyWait : ce.isReady) ||
					((ce.isReady = !0) !== e && 0 < --ce.readyWait) ||
					O.resolveWith(C, [ce]);
			},
		}),
		(ce.ready.then = O.then),
		'complete' === C.readyState ||
		('loading' !== C.readyState && !C.documentElement.doScroll)
			? ie.setTimeout(ce.ready)
			: (C.addEventListener('DOMContentLoaded', P),
				ie.addEventListener('load', P));
	var M = function (e, t, n, r, i, o, a) {
			var s = 0,
				u = e.length,
				l = null == n;
			if ('object' === x(n))
				for (s in ((i = !0), n)) M(e, t, s, n[s], !0, o, a);
			else if (
				void 0 !== r &&
				((i = !0),
				v(r) || (a = !0),
				l &&
					(a
						? (t.call(e, r), (t = null))
						: ((l = t),
							(t = function (e, t, n) {
								return l.call(ce(e), n);
							}))),
				t)
			)
				for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
			return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
		},
		R = /^-ms-/,
		I = /-([a-z])/g;
	function W(e, t) {
		return t.toUpperCase();
	}
	function F(e) {
		return e.replace(R, 'ms-').replace(I, W);
	}
	var $ = function (e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
	};
	function B() {
		this.expando = ce.expando + B.uid++;
	}
	(B.uid = 1),
		(B.prototype = {
			cache: function (e) {
				var t = e[this.expando];
				return (
					t ||
						((t = {}),
						$(e) &&
							(e.nodeType
								? (e[this.expando] = t)
								: Object.defineProperty(e, this.expando, {
										value: t,
										configurable: !0,
									}))),
					t
				);
			},
			set: function (e, t, n) {
				var r,
					i = this.cache(e);
				if ('string' == typeof t) i[F(t)] = n;
				else for (r in t) i[F(r)] = t[r];
				return i;
			},
			get: function (e, t) {
				return void 0 === t
					? this.cache(e)
					: e[this.expando] && e[this.expando][F(t)];
			},
			access: function (e, t, n) {
				return void 0 === t || (t && 'string' == typeof t && void 0 === n)
					? this.get(e, t)
					: (this.set(e, t, n), void 0 !== n ? n : t);
			},
			remove: function (e, t) {
				var n,
					r = e[this.expando];
				if (void 0 !== r) {
					if (void 0 !== t) {
						n = (t = Array.isArray(t)
							? t.map(F)
							: (t = F(t)) in r
								? [t]
								: t.match(D) || []).length;
						while (n--) delete r[t[n]];
					}
					(void 0 === t || ce.isEmptyObject(r)) &&
						(e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
				}
			},
			hasData: function (e) {
				var t = e[this.expando];
				return void 0 !== t && !ce.isEmptyObject(t);
			},
		});
	var _ = new B(),
		z = new B(),
		X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		U = /[A-Z]/g;
	function V(e, t, n) {
		var r, i;
		if (void 0 === n && 1 === e.nodeType)
			if (
				((r = 'data-' + t.replace(U, '-$&').toLowerCase()),
				'string' == typeof (n = e.getAttribute(r)))
			) {
				try {
					n =
						'true' === (i = n) ||
						('false' !== i &&
							('null' === i
								? null
								: i === +i + ''
									? +i
									: X.test(i)
										? JSON.parse(i)
										: i));
				} catch (e) {}
				z.set(e, t, n);
			} else n = void 0;
		return n;
	}
	ce.extend({
		hasData: function (e) {
			return z.hasData(e) || _.hasData(e);
		},
		data: function (e, t, n) {
			return z.access(e, t, n);
		},
		removeData: function (e, t) {
			z.remove(e, t);
		},
		_data: function (e, t, n) {
			return _.access(e, t, n);
		},
		_removeData: function (e, t) {
			_.remove(e, t);
		},
	}),
		ce.fn.extend({
			data: function (n, e) {
				var t,
					r,
					i,
					o = this[0],
					a = o && o.attributes;
				if (void 0 === n) {
					if (
						this.length &&
						((i = z.get(o)), 1 === o.nodeType && !_.get(o, 'hasDataAttrs'))
					) {
						t = a.length;
						while (t--)
							a[t] &&
								0 === (r = a[t].name).indexOf('data-') &&
								((r = F(r.slice(5))), V(o, r, i[r]));
						_.set(o, 'hasDataAttrs', !0);
					}
					return i;
				}
				return 'object' == typeof n
					? this.each(function () {
							z.set(this, n);
						})
					: M(
							this,
							function (e) {
								var t;
								if (o && void 0 === e)
									return void 0 !== (t = z.get(o, n))
										? t
										: void 0 !== (t = V(o, n))
											? t
											: void 0;
								this.each(function () {
									z.set(this, n, e);
								});
							},
							null,
							e,
							1 < arguments.length,
							null,
							!0
						);
			},
			removeData: function (e) {
				return this.each(function () {
					z.remove(this, e);
				});
			},
		}),
		ce.extend({
			queue: function (e, t, n) {
				var r;
				if (e)
					return (
						(t = (t || 'fx') + 'queue'),
						(r = _.get(e, t)),
						n &&
							(!r || Array.isArray(n)
								? (r = _.access(e, t, ce.makeArray(n)))
								: r.push(n)),
						r || []
					);
			},
			dequeue: function (e, t) {
				t = t || 'fx';
				var n = ce.queue(e, t),
					r = n.length,
					i = n.shift(),
					o = ce._queueHooks(e, t);
				'inprogress' === i && ((i = n.shift()), r--),
					i &&
						('fx' === t && n.unshift('inprogress'),
						delete o.stop,
						i.call(
							e,
							function () {
								ce.dequeue(e, t);
							},
							o
						)),
					!r && o && o.empty.fire();
			},
			_queueHooks: function (e, t) {
				var n = t + 'queueHooks';
				return (
					_.get(e, n) ||
					_.access(e, n, {
						empty: ce.Callbacks('once memory').add(function () {
							_.remove(e, [t + 'queue', n]);
						}),
					})
				);
			},
		}),
		ce.fn.extend({
			queue: function (t, n) {
				var e = 2;
				return (
					'string' != typeof t && ((n = t), (t = 'fx'), e--),
					arguments.length < e
						? ce.queue(this[0], t)
						: void 0 === n
							? this
							: this.each(function () {
									var e = ce.queue(this, t, n);
									ce._queueHooks(this, t),
										'fx' === t && 'inprogress' !== e[0] && ce.dequeue(this, t);
								})
				);
			},
			dequeue: function (e) {
				return this.each(function () {
					ce.dequeue(this, e);
				});
			},
			clearQueue: function (e) {
				return this.queue(e || 'fx', []);
			},
			promise: function (e, t) {
				var n,
					r = 1,
					i = ce.Deferred(),
					o = this,
					a = this.length,
					s = function () {
						--r || i.resolveWith(o, [o]);
					};
				'string' != typeof e && ((t = e), (e = void 0)), (e = e || 'fx');
				while (a--)
					(n = _.get(o[a], e + 'queueHooks')) &&
						n.empty &&
						(r++, n.empty.add(s));
				return s(), i.promise(t);
			},
		});
	var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		Y = new RegExp('^(?:([+-])=|)(' + G + ')([a-z%]*)$', 'i'),
		Q = ['Top', 'Right', 'Bottom', 'Left'],
		J = C.documentElement,
		K = function (e) {
			return ce.contains(e.ownerDocument, e);
		},
		Z = { composed: !0 };
	J.getRootNode &&
		(K = function (e) {
			return (
				ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument
			);
		});
	var ee = function (e, t) {
		return (
			'none' === (e = t || e).style.display ||
			('' === e.style.display && K(e) && 'none' === ce.css(e, 'display'))
		);
	};
	function te(e, t, n, r) {
		var i,
			o,
			a = 20,
			s = r
				? function () {
						return r.cur();
					}
				: function () {
						return ce.css(e, t, '');
					},
			u = s(),
			l = (n && n[3]) || (ce.cssNumber[t] ? '' : 'px'),
			c =
				e.nodeType &&
				(ce.cssNumber[t] || ('px' !== l && +u)) &&
				Y.exec(ce.css(e, t));
		if (c && c[3] !== l) {
			(u /= 2), (l = l || c[3]), (c = +u || 1);
			while (a--)
				ce.style(e, t, c + l),
					(1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
					(c /= o);
			(c *= 2), ce.style(e, t, c + l), (n = n || []);
		}
		return (
			n &&
				((c = +c || +u || 0),
				(i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
				r && ((r.unit = l), (r.start = c), (r.end = i))),
			i
		);
	}
	var ne = {};
	function re(e, t) {
		for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
			(r = e[c]).style &&
				((n = r.style.display),
				t
					? ('none' === n &&
							((l[c] = _.get(r, 'display') || null),
							l[c] || (r.style.display = '')),
						'' === r.style.display &&
							ee(r) &&
							(l[c] =
								((u = a = o = void 0),
								(a = (i = r).ownerDocument),
								(s = i.nodeName),
								(u = ne[s]) ||
									((o = a.body.appendChild(a.createElement(s))),
									(u = ce.css(o, 'display')),
									o.parentNode.removeChild(o),
									'none' === u && (u = 'block'),
									(ne[s] = u)))))
					: 'none' !== n && ((l[c] = 'none'), _.set(r, 'display', n)));
		for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
		return e;
	}
	ce.fn.extend({
		show: function () {
			return re(this, !0);
		},
		hide: function () {
			return re(this);
		},
		toggle: function (e) {
			return 'boolean' == typeof e
				? e
					? this.show()
					: this.hide()
				: this.each(function () {
						ee(this) ? ce(this).show() : ce(this).hide();
					});
		},
	});
	var xe,
		be,
		we = /^(?:checkbox|radio)$/i,
		Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
		Ce = /^$|^module$|\/(?:java|ecma)script/i;
	(xe = C.createDocumentFragment().appendChild(C.createElement('div'))),
		(be = C.createElement('input')).setAttribute('type', 'radio'),
		be.setAttribute('checked', 'checked'),
		be.setAttribute('name', 't'),
		xe.appendChild(be),
		(le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked),
		(xe.innerHTML = '<textarea>x</textarea>'),
		(le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue),
		(xe.innerHTML = '<option></option>'),
		(le.option = !!xe.lastChild);
	var ke = {
		thead: [1, '<table>', '</table>'],
		col: [2, '<table><colgroup>', '</colgroup></table>'],
		tr: [2, '<table><tbody>', '</tbody></table>'],
		td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
		_default: [0, '', ''],
	};
	function Se(e, t) {
		var n;
		return (
			(n =
				'undefined' != typeof e.getElementsByTagName
					? e.getElementsByTagName(t || '*')
					: 'undefined' != typeof e.querySelectorAll
						? e.querySelectorAll(t || '*')
						: []),
			void 0 === t || (t && fe(e, t)) ? ce.merge([e], n) : n
		);
	}
	function Ee(e, t) {
		for (var n = 0, r = e.length; n < r; n++)
			_.set(e[n], 'globalEval', !t || _.get(t[n], 'globalEval'));
	}
	(ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead),
		(ke.th = ke.td),
		le.option ||
			(ke.optgroup = ke.option =
				[1, "<select multiple='multiple'>", '</select>']);
	var je = /<|&#?\w+;/;
	function Ae(e, t, n, r, i) {
		for (
			var o,
				a,
				s,
				u,
				l,
				c,
				f = t.createDocumentFragment(),
				p = [],
				d = 0,
				h = e.length;
			d < h;
			d++
		)
			if ((o = e[d]) || 0 === o)
				if ('object' === x(o)) ce.merge(p, o.nodeType ? [o] : o);
				else if (je.test(o)) {
					(a = a || f.appendChild(t.createElement('div'))),
						(s = (Te.exec(o) || ['', ''])[1].toLowerCase()),
						(u = ke[s] || ke._default),
						(a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2]),
						(c = u[0]);
					while (c--) a = a.lastChild;
					ce.merge(p, a.childNodes), ((a = f.firstChild).textContent = '');
				} else p.push(t.createTextNode(o));
		(f.textContent = ''), (d = 0);
		while ((o = p[d++]))
			if (r && -1 < ce.inArray(o, r)) i && i.push(o);
			else if (
				((l = K(o)), (a = Se(f.appendChild(o), 'script')), l && Ee(a), n)
			) {
				c = 0;
				while ((o = a[c++])) Ce.test(o.type || '') && n.push(o);
			}
		return f;
	}
	var De = /^([^.]*)(?:\.(.+)|)/;
	function Ne() {
		return !0;
	}
	function qe() {
		return !1;
	}
	function Le(e, t, n, r, i, o) {
		var a, s;
		if ('object' == typeof t) {
			for (s in ('string' != typeof n && ((r = r || n), (n = void 0)), t))
				Le(e, s, n, r, t[s], o);
			return e;
		}
		if (
			(null == r && null == i
				? ((i = n), (r = n = void 0))
				: null == i &&
					('string' == typeof n
						? ((i = r), (r = void 0))
						: ((i = r), (r = n), (n = void 0))),
			!1 === i)
		)
			i = qe;
		else if (!i) return e;
		return (
			1 === o &&
				((a = i),
				((i = function (e) {
					return ce().off(e), a.apply(this, arguments);
				}).guid = a.guid || (a.guid = ce.guid++))),
			e.each(function () {
				ce.event.add(this, t, i, r, n);
			})
		);
	}
	function He(e, r, t) {
		t
			? (_.set(e, r, !1),
				ce.event.add(e, r, {
					namespace: !1,
					handler: function (e) {
						var t,
							n = _.get(this, r);
						if (1 & e.isTrigger && this[r]) {
							if (n)
								(ce.event.special[r] || {}).delegateType && e.stopPropagation();
							else if (
								((n = ae.call(arguments)),
								_.set(this, r, n),
								this[r](),
								(t = _.get(this, r)),
								_.set(this, r, !1),
								n !== t)
							)
								return e.stopImmediatePropagation(), e.preventDefault(), t;
						} else
							n &&
								(_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)),
								e.stopPropagation(),
								(e.isImmediatePropagationStopped = Ne));
					},
				}))
			: void 0 === _.get(e, r) && ce.event.add(e, r, Ne);
	}
	(ce.event = {
		global: {},
		add: function (t, e, n, r, i) {
			var o,
				a,
				s,
				u,
				l,
				c,
				f,
				p,
				d,
				h,
				g,
				v = _.get(t);
			if ($(t)) {
				n.handler && ((n = (o = n).handler), (i = o.selector)),
					i && ce.find.matchesSelector(J, i),
					n.guid || (n.guid = ce.guid++),
					(u = v.events) || (u = v.events = Object.create(null)),
					(a = v.handle) ||
						(a = v.handle =
							function (e) {
								return 'undefined' != typeof ce && ce.event.triggered !== e.type
									? ce.event.dispatch.apply(t, arguments)
									: void 0;
							}),
					(l = (e = (e || '').match(D) || ['']).length);
				while (l--)
					(d = g = (s = De.exec(e[l]) || [])[1]),
						(h = (s[2] || '').split('.').sort()),
						d &&
							((f = ce.event.special[d] || {}),
							(d = (i ? f.delegateType : f.bindType) || d),
							(f = ce.event.special[d] || {}),
							(c = ce.extend(
								{
									type: d,
									origType: g,
									data: r,
									handler: n,
									guid: n.guid,
									selector: i,
									needsContext: i && ce.expr.match.needsContext.test(i),
									namespace: h.join('.'),
								},
								o
							)),
							(p = u[d]) ||
								(((p = u[d] = []).delegateCount = 0),
								(f.setup && !1 !== f.setup.call(t, r, h, a)) ||
									(t.addEventListener && t.addEventListener(d, a))),
							f.add &&
								(f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
							i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
							(ce.event.global[d] = !0));
			}
		},
		remove: function (e, t, n, r, i) {
			var o,
				a,
				s,
				u,
				l,
				c,
				f,
				p,
				d,
				h,
				g,
				v = _.hasData(e) && _.get(e);
			if (v && (u = v.events)) {
				l = (t = (t || '').match(D) || ['']).length;
				while (l--)
					if (
						((d = g = (s = De.exec(t[l]) || [])[1]),
						(h = (s[2] || '').split('.').sort()),
						d)
					) {
						(f = ce.event.special[d] || {}),
							(p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
							(s =
								s[2] &&
								new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')),
							(a = o = p.length);
						while (o--)
							(c = p[o]),
								(!i && g !== c.origType) ||
									(n && n.guid !== c.guid) ||
									(s && !s.test(c.namespace)) ||
									(r && r !== c.selector && ('**' !== r || !c.selector)) ||
									(p.splice(o, 1),
									c.selector && p.delegateCount--,
									f.remove && f.remove.call(e, c));
						a &&
							!p.length &&
							((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
								ce.removeEvent(e, d, v.handle),
							delete u[d]);
					} else for (d in u) ce.event.remove(e, d + t[l], n, r, !0);
				ce.isEmptyObject(u) && _.remove(e, 'handle events');
			}
		},
		dispatch: function (e) {
			var t,
				n,
				r,
				i,
				o,
				a,
				s = new Array(arguments.length),
				u = ce.event.fix(e),
				l = (_.get(this, 'events') || Object.create(null))[u.type] || [],
				c = ce.event.special[u.type] || {};
			for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
			if (
				((u.delegateTarget = this),
				!c.preDispatch || !1 !== c.preDispatch.call(this, u))
			) {
				(a = ce.event.handlers.call(this, u, l)), (t = 0);
				while ((i = a[t++]) && !u.isPropagationStopped()) {
					(u.currentTarget = i.elem), (n = 0);
					while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
						(u.rnamespace &&
							!1 !== o.namespace &&
							!u.rnamespace.test(o.namespace)) ||
							((u.handleObj = o),
							(u.data = o.data),
							void 0 !==
								(r = (
									(ce.event.special[o.origType] || {}).handle || o.handler
								).apply(i.elem, s)) &&
								!1 === (u.result = r) &&
								(u.preventDefault(), u.stopPropagation()));
				}
				return c.postDispatch && c.postDispatch.call(this, u), u.result;
			}
		},
		handlers: function (e, t) {
			var n,
				r,
				i,
				o,
				a,
				s = [],
				u = t.delegateCount,
				l = e.target;
			if (u && l.nodeType && !('click' === e.type && 1 <= e.button))
				for (; l !== this; l = l.parentNode || this)
					if (1 === l.nodeType && ('click' !== e.type || !0 !== l.disabled)) {
						for (o = [], a = {}, n = 0; n < u; n++)
							void 0 === a[(i = (r = t[n]).selector + ' ')] &&
								(a[i] = r.needsContext
									? -1 < ce(i, this).index(l)
									: ce.find(i, this, null, [l]).length),
								a[i] && o.push(r);
						o.length && s.push({ elem: l, handlers: o });
					}
			return (
				(l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
			);
		},
		addProp: function (t, e) {
			Object.defineProperty(ce.Event.prototype, t, {
				enumerable: !0,
				configurable: !0,
				get: v(e)
					? function () {
							if (this.originalEvent) return e(this.originalEvent);
						}
					: function () {
							if (this.originalEvent) return this.originalEvent[t];
						},
				set: function (e) {
					Object.defineProperty(this, t, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: e,
					});
				},
			});
		},
		fix: function (e) {
			return e[ce.expando] ? e : new ce.Event(e);
		},
		special: {
			load: { noBubble: !0 },
			click: {
				setup: function (e) {
					var t = this || e;
					return (
						we.test(t.type) && t.click && fe(t, 'input') && He(t, 'click', !0),
						!1
					);
				},
				trigger: function (e) {
					var t = this || e;
					return (
						we.test(t.type) && t.click && fe(t, 'input') && He(t, 'click'), !0
					);
				},
				_default: function (e) {
					var t = e.target;
					return (
						(we.test(t.type) &&
							t.click &&
							fe(t, 'input') &&
							_.get(t, 'click')) ||
						fe(t, 'a')
					);
				},
			},
			beforeunload: {
				postDispatch: function (e) {
					void 0 !== e.result &&
						e.originalEvent &&
						(e.originalEvent.returnValue = e.result);
				},
			},
		},
	}),
		(ce.removeEvent = function (e, t, n) {
			e.removeEventListener && e.removeEventListener(t, n);
		}),
		(ce.Event = function (e, t) {
			if (!(this instanceof ce.Event)) return new ce.Event(e, t);
			e && e.type
				? ((this.originalEvent = e),
					(this.type = e.type),
					(this.isDefaultPrevented =
						e.defaultPrevented ||
						(void 0 === e.defaultPrevented && !1 === e.returnValue)
							? Ne
							: qe),
					(this.target =
						e.target && 3 === e.target.nodeType
							? e.target.parentNode
							: e.target),
					(this.currentTarget = e.currentTarget),
					(this.relatedTarget = e.relatedTarget))
				: (this.type = e),
				t && ce.extend(this, t),
				(this.timeStamp = (e && e.timeStamp) || Date.now()),
				(this[ce.expando] = !0);
		}),
		(ce.Event.prototype = {
			constructor: ce.Event,
			isDefaultPrevented: qe,
			isPropagationStopped: qe,
			isImmediatePropagationStopped: qe,
			isSimulated: !1,
			preventDefault: function () {
				var e = this.originalEvent;
				(this.isDefaultPrevented = Ne),
					e && !this.isSimulated && e.preventDefault();
			},
			stopPropagation: function () {
				var e = this.originalEvent;
				(this.isPropagationStopped = Ne),
					e && !this.isSimulated && e.stopPropagation();
			},
			stopImmediatePropagation: function () {
				var e = this.originalEvent;
				(this.isImmediatePropagationStopped = Ne),
					e && !this.isSimulated && e.stopImmediatePropagation(),
					this.stopPropagation();
			},
		}),
		ce.each(
			{
				altKey: !0,
				bubbles: !0,
				cancelable: !0,
				changedTouches: !0,
				ctrlKey: !0,
				detail: !0,
				eventPhase: !0,
				metaKey: !0,
				pageX: !0,
				pageY: !0,
				shiftKey: !0,
				view: !0,
				char: !0,
				code: !0,
				charCode: !0,
				key: !0,
				keyCode: !0,
				button: !0,
				buttons: !0,
				clientX: !0,
				clientY: !0,
				offsetX: !0,
				offsetY: !0,
				pointerId: !0,
				pointerType: !0,
				screenX: !0,
				screenY: !0,
				targetTouches: !0,
				toElement: !0,
				touches: !0,
				which: !0,
			},
			ce.event.addProp
		),
		ce.each({ focus: 'focusin', blur: 'focusout' }, function (r, i) {
			function o(e) {
				if (C.documentMode) {
					var t = _.get(this, 'handle'),
						n = ce.event.fix(e);
					(n.type = 'focusin' === e.type ? 'focus' : 'blur'),
						(n.isSimulated = !0),
						t(e),
						n.target === n.currentTarget && t(n);
				} else ce.event.simulate(i, e.target, ce.event.fix(e));
			}
			(ce.event.special[r] = {
				setup: function () {
					var e;
					if ((He(this, r, !0), !C.documentMode)) return !1;
					(e = _.get(this, i)) || this.addEventListener(i, o),
						_.set(this, i, (e || 0) + 1);
				},
				trigger: function () {
					return He(this, r), !0;
				},
				teardown: function () {
					var e;
					if (!C.documentMode) return !1;
					(e = _.get(this, i) - 1)
						? _.set(this, i, e)
						: (this.removeEventListener(i, o), _.remove(this, i));
				},
				_default: function (e) {
					return _.get(e.target, r);
				},
				delegateType: i,
			}),
				(ce.event.special[i] = {
					setup: function () {
						var e = this.ownerDocument || this.document || this,
							t = C.documentMode ? this : e,
							n = _.get(t, i);
						n ||
							(C.documentMode
								? this.addEventListener(i, o)
								: e.addEventListener(r, o, !0)),
							_.set(t, i, (n || 0) + 1);
					},
					teardown: function () {
						var e = this.ownerDocument || this.document || this,
							t = C.documentMode ? this : e,
							n = _.get(t, i) - 1;
						n
							? _.set(t, i, n)
							: (C.documentMode
									? this.removeEventListener(i, o)
									: e.removeEventListener(r, o, !0),
								_.remove(t, i));
					},
				});
		}),
		ce.each(
			{
				mouseenter: 'mouseover',
				mouseleave: 'mouseout',
				pointerenter: 'pointerover',
				pointerleave: 'pointerout',
			},
			function (e, i) {
				ce.event.special[e] = {
					delegateType: i,
					bindType: i,
					handle: function (e) {
						var t,
							n = e.relatedTarget,
							r = e.handleObj;
						return (
							(n && (n === this || ce.contains(this, n))) ||
								((e.type = r.origType),
								(t = r.handler.apply(this, arguments)),
								(e.type = i)),
							t
						);
					},
				};
			}
		),
		ce.fn.extend({
			on: function (e, t, n, r) {
				return Le(this, e, t, n, r);
			},
			one: function (e, t, n, r) {
				return Le(this, e, t, n, r, 1);
			},
			off: function (e, t, n) {
				var r, i;
				if (e && e.preventDefault && e.handleObj)
					return (
						(r = e.handleObj),
						ce(e.delegateTarget).off(
							r.namespace ? r.origType + '.' + r.namespace : r.origType,
							r.selector,
							r.handler
						),
						this
					);
				if ('object' == typeof e) {
					for (i in e) this.off(i, t, e[i]);
					return this;
				}
				return (
					(!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
					!1 === n && (n = qe),
					this.each(function () {
						ce.event.remove(this, e, n, t);
					})
				);
			},
		});
	var Oe = /<script|<style|<link/i,
		Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
	function Re(e, t) {
		return (
			(fe(e, 'table') &&
				fe(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
				ce(e).children('tbody')[0]) ||
			e
		);
	}
	function Ie(e) {
		return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
	}
	function We(e) {
		return (
			'true/' === (e.type || '').slice(0, 5)
				? (e.type = e.type.slice(5))
				: e.removeAttribute('type'),
			e
		);
	}
	function Fe(e, t) {
		var n, r, i, o, a, s;
		if (1 === t.nodeType) {
			if (_.hasData(e) && (s = _.get(e).events))
				for (i in (_.remove(t, 'handle events'), s))
					for (n = 0, r = s[i].length; n < r; n++) ce.event.add(t, i, s[i][n]);
			z.hasData(e) && ((o = z.access(e)), (a = ce.extend({}, o)), z.set(t, a));
		}
	}
	function $e(n, r, i, o) {
		r = g(r);
		var e,
			t,
			a,
			s,
			u,
			l,
			c = 0,
			f = n.length,
			p = f - 1,
			d = r[0],
			h = v(d);
		if (h || (1 < f && 'string' == typeof d && !le.checkClone && Pe.test(d)))
			return n.each(function (e) {
				var t = n.eq(e);
				h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o);
			});
		if (
			f &&
			((t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild),
			1 === e.childNodes.length && (e = t),
			t || o)
		) {
			for (s = (a = ce.map(Se(e, 'script'), Ie)).length; c < f; c++)
				(u = e),
					c !== p &&
						((u = ce.clone(u, !0, !0)), s && ce.merge(a, Se(u, 'script'))),
					i.call(n[c], u, c);
			if (s)
				for (
					l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0;
					c < s;
					c++
				)
					(u = a[c]),
						Ce.test(u.type || '') &&
							!_.access(u, 'globalEval') &&
							ce.contains(l, u) &&
							(u.src && 'module' !== (u.type || '').toLowerCase()
								? ce._evalUrl &&
									!u.noModule &&
									ce._evalUrl(
										u.src,
										{ nonce: u.nonce || u.getAttribute('nonce') },
										l
									)
								: m(u.textContent.replace(Me, ''), u, l));
		}
		return n;
	}
	function Be(e, t, n) {
		for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
			n || 1 !== r.nodeType || ce.cleanData(Se(r)),
				r.parentNode &&
					(n && K(r) && Ee(Se(r, 'script')), r.parentNode.removeChild(r));
		return e;
	}
	ce.extend({
		htmlPrefilter: function (e) {
			return e;
		},
		clone: function (e, t, n) {
			var r,
				i,
				o,
				a,
				s,
				u,
				l,
				c = e.cloneNode(!0),
				f = K(e);
			if (
				!(
					le.noCloneChecked ||
					(1 !== e.nodeType && 11 !== e.nodeType) ||
					ce.isXMLDoc(e)
				)
			)
				for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++)
					(s = o[r]),
						(u = a[r]),
						void 0,
						'input' === (l = u.nodeName.toLowerCase()) && we.test(s.type)
							? (u.checked = s.checked)
							: ('input' !== l && 'textarea' !== l) ||
								(u.defaultValue = s.defaultValue);
			if (t)
				if (n)
					for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++)
						Fe(o[r], a[r]);
				else Fe(e, c);
			return (
				0 < (a = Se(c, 'script')).length && Ee(a, !f && Se(e, 'script')), c
			);
		},
		cleanData: function (e) {
			for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++)
				if ($(n)) {
					if ((t = n[_.expando])) {
						if (t.events)
							for (r in t.events)
								i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle);
						n[_.expando] = void 0;
					}
					n[z.expando] && (n[z.expando] = void 0);
				}
		},
	}),
		ce.fn.extend({
			detach: function (e) {
				return Be(this, e, !0);
			},
			remove: function (e) {
				return Be(this, e);
			},
			text: function (e) {
				return M(
					this,
					function (e) {
						return void 0 === e
							? ce.text(this)
							: this.empty().each(function () {
									(1 !== this.nodeType &&
										11 !== this.nodeType &&
										9 !== this.nodeType) ||
										(this.textContent = e);
								});
					},
					null,
					e,
					arguments.length
				);
			},
			append: function () {
				return $e(this, arguments, function (e) {
					(1 !== this.nodeType &&
						11 !== this.nodeType &&
						9 !== this.nodeType) ||
						Re(this, e).appendChild(e);
				});
			},
			prepend: function () {
				return $e(this, arguments, function (e) {
					if (
						1 === this.nodeType ||
						11 === this.nodeType ||
						9 === this.nodeType
					) {
						var t = Re(this, e);
						t.insertBefore(e, t.firstChild);
					}
				});
			},
			before: function () {
				return $e(this, arguments, function (e) {
					this.parentNode && this.parentNode.insertBefore(e, this);
				});
			},
			after: function () {
				return $e(this, arguments, function (e) {
					this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
				});
			},
			empty: function () {
				for (var e, t = 0; null != (e = this[t]); t++)
					1 === e.nodeType && (ce.cleanData(Se(e, !1)), (e.textContent = ''));
				return this;
			},
			clone: function (e, t) {
				return (
					(e = null != e && e),
					(t = null == t ? e : t),
					this.map(function () {
						return ce.clone(this, e, t);
					})
				);
			},
			html: function (e) {
				return M(
					this,
					function (e) {
						var t = this[0] || {},
							n = 0,
							r = this.length;
						if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
						if (
							'string' == typeof e &&
							!Oe.test(e) &&
							!ke[(Te.exec(e) || ['', ''])[1].toLowerCase()]
						) {
							e = ce.htmlPrefilter(e);
							try {
								for (; n < r; n++)
									1 === (t = this[n] || {}).nodeType &&
										(ce.cleanData(Se(t, !1)), (t.innerHTML = e));
								t = 0;
							} catch (e) {}
						}
						t && this.empty().append(e);
					},
					null,
					e,
					arguments.length
				);
			},
			replaceWith: function () {
				var n = [];
				return $e(
					this,
					arguments,
					function (e) {
						var t = this.parentNode;
						ce.inArray(this, n) < 0 &&
							(ce.cleanData(Se(this)), t && t.replaceChild(e, this));
					},
					n
				);
			},
		}),
		ce.each(
			{
				appendTo: 'append',
				prependTo: 'prepend',
				insertBefore: 'before',
				insertAfter: 'after',
				replaceAll: 'replaceWith',
			},
			function (e, a) {
				ce.fn[e] = function (e) {
					for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++)
						(t = o === i ? this : this.clone(!0)),
							ce(r[o])[a](t),
							s.apply(n, t.get());
					return this.pushStack(n);
				};
			}
		);
	var _e = new RegExp('^(' + G + ')(?!px)[a-z%]+$', 'i'),
		ze = /^--/,
		Xe = function (e) {
			var t = e.ownerDocument.defaultView;
			return (t && t.opener) || (t = ie), t.getComputedStyle(e);
		},
		Ue = function (e, t, n) {
			var r,
				i,
				o = {};
			for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
			for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
			return r;
		},
		Ve = new RegExp(Q.join('|'), 'i');
	function Ge(e, t, n) {
		var r,
			i,
			o,
			a,
			s = ze.test(t),
			u = e.style;
		return (
			(n = n || Xe(e)) &&
				((a = n.getPropertyValue(t) || n[t]),
				s && a && (a = a.replace(ve, '$1') || void 0),
				'' !== a || K(e) || (a = ce.style(e, t)),
				!le.pixelBoxStyles() &&
					_e.test(a) &&
					Ve.test(t) &&
					((r = u.width),
					(i = u.minWidth),
					(o = u.maxWidth),
					(u.minWidth = u.maxWidth = u.width = a),
					(a = n.width),
					(u.width = r),
					(u.minWidth = i),
					(u.maxWidth = o))),
			void 0 !== a ? a + '' : a
		);
	}
	function Ye(e, t) {
		return {
			get: function () {
				if (!e()) return (this.get = t).apply(this, arguments);
				delete this.get;
			},
		};
	}
	!(function () {
		function e() {
			if (l) {
				(u.style.cssText =
					'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
					(l.style.cssText =
						'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
					J.appendChild(u).appendChild(l);
				var e = ie.getComputedStyle(l);
				(n = '1%' !== e.top),
					(s = 12 === t(e.marginLeft)),
					(l.style.right = '60%'),
					(o = 36 === t(e.right)),
					(r = 36 === t(e.width)),
					(l.style.position = 'absolute'),
					(i = 12 === t(l.offsetWidth / 3)),
					J.removeChild(u),
					(l = null);
			}
		}
		function t(e) {
			return Math.round(parseFloat(e));
		}
		var n,
			r,
			i,
			o,
			a,
			s,
			u = C.createElement('div'),
			l = C.createElement('div');
		l.style &&
			((l.style.backgroundClip = 'content-box'),
			(l.cloneNode(!0).style.backgroundClip = ''),
			(le.clearCloneStyle = 'content-box' === l.style.backgroundClip),
			ce.extend(le, {
				boxSizingReliable: function () {
					return e(), r;
				},
				pixelBoxStyles: function () {
					return e(), o;
				},
				pixelPosition: function () {
					return e(), n;
				},
				reliableMarginLeft: function () {
					return e(), s;
				},
				scrollboxSize: function () {
					return e(), i;
				},
				reliableTrDimensions: function () {
					var e, t, n, r;
					return (
						null == a &&
							((e = C.createElement('table')),
							(t = C.createElement('tr')),
							(n = C.createElement('div')),
							(e.style.cssText =
								'position:absolute;left:-11111px;border-collapse:separate'),
							(t.style.cssText = 'box-sizing:content-box;border:1px solid'),
							(t.style.height = '1px'),
							(n.style.height = '9px'),
							(n.style.display = 'block'),
							J.appendChild(e).appendChild(t).appendChild(n),
							(r = ie.getComputedStyle(t)),
							(a =
								parseInt(r.height, 10) +
									parseInt(r.borderTopWidth, 10) +
									parseInt(r.borderBottomWidth, 10) ===
								t.offsetHeight),
							J.removeChild(e)),
						a
					);
				},
			}));
	})();
	var Qe = ['Webkit', 'Moz', 'ms'],
		Je = C.createElement('div').style,
		Ke = {};
	function Ze(e) {
		var t = ce.cssProps[e] || Ke[e];
		return (
			t ||
			(e in Je
				? e
				: (Ke[e] =
						(function (e) {
							var t = e[0].toUpperCase() + e.slice(1),
								n = Qe.length;
							while (n--) if ((e = Qe[n] + t) in Je) return e;
						})(e) || e))
		);
	}
	var et = /^(none|table(?!-c[ea]).+)/,
		tt = { position: 'absolute', visibility: 'hidden', display: 'block' },
		nt = { letterSpacing: '0', fontWeight: '400' };
	function rt(e, t, n) {
		var r = Y.exec(t);
		return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
	}
	function it(e, t, n, r, i, o) {
		var a = 'width' === t ? 1 : 0,
			s = 0,
			u = 0,
			l = 0;
		if (n === (r ? 'border' : 'content')) return 0;
		for (; a < 4; a += 2)
			'margin' === n && (l += ce.css(e, n + Q[a], !0, i)),
				r
					? ('content' === n && (u -= ce.css(e, 'padding' + Q[a], !0, i)),
						'margin' !== n &&
							(u -= ce.css(e, 'border' + Q[a] + 'Width', !0, i)))
					: ((u += ce.css(e, 'padding' + Q[a], !0, i)),
						'padding' !== n
							? (u += ce.css(e, 'border' + Q[a] + 'Width', !0, i))
							: (s += ce.css(e, 'border' + Q[a] + 'Width', !0, i)));
		return (
			!r &&
				0 <= o &&
				(u +=
					Math.max(
						0,
						Math.ceil(
							e['offset' + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
						)
					) || 0),
			u + l
		);
	}
	function ot(e, t, n) {
		var r = Xe(e),
			i =
				(!le.boxSizingReliable() || n) &&
				'border-box' === ce.css(e, 'boxSizing', !1, r),
			o = i,
			a = Ge(e, t, r),
			s = 'offset' + t[0].toUpperCase() + t.slice(1);
		if (_e.test(a)) {
			if (!n) return a;
			a = 'auto';
		}
		return (
			((!le.boxSizingReliable() && i) ||
				(!le.reliableTrDimensions() && fe(e, 'tr')) ||
				'auto' === a ||
				(!parseFloat(a) && 'inline' === ce.css(e, 'display', !1, r))) &&
				e.getClientRects().length &&
				((i = 'border-box' === ce.css(e, 'boxSizing', !1, r)),
				(o = s in e) && (a = e[s])),
			(a = parseFloat(a) || 0) +
				it(e, t, n || (i ? 'border' : 'content'), o, r, a) +
				'px'
		);
	}
	function at(e, t, n, r, i) {
		return new at.prototype.init(e, t, n, r, i);
	}
	ce.extend({
		cssHooks: {
			opacity: {
				get: function (e, t) {
					if (t) {
						var n = Ge(e, 'opacity');
						return '' === n ? '1' : n;
					}
				},
			},
		},
		cssNumber: {
			animationIterationCount: !0,
			aspectRatio: !0,
			borderImageSlice: !0,
			columnCount: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			gridArea: !0,
			gridColumn: !0,
			gridColumnEnd: !0,
			gridColumnStart: !0,
			gridRow: !0,
			gridRowEnd: !0,
			gridRowStart: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			scale: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0,
			fillOpacity: !0,
			floodOpacity: !0,
			stopOpacity: !0,
			strokeMiterlimit: !0,
			strokeOpacity: !0,
		},
		cssProps: {},
		style: function (e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i,
					o,
					a,
					s = F(t),
					u = ze.test(t),
					l = e.style;
				if (
					(u || (t = Ze(s)),
					(a = ce.cssHooks[t] || ce.cssHooks[s]),
					void 0 === n)
				)
					return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
				'string' === (o = typeof n) &&
					(i = Y.exec(n)) &&
					i[1] &&
					((n = te(e, t, i)), (o = 'number')),
					null != n &&
						n == n &&
						('number' !== o ||
							u ||
							(n += (i && i[3]) || (ce.cssNumber[s] ? '' : 'px')),
						le.clearCloneStyle ||
							'' !== n ||
							0 !== t.indexOf('background') ||
							(l[t] = 'inherit'),
						(a && 'set' in a && void 0 === (n = a.set(e, n, r))) ||
							(u ? l.setProperty(t, n) : (l[t] = n)));
			}
		},
		css: function (e, t, n, r) {
			var i,
				o,
				a,
				s = F(t);
			return (
				ze.test(t) || (t = Ze(s)),
				(a = ce.cssHooks[t] || ce.cssHooks[s]) &&
					'get' in a &&
					(i = a.get(e, !0, n)),
				void 0 === i && (i = Ge(e, t, r)),
				'normal' === i && t in nt && (i = nt[t]),
				'' === n || n
					? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
					: i
			);
		},
	}),
		ce.each(['height', 'width'], function (e, u) {
			ce.cssHooks[u] = {
				get: function (e, t, n) {
					if (t)
						return !et.test(ce.css(e, 'display')) ||
							(e.getClientRects().length && e.getBoundingClientRect().width)
							? ot(e, u, n)
							: Ue(e, tt, function () {
									return ot(e, u, n);
								});
				},
				set: function (e, t, n) {
					var r,
						i = Xe(e),
						o = !le.scrollboxSize() && 'absolute' === i.position,
						a = (o || n) && 'border-box' === ce.css(e, 'boxSizing', !1, i),
						s = n ? it(e, u, n, a, i) : 0;
					return (
						a &&
							o &&
							(s -= Math.ceil(
								e['offset' + u[0].toUpperCase() + u.slice(1)] -
									parseFloat(i[u]) -
									it(e, u, 'border', !1, i) -
									0.5
							)),
						s &&
							(r = Y.exec(t)) &&
							'px' !== (r[3] || 'px') &&
							((e.style[u] = t), (t = ce.css(e, u))),
						rt(0, t, s)
					);
				},
			};
		}),
		(ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function (e, t) {
			if (t)
				return (
					(parseFloat(Ge(e, 'marginLeft')) ||
						e.getBoundingClientRect().left -
							Ue(e, { marginLeft: 0 }, function () {
								return e.getBoundingClientRect().left;
							})) + 'px'
				);
		})),
		ce.each({ margin: '', padding: '', border: 'Width' }, function (i, o) {
			(ce.cssHooks[i + o] = {
				expand: function (e) {
					for (
						var t = 0, n = {}, r = 'string' == typeof e ? e.split(' ') : [e];
						t < 4;
						t++
					)
						n[i + Q[t] + o] = r[t] || r[t - 2] || r[0];
					return n;
				},
			}),
				'margin' !== i && (ce.cssHooks[i + o].set = rt);
		}),
		ce.fn.extend({
			css: function (e, t) {
				return M(
					this,
					function (e, t, n) {
						var r,
							i,
							o = {},
							a = 0;
						if (Array.isArray(t)) {
							for (r = Xe(e), i = t.length; a < i; a++)
								o[t[a]] = ce.css(e, t[a], !1, r);
							return o;
						}
						return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t);
					},
					e,
					t,
					1 < arguments.length
				);
			},
		}),
		(((ce.Tween = at).prototype = {
			constructor: at,
			init: function (e, t, n, r, i, o) {
				(this.elem = e),
					(this.prop = n),
					(this.easing = i || ce.easing._default),
					(this.options = t),
					(this.start = this.now = this.cur()),
					(this.end = r),
					(this.unit = o || (ce.cssNumber[n] ? '' : 'px'));
			},
			cur: function () {
				var e = at.propHooks[this.prop];
				return e && e.get ? e.get(this) : at.propHooks._default.get(this);
			},
			run: function (e) {
				var t,
					n = at.propHooks[this.prop];
				return (
					this.options.duration
						? (this.pos = t =
								ce.easing[this.easing](
									e,
									this.options.duration * e,
									0,
									1,
									this.options.duration
								))
						: (this.pos = t = e),
					(this.now = (this.end - this.start) * t + this.start),
					this.options.step &&
						this.options.step.call(this.elem, this.now, this),
					n && n.set ? n.set(this) : at.propHooks._default.set(this),
					this
				);
			},
		}).init.prototype = at.prototype),
		((at.propHooks = {
			_default: {
				get: function (e) {
					var t;
					return 1 !== e.elem.nodeType ||
						(null != e.elem[e.prop] && null == e.elem.style[e.prop])
						? e.elem[e.prop]
						: (t = ce.css(e.elem, e.prop, '')) && 'auto' !== t
							? t
							: 0;
				},
				set: function (e) {
					ce.fx.step[e.prop]
						? ce.fx.step[e.prop](e)
						: 1 !== e.elem.nodeType ||
							  (!ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)])
							? (e.elem[e.prop] = e.now)
							: ce.style(e.elem, e.prop, e.now + e.unit);
				},
			},
		}).scrollTop = at.propHooks.scrollLeft =
			{
				set: function (e) {
					e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
				},
			}),
		(ce.easing = {
			linear: function (e) {
				return e;
			},
			swing: function (e) {
				return 0.5 - Math.cos(e * Math.PI) / 2;
			},
			_default: 'swing',
		}),
		(ce.fx = at.prototype.init),
		(ce.fx.step = {});
	var st,
		ut,
		lt,
		ct,
		ft = /^(?:toggle|show|hide)$/,
		pt = /queueHooks$/;
	function dt() {
		ut &&
			(!1 === C.hidden && ie.requestAnimationFrame
				? ie.requestAnimationFrame(dt)
				: ie.setTimeout(dt, ce.fx.interval),
			ce.fx.tick());
	}
	function ht() {
		return (
			ie.setTimeout(function () {
				st = void 0;
			}),
			(st = Date.now())
		);
	}
	function gt(e, t) {
		var n,
			r = 0,
			i = { height: e };
		for (t = t ? 1 : 0; r < 4; r += 2 - t)
			i['margin' + (n = Q[r])] = i['padding' + n] = e;
		return t && (i.opacity = i.width = e), i;
	}
	function vt(e, t, n) {
		for (
			var r,
				i = (yt.tweeners[t] || []).concat(yt.tweeners['*']),
				o = 0,
				a = i.length;
			o < a;
			o++
		)
			if ((r = i[o].call(n, t, e))) return r;
	}
	function yt(o, e, t) {
		var n,
			a,
			r = 0,
			i = yt.prefilters.length,
			s = ce.Deferred().always(function () {
				delete u.elem;
			}),
			u = function () {
				if (a) return !1;
				for (
					var e = st || ht(),
						t = Math.max(0, l.startTime + l.duration - e),
						n = 1 - (t / l.duration || 0),
						r = 0,
						i = l.tweens.length;
					r < i;
					r++
				)
					l.tweens[r].run(n);
				return (
					s.notifyWith(o, [l, n, t]),
					n < 1 && i
						? t
						: (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
				);
			},
			l = s.promise({
				elem: o,
				props: ce.extend({}, e),
				opts: ce.extend(
					!0,
					{ specialEasing: {}, easing: ce.easing._default },
					t
				),
				originalProperties: e,
				originalOptions: t,
				startTime: st || ht(),
				duration: t.duration,
				tweens: [],
				createTween: function (e, t) {
					var n = ce.Tween(
						o,
						l.opts,
						e,
						t,
						l.opts.specialEasing[e] || l.opts.easing
					);
					return l.tweens.push(n), n;
				},
				stop: function (e) {
					var t = 0,
						n = e ? l.tweens.length : 0;
					if (a) return this;
					for (a = !0; t < n; t++) l.tweens[t].run(1);
					return (
						e
							? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
							: s.rejectWith(o, [l, e]),
						this
					);
				},
			}),
			c = l.props;
		for (
			!(function (e, t) {
				var n, r, i, o, a;
				for (n in e)
					if (
						((i = t[(r = F(n))]),
						(o = e[n]),
						Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
						n !== r && ((e[r] = o), delete e[n]),
						(a = ce.cssHooks[r]) && ('expand' in a))
					)
						for (n in ((o = a.expand(o)), delete e[r], o))
							(n in e) || ((e[n] = o[n]), (t[n] = i));
					else t[r] = i;
			})(c, l.opts.specialEasing);
			r < i;
			r++
		)
			if ((n = yt.prefilters[r].call(l, o, c, l.opts)))
				return (
					v(n.stop) &&
						(ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
					n
				);
		return (
			ce.map(c, vt, l),
			v(l.opts.start) && l.opts.start.call(o, l),
			l
				.progress(l.opts.progress)
				.done(l.opts.done, l.opts.complete)
				.fail(l.opts.fail)
				.always(l.opts.always),
			ce.fx.timer(ce.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
			l
		);
	}
	(ce.Animation = ce.extend(yt, {
		tweeners: {
			'*': [
				function (e, t) {
					var n = this.createTween(e, t);
					return te(n.elem, e, Y.exec(t), n), n;
				},
			],
		},
		tweener: function (e, t) {
			v(e) ? ((t = e), (e = ['*'])) : (e = e.match(D));
			for (var n, r = 0, i = e.length; r < i; r++)
				(n = e[r]),
					(yt.tweeners[n] = yt.tweeners[n] || []),
					yt.tweeners[n].unshift(t);
		},
		prefilters: [
			function (e, t, n) {
				var r,
					i,
					o,
					a,
					s,
					u,
					l,
					c,
					f = 'width' in t || 'height' in t,
					p = this,
					d = {},
					h = e.style,
					g = e.nodeType && ee(e),
					v = _.get(e, 'fxshow');
				for (r in (n.queue ||
					(null == (a = ce._queueHooks(e, 'fx')).unqueued &&
						((a.unqueued = 0),
						(s = a.empty.fire),
						(a.empty.fire = function () {
							a.unqueued || s();
						})),
					a.unqueued++,
					p.always(function () {
						p.always(function () {
							a.unqueued--, ce.queue(e, 'fx').length || a.empty.fire();
						});
					})),
				t))
					if (((i = t[r]), ft.test(i))) {
						if (
							(delete t[r],
							(o = o || 'toggle' === i),
							i === (g ? 'hide' : 'show'))
						) {
							if ('show' !== i || !v || void 0 === v[r]) continue;
							g = !0;
						}
						d[r] = (v && v[r]) || ce.style(e, r);
					}
				if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d))
					for (r in (f &&
						1 === e.nodeType &&
						((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
						null == (l = v && v.display) && (l = _.get(e, 'display')),
						'none' === (c = ce.css(e, 'display')) &&
							(l
								? (c = l)
								: (re([e], !0),
									(l = e.style.display || l),
									(c = ce.css(e, 'display')),
									re([e]))),
						('inline' === c || ('inline-block' === c && null != l)) &&
							'none' === ce.css(e, 'float') &&
							(u ||
								(p.done(function () {
									h.display = l;
								}),
								null == l && ((c = h.display), (l = 'none' === c ? '' : c))),
							(h.display = 'inline-block'))),
					n.overflow &&
						((h.overflow = 'hidden'),
						p.always(function () {
							(h.overflow = n.overflow[0]),
								(h.overflowX = n.overflow[1]),
								(h.overflowY = n.overflow[2]);
						})),
					(u = !1),
					d))
						u ||
							(v
								? 'hidden' in v && (g = v.hidden)
								: (v = _.access(e, 'fxshow', { display: l })),
							o && (v.hidden = !g),
							g && re([e], !0),
							p.done(function () {
								for (r in (g || re([e]), _.remove(e, 'fxshow'), d))
									ce.style(e, r, d[r]);
							})),
							(u = vt(g ? v[r] : 0, r, p)),
							r in v ||
								((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
			},
		],
		prefilter: function (e, t) {
			t ? yt.prefilters.unshift(e) : yt.prefilters.push(e);
		},
	})),
		(ce.speed = function (e, t, n) {
			var r =
				e && 'object' == typeof e
					? ce.extend({}, e)
					: {
							complete: n || (!n && t) || (v(e) && e),
							duration: e,
							easing: (n && t) || (t && !v(t) && t),
						};
			return (
				ce.fx.off
					? (r.duration = 0)
					: 'number' != typeof r.duration &&
						(r.duration in ce.fx.speeds
							? (r.duration = ce.fx.speeds[r.duration])
							: (r.duration = ce.fx.speeds._default)),
				(null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
				(r.old = r.complete),
				(r.complete = function () {
					v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue);
				}),
				r
			);
		}),
		ce.fn.extend({
			fadeTo: function (e, t, n, r) {
				return this.filter(ee)
					.css('opacity', 0)
					.show()
					.end()
					.animate({ opacity: t }, e, n, r);
			},
			animate: function (t, e, n, r) {
				var i = ce.isEmptyObject(t),
					o = ce.speed(e, n, r),
					a = function () {
						var e = yt(this, ce.extend({}, t), o);
						(i || _.get(this, 'finish')) && e.stop(!0);
					};
				return (
					(a.finish = a),
					i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
				);
			},
			stop: function (i, e, o) {
				var a = function (e) {
					var t = e.stop;
					delete e.stop, t(o);
				};
				return (
					'string' != typeof i && ((o = e), (e = i), (i = void 0)),
					e && this.queue(i || 'fx', []),
					this.each(function () {
						var e = !0,
							t = null != i && i + 'queueHooks',
							n = ce.timers,
							r = _.get(this);
						if (t) r[t] && r[t].stop && a(r[t]);
						else for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]);
						for (t = n.length; t--; )
							n[t].elem !== this ||
								(null != i && n[t].queue !== i) ||
								(n[t].anim.stop(o), (e = !1), n.splice(t, 1));
						(!e && o) || ce.dequeue(this, i);
					})
				);
			},
			finish: function (a) {
				return (
					!1 !== a && (a = a || 'fx'),
					this.each(function () {
						var e,
							t = _.get(this),
							n = t[a + 'queue'],
							r = t[a + 'queueHooks'],
							i = ce.timers,
							o = n ? n.length : 0;
						for (
							t.finish = !0,
								ce.queue(this, a, []),
								r && r.stop && r.stop.call(this, !0),
								e = i.length;
							e--;

						)
							i[e].elem === this &&
								i[e].queue === a &&
								(i[e].anim.stop(!0), i.splice(e, 1));
						for (e = 0; e < o; e++)
							n[e] && n[e].finish && n[e].finish.call(this);
						delete t.finish;
					})
				);
			},
		}),
		ce.each(['toggle', 'show', 'hide'], function (e, r) {
			var i = ce.fn[r];
			ce.fn[r] = function (e, t, n) {
				return null == e || 'boolean' == typeof e
					? i.apply(this, arguments)
					: this.animate(gt(r, !0), e, t, n);
			};
		}),
		ce.each(
			{
				slideDown: gt('show'),
				slideUp: gt('hide'),
				slideToggle: gt('toggle'),
				fadeIn: { opacity: 'show' },
				fadeOut: { opacity: 'hide' },
				fadeToggle: { opacity: 'toggle' },
			},
			function (e, r) {
				ce.fn[e] = function (e, t, n) {
					return this.animate(r, e, t, n);
				};
			}
		),
		(ce.timers = []),
		(ce.fx.tick = function () {
			var e,
				t = 0,
				n = ce.timers;
			for (st = Date.now(); t < n.length; t++)
				(e = n[t])() || n[t] !== e || n.splice(t--, 1);
			n.length || ce.fx.stop(), (st = void 0);
		}),
		(ce.fx.timer = function (e) {
			ce.timers.push(e), ce.fx.start();
		}),
		(ce.fx.interval = 13),
		(ce.fx.start = function () {
			ut || ((ut = !0), dt());
		}),
		(ce.fx.stop = function () {
			ut = null;
		}),
		(ce.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
		(ce.fn.delay = function (r, e) {
			return (
				(r = (ce.fx && ce.fx.speeds[r]) || r),
				(e = e || 'fx'),
				this.queue(e, function (e, t) {
					var n = ie.setTimeout(e, r);
					t.stop = function () {
						ie.clearTimeout(n);
					};
				})
			);
		}),
		(lt = C.createElement('input')),
		(ct = C.createElement('select').appendChild(C.createElement('option'))),
		(lt.type = 'checkbox'),
		(le.checkOn = '' !== lt.value),
		(le.optSelected = ct.selected),
		((lt = C.createElement('input')).value = 't'),
		(lt.type = 'radio'),
		(le.radioValue = 't' === lt.value);
	var mt,
		xt = ce.expr.attrHandle;
	ce.fn.extend({
		attr: function (e, t) {
			return M(this, ce.attr, e, t, 1 < arguments.length);
		},
		removeAttr: function (e) {
			return this.each(function () {
				ce.removeAttr(this, e);
			});
		},
	}),
		ce.extend({
			attr: function (e, t, n) {
				var r,
					i,
					o = e.nodeType;
				if (3 !== o && 8 !== o && 2 !== o)
					return 'undefined' == typeof e.getAttribute
						? ce.prop(e, t, n)
						: ((1 === o && ce.isXMLDoc(e)) ||
								(i =
									ce.attrHooks[t.toLowerCase()] ||
									(ce.expr.match.bool.test(t) ? mt : void 0)),
							void 0 !== n
								? null === n
									? void ce.removeAttr(e, t)
									: i && 'set' in i && void 0 !== (r = i.set(e, n, t))
										? r
										: (e.setAttribute(t, n + ''), n)
								: i && 'get' in i && null !== (r = i.get(e, t))
									? r
									: null == (r = ce.find.attr(e, t))
										? void 0
										: r);
			},
			attrHooks: {
				type: {
					set: function (e, t) {
						if (!le.radioValue && 'radio' === t && fe(e, 'input')) {
							var n = e.value;
							return e.setAttribute('type', t), n && (e.value = n), t;
						}
					},
				},
			},
			removeAttr: function (e, t) {
				var n,
					r = 0,
					i = t && t.match(D);
				if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
			},
		}),
		(mt = {
			set: function (e, t, n) {
				return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n;
			},
		}),
		ce.each(ce.expr.match.bool.source.match(/\w+/g), function (e, t) {
			var a = xt[t] || ce.find.attr;
			xt[t] = function (e, t, n) {
				var r,
					i,
					o = t.toLowerCase();
				return (
					n ||
						((i = xt[o]),
						(xt[o] = r),
						(r = null != a(e, t, n) ? o : null),
						(xt[o] = i)),
					r
				);
			};
		});
	var bt = /^(?:input|select|textarea|button)$/i,
		wt = /^(?:a|area)$/i;
	function Tt(e) {
		return (e.match(D) || []).join(' ');
	}
	function Ct(e) {
		return (e.getAttribute && e.getAttribute('class')) || '';
	}
	function kt(e) {
		return Array.isArray(e) ? e : ('string' == typeof e && e.match(D)) || [];
	}
	ce.fn.extend({
		prop: function (e, t) {
			return M(this, ce.prop, e, t, 1 < arguments.length);
		},
		removeProp: function (e) {
			return this.each(function () {
				delete this[ce.propFix[e] || e];
			});
		},
	}),
		ce.extend({
			prop: function (e, t, n) {
				var r,
					i,
					o = e.nodeType;
				if (3 !== o && 8 !== o && 2 !== o)
					return (
						(1 === o && ce.isXMLDoc(e)) ||
							((t = ce.propFix[t] || t), (i = ce.propHooks[t])),
						void 0 !== n
							? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
								? r
								: (e[t] = n)
							: i && 'get' in i && null !== (r = i.get(e, t))
								? r
								: e[t]
					);
			},
			propHooks: {
				tabIndex: {
					get: function (e) {
						var t = ce.find.attr(e, 'tabindex');
						return t
							? parseInt(t, 10)
							: bt.test(e.nodeName) || (wt.test(e.nodeName) && e.href)
								? 0
								: -1;
					},
				},
			},
			propFix: { for: 'htmlFor', class: 'className' },
		}),
		le.optSelected ||
			(ce.propHooks.selected = {
				get: function (e) {
					var t = e.parentNode;
					return t && t.parentNode && t.parentNode.selectedIndex, null;
				},
				set: function (e) {
					var t = e.parentNode;
					t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
				},
			}),
		ce.each(
			[
				'tabIndex',
				'readOnly',
				'maxLength',
				'cellSpacing',
				'cellPadding',
				'rowSpan',
				'colSpan',
				'useMap',
				'frameBorder',
				'contentEditable',
			],
			function () {
				ce.propFix[this.toLowerCase()] = this;
			}
		),
		ce.fn.extend({
			addClass: function (t) {
				var e, n, r, i, o, a;
				return v(t)
					? this.each(function (e) {
							ce(this).addClass(t.call(this, e, Ct(this)));
						})
					: (e = kt(t)).length
						? this.each(function () {
								if (
									((r = Ct(this)),
									(n = 1 === this.nodeType && ' ' + Tt(r) + ' '))
								) {
									for (o = 0; o < e.length; o++)
										(i = e[o]), n.indexOf(' ' + i + ' ') < 0 && (n += i + ' ');
									(a = Tt(n)), r !== a && this.setAttribute('class', a);
								}
							})
						: this;
			},
			removeClass: function (t) {
				var e, n, r, i, o, a;
				return v(t)
					? this.each(function (e) {
							ce(this).removeClass(t.call(this, e, Ct(this)));
						})
					: arguments.length
						? (e = kt(t)).length
							? this.each(function () {
									if (
										((r = Ct(this)),
										(n = 1 === this.nodeType && ' ' + Tt(r) + ' '))
									) {
										for (o = 0; o < e.length; o++) {
											i = e[o];
											while (-1 < n.indexOf(' ' + i + ' '))
												n = n.replace(' ' + i + ' ', ' ');
										}
										(a = Tt(n)), r !== a && this.setAttribute('class', a);
									}
								})
							: this
						: this.attr('class', '');
			},
			toggleClass: function (t, n) {
				var e,
					r,
					i,
					o,
					a = typeof t,
					s = 'string' === a || Array.isArray(t);
				return v(t)
					? this.each(function (e) {
							ce(this).toggleClass(t.call(this, e, Ct(this), n), n);
						})
					: 'boolean' == typeof n && s
						? n
							? this.addClass(t)
							: this.removeClass(t)
						: ((e = kt(t)),
							this.each(function () {
								if (s)
									for (o = ce(this), i = 0; i < e.length; i++)
										(r = e[i]),
											o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
								else
									(void 0 !== t && 'boolean' !== a) ||
										((r = Ct(this)) && _.set(this, '__className__', r),
										this.setAttribute &&
											this.setAttribute(
												'class',
												r || !1 === t ? '' : _.get(this, '__className__') || ''
											));
							}));
			},
			hasClass: function (e) {
				var t,
					n,
					r = 0;
				t = ' ' + e + ' ';
				while ((n = this[r++]))
					if (1 === n.nodeType && -1 < (' ' + Tt(Ct(n)) + ' ').indexOf(t))
						return !0;
				return !1;
			},
		});
	var St = /\r/g;
	ce.fn.extend({
		val: function (n) {
			var r,
				e,
				i,
				t = this[0];
			return arguments.length
				? ((i = v(n)),
					this.each(function (e) {
						var t;
						1 === this.nodeType &&
							(null == (t = i ? n.call(this, e, ce(this).val()) : n)
								? (t = '')
								: 'number' == typeof t
									? (t += '')
									: Array.isArray(t) &&
										(t = ce.map(t, function (e) {
											return null == e ? '' : e + '';
										})),
							((r =
								ce.valHooks[this.type] ||
								ce.valHooks[this.nodeName.toLowerCase()]) &&
								'set' in r &&
								void 0 !== r.set(this, t, 'value')) ||
								(this.value = t));
					}))
				: t
					? (r =
							ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) &&
						'get' in r &&
						void 0 !== (e = r.get(t, 'value'))
						? e
						: 'string' == typeof (e = t.value)
							? e.replace(St, '')
							: null == e
								? ''
								: e
					: void 0;
		},
	}),
		ce.extend({
			valHooks: {
				option: {
					get: function (e) {
						var t = ce.find.attr(e, 'value');
						return null != t ? t : Tt(ce.text(e));
					},
				},
				select: {
					get: function (e) {
						var t,
							n,
							r,
							i = e.options,
							o = e.selectedIndex,
							a = 'select-one' === e.type,
							s = a ? null : [],
							u = a ? o + 1 : i.length;
						for (r = o < 0 ? u : a ? o : 0; r < u; r++)
							if (
								((n = i[r]).selected || r === o) &&
								!n.disabled &&
								(!n.parentNode.disabled || !fe(n.parentNode, 'optgroup'))
							) {
								if (((t = ce(n).val()), a)) return t;
								s.push(t);
							}
						return s;
					},
					set: function (e, t) {
						var n,
							r,
							i = e.options,
							o = ce.makeArray(t),
							a = i.length;
						while (a--)
							((r = i[a]).selected =
								-1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0);
						return n || (e.selectedIndex = -1), o;
					},
				},
			},
		}),
		ce.each(['radio', 'checkbox'], function () {
			(ce.valHooks[this] = {
				set: function (e, t) {
					if (Array.isArray(t))
						return (e.checked = -1 < ce.inArray(ce(e).val(), t));
				},
			}),
				le.checkOn ||
					(ce.valHooks[this].get = function (e) {
						return null === e.getAttribute('value') ? 'on' : e.value;
					});
		});
	var Et = ie.location,
		jt = { guid: Date.now() },
		At = /\?/;
	ce.parseXML = function (e) {
		var t, n;
		if (!e || 'string' != typeof e) return null;
		try {
			t = new ie.DOMParser().parseFromString(e, 'text/xml');
		} catch (e) {}
		return (
			(n = t && t.getElementsByTagName('parsererror')[0]),
			(t && !n) ||
				ce.error(
					'Invalid XML: ' +
						(n
							? ce
									.map(n.childNodes, function (e) {
										return e.textContent;
									})
									.join('\n')
							: e)
				),
			t
		);
	};
	var Dt = /^(?:focusinfocus|focusoutblur)$/,
		Nt = function (e) {
			e.stopPropagation();
		};
	ce.extend(ce.event, {
		trigger: function (e, t, n, r) {
			var i,
				o,
				a,
				s,
				u,
				l,
				c,
				f,
				p = [n || C],
				d = ue.call(e, 'type') ? e.type : e,
				h = ue.call(e, 'namespace') ? e.namespace.split('.') : [];
			if (
				((o = f = a = n = n || C),
				3 !== n.nodeType &&
					8 !== n.nodeType &&
					!Dt.test(d + ce.event.triggered) &&
					(-1 < d.indexOf('.') && ((d = (h = d.split('.')).shift()), h.sort()),
					(u = d.indexOf(':') < 0 && 'on' + d),
					((e = e[ce.expando]
						? e
						: new ce.Event(d, 'object' == typeof e && e)).isTrigger = r
						? 2
						: 3),
					(e.namespace = h.join('.')),
					(e.rnamespace = e.namespace
						? new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')
						: null),
					(e.result = void 0),
					e.target || (e.target = n),
					(t = null == t ? [e] : ce.makeArray(t, [e])),
					(c = ce.event.special[d] || {}),
					r || !c.trigger || !1 !== c.trigger.apply(n, t)))
			) {
				if (!r && !c.noBubble && !y(n)) {
					for (
						s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode);
						o;
						o = o.parentNode
					)
						p.push(o), (a = o);
					a === (n.ownerDocument || C) &&
						p.push(a.defaultView || a.parentWindow || ie);
				}
				i = 0;
				while ((o = p[i++]) && !e.isPropagationStopped())
					(f = o),
						(e.type = 1 < i ? s : c.bindType || d),
						(l =
							(_.get(o, 'events') || Object.create(null))[e.type] &&
							_.get(o, 'handle')) && l.apply(o, t),
						(l = u && o[u]) &&
							l.apply &&
							$(o) &&
							((e.result = l.apply(o, t)),
							!1 === e.result && e.preventDefault());
				return (
					(e.type = d),
					r ||
						e.isDefaultPrevented() ||
						(c._default && !1 !== c._default.apply(p.pop(), t)) ||
						!$(n) ||
						(u &&
							v(n[d]) &&
							!y(n) &&
							((a = n[u]) && (n[u] = null),
							(ce.event.triggered = d),
							e.isPropagationStopped() && f.addEventListener(d, Nt),
							n[d](),
							e.isPropagationStopped() && f.removeEventListener(d, Nt),
							(ce.event.triggered = void 0),
							a && (n[u] = a))),
					e.result
				);
			}
		},
		simulate: function (e, t, n) {
			var r = ce.extend(new ce.Event(), n, { type: e, isSimulated: !0 });
			ce.event.trigger(r, null, t);
		},
	}),
		ce.fn.extend({
			trigger: function (e, t) {
				return this.each(function () {
					ce.event.trigger(e, t, this);
				});
			},
			triggerHandler: function (e, t) {
				var n = this[0];
				if (n) return ce.event.trigger(e, t, n, !0);
			},
		});
	var qt = /\[\]$/,
		Lt = /\r?\n/g,
		Ht = /^(?:submit|button|image|reset|file)$/i,
		Ot = /^(?:input|select|textarea|keygen)/i;
	function Pt(n, e, r, i) {
		var t;
		if (Array.isArray(e))
			ce.each(e, function (e, t) {
				r || qt.test(n)
					? i(n, t)
					: Pt(
							n + '[' + ('object' == typeof t && null != t ? e : '') + ']',
							t,
							r,
							i
						);
			});
		else if (r || 'object' !== x(e)) i(n, e);
		else for (t in e) Pt(n + '[' + t + ']', e[t], r, i);
	}
	(ce.param = function (e, t) {
		var n,
			r = [],
			i = function (e, t) {
				var n = v(t) ? t() : t;
				r[r.length] =
					encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
			};
		if (null == e) return '';
		if (Array.isArray(e) || (e.jquery && !ce.isPlainObject(e)))
			ce.each(e, function () {
				i(this.name, this.value);
			});
		else for (n in e) Pt(n, e[n], t, i);
		return r.join('&');
	}),
		ce.fn.extend({
			serialize: function () {
				return ce.param(this.serializeArray());
			},
			serializeArray: function () {
				return this.map(function () {
					var e = ce.prop(this, 'elements');
					return e ? ce.makeArray(e) : this;
				})
					.filter(function () {
						var e = this.type;
						return (
							this.name &&
							!ce(this).is(':disabled') &&
							Ot.test(this.nodeName) &&
							!Ht.test(e) &&
							(this.checked || !we.test(e))
						);
					})
					.map(function (e, t) {
						var n = ce(this).val();
						return null == n
							? null
							: Array.isArray(n)
								? ce.map(n, function (e) {
										return { name: t.name, value: e.replace(Lt, '\r\n') };
									})
								: { name: t.name, value: n.replace(Lt, '\r\n') };
					})
					.get();
			},
		});
	var Mt = /%20/g,
		Rt = /#.*$/,
		It = /([?&])_=[^&]*/,
		Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Ft = /^(?:GET|HEAD)$/,
		$t = /^\/\//,
		Bt = {},
		_t = {},
		zt = '*/'.concat('*'),
		Xt = C.createElement('a');
	function Ut(o) {
		return function (e, t) {
			'string' != typeof e && ((t = e), (e = '*'));
			var n,
				r = 0,
				i = e.toLowerCase().match(D) || [];
			if (v(t))
				while ((n = i[r++]))
					'+' === n[0]
						? ((n = n.slice(1) || '*'), (o[n] = o[n] || []).unshift(t))
						: (o[n] = o[n] || []).push(t);
		};
	}
	function Vt(t, i, o, a) {
		var s = {},
			u = t === _t;
		function l(e) {
			var r;
			return (
				(s[e] = !0),
				ce.each(t[e] || [], function (e, t) {
					var n = t(i, o, a);
					return 'string' != typeof n || u || s[n]
						? u
							? !(r = n)
							: void 0
						: (i.dataTypes.unshift(n), l(n), !1);
				}),
				r
			);
		}
		return l(i.dataTypes[0]) || (!s['*'] && l('*'));
	}
	function Gt(e, t) {
		var n,
			r,
			i = ce.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
		return r && ce.extend(!0, e, r), e;
	}
	(Xt.href = Et.href),
		ce.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: Et.href,
				type: 'GET',
				isLocal:
					/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
						Et.protocol
					),
				global: !0,
				processData: !0,
				async: !0,
				contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
				accepts: {
					'*': zt,
					text: 'text/plain',
					html: 'text/html',
					xml: 'application/xml, text/xml',
					json: 'application/json, text/javascript',
				},
				contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
				responseFields: {
					xml: 'responseXML',
					text: 'responseText',
					json: 'responseJSON',
				},
				converters: {
					'* text': String,
					'text html': !0,
					'text json': JSON.parse,
					'text xml': ce.parseXML,
				},
				flatOptions: { url: !0, context: !0 },
			},
			ajaxSetup: function (e, t) {
				return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e);
			},
			ajaxPrefilter: Ut(Bt),
			ajaxTransport: Ut(_t),
			ajax: function (e, t) {
				'object' == typeof e && ((t = e), (e = void 0)), (t = t || {});
				var c,
					f,
					p,
					n,
					d,
					r,
					h,
					g,
					i,
					o,
					v = ce.ajaxSetup({}, t),
					y = v.context || v,
					m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event,
					x = ce.Deferred(),
					b = ce.Callbacks('once memory'),
					w = v.statusCode || {},
					a = {},
					s = {},
					u = 'canceled',
					T = {
						readyState: 0,
						getResponseHeader: function (e) {
							var t;
							if (h) {
								if (!n) {
									n = {};
									while ((t = Wt.exec(p)))
										n[t[1].toLowerCase() + ' '] = (
											n[t[1].toLowerCase() + ' '] || []
										).concat(t[2]);
								}
								t = n[e.toLowerCase() + ' '];
							}
							return null == t ? null : t.join(', ');
						},
						getAllResponseHeaders: function () {
							return h ? p : null;
						},
						setRequestHeader: function (e, t) {
							return (
								null == h &&
									((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
									(a[e] = t)),
								this
							);
						},
						overrideMimeType: function (e) {
							return null == h && (v.mimeType = e), this;
						},
						statusCode: function (e) {
							var t;
							if (e)
								if (h) T.always(e[T.status]);
								else for (t in e) w[t] = [w[t], e[t]];
							return this;
						},
						abort: function (e) {
							var t = e || u;
							return c && c.abort(t), l(0, t), this;
						},
					};
				if (
					(x.promise(T),
					(v.url = ((e || v.url || Et.href) + '').replace(
						$t,
						Et.protocol + '//'
					)),
					(v.type = t.method || t.type || v.method || v.type),
					(v.dataTypes = (v.dataType || '*').toLowerCase().match(D) || ['']),
					null == v.crossDomain)
				) {
					r = C.createElement('a');
					try {
						(r.href = v.url),
							(r.href = r.href),
							(v.crossDomain =
								Xt.protocol + '//' + Xt.host != r.protocol + '//' + r.host);
					} catch (e) {
						v.crossDomain = !0;
					}
				}
				if (
					(v.data &&
						v.processData &&
						'string' != typeof v.data &&
						(v.data = ce.param(v.data, v.traditional)),
					Vt(Bt, v, t, T),
					h)
				)
					return T;
				for (i in ((g = ce.event && v.global) &&
					0 == ce.active++ &&
					ce.event.trigger('ajaxStart'),
				(v.type = v.type.toUpperCase()),
				(v.hasContent = !Ft.test(v.type)),
				(f = v.url.replace(Rt, '')),
				v.hasContent
					? v.data &&
						v.processData &&
						0 ===
							(v.contentType || '').indexOf(
								'application/x-www-form-urlencoded'
							) &&
						(v.data = v.data.replace(Mt, '+'))
					: ((o = v.url.slice(f.length)),
						v.data &&
							(v.processData || 'string' == typeof v.data) &&
							((f += (At.test(f) ? '&' : '?') + v.data), delete v.data),
						!1 === v.cache &&
							((f = f.replace(It, '$1')),
							(o = (At.test(f) ? '&' : '?') + '_=' + jt.guid++ + o)),
						(v.url = f + o)),
				v.ifModified &&
					(ce.lastModified[f] &&
						T.setRequestHeader('If-Modified-Since', ce.lastModified[f]),
					ce.etag[f] && T.setRequestHeader('If-None-Match', ce.etag[f])),
				((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
					T.setRequestHeader('Content-Type', v.contentType),
				T.setRequestHeader(
					'Accept',
					v.dataTypes[0] && v.accepts[v.dataTypes[0]]
						? v.accepts[v.dataTypes[0]] +
								('*' !== v.dataTypes[0] ? ', ' + zt + '; q=0.01' : '')
						: v.accepts['*']
				),
				v.headers))
					T.setRequestHeader(i, v.headers[i]);
				if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
					return T.abort();
				if (
					((u = 'abort'),
					b.add(v.complete),
					T.done(v.success),
					T.fail(v.error),
					(c = Vt(_t, v, t, T)))
				) {
					if (((T.readyState = 1), g && m.trigger('ajaxSend', [T, v]), h))
						return T;
					v.async &&
						0 < v.timeout &&
						(d = ie.setTimeout(function () {
							T.abort('timeout');
						}, v.timeout));
					try {
						(h = !1), c.send(a, l);
					} catch (e) {
						if (h) throw e;
						l(-1, e);
					}
				} else l(-1, 'No Transport');
				function l(e, t, n, r) {
					var i,
						o,
						a,
						s,
						u,
						l = t;
					h ||
						((h = !0),
						d && ie.clearTimeout(d),
						(c = void 0),
						(p = r || ''),
						(T.readyState = 0 < e ? 4 : 0),
						(i = (200 <= e && e < 300) || 304 === e),
						n &&
							(s = (function (e, t, n) {
								var r,
									i,
									o,
									a,
									s = e.contents,
									u = e.dataTypes;
								while ('*' === u[0])
									u.shift(),
										void 0 === r &&
											(r = e.mimeType || t.getResponseHeader('Content-Type'));
								if (r)
									for (i in s)
										if (s[i] && s[i].test(r)) {
											u.unshift(i);
											break;
										}
								if (u[0] in n) o = u[0];
								else {
									for (i in n) {
										if (!u[0] || e.converters[i + ' ' + u[0]]) {
											o = i;
											break;
										}
										a || (a = i);
									}
									o = o || a;
								}
								if (o) return o !== u[0] && u.unshift(o), n[o];
							})(v, T, n)),
						!i &&
							-1 < ce.inArray('script', v.dataTypes) &&
							ce.inArray('json', v.dataTypes) < 0 &&
							(v.converters['text script'] = function () {}),
						(s = (function (e, t, n, r) {
							var i,
								o,
								a,
								s,
								u,
								l = {},
								c = e.dataTypes.slice();
							if (c[1])
								for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
							o = c.shift();
							while (o)
								if (
									(e.responseFields[o] && (n[e.responseFields[o]] = t),
									!u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
									(u = o),
									(o = c.shift()))
								)
									if ('*' === o) o = u;
									else if ('*' !== u && u !== o) {
										if (!(a = l[u + ' ' + o] || l['* ' + o]))
											for (i in l)
												if (
													(s = i.split(' '))[1] === o &&
													(a = l[u + ' ' + s[0]] || l['* ' + s[0]])
												) {
													!0 === a
														? (a = l[i])
														: !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
													break;
												}
										if (!0 !== a)
											if (a && e['throws']) t = a(t);
											else
												try {
													t = a(t);
												} catch (e) {
													return {
														state: 'parsererror',
														error: a
															? e
															: 'No conversion from ' + u + ' to ' + o,
													};
												}
									}
							return { state: 'success', data: t };
						})(v, s, T, i)),
						i
							? (v.ifModified &&
									((u = T.getResponseHeader('Last-Modified')) &&
										(ce.lastModified[f] = u),
									(u = T.getResponseHeader('etag')) && (ce.etag[f] = u)),
								204 === e || 'HEAD' === v.type
									? (l = 'nocontent')
									: 304 === e
										? (l = 'notmodified')
										: ((l = s.state), (o = s.data), (i = !(a = s.error))))
							: ((a = l), (!e && l) || ((l = 'error'), e < 0 && (e = 0))),
						(T.status = e),
						(T.statusText = (t || l) + ''),
						i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
						T.statusCode(w),
						(w = void 0),
						g && m.trigger(i ? 'ajaxSuccess' : 'ajaxError', [T, v, i ? o : a]),
						b.fireWith(y, [T, l]),
						g &&
							(m.trigger('ajaxComplete', [T, v]),
							--ce.active || ce.event.trigger('ajaxStop')));
				}
				return T;
			},
			getJSON: function (e, t, n) {
				return ce.get(e, t, n, 'json');
			},
			getScript: function (e, t) {
				return ce.get(e, void 0, t, 'script');
			},
		}),
		ce.each(['get', 'post'], function (e, i) {
			ce[i] = function (e, t, n, r) {
				return (
					v(t) && ((r = r || n), (n = t), (t = void 0)),
					ce.ajax(
						ce.extend(
							{ url: e, type: i, dataType: r, data: t, success: n },
							ce.isPlainObject(e) && e
						)
					)
				);
			};
		}),
		ce.ajaxPrefilter(function (e) {
			var t;
			for (t in e.headers)
				'content-type' === t.toLowerCase() &&
					(e.contentType = e.headers[t] || '');
		}),
		(ce._evalUrl = function (e, t, n) {
			return ce.ajax({
				url: e,
				type: 'GET',
				dataType: 'script',
				cache: !0,
				async: !1,
				global: !1,
				converters: { 'text script': function () {} },
				dataFilter: function (e) {
					ce.globalEval(e, t, n);
				},
			});
		}),
		ce.fn.extend({
			wrapAll: function (e) {
				var t;
				return (
					this[0] &&
						(v(e) && (e = e.call(this[0])),
						(t = ce(e, this[0].ownerDocument).eq(0).clone(!0)),
						this[0].parentNode && t.insertBefore(this[0]),
						t
							.map(function () {
								var e = this;
								while (e.firstElementChild) e = e.firstElementChild;
								return e;
							})
							.append(this)),
					this
				);
			},
			wrapInner: function (n) {
				return v(n)
					? this.each(function (e) {
							ce(this).wrapInner(n.call(this, e));
						})
					: this.each(function () {
							var e = ce(this),
								t = e.contents();
							t.length ? t.wrapAll(n) : e.append(n);
						});
			},
			wrap: function (t) {
				var n = v(t);
				return this.each(function (e) {
					ce(this).wrapAll(n ? t.call(this, e) : t);
				});
			},
			unwrap: function (e) {
				return (
					this.parent(e)
						.not('body')
						.each(function () {
							ce(this).replaceWith(this.childNodes);
						}),
					this
				);
			},
		}),
		(ce.expr.pseudos.hidden = function (e) {
			return !ce.expr.pseudos.visible(e);
		}),
		(ce.expr.pseudos.visible = function (e) {
			return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
		}),
		(ce.ajaxSettings.xhr = function () {
			try {
				return new ie.XMLHttpRequest();
			} catch (e) {}
		});
	var Yt = { 0: 200, 1223: 204 },
		Qt = ce.ajaxSettings.xhr();
	(le.cors = !!Qt && 'withCredentials' in Qt),
		(le.ajax = Qt = !!Qt),
		ce.ajaxTransport(function (i) {
			var o, a;
			if (le.cors || (Qt && !i.crossDomain))
				return {
					send: function (e, t) {
						var n,
							r = i.xhr();
						if (
							(r.open(i.type, i.url, i.async, i.username, i.password),
							i.xhrFields)
						)
							for (n in i.xhrFields) r[n] = i.xhrFields[n];
						for (n in (i.mimeType &&
							r.overrideMimeType &&
							r.overrideMimeType(i.mimeType),
						i.crossDomain ||
							e['X-Requested-With'] ||
							(e['X-Requested-With'] = 'XMLHttpRequest'),
						e))
							r.setRequestHeader(n, e[n]);
						(o = function (e) {
							return function () {
								o &&
									((o =
										a =
										r.onload =
										r.onerror =
										r.onabort =
										r.ontimeout =
										r.onreadystatechange =
											null),
									'abort' === e
										? r.abort()
										: 'error' === e
											? 'number' != typeof r.status
												? t(0, 'error')
												: t(r.status, r.statusText)
											: t(
													Yt[r.status] || r.status,
													r.statusText,
													'text' !== (r.responseType || 'text') ||
														'string' != typeof r.responseText
														? { binary: r.response }
														: { text: r.responseText },
													r.getAllResponseHeaders()
												));
							};
						}),
							(r.onload = o()),
							(a = r.onerror = r.ontimeout = o('error')),
							void 0 !== r.onabort
								? (r.onabort = a)
								: (r.onreadystatechange = function () {
										4 === r.readyState &&
											ie.setTimeout(function () {
												o && a();
											});
									}),
							(o = o('abort'));
						try {
							r.send((i.hasContent && i.data) || null);
						} catch (e) {
							if (o) throw e;
						}
					},
					abort: function () {
						o && o();
					},
				};
		}),
		ce.ajaxPrefilter(function (e) {
			e.crossDomain && (e.contents.script = !1);
		}),
		ce.ajaxSetup({
			accepts: {
				script:
					'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
			},
			contents: { script: /\b(?:java|ecma)script\b/ },
			converters: {
				'text script': function (e) {
					return ce.globalEval(e), e;
				},
			},
		}),
		ce.ajaxPrefilter('script', function (e) {
			void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
		}),
		ce.ajaxTransport('script', function (n) {
			var r, i;
			if (n.crossDomain || n.scriptAttrs)
				return {
					send: function (e, t) {
						(r = ce('<script>')
							.attr(n.scriptAttrs || {})
							.prop({ charset: n.scriptCharset, src: n.url })
							.on(
								'load error',
								(i = function (e) {
									r.remove(),
										(i = null),
										e && t('error' === e.type ? 404 : 200, e.type);
								})
							)),
							C.head.appendChild(r[0]);
					},
					abort: function () {
						i && i();
					},
				};
		});
	var Jt,
		Kt = [],
		Zt = /(=)\?(?=&|$)|\?\?/;
	ce.ajaxSetup({
		jsonp: 'callback',
		jsonpCallback: function () {
			var e = Kt.pop() || ce.expando + '_' + jt.guid++;
			return (this[e] = !0), e;
		},
	}),
		ce.ajaxPrefilter('json jsonp', function (e, t, n) {
			var r,
				i,
				o,
				a =
					!1 !== e.jsonp &&
					(Zt.test(e.url)
						? 'url'
						: 'string' == typeof e.data &&
							0 ===
								(e.contentType || '').indexOf(
									'application/x-www-form-urlencoded'
								) &&
							Zt.test(e.data) &&
							'data');
			if (a || 'jsonp' === e.dataTypes[0])
				return (
					(r = e.jsonpCallback =
						v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
					a
						? (e[a] = e[a].replace(Zt, '$1' + r))
						: !1 !== e.jsonp &&
							(e.url += (At.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
					(e.converters['script json'] = function () {
						return o || ce.error(r + ' was not called'), o[0];
					}),
					(e.dataTypes[0] = 'json'),
					(i = ie[r]),
					(ie[r] = function () {
						o = arguments;
					}),
					n.always(function () {
						void 0 === i ? ce(ie).removeProp(r) : (ie[r] = i),
							e[r] && ((e.jsonpCallback = t.jsonpCallback), Kt.push(r)),
							o && v(i) && i(o[0]),
							(o = i = void 0);
					}),
					'script'
				);
		}),
		(le.createHTMLDocument =
			(((Jt = C.implementation.createHTMLDocument('').body).innerHTML =
				'<form></form><form></form>'),
			2 === Jt.childNodes.length)),
		(ce.parseHTML = function (e, t, n) {
			return 'string' != typeof e
				? []
				: ('boolean' == typeof t && ((n = t), (t = !1)),
					t ||
						(le.createHTMLDocument
							? (((r = (t =
									C.implementation.createHTMLDocument('')).createElement(
									'base'
								)).href = C.location.href),
								t.head.appendChild(r))
							: (t = C)),
					(o = !n && []),
					(i = w.exec(e))
						? [t.createElement(i[1])]
						: ((i = Ae([e], t, o)),
							o && o.length && ce(o).remove(),
							ce.merge([], i.childNodes)));
			var r, i, o;
		}),
		(ce.fn.load = function (e, t, n) {
			var r,
				i,
				o,
				a = this,
				s = e.indexOf(' ');
			return (
				-1 < s && ((r = Tt(e.slice(s))), (e = e.slice(0, s))),
				v(t)
					? ((n = t), (t = void 0))
					: t && 'object' == typeof t && (i = 'POST'),
				0 < a.length &&
					ce
						.ajax({ url: e, type: i || 'GET', dataType: 'html', data: t })
						.done(function (e) {
							(o = arguments),
								a.html(r ? ce('<div>').append(ce.parseHTML(e)).find(r) : e);
						})
						.always(
							n &&
								function (e, t) {
									a.each(function () {
										n.apply(this, o || [e.responseText, t, e]);
									});
								}
						),
				this
			);
		}),
		(ce.expr.pseudos.animated = function (t) {
			return ce.grep(ce.timers, function (e) {
				return t === e.elem;
			}).length;
		}),
		(ce.offset = {
			setOffset: function (e, t, n) {
				var r,
					i,
					o,
					a,
					s,
					u,
					l = ce.css(e, 'position'),
					c = ce(e),
					f = {};
				'static' === l && (e.style.position = 'relative'),
					(s = c.offset()),
					(o = ce.css(e, 'top')),
					(u = ce.css(e, 'left')),
					('absolute' === l || 'fixed' === l) && -1 < (o + u).indexOf('auto')
						? ((a = (r = c.position()).top), (i = r.left))
						: ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
					v(t) && (t = t.call(e, n, ce.extend({}, s))),
					null != t.top && (f.top = t.top - s.top + a),
					null != t.left && (f.left = t.left - s.left + i),
					'using' in t ? t.using.call(e, f) : c.css(f);
			},
		}),
		ce.fn.extend({
			offset: function (t) {
				if (arguments.length)
					return void 0 === t
						? this
						: this.each(function (e) {
								ce.offset.setOffset(this, t, e);
							});
				var e,
					n,
					r = this[0];
				return r
					? r.getClientRects().length
						? ((e = r.getBoundingClientRect()),
							(n = r.ownerDocument.defaultView),
							{ top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
						: { top: 0, left: 0 }
					: void 0;
			},
			position: function () {
				if (this[0]) {
					var e,
						t,
						n,
						r = this[0],
						i = { top: 0, left: 0 };
					if ('fixed' === ce.css(r, 'position')) t = r.getBoundingClientRect();
					else {
						(t = this.offset()),
							(n = r.ownerDocument),
							(e = r.offsetParent || n.documentElement);
						while (
							e &&
							(e === n.body || e === n.documentElement) &&
							'static' === ce.css(e, 'position')
						)
							e = e.parentNode;
						e &&
							e !== r &&
							1 === e.nodeType &&
							(((i = ce(e).offset()).top += ce.css(e, 'borderTopWidth', !0)),
							(i.left += ce.css(e, 'borderLeftWidth', !0)));
					}
					return {
						top: t.top - i.top - ce.css(r, 'marginTop', !0),
						left: t.left - i.left - ce.css(r, 'marginLeft', !0),
					};
				}
			},
			offsetParent: function () {
				return this.map(function () {
					var e = this.offsetParent;
					while (e && 'static' === ce.css(e, 'position')) e = e.offsetParent;
					return e || J;
				});
			},
		}),
		ce.each(
			{ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
			function (t, i) {
				var o = 'pageYOffset' === i;
				ce.fn[t] = function (e) {
					return M(
						this,
						function (e, t, n) {
							var r;
							if (
								(y(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
								void 0 === n)
							)
								return r ? r[i] : e[t];
							r
								? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
								: (e[t] = n);
						},
						t,
						e,
						arguments.length
					);
				};
			}
		),
		ce.each(['top', 'left'], function (e, n) {
			ce.cssHooks[n] = Ye(le.pixelPosition, function (e, t) {
				if (t)
					return (t = Ge(e, n)), _e.test(t) ? ce(e).position()[n] + 'px' : t;
			});
		}),
		ce.each({ Height: 'height', Width: 'width' }, function (a, s) {
			ce.each(
				{ padding: 'inner' + a, content: s, '': 'outer' + a },
				function (r, o) {
					ce.fn[o] = function (e, t) {
						var n = arguments.length && (r || 'boolean' != typeof e),
							i = r || (!0 === e || !0 === t ? 'margin' : 'border');
						return M(
							this,
							function (e, t, n) {
								var r;
								return y(e)
									? 0 === o.indexOf('outer')
										? e['inner' + a]
										: e.document.documentElement['client' + a]
									: 9 === e.nodeType
										? ((r = e.documentElement),
											Math.max(
												e.body['scroll' + a],
												r['scroll' + a],
												e.body['offset' + a],
												r['offset' + a],
												r['client' + a]
											))
										: void 0 === n
											? ce.css(e, t, i)
											: ce.style(e, t, n, i);
							},
							s,
							n ? e : void 0,
							n
						);
					};
				}
			);
		}),
		ce.each(
			[
				'ajaxStart',
				'ajaxStop',
				'ajaxComplete',
				'ajaxError',
				'ajaxSuccess',
				'ajaxSend',
			],
			function (e, t) {
				ce.fn[t] = function (e) {
					return this.on(t, e);
				};
			}
		),
		ce.fn.extend({
			bind: function (e, t, n) {
				return this.on(e, null, t, n);
			},
			unbind: function (e, t) {
				return this.off(e, null, t);
			},
			delegate: function (e, t, n, r) {
				return this.on(t, e, n, r);
			},
			undelegate: function (e, t, n) {
				return 1 === arguments.length
					? this.off(e, '**')
					: this.off(t, e || '**', n);
			},
			hover: function (e, t) {
				return this.on('mouseenter', e).on('mouseleave', t || e);
			},
		}),
		ce.each(
			'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
				' '
			),
			function (e, n) {
				ce.fn[n] = function (e, t) {
					return 0 < arguments.length
						? this.on(n, null, e, t)
						: this.trigger(n);
				};
			}
		);
	var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
	(ce.proxy = function (e, t) {
		var n, r, i;
		if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
			return (
				(r = ae.call(arguments, 2)),
				((i = function () {
					return e.apply(t || this, r.concat(ae.call(arguments)));
				}).guid = e.guid =
					e.guid || ce.guid++),
				i
			);
	}),
		(ce.holdReady = function (e) {
			e ? ce.readyWait++ : ce.ready(!0);
		}),
		(ce.isArray = Array.isArray),
		(ce.parseJSON = JSON.parse),
		(ce.nodeName = fe),
		(ce.isFunction = v),
		(ce.isWindow = y),
		(ce.camelCase = F),
		(ce.type = x),
		(ce.now = Date.now),
		(ce.isNumeric = function (e) {
			var t = ce.type(e);
			return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
		}),
		(ce.trim = function (e) {
			return null == e ? '' : (e + '').replace(en, '$1');
		}),
		'function' == typeof define &&
			define.amd &&
			define('jquery', [], function () {
				return ce;
			});
	var tn = ie.jQuery,
		nn = ie.$;
	return (
		(ce.noConflict = function (e) {
			return (
				ie.$ === ce && (ie.$ = nn),
				e && ie.jQuery === ce && (ie.jQuery = tn),
				ce
			);
		}),
		'undefined' == typeof e && (ie.jQuery = ie.$ = ce),
		ce
	);
});
/*!
 * Bootstrap v5.3.3 (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = e())
		: 'function' == typeof define && define.amd
			? define(e)
			: ((t =
					'undefined' != typeof globalThis ? globalThis : t || self).bootstrap =
					e());
})(this, function () {
	'use strict';
	const t = new Map(),
		e = {
			set(e, i, n) {
				t.has(e) || t.set(e, new Map());
				const s = t.get(e);
				s.has(i) || 0 === s.size
					? s.set(i, n)
					: console.error(
							`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`
						);
			},
			get: (e, i) => (t.has(e) && t.get(e).get(i)) || null,
			remove(e, i) {
				if (!t.has(e)) return;
				const n = t.get(e);
				n.delete(i), 0 === n.size && t.delete(e);
			},
		},
		i = 'transitionend',
		n = (t) => (
			t &&
				window.CSS &&
				window.CSS.escape &&
				(t = t.replace(/#([^\s"#']+)/g, (t, e) => `#${CSS.escape(e)}`)),
			t
		),
		s = (t) => {
			t.dispatchEvent(new Event(i));
		},
		o = (t) =>
			!(!t || 'object' != typeof t) &&
			(void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
		r = (t) =>
			o(t)
				? t.jquery
					? t[0]
					: t
				: 'string' == typeof t && t.length > 0
					? document.querySelector(n(t))
					: null,
		a = (t) => {
			if (!o(t) || 0 === t.getClientRects().length) return !1;
			const e =
					'visible' === getComputedStyle(t).getPropertyValue('visibility'),
				i = t.closest('details:not([open])');
			if (!i) return e;
			if (i !== t) {
				const e = t.closest('summary');
				if (e && e.parentNode !== i) return !1;
				if (null === e) return !1;
			}
			return e;
		},
		l = (t) =>
			!t ||
			t.nodeType !== Node.ELEMENT_NODE ||
			!!t.classList.contains('disabled') ||
			(void 0 !== t.disabled
				? t.disabled
				: t.hasAttribute('disabled') && 'false' !== t.getAttribute('disabled')),
		c = (t) => {
			if (!document.documentElement.attachShadow) return null;
			if ('function' == typeof t.getRootNode) {
				const e = t.getRootNode();
				return e instanceof ShadowRoot ? e : null;
			}
			return t instanceof ShadowRoot
				? t
				: t.parentNode
					? c(t.parentNode)
					: null;
		},
		h = () => {},
		d = (t) => {
			t.offsetHeight;
		},
		u = () =>
			window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')
				? window.jQuery
				: null,
		f = [],
		p = () => 'rtl' === document.documentElement.dir,
		m = (t) => {
			var e;
			(e = () => {
				const e = u();
				if (e) {
					const i = t.NAME,
						n = e.fn[i];
					(e.fn[i] = t.jQueryInterface),
						(e.fn[i].Constructor = t),
						(e.fn[i].noConflict = () => ((e.fn[i] = n), t.jQueryInterface));
				}
			}),
				'loading' === document.readyState
					? (f.length ||
							document.addEventListener('DOMContentLoaded', () => {
								for (const t of f) t();
							}),
						f.push(e))
					: e();
		},
		g = (t, e = [], i = t) => ('function' == typeof t ? t(...e) : i),
		_ = (t, e, n = !0) => {
			if (!n) return void g(t);
			const o =
				((t) => {
					if (!t) return 0;
					let { transitionDuration: e, transitionDelay: i } =
						window.getComputedStyle(t);
					const n = Number.parseFloat(e),
						s = Number.parseFloat(i);
					return n || s
						? ((e = e.split(',')[0]),
							(i = i.split(',')[0]),
							1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
						: 0;
				})(e) + 5;
			let r = !1;
			const a = ({ target: n }) => {
				n === e && ((r = !0), e.removeEventListener(i, a), g(t));
			};
			e.addEventListener(i, a),
				setTimeout(() => {
					r || s(e);
				}, o);
		},
		b = (t, e, i, n) => {
			const s = t.length;
			let o = t.indexOf(e);
			return -1 === o
				? !i && n
					? t[s - 1]
					: t[0]
				: ((o += i ? 1 : -1),
					n && (o = (o + s) % s),
					t[Math.max(0, Math.min(o, s - 1))]);
		},
		v = /[^.]*(?=\..*)\.|.*/,
		y = /\..*/,
		w = /::\d+$/,
		A = {};
	let E = 1;
	const T = { mouseenter: 'mouseover', mouseleave: 'mouseout' },
		C = new Set([
			'click',
			'dblclick',
			'mouseup',
			'mousedown',
			'contextmenu',
			'mousewheel',
			'DOMMouseScroll',
			'mouseover',
			'mouseout',
			'mousemove',
			'selectstart',
			'selectend',
			'keydown',
			'keypress',
			'keyup',
			'orientationchange',
			'touchstart',
			'touchmove',
			'touchend',
			'touchcancel',
			'pointerdown',
			'pointermove',
			'pointerup',
			'pointerleave',
			'pointercancel',
			'gesturestart',
			'gesturechange',
			'gestureend',
			'focus',
			'blur',
			'change',
			'reset',
			'select',
			'submit',
			'focusin',
			'focusout',
			'load',
			'unload',
			'beforeunload',
			'resize',
			'move',
			'DOMContentLoaded',
			'readystatechange',
			'error',
			'abort',
			'scroll',
		]);
	function O(t, e) {
		return (e && `${e}::${E++}`) || t.uidEvent || E++;
	}
	function x(t) {
		const e = O(t);
		return (t.uidEvent = e), (A[e] = A[e] || {}), A[e];
	}
	function k(t, e, i = null) {
		return Object.values(t).find(
			(t) => t.callable === e && t.delegationSelector === i
		);
	}
	function L(t, e, i) {
		const n = 'string' == typeof e,
			s = n ? i : e || i;
		let o = I(t);
		return C.has(o) || (o = t), [n, s, o];
	}
	function S(t, e, i, n, s) {
		if ('string' != typeof e || !t) return;
		let [o, r, a] = L(e, i, n);
		if (e in T) {
			const t = (t) =>
				function (e) {
					if (
						!e.relatedTarget ||
						(e.relatedTarget !== e.delegateTarget &&
							!e.delegateTarget.contains(e.relatedTarget))
					)
						return t.call(this, e);
				};
			r = t(r);
		}
		const l = x(t),
			c = l[a] || (l[a] = {}),
			h = k(c, r, o ? i : null);
		if (h) return void (h.oneOff = h.oneOff && s);
		const d = O(r, e.replace(v, '')),
			u = o
				? (function (t, e, i) {
						return function n(s) {
							const o = t.querySelectorAll(e);
							for (let { target: r } = s; r && r !== this; r = r.parentNode)
								for (const a of o)
									if (a === r)
										return (
											P(s, { delegateTarget: r }),
											n.oneOff && N.off(t, s.type, e, i),
											i.apply(r, [s])
										);
						};
					})(t, i, r)
				: (function (t, e) {
						return function i(n) {
							return (
								P(n, { delegateTarget: t }),
								i.oneOff && N.off(t, n.type, e),
								e.apply(t, [n])
							);
						};
					})(t, r);
		(u.delegationSelector = o ? i : null),
			(u.callable = r),
			(u.oneOff = s),
			(u.uidEvent = d),
			(c[d] = u),
			t.addEventListener(a, u, o);
	}
	function D(t, e, i, n, s) {
		const o = k(e[i], n, s);
		o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
	}
	function $(t, e, i, n) {
		const s = e[i] || {};
		for (const [o, r] of Object.entries(s))
			o.includes(n) && D(t, e, i, r.callable, r.delegationSelector);
	}
	function I(t) {
		return (t = t.replace(y, '')), T[t] || t;
	}
	const N = {
		on(t, e, i, n) {
			S(t, e, i, n, !1);
		},
		one(t, e, i, n) {
			S(t, e, i, n, !0);
		},
		off(t, e, i, n) {
			if ('string' != typeof e || !t) return;
			const [s, o, r] = L(e, i, n),
				a = r !== e,
				l = x(t),
				c = l[r] || {},
				h = e.startsWith('.');
			if (void 0 === o) {
				if (h) for (const i of Object.keys(l)) $(t, l, i, e.slice(1));
				for (const [i, n] of Object.entries(c)) {
					const s = i.replace(w, '');
					(a && !e.includes(s)) || D(t, l, r, n.callable, n.delegationSelector);
				}
			} else {
				if (!Object.keys(c).length) return;
				D(t, l, r, o, s ? i : null);
			}
		},
		trigger(t, e, i) {
			if ('string' != typeof e || !t) return null;
			const n = u();
			let s = null,
				o = !0,
				r = !0,
				a = !1;
			e !== I(e) &&
				n &&
				((s = n.Event(e, i)),
				n(t).trigger(s),
				(o = !s.isPropagationStopped()),
				(r = !s.isImmediatePropagationStopped()),
				(a = s.isDefaultPrevented()));
			const l = P(new Event(e, { bubbles: o, cancelable: !0 }), i);
			return (
				a && l.preventDefault(),
				r && t.dispatchEvent(l),
				l.defaultPrevented && s && s.preventDefault(),
				l
			);
		},
	};
	function P(t, e = {}) {
		for (const [i, n] of Object.entries(e))
			try {
				t[i] = n;
			} catch (e) {
				Object.defineProperty(t, i, { configurable: !0, get: () => n });
			}
		return t;
	}
	function j(t) {
		if ('true' === t) return !0;
		if ('false' === t) return !1;
		if (t === Number(t).toString()) return Number(t);
		if ('' === t || 'null' === t) return null;
		if ('string' != typeof t) return t;
		try {
			return JSON.parse(decodeURIComponent(t));
		} catch (e) {
			return t;
		}
	}
	function M(t) {
		return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
	}
	const F = {
		setDataAttribute(t, e, i) {
			t.setAttribute(`data-bs-${M(e)}`, i);
		},
		removeDataAttribute(t, e) {
			t.removeAttribute(`data-bs-${M(e)}`);
		},
		getDataAttributes(t) {
			if (!t) return {};
			const e = {},
				i = Object.keys(t.dataset).filter(
					(t) => t.startsWith('bs') && !t.startsWith('bsConfig')
				);
			for (const n of i) {
				let i = n.replace(/^bs/, '');
				(i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
					(e[i] = j(t.dataset[n]));
			}
			return e;
		},
		getDataAttribute: (t, e) => j(t.getAttribute(`data-bs-${M(e)}`)),
	};
	class H {
		static get Default() {
			return {};
		}
		static get DefaultType() {
			return {};
		}
		static get NAME() {
			throw new Error(
				'You have to implement the static method "NAME", for each component!'
			);
		}
		_getConfig(t) {
			return (
				(t = this._mergeConfigObj(t)),
				(t = this._configAfterMerge(t)),
				this._typeCheckConfig(t),
				t
			);
		}
		_configAfterMerge(t) {
			return t;
		}
		_mergeConfigObj(t, e) {
			const i = o(e) ? F.getDataAttribute(e, 'config') : {};
			return {
				...this.constructor.Default,
				...('object' == typeof i ? i : {}),
				...(o(e) ? F.getDataAttributes(e) : {}),
				...('object' == typeof t ? t : {}),
			};
		}
		_typeCheckConfig(t, e = this.constructor.DefaultType) {
			for (const [n, s] of Object.entries(e)) {
				const e = t[n],
					r = o(e)
						? 'element'
						: null == (i = e)
							? `${i}`
							: Object.prototype.toString
									.call(i)
									.match(/\s([a-z]+)/i)[1]
									.toLowerCase();
				if (!new RegExp(s).test(r))
					throw new TypeError(
						`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`
					);
			}
			var i;
		}
	}
	class W extends H {
		constructor(t, i) {
			super(),
				(t = r(t)) &&
					((this._element = t),
					(this._config = this._getConfig(i)),
					e.set(this._element, this.constructor.DATA_KEY, this));
		}
		dispose() {
			e.remove(this._element, this.constructor.DATA_KEY),
				N.off(this._element, this.constructor.EVENT_KEY);
			for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
		}
		_queueCallback(t, e, i = !0) {
			_(t, e, i);
		}
		_getConfig(t) {
			return (
				(t = this._mergeConfigObj(t, this._element)),
				(t = this._configAfterMerge(t)),
				this._typeCheckConfig(t),
				t
			);
		}
		static getInstance(t) {
			return e.get(r(t), this.DATA_KEY);
		}
		static getOrCreateInstance(t, e = {}) {
			return (
				this.getInstance(t) || new this(t, 'object' == typeof e ? e : null)
			);
		}
		static get VERSION() {
			return '5.3.3';
		}
		static get DATA_KEY() {
			return `bs.${this.NAME}`;
		}
		static get EVENT_KEY() {
			return `.${this.DATA_KEY}`;
		}
		static eventName(t) {
			return `${t}${this.EVENT_KEY}`;
		}
	}
	const B = (t) => {
			let e = t.getAttribute('data-bs-target');
			if (!e || '#' === e) {
				let i = t.getAttribute('href');
				if (!i || (!i.includes('#') && !i.startsWith('.'))) return null;
				i.includes('#') && !i.startsWith('#') && (i = `#${i.split('#')[1]}`),
					(e = i && '#' !== i ? i.trim() : null);
			}
			return e
				? e
						.split(',')
						.map((t) => n(t))
						.join(',')
				: null;
		},
		z = {
			find: (t, e = document.documentElement) =>
				[].concat(...Element.prototype.querySelectorAll.call(e, t)),
			findOne: (t, e = document.documentElement) =>
				Element.prototype.querySelector.call(e, t),
			children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
			parents(t, e) {
				const i = [];
				let n = t.parentNode.closest(e);
				for (; n; ) i.push(n), (n = n.parentNode.closest(e));
				return i;
			},
			prev(t, e) {
				let i = t.previousElementSibling;
				for (; i; ) {
					if (i.matches(e)) return [i];
					i = i.previousElementSibling;
				}
				return [];
			},
			next(t, e) {
				let i = t.nextElementSibling;
				for (; i; ) {
					if (i.matches(e)) return [i];
					i = i.nextElementSibling;
				}
				return [];
			},
			focusableChildren(t) {
				const e = [
					'a',
					'button',
					'input',
					'textarea',
					'select',
					'details',
					'[tabindex]',
					'[contenteditable="true"]',
				]
					.map((t) => `${t}:not([tabindex^="-"])`)
					.join(',');
				return this.find(e, t).filter((t) => !l(t) && a(t));
			},
			getSelectorFromElement(t) {
				const e = B(t);
				return e && z.findOne(e) ? e : null;
			},
			getElementFromSelector(t) {
				const e = B(t);
				return e ? z.findOne(e) : null;
			},
			getMultipleElementsFromSelector(t) {
				const e = B(t);
				return e ? z.find(e) : [];
			},
		},
		R = (t, e = 'hide') => {
			const i = `click.dismiss${t.EVENT_KEY}`,
				n = t.NAME;
			N.on(document, i, `[data-bs-dismiss="${n}"]`, function (i) {
				if (
					(['A', 'AREA'].includes(this.tagName) && i.preventDefault(), l(this))
				)
					return;
				const s = z.getElementFromSelector(this) || this.closest(`.${n}`);
				t.getOrCreateInstance(s)[e]();
			});
		},
		q = '.bs.alert',
		V = `close${q}`,
		K = `closed${q}`;
	class Q extends W {
		static get NAME() {
			return 'alert';
		}
		close() {
			if (N.trigger(this._element, V).defaultPrevented) return;
			this._element.classList.remove('show');
			const t = this._element.classList.contains('fade');
			this._queueCallback(() => this._destroyElement(), this._element, t);
		}
		_destroyElement() {
			this._element.remove(), N.trigger(this._element, K), this.dispose();
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = Q.getOrCreateInstance(this);
				if ('string' == typeof t) {
					if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t)
						throw new TypeError(`No method named "${t}"`);
					e[t](this);
				}
			});
		}
	}
	R(Q, 'close'), m(Q);
	const X = '[data-bs-toggle="button"]';
	class Y extends W {
		static get NAME() {
			return 'button';
		}
		toggle() {
			this._element.setAttribute(
				'aria-pressed',
				this._element.classList.toggle('active')
			);
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = Y.getOrCreateInstance(this);
				'toggle' === t && e[t]();
			});
		}
	}
	N.on(document, 'click.bs.button.data-api', X, (t) => {
		t.preventDefault();
		const e = t.target.closest(X);
		Y.getOrCreateInstance(e).toggle();
	}),
		m(Y);
	const U = '.bs.swipe',
		G = `touchstart${U}`,
		J = `touchmove${U}`,
		Z = `touchend${U}`,
		tt = `pointerdown${U}`,
		et = `pointerup${U}`,
		it = { endCallback: null, leftCallback: null, rightCallback: null },
		nt = {
			endCallback: '(function|null)',
			leftCallback: '(function|null)',
			rightCallback: '(function|null)',
		};
	class st extends H {
		constructor(t, e) {
			super(),
				(this._element = t),
				t &&
					st.isSupported() &&
					((this._config = this._getConfig(e)),
					(this._deltaX = 0),
					(this._supportPointerEvents = Boolean(window.PointerEvent)),
					this._initEvents());
		}
		static get Default() {
			return it;
		}
		static get DefaultType() {
			return nt;
		}
		static get NAME() {
			return 'swipe';
		}
		dispose() {
			N.off(this._element, U);
		}
		_start(t) {
			this._supportPointerEvents
				? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX)
				: (this._deltaX = t.touches[0].clientX);
		}
		_end(t) {
			this._eventIsPointerPenTouch(t) &&
				(this._deltaX = t.clientX - this._deltaX),
				this._handleSwipe(),
				g(this._config.endCallback);
		}
		_move(t) {
			this._deltaX =
				t.touches && t.touches.length > 1
					? 0
					: t.touches[0].clientX - this._deltaX;
		}
		_handleSwipe() {
			const t = Math.abs(this._deltaX);
			if (t <= 40) return;
			const e = t / this._deltaX;
			(this._deltaX = 0),
				e && g(e > 0 ? this._config.rightCallback : this._config.leftCallback);
		}
		_initEvents() {
			this._supportPointerEvents
				? (N.on(this._element, tt, (t) => this._start(t)),
					N.on(this._element, et, (t) => this._end(t)),
					this._element.classList.add('pointer-event'))
				: (N.on(this._element, G, (t) => this._start(t)),
					N.on(this._element, J, (t) => this._move(t)),
					N.on(this._element, Z, (t) => this._end(t)));
		}
		_eventIsPointerPenTouch(t) {
			return (
				this._supportPointerEvents &&
				('pen' === t.pointerType || 'touch' === t.pointerType)
			);
		}
		static isSupported() {
			return (
				'ontouchstart' in document.documentElement ||
				navigator.maxTouchPoints > 0
			);
		}
	}
	const ot = '.bs.carousel',
		rt = '.data-api',
		at = 'next',
		lt = 'prev',
		ct = 'left',
		ht = 'right',
		dt = `slide${ot}`,
		ut = `slid${ot}`,
		ft = `keydown${ot}`,
		pt = `mouseenter${ot}`,
		mt = `mouseleave${ot}`,
		gt = `dragstart${ot}`,
		_t = `load${ot}${rt}`,
		bt = `click${ot}${rt}`,
		vt = 'carousel',
		yt = 'active',
		wt = '.active',
		At = '.carousel-item',
		Et = wt + At,
		Tt = { ArrowLeft: ht, ArrowRight: ct },
		Ct = {
			interval: 5e3,
			keyboard: !0,
			pause: 'hover',
			ride: !1,
			touch: !0,
			wrap: !0,
		},
		Ot = {
			interval: '(number|boolean)',
			keyboard: 'boolean',
			pause: '(string|boolean)',
			ride: '(boolean|string)',
			touch: 'boolean',
			wrap: 'boolean',
		};
	class xt extends W {
		constructor(t, e) {
			super(t, e),
				(this._interval = null),
				(this._activeElement = null),
				(this._isSliding = !1),
				(this.touchTimeout = null),
				(this._swipeHelper = null),
				(this._indicatorsElement = z.findOne(
					'.carousel-indicators',
					this._element
				)),
				this._addEventListeners(),
				this._config.ride === vt && this.cycle();
		}
		static get Default() {
			return Ct;
		}
		static get DefaultType() {
			return Ot;
		}
		static get NAME() {
			return 'carousel';
		}
		next() {
			this._slide(at);
		}
		nextWhenVisible() {
			!document.hidden && a(this._element) && this.next();
		}
		prev() {
			this._slide(lt);
		}
		pause() {
			this._isSliding && s(this._element), this._clearInterval();
		}
		cycle() {
			this._clearInterval(),
				this._updateInterval(),
				(this._interval = setInterval(
					() => this.nextWhenVisible(),
					this._config.interval
				));
		}
		_maybeEnableCycle() {
			this._config.ride &&
				(this._isSliding
					? N.one(this._element, ut, () => this.cycle())
					: this.cycle());
		}
		to(t) {
			const e = this._getItems();
			if (t > e.length - 1 || t < 0) return;
			if (this._isSliding)
				return void N.one(this._element, ut, () => this.to(t));
			const i = this._getItemIndex(this._getActive());
			if (i === t) return;
			const n = t > i ? at : lt;
			this._slide(n, e[t]);
		}
		dispose() {
			this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
		}
		_configAfterMerge(t) {
			return (t.defaultInterval = t.interval), t;
		}
		_addEventListeners() {
			this._config.keyboard && N.on(this._element, ft, (t) => this._keydown(t)),
				'hover' === this._config.pause &&
					(N.on(this._element, pt, () => this.pause()),
					N.on(this._element, mt, () => this._maybeEnableCycle())),
				this._config.touch &&
					st.isSupported() &&
					this._addTouchEventListeners();
		}
		_addTouchEventListeners() {
			for (const t of z.find('.carousel-item img', this._element))
				N.on(t, gt, (t) => t.preventDefault());
			const t = {
				leftCallback: () => this._slide(this._directionToOrder(ct)),
				rightCallback: () => this._slide(this._directionToOrder(ht)),
				endCallback: () => {
					'hover' === this._config.pause &&
						(this.pause(),
						this.touchTimeout && clearTimeout(this.touchTimeout),
						(this.touchTimeout = setTimeout(
							() => this._maybeEnableCycle(),
							500 + this._config.interval
						)));
				},
			};
			this._swipeHelper = new st(this._element, t);
		}
		_keydown(t) {
			if (/input|textarea/i.test(t.target.tagName)) return;
			const e = Tt[t.key];
			e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
		}
		_getItemIndex(t) {
			return this._getItems().indexOf(t);
		}
		_setActiveIndicatorElement(t) {
			if (!this._indicatorsElement) return;
			const e = z.findOne(wt, this._indicatorsElement);
			e.classList.remove(yt), e.removeAttribute('aria-current');
			const i = z.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
			i && (i.classList.add(yt), i.setAttribute('aria-current', 'true'));
		}
		_updateInterval() {
			const t = this._activeElement || this._getActive();
			if (!t) return;
			const e = Number.parseInt(t.getAttribute('data-bs-interval'), 10);
			this._config.interval = e || this._config.defaultInterval;
		}
		_slide(t, e = null) {
			if (this._isSliding) return;
			const i = this._getActive(),
				n = t === at,
				s = e || b(this._getItems(), i, n, this._config.wrap);
			if (s === i) return;
			const o = this._getItemIndex(s),
				r = (e) =>
					N.trigger(this._element, e, {
						relatedTarget: s,
						direction: this._orderToDirection(t),
						from: this._getItemIndex(i),
						to: o,
					});
			if (r(dt).defaultPrevented) return;
			if (!i || !s) return;
			const a = Boolean(this._interval);
			this.pause(),
				(this._isSliding = !0),
				this._setActiveIndicatorElement(o),
				(this._activeElement = s);
			const l = n ? 'carousel-item-start' : 'carousel-item-end',
				c = n ? 'carousel-item-next' : 'carousel-item-prev';
			s.classList.add(c),
				d(s),
				i.classList.add(l),
				s.classList.add(l),
				this._queueCallback(
					() => {
						s.classList.remove(l, c),
							s.classList.add(yt),
							i.classList.remove(yt, c, l),
							(this._isSliding = !1),
							r(ut);
					},
					i,
					this._isAnimated()
				),
				a && this.cycle();
		}
		_isAnimated() {
			return this._element.classList.contains('slide');
		}
		_getActive() {
			return z.findOne(Et, this._element);
		}
		_getItems() {
			return z.find(At, this._element);
		}
		_clearInterval() {
			this._interval &&
				(clearInterval(this._interval), (this._interval = null));
		}
		_directionToOrder(t) {
			return p() ? (t === ct ? lt : at) : t === ct ? at : lt;
		}
		_orderToDirection(t) {
			return p() ? (t === lt ? ct : ht) : t === lt ? ht : ct;
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = xt.getOrCreateInstance(this, t);
				if ('number' != typeof t) {
					if ('string' == typeof t) {
						if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t)
							throw new TypeError(`No method named "${t}"`);
						e[t]();
					}
				} else e.to(t);
			});
		}
	}
	N.on(document, bt, '[data-bs-slide], [data-bs-slide-to]', function (t) {
		const e = z.getElementFromSelector(this);
		if (!e || !e.classList.contains(vt)) return;
		t.preventDefault();
		const i = xt.getOrCreateInstance(e),
			n = this.getAttribute('data-bs-slide-to');
		return n
			? (i.to(n), void i._maybeEnableCycle())
			: 'next' === F.getDataAttribute(this, 'slide')
				? (i.next(), void i._maybeEnableCycle())
				: (i.prev(), void i._maybeEnableCycle());
	}),
		N.on(window, _t, () => {
			const t = z.find('[data-bs-ride="carousel"]');
			for (const e of t) xt.getOrCreateInstance(e);
		}),
		m(xt);
	const kt = '.bs.collapse',
		Lt = `show${kt}`,
		St = `shown${kt}`,
		Dt = `hide${kt}`,
		$t = `hidden${kt}`,
		It = `click${kt}.data-api`,
		Nt = 'show',
		Pt = 'collapse',
		jt = 'collapsing',
		Mt = `:scope .${Pt} .${Pt}`,
		Ft = '[data-bs-toggle="collapse"]',
		Ht = { parent: null, toggle: !0 },
		Wt = { parent: '(null|element)', toggle: 'boolean' };
	class Bt extends W {
		constructor(t, e) {
			super(t, e), (this._isTransitioning = !1), (this._triggerArray = []);
			const i = z.find(Ft);
			for (const t of i) {
				const e = z.getSelectorFromElement(t),
					i = z.find(e).filter((t) => t === this._element);
				null !== e && i.length && this._triggerArray.push(t);
			}
			this._initializeChildren(),
				this._config.parent ||
					this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
				this._config.toggle && this.toggle();
		}
		static get Default() {
			return Ht;
		}
		static get DefaultType() {
			return Wt;
		}
		static get NAME() {
			return 'collapse';
		}
		toggle() {
			this._isShown() ? this.hide() : this.show();
		}
		show() {
			if (this._isTransitioning || this._isShown()) return;
			let t = [];
			if (
				(this._config.parent &&
					(t = this._getFirstLevelChildren(
						'.collapse.show, .collapse.collapsing'
					)
						.filter((t) => t !== this._element)
						.map((t) => Bt.getOrCreateInstance(t, { toggle: !1 }))),
				t.length && t[0]._isTransitioning)
			)
				return;
			if (N.trigger(this._element, Lt).defaultPrevented) return;
			for (const e of t) e.hide();
			const e = this._getDimension();
			this._element.classList.remove(Pt),
				this._element.classList.add(jt),
				(this._element.style[e] = 0),
				this._addAriaAndCollapsedClass(this._triggerArray, !0),
				(this._isTransitioning = !0);
			const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
			this._queueCallback(
				() => {
					(this._isTransitioning = !1),
						this._element.classList.remove(jt),
						this._element.classList.add(Pt, Nt),
						(this._element.style[e] = ''),
						N.trigger(this._element, St);
				},
				this._element,
				!0
			),
				(this._element.style[e] = `${this._element[i]}px`);
		}
		hide() {
			if (this._isTransitioning || !this._isShown()) return;
			if (N.trigger(this._element, Dt).defaultPrevented) return;
			const t = this._getDimension();
			(this._element.style[t] =
				`${this._element.getBoundingClientRect()[t]}px`),
				d(this._element),
				this._element.classList.add(jt),
				this._element.classList.remove(Pt, Nt);
			for (const t of this._triggerArray) {
				const e = z.getElementFromSelector(t);
				e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1);
			}
			(this._isTransitioning = !0),
				(this._element.style[t] = ''),
				this._queueCallback(
					() => {
						(this._isTransitioning = !1),
							this._element.classList.remove(jt),
							this._element.classList.add(Pt),
							N.trigger(this._element, $t);
					},
					this._element,
					!0
				);
		}
		_isShown(t = this._element) {
			return t.classList.contains(Nt);
		}
		_configAfterMerge(t) {
			return (t.toggle = Boolean(t.toggle)), (t.parent = r(t.parent)), t;
		}
		_getDimension() {
			return this._element.classList.contains('collapse-horizontal')
				? 'width'
				: 'height';
		}
		_initializeChildren() {
			if (!this._config.parent) return;
			const t = this._getFirstLevelChildren(Ft);
			for (const e of t) {
				const t = z.getElementFromSelector(e);
				t && this._addAriaAndCollapsedClass([e], this._isShown(t));
			}
		}
		_getFirstLevelChildren(t) {
			const e = z.find(Mt, this._config.parent);
			return z.find(t, this._config.parent).filter((t) => !e.includes(t));
		}
		_addAriaAndCollapsedClass(t, e) {
			if (t.length)
				for (const i of t)
					i.classList.toggle('collapsed', !e),
						i.setAttribute('aria-expanded', e);
		}
		static jQueryInterface(t) {
			const e = {};
			return (
				'string' == typeof t && /show|hide/.test(t) && (e.toggle = !1),
				this.each(function () {
					const i = Bt.getOrCreateInstance(this, e);
					if ('string' == typeof t) {
						if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
						i[t]();
					}
				})
			);
		}
	}
	N.on(document, It, Ft, function (t) {
		('A' === t.target.tagName ||
			(t.delegateTarget && 'A' === t.delegateTarget.tagName)) &&
			t.preventDefault();
		for (const t of z.getMultipleElementsFromSelector(this))
			Bt.getOrCreateInstance(t, { toggle: !1 }).toggle();
	}),
		m(Bt);
	var zt = 'top',
		Rt = 'bottom',
		qt = 'right',
		Vt = 'left',
		Kt = 'auto',
		Qt = [zt, Rt, qt, Vt],
		Xt = 'start',
		Yt = 'end',
		Ut = 'clippingParents',
		Gt = 'viewport',
		Jt = 'popper',
		Zt = 'reference',
		te = Qt.reduce(function (t, e) {
			return t.concat([e + '-' + Xt, e + '-' + Yt]);
		}, []),
		ee = [].concat(Qt, [Kt]).reduce(function (t, e) {
			return t.concat([e, e + '-' + Xt, e + '-' + Yt]);
		}, []),
		ie = 'beforeRead',
		ne = 'read',
		se = 'afterRead',
		oe = 'beforeMain',
		re = 'main',
		ae = 'afterMain',
		le = 'beforeWrite',
		ce = 'write',
		he = 'afterWrite',
		de = [ie, ne, se, oe, re, ae, le, ce, he];
	function ue(t) {
		return t ? (t.nodeName || '').toLowerCase() : null;
	}
	function fe(t) {
		if (null == t) return window;
		if ('[object Window]' !== t.toString()) {
			var e = t.ownerDocument;
			return (e && e.defaultView) || window;
		}
		return t;
	}
	function pe(t) {
		return t instanceof fe(t).Element || t instanceof Element;
	}
	function me(t) {
		return t instanceof fe(t).HTMLElement || t instanceof HTMLElement;
	}
	function ge(t) {
		return (
			'undefined' != typeof ShadowRoot &&
			(t instanceof fe(t).ShadowRoot || t instanceof ShadowRoot)
		);
	}
	const _e = {
		name: 'applyStyles',
		enabled: !0,
		phase: 'write',
		fn: function (t) {
			var e = t.state;
			Object.keys(e.elements).forEach(function (t) {
				var i = e.styles[t] || {},
					n = e.attributes[t] || {},
					s = e.elements[t];
				me(s) &&
					ue(s) &&
					(Object.assign(s.style, i),
					Object.keys(n).forEach(function (t) {
						var e = n[t];
						!1 === e
							? s.removeAttribute(t)
							: s.setAttribute(t, !0 === e ? '' : e);
					}));
			});
		},
		effect: function (t) {
			var e = t.state,
				i = {
					popper: {
						position: e.options.strategy,
						left: '0',
						top: '0',
						margin: '0',
					},
					arrow: { position: 'absolute' },
					reference: {},
				};
			return (
				Object.assign(e.elements.popper.style, i.popper),
				(e.styles = i),
				e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
				function () {
					Object.keys(e.elements).forEach(function (t) {
						var n = e.elements[t],
							s = e.attributes[t] || {},
							o = Object.keys(
								e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]
							).reduce(function (t, e) {
								return (t[e] = ''), t;
							}, {});
						me(n) &&
							ue(n) &&
							(Object.assign(n.style, o),
							Object.keys(s).forEach(function (t) {
								n.removeAttribute(t);
							}));
					});
				}
			);
		},
		requires: ['computeStyles'],
	};
	function be(t) {
		return t.split('-')[0];
	}
	var ve = Math.max,
		ye = Math.min,
		we = Math.round;
	function Ae() {
		var t = navigator.userAgentData;
		return null != t && t.brands && Array.isArray(t.brands)
			? t.brands
					.map(function (t) {
						return t.brand + '/' + t.version;
					})
					.join(' ')
			: navigator.userAgent;
	}
	function Ee() {
		return !/^((?!chrome|android).)*safari/i.test(Ae());
	}
	function Te(t, e, i) {
		void 0 === e && (e = !1), void 0 === i && (i = !1);
		var n = t.getBoundingClientRect(),
			s = 1,
			o = 1;
		e &&
			me(t) &&
			((s = (t.offsetWidth > 0 && we(n.width) / t.offsetWidth) || 1),
			(o = (t.offsetHeight > 0 && we(n.height) / t.offsetHeight) || 1));
		var r = (pe(t) ? fe(t) : window).visualViewport,
			a = !Ee() && i,
			l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
			c = (n.top + (a && r ? r.offsetTop : 0)) / o,
			h = n.width / s,
			d = n.height / o;
		return {
			width: h,
			height: d,
			top: c,
			right: l + h,
			bottom: c + d,
			left: l,
			x: l,
			y: c,
		};
	}
	function Ce(t) {
		var e = Te(t),
			i = t.offsetWidth,
			n = t.offsetHeight;
		return (
			Math.abs(e.width - i) <= 1 && (i = e.width),
			Math.abs(e.height - n) <= 1 && (n = e.height),
			{ x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
		);
	}
	function Oe(t, e) {
		var i = e.getRootNode && e.getRootNode();
		if (t.contains(e)) return !0;
		if (i && ge(i)) {
			var n = e;
			do {
				if (n && t.isSameNode(n)) return !0;
				n = n.parentNode || n.host;
			} while (n);
		}
		return !1;
	}
	function xe(t) {
		return fe(t).getComputedStyle(t);
	}
	function ke(t) {
		return ['table', 'td', 'th'].indexOf(ue(t)) >= 0;
	}
	function Le(t) {
		return ((pe(t) ? t.ownerDocument : t.document) || window.document)
			.documentElement;
	}
	function Se(t) {
		return 'html' === ue(t)
			? t
			: t.assignedSlot || t.parentNode || (ge(t) ? t.host : null) || Le(t);
	}
	function De(t) {
		return me(t) && 'fixed' !== xe(t).position ? t.offsetParent : null;
	}
	function $e(t) {
		for (var e = fe(t), i = De(t); i && ke(i) && 'static' === xe(i).position; )
			i = De(i);
		return i &&
			('html' === ue(i) || ('body' === ue(i) && 'static' === xe(i).position))
			? e
			: i ||
					(function (t) {
						var e = /firefox/i.test(Ae());
						if (/Trident/i.test(Ae()) && me(t) && 'fixed' === xe(t).position)
							return null;
						var i = Se(t);
						for (
							ge(i) && (i = i.host);
							me(i) && ['html', 'body'].indexOf(ue(i)) < 0;

						) {
							var n = xe(i);
							if (
								'none' !== n.transform ||
								'none' !== n.perspective ||
								'paint' === n.contain ||
								-1 !== ['transform', 'perspective'].indexOf(n.willChange) ||
								(e && 'filter' === n.willChange) ||
								(e && n.filter && 'none' !== n.filter)
							)
								return i;
							i = i.parentNode;
						}
						return null;
					})(t) ||
					e;
	}
	function Ie(t) {
		return ['top', 'bottom'].indexOf(t) >= 0 ? 'x' : 'y';
	}
	function Ne(t, e, i) {
		return ve(t, ye(e, i));
	}
	function Pe(t) {
		return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
	}
	function je(t, e) {
		return e.reduce(function (e, i) {
			return (e[i] = t), e;
		}, {});
	}
	const Me = {
		name: 'arrow',
		enabled: !0,
		phase: 'main',
		fn: function (t) {
			var e,
				i = t.state,
				n = t.name,
				s = t.options,
				o = i.elements.arrow,
				r = i.modifiersData.popperOffsets,
				a = be(i.placement),
				l = Ie(a),
				c = [Vt, qt].indexOf(a) >= 0 ? 'height' : 'width';
			if (o && r) {
				var h = (function (t, e) {
						return Pe(
							'number' !=
								typeof (t =
									'function' == typeof t
										? t(Object.assign({}, e.rects, { placement: e.placement }))
										: t)
								? t
								: je(t, Qt)
						);
					})(s.padding, i),
					d = Ce(o),
					u = 'y' === l ? zt : Vt,
					f = 'y' === l ? Rt : qt,
					p =
						i.rects.reference[c] +
						i.rects.reference[l] -
						r[l] -
						i.rects.popper[c],
					m = r[l] - i.rects.reference[l],
					g = $e(o),
					_ = g ? ('y' === l ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
					b = p / 2 - m / 2,
					v = h[u],
					y = _ - d[c] - h[f],
					w = _ / 2 - d[c] / 2 + b,
					A = Ne(v, w, y),
					E = l;
				i.modifiersData[n] = (((e = {})[E] = A), (e.centerOffset = A - w), e);
			}
		},
		effect: function (t) {
			var e = t.state,
				i = t.options.element,
				n = void 0 === i ? '[data-popper-arrow]' : i;
			null != n &&
				('string' != typeof n || (n = e.elements.popper.querySelector(n))) &&
				Oe(e.elements.popper, n) &&
				(e.elements.arrow = n);
		},
		requires: ['popperOffsets'],
		requiresIfExists: ['preventOverflow'],
	};
	function Fe(t) {
		return t.split('-')[1];
	}
	var He = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
	function We(t) {
		var e,
			i = t.popper,
			n = t.popperRect,
			s = t.placement,
			o = t.variation,
			r = t.offsets,
			a = t.position,
			l = t.gpuAcceleration,
			c = t.adaptive,
			h = t.roundOffsets,
			d = t.isFixed,
			u = r.x,
			f = void 0 === u ? 0 : u,
			p = r.y,
			m = void 0 === p ? 0 : p,
			g = 'function' == typeof h ? h({ x: f, y: m }) : { x: f, y: m };
		(f = g.x), (m = g.y);
		var _ = r.hasOwnProperty('x'),
			b = r.hasOwnProperty('y'),
			v = Vt,
			y = zt,
			w = window;
		if (c) {
			var A = $e(i),
				E = 'clientHeight',
				T = 'clientWidth';
			A === fe(i) &&
				'static' !== xe((A = Le(i))).position &&
				'absolute' === a &&
				((E = 'scrollHeight'), (T = 'scrollWidth')),
				(s === zt || ((s === Vt || s === qt) && o === Yt)) &&
					((y = Rt),
					(m -=
						(d && A === w && w.visualViewport
							? w.visualViewport.height
							: A[E]) - n.height),
					(m *= l ? 1 : -1)),
				(s !== Vt && ((s !== zt && s !== Rt) || o !== Yt)) ||
					((v = qt),
					(f -=
						(d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) -
						n.width),
					(f *= l ? 1 : -1));
		}
		var C,
			O = Object.assign({ position: a }, c && He),
			x =
				!0 === h
					? (function (t, e) {
							var i = t.x,
								n = t.y,
								s = e.devicePixelRatio || 1;
							return { x: we(i * s) / s || 0, y: we(n * s) / s || 0 };
						})({ x: f, y: m }, fe(i))
					: { x: f, y: m };
		return (
			(f = x.x),
			(m = x.y),
			l
				? Object.assign(
						{},
						O,
						(((C = {})[y] = b ? '0' : ''),
						(C[v] = _ ? '0' : ''),
						(C.transform =
							(w.devicePixelRatio || 1) <= 1
								? 'translate(' + f + 'px, ' + m + 'px)'
								: 'translate3d(' + f + 'px, ' + m + 'px, 0)'),
						C)
					)
				: Object.assign(
						{},
						O,
						(((e = {})[y] = b ? m + 'px' : ''),
						(e[v] = _ ? f + 'px' : ''),
						(e.transform = ''),
						e)
					)
		);
	}
	const Be = {
		name: 'computeStyles',
		enabled: !0,
		phase: 'beforeWrite',
		fn: function (t) {
			var e = t.state,
				i = t.options,
				n = i.gpuAcceleration,
				s = void 0 === n || n,
				o = i.adaptive,
				r = void 0 === o || o,
				a = i.roundOffsets,
				l = void 0 === a || a,
				c = {
					placement: be(e.placement),
					variation: Fe(e.placement),
					popper: e.elements.popper,
					popperRect: e.rects.popper,
					gpuAcceleration: s,
					isFixed: 'fixed' === e.options.strategy,
				};
			null != e.modifiersData.popperOffsets &&
				(e.styles.popper = Object.assign(
					{},
					e.styles.popper,
					We(
						Object.assign({}, c, {
							offsets: e.modifiersData.popperOffsets,
							position: e.options.strategy,
							adaptive: r,
							roundOffsets: l,
						})
					)
				)),
				null != e.modifiersData.arrow &&
					(e.styles.arrow = Object.assign(
						{},
						e.styles.arrow,
						We(
							Object.assign({}, c, {
								offsets: e.modifiersData.arrow,
								position: 'absolute',
								adaptive: !1,
								roundOffsets: l,
							})
						)
					)),
				(e.attributes.popper = Object.assign({}, e.attributes.popper, {
					'data-popper-placement': e.placement,
				}));
		},
		data: {},
	};
	var ze = { passive: !0 };
	const Re = {
		name: 'eventListeners',
		enabled: !0,
		phase: 'write',
		fn: function () {},
		effect: function (t) {
			var e = t.state,
				i = t.instance,
				n = t.options,
				s = n.scroll,
				o = void 0 === s || s,
				r = n.resize,
				a = void 0 === r || r,
				l = fe(e.elements.popper),
				c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
			return (
				o &&
					c.forEach(function (t) {
						t.addEventListener('scroll', i.update, ze);
					}),
				a && l.addEventListener('resize', i.update, ze),
				function () {
					o &&
						c.forEach(function (t) {
							t.removeEventListener('scroll', i.update, ze);
						}),
						a && l.removeEventListener('resize', i.update, ze);
				}
			);
		},
		data: {},
	};
	var qe = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
	function Ve(t) {
		return t.replace(/left|right|bottom|top/g, function (t) {
			return qe[t];
		});
	}
	var Ke = { start: 'end', end: 'start' };
	function Qe(t) {
		return t.replace(/start|end/g, function (t) {
			return Ke[t];
		});
	}
	function Xe(t) {
		var e = fe(t);
		return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
	}
	function Ye(t) {
		return Te(Le(t)).left + Xe(t).scrollLeft;
	}
	function Ue(t) {
		var e = xe(t),
			i = e.overflow,
			n = e.overflowX,
			s = e.overflowY;
		return /auto|scroll|overlay|hidden/.test(i + s + n);
	}
	function Ge(t) {
		return ['html', 'body', '#document'].indexOf(ue(t)) >= 0
			? t.ownerDocument.body
			: me(t) && Ue(t)
				? t
				: Ge(Se(t));
	}
	function Je(t, e) {
		var i;
		void 0 === e && (e = []);
		var n = Ge(t),
			s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
			o = fe(n),
			r = s ? [o].concat(o.visualViewport || [], Ue(n) ? n : []) : n,
			a = e.concat(r);
		return s ? a : a.concat(Je(Se(r)));
	}
	function Ze(t) {
		return Object.assign({}, t, {
			left: t.x,
			top: t.y,
			right: t.x + t.width,
			bottom: t.y + t.height,
		});
	}
	function ti(t, e, i) {
		return e === Gt
			? Ze(
					(function (t, e) {
						var i = fe(t),
							n = Le(t),
							s = i.visualViewport,
							o = n.clientWidth,
							r = n.clientHeight,
							a = 0,
							l = 0;
						if (s) {
							(o = s.width), (r = s.height);
							var c = Ee();
							(c || (!c && 'fixed' === e)) &&
								((a = s.offsetLeft), (l = s.offsetTop));
						}
						return { width: o, height: r, x: a + Ye(t), y: l };
					})(t, i)
				)
			: pe(e)
				? (function (t, e) {
						var i = Te(t, !1, 'fixed' === e);
						return (
							(i.top = i.top + t.clientTop),
							(i.left = i.left + t.clientLeft),
							(i.bottom = i.top + t.clientHeight),
							(i.right = i.left + t.clientWidth),
							(i.width = t.clientWidth),
							(i.height = t.clientHeight),
							(i.x = i.left),
							(i.y = i.top),
							i
						);
					})(e, i)
				: Ze(
						(function (t) {
							var e,
								i = Le(t),
								n = Xe(t),
								s = null == (e = t.ownerDocument) ? void 0 : e.body,
								o = ve(
									i.scrollWidth,
									i.clientWidth,
									s ? s.scrollWidth : 0,
									s ? s.clientWidth : 0
								),
								r = ve(
									i.scrollHeight,
									i.clientHeight,
									s ? s.scrollHeight : 0,
									s ? s.clientHeight : 0
								),
								a = -n.scrollLeft + Ye(t),
								l = -n.scrollTop;
							return (
								'rtl' === xe(s || i).direction &&
									(a += ve(i.clientWidth, s ? s.clientWidth : 0) - o),
								{ width: o, height: r, x: a, y: l }
							);
						})(Le(t))
					);
	}
	function ei(t) {
		var e,
			i = t.reference,
			n = t.element,
			s = t.placement,
			o = s ? be(s) : null,
			r = s ? Fe(s) : null,
			a = i.x + i.width / 2 - n.width / 2,
			l = i.y + i.height / 2 - n.height / 2;
		switch (o) {
			case zt:
				e = { x: a, y: i.y - n.height };
				break;
			case Rt:
				e = { x: a, y: i.y + i.height };
				break;
			case qt:
				e = { x: i.x + i.width, y: l };
				break;
			case Vt:
				e = { x: i.x - n.width, y: l };
				break;
			default:
				e = { x: i.x, y: i.y };
		}
		var c = o ? Ie(o) : null;
		if (null != c) {
			var h = 'y' === c ? 'height' : 'width';
			switch (r) {
				case Xt:
					e[c] = e[c] - (i[h] / 2 - n[h] / 2);
					break;
				case Yt:
					e[c] = e[c] + (i[h] / 2 - n[h] / 2);
			}
		}
		return e;
	}
	function ii(t, e) {
		void 0 === e && (e = {});
		var i = e,
			n = i.placement,
			s = void 0 === n ? t.placement : n,
			o = i.strategy,
			r = void 0 === o ? t.strategy : o,
			a = i.boundary,
			l = void 0 === a ? Ut : a,
			c = i.rootBoundary,
			h = void 0 === c ? Gt : c,
			d = i.elementContext,
			u = void 0 === d ? Jt : d,
			f = i.altBoundary,
			p = void 0 !== f && f,
			m = i.padding,
			g = void 0 === m ? 0 : m,
			_ = Pe('number' != typeof g ? g : je(g, Qt)),
			b = u === Jt ? Zt : Jt,
			v = t.rects.popper,
			y = t.elements[p ? b : u],
			w = (function (t, e, i, n) {
				var s =
						'clippingParents' === e
							? (function (t) {
									var e = Je(Se(t)),
										i =
											['absolute', 'fixed'].indexOf(xe(t).position) >= 0 &&
											me(t)
												? $e(t)
												: t;
									return pe(i)
										? e.filter(function (t) {
												return pe(t) && Oe(t, i) && 'body' !== ue(t);
											})
										: [];
								})(t)
							: [].concat(e),
					o = [].concat(s, [i]),
					r = o[0],
					a = o.reduce(
						function (e, i) {
							var s = ti(t, i, n);
							return (
								(e.top = ve(s.top, e.top)),
								(e.right = ye(s.right, e.right)),
								(e.bottom = ye(s.bottom, e.bottom)),
								(e.left = ve(s.left, e.left)),
								e
							);
						},
						ti(t, r, n)
					);
				return (
					(a.width = a.right - a.left),
					(a.height = a.bottom - a.top),
					(a.x = a.left),
					(a.y = a.top),
					a
				);
			})(pe(y) ? y : y.contextElement || Le(t.elements.popper), l, h, r),
			A = Te(t.elements.reference),
			E = ei({ reference: A, element: v, strategy: 'absolute', placement: s }),
			T = Ze(Object.assign({}, v, E)),
			C = u === Jt ? T : A,
			O = {
				top: w.top - C.top + _.top,
				bottom: C.bottom - w.bottom + _.bottom,
				left: w.left - C.left + _.left,
				right: C.right - w.right + _.right,
			},
			x = t.modifiersData.offset;
		if (u === Jt && x) {
			var k = x[s];
			Object.keys(O).forEach(function (t) {
				var e = [qt, Rt].indexOf(t) >= 0 ? 1 : -1,
					i = [zt, Rt].indexOf(t) >= 0 ? 'y' : 'x';
				O[t] += k[i] * e;
			});
		}
		return O;
	}
	function ni(t, e) {
		void 0 === e && (e = {});
		var i = e,
			n = i.placement,
			s = i.boundary,
			o = i.rootBoundary,
			r = i.padding,
			a = i.flipVariations,
			l = i.allowedAutoPlacements,
			c = void 0 === l ? ee : l,
			h = Fe(n),
			d = h
				? a
					? te
					: te.filter(function (t) {
							return Fe(t) === h;
						})
				: Qt,
			u = d.filter(function (t) {
				return c.indexOf(t) >= 0;
			});
		0 === u.length && (u = d);
		var f = u.reduce(function (e, i) {
			return (
				(e[i] = ii(t, {
					placement: i,
					boundary: s,
					rootBoundary: o,
					padding: r,
				})[be(i)]),
				e
			);
		}, {});
		return Object.keys(f).sort(function (t, e) {
			return f[t] - f[e];
		});
	}
	const si = {
		name: 'flip',
		enabled: !0,
		phase: 'main',
		fn: function (t) {
			var e = t.state,
				i = t.options,
				n = t.name;
			if (!e.modifiersData[n]._skip) {
				for (
					var s = i.mainAxis,
						o = void 0 === s || s,
						r = i.altAxis,
						a = void 0 === r || r,
						l = i.fallbackPlacements,
						c = i.padding,
						h = i.boundary,
						d = i.rootBoundary,
						u = i.altBoundary,
						f = i.flipVariations,
						p = void 0 === f || f,
						m = i.allowedAutoPlacements,
						g = e.options.placement,
						_ = be(g),
						b =
							l ||
							(_ !== g && p
								? (function (t) {
										if (be(t) === Kt) return [];
										var e = Ve(t);
										return [Qe(t), e, Qe(e)];
									})(g)
								: [Ve(g)]),
						v = [g].concat(b).reduce(function (t, i) {
							return t.concat(
								be(i) === Kt
									? ni(e, {
											placement: i,
											boundary: h,
											rootBoundary: d,
											padding: c,
											flipVariations: p,
											allowedAutoPlacements: m,
										})
									: i
							);
						}, []),
						y = e.rects.reference,
						w = e.rects.popper,
						A = new Map(),
						E = !0,
						T = v[0],
						C = 0;
					C < v.length;
					C++
				) {
					var O = v[C],
						x = be(O),
						k = Fe(O) === Xt,
						L = [zt, Rt].indexOf(x) >= 0,
						S = L ? 'width' : 'height',
						D = ii(e, {
							placement: O,
							boundary: h,
							rootBoundary: d,
							altBoundary: u,
							padding: c,
						}),
						$ = L ? (k ? qt : Vt) : k ? Rt : zt;
					y[S] > w[S] && ($ = Ve($));
					var I = Ve($),
						N = [];
					if (
						(o && N.push(D[x] <= 0),
						a && N.push(D[$] <= 0, D[I] <= 0),
						N.every(function (t) {
							return t;
						}))
					) {
						(T = O), (E = !1);
						break;
					}
					A.set(O, N);
				}
				if (E)
					for (
						var P = function (t) {
								var e = v.find(function (e) {
									var i = A.get(e);
									if (i)
										return i.slice(0, t).every(function (t) {
											return t;
										});
								});
								if (e) return (T = e), 'break';
							},
							j = p ? 3 : 1;
						j > 0 && 'break' !== P(j);
						j--
					);
				e.placement !== T &&
					((e.modifiersData[n]._skip = !0), (e.placement = T), (e.reset = !0));
			}
		},
		requiresIfExists: ['offset'],
		data: { _skip: !1 },
	};
	function oi(t, e, i) {
		return (
			void 0 === i && (i = { x: 0, y: 0 }),
			{
				top: t.top - e.height - i.y,
				right: t.right - e.width + i.x,
				bottom: t.bottom - e.height + i.y,
				left: t.left - e.width - i.x,
			}
		);
	}
	function ri(t) {
		return [zt, qt, Rt, Vt].some(function (e) {
			return t[e] >= 0;
		});
	}
	const ai = {
			name: 'hide',
			enabled: !0,
			phase: 'main',
			requiresIfExists: ['preventOverflow'],
			fn: function (t) {
				var e = t.state,
					i = t.name,
					n = e.rects.reference,
					s = e.rects.popper,
					o = e.modifiersData.preventOverflow,
					r = ii(e, { elementContext: 'reference' }),
					a = ii(e, { altBoundary: !0 }),
					l = oi(r, n),
					c = oi(a, s, o),
					h = ri(l),
					d = ri(c);
				(e.modifiersData[i] = {
					referenceClippingOffsets: l,
					popperEscapeOffsets: c,
					isReferenceHidden: h,
					hasPopperEscaped: d,
				}),
					(e.attributes.popper = Object.assign({}, e.attributes.popper, {
						'data-popper-reference-hidden': h,
						'data-popper-escaped': d,
					}));
			},
		},
		li = {
			name: 'offset',
			enabled: !0,
			phase: 'main',
			requires: ['popperOffsets'],
			fn: function (t) {
				var e = t.state,
					i = t.options,
					n = t.name,
					s = i.offset,
					o = void 0 === s ? [0, 0] : s,
					r = ee.reduce(function (t, i) {
						return (
							(t[i] = (function (t, e, i) {
								var n = be(t),
									s = [Vt, zt].indexOf(n) >= 0 ? -1 : 1,
									o =
										'function' == typeof i
											? i(Object.assign({}, e, { placement: t }))
											: i,
									r = o[0],
									a = o[1];
								return (
									(r = r || 0),
									(a = (a || 0) * s),
									[Vt, qt].indexOf(n) >= 0 ? { x: a, y: r } : { x: r, y: a }
								);
							})(i, e.rects, o)),
							t
						);
					}, {}),
					a = r[e.placement],
					l = a.x,
					c = a.y;
				null != e.modifiersData.popperOffsets &&
					((e.modifiersData.popperOffsets.x += l),
					(e.modifiersData.popperOffsets.y += c)),
					(e.modifiersData[n] = r);
			},
		},
		ci = {
			name: 'popperOffsets',
			enabled: !0,
			phase: 'read',
			fn: function (t) {
				var e = t.state,
					i = t.name;
				e.modifiersData[i] = ei({
					reference: e.rects.reference,
					element: e.rects.popper,
					strategy: 'absolute',
					placement: e.placement,
				});
			},
			data: {},
		},
		hi = {
			name: 'preventOverflow',
			enabled: !0,
			phase: 'main',
			fn: function (t) {
				var e = t.state,
					i = t.options,
					n = t.name,
					s = i.mainAxis,
					o = void 0 === s || s,
					r = i.altAxis,
					a = void 0 !== r && r,
					l = i.boundary,
					c = i.rootBoundary,
					h = i.altBoundary,
					d = i.padding,
					u = i.tether,
					f = void 0 === u || u,
					p = i.tetherOffset,
					m = void 0 === p ? 0 : p,
					g = ii(e, {
						boundary: l,
						rootBoundary: c,
						padding: d,
						altBoundary: h,
					}),
					_ = be(e.placement),
					b = Fe(e.placement),
					v = !b,
					y = Ie(_),
					w = 'x' === y ? 'y' : 'x',
					A = e.modifiersData.popperOffsets,
					E = e.rects.reference,
					T = e.rects.popper,
					C =
						'function' == typeof m
							? m(Object.assign({}, e.rects, { placement: e.placement }))
							: m,
					O =
						'number' == typeof C
							? { mainAxis: C, altAxis: C }
							: Object.assign({ mainAxis: 0, altAxis: 0 }, C),
					x = e.modifiersData.offset
						? e.modifiersData.offset[e.placement]
						: null,
					k = { x: 0, y: 0 };
				if (A) {
					if (o) {
						var L,
							S = 'y' === y ? zt : Vt,
							D = 'y' === y ? Rt : qt,
							$ = 'y' === y ? 'height' : 'width',
							I = A[y],
							N = I + g[S],
							P = I - g[D],
							j = f ? -T[$] / 2 : 0,
							M = b === Xt ? E[$] : T[$],
							F = b === Xt ? -T[$] : -E[$],
							H = e.elements.arrow,
							W = f && H ? Ce(H) : { width: 0, height: 0 },
							B = e.modifiersData['arrow#persistent']
								? e.modifiersData['arrow#persistent'].padding
								: { top: 0, right: 0, bottom: 0, left: 0 },
							z = B[S],
							R = B[D],
							q = Ne(0, E[$], W[$]),
							V = v
								? E[$] / 2 - j - q - z - O.mainAxis
								: M - q - z - O.mainAxis,
							K = v
								? -E[$] / 2 + j + q + R + O.mainAxis
								: F + q + R + O.mainAxis,
							Q = e.elements.arrow && $e(e.elements.arrow),
							X = Q ? ('y' === y ? Q.clientTop || 0 : Q.clientLeft || 0) : 0,
							Y = null != (L = null == x ? void 0 : x[y]) ? L : 0,
							U = I + K - Y,
							G = Ne(f ? ye(N, I + V - Y - X) : N, I, f ? ve(P, U) : P);
						(A[y] = G), (k[y] = G - I);
					}
					if (a) {
						var J,
							Z = 'x' === y ? zt : Vt,
							tt = 'x' === y ? Rt : qt,
							et = A[w],
							it = 'y' === w ? 'height' : 'width',
							nt = et + g[Z],
							st = et - g[tt],
							ot = -1 !== [zt, Vt].indexOf(_),
							rt = null != (J = null == x ? void 0 : x[w]) ? J : 0,
							at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis,
							lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st,
							ct =
								f && ot
									? (function (t, e, i) {
											var n = Ne(t, e, i);
											return n > i ? i : n;
										})(at, et, lt)
									: Ne(f ? at : nt, et, f ? lt : st);
						(A[w] = ct), (k[w] = ct - et);
					}
					e.modifiersData[n] = k;
				}
			},
			requiresIfExists: ['offset'],
		};
	function di(t, e, i) {
		void 0 === i && (i = !1);
		var n,
			s,
			o = me(e),
			r =
				me(e) &&
				(function (t) {
					var e = t.getBoundingClientRect(),
						i = we(e.width) / t.offsetWidth || 1,
						n = we(e.height) / t.offsetHeight || 1;
					return 1 !== i || 1 !== n;
				})(e),
			a = Le(e),
			l = Te(t, r, i),
			c = { scrollLeft: 0, scrollTop: 0 },
			h = { x: 0, y: 0 };
		return (
			(o || (!o && !i)) &&
				(('body' !== ue(e) || Ue(a)) &&
					(c =
						(n = e) !== fe(n) && me(n)
							? { scrollLeft: (s = n).scrollLeft, scrollTop: s.scrollTop }
							: Xe(n)),
				me(e)
					? (((h = Te(e, !0)).x += e.clientLeft), (h.y += e.clientTop))
					: a && (h.x = Ye(a))),
			{
				x: l.left + c.scrollLeft - h.x,
				y: l.top + c.scrollTop - h.y,
				width: l.width,
				height: l.height,
			}
		);
	}
	function ui(t) {
		var e = new Map(),
			i = new Set(),
			n = [];
		function s(t) {
			i.add(t.name),
				[]
					.concat(t.requires || [], t.requiresIfExists || [])
					.forEach(function (t) {
						if (!i.has(t)) {
							var n = e.get(t);
							n && s(n);
						}
					}),
				n.push(t);
		}
		return (
			t.forEach(function (t) {
				e.set(t.name, t);
			}),
			t.forEach(function (t) {
				i.has(t.name) || s(t);
			}),
			n
		);
	}
	var fi = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
	function pi() {
		for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
			e[i] = arguments[i];
		return !e.some(function (t) {
			return !(t && 'function' == typeof t.getBoundingClientRect);
		});
	}
	function mi(t) {
		void 0 === t && (t = {});
		var e = t,
			i = e.defaultModifiers,
			n = void 0 === i ? [] : i,
			s = e.defaultOptions,
			o = void 0 === s ? fi : s;
		return function (t, e, i) {
			void 0 === i && (i = o);
			var s,
				r,
				a = {
					placement: 'bottom',
					orderedModifiers: [],
					options: Object.assign({}, fi, o),
					modifiersData: {},
					elements: { reference: t, popper: e },
					attributes: {},
					styles: {},
				},
				l = [],
				c = !1,
				h = {
					state: a,
					setOptions: function (i) {
						var s = 'function' == typeof i ? i(a.options) : i;
						d(),
							(a.options = Object.assign({}, o, a.options, s)),
							(a.scrollParents = {
								reference: pe(t)
									? Je(t)
									: t.contextElement
										? Je(t.contextElement)
										: [],
								popper: Je(e),
							});
						var r,
							c,
							u = (function (t) {
								var e = ui(t);
								return de.reduce(function (t, i) {
									return t.concat(
										e.filter(function (t) {
											return t.phase === i;
										})
									);
								}, []);
							})(
								((r = [].concat(n, a.options.modifiers)),
								(c = r.reduce(function (t, e) {
									var i = t[e.name];
									return (
										(t[e.name] = i
											? Object.assign({}, i, e, {
													options: Object.assign({}, i.options, e.options),
													data: Object.assign({}, i.data, e.data),
												})
											: e),
										t
									);
								}, {})),
								Object.keys(c).map(function (t) {
									return c[t];
								}))
							);
						return (
							(a.orderedModifiers = u.filter(function (t) {
								return t.enabled;
							})),
							a.orderedModifiers.forEach(function (t) {
								var e = t.name,
									i = t.options,
									n = void 0 === i ? {} : i,
									s = t.effect;
								if ('function' == typeof s) {
									var o = s({ state: a, name: e, instance: h, options: n });
									l.push(o || function () {});
								}
							}),
							h.update()
						);
					},
					forceUpdate: function () {
						if (!c) {
							var t = a.elements,
								e = t.reference,
								i = t.popper;
							if (pi(e, i)) {
								(a.rects = {
									reference: di(e, $e(i), 'fixed' === a.options.strategy),
									popper: Ce(i),
								}),
									(a.reset = !1),
									(a.placement = a.options.placement),
									a.orderedModifiers.forEach(function (t) {
										return (a.modifiersData[t.name] = Object.assign(
											{},
											t.data
										));
									});
								for (var n = 0; n < a.orderedModifiers.length; n++)
									if (!0 !== a.reset) {
										var s = a.orderedModifiers[n],
											o = s.fn,
											r = s.options,
											l = void 0 === r ? {} : r,
											d = s.name;
										'function' == typeof o &&
											(a =
												o({ state: a, options: l, name: d, instance: h }) || a);
									} else (a.reset = !1), (n = -1);
							}
						}
					},
					update:
						((s = function () {
							return new Promise(function (t) {
								h.forceUpdate(), t(a);
							});
						}),
						function () {
							return (
								r ||
									(r = new Promise(function (t) {
										Promise.resolve().then(function () {
											(r = void 0), t(s());
										});
									})),
								r
							);
						}),
					destroy: function () {
						d(), (c = !0);
					},
				};
			if (!pi(t, e)) return h;
			function d() {
				l.forEach(function (t) {
					return t();
				}),
					(l = []);
			}
			return (
				h.setOptions(i).then(function (t) {
					!c && i.onFirstUpdate && i.onFirstUpdate(t);
				}),
				h
			);
		};
	}
	var gi = mi(),
		_i = mi({ defaultModifiers: [Re, ci, Be, _e] }),
		bi = mi({ defaultModifiers: [Re, ci, Be, _e, li, si, hi, Me, ai] });
	const vi = Object.freeze(
			Object.defineProperty(
				{
					__proto__: null,
					afterMain: ae,
					afterRead: se,
					afterWrite: he,
					applyStyles: _e,
					arrow: Me,
					auto: Kt,
					basePlacements: Qt,
					beforeMain: oe,
					beforeRead: ie,
					beforeWrite: le,
					bottom: Rt,
					clippingParents: Ut,
					computeStyles: Be,
					createPopper: bi,
					createPopperBase: gi,
					createPopperLite: _i,
					detectOverflow: ii,
					end: Yt,
					eventListeners: Re,
					flip: si,
					hide: ai,
					left: Vt,
					main: re,
					modifierPhases: de,
					offset: li,
					placements: ee,
					popper: Jt,
					popperGenerator: mi,
					popperOffsets: ci,
					preventOverflow: hi,
					read: ne,
					reference: Zt,
					right: qt,
					start: Xt,
					top: zt,
					variationPlacements: te,
					viewport: Gt,
					write: ce,
				},
				Symbol.toStringTag,
				{ value: 'Module' }
			)
		),
		yi = 'dropdown',
		wi = '.bs.dropdown',
		Ai = '.data-api',
		Ei = 'ArrowUp',
		Ti = 'ArrowDown',
		Ci = `hide${wi}`,
		Oi = `hidden${wi}`,
		xi = `show${wi}`,
		ki = `shown${wi}`,
		Li = `click${wi}${Ai}`,
		Si = `keydown${wi}${Ai}`,
		Di = `keyup${wi}${Ai}`,
		$i = 'show',
		Ii = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
		Ni = `${Ii}.${$i}`,
		Pi = '.dropdown-menu',
		ji = p() ? 'top-end' : 'top-start',
		Mi = p() ? 'top-start' : 'top-end',
		Fi = p() ? 'bottom-end' : 'bottom-start',
		Hi = p() ? 'bottom-start' : 'bottom-end',
		Wi = p() ? 'left-start' : 'right-start',
		Bi = p() ? 'right-start' : 'left-start',
		zi = {
			autoClose: !0,
			boundary: 'clippingParents',
			display: 'dynamic',
			offset: [0, 2],
			popperConfig: null,
			reference: 'toggle',
		},
		Ri = {
			autoClose: '(boolean|string)',
			boundary: '(string|element)',
			display: 'string',
			offset: '(array|string|function)',
			popperConfig: '(null|object|function)',
			reference: '(string|element|object)',
		};
	class qi extends W {
		constructor(t, e) {
			super(t, e),
				(this._popper = null),
				(this._parent = this._element.parentNode),
				(this._menu =
					z.next(this._element, Pi)[0] ||
					z.prev(this._element, Pi)[0] ||
					z.findOne(Pi, this._parent)),
				(this._inNavbar = this._detectNavbar());
		}
		static get Default() {
			return zi;
		}
		static get DefaultType() {
			return Ri;
		}
		static get NAME() {
			return yi;
		}
		toggle() {
			return this._isShown() ? this.hide() : this.show();
		}
		show() {
			if (l(this._element) || this._isShown()) return;
			const t = { relatedTarget: this._element };
			if (!N.trigger(this._element, xi, t).defaultPrevented) {
				if (
					(this._createPopper(),
					'ontouchstart' in document.documentElement &&
						!this._parent.closest('.navbar-nav'))
				)
					for (const t of [].concat(...document.body.children))
						N.on(t, 'mouseover', h);
				this._element.focus(),
					this._element.setAttribute('aria-expanded', !0),
					this._menu.classList.add($i),
					this._element.classList.add($i),
					N.trigger(this._element, ki, t);
			}
		}
		hide() {
			if (l(this._element) || !this._isShown()) return;
			const t = { relatedTarget: this._element };
			this._completeHide(t);
		}
		dispose() {
			this._popper && this._popper.destroy(), super.dispose();
		}
		update() {
			(this._inNavbar = this._detectNavbar()),
				this._popper && this._popper.update();
		}
		_completeHide(t) {
			if (!N.trigger(this._element, Ci, t).defaultPrevented) {
				if ('ontouchstart' in document.documentElement)
					for (const t of [].concat(...document.body.children))
						N.off(t, 'mouseover', h);
				this._popper && this._popper.destroy(),
					this._menu.classList.remove($i),
					this._element.classList.remove($i),
					this._element.setAttribute('aria-expanded', 'false'),
					F.removeDataAttribute(this._menu, 'popper'),
					N.trigger(this._element, Oi, t);
			}
		}
		_getConfig(t) {
			if (
				'object' == typeof (t = super._getConfig(t)).reference &&
				!o(t.reference) &&
				'function' != typeof t.reference.getBoundingClientRect
			)
				throw new TypeError(
					`${yi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
				);
			return t;
		}
		_createPopper() {
			if (void 0 === vi)
				throw new TypeError(
					"Bootstrap's dropdowns require Popper (https://popper.js.org)"
				);
			let t = this._element;
			'parent' === this._config.reference
				? (t = this._parent)
				: o(this._config.reference)
					? (t = r(this._config.reference))
					: 'object' == typeof this._config.reference &&
						(t = this._config.reference);
			const e = this._getPopperConfig();
			this._popper = bi(t, this._menu, e);
		}
		_isShown() {
			return this._menu.classList.contains($i);
		}
		_getPlacement() {
			const t = this._parent;
			if (t.classList.contains('dropend')) return Wi;
			if (t.classList.contains('dropstart')) return Bi;
			if (t.classList.contains('dropup-center')) return 'top';
			if (t.classList.contains('dropdown-center')) return 'bottom';
			const e =
				'end' ===
				getComputedStyle(this._menu).getPropertyValue('--bs-position').trim();
			return t.classList.contains('dropup') ? (e ? Mi : ji) : e ? Hi : Fi;
		}
		_detectNavbar() {
			return null !== this._element.closest('.navbar');
		}
		_getOffset() {
			const { offset: t } = this._config;
			return 'string' == typeof t
				? t.split(',').map((t) => Number.parseInt(t, 10))
				: 'function' == typeof t
					? (e) => t(e, this._element)
					: t;
		}
		_getPopperConfig() {
			const t = {
				placement: this._getPlacement(),
				modifiers: [
					{
						name: 'preventOverflow',
						options: { boundary: this._config.boundary },
					},
					{ name: 'offset', options: { offset: this._getOffset() } },
				],
			};
			return (
				(this._inNavbar || 'static' === this._config.display) &&
					(F.setDataAttribute(this._menu, 'popper', 'static'),
					(t.modifiers = [{ name: 'applyStyles', enabled: !1 }])),
				{ ...t, ...g(this._config.popperConfig, [t]) }
			);
		}
		_selectMenuItem({ key: t, target: e }) {
			const i = z
				.find(
					'.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',
					this._menu
				)
				.filter((t) => a(t));
			i.length && b(i, e, t === Ti, !i.includes(e)).focus();
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = qi.getOrCreateInstance(this, t);
				if ('string' == typeof t) {
					if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
					e[t]();
				}
			});
		}
		static clearMenus(t) {
			if (2 === t.button || ('keyup' === t.type && 'Tab' !== t.key)) return;
			const e = z.find(Ni);
			for (const i of e) {
				const e = qi.getInstance(i);
				if (!e || !1 === e._config.autoClose) continue;
				const n = t.composedPath(),
					s = n.includes(e._menu);
				if (
					n.includes(e._element) ||
					('inside' === e._config.autoClose && !s) ||
					('outside' === e._config.autoClose && s)
				)
					continue;
				if (
					e._menu.contains(t.target) &&
					(('keyup' === t.type && 'Tab' === t.key) ||
						/input|select|option|textarea|form/i.test(t.target.tagName))
				)
					continue;
				const o = { relatedTarget: e._element };
				'click' === t.type && (o.clickEvent = t), e._completeHide(o);
			}
		}
		static dataApiKeydownHandler(t) {
			const e = /input|textarea/i.test(t.target.tagName),
				i = 'Escape' === t.key,
				n = [Ei, Ti].includes(t.key);
			if (!n && !i) return;
			if (e && !i) return;
			t.preventDefault();
			const s = this.matches(Ii)
					? this
					: z.prev(this, Ii)[0] ||
						z.next(this, Ii)[0] ||
						z.findOne(Ii, t.delegateTarget.parentNode),
				o = qi.getOrCreateInstance(s);
			if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
			o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
		}
	}
	N.on(document, Si, Ii, qi.dataApiKeydownHandler),
		N.on(document, Si, Pi, qi.dataApiKeydownHandler),
		N.on(document, Li, qi.clearMenus),
		N.on(document, Di, qi.clearMenus),
		N.on(document, Li, Ii, function (t) {
			t.preventDefault(), qi.getOrCreateInstance(this).toggle();
		}),
		m(qi);
	const Vi = 'backdrop',
		Ki = 'show',
		Qi = `mousedown.bs.${Vi}`,
		Xi = {
			className: 'modal-backdrop',
			clickCallback: null,
			isAnimated: !1,
			isVisible: !0,
			rootElement: 'body',
		},
		Yi = {
			className: 'string',
			clickCallback: '(function|null)',
			isAnimated: 'boolean',
			isVisible: 'boolean',
			rootElement: '(element|string)',
		};
	class Ui extends H {
		constructor(t) {
			super(),
				(this._config = this._getConfig(t)),
				(this._isAppended = !1),
				(this._element = null);
		}
		static get Default() {
			return Xi;
		}
		static get DefaultType() {
			return Yi;
		}
		static get NAME() {
			return Vi;
		}
		show(t) {
			if (!this._config.isVisible) return void g(t);
			this._append();
			const e = this._getElement();
			this._config.isAnimated && d(e),
				e.classList.add(Ki),
				this._emulateAnimation(() => {
					g(t);
				});
		}
		hide(t) {
			this._config.isVisible
				? (this._getElement().classList.remove(Ki),
					this._emulateAnimation(() => {
						this.dispose(), g(t);
					}))
				: g(t);
		}
		dispose() {
			this._isAppended &&
				(N.off(this._element, Qi),
				this._element.remove(),
				(this._isAppended = !1));
		}
		_getElement() {
			if (!this._element) {
				const t = document.createElement('div');
				(t.className = this._config.className),
					this._config.isAnimated && t.classList.add('fade'),
					(this._element = t);
			}
			return this._element;
		}
		_configAfterMerge(t) {
			return (t.rootElement = r(t.rootElement)), t;
		}
		_append() {
			if (this._isAppended) return;
			const t = this._getElement();
			this._config.rootElement.append(t),
				N.on(t, Qi, () => {
					g(this._config.clickCallback);
				}),
				(this._isAppended = !0);
		}
		_emulateAnimation(t) {
			_(t, this._getElement(), this._config.isAnimated);
		}
	}
	const Gi = '.bs.focustrap',
		Ji = `focusin${Gi}`,
		Zi = `keydown.tab${Gi}`,
		tn = 'backward',
		en = { autofocus: !0, trapElement: null },
		nn = { autofocus: 'boolean', trapElement: 'element' };
	class sn extends H {
		constructor(t) {
			super(),
				(this._config = this._getConfig(t)),
				(this._isActive = !1),
				(this._lastTabNavDirection = null);
		}
		static get Default() {
			return en;
		}
		static get DefaultType() {
			return nn;
		}
		static get NAME() {
			return 'focustrap';
		}
		activate() {
			this._isActive ||
				(this._config.autofocus && this._config.trapElement.focus(),
				N.off(document, Gi),
				N.on(document, Ji, (t) => this._handleFocusin(t)),
				N.on(document, Zi, (t) => this._handleKeydown(t)),
				(this._isActive = !0));
		}
		deactivate() {
			this._isActive && ((this._isActive = !1), N.off(document, Gi));
		}
		_handleFocusin(t) {
			const { trapElement: e } = this._config;
			if (t.target === document || t.target === e || e.contains(t.target))
				return;
			const i = z.focusableChildren(e);
			0 === i.length
				? e.focus()
				: this._lastTabNavDirection === tn
					? i[i.length - 1].focus()
					: i[0].focus();
		}
		_handleKeydown(t) {
			'Tab' === t.key &&
				(this._lastTabNavDirection = t.shiftKey ? tn : 'forward');
		}
	}
	const on = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
		rn = '.sticky-top',
		an = 'padding-right',
		ln = 'margin-right';
	class cn {
		constructor() {
			this._element = document.body;
		}
		getWidth() {
			const t = document.documentElement.clientWidth;
			return Math.abs(window.innerWidth - t);
		}
		hide() {
			const t = this.getWidth();
			this._disableOverFlow(),
				this._setElementAttributes(this._element, an, (e) => e + t),
				this._setElementAttributes(on, an, (e) => e + t),
				this._setElementAttributes(rn, ln, (e) => e - t);
		}
		reset() {
			this._resetElementAttributes(this._element, 'overflow'),
				this._resetElementAttributes(this._element, an),
				this._resetElementAttributes(on, an),
				this._resetElementAttributes(rn, ln);
		}
		isOverflowing() {
			return this.getWidth() > 0;
		}
		_disableOverFlow() {
			this._saveInitialAttribute(this._element, 'overflow'),
				(this._element.style.overflow = 'hidden');
		}
		_setElementAttributes(t, e, i) {
			const n = this.getWidth();
			this._applyManipulationCallback(t, (t) => {
				if (t !== this._element && window.innerWidth > t.clientWidth + n)
					return;
				this._saveInitialAttribute(t, e);
				const s = window.getComputedStyle(t).getPropertyValue(e);
				t.style.setProperty(e, `${i(Number.parseFloat(s))}px`);
			});
		}
		_saveInitialAttribute(t, e) {
			const i = t.style.getPropertyValue(e);
			i && F.setDataAttribute(t, e, i);
		}
		_resetElementAttributes(t, e) {
			this._applyManipulationCallback(t, (t) => {
				const i = F.getDataAttribute(t, e);
				null !== i
					? (F.removeDataAttribute(t, e), t.style.setProperty(e, i))
					: t.style.removeProperty(e);
			});
		}
		_applyManipulationCallback(t, e) {
			if (o(t)) e(t);
			else for (const i of z.find(t, this._element)) e(i);
		}
	}
	const hn = '.bs.modal',
		dn = `hide${hn}`,
		un = `hidePrevented${hn}`,
		fn = `hidden${hn}`,
		pn = `show${hn}`,
		mn = `shown${hn}`,
		gn = `resize${hn}`,
		_n = `click.dismiss${hn}`,
		bn = `mousedown.dismiss${hn}`,
		vn = `keydown.dismiss${hn}`,
		yn = `click${hn}.data-api`,
		wn = 'modal-open',
		An = 'show',
		En = 'modal-static',
		Tn = { backdrop: !0, focus: !0, keyboard: !0 },
		Cn = {
			backdrop: '(boolean|string)',
			focus: 'boolean',
			keyboard: 'boolean',
		};
	class On extends W {
		constructor(t, e) {
			super(t, e),
				(this._dialog = z.findOne('.modal-dialog', this._element)),
				(this._backdrop = this._initializeBackDrop()),
				(this._focustrap = this._initializeFocusTrap()),
				(this._isShown = !1),
				(this._isTransitioning = !1),
				(this._scrollBar = new cn()),
				this._addEventListeners();
		}
		static get Default() {
			return Tn;
		}
		static get DefaultType() {
			return Cn;
		}
		static get NAME() {
			return 'modal';
		}
		toggle(t) {
			return this._isShown ? this.hide() : this.show(t);
		}
		show(t) {
			this._isShown ||
				this._isTransitioning ||
				N.trigger(this._element, pn, { relatedTarget: t }).defaultPrevented ||
				((this._isShown = !0),
				(this._isTransitioning = !0),
				this._scrollBar.hide(),
				document.body.classList.add(wn),
				this._adjustDialog(),
				this._backdrop.show(() => this._showElement(t)));
		}
		hide() {
			this._isShown &&
				!this._isTransitioning &&
				(N.trigger(this._element, dn).defaultPrevented ||
					((this._isShown = !1),
					(this._isTransitioning = !0),
					this._focustrap.deactivate(),
					this._element.classList.remove(An),
					this._queueCallback(
						() => this._hideModal(),
						this._element,
						this._isAnimated()
					)));
		}
		dispose() {
			N.off(window, hn),
				N.off(this._dialog, hn),
				this._backdrop.dispose(),
				this._focustrap.deactivate(),
				super.dispose();
		}
		handleUpdate() {
			this._adjustDialog();
		}
		_initializeBackDrop() {
			return new Ui({
				isVisible: Boolean(this._config.backdrop),
				isAnimated: this._isAnimated(),
			});
		}
		_initializeFocusTrap() {
			return new sn({ trapElement: this._element });
		}
		_showElement(t) {
			document.body.contains(this._element) ||
				document.body.append(this._element),
				(this._element.style.display = 'block'),
				this._element.removeAttribute('aria-hidden'),
				this._element.setAttribute('aria-modal', !0),
				this._element.setAttribute('role', 'dialog'),
				(this._element.scrollTop = 0);
			const e = z.findOne('.modal-body', this._dialog);
			e && (e.scrollTop = 0),
				d(this._element),
				this._element.classList.add(An),
				this._queueCallback(
					() => {
						this._config.focus && this._focustrap.activate(),
							(this._isTransitioning = !1),
							N.trigger(this._element, mn, { relatedTarget: t });
					},
					this._dialog,
					this._isAnimated()
				);
		}
		_addEventListeners() {
			N.on(this._element, vn, (t) => {
				'Escape' === t.key &&
					(this._config.keyboard
						? this.hide()
						: this._triggerBackdropTransition());
			}),
				N.on(window, gn, () => {
					this._isShown && !this._isTransitioning && this._adjustDialog();
				}),
				N.on(this._element, bn, (t) => {
					N.one(this._element, _n, (e) => {
						this._element === t.target &&
							this._element === e.target &&
							('static' !== this._config.backdrop
								? this._config.backdrop && this.hide()
								: this._triggerBackdropTransition());
					});
				});
		}
		_hideModal() {
			(this._element.style.display = 'none'),
				this._element.setAttribute('aria-hidden', !0),
				this._element.removeAttribute('aria-modal'),
				this._element.removeAttribute('role'),
				(this._isTransitioning = !1),
				this._backdrop.hide(() => {
					document.body.classList.remove(wn),
						this._resetAdjustments(),
						this._scrollBar.reset(),
						N.trigger(this._element, fn);
				});
		}
		_isAnimated() {
			return this._element.classList.contains('fade');
		}
		_triggerBackdropTransition() {
			if (N.trigger(this._element, un).defaultPrevented) return;
			const t =
					this._element.scrollHeight > document.documentElement.clientHeight,
				e = this._element.style.overflowY;
			'hidden' === e ||
				this._element.classList.contains(En) ||
				(t || (this._element.style.overflowY = 'hidden'),
				this._element.classList.add(En),
				this._queueCallback(() => {
					this._element.classList.remove(En),
						this._queueCallback(() => {
							this._element.style.overflowY = e;
						}, this._dialog);
				}, this._dialog),
				this._element.focus());
		}
		_adjustDialog() {
			const t =
					this._element.scrollHeight > document.documentElement.clientHeight,
				e = this._scrollBar.getWidth(),
				i = e > 0;
			if (i && !t) {
				const t = p() ? 'paddingLeft' : 'paddingRight';
				this._element.style[t] = `${e}px`;
			}
			if (!i && t) {
				const t = p() ? 'paddingRight' : 'paddingLeft';
				this._element.style[t] = `${e}px`;
			}
		}
		_resetAdjustments() {
			(this._element.style.paddingLeft = ''),
				(this._element.style.paddingRight = '');
		}
		static jQueryInterface(t, e) {
			return this.each(function () {
				const i = On.getOrCreateInstance(this, t);
				if ('string' == typeof t) {
					if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
					i[t](e);
				}
			});
		}
	}
	N.on(document, yn, '[data-bs-toggle="modal"]', function (t) {
		const e = z.getElementFromSelector(this);
		['A', 'AREA'].includes(this.tagName) && t.preventDefault(),
			N.one(e, pn, (t) => {
				t.defaultPrevented ||
					N.one(e, fn, () => {
						a(this) && this.focus();
					});
			});
		const i = z.findOne('.modal.show');
		i && On.getInstance(i).hide(), On.getOrCreateInstance(e).toggle(this);
	}),
		R(On),
		m(On);
	const xn = '.bs.offcanvas',
		kn = '.data-api',
		Ln = `load${xn}${kn}`,
		Sn = 'show',
		Dn = 'showing',
		$n = 'hiding',
		In = '.offcanvas.show',
		Nn = `show${xn}`,
		Pn = `shown${xn}`,
		jn = `hide${xn}`,
		Mn = `hidePrevented${xn}`,
		Fn = `hidden${xn}`,
		Hn = `resize${xn}`,
		Wn = `click${xn}${kn}`,
		Bn = `keydown.dismiss${xn}`,
		zn = { backdrop: !0, keyboard: !0, scroll: !1 },
		Rn = {
			backdrop: '(boolean|string)',
			keyboard: 'boolean',
			scroll: 'boolean',
		};
	class qn extends W {
		constructor(t, e) {
			super(t, e),
				(this._isShown = !1),
				(this._backdrop = this._initializeBackDrop()),
				(this._focustrap = this._initializeFocusTrap()),
				this._addEventListeners();
		}
		static get Default() {
			return zn;
		}
		static get DefaultType() {
			return Rn;
		}
		static get NAME() {
			return 'offcanvas';
		}
		toggle(t) {
			return this._isShown ? this.hide() : this.show(t);
		}
		show(t) {
			this._isShown ||
				N.trigger(this._element, Nn, { relatedTarget: t }).defaultPrevented ||
				((this._isShown = !0),
				this._backdrop.show(),
				this._config.scroll || new cn().hide(),
				this._element.setAttribute('aria-modal', !0),
				this._element.setAttribute('role', 'dialog'),
				this._element.classList.add(Dn),
				this._queueCallback(
					() => {
						(this._config.scroll && !this._config.backdrop) ||
							this._focustrap.activate(),
							this._element.classList.add(Sn),
							this._element.classList.remove(Dn),
							N.trigger(this._element, Pn, { relatedTarget: t });
					},
					this._element,
					!0
				));
		}
		hide() {
			this._isShown &&
				(N.trigger(this._element, jn).defaultPrevented ||
					(this._focustrap.deactivate(),
					this._element.blur(),
					(this._isShown = !1),
					this._element.classList.add($n),
					this._backdrop.hide(),
					this._queueCallback(
						() => {
							this._element.classList.remove(Sn, $n),
								this._element.removeAttribute('aria-modal'),
								this._element.removeAttribute('role'),
								this._config.scroll || new cn().reset(),
								N.trigger(this._element, Fn);
						},
						this._element,
						!0
					)));
		}
		dispose() {
			this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
		}
		_initializeBackDrop() {
			const t = Boolean(this._config.backdrop);
			return new Ui({
				className: 'offcanvas-backdrop',
				isVisible: t,
				isAnimated: !0,
				rootElement: this._element.parentNode,
				clickCallback: t
					? () => {
							'static' !== this._config.backdrop
								? this.hide()
								: N.trigger(this._element, Mn);
						}
					: null,
			});
		}
		_initializeFocusTrap() {
			return new sn({ trapElement: this._element });
		}
		_addEventListeners() {
			N.on(this._element, Bn, (t) => {
				'Escape' === t.key &&
					(this._config.keyboard ? this.hide() : N.trigger(this._element, Mn));
			});
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = qn.getOrCreateInstance(this, t);
				if ('string' == typeof t) {
					if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t)
						throw new TypeError(`No method named "${t}"`);
					e[t](this);
				}
			});
		}
	}
	N.on(document, Wn, '[data-bs-toggle="offcanvas"]', function (t) {
		const e = z.getElementFromSelector(this);
		if ((['A', 'AREA'].includes(this.tagName) && t.preventDefault(), l(this)))
			return;
		N.one(e, Fn, () => {
			a(this) && this.focus();
		});
		const i = z.findOne(In);
		i && i !== e && qn.getInstance(i).hide(),
			qn.getOrCreateInstance(e).toggle(this);
	}),
		N.on(window, Ln, () => {
			for (const t of z.find(In)) qn.getOrCreateInstance(t).show();
		}),
		N.on(window, Hn, () => {
			for (const t of z.find('[aria-modal][class*=show][class*=offcanvas-]'))
				'fixed' !== getComputedStyle(t).position &&
					qn.getOrCreateInstance(t).hide();
		}),
		R(qn),
		m(qn);
	const Vn = {
			'*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
			a: ['target', 'href', 'title', 'rel'],
			area: [],
			b: [],
			br: [],
			col: [],
			code: [],
			dd: [],
			div: [],
			dl: [],
			dt: [],
			em: [],
			hr: [],
			h1: [],
			h2: [],
			h3: [],
			h4: [],
			h5: [],
			h6: [],
			i: [],
			img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
			li: [],
			ol: [],
			p: [],
			pre: [],
			s: [],
			small: [],
			span: [],
			sub: [],
			sup: [],
			strong: [],
			u: [],
			ul: [],
		},
		Kn = new Set([
			'background',
			'cite',
			'href',
			'itemtype',
			'longdesc',
			'poster',
			'src',
			'xlink:href',
		]),
		Qn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
		Xn = (t, e) => {
			const i = t.nodeName.toLowerCase();
			return e.includes(i)
				? !Kn.has(i) || Boolean(Qn.test(t.nodeValue))
				: e.filter((t) => t instanceof RegExp).some((t) => t.test(i));
		},
		Yn = {
			allowList: Vn,
			content: {},
			extraClass: '',
			html: !1,
			sanitize: !0,
			sanitizeFn: null,
			template: '<div></div>',
		},
		Un = {
			allowList: 'object',
			content: 'object',
			extraClass: '(string|function)',
			html: 'boolean',
			sanitize: 'boolean',
			sanitizeFn: '(null|function)',
			template: 'string',
		},
		Gn = {
			entry: '(string|element|function|null)',
			selector: '(string|element)',
		};
	class Jn extends H {
		constructor(t) {
			super(), (this._config = this._getConfig(t));
		}
		static get Default() {
			return Yn;
		}
		static get DefaultType() {
			return Un;
		}
		static get NAME() {
			return 'TemplateFactory';
		}
		getContent() {
			return Object.values(this._config.content)
				.map((t) => this._resolvePossibleFunction(t))
				.filter(Boolean);
		}
		hasContent() {
			return this.getContent().length > 0;
		}
		changeContent(t) {
			return (
				this._checkContent(t),
				(this._config.content = { ...this._config.content, ...t }),
				this
			);
		}
		toHtml() {
			const t = document.createElement('div');
			t.innerHTML = this._maybeSanitize(this._config.template);
			for (const [e, i] of Object.entries(this._config.content))
				this._setContent(t, i, e);
			const e = t.children[0],
				i = this._resolvePossibleFunction(this._config.extraClass);
			return i && e.classList.add(...i.split(' ')), e;
		}
		_typeCheckConfig(t) {
			super._typeCheckConfig(t), this._checkContent(t.content);
		}
		_checkContent(t) {
			for (const [e, i] of Object.entries(t))
				super._typeCheckConfig({ selector: e, entry: i }, Gn);
		}
		_setContent(t, e, i) {
			const n = z.findOne(i, t);
			n &&
				((e = this._resolvePossibleFunction(e))
					? o(e)
						? this._putElementInTemplate(r(e), n)
						: this._config.html
							? (n.innerHTML = this._maybeSanitize(e))
							: (n.textContent = e)
					: n.remove());
		}
		_maybeSanitize(t) {
			return this._config.sanitize
				? (function (t, e, i) {
						if (!t.length) return t;
						if (i && 'function' == typeof i) return i(t);
						const n = new window.DOMParser().parseFromString(t, 'text/html'),
							s = [].concat(...n.body.querySelectorAll('*'));
						for (const t of s) {
							const i = t.nodeName.toLowerCase();
							if (!Object.keys(e).includes(i)) {
								t.remove();
								continue;
							}
							const n = [].concat(...t.attributes),
								s = [].concat(e['*'] || [], e[i] || []);
							for (const e of n) Xn(e, s) || t.removeAttribute(e.nodeName);
						}
						return n.body.innerHTML;
					})(t, this._config.allowList, this._config.sanitizeFn)
				: t;
		}
		_resolvePossibleFunction(t) {
			return g(t, [this]);
		}
		_putElementInTemplate(t, e) {
			if (this._config.html) return (e.innerHTML = ''), void e.append(t);
			e.textContent = t.textContent;
		}
	}
	const Zn = new Set(['sanitize', 'allowList', 'sanitizeFn']),
		ts = 'fade',
		es = 'show',
		is = '.modal',
		ns = 'hide.bs.modal',
		ss = 'hover',
		os = 'focus',
		rs = {
			AUTO: 'auto',
			TOP: 'top',
			RIGHT: p() ? 'left' : 'right',
			BOTTOM: 'bottom',
			LEFT: p() ? 'right' : 'left',
		},
		as = {
			allowList: Vn,
			animation: !0,
			boundary: 'clippingParents',
			container: !1,
			customClass: '',
			delay: 0,
			fallbackPlacements: ['top', 'right', 'bottom', 'left'],
			html: !1,
			offset: [0, 6],
			placement: 'top',
			popperConfig: null,
			sanitize: !0,
			sanitizeFn: null,
			selector: !1,
			template:
				'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
			title: '',
			trigger: 'hover focus',
		},
		ls = {
			allowList: 'object',
			animation: 'boolean',
			boundary: '(string|element)',
			container: '(string|element|boolean)',
			customClass: '(string|function)',
			delay: '(number|object)',
			fallbackPlacements: 'array',
			html: 'boolean',
			offset: '(array|string|function)',
			placement: '(string|function)',
			popperConfig: '(null|object|function)',
			sanitize: 'boolean',
			sanitizeFn: '(null|function)',
			selector: '(string|boolean)',
			template: 'string',
			title: '(string|element|function)',
			trigger: 'string',
		};
	class cs extends W {
		constructor(t, e) {
			if (void 0 === vi)
				throw new TypeError(
					"Bootstrap's tooltips require Popper (https://popper.js.org)"
				);
			super(t, e),
				(this._isEnabled = !0),
				(this._timeout = 0),
				(this._isHovered = null),
				(this._activeTrigger = {}),
				(this._popper = null),
				(this._templateFactory = null),
				(this._newContent = null),
				(this.tip = null),
				this._setListeners(),
				this._config.selector || this._fixTitle();
		}
		static get Default() {
			return as;
		}
		static get DefaultType() {
			return ls;
		}
		static get NAME() {
			return 'tooltip';
		}
		enable() {
			this._isEnabled = !0;
		}
		disable() {
			this._isEnabled = !1;
		}
		toggleEnabled() {
			this._isEnabled = !this._isEnabled;
		}
		toggle() {
			this._isEnabled &&
				((this._activeTrigger.click = !this._activeTrigger.click),
				this._isShown() ? this._leave() : this._enter());
		}
		dispose() {
			clearTimeout(this._timeout),
				N.off(this._element.closest(is), ns, this._hideModalHandler),
				this._element.getAttribute('data-bs-original-title') &&
					this._element.setAttribute(
						'title',
						this._element.getAttribute('data-bs-original-title')
					),
				this._disposePopper(),
				super.dispose();
		}
		show() {
			if ('none' === this._element.style.display)
				throw new Error('Please use show on visible elements');
			if (!this._isWithContent() || !this._isEnabled) return;
			const t = N.trigger(this._element, this.constructor.eventName('show')),
				e = (
					c(this._element) || this._element.ownerDocument.documentElement
				).contains(this._element);
			if (t.defaultPrevented || !e) return;
			this._disposePopper();
			const i = this._getTipElement();
			this._element.setAttribute('aria-describedby', i.getAttribute('id'));
			const { container: n } = this._config;
			if (
				(this._element.ownerDocument.documentElement.contains(this.tip) ||
					(n.append(i),
					N.trigger(this._element, this.constructor.eventName('inserted'))),
				(this._popper = this._createPopper(i)),
				i.classList.add(es),
				'ontouchstart' in document.documentElement)
			)
				for (const t of [].concat(...document.body.children))
					N.on(t, 'mouseover', h);
			this._queueCallback(
				() => {
					N.trigger(this._element, this.constructor.eventName('shown')),
						!1 === this._isHovered && this._leave(),
						(this._isHovered = !1);
				},
				this.tip,
				this._isAnimated()
			);
		}
		hide() {
			if (
				this._isShown() &&
				!N.trigger(this._element, this.constructor.eventName('hide'))
					.defaultPrevented
			) {
				if (
					(this._getTipElement().classList.remove(es),
					'ontouchstart' in document.documentElement)
				)
					for (const t of [].concat(...document.body.children))
						N.off(t, 'mouseover', h);
				(this._activeTrigger.click = !1),
					(this._activeTrigger[os] = !1),
					(this._activeTrigger[ss] = !1),
					(this._isHovered = null),
					this._queueCallback(
						() => {
							this._isWithActiveTrigger() ||
								(this._isHovered || this._disposePopper(),
								this._element.removeAttribute('aria-describedby'),
								N.trigger(this._element, this.constructor.eventName('hidden')));
						},
						this.tip,
						this._isAnimated()
					);
			}
		}
		update() {
			this._popper && this._popper.update();
		}
		_isWithContent() {
			return Boolean(this._getTitle());
		}
		_getTipElement() {
			return (
				this.tip ||
					(this.tip = this._createTipElement(
						this._newContent || this._getContentForTemplate()
					)),
				this.tip
			);
		}
		_createTipElement(t) {
			const e = this._getTemplateFactory(t).toHtml();
			if (!e) return null;
			e.classList.remove(ts, es),
				e.classList.add(`bs-${this.constructor.NAME}-auto`);
			const i = ((t) => {
				do {
					t += Math.floor(1e6 * Math.random());
				} while (document.getElementById(t));
				return t;
			})(this.constructor.NAME).toString();
			return (
				e.setAttribute('id', i), this._isAnimated() && e.classList.add(ts), e
			);
		}
		setContent(t) {
			(this._newContent = t),
				this._isShown() && (this._disposePopper(), this.show());
		}
		_getTemplateFactory(t) {
			return (
				this._templateFactory
					? this._templateFactory.changeContent(t)
					: (this._templateFactory = new Jn({
							...this._config,
							content: t,
							extraClass: this._resolvePossibleFunction(
								this._config.customClass
							),
						})),
				this._templateFactory
			);
		}
		_getContentForTemplate() {
			return { '.tooltip-inner': this._getTitle() };
		}
		_getTitle() {
			return (
				this._resolvePossibleFunction(this._config.title) ||
				this._element.getAttribute('data-bs-original-title')
			);
		}
		_initializeOnDelegatedTarget(t) {
			return this.constructor.getOrCreateInstance(
				t.delegateTarget,
				this._getDelegateConfig()
			);
		}
		_isAnimated() {
			return (
				this._config.animation || (this.tip && this.tip.classList.contains(ts))
			);
		}
		_isShown() {
			return this.tip && this.tip.classList.contains(es);
		}
		_createPopper(t) {
			const e = g(this._config.placement, [this, t, this._element]),
				i = rs[e.toUpperCase()];
			return bi(this._element, t, this._getPopperConfig(i));
		}
		_getOffset() {
			const { offset: t } = this._config;
			return 'string' == typeof t
				? t.split(',').map((t) => Number.parseInt(t, 10))
				: 'function' == typeof t
					? (e) => t(e, this._element)
					: t;
		}
		_resolvePossibleFunction(t) {
			return g(t, [this._element]);
		}
		_getPopperConfig(t) {
			const e = {
				placement: t,
				modifiers: [
					{
						name: 'flip',
						options: { fallbackPlacements: this._config.fallbackPlacements },
					},
					{ name: 'offset', options: { offset: this._getOffset() } },
					{
						name: 'preventOverflow',
						options: { boundary: this._config.boundary },
					},
					{
						name: 'arrow',
						options: { element: `.${this.constructor.NAME}-arrow` },
					},
					{
						name: 'preSetPlacement',
						enabled: !0,
						phase: 'beforeMain',
						fn: (t) => {
							this._getTipElement().setAttribute(
								'data-popper-placement',
								t.state.placement
							);
						},
					},
				],
			};
			return { ...e, ...g(this._config.popperConfig, [e]) };
		}
		_setListeners() {
			const t = this._config.trigger.split(' ');
			for (const e of t)
				if ('click' === e)
					N.on(
						this._element,
						this.constructor.eventName('click'),
						this._config.selector,
						(t) => {
							this._initializeOnDelegatedTarget(t).toggle();
						}
					);
				else if ('manual' !== e) {
					const t =
							e === ss
								? this.constructor.eventName('mouseenter')
								: this.constructor.eventName('focusin'),
						i =
							e === ss
								? this.constructor.eventName('mouseleave')
								: this.constructor.eventName('focusout');
					N.on(this._element, t, this._config.selector, (t) => {
						const e = this._initializeOnDelegatedTarget(t);
						(e._activeTrigger['focusin' === t.type ? os : ss] = !0), e._enter();
					}),
						N.on(this._element, i, this._config.selector, (t) => {
							const e = this._initializeOnDelegatedTarget(t);
							(e._activeTrigger['focusout' === t.type ? os : ss] =
								e._element.contains(t.relatedTarget)),
								e._leave();
						});
				}
			(this._hideModalHandler = () => {
				this._element && this.hide();
			}),
				N.on(this._element.closest(is), ns, this._hideModalHandler);
		}
		_fixTitle() {
			const t = this._element.getAttribute('title');
			t &&
				(this._element.getAttribute('aria-label') ||
					this._element.textContent.trim() ||
					this._element.setAttribute('aria-label', t),
				this._element.setAttribute('data-bs-original-title', t),
				this._element.removeAttribute('title'));
		}
		_enter() {
			this._isShown() || this._isHovered
				? (this._isHovered = !0)
				: ((this._isHovered = !0),
					this._setTimeout(() => {
						this._isHovered && this.show();
					}, this._config.delay.show));
		}
		_leave() {
			this._isWithActiveTrigger() ||
				((this._isHovered = !1),
				this._setTimeout(() => {
					this._isHovered || this.hide();
				}, this._config.delay.hide));
		}
		_setTimeout(t, e) {
			clearTimeout(this._timeout), (this._timeout = setTimeout(t, e));
		}
		_isWithActiveTrigger() {
			return Object.values(this._activeTrigger).includes(!0);
		}
		_getConfig(t) {
			const e = F.getDataAttributes(this._element);
			for (const t of Object.keys(e)) Zn.has(t) && delete e[t];
			return (
				(t = { ...e, ...('object' == typeof t && t ? t : {}) }),
				(t = this._mergeConfigObj(t)),
				(t = this._configAfterMerge(t)),
				this._typeCheckConfig(t),
				t
			);
		}
		_configAfterMerge(t) {
			return (
				(t.container = !1 === t.container ? document.body : r(t.container)),
				'number' == typeof t.delay &&
					(t.delay = { show: t.delay, hide: t.delay }),
				'number' == typeof t.title && (t.title = t.title.toString()),
				'number' == typeof t.content && (t.content = t.content.toString()),
				t
			);
		}
		_getDelegateConfig() {
			const t = {};
			for (const [e, i] of Object.entries(this._config))
				this.constructor.Default[e] !== i && (t[e] = i);
			return (t.selector = !1), (t.trigger = 'manual'), t;
		}
		_disposePopper() {
			this._popper && (this._popper.destroy(), (this._popper = null)),
				this.tip && (this.tip.remove(), (this.tip = null));
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = cs.getOrCreateInstance(this, t);
				if ('string' == typeof t) {
					if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
					e[t]();
				}
			});
		}
	}
	m(cs);
	const hs = {
			...cs.Default,
			content: '',
			offset: [0, 8],
			placement: 'right',
			template:
				'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
			trigger: 'click',
		},
		ds = { ...cs.DefaultType, content: '(null|string|element|function)' };
	class us extends cs {
		static get Default() {
			return hs;
		}
		static get DefaultType() {
			return ds;
		}
		static get NAME() {
			return 'popover';
		}
		_isWithContent() {
			return this._getTitle() || this._getContent();
		}
		_getContentForTemplate() {
			return {
				'.popover-header': this._getTitle(),
				'.popover-body': this._getContent(),
			};
		}
		_getContent() {
			return this._resolvePossibleFunction(this._config.content);
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = us.getOrCreateInstance(this, t);
				if ('string' == typeof t) {
					if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
					e[t]();
				}
			});
		}
	}
	m(us);
	const fs = '.bs.scrollspy',
		ps = `activate${fs}`,
		ms = `click${fs}`,
		gs = `load${fs}.data-api`,
		_s = 'active',
		bs = '[href]',
		vs = '.nav-link',
		ys = `${vs}, .nav-item > ${vs}, .list-group-item`,
		ws = {
			offset: null,
			rootMargin: '0px 0px -25%',
			smoothScroll: !1,
			target: null,
			threshold: [0.1, 0.5, 1],
		},
		As = {
			offset: '(number|null)',
			rootMargin: 'string',
			smoothScroll: 'boolean',
			target: 'element',
			threshold: 'array',
		};
	class Es extends W {
		constructor(t, e) {
			super(t, e),
				(this._targetLinks = new Map()),
				(this._observableSections = new Map()),
				(this._rootElement =
					'visible' === getComputedStyle(this._element).overflowY
						? null
						: this._element),
				(this._activeTarget = null),
				(this._observer = null),
				(this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
				this.refresh();
		}
		static get Default() {
			return ws;
		}
		static get DefaultType() {
			return As;
		}
		static get NAME() {
			return 'scrollspy';
		}
		refresh() {
			this._initializeTargetsAndObservables(),
				this._maybeEnableSmoothScroll(),
				this._observer
					? this._observer.disconnect()
					: (this._observer = this._getNewObserver());
			for (const t of this._observableSections.values())
				this._observer.observe(t);
		}
		dispose() {
			this._observer.disconnect(), super.dispose();
		}
		_configAfterMerge(t) {
			return (
				(t.target = r(t.target) || document.body),
				(t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin),
				'string' == typeof t.threshold &&
					(t.threshold = t.threshold
						.split(',')
						.map((t) => Number.parseFloat(t))),
				t
			);
		}
		_maybeEnableSmoothScroll() {
			this._config.smoothScroll &&
				(N.off(this._config.target, ms),
				N.on(this._config.target, ms, bs, (t) => {
					const e = this._observableSections.get(t.target.hash);
					if (e) {
						t.preventDefault();
						const i = this._rootElement || window,
							n = e.offsetTop - this._element.offsetTop;
						if (i.scrollTo)
							return void i.scrollTo({ top: n, behavior: 'smooth' });
						i.scrollTop = n;
					}
				}));
		}
		_getNewObserver() {
			const t = {
				root: this._rootElement,
				threshold: this._config.threshold,
				rootMargin: this._config.rootMargin,
			};
			return new IntersectionObserver((t) => this._observerCallback(t), t);
		}
		_observerCallback(t) {
			const e = (t) => this._targetLinks.get(`#${t.target.id}`),
				i = (t) => {
					(this._previousScrollData.visibleEntryTop = t.target.offsetTop),
						this._process(e(t));
				},
				n = (this._rootElement || document.documentElement).scrollTop,
				s = n >= this._previousScrollData.parentScrollTop;
			this._previousScrollData.parentScrollTop = n;
			for (const o of t) {
				if (!o.isIntersecting) {
					(this._activeTarget = null), this._clearActiveClass(e(o));
					continue;
				}
				const t =
					o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
				if (s && t) {
					if ((i(o), !n)) return;
				} else s || t || i(o);
			}
		}
		_initializeTargetsAndObservables() {
			(this._targetLinks = new Map()), (this._observableSections = new Map());
			const t = z.find(bs, this._config.target);
			for (const e of t) {
				if (!e.hash || l(e)) continue;
				const t = z.findOne(decodeURI(e.hash), this._element);
				a(t) &&
					(this._targetLinks.set(decodeURI(e.hash), e),
					this._observableSections.set(e.hash, t));
			}
		}
		_process(t) {
			this._activeTarget !== t &&
				(this._clearActiveClass(this._config.target),
				(this._activeTarget = t),
				t.classList.add(_s),
				this._activateParents(t),
				N.trigger(this._element, ps, { relatedTarget: t }));
		}
		_activateParents(t) {
			if (t.classList.contains('dropdown-item'))
				z.findOne('.dropdown-toggle', t.closest('.dropdown')).classList.add(_s);
			else
				for (const e of z.parents(t, '.nav, .list-group'))
					for (const t of z.prev(e, ys)) t.classList.add(_s);
		}
		_clearActiveClass(t) {
			t.classList.remove(_s);
			const e = z.find(`${bs}.${_s}`, t);
			for (const t of e) t.classList.remove(_s);
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = Es.getOrCreateInstance(this, t);
				if ('string' == typeof t) {
					if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t)
						throw new TypeError(`No method named "${t}"`);
					e[t]();
				}
			});
		}
	}
	N.on(window, gs, () => {
		for (const t of z.find('[data-bs-spy="scroll"]')) Es.getOrCreateInstance(t);
	}),
		m(Es);
	const Ts = '.bs.tab',
		Cs = `hide${Ts}`,
		Os = `hidden${Ts}`,
		xs = `show${Ts}`,
		ks = `shown${Ts}`,
		Ls = `click${Ts}`,
		Ss = `keydown${Ts}`,
		Ds = `load${Ts}`,
		$s = 'ArrowLeft',
		Is = 'ArrowRight',
		Ns = 'ArrowUp',
		Ps = 'ArrowDown',
		js = 'Home',
		Ms = 'End',
		Fs = 'active',
		Hs = 'fade',
		Ws = 'show',
		Bs = '.dropdown-toggle',
		zs = `:not(${Bs})`,
		Rs =
			'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
		qs = `.nav-link${zs}, .list-group-item${zs}, [role="tab"]${zs}, ${Rs}`,
		Vs = `.${Fs}[data-bs-toggle="tab"], .${Fs}[data-bs-toggle="pill"], .${Fs}[data-bs-toggle="list"]`;
	class Ks extends W {
		constructor(t) {
			super(t),
				(this._parent = this._element.closest(
					'.list-group, .nav, [role="tablist"]'
				)),
				this._parent &&
					(this._setInitialAttributes(this._parent, this._getChildren()),
					N.on(this._element, Ss, (t) => this._keydown(t)));
		}
		static get NAME() {
			return 'tab';
		}
		show() {
			const t = this._element;
			if (this._elemIsActive(t)) return;
			const e = this._getActiveElem(),
				i = e ? N.trigger(e, Cs, { relatedTarget: t }) : null;
			N.trigger(t, xs, { relatedTarget: e }).defaultPrevented ||
				(i && i.defaultPrevented) ||
				(this._deactivate(e, t), this._activate(t, e));
		}
		_activate(t, e) {
			t &&
				(t.classList.add(Fs),
				this._activate(z.getElementFromSelector(t)),
				this._queueCallback(
					() => {
						'tab' === t.getAttribute('role')
							? (t.removeAttribute('tabindex'),
								t.setAttribute('aria-selected', !0),
								this._toggleDropDown(t, !0),
								N.trigger(t, ks, { relatedTarget: e }))
							: t.classList.add(Ws);
					},
					t,
					t.classList.contains(Hs)
				));
		}
		_deactivate(t, e) {
			t &&
				(t.classList.remove(Fs),
				t.blur(),
				this._deactivate(z.getElementFromSelector(t)),
				this._queueCallback(
					() => {
						'tab' === t.getAttribute('role')
							? (t.setAttribute('aria-selected', !1),
								t.setAttribute('tabindex', '-1'),
								this._toggleDropDown(t, !1),
								N.trigger(t, Os, { relatedTarget: e }))
							: t.classList.remove(Ws);
					},
					t,
					t.classList.contains(Hs)
				));
		}
		_keydown(t) {
			if (![$s, Is, Ns, Ps, js, Ms].includes(t.key)) return;
			t.stopPropagation(), t.preventDefault();
			const e = this._getChildren().filter((t) => !l(t));
			let i;
			if ([js, Ms].includes(t.key)) i = e[t.key === js ? 0 : e.length - 1];
			else {
				const n = [Is, Ps].includes(t.key);
				i = b(e, t.target, n, !0);
			}
			i && (i.focus({ preventScroll: !0 }), Ks.getOrCreateInstance(i).show());
		}
		_getChildren() {
			return z.find(qs, this._parent);
		}
		_getActiveElem() {
			return this._getChildren().find((t) => this._elemIsActive(t)) || null;
		}
		_setInitialAttributes(t, e) {
			this._setAttributeIfNotExists(t, 'role', 'tablist');
			for (const t of e) this._setInitialAttributesOnChild(t);
		}
		_setInitialAttributesOnChild(t) {
			t = this._getInnerElement(t);
			const e = this._elemIsActive(t),
				i = this._getOuterElement(t);
			t.setAttribute('aria-selected', e),
				i !== t && this._setAttributeIfNotExists(i, 'role', 'presentation'),
				e || t.setAttribute('tabindex', '-1'),
				this._setAttributeIfNotExists(t, 'role', 'tab'),
				this._setInitialAttributesOnTargetPanel(t);
		}
		_setInitialAttributesOnTargetPanel(t) {
			const e = z.getElementFromSelector(t);
			e &&
				(this._setAttributeIfNotExists(e, 'role', 'tabpanel'),
				t.id && this._setAttributeIfNotExists(e, 'aria-labelledby', `${t.id}`));
		}
		_toggleDropDown(t, e) {
			const i = this._getOuterElement(t);
			if (!i.classList.contains('dropdown')) return;
			const n = (t, n) => {
				const s = z.findOne(t, i);
				s && s.classList.toggle(n, e);
			};
			n(Bs, Fs), n('.dropdown-menu', Ws), i.setAttribute('aria-expanded', e);
		}
		_setAttributeIfNotExists(t, e, i) {
			t.hasAttribute(e) || t.setAttribute(e, i);
		}
		_elemIsActive(t) {
			return t.classList.contains(Fs);
		}
		_getInnerElement(t) {
			return t.matches(qs) ? t : z.findOne(qs, t);
		}
		_getOuterElement(t) {
			return t.closest('.nav-item, .list-group-item') || t;
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = Ks.getOrCreateInstance(this);
				if ('string' == typeof t) {
					if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t)
						throw new TypeError(`No method named "${t}"`);
					e[t]();
				}
			});
		}
	}
	N.on(document, Ls, Rs, function (t) {
		['A', 'AREA'].includes(this.tagName) && t.preventDefault(),
			l(this) || Ks.getOrCreateInstance(this).show();
	}),
		N.on(window, Ds, () => {
			for (const t of z.find(Vs)) Ks.getOrCreateInstance(t);
		}),
		m(Ks);
	const Qs = '.bs.toast',
		Xs = `mouseover${Qs}`,
		Ys = `mouseout${Qs}`,
		Us = `focusin${Qs}`,
		Gs = `focusout${Qs}`,
		Js = `hide${Qs}`,
		Zs = `hidden${Qs}`,
		to = `show${Qs}`,
		eo = `shown${Qs}`,
		io = 'hide',
		no = 'show',
		so = 'showing',
		oo = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
		ro = { animation: !0, autohide: !0, delay: 5e3 };
	class ao extends W {
		constructor(t, e) {
			super(t, e),
				(this._timeout = null),
				(this._hasMouseInteraction = !1),
				(this._hasKeyboardInteraction = !1),
				this._setListeners();
		}
		static get Default() {
			return ro;
		}
		static get DefaultType() {
			return oo;
		}
		static get NAME() {
			return 'toast';
		}
		show() {
			N.trigger(this._element, to).defaultPrevented ||
				(this._clearTimeout(),
				this._config.animation && this._element.classList.add('fade'),
				this._element.classList.remove(io),
				d(this._element),
				this._element.classList.add(no, so),
				this._queueCallback(
					() => {
						this._element.classList.remove(so),
							N.trigger(this._element, eo),
							this._maybeScheduleHide();
					},
					this._element,
					this._config.animation
				));
		}
		hide() {
			this.isShown() &&
				(N.trigger(this._element, Js).defaultPrevented ||
					(this._element.classList.add(so),
					this._queueCallback(
						() => {
							this._element.classList.add(io),
								this._element.classList.remove(so, no),
								N.trigger(this._element, Zs);
						},
						this._element,
						this._config.animation
					)));
		}
		dispose() {
			this._clearTimeout(),
				this.isShown() && this._element.classList.remove(no),
				super.dispose();
		}
		isShown() {
			return this._element.classList.contains(no);
		}
		_maybeScheduleHide() {
			this._config.autohide &&
				(this._hasMouseInteraction ||
					this._hasKeyboardInteraction ||
					(this._timeout = setTimeout(() => {
						this.hide();
					}, this._config.delay)));
		}
		_onInteraction(t, e) {
			switch (t.type) {
				case 'mouseover':
				case 'mouseout':
					this._hasMouseInteraction = e;
					break;
				case 'focusin':
				case 'focusout':
					this._hasKeyboardInteraction = e;
			}
			if (e) return void this._clearTimeout();
			const i = t.relatedTarget;
			this._element === i ||
				this._element.contains(i) ||
				this._maybeScheduleHide();
		}
		_setListeners() {
			N.on(this._element, Xs, (t) => this._onInteraction(t, !0)),
				N.on(this._element, Ys, (t) => this._onInteraction(t, !1)),
				N.on(this._element, Us, (t) => this._onInteraction(t, !0)),
				N.on(this._element, Gs, (t) => this._onInteraction(t, !1));
		}
		_clearTimeout() {
			clearTimeout(this._timeout), (this._timeout = null);
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = ao.getOrCreateInstance(this, t);
				if ('string' == typeof t) {
					if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
					e[t](this);
				}
			});
		}
	}
	return (
		R(ao),
		m(ao),
		{
			Alert: Q,
			Button: Y,
			Carousel: xt,
			Collapse: Bt,
			Dropdown: qi,
			Modal: On,
			Offcanvas: qn,
			Popover: us,
			ScrollSpy: Es,
			Tab: Ks,
			Toast: ao,
			Tooltip: cs,
		}
	);
});
//# sourceMappingURL=bootstrap.bundle.min.js.map
/**
 * bootstrap-table - An extended table to integration with some of the most widely used CSS frameworks. (Supports Bootstrap, Semantic UI, Bulma, Material Design, Foundation)
 *
 * @version v1.23.5
 * @homepage https://bootstrap-table.com
 * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
 * @license MIT
 */

!(function (t, e) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = e(require('jquery')))
		: 'function' == typeof define && define.amd
			? define(['jquery'], e)
			: ((t =
					'undefined' != typeof globalThis
						? globalThis
						: t || self).BootstrapTable = e(t.jQuery));
})(this, function (t) {
	'use strict';
	function e(t, e) {
		(null == e || e > t.length) && (e = t.length);
		for (var n = 0, i = Array(e); n < e; n++) i[n] = t[n];
		return i;
	}
	function n(t, e) {
		if (!(t instanceof e))
			throw new TypeError('Cannot call a class as a function');
	}
	function i(t, e, n) {
		return (
			e &&
				(function (t, e) {
					for (var n = 0; n < e.length; n++) {
						var i = e[n];
						(i.enumerable = i.enumerable || !1),
							(i.configurable = !0),
							'value' in i && (i.writable = !0),
							Object.defineProperty(t, u(i.key), i);
					}
				})(t.prototype, e),
			Object.defineProperty(t, 'prototype', { writable: !1 }),
			t
		);
	}
	function r(t, e) {
		var n =
			('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
		if (!n) {
			if (Array.isArray(t) || (n = f(t)) || e) {
				n && (t = n);
				var i = 0,
					r = function () {};
				return {
					s: r,
					n: function () {
						return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
					},
					e: function (t) {
						throw t;
					},
					f: r,
				};
			}
			throw new TypeError(
				'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
			);
		}
		var o,
			a = !0,
			s = !1;
		return {
			s: function () {
				n = n.call(t);
			},
			n: function () {
				var t = n.next();
				return (a = t.done), t;
			},
			e: function (t) {
				(s = !0), (o = t);
			},
			f: function () {
				try {
					a || null == n.return || n.return();
				} finally {
					if (s) throw o;
				}
			},
		};
	}
	function o(t, e, n) {
		return (
			(e = u(e)) in t
				? Object.defineProperty(t, e, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0,
					})
				: (t[e] = n),
			t
		);
	}
	function a(t, e) {
		var n = Object.keys(t);
		if (Object.getOwnPropertySymbols) {
			var i = Object.getOwnPropertySymbols(t);
			e &&
				(i = i.filter(function (e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable;
				})),
				n.push.apply(n, i);
		}
		return n;
	}
	function s(t) {
		for (var e = 1; e < arguments.length; e++) {
			var n = null != arguments[e] ? arguments[e] : {};
			e % 2
				? a(Object(n), !0).forEach(function (e) {
						o(t, e, n[e]);
					})
				: Object.getOwnPropertyDescriptors
					? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
					: a(Object(n)).forEach(function (e) {
							Object.defineProperty(
								t,
								e,
								Object.getOwnPropertyDescriptor(n, e)
							);
						});
		}
		return t;
	}
	function l(t, e) {
		return (
			(function (t) {
				if (Array.isArray(t)) return t;
			})(t) ||
			(function (t, e) {
				var n =
					null == t
						? null
						: ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
							t['@@iterator'];
				if (null != n) {
					var i,
						r,
						o,
						a,
						s = [],
						l = !0,
						c = !1;
					try {
						if (((o = (n = n.call(t)).next), 0 === e));
						else
							for (
								;
								!(l = (i = o.call(n)).done) &&
								(s.push(i.value), s.length !== e);
								l = !0
							);
					} catch (t) {
						(c = !0), (r = t);
					} finally {
						try {
							if (!l && null != n.return && ((a = n.return()), Object(a) !== a))
								return;
						} finally {
							if (c) throw r;
						}
					}
					return s;
				}
			})(t, e) ||
			f(t, e) ||
			(function () {
				throw new TypeError(
					'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
				);
			})()
		);
	}
	function c(t) {
		return (
			(function (t) {
				if (Array.isArray(t)) return e(t);
			})(t) ||
			(function (t) {
				if (
					('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
					null != t['@@iterator']
				)
					return Array.from(t);
			})(t) ||
			f(t) ||
			(function () {
				throw new TypeError(
					'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
				);
			})()
		);
	}
	function u(t) {
		var e = (function (t, e) {
			if ('object' != typeof t || !t) return t;
			var n = t[Symbol.toPrimitive];
			if (void 0 !== n) {
				var i = n.call(t, e);
				if ('object' != typeof i) return i;
				throw new TypeError('@@toPrimitive must return a primitive value.');
			}
			return String(t);
		})(t, 'string');
		return 'symbol' == typeof e ? e : e + '';
	}
	function h(t) {
		return (
			(h =
				'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
					? function (t) {
							return typeof t;
						}
					: function (t) {
							return t &&
								'function' == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? 'symbol'
								: typeof t;
						}),
			h(t)
		);
	}
	function f(t, n) {
		if (t) {
			if ('string' == typeof t) return e(t, n);
			var i = {}.toString.call(t).slice(8, -1);
			return (
				'Object' === i && t.constructor && (i = t.constructor.name),
				'Map' === i || 'Set' === i
					? Array.from(t)
					: 'Arguments' === i ||
						  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
						? e(t, n)
						: void 0
			);
		}
	}
	var d,
		p,
		g =
			'undefined' != typeof globalThis
				? globalThis
				: 'undefined' != typeof window
					? window
					: 'undefined' != typeof global
						? global
						: 'undefined' != typeof self
							? self
							: {},
		v = {};
	function b() {
		if (p) return d;
		p = 1;
		var t = function (t) {
			return t && t.Math === Math && t;
		};
		return (d =
			t('object' == typeof globalThis && globalThis) ||
			t('object' == typeof window && window) ||
			t('object' == typeof self && self) ||
			t('object' == typeof g && g) ||
			t('object' == typeof d && d) ||
			(function () {
				return this;
			})() ||
			Function('return this')());
	}
	var m,
		y,
		w,
		S,
		x,
		O,
		k,
		T,
		P = {};
	function C() {
		return y
			? m
			: ((y = 1),
				(m = function (t) {
					try {
						return !!t();
					} catch (t) {
						return !0;
					}
				}));
	}
	function A() {
		if (S) return w;
		S = 1;
		var t = C();
		return (w = !t(function () {
			return (
				7 !==
				Object.defineProperty({}, 1, {
					get: function () {
						return 7;
					},
				})[1]
			);
		}));
	}
	function I() {
		if (O) return x;
		O = 1;
		var t = C();
		return (x = !t(function () {
			var t = function () {}.bind();
			return 'function' != typeof t || t.hasOwnProperty('prototype');
		}));
	}
	function $() {
		if (T) return k;
		T = 1;
		var t = I(),
			e = Function.prototype.call;
		return (
			(k = t
				? e.bind(e)
				: function () {
						return e.apply(e, arguments);
					}),
			k
		);
	}
	var R,
		E,
		j,
		N,
		F,
		D,
		L,
		_,
		V,
		B,
		H,
		M,
		U,
		z,
		q,
		W,
		G,
		K,
		J,
		Y,
		Q,
		X,
		Z,
		tt,
		et,
		nt,
		it,
		rt,
		ot,
		at,
		st,
		lt,
		ct,
		ut,
		ht,
		ft,
		dt,
		pt,
		gt,
		vt,
		bt,
		mt = {};
	function yt() {
		if (R) return mt;
		R = 1;
		var t = {}.propertyIsEnumerable,
			e = Object.getOwnPropertyDescriptor,
			n = e && !t.call({ 1: 2 }, 1);
		return (
			(mt.f = n
				? function (t) {
						var n = e(this, t);
						return !!n && n.enumerable;
					}
				: t),
			mt
		);
	}
	function wt() {
		return j
			? E
			: ((j = 1),
				(E = function (t, e) {
					return {
						enumerable: !(1 & t),
						configurable: !(2 & t),
						writable: !(4 & t),
						value: e,
					};
				}));
	}
	function St() {
		if (F) return N;
		F = 1;
		var t = I(),
			e = Function.prototype,
			n = e.call,
			i = t && e.bind.bind(n, n);
		return (
			(N = t
				? i
				: function (t) {
						return function () {
							return n.apply(t, arguments);
						};
					}),
			N
		);
	}
	function xt() {
		if (L) return D;
		L = 1;
		var t = St(),
			e = t({}.toString),
			n = t(''.slice);
		return (D = function (t) {
			return n(e(t), 8, -1);
		});
	}
	function Ot() {
		if (V) return _;
		V = 1;
		var t = St(),
			e = C(),
			n = xt(),
			i = Object,
			r = t(''.split);
		return (_ = e(function () {
			return !i('z').propertyIsEnumerable(0);
		})
			? function (t) {
					return 'String' === n(t) ? r(t, '') : i(t);
				}
			: i);
	}
	function kt() {
		return H
			? B
			: ((H = 1),
				(B = function (t) {
					return null == t;
				}));
	}
	function Tt() {
		if (U) return M;
		U = 1;
		var t = kt(),
			e = TypeError;
		return (M = function (n) {
			if (t(n)) throw new e("Can't call method on " + n);
			return n;
		});
	}
	function Pt() {
		if (q) return z;
		q = 1;
		var t = Ot(),
			e = Tt();
		return (z = function (n) {
			return t(e(n));
		});
	}
	function Ct() {
		if (G) return W;
		G = 1;
		var t = 'object' == typeof document && document.all;
		return (W =
			void 0 === t && void 0 !== t
				? function (e) {
						return 'function' == typeof e || e === t;
					}
				: function (t) {
						return 'function' == typeof t;
					});
	}
	function At() {
		if (J) return K;
		J = 1;
		var t = Ct();
		return (K = function (e) {
			return 'object' == typeof e ? null !== e : t(e);
		});
	}
	function It() {
		if (Q) return Y;
		Q = 1;
		var t = b(),
			e = Ct();
		return (
			(Y = function (n, i) {
				return arguments.length < 2
					? ((r = t[n]), e(r) ? r : void 0)
					: t[n] && t[n][i];
				var r;
			}),
			Y
		);
	}
	function $t() {
		if (Z) return X;
		Z = 1;
		var t = St();
		return (X = t({}.isPrototypeOf));
	}
	function Rt() {
		if (et) return tt;
		et = 1;
		var t = b().navigator,
			e = t && t.userAgent;
		return (tt = e ? String(e) : '');
	}
	function Et() {
		if (it) return nt;
		it = 1;
		var t,
			e,
			n = b(),
			i = Rt(),
			r = n.process,
			o = n.Deno,
			a = (r && r.versions) || (o && o.version),
			s = a && a.v8;
		return (
			s && (e = (t = s.split('.'))[0] > 0 && t[0] < 4 ? 1 : +(t[0] + t[1])),
			!e &&
				i &&
				(!(t = i.match(/Edge\/(\d+)/)) || t[1] >= 74) &&
				(t = i.match(/Chrome\/(\d+)/)) &&
				(e = +t[1]),
			(nt = e)
		);
	}
	function jt() {
		if (ot) return rt;
		ot = 1;
		var t = Et(),
			e = C(),
			n = b().String;
		return (rt =
			!!Object.getOwnPropertySymbols &&
			!e(function () {
				var e = Symbol('symbol detection');
				return (
					!n(e) ||
					!(Object(e) instanceof Symbol) ||
					(!Symbol.sham && t && t < 41)
				);
			}));
	}
	function Nt() {
		if (st) return at;
		st = 1;
		var t = jt();
		return (at = t && !Symbol.sham && 'symbol' == typeof Symbol.iterator);
	}
	function Ft() {
		if (ct) return lt;
		ct = 1;
		var t = It(),
			e = Ct(),
			n = $t(),
			i = Nt(),
			r = Object;
		return (lt = i
			? function (t) {
					return 'symbol' == typeof t;
				}
			: function (i) {
					var o = t('Symbol');
					return e(o) && n(o.prototype, r(i));
				});
	}
	function Dt() {
		if (ht) return ut;
		ht = 1;
		var t = String;
		return (ut = function (e) {
			try {
				return t(e);
			} catch (t) {
				return 'Object';
			}
		});
	}
	function Lt() {
		if (dt) return ft;
		dt = 1;
		var t = Ct(),
			e = Dt(),
			n = TypeError;
		return (ft = function (i) {
			if (t(i)) return i;
			throw new n(e(i) + ' is not a function');
		});
	}
	function _t() {
		if (gt) return pt;
		gt = 1;
		var t = Lt(),
			e = kt();
		return (pt = function (n, i) {
			var r = n[i];
			return e(r) ? void 0 : t(r);
		});
	}
	function Vt() {
		if (bt) return vt;
		bt = 1;
		var t = $(),
			e = Ct(),
			n = At(),
			i = TypeError;
		return (vt = function (r, o) {
			var a, s;
			if ('string' === o && e((a = r.toString)) && !n((s = t(a, r)))) return s;
			if (e((a = r.valueOf)) && !n((s = t(a, r)))) return s;
			if ('string' !== o && e((a = r.toString)) && !n((s = t(a, r)))) return s;
			throw new i("Can't convert object to primitive value");
		});
	}
	var Bt,
		Ht,
		Mt,
		Ut,
		zt,
		qt,
		Wt,
		Gt,
		Kt,
		Jt,
		Yt,
		Qt,
		Xt,
		Zt,
		te,
		ee,
		ne,
		ie,
		re,
		oe,
		ae,
		se,
		le,
		ce,
		ue = { exports: {} };
	function he() {
		return Ht ? Bt : ((Ht = 1), (Bt = !1));
	}
	function fe() {
		if (Ut) return Mt;
		Ut = 1;
		var t = b(),
			e = Object.defineProperty;
		return (Mt = function (n, i) {
			try {
				e(t, n, { value: i, configurable: !0, writable: !0 });
			} catch (e) {
				t[n] = i;
			}
			return i;
		});
	}
	function de() {
		if (zt) return ue.exports;
		zt = 1;
		var t = he(),
			e = b(),
			n = fe(),
			i = '__core-js_shared__',
			r = (ue.exports = e[i] || n(i, {}));
		return (
			(r.versions || (r.versions = [])).push({
				version: '3.38.1',
				mode: t ? 'pure' : 'global',
				copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
				license: 'https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE',
				source: 'https://github.com/zloirock/core-js',
			}),
			ue.exports
		);
	}
	function pe() {
		if (Wt) return qt;
		Wt = 1;
		var t = de();
		return (qt = function (e, n) {
			return t[e] || (t[e] = n || {});
		});
	}
	function ge() {
		if (Kt) return Gt;
		Kt = 1;
		var t = Tt(),
			e = Object;
		return (Gt = function (n) {
			return e(t(n));
		});
	}
	function ve() {
		if (Yt) return Jt;
		Yt = 1;
		var t = St(),
			e = ge(),
			n = t({}.hasOwnProperty);
		return (Jt =
			Object.hasOwn ||
			function (t, i) {
				return n(e(t), i);
			});
	}
	function be() {
		if (Xt) return Qt;
		Xt = 1;
		var t = St(),
			e = 0,
			n = Math.random(),
			i = t((1).toString);
		return (Qt = function (t) {
			return 'Symbol(' + (void 0 === t ? '' : t) + ')_' + i(++e + n, 36);
		});
	}
	function me() {
		if (te) return Zt;
		te = 1;
		var t = b(),
			e = pe(),
			n = ve(),
			i = be(),
			r = jt(),
			o = Nt(),
			a = t.Symbol,
			s = e('wks'),
			l = o ? a.for || a : (a && a.withoutSetter) || i;
		return (Zt = function (t) {
			return n(s, t) || (s[t] = r && n(a, t) ? a[t] : l('Symbol.' + t)), s[t];
		});
	}
	function ye() {
		if (ne) return ee;
		ne = 1;
		var t = $(),
			e = At(),
			n = Ft(),
			i = _t(),
			r = Vt(),
			o = me(),
			a = TypeError,
			s = o('toPrimitive');
		return (ee = function (o, l) {
			if (!e(o) || n(o)) return o;
			var c,
				u = i(o, s);
			if (u) {
				if ((void 0 === l && (l = 'default'), (c = t(u, o, l)), !e(c) || n(c)))
					return c;
				throw new a("Can't convert object to primitive value");
			}
			return void 0 === l && (l = 'number'), r(o, l);
		});
	}
	function we() {
		if (re) return ie;
		re = 1;
		var t = ye(),
			e = Ft();
		return (ie = function (n) {
			var i = t(n, 'string');
			return e(i) ? i : i + '';
		});
	}
	function Se() {
		if (ae) return oe;
		ae = 1;
		var t = b(),
			e = At(),
			n = t.document,
			i = e(n) && e(n.createElement);
		return (oe = function (t) {
			return i ? n.createElement(t) : {};
		});
	}
	function xe() {
		if (le) return se;
		le = 1;
		var t = A(),
			e = C(),
			n = Se();
		return (se =
			!t &&
			!e(function () {
				return (
					7 !==
					Object.defineProperty(n('div'), 'a', {
						get: function () {
							return 7;
						},
					}).a
				);
			}));
	}
	function Oe() {
		if (ce) return P;
		ce = 1;
		var t = A(),
			e = $(),
			n = yt(),
			i = wt(),
			r = Pt(),
			o = we(),
			a = ve(),
			s = xe(),
			l = Object.getOwnPropertyDescriptor;
		return (
			(P.f = t
				? l
				: function (t, c) {
						if (((t = r(t)), (c = o(c)), s))
							try {
								return l(t, c);
							} catch (t) {}
						if (a(t, c)) return i(!e(n.f, t, c), t[c]);
					}),
			P
		);
	}
	var ke,
		Te,
		Pe,
		Ce,
		Ae,
		Ie,
		$e,
		Re = {};
	function Ee() {
		if (Te) return ke;
		Te = 1;
		var t = A(),
			e = C();
		return (ke =
			t &&
			e(function () {
				return (
					42 !==
					Object.defineProperty(function () {}, 'prototype', {
						value: 42,
						writable: !1,
					}).prototype
				);
			}));
	}
	function je() {
		if (Ce) return Pe;
		Ce = 1;
		var t = At(),
			e = String,
			n = TypeError;
		return (Pe = function (i) {
			if (t(i)) return i;
			throw new n(e(i) + ' is not an object');
		});
	}
	function Ne() {
		if (Ae) return Re;
		Ae = 1;
		var t = A(),
			e = xe(),
			n = Ee(),
			i = je(),
			r = we(),
			o = TypeError,
			a = Object.defineProperty,
			s = Object.getOwnPropertyDescriptor,
			l = 'enumerable',
			c = 'configurable',
			u = 'writable';
		return (
			(Re.f = t
				? n
					? function (t, e, n) {
							if (
								(i(t),
								(e = r(e)),
								i(n),
								'function' == typeof t &&
									'prototype' === e &&
									'value' in n &&
									u in n &&
									!n[u])
							) {
								var o = s(t, e);
								o &&
									o[u] &&
									((t[e] = n.value),
									(n = {
										configurable: c in n ? n[c] : o[c],
										enumerable: l in n ? n[l] : o[l],
										writable: !1,
									}));
							}
							return a(t, e, n);
						}
					: a
				: function (t, n, s) {
						if ((i(t), (n = r(n)), i(s), e))
							try {
								return a(t, n, s);
							} catch (t) {}
						if ('get' in s || 'set' in s)
							throw new o('Accessors not supported');
						return 'value' in s && (t[n] = s.value), t;
					}),
			Re
		);
	}
	function Fe() {
		if ($e) return Ie;
		$e = 1;
		var t = A(),
			e = Ne(),
			n = wt();
		return (Ie = t
			? function (t, i, r) {
					return e.f(t, i, n(1, r));
				}
			: function (t, e, n) {
					return (t[e] = n), t;
				});
	}
	var De,
		Le,
		_e,
		Ve,
		Be,
		He,
		Me,
		Ue,
		ze,
		qe,
		We,
		Ge,
		Ke,
		Je,
		Ye,
		Qe = { exports: {} };
	function Xe() {
		if (Le) return De;
		Le = 1;
		var t = A(),
			e = ve(),
			n = Function.prototype,
			i = t && Object.getOwnPropertyDescriptor,
			r = e(n, 'name'),
			o = r && 'something' === function () {}.name,
			a = r && (!t || (t && i(n, 'name').configurable));
		return (De = { EXISTS: r, PROPER: o, CONFIGURABLE: a });
	}
	function Ze() {
		if (Ve) return _e;
		Ve = 1;
		var t = St(),
			e = Ct(),
			n = de(),
			i = t(Function.toString);
		return (
			e(n.inspectSource) ||
				(n.inspectSource = function (t) {
					return i(t);
				}),
			(_e = n.inspectSource)
		);
	}
	function tn() {
		if (Ue) return Me;
		Ue = 1;
		var t = pe(),
			e = be(),
			n = t('keys');
		return (Me = function (t) {
			return n[t] || (n[t] = e(t));
		});
	}
	function en() {
		return qe ? ze : ((qe = 1), (ze = {}));
	}
	function nn() {
		if (Ge) return We;
		Ge = 1;
		var t,
			e,
			n,
			i = (function () {
				if (He) return Be;
				He = 1;
				var t = b(),
					e = Ct(),
					n = t.WeakMap;
				return (Be = e(n) && /native code/.test(String(n)));
			})(),
			r = b(),
			o = At(),
			a = Fe(),
			s = ve(),
			l = de(),
			c = tn(),
			u = en(),
			h = 'Object already initialized',
			f = r.TypeError,
			d = r.WeakMap;
		if (i || l.state) {
			var p = l.state || (l.state = new d());
			(p.get = p.get),
				(p.has = p.has),
				(p.set = p.set),
				(t = function (t, e) {
					if (p.has(t)) throw new f(h);
					return (e.facade = t), p.set(t, e), e;
				}),
				(e = function (t) {
					return p.get(t) || {};
				}),
				(n = function (t) {
					return p.has(t);
				});
		} else {
			var g = c('state');
			(u[g] = !0),
				(t = function (t, e) {
					if (s(t, g)) throw new f(h);
					return (e.facade = t), a(t, g, e), e;
				}),
				(e = function (t) {
					return s(t, g) ? t[g] : {};
				}),
				(n = function (t) {
					return s(t, g);
				});
		}
		return (We = {
			set: t,
			get: e,
			has: n,
			enforce: function (i) {
				return n(i) ? e(i) : t(i, {});
			},
			getterFor: function (t) {
				return function (n) {
					var i;
					if (!o(n) || (i = e(n)).type !== t)
						throw new f('Incompatible receiver, ' + t + ' required');
					return i;
				};
			},
		});
	}
	function rn() {
		if (Ke) return Qe.exports;
		Ke = 1;
		var t = St(),
			e = C(),
			n = Ct(),
			i = ve(),
			r = A(),
			o = Xe().CONFIGURABLE,
			a = Ze(),
			s = nn(),
			l = s.enforce,
			c = s.get,
			u = String,
			h = Object.defineProperty,
			f = t(''.slice),
			d = t(''.replace),
			p = t([].join),
			g =
				r &&
				!e(function () {
					return 8 !== h(function () {}, 'length', { value: 8 }).length;
				}),
			v = String(String).split('String'),
			b = (Qe.exports = function (t, e, n) {
				'Symbol(' === f(u(e), 0, 7) &&
					(e = '[' + d(u(e), /^Symbol\(([^)]*)\).*$/, '$1') + ']'),
					n && n.getter && (e = 'get ' + e),
					n && n.setter && (e = 'set ' + e),
					(!i(t, 'name') || (o && t.name !== e)) &&
						(r ? h(t, 'name', { value: e, configurable: !0 }) : (t.name = e)),
					g &&
						n &&
						i(n, 'arity') &&
						t.length !== n.arity &&
						h(t, 'length', { value: n.arity });
				try {
					n && i(n, 'constructor') && n.constructor
						? r && h(t, 'prototype', { writable: !1 })
						: t.prototype && (t.prototype = void 0);
				} catch (t) {}
				var a = l(t);
				return (
					i(a, 'source') || (a.source = p(v, 'string' == typeof e ? e : '')), t
				);
			});
		return (
			(Function.prototype.toString = b(function () {
				return (n(this) && c(this).source) || a(this);
			}, 'toString')),
			Qe.exports
		);
	}
	function on() {
		if (Ye) return Je;
		Ye = 1;
		var t = Ct(),
			e = Ne(),
			n = rn(),
			i = fe();
		return (Je = function (r, o, a, s) {
			s || (s = {});
			var l = s.enumerable,
				c = void 0 !== s.name ? s.name : o;
			if ((t(a) && n(a, c, s), s.global)) l ? (r[o] = a) : i(o, a);
			else {
				try {
					s.unsafe ? r[o] && (l = !0) : delete r[o];
				} catch (t) {}
				l
					? (r[o] = a)
					: e.f(r, o, {
							value: a,
							enumerable: !1,
							configurable: !s.nonConfigurable,
							writable: !s.nonWritable,
						});
			}
			return r;
		});
	}
	var an,
		sn,
		ln,
		cn,
		un,
		hn,
		fn,
		dn,
		pn,
		gn,
		vn,
		bn,
		mn,
		yn,
		wn,
		Sn,
		xn,
		On = {};
	function kn() {
		if (cn) return ln;
		cn = 1;
		var t = (function () {
			if (sn) return an;
			sn = 1;
			var t = Math.ceil,
				e = Math.floor;
			return (an =
				Math.trunc ||
				function (n) {
					var i = +n;
					return (i > 0 ? e : t)(i);
				});
		})();
		return (ln = function (e) {
			var n = +e;
			return n != n || 0 === n ? 0 : t(n);
		});
	}
	function Tn() {
		if (hn) return un;
		hn = 1;
		var t = kn(),
			e = Math.max,
			n = Math.min;
		return (un = function (i, r) {
			var o = t(i);
			return o < 0 ? e(o + r, 0) : n(o, r);
		});
	}
	function Pn() {
		if (dn) return fn;
		dn = 1;
		var t = kn(),
			e = Math.min;
		return (fn = function (n) {
			var i = t(n);
			return i > 0 ? e(i, 9007199254740991) : 0;
		});
	}
	function Cn() {
		if (gn) return pn;
		gn = 1;
		var t = Pn();
		return (pn = function (e) {
			return t(e.length);
		});
	}
	function An() {
		if (bn) return vn;
		bn = 1;
		var t = Pt(),
			e = Tn(),
			n = Cn(),
			i = function (i) {
				return function (r, o, a) {
					var s = t(r),
						l = n(s);
					if (0 === l) return !i && -1;
					var c,
						u = e(a, l);
					if (i && o != o) {
						for (; l > u; ) if ((c = s[u++]) != c) return !0;
					} else
						for (; l > u; u++)
							if ((i || u in s) && s[u] === o) return i || u || 0;
					return !i && -1;
				};
			};
		return (vn = { includes: i(!0), indexOf: i(!1) });
	}
	function In() {
		if (yn) return mn;
		yn = 1;
		var t = St(),
			e = ve(),
			n = Pt(),
			i = An().indexOf,
			r = en(),
			o = t([].push);
		return (mn = function (t, a) {
			var s,
				l = n(t),
				c = 0,
				u = [];
			for (s in l) !e(r, s) && e(l, s) && o(u, s);
			for (; a.length > c; ) e(l, (s = a[c++])) && (~i(u, s) || o(u, s));
			return u;
		});
	}
	function $n() {
		return Sn
			? wn
			: ((Sn = 1),
				(wn = [
					'constructor',
					'hasOwnProperty',
					'isPrototypeOf',
					'propertyIsEnumerable',
					'toLocaleString',
					'toString',
					'valueOf',
				]));
	}
	function Rn() {
		if (xn) return On;
		xn = 1;
		var t = In(),
			e = $n().concat('length', 'prototype');
		return (
			(On.f =
				Object.getOwnPropertyNames ||
				function (n) {
					return t(n, e);
				}),
			On
		);
	}
	var En,
		jn,
		Nn,
		Fn,
		Dn,
		Ln,
		_n,
		Vn,
		Bn,
		Hn,
		Mn,
		Un,
		zn,
		qn,
		Wn,
		Gn,
		Kn,
		Jn,
		Yn,
		Qn,
		Xn,
		Zn,
		ti,
		ei,
		ni,
		ii,
		ri,
		oi,
		ai = {};
	function si() {
		return En || ((En = 1), (ai.f = Object.getOwnPropertySymbols)), ai;
	}
	function li() {
		if (Nn) return jn;
		Nn = 1;
		var t = It(),
			e = St(),
			n = Rn(),
			i = si(),
			r = je(),
			o = e([].concat);
		return (jn =
			t('Reflect', 'ownKeys') ||
			function (t) {
				var e = n.f(r(t)),
					a = i.f;
				return a ? o(e, a(t)) : e;
			});
	}
	function ci() {
		if (Dn) return Fn;
		Dn = 1;
		var t = ve(),
			e = li(),
			n = Oe(),
			i = Ne();
		return (Fn = function (r, o, a) {
			for (var s = e(o), l = i.f, c = n.f, u = 0; u < s.length; u++) {
				var h = s[u];
				t(r, h) || (a && t(a, h)) || l(r, h, c(o, h));
			}
		});
	}
	function ui() {
		if (_n) return Ln;
		_n = 1;
		var t = C(),
			e = Ct(),
			n = /#|\.prototype\./,
			i = function (n, i) {
				var l = o[r(n)];
				return l === s || (l !== a && (e(i) ? t(i) : !!i));
			},
			r = (i.normalize = function (t) {
				return String(t).replace(n, '.').toLowerCase();
			}),
			o = (i.data = {}),
			a = (i.NATIVE = 'N'),
			s = (i.POLYFILL = 'P');
		return (Ln = i);
	}
	function hi() {
		if (Bn) return Vn;
		Bn = 1;
		var t = b(),
			e = Oe().f,
			n = Fe(),
			i = on(),
			r = fe(),
			o = ci(),
			a = ui();
		return (Vn = function (s, l) {
			var c,
				u,
				h,
				f,
				d,
				p = s.target,
				g = s.global,
				v = s.stat;
			if ((c = g ? t : v ? t[p] || r(p, {}) : t[p] && t[p].prototype))
				for (u in l) {
					if (
						((f = l[u]),
						(h = s.dontCallGetSet ? (d = e(c, u)) && d.value : c[u]),
						!a(g ? u : p + (v ? '.' : '#') + u, s.forced) && void 0 !== h)
					) {
						if (typeof f == typeof h) continue;
						o(f, h);
					}
					(s.sham || (h && h.sham)) && n(f, 'sham', !0), i(c, u, f, s);
				}
		});
	}
	function fi() {
		if (Mn) return Hn;
		Mn = 1;
		var t = xt();
		return (Hn =
			Array.isArray ||
			function (e) {
				return 'Array' === t(e);
			});
	}
	function di() {
		if (zn) return Un;
		zn = 1;
		var t = TypeError;
		return (Un = function (e) {
			if (e > 9007199254740991) throw t('Maximum allowed index exceeded');
			return e;
		});
	}
	function pi() {
		if (Wn) return qn;
		Wn = 1;
		var t = A(),
			e = Ne(),
			n = wt();
		return (qn = function (i, r, o) {
			t ? e.f(i, r, n(0, o)) : (i[r] = o);
		});
	}
	function gi() {
		if (Kn) return Gn;
		Kn = 1;
		var t = {};
		return (t[me()('toStringTag')] = 'z'), (Gn = '[object z]' === String(t));
	}
	function vi() {
		if (Yn) return Jn;
		Yn = 1;
		var t = gi(),
			e = Ct(),
			n = xt(),
			i = me()('toStringTag'),
			r = Object,
			o =
				'Arguments' ===
				n(
					(function () {
						return arguments;
					})()
				);
		return (Jn = t
			? n
			: function (t) {
					var a, s, l;
					return void 0 === t
						? 'Undefined'
						: null === t
							? 'Null'
							: 'string' ==
								  typeof (s = (function (t, e) {
										try {
											return t[e];
										} catch (t) {}
								  })((a = r(t)), i))
								? s
								: o
									? n(a)
									: 'Object' === (l = n(a)) && e(a.callee)
										? 'Arguments'
										: l;
				});
	}
	function bi() {
		if (Xn) return Qn;
		Xn = 1;
		var t = St(),
			e = C(),
			n = Ct(),
			i = vi(),
			r = It(),
			o = Ze(),
			a = function () {},
			s = r('Reflect', 'construct'),
			l = /^\s*(?:class|function)\b/,
			c = t(l.exec),
			u = !l.test(a),
			h = function (t) {
				if (!n(t)) return !1;
				try {
					return s(a, [], t), !0;
				} catch (t) {
					return !1;
				}
			},
			f = function (t) {
				if (!n(t)) return !1;
				switch (i(t)) {
					case 'AsyncFunction':
					case 'GeneratorFunction':
					case 'AsyncGeneratorFunction':
						return !1;
				}
				try {
					return u || !!c(l, o(t));
				} catch (t) {
					return !0;
				}
			};
		return (
			(f.sham = !0),
			(Qn =
				!s ||
				e(function () {
					var t;
					return (
						h(h.call) ||
						!h(Object) ||
						!h(function () {
							t = !0;
						}) ||
						t
					);
				})
					? f
					: h)
		);
	}
	function mi() {
		if (ti) return Zn;
		ti = 1;
		var t = fi(),
			e = bi(),
			n = At(),
			i = me()('species'),
			r = Array;
		return (Zn = function (o) {
			var a;
			return (
				t(o) &&
					((a = o.constructor),
					((e(a) && (a === r || t(a.prototype))) ||
						(n(a) && null === (a = a[i]))) &&
						(a = void 0)),
				void 0 === a ? r : a
			);
		});
	}
	function yi() {
		if (ni) return ei;
		ni = 1;
		var t = mi();
		return (ei = function (e, n) {
			return new (t(e))(0 === n ? 0 : n);
		});
	}
	function wi() {
		if (ri) return ii;
		ri = 1;
		var t = C(),
			e = me(),
			n = Et(),
			i = e('species');
		return (ii = function (e) {
			return (
				n >= 51 ||
				!t(function () {
					var t = [];
					return (
						((t.constructor = {})[i] = function () {
							return { foo: 1 };
						}),
						1 !== t[e](Boolean).foo
					);
				})
			);
		});
	}
	!(function () {
		if (oi) return v;
		oi = 1;
		var t = hi(),
			e = C(),
			n = fi(),
			i = At(),
			r = ge(),
			o = Cn(),
			a = di(),
			s = pi(),
			l = yi(),
			c = wi(),
			u = me(),
			h = Et(),
			f = u('isConcatSpreadable'),
			d =
				h >= 51 ||
				!e(function () {
					var t = [];
					return (t[f] = !1), t.concat()[0] !== t;
				}),
			p = function (t) {
				if (!i(t)) return !1;
				var e = t[f];
				return void 0 !== e ? !!e : n(t);
			};
		t(
			{ target: 'Array', proto: !0, arity: 1, forced: !d || !c('concat') },
			{
				concat: function (t) {
					var e,
						n,
						i,
						c,
						u,
						h = r(this),
						f = l(h, 0),
						d = 0;
					for (e = -1, i = arguments.length; e < i; e++)
						if (p((u = -1 === e ? h : arguments[e])))
							for (c = o(u), a(d + c), n = 0; n < c; n++, d++)
								n in u && s(f, d, u[n]);
						else a(d + 1), s(f, d++, u);
					return (f.length = d), f;
				},
			}
		);
	})();
	var Si,
		xi,
		Oi,
		ki,
		Ti,
		Pi,
		Ci,
		Ai = {};
	function Ii() {
		if (xi) return Si;
		xi = 1;
		var t = xt(),
			e = St();
		return (Si = function (n) {
			if ('Function' === t(n)) return e(n);
		});
	}
	function $i() {
		if (ki) return Oi;
		ki = 1;
		var t = Ii(),
			e = Lt(),
			n = I(),
			i = t(t.bind);
		return (
			(Oi = function (t, r) {
				return (
					e(t),
					void 0 === r
						? t
						: n
							? i(t, r)
							: function () {
									return t.apply(r, arguments);
								}
				);
			}),
			Oi
		);
	}
	function Ri() {
		if (Pi) return Ti;
		Pi = 1;
		var t = $i(),
			e = St(),
			n = Ot(),
			i = ge(),
			r = Cn(),
			o = yi(),
			a = e([].push),
			s = function (e) {
				var s = 1 === e,
					l = 2 === e,
					c = 3 === e,
					u = 4 === e,
					h = 6 === e,
					f = 7 === e,
					d = 5 === e || h;
				return function (p, g, v, b) {
					for (
						var m,
							y,
							w = i(p),
							S = n(w),
							x = r(S),
							O = t(g, v),
							k = 0,
							T = b || o,
							P = s ? T(p, x) : l || f ? T(p, 0) : void 0;
						x > k;
						k++
					)
						if ((d || k in S) && ((y = O((m = S[k]), k, w)), e))
							if (s) P[k] = y;
							else if (y)
								switch (e) {
									case 3:
										return !0;
									case 5:
										return m;
									case 6:
										return k;
									case 2:
										a(P, m);
								}
							else
								switch (e) {
									case 4:
										return !1;
									case 7:
										a(P, m);
								}
					return h ? -1 : c || u ? u : P;
				};
			};
		return (Ti = {
			forEach: s(0),
			map: s(1),
			filter: s(2),
			some: s(3),
			every: s(4),
			find: s(5),
			findIndex: s(6),
			filterReject: s(7),
		});
	}
	!(function () {
		if (Ci) return Ai;
		Ci = 1;
		var t = hi(),
			e = Ri().filter;
		t(
			{ target: 'Array', proto: !0, forced: !wi()('filter') },
			{
				filter: function (t) {
					return e(this, t, arguments.length > 1 ? arguments[1] : void 0);
				},
			}
		);
	})();
	var Ei,
		ji,
		Ni,
		Fi,
		Di,
		Li,
		_i,
		Vi,
		Bi,
		Hi,
		Mi = {},
		Ui = {};
	function zi() {
		if (ji) return Ei;
		ji = 1;
		var t = In(),
			e = $n();
		return (Ei =
			Object.keys ||
			function (n) {
				return t(n, e);
			});
	}
	function qi() {
		if (Di) return Fi;
		Di = 1;
		var t = It();
		return (Fi = t('document', 'documentElement'));
	}
	function Wi() {
		if (_i) return Li;
		_i = 1;
		var t,
			e = je(),
			n = (function () {
				if (Ni) return Ui;
				Ni = 1;
				var t = A(),
					e = Ee(),
					n = Ne(),
					i = je(),
					r = Pt(),
					o = zi();
				return (
					(Ui.f =
						t && !e
							? Object.defineProperties
							: function (t, e) {
									i(t);
									for (var a, s = r(e), l = o(e), c = l.length, u = 0; c > u; )
										n.f(t, (a = l[u++]), s[a]);
									return t;
								}),
					Ui
				);
			})(),
			i = $n(),
			r = en(),
			o = qi(),
			a = Se(),
			s = tn(),
			l = 'prototype',
			c = 'script',
			u = s('IE_PROTO'),
			h = function () {},
			f = function (t) {
				return '<' + c + '>' + t + '</' + c + '>';
			},
			d = function (t) {
				t.write(f('')), t.close();
				var e = t.parentWindow.Object;
				return (t = null), e;
			},
			p = function () {
				try {
					t = new ActiveXObject('htmlfile');
				} catch (t) {}
				var e, n, r;
				p =
					'undefined' != typeof document
						? document.domain && t
							? d(t)
							: ((n = a('iframe')),
								(r = 'java' + c + ':'),
								(n.style.display = 'none'),
								o.appendChild(n),
								(n.src = String(r)),
								(e = n.contentWindow.document).open(),
								e.write(f('document.F=Object')),
								e.close(),
								e.F)
						: d(t);
				for (var s = i.length; s--; ) delete p[l][i[s]];
				return p();
			};
		return (
			(r[u] = !0),
			(Li =
				Object.create ||
				function (t, i) {
					var r;
					return (
						null !== t
							? ((h[l] = e(t)), (r = new h()), (h[l] = null), (r[u] = t))
							: (r = p()),
						void 0 === i ? r : n.f(r, i)
					);
				})
		);
	}
	function Gi() {
		if (Bi) return Vi;
		Bi = 1;
		var t = me(),
			e = Wi(),
			n = Ne().f,
			i = t('unscopables'),
			r = Array.prototype;
		return (
			void 0 === r[i] && n(r, i, { configurable: !0, value: e(null) }),
			(Vi = function (t) {
				r[i][t] = !0;
			})
		);
	}
	!(function () {
		if (Hi) return Mi;
		Hi = 1;
		var t = hi(),
			e = Ri().find,
			n = Gi(),
			i = 'find',
			r = !0;
		i in [] &&
			Array(1)[i](function () {
				r = !1;
			}),
			t(
				{ target: 'Array', proto: !0, forced: r },
				{
					find: function (t) {
						return e(this, t, arguments.length > 1 ? arguments[1] : void 0);
					},
				}
			),
			n(i);
	})();
	var Ki,
		Ji = {};
	!(function () {
		if (Ki) return Ji;
		Ki = 1;
		var t = hi(),
			e = Ri().findIndex,
			n = Gi(),
			i = 'findIndex',
			r = !0;
		i in [] &&
			Array(1)[i](function () {
				r = !1;
			}),
			t(
				{ target: 'Array', proto: !0, forced: r },
				{
					findIndex: function (t) {
						return e(this, t, arguments.length > 1 ? arguments[1] : void 0);
					},
				}
			),
			n(i);
	})();
	var Yi,
		Qi = {};
	!(function () {
		if (Yi) return Qi;
		Yi = 1;
		var t = hi(),
			e = An().includes,
			n = C(),
			i = Gi();
		t(
			{
				target: 'Array',
				proto: !0,
				forced: n(function () {
					return !Array(1).includes();
				}),
			},
			{
				includes: function (t) {
					return e(this, t, arguments.length > 1 ? arguments[1] : void 0);
				},
			}
		),
			i('includes');
	})();
	var Xi,
		Zi,
		tr,
		er,
		nr,
		ir,
		rr,
		or,
		ar,
		sr,
		lr,
		cr,
		ur,
		hr,
		fr,
		dr,
		pr,
		gr,
		vr,
		br,
		mr,
		yr,
		wr,
		Sr,
		xr,
		Or,
		kr,
		Tr,
		Pr,
		Cr = {};
	function Ar() {
		if (Zi) return Xi;
		Zi = 1;
		var t = C();
		return (Xi = function (e, n) {
			var i = [][e];
			return (
				!!i &&
				t(function () {
					i.call(
						null,
						n ||
							function () {
								return 1;
							},
						1
					);
				})
			);
		});
	}
	function Ir() {
		return nr ? er : ((nr = 1), (er = {}));
	}
	function $r() {
		if (rr) return ir;
		rr = 1;
		var t = C();
		return (ir = !t(function () {
			function t() {}
			return (
				(t.prototype.constructor = null),
				Object.getPrototypeOf(new t()) !== t.prototype
			);
		}));
	}
	function Rr() {
		if (ar) return or;
		ar = 1;
		var t = ve(),
			e = Ct(),
			n = ge(),
			i = tn(),
			r = $r(),
			o = i('IE_PROTO'),
			a = Object,
			s = a.prototype;
		return (or = r
			? a.getPrototypeOf
			: function (i) {
					var r = n(i);
					if (t(r, o)) return r[o];
					var l = r.constructor;
					return e(l) && r instanceof l
						? l.prototype
						: r instanceof a
							? s
							: null;
				});
	}
	function Er() {
		if (lr) return sr;
		lr = 1;
		var t,
			e,
			n,
			i = C(),
			r = Ct(),
			o = At(),
			a = Wi(),
			s = Rr(),
			l = on(),
			c = me(),
			u = he(),
			h = c('iterator'),
			f = !1;
		return (
			[].keys &&
				('next' in (n = [].keys())
					? (e = s(s(n))) !== Object.prototype && (t = e)
					: (f = !0)),
			!o(t) ||
			i(function () {
				var e = {};
				return t[h].call(e) !== e;
			})
				? (t = {})
				: u && (t = a(t)),
			r(t[h]) ||
				l(t, h, function () {
					return this;
				}),
			(sr = { IteratorPrototype: t, BUGGY_SAFARI_ITERATORS: f })
		);
	}
	function jr() {
		if (ur) return cr;
		ur = 1;
		var t = Ne().f,
			e = ve(),
			n = me()('toStringTag');
		return (cr = function (i, r, o) {
			i && !o && (i = i.prototype),
				i && !e(i, n) && t(i, n, { configurable: !0, value: r });
		});
	}
	function Nr() {
		if (fr) return hr;
		fr = 1;
		var t = Er().IteratorPrototype,
			e = Wi(),
			n = wt(),
			i = jr(),
			r = Ir(),
			o = function () {
				return this;
			};
		return (hr = function (a, s, l, c) {
			var u = s + ' Iterator';
			return (
				(a.prototype = e(t, { next: n(+!c, l) })),
				i(a, u, !1, !0),
				(r[u] = o),
				a
			);
		});
	}
	function Fr() {
		if (vr) return gr;
		vr = 1;
		var t = At();
		return (gr = function (e) {
			return t(e) || null === e;
		});
	}
	function Dr() {
		if (mr) return br;
		mr = 1;
		var t = Fr(),
			e = String,
			n = TypeError;
		return (br = function (i) {
			if (t(i)) return i;
			throw new n("Can't set " + e(i) + ' as a prototype');
		});
	}
	function Lr() {
		if (wr) return yr;
		wr = 1;
		var t = (function () {
				if (pr) return dr;
				pr = 1;
				var t = St(),
					e = Lt();
				return (dr = function (n, i, r) {
					try {
						return t(e(Object.getOwnPropertyDescriptor(n, i)[r]));
					} catch (t) {}
				});
			})(),
			e = At(),
			n = Tt(),
			i = Dr();
		return (yr =
			Object.setPrototypeOf ||
			('__proto__' in {}
				? (function () {
						var r,
							o = !1,
							a = {};
						try {
							(r = t(Object.prototype, '__proto__', 'set'))(a, []),
								(o = a instanceof Array);
						} catch (t) {}
						return function (t, a) {
							return (
								n(t), i(a), e(t) ? (o ? r(t, a) : (t.__proto__ = a), t) : t
							);
						};
					})()
				: void 0));
	}
	function _r() {
		if (xr) return Sr;
		xr = 1;
		var t = hi(),
			e = $(),
			n = he(),
			i = Xe(),
			r = Ct(),
			o = Nr(),
			a = Rr(),
			s = Lr(),
			l = jr(),
			c = Fe(),
			u = on(),
			h = me(),
			f = Ir(),
			d = Er(),
			p = i.PROPER,
			g = i.CONFIGURABLE,
			v = d.IteratorPrototype,
			b = d.BUGGY_SAFARI_ITERATORS,
			m = h('iterator'),
			y = 'keys',
			w = 'values',
			S = 'entries',
			x = function () {
				return this;
			};
		return (Sr = function (i, h, d, O, k, T, P) {
			o(d, h, O);
			var C,
				A,
				I,
				$ = function (t) {
					if (t === k && F) return F;
					if (!b && t && t in j) return j[t];
					switch (t) {
						case y:
						case w:
						case S:
							return function () {
								return new d(this, t);
							};
					}
					return function () {
						return new d(this);
					};
				},
				R = h + ' Iterator',
				E = !1,
				j = i.prototype,
				N = j[m] || j['@@iterator'] || (k && j[k]),
				F = (!b && N) || $(k),
				D = ('Array' === h && j.entries) || N;
			if (
				(D &&
					(C = a(D.call(new i()))) !== Object.prototype &&
					C.next &&
					(n || a(C) === v || (s ? s(C, v) : r(C[m]) || u(C, m, x)),
					l(C, R, !0, !0),
					n && (f[R] = x)),
				p &&
					k === w &&
					N &&
					N.name !== w &&
					(!n && g
						? c(j, 'name', w)
						: ((E = !0),
							(F = function () {
								return e(N, this);
							}))),
				k)
			)
				if (((A = { values: $(w), keys: T ? F : $(y), entries: $(S) }), P))
					for (I in A) (b || E || !(I in j)) && u(j, I, A[I]);
				else t({ target: h, proto: !0, forced: b || E }, A);
			return (n && !P) || j[m] === F || u(j, m, F, { name: k }), (f[h] = F), A;
		});
	}
	function Vr() {
		return kr
			? Or
			: ((kr = 1),
				(Or = function (t, e) {
					return { value: t, done: e };
				}));
	}
	function Br() {
		if (Pr) return Tr;
		Pr = 1;
		var t = Pt(),
			e = Gi(),
			n = Ir(),
			i = nn(),
			r = Ne().f,
			o = _r(),
			a = Vr(),
			s = he(),
			l = A(),
			c = 'Array Iterator',
			u = i.set,
			h = i.getterFor(c);
		Tr = o(
			Array,
			'Array',
			function (e, n) {
				u(this, { type: c, target: t(e), index: 0, kind: n });
			},
			function () {
				var t = h(this),
					e = t.target,
					n = t.index++;
				if (!e || n >= e.length) return (t.target = null), a(void 0, !0);
				switch (t.kind) {
					case 'keys':
						return a(n, !1);
					case 'values':
						return a(e[n], !1);
				}
				return a([n, e[n]], !1);
			},
			'values'
		);
		var f = (n.Arguments = n.Array);
		if ((e('keys'), e('values'), e('entries'), !s && l && 'values' !== f.name))
			try {
				r(f, 'name', { value: 'values' });
			} catch (t) {}
		return Tr;
	}
	!(function () {
		if (tr) return Cr;
		tr = 1;
		var t = hi(),
			e = Ii(),
			n = An().indexOf,
			i = Ar(),
			r = e([].indexOf),
			o = !!r && 1 / r([1], 1, -0) < 0;
		t(
			{ target: 'Array', proto: !0, forced: o || !i('indexOf') },
			{
				indexOf: function (t) {
					var e = arguments.length > 1 ? arguments[1] : void 0;
					return o ? r(this, t, e) || 0 : n(this, t, e);
				},
			}
		);
	})(),
		Br();
	var Hr,
		Mr = {};
	!(function () {
		if (Hr) return Mr;
		Hr = 1;
		var t = hi(),
			e = St(),
			n = Ot(),
			i = Pt(),
			r = Ar(),
			o = e([].join);
		t(
			{ target: 'Array', proto: !0, forced: n !== Object || !r('join', ',') },
			{
				join: function (t) {
					return o(i(this), void 0 === t ? ',' : t);
				},
			}
		);
	})();
	var Ur,
		zr = {};
	!(function () {
		if (Ur) return zr;
		Ur = 1;
		var t = hi(),
			e = Ri().map;
		t(
			{ target: 'Array', proto: !0, forced: !wi()('map') },
			{
				map: function (t) {
					return e(this, t, arguments.length > 1 ? arguments[1] : void 0);
				},
			}
		);
	})();
	var qr,
		Wr = {};
	!(function () {
		if (qr) return Wr;
		qr = 1;
		var t = hi(),
			e = St(),
			n = fi(),
			i = e([].reverse),
			r = [1, 2];
		t(
			{ target: 'Array', proto: !0, forced: String(r) === String(r.reverse()) },
			{
				reverse: function () {
					return n(this) && (this.length = this.length), i(this);
				},
			}
		);
	})();
	var Gr,
		Kr,
		Jr,
		Yr = {};
	function Qr() {
		if (Kr) return Gr;
		Kr = 1;
		var t = St();
		return (Gr = t([].slice));
	}
	!(function () {
		if (Jr) return Yr;
		Jr = 1;
		var t = hi(),
			e = fi(),
			n = bi(),
			i = At(),
			r = Tn(),
			o = Cn(),
			a = Pt(),
			s = pi(),
			l = me(),
			c = wi(),
			u = Qr(),
			h = c('slice'),
			f = l('species'),
			d = Array,
			p = Math.max;
		t(
			{ target: 'Array', proto: !0, forced: !h },
			{
				slice: function (t, l) {
					var c,
						h,
						g,
						v = a(this),
						b = o(v),
						m = r(t, b),
						y = r(void 0 === l ? b : l, b);
					if (
						e(v) &&
						((c = v.constructor),
						((n(c) && (c === d || e(c.prototype))) ||
							(i(c) && null === (c = c[f]))) &&
							(c = void 0),
						c === d || void 0 === c)
					)
						return u(v, m, y);
					for (
						h = new (void 0 === c ? d : c)(p(y - m, 0)), g = 0;
						m < y;
						m++, g++
					)
						m in v && s(h, g, v[m]);
					return (h.length = g), h;
				},
			}
		);
	})();
	var Xr,
		Zr,
		to,
		eo,
		no,
		io,
		ro,
		oo,
		ao,
		so,
		lo,
		co,
		uo,
		ho = {};
	function fo() {
		if (Zr) return Xr;
		Zr = 1;
		var t = Dt(),
			e = TypeError;
		return (Xr = function (n, i) {
			if (!delete n[i])
				throw new e('Cannot delete property ' + t(i) + ' of ' + t(n));
		});
	}
	function po() {
		if (eo) return to;
		eo = 1;
		var t = vi(),
			e = String;
		return (to = function (n) {
			if ('Symbol' === t(n))
				throw new TypeError('Cannot convert a Symbol value to a string');
			return e(n);
		});
	}
	function go() {
		if (io) return no;
		io = 1;
		var t = Qr(),
			e = Math.floor,
			n = function (i, r) {
				var o = i.length;
				if (o < 8)
					for (var a, s, l = 1; l < o; ) {
						for (s = l, a = i[l]; s && r(i[s - 1], a) > 0; ) i[s] = i[--s];
						s !== l++ && (i[s] = a);
					}
				else
					for (
						var c = e(o / 2),
							u = n(t(i, 0, c), r),
							h = n(t(i, c), r),
							f = u.length,
							d = h.length,
							p = 0,
							g = 0;
						p < f || g < d;

					)
						i[p + g] =
							p < f && g < d
								? r(u[p], h[g]) <= 0
									? u[p++]
									: h[g++]
								: p < f
									? u[p++]
									: h[g++];
				return i;
			};
		return (no = n);
	}
	!(function () {
		if (uo) return ho;
		uo = 1;
		var t = hi(),
			e = St(),
			n = Lt(),
			i = ge(),
			r = Cn(),
			o = fo(),
			a = po(),
			s = C(),
			l = go(),
			c = Ar(),
			u = (function () {
				if (oo) return ro;
				oo = 1;
				var t = Rt().match(/firefox\/(\d+)/i);
				return (ro = !!t && +t[1]);
			})(),
			h = (function () {
				if (so) return ao;
				so = 1;
				var t = Rt();
				return (ao = /MSIE|Trident/.test(t));
			})(),
			f = Et(),
			d = (function () {
				if (co) return lo;
				co = 1;
				var t = Rt().match(/AppleWebKit\/(\d+)\./);
				return (lo = !!t && +t[1]);
			})(),
			p = [],
			g = e(p.sort),
			v = e(p.push),
			b = s(function () {
				p.sort(void 0);
			}),
			m = s(function () {
				p.sort(null);
			}),
			y = c('sort'),
			w = !s(function () {
				if (f) return f < 70;
				if (!(u && u > 3)) {
					if (h) return !0;
					if (d) return d < 603;
					var t,
						e,
						n,
						i,
						r = '';
					for (t = 65; t < 76; t++) {
						switch (((e = String.fromCharCode(t)), t)) {
							case 66:
							case 69:
							case 70:
							case 72:
								n = 3;
								break;
							case 68:
							case 71:
								n = 4;
								break;
							default:
								n = 2;
						}
						for (i = 0; i < 47; i++) p.push({ k: e + i, v: n });
					}
					for (
						p.sort(function (t, e) {
							return e.v - t.v;
						}),
							i = 0;
						i < p.length;
						i++
					)
						(e = p[i].k.charAt(0)), r.charAt(r.length - 1) !== e && (r += e);
					return 'DGBEFHACIJK' !== r;
				}
			});
		t(
			{ target: 'Array', proto: !0, forced: b || !m || !y || !w },
			{
				sort: function (t) {
					void 0 !== t && n(t);
					var e = i(this);
					if (w) return void 0 === t ? g(e) : g(e, t);
					var s,
						c,
						u = [],
						h = r(e);
					for (c = 0; c < h; c++) c in e && v(u, e[c]);
					for (
						l(
							u,
							(function (t) {
								return function (e, n) {
									return void 0 === n
										? -1
										: void 0 === e
											? 1
											: void 0 !== t
												? +t(e, n) || 0
												: a(e) > a(n)
													? 1
													: -1;
								};
							})(t)
						),
							s = r(u),
							c = 0;
						c < s;

					)
						e[c] = u[c++];
					for (; c < h; ) o(e, c++);
					return e;
				},
			}
		);
	})();
	var vo,
		bo,
		mo,
		yo = {};
	!(function () {
		if (mo) return yo;
		mo = 1;
		var t = hi(),
			e = ge(),
			n = Tn(),
			i = kn(),
			r = Cn(),
			o = (function () {
				if (bo) return vo;
				bo = 1;
				var t = A(),
					e = fi(),
					n = TypeError,
					i = Object.getOwnPropertyDescriptor,
					r =
						t &&
						!(function () {
							if (void 0 !== this) return !0;
							try {
								Object.defineProperty([], 'length', { writable: !1 }).length =
									1;
							} catch (t) {
								return t instanceof TypeError;
							}
						})();
				return (vo = r
					? function (t, r) {
							if (e(t) && !i(t, 'length').writable)
								throw new n('Cannot set read only .length');
							return (t.length = r);
						}
					: function (t, e) {
							return (t.length = e);
						});
			})(),
			a = di(),
			s = yi(),
			l = pi(),
			c = fo(),
			u = wi()('splice'),
			h = Math.max,
			f = Math.min;
		t(
			{ target: 'Array', proto: !0, forced: !u },
			{
				splice: function (t, u) {
					var d,
						p,
						g,
						v,
						b,
						m,
						y = e(this),
						w = r(y),
						S = n(t, w),
						x = arguments.length;
					for (
						0 === x
							? (d = p = 0)
							: 1 === x
								? ((d = 0), (p = w - S))
								: ((d = x - 2), (p = f(h(i(u), 0), w - S))),
							a(w + d - p),
							g = s(y, p),
							v = 0;
						v < p;
						v++
					)
						(b = S + v) in y && l(g, v, y[b]);
					if (((g.length = p), d < p)) {
						for (v = S; v < w - p; v++)
							(m = v + d), (b = v + p) in y ? (y[m] = y[b]) : c(y, m);
						for (v = w; v > w - p + d; v--) c(y, v - 1);
					} else if (d > p)
						for (v = w - p; v > S; v--)
							(m = v + d - 1), (b = v + p - 1) in y ? (y[m] = y[b]) : c(y, m);
					for (v = 0; v < d; v++) y[v + S] = arguments[v + 2];
					return o(y, w - p + d), g;
				},
			}
		);
	})();
	var wo,
		So = {};
	!(function () {
		if (wo) return So;
		wo = 1;
		var t = hi(),
			e = C(),
			n = ge(),
			i = ye();
		t(
			{
				target: 'Date',
				proto: !0,
				arity: 1,
				forced: e(function () {
					return (
						null !== new Date(NaN).toJSON() ||
						1 !==
							Date.prototype.toJSON.call({
								toISOString: function () {
									return 1;
								},
							})
					);
				}),
			},
			{
				toJSON: function (t) {
					var e = n(this),
						r = i(e, 'number');
					return 'number' != typeof r || isFinite(r) ? e.toISOString() : null;
				},
			}
		);
	})();
	var xo,
		Oo,
		ko,
		To,
		Po,
		Co,
		Ao,
		Io,
		$o,
		Ro,
		Eo,
		jo = {};
	function No() {
		if (Oo) return xo;
		Oo = 1;
		var t = b();
		return (xo = t);
	}
	function Fo() {
		if (To) return ko;
		To = 1;
		var t = Ct(),
			e = At(),
			n = Lr();
		return (ko = function (i, r, o) {
			var a, s;
			return (
				n &&
					t((a = r.constructor)) &&
					a !== o &&
					e((s = a.prototype)) &&
					s !== o.prototype &&
					n(i, s),
				i
			);
		});
	}
	function Do() {
		if (Co) return Po;
		Co = 1;
		var t = St();
		return (Po = t((1).valueOf));
	}
	function Lo() {
		return Io
			? Ao
			: ((Io = 1), (Ao = '\t\n\v\f\r                　\u2028\u2029\ufeff'));
	}
	function _o() {
		if (Ro) return $o;
		Ro = 1;
		var t = St(),
			e = Tt(),
			n = po(),
			i = Lo(),
			r = t(''.replace),
			o = RegExp('^[' + i + ']+'),
			a = RegExp('(^|[^' + i + '])[' + i + ']+$'),
			s = function (t) {
				return function (i) {
					var s = n(e(i));
					return 1 & t && (s = r(s, o, '')), 2 & t && (s = r(s, a, '$1')), s;
				};
			};
		return ($o = { start: s(1), end: s(2), trim: s(3) });
	}
	!(function () {
		if (Eo) return jo;
		Eo = 1;
		var t = hi(),
			e = he(),
			n = A(),
			i = b(),
			r = No(),
			o = St(),
			a = ui(),
			s = ve(),
			l = Fo(),
			c = $t(),
			u = Ft(),
			h = ye(),
			f = C(),
			d = Rn().f,
			p = Oe().f,
			g = Ne().f,
			v = Do(),
			m = _o().trim,
			y = 'Number',
			w = i[y],
			S = r[y],
			x = w.prototype,
			O = i.TypeError,
			k = o(''.slice),
			T = o(''.charCodeAt),
			P = function (t) {
				var e,
					n,
					i,
					r,
					o,
					a,
					s,
					l,
					c = h(t, 'number');
				if (u(c)) throw new O('Cannot convert a Symbol value to a number');
				if ('string' == typeof c && c.length > 2)
					if (((c = m(c)), 43 === (e = T(c, 0)) || 45 === e)) {
						if (88 === (n = T(c, 2)) || 120 === n) return NaN;
					} else if (48 === e) {
						switch (T(c, 1)) {
							case 66:
							case 98:
								(i = 2), (r = 49);
								break;
							case 79:
							case 111:
								(i = 8), (r = 55);
								break;
							default:
								return +c;
						}
						for (a = (o = k(c, 2)).length, s = 0; s < a; s++)
							if ((l = T(o, s)) < 48 || l > r) return NaN;
						return parseInt(o, i);
					}
				return +c;
			},
			I = a(y, !w(' 0o1') || !w('0b1') || w('+0x1')),
			$ = function (t) {
				var e,
					n =
						arguments.length < 1
							? 0
							: w(
									(function (t) {
										var e = h(t, 'number');
										return 'bigint' == typeof e ? e : P(e);
									})(t)
								);
				return c(x, (e = this)) &&
					f(function () {
						v(e);
					})
					? l(Object(n), this, $)
					: n;
			};
		($.prototype = x),
			I && !e && (x.constructor = $),
			t({ global: !0, constructor: !0, wrap: !0, forced: I }, { Number: $ });
		var R = function (t, e) {
			for (
				var i,
					r = n
						? d(e)
						: 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range'.split(
								','
							),
					o = 0;
				r.length > o;
				o++
			)
				s(e, (i = r[o])) && !s(t, i) && g(t, i, p(e, i));
		};
		e && S && R(r[y], S), (I || e) && R(r[y], w);
	})();
	var Vo,
		Bo,
		Ho,
		Mo = {};
	!(function () {
		if (Ho) return Mo;
		Ho = 1;
		var t = hi(),
			e = (function () {
				if (Bo) return Vo;
				Bo = 1;
				var t = A(),
					e = St(),
					n = $(),
					i = C(),
					r = zi(),
					o = si(),
					a = yt(),
					s = ge(),
					l = Ot(),
					c = Object.assign,
					u = Object.defineProperty,
					h = e([].concat);
				return (
					(Vo =
						!c ||
						i(function () {
							if (
								t &&
								1 !==
									c(
										{ b: 1 },
										c(
											u({}, 'a', {
												enumerable: !0,
												get: function () {
													u(this, 'b', { value: 3, enumerable: !1 });
												},
											}),
											{ b: 2 }
										)
									).b
							)
								return !0;
							var e = {},
								n = {},
								i = Symbol('assign detection'),
								o = 'abcdefghijklmnopqrst';
							return (
								(e[i] = 7),
								o.split('').forEach(function (t) {
									n[t] = t;
								}),
								7 !== c({}, e)[i] || r(c({}, n)).join('') !== o
							);
						})
							? function (e, i) {
									for (
										var c = s(e), u = arguments.length, f = 1, d = o.f, p = a.f;
										u > f;

									)
										for (
											var g,
												v = l(arguments[f++]),
												b = d ? h(r(v), d(v)) : r(v),
												m = b.length,
												y = 0;
											m > y;

										)
											(g = b[y++]), (t && !n(p, v, g)) || (c[g] = v[g]);
									return c;
								}
							: c),
					Vo
				);
			})();
		t(
			{ target: 'Object', stat: !0, arity: 2, forced: Object.assign !== e },
			{ assign: e }
		);
	})();
	var Uo,
		zo,
		qo,
		Wo = {};
	!(function () {
		if (qo) return Wo;
		qo = 1;
		var t = hi(),
			e = (function () {
				if (zo) return Uo;
				zo = 1;
				var t = A(),
					e = C(),
					n = St(),
					i = Rr(),
					r = zi(),
					o = Pt(),
					a = n(yt().f),
					s = n([].push),
					l =
						t &&
						e(function () {
							var t = Object.create(null);
							return (t[2] = 2), !a(t, 2);
						}),
					c = function (e) {
						return function (n) {
							for (
								var c,
									u = o(n),
									h = r(u),
									f = l && null === i(u),
									d = h.length,
									p = 0,
									g = [];
								d > p;

							)
								(c = h[p++]),
									(t && !(f ? c in u : a(u, c))) || s(g, e ? [c, u[c]] : u[c]);
							return g;
						};
					};
				return (Uo = { entries: c(!0), values: c(!1) });
			})().entries;
		t(
			{ target: 'Object', stat: !0 },
			{
				entries: function (t) {
					return e(t);
				},
			}
		);
	})();
	var Go,
		Ko = {};
	!(function () {
		if (Go) return Ko;
		Go = 1;
		var t = hi(),
			e = ge(),
			n = zi();
		t(
			{
				target: 'Object',
				stat: !0,
				forced: C()(function () {
					n(1);
				}),
			},
			{
				keys: function (t) {
					return n(e(t));
				},
			}
		);
	})();
	var Jo,
		Yo,
		Qo,
		Xo = {};
	!(function () {
		if (Qo) return Xo;
		Qo = 1;
		var t = gi(),
			e = on(),
			n = (function () {
				if (Yo) return Jo;
				Yo = 1;
				var t = gi(),
					e = vi();
				return (Jo = t
					? {}.toString
					: function () {
							return '[object ' + e(this) + ']';
						});
			})();
		t || e(Object.prototype, 'toString', n, { unsafe: !0 });
	})();
	var Zo,
		ta,
		ea,
		na = {};
	!(function () {
		if (ea) return na;
		ea = 1;
		var t = hi(),
			e = (function () {
				if (ta) return Zo;
				ta = 1;
				var t = b(),
					e = C(),
					n = St(),
					i = po(),
					r = _o().trim,
					o = Lo(),
					a = n(''.charAt),
					s = t.parseFloat,
					l = t.Symbol,
					c = l && l.iterator,
					u =
						1 / s(o + '-0') != -1 / 0 ||
						(c &&
							!e(function () {
								s(Object(c));
							}));
				return (Zo = u
					? function (t) {
							var e = r(i(t)),
								n = s(e);
							return 0 === n && '-' === a(e, 0) ? -0 : n;
						}
					: s);
			})();
		t({ global: !0, forced: parseFloat !== e }, { parseFloat: e });
	})();
	var ia,
		ra,
		oa,
		aa = {};
	!(function () {
		if (oa) return aa;
		oa = 1;
		var t = hi(),
			e = (function () {
				if (ra) return ia;
				ra = 1;
				var t = b(),
					e = C(),
					n = St(),
					i = po(),
					r = _o().trim,
					o = Lo(),
					a = t.parseInt,
					s = t.Symbol,
					l = s && s.iterator,
					c = /^[+-]?0x/i,
					u = n(c.exec),
					h =
						8 !== a(o + '08') ||
						22 !== a(o + '0x16') ||
						(l &&
							!e(function () {
								a(Object(l));
							}));
				return (ia = h
					? function (t, e) {
							var n = r(i(t));
							return a(n, e >>> 0 || (u(c, n) ? 16 : 10));
						}
					: a);
			})();
		t({ global: !0, forced: parseInt !== e }, { parseInt: e });
	})();
	var sa,
		la,
		ca,
		ua,
		ha,
		fa,
		da,
		pa,
		ga,
		va,
		ba,
		ma,
		ya,
		wa,
		Sa,
		xa,
		Oa,
		ka,
		Ta,
		Pa = {};
	function Ca() {
		if (la) return sa;
		la = 1;
		var t = At(),
			e = xt(),
			n = me()('match');
		return (sa = function (i) {
			var r;
			return t(i) && (void 0 !== (r = i[n]) ? !!r : 'RegExp' === e(i));
		});
	}
	function Aa() {
		if (ua) return ca;
		ua = 1;
		var t = je();
		return (ca = function () {
			var e = t(this),
				n = '';
			return (
				e.hasIndices && (n += 'd'),
				e.global && (n += 'g'),
				e.ignoreCase && (n += 'i'),
				e.multiline && (n += 'm'),
				e.dotAll && (n += 's'),
				e.unicode && (n += 'u'),
				e.unicodeSets && (n += 'v'),
				e.sticky && (n += 'y'),
				n
			);
		});
	}
	function Ia() {
		if (fa) return ha;
		fa = 1;
		var t = $(),
			e = ve(),
			n = $t(),
			i = Aa(),
			r = RegExp.prototype;
		return (ha = function (o) {
			var a = o.flags;
			return void 0 !== a || 'flags' in r || e(o, 'flags') || !n(r, o)
				? a
				: t(i, o);
		});
	}
	function $a() {
		if (pa) return da;
		pa = 1;
		var t = C(),
			e = b().RegExp,
			n = t(function () {
				var t = e('a', 'y');
				return (t.lastIndex = 2), null !== t.exec('abcd');
			}),
			i =
				n ||
				t(function () {
					return !e('a', 'y').sticky;
				}),
			r =
				n ||
				t(function () {
					var t = e('^r', 'gy');
					return (t.lastIndex = 2), null !== t.exec('str');
				});
		return (da = { BROKEN_CARET: r, MISSED_STICKY: i, UNSUPPORTED_Y: n });
	}
	function Ra() {
		if (va) return ga;
		va = 1;
		var t = Ne().f;
		return (ga = function (e, n, i) {
			i in e ||
				t(e, i, {
					configurable: !0,
					get: function () {
						return n[i];
					},
					set: function (t) {
						n[i] = t;
					},
				});
		});
	}
	function Ea() {
		if (ma) return ba;
		ma = 1;
		var t = rn(),
			e = Ne();
		return (ba = function (n, i, r) {
			return (
				r.get && t(r.get, i, { getter: !0 }),
				r.set && t(r.set, i, { setter: !0 }),
				e.f(n, i, r)
			);
		});
	}
	function ja() {
		if (wa) return ya;
		wa = 1;
		var t = It(),
			e = Ea(),
			n = me(),
			i = A(),
			r = n('species');
		return (ya = function (n) {
			var o = t(n);
			i &&
				o &&
				!o[r] &&
				e(o, r, {
					configurable: !0,
					get: function () {
						return this;
					},
				});
		});
	}
	function Na() {
		if (xa) return Sa;
		xa = 1;
		var t = C(),
			e = b().RegExp;
		return (Sa = t(function () {
			var t = e('.', 's');
			return !(t.dotAll && t.test('\n') && 's' === t.flags);
		}));
	}
	function Fa() {
		if (ka) return Oa;
		ka = 1;
		var t = C(),
			e = b().RegExp;
		return (Oa = t(function () {
			var t = e('(?<a>b)', 'g');
			return 'b' !== t.exec('b').groups.a || 'bc' !== 'b'.replace(t, '$<a>c');
		}));
	}
	!(function () {
		if (Ta) return Pa;
		Ta = 1;
		var t = A(),
			e = b(),
			n = St(),
			i = ui(),
			r = Fo(),
			o = Fe(),
			a = Wi(),
			s = Rn().f,
			l = $t(),
			c = Ca(),
			u = po(),
			h = Ia(),
			f = $a(),
			d = Ra(),
			p = on(),
			g = C(),
			v = ve(),
			m = nn().enforce,
			y = ja(),
			w = me(),
			S = Na(),
			x = Fa(),
			O = w('match'),
			k = e.RegExp,
			T = k.prototype,
			P = e.SyntaxError,
			I = n(T.exec),
			$ = n(''.charAt),
			R = n(''.replace),
			E = n(''.indexOf),
			j = n(''.slice),
			N = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
			F = /a/g,
			D = /a/g,
			L = new k(F) !== F,
			_ = f.MISSED_STICKY,
			V = f.UNSUPPORTED_Y,
			B =
				t &&
				(!L ||
					_ ||
					S ||
					x ||
					g(function () {
						return (
							(D[O] = !1),
							k(F) !== F || k(D) === D || '/a/i' !== String(k(F, 'i'))
						);
					}));
		if (i('RegExp', B)) {
			for (
				var H = function (t, e) {
						var n,
							i,
							s,
							f,
							d,
							p,
							g = l(T, this),
							b = c(t),
							y = void 0 === e,
							w = [],
							O = t;
						if (!g && b && y && t.constructor === H) return t;
						if (
							((b || l(T, t)) && ((t = t.source), y && (e = h(O))),
							(t = void 0 === t ? '' : u(t)),
							(e = void 0 === e ? '' : u(e)),
							(O = t),
							S &&
								('dotAll' in F) &&
								(i = !!e && E(e, 's') > -1) &&
								(e = R(e, /s/g, '')),
							(n = e),
							_ &&
								('sticky' in F) &&
								(s = !!e && E(e, 'y') > -1) &&
								V &&
								(e = R(e, /y/g, '')),
							x &&
								((f = (function (t) {
									for (
										var e,
											n = t.length,
											i = 0,
											r = '',
											o = [],
											s = a(null),
											l = !1,
											c = !1,
											u = 0,
											h = '';
										i <= n;
										i++
									) {
										if ('\\' === (e = $(t, i))) e += $(t, ++i);
										else if (']' === e) l = !1;
										else if (!l)
											switch (!0) {
												case '[' === e:
													l = !0;
													break;
												case '(' === e:
													if (((r += e), '?:' === j(t, i + 1, i + 3))) continue;
													I(N, j(t, i + 1)) && ((i += 2), (c = !0)), u++;
													continue;
												case '>' === e && c:
													if ('' === h || v(s, h))
														throw new P('Invalid capture group name');
													(s[h] = !0),
														(o[o.length] = [h, u]),
														(c = !1),
														(h = '');
													continue;
											}
										c ? (h += e) : (r += e);
									}
									return [r, o];
								})(t)),
								(t = f[0]),
								(w = f[1])),
							(d = r(k(t, e), g ? this : T, H)),
							(i || s || w.length) &&
								((p = m(d)),
								i &&
									((p.dotAll = !0),
									(p.raw = H(
										(function (t) {
											for (
												var e, n = t.length, i = 0, r = '', o = !1;
												i <= n;
												i++
											)
												'\\' !== (e = $(t, i))
													? o || '.' !== e
														? ('[' === e ? (o = !0) : ']' === e && (o = !1),
															(r += e))
														: (r += '[\\s\\S]')
													: (r += e + $(t, ++i));
											return r;
										})(t),
										n
									))),
								s && (p.sticky = !0),
								w.length && (p.groups = w)),
							t !== O)
						)
							try {
								o(d, 'source', '' === O ? '(?:)' : O);
							} catch (t) {}
						return d;
					},
					M = s(k),
					U = 0;
				M.length > U;

			)
				d(H, k, M[U++]);
			(T.constructor = H),
				(H.prototype = T),
				p(e, 'RegExp', H, { constructor: !0 });
		}
		y('RegExp');
	})();
	var Da,
		La,
		_a,
		Va = {};
	function Ba() {
		if (La) return Da;
		La = 1;
		var t,
			e,
			n = $(),
			i = St(),
			r = po(),
			o = Aa(),
			a = $a(),
			s = pe(),
			l = Wi(),
			c = nn().get,
			u = Na(),
			h = Fa(),
			f = s('native-string-replace', String.prototype.replace),
			d = RegExp.prototype.exec,
			p = d,
			g = i(''.charAt),
			v = i(''.indexOf),
			b = i(''.replace),
			m = i(''.slice),
			y =
				((e = /b*/g),
				n(d, (t = /a/), 'a'),
				n(d, e, 'a'),
				0 !== t.lastIndex || 0 !== e.lastIndex),
			w = a.BROKEN_CARET,
			S = void 0 !== /()??/.exec('')[1];
		return (
			(y || S || w || u || h) &&
				(p = function (t) {
					var e,
						i,
						a,
						s,
						u,
						h,
						x,
						O = this,
						k = c(O),
						T = r(t),
						P = k.raw;
					if (P)
						return (
							(P.lastIndex = O.lastIndex),
							(e = n(p, P, T)),
							(O.lastIndex = P.lastIndex),
							e
						);
					var C = k.groups,
						A = w && O.sticky,
						I = n(o, O),
						$ = O.source,
						R = 0,
						E = T;
					if (
						(A &&
							((I = b(I, 'y', '')),
							-1 === v(I, 'g') && (I += 'g'),
							(E = m(T, O.lastIndex)),
							O.lastIndex > 0 &&
								(!O.multiline ||
									(O.multiline && '\n' !== g(T, O.lastIndex - 1))) &&
								(($ = '(?: ' + $ + ')'), (E = ' ' + E), R++),
							(i = new RegExp('^(?:' + $ + ')', I))),
						S && (i = new RegExp('^' + $ + '$(?!\\s)', I)),
						y && (a = O.lastIndex),
						(s = n(d, A ? i : O, E)),
						A
							? s
								? ((s.input = m(s.input, R)),
									(s[0] = m(s[0], R)),
									(s.index = O.lastIndex),
									(O.lastIndex += s[0].length))
								: (O.lastIndex = 0)
							: y && s && (O.lastIndex = O.global ? s.index + s[0].length : a),
						S &&
							s &&
							s.length > 1 &&
							n(f, s[0], i, function () {
								for (u = 1; u < arguments.length - 2; u++)
									void 0 === arguments[u] && (s[u] = void 0);
							}),
						s && C)
					)
						for (s.groups = h = l(null), u = 0; u < C.length; u++)
							h[(x = C[u])[0]] = s[x[1]];
					return s;
				}),
			(Da = p)
		);
	}
	function Ha() {
		if (_a) return Va;
		_a = 1;
		var t = hi(),
			e = Ba();
		return (
			t({ target: 'RegExp', proto: !0, forced: /./.exec !== e }, { exec: e }),
			Va
		);
	}
	Ha();
	var Ma,
		Ua = {};
	!(function () {
		if (Ma) return Ua;
		Ma = 1;
		var t = Xe().PROPER,
			e = on(),
			n = je(),
			i = po(),
			r = C(),
			o = Ia(),
			a = 'toString',
			s = RegExp.prototype,
			l = s[a],
			c = r(function () {
				return '/a/b' !== l.call({ source: 'a', flags: 'b' });
			}),
			u = t && l.name !== a;
		(c || u) &&
			e(
				s,
				a,
				function () {
					var t = n(this);
					return '/' + i(t.source) + '/' + i(o(t));
				},
				{ unsafe: !0 }
			);
	})();
	var za,
		qa,
		Wa,
		Ga,
		Ka,
		Ja = {};
	function Ya() {
		if (qa) return za;
		qa = 1;
		var t = Ca(),
			e = TypeError;
		return (za = function (n) {
			if (t(n)) throw new e("The method doesn't accept regular expressions");
			return n;
		});
	}
	function Qa() {
		if (Ga) return Wa;
		Ga = 1;
		var t = me()('match');
		return (Wa = function (e) {
			var n = /./;
			try {
				'/./'[e](n);
			} catch (i) {
				try {
					return (n[t] = !1), '/./'[e](n);
				} catch (t) {}
			}
			return !1;
		});
	}
	!(function () {
		if (Ka) return Ja;
		Ka = 1;
		var t = hi(),
			e = St(),
			n = Ya(),
			i = Tt(),
			r = po(),
			o = Qa(),
			a = e(''.indexOf);
		t(
			{ target: 'String', proto: !0, forced: !o('includes') },
			{
				includes: function (t) {
					return !!~a(
						r(i(this)),
						r(n(t)),
						arguments.length > 1 ? arguments[1] : void 0
					);
				},
			}
		);
	})();
	var Xa,
		Za,
		ts,
		es,
		ns,
		is,
		rs,
		os,
		as,
		ss,
		ls,
		cs,
		us,
		hs = {};
	function fs() {
		if (es) return ts;
		(es = 1), Ha();
		var t = $(),
			e = on(),
			n = Ba(),
			i = C(),
			r = me(),
			o = Fe(),
			a = r('species'),
			s = RegExp.prototype;
		return (ts = function (l, c, u, h) {
			var f = r(l),
				d = !i(function () {
					var t = {};
					return (
						(t[f] = function () {
							return 7;
						}),
						7 !== ''[l](t)
					);
				}),
				p =
					d &&
					!i(function () {
						var t = !1,
							e = /a/;
						return (
							'split' === l &&
								(((e = {}).constructor = {}),
								(e.constructor[a] = function () {
									return e;
								}),
								(e.flags = ''),
								(e[f] = /./[f])),
							(e.exec = function () {
								return (t = !0), null;
							}),
							e[f](''),
							!t
						);
					});
			if (!d || !p || u) {
				var g = /./[f],
					v = c(f, ''[l], function (e, i, r, o, a) {
						var l = i.exec;
						return l === n || l === s.exec
							? d && !a
								? { done: !0, value: t(g, i, r, o) }
								: { done: !0, value: t(e, r, i, o) }
							: { done: !1 };
					});
				e(String.prototype, l, v[0]), e(s, f, v[1]);
			}
			h && o(s[f], 'sham', !0);
		});
	}
	function ds() {
		if (is) return ns;
		is = 1;
		var t = St(),
			e = kn(),
			n = po(),
			i = Tt(),
			r = t(''.charAt),
			o = t(''.charCodeAt),
			a = t(''.slice),
			s = function (t) {
				return function (s, l) {
					var c,
						u,
						h = n(i(s)),
						f = e(l),
						d = h.length;
					return f < 0 || f >= d
						? t
							? ''
							: void 0
						: (c = o(h, f)) < 55296 ||
							  c > 56319 ||
							  f + 1 === d ||
							  (u = o(h, f + 1)) < 56320 ||
							  u > 57343
							? t
								? r(h, f)
								: c
							: t
								? a(h, f, f + 2)
								: u - 56320 + ((c - 55296) << 10) + 65536;
				};
			};
		return (ns = { codeAt: s(!1), charAt: s(!0) });
	}
	function ps() {
		if (os) return rs;
		os = 1;
		var t = ds().charAt;
		return (rs = function (e, n, i) {
			return n + (i ? t(e, n).length : 1);
		});
	}
	function gs() {
		if (ss) return as;
		ss = 1;
		var t = St(),
			e = ge(),
			n = Math.floor,
			i = t(''.charAt),
			r = t(''.replace),
			o = t(''.slice),
			a = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
			s = /\$([$&'`]|\d{1,2})/g;
		return (as = function (t, l, c, u, h, f) {
			var d = c + t.length,
				p = u.length,
				g = s;
			return (
				void 0 !== h && ((h = e(h)), (g = a)),
				r(f, g, function (e, r) {
					var a;
					switch (i(r, 0)) {
						case '$':
							return '$';
						case '&':
							return t;
						case '`':
							return o(l, 0, c);
						case "'":
							return o(l, d);
						case '<':
							a = h[o(r, 1, -1)];
							break;
						default:
							var s = +r;
							if (0 === s) return e;
							if (s > p) {
								var f = n(s / 10);
								return 0 === f
									? e
									: f <= p
										? void 0 === u[f - 1]
											? i(r, 1)
											: u[f - 1] + i(r, 1)
										: e;
							}
							a = u[s - 1];
					}
					return void 0 === a ? '' : a;
				})
			);
		});
	}
	function vs() {
		if (cs) return ls;
		cs = 1;
		var t = $(),
			e = je(),
			n = Ct(),
			i = xt(),
			r = Ba(),
			o = TypeError;
		return (ls = function (a, s) {
			var l = a.exec;
			if (n(l)) {
				var c = t(l, a, s);
				return null !== c && e(c), c;
			}
			if ('RegExp' === i(a)) return t(r, a, s);
			throw new o('RegExp#exec called on incompatible receiver');
		});
	}
	!(function () {
		if (us) return hs;
		us = 1;
		var t = (function () {
				if (Za) return Xa;
				Za = 1;
				var t = I(),
					e = Function.prototype,
					n = e.apply,
					i = e.call;
				return (
					(Xa =
						('object' == typeof Reflect && Reflect.apply) ||
						(t
							? i.bind(n)
							: function () {
									return i.apply(n, arguments);
								})),
					Xa
				);
			})(),
			e = $(),
			n = St(),
			i = fs(),
			r = C(),
			o = je(),
			a = Ct(),
			s = kt(),
			l = kn(),
			c = Pn(),
			u = po(),
			h = Tt(),
			f = ps(),
			d = _t(),
			p = gs(),
			g = vs(),
			v = me()('replace'),
			b = Math.max,
			m = Math.min,
			y = n([].concat),
			w = n([].push),
			S = n(''.indexOf),
			x = n(''.slice),
			O = '$0' === 'a'.replace(/./, '$0'),
			k = !!/./[v] && '' === /./[v]('a', '$0');
		i(
			'replace',
			function (n, i, r) {
				var O = k ? '$' : '$0';
				return [
					function (t, n) {
						var r = h(this),
							o = s(t) ? void 0 : d(t, v);
						return o ? e(o, t, r, n) : e(i, u(r), t, n);
					},
					function (e, n) {
						var s = o(this),
							h = u(e);
						if ('string' == typeof n && -1 === S(n, O) && -1 === S(n, '$<')) {
							var d = r(i, s, h, n);
							if (d.done) return d.value;
						}
						var v = a(n);
						v || (n = u(n));
						var k,
							T = s.global;
						T && ((k = s.unicode), (s.lastIndex = 0));
						for (var P, C = []; null !== (P = g(s, h)) && (w(C, P), T); ) {
							'' === u(P[0]) && (s.lastIndex = f(h, c(s.lastIndex), k));
						}
						for (var A, I = '', $ = 0, R = 0; R < C.length; R++) {
							for (
								var E,
									j = u((P = C[R])[0]),
									N = b(m(l(P.index), h.length), 0),
									F = [],
									D = 1;
								D < P.length;
								D++
							)
								w(F, void 0 === (A = P[D]) ? A : String(A));
							var L = P.groups;
							if (v) {
								var _ = y([j], F, N, h);
								void 0 !== L && w(_, L), (E = u(t(n, void 0, _)));
							} else E = p(j, h, N, F, L, n);
							N >= $ && ((I += x(h, $, N) + E), ($ = N + j.length));
						}
						return I + x(h, $);
					},
				];
			},
			!!r(function () {
				var t = /./;
				return (
					(t.exec = function () {
						var t = [];
						return (t.groups = { a: '7' }), t;
					}),
					'7' !== ''.replace(t, '$<a>')
				);
			}) ||
				!O ||
				k
		);
	})();
	var bs,
		ms,
		ys,
		ws = {};
	function Ss() {
		return ms
			? bs
			: ((ms = 1),
				(bs =
					Object.is ||
					function (t, e) {
						return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
					}));
	}
	!(function () {
		if (ys) return ws;
		ys = 1;
		var t = $(),
			e = fs(),
			n = je(),
			i = kt(),
			r = Tt(),
			o = Ss(),
			a = po(),
			s = _t(),
			l = vs();
		e('search', function (e, c, u) {
			return [
				function (n) {
					var o = r(this),
						l = i(n) ? void 0 : s(n, e);
					return l ? t(l, n, o) : new RegExp(n)[e](a(o));
				},
				function (t) {
					var e = n(this),
						i = a(t),
						r = u(c, e, i);
					if (r.done) return r.value;
					var s = e.lastIndex;
					o(s, 0) || (e.lastIndex = 0);
					var h = l(e, i);
					return (
						o(e.lastIndex, s) || (e.lastIndex = s), null === h ? -1 : h.index
					);
				},
			];
		});
	})();
	var xs,
		Os,
		ks,
		Ts,
		Ps,
		Cs = {};
	function As() {
		if (Os) return xs;
		Os = 1;
		var t = bi(),
			e = Dt(),
			n = TypeError;
		return (xs = function (i) {
			if (t(i)) return i;
			throw new n(e(i) + ' is not a constructor');
		});
	}
	function Is() {
		if (Ts) return ks;
		Ts = 1;
		var t = je(),
			e = As(),
			n = kt(),
			i = me()('species');
		return (ks = function (r, o) {
			var a,
				s = t(r).constructor;
			return void 0 === s || n((a = t(s)[i])) ? o : e(a);
		});
	}
	!(function () {
		if (Ps) return Cs;
		Ps = 1;
		var t = $(),
			e = St(),
			n = fs(),
			i = je(),
			r = kt(),
			o = Tt(),
			a = Is(),
			s = ps(),
			l = Pn(),
			c = po(),
			u = _t(),
			h = vs(),
			f = $a(),
			d = C(),
			p = f.UNSUPPORTED_Y,
			g = Math.min,
			v = e([].push),
			b = e(''.slice),
			m = !d(function () {
				var t = /(?:)/,
					e = t.exec;
				t.exec = function () {
					return e.apply(this, arguments);
				};
				var n = 'ab'.split(t);
				return 2 !== n.length || 'a' !== n[0] || 'b' !== n[1];
			}),
			y =
				'c' === 'abbc'.split(/(b)*/)[1] ||
				4 !== 'test'.split(/(?:)/, -1).length ||
				2 !== 'ab'.split(/(?:ab)*/).length ||
				4 !== '.'.split(/(.?)(.?)/).length ||
				'.'.split(/()()/).length > 1 ||
				''.split(/.?/).length;
		n(
			'split',
			function (e, n, f) {
				var d = '0'.split(void 0, 0).length
					? function (e, i) {
							return void 0 === e && 0 === i ? [] : t(n, this, e, i);
						}
					: n;
				return [
					function (n, i) {
						var a = o(this),
							s = r(n) ? void 0 : u(n, e);
						return s ? t(s, n, a, i) : t(d, c(a), n, i);
					},
					function (t, e) {
						var r = i(this),
							o = c(t);
						if (!y) {
							var u = f(d, r, o, e, d !== n);
							if (u.done) return u.value;
						}
						var m = a(r, RegExp),
							w = r.unicode,
							S =
								(r.ignoreCase ? 'i' : '') +
								(r.multiline ? 'm' : '') +
								(r.unicode ? 'u' : '') +
								(p ? 'g' : 'y'),
							x = new m(p ? '^(?:' + r.source + ')' : r, S),
							O = void 0 === e ? 4294967295 : e >>> 0;
						if (0 === O) return [];
						if (0 === o.length) return null === h(x, o) ? [o] : [];
						for (var k = 0, T = 0, P = []; T < o.length; ) {
							x.lastIndex = p ? 0 : T;
							var C,
								A = h(x, p ? b(o, T) : o);
							if (
								null === A ||
								(C = g(l(x.lastIndex + (p ? T : 0)), o.length)) === k
							)
								T = s(o, T, w);
							else {
								if ((v(P, b(o, k, T)), P.length === O)) return P;
								for (var I = 1; I <= A.length - 1; I++)
									if ((v(P, A[I]), P.length === O)) return P;
								T = k = C;
							}
						}
						return v(P, b(o, k)), P;
					},
				];
			},
			y || !m,
			p
		);
	})();
	var $s,
		Rs,
		Es,
		js = {};
	!(function () {
		if (Es) return js;
		Es = 1;
		var t = hi(),
			e = _o().trim,
			n = (function () {
				if (Rs) return $s;
				Rs = 1;
				var t = Xe().PROPER,
					e = C(),
					n = Lo();
				return ($s = function (i) {
					return e(function () {
						return !!n[i]() || '​᠎' !== '​᠎'[i]() || (t && n[i].name !== i);
					});
				});
			})();
		t(
			{ target: 'String', proto: !0, forced: n('trim') },
			{
				trim: function () {
					return e(this);
				},
			}
		);
	})();
	var Ns,
		Fs,
		Ds,
		Ls,
		_s,
		Vs,
		Bs,
		Hs = {};
	function Ms() {
		return Fs
			? Ns
			: ((Fs = 1),
				(Ns = {
					CSSRuleList: 0,
					CSSStyleDeclaration: 0,
					CSSValueList: 0,
					ClientRectList: 0,
					DOMRectList: 0,
					DOMStringList: 0,
					DOMTokenList: 1,
					DataTransferItemList: 0,
					FileList: 0,
					HTMLAllCollection: 0,
					HTMLCollection: 0,
					HTMLFormElement: 0,
					HTMLSelectElement: 0,
					MediaList: 0,
					MimeTypeArray: 0,
					NamedNodeMap: 0,
					NodeList: 1,
					PaintRequestList: 0,
					Plugin: 0,
					PluginArray: 0,
					SVGLengthList: 0,
					SVGNumberList: 0,
					SVGPathSegList: 0,
					SVGPointList: 0,
					SVGStringList: 0,
					SVGTransformList: 0,
					SourceBufferList: 0,
					StyleSheetList: 0,
					TextTrackCueList: 0,
					TextTrackList: 0,
					TouchList: 0,
				}));
	}
	function Us() {
		if (Ls) return Ds;
		Ls = 1;
		var t = Se()('span').classList,
			e = t && t.constructor && t.constructor.prototype;
		return (Ds = e === Object.prototype ? void 0 : e);
	}
	!(function () {
		if (Bs) return Hs;
		Bs = 1;
		var t = b(),
			e = Ms(),
			n = Us(),
			i = (function () {
				if (Vs) return _s;
				Vs = 1;
				var t = Ri().forEach,
					e = Ar()('forEach');
				return (
					(_s = e
						? [].forEach
						: function (e) {
								return t(this, e, arguments.length > 1 ? arguments[1] : void 0);
							}),
					_s
				);
			})(),
			r = Fe(),
			o = function (t) {
				if (t && t.forEach !== i)
					try {
						r(t, 'forEach', i);
					} catch (e) {
						t.forEach = i;
					}
			};
		for (var a in e) e[a] && o(t[a] && t[a].prototype);
		o(n);
	})();
	var zs,
		qs = {};
	!(function () {
		if (zs) return qs;
		zs = 1;
		var t = b(),
			e = Ms(),
			n = Us(),
			i = Br(),
			r = Fe(),
			o = jr(),
			a = me()('iterator'),
			s = i.values,
			l = function (t, n) {
				if (t) {
					if (t[a] !== s)
						try {
							r(t, a, s);
						} catch (e) {
							t[a] = s;
						}
					if ((o(t, n, !0), e[n]))
						for (var l in i)
							if (t[l] !== i[l])
								try {
									r(t, l, i[l]);
								} catch (e) {
									t[l] = i[l];
								}
				}
			};
		for (var c in e) l(t[c] && t[c].prototype, c);
		l(n, 'DOMTokenList');
	})();
	var Ws,
		Gs = {};
	!(function () {
		if (Ws) return Gs;
		Ws = 1;
		var t = hi(),
			e = C(),
			n = ge(),
			i = Rr(),
			r = $r();
		t(
			{
				target: 'Object',
				stat: !0,
				forced: e(function () {
					i(1);
				}),
				sham: !r,
			},
			{
				getPrototypeOf: function (t) {
					return i(n(t));
				},
			}
		);
	})();
	var Ks,
		Js = {};
	!(function () {
		if (Ks) return Js;
		Ks = 1;
		var t,
			e = hi(),
			n = Ii(),
			i = Oe().f,
			r = Pn(),
			o = po(),
			a = Ya(),
			s = Tt(),
			l = Qa(),
			c = he(),
			u = n(''.slice),
			h = Math.min,
			f = l('endsWith');
		e(
			{
				target: 'String',
				proto: !0,
				forced:
					!!(
						c ||
						f ||
						((t = i(String.prototype, 'endsWith')), !t || t.writable)
					) && !f,
			},
			{
				endsWith: function (t) {
					var e = o(s(this));
					a(t);
					var n = arguments.length > 1 ? arguments[1] : void 0,
						i = e.length,
						l = void 0 === n ? i : h(r(n), i),
						c = o(t);
					return u(e, l - c.length, l) === c;
				},
			}
		);
	})();
	var Ys,
		Qs = {};
	!(function () {
		if (Ys) return Qs;
		Ys = 1;
		var t = ds().charAt,
			e = po(),
			n = nn(),
			i = _r(),
			r = Vr(),
			o = 'String Iterator',
			a = n.set,
			s = n.getterFor(o);
		i(
			String,
			'String',
			function (t) {
				a(this, { type: o, string: e(t), index: 0 });
			},
			function () {
				var e,
					n = s(this),
					i = n.string,
					o = n.index;
				return o >= i.length
					? r(void 0, !0)
					: ((e = t(i, o)), (n.index += e.length), r(e, !1));
			}
		);
	})();
	var Xs,
		Zs = {};
	!(function () {
		if (Xs) return Zs;
		Xs = 1;
		var t = $(),
			e = fs(),
			n = je(),
			i = kt(),
			r = Pn(),
			o = po(),
			a = Tt(),
			s = _t(),
			l = ps(),
			c = vs();
		e('match', function (e, u, h) {
			return [
				function (n) {
					var r = a(this),
						l = i(n) ? void 0 : s(n, e);
					return l ? t(l, n, r) : new RegExp(n)[e](o(r));
				},
				function (t) {
					var e = n(this),
						i = o(t),
						a = h(u, e, i);
					if (a.done) return a.value;
					if (!e.global) return c(e, i);
					var s = e.unicode;
					e.lastIndex = 0;
					for (var f, d = [], p = 0; null !== (f = c(e, i)); ) {
						var g = o(f[0]);
						(d[p] = g),
							'' === g && (e.lastIndex = l(i, r(e.lastIndex), s)),
							p++;
					}
					return 0 === p ? null : d;
				},
			];
		});
	})();
	var tl,
		el = {};
	!(function () {
		if (tl) return el;
		tl = 1;
		var t,
			e = hi(),
			n = Ii(),
			i = Oe().f,
			r = Pn(),
			o = po(),
			a = Ya(),
			s = Tt(),
			l = Qa(),
			c = he(),
			u = n(''.slice),
			h = Math.min,
			f = l('startsWith');
		e(
			{
				target: 'String',
				proto: !0,
				forced:
					!!(
						c ||
						f ||
						((t = i(String.prototype, 'startsWith')), !t || t.writable)
					) && !f,
			},
			{
				startsWith: function (t) {
					var e = o(s(this));
					a(t);
					var n = r(h(arguments.length > 1 ? arguments[1] : void 0, e.length)),
						i = o(t);
					return u(e, n, n + i.length) === i;
				},
			}
		);
	})();
	var nl,
		il,
		rl,
		ol,
		al,
		sl,
		ll,
		cl,
		ul,
		hl,
		fl,
		dl,
		pl,
		gl,
		vl,
		bl,
		ml,
		yl,
		wl = {};
	function Sl() {
		if (rl) return il;
		rl = 1;
		var t = b(),
			e = A(),
			n = Object.getOwnPropertyDescriptor;
		return (il = function (i) {
			if (!e) return t[i];
			var r = n(t, i);
			return r && r.value;
		});
	}
	function xl() {
		if (ll) return sl;
		ll = 1;
		var t = on();
		return (sl = function (e, n, i) {
			for (var r in n) t(e, r, n[r], i);
			return e;
		});
	}
	function Ol() {
		if (ul) return cl;
		ul = 1;
		var t = $t(),
			e = TypeError;
		return (cl = function (n, i) {
			if (t(i, n)) return n;
			throw new e('Incorrect invocation');
		});
	}
	function kl() {
		if (fl) return hl;
		fl = 1;
		var t = vi(),
			e = _t(),
			n = kt(),
			i = Ir(),
			r = me()('iterator');
		return (hl = function (o) {
			if (!n(o)) return e(o, r) || e(o, '@@iterator') || i[t(o)];
		});
	}
	function Tl() {
		if (pl) return dl;
		pl = 1;
		var t = $(),
			e = Lt(),
			n = je(),
			i = Dt(),
			r = kl(),
			o = TypeError;
		return (
			(dl = function (a, s) {
				var l = arguments.length < 2 ? r(a) : s;
				if (e(l)) return n(t(l, a));
				throw new o(i(a) + ' is not iterable');
			}),
			dl
		);
	}
	function Pl() {
		if (vl) return gl;
		vl = 1;
		var t = TypeError;
		return (gl = function (e, n) {
			if (e < n) throw new t('Not enough arguments');
			return e;
		});
	}
	function Cl() {
		if (ml) return bl;
		(ml = 1),
			Br(),
			(function () {
				if (nl) return wl;
				nl = 1;
				var t = hi(),
					e = St(),
					n = Tn(),
					i = RangeError,
					r = String.fromCharCode,
					o = String.fromCodePoint,
					a = e([].join);
				t(
					{
						target: 'String',
						stat: !0,
						arity: 1,
						forced: !!o && 1 !== o.length,
					},
					{
						fromCodePoint: function (t) {
							for (var e, o = [], s = arguments.length, l = 0; s > l; ) {
								if (((e = +arguments[l++]), n(e, 1114111) !== e))
									throw new i(e + ' is not a valid code point');
								o[l] =
									e < 65536
										? r(e)
										: r(55296 + ((e -= 65536) >> 10), (e % 1024) + 56320);
							}
							return a(o, '');
						},
					}
				);
			})();
		var t = hi(),
			e = b(),
			n = Sl(),
			i = It(),
			r = $(),
			o = St(),
			a = A(),
			s = (function () {
				if (al) return ol;
				al = 1;
				var t = C(),
					e = me(),
					n = A(),
					i = he(),
					r = e('iterator');
				return (ol = !t(function () {
					var t = new URL('b?a=1&b=2&c=3', 'https://a'),
						e = t.searchParams,
						o = new URLSearchParams('a=1&a=2&b=3'),
						a = '';
					return (
						(t.pathname = 'c%20d'),
						e.forEach(function (t, n) {
							e.delete('b'), (a += n + t);
						}),
						o.delete('a', 2),
						o.delete('b', void 0),
						(i &&
							(!t.toJSON ||
								!o.has('a', 1) ||
								o.has('a', 2) ||
								!o.has('a', void 0) ||
								o.has('b'))) ||
							(!e.size && (i || !n)) ||
							!e.sort ||
							'https://a/c%20d?a=1&c=3' !== t.href ||
							'3' !== e.get('c') ||
							'a=1' !== String(new URLSearchParams('?a=1')) ||
							!e[r] ||
							'a' !== new URL('https://a@b').username ||
							'b' !==
								new URLSearchParams(new URLSearchParams('a=b')).get('a') ||
							'xn--e1aybc' !== new URL('https://тест').host ||
							'#%D0%B1' !== new URL('https://a#б').hash ||
							'a1c3' !== a ||
							'x' !== new URL('https://x', void 0).host
					);
				}));
			})(),
			l = on(),
			c = Ea(),
			u = xl(),
			h = jr(),
			f = Nr(),
			d = nn(),
			p = Ol(),
			g = Ct(),
			v = ve(),
			m = $i(),
			y = vi(),
			w = je(),
			S = At(),
			x = po(),
			O = Wi(),
			k = wt(),
			T = Tl(),
			P = kl(),
			I = Vr(),
			R = Pl(),
			E = me(),
			j = go(),
			N = E('iterator'),
			F = 'URLSearchParams',
			D = F + 'Iterator',
			L = d.set,
			_ = d.getterFor(F),
			V = d.getterFor(D),
			B = n('fetch'),
			H = n('Request'),
			M = n('Headers'),
			U = H && H.prototype,
			z = M && M.prototype,
			q = e.TypeError,
			W = e.encodeURIComponent,
			G = String.fromCharCode,
			K = i('String', 'fromCodePoint'),
			J = parseInt,
			Y = o(''.charAt),
			Q = o([].join),
			X = o([].push),
			Z = o(''.replace),
			tt = o([].shift),
			et = o([].splice),
			nt = o(''.split),
			it = o(''.slice),
			rt = o(/./.exec),
			ot = /\+/g,
			at = /^[0-9a-f]+$/i,
			st = function (t, e) {
				var n = it(t, e, e + 2);
				return rt(at, n) ? J(n, 16) : NaN;
			},
			lt = function (t) {
				for (var e = 0, n = 128; n > 0 && t & n; n >>= 1) e++;
				return e;
			},
			ct = function (t) {
				var e = null;
				switch (t.length) {
					case 1:
						e = t[0];
						break;
					case 2:
						e = ((31 & t[0]) << 6) | (63 & t[1]);
						break;
					case 3:
						e = ((15 & t[0]) << 12) | ((63 & t[1]) << 6) | (63 & t[2]);
						break;
					case 4:
						e =
							((7 & t[0]) << 18) |
							((63 & t[1]) << 12) |
							((63 & t[2]) << 6) |
							(63 & t[3]);
				}
				return e > 1114111 ? null : e;
			},
			ut = function (t) {
				for (var e = (t = Z(t, ot, ' ')).length, n = '', i = 0; i < e; ) {
					var r = Y(t, i);
					if ('%' === r) {
						if ('%' === Y(t, i + 1) || i + 3 > e) {
							(n += '%'), i++;
							continue;
						}
						var o = st(t, i + 1);
						if (o != o) {
							(n += r), i++;
							continue;
						}
						i += 2;
						var a = lt(o);
						if (0 === a) r = G(o);
						else {
							if (1 === a || a > 4) {
								(n += '�'), i++;
								continue;
							}
							for (
								var s = [o], l = 1;
								l < a && !(++i + 3 > e || '%' !== Y(t, i));

							) {
								var c = st(t, i + 1);
								if (c != c) {
									i += 3;
									break;
								}
								if (c > 191 || c < 128) break;
								X(s, c), (i += 2), l++;
							}
							if (s.length !== a) {
								n += '�';
								continue;
							}
							var u = ct(s);
							null === u ? (n += '�') : (r = K(u));
						}
					}
					(n += r), i++;
				}
				return n;
			},
			ht = /[!'()~]|%20/g,
			ft = {
				'!': '%21',
				"'": '%27',
				'(': '%28',
				')': '%29',
				'~': '%7E',
				'%20': '+',
			},
			dt = function (t) {
				return ft[t];
			},
			pt = function (t) {
				return Z(W(t), ht, dt);
			},
			gt = f(
				function (t, e) {
					L(this, { type: D, target: _(t).entries, index: 0, kind: e });
				},
				F,
				function () {
					var t = V(this),
						e = t.target,
						n = t.index++;
					if (!e || n >= e.length) return (t.target = null), I(void 0, !0);
					var i = e[n];
					switch (t.kind) {
						case 'keys':
							return I(i.key, !1);
						case 'values':
							return I(i.value, !1);
					}
					return I([i.key, i.value], !1);
				},
				!0
			),
			vt = function (t) {
				(this.entries = []),
					(this.url = null),
					void 0 !== t &&
						(S(t)
							? this.parseObject(t)
							: this.parseQuery(
									'string' == typeof t ? ('?' === Y(t, 0) ? it(t, 1) : t) : x(t)
								));
			};
		vt.prototype = {
			type: F,
			bindURL: function (t) {
				(this.url = t), this.update();
			},
			parseObject: function (t) {
				var e,
					n,
					i,
					o,
					a,
					s,
					l,
					c = this.entries,
					u = P(t);
				if (u)
					for (n = (e = T(t, u)).next; !(i = r(n, e)).done; ) {
						if (
							((a = (o = T(w(i.value))).next),
							(s = r(a, o)).done || (l = r(a, o)).done || !r(a, o).done)
						)
							throw new q('Expected sequence with length 2');
						X(c, { key: x(s.value), value: x(l.value) });
					}
				else for (var h in t) v(t, h) && X(c, { key: h, value: x(t[h]) });
			},
			parseQuery: function (t) {
				if (t)
					for (
						var e, n, i = this.entries, r = nt(t, '&'), o = 0;
						o < r.length;

					)
						(e = r[o++]).length &&
							((n = nt(e, '=')),
							X(i, { key: ut(tt(n)), value: ut(Q(n, '=')) }));
			},
			serialize: function () {
				for (var t, e = this.entries, n = [], i = 0; i < e.length; )
					(t = e[i++]), X(n, pt(t.key) + '=' + pt(t.value));
				return Q(n, '&');
			},
			update: function () {
				(this.entries.length = 0), this.parseQuery(this.url.query);
			},
			updateURL: function () {
				this.url && this.url.update();
			},
		};
		var bt = function () {
				p(this, mt);
				var t = L(this, new vt(arguments.length > 0 ? arguments[0] : void 0));
				a || (this.size = t.entries.length);
			},
			mt = bt.prototype;
		if (
			(u(
				mt,
				{
					append: function (t, e) {
						var n = _(this);
						R(arguments.length, 2),
							X(n.entries, { key: x(t), value: x(e) }),
							a || this.length++,
							n.updateURL();
					},
					delete: function (t) {
						for (
							var e = _(this),
								n = R(arguments.length, 1),
								i = e.entries,
								r = x(t),
								o = n < 2 ? void 0 : arguments[1],
								s = void 0 === o ? o : x(o),
								l = 0;
							l < i.length;

						) {
							var c = i[l];
							if (c.key !== r || (void 0 !== s && c.value !== s)) l++;
							else if ((et(i, l, 1), void 0 !== s)) break;
						}
						a || (this.size = i.length), e.updateURL();
					},
					get: function (t) {
						var e = _(this).entries;
						R(arguments.length, 1);
						for (var n = x(t), i = 0; i < e.length; i++)
							if (e[i].key === n) return e[i].value;
						return null;
					},
					getAll: function (t) {
						var e = _(this).entries;
						R(arguments.length, 1);
						for (var n = x(t), i = [], r = 0; r < e.length; r++)
							e[r].key === n && X(i, e[r].value);
						return i;
					},
					has: function (t) {
						for (
							var e = _(this).entries,
								n = R(arguments.length, 1),
								i = x(t),
								r = n < 2 ? void 0 : arguments[1],
								o = void 0 === r ? r : x(r),
								a = 0;
							a < e.length;

						) {
							var s = e[a++];
							if (s.key === i && (void 0 === o || s.value === o)) return !0;
						}
						return !1;
					},
					set: function (t, e) {
						var n = _(this);
						R(arguments.length, 1);
						for (
							var i, r = n.entries, o = !1, s = x(t), l = x(e), c = 0;
							c < r.length;
							c++
						)
							(i = r[c]).key === s &&
								(o ? et(r, c--, 1) : ((o = !0), (i.value = l)));
						o || X(r, { key: s, value: l }),
							a || (this.size = r.length),
							n.updateURL();
					},
					sort: function () {
						var t = _(this);
						j(t.entries, function (t, e) {
							return t.key > e.key ? 1 : -1;
						}),
							t.updateURL();
					},
					forEach: function (t) {
						for (
							var e,
								n = _(this).entries,
								i = m(t, arguments.length > 1 ? arguments[1] : void 0),
								r = 0;
							r < n.length;

						)
							i((e = n[r++]).value, e.key, this);
					},
					keys: function () {
						return new gt(this, 'keys');
					},
					values: function () {
						return new gt(this, 'values');
					},
					entries: function () {
						return new gt(this, 'entries');
					},
				},
				{ enumerable: !0 }
			),
			l(mt, N, mt.entries, { name: 'entries' }),
			l(
				mt,
				'toString',
				function () {
					return _(this).serialize();
				},
				{ enumerable: !0 }
			),
			a &&
				c(mt, 'size', {
					get: function () {
						return _(this).entries.length;
					},
					configurable: !0,
					enumerable: !0,
				}),
			h(bt, F),
			t({ global: !0, constructor: !0, forced: !s }, { URLSearchParams: bt }),
			!s && g(M))
		) {
			var yt = o(z.has),
				xt = o(z.set),
				Ot = function (t) {
					if (S(t)) {
						var e,
							n = t.body;
						if (y(n) === F)
							return (
								(e = t.headers ? new M(t.headers) : new M()),
								yt(e, 'content-type') ||
									xt(
										e,
										'content-type',
										'application/x-www-form-urlencoded;charset=UTF-8'
									),
								O(t, { body: k(0, x(n)), headers: k(0, e) })
							);
					}
					return t;
				};
			if (
				(g(B) &&
					t(
						{ global: !0, enumerable: !0, dontCallGetSet: !0, forced: !0 },
						{
							fetch: function (t) {
								return B(t, arguments.length > 1 ? Ot(arguments[1]) : {});
							},
						}
					),
				g(H))
			) {
				var kt = function (t) {
					return (
						p(this, U), new H(t, arguments.length > 1 ? Ot(arguments[1]) : {})
					);
				};
				(U.constructor = kt),
					(kt.prototype = U),
					t(
						{ global: !0, constructor: !0, dontCallGetSet: !0, forced: !0 },
						{ Request: kt }
					);
			}
		}
		return (bl = { URLSearchParams: bt, getState: _ });
	}
	yl || ((yl = 1), Cl());
	var Al = {
			getBootstrapVersion: function () {
				var e = 5;
				try {
					var n = t.fn.dropdown.Constructor.VERSION;
					void 0 !== n && (e = parseInt(n, 10));
				} catch (t) {}
				try {
					var i = bootstrap.Tooltip.VERSION;
					void 0 !== i && (e = parseInt(i, 10));
				} catch (t) {}
				return e;
			},
			getIconsPrefix: function (t) {
				return (
					{
						bootstrap3: 'glyphicon',
						bootstrap4: 'fa',
						bootstrap5: 'bi',
						'bootstrap-table': 'icon',
						bulma: 'fa',
						foundation: 'fa',
						materialize: 'material-icons',
						semantic: 'fa',
					}[t] || 'fa'
				);
			},
			getIcons: function (t) {
				return (
					{
						glyphicon: {
							clearSearch: 'glyphicon-trash',
							columns: 'glyphicon-th icon-th',
							detailClose: 'glyphicon-minus icon-minus',
							detailOpen: 'glyphicon-plus icon-plus',
							fullscreen: 'glyphicon-fullscreen',
							paginationSwitchDown: 'glyphicon-collapse-down icon-chevron-down',
							paginationSwitchUp: 'glyphicon-collapse-up icon-chevron-up',
							refresh: 'glyphicon-refresh icon-refresh',
							search: 'glyphicon-search',
							toggleOff: 'glyphicon-list-alt icon-list-alt',
							toggleOn: 'glyphicon-list-alt icon-list-alt',
						},
						fa: {
							clearSearch: 'fa-trash',
							columns: 'fa-th-list',
							detailClose: 'fa-minus',
							detailOpen: 'fa-plus',
							fullscreen: 'fa-arrows-alt',
							paginationSwitchDown: 'fa-caret-square-down',
							paginationSwitchUp: 'fa-caret-square-up',
							refresh: 'fa-sync',
							search: 'fa-search',
							toggleOff: 'fa-toggle-off',
							toggleOn: 'fa-toggle-on',
						},
						bi: {
							clearSearch: 'bi-trash',
							columns: 'bi-list-ul',
							detailClose: 'bi-dash',
							detailOpen: 'bi-plus',
							fullscreen: 'bi-arrows-move',
							paginationSwitchDown: 'bi-caret-down-square',
							paginationSwitchUp: 'bi-caret-up-square',
							refresh: 'bi-arrow-clockwise',
							search: 'bi-search',
							toggleOff: 'bi-toggle-off',
							toggleOn: 'bi-toggle-on',
						},
						icon: {
							clearSearch: 'icon-trash-2',
							columns: 'icon-list',
							detailClose: 'icon-minus',
							detailOpen: 'icon-plus',
							fullscreen: 'icon-maximize',
							paginationSwitchDown: 'icon-arrow-up-circle',
							paginationSwitchUp: 'icon-arrow-down-circle',
							refresh: 'icon-refresh-cw',
							search: 'icon-search',
							toggleOff: 'icon-toggle-right',
							toggleOn: 'icon-toggle-right',
						},
						'material-icons': {
							clearSearch: 'delete',
							columns: 'view_list',
							detailClose: 'remove',
							detailOpen: 'add',
							fullscreen: 'fullscreen',
							paginationSwitchDown: 'grid_on',
							paginationSwitchUp: 'grid_off',
							refresh: 'refresh',
							search: 'search',
							sort: 'sort',
							toggleOff: 'tablet',
							toggleOn: 'tablet_android',
						},
					}[t] || {}
				);
			},
			getSearchInput: function (e) {
				return 'string' == typeof e.options.searchSelector
					? t(e.options.searchSelector)
					: e.$toolbar.find('.search input');
			},
			extend: function () {
				for (
					var t = this, e = arguments.length, n = new Array(e), i = 0;
					i < e;
					i++
				)
					n[i] = arguments[i];
				var r,
					o = n[0] || {},
					a = 1,
					s = !1;
				for (
					'boolean' == typeof o && ((s = o), (o = n[a] || {}), a++),
						'object' !== h(o) && 'function' != typeof o && (o = {});
					a < n.length;
					a++
				) {
					var l = n[a];
					if (null != l)
						for (var c in l) {
							var u = l[c];
							if ('__proto__' !== c && o !== u) {
								var f = Array.isArray(u);
								if (s && u && (this.isObject(u) || f)) {
									var d = o[c];
									if (
										f &&
										Array.isArray(d) &&
										d.every(function (e) {
											return !t.isObject(e) && !Array.isArray(e);
										})
									) {
										o[c] = u;
										continue;
									}
									(r =
										f && !Array.isArray(d)
											? []
											: f || this.isObject(d)
												? d
												: {}),
										(o[c] = this.extend(s, r, u));
								} else void 0 !== u && (o[c] = u);
							}
						}
				}
				return o;
			},
			sprintf: function (t) {
				for (
					var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1;
					i < e;
					i++
				)
					n[i - 1] = arguments[i];
				var r = !0,
					o = 0,
					a = t.replace(/%s/g, function () {
						var t = n[o++];
						return void 0 === t ? ((r = !1), '') : t;
					});
				return r ? a : '';
			},
			isObject: function (t) {
				if ('object' !== h(t) || null === t) return !1;
				for (var e = t; null !== Object.getPrototypeOf(e); )
					e = Object.getPrototypeOf(e);
				return Object.getPrototypeOf(t) === e;
			},
			isEmptyObject: function () {
				var t =
					arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return 0 === Object.entries(t).length && t.constructor === Object;
			},
			isNumeric: function (t) {
				return !isNaN(parseFloat(t)) && isFinite(t);
			},
			getFieldTitle: function (t, e) {
				var n,
					i = r(t);
				try {
					for (i.s(); !(n = i.n()).done; ) {
						var o = n.value;
						if (o.field === e) return o.title;
					}
				} catch (t) {
					i.e(t);
				} finally {
					i.f();
				}
				return '';
			},
			setFieldIndex: function (t) {
				var e,
					n = 0,
					i = [],
					o = r(t[0]);
				try {
					for (o.s(); !(e = o.n()).done; ) {
						n += +e.value.colspan || 1;
					}
				} catch (t) {
					o.e(t);
				} finally {
					o.f();
				}
				for (var a = 0; a < t.length; a++) {
					i[a] = [];
					for (var s = 0; s < n; s++) i[a][s] = !1;
				}
				for (var l = 0; l < t.length; l++) {
					var c,
						u = r(t[l]);
					try {
						for (u.s(); !(c = u.n()).done; ) {
							var h = c.value,
								f = +h.rowspan || 1,
								d = +h.colspan || 1,
								p = i[l].indexOf(!1);
							(h.colspanIndex = p),
								1 === d
									? ((h.fieldIndex = p), void 0 === h.field && (h.field = p))
									: (h.colspanGroup = +h.colspan);
							for (var g = 0; g < f; g++)
								for (var v = 0; v < d; v++) i[l + g][p + v] = !0;
						}
					} catch (t) {
						u.e(t);
					} finally {
						u.f();
					}
				}
			},
			normalizeAccent: function (t) {
				return 'string' != typeof t
					? t
					: t.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
			},
			updateFieldGroup: function (t, e) {
				var n,
					i,
					o = (n = []).concat.apply(n, c(t)),
					a = r(t);
				try {
					for (a.s(); !(i = a.n()).done; ) {
						var s,
							l = r(i.value);
						try {
							for (l.s(); !(s = l.n()).done; ) {
								var u = s.value;
								if (u.colspanGroup > 1) {
									for (
										var h = 0,
											f = function (t) {
												var e = o.filter(function (e) {
														return e.fieldIndex === t;
													}),
													n = e[e.length - 1];
												if (e.length > 1)
													for (var i = 0; i < e.length - 1; i++)
														e[i].visible = n.visible;
												n.visible && h++;
											},
											d = u.colspanIndex;
										d < u.colspanIndex + u.colspanGroup;
										d++
									)
										f(d);
									(u.colspan = h), (u.visible = h > 0);
								}
							}
						} catch (t) {
							l.e(t);
						} finally {
							l.f();
						}
					}
				} catch (t) {
					a.e(t);
				} finally {
					a.f();
				}
				if (!(t.length < 2)) {
					var p,
						g = r(e);
					try {
						var v = function () {
							var t = p.value,
								e = o.filter(function (e) {
									return e.fieldIndex === t.fieldIndex;
								});
							if (e.length > 1) {
								var n,
									i = r(e);
								try {
									for (i.s(); !(n = i.n()).done; ) {
										n.value.visible = t.visible;
									}
								} catch (t) {
									i.e(t);
								} finally {
									i.f();
								}
							}
						};
						for (g.s(); !(p = g.n()).done; ) v();
					} catch (t) {
						g.e(t);
					} finally {
						g.f();
					}
				}
			},
			getScrollBarWidth: function () {
				if (void 0 === this.cachedWidth) {
					var e = t('<div/>').addClass('fixed-table-scroll-inner'),
						n = t('<div/>').addClass('fixed-table-scroll-outer');
					n.append(e), t('body').append(n);
					var i = e[0].offsetWidth;
					n.css('overflow', 'scroll');
					var r = e[0].offsetWidth;
					i === r && (r = n[0].clientWidth),
						n.remove(),
						(this.cachedWidth = i - r);
				}
				return this.cachedWidth;
			},
			calculateObjectValue: function (t, e, n, i) {
				var o = e;
				if ('string' == typeof e) {
					var a = e.split('.');
					if (a.length > 1) {
						o = window;
						var s,
							l = r(a);
						try {
							for (l.s(); !(s = l.n()).done; ) {
								o = o[s.value];
							}
						} catch (t) {
							l.e(t);
						} finally {
							l.f();
						}
					} else o = window[e];
				}
				return null !== o && 'object' === h(o)
					? o
					: 'function' == typeof o
						? o.apply(t, n || [])
						: !o &&
							  'string' == typeof e &&
							  n &&
							  this.sprintf.apply(this, [e].concat(c(n)))
							? this.sprintf.apply(this, [e].concat(c(n)))
							: i;
			},
			compareObjects: function (t, e, n) {
				var i = Object.keys(t),
					r = Object.keys(e);
				if (n && i.length !== r.length) return !1;
				for (var o = 0, a = i; o < a.length; o++) {
					var s = a[o];
					if (r.includes(s) && t[s] !== e[s]) return !1;
				}
				return !0;
			},
			regexCompare: function (t, e) {
				try {
					var n = e.match(/^\/(.*?)\/([gim]*)$/);
					if (
						-1 !==
						t
							.toString()
							.search(n ? new RegExp(n[1], n[2]) : new RegExp(e, 'gim'))
					)
						return !0;
				} catch (t) {
					return !1;
				}
				return !1;
			},
			escapeApostrophe: function (t) {
				return t.toString().replace(/'/g, '&#39;');
			},
			escapeHTML: function (t) {
				return t
					? t
							.toString()
							.replace(/&/g, '&amp;')
							.replace(/</g, '&lt;')
							.replace(/>/g, '&gt;')
							.replace(/"/g, '&quot;')
							.replace(/'/g, '&#39;')
					: t;
			},
			unescapeHTML: function (t) {
				return 'string' == typeof t && t
					? t
							.toString()
							.replace(/&amp;/g, '&')
							.replace(/&lt;/g, '<')
							.replace(/&gt;/g, '>')
							.replace(/&quot;/g, '"')
							.replace(/&#39;/g, "'")
					: t;
			},
			removeHTML: function (t) {
				return t
					? t
							.toString()
							.replace(/(<([^>]+)>)/gi, '')
							.replace(/&[#A-Za-z0-9]+;/gi, '')
							.trim()
					: t;
			},
			getRealDataAttr: function (t) {
				for (var e = 0, n = Object.entries(t); e < n.length; e++) {
					var i = l(n[e], 2),
						r = i[0],
						o = i[1],
						a = r
							.split(/(?=[A-Z])/)
							.join('-')
							.toLowerCase();
					a !== r && ((t[a] = o), delete t[r]);
				}
				return t;
			},
			getItemField: function (t, e, n) {
				var i =
						arguments.length > 3 && void 0 !== arguments[3]
							? arguments[3]
							: void 0,
					o = t;
				if (
					(void 0 !== i && (n = i), 'string' != typeof e || t.hasOwnProperty(e))
				)
					return n ? this.escapeHTML(t[e]) : t[e];
				var a,
					s = r(e.split('.'));
				try {
					for (s.s(); !(a = s.n()).done; ) {
						var l = a.value;
						o = o && o[l];
					}
				} catch (t) {
					s.e(t);
				} finally {
					s.f();
				}
				return n ? this.escapeHTML(o) : o;
			},
			isIEBrowser: function () {
				return (
					navigator.userAgent.includes('MSIE ') ||
					/Trident.*rv:11\./.test(navigator.userAgent)
				);
			},
			findIndex: function (t, e) {
				var n,
					i = r(t);
				try {
					for (i.s(); !(n = i.n()).done; ) {
						var o = n.value;
						if (JSON.stringify(o) === JSON.stringify(e)) return t.indexOf(o);
					}
				} catch (t) {
					i.e(t);
				} finally {
					i.f();
				}
				return -1;
			},
			trToData: function (e, n) {
				var i = this,
					r = [],
					o = [];
				return (
					n.each(function (n, a) {
						var s = t(a),
							l = {};
						(l._id = s.attr('id')),
							(l._class = s.attr('class')),
							(l._data = i.getRealDataAttr(s.data())),
							(l._style = s.attr('style')),
							s.find('>td,>th').each(function (r, a) {
								for (
									var s = t(a),
										c = +s.attr('colspan') || 1,
										u = +s.attr('rowspan') || 1,
										h = r;
									o[n] && o[n][h];
									h++
								);
								for (var f = h; f < h + c; f++)
									for (var d = n; d < n + u; d++)
										o[d] || (o[d] = []), (o[d][f] = !0);
								var p = e[h].field;
								(l[p] = i.escapeApostrophe(s.html().trim())),
									(l['_'.concat(p, '_id')] = s.attr('id')),
									(l['_'.concat(p, '_class')] = s.attr('class')),
									(l['_'.concat(p, '_rowspan')] = s.attr('rowspan')),
									(l['_'.concat(p, '_colspan')] = s.attr('colspan')),
									(l['_'.concat(p, '_title')] = s.attr('title')),
									(l['_'.concat(p, '_data')] = i.getRealDataAttr(s.data())),
									(l['_'.concat(p, '_style')] = s.attr('style'));
							}),
							r.push(l);
					}),
					r
				);
			},
			sort: function (t, e, n, i, r, o) {
				if (
					(null == t && (t = ''),
					null == e && (e = ''),
					i.sortStable && t === e && ((t = r), (e = o)),
					this.isNumeric(t) && this.isNumeric(e))
				)
					return (t = parseFloat(t)) < (e = parseFloat(e))
						? -1 * n
						: t > e
							? n
							: 0;
				if (i.sortEmptyLast) {
					if ('' === t) return 1;
					if ('' === e) return -1;
				}
				return t === e
					? 0
					: ('string' != typeof t && (t = t.toString()),
						-1 === t.localeCompare(e) ? -1 * n : n);
			},
			getEventName: function (t) {
				var e =
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
				return (
					(e = e || ''.concat(+new Date()).concat(~~(1e6 * Math.random()))),
					''.concat(t, '-').concat(e)
				);
			},
			hasDetailViewIcon: function (t) {
				return t.detailView && t.detailViewIcon && !t.cardView;
			},
			getDetailViewIndexOffset: function (t) {
				return this.hasDetailViewIcon(t) && 'right' !== t.detailViewAlign
					? 1
					: 0;
			},
			checkAutoMergeCells: function (t) {
				var e,
					n = r(t);
				try {
					for (n.s(); !(e = n.n()).done; )
						for (
							var i = e.value, o = 0, a = Object.keys(i);
							o < a.length;
							o++
						) {
							var s = a[o];
							if (
								s.startsWith('_') &&
								(s.endsWith('_rowspan') || s.endsWith('_colspan'))
							)
								return !0;
						}
				} catch (t) {
					n.e(t);
				} finally {
					n.f();
				}
				return !1;
			},
			deepCopy: function (t) {
				return void 0 === t
					? t
					: this.extend(!0, Array.isArray(t) ? [] : {}, t);
			},
			debounce: function (t, e, n) {
				var i;
				return function () {
					var r = this,
						o = arguments,
						a = n && !i;
					clearTimeout(i),
						(i = setTimeout(function () {
							(i = null), n || t.apply(r, o);
						}, e)),
						a && t.apply(r, o);
				};
			},
			replaceSearchMark: function (t, e) {
				var n = t instanceof Element,
					i = n ? t : document.createElement('div'),
					o = new RegExp(e, 'gim'),
					a = function (t, e) {
						for (var n, i = [], r = 0; null !== (n = e.exec(t)); ) {
							r !== n.index &&
								i.push(document.createTextNode(t.substring(r, n.index)));
							var o = document.createElement('mark');
							(o.innerText = n[0]), i.push(o), (r = n.index + n[0].length);
						}
						if (i.length)
							return (
								r !== t.length &&
									i.push(document.createTextNode(t.substring(r))),
								i
							);
					},
					s = function (t) {
						for (var e = 0; e < t.childNodes.length; e++) {
							var n = t.childNodes[e];
							if (n.nodeType === document.TEXT_NODE) {
								var i = a(n.data, o);
								if (i) {
									var l,
										c = r(i);
									try {
										for (c.s(); !(l = c.n()).done; ) {
											var u = l.value;
											t.insertBefore(u, n);
										}
									} catch (t) {
										c.e(t);
									} finally {
										c.f();
									}
									t.removeChild(n), (e += i.length - 1);
								}
							}
							n.nodeType === document.ELEMENT_NODE && s(n);
						}
					};
				return n || (i.innerHTML = t), s(i), n ? i : i.innerHTML;
			},
			classToString: function (t) {
				var e = this;
				return 'string' == typeof t
					? t
					: Array.isArray(t)
						? t
								.map(function (t) {
									return e.classToString(t);
								})
								.filter(function (t) {
									return t;
								})
								.join(' ')
						: t && 'object' === h(t)
							? Object.entries(t)
									.map(function (t) {
										var e = l(t, 2),
											n = e[0];
										return e[1] ? n : '';
									})
									.filter(function (t) {
										return t;
									})
									.join(' ')
							: '';
			},
			parseStyle: function (t, e) {
				if (!e) return t;
				if ('string' == typeof e)
					e.split(';').forEach(function (e) {
						var n = e.indexOf(':');
						if (n > 0) {
							var i = e.substring(0, n).trim(),
								r = e.substring(n + 1).trim();
							t.style.setProperty(i, r);
						}
					});
				else if (Array.isArray(e)) {
					var n,
						i = r(e);
					try {
						for (i.s(); !(n = i.n()).done; ) {
							var o = n.value;
							this.parseStyle(t, o);
						}
					} catch (t) {
						i.e(t);
					} finally {
						i.f();
					}
				} else if ('object' === h(e))
					for (var a = 0, s = Object.entries(e); a < s.length; a++) {
						var c = l(s[a], 2),
							u = c[0],
							f = c[1];
						t.style.setProperty(u, f);
					}
				return t;
			},
			h: function (t, e, n) {
				var i = t instanceof HTMLElement ? t : document.createElement(t),
					r = e || {},
					o = n || [];
				'A' === i.tagName && (i.href = 'javascript:');
				for (var a = 0, s = Object.entries(r); a < s.length; a++) {
					var u = l(s[a], 2),
						h = u[0],
						f = u[1];
					if (void 0 !== f)
						if (['text', 'innerText'].includes(h)) i.innerText = f;
						else if (['html', 'innerHTML'].includes(h)) i.innerHTML = f;
						else if ('children' === h) o.push.apply(o, c(f));
						else if ('class' === h)
							i.setAttribute('class', this.classToString(f));
						else if ('style' === h)
							'string' == typeof f
								? i.setAttribute('style', f)
								: this.parseStyle(i, f);
						else if (h.startsWith('@') || h.startsWith('on')) {
							var d = h.startsWith('@')
									? h.substring(1)
									: h.substring(2).toLowerCase(),
								p = Array.isArray(f) ? f : [f];
							i.addEventListener.apply(i, [d].concat(c(p)));
						} else
							h.startsWith('.')
								? (i[h.substring(1)] = f)
								: i.setAttribute(h, f);
				}
				return o.length && i.append.apply(i, c(o)), i;
			},
			htmlToNodes: function (e) {
				if (e instanceof t) return e.get();
				if (e instanceof Node) return [e];
				'string' != typeof e && (e = new String(e).toString());
				var n = document.createElement('div');
				return (n.innerHTML = e), n.childNodes;
			},
			addQueryToUrl: function (t, e) {
				for (
					var n = t.split('#'),
						i = l(n[0].split('?'), 2),
						r = i[0],
						o = i[1],
						a = new URLSearchParams(o),
						s = 0,
						c = Object.entries(e);
					s < c.length;
					s++
				) {
					var u = l(c[s], 2),
						h = u[0],
						f = u[1];
					a.set(h, f);
				}
				return ''
					.concat(r, '?')
					.concat(a.toString(), '#')
					.concat(n.slice(1).join('#'));
			},
		},
		Il = Al.getBootstrapVersion(),
		$l = {
			3: {
				classes: {
					buttonActive: 'active',
					buttons: 'default',
					buttonsDropdown: 'btn-group',
					buttonsGroup: 'btn-group',
					buttonsPrefix: 'btn',
					dropdownActive: 'active',
					dropup: 'dropup',
					input: 'form-control',
					inputGroup: 'input-group',
					inputPrefix: 'input-',
					paginationActive: 'active',
					paginationDropdown: 'btn-group dropdown',
					pull: 'pull',
					select: 'form-control',
				},
				html: {
					dropdownCaret: '<span class="caret"></span>',
					icon: '<i class="%s %s"></i>',
					inputGroup:
						'<div class="input-group">%s<span class="input-group-btn">%s</span></div>',
					pageDropdown: ['<ul class="dropdown-menu" role="menu">', '</ul>'],
					pageDropdownItem:
						'<li role="menuitem" class="%s"><a href="#">%s</a></li>',
					pagination: ['<ul class="pagination%s">', '</ul>'],
					paginationItem:
						'<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',
					searchButton:
						'<button class="%s" type="button" name="search" title="%s">%s %s</button>',
					searchClearButton:
						'<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>',
					searchInput: '<input class="%s%s" type="text" placeholder="%s">',
					toolbarDropdown: ['<ul class="dropdown-menu" role="menu">', '</ul>'],
					toolbarDropdownItem:
						'<li class="dropdown-item-marker" role="menuitem"><label>%s</label></li>',
					toolbarDropdownSeparator: '<li class="divider"></li>',
				},
			},
			4: {
				classes: {
					buttonActive: 'active',
					buttons: 'secondary',
					buttonsDropdown: 'btn-group',
					buttonsGroup: 'btn-group',
					buttonsPrefix: 'btn',
					dropdownActive: 'active',
					dropup: 'dropup',
					input: 'form-control',
					inputGroup: 'btn-group',
					inputPrefix: 'form-control-',
					paginationActive: 'active',
					paginationDropdown: 'btn-group dropdown',
					pull: 'float',
					select: 'form-control',
				},
				html: {
					dropdownCaret: '<span class="caret"></span>',
					icon: '<i class="%s %s"></i>',
					inputGroup:
						'<div class="input-group">%s<div class="input-group-append">%s</div></div>',
					pageDropdown: ['<div class="dropdown-menu">', '</div>'],
					pageDropdownItem: '<a class="dropdown-item %s" href="#">%s</a>',
					pagination: ['<ul class="pagination%s">', '</ul>'],
					paginationItem:
						'<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',
					searchButton:
						'<button class="%s" type="button" name="search" title="%s">%s %s</button>',
					searchClearButton:
						'<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>',
					searchInput: '<input class="%s%s" type="text" placeholder="%s">',
					toolbarDropdown: [
						'<div class="dropdown-menu dropdown-menu-right">',
						'</div>',
					],
					toolbarDropdownItem:
						'<label class="dropdown-item dropdown-item-marker">%s</label>',
					toolbarDropdownSeparator: '<div class="dropdown-divider"></div>',
				},
			},
			5: {
				classes: {
					buttonActive: 'active',
					buttons: 'secondary',
					buttonsDropdown: 'btn-group',
					buttonsGroup: 'btn-group',
					buttonsPrefix: 'btn',
					dropdownActive: 'active',
					dropup: 'dropup',
					input: 'form-control',
					inputGroup: 'btn-group',
					inputPrefix: 'form-control-',
					paginationActive: 'active',
					paginationDropdown: 'btn-group dropdown',
					pull: 'float',
					select: 'form-select',
				},
				html: {
					dataToggle: 'data-bs-toggle',
					dropdownCaret: '<span class="caret"></span>',
					icon: '<i class="%s %s"></i>',
					inputGroup: '<div class="input-group">%s%s</div>',
					pageDropdown: ['<div class="dropdown-menu">', '</div>'],
					pageDropdownItem: '<a class="dropdown-item %s" href="#">%s</a>',
					pagination: ['<ul class="pagination%s">', '</ul>'],
					paginationItem:
						'<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',
					searchButton:
						'<button class="%s" type="button" name="search" title="%s">%s %s</button>',
					searchClearButton:
						'<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>',
					searchInput: '<input class="%s%s" type="text" placeholder="%s">',
					toolbarDropdown: [
						'<div class="dropdown-menu dropdown-menu-end">',
						'</div>',
					],
					toolbarDropdownItem:
						'<label class="dropdown-item dropdown-item-marker">%s</label>',
					toolbarDropdownSeparator: '<div class="dropdown-divider"></div>',
				},
			},
		}[Il],
		Rl = {
			ajax: void 0,
			ajaxOptions: {},
			buttons: {},
			buttonsAlign: 'right',
			buttonsAttributeTitle: 'title',
			buttonsClass: $l.classes.buttons,
			buttonsOrder: [
				'paginationSwitch',
				'refresh',
				'toggle',
				'fullscreen',
				'columns',
			],
			buttonsPrefix: $l.classes.buttonsPrefix,
			buttonsToolbar: void 0,
			cache: !0,
			cardView: !1,
			checkboxHeader: !0,
			classes: 'table table-bordered table-hover',
			clickToSelect: !1,
			columns: [[]],
			contentType: 'application/json',
			customSearch: void 0,
			customSort: void 0,
			data: [],
			dataField: 'rows',
			dataType: 'json',
			detailFilter: function (t, e) {
				return !0;
			},
			detailFormatter: function (t, e) {
				return '';
			},
			detailView: !1,
			detailViewAlign: 'left',
			detailViewByClick: !1,
			detailViewIcon: !0,
			escape: !1,
			escapeTitle: !0,
			filterOptions: { filterAlgorithm: 'and' },
			fixedScroll: !1,
			footerField: 'footer',
			footerStyle: function (t) {
				return {};
			},
			headerStyle: function (t) {
				return {};
			},
			height: void 0,
			icons: {},
			iconSize: void 0,
			iconsPrefix: void 0,
			idField: void 0,
			ignoreClickToSelectOn: function (t) {
				var e = t.tagName;
				return ['A', 'BUTTON'].includes(e);
			},
			loadingFontSize: 'auto',
			loadingTemplate: function (t) {
				return '<span class="loading-wrap">\n    <span class="loading-text">'.concat(
					t,
					'</span>\n    <span class="animation-wrap"><span class="animation-dot"></span></span>\n    </span>\n  '
				);
			},
			locale: void 0,
			maintainMetaData: !1,
			method: 'get',
			minimumCountColumns: 1,
			multipleSelectRow: !1,
			pageList: [10, 25, 50, 100],
			pageNumber: 1,
			pageSize: 10,
			pagination: !1,
			paginationDetailHAlign: 'left',
			paginationHAlign: 'right',
			paginationLoadMore: !1,
			paginationLoop: !0,
			paginationNextText: '&rsaquo;',
			paginationPagesBySide: 1,
			paginationParts: ['pageInfo', 'pageSize', 'pageList'],
			paginationPreText: '&lsaquo;',
			paginationSuccessivelySize: 5,
			paginationUseIntermediate: !1,
			paginationVAlign: 'bottom',
			queryParams: function (t) {
				return t;
			},
			queryParamsType: 'limit',
			regexSearch: !1,
			rememberOrder: !1,
			responseHandler: function (t) {
				return t;
			},
			rowAttributes: function (t, e) {
				return {};
			},
			rowStyle: function (t, e) {
				return {};
			},
			search: !1,
			searchable: !1,
			searchAccentNeutralise: !1,
			searchAlign: 'right',
			searchHighlight: !1,
			searchOnEnterKey: !1,
			searchSelector: !1,
			searchText: '',
			searchTimeOut: 500,
			selectItemName: 'btSelectItem',
			serverSort: !0,
			showButtonIcons: !0,
			showButtonText: !1,
			showColumns: !1,
			showColumnsSearch: !1,
			showColumnsToggleAll: !1,
			showExtendedPagination: !1,
			showFooter: !1,
			showFullscreen: !1,
			showHeader: !0,
			showPaginationSwitch: !1,
			showRefresh: !1,
			showSearchButton: !1,
			showSearchClearButton: !1,
			showToggle: !1,
			sidePagination: 'client',
			silentSort: !0,
			singleSelect: !1,
			smartDisplay: !0,
			sortable: !0,
			sortClass: void 0,
			sortEmptyLast: !1,
			sortName: void 0,
			sortOrder: void 0,
			sortReset: !1,
			sortResetPage: !1,
			sortStable: !1,
			strictSearch: !1,
			theadClasses: '',
			toolbar: void 0,
			toolbarAlign: 'left',
			totalField: 'total',
			totalNotFiltered: 0,
			totalNotFilteredField: 'totalNotFiltered',
			totalRows: 0,
			trimOnSearch: !0,
			undefinedText: '-',
			uniqueId: void 0,
			url: void 0,
			virtualScroll: !1,
			virtualScrollItemHeight: void 0,
			visibleSearch: !1,
			onAll: function (t, e) {
				return !1;
			},
			onCheck: function (t) {
				return !1;
			},
			onCheckAll: function (t) {
				return !1;
			},
			onCheckSome: function (t) {
				return !1;
			},
			onClickCell: function (t, e, n, i) {
				return !1;
			},
			onClickRow: function (t, e) {
				return !1;
			},
			onCollapseRow: function (t, e) {
				return !1;
			},
			onColumnSwitch: function (t, e) {
				return !1;
			},
			onColumnSwitchAll: function (t) {
				return !1;
			},
			onDblClickCell: function (t, e, n, i) {
				return !1;
			},
			onDblClickRow: function (t, e) {
				return !1;
			},
			onExpandRow: function (t, e, n) {
				return !1;
			},
			onLoadError: function (t) {
				return !1;
			},
			onLoadSuccess: function (t) {
				return !1;
			},
			onPageChange: function (t, e) {
				return !1;
			},
			onPostBody: function () {
				return !1;
			},
			onPostFooter: function () {
				return !1;
			},
			onPostHeader: function () {
				return !1;
			},
			onPreBody: function (t) {
				return !1;
			},
			onRefresh: function (t) {
				return !1;
			},
			onRefreshOptions: function (t) {
				return !1;
			},
			onResetView: function () {
				return !1;
			},
			onScrollBody: function () {
				return !1;
			},
			onSearch: function (t) {
				return !1;
			},
			onSort: function (t, e) {
				return !1;
			},
			onToggle: function (t) {
				return !1;
			},
			onTogglePagination: function (t) {
				return !1;
			},
			onUncheck: function (t) {
				return !1;
			},
			onUncheckAll: function (t) {
				return !1;
			},
			onUncheckSome: function (t) {
				return !1;
			},
			onVirtualScroll: function (t, e) {
				return !1;
			},
		},
		El = {
			formatLoadingMessage: function () {
				return 'Loading, please wait';
			},
			formatRecordsPerPage: function (t) {
				return ''.concat(t, ' rows per page');
			},
			formatShowingRows: function (t, e, n, i) {
				return void 0 !== i && i > 0 && i > n
					? 'Showing '
							.concat(t, ' to ')
							.concat(e, ' of ')
							.concat(n, ' rows (filtered from ')
							.concat(i, ' total rows)')
					: 'Showing '.concat(t, ' to ').concat(e, ' of ').concat(n, ' rows');
			},
			formatSRPaginationPreText: function () {
				return 'previous page';
			},
			formatSRPaginationPageText: function (t) {
				return 'to page '.concat(t);
			},
			formatSRPaginationNextText: function () {
				return 'next page';
			},
			formatDetailPagination: function (t) {
				return 'Showing '.concat(t, ' rows');
			},
			formatSearch: function () {
				return 'Search';
			},
			formatClearSearch: function () {
				return 'Clear Search';
			},
			formatNoMatches: function () {
				return 'No matching records found';
			},
			formatPaginationSwitch: function () {
				return 'Hide/Show pagination';
			},
			formatPaginationSwitchDown: function () {
				return 'Show pagination';
			},
			formatPaginationSwitchUp: function () {
				return 'Hide pagination';
			},
			formatRefresh: function () {
				return 'Refresh';
			},
			formatToggleOn: function () {
				return 'Show card view';
			},
			formatToggleOff: function () {
				return 'Hide card view';
			},
			formatColumns: function () {
				return 'Columns';
			},
			formatColumnsToggleAll: function () {
				return 'Toggle all';
			},
			formatFullscreen: function () {
				return 'Fullscreen';
			},
			formatAllRows: function () {
				return 'All';
			},
		},
		jl = {
			align: void 0,
			cardVisible: !0,
			cellStyle: void 0,
			checkbox: !1,
			checkboxEnabled: !0,
			class: void 0,
			clickToSelect: !0,
			colspan: void 0,
			detailFormatter: void 0,
			escape: void 0,
			events: void 0,
			falign: void 0,
			field: void 0,
			footerFormatter: void 0,
			footerStyle: void 0,
			formatter: void 0,
			halign: void 0,
			order: 'asc',
			radio: !1,
			rowspan: void 0,
			searchable: !0,
			searchFormatter: !0,
			searchHighlightFormatter: !1,
			showSelectTitle: !1,
			sortable: !1,
			sorter: void 0,
			sortName: void 0,
			switchable: !0,
			switchableLabel: void 0,
			title: void 0,
			titleTooltip: void 0,
			valign: void 0,
			visible: !0,
			width: void 0,
			widthUnit: 'px',
		};
	Object.assign(Rl, El);
	var Nl = {
			COLUMN_DEFAULTS: jl,
			CONSTANTS: $l,
			DEFAULTS: Rl,
			EVENTS: {
				'all.bs.table': 'onAll',
				'check-all.bs.table': 'onCheckAll',
				'check-some.bs.table': 'onCheckSome',
				'check.bs.table': 'onCheck',
				'click-cell.bs.table': 'onClickCell',
				'click-row.bs.table': 'onClickRow',
				'collapse-row.bs.table': 'onCollapseRow',
				'column-switch-all.bs.table': 'onColumnSwitchAll',
				'column-switch.bs.table': 'onColumnSwitch',
				'dbl-click-cell.bs.table': 'onDblClickCell',
				'dbl-click-row.bs.table': 'onDblClickRow',
				'expand-row.bs.table': 'onExpandRow',
				'load-error.bs.table': 'onLoadError',
				'load-success.bs.table': 'onLoadSuccess',
				'page-change.bs.table': 'onPageChange',
				'post-body.bs.table': 'onPostBody',
				'post-footer.bs.table': 'onPostFooter',
				'post-header.bs.table': 'onPostHeader',
				'pre-body.bs.table': 'onPreBody',
				'refresh-options.bs.table': 'onRefreshOptions',
				'refresh.bs.table': 'onRefresh',
				'reset-view.bs.table': 'onResetView',
				'scroll-body.bs.table': 'onScrollBody',
				'search.bs.table': 'onSearch',
				'sort.bs.table': 'onSort',
				'toggle-pagination.bs.table': 'onTogglePagination',
				'toggle.bs.table': 'onToggle',
				'uncheck-all.bs.table': 'onUncheckAll',
				'uncheck-some.bs.table': 'onUncheckSome',
				'uncheck.bs.table': 'onUncheck',
				'virtual-scroll.bs.table': 'onVirtualScroll',
			},
			LOCALES: { en: El, 'en-US': El },
			METHODS: [
				'getOptions',
				'refreshOptions',
				'getData',
				'getFooterData',
				'getSelections',
				'load',
				'append',
				'prepend',
				'remove',
				'removeAll',
				'insertRow',
				'updateRow',
				'getRowByUniqueId',
				'updateByUniqueId',
				'removeByUniqueId',
				'updateCell',
				'updateCellByUniqueId',
				'showRow',
				'hideRow',
				'getHiddenRows',
				'showColumn',
				'hideColumn',
				'getVisibleColumns',
				'getHiddenColumns',
				'showAllColumns',
				'hideAllColumns',
				'mergeCells',
				'checkAll',
				'uncheckAll',
				'checkInvert',
				'check',
				'uncheck',
				'checkBy',
				'uncheckBy',
				'refresh',
				'destroy',
				'resetView',
				'showLoading',
				'hideLoading',
				'togglePagination',
				'toggleFullscreen',
				'toggleView',
				'resetSearch',
				'filterBy',
				'sortBy',
				'sortReset',
				'scrollTo',
				'getScrollPosition',
				'selectPage',
				'prevPage',
				'nextPage',
				'toggleDetailView',
				'expandRow',
				'collapseRow',
				'expandRowByUniqueId',
				'collapseRowByUniqueId',
				'expandAllRows',
				'collapseAllRows',
				'updateColumnTitle',
				'updateFormatText',
			],
			THEME: 'bootstrap'.concat(Il),
			VERSION: '1.23.5',
		},
		Fl = (function () {
			return i(
				function t(e) {
					var i = this;
					n(this, t),
						(this.rows = e.rows),
						(this.scrollEl = e.scrollEl),
						(this.contentEl = e.contentEl),
						(this.callback = e.callback),
						(this.itemHeight = e.itemHeight),
						(this.cache = {}),
						(this.scrollTop = this.scrollEl.scrollTop),
						this.initDOM(this.rows, e.fixedScroll),
						(this.scrollEl.scrollTop = this.scrollTop),
						(this.lastCluster = 0);
					var r = function () {
						i.lastCluster !== (i.lastCluster = i.getNum()) &&
							(i.initDOM(i.rows), i.callback(i.startIndex, i.endIndex));
					};
					this.scrollEl.addEventListener('scroll', r, !1),
						(this.destroy = function () {
							(i.contentEl.innerHtml = ''),
								i.scrollEl.removeEventListener('scroll', r, !1);
						});
				},
				[
					{
						key: 'initDOM',
						value: function (t, e) {
							void 0 === this.clusterHeight
								? ((this.cache.scrollTop = this.scrollEl.scrollTop),
									(this.cache.data = this.contentEl.innerHTML =
										t[0] + t[0] + t[0]),
									this.getRowsHeight(t))
								: 0 === this.blockHeight && this.getRowsHeight(t);
							var n = this.initData(t, this.getNum(e)),
								i = n.rows.join(''),
								r = this.checkChanges('data', i),
								o = this.checkChanges('top', n.topOffset),
								a = this.checkChanges('bottom', n.bottomOffset),
								s = [];
							r && o
								? (n.topOffset && s.push(this.getExtra('top', n.topOffset)),
									s.push(i),
									n.bottomOffset &&
										s.push(this.getExtra('bottom', n.bottomOffset)),
									(this.startIndex = n.start),
									(this.endIndex = n.end),
									(this.contentEl.innerHTML = s.join('')),
									e && (this.contentEl.scrollTop = this.cache.scrollTop))
								: a &&
									(this.contentEl.lastChild.style.height = ''.concat(
										n.bottomOffset,
										'px'
									));
						},
					},
					{
						key: 'getRowsHeight',
						value: function () {
							if (void 0 === this.itemHeight || 0 === this.itemHeight) {
								var t = this.contentEl.children,
									e = t[Math.floor(t.length / 2)];
								this.itemHeight = e.offsetHeight;
							}
							(this.blockHeight = 50 * this.itemHeight),
								(this.clusterRows = 200),
								(this.clusterHeight = 4 * this.blockHeight);
						},
					},
					{
						key: 'getNum',
						value: function (t) {
							return (
								(this.scrollTop = t
									? this.cache.scrollTop
									: this.scrollEl.scrollTop),
								Math.floor(
									this.scrollTop / (this.clusterHeight - this.blockHeight)
								) || 0
							);
						},
					},
					{
						key: 'initData',
						value: function (t, e) {
							if (t.length < 50)
								return { topOffset: 0, bottomOffset: 0, rowsAbove: 0, rows: t };
							var n = Math.max((this.clusterRows - 50) * e, 0),
								i = n + this.clusterRows,
								r = Math.max(n * this.itemHeight, 0),
								o = Math.max((t.length - i) * this.itemHeight, 0),
								a = [],
								s = n;
							r < 1 && s++;
							for (var l = n; l < i; l++) t[l] && a.push(t[l]);
							return {
								start: n,
								end: i,
								topOffset: r,
								bottomOffset: o,
								rowsAbove: s,
								rows: a,
							};
						},
					},
					{
						key: 'checkChanges',
						value: function (t, e) {
							var n = e !== this.cache[t];
							return (this.cache[t] = e), n;
						},
					},
					{
						key: 'getExtra',
						value: function (t, e) {
							var n = document.createElement('tr');
							return (
								(n.className = 'virtual-scroll-'.concat(t)),
								e && (n.style.height = ''.concat(e, 'px')),
								n.outerHTML
							);
						},
					},
				]
			);
		})(),
		Dl = (function () {
			function e(i, r) {
				n(this, e),
					(this.options = r),
					(this.$el = t(i)),
					(this.$el_ = this.$el.clone()),
					(this.timeoutId_ = 0),
					(this.timeoutFooter_ = 0);
			}
			return i(e, [
				{
					key: 'init',
					value: function () {
						this.initConstants(),
							this.initLocale(),
							this.initContainer(),
							this.initTable(),
							this.initHeader(),
							this.initData(),
							this.initHiddenRows(),
							this.initToolbar(),
							this.initPagination(),
							this.initBody(),
							this.initSearchText(),
							this.initServer();
					},
				},
				{
					key: 'initConstants',
					value: function () {
						var e = this.options;
						(this.constants = Nl.CONSTANTS),
							(this.constants.theme = t.fn.bootstrapTable.theme),
							(this.constants.dataToggle =
								this.constants.html.dataToggle || 'data-toggle');
						var n = Al.getIconsPrefix(t.fn.bootstrapTable.theme);
						'string' == typeof e.icons &&
							(e.icons = Al.calculateObjectValue(null, e.icons)),
							(e.iconsPrefix =
								e.iconsPrefix || t.fn.bootstrapTable.defaults.iconsPrefix || n),
							(e.icons = Object.assign(
								Al.getIcons(e.iconsPrefix),
								t.fn.bootstrapTable.defaults.icons,
								e.icons
							));
						var i = e.buttonsPrefix ? ''.concat(e.buttonsPrefix, '-') : '';
						(this.constants.buttonsClass = [
							e.buttonsPrefix,
							i + e.buttonsClass,
							Al.sprintf(''.concat(i, '%s'), e.iconSize),
						]
							.join(' ')
							.trim()),
							(this.buttons = Al.calculateObjectValue(this, e.buttons, [], {})),
							'object' !== h(this.buttons) && (this.buttons = {});
					},
				},
				{
					key: 'initLocale',
					value: function () {
						if (this.options.locale) {
							var n = t.fn.bootstrapTable.locales,
								i = this.options.locale.split(/-|_/);
							(i[0] = i[0].toLowerCase()), i[1] && (i[1] = i[1].toUpperCase());
							var r = {};
							n[this.options.locale]
								? (r = n[this.options.locale])
								: n[i.join('-')]
									? (r = n[i.join('-')])
									: n[i[0]] && (r = n[i[0]]),
								(this._defaultLocales = this._defaultLocales || {});
							for (var o = 0, a = Object.entries(r); o < a.length; o++) {
								var s = l(a[o], 2),
									c = s[0],
									u = s[1],
									h = this._defaultLocales.hasOwnProperty(c)
										? this._defaultLocales[c]
										: e.DEFAULTS[c];
								this.options[c] === h &&
									((this.options[c] = u), (this._defaultLocales[c] = u));
							}
						}
					},
				},
				{
					key: 'initContainer',
					value: function () {
						var e = ['top', 'both'].includes(this.options.paginationVAlign)
								? '<div class="fixed-table-pagination clearfix"></div>'
								: '',
							n = ['bottom', 'both'].includes(this.options.paginationVAlign)
								? '<div class="fixed-table-pagination"></div>'
								: '',
							i = Al.calculateObjectValue(
								this.options,
								this.options.loadingTemplate,
								[this.options.formatLoadingMessage()]
							);
						(this.$container = t(
							'\n      <div class="bootstrap-table '
								.concat(
									this.constants.theme,
									'">\n      <div class="fixed-table-toolbar"></div>\n      '
								)
								.concat(
									e,
									'\n      <div class="fixed-table-container">\n      <div class="fixed-table-header"><table></table></div>\n      <div class="fixed-table-body">\n      <div class="fixed-table-loading">\n      '
								)
								.concat(
									i,
									'\n      </div>\n      </div>\n      <div class="fixed-table-footer"></div>\n      </div>\n      '
								)
								.concat(n, '\n      </div>\n    ')
						)),
							this.$container.insertAfter(this.$el),
							(this.$tableContainer = this.$container.find(
								'.fixed-table-container'
							)),
							(this.$tableHeader = this.$container.find('.fixed-table-header')),
							(this.$tableBody = this.$container.find('.fixed-table-body')),
							(this.$tableLoading = this.$container.find(
								'.fixed-table-loading'
							)),
							(this.$tableFooter = this.$el.find('tfoot')),
							this.options.buttonsToolbar
								? (this.$toolbar = t('body').find(this.options.buttonsToolbar))
								: (this.$toolbar = this.$container.find(
										'.fixed-table-toolbar'
									)),
							(this.$pagination = this.$container.find(
								'.fixed-table-pagination'
							)),
							this.$tableBody.append(this.$el),
							this.$container.after('<div class="clearfix"></div>'),
							this.$el.addClass(this.options.classes),
							this.$tableLoading.addClass(this.options.classes),
							this.options.height &&
								(this.$tableContainer.addClass('fixed-height'),
								this.options.showFooter &&
									this.$tableContainer.addClass('has-footer'),
								this.options.classes.split(' ').includes('table-bordered') &&
									(this.$tableBody.append(
										'<div class="fixed-table-border"></div>'
									),
									(this.$tableBorder = this.$tableBody.find(
										'.fixed-table-border'
									)),
									this.$tableLoading.addClass('fixed-table-border')),
								(this.$tableFooter = this.$container.find(
									'.fixed-table-footer'
								)));
					},
				},
				{
					key: 'initTable',
					value: function () {
						var n = this,
							i = [];
						if (
							((this.$header = this.$el.find('>thead')),
							this.$header.length
								? this.options.theadClasses &&
									this.$header.addClass(this.options.theadClasses)
								: (this.$header = t(
										'<thead class="'.concat(
											this.options.theadClasses,
											'"></thead>'
										)
									).appendTo(this.$el)),
							(this._headerTrClasses = []),
							(this._headerTrStyles = []),
							this.$header.find('tr').each(function (e, r) {
								var o = t(r),
									a = [];
								o.find('th').each(function (e, n) {
									var i = t(n);
									void 0 !== i.data('field') &&
										i.data('field', ''.concat(i.data('field')));
									var r = Object.assign({}, i.data());
									for (var o in r)
										t.fn.bootstrapTable.columnDefaults.hasOwnProperty(o) &&
											delete r[o];
									a.push(
										Al.extend(
											{},
											{
												_data: Al.getRealDataAttr(r),
												title: i.html(),
												class: i.attr('class'),
												titleTooltip: i.attr('title'),
												rowspan: i.attr('rowspan')
													? +i.attr('rowspan')
													: void 0,
												colspan: i.attr('colspan')
													? +i.attr('colspan')
													: void 0,
											},
											i.data()
										)
									);
								}),
									i.push(a),
									o.attr('class') && n._headerTrClasses.push(o.attr('class')),
									o.attr('style') && n._headerTrStyles.push(o.attr('style'));
							}),
							Array.isArray(this.options.columns[0]) ||
								(this.options.columns = [this.options.columns]),
							(this.options.columns = Al.extend(
								!0,
								[],
								i,
								this.options.columns
							)),
							(this.columns = []),
							(this.fieldsColumnsIndex = []),
							Al.setFieldIndex(this.options.columns),
							this.options.columns.forEach(function (t, i) {
								t.forEach(function (t, r) {
									var o = Al.extend({}, e.COLUMN_DEFAULTS, t, { passed: t });
									void 0 !== o.fieldIndex &&
										((n.columns[o.fieldIndex] = o),
										(n.fieldsColumnsIndex[o.field] = o.fieldIndex)),
										(n.options.columns[i][r] = o);
								});
							}),
							!this.options.data.length)
						) {
							var r = Al.trToData(this.columns, this.$el.find('>tbody>tr'));
							r.length && ((this.options.data = r), (this.fromHtml = !0));
						}
						(this.options.pagination &&
							'server' !== this.options.sidePagination) ||
							(this.footerData = Al.trToData(
								this.columns,
								this.$el.find('>tfoot>tr')
							)),
							this.footerData && this.$el.find('tfoot').html('<tr></tr>'),
							!this.options.showFooter || this.options.cardView
								? this.$tableFooter.hide()
								: this.$tableFooter.show();
					},
				},
				{
					key: 'initHeader',
					value: function () {
						var e = this,
							n = {},
							i = [];
						(this.header = {
							fields: [],
							styles: [],
							classes: [],
							formatters: [],
							detailFormatters: [],
							events: [],
							sorters: [],
							sortNames: [],
							cellStyles: [],
							searchables: [],
						}),
							Al.updateFieldGroup(this.options.columns, this.columns),
							this.options.columns.forEach(function (t, r) {
								var o = [];
								o.push(
									'<tr'
										.concat(
											Al.sprintf(' class="%s"', e._headerTrClasses[r]),
											' '
										)
										.concat(
											Al.sprintf(' style="%s"', e._headerTrStyles[r]),
											'>'
										)
								);
								var a = '';
								if (0 === r && Al.hasDetailViewIcon(e.options)) {
									var s =
										e.options.columns.length > 1
											? ' rowspan="'.concat(e.options.columns.length, '"')
											: '';
									a = '<th class="detail"'.concat(
										s,
										'>\n          <div class="fht-cell"></div>\n          </th>'
									);
								}
								a && 'right' !== e.options.detailViewAlign && o.push(a),
									t.forEach(function (t, i) {
										var a = Al.sprintf(' class="%s"', t.class),
											s = t.widthUnit,
											c = parseFloat(t.width),
											u = t.halign ? t.halign : t.align,
											f = Al.sprintf('text-align: %s; ', u),
											d = Al.sprintf('text-align: %s; ', t.align),
											p = Al.sprintf('vertical-align: %s; ', t.valign);
										if (
											((p += Al.sprintf(
												'width: %s; ',
												(!t.checkbox && !t.radio) || c
													? c
														? c + s
														: void 0
													: t.showSelectTitle
														? void 0
														: '36px'
											)),
											void 0 !== t.fieldIndex || t.visible)
										) {
											var g = Al.calculateObjectValue(
													null,
													e.options.headerStyle,
													[t]
												),
												v = [],
												b = [],
												m = '';
											if (g && g.css)
												for (
													var y = 0, w = Object.entries(g.css);
													y < w.length;
													y++
												) {
													var S = l(w[y], 2),
														x = S[0],
														O = S[1];
													v.push(''.concat(x, ': ').concat(O));
												}
											if (
												(g &&
													g.classes &&
													(m = Al.sprintf(
														' class="%s"',
														t.class ? [t.class, g.classes].join(' ') : g.classes
													)),
												void 0 !== t.fieldIndex)
											) {
												if (
													((e.header.fields[t.fieldIndex] = t.field),
													(e.header.styles[t.fieldIndex] = d + p),
													(e.header.classes[t.fieldIndex] = t.class),
													(e.header.formatters[t.fieldIndex] = t.formatter),
													(e.header.detailFormatters[t.fieldIndex] =
														t.detailFormatter),
													(e.header.events[t.fieldIndex] = t.events),
													(e.header.sorters[t.fieldIndex] = t.sorter),
													(e.header.sortNames[t.fieldIndex] = t.sortName),
													(e.header.cellStyles[t.fieldIndex] = t.cellStyle),
													(e.header.searchables[t.fieldIndex] = t.searchable),
													!t.visible)
												)
													return;
												if (e.options.cardView && !t.cardVisible) return;
												n[t.field] = t;
											}
											if (Object.keys(t._data || {}).length > 0)
												for (
													var k = 0, T = Object.entries(t._data);
													k < T.length;
													k++
												) {
													var P = l(T[k], 2),
														C = P[0],
														A = P[1];
													b.push(
														'data-'
															.concat(C, "='")
															.concat(
																'object' === h(A) ? JSON.stringify(A) : A,
																"'"
															)
													);
												}
											o.push(
												'<th'.concat(Al.sprintf(' title="%s"', t.titleTooltip)),
												t.checkbox || t.radio
													? Al.sprintf(' class="bs-checkbox %s"', t.class || '')
													: m || a,
												Al.sprintf(
													' style="%s"',
													f + p + v.join('; ') || void 0
												),
												Al.sprintf(' rowspan="%s"', t.rowspan),
												Al.sprintf(' colspan="%s"', t.colspan),
												Al.sprintf(' data-field="%s"', t.field),
												0 === i && r > 0 ? ' data-not-first-th' : '',
												b.length > 0 ? b.join(' ') : '',
												'>'
											),
												o.push(
													Al.sprintf(
														'<div class="th-inner %s">',
														e.options.sortable && t.sortable
															? 'sortable'.concat(
																	'center' === u ? ' sortable-center' : '',
																	' both'
																)
															: ''
													)
												);
											var I =
													e.options.escape && e.options.escapeTitle
														? Al.escapeHTML(t.title)
														: t.title,
												$ = I;
											t.checkbox &&
												((I = ''),
												!e.options.singleSelect &&
													e.options.checkboxHeader &&
													(I =
														'<label><input name="btSelectAll" type="checkbox" /><span></span></label>'),
												(e.header.stateField = t.field)),
												t.radio && ((I = ''), (e.header.stateField = t.field)),
												!I && t.showSelectTitle && (I += $),
												o.push(I),
												o.push('</div>'),
												o.push('<div class="fht-cell"></div>'),
												o.push('</div>'),
												o.push('</th>');
										}
									}),
									a && 'right' === e.options.detailViewAlign && o.push(a),
									o.push('</tr>'),
									o.length > 3 && i.push(o.join(''));
							}),
							this.$header.html(i.join('')),
							this.$header.find('th[data-field]').each(function (e, i) {
								t(i).data(n[t(i).data('field')]);
							}),
							this.$container
								.off('click', '.th-inner')
								.on('click', '.th-inner', function (n) {
									var i = t(n.currentTarget);
									if (
										e.options.detailView &&
										!i.parent().hasClass('bs-checkbox') &&
										i.closest('.bootstrap-table')[0] !== e.$container[0]
									)
										return !1;
									e.options.sortable &&
										i.parent().data().sortable &&
										e.onSort(n);
								});
						var r = Al.getEventName(
							'resize.bootstrap-table',
							this.$el.attr('id')
						);
						t(window).off(r),
							!this.options.showHeader || this.options.cardView
								? (this.$header.hide(),
									this.$tableHeader.hide(),
									this.$tableLoading.css('top', 0))
								: (this.$header.show(),
									this.$tableHeader.show(),
									this.$tableLoading.css('top', this.$header.outerHeight() + 1),
									this.getCaret(),
									t(window).on(r, function () {
										return e.resetView();
									})),
							(this.$selectAll = this.$header.find('[name="btSelectAll"]')),
							this.$selectAll.off('click').on('click', function (n) {
								n.stopPropagation();
								var i = t(n.currentTarget).prop('checked');
								e[i ? 'checkAll' : 'uncheckAll'](), e.updateSelected();
							});
					},
				},
				{
					key: 'initData',
					value: function (t, e) {
						'append' === e
							? (this.options.data = this.options.data.concat(t))
							: 'prepend' === e
								? (this.options.data = [].concat(t).concat(this.options.data))
								: ((t = t || Al.deepCopy(this.options.data)),
									(this.options.data = Array.isArray(t)
										? t
										: t[this.options.dataField])),
							(this.data = c(this.options.data)),
							this.options.sortReset && (this.unsortedData = c(this.data)),
							'server' !== this.options.sidePagination && this.initSort();
					},
				},
				{
					key: 'initSort',
					value: function () {
						var t = this,
							e = this.options.sortName,
							n = 'desc' === this.options.sortOrder ? -1 : 1,
							i = this.header.fields.indexOf(this.options.sortName),
							r = 0;
						-1 !== i
							? (this.options.sortStable &&
									this.data.forEach(function (t, e) {
										t.hasOwnProperty('_position') || (t._position = e);
									}),
								this.options.customSort
									? Al.calculateObjectValue(
											this.options,
											this.options.customSort,
											[this.options.sortName, this.options.sortOrder, this.data]
										)
									: this.data.sort(function (r, o) {
											t.header.sortNames[i] && (e = t.header.sortNames[i]);
											var a = Al.getItemField(r, e, t.options.escape),
												s = Al.getItemField(o, e, t.options.escape),
												l = Al.calculateObjectValue(
													t.header,
													t.header.sorters[i],
													[a, s, r, o]
												);
											return void 0 !== l
												? t.options.sortStable && 0 === l
													? n * (r._position - o._position)
													: n * l
												: Al.sort(a, s, n, t.options, r._position, o._position);
										}),
								void 0 !== this.options.sortClass &&
									(clearTimeout(r),
									(r = setTimeout(function () {
										t.$el.removeClass(t.options.sortClass);
										var e = t.$header
											.find('[data-field="'.concat(t.options.sortName, '"]'))
											.index();
										t.$el
											.find('tr td:nth-child('.concat(e + 1, ')'))
											.addClass(t.options.sortClass);
									}, 250))))
							: this.options.sortReset && (this.data = c(this.unsortedData));
					},
				},
				{
					key: 'sortReset',
					value: function () {
						(this.options.sortName = void 0),
							(this.options.sortOrder = void 0),
							this._sort();
					},
				},
				{
					key: 'sortBy',
					value: function (t) {
						(this.options.sortName = t.field),
							(this.options.sortOrder = t.hasOwnProperty('sortOrder')
								? t.sortOrder
								: 'asc'),
							this._sort();
					},
				},
				{
					key: 'onSort',
					value: function (e) {
						var n = e.type,
							i = e.currentTarget,
							r = 'keypress' === n ? t(i) : t(i).parent(),
							o = this.$header.find('th').eq(r.index());
						if (
							(this.$header.add(this.$header_).find('span.order').remove(),
							this.options.sortName === r.data('field'))
						) {
							var a = this.options.sortOrder,
								s =
									this.columns[this.fieldsColumnsIndex[r.data('field')]]
										.sortOrder ||
									this.columns[this.fieldsColumnsIndex[r.data('field')]].order;
							void 0 === a
								? (this.options.sortOrder = 'asc')
								: 'asc' === a
									? (this.options.sortOrder = this.options.sortReset
											? 'asc' === s
												? 'desc'
												: void 0
											: 'desc')
									: 'desc' === this.options.sortOrder &&
										(this.options.sortOrder = this.options.sortReset
											? 'desc' === s
												? 'asc'
												: void 0
											: 'asc'),
								void 0 === this.options.sortOrder &&
									(this.options.sortName = void 0);
						} else
							(this.options.sortName = r.data('field')),
								this.options.rememberOrder
									? (this.options.sortOrder =
											'asc' === r.data('order') ? 'desc' : 'asc')
									: (this.options.sortOrder =
											this.columns[this.fieldsColumnsIndex[r.data('field')]]
												.sortOrder ||
											this.columns[this.fieldsColumnsIndex[r.data('field')]]
												.order);
						r.add(o).data('order', this.options.sortOrder),
							this.getCaret(),
							this._sort();
					},
				},
				{
					key: '_sort',
					value: function () {
						if (
							'server' === this.options.sidePagination &&
							this.options.serverSort
						)
							return (
								(this.options.pageNumber = 1),
								this.trigger(
									'sort',
									this.options.sortName,
									this.options.sortOrder
								),
								void this.initServer(this.options.silentSort)
							);
						this.options.pagination &&
							this.options.sortResetPage &&
							((this.options.pageNumber = 1), this.initPagination()),
							this.trigger(
								'sort',
								this.options.sortName,
								this.options.sortOrder
							),
							this.initSort(),
							this.initBody();
					},
				},
				{
					key: 'initToolbar',
					value: function () {
						var e,
							n = this,
							i = this.options,
							o = [],
							a = 0,
							s = 0;
						this.$toolbar.find('.bs-bars').children().length &&
							t('body').append(t(i.toolbar)),
							this.$toolbar.html(''),
							('string' != typeof i.toolbar && 'object' !== h(i.toolbar)) ||
								t(
									Al.sprintf(
										'<div class="bs-bars %s-%s"></div>',
										this.constants.classes.pull,
										i.toolbarAlign
									)
								)
									.appendTo(this.$toolbar)
									.append(t(i.toolbar)),
							(o = [
								'<div class="'.concat(
									[
										'columns',
										'columns-'.concat(i.buttonsAlign),
										this.constants.classes.buttonsGroup,
										''
											.concat(this.constants.classes.pull, '-')
											.concat(i.buttonsAlign),
									].join(' '),
									'">'
								),
							]),
							'string' == typeof i.buttonsOrder &&
								(i.buttonsOrder = i.buttonsOrder
									.replace(/\[|\]| |'/g, '')
									.split(',')),
							(this.buttons = Object.assign(this.buttons, {
								paginationSwitch: {
									text: i.pagination
										? i.formatPaginationSwitchUp()
										: i.formatPaginationSwitchDown(),
									icon: i.pagination
										? i.icons.paginationSwitchDown
										: i.icons.paginationSwitchUp,
									render: !1,
									event: this.togglePagination,
									attributes: {
										'aria-label': i.formatPaginationSwitch(),
										title: i.formatPaginationSwitch(),
									},
								},
								refresh: {
									text: i.formatRefresh(),
									icon: i.icons.refresh,
									render: !1,
									event: this.refresh,
									attributes: {
										'aria-label': i.formatRefresh(),
										title: i.formatRefresh(),
									},
								},
								toggle: {
									text: i.formatToggleOn(),
									icon: i.icons.toggleOff,
									render: !1,
									event: this.toggleView,
									attributes: {
										'aria-label': i.formatToggleOn(),
										title: i.formatToggleOn(),
									},
								},
								fullscreen: {
									text: i.formatFullscreen(),
									icon: i.icons.fullscreen,
									render: !1,
									event: this.toggleFullscreen,
									attributes: {
										'aria-label': i.formatFullscreen(),
										title: i.formatFullscreen(),
									},
								},
								columns: {
									render: !1,
									html: function () {
										var t = [];
										if (
											(t.push(
												'<div class="keep-open '
													.concat(
														n.constants.classes.buttonsDropdown,
														'">\n            <button class="'
													)
													.concat(
														n.constants.buttonsClass,
														' dropdown-toggle" type="button" '
													)
													.concat(
														n.constants.dataToggle,
														'="dropdown"\n            aria-label="'
													)
													.concat(i.formatColumns(), '" ')
													.concat(i.buttonsAttributeTitle, '="')
													.concat(i.formatColumns(), '">\n            ')
													.concat(
														i.showButtonIcons
															? Al.sprintf(
																	n.constants.html.icon,
																	i.iconsPrefix,
																	i.icons.columns
																)
															: '',
														'\n            '
													)
													.concat(
														i.showButtonText ? i.formatColumns() : '',
														'\n            '
													)
													.concat(
														n.constants.html.dropdownCaret,
														'\n            </button>\n            '
													)
													.concat(n.constants.html.toolbarDropdown[0])
											),
											i.showColumnsSearch &&
												(t.push(
													Al.sprintf(
														n.constants.html.toolbarDropdownItem,
														Al.sprintf(
															'<input type="text" class="%s" name="columnsSearch" placeholder="%s" autocomplete="off">',
															n.constants.classes.input,
															i.formatSearch()
														)
													)
												),
												t.push(n.constants.html.toolbarDropdownSeparator)),
											i.showColumnsToggleAll)
										) {
											var e =
												n.getVisibleColumns().length ===
												n.columns.filter(function (t) {
													return !n.isSelectionColumn(t);
												}).length;
											t.push(
												Al.sprintf(
													n.constants.html.toolbarDropdownItem,
													Al.sprintf(
														'<input type="checkbox" class="toggle-all" %s> <span>%s</span>',
														e ? 'checked="checked"' : '',
														i.formatColumnsToggleAll()
													)
												)
											),
												t.push(n.constants.html.toolbarDropdownSeparator);
										}
										var r = 0;
										return (
											n.columns.forEach(function (t) {
												t.visible && r++;
											}),
											n.columns.forEach(function (e, o) {
												if (
													!n.isSelectionColumn(e) &&
													(!i.cardView || e.cardVisible)
												) {
													var a = e.visible ? ' checked="checked"' : '',
														l =
															r <= i.minimumCountColumns && a
																? ' disabled="disabled"'
																: '';
													e.switchable &&
														(t.push(
															Al.sprintf(
																n.constants.html.toolbarDropdownItem,
																Al.sprintf(
																	'<input type="checkbox" data-field="%s" value="%s"%s%s> <span>%s</span>',
																	e.field,
																	o,
																	a,
																	l,
																	e.switchableLabel || e.title
																)
															)
														),
														s++);
												}
											}),
											t.push(n.constants.html.toolbarDropdown[1], '</div>'),
											t.join('')
										);
									},
								},
							}));
						for (
							var c = {}, u = 0, f = Object.entries(this.buttons);
							u < f.length;
							u++
						) {
							var d = l(f[u], 2),
								p = d[0],
								g = d[1],
								v = void 0;
							if (g.hasOwnProperty('html'))
								'function' == typeof g.html
									? (v = g.html())
									: 'string' == typeof g.html && (v = g.html);
							else {
								var b = this.constants.buttonsClass;
								if (
									(g.hasOwnProperty('attributes') &&
										g.attributes.class &&
										(b += ' '.concat(g.attributes.class)),
									(v = '<button class="'
										.concat(b, '" type="button" name="')
										.concat(p, '"')),
									g.hasOwnProperty('attributes'))
								)
									for (
										var m = 0, y = Object.entries(g.attributes);
										m < y.length;
										m++
									) {
										var w = l(y[m], 2),
											S = w[0],
											x = w[1];
										if ('class' !== S) {
											var O =
												'title' === S ? this.options.buttonsAttributeTitle : S;
											v += ' '.concat(O, '="').concat(x, '"');
										}
									}
								(v += '>'),
									i.showButtonIcons &&
										g.hasOwnProperty('icon') &&
										(v += ''.concat(
											Al.sprintf(
												this.constants.html.icon,
												i.iconsPrefix,
												g.icon
											),
											' '
										)),
									i.showButtonText && g.hasOwnProperty('text') && (v += g.text),
									(v += '</button>');
							}
							c[p] = v;
							var k = 'show'
									.concat(p.charAt(0).toUpperCase())
									.concat(p.substring(1)),
								T = i[k];
							!(
								!g.hasOwnProperty('render') ||
								(g.hasOwnProperty('render') && g.render)
							) ||
								(void 0 !== T && !0 !== T) ||
								(i[k] = !0),
								i.buttonsOrder.includes(p) || i.buttonsOrder.push(p);
						}
						var P,
							C = r(i.buttonsOrder);
						try {
							for (C.s(); !(P = C.n()).done; ) {
								var A = P.value;
								i[
									'show'
										.concat(A.charAt(0).toUpperCase())
										.concat(A.substring(1))
								] && o.push(c[A]);
							}
						} catch (t) {
							C.e(t);
						} finally {
							C.f();
						}
						o.push('</div>'),
							(this.showToolbar || o.length > 2) &&
								this.$toolbar.append(o.join(''));
						for (
							var I = function () {
									var t = l(R[$], 2),
										e = t[0],
										i = t[1];
									if (i.hasOwnProperty('event')) {
										if (
											'function' == typeof i.event ||
											'string' == typeof i.event
										) {
											var r =
												'string' == typeof i.event ? window[i.event] : i.event;
											return (
												n.$toolbar
													.find('button[name="'.concat(e, '"]'))
													.off('click')
													.on('click', function () {
														return r.call(n);
													}),
												1
											);
										}
										for (
											var o = function () {
													var t = l(s[a], 2),
														i = t[0],
														r = t[1],
														o = 'string' == typeof r ? window[r] : r;
													n.$toolbar
														.find('button[name="'.concat(e, '"]'))
														.off(i)
														.on(i, function () {
															return o.call(n);
														});
												},
												a = 0,
												s = Object.entries(i.event);
											a < s.length;
											a++
										)
											o();
									}
								},
								$ = 0,
								R = Object.entries(this.buttons);
							$ < R.length;
							$++
						)
							I();
						if (i.showColumns) {
							var E = (e = this.$toolbar.find('.keep-open')).find(
									'input[type="checkbox"]:not(".toggle-all")'
								),
								j = e.find('input[type="checkbox"].toggle-all');
							if (
								(s <= i.minimumCountColumns &&
									e.find('input').prop('disabled', !0),
								e
									.find('li, label')
									.off('click')
									.on('click', function (t) {
										t.stopImmediatePropagation();
									}),
								E.off('click').on('click', function (e) {
									var i = e.currentTarget,
										r = t(i);
									n._toggleColumn(r.val(), r.prop('checked'), !1),
										n.trigger(
											'column-switch',
											r.data('field'),
											r.prop('checked')
										),
										j.prop(
											'checked',
											E.filter(':checked').length ===
												n.columns.filter(function (t) {
													return !n.isSelectionColumn(t);
												}).length
										);
								}),
								j.off('click').on('click', function (e) {
									var i = e.currentTarget;
									n._toggleAllColumns(t(i).prop('checked')),
										n.trigger('column-switch-all', t(i).prop('checked'));
								}),
								i.showColumnsSearch)
							) {
								var N = e.find('[name="columnsSearch"]'),
									F = e.find('.dropdown-item-marker');
								N.on('keyup paste change', function (e) {
									var n = e.currentTarget,
										i = t(n).val().toLowerCase();
									F.show(),
										E.each(function (e, n) {
											var r = t(n).parents('.dropdown-item-marker');
											r.text().toLowerCase().includes(i) || r.hide();
										});
								});
							}
						}
						var D = function (t) {
							var e = t.is('select') ? 'change' : 'keyup drop blur mouseup';
							t.off(e).on(e, function (t) {
								(i.searchOnEnterKey && 13 !== t.keyCode) ||
									[37, 38, 39, 40].includes(t.keyCode) ||
									(clearTimeout(a),
									(a = setTimeout(function () {
										n.onSearch({ currentTarget: t.currentTarget });
									}, i.searchTimeOut)));
							});
						};
						if (
							(i.search || this.showSearchClearButton) &&
							'string' != typeof i.searchSelector
						) {
							o = [];
							var L = Al.sprintf(
									this.constants.html.searchButton,
									this.constants.buttonsClass,
									i.formatSearch(),
									i.showButtonIcons
										? Al.sprintf(
												this.constants.html.icon,
												i.iconsPrefix,
												i.icons.search
											)
										: '',
									i.showButtonText ? i.formatSearch() : ''
								),
								_ = Al.sprintf(
									this.constants.html.searchClearButton,
									this.constants.buttonsClass,
									i.formatClearSearch(),
									i.showButtonIcons
										? Al.sprintf(
												this.constants.html.icon,
												i.iconsPrefix,
												i.icons.clearSearch
											)
										: '',
									i.showButtonText ? i.formatClearSearch() : ''
								),
								V = '<input class="'
									.concat(this.constants.classes.input, '\n        ')
									.concat(
										Al.sprintf(
											' %s%s',
											this.constants.classes.inputPrefix,
											i.iconSize
										),
										'\n        search-input" type="search" aria-label="'
									)
									.concat(i.formatSearch(), '" placeholder="')
									.concat(i.formatSearch(), '" autocomplete="off">'),
								B = V;
							if (i.showSearchButton || i.showSearchClearButton) {
								var H =
									(i.showSearchButton ? L : '') +
									(i.showSearchClearButton ? _ : '');
								B = i.search
									? Al.sprintf(this.constants.html.inputGroup, V, H)
									: H;
							}
							o.push(
								Al.sprintf(
									'\n        <div class="'
										.concat(this.constants.classes.pull, '-')
										.concat(i.searchAlign, ' search ')
										.concat(
											this.constants.classes.inputGroup,
											'">\n          %s\n        </div>\n      '
										),
									B
								)
							),
								this.$toolbar.append(o.join(''));
							var M = Al.getSearchInput(this);
							i.showSearchButton
								? (this.$toolbar
										.find('.search button[name=search]')
										.off('click')
										.on('click', function () {
											clearTimeout(a),
												(a = setTimeout(function () {
													n.onSearch({ currentTarget: M });
												}, i.searchTimeOut));
										}),
									i.searchOnEnterKey && D(M))
								: D(M),
								i.showSearchClearButton &&
									this.$toolbar
										.find('.search button[name=clearSearch]')
										.click(function () {
											n.resetSearch();
										});
						} else
							'string' == typeof i.searchSelector && D(Al.getSearchInput(this));
					},
				},
				{
					key: 'onSearch',
					value: function () {
						var e =
								arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: {},
							n = e.currentTarget,
							i = e.firedByInitSearchText,
							r =
								!(arguments.length > 1 && void 0 !== arguments[1]) ||
								arguments[1];
						if (void 0 !== n && t(n).length && r) {
							var o = t(n).val().trim();
							if (
								(this.options.trimOnSearch && t(n).val() !== o && t(n).val(o),
								this.searchText === o)
							)
								return;
							var a = Al.getSearchInput(this),
								s = n instanceof jQuery ? n : t(n);
							(s.is(a) || s.hasClass('search-input')) &&
								((this.searchText = o), (this.options.searchText = o));
						}
						i || (this.options.pageNumber = 1),
							this.initSearch(),
							i
								? 'client' === this.options.sidePagination &&
									this.updatePagination()
								: this.updatePagination(),
							this.trigger('search', this.searchText);
					},
				},
				{
					key: 'initSearch',
					value: function () {
						var e = this;
						if (
							((this.filterOptions =
								this.filterOptions || this.options.filterOptions),
							'server' !== this.options.sidePagination)
						) {
							if (this.options.customSearch)
								return (
									(this.data = Al.calculateObjectValue(
										this.options,
										this.options.customSearch,
										[this.options.data, this.searchText, this.filterColumns]
									)),
									this.options.sortReset && (this.unsortedData = c(this.data)),
									void this.initSort()
								);
							var n =
									this.searchText &&
									(this.fromHtml
										? Al.escapeHTML(this.searchText)
										: this.searchText),
								i = n ? n.toLowerCase() : '',
								r = Al.isEmptyObject(this.filterColumns)
									? null
									: this.filterColumns;
							this.options.searchAccentNeutralise &&
								(i = Al.normalizeAccent(i)),
								'function' == typeof this.filterOptions.filterAlgorithm
									? (this.data = this.options.data.filter(function (t) {
											return e.filterOptions.filterAlgorithm.apply(null, [
												t,
												r,
											]);
										}))
									: 'string' == typeof this.filterOptions.filterAlgorithm &&
										(this.data = r
											? this.options.data.filter(function (t) {
													var n = e.filterOptions.filterAlgorithm;
													if ('and' === n) {
														for (var i in r)
															if (
																(Array.isArray(r[i]) && !r[i].includes(t[i])) ||
																(!Array.isArray(r[i]) && t[i] !== r[i])
															)
																return !1;
													} else if ('or' === n) {
														var o = !1;
														for (var a in r)
															((Array.isArray(r[a]) && r[a].includes(t[a])) ||
																(!Array.isArray(r[a]) && t[a] === r[a])) &&
																(o = !0);
														return o;
													}
													return !0;
												})
											: c(this.options.data));
							var o = this.getVisibleFields();
							(this.data = i
								? this.data.filter(function (r, a) {
										for (var s = 0; s < e.header.fields.length; s++)
											if (
												e.header.searchables[s] &&
												(!e.options.visibleSearch ||
													-1 !== o.indexOf(e.header.fields[s]))
											) {
												var l = Al.isNumeric(e.header.fields[s])
														? parseInt(e.header.fields[s], 10)
														: e.header.fields[s],
													c = e.columns[e.fieldsColumnsIndex[l]],
													u = void 0;
												if ('string' != typeof l || r.hasOwnProperty(l))
													u = r[l];
												else {
													u = r;
													for (var h = l.split('.'), f = 0; f < h.length; f++) {
														if (null === u[h[f]] || void 0 === u[h[f]]) {
															u = null;
															break;
														}
														u = u[h[f]];
													}
												}
												if (
													(e.options.searchAccentNeutralise &&
														(u = Al.normalizeAccent(u)),
													c &&
														c.searchFormatter &&
														((u = Al.calculateObjectValue(
															c,
															e.header.formatters[s],
															[u, r, a, c.field],
															u
														)),
														e.header.formatters[s] &&
															'number' != typeof u &&
															(u = t('<div>').html(u).text())),
													'string' == typeof u || 'number' == typeof u)
												) {
													if (
														(e.options.strictSearch &&
															''.concat(u).toLowerCase() === i) ||
														(e.options.regexSearch && Al.regexCompare(u, n))
													)
														return !0;
													var d =
															/(?:(<=|=>|=<|>=|>|<)(?:\s+)?(-?\d+)?|(-?\d+)?(\s+)?(<=|=>|=<|>=|>|<))/gm.exec(
																e.searchText
															),
														p = !1;
													if (d) {
														var g = d[1] || ''.concat(d[5], 'l'),
															v = d[2] || d[3],
															b = parseInt(u, 10),
															m = parseInt(v, 10);
														switch (g) {
															case '>':
															case '<l':
																p = b > m;
																break;
															case '<':
															case '>l':
																p = b < m;
																break;
															case '<=':
															case '=<':
															case '>=l':
															case '=>l':
																p = b <= m;
																break;
															case '>=':
															case '=>':
															case '<=l':
															case '=<l':
																p = b >= m;
														}
													}
													if (p || ''.concat(u).toLowerCase().includes(i))
														return !0;
												}
											}
										return !1;
									})
								: this.data),
								this.options.sortReset && (this.unsortedData = c(this.data)),
								this.initSort();
						}
					},
				},
				{
					key: 'initPagination',
					value: function () {
						var t = this,
							e = this.options;
						if (e.pagination) {
							this.$pagination.show();
							var n,
								i,
								r,
								o,
								a,
								s,
								l,
								c = [],
								u = !1,
								h = this.getData({ includeHiddenRows: !1 }),
								f = e.pageList;
							if (
								('string' == typeof f &&
									(f = f
										.replace(/\[|\]| /g, '')
										.toLowerCase()
										.split(',')),
								(f = f.map(function (t) {
									return 'string' == typeof t
										? t.toLowerCase() === e.formatAllRows().toLowerCase() ||
											['all', 'unlimited'].includes(t.toLowerCase())
											? e.formatAllRows()
											: +t
										: t;
								})),
								(this.paginationParts = e.paginationParts),
								'string' == typeof this.paginationParts &&
									(this.paginationParts = this.paginationParts
										.replace(/\[|\]| |'/g, '')
										.split(',')),
								'server' !== e.sidePagination && (e.totalRows = h.length),
								(this.totalPages = 0),
								e.totalRows &&
									(e.pageSize === e.formatAllRows() &&
										((e.pageSize = e.totalRows), (u = !0)),
									(this.totalPages = 1 + ~~((e.totalRows - 1) / e.pageSize)),
									(e.totalPages = this.totalPages)),
								this.totalPages > 0 &&
									e.pageNumber > this.totalPages &&
									(e.pageNumber = this.totalPages),
								(this.pageFrom = (e.pageNumber - 1) * e.pageSize + 1),
								(this.pageTo = e.pageNumber * e.pageSize),
								this.pageTo > e.totalRows && (this.pageTo = e.totalRows),
								this.options.pagination &&
									'server' !== this.options.sidePagination &&
									(this.options.totalNotFiltered = this.options.data.length),
								this.options.showExtendedPagination ||
									(this.options.totalNotFiltered = void 0),
								(this.paginationParts.includes('pageInfo') ||
									this.paginationParts.includes('pageInfoShort') ||
									this.paginationParts.includes('pageSize')) &&
									c.push(
										'<div class="'
											.concat(this.constants.classes.pull, '-')
											.concat(e.paginationDetailHAlign, ' pagination-detail">')
									),
								this.paginationParts.includes('pageInfo') ||
									this.paginationParts.includes('pageInfoShort'))
							) {
								var d =
										this.options.totalRows +
										('client' === this.options.sidePagination &&
										this.options.paginationLoadMore &&
										!this._paginationLoaded
											? ' +'
											: ''),
									p = this.paginationParts.includes('pageInfoShort')
										? e.formatDetailPagination(d)
										: e.formatShowingRows(
												this.pageFrom,
												this.pageTo,
												d,
												e.totalNotFiltered
											);
								c.push(
									'<span class="pagination-info">\n      '.concat(
										p,
										'\n      </span>'
									)
								);
							}
							if (this.paginationParts.includes('pageSize')) {
								c.push('<div class="page-list">');
								var g = [
									'<div class="'
										.concat(
											this.constants.classes.paginationDropdown,
											'">\n        <button class="'
										)
										.concat(
											this.constants.buttonsClass,
											' dropdown-toggle" type="button" '
										)
										.concat(
											this.constants.dataToggle,
											'="dropdown">\n        <span class="page-size">\n        '
										)
										.concat(
											u ? e.formatAllRows() : e.pageSize,
											'\n        </span>\n        '
										)
										.concat(
											this.constants.html.dropdownCaret,
											'\n        </button>\n        '
										)
										.concat(this.constants.html.pageDropdown[0]),
								];
								f.forEach(function (n, i) {
									var r;
									(!e.smartDisplay ||
										0 === i ||
										f[i - 1] < e.totalRows ||
										n === e.formatAllRows()) &&
										((r = u
											? n === e.formatAllRows()
												? t.constants.classes.dropdownActive
												: ''
											: n === e.pageSize
												? t.constants.classes.dropdownActive
												: ''),
										g.push(
											Al.sprintf(t.constants.html.pageDropdownItem, r, n)
										));
								}),
									g.push(
										''.concat(this.constants.html.pageDropdown[1], '</div>')
									),
									c.push(e.formatRecordsPerPage(g.join('')));
							}
							if (
								((this.paginationParts.includes('pageInfo') ||
									this.paginationParts.includes('pageInfoShort') ||
									this.paginationParts.includes('pageSize')) &&
									c.push('</div></div>'),
								this.paginationParts.includes('pageList'))
							) {
								c.push(
									'<div class="'
										.concat(this.constants.classes.pull, '-')
										.concat(e.paginationHAlign, ' pagination">'),
									Al.sprintf(
										this.constants.html.pagination[0],
										Al.sprintf(' pagination-%s', e.iconSize)
									),
									Al.sprintf(
										this.constants.html.paginationItem,
										' page-pre',
										e.formatSRPaginationPreText(),
										e.paginationPreText
									)
								),
									this.totalPages < e.paginationSuccessivelySize
										? ((i = 1), (r = this.totalPages))
										: (r =
												(i = e.pageNumber - e.paginationPagesBySide) +
												2 * e.paginationPagesBySide),
									e.pageNumber < e.paginationSuccessivelySize - 1 &&
										(r = e.paginationSuccessivelySize),
									e.paginationSuccessivelySize > this.totalPages - i &&
										(i =
											i -
											(e.paginationSuccessivelySize - (this.totalPages - i)) +
											1),
									i < 1 && (i = 1),
									r > this.totalPages && (r = this.totalPages);
								var v = Math.round(e.paginationPagesBySide / 2),
									b = function (n) {
										var i =
											arguments.length > 1 && void 0 !== arguments[1]
												? arguments[1]
												: '';
										return Al.sprintf(
											t.constants.html.paginationItem,
											i +
												(n === e.pageNumber
													? ' '.concat(t.constants.classes.paginationActive)
													: ''),
											e.formatSRPaginationPageText(n),
											n
										);
									};
								if (i > 1) {
									var m = e.paginationPagesBySide;
									for (m >= i && (m = i - 1), n = 1; n <= m; n++) c.push(b(n));
									i - 1 === m + 1
										? ((n = i - 1), c.push(b(n)))
										: i - 1 > m &&
											(i - 2 * e.paginationPagesBySide >
												e.paginationPagesBySide && e.paginationUseIntermediate
												? ((n = Math.round((i - v) / 2 + v)),
													c.push(b(n, ' page-intermediate')))
												: c.push(
														Al.sprintf(
															this.constants.html.paginationItem,
															' page-first-separator disabled',
															'',
															'...'
														)
													));
								}
								for (n = i; n <= r; n++) c.push(b(n));
								if (this.totalPages > r) {
									var y = this.totalPages - (e.paginationPagesBySide - 1);
									for (
										r >= y && (y = r + 1),
											r + 1 === y - 1
												? ((n = r + 1), c.push(b(n)))
												: y > r + 1 &&
													(this.totalPages - r > 2 * e.paginationPagesBySide &&
													e.paginationUseIntermediate
														? ((n = Math.round(
																(this.totalPages - v - r) / 2 + r
															)),
															c.push(b(n, ' page-intermediate')))
														: c.push(
																Al.sprintf(
																	this.constants.html.paginationItem,
																	' page-last-separator disabled',
																	'',
																	'...'
																)
															)),
											n = y;
										n <= this.totalPages;
										n++
									)
										c.push(b(n));
								}
								c.push(
									Al.sprintf(
										this.constants.html.paginationItem,
										' page-next',
										e.formatSRPaginationNextText(),
										e.paginationNextText
									)
								),
									c.push(this.constants.html.pagination[1], '</div>');
							}
							this.$pagination.html(c.join(''));
							var w = ['bottom', 'both'].includes(e.paginationVAlign)
								? ' '.concat(this.constants.classes.dropup)
								: '';
							this.$pagination.last().find('.page-list > div').addClass(w),
								e.onlyInfoPagination ||
									((o = this.$pagination.find('.page-list a')),
									(a = this.$pagination.find('.page-pre')),
									(s = this.$pagination.find('.page-next')),
									(l = this.$pagination
										.find('.page-item')
										.not(
											'.page-next, .page-pre, .page-last-separator, .page-first-separator'
										)),
									this.totalPages <= 1 &&
										this.$pagination.find('div.pagination').hide(),
									e.smartDisplay &&
										(f.length < 2 || e.totalRows <= f[0]) &&
										this.$pagination.find('div.page-list').hide(),
									this.$pagination[this.getData().length ? 'show' : 'hide'](),
									e.paginationLoop ||
										(1 === e.pageNumber && a.addClass('disabled'),
										e.pageNumber === this.totalPages && s.addClass('disabled')),
									u && (e.pageSize = e.formatAllRows()),
									o.off('click').on('click', function (e) {
										return t.onPageListChange(e);
									}),
									a.off('click').on('click', function (e) {
										return t.onPagePre(e);
									}),
									s.off('click').on('click', function (e) {
										return t.onPageNext(e);
									}),
									l.off('click').on('click', function (e) {
										return t.onPageNumber(e);
									}));
						} else this.$pagination.hide();
					},
				},
				{
					key: 'updatePagination',
					value: function (e) {
						(e && t(e.currentTarget).hasClass('disabled')) ||
							(this.options.maintainMetaData || this.resetRows(),
							this.initPagination(),
							this.trigger(
								'page-change',
								this.options.pageNumber,
								this.options.pageSize
							),
							'server' === this.options.sidePagination ||
							('client' === this.options.sidePagination &&
								this.options.paginationLoadMore &&
								!this._paginationLoaded &&
								this.options.pageNumber === this.totalPages)
								? this.initServer()
								: this.initBody());
					},
				},
				{
					key: 'onPageListChange',
					value: function (e) {
						e.preventDefault();
						var n = t(e.currentTarget);
						return (
							n
								.parent()
								.addClass(this.constants.classes.dropdownActive)
								.siblings()
								.removeClass(this.constants.classes.dropdownActive),
							(this.options.pageSize =
								n.text().toUpperCase() ===
								this.options.formatAllRows().toUpperCase()
									? this.options.formatAllRows()
									: +n.text()),
							this.$toolbar.find('.page-size').text(this.options.pageSize),
							this.updatePagination(e),
							!1
						);
					},
				},
				{
					key: 'onPagePre',
					value: function (e) {
						if (!t(e.target).hasClass('disabled'))
							return (
								e.preventDefault(),
								this.options.pageNumber - 1 == 0
									? (this.options.pageNumber = this.options.totalPages)
									: this.options.pageNumber--,
								this.updatePagination(e),
								!1
							);
					},
				},
				{
					key: 'onPageNext',
					value: function (e) {
						if (!t(e.target).hasClass('disabled'))
							return (
								e.preventDefault(),
								this.options.pageNumber + 1 > this.options.totalPages
									? (this.options.pageNumber = 1)
									: this.options.pageNumber++,
								this.updatePagination(e),
								!1
							);
					},
				},
				{
					key: 'onPageNumber',
					value: function (e) {
						if (
							(e.preventDefault(),
							this.options.pageNumber !== +t(e.currentTarget).text())
						)
							return (
								(this.options.pageNumber = +t(e.currentTarget).text()),
								this.updatePagination(e),
								!1
							);
					},
				},
				{
					key: 'initRow',
					value: function (e, n, i, r) {
						var o = this;
						if (!(Al.findIndex(this.hiddenRows, e) > -1)) {
							var a = Al.calculateObjectValue(
									this.options,
									this.options.rowStyle,
									[e, n],
									{}
								),
								u = Al.calculateObjectValue(
									this.options,
									this.options.rowAttributes,
									[e, n],
									{}
								),
								f = {};
							if (e._data && !Al.isEmptyObject(e._data))
								for (
									var d = 0, p = Object.entries(e._data);
									d < p.length;
									d++
								) {
									var g = l(p[d], 2),
										v = g[0],
										b = g[1];
									if ('index' === v) return;
									f['data-'.concat(v)] =
										'object' === h(b) ? JSON.stringify(b) : b;
								}
							var m = Al.h(
									'tr',
									s(
										s({}, u),
										{},
										{
											id: Array.isArray(e) ? void 0 : e._id,
											class:
												(a && a.classes) ||
												(Array.isArray(e) ? void 0 : e._class),
											style:
												(a && a.css) || (Array.isArray(e) ? void 0 : e._style),
											'data-index': n,
											'data-uniqueid': Al.getItemField(
												e,
												this.options.uniqueId,
												!1
											),
											'data-has-detail-view':
												this.options.detailView &&
												Al.calculateObjectValue(
													null,
													this.options.detailFilter,
													[n, e]
												)
													? 'true'
													: void 0,
										},
										f
									)
								),
								y = [],
								w = '';
							Al.hasDetailViewIcon(this.options) &&
								((w = Al.h('td')),
								Al.calculateObjectValue(null, this.options.detailFilter, [
									n,
									e,
								]) &&
									w.append(
										Al.h('a', {
											class: 'detail-icon',
											href: '#',
											html: Al.sprintf(
												this.constants.html.icon,
												this.options.iconsPrefix,
												this.options.icons.detailOpen
											),
										})
									)),
								w && 'right' !== this.options.detailViewAlign && y.push(w);
							var S = this.header.fields
								.map(function (i, r) {
									var a = o.columns[r],
										s = Al.getItemField(e, i, o.options.escape, a.escape),
										u = '',
										h = {
											class: o.header.classes[r] ? [o.header.classes[r]] : [],
											style: o.header.styles[r] ? [o.header.styles[r]] : [],
										};
									if (
										((!o.fromHtml && !o.autoMergeCells) ||
											void 0 !== s ||
											a.checkbox ||
											a.radio) &&
										a.visible &&
										(!o.options.cardView || a.cardVisible)
									) {
										for (
											var f = 0,
												d = [
													'class',
													'style',
													'id',
													'rowspan',
													'colspan',
													'title',
												];
											f < d.length;
											f++
										) {
											var p = d[f],
												g = p['_'.concat(i, '_').concat(p)];
											g && (h[p] ? h[p].push(g) : (h[p] = g));
										}
										var v = Al.calculateObjectValue(
											o.header,
											o.header.cellStyles[r],
											[s, e, n, i],
											{}
										);
										if (
											(v.classes && h.class.push(v.classes),
											v.css && h.style.push(v.css),
											(u = Al.calculateObjectValue(
												a,
												o.header.formatters[r],
												[s, e, n, i],
												s
											)),
											a.checkbox ||
												a.radio ||
												(u = null == u ? o.options.undefinedText : u),
											a.searchable &&
												o.searchText &&
												o.options.searchHighlight &&
												!a.checkbox &&
												!a.radio)
										) {
											var b = o.searchText.replace(
												/[.*+?^${}()|[\]\\]/g,
												'\\$&'
											);
											if (
												o.options.searchAccentNeutralise &&
												'string' == typeof u
											) {
												var m = new RegExp(
													''.concat(Al.normalizeAccent(b)),
													'gmi'
												).exec(Al.normalizeAccent(u));
												m && (b = u.substring(m.index, m.index + b.length));
											}
											var y = Al.replaceSearchMark(u, b);
											u = Al.calculateObjectValue(
												a,
												a.searchHighlightFormatter,
												[u, o.searchText],
												y
											);
										}
										if (
											e['_'.concat(i, '_data')] &&
											!Al.isEmptyObject(e['_'.concat(i, '_data')])
										)
											for (
												var w = 0,
													S = Object.entries(e['_'.concat(i, '_data')]);
												w < S.length;
												w++
											) {
												var x = l(S[w], 2),
													O = x[0],
													k = x[1];
												if ('index' === O) return;
												h['data-'.concat(O)] = k;
											}
										if (a.checkbox || a.radio) {
											var T = a.checkbox ? 'checkbox' : 'radio',
												P =
													Al.isObject(u) && u.hasOwnProperty('checked')
														? u.checked
														: (!0 === u || s) && !1 !== u,
												C = !a.checkboxEnabled || (u && u.disabled),
												A =
													o.header.formatters[r] &&
													('string' == typeof u ||
														u instanceof Node ||
														u instanceof t)
														? Al.htmlToNodes(u)
														: [];
											return (
												(e[o.header.stateField] =
													!0 === u || !!s || (u && u.checked)),
												Al.h(
													o.options.cardView ? 'div' : 'td',
													{
														class: [
															o.options.cardView ? 'card-view' : 'bs-checkbox',
															a.class,
														],
														style: o.options.cardView ? void 0 : h.style,
													},
													[
														Al.h('label', {}, [
															Al.h('input', {
																'data-index': n,
																name: o.options.selectItemName,
																type: T,
																value: e[o.options.idField],
																checked: P ? 'checked' : void 0,
																disabled: C ? 'disabled' : void 0,
															}),
															Al.h('span'),
														]),
													].concat(c(A))
												)
											);
										}
										if (o.options.cardView) {
											if (o.options.smartDisplay && '' === u)
												return Al.h('div', { class: 'card-view' });
											var I = o.options.showHeader
												? Al.h('span', {
														class: ['card-view-title', v.classes],
														style: h.style,
														html: Al.getFieldTitle(o.columns, i),
													})
												: '';
											return Al.h('div', { class: 'card-view' }, [
												I,
												Al.h(
													'span',
													{
														class: ['card-view-value', v.classes],
														style: h.style,
													},
													c(Al.htmlToNodes(u))
												),
											]);
										}
										return Al.h('td', h, c(Al.htmlToNodes(u)));
									}
								})
								.filter(function (t) {
									return t;
								});
							return (
								y.push.apply(y, c(S)),
								w && 'right' === this.options.detailViewAlign && y.push(w),
								this.options.cardView
									? m.append(
											Al.h('td', { colspan: this.header.fields.length }, [
												Al.h('div', { class: 'card-views' }, y),
											])
										)
									: m.append.apply(m, y),
								m
							);
						}
					},
				},
				{
					key: 'initBody',
					value: function (e, n) {
						var i = this,
							r = this.getData();
						this.trigger('pre-body', r),
							(this.$body = this.$el.find('>tbody')),
							this.$body.length ||
								(this.$body = t('<tbody></tbody>').appendTo(this.$el)),
							(this.options.pagination &&
								'server' !== this.options.sidePagination) ||
								((this.pageFrom = 1), (this.pageTo = r.length));
						var o = [],
							a = t(document.createDocumentFragment()),
							s = !1,
							l = [];
						this.autoMergeCells = Al.checkAutoMergeCells(
							r.slice(this.pageFrom - 1, this.pageTo)
						);
						for (var c = this.pageFrom - 1; c < this.pageTo; c++) {
							var u = r[c],
								h = this.initRow(u, c, r, a);
							if (((s = s || !!h), h && h instanceof Node)) {
								var f = this.options.uniqueId,
									d = [h];
								if (f && u.hasOwnProperty(f)) {
									var p = u[f],
										g = this.$body
											.find(
												Al.sprintf(
													'> tr[data-uniqueid="%s"][data-has-detail-view]',
													p
												)
											)
											.next();
									g.is('tr.detail-view') &&
										(l.push(c), (n && p === n) || d.push(g[0]));
								}
								this.options.virtualScroll
									? o.push(t('<div>').html(d).html())
									: a.append(d);
							}
						}
						this.$el.removeAttr('role'),
							s
								? this.options.virtualScroll
									? (this.virtualScroll && this.virtualScroll.destroy(),
										(this.virtualScroll = new Fl({
											rows: o,
											fixedScroll: e,
											scrollEl: this.$tableBody[0],
											contentEl: this.$body[0],
											itemHeight: this.options.virtualScrollItemHeight,
											callback: function (t, e) {
												i.fitHeader(),
													i.initBodyEvent(),
													i.trigger('virtual-scroll', t, e);
											},
										})))
									: this.$body.html(a)
								: (this.$body.html(
										'<tr class="no-records-found">'.concat(
											Al.sprintf(
												'<td colspan="%s">%s</td>',
												this.getVisibleFields().length +
													Al.getDetailViewIndexOffset(this.options),
												this.options.formatNoMatches()
											),
											'</tr>'
										)
									),
									this.$el.attr('role', 'presentation')),
							l.forEach(function (t) {
								i.expandRow(t);
							}),
							e || this.scrollTo(0),
							this.initBodyEvent(),
							this.initFooter(),
							this.resetView(),
							this.updateSelected(),
							'server' !== this.options.sidePagination &&
								(this.options.totalRows = r.length),
							this.trigger('post-body', r);
					},
				},
				{
					key: 'initBodyEvent',
					value: function () {
						var e = this;
						this.$body
							.find('> tr[data-index] > td')
							.off('click dblclick')
							.on('click dblclick', function (n) {
								var i = t(n.currentTarget);
								if (
									!(
										i.find('.detail-icon').length ||
										i.index() - Al.getDetailViewIndexOffset(e.options) < 0
									)
								) {
									var r = i.parent(),
										o = t(n.target).parents('.card-views').children(),
										a = t(n.target).parents('.card-view'),
										s = r.data('index'),
										l = e.data[s],
										c = e.options.cardView ? o.index(a) : i[0].cellIndex,
										u =
											e.getVisibleFields()[
												c - Al.getDetailViewIndexOffset(e.options)
											],
										h = e.columns[e.fieldsColumnsIndex[u]],
										f = Al.getItemField(l, u, e.options.escape, h.escape);
									if (
										(e.trigger(
											'click' === n.type ? 'click-cell' : 'dbl-click-cell',
											u,
											f,
											l,
											i
										),
										e.trigger(
											'click' === n.type ? 'click-row' : 'dbl-click-row',
											l,
											r,
											u
										),
										'click' === n.type &&
											e.options.clickToSelect &&
											h.clickToSelect &&
											!Al.calculateObjectValue(
												e.options,
												e.options.ignoreClickToSelectOn,
												[n.target]
											))
									) {
										var d = r.find(
											Al.sprintf('[name="%s"]', e.options.selectItemName)
										);
										d.length && d[0].click();
									}
									'click' === n.type &&
										e.options.detailViewByClick &&
										e.toggleDetailView(
											s,
											e.header.detailFormatters[e.fieldsColumnsIndex[u]]
										);
								}
							})
							.off('mousedown')
							.on('mousedown', function (t) {
								(e.multipleSelectRowCtrlKey = t.ctrlKey || t.metaKey),
									(e.multipleSelectRowShiftKey = t.shiftKey);
							}),
							this.$body
								.find('> tr[data-index] > td > .detail-icon')
								.off('click')
								.on('click', function (n) {
									return (
										n.preventDefault(),
										e.toggleDetailView(
											t(n.currentTarget).parent().parent().data('index')
										),
										!1
									);
								}),
							(this.$selectItem = this.$body.find(
								Al.sprintf('[name="%s"]', this.options.selectItemName)
							)),
							this.$selectItem.off('click').on('click', function (n) {
								n.stopImmediatePropagation();
								var i = t(n.currentTarget);
								e._toggleCheck(i.prop('checked'), i.data('index'));
							}),
							this.header.events.forEach(function (n, i) {
								var r = n;
								if (r) {
									if (
										('string' == typeof r &&
											(r = Al.calculateObjectValue(null, r)),
										!r)
									)
										throw new Error('Unknown event in the scope: '.concat(n));
									var o = e.header.fields[i],
										a = e.getVisibleFields().indexOf(o);
									if (-1 !== a) {
										a += Al.getDetailViewIndexOffset(e.options);
										var s = function (n) {
											if (!r.hasOwnProperty(n)) return 1;
											var i = r[n];
											e.$body
												.find('>tr:not(.no-records-found)')
												.each(function (r, s) {
													var l = t(s),
														c = l
															.find(
																e.options.cardView
																	? '.card-views>.card-view'
																	: '>td'
															)
															.eq(a),
														u = n.indexOf(' '),
														h = n.substring(0, u),
														f = n.substring(u + 1);
													c.find(f)
														.off(h)
														.on(h, function (t) {
															var n = l.data('index'),
																r = e.data[n],
																a = r[o];
															i.apply(e, [t, a, r, n]);
														});
												});
										};
										for (var l in r) s(l);
									}
								}
							});
					},
				},
				{
					key: 'initServer',
					value: function (e, n) {
						var i = this,
							o = {},
							a = this.header.fields.indexOf(this.options.sortName),
							s = {
								searchText: this.searchText,
								sortName: this.options.sortName,
								sortOrder: this.options.sortOrder,
							};
						if (
							(this.header.sortNames[a] &&
								(s.sortName = this.header.sortNames[a]),
							this.options.pagination &&
								'server' === this.options.sidePagination &&
								((s.pageSize =
									this.options.pageSize === this.options.formatAllRows()
										? this.options.totalRows
										: this.options.pageSize),
								(s.pageNumber = this.options.pageNumber)),
							this.options.url || this.options.ajax)
						) {
							if (
								('limit' === this.options.queryParamsType &&
									((s = {
										search: s.searchText,
										sort: s.sortName,
										order: s.sortOrder,
									}),
									this.options.pagination &&
										'server' === this.options.sidePagination &&
										((s.offset =
											this.options.pageSize === this.options.formatAllRows()
												? 0
												: this.options.pageSize *
													(this.options.pageNumber - 1)),
										(s.limit = this.options.pageSize),
										(0 !== s.limit &&
											this.options.pageSize !== this.options.formatAllRows()) ||
											delete s.limit)),
								this.options.search &&
									'server' === this.options.sidePagination &&
									this.options.searchable &&
									this.columns.filter(function (t) {
										return t.searchable;
									}).length)
							) {
								s.searchable = [];
								var l,
									c = r(this.columns);
								try {
									for (c.s(); !(l = c.n()).done; ) {
										var u = l.value;
										!u.checkbox &&
											u.searchable &&
											((this.options.visibleSearch && u.visible) ||
												!this.options.visibleSearch) &&
											s.searchable.push(u.field);
									}
								} catch (t) {
									c.e(t);
								} finally {
									c.f();
								}
							}
							if (
								(Al.isEmptyObject(this.filterColumnsPartial) ||
									(s.filter = JSON.stringify(this.filterColumnsPartial, null)),
								Al.extend(s, n || {}),
								!1 !==
									(o = Al.calculateObjectValue(
										this.options,
										this.options.queryParams,
										[s],
										o
									)))
							) {
								e || this.showLoading();
								var h = Al.extend(
									{},
									Al.calculateObjectValue(null, this.options.ajaxOptions),
									{
										type: this.options.method,
										url: this.options.url,
										data:
											'application/json' === this.options.contentType &&
											'post' === this.options.method
												? JSON.stringify(o)
												: o,
										cache: this.options.cache,
										contentType: this.options.contentType,
										dataType: this.options.dataType,
										success: function (t, n, r) {
											var o = Al.calculateObjectValue(
												i.options,
												i.options.responseHandler,
												[t, r],
												t
											);
											'client' === i.options.sidePagination &&
												i.options.paginationLoadMore &&
												(i._paginationLoaded = i.data.length === o.length),
												i.load(o),
												i.trigger('load-success', o, r && r.status, r),
												e || i.hideLoading(),
												'server' === i.options.sidePagination &&
													i.options.pageNumber > 1 &&
													o[i.options.totalField] > 0 &&
													!o[i.options.dataField].length &&
													i.updatePagination();
										},
										error: function (t) {
											if (t && 0 === t.status && i._xhrAbort) i._xhrAbort = !1;
											else {
												var n = [];
												'server' === i.options.sidePagination &&
													(((n = {})[i.options.totalField] = 0),
													(n[i.options.dataField] = [])),
													i.load(n),
													i.trigger('load-error', t && t.status, t),
													e || i.hideLoading();
											}
										},
									}
								);
								return (
									this.options.ajax
										? Al.calculateObjectValue(
												this,
												this.options.ajax,
												[h],
												null
											)
										: (this._xhr &&
												4 !== this._xhr.readyState &&
												((this._xhrAbort = !0), this._xhr.abort()),
											(this._xhr = t.ajax(h))),
									o
								);
							}
						}
					},
				},
				{
					key: 'initSearchText',
					value: function () {
						if (
							this.options.search &&
							((this.searchText = ''), '' !== this.options.searchText)
						) {
							var t = Al.getSearchInput(this);
							t.val(this.options.searchText),
								this.onSearch({ currentTarget: t, firedByInitSearchText: !0 });
						}
					},
				},
				{
					key: 'getCaret',
					value: function () {
						var e = this;
						this.$header.find('th').each(function (n, i) {
							t(i)
								.find('.sortable')
								.removeClass('desc asc')
								.addClass(
									t(i).data('field') === e.options.sortName
										? e.options.sortOrder
										: 'both'
								);
						});
					},
				},
				{
					key: 'updateSelected',
					value: function () {
						var e =
							this.$selectItem.filter(':enabled').length &&
							this.$selectItem.filter(':enabled').length ===
								this.$selectItem.filter(':enabled').filter(':checked').length;
						this.$selectAll.add(this.$selectAll_).prop('checked', e),
							this.$selectItem.each(function (e, n) {
								t(n)
									.closest('tr')
									[
										t(n).prop('checked') ? 'addClass' : 'removeClass'
									]('selected');
							});
					},
				},
				{
					key: 'updateRows',
					value: function () {
						var e = this;
						this.$selectItem.each(function (n, i) {
							e.data[t(i).data('index')][e.header.stateField] =
								t(i).prop('checked');
						});
					},
				},
				{
					key: 'resetRows',
					value: function () {
						var t,
							e = r(this.data);
						try {
							for (e.s(); !(t = e.n()).done; ) {
								var n = t.value;
								this.$selectAll.prop('checked', !1),
									this.$selectItem.prop('checked', !1),
									this.header.stateField && (n[this.header.stateField] = !1);
							}
						} catch (t) {
							e.e(t);
						} finally {
							e.f();
						}
						this.initHiddenRows();
					},
				},
				{
					key: 'trigger',
					value: function (n) {
						for (
							var i,
								r,
								o = ''.concat(n, '.bs.table'),
								a = arguments.length,
								s = new Array(a > 1 ? a - 1 : 0),
								l = 1;
							l < a;
							l++
						)
							s[l - 1] = arguments[l];
						(i = this.options)[e.EVENTS[o]].apply(i, [].concat(s, [this])),
							this.$el.trigger(t.Event(o, { sender: this }), s),
							(r = this.options).onAll.apply(
								r,
								[o].concat([].concat(s, [this]))
							),
							this.$el.trigger(t.Event('all.bs.table', { sender: this }), [
								o,
								s,
							]);
					},
				},
				{
					key: 'resetHeader',
					value: function () {
						var t = this;
						clearTimeout(this.timeoutId_),
							(this.timeoutId_ = setTimeout(
								function () {
									return t.fitHeader();
								},
								this.$el.is(':hidden') ? 100 : 0
							));
					},
				},
				{
					key: 'fitHeader',
					value: function () {
						var e = this;
						if (this.$el.is(':hidden'))
							this.timeoutId_ = setTimeout(function () {
								return e.fitHeader();
							}, 100);
						else {
							var n = this.$tableBody.get(0),
								i =
									this.hasScrollBar &&
									n.scrollHeight > n.clientHeight + this.$header.outerHeight()
										? Al.getScrollBarWidth()
										: 0;
							this.$el.css('margin-top', -this.$header.outerHeight());
							var r = this.$tableHeader.find(':focus');
							if (r.length > 0) {
								var o = r.parents('th');
								if (o.length > 0) {
									var a = o.attr('data-field');
									if (void 0 !== a) {
										var s = this.$header.find("[data-field='".concat(a, "']"));
										s.length > 0 && s.find(':input').addClass('focus-temp');
									}
								}
							}
							(this.$header_ = this.$header.clone(!0, !0)),
								(this.$selectAll_ = this.$header_.find('[name="btSelectAll"]')),
								this.$tableHeader
									.css('margin-right', i)
									.find('table')
									.css('width', this.$el.outerWidth())
									.html('')
									.attr('class', this.$el.attr('class'))
									.append(this.$header_),
								this.$tableLoading.css('width', this.$el.outerWidth());
							var l = t('.focus-temp:visible:eq(0)');
							l.length > 0 &&
								(l.focus(),
								this.$header.find('.focus-temp').removeClass('focus-temp')),
								this.$header.find('th[data-field]').each(function (n, i) {
									e.$header_
										.find(Al.sprintf('th[data-field="%s"]', t(i).data('field')))
										.data(t(i).data());
								});
							for (
								var c = this.getVisibleFields(),
									u = this.$header_.find('th'),
									h = this.$body
										.find('>tr:not(.no-records-found,.virtual-scroll-top)')
										.eq(0);
								h.length && h.find('>td[colspan]:not([colspan="1"])').length;

							)
								h = h.next();
							var f = h.find('> *').length;
							h.find('> *').each(function (n, i) {
								var r = t(i);
								if (
									Al.hasDetailViewIcon(e.options) &&
									((0 === n && 'right' !== e.options.detailViewAlign) ||
										(n === f - 1 && 'right' === e.options.detailViewAlign))
								) {
									var o = u.filter('.detail'),
										a = o.innerWidth() - o.find('.fht-cell').width();
									o.find('.fht-cell').width(r.innerWidth() - a);
								} else {
									var s = n - Al.getDetailViewIndexOffset(e.options),
										l = e.$header_.find(
											Al.sprintf('th[data-field="%s"]', c[s])
										);
									l.length > 1 && (l = t(u[r[0].cellIndex]));
									var h = l.innerWidth() - l.find('.fht-cell').width();
									l.find('.fht-cell').width(r.innerWidth() - h);
								}
							}),
								this.horizontalScroll(),
								this.trigger('post-header');
						}
					},
				},
				{
					key: 'initFooter',
					value: function () {
						if (this.options.showFooter && !this.options.cardView) {
							var t = this.getData(),
								e = [],
								n = '';
							Al.hasDetailViewIcon(this.options) &&
								(n = Al.h('th', { class: 'detail' }, [
									Al.h('div', { class: 'th-inner' }),
									Al.h('div', { class: 'fht-cell' }),
								])),
								n && 'right' !== this.options.detailViewAlign && e.push(n);
							var i,
								o = r(this.columns);
							try {
								for (o.s(); !(i = o.n()).done; ) {
									var a = i.value,
										l = this.footerData && this.footerData.length > 0;
									if (a.visible && (!l || a.field in this.footerData[0])) {
										if (this.options.cardView && !a.cardVisible) return;
										var u = Al.calculateObjectValue(
												null,
												a.footerStyle || this.options.footerStyle,
												[a]
											),
											h = (u && u.css) || {},
											f =
												(l &&
													this.footerData[0][
														'_'.concat(a.field, '_colspan')
													]) ||
												0,
											d = (l && this.footerData[0][a.field]) || '';
										(d = Al.calculateObjectValue(
											a,
											a.footerFormatter,
											[t, d],
											d
										)),
											e.push(
												Al.h(
													'th',
													{
														class: [a.class, u && u.classes],
														style: s(
															{
																'text-align': a.falign ? a.falign : a.align,
																'vertical-align': a.valign,
															},
															h
														),
														colspan: f || void 0,
													},
													[
														Al.h(
															'div',
															{ class: 'th-inner' },
															c(Al.htmlToNodes(d))
														),
														Al.h('div', { class: 'fht-cell' }),
													]
												)
											);
									}
								}
							} catch (t) {
								o.e(t);
							} finally {
								o.f();
							}
							n && 'right' === this.options.detailViewAlign && e.push(n),
								this.options.height ||
									this.$tableFooter.length ||
									(this.$el.append('<tfoot><tr></tr></tfoot>'),
									(this.$tableFooter = this.$el.find('tfoot'))),
								this.$tableFooter.find('tr').length ||
									this.$tableFooter.html(
										'<table><thead><tr></tr></thead></table>'
									),
								this.$tableFooter.find('tr').html(e),
								this.trigger('post-footer', this.$tableFooter);
						}
					},
				},
				{
					key: 'fitFooter',
					value: function () {
						var e = this;
						if (this.$el.is(':hidden'))
							setTimeout(function () {
								return e.fitFooter();
							}, 100);
						else {
							var n = this.$tableBody.get(0),
								i =
									this.hasScrollBar &&
									n.scrollHeight > n.clientHeight + this.$header.outerHeight()
										? Al.getScrollBarWidth()
										: 0;
							this.$tableFooter
								.css('margin-right', i)
								.find('table')
								.css('width', this.$el.outerWidth())
								.attr('class', this.$el.attr('class'));
							var r = this.$tableFooter.find('th'),
								o = this.$body.find('>tr:first-child:not(.no-records-found)');
							for (
								r.find('.fht-cell').width('auto');
								o.length && o.find('>td[colspan]:not([colspan="1"])').length;

							)
								o = o.next();
							var a = o.find('> *').length;
							o.find('> *').each(function (n, i) {
								var o = t(i);
								if (
									Al.hasDetailViewIcon(e.options) &&
									((0 === n && 'left' === e.options.detailViewAlign) ||
										(n === a - 1 && 'right' === e.options.detailViewAlign))
								) {
									var s = r.filter('.detail'),
										l = s.innerWidth() - s.find('.fht-cell').width();
									s.find('.fht-cell').width(o.innerWidth() - l);
								} else {
									var c = r.eq(n),
										u = c.innerWidth() - c.find('.fht-cell').width();
									c.find('.fht-cell').width(o.innerWidth() - u);
								}
							}),
								this.horizontalScroll();
						}
					},
				},
				{
					key: 'horizontalScroll',
					value: function () {
						var t = this;
						this.$tableBody.off('scroll').on('scroll', function () {
							var e = t.$tableBody.scrollLeft();
							t.options.showHeader &&
								t.options.height &&
								t.$tableHeader.scrollLeft(e),
								t.options.showFooter &&
									!t.options.cardView &&
									t.$tableFooter.scrollLeft(e),
								t.trigger('scroll-body', t.$tableBody);
						});
					},
				},
				{
					key: 'getVisibleFields',
					value: function () {
						var t,
							e = [],
							n = r(this.header.fields);
						try {
							for (n.s(); !(t = n.n()).done; ) {
								var i = t.value,
									o = this.columns[this.fieldsColumnsIndex[i]];
								o &&
									o.visible &&
									(!this.options.cardView || o.cardVisible) &&
									e.push(i);
							}
						} catch (t) {
							n.e(t);
						} finally {
							n.f();
						}
						return e;
					},
				},
				{
					key: 'initHiddenRows',
					value: function () {
						this.hiddenRows = [];
					},
				},
				{
					key: 'getOptions',
					value: function () {
						var t = Al.extend({}, this.options);
						return delete t.data, Al.extend(!0, {}, t);
					},
				},
				{
					key: 'refreshOptions',
					value: function (t) {
						Al.compareObjects(this.options, t, !0) ||
							((this.options = Al.extend(this.options, t)),
							this.trigger('refresh-options', this.options),
							this.destroy(),
							this.init());
					},
				},
				{
					key: 'getData',
					value: function (t) {
						var e = this,
							n = this.options.data;
						if (
							((!(
								this.searchText ||
								this.options.customSearch ||
								void 0 !== this.options.sortName ||
								this.enableCustomSort
							) &&
								Al.isEmptyObject(this.filterColumns) &&
								'function' !=
									typeof this.options.filterOptions.filterAlgorithm &&
								Al.isEmptyObject(this.filterColumnsPartial)) ||
								(t && t.unfiltered) ||
								(n = this.data),
							t && !t.includeHiddenRows)
						) {
							var i = this.getHiddenRows();
							n = n.filter(function (t) {
								return -1 === Al.findIndex(i, t);
							});
						}
						return (
							t &&
								t.useCurrentPage &&
								(n = n.slice(this.pageFrom - 1, this.pageTo)),
							t && t.formatted
								? n.map(function (t) {
										for (
											var n = {}, i = 0, r = Object.entries(t);
											i < r.length;
											i++
										) {
											var o = l(r[i], 2),
												a = o[0],
												s = o[1],
												c = e.columns[e.fieldsColumnsIndex[a]];
											c &&
												(n[a] = Al.calculateObjectValue(
													c,
													e.header.formatters[c.fieldIndex],
													[s, t, t.index, c.field],
													s
												));
										}
										return n;
									})
								: n
						);
					},
				},
				{
					key: 'getFooterData',
					value: function () {
						var t;
						return null !== (t = this.footerData) && void 0 !== t ? t : [];
					},
				},
				{
					key: 'getSelections',
					value: function () {
						var t = this;
						return (
							this.options.maintainMetaData ? this.options.data : this.data
						).filter(function (e) {
							return !0 === e[t.header.stateField];
						});
					},
				},
				{
					key: 'load',
					value: function (t) {
						var e,
							n = t;
						this.options.pagination &&
							'server' === this.options.sidePagination &&
							((this.options.totalRows = n[this.options.totalField]),
							(this.options.totalNotFiltered =
								n[this.options.totalNotFilteredField]),
							(this.footerData = n[this.options.footerField]
								? [n[this.options.footerField]]
								: void 0)),
							(e = this.options.fixedScroll || n.fixedScroll),
							(n = Array.isArray(n) ? n : n[this.options.dataField]),
							this.initData(n),
							this.initSearch(),
							this.initPagination(),
							this.initBody(e);
					},
				},
				{
					key: 'append',
					value: function (t) {
						this.initData(t, 'append'),
							this.initSearch(),
							this.initPagination(),
							this.initSort(),
							this.initBody(!0);
					},
				},
				{
					key: 'prepend',
					value: function (t) {
						this.initData(t, 'prepend'),
							this.initSearch(),
							this.initPagination(),
							this.initSort(),
							this.initBody(!0);
					},
				},
				{
					key: 'remove',
					value: function (t) {
						for (var e = 0, n = this.options.data.length - 1; n >= 0; n--) {
							var i = this.options.data[n],
								r = Al.getItemField(i, t.field, this.options.escape, i.escape);
							(void 0 === r && '$index' !== t.field) ||
								(((!i.hasOwnProperty(t.field) &&
									'$index' === t.field &&
									t.values.includes(n)) ||
									t.values.includes(r)) &&
									(e++, this.options.data.splice(n, 1)));
						}
						e &&
							('server' === this.options.sidePagination &&
								((this.options.totalRows -= e),
								(this.data = c(this.options.data))),
							this.initSearch(),
							this.initPagination(),
							this.initSort(),
							this.initBody(!0));
					},
				},
				{
					key: 'removeAll',
					value: function () {
						this.options.data.length > 0 &&
							(this.data.splice(0, this.data.length),
							this.options.data.splice(0, this.options.data.length),
							this.initSearch(),
							this.initPagination(),
							this.initBody(!0));
					},
				},
				{
					key: 'insertRow',
					value: function (t) {
						if (t.hasOwnProperty('index') && t.hasOwnProperty('row')) {
							var e = this.data[t.index],
								n = this.options.data.indexOf(e);
							this.data.splice(t.index, 0, t.row),
								this.options.data.splice(n, 0, t.row),
								this.initSearch(),
								this.initPagination(),
								this.initSort(),
								this.initBody(!0);
						}
					},
				},
				{
					key: 'updateRow',
					value: function (t) {
						var e,
							n = r(Array.isArray(t) ? t : [t]);
						try {
							for (n.s(); !(e = n.n()).done; ) {
								var i = e.value;
								if (i.hasOwnProperty('index') && i.hasOwnProperty('row')) {
									var o = this.data[i.index],
										a = this.options.data.indexOf(o);
									i.hasOwnProperty('replace') && i.replace
										? ((this.data[i.index] = i.row),
											(this.options.data[a] = i.row))
										: (Al.extend(this.data[i.index], i.row),
											Al.extend(this.options.data[a], i.row));
								}
							}
						} catch (t) {
							n.e(t);
						} finally {
							n.f();
						}
						this.initSearch(),
							this.initPagination(),
							this.initSort(),
							this.initBody(!0);
					},
				},
				{
					key: 'getRowByUniqueId',
					value: function (t) {
						var e,
							n,
							i = this.options.uniqueId,
							r = t,
							o = null;
						for (e = this.options.data.length - 1; e >= 0; e--) {
							n = this.options.data[e];
							var a = Al.getItemField(n, i, this.options.escape, n.escape);
							if (
								void 0 !== a &&
								('string' == typeof a
									? (r = t.toString())
									: 'number' == typeof a &&
										(Number(a) === a && a % 1 == 0
											? (r = parseInt(t, 10))
											: a === Number(a) && 0 !== a && (r = parseFloat(t))),
								a === r)
							) {
								o = n;
								break;
							}
						}
						return o;
					},
				},
				{
					key: 'updateByUniqueId',
					value: function (t) {
						var e,
							n = null,
							i = r(Array.isArray(t) ? t : [t]);
						try {
							for (i.s(); !(e = i.n()).done; ) {
								var o = e.value;
								if (o.hasOwnProperty('id') && o.hasOwnProperty('row')) {
									var a = this.options.data.indexOf(
										this.getRowByUniqueId(o.id)
									);
									-1 !== a &&
										(o.hasOwnProperty('replace') && o.replace
											? (this.options.data[a] = o.row)
											: Al.extend(this.options.data[a], o.row),
										(n = o.id));
								}
							}
						} catch (t) {
							i.e(t);
						} finally {
							i.f();
						}
						this.initSearch(),
							this.initPagination(),
							this.initSort(),
							this.initBody(!0, n);
					},
				},
				{
					key: 'removeByUniqueId',
					value: function (t) {
						var e = this.options.data.length,
							n = this.getRowByUniqueId(t);
						n && this.options.data.splice(this.options.data.indexOf(n), 1),
							e !== this.options.data.length &&
								('server' === this.options.sidePagination &&
									((this.options.totalRows -= 1),
									(this.data = c(this.options.data))),
								this.initSearch(),
								this.initPagination(),
								this.initBody(!0));
					},
				},
				{
					key: '_updateCellOnly',
					value: function (e, n) {
						var i = this.initRow(this.data[n], n),
							r = this.getVisibleFields().indexOf(e);
						-1 !== r &&
							((r += Al.getDetailViewIndexOffset(this.options)),
							this.$body
								.find('>tr[data-index='.concat(n, ']'))
								.find('>td:eq('.concat(r, ')'))
								.replaceWith(t(i).find('>td:eq('.concat(r, ')'))),
							this.initBodyEvent(),
							this.initFooter(),
							this.resetView(),
							this.updateSelected());
					},
				},
				{
					key: 'updateCell',
					value: function (t) {
						if (
							t.hasOwnProperty('index') &&
							t.hasOwnProperty('field') &&
							t.hasOwnProperty('value')
						) {
							var e = this.data[t.index],
								n = this.options.data.indexOf(e);
							(this.data[t.index][t.field] = t.value),
								(this.options.data[n][t.field] = t.value),
								!1 !== t.reinit
									? (this.initSort(), this.initBody(!0))
									: this._updateCellOnly(t.field, t.index);
						}
					},
				},
				{
					key: 'updateCellByUniqueId',
					value: function (t) {
						var e = this;
						(Array.isArray(t) ? t : [t]).forEach(function (t) {
							var n = t.id,
								i = t.field,
								r = t.value,
								o = e.options.data.indexOf(e.getRowByUniqueId(n));
							-1 !== o && (e.options.data[o][i] = r);
						}),
							!1 !== t.reinit
								? (this.initSort(), this.initBody(!0))
								: this._updateCellOnly(
										t.field,
										this.options.data.indexOf(this.getRowByUniqueId(t.id))
									);
					},
				},
				{
					key: 'showRow',
					value: function (t) {
						this._toggleRow(t, !0);
					},
				},
				{
					key: 'hideRow',
					value: function (t) {
						this._toggleRow(t, !1);
					},
				},
				{
					key: '_toggleRow',
					value: function (t, e) {
						var n;
						if (
							(t.hasOwnProperty('index')
								? (n = this.getData()[t.index])
								: t.hasOwnProperty('uniqueId') &&
									(n = this.getRowByUniqueId(t.uniqueId)),
							n)
						) {
							var i = Al.findIndex(this.hiddenRows, n);
							e || -1 !== i
								? e && i > -1 && this.hiddenRows.splice(i, 1)
								: this.hiddenRows.push(n),
								this.initBody(!0),
								this.initPagination();
						}
					},
				},
				{
					key: 'getHiddenRows',
					value: function (t) {
						if (t)
							return (
								this.initHiddenRows(),
								this.initBody(!0),
								void this.initPagination()
							);
						var e,
							n = [],
							i = r(this.getData());
						try {
							for (i.s(); !(e = i.n()).done; ) {
								var o = e.value;
								this.hiddenRows.includes(o) && n.push(o);
							}
						} catch (t) {
							i.e(t);
						} finally {
							i.f();
						}
						return (this.hiddenRows = n), n;
					},
				},
				{
					key: 'showColumn',
					value: function (t) {
						var e = this;
						(Array.isArray(t) ? t : [t]).forEach(function (t) {
							e._toggleColumn(e.fieldsColumnsIndex[t], !0, !0);
						});
					},
				},
				{
					key: 'hideColumn',
					value: function (t) {
						var e = this;
						(Array.isArray(t) ? t : [t]).forEach(function (t) {
							e._toggleColumn(e.fieldsColumnsIndex[t], !1, !0);
						});
					},
				},
				{
					key: '_toggleColumn',
					value: function (t, e, n) {
						if (
							void 0 !== t &&
							this.columns[t].visible !== e &&
							((this.columns[t].visible = e),
							this.initHeader(),
							this.initSearch(),
							this.initPagination(),
							this.initBody(),
							this.options.showColumns)
						) {
							var i = this.$toolbar
								.find('.keep-open input:not(".toggle-all")')
								.prop('disabled', !1);
							n && i.filter(Al.sprintf('[value="%s"]', t)).prop('checked', e),
								i.filter(':checked').length <=
									this.options.minimumCountColumns &&
									i.filter(':checked').prop('disabled', !0);
						}
					},
				},
				{
					key: 'getVisibleColumns',
					value: function () {
						var t = this;
						return this.columns.filter(function (e) {
							return e.visible && !t.isSelectionColumn(e);
						});
					},
				},
				{
					key: 'getHiddenColumns',
					value: function () {
						return this.columns.filter(function (t) {
							return !t.visible;
						});
					},
				},
				{
					key: 'isSelectionColumn',
					value: function (t) {
						return t.radio || t.checkbox;
					},
				},
				{
					key: 'showAllColumns',
					value: function () {
						this._toggleAllColumns(!0);
					},
				},
				{
					key: 'hideAllColumns',
					value: function () {
						this._toggleAllColumns(!1);
					},
				},
				{
					key: '_toggleAllColumns',
					value: function (e) {
						var n,
							i = this,
							o = r(this.columns.slice().reverse());
						try {
							for (o.s(); !(n = o.n()).done; ) {
								var a = n.value;
								if (a.switchable) {
									if (
										!e &&
										this.options.showColumns &&
										this.getVisibleColumns().filter(function (t) {
											return t.switchable;
										}).length === this.options.minimumCountColumns
									)
										continue;
									a.visible = e;
								}
							}
						} catch (t) {
							o.e(t);
						} finally {
							o.f();
						}
						if (
							(this.initHeader(),
							this.initSearch(),
							this.initPagination(),
							this.initBody(),
							this.options.showColumns)
						) {
							var s = this.$toolbar
								.find('.keep-open input[type="checkbox"]:not(".toggle-all")')
								.prop('disabled', !1);
							e
								? s.prop('checked', e)
								: s
										.get()
										.reverse()
										.forEach(function (n) {
											s.filter(':checked').length >
												i.options.minimumCountColumns &&
												t(n).prop('checked', e);
										}),
								s.filter(':checked').length <=
									this.options.minimumCountColumns &&
									s.filter(':checked').prop('disabled', !0);
						}
					},
				},
				{
					key: 'mergeCells',
					value: function (t) {
						var e,
							n,
							i = t.index,
							r = this.getVisibleFields().indexOf(t.field),
							o = +t.rowspan || 1,
							a = +t.colspan || 1,
							s = this.$body.find('>tr[data-index]');
						r += Al.getDetailViewIndexOffset(this.options);
						var l = s.eq(i).find('>td').eq(r);
						if (!(i < 0 || r < 0 || i >= this.data.length)) {
							for (e = i; e < i + o; e++)
								for (n = r; n < r + a; n++) s.eq(e).find('>td').eq(n).hide();
							l.attr('rowspan', o).attr('colspan', a).show();
						}
					},
				},
				{
					key: 'checkAll',
					value: function () {
						this._toggleCheckAll(!0);
					},
				},
				{
					key: 'uncheckAll',
					value: function () {
						this._toggleCheckAll(!1);
					},
				},
				{
					key: '_toggleCheckAll',
					value: function (t) {
						var e = this.getSelections();
						this.$selectAll.add(this.$selectAll_).prop('checked', t),
							this.$selectItem.filter(':enabled').prop('checked', t),
							this.updateRows(),
							this.updateSelected();
						var n = this.getSelections();
						t
							? this.trigger('check-all', n, e)
							: this.trigger('uncheck-all', n, e);
					},
				},
				{
					key: 'checkInvert',
					value: function () {
						var e = this.$selectItem.filter(':enabled'),
							n = e.filter(':checked');
						e.each(function (e, n) {
							t(n).prop('checked', !t(n).prop('checked'));
						}),
							this.updateRows(),
							this.updateSelected(),
							this.trigger('uncheck-some', n),
							(n = this.getSelections()),
							this.trigger('check-some', n);
					},
				},
				{
					key: 'check',
					value: function (t) {
						this._toggleCheck(!0, t);
					},
				},
				{
					key: 'uncheck',
					value: function (t) {
						this._toggleCheck(!1, t);
					},
				},
				{
					key: '_toggleCheck',
					value: function (t, e) {
						var n = this.$selectItem.filter('[data-index="'.concat(e, '"]')),
							i = this.data[e];
						if (
							n.is(':radio') ||
							this.options.singleSelect ||
							(this.options.multipleSelectRow &&
								!this.multipleSelectRowCtrlKey &&
								!this.multipleSelectRowShiftKey)
						) {
							var o,
								a = r(this.options.data);
							try {
								for (a.s(); !(o = a.n()).done; ) {
									o.value[this.header.stateField] = !1;
								}
							} catch (t) {
								a.e(t);
							} finally {
								a.f();
							}
							this.$selectItem.filter(':checked').not(n).prop('checked', !1);
						}
						if (
							((i[this.header.stateField] = t), this.options.multipleSelectRow)
						) {
							if (
								this.multipleSelectRowShiftKey &&
								this.multipleSelectRowLastSelectedIndex >= 0
							)
								for (
									var s = l(
											this.multipleSelectRowLastSelectedIndex < e
												? [this.multipleSelectRowLastSelectedIndex, e]
												: [e, this.multipleSelectRowLastSelectedIndex],
											2
										),
										c = s[0],
										u = s[1],
										h = c + 1;
									h < u;
									h++
								)
									(this.data[h][this.header.stateField] = !0),
										this.$selectItem
											.filter('[data-index="'.concat(h, '"]'))
											.prop('checked', !0);
							(this.multipleSelectRowCtrlKey = !1),
								(this.multipleSelectRowShiftKey = !1),
								(this.multipleSelectRowLastSelectedIndex = t ? e : -1);
						}
						n.prop('checked', t),
							this.updateSelected(),
							this.trigger(t ? 'check' : 'uncheck', this.data[e], n);
					},
				},
				{
					key: 'checkBy',
					value: function (t) {
						this._toggleCheckBy(!0, t);
					},
				},
				{
					key: 'uncheckBy',
					value: function (t) {
						this._toggleCheckBy(!1, t);
					},
				},
				{
					key: '_toggleCheckBy',
					value: function (t, e) {
						var n = this;
						if (e.hasOwnProperty('field') && e.hasOwnProperty('values')) {
							var i = [];
							this.data.forEach(function (r, o) {
								if (!r.hasOwnProperty(e.field)) return !1;
								if (e.values.includes(r[e.field])) {
									var a = n.$selectItem
											.filter(':enabled')
											.filter(Al.sprintf('[data-index="%s"]', o)),
										s =
											!!e.hasOwnProperty('onlyCurrentPage') &&
											e.onlyCurrentPage;
									if (
										!(a = t ? a.not(':checked') : a.filter(':checked'))
											.length &&
										s
									)
										return;
									a.prop('checked', t),
										(r[n.header.stateField] = t),
										i.push(r),
										n.trigger(t ? 'check' : 'uncheck', r, a);
								}
							}),
								this.updateSelected(),
								this.trigger(t ? 'check-some' : 'uncheck-some', i);
						}
					},
				},
				{
					key: 'refresh',
					value: function (t) {
						t && t.url && (this.options.url = t.url),
							t && t.pageNumber && (this.options.pageNumber = t.pageNumber),
							t && t.pageSize && (this.options.pageSize = t.pageSize),
							t &&
								t.query &&
								(this.options.url = Al.addQueryToUrl(
									this.options.url,
									t.query
								)),
							this.trigger('refresh', this.initServer(t && t.silent));
					},
				},
				{
					key: 'destroy',
					value: function () {
						this.$el.insertBefore(this.$container),
							t(this.options.toolbar).insertBefore(this.$el),
							this.$container.next().remove(),
							this.$container.remove(),
							this.$el
								.html(this.$el_.html())
								.css('margin-top', '0')
								.attr('class', this.$el_.attr('class') || '');
						var e = Al.getEventName(
							'resize.bootstrap-table',
							this.$el.attr('id')
						);
						t(window).off(e);
					},
				},
				{
					key: 'resetView',
					value: function (t) {
						var e = 0;
						if (
							(t && t.height && (this.options.height = t.height),
							this.$tableContainer.toggleClass(
								'has-card-view',
								this.options.cardView
							),
							this.options.height)
						) {
							var n = this.$tableBody.get(0);
							this.hasScrollBar = n.scrollWidth > n.clientWidth;
						}
						if (
							(!this.options.cardView &&
							this.options.showHeader &&
							this.options.height
								? (this.$tableHeader.show(),
									this.resetHeader(),
									(e += this.$header.outerHeight(!0) + 1))
								: (this.$tableHeader.hide(), this.trigger('post-header')),
							!this.options.cardView &&
								this.options.showFooter &&
								(this.$tableFooter.show(),
								this.fitFooter(),
								this.options.height &&
									(e += this.$tableFooter.outerHeight(!0))),
							this.$container.hasClass('fullscreen'))
						)
							this.$tableContainer.css('height', ''),
								this.$tableContainer.css('width', '');
						else if (this.options.height) {
							this.$tableBorder &&
								(this.$tableBorder.css('width', ''),
								this.$tableBorder.css('height', ''));
							var i = this.$toolbar.outerHeight(!0),
								r = this.$pagination.outerHeight(!0),
								o = this.options.height - i - r,
								a = this.$tableBody.find('>table'),
								s = a.outerHeight();
							if (
								(this.$tableContainer.css('height', ''.concat(o, 'px')),
								this.$tableBorder && a.is(':visible'))
							) {
								var l = o - s - 2;
								this.hasScrollBar && (l -= Al.getScrollBarWidth()),
									this.$tableBorder.css(
										'width',
										''.concat(a.outerWidth(), 'px')
									),
									this.$tableBorder.css('height', ''.concat(l, 'px'));
							}
						}
						this.options.cardView
							? (this.$el.css('margin-top', '0'),
								this.$tableContainer.css('padding-bottom', '0'),
								this.$tableFooter.hide())
							: (this.getCaret(),
								this.$tableContainer.css('padding-bottom', ''.concat(e, 'px'))),
							this.trigger('reset-view');
					},
				},
				{
					key: 'showLoading',
					value: function () {
						this.$tableLoading.toggleClass('open', !0);
						var t = this.options.loadingFontSize;
						'auto' === this.options.loadingFontSize &&
							((t = 0.04 * this.$tableLoading.width()),
							(t = Math.max(12, t)),
							(t = Math.min(32, t)),
							(t = ''.concat(t, 'px'))),
							this.$tableLoading.find('.loading-text').css('font-size', t);
					},
				},
				{
					key: 'hideLoading',
					value: function () {
						this.$tableLoading.toggleClass('open', !1);
					},
				},
				{
					key: 'togglePagination',
					value: function () {
						this.options.pagination = !this.options.pagination;
						var t = this.options.showButtonIcons
								? this.options.pagination
									? this.options.icons.paginationSwitchDown
									: this.options.icons.paginationSwitchUp
								: '',
							e = this.options.showButtonText
								? this.options.pagination
									? this.options.formatPaginationSwitchUp()
									: this.options.formatPaginationSwitchDown()
								: '';
						this.$toolbar
							.find('button[name="paginationSwitch"]')
							.html(
								''
									.concat(
										Al.sprintf(
											this.constants.html.icon,
											this.options.iconsPrefix,
											t
										),
										' '
									)
									.concat(e)
							),
							this.updatePagination(),
							this.trigger('toggle-pagination', this.options.pagination);
					},
				},
				{
					key: 'toggleFullscreen',
					value: function () {
						this.$el.closest('.bootstrap-table').toggleClass('fullscreen'),
							this.resetView();
					},
				},
				{
					key: 'toggleView',
					value: function () {
						(this.options.cardView = !this.options.cardView), this.initHeader();
						var t = this.options.showButtonIcons
								? this.options.cardView
									? this.options.icons.toggleOn
									: this.options.icons.toggleOff
								: '',
							e = this.options.cardView
								? this.options.formatToggleOff()
								: this.options.formatToggleOn();
						this.$toolbar
							.find('button[name="toggle"]')
							.html(
								''
									.concat(
										Al.sprintf(
											this.constants.html.icon,
											this.options.iconsPrefix,
											t
										),
										' '
									)
									.concat(this.options.showButtonText ? e : '')
							)
							.attr('aria-label', e)
							.attr(this.options.buttonsAttributeTitle, e),
							this.initBody(),
							this.trigger('toggle', this.options.cardView);
					},
				},
				{
					key: 'resetSearch',
					value: function (t) {
						var e = Al.getSearchInput(this),
							n = t || '';
						e.val(n),
							(this.searchText = n),
							this.onSearch({ currentTarget: e }, !1);
					},
				},
				{
					key: 'filterBy',
					value: function (t, e) {
						(this.filterOptions = Al.isEmptyObject(e)
							? this.options.filterOptions
							: Al.extend(this.options.filterOptions, e)),
							(this.filterColumns = Al.isEmptyObject(t) ? {} : t),
							(this.options.pageNumber = 1),
							this.initSearch(),
							this.updatePagination();
					},
				},
				{
					key: 'scrollTo',
					value: function (e) {
						var n = { unit: 'px', value: 0 };
						'object' === h(e)
							? (n = Object.assign(n, e))
							: 'string' == typeof e && 'bottom' === e
								? (n.value = this.$tableBody[0].scrollHeight)
								: ('string' != typeof e && 'number' != typeof e) ||
									(n.value = e);
						var i = n.value;
						'rows' === n.unit &&
							((i = 0),
							this.$body
								.find('> tr:lt('.concat(n.value, ')'))
								.each(function (e, n) {
									i += t(n).outerHeight(!0);
								})),
							this.$tableBody.scrollTop(i);
					},
				},
				{
					key: 'getScrollPosition',
					value: function () {
						return this.$tableBody.scrollTop();
					},
				},
				{
					key: 'selectPage',
					value: function (t) {
						t > 0 &&
							t <= this.options.totalPages &&
							((this.options.pageNumber = t), this.updatePagination());
					},
				},
				{
					key: 'prevPage',
					value: function () {
						this.options.pageNumber > 1 &&
							(this.options.pageNumber--, this.updatePagination());
					},
				},
				{
					key: 'nextPage',
					value: function () {
						this.options.pageNumber < this.options.totalPages &&
							(this.options.pageNumber++, this.updatePagination());
					},
				},
				{
					key: 'toggleDetailView',
					value: function (t, e) {
						this.$body
							.find(Al.sprintf('> tr[data-index="%s"]', t))
							.next()
							.is('tr.detail-view')
							? this.collapseRow(t)
							: this.expandRow(t, e),
							this.resetView();
					},
				},
				{
					key: 'expandRow',
					value: function (t, e) {
						var n = this.data[t],
							i = this.$body.find(
								Al.sprintf('> tr[data-index="%s"][data-has-detail-view]', t)
							);
						if (
							(this.options.detailViewIcon &&
								i
									.find('a.detail-icon')
									.html(
										Al.sprintf(
											this.constants.html.icon,
											this.options.iconsPrefix,
											this.options.icons.detailClose
										)
									),
							!i.next().is('tr.detail-view'))
						) {
							i.after(
								Al.sprintf(
									'<tr class="detail-view"><td colspan="%s"></td></tr>',
									i.children('td').length
								)
							);
							var r = i.next().find('td'),
								o = e || this.options.detailFormatter,
								a = Al.calculateObjectValue(this.options, o, [t, n, r], '');
							1 === r.length && r.append(a),
								this.trigger('expand-row', t, n, r);
						}
					},
				},
				{
					key: 'expandRowByUniqueId',
					value: function (t) {
						var e = this.getRowByUniqueId(t);
						e && this.expandRow(this.data.indexOf(e));
					},
				},
				{
					key: 'collapseRow',
					value: function (t) {
						var e = this.data[t],
							n = this.$body.find(
								Al.sprintf('> tr[data-index="%s"][data-has-detail-view]', t)
							);
						n.next().is('tr.detail-view') &&
							(this.options.detailViewIcon &&
								n
									.find('a.detail-icon')
									.html(
										Al.sprintf(
											this.constants.html.icon,
											this.options.iconsPrefix,
											this.options.icons.detailOpen
										)
									),
							this.trigger('collapse-row', t, e, n.next()),
							n.next().remove());
					},
				},
				{
					key: 'collapseRowByUniqueId',
					value: function (t) {
						var e = this.getRowByUniqueId(t);
						e && this.collapseRow(this.data.indexOf(e));
					},
				},
				{
					key: 'expandAllRows',
					value: function () {
						for (
							var e = this.$body.find('> tr[data-index][data-has-detail-view]'),
								n = 0;
							n < e.length;
							n++
						)
							this.expandRow(t(e[n]).data('index'));
					},
				},
				{
					key: 'collapseAllRows',
					value: function () {
						for (
							var e = this.$body.find('> tr[data-index][data-has-detail-view]'),
								n = 0;
							n < e.length;
							n++
						)
							this.collapseRow(t(e[n]).data('index'));
					},
				},
				{
					key: 'updateColumnTitle',
					value: function (e) {
						e.hasOwnProperty('field') &&
							e.hasOwnProperty('title') &&
							((this.columns[this.fieldsColumnsIndex[e.field]].title =
								this.options.escape && this.options.escapeTitle
									? Al.escapeHTML(e.title)
									: e.title),
							this.columns[this.fieldsColumnsIndex[e.field]].visible &&
								(this.$header.find('th[data-field]').each(function (n, i) {
									if (t(i).data('field') === e.field)
										return t(t(i).find('.th-inner')[0]).html(e.title), !1;
								}),
								this.resetView()));
					},
				},
				{
					key: 'updateFormatText',
					value: function (t, e) {
						/^format/.test(t) &&
							this.options[t] &&
							('string' == typeof e
								? (this.options[t] = function () {
										return e;
									})
								: 'function' == typeof e && (this.options[t] = e),
							this.initToolbar(),
							this.initPagination(),
							this.initBody());
					},
				},
			]);
		})();
	return (
		(Dl.VERSION = Nl.VERSION),
		(Dl.DEFAULTS = Nl.DEFAULTS),
		(Dl.LOCALES = Nl.LOCALES),
		(Dl.COLUMN_DEFAULTS = Nl.COLUMN_DEFAULTS),
		(Dl.METHODS = Nl.METHODS),
		(Dl.EVENTS = Nl.EVENTS),
		(t.BootstrapTable = Dl),
		(t.fn.bootstrapTable = function (e) {
			for (
				var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1;
				r < n;
				r++
			)
				i[r - 1] = arguments[r];
			var o;
			return (
				this.each(function (n, r) {
					var a = t(r).data('bootstrap.table');
					if ('string' == typeof e) {
						var s;
						if (!Nl.METHODS.includes(e))
							throw new Error('Unknown method: '.concat(e));
						if (!a) return;
						return (
							(o = (s = a)[e].apply(s, i)),
							void ('destroy' === e && t(r).removeData('bootstrap.table'))
						);
					}
					if (a)
						console.warn('You cannot initialize the table more than once!');
					else {
						var l = Al.extend(
							!0,
							{},
							Dl.DEFAULTS,
							t(r).data(),
							'object' === h(e) && e
						);
						(a = new t.BootstrapTable(r, l)),
							t(r).data('bootstrap.table', a),
							a.init();
					}
				}),
				void 0 === o ? this : o
			);
		}),
		(t.fn.bootstrapTable.Constructor = Dl),
		(t.fn.bootstrapTable.theme = Nl.THEME),
		(t.fn.bootstrapTable.VERSION = Nl.VERSION),
		(t.fn.bootstrapTable.defaults = Dl.DEFAULTS),
		(t.fn.bootstrapTable.columnDefaults = Dl.COLUMN_DEFAULTS),
		(t.fn.bootstrapTable.events = Dl.EVENTS),
		(t.fn.bootstrapTable.locales = Dl.LOCALES),
		(t.fn.bootstrapTable.methods = Dl.METHODS),
		(t.fn.bootstrapTable.utils = Al),
		t(function () {
			t('[data-toggle="table"]').bootstrapTable();
		}),
		Dl
	);
});
/*!
 * Bootstrap-select v1.14.0 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2020 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */

(function ($) {
	'use strict';

	var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];

	var uriAttrs = [
		'background',
		'cite',
		'href',
		'itemtype',
		'longdesc',
		'poster',
		'src',
		'xlink:href',
	];

	var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;

	var DefaultWhitelist = {
		// Global attributes allowed on any supplied element below.
		'*': [
			'class',
			'dir',
			'id',
			'lang',
			'role',
			'tabindex',
			'style',
			ARIA_ATTRIBUTE_PATTERN,
		],
		a: ['target', 'href', 'title', 'rel'],
		area: [],
		b: [],
		br: [],
		col: [],
		code: [],
		div: [],
		em: [],
		hr: [],
		h1: [],
		h2: [],
		h3: [],
		h4: [],
		h5: [],
		h6: [],
		i: [],
		img: ['src', 'alt', 'title', 'width', 'height'],
		li: [],
		ol: [],
		p: [],
		pre: [],
		s: [],
		small: [],
		span: [],
		sub: [],
		sup: [],
		strong: [],
		u: [],
		ul: [],
	};

	/**
	 * A pattern that recognizes a commonly useful subset of URLs that are safe.
	 *
	 * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
	 */
	var SAFE_URL_PATTERN =
		/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;

	/**
	 * A pattern that matches safe data URLs. Only matches image, video and audio types.
	 *
	 * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
	 */
	var DATA_URL_PATTERN =
		/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

	var ParseableAttributes = ['title', 'placeholder']; // attributes to use as settings, can add others in the future

	function allowedAttribute(attr, allowedAttributeList) {
		var attrName = attr.nodeName.toLowerCase();

		if ($.inArray(attrName, allowedAttributeList) !== -1) {
			if ($.inArray(attrName, uriAttrs) !== -1) {
				return Boolean(
					attr.nodeValue.match(SAFE_URL_PATTERN) ||
						attr.nodeValue.match(DATA_URL_PATTERN)
				);
			}

			return true;
		}

		var regExp = $(allowedAttributeList).filter(function (index, value) {
			return value instanceof RegExp;
		});

		// Check if a regular expression validates the attribute.
		for (var i = 0, l = regExp.length; i < l; i++) {
			if (attrName.match(regExp[i])) {
				return true;
			}
		}

		return false;
	}

	function sanitizeHtml(unsafeElements, whiteList, sanitizeFn) {
		if (sanitizeFn && typeof sanitizeFn === 'function') {
			return sanitizeFn(unsafeElements);
		}

		var whitelistKeys = Object.keys(whiteList);

		for (var i = 0, len = unsafeElements.length; i < len; i++) {
			var elements = unsafeElements[i].querySelectorAll('*');

			for (var j = 0, len2 = elements.length; j < len2; j++) {
				var el = elements[j];
				var elName = el.nodeName.toLowerCase();

				if (whitelistKeys.indexOf(elName) === -1) {
					el.parentNode.removeChild(el);

					continue;
				}

				var attributeList = [].slice.call(el.attributes);
				var whitelistedAttributes = [].concat(
					whiteList['*'] || [],
					whiteList[elName] || []
				);

				for (var k = 0, len3 = attributeList.length; k < len3; k++) {
					var attr = attributeList[k];

					if (!allowedAttribute(attr, whitelistedAttributes)) {
						el.removeAttribute(attr.nodeName);
					}
				}
			}
		}
	}

	function getAttributesObject($select) {
		var attributesObject = {},
			attrVal;

		ParseableAttributes.forEach(function (item) {
			attrVal = $select.attr(item);
			if (attrVal) attributesObject[item] = attrVal;
		});

		// for backwards compatibility
		// (using title as placeholder is deprecated - remove in v2.0.0)
		if (!attributesObject.placeholder && attributesObject.title) {
			attributesObject.placeholder = attributesObject.title;
		}

		return attributesObject;
	}

	// Polyfill for browsers with no classList support
	// Remove in v2
	if (!('classList' in document.createElement('_'))) {
		(function (view) {
			if (!('Element' in view)) return;

			var classListProp = 'classList',
				protoProp = 'prototype',
				elemCtrProto = view.Element[protoProp],
				objCtr = Object,
				classListGetter = function () {
					var $elem = $(this);

					return {
						add: function (classes) {
							classes = Array.prototype.slice.call(arguments).join(' ');
							return $elem.addClass(classes);
						},
						remove: function (classes) {
							classes = Array.prototype.slice.call(arguments).join(' ');
							return $elem.removeClass(classes);
						},
						toggle: function (classes, force) {
							return $elem.toggleClass(classes, force);
						},
						contains: function (classes) {
							return $elem.hasClass(classes);
						},
					};
				};

			if (objCtr.defineProperty) {
				var classListPropDesc = {
					get: classListGetter,
					enumerable: true,
					configurable: true,
				};
				try {
					objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
				} catch (ex) {
					// IE 8 doesn't support enumerable:true
					// adding undefined to fight this issue https://github.com/eligrey/classList.js/issues/36
					// modernie IE8-MSW7 machine has IE8 8.0.6001.18702 and is affected
					if (ex.number === undefined || ex.number === -0x7ff5ec54) {
						classListPropDesc.enumerable = false;
						objCtr.defineProperty(
							elemCtrProto,
							classListProp,
							classListPropDesc
						);
					}
				}
			} else if (objCtr[protoProp].__defineGetter__) {
				elemCtrProto.__defineGetter__(classListProp, classListGetter);
			}
		})(window);
	}

	var testElement = document.createElement('_');

	testElement.classList.add('c1', 'c2');

	if (!testElement.classList.contains('c2')) {
		var _add = DOMTokenList.prototype.add,
			_remove = DOMTokenList.prototype.remove;

		DOMTokenList.prototype.add = function () {
			Array.prototype.forEach.call(arguments, _add.bind(this));
		};

		DOMTokenList.prototype.remove = function () {
			Array.prototype.forEach.call(arguments, _remove.bind(this));
		};
	}

	testElement.classList.toggle('c3', false);

	// Polyfill for IE 10 and Firefox <24, where classList.toggle does not
	// support the second argument.
	if (testElement.classList.contains('c3')) {
		var _toggle = DOMTokenList.prototype.toggle;

		DOMTokenList.prototype.toggle = function (token, force) {
			if (1 in arguments && !this.contains(token) === !force) {
				return force;
			} else {
				return _toggle.call(this, token);
			}
		};
	}

	testElement = null;

	// Polyfill for IE (remove in v2)
	Object.values =
		typeof Object.values === 'function'
			? Object.values
			: function (obj) {
					return Object.keys(obj).map(function (key) {
						return obj[key];
					});
				};

	// shallow array comparison
	function isEqual(array1, array2) {
		return (
			array1.length === array2.length &&
			array1.every(function (element, index) {
				return element === array2[index];
			})
		);
	}

	// <editor-fold desc="Shims">
	if (!String.prototype.startsWith) {
		(function () {
			'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
			var toString = {}.toString;
			var startsWith = function (search) {
				if (this == null) {
					throw new TypeError();
				}
				var string = String(this);
				if (search && toString.call(search) == '[object RegExp]') {
					throw new TypeError();
				}
				var stringLength = string.length;
				var searchString = String(search);
				var searchLength = searchString.length;
				var position = arguments.length > 1 ? arguments[1] : undefined;
				// `ToInteger`
				var pos = position ? Number(position) : 0;
				if (pos != pos) {
					// better `isNaN`
					pos = 0;
				}
				var start = Math.min(Math.max(pos, 0), stringLength);
				// Avoid the `indexOf` call if no match is possible
				if (searchLength + start > stringLength) {
					return false;
				}
				var index = -1;
				while (++index < searchLength) {
					if (
						string.charCodeAt(start + index) != searchString.charCodeAt(index)
					) {
						return false;
					}
				}
				return true;
			};
			if (Object.defineProperty) {
				Object.defineProperty(String.prototype, 'startsWith', {
					value: startsWith,
					configurable: true,
					writable: true,
				});
			} else {
				String.prototype.startsWith = startsWith;
			}
		})();
	}

	function toKebabCase(str) {
		return str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, function ($, ofs) {
			return (ofs ? '-' : '') + $.toLowerCase();
		});
	}

	function getSelectedOptions() {
		var options = this.selectpicker.main.data;

		if (this.options.source.data || this.options.source.search) {
			options = Object.values(this.selectpicker.optionValuesDataMap);
		}

		var selectedOptions = options.filter(function (item) {
			if (item.selected) {
				if (this.options.hideDisabled && item.disabled) return false;
				return true;
			}

			return false;
		}, this);

		// ensure only 1 option is selected if multiple are set in the data source
		if (
			this.options.source.data &&
			!this.multiple &&
			selectedOptions.length > 1
		) {
			for (var i = 0; i < selectedOptions.length - 1; i++) {
				selectedOptions[i].selected = false;
			}

			selectedOptions = [selectedOptions[selectedOptions.length - 1]];
		}

		return selectedOptions;
	}

	// much faster than $.val()
	function getSelectValues(selectedOptions) {
		var value = [],
			options = selectedOptions || getSelectedOptions.call(this),
			opt;

		for (var i = 0, len = options.length; i < len; i++) {
			opt = options[i];

			if (!opt.disabled) {
				value.push(opt.value === undefined ? opt.text : opt.value);
			}
		}

		if (!this.multiple) {
			return !value.length ? null : value[0];
		}

		return value;
	}

	// set data-selected on select element if the value has been programmatically selected
	// prior to initialization of bootstrap-select
	// * consider removing or replacing an alternative method *
	var valHooks = {
		useDefault: false,
		_set: $.valHooks.select.set,
	};

	$.valHooks.select.set = function (elem, value) {
		if (value && !valHooks.useDefault) $(elem).data('selected', true);

		return valHooks._set.apply(this, arguments);
	};

	var changedArguments = null;

	var EventIsSupported = (function () {
		try {
			new Event('change');
			return true;
		} catch (e) {
			return false;
		}
	})();

	$.fn.triggerNative = function (eventName) {
		var el = this[0],
			event;

		if (el.dispatchEvent) {
			// for modern browsers & IE9+
			if (EventIsSupported) {
				// For modern browsers
				event = new Event(eventName, {
					bubbles: true,
				});
			} else {
				// For IE since it doesn't support Event constructor
				event = document.createEvent('Event');
				event.initEvent(eventName, true, false);
			}

			el.dispatchEvent(event);
		}
	};
	// </editor-fold>

	function stringSearch(li, searchString, method, normalize) {
		var stringTypes = ['display', 'subtext', 'tokens'],
			searchSuccess = false;

		for (var i = 0; i < stringTypes.length; i++) {
			var stringType = stringTypes[i],
				string = li[stringType];

			if (string) {
				string = string.toString();

				// Strip HTML tags. This isn't perfect, but it's much faster than any other method
				if (stringType === 'display') {
					string = string.replace(/<[^>]+>/g, '');
				}

				if (normalize) string = normalizeToBase(string);
				string = string.toUpperCase();

				if (typeof method === 'function') {
					searchSuccess = method(string, searchString);
				} else if (method === 'contains') {
					searchSuccess = string.indexOf(searchString) >= 0;
				} else {
					searchSuccess = string.startsWith(searchString);
				}

				if (searchSuccess) break;
			}
		}

		return searchSuccess;
	}

	function toInteger(value) {
		return parseInt(value, 10) || 0;
	}

	// Borrowed from Lodash (_.deburr)
	/** Used to map Latin Unicode letters to basic Latin letters. */
	var deburredLetters = {
		// Latin-1 Supplement block.
		'\xc0': 'A',
		'\xc1': 'A',
		'\xc2': 'A',
		'\xc3': 'A',
		'\xc4': 'A',
		'\xc5': 'A',
		'\xe0': 'a',
		'\xe1': 'a',
		'\xe2': 'a',
		'\xe3': 'a',
		'\xe4': 'a',
		'\xe5': 'a',
		'\xc7': 'C',
		'\xe7': 'c',
		'\xd0': 'D',
		'\xf0': 'd',
		'\xc8': 'E',
		'\xc9': 'E',
		'\xca': 'E',
		'\xcb': 'E',
		'\xe8': 'e',
		'\xe9': 'e',
		'\xea': 'e',
		'\xeb': 'e',
		'\xcc': 'I',
		'\xcd': 'I',
		'\xce': 'I',
		'\xcf': 'I',
		'\xec': 'i',
		'\xed': 'i',
		'\xee': 'i',
		'\xef': 'i',
		'\xd1': 'N',
		'\xf1': 'n',
		'\xd2': 'O',
		'\xd3': 'O',
		'\xd4': 'O',
		'\xd5': 'O',
		'\xd6': 'O',
		'\xd8': 'O',
		'\xf2': 'o',
		'\xf3': 'o',
		'\xf4': 'o',
		'\xf5': 'o',
		'\xf6': 'o',
		'\xf8': 'o',
		'\xd9': 'U',
		'\xda': 'U',
		'\xdb': 'U',
		'\xdc': 'U',
		'\xf9': 'u',
		'\xfa': 'u',
		'\xfb': 'u',
		'\xfc': 'u',
		'\xdd': 'Y',
		'\xfd': 'y',
		'\xff': 'y',
		'\xc6': 'Ae',
		'\xe6': 'ae',
		'\xde': 'Th',
		'\xfe': 'th',
		'\xdf': 'ss',
		// Latin Extended-A block.
		'\u0100': 'A',
		'\u0102': 'A',
		'\u0104': 'A',
		'\u0101': 'a',
		'\u0103': 'a',
		'\u0105': 'a',
		'\u0106': 'C',
		'\u0108': 'C',
		'\u010a': 'C',
		'\u010c': 'C',
		'\u0107': 'c',
		'\u0109': 'c',
		'\u010b': 'c',
		'\u010d': 'c',
		'\u010e': 'D',
		'\u0110': 'D',
		'\u010f': 'd',
		'\u0111': 'd',
		'\u0112': 'E',
		'\u0114': 'E',
		'\u0116': 'E',
		'\u0118': 'E',
		'\u011a': 'E',
		'\u0113': 'e',
		'\u0115': 'e',
		'\u0117': 'e',
		'\u0119': 'e',
		'\u011b': 'e',
		'\u011c': 'G',
		'\u011e': 'G',
		'\u0120': 'G',
		'\u0122': 'G',
		'\u011d': 'g',
		'\u011f': 'g',
		'\u0121': 'g',
		'\u0123': 'g',
		'\u0124': 'H',
		'\u0126': 'H',
		'\u0125': 'h',
		'\u0127': 'h',
		'\u0128': 'I',
		'\u012a': 'I',
		'\u012c': 'I',
		'\u012e': 'I',
		'\u0130': 'I',
		'\u0129': 'i',
		'\u012b': 'i',
		'\u012d': 'i',
		'\u012f': 'i',
		'\u0131': 'i',
		'\u0134': 'J',
		'\u0135': 'j',
		'\u0136': 'K',
		'\u0137': 'k',
		'\u0138': 'k',
		'\u0139': 'L',
		'\u013b': 'L',
		'\u013d': 'L',
		'\u013f': 'L',
		'\u0141': 'L',
		'\u013a': 'l',
		'\u013c': 'l',
		'\u013e': 'l',
		'\u0140': 'l',
		'\u0142': 'l',
		'\u0143': 'N',
		'\u0145': 'N',
		'\u0147': 'N',
		'\u014a': 'N',
		'\u0144': 'n',
		'\u0146': 'n',
		'\u0148': 'n',
		'\u014b': 'n',
		'\u014c': 'O',
		'\u014e': 'O',
		'\u0150': 'O',
		'\u014d': 'o',
		'\u014f': 'o',
		'\u0151': 'o',
		'\u0154': 'R',
		'\u0156': 'R',
		'\u0158': 'R',
		'\u0155': 'r',
		'\u0157': 'r',
		'\u0159': 'r',
		'\u015a': 'S',
		'\u015c': 'S',
		'\u015e': 'S',
		'\u0160': 'S',
		'\u015b': 's',
		'\u015d': 's',
		'\u015f': 's',
		'\u0161': 's',
		'\u0162': 'T',
		'\u0164': 'T',
		'\u0166': 'T',
		'\u0163': 't',
		'\u0165': 't',
		'\u0167': 't',
		'\u0168': 'U',
		'\u016a': 'U',
		'\u016c': 'U',
		'\u016e': 'U',
		'\u0170': 'U',
		'\u0172': 'U',
		'\u0169': 'u',
		'\u016b': 'u',
		'\u016d': 'u',
		'\u016f': 'u',
		'\u0171': 'u',
		'\u0173': 'u',
		'\u0174': 'W',
		'\u0175': 'w',
		'\u0176': 'Y',
		'\u0177': 'y',
		'\u0178': 'Y',
		'\u0179': 'Z',
		'\u017b': 'Z',
		'\u017d': 'Z',
		'\u017a': 'z',
		'\u017c': 'z',
		'\u017e': 'z',
		'\u0132': 'IJ',
		'\u0133': 'ij',
		'\u0152': 'Oe',
		'\u0153': 'oe',
		'\u0149': "'n",
		'\u017f': 's',
	};

	/** Used to match Latin Unicode letters (excluding mathematical operators). */
	var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

	/** Used to compose unicode character classes. */
	var rsComboMarksRange = '\\u0300-\\u036f',
		reComboHalfMarksRange = '\\ufe20-\\ufe2f',
		rsComboSymbolsRange = '\\u20d0-\\u20ff',
		rsComboMarksExtendedRange = '\\u1ab0-\\u1aff',
		rsComboMarksSupplementRange = '\\u1dc0-\\u1dff',
		rsComboRange =
			rsComboMarksRange +
			reComboHalfMarksRange +
			rsComboSymbolsRange +
			rsComboMarksExtendedRange +
			rsComboMarksSupplementRange;

	/** Used to compose unicode capture groups. */
	var rsCombo = '[' + rsComboRange + ']';

	/**
	 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
	 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
	 */
	var reComboMark = RegExp(rsCombo, 'g');

	function deburrLetter(key) {
		return deburredLetters[key];
	}

	function normalizeToBase(string) {
		string = string.toString();
		return (
			string && string.replace(reLatin, deburrLetter).replace(reComboMark, '')
		);
	}

	// List of HTML entities for escaping.
	var escapeMap = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#x27;',
		'`': '&#x60;',
	};

	// Functions for escaping and unescaping strings to/from HTML interpolation.
	var createEscaper = function (map) {
		var escaper = function (match) {
			return map[match];
		};
		// Regexes for identifying a key that needs to be escaped.
		var source = '(?:' + Object.keys(map).join('|') + ')';
		var testRegexp = RegExp(source);
		var replaceRegexp = RegExp(source, 'g');
		return function (string) {
			string = string == null ? '' : '' + string;
			return testRegexp.test(string)
				? string.replace(replaceRegexp, escaper)
				: string;
		};
	};

	var htmlEscape = createEscaper(escapeMap);

	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */

	var keyCodeMap = {
		32: ' ',
		48: '0',
		49: '1',
		50: '2',
		51: '3',
		52: '4',
		53: '5',
		54: '6',
		55: '7',
		56: '8',
		57: '9',
		59: ';',
		65: 'A',
		66: 'B',
		67: 'C',
		68: 'D',
		69: 'E',
		70: 'F',
		71: 'G',
		72: 'H',
		73: 'I',
		74: 'J',
		75: 'K',
		76: 'L',
		77: 'M',
		78: 'N',
		79: 'O',
		80: 'P',
		81: 'Q',
		82: 'R',
		83: 'S',
		84: 'T',
		85: 'U',
		86: 'V',
		87: 'W',
		88: 'X',
		89: 'Y',
		90: 'Z',
		96: '0',
		97: '1',
		98: '2',
		99: '3',
		100: '4',
		101: '5',
		102: '6',
		103: '7',
		104: '8',
		105: '9',
	};

	var keyCodes = {
		ESCAPE: 27, // KeyboardEvent.which value for Escape (Esc) key
		ENTER: 13, // KeyboardEvent.which value for Enter key
		SPACE: 32, // KeyboardEvent.which value for space key
		TAB: 9, // KeyboardEvent.which value for tab key
		ARROW_UP: 38, // KeyboardEvent.which value for up arrow key
		ARROW_DOWN: 40, // KeyboardEvent.which value for down arrow key
	};

	// eslint-disable-next-line no-undef
	var Dropdown = window.Dropdown || bootstrap.Dropdown;

	function getVersion() {
		var version;

		try {
			version = $.fn.dropdown.Constructor.VERSION;
		} catch (err) {
			version = Dropdown.VERSION;
		}

		return version;
	}

	var version = {
		success: false,
		major: '3',
	};

	try {
		version.full = (getVersion() || '').split(' ')[0].split('.');
		version.major = version.full[0];
		version.success = true;
	} catch (err) {
		// do nothing
	}

	var selectId = 0;

	var EVENT_KEY = '.bs.select';

	var classNames = {
		DISABLED: 'disabled',
		DIVIDER: 'divider',
		SHOW: 'open',
		DROPUP: 'dropup',
		MENU: 'dropdown-menu',
		MENURIGHT: 'dropdown-menu-right',
		MENULEFT: 'dropdown-menu-left',
		// to-do: replace with more advanced template/customization options
		BUTTONCLASS: 'btn-default',
		POPOVERHEADER: 'popover-title',
		ICONBASE: 'glyphicon',
		TICKICON: 'glyphicon-ok',
	};

	var Selector = {
		MENU: '.' + classNames.MENU,
		DATA_TOGGLE: 'data-toggle="dropdown"',
	};

	var elementTemplates = {
		div: document.createElement('div'),
		span: document.createElement('span'),
		i: document.createElement('i'),
		subtext: document.createElement('small'),
		a: document.createElement('a'),
		li: document.createElement('li'),
		whitespace: document.createTextNode('\u00A0'),
		fragment: document.createDocumentFragment(),
		option: document.createElement('option'),
	};

	elementTemplates.selectedOption = elementTemplates.option.cloneNode(false);
	elementTemplates.selectedOption.setAttribute('selected', true);

	elementTemplates.noResults = elementTemplates.li.cloneNode(false);
	elementTemplates.noResults.className = 'no-results';

	elementTemplates.a.setAttribute('role', 'option');
	elementTemplates.a.className = 'dropdown-item';

	elementTemplates.subtext.className = 'text-muted';

	elementTemplates.text = elementTemplates.span.cloneNode(false);
	elementTemplates.text.className = 'text';

	elementTemplates.checkMark = elementTemplates.span.cloneNode(false);

	var REGEXP_ARROW = new RegExp(keyCodes.ARROW_UP + '|' + keyCodes.ARROW_DOWN);
	var REGEXP_TAB_OR_ESCAPE = new RegExp(
		'^' + keyCodes.TAB + '$|' + keyCodes.ESCAPE
	);

	var generateOption = {
		li: function (content, classes, optgroup) {
			var li = elementTemplates.li.cloneNode(false);

			if (content) {
				if (content.nodeType === 1 || content.nodeType === 11) {
					li.appendChild(content);
				} else {
					li.innerHTML = content;
				}
			}

			if (typeof classes !== 'undefined' && classes !== '')
				li.className = classes;
			if (typeof optgroup !== 'undefined' && optgroup !== null)
				li.classList.add('optgroup-' + optgroup);

			return li;
		},

		a: function (text, classes, inline) {
			var a = elementTemplates.a.cloneNode(true);

			if (text) {
				if (text.nodeType === 11) {
					a.appendChild(text);
				} else {
					a.insertAdjacentHTML('beforeend', text);
				}
			}

			if (typeof classes !== 'undefined' && classes !== '')
				a.classList.add.apply(a.classList, classes.split(/\s+/));
			if (inline) a.setAttribute('style', inline);

			return a;
		},

		text: function (options, useFragment) {
			var textElement = elementTemplates.text.cloneNode(false),
				subtextElement,
				iconElement;

			if (options.content) {
				textElement.innerHTML = options.content;
			} else {
				textElement.textContent = options.text;

				if (options.icon) {
					var whitespace = elementTemplates.whitespace.cloneNode(false);

					// need to use <i> for icons in the button to prevent a breaking change
					// note: switch to span in next major release
					iconElement = (
						useFragment === true ? elementTemplates.i : elementTemplates.span
					).cloneNode(false);
					iconElement.className = this.options.iconBase + ' ' + options.icon;

					elementTemplates.fragment.appendChild(iconElement);
					elementTemplates.fragment.appendChild(whitespace);
				}

				if (options.subtext) {
					subtextElement = elementTemplates.subtext.cloneNode(false);
					subtextElement.textContent = options.subtext;
					textElement.appendChild(subtextElement);
				}
			}

			if (useFragment === true) {
				while (textElement.childNodes.length > 0) {
					elementTemplates.fragment.appendChild(textElement.childNodes[0]);
				}
			} else {
				elementTemplates.fragment.appendChild(textElement);
			}

			return elementTemplates.fragment;
		},

		label: function (options) {
			var textElement = elementTemplates.text.cloneNode(false),
				subtextElement,
				iconElement;

			textElement.innerHTML = options.display;

			if (options.icon) {
				var whitespace = elementTemplates.whitespace.cloneNode(false);

				iconElement = elementTemplates.span.cloneNode(false);
				iconElement.className = this.options.iconBase + ' ' + options.icon;

				elementTemplates.fragment.appendChild(iconElement);
				elementTemplates.fragment.appendChild(whitespace);
			}

			if (options.subtext) {
				subtextElement = elementTemplates.subtext.cloneNode(false);
				subtextElement.textContent = options.subtext;
				textElement.appendChild(subtextElement);
			}

			elementTemplates.fragment.appendChild(textElement);

			return elementTemplates.fragment;
		},
	};

	var getOptionData = {
		fromOption: function (option, type) {
			var value;

			switch (type) {
				case 'divider':
					value = option.getAttribute('data-divider') === 'true';
					break;

				case 'text':
					value = option.textContent;
					break;

				case 'label':
					value = option.label;
					break;

				case 'style':
					value = option.style.cssText;
					break;

				case 'title':
					value = option.title;
					break;

				default:
					value = option.getAttribute('data-' + toKebabCase(type));
					break;
			}

			return value;
		},
		fromDataSource: function (option, type) {
			var value;

			switch (type) {
				case 'text':
				case 'label':
					value = option.text || option.value || '';
					break;

				default:
					value = option[type];
					break;
			}

			return value;
		},
	};

	function showNoResults(searchMatch, searchValue) {
		if (!searchMatch.length) {
			elementTemplates.noResults.innerHTML =
				this.options.noneResultsText.replace(
					'{0}',
					'"' + htmlEscape(searchValue) + '"'
				);
			this.$menuInner[0].firstChild.appendChild(elementTemplates.noResults);
		}
	}

	function filterHidden(item) {
		return !(item.hidden || (this.options.hideDisabled && item.disabled));
	}

	var Selectpicker = function (element, options) {
		var that = this;

		// bootstrap-select has been initialized - revert valHooks.select.set back to its original function
		if (!valHooks.useDefault) {
			$.valHooks.select.set = valHooks._set;
			valHooks.useDefault = true;
		}

		this.$element = $(element);
		this.$newElement = null;
		this.$button = null;
		this.$menu = null;
		this.options = options;
		this.selectpicker = {
			main: {
				data: [],
				optionQueue: elementTemplates.fragment.cloneNode(false),
				hasMore: false,
			},
			search: {
				data: [],
				hasMore: false,
			},
			current: {}, // current is either equal to main or search depending on if a search is in progress
			view: {},
			// map of option values and their respective data (only used in conjunction with options.source)
			optionValuesDataMap: {},
			isSearching: false,
			keydown: {
				keyHistory: '',
				resetKeyHistory: {
					start: function () {
						return setTimeout(function () {
							that.selectpicker.keydown.keyHistory = '';
						}, 800);
					},
				},
			},
		};

		this.sizeInfo = {};

		// Format window padding
		var winPad = this.options.windowPadding;
		if (typeof winPad === 'number') {
			this.options.windowPadding = [winPad, winPad, winPad, winPad];
		}

		// Expose public methods
		this.val = Selectpicker.prototype.val;
		this.render = Selectpicker.prototype.render;
		this.refresh = Selectpicker.prototype.refresh;
		this.setStyle = Selectpicker.prototype.setStyle;
		this.selectAll = Selectpicker.prototype.selectAll;
		this.deselectAll = Selectpicker.prototype.deselectAll;
		this.destroy = Selectpicker.prototype.destroy;
		this.remove = Selectpicker.prototype.remove;
		this.show = Selectpicker.prototype.show;
		this.hide = Selectpicker.prototype.hide;

		this.init();
	};

	Selectpicker.VERSION = '1.14.0-beta3';

	// part of this is duplicated in i18n/defaults-en_US.js. Make sure to update both.
	Selectpicker.DEFAULTS = {
		noneSelectedText: 'Nothing selected',
		noneResultsText: 'No results matched {0}',
		countSelectedText: function (numSelected, numTotal) {
			return numSelected == 1 ? '{0} item selected' : '{0} items selected';
		},
		maxOptionsText: function (numAll, numGroup) {
			return [
				numAll == 1
					? 'Limit reached ({n} item max)'
					: 'Limit reached ({n} items max)',
				numGroup == 1
					? 'Group limit reached ({n} item max)'
					: 'Group limit reached ({n} items max)',
			];
		},
		selectAllText: 'Select All',
		deselectAllText: 'Deselect All',
		source: {
			pageSize: 40,
		},
		chunkSize: 40,
		doneButton: false,
		doneButtonText: 'Close',
		multipleSeparator: ', ',
		styleBase: 'btn',
		style: classNames.BUTTONCLASS,
		size: 'auto',
		title: null,
		placeholder: null,
		allowClear: false,
		selectedTextFormat: 'values',
		width: false,
		container: false,
		hideDisabled: false,
		showSubtext: false,
		showIcon: true,
		showContent: true,
		dropupAuto: true,
		header: false,
		liveSearch: false,
		liveSearchPlaceholder: null,
		liveSearchNormalize: false,
		liveSearchStyle: 'contains',
		actionsBox: false,
		iconBase: classNames.ICONBASE,
		tickIcon: classNames.TICKICON,
		showTick: false,
		template: {
			caret: '<span class="caret"></span>',
		},
		maxOptions: false,
		mobile: false,
		selectOnTab: true,
		dropdownAlignRight: false,
		windowPadding: 0,
		virtualScroll: 600,
		display: false,
		sanitize: true,
		sanitizeFn: null,
		whiteList: DefaultWhitelist,
	};

	Selectpicker.prototype = {
		constructor: Selectpicker,

		init: function () {
			var that = this,
				id = this.$element.attr('id'),
				element = this.$element[0],
				form = element.form;

			selectId++;
			this.selectId = 'bs-select-' + selectId;

			element.classList.add('bs-select-hidden');

			this.multiple = this.$element.prop('multiple');
			this.autofocus = this.$element.prop('autofocus');

			if (element.classList.contains('show-tick')) {
				this.options.showTick = true;
			}

			this.$newElement = this.createDropdown();

			this.$element.after(this.$newElement).prependTo(this.$newElement);

			// ensure select is associated with form element if it got unlinked after moving it inside newElement
			if (form && element.form === null) {
				if (!form.id) form.id = 'form-' + this.selectId;
				element.setAttribute('form', form.id);
			}

			this.$button = this.$newElement.children('button');
			if (this.options.allowClear)
				this.$clearButton = this.$button.children('.bs-select-clear-selected');
			this.$menu = this.$newElement.children(Selector.MENU);
			this.$menuInner = this.$menu.children('.inner');
			this.$searchbox = this.$menu.find('input');

			element.classList.remove('bs-select-hidden');

			this.fetchData(function () {
				that.render(true);
				that.buildList();

				requestAnimationFrame(function () {
					that.$element.trigger('loaded' + EVENT_KEY);
				});
			});

			if (this.options.dropdownAlignRight === true)
				this.$menu[0].classList.add(classNames.MENURIGHT);

			if (typeof id !== 'undefined') {
				this.$button.attr('data-id', id);
			}

			this.checkDisabled();
			this.clickListener();

			if (version.major > 4) this.dropdown = new Dropdown(this.$button[0]);

			if (this.options.liveSearch) {
				this.liveSearchListener();
				this.focusedParent = this.$searchbox[0];
			} else {
				this.focusedParent = this.$menuInner[0];
			}

			this.setStyle();
			this.setWidth();
			if (this.options.container) {
				this.selectPosition();
			} else {
				this.$element.on('hide' + EVENT_KEY, function () {
					if (that.isVirtual()) {
						// empty menu on close
						var menuInner = that.$menuInner[0],
							emptyMenu = menuInner.firstChild.cloneNode(false);

						// replace the existing UL with an empty one - this is faster than $.empty() or innerHTML = ''
						menuInner.replaceChild(emptyMenu, menuInner.firstChild);
						menuInner.scrollTop = 0;
					}
				});
			}
			this.$menu.data('this', this);
			this.$newElement.data('this', this);
			if (this.options.mobile) this.mobile();

			this.$newElement.on({
				'hide.bs.dropdown': function (e) {
					that.$element.trigger('hide' + EVENT_KEY, e);
				},
				'hidden.bs.dropdown': function (e) {
					that.$element.trigger('hidden' + EVENT_KEY, e);
				},
				'show.bs.dropdown': function (e) {
					that.$element.trigger('show' + EVENT_KEY, e);
				},
				'shown.bs.dropdown': function (e) {
					that.$element.trigger('shown' + EVENT_KEY, e);
				},
			});

			if (element.hasAttribute('required')) {
				this.$element.on('invalid' + EVENT_KEY, function () {
					that.$button[0].classList.add('bs-invalid');

					that.$element
						.on('shown' + EVENT_KEY + '.invalid', function () {
							that.$element
								.val(that.$element.val()) // set the value to hide the validation message in Chrome when menu is opened
								.off('shown' + EVENT_KEY + '.invalid');
						})
						.on('rendered' + EVENT_KEY, function () {
							// if select is no longer invalid, remove the bs-invalid class
							if (this.validity.valid)
								that.$button[0].classList.remove('bs-invalid');
							that.$element.off('rendered' + EVENT_KEY);
						});

					that.$button.on('blur' + EVENT_KEY, function () {
						that.$element.trigger('focus').trigger('blur');
						that.$button.off('blur' + EVENT_KEY);
					});
				});
			}

			if (form) {
				$(form).on('reset' + EVENT_KEY, function () {
					requestAnimationFrame(function () {
						that.render();
					});
				});
			}
		},

		createDropdown: function () {
			// Options
			// If we are multiple or showTick option is set, then add the show-tick class
			var showTick = this.multiple || this.options.showTick ? ' show-tick' : '',
				multiselectable = this.multiple ? ' aria-multiselectable="true"' : '',
				inputGroup = '',
				autofocus = this.autofocus ? ' autofocus' : '';

			if (version.major < 4 && this.$element.parent().hasClass('input-group')) {
				inputGroup = ' input-group-btn';
			}

			// Elements
			var drop,
				header = '',
				searchbox = '',
				actionsbox = '',
				donebutton = '',
				clearButton = '';

			if (this.options.header) {
				header =
					'<div class="' +
					classNames.POPOVERHEADER +
					'">' +
					'<button type="button" class="close" aria-hidden="true">&times;</button>' +
					this.options.header +
					'</div>';
			}

			if (this.options.liveSearch) {
				searchbox =
					'<div class="bs-searchbox">' +
					'<input type="search" class="form-control" autocomplete="off"' +
					(this.options.liveSearchPlaceholder === null
						? ''
						: ' placeholder="' +
							htmlEscape(this.options.liveSearchPlaceholder) +
							'"') +
					' role="combobox" aria-label="Search" aria-controls="' +
					this.selectId +
					'" aria-autocomplete="list">' +
					'</div>';
			}

			if (this.multiple && this.options.actionsBox) {
				actionsbox =
					'<div class="bs-actionsbox">' +
					'<div class="btn-group btn-group-sm">' +
					'<button type="button" class="actions-btn bs-select-all btn ' +
					classNames.BUTTONCLASS +
					'">' +
					this.options.selectAllText +
					'</button>' +
					'<button type="button" class="actions-btn bs-deselect-all btn ' +
					classNames.BUTTONCLASS +
					'">' +
					this.options.deselectAllText +
					'</button>' +
					'</div>' +
					'</div>';
			}

			if (this.multiple && this.options.doneButton) {
				donebutton =
					'<div class="bs-donebutton">' +
					'<div class="btn-group">' +
					'<button type="button" class="btn btn-sm ' +
					classNames.BUTTONCLASS +
					'">' +
					this.options.doneButtonText +
					'</button>' +
					'</div>' +
					'</div>';
			}

			if (this.options.allowClear) {
				clearButton =
					'<span class="close bs-select-clear-selected" title="' +
					this.options.deselectAllText +
					'"><span>&times;</span>';
			}

			drop =
				'<div class="dropdown bootstrap-select' +
				showTick +
				inputGroup +
				'">' +
				'<button type="button" tabindex="-1" class="' +
				this.options.styleBase +
				' dropdown-toggle" ' +
				(this.options.display === 'static' ? 'data-display="static"' : '') +
				Selector.DATA_TOGGLE +
				autofocus +
				' role="combobox" aria-owns="' +
				this.selectId +
				'" aria-haspopup="listbox" aria-expanded="false">' +
				'<div class="filter-option">' +
				'<div class="filter-option-inner">' +
				'<div class="filter-option-inner-inner">&nbsp;</div>' +
				'</div> ' +
				'</div>' +
				clearButton +
				'</span>' +
				(version.major >= '4'
					? ''
					: '<span class="bs-caret">' +
						this.options.template.caret +
						'</span>') +
				'</button>' +
				'<div class="' +
				classNames.MENU +
				' ' +
				(version.major >= '4' ? '' : classNames.SHOW) +
				'">' +
				header +
				searchbox +
				actionsbox +
				'<div class="inner ' +
				classNames.SHOW +
				'" role="listbox" id="' +
				this.selectId +
				'" tabindex="-1" ' +
				multiselectable +
				'>' +
				'<ul class="' +
				classNames.MENU +
				' inner ' +
				(version.major >= '4' ? classNames.SHOW : '') +
				'" role="presentation">' +
				'</ul>' +
				'</div>' +
				donebutton +
				'</div>' +
				'</div>';

			return $(drop);
		},

		setPositionData: function () {
			this.selectpicker.view.canHighlight = [];
			this.selectpicker.view.size = 0;
			this.selectpicker.view.firstHighlightIndex = false;

			for (var i = 0; i < this.selectpicker.current.data.length; i++) {
				var li = this.selectpicker.current.data[i],
					canHighlight = true;

				if (li.type === 'divider') {
					canHighlight = false;
					li.height = this.sizeInfo.dividerHeight;
				} else if (li.type === 'optgroup-label') {
					canHighlight = false;
					li.height = this.sizeInfo.dropdownHeaderHeight;
				} else {
					li.height = this.sizeInfo.liHeight;
				}

				if (li.disabled) canHighlight = false;

				this.selectpicker.view.canHighlight.push(canHighlight);

				if (canHighlight) {
					this.selectpicker.view.size++;
					li.posinset = this.selectpicker.view.size;
					if (this.selectpicker.view.firstHighlightIndex === false)
						this.selectpicker.view.firstHighlightIndex = i;
				}

				li.position =
					(i === 0 ? 0 : this.selectpicker.current.data[i - 1].position) +
					li.height;
			}
		},

		isVirtual: function () {
			return (
				(this.options.virtualScroll !== false &&
					this.selectpicker.main.data.length >= this.options.virtualScroll) ||
				this.options.virtualScroll === true
			);
		},

		createView: function (isSearching, setSize, refresh) {
			var that = this,
				scrollTop = 0;

			this.selectpicker.isSearching = isSearching;
			this.selectpicker.current = isSearching
				? this.selectpicker.search
				: this.selectpicker.main;

			this.setPositionData();

			if (setSize) {
				if (refresh) {
					scrollTop = this.$menuInner[0].scrollTop;
				} else if (!that.multiple) {
					var element = that.$element[0],
						selectedIndex = (element.options[element.selectedIndex] || {})
							.liIndex;

					if (
						typeof selectedIndex === 'number' &&
						that.options.size !== false
					) {
						var selectedData = that.selectpicker.main.data[selectedIndex],
							position = selectedData && selectedData.position;

						if (position) {
							scrollTop =
								position -
								(that.sizeInfo.menuInnerHeight + that.sizeInfo.liHeight) / 2;
						}
					}
				}
			}

			scroll(scrollTop, true);

			this.$menuInner
				.off('scroll.createView')
				.on('scroll.createView', function (e, updateValue) {
					if (!that.noScroll) scroll(this.scrollTop, updateValue);
					that.noScroll = false;
				});

			function scroll(scrollTop, init) {
				var size = that.selectpicker.current.data.length,
					chunks = [],
					chunkSize,
					chunkCount,
					firstChunk,
					lastChunk,
					currentChunk,
					prevPositions,
					positionIsDifferent,
					previousElements,
					menuIsDifferent = true,
					isVirtual = that.isVirtual();

				that.selectpicker.view.scrollTop = scrollTop;

				chunkSize = that.options.chunkSize; // number of options in a chunk
				chunkCount = Math.ceil(size / chunkSize) || 1; // number of chunks

				for (var i = 0; i < chunkCount; i++) {
					var endOfChunk = (i + 1) * chunkSize;

					if (i === chunkCount - 1) {
						endOfChunk = size;
					}

					chunks[i] = [i * chunkSize + (!i ? 0 : 1), endOfChunk];

					if (!size) break;

					if (
						currentChunk === undefined &&
						scrollTop - 1 <=
							that.selectpicker.current.data[endOfChunk - 1].position -
								that.sizeInfo.menuInnerHeight
					) {
						currentChunk = i;
					}
				}

				if (currentChunk === undefined) currentChunk = 0;

				prevPositions = [
					that.selectpicker.view.position0,
					that.selectpicker.view.position1,
				];

				// always display previous, current, and next chunks
				firstChunk = Math.max(0, currentChunk - 1);
				lastChunk = Math.min(chunkCount - 1, currentChunk + 1);

				that.selectpicker.view.position0 =
					isVirtual === false ? 0 : Math.max(0, chunks[firstChunk][0]) || 0;
				that.selectpicker.view.position1 =
					isVirtual === false
						? size
						: Math.min(size, chunks[lastChunk][1]) || 0;

				positionIsDifferent =
					prevPositions[0] !== that.selectpicker.view.position0 ||
					prevPositions[1] !== that.selectpicker.view.position1;

				if (that.activeElement !== undefined) {
					if (init) {
						if (that.activeElement !== that.selectedElement) {
							that.defocusItem(that.activeElement);
						}
						that.activeElement = undefined;
					}

					if (that.activeElement !== that.selectedElement) {
						that.defocusItem(that.selectedElement);
					}
				}

				if (
					that.prevActiveElement !== undefined &&
					that.prevActiveElement !== that.activeElement &&
					that.prevActiveElement !== that.selectedElement
				) {
					that.defocusItem(that.prevActiveElement);
				}

				if (init || positionIsDifferent || that.selectpicker.current.hasMore) {
					previousElements = that.selectpicker.view.visibleElements
						? that.selectpicker.view.visibleElements.slice()
						: [];

					if (isVirtual === false) {
						that.selectpicker.view.visibleElements =
							that.selectpicker.current.elements;
					} else {
						that.selectpicker.view.visibleElements =
							that.selectpicker.current.elements.slice(
								that.selectpicker.view.position0,
								that.selectpicker.view.position1
							);
					}

					that.setOptionStatus();

					// if searching, check to make sure the list has actually been updated before updating DOM
					// this prevents unnecessary repaints
					if (isSearching || (isVirtual === false && init))
						menuIsDifferent = !isEqual(
							previousElements,
							that.selectpicker.view.visibleElements
						);

					// if virtual scroll is disabled and not searching,
					// menu should never need to be updated more than once
					if ((init || isVirtual === true) && menuIsDifferent) {
						var menuInner = that.$menuInner[0],
							menuFragment = document.createDocumentFragment(),
							emptyMenu = menuInner.firstChild.cloneNode(false),
							marginTop,
							marginBottom,
							elements = that.selectpicker.view.visibleElements,
							toSanitize = [];

						// replace the existing UL with an empty one - this is faster than $.empty()
						menuInner.replaceChild(emptyMenu, menuInner.firstChild);

						for (
							var i = 0, visibleElementsLen = elements.length;
							i < visibleElementsLen;
							i++
						) {
							var element = elements[i],
								elText,
								elementData;

							if (that.options.sanitize) {
								elText = element.lastChild;

								if (elText) {
									elementData =
										that.selectpicker.current.data[
											i + that.selectpicker.view.position0
										];

									if (
										elementData &&
										elementData.content &&
										!elementData.sanitized
									) {
										toSanitize.push(elText);
										elementData.sanitized = true;
									}
								}
							}

							menuFragment.appendChild(element);
						}

						if (that.options.sanitize && toSanitize.length) {
							sanitizeHtml(
								toSanitize,
								that.options.whiteList,
								that.options.sanitizeFn
							);
						}

						if (isVirtual === true) {
							marginTop =
								that.selectpicker.view.position0 === 0
									? 0
									: that.selectpicker.current.data[
											that.selectpicker.view.position0 - 1
										].position;
							marginBottom =
								that.selectpicker.view.position1 > size - 1
									? 0
									: that.selectpicker.current.data[size - 1].position -
										that.selectpicker.current.data[
											that.selectpicker.view.position1 - 1
										].position;

							menuInner.firstChild.style.marginTop = marginTop + 'px';
							menuInner.firstChild.style.marginBottom = marginBottom + 'px';
						} else {
							menuInner.firstChild.style.marginTop = 0;
							menuInner.firstChild.style.marginBottom = 0;
						}

						menuInner.firstChild.appendChild(menuFragment);

						// if an option is encountered that is wider than the current menu width, update the menu width accordingly
						// switch to ResizeObserver with increased browser support
						if (isVirtual === true && that.sizeInfo.hasScrollBar) {
							var menuInnerInnerWidth = menuInner.firstChild.offsetWidth;

							if (
								init &&
								menuInnerInnerWidth < that.sizeInfo.menuInnerInnerWidth &&
								that.sizeInfo.totalMenuWidth > that.sizeInfo.selectWidth
							) {
								menuInner.firstChild.style.minWidth =
									that.sizeInfo.menuInnerInnerWidth + 'px';
							} else if (
								menuInnerInnerWidth > that.sizeInfo.menuInnerInnerWidth
							) {
								// set to 0 to get actual width of menu
								that.$menu[0].style.minWidth = 0;

								var actualMenuWidth = menuInner.firstChild.offsetWidth;

								if (actualMenuWidth > that.sizeInfo.menuInnerInnerWidth) {
									that.sizeInfo.menuInnerInnerWidth = actualMenuWidth;
									menuInner.firstChild.style.minWidth =
										that.sizeInfo.menuInnerInnerWidth + 'px';
								}

								// reset to default CSS styling
								that.$menu[0].style.minWidth = '';
							}
						}
					}

					if (
						((!isSearching && that.options.source.data) ||
							(isSearching && that.options.source.search)) &&
						that.selectpicker.current.hasMore &&
						currentChunk === chunkCount - 1
					) {
						// Don't load the next chunk until scrolling has started
						// This prevents unnecessary requests while the user is typing if pageSize is <= chunkSize
						if (scrollTop > 0) {
							// Chunks use 0-based indexing, but pages use 1-based. Add 1 to convert and add 1 again to get next page
							var page =
								Math.floor(
									(currentChunk * that.options.chunkSize) /
										that.options.source.pageSize
								) + 2;

							that.fetchData(
								function () {
									that.render();
									that.buildList(size, isSearching);
									that.setPositionData();
									scroll(scrollTop);
								},
								isSearching ? 'search' : 'data',
								page,
								isSearching ? that.selectpicker.search.previousValue : undefined
							);
						}
					}
				}

				that.prevActiveElement = that.activeElement;

				if (!that.options.liveSearch) {
					that.$menuInner.trigger('focus');
				} else if (isSearching && init) {
					var index = 0,
						newActive;

					if (!that.selectpicker.view.canHighlight[index]) {
						index =
							1 + that.selectpicker.view.canHighlight.slice(1).indexOf(true);
					}

					newActive = that.selectpicker.view.visibleElements[index];

					that.defocusItem(that.selectpicker.view.currentActive);

					that.activeElement = (
						that.selectpicker.current.data[index] || {}
					).element;

					that.focusItem(newActive);
				}
			}

			$(window)
				.off('resize' + EVENT_KEY + '.' + this.selectId + '.createView')
				.on(
					'resize' + EVENT_KEY + '.' + this.selectId + '.createView',
					function () {
						var isActive = that.$newElement.hasClass(classNames.SHOW);

						if (isActive) scroll(that.$menuInner[0].scrollTop);
					}
				);
		},

		focusItem: function (li, liData, noStyle) {
			if (li) {
				liData =
					liData ||
					this.selectpicker.current.data[
						this.selectpicker.current.elements.indexOf(this.activeElement)
					];
				var a = li.firstChild;

				if (a) {
					a.setAttribute('aria-setsize', this.selectpicker.view.size);
					a.setAttribute('aria-posinset', liData.posinset);

					if (noStyle !== true) {
						this.focusedParent.setAttribute('aria-activedescendant', a.id);
						li.classList.add('active');
						a.classList.add('active');
					}
				}
			}
		},

		defocusItem: function (li) {
			if (li) {
				li.classList.remove('active');
				if (li.firstChild) li.firstChild.classList.remove('active');
			}
		},

		setPlaceholder: function () {
			var that = this,
				updateIndex = false;

			if (
				(this.options.placeholder || this.options.allowClear) &&
				!this.multiple
			) {
				if (!this.selectpicker.view.titleOption)
					this.selectpicker.view.titleOption = document.createElement('option');

				// this option doesn't create a new <li> element, but does add a new option at the start,
				// so startIndex should increase to prevent having to check every option for the bs-title-option class
				updateIndex = true;

				var element = this.$element[0],
					selectTitleOption = false,
					titleNotAppended = !this.selectpicker.view.titleOption.parentNode,
					selectedIndex = element.selectedIndex,
					selectedOption = element.options[selectedIndex],
					firstSelectable = element.querySelector('select > *:not(:disabled)'),
					firstSelectableIndex = firstSelectable ? firstSelectable.index : 0,
					navigation =
						window.performance &&
						window.performance.getEntriesByType('navigation'),
					// Safari doesn't support getEntriesByType('navigation') - fall back to performance.navigation
					isNotBackForward =
						navigation && navigation.length
							? navigation[0].type !== 'back_forward'
							: window.performance.navigation.type !== 2;

				if (titleNotAppended) {
					// Use native JS to prepend option (faster)
					this.selectpicker.view.titleOption.className = 'bs-title-option';
					this.selectpicker.view.titleOption.value = '';

					// Check if selected or data-selected attribute is already set on an option. If not, select the titleOption option.
					// the selected item may have been changed by user or programmatically before the bootstrap select plugin runs,
					// if so, the select will have the data-selected attribute
					selectTitleOption =
						!selectedOption ||
						(selectedIndex === firstSelectableIndex &&
							selectedOption.defaultSelected === false &&
							this.$element.data('selected') === undefined);
				}

				if (
					titleNotAppended ||
					this.selectpicker.view.titleOption.index !== 0
				) {
					element.insertBefore(
						this.selectpicker.view.titleOption,
						element.firstChild
					);
				}

				// Set selected *after* appending to select,
				// otherwise the option doesn't get selected in IE
				// set using selectedIndex, as setting the selected attr to true here doesn't work in IE11
				if (selectTitleOption && isNotBackForward) {
					element.selectedIndex = 0;
				} else if (document.readyState !== 'complete') {
					// if navigation type is back_forward, there's a chance the select will have its value set by BFCache
					// wait for that value to be set, then run render again
					window.addEventListener('pageshow', function () {
						if (that.selectpicker.view.displayedValue !== element.value)
							that.render();
					});
				}
			}

			return updateIndex;
		},

		fetchData: function (callback, type, page, searchValue) {
			page = page || 1;
			type = type || 'data';

			var that = this,
				data = this.options.source[type],
				builtData;

			if (data) {
				this.options.virtualScroll = true;

				if (typeof data === 'function') {
					data.call(
						this,
						function (data, more, totalItems) {
							var current =
								that.selectpicker[type === 'search' ? 'search' : 'main'];
							current.hasMore = more;
							current.totalItems = totalItems;
							builtData = that.buildData(data, type);
							callback.call(that, builtData);
							that.$element.trigger('fetched' + EVENT_KEY);
						},
						page,
						searchValue
					);
				} else if (Array.isArray(data)) {
					builtData = that.buildData(data, type);
					callback.call(that, builtData);
				}
			} else {
				builtData = this.buildData(false, type);
				callback.call(that, builtData);
			}
		},

		buildData: function (data, type) {
			var that = this;
			var dataGetter =
				data === false
					? getOptionData.fromOption
					: getOptionData.fromDataSource;

			var optionSelector =
					':not([hidden]):not([data-hidden="true"]):not([style*="display: none"])',
				mainData = [],
				startLen = this.selectpicker.main.data
					? this.selectpicker.main.data.length
					: 0,
				optID = 0,
				startIndex = this.setPlaceholder() && !data ? 1 : 0; // append the titleOption if necessary and skip the first option in the loop

			if (type === 'search') {
				startLen = this.selectpicker.search.data.length;
			}

			if (this.options.hideDisabled) optionSelector += ':not(:disabled)';

			var selectOptions = data
				? data.filter(filterHidden, this)
				: this.$element[0].querySelectorAll('select > *' + optionSelector);

			function addDivider(config) {
				var previousData = mainData[mainData.length - 1];

				// ensure optgroup doesn't create back-to-back dividers
				if (
					previousData &&
					previousData.type === 'divider' &&
					(previousData.optID || config.optID)
				) {
					return;
				}

				config = config || {};
				config.type = 'divider';

				mainData.push(config);
			}

			function addOption(item, config) {
				config = config || {};

				config.divider = dataGetter(item, 'divider');

				if (config.divider === true) {
					addDivider({
						optID: config.optID,
					});
				} else {
					var liIndex = mainData.length + startLen,
						cssText = dataGetter(item, 'style'),
						inlineStyle = cssText ? htmlEscape(cssText) : '',
						optionClass = (item.className || '') + (config.optgroupClass || '');

					if (config.optID) optionClass = 'opt ' + optionClass;

					config.optionClass = optionClass.trim();
					config.inlineStyle = inlineStyle;

					config.text = dataGetter(item, 'text');
					config.title = dataGetter(item, 'title');
					config.content = dataGetter(item, 'content');
					config.tokens = dataGetter(item, 'tokens');
					config.subtext = dataGetter(item, 'subtext');
					config.icon = dataGetter(item, 'icon');

					config.display = config.content || config.text;
					config.value = item.value === undefined ? item.text : item.value;
					config.type = 'option';
					config.index = liIndex;

					config.option = !item.option ? item : item.option; // reference option element if it exists
					config.option.liIndex = liIndex;
					config.selected = !!item.selected;
					config.disabled = config.disabled || !!item.disabled;

					if (data !== false) {
						if (that.selectpicker.optionValuesDataMap[config.value]) {
							config = $.extend(
								that.selectpicker.optionValuesDataMap[config.value],
								config
							);
						} else {
							that.selectpicker.optionValuesDataMap[config.value] = config;
						}
					}

					mainData.push(config);
				}
			}

			function addOptgroup(index, selectOptions) {
				var optgroup = selectOptions[index],
					// skip placeholder option
					previous = index - 1 < startIndex ? false : selectOptions[index - 1],
					next = selectOptions[index + 1],
					options = data
						? optgroup.children.filter(filterHidden, this)
						: optgroup.querySelectorAll('option' + optionSelector);

				if (!options.length) return;

				var config = {
						display: htmlEscape(dataGetter(item, 'label')),
						subtext: dataGetter(optgroup, 'subtext'),
						icon: dataGetter(optgroup, 'icon'),
						type: 'optgroup-label',
						optgroupClass: ' ' + (optgroup.className || ''),
						optgroup: optgroup,
					},
					headerIndex,
					lastIndex;

				optID++;

				if (previous) {
					addDivider({ optID: optID });
				}

				config.optID = optID;

				mainData.push(config);

				for (var j = 0, len = options.length; j < len; j++) {
					var option = options[j];

					if (j === 0) {
						headerIndex = mainData.length - 1;
						lastIndex = headerIndex + len;
					}

					addOption(option, {
						headerIndex: headerIndex,
						lastIndex: lastIndex,
						optID: config.optID,
						optgroupClass: config.optgroupClass,
						disabled: optgroup.disabled,
					});
				}

				if (next) {
					addDivider({ optID: optID });
				}
			}

			for (var len = selectOptions.length, i = startIndex; i < len; i++) {
				var item = selectOptions[i],
					children = item.children;

				if (children && children.length) {
					addOptgroup.call(this, i, selectOptions);
				} else {
					addOption.call(this, item, {});
				}
			}

			switch (type) {
				case 'data': {
					if (!this.selectpicker.main.data) {
						this.selectpicker.main.data = [];
					}
					Array.prototype.push.apply(this.selectpicker.main.data, mainData);
					this.selectpicker.current.data = this.selectpicker.main.data;
					break;
				}
				case 'search': {
					Array.prototype.push.apply(this.selectpicker.search.data, mainData);
					break;
				}
			}

			return mainData;
		},

		buildList: function (size, searching) {
			var that = this,
				selectData = searching
					? this.selectpicker.search.data
					: this.selectpicker.main.data,
				mainElements = [],
				widestOptionLength = 0;

			if (
				(that.options.showTick || that.multiple) &&
				!elementTemplates.checkMark.parentNode
			) {
				elementTemplates.checkMark.className =
					this.options.iconBase + ' ' + that.options.tickIcon + ' check-mark';
				elementTemplates.a.appendChild(elementTemplates.checkMark);
			}

			function buildElement(mainElements, item) {
				var liElement,
					combinedLength = 0;

				switch (item.type) {
					case 'divider':
						liElement = generateOption.li(
							false,
							classNames.DIVIDER,
							item.optID ? item.optID + 'div' : undefined
						);

						break;

					case 'option':
						liElement = generateOption.li(
							generateOption.a(
								generateOption.text.call(that, item),
								item.optionClass,
								item.inlineStyle
							),
							'',
							item.optID
						);

						if (liElement.firstChild) {
							liElement.firstChild.id = that.selectId + '-' + item.index;
						}

						break;

					case 'optgroup-label':
						liElement = generateOption.li(
							generateOption.label.call(that, item),
							'dropdown-header' + item.optgroupClass,
							item.optID
						);

						break;
				}

				if (!item.element) {
					item.element = liElement;
				} else {
					item.element.innerHTML = liElement.innerHTML;
				}
				mainElements.push(item.element);

				// count the number of characters in the option - not perfect, but should work in most cases
				if (item.display) combinedLength += item.display.length;
				if (item.subtext) combinedLength += item.subtext.length;
				// if there is an icon, ensure this option's width is checked
				if (item.icon) combinedLength += 1;

				if (combinedLength > widestOptionLength) {
					widestOptionLength = combinedLength;

					// guess which option is the widest
					// use this when calculating menu width
					// not perfect, but it's fast, and the width will be updating accordingly when scrolling
					that.selectpicker.view.widestOption =
						mainElements[mainElements.length - 1];
				}
			}

			var startIndex = size || 0;

			for (var len = selectData.length, i = startIndex; i < len; i++) {
				var item = selectData[i];

				buildElement(mainElements, item);
			}

			if (size) {
				if (searching) {
					Array.prototype.push.apply(
						this.selectpicker.search.elements,
						mainElements
					);
				} else {
					Array.prototype.push.apply(
						this.selectpicker.main.elements,
						mainElements
					);
					this.selectpicker.current.elements = this.selectpicker.main.elements;
				}
			} else {
				if (searching) {
					this.selectpicker.search.elements = mainElements;
				} else {
					this.selectpicker.main.elements = this.selectpicker.current.elements =
						mainElements;
				}
			}
		},

		findLis: function () {
			return this.$menuInner.find('.inner > li');
		},

		render: function (init) {
			var that = this,
				element = this.$element[0],
				// ensure titleOption is appended and selected (if necessary) before getting selectedOptions
				placeholderSelected =
					this.setPlaceholder() && element.selectedIndex === 0,
				selectedOptions = getSelectedOptions.call(this),
				selectedCount = selectedOptions.length,
				selectedValues = getSelectValues.call(this, selectedOptions),
				button = this.$button[0],
				buttonInner = button.querySelector('.filter-option-inner-inner'),
				multipleSeparator = document.createTextNode(
					this.options.multipleSeparator
				),
				titleFragment = elementTemplates.fragment.cloneNode(false),
				showCount,
				countMax,
				hasContent = false;

			function createSelected(item) {
				if (item.selected) {
					that.createOption(item, true);
				} else if (item.children && item.children.length) {
					item.children.map(createSelected);
				}
			}

			// create selected option elements to ensure select value is correct
			if (this.options.source.data && init) {
				selectedOptions.map(createSelected);
				element.appendChild(this.selectpicker.main.optionQueue);

				if (placeholderSelected)
					placeholderSelected = element.selectedIndex === 0;
			}

			button.classList.toggle(
				'bs-placeholder',
				that.multiple ? !selectedCount : !selectedValues && selectedValues !== 0
			);

			if (!that.multiple && selectedOptions.length === 1) {
				that.selectpicker.view.displayedValue = selectedValues;
			}

			if (this.options.selectedTextFormat === 'static') {
				titleFragment = generateOption.text.call(
					this,
					{ text: this.options.placeholder },
					true
				);
			} else {
				showCount =
					this.multiple &&
					this.options.selectedTextFormat.indexOf('count') !== -1 &&
					selectedCount > 0;

				// determine if the number of selected options will be shown (showCount === true)
				if (showCount) {
					countMax = this.options.selectedTextFormat.split('>');
					showCount =
						(countMax.length > 1 && selectedCount > countMax[1]) ||
						(countMax.length === 1 && selectedCount >= 2);
				}

				// only loop through all selected options if the count won't be shown
				if (showCount === false) {
					if (!placeholderSelected) {
						for (
							var selectedIndex = 0;
							selectedIndex < selectedCount;
							selectedIndex++
						) {
							if (selectedIndex < 50) {
								var option = selectedOptions[selectedIndex],
									titleOptions = {};

								if (option) {
									if (this.multiple && selectedIndex > 0) {
										titleFragment.appendChild(
											multipleSeparator.cloneNode(false)
										);
									}

									if (option.title) {
										titleOptions.text = option.title;
									} else if (option.content && that.options.showContent) {
										titleOptions.content = option.content.toString();
										hasContent = true;
									} else {
										if (that.options.showIcon) {
											titleOptions.icon = option.icon;
										}
										if (
											that.options.showSubtext &&
											!that.multiple &&
											option.subtext
										)
											titleOptions.subtext = ' ' + option.subtext;
										titleOptions.text = option.text.trim();
									}

									titleFragment.appendChild(
										generateOption.text.call(this, titleOptions, true)
									);
								}
							} else {
								break;
							}
						}

						// add ellipsis
						if (selectedCount > 49) {
							titleFragment.appendChild(document.createTextNode('...'));
						}
					}
				} else {
					var optionSelector =
						':not([hidden]):not([data-hidden="true"]):not([data-divider="true"]):not([style*="display: none"])';
					if (this.options.hideDisabled) optionSelector += ':not(:disabled)';

					// If this is a multiselect, and selectedTextFormat is count, then show 1 of 2 selected, etc.
					var totalCount = this.$element[0].querySelectorAll(
							'select > option' +
								optionSelector +
								', optgroup' +
								optionSelector +
								' option' +
								optionSelector
						).length,
						tr8nText =
							typeof this.options.countSelectedText === 'function'
								? this.options.countSelectedText(selectedCount, totalCount)
								: this.options.countSelectedText;

					titleFragment = generateOption.text.call(
						this,
						{
							text: tr8nText
								.replace('{0}', selectedCount.toString())
								.replace('{1}', totalCount.toString()),
						},
						true
					);
				}
			}

			// If the select doesn't have a title, then use the default, or if nothing is set at all, use noneSelectedText
			if (!titleFragment.childNodes.length) {
				titleFragment = generateOption.text.call(
					this,
					{
						text: this.options.placeholder
							? this.options.placeholder
							: this.options.noneSelectedText,
					},
					true
				);
			}

			// if the select has a title, apply it to the button, and if not, apply titleFragment text
			// strip all HTML tags and trim the result, then unescape any escaped tags
			button.title = titleFragment.textContent.replace(/<[^>]*>?/g, '').trim();

			if (this.options.sanitize && hasContent) {
				sanitizeHtml(
					[titleFragment],
					that.options.whiteList,
					that.options.sanitizeFn
				);
			}

			buttonInner.innerHTML = '';
			buttonInner.appendChild(titleFragment);

			if (
				version.major < 4 &&
				this.$newElement[0].classList.contains('bs3-has-addon')
			) {
				var filterExpand = button.querySelector('.filter-expand'),
					clone = buttonInner.cloneNode(true);

				clone.className = 'filter-expand';

				if (filterExpand) {
					button.replaceChild(clone, filterExpand);
				} else {
					button.appendChild(clone);
				}
			}

			this.$element.trigger('rendered' + EVENT_KEY);
		},

		/**
		 * @param [style]
		 * @param [status]
		 */
		setStyle: function (newStyle, status) {
			var button = this.$button[0],
				newElement = this.$newElement[0],
				style = this.options.style.trim(),
				buttonClass;

			if (this.$element.attr('class')) {
				this.$newElement.addClass(
					this.$element
						.attr('class')
						.replace(
							/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,
							''
						)
				);
			}

			if (version.major < 4) {
				newElement.classList.add('bs3');

				if (
					newElement.parentNode.classList &&
					newElement.parentNode.classList.contains('input-group') &&
					(newElement.previousElementSibling ||
						newElement.nextElementSibling) &&
					(
						newElement.previousElementSibling || newElement.nextElementSibling
					).classList.contains('input-group-addon')
				) {
					newElement.classList.add('bs3-has-addon');
				}
			}

			if (newStyle) {
				buttonClass = newStyle.trim();
			} else {
				buttonClass = style;
			}

			if (status == 'add') {
				if (buttonClass)
					button.classList.add.apply(button.classList, buttonClass.split(' '));
			} else if (status == 'remove') {
				if (buttonClass)
					button.classList.remove.apply(
						button.classList,
						buttonClass.split(' ')
					);
			} else {
				if (style)
					button.classList.remove.apply(button.classList, style.split(' '));
				if (buttonClass)
					button.classList.add.apply(button.classList, buttonClass.split(' '));
			}
		},

		liHeight: function (refresh) {
			if (
				!refresh &&
				(this.options.size === false || Object.keys(this.sizeInfo).length)
			)
				return;

			var newElement = elementTemplates.div.cloneNode(false),
				menu = elementTemplates.div.cloneNode(false),
				menuInner = elementTemplates.div.cloneNode(false),
				menuInnerInner = document.createElement('ul'),
				divider = elementTemplates.li.cloneNode(false),
				dropdownHeader = elementTemplates.li.cloneNode(false),
				li,
				a = elementTemplates.a.cloneNode(false),
				text = elementTemplates.span.cloneNode(false),
				header =
					this.options.header &&
					this.$menu.find('.' + classNames.POPOVERHEADER).length > 0
						? this.$menu.find('.' + classNames.POPOVERHEADER)[0].cloneNode(true)
						: null,
				search = this.options.liveSearch
					? elementTemplates.div.cloneNode(false)
					: null,
				actions =
					this.options.actionsBox &&
					this.multiple &&
					this.$menu.find('.bs-actionsbox').length > 0
						? this.$menu.find('.bs-actionsbox')[0].cloneNode(true)
						: null,
				doneButton =
					this.options.doneButton &&
					this.multiple &&
					this.$menu.find('.bs-donebutton').length > 0
						? this.$menu.find('.bs-donebutton')[0].cloneNode(true)
						: null,
				firstOption = this.$element[0].options[0];

			this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth;

			text.className = 'text';
			a.className =
				'dropdown-item ' + (firstOption ? firstOption.className : '');
			newElement.className =
				this.$menu[0].parentNode.className + ' ' + classNames.SHOW;
			newElement.style.width = 0; // ensure button width doesn't affect natural width of menu when calculating
			if (this.options.width === 'auto') menu.style.minWidth = 0;
			menu.className = classNames.MENU + ' ' + classNames.SHOW;
			menuInner.className = 'inner ' + classNames.SHOW;
			menuInnerInner.className =
				classNames.MENU +
				' inner ' +
				(version.major >= '4' ? classNames.SHOW : '');
			divider.className = classNames.DIVIDER;
			dropdownHeader.className = 'dropdown-header';

			text.appendChild(document.createTextNode('\u200b'));

			if (this.selectpicker.current.data.length) {
				for (var i = 0; i < this.selectpicker.current.data.length; i++) {
					var data = this.selectpicker.current.data[i];
					if (
						data.type === 'option' &&
						$(data.element.firstChild).css('display') !== 'none'
					) {
						li = data.element;
						break;
					}
				}
			} else {
				li = elementTemplates.li.cloneNode(false);
				a.appendChild(text);
				li.appendChild(a);
			}

			dropdownHeader.appendChild(text.cloneNode(true));

			if (this.selectpicker.view.widestOption) {
				menuInnerInner.appendChild(
					this.selectpicker.view.widestOption.cloneNode(true)
				);
			}

			menuInnerInner.appendChild(li);
			menuInnerInner.appendChild(divider);
			menuInnerInner.appendChild(dropdownHeader);
			if (header) menu.appendChild(header);
			if (search) {
				var input = document.createElement('input');
				search.className = 'bs-searchbox';
				input.className = 'form-control';
				search.appendChild(input);
				menu.appendChild(search);
			}
			if (actions) menu.appendChild(actions);
			menuInner.appendChild(menuInnerInner);
			menu.appendChild(menuInner);
			if (doneButton) menu.appendChild(doneButton);
			newElement.appendChild(menu);

			document.body.appendChild(newElement);

			var liHeight = li.offsetHeight,
				dropdownHeaderHeight = dropdownHeader ? dropdownHeader.offsetHeight : 0,
				headerHeight = header ? header.offsetHeight : 0,
				searchHeight = search ? search.offsetHeight : 0,
				actionsHeight = actions ? actions.offsetHeight : 0,
				doneButtonHeight = doneButton ? doneButton.offsetHeight : 0,
				dividerHeight = $(divider).outerHeight(true),
				menuStyle = window.getComputedStyle(menu),
				menuWidth = menu.offsetWidth,
				menuPadding = {
					vert:
						toInteger(menuStyle.paddingTop) +
						toInteger(menuStyle.paddingBottom) +
						toInteger(menuStyle.borderTopWidth) +
						toInteger(menuStyle.borderBottomWidth),
					horiz:
						toInteger(menuStyle.paddingLeft) +
						toInteger(menuStyle.paddingRight) +
						toInteger(menuStyle.borderLeftWidth) +
						toInteger(menuStyle.borderRightWidth),
				},
				menuExtras = {
					vert:
						menuPadding.vert +
						toInteger(menuStyle.marginTop) +
						toInteger(menuStyle.marginBottom) +
						2,
					horiz:
						menuPadding.horiz +
						toInteger(menuStyle.marginLeft) +
						toInteger(menuStyle.marginRight) +
						2,
				},
				scrollBarWidth;

			menuInner.style.overflowY = 'scroll';

			scrollBarWidth = menu.offsetWidth - menuWidth;

			document.body.removeChild(newElement);

			this.sizeInfo.liHeight = liHeight;
			this.sizeInfo.dropdownHeaderHeight = dropdownHeaderHeight;
			this.sizeInfo.headerHeight = headerHeight;
			this.sizeInfo.searchHeight = searchHeight;
			this.sizeInfo.actionsHeight = actionsHeight;
			this.sizeInfo.doneButtonHeight = doneButtonHeight;
			this.sizeInfo.dividerHeight = dividerHeight;
			this.sizeInfo.menuPadding = menuPadding;
			this.sizeInfo.menuExtras = menuExtras;
			this.sizeInfo.menuWidth = menuWidth;
			this.sizeInfo.menuInnerInnerWidth = menuWidth - menuPadding.horiz;
			this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth;
			this.sizeInfo.scrollBarWidth = scrollBarWidth;
			this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight;

			this.setPositionData();
		},

		getSelectPosition: function () {
			var that = this,
				$window = $(window),
				pos = that.$newElement.offset(),
				$container = $(that.options.container),
				containerPos;

			if (
				that.options.container &&
				$container.length &&
				!$container.is('body')
			) {
				containerPos = $container.offset();
				containerPos.top += parseInt($container.css('borderTopWidth'));
				containerPos.left += parseInt($container.css('borderLeftWidth'));
			} else {
				containerPos = { top: 0, left: 0 };
			}

			var winPad = that.options.windowPadding;

			this.sizeInfo.selectOffsetTop =
				pos.top - containerPos.top - $window.scrollTop();
			this.sizeInfo.selectOffsetBot =
				$window.height() -
				this.sizeInfo.selectOffsetTop -
				this.sizeInfo.selectHeight -
				containerPos.top -
				winPad[2];
			this.sizeInfo.selectOffsetLeft =
				pos.left - containerPos.left - $window.scrollLeft();
			this.sizeInfo.selectOffsetRight =
				$window.width() -
				this.sizeInfo.selectOffsetLeft -
				this.sizeInfo.selectWidth -
				containerPos.left -
				winPad[1];
			this.sizeInfo.selectOffsetTop -= winPad[0];
			this.sizeInfo.selectOffsetLeft -= winPad[3];
		},

		setMenuSize: function (isAuto) {
			this.getSelectPosition();

			var selectWidth = this.sizeInfo.selectWidth,
				liHeight = this.sizeInfo.liHeight,
				headerHeight = this.sizeInfo.headerHeight,
				searchHeight = this.sizeInfo.searchHeight,
				actionsHeight = this.sizeInfo.actionsHeight,
				doneButtonHeight = this.sizeInfo.doneButtonHeight,
				divHeight = this.sizeInfo.dividerHeight,
				menuPadding = this.sizeInfo.menuPadding,
				menuInnerHeight,
				menuHeight,
				divLength = 0,
				minHeight,
				_minHeight,
				maxHeight,
				menuInnerMinHeight,
				estimate,
				isDropup;

			if (this.options.dropupAuto) {
				// Get the estimated height of the menu without scrollbars.
				// This is useful for smaller menus, where there might be plenty of room
				// below the button without setting dropup, but we can't know
				// the exact height of the menu until createView is called later
				estimate =
					liHeight * this.selectpicker.current.data.length + menuPadding.vert;

				isDropup =
					this.sizeInfo.selectOffsetTop - this.sizeInfo.selectOffsetBot >
						this.sizeInfo.menuExtras.vert &&
					estimate + this.sizeInfo.menuExtras.vert + 50 >
						this.sizeInfo.selectOffsetBot;

				// ensure dropup doesn't change while searching (so menu doesn't bounce back and forth)
				if (this.selectpicker.isSearching === true) {
					isDropup = this.selectpicker.dropup;
				}

				this.$newElement.toggleClass(classNames.DROPUP, isDropup);
				this.selectpicker.dropup = isDropup;
			}

			if (this.options.size === 'auto') {
				_minHeight =
					this.selectpicker.current.data.length > 3
						? this.sizeInfo.liHeight * 3 + this.sizeInfo.menuExtras.vert - 2
						: 0;
				menuHeight =
					this.sizeInfo.selectOffsetBot - this.sizeInfo.menuExtras.vert;
				minHeight =
					_minHeight +
					headerHeight +
					searchHeight +
					actionsHeight +
					doneButtonHeight;
				menuInnerMinHeight = Math.max(_minHeight - menuPadding.vert, 0);

				if (this.$newElement.hasClass(classNames.DROPUP)) {
					menuHeight =
						this.sizeInfo.selectOffsetTop - this.sizeInfo.menuExtras.vert;
				}

				maxHeight = menuHeight;
				menuInnerHeight =
					menuHeight -
					headerHeight -
					searchHeight -
					actionsHeight -
					doneButtonHeight -
					menuPadding.vert;
			} else if (
				this.options.size &&
				this.options.size != 'auto' &&
				this.selectpicker.current.elements.length > this.options.size
			) {
				for (var i = 0; i < this.options.size; i++) {
					if (this.selectpicker.current.data[i].type === 'divider') divLength++;
				}

				menuHeight =
					liHeight * this.options.size +
					divLength * divHeight +
					menuPadding.vert;
				menuInnerHeight = menuHeight - menuPadding.vert;
				maxHeight =
					menuHeight +
					headerHeight +
					searchHeight +
					actionsHeight +
					doneButtonHeight;
				minHeight = menuInnerMinHeight = '';
			}

			this.$menu.css({
				'max-height': maxHeight + 'px',
				overflow: 'hidden',
				'min-height': minHeight + 'px',
			});

			this.$menuInner.css({
				'max-height': menuInnerHeight + 'px',
				overflow: 'hidden auto',
				'min-height': menuInnerMinHeight + 'px',
			});

			// ensure menuInnerHeight is always a positive number to prevent issues calculating chunkSize in createView
			this.sizeInfo.menuInnerHeight = Math.max(menuInnerHeight, 1);

			if (
				this.selectpicker.current.data.length &&
				this.selectpicker.current.data[
					this.selectpicker.current.data.length - 1
				].position > this.sizeInfo.menuInnerHeight
			) {
				this.sizeInfo.hasScrollBar = true;
				this.sizeInfo.totalMenuWidth =
					this.sizeInfo.menuWidth + this.sizeInfo.scrollBarWidth;
			}

			if (this.options.dropdownAlignRight === 'auto') {
				this.$menu.toggleClass(
					classNames.MENURIGHT,
					this.sizeInfo.selectOffsetLeft > this.sizeInfo.selectOffsetRight &&
						this.sizeInfo.selectOffsetRight <
							this.sizeInfo.totalMenuWidth - selectWidth
				);
			}

			if (this.dropdown && this.dropdown._popper)
				this.dropdown._popper.update();
		},

		setSize: function (refresh) {
			this.liHeight(refresh);

			if (this.options.header) this.$menu.css('padding-top', 0);

			if (this.options.size !== false) {
				var that = this,
					$window = $(window);

				this.setMenuSize();

				if (this.options.liveSearch) {
					this.$searchbox
						.off('input.setMenuSize propertychange.setMenuSize')
						.on('input.setMenuSize propertychange.setMenuSize', function () {
							return that.setMenuSize();
						});
				}

				if (this.options.size === 'auto') {
					$window
						.off(
							'resize' +
								EVENT_KEY +
								'.' +
								this.selectId +
								'.setMenuSize' +
								' scroll' +
								EVENT_KEY +
								'.' +
								this.selectId +
								'.setMenuSize'
						)
						.on(
							'resize' +
								EVENT_KEY +
								'.' +
								this.selectId +
								'.setMenuSize' +
								' scroll' +
								EVENT_KEY +
								'.' +
								this.selectId +
								'.setMenuSize',
							function () {
								return that.setMenuSize();
							}
						);
				} else if (
					this.options.size &&
					this.options.size != 'auto' &&
					this.selectpicker.current.elements.length > this.options.size
				) {
					$window.off(
						'resize' +
							EVENT_KEY +
							'.' +
							this.selectId +
							'.setMenuSize' +
							' scroll' +
							EVENT_KEY +
							'.' +
							this.selectId +
							'.setMenuSize'
					);
				}
			}

			this.createView(false, true, refresh);
		},

		setWidth: function () {
			var that = this;

			if (this.options.width === 'auto') {
				requestAnimationFrame(function () {
					that.$menu.css('min-width', '0');

					that.$element.on('loaded' + EVENT_KEY, function () {
						that.liHeight();
						that.setMenuSize();

						// Get correct width if element is hidden
						var $selectClone = that.$newElement.clone().appendTo('body'),
							btnWidth = $selectClone
								.css('width', 'auto')
								.children('button')
								.outerWidth();

						$selectClone.remove();

						// Set width to whatever's larger, button title or longest option
						that.sizeInfo.selectWidth = Math.max(
							that.sizeInfo.totalMenuWidth,
							btnWidth
						);
						that.$newElement.css('width', that.sizeInfo.selectWidth + 'px');
					});
				});
			} else if (this.options.width === 'fit') {
				// Remove inline min-width so width can be changed from 'auto'
				this.$menu.css('min-width', '');
				this.$newElement.css('width', '').addClass('fit-width');
			} else if (this.options.width) {
				// Remove inline min-width so width can be changed from 'auto'
				this.$menu.css('min-width', '');
				this.$newElement.css('width', this.options.width);
			} else {
				// Remove inline min-width/width so width can be changed
				this.$menu.css('min-width', '');
				this.$newElement.css('width', '');
			}
			// Remove fit-width class if width is changed programmatically
			if (
				this.$newElement.hasClass('fit-width') &&
				this.options.width !== 'fit'
			) {
				this.$newElement[0].classList.remove('fit-width');
			}
		},

		selectPosition: function () {
			this.$bsContainer = $('<div class="bs-container" />');

			var that = this,
				$container = $(this.options.container),
				pos,
				containerPos,
				actualHeight,
				getPlacement = function ($element) {
					var containerPosition = {},
						// fall back to dropdown's default display setting if display is not manually set
						display =
							that.options.display ||
							// Bootstrap 3 doesn't have $.fn.dropdown.Constructor.Default
							($.fn.dropdown.Constructor.Default
								? $.fn.dropdown.Constructor.Default.display
								: false);

					that.$bsContainer
						.addClass(
							$element.attr('class').replace(/form-control|fit-width/gi, '')
						)
						.toggleClass(
							classNames.DROPUP,
							$element.hasClass(classNames.DROPUP)
						);
					pos = $element.offset();

					if (!$container.is('body')) {
						containerPos = $container.offset();
						containerPos.top +=
							parseInt($container.css('borderTopWidth')) -
							$container.scrollTop();
						containerPos.left +=
							parseInt($container.css('borderLeftWidth')) -
							$container.scrollLeft();
					} else {
						containerPos = { top: 0, left: 0 };
					}

					actualHeight = $element.hasClass(classNames.DROPUP)
						? 0
						: $element[0].offsetHeight;

					// Bootstrap 4+ uses Popper for menu positioning
					if (version.major < 4 || display === 'static') {
						containerPosition.top = pos.top - containerPos.top + actualHeight;
						containerPosition.left = pos.left - containerPos.left;
					}

					containerPosition.width = $element[0].offsetWidth;

					that.$bsContainer.css(containerPosition);
				};

			this.$button.on('click.bs.dropdown.data-api', function () {
				if (that.isDisabled()) {
					return;
				}

				getPlacement(that.$newElement);

				that.$bsContainer
					.appendTo(that.options.container)
					.toggleClass(classNames.SHOW, !that.$button.hasClass(classNames.SHOW))
					.append(that.$menu);
			});

			$(window)
				.off(
					'resize' +
						EVENT_KEY +
						'.' +
						this.selectId +
						' scroll' +
						EVENT_KEY +
						'.' +
						this.selectId
				)
				.on(
					'resize' +
						EVENT_KEY +
						'.' +
						this.selectId +
						' scroll' +
						EVENT_KEY +
						'.' +
						this.selectId,
					function () {
						var isActive = that.$newElement.hasClass(classNames.SHOW);

						if (isActive) getPlacement(that.$newElement);
					}
				);

			this.$element.on('hide' + EVENT_KEY, function () {
				that.$menu.data('height', that.$menu.height());
				that.$bsContainer.detach();
			});
		},

		createOption: function (data, init) {
			var optionData = !data.option ? data : data.option;

			if (optionData && optionData.nodeType !== 1) {
				var option = (
					init ? elementTemplates.selectedOption : elementTemplates.option
				).cloneNode(true);
				if (optionData.value !== undefined) option.value = optionData.value;
				option.textContent = optionData.text;

				option.selected = true;

				if (optionData.liIndex !== undefined) {
					option.liIndex = optionData.liIndex;
				} else if (!init) {
					option.liIndex = data.index;
				}

				data.option = option;

				this.selectpicker.main.optionQueue.appendChild(option);
			}
		},

		setOptionStatus: function (selectedOnly) {
			var that = this;

			that.noScroll = false;

			if (
				that.selectpicker.view.visibleElements &&
				that.selectpicker.view.visibleElements.length
			) {
				for (
					var i = 0;
					i < that.selectpicker.view.visibleElements.length;
					i++
				) {
					var liData =
							that.selectpicker.current.data[
								i + that.selectpicker.view.position0
							],
						option = liData.option;

					if (option) {
						if (selectedOnly !== true) {
							that.setDisabled(liData);
						}

						that.setSelected(liData);
					}
				}

				// append optionQueue (documentFragment with option elements for select options)
				if (this.options.source.data)
					this.$element[0].appendChild(this.selectpicker.main.optionQueue);
			}
		},

		/**
		 * @param {Object} liData - the option object that is being changed
		 * @param {boolean} selected - true if the option is being selected, false if being deselected
		 */
		setSelected: function (liData, selected) {
			selected = selected === undefined ? liData.selected : selected;

			var li = liData.element,
				activeElementIsSet = this.activeElement !== undefined,
				thisIsActive = this.activeElement === li,
				prevActive,
				a,
				// if current option is already active
				// OR
				// if the current option is being selected, it's NOT multiple, and
				// activeElement is undefined:
				//  - when the menu is first being opened, OR
				//  - after a search has been performed, OR
				//  - when retainActive is false when selecting a new option (i.e. index of the newly selected option is not the same as the current activeElement)
				keepActive =
					thisIsActive || (selected && !this.multiple && !activeElementIsSet);

			if (!li) return;

			if (selected !== undefined) {
				liData.selected = selected;
				if (liData.option) liData.option.selected = selected;
			}

			if (selected && this.options.source.data) {
				this.createOption(liData, false);
			}

			a = li.firstChild;

			if (selected) {
				this.selectedElement = li;
			}

			li.classList.toggle('selected', selected);

			if (keepActive) {
				this.focusItem(li, liData);
				this.selectpicker.view.currentActive = li;
				this.activeElement = li;
			} else {
				this.defocusItem(li);
			}

			if (a) {
				a.classList.toggle('selected', selected);

				if (selected) {
					a.setAttribute('aria-selected', true);
				} else {
					if (this.multiple) {
						a.setAttribute('aria-selected', false);
					} else {
						a.removeAttribute('aria-selected');
					}
				}
			}

			if (
				!keepActive &&
				!activeElementIsSet &&
				selected &&
				this.prevActiveElement !== undefined
			) {
				prevActive = this.prevActiveElement;

				this.defocusItem(prevActive);
			}
		},

		/**
		 * @param {number} index - the index of the option that is being disabled
		 * @param {boolean} disabled - true if the option is being disabled, false if being enabled
		 */
		setDisabled: function (liData) {
			var disabled = liData.disabled,
				li = liData.element,
				a;

			if (!li) return;

			a = li.firstChild;

			li.classList.toggle(classNames.DISABLED, disabled);

			if (a) {
				if (version.major >= '4')
					a.classList.toggle(classNames.DISABLED, disabled);

				if (disabled) {
					a.setAttribute('aria-disabled', disabled);
					a.setAttribute('tabindex', -1);
				} else {
					a.removeAttribute('aria-disabled');
					a.setAttribute('tabindex', 0);
				}
			}
		},

		isDisabled: function () {
			return this.$element[0].disabled;
		},

		checkDisabled: function () {
			if (this.isDisabled()) {
				this.$newElement[0].classList.add(classNames.DISABLED);
				this.$button.addClass(classNames.DISABLED).attr('aria-disabled', true);
			} else {
				if (this.$button[0].classList.contains(classNames.DISABLED)) {
					this.$newElement[0].classList.remove(classNames.DISABLED);
					this.$button
						.removeClass(classNames.DISABLED)
						.attr('aria-disabled', false);
				}
			}
		},

		clickListener: function () {
			var that = this,
				$document = $(document);

			$document.data('spaceSelect', false);

			this.$button.on('keyup', function (e) {
				if (
					/(32)/.test(e.keyCode.toString(10)) &&
					$document.data('spaceSelect')
				) {
					e.preventDefault();
					$document.data('spaceSelect', false);
				}
			});

			this.$newElement.on('show.bs.dropdown', function () {
				if (!that.dropdown && version.major === '4') {
					that.dropdown = that.$button.data('bs.dropdown');
					that.dropdown._menu = that.$menu[0];
				}
			});

			function clearSelection(e) {
				if (that.multiple) {
					that.deselectAll();
				} else {
					var element = that.$element[0],
						prevValue = element.value,
						prevIndex = element.selectedIndex,
						prevOption = element.options[prevIndex],
						prevData = prevOption
							? that.selectpicker.main.data[prevOption.liIndex]
							: false;

					if (prevData) {
						that.setSelected(prevData, false);
					}

					element.selectedIndex = 0;

					changedArguments = [prevIndex, false, prevValue];
					that.$element.triggerNative('change');
				}

				// remove selected styling if menu is open
				if (that.$newElement.hasClass(classNames.SHOW)) {
					if (that.options.liveSearch) {
						that.$searchbox.trigger('focus');
					}

					that.createView(false);
				}
			}

			this.$button.on('click.bs.dropdown.data-api', function (e) {
				if (that.options.allowClear) {
					var target = e.target,
						clearButton = that.$clearButton[0];

					// IE doesn't support event listeners on child elements of buttons
					if (/MSIE|Trident/.test(window.navigator.userAgent)) {
						target = document.elementFromPoint(e.clientX, e.clientY);
					}

					if (target === clearButton || target.parentElement === clearButton) {
						e.stopImmediatePropagation();
						clearSelection(e);
					}
				}

				if (!that.$newElement.hasClass(classNames.SHOW)) {
					that.setSize();
				}
			});

			function setFocus() {
				if (that.options.liveSearch) {
					that.$searchbox.trigger('focus');
				} else {
					that.$menuInner.trigger('focus');
				}
			}

			function checkPopperExists() {
				if (
					that.dropdown &&
					that.dropdown._popper &&
					that.dropdown._popper.state
				) {
					setFocus();
				} else {
					requestAnimationFrame(checkPopperExists);
				}
			}

			this.$element.on('shown' + EVENT_KEY, function () {
				if (that.$menuInner[0].scrollTop !== that.selectpicker.view.scrollTop) {
					that.$menuInner[0].scrollTop = that.selectpicker.view.scrollTop;
				}

				if (version.major > 3) {
					requestAnimationFrame(checkPopperExists);
				} else {
					setFocus();
				}
			});

			// ensure posinset and setsize are correct before selecting an option via a click
			this.$menuInner.on('mouseenter', 'li a', function (e) {
				var hoverLi = this.parentElement,
					position0 = that.isVirtual() ? that.selectpicker.view.position0 : 0,
					index = Array.prototype.indexOf.call(
						hoverLi.parentElement.children,
						hoverLi
					),
					hoverData = that.selectpicker.current.data[index + position0];

				that.focusItem(hoverLi, hoverData, true);
			});

			this.$menuInner.on('click', 'li a', function (e, retainActive) {
				var $this = $(this),
					element = that.$element[0],
					position0 = that.isVirtual() ? that.selectpicker.view.position0 : 0,
					clickedData =
						that.selectpicker.current.data[$this.parent().index() + position0],
					clickedElement = clickedData.element,
					prevValue = getSelectValues.call(that),
					prevIndex = element.selectedIndex,
					prevOption = element.options[prevIndex],
					prevData = prevOption
						? that.selectpicker.main.data[prevOption.liIndex]
						: false,
					triggerChange = true;

				// Don't close on multi choice menu
				if (that.multiple && that.options.maxOptions !== 1) {
					e.stopPropagation();
				}

				e.preventDefault();

				// Don't run if the select is disabled
				if (
					!that.isDisabled() &&
					!$this.parent().hasClass(classNames.DISABLED)
				) {
					var option = clickedData.option,
						$option = $(option),
						state = option.selected,
						optgroupData = that.selectpicker.current.data.find(
							function (datum) {
								return (
									datum.optID === clickedData.optID &&
									datum.type === 'optgroup-label'
								);
							}
						),
						optgroup = optgroupData ? optgroupData.optgroup : undefined,
						dataGetter =
							optgroup instanceof Element
								? getOptionData.fromOption
								: getOptionData.fromDataSource,
						optgroupOptions = optgroup && optgroup.children,
						maxOptions = parseInt(that.options.maxOptions),
						maxOptionsGrp =
							(optgroup && parseInt(dataGetter(optgroup, 'maxOptions'))) ||
							false;

					if (clickedElement === that.activeElement) retainActive = true;

					if (!retainActive) {
						that.prevActiveElement = that.activeElement;
						that.activeElement = undefined;
					}

					if (!that.multiple || maxOptions === 1) {
						// Deselect previous option if not multi select
						if (prevData) that.setSelected(prevData, false);
						that.setSelected(clickedData, true);
					} else {
						// Toggle the clicked option if multi select.
						that.setSelected(clickedData, !state);
						that.focusedParent.focus();

						if (maxOptions !== false || maxOptionsGrp !== false) {
							var maxReached =
									maxOptions < getSelectedOptions.call(that).length,
								selectedGroupOptions = 0;

							if (optgroup && optgroup.children) {
								for (var i = 0; i < optgroup.children.length; i++) {
									if (optgroup.children[i].selected) selectedGroupOptions++;
								}
							}

							var maxReachedGrp = maxOptionsGrp < selectedGroupOptions;

							if (
								(maxOptions && maxReached) ||
								(maxOptionsGrp && maxReachedGrp)
							) {
								if (maxOptions && maxOptions === 1) {
									element.selectedIndex = -1;
									that.setOptionStatus(true);
								} else if (maxOptionsGrp && maxOptionsGrp === 1) {
									for (var i = 0; i < optgroupOptions.length; i++) {
										var _option = optgroupOptions[i];
										that.setSelected(
											that.selectpicker.current.data[_option.liIndex],
											false
										);
									}

									that.setSelected(clickedData, true);
								} else {
									var maxOptionsText =
											typeof that.options.maxOptionsText === 'string'
												? [
														that.options.maxOptionsText,
														that.options.maxOptionsText,
													]
												: that.options.maxOptionsText,
										maxOptionsArr =
											typeof maxOptionsText === 'function'
												? maxOptionsText(maxOptions, maxOptionsGrp)
												: maxOptionsText,
										maxTxt = maxOptionsArr[0].replace('{n}', maxOptions),
										maxTxtGrp = maxOptionsArr[1].replace('{n}', maxOptionsGrp),
										$notify = $('<div class="notify"></div>');
									// If {var} is set in array, replace it
									/** @deprecated */
									if (maxOptionsArr[2]) {
										maxTxt = maxTxt.replace(
											'{var}',
											maxOptionsArr[2][maxOptions > 1 ? 0 : 1]
										);
										maxTxtGrp = maxTxtGrp.replace(
											'{var}',
											maxOptionsArr[2][maxOptionsGrp > 1 ? 0 : 1]
										);
									}

									that.$menu.append($notify);

									if (maxOptions && maxReached) {
										$notify.append($('<div>' + maxTxt + '</div>'));
										triggerChange = false;
										that.$element.trigger('maxReached' + EVENT_KEY);
									}

									if (maxOptionsGrp && maxReachedGrp) {
										$notify.append($('<div>' + maxTxtGrp + '</div>'));
										triggerChange = false;
										that.$element.trigger('maxReachedGrp' + EVENT_KEY);
									}

									setTimeout(function () {
										that.setSelected(clickedData, false);
									}, 10);

									$notify[0].classList.add('fadeOut');

									setTimeout(function () {
										$notify.remove();
									}, 1050);
								}
							}
						}
					}

					if (that.options.source.data)
						that.$element[0].appendChild(that.selectpicker.main.optionQueue);

					if (
						!that.multiple ||
						(that.multiple && that.options.maxOptions === 1)
					) {
						that.$button.trigger('focus');
					} else if (that.options.liveSearch) {
						that.$searchbox.trigger('focus');
					}

					// Trigger select 'change'
					if (triggerChange) {
						if (that.multiple || prevIndex !== element.selectedIndex) {
							// $option.prop('selected') is current option state (selected/unselected). prevValue is the value of the select prior to being changed.
							changedArguments = [
								option.index,
								$option.prop('selected'),
								prevValue,
							];
							that.$element.triggerNative('change');
						}
					}
				}
			});

			this.$menu.on(
				'click',
				'li.' +
					classNames.DISABLED +
					' a, .' +
					classNames.POPOVERHEADER +
					', .' +
					classNames.POPOVERHEADER +
					' :not(.close)',
				function (e) {
					if (e.currentTarget == this) {
						e.preventDefault();
						e.stopPropagation();
						if (that.options.liveSearch && !$(e.target).hasClass('close')) {
							that.$searchbox.trigger('focus');
						} else {
							that.$button.trigger('focus');
						}
					}
				}
			);

			this.$menuInner.on('click', '.divider, .dropdown-header', function (e) {
				e.preventDefault();
				e.stopPropagation();
				if (that.options.liveSearch) {
					that.$searchbox.trigger('focus');
				} else {
					that.$button.trigger('focus');
				}
			});

			this.$menu.on(
				'click',
				'.' + classNames.POPOVERHEADER + ' .close',
				function () {
					that.$button.trigger('click');
				}
			);

			this.$searchbox.on('click', function (e) {
				e.stopPropagation();
			});

			this.$menu.on('click', '.actions-btn', function (e) {
				if (that.options.liveSearch) {
					that.$searchbox.trigger('focus');
				} else {
					that.$button.trigger('focus');
				}

				e.preventDefault();
				e.stopPropagation();

				if ($(this).hasClass('bs-select-all')) {
					that.selectAll();
				} else {
					that.deselectAll();
				}
			});

			this.$button
				.on('focus' + EVENT_KEY, function (e) {
					var tabindex = that.$element[0].getAttribute('tabindex');

					// only change when button is actually focused
					if (
						tabindex !== undefined &&
						e.originalEvent &&
						e.originalEvent.isTrusted
					) {
						// apply select element's tabindex to ensure correct order is followed when tabbing to the next element
						this.setAttribute('tabindex', tabindex);
						// set element's tabindex to -1 to allow for reverse tabbing
						that.$element[0].setAttribute('tabindex', -1);
						that.selectpicker.view.tabindex = tabindex;
					}
				})
				.on('blur' + EVENT_KEY, function (e) {
					// revert everything to original tabindex
					if (
						that.selectpicker.view.tabindex !== undefined &&
						e.originalEvent &&
						e.originalEvent.isTrusted
					) {
						that.$element[0].setAttribute(
							'tabindex',
							that.selectpicker.view.tabindex
						);
						this.setAttribute('tabindex', -1);
						that.selectpicker.view.tabindex = undefined;
					}
				});

			this.$element
				.on('change' + EVENT_KEY, function () {
					that.render();
					that.$element.trigger('changed' + EVENT_KEY, changedArguments);
					changedArguments = null;
				})
				.on('focus' + EVENT_KEY, function () {
					if (!that.options.mobile) that.$button[0].focus();
				});
		},

		liveSearchListener: function () {
			var that = this;

			this.$button.on('click.bs.dropdown.data-api', function () {
				if (!!that.$searchbox.val()) {
					that.$searchbox.val('');
					that.selectpicker.search.previousValue = undefined;
				}
			});

			this.$searchbox.on(
				'click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api',
				function (e) {
					e.stopPropagation();
				}
			);

			this.$searchbox.on('input propertychange', function () {
				var searchValue = that.$searchbox[0].value;

				that.selectpicker.search.elements = [];
				that.selectpicker.search.data = [];

				if (searchValue) {
					that.selectpicker.search.previousValue = searchValue;

					if (that.options.source.search) {
						that.fetchData(
							function (builtData) {
								that.render();
								that.buildList(undefined, true);
								that.noScroll = true;
								that.$menuInner.scrollTop(0);
								that.createView(true);
								showNoResults.call(that, builtData, searchValue);
							},
							'search',
							0,
							searchValue
						);
					} else {
						var i,
							searchMatch = [],
							q = searchValue.toUpperCase(),
							cache = {},
							cacheArr = [],
							searchStyle = that._searchStyle(),
							normalizeSearch = that.options.liveSearchNormalize;

						if (normalizeSearch) q = normalizeToBase(q);

						for (var i = 0; i < that.selectpicker.main.data.length; i++) {
							var li = that.selectpicker.main.data[i];

							if (!cache[i]) {
								cache[i] = stringSearch(li, q, searchStyle, normalizeSearch);
							}

							if (
								cache[i] &&
								li.headerIndex !== undefined &&
								cacheArr.indexOf(li.headerIndex) === -1
							) {
								if (li.headerIndex > 0) {
									cache[li.headerIndex - 1] = true;
									cacheArr.push(li.headerIndex - 1);
								}

								cache[li.headerIndex] = true;
								cacheArr.push(li.headerIndex);

								cache[li.lastIndex + 1] = true;
							}

							if (cache[i] && li.type !== 'optgroup-label') cacheArr.push(i);
						}

						for (var i = 0, cacheLen = cacheArr.length; i < cacheLen; i++) {
							var index = cacheArr[i],
								prevIndex = cacheArr[i - 1],
								li = that.selectpicker.main.data[index],
								liPrev = that.selectpicker.main.data[prevIndex];

							if (
								li.type !== 'divider' ||
								(li.type === 'divider' &&
									liPrev &&
									liPrev.type !== 'divider' &&
									cacheLen - 1 !== i)
							) {
								that.selectpicker.search.data.push(li);
								searchMatch.push(that.selectpicker.main.elements[index]);
							}
						}

						that.activeElement = undefined;
						that.noScroll = true;
						that.$menuInner.scrollTop(0);
						that.selectpicker.search.elements = searchMatch;
						that.createView(true);
						showNoResults.call(that, searchMatch, searchValue);
					}
				} else if (that.selectpicker.search.previousValue) {
					// for IE11 (#2402)
					that.$menuInner.scrollTop(0);
					that.createView(false);
				}
			});
		},

		_searchStyle: function () {
			return this.options.liveSearchStyle || 'contains';
		},

		val: function (value) {
			var element = this.$element[0];

			if (typeof value !== 'undefined') {
				var selectedOptions = getSelectedOptions.call(this),
					prevValue = getSelectValues.call(this, selectedOptions);

				changedArguments = [null, null, prevValue];

				if (!Array.isArray(value)) value = [value];

				value.map(String);

				for (var i = 0; i < selectedOptions.length; i++) {
					var item = selectedOptions[i];

					if (item && value.indexOf(String(item.value)) === -1) {
						this.setSelected(item, false);
					}
				}

				// only update selected value if it matches an existing option
				this.selectpicker.main.data.filter(function (item) {
					if (value.indexOf(String(item.value)) !== -1) {
						this.setSelected(item, true);
						return true;
					}

					return false;
				}, this);

				if (this.options.source.data)
					element.appendChild(this.selectpicker.main.optionQueue);

				this.$element.trigger('changed' + EVENT_KEY, changedArguments);

				if (this.$newElement.hasClass(classNames.SHOW)) {
					if (this.multiple) {
						this.setOptionStatus(true);
					} else {
						var liSelectedIndex = (element.options[element.selectedIndex] || {})
							.liIndex;

						if (typeof liSelectedIndex === 'number') {
							this.setSelected(
								this.selectpicker.current.data[liSelectedIndex],
								true
							);
						}
					}
				}

				this.render();

				changedArguments = null;

				return this.$element;
			} else {
				return this.$element.val();
			}
		},

		changeAll: function (status) {
			if (!this.multiple) return;
			if (typeof status === 'undefined') status = true;

			var element = this.$element[0],
				previousSelected = 0,
				currentSelected = 0,
				prevValue = getSelectValues.call(this);

			element.classList.add('bs-select-hidden');

			for (
				var i = 0, data = this.selectpicker.current.data, len = data.length;
				i < len;
				i++
			) {
				var liData = data[i],
					option = liData.option;

				if (option && !liData.disabled && liData.type !== 'divider') {
					if (liData.selected) previousSelected++;
					option.selected = status;
					liData.selected = status;
					if (status === true) currentSelected++;
				}
			}

			element.classList.remove('bs-select-hidden');

			if (previousSelected === currentSelected) return;

			this.setOptionStatus();

			changedArguments = [null, null, prevValue];

			this.$element.triggerNative('change');
		},

		selectAll: function () {
			return this.changeAll(true);
		},

		deselectAll: function () {
			return this.changeAll(false);
		},

		toggle: function (e, state) {
			var isActive,
				triggerClick = state === undefined;

			e = e || window.event;

			if (e) e.stopPropagation();

			if (triggerClick === false) {
				isActive = this.$newElement[0].classList.contains(classNames.SHOW);
				triggerClick =
					(state === true && isActive === false) ||
					(state === false && isActive === true);
			}

			if (triggerClick) this.$button.trigger('click.bs.dropdown.data-api');
		},

		open: function (e) {
			this.toggle(e, true);
		},

		close: function (e) {
			this.toggle(e, false);
		},

		keydown: function (e) {
			var $this = $(this),
				isToggle = $this.hasClass('dropdown-toggle'),
				$parent = isToggle
					? $this.closest('.dropdown')
					: $this.closest(Selector.MENU),
				that = $parent.data('this'),
				$items = that.findLis(),
				index,
				isActive,
				liActive,
				activeLi,
				offset,
				updateScroll = false,
				downOnTab =
					e.which === keyCodes.TAB && !isToggle && !that.options.selectOnTab,
				isArrowKey = REGEXP_ARROW.test(e.which) || downOnTab,
				scrollTop = that.$menuInner[0].scrollTop,
				isVirtual = that.isVirtual(),
				position0 = isVirtual === true ? that.selectpicker.view.position0 : 0;

			// do nothing if a function key is pressed
			if (e.which >= 112 && e.which <= 123) return;

			isActive = that.$menu.hasClass(classNames.SHOW);

			if (
				!isActive &&
				(isArrowKey ||
					(e.which >= 48 && e.which <= 57) ||
					(e.which >= 96 && e.which <= 105) ||
					(e.which >= 65 && e.which <= 90))
			) {
				that.$button.trigger('click.bs.dropdown.data-api');

				if (that.options.liveSearch) {
					that.$searchbox.trigger('focus');
					return;
				}
			}

			if (e.which === keyCodes.ESCAPE && isActive) {
				e.preventDefault();
				that.$button.trigger('click.bs.dropdown.data-api').trigger('focus');
			}

			if (isArrowKey) {
				// if up or down
				if (!$items.length) return;

				liActive = that.activeElement;
				index = liActive
					? Array.prototype.indexOf.call(
							liActive.parentElement.children,
							liActive
						)
					: -1;

				if (index !== -1) {
					that.defocusItem(liActive);
				}

				if (e.which === keyCodes.ARROW_UP) {
					// up
					if (index !== -1) index--;
					if (index + position0 < 0) index += $items.length;

					if (!that.selectpicker.view.canHighlight[index + position0]) {
						index =
							that.selectpicker.view.canHighlight
								.slice(0, index + position0)
								.lastIndexOf(true) - position0;
						if (index === -1) index = $items.length - 1;
					}
				} else if (e.which === keyCodes.ARROW_DOWN || downOnTab) {
					// down
					index++;
					if (index + position0 >= that.selectpicker.view.canHighlight.length)
						index = that.selectpicker.view.firstHighlightIndex;

					if (!that.selectpicker.view.canHighlight[index + position0]) {
						index =
							index +
							1 +
							that.selectpicker.view.canHighlight
								.slice(index + position0 + 1)
								.indexOf(true);
					}
				}

				e.preventDefault();

				var liActiveIndex = position0 + index;

				if (e.which === keyCodes.ARROW_UP) {
					// up
					// scroll to bottom and highlight last option
					if (position0 === 0 && index === $items.length - 1) {
						that.$menuInner[0].scrollTop = that.$menuInner[0].scrollHeight;

						liActiveIndex = that.selectpicker.current.elements.length - 1;
					} else {
						activeLi = that.selectpicker.current.data[liActiveIndex];

						// could be undefined if no results exist
						if (activeLi) {
							offset = activeLi.position - activeLi.height;

							updateScroll = offset < scrollTop;
						}
					}
				} else if (e.which === keyCodes.ARROW_DOWN || downOnTab) {
					// down
					// scroll to top and highlight first option
					if (index === that.selectpicker.view.firstHighlightIndex) {
						that.$menuInner[0].scrollTop = 0;

						liActiveIndex = that.selectpicker.view.firstHighlightIndex;
					} else {
						activeLi = that.selectpicker.current.data[liActiveIndex];

						// could be undefined if no results exist
						if (activeLi) {
							offset = activeLi.position - that.sizeInfo.menuInnerHeight;

							updateScroll = offset > scrollTop;
						}
					}
				}

				liActive = that.selectpicker.current.elements[liActiveIndex];

				that.activeElement = (
					that.selectpicker.current.data[liActiveIndex] || {}
				).element;

				that.focusItem(liActive);

				that.selectpicker.view.currentActive = liActive;

				if (updateScroll) that.$menuInner[0].scrollTop = offset;

				if (that.options.liveSearch) {
					that.$searchbox.trigger('focus');
				} else {
					$this.trigger('focus');
				}
			} else if (
				(!$this.is('input') && !REGEXP_TAB_OR_ESCAPE.test(e.which)) ||
				(e.which === keyCodes.SPACE && that.selectpicker.keydown.keyHistory)
			) {
				var searchMatch,
					matches = [],
					keyHistory;

				e.preventDefault();

				that.selectpicker.keydown.keyHistory += keyCodeMap[e.which];

				if (that.selectpicker.keydown.resetKeyHistory.cancel)
					clearTimeout(that.selectpicker.keydown.resetKeyHistory.cancel);
				that.selectpicker.keydown.resetKeyHistory.cancel =
					that.selectpicker.keydown.resetKeyHistory.start();

				keyHistory = that.selectpicker.keydown.keyHistory;

				// if all letters are the same, set keyHistory to just the first character when searching
				if (/^(.)\1+$/.test(keyHistory)) {
					keyHistory = keyHistory.charAt(0);
				}

				// find matches
				for (var i = 0; i < that.selectpicker.current.data.length; i++) {
					var li = that.selectpicker.current.data[i],
						hasMatch;

					hasMatch = stringSearch(li, keyHistory, 'startsWith', true);

					if (hasMatch && that.selectpicker.view.canHighlight[i]) {
						matches.push(li.element);
					}
				}

				if (matches.length) {
					var matchIndex = 0;

					$items.removeClass('active').find('a').removeClass('active');

					// either only one key has been pressed or they are all the same key
					if (keyHistory.length === 1) {
						matchIndex = matches.indexOf(that.activeElement);

						if (matchIndex === -1 || matchIndex === matches.length - 1) {
							matchIndex = 0;
						} else {
							matchIndex++;
						}
					}

					searchMatch = matches[matchIndex];

					activeLi = that.selectpicker.main.data[searchMatch];

					if (scrollTop - activeLi.position > 0) {
						offset = activeLi.position - activeLi.height;
						updateScroll = true;
					} else {
						offset = activeLi.position - that.sizeInfo.menuInnerHeight;
						// if the option is already visible at the current scroll position, just keep it the same
						updateScroll =
							activeLi.position > scrollTop + that.sizeInfo.menuInnerHeight;
					}

					liActive = that.selectpicker.main.elements[searchMatch];

					that.activeElement = liActive;

					that.focusItem(liActive);

					if (liActive) liActive.firstChild.focus();

					if (updateScroll) that.$menuInner[0].scrollTop = offset;

					$this.trigger('focus');
				}
			}

			// Select focused option if "Enter", "Spacebar" or "Tab" (when selectOnTab is true) are pressed inside the menu.
			if (
				isActive &&
				((e.which === keyCodes.SPACE &&
					!that.selectpicker.keydown.keyHistory) ||
					e.which === keyCodes.ENTER ||
					(e.which === keyCodes.TAB && that.options.selectOnTab))
			) {
				if (e.which !== keyCodes.SPACE) e.preventDefault();

				if (!that.options.liveSearch || e.which !== keyCodes.SPACE) {
					that.$menuInner.find('.active a').trigger('click', true); // retain active class
					$this.trigger('focus');

					if (!that.options.liveSearch) {
						// Prevent screen from scrolling if the user hits the spacebar
						e.preventDefault();
						// Fixes spacebar selection of dropdown items in FF & IE
						$(document).data('spaceSelect', true);
					}
				}
			}
		},

		mobile: function () {
			// ensure mobile is set to true if mobile function is called after init
			this.options.mobile = true;
			this.$element[0].classList.add('mobile-device');
		},

		refresh: function () {
			var that = this;
			// update options if data attributes have been changed
			var config = $.extend(
				{},
				this.options,
				getAttributesObject(this.$element),
				this.$element.data()
			); // in this order on refresh, as user may change attributes on select, and options object is not passed on refresh
			this.options = config;

			if (this.options.source.data) {
				this.render();
				this.buildList();
			} else {
				this.fetchData(function () {
					that.render();
					that.buildList();
				});
			}

			this.checkDisabled();
			this.setStyle();
			this.setWidth();

			this.setSize(true);

			this.$element.trigger('refreshed' + EVENT_KEY);
		},

		hide: function () {
			this.$newElement.hide();
		},

		show: function () {
			this.$newElement.show();
		},

		remove: function () {
			this.$newElement.remove();
			this.$element.remove();
		},

		destroy: function () {
			this.$newElement.before(this.$element).remove();

			if (this.$bsContainer) {
				this.$bsContainer.remove();
			} else {
				this.$menu.remove();
			}

			if (
				this.selectpicker.view.titleOption &&
				this.selectpicker.view.titleOption.parentNode
			) {
				this.selectpicker.view.titleOption.parentNode.removeChild(
					this.selectpicker.view.titleOption
				);
			}

			this.$element
				.off(EVENT_KEY)
				.removeData('selectpicker')
				.removeClass('bs-select-hidden selectpicker mobile-device');

			$(window).off(EVENT_KEY + '.' + this.selectId);
		},
	};

	// SELECTPICKER PLUGIN DEFINITION
	// ==============================
	function Plugin(option) {
		// get the args of the outer function..
		var args = arguments;
		// The arguments of the function are explicitly re-defined from the argument list, because the shift causes them
		// to get lost/corrupted in android 2.3 and IE9 #715 #775
		var _option = option;

		[].shift.apply(args);

		// if the version was not set successfully
		if (!version.success) {
			// try to retreive it again
			try {
				version.full = (getVersion() || '').split(' ')[0].split('.');
			} catch (err) {
				// fall back to use BootstrapVersion if set
				if (Selectpicker.BootstrapVersion) {
					version.full = Selectpicker.BootstrapVersion.split(' ')[0].split('.');
				} else {
					version.full = [version.major, '0', '0'];

					console.warn(
						"There was an issue retrieving Bootstrap's version. " +
							'Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. ' +
							'If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.',
						err
					);
				}
			}

			version.major = version.full[0];
			version.success = true;
		}

		if (version.major >= '4') {
			// some defaults need to be changed if using Bootstrap 4
			// check to see if they have already been manually changed before forcing them to update
			var toUpdate = [];

			if (Selectpicker.DEFAULTS.style === classNames.BUTTONCLASS)
				toUpdate.push({ name: 'style', className: 'BUTTONCLASS' });
			if (Selectpicker.DEFAULTS.iconBase === classNames.ICONBASE)
				toUpdate.push({ name: 'iconBase', className: 'ICONBASE' });
			if (Selectpicker.DEFAULTS.tickIcon === classNames.TICKICON)
				toUpdate.push({ name: 'tickIcon', className: 'TICKICON' });

			classNames.DIVIDER = 'dropdown-divider';
			classNames.SHOW = 'show';
			classNames.BUTTONCLASS = 'btn-light';
			classNames.POPOVERHEADER = 'popover-header';
			classNames.ICONBASE = '';
			classNames.TICKICON = 'bs-ok-default';

			for (var i = 0; i < toUpdate.length; i++) {
				var option = toUpdate[i];
				Selectpicker.DEFAULTS[option.name] = classNames[option.className];
			}
		}

		if (version.major > '4') {
			Selector.DATA_TOGGLE = 'data-bs-toggle="dropdown"';
		}

		var value;
		var chain = this.each(function () {
			var $this = $(this);
			if ($this.is('select')) {
				var data = $this.data('selectpicker'),
					options = typeof _option == 'object' && _option;

				// for backwards compatibility
				// (using title as placeholder is deprecated - remove in v2.0.0)
				if (options.title) options.placeholder = options.title;

				if (!data) {
					var dataAttributes = $this.data();

					for (var dataAttr in dataAttributes) {
						if (
							Object.prototype.hasOwnProperty.call(dataAttributes, dataAttr) &&
							$.inArray(dataAttr, DISALLOWED_ATTRIBUTES) !== -1
						) {
							delete dataAttributes[dataAttr];
						}
					}

					var config = $.extend(
						{},
						Selectpicker.DEFAULTS,
						$.fn.selectpicker.defaults || {},
						getAttributesObject($this),
						dataAttributes,
						options
					); // this is correct order on initial render
					config.template = $.extend(
						{},
						Selectpicker.DEFAULTS.template,
						$.fn.selectpicker.defaults
							? $.fn.selectpicker.defaults.template
							: {},
						dataAttributes.template,
						options.template
					);
					config.source = $.extend(
						{},
						Selectpicker.DEFAULTS.source,
						$.fn.selectpicker.defaults ? $.fn.selectpicker.defaults.source : {},
						options.source
					);
					$this.data('selectpicker', (data = new Selectpicker(this, config)));
				} else if (options) {
					for (var i in options) {
						if (Object.prototype.hasOwnProperty.call(options, i)) {
							data.options[i] = options[i];
						}
					}
				}

				if (typeof _option == 'string') {
					if (data[_option] instanceof Function) {
						value = data[_option].apply(data, args);
					} else {
						value = data.options[_option];
					}
				}
			}
		});

		if (typeof value !== 'undefined') {
			// noinspection JSUnusedAssignment
			return value;
		} else {
			return chain;
		}
	}

	var old = $.fn.selectpicker;
	$.fn.selectpicker = Plugin;
	$.fn.selectpicker.Constructor = Selectpicker;

	// SELECTPICKER NO CONFLICT
	// ========================
	$.fn.selectpicker.noConflict = function () {
		$.fn.selectpicker = old;
		return this;
	};

	// get Bootstrap's keydown event handler for either Bootstrap 4 or Bootstrap 3
	function keydownHandler() {
		if (version.major < 5) {
			if ($.fn.dropdown) {
				// wait to define until function is called in case Bootstrap isn't loaded yet
				var bootstrapKeydown =
					$.fn.dropdown.Constructor._dataApiKeydownHandler ||
					$.fn.dropdown.Constructor.prototype.keydown;
				return bootstrapKeydown.apply(this, arguments);
			}
		} else {
			return Dropdown.dataApiKeydownHandler;
		}
	}

	$(document)
		.off('keydown.bs.dropdown.data-api')
		.on(
			'keydown.bs.dropdown.data-api',
			':not(.bootstrap-select) > [' + Selector.DATA_TOGGLE + ']',
			keydownHandler
		)
		.on(
			'keydown.bs.dropdown.data-api',
			':not(.bootstrap-select) > .dropdown-menu',
			keydownHandler
		)
		.on(
			'keydown' + EVENT_KEY,
			'.bootstrap-select [' +
				Selector.DATA_TOGGLE +
				'], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input',
			Selectpicker.prototype.keydown
		)
		.on(
			'focusin.modal',
			'.bootstrap-select [' +
				Selector.DATA_TOGGLE +
				'], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input',
			function (e) {
				e.stopPropagation();
			}
		);

	// SELECTPICKER DATA-API
	// =====================
	document.addEventListener('DOMContentLoaded', function () {
		$('.selectpicker').each(function () {
			var $selectpicker = $(this);
			Plugin.call($selectpicker, $selectpicker.data());
		});
	});
})(jQuery);
!(function (t, e) {
	'object' == typeof exports && 'undefined' != typeof module
		? e(exports)
		: 'function' == typeof define && define.amd
			? define(['exports'], e)
			: e(
					((t =
						'undefined' != typeof globalThis ? globalThis : t || self).window =
						t.window || {})
				);
})(this, function (t) {
	'use strict';
	const e = (t, e = 1e4) => (
			(t = parseFloat(t + '') || 0), Math.round((t + Number.EPSILON) * e) / e
		),
		i = function (t) {
			if (!(t && t instanceof Element && t.offsetParent)) return !1;
			const e = t.scrollHeight > t.clientHeight,
				i = window.getComputedStyle(t).overflowY,
				n = -1 !== i.indexOf('hidden'),
				s = -1 !== i.indexOf('visible');
			return e && !n && !s;
		},
		n = function (t, e = void 0) {
			return (
				!(!t || t === document.body || (e && t === e)) &&
				(i(t) ? t : n(t.parentElement, e))
			);
		},
		s = function (t) {
			var e = new DOMParser().parseFromString(t, 'text/html').body;
			if (e.childElementCount > 1) {
				for (var i = document.createElement('div'); e.firstChild; )
					i.appendChild(e.firstChild);
				return i;
			}
			return e.firstChild;
		},
		o = (t) => `${t || ''}`.split(' ').filter((t) => !!t),
		a = (t, e, i) => {
			t &&
				o(e).forEach((e) => {
					t.classList.toggle(e, i || !1);
				});
		};
	class r {
		constructor(t) {
			Object.defineProperty(this, 'pageX', {
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0,
			}),
				Object.defineProperty(this, 'pageY', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0,
				}),
				Object.defineProperty(this, 'clientX', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0,
				}),
				Object.defineProperty(this, 'clientY', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0,
				}),
				Object.defineProperty(this, 'id', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0,
				}),
				Object.defineProperty(this, 'time', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0,
				}),
				Object.defineProperty(this, 'nativePointer', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0,
				}),
				(this.nativePointer = t),
				(this.pageX = t.pageX),
				(this.pageY = t.pageY),
				(this.clientX = t.clientX),
				(this.clientY = t.clientY),
				(this.id = self.Touch && t instanceof Touch ? t.identifier : -1),
				(this.time = Date.now());
		}
	}
	const l = { passive: !1 };
	class c {
		constructor(
			t,
			{ start: e = () => !0, move: i = () => {}, end: n = () => {} }
		) {
			Object.defineProperty(this, 'element', {
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0,
			}),
				Object.defineProperty(this, 'startCallback', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0,
				}),
				Object.defineProperty(this, 'moveCallback', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0,
				}),
				Object.defineProperty(this, 'endCallback', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0,
				}),
				Object.defineProperty(this, 'currentPointers', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: [],
				}),
				Object.defineProperty(this, 'startPointers', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: [],
				}),
				(this.element = t),
				(this.startCallback = e),
				(this.moveCallback = i),
				(this.endCallback = n);
			for (const t of [
				'onPointerStart',
				'onTouchStart',
				'onMove',
				'onTouchEnd',
				'onPointerEnd',
				'onWindowBlur',
			])
				this[t] = this[t].bind(this);
			this.element.addEventListener('mousedown', this.onPointerStart, l),
				this.element.addEventListener('touchstart', this.onTouchStart, l),
				this.element.addEventListener('touchmove', this.onMove, l),
				this.element.addEventListener('touchend', this.onTouchEnd),
				this.element.addEventListener('touchcancel', this.onTouchEnd);
		}
		onPointerStart(t) {
			if (!t.buttons || 0 !== t.button) return;
			const e = new r(t);
			this.currentPointers.some((t) => t.id === e.id) ||
				(this.triggerPointerStart(e, t) &&
					(window.addEventListener('mousemove', this.onMove),
					window.addEventListener('mouseup', this.onPointerEnd),
					window.addEventListener('blur', this.onWindowBlur)));
		}
		onTouchStart(t) {
			for (const e of Array.from(t.changedTouches || []))
				this.triggerPointerStart(new r(e), t);
			window.addEventListener('blur', this.onWindowBlur);
		}
		onMove(t) {
			const e = this.currentPointers.slice(),
				i =
					'changedTouches' in t
						? Array.from(t.changedTouches || []).map((t) => new r(t))
						: [new r(t)],
				n = [];
			for (const t of i) {
				const e = this.currentPointers.findIndex((e) => e.id === t.id);
				e < 0 || (n.push(t), (this.currentPointers[e] = t));
			}
			n.length && this.moveCallback(t, this.currentPointers.slice(), e);
		}
		onPointerEnd(t) {
			(t.buttons > 0 && 0 !== t.button) ||
				(this.triggerPointerEnd(t, new r(t)),
				window.removeEventListener('mousemove', this.onMove),
				window.removeEventListener('mouseup', this.onPointerEnd),
				window.removeEventListener('blur', this.onWindowBlur));
		}
		onTouchEnd(t) {
			for (const e of Array.from(t.changedTouches || []))
				this.triggerPointerEnd(t, new r(e));
		}
		triggerPointerStart(t, e) {
			return (
				!!this.startCallback(e, t, this.currentPointers.slice()) &&
				(this.currentPointers.push(t), this.startPointers.push(t), !0)
			);
		}
		triggerPointerEnd(t, e) {
			const i = this.currentPointers.findIndex((t) => t.id === e.id);
			i < 0 ||
				(this.currentPointers.splice(i, 1),
				this.startPointers.splice(i, 1),
				this.endCallback(t, e, this.currentPointers.slice()));
		}
		onWindowBlur() {
			this.clear();
		}
		clear() {
			for (; this.currentPointers.length; ) {
				const t = this.currentPointers[this.currentPointers.length - 1];
				this.currentPointers.splice(this.currentPointers.length - 1, 1),
					this.startPointers.splice(this.currentPointers.length - 1, 1),
					this.endCallback(
						new Event('touchend', {
							bubbles: !0,
							cancelable: !0,
							clientX: t.clientX,
							clientY: t.clientY,
						}),
						t,
						this.currentPointers.slice()
					);
			}
		}
		stop() {
			this.element.removeEventListener('mousedown', this.onPointerStart, l),
				this.element.removeEventListener('touchstart', this.onTouchStart, l),
				this.element.removeEventListener('touchmove', this.onMove, l),
				this.element.removeEventListener('touchend', this.onTouchEnd),
				this.element.removeEventListener('touchcancel', this.onTouchEnd),
				window.removeEventListener('mousemove', this.onMove),
				window.removeEventListener('mouseup', this.onPointerEnd),
				window.removeEventListener('blur', this.onWindowBlur);
		}
	}
	function h(t, e) {
		return e
			? Math.sqrt(
					Math.pow(e.clientX - t.clientX, 2) +
						Math.pow(e.clientY - t.clientY, 2)
				)
			: 0;
	}
	function d(t, e) {
		return e
			? {
					clientX: (t.clientX + e.clientX) / 2,
					clientY: (t.clientY + e.clientY) / 2,
				}
			: t;
	}
	const u = (t) =>
			'object' == typeof t &&
			null !== t &&
			t.constructor === Object &&
			'[object Object]' === Object.prototype.toString.call(t),
		p = (t, ...e) => {
			const i = e.length;
			for (let n = 0; n < i; n++) {
				const i = e[n] || {};
				Object.entries(i).forEach(([e, i]) => {
					const n = Array.isArray(i) ? [] : {};
					t[e] || Object.assign(t, { [e]: n }),
						u(i)
							? Object.assign(t[e], p(n, i))
							: Array.isArray(i)
								? Object.assign(t, { [e]: [...i] })
								: Object.assign(t, { [e]: i });
				});
			}
			return t;
		},
		f = function (t, e) {
			return t
				.split('.')
				.reduce((t, e) => ('object' == typeof t ? t[e] : void 0), e);
		};
	class g {
		constructor(t = {}) {
			Object.defineProperty(this, 'options', {
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: t,
			}),
				Object.defineProperty(this, 'events', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: new Map(),
				}),
				this.setOptions(t);
			for (const t of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))
				t.startsWith('on') &&
					'function' == typeof this[t] &&
					(this[t] = this[t].bind(this));
		}
		setOptions(t) {
			this.options = t ? p({}, this.constructor.defaults, t) : {};
			for (const [t, e] of Object.entries(this.option('on') || {}))
				this.on(t, e);
		}
		option(t, ...e) {
			let i = f(t, this.options);
			return i && 'function' == typeof i && (i = i.call(this, this, ...e)), i;
		}
		optionFor(t, e, i, ...n) {
			let s = f(e, t);
			var o;
			'string' != typeof (o = s) ||
				isNaN(o) ||
				isNaN(parseFloat(o)) ||
				(s = parseFloat(s)),
				'true' === s && (s = !0),
				'false' === s && (s = !1),
				s && 'function' == typeof s && (s = s.call(this, this, t, ...n));
			let a = f(e, this.options);
			return (
				a && 'function' == typeof a
					? (s = a.call(this, this, t, ...n, s))
					: void 0 === s && (s = a),
				void 0 === s ? i : s
			);
		}
		cn(t) {
			const e = this.options.classes;
			return (e && e[t]) || '';
		}
		localize(t, e = []) {
			t = String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g, (t, e, i) => {
				let n = '';
				return (
					i
						? (n = this.option(
								`${e[0] + e.toLowerCase().substring(1)}.l10n.${i}`
							))
						: e && (n = this.option(`l10n.${e}`)),
					n || (n = t),
					n
				);
			});
			for (let i = 0; i < e.length; i++) t = t.split(e[i][0]).join(e[i][1]);
			return (t = t.replace(/\{\{(.*?)\}\}/g, (t, e) => e));
		}
		on(t, e) {
			let i = [];
			'string' == typeof t ? (i = t.split(' ')) : Array.isArray(t) && (i = t),
				this.events || (this.events = new Map()),
				i.forEach((t) => {
					let i = this.events.get(t);
					i || (this.events.set(t, []), (i = [])),
						i.includes(e) || i.push(e),
						this.events.set(t, i);
				});
		}
		off(t, e) {
			let i = [];
			'string' == typeof t ? (i = t.split(' ')) : Array.isArray(t) && (i = t),
				i.forEach((t) => {
					const i = this.events.get(t);
					if (Array.isArray(i)) {
						const t = i.indexOf(e);
						t > -1 && i.splice(t, 1);
					}
				});
		}
		emit(t, ...e) {
			[...(this.events.get(t) || [])].forEach((t) => t(this, ...e)),
				'*' !== t && this.emit('*', t, ...e);
		}
	}
	Object.defineProperty(g, 'version', {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: '5.0.36',
	}),
		Object.defineProperty(g, 'defaults', {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: {},
		});
	class m extends g {
		constructor(t = {}) {
			super(t),
				Object.defineProperty(this, 'plugins', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: {},
				});
		}
		attachPlugins(t = {}) {
			const e = new Map();
			for (const [i, n] of Object.entries(t)) {
				const t = this.option(i),
					s = this.plugins[i];
				s || !1 === t
					? s && !1 === t && (s.detach(), delete this.plugins[i])
					: e.set(i, new n(this, t || {}));
			}
			for (const [t, i] of e) (this.plugins[t] = i), i.attach();
		}
		detachPlugins(t) {
			t = t || Object.keys(this.plugins);
			for (const e of t) {
				const t = this.plugins[e];
				t && t.detach(), delete this.plugins[e];
			}
			return this.emit('detachPlugins'), this;
		}
	}
	var v;
	!(function (t) {
		(t[(t.Init = 0)] = 'Init'),
			(t[(t.Error = 1)] = 'Error'),
			(t[(t.Ready = 2)] = 'Ready'),
			(t[(t.Panning = 3)] = 'Panning'),
			(t[(t.Mousemove = 4)] = 'Mousemove'),
			(t[(t.Destroy = 5)] = 'Destroy');
	})(v || (v = {}));
	const b = ['a', 'b', 'c', 'd', 'e', 'f'],
		y = {
			PANUP: 'Move up',
			PANDOWN: 'Move down',
			PANLEFT: 'Move left',
			PANRIGHT: 'Move right',
			ZOOMIN: 'Zoom in',
			ZOOMOUT: 'Zoom out',
			TOGGLEZOOM: 'Toggle zoom level',
			TOGGLE1TO1: 'Toggle zoom level',
			ITERATEZOOM: 'Toggle zoom level',
			ROTATECCW: 'Rotate counterclockwise',
			ROTATECW: 'Rotate clockwise',
			FLIPX: 'Flip horizontally',
			FLIPY: 'Flip vertically',
			FITX: 'Fit horizontally',
			FITY: 'Fit vertically',
			RESET: 'Reset',
			TOGGLEFS: 'Toggle fullscreen',
		},
		w = {
			content: null,
			width: 'auto',
			height: 'auto',
			panMode: 'drag',
			touch: !0,
			dragMinThreshold: 3,
			lockAxis: !1,
			mouseMoveFactor: 1,
			mouseMoveFriction: 0.12,
			zoom: !0,
			pinchToZoom: !0,
			panOnlyZoomed: 'auto',
			minScale: 1,
			maxScale: 2,
			friction: 0.25,
			dragFriction: 0.35,
			decelFriction: 0.05,
			click: 'toggleZoom',
			dblClick: !1,
			wheel: 'zoom',
			wheelLimit: 7,
			spinner: !0,
			bounds: 'auto',
			infinite: !1,
			rubberband: !0,
			bounce: !0,
			maxVelocity: 75,
			transformParent: !1,
			classes: {
				content: 'f-panzoom__content',
				isLoading: 'is-loading',
				canZoomIn: 'can-zoom_in',
				canZoomOut: 'can-zoom_out',
				isDraggable: 'is-draggable',
				isDragging: 'is-dragging',
				inFullscreen: 'in-fullscreen',
				htmlHasFullscreen: 'with-panzoom-in-fullscreen',
			},
			l10n: y,
		},
		x = '<circle cx="25" cy="25" r="20"></circle>',
		E =
			'<div class="f-spinner"><svg viewBox="0 0 50 50">' +
			x +
			x +
			'</svg></div>',
		S = (t) => t && null !== t && t instanceof Element && 'nodeType' in t,
		P = (t, e) => {
			t &&
				o(e).forEach((e) => {
					t.classList.remove(e);
				});
		},
		C = (t, e) => {
			t &&
				o(e).forEach((e) => {
					t.classList.add(e);
				});
		},
		T = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 },
		M = 1e5,
		O = 1e4,
		A = 'mousemove',
		L = 'drag',
		z = 'content',
		R = 'auto';
	let k = null,
		I = null;
	class D extends m {
		get fits() {
			return (
				this.contentRect.width - this.contentRect.fitWidth < 1 &&
				this.contentRect.height - this.contentRect.fitHeight < 1
			);
		}
		get isTouchDevice() {
			return null === I && (I = window.matchMedia('(hover: none)').matches), I;
		}
		get isMobile() {
			return (
				null === k &&
					(k = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)),
				k
			);
		}
		get panMode() {
			return this.options.panMode !== A || this.isTouchDevice ? L : A;
		}
		get panOnlyZoomed() {
			const t = this.options.panOnlyZoomed;
			return t === R ? this.isTouchDevice : t;
		}
		get isInfinite() {
			return this.option('infinite');
		}
		get angle() {
			return (180 * Math.atan2(this.current.b, this.current.a)) / Math.PI || 0;
		}
		get targetAngle() {
			return (180 * Math.atan2(this.target.b, this.target.a)) / Math.PI || 0;
		}
		get scale() {
			const { a: t, b: e } = this.current;
			return Math.sqrt(t * t + e * e) || 1;
		}
		get targetScale() {
			const { a: t, b: e } = this.target;
			return Math.sqrt(t * t + e * e) || 1;
		}
		get minScale() {
			return this.option('minScale') || 1;
		}
		get fullScale() {
			const { contentRect: t } = this;
			return t.fullWidth / t.fitWidth || 1;
		}
		get maxScale() {
			return this.fullScale * (this.option('maxScale') || 1) || 1;
		}
		get coverScale() {
			const { containerRect: t, contentRect: e } = this,
				i = Math.max(t.height / e.fitHeight, t.width / e.fitWidth) || 1;
			return Math.min(this.fullScale, i);
		}
		get isScaling() {
			return Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting;
		}
		get isContentLoading() {
			const t = this.content;
			return !!(t && t instanceof HTMLImageElement) && !t.complete;
		}
		get isResting() {
			if (this.isBouncingX || this.isBouncingY) return !1;
			for (const t of b) {
				const e = 'e' == t || 'f' === t ? 1e-4 : 1e-5;
				if (Math.abs(this.target[t] - this.current[t]) > e) return !1;
			}
			return !(!this.ignoreBounds && !this.checkBounds().inBounds);
		}
		constructor(t, e = {}, i = {}) {
			var n;
			if (
				(super(e),
				Object.defineProperty(this, 'pointerTracker', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				}),
				Object.defineProperty(this, 'resizeObserver', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				}),
				Object.defineProperty(this, 'updateTimer', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				}),
				Object.defineProperty(this, 'clickTimer', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				}),
				Object.defineProperty(this, 'rAF', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				}),
				Object.defineProperty(this, 'isTicking', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: !1,
				}),
				Object.defineProperty(this, 'ignoreBounds', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: !1,
				}),
				Object.defineProperty(this, 'isBouncingX', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: !1,
				}),
				Object.defineProperty(this, 'isBouncingY', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: !1,
				}),
				Object.defineProperty(this, 'clicks', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: 0,
				}),
				Object.defineProperty(this, 'trackingPoints', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: [],
				}),
				Object.defineProperty(this, 'pwt', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: 0,
				}),
				Object.defineProperty(this, 'cwd', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: 0,
				}),
				Object.defineProperty(this, 'pmme', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0,
				}),
				Object.defineProperty(this, 'friction', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: 0,
				}),
				Object.defineProperty(this, 'state', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: v.Init,
				}),
				Object.defineProperty(this, 'isDragging', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: !1,
				}),
				Object.defineProperty(this, 'container', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0,
				}),
				Object.defineProperty(this, 'content', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0,
				}),
				Object.defineProperty(this, 'spinner', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				}),
				Object.defineProperty(this, 'containerRect', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: { width: 0, height: 0, innerWidth: 0, innerHeight: 0 },
				}),
				Object.defineProperty(this, 'contentRect', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: {
						top: 0,
						right: 0,
						bottom: 0,
						left: 0,
						fullWidth: 0,
						fullHeight: 0,
						fitWidth: 0,
						fitHeight: 0,
						width: 0,
						height: 0,
					},
				}),
				Object.defineProperty(this, 'dragStart', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: { x: 0, y: 0, top: 0, left: 0, time: 0 },
				}),
				Object.defineProperty(this, 'dragOffset', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: { x: 0, y: 0, time: 0 },
				}),
				Object.defineProperty(this, 'current', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: Object.assign({}, T),
				}),
				Object.defineProperty(this, 'target', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: Object.assign({}, T),
				}),
				Object.defineProperty(this, 'velocity', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 },
				}),
				Object.defineProperty(this, 'lockedAxis', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: !1,
				}),
				!t)
			)
				throw new Error('Container Element Not Found');
			(this.container = t),
				this.initContent(),
				this.attachPlugins(Object.assign(Object.assign({}, D.Plugins), i)),
				this.emit('attachPlugins'),
				this.emit('init');
			const o = this.content;
			if (
				(o.addEventListener('load', this.onLoad),
				o.addEventListener('error', this.onError),
				this.isContentLoading)
			) {
				if (this.option('spinner')) {
					t.classList.add(this.cn('isLoading'));
					const e = s(E);
					!t.contains(o) || o.parentElement instanceof HTMLPictureElement
						? (this.spinner = t.appendChild(e))
						: (this.spinner =
								(null === (n = o.parentElement) || void 0 === n
									? void 0
									: n.insertBefore(e, o)) || null);
				}
				this.emit('beforeLoad');
			} else
				queueMicrotask(() => {
					this.enable();
				});
		}
		initContent() {
			const { container: t } = this,
				e = this.cn(z);
			let i = this.option(z) || t.querySelector(`.${e}`);
			if (
				(i ||
					((i = t.querySelector('img,picture') || t.firstElementChild),
					i && C(i, e)),
				i instanceof HTMLPictureElement && (i = i.querySelector('img')),
				!i)
			)
				throw new Error('No content found');
			this.content = i;
		}
		onLoad() {
			const { spinner: t, container: e, state: i } = this;
			t && (t.remove(), (this.spinner = null)),
				this.option('spinner') && e.classList.remove(this.cn('isLoading')),
				this.emit('afterLoad'),
				i === v.Init ? this.enable() : this.updateMetrics();
		}
		onError() {
			this.state !== v.Destroy &&
				(this.spinner && (this.spinner.remove(), (this.spinner = null)),
				this.stop(),
				this.detachEvents(),
				(this.state = v.Error),
				this.emit('error'));
		}
		getNextScale(t) {
			const {
				fullScale: e,
				targetScale: i,
				coverScale: n,
				maxScale: s,
				minScale: o,
			} = this;
			let a = o;
			switch (t) {
				case 'toggleMax':
					a = i - o < 0.5 * (s - o) ? s : o;
					break;
				case 'toggleCover':
					a = i - o < 0.5 * (n - o) ? n : o;
					break;
				case 'toggleZoom':
					a = i - o < 0.5 * (e - o) ? e : o;
					break;
				case 'iterateZoom':
					let t = [1, e, s].sort((t, e) => t - e),
						r = t.findIndex((t) => t > i + 1e-5);
					a = t[r] || 1;
			}
			return a;
		}
		attachObserver() {
			var t;
			const e = () => {
				const { container: t, containerRect: e } = this;
				return (
					Math.abs(e.width - t.getBoundingClientRect().width) > 0.1 ||
					Math.abs(e.height - t.getBoundingClientRect().height) > 0.1
				);
			};
			this.resizeObserver ||
				void 0 === window.ResizeObserver ||
				(this.resizeObserver = new ResizeObserver(() => {
					this.updateTimer ||
						(e()
							? (this.onResize(),
								this.isMobile &&
									(this.updateTimer = setTimeout(() => {
										e() && this.onResize(), (this.updateTimer = null);
									}, 500)))
							: this.updateTimer &&
								(clearTimeout(this.updateTimer), (this.updateTimer = null)));
				})),
				null === (t = this.resizeObserver) ||
					void 0 === t ||
					t.observe(this.container);
		}
		detachObserver() {
			var t;
			null === (t = this.resizeObserver) || void 0 === t || t.disconnect();
		}
		attachEvents() {
			const { container: t } = this;
			t.addEventListener('click', this.onClick, { passive: !1, capture: !1 }),
				t.addEventListener('wheel', this.onWheel, { passive: !1 }),
				(this.pointerTracker = new c(t, {
					start: this.onPointerDown,
					move: this.onPointerMove,
					end: this.onPointerUp,
				})),
				document.addEventListener(A, this.onMouseMove);
		}
		detachEvents() {
			var t;
			const { container: e } = this;
			e.removeEventListener('click', this.onClick, {
				passive: !1,
				capture: !1,
			}),
				e.removeEventListener('wheel', this.onWheel, { passive: !1 }),
				null === (t = this.pointerTracker) || void 0 === t || t.stop(),
				(this.pointerTracker = null),
				document.removeEventListener(A, this.onMouseMove),
				document.removeEventListener('keydown', this.onKeydown, !0),
				this.clickTimer &&
					(clearTimeout(this.clickTimer), (this.clickTimer = null)),
				this.updateTimer &&
					(clearTimeout(this.updateTimer), (this.updateTimer = null));
		}
		animate() {
			this.setTargetForce();
			const t = this.friction,
				e = this.option('maxVelocity');
			for (const i of b)
				t
					? ((this.velocity[i] *= 1 - t),
						e &&
							!this.isScaling &&
							(this.velocity[i] = Math.max(
								Math.min(this.velocity[i], e),
								-1 * e
							)),
						(this.current[i] += this.velocity[i]))
					: (this.current[i] = this.target[i]);
			this.setTransform(),
				this.setEdgeForce(),
				!this.isResting || this.isDragging
					? (this.rAF = requestAnimationFrame(() => this.animate()))
					: this.stop('current');
		}
		setTargetForce() {
			for (const t of b)
				('e' === t && this.isBouncingX) ||
					('f' === t && this.isBouncingY) ||
					(this.velocity[t] =
						(1 / (1 - this.friction) - 1) * (this.target[t] - this.current[t]));
		}
		checkBounds(t = 0, e = 0) {
			const { current: i } = this,
				n = i.e + t,
				s = i.f + e,
				o = this.getBounds(),
				{ x: a, y: r } = o,
				l = a.min,
				c = a.max,
				h = r.min,
				d = r.max;
			let u = 0,
				p = 0;
			return (
				l !== 1 / 0 && n < l
					? (u = l - n)
					: c !== 1 / 0 && n > c && (u = c - n),
				h !== 1 / 0 && s < h
					? (p = h - s)
					: d !== 1 / 0 && s > d && (p = d - s),
				Math.abs(u) < 1e-4 && (u = 0),
				Math.abs(p) < 1e-4 && (p = 0),
				Object.assign(Object.assign({}, o), {
					xDiff: u,
					yDiff: p,
					inBounds: !u && !p,
				})
			);
		}
		clampTargetBounds() {
			const { target: t } = this,
				{ x: e, y: i } = this.getBounds();
			e.min !== 1 / 0 && (t.e = Math.max(t.e, e.min)),
				e.max !== 1 / 0 && (t.e = Math.min(t.e, e.max)),
				i.min !== 1 / 0 && (t.f = Math.max(t.f, i.min)),
				i.max !== 1 / 0 && (t.f = Math.min(t.f, i.max));
		}
		calculateContentDim(t = this.current) {
			const { content: e, contentRect: i } = this,
				{ fitWidth: n, fitHeight: s, fullWidth: o, fullHeight: a } = i;
			let r = o,
				l = a;
			if (this.option('zoom') || 0 !== this.angle) {
				const i =
						!(e instanceof HTMLImageElement) &&
						('none' === window.getComputedStyle(e).maxWidth ||
							'none' === window.getComputedStyle(e).maxHeight),
					c = i ? o : n,
					h = i ? a : s,
					d = this.getMatrix(t),
					u = new DOMPoint(0, 0).matrixTransform(d),
					p = new DOMPoint(0 + c, 0).matrixTransform(d),
					f = new DOMPoint(0 + c, 0 + h).matrixTransform(d),
					g = new DOMPoint(0, 0 + h).matrixTransform(d),
					m = Math.abs(f.x - u.x),
					v = Math.abs(f.y - u.y),
					b = Math.abs(g.x - p.x),
					y = Math.abs(g.y - p.y);
				(r = Math.max(m, b)), (l = Math.max(v, y));
			}
			return { contentWidth: r, contentHeight: l };
		}
		setEdgeForce() {
			if (
				this.ignoreBounds ||
				this.isDragging ||
				this.panMode === A ||
				this.targetScale < this.scale
			)
				return (this.isBouncingX = !1), void (this.isBouncingY = !1);
			const { target: t } = this,
				{ x: e, y: i, xDiff: n, yDiff: s } = this.checkBounds();
			const o = this.option('maxVelocity');
			let a = this.velocity.e,
				r = this.velocity.f;
			0 !== n
				? ((this.isBouncingX = !0),
					n * a <= 0
						? (a += 0.14 * n)
						: ((a = 0.14 * n),
							e.min !== 1 / 0 && (this.target.e = Math.max(t.e, e.min)),
							e.max !== 1 / 0 && (this.target.e = Math.min(t.e, e.max))),
					o && (a = Math.max(Math.min(a, o), -1 * o)))
				: (this.isBouncingX = !1),
				0 !== s
					? ((this.isBouncingY = !0),
						s * r <= 0
							? (r += 0.14 * s)
							: ((r = 0.14 * s),
								i.min !== 1 / 0 && (this.target.f = Math.max(t.f, i.min)),
								i.max !== 1 / 0 && (this.target.f = Math.min(t.f, i.max))),
						o && (r = Math.max(Math.min(r, o), -1 * o)))
					: (this.isBouncingY = !1),
				this.isBouncingX && (this.velocity.e = a),
				this.isBouncingY && (this.velocity.f = r);
		}
		enable() {
			const { content: t } = this,
				e = new DOMMatrixReadOnly(window.getComputedStyle(t).transform);
			for (const t of b) this.current[t] = this.target[t] = e[t];
			this.updateMetrics(),
				this.attachObserver(),
				this.attachEvents(),
				(this.state = v.Ready),
				this.emit('ready');
		}
		onClick(t) {
			var e;
			'click' === t.type &&
				0 === t.detail &&
				((this.dragOffset.x = 0), (this.dragOffset.y = 0)),
				this.isDragging &&
					(null === (e = this.pointerTracker) || void 0 === e || e.clear(),
					(this.trackingPoints = []),
					this.startDecelAnim());
			const i = t.target;
			if (!i || t.defaultPrevented) return;
			if (i.hasAttribute('disabled'))
				return t.preventDefault(), void t.stopPropagation();
			if (
				(() => {
					const t = window.getSelection();
					return t && 'Range' === t.type;
				})() &&
				!i.closest('button')
			)
				return;
			const n = i.closest('[data-panzoom-action]'),
				s = i.closest('[data-panzoom-change]'),
				o = n || s,
				a = o && S(o) ? o.dataset : null;
			if (a) {
				const e = a.panzoomChange,
					i = a.panzoomAction;
				if (((e || i) && t.preventDefault(), e)) {
					let t = {};
					try {
						t = JSON.parse(e);
					} catch (t) {
						console && console.warn('The given data was not valid JSON');
					}
					return void this.applyChange(t);
				}
				if (i) return void (this[i] && this[i]());
			}
			if (Math.abs(this.dragOffset.x) > 3 || Math.abs(this.dragOffset.y) > 3)
				return t.preventDefault(), void t.stopPropagation();
			if (i.closest('[data-fancybox]')) return;
			const r = this.content.getBoundingClientRect(),
				l = this.dragStart;
			if (
				l.time &&
				!this.canZoomOut() &&
				(Math.abs(r.x - l.x) > 2 || Math.abs(r.y - l.y) > 2)
			)
				return;
			this.dragStart.time = 0;
			const c = (e) => {
					this.option('zoom', t) &&
						e &&
						'string' == typeof e &&
						/(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(
							e
						) &&
						'function' == typeof this[e] &&
						(t.preventDefault(), this[e]({ event: t }));
				},
				h = this.option('click', t),
				d = this.option('dblClick', t);
			d
				? (this.clicks++,
					1 == this.clicks &&
						(this.clickTimer = setTimeout(() => {
							1 === this.clicks
								? (this.emit('click', t), !t.defaultPrevented && h && c(h))
								: (this.emit('dblClick', t), t.defaultPrevented || c(d)),
								(this.clicks = 0),
								(this.clickTimer = null);
						}, 350)))
				: (this.emit('click', t), !t.defaultPrevented && h && c(h));
		}
		addTrackingPoint(t) {
			const e = this.trackingPoints.filter((t) => t.time > Date.now() - 100);
			e.push(t), (this.trackingPoints = e);
		}
		onPointerDown(t, e, i) {
			var n;
			if (!1 === this.option('touch', t)) return !1;
			(this.pwt = 0),
				(this.dragOffset = { x: 0, y: 0, time: 0 }),
				(this.trackingPoints = []);
			const s = this.content.getBoundingClientRect();
			if (
				((this.dragStart = {
					x: s.x,
					y: s.y,
					top: s.top,
					left: s.left,
					time: Date.now(),
				}),
				this.clickTimer)
			)
				return !1;
			if (this.panMode === A && this.targetScale > 1)
				return t.preventDefault(), t.stopPropagation(), !1;
			const o = t.composedPath()[0];
			if (!i.length) {
				if (
					['TEXTAREA', 'OPTION', 'INPUT', 'SELECT', 'VIDEO', 'IFRAME'].includes(
						o.nodeName
					) ||
					o.closest(
						'[contenteditable],[data-selectable],[data-draggable],[data-clickable],[data-panzoom-change],[data-panzoom-action]'
					)
				)
					return !1;
				null === (n = window.getSelection()) ||
					void 0 === n ||
					n.removeAllRanges();
			}
			if ('mousedown' === t.type)
				['A', 'BUTTON'].includes(o.nodeName) || t.preventDefault();
			else if (Math.abs(this.velocity.a) > 0.3) return !1;
			return (
				(this.target.e = this.current.e),
				(this.target.f = this.current.f),
				this.stop(),
				this.isDragging ||
					((this.isDragging = !0),
					this.addTrackingPoint(e),
					this.emit('touchStart', t)),
				!0
			);
		}
		onPointerMove(t, i, s) {
			if (!1 === this.option('touch', t)) return;
			if (!this.isDragging) return;
			if (
				i.length < 2 &&
				this.panOnlyZoomed &&
				e(this.targetScale) <= e(this.minScale)
			)
				return;
			if ((this.emit('touchMove', t), t.defaultPrevented)) return;
			this.addTrackingPoint(i[0]);
			const { content: o } = this,
				a = d(s[0], s[1]),
				r = d(i[0], i[1]);
			let l = 0,
				c = 0;
			if (i.length > 1) {
				const t = o.getBoundingClientRect();
				(l = a.clientX - t.left - 0.5 * t.width),
					(c = a.clientY - t.top - 0.5 * t.height);
			}
			const u = h(s[0], s[1]),
				p = h(i[0], i[1]);
			let f = u ? p / u : 1,
				g = r.clientX - a.clientX,
				m = r.clientY - a.clientY;
			(this.dragOffset.x += g),
				(this.dragOffset.y += m),
				(this.dragOffset.time = Date.now() - this.dragStart.time);
			let v =
				e(this.targetScale) === e(this.minScale) && this.option('lockAxis');
			if (v && !this.lockedAxis)
				if ('xy' === v || 'y' === v || 'touchmove' === t.type) {
					if (
						Math.abs(this.dragOffset.x) < 6 &&
						Math.abs(this.dragOffset.y) < 6
					)
						return void t.preventDefault();
					const e = Math.abs(
						(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x)) / Math.PI
					);
					(this.lockedAxis = e > 45 && e < 135 ? 'y' : 'x'),
						(this.dragOffset.x = 0),
						(this.dragOffset.y = 0),
						(g = 0),
						(m = 0);
				} else this.lockedAxis = v;
			if (
				(n(t.target, this.content) && ((v = 'x'), (this.dragOffset.y = 0)),
				v &&
					'xy' !== v &&
					this.lockedAxis !== v &&
					e(this.targetScale) === e(this.minScale))
			)
				return;
			t.cancelable && t.preventDefault(),
				this.container.classList.add(this.cn('isDragging'));
			const b = this.checkBounds(g, m);
			this.option('rubberband')
				? ('x' !== this.isInfinite &&
						((b.xDiff > 0 && g < 0) || (b.xDiff < 0 && g > 0)) &&
						(g *= Math.max(
							0,
							0.5 - Math.abs((0.75 / this.contentRect.fitWidth) * b.xDiff)
						)),
					'y' !== this.isInfinite &&
						((b.yDiff > 0 && m < 0) || (b.yDiff < 0 && m > 0)) &&
						(m *= Math.max(
							0,
							0.5 - Math.abs((0.75 / this.contentRect.fitHeight) * b.yDiff)
						)))
				: (b.xDiff && (g = 0), b.yDiff && (m = 0));
			const y = this.targetScale,
				w = this.minScale,
				x = this.maxScale;
			y < 0.5 * w && (f = Math.max(f, w)),
				y > 1.5 * x && (f = Math.min(f, x)),
				'y' === this.lockedAxis && e(y) === e(w) && (g = 0),
				'x' === this.lockedAxis && e(y) === e(w) && (m = 0),
				this.applyChange({
					originX: l,
					originY: c,
					panX: g,
					panY: m,
					scale: f,
					friction: this.option('dragFriction'),
					ignoreBounds: !0,
				});
		}
		onPointerUp(t, e, i) {
			if (i.length)
				return (
					(this.dragOffset.x = 0),
					(this.dragOffset.y = 0),
					void (this.trackingPoints = [])
				);
			this.container.classList.remove(this.cn('isDragging')),
				this.isDragging &&
					(this.addTrackingPoint(e),
					this.panOnlyZoomed &&
						this.contentRect.width - this.contentRect.fitWidth < 1 &&
						this.contentRect.height - this.contentRect.fitHeight < 1 &&
						(this.trackingPoints = []),
					n(t.target, this.content) &&
						'y' === this.lockedAxis &&
						(this.trackingPoints = []),
					this.emit('touchEnd', t),
					(this.isDragging = !1),
					(this.lockedAxis = !1),
					this.state !== v.Destroy &&
						(t.defaultPrevented || this.startDecelAnim()));
		}
		startDecelAnim() {
			var t;
			const i = this.isScaling;
			this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
				(this.isBouncingX = !1),
				(this.isBouncingY = !1);
			for (const t of b) this.velocity[t] = 0;
			(this.target.e = this.current.e),
				(this.target.f = this.current.f),
				P(this.container, 'is-scaling'),
				P(this.container, 'is-animating'),
				(this.isTicking = !1);
			const { trackingPoints: n } = this,
				s = n[0],
				o = n[n.length - 1];
			let a = 0,
				r = 0,
				l = 0;
			o &&
				s &&
				((a = o.clientX - s.clientX),
				(r = o.clientY - s.clientY),
				(l = o.time - s.time));
			const c =
				(null === (t = window.visualViewport) || void 0 === t
					? void 0
					: t.scale) || 1;
			1 !== c && ((a *= c), (r *= c));
			let h = 0,
				d = 0,
				u = 0,
				p = 0,
				f = this.option('decelFriction');
			const g = this.targetScale;
			if (l > 0) {
				(u = Math.abs(a) > 3 ? a / (l / 30) : 0),
					(p = Math.abs(r) > 3 ? r / (l / 30) : 0);
				const t = this.option('maxVelocity');
				t &&
					((u = Math.max(Math.min(u, t), -1 * t)),
					(p = Math.max(Math.min(p, t), -1 * t)));
			}
			u && (h = u / (1 / (1 - f) - 1)),
				p && (d = p / (1 / (1 - f) - 1)),
				('y' === this.option('lockAxis') ||
					('xy' === this.option('lockAxis') &&
						'y' === this.lockedAxis &&
						e(g) === this.minScale)) &&
					(h = u = 0),
				('x' === this.option('lockAxis') ||
					('xy' === this.option('lockAxis') &&
						'x' === this.lockedAxis &&
						e(g) === this.minScale)) &&
					(d = p = 0);
			const m = this.dragOffset.x,
				v = this.dragOffset.y,
				y = this.option('dragMinThreshold') || 0;
			Math.abs(m) < y && Math.abs(v) < y && ((h = d = 0), (u = p = 0)),
				((this.option('zoom') &&
					(g < this.minScale - 1e-5 || g > this.maxScale + 1e-5)) ||
					(i && !h && !d)) &&
					(f = 0.35),
				this.applyChange({ panX: h, panY: d, friction: f }),
				this.emit('decel', u, p, m, v);
		}
		onWheel(t) {
			var e = [-t.deltaX || 0, -t.deltaY || 0, -t.detail || 0].reduce(
				function (t, e) {
					return Math.abs(e) > Math.abs(t) ? e : t;
				}
			);
			const i = Math.max(-1, Math.min(1, e));
			if ((this.emit('wheel', t, i), this.panMode === A)) return;
			if (t.defaultPrevented) return;
			const n = this.option('wheel');
			'pan' === n
				? (t.preventDefault(),
					(this.panOnlyZoomed && !this.canZoomOut()) ||
						this.applyChange({
							panX: 2 * -t.deltaX,
							panY: 2 * -t.deltaY,
							bounce: !1,
						}))
				: 'zoom' === n && !1 !== this.option('zoom') && this.zoomWithWheel(t);
		}
		onMouseMove(t) {
			this.panWithMouse(t);
		}
		onKeydown(t) {
			'Escape' === t.key && this.toggleFS();
		}
		onResize() {
			this.updateMetrics(), this.checkBounds().inBounds || this.requestTick();
		}
		setTransform() {
			this.emit('beforeTransform');
			const { current: t, target: i, content: n, contentRect: s } = this,
				o = Object.assign({}, T);
			for (const n of b) {
				const s = 'e' == n || 'f' === n ? O : M;
				(o[n] = e(t[n], s)),
					Math.abs(i[n] - t[n]) < ('e' == n || 'f' === n ? 0.51 : 0.001) &&
						(t[n] = i[n]);
			}
			let { a: a, b: r, c: l, d: c, e: h, f: d } = o,
				u = `matrix(${a}, ${r}, ${l}, ${c}, ${h}, ${d})`,
				p = n.parentElement instanceof HTMLPictureElement ? n.parentElement : n;
			if (
				(this.option('transformParent') && (p = p.parentElement || p),
				p.style.transform === u)
			)
				return;
			p.style.transform = u;
			const { contentWidth: f, contentHeight: g } = this.calculateContentDim();
			(s.width = f), (s.height = g), this.emit('afterTransform');
		}
		updateMetrics(t = !1) {
			var i;
			if (!this || this.state === v.Destroy) return;
			if (this.isContentLoading) return;
			const n = Math.max(
					1,
					(null === (i = window.visualViewport) || void 0 === i
						? void 0
						: i.scale) || 1
				),
				{ container: s, content: o } = this,
				a = o instanceof HTMLImageElement,
				r = s.getBoundingClientRect(),
				l = getComputedStyle(this.container);
			let c = r.width * n,
				h = r.height * n;
			const d = parseFloat(l.paddingTop) + parseFloat(l.paddingBottom),
				u = c - (parseFloat(l.paddingLeft) + parseFloat(l.paddingRight)),
				p = h - d;
			this.containerRect = {
				width: c,
				height: h,
				innerWidth: u,
				innerHeight: p,
			};
			const f =
					parseFloat(o.dataset.width || '') ||
					((t) => {
						let e = 0;
						return (
							(e =
								t instanceof HTMLImageElement
									? t.naturalWidth
									: t instanceof SVGElement
										? t.width.baseVal.value
										: Math.max(t.offsetWidth, t.scrollWidth)),
							e || 0
						);
					})(o),
				g =
					parseFloat(o.dataset.height || '') ||
					((t) => {
						let e = 0;
						return (
							(e =
								t instanceof HTMLImageElement
									? t.naturalHeight
									: t instanceof SVGElement
										? t.height.baseVal.value
										: Math.max(t.offsetHeight, t.scrollHeight)),
							e || 0
						);
					})(o);
			let m = this.option('width', f) || R,
				b = this.option('height', g) || R;
			const y = m === R,
				w = b === R;
			'number' != typeof m && (m = f),
				'number' != typeof b && (b = g),
				y && (m = f * (b / g)),
				w && (b = g / (f / m));
			let x =
				o.parentElement instanceof HTMLPictureElement ? o.parentElement : o;
			this.option('transformParent') && (x = x.parentElement || x);
			const E = x.getAttribute('style') || '';
			x.style.setProperty('transform', 'none', 'important'),
				a && ((x.style.width = ''), (x.style.height = '')),
				x.offsetHeight;
			const S = o.getBoundingClientRect();
			let P = S.width * n,
				C = S.height * n,
				T = P,
				M = C;
			(P = Math.min(P, m)),
				(C = Math.min(C, b)),
				a
					? ({ width: P, height: C } = ((t, e, i, n) => {
							const s = i / t,
								o = n / e,
								a = Math.min(s, o);
							return { width: (t *= a), height: (e *= a) };
						})(m, b, P, C))
					: ((P = Math.min(P, m)), (C = Math.min(C, b)));
			let O = 0.5 * (M - C),
				A = 0.5 * (T - P);
			(this.contentRect = Object.assign(Object.assign({}, this.contentRect), {
				top: S.top - r.top + O,
				bottom: r.bottom - S.bottom + O,
				left: S.left - r.left + A,
				right: r.right - S.right + A,
				fitWidth: P,
				fitHeight: C,
				width: P,
				height: C,
				fullWidth: m,
				fullHeight: b,
			})),
				(x.style.cssText = E),
				a && ((x.style.width = `${P}px`), (x.style.height = `${C}px`)),
				this.setTransform(),
				!0 !== t && this.emit('refresh'),
				this.ignoreBounds ||
					(e(this.targetScale) < e(this.minScale)
						? this.zoomTo(this.minScale, { friction: 0 })
						: this.targetScale > this.maxScale
							? this.zoomTo(this.maxScale, { friction: 0 })
							: this.state === v.Init ||
								this.checkBounds().inBounds ||
								this.requestTick()),
				this.updateControls();
		}
		calculateBounds() {
			const { contentWidth: t, contentHeight: i } = this.calculateContentDim(
					this.target
				),
				{ targetScale: n, lockedAxis: s } = this,
				{ fitWidth: o, fitHeight: a } = this.contentRect;
			let r = 0,
				l = 0,
				c = 0,
				h = 0;
			const d = this.option('infinite');
			if (!0 === d || (s && d === s))
				(r = -1 / 0), (c = 1 / 0), (l = -1 / 0), (h = 1 / 0);
			else {
				let { containerRect: s, contentRect: d } = this,
					u = e(o * n, O),
					p = e(a * n, O),
					{ innerWidth: f, innerHeight: g } = s;
				if (
					(s.width === u && (f = s.width),
					s.width === p && (g = s.height),
					t > f)
				) {
					(c = 0.5 * (t - f)), (r = -1 * c);
					let e = 0.5 * (d.right - d.left);
					(r += e), (c += e);
				}
				if (
					(o > f && t < f && ((r -= 0.5 * (o - f)), (c -= 0.5 * (o - f))),
					i > g)
				) {
					(h = 0.5 * (i - g)), (l = -1 * h);
					let t = 0.5 * (d.bottom - d.top);
					(l += t), (h += t);
				}
				a > g && i < g && ((r -= 0.5 * (a - g)), (c -= 0.5 * (a - g)));
			}
			return { x: { min: r, max: c }, y: { min: l, max: h } };
		}
		getBounds() {
			const t = this.option('bounds');
			return t !== R ? t : this.calculateBounds();
		}
		updateControls() {
			const t = this,
				i = t.container,
				{ panMode: n, contentRect: s, targetScale: o, minScale: r } = t;
			let l = r,
				c = t.option('click') || !1;
			c && (l = t.getNextScale(c));
			let h = t.canZoomIn(),
				d = t.canZoomOut(),
				u = n === L && !!this.option('touch'),
				p = d && u;
			if (
				(u &&
					(e(o) < e(r) && !this.panOnlyZoomed && (p = !0),
					(e(s.width, 1) > e(s.fitWidth, 1) ||
						e(s.height, 1) > e(s.fitHeight, 1)) &&
						(p = !0)),
				e(s.width * o, 1) < e(s.fitWidth, 1) && (p = !1),
				n === A && (p = !1),
				a(i, this.cn('isDraggable'), p),
				!this.option('zoom'))
			)
				return;
			let f = h && e(l) > e(o),
				g = !f && !p && d && e(l) < e(o);
			a(i, this.cn('canZoomIn'), f), a(i, this.cn('canZoomOut'), g);
			for (const t of i.querySelectorAll('[data-panzoom-action]')) {
				let e = !1,
					i = !1;
				switch (t.dataset.panzoomAction) {
					case 'zoomIn':
						h ? (e = !0) : (i = !0);
						break;
					case 'zoomOut':
						d ? (e = !0) : (i = !0);
						break;
					case 'toggleZoom':
					case 'iterateZoom':
						h || d ? (e = !0) : (i = !0);
						const n = t.querySelector('g');
						n && (n.style.display = h ? '' : 'none');
				}
				e
					? (t.removeAttribute('disabled'), t.removeAttribute('tabindex'))
					: i &&
						(t.setAttribute('disabled', ''), t.setAttribute('tabindex', '-1'));
			}
		}
		panTo({
			x: t = this.target.e,
			y: e = this.target.f,
			scale: i = this.targetScale,
			friction: n = this.option('friction'),
			angle: s = 0,
			originX: o = 0,
			originY: a = 0,
			flipX: r = !1,
			flipY: l = !1,
			ignoreBounds: c = !1,
		}) {
			this.state !== v.Destroy &&
				this.applyChange({
					panX: t - this.target.e,
					panY: e - this.target.f,
					scale: i / this.targetScale,
					angle: s,
					originX: o,
					originY: a,
					friction: n,
					flipX: r,
					flipY: l,
					ignoreBounds: c,
				});
		}
		applyChange({
			panX: t = 0,
			panY: i = 0,
			scale: n = 1,
			angle: s = 0,
			originX: o = -this.current.e,
			originY: a = -this.current.f,
			friction: r = this.option('friction'),
			flipX: l = !1,
			flipY: c = !1,
			ignoreBounds: h = !1,
			bounce: d = this.option('bounce'),
		}) {
			const u = this.state;
			if (u === v.Destroy) return;
			this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
				(this.friction = r || 0),
				(this.ignoreBounds = h);
			const { current: p } = this,
				f = p.e,
				g = p.f,
				m = this.getMatrix(this.target);
			let y = new DOMMatrix().translate(f, g).translate(o, a).translate(t, i);
			if (this.option('zoom')) {
				if (!h) {
					const t = this.targetScale,
						e = this.minScale,
						i = this.maxScale;
					t * n < e && (n = e / t), t * n > i && (n = i / t);
				}
				y = y.scale(n);
			}
			(y = y.translate(-o, -a).translate(-f, -g).multiply(m)),
				s && (y = y.rotate(s)),
				l && (y = y.scale(-1, 1)),
				c && (y = y.scale(1, -1));
			for (const t of b)
				'e' !== t &&
				'f' !== t &&
				(y[t] > this.minScale + 1e-5 || y[t] < this.minScale - 1e-5)
					? (this.target[t] = y[t])
					: (this.target[t] = e(y[t], O));
			(this.targetScale < this.scale ||
				Math.abs(n - 1) > 0.1 ||
				this.panMode === A ||
				!1 === d) &&
				!h &&
				this.clampTargetBounds(),
				u === v.Init
					? this.animate()
					: this.isResting || ((this.state = v.Panning), this.requestTick());
		}
		stop(t = !1) {
			if (this.state === v.Init || this.state === v.Destroy) return;
			const e = this.isTicking;
			this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
				(this.isBouncingX = !1),
				(this.isBouncingY = !1);
			for (const e of b)
				(this.velocity[e] = 0),
					'current' === t
						? (this.current[e] = this.target[e])
						: 'target' === t && (this.target[e] = this.current[e]);
			this.setTransform(),
				P(this.container, 'is-scaling'),
				P(this.container, 'is-animating'),
				(this.isTicking = !1),
				(this.state = v.Ready),
				e && (this.emit('endAnimation'), this.updateControls());
		}
		requestTick() {
			this.isTicking ||
				(this.emit('startAnimation'),
				this.updateControls(),
				C(this.container, 'is-animating'),
				this.isScaling && C(this.container, 'is-scaling')),
				(this.isTicking = !0),
				this.rAF || (this.rAF = requestAnimationFrame(() => this.animate()));
		}
		panWithMouse(t, i = this.option('mouseMoveFriction')) {
			if (((this.pmme = t), this.panMode !== A || !t)) return;
			if (e(this.targetScale) <= e(this.minScale)) return;
			this.emit('mouseMove', t);
			const { container: n, containerRect: s, contentRect: o } = this,
				a = s.width,
				r = s.height,
				l = n.getBoundingClientRect(),
				c = (t.clientX || 0) - l.left,
				h = (t.clientY || 0) - l.top;
			let { contentWidth: d, contentHeight: u } = this.calculateContentDim(
				this.target
			);
			const p = this.option('mouseMoveFactor');
			p > 1 && (d !== a && (d *= p), u !== r && (u *= p));
			let f = 0.5 * (d - a) - (((c / a) * 100) / 100) * (d - a);
			f += 0.5 * (o.right - o.left);
			let g = 0.5 * (u - r) - (((h / r) * 100) / 100) * (u - r);
			(g += 0.5 * (o.bottom - o.top)),
				this.applyChange({
					panX: f - this.target.e,
					panY: g - this.target.f,
					friction: i,
				});
		}
		zoomWithWheel(t) {
			if (this.state === v.Destroy || this.state === v.Init) return;
			const i = Date.now();
			if (i - this.pwt < 45) return void t.preventDefault();
			this.pwt = i;
			var n = [-t.deltaX || 0, -t.deltaY || 0, -t.detail || 0].reduce(
				function (t, e) {
					return Math.abs(e) > Math.abs(t) ? e : t;
				}
			);
			const s = Math.max(-1, Math.min(1, n)),
				{ targetScale: o, maxScale: a, minScale: r } = this;
			let l = (o * (100 + 45 * s)) / 100;
			e(l) < e(r) && e(o) <= e(r)
				? ((this.cwd += Math.abs(s)), (l = r))
				: e(l) > e(a) && e(o) >= e(a)
					? ((this.cwd += Math.abs(s)), (l = a))
					: ((this.cwd = 0), (l = Math.max(Math.min(l, a), r))),
				this.cwd > this.option('wheelLimit') ||
					(t.preventDefault(), e(l) !== e(o) && this.zoomTo(l, { event: t }));
		}
		canZoomIn() {
			return (
				this.option('zoom') &&
				(e(this.contentRect.width, 1) < e(this.contentRect.fitWidth, 1) ||
					e(this.targetScale) < e(this.maxScale))
			);
		}
		canZoomOut() {
			return this.option('zoom') && e(this.targetScale) > e(this.minScale);
		}
		zoomIn(t = 1.25, e) {
			this.zoomTo(this.targetScale * t, e);
		}
		zoomOut(t = 0.8, e) {
			this.zoomTo(this.targetScale * t, e);
		}
		zoomToFit(t) {
			this.zoomTo('fit', t);
		}
		zoomToCover(t) {
			this.zoomTo('cover', t);
		}
		zoomToFull(t) {
			this.zoomTo('full', t);
		}
		zoomToMax(t) {
			this.zoomTo('max', t);
		}
		toggleZoom(t) {
			this.zoomTo(this.getNextScale('toggleZoom'), t);
		}
		toggleMax(t) {
			this.zoomTo(this.getNextScale('toggleMax'), t);
		}
		toggleCover(t) {
			this.zoomTo(this.getNextScale('toggleCover'), t);
		}
		iterateZoom(t) {
			this.zoomTo('next', t);
		}
		zoomTo(
			t = 1,
			{ friction: e = R, originX: i = R, originY: n = R, event: s } = {}
		) {
			if (this.isContentLoading || this.state === v.Destroy) return;
			const { targetScale: o, fullScale: a, maxScale: r, coverScale: l } = this;
			if (
				(this.stop(),
				this.panMode === A && (s = this.pmme || s),
				s || i === R || n === R)
			) {
				const t = this.content.getBoundingClientRect(),
					e = this.container.getBoundingClientRect(),
					o = s ? s.clientX : e.left + 0.5 * e.width,
					a = s ? s.clientY : e.top + 0.5 * e.height;
				(i = o - t.left - 0.5 * t.width), (n = a - t.top - 0.5 * t.height);
			}
			let c = 1;
			'number' == typeof t
				? (c = t)
				: 'full' === t
					? (c = a)
					: 'cover' === t
						? (c = l)
						: 'max' === t
							? (c = r)
							: 'fit' === t
								? (c = 1)
								: 'next' === t && (c = this.getNextScale('iterateZoom')),
				(c = c / o || 1),
				(e = e === R ? (c > 1 ? 0.15 : 0.25) : e),
				this.applyChange({ scale: c, originX: i, originY: n, friction: e }),
				s && this.panMode === A && this.panWithMouse(s, e);
		}
		rotateCCW() {
			this.applyChange({ angle: -90 });
		}
		rotateCW() {
			this.applyChange({ angle: 90 });
		}
		flipX() {
			this.applyChange({ flipX: !0 });
		}
		flipY() {
			this.applyChange({ flipY: !0 });
		}
		fitX() {
			this.stop('target');
			const { containerRect: t, contentRect: e, target: i } = this;
			this.applyChange({
				panX: 0.5 * t.width - (e.left + 0.5 * e.fitWidth) - i.e,
				panY: 0.5 * t.height - (e.top + 0.5 * e.fitHeight) - i.f,
				scale: t.width / e.fitWidth / this.targetScale,
				originX: 0,
				originY: 0,
				ignoreBounds: !0,
			});
		}
		fitY() {
			this.stop('target');
			const { containerRect: t, contentRect: e, target: i } = this;
			this.applyChange({
				panX: 0.5 * t.width - (e.left + 0.5 * e.fitWidth) - i.e,
				panY: 0.5 * t.innerHeight - (e.top + 0.5 * e.fitHeight) - i.f,
				scale: t.height / e.fitHeight / this.targetScale,
				originX: 0,
				originY: 0,
				ignoreBounds: !0,
			});
		}
		toggleFS() {
			const { container: t } = this,
				e = this.cn('inFullscreen'),
				i = this.cn('htmlHasFullscreen');
			t.classList.toggle(e);
			const n = t.classList.contains(e);
			n
				? (document.documentElement.classList.add(i),
					document.addEventListener('keydown', this.onKeydown, !0))
				: (document.documentElement.classList.remove(i),
					document.removeEventListener('keydown', this.onKeydown, !0)),
				this.updateMetrics(),
				this.emit(n ? 'enterFS' : 'exitFS');
		}
		getMatrix(t = this.current) {
			const { a: e, b: i, c: n, d: s, e: o, f: a } = t;
			return new DOMMatrix([e, i, n, s, o, a]);
		}
		reset(t) {
			if (this.state !== v.Init && this.state !== v.Destroy) {
				this.stop('current');
				for (const t of b) this.target[t] = T[t];
				(this.target.a = this.minScale),
					(this.target.d = this.minScale),
					this.clampTargetBounds(),
					this.isResting ||
						((this.friction = void 0 === t ? this.option('friction') : t),
						(this.state = v.Panning),
						this.requestTick());
			}
		}
		destroy() {
			this.stop(),
				(this.state = v.Destroy),
				this.detachEvents(),
				this.detachObserver();
			const { container: t, content: e } = this,
				i = this.option('classes') || {};
			for (const e of Object.values(i)) t.classList.remove(e + '');
			e &&
				(e.removeEventListener('load', this.onLoad),
				e.removeEventListener('error', this.onError)),
				this.detachPlugins();
		}
	}
	Object.defineProperty(D, 'defaults', {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: w,
	}),
		Object.defineProperty(D, 'Plugins', {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: {},
		});
	const F = function (t, e) {
			let i = !0;
			return (...n) => {
				i &&
					((i = !1),
					t(...n),
					setTimeout(() => {
						i = !0;
					}, e));
			};
		},
		j = (t, e) => {
			let i = [];
			return (
				t.childNodes.forEach((t) => {
					t.nodeType !== Node.ELEMENT_NODE || (e && !t.matches(e)) || i.push(t);
				}),
				i
			);
		},
		B = {
			viewport: null,
			track: null,
			enabled: !0,
			slides: [],
			axis: 'x',
			transition: 'fade',
			preload: 1,
			slidesPerPage: 'auto',
			initialPage: 0,
			friction: 0.12,
			Panzoom: { decelFriction: 0.12 },
			center: !0,
			infinite: !0,
			fill: !0,
			dragFree: !1,
			adaptiveHeight: !1,
			direction: 'ltr',
			classes: {
				container: 'f-carousel',
				viewport: 'f-carousel__viewport',
				track: 'f-carousel__track',
				slide: 'f-carousel__slide',
				isLTR: 'is-ltr',
				isRTL: 'is-rtl',
				isHorizontal: 'is-horizontal',
				isVertical: 'is-vertical',
				inTransition: 'in-transition',
				isSelected: 'is-selected',
			},
			l10n: {
				NEXT: 'Next slide',
				PREV: 'Previous slide',
				GOTO: 'Go to slide #%d',
			},
		};
	var H;
	!(function (t) {
		(t[(t.Init = 0)] = 'Init'),
			(t[(t.Ready = 1)] = 'Ready'),
			(t[(t.Destroy = 2)] = 'Destroy');
	})(H || (H = {}));
	const N = (t) => {
			if ('string' == typeof t || t instanceof HTMLElement) t = { html: t };
			else {
				const e = t.thumb;
				void 0 !== e &&
					('string' == typeof e && (t.thumbSrc = e),
					e instanceof HTMLImageElement &&
						((t.thumbEl = e), (t.thumbElSrc = e.src), (t.thumbSrc = e.src)),
					delete t.thumb);
			}
			return Object.assign(
				{
					html: '',
					el: null,
					isDom: !1,
					class: '',
					customClass: '',
					index: -1,
					dim: 0,
					gap: 0,
					pos: 0,
					transition: !1,
				},
				t
			);
		},
		_ = (t = {}) =>
			Object.assign({ index: -1, slides: [], dim: 0, pos: -1 }, t);
	class $ extends g {
		constructor(t, e) {
			super(e),
				Object.defineProperty(this, 'instance', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: t,
				});
		}
		attach() {}
		detach() {}
	}
	const W = {
		classes: {
			list: 'f-carousel__dots',
			isDynamic: 'is-dynamic',
			hasDots: 'has-dots',
			dot: 'f-carousel__dot',
			isBeforePrev: 'is-before-prev',
			isPrev: 'is-prev',
			isCurrent: 'is-current',
			isNext: 'is-next',
			isAfterNext: 'is-after-next',
		},
		dotTpl:
			'<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',
		dynamicFrom: 11,
		maxCount: 1 / 0,
		minCount: 2,
	};
	class X extends $ {
		constructor() {
			super(...arguments),
				Object.defineProperty(this, 'isDynamic', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: !1,
				}),
				Object.defineProperty(this, 'list', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				});
		}
		onRefresh() {
			this.refresh();
		}
		build() {
			let t = this.list;
			if (!t) {
				(t = document.createElement('ul')),
					C(t, this.cn('list')),
					t.setAttribute('role', 'tablist');
				const e = this.instance.container;
				e.appendChild(t), C(e, this.cn('hasDots')), (this.list = t);
			}
			return t;
		}
		refresh() {
			var t;
			const e = this.instance.pages.length,
				i = Math.min(2, this.option('minCount')),
				n = Math.max(2e3, this.option('maxCount')),
				s = this.option('dynamicFrom');
			if (e < i || e > n) return void this.cleanup();
			const o = 'number' == typeof s && e > 5 && e >= s,
				r =
					!this.list || this.isDynamic !== o || this.list.children.length !== e;
			r && this.cleanup();
			const l = this.build();
			if ((a(l, this.cn('isDynamic'), !!o), r))
				for (let t = 0; t < e; t++) l.append(this.createItem(t));
			let c,
				h = 0;
			for (const e of [...l.children]) {
				const i = h === this.instance.page;
				i && (c = e),
					a(e, this.cn('isCurrent'), i),
					null === (t = e.children[0]) ||
						void 0 === t ||
						t.setAttribute('aria-selected', i ? 'true' : 'false');
				for (const t of ['isBeforePrev', 'isPrev', 'isNext', 'isAfterNext'])
					P(e, this.cn(t));
				h++;
			}
			if (((c = c || l.firstChild), o && c)) {
				const t = c.previousElementSibling,
					e = t && t.previousElementSibling;
				C(t, this.cn('isPrev')), C(e, this.cn('isBeforePrev'));
				const i = c.nextElementSibling,
					n = i && i.nextElementSibling;
				C(i, this.cn('isNext')), C(n, this.cn('isAfterNext'));
			}
			this.isDynamic = o;
		}
		createItem(t = 0) {
			var e;
			const i = document.createElement('li');
			i.setAttribute('role', 'presentation');
			const n = s(
				this.instance
					.localize(this.option('dotTpl'), [['%d', t + 1]])
					.replace(/\%i/g, t + '')
			);
			return (
				i.appendChild(n),
				null === (e = i.children[0]) ||
					void 0 === e ||
					e.setAttribute('role', 'tab'),
				i
			);
		}
		cleanup() {
			this.list && (this.list.remove(), (this.list = null)),
				(this.isDynamic = !1),
				P(this.instance.container, this.cn('hasDots'));
		}
		attach() {
			this.instance.on(['refresh', 'change'], this.onRefresh);
		}
		detach() {
			this.instance.off(['refresh', 'change'], this.onRefresh), this.cleanup();
		}
	}
	Object.defineProperty(X, 'defaults', {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: W,
	});
	const q = 'disabled',
		Y = 'next',
		V = 'prev';
	class Z extends $ {
		constructor() {
			super(...arguments),
				Object.defineProperty(this, 'container', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				}),
				Object.defineProperty(this, 'prev', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				}),
				Object.defineProperty(this, 'next', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				}),
				Object.defineProperty(this, 'isDom', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: !1,
				});
		}
		onRefresh() {
			const t = this.instance,
				e = t.pages.length,
				i = t.page;
			if (e < 2) return void this.cleanup();
			this.build();
			let n = this.prev,
				s = this.next;
			n &&
				s &&
				(n.removeAttribute(q),
				s.removeAttribute(q),
				t.isInfinite ||
					(i <= 0 && n.setAttribute(q, ''),
					i >= e - 1 && s.setAttribute(q, '')));
		}
		addBtn(t) {
			var e;
			const i = this.instance,
				n = document.createElement('button');
			n.setAttribute('tabindex', '0'),
				n.setAttribute('title', i.localize(`{{${t.toUpperCase()}}}`)),
				C(n, this.cn('button') + ' ' + this.cn(t === Y ? 'isNext' : 'isPrev'));
			const s = i.isRTL ? (t === Y ? V : Y) : t;
			var o;
			return (
				(n.innerHTML = i.localize(this.option(`${s}Tpl`))),
				(n.dataset[
					`carousel${((o = t), o ? (o.match('^[a-z]') ? o.charAt(0).toUpperCase() + o.substring(1) : o) : '')}`
				] = 'true'),
				null === (e = this.container) || void 0 === e || e.appendChild(n),
				n
			);
		}
		build() {
			const t = this.instance.container,
				e = this.cn('container');
			let { container: i, prev: n, next: s } = this;
			i || ((i = t.querySelector('.' + e)), (this.isDom = !!i)),
				i || ((i = document.createElement('div')), C(i, e), t.appendChild(i)),
				(this.container = i),
				s || (s = i.querySelector('[data-carousel-next]')),
				s || (s = this.addBtn(Y)),
				(this.next = s),
				n || (n = i.querySelector('[data-carousel-prev]')),
				n || (n = this.addBtn(V)),
				(this.prev = n);
		}
		cleanup() {
			this.isDom ||
				(this.prev && this.prev.remove(),
				this.next && this.next.remove(),
				this.container && this.container.remove()),
				(this.prev = null),
				(this.next = null),
				(this.container = null),
				(this.isDom = !1);
		}
		attach() {
			this.instance.on(['refresh', 'change'], this.onRefresh);
		}
		detach() {
			this.instance.off(['refresh', 'change'], this.onRefresh), this.cleanup();
		}
	}
	Object.defineProperty(Z, 'defaults', {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: {
			classes: {
				container: 'f-carousel__nav',
				button: 'f-button',
				isNext: 'is-next',
				isPrev: 'is-prev',
			},
			nextTpl:
				'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
			prevTpl:
				'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
		},
	});
	class U extends $ {
		constructor() {
			super(...arguments),
				Object.defineProperty(this, 'selectedIndex', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				}),
				Object.defineProperty(this, 'target', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				}),
				Object.defineProperty(this, 'nav', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				});
		}
		addAsTargetFor(t) {
			(this.target = this.instance), (this.nav = t), this.attachEvents();
		}
		addAsNavFor(t) {
			(this.nav = this.instance), (this.target = t), this.attachEvents();
		}
		attachEvents() {
			const { nav: t, target: e } = this;
			t &&
				e &&
				((t.options.initialSlide = e.options.initialPage),
				t.state === H.Ready
					? this.onNavReady(t)
					: t.on('ready', this.onNavReady),
				e.state === H.Ready
					? this.onTargetReady(e)
					: e.on('ready', this.onTargetReady));
		}
		onNavReady(t) {
			t.on('createSlide', this.onNavCreateSlide),
				t.on('Panzoom.click', this.onNavClick),
				t.on('Panzoom.touchEnd', this.onNavTouch),
				this.onTargetChange();
		}
		onTargetReady(t) {
			t.on('change', this.onTargetChange),
				t.on('Panzoom.refresh', this.onTargetChange),
				this.onTargetChange();
		}
		onNavClick(t, e, i) {
			this.onNavTouch(t, t.panzoom, i);
		}
		onNavTouch(t, e, i) {
			var n, s;
			if (Math.abs(e.dragOffset.x) > 3 || Math.abs(e.dragOffset.y) > 3) return;
			const o = i.target,
				{ nav: a, target: r } = this;
			if (!a || !r || !o) return;
			const l = o.closest('[data-index]');
			if ((i.stopPropagation(), i.preventDefault(), !l)) return;
			const c = parseInt(l.dataset.index || '', 10) || 0,
				h = r.getPageForSlide(c),
				d = a.getPageForSlide(c);
			a.slideTo(d),
				r.slideTo(h, {
					friction:
						(null ===
							(s =
								null === (n = this.nav) || void 0 === n ? void 0 : n.plugins) ||
						void 0 === s
							? void 0
							: s.Sync.option('friction')) || 0,
				}),
				this.markSelectedSlide(c);
		}
		onNavCreateSlide(t, e) {
			e.index === this.selectedIndex && this.markSelectedSlide(e.index);
		}
		onTargetChange() {
			var t, e;
			const { target: i, nav: n } = this;
			if (!i || !n) return;
			if (n.state !== H.Ready || i.state !== H.Ready) return;
			const s =
					null ===
						(e =
							null === (t = i.pages[i.page]) || void 0 === t
								? void 0
								: t.slides[0]) || void 0 === e
						? void 0
						: e.index,
				o = n.getPageForSlide(s);
			this.markSelectedSlide(s),
				n.slideTo(
					o,
					null === n.prevPage && null === i.prevPage ? { friction: 0 } : void 0
				);
		}
		markSelectedSlide(t) {
			const e = this.nav;
			e &&
				e.state === H.Ready &&
				((this.selectedIndex = t),
				[...e.slides].map((e) => {
					e.el &&
						e.el.classList[e.index === t ? 'add' : 'remove']('is-nav-selected');
				}));
		}
		attach() {
			const t = this;
			let e = t.options.target,
				i = t.options.nav;
			e ? t.addAsNavFor(e) : i && t.addAsTargetFor(i);
		}
		detach() {
			const t = this,
				e = t.nav,
				i = t.target;
			e &&
				(e.off('ready', t.onNavReady),
				e.off('createSlide', t.onNavCreateSlide),
				e.off('Panzoom.click', t.onNavClick),
				e.off('Panzoom.touchEnd', t.onNavTouch)),
				(t.nav = null),
				i &&
					(i.off('ready', t.onTargetReady),
					i.off('refresh', t.onTargetChange),
					i.off('change', t.onTargetChange)),
				(t.target = null);
		}
	}
	Object.defineProperty(U, 'defaults', {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: { friction: 0.35 },
	});
	const G = { Navigation: Z, Dots: X, Sync: U },
		K = 'animationend',
		J = 'isSelected',
		Q = 'slide';
	class tt extends m {
		get axis() {
			return this.isHorizontal ? 'e' : 'f';
		}
		get isEnabled() {
			return this.state === H.Ready;
		}
		get isInfinite() {
			let t = !1;
			const { contentDim: e, viewportDim: i, pages: n, slides: s } = this,
				o = s[0];
			return (
				n.length >= 2 && o && e + o.dim >= i && (t = this.option('infinite')), t
			);
		}
		get isRTL() {
			return 'rtl' === this.option('direction');
		}
		get isHorizontal() {
			return 'x' === this.option('axis');
		}
		constructor(t, e = {}, i = {}) {
			if (
				(super(),
				Object.defineProperty(this, 'bp', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: '',
				}),
				Object.defineProperty(this, 'lp', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: 0,
				}),
				Object.defineProperty(this, 'userOptions', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: {},
				}),
				Object.defineProperty(this, 'userPlugins', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: {},
				}),
				Object.defineProperty(this, 'state', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: H.Init,
				}),
				Object.defineProperty(this, 'page', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: 0,
				}),
				Object.defineProperty(this, 'prevPage', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				}),
				Object.defineProperty(this, 'container', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0,
				}),
				Object.defineProperty(this, 'viewport', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				}),
				Object.defineProperty(this, 'track', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				}),
				Object.defineProperty(this, 'slides', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: [],
				}),
				Object.defineProperty(this, 'pages', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: [],
				}),
				Object.defineProperty(this, 'panzoom', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				}),
				Object.defineProperty(this, 'inTransition', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: new Set(),
				}),
				Object.defineProperty(this, 'contentDim', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: 0,
				}),
				Object.defineProperty(this, 'viewportDim', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: 0,
				}),
				'string' == typeof t && (t = document.querySelector(t)),
				!t || !S(t))
			)
				throw new Error('No Element found');
			(this.container = t),
				(this.slideNext = F(this.slideNext.bind(this), 150)),
				(this.slidePrev = F(this.slidePrev.bind(this), 150)),
				(this.userOptions = e),
				(this.userPlugins = i),
				queueMicrotask(() => {
					this.processOptions();
				});
		}
		processOptions() {
			var t, e;
			const i = p({}, tt.defaults, this.userOptions);
			let n = '';
			const s = i.breakpoints;
			if (s && u(s))
				for (const [t, e] of Object.entries(s))
					window.matchMedia(t).matches && u(e) && ((n += t), p(i, e));
			(n === this.bp && this.state !== H.Init) ||
				((this.bp = n),
				this.state === H.Ready &&
					(i.initialSlide =
						(null ===
							(e =
								null === (t = this.pages[this.page]) || void 0 === t
									? void 0
									: t.slides[0]) || void 0 === e
							? void 0
							: e.index) || 0),
				this.state !== H.Init && this.destroy(),
				super.setOptions(i),
				!1 === this.option('enabled')
					? this.attachEvents()
					: setTimeout(() => {
							this.init();
						}, 0));
		}
		init() {
			(this.state = H.Init),
				this.emit('init'),
				this.attachPlugins(
					Object.assign(Object.assign({}, tt.Plugins), this.userPlugins)
				),
				this.emit('attachPlugins'),
				this.initLayout(),
				this.initSlides(),
				this.updateMetrics(),
				this.setInitialPosition(),
				this.initPanzoom(),
				this.attachEvents(),
				(this.state = H.Ready),
				this.emit('ready');
		}
		initLayout() {
			const { container: t } = this,
				e = this.option('classes');
			C(t, this.cn('container')),
				a(t, e.isLTR, !this.isRTL),
				a(t, e.isRTL, this.isRTL),
				a(t, e.isVertical, !this.isHorizontal),
				a(t, e.isHorizontal, this.isHorizontal);
			let i = this.option('viewport') || t.querySelector(`.${e.viewport}`);
			i ||
				((i = document.createElement('div')),
				C(i, e.viewport),
				i.append(...j(t, `.${e.slide}`)),
				t.prepend(i)),
				i.addEventListener('scroll', this.onScroll);
			let n = this.option('track') || t.querySelector(`.${e.track}`);
			n ||
				((n = document.createElement('div')),
				C(n, e.track),
				n.append(...Array.from(i.childNodes))),
				n.setAttribute('aria-live', 'polite'),
				i.contains(n) || i.prepend(n),
				(this.viewport = i),
				(this.track = n),
				this.emit('initLayout');
		}
		initSlides() {
			const { track: t } = this;
			if (!t) return;
			const e = [...this.slides],
				i = [];
			[...j(t, `.${this.cn(Q)}`)].forEach((t) => {
				if (S(t)) {
					const e = N({ el: t, isDom: !0, index: this.slides.length });
					i.push(e);
				}
			});
			for (let t of [...(this.option('slides', []) || []), ...e]) i.push(N(t));
			this.slides = i;
			for (let t = 0; t < this.slides.length; t++) this.slides[t].index = t;
			for (const t of i)
				this.emit('beforeInitSlide', t, t.index),
					this.emit('initSlide', t, t.index);
			this.emit('initSlides');
		}
		setInitialPage() {
			const t = this.option('initialSlide');
			this.page =
				'number' == typeof t
					? this.getPageForSlide(t)
					: parseInt(this.option('initialPage', 0) + '', 10) || 0;
		}
		setInitialPosition() {
			const { track: t, pages: e, isHorizontal: i } = this;
			if (!t || !e.length) return;
			let n = this.page;
			e[n] || (this.page = n = 0);
			const s = (e[n].pos || 0) * (this.isRTL && i ? 1 : -1),
				o = i ? `${s}px` : '0',
				a = i ? '0' : `${s}px`;
			(t.style.transform = `translate3d(${o}, ${a}, 0) scale(1)`),
				this.option('adaptiveHeight') && this.setViewportHeight();
		}
		initPanzoom() {
			this.panzoom && (this.panzoom.destroy(), (this.panzoom = null));
			const t = this.option('Panzoom') || {};
			(this.panzoom = new D(
				this.viewport,
				p(
					{},
					{
						content: this.track,
						zoom: !1,
						panOnlyZoomed: !1,
						lockAxis: this.isHorizontal ? 'x' : 'y',
						infinite: this.isInfinite,
						click: !1,
						dblClick: !1,
						touch: (t) => !(this.pages.length < 2 && !t.options.infinite),
						bounds: () => this.getBounds(),
						maxVelocity: (t) =>
							Math.abs(t.target[this.axis] - t.current[this.axis]) <
							2 * this.viewportDim
								? 100
								: 0,
					},
					t
				)
			)),
				this.panzoom.on('*', (t, e, ...i) => {
					this.emit(`Panzoom.${e}`, t, ...i);
				}),
				this.panzoom.on('decel', this.onDecel),
				this.panzoom.on('refresh', this.onRefresh),
				this.panzoom.on('beforeTransform', this.onBeforeTransform),
				this.panzoom.on('endAnimation', this.onEndAnimation);
		}
		attachEvents() {
			const t = this.container;
			t &&
				(t.addEventListener('click', this.onClick, {
					passive: !1,
					capture: !1,
				}),
				t.addEventListener('slideTo', this.onSlideTo)),
				window.addEventListener('resize', this.onResize);
		}
		createPages() {
			let t = [];
			const { contentDim: e, viewportDim: i } = this;
			let n = this.option('slidesPerPage');
			n =
				('auto' === n || e <= i) && !1 !== this.option('fill')
					? 1 / 0
					: parseFloat(n + '');
			let s = 0,
				o = 0,
				a = 0;
			for (const e of this.slides)
				(!t.length || o + e.dim - i > 0.05 || a >= n) &&
					(t.push(_()), (s = t.length - 1), (o = 0), (a = 0)),
					t[s].slides.push(e),
					(o += e.dim + e.gap),
					a++;
			return t;
		}
		processPages() {
			const t = this.pages,
				{ contentDim: i, viewportDim: n, isInfinite: s } = this,
				o = this.option('center'),
				a = this.option('fill'),
				r = a && o && i > n && !s;
			if (
				(t.forEach((t, e) => {
					var s;
					(t.index = e),
						(t.pos =
							(null === (s = t.slides[0]) || void 0 === s ? void 0 : s.pos) ||
							0),
						(t.dim = 0);
					for (const [e, i] of t.slides.entries())
						(t.dim += i.dim), e < t.slides.length - 1 && (t.dim += i.gap);
					r && t.pos + 0.5 * t.dim < 0.5 * n
						? (t.pos = 0)
						: r && t.pos + 0.5 * t.dim >= i - 0.5 * n
							? (t.pos = i - n)
							: o && (t.pos += -0.5 * (n - t.dim));
				}),
				t.forEach((t) => {
					a &&
						!s &&
						i > n &&
						((t.pos = Math.max(t.pos, 0)), (t.pos = Math.min(t.pos, i - n))),
						(t.pos = e(t.pos, 1e3)),
						(t.dim = e(t.dim, 1e3)),
						Math.abs(t.pos) <= 0.1 && (t.pos = 0);
				}),
				s)
			)
				return t;
			const l = [];
			let c;
			return (
				t.forEach((t) => {
					const e = Object.assign({}, t);
					c && e.pos === c.pos
						? ((c.dim += e.dim), (c.slides = [...c.slides, ...e.slides]))
						: ((e.index = l.length), (c = e), l.push(e));
				}),
				l
			);
		}
		getPageFromIndex(t = 0) {
			const e = this.pages.length;
			let i;
			return (
				(t = parseInt((t || 0).toString()) || 0),
				(i = this.isInfinite
					? ((t % e) + e) % e
					: Math.max(Math.min(t, e - 1), 0)),
				i
			);
		}
		getSlideMetrics(t) {
			var i, n;
			const s = this.isHorizontal ? 'width' : 'height';
			let o = 0,
				a = 0,
				r = t.el;
			const l = !(!r || r.parentNode);
			if (
				(r
					? (o = parseFloat(r.dataset[s] || '') || 0)
					: ((r = document.createElement('div')),
						(r.style.visibility = 'hidden'),
						(this.track || document.body).prepend(r)),
				C(r, this.cn(Q) + ' ' + t.class + ' ' + t.customClass),
				o)
			)
				(r.style[s] = `${o}px`),
					(r.style['width' === s ? 'height' : 'width'] = '');
			else {
				l && (this.track || document.body).prepend(r),
					(o =
						r.getBoundingClientRect()[s] *
						Math.max(
							1,
							(null === (i = window.visualViewport) || void 0 === i
								? void 0
								: i.scale) || 1
						));
				let t = r[this.isHorizontal ? 'offsetWidth' : 'offsetHeight'];
				t - 1 > o && (o = t);
			}
			const c = getComputedStyle(r);
			return (
				'content-box' === c.boxSizing &&
					(this.isHorizontal
						? ((o += parseFloat(c.paddingLeft) || 0),
							(o += parseFloat(c.paddingRight) || 0))
						: ((o += parseFloat(c.paddingTop) || 0),
							(o += parseFloat(c.paddingBottom) || 0))),
				(a =
					parseFloat(c[this.isHorizontal ? 'marginRight' : 'marginBottom']) ||
					0),
				l
					? null === (n = r.parentElement) || void 0 === n || n.removeChild(r)
					: t.el || r.remove(),
				{ dim: e(o, 1e3), gap: e(a, 1e3) }
			);
		}
		getBounds() {
			const { isInfinite: t, isRTL: e, isHorizontal: i, pages: n } = this;
			let s = { min: 0, max: 0 };
			if (t) s = { min: -1 / 0, max: 1 / 0 };
			else if (n.length) {
				const t = n[0].pos,
					o = n[n.length - 1].pos;
				s = e && i ? { min: t, max: o } : { min: -1 * o, max: -1 * t };
			}
			return { x: i ? s : { min: 0, max: 0 }, y: i ? { min: 0, max: 0 } : s };
		}
		repositionSlides() {
			let t,
				{
					isHorizontal: i,
					isRTL: n,
					isInfinite: s,
					viewport: o,
					viewportDim: a,
					contentDim: r,
					page: l,
					pages: c,
					slides: h,
					panzoom: d,
				} = this,
				u = 0,
				p = 0,
				f = 0,
				g = 0;
			d ? (g = -1 * d.current[this.axis]) : c[l] && (g = c[l].pos || 0),
				(t = i ? (n ? 'right' : 'left') : 'top'),
				n && i && (g *= -1);
			for (const i of h) {
				const n = i.el;
				n
					? ('top' === t
							? ((n.style.right = ''), (n.style.left = ''))
							: (n.style.top = ''),
						i.index !== u
							? (n.style[t] = 0 === p ? '' : `${e(p, 1e3)}px`)
							: (n.style[t] = ''),
						(f += i.dim + i.gap),
						u++)
					: (p += i.dim + i.gap);
			}
			if (s && f && o) {
				let n = getComputedStyle(o),
					s = 'padding',
					l = i ? 'Right' : 'Bottom',
					c = parseFloat(n[s + (i ? 'Left' : 'Top')]);
				(g -= c), (a += c), (a += parseFloat(n[s + l]));
				for (const i of h)
					i.el &&
						(e(i.pos) < e(a) &&
							e(i.pos + i.dim + i.gap) < e(g) &&
							e(g) > e(r - a) &&
							(i.el.style[t] = `${e(p + f, 1e3)}px`),
						e(i.pos + i.gap) >= e(r - a) &&
							e(i.pos) > e(g + a) &&
							e(g) < e(a) &&
							(i.el.style[t] = `-${e(f, 1e3)}px`));
			}
			let m,
				v,
				b = [...this.inTransition];
			if ((b.length > 1 && ((m = c[b[0]]), (v = c[b[1]])), m && v)) {
				let i = 0;
				for (const n of h)
					n.el
						? this.inTransition.has(n.index) &&
							m.slides.indexOf(n) < 0 &&
							(n.el.style[t] = `${e(i + (m.pos - v.pos), 1e3)}px`)
						: (i += n.dim + n.gap);
			}
		}
		createSlideEl(t) {
			const { track: e, slides: i } = this;
			if (!e || !t) return;
			if (t.el && t.el.parentNode) return;
			const n = t.el || document.createElement('div');
			C(n, this.cn(Q)), C(n, t.class), C(n, t.customClass);
			const s = t.html;
			s &&
				(s instanceof HTMLElement
					? n.appendChild(s)
					: (n.innerHTML = t.html + ''));
			const o = [];
			i.forEach((t, e) => {
				t.el && o.push(e);
			});
			const a = t.index;
			let r = null;
			if (o.length) {
				r = i[o.reduce((t, e) => (Math.abs(e - a) < Math.abs(t - a) ? e : t))];
			}
			const l =
				r && r.el && r.el.parentNode
					? r.index < t.index
						? r.el.nextSibling
						: r.el
					: null;
			e.insertBefore(n, e.contains(l) ? l : null),
				(t.el = n),
				this.emit('createSlide', t);
		}
		removeSlideEl(t, e = !1) {
			const i = null == t ? void 0 : t.el;
			if (!i || !i.parentNode) return;
			const n = this.cn(J);
			if (
				(i.classList.contains(n) && (P(i, n), this.emit('unselectSlide', t)),
				t.isDom && !e)
			)
				return (
					i.removeAttribute('aria-hidden'),
					i.removeAttribute('data-index'),
					void (i.style.left = '')
				);
			this.emit('removeSlide', t);
			const s = new CustomEvent(K);
			i.dispatchEvent(s), t.el && (t.el.remove(), (t.el = null));
		}
		transitionTo(t = 0, e = this.option('transition')) {
			var i, n, s, o;
			if (!e) return !1;
			const a = this.page,
				{ pages: r, panzoom: l } = this;
			t = parseInt((t || 0).toString()) || 0;
			const c = this.getPageFromIndex(t);
			if (
				!l ||
				!r[c] ||
				r.length < 2 ||
				Math.abs(
					((null ===
						(n = null === (i = r[a]) || void 0 === i ? void 0 : i.slides[0]) ||
					void 0 === n
						? void 0
						: n.dim) || 0) - this.viewportDim
				) > 1
			)
				return !1;
			let h = t > a ? 1 : -1;
			this.isInfinite &&
				(0 === a && t === r.length - 1 && (h = -1),
				a === r.length - 1 && 0 === t && (h = 1));
			const d = r[c].pos * (this.isRTL ? 1 : -1);
			if (a === c && Math.abs(d - l.target[this.axis]) < 1) return !1;
			this.clearTransitions();
			const u = l.isResting;
			C(this.container, this.cn('inTransition'));
			const p =
					(null === (s = r[a]) || void 0 === s ? void 0 : s.slides[0]) || null,
				f =
					(null === (o = r[c]) || void 0 === o ? void 0 : o.slides[0]) || null;
			this.inTransition.add(f.index), this.createSlideEl(f);
			let g = p.el,
				m = f.el;
			u || e === Q || ((e = 'fadeFast'), (g = null));
			const v = this.isRTL ? 'next' : 'prev',
				b = this.isRTL ? 'prev' : 'next';
			return (
				g &&
					(this.inTransition.add(p.index),
					(p.transition = e),
					g.addEventListener(K, this.onAnimationEnd),
					g.classList.add(`f-${e}Out`, `to-${h > 0 ? b : v}`)),
				m &&
					((f.transition = e),
					m.addEventListener(K, this.onAnimationEnd),
					m.classList.add(`f-${e}In`, `from-${h > 0 ? v : b}`)),
				(l.current[this.axis] = d),
				(l.target[this.axis] = d),
				l.requestTick(),
				this.onChange(c),
				!0
			);
		}
		manageSlideVisiblity() {
			const t = new Set(),
				e = new Set(),
				i = this.getVisibleSlides(
					parseFloat(this.option('preload', 0) + '') || 0
				);
			for (const n of this.slides) i.has(n) ? t.add(n) : e.add(n);
			for (const e of this.inTransition) t.add(this.slides[e]);
			for (const e of t) this.createSlideEl(e), this.lazyLoadSlide(e);
			for (const i of e) t.has(i) || this.removeSlideEl(i);
			this.markSelectedSlides(), this.repositionSlides();
		}
		markSelectedSlides() {
			if (!this.pages[this.page] || !this.pages[this.page].slides) return;
			const t = 'aria-hidden';
			let e = this.cn(J);
			if (e)
				for (const i of this.slides) {
					const n = i.el;
					n &&
						((n.dataset.index = `${i.index}`),
						n.classList.contains('f-thumbs__slide')
							? this.getVisibleSlides(0).has(i)
								? n.removeAttribute(t)
								: n.setAttribute(t, 'true')
							: this.pages[this.page].slides.includes(i)
								? (n.classList.contains(e) ||
										(C(n, e), this.emit('selectSlide', i)),
									n.removeAttribute(t))
								: (n.classList.contains(e) &&
										(P(n, e), this.emit('unselectSlide', i)),
									n.setAttribute(t, 'true')));
				}
		}
		flipInfiniteTrack() {
			const {
					axis: t,
					isHorizontal: e,
					isInfinite: i,
					isRTL: n,
					viewportDim: s,
					contentDim: o,
				} = this,
				a = this.panzoom;
			if (!a || !i) return;
			let r = a.current[t],
				l = a.target[t] - r,
				c = 0,
				h = 0.5 * s;
			n && e
				? (r < -h && ((c = -1), (r += o)), r > o - h && ((c = 1), (r -= o)))
				: (r > h && ((c = 1), (r -= o)), r < -o + h && ((c = -1), (r += o))),
				c && ((a.current[t] = r), (a.target[t] = r + l));
		}
		lazyLoadImg(t, e) {
			const i = this,
				n = 'f-fadeIn',
				o = 'is-preloading';
			let a = !1,
				r = null;
			const l = () => {
				a ||
					((a = !0),
					r && (r.remove(), (r = null)),
					P(e, o),
					e.complete &&
						(C(e, n),
						setTimeout(() => {
							P(e, n);
						}, 350)),
					this.option('adaptiveHeight') &&
						t.el &&
						this.pages[this.page].slides.indexOf(t) > -1 &&
						(i.updateMetrics(), i.setViewportHeight()),
					this.emit('load', t));
			};
			C(e, o),
				(e.src = e.dataset.lazySrcset || e.dataset.lazySrc || ''),
				delete e.dataset.lazySrc,
				delete e.dataset.lazySrcset,
				e.addEventListener('error', () => {
					l();
				}),
				e.addEventListener('load', () => {
					l();
				}),
				setTimeout(() => {
					const i = e.parentNode;
					i &&
						t.el &&
						(e.complete ? l() : a || ((r = s(E)), i.insertBefore(r, e)));
				}, 300);
		}
		lazyLoadSlide(t) {
			const e = t && t.el;
			if (!e) return;
			const i = new Set();
			let n = Array.from(
				e.querySelectorAll('[data-lazy-src],[data-lazy-srcset]')
			);
			e.dataset.lazySrc && n.push(e),
				n.map((t) => {
					t instanceof HTMLImageElement
						? i.add(t)
						: t instanceof HTMLElement &&
							t.dataset.lazySrc &&
							((t.style.backgroundImage = `url('${t.dataset.lazySrc}')`),
							delete t.dataset.lazySrc);
				});
			for (const e of i) this.lazyLoadImg(t, e);
		}
		onAnimationEnd(t) {
			var e;
			const i = t.target,
				n = i ? parseInt(i.dataset.index || '', 10) || 0 : -1,
				s = this.slides[n],
				o = t.animationName;
			if (!i || !s || !o) return;
			const a = !!this.inTransition.has(n) && s.transition;
			a &&
				o.substring(0, a.length + 2) === `f-${a}` &&
				this.inTransition.delete(n),
				this.inTransition.size || this.clearTransitions(),
				n === this.page &&
					(null === (e = this.panzoom) || void 0 === e
						? void 0
						: e.isResting) &&
					this.emit('settle');
		}
		onDecel(t, e = 0, i = 0, n = 0, s = 0) {
			if (this.option('dragFree')) return void this.setPageFromPosition();
			const { isRTL: o, isHorizontal: a, axis: r, pages: l } = this,
				c = l.length,
				h = Math.abs(Math.atan2(i, e) / (Math.PI / 180));
			let d = 0;
			if (((d = h > 45 && h < 135 ? (a ? 0 : i) : a ? e : 0), !c)) return;
			let u = this.page,
				p = o && a ? 1 : -1;
			const f = t.current[r] * p;
			let { pageIndex: g } = this.getPageFromPosition(f);
			Math.abs(d) > 5
				? (l[u].dim <
						document.documentElement[
							'client' + (this.isHorizontal ? 'Width' : 'Height')
						] -
							1 && (u = g),
					(u = o && a ? (d < 0 ? u - 1 : u + 1) : d < 0 ? u + 1 : u - 1))
				: (u = 0 === n && 0 === s ? u : g),
				this.slideTo(u, {
					transition: !1,
					friction: t.option('decelFriction'),
				});
		}
		onClick(t) {
			const e = t.target,
				i = e && S(e) ? e.dataset : null;
			let n, s;
			i &&
				(void 0 !== i.carouselPage
					? ((s = 'slideTo'), (n = i.carouselPage))
					: void 0 !== i.carouselNext
						? (s = 'slideNext')
						: void 0 !== i.carouselPrev && (s = 'slidePrev')),
				s
					? (t.preventDefault(),
						t.stopPropagation(),
						e && !e.hasAttribute('disabled') && this[s](n))
					: this.emit('click', t);
		}
		onSlideTo(t) {
			const e = t.detail || 0;
			this.slideTo(this.getPageForSlide(e), { friction: 0 });
		}
		onChange(t, e = 0) {
			const i = this.page;
			(this.prevPage = i),
				(this.page = t),
				this.option('adaptiveHeight') && this.setViewportHeight(),
				t !== i && (this.markSelectedSlides(), this.emit('change', t, i, e));
		}
		onRefresh() {
			let t = this.contentDim,
				e = this.viewportDim;
			this.updateMetrics(),
				(this.contentDim === t && this.viewportDim === e) ||
					this.slideTo(this.page, { friction: 0, transition: !1 });
		}
		onScroll() {
			var t;
			null === (t = this.viewport) || void 0 === t || t.scroll(0, 0);
		}
		onResize() {
			this.option('breakpoints') && this.processOptions();
		}
		onBeforeTransform(t) {
			this.lp !== t.current[this.axis] &&
				(this.flipInfiniteTrack(), this.manageSlideVisiblity()),
				(this.lp = t.current.e);
		}
		onEndAnimation() {
			this.inTransition.size || this.emit('settle');
		}
		reInit(t = null, e = null) {
			this.destroy(),
				(this.state = H.Init),
				(this.prevPage = null),
				(this.userOptions = t || this.userOptions),
				(this.userPlugins = e || this.userPlugins),
				this.processOptions();
		}
		slideTo(
			t = 0,
			{
				friction: e = this.option('friction'),
				transition: i = this.option('transition'),
			} = {}
		) {
			if (this.state === H.Destroy) return;
			t = parseInt((t || 0).toString()) || 0;
			const n = this.getPageFromIndex(t),
				{ axis: s, isHorizontal: o, isRTL: a, pages: r, panzoom: l } = this,
				c = r.length,
				h = a && o ? 1 : -1;
			if (!l || !c) return;
			if (this.page !== n) {
				const e = new Event('beforeChange', { bubbles: !0, cancelable: !0 });
				if ((this.emit('beforeChange', e, t), e.defaultPrevented)) return;
			}
			if (this.transitionTo(t, i)) return;
			let d = r[n].pos;
			if (this.isInfinite) {
				const e = this.contentDim,
					i = l.target[s] * h;
				if (2 === c) d += e * Math.floor(parseFloat(t + '') / 2);
				else {
					d = [d, d - e, d + e].reduce(function (t, e) {
						return Math.abs(e - i) < Math.abs(t - i) ? e : t;
					});
				}
			}
			(d *= h),
				Math.abs(l.target[s] - d) < 1 ||
					(l.panTo({ x: o ? d : 0, y: o ? 0 : d, friction: e }),
					this.onChange(n));
		}
		slideToClosest(t) {
			if (this.panzoom) {
				const { pageIndex: e } = this.getPageFromPosition();
				this.slideTo(e, t);
			}
		}
		slideNext() {
			this.slideTo(this.page + 1);
		}
		slidePrev() {
			this.slideTo(this.page - 1);
		}
		clearTransitions() {
			this.inTransition.clear(), P(this.container, this.cn('inTransition'));
			const t = ['to-prev', 'to-next', 'from-prev', 'from-next'];
			for (const e of this.slides) {
				const i = e.el;
				if (i) {
					i.removeEventListener(K, this.onAnimationEnd),
						i.classList.remove(...t);
					const n = e.transition;
					n && i.classList.remove(`f-${n}Out`, `f-${n}In`);
				}
			}
			this.manageSlideVisiblity();
		}
		addSlide(t, e) {
			var i, n, s, o;
			const a = this.panzoom,
				r =
					(null === (i = this.pages[this.page]) || void 0 === i
						? void 0
						: i.pos) || 0,
				l =
					(null === (n = this.pages[this.page]) || void 0 === n
						? void 0
						: n.dim) || 0,
				c = this.contentDim < this.viewportDim;
			let h = Array.isArray(e) ? e : [e];
			const d = [];
			for (const t of h) d.push(N(t));
			this.slides.splice(t, 0, ...d);
			for (let t = 0; t < this.slides.length; t++) this.slides[t].index = t;
			for (const t of d) this.emit('beforeInitSlide', t, t.index);
			if (
				(this.page >= t && (this.page += d.length), this.updateMetrics(), a)
			) {
				const e =
						(null === (s = this.pages[this.page]) || void 0 === s
							? void 0
							: s.pos) || 0,
					i =
						(null === (o = this.pages[this.page]) || void 0 === o
							? void 0
							: o.dim) || 0,
					n = this.pages.length || 1,
					h = this.isRTL ? l - i : i - l,
					d = this.isRTL ? r - e : e - r;
				c && 1 === n
					? (t <= this.page &&
							((a.current[this.axis] -= h), (a.target[this.axis] -= h)),
						a.panTo({ [this.isHorizontal ? 'x' : 'y']: -1 * e }))
					: d &&
						t <= this.page &&
						((a.target[this.axis] -= d),
						(a.current[this.axis] -= d),
						a.requestTick());
			}
			for (const t of d) this.emit('initSlide', t, t.index);
		}
		prependSlide(t) {
			this.addSlide(0, t);
		}
		appendSlide(t) {
			this.addSlide(this.slides.length, t);
		}
		removeSlide(t) {
			const e = this.slides.length;
			t = ((t % e) + e) % e;
			const i = this.slides[t];
			if (i) {
				this.removeSlideEl(i, !0), this.slides.splice(t, 1);
				for (let t = 0; t < this.slides.length; t++) this.slides[t].index = t;
				this.updateMetrics(),
					this.slideTo(this.page, { friction: 0, transition: !1 }),
					this.emit('destroySlide', i);
			}
		}
		updateMetrics() {
			const {
				panzoom: t,
				viewport: i,
				track: n,
				slides: s,
				isHorizontal: o,
				isInfinite: a,
			} = this;
			if (!n) return;
			const r = o ? 'width' : 'height',
				l = o ? 'offsetWidth' : 'offsetHeight';
			if (i) {
				let t = Math.max(i[l], e(i.getBoundingClientRect()[r], 1e3)),
					n = getComputedStyle(i),
					s = 'padding',
					a = o ? 'Right' : 'Bottom';
				(t -= parseFloat(n[s + (o ? 'Left' : 'Top')]) + parseFloat(n[s + a])),
					(this.viewportDim = t);
			}
			let c,
				h = 0;
			for (const [t, i] of s.entries()) {
				let n = 0,
					o = 0;
				!i.el && c
					? ((n = c.dim), (o = c.gap))
					: (({ dim: n, gap: o } = this.getSlideMetrics(i)), (c = i)),
					(n = e(n, 1e3)),
					(o = e(o, 1e3)),
					(i.dim = n),
					(i.gap = o),
					(i.pos = h),
					(h += n),
					(a || t < s.length - 1) && (h += o);
			}
			(h = e(h, 1e3)),
				(this.contentDim = h),
				t &&
					((t.contentRect[r] = h),
					(t.contentRect[o ? 'fullWidth' : 'fullHeight'] = h)),
				(this.pages = this.createPages()),
				(this.pages = this.processPages()),
				this.state === H.Init && this.setInitialPage(),
				(this.page = Math.max(0, Math.min(this.page, this.pages.length - 1))),
				this.manageSlideVisiblity(),
				this.emit('refresh');
		}
		getProgress(t, i = !1, n = !1) {
			void 0 === t && (t = this.page);
			const s = this,
				o = s.panzoom,
				a = s.contentDim,
				r = s.pages[t] || 0;
			if (!r || !o) return t > this.page ? -1 : 1;
			let l = -1 * o.current.e,
				c = e((l - r.pos) / (1 * r.dim), 1e3),
				h = c,
				d = c;
			this.isInfinite &&
				!0 !== n &&
				((h = e((l - r.pos + a) / (1 * r.dim), 1e3)),
				(d = e((l - r.pos - a) / (1 * r.dim), 1e3)));
			let u = [c, h, d].reduce(function (t, e) {
				return Math.abs(e) < Math.abs(t) ? e : t;
			});
			return i ? u : u > 1 ? 1 : u < -1 ? -1 : u;
		}
		setViewportHeight() {
			const { page: t, pages: e, viewport: i, isHorizontal: n } = this;
			if (!i || !e[t]) return;
			let s = 0;
			n &&
				this.track &&
				((this.track.style.height = 'auto'),
				e[t].slides.forEach((t) => {
					t.el && (s = Math.max(s, t.el.offsetHeight));
				})),
				(i.style.height = s ? `${s}px` : '');
		}
		getPageForSlide(t) {
			for (const e of this.pages)
				for (const i of e.slides) if (i.index === t) return e.index;
			return -1;
		}
		getVisibleSlides(t = 0) {
			var e;
			const i = new Set();
			let {
				panzoom: n,
				contentDim: s,
				viewportDim: o,
				pages: a,
				page: r,
			} = this;
			if (o) {
				s =
					s +
						(null === (e = this.slides[this.slides.length - 1]) || void 0 === e
							? void 0
							: e.gap) || 0;
				let l = 0;
				(l =
					n && n.state !== v.Init && n.state !== v.Destroy
						? -1 * n.current[this.axis]
						: (a[r] && a[r].pos) || 0),
					this.isInfinite && (l -= Math.floor(l / s) * s),
					this.isRTL && this.isHorizontal && (l *= -1);
				const c = l - o * t,
					h = l + o * (t + 1),
					d = this.isInfinite ? [-1, 0, 1] : [0];
				for (const t of this.slides)
					for (const e of d) {
						const n = t.pos + e * s,
							o = n + t.dim + t.gap;
						n < h && o > c && i.add(t);
					}
			}
			return i;
		}
		getPageFromPosition(t) {
			const {
					viewportDim: e,
					contentDim: i,
					slides: n,
					pages: s,
					panzoom: o,
				} = this,
				a = s.length,
				r = n.length,
				l = n[0],
				c = n[r - 1],
				h = this.option('center');
			let d = 0,
				u = 0,
				p = 0,
				f =
					void 0 === t
						? -1 * ((null == o ? void 0 : o.target[this.axis]) || 0)
						: t;
			h && (f += 0.5 * e),
				this.isInfinite
					? (f < l.pos - 0.5 * c.gap && ((f -= i), (p = -1)),
						f > c.pos + c.dim + 0.5 * c.gap && ((f -= i), (p = 1)))
					: (f = Math.max(l.pos || 0, Math.min(f, c.pos)));
			let g = c,
				m = n.find((t) => {
					const e = t.pos - 0.5 * g.gap,
						i = t.pos + t.dim + 0.5 * t.gap;
					return (g = t), f >= e && f < i;
				});
			return (
				m || (m = c),
				(u = this.getPageForSlide(m.index)),
				(d = u + p * a),
				{ page: d, pageIndex: u }
			);
		}
		setPageFromPosition() {
			const { pageIndex: t } = this.getPageFromPosition();
			this.onChange(t);
		}
		destroy() {
			if ([H.Destroy].includes(this.state)) return;
			this.state = H.Destroy;
			const {
					container: t,
					viewport: e,
					track: i,
					slides: n,
					panzoom: s,
				} = this,
				o = this.option('classes');
			t.removeEventListener('click', this.onClick, {
				passive: !1,
				capture: !1,
			}),
				t.removeEventListener('slideTo', this.onSlideTo),
				window.removeEventListener('resize', this.onResize),
				s && (s.destroy(), (this.panzoom = null)),
				n &&
					n.forEach((t) => {
						this.removeSlideEl(t);
					}),
				this.detachPlugins(),
				e &&
					(e.removeEventListener('scroll', this.onScroll),
					e.offsetParent &&
						i &&
						i.offsetParent &&
						e.replaceWith(...i.childNodes));
			for (const [e, i] of Object.entries(o))
				'container' !== e && i && t.classList.remove(i);
			(this.track = null),
				(this.viewport = null),
				(this.page = 0),
				(this.slides = []);
			const a = this.events.get('ready');
			(this.events = new Map()), a && this.events.set('ready', a);
		}
	}
	Object.defineProperty(tt, 'Panzoom', {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: D,
	}),
		Object.defineProperty(tt, 'defaults', {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: B,
		}),
		Object.defineProperty(tt, 'Plugins', {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: G,
		});
	const et = function (t) {
			if (!S(t)) return 0;
			const e = window.scrollY,
				i = window.innerHeight,
				n = e + i,
				s = t.getBoundingClientRect(),
				o = s.y + e,
				a = s.height,
				r = o + a;
			if (e > r || n < o) return 0;
			if (e < o && n > r) return 100;
			if (o < e && r > n) return 100;
			let l = a;
			o < e && (l -= e - o), r > n && (l -= r - n);
			const c = (l / i) * 100;
			return Math.round(c);
		},
		it = !(
			'undefined' == typeof window ||
			!window.document ||
			!window.document.createElement
		);
	let nt;
	const st = [
			'a[href]',
			'area[href]',
			'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
			'select:not([disabled]):not([aria-hidden])',
			'textarea:not([disabled]):not([aria-hidden])',
			'button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)',
			'iframe',
			'object',
			'embed',
			'video',
			'audio',
			'[contenteditable]',
			'[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])',
		].join(','),
		ot = (t) => {
			if (t && it) {
				void 0 === nt &&
					document.createElement('div').focus({
						get preventScroll() {
							return (nt = !0), !1;
						},
					});
				try {
					if (nt) t.focus({ preventScroll: !0 });
					else {
						const e = window.scrollY || document.body.scrollTop,
							i = window.scrollX || document.body.scrollLeft;
						t.focus(),
							document.body.scrollTo({ top: e, left: i, behavior: 'auto' });
					}
				} catch (t) {}
			}
		},
		at = () => {
			const t = document;
			let e,
				i = '',
				n = '',
				s = '';
			return (
				t.fullscreenEnabled
					? ((i = 'requestFullscreen'),
						(n = 'exitFullscreen'),
						(s = 'fullscreenElement'))
					: t.webkitFullscreenEnabled &&
						((i = 'webkitRequestFullscreen'),
						(n = 'webkitExitFullscreen'),
						(s = 'webkitFullscreenElement')),
				i &&
					(e = {
						request: function (e = t.documentElement) {
							return 'webkitRequestFullscreen' === i
								? e[i](Element.ALLOW_KEYBOARD_INPUT)
								: e[i]();
						},
						exit: function () {
							return t[s] && t[n]();
						},
						isFullscreen: function () {
							return t[s];
						},
					}),
				e
			);
		},
		rt = {
			animated: !0,
			autoFocus: !0,
			backdropClick: 'close',
			Carousel: {
				classes: {
					container: 'fancybox__carousel',
					viewport: 'fancybox__viewport',
					track: 'fancybox__track',
					slide: 'fancybox__slide',
				},
			},
			closeButton: 'auto',
			closeExisting: !1,
			commonCaption: !1,
			compact: () =>
				window.matchMedia('(max-width: 578px), (max-height: 578px)').matches,
			contentClick: 'toggleZoom',
			contentDblClick: !1,
			defaultType: 'image',
			defaultDisplay: 'flex',
			dragToClose: !0,
			Fullscreen: { autoStart: !1 },
			groupAll: !1,
			groupAttr: 'data-fancybox',
			hideClass: 'f-fadeOut',
			hideScrollbar: !0,
			idle: 3500,
			keyboard: {
				Escape: 'close',
				Delete: 'close',
				Backspace: 'close',
				PageUp: 'next',
				PageDown: 'prev',
				ArrowUp: 'prev',
				ArrowDown: 'next',
				ArrowRight: 'next',
				ArrowLeft: 'prev',
			},
			l10n: Object.assign(Object.assign({}, y), {
				CLOSE: 'Close',
				NEXT: 'Next',
				PREV: 'Previous',
				MODAL: 'You can close this modal content with the ESC key',
				ERROR: 'Something Went Wrong, Please Try Again Later',
				IMAGE_ERROR: 'Image Not Found',
				ELEMENT_NOT_FOUND: 'HTML Element Not Found',
				AJAX_NOT_FOUND: 'Error Loading AJAX : Not Found',
				AJAX_FORBIDDEN: 'Error Loading AJAX : Forbidden',
				IFRAME_ERROR: 'Error Loading Page',
				TOGGLE_ZOOM: 'Toggle zoom level',
				TOGGLE_THUMBS: 'Toggle thumbnails',
				TOGGLE_SLIDESHOW: 'Toggle slideshow',
				TOGGLE_FULLSCREEN: 'Toggle full-screen mode',
				DOWNLOAD: 'Download',
			}),
			parentEl: null,
			placeFocusBack: !0,
			showClass: 'f-zoomInUp',
			startIndex: 0,
			tpl: {
				closeButton:
					'<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',
				main: '<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>',
			},
			trapFocus: !0,
			wheel: 'zoom',
		};
	var lt, ct;
	!(function (t) {
		(t[(t.Init = 0)] = 'Init'),
			(t[(t.Ready = 1)] = 'Ready'),
			(t[(t.Closing = 2)] = 'Closing'),
			(t[(t.CustomClosing = 3)] = 'CustomClosing'),
			(t[(t.Destroy = 4)] = 'Destroy');
	})(lt || (lt = {})),
		(function (t) {
			(t[(t.Loading = 0)] = 'Loading'),
				(t[(t.Opening = 1)] = 'Opening'),
				(t[(t.Ready = 2)] = 'Ready'),
				(t[(t.Closing = 3)] = 'Closing');
		})(ct || (ct = {}));
	let ht = '',
		dt = !1,
		ut = !1,
		pt = null;
	const ft = () => {
			let t = '',
				e = '';
			const i = Ae.getInstance();
			if (i) {
				const n = i.carousel,
					s = i.getSlide();
				if (n && s) {
					let o = s.slug || void 0,
						a = s.triggerEl || void 0;
					(e = o || i.option('slug') || ''),
						!e && a && a.dataset && (e = a.dataset.fancybox || ''),
						e &&
							'true' !== e &&
							(t =
								'#' +
								e +
								(!o && n.slides.length > 1 ? '-' + (s.index + 1) : ''));
				}
			}
			return { hash: t, slug: e, index: 1 };
		},
		gt = () => {
			const t = new URL(document.URL).hash,
				e = t.slice(1).split('-'),
				i = e[e.length - 1],
				n = (i && /^\+?\d+$/.test(i) && parseInt(e.pop() || '1', 10)) || 1;
			return { hash: t, slug: e.join('-'), index: n };
		},
		mt = () => {
			const { slug: t, index: e } = gt();
			if (!t) return;
			let i = document.querySelector(`[data-slug="${t}"]`);
			if (
				(i &&
					i.dispatchEvent(
						new CustomEvent('click', { bubbles: !0, cancelable: !0 })
					),
				Ae.getInstance())
			)
				return;
			const n = document.querySelectorAll(`[data-fancybox="${t}"]`);
			n.length &&
				((i = n[e - 1]),
				i &&
					i.dispatchEvent(
						new CustomEvent('click', { bubbles: !0, cancelable: !0 })
					));
		},
		vt = () => {
			if (!1 === Ae.defaults.Hash) return;
			const t = Ae.getInstance();
			if (!1 === (null == t ? void 0 : t.options.Hash)) return;
			const { slug: e, index: i } = gt(),
				{ slug: n } = ft();
			t && (e === n ? t.jumpTo(i - 1) : ((dt = !0), t.close())), mt();
		},
		bt = () => {
			pt && clearTimeout(pt),
				queueMicrotask(() => {
					vt();
				});
		},
		yt = () => {
			window.addEventListener('hashchange', bt, !1),
				setTimeout(() => {
					vt();
				}, 500);
		};
	it &&
		(/complete|interactive|loaded/.test(document.readyState)
			? yt()
			: document.addEventListener('DOMContentLoaded', yt));
	const wt = 'is-zooming-in';
	class xt extends $ {
		onCreateSlide(t, e, i) {
			const n = this.instance.optionFor(i, 'src') || '';
			i.el && 'image' === i.type && 'string' == typeof n && this.setImage(i, n);
		}
		onRemoveSlide(t, e, i) {
			i.panzoom && i.panzoom.destroy(),
				(i.panzoom = void 0),
				(i.imageEl = void 0);
		}
		onChange(t, e, i, n) {
			P(this.instance.container, wt);
			for (const t of e.slides) {
				const e = t.panzoom;
				e && t.index !== i && e.reset(0.35);
			}
		}
		onClose() {
			var t;
			const e = this.instance,
				i = e.container,
				n = e.getSlide();
			if (!i || !i.parentElement || !n) return;
			const { el: s, contentEl: o, panzoom: a, thumbElSrc: r } = n;
			if (
				!s ||
				!r ||
				!o ||
				!a ||
				a.isContentLoading ||
				a.state === v.Init ||
				a.state === v.Destroy
			)
				return;
			a.updateMetrics();
			let l = this.getZoomInfo(n);
			if (!l) return;
			(this.instance.state = lt.CustomClosing),
				i.classList.remove(wt),
				i.classList.add('is-zooming-out'),
				(o.style.backgroundImage = `url('${r}')`);
			const c = i.getBoundingClientRect();
			1 ===
				((null === (t = window.visualViewport) || void 0 === t
					? void 0
					: t.scale) || 1) &&
				Object.assign(i.style, {
					position: 'absolute',
					top: `${i.offsetTop + window.scrollY}px`,
					left: `${i.offsetLeft + window.scrollX}px`,
					bottom: 'auto',
					right: 'auto',
					width: `${c.width}px`,
					height: `${c.height}px`,
					overflow: 'hidden',
				});
			const { x: h, y: d, scale: u, opacity: p } = l;
			if (p) {
				const t = ((t, e, i, n) => {
					const s = e - t,
						o = n - i;
					return (e) => i + (((e - t) / s) * o || 0);
				})(a.scale, u, 1, 0);
				a.on('afterTransform', () => {
					o.style.opacity = t(a.scale) + '';
				});
			}
			a.on('endAnimation', () => {
				e.destroy();
			}),
				(a.target.a = u),
				(a.target.b = 0),
				(a.target.c = 0),
				(a.target.d = u),
				a.panTo({
					x: h,
					y: d,
					scale: u,
					friction: p ? 0.2 : 0.33,
					ignoreBounds: !0,
				}),
				a.isResting && e.destroy();
		}
		setImage(t, e) {
			const i = this.instance;
			(t.src = e),
				this.process(t, e).then(
					(e) => {
						const { contentEl: n, imageEl: s, thumbElSrc: o, el: a } = t;
						if (i.isClosing() || !n || !s) return;
						n.offsetHeight;
						const r = !!i.isOpeningSlide(t) && this.getZoomInfo(t);
						if (this.option('protected') && a) {
							a.addEventListener('contextmenu', (t) => {
								t.preventDefault();
							});
							const t = document.createElement('div');
							C(t, 'fancybox-protected'), n.appendChild(t);
						}
						if (o && r) {
							const s = e.contentRect,
								a = Math.max(s.fullWidth, s.fullHeight);
							let c = null;
							!r.opacity &&
								a > 1200 &&
								((c = document.createElement('img')),
								C(c, 'fancybox-ghost'),
								(c.src = o),
								n.appendChild(c));
							const h = () => {
								c &&
									(C(c, 'f-fadeFastOut'),
									setTimeout(() => {
										c && (c.remove(), (c = null));
									}, 200));
							};
							((l = o),
							new Promise((t, e) => {
								const i = new Image();
								(i.onload = t), (i.onerror = e), (i.src = l);
							})).then(
								() => {
									i.hideLoading(t),
										(t.state = ct.Opening),
										this.instance.emit('reveal', t),
										this.zoomIn(t).then(
											() => {
												h(), this.instance.done(t);
											},
											() => {}
										),
										c &&
											setTimeout(
												() => {
													h();
												},
												a > 2500 ? 800 : 200
											);
								},
								() => {
									i.hideLoading(t), i.revealContent(t);
								}
							);
						} else {
							const n = this.optionFor(t, 'initialSize'),
								s = this.optionFor(t, 'zoom'),
								o = {
									event: i.prevMouseMoveEvent || i.options.event,
									friction: s ? 0.12 : 0,
								};
							let a = i.optionFor(t, 'showClass') || void 0,
								r = !0;
							i.isOpeningSlide(t) &&
								('full' === n
									? e.zoomToFull(o)
									: 'cover' === n
										? e.zoomToCover(o)
										: 'max' === n
											? e.zoomToMax(o)
											: (r = !1),
								e.stop('current')),
								r && a && (a = e.isDragging ? 'f-fadeIn' : ''),
								i.hideLoading(t),
								i.revealContent(t, a);
						}
						var l;
					},
					() => {
						i.setError(t, '{{IMAGE_ERROR}}');
					}
				);
		}
		process(t, e) {
			return new Promise((i, n) => {
				var o;
				const a = this.instance,
					r = t.el;
				a.clearContent(t), a.showLoading(t);
				let l = this.optionFor(t, 'content');
				if (('string' == typeof l && (l = s(l)), !l || !S(l))) {
					if (
						((l = document.createElement('img')), l instanceof HTMLImageElement)
					) {
						let i = '',
							n = t.caption;
						(i =
							'string' == typeof n && n
								? n.replace(/<[^>]+>/gi, '').substring(0, 1e3)
								: `Image ${t.index + 1} of ${(null === (o = a.carousel) || void 0 === o ? void 0 : o.pages.length) || 1}`),
							(l.src = e || ''),
							(l.alt = i),
							(l.draggable = !1),
							t.srcset && l.setAttribute('srcset', t.srcset),
							this.instance.isOpeningSlide(t) && (l.fetchPriority = 'high');
					}
					t.sizes && l.setAttribute('sizes', t.sizes);
				}
				C(l, 'fancybox-image'), (t.imageEl = l), a.setContent(t, l, !1);
				t.panzoom = new D(
					r,
					p({ transformParent: !0 }, this.option('Panzoom') || {}, {
						content: l,
						width: (e, i) => a.optionFor(t, 'width', 'auto', i) || 'auto',
						height: (e, i) => a.optionFor(t, 'height', 'auto', i) || 'auto',
						wheel: () => {
							const t = a.option('wheel');
							return ('zoom' === t || 'pan' == t) && t;
						},
						click: (e, i) => {
							var n, s;
							if (a.isCompact || a.isClosing()) return !1;
							if (
								t.index !==
								(null === (n = a.getSlide()) || void 0 === n ? void 0 : n.index)
							)
								return !1;
							if (i) {
								const t = i.composedPath()[0];
								if (
									[
										'A',
										'BUTTON',
										'TEXTAREA',
										'OPTION',
										'INPUT',
										'SELECT',
										'VIDEO',
									].includes(t.nodeName)
								)
									return !1;
							}
							let o =
								!i ||
								(i.target &&
									(null === (s = t.contentEl) || void 0 === s
										? void 0
										: s.contains(i.target)));
							return a.option(o ? 'contentClick' : 'backdropClick') || !1;
						},
						dblClick: () =>
							a.isCompact ? 'toggleZoom' : a.option('contentDblClick') || !1,
						spinner: !1,
						panOnlyZoomed: !0,
						wheelLimit: 1 / 0,
						on: {
							ready: (t) => {
								i(t);
							},
							error: () => {
								n();
							},
							destroy: () => {
								n();
							},
						},
					})
				);
			});
		}
		zoomIn(t) {
			return new Promise((e, i) => {
				const n = this.instance,
					s = n.container,
					{ panzoom: o, contentEl: a, el: r } = t;
				o && o.updateMetrics();
				const l = this.getZoomInfo(t);
				if (!(l && r && a && o && s)) return void i();
				const { x: c, y: h, scale: d, opacity: u } = l,
					p = () => {
						t.state !== ct.Closing &&
							(u &&
								(a.style.opacity =
									Math.max(Math.min(1, 1 - (1 - o.scale) / (1 - d)), 0) + ''),
							o.scale >= 1 && o.scale > o.targetScale - 0.1 && e(o));
					},
					f = (t) => {
						((t.scale < 0.99 || t.scale > 1.01) && !t.isDragging) ||
							(P(s, wt),
							(a.style.opacity = ''),
							t.off('endAnimation', f),
							t.off('touchStart', f),
							t.off('afterTransform', p),
							e(t));
					};
				o.on('endAnimation', f),
					o.on('touchStart', f),
					o.on('afterTransform', p),
					o.on(['error', 'destroy'], () => {
						i();
					}),
					o.panTo({ x: c, y: h, scale: d, friction: 0, ignoreBounds: !0 }),
					o.stop('current');
				const g = {
						event:
							'mousemove' === o.panMode
								? n.prevMouseMoveEvent || n.options.event
								: void 0,
					},
					m = this.optionFor(t, 'initialSize');
				C(s, wt),
					n.hideLoading(t),
					'full' === m
						? o.zoomToFull(g)
						: 'cover' === m
							? o.zoomToCover(g)
							: 'max' === m
								? o.zoomToMax(g)
								: o.reset(0.172);
			});
		}
		getZoomInfo(t) {
			const { el: e, imageEl: i, thumbEl: n, panzoom: s } = t,
				o = this.instance,
				a = o.container;
			if (
				!e ||
				!i ||
				!n ||
				!s ||
				et(n) < 3 ||
				!this.optionFor(t, 'zoom') ||
				!a ||
				o.state === lt.Destroy
			)
				return !1;
			if ('0' === getComputedStyle(a).getPropertyValue('--f-images-zoom'))
				return !1;
			const r = window.visualViewport || null;
			if (1 !== (r ? r.scale : 1)) return !1;
			let { top: l, left: c, width: h, height: d } = n.getBoundingClientRect(),
				{ top: u, left: p, fitWidth: f, fitHeight: g } = s.contentRect;
			if (!(h && d && f && g)) return !1;
			const m = s.container.getBoundingClientRect();
			(p += m.left), (u += m.top);
			const v = -1 * (p + 0.5 * f - (c + 0.5 * h)),
				b = -1 * (u + 0.5 * g - (l + 0.5 * d)),
				y = h / f;
			let w = this.option('zoomOpacity') || !1;
			return (
				'auto' === w && (w = Math.abs(h / d - f / g) > 0.1),
				{ x: v, y: b, scale: y, opacity: w }
			);
		}
		attach() {
			const t = this,
				e = t.instance;
			e.on('Carousel.change', t.onChange),
				e.on('Carousel.createSlide', t.onCreateSlide),
				e.on('Carousel.removeSlide', t.onRemoveSlide),
				e.on('close', t.onClose);
		}
		detach() {
			const t = this,
				e = t.instance;
			e.off('Carousel.change', t.onChange),
				e.off('Carousel.createSlide', t.onCreateSlide),
				e.off('Carousel.removeSlide', t.onRemoveSlide),
				e.off('close', t.onClose);
		}
	}
	Object.defineProperty(xt, 'defaults', {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: {
			initialSize: 'fit',
			Panzoom: { maxScale: 1 },
			protected: !1,
			zoom: !0,
			zoomOpacity: 'auto',
		},
	}),
		'function' == typeof SuppressedError && SuppressedError;
	const Et = 'html',
		St = 'image',
		Pt = 'map',
		Ct = 'youtube',
		Tt = 'vimeo',
		Mt = 'html5video',
		Ot = (t, e = {}) => {
			const i = new URL(t),
				n = new URLSearchParams(i.search),
				s = new URLSearchParams();
			for (const [t, i] of [...n, ...Object.entries(e)]) {
				let e = i + '';
				if ('t' === t) {
					let t = e.match(/((\d*)m)?(\d*)s?/);
					t &&
						s.set(
							'start',
							60 * parseInt(t[2] || '0') + parseInt(t[3] || '0') + ''
						);
				} else s.set(t, e);
			}
			let o = s + '',
				a = t.match(/#t=((.*)?\d+s)/);
			return a && (o += `#t=${a[1]}`), o;
		},
		At = {
			ajax: null,
			autoSize: !0,
			iframeAttr: { allow: 'autoplay; fullscreen', scrolling: 'auto' },
			preload: !0,
			videoAutoplay: !0,
			videoRatio: 16 / 9,
			videoTpl:
				'<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
			videoFormat: '',
			vimeo: { byline: 1, color: '00adef', controls: 1, dnt: 1, muted: 0 },
			youtube: { controls: 1, enablejsapi: 1, nocookie: 1, rel: 0, fs: 1 },
		},
		Lt = [
			'image',
			'html',
			'ajax',
			'inline',
			'clone',
			'iframe',
			'map',
			'pdf',
			'html5video',
			'youtube',
			'vimeo',
		];
	class zt extends $ {
		onBeforeInitSlide(t, e, i) {
			this.processType(i);
		}
		onCreateSlide(t, e, i) {
			this.setContent(i);
		}
		onClearContent(t, e) {
			e.xhr && (e.xhr.abort(), (e.xhr = null));
			const i = e.iframeEl;
			i &&
				((i.onload = i.onerror = null),
				(i.src = '//about:blank'),
				(e.iframeEl = null));
			const n = e.contentEl,
				s = e.placeholderEl;
			if ('inline' === e.type && n && s)
				n.classList.remove('fancybox__content'),
					'none' !== getComputedStyle(n).getPropertyValue('display') &&
						(n.style.display = 'none'),
					setTimeout(() => {
						s &&
							(n && s.parentNode && s.parentNode.insertBefore(n, s),
							s.remove());
					}, 0),
					(e.contentEl = void 0),
					(e.placeholderEl = void 0);
			else for (; e.el && e.el.firstChild; ) e.el.removeChild(e.el.firstChild);
		}
		onSelectSlide(t, e, i) {
			i.state === ct.Ready && this.playVideo();
		}
		onUnselectSlide(t, e, i) {
			var n, s;
			if (i.type === Mt) {
				try {
					null ===
						(s =
							null === (n = i.el) || void 0 === n
								? void 0
								: n.querySelector('video')) ||
						void 0 === s ||
						s.pause();
				} catch (t) {}
				return;
			}
			let o;
			i.type === Tt
				? (o = { method: 'pause', value: 'true' })
				: i.type === Ct && (o = { event: 'command', func: 'pauseVideo' }),
				o &&
					i.iframeEl &&
					i.iframeEl.contentWindow &&
					i.iframeEl.contentWindow.postMessage(JSON.stringify(o), '*'),
				i.poller && clearTimeout(i.poller);
		}
		onDone(t, e) {
			t.isCurrentSlide(e) && !t.isClosing() && this.playVideo();
		}
		onRefresh(t, e) {
			e.slides.forEach((t) => {
				t.el && (this.resizeIframe(t), this.setAspectRatio(t));
			});
		}
		onMessage(t) {
			try {
				let e = JSON.parse(t.data);
				if ('https://player.vimeo.com' === t.origin) {
					if ('ready' === e.event)
						for (let e of Array.from(
							document.getElementsByClassName('fancybox__iframe')
						))
							e instanceof HTMLIFrameElement &&
								e.contentWindow === t.source &&
								(e.dataset.ready = 'true');
				} else if (
					t.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) &&
					'onReady' === e.event
				) {
					const t = document.getElementById(e.id);
					t && (t.dataset.ready = 'true');
				}
			} catch (t) {}
		}
		loadAjaxContent(t) {
			const e = this.instance.optionFor(t, 'src') || '';
			this.instance.showLoading(t);
			const i = this.instance,
				n = new XMLHttpRequest();
			i.showLoading(t),
				(n.onreadystatechange = function () {
					n.readyState === XMLHttpRequest.DONE &&
						i.state === lt.Ready &&
						(i.hideLoading(t),
						200 === n.status
							? i.setContent(t, n.responseText)
							: i.setError(
									t,
									404 === n.status ? '{{AJAX_NOT_FOUND}}' : '{{AJAX_FORBIDDEN}}'
								));
				});
			const s = t.ajax || null;
			n.open(s ? 'POST' : 'GET', e + ''),
				n.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'),
				n.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
				n.send(s),
				(t.xhr = n);
		}
		setInlineContent(t) {
			let e = null;
			if (S(t.src)) e = t.src;
			else if ('string' == typeof t.src) {
				const i = t.src.split('#', 2).pop();
				e = i ? document.getElementById(i) : null;
			}
			if (e) {
				if ('clone' === t.type || e.closest('.fancybox__slide')) {
					e = e.cloneNode(!0);
					const i = e.dataset.animationName;
					i && (e.classList.remove(i), delete e.dataset.animationName);
					let n = e.getAttribute('id');
					(n = n ? `${n}--clone` : `clone-${this.instance.id}-${t.index}`),
						e.setAttribute('id', n);
				} else if (e.parentNode) {
					const i = document.createElement('div');
					i.classList.add('fancybox-placeholder'),
						e.parentNode.insertBefore(i, e),
						(t.placeholderEl = i);
				}
				this.instance.setContent(t, e);
			} else this.instance.setError(t, '{{ELEMENT_NOT_FOUND}}');
		}
		setIframeContent(t) {
			const { src: e, el: i } = t;
			if (!e || 'string' != typeof e || !i) return;
			i.classList.add('is-loading');
			const n = this.instance,
				s = document.createElement('iframe');
			(s.className = 'fancybox__iframe'),
				s.setAttribute('id', `fancybox__iframe_${n.id}_${t.index}`);
			for (const [e, i] of Object.entries(
				this.optionFor(t, 'iframeAttr') || {}
			))
				s.setAttribute(e, i);
			(s.onerror = () => {
				n.setError(t, '{{IFRAME_ERROR}}');
			}),
				(t.iframeEl = s);
			const o = this.optionFor(t, 'preload');
			if ('iframe' !== t.type || !1 === o)
				return (
					s.setAttribute('src', t.src + ''),
					n.setContent(t, s, !1),
					this.resizeIframe(t),
					void n.revealContent(t)
				);
			n.showLoading(t),
				(s.onload = () => {
					if (!s.src.length) return;
					const e = 'true' !== s.dataset.ready;
					(s.dataset.ready = 'true'),
						this.resizeIframe(t),
						e ? n.revealContent(t) : n.hideLoading(t);
				}),
				s.setAttribute('src', e),
				n.setContent(t, s, !1);
		}
		resizeIframe(t) {
			const { type: e, iframeEl: i } = t;
			if (e === Ct || e === Tt) return;
			const n = null == i ? void 0 : i.parentElement;
			if (!i || !n) return;
			let s = t.autoSize;
			void 0 === s && (s = this.optionFor(t, 'autoSize'));
			let o = t.width || 0,
				a = t.height || 0;
			o && a && (s = !1);
			const r = n && n.style;
			if (!1 !== t.preload && !1 !== s && r)
				try {
					const t = window.getComputedStyle(n),
						e = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight),
						s = parseFloat(t.paddingTop) + parseFloat(t.paddingBottom),
						l = i.contentWindow;
					if (l) {
						const t = l.document,
							i = t.getElementsByTagName(Et)[0],
							n = t.body;
						(r.width = ''),
							(n.style.overflow = 'hidden'),
							(o = o || i.scrollWidth + e),
							(r.width = `${o}px`),
							(n.style.overflow = ''),
							(r.flex = '0 0 auto'),
							(r.height = `${n.scrollHeight}px`),
							(a = i.scrollHeight + s);
					}
				} catch (t) {}
			if (o || a) {
				const t = { flex: '0 1 auto', width: '', height: '' };
				o && 'auto' !== o && (t.width = `${o}px`),
					a && 'auto' !== a && (t.height = `${a}px`),
					Object.assign(r, t);
			}
		}
		playVideo() {
			const t = this.instance.getSlide();
			if (!t) return;
			const { el: e } = t;
			if (!e || !e.offsetParent) return;
			if (!this.optionFor(t, 'videoAutoplay')) return;
			if (t.type === Mt)
				try {
					const t = e.querySelector('video');
					if (t) {
						const e = t.play();
						void 0 !== e &&
							e
								.then(() => {})
								.catch((e) => {
									(t.muted = !0), t.play();
								});
					}
				} catch (t) {}
			if (t.type !== Ct && t.type !== Tt) return;
			const i = () => {
				if (t.iframeEl && t.iframeEl.contentWindow) {
					let e;
					if ('true' === t.iframeEl.dataset.ready)
						return (
							(e =
								t.type === Ct
									? { event: 'command', func: 'playVideo' }
									: { method: 'play', value: 'true' }),
							e && t.iframeEl.contentWindow.postMessage(JSON.stringify(e), '*'),
							void (t.poller = void 0)
						);
					t.type === Ct &&
						((e = { event: 'listening', id: t.iframeEl.getAttribute('id') }),
						t.iframeEl.contentWindow.postMessage(JSON.stringify(e), '*'));
				}
				t.poller = setTimeout(i, 250);
			};
			i();
		}
		processType(t) {
			if (t.html) return (t.type = Et), (t.src = t.html), void (t.html = '');
			const e = this.instance.optionFor(t, 'src', '');
			if (!e || 'string' != typeof e) return;
			let i = t.type,
				n = null;
			if (
				(n = e.match(
					/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i
				))
			) {
				const s = this.optionFor(t, Ct),
					{ nocookie: o } = s,
					a = (function (t, e) {
						var i = {};
						for (var n in t)
							Object.prototype.hasOwnProperty.call(t, n) &&
								e.indexOf(n) < 0 &&
								(i[n] = t[n]);
						if (
							null != t &&
							'function' == typeof Object.getOwnPropertySymbols
						) {
							var s = 0;
							for (n = Object.getOwnPropertySymbols(t); s < n.length; s++)
								e.indexOf(n[s]) < 0 &&
									Object.prototype.propertyIsEnumerable.call(t, n[s]) &&
									(i[n[s]] = t[n[s]]);
						}
						return i;
					})(s, ['nocookie']),
					r = `www.youtube${o ? '-nocookie' : ''}.com`,
					l = Ot(e, a),
					c = encodeURIComponent(n[2]);
				(t.videoId = c),
					(t.src = `https://${r}/embed/${c}?${l}`),
					(t.thumbSrc =
						t.thumbSrc || `https://i.ytimg.com/vi/${c}/mqdefault.jpg`),
					(i = Ct);
			} else if (
				(n = e.match(
					/^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/
				))
			) {
				const s = Ot(e, this.optionFor(t, Tt)),
					o = encodeURIComponent(n[1]),
					a = n[4] || '';
				(t.videoId = o),
					(t.src = `https://player.vimeo.com/video/${o}?${a ? `h=${a}${s ? '&' : ''}` : ''}${s}`),
					(i = Tt);
			}
			if (!i && t.triggerEl) {
				const e = t.triggerEl.dataset.type;
				Lt.includes(e) && (i = e);
			}
			i ||
				('string' == typeof e &&
					('#' === e.charAt(0)
						? (i = 'inline')
						: (n = e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
							? ((i = Mt),
								(t.videoFormat =
									t.videoFormat || 'video/' + ('ogv' === n[1] ? 'ogg' : n[1])))
							: e.match(
										/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
								  )
								? (i = St)
								: e.match(/\.(pdf)((\?|#).*)?$/i) && (i = 'pdf'))),
				(n = e.match(
					/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i
				))
					? ((t.src = `https://maps.google.${n[1]}/?ll=${(n[2] ? n[2] + '&z=' + Math.floor(parseFloat(n[3])) + (n[4] ? n[4].replace(/^\//, '&') : '') : n[4] + '').replace(/\?/, '&')}&output=${n[4] && n[4].indexOf('layer=c') > 0 ? 'svembed' : 'embed'}`),
						(i = Pt))
					: (n = e.match(
							/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i
						)) &&
						((t.src = `https://maps.google.${n[1]}/maps?q=${n[2].replace('query=', 'q=').replace('api=1', '')}&output=embed`),
						(i = Pt)),
				(i = i || this.instance.option('defaultType')),
				(t.type = i),
				i === St && (t.thumbSrc = t.thumbSrc || t.src);
		}
		setContent(t) {
			const e = this.instance.optionFor(t, 'src') || '';
			if (t && t.type && e) {
				switch (t.type) {
					case Et:
						this.instance.setContent(t, e);
						break;
					case Mt:
						const i = this.option('videoTpl');
						i &&
							this.instance.setContent(
								t,
								i
									.replace(/\{\{src\}\}/gi, e + '')
									.replace(
										/\{\{format\}\}/gi,
										this.optionFor(t, 'videoFormat') || ''
									)
									.replace(/\{\{poster\}\}/gi, t.poster || t.thumbSrc || '')
							);
						break;
					case 'inline':
					case 'clone':
						this.setInlineContent(t);
						break;
					case 'ajax':
						this.loadAjaxContent(t);
						break;
					case 'pdf':
					case Pt:
					case Ct:
					case Tt:
						t.preload = !1;
					case 'iframe':
						this.setIframeContent(t);
				}
				this.setAspectRatio(t);
			}
		}
		setAspectRatio(t) {
			const e = t.contentEl;
			if (!(t.el && e && t.type && [Ct, Tt, Mt].includes(t.type))) return;
			let i,
				n = t.width || 'auto',
				s = t.height || 'auto';
			if ('auto' === n || 'auto' === s) {
				i = this.optionFor(t, 'videoRatio');
				const e = (i + '').match(/(\d+)\s*\/\s?(\d+)/);
				i =
					e && e.length > 2
						? parseFloat(e[1]) / parseFloat(e[2])
						: parseFloat(i + '');
			} else n && s && (i = n / s);
			if (!i) return;
			(e.style.aspectRatio = ''),
				(e.style.width = ''),
				(e.style.height = ''),
				e.offsetHeight;
			const o = e.getBoundingClientRect(),
				a = o.width || 1,
				r = o.height || 1;
			(e.style.aspectRatio = i + ''),
				i < a / r
					? ((s = 'auto' === s ? r : Math.min(r, s)),
						(e.style.width = 'auto'),
						(e.style.height = `${s}px`))
					: ((n = 'auto' === n ? a : Math.min(a, n)),
						(e.style.width = `${n}px`),
						(e.style.height = 'auto'));
		}
		attach() {
			const t = this,
				e = t.instance;
			e.on('Carousel.beforeInitSlide', t.onBeforeInitSlide),
				e.on('Carousel.createSlide', t.onCreateSlide),
				e.on('Carousel.selectSlide', t.onSelectSlide),
				e.on('Carousel.unselectSlide', t.onUnselectSlide),
				e.on('Carousel.Panzoom.refresh', t.onRefresh),
				e.on('done', t.onDone),
				e.on('clearContent', t.onClearContent),
				window.addEventListener('message', t.onMessage);
		}
		detach() {
			const t = this,
				e = t.instance;
			e.off('Carousel.beforeInitSlide', t.onBeforeInitSlide),
				e.off('Carousel.createSlide', t.onCreateSlide),
				e.off('Carousel.selectSlide', t.onSelectSlide),
				e.off('Carousel.unselectSlide', t.onUnselectSlide),
				e.off('Carousel.Panzoom.refresh', t.onRefresh),
				e.off('done', t.onDone),
				e.off('clearContent', t.onClearContent),
				window.removeEventListener('message', t.onMessage);
		}
	}
	Object.defineProperty(zt, 'defaults', {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: At,
	});
	const Rt = 'play',
		kt = 'pause',
		It = 'ready';
	class Dt extends $ {
		constructor() {
			super(...arguments),
				Object.defineProperty(this, 'state', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: It,
				}),
				Object.defineProperty(this, 'inHover', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: !1,
				}),
				Object.defineProperty(this, 'timer', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				}),
				Object.defineProperty(this, 'progressBar', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				});
		}
		get isActive() {
			return this.state !== It;
		}
		onReady(t) {
			this.option('autoStart') &&
				(t.isInfinite || t.page < t.pages.length - 1) &&
				this.start();
		}
		onChange() {
			this.removeProgressBar(), this.pause();
		}
		onSettle() {
			this.resume();
		}
		onVisibilityChange() {
			'visible' === document.visibilityState ? this.resume() : this.pause();
		}
		onMouseEnter() {
			(this.inHover = !0), this.pause();
		}
		onMouseLeave() {
			var t;
			(this.inHover = !1),
				(null === (t = this.instance.panzoom) || void 0 === t
					? void 0
					: t.isResting) && this.resume();
		}
		onTimerEnd() {
			const t = this.instance;
			'play' === this.state &&
				(t.isInfinite || t.page !== t.pages.length - 1
					? t.slideNext()
					: t.slideTo(0));
		}
		removeProgressBar() {
			this.progressBar &&
				(this.progressBar.remove(), (this.progressBar = null));
		}
		createProgressBar() {
			var t;
			if (!this.option('showProgress')) return null;
			this.removeProgressBar();
			const e = this.instance,
				i =
					(null === (t = e.pages[e.page]) || void 0 === t
						? void 0
						: t.slides) || [];
			let n = this.option('progressParentEl');
			if ((n || (n = (1 === i.length ? i[0].el : null) || e.viewport), !n))
				return null;
			const s = document.createElement('div');
			return (
				C(s, 'f-progress'),
				n.prepend(s),
				(this.progressBar = s),
				s.offsetHeight,
				s
			);
		}
		set() {
			const t = this,
				e = t.instance;
			if (e.pages.length < 2) return;
			if (t.timer) return;
			const i = t.option('timeout');
			(t.state = Rt), C(e.container, 'has-autoplay');
			let n = t.createProgressBar();
			n &&
				((n.style.transitionDuration = `${i}ms`),
				(n.style.transform = 'scaleX(1)')),
				(t.timer = setTimeout(() => {
					(t.timer = null), t.inHover || t.onTimerEnd();
				}, i)),
				t.emit('set');
		}
		clear() {
			const t = this;
			t.timer && (clearTimeout(t.timer), (t.timer = null)),
				t.removeProgressBar();
		}
		start() {
			const t = this;
			if ((t.set(), t.state !== It)) {
				if (t.option('pauseOnHover')) {
					const e = t.instance.container;
					e.addEventListener('mouseenter', t.onMouseEnter, !1),
						e.addEventListener('mouseleave', t.onMouseLeave, !1);
				}
				document.addEventListener('visibilitychange', t.onVisibilityChange, !1),
					t.emit('start');
			}
		}
		stop() {
			const t = this,
				e = t.state,
				i = t.instance.container;
			t.clear(),
				(t.state = It),
				i.removeEventListener('mouseenter', t.onMouseEnter, !1),
				i.removeEventListener('mouseleave', t.onMouseLeave, !1),
				document.removeEventListener(
					'visibilitychange',
					t.onVisibilityChange,
					!1
				),
				P(i, 'has-autoplay'),
				e !== It && t.emit('stop');
		}
		pause() {
			const t = this;
			t.state === Rt && ((t.state = kt), t.clear(), t.emit(kt));
		}
		resume() {
			const t = this,
				e = t.instance;
			if (e.isInfinite || e.page !== e.pages.length - 1)
				if (t.state !== Rt) {
					if (t.state === kt && !t.inHover) {
						const e = new Event('resume', { bubbles: !0, cancelable: !0 });
						t.emit('resume', e), e.defaultPrevented || t.set();
					}
				} else t.set();
			else t.stop();
		}
		toggle() {
			this.state === Rt || this.state === kt ? this.stop() : this.start();
		}
		attach() {
			const t = this,
				e = t.instance;
			e.on('ready', t.onReady),
				e.on('Panzoom.startAnimation', t.onChange),
				e.on('Panzoom.endAnimation', t.onSettle),
				e.on('Panzoom.touchMove', t.onChange);
		}
		detach() {
			const t = this,
				e = t.instance;
			e.off('ready', t.onReady),
				e.off('Panzoom.startAnimation', t.onChange),
				e.off('Panzoom.endAnimation', t.onSettle),
				e.off('Panzoom.touchMove', t.onChange),
				t.stop();
		}
	}
	Object.defineProperty(Dt, 'defaults', {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: {
			autoStart: !0,
			pauseOnHover: !0,
			progressParentEl: null,
			showProgress: !0,
			timeout: 3e3,
		},
	});
	class Ft extends $ {
		constructor() {
			super(...arguments),
				Object.defineProperty(this, 'ref', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				});
		}
		onPrepare(t) {
			const e = t.carousel;
			if (!e) return;
			const i = t.container;
			i &&
				((e.options.Autoplay = p(
					{ autoStart: !1 },
					this.option('Autoplay') || {},
					{
						pauseOnHover: !1,
						timeout: this.option('timeout'),
						progressParentEl: () => this.option('progressParentEl') || null,
						on: {
							start: () => {
								t.emit('startSlideshow');
							},
							set: (e) => {
								var n;
								i.classList.add('has-slideshow'),
									(null === (n = t.getSlide()) || void 0 === n
										? void 0
										: n.state) !== ct.Ready && e.pause();
							},
							stop: () => {
								i.classList.remove('has-slideshow'),
									t.isCompact || t.endIdle(),
									t.emit('endSlideshow');
							},
							resume: (e, i) => {
								var n, s, o;
								!i ||
									!i.cancelable ||
									((null === (n = t.getSlide()) || void 0 === n
										? void 0
										: n.state) === ct.Ready &&
										(null ===
											(o =
												null === (s = t.carousel) || void 0 === s
													? void 0
													: s.panzoom) || void 0 === o
											? void 0
											: o.isResting)) ||
									i.preventDefault();
							},
						},
					}
				)),
				e.attachPlugins({ Autoplay: Dt }),
				(this.ref = e.plugins.Autoplay));
		}
		onReady(t) {
			const e = t.carousel,
				i = this.ref;
			i &&
				e &&
				this.option('playOnStart') &&
				(e.isInfinite || e.page < e.pages.length - 1) &&
				i.start();
		}
		onDone(t, e) {
			const i = this.ref,
				n = t.carousel;
			if (!i || !n) return;
			const s = e.panzoom;
			s &&
				s.on('startAnimation', () => {
					t.isCurrentSlide(e) && i.stop();
				}),
				t.isCurrentSlide(e) && i.resume();
		}
		onKeydown(t, e) {
			var i;
			const n = this.ref;
			n &&
				e === this.option('key') &&
				'BUTTON' !==
					(null === (i = document.activeElement) || void 0 === i
						? void 0
						: i.nodeName) &&
				n.toggle();
		}
		attach() {
			const t = this,
				e = t.instance;
			e.on('Carousel.init', t.onPrepare),
				e.on('Carousel.ready', t.onReady),
				e.on('done', t.onDone),
				e.on('keydown', t.onKeydown);
		}
		detach() {
			const t = this,
				e = t.instance;
			e.off('Carousel.init', t.onPrepare),
				e.off('Carousel.ready', t.onReady),
				e.off('done', t.onDone),
				e.off('keydown', t.onKeydown);
		}
	}
	Object.defineProperty(Ft, 'defaults', {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: {
			key: ' ',
			playOnStart: !1,
			progressParentEl: (t) => {
				var e;
				return (
					(null === (e = t.instance.container) || void 0 === e
						? void 0
						: e.querySelector(
								'.fancybox__toolbar [data-fancybox-toggle-slideshow]'
							)) || t.instance.container
				);
			},
			timeout: 3e3,
		},
	});
	const jt = {
		classes: {
			container: 'f-thumbs f-carousel__thumbs',
			viewport: 'f-thumbs__viewport',
			track: 'f-thumbs__track',
			slide: 'f-thumbs__slide',
			isResting: 'is-resting',
			isSelected: 'is-selected',
			isLoading: 'is-loading',
			hasThumbs: 'has-thumbs',
		},
		minCount: 2,
		parentEl: null,
		thumbTpl:
			'<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',
		type: 'modern',
	};
	var Bt;
	!(function (t) {
		(t[(t.Init = 0)] = 'Init'),
			(t[(t.Ready = 1)] = 'Ready'),
			(t[(t.Hidden = 2)] = 'Hidden');
	})(Bt || (Bt = {}));
	const Ht = 'isResting',
		Nt = 'thumbWidth',
		_t = 'thumbHeight',
		$t = 'thumbClipWidth';
	let Wt = class extends $ {
		constructor() {
			super(...arguments),
				Object.defineProperty(this, 'type', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: 'modern',
				}),
				Object.defineProperty(this, 'container', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				}),
				Object.defineProperty(this, 'track', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				}),
				Object.defineProperty(this, 'carousel', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				}),
				Object.defineProperty(this, 'thumbWidth', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: 0,
				}),
				Object.defineProperty(this, 'thumbClipWidth', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: 0,
				}),
				Object.defineProperty(this, 'thumbHeight', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: 0,
				}),
				Object.defineProperty(this, 'thumbGap', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: 0,
				}),
				Object.defineProperty(this, 'thumbExtraGap', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: 0,
				}),
				Object.defineProperty(this, 'state', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: Bt.Init,
				});
		}
		get isModern() {
			return 'modern' === this.type;
		}
		onInitSlide(t, e) {
			const i = e.el ? e.el.dataset : void 0;
			i &&
				((e.thumbSrc = i.thumbSrc || e.thumbSrc || ''),
				(e[$t] = parseFloat(i[$t] || '') || e[$t] || 0),
				(e[_t] = parseFloat(i.thumbHeight || '') || e[_t] || 0)),
				this.addSlide(e);
		}
		onInitSlides() {
			this.build();
		}
		onChange() {
			var t;
			if (!this.isModern) return;
			const e = this.container,
				i = this.instance,
				n = i.panzoom,
				s = this.carousel,
				o = s ? s.panzoom : null,
				r = i.page;
			if (n && s && o) {
				if (n.isDragging) {
					P(e, this.cn(Ht));
					let n =
						(null === (t = s.pages[r]) || void 0 === t ? void 0 : t.pos) || 0;
					n += i.getProgress(r) * (this[$t] + this.thumbGap);
					let a = o.getBounds();
					-1 * n > a.x.min &&
						-1 * n < a.x.max &&
						o.panTo({ x: -1 * n, friction: 0.12 });
				} else a(e, this.cn(Ht), n.isResting);
				this.shiftModern();
			}
		}
		onRefresh() {
			this.updateProps();
			for (const t of this.instance.slides || []) this.resizeModernSlide(t);
			this.shiftModern();
		}
		isDisabled() {
			const t = this.option('minCount') || 0;
			if (t) {
				const e = this.instance;
				let i = 0;
				for (const t of e.slides || []) t.thumbSrc && i++;
				if (i < t) return !0;
			}
			const e = this.option('type');
			return ['modern', 'classic'].indexOf(e) < 0;
		}
		getThumb(t) {
			const e = this.option('thumbTpl') || '';
			return {
				html: this.instance.localize(e, [
					['%i', t.index],
					['%d', t.index + 1],
					[
						'%s',
						t.thumbSrc ||
							'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
					],
				]),
			};
		}
		addSlide(t) {
			const e = this.carousel;
			e && e.addSlide(t.index, this.getThumb(t));
		}
		getSlides() {
			const t = [];
			for (const e of this.instance.slides || []) t.push(this.getThumb(e));
			return t;
		}
		resizeModernSlide(t) {
			this.isModern &&
				(t[Nt] =
					t[$t] && t[_t] ? Math.round(this[_t] * (t[$t] / t[_t])) : this[Nt]);
		}
		updateProps() {
			const t = this.container;
			if (!t) return;
			const e = (e) =>
				parseFloat(getComputedStyle(t).getPropertyValue('--f-thumb-' + e)) || 0;
			(this.thumbGap = e('gap')),
				(this.thumbExtraGap = e('extra-gap')),
				(this[Nt] = e('width') || 40),
				(this[$t] = e('clip-width') || 40),
				(this[_t] = e('height') || 40);
		}
		build() {
			const t = this;
			if (t.state !== Bt.Init) return;
			if (t.isDisabled()) return void t.emit('disabled');
			const e = t.instance,
				i = e.container,
				n = t.getSlides(),
				s = t.option('type');
			t.type = s;
			const o = t.option('parentEl'),
				a = t.cn('container'),
				r = t.cn('track');
			let l = null == o ? void 0 : o.querySelector('.' + a);
			l ||
				((l = document.createElement('div')),
				C(l, a),
				o ? o.appendChild(l) : i.after(l)),
				C(l, `is-${s}`),
				C(i, t.cn('hasThumbs')),
				(t.container = l),
				t.updateProps();
			let c = l.querySelector('.' + r);
			c ||
				((c = document.createElement('div')),
				C(c, t.cn('track')),
				l.appendChild(c)),
				(t.track = c);
			const h = p(
					{},
					{
						track: c,
						infinite: !1,
						center: !0,
						fill: 'classic' === s,
						dragFree: !0,
						slidesPerPage: 1,
						transition: !1,
						preload: 0.25,
						friction: 0.12,
						Panzoom: { maxVelocity: 0 },
						Dots: !1,
						Navigation: !1,
						classes: {
							container: 'f-thumbs',
							viewport: 'f-thumbs__viewport',
							track: 'f-thumbs__track',
							slide: 'f-thumbs__slide',
						},
					},
					t.option('Carousel') || {},
					{ Sync: { target: e }, slides: n }
				),
				d = new e.constructor(l, h);
			d.on('createSlide', (e, i) => {
				t.setProps(i.index), t.emit('createSlide', i, i.el);
			}),
				d.on('ready', () => {
					t.shiftModern(), t.emit('ready');
				}),
				d.on('refresh', () => {
					t.shiftModern();
				}),
				d.on('Panzoom.click', (e, i, n) => {
					t.onClick(n);
				}),
				(t.carousel = d),
				(t.state = Bt.Ready);
		}
		onClick(t) {
			t.preventDefault(), t.stopPropagation();
			const e = this.instance,
				{ pages: i, page: n } = e,
				s = (t) => {
					if (t) {
						const e = t.closest('[data-carousel-index]');
						if (e) return [parseInt(e.dataset.carouselIndex || '', 10) || 0, e];
					}
					return [-1, void 0];
				},
				o = (t, e) => {
					const i = document.elementFromPoint(t, e);
					return i ? s(i) : [-1, void 0];
				};
			let [a, r] = s(t.target);
			if (a > -1) return;
			const l = this[$t],
				c = t.clientX,
				h = t.clientY;
			let [d, u] = o(c - l, h),
				[p, f] = o(c + l, h);
			u && f
				? ((a =
						Math.abs(c - u.getBoundingClientRect().right) <
						Math.abs(c - f.getBoundingClientRect().left)
							? d
							: p),
					a === n && (a = a === d ? p : d))
				: u
					? (a = d)
					: f && (a = p),
				a > -1 && i[a] && e.slideTo(a);
		}
		getShift(t) {
			var e;
			const i = this,
				{ instance: n } = i,
				s = i.carousel;
			if (!n || !s) return 0;
			const o = i[Nt],
				a = i[$t],
				r = i.thumbGap,
				l = i.thumbExtraGap;
			if (!(null === (e = s.slides[t]) || void 0 === e ? void 0 : e.el))
				return 0;
			const c = 0.5 * (o - a),
				h = n.pages.length - 1;
			let d = n.getProgress(0),
				u = n.getProgress(h),
				p = n.getProgress(t, !1, !0),
				f = 0,
				g = c + l + r;
			const m = d < 0 && d > -1,
				v = u > 0 && u < 1;
			return (
				0 === t
					? ((f = g * Math.abs(d)), v && 1 === d && (f -= g * Math.abs(u)))
					: t === h
						? ((f = g * Math.abs(u) * -1),
							m && -1 === u && (f += g * Math.abs(d)))
						: m || v
							? ((f = -1 * g),
								(f += g * Math.abs(d)),
								(f += g * (1 - Math.abs(u))))
							: (f = g * p),
				f
			);
		}
		setProps(t) {
			var i;
			const n = this;
			if (!n.isModern) return;
			const { instance: s } = n,
				o = n.carousel;
			if (s && o) {
				const a = null === (i = o.slides[t]) || void 0 === i ? void 0 : i.el;
				if (a && a.childNodes.length) {
					let i = e(1 - Math.abs(s.getProgress(t))),
						o = e(n.getShift(t));
					a.style.setProperty('--progress', i ? i + '' : ''),
						a.style.setProperty('--shift', o + '');
				}
			}
		}
		shiftModern() {
			const t = this;
			if (!t.isModern) return;
			const { instance: e, track: i } = t,
				n = e.panzoom,
				s = t.carousel;
			if (!(e && i && n && s)) return;
			if (n.state === v.Init || n.state === v.Destroy) return;
			for (const i of e.slides) t.setProps(i.index);
			let o = (t[$t] + t.thumbGap) * (s.slides.length || 0);
			i.style.setProperty('--width', o + '');
		}
		cleanup() {
			const t = this;
			t.carousel && t.carousel.destroy(),
				(t.carousel = null),
				t.container && t.container.remove(),
				(t.container = null),
				t.track && t.track.remove(),
				(t.track = null),
				(t.state = Bt.Init),
				P(t.instance.container, t.cn('hasThumbs'));
		}
		attach() {
			const t = this,
				e = t.instance;
			e.on('initSlide', t.onInitSlide),
				e.state === H.Init
					? e.on('initSlides', t.onInitSlides)
					: t.onInitSlides(),
				e.on(['change', 'Panzoom.afterTransform'], t.onChange),
				e.on('Panzoom.refresh', t.onRefresh);
		}
		detach() {
			const t = this,
				e = t.instance;
			e.off('initSlide', t.onInitSlide),
				e.off('initSlides', t.onInitSlides),
				e.off(['change', 'Panzoom.afterTransform'], t.onChange),
				e.off('Panzoom.refresh', t.onRefresh),
				t.cleanup();
		}
	};
	Object.defineProperty(Wt, 'defaults', {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: jt,
	});
	const Xt = Object.assign(Object.assign({}, jt), {
			key: 't',
			showOnStart: !0,
			parentEl: null,
		}),
		qt = 'is-masked',
		Yt = 'aria-hidden';
	class Vt extends $ {
		constructor() {
			super(...arguments),
				Object.defineProperty(this, 'ref', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				}),
				Object.defineProperty(this, 'hidden', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: !1,
				});
		}
		get isEnabled() {
			const t = this.ref;
			return t && !t.isDisabled();
		}
		get isHidden() {
			return this.hidden;
		}
		onClick(t, e) {
			e.stopPropagation();
		}
		onCreateSlide(t, e) {
			var i, n, s;
			const o =
					(null ===
						(s =
							null ===
								(n =
									null === (i = this.instance) || void 0 === i
										? void 0
										: i.carousel) || void 0 === n
								? void 0
								: n.slides[e.index]) || void 0 === s
						? void 0
						: s.type) || '',
				a = e.el;
			if (a && o) {
				let t = `for-${o}`;
				['video', 'youtube', 'vimeo', 'html5video'].includes(o) &&
					(t += ' for-video'),
					C(a, t);
			}
		}
		onInit() {
			var t;
			const e = this,
				i = e.instance,
				n = i.carousel;
			if (e.ref || !n) return;
			const s = e.option('parentEl') || i.footer || i.container;
			if (!s) return;
			const o = p({}, e.options, {
				parentEl: s,
				classes: { container: 'f-thumbs fancybox__thumbs' },
				Carousel: { Sync: { friction: i.option('Carousel.friction') || 0 } },
				on: {
					ready: (t) => {
						const i = t.container;
						i &&
							this.hidden &&
							(e.refresh(),
							(i.style.transition = 'none'),
							e.hide(),
							i.offsetHeight,
							queueMicrotask(() => {
								(i.style.transition = ''), e.show();
							}));
					},
				},
			});
			(o.Carousel = o.Carousel || {}),
				(o.Carousel.on = p(
					(null === (t = e.options.Carousel) || void 0 === t ? void 0 : t.on) ||
						{},
					{ click: this.onClick, createSlide: this.onCreateSlide }
				)),
				(n.options.Thumbs = o),
				n.attachPlugins({ Thumbs: Wt }),
				(e.ref = n.plugins.Thumbs),
				e.option('showOnStart') || ((e.ref.state = Bt.Hidden), (e.hidden = !0));
		}
		onResize() {
			var t;
			const e = null === (t = this.ref) || void 0 === t ? void 0 : t.container;
			e && (e.style.maxHeight = '');
		}
		onKeydown(t, e) {
			const i = this.option('key');
			i && i === e && this.toggle();
		}
		toggle() {
			const t = this.ref;
			if (t && !t.isDisabled())
				return t.state === Bt.Hidden
					? ((t.state = Bt.Init), void t.build())
					: void (this.hidden ? this.show() : this.hide());
		}
		show() {
			const t = this.ref;
			if (!t || t.isDisabled()) return;
			const e = t.container;
			e &&
				(this.refresh(),
				e.offsetHeight,
				e.removeAttribute(Yt),
				e.classList.remove(qt),
				(this.hidden = !1));
		}
		hide() {
			const t = this.ref,
				e = t && t.container;
			e &&
				(this.refresh(),
				e.offsetHeight,
				e.classList.add(qt),
				e.setAttribute(Yt, 'true')),
				(this.hidden = !0);
		}
		refresh() {
			const t = this.ref;
			if (!t || !t.state) return;
			const e = t.container,
				i = (null == e ? void 0 : e.firstChild) || null;
			e &&
				i &&
				i.childNodes.length &&
				(e.style.maxHeight = `${i.getBoundingClientRect().height}px`);
		}
		attach() {
			const t = this,
				e = t.instance;
			e.state === lt.Init ? e.on('Carousel.init', t.onInit) : t.onInit(),
				e.on('resize', t.onResize),
				e.on('keydown', t.onKeydown);
		}
		detach() {
			var t;
			const e = this,
				i = e.instance;
			i.off('Carousel.init', e.onInit),
				i.off('resize', e.onResize),
				i.off('keydown', e.onKeydown),
				null === (t = i.carousel) ||
					void 0 === t ||
					t.detachPlugins(['Thumbs']),
				(e.ref = null);
		}
	}
	Object.defineProperty(Vt, 'defaults', {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: Xt,
	});
	const Zt = {
		panLeft: {
			icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',
			change: { panX: -100 },
		},
		panRight: {
			icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',
			change: { panX: 100 },
		},
		panUp: {
			icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',
			change: { panY: -100 },
		},
		panDown: {
			icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',
			change: { panY: 100 },
		},
		zoomIn: {
			icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',
			action: 'zoomIn',
		},
		zoomOut: {
			icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
			action: 'zoomOut',
		},
		toggle1to1: {
			icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',
			action: 'toggleZoom',
		},
		toggleZoom: {
			icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
			action: 'toggleZoom',
		},
		iterateZoom: {
			icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
			action: 'iterateZoom',
		},
		rotateCCW: {
			icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',
			action: 'rotateCCW',
		},
		rotateCW: {
			icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',
			action: 'rotateCW',
		},
		flipX: {
			icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',
			action: 'flipX',
		},
		flipY: {
			icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',
			action: 'flipY',
		},
		fitX: {
			icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',
			action: 'fitX',
		},
		fitY: {
			icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',
			action: 'fitY',
		},
		reset: {
			icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',
			action: 'reset',
		},
		toggleFS: {
			icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',
			action: 'toggleFS',
		},
	};
	var Ut;
	!(function (t) {
		(t[(t.Init = 0)] = 'Init'),
			(t[(t.Ready = 1)] = 'Ready'),
			(t[(t.Disabled = 2)] = 'Disabled');
	})(Ut || (Ut = {}));
	const Gt = {
			absolute: 'auto',
			display: {
				left: ['infobar'],
				middle: [],
				right: ['iterateZoom', 'slideshow', 'fullscreen', 'thumbs', 'close'],
			},
			enabled: 'auto',
			items: {
				infobar: {
					tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>',
				},
				download: {
					tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>',
				},
				prev: {
					tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>',
				},
				next: {
					tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>',
				},
				slideshow: {
					tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>',
				},
				fullscreen: {
					tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>',
				},
				thumbs: {
					tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>',
				},
				close: {
					tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>',
				},
			},
			parentEl: null,
		},
		Kt = {
			tabindex: '-1',
			width: '24',
			height: '24',
			viewBox: '0 0 24 24',
			xmlns: 'http://www.w3.org/2000/svg',
		},
		Jt = 'has-toolbar',
		Qt = 'fancybox__toolbar';
	class te extends $ {
		constructor() {
			super(...arguments),
				Object.defineProperty(this, 'state', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: Ut.Init,
				}),
				Object.defineProperty(this, 'container', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				});
		}
		onReady(t) {
			var e;
			if (!t.carousel) return;
			let i = this.option('display'),
				n = this.option('absolute'),
				s = this.option('enabled');
			if ('auto' === s) {
				const t = this.instance.carousel;
				let e = 0;
				if (t)
					for (const i of t.slides) (i.panzoom || 'image' === i.type) && e++;
				e || (s = !1);
			}
			s || (i = void 0);
			let o = 0;
			const a = { left: [], middle: [], right: [] };
			if (i)
				for (const t of ['left', 'middle', 'right'])
					for (const n of i[t]) {
						const i = this.createEl(n);
						i && (null === (e = a[t]) || void 0 === e || e.push(i), o++);
					}
			let r = null;
			if ((o && (r = this.createContainer()), r)) {
				for (const [t, e] of Object.entries(a)) {
					const i = document.createElement('div');
					C(i, Qt + '__column is-' + t);
					for (const t of e) i.appendChild(t);
					'auto' !== n || 'middle' !== t || e.length || (n = !0),
						r.appendChild(i);
				}
				!0 === n && C(r, 'is-absolute'),
					(this.state = Ut.Ready),
					this.onRefresh();
			} else this.state = Ut.Disabled;
		}
		onClick(t) {
			var e, i;
			const n = this.instance,
				s = n.getSlide(),
				o = null == s ? void 0 : s.panzoom,
				a = t.target,
				r = a && S(a) ? a.dataset : null;
			if (!r) return;
			if (void 0 !== r.fancyboxToggleThumbs)
				return (
					t.preventDefault(),
					t.stopPropagation(),
					void (null === (e = n.plugins.Thumbs) || void 0 === e || e.toggle())
				);
			if (void 0 !== r.fancyboxToggleFullscreen)
				return (
					t.preventDefault(),
					t.stopPropagation(),
					void this.instance.toggleFullscreen()
				);
			if (void 0 !== r.fancyboxToggleSlideshow) {
				t.preventDefault(), t.stopPropagation();
				const e =
					null === (i = n.carousel) || void 0 === i
						? void 0
						: i.plugins.Autoplay;
				let s = e.isActive;
				return (
					o && 'mousemove' === o.panMode && !s && o.reset(),
					void (s ? e.stop() : e.start())
				);
			}
			const l = r.panzoomAction,
				c = r.panzoomChange;
			if (((c || l) && (t.preventDefault(), t.stopPropagation()), c)) {
				let t = {};
				try {
					t = JSON.parse(c);
				} catch (t) {}
				o && o.applyChange(t);
			} else l && o && o[l] && o[l]();
		}
		onChange() {
			this.onRefresh();
		}
		onRefresh() {
			if (this.instance.isClosing()) return;
			const t = this.container;
			if (!t) return;
			const e = this.instance.getSlide();
			if (!e || e.state !== ct.Ready) return;
			const i = e && !e.error && e.panzoom;
			for (const e of t.querySelectorAll('[data-panzoom-action]'))
				i
					? (e.removeAttribute('disabled'), e.removeAttribute('tabindex'))
					: (e.setAttribute('disabled', ''), e.setAttribute('tabindex', '-1'));
			let n = i && i.canZoomIn(),
				s = i && i.canZoomOut();
			for (const e of t.querySelectorAll('[data-panzoom-action="zoomIn"]'))
				n
					? (e.removeAttribute('disabled'), e.removeAttribute('tabindex'))
					: (e.setAttribute('disabled', ''), e.setAttribute('tabindex', '-1'));
			for (const e of t.querySelectorAll('[data-panzoom-action="zoomOut"]'))
				s
					? (e.removeAttribute('disabled'), e.removeAttribute('tabindex'))
					: (e.setAttribute('disabled', ''), e.setAttribute('tabindex', '-1'));
			for (const e of t.querySelectorAll(
				'[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]'
			)) {
				s || n
					? (e.removeAttribute('disabled'), e.removeAttribute('tabindex'))
					: (e.setAttribute('disabled', ''), e.setAttribute('tabindex', '-1'));
				const t = e.querySelector('g');
				t && (t.style.display = n ? '' : 'none');
			}
		}
		onDone(t, e) {
			var i;
			null === (i = e.panzoom) ||
				void 0 === i ||
				i.on('afterTransform', () => {
					this.instance.isCurrentSlide(e) && this.onRefresh();
				}),
				this.instance.isCurrentSlide(e) && this.onRefresh();
		}
		createContainer() {
			const t = this.instance.container;
			if (!t) return null;
			const e = this.option('parentEl') || t;
			let i = e.querySelector('.' + Qt);
			return (
				i || ((i = document.createElement('div')), C(i, Qt), e.prepend(i)),
				i.addEventListener('click', this.onClick, { passive: !1, capture: !0 }),
				t && C(t, Jt),
				(this.container = i),
				i
			);
		}
		createEl(t) {
			const e = this.instance,
				i = e.carousel;
			if (!i) return null;
			if ('toggleFS' === t) return null;
			if ('fullscreen' === t && !at()) return null;
			let n = null;
			const o = i.slides.length || 0;
			let a = 0,
				r = 0;
			for (const t of i.slides)
				(t.panzoom || 'image' === t.type) && a++,
					('image' === t.type || t.downloadSrc) && r++;
			if (o < 2 && ['infobar', 'prev', 'next'].includes(t)) return n;
			if (void 0 !== Zt[t] && !a) return null;
			if ('download' === t && !r) return null;
			if ('thumbs' === t) {
				const t = e.plugins.Thumbs;
				if (!t || !t.isEnabled) return null;
			}
			if ('slideshow' === t) {
				if (!i.plugins.Autoplay || o < 2) return null;
			}
			if (void 0 !== Zt[t]) {
				const e = Zt[t];
				(n = document.createElement('button')),
					n.setAttribute(
						'title',
						this.instance.localize(`{{${t.toUpperCase()}}}`)
					),
					C(n, 'f-button'),
					e.action && (n.dataset.panzoomAction = e.action),
					e.change && (n.dataset.panzoomChange = JSON.stringify(e.change)),
					n.appendChild(s(this.instance.localize(e.icon)));
			} else {
				const e = (this.option('items') || [])[t];
				e &&
					((n = s(this.instance.localize(e.tpl))),
					'function' == typeof e.click &&
						n.addEventListener('click', (t) => {
							t.preventDefault(),
								t.stopPropagation(),
								'function' == typeof e.click && e.click.call(this, this, t);
						}));
			}
			const l = null == n ? void 0 : n.querySelector('svg');
			if (l)
				for (const [t, e] of Object.entries(Kt))
					l.getAttribute(t) || l.setAttribute(t, String(e));
			return n;
		}
		removeContainer() {
			const t = this.container;
			t && t.remove(), (this.container = null), (this.state = Ut.Disabled);
			const e = this.instance.container;
			e && P(e, Jt);
		}
		attach() {
			const t = this,
				e = t.instance;
			e.on('Carousel.initSlides', t.onReady),
				e.on('done', t.onDone),
				e.on(['reveal', 'Carousel.change'], t.onChange),
				t.onReady(t.instance);
		}
		detach() {
			const t = this,
				e = t.instance;
			e.off('Carousel.initSlides', t.onReady),
				e.off('done', t.onDone),
				e.off(['reveal', 'Carousel.change'], t.onChange),
				t.removeContainer();
		}
	}
	Object.defineProperty(te, 'defaults', {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: Gt,
	});
	const ee = {
			Hash: class extends $ {
				onReady() {
					dt = !1;
				}
				onChange(t) {
					pt && clearTimeout(pt);
					const { hash: e } = ft(),
						{ hash: i } = gt(),
						n = t.isOpeningSlide(t.getSlide());
					n && (ht = i === e ? '' : i),
						e &&
							e !== i &&
							(pt = setTimeout(() => {
								try {
									if (t.state === lt.Ready) {
										let t = 'replaceState';
										n && !ut && ((t = 'pushState'), (ut = !0)),
											window.history[t](
												{},
												document.title,
												window.location.pathname + window.location.search + e
											);
									}
								} catch (t) {}
							}, 300));
				}
				onClose(t) {
					if ((pt && clearTimeout(pt), !dt && ut))
						return (ut = !1), (dt = !1), void window.history.back();
					if (!dt)
						try {
							window.history.replaceState(
								{},
								document.title,
								window.location.pathname + window.location.search + (ht || '')
							);
						} catch (t) {}
				}
				attach() {
					const t = this.instance;
					t.on('ready', this.onReady),
						t.on(['Carousel.ready', 'Carousel.change'], this.onChange),
						t.on('close', this.onClose);
				}
				detach() {
					const t = this.instance;
					t.off('ready', this.onReady),
						t.off(['Carousel.ready', 'Carousel.change'], this.onChange),
						t.off('close', this.onClose);
				}
				static parseURL() {
					return gt();
				}
				static startFromUrl() {
					mt();
				}
				static destroy() {
					window.removeEventListener('hashchange', bt, !1);
				}
			},
			Html: zt,
			Images: xt,
			Slideshow: Ft,
			Thumbs: Vt,
			Toolbar: te,
		},
		ie = 'with-fancybox',
		ne = 'hide-scrollbar',
		se = '--fancybox-scrollbar-compensate',
		oe = '--fancybox-body-margin',
		ae = 'aria-hidden',
		re = 'is-using-tab',
		le = 'is-animated',
		ce = 'is-compact',
		he = 'is-loading',
		de = 'is-opening',
		ue = 'has-caption',
		pe = 'disabled',
		fe = 'tabindex',
		ge = 'download',
		me = 'href',
		ve = 'src',
		be = (t) => 'string' == typeof t,
		ye = function () {
			var t = window.getSelection();
			return !!t && 'Range' === t.type;
		};
	let we,
		xe = null,
		Ee = null,
		Se = 0,
		Pe = 0,
		Ce = 0,
		Te = 0;
	const Me = new Map();
	let Oe = 0;
	class Ae extends m {
		get isIdle() {
			return this.idle;
		}
		get isCompact() {
			return this.option('compact');
		}
		constructor(t = [], e = {}, i = {}) {
			super(e),
				Object.defineProperty(this, 'userSlides', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: [],
				}),
				Object.defineProperty(this, 'userPlugins', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: {},
				}),
				Object.defineProperty(this, 'idle', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: !1,
				}),
				Object.defineProperty(this, 'idleTimer', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				}),
				Object.defineProperty(this, 'clickTimer', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				}),
				Object.defineProperty(this, 'pwt', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: 0,
				}),
				Object.defineProperty(this, 'ignoreFocusChange', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: !1,
				}),
				Object.defineProperty(this, 'startedFs', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: !1,
				}),
				Object.defineProperty(this, 'state', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: lt.Init,
				}),
				Object.defineProperty(this, 'id', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: 0,
				}),
				Object.defineProperty(this, 'container', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				}),
				Object.defineProperty(this, 'caption', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				}),
				Object.defineProperty(this, 'footer', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				}),
				Object.defineProperty(this, 'carousel', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				}),
				Object.defineProperty(this, 'lastFocus', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: null,
				}),
				Object.defineProperty(this, 'prevMouseMoveEvent', {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: void 0,
				}),
				we || (we = at()),
				(this.id = e.id || ++Oe),
				Me.set(this.id, this),
				(this.userSlides = t),
				(this.userPlugins = i),
				queueMicrotask(() => {
					this.init();
				});
		}
		init() {
			if (this.state === lt.Destroy) return;
			(this.state = lt.Init),
				this.attachPlugins(
					Object.assign(Object.assign({}, Ae.Plugins), this.userPlugins)
				),
				this.emit('init'),
				this.emit('attachPlugins'),
				!0 === this.option('hideScrollbar') &&
					(() => {
						if (!it) return;
						const t = document,
							e = t.body,
							i = t.documentElement;
						if (e.classList.contains(ne)) return;
						let n = window.innerWidth - i.getBoundingClientRect().width;
						const s = parseFloat(window.getComputedStyle(e).marginRight);
						n < 0 && (n = 0),
							i.style.setProperty(se, `${n}px`),
							s && e.style.setProperty(oe, `${s}px`),
							e.classList.add(ne);
					})(),
				this.initLayout(),
				this.scale();
			const t = () => {
				this.initCarousel(this.userSlides),
					(this.state = lt.Ready),
					this.attachEvents(),
					this.emit('ready'),
					setTimeout(() => {
						this.container && this.container.setAttribute(ae, 'false');
					}, 16);
			};
			this.option('Fullscreen.autoStart') && we && !we.isFullscreen()
				? we
						.request()
						.then(() => {
							(this.startedFs = !0), t();
						})
						.catch(() => t())
				: t();
		}
		initLayout() {
			var t, e;
			const i = this.option('parentEl') || document.body,
				n = s(this.localize(this.option('tpl.main') || ''));
			if (n) {
				if (
					(n.setAttribute('id', `fancybox-${this.id}`),
					n.setAttribute('aria-label', this.localize('{{MODAL}}')),
					n.classList.toggle(ce, this.isCompact),
					C(n, this.option('mainClass') || ''),
					C(n, de),
					(this.container = n),
					(this.footer = n.querySelector('.fancybox__footer')),
					i.appendChild(n),
					C(document.documentElement, ie),
					(xe && Ee) ||
						((xe = document.createElement('span')),
						C(xe, 'fancybox-focus-guard'),
						xe.setAttribute(fe, '0'),
						xe.setAttribute(ae, 'true'),
						xe.setAttribute('aria-label', 'Focus guard'),
						(Ee = xe.cloneNode()),
						null === (t = n.parentElement) ||
							void 0 === t ||
							t.insertBefore(xe, n),
						null === (e = n.parentElement) || void 0 === e || e.append(Ee)),
					n.addEventListener('mousedown', (t) => {
						(Se = t.pageX), (Pe = t.pageY), P(n, re);
					}),
					this.option('closeExisting'))
				)
					for (const t of Me.values()) t.id !== this.id && t.close();
				else
					this.option('animated') &&
						(C(n, le),
						setTimeout(() => {
							this.isClosing() || P(n, le);
						}, 350));
				this.emit('initLayout');
			}
		}
		initCarousel(t) {
			const e = this.container;
			if (!e) return;
			const n = e.querySelector('.fancybox__carousel');
			if (!n) return;
			const s = (this.carousel = new tt(
				n,
				p(
					{},
					{
						slides: t,
						transition: 'fade',
						Panzoom: {
							lockAxis: this.option('dragToClose') ? 'xy' : 'x',
							infinite: !!this.option('dragToClose') && 'y',
						},
						Dots: !1,
						Navigation: {
							classes: {
								container: 'fancybox__nav',
								button: 'f-button',
								isNext: 'is-next',
								isPrev: 'is-prev',
							},
						},
						initialPage: this.option('startIndex'),
						l10n: this.option('l10n'),
					},
					this.option('Carousel') || {}
				)
			));
			s.on('*', (t, e, ...i) => {
				this.emit(`Carousel.${e}`, t, ...i);
			}),
				s.on(['ready', 'change'], () => {
					this.manageCaption();
				}),
				this.on('Carousel.removeSlide', (t, e, i) => {
					this.clearContent(i), (i.state = void 0);
				}),
				s.on('Panzoom.touchStart', () => {
					var t, e;
					this.isCompact || this.endIdle(),
						(null === (t = document.activeElement) || void 0 === t
							? void 0
							: t.closest('.f-thumbs')) &&
							(null === (e = this.container) || void 0 === e || e.focus());
				}),
				s.on('settle', () => {
					this.idleTimer ||
						this.isCompact ||
						!this.option('idle') ||
						this.setIdle(),
						this.option('autoFocus') && !this.isClosing && this.checkFocus();
				}),
				this.option('dragToClose') &&
					(s.on('Panzoom.afterTransform', (t, e) => {
						const n = this.getSlide();
						if (n && i(n.el)) return;
						const s = this.container;
						if (s) {
							const t = Math.abs(e.current.f),
								i =
									t < 1
										? ''
										: Math.max(
												0.5,
												Math.min(1, 1 - (t / e.contentRect.fitHeight) * 1.5)
											);
							s.style.setProperty('--fancybox-ts', i ? '0s' : ''),
								s.style.setProperty('--fancybox-opacity', i + '');
						}
					}),
					s.on('Panzoom.touchEnd', (t, e, n) => {
						var s;
						const o = this.getSlide();
						if (o && i(o.el)) return;
						if (
							e.isMobile &&
							document.activeElement &&
							-1 !==
								['TEXTAREA', 'INPUT'].indexOf(
									null === (s = document.activeElement) || void 0 === s
										? void 0
										: s.nodeName
								)
						)
							return;
						const a = Math.abs(e.dragOffset.y);
						'y' === e.lockedAxis &&
							(a >= 200 || (a >= 50 && e.dragOffset.time < 300)) &&
							(n && n.cancelable && n.preventDefault(),
							this.close(n, 'f-throwOut' + (e.current.f < 0 ? 'Up' : 'Down')));
					})),
				s.on('change', (t) => {
					var e;
					let i =
						null === (e = this.getSlide()) || void 0 === e
							? void 0
							: e.triggerEl;
					if (i) {
						const e = new CustomEvent('slideTo', {
							bubbles: !0,
							cancelable: !0,
							detail: t.page,
						});
						i.dispatchEvent(e);
					}
				}),
				s.on(['refresh', 'change'], (t) => {
					const e = this.container;
					if (!e) return;
					for (const i of e.querySelectorAll('[data-fancybox-current-index]'))
						i.innerHTML = t.page + 1;
					for (const i of e.querySelectorAll('[data-fancybox-count]'))
						i.innerHTML = t.pages.length;
					if (!t.isInfinite) {
						for (const i of e.querySelectorAll('[data-fancybox-next]'))
							t.page < t.pages.length - 1
								? (i.removeAttribute(pe), i.removeAttribute(fe))
								: (i.setAttribute(pe, ''), i.setAttribute(fe, '-1'));
						for (const i of e.querySelectorAll('[data-fancybox-prev]'))
							t.page > 0
								? (i.removeAttribute(pe), i.removeAttribute(fe))
								: (i.setAttribute(pe, ''), i.setAttribute(fe, '-1'));
					}
					const i = this.getSlide();
					if (!i) return;
					let n = i.downloadSrc || '';
					n || 'image' !== i.type || i.error || !be(i[ve]) || (n = i[ve]);
					for (const t of e.querySelectorAll('[data-fancybox-download]')) {
						const e = i.downloadFilename;
						n
							? (t.removeAttribute(pe),
								t.removeAttribute(fe),
								t.setAttribute(me, n),
								t.setAttribute(ge, e || n),
								t.setAttribute('target', '_blank'))
							: (t.setAttribute(pe, ''),
								t.setAttribute(fe, '-1'),
								t.removeAttribute(me),
								t.removeAttribute(ge));
					}
				}),
				this.emit('initCarousel');
		}
		attachEvents() {
			const t = this,
				e = t.container;
			if (!e) return;
			e.addEventListener('click', t.onClick, { passive: !1, capture: !1 }),
				e.addEventListener('wheel', t.onWheel, { passive: !1, capture: !1 }),
				document.addEventListener('keydown', t.onKeydown, {
					passive: !1,
					capture: !0,
				}),
				document.addEventListener('visibilitychange', t.onVisibilityChange, !1),
				document.addEventListener('mousemove', t.onMousemove),
				t.option('trapFocus') &&
					document.addEventListener('focus', t.onFocus, !0),
				window.addEventListener('resize', t.onResize);
			const i = window.visualViewport;
			i &&
				(i.addEventListener('scroll', t.onResize),
				i.addEventListener('resize', t.onResize));
		}
		detachEvents() {
			const t = this,
				e = t.container;
			if (!e) return;
			document.removeEventListener('keydown', t.onKeydown, {
				passive: !1,
				capture: !0,
			}),
				e.removeEventListener('wheel', t.onWheel, { passive: !1, capture: !1 }),
				e.removeEventListener('click', t.onClick, { passive: !1, capture: !1 }),
				document.removeEventListener('mousemove', t.onMousemove),
				window.removeEventListener('resize', t.onResize);
			const i = window.visualViewport;
			i &&
				(i.removeEventListener('resize', t.onResize),
				i.removeEventListener('scroll', t.onResize)),
				document.removeEventListener(
					'visibilitychange',
					t.onVisibilityChange,
					!1
				),
				document.removeEventListener('focus', t.onFocus, !0);
		}
		scale() {
			const t = this.container;
			if (!t) return;
			const e = window.visualViewport,
				i = Math.max(1, (null == e ? void 0 : e.scale) || 1);
			let n = '',
				s = '',
				o = '';
			if (e && i > 1) {
				let t = `${e.offsetLeft}px`,
					a = `${e.offsetTop}px`;
				(n = e.width * i + 'px'),
					(s = e.height * i + 'px'),
					(o = `translate3d(${t}, ${a}, 0) scale(${1 / i})`);
			}
			(t.style.transform = o), (t.style.width = n), (t.style.height = s);
		}
		onClick(t) {
			var e;
			const { container: i, isCompact: n } = this;
			if (!i || this.isClosing()) return;
			!n && this.option('idle') && this.resetIdle();
			const s = t.composedPath()[0];
			if (s.closest('.fancybox-spinner') || s.closest('[data-fancybox-close]'))
				return t.preventDefault(), void this.close(t);
			if (s.closest('[data-fancybox-prev]'))
				return t.preventDefault(), void this.prev();
			if (s.closest('[data-fancybox-next]'))
				return t.preventDefault(), void this.next();
			if ('click' === t.type && 0 === t.detail) return;
			if (Math.abs(t.pageX - Se) > 30 || Math.abs(t.pageY - Pe) > 30) return;
			const o = document.activeElement;
			if (ye() && o && i.contains(o)) return;
			if (
				n &&
				'image' ===
					(null === (e = this.getSlide()) || void 0 === e ? void 0 : e.type)
			)
				return void (this.clickTimer
					? (clearTimeout(this.clickTimer), (this.clickTimer = null))
					: (this.clickTimer = setTimeout(() => {
							this.toggleIdle(), (this.clickTimer = null);
						}, 350)));
			if ((this.emit('click', t), t.defaultPrevented)) return;
			let a = !1;
			if (s.closest('.fancybox__content')) {
				if (o) {
					if (o.closest('[contenteditable]')) return;
					s.matches(st) || o.blur();
				}
				if (ye()) return;
				a = this.option('contentClick');
			} else
				s.closest('.fancybox__carousel') &&
					!s.matches(st) &&
					(a = this.option('backdropClick'));
			'close' === a
				? (t.preventDefault(), this.close(t))
				: 'next' === a
					? (t.preventDefault(), this.next())
					: 'prev' === a && (t.preventDefault(), this.prev());
		}
		onWheel(t) {
			const e = t.target;
			let i = this.option('wheel', t);
			e.closest('.fancybox__thumbs') && (i = 'slide');
			const s = 'slide' === i,
				o = [-t.deltaX || 0, -t.deltaY || 0, -t.detail || 0].reduce(
					function (t, e) {
						return Math.abs(e) > Math.abs(t) ? e : t;
					}
				),
				a = Math.max(-1, Math.min(1, o)),
				r = Date.now();
			this.pwt && r - this.pwt < 300
				? s && t.preventDefault()
				: ((this.pwt = r),
					this.emit('wheel', t, a),
					t.defaultPrevented ||
						('close' === i
							? (t.preventDefault(), this.close(t))
							: 'slide' === i &&
								(n(e) ||
									(t.preventDefault(), this[a > 0 ? 'prev' : 'next']()))));
		}
		onScroll() {
			window.scrollTo(Ce, Te);
		}
		onKeydown(t) {
			if (!this.isTopmost()) return;
			this.isCompact ||
				!this.option('idle') ||
				this.isClosing() ||
				this.resetIdle();
			const e = t.key,
				i = this.option('keyboard');
			if (!i) return;
			const n = t.composedPath()[0],
				s = document.activeElement && document.activeElement.classList,
				o =
					(s && s.contains('f-button')) ||
					n.dataset.carouselPage ||
					n.dataset.carouselIndex;
			if ('Escape' !== e && !o && S(n)) {
				if (
					n.isContentEditable ||
					-1 !==
						['TEXTAREA', 'OPTION', 'INPUT', 'SELECT', 'VIDEO'].indexOf(
							n.nodeName
						)
				)
					return;
			}
			if (
				('Tab' === t.key ? C(this.container, re) : P(this.container, re),
				t.ctrlKey || t.altKey || t.shiftKey)
			)
				return;
			this.emit('keydown', e, t);
			const a = i[e];
			a && 'function' == typeof this[a] && (t.preventDefault(), this[a]());
		}
		onResize() {
			const t = this.container;
			if (!t) return;
			const e = this.isCompact;
			t.classList.toggle(ce, e),
				this.manageCaption(this.getSlide()),
				this.isCompact ? this.clearIdle() : this.endIdle(),
				this.scale(),
				this.emit('resize');
		}
		onFocus(t) {
			this.isTopmost() && this.checkFocus(t);
		}
		onMousemove(t) {
			(this.prevMouseMoveEvent = t),
				!this.isCompact && this.option('idle') && this.resetIdle();
		}
		onVisibilityChange() {
			'visible' === document.visibilityState
				? this.checkFocus()
				: this.endIdle();
		}
		manageCloseBtn(t) {
			const e = this.optionFor(t, 'closeButton') || !1;
			if ('auto' === e) {
				const t = this.plugins.Toolbar;
				if (t && t.state === Ut.Ready) return;
			}
			if (!e) return;
			if (!t.contentEl || t.closeBtnEl) return;
			const i = this.option('tpl.closeButton');
			if (i) {
				const e = s(this.localize(i));
				(t.closeBtnEl = t.contentEl.appendChild(e)),
					t.el && C(t.el, 'has-close-btn');
			}
		}
		manageCaption(t = void 0) {
			var e, i;
			const n = 'fancybox__caption',
				s = this.container;
			if (!s) return;
			P(s, ue);
			const o = this.isCompact || this.option('commonCaption'),
				a = !o;
			if (
				(this.caption && this.stop(this.caption),
				a && this.caption && (this.caption.remove(), (this.caption = null)),
				o && !this.caption)
			)
				for (const t of (null === (e = this.carousel) || void 0 === e
					? void 0
					: e.slides) || [])
					t.captionEl &&
						(t.captionEl.remove(),
						(t.captionEl = void 0),
						P(t.el, ue),
						null === (i = t.el) ||
							void 0 === i ||
							i.removeAttribute('aria-labelledby'));
			if ((t || (t = this.getSlide()), !t || (o && !this.isCurrentSlide(t))))
				return;
			const r = t.el;
			let l = this.optionFor(t, 'caption', '');
			if (!l)
				return void (
					o &&
					this.caption &&
					this.animate(this.caption, 'f-fadeOut', () => {
						this.caption && (this.caption.innerHTML = '');
					})
				);
			let c = null;
			if (a) {
				if (((c = t.captionEl || null), r && !c)) {
					const e = n + `_${this.id}_${t.index}`;
					(c = document.createElement('div')),
						C(c, n),
						c.setAttribute('id', e),
						(t.captionEl = r.appendChild(c)),
						C(r, ue),
						r.setAttribute('aria-labelledby', e);
				}
			} else {
				if (((c = this.caption), c || (c = s.querySelector('.' + n)), !c)) {
					(c = document.createElement('div')),
						(c.dataset.fancyboxCaption = ''),
						C(c, n);
					(this.footer || s).prepend(c);
				}
				C(s, ue), (this.caption = c);
			}
			c &&
				((c.innerHTML = ''),
				be(l) || 'number' == typeof l
					? (c.innerHTML = l + '')
					: l instanceof HTMLElement && c.appendChild(l));
		}
		checkFocus(t) {
			this.focus(t);
		}
		focus(t) {
			var e;
			if (this.ignoreFocusChange) return;
			const i = document.activeElement || null,
				n = (null == t ? void 0 : t.target) || null,
				s = this.container,
				o = null === (e = this.carousel) || void 0 === e ? void 0 : e.viewport;
			if (!s || !o) return;
			if (!t && i && s.contains(i)) return;
			const a = this.getSlide(),
				r = a && a.state === ct.Ready ? a.el : null;
			if (!r || r.contains(i) || s === i) return;
			t && t.cancelable && t.preventDefault(), (this.ignoreFocusChange = !0);
			const l = Array.from(s.querySelectorAll(st));
			let c = [],
				h = null;
			for (let t of l) {
				const e = !t.offsetParent || !!t.closest('[aria-hidden="true"]'),
					i = r && r.contains(t),
					n = !o.contains(t);
				if (t === s || ((i || n) && !e)) {
					c.push(t);
					const e = t.dataset.origTabindex;
					void 0 !== e && e && (t.tabIndex = parseFloat(e)),
						t.removeAttribute('data-orig-tabindex'),
						(!t.hasAttribute('autoFocus') && h) || (h = t);
				} else {
					const e =
						void 0 === t.dataset.origTabindex
							? t.getAttribute('tabindex') || ''
							: t.dataset.origTabindex;
					e && (t.dataset.origTabindex = e), (t.tabIndex = -1);
				}
			}
			let d = null;
			t
				? (!n || c.indexOf(n) < 0) &&
					((d = h || s),
					c.length &&
						(i === Ee
							? (d = c[0])
							: (this.lastFocus !== s && i !== xe) || (d = c[c.length - 1])))
				: (d = a && 'image' === a.type ? s : h || s),
				d && ot(d),
				(this.lastFocus = document.activeElement),
				(this.ignoreFocusChange = !1);
		}
		next() {
			const t = this.carousel;
			t && t.pages.length > 1 && t.slideNext();
		}
		prev() {
			const t = this.carousel;
			t && t.pages.length > 1 && t.slidePrev();
		}
		jumpTo(...t) {
			this.carousel && this.carousel.slideTo(...t);
		}
		isTopmost() {
			var t;
			return (
				(null === (t = Ae.getInstance()) || void 0 === t ? void 0 : t.id) ==
				this.id
			);
		}
		animate(t = null, e = '', i) {
			if (!t || !e) return void (i && i());
			this.stop(t);
			const n = (s) => {
				s.target === t &&
					t.dataset.animationName &&
					(t.removeEventListener('animationend', n),
					delete t.dataset.animationName,
					i && i(),
					P(t, e));
			};
			(t.dataset.animationName = e),
				t.addEventListener('animationend', n),
				C(t, e);
		}
		stop(t) {
			t &&
				t.dispatchEvent(
					new CustomEvent('animationend', {
						bubbles: !1,
						cancelable: !0,
						currentTarget: t,
					})
				);
		}
		setContent(t, e = '', i = !0) {
			if (this.isClosing()) return;
			const n = t.el;
			if (!n) return;
			let o = null;
			if (
				(S(e)
					? (o = e)
					: ((o = s(e + '')),
						S(o) ||
							((o = document.createElement('div')), (o.innerHTML = e + ''))),
				['img', 'picture', 'iframe', 'video', 'audio'].includes(
					o.nodeName.toLowerCase()
				))
			) {
				const t = document.createElement('div');
				t.appendChild(o), (o = t);
			}
			S(o) && t.filter && !t.error && (o = o.querySelector(t.filter)),
				o && S(o)
					? (C(o, 'fancybox__content'),
						t.id && o.setAttribute('id', t.id),
						n.classList.add(`has-${t.error ? 'error' : t.type || 'unknown'}`),
						n.prepend(o),
						'none' === o.style.display && (o.style.display = ''),
						'none' === getComputedStyle(o).getPropertyValue('display') &&
							(o.style.display =
								t.display || this.option('defaultDisplay') || 'flex'),
						(t.contentEl = o),
						i && this.revealContent(t),
						this.manageCloseBtn(t),
						this.manageCaption(t))
					: this.setError(t, '{{ELEMENT_NOT_FOUND}}');
		}
		revealContent(t, e) {
			const i = t.el,
				n = t.contentEl;
			i &&
				n &&
				(this.emit('reveal', t),
				this.hideLoading(t),
				(t.state = ct.Opening),
				(e = this.isOpeningSlide(t)
					? void 0 === e
						? this.optionFor(t, 'showClass')
						: e
					: 'f-fadeIn')
					? this.animate(n, e, () => {
							this.done(t);
						})
					: this.done(t));
		}
		done(t) {
			this.isClosing() ||
				((t.state = ct.Ready),
				this.emit('done', t),
				C(t.el, 'is-done'),
				this.isCurrentSlide(t) &&
					this.option('autoFocus') &&
					queueMicrotask(() => {
						var e;
						null === (e = t.panzoom) || void 0 === e || e.updateControls(),
							this.option('autoFocus') && this.focus();
					}),
				this.isOpeningSlide(t) &&
					(P(this.container, de),
					!this.isCompact && this.option('idle') && this.setIdle()));
		}
		isCurrentSlide(t) {
			const e = this.getSlide();
			return !(!t || !e) && e.index === t.index;
		}
		isOpeningSlide(t) {
			var e, i;
			return (
				null ===
					(null === (e = this.carousel) || void 0 === e
						? void 0
						: e.prevPage) &&
				t &&
				t.index ===
					(null === (i = this.getSlide()) || void 0 === i ? void 0 : i.index)
			);
		}
		showLoading(t) {
			t.state = ct.Loading;
			const e = t.el;
			if (!e) return;
			C(e, he),
				this.emit('loading', t),
				t.spinnerEl ||
					setTimeout(() => {
						if (!this.isClosing() && !t.spinnerEl && t.state === ct.Loading) {
							let i = s(E);
							C(i, 'fancybox-spinner'),
								(t.spinnerEl = i),
								e.prepend(i),
								this.animate(i, 'f-fadeIn');
						}
					}, 250);
		}
		hideLoading(t) {
			const e = t.el;
			if (!e) return;
			const i = t.spinnerEl;
			this.isClosing()
				? null == i || i.remove()
				: (P(e, he),
					i &&
						this.animate(i, 'f-fadeOut', () => {
							i.remove();
						}),
					t.state === ct.Loading &&
						(this.emit('loaded', t), (t.state = ct.Ready)));
		}
		setError(t, e) {
			if (this.isClosing()) return;
			const i = new Event('error', { bubbles: !0, cancelable: !0 });
			if ((this.emit('error', i, t), i.defaultPrevented)) return;
			(t.error = e), this.hideLoading(t), this.clearContent(t);
			const n = document.createElement('div');
			n.classList.add('fancybox-error'),
				(n.innerHTML = this.localize(e || '<p>{{ERROR}}</p>')),
				this.setContent(t, n);
		}
		clearContent(t) {
			if (void 0 === t.state) return;
			this.emit('clearContent', t),
				t.contentEl && (t.contentEl.remove(), (t.contentEl = void 0));
			const e = t.el;
			e &&
				(P(e, 'has-error'),
				P(e, 'has-unknown'),
				P(e, `has-${t.type || 'unknown'}`)),
				t.closeBtnEl && t.closeBtnEl.remove(),
				(t.closeBtnEl = void 0),
				t.captionEl && t.captionEl.remove(),
				(t.captionEl = void 0),
				t.spinnerEl && t.spinnerEl.remove(),
				(t.spinnerEl = void 0);
		}
		getSlide() {
			var t;
			const e = this.carousel;
			return (
				(null ===
					(t = null == e ? void 0 : e.pages[null == e ? void 0 : e.page]) ||
				void 0 === t
					? void 0
					: t.slides[0]) || void 0
			);
		}
		close(t, e) {
			if (this.isClosing()) return;
			const i = new Event('shouldClose', { bubbles: !0, cancelable: !0 });
			if ((this.emit('shouldClose', i, t), i.defaultPrevented)) return;
			t && t.cancelable && (t.preventDefault(), t.stopPropagation());
			const n = () => {
				this.proceedClose(t, e);
			};
			this.startedFs && we && we.isFullscreen()
				? Promise.resolve(we.exit()).then(() => n())
				: n();
		}
		clearIdle() {
			this.idleTimer && clearTimeout(this.idleTimer), (this.idleTimer = null);
		}
		setIdle(t = !1) {
			const e = () => {
				this.clearIdle(),
					(this.idle = !0),
					C(this.container, 'is-idle'),
					this.emit('setIdle');
			};
			if ((this.clearIdle(), !this.isClosing()))
				if (t) e();
				else {
					const t = this.option('idle');
					t && (this.idleTimer = setTimeout(e, t));
				}
		}
		endIdle() {
			this.clearIdle(),
				this.idle &&
					!this.isClosing() &&
					((this.idle = !1),
					P(this.container, 'is-idle'),
					this.emit('endIdle'));
		}
		resetIdle() {
			this.endIdle(), this.setIdle();
		}
		toggleIdle() {
			this.idle ? this.endIdle() : this.setIdle(!0);
		}
		toggleFullscreen() {
			we &&
				(we.isFullscreen()
					? we.exit()
					: we.request().then(() => {
							this.startedFs = !0;
						}));
		}
		isClosing() {
			return [lt.Closing, lt.CustomClosing, lt.Destroy].includes(this.state);
		}
		proceedClose(t, e) {
			var i, n;
			(this.state = lt.Closing), this.clearIdle(), this.detachEvents();
			const s = this.container,
				o = this.carousel,
				a = this.getSlide(),
				r =
					a && this.option('placeFocusBack')
						? a.triggerEl || this.option('triggerEl')
						: null;
			if (
				(r && (et(r) ? ot(r) : r.focus()),
				s &&
					(P(s, de),
					C(s, 'is-closing'),
					s.setAttribute(ae, 'true'),
					this.option('animated') && C(s, le),
					(s.style.pointerEvents = 'none')),
				o)
			) {
				o.clearTransitions(),
					null === (i = o.panzoom) || void 0 === i || i.destroy(),
					null === (n = o.plugins.Navigation) || void 0 === n || n.detach();
				for (const t of o.slides) {
					(t.state = ct.Closing), this.hideLoading(t);
					const e = t.contentEl;
					e && this.stop(e);
					const i = null == t ? void 0 : t.panzoom;
					i && (i.stop(), i.detachEvents(), i.detachObserver()),
						this.isCurrentSlide(t) || o.emit('removeSlide', t);
				}
			}
			(Ce = window.scrollX),
				(Te = window.scrollY),
				window.addEventListener('scroll', this.onScroll),
				this.emit('close', t),
				this.state !== lt.CustomClosing
					? (void 0 === e && a && (e = this.optionFor(a, 'hideClass')),
						e && a
							? (this.animate(a.contentEl, e, () => {
									o && o.emit('removeSlide', a);
								}),
								setTimeout(() => {
									this.destroy();
								}, 500))
							: this.destroy())
					: setTimeout(() => {
							this.destroy();
						}, 500);
		}
		destroy() {
			var t;
			if (this.state === lt.Destroy) return;
			window.removeEventListener('scroll', this.onScroll),
				(this.state = lt.Destroy),
				null === (t = this.carousel) || void 0 === t || t.destroy();
			const e = this.container;
			e && e.remove(), Me.delete(this.id);
			const i = Ae.getInstance();
			i
				? i.focus()
				: (xe && (xe.remove(), (xe = null)),
					Ee && (Ee.remove(), (Ee = null)),
					P(document.documentElement, ie),
					(() => {
						if (!it) return;
						const t = document,
							e = t.body;
						e.classList.remove(ne),
							e.style.setProperty(oe, ''),
							t.documentElement.style.setProperty(se, '');
					})(),
					this.emit('destroy'));
		}
		static bind(t, e, i) {
			if (!it) return;
			let n,
				s = '',
				o = {};
			if (
				(void 0 === t
					? (n = document.body)
					: be(t)
						? ((n = document.body),
							(s = t),
							'object' == typeof e && (o = e || {}))
						: ((n = t),
							be(e) && (s = e),
							'object' == typeof i && (o = i || {})),
				!n || !S(n))
			)
				return;
			s = s || '[data-fancybox]';
			const a = Ae.openers.get(n) || new Map();
			a.set(s, o),
				Ae.openers.set(n, a),
				1 === a.size && n.addEventListener('click', Ae.fromEvent);
		}
		static unbind(t, e) {
			let i,
				n = '';
			if (
				(be(t) ? ((i = document.body), (n = t)) : ((i = t), be(e) && (n = e)),
				!i)
			)
				return;
			const s = Ae.openers.get(i);
			s && n && s.delete(n),
				(n && s) ||
					(Ae.openers.delete(i), i.removeEventListener('click', Ae.fromEvent));
		}
		static destroy() {
			let t;
			for (; (t = Ae.getInstance()); ) t.destroy();
			for (const t of Ae.openers.keys())
				t.removeEventListener('click', Ae.fromEvent);
			Ae.openers = new Map();
		}
		static fromEvent(t) {
			if (t.defaultPrevented) return;
			if (t.button && 0 !== t.button) return;
			if (t.ctrlKey || t.metaKey || t.shiftKey) return;
			let e = t.composedPath()[0];
			const i = e.closest('[data-fancybox-trigger]');
			if (i) {
				const t = i.dataset.fancyboxTrigger || '',
					n = document.querySelectorAll(`[data-fancybox="${t}"]`),
					s = parseInt(i.dataset.fancyboxIndex || '', 10) || 0;
				e = n[s] || e;
			}
			if (!(e && e instanceof Element)) return;
			let n, s, o, a;
			if (
				([...Ae.openers].reverse().find(
					([t, i]) =>
						!(
							!t.contains(e) ||
							![...i].reverse().find(([i, r]) => {
								let l = e.closest(i);
								return !!l && ((n = t), (s = i), (o = l), (a = r), !0);
							})
						)
				),
				!n || !s || !o)
			)
				return;
			(a = a || {}), t.preventDefault(), (e = o);
			let r = [],
				l = p({}, rt, a);
			(l.event = t), (l.triggerEl = e), (l.delegate = i);
			const c = l.groupAll,
				h = l.groupAttr,
				d = h && e ? e.getAttribute(`${h}`) : '';
			if (
				((!e || d || c) && (r = [].slice.call(n.querySelectorAll(s))),
				e &&
					!c &&
					(r = d ? r.filter((t) => t.getAttribute(`${h}`) === d) : [e]),
				!r.length)
			)
				return;
			const u = Ae.getInstance();
			return u && u.options.triggerEl && r.indexOf(u.options.triggerEl) > -1
				? void 0
				: (e && (l.startIndex = r.indexOf(e)), Ae.fromNodes(r, l));
		}
		static fromSelector(t, e, i) {
			let n = null,
				s = '',
				o = {};
			if (
				(be(t)
					? ((n = document.body),
						(s = t),
						'object' == typeof e && (o = e || {}))
					: t instanceof HTMLElement &&
						be(e) &&
						((n = t), (s = e), 'object' == typeof i && (o = i || {})),
				!n || !s)
			)
				return !1;
			const a = Ae.openers.get(n);
			return (
				!!a &&
				((o = p({}, a.get(s) || {}, o)),
				!!o && Ae.fromNodes(Array.from(n.querySelectorAll(s)), o))
			);
		}
		static fromNodes(t, e) {
			e = p({}, rt, e || {});
			const i = [];
			for (const n of t) {
				const t = n.dataset || {},
					s =
						t[ve] ||
						n.getAttribute(me) ||
						n.getAttribute('currentSrc') ||
						n.getAttribute(ve) ||
						void 0;
				let o;
				const a = e.delegate;
				let r;
				a &&
					i.length === e.startIndex &&
					(o =
						a instanceof HTMLImageElement
							? a
							: a.querySelector('img:not([aria-hidden])')),
					o ||
						(o =
							n instanceof HTMLImageElement
								? n
								: n.querySelector('img:not([aria-hidden])')),
					o &&
						((r = o.currentSrc || o[ve] || void 0),
						!r &&
							o.dataset &&
							(r = o.dataset.lazySrc || o.dataset[ve] || void 0));
				const l = {
					src: s,
					triggerEl: n,
					thumbEl: o,
					thumbElSrc: r,
					thumbSrc: r,
				};
				for (const e in t) {
					let i = t[e] + '';
					(i = 'false' !== i && ('true' === i || i)), (l[e] = i);
				}
				i.push(l);
			}
			return new Ae(i, e);
		}
		static getInstance(t) {
			if (t) return Me.get(t);
			return (
				Array.from(Me.values())
					.reverse()
					.find((t) => !t.isClosing() && t) || null
			);
		}
		static getSlide() {
			var t;
			return (
				(null === (t = Ae.getInstance()) || void 0 === t
					? void 0
					: t.getSlide()) || null
			);
		}
		static show(t = [], e = {}) {
			return new Ae(t, e);
		}
		static next() {
			const t = Ae.getInstance();
			t && t.next();
		}
		static prev() {
			const t = Ae.getInstance();
			t && t.prev();
		}
		static close(t = !0, ...e) {
			if (t) for (const t of Me.values()) t.close(...e);
			else {
				const t = Ae.getInstance();
				t && t.close(...e);
			}
		}
	}
	Object.defineProperty(Ae, 'version', {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: '5.0.36',
	}),
		Object.defineProperty(Ae, 'defaults', {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: rt,
		}),
		Object.defineProperty(Ae, 'Plugins', {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: ee,
		}),
		Object.defineProperty(Ae, 'openers', {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: new Map(),
		}),
		(t.Carousel = tt),
		(t.Fancybox = Ae),
		(t.Panzoom = D);
});
/* flatpickr v4.6.13,, @license MIT */
!(function (e, n) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = n())
		: 'function' == typeof define && define.amd
			? define(n)
			: ((e =
					'undefined' != typeof globalThis ? globalThis : e || self).flatpickr =
					n());
})(this, function () {
	'use strict';
	var e = function () {
		return (e =
			Object.assign ||
			function (e) {
				for (var n, t = 1, a = arguments.length; t < a; t++)
					for (var i in (n = arguments[t]))
						Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
				return e;
			}).apply(this, arguments);
	};
	function n() {
		for (var e = 0, n = 0, t = arguments.length; n < t; n++)
			e += arguments[n].length;
		var a = Array(e),
			i = 0;
		for (n = 0; n < t; n++)
			for (var o = arguments[n], r = 0, l = o.length; r < l; r++, i++)
				a[i] = o[r];
		return a;
	}
	var t = [
			'onChange',
			'onClose',
			'onDayCreate',
			'onDestroy',
			'onKeyDown',
			'onMonthChange',
			'onOpen',
			'onParseConfig',
			'onReady',
			'onValueUpdate',
			'onYearChange',
			'onPreCalendarPosition',
		],
		a = {
			_disable: [],
			allowInput: !1,
			allowInvalidPreload: !1,
			altFormat: 'F j, Y',
			altInput: !1,
			altInputClass: 'form-control input',
			animate:
				'object' == typeof window &&
				-1 === window.navigator.userAgent.indexOf('MSIE'),
			ariaDateFormat: 'F j, Y',
			autoFillDefaultTime: !0,
			clickOpens: !0,
			closeOnSelect: !0,
			conjunction: ', ',
			dateFormat: 'Y-m-d',
			defaultHour: 12,
			defaultMinute: 0,
			defaultSeconds: 0,
			disable: [],
			disableMobile: !1,
			enableSeconds: !1,
			enableTime: !1,
			errorHandler: function (e) {
				return 'undefined' != typeof console && console.warn(e);
			},
			getWeek: function (e) {
				var n = new Date(e.getTime());
				n.setHours(0, 0, 0, 0),
					n.setDate(n.getDate() + 3 - ((n.getDay() + 6) % 7));
				var t = new Date(n.getFullYear(), 0, 4);
				return (
					1 +
					Math.round(
						((n.getTime() - t.getTime()) / 864e5 - 3 + ((t.getDay() + 6) % 7)) /
							7
					)
				);
			},
			hourIncrement: 1,
			ignoredFocusElements: [],
			inline: !1,
			locale: 'default',
			minuteIncrement: 5,
			mode: 'single',
			monthSelectorType: 'dropdown',
			nextArrow:
				"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
			noCalendar: !1,
			now: new Date(),
			onChange: [],
			onClose: [],
			onDayCreate: [],
			onDestroy: [],
			onKeyDown: [],
			onMonthChange: [],
			onOpen: [],
			onParseConfig: [],
			onReady: [],
			onValueUpdate: [],
			onYearChange: [],
			onPreCalendarPosition: [],
			plugins: [],
			position: 'auto',
			positionElement: void 0,
			prevArrow:
				"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
			shorthandCurrentMonth: !1,
			showMonths: 1,
			static: !1,
			time_24hr: !1,
			weekNumbers: !1,
			wrap: !1,
		},
		i = {
			weekdays: {
				shorthand: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
				longhand: [
					'Sunday',
					'Monday',
					'Tuesday',
					'Wednesday',
					'Thursday',
					'Friday',
					'Saturday',
				],
			},
			months: {
				shorthand: [
					'Jan',
					'Feb',
					'Mar',
					'Apr',
					'May',
					'Jun',
					'Jul',
					'Aug',
					'Sep',
					'Oct',
					'Nov',
					'Dec',
				],
				longhand: [
					'January',
					'February',
					'March',
					'April',
					'May',
					'June',
					'July',
					'August',
					'September',
					'October',
					'November',
					'December',
				],
			},
			daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
			firstDayOfWeek: 0,
			ordinal: function (e) {
				var n = e % 100;
				if (n > 3 && n < 21) return 'th';
				switch (n % 10) {
					case 1:
						return 'st';
					case 2:
						return 'nd';
					case 3:
						return 'rd';
					default:
						return 'th';
				}
			},
			rangeSeparator: ' to ',
			weekAbbreviation: 'Wk',
			scrollTitle: 'Scroll to increment',
			toggleTitle: 'Click to toggle',
			amPM: ['AM', 'PM'],
			yearAriaLabel: 'Year',
			monthAriaLabel: 'Month',
			hourAriaLabel: 'Hour',
			minuteAriaLabel: 'Minute',
			time_24hr: !1,
		},
		o = function (e, n) {
			return void 0 === n && (n = 2), ('000' + e).slice(-1 * n);
		},
		r = function (e) {
			return !0 === e ? 1 : 0;
		};
	function l(e, n) {
		var t;
		return function () {
			var a = this,
				i = arguments;
			clearTimeout(t),
				(t = setTimeout(function () {
					return e.apply(a, i);
				}, n));
		};
	}
	var c = function (e) {
		return e instanceof Array ? e : [e];
	};
	function s(e, n, t) {
		if (!0 === t) return e.classList.add(n);
		e.classList.remove(n);
	}
	function d(e, n, t) {
		var a = window.document.createElement(e);
		return (
			(n = n || ''),
			(t = t || ''),
			(a.className = n),
			void 0 !== t && (a.textContent = t),
			a
		);
	}
	function u(e) {
		for (; e.firstChild; ) e.removeChild(e.firstChild);
	}
	function f(e, n) {
		return n(e) ? e : e.parentNode ? f(e.parentNode, n) : void 0;
	}
	function m(e, n) {
		var t = d('div', 'numInputWrapper'),
			a = d('input', 'numInput ' + e),
			i = d('span', 'arrowUp'),
			o = d('span', 'arrowDown');
		if (
			(-1 === navigator.userAgent.indexOf('MSIE 9.0')
				? (a.type = 'number')
				: ((a.type = 'text'), (a.pattern = '\\d*')),
			void 0 !== n)
		)
			for (var r in n) a.setAttribute(r, n[r]);
		return t.appendChild(a), t.appendChild(i), t.appendChild(o), t;
	}
	function g(e) {
		try {
			return 'function' == typeof e.composedPath
				? e.composedPath()[0]
				: e.target;
		} catch (n) {
			return e.target;
		}
	}
	var p = function () {},
		h = function (e, n, t) {
			return t.months[n ? 'shorthand' : 'longhand'][e];
		},
		v = {
			D: p,
			F: function (e, n, t) {
				e.setMonth(t.months.longhand.indexOf(n));
			},
			G: function (e, n) {
				e.setHours((e.getHours() >= 12 ? 12 : 0) + parseFloat(n));
			},
			H: function (e, n) {
				e.setHours(parseFloat(n));
			},
			J: function (e, n) {
				e.setDate(parseFloat(n));
			},
			K: function (e, n, t) {
				e.setHours(
					(e.getHours() % 12) + 12 * r(new RegExp(t.amPM[1], 'i').test(n))
				);
			},
			M: function (e, n, t) {
				e.setMonth(t.months.shorthand.indexOf(n));
			},
			S: function (e, n) {
				e.setSeconds(parseFloat(n));
			},
			U: function (e, n) {
				return new Date(1e3 * parseFloat(n));
			},
			W: function (e, n, t) {
				var a = parseInt(n),
					i = new Date(e.getFullYear(), 0, 2 + 7 * (a - 1), 0, 0, 0, 0);
				return i.setDate(i.getDate() - i.getDay() + t.firstDayOfWeek), i;
			},
			Y: function (e, n) {
				e.setFullYear(parseFloat(n));
			},
			Z: function (e, n) {
				return new Date(n);
			},
			d: function (e, n) {
				e.setDate(parseFloat(n));
			},
			h: function (e, n) {
				e.setHours((e.getHours() >= 12 ? 12 : 0) + parseFloat(n));
			},
			i: function (e, n) {
				e.setMinutes(parseFloat(n));
			},
			j: function (e, n) {
				e.setDate(parseFloat(n));
			},
			l: p,
			m: function (e, n) {
				e.setMonth(parseFloat(n) - 1);
			},
			n: function (e, n) {
				e.setMonth(parseFloat(n) - 1);
			},
			s: function (e, n) {
				e.setSeconds(parseFloat(n));
			},
			u: function (e, n) {
				return new Date(parseFloat(n));
			},
			w: p,
			y: function (e, n) {
				e.setFullYear(2e3 + parseFloat(n));
			},
		},
		D = {
			D: '',
			F: '',
			G: '(\\d\\d|\\d)',
			H: '(\\d\\d|\\d)',
			J: '(\\d\\d|\\d)\\w+',
			K: '',
			M: '',
			S: '(\\d\\d|\\d)',
			U: '(.+)',
			W: '(\\d\\d|\\d)',
			Y: '(\\d{4})',
			Z: '(.+)',
			d: '(\\d\\d|\\d)',
			h: '(\\d\\d|\\d)',
			i: '(\\d\\d|\\d)',
			j: '(\\d\\d|\\d)',
			l: '',
			m: '(\\d\\d|\\d)',
			n: '(\\d\\d|\\d)',
			s: '(\\d\\d|\\d)',
			u: '(.+)',
			w: '(\\d\\d|\\d)',
			y: '(\\d{2})',
		},
		w = {
			Z: function (e) {
				return e.toISOString();
			},
			D: function (e, n, t) {
				return n.weekdays.shorthand[w.w(e, n, t)];
			},
			F: function (e, n, t) {
				return h(w.n(e, n, t) - 1, !1, n);
			},
			G: function (e, n, t) {
				return o(w.h(e, n, t));
			},
			H: function (e) {
				return o(e.getHours());
			},
			J: function (e, n) {
				return void 0 !== n.ordinal
					? e.getDate() + n.ordinal(e.getDate())
					: e.getDate();
			},
			K: function (e, n) {
				return n.amPM[r(e.getHours() > 11)];
			},
			M: function (e, n) {
				return h(e.getMonth(), !0, n);
			},
			S: function (e) {
				return o(e.getSeconds());
			},
			U: function (e) {
				return e.getTime() / 1e3;
			},
			W: function (e, n, t) {
				return t.getWeek(e);
			},
			Y: function (e) {
				return o(e.getFullYear(), 4);
			},
			d: function (e) {
				return o(e.getDate());
			},
			h: function (e) {
				return e.getHours() % 12 ? e.getHours() % 12 : 12;
			},
			i: function (e) {
				return o(e.getMinutes());
			},
			j: function (e) {
				return e.getDate();
			},
			l: function (e, n) {
				return n.weekdays.longhand[e.getDay()];
			},
			m: function (e) {
				return o(e.getMonth() + 1);
			},
			n: function (e) {
				return e.getMonth() + 1;
			},
			s: function (e) {
				return e.getSeconds();
			},
			u: function (e) {
				return e.getTime();
			},
			w: function (e) {
				return e.getDay();
			},
			y: function (e) {
				return String(e.getFullYear()).substring(2);
			},
		},
		b = function (e) {
			var n = e.config,
				t = void 0 === n ? a : n,
				o = e.l10n,
				r = void 0 === o ? i : o,
				l = e.isMobile,
				c = void 0 !== l && l;
			return function (e, n, a) {
				var i = a || r;
				return void 0 === t.formatDate || c
					? n
							.split('')
							.map(function (n, a, o) {
								return w[n] && '\\' !== o[a - 1]
									? w[n](e, i, t)
									: '\\' !== n
										? n
										: '';
							})
							.join('')
					: t.formatDate(e, n, i);
			};
		},
		C = function (e) {
			var n = e.config,
				t = void 0 === n ? a : n,
				o = e.l10n,
				r = void 0 === o ? i : o;
			return function (e, n, i, o) {
				if (0 === e || e) {
					var l,
						c = o || r,
						s = e;
					if (e instanceof Date) l = new Date(e.getTime());
					else if ('string' != typeof e && void 0 !== e.toFixed)
						l = new Date(e);
					else if ('string' == typeof e) {
						var d = n || (t || a).dateFormat,
							u = String(e).trim();
						if ('today' === u) (l = new Date()), (i = !0);
						else if (t && t.parseDate) l = t.parseDate(e, d);
						else if (/Z$/.test(u) || /GMT$/.test(u)) l = new Date(e);
						else {
							for (
								var f = void 0, m = [], g = 0, p = 0, h = '';
								g < d.length;
								g++
							) {
								var w = d[g],
									b = '\\' === w,
									C = '\\' === d[g - 1] || b;
								if (D[w] && !C) {
									h += D[w];
									var M = new RegExp(h).exec(e);
									M &&
										(f = !0) &&
										m['Y' !== w ? 'push' : 'unshift']({
											fn: v[w],
											val: M[++p],
										});
								} else b || (h += '.');
							}
							(l =
								t && t.noCalendar
									? new Date(new Date().setHours(0, 0, 0, 0))
									: new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)),
								m.forEach(function (e) {
									var n = e.fn,
										t = e.val;
									return (l = n(l, t, c) || l);
								}),
								(l = f ? l : void 0);
						}
					}
					if (l instanceof Date && !isNaN(l.getTime()))
						return !0 === i && l.setHours(0, 0, 0, 0), l;
					t.errorHandler(new Error('Invalid date provided: ' + s));
				}
			};
		};
	function M(e, n, t) {
		return (
			void 0 === t && (t = !0),
			!1 !== t
				? new Date(e.getTime()).setHours(0, 0, 0, 0) -
					new Date(n.getTime()).setHours(0, 0, 0, 0)
				: e.getTime() - n.getTime()
		);
	}
	var y = function (e, n, t) {
			return 3600 * e + 60 * n + t;
		},
		x = 864e5;
	function E(e) {
		var n = e.defaultHour,
			t = e.defaultMinute,
			a = e.defaultSeconds;
		if (void 0 !== e.minDate) {
			var i = e.minDate.getHours(),
				o = e.minDate.getMinutes(),
				r = e.minDate.getSeconds();
			n < i && (n = i),
				n === i && t < o && (t = o),
				n === i && t === o && a < r && (a = e.minDate.getSeconds());
		}
		if (void 0 !== e.maxDate) {
			var l = e.maxDate.getHours(),
				c = e.maxDate.getMinutes();
			(n = Math.min(n, l)) === l && (t = Math.min(c, t)),
				n === l && t === c && (a = e.maxDate.getSeconds());
		}
		return { hours: n, minutes: t, seconds: a };
	}
	'function' != typeof Object.assign &&
		(Object.assign = function (e) {
			for (var n = [], t = 1; t < arguments.length; t++)
				n[t - 1] = arguments[t];
			if (!e) throw TypeError('Cannot convert undefined or null to object');
			for (
				var a = function (n) {
						n &&
							Object.keys(n).forEach(function (t) {
								return (e[t] = n[t]);
							});
					},
					i = 0,
					o = n;
				i < o.length;
				i++
			) {
				var r = o[i];
				a(r);
			}
			return e;
		});
	function k(p, v) {
		var w = { config: e(e({}, a), I.defaultConfig), l10n: i };
		function k() {
			var e;
			return (
				(null === (e = w.calendarContainer) || void 0 === e
					? void 0
					: e.getRootNode()
				).activeElement || document.activeElement
			);
		}
		function T(e) {
			return e.bind(w);
		}
		function S() {
			var e = w.config;
			(!1 === e.weekNumbers && 1 === e.showMonths) ||
				(!0 !== e.noCalendar &&
					window.requestAnimationFrame(function () {
						if (
							(void 0 !== w.calendarContainer &&
								((w.calendarContainer.style.visibility = 'hidden'),
								(w.calendarContainer.style.display = 'block')),
							void 0 !== w.daysContainer)
						) {
							var n = (w.days.offsetWidth + 1) * e.showMonths;
							(w.daysContainer.style.width = n + 'px'),
								(w.calendarContainer.style.width =
									n +
									(void 0 !== w.weekWrapper ? w.weekWrapper.offsetWidth : 0) +
									'px'),
								w.calendarContainer.style.removeProperty('visibility'),
								w.calendarContainer.style.removeProperty('display');
						}
					}));
		}
		function _(e) {
			if (0 === w.selectedDates.length) {
				var n =
						void 0 === w.config.minDate || M(new Date(), w.config.minDate) >= 0
							? new Date()
							: new Date(w.config.minDate.getTime()),
					t = E(w.config);
				n.setHours(t.hours, t.minutes, t.seconds, n.getMilliseconds()),
					(w.selectedDates = [n]),
					(w.latestSelectedDateObj = n);
			}
			void 0 !== e &&
				'blur' !== e.type &&
				(function (e) {
					e.preventDefault();
					var n = 'keydown' === e.type,
						t = g(e),
						a = t;
					void 0 !== w.amPM &&
						t === w.amPM &&
						(w.amPM.textContent =
							w.l10n.amPM[r(w.amPM.textContent === w.l10n.amPM[0])]);
					var i = parseFloat(a.getAttribute('min')),
						l = parseFloat(a.getAttribute('max')),
						c = parseFloat(a.getAttribute('step')),
						s = parseInt(a.value, 10),
						d = e.delta || (n ? (38 === e.which ? 1 : -1) : 0),
						u = s + c * d;
					if (void 0 !== a.value && 2 === a.value.length) {
						var f = a === w.hourElement,
							m = a === w.minuteElement;
						u < i
							? ((u = l + u + r(!f) + (r(f) && r(!w.amPM))),
								m && L(void 0, -1, w.hourElement))
							: u > l &&
								((u = a === w.hourElement ? u - l - r(!w.amPM) : i),
								m && L(void 0, 1, w.hourElement)),
							w.amPM &&
								f &&
								(1 === c ? u + s === 23 : Math.abs(u - s) > c) &&
								(w.amPM.textContent =
									w.l10n.amPM[r(w.amPM.textContent === w.l10n.amPM[0])]),
							(a.value = o(u));
					}
				})(e);
			var a = w._input.value;
			O(), ye(), w._input.value !== a && w._debouncedChange();
		}
		function O() {
			if (void 0 !== w.hourElement && void 0 !== w.minuteElement) {
				var e,
					n,
					t = (parseInt(w.hourElement.value.slice(-2), 10) || 0) % 24,
					a = (parseInt(w.minuteElement.value, 10) || 0) % 60,
					i =
						void 0 !== w.secondElement
							? (parseInt(w.secondElement.value, 10) || 0) % 60
							: 0;
				void 0 !== w.amPM &&
					((e = t),
					(n = w.amPM.textContent),
					(t = (e % 12) + 12 * r(n === w.l10n.amPM[1])));
				var o =
						void 0 !== w.config.minTime ||
						(w.config.minDate &&
							w.minDateHasTime &&
							w.latestSelectedDateObj &&
							0 === M(w.latestSelectedDateObj, w.config.minDate, !0)),
					l =
						void 0 !== w.config.maxTime ||
						(w.config.maxDate &&
							w.maxDateHasTime &&
							w.latestSelectedDateObj &&
							0 === M(w.latestSelectedDateObj, w.config.maxDate, !0));
				if (
					void 0 !== w.config.maxTime &&
					void 0 !== w.config.minTime &&
					w.config.minTime > w.config.maxTime
				) {
					var c = y(
							w.config.minTime.getHours(),
							w.config.minTime.getMinutes(),
							w.config.minTime.getSeconds()
						),
						s = y(
							w.config.maxTime.getHours(),
							w.config.maxTime.getMinutes(),
							w.config.maxTime.getSeconds()
						),
						d = y(t, a, i);
					if (d > s && d < c) {
						var u = (function (e) {
							var n = Math.floor(e / 3600),
								t = (e - 3600 * n) / 60;
							return [n, t, e - 3600 * n - 60 * t];
						})(c);
						(t = u[0]), (a = u[1]), (i = u[2]);
					}
				} else {
					if (l) {
						var f =
							void 0 !== w.config.maxTime ? w.config.maxTime : w.config.maxDate;
						(t = Math.min(t, f.getHours())) === f.getHours() &&
							(a = Math.min(a, f.getMinutes())),
							a === f.getMinutes() && (i = Math.min(i, f.getSeconds()));
					}
					if (o) {
						var m =
							void 0 !== w.config.minTime ? w.config.minTime : w.config.minDate;
						(t = Math.max(t, m.getHours())) === m.getHours() &&
							a < m.getMinutes() &&
							(a = m.getMinutes()),
							a === m.getMinutes() && (i = Math.max(i, m.getSeconds()));
					}
				}
				A(t, a, i);
			}
		}
		function F(e) {
			var n = e || w.latestSelectedDateObj;
			n && n instanceof Date && A(n.getHours(), n.getMinutes(), n.getSeconds());
		}
		function A(e, n, t) {
			void 0 !== w.latestSelectedDateObj &&
				w.latestSelectedDateObj.setHours(e % 24, n, t || 0, 0),
				w.hourElement &&
					w.minuteElement &&
					!w.isMobile &&
					((w.hourElement.value = o(
						w.config.time_24hr ? e : ((12 + e) % 12) + 12 * r(e % 12 == 0)
					)),
					(w.minuteElement.value = o(n)),
					void 0 !== w.amPM && (w.amPM.textContent = w.l10n.amPM[r(e >= 12)]),
					void 0 !== w.secondElement && (w.secondElement.value = o(t)));
		}
		function N(e) {
			var n = g(e),
				t = parseInt(n.value) + (e.delta || 0);
			(t / 1e3 > 1 || ('Enter' === e.key && !/[^\d]/.test(t.toString()))) &&
				ee(t);
		}
		function P(e, n, t, a) {
			return n instanceof Array
				? n.forEach(function (n) {
						return P(e, n, t, a);
					})
				: e instanceof Array
					? e.forEach(function (e) {
							return P(e, n, t, a);
						})
					: (e.addEventListener(n, t, a),
						void w._handlers.push({
							remove: function () {
								return e.removeEventListener(n, t, a);
							},
						}));
		}
		function Y() {
			De('onChange');
		}
		function j(e, n) {
			var t =
					void 0 !== e
						? w.parseDate(e)
						: w.latestSelectedDateObj ||
							(w.config.minDate && w.config.minDate > w.now
								? w.config.minDate
								: w.config.maxDate && w.config.maxDate < w.now
									? w.config.maxDate
									: w.now),
				a = w.currentYear,
				i = w.currentMonth;
			try {
				void 0 !== t &&
					((w.currentYear = t.getFullYear()), (w.currentMonth = t.getMonth()));
			} catch (e) {
				(e.message = 'Invalid date supplied: ' + t), w.config.errorHandler(e);
			}
			n && w.currentYear !== a && (De('onYearChange'), q()),
				!n ||
					(w.currentYear === a && w.currentMonth === i) ||
					De('onMonthChange'),
				w.redraw();
		}
		function H(e) {
			var n = g(e);
			~n.className.indexOf('arrow') &&
				L(e, n.classList.contains('arrowUp') ? 1 : -1);
		}
		function L(e, n, t) {
			var a = e && g(e),
				i = t || (a && a.parentNode && a.parentNode.firstChild),
				o = we('increment');
			(o.delta = n), i && i.dispatchEvent(o);
		}
		function R(e, n, t, a) {
			var i = ne(n, !0),
				o = d('span', e, n.getDate().toString());
			return (
				(o.dateObj = n),
				(o.$i = a),
				o.setAttribute('aria-label', w.formatDate(n, w.config.ariaDateFormat)),
				-1 === e.indexOf('hidden') &&
					0 === M(n, w.now) &&
					((w.todayDateElem = o),
					o.classList.add('today'),
					o.setAttribute('aria-current', 'date')),
				i
					? ((o.tabIndex = -1),
						be(n) &&
							(o.classList.add('selected'),
							(w.selectedDateElem = o),
							'range' === w.config.mode &&
								(s(
									o,
									'startRange',
									w.selectedDates[0] && 0 === M(n, w.selectedDates[0], !0)
								),
								s(
									o,
									'endRange',
									w.selectedDates[1] && 0 === M(n, w.selectedDates[1], !0)
								),
								'nextMonthDay' === e && o.classList.add('inRange'))))
					: o.classList.add('flatpickr-disabled'),
				'range' === w.config.mode &&
					(function (e) {
						return (
							!('range' !== w.config.mode || w.selectedDates.length < 2) &&
							M(e, w.selectedDates[0]) >= 0 &&
							M(e, w.selectedDates[1]) <= 0
						);
					})(n) &&
					!be(n) &&
					o.classList.add('inRange'),
				w.weekNumbers &&
					1 === w.config.showMonths &&
					'prevMonthDay' !== e &&
					a % 7 == 6 &&
					w.weekNumbers.insertAdjacentHTML(
						'beforeend',
						"<span class='flatpickr-day'>" + w.config.getWeek(n) + '</span>'
					),
				De('onDayCreate', o),
				o
			);
		}
		function W(e) {
			e.focus(), 'range' === w.config.mode && oe(e);
		}
		function B(e) {
			for (
				var n = e > 0 ? 0 : w.config.showMonths - 1,
					t = e > 0 ? w.config.showMonths : -1,
					a = n;
				a != t;
				a += e
			)
				for (
					var i = w.daysContainer.children[a],
						o = e > 0 ? 0 : i.children.length - 1,
						r = e > 0 ? i.children.length : -1,
						l = o;
					l != r;
					l += e
				) {
					var c = i.children[l];
					if (-1 === c.className.indexOf('hidden') && ne(c.dateObj)) return c;
				}
		}
		function J(e, n) {
			var t = k(),
				a = te(t || document.body),
				i =
					void 0 !== e
						? e
						: a
							? t
							: void 0 !== w.selectedDateElem && te(w.selectedDateElem)
								? w.selectedDateElem
								: void 0 !== w.todayDateElem && te(w.todayDateElem)
									? w.todayDateElem
									: B(n > 0 ? 1 : -1);
			void 0 === i
				? w._input.focus()
				: a
					? (function (e, n) {
							for (
								var t =
										-1 === e.className.indexOf('Month')
											? e.dateObj.getMonth()
											: w.currentMonth,
									a = n > 0 ? w.config.showMonths : -1,
									i = n > 0 ? 1 : -1,
									o = t - w.currentMonth;
								o != a;
								o += i
							)
								for (
									var r = w.daysContainer.children[o],
										l =
											t - w.currentMonth === o
												? e.$i + n
												: n < 0
													? r.children.length - 1
													: 0,
										c = r.children.length,
										s = l;
									s >= 0 && s < c && s != (n > 0 ? c : -1);
									s += i
								) {
									var d = r.children[s];
									if (
										-1 === d.className.indexOf('hidden') &&
										ne(d.dateObj) &&
										Math.abs(e.$i - s) >= Math.abs(n)
									)
										return W(d);
								}
							w.changeMonth(i), J(B(i), 0);
						})(i, n)
					: W(i);
		}
		function K(e, n) {
			for (
				var t = (new Date(e, n, 1).getDay() - w.l10n.firstDayOfWeek + 7) % 7,
					a = w.utils.getDaysInMonth((n - 1 + 12) % 12, e),
					i = w.utils.getDaysInMonth(n, e),
					o = window.document.createDocumentFragment(),
					r = w.config.showMonths > 1,
					l = r ? 'prevMonthDay hidden' : 'prevMonthDay',
					c = r ? 'nextMonthDay hidden' : 'nextMonthDay',
					s = a + 1 - t,
					u = 0;
				s <= a;
				s++, u++
			)
				o.appendChild(R('flatpickr-day ' + l, new Date(e, n - 1, s), 0, u));
			for (s = 1; s <= i; s++, u++)
				o.appendChild(R('flatpickr-day', new Date(e, n, s), 0, u));
			for (
				var f = i + 1;
				f <= 42 - t && (1 === w.config.showMonths || u % 7 != 0);
				f++, u++
			)
				o.appendChild(R('flatpickr-day ' + c, new Date(e, n + 1, f % i), 0, u));
			var m = d('div', 'dayContainer');
			return m.appendChild(o), m;
		}
		function U() {
			if (void 0 !== w.daysContainer) {
				u(w.daysContainer), w.weekNumbers && u(w.weekNumbers);
				for (
					var e = document.createDocumentFragment(), n = 0;
					n < w.config.showMonths;
					n++
				) {
					var t = new Date(w.currentYear, w.currentMonth, 1);
					t.setMonth(w.currentMonth + n),
						e.appendChild(K(t.getFullYear(), t.getMonth()));
				}
				w.daysContainer.appendChild(e),
					(w.days = w.daysContainer.firstChild),
					'range' === w.config.mode && 1 === w.selectedDates.length && oe();
			}
		}
		function q() {
			if (
				!(w.config.showMonths > 1 || 'dropdown' !== w.config.monthSelectorType)
			) {
				var e = function (e) {
					return (
						!(
							void 0 !== w.config.minDate &&
							w.currentYear === w.config.minDate.getFullYear() &&
							e < w.config.minDate.getMonth()
						) &&
						!(
							void 0 !== w.config.maxDate &&
							w.currentYear === w.config.maxDate.getFullYear() &&
							e > w.config.maxDate.getMonth()
						)
					);
				};
				(w.monthsDropdownContainer.tabIndex = -1),
					(w.monthsDropdownContainer.innerHTML = '');
				for (var n = 0; n < 12; n++)
					if (e(n)) {
						var t = d('option', 'flatpickr-monthDropdown-month');
						(t.value = new Date(w.currentYear, n).getMonth().toString()),
							(t.textContent = h(n, w.config.shorthandCurrentMonth, w.l10n)),
							(t.tabIndex = -1),
							w.currentMonth === n && (t.selected = !0),
							w.monthsDropdownContainer.appendChild(t);
					}
			}
		}
		function $() {
			var e,
				n = d('div', 'flatpickr-month'),
				t = window.document.createDocumentFragment();
			w.config.showMonths > 1 || 'static' === w.config.monthSelectorType
				? (e = d('span', 'cur-month'))
				: ((w.monthsDropdownContainer = d(
						'select',
						'flatpickr-monthDropdown-months'
					)),
					w.monthsDropdownContainer.setAttribute(
						'aria-label',
						w.l10n.monthAriaLabel
					),
					P(w.monthsDropdownContainer, 'change', function (e) {
						var n = g(e),
							t = parseInt(n.value, 10);
						w.changeMonth(t - w.currentMonth), De('onMonthChange');
					}),
					q(),
					(e = w.monthsDropdownContainer));
			var a = m('cur-year', { tabindex: '-1' }),
				i = a.getElementsByTagName('input')[0];
			i.setAttribute('aria-label', w.l10n.yearAriaLabel),
				w.config.minDate &&
					i.setAttribute('min', w.config.minDate.getFullYear().toString()),
				w.config.maxDate &&
					(i.setAttribute('max', w.config.maxDate.getFullYear().toString()),
					(i.disabled =
						!!w.config.minDate &&
						w.config.minDate.getFullYear() === w.config.maxDate.getFullYear()));
			var o = d('div', 'flatpickr-current-month');
			return (
				o.appendChild(e),
				o.appendChild(a),
				t.appendChild(o),
				n.appendChild(t),
				{ container: n, yearElement: i, monthElement: e }
			);
		}
		function V() {
			u(w.monthNav),
				w.monthNav.appendChild(w.prevMonthNav),
				w.config.showMonths && ((w.yearElements = []), (w.monthElements = []));
			for (var e = w.config.showMonths; e--; ) {
				var n = $();
				w.yearElements.push(n.yearElement),
					w.monthElements.push(n.monthElement),
					w.monthNav.appendChild(n.container);
			}
			w.monthNav.appendChild(w.nextMonthNav);
		}
		function z() {
			w.weekdayContainer
				? u(w.weekdayContainer)
				: (w.weekdayContainer = d('div', 'flatpickr-weekdays'));
			for (var e = w.config.showMonths; e--; ) {
				var n = d('div', 'flatpickr-weekdaycontainer');
				w.weekdayContainer.appendChild(n);
			}
			return G(), w.weekdayContainer;
		}
		function G() {
			if (w.weekdayContainer) {
				var e = w.l10n.firstDayOfWeek,
					t = n(w.l10n.weekdays.shorthand);
				e > 0 && e < t.length && (t = n(t.splice(e, t.length), t.splice(0, e)));
				for (var a = w.config.showMonths; a--; )
					w.weekdayContainer.children[a].innerHTML =
						"\n      <span class='flatpickr-weekday'>\n        " +
						t.join("</span><span class='flatpickr-weekday'>") +
						'\n      </span>\n      ';
			}
		}
		function Z(e, n) {
			void 0 === n && (n = !0);
			var t = n ? e : e - w.currentMonth;
			(t < 0 && !0 === w._hidePrevMonthArrow) ||
				(t > 0 && !0 === w._hideNextMonthArrow) ||
				((w.currentMonth += t),
				(w.currentMonth < 0 || w.currentMonth > 11) &&
					((w.currentYear += w.currentMonth > 11 ? 1 : -1),
					(w.currentMonth = (w.currentMonth + 12) % 12),
					De('onYearChange'),
					q()),
				U(),
				De('onMonthChange'),
				Ce());
		}
		function Q(e) {
			return w.calendarContainer.contains(e);
		}
		function X(e) {
			if (w.isOpen && !w.config.inline) {
				var n = g(e),
					t = Q(n),
					a =
						!(
							n === w.input ||
							n === w.altInput ||
							w.element.contains(n) ||
							(e.path &&
								e.path.indexOf &&
								(~e.path.indexOf(w.input) || ~e.path.indexOf(w.altInput)))
						) &&
						!t &&
						!Q(e.relatedTarget),
					i = !w.config.ignoredFocusElements.some(function (e) {
						return e.contains(n);
					});
				a &&
					i &&
					(w.config.allowInput &&
						w.setDate(
							w._input.value,
							!1,
							w.config.altInput ? w.config.altFormat : w.config.dateFormat
						),
					void 0 !== w.timeContainer &&
						void 0 !== w.minuteElement &&
						void 0 !== w.hourElement &&
						'' !== w.input.value &&
						void 0 !== w.input.value &&
						_(),
					w.close(),
					w.config &&
						'range' === w.config.mode &&
						1 === w.selectedDates.length &&
						w.clear(!1));
			}
		}
		function ee(e) {
			if (
				!(
					!e ||
					(w.config.minDate && e < w.config.minDate.getFullYear()) ||
					(w.config.maxDate && e > w.config.maxDate.getFullYear())
				)
			) {
				var n = e,
					t = w.currentYear !== n;
				(w.currentYear = n || w.currentYear),
					w.config.maxDate && w.currentYear === w.config.maxDate.getFullYear()
						? (w.currentMonth = Math.min(
								w.config.maxDate.getMonth(),
								w.currentMonth
							))
						: w.config.minDate &&
							w.currentYear === w.config.minDate.getFullYear() &&
							(w.currentMonth = Math.max(
								w.config.minDate.getMonth(),
								w.currentMonth
							)),
					t && (w.redraw(), De('onYearChange'), q());
			}
		}
		function ne(e, n) {
			var t;
			void 0 === n && (n = !0);
			var a = w.parseDate(e, void 0, n);
			if (
				(w.config.minDate &&
					a &&
					M(a, w.config.minDate, void 0 !== n ? n : !w.minDateHasTime) < 0) ||
				(w.config.maxDate &&
					a &&
					M(a, w.config.maxDate, void 0 !== n ? n : !w.maxDateHasTime) > 0)
			)
				return !1;
			if (!w.config.enable && 0 === w.config.disable.length) return !0;
			if (void 0 === a) return !1;
			for (
				var i = !!w.config.enable,
					o =
						null !== (t = w.config.enable) && void 0 !== t
							? t
							: w.config.disable,
					r = 0,
					l = void 0;
				r < o.length;
				r++
			) {
				if ('function' == typeof (l = o[r]) && l(a)) return i;
				if (l instanceof Date && void 0 !== a && l.getTime() === a.getTime())
					return i;
				if ('string' == typeof l) {
					var c = w.parseDate(l, void 0, !0);
					return c && c.getTime() === a.getTime() ? i : !i;
				}
				if (
					'object' == typeof l &&
					void 0 !== a &&
					l.from &&
					l.to &&
					a.getTime() >= l.from.getTime() &&
					a.getTime() <= l.to.getTime()
				)
					return i;
			}
			return !i;
		}
		function te(e) {
			return (
				void 0 !== w.daysContainer &&
				-1 === e.className.indexOf('hidden') &&
				-1 === e.className.indexOf('flatpickr-disabled') &&
				w.daysContainer.contains(e)
			);
		}
		function ae(e) {
			var n = e.target === w._input,
				t = w._input.value.trimEnd() !== Me();
			!n ||
				!t ||
				(e.relatedTarget && Q(e.relatedTarget)) ||
				w.setDate(
					w._input.value,
					!0,
					e.target === w.altInput ? w.config.altFormat : w.config.dateFormat
				);
		}
		function ie(e) {
			var n = g(e),
				t = w.config.wrap ? p.contains(n) : n === w._input,
				a = w.config.allowInput,
				i = w.isOpen && (!a || !t),
				o = w.config.inline && t && !a;
			if (13 === e.keyCode && t) {
				if (a)
					return (
						w.setDate(
							w._input.value,
							!0,
							n === w.altInput ? w.config.altFormat : w.config.dateFormat
						),
						w.close(),
						n.blur()
					);
				w.open();
			} else if (Q(n) || i || o) {
				var r = !!w.timeContainer && w.timeContainer.contains(n);
				switch (e.keyCode) {
					case 13:
						r ? (e.preventDefault(), _(), fe()) : me(e);
						break;
					case 27:
						e.preventDefault(), fe();
						break;
					case 8:
					case 46:
						t && !w.config.allowInput && (e.preventDefault(), w.clear());
						break;
					case 37:
					case 39:
						if (r || t) w.hourElement && w.hourElement.focus();
						else {
							e.preventDefault();
							var l = k();
							if (void 0 !== w.daysContainer && (!1 === a || (l && te(l)))) {
								var c = 39 === e.keyCode ? 1 : -1;
								e.ctrlKey
									? (e.stopPropagation(), Z(c), J(B(1), 0))
									: J(void 0, c);
							}
						}
						break;
					case 38:
					case 40:
						e.preventDefault();
						var s = 40 === e.keyCode ? 1 : -1;
						(w.daysContainer && void 0 !== n.$i) ||
						n === w.input ||
						n === w.altInput
							? e.ctrlKey
								? (e.stopPropagation(), ee(w.currentYear - s), J(B(1), 0))
								: r || J(void 0, 7 * s)
							: n === w.currentYearElement
								? ee(w.currentYear - s)
								: w.config.enableTime &&
									(!r && w.hourElement && w.hourElement.focus(),
									_(e),
									w._debouncedChange());
						break;
					case 9:
						if (r) {
							var d = [w.hourElement, w.minuteElement, w.secondElement, w.amPM]
									.concat(w.pluginElements)
									.filter(function (e) {
										return e;
									}),
								u = d.indexOf(n);
							if (-1 !== u) {
								var f = d[u + (e.shiftKey ? -1 : 1)];
								e.preventDefault(), (f || w._input).focus();
							}
						} else
							!w.config.noCalendar &&
								w.daysContainer &&
								w.daysContainer.contains(n) &&
								e.shiftKey &&
								(e.preventDefault(), w._input.focus());
				}
			}
			if (void 0 !== w.amPM && n === w.amPM)
				switch (e.key) {
					case w.l10n.amPM[0].charAt(0):
					case w.l10n.amPM[0].charAt(0).toLowerCase():
						(w.amPM.textContent = w.l10n.amPM[0]), O(), ye();
						break;
					case w.l10n.amPM[1].charAt(0):
					case w.l10n.amPM[1].charAt(0).toLowerCase():
						(w.amPM.textContent = w.l10n.amPM[1]), O(), ye();
				}
			(t || Q(n)) && De('onKeyDown', e);
		}
		function oe(e, n) {
			if (
				(void 0 === n && (n = 'flatpickr-day'),
				1 === w.selectedDates.length &&
					(!e ||
						(e.classList.contains(n) &&
							!e.classList.contains('flatpickr-disabled'))))
			) {
				for (
					var t = e
							? e.dateObj.getTime()
							: w.days.firstElementChild.dateObj.getTime(),
						a = w.parseDate(w.selectedDates[0], void 0, !0).getTime(),
						i = Math.min(t, w.selectedDates[0].getTime()),
						o = Math.max(t, w.selectedDates[0].getTime()),
						r = !1,
						l = 0,
						c = 0,
						s = i;
					s < o;
					s += x
				)
					ne(new Date(s), !0) ||
						((r = r || (s > i && s < o)),
						s < a && (!l || s > l)
							? (l = s)
							: s > a && (!c || s < c) && (c = s));
				Array.from(
					w.rContainer.querySelectorAll(
						'*:nth-child(-n+' + w.config.showMonths + ') > .' + n
					)
				).forEach(function (n) {
					var i,
						o,
						s,
						d = n.dateObj.getTime(),
						u = (l > 0 && d < l) || (c > 0 && d > c);
					if (u)
						return (
							n.classList.add('notAllowed'),
							void ['inRange', 'startRange', 'endRange'].forEach(function (e) {
								n.classList.remove(e);
							})
						);
					(r && !u) ||
						(['startRange', 'inRange', 'endRange', 'notAllowed'].forEach(
							function (e) {
								n.classList.remove(e);
							}
						),
						void 0 !== e &&
							(e.classList.add(
								t <= w.selectedDates[0].getTime() ? 'startRange' : 'endRange'
							),
							a < t && d === a
								? n.classList.add('startRange')
								: a > t && d === a && n.classList.add('endRange'),
							d >= l &&
								(0 === c || d <= c) &&
								((o = a),
								(s = t),
								(i = d) > Math.min(o, s) && i < Math.max(o, s)) &&
								n.classList.add('inRange')));
				});
			}
		}
		function re() {
			!w.isOpen || w.config.static || w.config.inline || de();
		}
		function le(e) {
			return function (n) {
				var t = (w.config['_' + e + 'Date'] = w.parseDate(
						n,
						w.config.dateFormat
					)),
					a = w.config['_' + ('min' === e ? 'max' : 'min') + 'Date'];
				void 0 !== t &&
					(w['min' === e ? 'minDateHasTime' : 'maxDateHasTime'] =
						t.getHours() > 0 || t.getMinutes() > 0 || t.getSeconds() > 0),
					w.selectedDates &&
						((w.selectedDates = w.selectedDates.filter(function (e) {
							return ne(e);
						})),
						w.selectedDates.length || 'min' !== e || F(t),
						ye()),
					w.daysContainer &&
						(ue(),
						void 0 !== t
							? (w.currentYearElement[e] = t.getFullYear().toString())
							: w.currentYearElement.removeAttribute(e),
						(w.currentYearElement.disabled =
							!!a && void 0 !== t && a.getFullYear() === t.getFullYear()));
			};
		}
		function ce() {
			return w.config.wrap ? p.querySelector('[data-input]') : p;
		}
		function se() {
			'object' != typeof w.config.locale &&
				void 0 === I.l10ns[w.config.locale] &&
				w.config.errorHandler(
					new Error('flatpickr: invalid locale ' + w.config.locale)
				),
				(w.l10n = e(
					e({}, I.l10ns.default),
					'object' == typeof w.config.locale
						? w.config.locale
						: 'default' !== w.config.locale
							? I.l10ns[w.config.locale]
							: void 0
				)),
				(D.D = '(' + w.l10n.weekdays.shorthand.join('|') + ')'),
				(D.l = '(' + w.l10n.weekdays.longhand.join('|') + ')'),
				(D.M = '(' + w.l10n.months.shorthand.join('|') + ')'),
				(D.F = '(' + w.l10n.months.longhand.join('|') + ')'),
				(D.K =
					'(' +
					w.l10n.amPM[0] +
					'|' +
					w.l10n.amPM[1] +
					'|' +
					w.l10n.amPM[0].toLowerCase() +
					'|' +
					w.l10n.amPM[1].toLowerCase() +
					')'),
				void 0 ===
					e(e({}, v), JSON.parse(JSON.stringify(p.dataset || {}))).time_24hr &&
					void 0 === I.defaultConfig.time_24hr &&
					(w.config.time_24hr = w.l10n.time_24hr),
				(w.formatDate = b(w)),
				(w.parseDate = C({ config: w.config, l10n: w.l10n }));
		}
		function de(e) {
			if ('function' != typeof w.config.position) {
				if (void 0 !== w.calendarContainer) {
					De('onPreCalendarPosition');
					var n = e || w._positionElement,
						t = Array.prototype.reduce.call(
							w.calendarContainer.children,
							function (e, n) {
								return e + n.offsetHeight;
							},
							0
						),
						a = w.calendarContainer.offsetWidth,
						i = w.config.position.split(' '),
						o = i[0],
						r = i.length > 1 ? i[1] : null,
						l = n.getBoundingClientRect(),
						c = window.innerHeight - l.bottom,
						d = 'above' === o || ('below' !== o && c < t && l.top > t),
						u = window.pageYOffset + l.top + (d ? -t - 2 : n.offsetHeight + 2);
					if (
						(s(w.calendarContainer, 'arrowTop', !d),
						s(w.calendarContainer, 'arrowBottom', d),
						!w.config.inline)
					) {
						var f = window.pageXOffset + l.left,
							m = !1,
							g = !1;
						'center' === r
							? ((f -= (a - l.width) / 2), (m = !0))
							: 'right' === r && ((f -= a - l.width), (g = !0)),
							s(w.calendarContainer, 'arrowLeft', !m && !g),
							s(w.calendarContainer, 'arrowCenter', m),
							s(w.calendarContainer, 'arrowRight', g);
						var p =
								window.document.body.offsetWidth -
								(window.pageXOffset + l.right),
							h = f + a > window.document.body.offsetWidth,
							v = p + a > window.document.body.offsetWidth;
						if ((s(w.calendarContainer, 'rightMost', h), !w.config.static))
							if (((w.calendarContainer.style.top = u + 'px'), h))
								if (v) {
									var D = (function () {
										for (
											var e = null, n = 0;
											n < document.styleSheets.length;
											n++
										) {
											var t = document.styleSheets[n];
											if (t.cssRules) {
												try {
													t.cssRules;
												} catch (e) {
													continue;
												}
												e = t;
												break;
											}
										}
										return null != e
											? e
											: ((a = document.createElement('style')),
												document.head.appendChild(a),
												a.sheet);
										var a;
									})();
									if (void 0 === D) return;
									var b = window.document.body.offsetWidth,
										C = Math.max(0, b / 2 - a / 2),
										M = D.cssRules.length,
										y = '{left:' + l.left + 'px;right:auto;}';
									s(w.calendarContainer, 'rightMost', !1),
										s(w.calendarContainer, 'centerMost', !0),
										D.insertRule(
											'.flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after' +
												y,
											M
										),
										(w.calendarContainer.style.left = C + 'px'),
										(w.calendarContainer.style.right = 'auto');
								} else
									(w.calendarContainer.style.left = 'auto'),
										(w.calendarContainer.style.right = p + 'px');
							else
								(w.calendarContainer.style.left = f + 'px'),
									(w.calendarContainer.style.right = 'auto');
					}
				}
			} else w.config.position(w, e);
		}
		function ue() {
			w.config.noCalendar || w.isMobile || (q(), Ce(), U());
		}
		function fe() {
			w._input.focus(),
				-1 !== window.navigator.userAgent.indexOf('MSIE') ||
				void 0 !== navigator.msMaxTouchPoints
					? setTimeout(w.close, 0)
					: w.close();
		}
		function me(e) {
			e.preventDefault(), e.stopPropagation();
			var n = f(g(e), function (e) {
				return (
					e.classList &&
					e.classList.contains('flatpickr-day') &&
					!e.classList.contains('flatpickr-disabled') &&
					!e.classList.contains('notAllowed')
				);
			});
			if (void 0 !== n) {
				var t = n,
					a = (w.latestSelectedDateObj = new Date(t.dateObj.getTime())),
					i =
						(a.getMonth() < w.currentMonth ||
							a.getMonth() > w.currentMonth + w.config.showMonths - 1) &&
						'range' !== w.config.mode;
				if (((w.selectedDateElem = t), 'single' === w.config.mode))
					w.selectedDates = [a];
				else if ('multiple' === w.config.mode) {
					var o = be(a);
					o ? w.selectedDates.splice(parseInt(o), 1) : w.selectedDates.push(a);
				} else
					'range' === w.config.mode &&
						(2 === w.selectedDates.length && w.clear(!1, !1),
						(w.latestSelectedDateObj = a),
						w.selectedDates.push(a),
						0 !== M(a, w.selectedDates[0], !0) &&
							w.selectedDates.sort(function (e, n) {
								return e.getTime() - n.getTime();
							}));
				if ((O(), i)) {
					var r = w.currentYear !== a.getFullYear();
					(w.currentYear = a.getFullYear()),
						(w.currentMonth = a.getMonth()),
						r && (De('onYearChange'), q()),
						De('onMonthChange');
				}
				if (
					(Ce(),
					U(),
					ye(),
					i || 'range' === w.config.mode || 1 !== w.config.showMonths
						? void 0 !== w.selectedDateElem &&
							void 0 === w.hourElement &&
							w.selectedDateElem &&
							w.selectedDateElem.focus()
						: W(t),
					void 0 !== w.hourElement &&
						void 0 !== w.hourElement &&
						w.hourElement.focus(),
					w.config.closeOnSelect)
				) {
					var l = 'single' === w.config.mode && !w.config.enableTime,
						c =
							'range' === w.config.mode &&
							2 === w.selectedDates.length &&
							!w.config.enableTime;
					(l || c) && fe();
				}
				Y();
			}
		}
		(w.parseDate = C({ config: w.config, l10n: w.l10n })),
			(w._handlers = []),
			(w.pluginElements = []),
			(w.loadedPlugins = []),
			(w._bind = P),
			(w._setHoursFromDate = F),
			(w._positionCalendar = de),
			(w.changeMonth = Z),
			(w.changeYear = ee),
			(w.clear = function (e, n) {
				void 0 === e && (e = !0);
				void 0 === n && (n = !0);
				(w.input.value = ''), void 0 !== w.altInput && (w.altInput.value = '');
				void 0 !== w.mobileInput && (w.mobileInput.value = '');
				(w.selectedDates = []),
					(w.latestSelectedDateObj = void 0),
					!0 === n &&
						((w.currentYear = w._initialDate.getFullYear()),
						(w.currentMonth = w._initialDate.getMonth()));
				if (!0 === w.config.enableTime) {
					var t = E(w.config),
						a = t.hours,
						i = t.minutes,
						o = t.seconds;
					A(a, i, o);
				}
				w.redraw(), e && De('onChange');
			}),
			(w.close = function () {
				(w.isOpen = !1),
					w.isMobile ||
						(void 0 !== w.calendarContainer &&
							w.calendarContainer.classList.remove('open'),
						void 0 !== w._input && w._input.classList.remove('active'));
				De('onClose');
			}),
			(w.onMouseOver = oe),
			(w._createElement = d),
			(w.createDay = R),
			(w.destroy = function () {
				void 0 !== w.config && De('onDestroy');
				for (var e = w._handlers.length; e--; ) w._handlers[e].remove();
				if (((w._handlers = []), w.mobileInput))
					w.mobileInput.parentNode &&
						w.mobileInput.parentNode.removeChild(w.mobileInput),
						(w.mobileInput = void 0);
				else if (w.calendarContainer && w.calendarContainer.parentNode)
					if (w.config.static && w.calendarContainer.parentNode) {
						var n = w.calendarContainer.parentNode;
						if ((n.lastChild && n.removeChild(n.lastChild), n.parentNode)) {
							for (; n.firstChild; ) n.parentNode.insertBefore(n.firstChild, n);
							n.parentNode.removeChild(n);
						}
					} else
						w.calendarContainer.parentNode.removeChild(w.calendarContainer);
				w.altInput &&
					((w.input.type = 'text'),
					w.altInput.parentNode &&
						w.altInput.parentNode.removeChild(w.altInput),
					delete w.altInput);
				w.input &&
					((w.input.type = w.input._type),
					w.input.classList.remove('flatpickr-input'),
					w.input.removeAttribute('readonly'));
				[
					'_showTimeInput',
					'latestSelectedDateObj',
					'_hideNextMonthArrow',
					'_hidePrevMonthArrow',
					'__hideNextMonthArrow',
					'__hidePrevMonthArrow',
					'isMobile',
					'isOpen',
					'selectedDateElem',
					'minDateHasTime',
					'maxDateHasTime',
					'days',
					'daysContainer',
					'_input',
					'_positionElement',
					'innerContainer',
					'rContainer',
					'monthNav',
					'todayDateElem',
					'calendarContainer',
					'weekdayContainer',
					'prevMonthNav',
					'nextMonthNav',
					'monthsDropdownContainer',
					'currentMonthElement',
					'currentYearElement',
					'navigationCurrentMonth',
					'selectedDateElem',
					'config',
				].forEach(function (e) {
					try {
						delete w[e];
					} catch (e) {}
				});
			}),
			(w.isEnabled = ne),
			(w.jumpToDate = j),
			(w.updateValue = ye),
			(w.open = function (e, n) {
				void 0 === n && (n = w._positionElement);
				if (!0 === w.isMobile) {
					if (e) {
						e.preventDefault();
						var t = g(e);
						t && t.blur();
					}
					return (
						void 0 !== w.mobileInput &&
							(w.mobileInput.focus(), w.mobileInput.click()),
						void De('onOpen')
					);
				}
				if (w._input.disabled || w.config.inline) return;
				var a = w.isOpen;
				(w.isOpen = !0),
					a ||
						(w.calendarContainer.classList.add('open'),
						w._input.classList.add('active'),
						De('onOpen'),
						de(n));
				!0 === w.config.enableTime &&
					!0 === w.config.noCalendar &&
					(!1 !== w.config.allowInput ||
						(void 0 !== e && w.timeContainer.contains(e.relatedTarget)) ||
						setTimeout(function () {
							return w.hourElement.select();
						}, 50));
			}),
			(w.redraw = ue),
			(w.set = function (e, n) {
				if (null !== e && 'object' == typeof e)
					for (var a in (Object.assign(w.config, e), e))
						void 0 !== ge[a] &&
							ge[a].forEach(function (e) {
								return e();
							});
				else
					(w.config[e] = n),
						void 0 !== ge[e]
							? ge[e].forEach(function (e) {
									return e();
								})
							: t.indexOf(e) > -1 && (w.config[e] = c(n));
				w.redraw(), ye(!0);
			}),
			(w.setDate = function (e, n, t) {
				void 0 === n && (n = !1);
				void 0 === t && (t = w.config.dateFormat);
				if ((0 !== e && !e) || (e instanceof Array && 0 === e.length))
					return w.clear(n);
				pe(e, t),
					(w.latestSelectedDateObj =
						w.selectedDates[w.selectedDates.length - 1]),
					w.redraw(),
					j(void 0, n),
					F(),
					0 === w.selectedDates.length && w.clear(!1);
				ye(n), n && De('onChange');
			}),
			(w.toggle = function (e) {
				if (!0 === w.isOpen) return w.close();
				w.open(e);
			});
		var ge = {
			locale: [se, G],
			showMonths: [V, S, z],
			minDate: [j],
			maxDate: [j],
			positionElement: [ve],
			clickOpens: [
				function () {
					!0 === w.config.clickOpens
						? (P(w._input, 'focus', w.open), P(w._input, 'click', w.open))
						: (w._input.removeEventListener('focus', w.open),
							w._input.removeEventListener('click', w.open));
				},
			],
		};
		function pe(e, n) {
			var t = [];
			if (e instanceof Array)
				t = e.map(function (e) {
					return w.parseDate(e, n);
				});
			else if (e instanceof Date || 'number' == typeof e)
				t = [w.parseDate(e, n)];
			else if ('string' == typeof e)
				switch (w.config.mode) {
					case 'single':
					case 'time':
						t = [w.parseDate(e, n)];
						break;
					case 'multiple':
						t = e.split(w.config.conjunction).map(function (e) {
							return w.parseDate(e, n);
						});
						break;
					case 'range':
						t = e.split(w.l10n.rangeSeparator).map(function (e) {
							return w.parseDate(e, n);
						});
				}
			else
				w.config.errorHandler(
					new Error('Invalid date supplied: ' + JSON.stringify(e))
				);
			(w.selectedDates = w.config.allowInvalidPreload
				? t
				: t.filter(function (e) {
						return e instanceof Date && ne(e, !1);
					})),
				'range' === w.config.mode &&
					w.selectedDates.sort(function (e, n) {
						return e.getTime() - n.getTime();
					});
		}
		function he(e) {
			return e
				.slice()
				.map(function (e) {
					return 'string' == typeof e ||
						'number' == typeof e ||
						e instanceof Date
						? w.parseDate(e, void 0, !0)
						: e && 'object' == typeof e && e.from && e.to
							? {
									from: w.parseDate(e.from, void 0),
									to: w.parseDate(e.to, void 0),
								}
							: e;
				})
				.filter(function (e) {
					return e;
				});
		}
		function ve() {
			w._positionElement = w.config.positionElement || w._input;
		}
		function De(e, n) {
			if (void 0 !== w.config) {
				var t = w.config[e];
				if (void 0 !== t && t.length > 0)
					for (var a = 0; t[a] && a < t.length; a++)
						t[a](w.selectedDates, w.input.value, w, n);
				'onChange' === e &&
					(w.input.dispatchEvent(we('change')),
					w.input.dispatchEvent(we('input')));
			}
		}
		function we(e) {
			var n = document.createEvent('Event');
			return n.initEvent(e, !0, !0), n;
		}
		function be(e) {
			for (var n = 0; n < w.selectedDates.length; n++) {
				var t = w.selectedDates[n];
				if (t instanceof Date && 0 === M(t, e)) return '' + n;
			}
			return !1;
		}
		function Ce() {
			w.config.noCalendar ||
				w.isMobile ||
				!w.monthNav ||
				(w.yearElements.forEach(function (e, n) {
					var t = new Date(w.currentYear, w.currentMonth, 1);
					t.setMonth(w.currentMonth + n),
						w.config.showMonths > 1 || 'static' === w.config.monthSelectorType
							? (w.monthElements[n].textContent =
									h(t.getMonth(), w.config.shorthandCurrentMonth, w.l10n) + ' ')
							: (w.monthsDropdownContainer.value = t.getMonth().toString()),
						(e.value = t.getFullYear().toString());
				}),
				(w._hidePrevMonthArrow =
					void 0 !== w.config.minDate &&
					(w.currentYear === w.config.minDate.getFullYear()
						? w.currentMonth <= w.config.minDate.getMonth()
						: w.currentYear < w.config.minDate.getFullYear())),
				(w._hideNextMonthArrow =
					void 0 !== w.config.maxDate &&
					(w.currentYear === w.config.maxDate.getFullYear()
						? w.currentMonth + 1 > w.config.maxDate.getMonth()
						: w.currentYear > w.config.maxDate.getFullYear())));
		}
		function Me(e) {
			var n =
				e || (w.config.altInput ? w.config.altFormat : w.config.dateFormat);
			return w.selectedDates
				.map(function (e) {
					return w.formatDate(e, n);
				})
				.filter(function (e, n, t) {
					return (
						'range' !== w.config.mode ||
						w.config.enableTime ||
						t.indexOf(e) === n
					);
				})
				.join(
					'range' !== w.config.mode
						? w.config.conjunction
						: w.l10n.rangeSeparator
				);
		}
		function ye(e) {
			void 0 === e && (e = !0),
				void 0 !== w.mobileInput &&
					w.mobileFormatStr &&
					(w.mobileInput.value =
						void 0 !== w.latestSelectedDateObj
							? w.formatDate(w.latestSelectedDateObj, w.mobileFormatStr)
							: ''),
				(w.input.value = Me(w.config.dateFormat)),
				void 0 !== w.altInput && (w.altInput.value = Me(w.config.altFormat)),
				!1 !== e && De('onValueUpdate');
		}
		function xe(e) {
			var n = g(e),
				t = w.prevMonthNav.contains(n),
				a = w.nextMonthNav.contains(n);
			t || a
				? Z(t ? -1 : 1)
				: w.yearElements.indexOf(n) >= 0
					? n.select()
					: n.classList.contains('arrowUp')
						? w.changeYear(w.currentYear + 1)
						: n.classList.contains('arrowDown') &&
							w.changeYear(w.currentYear - 1);
		}
		return (
			(function () {
				(w.element = w.input = p),
					(w.isOpen = !1),
					(function () {
						var n = [
								'wrap',
								'weekNumbers',
								'allowInput',
								'allowInvalidPreload',
								'clickOpens',
								'time_24hr',
								'enableTime',
								'noCalendar',
								'altInput',
								'shorthandCurrentMonth',
								'inline',
								'static',
								'enableSeconds',
								'disableMobile',
							],
							i = e(e({}, JSON.parse(JSON.stringify(p.dataset || {}))), v),
							o = {};
						(w.config.parseDate = i.parseDate),
							(w.config.formatDate = i.formatDate),
							Object.defineProperty(w.config, 'enable', {
								get: function () {
									return w.config._enable;
								},
								set: function (e) {
									w.config._enable = he(e);
								},
							}),
							Object.defineProperty(w.config, 'disable', {
								get: function () {
									return w.config._disable;
								},
								set: function (e) {
									w.config._disable = he(e);
								},
							});
						var r = 'time' === i.mode;
						if (!i.dateFormat && (i.enableTime || r)) {
							var l = I.defaultConfig.dateFormat || a.dateFormat;
							o.dateFormat =
								i.noCalendar || r
									? 'H:i' + (i.enableSeconds ? ':S' : '')
									: l + ' H:i' + (i.enableSeconds ? ':S' : '');
						}
						if (i.altInput && (i.enableTime || r) && !i.altFormat) {
							var s = I.defaultConfig.altFormat || a.altFormat;
							o.altFormat =
								i.noCalendar || r
									? 'h:i' + (i.enableSeconds ? ':S K' : ' K')
									: s + ' h:i' + (i.enableSeconds ? ':S' : '') + ' K';
						}
						Object.defineProperty(w.config, 'minDate', {
							get: function () {
								return w.config._minDate;
							},
							set: le('min'),
						}),
							Object.defineProperty(w.config, 'maxDate', {
								get: function () {
									return w.config._maxDate;
								},
								set: le('max'),
							});
						var d = function (e) {
							return function (n) {
								w.config['min' === e ? '_minTime' : '_maxTime'] = w.parseDate(
									n,
									'H:i:S'
								);
							};
						};
						Object.defineProperty(w.config, 'minTime', {
							get: function () {
								return w.config._minTime;
							},
							set: d('min'),
						}),
							Object.defineProperty(w.config, 'maxTime', {
								get: function () {
									return w.config._maxTime;
								},
								set: d('max'),
							}),
							'time' === i.mode &&
								((w.config.noCalendar = !0), (w.config.enableTime = !0));
						Object.assign(w.config, o, i);
						for (var u = 0; u < n.length; u++)
							w.config[n[u]] =
								!0 === w.config[n[u]] || 'true' === w.config[n[u]];
						t
							.filter(function (e) {
								return void 0 !== w.config[e];
							})
							.forEach(function (e) {
								w.config[e] = c(w.config[e] || []).map(T);
							}),
							(w.isMobile =
								!w.config.disableMobile &&
								!w.config.inline &&
								'single' === w.config.mode &&
								!w.config.disable.length &&
								!w.config.enable &&
								!w.config.weekNumbers &&
								/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
									navigator.userAgent
								));
						for (u = 0; u < w.config.plugins.length; u++) {
							var f = w.config.plugins[u](w) || {};
							for (var m in f)
								t.indexOf(m) > -1
									? (w.config[m] = c(f[m]).map(T).concat(w.config[m]))
									: void 0 === i[m] && (w.config[m] = f[m]);
						}
						i.altInputClass ||
							(w.config.altInputClass =
								ce().className + ' ' + w.config.altInputClass);
						De('onParseConfig');
					})(),
					se(),
					(function () {
						if (((w.input = ce()), !w.input))
							return void w.config.errorHandler(
								new Error('Invalid input element specified')
							);
						(w.input._type = w.input.type),
							(w.input.type = 'text'),
							w.input.classList.add('flatpickr-input'),
							(w._input = w.input),
							w.config.altInput &&
								((w.altInput = d(w.input.nodeName, w.config.altInputClass)),
								(w._input = w.altInput),
								(w.altInput.placeholder = w.input.placeholder),
								(w.altInput.disabled = w.input.disabled),
								(w.altInput.required = w.input.required),
								(w.altInput.tabIndex = w.input.tabIndex),
								(w.altInput.type = 'text'),
								w.input.setAttribute('type', 'hidden'),
								!w.config.static &&
									w.input.parentNode &&
									w.input.parentNode.insertBefore(
										w.altInput,
										w.input.nextSibling
									));
						w.config.allowInput ||
							w._input.setAttribute('readonly', 'readonly');
						ve();
					})(),
					(function () {
						(w.selectedDates = []),
							(w.now = w.parseDate(w.config.now) || new Date());
						var e =
							w.config.defaultDate ||
							(('INPUT' !== w.input.nodeName &&
								'TEXTAREA' !== w.input.nodeName) ||
							!w.input.placeholder ||
							w.input.value !== w.input.placeholder
								? w.input.value
								: null);
						e && pe(e, w.config.dateFormat);
						(w._initialDate =
							w.selectedDates.length > 0
								? w.selectedDates[0]
								: w.config.minDate &&
									  w.config.minDate.getTime() > w.now.getTime()
									? w.config.minDate
									: w.config.maxDate &&
										  w.config.maxDate.getTime() < w.now.getTime()
										? w.config.maxDate
										: w.now),
							(w.currentYear = w._initialDate.getFullYear()),
							(w.currentMonth = w._initialDate.getMonth()),
							w.selectedDates.length > 0 &&
								(w.latestSelectedDateObj = w.selectedDates[0]);
						void 0 !== w.config.minTime &&
							(w.config.minTime = w.parseDate(w.config.minTime, 'H:i'));
						void 0 !== w.config.maxTime &&
							(w.config.maxTime = w.parseDate(w.config.maxTime, 'H:i'));
						(w.minDateHasTime =
							!!w.config.minDate &&
							(w.config.minDate.getHours() > 0 ||
								w.config.minDate.getMinutes() > 0 ||
								w.config.minDate.getSeconds() > 0)),
							(w.maxDateHasTime =
								!!w.config.maxDate &&
								(w.config.maxDate.getHours() > 0 ||
									w.config.maxDate.getMinutes() > 0 ||
									w.config.maxDate.getSeconds() > 0));
					})(),
					(w.utils = {
						getDaysInMonth: function (e, n) {
							return (
								void 0 === e && (e = w.currentMonth),
								void 0 === n && (n = w.currentYear),
								1 === e && ((n % 4 == 0 && n % 100 != 0) || n % 400 == 0)
									? 29
									: w.l10n.daysInMonth[e]
							);
						},
					}),
					w.isMobile ||
						(function () {
							var e = window.document.createDocumentFragment();
							if (
								((w.calendarContainer = d('div', 'flatpickr-calendar')),
								(w.calendarContainer.tabIndex = -1),
								!w.config.noCalendar)
							) {
								if (
									(e.appendChild(
										((w.monthNav = d('div', 'flatpickr-months')),
										(w.yearElements = []),
										(w.monthElements = []),
										(w.prevMonthNav = d('span', 'flatpickr-prev-month')),
										(w.prevMonthNav.innerHTML = w.config.prevArrow),
										(w.nextMonthNav = d('span', 'flatpickr-next-month')),
										(w.nextMonthNav.innerHTML = w.config.nextArrow),
										V(),
										Object.defineProperty(w, '_hidePrevMonthArrow', {
											get: function () {
												return w.__hidePrevMonthArrow;
											},
											set: function (e) {
												w.__hidePrevMonthArrow !== e &&
													(s(w.prevMonthNav, 'flatpickr-disabled', e),
													(w.__hidePrevMonthArrow = e));
											},
										}),
										Object.defineProperty(w, '_hideNextMonthArrow', {
											get: function () {
												return w.__hideNextMonthArrow;
											},
											set: function (e) {
												w.__hideNextMonthArrow !== e &&
													(s(w.nextMonthNav, 'flatpickr-disabled', e),
													(w.__hideNextMonthArrow = e));
											},
										}),
										(w.currentYearElement = w.yearElements[0]),
										Ce(),
										w.monthNav)
									),
									(w.innerContainer = d('div', 'flatpickr-innerContainer')),
									w.config.weekNumbers)
								) {
									var n = (function () {
											w.calendarContainer.classList.add('hasWeeks');
											var e = d('div', 'flatpickr-weekwrapper');
											e.appendChild(
												d('span', 'flatpickr-weekday', w.l10n.weekAbbreviation)
											);
											var n = d('div', 'flatpickr-weeks');
											return (
												e.appendChild(n), { weekWrapper: e, weekNumbers: n }
											);
										})(),
										t = n.weekWrapper,
										a = n.weekNumbers;
									w.innerContainer.appendChild(t),
										(w.weekNumbers = a),
										(w.weekWrapper = t);
								}
								(w.rContainer = d('div', 'flatpickr-rContainer')),
									w.rContainer.appendChild(z()),
									w.daysContainer ||
										((w.daysContainer = d('div', 'flatpickr-days')),
										(w.daysContainer.tabIndex = -1)),
									U(),
									w.rContainer.appendChild(w.daysContainer),
									w.innerContainer.appendChild(w.rContainer),
									e.appendChild(w.innerContainer);
							}
							w.config.enableTime &&
								e.appendChild(
									(function () {
										w.calendarContainer.classList.add('hasTime'),
											w.config.noCalendar &&
												w.calendarContainer.classList.add('noCalendar');
										var e = E(w.config);
										(w.timeContainer = d('div', 'flatpickr-time')),
											(w.timeContainer.tabIndex = -1);
										var n = d('span', 'flatpickr-time-separator', ':'),
											t = m('flatpickr-hour', {
												'aria-label': w.l10n.hourAriaLabel,
											});
										w.hourElement = t.getElementsByTagName('input')[0];
										var a = m('flatpickr-minute', {
											'aria-label': w.l10n.minuteAriaLabel,
										});
										(w.minuteElement = a.getElementsByTagName('input')[0]),
											(w.hourElement.tabIndex = w.minuteElement.tabIndex = -1),
											(w.hourElement.value = o(
												w.latestSelectedDateObj
													? w.latestSelectedDateObj.getHours()
													: w.config.time_24hr
														? e.hours
														: (function (e) {
																switch (e % 24) {
																	case 0:
																	case 12:
																		return 12;
																	default:
																		return e % 12;
																}
															})(e.hours)
											)),
											(w.minuteElement.value = o(
												w.latestSelectedDateObj
													? w.latestSelectedDateObj.getMinutes()
													: e.minutes
											)),
											w.hourElement.setAttribute(
												'step',
												w.config.hourIncrement.toString()
											),
											w.minuteElement.setAttribute(
												'step',
												w.config.minuteIncrement.toString()
											),
											w.hourElement.setAttribute(
												'min',
												w.config.time_24hr ? '0' : '1'
											),
											w.hourElement.setAttribute(
												'max',
												w.config.time_24hr ? '23' : '12'
											),
											w.hourElement.setAttribute('maxlength', '2'),
											w.minuteElement.setAttribute('min', '0'),
											w.minuteElement.setAttribute('max', '59'),
											w.minuteElement.setAttribute('maxlength', '2'),
											w.timeContainer.appendChild(t),
											w.timeContainer.appendChild(n),
											w.timeContainer.appendChild(a),
											w.config.time_24hr &&
												w.timeContainer.classList.add('time24hr');
										if (w.config.enableSeconds) {
											w.timeContainer.classList.add('hasSeconds');
											var i = m('flatpickr-second');
											(w.secondElement = i.getElementsByTagName('input')[0]),
												(w.secondElement.value = o(
													w.latestSelectedDateObj
														? w.latestSelectedDateObj.getSeconds()
														: e.seconds
												)),
												w.secondElement.setAttribute(
													'step',
													w.minuteElement.getAttribute('step')
												),
												w.secondElement.setAttribute('min', '0'),
												w.secondElement.setAttribute('max', '59'),
												w.secondElement.setAttribute('maxlength', '2'),
												w.timeContainer.appendChild(
													d('span', 'flatpickr-time-separator', ':')
												),
												w.timeContainer.appendChild(i);
										}
										w.config.time_24hr ||
											((w.amPM = d(
												'span',
												'flatpickr-am-pm',
												w.l10n.amPM[
													r(
														(w.latestSelectedDateObj
															? w.hourElement.value
															: w.config.defaultHour) > 11
													)
												]
											)),
											(w.amPM.title = w.l10n.toggleTitle),
											(w.amPM.tabIndex = -1),
											w.timeContainer.appendChild(w.amPM));
										return w.timeContainer;
									})()
								);
							s(w.calendarContainer, 'rangeMode', 'range' === w.config.mode),
								s(w.calendarContainer, 'animate', !0 === w.config.animate),
								s(w.calendarContainer, 'multiMonth', w.config.showMonths > 1),
								w.calendarContainer.appendChild(e);
							var i =
								void 0 !== w.config.appendTo &&
								void 0 !== w.config.appendTo.nodeType;
							if (
								(w.config.inline || w.config.static) &&
								(w.calendarContainer.classList.add(
									w.config.inline ? 'inline' : 'static'
								),
								w.config.inline &&
									(!i && w.element.parentNode
										? w.element.parentNode.insertBefore(
												w.calendarContainer,
												w._input.nextSibling
											)
										: void 0 !== w.config.appendTo &&
											w.config.appendTo.appendChild(w.calendarContainer)),
								w.config.static)
							) {
								var l = d('div', 'flatpickr-wrapper');
								w.element.parentNode &&
									w.element.parentNode.insertBefore(l, w.element),
									l.appendChild(w.element),
									w.altInput && l.appendChild(w.altInput),
									l.appendChild(w.calendarContainer);
							}
							w.config.static ||
								w.config.inline ||
								(void 0 !== w.config.appendTo
									? w.config.appendTo
									: window.document.body
								).appendChild(w.calendarContainer);
						})(),
					(function () {
						w.config.wrap &&
							['open', 'close', 'toggle', 'clear'].forEach(function (e) {
								Array.prototype.forEach.call(
									w.element.querySelectorAll('[data-' + e + ']'),
									function (n) {
										return P(n, 'click', w[e]);
									}
								);
							});
						if (w.isMobile)
							return void (function () {
								var e = w.config.enableTime
									? w.config.noCalendar
										? 'time'
										: 'datetime-local'
									: 'date';
								(w.mobileInput = d(
									'input',
									w.input.className + ' flatpickr-mobile'
								)),
									(w.mobileInput.tabIndex = 1),
									(w.mobileInput.type = e),
									(w.mobileInput.disabled = w.input.disabled),
									(w.mobileInput.required = w.input.required),
									(w.mobileInput.placeholder = w.input.placeholder),
									(w.mobileFormatStr =
										'datetime-local' === e
											? 'Y-m-d\\TH:i:S'
											: 'date' === e
												? 'Y-m-d'
												: 'H:i:S'),
									w.selectedDates.length > 0 &&
										(w.mobileInput.defaultValue = w.mobileInput.value =
											w.formatDate(w.selectedDates[0], w.mobileFormatStr));
								w.config.minDate &&
									(w.mobileInput.min = w.formatDate(w.config.minDate, 'Y-m-d'));
								w.config.maxDate &&
									(w.mobileInput.max = w.formatDate(w.config.maxDate, 'Y-m-d'));
								w.input.getAttribute('step') &&
									(w.mobileInput.step = String(w.input.getAttribute('step')));
								(w.input.type = 'hidden'),
									void 0 !== w.altInput && (w.altInput.type = 'hidden');
								try {
									w.input.parentNode &&
										w.input.parentNode.insertBefore(
											w.mobileInput,
											w.input.nextSibling
										);
								} catch (e) {}
								P(w.mobileInput, 'change', function (e) {
									w.setDate(g(e).value, !1, w.mobileFormatStr),
										De('onChange'),
										De('onClose');
								});
							})();
						var e = l(re, 50);
						(w._debouncedChange = l(Y, 300)),
							w.daysContainer &&
								!/iPhone|iPad|iPod/i.test(navigator.userAgent) &&
								P(w.daysContainer, 'mouseover', function (e) {
									'range' === w.config.mode && oe(g(e));
								});
						P(w._input, 'keydown', ie),
							void 0 !== w.calendarContainer &&
								P(w.calendarContainer, 'keydown', ie);
						w.config.inline || w.config.static || P(window, 'resize', e);
						void 0 !== window.ontouchstart
							? P(window.document, 'touchstart', X)
							: P(window.document, 'mousedown', X);
						P(window.document, 'focus', X, { capture: !0 }),
							!0 === w.config.clickOpens &&
								(P(w._input, 'focus', w.open), P(w._input, 'click', w.open));
						void 0 !== w.daysContainer &&
							(P(w.monthNav, 'click', xe),
							P(w.monthNav, ['keyup', 'increment'], N),
							P(w.daysContainer, 'click', me));
						if (
							void 0 !== w.timeContainer &&
							void 0 !== w.minuteElement &&
							void 0 !== w.hourElement
						) {
							var n = function (e) {
								return g(e).select();
							};
							P(w.timeContainer, ['increment'], _),
								P(w.timeContainer, 'blur', _, { capture: !0 }),
								P(w.timeContainer, 'click', H),
								P([w.hourElement, w.minuteElement], ['focus', 'click'], n),
								void 0 !== w.secondElement &&
									P(w.secondElement, 'focus', function () {
										return w.secondElement && w.secondElement.select();
									}),
								void 0 !== w.amPM &&
									P(w.amPM, 'click', function (e) {
										_(e);
									});
						}
						w.config.allowInput && P(w._input, 'blur', ae);
					})(),
					(w.selectedDates.length || w.config.noCalendar) &&
						(w.config.enableTime &&
							F(w.config.noCalendar ? w.latestSelectedDateObj : void 0),
						ye(!1)),
					S();
				var n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
				!w.isMobile && n && de(), De('onReady');
			})(),
			w
		);
	}
	function T(e, n) {
		for (
			var t = Array.prototype.slice.call(e).filter(function (e) {
					return e instanceof HTMLElement;
				}),
				a = [],
				i = 0;
			i < t.length;
			i++
		) {
			var o = t[i];
			try {
				if (null !== o.getAttribute('data-fp-omit')) continue;
				void 0 !== o._flatpickr &&
					(o._flatpickr.destroy(), (o._flatpickr = void 0)),
					(o._flatpickr = k(o, n || {})),
					a.push(o._flatpickr);
			} catch (e) {
				console.error(e);
			}
		}
		return 1 === a.length ? a[0] : a;
	}
	'undefined' != typeof HTMLElement &&
		'undefined' != typeof HTMLCollection &&
		'undefined' != typeof NodeList &&
		((HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr =
			function (e) {
				return T(this, e);
			}),
		(HTMLElement.prototype.flatpickr = function (e) {
			return T([this], e);
		}));
	var I = function (e, n) {
		return 'string' == typeof e
			? T(window.document.querySelectorAll(e), n)
			: e instanceof Node
				? T([e], n)
				: T(e, n);
	};
	return (
		(I.defaultConfig = {}),
		(I.l10ns = { en: e({}, i), default: e({}, i) }),
		(I.localize = function (n) {
			I.l10ns.default = e(e({}, I.l10ns.default), n);
		}),
		(I.setDefaults = function (n) {
			I.defaultConfig = e(e({}, I.defaultConfig), n);
		}),
		(I.parseDate = C({})),
		(I.formatDate = b({})),
		(I.compareDates = M),
		'undefined' != typeof jQuery &&
			void 0 !== jQuery.fn &&
			(jQuery.fn.flatpickr = function (e) {
				return T(this, e);
			}),
		(Date.prototype.fp_incr = function (e) {
			return new Date(
				this.getFullYear(),
				this.getMonth(),
				this.getDate() + ('string' == typeof e ? parseInt(e, 10) : e)
			);
		}),
		'undefined' != typeof window && (window.flatpickr = I),
		I
	);
});
/**
 * Minified by jsDelivr using Terser v5.10.0.
 * Original file: /npm/flatpickr@4.6.13/dist/l10n/ru.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (e, n) {
	'object' == typeof exports && 'undefined' != typeof module
		? n(exports)
		: 'function' == typeof define && define.amd
			? define(['exports'], n)
			: n(
					((e = 'undefined' != typeof globalThis ? globalThis : e || self).ru =
						{})
				);
})(this, function (e) {
	'use strict';
	var n =
			'undefined' != typeof window && void 0 !== window.flatpickr
				? window.flatpickr
				: { l10ns: {} },
		o = {
			weekdays: {
				shorthand: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
				longhand: [
					'Воскресенье',
					'Понедельник',
					'Вторник',
					'Среда',
					'Четверг',
					'Пятница',
					'Суббота',
				],
			},
			months: {
				shorthand: [
					'Янв',
					'Фев',
					'Март',
					'Апр',
					'Май',
					'Июнь',
					'Июль',
					'Авг',
					'Сен',
					'Окт',
					'Ноя',
					'Дек',
				],
				longhand: [
					'Январь',
					'Февраль',
					'Март',
					'Апрель',
					'Май',
					'Июнь',
					'Июль',
					'Август',
					'Сентябрь',
					'Октябрь',
					'Ноябрь',
					'Декабрь',
				],
			},
			firstDayOfWeek: 1,
			ordinal: function () {
				return '';
			},
			rangeSeparator: ' — ',
			weekAbbreviation: 'Нед.',
			scrollTitle: 'Прокрутите для увеличения',
			toggleTitle: 'Нажмите для переключения',
			amPM: ['ДП', 'ПП'],
			yearAriaLabel: 'Год',
			time_24hr: !0,
		};
	n.l10ns.ru = o;
	var t = n.l10ns;
	(e.Russian = o),
		(e.default = t),
		Object.defineProperty(e, '__esModule', { value: !0 });
});
//# sourceMappingURL=/sm/b2c15410faac7c7b783172f2216026961d0fe841d1dfd34d4a7fb08e79a8a72b.map
/*! jQuery Validation Plugin - v1.19.5 - 7/1/2022
 * https://jqueryvalidation.org/
 * Copyright (c) 2022 Jörn Zaefferer; Licensed MIT */
!(function (a) {
	'function' == typeof define && define.amd
		? define(['jquery'], a)
		: 'object' == typeof module && module.exports
			? (module.exports = a(require('jquery')))
			: a(jQuery);
})(function (a) {
	a.extend(a.fn, {
		validate: function (b) {
			if (!this.length)
				return void (
					b &&
					b.debug &&
					window.console &&
					console.warn("Nothing selected, can't validate, returning nothing.")
				);
			var c = a.data(this[0], 'validator');
			return c
				? c
				: (this.attr('novalidate', 'novalidate'),
					(c = new a.validator(b, this[0])),
					a.data(this[0], 'validator', c),
					c.settings.onsubmit &&
						(this.on('click.validate', ':submit', function (b) {
							(c.submitButton = b.currentTarget),
								a(this).hasClass('cancel') && (c.cancelSubmit = !0),
								void 0 !== a(this).attr('formnovalidate') &&
									(c.cancelSubmit = !0);
						}),
						this.on('submit.validate', function (b) {
							function d() {
								var d, e;
								return (
									c.submitButton &&
										(c.settings.submitHandler || c.formSubmitted) &&
										(d = a("<input type='hidden'/>")
											.attr('name', c.submitButton.name)
											.val(a(c.submitButton).val())
											.appendTo(c.currentForm)),
									!(c.settings.submitHandler && !c.settings.debug) ||
										((e = c.settings.submitHandler.call(c, c.currentForm, b)),
										d && d.remove(),
										void 0 !== e && e)
								);
							}
							return (
								c.settings.debug && b.preventDefault(),
								c.cancelSubmit
									? ((c.cancelSubmit = !1), d())
									: c.form()
										? c.pendingRequest
											? ((c.formSubmitted = !0), !1)
											: d()
										: (c.focusInvalid(), !1)
							);
						})),
					c);
		},
		valid: function () {
			var b, c, d;
			return (
				a(this[0]).is('form')
					? (b = this.validate().form())
					: ((d = []),
						(b = !0),
						(c = a(this[0].form).validate()),
						this.each(function () {
							(b = c.element(this) && b), b || (d = d.concat(c.errorList));
						}),
						(c.errorList = d)),
				b
			);
		},
		rules: function (b, c) {
			var d,
				e,
				f,
				g,
				h,
				i,
				j = this[0],
				k =
					'undefined' != typeof this.attr('contenteditable') &&
					'false' !== this.attr('contenteditable');
			if (
				null != j &&
				(!j.form &&
					k &&
					((j.form = this.closest('form')[0]), (j.name = this.attr('name'))),
				null != j.form)
			) {
				if (b)
					switch (
						((d = a.data(j.form, 'validator').settings),
						(e = d.rules),
						(f = a.validator.staticRules(j)),
						b)
					) {
						case 'add':
							a.extend(f, a.validator.normalizeRule(c)),
								delete f.messages,
								(e[j.name] = f),
								c.messages &&
									(d.messages[j.name] = a.extend(
										d.messages[j.name],
										c.messages
									));
							break;
						case 'remove':
							return c
								? ((i = {}),
									a.each(c.split(/\s/), function (a, b) {
										(i[b] = f[b]), delete f[b];
									}),
									i)
								: (delete e[j.name], f);
					}
				return (
					(g = a.validator.normalizeRules(
						a.extend(
							{},
							a.validator.classRules(j),
							a.validator.attributeRules(j),
							a.validator.dataRules(j),
							a.validator.staticRules(j)
						),
						j
					)),
					g.required &&
						((h = g.required),
						delete g.required,
						(g = a.extend({ required: h }, g))),
					g.remote &&
						((h = g.remote), delete g.remote, (g = a.extend(g, { remote: h }))),
					g
				);
			}
		},
	});
	var b = function (a) {
		return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
	};
	a.extend(a.expr.pseudos || a.expr[':'], {
		blank: function (c) {
			return !b('' + a(c).val());
		},
		filled: function (c) {
			var d = a(c).val();
			return null !== d && !!b('' + d);
		},
		unchecked: function (b) {
			return !a(b).prop('checked');
		},
	}),
		(a.validator = function (b, c) {
			(this.settings = a.extend(!0, {}, a.validator.defaults, b)),
				(this.currentForm = c),
				this.init();
		}),
		(a.validator.format = function (b, c) {
			return 1 === arguments.length
				? function () {
						var c = a.makeArray(arguments);
						return c.unshift(b), a.validator.format.apply(this, c);
					}
				: void 0 === c
					? b
					: (arguments.length > 2 &&
							c.constructor !== Array &&
							(c = a.makeArray(arguments).slice(1)),
						c.constructor !== Array && (c = [c]),
						a.each(c, function (a, c) {
							b = b.replace(new RegExp('\\{' + a + '\\}', 'g'), function () {
								return c;
							});
						}),
						b);
		}),
		a.extend(a.validator, {
			defaults: {
				messages: {},
				groups: {},
				rules: {},
				errorClass: 'error',
				pendingClass: 'pending',
				validClass: 'valid',
				errorElement: 'label',
				focusCleanup: !1,
				focusInvalid: !0,
				errorContainer: a([]),
				errorLabelContainer: a([]),
				onsubmit: !0,
				ignore: ':hidden',
				ignoreTitle: !1,
				onfocusin: function (a) {
					(this.lastActive = a),
						this.settings.focusCleanup &&
							(this.settings.unhighlight &&
								this.settings.unhighlight.call(
									this,
									a,
									this.settings.errorClass,
									this.settings.validClass
								),
							this.hideThese(this.errorsFor(a)));
				},
				onfocusout: function (a) {
					this.checkable(a) ||
						(!(a.name in this.submitted) && this.optional(a)) ||
						this.element(a);
				},
				onkeyup: function (b, c) {
					var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
					(9 === c.which && '' === this.elementValue(b)) ||
						a.inArray(c.keyCode, d) !== -1 ||
						((b.name in this.submitted || b.name in this.invalid) &&
							this.element(b));
				},
				onclick: function (a) {
					a.name in this.submitted
						? this.element(a)
						: a.parentNode.name in this.submitted && this.element(a.parentNode);
				},
				highlight: function (b, c, d) {
					'radio' === b.type
						? this.findByName(b.name).addClass(c).removeClass(d)
						: a(b).addClass(c).removeClass(d);
				},
				unhighlight: function (b, c, d) {
					'radio' === b.type
						? this.findByName(b.name).removeClass(c).addClass(d)
						: a(b).removeClass(c).addClass(d);
				},
			},
			setDefaults: function (b) {
				a.extend(a.validator.defaults, b);
			},
			messages: {
				required: 'This field is required.',
				remote: 'Please fix this field.',
				email: 'Please enter a valid email address.',
				url: 'Please enter a valid URL.',
				date: 'Please enter a valid date.',
				dateISO: 'Please enter a valid date (ISO).',
				number: 'Please enter a valid number.',
				digits: 'Please enter only digits.',
				equalTo: 'Please enter the same value again.',
				maxlength: a.validator.format(
					'Please enter no more than {0} characters.'
				),
				minlength: a.validator.format('Please enter at least {0} characters.'),
				rangelength: a.validator.format(
					'Please enter a value between {0} and {1} characters long.'
				),
				range: a.validator.format('Please enter a value between {0} and {1}.'),
				max: a.validator.format(
					'Please enter a value less than or equal to {0}.'
				),
				min: a.validator.format(
					'Please enter a value greater than or equal to {0}.'
				),
				step: a.validator.format('Please enter a multiple of {0}.'),
			},
			autoCreateRanges: !1,
			prototype: {
				init: function () {
					function b(b) {
						var c =
							'undefined' != typeof a(this).attr('contenteditable') &&
							'false' !== a(this).attr('contenteditable');
						if (
							(!this.form &&
								c &&
								((this.form = a(this).closest('form')[0]),
								(this.name = a(this).attr('name'))),
							d === this.form)
						) {
							var e = a.data(this.form, 'validator'),
								f = 'on' + b.type.replace(/^validate/, ''),
								g = e.settings;
							g[f] && !a(this).is(g.ignore) && g[f].call(e, this, b);
						}
					}
					(this.labelContainer = a(this.settings.errorLabelContainer)),
						(this.errorContext =
							(this.labelContainer.length && this.labelContainer) ||
							a(this.currentForm)),
						(this.containers = a(this.settings.errorContainer).add(
							this.settings.errorLabelContainer
						)),
						(this.submitted = {}),
						(this.valueCache = {}),
						(this.pendingRequest = 0),
						(this.pending = {}),
						(this.invalid = {}),
						this.reset();
					var c,
						d = this.currentForm,
						e = (this.groups = {});
					a.each(this.settings.groups, function (b, c) {
						'string' == typeof c && (c = c.split(/\s/)),
							a.each(c, function (a, c) {
								e[c] = b;
							});
					}),
						(c = this.settings.rules),
						a.each(c, function (b, d) {
							c[b] = a.validator.normalizeRule(d);
						}),
						a(this.currentForm)
							.on(
								'focusin.validate focusout.validate keyup.validate',
								":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",
								b
							)
							.on(
								'click.validate',
								"select, option, [type='radio'], [type='checkbox']",
								b
							),
						this.settings.invalidHandler &&
							a(this.currentForm).on(
								'invalid-form.validate',
								this.settings.invalidHandler
							);
				},
				form: function () {
					return (
						this.checkForm(),
						a.extend(this.submitted, this.errorMap),
						(this.invalid = a.extend({}, this.errorMap)),
						this.valid() ||
							a(this.currentForm).triggerHandler('invalid-form', [this]),
						this.showErrors(),
						this.valid()
					);
				},
				checkForm: function () {
					this.prepareForm();
					for (
						var a = 0, b = (this.currentElements = this.elements());
						b[a];
						a++
					)
						this.check(b[a]);
					return this.valid();
				},
				element: function (b) {
					var c,
						d,
						e = this.clean(b),
						f = this.validationTargetFor(e),
						g = this,
						h = !0;
					return (
						void 0 === f
							? delete this.invalid[e.name]
							: (this.prepareElement(f),
								(this.currentElements = a(f)),
								(d = this.groups[f.name]),
								d &&
									a.each(this.groups, function (a, b) {
										b === d &&
											a !== f.name &&
											((e = g.validationTargetFor(g.clean(g.findByName(a)))),
											e &&
												e.name in g.invalid &&
												(g.currentElements.push(e), (h = g.check(e) && h)));
									}),
								(c = this.check(f) !== !1),
								(h = h && c),
								c ? (this.invalid[f.name] = !1) : (this.invalid[f.name] = !0),
								this.numberOfInvalids() ||
									(this.toHide = this.toHide.add(this.containers)),
								this.showErrors(),
								a(b).attr('aria-invalid', !c)),
						h
					);
				},
				showErrors: function (b) {
					if (b) {
						var c = this;
						a.extend(this.errorMap, b),
							(this.errorList = a.map(this.errorMap, function (a, b) {
								return { message: a, element: c.findByName(b)[0] };
							})),
							(this.successList = a.grep(this.successList, function (a) {
								return !(a.name in b);
							}));
					}
					this.settings.showErrors
						? this.settings.showErrors.call(this, this.errorMap, this.errorList)
						: this.defaultShowErrors();
				},
				resetForm: function () {
					a.fn.resetForm && a(this.currentForm).resetForm(),
						(this.invalid = {}),
						(this.submitted = {}),
						this.prepareForm(),
						this.hideErrors();
					var b = this.elements()
						.removeData('previousValue')
						.removeAttr('aria-invalid');
					this.resetElements(b);
				},
				resetElements: function (a) {
					var b;
					if (this.settings.unhighlight)
						for (b = 0; a[b]; b++)
							this.settings.unhighlight.call(
								this,
								a[b],
								this.settings.errorClass,
								''
							),
								this.findByName(a[b].name).removeClass(
									this.settings.validClass
								);
					else
						a.removeClass(this.settings.errorClass).removeClass(
							this.settings.validClass
						);
				},
				numberOfInvalids: function () {
					return this.objectLength(this.invalid);
				},
				objectLength: function (a) {
					var b,
						c = 0;
					for (b in a) void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
					return c;
				},
				hideErrors: function () {
					this.hideThese(this.toHide);
				},
				hideThese: function (a) {
					a.not(this.containers).text(''), this.addWrapper(a).hide();
				},
				valid: function () {
					return 0 === this.size();
				},
				size: function () {
					return this.errorList.length;
				},
				focusInvalid: function () {
					if (this.settings.focusInvalid)
						try {
							a(
								this.findLastActive() ||
									(this.errorList.length && this.errorList[0].element) ||
									[]
							)
								.filter(':visible')
								.trigger('focus')
								.trigger('focusin');
						} catch (b) {}
				},
				findLastActive: function () {
					var b = this.lastActive;
					return (
						b &&
						1 ===
							a.grep(this.errorList, function (a) {
								return a.element.name === b.name;
							}).length &&
						b
					);
				},
				elements: function () {
					var b = this,
						c = {};
					return a(this.currentForm)
						.find('input, select, textarea, [contenteditable]')
						.not(':submit, :reset, :image, :disabled')
						.not(this.settings.ignore)
						.filter(function () {
							var d = this.name || a(this).attr('name'),
								e =
									'undefined' != typeof a(this).attr('contenteditable') &&
									'false' !== a(this).attr('contenteditable');
							return (
								!d &&
									b.settings.debug &&
									window.console &&
									console.error('%o has no name assigned', this),
								e &&
									((this.form = a(this).closest('form')[0]), (this.name = d)),
								this.form === b.currentForm &&
									!(d in c || !b.objectLength(a(this).rules())) &&
									((c[d] = !0), !0)
							);
						});
				},
				clean: function (b) {
					return a(b)[0];
				},
				errors: function () {
					var b = this.settings.errorClass.split(' ').join('.');
					return a(this.settings.errorElement + '.' + b, this.errorContext);
				},
				resetInternals: function () {
					(this.successList = []),
						(this.errorList = []),
						(this.errorMap = {}),
						(this.toShow = a([])),
						(this.toHide = a([]));
				},
				reset: function () {
					this.resetInternals(), (this.currentElements = a([]));
				},
				prepareForm: function () {
					this.reset(), (this.toHide = this.errors().add(this.containers));
				},
				prepareElement: function (a) {
					this.reset(), (this.toHide = this.errorsFor(a));
				},
				elementValue: function (b) {
					var c,
						d,
						e = a(b),
						f = b.type,
						g =
							'undefined' != typeof e.attr('contenteditable') &&
							'false' !== e.attr('contenteditable');
					return 'radio' === f || 'checkbox' === f
						? this.findByName(b.name).filter(':checked').val()
						: 'number' === f && 'undefined' != typeof b.validity
							? b.validity.badInput
								? 'NaN'
								: e.val()
							: ((c = g ? e.text() : e.val()),
								'file' === f
									? 'C:\\fakepath\\' === c.substr(0, 12)
										? c.substr(12)
										: ((d = c.lastIndexOf('/')),
											d >= 0
												? c.substr(d + 1)
												: ((d = c.lastIndexOf('\\')),
													d >= 0 ? c.substr(d + 1) : c))
									: 'string' == typeof c
										? c.replace(/\r/g, '')
										: c);
				},
				check: function (b) {
					b = this.validationTargetFor(this.clean(b));
					var c,
						d,
						e,
						f,
						g = a(b).rules(),
						h = a.map(g, function (a, b) {
							return b;
						}).length,
						i = !1,
						j = this.elementValue(b);
					'function' == typeof g.normalizer
						? (f = g.normalizer)
						: 'function' == typeof this.settings.normalizer &&
							(f = this.settings.normalizer),
						f && ((j = f.call(b, j)), delete g.normalizer);
					for (d in g) {
						e = { method: d, parameters: g[d] };
						try {
							if (
								((c = a.validator.methods[d].call(this, j, b, e.parameters)),
								'dependency-mismatch' === c && 1 === h)
							) {
								i = !0;
								continue;
							}
							if (((i = !1), 'pending' === c))
								return void (this.toHide = this.toHide.not(this.errorsFor(b)));
							if (!c) return this.formatAndAdd(b, e), !1;
						} catch (k) {
							throw (
								(this.settings.debug &&
									window.console &&
									console.log(
										'Exception occurred when checking element ' +
											b.id +
											", check the '" +
											e.method +
											"' method.",
										k
									),
								k instanceof TypeError &&
									(k.message +=
										'.  Exception occurred when checking element ' +
										b.id +
										", check the '" +
										e.method +
										"' method."),
								k)
							);
						}
					}
					if (!i) return this.objectLength(g) && this.successList.push(b), !0;
				},
				customDataMessage: function (b, c) {
					return (
						a(b).data(
							'msg' + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()
						) || a(b).data('msg')
					);
				},
				customMessage: function (a, b) {
					var c = this.settings.messages[a];
					return c && (c.constructor === String ? c : c[b]);
				},
				findDefined: function () {
					for (var a = 0; a < arguments.length; a++)
						if (void 0 !== arguments[a]) return arguments[a];
				},
				defaultMessage: function (b, c) {
					'string' == typeof c && (c = { method: c });
					var d = this.findDefined(
							this.customMessage(b.name, c.method),
							this.customDataMessage(b, c.method),
							(!this.settings.ignoreTitle && b.title) || void 0,
							a.validator.messages[c.method],
							'<strong>Warning: No message defined for ' + b.name + '</strong>'
						),
						e = /\$?\{(\d+)\}/g;
					return (
						'function' == typeof d
							? (d = d.call(this, c.parameters, b))
							: e.test(d) &&
								(d = a.validator.format(d.replace(e, '{$1}'), c.parameters)),
						d
					);
				},
				formatAndAdd: function (a, b) {
					var c = this.defaultMessage(a, b);
					this.errorList.push({ message: c, element: a, method: b.method }),
						(this.errorMap[a.name] = c),
						(this.submitted[a.name] = c);
				},
				addWrapper: function (a) {
					return (
						this.settings.wrapper &&
							(a = a.add(a.parent(this.settings.wrapper))),
						a
					);
				},
				defaultShowErrors: function () {
					var a, b, c;
					for (a = 0; this.errorList[a]; a++)
						(c = this.errorList[a]),
							this.settings.highlight &&
								this.settings.highlight.call(
									this,
									c.element,
									this.settings.errorClass,
									this.settings.validClass
								),
							this.showLabel(c.element, c.message);
					if (
						(this.errorList.length &&
							(this.toShow = this.toShow.add(this.containers)),
						this.settings.success)
					)
						for (a = 0; this.successList[a]; a++)
							this.showLabel(this.successList[a]);
					if (this.settings.unhighlight)
						for (a = 0, b = this.validElements(); b[a]; a++)
							this.settings.unhighlight.call(
								this,
								b[a],
								this.settings.errorClass,
								this.settings.validClass
							);
					(this.toHide = this.toHide.not(this.toShow)),
						this.hideErrors(),
						this.addWrapper(this.toShow).show();
				},
				validElements: function () {
					return this.currentElements.not(this.invalidElements());
				},
				invalidElements: function () {
					return a(this.errorList).map(function () {
						return this.element;
					});
				},
				showLabel: function (b, c) {
					var d,
						e,
						f,
						g,
						h = this.errorsFor(b),
						i = this.idOrName(b),
						j = a(b).attr('aria-describedby');
					h.length
						? (h
								.removeClass(this.settings.validClass)
								.addClass(this.settings.errorClass),
							h.html(c))
						: ((h = a('<' + this.settings.errorElement + '>')
								.attr('id', i + '-error')
								.addClass(this.settings.errorClass)
								.html(c || '')),
							(d = h),
							this.settings.wrapper &&
								(d = h
									.hide()
									.show()
									.wrap('<' + this.settings.wrapper + '/>')
									.parent()),
							this.labelContainer.length
								? this.labelContainer.append(d)
								: this.settings.errorPlacement
									? this.settings.errorPlacement.call(this, d, a(b))
									: d.insertAfter(b),
							h.is('label')
								? h.attr('for', i)
								: 0 ===
										h.parents("label[for='" + this.escapeCssMeta(i) + "']")
											.length &&
									((f = h.attr('id')),
									j
										? j.match(
												new RegExp('\\b' + this.escapeCssMeta(f) + '\\b')
											) || (j += ' ' + f)
										: (j = f),
									a(b).attr('aria-describedby', j),
									(e = this.groups[b.name]),
									e &&
										((g = this),
										a.each(g.groups, function (b, c) {
											c === e &&
												a(
													"[name='" + g.escapeCssMeta(b) + "']",
													g.currentForm
												).attr('aria-describedby', h.attr('id'));
										})))),
						!c &&
							this.settings.success &&
							(h.text(''),
							'string' == typeof this.settings.success
								? h.addClass(this.settings.success)
								: this.settings.success(h, b)),
						(this.toShow = this.toShow.add(h));
				},
				errorsFor: function (b) {
					var c = this.escapeCssMeta(this.idOrName(b)),
						d = a(b).attr('aria-describedby'),
						e = "label[for='" + c + "'], label[for='" + c + "'] *";
					return (
						d && (e = e + ', #' + this.escapeCssMeta(d).replace(/\s+/g, ', #')),
						this.errors().filter(e)
					);
				},
				escapeCssMeta: function (a) {
					return void 0 === a
						? ''
						: a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, '\\$1');
				},
				idOrName: function (a) {
					return (
						this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
					);
				},
				validationTargetFor: function (b) {
					return (
						this.checkable(b) && (b = this.findByName(b.name)),
						a(b).not(this.settings.ignore)[0]
					);
				},
				checkable: function (a) {
					return /radio|checkbox/i.test(a.type);
				},
				findByName: function (b) {
					return a(this.currentForm).find(
						"[name='" + this.escapeCssMeta(b) + "']"
					);
				},
				getLength: function (b, c) {
					switch (c.nodeName.toLowerCase()) {
						case 'select':
							return a('option:selected', c).length;
						case 'input':
							if (this.checkable(c))
								return this.findByName(c.name).filter(':checked').length;
					}
					return b.length;
				},
				depend: function (a, b) {
					return (
						!this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
					);
				},
				dependTypes: {
					boolean: function (a) {
						return a;
					},
					string: function (b, c) {
						return !!a(b, c.form).length;
					},
					function: function (a, b) {
						return a(b);
					},
				},
				optional: function (b) {
					var c = this.elementValue(b);
					return (
						!a.validator.methods.required.call(this, c, b) &&
						'dependency-mismatch'
					);
				},
				startRequest: function (b) {
					this.pending[b.name] ||
						(this.pendingRequest++,
						a(b).addClass(this.settings.pendingClass),
						(this.pending[b.name] = !0));
				},
				stopRequest: function (b, c) {
					this.pendingRequest--,
						this.pendingRequest < 0 && (this.pendingRequest = 0),
						delete this.pending[b.name],
						a(b).removeClass(this.settings.pendingClass),
						c &&
						0 === this.pendingRequest &&
						this.formSubmitted &&
						this.form() &&
						0 === this.pendingRequest
							? (a(this.currentForm).trigger('submit'),
								this.submitButton &&
									a(
										"input:hidden[name='" + this.submitButton.name + "']",
										this.currentForm
									).remove(),
								(this.formSubmitted = !1))
							: !c &&
								0 === this.pendingRequest &&
								this.formSubmitted &&
								(a(this.currentForm).triggerHandler('invalid-form', [this]),
								(this.formSubmitted = !1));
				},
				previousValue: function (b, c) {
					return (
						(c = ('string' == typeof c && c) || 'remote'),
						a.data(b, 'previousValue') ||
							a.data(b, 'previousValue', {
								old: null,
								valid: !0,
								message: this.defaultMessage(b, { method: c }),
							})
					);
				},
				destroy: function () {
					this.resetForm(),
						a(this.currentForm)
							.off('.validate')
							.removeData('validator')
							.find('.validate-equalTo-blur')
							.off('.validate-equalTo')
							.removeClass('validate-equalTo-blur')
							.find('.validate-lessThan-blur')
							.off('.validate-lessThan')
							.removeClass('validate-lessThan-blur')
							.find('.validate-lessThanEqual-blur')
							.off('.validate-lessThanEqual')
							.removeClass('validate-lessThanEqual-blur')
							.find('.validate-greaterThanEqual-blur')
							.off('.validate-greaterThanEqual')
							.removeClass('validate-greaterThanEqual-blur')
							.find('.validate-greaterThan-blur')
							.off('.validate-greaterThan')
							.removeClass('validate-greaterThan-blur');
				},
			},
			classRuleSettings: {
				required: { required: !0 },
				email: { email: !0 },
				url: { url: !0 },
				date: { date: !0 },
				dateISO: { dateISO: !0 },
				number: { number: !0 },
				digits: { digits: !0 },
				creditcard: { creditcard: !0 },
			},
			addClassRules: function (b, c) {
				b.constructor === String
					? (this.classRuleSettings[b] = c)
					: a.extend(this.classRuleSettings, b);
			},
			classRules: function (b) {
				var c = {},
					d = a(b).attr('class');
				return (
					d &&
						a.each(d.split(' '), function () {
							this in a.validator.classRuleSettings &&
								a.extend(c, a.validator.classRuleSettings[this]);
						}),
					c
				);
			},
			normalizeAttributeRule: function (a, b, c, d) {
				/min|max|step/.test(c) &&
					(null === b || /number|range|text/.test(b)) &&
					((d = Number(d)), isNaN(d) && (d = void 0)),
					d || 0 === d
						? (a[c] = d)
						: b === c &&
							'range' !== b &&
							(a['date' === b ? 'dateISO' : c] = !0);
			},
			attributeRules: function (b) {
				var c,
					d,
					e = {},
					f = a(b),
					g = b.getAttribute('type');
				for (c in a.validator.methods)
					'required' === c
						? ((d = b.getAttribute(c)), '' === d && (d = !0), (d = !!d))
						: (d = f.attr(c)),
						this.normalizeAttributeRule(e, g, c, d);
				return (
					e.maxlength &&
						/-1|2147483647|524288/.test(e.maxlength) &&
						delete e.maxlength,
					e
				);
			},
			dataRules: function (b) {
				var c,
					d,
					e = {},
					f = a(b),
					g = b.getAttribute('type');
				for (c in a.validator.methods)
					(d = f.data(
						'rule' + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()
					)),
						'' === d && (d = !0),
						this.normalizeAttributeRule(e, g, c, d);
				return e;
			},
			staticRules: function (b) {
				var c = {},
					d = a.data(b.form, 'validator');
				return (
					d.settings.rules &&
						(c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}),
					c
				);
			},
			normalizeRules: function (b, c) {
				return (
					a.each(b, function (d, e) {
						if (e === !1) return void delete b[d];
						if (e.param || e.depends) {
							var f = !0;
							switch (typeof e.depends) {
								case 'string':
									f = !!a(e.depends, c.form).length;
									break;
								case 'function':
									f = e.depends.call(c, c);
							}
							f
								? (b[d] = void 0 === e.param || e.param)
								: (a.data(c.form, 'validator').resetElements(a(c)),
									delete b[d]);
						}
					}),
					a.each(b, function (a, d) {
						b[a] = 'function' == typeof d && 'normalizer' !== a ? d(c) : d;
					}),
					a.each(['minlength', 'maxlength'], function () {
						b[this] && (b[this] = Number(b[this]));
					}),
					a.each(['rangelength', 'range'], function () {
						var a;
						b[this] &&
							(Array.isArray(b[this])
								? (b[this] = [Number(b[this][0]), Number(b[this][1])])
								: 'string' == typeof b[this] &&
									((a = b[this].replace(/[\[\]]/g, '').split(/[\s,]+/)),
									(b[this] = [Number(a[0]), Number(a[1])])));
					}),
					a.validator.autoCreateRanges &&
						(null != b.min &&
							null != b.max &&
							((b.range = [b.min, b.max]), delete b.min, delete b.max),
						null != b.minlength &&
							null != b.maxlength &&
							((b.rangelength = [b.minlength, b.maxlength]),
							delete b.minlength,
							delete b.maxlength)),
					b
				);
			},
			normalizeRule: function (b) {
				if ('string' == typeof b) {
					var c = {};
					a.each(b.split(/\s/), function () {
						c[this] = !0;
					}),
						(b = c);
				}
				return b;
			},
			addMethod: function (b, c, d) {
				(a.validator.methods[b] = c),
					(a.validator.messages[b] =
						void 0 !== d ? d : a.validator.messages[b]),
					c.length < 3 &&
						a.validator.addClassRules(b, a.validator.normalizeRule(b));
			},
			methods: {
				required: function (b, c, d) {
					if (!this.depend(d, c)) return 'dependency-mismatch';
					if ('select' === c.nodeName.toLowerCase()) {
						var e = a(c).val();
						return e && e.length > 0;
					}
					return this.checkable(c)
						? this.getLength(b, c) > 0
						: void 0 !== b && null !== b && b.length > 0;
				},
				email: function (a, b) {
					return (
						this.optional(b) ||
						/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
							a
						)
					);
				},
				url: function (a, b) {
					return (
						this.optional(b) ||
						/^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
							a
						)
					);
				},
				date: (function () {
					var a = !1;
					return function (b, c) {
						return (
							a ||
								((a = !0),
								this.settings.debug &&
									window.console &&
									console.warn(
										"The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`."
									)),
							this.optional(c) || !/Invalid|NaN/.test(new Date(b).toString())
						);
					};
				})(),
				dateISO: function (a, b) {
					return (
						this.optional(b) ||
						/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
							a
						)
					);
				},
				number: function (a, b) {
					return (
						this.optional(b) ||
						/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
					);
				},
				digits: function (a, b) {
					return this.optional(b) || /^\d+$/.test(a);
				},
				minlength: function (a, b, c) {
					var d = Array.isArray(a) ? a.length : this.getLength(a, b);
					return this.optional(b) || d >= c;
				},
				maxlength: function (a, b, c) {
					var d = Array.isArray(a) ? a.length : this.getLength(a, b);
					return this.optional(b) || d <= c;
				},
				rangelength: function (a, b, c) {
					var d = Array.isArray(a) ? a.length : this.getLength(a, b);
					return this.optional(b) || (d >= c[0] && d <= c[1]);
				},
				min: function (a, b, c) {
					return this.optional(b) || a >= c;
				},
				max: function (a, b, c) {
					return this.optional(b) || a <= c;
				},
				range: function (a, b, c) {
					return this.optional(b) || (a >= c[0] && a <= c[1]);
				},
				step: function (b, c, d) {
					var e,
						f = a(c).attr('type'),
						g = 'Step attribute on input type ' + f + ' is not supported.',
						h = ['text', 'number', 'range'],
						i = new RegExp('\\b' + f + '\\b'),
						j = f && !i.test(h.join()),
						k = function (a) {
							var b = ('' + a).match(/(?:\.(\d+))?$/);
							return b && b[1] ? b[1].length : 0;
						},
						l = function (a) {
							return Math.round(a * Math.pow(10, e));
						},
						m = !0;
					if (j) throw new Error(g);
					return (
						(e = k(d)),
						(k(b) > e || l(b) % l(d) !== 0) && (m = !1),
						this.optional(c) || m
					);
				},
				equalTo: function (b, c, d) {
					var e = a(d);
					return (
						this.settings.onfocusout &&
							e.not('.validate-equalTo-blur').length &&
							e
								.addClass('validate-equalTo-blur')
								.on('blur.validate-equalTo', function () {
									a(c).valid();
								}),
						b === e.val()
					);
				},
				remote: function (b, c, d, e) {
					if (this.optional(c)) return 'dependency-mismatch';
					e = ('string' == typeof e && e) || 'remote';
					var f,
						g,
						h,
						i = this.previousValue(c, e);
					return (
						this.settings.messages[c.name] ||
							(this.settings.messages[c.name] = {}),
						(i.originalMessage =
							i.originalMessage || this.settings.messages[c.name][e]),
						(this.settings.messages[c.name][e] = i.message),
						(d = ('string' == typeof d && { url: d }) || d),
						(h = a.param(a.extend({ data: b }, d.data))),
						i.old === h
							? i.valid
							: ((i.old = h),
								(f = this),
								this.startRequest(c),
								(g = {}),
								(g[c.name] = b),
								a.ajax(
									a.extend(
										!0,
										{
											mode: 'abort',
											port: 'validate' + c.name,
											dataType: 'json',
											data: g,
											context: f.currentForm,
											success: function (a) {
												var d,
													g,
													h,
													j = a === !0 || 'true' === a;
												(f.settings.messages[c.name][e] = i.originalMessage),
													j
														? ((h = f.formSubmitted),
															f.resetInternals(),
															(f.toHide = f.errorsFor(c)),
															(f.formSubmitted = h),
															f.successList.push(c),
															(f.invalid[c.name] = !1),
															f.showErrors())
														: ((d = {}),
															(g =
																a ||
																f.defaultMessage(c, {
																	method: e,
																	parameters: b,
																})),
															(d[c.name] = i.message = g),
															(f.invalid[c.name] = !0),
															f.showErrors(d)),
													(i.valid = j),
													f.stopRequest(c, j);
											},
										},
										d
									)
								),
								'pending')
					);
				},
			},
		});
	var c,
		d = {};
	return (
		a.ajaxPrefilter
			? a.ajaxPrefilter(function (a, b, c) {
					var e = a.port;
					'abort' === a.mode && (d[e] && d[e].abort(), (d[e] = c));
				})
			: ((c = a.ajax),
				(a.ajax = function (b) {
					var e = ('mode' in b ? b : a.ajaxSettings).mode,
						f = ('port' in b ? b : a.ajaxSettings).port;
					return 'abort' === e
						? (d[f] && d[f].abort(), (d[f] = c.apply(this, arguments)), d[f])
						: c.apply(this, arguments);
				})),
		a
	);
});
