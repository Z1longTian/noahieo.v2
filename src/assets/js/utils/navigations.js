/**
 * navigation obj = {
 *      icon, component
 *      label, - language obj,
 *      
 *      right {
 *          value,
 *          component
 *      },
 *      navigate - fn,
 *      visible - bool,
 *      child: [ navigation objs ]
 * }
 */
import { useUtilsStore } from '@/stores/utils'
import { BIconChevronRight as Arrow, BIconGlobe2 as Explore, BIconLightbulb as Create,
BIconBuilding as Community, BIconKanban as Stats, BIconWalletFill as Wallet,
BIconEnvelopeFill as Mail, BIconLink45deg as ConnectIcon, BIconMoonFill as NightMode,
 BIconPower as Disconnect, BIconArrowDownUp as SwitchAccount,} from 'bootstrap-icons-vue'
import DarkModeSwitch from '@/components/utils/switches/DarkModeSwitch.vue'
import { menu, common, drawers } from '@/assets/js/utils/language'


export const menus = [
    {
        icon: Explore,
        label: menu.explore,
        right: {
            data: null,
            component: Arrow
        },
        navigate: null,
        visible: true,
        child: [

        ]
    },
    {
        icon: Explore,
        label: menu.stats,
        right: {
            data: null,
            component: Arrow
        },
        navigate: null,
        visible: true,
        child: [

        ]
    },
    {
        icon: Explore,
        label: menu.community,
        right: {
            data: null,
            component: Arrow
        },
        navigate: null,
        visible: true,
        child: [

        ]
    },
    {
        icon: Explore,
        label: common.create,
        right: {
            data: null,
            component: Arrow
        },
        navigate: null,
        visible: true,
        child: [

        ]
    }
]

export const darkMode = {
    icon: NightMode,
    label: common.darkMode,
    right: {
        data: null,
        component: DarkModeSwitch,
    },
    navigate: null,
    visible: true,
}
