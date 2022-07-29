import { Modal, useModal } from '@faceless-ui/modal'
import { useDarkMode } from '@root/providers/DarkMode'
import React, { useEffect } from 'react'
import { RecursiveNav } from '../../RecursiveNav'
import classes from './index.module.scss'
import { nav } from '@root/docs-nav'
import { useWindowInfo } from '@faceless-ui/window-info'

export const MobileNavModal: React.FC = () => {
  const { isDark } = useDarkMode()

  const { closeAll } = useModal()

  const { breakpoints: { m: midBreak } = {} } = useWindowInfo()

  useEffect(() => {
    if (!midBreak) {
      closeAll()
    }
  }, [closeAll, midBreak])

  return (
    <Modal
      slug="mobile-nav"
      className={[classes.mobileNavModal, isDark && classes.darkMode].filter(Boolean).join(' ')}
    >
      <RecursiveNav items={nav} />
    </Modal>
  )
}
