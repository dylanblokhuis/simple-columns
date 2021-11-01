import { registerBlockType } from '@wordpress/blocks';
import { columns as icon } from '@wordpress/icons';

// import { select, subscribe } from '@wordpress/data';
import './style.scss';
/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';

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
	edit: Edit,
	save: Save,
	icon,

	attributes: {
		color: {
			type: "string"
		},
		backgroundColor: {
			type: "string"
		},
		verticalAlignment: {
			type: "string"
		},
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

// subscribe(() => {
// 	const editorFns = select('core/editor')
// 	if (!editorFns) {
// 		return;
// 	}

// 	const isSavingPost = editorFns.isSavingPost();
// 	const isAutosavingPost = editorFns.isAutosavingPost();

// 	if (isAutosavingPost) {
// 		return
// 	}

// 	if (!isSavingPost) {
// 		return;
// 	}

// 	console.log("Generate css");

// 	// Do action.
// });
