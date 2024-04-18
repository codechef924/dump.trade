import {
  ap as B,
  aq as m,
  al as u,
  am as y,
  ar as f,
  aL as w,
  at as T,
  as as P,
  _ as j,
  a$ as H,
  a0 as _,
  ai as W,
  aj as V,
  a1 as O,
  a2 as $,
  a3 as l,
  a4 as c,
  a6 as a,
  aa as p,
  a5 as i,
  b0 as Y,
  af as L,
  ab as R,
  b1 as q,
  aF as G,
  aE as I,
} from "./entry.16c5462c.js";
import { _ as z } from "./LoadingDots.68a50a62.js";
import { B as J } from "./bignumber.266e6c56.js";
const x = [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: !0,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: !1,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: !1,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        { indexed: !0, internalType: "bool", name: "automatic", type: "bool" },
      ],
      name: "Claim",
      type: "event",
    },
    {
      anonymous: !1,
      inputs: [
        { indexed: !1, internalType: "address", name: "user", type: "address" },
        {
          indexed: !1,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "DividendWithdrawn",
      type: "event",
    },
    {
      anonymous: !1,
      inputs: [
        { indexed: !1, internalType: "address", name: "user", type: "address" },
        {
          indexed: !1,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "DividendsDistributed",
      type: "event",
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "ExcludeFromDividends",
      type: "event",
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: !0,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: !1,
      inputs: [
        { indexed: !0, internalType: "address", name: "from", type: "address" },
        { indexed: !0, internalType: "address", name: "to", type: "address" },
        {
          indexed: !1,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [{ internalType: "address", name: "_owner", type: "address" }],
      name: "accumulativeDividendOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "owner", type: "address" },
        { internalType: "address", name: "spender", type: "address" },
      ],
      name: "allowance",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "claim",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "claimGracePeriod",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "close",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "closeTime",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "collect",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "subtractedValue", type: "uint256" },
      ],
      name: "decreaseAllowance",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "distributeDividends",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "_owner", type: "address" }],
      name: "dividendOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "excludeFromDividends",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "excludedFromDividends",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "_account", type: "address" }],
      name: "getAccount",
      outputs: [
        { internalType: "address", name: "account", type: "address" },
        {
          internalType: "uint256",
          name: "withdrawableDividends",
          type: "uint256",
        },
        { internalType: "uint256", name: "totalDividends", type: "uint256" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "addedValue", type: "uint256" },
      ],
      name: "increaseAllowance",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalDividendsDistributed",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address payable", name: "account", type: "address" },
      ],
      name: "updateBalance",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "withdrawDividend",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "_owner", type: "address" }],
      name: "withdrawableDividendOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "_owner", type: "address" }],
      name: "withdrawnDividendOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    { stateMutability: "payable", type: "receive" },
  ],
  { notify: C } = B(),
  K = async (n, e) => {
    C.success({
      title: "Broadcasting transaction",
      message: `${e} transaction sent...`,
    }),
      console.log("Broadcasting transaction", `${e} transaction sent...`);
    const t = await n.wait();
    return (
      t.status
        ? (console.log(`${e} transaction succeeded.`),
          C.success({
            title: "Approval successful",
            message: `${e} transaction succeeded.`,
          }))
        : (console.log(`${e} transaction failed.`),
          C.danger({
            title: "Approval failed",
            message: `${e} transaction failed.`,
          })),
      t
    );
  },
  Q = async (n) => {
    try {
      const e = await m(),
        [t] = [u()],
        { currentChain: s } = y(t),
        r = await new f(w[s.value].dividends, x, e).balanceOf(n);
      return Number(T(r, 18));
    } catch (e) {
      throw new Error(
        e instanceof Error
          ? e.message
          : "Something went wrong in `/dividends/balanceOf`."
      );
    }
  },
  X = async () => {
    try {
      const n = await m(),
        [e] = [u()],
        { currentChain: t } = y(e),
        o = await new f(w[t.value].dividends, x, n).totalSupply();
      return Number(T(o, 18));
    } catch (n) {
      throw new Error(
        n instanceof Error
          ? n.message
          : "Something went wrong in `/dividends/totalSupply`."
      );
    }
  },
  Z = async () => {
    try {
      const n = await m(),
        [e] = [u()],
        { currentChain: t } = y(e),
        o = await new f(w[t.value].dividends, x, n).totalDividendsDistributed();
      return Number(T(o, 18));
    } catch (n) {
      throw new Error(
        n instanceof Error
          ? n.message
          : "Something went wrong in `/dividends/totalDividendsDistributed`."
      );
    }
  },
  ee = async (n) => {
    try {
      const e = await m(),
        [t] = [u()],
        { currentChain: s } = y(t),
        r = await new f(w[s.value].dividends, x, e).withdrawnDividendOf(n);
      return Number(T(r, 18));
    } catch (e) {
      throw new Error(
        e instanceof Error
          ? e.message
          : "Something went wrong in `/dividends/withdrawnDividendOf`."
      );
    }
  },
  te = async (n) => {
    try {
      const e = await m(),
        [t] = [u()],
        { currentChain: s } = y(t),
        r = await new f(w[s.value].dividends, x, e).dividendOf(n);
      return Number(T(r, 18));
    } catch (e) {
      throw new Error(
        e instanceof Error
          ? e.message
          : "Something went wrong in `/dividends/dividendOf`."
      );
    }
  },
  ne = () =>
    new Promise(async (n, e) => {
      try {
        const t = await m(),
          [s] = [u()],
          { currentChain: o } = y(s),
          r = new f(w[o.value].token, P, t),
          g = t.getSigner(),
          b = await r.connect(g).claim(),
          v = await K(b, "Token approve");
        n(v);
      } catch (t) {
        e(t);
      }
    }),
  ae = {
    class:
      "grid gap-6 lg:grid-cols-2 self-center content-start lg:content-normal",
  },
  se = {
    class:
      "relative flex items-center justify-center overflow-hidden pointer-events-none",
  },
  ie = { class: "absolute flex items-center justify-center w-full h-screen" },
  oe = a(
    "h2",
    { class: "typo-caption-bold-m" },
    "SLUM redistribute dividends to token holders",
    -1
  ),
  re = a(
    "p",
    { class: "typo-caption-m" },
    "You can earn $ETH rewards by holding $SLUM. Dividends come from protocol revenues and trading taxes and are specific to each blockchain (meaning you will earn different yields based on the chain you hold your $SLUM on)",
    -1
  ),
  de = {
    class:
      "grid lg:gap-4 tall-lg:gap-0 lg:grid-flow-col tall-lg:grid-flow-row items-center justify-center",
  },
  le = a(
    "span",
    { class: "typo-caption-m text-secondary-80%" },
    "Total ETH Distributed",
    -1
  ),
  ce = { class: "typo-h4 lg:typo-h6 tall-lg:typo-h4" },
  pe = { class: "typo-caption-m text-secondary-40%" },
  ue = {
    class:
      "grid gap-4 lg:grid-flow-col tall-lg:grid-flow-row py-4 border-t border-b border-secondary",
  },
  ye = {
    class:
      "grid lg:gap-4 tall-lg:gap-0 lg:grid-flow-col tall-lg:grid-flow-row items-center justify-center",
  },
  me = a(
    "span",
    { class: "typo-caption-s text-secondary-80%" },
    "Your % share",
    -1
  ),
  fe = { class: "typo-h6" },
  we = {
    class:
      "grid lg:gap-4 tall-lg:gap-0 lg:grid-flow-col tall-lg:grid-flow-row items-center justify-center",
  },
  ge = a(
    "span",
    { class: "typo-caption-s text-secondary-80%" },
    "Your lifetime rewards",
    -1
  ),
  be = { class: "typo-h6" },
  ve = { class: "typo-caption-s text-secondary-40%" },
  he = {
    class:
      "grid lg:gap-4 tall-lg:gap-0 lg:grid-flow-col tall-lg:grid-flow-row items-center justify-center",
  },
  _e = a(
    "span",
    { class: "typo-caption-m text-secondary-80%" },
    "Your claimable ETH",
    -1
  ),
  Te = { class: "typo-h4 lg:typo-h6 tall-lg:typo-h4" },
  xe = { class: "typo-caption-m text-secondary-40%" },
  De = { key: 0 },
  Oe = j({
    __name: "index",
    setup(n) {
      const [e] = [u()],
        { address: t, ethPrice: s } = y(e),
        { isConnected: o } = H(),
        { notify: r } = B(),
        g = _(0),
        E = _(0),
        b = _(0),
        v = _(0),
        D = _(!1),
        A = async () => {
          if (!D.value)
            try {
              (D.value = !0), await ne();
            } catch (d) {
              r.danger({
                title: "Error",
                message:
                  d instanceof Error
                    ? d.message
                    : "An error occurred while claiming rewards",
              });
            } finally {
              D.value = !1;
            }
        },
        F = async () => {
          try {
            const [d, k, M, h, S] = await Promise.all([
              Z(),
              Q(t.value),
              X(),
              ee(t.value),
              te(t.value),
            ]);
            (g.value = d),
              (E.value = M === 0 ? 0 : +J(k).dividedBy(M)),
              (b.value = h),
              (v.value = S);
          } catch (d) {
            r.danger({
              title: "Error",
              message:
                d instanceof Error
                  ? d.message
                  : "An error occurred while getting rewards",
            });
          }
        };
      return (
        W(() => {
          V(
            o,
            async (d) => {
              d && (await F());
            },
            { immediate: !0 }
          );
        }),
        (d, k) => {
          const M = R,
            h = q,
            S = G,
            U = z,
            N = I;
          return (
            O(),
            $("div", ae, [
              l(
                S,
                {
                  class:
                    "grid gap-3 grid-rows-[1fr_auto] p-4 min-h-[480px] lg:min-h-[auto] short-lg:min-h-[300px] medium-lg:min-h-[420px] tall-lg:min-h-[480px] bg-primary",
                },
                {
                  default: c(() => [
                    a("div", se, [
                      a("div", ie, [
                        l(M, {
                          name: "Drawing/Rewards",
                          class: "absolute w-full",
                          width: "100%",
                          height: "100%",
                        }),
                      ]),
                    ]),
                    l(
                      h,
                      { class: "grid gap-1 content-start p-4" },
                      { default: c(() => [oe, re]), _: 1 }
                    ),
                  ]),
                  _: 1,
                }
              ),
              l(
                S,
                { class: "grid gap-3 p-4 bg-primary text-center" },
                {
                  default: c(() => [
                    l(h, null, {
                      default: c(() => [
                        a("div", de, [
                          le,
                          a("span", ce, p(i(g)) + " ETH", 1),
                          a(
                            "span",
                            pe,
                            "~" + p((i(g) * i(s)).toFixed(2)) + " USD",
                            1
                          ),
                        ]),
                      ]),
                      _: 1,
                    }),
                    a("div", ue, [
                      a("div", ye, [
                        me,
                        a("span", fe, p((i(E) * 100).toFixed(2)) + "%", 1),
                      ]),
                      a("div", we, [
                        ge,
                        a("span", be, p(i(b)) + " ETH", 1),
                        a(
                          "span",
                          ve,
                          "~" + p((i(b) * i(s)).toFixed(2)) + " USD",
                          1
                        ),
                      ]),
                    ]),
                    l(
                      h,
                      { class: "grid gap-5" },
                      {
                        default: c(() => [
                          a("div", he, [
                            _e,
                            a("span", Te, p(i(v)) + " ETH", 1),
                            a(
                              "span",
                              xe,
                              "~" + p((i(v) * i(s)).toFixed(2)) + " USD",
                              1
                            ),
                          ]),
                          l(
                            N,
                            { "is-disabled": !i(o), onClick: A },
                            {
                              default: c(() => [
                                l(
                                  Y,
                                  { name: "fade-quicker", mode: "out-in" },
                                  {
                                    default: c(() => [
                                      i(D)
                                        ? (O(), L(U, { key: 1 }))
                                        : (O(), $("span", De, "Claim")),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ["is-disabled"]
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }
              ),
            ])
          );
        }
      );
    },
  });
export { Oe as _ };
