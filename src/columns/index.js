import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

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
		columnsAmount: {
			type: "number",
			default: 4,
		},
		rowGap: {
			type: "string",
			default: "4",
		},
		columnGap: {
			type: "string",
			default: "4",
		},
	}
});
