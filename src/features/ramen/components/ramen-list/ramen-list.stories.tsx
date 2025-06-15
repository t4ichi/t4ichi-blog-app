import type { Meta, StoryObj } from "@storybook/react";
import type { Ramen } from "../../types";
import { RamenList } from "./ramen-list";

const meta: Meta<typeof RamenList> = {
  component: RamenList,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="p-8 bg-white">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof RamenList>;

const createMockRamen = (
  id: string,
  overrides: Partial<Ramen> = {},
): Ramen => ({
  id,
  title: `ラーメン店 ${id}`,
  description: "美味しいラーメンを提供するお店です。",
  images: [
    {
      url: `https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=400&h=300&fit=crop&seed=${id}`,
      width: 400,
      height: 300,
    },
  ],
  visitDate: "2024-01-15T10:30:00Z",
  tags: ["ラーメン", "醤油"],
  googleMapUrl: "https://maps.google.com/example",
  tabelogUrl: "https://tabelog.com/example",
  rating: 4,
  price: 800,
  createdAt: "2024-01-15T10:30:00Z",
  updatedAt: "2024-01-15T10:30:00Z",
  publishedAt: "2024-01-15T10:30:00Z",
  revisedAt: "2024-01-15T10:30:00Z",
  ...overrides,
});

const mockRamens: Ramen[] = [
  createMockRamen("1", {
    title: "家系ラーメン 横浜家",
    description: "豚骨醤油ベースの濃厚なスープが自慢の老舗ラーメン店。",
    tags: ["家系", "豚骨", "醤油"],
    rating: 4.5,
    price: 850,
  }),
  createMockRamen("2", {
    title: "つけ麺 道",
    description: "魚介系の濃厚つけ汁と太麺の組み合わせが絶品。",
    tags: ["つけ麺", "魚介"],
    rating: 4.2,
    price: 950,
  }),
  createMockRamen("3", {
    title: "二郎系ラーメン 極",
    description: "ボリューム満点の二郎系ラーメン。ニンニク、ヤサイマシマシで。",
    tags: ["二郎系", "大盛り"],
    rating: 4.0,
    price: 750,
  }),
  createMockRamen("4", {
    title: "味噌ラーメン 北海道",
    description: "北海道産の味噌を使用した本格的な味噌ラーメン。",
    tags: ["味噌", "北海道"],
    rating: 4.3,
    price: 880,
  }),
  createMockRamen("5", {
    title: "塩ラーメン 清湯",
    description: "澄んだスープが美しい、あっさり系の塩ラーメン。",
    tags: ["塩", "あっさり"],
    rating: 4.1,
    price: 780,
  }),
  createMockRamen("6", {
    title: "担々麺 四川",
    description: "本格的な四川風担々麺。辛さの調整も可能です。",
    tags: ["担々麺", "辛い"],
    rating: 4.4,
    price: 920,
  }),
];

export const Default: Story = {
  render: () => {
    return <RamenList ramens={mockRamens.slice(0, 3)} />;
  },
};

export const Empty: Story = {
  render: () => {
    return <RamenList ramens={[]} />;
  },
};

export const SingleItem: Story = {
  render: () => {
    return <RamenList ramens={[mockRamens[0]]} />;
  },
};

export const TwoItems: Story = {
  render: () => {
    return <RamenList ramens={mockRamens.slice(0, 2)} />;
  },
};

export const FullGrid: Story = {
  render: () => {
    return <RamenList ramens={mockRamens} />;
  },
};

export const ManyItems: Story = {
  render: () => {
    const manyRamens = Array.from({ length: 12 }, (_, i) =>
      createMockRamen(`many-${i + 1}`, {
        title: `ラーメン店 ${i + 1}`,
        rating: Math.random() * 2 + 3, // 3-5の範囲
        price: Math.floor(Math.random() * 500) + 600, // 600-1100の範囲
      }),
    );
    return <RamenList ramens={manyRamens} />;
  },
};

export const VariedContent: Story = {
  render: () => {
    const variedRamens: Ramen[] = [
      createMockRamen("varied-1", {
        title: "画像なしのラーメン店",
        images: undefined,
        description: "画像がない場合のテスト",
      }),
      createMockRamen("varied-2", {
        title:
          "とても長いタイトルのラーメン店でタイトルが2行になってしまうケース",
        description:
          "非常に長い説明文のテストです。ラーメンの詳細な説明が続きます。スープの味わい、麺の食感、具材の種類など、詳しく書かれた説明文が3行を超えて省略されるかどうかをテストするためのデータです。",
        tags: ["ラーメン", "油そば", "つけ麺", "家系", "二郎系"],
      }),
      createMockRamen("varied-3", {
        title: "最小限の情報",
        description: undefined,
        images: undefined,
        tags: undefined,
        rating: undefined,
        price: undefined,
        googleMapUrl: undefined,
        tabelogUrl: undefined,
      }),
    ];
    return <RamenList ramens={variedRamens} />;
  },
};
