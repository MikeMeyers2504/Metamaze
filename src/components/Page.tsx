import React, { FC } from 'react'
import styled from 'styled-components'

const Page: FC<{ content: string }> = (props) => {
    return <Wrapper>{props.content}</Wrapper>
}

export default Page

const Wrapper = styled.div`
    display: flex;
    padding: 10px;
    background-color: aliceblue;
`
