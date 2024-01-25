import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function navbar() {


  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/">
          <p className="font-bold text-inherit">Home</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="w-full hidden sm:flex gap-8 justify-between">
        <NavbarItem>
          <Link color="foreground" href="/">
            Link 01
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/" color="foreground">
          Link 02
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/">
          Link 03
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/pages/addUser">Add User</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
