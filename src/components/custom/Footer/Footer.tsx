import {
  Facebook,
  Instagram,
  LinkedinIcon,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="lg:container mx-auto px-4 sm:px-0  py-5 xl:py-10  grid md:grid-cols-2 xl:grid-cols-3 gap-9 max-md:text-center max-md:place-items-center">
        <div className="">
          <h2 className="text-2xl font-bold mb-3">ABMart </h2>
          <p>
            {" "}
            AB's Mart is a vibrant and trendy e-commerce destination that caters
            to the modern shopper seeking convenience, quality, and style. With
            a name that exudes personality and individuality, AB's Mart offers
            an extensive range of products that will satisfy every customer's
            needs and desires.
          </p>
          <ul className="flex items-center max-md:justify-center  gap-4 pt-6">
            <li className="w-10 h-10 bg-black text-white rounded  flex items-center justify-center">
              <Facebook />{" "}
            </li>
            <li className="w-10 h-10 bg-black text-white rounded  flex items-center justify-center">
              {" "}
              <Instagram />{" "}
            </li>
            <li className="w-10 h-10 bg-black text-white rounded  flex items-center justify-center">
              <LinkedinIcon />{" "}
            </li>
            <li className="w-10 h-10 bg-black text-white rounded  flex items-center justify-center">
              <Twitter />{" "}
            </li>
          </ul>
        </div>
        <div className="xl:pl-20">
          <h2 className="text-2xl font-bold mb-3">Usefull Links</h2>
          <div className="flex font-medium">
            <ul className="mr-7 md:mr-20">
              <li>
                <Link href="/"> Home</Link>
              </li>
              <li>
                <Link href="/">About us </Link>
              </li>
              <li>
                <Link href="/shop">Man Fashion </Link>
              </li>
              <li>
                <Link href="/shop"> Accessories</Link>
              </li>
              <li>
                <Link href="/cart"> Cart</Link>
              </li>
              <li>
                <Link href="/"> Shipping</Link>
              </li>
            </ul>

            <ul>
              <li>
                <Link href="/shop"> shop</Link>
              </li>
              <li>
                <Link href="/">Whichlist </Link>
              </li>
              <li>
                <Link href="/shop">Women Fashion </Link>
              </li>
              <li>
                <Link href="/cart"> Order Review </Link>
              </li>
              <li>
                <Link href="/"> privacy & security </Link>
              </li>
              <li>
                <Link href="/"> policy & payment </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="xl:pl-14">
          <h2 className="text-2xl font-bold mb-3">contact</h2>
          <ul className="flex flex-col max-md:items-center">
            <li className="flex gap-3 mb-3">
              {" "}
              <Phone /> <span> +0154517815</span>{" "}
            </li>
            <li className="flex gap-3 mb-3">
              {" "}
              <MapPin /> <span> Road 105 new york city, usa</span>{" "}
            </li>
            <li className="flex gap-3 mb-3">
              <Mail /> contact@abshop1.com{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-100 text-center p-6">
        Copyright © {new Date().getFullYear()} alright reserved ABMart.com.
        designed by AB.Siddik
      </div>
    </div>
  );
};

export default Footer;
