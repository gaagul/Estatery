import React from "react";
import { Field } from "formik";
import { Typography } from "antd";

const { Title } = Typography;

const AdditionalInfo = () => (
  <div className="rounded bg-white p-4 pb-8 shadow">
    <Title className="mb-4" level={2}>
      Additional information
    </Title>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <Typography
          className="mb-2 block font-semibold text-gray-700"
          htmlFor="price"
        >
          Price (Per Month if for Rent)
        </Typography>
        <Field
          className="w-full rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          id="price"
          name="price"
          type="text"
        />
      </div>
      <div>
        <Typography
          className="mb-2 block font-semibold text-gray-700"
          htmlFor="type"
        >
          Type (Rent or Sale)
        </Typography>
        <Field
          className="w-full rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          id="type"
          name="type"
          type="text"
        />
      </div>
      <div>
        <Typography
          className="mb-2 block font-semibold text-gray-700"
          htmlFor="description"
        >
          Description
        </Typography>
        <Field
          className="w-full rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          id="description"
          name="description"
          type="text"
        />
      </div>
      <div>
        <Typography
          className="mb-2 block font-semibold text-gray-700"
          htmlFor="bedrooms"
        >
          Amneties (separate by comma)
        </Typography>
        <Field
          className="w-full rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          id="amneties"
          name="amneties"
          type="text"
        />
      </div>
    </div>
  </div>
);

export default AdditionalInfo;
