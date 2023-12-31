import Head from 'next/head'
import { Data } from '@/components/Data'

import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'
import NavBar from '@/components/navbar/NavBar'
import Services from '@/components/services/Services'
import Blog from '@/components/blog/Blog'
import Works from '@/components/Works/Works'
import Work from '@/components/work/Work'
import { useState } from 'react'
import Footer from '@/components/footer/Footer'





export default function Home() {
  const [data,setDat] =useState(Data);
  // category
  const allCategory=["All",...new Set(Data.map((i)=>i.category))];
  console.log(allCategory);
  //filter by category
  const filterByCategory=(cat)=>{
 if(cat === "All"){
setDat(Data);
 }else{
  const newArr= Data.filter((item)=>item.category===cat)
  setDat(newArr)
 }
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <Hero/>
      <About/>
      <Services/>
      <Blog/>
      <Works filterByCategory={filterByCategory} allCategory={allCategory} data={data}/>
      <Footer/>
      
      
    </>
  )
}
