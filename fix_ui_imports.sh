#!/bin/bash

# Fix UI component imports that were broken by sed commands

# Avatar component
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-avatar/g' components/ui/avatar.tsx

# Tabs component
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-tabs/g' components/ui/tabs.tsx

# Slider component
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-slider/g' components/ui/slider.tsx

# Popover component
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-popover/g' components/ui/popover.tsx

# Progress component
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-progress/g' components/ui/progress.tsx

# Hover card component
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-hover-card/g' components/ui/hover-card.tsx

# Sheet component
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-sheet/g' components/ui/sheet.tsx

# Scroll area component
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-scroll-area/g' components/ui/scroll-area.tsx

# Label component
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-label/g' components/ui/label.tsx

# Navigation menu component
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-navigation-menu/g' components/ui/navigation-menu.tsx

# Tooltip component
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-tooltip/g' components/ui/tooltip.tsx

# Switch component
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-switch/g' components/ui/switch.tsx

# Breadcrumb component
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-breadcrumb/g' components/ui/breadcrumb.tsx

# Radio group component
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-radio-group/g' components/ui/radio-group.tsx

# Toggle group component
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-toggle-group/g' components/ui/toggle-group.tsx

# Menubar component
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-menubar/g' components/ui/menubar.tsx

# Badge component
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-badge/g' components/ui/badge.tsx

# Sidebar component
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-sidebar/g' components/ui/sidebar.tsx

# Separator component
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-separator/g' components/ui/separator.tsx

# Toggle component
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-toggle/g' components/ui/toggle.tsx

# Checkbox component
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-checkbox/g' components/ui/checkbox.tsx

# Collapsible component
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-collapsible/g' components/ui/collapsible.tsx

# Dropdown menu component
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-dropdown-menu/g' components/ui/dropdown-menu.tsx

# Select component
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-select/g' components/ui/select.tsx

# Context menu component
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-context-menu/g' components/ui/context-menu.tsx

echo "UI component imports fixed!"
