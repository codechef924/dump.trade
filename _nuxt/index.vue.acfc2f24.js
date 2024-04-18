import { _ as oe } from "./Test.vue.c3938196.js";
import { _ as ae } from "./Loader.4effe481.js";
import {
  _ as A,
  a0 as D,
  ah as Y,
  aj as O,
  a1 as a,
  a2 as r,
  a5 as n,
  a6 as t,
  a7 as v,
  a8 as H,
  aa as $,
  bQ as q,
  ay as m,
  af as C,
  a3 as s,
  a4 as i,
  a9 as B,
  ab as j,
  ao as Q,
  av as F,
  aN as ne,
  aD as U,
  b1 as ie,
  aF as G,
  aS as x,
  bf as le,
  aT as re,
  bk as ue,
  $ as de,
  bg as ce,
  ai as me,
  ak as pe,
  bR as _e,
  al as ge,
  am as fe,
  ap as ve,
  b0 as z,
  bE as ye,
  aE as he,
  bS as be,
  bF as K,
  bh as we,
  bj as $e,
  bi as W,
} from "./entry.3d3e841c.js";
import { c as ke, d as Te } from "./marketplace.70bca570.js";
import { a as Be, u as Ee, _ as Ce } from "./useForm.16b109bc.js";
import { _ as Me } from "./LoadingDots.403b1b44.js";
import { r as X } from "./index.abdde73c.js";
import { B as L } from "./bignumber.266e6c56.js";
const Le = {
    class: "grid gap-5 grid-rows-[auto_1fr_auto] p-4 border-t border-secondary",
  },
  De = t("h2", { class: "typo-caption-bold-s uppercase" }, "History", -1),
  Ae = { key: 0, class: "grid gap-3 content-start" },
  Se = t(
    "thead",
    { class: "typo-caption-s uppercase text-left text-secondary-40%" },
    [
      t("tr", { class: "grid grid-cols-[1.5fr_1.5fr_3fr_1fr]" }, [
        t("th", null, "TX"),
        t("th", null, "Date"),
        t("th", null, "Type"),
        t("th", null, "Tokens"),
      ]),
    ],
    -1
  ),
  Ue = { class: "grid gap-2 typo-caption-s" },
  Pe = { key: 2, class: "typo-caption-bold-s" },
  Ve = { class: "grid gap-2 grid-flow-col justify-center" },
  I = 3,
  He = A({
    __name: "History",
    props: { isLoading: { type: Boolean }, listing: {} },
    setup(k) {
      const e = k,
        d = D(1),
        g = D([]),
        p = Y(() => Math.ceil(g.value.length / I));
      return (
        O(
          () => {
            var c;
            return (c = e.listing) == null ? void 0 : c.id;
          },
          async (c) => {
            c && (g.value = await ke(c));
          },
          { immediate: !0 }
        ),
        (c, l) => {
          const b = ae,
            f = j,
            w = Q;
          return (
            a(),
            r("div", Le, [
              De,
              !c.isLoading && n(p) > 0
                ? (a(),
                  r("table", Ae, [
                    Se,
                    t("tbody", Ue, [
                      (a(!0),
                      r(
                        v,
                        null,
                        H(
                          n(g).slice((n(d) - 1) * I, (n(d) - 1) * I + I),
                          (u, o) => (
                            a(),
                            r(
                              "tr",
                              {
                                key: `item-${o}`,
                                class: "grid grid-cols-[1.5fr_1.5fr_3fr_1fr]",
                              },
                              [
                                t("td", null, $(n(q)(u.address)), 1),
                                t(
                                  "td",
                                  null,
                                  $(
                                    new Date(u.timestamp * 1e3).toLocaleString()
                                  ),
                                  1
                                ),
                                t("td", null, [
                                  u.type == "OrderCreated"
                                    ? (a(),
                                      r(
                                        v,
                                        { key: 0 },
                                        [m("Listing created")],
                                        64
                                      ))
                                    : u.type == "OrderFulfilled"
                                    ? (a(),
                                      r(
                                        v,
                                        { key: 1 },
                                        [m("Bought tokens")],
                                        64
                                      ))
                                    : u.type == "OrderSettle"
                                    ? (a(),
                                      r(
                                        v,
                                        { key: 2 },
                                        [m("Order settled")],
                                        64
                                      ))
                                    : (a(),
                                      r(v, { key: 3 }, [m($(u.type), 1)], 64)),
                                ]),
                                t("td", null, [
                                  u.tokens
                                    ? (a(),
                                      r(v, { key: 0 }, [m($(u.tokens), 1)], 64))
                                    : (a(), r(v, { key: 1 }, [m("-")], 64)),
                                ]),
                              ]
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                  ]))
                : c.isLoading
                ? (a(),
                  C(b, { key: 1, class: "self-center justify-self-center" }))
                : (a(), r("div", Pe, " No data found ")),
              t("div", Ve, [
                s(
                  w,
                  {
                    onClick:
                      l[0] || (l[0] = (u) => (d.value = Math.max(1, n(d) - 1))),
                  },
                  {
                    default: i(() => [s(f, { name: "Arrow/Head/Left" })]),
                    _: 1,
                  }
                ),
                n(p) < 8
                  ? (a(!0),
                    r(
                      v,
                      { key: 0 },
                      H(
                        n(p),
                        (u) => (
                          a(),
                          C(
                            w,
                            {
                              key: `button-${u}`,
                              class: B([
                                c.$style.pageButton,
                                { [c.$style.isInactive]: n(d) !== u },
                              ]),
                              onClick: (o) => (d.value = u),
                            },
                            { default: i(() => [m($(u), 1)]), _: 2 },
                            1032,
                            ["class", "onClick"]
                          )
                        )
                      ),
                      128
                    ))
                  : (a(),
                    r(
                      v,
                      { key: 1 },
                      [
                        (a(),
                        r(
                          v,
                          null,
                          H(3, (u) =>
                            s(
                              w,
                              {
                                key: `button-${u}`,
                                class: B([
                                  c.$style.pageButton,
                                  { [c.$style.isInactive]: n(d) !== u },
                                ]),
                                onClick: (o) => (d.value = u),
                              },
                              { default: i(() => [m($(u), 1)]), _: 2 },
                              1032,
                              ["class", "onClick"]
                            )
                          ),
                          64
                        )),
                        s(
                          w,
                          {
                            class: B([
                              c.$style.pageButton,
                              c.$style.isInactive,
                            ]),
                          },
                          { default: i(() => [m("…")]), _: 1 },
                          8,
                          ["class"]
                        ),
                        (a(),
                        r(
                          v,
                          null,
                          H(3, (u) =>
                            s(
                              w,
                              {
                                key: `button-${u + n(p) - 3}`,
                                class: B([
                                  c.$style.pageButton,
                                  {
                                    [c.$style.isInactive]:
                                      n(d) !== u + n(p) - 3,
                                  },
                                ]),
                                onClick: (o) => (d.value = u + n(p) - 3),
                              },
                              {
                                default: i(() => [m($(u + n(p) - 3), 1)]),
                                _: 2,
                              },
                              1032,
                              ["class", "onClick"]
                            )
                          ),
                          64
                        )),
                      ],
                      64
                    )),
                s(
                  w,
                  {
                    onClick:
                      l[1] ||
                      (l[1] = (u) => (d.value = Math.min(n(p), n(d) + 1))),
                  },
                  {
                    default: i(() => [s(f, { name: "Arrow/Head/Right" })]),
                    _: 1,
                  }
                ),
              ]),
            ])
          );
        }
      );
    },
  }),
  Ie = "_pageButton_pxmll_1",
  Oe = "_isInactive_pxmll_4",
  je = { pageButton: Ie, isInactive: Oe },
  Ne = { $style: je },
  Re = F(He, [["__cssModules", Ne]]),
  qe = { class: "typo-caption-s" },
  Fe = { key: 0, class: "grid gap-1 grid-flow-col items-center" },
  Ge = { class: "typo-caption-bold-s text-right whitespace-nowrap" },
  ze = { key: 0, class: "text-secondary-40%" },
  J = A({
    __name: "LabelValue",
    props: {
      needsCustomGridColumn: { type: Boolean },
      value: {},
      unit: {},
      icon: {},
    },
    setup(k) {
      return (e, d) => {
        const g = j;
        return (
          a(),
          r(
            "div",
            {
              class: B([
                "grid items-center justify-between gap-5",
                { "grid-cols-[1fr_auto]": !e.needsCustomGridColumn },
              ]),
            },
            [
              t("div", qe, [ne(e.$slots, "default")]),
              e.value !== void 0
                ? (a(),
                  r("div", Fe, [
                    t("span", Ge, [
                      m($(e.value) + " ", 1),
                      e.unit ? (a(), r("span", ze, $(e.unit), 1)) : U("", !0),
                    ]),
                    e.icon
                      ? (a(), C(g, { key: 0, name: e.icon }, null, 8, ["name"]))
                      : U("", !0),
                  ]))
                : U("", !0),
            ],
            2
          )
        );
      };
    },
  }),
  Ke = { class: "grid gap-2 grid-cols-[auto_1fr_auto] items-center" },
  We = t(
    "h1",
    { class: "typo-h6" },
    [t("span", { class: "text-secondary-40%" }, "$"), m(" SLUM")],
    -1
  ),
  Xe = {
    class:
      "grid gap-1 grid-flow-col items-center px-2 py-1 border border-secondary",
  },
  Ye = t("span", { class: "typo-caption-s" }, "+2.6%", -1),
  Qe = { class: "flex justify-between" },
  xe = { class: "grid gap-1 grid-flow-col items-center justify-start" },
  Je = t(
    "span",
    { class: "typo-caption-s text-secondary-40%" },
    "CoinGecko",
    -1
  ),
  Ze = { class: "grid gap-1 grid-flow-col items-center justify-start" },
  es = t(
    "span",
    { class: "typo-caption-s text-secondary-40%" },
    "Etherscan",
    -1
  ),
  ss = { class: "flex justify-between" },
  ts = { class: "grid gap-1 grid-flow-col items-center justify-start" },
  os = t("span", { class: "typo-caption-s text-secondary-40%" }, "Audit", -1),
  as = { class: "grid gap-1 grid-flow-col items-center justify-start" },
  ns = t(
    "span",
    { class: "typo-caption-s text-secondary-40%" },
    "DexScreener",
    -1
  ),
  is = { key: 0, class: "grid gap-2 p-4" },
  ls = A({
    __name: "Stats",
    props: { isLoading: { type: Boolean }, listing: {} },
    setup(k) {
      return (e, d) => {
        const g = Be,
          p = j,
          c = ie,
          l = J,
          b = G;
        return (
          a(),
          C(
            b,
            { class: "grid gap-2 content-start" },
            {
              default: i(() => [
                s(c, null, {
                  default: i(() => [
                    t("div", Ke, [
                      s(g, { icon: "Token/DUMP" }),
                      We,
                      t("div", Xe, [
                        s(p, { name: "Arrow/Head/Up", class: "w-5 h-5" }),
                        Ye,
                      ]),
                    ]),
                    t("div", null, [
                      t("div", Qe, [
                        t("div", xe, [
                          Je,
                          s(p, {
                            name: "Arrow/Diagonal/UpRight",
                            class: "w-5 h-5",
                          }),
                        ]),
                        t("div", Ze, [
                          es,
                          s(p, {
                            name: "Arrow/Diagonal/UpRight",
                            class: "w-5 h-5",
                          }),
                        ]),
                      ]),
                      t("div", ss, [
                        t("div", ts, [
                          os,
                          s(p, {
                            name: "Arrow/Diagonal/UpRight",
                            class: "w-5 h-5",
                          }),
                        ]),
                        t("div", as, [
                          ns,
                          s(p, {
                            name: "Arrow/Diagonal/UpRight",
                            class: "w-5 h-5",
                          }),
                        ]),
                      ]),
                    ]),
                  ]),
                  _: 1,
                }),
                !e.isLoading && e.listing
                  ? (a(),
                    r("div", is, [
                      s(
                        l,
                        { value: n(q)(e.listing.id) },
                        { default: i(() => [m("Order ID")]), _: 1 },
                        8,
                        ["value"]
                      ),
                      s(
                        l,
                        { value: n(q)(e.listing.requester) },
                        { default: i(() => [m("Creator")]), _: 1 },
                        8,
                        ["value"]
                      ),
                      s(
                        l,
                        { value: e.listing.availableTokens, unit: "$DUMP" },
                        { default: i(() => [m(" Offer ")]), _: 1 },
                        8,
                        ["value"]
                      ),
                      s(
                        l,
                        { value: e.listing.requestedETH, unit: "ETH" },
                        { default: i(() => [m(" for ")]), _: 1 },
                        8,
                        ["value"]
                      ),
                      s(
                        l,
                        { value: e.listing.pricePerToken, unit: "ETH" },
                        { default: i(() => [m(" Price/Token ")]), _: 1 },
                        8,
                        ["value"]
                      ),
                      s(
                        l,
                        { value: e.listing.partiallyFillable ? "YES" : "NO" },
                        { default: i(() => [m("Multi-Pool")]), _: 1 },
                        8,
                        ["value"]
                      ),
                      s(
                        l,
                        {
                          value:
                            e.listing.whitelistedAddress ===
                            "0x0000000000000000000000000000000000000000"
                              ? "YES"
                              : "NO",
                        },
                        { default: i(() => [m("Whitelist")]), _: 1 },
                        8,
                        ["value"]
                      ),
                    ]))
                  : U("", !0),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  }),
  rs = A({
    __name: "ProgressBar",
    props: { ratio: {} },
    setup(k) {
      return (
        x((e) => ({ b7c51fec: e.ratio })),
        (e, d) => (
          a(),
          r(
            "div",
            {
              class: B([
                e.$style.bar,
                "relative w-full h-4 bg-secondary-20% after:content after:absolute after:inset-0 after:bg-secondary after:origin-left after:transform",
              ]),
            },
            null,
            2
          )
        )
      );
    },
  }),
  us = "_bar_1ypui_1",
  ds = { bar: us },
  cs = { $style: ds },
  ms = F(rs, [["__cssModules", cs]]),
  ps = t("div", { class: "absolute w-full h-4" }, null, -1),
  _s = A({
    __name: "Range",
    props: le(
      { min: { default: 0 }, max: { default: 100 }, step: { default: 1 } },
      { modelValue: {} }
    ),
    emits: ["update:modelValue"],
    setup(k) {
      x((_) => ({ "73b466ac": n(u) }));
      const e = k;
      if (e.min >= e.max)
        throw new Error("`min` value should be lower than `max` value");
      const d = re(800),
        { currentMouseTarget: g, isMouseTargetLocked: p } = ue(),
        { isNavigationBlocked: c } = de(),
        l = ce(k, "modelValue"),
        b = D(!1),
        f = D(null),
        w = D(null),
        u = Y(() => ((l.value ?? e.min) - e.min) / (e.max - e.min));
      function o(_) {
        if (!f.value) return;
        const { left: T, width: E } = f.value.getBoundingClientRect(),
          V =
            Math.max(0, Math.min(1, (_.clientX - T) / E)) * (e.max - e.min) +
            e.min,
          N = e.min + e.step * Math.round((V - e.min) / e.step);
        l.value = Math.max(e.min, Math.min(e.max, N));
      }
      function y(_) {
        _.preventDefault(), o(_);
      }
      function M() {
        (p.value = !1),
          (b.value = !1),
          window.removeEventListener("mousemove", y),
          window.removeEventListener("mouseup", M);
      }
      function h(_) {
        (p.value = !0),
          (b.value = !0),
          o(_),
          window.addEventListener("mousemove", y),
          window.addEventListener("mouseup", M);
      }
      function S(_) {
        if (!c.value) return;
        const { key: T } = _,
          E = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];
        try {
          switch ((_e(T, E), T)) {
            case "ArrowDown":
            case "ArrowLeft":
              l.value = Math.max((l.value ?? e.min) - e.step, e.min);
              break;
            case "ArrowUp":
            case "ArrowRight":
              l.value = Math.min((l.value ?? e.min) + e.step, e.max);
              break;
          }
        } catch {}
      }
      return (
        O(g, (_) => {
          var T;
          c.value = ((T = w.value) == null ? void 0 : T.$el) === _;
        }),
        me(() => {
          window.addEventListener("keydown", S);
        }),
        pe(() => {
          window.removeEventListener("mousemove", y),
            window.removeEventListener("mouseup", M),
            window.removeEventListener("keydown", S);
        }),
        (_, T) => {
          const E = Q;
          return (
            a(),
            r(
              "div",
              {
                ref_key: "refBar",
                ref: f,
                class: B([
                  _.$style.bar,
                  "group relative flex items-center w-full h-2 bg-secondary-20% after:content after:absolute after:inset-0 after:bg-secondary-80% after:origin-left after:transform",
                ]),
                onMousedown: h,
              },
              [
                ps,
                t(
                  "div",
                  {
                    class: B([
                      _.$style.cursor,
                      "absolute flex items-center justify-center",
                    ]),
                  },
                  [
                    s(
                      E,
                      {
                        ref_key: "refCursor",
                        ref: w,
                        "is-locked": n(b),
                        class: B([
                          "absolute flex items-center justify-center w-4 h-6 after:content after:absolute after:w-1 after:h-4 after:bg-secondary after:transform after:transition-transform after:duration-100 group-hover:after:scale-x-[2]",
                          { "after:scale-x-0": !n(d) },
                        ]),
                      },
                      null,
                      8,
                      ["is-locked", "class"]
                    ),
                  ],
                  2
                ),
              ],
              34
            )
          );
        }
      );
    },
  }),
  gs = "_bar_cmwek_1",
  fs = "_cursor_cmwek_5",
  vs = { bar: gs, cursor: fs },
  ys = { $style: vs },
  hs = F(_s, [["__cssModules", ys]]),
  bs = ["onSubmit"],
  ws = { class: "grid gap-3 pb-4 border-b border-secondary" },
  $s = { key: 0, class: "grid gap-4 grid-rows-[1fr_auto]" },
  ks = { key: 1, class: "grid gap-4 grid-rows-[1fr_auto]" },
  Ts = { class: "grid gap-3" },
  Bs = { class: "grid gap-1" },
  Es = t(
    "label",
    { class: "typo-caption-s", for: "forValue" },
    " Amount to buy ",
    -1
  ),
  Cs = { key: 0, class: "grid gap-2 grid-flow-col items-center" },
  Ms = t("span", null, "ETH", -1),
  Ls = { key: 0, class: "grid gap-4 grid-rows-[1fr_auto]" },
  Ds = { key: 0, class: "grid gap-2 grid-flow-col items-center" },
  As = t("span", null, "ETH", -1),
  Ss = A({
    __name: "Buy",
    props: { isLoading: { type: Boolean }, listing: {} },
    setup(k) {
      const e = k,
        [d] = [ge()],
        { address: g } = fe(d),
        { notify: p } = ve(),
        {
          states: c,
          validator: l,
          hasErrors: b,
        } = Ee({
          amount: { value: void 0, validators: { required: X } },
          percent: { value: 0, validators: { required: X } },
        }),
        f = D(!1);
      async function w(o) {
        try {
          if (!e.listing) return;
          const y = L(e.listing.pricePerToken),
            M = L(e.listing.availableTokens),
            h = Number(M.times(y.toString()).times(o).dividedBy(100));
          await Te(K(h.toString()), e.listing.id, K(y.toString()));
        } catch {
          throw new Error("An error occurred while fulfilling order");
        }
      }
      async function u() {
        b.value;
        try {
          if (!e.listing || f.value) return;
          (f.value = !0),
            e.listing.state === 0 && e.listing.requester !== g.value
              ? await w(c.percent)
              : e.listing.state === 1 && (e.listing.requester, g.value);
        } catch (o) {
          p.danger({
            title: "Error",
            message:
              o instanceof Error
                ? o.message
                : "An error occurred while handling order",
          });
        } finally {
          f.value = !1;
        }
      }
      return (
        O(
          () => l.value.amount.$model,
          (o) => {
            typeof o == "number" &&
              o !== void 0 &&
              e.listing &&
              (l.value.percent.$model = +new L(o)
                .times(100)
                .dividedBy(e.listing.availableTokens));
          }
        ),
        O(
          () => l.value.percent.$model,
          (o) => {
            typeof o == "number" &&
              o !== void 0 &&
              e.listing &&
              (l.value.amount.$model = +new L(o)
                .times(e.listing.availableTokens)
                .dividedBy(100));
          }
        ),
        (o, y) => {
          const M = ms,
            h = J,
            S = he,
            _ = Ce,
            T = hs,
            E = j,
            P = Me,
            V = G,
            N = be;
          return (
            a(),
            r(
              "form",
              { onSubmit: ye(u, ["prevent"]) },
              [
                s(
                  V,
                  {
                    class:
                      "grid gap-4 grid-rows-[auto_1fr] content-start p-4 min-h-[280px]",
                  },
                  {
                    default: i(() => [
                      !o.isLoading && o.listing
                        ? (a(),
                          r(
                            v,
                            { key: 0 },
                            [
                              t("div", ws, [
                                s(
                                  h,
                                  {
                                    "needs-custom-grid-column": "",
                                    class: "grid-cols-[1fr_2rem]",
                                    value:
                                      100 -
                                      +new n(L)(o.listing.availableTokens)
                                        .times(100)
                                        .dividedBy(o.listing.initialTokens),
                                    unit: "%",
                                  },
                                  {
                                    default: i(() => [
                                      s(
                                        M,
                                        {
                                          ratio:
                                            1 -
                                            +new n(L)(
                                              o.listing.availableTokens
                                            ).dividedBy(
                                              o.listing.initialTokens
                                            ),
                                        },
                                        null,
                                        8,
                                        ["ratio"]
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ["value"]
                                ),
                                s(
                                  h,
                                  {
                                    value: o.listing.fulfilledETH,
                                    unit: "ETH",
                                  },
                                  { default: i(() => [m(" Sold ")]), _: 1 },
                                  8,
                                  ["value"]
                                ),
                                s(
                                  h,
                                  {
                                    value: o.listing.availableTokens,
                                    unit: "$DUMP",
                                  },
                                  {
                                    default: i(() => [m(" Remaining ")]),
                                    _: 1,
                                  },
                                  8,
                                  ["value"]
                                ),
                              ]),
                              s(
                                N,
                                { class: "items-end" },
                                {
                                  default: i(
                                    ({
                                      isActiveConnected: Z,
                                      isInactiveConnected: ee,
                                      isMounted: se,
                                      isUnmounting: te,
                                    }) => [
                                      s(
                                        V,
                                        {
                                          class: B([
                                            "grid",
                                            { "overflow-hidden": ee },
                                          ]),
                                          "is-borderless": "",
                                          "is-hidden": !se || !Z || te,
                                        },
                                        {
                                          default: i(() => [
                                            o.listing.state === 0
                                              ? (a(),
                                                r(
                                                  v,
                                                  { key: 0 },
                                                  [
                                                    o.listing.requester === n(g)
                                                      ? (a(),
                                                        r("div", $s, [
                                                          s(
                                                            h,
                                                            {
                                                              value:
                                                                "Order ongoing",
                                                            },
                                                            {
                                                              default: i(() => [
                                                                m(
                                                                  "Claimable ETH"
                                                                ),
                                                              ]),
                                                              _: 1,
                                                            }
                                                          ),
                                                          s(
                                                            S,
                                                            {
                                                              class: "self-end",
                                                              "is-disabled": "",
                                                            },
                                                            {
                                                              default: i(() => [
                                                                m(
                                                                  " Order ongoing "
                                                                ),
                                                              ]),
                                                              _: 1,
                                                            }
                                                          ),
                                                        ]))
                                                      : (a(),
                                                        r("div", ks, [
                                                          t("div", Ts, [
                                                            t("div", Bs, [
                                                              Es,
                                                              s(
                                                                _,
                                                                {
                                                                  modelValue:
                                                                    n(l).amount
                                                                      .$model,
                                                                  "onUpdate:modelValue":
                                                                    y[0] ||
                                                                    (y[0] = (
                                                                      R
                                                                    ) =>
                                                                      (n(
                                                                        l
                                                                      ).amount.$model =
                                                                        R)),
                                                                  class:
                                                                    "h-7 text-left w-full",
                                                                  attributes: {
                                                                    id: "forValue",
                                                                    name: "forValue",
                                                                    type: "number",
                                                                    min: 0,
                                                                    max: o
                                                                      .listing
                                                                      .availableTokens,
                                                                    placeholder:
                                                                      "0.00",
                                                                    step: 1e-5,
                                                                  },
                                                                  suffix:
                                                                    "$DUMP",
                                                                },
                                                                null,
                                                                8,
                                                                [
                                                                  "modelValue",
                                                                  "attributes",
                                                                ]
                                                              ),
                                                            ]),
                                                            s(
                                                              h,
                                                              {
                                                                "needs-custom-grid-column":
                                                                  "",
                                                                class:
                                                                  "grid-cols-[1fr_2rem]",
                                                                value:
                                                                  n(l).percent
                                                                    .$model,
                                                                unit: "%",
                                                              },
                                                              {
                                                                default: i(
                                                                  () => [
                                                                    s(
                                                                      T,
                                                                      {
                                                                        modelValue:
                                                                          n(l)
                                                                            .percent
                                                                            .$model,
                                                                        "onUpdate:modelValue":
                                                                          y[1] ||
                                                                          (y[1] =
                                                                            (
                                                                              R
                                                                            ) =>
                                                                              (n(
                                                                                l
                                                                              ).percent.$model =
                                                                                R)),
                                                                      },
                                                                      null,
                                                                      8,
                                                                      [
                                                                        "modelValue",
                                                                      ]
                                                                    ),
                                                                  ]
                                                                ),
                                                                _: 1,
                                                              },
                                                              8,
                                                              ["value"]
                                                            ),
                                                          ]),
                                                          s(
                                                            S,
                                                            {
                                                              class:
                                                                "grid gap-2 grid-flow-col items-center justify-center h-10",
                                                            },
                                                            {
                                                              default: i(() => [
                                                                s(
                                                                  z,
                                                                  {
                                                                    name: "fade-quicker",
                                                                    mode: "out-in",
                                                                  },
                                                                  {
                                                                    default: i(
                                                                      () => [
                                                                        n(f)
                                                                          ? (a(),
                                                                            C(
                                                                              P,
                                                                              {
                                                                                key: 1,
                                                                              }
                                                                            ))
                                                                          : (a(),
                                                                            r(
                                                                              "div",
                                                                              Cs,
                                                                              [
                                                                                t(
                                                                                  "span",
                                                                                  null,
                                                                                  "Buy for " +
                                                                                    $(
                                                                                      +new n(
                                                                                        L
                                                                                      )(
                                                                                        n(
                                                                                          c
                                                                                        )
                                                                                          .percent
                                                                                      )
                                                                                        .dividedBy(
                                                                                          100
                                                                                        )
                                                                                        .times(
                                                                                          o
                                                                                            .listing
                                                                                            .availableTokens
                                                                                        )
                                                                                        .times(
                                                                                          o
                                                                                            .listing
                                                                                            .requestedETH
                                                                                        )
                                                                                        .dividedBy(
                                                                                          o
                                                                                            .listing
                                                                                            .initialTokens
                                                                                        )
                                                                                    ),
                                                                                  1
                                                                                ),
                                                                                s(
                                                                                  E,
                                                                                  {
                                                                                    name: "Logo/Ethereum",
                                                                                  }
                                                                                ),
                                                                                Ms,
                                                                              ]
                                                                            )),
                                                                      ]
                                                                    ),
                                                                    _: 1,
                                                                  }
                                                                ),
                                                              ]),
                                                              _: 1,
                                                            }
                                                          ),
                                                        ])),
                                                  ],
                                                  64
                                                ))
                                              : o.listing.state === 1
                                              ? (a(),
                                                r(
                                                  v,
                                                  { key: 1 },
                                                  [
                                                    o.listing.requester === n(g)
                                                      ? (a(),
                                                        r("div", Ls, [
                                                          s(
                                                            h,
                                                            {
                                                              value:
                                                                o.listing
                                                                  .fulfilledETH,
                                                              unit: "ETH",
                                                              icon: "Logo/Ethereum",
                                                            },
                                                            {
                                                              default: i(() => [
                                                                m(
                                                                  " Claimable ETH "
                                                                ),
                                                              ]),
                                                              _: 1,
                                                            },
                                                            8,
                                                            ["value"]
                                                          ),
                                                          s(
                                                            S,
                                                            {
                                                              class:
                                                                "grid items-center justify-center h-10",
                                                            },
                                                            {
                                                              default: i(() => [
                                                                s(
                                                                  z,
                                                                  {
                                                                    name: "fade-quicker",
                                                                    mode: "out-in",
                                                                  },
                                                                  {
                                                                    default: i(
                                                                      () => [
                                                                        n(f)
                                                                          ? (a(),
                                                                            C(
                                                                              P,
                                                                              {
                                                                                key: 1,
                                                                              }
                                                                            ))
                                                                          : (a(),
                                                                            r(
                                                                              "div",
                                                                              Ds,
                                                                              [
                                                                                t(
                                                                                  "span",
                                                                                  null,
                                                                                  "Claim " +
                                                                                    $(
                                                                                      o
                                                                                        .listing
                                                                                        .fulfilledETH
                                                                                    ),
                                                                                  1
                                                                                ),
                                                                                s(
                                                                                  E,
                                                                                  {
                                                                                    name: "Logo/Ethereum",
                                                                                  }
                                                                                ),
                                                                                As,
                                                                              ]
                                                                            )),
                                                                      ]
                                                                    ),
                                                                    _: 1,
                                                                  }
                                                                ),
                                                              ]),
                                                              _: 1,
                                                            }
                                                          ),
                                                        ]))
                                                      : (a(),
                                                        C(
                                                          h,
                                                          { key: 1 },
                                                          {
                                                            default: i(() => [
                                                              m(
                                                                "Order fulfilled"
                                                              ),
                                                            ]),
                                                            _: 1,
                                                          }
                                                        )),
                                                  ],
                                                  64
                                                ))
                                              : o.listing.state === 2
                                              ? (a(),
                                                C(
                                                  h,
                                                  { key: 2 },
                                                  {
                                                    default: i(() => [
                                                      m("Order settled"),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ))
                                              : U("", !0),
                                          ]),
                                          _: 2,
                                        },
                                        1032,
                                        ["class", "is-hidden"]
                                      ),
                                    ]
                                  ),
                                  _: 1,
                                }
                              ),
                            ],
                            64
                          ))
                        : U("", !0),
                    ]),
                    _: 1,
                  }
                ),
              ],
              40,
              bs
            )
          );
        }
      );
    },
  }),
  Us = {
    class:
      "grid gap-6 lg:grid-rows-[1fr_auto] lg:grid-cols-[2fr_1fr] content-start lg:content-normal",
  },
  qs = A({
    __name: "index",
    props: { listing: {} },
    setup(k) {
      const e = D("");
      return (d, g) => {
        const p = oe,
          c = Re,
          l = G,
          b = ls,
          f = Ss;
        return (
          a(),
          r("div", Us, [
            s(
              l,
              {
                class:
                  "grid grid-rows-[2fr_1fr] lg:grid-rows-1 medium-lg:grid-rows-[2fr_1fr] row-span-full bg-primary",
              },
              {
                default: i(() => [
                  s(p, { symbol: n(e) }, null, 8, ["symbol"]),
                  s(
                    c,
                    we($e({ ...(d.listing && { listing: d.listing }) })),
                    null,
                    16
                  ),
                ]),
                _: 1,
              }
            ),
            s(
              b,
              W(
                { class: "bg-primary", "is-loading": !d.listing },
                { ...(d.listing && { listing: d.listing }) }
              ),
              null,
              16,
              ["is-loading"]
            ),
            s(
              f,
              W(
                { class: "bg-primary", "is-loading": !d.listing },
                { ...(d.listing && { listing: d.listing }) }
              ),
              null,
              16,
              ["is-loading"]
            ),
          ])
        );
      };
    },
  });
export { qs as _ };
