import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ThemeToggler } from "./ThemeToggler";
import { Search } from "lucide-react";
import SearchInput from "./SearchInput";
import GenreDropdown from "./GenreDropdown";

function Header() {
  return (
    <header className="fixed w-full z-20 top-0 items-center justify-between flex p-5 dark:bg-gradient-to-t from-gray-400/0 via-gray-900/25 to-gray-900">
      <Link href="/">
        <Image
          src={
            "https://www.reshot.com/preview-assets/icons/YR43P85X2D/bottle-YR43P85X2D.svg"
          }
          alt="logo"
          width={60}
          height={60}
          className="cursor-pointer"
        />
      </Link>
      <div className="flex space-x-2">
        <GenreDropdown />
        <SearchInput />
        <ThemeToggler />
      </div>
    </header>
  );
}

export default Header;
