import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import Page from './Page'

type Variant = 'primary' | 'secondary'

const Tab: FC<{
    variant: Variant
    defaultActive: string
    tabs: [{ header: string; content: string; id: string }]
}> = (props) => {
    const [active, setActive] = React.useState(props.defaultActive ?? null)

    return (
        <>
            <Wrapper variant={props.variant}>
                {props.tabs.map(({ header, id }) => (
                    <HeaderWrapper
                        onClick={() => {
                            setActive(id)
                        }}
                        key={id}
                        active={active === id}
                        variant={props.variant}
                    >
                        <Header>{header}</Header>
                    </HeaderWrapper>
                ))}
            </Wrapper>
            <Page content={props.tabs.find((tab) => tab.id === active)?.content ?? ''} />
        </>
    )
}

export default Tab

const Wrapper = styled.div<{ variant: Variant }>`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;

    ${(p) =>
        p.variant === 'secondary' &&
        css`
            background-color: dodgerblue;
        `}
`

const HeaderWrapper = styled.div<{ active: boolean; variant: Variant }>`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-basis: 0;
    justify-content: center;

    ${(p) =>
        p.active &&
        p.variant === 'primary' &&
        css`
            color: blue;
            border-radius: 10px 10px 0px 0px;
            background-color: aliceblue;
            border: 1px solid lightgray;
            border-bottom: transparent;
        `}

    ${(p) =>
        p.variant === 'secondary' &&
        css`
            color: rgb(173, 216, 230);
            margin-bottom: 10px;
            border-bottom: 2px solid rgb(173, 216, 230, 0.3);
        `}

    ${(p) =>
        p.active &&
        p.variant === 'secondary' &&
        css`
            color: white;
            border-bottom: 2px solid white;
        `}
`

const Header = styled.div`
    display: flex;
    flex-grow: 1;
    flex-basis: 0;
    justify-content: center;
    padding: 10px;
`
