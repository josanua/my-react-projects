export default function Tabs({children, buttons, ButtonsContainer = 'ul'}) {

    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    )
}