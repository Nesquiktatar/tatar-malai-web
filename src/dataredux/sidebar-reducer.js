import mountImg from '../assets/images/mount.jpg';

let initialState = {

    themes: {

        bright: {
            bgColor1: `rgba(100, 125, 238, 0.8)`,
            bgColor2: `rgba(127, 83, 172, 0.8)`,
            fontColor: `rgba(19, 15, 64)`,
            fontColorSelected: `rgba(255, 255, 255)`,
            dividerColor: `rgba(169, 139, 199)`,
            selectedBackgroundCollapsedMode: `dark`
        },
        dark: {
            bgColor1: 'rgba(67, 67, 67, 0.8)',
            bgColor2: 'rgba(0, 0, 0, 0.8)',
            fontColor: `rgba(161, 161, 161)`,
            fontColorSelected: `rgba(255, 255, 255)`,
            dividerColor: `rgba(48, 48, 48)`,
            selectedBackgroundCollapsedMode: `bright`
        }
    },
    backgroundImage: mountImg,
    sidebarHeader: {
        fullName: 'TATAR MALAI WEB',
        shortName: 'TM'
    },
    menuItems: [
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
    ],

    fonts: {
        header: 'ZCOOL KuaiLe',
        menu: 'Poppins'
    }

}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default sidebarReducer;