import { __ } from '@wordpress/i18n';

import { useBlockProps, __experimentalUseInnerBlocksProps as useInnerBlocksProps, InnerBlocks, store, InspectorControls, getColorObjectByColorValue, PanelColorSettings } from '@wordpress/block-editor';
import { useCallback } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import classNames from 'classnames';

import './editor.scss';
import { CustomSelectControl, PanelBody, RangeControl } from '@wordpress/components';
import { UTILITIES } from '../constants';

export default function Edit({ clientId, attributes, setAttributes }) {
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

	const blockProps = useBlockProps({
		className: classes
	});

	const { hasChildBlocks, colors } = useSelect(
		(select) => {
			const { getBlockOrder } = select(store)
			const { colors } = select('core/editor').getEditorSettings();

			return {
				hasChildBlocks: getBlockOrder(clientId).length > 0,
				colors: colors
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

	const setColorAttr = useCallback(
		(key, hex) => {
			const object = getColorObjectByColorValue(colors, hex);
			const colorClass = object ? `${object.slug}` : undefined;

			setAttributes({
				[key]: colorClass
			})
		},
		[attributes],
	)

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={__("Color", "simple-columns")}
					colorSettings={[
						{
							label: __("Background color", "simple-columns"),
							value: colors.find(it => it.slug === attributes.backgroundColor)?.color,
							onChange: (val) => setColorAttr("backgroundColor", val),
							disableCustomColors: true,
							clearable: true
						},
						{
							label: __("Text color", "simple-columns"),
							value: colors.find(it => it.slug === attributes.color)?.color,
							onChange: (val) => setColorAttr("color", val),
							disableCustomColors: true,
							clearable: true
						}
					]}
				/>
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

			<span>{__("Padding", "simple-columns")}</span>
			<div className="sc-padding-wrapper">
				<CustomSelectControl
					onChange={({ selectedItem }) => setResponsiveAttributes(type, "paddingLeft", selectedItem.key)}
					value={UTILITIES.find(it => it.key === attributes[type].paddingLeft)}
					className="sc-padding-selector left" options={UTILITIES}
				/>
				<CustomSelectControl
					onChange={({ selectedItem }) => setResponsiveAttributes(type, "paddingTop", selectedItem.key)}
					value={UTILITIES.find(it => it.key === attributes[type].paddingTop)}
					className="sc-padding-selector top"
					options={UTILITIES}
				/>
				<CustomSelectControl
					onChange={({ selectedItem }) => setResponsiveAttributes(type, "paddingRight", selectedItem.key)}
					value={UTILITIES.find(it => it.key === attributes[type].paddingRight)}
					className="sc-padding-selector right"
					options={UTILITIES}
				/>
				<CustomSelectControl
					onChange={({ selectedItem }) => setResponsiveAttributes(type, "paddingBottom", selectedItem.key)}
					value={UTILITIES.find(it => it.key === attributes[type].paddingBottom)}
					className="sc-padding-selector bottom"
					options={UTILITIES}
				/>
			</div>

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
