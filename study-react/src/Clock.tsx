import { FC } from "react";
interface Props {
  color: string;
  time: Date;
}

const Clock: FC<Props> = (props: Props) => {
  return (
    <h1 style={{ color: props.color }}>{props.time.toLocaleTimeString()}</h1>
  );
};

export default Clock;
