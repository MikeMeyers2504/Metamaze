import React, { FC } from 'react'
import styled from 'styled-components'

const Page: FC<{ content: JSX.Element }> = ({ content }) => <Wrapper>{content}</Wrapper>

export default Page

const Wrapper = styled.div`
    display: flex;
    padding: 10px;
    background-color: aliceblue;
`
