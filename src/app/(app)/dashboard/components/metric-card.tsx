import type { FC } from 'react';

interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export function MetricCard({ title, value, icon: Icon }: MetricCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-lg bg-accent p-4 text-accent-foreground shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-background text-foreground">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <div className="text-sm text-muted-foreground">{title}</div>
        <div className="text-2xl font-bold">{value}</div>
      </div>
    </div>
  );
}
