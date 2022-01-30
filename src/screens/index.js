import Converter from "./converter";
import Home from "./home";
import Converter2 from "./converter2";
import Donate from "./donate";
import Counter from "./counter";

export const screens = [
  {
    name: "Home",
    component: Home,
  },

  {
    name: "Converter",
    component: Converter,
  },
  {
    name: "Converter2",
    component: Converter2,
  },
  {
    name: "Counter",
    component: Counter,
  },
  {
    name: "Donate",
    component: Donate,
  },
];
