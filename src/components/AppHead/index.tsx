import React from 'react'
import NextHead from 'next/head'

export const AppHead: React.FC = () => {
  return (
    <NextHead>
      <title>Faceless UI</title>
      <link
rel="icon"
href="https://metrobots.xyz/img/logo.webp"
      />
    </NextHead>
  )
}
