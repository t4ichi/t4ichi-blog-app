import type React from "react";
import { PLAY_CARD_APP_USE_CASES } from "../../constants/play-card-app";
import type { PlayCardAppUseCase } from "../../types/play-card-app";

export type PlayCardAppUseCasesProps = {
  useCases?: PlayCardAppUseCase[];
  title?: string;
  className?: string;
};

export const PlayCardAppUseCases: React.FC<PlayCardAppUseCasesProps> = ({
  useCases = PLAY_CARD_APP_USE_CASES,
  title = "こんな場面で活躍",
  className = "",
}) => {
  if (useCases.length === 0) {
    return null;
  }

  return (
    <section className={`py-16 bg-muted ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            パーティーから日常まで、様々なシーンで楽しめます
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} useCase={useCase} />
          ))}
        </div>
      </div>
    </section>
  );
};

type UseCaseCardProps = {
  useCase: PlayCardAppUseCase;
};

const UseCaseCard: React.FC<UseCaseCardProps> = ({ useCase }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-ring transition-colors group">
      <div className="flex items-start gap-6">
        <div className="text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          {useCase.icon}
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-bold text-foreground mb-3">
            {useCase.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {useCase.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {useCase.examples.map((example, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full font-medium"
              >
                {example}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
