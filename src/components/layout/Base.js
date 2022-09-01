import { Divider } from '@mui/material'
import { useContext } from 'react'
import LowOnBalanceTip from '../molecules/LowOnBalanceTip'
import NavBar from '../molecules/NavBar'
import NFTModal from '../organisms/NFTModal'
import NFTModalProvider from '../providers/NFTModalProvider'
import { Web3Context } from '../providers/Web3Provider'

export default function BaseLayout({ children }) {
  const { network, balance, isReady, hasWeb3 } = useContext(Web3Context)
  const isLowOnEther = balance < 0.1
  return (
    <>
      <NFTModalProvider>
        <NavBar />
        <Divider style={{ borderColor: '#0e9bed', borderBottomWidth: 'initial', boxShadow: '0px 2px 15px #f2f6ff' }} />
        {hasWeb3 && isReady && network && isLowOnEther && <LowOnBalanceTip />}
        {children}
        <NFTModal />
      </NFTModalProvider>
    </>
  )
}
