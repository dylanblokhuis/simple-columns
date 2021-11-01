import { __ } from '@wordpress/i18n';

import { useBlockProps, __experimentalUseInnerBlocksProps as useInnerBlocksProps, store, InspectorControls } from '@wordpress/block-editor';
import { useCallback } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import classNames from 'classnames';

import './editor.scss';
import { PanelBody, RangeControl } from '@wordpress/components';

export default function Edit({ clientId, attributes, setAttributes }) {
	const classes = classNames({
		'scc-col': true,
		[`scc--span-${attributes.desktop.span}`]: !!attributes.desktop.span,
		[`laptop:scc--span-${attributes.laptop.span}`]: !!attributes.laptop.span,
		[`tablet:scc--span-${attributes.tablet.span}`]: !!attributes.tablet.span,
		[`phone:scc--span-${attributes.phone.span}`]: !!attributes.phone.span,
	})

	const blockProps = useBlockProps({
		className: classes
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

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		// orientation: 'horizontal',
		renderAppender: () => {
			if (hasChildBlocks) return null;
			return <InnerBlocks.ButtonBlockAppender />
		},
	});

	const setResponsiveAttributes = useCallback(
		(type, key, value) => {
			setAttributes({
				[type]: {
					...attributes[type],
					[key]: value
				}
			})
		},
		[attributes],
	)

	return (
		<>
			<InspectorControls>
				<ColumnPanel title={__("Desktop Settings (>=1024px)", "simple-columns")} type="desktop" attributes={attributes} setResponsiveAttributes={setResponsiveAttributes} />
				<ColumnPanel title={__("Laptop Settings (>=768px)", "simple-columns")} type="laptop" attributes={attributes} setResponsiveAttributes={setResponsiveAttributes} />
				<ColumnPanel title={__("Tablet Settings (>=640px)", "simple-columns")} type="tablet" attributes={attributes} setResponsiveAttributes={setResponsiveAttributes} />
				<ColumnPanel title={__("Phone Settings (<640px)", "simple-columns")} type="phone" attributes={attributes} setResponsiveAttributes={setResponsiveAttributes} />
			</InspectorControls>

			<div {...innerBlocksProps} />
		</>
	);
}

function ColumnPanel({ title, type, attributes, setResponsiveAttributes }) {
	return (
		<PanelBody title={title} initialOpen={type === "desktop"}>
			<RangeControl
				label={__("Column span", "simple-columns")}
				value={attributes[type].span}
				onChange={(val) => setResponsiveAttributes(type, "span", val)}
				min={1}
				max={12}
			/>

			{/* <CustomSelectControl
				options={UTILITIES}
				label={__("Row gap size", "simple-columns")}
				value={UTILITIES.find(it => it.key === attributes[type].rowGap)}
				onChange={({ selectedItem }) => setResponsiveAttributes(type, "rowGap", selectedItem.key)}
			/>
			<br />
			<CustomSelectControl
				options={UTILITIES}
				label={__("Column gap size", "simple-columns")}
				value={UTILITIES.find(it => it.key === attributes[type].columnGap)}
				onChange={({ selectedItem }) => setResponsiveAttributes(type, "columnGap", selectedItem.key)}
			/> */}
		</PanelBody>
	)
}