import React from 'react'
import * as MapIcons from './mapIcons'

export const Icons = ({ name = 'ArrowRight' }: { name: keyof typeof MapIcons }) => {
	return React.createElement(MapIcons[name])
}