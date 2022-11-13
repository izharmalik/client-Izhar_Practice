import React from "react";

export const Row = (props) => {
  return props?.data?.map((data) => (
    <div key={data?.id} className="py-3 px-5 grid grid-cols-6 gap-2 border-b-2 items-center">
      <div className="flex items-center gap-3">
        {data?.image ? (
          <img
            src={data?.image}
            className="w-10 h-10 rounded-full"
            alt={data?.name}
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-green-100 text-green-500 text-sm uppercase font-semibold flex justify-center items-center">
            Jd
          </div>
        )}
        <div className="">
          <p className="tex-md text-purple-500">{data?.name}</p>
          <p className="text-sm text-slate-300">Student</p>
        </div>
      </div>
      <p className="text-sm text-slate-500">{data?.email}</p>
      <p className="text-sm text-slate-500 capitalize">{data?.role}</p>
      <p className="text-sm text-slate-500 capitalize">{data?.plan}</p>
      <p
        className={`text-sm text-slate-500 capitalize px-2 py-1 w-max rounded-xl ${
          data?.status === "active"
            ? "bg-green-200 text-green-500 "
            : data?.status === "pending"
            ? "bg-orange-100 text-orange-500"
            : "bg-slate-200 text-slate-500"
        }`}
      >
        {data?.status}
      </p>
      <div className="">action</div>
    </div>
  ));
};
