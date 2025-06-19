import { HomeBtn } from "./homeBtn";
import ThemeBtn from "./themeBtn";

export const Nav = () => (
  <div className="flex items-center justify-between">
    <ThemeBtn />
    <HomeBtn />
    <p>Edward Simmons - Portfolio</p>
  </div>
);
