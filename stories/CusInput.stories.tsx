import { ComponentMeta } from "@storybook/react";
import CusInput from "../components/inputComponent";

export default {
	title: "Example/Input",
	component: CusInput,
} as ComponentMeta<typeof CusInput>;

const template: any = (args: any) => <CusInput {...args} />;

export const DefaultInput = template.bind({});
DefaultInput.args = {
	name: "email",
	disName: "Email Address",
	placeholder: "Email Address",
	type: "email",
};
