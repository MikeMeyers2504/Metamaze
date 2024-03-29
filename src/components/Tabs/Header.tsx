import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { TabContext, Variant } from '.'

const Header = ({ children }: { children: JSX.Element[] }) => {
    const context = useContext(TabContext)

    return <Wrapper variant={context.variant}>{children}</Wrapper>
}

export default Header

const Wrapper = styled.div<{ variant: Variant }>`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    line-height: 1.5em;

    ${(p) =>
        p.variant === 'secondary' &&
        css`
            background-color: dodgerblue;
        `}
`
