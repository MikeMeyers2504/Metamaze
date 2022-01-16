import React from 'react'
import styled from 'styled-components'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Tabs from '../components/Tabs'
import Header from '../components/Tabs/Header'
import Tab from '../components/Tabs/Tab'
import TabPanel from '../components/Tabs/TabPanel'

export default {
    title: 'Metamaze/Tabs',
    component: Tabs,
    args: {
        defaultTab: '0',
    },
} as ComponentMeta<typeof Tabs>

const MainTemplate: ComponentStory<typeof Tabs> = (args) => (
    <Tabs {...args}>
        <Header>
            <Tab id="0">
                <TabTitle>Train</TabTitle>
            </Tab>
            <Tab id="1">
                <TabTitle>Page managemenent</TabTitle>
            </Tab>
        </Header>

        <TabPanel id="0">
            <Content>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Content>
        </TabPanel>
        <TabPanel id="1">
            <Content>
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
            </Content>
        </TabPanel>
    </Tabs>
)

const CustomTemplate: ComponentStory<typeof Tabs> = (args) => (
    <Tabs {...args}>
        <Header>
            <Tab id="0">
                <TabTitle>Train</TabTitle>
            </Tab>
            <Tab id="1">
                <TabTitle>Page managemenent</TabTitle>
            </Tab>
        </Header>

        <TabPanel id="0">
            <Content>
                <Title>First Tab</Title>
                <ol>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ol>
            </Content>
        </TabPanel>
        <TabPanel id="1">
            <Content>
                <Wrapper>
                    <Title>Another example</Title>
                    <p>
                        It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout. The point of using
                        Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                        opposed to using 'Content here, content here', making it look like readable
                        English. Many desktop publishing packages and web page editors now use Lorem
                        Ipsum as their default model text, and a search for 'lorem ipsum' will
                        uncover many web sites still in their infancy. Various versions have evolved
                        over the years, sometimes by accident, sometimes on purpose (injected humour
                        and the like).
                    </p>
                </Wrapper>
            </Content>
        </TabPanel>
    </Tabs>
)

export const Primary = MainTemplate.bind({})
Primary.args = {
    variant: 'primary',
}
export const Secondary = MainTemplate.bind({})
Secondary.args = {
    variant: 'secondary',
}
export const CustomJSX = CustomTemplate.bind({})
CustomJSX.args = {
    variant: 'secondary',
}

const Content = styled.div`
    display: flex;
    padding: 10px;
    background-color: aliceblue;
`

const TabTitle = styled.div`
    display: flex;
    flex-grow: 1;
    flex-basis: 0;
    justify-content: center;
    padding: 10px;
`

const Title = styled.h1`
    text-align: 'center';
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`
