import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	__experimentalUseInnerBlocksProps as useInnerBlocksProps,
	InspectorControls,
	BlockControls,
	PanelColorSettings,
	getColorObjectByColorValue,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl, CustomSelectControl } from "@wordpress/components";
import { useCallback } from "@wordpress/element"
import { useSelect } from '@wordpress/data';
import classNames from 'classnames';

import { UTILITIES } from '../constants';
import './editor.scss';
import ColumnsVerticalAlignment from './toolbar/column-vertical-alignment';

function Edit({ clientId, setAttributes, attributes }) {
	const { colors } = useSelect(
		(select) => {
			const { colors } = select('core/editor').getEditorSettings();

			return {
				colors: colors
			}
		},
		[clientId]
	)

	const classes = classNames({
		'scc': true,
		[`has-${attributes.backgroundColor}-background-color`]: !!attributes.backgroundColor,
		[`has-${attributes.color}-color`]: !!attributes.color,
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

	const blockProps = useBlockProps({
		className: classes
	});

	const template = [...new Array(attributes.desktop.columnsAmount)].map(() => ["simple-columns/column", {}])

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ["simple-columns/column"],
		template: template,
		orientation: 'horizontal',
		renderAppender: false,
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
			<BlockControls>
				<ColumnsVerticalAlignment
					onChange={(val) => setAttributes({
						verticalAlignment: val
					})}
					value={attributes.verticalAlignment}
				/>
			</BlockControls>
			<InspectorControls>
				<PanelColorSettings
					title={__("Color", "simple-columns")}
					initialOpen={false}
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
				<ColumnsPanel title={__("Desktop Settings (>=1024px)", "simple-columns")} type="desktop" attributes={attributes} setResponsiveAttributes={setResponsiveAttributes} />
				<ColumnsPanel title={__("Laptop Settings (>=768px)", "simple-columns")} type="laptop" attributes={attributes} setResponsiveAttributes={setResponsiveAttributes} />
				<ColumnsPanel title={__("Tablet Settings (>=640px)", "simple-columns")} type="tablet" attributes={attributes} setResponsiveAttributes={setResponsiveAttributes} />
				<ColumnsPanel title={__("Phone Settings (<640px)", "simple-columns")} type="phone" attributes={attributes} setResponsiveAttributes={setResponsiveAttributes} />
			</InspectorControls>

			<div {...innerBlocksProps} />
		</>
	);
}

function ColumnsPanel({ title, type, attributes, setResponsiveAttributes }) {
	return (
		<PanelBody title={title} initialOpen={type === "desktop"}>
			<RangeControl
				label={__("Columns amount", "simple-columns")}
				value={attributes[type].columnsAmount}
				onChange={(val) => setResponsiveAttributes(type, "columnsAmount", val)}
				min={1}
				max={12}
				allowReset
			/>

			<CustomSelectControl
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
			/>
		</PanelBody>
	)
}

export default Edit
