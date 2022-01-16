import React, { useState, createContext } from 'react'

const noop = () => undefined

type Variant = 'primary' | 'secondary'

export const TabContext = createContext<{
    setActiveTabID: (id: string) => void
    activeTabID: string
    variant: Variant
    tabIds: string[]
}>({ activeTabID: '', setActiveTabID: noop, variant: 'primary', tabIds: [] })

const TabSwitcher = ({
    variant,
    children,
    defaultActive,
    setIds = noop,
}: {
    defaultActive: string
    variant: Variant
    children: any
    setIds?: (ids) => void
}) => {
    const [activeTabID, setActiveTabID] = useState<string>(defaultActive)
    const [allIds, setAllIds] = useState([])

    React.useEffect(() => {
        const ids = React.Children.map(children, (child) => child.props.id)
        setAllIds(ids)
        setIds(ids)
    }, [children, setIds])

    return (
        <TabContext.Provider
            value={{
                activeTabID,
                setActiveTabID,
                variant,
                // tabIds: React.Children.map(children, (child) => child.props.id),
                tabIds: allIds,
            }}
        >
            {children}
        </TabContext.Provider>
    )
}

export default TabSwitcher
