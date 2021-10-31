import { __ } from '@wordpress/i18n';

import {
	useBlockProps, __experimentalUseInnerBlocksProps as useInnerBlocksProps, InspectorControls
} from '@wordpress/block-editor';
import { PanelBody, RangeControl, CustomSelectControl } from "@wordpress/components";
import { useCallback } from "@wordpress/element"

import './editor.scss';
import classNames from 'classnames';

const gapOptions = [
	{
		key: "0",
		name: "0px",
	},
	{
		key: "1",
		name: "0.25rem"
	},
	{
		key: "1.5",
		name: "0.375rem"
	},
	{
		key: "2",
		name: "0.5rem"
	},
	{
		key: "2.5",
		name: "0.625rem"
	},
	{
		key: "3",
		name: "0.75rem"
	},
	{
		key: "3.5",
		name: "0.875rem"
	},
	{
		key: "4",
		name: "1rem"
	},
	{
		key: "5",
		name: "1.25rem"
	},
	{
		key: "6",
		name: "1.5rem"
	},
	{
		key: "7",
		name: "1.75rem"
	},
	{
		key: "8",
		name: "2rem"
	},
]

export default function Edit({ setAttributes, attributes }) {
	const classes = classNames({
		'scc': true,
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

	console.log(attributes, classes);
	const blockProps = useBlockProps({
		className: classes
	});

	const template = [...new Array(attributes.desktop.columnsAmount)].map(() => ["simple-columns/column", {}])

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

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ["simple-columns/column"],
		template: template,
		orientation: 'horizontal',
		renderAppender: false,
	});

	return (
		<>
			<InspectorControls>
				<Panel title={__("Desktop Settings (>=1024px)", "simple-columns")} type="desktop" attributes={attributes} setResponsiveAttributes={setResponsiveAttributes} />
				<Panel title={__("Laptop Settings (>=768px)", "simple-columns")} type="laptop" attributes={attributes} setResponsiveAttributes={setResponsiveAttributes} />
				<Panel title={__("Tablet Settings (>=640px)", "simple-columns")} type="tablet" attributes={attributes} setResponsiveAttributes={setResponsiveAttributes} />
				<Panel title={__("Phone Settings (<640px)", "simple-columns")} type="phone" attributes={attributes} setResponsiveAttributes={setResponsiveAttributes} />

				{/* <PanelBody title="Dimensies"></PanelBody> */}
			</InspectorControls>

			<div {...innerBlocksProps} />
		</>
	);
}

function Panel({ title, type, attributes, setResponsiveAttributes }) {
	return (
		<PanelBody title={title} initialOpen={type === "desktop"}>
			<RangeControl
				label={__("Columns amount", "simple-columns")}
				value={attributes[type].columnsAmount}
				onChange={(val) => setResponsiveAttributes(type, "columnsAmount", val)}
				min={1}
				max={12}
			/>
			<CustomSelectControl
				options={gapOptions}
				label={__("Row gap size", "simple-columns")}
				value={gapOptions.find(it => it.key === attributes[type].rowGap)}
				onChange={({ selectedItem }) => setResponsiveAttributes(type, "rowGap", selectedItem.key)}
			/>
			<br />
			<CustomSelectControl
				options={gapOptions}
				label={__("Column gap size", "simple-columns")}
				value={gapOptions.find(it => it.key === attributes[type].columnGap)}
				onChange={({ selectedItem }) => setResponsiveAttributes(type, "columnGap", selectedItem.key)}
			/>
		</PanelBody>
	)
}