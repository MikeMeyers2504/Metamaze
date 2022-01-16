import { useContext } from 'react'
import { TabContext } from './TabSwitcher'

const TabPanel = ({ id, children }: { children: any; id: string }) => {
    const context = useContext(TabContext)

    return context.activeTabID === id ? children : null
}

export default TabPanel
