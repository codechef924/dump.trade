import { u as de, _ as pe, a as _e } from "./useForm.8fa7d6bf.js";
import {
  bH as G,
  _ as X,
  aS as fe,
  a5 as e,
  aT as ee,
  bk as te,
  $ as Y,
  a0 as x,
  aV as me,
  aj as N,
  bu as ge,
  ak as ye,
  a1 as a,
  a2 as i,
  a6 as l,
  a3 as p,
  a4 as g,
  a9 as $,
  a7 as P,
  a8 as J,
  af as R,
  aa as d,
  bi as he,
  aD as B,
  b0 as se,
  bo as ve,
  bE as be,
  bI as Te,
  bJ as Se,
  bK as ke,
  ac as we,
  ao as ae,
  ab as xe,
  aF as ne,
  av as $e,
  al as Ce,
  am as Le,
  bL as Ee,
  ae as Pe,
  ah as Ie,
  ai as De,
  ay as A,
  bh as Fe,
  bj as Oe,
  bM as Be,
  b1 as Me,
} from "./entry.0b904d76.js";
import { _ as je } from "./Loader.5a31863a.js";
import { _ as Ae } from "./Select.fed2383a.js";
import { g as Ne, a as Re, b as Ue } from "./marketplace.49210690.js";
var oe = ((y) => ((y.RECENT = "recent"), (y.BEST = "best"), y))(oe || {});
const re = () => {
    const y = [
      { id: "recent", label: "Most recent" },
      { id: "best", label: "Best value" },
    ];
    Object.freeze(y);
    const v = {
      name: "",
      symbol: "",
      isSupported: !1,
      isSelected: !1,
      listingIds: [],
    };
    Object.freeze(v);
    const m = G("currentSelectedFilter", () => y[0]),
      C = G("currentSelectedSearchToken", () => ({ ...v })),
      I = G("displayType", () => "grid");
    return {
      FILTER_OPTIONS: y,
      DEFAULT_SELECTED_SEARCH_TOKEN: v,
      currentSelectedFilter: m,
      currentSelectedSearchToken: C,
      displayType: I,
    };
  },
  Ve = { class: "relative grid h-full justify-self-start" },
  ze = { key: 0, class: "flex items-center justify-center px-3 py-10" },
  He = { key: 1, class: "px-3 py-2 typo-caption-bold-s" },
  Qe = {
    class:
      "grid gap-4 grid-cols-[auto_1fr_auto] items-center p-2 overflow-hidden",
  },
  qe = ["src"],
  Ke = { key: 1, class: "w-6 h-6 bg-secondary rounded-full" },
  We = {
    class: "typo-caption-m overflow-hidden whitespace-nowrap text-ellipsis",
  },
  Ge = { class: "typo-caption-bold-s" },
  Je = {
    class: "hidden md:grid gap-2 grid-flow-col items-center justify-center",
  },
  Xe = { class: "typo-button-s" },
  Ye = X({
    __name: "Query",
    setup(y) {
      fe((t) => ({ "2845b8fe": e(k) }));
      const v = [
          { type: "grid", icon: "Display/Grid" },
          { type: "list", icon: "Display/List" },
        ],
        { states: m, validator: C } = de({
          searchQuery: { value: "", validators: {} },
        }),
        I = ee(200),
        { currentMouseTarget: M, resetMouseData: D } = te(),
        { isElementRevealed: U } = Y(I),
        {
          FILTER_OPTIONS: q,
          DEFAULT_SELECTED_SEARCH_TOKEN: V,
          currentSelectedFilter: _,
          currentSelectedSearchToken: L,
          displayType: j,
        } = re(),
        k = x(0),
        E = x(null),
        u = x(!1),
        b = x(!0),
        T = x([]),
        f = me({ ...V });
      function n() {
        L.value = { ...f };
      }
      function o() {
        setTimeout(() => {
          u.value = !1;
        }, 200);
      }
      function r(t) {
        t.length !== 0 && (u.value = !0);
      }
      function h() {
        T.value.length && (u.value = !0);
      }
      async function w(t) {
        const s = await Ne(t);
        (f.isSupported = !0), (f.listingIds = s), n();
      }
      async function K(t) {
        (f.name = t.name),
          (f.symbol = t.symbol),
          (f.isSelected = !0),
          (m.searchQuery = t.name),
          (u.value = !1),
          (M.value = null);
        const s = await Te(t.id);
        if (!s) {
          (f.listingIds = []), (f.isSupported = !1), n();
          return;
        }
        w(s);
      }
      const z = async () => {
          try {
            if (m.searchQuery.length === 0) {
              (T.value = []), (b.value = !1);
              return;
            }
            const t = await Se(m.searchQuery).then((s) =>
              s.sort(
                (F, O) => (O.market_cap_rank ?? 0) - (F.market_cap_rank ?? 0)
              )
            );
            (T.value = [...t]), (b.value = !1);
          } catch {
            (b.value = !1), (u.value = !1);
          }
        },
        S = ke(() => {
          z();
        }, 500);
      return (
        N(
          () => m.searchQuery,
          (t, s) => {
            t !== s &&
              (S.cancel(),
              t.length > 0
                ? ((b.value = !0), s.length === 0 ? z() : S())
                : ((u.value = !1),
                  (T.value = []),
                  Object.assign(f, { ...V }),
                  n()));
          }
        ),
        N(u, (t) => {
          var s;
          k.value = t
            ? ((s = E.value) == null ? void 0 : s.offsetHeight) ?? 0
            : 0;
        }),
        N(b, () => {
          ge(() => {
            var t;
            k.value = u
              ? ((t = E.value) == null ? void 0 : t.offsetHeight) ?? 0
              : 0;
          });
        }),
        ye(() => {
          S.cancel();
        }),
        (t, s) => {
          const F = pe,
            O = we,
            H = je,
            Q = ae,
            ie = xe,
            le = Ae,
            ce = ne;
          return (
            a(),
            i(
              "form",
              {
                class:
                  "relative grid gap-3 grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_auto] lg:grid-cols-[1fr_auto_1fr] items-center",
                onSubmit: s[3] || (s[3] = be(() => {}, ["prevent"])),
              },
              [
                l("div", Ve, [
                  p(
                    O,
                    { "initial-position": "right" },
                    {
                      default: g(() => [
                        p(
                          F,
                          {
                            modelValue: e(C).searchQuery.$model,
                            "onUpdate:modelValue":
                              s[0] ||
                              (s[0] = (c) => (e(C).searchQuery.$model = c)),
                            class: "w-48",
                            attributes: {
                              type: "text",
                              placeholder: "Search token",
                            },
                            onBlur: o,
                            onFocus: h,
                            onInput: r,
                          },
                          null,
                          8,
                          ["modelValue"]
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  l(
                    "div",
                    {
                      class: $([
                        [
                          t.$style.optionsContainer,
                          {
                            "opacity-0 pointer-events-none select-none": !e(u),
                          },
                          e(b) || !e(T).length ? "w-48" : "w-80",
                        ],
                        "absolute top-full z-10 my-2 overflow-hidden border border-secondary bg-primary transition-[width,height,opacity] duration-400",
                      ]),
                    },
                    [
                      l(
                        "div",
                        { ref_key: "refOptionsWrapper", ref: E },
                        [
                          e(b)
                            ? (a(), i("div", ze, [p(H)]))
                            : e(T).length === 0
                            ? (a(), i("div", He, " No data found. "))
                            : (a(),
                              i(
                                "div",
                                {
                                  key: 2,
                                  class:
                                    "grid content-start max-h-[300px] overflow-shadow",
                                  onScroll:
                                    s[1] ||
                                    (s[1] = (...c) => e(D) && e(D)(...c)),
                                },
                                [
                                  (a(!0),
                                  i(
                                    P,
                                    null,
                                    J(
                                      e(T),
                                      (c, W) => (
                                        a(),
                                        R(
                                          Q,
                                          he(
                                            {
                                              key: `option-${W}`,
                                              type: "button",
                                              class:
                                                "relative px-2 py-1 text-left",
                                              "mouse-options": {
                                                isPaddingLess: !0,
                                                shape: "background",
                                              },
                                            },
                                            {
                                              ...(!e(u) && { tabindex: "-1" }),
                                            },
                                            { onClick: (ue) => K(c) }
                                          ),
                                          {
                                            default: g(() => [
                                              l("div", Qe, [
                                                c.thumb
                                                  ? (a(),
                                                    i(
                                                      "img",
                                                      {
                                                        key: 0,
                                                        src: c.thumb,
                                                        class: "w-6 h-6",
                                                      },
                                                      null,
                                                      8,
                                                      qe
                                                    ))
                                                  : (a(), i("div", Ke)),
                                                l("div", We, d(c.name), 1),
                                                l(
                                                  "div",
                                                  Ge,
                                                  "$" + d(c.symbol),
                                                  1
                                                ),
                                              ]),
                                            ]),
                                            _: 2,
                                          },
                                          1040,
                                          ["onClick"]
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ],
                                32
                              )),
                        ],
                        512
                      ),
                    ],
                    2
                  ),
                ]),
                l("div", Je, [
                  (a(),
                  i(
                    P,
                    null,
                    J(v, (c, W) =>
                      p(
                        se,
                        {
                          key: `DISPLAY_TYPE-${W}`,
                          name: "fade-out-quickest",
                          mode: "out-in",
                        },
                        {
                          default: g(() => [
                            e(U)
                              ? (a(),
                                R(
                                  Q,
                                  {
                                    key: 0,
                                    class: $([
                                      "transition-colors duration-100",
                                      { "bg-secondary-40%": e(j) === c.type },
                                    ]),
                                    onClick: (ue) => (j.value = c.type),
                                  },
                                  {
                                    default: g(() => [
                                      p(
                                        ie,
                                        { class: "w-6 h-6", name: c.icon },
                                        null,
                                        8,
                                        ["name"]
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1032,
                                  ["class", "onClick"]
                                ))
                              : B("", !0),
                          ]),
                          _: 2,
                        },
                        1024
                      )
                    ),
                    64
                  )),
                ]),
                p(
                  ce,
                  {
                    class: "justify-self-end",
                    "is-borderless": "",
                    direction: "right",
                  },
                  {
                    default: g(() => [
                      p(
                        le,
                        {
                          modelValue: e(_),
                          "onUpdate:modelValue":
                            s[2] ||
                            (s[2] = (c) => (ve(_) ? (_.value = c) : null)),
                          class: "w-32",
                          placeholder: "Sort by",
                          options: e(q),
                        },
                        {
                          option: g(({ option: c }) => [
                            l("span", Xe, d(c.label), 1),
                          ]),
                          _: 1,
                        },
                        8,
                        ["modelValue", "options"]
                      ),
                    ]),
                    _: 1,
                  }
                ),
              ],
              32
            )
          );
        }
      );
    },
  }),
  Ze = "_optionsContainer_ynors_1",
  et = { optionsContainer: Ze },
  tt = { $style: et },
  st = $e(Ye, [["__cssModules", tt]]),
  at = { key: 0, class: "w-full flex pt-8 justify-center" },
  nt = l(
    "span",
    null,
    "The Slum Marketplace is currently only available on Testnet",
    -1
  ),
  ot = [nt],
  rt = l("span", { class: "typo-caption-m text-secondary-40%" }, "USDT", -1),
  it = ["src", "alt"],
  lt = { class: "typo-paragraph-bold-m" },
  ct = { class: "typo-caption-s" },
  ut = l("span", { class: "text-secondary-80%" }, "ETH", -1),
  dt = { class: "typo-caption-bold-s" },
  pt = {
    key: 0,
    class:
      "relative col-span-full self-start my-4 py-2 px-3 typo-caption-bold-s bg-secondary-20% before:content before:absolute before:inset-0 before:-z-10 before:bg-primary",
  },
  Z = 6,
  _t = X({
    __name: "List",
    setup(y) {
      const [v] = [Ce()],
        { ethPrice: m, currentChain: C } = Le(v),
        [I, M] = Ee(),
        { isMobile: D } = Pe(),
        { resetMouseData: U } = te(),
        { isSlidingPages: q } = Y(),
        {
          currentSelectedFilter: V,
          currentSelectedSearchToken: _,
          displayType: L,
        } = re(),
        j = x([]),
        k = x([]),
        E = x(!1),
        u = Ie(() => {
          const n = {};
          for (const o of k.value) {
            const { tokenAddress: r, pricePerToken: h } = o;
            n[r] ||
              (n[r] = { listings: [], cheapestListing: o, tokenAddress: r }),
              n[r].listings.push(o),
              h < n[r].cheapestListing.pricePerToken &&
                (n[r].cheapestListing = o);
          }
          return V.value.id === oe.BEST
            ? Object.values(n).sort(
                (o, r) =>
                  o.cheapestListing.pricePerToken -
                  r.cheapestListing.pricePerToken
              )
            : Object.values(n);
        }),
        b = (n) => {
          var o;
          return (
            ((o = u.value.find((r) => r.tokenAddress === n)) == null
              ? void 0
              : o.listings.length) ?? 0
          );
        },
        T = (n) => {
          var o;
          return (
            ((o = u.value.find((r) => r.tokenAddress === n)) == null
              ? void 0
              : o.listings.reduce((r, h) => r + h.requestedETH, 0)) ?? 0
          );
        };
      async function f(n = !1) {
        if (E.value) return;
        const o = n ? _.value.listingIds : j.value,
          r = k.value.length,
          h = o.slice(r, r + Z);
        if (!h.length) return;
        const w = await Ue(h);
        w && k.value.push(...w), (!w || w.length < Z) && (E.value = !0);
      }
      return (
        De(() => {
          const n = N(
            q,
            async (o) => {
              o || ((j.value = await Re()), await f(), n());
            },
            { immediate: !0 }
          );
        }),
        N(_, async (n) => {
          (k.value = []), (E.value = !1), await f(n.isSelected);
        }),
        (n, o) => {
          const r = Be,
            h = _e,
            w = Me,
            K = ae,
            z = ne;
          return (
            a(),
            i(
              P,
              null,
              [
                e(C).includes("sepolia") ? B("", !0) : (a(), i("div", at, ot)),
                p(e(I), null, {
                  default: g(
                    ({
                      id: S,
                      token: t,
                      availableTokens: s,
                      tokenAddress: F,
                      pricePerToken: O,
                      requestedETH: H,
                      fulfilledETH: Q,
                    }) => [
                      p(
                        K,
                        {
                          "mouse-options": {
                            isPaddingLess: !0,
                            shape: "background",
                          },
                          class: $([
                            "relative grid gap-2 items-center content-start p-4 snap-center bg-secondary-2.5% before:content before:absolute before:inset-0 before:-z-10 before:bg-primary",
                            e(L) === "grid"
                              ? "relative text-left"
                              : "grid-cols-[1fr,0.75fr,1fr,1fr] text-center",
                          ]),
                          to: { name: "pump-id", params: { id: S } },
                        },
                        {
                          default: g(() => [
                            t != null && t.metadata
                              ? (a(),
                                i(
                                  P,
                                  { key: 0 },
                                  [
                                    p(
                                      se,
                                      { name: "fade-out-quick" },
                                      {
                                        default: g(() => [
                                          e(L) === "grid"
                                            ? (a(),
                                              R(r, {
                                                key: 0,
                                                class:
                                                  "md:hidden absolute w-full h-full",
                                              }))
                                            : B("", !0),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                    l(
                                      "div",
                                      {
                                        class: $([
                                          "grid gap-2 grid-flow-col items-center",
                                          e(L) === "grid"
                                            ? "justify-between"
                                            : "justify-start text-left",
                                        ]),
                                      },
                                      [
                                        l(
                                          "div",
                                          {
                                            class: $([
                                              "typo-caption-bold-m",
                                              e(L) === "grid"
                                                ? "order-first"
                                                : "order-last",
                                            ]),
                                          },
                                          [A(d(t.metadata.name) + " ", 1), rt],
                                          2
                                        ),
                                        t.metadata.logo
                                          ? (a(),
                                            i(
                                              "img",
                                              {
                                                key: 1,
                                                class: "w-5 h-5",
                                                src: t.metadata.logo,
                                                alt: t.metadata.name,
                                              },
                                              null,
                                              8,
                                              it
                                            ))
                                          : (a(),
                                            R(h, {
                                              key: 0,
                                              icon: "Token/Unknown",
                                            })),
                                      ],
                                      2
                                    ),
                                    l(
                                      "span",
                                      lt,
                                      "$" + d(t.metadata.symbol),
                                      1
                                    ),
                                    p(
                                      w,
                                      { class: "px-3 py-1" },
                                      {
                                        default: g(() => [
                                          l("span", ct, [
                                            A(
                                              d(s) +
                                                " " +
                                                d(t.metadata.symbol) +
                                                " for " +
                                                d(H - Q) +
                                                " ",
                                              1
                                            ),
                                            ut,
                                            A(" " + d(" ") + " "),
                                            t.price
                                              ? (a(),
                                                i(
                                                  "span",
                                                  {
                                                    key: 0,
                                                    class: $([
                                                      "typo-caption-bold-s",
                                                      (O * e(m)) / t.price > 1
                                                        ? "text-error"
                                                        : "text-success",
                                                    ]),
                                                  },
                                                  d(
                                                    (
                                                      (O * e(m)) /
                                                      t.price
                                                    ).toFixed(2)
                                                  ) + "% ",
                                                  3
                                                ))
                                              : B("", !0),
                                          ]),
                                        ]),
                                        _: 2,
                                      },
                                      1024
                                    ),
                                  ],
                                  64
                                ))
                              : B("", !0),
                            l(
                              "span",
                              dt,
                              "+" +
                                d(b(F) - 1) +
                                " offers for " +
                                d(T(F) - H) +
                                " ETH",
                              1
                            ),
                          ]),
                          _: 2,
                        },
                        1032,
                        ["class", "to"]
                      ),
                    ]
                  ),
                  _: 1,
                }),
                l(
                  "div",
                  {
                    class: $([
                      "relative grid gap-2 content-start pt-2 pb-24 lg:pb-2 snap-mandatory snap-y",
                      {
                        "md:grid-cols-3 md:auto-rows-[calc((100%-0.5rem*0.5)/1.5)] medium-md:auto-rows-[calc((100%-0.5rem)/2)] tall-md:auto-rows-[calc((100%-0.5rem*2)/3)]":
                          e(L) === "grid",
                        "overflow-shadow": e(D) || e(u).length > 9,
                      },
                    ]),
                    onScroll: o[0] || (o[0] = (...S) => e(U) && e(U)(...S)),
                  },
                  [
                    e(_).isSelected &&
                    (!e(_).isSupported || !e(_).listingIds.length)
                      ? (a(),
                        i("div", pt, [
                          e(_).isSupported
                            ? e(_).listingIds.length
                              ? B("", !0)
                              : (a(),
                                i(
                                  P,
                                  { key: 1 },
                                  [
                                    A(
                                      "There are no listings for " +
                                        d(e(_).name) +
                                        ".",
                                      1
                                    ),
                                  ],
                                  64
                                ))
                            : (a(),
                              i(
                                P,
                                { key: 0 },
                                [
                                  A(
                                    d(e(_).name) +
                                      " is not available on Ethereum. There are no listings for it.",
                                    1
                                  ),
                                ],
                                64
                              )),
                        ]))
                      : (a(!0),
                        i(
                          P,
                          { key: 1 },
                          J(
                            e(u),
                            (S, t) => (
                              a(),
                              R(
                                z,
                                {
                                  key: `item-${t}`,
                                  class: "grid",
                                  "is-borderless": "",
                                },
                                {
                                  default: g(() => [
                                    p(
                                      e(M),
                                      Fe(Oe(S.cheapestListing)),
                                      null,
                                      16
                                    ),
                                  ]),
                                  _: 2,
                                },
                                1024
                              )
                            )
                          ),
                          128
                        )),
                  ],
                  34
                ),
              ],
              64
            )
          );
        }
      );
    },
  }),
  ft = { class: "relative grid gap-6 grid-rows-[auto_1fr] overflow-hidden" },
  bt = X({
    __name: "index",
    setup(y) {
      const v = ee(200),
        { isElementRevealed: m } = Y(v);
      return (C, I) => {
        const M = st,
          D = _t;
        return (
          a(),
          i("div", ft, [
            l(
              "div",
              {
                class: $([
                  e(m) ? "origin-left scale-x-100" : "origin-right scale-x-0",
                  "absolute z-10 w-full h-full row-start-2 row-span-1 pointer-events-none border-t lg:border-b border-secondary transition-transform duration-400",
                ]),
              },
              null,
              2
            ),
            p(M, { class: "relative z-10" }),
            p(D),
          ])
        );
      };
    },
  });
export { bt as _ };
