import React from "react";
import { urlFor } from "../sanity";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface Props {
  items: Product[];
  id: string;
}
const CheckoutProducts = ({ id, items }: Props) => {
  return (
    <div>
      <div className="relative h-44 w-44">
        <Image
          src={urlFor(items[0].image[0]).url()}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex flex-1 items-end lg:items-center">
        <div className="flex-1 space-y-4">
          <div className="flex flex-col gap-x-8 text-xl lg:flex-row lg:text-2xl">
            <h4 className="font-semibold lg:w-96 ">{items[0].title}</h4>
            <p className="flex items-end gap-x-2 font-bold">
              {items.length}
              <ChevronDownIcon className="w-7 h-7 text-blue-500" />
            </p>
          </div>

          <p className="flex cursor-pointer items-end text-blue-500">
            Show products details:
            <ChevronDownIcon className="w-6 h-6 text-blue-500" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProducts;
