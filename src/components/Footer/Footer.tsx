import * as React from "react";

import { Layout } from "antd";

const { Footer: LayoutFooter } = Layout;
type Props = {};

const Footer = (props: Props) => {
	return (
		<LayoutFooter style={{ textAlign: "center" }}>
			Ant Design ©2023
		</LayoutFooter>
	);
};

export default Footer;
