import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

type PropsType = {
  data: FetchBaseQueryError | SerializedError;
};

const Error = ({ data }: PropsType) => {
  return (
    <div className="bg-red-500 p-4 rounded-lg">
      <h1>{(data as FetchBaseQueryError)?.status || "Unknown Error"}</h1>
      <h1>Sorry there was an error</h1>
    </div>
  );
};

export default Error;
