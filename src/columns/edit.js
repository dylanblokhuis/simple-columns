import { __ } from '@wordpress/i18n';

import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, CustomSelectControl } from "@wordpress/components";

import './editor.scss';

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
	const blockProps = useBlockProps({
		className: `sc-columns sc-columns--cols-${attributes.columnsAmount} sc-columns--row-gap-${attributes.rowGap} sc-columns--col-gap-${attributes.columnGap}`
	});

	const template = [...new Array(attributes.columnsAmount)].map(() => ["simple-columns/column", {}])

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title={__("Settings", "simple-columns")} initialOpen={true}>
					<RangeControl
						label={__("Columns amount", "simple-columns")}
						value={attributes.columnsAmount}
						onChange={(val) => setAttributes({ columnsAmount: val })}
						min={1}
						max={12}
					/>
					<CustomSelectControl
						options={gapOptions}
						label={__("Row gap size", "simple-columns")}
						value={gapOptions.find(it => it.key === attributes.rowGap)}
						onChange={({ selectedItem }) => setAttributes({ rowGap: selectedItem.key })}
					/>
					<CustomSelectControl
						options={gapOptions}
						label={__("Column gap size", "simple-columns")}
						value={gapOptions.find(it => it.key === attributes.columnGap)}
						onChange={({ selectedItem }) => setAttributes({ columnGap: selectedItem.key })}
					/>
				</PanelBody>
				{/* <PanelBody title="Dimensies"></PanelBody> */}
			</InspectorControls>


			<InnerBlocks allowedBlocks={["simple-columns/column"]} template={template} />
		</div>
	);
}