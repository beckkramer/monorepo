import React from 'react'

import { NavLink } from '../NavLink'
import { AppBar } from '.' // will import from this folder's index file

export default {
  title: 'Components/AppBar',
  component: AppBar
}

const Template = (args) => <AppBar {...args}>{args.children}</AppBar>

export const Default = Template.bind({})

Default.args = {
  projectDescription: 'A short description of the goals of this project.',
  projectName: 'Example Project',
  children: (<NavLink destination="/one" label="Project Link 1" />)
}
