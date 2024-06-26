import {
  _ as v,
  aS as $,
  a5 as t,
  aT as E,
  $ as x,
  a0 as j,
  ah as m,
  a1 as i,
  a2 as h,
  a6 as a,
  a3 as s,
  a9 as o,
  a4 as c,
  ay as D,
  a7 as L,
  a8 as C,
  af as B,
  aa as g,
  ab as O,
  ac as T,
  ao as M,
  aF as P,
  av as X,
} from "./entry.0b904d76.js";
const N = { class: "grid gap-8 w-full m-auto" },
  V = {
    class:
      "grid gap-4 lg:gap-12 grid-cols-[1fr_auto_1fr] items-center text-center",
  },
  z = {
    class: "relative flex items-center justify-center w-0 justify-self-end",
  },
  F = { class: "typo-h5 xs:typo-h4 lg:typo-h3" },
  U = { class: "relative w-0 justify-self-start" },
  R = a(
    "div",
    {
      class:
        "pointer-events-none before:content before:absolute before:top-0 before:left-0 before:w-[5%] before:h-[7.5%] before:border-secondary before:border-t before:border-l after:content after:absolute after:top-0 after:right-0 after:w-[5%] after:h-[7.5%] after:border-secondary after:border-t after:border-r",
    },
    null,
    -1
  ),
  q = a(
    "div",
    {
      class:
        "pointer-events-none before:content before:absolute before:bottom-0 before:left-0 before:w-[5%] before:h-[7.5%] before:border-secondary before:border-b before:border-l after:content after:absolute after:bottom-0 after:right-0 after:w-[5%] after:h-[7.5%] after:border-secondary after:border-b after:border-r",
    },
    null,
    -1
  ),
  G = { class: "flex gap-1 items-center justify-between" },
  I = { class: "typo-paragraph-m uppercase" },
  J = {
    class:
      "h-full typo-paragraph-m lg:typo-caption-s medium-lg:typo-paragraph-m",
  },
  A = v({
    __name: "Socials",
    setup(Z) {
      $((e) => ({ "0d38f846": t(_) }));
      const y = E(200),
        { isSlidingPages: b, isSwitchingSite: p, wasSwitchingSite: d } = x(),
        f = j([
          {
            title: "X",
            url: "https://twitter.com/dumptrade",
            icon: "Logo/X",
            text: "Get the latest updates and news by following Dip on X",
          },
          {
            title: "Telegram",
            url: "https://t.me/dump_trade",
            icon: "Logo/Telegram",
            text: "Join the Dip community in our main Telegram chat!",
          },
          {
            title: "Doc",
            url: "https://docs.dip.trade",
            icon: "Object/File",
            text: "Read the documentation around the project for in-depth understanding of the dip features.",
          },
          {
            title: "Swap",
            url: "https://app.paraswap.io/#/0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE-0xdf8ef8fef6fa5489d097652dedfb6617ce28a0d6/1/SELL?version=5&network=ethereum",
            icon: "Logo/Paraswap",
            text: "ParaSwap is recommended for trading! Buy & sell the $DIP on the main liquidity pool for our utility token.",
          },
          {
            title: "DEX Screener",
            url: "https://dexscreener.com/ethereum/0x2c56133c4ea1ffa1a6bf50c233b5e2360af79764",
            icon: "Logo/DEXScreener",
            text: "Click this link to access Dexscreener, a powerful tool for tracking and analyzing decentralized cryptocurrency markets.",
          },
        ]),
        n = m(() => y.value && !(b.value || p.value || d.value)),
        _ = m(() => f.value.length);
      return (e, ee) => {
        const r = O,
          k = T,
          w = M,
          S = P;
        return (
          i(),
          h("div", N, [
            a("div", V, [
              a("div", z, [
                s(
                  r,
                  {
                    name: "Object/Spark",
                    class: o([
                      "-top-10 right-12 w-10 h-10 delay-0",
                      [e.$style.spark, { [e.$style.isSparking]: t(n) }],
                    ]),
                  },
                  null,
                  8,
                  ["class"]
                ),
                s(
                  r,
                  {
                    name: "Object/Spark",
                    class: o([
                      "-top-9 right-2 w-5 h-5 delay-100",
                      [e.$style.spark, { [e.$style.isSparking]: t(n) }],
                    ]),
                  },
                  null,
                  8,
                  ["class"]
                ),
                s(
                  r,
                  {
                    name: "Object/Spark",
                    class: o([
                      "-top-5 right-0 w-16 h-16 delay-200",
                      [e.$style.spark, { [e.$style.isSparking]: t(n) }],
                    ]),
                  },
                  null,
                  8,
                  ["class"]
                ),
              ]),
              a("h1", F, [
                s(
                  k,
                  { delay: 200, "is-hidden": t(p) || t(d) },
                  { default: c(() => [D(" Socials ")]), _: 1 },
                  8,
                  ["is-hidden"]
                ),
              ]),
              a("div", U, [
                s(
                  r,
                  {
                    name: "Object/Spark",
                    class: o([
                      "-top-10 left-12 w-10 h-10 delay-0",
                      [e.$style.spark, { [e.$style.isSparking]: t(n) }],
                    ]),
                  },
                  null,
                  8,
                  ["class"]
                ),
                s(
                  r,
                  {
                    name: "Object/Spark",
                    class: o([
                      "-top-9 left-2 w-5 h-5 delay-100",
                      [e.$style.spark, { [e.$style.isSparking]: t(n) }],
                    ]),
                  },
                  null,
                  8,
                  ["class"]
                ),
                s(
                  r,
                  {
                    name: "Object/Spark",
                    class: o([
                      "-top-5 left-0 w-16 h-16 delay-200",
                      [e.$style.spark, { [e.$style.isSparking]: t(n) }],
                    ]),
                  },
                  null,
                  8,
                  ["class"]
                ),
              ]),
            ]),
            a(
              "div",
              {
                class: o([
                  "grid gap-5 lg:h-auto medium-md:h-80",
                  e.$style.wrapper,
                ]),
              },
              [
                (i(!0),
                h(
                  L,
                  null,
                  C(
                    t(f),
                    (l, u) => (
                      i(),
                      B(
                        S,
                        {
                          key: `social-${u}`,
                          delay: 400 + u * 50,
                          direction: "bottom",
                          "is-borderless": "",
                          class: "bg-primary",
                        },
                        {
                          default: c(() => [
                            R,
                            q,
                            s(
                              w,
                              {
                                "mouse-options": {
                                  isCornerLess: !0,
                                  isPaddingLess: !0,
                                  shape: "background",
                                },
                                href: l.url,
                                target: "_blank",
                                class:
                                  "grid gap-5 grid-rows-[auto_1fr] h-full px-5 lg:px-3 medium-lg:px-5 py-5 lg:py-2 medium-lg:py-5 text-left",
                              },
                              {
                                default: c(() => [
                                  a("div", G, [
                                    a("h2", I, g(l.title), 1),
                                    s(r, { name: l.icon }, null, 8, ["name"]),
                                  ]),
                                  a("p", J, g(l.text), 1),
                                ]),
                                _: 2,
                              },
                              1032,
                              ["href"]
                            ),
                          ]),
                          _: 2,
                        },
                        1032,
                        ["delay"]
                      )
                    )
                  ),
                  128
                )),
              ],
              2
            ),
          ])
        );
      };
    },
  }),
  H = "_spark_y1byn_1",
  K = "_isSparking_y1byn_4",
  Q = "_wrapper_y1byn_9",
  W = { spark: H, isSparking: K, wrapper: Q },
  Y = { $style: W },
  ae = X(A, [["__cssModules", Y]]);
export { ae as default };
