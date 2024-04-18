import { _ as le } from "./Test.vue.f9f853d2.js";
import {
  _ as R,
  bf as se,
  bg as re,
  a2 as f,
  aN as ne,
  a3 as a,
  a4 as s,
  a9 as I,
  ao as X,
  a1 as d,
  a6 as r,
  av as ie,
  a$ as de,
  ap as ue,
  al as ce,
  am as me,
  a0 as D,
  ah as pe,
  aL as fe,
  aj as V,
  a5 as o,
  ay as v,
  a7 as _e,
  aa as O,
  aD as W,
  af as h,
  b0 as j,
  bE as ge,
  bF as Q,
  ab as be,
  b1 as ve,
  aE as he,
  aF as Z,
  aH as ye,
  b3 as Ve,
  bG as ke,
} from "./entry.0b904d76.js";
import { u as $e, _ as we, a as xe } from "./useForm.8fa7d6bf.js";
import { _ as Te } from "./Select.fed2383a.js";
import { _ as Ce } from "./LoadingDots.6cfd9f5d.js";
import { r as g, m as H, a as Fe } from "./index.876393f5.js";
import { a as Pe, b as Ee } from "./token.b8b897cd.js";
import { r as Se } from "./marketplace.49210690.js";
const De = {
    class:
      "grid gap-3 grid-flow-col items-center justify-between typo-caption-s",
  },
  Ue = R({
    __name: "Switch",
    props: se(
      { isDisabled: { type: Boolean } },
      { modelValue: { type: Boolean } }
    ),
    emits: ["update:modelValue"],
    setup(T) {
      const k = T,
        m = re(T, "modelValue");
      function $() {
        k.isDisabled || (m.value = !m.value);
      }
      return (p, C) => {
        const w = X;
        return (
          d(),
          f("label", De, [
            ne(p.$slots, "default"),
            a(
              w,
              {
                type: "button",
                class: I([
                  "flex items-center w-12 h-6 p-0.5 rounded-full border border-secondary",
                  [
                    m.value ? "bg-secondary" : "bg-primary",
                    { "pointer-events-none opacity-40": p.isDisabled },
                  ],
                ]),
                "is-disabled": p.isDisabled,
                "mouse-options": { rounded: "full" },
                onClick: $,
              },
              {
                default: s(() => [
                  r(
                    "div",
                    {
                      class: I([
                        p.$style.input,
                        { [p.$style.isSwitched]: m.value },
                      ]),
                    },
                    null,
                    2
                  ),
                ]),
                _: 1,
              },
              8,
              ["class", "is-disabled"]
            ),
          ])
        );
      };
    },
  }),
  Le = "_input_1u47v_1",
  Me = "_isSwitched_1u47v_17",
  qe = { input: Le, isSwitched: Me },
  Ae = { $style: qe },
  Be = ie(Ue, [["__cssModules", Ae]]),
  Ne = ["onSubmit"],
  Oe = r("div", { class: "w-px h-full bg-secondary" }, null, -1),
  We = r("div", { class: "w-px h-full bg-secondary" }, null, -1),
  je = r(
    "label",
    { class: "typo-caption-m", for: "offerValue" },
    " Offer ",
    -1
  ),
  He = { class: "grid gap-2 grid-cols-[1fr_auto_auto] items-center" },
  Ie = { key: 0, class: "grid gap-2 grid-flow-col items-center justify-start" },
  Re = {
    class: "overflow-hidden whitespace-nowrap text-ellipsis typo-button-s",
  },
  ze = r(
    "div",
    {
      class:
        "relative flex items-center justify-center before:content before:absolute before:left-0 before:w-full before:h-px before:bg-secondary",
    },
    [r("span", { class: "relative px-3 bg-primary typo-caption-s" }, "For")],
    -1
  ),
  Ge = r("label", { class: "typo-caption-m", for: "forValue" }, " For ", -1),
  Ye = { class: "grid gap-1 grid-cols-[1fr_auto] items-center" },
  Ke = {
    class: "inline-grid gap-1 grid-flow-col items-center typo-caption-bold-s",
  },
  Je = { class: "grid gap-3 grid-cols-[auto_1fr_1fr] items-center" },
  Qe = { class: "typo-button-s" },
  Xe = r("span", { class: "typo-caption-s text-right" }, "or custom:", -1),
  Ze = r("h3", { class: "typo-caption-m" }, "Whitelisted address", -1),
  et = { class: "grid gap-2 grid-cols-[1fr_auto_auto] items-center" },
  tt = { key: 0 },
  ot = { key: 0 },
  at = {
    class:
      "grid gap-1 grid-flow-col h-7 items-center justify-center text-secondary-80%",
  },
  lt = r("span", { class: "typo-caption-s" }, "Platform fee: 1%", -1),
  st = r(
    "p",
    { class: "h-full typo-paragraph-m" },
    "You need to login to sell tokens",
    -1
  ),
  rt = { key: 0, class: "h-full typo-paragraph-m" },
  nt = { key: 1, class: "h-full typo-paragraph-m" },
  it = R({
    __name: "CreateListing",
    emits: ["updateChartSymbol"],
    setup(T, { emit: k }) {
      const { isConnected: m } = de(),
        { notify: $ } = ue(),
        p = [
          { value: 70, label: "30% lower" },
          { value: 80, label: "20% lower" },
          { value: 90, label: "10% lower" },
          { value: 110, label: "10% higher" },
          { value: 120, label: "20% higher" },
          { value: 130, label: "30% higher" },
        ],
        C = k,
        [w] = [ce()],
        { address: U, ethPrice: F, tokens: L, currentChain: z } = me(w),
        M = D(!1),
        P = D(!1),
        b = D(!1),
        q = pe(() => {
          var l;
          return ((l = L.value) == null ? void 0 : l[0]) ?? null;
        }),
        G = fe[z.value];
      V(q, () => {
        e.value.selectedToken.$model = q.value;
      });
      const {
        states: u,
        validator: e,
        hasErrors: ee,
      } = $e({
        selectedToken: { value: q.value, validators: { required: g } },
        offerValue: {
          value: void 0,
          validators: { minValue: H(0), required: g },
        },
        followMarketPrice: { value: !1, validators: { required: g } },
        forValue: {
          value: void 0,
          validators: { minValue: H(0), required: g },
        },
        selectedForPercentage: { value: void 0, validators: { required: g } },
        customForPercentage: {
          value: void 0,
          validators: { minValue: H(-100), maxValue: Fe(100) },
        },
        whitelisted: { value: "", validators: { required: g } },
        enableVesting: { value: !1, validators: { required: g } },
        enableWhitelist: { value: !1, validators: { required: g } },
        enableCrowdFill: { value: !0, validators: { required: g } },
      });
      V(
        () => e.value.selectedToken.$model,
        (l) => {
          var t;
          (t = l == null ? void 0 : l.metadata) != null &&
            t.chartSymbol &&
            C("updateChartSymbol", l.metadata.chartSymbol);
        },
        { immediate: !0 }
      ),
        V(
          () => e.value.forValue.$model,
          (l) => {
            l !== void 0 &&
              ((e.value.customForPercentage.$model = void 0),
              (e.value.selectedForPercentage.$model = void 0));
          }
        ),
        V(
          () => e.value.offerValue.$model,
          async (l) => {
            var t, c;
            if (
              (c = (t = u.selectedToken) == null ? void 0 : t.metadata) !=
                null &&
              c.address &&
              l !== void 0
            ) {
              const _ = await Pe(
                u.selectedToken.metadata.address,
                U.value,
                G.marketplace
              );
              Number(_) >= Number(l) ? (P.value = !0) : (P.value = !1);
            }
          }
        ),
        V(
          () => e.value.selectedForPercentage.$model,
          (l) => {
            var t;
            l !== void 0 &&
              (t = e.value.selectedToken.$model) != null &&
              t.price &&
              ((e.value.forValue.$model =
                e.value.selectedToken.$model.price * (l.value / 100) * F.value),
              (e.value.customForPercentage.$model = void 0));
          }
        ),
        V(
          () => e.value.customForPercentage.$model,
          (l) => {
            var t;
            l !== void 0 &&
              (t = e.value.selectedToken.$model) != null &&
              t.price &&
              ((e.value.forValue.$model =
                e.value.selectedToken.$model.price * (l / 100) * F.value),
              (e.value.selectedForPercentage.$model = void 0));
          }
        );
      async function te() {
        var l, t;
        try {
          if (b.value) return;
          if (!u.forValue) throw new Error("Offer is required");
          if (!u.offerValue) throw new Error("Ethereum amount is required");
          if (
            !(
              (t = (l = u.selectedToken) == null ? void 0 : l.metadata) !=
                null && t.address
            )
          )
            return;
          b.value = !0;
          const c = u.selectedToken.metadata.address,
            _ = Q(u.forValue.toString()).toString(),
            y = Q(u.offerValue.toString()).toString(),
            A = u.enableCrowdFill,
            E = u.whitelisted || "0x0000000000000000000000000000000000000000";
          await Se(c, _, y, A, E);
        } catch (c) {
          $.danger({
            title: "Error",
            message:
              c instanceof Error
                ? c.message
                : "An error occurred while placing the order",
          });
        } finally {
          b.value = !1;
        }
      }
      async function oe() {
        var l, t;
        try {
          if (b.value) return;
          if (!u.forValue) throw new Error("Offer is required");
          if (!u.offerValue) throw new Error("Ethereum amount is required");
          if (
            !(
              (t = (l = u.selectedToken) == null ? void 0 : l.metadata) !=
                null && t.address
            )
          )
            return;
          (b.value = !0),
            await Ee(
              u.selectedToken.metadata.address,
              G.marketplace,
              u.offerValue
            ),
            (P.value = !0);
        } catch (c) {
          $.danger({
            title: "Error",
            message:
              c instanceof Error
                ? c.message
                : "An error occurred while approving the token",
          });
        } finally {
          b.value = !1;
        }
      }
      function ae() {
        ee.value, console.log(u);
      }
      return (l, t) => {
        const c = be,
          _ = X,
          y = we,
          A = xe,
          E = Te,
          B = ve,
          S = Be,
          Y = Ce,
          K = he,
          N = Z;
        return (
          d(),
          f(
            "form",
            { class: "grid", onSubmit: ge(ae, ["prevent"]) },
            [
              a(
                N,
                {
                  class: "grid gap-1.5 content-start p-4 bg-primary",
                  onAfterMount: t[11] || (t[11] = (i) => (M.value = !0)),
                  onBeforeUnmount: t[12] || (t[12] = (i) => (M.value = !1)),
                },
                {
                  default: s(() => [
                    r(
                      "div",
                      {
                        class: I([
                          "absolute top-0 left-[-1px] hidden xl:flex items-center h-8 bg-primary border-x border-t border-secondary typo-paragraph-m lg:typo-paragraph-m transform transition-transform duration-400",
                          o(M) ? "-translate-y-full" : "translate-y-[-1px]",
                        ]),
                      },
                      [
                        a(
                          _,
                          {
                            class:
                              "h-full px-2.5 py-1 flex items-center gap-1 border-b border-primary",
                            "mouse-options": {
                              isPaddingLess: !0,
                              shape: "background",
                            },
                          },
                          {
                            default: s(() => [
                              a(c, { name: "Object/Handshake" }),
                              v(" OTC "),
                            ]),
                            _: 1,
                          }
                        ),
                        Oe,
                        a(
                          _,
                          {
                            class:
                              "h-full px-2.5 py-1 flex items-center gap-1 text-secondary-40% border-b border-secondary",
                            "mouse-options": {
                              isPaddingLess: !0,
                              shape: "background",
                            },
                          },
                          {
                            default: s(() => [
                              a(c, { name: "Object/TargetPoint" }),
                              v(" Points "),
                            ]),
                            _: 1,
                          }
                        ),
                        We,
                        a(
                          _,
                          {
                            class:
                              "h-full px-2.5 py-1 flex items-center gap-1 text-secondary-40% border-b border-secondary",
                            "mouse-options": {
                              isPaddingLess: !0,
                              shape: "background",
                            },
                          },
                          {
                            default: s(() => [
                              a(c, { name: "Object/DoubleClock" }),
                              v(" Pre-Market "),
                            ]),
                            _: 1,
                          }
                        ),
                      ],
                      2
                    ),
                    o(m) && o(L).length && o(e).selectedToken
                      ? (d(),
                        f(
                          _e,
                          { key: 0 },
                          [
                            a(B, null, {
                              default: s(() => {
                                var i, x;
                                return [
                                  je,
                                  r("div", He, [
                                    a(
                                      y,
                                      {
                                        modelValue: o(e).offerValue.$model,
                                        "onUpdate:modelValue":
                                          t[0] ||
                                          (t[0] = (n) =>
                                            (o(e).offerValue.$model = n)),
                                        class: "h-7 w-16",
                                        attributes: {
                                          id: "offerValue",
                                          type: "number",
                                          min: 0,
                                          max:
                                            ((i = o(e).selectedToken.$model) ==
                                            null
                                              ? void 0
                                              : i.balance) ?? 0,
                                          placeholder: "0.0",
                                          step: 1e-5,
                                        },
                                      },
                                      null,
                                      8,
                                      ["modelValue", "attributes"]
                                    ),
                                    (x = o(e).selectedToken.$model) != null &&
                                    x.balance
                                      ? (d(),
                                        f(
                                          "span",
                                          {
                                            key: 0,
                                            class: "typo-tag underline",
                                            onClick:
                                              t[1] ||
                                              (t[1] = (n) => {
                                                var J;
                                                return (o(e).offerValue.$model =
                                                  ((J =
                                                    o(e).selectedToken
                                                      .$model) == null
                                                    ? void 0
                                                    : J.balance) ?? 0);
                                              }),
                                          },
                                          " (Max: " +
                                            O(
                                              o(
                                                e
                                              ).selectedToken.$model.balance.toFixed(
                                                2
                                              )
                                            ) +
                                            ") ",
                                          1
                                        ))
                                      : W("", !0),
                                    a(
                                      E,
                                      {
                                        modelValue: o(e).selectedToken.$model,
                                        "onUpdate:modelValue":
                                          t[2] ||
                                          (t[2] = (n) =>
                                            (o(e).selectedToken.$model = n)),
                                        class: "w-32",
                                        options: o(L),
                                        placeholder: "Select token",
                                      },
                                      {
                                        option: s(({ option: n }) => [
                                          n != null && n.metadata
                                            ? (d(),
                                              f("span", Ie, [
                                                a(
                                                  A,
                                                  {
                                                    icon: "Token/Unknown",
                                                    src: n.metadata.logo,
                                                    size: "s",
                                                  },
                                                  null,
                                                  8,
                                                  ["src"]
                                                ),
                                                r(
                                                  "span",
                                                  Re,
                                                  O(n.metadata.symbol),
                                                  1
                                                ),
                                              ]))
                                            : W("", !0),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ["modelValue", "options"]
                                    ),
                                  ]),
                                ];
                              }),
                              _: 1,
                            }),
                            ze,
                            a(
                              S,
                              {
                                modelValue: o(e).followMarketPrice.$model,
                                "onUpdate:modelValue":
                                  t[3] ||
                                  (t[3] = (i) =>
                                    (o(e).followMarketPrice.$model = i)),
                                "is-disabled": "",
                              },
                              {
                                default: s(() => [v(" Follow market price ")]),
                                _: 1,
                              },
                              8,
                              ["modelValue"]
                            ),
                            a(B, null, {
                              default: s(() => {
                                var i, x;
                                return [
                                  Ge,
                                  r("div", Ye, [
                                    a(
                                      y,
                                      {
                                        modelValue: o(e).forValue.$model,
                                        "onUpdate:modelValue":
                                          t[4] ||
                                          (t[4] = (n) =>
                                            (o(e).forValue.$model = n)),
                                        class: "h-7 text-left w-16",
                                        attributes: {
                                          id: "forValue",
                                          name: "forValue",
                                          type: "number",
                                          min: 0,
                                          placeholder: (
                                            (((i = o(e).selectedToken.$model) ==
                                            null
                                              ? void 0
                                              : i.price) ?? 0) *
                                            ((((x =
                                              o(e).selectedForPercentage
                                                .$model) == null
                                              ? void 0
                                              : x.value) ||
                                              o(e).customForPercentage
                                                .$model) ??
                                              100) *
                                            0.01
                                          ).toFixed(2),
                                          step: 1e-5,
                                        },
                                      },
                                      null,
                                      8,
                                      ["modelValue", "attributes"]
                                    ),
                                    r("span", Ke, [
                                      a(c, { name: "Logo/Ethereum" }),
                                      v(" ETH "),
                                    ]),
                                  ]),
                                  r("div", Je, [
                                    a(
                                      E,
                                      {
                                        modelValue:
                                          o(e).selectedForPercentage.$model,
                                        "onUpdate:modelValue":
                                          t[5] ||
                                          (t[5] = (n) =>
                                            (o(e).selectedForPercentage.$model =
                                              n)),
                                        class: "w-36",
                                        options: p,
                                        placeholder: "Set percentage",
                                      },
                                      {
                                        option: s(({ option: n }) => [
                                          r("span", Qe, O(n.label), 1),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ["modelValue"]
                                    ),
                                    Xe,
                                    a(
                                      y,
                                      {
                                        modelValue:
                                          o(e).customForPercentage.$model,
                                        "onUpdate:modelValue":
                                          t[6] ||
                                          (t[6] = (n) =>
                                            (o(e).customForPercentage.$model =
                                              n)),
                                        class: "h-7 text-right w-full",
                                        attributes: {
                                          type: "number",
                                          min: 0,
                                          max: 200,
                                          placeholder: "100",
                                        },
                                        suffix: "%",
                                      },
                                      null,
                                      8,
                                      ["modelValue"]
                                    ),
                                  ]),
                                ];
                              }),
                              _: 1,
                            }),
                            a(
                              S,
                              {
                                modelValue: o(e).enableVesting.$model,
                                "onUpdate:modelValue":
                                  t[7] ||
                                  (t[7] = (i) =>
                                    (o(e).enableVesting.$model = i)),
                                "is-disabled": "",
                              },
                              {
                                default: s(() => [v(" Enable vesting ")]),
                                _: 1,
                              },
                              8,
                              ["modelValue"]
                            ),
                            a(
                              S,
                              {
                                modelValue: o(e).enableWhitelist.$model,
                                "onUpdate:modelValue":
                                  t[8] ||
                                  (t[8] = (i) =>
                                    (o(e).enableWhitelist.$model = i)),
                              },
                              { default: s(() => [v(" Whitelist ")]), _: 1 },
                              8,
                              ["modelValue"]
                            ),
                            o(e).enableWhitelist.$model
                              ? (d(),
                                h(
                                  B,
                                  { key: 0 },
                                  {
                                    default: s(() => [
                                      Ze,
                                      r("div", et, [
                                        a(
                                          y,
                                          {
                                            modelValue: o(e).whitelisted.$model,
                                            "onUpdate:modelValue":
                                              t[9] ||
                                              (t[9] = (i) =>
                                                (o(e).whitelisted.$model = i)),
                                            class: "h-7 w-full",
                                            attributes: {
                                              type: "text",
                                              placeholder:
                                                "0x0000000000000000000000000000000000000000",
                                            },
                                          },
                                          null,
                                          8,
                                          ["modelValue"]
                                        ),
                                      ]),
                                    ]),
                                    _: 1,
                                  }
                                ))
                              : W("", !0),
                            a(
                              S,
                              {
                                modelValue: o(e).enableCrowdFill.$model,
                                "onUpdate:modelValue":
                                  t[10] ||
                                  (t[10] = (i) =>
                                    (o(e).enableCrowdFill.$model = i)),
                              },
                              { default: s(() => [v(" Crowd fill ")]), _: 1 },
                              8,
                              ["modelValue"]
                            ),
                            a(
                              j,
                              { name: "fade-quicker", mode: "out-in" },
                              {
                                default: s(() => [
                                  o(P)
                                    ? (d(),
                                      h(
                                        K,
                                        {
                                          key: 0,
                                          version: "secondary",
                                          class: "my-1",
                                          onClick: te,
                                        },
                                        {
                                          default: s(() => [
                                            a(
                                              j,
                                              {
                                                name: "fade-quicker",
                                                mode: "out-in",
                                              },
                                              {
                                                default: s(() => [
                                                  o(b)
                                                    ? (d(), h(Y, { key: 1 }))
                                                    : (d(),
                                                      f(
                                                        "span",
                                                        tt,
                                                        "Create listing"
                                                      )),
                                                ]),
                                                _: 1,
                                              }
                                            ),
                                          ]),
                                          _: 1,
                                        }
                                      ))
                                    : (d(),
                                      h(
                                        K,
                                        { key: 1, class: "my-1", onClick: oe },
                                        {
                                          default: s(() => [
                                            a(
                                              j,
                                              {
                                                name: "fade-quicker",
                                                mode: "out-in",
                                              },
                                              {
                                                default: s(() => [
                                                  o(b)
                                                    ? (d(), h(Y, { key: 1 }))
                                                    : (d(),
                                                      f("span", ot, "Approve")),
                                                ]),
                                                _: 1,
                                              }
                                            ),
                                          ]),
                                          _: 1,
                                        }
                                      )),
                                ]),
                                _: 1,
                              }
                            ),
                            r("div", at, [a(c, { name: "Circle/Info" }), lt]),
                          ],
                          64
                        ))
                      : o(m)
                      ? (d(),
                        h(
                          N,
                          { key: 2, direction: "bottom", "is-borderless": "" },
                          {
                            default: s(() => [
                              a(
                                _,
                                {
                                  "mouse-options": {
                                    isPaddingLess: !0,
                                    shape: "background",
                                  },
                                  class:
                                    "grid gap-2 grid-rows-[auto_1fr] h-full p-5 text-center self-center w-full",
                                },
                                {
                                  default: s(() => [
                                    o(z).includes("sepolia")
                                      ? (d(),
                                        f(
                                          "p",
                                          rt,
                                          " You don't have any tokens. "
                                        ))
                                      : (d(),
                                        f(
                                          "p",
                                          nt,
                                          " The Slum Marketplace is currently only available on Testnet "
                                        )),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                            _: 1,
                          }
                        ))
                      : (d(),
                        h(
                          N,
                          { key: 1, direction: "bottom", "is-borderless": "" },
                          {
                            default: s(() => [
                              a(
                                _,
                                {
                                  "mouse-options": {
                                    isPaddingLess: !0,
                                    shape: "background",
                                  },
                                  class:
                                    "grid gap-2 grid-rows-[auto_1fr] h-full p-5 text-center self-center w-full",
                                },
                                { default: s(() => [st]), _: 1 }
                              ),
                            ]),
                            _: 1,
                          }
                        )),
                  ]),
                  _: 1,
                }
              ),
            ],
            40,
            Ne
          )
        );
      };
    },
  }),
  dt = {
    class:
      "grid gap-6 lg:grid-cols-[2fr_1fr] self-center content-start lg:content-normal lg:items-center h-full py-8",
  },
  vt = R({
    __name: "index",
    setup(T) {
      const k = ye(),
        m = D("");
      return ($, p) => {
        const C = le,
          w = Z,
          U = it;
        return (
          d(),
          f("div", dt, [
            a(
              w,
              { class: "grid h-[500px] lg:h-full max-h-[500px] bg-primary" },
              {
                default: s(() => [
                  Ve(a(C, { symbol: o(m) }, null, 8, ["symbol"]), [
                    [ke, o(k).currentRoute.value.name === "slum"],
                  ]),
                ]),
                _: 1,
              }
            ),
            a(U, {
              class: "h-full max-h-[500px]",
              onUpdateChartSymbol: p[0] || (p[0] = (F) => (m.value = F)),
            }),
          ])
        );
      };
    },
  });
export { vt as _ };
