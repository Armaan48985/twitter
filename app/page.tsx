"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Homee from './(root)/home/page'
import { useSelector } from "react-redux";

export default function Home() {

  const user = useSelector((e:any) => e.userId);
  const route = useRouter()

  if(!user){
    route.push('/login')
  }else{
    route.push('/home')
  }


  return <Homee/>;
}
