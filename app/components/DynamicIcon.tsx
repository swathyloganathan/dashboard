import dynamic from 'next/dynamic';
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

const NextDynamicIcon = ({ name, ...props }: { name: keyof typeof dynamicIconImports } & LucideProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name], { ssr: false });
  return <LucideIcon {...props} />;
};

export default NextDynamicIcon;
