'use client'

import Link from "next/link"
import style from "./ActiveLink.module.css"
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  label: string;
}

export const ActiveLink = ({ path, label }: Props) => {

  const currentPath = usePathname();

  return (
    <Link href={path} className={`${style.link}  ${currentPath == path ? style.active_link : ''} `} >
      {label}
    </Link>
  )
}

