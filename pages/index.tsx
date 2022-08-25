import type { NextPage } from 'next'
import { Button } from 'primereact/button'
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "primeflex/primeflex.css";
import { useState } from 'react';
import  MenubarDemo  from "./layout/menu";
const Home: NextPage = () => {
  const [count, setCount] = useState(0);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const onLoadingClick1 = () => {
      setLoading1(true);

      setTimeout(() => {
          setLoading1(false);
      }, 2000);
  }

  const onLoadingClick2 = () => {
      setLoading2(true);

      setTimeout(() => {
          setLoading2(false);
      }, 2000);
    }
  return (
    <div className="col-md">
    <MenubarDemo />
    </div>
   
  )
}

export default Home
