import type { Meta, StoryObj } from "@storybook/react";
import { AppsScreenshotCard } from "./apps-screenshot-card";

const meta = {
  title: "Features/Apps/AppsScreenshotCard",
  component: AppsScreenshotCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    screenshot: {
      description: "スクリーンショットの情報",
    },
  },
} satisfies Meta<typeof AppsScreenshotCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    screenshot: {
      src: "/images/apps/play-card-app/card-drawing-animation.gif",
      alt: "カード引きアニメーション",
      title: "シンプルなカード引き操作",
      description:
        "ワンタップでカードを引ける直感的なインターフェース。実際のカードを引く感覚を再現した滑らかなアニメーション",
    },
  },
};

export const WithHistory: Story = {
  args: {
    screenshot: {
      src: "/images/apps/play-card-app/card-history.png",
      alt: "引いたカード履歴",
      title: "引いたカード一覧",
      description:
        "これまでに引いたカードの履歴を一覧で確認。順番とカードの種類が一目でわかります",
    },
  },
};

export const WithoutDescription: Story = {
  args: {
    screenshot: {
      src: "/images/apps/play-card-app/card-drawing-animation.gif",
      alt: "カード引きアニメーション",
      title: "シンプルなカード引き操作",
    },
  },
};