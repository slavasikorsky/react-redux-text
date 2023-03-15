import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";

import { Layout, theme } from "antd";

const { Content } = Layout;

type Props = {};

const PublicLayout = (props: Props) => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Layout style={{ height: "100vh" }}>
			<Header />
			<Content className="site-layout" style={{ padding: "0 50px" }}>
				<Breadcrumbs />
				<div
					style={{
						padding: 30,
						minHeight: "100%",
						background: colorBgContainer,
					}}
				>
					<Outlet />
				</div>
			</Content>
			<Footer />
		</Layout>
	);
};

export default PublicLayout;
