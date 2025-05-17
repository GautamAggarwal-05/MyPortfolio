import  { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import { Link } from "react-scroll";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  const handleClose=()=>{
    setOpen(false);
  }

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="link1" />
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div">
          <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} onClick={handleClose}>
                <p className='link'>Home</p>
             </Link>
             <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} onClick={handleClose}>
                <p className='link'>About</p>
             </Link>
             <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} onClick={handleClose}>
                <p className='link'>Project</p>
             </Link>
             <Link activeClass="active" to="Clients" spy={true} smooth={true} offset={-100} duration={500} onClick={handleClose}>
                <p className='link'>Clients</p>
             </Link>
             <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={handleClose}>
                <p className='link'>Contact Me</p>
             </Link>
        </div>
      </Drawer>
    </div>
  );
}
