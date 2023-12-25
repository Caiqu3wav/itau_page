import { ReactNode } from "react"

type Props = {
    children: ReactNode
}


export function Container({children}: Props) {
    return(
        <div className="flex items-center justify-between w-full pl-[3rem] pt-8 mx-auto">
         {children}
        </div>
    )
}