import Image from "next/image"
import Logo from '@/assets/logo.svg'
import Arrow from '@/assets/arrow-down.svg'
import { ItemMenu } from "./itemMenu"
import { Search } from "./Search"
import IconUser from '@/assets/icon-user.svg' 

export function Header() {
    return(
        <header className="flex items-center w-full h-20 bg-primary-orange">
            <div className="flex item-center justify-between w-[100%] pl-12 mx-auto">
                <div className="flex flex-1 items-center justify-between">
                    <div className="flex items-center gap-14">
                        <Image src={Logo} alt="Logo"/>
                        <ul className="flex items-center gap-12">
                            <li>
                                <ItemMenu name="Para você" />
                                </li>
                                <li>
                                <ItemMenu name="Para empresas" />
                                </li>
                                <li>
                                <ItemMenu name="Serviços" />
                                </li><li>
                                <ItemMenu name="Ajuda" />
                                </li>
                        </ul>
                    </div>
                    <Search />
                </div>
                <button className="flex items-center gap-4 bg-primary-blue h-20 w-[30%] pl-10">
                    <Image src={IconUser} alt="Icon user" />
                    <span className="text-white font-bold">Acessar conta</span>
                </button>
            </div>
        </header>
    )
}