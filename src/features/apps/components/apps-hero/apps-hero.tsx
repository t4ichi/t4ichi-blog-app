import Image from "next/image";
import type React from "react";

export type AppsHeroProps = {
  name: string;
  subtitle: string;
  description: string;
  icon?: string;
  iconImage?: string;
  children?: React.ReactNode;
};

export const AppsHero: React.FC<AppsHeroProps> = ({
  name,
  subtitle,
  description,
  icon,
  iconImage,
  children,
}) => {
  return (
    <section className="relative min-h-[500px] bg-background">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        {(icon || iconImage) && (
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto mb-4 bg-card border border-border rounded-lg flex items-center justify-center">
              {iconImage ? (
                <Image
                  src={iconImage}
                  alt={`${name} icon`}
                  width={64}
                  height={64}
                  className="rounded-md"
                />
              ) : (
                <span className="text-4xl">{icon}</span>
              )}
            </div>
          </div>
        )}

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {name}
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground font-medium mb-6">
          {subtitle}
        </p>

        <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
          {description}
        </p>

        {children && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {children}
          </div>
        )}
      </div>
    </section>
  );
};
