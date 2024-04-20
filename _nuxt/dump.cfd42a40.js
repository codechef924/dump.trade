import { _ as n } from "./index.vue.84bda384.js";
import { _ as m } from "./Slide.f3185837.js";
import {
  _,
  aC as c,
  a1 as u,
  af as g,
  a4 as f,
  a3 as l,
  a5 as e,
} from "./entry.0b904d76.js";
import "./Test.vue.f9f853d2.js";
import "./useForm.8fa7d6bf.js";
import "./Select.fed2383a.js";
import "./LoadingDots.6cfd9f5d.js";
import "./index.876393f5.js";
import "./token.b8b897cd.js";
import "./marketplace.49210690.js";
const A = _({
  __name: "dip",
  setup(d) {
    const { dump: t, bridge: a, pump: p, "pump-id": r, rewards: s } = c();
    return (P, h) => {
      const o = n,
        i = m;
      return (
        u(),
        g(
          i,
          {
            "is-full-screen": e(t).isFullScreen,
            "pages-left": [e(a)],
            "pages-right": [[e(p), e(r)], e(s)],
          },
          { default: f(() => [l(o)]), _: 1 },
          8,
          ["is-full-screen", "pages-left", "pages-right"]
        )
      );
    };
  },
});
export { A as default };
