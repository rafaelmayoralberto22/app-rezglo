import { Card, Image, Row } from "antd";
import { FC } from "react";
import { Message } from "../../type";
import { Typography } from "antd";
import { proccessTimestamp } from "../../helpers";

const { Title, Paragraph, Text } = Typography;

const ChatHistoryItem: FC<Message & { isCurrentUser: boolean }> = ({
  avatar,
  username,
  message,
  timestamp,
  isCurrentUser,
}) => {
  const time = proccessTimestamp(+timestamp);

  return (
    <Card
      bordered={false}
      bodyStyle={{ padding: "10px 20px" }}
      style={{ width: 400, background: isCurrentUser ? "#757575" : "#fff" }}
    >
      <Row align="middle">
        <Image
          width={50}
          src={avatar}
          className="rounded-full mb-4"
          preview={false}
        />
        <Title level={5} style={{ marginTop: 0 }}>
          {username}
        </Title>
      </Row>
      <Paragraph>{message}</Paragraph>

      <Row align="middle" justify="end">
        <Text strong>{time}</Text>
      </Row>
    </Card>
  );
};

export default ChatHistoryItem;
