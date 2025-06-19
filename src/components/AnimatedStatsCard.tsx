
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AnimatedStatsCardProps {
  count: number;
  label: string;
  suffix: string;
  icon: LucideIcon;
  delay: number;
}

const AnimatedStatsCard: React.FC<AnimatedStatsCardProps> = ({
  count,
  label,
  suffix,
  icon: Icon,
  delay
}) => {
  return (
    <div 
      className="premium-card bg-white/10 backdrop-blur-sm border-white/20 text-white p-8 group hover:bg-white/20 transition-all duration-500"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-center mb-4">
        <div className="bg-white/20 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-8 w-8 text-white" />
        </div>
      </div>
      <div className="text-5xl font-bold mb-2 counter text-center">{count}{suffix}</div>
      <div className="text-lg text-blue-100 text-center leading-tight">{label}</div>
    </div>
  );
};

export default AnimatedStatsCard;
