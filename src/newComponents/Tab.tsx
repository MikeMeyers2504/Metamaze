import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { TabContext } from './TabSwitcher'
import { primary, secondary } from '../utils'

const Tab = ({ id, children }: { id: string; children: JSX.Element }) => {
    const context = useContext(TabContext)

    return (
        <HeaderWrapper
            onClick={() => context.setActiveTabID(id)}
            variant={context.variant}
            active={context.activeTabID === id}
        >
            {children}
        </HeaderWrapper>
    )
}

export default Tab

const HeaderWrapper = styled.div<{ variant: string; active: boolean }>`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-basis: 0;
    justify-content: center;
    cursor: pointer;

    ${(p) =>
        p.active &&
        p.variant === primary &&
        css`
            color: blue;
            border-radius: 10px 10px 0px 0px;
            background-color: aliceblue;
            border: 1px solid lightgray;
            border-bottom: transparent;
            font-weight: bold;
        `}

    ${(p) =>
        p.variant === secondary &&
        css`
            color: rgb(173, 216, 230);
            margin-bottom: 10px;
            border-bottom: 2px solid rgb(173, 216, 230, 0.3);
        `}

    ${(p) =>
        p.active &&
        p.variant === secondary &&
        css`
            color: white;
            border-bottom: 2px solid white;
            font-weight: bold;
        `}
`
