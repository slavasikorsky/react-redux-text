import * as React from "react";
import { Routes, Route } from "react-router-dom";

import PublicLayout from "../layouts";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

type Props = {};
const Router = (props: Props) => {
	return (
		<Routes>
			<Route element={<PublicLayout />}>
				<Route index element={<Home />} />
				<Route path="contact" element={<Contact />} />
			</Route>
		</Routes>
	);
};

export default Router;
