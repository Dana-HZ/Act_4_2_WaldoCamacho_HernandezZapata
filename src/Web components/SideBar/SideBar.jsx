import "./SideBar.css";

import MenuIcon from "../../assets/icons/Menu.svg";
import HomeIcon from "../../assets/icons/Home.svg";
import DocumentIcon from "../../assets/icons/Document.svg";
import LogoutIcon from "../../assets/icons/Logout.svg";

import Line1 from "../../assets/icons/Line1.svg";
import Line2 from "../../assets/icons/Line2.svg";

function SideBar() {

  return (

    <div className="sidebar">

      {/* TOP */}

      <div className="sidebar-top">

        <img
          src={MenuIcon}
          alt="Menu"
          className="sidebar-icon"
        />

      </div>


      {/* LINE 1 */}

      <img
        src={Line1}
        alt="Line"
        className="sidebar-line"
      />


      {/* CENTER */}

      <div className="sidebar-center">

        <img
          src={HomeIcon}
          alt="Home"
          className="sidebar-icon"
        />

        <img
          src={DocumentIcon}
          alt="Document"
          className="sidebar-icon"
        />

      </div>


      {/* BOTTOM */}

      <div className="sidebar-bottom">

        <img
          src={Line2}
          alt="Line"
          className="sidebar-line"
        />

        <img
          src={LogoutIcon}
          alt="Logout"
          className="sidebar-icon"
        />

      </div>

    </div>

  );

}

export default SideBar;