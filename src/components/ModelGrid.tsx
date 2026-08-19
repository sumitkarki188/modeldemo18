import type { Model } from "@/data/models";
import { ModelCard } from "./ModelCard";

export function ModelGrid({ models, offset = false }: { models: Model[]; offset?: boolean }) {
  if (models.length === 0) {
    return (
      <p className="py-24 text-center text-sm text-muted-foreground">
        No models in this category yet.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {models.map((model, i) => (
        <div key={model.id} className={offset && i % 2 === 1 ? "lg:mt-16" : ""}>
          <ModelCard model={model} index={i} />
        </div>
      ))}
    </div>
  );
}
