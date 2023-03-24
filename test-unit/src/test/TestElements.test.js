/* 
二、测试节点元素
1.节点元素是否具有文本
2.节点元素是否具有(或不具有)属性
3.节点元素是否处于disabled状态
*/


import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from '@testing-library/react';
import TestElements from '../components/TestElements'

afterEach(cleanup);

it('should equal to 0', () => {
  const { getByTestId } = render(<TestElements />);
  expect(getByTestId('counter')).toHaveTextContent(0) //检查节点元素是否具有文本“0”
});

it('should be enabled', () => {
  const { getByTestId } = render(<TestElements />);
  expect(getByTestId('button-up')).not.toHaveAttribute('disabled') //检查节点元素是否<没有>属性“disabled”
});

it('should be disabled', () => {
  const { getByTestId } = render(<TestElements />);
  expect(getByTestId('button-down')).toBeDisabled() //检查节点元素是否处于disabled状态
});

it('should be antd', () => {
  const { getByTestId } = render(<TestElements />);
  expect(getByTestId('button-antd')).toHaveTextContent('Primary') //检查节点元素是否处于disabled状态
});