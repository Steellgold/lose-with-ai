import type { ReactElement } from "react";

type Props = {
  params: {
    id: string;
  };
};

const AppGen = ({ params }: Props): ReactElement => {
  return (
    <>
      {params.id}
    </>
  );
};

export default AppGen;