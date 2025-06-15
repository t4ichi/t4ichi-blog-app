import type { Meta, StoryObj } from "@storybook/react";
import { RamenSearchForm } from "./ramen-search-form";

const meta: Meta<typeof RamenSearchForm> = {
  component: RamenSearchForm,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "ラーメン検索フォームコンポーネント。URLのクエリパラメータ(q)を直接操作します。Enterキーまたはフォーム送信で検索を実行します。",
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      description: "プレースホルダーテキスト",
      control: "text",
    },
    className: {
      description: "追加のCSSクラス",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomPlaceholder: Story = {
  args: {
    placeholder: "ラーメンの名前や特徴を入力...",
  },
};

export const WithCustomClass: Story = {
  args: {
    className: "w-96",
  },
};
