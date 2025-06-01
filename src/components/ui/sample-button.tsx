import type { FC } from "react";
import { css } from "styled-system/css";

export type SampleButtonProps = {
  children: React.ReactNode;
};

export const SampleButton: FC<SampleButtonProps> = ({ children }) => {
  return (
    <button
      type="button"
      className={css({
        backgroundColor: "red",
      })}
    >
      {children}
    </button>
  );
};
