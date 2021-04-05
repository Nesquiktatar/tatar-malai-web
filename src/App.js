import React, {useState} from 'react';
import * as s from './App.styles';
import mountImg from './assets/images/mount.jpg';
import {ThemeProvider} from '@emotion/react';

//Components
import MainView from './components/MainView/MainView';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import Preloader from './components/common/Preloader/Preloader';


const App = (props) => {

     /* const preDark = {
        bgColor1: 'rgba(67, 67, 67, 0.8)',
        bgColor2: 'rgba(0, 0, 0, 0.8)',
        fontColor: `rgba(161, 161, 161)`,
        fontColorSelected: `rgba(255, 255, 255)`,
        dividerColor: `rgba(48, 48, 48)`,
        selectedBackgroundCollapsedMode: `bright`
      }

      const julyBlue = {
        bgColor1: `rgba(100, 125, 238, 0.8)`,
        bgColor2: `rgba(127, 83, 172, 0.8)`,
        fontColor: `rgba(19, 15, 64)`,
        fontColorSelected: `rgba(255, 255, 255)`,
        dividerColor: `rgba(169, 139, 199)`,
        selectedBackgroundCollapsedMode: `dark`
      }

      const themes = {

        bright: julyBlue,
        dark: preDark
      }

   const backgroundImage = mountImg;
          const sidebarHeader = {
            fullName: 'TATAR MALAI WEB',
            shortName: 'TM'
          };
          const menuItems = [
            {name: 'Profile', to: '/profile', icon: 'icons/home.svg', subMenuItems: []},
            {name: 'My friends', to: '/friends', icon: 'icons/home.svg', subMenuItems: []},
            {name: 'Dialogs', to: '/dialogs', icon: 'icons/about.svg', subMenuItems: []},
            {
              name: 'Helper', to: '/helper', icon: 'icons/destinations.svg',
              subMenuItems: [
                {name: 'Todolist', to: '/todolist'},
              ]
            },
            {name: 'Users', to: '/users', icon: 'icons/blog.svg', subMenuItems: []},
            {name: 'FAQ', to: '/faq', icon: 'icons/services.svg', subMenuItems: []},
          ];

          const fonts = {
            header: 'ZCOOL KuaiLe',
            menu: 'Poppins'
          }
        */

    const [theme, setTheme] = useState('bright');
    if(!props.appPage.initialized){
        return <Preloader/>
    }
    return (


        <ThemeProvider theme={props.appPage.themes[theme]}>
            <s.App>
                <SidebarContainer
                    theme={theme}
                    setTheme={setTheme}
                />
                <MainView/>
            </s.App>
        </ThemeProvider>


    )
}

export default App;