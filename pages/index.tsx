
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Layout from '../src/components/layout'

const delay = 5;

const Home = () => {
  const [show, setShow] = useState<Boolean>(false);
  const [count, setCount] = useState<number>(0);

  useEffect(()=>{
    let timer = setTimeout(() => {
      if(count < 10){
        setCount(count+1);
        console.log(count)
      }
    },1000);
  },[count]);
  

  return (
    <Layout title="Experiment 1">
      <h1 className="text-2xl font-bold mb-5">Experiment 1 (Interval but with timeout)</h1>
      <div>
        {count}
      </div>
    </Layout>
  )
}

export default Home;
