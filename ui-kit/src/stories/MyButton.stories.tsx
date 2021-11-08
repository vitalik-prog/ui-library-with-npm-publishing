import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MyButton  from '../MyButton/MyButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: MyButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof MyButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MyButton> = (args) => <MyButton {...args} />;

export const RedBtn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RedBtn.args = {
  color: 'red',
  children: 'Button'
};

export const OrangeBtn = Template.bind({});
OrangeBtn.args = {
  color: 'orange',
  children: 'Button'
};

export const BigBtn = Template.bind({});
BigBtn.args = {
  color: 'red',
  big: true,
  children: 'Button'
};
