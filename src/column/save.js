import { __ } from '@wordpress/i18n';
import classNames from 'classnames';

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Save({ attributes }) {
	const classes = classNames({
		'scc-col': true,
		[`has-${attributes.backgroundColor}-background-color`]: !!attributes.backgroundColor,
		[`has-${attributes.color}-color`]: !!attributes.color,
		[`scc--span-${attributes.desktop.span}`]: !!attributes.desktop.span,
		[`scc-p-t-${attributes.desktop.paddingTop}`]: !!attributes.desktop.paddingTop,
		[`scc-p-r-${attributes.desktop.paddingRight}`]: !!attributes.desktop.paddingRight,
		[`scc-p-b-${attributes.desktop.paddingBottom}`]: !!attributes.desktop.paddingBottom,
		[`scc-p-l-${attributes.desktop.paddingLeft}`]: !!attributes.desktop.paddingLeft,

		[`laptop:scc--span-${attributes.laptop.span}`]: !!attributes.laptop.span,
		[`laptop:scc-p-t-${attributes.laptop.paddingTop}`]: !!attributes.laptop.paddingTop,
		[`laptop:scc-p-r-${attributes.laptop.paddingRight}`]: !!attributes.laptop.paddingRight,
		[`laptop:scc-p-b-${attributes.laptop.paddingBottom}`]: !!attributes.laptop.paddingBottom,
		[`laptop:scc-p-l-${attributes.laptop.paddingLeft}`]: !!attributes.laptop.paddingLeft,

		[`tablet:scc--span-${attributes.tablet.span}`]: !!attributes.tablet.span,
		[`tablet:scc-p-t-${attributes.tablet.paddingTop}`]: !!attributes.tablet.paddingTop,
		[`tablet:scc-p-r-${attributes.tablet.paddingRight}`]: !!attributes.tablet.paddingRight,
		[`tablet:scc-p-b-${attributes.tablet.paddingBottom}`]: !!attributes.tablet.paddingBottom,
		[`tablet:scc-p-l-${attributes.tablet.paddingLeft}`]: !!attributes.tablet.paddingLeft,

		[`phone:scc--span-${attributes.phone.span}`]: !!attributes.phone.span,
		[`phone:scc-p-t-${attributes.phone.paddingTop}`]: !!attributes.phone.paddingTop,
		[`phone:scc-p-r-${attributes.phone.paddingRight}`]: !!attributes.phone.paddingRight,
		[`phone:scc-p-b-${attributes.phone.paddingBottom}`]: !!attributes.phone.paddingBottom,
		[`phone:scc-p-l-${attributes.phone.paddingLeft}`]: !!attributes.phone.paddingLeft,
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
