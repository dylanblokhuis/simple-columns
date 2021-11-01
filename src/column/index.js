import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import Edit from './edit';
import Save from './save';

const attributes = {
	span: {
		type: 'string'
	}
}

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('simple-columns/column', {
	edit: Edit,
	save: Save,

	attributes: {
		desktop: {
			type: 'object',
			default: {
				span: 1,
			},
			...attributes
		},
		laptop: {
			type: 'object',
			default: {
				span: undefined,
			},
			...attributes
		},
		tablet: {
			type: 'object',
			default: {
				span: undefined,
			},
			...attributes
		},
		phone: {
			type: 'object',
			default: {
				span: undefined,
			},
			...attributes
		},
	}
});
