import type { RuntimeContext } from "../types/runtime.js";

export function buildStrategyDecision(context: RuntimeContext, snapshot: { score: number }) {
  const shouldTrade = snapshot.score >= 0.7;

  return {
    shouldTrade,
    reason: shouldTrade
      ? "Signal strength passed placeholder threshold"
      : "Signal strength below placeholder threshold",
    market: context.market,
    action: "evaluates the ruleset, opens a position when approved, and hands off ongoing management to the exit logic",
  };
}
