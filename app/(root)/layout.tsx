import Navbar from "@/components/navbar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  // todo=> const Layout = ({children}:{children:React.ReactNode}) => { , Hum isko aise bhi likh sakte hai,aur upper wale me bhi koi farak nahi padta dono same hi hai ,but humne ReactNode isliye use kiya hai kyuki humne upar se import kiya hai ReactNode ko,aur ye thoda clean lagta hai.,but dono sahi hai.,lekin niche wala comment me jo likha hai wo bhi sahi hai.but usme hum ReactNode ko import nahi karte hai.
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
