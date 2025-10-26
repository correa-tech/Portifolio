import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@heroui/navbar";


export default function Header() {
  return (
    <Navbar className="w-full flex items-center justify-between  fixed top-0 left-0 px-8 py-4 bg-black/10 backdrop-blur-20 z-30">
      <NavbarBrand className="flex items-center gap-2">
        <p className="font-bold text-white text-lg">Portifólio</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-10">
        <NavbarItem><a className="text-white hover:text-purple-500 cursor-pointer">Sobre mim</a></NavbarItem>
        <NavbarItem><a className="text-white hover:text-purple-500 cursor-pointer">Projetos</a></NavbarItem>
        <NavbarItem><a className="text-white hover:text-purple-500 cursor-pointer">Contato</a></NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
