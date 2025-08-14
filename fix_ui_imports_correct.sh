#!/bin/bash

# Fix UI component imports - only fix components that actually need specific Radix UI packages

# Components that need specific Radix UI packages (these are installed)
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-avatar/g' components/ui/avatar.tsx
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-tabs/g' components/ui/tabs.tsx
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-slider/g' components/ui/slider.tsx
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-popover/g' components/ui/popover.tsx
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-progress/g' components/ui/progress.tsx
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-hover-card/g' components/ui/hover-card.tsx
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-scroll-area/g' components/ui/scroll-area.tsx
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-label/g' components/ui/label.tsx
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-navigation-menu/g' components/ui/navigation-menu.tsx
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-tooltip/g' components/ui/tooltip.tsx
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-switch/g' components/ui/switch.tsx
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-radio-group/g' components/ui/radio-group.tsx
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-toggle-group/g' components/ui/toggle-group.tsx
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-menubar/g' components/ui/menubar.tsx
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-separator/g' components/ui/separator.tsx
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-toggle/g' components/ui/toggle.tsx
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-checkbox/g' components/ui/checkbox.tsx
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-collapsible/g' components/ui/collapsible.tsx
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-dropdown-menu/g' components/ui/dropdown-menu.tsx
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-select/g' components/ui/select.tsx
sed -i '' 's/@radix-ui\/react-slot/@radix-ui\/react-context-menu/g' components/ui/context-menu.tsx

# Components that only need @radix-ui/react-slot (these are NOT specific packages)
# These should stay as @radix-ui/react-slot:
# - badge.tsx
# - breadcrumb.tsx
# - button.tsx
# - form.tsx
# - sidebar.tsx

echo "UI component imports fixed with correct packages!"
