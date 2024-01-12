import {
  ArrowBigLeft,
  ArrowLeft,
  ArrowLeftToLine,
  Bell,
  Menu,
  Mic,
  Search,
  Upload,
  User,
} from "lucide-react";
import { Button } from "../components/Button";
import { useState } from "react";
// import logo from "../assets/logo.png";
const PageHeader = () => {
  const [showFullWidthScreen, setShowFullWidthScreen] = useState(false);
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div
        className={`flex gap-4 items-center flex-shrink-0 ${
          showFullWidthScreen && "hidden"
        }`}
      >
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>

        <a href="/">
          <img src="../assets/logo.png" alt="You tube" className="h-6" />
        </a>
      </div>
      <form
        className={`flex gap-4 flex-grow justify-center ${
          !showFullWidthScreen && "md:flex hidden"
        }`}
      >
        <div className={`flex flex-grow max-w-[600px]`}>
          {showFullWidthScreen && (
            <Button
              type="button"
              className="flex-shrink-0 md:hidden"
              variant="ghost"
              size="icon"
              onClick={() => setShowFullWidthScreen(false)}
            >
              <ArrowLeft />
            </Button>
          )}
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />
          <Button className="px-4 py-2 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0">
            <Search />
          </Button>
        </div>
        <Button variant="ghost" size="icon">
          <Mic />
        </Button>
      </form>

      <div
        className={`flex flex-shrink-0 md:gap-2 ${
          showFullWidthScreen && "hidden"
        }`}
      >
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setShowFullWidthScreen(true)}
        >
          <Search />
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Mic />
        </Button>
        <Button variant="ghost" size="icon">
          <Upload />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell />
        </Button>
        <Button variant="ghost" size="icon">
          <User />
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
