import React, { useContext } from 'react'
import styled, { css, StyledComponent } from 'styled-components'
import { TabContext, Variant } from '.'

const Tab = ({ id, children }: { id: string; children: JSX.Element }) => {
    const context = useContext(TabContext)

    return React.createElement(
        variants[context.variant],
        {
            onClick: () => context.setActiveTabId(id),
            variant: context.variant,
            active: context.activeTabId === id,
        },
        children
    )
}

export default Tab

const BaseHeader = styled.div<{ variant: Variant; active: boolean }>`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-basis: 0;
    justify-content: center;
    cursor: pointer;
`

const PrimaryHeader = styled(BaseHeader)`
    ${(p) =>
        p.active &&
        css`
            color: blue;
            border-radius: 10px 10px 0px 0px;
            background-color: aliceblue;
            border: 1px solid lightgray;
            border-bottom: transparent;
            font-weight: bold;
        `}
`

const SecondaryHeader = styled(BaseHeader)`
    color: rgb(173, 216, 230);
    margin-bottom: 10px;
    border-bottom: 2px solid rgb(173, 216, 230, 0.3);

    ${(p) =>
        p.active &&
        css`
            color: white;
            border-bottom: 2px solid white;
            font-weight: bold;
        `}
`

const variants: { [key in Variant]: StyledComponent<any, any, any> } = {
    primary: PrimaryHeader,
    secondary: SecondaryHeader,
}
