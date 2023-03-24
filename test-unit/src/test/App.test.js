/*
一、获取App快照
*/

import React from 'react'
import { render, cleanup } from '@testing-library/react'
import App from '../App'

afterEach(cleanup) //在每个测试完成后清除所有内容

it('should take a snapshot', () => {
    const { asFragment } = render(<App />)

    expect(asFragment()).toMatchSnapshot() //确保 App 组件的片段与快照匹配
})
