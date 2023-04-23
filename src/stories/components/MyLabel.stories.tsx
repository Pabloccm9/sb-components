import { Meta, StoryObj } from "@storybook/react";
import { MyLabel, MyLabelProps } from "../../components/MyLabel";

const meta = {
    title: 'UI/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    argTypes: {
    //   label: {control: "label"},
    //   size: {control: "size"},
    color: {control: "select"},
    // color: {control: "select", options: [] //opciones que queramos mostrar}
    fontColor: {control: "color"}
    },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        label: 'Button',
        size: 'normal',
        allCaps: true
    },
};

export const AllCaps: Story = {
    args: {
        size: 'h3',
        allCaps: true
    },
};

export const Secondary: Story = {
    args: {
        size: 'normal',
        color: 'secondary',
    },
};

export const Tertiary: Story = {
    args: {
        size: 'normal',
        color: 'tertiary',
    },
};

export const CustomFontColor: Story = {
    args: {
        size: "h1"
    }
}
// export const AllCaps =  Template.bind({})

// export const Secondary =  Template.bind({})