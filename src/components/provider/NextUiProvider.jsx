"use client"

import React from 'react';

import { NextUIProvider } from '@nextui-org/react'

export const NextUiProvider = ({children}) => {
  return <NextUIProvider>{children}</NextUIProvider>
}
