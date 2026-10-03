import Example, { RainbowButton } from "./button-ui";
import { Sparkles, Send, ShieldCheck, Zap } from "lucide-react";

export default function DemoOne() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-950 p-8 text-white">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">RemitMind Rainbow Glow Button</h2>
        <p className="text-sm text-slate-400">Interactive button design with smooth rotating border glow</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Original component from specification */}
        <Example />

        {/* Enhanced with Lucide React icons */}
        <RainbowButton showIcon>
          Dispatch Remittance
        </RainbowButton>

        <RainbowButton icon={<Zap className="w-4 h-4 text-amber-400" />}>
          Instant AI Analysis
        </RainbowButton>

        <RainbowButton icon={<ShieldCheck className="w-4 h-4 text-emerald-400" />}>
          Verify Zero AML Risk
        </RainbowButton>
      </div>
    </div>
  );
}
