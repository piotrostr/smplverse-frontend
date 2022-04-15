/** @jsxImportSource theme-ui */
import styled from '@emotion/styled'
import { Flex } from 'theme-ui'

import Wallet from './Wallet'

const HeaderContainer = styled.header``

const Separator = styled.div``

const Header = () => {
  return (
    <HeaderContainer sx={{ p: 4, display: 'flex', flexDirection: 'row' }}>
      <Separator sx={{ mx: 'auto' }} />
      <Flex sx={{ flexDirection: 'row', alignItems: 'center' }}>
        <Wallet />
      </Flex>
    </HeaderContainer>
  )
}

export default Header
