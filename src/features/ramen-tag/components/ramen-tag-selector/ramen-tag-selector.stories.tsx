import type { Meta, StoryObj } from "@storybook/react";
import type { RamenTag } from "../../types";
import { RamenTagSelector } from "./ramen-tag-selector";

const mockTags: RamenTag[] = [
  {
    id: "1",
    createdAt: "2025-06-15T00:00:00.000Z",
    updatedAt: "2025-06-15T00:00:00.000Z",
    publishedAt: "2025-06-15T00:00:00.000Z",
    revisedAt: "2025-06-15T00:00:00.000Z",
    name: "ラーメン",
    category: ["type"],
    description: "基本的なラーメン",
  },
  {
    id: "2",
    createdAt: "2025-06-15T00:00:00.000Z",
    updatedAt: "2025-06-15T00:00:00.000Z",
    publishedAt: "2025-06-15T00:00:00.000Z",
    revisedAt: "2025-06-15T00:00:00.000Z",
    name: "つけ麺",
    category: ["type"],
    description: "つけ麺スタイル",
  },
  {
    id: "3",
    createdAt: "2025-06-15T00:00:00.000Z",
    updatedAt: "2025-06-15T00:00:00.000Z",
    publishedAt: "2025-06-15T00:00:00.000Z",
    revisedAt: "2025-06-15T00:00:00.000Z",
    name: "家系",
    category: ["type"],
    description: "家系ラーメン",
  },
  {
    id: "4",
    createdAt: "2025-06-15T00:00:00.000Z",
    updatedAt: "2025-06-15T00:00:00.000Z",
    publishedAt: "2025-06-15T00:00:00.000Z",
    revisedAt: "2025-06-15T00:00:00.000Z",
    name: "新宿",
    category: ["area"],
    description: "新宿エリア",
  },
  {
    id: "5",
    createdAt: "2025-06-15T00:00:00.000Z",
    updatedAt: "2025-06-15T00:00:00.000Z",
    publishedAt: "2025-06-15T00:00:00.000Z",
    revisedAt: "2025-06-15T00:00:00.000Z",
    name: "渋谷",
    category: ["area"],
    description: "渋谷エリア",
  },
  {
    id: "6",
    createdAt: "2025-06-15T00:00:00.000Z",
    updatedAt: "2025-06-15T00:00:00.000Z",
    publishedAt: "2025-06-15T00:00:00.000Z",
    revisedAt: "2025-06-15T00:00:00.000Z",
    name: "辛い",
    category: ["taste"],
    description: "辛味のある味",
  },
  {
    id: "7",
    createdAt: "2025-06-15T00:00:00.000Z",
    updatedAt: "2025-06-15T00:00:00.000Z",
    publishedAt: "2025-06-15T00:00:00.000Z",
    revisedAt: "2025-06-15T00:00:00.000Z",
    name: "濃厚",
    category: ["taste"],
    description: "濃厚なスープ",
  },
  {
    id: "8",
    createdAt: "2025-06-15T00:00:00.000Z",
    updatedAt: "2025-06-15T00:00:00.000Z",
    publishedAt: "2025-06-15T00:00:00.000Z",
    revisedAt: "2025-06-15T00:00:00.000Z",
    name: "コスパ良し",
    category: ["price"],
    description: "コストパフォーマンスが良い",
  },
  {
    id: "9",
    createdAt: "2025-06-15T00:00:00.000Z",
    updatedAt: "2025-06-15T00:00:00.000Z",
    publishedAt: "2025-06-15T00:00:00.000Z",
    revisedAt: "2025-06-15T00:00:00.000Z",
    name: "落ち着く",
    category: ["atmosphere"],
    description: "落ち着いた雰囲気",
  },
  {
    id: "10",
    createdAt: "2025-06-15T00:00:00.000Z",
    updatedAt: "2025-06-15T00:00:00.000Z",
    publishedAt: "2025-06-15T00:00:00.000Z",
    revisedAt: "2025-06-15T00:00:00.000Z",
    name: "二郎系",
    category: ["type", "feature"],
    description: "二郎系ラーメン",
  },
];

const meta: Meta<typeof RamenTagSelector> = {
  component: RamenTagSelector,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "ラーメンタグ選択コンポーネント。カテゴリ別にタグを表示し、複数選択が可能です。URLのクエリパラメータ(tags)を直接操作します。",
      },
    },
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/ramens",
        query: {},
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    tags: {
      description: "表示するタグの配列",
    },
    selectedTagIds: {
      description: "選択済みのタグIDの配列",
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
  args: {
    tags: mockTags,
    selectedTagIds: [],
  },
};

export const WithSelectedTags: Story = {
  args: {
    tags: mockTags,
    selectedTagIds: ["1", "4"], // ラーメンと新宿を選択済み
  },
};

export const WithManyTags: Story = {
  args: {
    tags: [
      ...mockTags,
      ...Array.from({ length: 15 }, (_, i) => ({
        id: `tag-${i + 11}`,
        createdAt: "2025-06-15T00:00:00.000Z",
        updatedAt: "2025-06-15T00:00:00.000Z",
        publishedAt: "2025-06-15T00:00:00.000Z",
        revisedAt: "2025-06-15T00:00:00.000Z",
        name: `サンプルタグ${i + 1}`,
        category: ["feature" as const],
        description: `サンプルタグ${i + 1}の説明`,
      })),
    ],
    selectedTagIds: [],
  },
};
