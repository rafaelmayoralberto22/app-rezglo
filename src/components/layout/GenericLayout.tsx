import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { FC } from "react";

type Props = {
  sider: JSX.Element;
  content: JSX.Element;
};
const GenericLayout: FC<Props> = ({ sider, content }) => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header>Header</Header>
      <Layout hasSider>
        <Sider>{sider}</Sider>
        <Content>{content}</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default GenericLayout;
