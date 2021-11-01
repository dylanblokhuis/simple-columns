import { __ } from '@wordpress/i18n';
import classNames from 'classnames';

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Save({ attributes }) {
	const classes = classNames({
		'scc-col': true,
		[`has-${attributes.backgroundColor}-background-color`]: !!attributes.backgroundColor,

		[`scc--span-${attributes.desktop.span}`]: !!attributes.desktop.span,
		[`laptop:scc--span-${attributes.laptop.span}`]: !!attributes.laptop.span,
		[`tablet:scc--span-${attributes.tablet.span}`]: !!attributes.tablet.span,
		[`phone:scc--span-${attributes.phone.span}`]: !!attributes.phone.span,
	})

	const blockProps = useBlockProps.save({
		className: classes
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
