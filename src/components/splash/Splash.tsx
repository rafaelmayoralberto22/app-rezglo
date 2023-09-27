import { Image, Space } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../hooks/useGlobalStore";
import { api } from "../../services/api";

export const Splash = () => {
  const { setChannelsAndUsers, setLoadingData } = useStore((store) => ({
    setChannelsAndUsers: store.setChannelsAndUsers,
    setLoadingData: store.setLoadingData,
  }));
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      const [channels, users] = await Promise.all([
        api.loadChannels(),
        api.loadUsers(),
      ]);

      setChannelsAndUsers(channels, users);
      navigate("/chat");

      setTimeout(() => {
        setLoadingData(false);
      }, 50);
    };

    loadData();
  }, []);

  return (
    <Space direction="vertical" align="center">
      <Image
        width={200}
        src="logo.png"
        className="rounded-full"
        preview={false}
      />

      <div className="splash-content">
        <div className="splash-content__container">
          <p className="splash-content__container__text">Loading</p>
          <ul className="splash-content__container__list">
            <li className="splash-content__container__list__item"> Chat !</li>
            <li className="splash-content__container__list__item">
              Channels !
            </li>
            <li className="splash-content__container__list__item"> Users !</li>
            <li className="splash-content__container__list__item"> Avatar !</li>
          </ul>
        </div>
      </div>
    </Space>
  );
};
