import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
} from "@chakra-ui/react";
import { Field } from "formik";

const CusInput = (props: {
	name: string;
	type: string;
	placeholder: string;
	disName: string;
}) => (
	<Field name={props.name}>
		{({ field, form }: any) => (
			<FormControl
				isInvalid={form.errors[props.name] && form.touched[props.name]}
			>
				<FormLabel htmlFor={props.name}>{props.disName}</FormLabel>
				<Input
					{...field}
					id={props.name}
					type={props.type}
					placeholder={props.placeholder}
				/>
				<FormErrorMessage>{form.errors[props.name]}</FormErrorMessage>
			</FormControl>
		)}
	</Field>
);

export default CusInput;
