import React from 'react'

import { Container } from '@mui/material'
import { SafeEnvironmentContainer } from './SafeEnvironment.style'

const SafeEnvironment = () => {
    return (
        <SafeEnvironmentContainer>
            <Container>
                AMBIENTE SEGURO <i className={"twf-lock"} />
            </Container>
        </SafeEnvironmentContainer>
    )
}

export default SafeEnvironment