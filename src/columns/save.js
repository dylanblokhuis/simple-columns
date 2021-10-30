import { __ } from '@wordpress/i18n';

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const blockProps = useBlockProps.save({
		className: `sc-columns sc-columns--cols-${attributes.columnsAmount} sc-columns--row-gap-${attributes.rowGap} sc-columns--col-gap-${attributes.columnGap}`
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
