import React from 'react'
import styled from 'styled-components'
import './App.css'
import Tab from './components/Tabs/Tab'
import TabPanel from './components/Tabs/TabPanel'
import Tabs from './components/Tabs'
import Header from './components/Tabs/Header'

const App = () => (
    <div className="App">
        <Tabs defaultTab="0" variant="primary">
            <Header>
                <Tab id="0">
                    <Title>Train</Title>
                </Tab>
                <Tab id="1">
                    <Title>Page managemenent</Title>
                </Tab>
                <Tab id="2">
                    <Title>Document classification</Title>
                </Tab>
                <Tab id="3">
                    <Title>Entity extraction</Title>
                </Tab>
            </Header>

            <TabPanel id="0">
                <Content>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book.
                </Content>
            </TabPanel>
            <TabPanel id="1">
                <Content>
                    It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of using Lorem Ipsum is
                    that it has a more-or-less normal distribution of letters, as opposed to using
                    'Content here, content here', making it look like readable English.
                </Content>
            </TabPanel>
            <TabPanel id="2">
                <Content>
                    There are many variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injected humour, or randomised words
                    which don't look even slightly believable. If you are going to use a passage of
                    Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
                    middle of text.
                </Content>
            </TabPanel>
            <TabPanel id="3">
                <Content>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                    in a piece of classical Latin literature from 45 BC, making it over 2000 years
                    old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words, consectetur, from a
                    Lorem Ipsum passage, and going through the cites of the word in classical
                    literature, discovered the undoubtable source.
                </Content>
            </TabPanel>
        </Tabs>
    </div>
)

export default App

const Content = styled.div`
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
