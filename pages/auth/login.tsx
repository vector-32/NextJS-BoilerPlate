import { Field, Form, Formik } from "formik";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../../contexts/authContext";
import * as Yup from "yup";
import { Button } from "@chakra-ui/react";
import CusInput from "../../components/inputComponent";

export default function Login() {
	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.email("Invalid Email")
			.required("Email is required"),
		password: Yup.string()
			.min(6, "Password must be at least 6 characters")
			.required("Password is required"),
	});

	const router = useRouter();
	const { user, login } = useAuth();

	useEffect(() => {
		if (user?.logged == true) {
			router.push("/");
		}
	}, [user]);

	return (
		<>
			<Head>
				<title>Login Page</title>
			</Head>
			<div>
				<h1 style={{ textAlign: "center", fontSize: "2.5rem" }}>
					Login Page
				</h1>
			</div>
			<br />
			<Formik
				initialValues={{ email: "", password: "" }}
				validationSchema={validationSchema}
				onSubmit={(values, actions) => {
					if (login) login(values.email, values.password);
				}}
			>
				{(formProps) => (
					<Form style={{ maxWidth: "30vw", margin: "auto" }}>
						<CusInput
							name="email"
							disName="Email Address"
							placeholder="Email Address"
							type="email"
						/>
						<br />
						<CusInput
							name="password"
							disName="Password"
							placeholder="Password"
							type="password"
						/>
						<Button
							mt={4}
							colorScheme="teal"
							isLoading={formProps.isSubmitting}
							type="submit"
						>
							Submit
						</Button>
					</Form>
				)}
			</Formik>
		</>
	);
}
