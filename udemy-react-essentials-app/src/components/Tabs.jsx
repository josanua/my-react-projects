export default function Tabs({children, buttons, buttonsContainer}) {

    const ButtonsContainer = buttonsContainer || 'ul';

    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    )
}