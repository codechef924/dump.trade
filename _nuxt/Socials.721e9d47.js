import {
  _ as $,
  aS as v,
  a5 as t,
  aT as x,
  $ as j,
  a0 as D,
  ah as h,
  a1 as i,
  a2 as m,
  a6 as a,
  a3 as s,
  a9 as r,
  a4 as c,
  ay as C,
  a7 as T,
  a8 as B,
  af as L,
  aa as g,
  ab as O,
  ac as F,
  ao as M,
  aF as U,
  av as N,
} from "./entry.3d3e841c.js";
const V = { class: "grid gap-8 w-full m-auto" },
  X = {
    class:
      "grid gap-4 lg:gap-12 grid-cols-[1fr_auto_1fr] items-center text-center",
  },
  z = {
    class: "relative flex items-center justify-center w-0 justify-self-end",
  },
  E = { class: "typo-h5 xs:typo-h4 lg:typo-h3" },
  P = { class: "relative w-0 justify-self-start" },
  A = a(
    "div",
    {
      class:
        "pointer-events-none before:content before:absolute before:top-0 before:left-0 before:w-[5%] before:h-[7.5%] before:border-secondary before:border-t before:border-l after:content after:absolute after:top-0 after:right-0 after:w-[5%] after:h-[7.5%] after:border-secondary after:border-t after:border-r",
    },
    null,
    -1
  ),
  R = a(
    "div",
    {
      class:
        "pointer-events-none before:content before:absolute before:bottom-0 before:left-0 before:w-[5%] before:h-[7.5%] before:border-secondary before:border-b before:border-l after:content after:absolute after:bottom-0 after:right-0 after:w-[5%] after:h-[7.5%] after:border-secondary after:border-b after:border-r",
    },
    null,
    -1
  ),
  q = { class: "flex gap-1 items-center justify-between" },
  G = { class: "typo-paragraph-m uppercase" },
  I = {
    class:
      "h-full typo-paragraph-m lg:typo-caption-s medium-lg:typo-paragraph-m",
  },
  J = $({
    __name: "Socials",
    setup(Z) {
      v((e) => ({ "1d906c8e": t(_) }));
      const y = x(200),
        { isSlidingPages: b, isSwitchingSite: p, wasSwitchingSite: d } = j(),
        u = D([
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
            title: "Uniswap",
            url: "https://app.uniswap.org/swap?outputCurrency=0xDF8ef8FeF6fA5489d097652DEDfB6617Ce28A0d6&chain=ethereum",
            icon: "Logo/Uniswap",
            text: "Buy & sell the $DIP on the main liquidity pool for our utility token.",
          },
          {
            title: "DEXTools",
            url: "https://www.dextools.io/app/en/ether/pair-explorer/0x2c56133c4ea1ffa1a6bf50c233b5e2360af79764?t=1712935242471",
            icon: "Logo/DexTools",
            text: "Click this link to access DexTools, a powerful tool for tracking and analyzing decentralized cryptocurrency markets.",
          },
        ]),
        n = h(() => y.value && !(b.value || p.value || d.value)),
        _ = h(() => u.value.length);
      return (e, ee) => {
        const o = O,
          k = F,
          w = M,
          S = U;
        return (
          i(),
          m("div", V, [
            a("div", X, [
              a("div", z, [
                s(
                  o,
                  {
                    name: "Object/Spark",
                    class: r([
                      "-top-10 right-12 w-10 h-10 delay-0",
                      [e.$style.spark, { [e.$style.isSparking]: t(n) }],
                    ]),
                  },
                  null,
                  8,
                  ["class"]
                ),
                s(
                  o,
                  {
                    name: "Object/Spark",
                    class: r([
                      "-top-9 right-2 w-5 h-5 delay-100",
                      [e.$style.spark, { [e.$style.isSparking]: t(n) }],
                    ]),
                  },
                  null,
                  8,
                  ["class"]
                ),
                s(
                  o,
                  {
                    name: "Object/Spark",
                    class: r([
                      "-top-5 right-0 w-16 h-16 delay-200",
                      [e.$style.spark, { [e.$style.isSparking]: t(n) }],
                    ]),
                  },
                  null,
                  8,
                  ["class"]
                ),
              ]),
              a("h1", E, [
                s(
                  k,
                  { delay: 200, "is-hidden": t(p) || t(d) },
                  { default: c(() => [C(" Socials ")]), _: 1 },
                  8,
                  ["is-hidden"]
                ),
              ]),
              a("div", P, [
                s(
                  o,
                  {
                    name: "Object/Spark",
                    class: r([
                      "-top-10 left-12 w-10 h-10 delay-0",
                      [e.$style.spark, { [e.$style.isSparking]: t(n) }],
                    ]),
                  },
                  null,
                  8,
                  ["class"]
                ),
                s(
                  o,
                  {
                    name: "Object/Spark",
                    class: r([
                      "-top-9 left-2 w-5 h-5 delay-100",
                      [e.$style.spark, { [e.$style.isSparking]: t(n) }],
                    ]),
                  },
                  null,
                  8,
                  ["class"]
                ),
                s(
                  o,
                  {
                    name: "Object/Spark",
                    class: r([
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
                class: r([
                  "grid gap-5 lg:h-auto medium-md:h-80",
                  e.$style.wrapper,
                ]),
              },
              [
                (i(!0),
                m(
                  T,
                  null,
                  B(
                    t(u),
                    (l, f) => (
                      i(),
                      L(
                        S,
                        {
                          key: `social-${f}`,
                          delay: 400 + f * 50,
                          direction: "bottom",
                          "is-borderless": "",
                          class: "bg-primary",
                        },
                        {
                          default: c(() => [
                            A,
                            R,
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
                                  a("div", q, [
                                    a("h2", G, g(l.title), 1),
                                    s(o, { name: l.icon }, null, 8, ["name"]),
                                  ]),
                                  a("p", I, g(l.text), 1),
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
  ae = N(J, [["__cssModules", Y]]);
export { ae as default };
