import type { Meta, StoryObj } from "@storybook/react";
import { SampleButton } from "./sample-button";

const meta: Meta<typeof SampleButton> = {
  component: SampleButton,
};
export default meta;

type Story = StoryObj<typeof SampleButton>;

export const Default: Story = {
  render: () => <SampleButton>Click me</SampleButton>,
};
