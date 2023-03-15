import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header: LayoutHeader } = Layout;
type Props = {};

const Header = (props: Props) => {
	const location = useLocation();
	return (
		<LayoutHeader
			style={{
				display: "flex",
				position: "sticky",
				top: 0,
				zIndex: 1,
				width: "100%",
			}}
		>
			<Link
				to="/"
				style={{
					background: "purple",
					padding: "0 20px",
					margin: "0 40px 0 20px",
					color: "#fff",
				}}
			>
				Logo
			</Link>
			<Menu
				theme="dark"
				mode="horizontal"
				selectedKeys={[location.pathname]}
				key={location.pathname}
			>
				<Menu.Item key={"/"}>
					<Link to="/">Home</Link>
				</Menu.Item>
				<Menu.Item key={"/contact"}>
					<Link to="/contact">Contact</Link>
				</Menu.Item>
			</Menu>
		</LayoutHeader>
	);
};

export default Header;
