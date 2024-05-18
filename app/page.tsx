'use client'
import Image from "next/image";
import { redirect, usePathname, useRouter } from "next/navigation";
import Homee from './(root)/home/page'
import { useSelector } from "react-redux";
import { createClient } from "@supabase/supabase-js";
import {headers} from 'next/headers'
import { useEffect, useState } from "react";

export default function Home() {
  return <Homee/>;
}