import React from 'react'
import classes from './Toolbar.module.css'

import Logo from '../Logo/Logo'
import NavOpts from '../NavOpts/NavOpts'
// import DrawerToggleButton from '../SideDrawer/DrawerToggleButton/DrawerToggleButton'
// import SearchBar from '../SearchBar/SearchBar'

export default props => (
	<div className={classes.Toolbar_container}>
		{/* <div className={classes.Toolbar_side_nav_button}> */}
		{/* <DrawerToggleButton click={props.drawerToggleClicked} /> */}
		<Logo />
		{/* </div> */}
		{/* <SearchBar /> */}
		<NavOpts showDropdown={props.showDropdown} toggleDropdown={props.toggleDropdown} />
	</div>
)
