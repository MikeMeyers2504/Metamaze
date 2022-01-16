import React, { useContext } from 'react'
import styled from 'styled-components'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TabSwitcher, { TabContext } from '../newComponents/TabSwitcher'
import Header from '../newComponents/Header'
import Tab from '../newComponents/Tab'
import TabPanel from '../newComponents/TabPanel'

const tabs = [
    {
        id: '0',
        header: 'Train',
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        id: '1',
        header: 'Page management',
        content:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
]

const secondTabs = [
    {
        id: '0',
        header: 'Train',
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        id: '1',
        header: 'Page management',
        content: (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <h1 style={{ textAlign: 'center' }}>Another example</h1>
                <p>
                    It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of using Lorem Ipsum is
                    that it has a more-or-less normal distribution of letters, as opposed to using
                    'Content here, content here', making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum as their default
                    model text, and a search for 'lorem ipsum' will uncover many web sites still in
                    their infancy. Various versions have evolved over the years, sometimes by
                    accident, sometimes on purpose (injected humour and the like).
                </p>
            </div>
        ),
    },
]

export default {
    title: 'Metamaze/TabSwitcher',
    component: TabSwitcher,
    args: {
        defaultActive: '0',
    },
} as ComponentMeta<typeof TabSwitcher>

const Template: ComponentStory<typeof TabSwitcher> = (args) => (
    <TabSwitcher {...args}>
        <Header>
            {tabs.map(({ header, id }) => (
                <Tab id={id}>
                    <Title>{header}</Title>
                </Tab>
            ))}
        </Header>

        {tabs.map(({ id, content }) => {
            return (
                <TabPanel id={id}>
                    <PageWrapper>{content}</PageWrapper>
                </TabPanel>
            )
        })}
    </TabSwitcher>
)

const SecondTemplate: ComponentStory<typeof TabSwitcher> = (args) => (
    <TabSwitcher {...args}>
        <Header>
            {secondTabs.map(({ header, id }) => (
                <Tab id={id}>
                    <Title>{header}</Title>
                </Tab>
            ))}
        </Header>

        {secondTabs.map(({ id, content }) => {
            return <TabPanel id={id}>{content}</TabPanel>
        })}
    </TabSwitcher>
)

const ThirdTemplate: ComponentStory<typeof TabSwitcher> = (args) => {
    const context = useContext(TabContext)

    // React.useEffect(() => {
    //     setInterval(() => {
    //         console.log('context is', context)
    //         // context.setActiveTabID(context.activeTabID)
    //     }, 3000)
    // }, [context])

    console.log('context is', context)

    return (
        <TabSwitcher {...args}>
            <Header>
                {secondTabs.map(({ header, id }) => (
                    <Tab id={id}>
                        <Title>{header}</Title>
                    </Tab>
                ))}
            </Header>

            {secondTabs.map(({ id, content }) => {
                return <TabPanel id={id}>{content}</TabPanel>
            })}
        </TabSwitcher>
    )
}

export const FirstExample = Template.bind({})
FirstExample.args = {
    variant: 'primary',
}
export const SecondExample = Template.bind({})
SecondExample.args = {
    variant: 'secondary',
}
export const ThirdExample = SecondTemplate.bind({})
ThirdExample.args = {
    variant: 'secondary',
}
export const FourthExample = ThirdTemplate.bind({})
ThirdExample.args = {
    variant: 'primary',
}

const PageWrapper = styled.div`
    display: flex;
    padding: 10px;
    background-color: aliceblue;
`

const Title = styled.div`
    display: flex;
    flex-grow: 1;
    flex-basis: 0;
    justify-content: center;
    padding: 10px;
`
