import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {Link, NavLink} from 'react-router-dom'
import * as s from './Sidebar.styles';
import DarkMode from './DarkMode/DarkMode';

const Sidebar = (props) => {
    /* const {
         backgroundImage = {mountImg},
         sidebarHeader = {
             fullName: '',
             shortName: ''
         },
         menuItems = [],
         fonts = {
             header: '',
             menu: ''
         },
         colorPalette = {
             bgColor1: `rgba(67, 67, 67, 0.8)`,
             bgColor2: `rgba(0, 0, 0, 0.8)`,
             fontColor: `rgba(161, 161, 161)`,
             fontColorSelected: `rgba(255, 255, 255)`,
             dividerColor: `rgba(48, 48, 48)`,
             selectedBackgroundCollapsedMode: `light`
         }

     } = props;
 */


    //State
    const [selected, setSelectedMenuItem] = useState(props.sidebarPage.menuItems[0] ? props.sidebarPage.menuItems[0].name : null);
    const [isSidebarOpen, setSidebarState] = useState(true);
    const [header, setHeader] = useState(props.sidebarPage.sidebarHeader.fullName);
    const [subMenuStates, setSubmenus] = useState({});


    //Effects

    //Update of header state
    useEffect(() => {
        isSidebarOpen
            ? setTimeout(() => setHeader(props.sidebarPage.sidebarHeader.fullName), 200)
            : setHeader(props.sidebarPage.sidebarHeader.shortName);
    }, [isSidebarOpen, props.sidebarPage.sidebarHeader])


    //Update of sidebar state
    useEffect(() => {
        const updateWindowWidth = () => {
            if (window.innerWidth < 1280 && isSidebarOpen) setSidebarState(false);
            else setSidebarState(true)
        }

        window.addEventListener('resize', updateWindowWidth);

        return () => window.removeEventListener('resize', updateWindowWidth);
    }, [isSidebarOpen])


    //Add index of menu items with submenu to state
    useEffect(() => {
        const newSubmenus = {};

        props.sidebarPage.menuItems.forEach((item, index) => {

            //if item.submenus.length === 0 => !! operator will return false. Anything else than 0, will return true
            const hasSubmenus = !!item.subMenuItems.length
            if (hasSubmenus) {
                newSubmenus[index] = {};
                newSubmenus[index]['isOpen'] = false;
                newSubmenus[index]['isSelected'] = null;
            }
        })
        setSubmenus(newSubmenus);
    }, [props.sidebarPage.menuItems])

    const handleMenuItemClick = (name, index) => {
        setSelectedMenuItem(name)

        const subMenusCopy = JSON.parse(JSON.stringify(subMenuStates))

        if (subMenuStates.hasOwnProperty(index)) {
            subMenusCopy[index]['isOpen'] = !subMenuStates[index]['isOpen'];
            setSubmenus(subMenusCopy);
        } else {
            for (let item in subMenuStates) {
                subMenusCopy[item]['isOpen'] = false;
                subMenusCopy[item]['selected'] = null;
            }
            setSubmenus(subMenusCopy);
        }
    }

    const handleSubMenuItemClick = (menuItemIndex, subMenuItemIndex) => {
        const subMenusCopy = JSON.parse(JSON.stringify(subMenuStates));
        subMenusCopy[menuItemIndex]['selected'] = subMenuItemIndex;
        setSubmenus(subMenusCopy);
    }

    const menuItemsJSX = props.sidebarPage.menuItems.map((item, index) => {
        const isItemSelected = selected === item.name;

        //если будет 0 - false, если что то другое то true
        const hasSubmenus = !!item.subMenuItems.length;
        const isOpen = subMenuStates[index]?.isOpen;

        const subMenusJSX = item.subMenuItems.map((subMenuItem, subMenuItemIndex) => {
            const isSubMenuSelected = subMenuStates[index]?.selected === subMenuItemIndex;

            return (
                <Link to={`${item.to}${subMenuItem.to}`} style={{textDecoration: 'none'}} key={subMenuItemIndex}>
                    <s.SubMenuItem
                        onClick={() => handleSubMenuItemClick(index, subMenuItemIndex)}
                        selected={isSubMenuSelected}
                    >
                        {subMenuItem.name}
                    </s.SubMenuItem>
                </Link>
            )
        })


        //box of item
        return (
            <s.ItemContainer key={index}>
                <Link to={item.to} style={{textDecoration: 'none'}}>
                    <s.MenuItem
                        font={props.sidebarPage.fonts.menu}
                        selected={isItemSelected}
                        onClick={() => handleMenuItemClick(item.name, index)}
                        isSidebarOpen={isSidebarOpen}
                        isOpen={isOpen}
                    >
                        <s.Icon src={item.icon}
                                isSidebarOpen={isSidebarOpen}
                        />
                        <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text>
                        {hasSubmenus && isSidebarOpen && (
                            <s.DropdownIcon selected={isItemSelected}
                                            isOpen={isOpen}
                            />
                        )}
                    </s.MenuItem>
                </Link>

                {/*//Display submenus if they exist*/}
                <AnimatePresence>
                    {hasSubmenus && isOpen && (
                        <motion.nav
                            //initial-starting point, it will slide from y:-15.
                            initial={{opacity: 0, y: -15}}

                            //animate-ending point, it will end
                            animate={{opacity: 1, y: 0}}

                            transition={{duration: 0.35}}
                            exit={{opacity: 0, x: -30}}
                        >
                            <s.SubMenuItemContainer isSidebarOpen={isSidebarOpen}
                                                    isOpen={isOpen}
                            >
                                {subMenusJSX}
                            </s.SubMenuItemContainer>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </s.ItemContainer>
        )
    });


    //
    return (


        <s.SidebarContainer
            backgroundImage={props.sidebarPage.backgroundImage}
            isSidebarOpen={isSidebarOpen}

        >

            <s.SidebarHeader font={props.sidebarPage.fonts.header}>{header}</s.SidebarHeader>

            <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
            <s.DarkLight>
                <DarkMode theme={props.theme}
                          setTheme={props.setTheme}/>
            </s.DarkLight>

            {/*Добавить чтоб вместо login отоброжалось фотка*/}
            {props.isAuth
                ? <div> {props.login} - <button onClick={props.logout}>Log out</button></div>
                : <s.LoginBlock>
                    <NavLink to={'/login'}>Login</NavLink>
                </s.LoginBlock>}

            <s.TogglerContainer onClick={() => setSidebarState(!isSidebarOpen)}>
                <s.Toggler/>
            </s.TogglerContainer>
        </s.SidebarContainer>
    )
}


export default Sidebar;