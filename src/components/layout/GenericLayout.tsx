import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { FC } from "react";
import GenericFooter from "./GenericFooter";
import GenericHeader from "./GenericHeader";

import "../../assets/css/layout.css";

type Props = {
  sider: JSX.Element;
  content: JSX.Element;
};
const GenericLayout: FC<Props> = ({ sider, content }) => {
  return (
    <Layout style={{ height: "100vh" }}>
      <GenericHeader />
      <Layout hasSider>
        <Sider className="slider layout-content">{sider}</Sider>
        <Content className="layout-content">{content}</Content>
      </Layout>
      <GenericFooter />
    </Layout>
  );
};

export default GenericLayout;
