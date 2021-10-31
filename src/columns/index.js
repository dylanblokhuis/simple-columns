import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

const attributes = {
	columnsAmount: {
		type: "number",
	},
	rowGap: {
		type: "string",
	},
	columnGap: {
		type: "string",
	},
}

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('simple-columns/columns', {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
	attributes: {
		desktop: {
			type: 'object',
			default: {
				columnsAmount: 2,
				rowGap: "4",
				columnGap: "4"
			},
			...attributes
		},
		laptop: {
			type: 'object',
			default: {
				columnsAmount: undefined,
				rowGap: undefined,
				columnGap: undefined
			},
			...attributes
		},
		tablet: {
			type: 'object',
			default: {
				columnsAmount: undefined,
				rowGap: undefined,
				columnGap: undefined
			},
			...attributes
		},
		phone: {
			type: 'object',
			default: {
				columnsAmount: undefined,
				rowGap: undefined,
				columnGap: undefined
			},
			...attributes
		}
	}
});
