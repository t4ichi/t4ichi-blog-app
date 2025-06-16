import type { Meta, StoryObj } from "@storybook/react";
import { RamenSortSelector } from "./ramen-sort-selector";

const meta = {
  title: "Features/Ramen/RamenSortSelector",
  component: RamenSortSelector,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/ramens",
        query: {},
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RamenSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithSortParameter: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/ramens",
        query: { sort: "asc" },
      },
    },
  },
};
