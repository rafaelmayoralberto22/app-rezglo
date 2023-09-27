import { Footer } from "antd/es/layout/layout";

const GenericFooter = () => {
  const year = new Date();

  return (
    <Footer className="footer layout-content">
      <div>
        <span>©&nbsp;{year.getFullYear()}&nbsp;</span>
        <span>.&nbsp; </span>
        <span>All Rights Reserved</span>
      </div>
    </Footer>
  );
};

export default GenericFooter;
