<?php

/**
 * Plugin Name:       Simple Columns
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       simple-columns
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function create_block_simple_columns_block_init()
{
	register_block_type(__DIR__ . "/src/columns");
	register_block_type(__DIR__ . "/src/column");
}
add_action('init', 'create_block_simple_columns_block_init');

function enqueue_block_simple_columns_assets()
{
	$asset_file = require plugin_dir_path(__FILE__) . 'build/index.asset.php';
	wp_enqueue_script('simple-columns', plugins_url('/build/index.js', __FILE__), $asset_file['dependencies'], $asset_file['version'], false);
}
add_action('enqueue_block_editor_assets', 'enqueue_block_simple_columns_assets');
