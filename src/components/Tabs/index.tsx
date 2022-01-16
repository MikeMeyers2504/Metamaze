import React, { useState, createContext } from 'react'

const noop = () => undefined

export type Variant = 'primary' | 'secondary'

export const TabContext = createContext<{
    setActiveTabId: (id: string) => void
    activeTabId: string
    variant: Variant
}>({ activeTabId: '', setActiveTabId: noop, variant: 'primary' })

const Tabs = ({
    variant,
    children,
    defaultTab,
}: {
    defaultTab: string
    variant: Variant
    children: JSX.Element[]
}) => {
    const [activeTabId, setActiveTabId] = useState<string>(defaultTab)

    return (
        <TabContext.Provider
            value={{
                activeTabId,
                setActiveTabId,
                variant,
            }}
        >
            {children}
        </TabContext.Provider>
    )
}

export default Tabs
