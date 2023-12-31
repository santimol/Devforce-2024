import React, { useContext } from "react";
import { SidebarIcon } from "./SidebarIcon";
import { FaHome, FaUserFriends } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const { logout, userData } = useContext(UserContext);
  if (userData) {
    return (
      <div className="sidebar fixed top-0 left-0 w-20 flex flex-col items-center h-full bg-dfGrey py-8 z-[2]">
        {/* <SidebarIcon icon={<FaBars size={32} />} /> */}
        <div className="userIcons">
          {userData.role === "USER" && (
            <>
              <Link className="sidebarIcon group" to={"/home"}>
                <SidebarIcon tooltip={"Inicio"} icon={<FaHome size={28} />} />
              </Link>
              <Link className="sidebarIcon group" to="my-trainings">
                <SidebarIcon
                  tooltip={"Mis solicitudes"}
                  icon={<FaEnvelope size={28} />}
                />
              </Link>
              <Link className="sidebarIcon group" to="/create-training">
                <SidebarIcon
                  tooltip={"Nueva solicitud"}
                  icon={<FaPlusCircle size={28} />}
                />
              </Link>
            </>
          )}
          {userData.role === "MENTOR" && (
            <>
              <Link className="sidebarIcon group" to="/mentor-actions">
                <SidebarIcon
                  tooltip={"Solicitudes"}
                  icon={<FaInbox size={28} />}
                />
              </Link>
              {/* <Link className="sidebarIcon group" to="">
                <SidebarIcon
                  tooltip={"Estadisticas"}
                  icon={<FaChartBar size={28} />}
                />
              </Link> */}
            </>
          )}

          {userData.role === "ADMIN" && (
            <>
              <Link className="sidebarIcon group" to="/adminTrainings">
                <SidebarIcon
                  tooltip={"Todas las trainings"}
                  icon={<FaInbox size={28} />}
                />
              </Link>
              <Link className="sidebarIcon group" to="/users">
                <SidebarIcon
                  tooltip={"Usuarios"}
                  icon={<FaUserFriends size={28} />}
                />
              </Link>
              <Link className="sidebarIcon group" to="licences">
                <SidebarIcon
                  tooltip={"Licencias"}
                  icon={<FaFolder size={28} />}
                />
              </Link>
            </>
          )}
        </div>
        {/* <Link className="sidebarIcon group mt-auto" to="">
          <SidebarIcon tooltip={"Ajustes"} icon={<IoMdSettings size={28} />} />
        </Link> */}
        <Link
          className="sidebarIcon group mt-auto"
          to=""
          onClick={() => logout()}
        >
          <SidebarIcon
            tooltip={"Cerrar sesión"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="28px"
                width="28px"
                viewBox="0 0 512 512"
                fill="#fff"
              >
                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
              </svg>
            }
          />
        </Link>
      </div>
    );
  }
  return <div></div>;
};

// SI HAY QUE ACRUALIZAR INA SECCION,BOORAR UNA PARTE Y AGREGAR TEXTO E ICONOS
