import { __ } from '@wordpress/i18n';
import { select } from "@wordpress/data"
import classNames from 'classnames';

import { useBlockProps, InnerBlocks, getColorObjectByColorValue } from '@wordpress/block-editor';

export default function Save({ attributes }) {
	const classes = classNames({
		'scc': true,
		[`has-${attributes.backgroundColor}-background-color`]: !!attributes.backgroundColor,
		[`scc--items-${attributes.verticalAlignment}`]: !!attributes.verticalAlignment,
		[`scc--cols-${attributes.desktop.columnsAmount}`]: !!attributes.desktop.columnsAmount,
		[`scc--row-gap-${attributes.desktop.rowGap}`]: !!attributes.desktop.rowGap,
		[`scc--col-gap-${attributes.desktop.columnGap}`]: !!attributes.desktop.columnGap,

		[`laptop:scc--cols-${attributes.laptop.columnsAmount}`]: !!attributes.laptop.columnsAmount,
		[`laptop:scc--row-gap-${attributes.laptop.rowGap}`]: !!attributes.laptop.rowGap,
		[`laptop:scc--col-gap-${attributes.laptop.columnGap}`]: !!attributes.laptop.columnGap,

		[`tablet:scc--cols-${attributes.tablet.columnsAmount}`]: !!attributes.tablet.columnsAmount,
		[`tablet:scc--row-gap-${attributes.tablet.rowGap}`]: !!attributes.tablet.rowGap,
		[`tablet:scc--col-gap-${attributes.tablet.columnGap}`]: !!attributes.tablet.columnGap,

		[`phone:scc--cols-${attributes.phone.columnsAmount}`]: !!attributes.phone.columnsAmount,
		[`phone:scc--row-gap-${attributes.phone.rowGap}`]: !!attributes.phone.rowGap,
		[`phone:scc--col-gap-${attributes.phone.columnGap}`]: !!attributes.phone.columnGap,
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
