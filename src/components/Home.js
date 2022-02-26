import React from "react";
import { Link, NavLink } from "react-router-dom";

const Home =()=>{
    return(
        <div className=" pt-20 items-center relative p-60">
            <h1 className="text-center font-bold text-6xl">Backed By</h1>
            <div className="container pt-16 grid lg:grid-cols-2 gap-10">
                <a target="_blank" href="https://dao.vc/" id="box" className="box rounded-3xl">
                <img src="img/dao.png" alt="" width={150} height={200}/>
                <p className="pt-5 hover:text-violet-600 transition ease-out duration-300">Decentralized Autonomous Venture Ecosystem All-in-one solution for the venture capi-tal industry startups marketplace, launch lab, acceleration program</p>
                </a>
                <Link to="#" className="box rounded-3xl">
                <img src="img/dragon.png" alt="" width={200} height={200}/>
                <p className="pt-5 hover:text-violet-600 transition ease-out duration-300">Decentralized Autonomous Venture Ecosystem All-in-one solution for the venture capi-tal industry startups marketplace, launch lab, acceleration program</p>
                </Link>
                <Link to="#" className="box rounded-3xl">
                <img src="img/svgs/bsc.svg" alt="" width={180} height={200}/>
                <p className="pt-5 hover:text-violet-600 transition ease-out duration-300">Decentralized Autonomous Venture Ecosystem All-in-one solution for the venture capi-tal industry startups mar</p>
                </Link>
                <Link to="#" className="box rounded-3xl">
                <img src="img/bluemoon.png" alt="" width={200} height={200}/>
                <p className="pt-5 hover:text-violet-600 transition ease-out duration-300">Decentralized Autonomous Venture Ecosystem All-in-one solution for the venture capi-tal industry startups marketplace, launch lab, acceleration program</p>
                </Link>
            </div>
            <img src="img/dex.png" alt="" className="items-center pt-5 ml-10"/>
            <a href=""></a>
        </div>
    )
}


export default Home