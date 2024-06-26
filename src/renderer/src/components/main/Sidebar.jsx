import React from 'react'
import logo from '../../assets/logo.png'
import { CiShop } from 'react-icons/ci'
import { FaChartLine, FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { MdOutlineCategory } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaCodePullRequest } from "react-icons/fa6";
import { LiaDropbox } from "react-icons/lia";

const Sidebar = () => {
  const links = [
    { text: 'Accueil', icon: FaHome, to: '/' },
    { text: 'Catégories', icon: MdOutlineCategory, to: '/categories' },
    { text: 'Produits', icon: LiaDropbox, to: '/produits' },
    { text: 'Prêts', icon: TfiWrite, to: '/Prêts' },
    { text: 'Ventes', icon: FaHandHoldingUsd, to: '/ventes' },
    { text: 'Statistiques', icon: FaChartLine , to: '/statistiques' },
    { text: 'Alertes', icon: IoNotificationsOutline, to: '/alertes' },
    { text: 'Ordres', icon: FaCodePullRequest, to: '/ordres' },
]
  return (
    <div className="h-full w-300 bg-white dark:bg-gray-950 flex flex-col items-center ">
      {/* <img src={logo} style={{width:"150px"}}/> */}
      <div className="flex flex-col items-center m-2">
        <CiShop size={70} />
        <span className="text-4xl font-mono ">SUPER MARKET</span>
      </div>
      <div className="h-full  overflow-y-auto w-full  mt-4">
        <ul className="space-y-2 mx-3 font-medium">
          {links.map((l, i) => (
            <li>
              <NavLink
                to={l.to}
                className="items-center block p-2 text-xl flex text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group "
                
              >
                <l.icon />
                <span className="ms-3">{l.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
