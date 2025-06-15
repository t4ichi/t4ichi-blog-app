import type { Meta, StoryObj } from "@storybook/react";
import type { Ramen } from "../../types";
import { RamenCard } from "./ramen-card";

const meta: Meta<typeof RamenCard> = {
  component: RamenCard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div className="max-w-sm">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof RamenCard>;

const mockRamenBase: Ramen = {
  id: "ramen-1",
  title: "家系ラーメン 横浜家",
  description:
    "豚骨醤油ベースの濃厚なスープが自慢の老舗ラーメン店。チャーシューは厚切りで食べ応え抜群。",
  images: [
    {
      url: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=400&h=300&fit=crop",
      width: 400,
      height: 300,
    },
  ],
  visitDate: "2024-01-15T10:30:00Z",
  tags: ["家系", "豚骨", "醤油"],
  googleMapUrl: "https://maps.google.com/example",
  tabelogUrl: "https://tabelog.com/example",
  rating: 4.5,
  price: 850,
  createdAt: "2024-01-15T10:30:00Z",
  updatedAt: "2024-01-15T10:30:00Z",
  publishedAt: "2024-01-15T10:30:00Z",
  revisedAt: "2024-01-15T10:30:00Z",
};

export const Default: Story = {
  render: () => {
    return <RamenCard ramen={mockRamenBase} />;
  },
};

export const WithoutImage: Story = {
  render: () => {
    const ramen: Ramen = {
      ...mockRamenBase,
      images: undefined,
    };
    return <RamenCard ramen={ramen} />;
  },
};

export const MinimalInfo: Story = {
  render: () => {
    const ramen: Ramen = {
      ...mockRamenBase,
      description: undefined,
      images: undefined,
      visitDate: undefined,
      tags: undefined,
      googleMapUrl: undefined,
      tabelogUrl: undefined,
      rating: undefined,
      price: undefined,
    };
    return <RamenCard ramen={ramen} />;
  },
};

export const LongTitle: Story = {
  render: () => {
    const ramen: Ramen = {
      ...mockRamenBase,
      title:
        "とても長いラーメン店の名前でタイトルが2行になってしまうケースのテスト用データ",
    };
    return <RamenCard ramen={ramen} />;
  },
};

export const LongDescription: Story = {
  render: () => {
    const ramen: Ramen = {
      ...mockRamenBase,
      description:
        "こちらは非常に長い説明文のテストです。ラーメンの詳細な説明が続きます。スープの味わい、麺の食感、具材の種類など、詳しく書かれた説明文が3行を超えて省略されるかどうかをテストするためのデータです。",
    };
    return <RamenCard ramen={ramen} />;
  },
};

export const AllTags: Story = {
  render: () => {
    const ramen: Ramen = {
      ...mockRamenBase,
      tags: [
        "ラーメン",
        "油そば",
        "つけ麺",
        "家系",
        "二郎系",
        "担々麺",
        "味噌",
        "醤油",
        "塩",
        "豚骨",
      ],
    };
    return <RamenCard ramen={ramen} />;
  },
};

export const HighRating: Story = {
  render: () => {
    const ramen: Ramen = {
      ...mockRamenBase,
      rating: 5,
    };
    return <RamenCard ramen={ramen} />;
  },
};

export const LowRating: Story = {
  render: () => {
    const ramen: Ramen = {
      ...mockRamenBase,
      rating: 2,
    };
    return <RamenCard ramen={ramen} />;
  },
};

export const ExpensiveRamen: Story = {
  render: () => {
    const ramen: Ramen = {
      ...mockRamenBase,
      title: "高級ラーメン 匠",
      price: 2800,
      rating: 4.8,
    };
    return <RamenCard ramen={ramen} />;
  },
};

export const OnlyGoogleMap: Story = {
  render: () => {
    const ramen: Ramen = {
      ...mockRamenBase,
      tabelogUrl: undefined,
    };
    return <RamenCard ramen={ramen} />;
  },
};

export const OnlyTabelog: Story = {
  render: () => {
    const ramen: Ramen = {
      ...mockRamenBase,
      googleMapUrl: undefined,
    };
    return <RamenCard ramen={ramen} />;
  },
};
