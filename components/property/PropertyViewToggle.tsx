"use client";

import { Button } from '@/components/ui/button';
import { LayoutGrid, List, Map } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PropertyViewToggleProps {
  currentView: 'grid' | 'list' | 'map';
  onViewChange: (view: 'grid' | 'list' | 'map') => void;
}

export default function PropertyViewToggle({
  currentView,
  onViewChange,
}: PropertyViewToggleProps) {
  return (
    <div className="flex border border-border rounded-lg overflow-hidden">
      <ToggleButton 
        active={currentView === 'grid'}
        onClick={() => onViewChange('grid')}
        icon={<LayoutGrid className="h-4 w-4" />}
        label="Grid"
      />
      <ToggleButton 
        active={currentView === 'list'}
        onClick={() => onViewChange('list')}
        icon={<List className="h-4 w-4" />}
        label="List"
      />
      <ToggleButton 
        active={currentView === 'map'}
        onClick={() => onViewChange('map')}
        icon={<Map className="h-4 w-4" />}
        label="Map"
      />
    </div>
  );
}

interface ToggleButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

function ToggleButton({ active, onClick, icon, label }: ToggleButtonProps) {
  return (
    <Button 
      variant="ghost"
      className={cn(
        "flex items-center gap-2 px-3 py-1.5 h-10 rounded-none border-r last:border-r-0 border-border",
        active ? "bg-primary/10 text-primary" : "bg-transparent"
      )}
      onClick={onClick}
    >
      {icon}
      <span className="hidden md:inline text-sm">{label}</span>
    </Button>
  );
}