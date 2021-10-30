import { __ } from '@wordpress/i18n';

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save({
		className: "sc-column"
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
