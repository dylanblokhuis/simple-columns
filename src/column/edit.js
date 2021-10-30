import { __ } from '@wordpress/i18n';

import { useBlockProps, InnerBlocks, store } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

import './editor.scss';

export default function Edit({ clientId }) {
	const blockProps = useBlockProps({
		className: "sc-column"
	});

	const { hasChildBlocks } = useSelect(
		(select) => {
			const { getBlockOrder, getBlockRootClientId } = select(store)

			const rootId = getBlockRootClientId(clientId)

			return {
				hasChildBlocks: getBlockOrder(clientId).length > 0,
				rootClientId: rootId,
				columnsIds: getBlockOrder(rootId),
			}
		},
		[clientId]
	)

	return (
		<div {...blockProps}>
			<InnerBlocks renderAppender={() => {
				if (hasChildBlocks) return null;
				return <InnerBlocks.ButtonBlockAppender />
			}} />
		</div>
	);
}