import React, { PureComponent } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import menu from "../assets/menu.png";
import accueil from "../assets/accueil.png" ;
import meselements from "../assets/meselements.png";
import Profile from "../assets/profile.png";
import favoris from "../assets/logo.png"
import { Link, NavLink } from 'react-router-dom';
export class Sidebar1 extends PureComponent {
  
  render() {
    const styles = {
      position: "-webkit-sticky",
      position: "sticky",
      borderStyle: "solid",
      borderWidth:" 5px",
      height:"100% !important",
      top: 0
    }
    return (
      <div>
      <nav>
<ProSidebar >
  <Menu style={styles} >
    <MenuItem style={{color:"white" }}>
    <Link to="/" >
      <img src={menu} style={{width:'20px' ,margin:'3px'}}/>Menu</Link></MenuItem>
    <MenuItem style={{color: "white"}}>
    <img src={accueil} style={{width:'20px' , margin :'3px'}}/><Link to="/Accueil" >Accueil</Link></MenuItem>
    <MenuItem style={{color:"white"}}><img src={Profile} style={{width:'20px' , margin :'3px'}}/><Link to="/Profile">Profile</Link></MenuItem>
    <MenuItem style={{color : "white"}}><img src={meselements} style={{width:'20px' , margin :'3px'}}/> <Link to="/Meselements">Mes éléments</Link> </MenuItem>
    <MenuItem style={{color : "white"}}><img src={favoris} style={{width:'20px' , margin :'3px'}}/><Link to="/Favoris">Favoris</Link></MenuItem>
  </Menu>
</ProSidebar>
</nav>
</div>
    )
  }
}
export default Sidebar1 ; 