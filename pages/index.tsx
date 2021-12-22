import { FunctionComponent} from 'react'
import Layout from '../src/components/layout'
import { assetsUrl } from '../utils/backend-url';
import Image from "next/image";
import Link from "next/link";
import { NavigationItem } from '../src/components/header/item';
import Router, { useRouter } from "next/router";

interface HomeProps{
}

const Home:FunctionComponent<HomeProps> = () => {
  const router = useRouter();

  return (
    <Layout title="Home">
      <div className="mx-auto text-center">
        <Image 
          width="300"
          height="300"
          src={assetsUrl + "/shared/Logo-new_2x.png"}
        />
        <h1 className="border-b-2 border-black py-2 mb-0">Sitemap </h1>
        <div className="text-center mx-auto">
          {NavigationItem.map(({name,small_name,url,desc},index) => {
              return(
                <div className="w-full md:w-3/6 inline-block text-center mx-auto">
                  <Link href={url} key={index}>
                      <a className={`py-2 md:py-4 border-b-2 border-grey-50 text-center md:text-center md:p-6 w-auto block hover:text-gray-900 ${router.pathname == `${url}` ? "bg-blue-900" : ""}`}>
                          <span className="md:block font-bold block">{name}</span>
                          <span>{desc}</span>
                      </a>    
                  </Link>
                </div>
              )
          })}
        </div>
      </div>
      
    </Layout>
  )
}

export default Home;
