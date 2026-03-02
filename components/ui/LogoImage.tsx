'use client'

import Image from 'next/image'
import { useTheme } from '@/components/ThemeProvider'

export default function LogoImage() {
  const { theme } = useTheme()

  return (
    <Image
      src={theme === 'dark' ? '/images/header-logo-dark.png' : '/images/header-logo-light.png'}
      alt="Erik Benedict"
      width={50}
      height={50}
      className="rounded-md"
      priority
    />
  )
}