import {
  _ as b,
  $ as x,
  a0 as m,
  a1 as r,
  a2 as d,
  a3 as a,
  a4 as o,
  a5 as e,
  a6 as i,
  a7 as g,
  a8 as h,
  a9 as w,
  aa as u,
  ab as k,
  ac as v,
  ad as B,
} from "./entry.0b904d76.js";
const C = {
    class:
      "grid gap-6 lg:gap-3 medium-lg:gap-6 w-full sm:w-[32rem] lg:w-[48rem] m-auto text-center",
  },
  j = { class: "flex items-center bg-primary border-secondary border" },
  S = {
    class:
      "typo-tag xs:typo-paragraph-bold-m lg:typo-caption-s medium-lg:typo-paragraph-l",
  },
  $ = i(
    "h1",
    { class: "typo-h5 xs:typo-h4 lg:typo-h4 medium-lg:typo-h3" },
    "Buy & slum tokens, smoothly.",
    -1
  ),
  L = i(
    "p",
    {
      class: "typo-paragraph-m lg:typo-paragraph-m medium-lg:typo-paragraph-l",
    },
    "Trade your tokens and points OTC, no slippage, no liquidity pools, trustless, suited for all sizes, peer to peer, mark to market or set price, public or private.",
    -1
  ),
  O = {
    class:
      "flex gap-4 lg:gap-6 items-center px-2 lg:px-3 py-3 lg:py-2 medium-lg:py-3 border-secondary border-y",
  },
  T = {
    class:
      "typo-tag xs:typo-paragraph-bold-m lg:typo-paragraph-m medium-lg:typo-paragraph-l",
  },
  D = b({
    __name: "Home",
    setup(M) {
      const { isSwitchingSite: s, wasSwitchingSite: t } = x(),
        _ = m([
          { icon: "Object/Handshake", label: "OTC Market" },
          { icon: "Object/TargetPoint", label: "Points Market" },
          { icon: "Object/DoubleClock", label: "Pre-Market" },
        ]),
        y = m([
          { icon: "Logo/Ethereum", label: "Ethereum" },
          { icon: "Logo/Base", label: "Base" },
        ]);
      return (N, P) => {
        const p = k,
          l = v,
          f = B;
        return (
          r(),
          d("div", C, [
            a(
              l,
              { delay: 50, "is-hidden": e(s) || e(t), class: "justify-center" },
              {
                default: o(() => [
                  a(p, {
                    name: "Logo/Text/DUMP",
                    height: "1rem",
                    class: "w-auto h-6 lg:h-4 medium-lg:h-6 self-center",
                  }),
                ]),
                _: 1,
              },
              8,
              ["is-hidden"]
            ),
            a(
              l,
              { delay: 50, "is-hidden": e(s) || e(t), class: "justify-center" },
              {
                default: o(() => [
                  i("div", j, [
                    (r(!0),
                    d(
                      g,
                      null,
                      h(
                        e(_),
                        (n, c) => (
                          r(),
                          d(
                            "div",
                            {
                              key: `tag-${c}`,
                              class: w([
                                "flex gap-1 items-center px-2 lg:px-3 py-1 border-secondary",
                                { "border-l": c > 0 },
                              ]),
                            },
                            [
                              a(
                                p,
                                {
                                  name: n.icon,
                                  class:
                                    "w-4 h-4 xs:w-5 xs:h-5 lg:w-4 medium-lg:w-6 lg:h-4 medium-lg:h-6",
                                },
                                null,
                                8,
                                ["name"]
                              ),
                              i("span", S, u(n.label), 1),
                            ],
                            2
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["is-hidden"]
            ),
            a(
              l,
              { delay: 100, "is-hidden": e(s) || e(t) },
              { default: o(() => [$]), _: 1 },
              8,
              ["is-hidden"]
            ),
            a(
              l,
              { delay: 200, "is-hidden": e(s) || e(t) },
              { default: o(() => [L]), _: 1 },
              8,
              ["is-hidden"]
            ),
            a(
              l,
              {
                delay: 400,
                "is-hidden": e(s) || e(t),
                class: "justify-center",
              },
              {
                default: o(() => [
                  i("div", O, [
                    (r(!0),
                    d(
                      g,
                      null,
                      h(
                        e(y),
                        (n, c) => (
                          r(),
                          d(
                            "div",
                            {
                              key: `tag-${c}`,
                              class: "flex gap-1 items-center",
                            },
                            [
                              a(
                                p,
                                {
                                  name: n.icon,
                                  class:
                                    "w-4 h-4 xs:w-5 xs:h-5 lg:w-4 medium-lg:w-6 lg:h-4 medium-lg:h-6",
                                },
                                null,
                                8,
                                ["name"]
                              ),
                              i("span", T, u(n.label), 1),
                            ]
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["is-hidden"]
            ),
            a(
              l,
              { delay: 300, "is-hidden": e(s) || e(t) },
              {
                default: o(() => [a(f, { size: "l", class: "mx-auto" })]),
                _: 1,
              },
              8,
              ["is-hidden"]
            ),
          ])
        );
      };
    },
  });
export { D as _ };
