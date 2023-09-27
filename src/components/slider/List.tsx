import { Row } from "antd";
import { FC } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useStore } from "../../hooks/useGlobalStore";

import "react-perfect-scrollbar/dist/css/styles.css";

type Props = {
  type: "channel" | "user";
  items: { id: number; name: string }[];
  beforeIcon: JSX.Element;
  afterIcon?: JSX.Element;
  onClickAfterIcon?: (id: number) => void;
};

const List: FC<Props> = ({
  items,
  beforeIcon,
  afterIcon,
  type,
  onClickAfterIcon,
}) => {
  const onSelected = useStore((store) => store.onSelected);

  return (
    <PerfectScrollbar options={{ suppressScrollX: true }}>
      <ul className="px-2">
        {items.map(({ id, name }) => (
          <Row
            key={id}
            align="middle"
            style={{ height: 20 }}
            className="hover-state mb-4"
            onClick={() => onSelected({ id, type })}
          >
            {beforeIcon}
            <span
              className="collapse-text"
              style={{ width: `calc(100% - ${afterIcon ? "60px" : "30px"})` }}
            >
              {name}
            </span>
            <span onClick={() => onClickAfterIcon?.(id)}>{afterIcon}</span>
          </Row>
        ))}
      </ul>
    </PerfectScrollbar>
  );
};

export default List;
