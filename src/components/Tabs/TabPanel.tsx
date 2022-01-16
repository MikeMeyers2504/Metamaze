import { useContext } from 'react'
import { TabContext } from '.'

const TabPanel = ({ id, children }: { children: JSX.Element; id: string }) => {
    const context = useContext(TabContext)

    return context.activeTabId === id ? children : null
}

export default TabPanel
