import TopHeader from '@/components/TopHeader';
import { PropsWithChildren, ReactNode } from 'react';

interface BasicLayoutProps extends PropsWithChildren {
  showTopHeader?: boolean;
  topHeaderActions?: ReactNode;
}

export default function BasicLayout({ children, showTopHeader = true, topHeaderActions }: BasicLayoutProps) {
  return (
    <div className="min-h-screen bg-cream text-ink">
      {showTopHeader && <TopHeader actions={topHeaderActions} />}
      {children}
    </div>
  );
}
