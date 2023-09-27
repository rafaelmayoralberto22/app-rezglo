import { Transfer } from "antd";
import { FC, useMemo } from "react";
import { useStore } from "../../hooks/useGlobalStore";

type Props = {
  users: string[];
  handleChange: (keys: string[]) => void;
};

const SliderChannelPlusUsersSelector: FC<Props> = ({ users, handleChange }) => {
  const channelsUsers = useStore((store) => store.channelsUsers);

  const dataSource = useMemo(
    () =>
      channelsUsers.map(({ username }) => ({ key: username, title: username })),
    [channelsUsers]
  );

  return (
    <Transfer
      targetKeys={users}
      dataSource={dataSource}
      onChange={handleChange}
      render={(item) => item.title}
    />
  );
};

export default SliderChannelPlusUsersSelector;
