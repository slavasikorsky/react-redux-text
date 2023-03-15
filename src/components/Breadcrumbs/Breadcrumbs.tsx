import * as React from "react";

import { Breadcrumb } from "antd";

type Props = {};

const Breadcrumbs = (props: Props) => {
	return (
		<Breadcrumb style={{ margin: "16px 0" }}>
			<Breadcrumb.Item>Home</Breadcrumb.Item>
			<Breadcrumb.Item>List</Breadcrumb.Item>
			<Breadcrumb.Item>App</Breadcrumb.Item>
		</Breadcrumb>
	);
};

export default Breadcrumbs;
