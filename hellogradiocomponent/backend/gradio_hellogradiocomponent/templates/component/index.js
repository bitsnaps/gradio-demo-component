const {
  SvelteComponent: Ct,
  append: N,
  attr: F,
  check_outros: qe,
  create_component: zt,
  destroy_component: Ft,
  destroy_each: Lt,
  detach: L,
  element: A,
  empty: ue,
  ensure_array_like: Me,
  group_outros: je,
  init: St,
  insert: S,
  listen: x,
  mount_component: Vt,
  noop: le,
  run_all: ct,
  safe_not_equal: Nt,
  set_data: G,
  space: ge,
  text: Z,
  toggle_class: O,
  transition_in: Y,
  transition_out: Q
} = window.__gradio__svelte__internal;
function Be(n, e, t) {
  const l = n.slice();
  return l[10] = e[t], l[12] = t, l;
}
function At(n) {
  let e, t = (
    /*brackets*/
    n[6][0] + ""
  ), l, i, f, o, s, r = (
    /*brackets*/
    n[6][1] + ""
  ), _, a, d, u, m, h = Me(
    /*items*/
    n[5]
  ), v = [];
  for (let b = 0; b < h.length; b += 1)
    v[b] = Ze(Be(n, h, b));
  const C = (b) => Q(v[b], 1, 1, () => {
    v[b] = null;
  });
  let j = !/*_last*/
  n[3] && Ee();
  return {
    c() {
      e = A("span"), l = Z(t), i = ge(), f = A("ul");
      for (let b = 0; b < v.length; b += 1)
        v[b].c();
      o = ge(), s = A("span"), _ = Z(r), j && j.c(), a = ue(), F(e, "class", "_jsonBkt svelte-6z96o6"), F(e, "role", "button"), F(e, "tabindex", "0"), O(
        e,
        "isArray",
        /*isArray*/
        n[4]
      ), F(f, "class", "_jsonList svelte-6z96o6"), F(s, "class", "_jsonBkt svelte-6z96o6"), F(s, "role", "button"), F(s, "tabindex", "0"), O(
        s,
        "isArray",
        /*isArray*/
        n[4]
      );
    },
    m(b, c) {
      S(b, e, c), N(e, l), S(b, i, c), S(b, f, c);
      for (let g = 0; g < v.length; g += 1)
        v[g] && v[g].m(f, null);
      S(b, o, c), S(b, s, c), N(s, _), j && j.m(b, c), S(b, a, c), d = !0, u || (m = [
        x(
          e,
          "click",
          /*clicked*/
          n[8]
        ),
        x(
          e,
          "keydown",
          /*pressed*/
          n[9]
        ),
        x(
          s,
          "click",
          /*clicked*/
          n[8]
        ),
        x(
          s,
          "keydown",
          /*pressed*/
          n[9]
        )
      ], u = !0);
    },
    p(b, c) {
      if ((!d || c & /*brackets*/
      64) && t !== (t = /*brackets*/
      b[6][0] + "") && G(l, t), (!d || c & /*isArray*/
      16) && O(
        e,
        "isArray",
        /*isArray*/
        b[4]
      ), c & /*json, items, depth, _cur, getType, format, isArray*/
      55) {
        h = Me(
          /*items*/
          b[5]
        );
        let g;
        for (g = 0; g < h.length; g += 1) {
          const k = Be(b, h, g);
          v[g] ? (v[g].p(k, c), Y(v[g], 1)) : (v[g] = Ze(k), v[g].c(), Y(v[g], 1), v[g].m(f, null));
        }
        for (je(), g = h.length; g < v.length; g += 1)
          C(g);
        qe();
      }
      (!d || c & /*brackets*/
      64) && r !== (r = /*brackets*/
      b[6][1] + "") && G(_, r), (!d || c & /*isArray*/
      16) && O(
        s,
        "isArray",
        /*isArray*/
        b[4]
      ), /*_last*/
      b[3] ? j && (j.d(1), j = null) : j || (j = Ee(), j.c(), j.m(a.parentNode, a));
    },
    i(b) {
      if (!d) {
        for (let c = 0; c < h.length; c += 1)
          Y(v[c]);
        d = !0;
      }
    },
    o(b) {
      v = v.filter(Boolean);
      for (let c = 0; c < v.length; c += 1)
        Q(v[c]);
      d = !1;
    },
    d(b) {
      b && (L(e), L(i), L(f), L(o), L(s), L(a)), Lt(v, b), j && j.d(b), u = !1, ct(m);
    }
  };
}
function Mt(n) {
  let e, t = (
    /*brackets*/
    n[6][0] + ""
  ), l, i, f = (
    /*brackets*/
    n[6][1] + ""
  ), o, s, r, _, a = !/*_last*/
  n[3] && /*collapsed*/
  n[7] && De();
  return {
    c() {
      e = A("span"), l = Z(t), i = Z("..."), o = Z(f), a && a.c(), s = ue(), F(e, "class", "_jsonBkt svelte-6z96o6"), F(e, "role", "button"), F(e, "tabindex", "0"), O(
        e,
        "isArray",
        /*isArray*/
        n[4]
      );
    },
    m(d, u) {
      S(d, e, u), N(e, l), N(e, i), N(e, o), a && a.m(d, u), S(d, s, u), r || (_ = [
        x(
          e,
          "click",
          /*clicked*/
          n[8]
        ),
        x(
          e,
          "keydown",
          /*pressed*/
          n[9]
        )
      ], r = !0);
    },
    p(d, u) {
      u & /*brackets*/
      64 && t !== (t = /*brackets*/
      d[6][0] + "") && G(l, t), u & /*brackets*/
      64 && f !== (f = /*brackets*/
      d[6][1] + "") && G(o, f), u & /*isArray*/
      16 && O(
        e,
        "isArray",
        /*isArray*/
        d[4]
      ), !/*_last*/
      d[3] && /*collapsed*/
      d[7] ? a || (a = De(), a.c(), a.m(s.parentNode, s)) : a && (a.d(1), a = null);
    },
    i: le,
    o: le,
    d(d) {
      d && (L(e), L(s)), a && a.d(d), r = !1, ct(_);
    }
  };
}
function Bt(n) {
  let e, t = (
    /*brackets*/
    n[6][0] + ""
  ), l, i = (
    /*brackets*/
    n[6][1] + ""
  ), f, o, s = !/*_last*/
  n[3] && Ie();
  return {
    c() {
      e = A("span"), l = Z(t), f = Z(i), s && s.c(), o = ue(), F(e, "class", "_jsonBkt empty svelte-6z96o6"), O(
        e,
        "isArray",
        /*isArray*/
        n[4]
      );
    },
    m(r, _) {
      S(r, e, _), N(e, l), N(e, f), s && s.m(r, _), S(r, o, _);
    },
    p(r, _) {
      _ & /*brackets*/
      64 && t !== (t = /*brackets*/
      r[6][0] + "") && G(l, t), _ & /*brackets*/
      64 && i !== (i = /*brackets*/
      r[6][1] + "") && G(f, i), _ & /*isArray*/
      16 && O(
        e,
        "isArray",
        /*isArray*/
        r[4]
      ), /*_last*/
      r[3] ? s && (s.d(1), s = null) : s || (s = Ie(), s.c(), s.m(o.parentNode, o));
    },
    i: le,
    o: le,
    d(r) {
      r && (L(e), L(o)), s && s.d(r);
    }
  };
}
function Pe(n) {
  let e, t, l = (
    /*i*/
    n[10] + ""
  ), i, f, o;
  return {
    c() {
      e = A("span"), t = Z('"'), i = Z(l), f = Z('"'), o = A("span"), o.textContent = ":", F(e, "class", "_jsonKey svelte-6z96o6"), F(o, "class", "_jsonSep svelte-6z96o6");
    },
    m(s, r) {
      S(s, e, r), N(e, t), N(e, i), N(e, f), S(s, o, r);
    },
    p(s, r) {
      r & /*items*/
      32 && l !== (l = /*i*/
      s[10] + "") && G(i, l);
    },
    d(s) {
      s && (L(e), L(o));
    }
  };
}
function Pt(n) {
  let e, t = Je(
    /*json*/
    n[0][
      /*i*/
      n[10]
    ]
  ) + "", l, i, f, o = (
    /*idx*/
    n[12] < /*items*/
    n[5].length - 1 && Te()
  );
  return {
    c() {
      e = A("span"), l = Z(t), o && o.c(), f = ue(), F(e, "class", i = "_jsonVal " + ae(
        /*json*/
        n[0][
          /*i*/
          n[10]
        ]
      ) + " svelte-6z96o6");
    },
    m(s, r) {
      S(s, e, r), N(e, l), o && o.m(s, r), S(s, f, r);
    },
    p(s, r) {
      r & /*json, items*/
      33 && t !== (t = Je(
        /*json*/
        s[0][
          /*i*/
          s[10]
        ]
      ) + "") && G(l, t), r & /*json, items*/
      33 && i !== (i = "_jsonVal " + ae(
        /*json*/
        s[0][
          /*i*/
          s[10]
        ]
      ) + " svelte-6z96o6") && F(e, "class", i), /*idx*/
      s[12] < /*items*/
      s[5].length - 1 ? o || (o = Te(), o.c(), o.m(f.parentNode, f)) : o && (o.d(1), o = null);
    },
    i: le,
    o: le,
    d(s) {
      s && (L(e), L(f)), o && o.d(s);
    }
  };
}
function Tt(n) {
  let e, t;
  return e = new dt({
    props: {
      json: (
        /*json*/
        n[0][
          /*i*/
          n[10]
        ]
      ),
      depth: (
        /*depth*/
        n[1]
      ),
      _cur: (
        /*_cur*/
        n[2] + 1
      ),
      _last: (
        /*idx*/
        n[12] === /*items*/
        n[5].length - 1
      )
    }
  }), {
    c() {
      zt(e.$$.fragment);
    },
    m(l, i) {
      Vt(e, l, i), t = !0;
    },
    p(l, i) {
      const f = {};
      i & /*json, items*/
      33 && (f.json = /*json*/
      l[0][
        /*i*/
        l[10]
      ]), i & /*depth*/
      2 && (f.depth = /*depth*/
      l[1]), i & /*_cur*/
      4 && (f._cur = /*_cur*/
      l[2] + 1), i & /*items*/
      32 && (f._last = /*idx*/
      l[12] === /*items*/
      l[5].length - 1), e.$set(f);
    },
    i(l) {
      t || (Y(e.$$.fragment, l), t = !0);
    },
    o(l) {
      Q(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Ft(e, l);
    }
  };
}
function Te(n) {
  let e;
  return {
    c() {
      e = A("span"), e.textContent = ",", F(e, "class", "_jsonSep svelte-6z96o6");
    },
    m(t, l) {
      S(t, e, l);
    },
    d(t) {
      t && L(e);
    }
  };
}
function Ze(n) {
  let e, t, l, i, f, o, s, r = !/*isArray*/
  n[4] && Pe(n);
  const _ = [Tt, Pt], a = [];
  function d(u, m) {
    return m & /*json, items*/
    33 && (l = null), l == null && (l = ae(
      /*json*/
      u[0][
        /*i*/
        u[10]
      ]
    ) === "object"), l ? 0 : 1;
  }
  return i = d(n, -1), f = a[i] = _[i](n), {
    c() {
      e = A("li"), r && r.c(), t = ge(), f.c(), o = ge(), F(e, "class", "svelte-6z96o6");
    },
    m(u, m) {
      S(u, e, m), r && r.m(e, null), N(e, t), a[i].m(e, null), N(e, o), s = !0;
    },
    p(u, m) {
      /*isArray*/
      u[4] ? r && (r.d(1), r = null) : r ? r.p(u, m) : (r = Pe(u), r.c(), r.m(e, t));
      let h = i;
      i = d(u, m), i === h ? a[i].p(u, m) : (je(), Q(a[h], 1, 1, () => {
        a[h] = null;
      }), qe(), f = a[i], f ? f.p(u, m) : (f = a[i] = _[i](u), f.c()), Y(f, 1), f.m(e, o));
    },
    i(u) {
      s || (Y(f), s = !0);
    },
    o(u) {
      Q(f), s = !1;
    },
    d(u) {
      u && L(e), r && r.d(), a[i].d();
    }
  };
}
function Ee(n) {
  let e;
  return {
    c() {
      e = A("span"), e.textContent = ",", F(e, "class", "_jsonSep svelte-6z96o6");
    },
    m(t, l) {
      S(t, e, l);
    },
    d(t) {
      t && L(e);
    }
  };
}
function De(n) {
  let e;
  return {
    c() {
      e = A("span"), e.textContent = ",", F(e, "class", "_jsonSep svelte-6z96o6");
    },
    m(t, l) {
      S(t, e, l);
    },
    d(t) {
      t && L(e);
    }
  };
}
function Ie(n) {
  let e;
  return {
    c() {
      e = A("span"), e.textContent = ",", F(e, "class", "_jsonSep svelte-6z96o6");
    },
    m(t, l) {
      S(t, e, l);
    },
    d(t) {
      t && L(e);
    }
  };
}
function Zt(n) {
  let e, t, l, i;
  const f = [Bt, Mt, At], o = [];
  function s(r, _) {
    return (
      /*items*/
      r[5].length ? (
        /*collapsed*/
        r[7] ? 1 : 2
      ) : 0
    );
  }
  return e = s(n), t = o[e] = f[e](n), {
    c() {
      t.c(), l = ue();
    },
    m(r, _) {
      o[e].m(r, _), S(r, l, _), i = !0;
    },
    p(r, [_]) {
      let a = e;
      e = s(r), e === a ? o[e].p(r, _) : (je(), Q(o[a], 1, 1, () => {
        o[a] = null;
      }), qe(), t = o[e], t ? t.p(r, _) : (t = o[e] = f[e](r), t.c()), Y(t, 1), t.m(l.parentNode, l));
    },
    i(r) {
      i || (Y(t), i = !0);
    },
    o(r) {
      Q(t), i = !1;
    },
    d(r) {
      r && L(l), o[e].d(r);
    }
  };
}
function ae(n) {
  return n === null ? "null" : typeof n;
}
function Je(n) {
  const e = ae(n);
  return e === "string" ? `"${n}"` : e === "function" ? "f () {...}" : e === "symbol" ? n.toString() : n;
}
function Et(n, e, t) {
  let { json: l } = e, { depth: i = 1 / 0 } = e, { _cur: f = 0 } = e, { _last: o = !0 } = e, s, r = !1, _ = ["", ""], a = !1;
  function d() {
    t(7, a = !a);
  }
  function u(m) {
    m instanceof KeyboardEvent && ["Enter", " "].includes(m.key) && d();
  }
  return n.$$set = (m) => {
    "json" in m && t(0, l = m.json), "depth" in m && t(1, i = m.depth), "_cur" in m && t(2, f = m._cur), "_last" in m && t(3, o = m._last);
  }, n.$$.update = () => {
    n.$$.dirty & /*json, isArray*/
    17 && (t(5, s = ae(l) === "object" ? Object.keys(l) : []), t(4, r = Array.isArray(l)), t(6, _ = r ? ["[", "]"] : ["{", "}"])), n.$$.dirty & /*depth, _cur*/
    6 && t(7, a = i < f);
  }, [
    l,
    i,
    f,
    o,
    r,
    s,
    _,
    a,
    d,
    u
  ];
}
class dt extends Ct {
  constructor(e) {
    super(), St(this, e, Et, Zt, Nt, { json: 0, depth: 1, _cur: 2, _last: 3 });
  }
}
const {
  SvelteComponent: Dt,
  assign: It,
  create_slot: Jt,
  detach: Kt,
  element: Ot,
  get_all_dirty_from_scope: Xt,
  get_slot_changes: Yt,
  get_spread_update: Gt,
  init: Rt,
  insert: Ut,
  safe_not_equal: Ht,
  set_dynamic_element_data: Ke,
  set_style: V,
  toggle_class: K,
  transition_in: mt,
  transition_out: bt,
  update_slot_base: Qt
} = window.__gradio__svelte__internal;
function Wt(n) {
  let e, t, l;
  const i = (
    /*#slots*/
    n[17].default
  ), f = Jt(
    i,
    n,
    /*$$scope*/
    n[16],
    null
  );
  let o = [
    { "data-testid": (
      /*test_id*/
      n[7]
    ) },
    { id: (
      /*elem_id*/
      n[2]
    ) },
    {
      class: t = "block " + /*elem_classes*/
      n[3].join(" ") + " svelte-1t38q2d"
    }
  ], s = {};
  for (let r = 0; r < o.length; r += 1)
    s = It(s, o[r]);
  return {
    c() {
      e = Ot(
        /*tag*/
        n[14]
      ), f && f.c(), Ke(
        /*tag*/
        n[14]
      )(e, s), K(
        e,
        "hidden",
        /*visible*/
        n[10] === !1
      ), K(
        e,
        "padded",
        /*padding*/
        n[6]
      ), K(
        e,
        "border_focus",
        /*border_mode*/
        n[5] === "focus"
      ), K(e, "hide-container", !/*explicit_call*/
      n[8] && !/*container*/
      n[9]), V(e, "height", typeof /*height*/
      n[0] == "number" ? (
        /*height*/
        n[0] + "px"
      ) : void 0), V(e, "width", typeof /*width*/
      n[1] == "number" ? `calc(min(${/*width*/
      n[1]}px, 100%))` : void 0), V(
        e,
        "border-style",
        /*variant*/
        n[4]
      ), V(
        e,
        "overflow",
        /*allow_overflow*/
        n[11] ? "visible" : "hidden"
      ), V(
        e,
        "flex-grow",
        /*scale*/
        n[12]
      ), V(e, "min-width", `calc(min(${/*min_width*/
      n[13]}px, 100%))`), V(e, "border-width", "var(--block-border-width)");
    },
    m(r, _) {
      Ut(r, e, _), f && f.m(e, null), l = !0;
    },
    p(r, _) {
      f && f.p && (!l || _ & /*$$scope*/
      65536) && Qt(
        f,
        i,
        r,
        /*$$scope*/
        r[16],
        l ? Yt(
          i,
          /*$$scope*/
          r[16],
          _,
          null
        ) : Xt(
          /*$$scope*/
          r[16]
        ),
        null
      ), Ke(
        /*tag*/
        r[14]
      )(e, s = Gt(o, [
        (!l || _ & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          r[7]
        ) },
        (!l || _ & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          r[2]
        ) },
        (!l || _ & /*elem_classes*/
        8 && t !== (t = "block " + /*elem_classes*/
        r[3].join(" ") + " svelte-1t38q2d")) && { class: t }
      ])), K(
        e,
        "hidden",
        /*visible*/
        r[10] === !1
      ), K(
        e,
        "padded",
        /*padding*/
        r[6]
      ), K(
        e,
        "border_focus",
        /*border_mode*/
        r[5] === "focus"
      ), K(e, "hide-container", !/*explicit_call*/
      r[8] && !/*container*/
      r[9]), _ & /*height*/
      1 && V(e, "height", typeof /*height*/
      r[0] == "number" ? (
        /*height*/
        r[0] + "px"
      ) : void 0), _ & /*width*/
      2 && V(e, "width", typeof /*width*/
      r[1] == "number" ? `calc(min(${/*width*/
      r[1]}px, 100%))` : void 0), _ & /*variant*/
      16 && V(
        e,
        "border-style",
        /*variant*/
        r[4]
      ), _ & /*allow_overflow*/
      2048 && V(
        e,
        "overflow",
        /*allow_overflow*/
        r[11] ? "visible" : "hidden"
      ), _ & /*scale*/
      4096 && V(
        e,
        "flex-grow",
        /*scale*/
        r[12]
      ), _ & /*min_width*/
      8192 && V(e, "min-width", `calc(min(${/*min_width*/
      r[13]}px, 100%))`);
    },
    i(r) {
      l || (mt(f, r), l = !0);
    },
    o(r) {
      bt(f, r), l = !1;
    },
    d(r) {
      r && Kt(e), f && f.d(r);
    }
  };
}
function xt(n) {
  let e, t = (
    /*tag*/
    n[14] && Wt(n)
  );
  return {
    c() {
      t && t.c();
    },
    m(l, i) {
      t && t.m(l, i), e = !0;
    },
    p(l, [i]) {
      /*tag*/
      l[14] && t.p(l, i);
    },
    i(l) {
      e || (mt(t, l), e = !0);
    },
    o(l) {
      bt(t, l), e = !1;
    },
    d(l) {
      t && t.d(l);
    }
  };
}
function $t(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e, { height: f = void 0 } = e, { width: o = void 0 } = e, { elem_id: s = "" } = e, { elem_classes: r = [] } = e, { variant: _ = "solid" } = e, { border_mode: a = "base" } = e, { padding: d = !0 } = e, { type: u = "normal" } = e, { test_id: m = void 0 } = e, { explicit_call: h = !1 } = e, { container: v = !0 } = e, { visible: C = !0 } = e, { allow_overflow: j = !0 } = e, { scale: b = null } = e, { min_width: c = 0 } = e, g = u === "fieldset" ? "fieldset" : "div";
  return n.$$set = (k) => {
    "height" in k && t(0, f = k.height), "width" in k && t(1, o = k.width), "elem_id" in k && t(2, s = k.elem_id), "elem_classes" in k && t(3, r = k.elem_classes), "variant" in k && t(4, _ = k.variant), "border_mode" in k && t(5, a = k.border_mode), "padding" in k && t(6, d = k.padding), "type" in k && t(15, u = k.type), "test_id" in k && t(7, m = k.test_id), "explicit_call" in k && t(8, h = k.explicit_call), "container" in k && t(9, v = k.container), "visible" in k && t(10, C = k.visible), "allow_overflow" in k && t(11, j = k.allow_overflow), "scale" in k && t(12, b = k.scale), "min_width" in k && t(13, c = k.min_width), "$$scope" in k && t(16, i = k.$$scope);
  }, [
    f,
    o,
    s,
    r,
    _,
    a,
    d,
    m,
    h,
    v,
    C,
    j,
    b,
    c,
    g,
    u,
    i,
    l
  ];
}
class el extends Dt {
  constructor(e) {
    super(), Rt(this, e, $t, xt, Ht, {
      height: 0,
      width: 1,
      elem_id: 2,
      elem_classes: 3,
      variant: 4,
      border_mode: 5,
      padding: 6,
      type: 15,
      test_id: 7,
      explicit_call: 8,
      container: 9,
      visible: 10,
      allow_overflow: 11,
      scale: 12,
      min_width: 13
    });
  }
}
const tl = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], Oe = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
tl.reduce(
  (n, { color: e, primary: t, secondary: l }) => ({
    ...n,
    [e]: {
      primary: Oe[e][t],
      secondary: Oe[e][l]
    }
  }),
  {}
);
function $(n) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; n > 1e3 && t < e.length - 1; )
    n /= 1e3, t++;
  let l = e[t];
  return (Number.isInteger(n) ? n : n.toFixed(1)) + l;
}
function be() {
}
function ll(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
const gt = typeof window < "u";
let Xe = gt ? () => window.performance.now() : () => Date.now(), pt = gt ? (n) => requestAnimationFrame(n) : be;
const te = /* @__PURE__ */ new Set();
function kt(n) {
  te.forEach((e) => {
    e.c(n) || (te.delete(e), e.f());
  }), te.size !== 0 && pt(kt);
}
function nl(n) {
  let e;
  return te.size === 0 && pt(kt), {
    promise: new Promise((t) => {
      te.add(e = { c: n, f: t });
    }),
    abort() {
      te.delete(e);
    }
  };
}
const W = [];
function il(n, e = be) {
  let t;
  const l = /* @__PURE__ */ new Set();
  function i(s) {
    if (ll(n, s) && (n = s, t)) {
      const r = !W.length;
      for (const _ of l)
        _[1](), W.push(_, n);
      if (r) {
        for (let _ = 0; _ < W.length; _ += 2)
          W[_][0](W[_ + 1]);
        W.length = 0;
      }
    }
  }
  function f(s) {
    i(s(n));
  }
  function o(s, r = be) {
    const _ = [s, r];
    return l.add(_), l.size === 1 && (t = e(i, f) || be), s(n), () => {
      l.delete(_), l.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: f, subscribe: o };
}
function Ye(n) {
  return Object.prototype.toString.call(n) === "[object Date]";
}
function ye(n, e, t, l) {
  if (typeof t == "number" || Ye(t)) {
    const i = l - t, f = (t - e) / (n.dt || 1 / 60), o = n.opts.stiffness * i, s = n.opts.damping * f, r = (o - s) * n.inv_mass, _ = (f + r) * n.dt;
    return Math.abs(_) < n.opts.precision && Math.abs(i) < n.opts.precision ? l : (n.settled = !1, Ye(t) ? new Date(t.getTime() + _) : t + _);
  } else {
    if (Array.isArray(t))
      return t.map(
        (i, f) => ye(n, e[f], t[f], l[f])
      );
    if (typeof t == "object") {
      const i = {};
      for (const f in t)
        i[f] = ye(n, e[f], t[f], l[f]);
      return i;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function Ge(n, e = {}) {
  const t = il(n), { stiffness: l = 0.15, damping: i = 0.8, precision: f = 0.01 } = e;
  let o, s, r, _ = n, a = n, d = 1, u = 0, m = !1;
  function h(C, j = {}) {
    a = C;
    const b = r = {};
    return n == null || j.hard || v.stiffness >= 1 && v.damping >= 1 ? (m = !0, o = Xe(), _ = C, t.set(n = a), Promise.resolve()) : (j.soft && (u = 1 / ((j.soft === !0 ? 0.5 : +j.soft) * 60), d = 0), s || (o = Xe(), m = !1, s = nl((c) => {
      if (m)
        return m = !1, s = null, !1;
      d = Math.min(d + u, 1);
      const g = {
        inv_mass: d,
        opts: v,
        settled: !0,
        dt: (c - o) * 60 / 1e3
      }, k = ye(g, _, n, a);
      return o = c, _ = n, t.set(n = k), g.settled && (s = null), !g.settled;
    })), new Promise((c) => {
      s.promise.then(() => {
        b === r && c();
      });
    }));
  }
  const v = {
    set: h,
    update: (C, j) => h(C(a, n), j),
    subscribe: t.subscribe,
    stiffness: l,
    damping: i,
    precision: f
  };
  return v;
}
const {
  SvelteComponent: fl,
  append: P,
  attr: q,
  component_subscribe: Re,
  detach: sl,
  element: ol,
  init: rl,
  insert: _l,
  noop: Ue,
  safe_not_equal: al,
  set_style: de,
  svg_element: T,
  toggle_class: He
} = window.__gradio__svelte__internal, { onMount: ul } = window.__gradio__svelte__internal;
function cl(n) {
  let e, t, l, i, f, o, s, r, _, a, d, u;
  return {
    c() {
      e = ol("div"), t = T("svg"), l = T("g"), i = T("path"), f = T("path"), o = T("path"), s = T("path"), r = T("g"), _ = T("path"), a = T("path"), d = T("path"), u = T("path"), q(i, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), q(i, "fill", "#FF7C00"), q(i, "fill-opacity", "0.4"), q(i, "class", "svelte-43sxxs"), q(f, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), q(f, "fill", "#FF7C00"), q(f, "class", "svelte-43sxxs"), q(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), q(o, "fill", "#FF7C00"), q(o, "fill-opacity", "0.4"), q(o, "class", "svelte-43sxxs"), q(s, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), q(s, "fill", "#FF7C00"), q(s, "class", "svelte-43sxxs"), de(l, "transform", "translate(" + /*$top*/
      n[1][0] + "px, " + /*$top*/
      n[1][1] + "px)"), q(_, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), q(_, "fill", "#FF7C00"), q(_, "fill-opacity", "0.4"), q(_, "class", "svelte-43sxxs"), q(a, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), q(a, "fill", "#FF7C00"), q(a, "class", "svelte-43sxxs"), q(d, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), q(d, "fill", "#FF7C00"), q(d, "fill-opacity", "0.4"), q(d, "class", "svelte-43sxxs"), q(u, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), q(u, "fill", "#FF7C00"), q(u, "class", "svelte-43sxxs"), de(r, "transform", "translate(" + /*$bottom*/
      n[2][0] + "px, " + /*$bottom*/
      n[2][1] + "px)"), q(t, "viewBox", "-1200 -1200 3000 3000"), q(t, "fill", "none"), q(t, "xmlns", "http://www.w3.org/2000/svg"), q(t, "class", "svelte-43sxxs"), q(e, "class", "svelte-43sxxs"), He(
        e,
        "margin",
        /*margin*/
        n[0]
      );
    },
    m(m, h) {
      _l(m, e, h), P(e, t), P(t, l), P(l, i), P(l, f), P(l, o), P(l, s), P(t, r), P(r, _), P(r, a), P(r, d), P(r, u);
    },
    p(m, [h]) {
      h & /*$top*/
      2 && de(l, "transform", "translate(" + /*$top*/
      m[1][0] + "px, " + /*$top*/
      m[1][1] + "px)"), h & /*$bottom*/
      4 && de(r, "transform", "translate(" + /*$bottom*/
      m[2][0] + "px, " + /*$bottom*/
      m[2][1] + "px)"), h & /*margin*/
      1 && He(
        e,
        "margin",
        /*margin*/
        m[0]
      );
    },
    i: Ue,
    o: Ue,
    d(m) {
      m && sl(e);
    }
  };
}
function dl(n, e, t) {
  let l, i, { margin: f = !0 } = e;
  const o = Ge([0, 0]);
  Re(n, o, (u) => t(1, l = u));
  const s = Ge([0, 0]);
  Re(n, s, (u) => t(2, i = u));
  let r;
  async function _() {
    await Promise.all([o.set([125, 140]), s.set([-125, -140])]), await Promise.all([o.set([-125, 140]), s.set([125, -140])]), await Promise.all([o.set([-125, 0]), s.set([125, -0])]), await Promise.all([o.set([125, 0]), s.set([-125, 0])]);
  }
  async function a() {
    await _(), r || a();
  }
  async function d() {
    await Promise.all([o.set([125, 0]), s.set([-125, 0])]), a();
  }
  return ul(() => (d(), () => r = !0)), n.$$set = (u) => {
    "margin" in u && t(0, f = u.margin);
  }, [f, l, i, o, s];
}
class ml extends fl {
  constructor(e) {
    super(), rl(this, e, dl, cl, al, { margin: 0 });
  }
}
const {
  SvelteComponent: bl,
  append: H,
  attr: E,
  binding_callbacks: Qe,
  check_outros: ht,
  create_component: gl,
  create_slot: pl,
  destroy_component: kl,
  destroy_each: wt,
  detach: w,
  element: I,
  empty: fe,
  ensure_array_like: pe,
  get_all_dirty_from_scope: hl,
  get_slot_changes: wl,
  group_outros: yt,
  init: yl,
  insert: y,
  mount_component: vl,
  noop: ve,
  safe_not_equal: ql,
  set_data: B,
  set_style: X,
  space: D,
  text: z,
  toggle_class: M,
  transition_in: ne,
  transition_out: ie,
  update_slot_base: jl
} = window.__gradio__svelte__internal, { tick: Cl } = window.__gradio__svelte__internal, { onDestroy: zl } = window.__gradio__svelte__internal, Fl = (n) => ({}), We = (n) => ({});
function xe(n, e, t) {
  const l = n.slice();
  return l[38] = e[t], l[40] = t, l;
}
function $e(n, e, t) {
  const l = n.slice();
  return l[38] = e[t], l;
}
function Ll(n) {
  let e, t = (
    /*i18n*/
    n[1]("common.error") + ""
  ), l, i, f;
  const o = (
    /*#slots*/
    n[29].error
  ), s = pl(
    o,
    n,
    /*$$scope*/
    n[28],
    We
  );
  return {
    c() {
      e = I("span"), l = z(t), i = D(), s && s.c(), E(e, "class", "error svelte-1txqlrd");
    },
    m(r, _) {
      y(r, e, _), H(e, l), y(r, i, _), s && s.m(r, _), f = !0;
    },
    p(r, _) {
      (!f || _[0] & /*i18n*/
      2) && t !== (t = /*i18n*/
      r[1]("common.error") + "") && B(l, t), s && s.p && (!f || _[0] & /*$$scope*/
      268435456) && jl(
        s,
        o,
        r,
        /*$$scope*/
        r[28],
        f ? wl(
          o,
          /*$$scope*/
          r[28],
          _,
          Fl
        ) : hl(
          /*$$scope*/
          r[28]
        ),
        We
      );
    },
    i(r) {
      f || (ne(s, r), f = !0);
    },
    o(r) {
      ie(s, r), f = !1;
    },
    d(r) {
      r && (w(e), w(i)), s && s.d(r);
    }
  };
}
function Sl(n) {
  let e, t, l, i, f, o, s, r, _, a = (
    /*variant*/
    n[8] === "default" && /*show_eta_bar*/
    n[18] && /*show_progress*/
    n[6] === "full" && et(n)
  );
  function d(c, g) {
    if (
      /*progress*/
      c[7]
    )
      return Al;
    if (
      /*queue_position*/
      c[2] !== null && /*queue_size*/
      c[3] !== void 0 && /*queue_position*/
      c[2] >= 0
    )
      return Nl;
    if (
      /*queue_position*/
      c[2] === 0
    )
      return Vl;
  }
  let u = d(n), m = u && u(n), h = (
    /*timer*/
    n[5] && nt(n)
  );
  const v = [Tl, Pl], C = [];
  function j(c, g) {
    return (
      /*last_progress_level*/
      c[15] != null ? 0 : (
        /*show_progress*/
        c[6] === "full" ? 1 : -1
      )
    );
  }
  ~(f = j(n)) && (o = C[f] = v[f](n));
  let b = !/*timer*/
  n[5] && at(n);
  return {
    c() {
      a && a.c(), e = D(), t = I("div"), m && m.c(), l = D(), h && h.c(), i = D(), o && o.c(), s = D(), b && b.c(), r = fe(), E(t, "class", "progress-text svelte-1txqlrd"), M(
        t,
        "meta-text-center",
        /*variant*/
        n[8] === "center"
      ), M(
        t,
        "meta-text",
        /*variant*/
        n[8] === "default"
      );
    },
    m(c, g) {
      a && a.m(c, g), y(c, e, g), y(c, t, g), m && m.m(t, null), H(t, l), h && h.m(t, null), y(c, i, g), ~f && C[f].m(c, g), y(c, s, g), b && b.m(c, g), y(c, r, g), _ = !0;
    },
    p(c, g) {
      /*variant*/
      c[8] === "default" && /*show_eta_bar*/
      c[18] && /*show_progress*/
      c[6] === "full" ? a ? a.p(c, g) : (a = et(c), a.c(), a.m(e.parentNode, e)) : a && (a.d(1), a = null), u === (u = d(c)) && m ? m.p(c, g) : (m && m.d(1), m = u && u(c), m && (m.c(), m.m(t, l))), /*timer*/
      c[5] ? h ? h.p(c, g) : (h = nt(c), h.c(), h.m(t, null)) : h && (h.d(1), h = null), (!_ || g[0] & /*variant*/
      256) && M(
        t,
        "meta-text-center",
        /*variant*/
        c[8] === "center"
      ), (!_ || g[0] & /*variant*/
      256) && M(
        t,
        "meta-text",
        /*variant*/
        c[8] === "default"
      );
      let k = f;
      f = j(c), f === k ? ~f && C[f].p(c, g) : (o && (yt(), ie(C[k], 1, 1, () => {
        C[k] = null;
      }), ht()), ~f ? (o = C[f], o ? o.p(c, g) : (o = C[f] = v[f](c), o.c()), ne(o, 1), o.m(s.parentNode, s)) : o = null), /*timer*/
      c[5] ? b && (b.d(1), b = null) : b ? b.p(c, g) : (b = at(c), b.c(), b.m(r.parentNode, r));
    },
    i(c) {
      _ || (ne(o), _ = !0);
    },
    o(c) {
      ie(o), _ = !1;
    },
    d(c) {
      c && (w(e), w(t), w(i), w(s), w(r)), a && a.d(c), m && m.d(), h && h.d(), ~f && C[f].d(c), b && b.d(c);
    }
  };
}
function et(n) {
  let e, t = `translateX(${/*eta_level*/
  (n[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = I("div"), E(e, "class", "eta-bar svelte-1txqlrd"), X(e, "transform", t);
    },
    m(l, i) {
      y(l, e, i);
    },
    p(l, i) {
      i[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (l[17] || 0) * 100 - 100}%)`) && X(e, "transform", t);
    },
    d(l) {
      l && w(e);
    }
  };
}
function Vl(n) {
  let e;
  return {
    c() {
      e = z("processing |");
    },
    m(t, l) {
      y(t, e, l);
    },
    p: ve,
    d(t) {
      t && w(e);
    }
  };
}
function Nl(n) {
  let e, t = (
    /*queue_position*/
    n[2] + 1 + ""
  ), l, i, f, o;
  return {
    c() {
      e = z("queue: "), l = z(t), i = z("/"), f = z(
        /*queue_size*/
        n[3]
      ), o = z(" |");
    },
    m(s, r) {
      y(s, e, r), y(s, l, r), y(s, i, r), y(s, f, r), y(s, o, r);
    },
    p(s, r) {
      r[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      s[2] + 1 + "") && B(l, t), r[0] & /*queue_size*/
      8 && B(
        f,
        /*queue_size*/
        s[3]
      );
    },
    d(s) {
      s && (w(e), w(l), w(i), w(f), w(o));
    }
  };
}
function Al(n) {
  let e, t = pe(
    /*progress*/
    n[7]
  ), l = [];
  for (let i = 0; i < t.length; i += 1)
    l[i] = lt($e(n, t, i));
  return {
    c() {
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      e = fe();
    },
    m(i, f) {
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(i, f);
      y(i, e, f);
    },
    p(i, f) {
      if (f[0] & /*progress*/
      128) {
        t = pe(
          /*progress*/
          i[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const s = $e(i, t, o);
          l[o] ? l[o].p(s, f) : (l[o] = lt(s), l[o].c(), l[o].m(e.parentNode, e));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = t.length;
      }
    },
    d(i) {
      i && w(e), wt(l, i);
    }
  };
}
function tt(n) {
  let e, t = (
    /*p*/
    n[38].unit + ""
  ), l, i, f = " ", o;
  function s(a, d) {
    return (
      /*p*/
      a[38].length != null ? Bl : Ml
    );
  }
  let r = s(n), _ = r(n);
  return {
    c() {
      _.c(), e = D(), l = z(t), i = z(" | "), o = z(f);
    },
    m(a, d) {
      _.m(a, d), y(a, e, d), y(a, l, d), y(a, i, d), y(a, o, d);
    },
    p(a, d) {
      r === (r = s(a)) && _ ? _.p(a, d) : (_.d(1), _ = r(a), _ && (_.c(), _.m(e.parentNode, e))), d[0] & /*progress*/
      128 && t !== (t = /*p*/
      a[38].unit + "") && B(l, t);
    },
    d(a) {
      a && (w(e), w(l), w(i), w(o)), _.d(a);
    }
  };
}
function Ml(n) {
  let e = $(
    /*p*/
    n[38].index || 0
  ) + "", t;
  return {
    c() {
      t = z(e);
    },
    m(l, i) {
      y(l, t, i);
    },
    p(l, i) {
      i[0] & /*progress*/
      128 && e !== (e = $(
        /*p*/
        l[38].index || 0
      ) + "") && B(t, e);
    },
    d(l) {
      l && w(t);
    }
  };
}
function Bl(n) {
  let e = $(
    /*p*/
    n[38].index || 0
  ) + "", t, l, i = $(
    /*p*/
    n[38].length
  ) + "", f;
  return {
    c() {
      t = z(e), l = z("/"), f = z(i);
    },
    m(o, s) {
      y(o, t, s), y(o, l, s), y(o, f, s);
    },
    p(o, s) {
      s[0] & /*progress*/
      128 && e !== (e = $(
        /*p*/
        o[38].index || 0
      ) + "") && B(t, e), s[0] & /*progress*/
      128 && i !== (i = $(
        /*p*/
        o[38].length
      ) + "") && B(f, i);
    },
    d(o) {
      o && (w(t), w(l), w(f));
    }
  };
}
function lt(n) {
  let e, t = (
    /*p*/
    n[38].index != null && tt(n)
  );
  return {
    c() {
      t && t.c(), e = fe();
    },
    m(l, i) {
      t && t.m(l, i), y(l, e, i);
    },
    p(l, i) {
      /*p*/
      l[38].index != null ? t ? t.p(l, i) : (t = tt(l), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(l) {
      l && w(e), t && t.d(l);
    }
  };
}
function nt(n) {
  let e, t = (
    /*eta*/
    n[0] ? `/${/*formatted_eta*/
    n[19]}` : ""
  ), l, i;
  return {
    c() {
      e = z(
        /*formatted_timer*/
        n[20]
      ), l = z(t), i = z("s");
    },
    m(f, o) {
      y(f, e, o), y(f, l, o), y(f, i, o);
    },
    p(f, o) {
      o[0] & /*formatted_timer*/
      1048576 && B(
        e,
        /*formatted_timer*/
        f[20]
      ), o[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      f[0] ? `/${/*formatted_eta*/
      f[19]}` : "") && B(l, t);
    },
    d(f) {
      f && (w(e), w(l), w(i));
    }
  };
}
function Pl(n) {
  let e, t;
  return e = new ml({
    props: { margin: (
      /*variant*/
      n[8] === "default"
    ) }
  }), {
    c() {
      gl(e.$$.fragment);
    },
    m(l, i) {
      vl(e, l, i), t = !0;
    },
    p(l, i) {
      const f = {};
      i[0] & /*variant*/
      256 && (f.margin = /*variant*/
      l[8] === "default"), e.$set(f);
    },
    i(l) {
      t || (ne(e.$$.fragment, l), t = !0);
    },
    o(l) {
      ie(e.$$.fragment, l), t = !1;
    },
    d(l) {
      kl(e, l);
    }
  };
}
function Tl(n) {
  let e, t, l, i, f, o = `${/*last_progress_level*/
  n[15] * 100}%`, s = (
    /*progress*/
    n[7] != null && it(n)
  );
  return {
    c() {
      e = I("div"), t = I("div"), s && s.c(), l = D(), i = I("div"), f = I("div"), E(t, "class", "progress-level-inner svelte-1txqlrd"), E(f, "class", "progress-bar svelte-1txqlrd"), X(f, "width", o), E(i, "class", "progress-bar-wrap svelte-1txqlrd"), E(e, "class", "progress-level svelte-1txqlrd");
    },
    m(r, _) {
      y(r, e, _), H(e, t), s && s.m(t, null), H(e, l), H(e, i), H(i, f), n[30](f);
    },
    p(r, _) {
      /*progress*/
      r[7] != null ? s ? s.p(r, _) : (s = it(r), s.c(), s.m(t, null)) : s && (s.d(1), s = null), _[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      r[15] * 100}%`) && X(f, "width", o);
    },
    i: ve,
    o: ve,
    d(r) {
      r && w(e), s && s.d(), n[30](null);
    }
  };
}
function it(n) {
  let e, t = pe(
    /*progress*/
    n[7]
  ), l = [];
  for (let i = 0; i < t.length; i += 1)
    l[i] = _t(xe(n, t, i));
  return {
    c() {
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      e = fe();
    },
    m(i, f) {
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(i, f);
      y(i, e, f);
    },
    p(i, f) {
      if (f[0] & /*progress_level, progress*/
      16512) {
        t = pe(
          /*progress*/
          i[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const s = xe(i, t, o);
          l[o] ? l[o].p(s, f) : (l[o] = _t(s), l[o].c(), l[o].m(e.parentNode, e));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = t.length;
      }
    },
    d(i) {
      i && w(e), wt(l, i);
    }
  };
}
function ft(n) {
  let e, t, l, i, f = (
    /*i*/
    n[40] !== 0 && Zl()
  ), o = (
    /*p*/
    n[38].desc != null && st(n)
  ), s = (
    /*p*/
    n[38].desc != null && /*progress_level*/
    n[14] && /*progress_level*/
    n[14][
      /*i*/
      n[40]
    ] != null && ot()
  ), r = (
    /*progress_level*/
    n[14] != null && rt(n)
  );
  return {
    c() {
      f && f.c(), e = D(), o && o.c(), t = D(), s && s.c(), l = D(), r && r.c(), i = fe();
    },
    m(_, a) {
      f && f.m(_, a), y(_, e, a), o && o.m(_, a), y(_, t, a), s && s.m(_, a), y(_, l, a), r && r.m(_, a), y(_, i, a);
    },
    p(_, a) {
      /*p*/
      _[38].desc != null ? o ? o.p(_, a) : (o = st(_), o.c(), o.m(t.parentNode, t)) : o && (o.d(1), o = null), /*p*/
      _[38].desc != null && /*progress_level*/
      _[14] && /*progress_level*/
      _[14][
        /*i*/
        _[40]
      ] != null ? s || (s = ot(), s.c(), s.m(l.parentNode, l)) : s && (s.d(1), s = null), /*progress_level*/
      _[14] != null ? r ? r.p(_, a) : (r = rt(_), r.c(), r.m(i.parentNode, i)) : r && (r.d(1), r = null);
    },
    d(_) {
      _ && (w(e), w(t), w(l), w(i)), f && f.d(_), o && o.d(_), s && s.d(_), r && r.d(_);
    }
  };
}
function Zl(n) {
  let e;
  return {
    c() {
      e = z(" /");
    },
    m(t, l) {
      y(t, e, l);
    },
    d(t) {
      t && w(e);
    }
  };
}
function st(n) {
  let e = (
    /*p*/
    n[38].desc + ""
  ), t;
  return {
    c() {
      t = z(e);
    },
    m(l, i) {
      y(l, t, i);
    },
    p(l, i) {
      i[0] & /*progress*/
      128 && e !== (e = /*p*/
      l[38].desc + "") && B(t, e);
    },
    d(l) {
      l && w(t);
    }
  };
}
function ot(n) {
  let e;
  return {
    c() {
      e = z("-");
    },
    m(t, l) {
      y(t, e, l);
    },
    d(t) {
      t && w(e);
    }
  };
}
function rt(n) {
  let e = (100 * /*progress_level*/
  (n[14][
    /*i*/
    n[40]
  ] || 0)).toFixed(1) + "", t, l;
  return {
    c() {
      t = z(e), l = z("%");
    },
    m(i, f) {
      y(i, t, f), y(i, l, f);
    },
    p(i, f) {
      f[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (i[14][
        /*i*/
        i[40]
      ] || 0)).toFixed(1) + "") && B(t, e);
    },
    d(i) {
      i && (w(t), w(l));
    }
  };
}
function _t(n) {
  let e, t = (
    /*p*/
    (n[38].desc != null || /*progress_level*/
    n[14] && /*progress_level*/
    n[14][
      /*i*/
      n[40]
    ] != null) && ft(n)
  );
  return {
    c() {
      t && t.c(), e = fe();
    },
    m(l, i) {
      t && t.m(l, i), y(l, e, i);
    },
    p(l, i) {
      /*p*/
      l[38].desc != null || /*progress_level*/
      l[14] && /*progress_level*/
      l[14][
        /*i*/
        l[40]
      ] != null ? t ? t.p(l, i) : (t = ft(l), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(l) {
      l && w(e), t && t.d(l);
    }
  };
}
function at(n) {
  let e, t;
  return {
    c() {
      e = I("p"), t = z(
        /*loading_text*/
        n[9]
      ), E(e, "class", "loading svelte-1txqlrd");
    },
    m(l, i) {
      y(l, e, i), H(e, t);
    },
    p(l, i) {
      i[0] & /*loading_text*/
      512 && B(
        t,
        /*loading_text*/
        l[9]
      );
    },
    d(l) {
      l && w(e);
    }
  };
}
function El(n) {
  let e, t, l, i, f;
  const o = [Sl, Ll], s = [];
  function r(_, a) {
    return (
      /*status*/
      _[4] === "pending" ? 0 : (
        /*status*/
        _[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(t = r(n)) && (l = s[t] = o[t](n)), {
    c() {
      e = I("div"), l && l.c(), E(e, "class", i = "wrap " + /*variant*/
      n[8] + " " + /*show_progress*/
      n[6] + " svelte-1txqlrd"), M(e, "hide", !/*status*/
      n[4] || /*status*/
      n[4] === "complete" || /*show_progress*/
      n[6] === "hidden"), M(
        e,
        "translucent",
        /*variant*/
        n[8] === "center" && /*status*/
        (n[4] === "pending" || /*status*/
        n[4] === "error") || /*translucent*/
        n[11] || /*show_progress*/
        n[6] === "minimal"
      ), M(
        e,
        "generating",
        /*status*/
        n[4] === "generating"
      ), M(
        e,
        "border",
        /*border*/
        n[12]
      ), X(
        e,
        "position",
        /*absolute*/
        n[10] ? "absolute" : "static"
      ), X(
        e,
        "padding",
        /*absolute*/
        n[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(_, a) {
      y(_, e, a), ~t && s[t].m(e, null), n[31](e), f = !0;
    },
    p(_, a) {
      let d = t;
      t = r(_), t === d ? ~t && s[t].p(_, a) : (l && (yt(), ie(s[d], 1, 1, () => {
        s[d] = null;
      }), ht()), ~t ? (l = s[t], l ? l.p(_, a) : (l = s[t] = o[t](_), l.c()), ne(l, 1), l.m(e, null)) : l = null), (!f || a[0] & /*variant, show_progress*/
      320 && i !== (i = "wrap " + /*variant*/
      _[8] + " " + /*show_progress*/
      _[6] + " svelte-1txqlrd")) && E(e, "class", i), (!f || a[0] & /*variant, show_progress, status, show_progress*/
      336) && M(e, "hide", !/*status*/
      _[4] || /*status*/
      _[4] === "complete" || /*show_progress*/
      _[6] === "hidden"), (!f || a[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && M(
        e,
        "translucent",
        /*variant*/
        _[8] === "center" && /*status*/
        (_[4] === "pending" || /*status*/
        _[4] === "error") || /*translucent*/
        _[11] || /*show_progress*/
        _[6] === "minimal"
      ), (!f || a[0] & /*variant, show_progress, status*/
      336) && M(
        e,
        "generating",
        /*status*/
        _[4] === "generating"
      ), (!f || a[0] & /*variant, show_progress, border*/
      4416) && M(
        e,
        "border",
        /*border*/
        _[12]
      ), a[0] & /*absolute*/
      1024 && X(
        e,
        "position",
        /*absolute*/
        _[10] ? "absolute" : "static"
      ), a[0] & /*absolute*/
      1024 && X(
        e,
        "padding",
        /*absolute*/
        _[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(_) {
      f || (ne(l), f = !0);
    },
    o(_) {
      ie(l), f = !1;
    },
    d(_) {
      _ && w(e), ~t && s[t].d(), n[31](null);
    }
  };
}
let me = [], we = !1;
async function Dl(n, e = !0) {
  if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && e !== !0)) {
    if (me.push(n), !we)
      we = !0;
    else
      return;
    await Cl(), requestAnimationFrame(() => {
      let t = [0, 0];
      for (let l = 0; l < me.length; l++) {
        const f = me[l].getBoundingClientRect();
        (l === 0 || f.top + window.scrollY <= t[0]) && (t[0] = f.top + window.scrollY, t[1] = l);
      }
      window.scrollTo({ top: t[0] - 20, behavior: "smooth" }), we = !1, me = [];
    });
  }
}
function Il(n, e, t) {
  let l, { $$slots: i = {}, $$scope: f } = e, { i18n: o } = e, { eta: s = null } = e, { queue: r = !1 } = e, { queue_position: _ } = e, { queue_size: a } = e, { status: d } = e, { scroll_to_output: u = !1 } = e, { timer: m = !0 } = e, { show_progress: h = "full" } = e, { message: v = null } = e, { progress: C = null } = e, { variant: j = "default" } = e, { loading_text: b = "Loading..." } = e, { absolute: c = !0 } = e, { translucent: g = !1 } = e, { border: k = !1 } = e, { autoscroll: ke } = e, se, oe = !1, ce = 0, R = 0, he = null, Le = 0, U = null, re, J = null, Se = !0;
  const vt = () => {
    t(25, ce = performance.now()), t(26, R = 0), oe = !0, Ve();
  };
  function Ve() {
    requestAnimationFrame(() => {
      t(26, R = (performance.now() - ce) / 1e3), oe && Ve();
    });
  }
  function Ne() {
    t(26, R = 0), oe && (oe = !1);
  }
  zl(() => {
    oe && Ne();
  });
  let Ae = null;
  function qt(p) {
    Qe[p ? "unshift" : "push"](() => {
      J = p, t(16, J), t(7, C), t(14, U), t(15, re);
    });
  }
  function jt(p) {
    Qe[p ? "unshift" : "push"](() => {
      se = p, t(13, se);
    });
  }
  return n.$$set = (p) => {
    "i18n" in p && t(1, o = p.i18n), "eta" in p && t(0, s = p.eta), "queue" in p && t(21, r = p.queue), "queue_position" in p && t(2, _ = p.queue_position), "queue_size" in p && t(3, a = p.queue_size), "status" in p && t(4, d = p.status), "scroll_to_output" in p && t(22, u = p.scroll_to_output), "timer" in p && t(5, m = p.timer), "show_progress" in p && t(6, h = p.show_progress), "message" in p && t(23, v = p.message), "progress" in p && t(7, C = p.progress), "variant" in p && t(8, j = p.variant), "loading_text" in p && t(9, b = p.loading_text), "absolute" in p && t(10, c = p.absolute), "translucent" in p && t(11, g = p.translucent), "border" in p && t(12, k = p.border), "autoscroll" in p && t(24, ke = p.autoscroll), "$$scope" in p && t(28, f = p.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*eta, old_eta, queue, timer_start*/
    169869313 && (s === null ? t(0, s = he) : r && t(0, s = (performance.now() - ce) / 1e3 + s), s != null && (t(19, Ae = s.toFixed(1)), t(27, he = s))), n.$$.dirty[0] & /*eta, timer_diff*/
    67108865 && t(17, Le = s === null || s <= 0 || !R ? null : Math.min(R / s, 1)), n.$$.dirty[0] & /*progress*/
    128 && C != null && t(18, Se = !1), n.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (C != null ? t(14, U = C.map((p) => {
      if (p.index != null && p.length != null)
        return p.index / p.length;
      if (p.progress != null)
        return p.progress;
    })) : t(14, U = null), U ? (t(15, re = U[U.length - 1]), J && (re === 0 ? t(16, J.style.transition = "0", J) : t(16, J.style.transition = "150ms", J))) : t(15, re = void 0)), n.$$.dirty[0] & /*status*/
    16 && (d === "pending" ? vt() : Ne()), n.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && se && u && (d === "pending" || d === "complete") && Dl(se, ke), n.$$.dirty[0] & /*status, message*/
    8388624, n.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, l = R.toFixed(1));
  }, [
    s,
    o,
    _,
    a,
    d,
    m,
    h,
    C,
    j,
    b,
    c,
    g,
    k,
    se,
    U,
    re,
    J,
    Le,
    Se,
    Ae,
    l,
    r,
    u,
    v,
    ke,
    ce,
    R,
    he,
    f,
    i,
    qt,
    jt
  ];
}
class Jl extends bl {
  constructor(e) {
    super(), yl(
      this,
      e,
      Il,
      El,
      ql,
      {
        i18n: 1,
        eta: 0,
        queue: 21,
        queue_position: 2,
        queue_size: 3,
        status: 4,
        scroll_to_output: 22,
        timer: 5,
        show_progress: 6,
        message: 23,
        progress: 7,
        variant: 8,
        loading_text: 9,
        absolute: 10,
        translucent: 11,
        border: 12,
        autoscroll: 24
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: Kl,
  assign: Ol,
  check_outros: Xl,
  create_component: Ce,
  destroy_component: ze,
  detach: Yl,
  get_spread_object: Gl,
  get_spread_update: Rl,
  group_outros: Ul,
  init: Hl,
  insert: Ql,
  mount_component: Fe,
  safe_not_equal: Wl,
  space: xl,
  transition_in: ee,
  transition_out: _e
} = window.__gradio__svelte__internal;
function ut(n) {
  let e, t;
  const l = [
    { autoscroll: (
      /*gradio*/
      n[8].autoscroll
    ) },
    { i18n: (
      /*gradio*/
      n[8].i18n
    ) },
    /*loading_status*/
    n[7]
  ];
  let i = {};
  for (let f = 0; f < l.length; f += 1)
    i = Ol(i, l[f]);
  return e = new Jl({ props: i }), {
    c() {
      Ce(e.$$.fragment);
    },
    m(f, o) {
      Fe(e, f, o), t = !0;
    },
    p(f, o) {
      const s = o & /*gradio, loading_status*/
      384 ? Rl(l, [
        o & /*gradio*/
        256 && { autoscroll: (
          /*gradio*/
          f[8].autoscroll
        ) },
        o & /*gradio*/
        256 && { i18n: (
          /*gradio*/
          f[8].i18n
        ) },
        o & /*loading_status*/
        128 && Gl(
          /*loading_status*/
          f[7]
        )
      ]) : {};
      e.$set(s);
    },
    i(f) {
      t || (ee(e.$$.fragment, f), t = !0);
    },
    o(f) {
      _e(e.$$.fragment, f), t = !1;
    },
    d(f) {
      ze(e, f);
    }
  };
}
function $l(n) {
  let e, t, l, i = (
    /*loading_status*/
    n[7] && ut(n)
  );
  return t = new dt({ props: { json: (
    /*value*/
    n[3]
  ) } }), {
    c() {
      i && i.c(), e = xl(), Ce(t.$$.fragment);
    },
    m(f, o) {
      i && i.m(f, o), Ql(f, e, o), Fe(t, f, o), l = !0;
    },
    p(f, o) {
      /*loading_status*/
      f[7] ? i ? (i.p(f, o), o & /*loading_status*/
      128 && ee(i, 1)) : (i = ut(f), i.c(), ee(i, 1), i.m(e.parentNode, e)) : i && (Ul(), _e(i, 1, 1, () => {
        i = null;
      }), Xl());
      const s = {};
      o & /*value*/
      8 && (s.json = /*value*/
      f[3]), t.$set(s);
    },
    i(f) {
      l || (ee(i), ee(t.$$.fragment, f), l = !0);
    },
    o(f) {
      _e(i), _e(t.$$.fragment, f), l = !1;
    },
    d(f) {
      f && Yl(e), i && i.d(f), ze(t, f);
    }
  };
}
function en(n) {
  let e, t;
  return e = new el({
    props: {
      visible: (
        /*visible*/
        n[2]
      ),
      elem_id: (
        /*elem_id*/
        n[0]
      ),
      elem_classes: (
        /*elem_classes*/
        n[1]
      ),
      container: (
        /*container*/
        n[4]
      ),
      scale: (
        /*scale*/
        n[5]
      ),
      min_width: (
        /*min_width*/
        n[6]
      ),
      $$slots: { default: [$l] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Ce(e.$$.fragment);
    },
    m(l, i) {
      Fe(e, l, i), t = !0;
    },
    p(l, [i]) {
      const f = {};
      i & /*visible*/
      4 && (f.visible = /*visible*/
      l[2]), i & /*elem_id*/
      1 && (f.elem_id = /*elem_id*/
      l[0]), i & /*elem_classes*/
      2 && (f.elem_classes = /*elem_classes*/
      l[1]), i & /*container*/
      16 && (f.container = /*container*/
      l[4]), i & /*scale*/
      32 && (f.scale = /*scale*/
      l[5]), i & /*min_width*/
      64 && (f.min_width = /*min_width*/
      l[6]), i & /*$$scope, value, gradio, loading_status*/
      904 && (f.$$scope = { dirty: i, ctx: l }), e.$set(f);
    },
    i(l) {
      t || (ee(e.$$.fragment, l), t = !0);
    },
    o(l) {
      _e(e.$$.fragment, l), t = !1;
    },
    d(l) {
      ze(e, l);
    }
  };
}
function tn(n, e, t) {
  let { elem_id: l = "" } = e, { elem_classes: i = [] } = e, { visible: f = !0 } = e, { value: o = !1 } = e, { container: s = !0 } = e, { scale: r = null } = e, { min_width: _ = void 0 } = e, { loading_status: a } = e, { gradio: d } = e;
  return n.$$set = (u) => {
    "elem_id" in u && t(0, l = u.elem_id), "elem_classes" in u && t(1, i = u.elem_classes), "visible" in u && t(2, f = u.visible), "value" in u && t(3, o = u.value), "container" in u && t(4, s = u.container), "scale" in u && t(5, r = u.scale), "min_width" in u && t(6, _ = u.min_width), "loading_status" in u && t(7, a = u.loading_status), "gradio" in u && t(8, d = u.gradio);
  }, [
    l,
    i,
    f,
    o,
    s,
    r,
    _,
    a,
    d
  ];
}
class ln extends Kl {
  constructor(e) {
    super(), Hl(this, e, tn, en, Wl, {
      elem_id: 0,
      elem_classes: 1,
      visible: 2,
      value: 3,
      container: 4,
      scale: 5,
      min_width: 6,
      loading_status: 7,
      gradio: 8
    });
  }
}
export {
  ln as default
};
