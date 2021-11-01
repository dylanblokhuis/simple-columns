import { __ } from '@wordpress/i18n';
import { ToolbarGroup } from '@wordpress/components';

import { alignEqual, alignTop, alignCenter, alignBottom } from './icons.js';

const BLOCK_ALIGNMENTS_CONTROLS = {
  equal: {
    icon: alignEqual,
    title: __('Equal', 'simple-columns'),
  },
  top: {
    icon: alignTop,
    title: __('Align top', 'simple-columns'),
  },
  center: {
    icon: alignCenter,
    title: __('Align middle', 'simple-columns'),
  },
  bottom: {
    icon: alignBottom,
    title: __('Align bottom', 'simple-columns'),
  },
};

const DEFAULT_CONTROLS = ['equal', 'top', 'center', 'bottom'];
const DEFAULT_CONTROL = 'equal';

const POPOVER_PROPS = {
  isAlternate: true,
};

function BlockVerticalAlignmentUI({
  value,
  onChange,
  controls = DEFAULT_CONTROLS,
  isCollapsed = true,
}) {
  function applyOrUnset(align) {
    return () => onChange(value === align ? undefined : align);
  }

  const activeAlignment = BLOCK_ALIGNMENTS_CONTROLS[value];
  const defaultAlignmentControl =
    BLOCK_ALIGNMENTS_CONTROLS[DEFAULT_CONTROL];

  return (
    <ToolbarGroup
      popoverProps={POPOVER_PROPS}
      icon={
        activeAlignment
          ? activeAlignment.icon
          : defaultAlignmentControl.icon
      }
      label={__(
        'Change vertical alignment',
        'simple-columns'
      )}
      controls={controls.map((control) => {
        return {
          ...BLOCK_ALIGNMENTS_CONTROLS[control],
          isActive: value === control,
          role: isCollapsed ? 'menuitemradio' : undefined,
          onClick: applyOrUnset(control),
        };
      })}
      isCollapsed
    />
  );
}

export default BlockVerticalAlignmentUI;